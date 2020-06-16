import config from '../config';
import {info} from '../log';
import * as Redis from 'ioredis';

export const redis = new Redis(config.REDIS_CONNECTION_STRING)
redis.on('connect', ()=>{
    info("Connected to redis");
});

export const subscriber = new Redis(config.REDIS_CONNECTION_STRING)
subscriber.on('connect', ()=>{
    info("Subscriber Connected to redis");
});