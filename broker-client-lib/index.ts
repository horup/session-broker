import {ClientMsg, ServerMsg, ISession} from 'shared';
export * from 'shared';
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
    private _connected = false;
    private _avaliableSessions = [] as ISession[]; 
    private _currentSession = null as Session;

    get currentSession()
    {
        return this._currentSession;
    }

    get clientId()
    {
        return this._clientId;
    }

    get avaliableSessions()
    {
        return this._avaliableSessions;
    }

    get isConnected()
    {
        return this._connected;
    }

    get isSessionOwner():boolean
    {
        return this.isConnected && this.currentSession != null && this.currentSession.owner == this.clientId;
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
            if (serverMsg.welcome)
            {
                this._clientId = serverMsg.welcome.clientId;
                this._connected = true;
                this.onConnectionChanged(this.isConnected, this.clientId)
            }
            else if (serverMsg.currentSessionChanged)
            {
                const prev = this.currentSession != null ? this.currentSession.clients : [];
                this._currentSession = serverMsg.currentSessionChanged.session;
                this.onSessionChanged(this.currentSession);
                const current = this.currentSession != null ? this.currentSession.clients : [];
                current.forEach(c=>{
                    if (!prev.find(v=>v==c))
                    {
                        this.onClientConnected(c);

                    }
                })
                prev.forEach(c=>{
                    if (!current.find(v=>v==c))
                    {
                        this.onClientDisconnected(c);
                    }
                })
            }
            else if (serverMsg.avaliableSessionsChanged)
            {
                this._avaliableSessions = serverMsg.avaliableSessionsChanged.sessions;
                this.onSessionsChanged(this.avaliableSessions);
            }
            else if (serverMsg.app)
            {
                let te = new TextDecoder();
                let json = te.decode(serverMsg.app.data);
                const o = JSON.parse(json);
                this.onAppMessageFromJson(serverMsg.app.from, o);
            }            

            this.onMessage(serverMsg);
        }

        this.ws.onclose = ()=>{
            this._connected = false;
            this._currentSession = null;
            this.onSessionChanged(this._currentSession);
            this.onConnectionChanged(this.isConnected, this.clientId);
            setTimeout(()=>{
                this.connect(url);
            }, 5000)
        }

        this.ws.onerror = (e)=>
        {
            this.ws.close();
        }
    }

    
    onAppMessageFromJson = <AppMsg>(fromId:number, app:AppMsg)=>{}
    onConnectionChanged = (connected:boolean, clientId:number)=>{}
    onSessionChanged = (sesssion?:(Session))=>{};
    onSessionsChanged = (sessions:Session[])=>{};
    onClientConnected = (clientId:number)=>{};
    onClientDisconnected = (clientId:number)=>{};

    private sendConnect():boolean
    {
        this.send(new ClientMsg({
            connect:{

            }
        }));


        return true;
    }

    public sendAppMessage(data:Uint8Array, to:number = undefined)
    {
        this.send(new ClientMsg({
            appMsg:{
                data:data,
                loopback:true,
                to:to
            }
        }))
    }

    public sendAppMessageAsJson<T>(object:T, to:number = undefined)
    {
        let s = JSON.stringify(object);
        let te = new TextEncoder();
        this.sendAppMessage(te.encode(s), to);
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