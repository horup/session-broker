import * as $protobuf from "protobufjs";
/** Properties of a ServerMsg. */
export interface IServerMsg {

    /** ServerMsg welcomeMsg */
    welcomeMsg?: (IServerWelcomeMsg|null);

    /** ServerMsg sessionAccept */
    sessionAccept?: (IServerSessionAcceptMsg|null);
}

/** Represents a ServerMsg. */
export class ServerMsg implements IServerMsg {

    /**
     * Constructs a new ServerMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerMsg);

    /** ServerMsg welcomeMsg. */
    public welcomeMsg?: (IServerWelcomeMsg|null);

    /** ServerMsg sessionAccept. */
    public sessionAccept?: (IServerSessionAcceptMsg|null);

    /** ServerMsg msg. */
    public msg?: ("welcomeMsg"|"sessionAccept");

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

/** Properties of a ClientMsg. */
export interface IClientMsg {

    /** ClientMsg connect */
    connect?: (IClientConnectMsg|null);

    /** ClientMsg joinSession */
    joinSession?: (IClientJoinSessionMsg|null);

    /** ClientMsg createSession */
    createSession?: (IClientCreateSessionMsg|null);
}

/** Represents a ClientMsg. */
export class ClientMsg implements IClientMsg {

    /**
     * Constructs a new ClientMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientMsg);

    /** ClientMsg connect. */
    public connect?: (IClientConnectMsg|null);

    /** ClientMsg joinSession. */
    public joinSession?: (IClientJoinSessionMsg|null);

    /** ClientMsg createSession. */
    public createSession?: (IClientCreateSessionMsg|null);

    /** ClientMsg msg. */
    public msg?: ("connect"|"joinSession"|"createSession");

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

/** Properties of a ClientConnectMsg. */
export interface IClientConnectMsg {
}

/** Connect to the master server */
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

/** Properties of a ServerWelcomeMsg. */
export interface IServerWelcomeMsg {

    /** ServerWelcomeMsg clientId */
    clientId?: (number|null);
}

/** Client connection established with the contained clientId */
export class ServerWelcomeMsg implements IServerWelcomeMsg {

    /**
     * Constructs a new ServerWelcomeMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerWelcomeMsg);

    /** ServerWelcomeMsg clientId. */
    public clientId: number;

    /**
     * Creates a new ServerWelcomeMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerWelcomeMsg instance
     */
    public static create(properties?: IServerWelcomeMsg): ServerWelcomeMsg;

    /**
     * Encodes the specified ServerWelcomeMsg message. Does not implicitly {@link ServerWelcomeMsg.verify|verify} messages.
     * @param message ServerWelcomeMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerWelcomeMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerWelcomeMsg message, length delimited. Does not implicitly {@link ServerWelcomeMsg.verify|verify} messages.
     * @param message ServerWelcomeMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerWelcomeMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerWelcomeMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerWelcomeMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerWelcomeMsg;

    /**
     * Decodes a ServerWelcomeMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerWelcomeMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerWelcomeMsg;

    /**
     * Verifies a ServerWelcomeMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerWelcomeMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerWelcomeMsg
     */
    public static fromObject(object: { [k: string]: any }): ServerWelcomeMsg;

    /**
     * Creates a plain object from a ServerWelcomeMsg message. Also converts values to other types if specified.
     * @param message ServerWelcomeMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerWelcomeMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerWelcomeMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientJoinSessionMsg. */
export interface IClientJoinSessionMsg {

    /** ClientJoinSessionMsg sessionId */
    sessionId?: (number|null);
}

/** Join the session with given id */
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

/** Create a session with the given name and password */
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

/** Properties of a ServerSessionAcceptMsg. */
export interface IServerSessionAcceptMsg {

    /** ServerSessionAcceptMsg sesionId */
    sesionId?: (number|null);

    /** ServerSessionAcceptMsg ownerId */
    ownerId?: (number|null);

    /** ServerSessionAcceptMsg name */
    name?: (string|null);
}

/** Session join or create has been accepted. */
export class ServerSessionAcceptMsg implements IServerSessionAcceptMsg {

    /**
     * Constructs a new ServerSessionAcceptMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerSessionAcceptMsg);

    /** ServerSessionAcceptMsg sesionId. */
    public sesionId: number;

    /** ServerSessionAcceptMsg ownerId. */
    public ownerId: number;

    /** ServerSessionAcceptMsg name. */
    public name: string;

    /**
     * Creates a new ServerSessionAcceptMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerSessionAcceptMsg instance
     */
    public static create(properties?: IServerSessionAcceptMsg): ServerSessionAcceptMsg;

    /**
     * Encodes the specified ServerSessionAcceptMsg message. Does not implicitly {@link ServerSessionAcceptMsg.verify|verify} messages.
     * @param message ServerSessionAcceptMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerSessionAcceptMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerSessionAcceptMsg message, length delimited. Does not implicitly {@link ServerSessionAcceptMsg.verify|verify} messages.
     * @param message ServerSessionAcceptMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerSessionAcceptMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerSessionAcceptMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerSessionAcceptMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerSessionAcceptMsg;

    /**
     * Decodes a ServerSessionAcceptMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerSessionAcceptMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerSessionAcceptMsg;

    /**
     * Verifies a ServerSessionAcceptMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerSessionAcceptMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerSessionAcceptMsg
     */
    public static fromObject(object: { [k: string]: any }): ServerSessionAcceptMsg;

    /**
     * Creates a plain object from a ServerSessionAcceptMsg message. Also converts values to other types if specified.
     * @param message ServerSessionAcceptMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerSessionAcceptMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerSessionAcceptMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BroadcastAppMsg. */
export interface IBroadcastAppMsg {

    /** BroadcastAppMsg data */
    data?: (google.protobuf.IAny|null);
}

/** Broadcast app message */
export class BroadcastAppMsg implements IBroadcastAppMsg {

    /**
     * Constructs a new BroadcastAppMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBroadcastAppMsg);

    /** BroadcastAppMsg data. */
    public data?: (google.protobuf.IAny|null);

    /**
     * Creates a new BroadcastAppMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BroadcastAppMsg instance
     */
    public static create(properties?: IBroadcastAppMsg): BroadcastAppMsg;

    /**
     * Encodes the specified BroadcastAppMsg message. Does not implicitly {@link BroadcastAppMsg.verify|verify} messages.
     * @param message BroadcastAppMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBroadcastAppMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BroadcastAppMsg message, length delimited. Does not implicitly {@link BroadcastAppMsg.verify|verify} messages.
     * @param message BroadcastAppMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBroadcastAppMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BroadcastAppMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BroadcastAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BroadcastAppMsg;

    /**
     * Decodes a BroadcastAppMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BroadcastAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BroadcastAppMsg;

    /**
     * Verifies a BroadcastAppMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BroadcastAppMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BroadcastAppMsg
     */
    public static fromObject(object: { [k: string]: any }): BroadcastAppMsg;

    /**
     * Creates a plain object from a BroadcastAppMsg message. Also converts values to other types if specified.
     * @param message BroadcastAppMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BroadcastAppMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BroadcastAppMsg to JSON.
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
