/*
This code is Copyright © 2023 screengarden, LLC, all rights reserved. Unauthorized copying of any files herein, via any medium and for any purpose, is prohibited, with the exception of any copying that occurs during the installation of these files as an Obsidian plugin.

"Obsidian" and the Obsidian logo are © 2023 Obsidian.
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/process/browser.js
var require_browser = __commonJS({
  "node_modules/process/browser.js"(exports2, module2) {
    init_process_shim();
    var process2 = module2.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    __name(defaultSetTimout, "defaultSetTimout");
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    __name(defaultClearTimeout, "defaultClearTimeout");
    (function() {
      try {
        if (typeof setTimeout === "function") {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === "function") {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e2) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    __name(runTimeout, "runTimeout");
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e2) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    __name(runClearTimeout, "runClearTimeout");
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) {
        return;
      }
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }
    __name(cleanUpNextTick, "cleanUpNextTick");
    function drainQueue() {
      if (draining) {
        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    __name(drainQueue, "drainQueue");
    process2.nextTick = function(fun) {
      var args2 = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args2[i - 1] = arguments[i];
        }
      }
      queue.push(new Item2(fun, args2));
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
    };
    function Item2(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    __name(Item2, "Item");
    Item2.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process2.title = "browser";
    process2.browser = true;
    process2.env = {};
    process2.argv = [];
    process2.version = "";
    process2.versions = {};
    function noop3() {
    }
    __name(noop3, "noop");
    process2.on = noop3;
    process2.addListener = noop3;
    process2.once = noop3;
    process2.off = noop3;
    process2.removeListener = noop3;
    process2.removeAllListeners = noop3;
    process2.emit = noop3;
    process2.prependListener = noop3;
    process2.prependOnceListener = noop3;
    process2.listeners = function(name) {
      return [];
    };
    process2.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process2.cwd = function() {
      return "/";
    };
    process2.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process2.umask = function() {
      return 0;
    };
  }
});

// process-shim.js
var import_browser;
var init_process_shim = __esm({
  "process-shim.js"() {
    import_browser = __toESM(require_browser());
    if (typeof window !== "undefined") {
      window.global = window.global || window;
    }
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    init_process_shim();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    init_process_shim();
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      __name(selectColor, "selectColor");
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args2) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args2[0] = createDebug.coerce(args2[0]);
          if (typeof args2[0] !== "string") {
            args2.unshift("%O");
          }
          let index = 0;
          args2[0] = args2[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args2[index];
              match = formatter.call(self2, val);
              args2.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args2);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args2);
        }
        __name(debug, "debug");
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      __name(createDebug, "createDebug");
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      __name(extend, "extend");
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      __name(enable, "enable");
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      __name(disable, "disable");
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      __name(enabled, "enabled");
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      __name(toNamespace, "toNamespace");
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      __name(coerce, "coerce");
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      __name(destroy, "destroy");
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    __name(setup, "setup");
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    init_process_shim();
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    __name(useColors, "useColors");
    function formatArgs(args2) {
      args2[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args2[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args2.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args2[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args2.splice(lastC, 0, c);
    }
    __name(formatArgs, "formatArgs");
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    __name(save, "save");
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof import_browser.default !== "undefined" && "env" in import_browser.default) {
        r = import_browser.default.env.DEBUG;
      }
      return r;
    }
    __name(load, "load");
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    __name(localstorage, "localstorage");
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/get-browser-rtc/index.js
var require_get_browser_rtc = __commonJS({
  "node_modules/get-browser-rtc/index.js"(exports2, module2) {
    init_process_shim();
    module2.exports = /* @__PURE__ */ __name(function getBrowserRTC() {
      if (typeof globalThis === "undefined")
        return null;
      var wrtc = {
        RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
        RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
        RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
      };
      if (!wrtc.RTCPeerConnection)
        return null;
      return wrtc;
    }, "getBrowserRTC");
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports2) {
    "use strict";
    init_process_shim();
    exports2.byteLength = byteLength;
    exports2.toByteArray = toByteArray;
    exports2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    __name(getLens, "getLens");
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    __name(byteLength, "byteLength");
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    __name(_byteLength, "_byteLength");
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    __name(toByteArray, "toByteArray");
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    __name(tripletToBase64, "tripletToBase64");
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    __name(encodeChunk, "encodeChunk");
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
    __name(fromByteArray, "fromByteArray");
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports2) {
    init_process_shim();
    exports2.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports2.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports2) {
    "use strict";
    init_process_shim();
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports2.Buffer = Buffer3;
    exports2.SlowBuffer = SlowBuffer;
    exports2.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports2.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    __name(typedArraySupport, "typedArraySupport");
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length3) {
      if (length3 > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length3 + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length3);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    __name(createBuffer, "createBuffer");
    function Buffer3(arg, encodingOrOffset, length3) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from2(arg, encodingOrOffset, length3);
    }
    __name(Buffer3, "Buffer");
    Buffer3.poolSize = 8192;
    function from2(value, encodingOrOffset, length3) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length3);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length3);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length3);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length3);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    __name(from2, "from");
    Buffer3.from = function(value, encodingOrOffset, length3) {
      return from2(value, encodingOrOffset, length3);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    __name(assertSize, "assertSize");
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    __name(alloc, "alloc");
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    __name(allocUnsafe, "allocUnsafe");
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length3 = byteLength(string, encoding) | 0;
      let buf = createBuffer(length3);
      const actual = buf.write(string, encoding);
      if (actual !== length3) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    __name(fromString, "fromString");
    function fromArrayLike(array) {
      const length3 = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length3);
      for (let i = 0; i < length3; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    __name(fromArrayLike, "fromArrayLike");
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy2 = new Uint8Array(arrayView);
        return fromArrayBuffer(copy2.buffer, copy2.byteOffset, copy2.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    __name(fromArrayView, "fromArrayView");
    function fromArrayBuffer(array, byteOffset, length3) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length3 || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length3 === void 0) {
        buf = new Uint8Array(array);
      } else if (length3 === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length3);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    __name(fromArrayBuffer, "fromArrayBuffer");
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    __name(fromObject, "fromObject");
    function checked(length3) {
      if (length3 >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length3 | 0;
    }
    __name(checked, "checked");
    function SlowBuffer(length3) {
      if (+length3 != length3) {
        length3 = 0;
      }
      return Buffer3.alloc(+length3);
    }
    __name(SlowBuffer, "SlowBuffer");
    Buffer3.isBuffer = /* @__PURE__ */ __name(function isBuffer2(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    }, "isBuffer");
    Buffer3.compare = /* @__PURE__ */ __name(function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    }, "compare");
    Buffer3.isEncoding = /* @__PURE__ */ __name(function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, "isEncoding");
    Buffer3.concat = /* @__PURE__ */ __name(function concat(list, length3) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length3 === void 0) {
        length3 = 0;
        for (i = 0; i < list.length; ++i) {
          length3 += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length3);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    }, "concat");
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    __name(byteLength, "byteLength");
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    __name(slowToString, "slowToString");
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    __name(swap, "swap");
    Buffer3.prototype.swap16 = /* @__PURE__ */ __name(function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    }, "swap16");
    Buffer3.prototype.swap32 = /* @__PURE__ */ __name(function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    }, "swap32");
    Buffer3.prototype.swap64 = /* @__PURE__ */ __name(function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    }, "swap64");
    Buffer3.prototype.toString = /* @__PURE__ */ __name(function toString2() {
      const length3 = this.length;
      if (length3 === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length3);
      return slowToString.apply(this, arguments);
    }, "toString");
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = /* @__PURE__ */ __name(function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    }, "equals");
    Buffer3.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
      let str = "";
      const max2 = exports2.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max2).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max2)
        str += " ... ";
      return "<Buffer " + str + ">";
    }, "inspect");
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = /* @__PURE__ */ __name(function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    }, "compare");
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    __name(bidirectionalIndexOf, "bidirectionalIndexOf");
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      __name(read, "read");
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    __name(arrayIndexOf, "arrayIndexOf");
    Buffer3.prototype.includes = /* @__PURE__ */ __name(function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    }, "includes");
    Buffer3.prototype.indexOf = /* @__PURE__ */ __name(function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    }, "indexOf");
    Buffer3.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    }, "lastIndexOf");
    function hexWrite(buf, string, offset, length3) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length3) {
        length3 = remaining;
      } else {
        length3 = Number(length3);
        if (length3 > remaining) {
          length3 = remaining;
        }
      }
      const strLen = string.length;
      if (length3 > strLen / 2) {
        length3 = strLen / 2;
      }
      let i;
      for (i = 0; i < length3; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    __name(hexWrite, "hexWrite");
    function utf8Write(buf, string, offset, length3) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length3);
    }
    __name(utf8Write, "utf8Write");
    function asciiWrite(buf, string, offset, length3) {
      return blitBuffer(asciiToBytes(string), buf, offset, length3);
    }
    __name(asciiWrite, "asciiWrite");
    function base64Write(buf, string, offset, length3) {
      return blitBuffer(base64ToBytes(string), buf, offset, length3);
    }
    __name(base64Write, "base64Write");
    function ucs2Write(buf, string, offset, length3) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length3);
    }
    __name(ucs2Write, "ucs2Write");
    Buffer3.prototype.write = /* @__PURE__ */ __name(function write2(string, offset, length3, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length3 = this.length;
        offset = 0;
      } else if (length3 === void 0 && typeof offset === "string") {
        encoding = offset;
        length3 = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length3)) {
          length3 = length3 >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length3;
          length3 = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length3 === void 0 || length3 > remaining)
        length3 = remaining;
      if (string.length > 0 && (length3 < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length3);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length3);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length3);
          case "base64":
            return base64Write(this, string, offset, length3);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length3);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }, "write");
    Buffer3.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    }, "toJSON");
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    __name(base64Slice, "base64Slice");
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    __name(utf8Slice, "utf8Slice");
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    __name(decodeCodePointsArray, "decodeCodePointsArray");
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    __name(asciiSlice, "asciiSlice");
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    __name(latin1Slice, "latin1Slice");
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    __name(hexSlice, "hexSlice");
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    __name(utf16leSlice, "utf16leSlice");
    Buffer3.prototype.slice = /* @__PURE__ */ __name(function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    }, "slice");
    function checkOffset(offset, ext, length3) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length3)
        throw new RangeError("Trying to access beyond buffer length");
    }
    __name(checkOffset, "checkOffset");
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = /* @__PURE__ */ __name(function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    }, "readUIntLE");
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = /* @__PURE__ */ __name(function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    }, "readUIntBE");
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = /* @__PURE__ */ __name(function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    }, "readUInt8");
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = /* @__PURE__ */ __name(function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    }, "readUInt16LE");
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = /* @__PURE__ */ __name(function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    }, "readUInt16BE");
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = /* @__PURE__ */ __name(function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    }, "readUInt32LE");
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = /* @__PURE__ */ __name(function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    }, "readUInt32BE");
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last2 = this[offset + 7];
      if (first === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last2 * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    }, "readBigUInt64LE"));
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last2 = this[offset + 7];
      if (first === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last2;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    }, "readBigUInt64BE"));
    Buffer3.prototype.readIntLE = /* @__PURE__ */ __name(function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    }, "readIntLE");
    Buffer3.prototype.readIntBE = /* @__PURE__ */ __name(function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    }, "readIntBE");
    Buffer3.prototype.readInt8 = /* @__PURE__ */ __name(function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    }, "readInt8");
    Buffer3.prototype.readInt16LE = /* @__PURE__ */ __name(function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16LE");
    Buffer3.prototype.readInt16BE = /* @__PURE__ */ __name(function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16BE");
    Buffer3.prototype.readInt32LE = /* @__PURE__ */ __name(function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    }, "readInt32LE");
    Buffer3.prototype.readInt32BE = /* @__PURE__ */ __name(function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    }, "readInt32BE");
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last2 = this[offset + 7];
      if (first === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last2 << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    }, "readBigInt64LE"));
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last2 = this[offset + 7];
      if (first === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last2);
    }, "readBigInt64BE"));
    Buffer3.prototype.readFloatLE = /* @__PURE__ */ __name(function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    }, "readFloatLE");
    Buffer3.prototype.readFloatBE = /* @__PURE__ */ __name(function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    }, "readFloatBE");
    Buffer3.prototype.readDoubleLE = /* @__PURE__ */ __name(function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    }, "readDoubleLE");
    Buffer3.prototype.readDoubleBE = /* @__PURE__ */ __name(function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    }, "readDoubleBE");
    function checkInt(buf, value, offset, ext, max2, min2) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max2 || value < min2)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    __name(checkInt, "checkInt");
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = /* @__PURE__ */ __name(function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    }, "writeUIntLE");
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = /* @__PURE__ */ __name(function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    }, "writeUIntBE");
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = /* @__PURE__ */ __name(function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    }, "writeUInt8");
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = /* @__PURE__ */ __name(function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    }, "writeUInt16LE");
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = /* @__PURE__ */ __name(function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    }, "writeUInt16BE");
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = /* @__PURE__ */ __name(function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    }, "writeUInt32LE");
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = /* @__PURE__ */ __name(function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    }, "writeUInt32BE");
    function wrtBigUInt64LE(buf, value, offset, min2, max2) {
      checkIntBI(value, min2, max2, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    __name(wrtBigUInt64LE, "wrtBigUInt64LE");
    function wrtBigUInt64BE(buf, value, offset, min2, max2) {
      checkIntBI(value, min2, max2, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    __name(wrtBigUInt64BE, "wrtBigUInt64BE");
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64LE"));
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    }, "writeBigUInt64BE"));
    Buffer3.prototype.writeIntLE = /* @__PURE__ */ __name(function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    }, "writeIntLE");
    Buffer3.prototype.writeIntBE = /* @__PURE__ */ __name(function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    }, "writeIntBE");
    Buffer3.prototype.writeInt8 = /* @__PURE__ */ __name(function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    }, "writeInt8");
    Buffer3.prototype.writeInt16LE = /* @__PURE__ */ __name(function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    }, "writeInt16LE");
    Buffer3.prototype.writeInt16BE = /* @__PURE__ */ __name(function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    }, "writeInt16BE");
    Buffer3.prototype.writeInt32LE = /* @__PURE__ */ __name(function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    }, "writeInt32LE");
    Buffer3.prototype.writeInt32BE = /* @__PURE__ */ __name(function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    }, "writeInt32BE");
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64LE"));
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE"));
    function checkIEEE754(buf, value, offset, ext, max2, min2) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    __name(checkIEEE754, "checkIEEE754");
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    __name(writeFloat, "writeFloat");
    Buffer3.prototype.writeFloatLE = /* @__PURE__ */ __name(function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    }, "writeFloatLE");
    Buffer3.prototype.writeFloatBE = /* @__PURE__ */ __name(function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    }, "writeFloatBE");
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    __name(writeDouble, "writeDouble");
    Buffer3.prototype.writeDoubleLE = /* @__PURE__ */ __name(function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    }, "writeDoubleLE");
    Buffer3.prototype.writeDoubleBE = /* @__PURE__ */ __name(function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    }, "writeDoubleBE");
    Buffer3.prototype.copy = /* @__PURE__ */ __name(function copy2(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    }, "copy");
    Buffer3.prototype.fill = /* @__PURE__ */ __name(function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    }, "fill");
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = /* @__PURE__ */ __name(class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      }, "NodeError");
    }
    __name(E, "E");
    E(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    __name(addNumericalSeparator, "addNumericalSeparator");
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    __name(checkBounds, "checkBounds");
    function checkIntBI(value, min2, max2, buf, offset, byteLength2) {
      if (value > max2 || value < min2) {
        const n = typeof min2 === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min2 === 0 || min2 === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min2}${n} and <= ${max2}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    __name(checkIntBI, "checkIntBI");
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    __name(validateNumber, "validateNumber");
    function boundsError(value, length3, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length3 < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length3}`,
        value
      );
    }
    __name(boundsError, "boundsError");
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    __name(base64clean, "base64clean");
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length3 = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length3; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length3) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    __name(utf8ToBytes, "utf8ToBytes");
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    __name(asciiToBytes, "asciiToBytes");
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    __name(utf16leToBytes, "utf16leToBytes");
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    __name(base64ToBytes, "base64ToBytes");
    function blitBuffer(src, dst, offset, length3) {
      let i;
      for (i = 0; i < length3; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    __name(blitBuffer, "blitBuffer");
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    __name(isInstance, "isInstance");
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    __name(numberIsNaN, "numberIsNaN");
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    __name(defineBigIntMethod, "defineBigIntMethod");
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    __name(BufferBigIntNotDefined, "BufferBigIntNotDefined");
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports2, module2) {
    init_process_shim();
    var buffer = require_buffer();
    var Buffer3 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer3.from && Buffer3.alloc && Buffer3.allocUnsafe && Buffer3.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length3) {
      return Buffer3(arg, encodingOrOffset, length3);
    }
    __name(SafeBuffer, "SafeBuffer");
    SafeBuffer.prototype = Object.create(Buffer3.prototype);
    copyProps(Buffer3, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length3) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer3(arg, encodingOrOffset, length3);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer3(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer3(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/randombytes/browser.js
var require_browser3 = __commonJS({
  "node_modules/randombytes/browser.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var MAX_BYTES = 65536;
    var MAX_UINT32 = 4294967295;
    function oldBrowser() {
      throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
    }
    __name(oldBrowser, "oldBrowser");
    var Buffer3 = require_safe_buffer().Buffer;
    var crypto2 = global.crypto || global.msCrypto;
    if (crypto2 && crypto2.getRandomValues) {
      module2.exports = randomBytes;
    } else {
      module2.exports = oldBrowser;
    }
    function randomBytes(size, cb) {
      if (size > MAX_UINT32)
        throw new RangeError("requested too many random bytes");
      var bytes = Buffer3.allocUnsafe(size);
      if (size > 0) {
        if (size > MAX_BYTES) {
          for (var generated = 0; generated < size; generated += MAX_BYTES) {
            crypto2.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
          }
        } else {
          crypto2.getRandomValues(bytes);
        }
      }
      if (typeof cb === "function") {
        return import_browser.default.nextTick(function() {
          cb(null, bytes);
        });
      }
      return bytes;
    }
    __name(randomBytes, "randomBytes");
  }
});

// node_modules/events/events.js
var require_events = __commonJS({
  "node_modules/events/events.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : /* @__PURE__ */ __name(function ReflectApply2(target, receiver, args2) {
      return Function.prototype.apply.call(target, receiver, args2);
    }, "ReflectApply");
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      }, "ReflectOwnKeys");
    } else {
      ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      }, "ReflectOwnKeys");
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn)
        console.warn(warning);
    }
    __name(ProcessEmitWarning, "ProcessEmitWarning");
    var NumberIsNaN = Number.isNaN || /* @__PURE__ */ __name(function NumberIsNaN2(value) {
      return value !== value;
    }, "NumberIsNaN");
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    __name(EventEmitter, "EventEmitter");
    module2.exports = EventEmitter;
    module2.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    __name(checkListener, "checkListener");
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = /* @__PURE__ */ __name(function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    }, "setMaxListeners");
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    __name(_getMaxListeners, "_getMaxListeners");
    EventEmitter.prototype.getMaxListeners = /* @__PURE__ */ __name(function getMaxListeners() {
      return _getMaxListeners(this);
    }, "getMaxListeners");
    EventEmitter.prototype.emit = /* @__PURE__ */ __name(function emit(type) {
      var args2 = [];
      for (var i = 1; i < arguments.length; i++)
        args2.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args2.length > 0)
          er = args2[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args2);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args2);
      }
      return true;
    }, "emit");
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    __name(_addListener, "_addListener");
    EventEmitter.prototype.addListener = /* @__PURE__ */ __name(function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    }, "addListener");
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = /* @__PURE__ */ __name(function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    }, "prependListener");
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    __name(onceWrapper, "onceWrapper");
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    __name(_onceWrap, "_onceWrap");
    EventEmitter.prototype.once = /* @__PURE__ */ __name(function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    }, "once");
    EventEmitter.prototype.prependOnceListener = /* @__PURE__ */ __name(function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    }, "prependOnceListener");
    EventEmitter.prototype.removeListener = /* @__PURE__ */ __name(function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    }, "removeListener");
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = /* @__PURE__ */ __name(function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys3 = Object.keys(events);
        var key;
        for (i = 0; i < keys3.length; ++i) {
          key = keys3[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    }, "removeAllListeners");
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    __name(_listeners, "_listeners");
    EventEmitter.prototype.listeners = /* @__PURE__ */ __name(function listeners(type) {
      return _listeners(this, type, true);
    }, "listeners");
    EventEmitter.prototype.rawListeners = /* @__PURE__ */ __name(function rawListeners(type) {
      return _listeners(this, type, false);
    }, "rawListeners");
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    __name(listenerCount, "listenerCount");
    EventEmitter.prototype.eventNames = /* @__PURE__ */ __name(function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    }, "eventNames");
    function arrayClone(arr, n) {
      var copy2 = new Array(n);
      for (var i = 0; i < n; ++i)
        copy2[i] = arr[i];
      return copy2;
    }
    __name(arrayClone, "arrayClone");
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    __name(spliceOne, "spliceOne");
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    __name(unwrapListeners, "unwrapListeners");
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        __name(errorListener, "errorListener");
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        __name(resolver, "resolver");
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    __name(once, "once");
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    __name(addErrorHandlerIfEventEmitter, "addErrorHandlerIfEventEmitter");
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, /* @__PURE__ */ __name(function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        }, "wrapListener"));
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
    __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
  }
});

// node_modules/readable-stream/lib/internal/streams/stream-browser.js
var require_stream_browser = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports2, module2) {
    init_process_shim();
    module2.exports = require_events().EventEmitter;
  }
});

// (disabled):util
var require_util = __commonJS({
  "(disabled):util"() {
    init_process_shim();
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    function ownKeys(object, enumerableOnly) {
      var keys3 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys3.push.apply(keys3, symbols);
      }
      return keys3;
    }
    __name(ownKeys, "ownKeys");
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    __name(_objectSpread, "_objectSpread");
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    __name(_defineProperty, "_defineProperty");
    function _classCallCheck(instance12, Constructor) {
      if (!(instance12 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    __name(_classCallCheck, "_classCallCheck");
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    __name(_defineProperties, "_defineProperties");
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    __name(_createClass, "_createClass");
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    __name(_toPropertyKey, "_toPropertyKey");
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    __name(_toPrimitive, "_toPrimitive");
    var _require = require_buffer();
    var Buffer3 = _require.Buffer;
    var _require2 = require_util();
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer3.prototype.copy.call(src, target, offset);
    }
    __name(copyBuffer, "copyBuffer");
    module2.exports = /* @__PURE__ */ function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      __name(BufferList, "BufferList");
      _createClass(BufferList, [{
        key: "push",
        value: /* @__PURE__ */ __name(function push(v) {
          var entry = {
            data: v,
            next: null
          };
          if (this.length > 0)
            this.tail.next = entry;
          else
            this.head = entry;
          this.tail = entry;
          ++this.length;
        }, "push")
      }, {
        key: "unshift",
        value: /* @__PURE__ */ __name(function unshift(v) {
          var entry = {
            data: v,
            next: this.head
          };
          if (this.length === 0)
            this.tail = entry;
          this.head = entry;
          ++this.length;
        }, "unshift")
      }, {
        key: "shift",
        value: /* @__PURE__ */ __name(function shift() {
          if (this.length === 0)
            return;
          var ret = this.head.data;
          if (this.length === 1)
            this.head = this.tail = null;
          else
            this.head = this.head.next;
          --this.length;
          return ret;
        }, "shift")
      }, {
        key: "clear",
        value: /* @__PURE__ */ __name(function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }, "clear")
      }, {
        key: "join",
        value: /* @__PURE__ */ __name(function join(s) {
          if (this.length === 0)
            return "";
          var p = this.head;
          var ret = "" + p.data;
          while (p = p.next)
            ret += s + p.data;
          return ret;
        }, "join")
      }, {
        key: "concat",
        value: /* @__PURE__ */ __name(function concat(n) {
          if (this.length === 0)
            return Buffer3.alloc(0);
          var ret = Buffer3.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;
          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }
          return ret;
        }, "concat")
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: /* @__PURE__ */ __name(function consume(n, hasStrings) {
          var ret;
          if (n < this.head.data.length) {
            ret = this.head.data.slice(0, n);
            this.head.data = this.head.data.slice(n);
          } else if (n === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n) : this._getBuffer(n);
          }
          return ret;
        }, "consume")
      }, {
        key: "first",
        value: /* @__PURE__ */ __name(function first() {
          return this.head.data;
        }, "first")
        // Consumes a specified amount of characters from the buffered data.
      }, {
        key: "_getString",
        value: /* @__PURE__ */ __name(function _getString(n) {
          var p = this.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;
          while (p = p.next) {
            var str = p.data;
            var nb = n > str.length ? str.length : n;
            if (nb === str.length)
              ret += str;
            else
              ret += str.slice(0, n);
            n -= nb;
            if (n === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = str.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }, "_getString")
        // Consumes a specified amount of bytes from the buffered data.
      }, {
        key: "_getBuffer",
        value: /* @__PURE__ */ __name(function _getBuffer(n) {
          var ret = Buffer3.allocUnsafe(n);
          var p = this.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;
          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;
            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }, "_getBuffer")
        // Make sure the linked list only shows the minimal necessary information.
      }, {
        key: custom,
        value: /* @__PURE__ */ __name(function value(_, options) {
          return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }, "value")
      }]);
      return BufferList;
    }();
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            import_browser.default.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            import_browser.default.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            import_browser.default.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            import_browser.default.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            import_browser.default.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          import_browser.default.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          import_browser.default.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    __name(destroy, "destroy");
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    __name(emitErrorAndCloseNT, "emitErrorAndCloseNT");
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose)
        return;
      if (self2._readableState && !self2._readableState.emitClose)
        return;
      self2.emit("close");
    }
    __name(emitCloseNT, "emitCloseNT");
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    __name(undestroy, "undestroy");
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    __name(emitErrorNT, "emitErrorNT");
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy)
        stream.destroy(err);
      else
        stream.emit("error", err);
    }
    __name(errorOrDestroy, "errorOrDestroy");
    module2.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors-browser.js
var require_errors_browser = __commonJS({
  "node_modules/readable-stream/errors-browser.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    __name(_inheritsLoose, "_inheritsLoose");
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      __name(getMessage, "getMessage");
      var NodeError = /* @__PURE__ */ function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
          return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        __name(NodeError2, "NodeError");
        return NodeError2;
      }(Base);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    __name(createErrorType, "createErrorType");
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    __name(oneOf, "oneOf");
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    __name(startsWith, "startsWith");
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    __name(endsWith, "endsWith");
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    __name(includes, "includes");
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(typeof actual);
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module2.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    __name(highWaterMarkFrom, "highWaterMarkFrom");
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    __name(getHighWaterMark, "getHighWaterMark");
    module2.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports2, module2) {
    init_process_shim();
    if (typeof Object.create === "function") {
      module2.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      }, "inherits");
    } else {
      module2.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = /* @__PURE__ */ __name(function() {
          }, "TempCtor");
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      }, "inherits");
    }
  }
});

// node_modules/util-deprecate/browser.js
var require_browser4 = __commonJS({
  "node_modules/util-deprecate/browser.js"(exports2, module2) {
    init_process_shim();
    module2.exports = deprecate;
    function deprecate(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      __name(deprecated, "deprecated");
      return deprecated;
    }
    __name(deprecate, "deprecate");
    function config(name) {
      try {
        if (!global.localStorage)
          return false;
      } catch (_) {
        return false;
      }
      var val = global.localStorage[name];
      if (null == val)
        return false;
      return String(val).toLowerCase() === "true";
    }
    __name(config, "config");
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    module2.exports = Writable2;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    __name(CorkedRequest, "CorkedRequest");
    var Duplex;
    Writable2.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_browser4()
    };
    var Stream = require_stream_browser();
    var Buffer3 = require_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer3.from(chunk);
    }
    __name(_uint8ArrayToBuffer, "_uint8ArrayToBuffer");
    function _isUint8Array(obj) {
      return Buffer3.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    __name(_isUint8Array, "_isUint8Array");
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits_browser()(Writable2, Stream);
    function nop() {
    }
    __name(nop, "nop");
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    __name(WritableState, "WritableState");
    WritableState.prototype.getBuffer = /* @__PURE__ */ __name(function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    }, "getBuffer");
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(/* @__PURE__ */ __name(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "writableStateBufferGetter"), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable2, Symbol.hasInstance, {
        value: /* @__PURE__ */ __name(function value(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable2)
            return false;
          return object && object._writableState instanceof WritableState;
        }, "value")
      });
    } else {
      realHasInstance = /* @__PURE__ */ __name(function realHasInstance2(object) {
        return object instanceof this;
      }, "realHasInstance");
    }
    function Writable2(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable2, this))
        return new Writable2(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    __name(Writable2, "Writable");
    Writable2.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      import_browser.default.nextTick(cb, er);
    }
    __name(writeAfterEnd, "writeAfterEnd");
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        import_browser.default.nextTick(cb, er);
        return false;
      }
      return true;
    }
    __name(validChunk, "validChunk");
    Writable2.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer3.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ending)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable2.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable2.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable2.prototype.setDefaultEncoding = /* @__PURE__ */ __name(function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    }, "setDefaultEncoding");
    Object.defineProperty(Writable2.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._writableState && this._writableState.getBuffer();
      }, "get")
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer3.from(chunk, encoding);
      }
      return chunk;
    }
    __name(decodeChunk, "decodeChunk");
    Object.defineProperty(Writable2.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._writableState.highWaterMark;
      }, "get")
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last2 = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last2) {
          last2.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    __name(writeOrBuffer, "writeOrBuffer");
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed)
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    __name(doWrite, "doWrite");
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        import_browser.default.nextTick(cb, er);
        import_browser.default.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    __name(onwriteError, "onwriteError");
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    __name(onwriteStateUpdate, "onwriteStateUpdate");
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function")
        throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          import_browser.default.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    __name(onwrite, "onwrite");
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    __name(afterWrite, "afterWrite");
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    __name(onwriteDrain, "onwriteDrain");
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count2 = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count2] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count2 += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    __name(clearBuffer, "clearBuffer");
    Writable2.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable2.prototype._writev = null;
    Writable2.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending)
        endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable2.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._writableState.length;
      }, "get")
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    __name(needFinish, "needFinish");
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    __name(callFinal, "callFinal");
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          import_browser.default.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    __name(prefinish, "prefinish");
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    __name(finishMaybe, "finishMaybe");
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          import_browser.default.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    __name(endWritable, "endWritable");
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    __name(onCorkedFinish, "onCorkedFinish");
    Object.defineProperty(Writable2.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }, "set")
    });
    Writable2.prototype.destroy = destroyImpl.destroy;
    Writable2.prototype._undestroy = destroyImpl.undestroy;
    Writable2.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var objectKeys = Object.keys || function(obj) {
      var keys4 = [];
      for (var key in obj)
        keys4.push(key);
      return keys4;
    };
    module2.exports = Duplex;
    var Readable2 = require_stream_readable();
    var Writable2 = require_stream_writable();
    require_inherits_browser()(Duplex, Readable2);
    {
      keys3 = objectKeys(Writable2.prototype);
      for (v = 0; v < keys3.length; v++) {
        method = keys3[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable2.prototype[method];
      }
    }
    var keys3;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable2.call(this, options);
      Writable2.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false)
          this.readable = false;
        if (options.writable === false)
          this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    __name(Duplex, "Duplex");
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._writableState.highWaterMark;
      }, "get")
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._writableState && this._writableState.getBuffer();
      }, "get")
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._writableState.length;
      }, "get")
    });
    function onend() {
      if (this._writableState.ended)
        return;
      import_browser.default.nextTick(onEndNT, this);
    }
    __name(onend, "onend");
    function onEndNT(self2) {
      self2.end();
    }
    __name(onEndNT, "onEndNT");
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }, "set")
    });
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports2) {
    "use strict";
    init_process_shim();
    var Buffer3 = require_safe_buffer().Buffer;
    var isEncoding = Buffer3.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    __name(_normalizeEncoding, "_normalizeEncoding");
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer3.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    __name(normalizeEncoding, "normalizeEncoding");
    exports2.StringDecoder = StringDecoder2;
    function StringDecoder2(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer3.allocUnsafe(nb);
    }
    __name(StringDecoder2, "StringDecoder");
    StringDecoder2.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder2.prototype.end = utf8End;
    StringDecoder2.prototype.text = utf8Text;
    StringDecoder2.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    __name(utf8CheckByte, "utf8CheckByte");
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    __name(utf8CheckIncomplete, "utf8CheckIncomplete");
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    __name(utf8CheckExtraBytes, "utf8CheckExtraBytes");
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    __name(utf8FillLast, "utf8FillLast");
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    __name(utf8Text, "utf8Text");
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    __name(utf8End, "utf8End");
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    __name(utf16Text, "utf16Text");
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    __name(utf16End, "utf16End");
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    __name(base64Text, "base64Text");
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    __name(base64End, "base64End");
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    __name(simpleWrite, "simpleWrite");
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
    __name(simpleEnd, "simpleEnd");
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        for (var _len = arguments.length, args2 = new Array(_len), _key = 0; _key < _len; _key++) {
          args2[_key] = arguments[_key];
        }
        callback.apply(this, args2);
      };
    }
    __name(once, "once");
    function noop3() {
    }
    __name(noop3, "noop");
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    __name(isRequest, "isRequest");
    function eos(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop3);
      var readable2 = opts.readable || opts.readable !== false && stream.readable;
      var writable2 = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = /* @__PURE__ */ __name(function onlegacyfinish2() {
        if (!stream.writable)
          onfinish();
      }, "onlegacyfinish");
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = /* @__PURE__ */ __name(function onfinish2() {
        writable2 = false;
        writableEnded = true;
        if (!readable2)
          callback.call(stream);
      }, "onfinish");
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = /* @__PURE__ */ __name(function onend2() {
        readable2 = false;
        readableEnded = true;
        if (!writable2)
          callback.call(stream);
      }, "onend");
      var onerror = /* @__PURE__ */ __name(function onerror2(err) {
        callback.call(stream, err);
      }, "onerror");
      var onclose = /* @__PURE__ */ __name(function onclose2() {
        var err;
        if (readable2 && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable2 && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      }, "onclose");
      var onrequest = /* @__PURE__ */ __name(function onrequest2() {
        stream.req.on("finish", onfinish);
      }, "onrequest");
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req)
          onrequest();
        else
          stream.on("request", onrequest);
      } else if (writable2 && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false)
        stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    __name(eos, "eos");
    module2.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    __name(_defineProperty, "_defineProperty");
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    __name(_toPropertyKey, "_toPropertyKey");
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    __name(_toPrimitive, "_toPrimitive");
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    __name(createIterResult, "createIterResult");
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    __name(readAndResolve, "readAndResolve");
    function onReadable(iter) {
      import_browser.default.nextTick(readAndResolve, iter);
    }
    __name(onReadable, "onReadable");
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    __name(wrapForNext, "wrapForNext");
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: /* @__PURE__ */ __name(function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            import_browser.default.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }, "next")
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", /* @__PURE__ */ __name(function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }, "_return")), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = /* @__PURE__ */ __name(function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: /* @__PURE__ */ __name(function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        }, "value"),
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    }, "createReadableStreamAsyncIterator");
    module2.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from-browser.js
var require_from_browser = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from-browser.js"(exports2, module2) {
    init_process_shim();
    module2.exports = function() {
      throw new Error("Readable.from is not available in the browser");
    };
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    module2.exports = Readable2;
    var Duplex;
    Readable2.ReadableState = ReadableState;
    var EE = require_events().EventEmitter;
    var EElistenerCount = /* @__PURE__ */ __name(function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    }, "EElistenerCount");
    var Stream = require_stream_browser();
    var Buffer3 = require_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer3.from(chunk);
    }
    __name(_uint8ArrayToBuffer, "_uint8ArrayToBuffer");
    function _isUint8Array(obj) {
      return Buffer3.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    __name(_isUint8Array, "_isUint8Array");
    var debugUtil = require_util();
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = /* @__PURE__ */ __name(function debug2() {
      }, "debug");
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder2;
    var createReadableStreamAsyncIterator;
    var from2;
    require_inherits_browser()(Readable2, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    __name(prependListener, "prependListener");
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder2)
          StringDecoder2 = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder2(options.encoding);
        this.encoding = options.encoding;
      }
    }
    __name(ReadableState, "ReadableState");
    function Readable2(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable2))
        return new Readable2(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    __name(Readable2, "Readable");
    Object.defineProperty(Readable2.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }, "set")
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer3.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer3.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    __name(readableAddChunk, "readableAddChunk");
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    __name(addChunk, "addChunk");
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er;
    }
    __name(chunkInvalid, "chunkInvalid");
    Readable2.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable2.prototype.setEncoding = function(enc) {
      if (!StringDecoder2)
        StringDecoder2 = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder2(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    __name(computeNewHighWaterMark, "computeNewHighWaterMark");
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    __name(howMuchToRead, "howMuchToRead");
    Readable2.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    __name(onEofChunk, "onEofChunk");
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        import_browser.default.nextTick(emitReadable_, stream);
      }
    }
    __name(emitReadable, "emitReadable");
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    __name(emitReadable_, "emitReadable_");
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        import_browser.default.nextTick(maybeReadMore_, stream, state);
      }
    }
    __name(maybeReadMore, "maybeReadMore");
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    __name(maybeReadMore_, "maybeReadMore_");
    Readable2.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== import_browser.default.stdout && dest !== import_browser.default.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        import_browser.default.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable2, unpipeInfo) {
        debug("onunpipe");
        if (readable2 === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      __name(onunpipe, "onunpipe");
      function onend() {
        debug("onend");
        dest.end();
      }
      __name(onend, "onend");
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      __name(cleanup, "cleanup");
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      __name(ondata, "ondata");
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          errorOrDestroy(dest, er);
      }
      __name(onerror, "onerror");
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      __name(onclose, "onclose");
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      __name(onfinish, "onfinish");
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      __name(unpipe, "unpipe");
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return /* @__PURE__ */ __name(function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      }, "pipeOnDrainFunctionResult");
    }
    __name(pipeOnDrain, "pipeOnDrain");
    Readable2.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            import_browser.default.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    Readable2.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        import_browser.default.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable2.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        import_browser.default.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    __name(updateReadableListening, "updateReadableListening");
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    __name(nReadingNextTick, "nReadingNextTick");
    Readable2.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        import_browser.default.nextTick(resume_, stream, state);
      }
    }
    __name(resume, "resume");
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    __name(resume_, "resume_");
    Readable2.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null)
        ;
    }
    __name(flow, "flow");
    Readable2.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = (/* @__PURE__ */ __name(function methodWrap(method) {
            return /* @__PURE__ */ __name(function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            }, "methodWrapReturnFunction");
          }, "methodWrap"))(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable2.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._readableState.highWaterMark;
      }, "get")
    });
    Object.defineProperty(Readable2.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._readableState && this._readableState.buffer;
      }, "get")
    });
    Object.defineProperty(Readable2.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._readableState.flowing;
      }, "get"),
      set: /* @__PURE__ */ __name(function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }, "set")
    });
    Readable2._fromList = fromList;
    Object.defineProperty(Readable2.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: /* @__PURE__ */ __name(function get3() {
        return this._readableState.length;
      }, "get")
    });
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    __name(fromList, "fromList");
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        import_browser.default.nextTick(endReadableNT, state, stream);
      }
    }
    __name(endReadable, "endReadable");
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    __name(endReadableNT, "endReadableNT");
    if (typeof Symbol === "function") {
      Readable2.from = function(iterable, opts) {
        if (from2 === void 0) {
          from2 = require_from_browser();
        }
        return from2(Readable2, iterable, opts);
      };
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
    __name(indexOf, "indexOf");
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    module2.exports = Transform;
    var _require$codes = require_errors_browser().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits_browser()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    __name(afterTransform, "afterTransform");
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    __name(Transform, "Transform");
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    __name(prefinish, "prefinish");
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming)
        throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
    __name(done, "done");
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits_browser()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    __name(PassThrough, "PassThrough");
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    __name(once, "once");
    var _require$codes = require_errors_browser().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop3(err) {
      if (err)
        throw err;
    }
    __name(noop3, "noop");
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    __name(isRequest, "isRequest");
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0)
        eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err)
          return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed)
          return;
        if (destroyed)
          return;
        destroyed = true;
        if (isRequest(stream))
          return stream.abort();
        if (typeof stream.destroy === "function")
          return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    __name(destroyer, "destroyer");
    function call(fn) {
      fn();
    }
    __name(call, "call");
    function pipe(from2, to) {
      return from2.pipe(to);
    }
    __name(pipe, "pipe");
    function popCallback(streams) {
      if (!streams.length)
        return noop3;
      if (typeof streams[streams.length - 1] !== "function")
        return noop3;
      return streams.pop();
    }
    __name(popCallback, "popCallback");
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0]))
        streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error)
            error = err;
          if (err)
            destroys.forEach(call);
          if (reading)
            return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    __name(pipeline, "pipeline");
    module2.exports = pipeline;
  }
});

// node_modules/readable-stream/readable-browser.js
var require_readable_browser = __commonJS({
  "node_modules/readable-stream/readable-browser.js"(exports2, module2) {
    init_process_shim();
    exports2 = module2.exports = require_stream_readable();
    exports2.Stream = exports2;
    exports2.Readable = exports2;
    exports2.Writable = require_stream_writable();
    exports2.Duplex = require_stream_duplex();
    exports2.Transform = require_stream_transform();
    exports2.PassThrough = require_stream_passthrough();
    exports2.finished = require_end_of_stream();
    exports2.pipeline = require_pipeline();
  }
});

// node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "node_modules/queue-microtask/index.js"(exports2, module2) {
    init_process_shim();
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// node_modules/err-code/index.js
var require_err_code = __commonJS({
  "node_modules/err-code/index.js"(exports2, module2) {
    "use strict";
    init_process_shim();
    function assign2(obj, props) {
      for (const key in props) {
        Object.defineProperty(obj, key, {
          value: props[key],
          enumerable: true,
          configurable: true
        });
      }
      return obj;
    }
    __name(assign2, "assign");
    function createError(err, code, props) {
      if (!err || typeof err === "string") {
        throw new TypeError("Please pass an Error to err-code");
      }
      if (!props) {
        props = {};
      }
      if (typeof code === "object") {
        props = code;
        code = "";
      }
      if (code) {
        props.code = code;
      }
      try {
        return assign2(err, props);
      } catch (_) {
        props.message = err.message;
        props.stack = err.stack;
        const ErrClass = /* @__PURE__ */ __name(function() {
        }, "ErrClass");
        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));
        const output = assign2(new ErrClass(), props);
        return output;
      }
    }
    __name(createError, "createError");
    module2.exports = createError;
  }
});

// node_modules/simple-peer/index.js
var require_simple_peer = __commonJS({
  "node_modules/simple-peer/index.js"(exports2, module2) {
    init_process_shim();
    var debug = require_browser2()("simple-peer");
    var getBrowserRTC = require_get_browser_rtc();
    var randombytes = require_browser3();
    var stream = require_readable_browser();
    var queueMicrotask2 = require_queue_microtask();
    var errCode = require_err_code();
    var { Buffer: Buffer3 } = require_buffer();
    var MAX_BUFFERED_AMOUNT = 64 * 1024;
    var ICECOMPLETE_TIMEOUT = 5 * 1e3;
    var CHANNEL_CLOSING_TIMEOUT = 5 * 1e3;
    function filterTrickle(sdp) {
      return sdp.replace(/a=ice-options:trickle\s\n/g, "");
    }
    __name(filterTrickle, "filterTrickle");
    function warn(message) {
      console.warn(message);
    }
    __name(warn, "warn");
    var Peer2 = class extends stream.Duplex {
      constructor(opts) {
        opts = Object.assign({
          allowHalfOpen: false
        }, opts);
        super(opts);
        this._id = randombytes(4).toString("hex").slice(0, 7);
        this._debug("new peer %o", opts);
        this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString("hex") : null;
        this.initiator = opts.initiator || false;
        this.channelConfig = opts.channelConfig || Peer2.channelConfig;
        this.channelNegotiated = this.channelConfig.negotiated;
        this.config = Object.assign({}, Peer2.config, opts.config);
        this.offerOptions = opts.offerOptions || {};
        this.answerOptions = opts.answerOptions || {};
        this.sdpTransform = opts.sdpTransform || ((sdp) => sdp);
        this.streams = opts.streams || (opts.stream ? [opts.stream] : []);
        this.trickle = opts.trickle !== void 0 ? opts.trickle : true;
        this.allowHalfTrickle = opts.allowHalfTrickle !== void 0 ? opts.allowHalfTrickle : false;
        this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
        this.destroyed = false;
        this.destroying = false;
        this._connected = false;
        this.remoteAddress = void 0;
        this.remoteFamily = void 0;
        this.remotePort = void 0;
        this.localAddress = void 0;
        this.localFamily = void 0;
        this.localPort = void 0;
        this._wrtc = opts.wrtc && typeof opts.wrtc === "object" ? opts.wrtc : getBrowserRTC();
        if (!this._wrtc) {
          if (typeof window === "undefined") {
            throw errCode(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
          } else {
            throw errCode(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
          }
        }
        this._pcReady = false;
        this._channelReady = false;
        this._iceComplete = false;
        this._iceCompleteTimer = null;
        this._channel = null;
        this._pendingCandidates = [];
        this._isNegotiating = false;
        this._firstNegotiation = true;
        this._batchedNegotiation = false;
        this._queuedNegotiation = false;
        this._sendersAwaitingStable = [];
        this._senderMap = /* @__PURE__ */ new Map();
        this._closingInterval = null;
        this._remoteTracks = [];
        this._remoteStreams = [];
        this._chunk = null;
        this._cb = null;
        this._interval = null;
        try {
          this._pc = new this._wrtc.RTCPeerConnection(this.config);
        } catch (err) {
          this.destroy(errCode(err, "ERR_PC_CONSTRUCTOR"));
          return;
        }
        this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === "number";
        this._pc.oniceconnectionstatechange = () => {
          this._onIceStateChange();
        };
        this._pc.onicegatheringstatechange = () => {
          this._onIceStateChange();
        };
        this._pc.onconnectionstatechange = () => {
          this._onConnectionStateChange();
        };
        this._pc.onsignalingstatechange = () => {
          this._onSignalingStateChange();
        };
        this._pc.onicecandidate = (event) => {
          this._onIceCandidate(event);
        };
        if (typeof this._pc.peerIdentity === "object") {
          this._pc.peerIdentity.catch((err) => {
            this.destroy(errCode(err, "ERR_PC_PEER_IDENTITY"));
          });
        }
        if (this.initiator || this.channelNegotiated) {
          this._setupData({
            channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
          });
        } else {
          this._pc.ondatachannel = (event) => {
            this._setupData(event);
          };
        }
        if (this.streams) {
          this.streams.forEach((stream2) => {
            this.addStream(stream2);
          });
        }
        this._pc.ontrack = (event) => {
          this._onTrack(event);
        };
        this._debug("initial negotiation");
        this._needsNegotiation();
        this._onFinishBound = () => {
          this._onFinish();
        };
        this.once("finish", this._onFinishBound);
      }
      get bufferSize() {
        return this._channel && this._channel.bufferedAmount || 0;
      }
      // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
      // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
      get connected() {
        return this._connected && this._channel.readyState === "open";
      }
      address() {
        return { port: this.localPort, family: this.localFamily, address: this.localAddress };
      }
      signal(data) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (err) {
            data = {};
          }
        }
        this._debug("signal()");
        if (data.renegotiate && this.initiator) {
          this._debug("got request to renegotiate");
          this._needsNegotiation();
        }
        if (data.transceiverRequest && this.initiator) {
          this._debug("got request for transceiver");
          this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
        }
        if (data.candidate) {
          if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
            this._addIceCandidate(data.candidate);
          } else {
            this._pendingCandidates.push(data.candidate);
          }
        }
        if (data.sdp) {
          this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(() => {
            if (this.destroyed)
              return;
            this._pendingCandidates.forEach((candidate) => {
              this._addIceCandidate(candidate);
            });
            this._pendingCandidates = [];
            if (this._pc.remoteDescription.type === "offer")
              this._createAnswer();
          }).catch((err) => {
            this.destroy(errCode(err, "ERR_SET_REMOTE_DESCRIPTION"));
          });
        }
        if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
          this.destroy(errCode(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
        }
      }
      _addIceCandidate(candidate) {
        const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);
        this._pc.addIceCandidate(iceCandidateObj).catch((err) => {
          if (!iceCandidateObj.address || iceCandidateObj.address.endsWith(".local")) {
            warn("Ignoring unsupported ICE candidate.");
          } else {
            this.destroy(errCode(err, "ERR_ADD_ICE_CANDIDATE"));
          }
        });
      }
      /**
       * Send text/binary data to the remote peer.
       * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
       */
      send(chunk) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
        this._channel.send(chunk);
      }
      /**
       * Add a Transceiver to the connection.
       * @param {String} kind
       * @param {Object} init
       */
      addTransceiver(kind, init2) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTransceiver()");
        if (this.initiator) {
          try {
            this._pc.addTransceiver(kind, init2);
            this._needsNegotiation();
          } catch (err) {
            this.destroy(errCode(err, "ERR_ADD_TRANSCEIVER"));
          }
        } else {
          this.emit("signal", {
            // request initiator to renegotiate
            type: "transceiverRequest",
            transceiverRequest: { kind, init: init2 }
          });
        }
      }
      /**
       * Add a MediaStream to the connection.
       * @param {MediaStream} stream
       */
      addStream(stream2) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addStream()");
        stream2.getTracks().forEach((track) => {
          this.addTrack(track, stream2);
        });
      }
      /**
       * Add a MediaStreamTrack to the connection.
       * @param {MediaStreamTrack} track
       * @param {MediaStream} stream
       */
      addTrack(track, stream2) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("addTrack()");
        const submap = this._senderMap.get(track) || /* @__PURE__ */ new Map();
        let sender = submap.get(stream2);
        if (!sender) {
          sender = this._pc.addTrack(track, stream2);
          submap.set(stream2, sender);
          this._senderMap.set(track, submap);
          this._needsNegotiation();
        } else if (sender.removed) {
          throw errCode(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
        } else {
          throw errCode(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
        }
      }
      /**
       * Replace a MediaStreamTrack by another in the connection.
       * @param {MediaStreamTrack} oldTrack
       * @param {MediaStreamTrack} newTrack
       * @param {MediaStream} stream
       */
      replaceTrack(oldTrack, newTrack, stream2) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("replaceTrack()");
        const submap = this._senderMap.get(oldTrack);
        const sender = submap ? submap.get(stream2) : null;
        if (!sender) {
          throw errCode(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
        }
        if (newTrack)
          this._senderMap.set(newTrack, submap);
        if (sender.replaceTrack != null) {
          sender.replaceTrack(newTrack);
        } else {
          this.destroy(errCode(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"));
        }
      }
      /**
       * Remove a MediaStreamTrack from the connection.
       * @param {MediaStreamTrack} track
       * @param {MediaStream} stream
       */
      removeTrack(track, stream2) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSender()");
        const submap = this._senderMap.get(track);
        const sender = submap ? submap.get(stream2) : null;
        if (!sender) {
          throw errCode(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
        }
        try {
          sender.removed = true;
          this._pc.removeTrack(sender);
        } catch (err) {
          if (err.name === "NS_ERROR_UNEXPECTED") {
            this._sendersAwaitingStable.push(sender);
          } else {
            this.destroy(errCode(err, "ERR_REMOVE_TRACK"));
          }
        }
        this._needsNegotiation();
      }
      /**
       * Remove a MediaStream from the connection.
       * @param {MediaStream} stream
       */
      removeStream(stream2) {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
        this._debug("removeSenders()");
        stream2.getTracks().forEach((track) => {
          this.removeTrack(track, stream2);
        });
      }
      _needsNegotiation() {
        this._debug("_needsNegotiation");
        if (this._batchedNegotiation)
          return;
        this._batchedNegotiation = true;
        queueMicrotask2(() => {
          this._batchedNegotiation = false;
          if (this.initiator || !this._firstNegotiation) {
            this._debug("starting batched negotiation");
            this.negotiate();
          } else {
            this._debug("non-initiator initial negotiation request discarded");
          }
          this._firstNegotiation = false;
        });
      }
      negotiate() {
        if (this.destroying)
          return;
        if (this.destroyed)
          throw errCode(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
        if (this.initiator) {
          if (this._isNegotiating) {
            this._queuedNegotiation = true;
            this._debug("already negotiating, queueing");
          } else {
            this._debug("start negotiation");
            setTimeout(() => {
              this._createOffer();
            }, 0);
          }
        } else {
          if (this._isNegotiating) {
            this._queuedNegotiation = true;
            this._debug("already negotiating, queueing");
          } else {
            this._debug("requesting negotiation from initiator");
            this.emit("signal", {
              // request initiator to renegotiate
              type: "renegotiate",
              renegotiate: true
            });
          }
        }
        this._isNegotiating = true;
      }
      // TODO: Delete this method once readable-stream is updated to contain a default
      // implementation of destroy() that automatically calls _destroy()
      // See: https://github.com/nodejs/readable-stream/issues/283
      destroy(err) {
        this._destroy(err, () => {
        });
      }
      _destroy(err, cb) {
        if (this.destroyed || this.destroying)
          return;
        this.destroying = true;
        this._debug("destroying (error: %s)", err && (err.message || err));
        queueMicrotask2(() => {
          this.destroyed = true;
          this.destroying = false;
          this._debug("destroy (error: %s)", err && (err.message || err));
          this.readable = this.writable = false;
          if (!this._readableState.ended)
            this.push(null);
          if (!this._writableState.finished)
            this.end();
          this._connected = false;
          this._pcReady = false;
          this._channelReady = false;
          this._remoteTracks = null;
          this._remoteStreams = null;
          this._senderMap = null;
          clearInterval(this._closingInterval);
          this._closingInterval = null;
          clearInterval(this._interval);
          this._interval = null;
          this._chunk = null;
          this._cb = null;
          if (this._onFinishBound)
            this.removeListener("finish", this._onFinishBound);
          this._onFinishBound = null;
          if (this._channel) {
            try {
              this._channel.close();
            } catch (err2) {
            }
            this._channel.onmessage = null;
            this._channel.onopen = null;
            this._channel.onclose = null;
            this._channel.onerror = null;
          }
          if (this._pc) {
            try {
              this._pc.close();
            } catch (err2) {
            }
            this._pc.oniceconnectionstatechange = null;
            this._pc.onicegatheringstatechange = null;
            this._pc.onsignalingstatechange = null;
            this._pc.onicecandidate = null;
            this._pc.ontrack = null;
            this._pc.ondatachannel = null;
          }
          this._pc = null;
          this._channel = null;
          if (err)
            this.emit("error", err);
          this.emit("close");
          cb();
        });
      }
      _setupData(event) {
        if (!event.channel) {
          return this.destroy(errCode(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
        }
        this._channel = event.channel;
        this._channel.binaryType = "arraybuffer";
        if (typeof this._channel.bufferedAmountLowThreshold === "number") {
          this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
        }
        this.channelName = this._channel.label;
        this._channel.onmessage = (event2) => {
          this._onChannelMessage(event2);
        };
        this._channel.onbufferedamountlow = () => {
          this._onChannelBufferedAmountLow();
        };
        this._channel.onopen = () => {
          this._onChannelOpen();
        };
        this._channel.onclose = () => {
          this._onChannelClose();
        };
        this._channel.onerror = (event2) => {
          const err = event2.error instanceof Error ? event2.error : new Error(`Datachannel error: ${event2.message} ${event2.filename}:${event2.lineno}:${event2.colno}`);
          this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
        };
        let isClosing = false;
        this._closingInterval = setInterval(() => {
          if (this._channel && this._channel.readyState === "closing") {
            if (isClosing)
              this._onChannelClose();
            isClosing = true;
          } else {
            isClosing = false;
          }
        }, CHANNEL_CLOSING_TIMEOUT);
      }
      _read() {
      }
      _write(chunk, encoding, cb) {
        if (this.destroyed)
          return cb(errCode(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
        if (this._connected) {
          try {
            this.send(chunk);
          } catch (err) {
            return this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
          }
          if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
            this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount);
            this._cb = cb;
          } else {
            cb(null);
          }
        } else {
          this._debug("write before connect");
          this._chunk = chunk;
          this._cb = cb;
        }
      }
      // When stream finishes writing, close socket. Half open connections are not
      // supported.
      _onFinish() {
        if (this.destroyed)
          return;
        const destroySoon = /* @__PURE__ */ __name(() => {
          setTimeout(() => this.destroy(), 1e3);
        }, "destroySoon");
        if (this._connected) {
          destroySoon();
        } else {
          this.once("connect", destroySoon);
        }
      }
      _startIceCompleteTimeout() {
        if (this.destroyed)
          return;
        if (this._iceCompleteTimer)
          return;
        this._debug("started iceComplete timeout");
        this._iceCompleteTimer = setTimeout(() => {
          if (!this._iceComplete) {
            this._iceComplete = true;
            this._debug("iceComplete timeout completed");
            this.emit("iceTimeout");
            this.emit("_iceComplete");
          }
        }, this.iceCompleteTimeout);
      }
      _createOffer() {
        if (this.destroyed)
          return;
        this._pc.createOffer(this.offerOptions).then((offer) => {
          if (this.destroyed)
            return;
          if (!this.trickle && !this.allowHalfTrickle)
            offer.sdp = filterTrickle(offer.sdp);
          offer.sdp = this.sdpTransform(offer.sdp);
          const sendOffer = /* @__PURE__ */ __name(() => {
            if (this.destroyed)
              return;
            const signal = this._pc.localDescription || offer;
            this._debug("signal");
            this.emit("signal", {
              type: signal.type,
              sdp: signal.sdp
            });
          }, "sendOffer");
          const onSuccess = /* @__PURE__ */ __name(() => {
            this._debug("createOffer success");
            if (this.destroyed)
              return;
            if (this.trickle || this._iceComplete)
              sendOffer();
            else
              this.once("_iceComplete", sendOffer);
          }, "onSuccess");
          const onError = /* @__PURE__ */ __name((err) => {
            this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
          }, "onError");
          this._pc.setLocalDescription(offer).then(onSuccess).catch(onError);
        }).catch((err) => {
          this.destroy(errCode(err, "ERR_CREATE_OFFER"));
        });
      }
      _requestMissingTransceivers() {
        if (this._pc.getTransceivers) {
          this._pc.getTransceivers().forEach((transceiver) => {
            if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
              transceiver.requested = true;
              this.addTransceiver(transceiver.sender.track.kind);
            }
          });
        }
      }
      _createAnswer() {
        if (this.destroyed)
          return;
        this._pc.createAnswer(this.answerOptions).then((answer) => {
          if (this.destroyed)
            return;
          if (!this.trickle && !this.allowHalfTrickle)
            answer.sdp = filterTrickle(answer.sdp);
          answer.sdp = this.sdpTransform(answer.sdp);
          const sendAnswer = /* @__PURE__ */ __name(() => {
            if (this.destroyed)
              return;
            const signal = this._pc.localDescription || answer;
            this._debug("signal");
            this.emit("signal", {
              type: signal.type,
              sdp: signal.sdp
            });
            if (!this.initiator)
              this._requestMissingTransceivers();
          }, "sendAnswer");
          const onSuccess = /* @__PURE__ */ __name(() => {
            if (this.destroyed)
              return;
            if (this.trickle || this._iceComplete)
              sendAnswer();
            else
              this.once("_iceComplete", sendAnswer);
          }, "onSuccess");
          const onError = /* @__PURE__ */ __name((err) => {
            this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
          }, "onError");
          this._pc.setLocalDescription(answer).then(onSuccess).catch(onError);
        }).catch((err) => {
          this.destroy(errCode(err, "ERR_CREATE_ANSWER"));
        });
      }
      _onConnectionStateChange() {
        if (this.destroyed)
          return;
        if (this._pc.connectionState === "failed") {
          this.destroy(errCode(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
        }
      }
      _onIceStateChange() {
        if (this.destroyed)
          return;
        const iceConnectionState = this._pc.iceConnectionState;
        const iceGatheringState = this._pc.iceGatheringState;
        this._debug(
          "iceStateChange (connection: %s) (gathering: %s)",
          iceConnectionState,
          iceGatheringState
        );
        this.emit("iceStateChange", iceConnectionState, iceGatheringState);
        if (iceConnectionState === "connected" || iceConnectionState === "completed") {
          this._pcReady = true;
          this._maybeReady();
        }
        if (iceConnectionState === "failed") {
          this.destroy(errCode(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE"));
        }
        if (iceConnectionState === "closed") {
          this.destroy(errCode(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
        }
      }
      getStats(cb) {
        const flattenValues = /* @__PURE__ */ __name((report) => {
          if (Object.prototype.toString.call(report.values) === "[object Array]") {
            report.values.forEach((value) => {
              Object.assign(report, value);
            });
          }
          return report;
        }, "flattenValues");
        if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
          this._pc.getStats().then((res) => {
            const reports = [];
            res.forEach((report) => {
              reports.push(flattenValues(report));
            });
            cb(null, reports);
          }, (err) => cb(err));
        } else if (this._pc.getStats.length > 0) {
          this._pc.getStats((res) => {
            if (this.destroyed)
              return;
            const reports = [];
            res.result().forEach((result) => {
              const report = {};
              result.names().forEach((name) => {
                report[name] = result.stat(name);
              });
              report.id = result.id;
              report.type = result.type;
              report.timestamp = result.timestamp;
              reports.push(flattenValues(report));
            });
            cb(null, reports);
          }, (err) => cb(err));
        } else {
          cb(null, []);
        }
      }
      _maybeReady() {
        this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady);
        if (this._connected || this._connecting || !this._pcReady || !this._channelReady)
          return;
        this._connecting = true;
        const findCandidatePair = /* @__PURE__ */ __name(() => {
          if (this.destroyed)
            return;
          this.getStats((err, items) => {
            if (this.destroyed)
              return;
            if (err)
              items = [];
            const remoteCandidates = {};
            const localCandidates = {};
            const candidatePairs = {};
            let foundSelectedCandidatePair = false;
            items.forEach((item) => {
              if (item.type === "remotecandidate" || item.type === "remote-candidate") {
                remoteCandidates[item.id] = item;
              }
              if (item.type === "localcandidate" || item.type === "local-candidate") {
                localCandidates[item.id] = item;
              }
              if (item.type === "candidatepair" || item.type === "candidate-pair") {
                candidatePairs[item.id] = item;
              }
            });
            const setSelectedCandidatePair = /* @__PURE__ */ __name((selectedCandidatePair) => {
              foundSelectedCandidatePair = true;
              let local = localCandidates[selectedCandidatePair.localCandidateId];
              if (local && (local.ip || local.address)) {
                this.localAddress = local.ip || local.address;
                this.localPort = Number(local.port);
              } else if (local && local.ipAddress) {
                this.localAddress = local.ipAddress;
                this.localPort = Number(local.portNumber);
              } else if (typeof selectedCandidatePair.googLocalAddress === "string") {
                local = selectedCandidatePair.googLocalAddress.split(":");
                this.localAddress = local[0];
                this.localPort = Number(local[1]);
              }
              if (this.localAddress) {
                this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4";
              }
              let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];
              if (remote && (remote.ip || remote.address)) {
                this.remoteAddress = remote.ip || remote.address;
                this.remotePort = Number(remote.port);
              } else if (remote && remote.ipAddress) {
                this.remoteAddress = remote.ipAddress;
                this.remotePort = Number(remote.portNumber);
              } else if (typeof selectedCandidatePair.googRemoteAddress === "string") {
                remote = selectedCandidatePair.googRemoteAddress.split(":");
                this.remoteAddress = remote[0];
                this.remotePort = Number(remote[1]);
              }
              if (this.remoteAddress) {
                this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4";
              }
              this._debug(
                "connect local: %s:%s remote: %s:%s",
                this.localAddress,
                this.localPort,
                this.remoteAddress,
                this.remotePort
              );
            }, "setSelectedCandidatePair");
            items.forEach((item) => {
              if (item.type === "transport" && item.selectedCandidatePairId) {
                setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
              }
              if (item.type === "googCandidatePair" && item.googActiveConnection === "true" || (item.type === "candidatepair" || item.type === "candidate-pair") && item.selected) {
                setSelectedCandidatePair(item);
              }
            });
            if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
              setTimeout(findCandidatePair, 100);
              return;
            } else {
              this._connecting = false;
              this._connected = true;
            }
            if (this._chunk) {
              try {
                this.send(this._chunk);
              } catch (err2) {
                return this.destroy(errCode(err2, "ERR_DATA_CHANNEL"));
              }
              this._chunk = null;
              this._debug('sent chunk from "write before connect"');
              const cb = this._cb;
              this._cb = null;
              cb(null);
            }
            if (typeof this._channel.bufferedAmountLowThreshold !== "number") {
              this._interval = setInterval(() => this._onInterval(), 150);
              if (this._interval.unref)
                this._interval.unref();
            }
            this._debug("connect");
            this.emit("connect");
          });
        }, "findCandidatePair");
        findCandidatePair();
      }
      _onInterval() {
        if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
          return;
        }
        this._onChannelBufferedAmountLow();
      }
      _onSignalingStateChange() {
        if (this.destroyed)
          return;
        if (this._pc.signalingState === "stable") {
          this._isNegotiating = false;
          this._debug("flushing sender queue", this._sendersAwaitingStable);
          this._sendersAwaitingStable.forEach((sender) => {
            this._pc.removeTrack(sender);
            this._queuedNegotiation = true;
          });
          this._sendersAwaitingStable = [];
          if (this._queuedNegotiation) {
            this._debug("flushing negotiation queue");
            this._queuedNegotiation = false;
            this._needsNegotiation();
          } else {
            this._debug("negotiated");
            this.emit("negotiated");
          }
        }
        this._debug("signalingStateChange %s", this._pc.signalingState);
        this.emit("signalingStateChange", this._pc.signalingState);
      }
      _onIceCandidate(event) {
        if (this.destroyed)
          return;
        if (event.candidate && this.trickle) {
          this.emit("signal", {
            type: "candidate",
            candidate: {
              candidate: event.candidate.candidate,
              sdpMLineIndex: event.candidate.sdpMLineIndex,
              sdpMid: event.candidate.sdpMid
            }
          });
        } else if (!event.candidate && !this._iceComplete) {
          this._iceComplete = true;
          this.emit("_iceComplete");
        }
        if (event.candidate) {
          this._startIceCompleteTimeout();
        }
      }
      _onChannelMessage(event) {
        if (this.destroyed)
          return;
        let data = event.data;
        if (data instanceof ArrayBuffer)
          data = Buffer3.from(data);
        this.push(data);
      }
      _onChannelBufferedAmountLow() {
        if (this.destroyed || !this._cb)
          return;
        this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
        const cb = this._cb;
        this._cb = null;
        cb(null);
      }
      _onChannelOpen() {
        if (this._connected || this.destroyed)
          return;
        this._debug("on channel open");
        this._channelReady = true;
        this._maybeReady();
      }
      _onChannelClose() {
        if (this.destroyed)
          return;
        this._debug("on channel close");
        this.destroy();
      }
      _onTrack(event) {
        if (this.destroyed)
          return;
        event.streams.forEach((eventStream) => {
          this._debug("on track");
          this.emit("track", event.track, eventStream);
          this._remoteTracks.push({
            track: event.track,
            stream: eventStream
          });
          if (this._remoteStreams.some((remoteStream) => {
            return remoteStream.id === eventStream.id;
          }))
            return;
          this._remoteStreams.push(eventStream);
          queueMicrotask2(() => {
            this._debug("on stream");
            this.emit("stream", eventStream);
          });
        });
      }
      _debug() {
        const args2 = [].slice.call(arguments);
        args2[0] = "[" + this._id + "] " + args2[0];
        debug.apply(null, args2);
      }
    };
    __name(Peer2, "Peer");
    Peer2.WEBRTC_SUPPORT = !!getBrowserRTC();
    Peer2.config = {
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:global.stun.twilio.com:3478"
          ]
        }
      ],
      sdpSemantics: "unified-plan"
    };
    Peer2.channelConfig = {};
    module2.exports = Peer2;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);
init_process_shim();

// src/ScreenGardenPlugin.ts
init_process_shim();
var import_obsidian27 = require("obsidian");

// src/services/index.ts
init_process_shim();

// src/services/sync/index.ts
init_process_shim();

// src/services/sync/SyncService.ts
init_process_shim();

// node_modules/phoenix/priv/static/phoenix.mjs
init_process_shim();
var closure = /* @__PURE__ */ __name((value) => {
  if (typeof value === "function") {
    return value;
  } else {
    let closure2 = /* @__PURE__ */ __name(function() {
      return value;
    }, "closure2");
    return closure2;
  }
}, "closure");
var globalSelf = typeof self !== "undefined" ? self : null;
var phxWindow = typeof window !== "undefined" ? window : null;
var global2 = globalSelf || phxWindow || global2;
var DEFAULT_VSN = "2.0.0";
var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var CHANNEL_STATES = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var CHANNEL_EVENTS = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var TRANSPORTS = {
  longpoll: "longpoll",
  websocket: "websocket"
};
var XHR_STATES = {
  complete: 4
};
var Push = /* @__PURE__ */ __name(class {
  constructor(channel, event, payload, timeout) {
    this.channel = channel;
    this.event = event;
    this.payload = payload || function() {
      return {};
    };
    this.receivedResp = null;
    this.timeout = timeout;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
  }
  resend(timeout) {
    this.timeout = timeout;
    this.reset();
    this.send();
  }
  send() {
    if (this.hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    });
  }
  receive(status, callback) {
    if (this.hasReceived(status)) {
      callback(this.receivedResp.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  matchReceive({ status, response, _ref }) {
    this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
  }
  cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, (payload) => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = payload;
      this.matchReceive(payload);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
  trigger(status, response) {
    this.channel.trigger(this.refEvent, { status, response });
  }
}, "Push");
var Timer = /* @__PURE__ */ __name(class {
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = null;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}, "Timer");
var Channel = /* @__PURE__ */ __name(class {
  constructor(topic, params2, socket) {
    this.state = CHANNEL_STATES.closed;
    this.topic = topic;
    this.params = closure(params2 || {});
    this.socket = socket;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new Timer(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset();
      if (this.isErrored()) {
        this.rejoin();
      }
    }));
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", () => {
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger())
        this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket.remove(this);
    });
    this.onError((reason) => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `error ${this.topic}`, reason);
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
      leavePush.send();
      this.state = CHANNEL_STATES.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
  }
  join(timeout = this.timeout) {
    if (this.joinedOnce) {
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    } else {
      this.timeout = timeout;
      this.joinedOnce = true;
      this.rejoin();
      return this.joinPush;
    }
  }
  onClose(callback) {
    this.on(CHANNEL_EVENTS.close, callback);
  }
  onError(callback) {
    return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
  }
  on(event, callback) {
    let ref = this.bindingRef++;
    this.bindings.push({ event, ref, callback });
    return ref;
  }
  off(event, ref) {
    this.bindings = this.bindings.filter((bind) => {
      return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
    });
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(event, payload, timeout = this.timeout) {
    payload = payload || {};
    if (!this.joinedOnce) {
      throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let pushEvent = new Push(this, event, function() {
      return payload;
    }, timeout);
    if (this.canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  leave(timeout = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = CHANNEL_STATES.leaving;
    let onClose = /* @__PURE__ */ __name(() => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `leave ${this.topic}`);
      this.trigger(CHANNEL_EVENTS.close, "leave");
    }, "onClose");
    let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
    leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
    leavePush.send();
    if (!this.canPush()) {
      leavePush.trigger("ok", {});
    }
    return leavePush;
  }
  onMessage(_event, payload, _ref) {
    return payload;
  }
  isMember(topic, event, payload, joinRef) {
    if (this.topic !== topic) {
      return false;
    }
    if (joinRef && joinRef !== this.joinRef()) {
      if (this.socket.hasLogger())
        this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
      return false;
    } else {
      return true;
    }
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(timeout = this.timeout) {
    if (this.isLeaving()) {
      return;
    }
    this.socket.leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  trigger(event, payload, ref, joinRef) {
    let handledPayload = this.onMessage(event, payload, ref, joinRef);
    if (payload && !handledPayload) {
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    }
    let eventBindings = this.bindings.filter((bind) => bind.event === event);
    for (let i = 0; i < eventBindings.length; i++) {
      let bind = eventBindings[i];
      bind.callback(handledPayload, ref, joinRef || this.joinRef());
    }
  }
  replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  isErrored() {
    return this.state === CHANNEL_STATES.errored;
  }
  isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
}, "Channel");
var Ajax = /* @__PURE__ */ __name(class {
  static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
    if (global2.XDomainRequest) {
      let req = new global2.XDomainRequest();
      return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
    } else {
      let req = new global2.XMLHttpRequest();
      return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
    }
  }
  static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
    req.timeout = timeout;
    req.open(method, endPoint);
    req.onload = () => {
      let response = this.parseJSON(req.responseText);
      callback && callback(response);
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.onprogress = () => {
    };
    req.send(body);
    return req;
  }
  static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
    req.open(method, endPoint, true);
    req.timeout = timeout;
    req.setRequestHeader("Content-Type", accept);
    req.onerror = () => callback && callback(null);
    req.onreadystatechange = () => {
      if (req.readyState === XHR_STATES.complete && callback) {
        let response = this.parseJSON(req.responseText);
        callback(response);
      }
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.send(body);
    return req;
  }
  static parseJSON(resp) {
    if (!resp || resp === "") {
      return null;
    }
    try {
      return JSON.parse(resp);
    } catch (e) {
      console && console.log("failed to parse JSON response", resp);
      return null;
    }
  }
  static serialize(obj, parentKey) {
    let queryStr = [];
    for (var key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue;
      }
      let paramKey = parentKey ? `${parentKey}[${key}]` : key;
      let paramVal = obj[key];
      if (typeof paramVal === "object") {
        queryStr.push(this.serialize(paramVal, paramKey));
      } else {
        queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
      }
    }
    return queryStr.join("&");
  }
  static appendParams(url, params2) {
    if (Object.keys(params2).length === 0) {
      return url;
    }
    let prefix = url.match(/\?/) ? "&" : "?";
    return `${url}${prefix}${this.serialize(params2)}`;
  }
}, "Ajax");
var LongPoll = /* @__PURE__ */ __name(class {
  constructor(endPoint) {
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = /* @__PURE__ */ new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function() {
    };
    this.onerror = function() {
    };
    this.onmessage = function() {
    };
    this.onclose = function() {
    };
    this.pollEndpoint = this.normalizeEndpoint(endPoint);
    this.readyState = SOCKET_STATES.connecting;
    this.poll();
  }
  normalizeEndpoint(endPoint) {
    return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
  }
  endpointURL() {
    return Ajax.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(code, reason, wasClean) {
    this.close(code, reason, wasClean);
    this.readyState = SOCKET_STATES.connecting;
  }
  ontimeout() {
    this.onerror("timeout");
    this.closeAndRetry(1005, "timeout", false);
  }
  isActive() {
    return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
  }
  poll() {
    this.ajax("GET", "application/json", null, () => this.ontimeout(), (resp) => {
      if (resp) {
        var { status, token, messages } = resp;
        this.token = token;
      } else {
        status = 0;
      }
      switch (status) {
        case 200:
          messages.forEach((msg) => {
            setTimeout(() => this.onmessage({ data: msg }), 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = SOCKET_STATES.open;
          this.onopen({});
          this.poll();
          break;
        case 403:
          this.onerror(403);
          this.close(1008, "forbidden", false);
          break;
        case 0:
        case 500:
          this.onerror(500);
          this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${status}`);
      }
    });
  }
  send(body) {
    if (this.currentBatch) {
      this.currentBatch.push(body);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(body);
    } else {
      this.currentBatch = [body];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(messages) {
    this.awaitingBatchAck = true;
    this.ajax("POST", "application/x-ndjson", messages.join("\n"), () => this.onerror("timeout"), (resp) => {
      this.awaitingBatchAck = false;
      if (!resp || resp.status !== 200) {
        this.onerror(resp && resp.status);
        this.closeAndRetry(1011, "internal server error", false);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      }
    });
  }
  close(code, reason, wasClean) {
    for (let req of this.reqs) {
      req.abort();
    }
    this.readyState = SOCKET_STATES.closed;
    let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent !== "undefined") {
      this.onclose(new CloseEvent("close", opts));
    } else {
      this.onclose(opts);
    }
  }
  ajax(method, contentType, body, onCallerTimeout, callback) {
    let req;
    let ontimeout = /* @__PURE__ */ __name(() => {
      this.reqs.delete(req);
      onCallerTimeout();
    }, "ontimeout");
    req = Ajax.request(method, this.endpointURL(), contentType, body, this.timeout, ontimeout, (resp) => {
      this.reqs.delete(req);
      if (this.isActive()) {
        callback(resp);
      }
    });
    this.reqs.add(req);
  }
}, "LongPoll");
var Presence = /* @__PURE__ */ __name(class {
  constructor(channel, opts = {}) {
    let events = opts.events || { state: "presence_state", diff: "presence_diff" };
    this.state = {};
    this.pendingDiffs = [];
    this.channel = channel;
    this.joinRef = null;
    this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    };
    this.channel.on(events.state, (newState) => {
      let { onJoin, onLeave, onSync } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = Presence.syncState(this.state, newState, onJoin, onLeave);
      this.pendingDiffs.forEach((diff) => {
        this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel.on(events.diff, (diff) => {
      let { onJoin, onLeave, onSync } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(diff);
      } else {
        this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
  }
  onJoin(callback) {
    this.caller.onJoin = callback;
  }
  onLeave(callback) {
    this.caller.onLeave = callback;
  }
  onSync(callback) {
    this.caller.onSync = callback;
  }
  list(by) {
    return Presence.list(this.state, by);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  static syncState(currentState, newState, onJoin, onLeave) {
    let state = this.clone(currentState);
    let joins = {};
    let leaves = {};
    this.map(state, (key, presence) => {
      if (!newState[key]) {
        leaves[key] = presence;
      }
    });
    this.map(newState, (key, newPresence) => {
      let currentPresence = state[key];
      if (currentPresence) {
        let newRefs = newPresence.metas.map((m) => m.phx_ref);
        let curRefs = currentPresence.metas.map((m) => m.phx_ref);
        let joinedMetas = newPresence.metas.filter((m) => curRefs.indexOf(m.phx_ref) < 0);
        let leftMetas = currentPresence.metas.filter((m) => newRefs.indexOf(m.phx_ref) < 0);
        if (joinedMetas.length > 0) {
          joins[key] = newPresence;
          joins[key].metas = joinedMetas;
        }
        if (leftMetas.length > 0) {
          leaves[key] = this.clone(currentPresence);
          leaves[key].metas = leftMetas;
        }
      } else {
        joins[key] = newPresence;
      }
    });
    return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
  }
  static syncDiff(state, diff, onJoin, onLeave) {
    let { joins, leaves } = this.clone(diff);
    if (!onJoin) {
      onJoin = /* @__PURE__ */ __name(function() {
      }, "onJoin");
    }
    if (!onLeave) {
      onLeave = /* @__PURE__ */ __name(function() {
      }, "onLeave");
    }
    this.map(joins, (key, newPresence) => {
      let currentPresence = state[key];
      state[key] = this.clone(newPresence);
      if (currentPresence) {
        let joinedRefs = state[key].metas.map((m) => m.phx_ref);
        let curMetas = currentPresence.metas.filter((m) => joinedRefs.indexOf(m.phx_ref) < 0);
        state[key].metas.unshift(...curMetas);
      }
      onJoin(key, currentPresence, newPresence);
    });
    this.map(leaves, (key, leftPresence) => {
      let currentPresence = state[key];
      if (!currentPresence) {
        return;
      }
      let refsToRemove = leftPresence.metas.map((m) => m.phx_ref);
      currentPresence.metas = currentPresence.metas.filter((p) => {
        return refsToRemove.indexOf(p.phx_ref) < 0;
      });
      onLeave(key, currentPresence, leftPresence);
      if (currentPresence.metas.length === 0) {
        delete state[key];
      }
    });
    return state;
  }
  static list(presences, chooser) {
    if (!chooser) {
      chooser = /* @__PURE__ */ __name(function(key, pres) {
        return pres;
      }, "chooser");
    }
    return this.map(presences, (key, presence) => {
      return chooser(key, presence);
    });
  }
  static map(obj, func) {
    return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
  }
  static clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}, "Presence");
var serializer_default = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  encode(msg, callback) {
    if (msg.payload.constructor === ArrayBuffer) {
      return callback(this.binaryEncode(msg));
    } else {
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
  },
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this.binaryDecode(rawPayload));
    } else {
      let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
      return callback({ join_ref, ref, topic, event, payload });
    }
  },
  binaryEncode(message) {
    let { join_ref, ref, event, topic, payload } = message;
    let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
    let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
    let view = new DataView(header);
    let offset = 0;
    view.setUint8(offset++, this.KINDS.push);
    view.setUint8(offset++, join_ref.length);
    view.setUint8(offset++, ref.length);
    view.setUint8(offset++, topic.length);
    view.setUint8(offset++, event.length);
    Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    var combined = new Uint8Array(header.byteLength + payload.byteLength);
    combined.set(new Uint8Array(header), 0);
    combined.set(new Uint8Array(payload), header.byteLength);
    return combined.buffer;
  },
  binaryDecode(buffer) {
    let view = new DataView(buffer);
    let kind = view.getUint8(0);
    let decoder = new TextDecoder();
    switch (kind) {
      case this.KINDS.push:
        return this.decodePush(buffer, view, decoder);
      case this.KINDS.reply:
        return this.decodeReply(buffer, view, decoder);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(buffer, view, decoder);
    }
  },
  decodePush(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let topicSize = view.getUint8(2);
    let eventSize = view.getUint8(3);
    let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return { join_ref: joinRef, ref: null, topic, event, payload: data };
  },
  decodeReply(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let refSize = view.getUint8(2);
    let topicSize = view.getUint8(3);
    let eventSize = view.getUint8(4);
    let offset = this.HEADER_LENGTH + this.META_LENGTH;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let ref = decoder.decode(buffer.slice(offset, offset + refSize));
    offset = offset + refSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    let payload = { status: event, response: data };
    return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
  },
  decodeBroadcast(buffer, view, decoder) {
    let topicSize = view.getUint8(1);
    let eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return { join_ref: null, ref: null, topic, event, payload: data };
  }
};
var Socket = /* @__PURE__ */ __name(class {
  constructor(endPoint, opts = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.timeout = opts.timeout || DEFAULT_TIMEOUT;
    this.transport = opts.transport || global2.WebSocket || LongPoll;
    this.establishedConnections = 0;
    this.defaultEncoder = serializer_default.encode.bind(serializer_default);
    this.defaultDecoder = serializer_default.decode.bind(serializer_default);
    this.closeWasClean = false;
    this.binaryType = opts.binaryType || "arraybuffer";
    this.connectClock = 1;
    if (this.transport !== LongPoll) {
      this.encode = opts.encode || this.defaultEncoder;
      this.decode = opts.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let awaitingConnectionOnPageShow = null;
    if (phxWindow && phxWindow.addEventListener) {
      phxWindow.addEventListener("pagehide", (_e) => {
        if (this.conn) {
          this.disconnect();
          awaitingConnectionOnPageShow = this.connectClock;
        }
      });
      phxWindow.addEventListener("pageshow", (_e) => {
        if (awaitingConnectionOnPageShow === this.connectClock) {
          awaitingConnectionOnPageShow = null;
          this.connect();
        }
      });
    }
    this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
    this.rejoinAfterMs = (tries) => {
      if (opts.rejoinAfterMs) {
        return opts.rejoinAfterMs(tries);
      } else {
        return [1e3, 2e3, 5e3][tries - 1] || 1e4;
      }
    };
    this.reconnectAfterMs = (tries) => {
      if (opts.reconnectAfterMs) {
        return opts.reconnectAfterMs(tries);
      } else {
        return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
      }
    };
    this.logger = opts.logger || null;
    this.longpollerTimeout = opts.longpollerTimeout || 2e4;
    this.params = closure(opts.params || {});
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    this.vsn = opts.vsn || DEFAULT_VSN;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new Timer(() => {
      this.teardown(() => this.connect());
    }, this.reconnectAfterMs);
  }
  getLongPollTransport() {
    return LongPoll;
  }
  replaceTransport(newTransport) {
    this.connectClock++;
    this.closeWasClean = true;
    this.reconnectTimer.reset();
    this.sendBuffer = [];
    if (this.conn) {
      this.conn.close();
      this.conn = null;
    }
    this.transport = newTransport;
  }
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  endPointURL() {
    let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
    if (uri.charAt(0) !== "/") {
      return uri;
    }
    if (uri.charAt(1) === "/") {
      return `${this.protocol()}:${uri}`;
    }
    return `${this.protocol()}://${location.host}${uri}`;
  }
  disconnect(callback, code, reason) {
    this.connectClock++;
    this.closeWasClean = true;
    this.reconnectTimer.reset();
    this.teardown(callback, code, reason);
  }
  connect(params2) {
    if (params2) {
      console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
      this.params = closure(params2);
    }
    if (this.conn) {
      return;
    }
    this.connectClock++;
    this.closeWasClean = false;
    this.conn = new this.transport(this.endPointURL());
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = (error) => this.onConnError(error);
    this.conn.onmessage = (event) => this.onConnMessage(event);
    this.conn.onclose = (event) => this.onConnClose(event);
  }
  log(kind, msg, data) {
    this.logger(kind, msg, data);
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.open.push([ref, callback]);
    return ref;
  }
  onClose(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.close.push([ref, callback]);
    return ref;
  }
  onError(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.error.push([ref, callback]);
    return ref;
  }
  onMessage(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.message.push([ref, callback]);
    return ref;
  }
  ping(callback) {
    if (!this.isConnected()) {
      return false;
    }
    let ref = this.makeRef();
    let startTime = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
    let onMsgRef = this.onMessage((msg) => {
      if (msg.ref === ref) {
        this.off([onMsgRef]);
        callback(Date.now() - startTime);
      }
    });
    return true;
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    if (this.hasLogger())
      this.log("transport", `connected to ${this.endPointURL()}`);
    this.closeWasClean = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    this.resetHeartbeat();
    this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
  }
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      if (this.hasLogger()) {
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      }
      this.triggerChanError();
      this.closeWasClean = false;
      this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    if (this.conn && this.conn.skipHeartbeat) {
      return;
    }
    this.pendingHeartbeatRef = null;
    this.clearHeartbeats();
    this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  teardown(callback, code, reason) {
    if (!this.conn) {
      return callback && callback();
    }
    this.waitForBufferDone(() => {
      if (this.conn) {
        if (code) {
          this.conn.close(code, reason || "");
        } else {
          this.conn.close();
        }
      }
      this.waitForSocketClosed(() => {
        if (this.conn) {
          this.conn.onopen = function() {
          };
          this.conn.onerror = function() {
          };
          this.conn.onmessage = function() {
          };
          this.conn.onclose = function() {
          };
          this.conn = null;
        }
        callback && callback();
      });
    });
  }
  waitForBufferDone(callback, tries = 1) {
    if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(callback, tries + 1);
    }, 150 * tries);
  }
  waitForSocketClosed(callback, tries = 1) {
    if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(callback, tries + 1);
    }, 150 * tries);
  }
  onConnClose(event) {
    let closeCode = event && event.code;
    if (this.hasLogger())
      this.log("transport", "close", event);
    this.triggerChanError();
    this.clearHeartbeats();
    if (!this.closeWasClean && closeCode !== 1e3) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
  }
  onConnError(error) {
    if (this.hasLogger())
      this.log("transport", error);
    let transportBefore = this.transport;
    let establishedBefore = this.establishedConnections;
    this.stateChangeCallbacks.error.forEach(([, callback]) => {
      callback(error, transportBefore, establishedBefore);
    });
    if (transportBefore === this.transport || establishedBefore > 0) {
      this.triggerChanError();
    }
  }
  triggerChanError() {
    this.channels.forEach((channel) => {
      if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
        channel.trigger(CHANNEL_EVENTS.error);
      }
    });
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return "connecting";
      case SOCKET_STATES.open:
        return "open";
      case SOCKET_STATES.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  isConnected() {
    return this.connectionState() === "open";
  }
  remove(channel) {
    this.off(channel.stateChangeRefs);
    this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
  }
  off(refs) {
    for (let key in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
        return refs.indexOf(ref) === -1;
      });
    }
  }
  channel(topic, chanParams = {}) {
    let chan = new Channel(topic, chanParams, this);
    this.channels.push(chan);
    return chan;
  }
  push(data) {
    if (this.hasLogger()) {
      let { topic, event, payload, ref, join_ref } = data;
      this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
    }
    if (this.isConnected()) {
      this.encode(data, (result) => this.conn.send(result));
    } else {
      this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
    }
  }
  makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (this.pendingHeartbeatRef && !this.isConnected()) {
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      let { topic, event, payload, ref, join_ref } = msg;
      if (ref && ref === this.pendingHeartbeatRef) {
        this.clearHeartbeats();
        this.pendingHeartbeatRef = null;
        this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
      }
      if (this.hasLogger())
        this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
      for (let i = 0; i < this.channels.length; i++) {
        const channel = this.channels[i];
        if (!channel.isMember(topic, event, payload, join_ref)) {
          continue;
        }
        channel.trigger(event, payload, ref, join_ref);
      }
      for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
        let [, callback] = this.stateChangeCallbacks.message[i];
        callback(msg);
      }
    });
  }
  leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
    if (dupChannel) {
      if (this.hasLogger())
        this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.leave();
    }
  }
}, "Socket");

// src/services/Service.ts
init_process_shim();
var import_obsidian = require("obsidian");
var Service = class extends import_obsidian.Events {
  constructor(plugin) {
    super();
    this.plugin = plugin;
    this._load = this.onload();
    this.plugin.register(this.onunload.bind(this));
  }
  register(cb) {
    this.plugin.register(cb);
  }
  registerEvent(ref) {
    this.plugin.registerEvent(ref);
  }
  trigger(name, ...data) {
    super.trigger("screengarden:" + name, ...data);
  }
  on(name, callback, ctx) {
    return super.on("screengarden:" + name, callback, ctx);
  }
  async onload() {
  }
  async onLayoutReady() {
  }
  async onunload() {
  }
};
__name(Service, "Service");

// src/constants.ts
init_process_shim();
var BASE_HTTP_URL = "screen.garden" ? `https://${"screen.garden"}` : "http://localhost:4000";
var BASE_WS_URL = "screen.garden" ? `wss://${"screen.garden"}` : "ws://localhost:4000";

// src/utils/ReadyNotifier.ts
init_process_shim();
var EMPTY = Symbol.for("ReadyNotifier.EMPTY");
var ReadyNotifier = class {
  constructor() {
    this.value = EMPTY;
    this._ready = false;
    this.callbacks = [];
  }
  ready(v) {
    this.value = v;
    this._ready = true;
    const cbs = [...this.callbacks];
    this.callbacks = [];
    cbs.forEach((cb) => cb(v));
  }
  unready() {
    this._ready = false;
    this.value = EMPTY;
  }
  register(cb) {
    if (this._ready && this.value !== EMPTY)
      return cb(this.value);
    this.callbacks.push(cb);
  }
  isReady() {
    return this._ready;
  }
};
__name(ReadyNotifier, "ReadyNotifier");

// src/services/sync/SyncedDocument.ts
init_process_shim();

// node_modules/yjs/dist/yjs.mjs
init_process_shim();

// node_modules/lib0/observable.js
init_process_shim();

// node_modules/lib0/map.js
init_process_shim();
var create = /* @__PURE__ */ __name(() => /* @__PURE__ */ new Map(), "create");
var copy = /* @__PURE__ */ __name((m) => {
  const r = create();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
}, "copy");
var setIfUndefined = /* @__PURE__ */ __name((map2, key, createT) => {
  let set = map2.get(key);
  if (set === void 0) {
    map2.set(key, set = createT());
  }
  return set;
}, "setIfUndefined");
var map = /* @__PURE__ */ __name((m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
}, "map");
var any = /* @__PURE__ */ __name((m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
}, "any");

// node_modules/lib0/set.js
init_process_shim();
var create2 = /* @__PURE__ */ __name(() => /* @__PURE__ */ new Set(), "create");

// node_modules/lib0/array.js
init_process_shim();
var last = /* @__PURE__ */ __name((arr) => arr[arr.length - 1], "last");
var appendTo = /* @__PURE__ */ __name((dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
}, "appendTo");
var from = Array.from;
var isArray = Array.isArray;

// node_modules/lib0/observable.js
var Observable = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined(this._observers, name, create2).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = /* @__PURE__ */ __name((...args2) => {
      this.off(name, _f);
      f(...args2);
    }, "_f");
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};
__name(Observable, "Observable");

// node_modules/lib0/math.js
init_process_shim();
var floor = Math.floor;
var abs = Math.abs;
var min = /* @__PURE__ */ __name((a, b) => a < b ? a : b, "min");
var max = /* @__PURE__ */ __name((a, b) => a > b ? a : b, "max");
var isNaN2 = Number.isNaN;
var isNegativeZero = /* @__PURE__ */ __name((n) => n !== 0 ? n < 0 : 1 / n < 0, "isNegativeZero");

// node_modules/lib0/encoding.js
init_process_shim();

// node_modules/lib0/buffer.js
init_process_shim();

// node_modules/lib0/string.js
init_process_shim();
var fromCharCode = String.fromCharCode;
var fromCodePoint = String.fromCodePoint;
var MAX_UTF16_CHARACTER = fromCharCode(65535);
var toLowerCase = /* @__PURE__ */ __name((s) => s.toLowerCase(), "toLowerCase");
var trimLeftRegex = /^\s*/g;
var trimLeft = /* @__PURE__ */ __name((s) => s.replace(trimLeftRegex, ""), "trimLeft");
var fromCamelCaseRegex = /([A-Z])/g;
var fromCamelCase = /* @__PURE__ */ __name((s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`)), "fromCamelCase");
var _encodeUtf8Polyfill = /* @__PURE__ */ __name((str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
}, "_encodeUtf8Polyfill");
var utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native = /* @__PURE__ */ __name((str) => utf8TextEncoder.encode(str), "_encodeUtf8Native");
var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}

// node_modules/lib0/environment.js
init_process_shim();

// node_modules/lib0/conditions.js
init_process_shim();
var undefinedToNull = /* @__PURE__ */ __name((v) => v === void 0 ? null : v, "undefinedToNull");

// node_modules/lib0/storage.js
init_process_shim();
var VarStoragePolyfill = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
};
__name(VarStoragePolyfill, "VarStoragePolyfill");
var _localStorage = new VarStoragePolyfill();
var usePolyfill = true;
try {
  if (typeof localStorage !== "undefined") {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
var varStorage = _localStorage;

// node_modules/lib0/function.js
init_process_shim();

// node_modules/lib0/object.js
init_process_shim();
var keys = Object.keys;
var length = /* @__PURE__ */ __name((obj) => keys(obj).length, "length");
var every = /* @__PURE__ */ __name((obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
}, "every");
var hasProperty = /* @__PURE__ */ __name((obj, key) => Object.prototype.hasOwnProperty.call(obj, key), "hasProperty");
var equalFlat = /* @__PURE__ */ __name((a, b) => a === b || length(a) === length(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val), "equalFlat");

// node_modules/lib0/function.js
var callAll = /* @__PURE__ */ __name((fs, args2, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args2);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args2, i + 1);
    }
  }
}, "callAll");
var equalityStrict = /* @__PURE__ */ __name((a, b) => a === b, "equalityStrict");
var equalityDeep = /* @__PURE__ */ __name((a, b) => {
  if (a == null || b == null) {
    return equalityStrict(a, b);
  }
  if (a.constructor !== b.constructor) {
    return false;
  }
  if (a === b) {
    return true;
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case Object:
      if (length(a) !== length(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
}, "equalityDeep");
var isOneOf = /* @__PURE__ */ __name((value, options) => options.includes(value), "isOneOf");

// node_modules/lib0/environment.js
var isNode = typeof import_browser.default !== "undefined" && import_browser.default.release && /node|io\.js/.test(import_browser.default.release.name);
var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var params;
var args = [];
var computeParams = /* @__PURE__ */ __name(() => {
  if (params === void 0) {
    if (isNode) {
      params = create();
      const pargs = import_browser.default.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          } else {
            args.push(parg);
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create();
    }
  }
  return params;
}, "computeParams");
var hasParam = /* @__PURE__ */ __name((name) => computeParams().has(name), "hasParam");
var getVariable = /* @__PURE__ */ __name((name) => isNode ? undefinedToNull(import_browser.default.env[name.toUpperCase()]) : undefinedToNull(varStorage.getItem(name)), "getVariable");
var hasConf = /* @__PURE__ */ __name((name) => hasParam("--" + name) || getVariable(name) !== null, "hasConf");
var production = hasConf("production");
var forceColor = isNode && isOneOf(import_browser.default.env.FORCE_COLOR, ["true", "1", "2"]);
var supportsColor = !hasParam("no-colors") && (!isNode || import_browser.default.stdout.isTTY || forceColor) && (!isNode || hasParam("color") || forceColor || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));

// node_modules/lib0/decoding.js
init_process_shim();

// node_modules/lib0/binary.js
init_process_shim();
var BIT1 = 1;
var BIT2 = 2;
var BIT3 = 4;
var BIT4 = 8;
var BIT6 = 32;
var BIT7 = 64;
var BIT8 = 128;
var BIT18 = 1 << 17;
var BIT19 = 1 << 18;
var BIT20 = 1 << 19;
var BIT21 = 1 << 20;
var BIT22 = 1 << 21;
var BIT23 = 1 << 22;
var BIT24 = 1 << 23;
var BIT25 = 1 << 24;
var BIT26 = 1 << 25;
var BIT27 = 1 << 26;
var BIT28 = 1 << 27;
var BIT29 = 1 << 28;
var BIT30 = 1 << 29;
var BIT31 = 1 << 30;
var BIT32 = 1 << 31;
var BITS5 = 31;
var BITS6 = 63;
var BITS7 = 127;
var BITS17 = BIT18 - 1;
var BITS18 = BIT19 - 1;
var BITS19 = BIT20 - 1;
var BITS20 = BIT21 - 1;
var BITS21 = BIT22 - 1;
var BITS22 = BIT23 - 1;
var BITS23 = BIT24 - 1;
var BITS24 = BIT25 - 1;
var BITS25 = BIT26 - 1;
var BITS26 = BIT27 - 1;
var BITS27 = BIT28 - 1;
var BITS28 = BIT29 - 1;
var BITS29 = BIT30 - 1;
var BITS30 = BIT31 - 1;
var BITS31 = 2147483647;

// node_modules/lib0/number.js
init_process_shim();
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
var LOWEST_INT32 = 1 << 31;
var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
var isNaN3 = Number.isNaN;
var parseInt2 = Number.parseInt;

// node_modules/lib0/error.js
init_process_shim();
var create3 = /* @__PURE__ */ __name((s) => new Error(s), "create");
var methodUnimplemented = /* @__PURE__ */ __name(() => {
  throw create3("Method unimplemented");
}, "methodUnimplemented");
var unexpectedCase = /* @__PURE__ */ __name(() => {
  throw create3("Unexpected case");
}, "unexpectedCase");

// node_modules/lib0/decoding.js
var errorUnexpectedEndOfArray = create3("Unexpected end of array");
var errorIntegerOutOfRange = create3("Integer out of Range");
var Decoder = class {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
__name(Decoder, "Decoder");
var createDecoder = /* @__PURE__ */ __name((uint8Array) => new Decoder(uint8Array), "createDecoder");
var hasContent = /* @__PURE__ */ __name((decoder) => decoder.pos !== decoder.arr.length, "hasContent");
var readUint8Array = /* @__PURE__ */ __name((decoder, len) => {
  const view = createUint8ArrayViewFromArrayBuffer(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
}, "readUint8Array");
var readVarUint8Array = /* @__PURE__ */ __name((decoder) => readUint8Array(decoder, readVarUint(decoder)), "readVarUint8Array");
var readUint8 = /* @__PURE__ */ __name((decoder) => decoder.arr[decoder.pos++], "readUint8");
var readVarUint = /* @__PURE__ */ __name((decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
}, "readVarUint");
var readVarInt = /* @__PURE__ */ __name((decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
}, "readVarInt");
var _readVarStringPolyfill = /* @__PURE__ */ __name((decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
}, "_readVarStringPolyfill");
var _readVarStringNative = /* @__PURE__ */ __name((decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
), "_readVarStringNative");
var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
var readFromDataView = /* @__PURE__ */ __name((decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
}, "readFromDataView");
var readFloat32 = /* @__PURE__ */ __name((decoder) => readFromDataView(decoder, 4).getFloat32(0, false), "readFloat32");
var readFloat64 = /* @__PURE__ */ __name((decoder) => readFromDataView(decoder, 8).getFloat64(0, false), "readFloat64");
var readBigInt64 = /* @__PURE__ */ __name((decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
), "readBigInt64");
var readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
var readAny = /* @__PURE__ */ __name((decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder), "readAny");
var RleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
};
__name(RleDecoder, "RleDecoder");
var UintOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
};
__name(UintOptRleDecoder, "UintOptRleDecoder");
var IntDiffOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
};
__name(IntDiffOptRleDecoder, "IntDiffOptRleDecoder");
var StringDecoder = class {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
};
__name(StringDecoder, "StringDecoder");

// node_modules/lib0/buffer.js
var createUint8ArrayFromLen = /* @__PURE__ */ __name((len) => new Uint8Array(len), "createUint8ArrayFromLen");
var createUint8ArrayViewFromArrayBuffer = /* @__PURE__ */ __name((buffer, byteOffset, length3) => new Uint8Array(buffer, byteOffset, length3), "createUint8ArrayViewFromArrayBuffer");
var copyUint8Array = /* @__PURE__ */ __name((uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
}, "copyUint8Array");

// node_modules/lib0/encoding.js
var Encoder = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
__name(Encoder, "Encoder");
var createEncoder = /* @__PURE__ */ __name(() => new Encoder(), "createEncoder");
var length2 = /* @__PURE__ */ __name((encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
}, "length");
var toUint8Array = /* @__PURE__ */ __name((encoder) => {
  const uint8arr = new Uint8Array(length2(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
}, "toUint8Array");
var verifyLen = /* @__PURE__ */ __name((encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
}, "verifyLen");
var write = /* @__PURE__ */ __name((encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
}, "write");
var writeUint8 = write;
var writeVarUint = /* @__PURE__ */ __name((encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
}, "writeVarUint");
var writeVarInt = /* @__PURE__ */ __name((encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
}, "writeVarInt");
var _strBuffer = new Uint8Array(3e4);
var _maxStrBSize = _strBuffer.length / 3;
var _writeVarStringNative = /* @__PURE__ */ __name((encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
}, "_writeVarStringNative");
var _writeVarStringPolyfill = /* @__PURE__ */ __name((encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
}, "_writeVarStringPolyfill");
var writeVarString = utf8TextEncoder && /** @type {any} */
utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
var writeUint8Array = /* @__PURE__ */ __name((encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
}, "writeUint8Array");
var writeVarUint8Array = /* @__PURE__ */ __name((encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
}, "writeVarUint8Array");
var writeOnDataView = /* @__PURE__ */ __name((encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
}, "writeOnDataView");
var writeFloat32 = /* @__PURE__ */ __name((encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false), "writeFloat32");
var writeFloat64 = /* @__PURE__ */ __name((encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false), "writeFloat64");
var writeBigInt64 = /* @__PURE__ */ __name((encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
), "writeBigInt64");
var floatTestBed = new DataView(new ArrayBuffer(4));
var isFloat32 = /* @__PURE__ */ __name((num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
}, "isFloat32");
var writeAny = /* @__PURE__ */ __name((encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (isArray(data)) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys3 = Object.keys(data);
        writeVarUint(encoder, keys3.length);
        for (let i = 0; i < keys3.length; i++) {
          const key = keys3[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
}, "writeAny");
var RleEncoder = class extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
};
__name(RleEncoder, "RleEncoder");
var flushUintOptRleEncoder = /* @__PURE__ */ __name((encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
}, "flushUintOptRleEncoder");
var UintOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
__name(UintOptRleEncoder, "UintOptRleEncoder");
var flushIntDiffOptRleEncoder = /* @__PURE__ */ __name((encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
}, "flushIntDiffOptRleEncoder");
var IntDiffOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
__name(IntDiffOptRleEncoder, "IntDiffOptRleEncoder");
var StringEncoder = class {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
};
__name(StringEncoder, "StringEncoder");

// node_modules/lib0/random.js
init_process_shim();

// node_modules/lib0/webcrypto.js
init_process_shim();
var subtle = crypto.subtle;
var getRandomValues = crypto.getRandomValues.bind(crypto);

// node_modules/lib0/random.js
var uint32 = /* @__PURE__ */ __name(() => getRandomValues(new Uint32Array(1))[0], "uint32");
var uuidv4Template = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
var uuidv4 = /* @__PURE__ */ __name(() => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
), "uuidv4");

// node_modules/lib0/promise.js
init_process_shim();

// node_modules/lib0/time.js
init_process_shim();
var getUnixTime = Date.now;

// node_modules/lib0/promise.js
var create4 = /* @__PURE__ */ __name((f) => (
  /** @type {Promise<T>} */
  new Promise(f)
), "create");
var all = Promise.all.bind(Promise);

// node_modules/lib0/logging.js
init_process_shim();

// node_modules/lib0/pair.js
init_process_shim();
var Pair = class {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
};
__name(Pair, "Pair");
var create5 = /* @__PURE__ */ __name((left, right) => new Pair(left, right), "create");
var forEach = /* @__PURE__ */ __name((arr, f) => arr.forEach((p) => f(p.left, p.right)), "forEach");

// node_modules/lib0/dom.js
init_process_shim();
var doc = (
  /** @type {Document} */
  typeof document !== "undefined" ? document : {}
);
var createElement = /* @__PURE__ */ __name((name) => doc.createElement(name), "createElement");
var createDocumentFragment = /* @__PURE__ */ __name(() => doc.createDocumentFragment(), "createDocumentFragment");
var createTextNode = /* @__PURE__ */ __name((text3) => doc.createTextNode(text3), "createTextNode");
var domParser = (
  /** @type {DOMParser} */
  typeof DOMParser !== "undefined" ? new DOMParser() : null
);
var setAttributes = /* @__PURE__ */ __name((el, attrs) => {
  forEach(attrs, (key, value) => {
    if (value === false) {
      el.removeAttribute(key);
    } else if (value === true) {
      el.setAttribute(key, "");
    } else {
      el.setAttribute(key, value);
    }
  });
  return el;
}, "setAttributes");
var fragment = /* @__PURE__ */ __name((children2) => {
  const fragment2 = createDocumentFragment();
  for (let i = 0; i < children2.length; i++) {
    appendChild(fragment2, children2[i]);
  }
  return fragment2;
}, "fragment");
var append = /* @__PURE__ */ __name((parent, nodes) => {
  appendChild(parent, fragment(nodes));
  return parent;
}, "append");
var element = /* @__PURE__ */ __name((name, attrs = [], children2 = []) => append(setAttributes(createElement(name), attrs), children2), "element");
var text = createTextNode;
var mapToStyleString = /* @__PURE__ */ __name((m) => map(m, (value, key) => `${key}:${value};`).join(""), "mapToStyleString");
var appendChild = /* @__PURE__ */ __name((parent, child) => parent.appendChild(child), "appendChild");
var ELEMENT_NODE = doc.ELEMENT_NODE;
var TEXT_NODE = doc.TEXT_NODE;
var CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
var COMMENT_NODE = doc.COMMENT_NODE;
var DOCUMENT_NODE = doc.DOCUMENT_NODE;
var DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;

// node_modules/lib0/logging.common.js
init_process_shim();

// node_modules/lib0/symbol.js
init_process_shim();
var create6 = Symbol;

// node_modules/lib0/logging.common.js
var BOLD = create6();
var UNBOLD = create6();
var BLUE = create6();
var GREY = create6();
var GREEN = create6();
var RED = create6();
var PURPLE = create6();
var ORANGE = create6();
var UNCOLOR = create6();
var computeNoColorLoggingArgs = /* @__PURE__ */ __name((args2) => {
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      logArgs.push(JSON.stringify(arg));
    }
  }
  return logArgs;
}, "computeNoColorLoggingArgs");
var lastLoggingTime = getUnixTime();

// node_modules/lib0/logging.js
var _browserStyleMap = {
  [BOLD]: create5("font-weight", "bold"),
  [UNBOLD]: create5("font-weight", "normal"),
  [BLUE]: create5("color", "blue"),
  [GREEN]: create5("color", "green"),
  [GREY]: create5("color", "grey"),
  [RED]: create5("color", "red"),
  [PURPLE]: create5("color", "purple"),
  [ORANGE]: create5("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [UNCOLOR]: create5("color", "black")
};
var computeBrowserLoggingArgs = /* @__PURE__ */ __name((args2) => {
  const strBuilder = [];
  const styles = [];
  const currentStyle = create();
  let logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
}, "computeBrowserLoggingArgs");
var computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
var print = /* @__PURE__ */ __name((...args2) => {
  console.log(...computeLoggingArgs(args2));
  vconsoles.forEach((vc) => vc.print(args2));
}, "print");
var vconsoles = create2();

// node_modules/lib0/iterator.js
init_process_shim();
var createIterator = /* @__PURE__ */ __name((next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
}), "createIterator");
var iteratorFilter = /* @__PURE__ */ __name((iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
}), "iteratorFilter");
var iteratorMap = /* @__PURE__ */ __name((iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
}), "iteratorMap");

// node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
};
__name(DeleteItem, "DeleteItem");
var DeleteSet = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
};
__name(DeleteSet, "DeleteSet");
var iterateDeletedStructs = /* @__PURE__ */ __name((transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  for (let i = 0; i < deletes.length; i++) {
    const del2 = deletes[i];
    iterateStructs(transaction, structs, del2.clock, del2.len, f);
  }
}), "iterateDeletedStructs");
var findIndexDS = /* @__PURE__ */ __name((dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
}, "findIndexDS");
var isDeleted = /* @__PURE__ */ __name((ds, id) => {
  const dis = ds.clients.get(id.client);
  return dis !== void 0 && findIndexDS(dis, id.clock) !== null;
}, "isDeleted");
var sortAndMergeDeleteSet = /* @__PURE__ */ __name((ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        left.len = max(left.len, right.clock + right.len - left.clock);
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
}, "sortAndMergeDeleteSet");
var mergeDeleteSets = /* @__PURE__ */ __name((dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
}, "mergeDeleteSets");
var addToDeleteSet = /* @__PURE__ */ __name((ds, client, clock, length3) => {
  setIfUndefined(ds.clients, client, () => []).push(new DeleteItem(clock, length3));
}, "addToDeleteSet");
var createDeleteSet = /* @__PURE__ */ __name(() => new DeleteSet(), "createDeleteSet");
var createDeleteSetFromStructStore = /* @__PURE__ */ __name((ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
}, "createDeleteSetFromStructStore");
var writeDeleteSet = /* @__PURE__ */ __name((encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
}, "writeDeleteSet");
var readDeleteSet = /* @__PURE__ */ __name((decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => []);
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
}, "readDeleteSet");
var readAndApplyDeleteSet = /* @__PURE__ */ __name((decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
}, "readAndApplyDeleteSet");
var generateNewClientId = uint32;
var Doc = class extends Observable {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = /* @__PURE__ */ __name(() => true, "gcFilter"), meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.whenLoaded = create4((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = /* @__PURE__ */ __name(() => create4((resolve) => {
      const eventHandler = /* @__PURE__ */ __name((isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      }, "eventHandler");
      this.on("sync", eventHandler);
    }), "provideSyncedPromise");
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (!this.isLoaded) {
        this.emit("load", []);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @param {function(Transaction):void} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   *
   * @public
   */
  transact(f, origin = null) {
    transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `y.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `y.define(name, Y.Array) === y.define(name, Y.Array)`
   *
   * After this method is called, the type is also available on `y.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Yjs instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @example
   *   const y = new Y(..)
   *   const appState = {
   *     document: y.getText('document')
   *     comments: y.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Function} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {AbstractType<any>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = AbstractType) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return t;
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return type;
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return this.get(name, YArray);
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return this.get(name, YMap);
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
  /**
   * @param {string} eventName
   * @param {function(...any):any} f
   */
  on(eventName, f) {
    super.on(eventName, f);
  }
  /**
   * @param {string} eventName
   * @param {function} f
   */
  off(eventName, f) {
    super.off(eventName, f);
  }
};
__name(Doc, "Doc");
var DSDecoderV1 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
};
__name(DSDecoderV1, "DSDecoderV1");
var UpdateDecoderV1 = class extends DSDecoderV1 {
  /**
   * @return {ID}
   */
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return readUint8(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return readVarString(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return readVarString(this.restDecoder);
  }
};
__name(UpdateDecoderV1, "UpdateDecoderV1");
var DSDecoderV2 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
};
__name(DSDecoderV2, "DSDecoderV2");
var UpdateDecoderV2 = class extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
};
__name(UpdateDecoderV2, "UpdateDecoderV2");
var DSEncoderV1 = class {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
};
__name(DSEncoderV1, "DSEncoderV1");
var UpdateEncoderV1 = class extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id) {
    writeVarUint(this.restEncoder, id.client);
    writeVarUint(this.restEncoder, id.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id) {
    writeVarUint(this.restEncoder, id.client);
    writeVarUint(this.restEncoder, id.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
};
__name(UpdateEncoderV1, "UpdateEncoderV1");
var DSEncoderV2 = class {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
};
__name(DSEncoderV2, "DSEncoderV2");
var UpdateEncoderV2 = class extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id) {
    this.clientEncoder.write(id.client);
    this.leftClockEncoder.write(id.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id) {
    this.clientEncoder.write(id.client);
    this.rightClockEncoder.write(id.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
};
__name(UpdateEncoderV2, "UpdateEncoderV2");
var writeStructs = /* @__PURE__ */ __name((encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
}, "writeStructs");
var writeClientsStructs = /* @__PURE__ */ __name((encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(encoder, store.clients.get(client), client, clock);
  });
}, "writeClientsStructs");
var readClientsStructRefs = /* @__PURE__ */ __name((decoder, doc2) => {
  const clientRefs = create();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // leftd
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
}, "readClientsStructRefs");
var integrateStructs = /* @__PURE__ */ __name((transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = /* @__PURE__ */ __name(() => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  }, "getNextStructTarget");
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null && stack.length === 0) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = /* @__PURE__ */ __name((client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  }, "updateMissingSv");
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = /* @__PURE__ */ __name(() => {
    for (const item of stack) {
      const client = item.id.client;
      const unapplicableItems = clientsStructRefs.get(client);
      if (unapplicableItems) {
        unapplicableItems.i--;
        restStructs.clients.set(client, unapplicableItems.refs.slice(unapplicableItems.i));
        clientsStructRefs.delete(client);
        unapplicableItems.i = 0;
        unapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  }, "addStackToRestSS");
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
}, "integrateStructs");
var writeStructsFromTransaction = /* @__PURE__ */ __name((encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState), "writeStructsFromTransaction");
var readUpdateV2 = /* @__PURE__ */ __name((decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update2 = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update2);
  }
}, transactionOrigin, false), "readUpdateV2");
var applyUpdateV2 = /* @__PURE__ */ __name((ydoc, update2, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update2);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
}, "applyUpdateV2");
var applyUpdate = /* @__PURE__ */ __name((ydoc, update2, transactionOrigin) => applyUpdateV2(ydoc, update2, transactionOrigin, UpdateDecoderV1), "applyUpdate");
var writeStateAsUpdate = /* @__PURE__ */ __name((encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
}, "writeStateAsUpdate");
var encodeStateAsUpdateV2 = /* @__PURE__ */ __name((doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update2, i) => i === 0 ? update2 : convertUpdateFormatV2ToV1(update2)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
}, "encodeStateAsUpdateV2");
var encodeStateAsUpdate = /* @__PURE__ */ __name((doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1()), "encodeStateAsUpdate");
var readStateVector = /* @__PURE__ */ __name((decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
}, "readStateVector");
var decodeStateVector = /* @__PURE__ */ __name((decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState))), "decodeStateVector");
var writeStateVector = /* @__PURE__ */ __name((encoder, sv) => {
  writeVarUint(encoder.restEncoder, sv.size);
  from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeVarUint(encoder.restEncoder, client);
    writeVarUint(encoder.restEncoder, clock);
  });
  return encoder;
}, "writeStateVector");
var writeDocumentStateVector = /* @__PURE__ */ __name((encoder, doc2) => writeStateVector(encoder, getStateVector(doc2.store)), "writeDocumentStateVector");
var encodeStateVectorV2 = /* @__PURE__ */ __name((doc2, encoder = new DSEncoderV2()) => {
  if (doc2 instanceof Map) {
    writeStateVector(encoder, doc2);
  } else {
    writeDocumentStateVector(encoder, doc2);
  }
  return encoder.toUint8Array();
}, "encodeStateVectorV2");
var encodeStateVector = /* @__PURE__ */ __name((doc2) => encodeStateVectorV2(doc2, new DSEncoderV1()), "encodeStateVector");
var EventHandler = class {
  constructor() {
    this.l = [];
  }
};
__name(EventHandler, "EventHandler");
var createEventHandler = /* @__PURE__ */ __name(() => new EventHandler(), "createEventHandler");
var addEventHandlerListener = /* @__PURE__ */ __name((eventHandler, f) => eventHandler.l.push(f), "addEventHandlerListener");
var removeEventHandlerListener = /* @__PURE__ */ __name((eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
}, "removeEventHandlerListener");
var callEventHandlerListeners = /* @__PURE__ */ __name((eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]), "callEventHandlerListeners");
var ID = class {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
};
__name(ID, "ID");
var compareIDs = /* @__PURE__ */ __name((a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock, "compareIDs");
var createID = /* @__PURE__ */ __name((client, clock) => new ID(client, clock), "createID");
var findRootTypeKey = /* @__PURE__ */ __name((type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
}, "findRootTypeKey");
var RelativePosition = class {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(type, tname, item, assoc = 0) {
    this.type = type;
    this.tname = tname;
    this.item = item;
    this.assoc = assoc;
  }
};
__name(RelativePosition, "RelativePosition");
var relativePositionToJSON = /* @__PURE__ */ __name((rpos) => {
  const json = {};
  if (rpos.type) {
    json.type = rpos.type;
  }
  if (rpos.tname) {
    json.tname = rpos.tname;
  }
  if (rpos.item) {
    json.item = rpos.item;
  }
  if (rpos.assoc != null) {
    json.assoc = rpos.assoc;
  }
  return json;
}, "relativePositionToJSON");
var createRelativePositionFromJSON = /* @__PURE__ */ __name((json) => new RelativePosition(json.type == null ? null : createID(json.type.client, json.type.clock), json.tname || null, json.item == null ? null : createID(json.item.client, json.item.clock), json.assoc == null ? 0 : json.assoc), "createRelativePositionFromJSON");
var AbsolutePosition = class {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(type, index, assoc = 0) {
    this.type = type;
    this.index = index;
    this.assoc = assoc;
  }
};
__name(AbsolutePosition, "AbsolutePosition");
var createAbsolutePosition = /* @__PURE__ */ __name((type, index, assoc = 0) => new AbsolutePosition(type, index, assoc), "createAbsolutePosition");
var createRelativePosition = /* @__PURE__ */ __name((type, item, assoc) => {
  let typeid = null;
  let tname = null;
  if (type._item === null) {
    tname = findRootTypeKey(type);
  } else {
    typeid = createID(type._item.id.client, type._item.id.clock);
  }
  return new RelativePosition(typeid, tname, item, assoc);
}, "createRelativePosition");
var createRelativePositionFromTypeIndex = /* @__PURE__ */ __name((type, index, assoc = 0) => {
  let t = type._start;
  if (assoc < 0) {
    if (index === 0) {
      return createRelativePosition(type, null, assoc);
    }
    index--;
  }
  while (t !== null) {
    if (!t.deleted && t.countable) {
      if (t.length > index) {
        return createRelativePosition(type, createID(t.id.client, t.id.clock + index), assoc);
      }
      index -= t.length;
    }
    if (t.right === null && assoc < 0) {
      return createRelativePosition(type, t.lastId, assoc);
    }
    t = t.right;
  }
  return createRelativePosition(type, null, assoc);
}, "createRelativePositionFromTypeIndex");
var createAbsolutePositionFromRelativePosition = /* @__PURE__ */ __name((rpos, doc2) => {
  const store = doc2.store;
  const rightID = rpos.item;
  const typeID = rpos.type;
  const tname = rpos.tname;
  const assoc = rpos.assoc;
  let type = null;
  let index = 0;
  if (rightID !== null) {
    if (getState(store, rightID.client) <= rightID.clock) {
      return null;
    }
    const res = followRedone(store, rightID);
    const right = res.item;
    if (!(right instanceof Item)) {
      return null;
    }
    type = /** @type {AbstractType<any>} */
    right.parent;
    if (type._item === null || !type._item.deleted) {
      index = right.deleted || !right.countable ? 0 : res.diff + (assoc >= 0 ? 0 : 1);
      let n = right.left;
      while (n !== null) {
        if (!n.deleted && n.countable) {
          index += n.length;
        }
        n = n.left;
      }
    }
  } else {
    if (tname !== null) {
      type = doc2.get(tname);
    } else if (typeID !== null) {
      if (getState(store, typeID.client) <= typeID.clock) {
        return null;
      }
      const { item } = followRedone(store, typeID);
      if (item instanceof Item && item.content instanceof ContentType) {
        type = item.content.type;
      } else {
        return null;
      }
    } else {
      throw unexpectedCase();
    }
    if (assoc >= 0) {
      index = type._length;
    } else {
      index = 0;
    }
  }
  return createAbsolutePosition(type, index, rpos.assoc);
}, "createAbsolutePositionFromRelativePosition");
var compareRelativePositions = /* @__PURE__ */ __name((a, b) => a === b || a !== null && b !== null && a.tname === b.tname && compareIDs(a.item, b.item) && compareIDs(a.type, b.type) && a.assoc === b.assoc, "compareRelativePositions");
var Snapshot = class {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
};
__name(Snapshot, "Snapshot");
var createSnapshot = /* @__PURE__ */ __name((ds, sm) => new Snapshot(ds, sm), "createSnapshot");
var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
var isVisible = /* @__PURE__ */ __name((item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id), "isVisible");
var splitSnapshotAffectedStructs = /* @__PURE__ */ __name((transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create2);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (item) => {
    });
    meta.add(snapshot);
  }
}, "splitSnapshotAffectedStructs");
var StructStore = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
};
__name(StructStore, "StructStore");
var getStateVector = /* @__PURE__ */ __name((store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
}, "getStateVector");
var getState = /* @__PURE__ */ __name((store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
}, "getState");
var addStruct = /* @__PURE__ */ __name((store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
}, "addStruct");
var findIndexSS = /* @__PURE__ */ __name((structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
}, "findIndexSS");
var find = /* @__PURE__ */ __name((store, id) => {
  const structs = store.clients.get(id.client);
  return structs[findIndexSS(structs, id.clock)];
}, "find");
var getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
var findIndexCleanStart = /* @__PURE__ */ __name((transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
}, "findIndexCleanStart");
var getItemCleanStart = /* @__PURE__ */ __name((transaction, id) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id.clock)];
}, "getItemCleanStart");
var getItemCleanEnd = /* @__PURE__ */ __name((transaction, store, id) => {
  const structs = store.clients.get(id.client);
  const index = findIndexSS(structs, id.clock);
  const struct = structs[index];
  if (id.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id.clock - struct.id.clock + 1));
  }
  return struct;
}, "getItemCleanEnd");
var replaceStruct = /* @__PURE__ */ __name((store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
}, "replaceStruct");
var iterateStructs = /* @__PURE__ */ __name((transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
}, "iterateStructs");
var Transaction = class {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
  }
};
__name(Transaction, "Transaction");
var writeUpdateMessageFromTransaction = /* @__PURE__ */ __name((encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
}, "writeUpdateMessageFromTransaction");
var addChangedTypeToTransaction = /* @__PURE__ */ __name((transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create2).add(parentSub);
  }
}, "addChangedTypeToTransaction");
var tryToMergeWithLeft = /* @__PURE__ */ __name((structs, pos) => {
  const left = structs[pos - 1];
  const right = structs[pos];
  if (left.deleted === right.deleted && left.constructor === right.constructor) {
    if (left.mergeWith(right)) {
      structs.splice(pos, 1);
      if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
      right.parent._map.get(right.parentSub) === right) {
        right.parent._map.set(
          right.parentSub,
          /** @type {Item} */
          left
        );
      }
    }
  }
}, "tryToMergeWithLeft");
var tryGcDeleteSet = /* @__PURE__ */ __name((ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
}, "tryGcDeleteSet");
var tryMergeDeleteSet = /* @__PURE__ */ __name((ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[--si]) {
        tryToMergeWithLeft(structs, si);
      }
    }
  });
}, "tryMergeDeleteSet");
var cleanupTransactions = /* @__PURE__ */ __name((transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach(
          (events, type) => fs.push(() => {
            if (type._item === null || !type._item.deleted) {
              events = events.filter(
                (event) => event.target._item === null || !event.target._item.deleted
              );
              events.forEach((event) => {
                event.currentTarget = type;
              });
              events.sort((event1, event2) => event1.path.length - event2.path.length);
              callEventHandlerListeners(type._dEH, events, transaction);
            }
          })
        );
        fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
      });
      callAll(fs, []);
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; i2--) {
            tryToMergeWithLeft(structs, i2);
          }
        }
      });
      for (let i2 = 0; i2 < mergeStructs.length; i2++) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          tryToMergeWithLeft(structs, replacedStructPos + 1);
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLeft(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
}, "cleanupTransactions");
var transact = /* @__PURE__ */ __name((doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
}, "transact");
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
__name(lazyStructReaderGenerator, "lazyStructReaderGenerator");
var LazyStructReader = class {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
};
__name(LazyStructReader, "LazyStructReader");
var LazyStructWriter = class {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
};
__name(LazyStructWriter, "LazyStructWriter");
var mergeUpdates = /* @__PURE__ */ __name((updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1), "mergeUpdates");
var sliceStruct = /* @__PURE__ */ __name((left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
}, "sliceStruct");
var mergeUpdatesV2 = /* @__PURE__ */ __name((updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update2) => new YDecoder(createDecoder(update2)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
}, "mergeUpdatesV2");
var diffUpdateV2 = /* @__PURE__ */ __name((update2, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update2));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
}, "diffUpdateV2");
var flushLazyStructWriter = /* @__PURE__ */ __name((lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
}, "flushLazyStructWriter");
var writeStructToLazyStructWriter = /* @__PURE__ */ __name((lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
}, "writeStructToLazyStructWriter");
var finishLazyStructWriting = /* @__PURE__ */ __name((lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
}, "finishLazyStructWriting");
var convertUpdateFormat = /* @__PURE__ */ __name((update2, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update2));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, curr, 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
}, "convertUpdateFormat");
var convertUpdateFormatV2ToV1 = /* @__PURE__ */ __name((update2) => convertUpdateFormat(update2, UpdateDecoderV2, UpdateEncoderV1), "convertUpdateFormatV2ToV1");
var YEvent = class {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return getPathTo(this.currentTarget, this.target);
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      const keys3 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys3.set(key, { action, oldValue });
        }
      });
      this._keys = keys3;
    }
    return this._keys;
  }
  /**
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      const target = this.target;
      const added = create2();
      const deleted = create2();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = /* @__PURE__ */ __name(() => {
          if (lastOp) {
            delta.push(lastOp);
          }
        }, "packOp");
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
};
__name(YEvent, "YEvent");
var getPathTo = /* @__PURE__ */ __name((parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted) {
          i++;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
}, "getPathTo");
var maxSearchMarker = 80;
var globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
};
__name(ArraySearchMarker, "ArraySearchMarker");
var refreshMarkerTimestamp = /* @__PURE__ */ __name((marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
}, "refreshMarkerTimestamp");
var overwriteMarker = /* @__PURE__ */ __name((marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
}, "overwriteMarker");
var markPosition = /* @__PURE__ */ __name((searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
}, "markPosition");
var findMarker = /* @__PURE__ */ __name((yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
}, "findMarker");
var updateMarkerChanges = /* @__PURE__ */ __name((searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
}, "updateMarkerChanges");
var callTypeObservers = /* @__PURE__ */ __name((type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
}, "callTypeObservers");
var AbstractType = class {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
};
__name(AbstractType, "AbstractType");
var typeListSlice = /* @__PURE__ */ __name((type, start, end) => {
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
}, "typeListSlice");
var typeListToArray = /* @__PURE__ */ __name((type) => {
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
}, "typeListToArray");
var typeListForEach = /* @__PURE__ */ __name((type, f) => {
  let index = 0;
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
}, "typeListForEach");
var typeListMap = /* @__PURE__ */ __name((type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
}, "typeListMap");
var typeListCreateIterator = /* @__PURE__ */ __name((type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
}, "typeListCreateIterator");
var typeListGet = /* @__PURE__ */ __name((type, index) => {
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
}, "typeListGet");
var typeListInsertGenericsAfter = /* @__PURE__ */ __name((transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = /* @__PURE__ */ __name(() => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  }, "packJsonContent");
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
}, "typeListInsertGenericsAfter");
var lengthExceeded = create3("Length exceeded!");
var typeListInsertGenerics = /* @__PURE__ */ __name((transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded;
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
}, "typeListInsertGenerics");
var typeListPushGenerics = /* @__PURE__ */ __name((transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
}, "typeListPushGenerics");
var typeListDelete = /* @__PURE__ */ __name((transaction, parent, index, length3) => {
  if (length3 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length3;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length3 > 0 && n !== null) {
    if (!n.deleted) {
      if (length3 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length3));
      }
      n.delete(transaction);
      length3 -= n.length;
    }
    n = n.right;
  }
  if (length3 > 0) {
    throw lengthExceeded;
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length3
      /* in case we remove the above exception */
    );
  }
}, "typeListDelete");
var typeMapDelete = /* @__PURE__ */ __name((transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
}, "typeMapDelete");
var typeMapSet = /* @__PURE__ */ __name((transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
}, "typeMapSet");
var typeMapGet = /* @__PURE__ */ __name((parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
}, "typeMapGet");
var typeMapGetAll = /* @__PURE__ */ __name((parent) => {
  const res = {};
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
}, "typeMapGetAll");
var typeMapHas = /* @__PURE__ */ __name((parent, key) => {
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
}, "typeMapHas");
var createMapIterator = /* @__PURE__ */ __name((map2) => iteratorFilter(
  map2.entries(),
  /** @param {any} entry */
  (entry) => !entry[1].deleted
), "createMapIterator");
var YArrayEvent = class extends YEvent {
  /**
   * @param {YArray<T>} yarray The changed type
   * @param {Transaction} transaction The transaction object
   */
  constructor(yarray, transaction) {
    super(yarray, transaction);
    this._transaction = transaction;
  }
};
__name(YArrayEvent, "YArrayEvent");
var YArray = class extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new YArray();
  }
  /**
   * @return {YArray<T>}
   */
  clone() {
    const arr = new YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<T>} content Array of content to preppend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function on once on overy element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
};
__name(YArray, "YArray");
var readYArray = /* @__PURE__ */ __name((_decoder) => new YArray(), "readYArray");
var YMapEvent = class extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
};
__name(YMapEvent, "YMapEvent");
var YMap = class extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new YMap();
  }
  /**
   * @return {YMap<MapType>}
   */
  clone() {
    const map2 = new YMap();
    this.forEach((value, key) => {
      map2.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map2;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    const map2 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map2[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map2;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this._map)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<any>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => v[1].content.getContent()[v[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<any>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this._map),
      /** @param {any} v */
      (v) => [v[0], v[1].content.getContent()[v[1].length - 1]]
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<any>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {MapType} value The value of the element to add
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map2) {
          typeMapDelete(transaction, map2, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
};
__name(YMap, "YMap");
var readYMap = /* @__PURE__ */ __name((_decoder) => new YMap(), "readYMap");
var equalAttrs = /* @__PURE__ */ __name((a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b), "equalAttrs");
var ItemTextListPosition = class {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
};
__name(ItemTextListPosition, "ItemTextListPosition");
var findNextPosition = /* @__PURE__ */ __name((transaction, pos, count2) => {
  while (pos.right !== null && count2 > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count2 < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count2));
          }
          pos.index += pos.right.length;
          count2 -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
}, "findNextPosition");
var findPosition = /* @__PURE__ */ __name((transaction, parent, index) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = findMarker(parent, index);
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
}, "findPosition");
var insertNegatedAttributes = /* @__PURE__ */ __name((transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
}, "insertNegatedAttributes");
var updateCurrentAttributes = /* @__PURE__ */ __name((currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
}, "updateCurrentAttributes");
var minimizeAttributeChanges = /* @__PURE__ */ __name((currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] || null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    ))
      ;
    else {
      break;
    }
    currPos.forward();
  }
}, "minimizeAttributeChanges");
var insertAttributes = /* @__PURE__ */ __name((transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) || null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
}, "insertAttributes");
var insertText = /* @__PURE__ */ __name((transaction, parent, currPos, text3, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text3.constructor === String ? new ContentString(
    /** @type {string} */
    text3
  ) : text3 instanceof AbstractType ? new ContentType(text3) : new ContentEmbed(text3);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
}, "insertText");
var formatText = /* @__PURE__ */ __name((transaction, parent, currPos, length3, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop:
    while (currPos.right !== null && (length3 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
      if (!currPos.right.deleted) {
        switch (currPos.right.content.constructor) {
          case ContentFormat: {
            const { key, value } = (
              /** @type {ContentFormat} */
              currPos.right.content
            );
            const attr2 = attributes[key];
            if (attr2 !== void 0) {
              if (equalAttrs(attr2, value)) {
                negatedAttributes.delete(key);
              } else {
                if (length3 === 0) {
                  break iterationLoop;
                }
                negatedAttributes.set(key, value);
              }
              currPos.right.delete(transaction);
            } else {
              currPos.currentAttributes.set(key, value);
            }
            break;
          }
          default:
            if (length3 < currPos.right.length) {
              getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
            }
            length3 -= currPos.right.length;
            break;
        }
      }
      currPos.forward();
    }
  if (length3 > 0) {
    let newlines = "";
    for (; length3 > 0; length3--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
}, "formatText");
var cleanupFormattingGap = /* @__PURE__ */ __name((transaction, start, curr, startAttributes, currAttributes) => {
  let end = start;
  const endFormats = create();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = (
        /** @type {ContentFormat} */
        end.content
      );
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          const startAttrValue = startAttributes.get(key) || null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && (currAttributes.get(key) || null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(
              currAttributes,
              /** @type {ContentFormat} */
              content
            );
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
}, "cleanupFormattingGap");
var cleanupContextlessFormattingGap = /* @__PURE__ */ __name((transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
}, "cleanupContextlessFormattingGap");
var cleanupYTextFormatting = /* @__PURE__ */ __name((type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
}, "cleanupYTextFormatting");
var deleteText = /* @__PURE__ */ __name((transaction, currPos, length3) => {
  const startLength = length3;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length3 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
  }
  return currPos;
}, "deleteText");
var YTextEvent = class extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert2 = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = /* @__PURE__ */ __name(() => {
          if (action !== null) {
            let op;
            switch (action) {
              case "delete":
                op = { delete: deleteLen };
                deleteLen = 0;
                break;
              case "insert":
                op = { insert: insert2 };
                if (currentAttributes.size > 0) {
                  op.attributes = {};
                  currentAttributes.forEach((value, key) => {
                    if (value !== null) {
                      op.attributes[key] = value;
                    }
                  });
                }
                insert2 = "";
                break;
              case "retain":
                op = { retain };
                if (Object.keys(attributes).length > 0) {
                  op.attributes = {};
                  for (const key in attributes) {
                    op.attributes[key] = attributes[key];
                  }
                }
                retain = 0;
                break;
            }
            delta.push(op);
            action = null;
          }
        }, "addOp");
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert2 = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert2 += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) || null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) || null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) || null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr2 = attributes[key];
                if (attr2 !== void 0) {
                  if (!equalAttrs(attr2, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr2 !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
};
__name(YTextEvent, "YTextEvent");
var YText = class extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new YText();
  }
  /**
   * @return {YText}
   */
  clone() {
    const text3 = new YText();
    text3.applyDelta(this.toDelta());
    return text3;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    const doc2 = transaction.doc;
    callTypeObservers(this, transaction, event);
    if (!transaction.local) {
      let foundFormattingItem = false;
      for (const [client, afterClock] of transaction.afterState.entries()) {
        const clock = transaction.beforeState.get(client) || 0;
        if (afterClock === clock) {
          continue;
        }
        iterateStructs(
          transaction,
          /** @type {Array<Item|GC>} */
          doc2.store.clients.get(client),
          clock,
          afterClock,
          (item) => {
            if (!item.deleted && /** @type {Item} */
            item.content.constructor === ContentFormat) {
              foundFormattingItem = true;
            }
          }
        );
        if (foundFormattingItem) {
          break;
        }
      }
      if (!foundFormattingItem) {
        iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
          if (item instanceof GC || foundFormattingItem) {
            return;
          }
          if (item.parent === this && item.content.constructor === ContentFormat) {
            foundFormattingItem = true;
          }
        });
      }
      transact(doc2, (t) => {
        if (foundFormattingItem) {
          cleanupYTextFormatting(this);
        } else {
          iterateDeletedStructs(t, t.deleteSet, (item) => {
            if (item instanceof GC) {
              return;
            }
            if (item.parent === this) {
              cleanupContextlessFormattingGap(t, item);
            }
          });
        }
      });
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    __name(packStr, "packStr");
    transact(doc2, (transaction) => {
      if (snapshot) {
        splitSnapshotAffectedStructs(transaction, snapshot);
      }
      if (prevSnapshot) {
        splitSnapshotAffectedStructs(transaction, prevSnapshot);
      }
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    }, "cleanup");
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text3, attributes) {
    if (text3.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text3, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text3, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes = {}) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index);
        insertText(transaction, this, pos, embed, attributes);
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length3) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index), length3);
      });
    } else {
      this._pending.push(() => this.delete(index, length3));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length3, attributes) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length3, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length3, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
};
__name(YText, "YText");
var readYText = /* @__PURE__ */ __name((_decoder) => new YText(), "readYText");
var YXmlTreeWalker = class {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root2, f = () => true) {
    this._filter = f;
    this._root = root2;
    this._currentNode = /** @type {Item} */
    root2._start;
    this._firstCall = true;
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            if (n.right !== null) {
              n = n.right;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
};
__name(YXmlTreeWalker, "YXmlTreeWalker");
var YXmlFragment = class extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new YXmlFragment();
  }
  /**
   * @return {YXmlFragment}
   */
  clone() {
    const el = new YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element3) => element3.nodeName && element3.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from(new YXmlTreeWalker(this, (element3) => element3.nodeName && element3.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return transact(
      /** @type {Doc} */
      this.doc,
      () => typeListMap(this, (xml) => xml.toString()).join("")
    );
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment2 = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment2, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment2.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment2;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create3("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to preppend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on overy child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
};
__name(YXmlFragment, "YXmlFragment");
var readYXmlFragment = /* @__PURE__ */ __name((_decoder) => new YXmlFragment(), "readYXmlFragment");
var YXmlElement = class extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new YXmlElement(this.nodeName);
  }
  /**
   * @return {YXmlElement}
   */
  clone() {
    const el = new YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys3 = [];
    for (const key in attrs) {
      keys3.push(key);
    }
    keys3.sort();
    const keysLen = keys3.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys3[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {String} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {String} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {String} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      dom.setAttribute(key, attrs[key]);
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
};
__name(YXmlElement, "YXmlElement");
var readYXmlElement = /* @__PURE__ */ __name((decoder) => new YXmlElement(decoder.readKey()), "readYXmlElement");
var YXmlEvent = class extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
};
__name(YXmlEvent, "YXmlEvent");
var YXmlHook = class extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new YXmlHook(this.hookName);
  }
  /**
   * @return {YXmlHook}
   */
  clone() {
    const el = new YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
};
__name(YXmlHook, "YXmlHook");
var readYXmlHook = /* @__PURE__ */ __name((decoder) => new YXmlHook(decoder.readKey()), "readYXmlHook");
var YXmlText = class extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new YXmlText();
  }
  /**
   * @return {YXmlText}
   */
  clone() {
    const text3 = new YXmlText();
    text3.applyDelta(this.toDelta());
    return text3;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr2 = node.attrs[j];
          str += ` ${attr2.key}="${attr2.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
};
__name(YXmlText, "YXmlText");
var readYXmlText = /* @__PURE__ */ __name((decoder) => new YXmlText(), "readYXmlText");
var AbstractStruct = class {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id, length3) {
    this.id = id;
    this.length = length3;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
};
__name(AbstractStruct, "AbstractStruct");
var structGCRefNumber = 0;
var GC = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
__name(GC, "GC");
var ContentBinary = class {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
};
__name(ContentBinary, "ContentBinary");
var readContentBinary = /* @__PURE__ */ __name((decoder) => new ContentBinary(decoder.readBuf()), "readContentBinary");
var ContentDeleted = class {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
};
__name(ContentDeleted, "ContentDeleted");
var readContentDeleted = /* @__PURE__ */ __name((decoder) => new ContentDeleted(decoder.readLen()), "readContentDeleted");
var createDocFromOpts = /* @__PURE__ */ __name((guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false }), "createDocFromOpts");
var ContentDoc = class {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
};
__name(ContentDoc, "ContentDoc");
var readContentDoc = /* @__PURE__ */ __name((decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny())), "readContentDoc");
var ContentEmbed = class {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
};
__name(ContentEmbed, "ContentEmbed");
var readContentEmbed = /* @__PURE__ */ __name((decoder) => new ContentEmbed(decoder.readJSON()), "readContentEmbed");
var ContentFormat = class {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} offset
   * @return {ContentFormat}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    item.parent._searchMarker = null;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
};
__name(ContentFormat, "ContentFormat");
var readContentFormat = /* @__PURE__ */ __name((decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON()), "readContentFormat");
var ContentJSON = class {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
};
__name(ContentJSON, "ContentJSON");
var readContentJSON = /* @__PURE__ */ __name((decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
}, "readContentJSON");
var ContentAny = class {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
};
__name(ContentAny, "ContentAny");
var readContentAny = /* @__PURE__ */ __name((decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
}, "readContentAny");
var ContentString = class {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
};
__name(ContentString, "ContentString");
var readContentString = /* @__PURE__ */ __name((decoder) => new ContentString(decoder.readString()), "readContentString");
var typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
var YArrayRefID = 0;
var YMapRefID = 1;
var YTextRefID = 2;
var YXmlElementRefID = 3;
var YXmlFragmentRefID = 4;
var YXmlHookRefID = 5;
var YXmlTextRefID = 6;
var ContentType = class {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
};
__name(ContentType, "ContentType");
var readContentType = /* @__PURE__ */ __name((decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder)), "readContentType");
var followRedone = /* @__PURE__ */ __name((store, id) => {
  let nextID = id;
  let diff = 0;
  let item;
  do {
    if (diff > 0) {
      nextID = createID(nextID.client, nextID.clock + diff);
    }
    item = getItem(store, nextID);
    diff = nextID.clock - item.id.clock;
    nextID = item.redone;
  } while (nextID !== null && item instanceof Item);
  return {
    item,
    diff
  };
}, "followRedone");
var splitItem = /* @__PURE__ */ __name((transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
}, "splitItem");
var Item = class extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    }
    if (!this.parent) {
      if (this.left && this.left.constructor === Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      }
      if (this.right && this.right.constructor === Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
};
__name(Item, "Item");
var readItemContent = /* @__PURE__ */ __name((decoder, info) => contentRefs[info & BITS5](decoder), "readItemContent");
var contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
var structSkipRefNumber = 10;
var Skip = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
__name(Skip, "Skip");
var glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
var importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;

// src/services/sync/SyncedDocument.ts
var import_obsidian5 = require("obsidian");

// node_modules/y-protocols/awareness.js
init_process_shim();
var outdatedTimeout = 3e4;
var Awareness = class extends Observable {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now2 = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now2 - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now2 - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
};
__name(Awareness, "Awareness");
var removeAwarenessStates = /* @__PURE__ */ __name((awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
}, "removeAwarenessStates");
var encodeAwarenessUpdate = /* @__PURE__ */ __name((awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
}, "encodeAwarenessUpdate");
var applyAwarenessUpdate = /* @__PURE__ */ __name((awareness, update2, origin) => {
  const decoder = createDecoder(update2);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
}, "applyAwarenessUpdate");

// src/services/sync/PersistedYDoc.ts
init_process_shim();

// node_modules/y-indexeddb/src/y-indexeddb.js
init_process_shim();

// node_modules/lib0/indexeddb.js
init_process_shim();
var rtop = /* @__PURE__ */ __name((request) => create4((resolve, reject) => {
  request.onerror = (event) => reject(new Error(event.target.error));
  request.onsuccess = (event) => resolve(event.target.result);
}), "rtop");
var openDB = /* @__PURE__ */ __name((name, initDB) => create4((resolve, reject) => {
  const request = indexedDB.open(name);
  request.onupgradeneeded = (event) => initDB(event.target.result);
  request.onerror = (event) => reject(create3(event.target.error));
  request.onsuccess = (event) => {
    const db = event.target.result;
    db.onversionchange = () => {
      db.close();
    };
    if (typeof addEventListener !== "undefined") {
      addEventListener("unload", () => db.close());
    }
    resolve(db);
  };
}), "openDB");
var deleteDB = /* @__PURE__ */ __name((name) => rtop(indexedDB.deleteDatabase(name)), "deleteDB");
var createStores = /* @__PURE__ */ __name((db, definitions) => definitions.forEach(
  (d) => (
    // @ts-ignore
    db.createObjectStore.apply(db, d)
  )
), "createStores");
var transact2 = /* @__PURE__ */ __name((db, stores, access = "readwrite") => {
  const transaction = db.transaction(stores, access);
  return stores.map((store) => getStore(transaction, store));
}, "transact");
var count = /* @__PURE__ */ __name((store, range) => rtop(store.count(range)), "count");
var get = /* @__PURE__ */ __name((store, key) => rtop(store.get(key)), "get");
var del = /* @__PURE__ */ __name((store, key) => rtop(store.delete(key)), "del");
var put = /* @__PURE__ */ __name((store, item, key) => rtop(store.put(item, key)), "put");
var addAutoKey = /* @__PURE__ */ __name((store, item) => rtop(store.add(item)), "addAutoKey");
var getAll = /* @__PURE__ */ __name((store, range, limit) => rtop(store.getAll(range, limit)), "getAll");
var queryFirst = /* @__PURE__ */ __name((store, query, direction) => {
  let first = null;
  return iterateKeys(store, query, (key) => {
    first = key;
    return false;
  }, direction).then(() => first);
}, "queryFirst");
var getLastKey = /* @__PURE__ */ __name((store, range = null) => queryFirst(store, range, "prev"), "getLastKey");
var iterateOnRequest = /* @__PURE__ */ __name((request, f) => create4((resolve, reject) => {
  request.onerror = reject;
  request.onsuccess = async (event) => {
    const cursor = event.target.result;
    if (cursor === null || await f(cursor) === false) {
      return resolve();
    }
    cursor.continue();
  };
}), "iterateOnRequest");
var iterateKeys = /* @__PURE__ */ __name((store, keyrange, f, direction = "next") => iterateOnRequest(store.openKeyCursor(keyrange, direction), (cursor) => f(cursor.key)), "iterateKeys");
var getStore = /* @__PURE__ */ __name((t, store) => t.objectStore(store), "getStore");
var createIDBKeyRangeUpperBound = /* @__PURE__ */ __name((upper, upperOpen) => IDBKeyRange.upperBound(upper, upperOpen), "createIDBKeyRangeUpperBound");
var createIDBKeyRangeLowerBound = /* @__PURE__ */ __name((lower, lowerOpen) => IDBKeyRange.lowerBound(lower, lowerOpen), "createIDBKeyRangeLowerBound");

// node_modules/lib0/mutex.js
init_process_shim();
var createMutex = /* @__PURE__ */ __name(() => {
  let token = true;
  return (f, g) => {
    if (token) {
      token = false;
      try {
        f();
      } finally {
        token = true;
      }
    } else if (g !== void 0) {
      g();
    }
  };
}, "createMutex");

// node_modules/y-indexeddb/src/y-indexeddb.js
var customStoreName = "custom";
var updatesStoreName = "updates";
var PREFERRED_TRIM_SIZE = 500;
var fetchUpdates = /* @__PURE__ */ __name((idbPersistence) => {
  const [updatesStore] = transact2(
    /** @type {IDBDatabase} */
    idbPersistence.db,
    [updatesStoreName]
  );
  return getAll(updatesStore, createIDBKeyRangeLowerBound(idbPersistence._dbref, false)).then(
    (updates) => transact(idbPersistence.doc, () => {
      updates.forEach((val) => applyUpdate(idbPersistence.doc, val));
    }, idbPersistence, false)
  ).then(() => getLastKey(updatesStore).then((lastKey) => {
    idbPersistence._dbref = lastKey + 1;
  })).then(() => count(updatesStore).then((cnt) => {
    idbPersistence._dbsize = cnt;
  })).then(() => updatesStore);
}, "fetchUpdates");
var storeState = /* @__PURE__ */ __name((idbPersistence, forceStore = true) => fetchUpdates(idbPersistence).then((updatesStore) => {
  if (forceStore || idbPersistence._dbsize >= PREFERRED_TRIM_SIZE) {
    addAutoKey(updatesStore, encodeStateAsUpdate(idbPersistence.doc)).then(() => del(updatesStore, createIDBKeyRangeUpperBound(idbPersistence._dbref, true))).then(() => count(updatesStore).then((cnt) => {
      idbPersistence._dbsize = cnt;
    }));
  }
}), "storeState");
var IndexeddbPersistence = class extends Observable {
  /**
   * @param {string} name
   * @param {Y.Doc} doc
   */
  constructor(name, doc2) {
    super();
    this.doc = doc2;
    this.name = name;
    this._mux = createMutex();
    this._dbref = 0;
    this._dbsize = 0;
    this._destroyed = false;
    this.db = null;
    this.synced = false;
    this._db = openDB(
      name,
      (db) => createStores(db, [
        ["updates", { autoIncrement: true }],
        ["custom"]
      ])
    );
    this.whenSynced = this._db.then((db) => {
      this.db = db;
      const currState = encodeStateAsUpdate(doc2);
      return fetchUpdates(this).then((updatesStore) => addAutoKey(updatesStore, currState)).then(() => {
        if (this._destroyed)
          return this;
        this.emit("synced", [this]);
        this.synced = true;
        return this;
      });
    });
    this._storeTimeout = 1e3;
    this._storeTimeoutId = null;
    this._storeUpdate = (update2, origin) => {
      if (this.db && origin !== this) {
        const [updatesStore] = transact2(
          /** @type {IDBDatabase} */
          this.db,
          [updatesStoreName]
        );
        addAutoKey(updatesStore, update2);
        if (++this._dbsize >= PREFERRED_TRIM_SIZE) {
          if (this._storeTimeoutId !== null) {
            clearTimeout(this._storeTimeoutId);
          }
          this._storeTimeoutId = setTimeout(() => {
            storeState(this, false);
            this._storeTimeoutId = null;
          }, this._storeTimeout);
        }
      }
    };
    doc2.on("update", this._storeUpdate);
    this.destroy = this.destroy.bind(this);
    doc2.on("destroy", this.destroy);
  }
  destroy() {
    if (this._storeTimeoutId) {
      clearTimeout(this._storeTimeoutId);
    }
    this.doc.off("update", this._storeUpdate);
    this.doc.off("destroy", this.destroy);
    this._destroyed = true;
    return this._db.then((db) => {
      db.close();
    });
  }
  /**
   * Destroys this instance and removes all data from indexeddb.
   *
   * @return {Promise<void>}
   */
  clearData() {
    return this.destroy().then(() => {
      deleteDB(this.name);
    });
  }
  /**
   * @param {String | number | ArrayBuffer | Date} key
   * @return {Promise<String | number | ArrayBuffer | Date | any>}
   */
  get(key) {
    return this._db.then((db) => {
      const [custom] = transact2(db, [customStoreName], "readonly");
      return get(custom, key);
    });
  }
  /**
   * @param {String | number | ArrayBuffer | Date} key
   * @param {String | number | ArrayBuffer | Date} value
   * @return {Promise<String | number | ArrayBuffer | Date>}
   */
  set(key, value) {
    return this._db.then((db) => {
      const [custom] = transact2(db, [customStoreName]);
      return put(custom, value, key);
    });
  }
  /**
   * @param {String | number | ArrayBuffer | Date} key
   * @return {Promise<undefined>}
   */
  del(key) {
    return this._db.then((db) => {
      const [custom] = transact2(db, [customStoreName]);
      return del(custom, key);
    });
  }
};
__name(IndexeddbPersistence, "IndexeddbPersistence");

// src/services/sync/PersistedYDoc.ts
var CONTENT_TEXT = "contents";
var PersistedYDoc = class {
  constructor(appId, documentId) {
    this.documentId = documentId;
    this.notifier = new ReadyNotifier();
    this.ydoc = new Doc();
    this.persistence = new IndexeddbPersistence(
      `s.g:${appId}:${this.documentId}`,
      this.ydoc
    );
    this.persistence.on("synced", () => {
      this.notifier.ready(this.ydoc);
    });
  }
  destroy() {
    this.notifier.unready();
    this.ydoc.destroy();
  }
  onReady(cb) {
    this.notifier.register(cb);
  }
  isReady() {
    return this.notifier.isReady();
  }
  getDoc() {
    return this.ydoc;
  }
  getText() {
    return this.ydoc.getText(CONTENT_TEXT);
  }
};
__name(PersistedYDoc, "PersistedYDoc");

// src/services/sync/HostChannel.ts
init_process_shim();
var import_obsidian3 = require("obsidian");

// src/services/sync/Update.ts
init_process_shim();
var import_obsidian2 = require("obsidian");
var ENABLED_ENCODINGS = [0 /* PLAIN */];
var MIN_ENCODING = ENABLED_ENCODINGS.reduce(
  (min2, e) => Math.min(min2, e)
);
var Update = class {
  static encode(data, encoding = 0 /* PLAIN */) {
    if (!ENABLED_ENCODINGS.includes(encoding))
      throw new Error(`cannot encode unsupported encoding: ${encoding}`);
    const encoded = (() => {
      switch (encoding) {
        case 0 /* PLAIN */:
          return data;
        default:
          throw new Error(`missing encoder: ${encoding}`);
      }
    })();
    return Update.prefixWithEncoding(encoding, encoded).buffer;
  }
  static encodePlain(data) {
    return data;
  }
  static prefixWithEncoding(encoding, data) {
    const prefixed = new Uint8Array(data.byteLength + 1);
    prefixed.set([encoding], 0);
    prefixed.set(data, 1);
    return prefixed;
  }
  static decode(raw) {
    const arrBuff = typeof raw === "string" ? (0, import_obsidian2.base64ToArrayBuffer)(raw) : raw;
    const encodingAndData = new Uint8Array(arrBuff);
    const encoding = encodingAndData[0];
    const data = encodingAndData.slice(1);
    switch (encoding) {
      case 0 /* PLAIN */:
        return data;
      default:
        throw new Error(`cannot decode unsupported encoding: ${encoding}`);
    }
  }
};
__name(Update, "Update");

// src/services/sync/HostChannel.ts
var Reason = /* @__PURE__ */ ((Reason2) => {
  Reason2["Unauthorized"] = "unauthorized";
  Reason2["DiffError"] = "diff_error";
  Reason2["SVError"] = "sv_error";
  Reason2["Unknown"] = "unknown";
  return Reason2;
})(Reason || {});
var HostChannel = class {
  constructor(plugin, documentId, { onAwareness, onUpdate }) {
    this.plugin = plugin;
    this.documentId = documentId;
    this.ydoc = null;
    this.channel = null;
    this.handleChannelJoin = /* @__PURE__ */ __name((resp) => {
      if (!this.ydoc || !this.channel)
        return;
      this.plugin.logger.debug(`[${this.documentId}] joined channel`);
      const sv = new Uint8Array((0, import_obsidian3.base64ToArrayBuffer)(resp.sv));
      const diff = new Uint8Array((0, import_obsidian3.base64ToArrayBuffer)(resp.diff));
      this.channel.on("update", this.handleChannelUpdate);
      this.channel.on("awareness", this.handleChannelAwareness);
      this.onUpdate(diff);
      this.channel.push(
        "update",
        Update.encode(encodeStateAsUpdate(this.ydoc, sv))
      );
    }, "handleChannelJoin");
    this.handleChannelRejected = /* @__PURE__ */ __name((resp) => {
      if (!resp || !resp.reason || !Object.values(Reason).includes(resp.reason)) {
        this.plugin.logger.error(
          `[${this.documentId}] channel join rejected: ${resp}`
        );
        return this.disconnect();
      }
      this.plugin.logger.warn(
        `[${this.documentId}] channel join rejected: ${resp.reason}`
      );
      if (resp.reason === "unauthorized" /* Unauthorized */) {
        this.plugin.files.unlink(this.documentId);
        this.plugin.sync.getDocument(this.documentId).destroy();
      }
      return this.disconnect();
    }, "handleChannelRejected");
    this.handleChannelUpdate = /* @__PURE__ */ __name((updateBuffer) => {
      if (!this.ydoc)
        return this.plugin.logger.warn(
          `[${this.documentId}] received update but ydoc is not loaded`
        );
      try {
        this.plugin.logger.debug(
          `[${this.documentId}] received update - ${updateBuffer.byteLength} bytes`
        );
        const update2 = Update.decode(updateBuffer);
        this.onUpdate(update2);
      } catch (e) {
      }
    }, "handleChannelUpdate");
    this.handleChannelAwareness = /* @__PURE__ */ __name((updateBuffer) => {
      this.onAwareness(new Uint8Array(updateBuffer), "host");
    }, "handleChannelAwareness");
    this.onAwareness = onAwareness;
    this.onUpdate = onUpdate;
  }
  connect(ydoc, socket) {
    this.disconnect();
    this.ydoc = ydoc;
    this.channel = socket.channel(
      `sync:${this.documentId}`,
      encodeStateVector(this.ydoc).buffer
    );
    this.channel.join().receive("ok", this.handleChannelJoin).receive("error", this.handleChannelRejected);
  }
  disconnect() {
    if (this.channel)
      this.channel.leave();
    this.channel = null;
    this.ydoc = null;
  }
  send(event, data) {
    var _a;
    (_a = this.channel) == null ? void 0 : _a.push(event, data);
  }
};
__name(HostChannel, "HostChannel");

// src/services/sync/Mesh.ts
init_process_shim();
var import_obsidian4 = require("obsidian");

// node_modules/lodash-es/lodash.js
init_process_shim();

// node_modules/lodash-es/isSymbol.js
init_process_shim();

// node_modules/lodash-es/_baseGetTag.js
init_process_shim();

// node_modules/lodash-es/_Symbol.js
init_process_shim();

// node_modules/lodash-es/_root.js
init_process_shim();

// node_modules/lodash-es/_freeGlobal.js
init_process_shim();
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
init_process_shim();
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
__name(getRawTag, "getRawTag");
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
init_process_shim();
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
__name(objectToString, "objectToString");
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
__name(baseGetTag, "baseGetTag");
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
init_process_shim();
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
__name(isObjectLike, "isObjectLike");
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
__name(isSymbol, "isSymbol");
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_baseToString.js
init_process_shim();

// node_modules/lodash-es/_arrayMap.js
init_process_shim();
function arrayMap(array, iteratee) {
  var index = -1, length3 = array == null ? 0 : array.length, result = Array(length3);
  while (++index < length3) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
__name(arrayMap, "arrayMap");
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isArray.js
init_process_shim();
var isArray2 = Array.isArray;
var isArray_default = isArray2;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
__name(baseToString, "baseToString");
var baseToString_default = baseToString;

// node_modules/lodash-es/toNumber.js
init_process_shim();

// node_modules/lodash-es/_baseTrim.js
init_process_shim();

// node_modules/lodash-es/_trimmedEndIndex.js
init_process_shim();
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
__name(trimmedEndIndex, "trimmedEndIndex");
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
__name(baseTrim, "baseTrim");
var baseTrim_default = baseTrim;

// node_modules/lodash-es/isObject.js
init_process_shim();
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
__name(isObject, "isObject");
var isObject_default = isObject;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
__name(toNumber, "toNumber");
var toNumber_default = toNumber;

// node_modules/lodash-es/identity.js
init_process_shim();
function identity(value) {
  return value;
}
__name(identity, "identity");
var identity_default = identity;

// node_modules/lodash-es/_WeakMap.js
init_process_shim();

// node_modules/lodash-es/_getNative.js
init_process_shim();

// node_modules/lodash-es/_baseIsNative.js
init_process_shim();

// node_modules/lodash-es/isFunction.js
init_process_shim();
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
__name(isFunction, "isFunction");
var isFunction_default = isFunction;

// node_modules/lodash-es/_isMasked.js
init_process_shim();

// node_modules/lodash-es/_coreJsData.js
init_process_shim();
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
__name(isMasked, "isMasked");
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
init_process_shim();
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
__name(toSource, "toSource");
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
__name(baseIsNative, "baseIsNative");
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
init_process_shim();
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
__name(getValue, "getValue");
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
__name(getNative, "getNative");
var getNative_default = getNative;

// node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;

// node_modules/lodash-es/noop.js
init_process_shim();
function noop() {
}
__name(noop, "noop");
var noop_default = noop;

// node_modules/lodash-es/_defineProperty.js
init_process_shim();
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_arrayIncludes.js
init_process_shim();

// node_modules/lodash-es/_baseIndexOf.js
init_process_shim();

// node_modules/lodash-es/_baseFindIndex.js
init_process_shim();
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length3 = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length3) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
__name(baseFindIndex, "baseFindIndex");
var baseFindIndex_default = baseFindIndex;

// node_modules/lodash-es/_baseIsNaN.js
init_process_shim();
function baseIsNaN(value) {
  return value !== value;
}
__name(baseIsNaN, "baseIsNaN");
var baseIsNaN_default = baseIsNaN;

// node_modules/lodash-es/_strictIndexOf.js
init_process_shim();
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length3 = array.length;
  while (++index < length3) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
__name(strictIndexOf, "strictIndexOf");
var strictIndexOf_default = strictIndexOf;

// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
__name(baseIndexOf, "baseIndexOf");
var baseIndexOf_default = baseIndexOf;

// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length3 = array == null ? 0 : array.length;
  return !!length3 && baseIndexOf_default(array, value, 0) > -1;
}
__name(arrayIncludes, "arrayIncludes");
var arrayIncludes_default = arrayIncludes;

// node_modules/lodash-es/_isIndex.js
init_process_shim();
var MAX_SAFE_INTEGER2 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length3) {
  var type = typeof value;
  length3 = length3 == null ? MAX_SAFE_INTEGER2 : length3;
  return !!length3 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
}
__name(isIndex, "isIndex");
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseAssignValue.js
init_process_shim();
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
__name(baseAssignValue, "baseAssignValue");
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
init_process_shim();
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
__name(eq, "eq");
var eq_default = eq;

// node_modules/lodash-es/isArrayLike.js
init_process_shim();

// node_modules/lodash-es/isLength.js
init_process_shim();
var MAX_SAFE_INTEGER3 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER3;
}
__name(isLength, "isLength");
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
__name(isArrayLike, "isArrayLike");
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/_isPrototype.js
init_process_shim();
var objectProto4 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
  return value === proto;
}
__name(isPrototype, "isPrototype");
var isPrototype_default = isPrototype;

// node_modules/lodash-es/keys.js
init_process_shim();

// node_modules/lodash-es/_arrayLikeKeys.js
init_process_shim();

// node_modules/lodash-es/_baseTimes.js
init_process_shim();
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
__name(baseTimes, "baseTimes");
var baseTimes_default = baseTimes;

// node_modules/lodash-es/isArguments.js
init_process_shim();

// node_modules/lodash-es/_baseIsArguments.js
init_process_shim();
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
__name(baseIsArguments, "baseIsArguments");
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto5 = Object.prototype;
var hasOwnProperty3 = objectProto5.hasOwnProperty;
var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/isBuffer.js
init_process_shim();

// node_modules/lodash-es/stubFalse.js
init_process_shim();
function stubFalse() {
  return false;
}
__name(stubFalse, "stubFalse");
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/isTypedArray.js
init_process_shim();

// node_modules/lodash-es/_baseIsTypedArray.js
init_process_shim();
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
__name(baseIsTypedArray, "baseIsTypedArray");
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
init_process_shim();
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
__name(baseUnary, "baseUnary");
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
init_process_shim();
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length3 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length3)))) {
      result.push(key);
    }
  }
  return result;
}
__name(arrayLikeKeys, "arrayLikeKeys");
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_baseKeys.js
init_process_shim();

// node_modules/lodash-es/_nativeKeys.js
init_process_shim();

// node_modules/lodash-es/_overArg.js
init_process_shim();
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
__name(overArg, "overArg");
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
__name(baseKeys, "baseKeys");
var baseKeys_default = baseKeys;

// node_modules/lodash-es/keys.js
function keys2(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
__name(keys2, "keys");
var keys_default = keys2;

// node_modules/lodash-es/get.js
init_process_shim();

// node_modules/lodash-es/_baseGet.js
init_process_shim();

// node_modules/lodash-es/_castPath.js
init_process_shim();

// node_modules/lodash-es/_isKey.js
init_process_shim();
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
__name(isKey, "isKey");
var isKey_default = isKey;

// node_modules/lodash-es/_stringToPath.js
init_process_shim();

// node_modules/lodash-es/_memoizeCapped.js
init_process_shim();

// node_modules/lodash-es/memoize.js
init_process_shim();

// node_modules/lodash-es/_MapCache.js
init_process_shim();

// node_modules/lodash-es/_mapCacheClear.js
init_process_shim();

// node_modules/lodash-es/_Hash.js
init_process_shim();

// node_modules/lodash-es/_hashClear.js
init_process_shim();

// node_modules/lodash-es/_nativeCreate.js
init_process_shim();
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
__name(hashClear, "hashClear");
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
init_process_shim();
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
__name(hashDelete, "hashDelete");
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
init_process_shim();
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty6.call(data, key) ? data[key] : void 0;
}
__name(hashGet, "hashGet");
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
init_process_shim();
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty7.call(data, key);
}
__name(hashHas, "hashHas");
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
init_process_shim();
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
__name(hashSet, "hashSet");
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length3 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length3) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
__name(Hash, "Hash");
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_ListCache.js
init_process_shim();

// node_modules/lodash-es/_listCacheClear.js
init_process_shim();
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
__name(listCacheClear, "listCacheClear");
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_listCacheDelete.js
init_process_shim();

// node_modules/lodash-es/_assocIndexOf.js
init_process_shim();
function assocIndexOf(array, key) {
  var length3 = array.length;
  while (length3--) {
    if (eq_default(array[length3][0], key)) {
      return length3;
    }
  }
  return -1;
}
__name(assocIndexOf, "assocIndexOf");
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
__name(listCacheDelete, "listCacheDelete");
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
init_process_shim();
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
__name(listCacheGet, "listCacheGet");
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
init_process_shim();
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
__name(listCacheHas, "listCacheHas");
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
init_process_shim();
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
__name(listCacheSet, "listCacheSet");
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length3 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length3) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
__name(ListCache, "ListCache");
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
init_process_shim();
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
__name(mapCacheClear, "mapCacheClear");
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_mapCacheDelete.js
init_process_shim();

// node_modules/lodash-es/_getMapData.js
init_process_shim();

// node_modules/lodash-es/_isKeyable.js
init_process_shim();
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
__name(isKeyable, "isKeyable");
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
__name(getMapData, "getMapData");
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
__name(mapCacheDelete, "mapCacheDelete");
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
init_process_shim();
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
__name(mapCacheGet, "mapCacheGet");
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
init_process_shim();
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
__name(mapCacheHas, "mapCacheHas");
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
init_process_shim();
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
__name(mapCacheSet, "mapCacheSet");
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length3 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length3) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
__name(MapCache, "MapCache");
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = /* @__PURE__ */ __name(function() {
    var args2 = arguments, key = resolver ? resolver.apply(this, args2) : args2[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args2);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  }, "memoized");
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
__name(memoize, "memoize");
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
__name(memoizeCapped, "memoizeCapped");
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/toString.js
init_process_shim();
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
__name(toString, "toString");
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
__name(castPath, "castPath");
var castPath_default = castPath;

// node_modules/lodash-es/_toKey.js
init_process_shim();
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
__name(toKey, "toKey");
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length3 = path.length;
  while (object != null && index < length3) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length3 ? object : void 0;
}
__name(baseGet, "baseGet");
var baseGet_default = baseGet;

// node_modules/lodash-es/get.js
function get2(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
__name(get2, "get");
var get_default = get2;

// node_modules/lodash-es/_arrayPush.js
init_process_shim();
function arrayPush(array, values) {
  var index = -1, length3 = values.length, offset = array.length;
  while (++index < length3) {
    array[offset + index] = values[index];
  }
  return array;
}
__name(arrayPush, "arrayPush");
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_Stack.js
init_process_shim();

// node_modules/lodash-es/_stackClear.js
init_process_shim();
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
__name(stackClear, "stackClear");
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
init_process_shim();
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
__name(stackDelete, "stackDelete");
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
init_process_shim();
function stackGet(key) {
  return this.__data__.get(key);
}
__name(stackGet, "stackGet");
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
init_process_shim();
function stackHas(key) {
  return this.__data__.has(key);
}
__name(stackHas, "stackHas");
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
init_process_shim();
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
__name(stackSet, "stackSet");
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
__name(Stack, "Stack");
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_getSymbols.js
init_process_shim();

// node_modules/lodash-es/_arrayFilter.js
init_process_shim();
function arrayFilter(array, predicate) {
  var index = -1, length3 = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length3) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
__name(arrayFilter, "arrayFilter");
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/stubArray.js
init_process_shim();
function stubArray() {
  return [];
}
__name(stubArray, "stubArray");
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto10 = Object.prototype;
var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_getAllKeys.js
init_process_shim();

// node_modules/lodash-es/_baseGetAllKeys.js
init_process_shim();
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
__name(baseGetAllKeys, "baseGetAllKeys");
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
__name(getAllKeys, "getAllKeys");
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_getTag.js
init_process_shim();

// node_modules/lodash-es/_DataView.js
init_process_shim();
var DataView2 = getNative_default(root_default, "DataView");
var DataView_default = DataView2;

// node_modules/lodash-es/_Promise.js
init_process_shim();
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
init_process_shim();
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = /* @__PURE__ */ __name(function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  }, "getTag");
}
var getTag_default = getTag;

// node_modules/lodash-es/_Uint8Array.js
init_process_shim();
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// node_modules/lodash-es/_baseIteratee.js
init_process_shim();

// node_modules/lodash-es/_baseMatches.js
init_process_shim();

// node_modules/lodash-es/_baseIsMatch.js
init_process_shim();

// node_modules/lodash-es/_baseIsEqual.js
init_process_shim();

// node_modules/lodash-es/_baseIsEqualDeep.js
init_process_shim();

// node_modules/lodash-es/_equalArrays.js
init_process_shim();

// node_modules/lodash-es/_SetCache.js
init_process_shim();

// node_modules/lodash-es/_setCacheAdd.js
init_process_shim();
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
__name(setCacheAdd, "setCacheAdd");
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
init_process_shim();
function setCacheHas(value) {
  return this.__data__.has(value);
}
__name(setCacheHas, "setCacheHas");
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length3 = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length3) {
    this.add(values[index]);
  }
}
__name(SetCache, "SetCache");
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_arraySome.js
init_process_shim();
function arraySome(array, predicate) {
  var index = -1, length3 = array == null ? 0 : array.length;
  while (++index < length3) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
__name(arraySome, "arraySome");
var arraySome_default = arraySome;

// node_modules/lodash-es/_cacheHas.js
init_process_shim();
function cacheHas(cache, key) {
  return cache.has(key);
}
__name(cacheHas, "cacheHas");
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
__name(equalArrays, "equalArrays");
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_equalByTag.js
init_process_shim();

// node_modules/lodash-es/_mapToArray.js
init_process_shim();
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
__name(mapToArray, "mapToArray");
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_setToArray.js
init_process_shim();
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
__name(setToArray, "setToArray");
var setToArray_default = setToArray;

// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag3:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag2:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag2:
    case dateTag2:
    case numberTag2:
      return eq_default(+object, +other);
    case errorTag2:
      return object.name == other.name && object.message == other.message;
    case regexpTag2:
    case stringTag2:
      return object == other + "";
    case mapTag3:
      var convert = mapToArray_default;
    case setTag3:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag2:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
__name(equalByTag, "equalByTag");
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_equalObjects.js
init_process_shim();
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto11 = Object.prototype;
var hasOwnProperty8 = objectProto11.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
__name(equalObjects, "equalObjects");
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag3 = "[object Object]";
var objectProto12 = Object.prototype;
var hasOwnProperty9 = objectProto12.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag3 : objTag;
  othTag = othTag == argsTag3 ? objectTag3 : othTag;
  var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
__name(baseIsEqualDeep, "baseIsEqualDeep");
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
__name(baseIsEqual, "baseIsEqual");
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length3 = index, noCustomizer = !customizer;
  if (object == null) {
    return !length3;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length3) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
__name(baseIsMatch, "baseIsMatch");
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_getMatchData.js
init_process_shim();

// node_modules/lodash-es/_isStrictComparable.js
init_process_shim();
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
__name(isStrictComparable, "isStrictComparable");
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length3 = result.length;
  while (length3--) {
    var key = result[length3], value = object[key];
    result[length3] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
__name(getMatchData, "getMatchData");
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
init_process_shim();
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
__name(matchesStrictComparable, "matchesStrictComparable");
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
__name(baseMatches, "baseMatches");
var baseMatches_default = baseMatches;

// node_modules/lodash-es/_baseMatchesProperty.js
init_process_shim();

// node_modules/lodash-es/hasIn.js
init_process_shim();

// node_modules/lodash-es/_baseHasIn.js
init_process_shim();
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
__name(baseHasIn, "baseHasIn");
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/_hasPath.js
init_process_shim();
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length3 = path.length, result = false;
  while (++index < length3) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length3) {
    return result;
  }
  length3 = object == null ? 0 : object.length;
  return !!length3 && isLength_default(length3) && isIndex_default(key, length3) && (isArray_default(object) || isArguments_default(object));
}
__name(hasPath, "hasPath");
var hasPath_default = hasPath;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
__name(hasIn, "hasIn");
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
__name(baseMatchesProperty, "baseMatchesProperty");
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/property.js
init_process_shim();

// node_modules/lodash-es/_baseProperty.js
init_process_shim();
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
__name(baseProperty, "baseProperty");
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_basePropertyDeep.js
init_process_shim();
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
__name(basePropertyDeep, "basePropertyDeep");
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
__name(property, "property");
var property_default = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
__name(baseIteratee, "baseIteratee");
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/_createAggregator.js
init_process_shim();

// node_modules/lodash-es/_arrayAggregator.js
init_process_shim();
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1, length3 = array == null ? 0 : array.length;
  while (++index < length3) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
__name(arrayAggregator, "arrayAggregator");
var arrayAggregator_default = arrayAggregator;

// node_modules/lodash-es/_baseAggregator.js
init_process_shim();

// node_modules/lodash-es/_baseEach.js
init_process_shim();

// node_modules/lodash-es/_baseForOwn.js
init_process_shim();

// node_modules/lodash-es/_baseFor.js
init_process_shim();

// node_modules/lodash-es/_createBaseFor.js
init_process_shim();
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length3 = props.length;
    while (length3--) {
      var key = props[fromRight ? length3 : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
__name(createBaseFor, "createBaseFor");
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee) {
  return object && baseFor_default(object, iteratee, keys_default);
}
__name(baseForOwn, "baseForOwn");
var baseForOwn_default = baseForOwn;

// node_modules/lodash-es/_createBaseEach.js
init_process_shim();
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length3 = collection.length, index = fromRight ? length3 : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length3) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
__name(createBaseEach, "createBaseEach");
var createBaseEach_default = createBaseEach;

// node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// node_modules/lodash-es/_baseAggregator.js
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach_default(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
__name(baseAggregator, "baseAggregator");
var baseAggregator_default = baseAggregator;

// node_modules/lodash-es/_createAggregator.js
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee_default(iteratee, 2), accumulator);
  };
}
__name(createAggregator, "createAggregator");
var createAggregator_default = createAggregator;

// node_modules/lodash-es/debounce.js
init_process_shim();

// node_modules/lodash-es/now.js
init_process_shim();
var now = /* @__PURE__ */ __name(function() {
  return root_default.Date.now();
}, "now");
var now_default = now;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT2 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args2 = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args2);
    return result;
  }
  __name(invokeFunc, "invokeFunc");
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  __name(leadingEdge, "leadingEdge");
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  __name(remainingWait, "remainingWait");
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  __name(shouldInvoke, "shouldInvoke");
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  __name(timerExpired, "timerExpired");
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  __name(trailingEdge, "trailingEdge");
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  __name(cancel, "cancel");
  function flush2() {
    return timerId === void 0 ? result : trailingEdge(now_default());
  }
  __name(flush2, "flush");
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  __name(debounced, "debounced");
  debounced.cancel = cancel;
  debounced.flush = flush2;
  return debounced;
}
__name(debounce, "debounce");
var debounce_default = debounce;

// node_modules/lodash-es/_arrayIncludesWith.js
init_process_shim();
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length3 = array == null ? 0 : array.length;
  while (++index < length3) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
__name(arrayIncludesWith, "arrayIncludesWith");
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/lodash-es/groupBy.js
init_process_shim();
var objectProto13 = Object.prototype;
var hasOwnProperty10 = objectProto13.hasOwnProperty;
var groupBy = createAggregator_default(function(result, value, key) {
  if (hasOwnProperty10.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue_default(result, key, [value]);
  }
});
var groupBy_default = groupBy;

// node_modules/lodash-es/keyBy.js
init_process_shim();
var keyBy = createAggregator_default(function(result, value, key) {
  baseAssignValue_default(result, key, value);
});
var keyBy_default = keyBy;

// node_modules/lodash-es/throttle.js
init_process_shim();
var FUNC_ERROR_TEXT3 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT3);
  }
  if (isObject_default(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce_default(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
__name(throttle, "throttle");
var throttle_default = throttle;

// node_modules/lodash-es/_baseUniq.js
init_process_shim();

// node_modules/lodash-es/_createSet.js
init_process_shim();
var INFINITY3 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY3) ? noop_default : function(values) {
  return new Set_default(values);
};
var createSet_default = createSet;

// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE2 = 200;
function baseUniq(array, iteratee, comparator) {
  var index = -1, includes = arrayIncludes_default, length3 = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith_default;
  } else if (length3 >= LARGE_ARRAY_SIZE2) {
    var set = iteratee ? null : createSet_default(array);
    if (set) {
      return setToArray_default(set);
    }
    isCommon = false;
    includes = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length3) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
__name(baseUniq, "baseUniq");
var baseUniq_default = baseUniq;

// node_modules/lodash-es/uniqBy.js
init_process_shim();
function uniqBy(array, iteratee) {
  return array && array.length ? baseUniq_default(array, baseIteratee_default(iteratee, 2)) : [];
}
__name(uniqBy, "uniqBy");
var uniqBy_default = uniqBy;

// src/services/sync/Mesh.ts
var import_simple_peer = __toESM(require_simple_peer());
var PING_INTERVAL = 15e3;
var FULL_SYNC_INTERVAL = 3e4;
var Node = class {
  constructor(clientID, ydoc, { initiator }, { onAwareness, onUpdate }) {
    this.clientID = clientID;
    this.ydoc = ydoc;
    this.stats = {
      ping: null,
      sent: 0,
      received: 0
    };
    this.connected = false;
    this.pingTimeoutRef = null;
    this.fullSyncTimeoutRef = null;
    this.handleConnect = /* @__PURE__ */ __name(() => {
      this.connected = true;
      this.ping();
      if (this.initiator)
        this.sendStateVector();
    }, "handleConnect");
    this.handleData = /* @__PURE__ */ __name((raw) => {
      var _a, _b, _c, _d;
      try {
        const message = JSON.parse(raw);
        this.stats.received++;
        if (message.type === "ping" && typeof message.data.ts === "number")
          return this.handlePing({ ts: message.data.ts });
        if (message.type === "pong" && typeof message.data.ts === "number")
          return this.handlePong({ ts: message.data.ts });
        if (message.type === "update" && typeof ((_a = message.data) == null ? void 0 : _a.update) === "string")
          return this.onUpdate(message.data.update);
        if (message.type === "state_vector" && typeof ((_b = message.data) == null ? void 0 : _b.sv) === "string")
          return this.handleStateVector({ sv: message.data.sv });
        if (message.type === "diff" && typeof ((_c = message.data) == null ? void 0 : _c.diff) === "string")
          return this.onUpdate(message.data.diff, false);
        if (message.type === "awareness" && typeof ((_d = message.data) == null ? void 0 : _d.update) === "string")
          return this.onAwareness(message.data.update);
      } catch (e) {
        console.error("failed to parse message from peer", e);
      }
    }, "handleData");
    this.handlePing = /* @__PURE__ */ __name(({ ts }) => {
      this.pong({ ts });
    }, "handlePing");
    this.handlePong = /* @__PURE__ */ __name(({ ts }) => {
      this.stats.ping = Date.now() - ts;
      this.pingTimeoutRef = setTimeout(() => this.ping(), PING_INTERVAL);
    }, "handlePong");
    this.handleStateVector = /* @__PURE__ */ __name(({ sv }) => {
      const remoteStateVector = new Uint8Array((0, import_obsidian4.base64ToArrayBuffer)(sv));
      const update2 = encodeStateAsUpdate(this.ydoc, remoteStateVector);
      const diff = (0, import_obsidian4.arrayBufferToBase64)(Update.encode(update2));
      this.send("diff", { diff });
      this.fullSyncTimeoutRef = setTimeout(
        () => {
          this.sendStateVector();
        },
        this.initiator ? FULL_SYNC_INTERVAL : 0
      );
    }, "handleStateVector");
    this.initiator = initiator;
    this.onUpdate = onUpdate;
    this.onAwareness = onAwareness;
    this.peer = new import_simple_peer.default({ initiator });
    this.peer.on("connect", this.handleConnect);
    this.peer.on("data", this.handleData);
  }
  disconnect() {
    this.connected = false;
    if (this.pingTimeoutRef) {
      clearTimeout(this.pingTimeoutRef);
      this.pingTimeoutRef = null;
    }
    if (this.fullSyncTimeoutRef) {
      clearTimeout(this.fullSyncTimeoutRef);
      this.fullSyncTimeoutRef = null;
    }
    this.peer.destroy();
  }
  signal(data) {
    this.peer.signal(data);
  }
  send(type, data) {
    const payload = JSON.stringify({ type, data });
    const ret = this.peer.write(payload);
    this.stats.sent++;
    return ret;
  }
  ping() {
    this.send("ping", { ts: Date.now() });
  }
  pong(data) {
    this.send("pong", data);
  }
  sendStateVector() {
    const sv = (0, import_obsidian4.arrayBufferToBase64)(encodeStateVector(this.ydoc).buffer);
    this.send("state_vector", { sv });
  }
};
__name(Node, "Node");
var Mesh = class {
  constructor(documentId, { onAwareness, onUpdate, onHostChange }) {
    this.documentId = documentId;
    this.isHost = true;
    this.nodes = /* @__PURE__ */ new Map();
    this.handleJoin = /* @__PURE__ */ __name(() => {
      if (!this.channel)
        return;
      this.channel.on("signal", this.handleSignal);
      this.channel.on("announce", this.handleAnnounce);
      this.channel.on("reconnect", this.handleReconnect);
      this.channel.on("disconnect", this.handleDisconnect);
      this.announce();
    }, "handleJoin");
    this.handleRejected = /* @__PURE__ */ __name(() => {
      this.disconnect();
    }, "handleRejected");
    this.handleAnnounce = /* @__PURE__ */ __name(({ client_id: clientID }) => {
      if (!this.channel || this.nodes.has(clientID))
        return;
      const initiator = this.ydoc.clientID < clientID;
      const node = new Node(
        clientID,
        this.ydoc,
        { initiator },
        {
          onAwareness: this.handlePeerAwareness,
          onUpdate: this.handlePeerUpdate
        }
      );
      this.nodes.set(clientID, node);
      node.peer.on("signal", (signal) => this.signal(clientID, signal));
      const destroy = /* @__PURE__ */ __name(() => {
        node.disconnect();
        this.nodes.delete(clientID);
        this.calculateHost();
      }, "destroy");
      node.peer.on("connect", this.calculateHost);
      node.peer.on("close", destroy);
      node.peer.on("error", destroy);
      this.announce();
    }, "handleAnnounce");
    this.handleSignal = /* @__PURE__ */ __name(({
      from_client_id: clientID,
      signal
    }) => {
      const node = this.nodes.get(clientID);
      if (!node)
        return;
      node.signal(signal);
    }, "handleSignal");
    this.handleReconnect = /* @__PURE__ */ __name(() => {
      const ydoc = this.ydoc;
      const socket = this.socket;
      this.disconnect();
      setTimeout(() => {
        if (ydoc && socket)
          this.connect(ydoc, socket);
      }, Math.floor(Math.random() * 5e3));
    }, "handleReconnect");
    this.handleDisconnect = /* @__PURE__ */ __name(() => {
      this.disconnect();
    }, "handleDisconnect");
    this.calculateHost = debounce_default(() => {
      const host = Array.from(this.nodes.values()).filter((n) => n.connected).reduce((h, n) => Math.min(h, n.clientID), this.ydoc.clientID);
      const isHost = this.ydoc.clientID === host;
      if (this.isHost !== isHost) {
        this.onHostChange(isHost);
      }
      this.isHost = isHost;
    }, 1e3);
    this.handlePeerUpdate = /* @__PURE__ */ __name((data, forward) => {
      const decoded = Update.decode(data);
      this.onUpdate(decoded, forward);
    }, "handlePeerUpdate");
    this.handlePeerAwareness = /* @__PURE__ */ __name((data) => {
      const decoded = new Uint8Array((0, import_obsidian4.base64ToArrayBuffer)(data));
      this.onAwareness(decoded, "mesh");
    }, "handlePeerAwareness");
    this.onUpdate = onUpdate;
    this.onHostChange = onHostChange;
    this.onAwareness = onAwareness;
  }
  connect(ydoc, socket) {
    this.disconnect();
    this.socket = socket;
    this.ydoc = ydoc;
    this.channel = socket.channel(`signaling:${this.documentId}`);
    this.channel.join().receive("ok", this.handleJoin).receive("error", this.handleRejected);
  }
  disconnect() {
    for (const node of this.nodes.values()) {
      node.disconnect();
    }
    this.nodes.clear();
    if (this.channel)
      this.channel.leave();
    this.channel = null;
  }
  stats() {
    return Array.from(this.nodes.entries()).map(([clientID, node]) => ({
      clientID,
      ...node.stats
    }));
  }
  signal(to, signal) {
    if (!this.channel)
      return null;
    this.channel.push("signal", {
      from_client_id: this.ydoc.clientID,
      to_client_id: to,
      signal
    });
  }
  announce() {
    if (!this.channel)
      return null;
    this.channel.push("announce", { client_id: this.ydoc.clientID });
  }
  broadcast(type, data) {
    for (const node of this.nodes.values()) {
      node.send(type, data);
    }
  }
};
__name(Mesh, "Mesh");

// src/services/sync/UpdateBuffer.ts
init_process_shim();
var UpdateBuffer = class {
  constructor(callback, wait) {
    this.callback = callback;
    this.merged = null;
    this.dispatch = throttle_default(
      () => {
        if (!this.merged)
          return;
        const merged = this.merged;
        this.merged = null;
        callback(merged);
      },
      wait,
      { trailing: true, leading: false }
    );
  }
  write(update2) {
    this.merged = this.merged ? mergeUpdates([this.merged, update2]) : update2;
    this.dispatch();
  }
  flush() {
    this.dispatch.flush();
  }
};
__name(UpdateBuffer, "UpdateBuffer");

// src/services/sync/SyncedDocument.ts
var MESH_INTERVAL = 500;
var HOST_INTERVAL = 5e3;
var SyncedDocument = class {
  constructor(plugin, documentId) {
    this.plugin = plugin;
    this.documentId = documentId;
    this.socket = null;
    this.ydoc = null;
    this.meshBuffer = new UpdateBuffer(
      (buffered) => {
        const encoded = Update.encode(buffered);
        this.plugin.logger.debug(
          `sending update to peers ${encoded.byteLength} bytes`
        );
        this.mesh.broadcast("update", {
          update: (0, import_obsidian5.arrayBufferToBase64)(encoded)
        });
      },
      MESH_INTERVAL
    );
    this.hostBuffer = new UpdateBuffer(
      (buffered) => {
        const encoded = Update.encode(buffered);
        this.plugin.logger.debug(
          `sending update to server ${encoded.byteLength} bytes`
        );
        this.hostChannel.send("update", encoded);
      },
      HOST_INTERVAL
    );
    this.handleYDocUpdate = /* @__PURE__ */ __name((update2, origin) => {
      if (origin === null)
        return;
      this.meshBuffer.write(update2);
      if (this.mesh.isHost)
        this.hostBuffer.write(update2);
    }, "handleYDocUpdate");
    this.handleMeshUpdate = /* @__PURE__ */ __name((update2, forward = true) => {
      this.applyUpdate(update2);
      if (this.mesh.isHost && forward)
        this.hostBuffer.write(update2);
    }, "handleMeshUpdate");
    this.handleChannelUpdate = /* @__PURE__ */ __name((update2) => {
      this.applyUpdate(update2);
      this.meshBuffer.write(update2);
      this.mesh.announce();
    }, "handleChannelUpdate");
    this.handleHostChange = /* @__PURE__ */ __name((isHost) => {
      this.plugin.logger.debug(
        `[${this.documentId}] host change: ${isHost ? "HOST" : "NOT HOST"}`
      );
      if (isHost && this.socket && this.ydoc) {
        this.hostChannel.connect(this.ydoc, this.socket);
      } else {
        this.hostChannel.disconnect();
      }
    }, "handleHostChange");
    this.handleAwarenessUpdate = /* @__PURE__ */ __name(({
      added,
      removed,
      updated
    }, origin) => {
      this.plugin.logger.debug(
        `awareness update, origin: ${JSON.stringify(origin)}`
      );
      const changed = [...added, ...removed, ...updated];
      const update2 = encodeAwarenessUpdate(this.awareness, changed);
      if (origin !== "mesh")
        this.mesh.broadcast("awareness", {
          update: (0, import_obsidian5.arrayBufferToBase64)(update2.buffer)
        });
      if (this.mesh.isHost && origin !== "host")
        this.hostChannel.send("awareness", update2.buffer);
    }, "handleAwarenessUpdate");
    this.updateAwareness = /* @__PURE__ */ __name((update2, origin = null) => {
      applyAwarenessUpdate(this.awareness, update2, origin);
    }, "updateAwareness");
    this.hostChannel = new HostChannel(this.plugin, this.documentId, {
      onUpdate: this.handleChannelUpdate,
      onAwareness: this.updateAwareness
    });
    this.mesh = new Mesh(this.documentId, {
      onUpdate: this.handleMeshUpdate,
      onHostChange: this.handleHostChange,
      onAwareness: this.updateAwareness
    });
    this.persistedYDoc = new PersistedYDoc(
      this.plugin.app.appId,
      this.documentId
    );
    this.persistedYDoc.onReady(() => {
      this.plugin.sync.onSocketReady(this.connect.bind(this));
    });
    this.awareness = new Awareness(this.persistedYDoc.getDoc());
    this.awareness.on("update", this.handleAwarenessUpdate);
    this.awareness.setLocalState({
      hue: this.awareness.clientID % 256,
      name: "Anonymous"
    });
  }
  connect(socket) {
    this.disconnect();
    this.socket = socket;
    this.ydoc = this.persistedYDoc.getDoc();
    this.mesh.connect(this.ydoc, socket);
    this.hostChannel.connect(this.ydoc, socket);
    this.ydoc.on("update", this.handleYDocUpdate);
  }
  disconnect() {
    if (this.ydoc)
      this.ydoc.off("update", this.handleYDocUpdate);
    this.hostBuffer.flush();
    this.meshBuffer.flush();
    this.mesh.disconnect();
    this.hostChannel.disconnect();
  }
  destroy() {
    this.disconnect();
    this.persistedYDoc.destroy();
  }
  getYText() {
    return this.persistedYDoc.getText();
  }
  setDisplayName(displayName) {
    this.awareness.setLocalStateField("name", displayName);
  }
  getAwareness() {
    return this.awareness;
  }
  applyUpdate(update2) {
    if (!this.ydoc)
      return;
    applyUpdate(this.ydoc, update2);
  }
};
__name(SyncedDocument, "SyncedDocument");

// src/services/sync/EditorPresences.ts
init_process_shim();
var import_obsidian6 = require("obsidian");
var PresenceChannel = class {
  constructor(parent, documentId, socket) {
    this.parent = parent;
    this.documentId = documentId;
    this.presence = null;
    this.channel = null;
    this._meta = null;
    if (socket)
      this.connect(socket);
  }
  connect(socket) {
    if (this.channel)
      return;
    this.channel = socket.channel(`presence:${this.documentId}`);
    this.presence = new Presence(this.channel);
    this.presence.onSync(() => {
      if (!this.presence)
        return;
      this.parent.trigger(
        `presence:${this.documentId}`,
        this.documentId,
        this.presence
      );
    });
    this.channel.join();
    this.send();
  }
  disconnect() {
    if (this.channel)
      this.channel.leave();
    this.channel = null;
    this.presence = null;
  }
  update(meta) {
    this._meta = meta;
    this.send();
  }
  send() {
    if (!this._meta || !this.channel)
      return;
    this.channel.push("update-presence", this._meta);
  }
};
__name(PresenceChannel, "PresenceChannel");
var EditorPresences = class extends import_obsidian6.Events {
  constructor(socket) {
    super();
    this.socket = null;
    this.channels = /* @__PURE__ */ new Map();
    if (socket)
      this.connect(socket);
  }
  update(documentId, meta) {
    this.getChannel(documentId).update(meta);
  }
  getChannel(documentId) {
    if (this.channels.has(documentId))
      return this.channels.get(documentId);
    return this.createChannel(documentId);
  }
  createChannel(documentId) {
    const channel = this.socket ? new PresenceChannel(this, documentId, this.socket) : new PresenceChannel(this, documentId);
    this.channels.set(documentId, channel);
    return channel;
  }
  connect(socket) {
    this.socket = socket;
    this.channels.forEach((c) => c.connect(socket));
  }
  leave(documentId) {
    if (!this.channels.has(documentId))
      return;
    this.getChannel(documentId).disconnect();
    this.channels.delete(documentId);
  }
  disconnect() {
    this.channels.forEach((c) => c.disconnect());
    this.channels.clear();
    this.socket = null;
  }
  list(documentId, cb) {
    var _a, _b;
    return (_b = (_a = this.getChannel(documentId).presence) == null ? void 0 : _a.list(
      (userId, { metas }) => {
        return metas.map((meta) => cb(userId, meta));
      }
    ).flat()) != null ? _b : [];
  }
};
__name(EditorPresences, "EditorPresences");

// src/services/sync/Notifications.ts
init_process_shim();

// src/services/events.ts
init_process_shim();

// src/services/sync/Notifications.ts
function isInvitationNotification(notification) {
  return notification.type === "invitations";
}
__name(isInvitationNotification, "isInvitationNotification");
function isDocumentNotification(notification) {
  return notification.type === "documents";
}
__name(isDocumentNotification, "isDocumentNotification");
function isPermissionNotification(notification) {
  return notification.type === "permissions";
}
__name(isPermissionNotification, "isPermissionNotification");
var Notifications = class {
  constructor(plugin, socket) {
    this.plugin = plugin;
    this.socket = socket;
    this.userID = null;
    this.u_user = this.plugin.state.user.subscribe((user) => {
      var _a;
      if (!this.socket || !user)
        return;
      this.userID = (_a = user == null ? void 0 : user.id) != null ? _a : null;
      if (this.socket && this.userID) {
        this.connect(this.socket);
      }
    });
  }
  destroy() {
    this.u_user();
  }
  connect(socket) {
    this.disconnect();
    this.socket = socket;
    if (!this.socket || !this.userID)
      return;
    this.channel = this.socket.channel(`notifications:${this.userID}`);
    this.channel.join().receive("ok", (reply) => {
      this.plugin.logger.debug(`joined notifications:${this.userID}`);
    });
    this.channel.on("notification", this.onNotification.bind(this));
  }
  disconnect() {
    if (this.channel)
      this.channel.leave();
    this.channel = null;
  }
  async onNotification(notification) {
    if (isInvitationNotification(notification)) {
      this.plugin.logger.debug("saw invitation notification", notification);
      this.plugin.sync.trigger(
        "invitation-notification" /* InvitationNotification */,
        notification
      );
    } else if (isDocumentNotification(notification)) {
      this.plugin.logger.debug("saw document notification", notification);
      this.plugin.sync.trigger(
        "document-notification" /* DocumentNotification */,
        notification
      );
    } else if (isPermissionNotification(notification)) {
      this.plugin.logger.debug("saw permission notification", notification);
      this.plugin.sync.trigger(
        "permission-notification" /* PermissionNotification */,
        notification
      );
    } else {
      this.plugin.logger.error(
        `saw notification with unknown type "${notification.type}"`,
        notification
      );
    }
  }
};
__name(Notifications, "Notifications");

// src/services/sync/SyncService.ts
var SHUTDOWN_DELAY = 5e3;
var SyncService = class extends Service {
  constructor() {
    super(...arguments);
    this.handles = /* @__PURE__ */ new Set();
    this.shutdowns = /* @__PURE__ */ new Map();
  }
  async onload() {
    this.presences = new EditorPresences();
    this.notifier = new ReadyNotifier();
    this.documents = /* @__PURE__ */ new Map();
    this.notifications = new Notifications(this.plugin);
    this.socket = null;
    this.handleOnline = this.handleOnline.bind(this);
    this.handleOffline = this.handleOffline.bind(this);
    addEventListener("online", this.handleOnline);
    addEventListener("offline", this.handleOffline);
    this.u_auth = this.plugin.state.auth.subscribe(({ token }) => {
      if (token) {
        this.connect();
      } else {
        this.disconnect();
      }
    });
  }
  async onunload() {
    this.u_auth();
    removeEventListener("online", this.handleOnline);
    removeEventListener("offline", this.handleOffline);
    this.destroy();
  }
  async connect() {
    const token = this.plugin.auth.getToken();
    if (!token)
      return;
    this.disconnect();
    this.socket = new Socket(`${BASE_WS_URL}/u`, {
      params: {
        token,
        client: this.plugin.manifest.id,
        client_version: this.plugin.manifest.version
      }
    });
    this.socket.onOpen(this.handleSocketOpen.bind(this));
    this.socket.onClose(this.handleSocketClose.bind(this));
    this.socket.onError(this.handleSocketError.bind(this));
    this.socket.connect();
    this.presences.connect(this.socket);
    this.notifications.connect(this.socket);
    this.notifier.ready(this.socket);
  }
  disconnect() {
    this.notifier.unready();
    this.presences.disconnect();
    this.documents.forEach((doc2) => doc2.disconnect());
    this.notifications.disconnect();
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
  destroy() {
    this.disconnect();
    this.documents.forEach((d) => d.destroy());
    this.documents.clear();
    this.notifications.destroy();
  }
  handleSocketOpen() {
    var _a;
    this.plugin.logger.debug(`socket ${(_a = this.socket) == null ? void 0 : _a.connectionState()}`);
    const socket = this.socket;
    if (socket === null)
      return;
    this.onStatusChange({ connected: true });
    this.documents.forEach((d) => {
      d.connect(socket);
    });
  }
  handleSocketClose() {
    var _a;
    this.plugin.logger.debug(`socket ${(_a = this.socket) == null ? void 0 : _a.connectionState()}`);
    this.documents.forEach((d) => {
      d.disconnect();
    });
    this.onStatusChange({ connected: false });
  }
  onStatusChange(status) {
    this.plugin.state.syncStatus.set(status);
  }
  handleSocketError() {
    var _a;
    this.plugin.logger.warn(`socket ${(_a = this.socket) == null ? void 0 : _a.connectionState()}`);
  }
  handleOnline() {
    this.plugin.logger.debug(`online`);
    if (this.notifier.isReady())
      return;
    this.connect();
  }
  handleOffline() {
    this.plugin.logger.debug(`offline`);
    this.disconnect();
  }
  onSocketReady(cb) {
    this.notifier.register(cb);
  }
  getYText(documentId) {
    return this.getDocument(documentId).getYText();
  }
  getYTextHandle(documentId) {
    if (this.handles.has(documentId))
      return null;
    const shutdown = this.shutdowns.get(documentId);
    if (shutdown)
      clearTimeout(shutdown);
    this.plugin.logger.debug(`getYTextHandle - ${documentId}`);
    this.handles.add(documentId);
    return this.getYText(documentId);
  }
  releaseHandle(documentId) {
    this.handles.delete(documentId);
    const shutdown = this.shutdowns.get(documentId);
    if (shutdown)
      clearTimeout(shutdown);
    this.shutdowns.set(
      documentId,
      setTimeout(() => {
        const document2 = this.documents.get(documentId);
        if (document2) {
          document2.disconnect();
          this.documents.delete(documentId);
        }
        this.shutdowns.delete(documentId);
      }, SHUTDOWN_DELAY)
    );
  }
  getDocument(documentId) {
    if (this.documents.has(documentId))
      return this.documents.get(documentId);
    const document2 = new SyncedDocument(this.plugin, documentId);
    this.documents.set(documentId, document2);
    return document2;
  }
};
__name(SyncService, "SyncService");

// src/services/api/index.ts
init_process_shim();

// src/services/api/ApiService.ts
init_process_shim();
var import_obsidian8 = require("obsidian");

// src/services/api/PaginatedCRUDResource.ts
init_process_shim();

// src/services/api/PaginatedResource.ts
init_process_shim();
var DEFAULT_PAGE_PARAMS = {
  after: null,
  before: null,
  limit: 10,
  include_total_count: false
};
var PaginatedResource = class {
  constructor(http, path) {
    this.http = http;
    this.path = path;
  }
  async page(params2) {
    const resp = await this.http.get(this.path, {
      queryParams: { ...DEFAULT_PAGE_PARAMS, ...params2 }
    });
    return resp.json;
  }
  async next({
    meta: { after, limit }
  }) {
    if (after === null) {
      return { page: null, done: true };
    }
    return { done: false, page: await this.page({ after, limit }) };
  }
  async prev({
    meta: { before, limit }
  }) {
    if (before === null) {
      return { page: null, done: true };
    }
    return { done: false, page: await this.page({ before, limit }) };
  }
  async *stream(limit = 10) {
    let page = await this.page({ limit });
    while (page.data.length > 0) {
      for (const item of page.data) {
        yield item;
      }
      const continuation = await this.next(page);
      if (continuation.done) {
        break;
      } else {
        page = continuation.page;
      }
    }
  }
  async list(limit = 10) {
    const items = [];
    for await (const item of this.stream(limit)) {
      items.push(item);
    }
    return items;
  }
};
__name(PaginatedResource, "PaginatedResource");

// src/services/api/PaginatedCRUDResource.ts
var PaginatedCRUDResource = class extends PaginatedResource {
  constructor(http, path) {
    super(http, path);
    this.http = http;
    this.path = path;
  }
  async create(params2) {
    const resp = await this.http.post(this.path, params2);
    return resp.json;
  }
  async read(id) {
    const resp = await this.http.get(`${this.path}/${id}`);
    return resp.json;
  }
  async update(id, params2) {
    const resp = await this.http.put(`${this.path}/${id}`, params2);
    return resp.json;
  }
  async delete(id) {
    await this.http.delete(`${this.path}/${id}`);
  }
};
__name(PaginatedCRUDResource, "PaginatedCRUDResource");

// src/services/api/http.ts
init_process_shim();
var import_obsidian7 = require("obsidian");
var HTTP = class {
  constructor(baseURL, headers) {
    this.baseURL = baseURL;
    this.headers = headers;
  }
  async request(_url, method, params2) {
    var _a;
    let url = this.baseURL + _url;
    if (params2.queryParams) {
      const usp = new URLSearchParams();
      Object.entries(params2.queryParams).forEach(([key, value]) => {
        if (value) {
          usp.set(key, value);
        }
      });
      url = url + "?" + usp.toString();
    }
    const h = { ...this.headers, ...(_a = params2.headers) != null ? _a : {} };
    const p = {
      ...params2,
      url,
      method,
      headers: h
    };
    const result = await (0, import_obsidian7.requestUrl)(p);
    return result;
  }
  async dataRequest(url, data, method, params2) {
    const body = data ? JSON.stringify(data) : void 0;
    return this.request(url, method, { ...params2, body });
  }
  async get(url, params2 = {}) {
    return this.request(url, "GET", params2);
  }
  async post(url, data = null, params2 = {}) {
    return this.dataRequest(url, data, "POST", params2);
  }
  async put(url, data = null, params2 = {}) {
    return this.dataRequest(url, data, "PUT", params2);
  }
  async delete(url, data = null, params2 = {}) {
    return this.dataRequest(url, data, "DELETE", params2);
  }
};
__name(HTTP, "HTTP");

// src/services/api/InvitationResource.ts
init_process_shim();
var InvitationResource = class extends PaginatedCRUDResource {
  constructor(http) {
    super(http, "/invitations");
  }
  async accept(id) {
    const resp = await this.http.post(`${this.path}/${id}/accept`);
    const { data } = await resp.json;
    return data;
  }
};
__name(InvitationResource, "InvitationResource");

// src/services/api/UserBlockResource.ts
init_process_shim();
var UserBlockResource = class {
  constructor(http) {
    this.http = http;
    this.path = "/user/blocks";
  }
  async create(email) {
    const resp = await this.http.post(this.path, {
      email
    });
    return resp.status;
  }
  async delete(email) {
    const resp = await this.http.delete(this.path, {
      email
    });
    return resp.status;
  }
};
__name(UserBlockResource, "UserBlockResource");

// src/services/api/PermissionResource.ts
init_process_shim();
var PermissionResource = class extends PaginatedResource {
  constructor(http, documentID) {
    super(http, `/documents/${documentID}/permissions`);
  }
  async update(userID, level) {
    await this.http.put(this.path, {
      permissions: [
        {
          user_id: userID,
          level
        }
      ]
    });
  }
  async delete(userID) {
    await this.http.delete(this.path, {
      permissions: [
        {
          user_id: userID
        }
      ]
    });
  }
};
__name(PermissionResource, "PermissionResource");

// src/services/api/QuotaResource.ts
init_process_shim();
var QuotaResource = class {
  constructor(http) {
    this.http = http;
  }
  async getDocumentQuotas(documentId) {
    const resp = await this.http.get(`/documents/${documentId}/quotas`);
    const quotas = resp.json.data;
    return keyBy_default(quotas, "quota");
  }
  async getUserQuotas() {
    const resp = await this.http.get("/quotas");
    const quotas = resp.json.data;
    return keyBy_default(quotas, "quota");
  }
};
__name(QuotaResource, "QuotaResource");

// src/services/api/ApiService.ts
var ApiService = class extends Service {
  changes(documentID) {
    if (!this.documents) {
      return null;
    }
    return new PaginatedResource(
      this.http,
      `/documents/${documentID}/changes`
    );
  }
  permissions(documentID) {
    if (!this.documents) {
      return null;
    }
    return new PermissionResource(this.http, documentID);
  }
  async onload() {
    this.u_auth = this.plugin.state.auth.subscribe(
      ({ token }) => this.handleTokenChange(token)
    );
  }
  async onunload() {
    this.u_auth();
  }
  handleTokenChange(token) {
    this.plugin.logger.debug("Token changed, updating http and clients");
    this.setupHTTP(token);
    this.setupClients(token);
    this.getMe();
  }
  setupHTTP(token) {
    const headers = {
      "Content-Type": "application/json",
      "X-ScreenGarden-Client": this.plugin.manifest.id,
      "X-ScreenGarden-Client-Version": this.plugin.manifest.version
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const url = `${BASE_HTTP_URL}/api`;
    this.plugin.logger.debug(`API pointing at ${url}`);
    this.http = new HTTP(url, headers);
    this.get = this.http.get;
    this.put = this.http.put;
    this.post = this.http.post;
    this.delete = this.http.delete;
  }
  setupClients(token) {
    if (token) {
      this.documents = new PaginatedCRUDResource(this.http, "/documents");
      this.invitations = new InvitationResource(this.http);
      this.blocks = new UserBlockResource(this.http);
      this.quotas = new QuotaResource(this.http);
      this.trigger("api-clients-available" /* APIClientsAvailable */);
    } else {
      this.documents = null;
      this.invitations = null;
      this.blocks = null;
      this.quotas = null;
    }
  }
  async getMe() {
    try {
      const resp = await this.http.get("/me");
      const me = await resp.json;
      this.plugin.state.setUser(me != null ? me : null);
    } catch (e) {
      if (e.status === 426) {
        new import_obsidian8.Notice(
          "Please update the screen.garden plugin to continue using it."
        );
        return;
      }
    }
  }
};
__name(ApiService, "ApiService");

// src/services/auth/index.ts
init_process_shim();

// src/services/auth/AuthService.ts
init_process_shim();
var AuthService = class extends Service {
  async setToken(token) {
    this.plugin.logger.debug("saving token");
    this.plugin.state.auth.set({
      token
    });
    if (!token) {
      this.plugin.state.clearLocalState();
    }
  }
  getToken() {
    return this.plugin.state.getToken();
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  login() {
    open(`${BASE_HTTP_URL}/users/log_in?app=obsidian`, "_blank");
  }
  logout() {
    this.setToken(null);
  }
};
__name(AuthService, "AuthService");

// src/services/commands/index.ts
init_process_shim();

// src/services/commands/CommandService.ts
init_process_shim();

// src/services/commands/commands/index.ts
init_process_shim();

// src/services/commands/commands/LoginCommand.ts
init_process_shim();

// src/services/commands/commands/ScreenGardenCommand.ts
init_process_shim();
var ScreenGardenCommand = class {
  constructor(plugin, id, name) {
    this.plugin = plugin;
    this.id = id;
    this.name = name;
  }
  show() {
    return true;
  }
  toCommand() {
    return {
      id: this.id,
      name: this.name,
      checkCallback: (checking) => {
        if (checking) {
          return this.show();
        }
        this.execute();
      }
    };
  }
};
__name(ScreenGardenCommand, "ScreenGardenCommand");

// src/services/commands/commands/LoginCommand.ts
var LoginCommand = class extends ScreenGardenCommand {
  constructor(plugin) {
    super(plugin, "screen-garden-log-in", "Log into screen.garden");
  }
  show() {
    return !this.plugin.auth.isLoggedIn();
  }
  execute() {
    this.plugin.auth.login();
  }
};
__name(LoginCommand, "LoginCommand");

// src/services/commands/commands/LogoutCommand.ts
init_process_shim();
var LogoutCommand = class extends ScreenGardenCommand {
  constructor(plugin) {
    super(plugin, "screen-garden-log-out", "Log out of screen.garden");
  }
  show() {
    return this.plugin.auth.isLoggedIn();
  }
  execute() {
    this.plugin.auth.logout();
  }
};
__name(LogoutCommand, "LogoutCommand");

// src/services/commands/commands/SyncCurrentFileCommand.ts
init_process_shim();
var import_obsidian9 = require("obsidian");
var SyncCurrentFileCommand = class extends ScreenGardenCommand {
  constructor(plugin) {
    super(plugin, "screen-garden-sync-current-file", "Sync current file");
  }
  show() {
    if (!this.plugin.auth.isLoggedIn())
      return false;
    const activeView = this.plugin.app.workspace.getActiveViewOfType(import_obsidian9.MarkdownView);
    return !!activeView && !!activeView.file && !this.plugin.files.isTracked(activeView.file);
  }
  async execute() {
    if (!this.plugin.api.documents) {
      this.plugin.logger.error("attempted to sync current file with no token");
      return;
    }
    const activeView = this.plugin.app.workspace.getActiveViewOfType(import_obsidian9.MarkdownView);
    if (!activeView)
      return;
    const file = activeView.file;
    if (!file)
      return;
    this.plugin.addFileToScreenGarden(file);
  }
};
__name(SyncCurrentFileCommand, "SyncCurrentFileCommand");

// src/services/commands/CommandService.ts
var CommandService = class extends Service {
  async onload() {
    this.plugin.logger.debug("registering commands", () => {
      this.registerCommands();
    });
  }
  registerCommands() {
    const commands = [LoginCommand, LogoutCommand, SyncCurrentFileCommand];
    commands.forEach((Command) => {
      this.plugin.logger.debug(`registering ${Command.name}`);
      this.plugin.addCommand(new Command(this.plugin).toCommand());
    });
  }
};
__name(CommandService, "CommandService");

// src/services/developer/index.ts
init_process_shim();

// src/services/developer/DeveloperService.ts
init_process_shim();

// src/services/editor/index.ts
init_process_shim();

// src/services/editor/EditorService.ts
init_process_shim();
var import_obsidian12 = require("obsidian");

// src/services/editor/screenGardenCollab/index.ts
init_process_shim();

// src/services/editor/screenGardenCollab/screenGardenSync.ts
init_process_shim();
var import_obsidian10 = require("obsidian");
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var ScreenGardenRange = class {
  constructor(yanchor, yhead) {
    this.yanchor = yanchor;
    this.yhead = yhead;
  }
  toJSON() {
    return {
      yanchor: relativePositionToJSON(this.yanchor),
      yhead: relativePositionToJSON(this.yhead)
    };
  }
  fromJSON(json) {
    return new ScreenGardenRange(
      createRelativePositionFromJSON(json.yanchor),
      createRelativePositionFromJSON(json.yhead)
    );
  }
};
__name(ScreenGardenRange, "ScreenGardenRange");
var ScreenGardenSyncConfig = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  getYText(yTextOrDocumentId) {
    if (typeof yTextOrDocumentId === "string")
      return this.plugin.sync.getYText(yTextOrDocumentId);
    return yTextOrDocumentId;
  }
  toYPos(ref, pos, assoc = 0) {
    const ytext = this.getYText(ref);
    return createRelativePositionFromTypeIndex(ytext, pos, assoc);
  }
  fromYPos(ref, rpos) {
    const ytext = this.getYText(ref);
    const pos = createAbsolutePositionFromRelativePosition(
      createRelativePositionFromJSON(rpos),
      ytext.doc
    );
    if (pos == null || pos.type !== ytext) {
      throw new Error(
        "[screen-garden-sync] The position you want to retrieve was created by a different document"
      );
    }
    return { pos: pos.index, assoc: pos.assoc };
  }
  toYRange(ref, range) {
    const ytext = this.getYText(ref);
    const assoc = range.assoc;
    const yanchor = this.toYPos(ytext, range.anchor, assoc);
    const yhead = this.toYPos(ytext, range.head, assoc);
    return new ScreenGardenRange(yanchor, yhead);
  }
  fromYRange(ref, yrange) {
    const ytext = this.getYText(ref);
    const anchor = this.fromYPos(ytext, yrange.yanchor);
    const head = this.fromYPos(ytext, yrange.yhead);
    if (anchor.pos === head.pos) {
      return import_state.EditorSelection.cursor(head.pos, head.assoc);
    }
    return import_state.EditorSelection.range(anchor.pos, head.pos);
  }
};
__name(ScreenGardenSyncConfig, "ScreenGardenSyncConfig");
var screenGardenSyncFacet = import_state.Facet.define({
  combine(inputs) {
    return inputs[inputs.length - 1];
  }
});
var screenGardenSyncAnnotation = import_state.Annotation.define();
var ScreenGardenSyncPluginValue = class {
  constructor(view) {
    this.view = view;
    this.view = view;
    this.conf = view.state.facet(screenGardenSyncFacet);
    this._observer = this._observer.bind(this);
    this.conf.plugin.app.workspace.onLayoutReady(this.connect.bind(this));
  }
  _observer(event, tr) {
    if (tr.origin !== this.conf) {
      const delta = event.delta;
      const changes = [];
      let pos = 0;
      for (const d of delta) {
        if (d.insert != null && typeof d.insert === "string") {
          changes.push({ from: pos, to: pos, insert: d.insert });
        } else if (d.delete != null) {
          changes.push({ from: pos, to: pos + d.delete, insert: "" });
        } else if (d.retain != null) {
          pos += d.retain;
        }
      }
      const txnSpec = {
        annotations: [screenGardenSyncAnnotation.of(this.conf)],
        changes
      };
      this.view.dispatch(txnSpec);
    }
  }
  async connect() {
    var _a, _b, _c;
    this.disconnect();
    this.file = this.getFile();
    if (!this.file)
      return;
    (_a = this.conf.plugin.editor) == null ? void 0 : _a.registerEditor(this.file, this);
    if (!this.conf.plugin.files.isTracked(this.file))
      return;
    this.documentId = (_b = this.conf.plugin.files.getDocumentId(this.file)) != null ? _b : null;
    if (!this.documentId)
      return;
    this.ytext = await ((_c = this.conf.plugin.sync) == null ? void 0 : _c.getYTextHandle(this.documentId));
    if (!this.ytext)
      return;
    this.conf.plugin.logger.debug(
      `editor connected: ${this.file.path} <---> ${this.documentId}`
    );
    this.dispatch([
      {
        from: 0,
        to: this.view.state.doc.toString().length,
        insert: this.ytext.toString()
      }
    ]);
    this.ytext.observe(this._observer);
  }
  dispatch(changes) {
    this.view.dispatch({
      changes,
      annotations: [screenGardenSyncAnnotation.of(this.conf)]
    });
  }
  update(update2) {
    const ytext = this.ytext;
    if (!ytext || !ytext.doc)
      return;
    if (!update2.docChanged)
      return;
    if (update2.transactions.length > 0 && update2.transactions[0].annotation(screenGardenSyncAnnotation) === this.conf)
      return;
    ytext.doc.transact(() => {
      let adj = 0;
      update2.changes.iterChanges((fromA, toA, fromB, toB, insert2) => {
        const insertText2 = insert2.sliceString(0, insert2.length, "\n");
        if (fromA !== toA) {
          ytext.delete(fromA + adj, toA - fromA);
        }
        if (insertText2.length > 0) {
          ytext.insert(fromA + adj, insertText2);
        }
        adj += insertText2.length - (toA - fromA);
      });
    }, this.conf);
  }
  disconnect() {
    var _a;
    if (this.documentId && this.file) {
      this.conf.plugin.logger.debug(
        `editor disconnected: ${this.file.path} <-/-> ${this.documentId}`
      );
    }
    if (this.documentId) {
      this.conf.plugin.sync.releaseHandle(this.documentId);
    }
    if (this.ytext)
      this.ytext.unobserve(this._observer);
    if (this.file)
      (_a = this.conf.plugin.editor) == null ? void 0 : _a.unregisterEditor(this.file, this);
    this.documentId = null;
    this.ytext = null;
    this.file = null;
  }
  destroy() {
    this.disconnect();
  }
  getFile() {
    return this.view.state.field(import_obsidian10.editorInfoField).file;
  }
};
__name(ScreenGardenSyncPluginValue, "ScreenGardenSyncPluginValue");
var screenGardenSync = import_view.ViewPlugin.fromClass(
  ScreenGardenSyncPluginValue
);

// src/services/editor/screenGardenCollab/screenGardenRemoteSelections.ts
init_process_shim();
var import_state2 = require("@codemirror/state");
var import_view2 = require("@codemirror/view");
var import_obsidian11 = require("obsidian");
var screenGardenRemoteSelectionsTheme = import_view2.EditorView.baseTheme({
  ".cm-sgSelection": {},
  ".cm-sgLineSelection": {
    padding: 0,
    margin: "0px 2px 0px 4px"
  },
  ".cm-sgSelectionCaret": {
    position: "relative",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    marginLeft: "-1px",
    marginRight: "-1px",
    boxSizing: "border-box",
    display: "inline"
  },
  ".cm-sgSelectionCaretDot": {
    borderRadius: "50%",
    position: "absolute",
    width: ".4em",
    height: ".4em",
    top: "-.2em",
    left: "-.2em",
    backgroundColor: "inherit",
    transition: "transform .3s ease-in-out",
    boxSizing: "border-box"
  },
  ".cm-sgSelectionCaret:hover > .cm-sgSelectionCaretDot": {
    transformOrigin: "bottom center",
    transform: "scale(0)"
  },
  ".cm-sgSelectionInfo": {
    position: "absolute",
    top: "-1.2rem",
    left: "-1px",
    fontSize: "0.9rem",
    lineHeight: "normal",
    userSelect: "none",
    color: "white",
    padding: "0.1rem 0.2rem",
    borderRadius: "2px",
    zIndex: 101,
    transition: "opacity .3s ease-in-out",
    backgroundColor: "inherit",
    opacity: 0,
    transitionDelay: "0s",
    whiteSpace: "nowrap"
  },
  ".cm-sgSelectionCaret:hover > .cm-sgSelectionInfo": {
    opacity: 1,
    transitionDelay: "0s"
  }
});
var sgRemoteSelectionsAnnotation = import_state2.Annotation.define();
var ScreenGardenRemoteCaretWidget = class extends import_view2.WidgetType {
  constructor(color, name) {
    super();
    this.color = color;
    this.name = name;
  }
  toDOM() {
    return element(
      "span",
      [
        create5("class", "cm-sgSelectionCaret"),
        create5(
          "style",
          `background-color: ${this.color}; border-color: ${this.color}`
        )
      ],
      [
        text("\u2060"),
        element("div", [create5("class", "cm-sgSelectionCaretDot")]),
        text("\u2060"),
        element(
          "div",
          [create5("class", "cm-sgSelectionInfo")],
          [text(this.name)]
        ),
        text("\u2060")
      ]
    );
  }
  eq(widget) {
    return widget.color === this.color;
  }
  compare(widget) {
    return widget.color === this.color;
  }
  updateDOM() {
    return false;
  }
  get estimatedHeight() {
    return -1;
  }
  ignoreEvent() {
    return true;
  }
};
__name(ScreenGardenRemoteCaretWidget, "ScreenGardenRemoteCaretWidget");
var ScreenGardenRemoteSelectionsPluginValue = class {
  constructor(view) {
    this.handleAwarenessChange = /* @__PURE__ */ __name(({
      added,
      removed,
      updated
    }) => {
      if (!this.awareness)
        return;
      const clients = [...added, ...removed, ...updated];
      if (clients.some((c) => {
        var _a;
        return c !== ((_a = this.awareness) == null ? void 0 : _a.clientID);
      })) {
        this.view.dispatch({
          annotations: [sgRemoteSelectionsAnnotation.of([])]
        });
      }
    }, "handleAwarenessChange");
    this.view = view;
    this.conf = view.state.facet(screenGardenSyncFacet);
    this.decorations = import_state2.RangeSet.of([]);
    this.handleAwarenessChange = this.handleAwarenessChange.bind(this);
    this._anchor = null;
    this._head = null;
    this.u_user = this.conf.plugin.state.user.subscribe((user) => {
      var _a, _b;
      if (this.awareness) {
        const name = (_b = (_a = user == null ? void 0 : user.name) != null ? _a : user == null ? void 0 : user.email) != null ? _b : "Anonymous";
        this.awareness.setLocalStateField("name", name);
      }
    });
    const documentId = this.getDocumentId();
    if (documentId)
      this.listen(documentId);
  }
  destroy() {
    this.u_user();
    this.unlisten();
    if (this._documentId)
      this.conf.plugin.sync.presences.leave(this._documentId);
  }
  listen(documentId) {
    if (this.awareness && documentId === this._documentId)
      return;
    this.unlisten();
    this._documentId = documentId;
    this.awareness = this.conf.plugin.sync.getDocument(this._documentId).getAwareness();
    this.awareness.on("change", this.handleAwarenessChange);
  }
  unlisten() {
    if (this.awareness)
      this.awareness.off("change", this.handleAwarenessChange);
    this.awareness = null;
  }
  update(update2) {
    const documentId = this.getDocumentId();
    if (!documentId)
      return;
    this.listen(documentId);
    if (!this.awareness || !this._documentId)
      return;
    const ytext = this.conf.plugin.sync.getYText(documentId);
    if (!ytext)
      return;
    const ydoc = ytext.doc;
    const localAwarenessState = this.awareness.getLocalState();
    if (localAwarenessState) {
      const hasFocus = update2.view.hasFocus && update2.view.dom.ownerDocument.hasFocus();
      const sel = hasFocus ? update2.state.selection.main : null;
      const currentAnchor = localAwarenessState.cursor == null ? null : createRelativePositionFromJSON(localAwarenessState.cursor.anchor);
      const currentHead = localAwarenessState.cursor == null ? null : createRelativePositionFromJSON(localAwarenessState.cursor.head);
      if (sel) {
        const anchor = createRelativePositionFromTypeIndex(ytext, sel.anchor);
        const head = createRelativePositionFromTypeIndex(ytext, sel.head);
        if (localAwarenessState.cursor == null || !compareRelativePositions(currentAnchor, anchor) || !compareRelativePositions(currentHead, head)) {
          this.awareness.setLocalStateField("cursor", {
            anchor,
            head
          });
        }
      } else if (localAwarenessState.cursor != null && hasFocus) {
        this.awareness.setLocalStateField("cursor", null);
      }
    }
    const decorations = [];
    this.awareness.getStates().forEach((state, clientID) => {
      var _a, _b, _c, _d;
      if (!this.awareness || clientID === this.awareness.clientID || !((_a = state.cursor) == null ? void 0 : _a.head) || !((_b = state.cursor) == null ? void 0 : _b.anchor))
        return;
      const cursor = state.cursor;
      const anchor = createAbsolutePositionFromRelativePosition(
        cursor.anchor,
        ydoc
      );
      const head = createAbsolutePositionFromRelativePosition(
        cursor.head,
        ydoc
      );
      if (!anchor || !head || anchor.type !== ytext || head.type !== ytext)
        return;
      const hue = (_c = state.hue) != null ? _c : 32;
      const color = `hsl(${hue}, 50%, 50%)`;
      const colorLight = `hsl(${hue}, 50%, 50%, 40%)`;
      const name = (_d = state.name) != null ? _d : "Anonymous";
      const start = min(anchor.index, head.index);
      const end = max(anchor.index, head.index);
      const startLine = update2.view.state.doc.lineAt(start);
      const endLine = update2.view.state.doc.lineAt(end);
      const selection = import_view2.Decoration.mark({
        attributes: { style: `background-color: ${colorLight}` },
        class: "cm-sgSelection"
      });
      if (startLine.number === endLine.number) {
        decorations.push({
          from: start,
          to: end,
          value: selection
        });
      } else {
        decorations.push({
          from: start,
          to: startLine.from + startLine.length,
          value: selection
        });
        decorations.push({
          from: endLine.from,
          to: end,
          value: selection
        });
        for (let i = startLine.number + 1; i < endLine.number; i++) {
          const linePos = update2.view.state.doc.line(i).from;
          decorations.push({
            from: linePos,
            to: linePos,
            value: import_view2.Decoration.line({
              attributes: {
                style: `background-color: ${colorLight}`,
                class: "cm-sgLineSelection"
              }
            })
          });
        }
      }
      decorations.push({
        from: head.index,
        to: head.index,
        value: import_view2.Decoration.widget({
          side: head.index - anchor.index > 0 ? -1 : 1,
          block: false,
          widget: new ScreenGardenRemoteCaretWidget(color, name)
        })
      });
    });
    this.decorations = import_view2.Decoration.set(decorations, true);
  }
  getFile() {
    return this.view.state.field(import_obsidian11.editorInfoField).file;
  }
  getDocumentId() {
    var _a, _b;
    const file = this.getFile();
    if (!file)
      return null;
    return (_b = (_a = this.conf.plugin.files) == null ? void 0 : _a.getDocumentId(file)) != null ? _b : null;
  }
};
__name(ScreenGardenRemoteSelectionsPluginValue, "ScreenGardenRemoteSelectionsPluginValue");
var screenGardenRemoteSelections = import_view2.ViewPlugin.fromClass(
  ScreenGardenRemoteSelectionsPluginValue,
  { decorations: (v) => v.decorations }
);

// src/services/editor/screenGardenCollab/index.ts
var screenGardenCollab = /* @__PURE__ */ __name((plugin) => {
  const screenGardenSyncConfig = new ScreenGardenSyncConfig(plugin);
  const plugins = [
    screenGardenSyncFacet.of(screenGardenSyncConfig),
    screenGardenSync,
    screenGardenRemoteSelectionsTheme,
    screenGardenRemoteSelections
  ];
  return plugins;
}, "screenGardenCollab");

// src/services/editor/EditorService.ts
var EditorService = class extends Service {
  constructor() {
    super(...arguments);
    this.extensions = null;
    this.editors = {};
  }
  async onload() {
    this.plugin.app.workspace.onLayoutReady(
      this.registerEditorExtension.bind(this)
    );
    this.registerEvent(
      this.plugin.app.vault.on("rename", this.handleRename.bind(this))
    );
    this.registerEvent(
      this.plugin.app.workspace.on(
        "active-leaf-change",
        this.handleActiveLeafChange.bind(this)
      )
    );
  }
  async onLayoutReady() {
    const file = this.plugin.app.workspace.getActiveFile();
    if ((file == null ? void 0 : file.extension) === "md") {
      this.plugin.state.currentMarkdownFile.set(file);
    }
  }
  async onunload() {
    this.editors = {};
    this.extensions = this.extensions || [];
    this.extensions.length = 0;
    this.plugin.app.workspace.updateOptions();
  }
  registerEditorExtension() {
    const extensions = this.extensions || [];
    this.extensions = extensions;
    if (extensions.length > 0)
      return;
    extensions.push(screenGardenCollab(this.plugin));
    this.plugin.registerEditorExtension(extensions);
  }
  registerEditor(file, editor) {
    this.editors[file.path] = this.editors[file.path] || [];
    this.editors[file.path] = Array.from(
      /* @__PURE__ */ new Set([...this.editors[file.path], editor])
    );
  }
  unregisterEditor(file, editor) {
    this.editors[file.path] = this.editors[file.path] || [];
    this.editors[file.path] = this.editors[file.path].filter(
      (e) => e === editor
    );
  }
  handleRename(file, oldPath) {
    if (this.editors.hasOwnProperty(oldPath)) {
      this.editors[file.path] = this.editors[oldPath];
      delete this.editors[oldPath];
      this.reconnectEditorsForFile(file);
    }
  }
  handleActiveLeafChange(leaf) {
    var _a, _b;
    if ((leaf == null ? void 0 : leaf.view) instanceof import_obsidian12.FileView && leaf.view.file.extension === "md") {
      this.plugin.state.currentMarkdownFile.set(leaf.view.file);
    } else if (((_a = leaf == null ? void 0 : leaf.view) == null ? void 0 : _a.emptyTitleEl) && ((_b = leaf == null ? void 0 : leaf.view) == null ? void 0 : _b.emptyStateEl)) {
      this.plugin.state.currentMarkdownFile.set(null);
    }
  }
  reconnectEditorsForFile(file) {
    const editorsForFile = this.editors[file.path] || [];
    for (const editor of editorsForFile) {
      editor.connect();
    }
  }
};
__name(EditorService, "EditorService");

// src/services/files/index.ts
init_process_shim();

// src/services/files/FileService.ts
init_process_shim();
var import_obsidian13 = require("obsidian");
var FileService = class extends Service {
  async onload() {
    this.plugin.registerEvent(
      this.plugin.app.vault.on("rename", this.handleRename.bind(this))
    );
    this.plugin.registerEvent(
      this.plugin.app.vault.on("delete", this.handleDelete.bind(this))
    );
    this.plugin.registerEvent(
      this.plugin.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof import_obsidian13.TFile)) {
          return;
        }
        if (this.isTracked(file)) {
          return;
        }
        menu.addItem((item) => {
          item.setTitle("Add to screen.garden");
          item.setIcon("upload-cloud");
          item.onClick(async () => {
            this.plugin.addFileToScreenGarden(file);
          });
        });
      })
    );
  }
  async onLayoutReady() {
    const actualPaths = new Set(
      this.plugin.app.vault.getMarkdownFiles().map((file) => file.path)
    );
    this.plugin.state.files.update((files) => {
      const trackedPaths = Object.keys(files.pathsToDocumentIds);
      return trackedPaths.filter((path) => !actualPaths.has(path)).reduce(
        (_files, path) => {
          const documentId = _files.pathsToDocumentIds[path];
          if (documentId) {
            _files = this._unlinkByDocumentId(_files, documentId);
          }
          return _files;
        },
        { ...files }
      );
    });
  }
  async onunload() {
  }
  _link(files, documentId, file) {
    this.plugin.logger.debug(`linking ${file.path} to ${documentId}`);
    const _files = { ...files };
    _files.documentIdsToPaths[documentId] = file.path;
    _files.pathsToDocumentIds[file.path] = documentId;
    return _files;
  }
  async link(documentId, file) {
    this.plugin.state.files.update((files) => {
      return this._link(files, documentId, file);
    });
  }
  async unlink(fileOrDocumentId) {
    if (typeof fileOrDocumentId === "string")
      return this.unlinkByDocumentId(fileOrDocumentId);
    return this.unlinkByFile(fileOrDocumentId);
  }
  async unlinkByFile(file) {
    this.plugin.logger.debug("unlinking", file);
    this.plugin.state.files.update((files) => {
      const documentId = files.pathsToDocumentIds[file.path];
      const _files = { ...files };
      delete _files.pathsToDocumentIds[file.path];
      if (documentId)
        delete _files.documentIdsToPaths[documentId];
      return _files;
    });
  }
  _unlinkByDocumentId(files, documentId) {
    this.plugin.logger.debug("unlinking", documentId);
    const path = files.documentIdsToPaths[documentId];
    const _files = { ...files };
    delete _files.documentIdsToPaths[documentId];
    if (path)
      delete _files.pathsToDocumentIds[path];
    return _files;
  }
  async unlinkByDocumentId(documentId) {
    this.plugin.state.files.update((files) => {
      return this._unlinkByDocumentId(files, documentId);
    });
  }
  isTracked(fileOrDocumentId) {
    const files = this.plugin.state.getFiles();
    if (typeof fileOrDocumentId === "string") {
      const documentId = fileOrDocumentId;
      return documentId in files.documentIdsToPaths;
    }
    const { path } = fileOrDocumentId;
    return path in files.pathsToDocumentIds;
  }
  getDocumentId(file) {
    return this.plugin.state.getFiles().pathsToDocumentIds[file.path];
  }
  getPath(documentId) {
    return this.plugin.state.getFiles().documentIdsToPaths[documentId];
  }
  handleRename(file, oldPath) {
    const documentId = this.plugin.state.getFiles().pathsToDocumentIds[oldPath];
    if (!documentId)
      return;
    this.plugin.state.files.update((files) => {
      files = this._unlinkByDocumentId(files, documentId);
      files = this._link(files, documentId, file);
      return files;
    });
  }
  handleDelete(file) {
    const documentId = this.getDocumentId(file);
    if (!documentId)
      return;
    if (file instanceof import_obsidian13.TFile) {
      this.plugin.promptForCloudDeletion(file, documentId);
    }
    this.unlink(file);
  }
  chooseFolder(onChoose) {
    new FolderSuggestModal(this.plugin, onChoose).open();
  }
};
__name(FileService, "FileService");
var FolderSuggestModal = class extends import_obsidian13.FuzzySuggestModal {
  constructor(plugin, onChoose) {
    super(app);
    this.plugin = plugin;
    this.onChoose = onChoose;
  }
  getItems() {
    return this.plugin.app.vault.getAllLoadedFiles().filter((f) => f instanceof import_obsidian13.TFolder);
  }
  getItemText(item) {
    return item.path;
  }
  onChooseItem(item, evt) {
    this.onChoose(item);
  }
};
__name(FolderSuggestModal, "FolderSuggestModal");

// src/services/logging/index.ts
init_process_shim();

// src/services/logging/LoggingService.ts
init_process_shim();
var import_obsidian14 = require("obsidian");
var NAME = "screen.garden";
var LoggingService = class extends Service {
  constructor() {
    super(...arguments);
    // Stick with debug for now across the board.
    this.level = false ? 0 /* DEBUG */ : 2 /* WARN */;
    /**
     * Set this to a string path (relative to vault root) during local dev to echo
     * all console output to the file.
     */
    this.logToFile = null;
  }
  // "log.txt"; // for example
  async onload() {
  }
  async onunload() {
  }
  setLevel(level) {
    this.level = level;
  }
  debug(message, ...data) {
    return this.logAtLevel(0 /* DEBUG */, message, ...data);
  }
  info(message, ...data) {
    return this.logAtLevel(1 /* INFO */, message, ...data);
  }
  warn(message, ...data) {
    return this.logAtLevel(2 /* WARN */, message, ...data);
  }
  error(message, ...data) {
    return this.logAtLevel(3 /* ERROR */, message, ...data);
  }
  logAtLevel(level, message, ...data) {
    const dataIsFunction = typeof data[0] === "function" && data[0].length === 0;
    if (level >= this.level) {
      const label = this.logLabel(level);
      const tag = `[${NAME}][${label}]`;
      if (dataIsFunction) {
        console.group(`${tag} ${message}`);
        const ret = data.shift()();
        console.groupEnd();
        return ret;
      } else {
        const fn = this.logFn(level);
        if (false) {
          const entry = tag + " " + message + " " + (data.length > 0 ? JSON.stringify(data) : "") + "\n";
          app.vault.adapter.append(normalizePath(this.logToFile), entry);
        }
        return fn(tag, ...[message, ...data]);
      }
    } else if (dataIsFunction) {
      return data.shift()();
    }
  }
  logFn(level) {
    switch (level) {
      case 0 /* DEBUG */:
        return console.log.bind(console);
      case 1 /* INFO */:
        return console.log.bind(console);
      case 2 /* WARN */:
        return console.warn.bind(console);
      case 3 /* ERROR */:
        return console.error.bind(console);
      default:
        return console.log.bind(console);
    }
  }
  logLabel(level) {
    switch (level) {
      case 0 /* DEBUG */:
        return "debug";
      case 1 /* INFO */:
        return "info";
      case 2 /* WARN */:
        return "warn";
      case 3 /* ERROR */:
        return "error";
      default:
        return "log";
    }
  }
};
__name(LoggingService, "LoggingService");

// src/services/state/index.ts
init_process_shim();

// src/services/state/StateService.ts
init_process_shim();

// node_modules/svelte/store/index.mjs
init_process_shim();

// node_modules/svelte/internal/index.mjs
init_process_shim();
function noop2() {
}
__name(noop2, "noop");
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
__name(assign, "assign");
function run(fn) {
  return fn();
}
__name(run, "run");
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
__name(blank_object, "blank_object");
function run_all(fns) {
  fns.forEach(run);
}
__name(run_all, "run_all");
function is_function(thing) {
  return typeof thing === "function";
}
__name(is_function, "is_function");
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
__name(safe_not_equal, "safe_not_equal");
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
__name(is_empty, "is_empty");
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
__name(subscribe, "subscribe");
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
__name(get_store_value, "get_store_value");
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
__name(component_subscribe, "component_subscribe");
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
__name(create_slot, "create_slot");
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
__name(get_slot_context, "get_slot_context");
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
__name(get_slot_changes, "get_slot_changes");
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
__name(update_slot_base, "update_slot_base");
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length3 = $$scope.ctx.length / 32;
    for (let i = 0; i < length3; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
__name(get_all_dirty_from_scope, "get_all_dirty_from_scope");
function exclude_internal_props(props) {
  const result = {};
  for (const k in props)
    if (k[0] !== "$")
      result[k] = props[k];
  return result;
}
__name(exclude_internal_props, "exclude_internal_props");
function compute_rest_props(props, keys3) {
  const rest = {};
  keys3 = new Set(keys3);
  for (const k in props)
    if (!keys3.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
__name(compute_rest_props, "compute_rest_props");
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop2;
}
__name(action_destroyer, "action_destroyer");
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
__name(start_hydrating, "start_hydrating");
function end_hydrating() {
  is_hydrating = false;
}
__name(end_hydrating, "end_hydrating");
function append2(target, node) {
  target.appendChild(node);
}
__name(append2, "append");
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element2("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
__name(append_styles, "append_styles");
function get_root_for_style(node) {
  if (!node)
    return document;
  const root2 = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root2 && root2.host) {
    return root2;
  }
  return node.ownerDocument;
}
__name(get_root_for_style, "get_root_for_style");
function append_stylesheet(node, style) {
  append2(node.head || node, style);
  return style.sheet;
}
__name(append_stylesheet, "append_stylesheet");
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
__name(insert, "insert");
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
__name(detach, "detach");
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
__name(destroy_each, "destroy_each");
function element2(name) {
  return document.createElement(name);
}
__name(element2, "element");
function text2(data) {
  return document.createTextNode(data);
}
__name(text2, "text");
function space() {
  return text2(" ");
}
__name(space, "space");
function empty() {
  return text2("");
}
__name(empty, "empty");
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
__name(listen, "listen");
function prevent_default(fn) {
  return function(event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
__name(prevent_default, "prevent_default");
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
__name(attr, "attr");
function set_attributes(node, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
__name(set_attributes, "set_attributes");
function children(element3) {
  return Array.from(element3.childNodes);
}
__name(children, "children");
function set_data(text3, data) {
  data = "" + data;
  if (text3.wholeText !== data)
    text3.data = data;
}
__name(set_data, "set_data");
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
__name(set_input_value, "set_input_value");
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
__name(set_style, "set_style");
function select_option(select, value, mounting) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
__name(select_option, "select_option");
function select_value(select) {
  const selected_option = select.querySelector(":checked");
  return selected_option && selected_option.__value;
}
__name(select_value, "select_value");
function toggle_class(element3, name, toggle) {
  element3.classList[toggle ? "add" : "remove"](name);
}
__name(toggle_class, "toggle_class");
var current_component;
function set_current_component(component) {
  current_component = component;
}
__name(set_current_component, "set_current_component");
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
__name(schedule_update, "schedule_update");
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
__name(add_render_callback, "add_render_callback");
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
__name(flush, "flush");
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
__name(update, "update");
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
__name(flush_render_callbacks, "flush_render_callbacks");
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
__name(group_outros, "group_outros");
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
__name(check_outros, "check_outros");
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
__name(transition_in, "transition_in");
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
__name(transition_out, "transition_out");
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
__name(get_spread_update, "get_spread_update");
var _boolean_attributes = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
function create_component(block) {
  block && block.c();
}
__name(create_component, "create_component");
function mount_component(component, target, anchor, customElement) {
  const { fragment: fragment2, after_update } = component.$$;
  fragment2 && fragment2.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
__name(mount_component, "mount_component");
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
__name(destroy_component, "destroy_component");
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
__name(make_dirty, "make_dirty");
function init(component, options, instance12, create_fragment13, not_equal, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop2,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance12 ? instance12(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment13 ? create_fragment13($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
__name(init, "init");
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = /* @__PURE__ */ __name(class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop2;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }, "SvelteElement");
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop2;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop2;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};
__name(SvelteComponent, "SvelteComponent");

// node_modules/svelte/store/index.mjs
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
__name(readable, "readable");
function writable(value, start = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  __name(set, "set");
  function update2(fn) {
    set(fn(value));
  }
  __name(update2, "update");
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  __name(subscribe2, "subscribe");
  return { set, update: update2, subscribe: subscribe2 };
}
__name(writable, "writable");
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop2;
    const sync = /* @__PURE__ */ __name(() => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop2;
      }
    }, "sync");
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (started) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    started = true;
    sync();
    return /* @__PURE__ */ __name(function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    }, "stop");
  });
}
__name(derived, "derived");

// src/services/state/types.ts
init_process_shim();
var DEFAULT_SETTINGS = {
  auth: {
    token: null
  },
  cachedUser: {
    id: null
  },
  files: {
    pathsToDocumentIds: {},
    documentIdsToPaths: {}
  }
};

// src/services/state/StateService.ts
function subscribeIgnoringFirst(store, run2) {
  let first = true;
  return store.subscribe((state) => {
    if (first) {
      first = false;
    } else {
      run2(state);
    }
  });
}
__name(subscribeIgnoringFirst, "subscribeIgnoringFirst");
var StateService = class extends Service {
  constructor() {
    super(...arguments);
    /**
     * Used to authenticate against screen.garden.
     */
    this.auth = writable({ token: null });
    /**
     * If non-null, the currently logged-in user.
     */
    this.user = writable(null);
    /**
     * True if the auth has a token that can auth against screen.garden, false otherwise.
     */
    this.loggedIn = derived([this.auth], ([$auth]) => {
      return $auth.token !== null;
    });
    /**
     * See caveats on CachedUserState. Only use for checking state changes across token changes.
     */
    this.cachedUser = writable({ id: null });
    /**
     * The data needed to match cloud documents to local notes.
     */
    this.files = writable({
      pathsToDocumentIds: {},
      documentIdsToPaths: {}
    });
    this.settings = derived(
      [this.auth, this.cachedUser, this.files],
      ([$auth, $cachedUser, $files]) => ({
        auth: $auth,
        cachedUser: $cachedUser,
        files: $files
      })
    );
    /**
     * The markdown TFile file correspoding to the current active leaf,
     * or null if there is no active leaf or the active leaf does not
     * contain a markdown file.
     */
    this.currentMarkdownFile = writable(null);
    /**
     * Invitations sent to or from this user to join cloud documents.
     */
    this.invitations = writable([]);
    /**
     * Invitations sent to the current user.
     */
    this.invitationsToMe = derived(
      [this.invitations],
      ([$invitations]) => {
        return $invitations.filter((i) => i.to_you);
      }
    );
    /**
     * All of the cloud documents this user has access to, regardless of local state.
     */
    this.documents = writable([]);
    /**
     * Document IDs to their changes and permissions. Folded into annotated documents.
     */
    this.documentDetails = writable(
      {}
    );
    /**
     * This store serves as a way for the state service to stage more specific stores without repeating work.
     * If you want to propogate information to a downstream store that relies on some combination of API
     * and local data, it should probably begin here.
     */
    this.annotatedDocuments = derived(
      [this.files, this.documents, this.documentDetails],
      ([$files, $documents, $details]) => {
        var _a;
        const localDocuments = [];
        const remoteDocuments = [];
        for (const document2 of $documents) {
          const path = $files.documentIdsToPaths[document2.id];
          if (path) {
            const details = (_a = $details[document2.id]) != null ? _a : null;
            localDocuments.push({
              ...document2,
              path,
              details
            });
          } else {
            remoteDocuments.push(document2);
          }
        }
        return {
          localDocuments,
          remoteDocuments
        };
      }
    );
    /**
     * All cloud documents that are being tracked locally, plus their vault paths.
     */
    this.localDocuments = derived(
      [this.annotatedDocuments],
      ([$annotated]) => $annotated.localDocuments
    );
    /**
     * Local documents mapped by ID.
     */
    this.localDocumentsByID = derived(
      [this.localDocuments],
      ([$localDocument]) => {
        const _byID = {};
        for (const doc2 of $localDocument) {
          _byID[doc2.id] = doc2;
        }
        return _byID;
      }
    );
    /**
     * The local document corresponding to the active leaf's file, if applicable.
     */
    this.currentLocalDocument = derived(
      [this.localDocumentsByID, this.files, this.currentMarkdownFile],
      ([$localDocumentsByID, $files, $currentMarkdownFile]) => {
        if ($currentMarkdownFile && $files.pathsToDocumentIds[$currentMarkdownFile.path]) {
          const id = $files.pathsToDocumentIds[$currentMarkdownFile.path];
          return $localDocumentsByID[id];
        }
        return null;
      }
    );
    /**
     * All cloud documents that are not tracked locally but are available to the user on the server.
     */
    this.remoteDocuments = derived(
      [this.annotatedDocuments],
      ([$annotated]) => $annotated.remoteDocuments
    );
    this.knownCollaborators = derived(
      [this.documentDetails],
      ([$details]) => uniqBy_default(
        Object.values($details).flatMap(
          (d) => d.permissions.filter((p) => !p.is_you).map((p) => ({
            email: p.user_email,
            name: p.user_name
          }))
        ),
        ({ email }) => email
      )
    );
    this.syncStatus = writable({
      connected: false
    });
    this.userQuotas = writable({});
  }
  async onload() {
    var _a, _b;
    const data = DEFAULT_SETTINGS;
    const diskData = await this.plugin.loadData();
    if (diskData) {
      if (diskData.auth && typeof diskData.auth.token === "string") {
        data.auth.token = diskData.auth.token;
      }
      if (diskData.cachedUser && typeof diskData.cachedUser.id === "string") {
        data.cachedUser.id = diskData.cachedUser.id;
      }
      if (diskData.files) {
        if (typeof diskData.files.pathsToDocumentIds === "object") {
          Object.entries(diskData.files.pathsToDocumentIds).forEach(
            ([k, v]) => {
              if (typeof k === "string" && typeof v === "string") {
                data.files.pathsToDocumentIds[k] = v;
              }
            }
          );
        }
        if (typeof diskData.files.documentIdsToPaths === "object") {
          Object.entries(diskData.files.documentIdsToPaths).forEach(
            ([k, v]) => {
              if (typeof k === "string" && typeof v === "string") {
                data.files.documentIdsToPaths[k] = v;
              }
            }
          );
        }
      }
    }
    this.plugin.logger.debug("loading settings state", data);
    this.auth.set({ token: (_a = data.auth.token) != null ? _a : null });
    this.cachedUser.set({ id: (_b = data.cachedUser.id) != null ? _b : null });
    this.u_token = this.auth.subscribe(({ token }) => {
      this._token = token;
    });
    this.files.set({
      pathsToDocumentIds: data.files.pathsToDocumentIds,
      documentIdsToPaths: data.files.documentIdsToPaths
    });
    this.u_files = this.files.subscribe((files) => {
      this._files = files;
    });
    this.u_saveSettings = subscribeIgnoringFirst(this.settings, (settings) => {
      this.save(settings);
    });
    this.maybeClearTrackedFiles();
  }
  async onLayoutReady() {
    if (this.plugin.api.documents) {
      this.loadDocuments();
    }
    this.plugin.api.registerEvent(
      this.plugin.api.on("api-clients-available" /* APIClientsAvailable */, () => {
        this.loadDocuments();
      })
    );
  }
  async onunload() {
    this.u_saveSettings();
    this.u_files();
    this.u_token();
  }
  save(settings) {
    this.plugin.logger.debug("saving settings", settings);
    this.plugin.saveData(settings);
  }
  getToken() {
    return this._token;
  }
  setUser(user) {
    var _a;
    this.user.set(user);
    this.maybeClearTrackedFiles();
    this.cachedUser.set({ id: (_a = user == null ? void 0 : user.id) != null ? _a : null });
  }
  maybeClearTrackedFiles() {
    var _a, _b;
    const prevID = (_a = get_store_value(this.cachedUser)) == null ? void 0 : _a.id;
    const thisID = (_b = get_store_value(this.user)) == null ? void 0 : _b.id;
    if (prevID && thisID && prevID !== thisID) {
      this.plugin.logger.debug(
        `user has changed across logins, resetting tracked file state. Was: ${prevID}, now: ${thisID}`
      );
      this.files.set({
        pathsToDocumentIds: {},
        documentIdsToPaths: {}
      });
    }
  }
  getFiles() {
    return this._files;
  }
  /**
   * Empties any local stores that act as caches for user data,
   * like invitations, documents, etc.
   */
  clearLocalState() {
    this.documents.set([]);
    this.invitations.set([]);
    this.documentDetails.set({});
  }
  /**
   * Fetches the user's documents and invitations and stores them locally.
   */
  async loadDocuments() {
    if (!this.plugin.api.documents)
      return;
    this.plugin.logger.debug("loading documents into store");
    const docs = await this.plugin.api.documents.list();
    this.documents.set(docs);
    await Promise.all([this.loadInvitations(), this.loadUserQuotas()]);
  }
  /**
   * Fetches the user's invitations and stores them locally.
   */
  async loadInvitations() {
    if (!this.plugin.api.invitations)
      return;
    this.plugin.logger.debug("loading invitations into store");
    const invites = await this.plugin.api.invitations.list();
    this.invitations.set(invites);
  }
  /**
   * Fetches the user's quotas
   */
  async loadUserQuotas() {
    if (!this.plugin.api.quotas)
      return;
    this.plugin.logger.debug("loading user quotas into store");
    const quotas = await this.plugin.api.quotas.getUserQuotas();
    this.userQuotas.set(keyBy_default(quotas, "quota"));
  }
  /**
   * Accepts an invitation and adds the corresponding document to the local store.
   * @param invitation The invitation to accept.
   */
  async acceptInvitation(invitation) {
    if (!this.plugin.api.invitations)
      return null;
    this.plugin.logger.debug("accepting invitation", invitation);
    const doc2 = await this.plugin.api.invitations.accept(invitation.id);
    if (!doc2)
      return null;
    this.plugin.logger.debug("accepted, prepending document", doc2);
    this.documents.update((docs) => {
      return [doc2, ...docs];
    });
    this.invitations.update(
      (invites) => invites.filter((i) => i.id !== invitation.id)
    );
    return doc2;
  }
  /**
   * Rejects an invitation.
   * @param invitation The invitation to reject.
   */
  async rejectInvitation(invitation) {
    if (!this.plugin.api.invitations)
      return;
    this.plugin.logger.debug("rejecting invitation", invitation);
    await this.plugin.api.invitations.delete(invitation.id);
    this.invitations.update(
      (invites) => invites.filter((i) => i.id !== invitation.id)
    );
  }
  /**
   * Loads (or reloads) details for a given document.
   * @param documentID ID of document to load details for.
   */
  async loadDetails(documentID) {
    const changesAPI = this.plugin.api.changes(documentID);
    const permissionsAPI = this.plugin.api.permissions(documentID);
    const quotasAPI = this.plugin.api.quotas;
    if (!changesAPI || !permissionsAPI || !quotasAPI)
      return;
    this.plugin.logger.debug("loading details for", documentID);
    const [changes, permissions, quotas] = await Promise.all([
      changesAPI.list(),
      permissionsAPI.list(),
      quotasAPI.getDocumentQuotas(documentID)
    ]);
    this.documentDetails.update((_documentDetails) => {
      _documentDetails[documentID] = {
        changes,
        permissions,
        quotas
      };
      return _documentDetails;
    });
  }
  updateDocumentDetails(documentID, updater) {
    this.documentDetails.update((_documentDetails) => {
      _documentDetails[documentID] = updater(_documentDetails[documentID]);
      return _documentDetails;
    });
  }
};
__name(StateService, "StateService");

// src/services/protocols/index.ts
init_process_shim();

// src/services/protocols/ProtocolHandlerService.ts
init_process_shim();
var import_obsidian18 = require("obsidian");

// src/services/view/modal/place-document/index.ts
init_process_shim();

// src/services/view/modal/place-document/PlaceDocumentModal.ts
init_process_shim();
var import_obsidian17 = require("obsidian");

// src/services/view/modal/place-document/PlaceDocumentModalContent.svelte
init_process_shim();

// node_modules/tslib/tslib.es6.js
init_process_shim();
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");

// src/services/view/modal/place-document/PlaceDocumentModalContent.svelte
var import_obsidian16 = require("obsidian");

// src/services/view/components/Icon.svelte
init_process_shim();
var import_obsidian15 = require("obsidian");
function add_css(target) {
  append_styles(target, "svelte-1izfv43", "span.svelte-1izfv43{display:inline-flex;align-items:center;justify-content:center}");
}
__name(add_css, "add_css");
function create_if_block(ctx) {
  let span;
  let span_style_value;
  let icon_action;
  let mounted;
  let dispose;
  let span_levels = [
    {
      style: span_style_value = `width: ${/*size*/
      ctx[1]}; height: ${/*size*/
      ctx[1]};`
    },
    /*$$restProps*/
    ctx[3]
  ];
  let span_data = {};
  for (let i = 0; i < span_levels.length; i += 1) {
    span_data = assign(span_data, span_levels[i]);
  }
  return {
    c() {
      span = element2("span");
      set_attributes(span, span_data);
      toggle_class(span, "svelte-1izfv43", true);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if (!mounted) {
        dispose = action_destroyer(icon_action = /*icon*/
        ctx[2].call(
          null,
          span,
          /*name*/
          ctx[0]
        ));
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(span, span_data = get_spread_update(span_levels, [
        dirty & /*size*/
        2 && span_style_value !== (span_style_value = `width: ${/*size*/
        ctx2[1]}; height: ${/*size*/
        ctx2[1]};`) && { style: span_style_value },
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3]
      ]));
      if (icon_action && is_function(icon_action.update) && dirty & /*name*/
      1)
        icon_action.update.call(
          null,
          /*name*/
          ctx2[0]
        );
      toggle_class(span, "svelte-1izfv43", true);
    },
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
__name(create_if_block, "create_if_block");
function create_fragment(ctx) {
  let if_block_anchor;
  let if_block = (
    /*name*/
    ctx[0].length > 0 && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*name*/
        ctx2[0].length > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
__name(create_fragment, "create_fragment");
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = ["name", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { name = "" } = $$props;
  let { size = "var(--icon-xs)" } = $$props;
  const icon = /* @__PURE__ */ __name((node, icon2) => {
    (0, import_obsidian15.setIcon)(node, icon2);
  }, "icon");
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("name" in $$new_props)
      $$invalidate(0, name = $$new_props.name);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
  };
  return [name, size, icon, $$restProps];
}
__name(instance, "instance");
var Icon = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { name: 0, size: 1 }, add_css);
  }
};
__name(Icon, "Icon");
var Icon_default = Icon;

// src/services/view/modal/place-document/PlaceDocumentModalContent.svelte
function add_css2(target) {
  append_styles(target, "svelte-tlw3ea", ".sg-document-path.svelte-tlw3ea{font-weight:bold;color:var(--text-accent)}input.svelte-tlw3ea{width:100%}.sg-folder-list.svelte-tlw3ea{margin:var(--size-4-2) 0 0 0;list-style:none;padding:0;max-height:300px;overflow-y:auto}.sg-folder-item.svelte-tlw3ea{padding:var(--size-2-1);display:flex;flex-direction:row;align-items:center}.sg-folder-name.svelte-tlw3ea{margin:0 var(--size-4-1)}.sg-folder-path.svelte-tlw3ea{color:var(--text-faint)}.sg-folder-item.svelte-tlw3ea:hover{background-color:var(--background-modifier-hover)}.sg-hint.svelte-tlw3ea{margin-top:var(--size-2-1);color:var(--text-faint);font-size:var(--font-ui-smaller)}");
}
__name(add_css2, "add_css");
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
__name(get_each_context, "get_each_context");
function create_if_block_2(ctx) {
  let p;
  return {
    c() {
      p = element2("p");
      p.textContent = "Pressing return while filtered to one folder will choose it for you.";
      attr(p, "class", "sg-hint svelte-tlw3ea");
    },
    m(target, anchor) {
      insert(target, p, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
__name(create_if_block_2, "create_if_block_2");
function create_else_block(ctx) {
  let icon;
  let t0;
  let span;
  let current;
  icon = new Icon_default({ props: { name: "vault" } });
  return {
    c() {
      create_component(icon.$$.fragment);
      t0 = space();
      span = element2("span");
      span.textContent = "Vault root";
      attr(span, "class", "sg-folder-name svelte-tlw3ea");
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      insert(target, t0, anchor);
      insert(target, span, anchor);
      current = true;
    },
    p: noop2,
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
    }
  };
}
__name(create_else_block, "create_else_block");
function create_if_block_1(ctx) {
  let icon;
  let t0;
  let span;
  let t1_value = (
    /*folder*/
    ctx[11].name + ""
  );
  let t1;
  let current;
  icon = new Icon_default({ props: { name: "folder" } });
  return {
    c() {
      create_component(icon.$$.fragment);
      t0 = space();
      span = element2("span");
      t1 = text2(t1_value);
      attr(span, "class", "sg-folder-name svelte-tlw3ea");
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      insert(target, t0, anchor);
      insert(target, span, anchor);
      append2(span, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*folders*/
      4) && t1_value !== (t1_value = /*folder*/
      ctx2[11].name + ""))
        set_data(t1, t1_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
    }
  };
}
__name(create_if_block_1, "create_if_block_1");
function create_if_block2(ctx) {
  let span;
  let t_value = (
    /*folder*/
    ctx[11].path + ""
  );
  let t;
  return {
    c() {
      span = element2("span");
      t = text2(t_value);
      attr(span, "class", "sg-folder-path svelte-tlw3ea");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append2(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*folders*/
      4 && t_value !== (t_value = /*folder*/
      ctx2[11].path + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
__name(create_if_block2, "create_if_block");
function create_each_block(ctx) {
  let li;
  let div;
  let current_block_type_index;
  let if_block0;
  let t0;
  let t1;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*folder*/
      ctx2[11].path !== "/"
    )
      return 0;
    return 1;
  }
  __name(select_block_type, "select_block_type");
  current_block_type_index = select_block_type(ctx, -1);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*folder*/
    ctx[11].path !== /*folder*/
    ctx[11].name && create_if_block2(ctx)
  );
  function click_handler() {
    return (
      /*click_handler*/
      ctx[8](
        /*folder*/
        ctx[11]
      )
    );
  }
  __name(click_handler, "click_handler");
  function keydown_handler(...args2) {
    return (
      /*keydown_handler*/
      ctx[9](
        /*folder*/
        ctx[11],
        ...args2
      )
    );
  }
  __name(keydown_handler, "keydown_handler");
  return {
    c() {
      li = element2("li");
      div = element2("div");
      if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      attr(div, "class", "sg-folder-item svelte-tlw3ea");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append2(li, div);
      if_blocks[current_block_type_index].m(div, null);
      append2(div, t0);
      if (if_block1)
        if_block1.m(div, null);
      append2(li, t1);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div, "click", click_handler),
          listen(div, "keydown", keydown_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block0.c();
        } else {
          if_block0.p(ctx, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(div, t0);
      }
      if (
        /*folder*/
        ctx[11].path !== /*folder*/
        ctx[11].name
      ) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block2(ctx);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if_blocks[current_block_type_index].d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_each_block, "create_each_block");
function create_fragment2(ctx) {
  let div;
  let p;
  let t0;
  let span;
  let t1_value = (
    /*document*/
    ctx[0].title_clean + ""
  );
  let t1;
  let t2;
  let t3;
  let t4;
  let input;
  let t5;
  let t6;
  let ul;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*folders*/
    ctx[2].length === 1 && create_if_block_2(ctx)
  );
  let each_value = (
    /*folders*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  }), "out");
  return {
    c() {
      div = element2("div");
      p = element2("p");
      t0 = text2("Choose a location in your vault to add ");
      span = element2("span");
      t1 = text2(t1_value);
      t2 = text2(".md");
      t3 = text2(". This note will be connected to the cloud version in\n		screen.garden\u2014changes you make to it will sync with the cloud and any\n		other collaborators.");
      t4 = space();
      input = element2("input");
      t5 = space();
      if (if_block)
        if_block.c();
      t6 = space();
      ul = element2("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(span, "class", "sg-document-path svelte-tlw3ea");
      attr(input, "type", "text");
      attr(input, "placeholder", "Filter vault folders");
      input.autofocus = true;
      attr(input, "class", "svelte-tlw3ea");
      attr(ul, "class", "sg-folder-list svelte-tlw3ea");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append2(div, p);
      append2(p, t0);
      append2(p, span);
      append2(span, t1);
      append2(span, t2);
      append2(p, t3);
      append2(div, t4);
      append2(div, input);
      set_input_value(
        input,
        /*value*/
        ctx[1]
      );
      append2(div, t5);
      if (if_block)
        if_block.m(div, null);
      append2(div, t6);
      append2(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      current = true;
      input.focus();
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[7]
          ),
          listen(
            input,
            "keydown",
            /*onKeydown*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*document*/
      1) && t1_value !== (t1_value = /*document*/
      ctx2[0].title_clean + ""))
        set_data(t1, t1_value);
      if (dirty & /*value*/
      2 && input.value !== /*value*/
      ctx2[1]) {
        set_input_value(
          input,
          /*value*/
          ctx2[1]
        );
      }
      if (
        /*folders*/
        ctx2[2].length === 1
      ) {
        if (if_block) {
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          if_block.m(div, t6);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*place, folders*/
      20) {
        each_value = /*folders*/
        ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_fragment2, "create_fragment");
var VAULT_ROOT_NAME = "vault root";
function instance2($$self, $$props, $$invalidate) {
  let { plugin } = $$props;
  let { modal } = $$props;
  let { document: document2 } = $$props;
  const allFolders = plugin.app.vault.getAllLoadedFiles().filter((f) => f instanceof import_obsidian16.TFolder);
  let value = "";
  let folders;
  function onKeydown(e) {
    if (e.key !== "Enter") {
      return;
    }
    e.preventDefault();
    if (folders.length === 1) {
      place(folders[0]);
    }
  }
  __name(onKeydown, "onKeydown");
  function place(folder) {
    return __awaiter(this, void 0, void 0, function* () {
      const fileName = document2.title_clean;
      let path = (0, import_obsidian16.normalizePath)(`${folder.path}/${fileName}.md`);
      let count2 = 1;
      while (yield plugin.app.vault.adapter.exists(path)) {
        path = (0, import_obsidian16.normalizePath)(`${folder.path}/${fileName}-${count2}.md`);
        count2++;
      }
      const file = yield plugin.app.vault.create(path, "");
      yield plugin.files.link(document2.id, file);
      plugin.app.workspace.getLeaf(false).openFile(file);
      plugin.editor.reconnectEditorsForFile(file);
      modal.close();
    });
  }
  __name(place, "place");
  function input_input_handler() {
    value = this.value;
    $$invalidate(1, value);
  }
  __name(input_input_handler, "input_input_handler");
  const click_handler = /* @__PURE__ */ __name((folder) => place(folder), "click_handler");
  const keydown_handler = /* @__PURE__ */ __name((folder, e) => {
    if (e.key === "Enter")
      place(folder);
  }, "keydown_handler");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(5, plugin = $$props2.plugin);
    if ("modal" in $$props2)
      $$invalidate(6, modal = $$props2.modal);
    if ("document" in $$props2)
      $$invalidate(0, document2 = $$props2.document);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    2) {
      $: {
        if (value.length > 0) {
          const query = value.toLowerCase();
          const fuzzySearch = (0, import_obsidian16.prepareFuzzySearch)(query);
          const isRoot = fuzzySearch(VAULT_ROOT_NAME);
          $$invalidate(2, folders = allFolders.filter((f) => f.path === "/" && isRoot || fuzzySearch(f.path.toLowerCase())));
        } else {
          $$invalidate(2, folders = allFolders);
        }
      }
    }
  };
  return [
    document2,
    value,
    folders,
    onKeydown,
    place,
    plugin,
    modal,
    input_input_handler,
    click_handler,
    keydown_handler
  ];
}
__name(instance2, "instance");
var PlaceDocumentModalContent = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, { plugin: 5, modal: 6, document: 0 }, add_css2);
  }
};
__name(PlaceDocumentModalContent, "PlaceDocumentModalContent");
var PlaceDocumentModalContent_default = PlaceDocumentModalContent;

// src/services/view/modal/place-document/PlaceDocumentModal.ts
var PlaceDocumentModal = class extends import_obsidian17.Modal {
  constructor(plugin, document2) {
    super(app);
    this.plugin = plugin;
    this.document = document2;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Add to Vault" }, (el) => {
      el.style.margin = "0 0 var(--size-4-4) 0";
    });
    const entrypoint = contentEl.createDiv("sg-modal-root");
    new PlaceDocumentModalContent_default({
      target: entrypoint,
      props: {
        plugin: this.plugin,
        modal: this,
        document: this.document
      }
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
__name(PlaceDocumentModal, "PlaceDocumentModal");

// src/services/protocols/ProtocolHandlerService.ts
var ProtocolHandlerService = class extends Service {
  async onload() {
    this.plugin.logger.debug("registering protocol handlers");
    this.plugin.registerObsidianProtocolHandler(
      "screengarden-login",
      this.handleLogin.bind(this)
    );
    this.plugin.registerObsidianProtocolHandler(
      "screengarden-accept-invitation",
      this.handleAcceptInvitation.bind(this)
    );
    this.plugin.registerObsidianProtocolHandler(
      "screengarden-document",
      this.handleDocument.bind(this)
    );
  }
  async onunload() {
  }
  async handleLogin(params2) {
    if (!params2["token"]) {
      this.plugin.logger.error("missing token in login protocol handler");
      return;
    }
    this.plugin.auth.setToken(params2["token"]);
    this.plugin.view.revealLeaves();
  }
  async handleAcceptInvitation(params2) {
    if (!params2["invitation-id"]) {
      this.plugin.logger.error(
        "missing invitation id in accept invitation protocol handler"
      );
      return;
    }
    await this.plugin.state.loadInvitations();
    const invitations = get_store_value(this.plugin.state.invitationsToMe);
    const invitation = invitations.find(
      (i) => i.id === params2["invitation-id"]
    );
    if (!invitation) {
      this.plugin.logger.error(
        "cannot accept invitation. invitation not found"
      );
      return;
    }
    this.plugin.state.acceptInvitation(invitation);
  }
  async handleDocument(params2) {
    var _a, _b;
    if (!params2["id"]) {
      this.plugin.logger.error("missing id in document handler");
      return;
    }
    const documentId = params2["id"];
    const path = this.plugin.files.getPath(documentId);
    if (path) {
      const file = this.plugin.app.vault.getAbstractFileByPath(path);
      if (file instanceof import_obsidian18.TFile) {
        this.plugin.app.workspace.getLeaf(true).openFile(file);
      }
    } else {
      const document2 = (_b = await ((_a = this.plugin.api.documents) == null ? void 0 : _a.read(documentId))) == null ? void 0 : _b.data;
      if (document2) {
        new PlaceDocumentModal(this.plugin, document2).open();
      } else {
        this.plugin.logger.error(
          `error loading document in handler with ID ${documentId}`
        );
      }
    }
  }
};
__name(ProtocolHandlerService, "ProtocolHandlerService");

// src/services/view/index.ts
init_process_shim();

// src/services/view/ViewService.ts
init_process_shim();

// src/services/view/document/index.ts
init_process_shim();

// src/services/view/document/DocumentPane.ts
init_process_shim();

// src/services/view/view_types.ts
init_process_shim();
var import_obsidian19 = require("obsidian");
var View = class extends import_obsidian19.ItemView {
  constructor(plugin, leaf) {
    super(leaf);
    this.plugin = plugin;
  }
  getViewType() {
    return this.constructor.ViewType();
  }
};
__name(View, "View");

// src/services/view/document/Document.svelte
init_process_shim();

// src/services/api/types.ts
init_process_shim();

// src/services/view/components/Invitations.svelte
init_process_shim();
function add_css3(target) {
  append_styles(target, "svelte-7qrxo9", "ul.svelte-7qrxo9{list-style:none;padding:0;margin:0}li.svelte-7qrxo9{margin-bottom:var(--size-4-2)}p.svelte-7qrxo9{padding:0;margin:0}.sg-invite.svelte-7qrxo9{color:var(--text-muted);padding:var(--size-4-2);border-radius:var(--radius-s);border:1px solid var(--background-modifier-border)}.sg-invite-from.svelte-7qrxo9{color:var(--text-normal);font-weight:var(--font-semibold)}.sg-invite-level.svelte-7qrxo9{color:var(--text-normal)}.sg-invite-title.svelte-7qrxo9{color:var(--text-accent);font-weight:var(--font-bold)}.sg-invite-buttons.svelte-7qrxo9{display:flex;flex-direction:row;margin-top:var(--size-4-1)}.sg-invite-buttons > button{margin-right:var(--size-4-2)}");
}
__name(add_css3, "add_css");
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
__name(get_each_context2, "get_each_context");
var get_default_slot_changes = /* @__PURE__ */ __name((dirty) => ({ invitation: dirty & /*invitations*/
1 }), "get_default_slot_changes");
var get_default_slot_context = /* @__PURE__ */ __name((ctx) => ({ invitation: (
  /*invitation*/
  ctx[3]
) }), "get_default_slot_context");
function create_else_block2(ctx) {
  let t0;
  let span;
  let t1_value = (
    /*invitation*/
    ctx[3].to + ""
  );
  let t1;
  let t2;
  return {
    c() {
      t0 = text2("You invited ");
      span = element2("span");
      t1 = text2(t1_value);
      t2 = text2(" to");
      attr(span, "class", "sg-invite-from svelte-7qrxo9");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, span, anchor);
      append2(span, t1);
      insert(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*invitations*/
      1 && t1_value !== (t1_value = /*invitation*/
      ctx2[3].to + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
      if (detaching)
        detach(t2);
    }
  };
}
__name(create_else_block2, "create_else_block");
function create_if_block3(ctx) {
  let span;
  let t0_value = (
    /*invitation*/
    ctx[3].from + ""
  );
  let t0;
  let t1;
  return {
    c() {
      span = element2("span");
      t0 = text2(t0_value);
      t1 = text2(" has\n						invited you to");
      attr(span, "class", "sg-invite-from svelte-7qrxo9");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append2(span, t0);
      insert(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*invitations*/
      1 && t0_value !== (t0_value = /*invitation*/
      ctx2[3].from + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
    }
  };
}
__name(create_if_block3, "create_if_block");
function create_each_block2(ctx) {
  let li;
  let div1;
  let p;
  let t0;
  let span0;
  let t1_value = (
    /*invitation*/
    ctx[3].level + ""
  );
  let t1;
  let t2;
  let span1;
  let t3_value = (
    /*invitation*/
    ctx[3].title + ""
  );
  let t3;
  let t4;
  let div0;
  let t5;
  let current;
  function select_block_type(ctx2, dirty) {
    if (
      /*invitation*/
      ctx2[3].to_you
    )
      return create_if_block3;
    return create_else_block2;
  }
  __name(select_block_type, "select_block_type");
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    get_default_slot_context
  );
  return {
    c() {
      li = element2("li");
      div1 = element2("div");
      p = element2("p");
      if_block.c();
      t0 = space();
      span0 = element2("span");
      t1 = text2(t1_value);
      t2 = space();
      span1 = element2("span");
      t3 = text2(t3_value);
      t4 = space();
      div0 = element2("div");
      if (default_slot)
        default_slot.c();
      t5 = space();
      attr(span0, "class", "sg-invite-level svelte-7qrxo9");
      attr(span1, "class", "sg-invite-title svelte-7qrxo9");
      attr(p, "class", "svelte-7qrxo9");
      attr(div0, "class", "sg-invite-buttons svelte-7qrxo9");
      attr(div1, "class", "sg-invite svelte-7qrxo9");
      attr(li, "class", "svelte-7qrxo9");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append2(li, div1);
      append2(div1, p);
      if_block.m(p, null);
      append2(p, t0);
      append2(p, span0);
      append2(span0, t1);
      append2(p, t2);
      append2(p, span1);
      append2(span1, t3);
      append2(div1, t4);
      append2(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append2(li, t5);
      current = true;
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(p, t0);
        }
      }
      if ((!current || dirty & /*invitations*/
      1) && t1_value !== (t1_value = /*invitation*/
      ctx2[3].level + ""))
        set_data(t1, t1_value);
      if ((!current || dirty & /*invitations*/
      1) && t3_value !== (t3_value = /*invitation*/
      ctx2[3].title + ""))
        set_data(t3, t3_value);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, invitations*/
        3)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
__name(create_each_block2, "create_each_block");
function create_fragment3(ctx) {
  let ul;
  let current;
  let each_value = (
    /*invitations*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  }), "out");
  return {
    c() {
      ul = element2("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(ul, "class", "svelte-7qrxo9");
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$$scope, invitations*/
      3) {
        each_value = /*invitations*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
    }
  };
}
__name(create_fragment3, "create_fragment");
function instance3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { invitations } = $$props;
  $$self.$$set = ($$props2) => {
    if ("invitations" in $$props2)
      $$invalidate(0, invitations = $$props2.invitations);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [invitations, $$scope, slots];
}
__name(instance3, "instance");
var Invitations = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance3, create_fragment3, safe_not_equal, { invitations: 0 }, add_css3);
  }
};
__name(Invitations, "Invitations");
var Invitations_default = Invitations;

// src/services/view/components/LoggedOut.svelte
init_process_shim();
function create_fragment4(ctx) {
  let p;
  let t0;
  let a0;
  let t1;
  let a0_href_value;
  let t2;
  let a1;
  let t3;
  let a1_href_value;
  let t4;
  return {
    c() {
      p = element2("p");
      t0 = text2("screen.garden requires an account to enable realtime, secure collaboration.\n	Please ");
      a0 = element2("a");
      t1 = text2("register");
      t2 = text2("\n	or\n	");
      a1 = element2("a");
      t3 = text2("log in");
      t4 = text2(" to get started.");
      attr(a0, "href", a0_href_value = `${BASE_HTTP_URL}/users/register?app=obsidian`);
      attr(a0, "target", "_blank");
      attr(a0, "rel", "noopener");
      attr(a1, "href", a1_href_value = `${BASE_HTTP_URL}/users/log_in?app=obsidian`);
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noopener");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append2(p, t0);
      append2(p, a0);
      append2(a0, t1);
      append2(p, t2);
      append2(p, a1);
      append2(a1, t3);
      append2(p, t4);
    },
    p: noop2,
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
__name(create_fragment4, "create_fragment");
var LoggedOut = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment4, safe_not_equal, {});
  }
};
__name(LoggedOut, "LoggedOut");
var LoggedOut_default = LoggedOut;

// src/services/view/modal/invite/index.ts
init_process_shim();

// src/services/view/modal/invite/InviteModal.ts
init_process_shim();
var import_obsidian21 = require("obsidian");

// src/services/view/modal/invite/InviteModalContent.svelte
init_process_shim();

// src/services/view/document/Permissions.svelte
init_process_shim();

// src/services/view/modal/edit-permission/index.ts
init_process_shim();

// src/services/view/modal/edit-permission/EditPermissionModal.ts
init_process_shim();
var import_obsidian20 = require("obsidian");

// src/services/view/modal/edit-permission/EditPermissionModalContent.svelte
init_process_shim();
function add_css4(target) {
  append_styles(target, "svelte-qs8vt2", ".sg-permission-target.svelte-qs8vt2.svelte-qs8vt2{font-weight:bold}.sg-permission-level.svelte-qs8vt2.svelte-qs8vt2{font-weight:bold;color:var(--text-accent);background-color:inherit;box-shadow:none;text-decoration:underline;font-family:var(--font-interface);line-height:var(--line-height-tight);font-size:var(--font-ui-medium);background-color:var(--background-primary);padding:0}.sg-edit-level.svelte-qs8vt2.svelte-qs8vt2{position:relative;display:inline-flex;align-items:center}.sg-edit-level.svelte-qs8vt2 select.svelte-qs8vt2{padding-right:12px}.sg-edit-level.svelte-qs8vt2 .test.svelte-qs8vt2{position:absolute;right:0px;pointer-events:none;display:flex;align-items:center}");
}
__name(add_css4, "add_css");
function create_else_block3(ctx) {
  let p;
  let t0;
  let t1_value = (
    /*permission*/
    ctx[0].level + ""
  );
  let t1;
  let t2;
  let t3;
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      p = element2("p");
      t0 = text2("You currently have ");
      t1 = text2(t1_value);
      t2 = text2(" access to this document. You may\n			remove yourself from collaborating on this document. If you\u2019d like to\n			change your level of access, please contact the document owner.");
      t3 = space();
      button = element2("button");
      button.textContent = "Remove Me";
      attr(button, "class", "mod-warning");
      attr(button, "type", "button");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append2(p, t0);
      append2(p, t1);
      append2(p, t2);
      insert(target, t3, anchor);
      insert(target, button, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*removeFromDocument*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*permission*/
      1 && t1_value !== (t1_value = /*permission*/
      ctx2[0].level + ""))
        set_data(t1, t1_value);
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(p);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
__name(create_else_block3, "create_else_block");
function create_if_block4(ctx) {
  let p0;
  let t1;
  let p1;
  let t2;
  let span0;
  let t3_value = (
    /*permission*/
    ctx[0].user_name + ""
  );
  let t3;
  let t4;
  let span2;
  let select;
  let option0;
  let option1;
  let span1;
  let icon;
  let t7;
  let t8;
  let p2;
  let t10;
  let button;
  let current;
  let mounted;
  let dispose;
  icon = new Icon_default({ props: { name: "edit-2", size: "12px" } });
  function select_block_type_1(ctx2, dirty) {
    if (
      /*level*/
      ctx2[2] === "edit"
    )
      return create_if_block_12;
    if (
      /*level*/
      ctx2[2] === "read"
    )
      return create_if_block_22;
  }
  __name(select_block_type_1, "select_block_type_1");
  let current_block_type = select_block_type_1(ctx, -1);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      p0 = element2("p");
      p0.textContent = "As the owner of this document you may change others\u2019 access to it.";
      t1 = space();
      p1 = element2("p");
      t2 = text2("Currently, ");
      span0 = element2("span");
      t3 = text2(t3_value);
      t4 = text2("\n			has\n			");
      span2 = element2("span");
      select = element2("select");
      option0 = element2("option");
      option0.textContent = "read";
      option1 = element2("option");
      option1.textContent = "edit";
      span1 = element2("span");
      create_component(icon.$$.fragment);
      t7 = text2("\n			access:\n			");
      if (if_block)
        if_block.c();
      t8 = space();
      p2 = element2("p");
      p2.textContent = "Alternatively, you may remove their access to this document\n			entirely:";
      t10 = space();
      button = element2("button");
      button.textContent = "Remove Collaborator";
      attr(p0, "class", "setting-explanation");
      attr(span0, "class", "sg-permission-target svelte-qs8vt2");
      option0.__value = "read";
      option0.value = option0.__value;
      option1.__value = "edit";
      option1.value = option1.__value;
      attr(select, "name", "level");
      attr(select, "class", "sg-permission-level svelte-qs8vt2");
      if (
        /*level*/
        ctx[2] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[8].call(select)
        ));
      attr(span1, "class", "test svelte-qs8vt2");
      attr(span2, "class", "sg-edit-level svelte-qs8vt2");
      attr(button, "class", "mod-warning");
      attr(button, "type", "button");
    },
    m(target, anchor) {
      insert(target, p0, anchor);
      insert(target, t1, anchor);
      insert(target, p1, anchor);
      append2(p1, t2);
      append2(p1, span0);
      append2(span0, t3);
      append2(p1, t4);
      append2(p1, span2);
      append2(span2, select);
      append2(select, option0);
      append2(select, option1);
      select_option(
        select,
        /*level*/
        ctx[2],
        true
      );
      append2(span2, span1);
      mount_component(icon, span1, null);
      append2(p1, t7);
      if (if_block)
        if_block.m(p1, null);
      insert(target, t8, anchor);
      insert(target, p2, anchor);
      insert(target, t10, anchor);
      insert(target, button, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[8]
          ),
          listen(
            select,
            "change",
            /*changeUserLevel*/
            ctx[4]
          ),
          listen(
            button,
            "click",
            /*removeFromDocument*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*permission*/
      1) && t3_value !== (t3_value = /*permission*/
      ctx2[0].user_name + ""))
        set_data(t3, t3_value);
      if (dirty & /*level*/
      4) {
        select_option(
          select,
          /*level*/
          ctx2[2]
        );
      }
      if (current_block_type !== (current_block_type = select_block_type_1(ctx2, dirty))) {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(p1, null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p1);
      destroy_component(icon);
      if (if_block) {
        if_block.d();
      }
      if (detaching)
        detach(t8);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(button);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_if_block4, "create_if_block");
function create_if_block_22(ctx) {
  let t;
  return {
    c() {
      t = text2("they may read the document, but not change it.");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_if_block_22, "create_if_block_2");
function create_if_block_12(ctx) {
  let t;
  return {
    c() {
      t = text2("they may edit the document\u2019s content and title.");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_if_block_12, "create_if_block_1");
function create_fragment5(ctx) {
  let form;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block4, create_else_block3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*isOwner*/
      ctx2[1]
    )
      return 0;
    return 1;
  }
  __name(select_block_type, "select_block_type");
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      form = element2("form");
      if_block.c();
    },
    m(target, anchor) {
      insert(target, form, anchor);
      if_blocks[current_block_type_index].m(form, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(form, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(form);
      if_blocks[current_block_type_index].d();
    }
  };
}
__name(create_fragment5, "create_fragment");
function instance4($$self, $$props, $$invalidate) {
  let { plugin } = $$props;
  let { modal } = $$props;
  let { permission } = $$props;
  let { document: document2 } = $$props;
  let { isOwner } = $$props;
  let level = permission.level;
  function removeFromDocument() {
    var _a;
    (_a = plugin.api.permissions(document2.id)) === null || _a === void 0 ? void 0 : _a.delete(permission.user_id);
    modal.close();
  }
  __name(removeFromDocument, "removeFromDocument");
  function changeUserLevel() {
    var _a;
    if (level === "own")
      return;
    (_a = plugin.api.permissions(document2.id)) === null || _a === void 0 ? void 0 : _a.update(permission.user_id, level);
  }
  __name(changeUserLevel, "changeUserLevel");
  function select_change_handler() {
    level = select_value(this);
    $$invalidate(2, level);
  }
  __name(select_change_handler, "select_change_handler");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(5, plugin = $$props2.plugin);
    if ("modal" in $$props2)
      $$invalidate(6, modal = $$props2.modal);
    if ("permission" in $$props2)
      $$invalidate(0, permission = $$props2.permission);
    if ("document" in $$props2)
      $$invalidate(7, document2 = $$props2.document);
    if ("isOwner" in $$props2)
      $$invalidate(1, isOwner = $$props2.isOwner);
  };
  return [
    permission,
    isOwner,
    level,
    removeFromDocument,
    changeUserLevel,
    plugin,
    modal,
    document2,
    select_change_handler
  ];
}
__name(instance4, "instance");
var EditPermissionModalContent = class extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance4,
      create_fragment5,
      safe_not_equal,
      {
        plugin: 5,
        modal: 6,
        permission: 0,
        document: 7,
        isOwner: 1
      },
      add_css4
    );
  }
};
__name(EditPermissionModalContent, "EditPermissionModalContent");
var EditPermissionModalContent_default = EditPermissionModalContent;

// src/services/view/modal/edit-permission/EditPermissionModal.ts
var EditPermissionModal = class extends import_obsidian20.Modal {
  constructor(plugin, document2, permission, isOwner) {
    super(app);
    this.plugin = plugin;
    this.document = document2;
    this.permission = permission;
    this.isOwner = isOwner;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Change Access" }, (el) => {
      el.style.margin = "0 0 var(--size-4-4) 0";
    });
    const entrypoint = contentEl.createDiv("sg-modal-root");
    new EditPermissionModalContent_default({
      target: entrypoint,
      props: {
        plugin: this.plugin,
        modal: this,
        document: this.document,
        permission: this.permission,
        isOwner: this.isOwner
      }
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
__name(EditPermissionModal, "EditPermissionModal");

// src/services/view/components/Header.svelte
init_process_shim();
function add_css5(target) {
  append_styles(target, "svelte-yc1eof", 'h5.svelte-yc1eof::before{content:"";position:absolute;left:0;bottom:0;width:1px;height:var(--size-4-1);border-left:1px solid var(--text-accent)}h5.svelte-yc1eof{margin:0 0 var(--size-4-1) 0;padding:0 0 0 var(--size-4-1);position:relative;text-transform:uppercase;font-size:var(--font-smallest);border-bottom:1px solid var(--text-accent);color:var(--text-muted)}');
}
__name(add_css5, "add_css");
function create_fragment6(ctx) {
  let h5;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      h5 = element2("h5");
      if (default_slot)
        default_slot.c();
      attr(h5, "class", "svelte-yc1eof");
    },
    m(target, anchor) {
      insert(target, h5, anchor);
      if (default_slot) {
        default_slot.m(h5, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h5);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
__name(create_fragment6, "create_fragment");
function instance5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
__name(instance5, "instance");
var Header = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance5, create_fragment6, safe_not_equal, {}, add_css5);
  }
};
__name(Header, "Header");
var Header_default = Header;

// src/services/view/document/Permissions.svelte
function add_css6(target) {
  append_styles(target, "svelte-1seannr", ".sg-permissions-group.svelte-1seannr.svelte-1seannr{margin-bottom:var(--size-4-3)}.sg-permission.svelte-1seannr.svelte-1seannr{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.sg-permission.svelte-1seannr button.svelte-1seannr{background:none;box-shadow:none;color:var(--text-muted)}.sg-permission.svelte-1seannr button.svelte-1seannr:hover{color:var(--text-normal)}.sg-permission-user.svelte-1seannr.svelte-1seannr{font-weight:bold}");
}
__name(add_css6, "add_css");
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
__name(get_each_context3, "get_each_context");
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
__name(get_each_context_1, "get_each_context_1");
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
__name(get_each_context_2, "get_each_context_2");
function create_if_block_4(ctx) {
  let div;
  let header;
  let t;
  let current;
  header = new Header_default({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  let each_value_2 = (
    /*groupedByLevel*/
    ctx[1]["own"]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  return {
    c() {
      div = element2("div");
      create_component(header.$$.fragment);
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "sg-permissions-group svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(header, div, null);
      append2(div, t);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty & /*$$scope*/
      65536) {
        header_changes.$$scope = { dirty, ctx: ctx2 };
      }
      header.$set(header_changes);
      if (dirty & /*groupedByLevel*/
      2) {
        each_value_2 = /*groupedByLevel*/
        ctx2[1]["own"];
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(header);
      destroy_each(each_blocks, detaching);
    }
  };
}
__name(create_if_block_4, "create_if_block_4");
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text2("Own");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_default_slot_2, "create_default_slot_2");
function create_each_block_2(ctx) {
  let div1;
  let div0;
  let t0_value = (
    /*permission*/
    ctx[9].user_name + ""
  );
  let t0;
  let t1;
  return {
    c() {
      div1 = element2("div");
      div0 = element2("div");
      t0 = text2(t0_value);
      t1 = space();
      attr(div0, "class", "sg-permission-user svelte-1seannr");
      attr(div1, "class", "sg-permission svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append2(div1, div0);
      append2(div0, t0);
      append2(div1, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*groupedByLevel*/
      2 && t0_value !== (t0_value = /*permission*/
      ctx2[9].user_name + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
__name(create_each_block_2, "create_each_block_2");
function create_if_block_23(ctx) {
  let div;
  let header;
  let t;
  let current;
  header = new Header_default({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  let each_value_1 = (
    /*groupedByLevel*/
    ctx[1]["edit"]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  }), "out");
  return {
    c() {
      div = element2("div");
      create_component(header.$$.fragment);
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "sg-permissions-group svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(header, div, null);
      append2(div, t);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty & /*$$scope*/
      65536) {
        header_changes.$$scope = { dirty, ctx: ctx2 };
      }
      header.$set(header_changes);
      if (dirty & /*showEditPermissionModal, groupedByLevel, isOwner*/
      7) {
        each_value_1 = /*groupedByLevel*/
        ctx2[1]["edit"];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(header);
      destroy_each(each_blocks, detaching);
    }
  };
}
__name(create_if_block_23, "create_if_block_2");
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text2("Edit");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_default_slot_1, "create_default_slot_1");
function create_if_block_3(ctx) {
  let button;
  let icon;
  let current;
  let mounted;
  let dispose;
  icon = new Icon_default({ props: { name: "edit-2" } });
  function click_handler() {
    return (
      /*click_handler*/
      ctx[7](
        /*permission*/
        ctx[9]
      )
    );
  }
  __name(click_handler, "click_handler");
  return {
    c() {
      button = element2("button");
      create_component(icon.$$.fragment);
      attr(button, "type", "button");
      attr(button, "class", "svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(icon, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(icon);
      mounted = false;
      dispose();
    }
  };
}
__name(create_if_block_3, "create_if_block_3");
function create_each_block_1(ctx) {
  let div1;
  let div0;
  let t0_value = (
    /*permission*/
    ctx[9].user_name + ""
  );
  let t0;
  let t1;
  let t2;
  let current;
  let if_block = (
    /*isOwner*/
    (ctx[0] || /*permission*/
    ctx[9].is_you) && create_if_block_3(ctx)
  );
  return {
    c() {
      div1 = element2("div");
      div0 = element2("div");
      t0 = text2(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      attr(div0, "class", "sg-permission-user svelte-1seannr");
      attr(div1, "class", "sg-permission svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append2(div1, div0);
      append2(div0, t0);
      append2(div1, t1);
      if (if_block)
        if_block.m(div1, null);
      append2(div1, t2);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*groupedByLevel*/
      2) && t0_value !== (t0_value = /*permission*/
      ctx2[9].user_name + ""))
        set_data(t0, t0_value);
      if (
        /*isOwner*/
        ctx2[0] || /*permission*/
        ctx2[9].is_you
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*isOwner, groupedByLevel*/
          3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t2);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
    }
  };
}
__name(create_each_block_1, "create_each_block_1");
function create_if_block5(ctx) {
  let div;
  let header;
  let t;
  let current;
  header = new Header_default({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  let each_value = (
    /*groupedByLevel*/
    ctx[1]["read"]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  }), "out");
  return {
    c() {
      div = element2("div");
      create_component(header.$$.fragment);
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "sg-permissions-group svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(header, div, null);
      append2(div, t);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty & /*$$scope*/
      65536) {
        header_changes.$$scope = { dirty, ctx: ctx2 };
      }
      header.$set(header_changes);
      if (dirty & /*showEditPermissionModal, groupedByLevel, isOwner*/
      7) {
        each_value = /*groupedByLevel*/
        ctx2[1]["read"];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(header);
      destroy_each(each_blocks, detaching);
    }
  };
}
__name(create_if_block5, "create_if_block");
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text2("Read");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_default_slot, "create_default_slot");
function create_if_block_13(ctx) {
  let button;
  let icon;
  let current;
  let mounted;
  let dispose;
  icon = new Icon_default({ props: { name: "edit-2" } });
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[8](
        /*permission*/
        ctx[9]
      )
    );
  }
  __name(click_handler_1, "click_handler_1");
  return {
    c() {
      button = element2("button");
      create_component(icon.$$.fragment);
      attr(button, "type", "button");
      attr(button, "class", "svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(icon, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(icon);
      mounted = false;
      dispose();
    }
  };
}
__name(create_if_block_13, "create_if_block_1");
function create_each_block3(ctx) {
  let div1;
  let div0;
  let t0_value = (
    /*permission*/
    ctx[9].user_name + ""
  );
  let t0;
  let t1;
  let t2;
  let current;
  let if_block = (
    /*isOwner*/
    (ctx[0] || /*permission*/
    ctx[9].is_you) && create_if_block_13(ctx)
  );
  return {
    c() {
      div1 = element2("div");
      div0 = element2("div");
      t0 = text2(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      attr(div0, "class", "sg-permission-user svelte-1seannr");
      attr(div1, "class", "sg-permission svelte-1seannr");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append2(div1, div0);
      append2(div0, t0);
      append2(div1, t1);
      if (if_block)
        if_block.m(div1, null);
      append2(div1, t2);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & /*groupedByLevel*/
      2) && t0_value !== (t0_value = /*permission*/
      ctx2[9].user_name + ""))
        set_data(t0, t0_value);
      if (
        /*isOwner*/
        ctx2[0] || /*permission*/
        ctx2[9].is_you
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*isOwner, groupedByLevel*/
          3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_13(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t2);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
    }
  };
}
__name(create_each_block3, "create_each_block");
function create_fragment7(ctx) {
  var _a, _b, _c;
  let t0;
  let t1;
  let if_block2_anchor;
  let current;
  let if_block0 = (
    /*groupedByLevel*/
    ((_a = ctx[1]["own"]) == null ? void 0 : _a.length) > 0 && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*groupedByLevel*/
    ((_b = ctx[1]["edit"]) == null ? void 0 : _b.length) > 0 && create_if_block_23(ctx)
  );
  let if_block2 = (
    /*groupedByLevel*/
    ((_c = ctx[1]["read"]) == null ? void 0 : _c.length) > 0 && create_if_block5(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert(target, if_block2_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      var _a2, _b2, _c2;
      if (
        /*groupedByLevel*/
        ((_a2 = ctx2[1]["own"]) == null ? void 0 : _a2.length) > 0
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*groupedByLevel*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*groupedByLevel*/
        ((_b2 = ctx2[1]["edit"]) == null ? void 0 : _b2.length) > 0
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*groupedByLevel*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_23(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*groupedByLevel*/
        ((_c2 = ctx2[1]["read"]) == null ? void 0 : _c2.length) > 0
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*groupedByLevel*/
          2) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block5(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
__name(create_fragment7, "create_fragment");
function instance6($$self, $$props, $$invalidate) {
  var _a, _b;
  let { plugin } = $$props;
  let { document: document2 } = $$props;
  let isOwner = false;
  let groupedByLevel = {};
  function showEditPermissionModal(permission) {
    new EditPermissionModal(plugin, document2, permission, isOwner).open();
  }
  __name(showEditPermissionModal, "showEditPermissionModal");
  const click_handler = /* @__PURE__ */ __name((permission) => showEditPermissionModal(permission), "click_handler");
  const click_handler_1 = /* @__PURE__ */ __name((permission) => showEditPermissionModal(permission), "click_handler_1");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(3, plugin = $$props2.plugin);
    if ("document" in $$props2)
      $$invalidate(4, document2 = $$props2.document);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*document, _a, _b*/
    112) {
      $:
        if ($$invalidate(5, _a = document2.details) === null || _a === void 0 ? void 0 : _a.permissions) {
          $$invalidate(0, isOwner = $$invalidate(6, _b = document2.details) === null || _b === void 0 ? void 0 : _b.permissions.some((p) => p.is_you && p.level === "own"));
          $$invalidate(1, groupedByLevel = groupBy_default(document2.details.permissions, (p) => p.level));
        }
    }
  };
  return [
    isOwner,
    groupedByLevel,
    showEditPermissionModal,
    plugin,
    document2,
    _a,
    _b,
    click_handler,
    click_handler_1
  ];
}
__name(instance6, "instance");
var Permissions = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance6, create_fragment7, safe_not_equal, { plugin: 3, document: 4 }, add_css6);
  }
};
__name(Permissions, "Permissions");
var Permissions_default = Permissions;

// src/services/view/modal/invite/InviteModalContent.svelte
function add_css7(target) {
  append_styles(target, "svelte-206o1e", ".sg-invite-form.svelte-206o1e{display:flex;flex-direction:column;margin-top:var(--size-4-4)}.sg-invite-line.svelte-206o1e{display:flex;flex-direction:row}.sg-error-message.svelte-206o1e{font-size:var(--font-smaller);color:var(--text-error)}label.svelte-206o1e{text-transform:uppercase;font-size:var(--font-smaller);font-weight:bold;margin-bottom:var(--size-2-1)}input.svelte-206o1e{color:var(--text-accent)}p.svelte-206o1e{font-size:var(--font-smallest);color:var(--text-muted)}button.svelte-206o1e{align-self:center;padding:0 var(--size-4-4)}.sg-permissive-invites-container.svelte-206o1e{display:flex;flex-direction:row;align-items:center;font-weight:bold;margin-bottom:var(--size-4-2)}");
}
__name(add_css7, "add_css");
function get_each_context4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
__name(get_each_context4, "get_each_context");
function create_if_block_24(ctx) {
  let permissions;
  let current;
  permissions = new Permissions_default({
    props: {
      plugin: (
        /*plugin*/
        ctx[0]
      ),
      document: (
        /*document*/
        ctx[1]
      )
    }
  });
  return {
    c() {
      create_component(permissions.$$.fragment);
    },
    m(target, anchor) {
      mount_component(permissions, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const permissions_changes = {};
      if (dirty & /*plugin*/
      1)
        permissions_changes.plugin = /*plugin*/
        ctx2[0];
      if (dirty & /*document*/
      2)
        permissions_changes.document = /*document*/
        ctx2[1];
      permissions.$set(permissions_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(permissions.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(permissions.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(permissions, detaching);
    }
  };
}
__name(create_if_block_24, "create_if_block_2");
function create_if_block_14(ctx) {
  let header;
  let t0;
  let div;
  let input;
  let t1;
  let label;
  let current;
  let mounted;
  let dispose;
  header = new Header_default({
    props: {
      $$slots: { default: [create_default_slot2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      div = element2("div");
      input = element2("input");
      t1 = space();
      label = element2("label");
      label.textContent = "Allow collaborators to invite others";
      attr(input, "name", "permissive_invites");
      attr(input, "type", "checkbox");
      attr(input, "class", "svelte-206o1e");
      attr(label, "for", "permissive_invites");
      attr(label, "class", "svelte-206o1e");
      attr(div, "class", "sg-permissive-invites-container svelte-206o1e");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert(target, t0, anchor);
      insert(target, div, anchor);
      append2(div, input);
      input.checked = /*permissiveInvites*/
      ctx[3];
      append2(div, t1);
      append2(div, label);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input,
            "change",
            /*input_change_handler*/
            ctx[10]
          ),
          listen(
            input,
            "change",
            /*changePermissiveInvites*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      const header_changes = {};
      if (dirty & /*$$scope*/
      131072) {
        header_changes.$$scope = { dirty, ctx: ctx2 };
      }
      header.$set(header_changes);
      if (dirty & /*permissiveInvites*/
      8) {
        input.checked = /*permissiveInvites*/
        ctx2[3];
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_if_block_14, "create_if_block_1");
function create_default_slot2(ctx) {
  let t;
  return {
    c() {
      t = text2("Settings");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_default_slot2, "create_default_slot");
function create_each_block4(ctx) {
  let option;
  let t_value = (
    /*c*/
    ctx[14].name + ""
  );
  let t;
  let option_value_value;
  return {
    c() {
      option = element2("option");
      t = text2(t_value);
      option.__value = option_value_value = /*c*/
      ctx[14].email;
      option.value = option.__value;
    },
    m(target, anchor) {
      insert(target, option, anchor);
      append2(option, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*$knownCollaborators*/
      16 && t_value !== (t_value = /*c*/
      ctx2[14].name + ""))
        set_data(t, t_value);
      if (dirty & /*$knownCollaborators*/
      16 && option_value_value !== (option_value_value = /*c*/
      ctx2[14].email)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
__name(create_each_block4, "create_each_block");
function create_if_block6(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element2("span");
      t = text2(
        /*error*/
        ctx[2]
      );
      attr(span, "class", "sg-error-message svelte-206o1e");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append2(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*error*/
      4)
        set_data(
          t,
          /*error*/
          ctx2[2]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
__name(create_if_block6, "create_if_block");
function create_fragment8(ctx) {
  let t0;
  let t1;
  let form;
  let label;
  let t3;
  let div;
  let input;
  let t4;
  let datalist;
  let t5;
  let select;
  let option0;
  let option1;
  let t8;
  let p;
  let t10;
  let t11;
  let button;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*document*/
    ctx[1].details && create_if_block_24(ctx)
  );
  let if_block1 = (
    /*isOwner*/
    ctx[6] && create_if_block_14(ctx)
  );
  let each_value = (
    /*$knownCollaborators*/
    ctx[4]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
  }
  let if_block2 = (
    /*error*/
    ctx[2] !== null && create_if_block6(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      form = element2("form");
      label = element2("label");
      label.textContent = "Email Address";
      t3 = space();
      div = element2("div");
      input = element2("input");
      t4 = space();
      datalist = element2("datalist");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t5 = space();
      select = element2("select");
      option0 = element2("option");
      option0.textContent = "Edit";
      option1 = element2("option");
      option1.textContent = "Read";
      t8 = space();
      p = element2("p");
      p.textContent = "New collaborators receive an emailed invitation. If they accept, they\n		may add a copy of this note to their vault; your copies will stay in\n		sync without merge conflicts via screen.garden.";
      t10 = space();
      if (if_block2)
        if_block2.c();
      t11 = space();
      button = element2("button");
      button.textContent = "Invite";
      attr(label, "for", "email");
      attr(label, "class", "svelte-206o1e");
      set_style(input, "flex-grow", "1");
      set_style(input, "margin-right", "var(--size-4-2)");
      attr(input, "type", "text");
      attr(input, "name", "email");
      attr(input, "placeholder", "collaborator@email.com");
      attr(input, "list", "known-collaborators");
      attr(input, "class", "svelte-206o1e");
      attr(datalist, "id", "known-collaborators");
      option0.__value = "edit";
      option0.value = option0.__value;
      option1.__value = "read";
      option1.value = option1.__value;
      option1.disabled = true;
      attr(select, "name", "level");
      attr(div, "class", "sg-invite-line svelte-206o1e");
      attr(p, "class", "svelte-206o1e");
      attr(button, "type", "submit");
      attr(button, "class", "mod-cta svelte-206o1e");
      attr(form, "class", "sg-invite-form svelte-206o1e");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, t1, anchor);
      insert(target, form, anchor);
      append2(form, label);
      append2(form, t3);
      append2(form, div);
      append2(div, input);
      append2(div, t4);
      append2(div, datalist);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(datalist, null);
        }
      }
      append2(div, t5);
      append2(div, select);
      append2(select, option0);
      append2(select, option1);
      append2(form, t8);
      append2(form, p);
      append2(form, t10);
      if (if_block2)
        if_block2.m(form, null);
      append2(form, t11);
      append2(form, button);
      current = true;
      if (!mounted) {
        dispose = listen(
          form,
          "submit",
          /*submit_handler*/
          ctx[11]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*document*/
        ctx2[1].details
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*document*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_24(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*isOwner*/
        ctx2[6]
      )
        if_block1.p(ctx2, dirty);
      if (dirty & /*$knownCollaborators*/
      16) {
        each_value = /*$knownCollaborators*/
        ctx2[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context4(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block4(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(datalist, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (
        /*error*/
        ctx2[2] !== null
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block6(ctx2);
          if_block2.c();
          if_block2.m(form, t11);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(form);
      destroy_each(each_blocks, detaching);
      if (if_block2)
        if_block2.d();
      mounted = false;
      dispose();
    }
  };
}
__name(create_fragment8, "create_fragment");
function instance7($$self, $$props, $$invalidate) {
  let $knownCollaborators;
  var _a, _b;
  let { plugin } = $$props;
  let { document: document2 } = $$props;
  let { modal } = $$props;
  let error = null;
  const knownCollaborators = plugin.state.knownCollaborators;
  component_subscribe($$self, knownCollaborators, (value) => $$invalidate(4, $knownCollaborators = value));
  const isOwner = (_b = (_a = document2 === null || document2 === void 0 ? void 0 : document2.details) === null || _a === void 0 ? void 0 : _a.permissions.some((p) => p.level === "own" && p.is_you)) !== null && _b !== void 0 ? _b : false;
  function sendInvite(data) {
    var _a2, _b2, _c;
    return __awaiter(this, void 0, void 0, function* () {
      const email = (_a2 = data.get("email")) !== null && _a2 !== void 0 ? _a2 : "";
      const level = (_b2 = data.get("level")) !== null && _b2 !== void 0 ? _b2 : "";
      if (email.length === 0 || level.length === 0)
        return;
      $$invalidate(2, error = null);
      try {
        yield (_c = plugin.api.invitations) === null || _c === void 0 ? void 0 : _c.create({
          invitation: {
            document_id: document2.id,
            to_user_email: email,
            level
          }
        });
        modal.close();
      } catch (_d) {
        $$invalidate(2, error = "Failed to send invitation.");
      }
    });
  }
  __name(sendInvite, "sendInvite");
  let permissiveInvites = document2.permissive_invites;
  function changePermissiveInvites() {
    var _a2;
    if (!isOwner)
      return;
    (_a2 = plugin.api.documents) === null || _a2 === void 0 ? void 0 : _a2.update(document2.id, {
      document: { permissive_invites: permissiveInvites }
    });
  }
  __name(changePermissiveInvites, "changePermissiveInvites");
  function input_change_handler() {
    permissiveInvites = this.checked;
    $$invalidate(3, permissiveInvites);
  }
  __name(input_change_handler, "input_change_handler");
  const submit_handler = /* @__PURE__ */ __name((e) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      sendInvite(new FormData(e.target));
    }
  }, "submit_handler");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(0, plugin = $$props2.plugin);
    if ("document" in $$props2)
      $$invalidate(1, document2 = $$props2.document);
    if ("modal" in $$props2)
      $$invalidate(9, modal = $$props2.modal);
  };
  return [
    plugin,
    document2,
    error,
    permissiveInvites,
    $knownCollaborators,
    knownCollaborators,
    isOwner,
    sendInvite,
    changePermissiveInvites,
    modal,
    input_change_handler,
    submit_handler
  ];
}
__name(instance7, "instance");
var InviteModalContent = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance7, create_fragment8, safe_not_equal, { plugin: 0, document: 1, modal: 9 }, add_css7);
  }
};
__name(InviteModalContent, "InviteModalContent");
var InviteModalContent_default = InviteModalContent;

// src/services/view/modal/invite/InviteModal.ts
var InviteModal = class extends import_obsidian21.Modal {
  constructor(plugin, doc2) {
    super(app);
    this.plugin = plugin;
    this.doc = doc2;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Invite Collaborators" }, (el) => {
      el.style.margin = "0 0 var(--size-4-4) 0";
    });
    const entrypoint = contentEl.createDiv("sg-modal-root");
    new InviteModalContent_default({
      target: entrypoint,
      props: {
        plugin: this.plugin,
        document: this.doc,
        modal: this
      }
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
__name(InviteModal, "InviteModal");

// src/services/view/document/Change.svelte
init_process_shim();
var import_obsidian22 = require("obsidian");
function add_css8(target) {
  append_styles(target, "svelte-1346vcu", ".sg-change.svelte-1346vcu{position:relative;padding:var(--size-4-1)}.sg-change-caret.svelte-1346vcu{position:absolute;top:0;left:0;width:var(--size-4-2);height:var(--size-4-2);border-top:1px solid var(--text-accent);border-left:1px solid var(--text-accent)}.sg-change-username.svelte-1346vcu{font-weight:bold}.sg-emphasis.svelte-1346vcu{font-weight:bold}.sg-change-timestamp.svelte-1346vcu{color:var(--text-muted)}p.svelte-1346vcu{margin:0 0 var(--size-4-1) 0}");
}
__name(add_css8, "add_css");
function create_if_block_8(ctx) {
  let t0;
  let t1_value = (
    /*change*/
    ctx[0].detail.level + ""
  );
  let t1;
  let t2;
  return {
    c() {
      t0 = text2("rejected an invitation to ");
      t1 = text2(t1_value);
      t2 = text2(" this note");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
      insert(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*change*/
      1 && t1_value !== (t1_value = /*change*/
      ctx2[0].detail.level + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
    }
  };
}
__name(create_if_block_8, "create_if_block_8");
function create_if_block_7(ctx) {
  let t0;
  let t1_value = (
    /*change*/
    ctx[0].detail.level + ""
  );
  let t1;
  let t2;
  return {
    c() {
      t0 = text2("accepted an invitation to ");
      t1 = text2(t1_value);
      t2 = text2(" this note");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
      insert(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*change*/
      1 && t1_value !== (t1_value = /*change*/
      ctx2[0].detail.level + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
    }
  };
}
__name(create_if_block_7, "create_if_block_7");
function create_if_block_6(ctx) {
  var _a;
  let t0;
  let span;
  let t1_value = (
    /*change*/
    ((_a = ctx[0].detail.to_user_name) != null ? _a : (
      /*change*/
      ctx[0].detail.to_user_email
    )) + ""
  );
  let t1;
  let t2;
  let t3_value = (
    /*change*/
    ctx[0].detail.level + ""
  );
  let t3;
  let t4;
  return {
    c() {
      t0 = text2("invited\n			");
      span = element2("span");
      t1 = text2(t1_value);
      t2 = text2("\n			to ");
      t3 = text2(t3_value);
      t4 = text2(" this note");
      attr(span, "class", "sg-emphasis svelte-1346vcu");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, span, anchor);
      append2(span, t1);
      insert(target, t2, anchor);
      insert(target, t3, anchor);
      insert(target, t4, anchor);
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & /*change*/
      1 && t1_value !== (t1_value = /*change*/
      ((_a2 = ctx2[0].detail.to_user_name) != null ? _a2 : (
        /*change*/
        ctx2[0].detail.to_user_email
      )) + ""))
        set_data(t1, t1_value);
      if (dirty & /*change*/
      1 && t3_value !== (t3_value = /*change*/
      ctx2[0].detail.level + ""))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(t4);
    }
  };
}
__name(create_if_block_6, "create_if_block_6");
function create_if_block_42(ctx) {
  let if_block_anchor;
  function select_block_type_2(ctx2, dirty) {
    if (
      /*change*/
      ctx2[0].detail.user_id === /*change*/
      ctx2[0].user_id
    )
      return create_if_block_5;
    return create_else_block_1;
  }
  __name(select_block_type_2, "select_block_type_2");
  let current_block_type = select_block_type_2(ctx, -1);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_2(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
__name(create_if_block_42, "create_if_block_4");
function create_if_block_25(ctx) {
  let if_block_anchor;
  function select_block_type_1(ctx2, dirty) {
    if (
      /*change*/
      ctx2[0].detail.permissive_invites
    )
      return create_if_block_32;
    return create_else_block4;
  }
  __name(select_block_type_1, "select_block_type_1");
  let current_block_type = select_block_type_1(ctx, -1);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type_1(ctx2, dirty))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
__name(create_if_block_25, "create_if_block_2");
function create_if_block_15(ctx) {
  let t0;
  let span0;
  let t1_value = (
    /*change*/
    ctx[0].detail.old_title + ""
  );
  let t1;
  let t2;
  let span1;
  let t3_value = (
    /*change*/
    ctx[0].detail.new_title + ""
  );
  let t3;
  return {
    c() {
      t0 = text2("renamed this note from\n			");
      span0 = element2("span");
      t1 = text2(t1_value);
      t2 = text2("\n			to ");
      span1 = element2("span");
      t3 = text2(t3_value);
      attr(span0, "class", "sg-emphasis svelte-1346vcu");
      attr(span1, "class", "sg-emphasis svelte-1346vcu");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, span0, anchor);
      append2(span0, t1);
      insert(target, t2, anchor);
      insert(target, span1, anchor);
      append2(span1, t3);
    },
    p(ctx2, dirty) {
      if (dirty & /*change*/
      1 && t1_value !== (t1_value = /*change*/
      ctx2[0].detail.old_title + ""))
        set_data(t1, t1_value);
      if (dirty & /*change*/
      1 && t3_value !== (t3_value = /*change*/
      ctx2[0].detail.new_title + ""))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(span1);
    }
  };
}
__name(create_if_block_15, "create_if_block_1");
function create_if_block7(ctx) {
  let t;
  return {
    c() {
      t = text2("created this note");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop2,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_if_block7, "create_if_block");
function create_else_block_1(ctx) {
  let t0;
  let span;
  let t1_value = (
    /*change*/
    ctx[0].detail.user_name + ""
  );
  let t1;
  let t2;
  return {
    c() {
      t0 = text2("removed ");
      span = element2("span");
      t1 = text2(t1_value);
      t2 = text2(" from this document");
      attr(span, "class", "sg-emphasis svelte-1346vcu");
    },
    m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, span, anchor);
      append2(span, t1);
      insert(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*change*/
      1 && t1_value !== (t1_value = /*change*/
      ctx2[0].detail.user_name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
      if (detaching)
        detach(t2);
    }
  };
}
__name(create_else_block_1, "create_else_block_1");
function create_if_block_5(ctx) {
  let t;
  return {
    c() {
      t = text2("left this document");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop2,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_if_block_5, "create_if_block_5");
function create_else_block4(ctx) {
  let t;
  return {
    c() {
      t = text2("disallowed collaborators from inviting others");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_else_block4, "create_else_block");
function create_if_block_32(ctx) {
  let t;
  return {
    c() {
      t = text2("allowed collaborators to invite others");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
__name(create_if_block_32, "create_if_block_3");
function create_fragment9(ctx) {
  let div1;
  let div0;
  let t0;
  let p;
  let span0;
  let t1_value = (
    /*change*/
    ctx[0].user_name + ""
  );
  let t1;
  let t2;
  let t3;
  let span1;
  let t4_value = (
    /*formatTimestamp*/
    ctx[1](
      /*change*/
      ctx[0].timestamp
    ) + ""
  );
  let t4;
  function select_block_type(ctx2, dirty) {
    if (
      /*change*/
      ctx2[0].type === "created"
    )
      return create_if_block7;
    if (
      /*change*/
      ctx2[0].type === "retitled"
    )
      return create_if_block_15;
    if (
      /*change*/
      ctx2[0].type === "settings_changed"
    )
      return create_if_block_25;
    if (
      /*change*/
      ctx2[0].type === "user_removed"
    )
      return create_if_block_42;
    if (
      /*change*/
      ctx2[0].type === "invitation_sent"
    )
      return create_if_block_6;
    if (
      /*change*/
      ctx2[0].type === "invitation_accepted"
    )
      return create_if_block_7;
    if (
      /*change*/
      ctx2[0].type === "invitation_rejected"
    )
      return create_if_block_8;
  }
  __name(select_block_type, "select_block_type");
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div1 = element2("div");
      div0 = element2("div");
      t0 = space();
      p = element2("p");
      span0 = element2("span");
      t1 = text2(t1_value);
      t2 = space();
      if (if_block)
        if_block.c();
      t3 = space();
      span1 = element2("span");
      t4 = text2(t4_value);
      attr(div0, "class", "sg-change-caret svelte-1346vcu");
      attr(span0, "class", "sg-change-username svelte-1346vcu");
      attr(span1, "class", "sg-change-timestamp svelte-1346vcu");
      attr(p, "class", "svelte-1346vcu");
      attr(div1, "class", "sg-change svelte-1346vcu");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append2(div1, div0);
      append2(div1, t0);
      append2(div1, p);
      append2(p, span0);
      append2(span0, t1);
      append2(p, t2);
      if (if_block)
        if_block.m(p, null);
      append2(p, t3);
      append2(p, span1);
      append2(span1, t4);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*change*/
      1 && t1_value !== (t1_value = /*change*/
      ctx2[0].user_name + ""))
        set_data(t1, t1_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(p, t3);
        }
      }
      if (dirty & /*change*/
      1 && t4_value !== (t4_value = /*formatTimestamp*/
      ctx2[1](
        /*change*/
        ctx2[0].timestamp
      ) + ""))
        set_data(t4, t4_value);
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block) {
        if_block.d();
      }
    }
  };
}
__name(create_fragment9, "create_fragment");
function instance8($$self, $$props, $$invalidate) {
  let { change } = $$props;
  function formatTimestamp(ts) {
    return (0, import_obsidian22.moment)(new Date(ts + "Z")).fromNow();
  }
  __name(formatTimestamp, "formatTimestamp");
  $$self.$$set = ($$props2) => {
    if ("change" in $$props2)
      $$invalidate(0, change = $$props2.change);
  };
  return [change, formatTimestamp];
}
__name(instance8, "instance");
var Change = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance8, create_fragment9, safe_not_equal, { change: 0 }, add_css8);
  }
};
__name(Change, "Change");
var Change_default = Change;

// src/services/view/document/Document.svelte
var import_obsidian23 = require("obsidian");
function add_css9(target) {
  append_styles(target, "svelte-1sq9joy", "h4.svelte-1sq9joy.svelte-1sq9joy{margin:0 0 var(--size-4-2) 0;padding:0}.sg-document-section.svelte-1sq9joy.svelte-1sq9joy{padding-left:var(--size-4-1);margin-bottom:var(--size-4-8)}ol.svelte-1sq9joy.svelte-1sq9joy{list-style:none;padding:0;margin:0}.sg-p-emphasis.svelte-1sq9joy.svelte-1sq9joy{font-weight:600}.sg-document-header.svelte-1sq9joy.svelte-1sq9joy{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.sg-document-header.svelte-1sq9joy small.svelte-1sq9joy{color:var(--text-faint)}.sg-web-url.svelte-1sq9joy.svelte-1sq9joy{display:flex;flex-direction:row;align-items:center;width:100%}.sg-web-url-copy.svelte-1sq9joy.svelte-1sq9joy{flex:1;cursor:pointer}.sg-web-url.svelte-1sq9joy input.svelte-1sq9joy{width:100%;padding-left:0;pointer-events:none;border-radius:var(--input-radius) 0 0 var(--input-radius)}.sg-web-url.svelte-1sq9joy a.svelte-1sq9joy{border-radius:0 var(--button-radius) var(--button-radius) 0}");
}
__name(add_css9, "add_css");
function get_each_context5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[24] = list[i];
  return child_ctx;
}
__name(get_each_context5, "get_each_context");
function create_else_block_2(ctx) {
  let loggedout;
  let current;
  loggedout = new LoggedOut_default({});
  return {
    c() {
      create_component(loggedout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(loggedout, target, anchor);
      current = true;
    },
    p: noop2,
    i(local) {
      if (current)
        return;
      transition_in(loggedout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loggedout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(loggedout, detaching);
    }
  };
}
__name(create_else_block_2, "create_else_block_2");
function create_if_block8(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_16, create_if_block_33, create_else_block_12];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (!/*$currentLocalDocument*/
    ctx2[4])
      return 0;
    if (
      /*$currentLocalDocument*/
      ctx2[4].details
    )
      return 1;
    return 2;
  }
  __name(select_block_type_1, "select_block_type_1");
  current_block_type_index = select_block_type_1(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
__name(create_if_block8, "create_if_block");
function create_else_block_12(ctx) {
  let p;
  return {
    c() {
      p = element2("p");
      p.textContent = "Loading...";
    },
    m(target, anchor) {
      insert(target, p, anchor);
    },
    p: noop2,
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
__name(create_else_block_12, "create_else_block_1");
function create_if_block_33(ctx) {
  let header0;
  let h40;
  let t1;
  let icon0;
  let t2;
  let div2;
  let div1;
  let div0;
  let input;
  let input_value_value;
  let t3;
  let a;
  let icon1;
  let a_href_value;
  let t4;
  let header1;
  let h41;
  let t6;
  let t7;
  let div3;
  let permissions;
  let t8;
  let t9;
  let t10;
  let h42;
  let t12;
  let div4;
  let ol;
  let t13;
  let if_block3_anchor;
  let current;
  let mounted;
  let dispose;
  icon0 = new Icon_default({
    props: {
      name: "help-circle",
      "aria-label": "Every note you\u2019ve added to screen.garden has its own web page. Notes you have edit access to can be edited directly from the web. You may also access version control there.",
      class: "sg-help"
    }
  });
  icon1 = new Icon_default({ props: { name: "arrow-up-right" } });
  let if_block0 = (
    /*canInviteOthers*/
    ctx[2] && /*totalCollaboratorsQuota*/
    ctx[5] && create_if_block_72(ctx)
  );
  permissions = new Permissions_default({
    props: {
      plugin: (
        /*plugin*/
        ctx[0]
      ),
      document: (
        /*$currentLocalDocument*/
        ctx[4]
      )
    }
  });
  let if_block1 = (
    /*canInviteOthers*/
    ctx[2] && create_if_block_62(ctx)
  );
  let if_block2 = (
    /*documentInvitations*/
    ctx[6].length > 0 && create_if_block_52(ctx)
  );
  let each_value = (
    /*$currentLocalDocument*/
    ctx[4].details.changes
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block5(get_each_context5(ctx, each_value, i));
  }
  const out = /* @__PURE__ */ __name((i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  }), "out");
  let if_block3 = (
    /*isOwner*/
    ctx[1] && create_if_block_43(ctx)
  );
  return {
    c() {
      header0 = element2("header");
      h40 = element2("h4");
      h40.textContent = "Web";
      t1 = space();
      create_component(icon0.$$.fragment);
      t2 = space();
      div2 = element2("div");
      div1 = element2("div");
      div0 = element2("div");
      input = element2("input");
      t3 = space();
      a = element2("a");
      create_component(icon1.$$.fragment);
      t4 = space();
      header1 = element2("header");
      h41 = element2("h4");
      h41.textContent = "Collaborators";
      t6 = space();
      if (if_block0)
        if_block0.c();
      t7 = space();
      div3 = element2("div");
      create_component(permissions.$$.fragment);
      t8 = space();
      if (if_block1)
        if_block1.c();
      t9 = space();
      if (if_block2)
        if_block2.c();
      t10 = space();
      h42 = element2("h4");
      h42.textContent = "History";
      t12 = space();
      div4 = element2("div");
      ol = element2("ol");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t13 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      attr(h40, "class", "svelte-1sq9joy");
      attr(header0, "class", "sg-document-header svelte-1sq9joy");
      attr(input, "type", "text");
      input.disabled = true;
      input.value = input_value_value = /*$currentLocalDocument*/
      ctx[4].urls.edit;
      attr(input, "class", "svelte-1sq9joy");
      attr(div0, "class", "sg-web-url-copy svelte-1sq9joy");
      attr(a, "class", "sg-btn svelte-1sq9joy");
      attr(a, "href", a_href_value = /*$currentLocalDocument*/
      ctx[4].urls.edit);
      attr(a, "title", "Open on web");
      attr(div1, "class", "sg-web-url svelte-1sq9joy");
      attr(div2, "class", "sg-document-section svelte-1sq9joy");
      attr(h41, "class", "svelte-1sq9joy");
      attr(header1, "class", "sg-document-header svelte-1sq9joy");
      attr(div3, "class", "sg-document-section svelte-1sq9joy");
      attr(h42, "class", "svelte-1sq9joy");
      attr(ol, "class", "sg-change-history svelte-1sq9joy");
      attr(div4, "class", "sg-document-section svelte-1sq9joy");
    },
    m(target, anchor) {
      insert(target, header0, anchor);
      append2(header0, h40);
      append2(header0, t1);
      mount_component(icon0, header0, null);
      insert(target, t2, anchor);
      insert(target, div2, anchor);
      append2(div2, div1);
      append2(div1, div0);
      append2(div0, input);
      ctx[18](input);
      append2(div1, t3);
      append2(div1, a);
      mount_component(icon1, a, null);
      insert(target, t4, anchor);
      insert(target, header1, anchor);
      append2(header1, h41);
      append2(header1, t6);
      if (if_block0)
        if_block0.m(header1, null);
      insert(target, t7, anchor);
      insert(target, div3, anchor);
      mount_component(permissions, div3, null);
      append2(div3, t8);
      if (if_block1)
        if_block1.m(div3, null);
      insert(target, t9, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert(target, t10, anchor);
      insert(target, h42, anchor);
      insert(target, t12, anchor);
      insert(target, div4, anchor);
      append2(div4, ol);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ol, null);
        }
      }
      insert(target, t13, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert(target, if_block3_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div0,
            "click",
            /*copyEditURL*/
            ctx[13]
          ),
          listen(
            div0,
            "keydown",
            /*keydown_handler*/
            ctx[19]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*$currentLocalDocument*/
      16 && input_value_value !== (input_value_value = /*$currentLocalDocument*/
      ctx2[4].urls.edit) && input.value !== input_value_value) {
        input.value = input_value_value;
      }
      if (!current || dirty & /*$currentLocalDocument*/
      16 && a_href_value !== (a_href_value = /*$currentLocalDocument*/
      ctx2[4].urls.edit)) {
        attr(a, "href", a_href_value);
      }
      if (
        /*canInviteOthers*/
        ctx2[2] && /*totalCollaboratorsQuota*/
        ctx2[5]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_72(ctx2);
          if_block0.c();
          if_block0.m(header1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      const permissions_changes = {};
      if (dirty & /*plugin*/
      1)
        permissions_changes.plugin = /*plugin*/
        ctx2[0];
      if (dirty & /*$currentLocalDocument*/
      16)
        permissions_changes.document = /*$currentLocalDocument*/
        ctx2[4];
      permissions.$set(permissions_changes);
      if (
        /*canInviteOthers*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_62(ctx2);
          if_block1.c();
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*documentInvitations*/
        ctx2[6].length > 0
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*documentInvitations*/
          64) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_52(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(t10.parentNode, t10);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (dirty & /*$currentLocalDocument*/
      16) {
        each_value = /*$currentLocalDocument*/
        ctx2[4].details.changes;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context5(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block5(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ol, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (
        /*isOwner*/
        ctx2[1]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_43(ctx2);
          if_block3.c();
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(permissions.$$.fragment, local);
      transition_in(if_block2);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(permissions.$$.fragment, local);
      transition_out(if_block2);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(header0);
      destroy_component(icon0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div2);
      ctx[18](null);
      destroy_component(icon1);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(header1);
      if (if_block0)
        if_block0.d();
      if (detaching)
        detach(t7);
      if (detaching)
        detach(div3);
      destroy_component(permissions);
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t9);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(h42);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(div4);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t13);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach(if_block3_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_if_block_33, "create_if_block_3");
function create_if_block_16(ctx) {
  let div;
  function select_block_type_2(ctx2, dirty) {
    var _a;
    if (
      /*$currentFile*/
      ((_a = ctx2[7]) == null ? void 0 : _a.extension) === "md"
    )
      return create_if_block_26;
    return create_else_block5;
  }
  __name(select_block_type_2, "select_block_type_2");
  let current_block_type = select_block_type_2(ctx, -1);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element2("div");
      if_block.c();
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_2(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
__name(create_if_block_16, "create_if_block_1");
function create_if_block_72(ctx) {
  let small;
  let t0_value = (
    /*totalCollaboratorsQuota*/
    ctx[5].consumed + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*totalCollaboratorsQuota*/
    ctx[5].allotment + ""
  );
  let t2;
  let small_aria_label_value;
  return {
    c() {
      small = element2("small");
      t0 = text2(t0_value);
      t1 = text2(" / ");
      t2 = text2(t2_value);
      attr(small, "aria-label", small_aria_label_value = `Currently using ${/*totalCollaboratorsQuota*/
      ctx[5].consumed} of the ${/*totalCollaboratorsQuota*/
      ctx[5].allotment} collaboration slots for this document`);
      attr(small, "class", "svelte-1sq9joy");
    },
    m(target, anchor) {
      insert(target, small, anchor);
      append2(small, t0);
      append2(small, t1);
      append2(small, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*totalCollaboratorsQuota*/
      32 && t0_value !== (t0_value = /*totalCollaboratorsQuota*/
      ctx2[5].consumed + ""))
        set_data(t0, t0_value);
      if (dirty & /*totalCollaboratorsQuota*/
      32 && t2_value !== (t2_value = /*totalCollaboratorsQuota*/
      ctx2[5].allotment + ""))
        set_data(t2, t2_value);
      if (dirty & /*totalCollaboratorsQuota*/
      32 && small_aria_label_value !== (small_aria_label_value = `Currently using ${/*totalCollaboratorsQuota*/
      ctx2[5].consumed} of the ${/*totalCollaboratorsQuota*/
      ctx2[5].allotment} collaboration slots for this document`)) {
        attr(small, "aria-label", small_aria_label_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(small);
    }
  };
}
__name(create_if_block_72, "create_if_block_7");
function create_if_block_62(ctx) {
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      button = element2("button");
      button.textContent = "Invite others";
      attr(button, "class", "mod-cta");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[20]
        );
        mounted = true;
      }
    },
    p: noop2,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
__name(create_if_block_62, "create_if_block_6");
function create_if_block_52(ctx) {
  let h4;
  let t1;
  let invitations_1;
  let current;
  invitations_1 = new Invitations_default({
    props: {
      invitations: (
        /*documentInvitations*/
        ctx[6]
      ),
      $$slots: {
        default: [
          create_default_slot3,
          ({ invitation }) => ({ 27: invitation }),
          ({ invitation }) => invitation ? 134217728 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      h4 = element2("h4");
      h4.textContent = "Pending Invites";
      t1 = space();
      create_component(invitations_1.$$.fragment);
      attr(h4, "class", "svelte-1sq9joy");
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      insert(target, t1, anchor);
      mount_component(invitations_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const invitations_1_changes = {};
      if (dirty & /*documentInvitations*/
      64)
        invitations_1_changes.invitations = /*documentInvitations*/
        ctx2[6];
      if (dirty & /*$$scope, invitation*/
      402653184) {
        invitations_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      invitations_1.$set(invitations_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(invitations_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(invitations_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h4);
      if (detaching)
        detach(t1);
      destroy_component(invitations_1, detaching);
    }
  };
}
__name(create_if_block_52, "create_if_block_5");
function create_default_slot3(ctx) {
  let button;
  let mounted;
  let dispose;
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[21](
        /*invitation*/
        ctx[27]
      )
    );
  }
  __name(click_handler_1, "click_handler_1");
  return {
    c() {
      button = element2("button");
      button.textContent = "Revoke";
      attr(button, "class", "mod-warning");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (!mounted) {
        dispose = listen(button, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
__name(create_default_slot3, "create_default_slot");
function create_each_block5(ctx) {
  let li;
  let change;
  let current;
  change = new Change_default({ props: { change: (
    /*change*/
    ctx[24]
  ) } });
  return {
    c() {
      li = element2("li");
      create_component(change.$$.fragment);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(change, li, null);
      current = true;
    },
    p(ctx2, dirty) {
      const change_changes = {};
      if (dirty & /*$currentLocalDocument*/
      16)
        change_changes.change = /*change*/
        ctx2[24];
      change.$set(change_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(change.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(change.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(change);
    }
  };
}
__name(create_each_block5, "create_each_block");
function create_if_block_43(ctx) {
  let h4;
  let t1;
  let div;
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      h4 = element2("h4");
      h4.textContent = "Settings";
      t1 = space();
      div = element2("div");
      button = element2("button");
      button.textContent = "Delete from screen.garden";
      attr(h4, "class", "svelte-1sq9joy");
      attr(button, "class", "mod-warning");
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      append2(div, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*deleteFromCloud*/
          ctx[16]
        );
        mounted = true;
      }
    },
    p: noop2,
    d(detaching) {
      if (detaching)
        detach(h4);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
__name(create_if_block_43, "create_if_block_4");
function create_else_block5(ctx) {
  let p;
  return {
    c() {
      p = element2("p");
      p.textContent = "This file type is not currently eligible for use in\n					screen.garden.";
    },
    m(target, anchor) {
      insert(target, p, anchor);
    },
    p: noop2,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
__name(create_else_block5, "create_else_block");
function create_if_block_26(ctx) {
  let button;
  let t1;
  let p;
  let mounted;
  let dispose;
  return {
    c() {
      button = element2("button");
      button.textContent = "Add to screen.garden";
      t1 = space();
      p = element2("p");
      p.innerHTML = `This note exists in your personal vault. Click <span class="sg-p-emphasis svelte-1sq9joy">Add to screen.garden</span> to enable collaboration, then invite others to work on this
					note with you.`;
      attr(button, "class", "mod-cta");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      insert(target, t1, anchor);
      insert(target, p, anchor);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*addThisDocument*/
          ctx[14]
        );
        mounted = true;
      }
    },
    p: noop2,
    d(detaching) {
      if (detaching)
        detach(button);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
      mounted = false;
      dispose();
    }
  };
}
__name(create_if_block_26, "create_if_block_2");
function create_fragment10(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block8, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$loggedIn*/
      ctx2[8]
    )
      return 0;
    return 1;
  }
  __name(select_block_type, "select_block_type");
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
__name(create_fragment10, "create_fragment");
function instance9($$self, $$props, $$invalidate) {
  let $currentLocalDocument;
  let $currentFile;
  let $invitations;
  let $loggedIn;
  var _a, _b;
  let { plugin } = $$props;
  const loggedIn = plugin.state.loggedIn;
  component_subscribe($$self, loggedIn, (value) => $$invalidate(8, $loggedIn = value));
  const currentFile = plugin.state.currentMarkdownFile;
  component_subscribe($$self, currentFile, (value) => $$invalidate(7, $currentFile = value));
  const currentLocalDocument = plugin.state.currentLocalDocument;
  component_subscribe($$self, currentLocalDocument, (value) => $$invalidate(4, $currentLocalDocument = value));
  const invitations = plugin.state.invitations;
  component_subscribe($$self, invitations, (value) => $$invalidate(17, $invitations = value));
  let isOwner = false;
  let canInviteOthers = (_a = $currentLocalDocument === null || $currentLocalDocument === void 0 ? void 0 : $currentLocalDocument.permissive_invites) !== null && _a !== void 0 ? _a : false;
  let totalCollaboratorsQuota = (_b = $currentLocalDocument === null || $currentLocalDocument === void 0 ? void 0 : $currentLocalDocument.details) === null || _b === void 0 ? void 0 : _b.quotas["document_total_collaborators_count" /* DOCUMENT_TOTAL_COLLABORATORS_COUNT */];
  let documentInvitations;
  let editURLInput;
  function copyEditURL() {
    if (!$currentLocalDocument)
      return;
    navigator.clipboard.writeText($currentLocalDocument.urls.edit);
    new import_obsidian23.Notice("Copied note URL to clipboard.");
  }
  __name(copyEditURL, "copyEditURL");
  function addThisDocument() {
    if (!$currentFile)
      return;
    plugin.addFileToScreenGarden($currentFile);
  }
  __name(addThisDocument, "addThisDocument");
  function revokeInvitation(invite) {
    plugin.state.rejectInvitation(invite);
  }
  __name(revokeInvitation, "revokeInvitation");
  function deleteFromCloud() {
    if (!$currentFile || !$currentLocalDocument)
      return;
    plugin.promptForCloudDeletion($currentFile, $currentLocalDocument.id);
  }
  __name(deleteFromCloud, "deleteFromCloud");
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      editURLInput = $$value;
      $$invalidate(3, editURLInput), $$invalidate(4, $currentLocalDocument), $$invalidate(17, $invitations);
    });
  }
  __name(input_binding, "input_binding");
  const keydown_handler = /* @__PURE__ */ __name((e) => {
    if (e.key === "Enter")
      copyEditURL();
  }, "keydown_handler");
  const click_handler = /* @__PURE__ */ __name(async () => {
    new InviteModal(plugin, $currentLocalDocument).open();
  }, "click_handler");
  const click_handler_1 = /* @__PURE__ */ __name((invitation) => revokeInvitation(invitation), "click_handler_1");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(0, plugin = $$props2.plugin);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$currentLocalDocument, plugin*/
    17) {
      $:
        if ($currentLocalDocument && ($currentLocalDocument === null || $currentLocalDocument === void 0 ? void 0 : $currentLocalDocument.details) === null) {
          plugin.state.loadDetails($currentLocalDocument.id);
        }
    }
    if ($$self.$$.dirty & /*$currentLocalDocument, canInviteOthers, isOwner*/
    22) {
      $:
        if ($currentLocalDocument && $currentLocalDocument.details) {
          const permission = $currentLocalDocument.details.permissions.find((p) => p.is_you);
          if (permission) {
            $$invalidate(1, isOwner = permission.level === "own");
            $$invalidate(2, canInviteOthers = canInviteOthers || isOwner);
          }
          $$invalidate(5, totalCollaboratorsQuota = $currentLocalDocument.details.quotas["document_total_collaborators_count" /* DOCUMENT_TOTAL_COLLABORATORS_COUNT */]);
        }
    }
    if ($$self.$$.dirty & /*$currentLocalDocument, $invitations, editURLInput*/
    131096) {
      $:
        if ($currentLocalDocument) {
          const _invites = [];
          for (const invite of $invitations) {
            if (!invite.to_you && invite.document_id === $currentLocalDocument.id) {
              _invites.push(invite);
            }
          }
          $$invalidate(6, documentInvitations = _invites);
          if (editURLInput) {
            $$invalidate(3, editURLInput.scrollLeft = editURLInput.scrollWidth, editURLInput);
          }
        }
    }
  };
  return [
    plugin,
    isOwner,
    canInviteOthers,
    editURLInput,
    $currentLocalDocument,
    totalCollaboratorsQuota,
    documentInvitations,
    $currentFile,
    $loggedIn,
    loggedIn,
    currentFile,
    currentLocalDocument,
    invitations,
    copyEditURL,
    addThisDocument,
    revokeInvitation,
    deleteFromCloud,
    $invitations,
    input_binding,
    keydown_handler,
    click_handler,
    click_handler_1
  ];
}
__name(instance9, "instance");
var Document = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance9, create_fragment10, safe_not_equal, { plugin: 0 }, add_css9);
  }
};
__name(Document, "Document");
var Document_default = Document;

// src/services/view/document/DocumentPane.ts
var DocumentPane = class extends View {
  constructor(plugin, leaf) {
    super(plugin, leaf);
  }
  static PlaceInLeaf(workspace) {
    return workspace.getRightLeaf(false);
  }
  getDisplayText() {
    return displayTextFor("note");
  }
  getIcon() {
    return "cloud-cog";
  }
  async onOpen() {
    this.root = new Document_default({
      target: this.contentEl,
      props: {
        plugin: this.plugin
      }
    });
    this.u_currentLocalDocument = this.plugin.state.currentLocalDocument.subscribe((doc2) => {
      var _a;
      const name = (_a = doc2 == null ? void 0 : doc2.title) != null ? _a : "note";
      const title = displayTextFor(name);
      this.leaf.tabHeaderEl.ariaLabel = title;
      this.leaf.tabHeaderInnerTitleEl.innerText = title;
      this.leaf.view.titleEl = title;
    });
  }
  async onClose() {
    this.root.$destroy();
    this.u_currentLocalDocument();
  }
};
__name(DocumentPane, "DocumentPane");
DocumentPane.ViewType = /* @__PURE__ */ __name(() => "screen-garden-document-pane" /* DocumentPane */, "ViewType");
function displayTextFor(noteName) {
  return `screen.garden settings for ${noteName}`;
}
__name(displayTextFor, "displayTextFor");

// src/services/view/user/index.ts
init_process_shim();

// src/services/view/user/UserPane.ts
init_process_shim();

// src/services/view/user/User.svelte
init_process_shim();
var import_obsidian25 = require("obsidian");

// src/services/view/modal/confirm/index.ts
init_process_shim();

// src/services/view/modal/confirm/ConfirmModal.ts
init_process_shim();
var import_obsidian24 = require("obsidian");
var ConfirmModal = class extends import_obsidian24.Modal {
  constructor(title, description, acceptTitle, onAccept, destructive = false, cancelTitle = "Cancel", onCancel = () => {
    this.close();
  }) {
    super(app);
    this.title = title;
    this.description = description;
    this.acceptTitle = acceptTitle;
    this.onAccept = onAccept;
    this.destructive = destructive;
    this.cancelTitle = cancelTitle;
    this.onCancel = onCancel;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: this.title }, (el) => {
      el.style.margin = "0 0 var(--size-4-4) 0";
    });
    contentEl.createEl("p", { text: this.description }, (el) => {
      el.style.margin = "0 0 var(--size-4-4) 0";
    });
    const buttonsContainer = contentEl.createDiv(void 0, (el) => {
      el.style.display = "flex";
      el.style.flexDirection = "row";
      el.style.justifyContent = "center";
      el.style.alignItems = "center";
    });
    buttonsContainer.createEl(
      "button",
      {
        cls: this.destructive ? "mod-warning" : "mod-cta",
        text: this.acceptTitle
      },
      (el) => {
        el.style.margin = "var(--size-4-2)";
        el.onclick = () => {
          this.onAccept();
          this.close();
        };
      }
    );
    buttonsContainer.createEl("button", { text: this.cancelTitle }, (el) => {
      el.style.margin = "var(--size-4-2)";
      el.onclick = this.onCancel;
    });
  }
};
__name(ConfirmModal, "ConfirmModal");

// src/services/view/user/User.svelte
function add_css10(target) {
  append_styles(target, "svelte-1lqo8c5", ".sg-dot.svelte-1lqo8c5.svelte-1lqo8c5{color:#20b03f}h1.svelte-1lqo8c5.svelte-1lqo8c5{font-size:1.4rem}h4.svelte-1lqo8c5.svelte-1lqo8c5{padding:0;margin:0.3rem 0}.sg-pane-header.svelte-1lqo8c5.svelte-1lqo8c5{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.sg-pane-header.svelte-1lqo8c5 button.svelte-1lqo8c5{box-shadow:none;background-color:inherit}.sg-pane-header.svelte-1lqo8c5 button.svelte-1lqo8c5:hover{color:var(--text-accent)}ul.svelte-1lqo8c5.svelte-1lqo8c5{list-style:none;padding:0;margin:0}p.svelte-1lqo8c5.svelte-1lqo8c5{padding:0;margin:0}p.path.svelte-1lqo8c5.svelte-1lqo8c5{font-style:italic;color:var(--text-faint)}.sg-documents-list.svelte-1lqo8c5.svelte-1lqo8c5{margin-bottom:1rem}.sg-document.svelte-1lqo8c5.svelte-1lqo8c5{margin-bottom:var(--size-2-1);display:flex;flex-direction:column;border-radius:var(--radius-s);cursor:var(--cursor);color:var(--nav-item-color);font-size:var(--nav-item-size);font-weight:var(--nav-item-weight);line-height:var(--line-height-tight);padding:2px}.sg-document.svelte-1lqo8c5.svelte-1lqo8c5:hover{color:var(--nav-item-color-active);background-color:var(--nav-item-background-active);font-weight:var(--nav-item-weight-active)}.sg-explain.svelte-1lqo8c5.svelte-1lqo8c5{cursor:help}.sg-header-row.svelte-1lqo8c5.svelte-1lqo8c5{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.sg-header-row.svelte-1lqo8c5 small.svelte-1lqo8c5{color:var(--text-faint)}.spin{animation-name:svelte-1lqo8c5-spin;animation-duration:2000ms;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes svelte-1lqo8c5-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}");
}
__name(add_css10, "add_css");
function get_each_context6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  return child_ctx;
}
__name(get_each_context6, "get_each_context");
function get_each_context_12(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[34] = list[i].id;
  child_ctx[35] = list[i].title;
  child_ctx[36] = list[i].path;
  return child_ctx;
}
__name(get_each_context_12, "get_each_context_1");
function create_else_block6(ctx) {
  let loggedout;
  let current;
  loggedout = new LoggedOut_default({});
  return {
    c() {
      create_component(loggedout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(loggedout, target, anchor);
      current = true;
    },
    p: noop2,
    i(local) {
      if (current)
        return;
      transition_in(loggedout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loggedout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(loggedout, detaching);
    }
  };
}
__name(create_else_block6, "create_else_block");
function create_if_block9(ctx) {
  let t0;
  let div;
  let header;
  let h4;
  let t2;
  let t3;
  let ul;
  let t4;
  let if_block2_anchor;
  let current;
  let if_block0 = (
    /*$invitations*/
    ctx[3].length > 0 && create_if_block_34(ctx)
  );
  let if_block1 = (
    /*totalDocumentsQuota*/
    ctx[0] && create_if_block_27(ctx)
  );
  let each_value_1 = (
    /*$localDocuments*/
    ctx[4]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_12(get_each_context_12(ctx, each_value_1, i));
  }
  let if_block2 = (
    /*$remoteDocuments*/
    ctx[5].length > 0 && create_if_block_17(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      div = element2("div");
      header = element2("header");
      h4 = element2("h4");
      h4.textContent = "Documents";
      t2 = space();
      if (if_block1)
        if_block1.c();
      t3 = space();
      ul = element2("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t4 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      attr(h4, "class", "svelte-1lqo8c5");
      attr(header, "class", "sg-header-row svelte-1lqo8c5");
      attr(ul, "class", "svelte-1lqo8c5");
      attr(div, "class", "sg-documents-list svelte-1lqo8c5");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t0, anchor);
      insert(target, div, anchor);
      append2(div, header);
      append2(header, h4);
      append2(header, t2);
      if (if_block1)
        if_block1.m(header, null);
      append2(div, t3);
      append2(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      insert(target, t4, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert(target, if_block2_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*$invitations*/
        ctx2[3].length > 0
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & /*$invitations*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_34(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*totalDocumentsQuota*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_27(ctx2);
          if_block1.c();
          if_block1.m(header, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty[0] & /*openPath, $localDocuments, onContext*/
      67600) {
        each_value_1 = /*$localDocuments*/
        ctx2[4];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_12(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_12(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (
        /*$remoteDocuments*/
        ctx2[5].length > 0
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_17(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (if_block1)
        if_block1.d();
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t4);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
__name(create_if_block9, "create_if_block");
function create_if_block_34(ctx) {
  let h4;
  let t1;
  let invitations_1;
  let current;
  invitations_1 = new Invitations_default({
    props: {
      invitations: (
        /*$invitations*/
        ctx[3]
      ),
      $$slots: {
        default: [
          create_default_slot4,
          ({ invitation }) => ({ 39: invitation }),
          ({ invitation }) => [0, invitation ? 256 : 0]
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      h4 = element2("h4");
      h4.textContent = "Invitations";
      t1 = space();
      create_component(invitations_1.$$.fragment);
      attr(h4, "class", "svelte-1lqo8c5");
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      insert(target, t1, anchor);
      mount_component(invitations_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const invitations_1_changes = {};
      if (dirty[0] & /*$invitations*/
      8)
        invitations_1_changes.invitations = /*$invitations*/
        ctx2[3];
      if (dirty[1] & /*$$scope, invitation*/
      768) {
        invitations_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      invitations_1.$set(invitations_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(invitations_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(invitations_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h4);
      if (detaching)
        detach(t1);
      destroy_component(invitations_1, detaching);
    }
  };
}
__name(create_if_block_34, "create_if_block_3");
function create_default_slot4(ctx) {
  let button0;
  let t1;
  let button1;
  let t3;
  let button2;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[22](
        /*invitation*/
        ctx[39]
      )
    );
  }
  __name(click_handler, "click_handler");
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[23](
        /*invitation*/
        ctx[39]
      )
    );
  }
  __name(click_handler_1, "click_handler_1");
  function click_handler_2(...args2) {
    return (
      /*click_handler_2*/
      ctx[24](
        /*invitation*/
        ctx[39],
        ...args2
      )
    );
  }
  __name(click_handler_2, "click_handler_2");
  return {
    c() {
      button0 = element2("button");
      button0.textContent = "Accept";
      t1 = space();
      button1 = element2("button");
      button1.textContent = "Reject";
      t3 = space();
      button2 = element2("button");
      button2.textContent = "\u2026";
      attr(button0, "class", "mod-cta");
      attr(button1, "class", "mod-warning");
      attr(button2, "class", "sg-invite-context-button");
    },
    m(target, anchor) {
      insert(target, button0, anchor);
      insert(target, t1, anchor);
      insert(target, button1, anchor);
      insert(target, t3, anchor);
      insert(target, button2, anchor);
      if (!mounted) {
        dispose = [
          listen(button0, "click", click_handler),
          listen(button1, "click", click_handler_1),
          listen(button2, "click", click_handler_2)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(button0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button1);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(button2);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_default_slot4, "create_default_slot");
function create_if_block_27(ctx) {
  let small;
  let t0_value = (
    /*totalDocumentsQuota*/
    ctx[0].consumed + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*totalDocumentsQuota*/
    ctx[0].allotment + ""
  );
  let t2;
  let small_aria_label_value;
  return {
    c() {
      small = element2("small");
      t0 = text2(t0_value);
      t1 = text2(" / ");
      t2 = text2(t2_value);
      attr(small, "aria-label", small_aria_label_value = `Currently using ${/*totalDocumentsQuota*/
      ctx[0].consumed} of your ${/*totalDocumentsQuota*/
      ctx[0].allotment} cloud document slots`);
      attr(small, "class", "svelte-1lqo8c5");
    },
    m(target, anchor) {
      insert(target, small, anchor);
      append2(small, t0);
      append2(small, t1);
      append2(small, t2);
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*totalDocumentsQuota*/
      1 && t0_value !== (t0_value = /*totalDocumentsQuota*/
      ctx2[0].consumed + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*totalDocumentsQuota*/
      1 && t2_value !== (t2_value = /*totalDocumentsQuota*/
      ctx2[0].allotment + ""))
        set_data(t2, t2_value);
      if (dirty[0] & /*totalDocumentsQuota*/
      1 && small_aria_label_value !== (small_aria_label_value = `Currently using ${/*totalDocumentsQuota*/
      ctx2[0].consumed} of your ${/*totalDocumentsQuota*/
      ctx2[0].allotment} cloud document slots`)) {
        attr(small, "aria-label", small_aria_label_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(small);
    }
  };
}
__name(create_if_block_27, "create_if_block_2");
function create_each_block_12(ctx) {
  let li;
  let div;
  let p0;
  let t0_value = (
    /*title*/
    ctx[35] + ""
  );
  let t0;
  let t1;
  let p1;
  let t2_value = (
    /*path*/
    ctx[36] + ""
  );
  let t2;
  let t3;
  let mounted;
  let dispose;
  function click_handler_3(...args2) {
    return (
      /*click_handler_3*/
      ctx[25](
        /*path*/
        ctx[36],
        ...args2
      )
    );
  }
  __name(click_handler_3, "click_handler_3");
  function contextmenu_handler(...args2) {
    return (
      /*contextmenu_handler*/
      ctx[26](
        /*path*/
        ctx[36],
        ...args2
      )
    );
  }
  __name(contextmenu_handler, "contextmenu_handler");
  function keydown_handler(...args2) {
    return (
      /*keydown_handler*/
      ctx[27](
        /*path*/
        ctx[36],
        ...args2
      )
    );
  }
  __name(keydown_handler, "keydown_handler");
  return {
    c() {
      li = element2("li");
      div = element2("div");
      p0 = element2("p");
      t0 = text2(t0_value);
      t1 = space();
      p1 = element2("p");
      t2 = text2(t2_value);
      t3 = space();
      attr(p0, "class", "svelte-1lqo8c5");
      attr(p1, "class", "path svelte-1lqo8c5");
      attr(div, "class", "sg-document svelte-1lqo8c5");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append2(li, div);
      append2(div, p0);
      append2(p0, t0);
      append2(div, t1);
      append2(div, p1);
      append2(p1, t2);
      append2(li, t3);
      if (!mounted) {
        dispose = [
          listen(div, "click", click_handler_3),
          listen(div, "contextmenu", prevent_default(contextmenu_handler)),
          listen(div, "keydown", keydown_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*$localDocuments*/
      16 && t0_value !== (t0_value = /*title*/
      ctx[35] + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*$localDocuments*/
      16 && t2_value !== (t2_value = /*path*/
      ctx[36] + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_each_block_12, "create_each_block_1");
function create_if_block_17(ctx) {
  let div;
  let h4;
  let t1;
  let ul;
  let each_value = (
    /*$remoteDocuments*/
    ctx[5]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block6(get_each_context6(ctx, each_value, i));
  }
  return {
    c() {
      div = element2("div");
      h4 = element2("h4");
      h4.textContent = "In Cloud";
      t1 = space();
      ul = element2("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(h4, "class", "sg-explain svelte-1lqo8c5");
      attr(h4, "aria-label", "These are documents you can access but have not yet placed in this vault.");
      attr(ul, "class", "svelte-1lqo8c5");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append2(div, h4);
      append2(div, t1);
      append2(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*cloneDocumentLocally, $remoteDocuments*/
      4128) {
        each_value = /*$remoteDocuments*/
        ctx2[5];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context6(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block6(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
__name(create_if_block_17, "create_if_block_1");
function create_each_block6(ctx) {
  let li;
  let div;
  let t0_value = (
    /*doc*/
    ctx[31].title + ""
  );
  let t0;
  let t1;
  let mounted;
  let dispose;
  function click_handler_4() {
    return (
      /*click_handler_4*/
      ctx[28](
        /*doc*/
        ctx[31]
      )
    );
  }
  __name(click_handler_4, "click_handler_4");
  function keydown_handler_1(...args2) {
    return (
      /*keydown_handler_1*/
      ctx[29](
        /*doc*/
        ctx[31],
        ...args2
      )
    );
  }
  __name(keydown_handler_1, "keydown_handler_1");
  return {
    c() {
      li = element2("li");
      div = element2("div");
      t0 = text2(t0_value);
      t1 = space();
      attr(div, "class", "sg-document svelte-1lqo8c5");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append2(li, div);
      append2(div, t0);
      append2(li, t1);
      if (!mounted) {
        dispose = [
          listen(div, "click", click_handler_4),
          listen(div, "keydown", keydown_handler_1)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*$remoteDocuments*/
      32 && t0_value !== (t0_value = /*doc*/
      ctx[31].title + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_each_block6, "create_each_block");
function create_fragment11(ctx) {
  let div;
  let h1;
  let t3;
  let button;
  let icon;
  let t4;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  icon = new Icon_default({ props: { name: "refresh-cw" } });
  const if_block_creators = [create_if_block9, create_else_block6];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$loggedIn*/
      ctx2[2]
    )
      return 0;
    return 1;
  }
  __name(select_block_type, "select_block_type");
  current_block_type_index = select_block_type(ctx, [-1, -1]);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element2("div");
      h1 = element2("h1");
      h1.innerHTML = `screen<span class="sg-dot svelte-1lqo8c5">.</span>garden`;
      t3 = space();
      button = element2("button");
      create_component(icon.$$.fragment);
      t4 = space();
      if_block.c();
      if_block_anchor = empty();
      attr(h1, "class", "svelte-1lqo8c5");
      attr(button, "aria-label", "Refresh cloud notes and invitations");
      attr(button, "class", "svelte-1lqo8c5");
      attr(div, "class", "sg-pane-header svelte-1lqo8c5");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append2(div, h1);
      append2(div, t3);
      append2(div, button);
      mount_component(icon, button, null);
      ctx[21](button);
      insert(target, t4, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*refresh*/
          ctx[17]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon);
      ctx[21](null);
      if (detaching)
        detach(t4);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
__name(create_fragment11, "create_fragment");
function instance10($$self, $$props, $$invalidate) {
  let $userQuotas;
  let $loggedIn;
  let $invitations;
  let $localDocuments;
  let $remoteDocuments;
  var _a, _b;
  let { plugin } = $$props;
  const loggedIn = plugin.state.loggedIn;
  component_subscribe($$self, loggedIn, (value) => $$invalidate(2, $loggedIn = value));
  const invitations = plugin.state.invitationsToMe;
  component_subscribe($$self, invitations, (value) => $$invalidate(3, $invitations = value));
  const localDocuments = plugin.state.localDocuments;
  component_subscribe($$self, localDocuments, (value) => $$invalidate(4, $localDocuments = value));
  const remoteDocuments = plugin.state.remoteDocuments;
  component_subscribe($$self, remoteDocuments, (value) => $$invalidate(5, $remoteDocuments = value));
  const userQuotas = plugin.state.userQuotas;
  component_subscribe($$self, userQuotas, (value) => $$invalidate(20, $userQuotas = value));
  let totalDocumentsQuota = (_a = $userQuotas["user_total_documents_count" /* USER_TOTAL_DOCUMENTS_COUNT */]) !== null && _a !== void 0 ? _a : null;
  function openPath(e, path) {
    const file = plugin.app.vault.getAbstractFileByPath(path);
    if (file instanceof import_obsidian25.TFile) {
      const newLeaf = import_obsidian25.Keymap.isModEvent(e);
      plugin.app.workspace.getLeaf(newLeaf).openFile(file);
    }
  }
  __name(openPath, "openPath");
  function cloneDocumentLocally(document2) {
    return __awaiter(this, void 0, void 0, function* () {
      new PlaceDocumentModal(plugin, document2).open();
    });
  }
  __name(cloneDocumentLocally, "cloneDocumentLocally");
  function acceptInvitation(invite) {
    return __awaiter(this, void 0, void 0, function* () {
      const doc2 = yield plugin.state.acceptInvitation(invite);
      if (!doc2)
        return;
      yield cloneDocumentLocally(doc2);
    });
  }
  __name(acceptInvitation, "acceptInvitation");
  function rejectInvitation(invite) {
    plugin.state.rejectInvitation(invite);
  }
  __name(rejectInvitation, "rejectInvitation");
  function moreOptions(event, invite) {
    const { x, y } = event;
    const menu = new import_obsidian25.Menu();
    menu.addItem((item) => {
      item.setTitle("Block this user");
      item.setIcon("slash");
      item.onClick(() => __awaiter(this, void 0, void 0, function* () {
        new ConfirmModal(
          `Block ${invite.from}?`,
          "Block this user? This will cancel all invitations to edit documents between you and prevent any future invitations from being made. Your existing documents will not be affected.",
          "Block",
          () => __awaiter(this, void 0, void 0, function* () {
            var _a2;
            yield (_a2 = plugin.api.blocks) === null || _a2 === void 0 ? void 0 : _a2.create(invite.from);
            plugin.state.loadInvitations();
          }),
          true
        ).open();
      }));
    });
    menu.showAtPosition({ x, y });
  }
  __name(moreOptions, "moreOptions");
  function onContext(event, path) {
    const { x, y } = event;
    const afile = plugin.app.vault.getAbstractFileByPath(path);
    const file = afile instanceof import_obsidian25.TFile ? afile : null;
    const menu = new import_obsidian25.Menu();
    if (file) {
      menu.addItem((item) => {
        item.setTitle("Delete");
        item.setIcon("trash");
        item.onClick(() => __awaiter(this, void 0, void 0, function* () {
          yield plugin.app.vault.trash(file, true);
        }));
      });
    }
    this.app.workspace.trigger("file-menu", menu, file, "screengarden-obsidian");
    menu.showAtPosition({ x, y });
  }
  __name(onContext, "onContext");
  let refreshButton;
  function refresh() {
    return __awaiter(this, void 0, void 0, function* () {
      refreshButton.classList.add("spin");
      $$invalidate(1, refreshButton.disabled = true, refreshButton);
      try {
        yield plugin.state.loadDocuments();
      } finally {
        refreshButton.classList.remove("spin");
        $$invalidate(1, refreshButton.disabled = false, refreshButton);
      }
    });
  }
  __name(refresh, "refresh");
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      refreshButton = $$value;
      $$invalidate(1, refreshButton);
    });
  }
  __name(button_binding, "button_binding");
  const click_handler = /* @__PURE__ */ __name((invitation) => acceptInvitation(invitation), "click_handler");
  const click_handler_1 = /* @__PURE__ */ __name((invitation) => rejectInvitation(invitation), "click_handler_1");
  const click_handler_2 = /* @__PURE__ */ __name((invitation, e) => moreOptions(e, invitation), "click_handler_2");
  const click_handler_3 = /* @__PURE__ */ __name((path, e) => openPath(e, path), "click_handler_3");
  const contextmenu_handler = /* @__PURE__ */ __name((path, e) => onContext(e, path), "contextmenu_handler");
  const keydown_handler = /* @__PURE__ */ __name((path, e) => {
    if (e.key === "Enter") {
      openPath(e, path);
    }
  }, "keydown_handler");
  const click_handler_4 = /* @__PURE__ */ __name((doc2) => cloneDocumentLocally(doc2), "click_handler_4");
  const keydown_handler_1 = /* @__PURE__ */ __name((doc2, e) => {
    if (e.key === "Enter") {
      cloneDocumentLocally(doc2);
    }
  }, "keydown_handler_1");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(18, plugin = $$props2.plugin);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*$userQuotas, _b*/
    1572864) {
      $: {
        $$invalidate(0, totalDocumentsQuota = $$invalidate(19, _b = $userQuotas["user_total_documents_count" /* USER_TOTAL_DOCUMENTS_COUNT */]) !== null && _b !== void 0 ? _b : null);
      }
    }
  };
  return [
    totalDocumentsQuota,
    refreshButton,
    $loggedIn,
    $invitations,
    $localDocuments,
    $remoteDocuments,
    loggedIn,
    invitations,
    localDocuments,
    remoteDocuments,
    userQuotas,
    openPath,
    cloneDocumentLocally,
    acceptInvitation,
    rejectInvitation,
    moreOptions,
    onContext,
    refresh,
    plugin,
    _b,
    $userQuotas,
    button_binding,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    contextmenu_handler,
    keydown_handler,
    click_handler_4,
    keydown_handler_1
  ];
}
__name(instance10, "instance");
var User = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance10, create_fragment11, safe_not_equal, { plugin: 18 }, add_css10, [-1, -1]);
  }
};
__name(User, "User");
var User_default = User;

// src/services/view/user/UserPane.ts
var UserPane = class extends View {
  constructor(plugin, leaf) {
    super(plugin, leaf);
    this.navigation = false;
  }
  static PlaceInLeaf(workspace) {
    return workspace.getLeftLeaf(false);
  }
  getDisplayText() {
    return "screen.garden";
  }
  getIcon() {
    return "shrub";
  }
  async onOpen() {
    this.root = new User_default({
      target: this.contentEl,
      props: {
        plugin: this.plugin
      }
    });
  }
  async onClose() {
    this.root.$destroy();
  }
};
__name(UserPane, "UserPane");
UserPane.ViewType = /* @__PURE__ */ __name(() => "screen-garden-user-pane" /* UserPane */, "ViewType");

// src/services/view/SettingsTab.ts
init_process_shim();
var import_obsidian26 = require("obsidian");
var ScreenGardenSettingsTab = class extends import_obsidian26.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian26.Setting(containerEl).setName("Help").setHeading();
    containerEl.createEl("p", {}, (el) => {
      el.innerHTML = 'For assistance, please join the <a href="https://discord.gg/nQgX68RJPj">screen.garden discord</a> or email <a href="mailto:support@screen.garden">support@screen.garden</a>.';
    });
    containerEl.createEl("p", {}, (el) => {
      el.innerHTML = "screen.garden is copyright screengarden, LLC, all rights reserved.";
    });
    containerEl.createEl("p", {}, (el) => {
      el.innerHTML = "Obsidian, the Obsidian source code, and the Obsidian logo are trademarks of Dynalist Inc.";
    });
  }
};
__name(ScreenGardenSettingsTab, "ScreenGardenSettingsTab");

// src/services/view/status/StatusBarItem.svelte
init_process_shim();
function add_css11(target) {
  append_styles(target, "svelte-1ihezxs", "button.sg-status-item.svelte-1ihezxs{padding:0 var(--size-4-1);margin:0;box-shadow:none}button.sg-status-item.svelte-1ihezxs:not(:hover){background-color:inherit}.sg-status-active.svelte-1ihezxs{color:#20b03f}.sg-status-inactive.svelte-1ihezxs{color:var(--text-accent)}");
}
__name(add_css11, "add_css");
function create_else_block7(ctx) {
  let div;
  let icon;
  let current;
  icon = new Icon_default({ props: { name: "log-in" } });
  return {
    c() {
      div = element2("div");
      create_component(icon.$$.fragment);
      attr(div, "aria-label", "Logged out; please log in or register.");
      attr(div, "class", "sg-status-inactive svelte-1ihezxs");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon, div, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon);
    }
  };
}
__name(create_else_block7, "create_else_block");
function create_if_block_18(ctx) {
  let div;
  let icon;
  let current;
  icon = new Icon_default({ props: { name: "network" } });
  return {
    c() {
      div = element2("div");
      create_component(icon.$$.fragment);
      attr(div, "aria-label", "Offline; edits queued locally and streamed to the mesh.");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon, div, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon);
    }
  };
}
__name(create_if_block_18, "create_if_block_1");
function create_if_block10(ctx) {
  let div;
  let icon;
  let current;
  icon = new Icon_default({ props: { name: "check-circle-2" } });
  return {
    c() {
      div = element2("div");
      create_component(icon.$$.fragment);
      attr(div, "aria-label", "Streaming edits to screen.garden.");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(icon, div, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(icon);
    }
  };
}
__name(create_if_block10, "create_if_block");
function create_fragment12(ctx) {
  let button;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block10, create_if_block_18, create_else_block7];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$status*/
      ctx2[0].connected && /*$loggedIn*/
      ctx2[1]
    )
      return 0;
    if (
      /*$loggedIn*/
      ctx2[1]
    )
      return 1;
    return 2;
  }
  __name(select_block_type, "select_block_type");
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      button = element2("button");
      if_block.c();
      attr(button, "class", "sg-status-item sg-status-active mod-clickable svelte-1ihezxs");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_blocks[current_block_type_index].m(button, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button,
            "click",
            /*reveal*/
            ctx[4]
          ),
          listen(
            button,
            "keydown",
            /*keydown_handler*/
            ctx[6]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
        }
        transition_in(if_block, 1);
        if_block.m(button, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if_blocks[current_block_type_index].d();
      mounted = false;
      run_all(dispose);
    }
  };
}
__name(create_fragment12, "create_fragment");
function instance11($$self, $$props, $$invalidate) {
  let $status;
  let $loggedIn;
  let { plugin } = $$props;
  const status = plugin.state.syncStatus;
  component_subscribe($$self, status, (value) => $$invalidate(0, $status = value));
  const loggedIn = plugin.state.loggedIn;
  component_subscribe($$self, loggedIn, (value) => $$invalidate(1, $loggedIn = value));
  function reveal() {
    plugin.view.revealLeaves();
  }
  __name(reveal, "reveal");
  const keydown_handler = /* @__PURE__ */ __name((e) => {
    if (e.key === "Enter" || e.key === "Space")
      reveal();
  }, "keydown_handler");
  $$self.$$set = ($$props2) => {
    if ("plugin" in $$props2)
      $$invalidate(5, plugin = $$props2.plugin);
  };
  return [$status, $loggedIn, status, loggedIn, reveal, plugin, keydown_handler];
}
__name(instance11, "instance");
var StatusBarItem = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance11, create_fragment12, safe_not_equal, { plugin: 5 }, add_css11);
  }
};
__name(StatusBarItem, "StatusBarItem");
var StatusBarItem_default = StatusBarItem;

// src/services/view/ViewService.ts
var VIEWS = [UserPane, DocumentPane];
var ViewService = class extends Service {
  // private explorerObserver: ExplorerObserver;
  async onload() {
    VIEWS.forEach(
      (v) => this.plugin.registerView(v.ViewType(), (leaf) => new v(this.plugin, leaf))
    );
    this.plugin.addSettingTab(
      new ScreenGardenSettingsTab(this.plugin.app, this.plugin)
    );
    new StatusBarItem_default({
      target: this.plugin.addStatusBarItem(),
      props: {
        plugin: this.plugin
      }
    });
  }
  async onunload() {
    VIEWS.forEach(
      (v) => this.plugin.app.workspace.getLeavesOfType(v.ViewType()).forEach((leaf) => leaf.detach())
    );
  }
  async onLayoutReady() {
    const workspace = this.plugin.app.workspace;
    VIEWS.forEach((v) => {
      if (!workspace.getLeavesOfType(v.ViewType()).length) {
        v.PlaceInLeaf(workspace).setViewState({ type: v.ViewType() });
      }
    });
  }
  revealLeaves() {
    const workspace = this.plugin.app.workspace;
    VIEWS.forEach((v) => {
      const leaf = workspace.getLeavesOfType(v.ViewType()).first();
      if (leaf)
        workspace.revealLeaf(leaf);
    });
  }
};
__name(ViewService, "ViewService");

// src/ScreenGardenPlugin.ts
if (false) {
  global["__ $YJS$ __"] = false;
}
var ScreenGardenPlugin = class extends import_obsidian27.Plugin {
  constructor() {
    super(...arguments);
    this.services = [];
    this.dev = null;
  }
  async onload() {
    this.logger = await this.start(LoggingService);
    this.state = await this.start(StateService);
    this.auth = await this.start(AuthService);
    this.api = await this.start(ApiService);
    this.files = await this.start(FileService);
    this.sync = await this.start(SyncService);
    this.commands = await this.start(CommandService);
    this.protocols = await this.start(ProtocolHandlerService);
    this.editor = await this.start(EditorService);
    this.view = await this.start(ViewService);
    if (false) {
      this.dev = await this.start(DeveloperService2);
    }
    this.app.workspace.onLayoutReady(async () => {
      for (const service of this.services) {
        await service.onLayoutReady();
      }
    });
    this.registerEvent(
      this.sync.on(
        "invitation-notification" /* InvitationNotification */,
        async (notification) => {
          var _a;
          switch (notification.action) {
            case "created":
              this.state.invitations.update((invitations) => {
                if (!invitations.some((d) => d.id === notification.data.id)) {
                  invitations = [notification.data, ...invitations];
                }
                return invitations;
              });
              if (notification.data.to_you) {
                new import_obsidian27.Notice(
                  `${notification.data.from} has invited you to ${notification.data.level} ${notification.data.title}`
                );
              } else {
                this.state.loadDetails(notification.data.document_id);
              }
              break;
            case "accepted":
              const document2 = await ((_a = this.api.documents) == null ? void 0 : _a.read(
                notification.data.document_id
              ));
              if (!(document2 == null ? void 0 : document2.data))
                return;
              if (notification.data.to_you) {
                this.state.documents.update((documents) => {
                  if (!documents.some(
                    (d) => d.id === notification.data.document_id
                  )) {
                    documents = [...documents, document2.data];
                  }
                  return documents;
                });
              }
              this.state.invitations.update(
                (invitations) => invitations.filter((i) => i.id !== notification.data.id)
              );
              break;
            case "deleted":
              this.state.invitations.update(
                (invitations) => invitations.filter((i) => i.id !== notification.data.id)
              );
              if (!notification.data.to_you) {
                this.state.loadDetails(notification.data.document_id);
              }
              break;
          }
        }
      )
    );
    this.registerEvent(
      this.sync.on(
        "document-notification" /* DocumentNotification */,
        (notification) => {
          switch (notification.action) {
            case "created":
              this.state.documents.update((documents) => {
                if (!documents.some((d) => d.id === notification.data.id)) {
                  documents = [...documents, notification.data];
                }
                return documents;
              });
              break;
            case "updated":
              this.state.documents.update((documents) => {
                return documents.map(
                  (d) => d.id === notification.data.id ? notification.data : d
                );
              });
              break;
            case "deleted":
              this.state.documents.update(
                (documents) => documents.filter((d) => d.id !== notification.data.id)
              );
              break;
          }
        }
      )
    );
    this.registerEvent(
      this.sync.on(
        "permission-notification" /* PermissionNotification */,
        (notification) => {
          switch (notification.action) {
            case "created":
              this.state.updateDocumentDetails(
                notification.data.document_id,
                (details) => {
                  if (!details.permissions.some(
                    (p) => p.user_id === notification.data.user_id
                  )) {
                    details.permissions = [
                      notification.data,
                      ...details.permissions
                    ];
                  }
                  return details;
                }
              );
              break;
            case "deleted":
              if (notification.data.is_you) {
                this.state.documents.update(
                  (documents) => documents.filter(
                    (d) => d.id !== notification.data.document_id
                  )
                );
              } else {
                this.state.updateDocumentDetails(
                  notification.data.document_id,
                  (details) => {
                    details.permissions = details.permissions.filter(
                      (p) => p.user_id !== notification.data.user_id
                    );
                    return details;
                  }
                );
              }
              break;
          }
        }
      )
    );
  }
  async onunload() {
    for (const service of this.services) {
      console.log("stopping", service.constructor.name);
      await service.onunload();
    }
  }
  async start(ServiceImpl) {
    var _a;
    (_a = this.logger) == null ? void 0 : _a.debug(`starting ${ServiceImpl.name}`);
    const service = new ServiceImpl(this);
    this.services.unshift(service);
    await service._load;
    return service;
  }
  async addFileToScreenGarden(file) {
    if (!this.api.documents) {
      this.logger.error(
        "attempted to add file without acccess to documents API."
      );
      return;
    }
    const title = file.basename;
    if (this.files.isTracked(file)) {
      const documentId = this.files.getDocumentId(file);
      this.logger.debug("already tracking", documentId);
    } else {
      const { data: document2 } = await this.api.documents.create({
        document: { title }
      });
      await this.files.link(document2.id, file);
      const ytext = this.sync.getYText(document2.id);
      const contents = await this.app.vault.read(file);
      ytext.insert(0, contents);
      this.editor.reconnectEditorsForFile(file);
    }
  }
  async promptForCloudDeletion(file, documentID) {
    var _a, _b, _c;
    const fileExists = await this.app.vault.adapter.exists(file.path);
    const permissions = await ((_a = this.api.permissions(documentID)) == null ? void 0 : _a.list());
    const document2 = (_c = await ((_b = this.api.documents) == null ? void 0 : _b.read(documentID))) == null ? void 0 : _c.data;
    if (!document2) {
      this.logger.error(
        "prompted for cloud deletion without access to document",
        documentID
      );
      return;
    }
    const permission = permissions == null ? void 0 : permissions.find((p) => p.is_you);
    if (!permission) {
      this.logger.error(
        "prompted for cloud deletion permission for document",
        documentID
      );
      return;
    }
    if (permission.level === "own") {
      const title = fileExists ? `Really delete "${document2.title}" from screen.garden?` : `Also delete "${document2.title}" from screen.garden?`;
      const description = fileExists ? `"${document2.title}" is still available to you and any collaborators in screen.garden. Would you like to delete this note from screen.garden servers? It won\u2019t be deleted from your vault.` : `You deleted "${file.path}" locally, but it is still available to you and any collaborators in screen.garden. Would you like to delete this note from screen.garden servers?`;
      new ConfirmModal(
        title,
        description,
        "Delete",
        async () => {
          var _a2;
          (_a2 = this.api.documents) == null ? void 0 : _a2.delete(documentID);
          if (fileExists) {
            this.files.unlink(file);
          }
        },
        true
      ).open();
    } else {
      const description = fileExists ? `Would you like to remove yourself from this note on screen.garden servers? It won\u2019t be deleted from your vault.` : `You deleted "${file.path}" locally, but you are still included as a collaborator with ${permission.level} access. Would you like to remove yourself from this note on screen.garden servers?`;
      new ConfirmModal(
        `Leave "${document2.title}"?`,
        description,
        "Leave",
        async () => {
          var _a2;
          (_a2 = this.api.permissions(documentID)) == null ? void 0 : _a2.delete(permission.user_id);
          if (fileExists) {
            this.files.unlink(file);
          }
        },
        true
      ).open();
    }
  }
};
__name(ScreenGardenPlugin, "ScreenGardenPlugin");

// src/main.ts
var main_default = ScreenGardenPlugin;
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

simple-peer/index.js:
  (*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
