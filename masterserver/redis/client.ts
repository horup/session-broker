import { redis } from "./redis";
import { info } from "../log";

export async function setClient(clientId:number, expire = 30)
{
    await redis.set(`client:${clientId}`, "", "ex", expire);
}

export async function delClient(clientId:number)
{
   await redis.del(`client:${clientId}`);
}

export async function getClients():Promise<number[]>
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