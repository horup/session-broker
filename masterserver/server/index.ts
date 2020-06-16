import * as WebSocket from 'ws';
import config from '../config';
import {info as _info} from '../log';
import {ClientMsg, ServerMsg} from '../proto';
import { Reader } from 'protobufjs';
import * as redis from '../redis';

const info = _info;//_info.extend('server');

const wss = new WebSocket.Server({
    port:config.PORT
})

info(`Starting WebSocket server on port ${wss.options.port}`);

const localClients = new Map<WebSocket, number>();


redis.subscribeConnect((clientId)=>{
    info(`${clientId} is now connected`);
})

redis.subscribeDisconnect((clientId)=>{
    info(`${clientId} is now disconnected`);
})

wss.on('connection', (ws)=>{
    info(`Client connected`);
    let clientId = undefined;
    ws.on('message', async (data)=>{
        const r = new Reader(data as any);
        const msg = ClientMsg.decode(r);
        if (msg.connect)
        {
            clientId = await redis.newClientId();
            info(`Connect received, assigned client id of ${clientId}`);
            localClients.set(ws, clientId);
            redis.publishConnect(clientId);
            
            const serverMsg = new ServerMsg({
                welcomeMsg:{
                    clientId:clientId
                }
            });

            ws.send(ServerMsg.encode(serverMsg).finish());
        }
    });
    ws.on(`close`, ()=>{
        info(`Client disconnected`);
        if (clientId != null)
        {
            redis.publishDisconnect(clientId);
        }

        localClients.delete(ws);
    })
});
