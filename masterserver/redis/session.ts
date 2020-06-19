import { subscriber, redis } from "./redis";
import { info } from "../log";

export interface SessionAccept
{
    clientId:number;
    sessionId:number;
    name:string;
    owner:number;
}

export function subscribeSessionAccept(f:(sessionAccept:SessionAccept)=>any)
{
    subscriber.subscribe("session:accept");
    subscriber.on('message', (channel, value)=>{
        if (channel == "session:accept")
            f(JSON.parse(value));
    });
}

export async function publishSessionAccept(sessionAccept:SessionAccept)
{
    const res = await redis.publish("session:accept", JSON.stringify(sessionAccept));
}




export interface CreateSession 
{
    name:string;
    password:string;
    owner:number;
}

export function subscribeCreateSession(f:(session:CreateSession)=>any)
{
    subscriber.subscribe("session:new");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'session:new')
            f(JSON.parse(value));
    });
}

export async function publishCreateSession(session:CreateSession)
{
    const res = await redis.publish("session:new", JSON.stringify(session));
}


export interface Session
{
    id:number;
    owner:number;
    name:string;
    password:string;
}

export async function addSession(session:Session)
{
    redis.sadd("sessions", JSON.stringify(session));
}

export async function getSessions():Promise<Session[]>
{
    const members = await redis.smembers("sessions");
    const sessions:Session[] = [];
    for (const member of members)
    {
        sessions.push(JSON.parse(member));
    }

    return sessions;
}

export async function getSession(sessionId:number):Promise<Session | undefined>
{
    const sessions = await getSessions();
    const session = sessions.find(s=>s.id == sessionId);
    return session;
}
