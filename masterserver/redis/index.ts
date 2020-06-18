import * as Redis from 'ioredis';
import config from '../config';
import {info} from '../log';
import { RedisClient } from 'redis';
import {redis, subscriber} from './redis';

export * from './connect';
export * from './disconnect';
export * from './session';

/**Creates a new id */
export async function newId() 
{
    const newId = await redis.incr("nextid");
    return newId;
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





export interface Join
{

}