import {subscriber, redis} from './redis';

export function subscribeConnect(f:(clientId:number)=>any)
{
    subscriber.subscribe("connect");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'connect')
            f(Number.parseInt(value));
    });
}

export async function publishConnect(clientId:number)
{
    const res = await redis.publish("connect", clientId.toString());
}