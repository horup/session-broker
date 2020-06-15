import * as WebSocket from 'ws';
import config from '../config';
import {info as _info} from '../log';
const info = _info.extend('server');

const wss = new WebSocket.Server({
    port:config.PORT
})

info(`Starting WebSocket server on port ${wss.options.port}`);

wss.on('connection', (ws)=>{
    info(`Client connected`);
    ws.send('hello world!');

    ws.on('message', (msg)=>{
    });
    ws.on(`close`, (ws)=>{
        info(`Client disconnected`);
    })
});
