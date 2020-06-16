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
        const serverMsg = new ServerMsg({
            welcomeMsg:{
                clientId:clientId
            }
        });

        ws.send(ServerMsg.encode(serverMsg).finish());
    }
})

redis.subscribeDisconnect((clientId)=>{
    info(`${clientId} has disconnected`);
    const ws = localClientSockets.get(clientId);
    if (ws != null)
        localClientIds.delete(ws);
    localClientSockets.delete(clientId);
})

redis.subscribeSessionAccept((sessionAccept)=>{
    info(`${sessionAccept.clientId} is has joined ${sessionAccept.name}(${sessionAccept.sessionid}) with owner:${sessionAccept.owner}`);
})

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
            const sessionId = await redis.newId();
            const name = msg.createSession.name ? msg.createSession.name :"New Session";
            const password = msg.createSession.password ? msg.createSession.password : "";
            const owner = localClientIds.get(ws);
            redis.publishNewSession({id:sessionId, name:name, password:password, owner:owner});
/*
            ws.send(ServerMsg.encode(new ServerMsg({
                sessionAccept:{
                    ownerId:owner,
                    sesionId:sessionId,
                    name:name
                }
            })).finish());*/
        }
        else if (msg.joinSession)
        {
           // if (msg.joinSession.sessionId)
             //   redis.publishJoin(clientId, msg.joinSession.sessionId as number);
          /*  redis.publishNewSession({id:sessionId, name:name, password:password, owner:owner});

            ws.send(ServerMsg.encode(new ServerMsg({
                sessionAccept:{
                    ownerId:owner,
                    sesionId:sessionId,
                    name:name
                }
            })).finish());*/
        }
    });
    ws.on(`close`, ()=>{
        if (clientId)
            redis.publishDisconnect(clientId);
       /* 
        info(`Client disconnected`);
        if (clientId != null)
        {
            localClientSockets.delete(clientId);
            redis.publishDisconnect(clientId);
        }

        localClientIds.delete(ws);*/
    })
});
