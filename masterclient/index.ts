import {ClientMsg, ServerMsg, ISession} from '../shared';
import { ENGINE_METHOD_DIGESTS } from 'constants';
export * from '../shared';
export interface Client
{
    id:number;
}
export interface Session extends ISession
{

}
export class MasterClient
{
    private ws:WebSocket;
    private _clientId:number;
    private _sessionName:string;
    private _sessionOwnerId:number;
    private _sessionId:number;
    private _connected = false;
    private _sessions = [] as ISession[]; 
    private _clients = [] as Client[];
    private _session = null as Session;

    get clients()
    {
        return this._clients;
    }

    get session()
    {
        return this._session;
    }

    get clientId()
    {
        return this._clientId;
    }

    get sessions()
    {
        return this._sessions;
    }

    get sessionId()
    {
        return this._sessionId;
    }

    get isConnected()
    {
        return this._connected;
    }

    get sessionName()
    {
        return this._sessionName;
    }

    get sessionOwnerId()
    {
        return this._sessionOwnerId;
    }

    get isSessionOwner():boolean
    {
        return this.isConnected && this.sessionOwnerId == this.clientId;
    }

    public connect(url:string)
    {
        this.ws = new WebSocket(url);
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = ()=> {
            this.sendConnect();
        }

        this.ws.onmessage = async (msg)=> {
            const buffer = msg.data as ArrayBuffer;
            const serverMsg = ServerMsg.decode(new Uint8Array(buffer));
            if (serverMsg.welcomeMsg)
            {
                this._clientId = serverMsg.welcomeMsg.clientId;
                this._connected = true;
                this.onConnectionChange(this.isConnected, this.clientId)
            }
            else if (serverMsg.sessionAccept)
            {
                this._sessionId = serverMsg.sessionAccept.sesionId;
                this._sessionName = serverMsg.sessionAccept.name;
                this._sessionOwnerId = serverMsg.sessionAccept.ownerId;
                this.onSessionChange({
                    clients:[],
                    id:this._sessionId,
                    name:this._sessionName,
                    owner:this._sessionOwnerId
                })
            }
            else if (serverMsg.sessions)
            {
                const s = serverMsg.sessions.sessions;
                this._sessions = s;
                this.onSessionsChange(this.sessions);
            }
            else if (serverMsg.appMsg)
            {
                let te = new TextDecoder();
                let json = te.decode(serverMsg.appMsg.data);
                const o = JSON.parse(json);
                this.onAppMsgFromJson(serverMsg.appMsg.from, o);
            }
            else if (serverMsg.session)
            {
                this._session = serverMsg.session;
                this.onSessionChange(this.session as Session);
                /*this._clients = serverMsg.clients.clients as Client[];
                this.onClientsChange(this.clients);*/
            }
            

            this.onMessage(serverMsg);
        }

        this.ws.onclose = ()=>{
            this._connected = false;
            this.onConnectionChange(this.isConnected, this.clientId);
            setTimeout(()=>{
                this.connect(url);
            }, 5000)
        }

        this.ws.onerror = (e)=>
        {
            this.ws.close();
        }
    }

    
    onAppMsgFromJson = <AppMsg>(fromId:number, app:AppMsg)=>{}
    onConnectionChange = (connected:boolean, clientId:number)=>{}
    onSessionChange = (session:Session)=>{};
    onSessionsChange = (sessions:Session[])=>{};
    onClientsChange = (clients:Client[])=>{};

    private sendConnect():boolean
    {
        this.send(new ClientMsg({
            connect:{

            }
        }));


        return true;
    }

    public sendAppMessage(data:Uint8Array, to:number = undefined, loopback:boolean = undefined)
    {
        this.send(new ClientMsg({
            appMsg:{
                data:data,
                loopback:loopback,
                to:to
            }
        }))
    }

    public sendAppMessageAsJson<T>(object:T, to:number = undefined, loopback:boolean = undefined)
    {
        let s = JSON.stringify(object);
        let te = new TextEncoder();
        this.sendAppMessage(te.encode(s), to, loopback);
    }

    public sendCreateSession(name:string, password:string = undefined):boolean
    {
        this.send(new ClientMsg({
            createSession:{
                name:name,
                password:password
            }
        }));

        return true;
    }

    public sendJoinSession(sessionId:number, password?:string)
    {
        this.send(new ClientMsg({
            joinSession:{
                sessionId:sessionId
            }
        }));


        return true;
    }

    onMessage = (serverMsg:ServerMsg)=>{};

    private send(clientMsg:ClientMsg)
    {
        const buffer = ClientMsg.encode(clientMsg).finish();
        this.ws.send(buffer);
    }
}