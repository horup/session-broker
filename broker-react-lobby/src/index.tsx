import * as React from 'react';
import {BrokerClient, Session} from 'broker-client-lib';

export interface LobbyProps
{
    sessions:Session[];
    onCreateSession:(sessionName:string)=>any;
    onJoin:(sessionId:number, password?:string)=>any;
}

export const Lobby = ({sessions, onCreateSession, onJoin}:LobbyProps)=>{

    const createSessionClick = ()=>{
        const name = prompt("Session Name", "New Session");
        
        if (onCreateSession)
        {
            onCreateSession(name);
        }
    }

    const onJoinClicked = (sessionId:number, passwordProtected:boolean)=>{
        if (onJoin)
        {
            onJoin(sessionId);
        }
    }

    return <div>
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
                                    <button onClick={()=>onJoinClicked(s.id, s.passwordProtected)}>Join</button>
                                    </td>
                                </tr>
                    })}
                    </tbody>
                </table> 
            </div>
}


/*
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


*/