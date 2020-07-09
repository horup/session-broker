import { subscriber, redis } from "./redis";
import { info } from "../log";

export interface Join
{
    clientId:number;
    sessionId:number;
}
export async function publishJoin(join:Join)
{
    const res = await redis.publish("join", JSON.stringify(join));
}


export function subscribeJoin(f:(join:Join)=>any)
{
    subscriber.subscribe("join");
    subscriber.on('message', (channel, value)=>{
        if (channel == "join")
            f(JSON.parse(value));
    });
}
