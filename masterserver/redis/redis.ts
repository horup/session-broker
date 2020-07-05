import config from '../config';
import {info} from '../log';
import * as Redis from 'ioredis';

export const redis = new Redis(config.REDIS_CONNECTION_STRING)
redis.on('connect', ()=>{
    info("Connected to redis");
});

redis.on('ready', ()=>{
    info("Redis is ready");
});

export const subscriber = new Redis(config.REDIS_CONNECTION_STRING)
subscriber.on('connect', ()=>{
    info("Subscriber Connected to redis");
});

redis.on('ready', ()=>{
    info("Subscriber is ready");
});


/**Creates a new id */
export async function newId() 
{
    const newId = await redis.incr("nextid");
    return newId;
}


export function debug()
{
    
}