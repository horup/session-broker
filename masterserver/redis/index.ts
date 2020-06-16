import * as Redis from 'ioredis';
import config from '../config';
import {info} from '../log';
import { RedisClient } from 'redis';

const redis = new Redis(config.REDIS_CONNECTION_STRING)
redis.on('connect', ()=>{
    info("Connected to redis");
});

const subscriber = new Redis(config.REDIS_CONNECTION_STRING)
subscriber.on('connect', ()=>{
    info("Subscriber Connected to redis");
});


/**Creates a new id */
export async function newId() 
{
    const newId = await redis.incr("nextid");
    return newId;
}

export function subscribeConnect(f:(clientId:number)=>any)
{
    subscriber.subscribe("connect");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'connect')
            f(Number.parseInt(value));
    });
}

export function subscribeDisconnect(f:(clientId:number)=>any)
{
    subscriber.subscribe("disconnect");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'disconnect')
            f(Number.parseInt(value));
    });
}

export async function publishConnect(clientId:number)
{
    const res = await redis.publish("connect", clientId.toString());
}

export async function publishDisconnect(clientId:number)
{
    const res = await redis.publish("disconnect", clientId.toString());
}



export interface Join
{
    clientId:number;
    sessionId:number;
}
export async function publishJoin(join:Join)
{
    const res = await redis.publish("join", JSON.stringify(join));
}

export interface SessionAccept
{
    clientId:number;
    sessionid:number;
    name:string;
    owner:number;
}

export async function publishSessionAccept(sessionAccept:SessionAccept)
{

}

export function subscribeSessionAccept(f:(sessionAccept:SessionAccept)=>any)
{
    subscriber.subscribe("session:accept");
    subscriber.on('message', (channel, value)=>{
        if (channel == "session:accept")
            f(JSON.parse(value));
    });
}

export interface Session 
{
    id:number;
    name:string;
    password:string;
    owner:number;
}

export function subscribeNewSession(f:(session:Session)=>any)
{
    subscriber.subscribe("session:new");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'session:new')
            f(JSON.parse(value));
    });
}

export async function publishNewSession(session:Session)
{
    const res = await redis.publish("session:new", JSON.stringify(session));
}


export interface Join
{

}