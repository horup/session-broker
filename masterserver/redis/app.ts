import { subscriber, redis } from "./redis";
import { info } from "../log";

export interface App
{
    fromClientId:number;
    sessionId:number;
    data:any;
    toClientId?:number;
    loopback?:boolean;
}


export async function publishApp(app:App)
{
    const res = await redis.publish(`app:${app.sessionId}`, JSON.stringify(app));
}


export function subscribeApp(sessionId:number, f:(app:App)=>any)
{
    const r = `app:${sessionId}`;
    subscriber.subscribe(r);
    subscriber.on('message', (channel, value)=>{
        if (channel == r)
        {
            f(JSON.parse(value));
        }
    });
}
