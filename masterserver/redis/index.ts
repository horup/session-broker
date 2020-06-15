import Redis from 'ioredis';
import config from '../config';
import {info} from '../log';

export const redis = new Redis(config.REDIS_CONNECTION_STRING)
redis.on('connect', ()=>{
    info("Connected to redis");
});
