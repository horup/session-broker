import * as WebSocket from 'ws';
const wss = new WebSocket.Server({
    port:8080
})

wss.on('connection', (ws)=>{
    console.log("client connected");
    ws.on('message', (msg)=>{

    })

    ws.send('hello world');
})
