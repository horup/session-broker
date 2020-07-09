import {subscriber, redis} from './redis';

export function subscribeDisconnect(f:(clientId:number)=>any)
{
    subscriber.subscribe("disconnect");
    subscriber.on('message', (channel, value)=>{
        if (channel == 'disconnect')
            f(Number.parseInt(value));
    });
}

export async function publishDisconnect(clientId:number)
{
    const res = await redis.publish("disconnect", clientId.toString());
}
