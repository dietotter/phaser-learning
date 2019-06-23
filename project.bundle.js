/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
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

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
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

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/CharacterSprite.ts":
/*!********************************!*\
  !*** ./src/CharacterSprite.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CharacterSprite =
/** @class */
function (_super) {
  __extends(CharacterSprite, _super);
  /**
   *
   */


  function CharacterSprite(scene, x, y, texture, frame) {
    var _this = _super.call(this, scene, x, y, texture, frame) || this;

    scene.sys.updateList.add(_this);
    scene.sys.displayList.add(_this);

    _this.setScale(2);

    _this.setOrigin(0, 0);

    scene.physics.world.enableBody(_this); // do this for the physics sprite

    _this.setImmovable(true); // add custom property


    _this.hp = 10;
    return _this;
  }

  return CharacterSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.default = CharacterSprite;

/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Sprite =
/** @class */
function (_super) {
  __extends(Sprite, _super);
  /**
   *
   */


  function Sprite(scene, x, y, texture, frame) {
    var _this = _super.call(this, scene, x, y, texture, frame) || this;

    scene.sys.updateList.add(_this);
    scene.sys.displayList.add(_this);

    _this.setScale(2);

    _this.setOrigin(0, 0);

    return _this;
  }

  return Sprite;
}(Phaser.GameObjects.Sprite);

exports.default = Sprite;

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __importDefault(__webpack_require__(/*! ./scenes/index */ "./src/scenes/index.ts"));

var LoadScene = index_1.default.LoadScene,
    MenuScene = index_1.default.MenuScene,
    PlayScene = index_1.default.PlayScene;
exports.default = {
  width: 800,
  height: 600,
  scene: [LoadScene, MenuScene, PlayScene // to add scenes dynamically:
  // this.scene.add(sceneName, SceneItself, autostart=false/true)
  ],
  render: {
    pixelArt: true // so that Phaser doesn't sharpen it

  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCENES = {
  LOAD: 'LOAD',
  MENU: 'MENU',
  PLAY: 'PLAY'
};
exports.IMAGES = {
  LOGO: 'logo.png',
  OPTIONS: 'options_button.png',
  PLAY: 'play_button.png',
  TITLE: 'title_bg.jpg'
};
exports.AUDIO = {
  TITLE: 'title_music.mp3'
};
exports.SPRITES = {
  CAT: 'cat.png'
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");

var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./src/config.ts"));

var game = new Phaser.Game(config_1.default);

/***/ }),

/***/ "./src/scenes/LoadScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/LoadScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var LoadScene =
/** @class */
function (_super) {
  __extends(LoadScene, _super);

  function LoadScene() {
    return _super.call(this, {
      key: constants_1.SCENES.LOAD
    }) || this;
  }

  LoadScene.prototype.init = function () {// instantiate plugins, receive data from other scenes here
  };

  LoadScene.prototype.preload = function () {
    // load assets here
    var _this = this;

    this.load.spritesheet('anna', './assets/spritesheets/anna.png', {
      frameHeight: 64,
      frameWidth: 64
    }); // load atlases

    this.load.atlas('characters', './assets/spritesheets/characters.png', './assets/spritesheets/characters.json');
    this.load.atlas('daze', './assets/spritesheets/daze.png', './assets/spritesheets/daze.json');
    this.load.spritesheet('rapier', './assets/spritesheets/WEAPON_rapier.png', {
      frameWidth: 192,
      frameHeight: 192
    }); // load image, spritesheet, sound

    this.loadImages();
    this.loadAudio();
    this.loadSprites({
      frameHeight: 32,
      frameWidth: 32
    });
    var loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    });
    /*
    Loader Events:
        complete - when done loading everything
        progress - loader number progress in decimal
     */

    this.load.on('progress', function (percent) {
      loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      console.log(percent);
    });
  }; // create() is the only mandatory method for scenes


  LoadScene.prototype.create = function () {
    // make game objects here
    this.scene.start(constants_1.SCENES.MENU);
  };

  LoadScene.prototype.update = function () {// runs at 60fps (16ms per frame)
  };

  LoadScene.prototype.loadImages = function () {
    this.load.setPath('/assets/images');

    for (var prop in constants_1.IMAGES) {
      this.load.image(constants_1.IMAGES[prop], constants_1.IMAGES[prop]);
    }
  };

  LoadScene.prototype.loadAudio = function () {
    this.load.setPath('/assets/audio');

    for (var prop in constants_1.AUDIO) {
      this.load.audio(constants_1.AUDIO[prop], constants_1.AUDIO[prop]);
    }
  };

  LoadScene.prototype.loadSprites = function (frameConfig) {
    this.load.setPath('/assets/spritesheets');

    for (var prop in constants_1.SPRITES) {
      this.load.spritesheet(constants_1.SPRITES[prop], constants_1.SPRITES[prop], frameConfig);
    }
  };

  return LoadScene;
}(Phaser.Scene);

exports.default = LoadScene;

/***/ }),

/***/ "./src/scenes/MenuScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var MenuScene =
/** @class */
function (_super) {
  __extends(MenuScene, _super);

  function MenuScene() {
    return _super.call(this, {
      key: constants_1.SCENES.MENU
    }) || this;
  }

  MenuScene.prototype.init = function () {};

  MenuScene.prototype.create = function () {
    // create images (z order)
    var _this = this;

    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, constants_1.IMAGES.LOGO).setDepth(1);
    this.add.image(0, 0, constants_1.IMAGES.TITLE).setOrigin(0).setDepth(0);
    var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, constants_1.IMAGES.PLAY);
    var optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, constants_1.IMAGES.OPTIONS); // create sprites

    var hoverSprite = this.add.sprite(100, 100, constants_1.SPRITES.CAT);
    hoverSprite.setScale(2); // create audio, disable pauseonblur
    // this.sound.pauseOnBlur = false
    // this.sound.play(AUDIO.TITLE, {
    //     loop: true
    // })
    // create animations

    this.anims.create({
      key: 'walk',
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers(constants_1.SPRITES.CAT, {
        frames: [0, 1, 2, 3]
      })
    }); // make image buttons interactive

    /*
        PointerEvents:
            pointerover - hovering
            pointerout - not hovering
            pointerup - click and release
            pointerdown - just click
    */

    playButton.setInteractive();
    playButton.on('pointerover', function () {
      hoverSprite.setVisible(true);
      hoverSprite.play('walk');
      hoverSprite.x = playButton.x - playButton.width;
      hoverSprite.y = playButton.y;
    });
    playButton.on('pointerout', function () {
      hoverSprite.setVisible(false);
    });
    playButton.on('pointerup', function () {
      _this.scene.start(constants_1.SCENES.PLAY);
    });
    optionsButton.setInteractive();
    optionsButton.on('pointerover', function () {
      hoverSprite.setVisible(true);
      hoverSprite.play('walk');
      hoverSprite.x = optionsButton.x - optionsButton.width;
      hoverSprite.y = optionsButton.y;
    });
    optionsButton.on('pointerout', function () {
      hoverSprite.setVisible(false);
    });
    optionsButton.on('pointerup', function () {
      console.log('clicked options');
    });
  };

  return MenuScene;
}(Phaser.Scene);

exports.default = MenuScene;

/***/ }),

/***/ "./src/scenes/PlayScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/PlayScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");

var Sprite_1 = __importDefault(__webpack_require__(/*! ../Sprite */ "./src/Sprite.ts"));

var CharacterSprite_1 = __importDefault(__webpack_require__(/*! ../CharacterSprite */ "./src/CharacterSprite.ts"));

var PlayScene =
/** @class */
function (_super) {
  __extends(PlayScene, _super);

  function PlayScene() {
    return _super.call(this, {
      key: constants_1.SCENES.PLAY
    }) || this;
  }

  PlayScene.prototype.preload = function () {
    this.textures.addSpriteSheetFromAtlas("mandy", {
      frameHeight: 64,
      frameWidth: 64,
      atlas: "characters",
      frame: "mandy"
    });
    this.anims.create({
      key: 'mandyswordleft',
      frameRate: 5,
      frames: this.anims.generateFrameNumbers('mandy', {
        start: 169,
        end: 174
      })
    });
    this.anims.create({
      key: 'sword_left',
      frameRate: 5,
      frames: this.anims.generateFrameNumbers('rapier', {
        start: 6,
        end: 11
      }),
      showOnStart: true,
      hideOnComplete: true
    });
    this.anims.create({
      key: "left",
      frameRate: 10,
      frames: this.anims.generateFrameNumbers("anna", {
        start: 9,
        end: 17
      })
    });
    this.anims.create({
      key: "down",
      frameRate: 10,
      frames: this.anims.generateFrameNumbers("anna", {
        start: 18,
        end: 26
      })
    });
    this.anims.create({
      key: "up",
      frameRate: 10,
      frames: this.anims.generateFrameNumbers("anna", {
        start: 0,
        end: 8
      })
    });
    this.anims.create({
      key: "right",
      frameRate: 10,
      frames: this.anims.generateFrameNumbers("anna", {
        start: 27,
        end: 35
      })
    });
    this.anims.create({
      key: "blaze",
      duration: 50,
      frames: this.anims.generateFrameNames("daze", {
        prefix: "fire0",
        suffix: ".png",
        end: 55
      }),
      showOnStart: true,
      hideOnComplete: true
    }); // texture is an image file, optimized for better processing
    // its created automatically when you load an image into Phaser

    this.textures.addSpriteSheetFromAtlas("hooded", {
      frameHeight: 64,
      frameWidth: 64,
      atlas: "characters",
      frame: "hooded"
    });
    this.load.image('terrain', './assets/images/terrain_atlas.png');
    this.load.image('items', './assets/images/items.png');
    this.load.tilemapTiledJSON('mappy', './assets/maps/untitled.json');
    console.log(this.textures.list);
  };

  PlayScene.prototype.create = function () {
    var _this = this; // creating container for layering a sprite on top of a sprite


    this.player = this.add.container(200, 200, [this.add.sprite(0, 0, 'mandy', 26), this.add.sprite(0, 0, 'rapier').setVisible(false)]).setDepth(1).setScale(2);
    this.input.keyboard.on('keydown-F', function () {
      _this.player.list[0].play('mandyswordleft'); // @ts-ignore


      _this.player.list[1].play('sword_left');
    });
    var cat = new Sprite_1.default(this, 100, 100, constants_1.SPRITES.CAT); // add characters sprites

    this.anna = new CharacterSprite_1.default(this, 400, 400, 'anna', 26);
    this.hooded = this.physics.add.sprite(200, 200, 'hooded', 26).setScale(2); // add physics to existing sprite:
    // this.physics.add.existing(sprite)
    // add fire attacks group

    this.fireAttacks = this.physics.add.group(); // add assassins group and add hooded to it

    this.assassins = this.physics.add.group({
      immovable: true
    });
    this.assassins.add(this.hooded); //@ts-ignore

    window.hooded = this.hooded; // make hooded available in the console
    // e.g. from browser console:
    // > hooded.play('right')
    // > hooded.setTexture('mandy') // change texture
    // > hooded.setFrame(26) // change frame
    //@ts-ignore

    window.anna = this.anna;
    /*
        gameobject events:
        - animationstart
        - animationrepeat
        - animationupdate
        - animationcomplete
     e.g.:
        anna.on('animationupdate', () => {
            console.log('luling')
        })
    */
    // set anna's hitbox to be smaller + set offset to position it

    this.anna.setSize(40, 50).setOffset(10, 10); // set anna to be unable to move out of the bounds of the canvas

    this.anna.setCollideWorldBounds(true); // add input
    // @ts-ignore

    this.keyboard = this.input.keyboard.addKeys('W, A, S, D');
    this.input.on('pointermove', function (pointer) {
      // if player holds the mouse down, play fire animation
      if (pointer.isDown) {
        var fire_1 = _this.add.sprite(pointer.worldX, pointer.worldY, 'daze', 'fire00.png').play('blaze');

        _this.fireAttacks.add(fire_1);

        fire_1.on('animationcomplete', function () {
          fire_1.destroy();
        });
      }
    }); // let phaser automatically handle collisions by adding collider
    //@ts-ignore

    this.physics.world.addCollider(this.anna, this.assassins, function (anna, hooded) {
      anna.hp--;

      if (anna.hp <= 0) {
        anna.destroy();
      }

      hooded.destroy();
    }); //@ts-ignore

    this.physics.world.addCollider(this.fireAttacks, this.assassins, function (fireAttacks, hooded) {
      fireAttacks.destroy();
      hooded.destroy();
      var x = 0,
          y = 0;

      switch (Phaser.Math.Between(0, 1)) {
        case 0:
          x = Phaser.Math.Between(0, _this.game.renderer.width);
          break;

        case 1:
          y = Phaser.Math.Between(0, _this.game.renderer.height);
          break;
      } // spawn 2 more assassins


      for (var i = 0; i < 2; i++) {
        _this.assassins.add(_this.physics.add.sprite(x, y, 'hooded', 26).setScale(2));
      }
    });
    var mappy = this.add.tilemap('mappy');
    var terrain = mappy.addTilesetImage('terrain_atlas', 'terrain');
    var itemset = mappy.addTilesetImage('items'); // layers

    var botLayer = mappy.createStaticLayer('bot', [terrain], 0, 0).setDepth(-1);
    var topLayer = mappy.createStaticLayer('top', [terrain], 0, 0); // map collisions

    this.physics.add.collider(this.anna, topLayer); // by tile property

    topLayer.setCollisionByProperty({
      collides: true
    }); // by tile index

    topLayer.setCollision([88, 89, 90, 120, 121, 122, 152, 153, 154]); // map events
    // by location

    topLayer.setTileLocationCallback(7, 10, 3, 3, function () {
      alert('you\'re almost standing in lava.'); // makes the callback trigger only once

      topLayer.setTileLocationCallback(7, 10, 3, 3, null);
    }); // by index
    // @ts-ignore

    topLayer.setTileIndexCallback([30, 31], function () {
      console.log('you\'re standing on top of a tree.');
    }); // INTERACTIVE TILES FROM OBJECT LAYER
    // 1114 = gid of item in json

    var items = mappy.createFromObjects('pickup', 1114, {
      key: constants_1.SPRITES.CAT
    }).map(function (sprite) {
      sprite.setScale(2);
      sprite.setInteractive();
    });
    this.input.on('gameobjectdown', function (pointer, obj) {
      obj.destroy();
    });
    this.input.on('pointerdown', function (pointer) {
      // pixel position to tile position
      var tile = mappy.getTileAt(mappy.worldToTileX(pointer.x), mappy.worldToTileY(pointer.y));

      if (tile) {
        console.log(tile);
      }
    }); // make camera follow the player

    this.cameras.main.startFollow(this.anna);
    this.physics.world.setBounds(0, 0, mappy.widthInPixels, mappy.heightInPixels); // draw debug render hitboxes
    // topLayer.renderDebug(this.add.graphics(), {
    //     tileColor: null, // non-colliding tiles
    //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // colliding tiles
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // colliding face edges
    // })
  };

  PlayScene.prototype.update = function (time, delta) {
    // manually handle collisions
    //@ts-ignore
    // this.physics.world.collide(this.anna, this.hooded, () => {})
    // all assassins will be accelerating towards anna
    for (var i = 0; i < this.assassins.getChildren().length; i++) {
      this.physics.accelerateToObject(this.assassins.getChildren()[i], this.anna);
    } // active = alive


    if (this.anna.active) {
      // keyboard input
      if (this.keyboard.D.isDown) {
        this.anna.setVelocityX(128); // before physics:
        // this.anna.x = this.anna.x + 64 * (delta / 1000)
      }

      if (this.keyboard.A.isDown) {
        this.anna.setVelocityX(-128);
      }

      if (this.keyboard.W.isDown) {
        this.anna.setVelocityY(-128);
      }

      if (this.keyboard.S.isDown) {
        this.anna.setVelocityY(128);
      }

      if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
        // not moving on X axis
        this.anna.setVelocityX(0);
      }

      if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
        // not moving on Y axis
        this.anna.setVelocityY(0);
      } // play animations depending on velocity


      if (this.anna.body.velocity.x > 0) {
        // moving right
        this.anna.play('right', true);
      } else if (this.anna.body.velocity.x < 0) {
        // moving left
        this.anna.anims.playReverse('left', true);
      } else if (this.anna.body.velocity.y < 0) {
        // moving up
        this.anna.play('up', true);
      } else if (this.anna.body.velocity.y > 0) {
        // moving down
        this.anna.play('down', true);
      }
    }
  };

  return PlayScene;
}(Phaser.Scene);

exports.default = PlayScene;

/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var LoadScene_1 = __importDefault(__webpack_require__(/*! ./LoadScene */ "./src/scenes/LoadScene.ts"));

var MenuScene_1 = __importDefault(__webpack_require__(/*! ./MenuScene */ "./src/scenes/MenuScene.ts"));

var PlayScene_1 = __importDefault(__webpack_require__(/*! ./PlayScene */ "./src/scenes/PlayScene.ts"));

exports.default = {
  LoadScene: LoadScene_1.default,
  MenuScene: MenuScene_1.default,
  PlayScene: PlayScene_1.default
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/barabakens/Documents/MyProj/PhaserLearning/src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=project.bundle.js.map