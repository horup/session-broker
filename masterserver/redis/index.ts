import Redis from 'ioredis';
import config from '../config';
import {info} from '../log';

const redis = new Redis(config.REDIS_CONNECTION_STRING)
redis.on('connect', ()=>{
    info("Connected to redis");
});

const subscriber = new Redis(config.REDIS_CONNECTION_STRING)
redis.on('connect', ()=>{
    info("Subscriber Connected to redis");
});


/**Creates a new clientid */
export async function newClientId() 
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