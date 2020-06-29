import * as redis from '../redis';
import {info as _info} from '../log';
import config from '../config';

const info = _info.extend('session-manager');

redis.subscribeCreateSession(async (createSession)=>{
    if (config.ID == createSession.nodeId)
    {
        const sessionId = await redis.newId();
        info(`session created with ${JSON.stringify(createSession)} on node ${config.ID}`);

        await redis.setSession({
            id:sessionId,
            name:createSession.name,
            owner:createSession.owner,
            password:createSession.password,
            nodeId:config.ID
        })

        await redis.publishSessionAccept({
            clientId:createSession.owner,
            owner:createSession.owner,
            sessionId:sessionId,
            name:createSession.name
        })

        await redis.publishSessionCreated({
            sessionId:sessionId,
            name:createSession.name,
            owner:createSession.owner,
            nodeId:createSession.nodeId
        });
      
    }
})

redis.subscribeDisconnect(async (clientId)=>{

})


redis.subscribeJoin(async (join)=>{
    const sessionId = join.sessionId;
    const clientId = join.clientId;
    const session = await redis.getSession(sessionId);
    if (session)
    {
        info(`client joined with ${JSON.stringify(join)}`);
        redis.publishSessionAccept({
            clientId:join.clientId,
            owner:session.owner,
            sessionId:session.id,
            name:session.name
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
                await redis.deleteSession(session.id);
                info(`session ${session.id} deleted, owner ${owner} is no longer there`);
            }
            else
            {
                // owner is there, keep session alive
                await redis.refreshSession(session.id);
            }
        }
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

