/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,\n// backported and transplited with Babel, with backwards-compat fixes\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  if (path.length === 0) return '.';\n  var code = path.charCodeAt(0);\n  var hasRoot = code === 47 /*/*/;\n  var end = -1;\n  var matchedSlash = true;\n  for (var i = path.length - 1; i >= 1; --i) {\n    code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        if (!matchedSlash) {\n          end = i;\n          break;\n        }\n      } else {\n      // We saw the first non-path separator\n      matchedSlash = false;\n    }\n  }\n\n  if (end === -1) return hasRoot ? '/' : '.';\n  if (hasRoot && end === 1) {\n    // return '//';\n    // Backwards-compat fix:\n    return '/';\n  }\n  return path.slice(0, end);\n};\n\nfunction basename(path) {\n  if (typeof path !== 'string') path = path + '';\n\n  var start = 0;\n  var end = -1;\n  var matchedSlash = true;\n  var i;\n\n  for (i = path.length - 1; i >= 0; --i) {\n    if (path.charCodeAt(i) === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          start = i + 1;\n          break;\n        }\n      } else if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // path component\n      matchedSlash = false;\n      end = i + 1;\n    }\n  }\n\n  if (end === -1) return '';\n  return path.slice(start, end);\n}\n\n// Uses a mixed approach for backwards-compatibility, as ext behavior changed\n// in new Node.js versions, so only basename() above is backported here\nexports.basename = function (path, ext) {\n  var f = basename(path);\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\nexports.extname = function (path) {\n  if (typeof path !== 'string') path = path + '';\n  var startDot = -1;\n  var startPart = 0;\n  var end = -1;\n  var matchedSlash = true;\n  // Track the state of characters (if any) we see before our first dot and\n  // after any path separator we find\n  var preDotState = 0;\n  for (var i = path.length - 1; i >= 0; --i) {\n    var code = path.charCodeAt(i);\n    if (code === 47 /*/*/) {\n        // If we reached a path separator that was not part of a set of path\n        // separators at the end of the string, stop now\n        if (!matchedSlash) {\n          startPart = i + 1;\n          break;\n        }\n        continue;\n      }\n    if (end === -1) {\n      // We saw the first non-path separator, mark this as the end of our\n      // extension\n      matchedSlash = false;\n      end = i + 1;\n    }\n    if (code === 46 /*.*/) {\n        // If this is our first dot, mark it as the start of our extension\n        if (startDot === -1)\n          startDot = i;\n        else if (preDotState !== 1)\n          preDotState = 1;\n    } else if (startDot !== -1) {\n      // We saw a non-dot and non-path separator before our dot, so we should\n      // have a good chance at having a non-empty extension\n      preDotState = -1;\n    }\n  }\n\n  if (startDot === -1 || end === -1 ||\n      // We saw a non-dot character immediately before the dot\n      preDotState === 0 ||\n      // The (right-most) trimmed path component is exactly '..'\n      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n    return '';\n  }\n  return path.slice(startDot, end);\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/component/app.jsx":
/*!*******************************!*\
  !*** ./src/component/app.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scene_SignUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/SignUp */ \"./src/component/scene/SignUp.jsx\");\n/* harmony import */ var _scene_EditProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/EditProfile */ \"./src/component/scene/EditProfile.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // import { validateForUser, validateForUserItem } from 'modal/user';\n// import {\n//   normalizeAllError,\n//   normalizeSingleError,\n//   // normalizeErrors,\n// } from 'modal/validator';\n// import axios from 'axios';\n\n\n\nvar NavButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"app__NavButton\",\n  componentId: \"oismts-0\"\n})([\"position:relative;margin:0 1rem;padding:1rem 0;color:white;cursor:pointer;&::before{content:\\\"\\\";display:block;position:absolute;z-index:2;top:40px;left:0;width:0;height:1px;transition:0.1s ease-in;background-color:white;}&:hover{&::before{width:100%;}}\"]);\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"app__NavBar\",\n  componentId: \"oismts-1\"\n})([\"display:flex;position:fixed;top:0;left:0;align-items:center;justify-content:center;width:100%;height:50px;background-color:black;\"]);\nvar Conatiner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"app__Conatiner\",\n  componentId: \"oismts-2\"\n})([\"display:flex;justify-content:center;width:100%;max-width:500px;margin-top:100px;margin-right:auto;margin-left:auto;padding:30px 50px;border:solid 1px #ddd;box-shadow:0px 5px 5px rgba(0,0,0,0.01);\"]);\nvar baseUrl = 'http://localhost:2222';\n\nvar Appcomponent = function Appcomponent() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      _useState2 = _slicedToArray(_useState, 2),\n      showSignUp = _useState2[0],\n      setShowSignUp = _useState2[1];\n\n  var handleNavClick = function handleNavClick() {\n    return setShowSignUp(!showSignUp);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavButton, {\n    onClick: handleNavClick\n  }, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavButton, {\n    onClick: handleNavClick\n  }, \"Edit Profile\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Conatiner, null, showSignUp ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scene_SignUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    baseUrl: baseUrl\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scene_EditProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    baseUrl: baseUrl\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Appcomponent);\n\n//# sourceURL=webpack:///./src/component/app.jsx?");

/***/ }),

/***/ "./src/component/components/Button.jsx":
/*!*********************************************!*\
  !*** ./src/component/components/Button.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n // import PropTypes from \"prop-types\";\n\n\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({\n  displayName: \"Button__StyledButton\",\n  componentId: \"sc-18qjz1w-0\"\n})([\"width:100%;margin-top:1rem;padding:10px;border:1px solid #e0e0e0;outline:none;background-color:#9654ff;color:white;font-size:1rem;appearance:none;cursor:pointer;\"]);\n\nvar Button = function Button(_ref) {\n  var props = _extends({}, _ref);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, _extends({\n    type: \"submit\"\n  }, props));\n};\n\nButton.propTypes = {};\nButton.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/component/components/Button.jsx?");

/***/ }),

/***/ "./src/component/components/Input.jsx":
/*!********************************************!*\
  !*** ./src/component/components/Input.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({\n  displayName: \"Input__Label\",\n  componentId: \"sc-1uk4mvv-0\"\n})([\"display:block;margin-bottom:3px;color:black;font-size:0.875rem;font-weight:500;\"]);\nvar Message = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({\n  displayName: \"Input__Message\",\n  componentId: \"sc-1uk4mvv-1\"\n})([\"display:block;color:\", \";font-size:0.75rem;font-weight:500;line-height:2;\"], function (_ref) {\n  var invalid = _ref.invalid;\n  return invalid ? \"red\" : \"rgba(0, 0, 0, 0.3)\";\n});\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({\n  displayName: \"Input__StyledInput\",\n  componentId: \"sc-1uk4mvv-2\"\n})([\"box-sizing:border-box;width:100%;padding:10px;transition:border-color ease-in-out 0.15s;border:1px solid #e0e0e0;outline:none;background-color:transparent;font-size:1rem;appearance:none;\", \" &:disabled{opacity:1;background-color:gray;}\"], function (_ref2) {\n  var invalid = _ref2.invalid;\n  return invalid ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"border:1px solid red;color:red;\"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"&:focus{border-color:#9654ff;}\"]);\n});\n\nvar TextInput = function TextInput(_ref3) {\n  var type = _ref3.type,\n      id = _ref3.id,\n      label = _ref3.label,\n      focused = _ref3.focused,\n      message = _ref3.message,\n      invalid = _ref3.invalid,\n      disabled = _ref3.disabled,\n      validate = _ref3.validate,\n      hasSubmit = _ref3.hasSubmit,\n      props = _objectWithoutProperties(_ref3, [\"type\", \"id\", \"label\", \"focused\", \"message\", \"invalid\", \"disabled\", \"validate\", \"hasSubmit\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      validateByKeyUp = _useState2[0],\n      setValidateByKeyUp = _useState2[1];\n\n  var handleBlur = function handleBlur(e) {\n    var _e$currentTarget = e.currentTarget,\n        value = _e$currentTarget.value,\n        name = _e$currentTarget.name;\n    if (validateByKeyUp) return;\n    validate(value, name);\n    setValidateByKeyUp(true);\n  };\n\n  var handleKeyUp = function handleKeyUp(e) {\n    var _e$currentTarget2 = e.currentTarget,\n        value = _e$currentTarget2.value,\n        name = _e$currentTarget2.name;\n    if (!validateByKeyUp) return;\n    validate(value, name);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (hasSubmit) setValidateByKeyUp(true);\n  }, [hasSubmit]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      marginBottom: \"0.875rem\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {\n    htmlFor: id\n  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({\n    type: type,\n    id: id,\n    invalid: invalid,\n    disabled: disabled,\n    onBlur: handleBlur,\n    onKeyUp: handleKeyUp\n  }, props)), message ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, {\n    invalid: invalid\n  }, message) : null);\n};\n\nTextInput.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  focused: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  hasSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\nTextInput.defaultProps = {\n  type: \"text\",\n  id: undefined,\n  label: undefined,\n  focused: undefined,\n  message: undefined,\n  invalid: undefined,\n  disabled: false,\n  hasSubmit: false,\n  validate: function validate() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextInput);\n\n//# sourceURL=webpack:///./src/component/components/Input.jsx?");

/***/ }),

/***/ "./src/component/components/Title.jsx":
/*!********************************************!*\
  !*** ./src/component/components/Title.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"Title__StyledTitle\",\n  componentId: \"sc-3kwym3-0\"\n})([\"margin:1rem 0 2rem 0;padding-bottom:0.375rem;border-bottom:solid 1px #9654ff;color:#9654ff;font-size:24px;font-weight:500;text-align:center;\"]);\n\nvar Title = function Title(_ref) {\n  var text = _ref.text;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, null, text || '');\n};\n\nTitle.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nTitle.defaultProps = {\n  text: undefined\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\n//# sourceURL=webpack:///./src/component/components/Title.jsx?");

/***/ }),

/***/ "./src/component/scene/EditProfile.jsx":
/*!*********************************************!*\
  !*** ./src/component/scene/EditProfile.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/user */ \"./src/modal/user.js\");\n/* harmony import */ var modal_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modal/validator */ \"./src/modal/validator.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Input */ \"./src/component/components/Input.jsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ \"./src/component/components/Button.jsx\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Title */ \"./src/component/components/Title.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n // import axios from 'axios';\n\n\n\n\n\nvar EditProfile = function EditProfile() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      invalids = _useState4[0],\n      setInvalids = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: false,\n    mail: false\n  }),\n      _useState6 = _slicedToArray(_useState5, 2),\n      validWay = _useState6[0],\n      setValidWay = _useState6[1];\n\n  var eventValidator = function eventValidator(value, name) {\n    try {\n      var isValid = Object(modal_user__WEBPACK_IMPORTED_MODULE_1__[\"validateForUserItem\"])(value, name);\n\n      if (isValid) {\n        delete invalids[name];\n        setInvalids(_objectSpread({}, invalids));\n      }\n    } catch (error) {\n      setInvalids(_objectSpread({}, invalids, _defineProperty({}, name, Object(modal_validator__WEBPACK_IMPORTED_MODULE_2__[\"normalizeSingleError\"])(error))));\n    }\n  };\n\n  var handleOnChange = function handleOnChange(_ref) {\n    var _ref$currentTarget = _ref.currentTarget,\n        name = _ref$currentTarget.name,\n        value = _ref$currentTarget.value;\n    setInputs(_objectSpread({}, inputs, _defineProperty({}, name, value)));\n  };\n\n  var handleBlur = function handleBlur(e) {\n    var _e$currentTarget = e.currentTarget,\n        value = _e$currentTarget.value,\n        name = _e$currentTarget.name;\n    if (validWay[name]) return;\n    eventValidator(value, name);\n    setValidWay(_objectSpread({}, validWay, _defineProperty({}, name, true)));\n  };\n\n  var handleKeyUp = function handleKeyUp(e) {\n    var _e$currentTarget2 = e.currentTarget,\n        value = _e$currentTarget2.value,\n        name = _e$currentTarget2.name;\n    if (!validWay[name]) return;\n    eventValidator(value, name);\n  };\n\n  var validInputs = function validInputs(validFunc, input) {\n    var isValid = false;\n\n    try {\n      isValid = validFunc(input);\n    } catch (err) {\n      setInvalids(Object(modal_validator__WEBPACK_IMPORTED_MODULE_2__[\"normalizeAllError\"])(err));\n    }\n\n    return isValid;\n  };\n\n  var handleFormSubmit = function handleFormSubmit(e) {\n    var valid;\n    return regeneratorRuntime.async(function handleFormSubmit$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            e.preventDefault(); // const eee = await axios.get('http://localhost:2222/app');\n\n            valid = validInputs(modal_user__WEBPACK_IMPORTED_MODULE_1__[\"validateForUser\"], inputs);\n\n            if (valid) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 4:\n            Object.keys(validWay).forEach(function (el) {\n              validWay[el] = true;\n            });\n            setValidWay(validWay);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '360px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    text: \"Edit User\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"User Name\",\n    name: \"name\",\n    onChange: handleOnChange,\n    onBlur: handleBlur,\n    onKeyUp: handleKeyUp,\n    value: inputs.name,\n    invalid: !!invalids.name,\n    message: invalids.name\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Mobile\",\n    name: \"mobile\",\n    onChange: handleOnChange,\n    onBlur: handleBlur,\n    onKeyUp: handleKeyUp,\n    value: inputs.mobile,\n    invalid: !!invalids.mobile,\n    message: invalids.mobile\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Nation ID\",\n    name: \"nationId\",\n    onChange: handleOnChange,\n    onBlur: handleBlur,\n    onKeyUp: handleKeyUp,\n    value: inputs.nationId,\n    invalid: !!invalids.nationId,\n    message: invalids.nationId\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Address\",\n    name: \"address\",\n    onChange: handleOnChange,\n    onBlur: handleBlur,\n    onKeyUp: handleKeyUp,\n    value: inputs.address,\n    invalid: !!invalids.address,\n    message: invalids.address\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onClick: handleFormSubmit\n  }, \"Submit\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProfile);\n\n//# sourceURL=webpack:///./src/component/scene/EditProfile.jsx?");

/***/ }),

/***/ "./src/component/scene/SignUp.jsx":
/*!****************************************!*\
  !*** ./src/component/scene/SignUp.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var modal_signUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modal/signUp */ \"./src/modal/signUp.js\");\n/* harmony import */ var modal_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modal/validator */ \"./src/modal/validator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Title */ \"./src/component/components/Title.jsx\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Input */ \"./src/component/components/Input.jsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ \"./src/component/components/Button.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar SignUp = function SignUp(_ref) {\n  var baseUrl = _ref.baseUrl;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      invalids = _useState4[0],\n      setInvalids = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      hasSubmit = _useState6[0],\n      setHasSubmit = _useState6[1];\n\n  var handleOnChange = function handleOnChange(_ref2) {\n    var _ref2$currentTarget = _ref2.currentTarget,\n        name = _ref2$currentTarget.name,\n        value = _ref2$currentTarget.value;\n    setInputs(_objectSpread({}, inputs, _defineProperty({}, name, value)));\n  };\n\n  var eventValidator = function eventValidator(value, name) {\n    console.log('single');\n\n    try {\n      var isValid = Object(modal_signUp__WEBPACK_IMPORTED_MODULE_2__[\"validateForSignUpItem\"])(value, name);\n\n      if (isValid) {\n        delete invalids[name];\n        setInvalids(_objectSpread({}, invalids));\n      }\n    } catch (error) {\n      setInvalids(_objectSpread({}, invalids, _defineProperty({}, name, Object(modal_validator__WEBPACK_IMPORTED_MODULE_3__[\"normalizeSingleError\"])(error))));\n    }\n  };\n\n  var validInputs = function validInputs(validFunc, input) {\n    var isValid = false;\n\n    try {\n      isValid = validFunc(input);\n    } catch (err) {\n      setInvalids(Object(modal_validator__WEBPACK_IMPORTED_MODULE_3__[\"normalizeAllError\"])(err));\n    }\n\n    return isValid;\n  };\n\n  var handleFormSubmit = function handleFormSubmit(e) {\n    var valid, eee;\n    return regeneratorRuntime.async(function handleFormSubmit$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            e.preventDefault();\n            setHasSubmit(true);\n            valid = validInputs(modal_signUp__WEBPACK_IMPORTED_MODULE_2__[\"validateForSignUp\"], inputs);\n\n            if (valid) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\");\n\n          case 5:\n            _context.next = 7;\n            return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"\".concat(baseUrl, \"/signUp\")));\n\n          case 7:\n            eee = _context.sent;\n            console.log(eee);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '360px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    text: \"Sign Up\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    label: \"User Name\",\n    name: \"name\",\n    onChange: handleOnChange,\n    value: inputs.name,\n    invalid: !!invalids.name,\n    message: invalids.name,\n    validate: eventValidator,\n    hasSubmit: hasSubmit\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    label: \"Email\",\n    name: \"email\",\n    onChange: handleOnChange,\n    value: inputs.email,\n    invalid: !!invalids.email,\n    message: invalids.email,\n    validate: eventValidator,\n    hasSubmit: hasSubmit\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2rem'\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    label: \"Password\",\n    name: \"password\",\n    onChange: handleOnChange,\n    value: inputs.password,\n    invalid: !!invalids.password,\n    message: invalids.password,\n    validate: eventValidator,\n    hasSubmit: hasSubmit\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    label: \"Confirm Password\",\n    name: \"confirmPassword\",\n    onChange: handleOnChange,\n    value: inputs.confirmPassword,\n    invalid: !!invalids.confirmPassword,\n    message: invalids.confirmPassword,\n    validate: eventValidator,\n    hasSubmit: hasSubmit\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: handleFormSubmit\n  }, \"Submit\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nSignUp.propTypes = {\n  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nSignUp.defaultProps = {\n  baseUrl: undefined\n};\n\n//# sourceURL=webpack:///./src/component/scene/SignUp.jsx?");

/***/ }),

/***/ "./src/modal/schema/EditProfile.json":
/*!*******************************************!*\
  !*** ./src/modal/schema/EditProfile.json ***!
  \*******************************************/
/*! exports provided: $schema, $id, definitions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"http://json-schema.org/draft-07/schema\\\",\\\"$id\\\":\\\"http://ajv-demo/EditProfile.json\\\",\\\"definitions\\\":{\\\"ForEditProfile\\\":{\\\"properties\\\":{\\\"name\\\":{\\\"$ref\\\":\\\"common.json#/definitions/name\\\"},\\\"mobile\\\":{\\\"$ref\\\":\\\"common.json#/definitions/mobile\\\"},\\\"gender\\\":{\\\"$ref\\\":\\\"common.json#/definitions/gender\\\"},\\\"address\\\":{\\\"$ref\\\":\\\"common.json#/definitions/gender\\\"}},\\\"required\\\":[\\\"name\\\",\\\"mobile\\\",\\\"gender\\\"],\\\"errorMessage\\\":{\\\"required\\\":\\\"This field is required\\\"}},\\\"name\\\":{\\\"allOf\\\":[{\\\"$ref\\\":\\\"common.json#/definitions/name\\\"},{\\\"minLength\\\":1,\\\"errorMessage\\\":{\\\"minLength\\\":\\\"This field is required\\\"}}]},\\\"mobile\\\":{\\\"allOf\\\":[{\\\"$ref\\\":\\\"common.json#/definitions/mobile\\\"},{\\\"minLength\\\":1,\\\"errorMessage\\\":{\\\"minLength\\\":\\\"This field is required\\\"}}]},\\\"address\\\":{\\\"$ref\\\":\\\"common.json#/definitions/gender\\\"}}}\");\n\n//# sourceURL=webpack:///./src/modal/schema/EditProfile.json?");

/***/ }),

/***/ "./src/modal/schema/SignUp.json":
/*!**************************************!*\
  !*** ./src/modal/schema/SignUp.json ***!
  \**************************************/
/*! exports provided: $schema, $id, definitions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"http://json-schema.org/draft-07/schema\\\",\\\"$id\\\":\\\"http://ajv-demo/signUp.json\\\",\\\"definitions\\\":{\\\"ForSignUp\\\":{\\\"properties\\\":{\\\"name\\\":{\\\"$ref\\\":\\\"common.json#/definitions/name\\\"},\\\"email\\\":{\\\"$ref\\\":\\\"common.json#/definitions/email\\\"},\\\"password\\\":{\\\"$ref\\\":\\\"common.json#/definitions/password\\\"},\\\"confirmPassword\\\":{\\\"const\\\":{\\\"$data\\\":\\\"1/password\\\"},\\\"errorMessage\\\":{\\\"const\\\":\\\"Password should be the same\\\"}}},\\\"required\\\":[\\\"name\\\",\\\"email\\\",\\\"password\\\",\\\"confirmPassword\\\"],\\\"errorMessage\\\":{\\\"required\\\":\\\"This field is required\\\"}},\\\"name\\\":{\\\"allOf\\\":[{\\\"$ref\\\":\\\"common.json#/definitions/name\\\"},{\\\"minLength\\\":1,\\\"errorMessage\\\":{\\\"minLength\\\":\\\"This field is required\\\"}}]},\\\"email\\\":{\\\"allOf\\\":[{\\\"$ref\\\":\\\"common.json#/definitions/email\\\"},{\\\"minLength\\\":1,\\\"errorMessage\\\":{\\\"minLength\\\":\\\"This field is required\\\"}}]},\\\"password\\\":{\\\"allOf\\\":[{\\\"$ref\\\":\\\"common.json#/definitions/password\\\"},{\\\"minLength\\\":1,\\\"errorMessage\\\":{\\\"minLength\\\":\\\"This field is required\\\"}}]},\\\"confirmPassword\\\":{\\\"const\\\":{\\\"$data\\\":\\\"0/password\\\"},\\\"errorMessage\\\":{\\\"const\\\":\\\"Password should be the same\\\"}}}}\");\n\n//# sourceURL=webpack:///./src/modal/schema/SignUp.json?");

/***/ }),

/***/ "./src/modal/schema/common.json":
/*!**************************************!*\
  !*** ./src/modal/schema/common.json ***!
  \**************************************/
/*! exports provided: $schema, $id, definitions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"http://json-schema.org/draft-07/schema\\\",\\\"$id\\\":\\\"http://ajv-demo/common.json\\\",\\\"definitions\\\":{\\\"name\\\":{\\\"type\\\":\\\"string\\\",\\\"pattern\\\":\\\"^[a-zA-Z\\\\\\\\u4e00-\\\\\\\\u9fa5]+$\\\",\\\"maxLength\\\":100,\\\"errorMessage\\\":{\\\"pattern\\\":\\\"lease provide valid userName\\\",\\\"maxLength\\\":\\\"name should less then 100 digits\\\"}},\\\"email\\\":{\\\"type\\\":\\\"string\\\",\\\"maxLength\\\":256,\\\"pattern\\\":\\\"^([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x22([^\\\\\\\\x0d\\\\\\\\x22\\\\\\\\x5c\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x22)(\\\\\\\\x2e([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x22([^\\\\\\\\x0d\\\\\\\\x22\\\\\\\\x5c\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x22))*\\\\\\\\x40([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x5b([^\\\\\\\\x0d\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x5d)(\\\\\\\\x2e([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x5b([^\\\\\\\\x0d\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x5d))*$\\\",\\\"errorMessage\\\":{\\\"pattern\\\":\\\"Please provide valid email\\\",\\\"maxLength\\\":\\\"Email should more less than 256 digits\\\"}},\\\"password\\\":{\\\"type\\\":\\\"string\\\",\\\"minLength\\\":8,\\\"maxLength\\\":20,\\\"pattern\\\":\\\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]+$\\\",\\\"errorMessage\\\":{\\\"minLength\\\":\\\"Password should more than 8 digits\\\",\\\"maxLength\\\":\\\"Password should less than 20 digits\\\",\\\"pattern\\\":\\\"Please provide valid password\\\"}},\\\"mobile\\\":{\\\"type\\\":\\\"string\\\",\\\"pattern\\\":\\\"^09[0-9]{8}$\\\",\\\"errorMessage\\\":{\\\"pattern\\\":\\\"Please provide valid mobile\\\"}},\\\"gender\\\":{\\\"type\\\":\\\"string\\\",\\\"enum\\\":[\\\"male\\\",\\\"female\\\",\\\"juristic\\\"]},\\\"address\\\":{\\\"type\\\":\\\"string\\\"}}}\");\n\n//# sourceURL=webpack:///./src/modal/schema/common.json?");

/***/ }),

/***/ "./src/modal/schema/user.json":
/*!************************************!*\
  !*** ./src/modal/schema/user.json ***!
  \************************************/
/*! exports provided: $schema, $id, definitions, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"http://json-schema.org/draft-07/schema\\\",\\\"$id\\\":\\\"http://ajv-demo/user.json\\\",\\\"definitions\\\":{\\\"ForUser\\\":{\\\"properties\\\":{\\\"name\\\":{\\\"type\\\":\\\"string\\\",\\\"pattern\\\":\\\"^[a-zA-Z\\\\\\\\u4e00-\\\\\\\\u9fa5]+$\\\",\\\"maxLength\\\":100,\\\"errorMessage\\\":{\\\"pattern\\\":\\\"should be a valid name\\\",\\\"maxLength\\\":\\\"name should less then 100 digits\\\"}},\\\"mail\\\":{\\\"type\\\":\\\"string\\\",\\\"maxLength\\\":256,\\\"pattern\\\":\\\"^([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x22([^\\\\\\\\x0d\\\\\\\\x22\\\\\\\\x5c\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x22)(\\\\\\\\x2e([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x22([^\\\\\\\\x0d\\\\\\\\x22\\\\\\\\x5c\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x22))*\\\\\\\\x40([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x5b([^\\\\\\\\x0d\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x5d)(\\\\\\\\x2e([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x5b([^\\\\\\\\x0d\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x5d))*$\\\",\\\"errorMessage\\\":{\\\"pattern\\\":\\\"error:schema.pattern\\\"}}},\\\"required\\\":[\\\"name\\\",\\\"mail\\\"],\\\"errorMessage\\\":{\\\"required\\\":\\\"required filed\\\"}},\\\"name\\\":{\\\"type\\\":\\\"string\\\",\\\"pattern\\\":\\\"^[a-zA-Z\\\\\\\\u4e00-\\\\\\\\u9fa5]+$\\\",\\\"maxLength\\\":100,\\\"minLength\\\":1,\\\"errorMessage\\\":{\\\"pattern\\\":\\\"should be a valid name\\\",\\\"maxLength\\\":\\\"name should less then 100 digits\\\",\\\"minLength\\\":\\\"name should more then 1 digits\\\"}},\\\"mail\\\":{\\\"type\\\":\\\"string\\\",\\\"maxLength\\\":256,\\\"minLength\\\":1,\\\"pattern\\\":\\\"^([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x22([^\\\\\\\\x0d\\\\\\\\x22\\\\\\\\x5c\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x22)(\\\\\\\\x2e([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x22([^\\\\\\\\x0d\\\\\\\\x22\\\\\\\\x5c\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x22))*\\\\\\\\x40([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x5b([^\\\\\\\\x0d\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x5d)(\\\\\\\\x2e([^\\\\\\\\x00-\\\\\\\\x20\\\\\\\\x22\\\\\\\\x28\\\\\\\\x29\\\\\\\\x2c\\\\\\\\x2e\\\\\\\\x3a-\\\\\\\\x3c\\\\\\\\x3e\\\\\\\\x40\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x7f-\\\\\\\\xff]{1,64}|\\\\\\\\x5b([^\\\\\\\\x0d\\\\\\\\x5b-\\\\\\\\x5d\\\\\\\\x80-\\\\\\\\xff]|\\\\\\\\x5c[\\\\\\\\x00-\\\\\\\\x7f])*\\\\\\\\x5d))*$\\\",\\\"errorMessage\\\":{\\\"pattern\\\":\\\"error:schema.pattern\\\",\\\"minLength\\\":\\\"email should more then 1 digits\\\"}}}}\");\n\n//# sourceURL=webpack:///./src/modal/schema/user.json?");

/***/ }),

/***/ "./src/modal/signUp.js":
/*!*****************************!*\
  !*** ./src/modal/signUp.js ***!
  \*****************************/
/*! exports provided: SCHEMA_ID, validateForSignUp, validateForSignUpItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCHEMA_ID\", function() { return SCHEMA_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForSignUp\", function() { return validateForSignUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForSignUpItem\", function() { return validateForSignUpItem; });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./src/modal/validator.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar SCHEMA_ID = \"http://ajv-demo/signUp.json\";\nvar validateForSignUp = function validateForSignUp(data) {\n  return Object(_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, \"\".concat(SCHEMA_ID, \"#/definitions/ForSignUp\"));\n}; // Front-End\n\nfunction validateForSignUpItem(json, target) {\n  var validTarget = _defineProperty({}, target, json);\n\n  return Object(_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(validTarget, \"\".concat(SCHEMA_ID, \"#/definitions\"));\n}\n\n//# sourceURL=webpack:///./src/modal/signUp.js?");

/***/ }),

/***/ "./src/modal/user.js":
/*!***************************!*\
  !*** ./src/modal/user.js ***!
  \***************************/
/*! exports provided: SCHEMA_ID, validateForUser, validateForUserItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCHEMA_ID\", function() { return SCHEMA_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForUser\", function() { return validateForUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForUserItem\", function() { return validateForUserItem; });\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ \"./src/modal/validator.js\");\n\nvar SCHEMA_ID = \"http://ajv-demo/user.json\";\nvar validateForUser = function validateForUser(data) {\n  return Object(_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, \"\".concat(SCHEMA_ID, \"#/definitions/ForUser\"));\n}; // Front-End\n\nfunction validateForUserItem(json, target) {\n  return Object(_validator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json, \"\".concat(SCHEMA_ID, \"#/definitions/\").concat(target));\n}\n\n//# sourceURL=webpack:///./src/modal/user.js?");

/***/ }),

/***/ "./src/modal/validator.js":
/*!********************************!*\
  !*** ./src/modal/validator.js ***!
  \********************************/
/*! exports provided: ajv, normalizeSingleError, normalizeAllError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ajv\", function() { return ajv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeSingleError\", function() { return normalizeSingleError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeAllError\", function() { return normalizeAllError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validate; });\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ajv */ \"ajv\");\n/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ajv_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ajv-errors */ \"ajv-errors\");\n/* harmony import */ var ajv_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ajv_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var json_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-pointer */ \"json-pointer\");\n/* harmony import */ var json_pointer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_pointer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _schema_user_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema/user.json */ \"./src/modal/schema/user.json\");\nvar _schema_user_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./schema/user.json */ \"./src/modal/schema/user.json\", 1);\n/* harmony import */ var _schema_common_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema/common.json */ \"./src/modal/schema/common.json\");\nvar _schema_common_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./schema/common.json */ \"./src/modal/schema/common.json\", 1);\n/* harmony import */ var _schema_SignUp_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schema/SignUp.json */ \"./src/modal/schema/SignUp.json\");\nvar _schema_SignUp_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./schema/SignUp.json */ \"./src/modal/schema/SignUp.json\", 1);\n/* harmony import */ var _schema_EditProfile_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema/EditProfile.json */ \"./src/modal/schema/EditProfile.json\");\nvar _schema_EditProfile_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./schema/EditProfile.json */ \"./src/modal/schema/EditProfile.json\", 1);\n\n\n\n\n\n\n\nvar ajv = new ajv__WEBPACK_IMPORTED_MODULE_0___default.a({\n  $data: true,\n  allErrors: true,\n  jsonPointers: true,\n  schemas: {\n    Common: _schema_common_json__WEBPACK_IMPORTED_MODULE_4__,\n    User: _schema_user_json__WEBPACK_IMPORTED_MODULE_3__,\n    SignUp: _schema_SignUp_json__WEBPACK_IMPORTED_MODULE_5__,\n    EditProfile: _schema_EditProfile_json__WEBPACK_IMPORTED_MODULE_6__\n  }\n});\najv_errors__WEBPACK_IMPORTED_MODULE_1___default()(ajv);\nfunction normalizeSingleError() {\n  var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var errorMessage = null;\n  console.log(\"error\", errors);\n  errors.forEach(function (error) {\n    errorMessage = error.message;\n  });\n  return errorMessage;\n}\nfunction normalizeAllError() {\n  var ajvErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var result = {};\n  console.log(\"ajvErrors\", ajvErrors);\n  ajvErrors.forEach(function (error) {\n    var keyword = error.keyword,\n        dataPath = error.dataPath,\n        params = error.params,\n        message = error.message;\n\n    if (dataPath) {\n      json_pointer__WEBPACK_IMPORTED_MODULE_2___default.a.set(result, dataPath, message);\n    } else if (keyword === \"required\") {\n      result[params.missingProperty] = message;\n    }\n\n    if (keyword === \"errorMessage\" && !dataPath) {\n      params.errors.forEach(function (oriError) {\n        result[oriError.params.missingProperty] = message;\n      });\n    }\n  });\n  return result;\n}\nfunction validate(data, schema) {\n  var isValid = ajv.validate(schema, data);\n\n  if (!isValid) {\n    throw ajv.errors;\n  }\n\n  return isValid;\n}\n\n//# sourceURL=webpack:///./src/modal/validator.js?");

/***/ }),

/***/ "./src/server/app.js":
/*!***************************!*\
  !*** ./src/server/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var component_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/app */ \"./src/component/app.jsx\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path.join(__dirname)));\napp.get(\"/signUp\", function (req, res) {});\napp.get(\"/editProfile\", function (req, res) {});\napp.get(\"*\", function (req, res) {\n  res.send(\"\\n  <!DOCTYPE html>\\n    <head>\\n    <base href=\\\"/\\\" />\\n      <title>AJV</title>\\n    </head>\\n    <body>\\n      <div id=\\\"app\\\">\".concat(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), \"</div>\\n      <script src=\\\"/bundle.js\\\" defer=\\\"\\\"></script>\\n    </body>\\n  </html>\\n  \"));\n});\napp.listen(2222, function () {// console.log('server on port 3000');\n});\n\n//# sourceURL=webpack:///./src/server/app.js?");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi @babel/polyfill ./src/server/app.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/app.js */\"./src/server/app.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server/app.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ajv\");\n\n//# sourceURL=webpack:///external_%22ajv%22?");

/***/ }),

/***/ "ajv-errors":
/*!*****************************!*\
  !*** external "ajv-errors" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ajv-errors\");\n\n//# sourceURL=webpack:///external_%22ajv-errors%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "json-pointer":
/*!*******************************!*\
  !*** external "json-pointer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"json-pointer\");\n\n//# sourceURL=webpack:///external_%22json-pointer%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });