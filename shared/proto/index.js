/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ServerMsg = (function() {

    /**
     * Properties of a ServerMsg.
     * @exports IServerMsg
     * @interface IServerMsg
     * @property {IServerAppMsg|null} [appMsg] ServerMsg appMsg
     * @property {IServerWelcomeMsg|null} [welcomeMsg] ServerMsg welcomeMsg
     * @property {IServerSessionAcceptMsg|null} [sessionAccept] ServerMsg sessionAccept
     * @property {IServerSessionsMsg|null} [sessions] ServerMsg sessions
     */

    /**
     * Constructs a new ServerMsg.
     * @exports ServerMsg
     * @classdesc Represents a ServerMsg.
     * @implements IServerMsg
     * @constructor
     * @param {IServerMsg=} [properties] Properties to set
     */
    function ServerMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerMsg appMsg.
     * @member {IServerAppMsg|null|undefined} appMsg
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.appMsg = null;

    /**
     * ServerMsg welcomeMsg.
     * @member {IServerWelcomeMsg|null|undefined} welcomeMsg
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.welcomeMsg = null;

    /**
     * ServerMsg sessionAccept.
     * @member {IServerSessionAcceptMsg|null|undefined} sessionAccept
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.sessionAccept = null;

    /**
     * ServerMsg sessions.
     * @member {IServerSessionsMsg|null|undefined} sessions
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.sessions = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerMsg msg.
     * @member {"appMsg"|"welcomeMsg"|"sessionAccept"|"sessions"|undefined} msg
     * @memberof ServerMsg
     * @instance
     */
    Object.defineProperty(ServerMsg.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["appMsg", "welcomeMsg", "sessionAccept", "sessions"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerMsg instance using the specified properties.
     * @function create
     * @memberof ServerMsg
     * @static
     * @param {IServerMsg=} [properties] Properties to set
     * @returns {ServerMsg} ServerMsg instance
     */
    ServerMsg.create = function create(properties) {
        return new ServerMsg(properties);
    };

    /**
     * Encodes the specified ServerMsg message. Does not implicitly {@link ServerMsg.verify|verify} messages.
     * @function encode
     * @memberof ServerMsg
     * @static
     * @param {IServerMsg} message ServerMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.appMsg != null && Object.hasOwnProperty.call(message, "appMsg"))
            $root.ServerAppMsg.encode(message.appMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.welcomeMsg != null && Object.hasOwnProperty.call(message, "welcomeMsg"))
            $root.ServerWelcomeMsg.encode(message.welcomeMsg, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        if (message.sessionAccept != null && Object.hasOwnProperty.call(message, "sessionAccept"))
            $root.ServerSessionAcceptMsg.encode(message.sessionAccept, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
        if (message.sessions != null && Object.hasOwnProperty.call(message, "sessions"))
            $root.ServerSessionsMsg.encode(message.sessions, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerMsg message, length delimited. Does not implicitly {@link ServerMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerMsg
     * @static
     * @param {IServerMsg} message ServerMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ServerMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerMsg} ServerMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.appMsg = $root.ServerAppMsg.decode(reader, reader.uint32());
                break;
            case 100:
                message.welcomeMsg = $root.ServerWelcomeMsg.decode(reader, reader.uint32());
                break;
            case 101:
                message.sessionAccept = $root.ServerSessionAcceptMsg.decode(reader, reader.uint32());
                break;
            case 102:
                message.sessions = $root.ServerSessionsMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerMsg} ServerMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerMsg message.
     * @function verify
     * @memberof ServerMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.appMsg != null && message.hasOwnProperty("appMsg")) {
            properties.msg = 1;
            {
                var error = $root.ServerAppMsg.verify(message.appMsg);
                if (error)
                    return "appMsg." + error;
            }
        }
        if (message.welcomeMsg != null && message.hasOwnProperty("welcomeMsg")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ServerWelcomeMsg.verify(message.welcomeMsg);
                if (error)
                    return "welcomeMsg." + error;
            }
        }
        if (message.sessionAccept != null && message.hasOwnProperty("sessionAccept")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ServerSessionAcceptMsg.verify(message.sessionAccept);
                if (error)
                    return "sessionAccept." + error;
            }
        }
        if (message.sessions != null && message.hasOwnProperty("sessions")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ServerSessionsMsg.verify(message.sessions);
                if (error)
                    return "sessions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerMsg} ServerMsg
     */
    ServerMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMsg)
            return object;
        var message = new $root.ServerMsg();
        if (object.appMsg != null) {
            if (typeof object.appMsg !== "object")
                throw TypeError(".ServerMsg.appMsg: object expected");
            message.appMsg = $root.ServerAppMsg.fromObject(object.appMsg);
        }
        if (object.welcomeMsg != null) {
            if (typeof object.welcomeMsg !== "object")
                throw TypeError(".ServerMsg.welcomeMsg: object expected");
            message.welcomeMsg = $root.ServerWelcomeMsg.fromObject(object.welcomeMsg);
        }
        if (object.sessionAccept != null) {
            if (typeof object.sessionAccept !== "object")
                throw TypeError(".ServerMsg.sessionAccept: object expected");
            message.sessionAccept = $root.ServerSessionAcceptMsg.fromObject(object.sessionAccept);
        }
        if (object.sessions != null) {
            if (typeof object.sessions !== "object")
                throw TypeError(".ServerMsg.sessions: object expected");
            message.sessions = $root.ServerSessionsMsg.fromObject(object.sessions);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerMsg
     * @static
     * @param {ServerMsg} message ServerMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.appMsg != null && message.hasOwnProperty("appMsg")) {
            object.appMsg = $root.ServerAppMsg.toObject(message.appMsg, options);
            if (options.oneofs)
                object.msg = "appMsg";
        }
        if (message.welcomeMsg != null && message.hasOwnProperty("welcomeMsg")) {
            object.welcomeMsg = $root.ServerWelcomeMsg.toObject(message.welcomeMsg, options);
            if (options.oneofs)
                object.msg = "welcomeMsg";
        }
        if (message.sessionAccept != null && message.hasOwnProperty("sessionAccept")) {
            object.sessionAccept = $root.ServerSessionAcceptMsg.toObject(message.sessionAccept, options);
            if (options.oneofs)
                object.msg = "sessionAccept";
        }
        if (message.sessions != null && message.hasOwnProperty("sessions")) {
            object.sessions = $root.ServerSessionsMsg.toObject(message.sessions, options);
            if (options.oneofs)
                object.msg = "sessions";
        }
        return object;
    };

    /**
     * Converts this ServerMsg to JSON.
     * @function toJSON
     * @memberof ServerMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerMsg;
})();

$root.ClientMsg = (function() {

    /**
     * Properties of a ClientMsg.
     * @exports IClientMsg
     * @interface IClientMsg
     * @property {IClientAppMsg|null} [appMsg] ClientMsg appMsg
     * @property {IClientConnectMsg|null} [connect] ClientMsg connect
     * @property {IClientJoinSessionMsg|null} [joinSession] ClientMsg joinSession
     * @property {IClientCreateSessionMsg|null} [createSession] ClientMsg createSession
     * @property {IClientRefreshSessionsMsg|null} [refreshSessions] ClientMsg refreshSessions
     */

    /**
     * Constructs a new ClientMsg.
     * @exports ClientMsg
     * @classdesc Represents a ClientMsg.
     * @implements IClientMsg
     * @constructor
     * @param {IClientMsg=} [properties] Properties to set
     */
    function ClientMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientMsg appMsg.
     * @member {IClientAppMsg|null|undefined} appMsg
     * @memberof ClientMsg
     * @instance
     */
    ClientMsg.prototype.appMsg = null;

    /**
     * ClientMsg connect.
     * @member {IClientConnectMsg|null|undefined} connect
     * @memberof ClientMsg
     * @instance
     */
    ClientMsg.prototype.connect = null;

    /**
     * ClientMsg joinSession.
     * @member {IClientJoinSessionMsg|null|undefined} joinSession
     * @memberof ClientMsg
     * @instance
     */
    ClientMsg.prototype.joinSession = null;

    /**
     * ClientMsg createSession.
     * @member {IClientCreateSessionMsg|null|undefined} createSession
     * @memberof ClientMsg
     * @instance
     */
    ClientMsg.prototype.createSession = null;

    /**
     * ClientMsg refreshSessions.
     * @member {IClientRefreshSessionsMsg|null|undefined} refreshSessions
     * @memberof ClientMsg
     * @instance
     */
    ClientMsg.prototype.refreshSessions = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClientMsg msg.
     * @member {"appMsg"|"connect"|"joinSession"|"createSession"|"refreshSessions"|undefined} msg
     * @memberof ClientMsg
     * @instance
     */
    Object.defineProperty(ClientMsg.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["appMsg", "connect", "joinSession", "createSession", "refreshSessions"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClientMsg instance using the specified properties.
     * @function create
     * @memberof ClientMsg
     * @static
     * @param {IClientMsg=} [properties] Properties to set
     * @returns {ClientMsg} ClientMsg instance
     */
    ClientMsg.create = function create(properties) {
        return new ClientMsg(properties);
    };

    /**
     * Encodes the specified ClientMsg message. Does not implicitly {@link ClientMsg.verify|verify} messages.
     * @function encode
     * @memberof ClientMsg
     * @static
     * @param {IClientMsg} message ClientMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.appMsg != null && Object.hasOwnProperty.call(message, "appMsg"))
            $root.ClientAppMsg.encode(message.appMsg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.connect != null && Object.hasOwnProperty.call(message, "connect"))
            $root.ClientConnectMsg.encode(message.connect, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        if (message.joinSession != null && Object.hasOwnProperty.call(message, "joinSession"))
            $root.ClientJoinSessionMsg.encode(message.joinSession, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
        if (message.createSession != null && Object.hasOwnProperty.call(message, "createSession"))
            $root.ClientCreateSessionMsg.encode(message.createSession, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
        if (message.refreshSessions != null && Object.hasOwnProperty.call(message, "refreshSessions"))
            $root.ClientRefreshSessionsMsg.encode(message.refreshSessions, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientMsg message, length delimited. Does not implicitly {@link ClientMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientMsg
     * @static
     * @param {IClientMsg} message ClientMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientMsg} ClientMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.appMsg = $root.ClientAppMsg.decode(reader, reader.uint32());
                break;
            case 100:
                message.connect = $root.ClientConnectMsg.decode(reader, reader.uint32());
                break;
            case 101:
                message.joinSession = $root.ClientJoinSessionMsg.decode(reader, reader.uint32());
                break;
            case 102:
                message.createSession = $root.ClientCreateSessionMsg.decode(reader, reader.uint32());
                break;
            case 103:
                message.refreshSessions = $root.ClientRefreshSessionsMsg.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientMsg} ClientMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientMsg message.
     * @function verify
     * @memberof ClientMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.appMsg != null && message.hasOwnProperty("appMsg")) {
            properties.msg = 1;
            {
                var error = $root.ClientAppMsg.verify(message.appMsg);
                if (error)
                    return "appMsg." + error;
            }
        }
        if (message.connect != null && message.hasOwnProperty("connect")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ClientConnectMsg.verify(message.connect);
                if (error)
                    return "connect." + error;
            }
        }
        if (message.joinSession != null && message.hasOwnProperty("joinSession")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ClientJoinSessionMsg.verify(message.joinSession);
                if (error)
                    return "joinSession." + error;
            }
        }
        if (message.createSession != null && message.hasOwnProperty("createSession")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ClientCreateSessionMsg.verify(message.createSession);
                if (error)
                    return "createSession." + error;
            }
        }
        if (message.refreshSessions != null && message.hasOwnProperty("refreshSessions")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ClientRefreshSessionsMsg.verify(message.refreshSessions);
                if (error)
                    return "refreshSessions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClientMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientMsg} ClientMsg
     */
    ClientMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMsg)
            return object;
        var message = new $root.ClientMsg();
        if (object.appMsg != null) {
            if (typeof object.appMsg !== "object")
                throw TypeError(".ClientMsg.appMsg: object expected");
            message.appMsg = $root.ClientAppMsg.fromObject(object.appMsg);
        }
        if (object.connect != null) {
            if (typeof object.connect !== "object")
                throw TypeError(".ClientMsg.connect: object expected");
            message.connect = $root.ClientConnectMsg.fromObject(object.connect);
        }
        if (object.joinSession != null) {
            if (typeof object.joinSession !== "object")
                throw TypeError(".ClientMsg.joinSession: object expected");
            message.joinSession = $root.ClientJoinSessionMsg.fromObject(object.joinSession);
        }
        if (object.createSession != null) {
            if (typeof object.createSession !== "object")
                throw TypeError(".ClientMsg.createSession: object expected");
            message.createSession = $root.ClientCreateSessionMsg.fromObject(object.createSession);
        }
        if (object.refreshSessions != null) {
            if (typeof object.refreshSessions !== "object")
                throw TypeError(".ClientMsg.refreshSessions: object expected");
            message.refreshSessions = $root.ClientRefreshSessionsMsg.fromObject(object.refreshSessions);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientMsg
     * @static
     * @param {ClientMsg} message ClientMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.appMsg != null && message.hasOwnProperty("appMsg")) {
            object.appMsg = $root.ClientAppMsg.toObject(message.appMsg, options);
            if (options.oneofs)
                object.msg = "appMsg";
        }
        if (message.connect != null && message.hasOwnProperty("connect")) {
            object.connect = $root.ClientConnectMsg.toObject(message.connect, options);
            if (options.oneofs)
                object.msg = "connect";
        }
        if (message.joinSession != null && message.hasOwnProperty("joinSession")) {
            object.joinSession = $root.ClientJoinSessionMsg.toObject(message.joinSession, options);
            if (options.oneofs)
                object.msg = "joinSession";
        }
        if (message.createSession != null && message.hasOwnProperty("createSession")) {
            object.createSession = $root.ClientCreateSessionMsg.toObject(message.createSession, options);
            if (options.oneofs)
                object.msg = "createSession";
        }
        if (message.refreshSessions != null && message.hasOwnProperty("refreshSessions")) {
            object.refreshSessions = $root.ClientRefreshSessionsMsg.toObject(message.refreshSessions, options);
            if (options.oneofs)
                object.msg = "refreshSessions";
        }
        return object;
    };

    /**
     * Converts this ClientMsg to JSON.
     * @function toJSON
     * @memberof ClientMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientMsg;
})();

$root.ClientConnectMsg = (function() {

    /**
     * Properties of a ClientConnectMsg.
     * @exports IClientConnectMsg
     * @interface IClientConnectMsg
     */

    /**
     * Constructs a new ClientConnectMsg.
     * @exports ClientConnectMsg
     * @classdesc Connect to the master server
     * @implements IClientConnectMsg
     * @constructor
     * @param {IClientConnectMsg=} [properties] Properties to set
     */
    function ClientConnectMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ClientConnectMsg instance using the specified properties.
     * @function create
     * @memberof ClientConnectMsg
     * @static
     * @param {IClientConnectMsg=} [properties] Properties to set
     * @returns {ClientConnectMsg} ClientConnectMsg instance
     */
    ClientConnectMsg.create = function create(properties) {
        return new ClientConnectMsg(properties);
    };

    /**
     * Encodes the specified ClientConnectMsg message. Does not implicitly {@link ClientConnectMsg.verify|verify} messages.
     * @function encode
     * @memberof ClientConnectMsg
     * @static
     * @param {IClientConnectMsg} message ClientConnectMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientConnectMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ClientConnectMsg message, length delimited. Does not implicitly {@link ClientConnectMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientConnectMsg
     * @static
     * @param {IClientConnectMsg} message ClientConnectMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientConnectMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientConnectMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientConnectMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientConnectMsg} ClientConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientConnectMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientConnectMsg();
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
     * Decodes a ClientConnectMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientConnectMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientConnectMsg} ClientConnectMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientConnectMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientConnectMsg message.
     * @function verify
     * @memberof ClientConnectMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientConnectMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ClientConnectMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientConnectMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientConnectMsg} ClientConnectMsg
     */
    ClientConnectMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientConnectMsg)
            return object;
        return new $root.ClientConnectMsg();
    };

    /**
     * Creates a plain object from a ClientConnectMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientConnectMsg
     * @static
     * @param {ClientConnectMsg} message ClientConnectMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientConnectMsg.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ClientConnectMsg to JSON.
     * @function toJSON
     * @memberof ClientConnectMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientConnectMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientConnectMsg;
})();

$root.ClientRefreshSessionsMsg = (function() {

    /**
     * Properties of a ClientRefreshSessionsMsg.
     * @exports IClientRefreshSessionsMsg
     * @interface IClientRefreshSessionsMsg
     */

    /**
     * Constructs a new ClientRefreshSessionsMsg.
     * @exports ClientRefreshSessionsMsg
     * @classdesc Refresh Master Server list
     * @implements IClientRefreshSessionsMsg
     * @constructor
     * @param {IClientRefreshSessionsMsg=} [properties] Properties to set
     */
    function ClientRefreshSessionsMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ClientRefreshSessionsMsg instance using the specified properties.
     * @function create
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {IClientRefreshSessionsMsg=} [properties] Properties to set
     * @returns {ClientRefreshSessionsMsg} ClientRefreshSessionsMsg instance
     */
    ClientRefreshSessionsMsg.create = function create(properties) {
        return new ClientRefreshSessionsMsg(properties);
    };

    /**
     * Encodes the specified ClientRefreshSessionsMsg message. Does not implicitly {@link ClientRefreshSessionsMsg.verify|verify} messages.
     * @function encode
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {IClientRefreshSessionsMsg} message ClientRefreshSessionsMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientRefreshSessionsMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ClientRefreshSessionsMsg message, length delimited. Does not implicitly {@link ClientRefreshSessionsMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {IClientRefreshSessionsMsg} message ClientRefreshSessionsMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientRefreshSessionsMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientRefreshSessionsMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientRefreshSessionsMsg} ClientRefreshSessionsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientRefreshSessionsMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRefreshSessionsMsg();
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
     * Decodes a ClientRefreshSessionsMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientRefreshSessionsMsg} ClientRefreshSessionsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientRefreshSessionsMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientRefreshSessionsMsg message.
     * @function verify
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientRefreshSessionsMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ClientRefreshSessionsMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientRefreshSessionsMsg} ClientRefreshSessionsMsg
     */
    ClientRefreshSessionsMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientRefreshSessionsMsg)
            return object;
        return new $root.ClientRefreshSessionsMsg();
    };

    /**
     * Creates a plain object from a ClientRefreshSessionsMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientRefreshSessionsMsg
     * @static
     * @param {ClientRefreshSessionsMsg} message ClientRefreshSessionsMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientRefreshSessionsMsg.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ClientRefreshSessionsMsg to JSON.
     * @function toJSON
     * @memberof ClientRefreshSessionsMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientRefreshSessionsMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientRefreshSessionsMsg;
})();

$root.ServerWelcomeMsg = (function() {

    /**
     * Properties of a ServerWelcomeMsg.
     * @exports IServerWelcomeMsg
     * @interface IServerWelcomeMsg
     * @property {number|null} [clientId] ServerWelcomeMsg clientId
     */

    /**
     * Constructs a new ServerWelcomeMsg.
     * @exports ServerWelcomeMsg
     * @classdesc Client connection established with the contained clientId
     * @implements IServerWelcomeMsg
     * @constructor
     * @param {IServerWelcomeMsg=} [properties] Properties to set
     */
    function ServerWelcomeMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerWelcomeMsg clientId.
     * @member {number} clientId
     * @memberof ServerWelcomeMsg
     * @instance
     */
    ServerWelcomeMsg.prototype.clientId = 0;

    /**
     * Creates a new ServerWelcomeMsg instance using the specified properties.
     * @function create
     * @memberof ServerWelcomeMsg
     * @static
     * @param {IServerWelcomeMsg=} [properties] Properties to set
     * @returns {ServerWelcomeMsg} ServerWelcomeMsg instance
     */
    ServerWelcomeMsg.create = function create(properties) {
        return new ServerWelcomeMsg(properties);
    };

    /**
     * Encodes the specified ServerWelcomeMsg message. Does not implicitly {@link ServerWelcomeMsg.verify|verify} messages.
     * @function encode
     * @memberof ServerWelcomeMsg
     * @static
     * @param {IServerWelcomeMsg} message ServerWelcomeMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerWelcomeMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.clientId);
        return writer;
    };

    /**
     * Encodes the specified ServerWelcomeMsg message, length delimited. Does not implicitly {@link ServerWelcomeMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerWelcomeMsg
     * @static
     * @param {IServerWelcomeMsg} message ServerWelcomeMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerWelcomeMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerWelcomeMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ServerWelcomeMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerWelcomeMsg} ServerWelcomeMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerWelcomeMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerWelcomeMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.clientId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerWelcomeMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerWelcomeMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerWelcomeMsg} ServerWelcomeMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerWelcomeMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerWelcomeMsg message.
     * @function verify
     * @memberof ServerWelcomeMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerWelcomeMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isInteger(message.clientId))
                return "clientId: integer expected";
        return null;
    };

    /**
     * Creates a ServerWelcomeMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerWelcomeMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerWelcomeMsg} ServerWelcomeMsg
     */
    ServerWelcomeMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerWelcomeMsg)
            return object;
        var message = new $root.ServerWelcomeMsg();
        if (object.clientId != null)
            message.clientId = object.clientId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerWelcomeMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerWelcomeMsg
     * @static
     * @param {ServerWelcomeMsg} message ServerWelcomeMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerWelcomeMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.clientId = 0;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        return object;
    };

    /**
     * Converts this ServerWelcomeMsg to JSON.
     * @function toJSON
     * @memberof ServerWelcomeMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerWelcomeMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerWelcomeMsg;
})();

$root.ClientJoinSessionMsg = (function() {

    /**
     * Properties of a ClientJoinSessionMsg.
     * @exports IClientJoinSessionMsg
     * @interface IClientJoinSessionMsg
     * @property {number|null} [sessionId] ClientJoinSessionMsg sessionId
     */

    /**
     * Constructs a new ClientJoinSessionMsg.
     * @exports ClientJoinSessionMsg
     * @classdesc Join the session with given id
     * @implements IClientJoinSessionMsg
     * @constructor
     * @param {IClientJoinSessionMsg=} [properties] Properties to set
     */
    function ClientJoinSessionMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientJoinSessionMsg sessionId.
     * @member {number} sessionId
     * @memberof ClientJoinSessionMsg
     * @instance
     */
    ClientJoinSessionMsg.prototype.sessionId = 0;

    /**
     * Creates a new ClientJoinSessionMsg instance using the specified properties.
     * @function create
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {IClientJoinSessionMsg=} [properties] Properties to set
     * @returns {ClientJoinSessionMsg} ClientJoinSessionMsg instance
     */
    ClientJoinSessionMsg.create = function create(properties) {
        return new ClientJoinSessionMsg(properties);
    };

    /**
     * Encodes the specified ClientJoinSessionMsg message. Does not implicitly {@link ClientJoinSessionMsg.verify|verify} messages.
     * @function encode
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {IClientJoinSessionMsg} message ClientJoinSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientJoinSessionMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sessionId);
        return writer;
    };

    /**
     * Encodes the specified ClientJoinSessionMsg message, length delimited. Does not implicitly {@link ClientJoinSessionMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {IClientJoinSessionMsg} message ClientJoinSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientJoinSessionMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientJoinSessionMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientJoinSessionMsg} ClientJoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientJoinSessionMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientJoinSessionMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sessionId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientJoinSessionMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientJoinSessionMsg} ClientJoinSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientJoinSessionMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientJoinSessionMsg message.
     * @function verify
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientJoinSessionMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            if (!$util.isInteger(message.sessionId))
                return "sessionId: integer expected";
        return null;
    };

    /**
     * Creates a ClientJoinSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientJoinSessionMsg} ClientJoinSessionMsg
     */
    ClientJoinSessionMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientJoinSessionMsg)
            return object;
        var message = new $root.ClientJoinSessionMsg();
        if (object.sessionId != null)
            message.sessionId = object.sessionId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ClientJoinSessionMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientJoinSessionMsg
     * @static
     * @param {ClientJoinSessionMsg} message ClientJoinSessionMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientJoinSessionMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.sessionId = 0;
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            object.sessionId = message.sessionId;
        return object;
    };

    /**
     * Converts this ClientJoinSessionMsg to JSON.
     * @function toJSON
     * @memberof ClientJoinSessionMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientJoinSessionMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientJoinSessionMsg;
})();

$root.ClientCreateSessionMsg = (function() {

    /**
     * Properties of a ClientCreateSessionMsg.
     * @exports IClientCreateSessionMsg
     * @interface IClientCreateSessionMsg
     * @property {string|null} [name] ClientCreateSessionMsg name
     * @property {string|null} [password] ClientCreateSessionMsg password
     */

    /**
     * Constructs a new ClientCreateSessionMsg.
     * @exports ClientCreateSessionMsg
     * @classdesc Create a session with the given name and password
     * @implements IClientCreateSessionMsg
     * @constructor
     * @param {IClientCreateSessionMsg=} [properties] Properties to set
     */
    function ClientCreateSessionMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientCreateSessionMsg name.
     * @member {string} name
     * @memberof ClientCreateSessionMsg
     * @instance
     */
    ClientCreateSessionMsg.prototype.name = "";

    /**
     * ClientCreateSessionMsg password.
     * @member {string} password
     * @memberof ClientCreateSessionMsg
     * @instance
     */
    ClientCreateSessionMsg.prototype.password = "";

    /**
     * Creates a new ClientCreateSessionMsg instance using the specified properties.
     * @function create
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {IClientCreateSessionMsg=} [properties] Properties to set
     * @returns {ClientCreateSessionMsg} ClientCreateSessionMsg instance
     */
    ClientCreateSessionMsg.create = function create(properties) {
        return new ClientCreateSessionMsg(properties);
    };

    /**
     * Encodes the specified ClientCreateSessionMsg message. Does not implicitly {@link ClientCreateSessionMsg.verify|verify} messages.
     * @function encode
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {IClientCreateSessionMsg} message ClientCreateSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientCreateSessionMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified ClientCreateSessionMsg message, length delimited. Does not implicitly {@link ClientCreateSessionMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {IClientCreateSessionMsg} message ClientCreateSessionMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientCreateSessionMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientCreateSessionMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientCreateSessionMsg} ClientCreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientCreateSessionMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientCreateSessionMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientCreateSessionMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientCreateSessionMsg} ClientCreateSessionMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientCreateSessionMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientCreateSessionMsg message.
     * @function verify
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientCreateSessionMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a ClientCreateSessionMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientCreateSessionMsg} ClientCreateSessionMsg
     */
    ClientCreateSessionMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientCreateSessionMsg)
            return object;
        var message = new $root.ClientCreateSessionMsg();
        if (object.name != null)
            message.name = String(object.name);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a ClientCreateSessionMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientCreateSessionMsg
     * @static
     * @param {ClientCreateSessionMsg} message ClientCreateSessionMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientCreateSessionMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.password = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this ClientCreateSessionMsg to JSON.
     * @function toJSON
     * @memberof ClientCreateSessionMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientCreateSessionMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientCreateSessionMsg;
})();

$root.ServerSessionAcceptMsg = (function() {

    /**
     * Properties of a ServerSessionAcceptMsg.
     * @exports IServerSessionAcceptMsg
     * @interface IServerSessionAcceptMsg
     * @property {number|null} [sesionId] ServerSessionAcceptMsg sesionId
     * @property {number|null} [ownerId] ServerSessionAcceptMsg ownerId
     * @property {string|null} [name] ServerSessionAcceptMsg name
     */

    /**
     * Constructs a new ServerSessionAcceptMsg.
     * @exports ServerSessionAcceptMsg
     * @classdesc Session join or create has been accepted.
     * @implements IServerSessionAcceptMsg
     * @constructor
     * @param {IServerSessionAcceptMsg=} [properties] Properties to set
     */
    function ServerSessionAcceptMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerSessionAcceptMsg sesionId.
     * @member {number} sesionId
     * @memberof ServerSessionAcceptMsg
     * @instance
     */
    ServerSessionAcceptMsg.prototype.sesionId = 0;

    /**
     * ServerSessionAcceptMsg ownerId.
     * @member {number} ownerId
     * @memberof ServerSessionAcceptMsg
     * @instance
     */
    ServerSessionAcceptMsg.prototype.ownerId = 0;

    /**
     * ServerSessionAcceptMsg name.
     * @member {string} name
     * @memberof ServerSessionAcceptMsg
     * @instance
     */
    ServerSessionAcceptMsg.prototype.name = "";

    /**
     * Creates a new ServerSessionAcceptMsg instance using the specified properties.
     * @function create
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {IServerSessionAcceptMsg=} [properties] Properties to set
     * @returns {ServerSessionAcceptMsg} ServerSessionAcceptMsg instance
     */
    ServerSessionAcceptMsg.create = function create(properties) {
        return new ServerSessionAcceptMsg(properties);
    };

    /**
     * Encodes the specified ServerSessionAcceptMsg message. Does not implicitly {@link ServerSessionAcceptMsg.verify|verify} messages.
     * @function encode
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {IServerSessionAcceptMsg} message ServerSessionAcceptMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerSessionAcceptMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sesionId != null && Object.hasOwnProperty.call(message, "sesionId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sesionId);
        if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.ownerId);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified ServerSessionAcceptMsg message, length delimited. Does not implicitly {@link ServerSessionAcceptMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {IServerSessionAcceptMsg} message ServerSessionAcceptMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerSessionAcceptMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerSessionAcceptMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerSessionAcceptMsg} ServerSessionAcceptMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerSessionAcceptMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSessionAcceptMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sesionId = reader.uint32();
                break;
            case 2:
                message.ownerId = reader.uint32();
                break;
            case 3:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerSessionAcceptMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerSessionAcceptMsg} ServerSessionAcceptMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerSessionAcceptMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerSessionAcceptMsg message.
     * @function verify
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerSessionAcceptMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sesionId != null && message.hasOwnProperty("sesionId"))
            if (!$util.isInteger(message.sesionId))
                return "sesionId: integer expected";
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            if (!$util.isInteger(message.ownerId))
                return "ownerId: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a ServerSessionAcceptMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerSessionAcceptMsg} ServerSessionAcceptMsg
     */
    ServerSessionAcceptMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerSessionAcceptMsg)
            return object;
        var message = new $root.ServerSessionAcceptMsg();
        if (object.sesionId != null)
            message.sesionId = object.sesionId >>> 0;
        if (object.ownerId != null)
            message.ownerId = object.ownerId >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a ServerSessionAcceptMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerSessionAcceptMsg
     * @static
     * @param {ServerSessionAcceptMsg} message ServerSessionAcceptMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerSessionAcceptMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sesionId = 0;
            object.ownerId = 0;
            object.name = "";
        }
        if (message.sesionId != null && message.hasOwnProperty("sesionId"))
            object.sesionId = message.sesionId;
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            object.ownerId = message.ownerId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this ServerSessionAcceptMsg to JSON.
     * @function toJSON
     * @memberof ServerSessionAcceptMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerSessionAcceptMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerSessionAcceptMsg;
})();

$root.ClientAppMsg = (function() {

    /**
     * Properties of a ClientAppMsg.
     * @exports IClientAppMsg
     * @interface IClientAppMsg
     * @property {number|null} [to] ClientAppMsg to
     * @property {Uint8Array|null} [data] ClientAppMsg data
     * @property {boolean|null} [loopback] ClientAppMsg loopback
     */

    /**
     * Constructs a new ClientAppMsg.
     * @exports ClientAppMsg
     * @classdesc Represents a ClientAppMsg.
     * @implements IClientAppMsg
     * @constructor
     * @param {IClientAppMsg=} [properties] Properties to set
     */
    function ClientAppMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientAppMsg to.
     * @member {number} to
     * @memberof ClientAppMsg
     * @instance
     */
    ClientAppMsg.prototype.to = 0;

    /**
     * ClientAppMsg data.
     * @member {Uint8Array} data
     * @memberof ClientAppMsg
     * @instance
     */
    ClientAppMsg.prototype.data = $util.newBuffer([]);

    /**
     * ClientAppMsg loopback.
     * @member {boolean} loopback
     * @memberof ClientAppMsg
     * @instance
     */
    ClientAppMsg.prototype.loopback = false;

    /**
     * Creates a new ClientAppMsg instance using the specified properties.
     * @function create
     * @memberof ClientAppMsg
     * @static
     * @param {IClientAppMsg=} [properties] Properties to set
     * @returns {ClientAppMsg} ClientAppMsg instance
     */
    ClientAppMsg.create = function create(properties) {
        return new ClientAppMsg(properties);
    };

    /**
     * Encodes the specified ClientAppMsg message. Does not implicitly {@link ClientAppMsg.verify|verify} messages.
     * @function encode
     * @memberof ClientAppMsg
     * @static
     * @param {IClientAppMsg} message ClientAppMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientAppMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.to);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        if (message.loopback != null && Object.hasOwnProperty.call(message, "loopback"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.loopback);
        return writer;
    };

    /**
     * Encodes the specified ClientAppMsg message, length delimited. Does not implicitly {@link ClientAppMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientAppMsg
     * @static
     * @param {IClientAppMsg} message ClientAppMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientAppMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientAppMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ClientAppMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientAppMsg} ClientAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientAppMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientAppMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.to = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            case 3:
                message.loopback = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientAppMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientAppMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientAppMsg} ClientAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientAppMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientAppMsg message.
     * @function verify
     * @memberof ClientAppMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientAppMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.to != null && message.hasOwnProperty("to"))
            if (!$util.isInteger(message.to))
                return "to: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.loopback != null && message.hasOwnProperty("loopback"))
            if (typeof message.loopback !== "boolean")
                return "loopback: boolean expected";
        return null;
    };

    /**
     * Creates a ClientAppMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientAppMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientAppMsg} ClientAppMsg
     */
    ClientAppMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientAppMsg)
            return object;
        var message = new $root.ClientAppMsg();
        if (object.to != null)
            message.to = object.to >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.loopback != null)
            message.loopback = Boolean(object.loopback);
        return message;
    };

    /**
     * Creates a plain object from a ClientAppMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientAppMsg
     * @static
     * @param {ClientAppMsg} message ClientAppMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientAppMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.to = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.loopback = false;
        }
        if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.loopback != null && message.hasOwnProperty("loopback"))
            object.loopback = message.loopback;
        return object;
    };

    /**
     * Converts this ClientAppMsg to JSON.
     * @function toJSON
     * @memberof ClientAppMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientAppMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientAppMsg;
})();

$root.ServerAppMsg = (function() {

    /**
     * Properties of a ServerAppMsg.
     * @exports IServerAppMsg
     * @interface IServerAppMsg
     * @property {number|null} [from] ServerAppMsg from
     * @property {Uint8Array|null} [data] ServerAppMsg data
     */

    /**
     * Constructs a new ServerAppMsg.
     * @exports ServerAppMsg
     * @classdesc Represents a ServerAppMsg.
     * @implements IServerAppMsg
     * @constructor
     * @param {IServerAppMsg=} [properties] Properties to set
     */
    function ServerAppMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerAppMsg from.
     * @member {number} from
     * @memberof ServerAppMsg
     * @instance
     */
    ServerAppMsg.prototype.from = 0;

    /**
     * ServerAppMsg data.
     * @member {Uint8Array} data
     * @memberof ServerAppMsg
     * @instance
     */
    ServerAppMsg.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new ServerAppMsg instance using the specified properties.
     * @function create
     * @memberof ServerAppMsg
     * @static
     * @param {IServerAppMsg=} [properties] Properties to set
     * @returns {ServerAppMsg} ServerAppMsg instance
     */
    ServerAppMsg.create = function create(properties) {
        return new ServerAppMsg(properties);
    };

    /**
     * Encodes the specified ServerAppMsg message. Does not implicitly {@link ServerAppMsg.verify|verify} messages.
     * @function encode
     * @memberof ServerAppMsg
     * @static
     * @param {IServerAppMsg} message ServerAppMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerAppMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.from);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified ServerAppMsg message, length delimited. Does not implicitly {@link ServerAppMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerAppMsg
     * @static
     * @param {IServerAppMsg} message ServerAppMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerAppMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerAppMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ServerAppMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerAppMsg} ServerAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerAppMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerAppMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.from = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerAppMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerAppMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerAppMsg} ServerAppMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerAppMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerAppMsg message.
     * @function verify
     * @memberof ServerAppMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerAppMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.from != null && message.hasOwnProperty("from"))
            if (!$util.isInteger(message.from))
                return "from: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a ServerAppMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerAppMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerAppMsg} ServerAppMsg
     */
    ServerAppMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerAppMsg)
            return object;
        var message = new $root.ServerAppMsg();
        if (object.from != null)
            message.from = object.from >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a ServerAppMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerAppMsg
     * @static
     * @param {ServerAppMsg} message ServerAppMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerAppMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.from = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this ServerAppMsg to JSON.
     * @function toJSON
     * @memberof ServerAppMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerAppMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerAppMsg;
})();

$root.Session = (function() {

    /**
     * Properties of a Session.
     * @exports ISession
     * @interface ISession
     * @property {number|null} [id] Session id
     * @property {number|null} [owner] Session owner
     * @property {string|null} [name] Session name
     * @property {boolean|null} [passwordProtected] Session passwordProtected
     */

    /**
     * Constructs a new Session.
     * @exports Session
     * @classdesc Represents a Session.
     * @implements ISession
     * @constructor
     * @param {ISession=} [properties] Properties to set
     */
    function Session(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Session id.
     * @member {number} id
     * @memberof Session
     * @instance
     */
    Session.prototype.id = 0;

    /**
     * Session owner.
     * @member {number} owner
     * @memberof Session
     * @instance
     */
    Session.prototype.owner = 0;

    /**
     * Session name.
     * @member {string} name
     * @memberof Session
     * @instance
     */
    Session.prototype.name = "";

    /**
     * Session passwordProtected.
     * @member {boolean} passwordProtected
     * @memberof Session
     * @instance
     */
    Session.prototype.passwordProtected = false;

    /**
     * Creates a new Session instance using the specified properties.
     * @function create
     * @memberof Session
     * @static
     * @param {ISession=} [properties] Properties to set
     * @returns {Session} Session instance
     */
    Session.create = function create(properties) {
        return new Session(properties);
    };

    /**
     * Encodes the specified Session message. Does not implicitly {@link Session.verify|verify} messages.
     * @function encode
     * @memberof Session
     * @static
     * @param {ISession} message Session message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Session.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.owner);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.passwordProtected != null && Object.hasOwnProperty.call(message, "passwordProtected"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.passwordProtected);
        return writer;
    };

    /**
     * Encodes the specified Session message, length delimited. Does not implicitly {@link Session.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Session
     * @static
     * @param {ISession} message Session message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Session.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Session message from the specified reader or buffer.
     * @function decode
     * @memberof Session
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Session} Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Session.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Session();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.owner = reader.uint32();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.passwordProtected = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Session message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Session
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Session} Session
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Session.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Session message.
     * @function verify
     * @memberof Session
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Session.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isInteger(message.owner))
                return "owner: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.passwordProtected != null && message.hasOwnProperty("passwordProtected"))
            if (typeof message.passwordProtected !== "boolean")
                return "passwordProtected: boolean expected";
        return null;
    };

    /**
     * Creates a Session message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Session
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Session} Session
     */
    Session.fromObject = function fromObject(object) {
        if (object instanceof $root.Session)
            return object;
        var message = new $root.Session();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.owner != null)
            message.owner = object.owner >>> 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.passwordProtected != null)
            message.passwordProtected = Boolean(object.passwordProtected);
        return message;
    };

    /**
     * Creates a plain object from a Session message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Session
     * @static
     * @param {Session} message Session
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Session.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.owner = 0;
            object.name = "";
            object.passwordProtected = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.passwordProtected != null && message.hasOwnProperty("passwordProtected"))
            object.passwordProtected = message.passwordProtected;
        return object;
    };

    /**
     * Converts this Session to JSON.
     * @function toJSON
     * @memberof Session
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Session.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Session;
})();

$root.ServerSessionsMsg = (function() {

    /**
     * Properties of a ServerSessionsMsg.
     * @exports IServerSessionsMsg
     * @interface IServerSessionsMsg
     * @property {Array.<ISession>|null} [sessions] ServerSessionsMsg sessions
     */

    /**
     * Constructs a new ServerSessionsMsg.
     * @exports ServerSessionsMsg
     * @classdesc Represents a ServerSessionsMsg.
     * @implements IServerSessionsMsg
     * @constructor
     * @param {IServerSessionsMsg=} [properties] Properties to set
     */
    function ServerSessionsMsg(properties) {
        this.sessions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerSessionsMsg sessions.
     * @member {Array.<ISession>} sessions
     * @memberof ServerSessionsMsg
     * @instance
     */
    ServerSessionsMsg.prototype.sessions = $util.emptyArray;

    /**
     * Creates a new ServerSessionsMsg instance using the specified properties.
     * @function create
     * @memberof ServerSessionsMsg
     * @static
     * @param {IServerSessionsMsg=} [properties] Properties to set
     * @returns {ServerSessionsMsg} ServerSessionsMsg instance
     */
    ServerSessionsMsg.create = function create(properties) {
        return new ServerSessionsMsg(properties);
    };

    /**
     * Encodes the specified ServerSessionsMsg message. Does not implicitly {@link ServerSessionsMsg.verify|verify} messages.
     * @function encode
     * @memberof ServerSessionsMsg
     * @static
     * @param {IServerSessionsMsg} message ServerSessionsMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerSessionsMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sessions != null && message.sessions.length)
            for (var i = 0; i < message.sessions.length; ++i)
                $root.Session.encode(message.sessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerSessionsMsg message, length delimited. Does not implicitly {@link ServerSessionsMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerSessionsMsg
     * @static
     * @param {IServerSessionsMsg} message ServerSessionsMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerSessionsMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerSessionsMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ServerSessionsMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerSessionsMsg} ServerSessionsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerSessionsMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSessionsMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                if (!(message.sessions && message.sessions.length))
                    message.sessions = [];
                message.sessions.push($root.Session.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerSessionsMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerSessionsMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerSessionsMsg} ServerSessionsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerSessionsMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerSessionsMsg message.
     * @function verify
     * @memberof ServerSessionsMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerSessionsMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sessions != null && message.hasOwnProperty("sessions")) {
            if (!Array.isArray(message.sessions))
                return "sessions: array expected";
            for (var i = 0; i < message.sessions.length; ++i) {
                var error = $root.Session.verify(message.sessions[i]);
                if (error)
                    return "sessions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerSessionsMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerSessionsMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerSessionsMsg} ServerSessionsMsg
     */
    ServerSessionsMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerSessionsMsg)
            return object;
        var message = new $root.ServerSessionsMsg();
        if (object.sessions) {
            if (!Array.isArray(object.sessions))
                throw TypeError(".ServerSessionsMsg.sessions: array expected");
            message.sessions = [];
            for (var i = 0; i < object.sessions.length; ++i) {
                if (typeof object.sessions[i] !== "object")
                    throw TypeError(".ServerSessionsMsg.sessions: object expected");
                message.sessions[i] = $root.Session.fromObject(object.sessions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerSessionsMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerSessionsMsg
     * @static
     * @param {ServerSessionsMsg} message ServerSessionsMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerSessionsMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.sessions = [];
        if (message.sessions && message.sessions.length) {
            object.sessions = [];
            for (var j = 0; j < message.sessions.length; ++j)
                object.sessions[j] = $root.Session.toObject(message.sessions[j], options);
        }
        return object;
    };

    /**
     * Converts this ServerSessionsMsg to JSON.
     * @function toJSON
     * @memberof ServerSessionsMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerSessionsMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerSessionsMsg;
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
