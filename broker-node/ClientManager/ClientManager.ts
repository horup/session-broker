import * as WebSocket from 'ws';
import config from '../config';
import {info as _info} from '../log';
import {ClientMsg, ServerMsg} from 'shared';
import { Reader } from 'protobufjs';
import * as redis from '../redis';
import { Client } from '../redis';

const info = _info.extend('client-manager');

const wss = new WebSocket.Server({
    port:config.PORT
})

info(`Starting WebSocket server on port ${wss.options.port}`);

const localClientIds = new Map<WebSocket, number>();
const localClientSessionId = new Map<number, number>();
const localClientSockets = new Map<number, WebSocket>();
const subscribedToSession = new Map<number, number>();


redis.subscribeConnect((clientId)=>{
    info(`${clientId} has connected`);

    const ws = localClientSockets.get(clientId);
    if (ws != null)
    {
        redis.setClient(clientId, {id:clientId});
        const serverMsg = new ServerMsg({
            welcome:{
                clientId:clientId
            }
        });

        ws.send(ServerMsg.encode(serverMsg).finish());
        sendSessions(ws);
    }
})

redis.subscribeSessionChange((msg)=>{
    const s = msg.session;
    s.clients.forEach(cid=>{
        const ws = localClientSockets.get(cid);
        if (ws)
        {
            localClientSessionId.set(cid, msg.session.id);
            ws.send(ServerMsg.encode({currentSessionChanged:{session:msg.session}}).finish());
        }
    })
});

redis.subscribeDisconnect((clientId)=>{
    info.extend(`subscribeDisconnect`)(`${clientId} has disconnected`);
    const ws = localClientSockets.get(clientId);
    if (ws != null)
    {
        localClientSessionId.delete(clientId);
        redis.delClient(clientId);
        localClientIds.delete(ws);
    }

    localClientSockets.delete(clientId);
})


redis.subscribeSessionSwitch((sessionSwitch)=>{
    info(`session accepted with ${JSON.stringify(sessionSwitch)}`);

    const clientId = sessionSwitch.clientId;
    const ws = localClientSockets.get(clientId);
    if (ws != null)
    {
        const sessionid = sessionSwitch.session != null ? sessionSwitch.session.id : null;
        {
            const serverMsg = new ServerMsg({
                currentSessionChanged:{
                    session:sessionSwitch.session
                }
            })

            localClientSessionId.set(clientId, sessionid);
            redis.setClient(clientId, {id:clientId, session:sessionid});
            ws.send(ServerMsg.encode(serverMsg).finish());
        }


        // Local Client has joined a session, subscribe to it if not done already
        if (!subscribedToSession.has(sessionid))
        {
            info(`subscribed to local session with id ${sessionid}`);
            redis.subscribeApp(sessionid);
            subscribedToSession.set(sessionid, 1);
        }
        else
        {
            subscribedToSession.set(sessionid, subscribedToSession.get(sessionid) + 1);
        }
    }
})

redis.setAppReplyHandler(async (app)=>{
    localClientIds.forEach(async clientId=>{
        if (localClientSessionId.get(clientId) == app.sessionId)
        {

         /*   if (clientId == app.fromClientId && !app.loopback)
                return; // dont sent to client if sender == receiver and loopback is false*/
                
            if (app.toClientId != null && app.toClientId != clientId)
                return; // dont sent to client if the message is not intended for this client

            const ws = localClientSockets.get(clientId);
            if (ws)
            {
                ws.send(ServerMsg.encode({app:{
                    data:app.data,
                    from:app.fromClientId
                }}).finish())
            }
            
        }
    })
})


redis.subscribeSessionCreated(async (sessionCreated)=>{
    // send list of sessions for all clients
    localClientSockets.forEach(ws=>{
        sendSessions(ws);
    })
})


redis.subscribeSessionDeleted(async ()=>{
    // session deleted, transmit new list of avaliable sessions
    localClientSockets.forEach(ws=>{
        sendSessions(ws);
    })
})

async function sendSessions(ws:WebSocket)
{
    const sessions = await redis.getSessions();
    const msg = new ServerMsg({
        avaliableSessionsChanged:{
            sessions:sessions.map((s,i)=>{
                return {id:s.id, name:s.name, owner:s.owner, passwordProtected: s.password.length != 0}
            })
        }
    })

    ws.send(ServerMsg.encode(msg).finish())
}

wss.on('connection', (ws)=>{
    let clientId = undefined as number;
    ws.on('message', async (data)=>{
        const msg = ClientMsg.decode(data as any);
        if (msg.connect)
        {
            clientId = await redis.newId();
            localClientIds.set(ws, clientId);
            localClientSockets.set(clientId, ws);
            redis.publishConnect(clientId);
        }
        else if (msg.createSession)
        {
            const name = msg.createSession.name ? msg.createSession.name :"New Session";
            const password = msg.createSession.password ? msg.createSession.password : "";
            const owner = localClientIds.get(ws);
            redis.publishCreateSession({ name:name, password:password, owner:owner, nodeId:config.ID});
        }
        else if (msg.joinSession)
        {
            const sessionId = msg.joinSession.sessionId;
            if (sessionId != null)
            {
                redis.publishJoin({sessionId:sessionId as number, clientId:clientId})
            }
        }
        else if (msg.ping)
        {
            ws.send(ServerMsg.encode({
                pong:{
                    time:msg.ping.time
                }
            }).finish());
        }
        else if (msg.appMsg)
        {
    info(`appMsg:start`);
            
            // TODO: await might be slow, caching could be needed to improve
            const sessionId = localClientSessionId.get(clientId);//await redis.getClientSessionId(clientId);

            redis.publishApp({
                data:msg.appMsg.data,
                fromClientId:clientId,
                toClientId:msg.appMsg.to != 0 ? msg.appMsg.to : null,
                loopback:msg.appMsg.loopback,
                sessionId:sessionId
            })
            info(`appMsg:end`);


        }
        else if (msg.refreshSessions)
        {
            sendSessions(ws);
        }
    });
    ws.on(`close`, ()=>{
        if (clientId)
            redis.publishDisconnect(clientId);
    })
});


async function tick()
{

    try
    {
        localClientIds.forEach(async (id, ws)=>{
            {
                await redis.refreshClient(id);
            }
        });
    }
    catch
    {

    }
    finally
    {
        setTimeout(()=>tick(), 5000);
    }
}

tick();