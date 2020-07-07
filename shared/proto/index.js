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
     * @property {IServerApp|null} [app] ServerMsg app
     * @property {IServerWelcome|null} [welcome] ServerMsg welcome
     * @property {IServerCurrentSessionChanged|null} [currentSessionChanged] ServerMsg currentSessionChanged
     * @property {IServerAvaliableSessionsChanged|null} [avaliableSessionsChanged] ServerMsg avaliableSessionsChanged
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
     * ServerMsg app.
     * @member {IServerApp|null|undefined} app
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.app = null;

    /**
     * ServerMsg welcome.
     * @member {IServerWelcome|null|undefined} welcome
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.welcome = null;

    /**
     * ServerMsg currentSessionChanged.
     * @member {IServerCurrentSessionChanged|null|undefined} currentSessionChanged
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.currentSessionChanged = null;

    /**
     * ServerMsg avaliableSessionsChanged.
     * @member {IServerAvaliableSessionsChanged|null|undefined} avaliableSessionsChanged
     * @memberof ServerMsg
     * @instance
     */
    ServerMsg.prototype.avaliableSessionsChanged = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerMsg msg.
     * @member {"app"|"welcome"|"currentSessionChanged"|"avaliableSessionsChanged"|undefined} msg
     * @memberof ServerMsg
     * @instance
     */
    Object.defineProperty(ServerMsg.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["app", "welcome", "currentSessionChanged", "avaliableSessionsChanged"]),
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
        if (message.app != null && Object.hasOwnProperty.call(message, "app"))
            $root.ServerApp.encode(message.app, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.welcome != null && Object.hasOwnProperty.call(message, "welcome"))
            $root.ServerWelcome.encode(message.welcome, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        if (message.currentSessionChanged != null && Object.hasOwnProperty.call(message, "currentSessionChanged"))
            $root.ServerCurrentSessionChanged.encode(message.currentSessionChanged, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
        if (message.avaliableSessionsChanged != null && Object.hasOwnProperty.call(message, "avaliableSessionsChanged"))
            $root.ServerAvaliableSessionsChanged.encode(message.avaliableSessionsChanged, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
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
                message.app = $root.ServerApp.decode(reader, reader.uint32());
                break;
            case 100:
                message.welcome = $root.ServerWelcome.decode(reader, reader.uint32());
                break;
            case 101:
                message.currentSessionChanged = $root.ServerCurrentSessionChanged.decode(reader, reader.uint32());
                break;
            case 102:
                message.avaliableSessionsChanged = $root.ServerAvaliableSessionsChanged.decode(reader, reader.uint32());
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
        if (message.app != null && message.hasOwnProperty("app")) {
            properties.msg = 1;
            {
                var error = $root.ServerApp.verify(message.app);
                if (error)
                    return "app." + error;
            }
        }
        if (message.welcome != null && message.hasOwnProperty("welcome")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ServerWelcome.verify(message.welcome);
                if (error)
                    return "welcome." + error;
            }
        }
        if (message.currentSessionChanged != null && message.hasOwnProperty("currentSessionChanged")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ServerCurrentSessionChanged.verify(message.currentSessionChanged);
                if (error)
                    return "currentSessionChanged." + error;
            }
        }
        if (message.avaliableSessionsChanged != null && message.hasOwnProperty("avaliableSessionsChanged")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                var error = $root.ServerAvaliableSessionsChanged.verify(message.avaliableSessionsChanged);
                if (error)
                    return "avaliableSessionsChanged." + error;
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
        if (object.app != null) {
            if (typeof object.app !== "object")
                throw TypeError(".ServerMsg.app: object expected");
            message.app = $root.ServerApp.fromObject(object.app);
        }
        if (object.welcome != null) {
            if (typeof object.welcome !== "object")
                throw TypeError(".ServerMsg.welcome: object expected");
            message.welcome = $root.ServerWelcome.fromObject(object.welcome);
        }
        if (object.currentSessionChanged != null) {
            if (typeof object.currentSessionChanged !== "object")
                throw TypeError(".ServerMsg.currentSessionChanged: object expected");
            message.currentSessionChanged = $root.ServerCurrentSessionChanged.fromObject(object.currentSessionChanged);
        }
        if (object.avaliableSessionsChanged != null) {
            if (typeof object.avaliableSessionsChanged !== "object")
                throw TypeError(".ServerMsg.avaliableSessionsChanged: object expected");
            message.avaliableSessionsChanged = $root.ServerAvaliableSessionsChanged.fromObject(object.avaliableSessionsChanged);
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
        if (message.app != null && message.hasOwnProperty("app")) {
            object.app = $root.ServerApp.toObject(message.app, options);
            if (options.oneofs)
                object.msg = "app";
        }
        if (message.welcome != null && message.hasOwnProperty("welcome")) {
            object.welcome = $root.ServerWelcome.toObject(message.welcome, options);
            if (options.oneofs)
                object.msg = "welcome";
        }
        if (message.currentSessionChanged != null && message.hasOwnProperty("currentSessionChanged")) {
            object.currentSessionChanged = $root.ServerCurrentSessionChanged.toObject(message.currentSessionChanged, options);
            if (options.oneofs)
                object.msg = "currentSessionChanged";
        }
        if (message.avaliableSessionsChanged != null && message.hasOwnProperty("avaliableSessionsChanged")) {
            object.avaliableSessionsChanged = $root.ServerAvaliableSessionsChanged.toObject(message.avaliableSessionsChanged, options);
            if (options.oneofs)
                object.msg = "avaliableSessionsChanged";
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

$root.ServerApp = (function() {

    /**
     * Properties of a ServerApp.
     * @exports IServerApp
     * @interface IServerApp
     * @property {number|null} [from] ServerApp from
     * @property {Uint8Array|null} [data] ServerApp data
     */

    /**
     * Constructs a new ServerApp.
     * @exports ServerApp
     * @classdesc Represents a ServerApp.
     * @implements IServerApp
     * @constructor
     * @param {IServerApp=} [properties] Properties to set
     */
    function ServerApp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerApp from.
     * @member {number} from
     * @memberof ServerApp
     * @instance
     */
    ServerApp.prototype.from = 0;

    /**
     * ServerApp data.
     * @member {Uint8Array} data
     * @memberof ServerApp
     * @instance
     */
    ServerApp.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new ServerApp instance using the specified properties.
     * @function create
     * @memberof ServerApp
     * @static
     * @param {IServerApp=} [properties] Properties to set
     * @returns {ServerApp} ServerApp instance
     */
    ServerApp.create = function create(properties) {
        return new ServerApp(properties);
    };

    /**
     * Encodes the specified ServerApp message. Does not implicitly {@link ServerApp.verify|verify} messages.
     * @function encode
     * @memberof ServerApp
     * @static
     * @param {IServerApp} message ServerApp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerApp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.from);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified ServerApp message, length delimited. Does not implicitly {@link ServerApp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerApp
     * @static
     * @param {IServerApp} message ServerApp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerApp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerApp message from the specified reader or buffer.
     * @function decode
     * @memberof ServerApp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerApp} ServerApp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerApp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerApp();
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
     * Decodes a ServerApp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerApp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerApp} ServerApp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerApp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerApp message.
     * @function verify
     * @memberof ServerApp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerApp.verify = function verify(message) {
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
     * Creates a ServerApp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerApp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerApp} ServerApp
     */
    ServerApp.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerApp)
            return object;
        var message = new $root.ServerApp();
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
     * Creates a plain object from a ServerApp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerApp
     * @static
     * @param {ServerApp} message ServerApp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerApp.toObject = function toObject(message, options) {
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
     * Converts this ServerApp to JSON.
     * @function toJSON
     * @memberof ServerApp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerApp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerApp;
})();

$root.ServerWelcome = (function() {

    /**
     * Properties of a ServerWelcome.
     * @exports IServerWelcome
     * @interface IServerWelcome
     * @property {number|null} [clientId] ServerWelcome clientId
     */

    /**
     * Constructs a new ServerWelcome.
     * @exports ServerWelcome
     * @classdesc Represents a ServerWelcome.
     * @implements IServerWelcome
     * @constructor
     * @param {IServerWelcome=} [properties] Properties to set
     */
    function ServerWelcome(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerWelcome clientId.
     * @member {number} clientId
     * @memberof ServerWelcome
     * @instance
     */
    ServerWelcome.prototype.clientId = 0;

    /**
     * Creates a new ServerWelcome instance using the specified properties.
     * @function create
     * @memberof ServerWelcome
     * @static
     * @param {IServerWelcome=} [properties] Properties to set
     * @returns {ServerWelcome} ServerWelcome instance
     */
    ServerWelcome.create = function create(properties) {
        return new ServerWelcome(properties);
    };

    /**
     * Encodes the specified ServerWelcome message. Does not implicitly {@link ServerWelcome.verify|verify} messages.
     * @function encode
     * @memberof ServerWelcome
     * @static
     * @param {IServerWelcome} message ServerWelcome message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerWelcome.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.clientId);
        return writer;
    };

    /**
     * Encodes the specified ServerWelcome message, length delimited. Does not implicitly {@link ServerWelcome.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerWelcome
     * @static
     * @param {IServerWelcome} message ServerWelcome message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerWelcome.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerWelcome message from the specified reader or buffer.
     * @function decode
     * @memberof ServerWelcome
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerWelcome} ServerWelcome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerWelcome.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerWelcome();
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
     * Decodes a ServerWelcome message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerWelcome
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerWelcome} ServerWelcome
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerWelcome.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerWelcome message.
     * @function verify
     * @memberof ServerWelcome
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerWelcome.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isInteger(message.clientId))
                return "clientId: integer expected";
        return null;
    };

    /**
     * Creates a ServerWelcome message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerWelcome
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerWelcome} ServerWelcome
     */
    ServerWelcome.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerWelcome)
            return object;
        var message = new $root.ServerWelcome();
        if (object.clientId != null)
            message.clientId = object.clientId >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ServerWelcome message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerWelcome
     * @static
     * @param {ServerWelcome} message ServerWelcome
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerWelcome.toObject = function toObject(message, options) {
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
     * Converts this ServerWelcome to JSON.
     * @function toJSON
     * @memberof ServerWelcome
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerWelcome.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerWelcome;
})();

$root.ServerAvaliableSessionsChanged = (function() {

    /**
     * Properties of a ServerAvaliableSessionsChanged.
     * @exports IServerAvaliableSessionsChanged
     * @interface IServerAvaliableSessionsChanged
     * @property {Array.<ISession>|null} [sessions] ServerAvaliableSessionsChanged sessions
     */

    /**
     * Constructs a new ServerAvaliableSessionsChanged.
     * @exports ServerAvaliableSessionsChanged
     * @classdesc Represents a ServerAvaliableSessionsChanged.
     * @implements IServerAvaliableSessionsChanged
     * @constructor
     * @param {IServerAvaliableSessionsChanged=} [properties] Properties to set
     */
    function ServerAvaliableSessionsChanged(properties) {
        this.sessions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerAvaliableSessionsChanged sessions.
     * @member {Array.<ISession>} sessions
     * @memberof ServerAvaliableSessionsChanged
     * @instance
     */
    ServerAvaliableSessionsChanged.prototype.sessions = $util.emptyArray;

    /**
     * Creates a new ServerAvaliableSessionsChanged instance using the specified properties.
     * @function create
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {IServerAvaliableSessionsChanged=} [properties] Properties to set
     * @returns {ServerAvaliableSessionsChanged} ServerAvaliableSessionsChanged instance
     */
    ServerAvaliableSessionsChanged.create = function create(properties) {
        return new ServerAvaliableSessionsChanged(properties);
    };

    /**
     * Encodes the specified ServerAvaliableSessionsChanged message. Does not implicitly {@link ServerAvaliableSessionsChanged.verify|verify} messages.
     * @function encode
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {IServerAvaliableSessionsChanged} message ServerAvaliableSessionsChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerAvaliableSessionsChanged.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sessions != null && message.sessions.length)
            for (var i = 0; i < message.sessions.length; ++i)
                $root.Session.encode(message.sessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerAvaliableSessionsChanged message, length delimited. Does not implicitly {@link ServerAvaliableSessionsChanged.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {IServerAvaliableSessionsChanged} message ServerAvaliableSessionsChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerAvaliableSessionsChanged.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerAvaliableSessionsChanged message from the specified reader or buffer.
     * @function decode
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerAvaliableSessionsChanged} ServerAvaliableSessionsChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerAvaliableSessionsChanged.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerAvaliableSessionsChanged();
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
     * Decodes a ServerAvaliableSessionsChanged message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerAvaliableSessionsChanged} ServerAvaliableSessionsChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerAvaliableSessionsChanged.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerAvaliableSessionsChanged message.
     * @function verify
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerAvaliableSessionsChanged.verify = function verify(message) {
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
     * Creates a ServerAvaliableSessionsChanged message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerAvaliableSessionsChanged} ServerAvaliableSessionsChanged
     */
    ServerAvaliableSessionsChanged.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerAvaliableSessionsChanged)
            return object;
        var message = new $root.ServerAvaliableSessionsChanged();
        if (object.sessions) {
            if (!Array.isArray(object.sessions))
                throw TypeError(".ServerAvaliableSessionsChanged.sessions: array expected");
            message.sessions = [];
            for (var i = 0; i < object.sessions.length; ++i) {
                if (typeof object.sessions[i] !== "object")
                    throw TypeError(".ServerAvaliableSessionsChanged.sessions: object expected");
                message.sessions[i] = $root.Session.fromObject(object.sessions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerAvaliableSessionsChanged message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerAvaliableSessionsChanged
     * @static
     * @param {ServerAvaliableSessionsChanged} message ServerAvaliableSessionsChanged
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerAvaliableSessionsChanged.toObject = function toObject(message, options) {
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
     * Converts this ServerAvaliableSessionsChanged to JSON.
     * @function toJSON
     * @memberof ServerAvaliableSessionsChanged
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerAvaliableSessionsChanged.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerAvaliableSessionsChanged;
})();

$root.ServerCurrentSessionChanged = (function() {

    /**
     * Properties of a ServerCurrentSessionChanged.
     * @exports IServerCurrentSessionChanged
     * @interface IServerCurrentSessionChanged
     * @property {ISession|null} [session] ServerCurrentSessionChanged session
     */

    /**
     * Constructs a new ServerCurrentSessionChanged.
     * @exports ServerCurrentSessionChanged
     * @classdesc Represents a ServerCurrentSessionChanged.
     * @implements IServerCurrentSessionChanged
     * @constructor
     * @param {IServerCurrentSessionChanged=} [properties] Properties to set
     */
    function ServerCurrentSessionChanged(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerCurrentSessionChanged session.
     * @member {ISession|null|undefined} session
     * @memberof ServerCurrentSessionChanged
     * @instance
     */
    ServerCurrentSessionChanged.prototype.session = null;

    /**
     * Creates a new ServerCurrentSessionChanged instance using the specified properties.
     * @function create
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {IServerCurrentSessionChanged=} [properties] Properties to set
     * @returns {ServerCurrentSessionChanged} ServerCurrentSessionChanged instance
     */
    ServerCurrentSessionChanged.create = function create(properties) {
        return new ServerCurrentSessionChanged(properties);
    };

    /**
     * Encodes the specified ServerCurrentSessionChanged message. Does not implicitly {@link ServerCurrentSessionChanged.verify|verify} messages.
     * @function encode
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {IServerCurrentSessionChanged} message ServerCurrentSessionChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerCurrentSessionChanged.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.session != null && Object.hasOwnProperty.call(message, "session"))
            $root.Session.encode(message.session, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerCurrentSessionChanged message, length delimited. Does not implicitly {@link ServerCurrentSessionChanged.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {IServerCurrentSessionChanged} message ServerCurrentSessionChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerCurrentSessionChanged.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerCurrentSessionChanged message from the specified reader or buffer.
     * @function decode
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerCurrentSessionChanged} ServerCurrentSessionChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerCurrentSessionChanged.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerCurrentSessionChanged();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.session = $root.Session.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerCurrentSessionChanged message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerCurrentSessionChanged} ServerCurrentSessionChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerCurrentSessionChanged.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerCurrentSessionChanged message.
     * @function verify
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerCurrentSessionChanged.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.session != null && message.hasOwnProperty("session")) {
            var error = $root.Session.verify(message.session);
            if (error)
                return "session." + error;
        }
        return null;
    };

    /**
     * Creates a ServerCurrentSessionChanged message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerCurrentSessionChanged} ServerCurrentSessionChanged
     */
    ServerCurrentSessionChanged.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerCurrentSessionChanged)
            return object;
        var message = new $root.ServerCurrentSessionChanged();
        if (object.session != null) {
            if (typeof object.session !== "object")
                throw TypeError(".ServerCurrentSessionChanged.session: object expected");
            message.session = $root.Session.fromObject(object.session);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerCurrentSessionChanged message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerCurrentSessionChanged
     * @static
     * @param {ServerCurrentSessionChanged} message ServerCurrentSessionChanged
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerCurrentSessionChanged.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.session = null;
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = $root.Session.toObject(message.session, options);
        return object;
    };

    /**
     * Converts this ServerCurrentSessionChanged to JSON.
     * @function toJSON
     * @memberof ServerCurrentSessionChanged
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerCurrentSessionChanged.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerCurrentSessionChanged;
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

$root.Client = (function() {

    /**
     * Properties of a Client.
     * @exports IClient
     * @interface IClient
     * @property {number|null} [id] Client id
     */

    /**
     * Constructs a new Client.
     * @exports Client
     * @classdesc Represents a Client.
     * @implements IClient
     * @constructor
     * @param {IClient=} [properties] Properties to set
     */
    function Client(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Client id.
     * @member {number} id
     * @memberof Client
     * @instance
     */
    Client.prototype.id = 0;

    /**
     * Creates a new Client instance using the specified properties.
     * @function create
     * @memberof Client
     * @static
     * @param {IClient=} [properties] Properties to set
     * @returns {Client} Client instance
     */
    Client.create = function create(properties) {
        return new Client(properties);
    };

    /**
     * Encodes the specified Client message. Does not implicitly {@link Client.verify|verify} messages.
     * @function encode
     * @memberof Client
     * @static
     * @param {IClient} message Client message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Client.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        return writer;
    };

    /**
     * Encodes the specified Client message, length delimited. Does not implicitly {@link Client.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Client
     * @static
     * @param {IClient} message Client message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Client.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Client message from the specified reader or buffer.
     * @function decode
     * @memberof Client
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Client} Client
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Client.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Client message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Client
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Client} Client
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Client.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Client message.
     * @function verify
     * @memberof Client
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Client.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a Client message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Client
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Client} Client
     */
    Client.fromObject = function fromObject(object) {
        if (object instanceof $root.Client)
            return object;
        var message = new $root.Client();
        if (object.id != null)
            message.id = object.id >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Client message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Client
     * @static
     * @param {Client} message Client
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Client.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this Client to JSON.
     * @function toJSON
     * @memberof Client
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Client.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Client;
})();

$root.ConnectedClientsMsg = (function() {

    /**
     * Properties of a ConnectedClientsMsg.
     * @exports IConnectedClientsMsg
     * @interface IConnectedClientsMsg
     * @property {Array.<IClient>|null} [clients] ConnectedClientsMsg clients
     */

    /**
     * Constructs a new ConnectedClientsMsg.
     * @exports ConnectedClientsMsg
     * @classdesc Represents a ConnectedClientsMsg.
     * @implements IConnectedClientsMsg
     * @constructor
     * @param {IConnectedClientsMsg=} [properties] Properties to set
     */
    function ConnectedClientsMsg(properties) {
        this.clients = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConnectedClientsMsg clients.
     * @member {Array.<IClient>} clients
     * @memberof ConnectedClientsMsg
     * @instance
     */
    ConnectedClientsMsg.prototype.clients = $util.emptyArray;

    /**
     * Creates a new ConnectedClientsMsg instance using the specified properties.
     * @function create
     * @memberof ConnectedClientsMsg
     * @static
     * @param {IConnectedClientsMsg=} [properties] Properties to set
     * @returns {ConnectedClientsMsg} ConnectedClientsMsg instance
     */
    ConnectedClientsMsg.create = function create(properties) {
        return new ConnectedClientsMsg(properties);
    };

    /**
     * Encodes the specified ConnectedClientsMsg message. Does not implicitly {@link ConnectedClientsMsg.verify|verify} messages.
     * @function encode
     * @memberof ConnectedClientsMsg
     * @static
     * @param {IConnectedClientsMsg} message ConnectedClientsMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectedClientsMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clients != null && message.clients.length)
            for (var i = 0; i < message.clients.length; ++i)
                $root.Client.encode(message.clients[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConnectedClientsMsg message, length delimited. Does not implicitly {@link ConnectedClientsMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConnectedClientsMsg
     * @static
     * @param {IConnectedClientsMsg} message ConnectedClientsMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConnectedClientsMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConnectedClientsMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ConnectedClientsMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConnectedClientsMsg} ConnectedClientsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectedClientsMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConnectedClientsMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.clients && message.clients.length))
                    message.clients = [];
                message.clients.push($root.Client.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConnectedClientsMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConnectedClientsMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConnectedClientsMsg} ConnectedClientsMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConnectedClientsMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConnectedClientsMsg message.
     * @function verify
     * @memberof ConnectedClientsMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConnectedClientsMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clients != null && message.hasOwnProperty("clients")) {
            if (!Array.isArray(message.clients))
                return "clients: array expected";
            for (var i = 0; i < message.clients.length; ++i) {
                var error = $root.Client.verify(message.clients[i]);
                if (error)
                    return "clients." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConnectedClientsMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConnectedClientsMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConnectedClientsMsg} ConnectedClientsMsg
     */
    ConnectedClientsMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ConnectedClientsMsg)
            return object;
        var message = new $root.ConnectedClientsMsg();
        if (object.clients) {
            if (!Array.isArray(object.clients))
                throw TypeError(".ConnectedClientsMsg.clients: array expected");
            message.clients = [];
            for (var i = 0; i < object.clients.length; ++i) {
                if (typeof object.clients[i] !== "object")
                    throw TypeError(".ConnectedClientsMsg.clients: object expected");
                message.clients[i] = $root.Client.fromObject(object.clients[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ConnectedClientsMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConnectedClientsMsg
     * @static
     * @param {ConnectedClientsMsg} message ConnectedClientsMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConnectedClientsMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.clients = [];
        if (message.clients && message.clients.length) {
            object.clients = [];
            for (var j = 0; j < message.clients.length; ++j)
                object.clients[j] = $root.Client.toObject(message.clients[j], options);
        }
        return object;
    };

    /**
     * Converts this ConnectedClientsMsg to JSON.
     * @function toJSON
     * @memberof ConnectedClientsMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConnectedClientsMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConnectedClientsMsg;
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
     * @classdesc Represents a ClientConnectMsg.
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
     * @classdesc Represents a ClientRefreshSessionsMsg.
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
     * @classdesc Represents a ClientJoinSessionMsg.
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
     * @classdesc Represents a ClientCreateSessionMsg.
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

$root.Session = (function() {

    /**
     * Properties of a Session.
     * @exports ISession
     * @interface ISession
     * @property {number|null} [id] Session id
     * @property {number|null} [owner] Session owner
     * @property {string|null} [name] Session name
     * @property {boolean|null} [passwordProtected] Session passwordProtected
     * @property {Array.<number>|null} [clients] Session clients
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
        this.clients = [];
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
     * Session clients.
     * @member {Array.<number>} clients
     * @memberof Session
     * @instance
     */
    Session.prototype.clients = $util.emptyArray;

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
        if (message.clients != null && message.clients.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.clients.length; ++i)
                writer.uint32(message.clients[i]);
            writer.ldelim();
        }
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
            case 5:
                if (!(message.clients && message.clients.length))
                    message.clients = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.clients.push(reader.uint32());
                } else
                    message.clients.push(reader.uint32());
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
        if (message.clients != null && message.hasOwnProperty("clients")) {
            if (!Array.isArray(message.clients))
                return "clients: array expected";
            for (var i = 0; i < message.clients.length; ++i)
                if (!$util.isInteger(message.clients[i]))
                    return "clients: integer[] expected";
        }
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
        if (object.clients) {
            if (!Array.isArray(object.clients))
                throw TypeError(".Session.clients: array expected");
            message.clients = [];
            for (var i = 0; i < object.clients.length; ++i)
                message.clients[i] = object.clients[i] >>> 0;
        }
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
        if (options.arrays || options.defaults)
            object.clients = [];
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
        if (message.clients && message.clients.length) {
            object.clients = [];
            for (var j = 0; j < message.clients.length; ++j)
                object.clients[j] = message.clients[j];
        }
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
