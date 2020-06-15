/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Msg = (function() {

    /**
     * Properties of a Msg.
     * @exports IMsg
     * @interface IMsg
     * @property {IJoinSessionMsg|null} [join] Msg join
     * @property {IBroadcastAppMsg|null} [app] Msg app
     * @property {IConnectMsg|null} [connect] Msg connect
     */

    /**
     * Constructs a new Msg.
     * @exports Msg
     * @classdesc Represents a Msg.
     * @implements IMsg
     * @constructor
     * @param {IMsg=} [properties] Properties to set
     */
    function Msg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Msg join.
     * @member {IJoinSessionMsg|null|undefined} join
     * @memberof Msg
     * @instance
     */
    Msg.prototype.join = null;

    /**
     * Msg app.
     * @member {IBroadcastAppMsg|null|undefined} app
     * @memberof Msg
     * @instance
     */
    Msg.prototype.app = null;

    /**
     * Msg connect.
     * @member {IConnectMsg|null|undefined} connect
     * @memberof Msg
     * @instance
     */
    Msg.prototype.connect = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Msg msg.
     * @member {"join"|"app"|"connect"|undefined} msg
     * @memberof Msg
     * @instance
     */
    Object.defineProperty(Msg.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["join", "app", "connect"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Msg instance using the specified properties.
     * @function create
     * @memberof Msg
     * @static
     * @param {IMsg=} [properties] Properties to set
     * @returns {Msg} Msg instance
     */
    Msg.create = function create(properties) {
        return new Msg(properties);
    };

    /**
     * Encodes the specified Msg message. Does not implicitly {@link Msg.verify|verify} messages.
     * @function encode
     * @memberof Msg
     * @static
     * @param {IMsg} message Msg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Msg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.join != null && Object.hasOwnProperty.call(message, "join"))
            $root.JoinSessionMsg.encode(message.join, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.app != null && Object.hasOwnProperty.call(message, "app"))
            $root.BroadcastAppMsg.encode(message.app, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.connect != null && Object.hasOwnProperty.call(message, "connect"))
            $root.ConnectMsg.encode(message.connect, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Msg message, length delimited. Does not implicitly {@link Msg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Msg
     * @static
     * @param {IMsg} message Msg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Msg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Msg message from the specified reader or buffer.
     * @function decode
     * @memberof Msg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Msg} Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Msg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.join = $root.JoinSessionMsg.decode(reader, reader.uint32());
                break;
            case 2:
                message.app = $root.BroadcastAppMsg.decode(reader, reader.uint32());
                break;
            case 3:
                message.connect = $root.ConnectMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Msg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Msg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Msg} Msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Msg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Msg message.
     * @function verify
     * @memberof Msg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Msg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.join != null && message.hasOwnProperty("join")) {
            properties.msg = 1;
            {
                var error = $root.JoinSessionMsg.verify(message.join);
                if (error)
                    return "join." + error;
            }
        }
        if (message.app != null && message.hasOwnProperty("app")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.BroadcastAppMsg.verify(message.app);
                if (error)
                    return "app." + error;
            }
        }
        if (message.connect != null && message.hasOwnProperty("connect")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ConnectMsg.verify(message.connect);
                if (error)
                    return "connect." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Msg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Msg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Msg} Msg
     */
    Msg.fromObject = function fromObject(object) {
        if (object instanceof $root.Msg)
            return object;
        var message = new $root.Msg();
        if (object.join != null) {
            if (typeof object.join !== "object")
                throw TypeError(".Msg.join: object expected");
            message.join = $root.JoinSessionMsg.fromObject(object.join);
        }
        if (object.app != null) {
            if (typeof object.app !== "object")
                throw TypeError(".Msg.app: object expected");
            message.app = $root.BroadcastAppMsg.fromObject(object.app);
        }
        if (object.connect != null) {
            if (typeof object.connect !== "object")
                throw TypeError(".Msg.connect: object expected");
            message.connect = $root.ConnectMsg.fromObject(object.connect);
        }
        return message;
    };

    /**
     * Creates a plain object from a Msg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Msg
     * @static
     * @param {Msg} message Msg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Msg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.join != null && message.hasOwnProperty("join")) {
            object.join = $root.JoinSessionMsg.toObject(message.join, options);
            if (options.oneofs)
                object.msg = "join";
        }
        if (message.app != null && message.hasOwnProperty("app")) {
            object.app = $root.BroadcastAppMsg.toObject(message.app, options);
            if (options.oneofs)
                object.msg = "app";
        }
        if (message.connect != null && message.hasOwnProperty("connect")) {
            object.connect = $root.ConnectMsg.toObject(message.connect, options);
            if (options.oneofs)
                object.msg = "connect";
        }
        return object;
    };

    /**
     * Converts this Msg to JSON.
     * @function toJSON
     * @memberof Msg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Msg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Msg;
})();

$root.ConnectMsg = (function() {

    /**
     * Properties of a ConnectMsg.
     * @exports IConnectMsg
     * @interface IConnectMsg
     */

    /**
     * Constructs a new ConnectMsg.
     * @exports ConnectMsg
     * @classdesc Represents a ConnectMsg.
     * @implements IConnectMsg
     * @constructor
     * @param {IConnectMsg=} [properties] Properties to set
     */
    function ConnectMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ConnectMsg instance using the specified properties.
     * @function create
     * @memberof ConnectMsg
     * @static
     * @param {IConnectMsg=} [properties] Properties to set
     * @returns {ConnectMsg} ConnectMsg instance
     */
    ConnectMsg.create = function create(properties) {
        return new ConnectMsg(properties);
    };

    /**
     * Encodes the specified ConnectMsg message. Does not implicitly {@link ConnectMsg.verify|verify} messages.
     * @function encode
     * @memberof ConnectMsg
     * @static
     * @param {IConnectMsg} message ConnectMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ConnectMsg message, length delimited. Does not implicitly {@link ConnectMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectMsg
     * @static
     * @param {IConnectMsg} message ConnectMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectMsg} ConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectMsg} ConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectMsg message.
     * @function verify
     * @memberof ConnectMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnectMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ConnectMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectMsg} ConnectMsg
     */
    ConnectMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectMsg)
            return object;
        return new $root.ConnectMsg();
    };

    /**
     * Creates a plain object from a ConnectMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectMsg
     * @static
     * @param {ConnectMsg} message ConnectMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnectMsg.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ConnectMsg to JSON.
     * @function toJSON
     * @memberof ConnectMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConnectMsg;
})();

$root.JoinSessionMsg = (function() {

    /**
     * Properties of a JoinSessionMsg.
     * @exports IJoinSessionMsg
     * @interface IJoinSessionMsg
     * @property {number|Long|null} [sessionId] JoinSessionMsg sessionId
     */

    /**
     * Constructs a new JoinSessionMsg.
     * @exports JoinSessionMsg
     * @classdesc Join the session with given id
     * @implements IJoinSessionMsg
     * @constructor
     * @param {IJoinSessionMsg=} [properties] Properties to set
     */
    function JoinSessionMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinSessionMsg sessionId.
     * @member {number|Long} sessionId
     * @memberof JoinSessionMsg
     * @instance
     */
    JoinSessionMsg.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new JoinSessionMsg instance using the specified properties.
     * @function create
     * @memberof JoinSessionMsg
     * @static
     * @param {IJoinSessionMsg=} [properties] Properties to set
     * @returns {JoinSessionMsg} JoinSessionMsg instance
     */
    JoinSessionMsg.create = function create(properties) {
        return new JoinSessionMsg(properties);
    };

    /**
     * Encodes the specified JoinSessionMsg message. Does not implicitly {@link JoinSessionMsg.verify|verify} messages.
     * @function encode
     * @memberof JoinSessionMsg
     * @static
     * @param {IJoinSessionMsg} message JoinSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinSessionMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sessionId);
        return writer;
    };

    /**
     * Encodes the specified JoinSessionMsg message, length delimited. Does not implicitly {@link JoinSessionMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinSessionMsg
     * @static
     * @param {IJoinSessionMsg} message JoinSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinSessionMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinSessionMsg message from the specified reader or buffer.
     * @function decode
     * @memberof JoinSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinSessionMsg} JoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinSessionMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinSessionMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sessionId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinSessionMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinSessionMsg} JoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinSessionMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinSessionMsg message.
     * @function verify
     * @memberof JoinSessionMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinSessionMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                return "sessionId: integer|Long expected";
        return null;
    };

    /**
     * Creates a JoinSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinSessionMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinSessionMsg} JoinSessionMsg
     */
    JoinSessionMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinSessionMsg)
            return object;
        var message = new $root.JoinSessionMsg();
        if (object.sessionId != null)
            if ($util.Long)
                (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = false;
            else if (typeof object.sessionId === "string")
                message.sessionId = parseInt(object.sessionId, 10);
            else if (typeof object.sessionId === "number")
                message.sessionId = object.sessionId;
            else if (typeof object.sessionId === "object")
                message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a JoinSessionMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinSessionMsg
     * @static
     * @param {JoinSessionMsg} message JoinSessionMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinSessionMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sessionId = options.longs === String ? "0" : 0;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (typeof message.sessionId === "number")
                object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
            else
                object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber() : message.sessionId;
        return object;
    };

    /**
     * Converts this JoinSessionMsg to JSON.
     * @function toJSON
     * @memberof JoinSessionMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinSessionMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinSessionMsg;
})();

$root.CreateSessionMsg = (function() {

    /**
     * Properties of a CreateSessionMsg.
     * @exports ICreateSessionMsg
     * @interface ICreateSessionMsg
     */

    /**
     * Constructs a new CreateSessionMsg.
     * @exports CreateSessionMsg
     * @classdesc Represents a CreateSessionMsg.
     * @implements ICreateSessionMsg
     * @constructor
     * @param {ICreateSessionMsg=} [properties] Properties to set
     */
    function CreateSessionMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CreateSessionMsg instance using the specified properties.
     * @function create
     * @memberof CreateSessionMsg
     * @static
     * @param {ICreateSessionMsg=} [properties] Properties to set
     * @returns {CreateSessionMsg} CreateSessionMsg instance
     */
    CreateSessionMsg.create = function create(properties) {
        return new CreateSessionMsg(properties);
    };

    /**
     * Encodes the specified CreateSessionMsg message. Does not implicitly {@link CreateSessionMsg.verify|verify} messages.
     * @function encode
     * @memberof CreateSessionMsg
     * @static
     * @param {ICreateSessionMsg} message CreateSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateSessionMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CreateSessionMsg message, length delimited. Does not implicitly {@link CreateSessionMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateSessionMsg
     * @static
     * @param {ICreateSessionMsg} message CreateSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateSessionMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateSessionMsg message from the specified reader or buffer.
     * @function decode
     * @memberof CreateSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateSessionMsg} CreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateSessionMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateSessionMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateSessionMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateSessionMsg} CreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateSessionMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateSessionMsg message.
     * @function verify
     * @memberof CreateSessionMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateSessionMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CreateSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateSessionMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateSessionMsg} CreateSessionMsg
     */
    CreateSessionMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateSessionMsg)
            return object;
        return new $root.CreateSessionMsg();
    };

    /**
     * Creates a plain object from a CreateSessionMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateSessionMsg
     * @static
     * @param {CreateSessionMsg} message CreateSessionMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateSessionMsg.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CreateSessionMsg to JSON.
     * @function toJSON
     * @memberof CreateSessionMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateSessionMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateSessionMsg;
})();

$root.BroadcastAppMsg = (function() {

    /**
     * Properties of a BroadcastAppMsg.
     * @exports IBroadcastAppMsg
     * @interface IBroadcastAppMsg
     * @property {google.protobuf.IAny|null} [data] BroadcastAppMsg data
     */

    /**
     * Constructs a new BroadcastAppMsg.
     * @exports BroadcastAppMsg
     * @classdesc Broadcast app message
     * @implements IBroadcastAppMsg
     * @constructor
     * @param {IBroadcastAppMsg=} [properties] Properties to set
     */
    function BroadcastAppMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BroadcastAppMsg data.
     * @member {google.protobuf.IAny|null|undefined} data
     * @memberof BroadcastAppMsg
     * @instance
     */
    BroadcastAppMsg.prototype.data = null;

    /**
     * Creates a new BroadcastAppMsg instance using the specified properties.
     * @function create
     * @memberof BroadcastAppMsg
     * @static
     * @param {IBroadcastAppMsg=} [properties] Properties to set
     * @returns {BroadcastAppMsg} BroadcastAppMsg instance
     */
    BroadcastAppMsg.create = function create(properties) {
        return new BroadcastAppMsg(properties);
    };

    /**
     * Encodes the specified BroadcastAppMsg message. Does not implicitly {@link BroadcastAppMsg.verify|verify} messages.
     * @function encode
     * @memberof BroadcastAppMsg
     * @static
     * @param {IBroadcastAppMsg} message BroadcastAppMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BroadcastAppMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.google.protobuf.Any.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BroadcastAppMsg message, length delimited. Does not implicitly {@link BroadcastAppMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BroadcastAppMsg
     * @static
     * @param {IBroadcastAppMsg} message BroadcastAppMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BroadcastAppMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BroadcastAppMsg message from the specified reader or buffer.
     * @function decode
     * @memberof BroadcastAppMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BroadcastAppMsg} BroadcastAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BroadcastAppMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BroadcastAppMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = $root.google.protobuf.Any.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BroadcastAppMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BroadcastAppMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BroadcastAppMsg} BroadcastAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BroadcastAppMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BroadcastAppMsg message.
     * @function verify
     * @memberof BroadcastAppMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BroadcastAppMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.google.protobuf.Any.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a BroadcastAppMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BroadcastAppMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BroadcastAppMsg} BroadcastAppMsg
     */
    BroadcastAppMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.BroadcastAppMsg)
            return object;
        var message = new $root.BroadcastAppMsg();
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".BroadcastAppMsg.data: object expected");
            message.data = $root.google.protobuf.Any.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a BroadcastAppMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BroadcastAppMsg
     * @static
     * @param {BroadcastAppMsg} message BroadcastAppMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BroadcastAppMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.data = null;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.google.protobuf.Any.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this BroadcastAppMsg to JSON.
     * @function toJSON
     * @memberof BroadcastAppMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BroadcastAppMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BroadcastAppMsg;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
