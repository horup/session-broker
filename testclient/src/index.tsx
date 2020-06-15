import * as React from 'react';
import * as ReactDom from 'react-dom';
import {info} from './log';
import {Msg} from 'masterserver/proto';

const ws = new WebSocket('ws://localhost:8080');
ws.onopen = ()=>{
    info("connected");
    const msg = new Msg({
        connect:{

        }
    })

    const data = Msg.encode(msg).finish();
    ws.send(data);
}
ws.onmessage = (msg)=>{
    info(msg.data);
}
const Index = ()=>{

    return <div>
        Hello React
    </div>
}

ReactDom.render(<Index/>, document.getElementById('main'));
