import * as $protobuf from "protobufjs";
/** Properties of a ServerMsg. */
export interface IServerMsg {

    /** ServerMsg app */
    app?: (IServerApp|null);

    /** ServerMsg welcome */
    welcome?: (IServerWelcome|null);

    /** ServerMsg currentSessionChanged */
    currentSessionChanged?: (IServerCurrentSessionChanged|null);

    /** ServerMsg avaliableSessionsChanged */
    avaliableSessionsChanged?: (IServerAvaliableSessionsChanged|null);
}

/** Represents a ServerMsg. */
export class ServerMsg implements IServerMsg {

    /**
     * Constructs a new ServerMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerMsg);

    /** ServerMsg app. */
    public app?: (IServerApp|null);

    /** ServerMsg welcome. */
    public welcome?: (IServerWelcome|null);

    /** ServerMsg currentSessionChanged. */
    public currentSessionChanged?: (IServerCurrentSessionChanged|null);

    /** ServerMsg avaliableSessionsChanged. */
    public avaliableSessionsChanged?: (IServerAvaliableSessionsChanged|null);

    /** ServerMsg msg. */
    public msg?: ("app"|"welcome"|"currentSessionChanged"|"avaliableSessionsChanged");

    /**
     * Creates a new ServerMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerMsg instance
     */
    public static create(properties?: IServerMsg): ServerMsg;

    /**
     * Encodes the specified ServerMsg message. Does not implicitly {@link ServerMsg.verify|verify} messages.
     * @param message ServerMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerMsg message, length delimited. Does not implicitly {@link ServerMsg.verify|verify} messages.
     * @param message ServerMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerMsg;

    /**
     * Decodes a ServerMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerMsg;

    /**
     * Verifies a ServerMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerMsg
     */
    public static fromObject(object: { [k: string]: any }): ServerMsg;

    /**
     * Creates a plain object from a ServerMsg message. Also converts values to other types if specified.
     * @param message ServerMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerApp. */
export interface IServerApp {

    /** ServerApp from */
    from?: (number|null);

    /** ServerApp data */
    data?: (Uint8Array|null);
}

/** Represents a ServerApp. */
export class ServerApp implements IServerApp {

    /**
     * Constructs a new ServerApp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerApp);

    /** ServerApp from. */
    public from: number;

    /** ServerApp data. */
    public data: Uint8Array;

    /**
     * Creates a new ServerApp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerApp instance
     */
    public static create(properties?: IServerApp): ServerApp;

    /**
     * Encodes the specified ServerApp message. Does not implicitly {@link ServerApp.verify|verify} messages.
     * @param message ServerApp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerApp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerApp message, length delimited. Does not implicitly {@link ServerApp.verify|verify} messages.
     * @param message ServerApp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerApp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerApp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerApp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerApp;

    /**
     * Decodes a ServerApp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerApp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerApp;

    /**
     * Verifies a ServerApp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerApp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerApp
     */
    public static fromObject(object: { [k: string]: any }): ServerApp;

    /**
     * Creates a plain object from a ServerApp message. Also converts values to other types if specified.
     * @param message ServerApp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerApp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerApp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerWelcome. */
export interface IServerWelcome {

    /** ServerWelcome clientId */
    clientId?: (number|null);
}

/** Represents a ServerWelcome. */
export class ServerWelcome implements IServerWelcome {

    /**
     * Constructs a new ServerWelcome.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerWelcome);

    /** ServerWelcome clientId. */
    public clientId: number;

    /**
     * Creates a new ServerWelcome instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerWelcome instance
     */
    public static create(properties?: IServerWelcome): ServerWelcome;

    /**
     * Encodes the specified ServerWelcome message. Does not implicitly {@link ServerWelcome.verify|verify} messages.
     * @param message ServerWelcome message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerWelcome, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerWelcome message, length delimited. Does not implicitly {@link ServerWelcome.verify|verify} messages.
     * @param message ServerWelcome message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerWelcome, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerWelcome message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerWelcome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerWelcome;

    /**
     * Decodes a ServerWelcome message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerWelcome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerWelcome;

    /**
     * Verifies a ServerWelcome message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerWelcome message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerWelcome
     */
    public static fromObject(object: { [k: string]: any }): ServerWelcome;

    /**
     * Creates a plain object from a ServerWelcome message. Also converts values to other types if specified.
     * @param message ServerWelcome
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerWelcome, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerWelcome to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerAvaliableSessionsChanged. */
export interface IServerAvaliableSessionsChanged {

    /** ServerAvaliableSessionsChanged sessions */
    sessions?: (ISession[]|null);
}

/** Represents a ServerAvaliableSessionsChanged. */
export class ServerAvaliableSessionsChanged implements IServerAvaliableSessionsChanged {

    /**
     * Constructs a new ServerAvaliableSessionsChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerAvaliableSessionsChanged);

    /** ServerAvaliableSessionsChanged sessions. */
    public sessions: ISession[];

    /**
     * Creates a new ServerAvaliableSessionsChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerAvaliableSessionsChanged instance
     */
    public static create(properties?: IServerAvaliableSessionsChanged): ServerAvaliableSessionsChanged;

    /**
     * Encodes the specified ServerAvaliableSessionsChanged message. Does not implicitly {@link ServerAvaliableSessionsChanged.verify|verify} messages.
     * @param message ServerAvaliableSessionsChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerAvaliableSessionsChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerAvaliableSessionsChanged message, length delimited. Does not implicitly {@link ServerAvaliableSessionsChanged.verify|verify} messages.
     * @param message ServerAvaliableSessionsChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerAvaliableSessionsChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerAvaliableSessionsChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerAvaliableSessionsChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerAvaliableSessionsChanged;

    /**
     * Decodes a ServerAvaliableSessionsChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerAvaliableSessionsChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerAvaliableSessionsChanged;

    /**
     * Verifies a ServerAvaliableSessionsChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerAvaliableSessionsChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerAvaliableSessionsChanged
     */
    public static fromObject(object: { [k: string]: any }): ServerAvaliableSessionsChanged;

    /**
     * Creates a plain object from a ServerAvaliableSessionsChanged message. Also converts values to other types if specified.
     * @param message ServerAvaliableSessionsChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerAvaliableSessionsChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerAvaliableSessionsChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerCurrentSessionChanged. */
export interface IServerCurrentSessionChanged {

    /** ServerCurrentSessionChanged session */
    session?: (ISession|null);
}

/** Represents a ServerCurrentSessionChanged. */
export class ServerCurrentSessionChanged implements IServerCurrentSessionChanged {

    /**
     * Constructs a new ServerCurrentSessionChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerCurrentSessionChanged);

    /** ServerCurrentSessionChanged session. */
    public session?: (ISession|null);

    /**
     * Creates a new ServerCurrentSessionChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerCurrentSessionChanged instance
     */
    public static create(properties?: IServerCurrentSessionChanged): ServerCurrentSessionChanged;

    /**
     * Encodes the specified ServerCurrentSessionChanged message. Does not implicitly {@link ServerCurrentSessionChanged.verify|verify} messages.
     * @param message ServerCurrentSessionChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerCurrentSessionChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerCurrentSessionChanged message, length delimited. Does not implicitly {@link ServerCurrentSessionChanged.verify|verify} messages.
     * @param message ServerCurrentSessionChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerCurrentSessionChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerCurrentSessionChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerCurrentSessionChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerCurrentSessionChanged;

    /**
     * Decodes a ServerCurrentSessionChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerCurrentSessionChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerCurrentSessionChanged;

    /**
     * Verifies a ServerCurrentSessionChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerCurrentSessionChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerCurrentSessionChanged
     */
    public static fromObject(object: { [k: string]: any }): ServerCurrentSessionChanged;

    /**
     * Creates a plain object from a ServerCurrentSessionChanged message. Also converts values to other types if specified.
     * @param message ServerCurrentSessionChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerCurrentSessionChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerCurrentSessionChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientMsg. */
export interface IClientMsg {

    /** ClientMsg appMsg */
    appMsg?: (IClientAppMsg|null);

    /** ClientMsg connect */
    connect?: (IClientConnectMsg|null);

    /** ClientMsg joinSession */
    joinSession?: (IClientJoinSessionMsg|null);

    /** ClientMsg createSession */
    createSession?: (IClientCreateSessionMsg|null);

    /** ClientMsg refreshSessions */
    refreshSessions?: (IClientRefreshSessionsMsg|null);
}

/** Represents a ClientMsg. */
export class ClientMsg implements IClientMsg {

    /**
     * Constructs a new ClientMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientMsg);

    /** ClientMsg appMsg. */
    public appMsg?: (IClientAppMsg|null);

    /** ClientMsg connect. */
    public connect?: (IClientConnectMsg|null);

    /** ClientMsg joinSession. */
    public joinSession?: (IClientJoinSessionMsg|null);

    /** ClientMsg createSession. */
    public createSession?: (IClientCreateSessionMsg|null);

    /** ClientMsg refreshSessions. */
    public refreshSessions?: (IClientRefreshSessionsMsg|null);

    /** ClientMsg msg. */
    public msg?: ("appMsg"|"connect"|"joinSession"|"createSession"|"refreshSessions");

    /**
     * Creates a new ClientMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientMsg instance
     */
    public static create(properties?: IClientMsg): ClientMsg;

    /**
     * Encodes the specified ClientMsg message. Does not implicitly {@link ClientMsg.verify|verify} messages.
     * @param message ClientMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientMsg message, length delimited. Does not implicitly {@link ClientMsg.verify|verify} messages.
     * @param message ClientMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientMsg;

    /**
     * Decodes a ClientMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientMsg;

    /**
     * Verifies a ClientMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientMsg
     */
    public static fromObject(object: { [k: string]: any }): ClientMsg;

    /**
     * Creates a plain object from a ClientMsg message. Also converts values to other types if specified.
     * @param message ClientMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Client. */
export interface IClient {

    /** Client id */
    id?: (number|null);
}

/** Represents a Client. */
export class Client implements IClient {

    /**
     * Constructs a new Client.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClient);

    /** Client id. */
    public id: number;

    /**
     * Creates a new Client instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Client instance
     */
    public static create(properties?: IClient): Client;

    /**
     * Encodes the specified Client message. Does not implicitly {@link Client.verify|verify} messages.
     * @param message Client message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Client message, length delimited. Does not implicitly {@link Client.verify|verify} messages.
     * @param message Client message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Client message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Client
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Client;

    /**
     * Decodes a Client message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Client
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Client;

    /**
     * Verifies a Client message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Client message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Client
     */
    public static fromObject(object: { [k: string]: any }): Client;

    /**
     * Creates a plain object from a Client message. Also converts values to other types if specified.
     * @param message Client
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Client, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Client to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectedClientsMsg. */
export interface IConnectedClientsMsg {

    /** ConnectedClientsMsg clients */
    clients?: (IClient[]|null);
}

/** Represents a ConnectedClientsMsg. */
export class ConnectedClientsMsg implements IConnectedClientsMsg {

    /**
     * Constructs a new ConnectedClientsMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectedClientsMsg);

    /** ConnectedClientsMsg clients. */
    public clients: IClient[];

    /**
     * Creates a new ConnectedClientsMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectedClientsMsg instance
     */
    public static create(properties?: IConnectedClientsMsg): ConnectedClientsMsg;

    /**
     * Encodes the specified ConnectedClientsMsg message. Does not implicitly {@link ConnectedClientsMsg.verify|verify} messages.
     * @param message ConnectedClientsMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectedClientsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectedClientsMsg message, length delimited. Does not implicitly {@link ConnectedClientsMsg.verify|verify} messages.
     * @param message ConnectedClientsMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectedClientsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectedClientsMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectedClientsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectedClientsMsg;

    /**
     * Decodes a ConnectedClientsMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectedClientsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectedClientsMsg;

    /**
     * Verifies a ConnectedClientsMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectedClientsMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectedClientsMsg
     */
    public static fromObject(object: { [k: string]: any }): ConnectedClientsMsg;

    /**
     * Creates a plain object from a ConnectedClientsMsg message. Also converts values to other types if specified.
     * @param message ConnectedClientsMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectedClientsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectedClientsMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientConnectMsg. */
export interface IClientConnectMsg {
}

/** Represents a ClientConnectMsg. */
export class ClientConnectMsg implements IClientConnectMsg {

    /**
     * Constructs a new ClientConnectMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientConnectMsg);

    /**
     * Creates a new ClientConnectMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientConnectMsg instance
     */
    public static create(properties?: IClientConnectMsg): ClientConnectMsg;

    /**
     * Encodes the specified ClientConnectMsg message. Does not implicitly {@link ClientConnectMsg.verify|verify} messages.
     * @param message ClientConnectMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientConnectMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientConnectMsg message, length delimited. Does not implicitly {@link ClientConnectMsg.verify|verify} messages.
     * @param message ClientConnectMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientConnectMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientConnectMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientConnectMsg;

    /**
     * Decodes a ClientConnectMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientConnectMsg;

    /**
     * Verifies a ClientConnectMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientConnectMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientConnectMsg
     */
    public static fromObject(object: { [k: string]: any }): ClientConnectMsg;

    /**
     * Creates a plain object from a ClientConnectMsg message. Also converts values to other types if specified.
     * @param message ClientConnectMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientConnectMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientConnectMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientRefreshSessionsMsg. */
export interface IClientRefreshSessionsMsg {
}

/** Represents a ClientRefreshSessionsMsg. */
export class ClientRefreshSessionsMsg implements IClientRefreshSessionsMsg {

    /**
     * Constructs a new ClientRefreshSessionsMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientRefreshSessionsMsg);

    /**
     * Creates a new ClientRefreshSessionsMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientRefreshSessionsMsg instance
     */
    public static create(properties?: IClientRefreshSessionsMsg): ClientRefreshSessionsMsg;

    /**
     * Encodes the specified ClientRefreshSessionsMsg message. Does not implicitly {@link ClientRefreshSessionsMsg.verify|verify} messages.
     * @param message ClientRefreshSessionsMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientRefreshSessionsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientRefreshSessionsMsg message, length delimited. Does not implicitly {@link ClientRefreshSessionsMsg.verify|verify} messages.
     * @param message ClientRefreshSessionsMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientRefreshSessionsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientRefreshSessionsMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientRefreshSessionsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRefreshSessionsMsg;

    /**
     * Decodes a ClientRefreshSessionsMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientRefreshSessionsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRefreshSessionsMsg;

    /**
     * Verifies a ClientRefreshSessionsMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientRefreshSessionsMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientRefreshSessionsMsg
     */
    public static fromObject(object: { [k: string]: any }): ClientRefreshSessionsMsg;

    /**
     * Creates a plain object from a ClientRefreshSessionsMsg message. Also converts values to other types if specified.
     * @param message ClientRefreshSessionsMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientRefreshSessionsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientRefreshSessionsMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientJoinSessionMsg. */
export interface IClientJoinSessionMsg {

    /** ClientJoinSessionMsg sessionId */
    sessionId?: (number|null);
}

/** Represents a ClientJoinSessionMsg. */
export class ClientJoinSessionMsg implements IClientJoinSessionMsg {

    /**
     * Constructs a new ClientJoinSessionMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientJoinSessionMsg);

    /** ClientJoinSessionMsg sessionId. */
    public sessionId: number;

    /**
     * Creates a new ClientJoinSessionMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientJoinSessionMsg instance
     */
    public static create(properties?: IClientJoinSessionMsg): ClientJoinSessionMsg;

    /**
     * Encodes the specified ClientJoinSessionMsg message. Does not implicitly {@link ClientJoinSessionMsg.verify|verify} messages.
     * @param message ClientJoinSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientJoinSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientJoinSessionMsg message, length delimited. Does not implicitly {@link ClientJoinSessionMsg.verify|verify} messages.
     * @param message ClientJoinSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientJoinSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientJoinSessionMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientJoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientJoinSessionMsg;

    /**
     * Decodes a ClientJoinSessionMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientJoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientJoinSessionMsg;

    /**
     * Verifies a ClientJoinSessionMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientJoinSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientJoinSessionMsg
     */
    public static fromObject(object: { [k: string]: any }): ClientJoinSessionMsg;

    /**
     * Creates a plain object from a ClientJoinSessionMsg message. Also converts values to other types if specified.
     * @param message ClientJoinSessionMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientJoinSessionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientJoinSessionMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientCreateSessionMsg. */
export interface IClientCreateSessionMsg {

    /** ClientCreateSessionMsg name */
    name?: (string|null);

    /** ClientCreateSessionMsg password */
    password?: (string|null);
}

/** Represents a ClientCreateSessionMsg. */
export class ClientCreateSessionMsg implements IClientCreateSessionMsg {

    /**
     * Constructs a new ClientCreateSessionMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientCreateSessionMsg);

    /** ClientCreateSessionMsg name. */
    public name: string;

    /** ClientCreateSessionMsg password. */
    public password: string;

    /**
     * Creates a new ClientCreateSessionMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientCreateSessionMsg instance
     */
    public static create(properties?: IClientCreateSessionMsg): ClientCreateSessionMsg;

    /**
     * Encodes the specified ClientCreateSessionMsg message. Does not implicitly {@link ClientCreateSessionMsg.verify|verify} messages.
     * @param message ClientCreateSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientCreateSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientCreateSessionMsg message, length delimited. Does not implicitly {@link ClientCreateSessionMsg.verify|verify} messages.
     * @param message ClientCreateSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientCreateSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientCreateSessionMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientCreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientCreateSessionMsg;

    /**
     * Decodes a ClientCreateSessionMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientCreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientCreateSessionMsg;

    /**
     * Verifies a ClientCreateSessionMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientCreateSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientCreateSessionMsg
     */
    public static fromObject(object: { [k: string]: any }): ClientCreateSessionMsg;

    /**
     * Creates a plain object from a ClientCreateSessionMsg message. Also converts values to other types if specified.
     * @param message ClientCreateSessionMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientCreateSessionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientCreateSessionMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientAppMsg. */
export interface IClientAppMsg {

    /** ClientAppMsg to */
    to?: (number|null);

    /** ClientAppMsg data */
    data?: (Uint8Array|null);

    /** ClientAppMsg loopback */
    loopback?: (boolean|null);
}

/** Represents a ClientAppMsg. */
export class ClientAppMsg implements IClientAppMsg {

    /**
     * Constructs a new ClientAppMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientAppMsg);

    /** ClientAppMsg to. */
    public to: number;

    /** ClientAppMsg data. */
    public data: Uint8Array;

    /** ClientAppMsg loopback. */
    public loopback: boolean;

    /**
     * Creates a new ClientAppMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientAppMsg instance
     */
    public static create(properties?: IClientAppMsg): ClientAppMsg;

    /**
     * Encodes the specified ClientAppMsg message. Does not implicitly {@link ClientAppMsg.verify|verify} messages.
     * @param message ClientAppMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientAppMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientAppMsg message, length delimited. Does not implicitly {@link ClientAppMsg.verify|verify} messages.
     * @param message ClientAppMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientAppMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientAppMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientAppMsg;

    /**
     * Decodes a ClientAppMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientAppMsg;

    /**
     * Verifies a ClientAppMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientAppMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientAppMsg
     */
    public static fromObject(object: { [k: string]: any }): ClientAppMsg;

    /**
     * Creates a plain object from a ClientAppMsg message. Also converts values to other types if specified.
     * @param message ClientAppMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientAppMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientAppMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Session. */
export interface ISession {

    /** Session id */
    id?: (number|null);

    /** Session owner */
    owner?: (number|null);

    /** Session name */
    name?: (string|null);

    /** Session passwordProtected */
    passwordProtected?: (boolean|null);

    /** Session clients */
    clients?: (number[]|null);
}

/** Represents a Session. */
export class Session implements ISession {

    /**
     * Constructs a new Session.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISession);

    /** Session id. */
    public id: number;

    /** Session owner. */
    public owner: number;

    /** Session name. */
    public name: string;

    /** Session passwordProtected. */
    public passwordProtected: boolean;

    /** Session clients. */
    public clients: number[];

    /**
     * Creates a new Session instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Session instance
     */
    public static create(properties?: ISession): Session;

    /**
     * Encodes the specified Session message. Does not implicitly {@link Session.verify|verify} messages.
     * @param message Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Session message, length delimited. Does not implicitly {@link Session.verify|verify} messages.
     * @param message Session message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Session message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Session;

    /**
     * Decodes a Session message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Session;

    /**
     * Verifies a Session message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Session message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Session
     */
    public static fromObject(object: { [k: string]: any }): Session;

    /**
     * Creates a plain object from a Session message. Also converts values to other types if specified.
     * @param message Session
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Session to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
