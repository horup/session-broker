import { redis, subscriber } from "./redis";
import { info } from "../log";

export interface Client
{
    id:number;
    session?:number;
}
export async function setClient(clientId:number, client:Client, expire = 30)
{
    await redis.set(`client:${clientId}`, JSON.stringify(client), "ex", expire);
}

export async function delClient(clientId:number)
{
   await redis.del(`client:${clientId}`);
}

export async function getClient(clientId:number) : Promise<Client>
{
    const c = await redis.get(`client:${clientId}`);
    if (c != null)
    {
        return JSON.parse(c) as Client;
    }

    return undefined;
}

export async function refreshClient(clientId:number) : Promise<any>
{
    redis.expire(`client:${clientId}`, 30);
}

export async function getClientIds():Promise<number[]>
{
    const ids:number[] = [];
    const p = new Promise<number[]>(res=>{
        const stream = redis.scanStream({match:"client:*"});
        stream.on('data', (keys:string[])=>{
        for (const key of keys)
        {
            const split = key.split(":");
            const id = Number.parseInt(split[1]);
            if (!Number.isNaN(id))
                ids.push(id);
        }

        res(ids);
    })
    });
    
    return p;
}

export async function getClientSessionId(clientId)
{
    const c = await getClient(clientId);
    return c.session;
}

export interface ClientMsg
{
    toclientId:number;
    data:any;
}

export function subscribeClientMsg(clientId:number, f:(clientId:number, msg:ClientMsg)=>any)
{
    subscriber.subscribe(`client:${clientId}`);
    subscriber.on('message', (channel, value)=>{
        if (channel == `client:${clientId}`)
            f(clientId, value);
    });
}

export async function publishClientMsg(clientId:number, msg:ClientMsg)
{
    const res = await redis.publish(`client:${clientId}`, JSON.stringify(msg));
}
