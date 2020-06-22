import * as React from 'react';
import * as ReactDom from 'react-dom';
import {info} from './log';
import {ClientMsg, ServerMsg, Session, ISession} from 'masterserver/proto';
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

const Index = ()=>{
    const [sessionId, setSessionId] = React.useState<number>();
    const [clientId, setClientId] = React.useState(0);
    const [sessions, setSessions] = React.useState([] as ISession[])
    const createSessionClick = ()=>{
        const name = prompt("Session Name", "New Session");
        const msg = new ClientMsg({
            createSession:{
                name:name
            }
        })

        ws.send(ClientMsg.encode(msg).finish());
    }
    const joinSessionClick = (forcedId?:number)=>{
        const id = forcedId == null ? prompt("Session ID", "") : forcedId.toString();
        const msg = new ClientMsg({
            joinSession:{
                sessionId:Number.parseInt(id)
            }
        })

        ws.send(ClientMsg.encode(msg).finish());
    }

    const refreshClick = ()=>{

    }

    React.useEffect(()=>{
        ws.onmessage = async (msg)=>{
            const buffer = msg.data as ArrayBuffer;
            const serverMsg = ServerMsg.decode(new Uint8Array(buffer));

            if (serverMsg.welcomeMsg)
            {
                setClientId(serverMsg.welcomeMsg.clientId as number);
            }
            else if (serverMsg.sessionAccept)
            {
                setSessionId(serverMsg.sessionAccept.sesionId as number);
            }
            else if (serverMsg.sessions)
            {
                setSessions(serverMsg.sessions.sessions);
            }
        }
    }, []);


    return <div>
        <div>Client ID: {clientId}</div>
        <div>Session ID: {sessionId}</div>
        <button onClick={()=>createSessionClick()}>Create Session</button>
        <button onClick={()=>joinSessionClick()}>Join Session</button>
        <button onClick={()=>refreshClick()}>Refresh</button>
        <br/>
        <br/>
        <b>Sessions: {sessions.length}</b>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {sessions.map((s,i)=>{
                    return  <tr key={i}>
                                <td>
                                    {s.id}
                                </td>
                                <td>
                                    {s.name}
                                </td>
                                <td>
                                    {s.passwordProtected == true ? "X" : ""}
                                </td>
                                <td>
                                <button onClick={()=>joinSessionClick(s.id)}>Join</button>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
    </div>
}

ReactDom.render(<Index/>, document.getElementById('main'));
