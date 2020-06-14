import Redis from 'ioredis';
import config from './config';

const redis = new Redis(config.REDIS_CONNECTION_STRING)

redis.set("foo", "bar");

redis.get("foo", (a, r)=>{
    console.log(r);
})

//"redis://:gyqneFeUOSwlRxP5FA8cQe8PNZyhgFLktW9aoSKRdh4=@dyna.redis.cache.windows.net:6379/0"