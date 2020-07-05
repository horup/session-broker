import { subscriber, redis } from "./redis";
import { info } from "../log";

export interface App
{
    fromClientId:number;
    sessionId:number;
    data:Uint8Array;
    toClientId?:number;
    loopback?:boolean;
}


export async function publishApp(app:App)
{
    const res = await redis.publish(`app:${app.sessionId}`, JSON.stringify(app));
}

const replyHandlers = new Map<string, (app:App)=>any>();
let replyHandler:(app:App)=>any = null;

subscriber.on("message", (channel:string, value:string)=>{
    if (channel.startsWith("app:"))
    {
        const o = JSON.parse(value) as App;
        // Uint8Array lost during serialization, quick hack to fix this
        o.data = new Uint8Array((o.data as any).data);
        if (replyHandler)
            replyHandler(o);
    }
})

export function subscribeApp(sessionId:number)
{
    const c = `app:${sessionId}`;
    subscriber.subscribe(c);
}

export function setAppReplyHandler(f:(app:App)=>any)
{
    replyHandler = f;
}

export function unsubscribeApp(sessionId:number)
{
    const c = `app:${sessionId}`;
    subscriber.unsubscribe(c);
}
