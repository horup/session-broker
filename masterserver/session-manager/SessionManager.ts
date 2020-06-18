import * as redis from '../redis';
import {info as _info} from '../log';

const info = _info.extend('session-manager');


redis.subscribeCreateSession(async (createSession)=>{
    const sessionId = await redis.newId();
    info.extend(`subscribeCreateSession`)(createSession);
    redis.publishSessionAccept({
        clientId:createSession.owner,
        owner:createSession.owner,
        sessionid:sessionId,
        name:createSession.name
    })

})
