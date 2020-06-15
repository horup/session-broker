import * as React from 'react';
import * as ReactDom from 'react-dom';
import {info} from './log';

const client = new WebSocket('ws://localhost:8080');
client.onopen = ()=>{
    info("connected");
}
client.onmessage = (msg)=>{
    info(msg.data);
}
const Index = ()=>{

    return <div>
        Hello React
    </div>
}

ReactDom.render(<Index/>, document.getElementById('main'));
