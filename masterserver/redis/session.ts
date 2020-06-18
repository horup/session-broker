import { subscriber, redis } from "./redis";

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