import * as $protobuf from "protobufjs";
/** Properties of a Msg. */
export interface IMsg {

    /** Msg join */
    join?: (IJoinSessionMsg|null);

    /** Msg appMsg */
    appMsg?: (IBroadcastAppMsg|null);
}

/** Represents a Msg. */
export class Msg implements IMsg {

    /**
     * Constructs a new Msg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMsg);

    /** Msg join. */
    public join?: (IJoinSessionMsg|null);

    /** Msg appMsg. */
    public appMsg?: (IBroadcastAppMsg|null);

    /** Msg msg. */
    public msg?: ("join"|"appMsg");

    /**
     * Creates a new Msg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Msg instance
     */
    public static create(properties?: IMsg): Msg;

    /**
     * Encodes the specified Msg message. Does not implicitly {@link Msg.verify|verify} messages.
     * @param message Msg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Msg message, length delimited. Does not implicitly {@link Msg.verify|verify} messages.
     * @param message Msg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Msg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Msg;

    /**
     * Decodes a Msg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Msg;

    /**
     * Verifies a Msg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Msg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Msg
     */
    public static fromObject(object: { [k: string]: any }): Msg;

    /**
     * Creates a plain object from a Msg message. Also converts values to other types if specified.
     * @param message Msg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Msg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectMsg. */
export interface IConnectMsg {
}

/** Represents a ConnectMsg. */
export class ConnectMsg implements IConnectMsg {

    /**
     * Constructs a new ConnectMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectMsg);

    /**
     * Creates a new ConnectMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectMsg instance
     */
    public static create(properties?: IConnectMsg): ConnectMsg;

    /**
     * Encodes the specified ConnectMsg message. Does not implicitly {@link ConnectMsg.verify|verify} messages.
     * @param message ConnectMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectMsg message, length delimited. Does not implicitly {@link ConnectMsg.verify|verify} messages.
     * @param message ConnectMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectMsg;

    /**
     * Decodes a ConnectMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectMsg;

    /**
     * Verifies a ConnectMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectMsg
     */
    public static fromObject(object: { [k: string]: any }): ConnectMsg;

    /**
     * Creates a plain object from a ConnectMsg message. Also converts values to other types if specified.
     * @param message ConnectMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a JoinSessionMsg. */
export interface IJoinSessionMsg {

    /** JoinSessionMsg sessionId */
    sessionId?: (number|Long|null);
}

/** Join the session with given id */
export class JoinSessionMsg implements IJoinSessionMsg {

    /**
     * Constructs a new JoinSessionMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinSessionMsg);

    /** JoinSessionMsg sessionId. */
    public sessionId: (number|Long);

    /**
     * Creates a new JoinSessionMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinSessionMsg instance
     */
    public static create(properties?: IJoinSessionMsg): JoinSessionMsg;

    /**
     * Encodes the specified JoinSessionMsg message. Does not implicitly {@link JoinSessionMsg.verify|verify} messages.
     * @param message JoinSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JoinSessionMsg message, length delimited. Does not implicitly {@link JoinSessionMsg.verify|verify} messages.
     * @param message JoinSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JoinSessionMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinSessionMsg;

    /**
     * Decodes a JoinSessionMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinSessionMsg;

    /**
     * Verifies a JoinSessionMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JoinSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JoinSessionMsg
     */
    public static fromObject(object: { [k: string]: any }): JoinSessionMsg;

    /**
     * Creates a plain object from a JoinSessionMsg message. Also converts values to other types if specified.
     * @param message JoinSessionMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JoinSessionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JoinSessionMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateSessionMsg. */
export interface ICreateSessionMsg {
}

/** Represents a CreateSessionMsg. */
export class CreateSessionMsg implements ICreateSessionMsg {

    /**
     * Constructs a new CreateSessionMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateSessionMsg);

    /**
     * Creates a new CreateSessionMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateSessionMsg instance
     */
    public static create(properties?: ICreateSessionMsg): CreateSessionMsg;

    /**
     * Encodes the specified CreateSessionMsg message. Does not implicitly {@link CreateSessionMsg.verify|verify} messages.
     * @param message CreateSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateSessionMsg message, length delimited. Does not implicitly {@link CreateSessionMsg.verify|verify} messages.
     * @param message CreateSessionMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateSessionMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateSessionMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateSessionMsg;

    /**
     * Decodes a CreateSessionMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateSessionMsg;

    /**
     * Verifies a CreateSessionMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateSessionMsg
     */
    public static fromObject(object: { [k: string]: any }): CreateSessionMsg;

    /**
     * Creates a plain object from a CreateSessionMsg message. Also converts values to other types if specified.
     * @param message CreateSessionMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateSessionMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateSessionMsg to JSON.
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
