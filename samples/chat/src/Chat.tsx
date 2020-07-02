import * as React from 'react';
import * as ReactDom from 'react-dom';
import {info} from './log';
import {ClientMsg, ServerMsg, Session, ISession, MasterClient} from '../../../masterclient';
import {Reader} from 'protobufjs';

const client = new MasterClient();

interface AppMsg
{
    chat?:{
        id:number;
        text:string;
    }
}

const Index = ()=>{
    const [connected, setConnected] = React.useState(false);
    const [clientId, setClientId] = React.useState(null as number);
    const [sessionName, setSessionName] = React.useState(null as string);
    const [sessionId, setSessionId] = React.useState<number>();
    const [sessions, setSessions] = React.useState([] as ISession[]);
    const [textBuffer, setTextBuffer] = React.useState("");
    const [chat, setChat] = React.useState("");
    const chatRef = React.useRef(chat);
    const submit = ()=>{
        client.sendAppMessageAsJson<AppMsg>({
            chat:{
                id:clientId,
                text:textBuffer
            }
        }, undefined, true);
        setTextBuffer("");
    }

    React.useEffect(()=>{
        client.onConnectionChange = (c, id)=>{setConnected(c), setClientId(id)};
        client.onSessionsChange = (sessions)=>{
            setSessions(sessions);
        }
        client.onSessionChange = (id, name, owner)=>{
            setSessionId(id);
            setSessionName(name);
            if (client.isSessionOwner)
            {
                client.sendAppMessageAsJson<AppMsg>({
                    chat:{
                        id:client.clientId,
                        text:"Chat session started!"
                    }
                }, undefined, true);
            }
        };

        client.onAppMsgFromJson = (fromId, msg:AppMsg)=>
        {
            const c = chatRef.current + `${msg.chat.id}:${msg.chat.text}\n`;
            chatRef.current = c; //hack to avoid stale closure
            setChat(c);
        }
        client.connect(`ws://localhost:8080`);
    }, [])

    const createSessionClick = ()=>{
        const name = prompt("Session Name", "New Session");
        client.sendCreateSession(name);
    }

    const joinClick = (sessionId:number, passwordProtected:boolean)=>{
        client.sendJoinSession(sessionId);
    }

    return <div>
        <div>
            {connected ? 'Connected' : 'Disconnected'} as {clientId != null ? clientId : "---"}
            <br/>
            {sessionId && connected ? `Part of session ${sessionId} with name:'${sessionName}'` : ""}
        </div>
        {
            sessionId == null ? 
            <div>
                <button onClick={()=>createSessionClick()}>Create Session</button>
                <table>
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
                                    <button onClick={()=>joinClick(s.id, s.passwordProtected)}>Join</button>
                                    </td>
                                </tr>
                    })}
                    </tbody>
                </table> 
            </div>

                :
                <div>
                    <textarea readOnly style={{width:'50vw', height:'50vh'}} value={chat}>

                    </textarea>
                    <br/>
                    <input disabled = {!client.isConnected} style={{width:'50vw'}} value={textBuffer} onKeyUp={(e)=>e.keyCode == 13 ? submit() : undefined} onChange={(e)=>setTextBuffer(e.target.value)}></input>
                </div>
        }
    </div>
}

ReactDom.render(<Index/>, document.getElementById('main'));

/*
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
        const msg = new ClientMsg({
            refreshSessions:{}
        })

        ws.send(ClientMsg.encode(msg).finish());
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
*/