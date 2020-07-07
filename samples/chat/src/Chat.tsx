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
    const [clientId, setClientId] = React.useState(0);
    const [sessions, setSessions] = React.useState([] as ISession[]);
    const [session, setSession] = React.useState(null as Session);
    const [textBuffer, setTextBuffer] = React.useState("");
    const [chat, setChat] = React.useState("");
    const chatRef = React.useRef(chat);
    const submit = ()=>{
        client.sendAppMessageAsJson<AppMsg>({
            chat:{
                id:clientId,
                text:textBuffer
            }
        }, undefined, false);
        setTextBuffer("");
    }

    React.useEffect(()=>{
        client.onConnectionChange = (c, id)=>{setConnected(c), setClientId(id)};
        client.onSessionsChange = (sessions)=>{
            setSessions(sessions);
        }
        client.onSessionChange = (session)=>{
            setSession(session);
        };


        client.onAppMessageFromJson = (fromId, msg:AppMsg)=>
        {
            const c = chatRef.current + `${msg.chat.id}:${msg.chat.text}\n`;
            chatRef.current = c; //hack to avoid stale closure
            setChat(c);
        }

        client.onMessage = (msg)=>{
            console.log(`${JSON.stringify(msg)}`);
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
            {session && connected ? `Part of session ${session.id} with name:'${session.name}'` : ""}
            <br/>
            {session && connected ? `Chatters: ${session.clients}` : ""}
        </div>
        {
            !session ? 
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