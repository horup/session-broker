import * as WebSocket from 'ws';
import config from '../config';
import {info as _info} from '../log';
import {ClientMsg, ServerMsg} from '../proto';
import { Reader } from 'protobufjs';
import * as redis from '../redis';

const info = _info.extend('client-manager');

const wss = new WebSocket.Server({
    port:config.PORT
})

info(`Starting WebSocket server on port ${wss.options.port}`);

const localClientIds = new Map<WebSocket, number>();
const localClientSockets = new Map<number, WebSocket>();

redis.subscribeConnect((clientId)=>{
    info(`${clientId} has connected`);

    const ws = localClientSockets.get(clientId);
    if (ws != null)
    {
        redis.setClient(clientId);
        const serverMsg = new ServerMsg({
            welcomeMsg:{
                clientId:clientId
            }
        });

        ws.send(ServerMsg.encode(serverMsg).finish());
        sendSessions(ws);
    }
})

redis.subscribeDisconnect((clientId)=>{
    info.extend(`subscribeDisconnect`)(`${clientId} has disconnected`);
    const ws = localClientSockets.get(clientId);
    if (ws != null)
    {
        redis.delClient(clientId);
        localClientIds.delete(ws);
    }

    localClientSockets.delete(clientId);
})

redis.subscribeSessionAccept((sessionAccept)=>{
    info(`session accepted with ${JSON.stringify(sessionAccept)}`);

    const clientId = sessionAccept.clientId;
    const ws = localClientSockets.get(clientId);
    if (ws != null)
    {
        const serverMsg = new ServerMsg({
            sessionAccept:{
                name:sessionAccept.name,
                ownerId:sessionAccept.owner,
                sesionId:sessionAccept.sessionId
            }
        })

        ws.send(ServerMsg.encode(serverMsg).finish());
    }
})

async function sendSessions(ws:WebSocket)
{
    const sessions = await redis.getSessions();
    const msg = new ServerMsg({
        sessions:{
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
        const r = new Reader(data as any);
        const msg = ClientMsg.decode(r);
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
            redis.publishCreateSession({ name:name, password:password, owner:owner});
        }
        else if (msg.joinSession)
        {
            const sessionid = msg.joinSession.sessionId;
            if (sessionid != null)
            {
                redis.publishJoin({sessionId:sessionid as number, clientId:clientId})
            }
        }
    });
    ws.on(`close`, ()=>{
        if (clientId)
            redis.publishDisconnect(clientId);
    })
});
