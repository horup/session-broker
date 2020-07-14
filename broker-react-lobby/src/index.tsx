import * as React from 'react';
import {BrokerClient} from 'broker-client-lib';

export interface LobbyProps
{
    brokerClient:BrokerClient
}

export const Lobby = (brokerClient)=>{
    <div>
        Hello lobby!
    </div>
}