import * as redis from '../redis';
import {info as _info} from '../log';
import config from '../config';
import { Client } from '../redis';

const info = _info.extend('session-manager');

redis.subscribeCreateSession(async (createSession)=>{
    if (config.ID == createSession.nodeId)
    {
        const sessionId = await redis.newId();
        info(`session created with ${JSON.stringify(createSession)} on node ${config.ID}`);
        const session = {
            id:sessionId,
            name:createSession.name,
            owner:createSession.owner,
            password:createSession.password,
            nodeId:config.ID,
            clients:[]
        };
        
        await redis.setSession(session);

        await redis.publishSessionSwitch({
            clientId:createSession.owner,
            session:session
        })

        await redis.publishSessionCreated({
            sessionId:sessionId,
            name:createSession.name,
            owner:createSession.owner,
            nodeId:createSession.nodeId
        });
      
    }
})

async function validateSessions()
{
    // ensures thus node's sessions are valid, e.g. clients part of a session is correct
    const clients = await redis.getClients();
    const sessions = await (await redis.getSessions()).filter(s=>s.nodeId == config.ID);
    const sessionClients = new Map<number, Client[]>();
    sessions.forEach(s=>sessionClients.set(s.id, []));
    clients.forEach(c=>{
        if (c.session && sessionClients.has(c.session))
            sessionClients.get(c.session).push(c);
    })

    // check connected clients have not changed
    sessions.forEach(async s=>{
        const clients = sessionClients.get(s.id).map(c=>c.id);
        let same = true;
        if (s.clients.length != clients.length)
            same = false;
        if (same)
            clients.forEach((c,i)=>clients[i] != s.clients[i] ? same = false : undefined);
        if (!same)
        {
            s.clients = sessionClients.get(s.id).map(c=>c.id);
            await redis.setSession(s);
            await redis.publishSessionChange({session:s});
        }
    })
    
}

redis.subscribeSessionSwitch(async sessionSwitch=>{
   /* const session = await redis.getSession(sessionSwitch.sessionId);
    if (session.nodeId == config.ID)
    {
        session.clients = [...session.clients, sessionSwitch.clientId];
        await redis.setSession(session);
        info(`session ${session.id} now has the following clients: ${session.clients}`);
    }*/
    await validateSessions();
});

redis.subscribeDisconnect(async (clientId)=>{
    await validateSessions();
})


redis.subscribeJoin(async (join)=>{
    const sessionId = join.sessionId;
    const clientId = join.clientId;
    const session = await redis.getSession(sessionId);
    if (session)
    {
        info(`client asked to join with ${JSON.stringify(join)}`);
        redis.publishSessionSwitch({
            clientId:join.clientId,
            session:session
        })
    }
    else
    {
        info(`client ${clientId} tried to join session ${sessionId} which does not exist`)
    }
});

async function tick()
{
    try
    {
        const sessions = await redis.getSessions();
        for (const session of sessions.filter(s=>s.nodeId == config.ID))
        {
            // check if owner has left, is so remove session
            const owner = session.owner;
            const client = await redis.getClient(owner);
            if (client == null)
            {
                // inform rest of clients that session is dead.
                const clients = await redis.getClientsOfSession(session.id);
                info(`${JSON.stringify(clients)} will be kicked from session ${session.id}`);
                for (let c of clients)
                {
                    redis.publishSessionSwitch({
                        clientId:c.id,
                        session:null
                    })
                }
                
                // and delete the session and inform
                await redis.deleteSession(session.id);
                info(`session ${session.id} deleted, owner ${owner} is no longer there`);
                await redis.publishSessionDeleted(session);

            }
            else
            {
                // owner is there, keep session alive
                await redis.refreshSession(session.id);
                const clients = await redis.getClients();
            }
        }

        redis.debug();
    }
    catch
    {

    }
    finally
    {
        setTimeout(()=>tick(), 5000);
    }
}

tick();

