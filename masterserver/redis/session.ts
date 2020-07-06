import { subscriber, redis } from "./redis";
import { info } from "../log";

export interface SessionSwitch
{
    clientId:number;
    sessionId:number;
    name:string;
    owner:number;
}

export function subscribeSessionSwitch(f:(sessionAccept:SessionSwitch)=>any)
{
    subscriber.subscribe("sessionswitch");
    subscriber.on('message', (channel, value)=>{
        if (channel == "sessionswitch")
            f(JSON.parse(value));
    });
}

export async function publishSessionSwitch(sessionAccept:SessionSwitch)
{
    const res = await redis.publish("sessionswitch", JSON.stringify(sessionAccept));
}




export interface CreateSession 
{
    name:string;
    password:string;
    owner:number;
    nodeId:string;
}

export function subscribeCreateSession(f:(session:CreateSession)=>any)
{
    subscriber.subscribe("sessioncreate");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'sessioncreate')
            f(JSON.parse(value));
    });
}

export async function publishCreateSession(session:CreateSession)
{
    const res = await redis.publish("sessioncreate", JSON.stringify(session));
}

export interface SessionCreated
{
    sessionId:number;
    name:string;
    owner:number;
    nodeId:string;
}


export function subscribeSessionCreated(f:(s:SessionCreated)=>any)
{
    subscriber.subscribe("sessioncreated");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'sessioncreated')
            f(JSON.parse(value));
    });
}

export async function publishSessionCreated(session:SessionCreated)
{
    const res = await redis.publish("sessioncreated", JSON.stringify(session));
}





export interface Session
{
    id:number;
    owner:number;
    name:string;
    password:string;
    nodeId:string;
    clients:number[];
}

export async function setSession(session:Session)
{
    redis.set(`session:${session.id}`, JSON.stringify(session), "ex", 30);
}

export async function getSession(sessionId:number):Promise<Session | undefined>
{
    const s = await redis.get(`session:${sessionId}`);
    if (s != undefined)
    {
        return JSON.parse(s);
    }

    return undefined;
}


export async function getSessions():Promise<Session[]>
{
    const res = [] as Session[];
    const sessionIds = await getSessionIds();
    for (const id of sessionIds)
    {
        const s = await getSession(id);
        res.push(s);
    }

    return res;
}


export async function getSessionIds():Promise<number[]>
{
    
    const ids:number[] = [];
    const p = new Promise<number[]>(res=>{
        const stream = redis.scanStream({match:"session:*"});
        stream.on('data', (keys:string[])=>{
        for (const key of keys)
        {
            const split = key.split(":");
            const id = Number.parseInt(split[1]);
            if (!Number.isNaN(id))
                ids.push(id);
        }

        stream.on('end', ()=>{
            res(ids);
        })

    })
    });
    
    return p;
}

export async function refreshSession(sessionId:number):Promise<any>
{
    redis.expire(`session:${sessionId}`, 30);
}

export async function deleteSession(sessionId:number)
{
    /*const session = await getSession(sessionId);
    const s = JSON.stringify(session);
    await redis.srem("sessions", s);*/
    await redis.del(`session:${sessionId}`);
}

export async function getSessionsWithOwner(owner:number):Promise<Session[] | undefined>
{
    const sessions = await getSessions();
    const owned = sessions.filter(s=>s.owner == owner);
    return owned;
}
