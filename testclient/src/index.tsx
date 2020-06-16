import * as React from 'react';
import * as ReactDom from 'react-dom';
import {info} from './log';
import {ClientMsg, ServerMsg} from 'masterserver/proto';
import {Reader} from 'protobufjs';

const ws = new WebSocket('ws://localhost:8080');
ws.binaryType = "arraybuffer";
ws.onopen = ()=>{
    info("connected");
    const msg = new ClientMsg({
        connect:{

        }
    })

    const data = ClientMsg.encode(msg).finish();
    ws.send(data);
}
ws.onmessage = async (msg)=>{
    const buffer = msg.data as ArrayBuffer;
    const serverMsg = ServerMsg.decode(new Uint8Array(buffer));
    console.log(serverMsg);
   // console.log(serverMsg);
}


const Index = ()=>{
    const [sessionId, setSessionId] = React.useState<number>();
    const startSession = ()=>{
        const msg = new ClientMsg({
            
        })
    }
    const joinSession = ()=>{

    }
    return <div>
        <div>Session ID: {sessionId}</div>
        <button onClick={()=>startSession()}>Start Session</button>
        <button onClick={()=>joinSession()}>Join Session</button>
    </div>
}

ReactDom.render(<Index/>, document.getElementById('main'));
