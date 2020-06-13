import Redis from 'ioredis';

const redis = new Redis("redis://:gyqneFeUOSwlRxP5FA8cQe8PNZyhgFLktW9aoSKRdh4=@dyna.redis.cache.windows.net:6379/0")

redis.set("foo", "bar");

redis.get("foo", (a, r)=>{
    console.log(r);
})