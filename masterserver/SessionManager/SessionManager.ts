import * as redis from '../redis';
import {info as _info} from '../log';

const info = _info.extend('session-manager');


redis.subscribeCreateSession(async (createSession)=>{
    const sessionId = await redis.newId();
    info(`session created with ${JSON.stringify(createSession)}`);
    redis.publishSessionAccept({
        clientId:createSession.owner,
        owner:createSession.owner,
        sessionId:sessionId,
        name:createSession.name
    })

    redis.addSession({
        id:sessionId,
        name:createSession.name,
        owner:createSession.owner,
        password:createSession.password
    })
})


redis.subscribeJoin(async (join)=>{
    const sessionId = join.sessionId;
    const clientId = join.clientId;
    info(`client joined with ${JSON.stringify(join)}`);
});