import {BrokerClient} from '../index';
import {ILogger} from './ILogger';
import {Handler, process} from './Handler';


export class BrokerCommandClient<State, Command>
{
    state:State;
    handlers:Handler<State, Command>[] = [];

    constructor(logger:ILogger)
    {

    }

    /** Push a command to the client. 
     *  This command is processed by zero or more handlers.
     *  If transmit is true, the command is also transmitted to the server for processing. */
    pushCommand(c:Command, transmit:boolean)
    {
        if (transmit)
        {
          //  this.websocket.send(JSON.stringify({c:c} as ClientMessage<C>));
        }

        process<State, Command>(this.handlers, this.state, c, (c,t)=>this.pushCommand(c,t));
    }
}