/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _big = __webpack_require__(2);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(3);

var _small2 = _interopRequireDefault(_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'file-loader'\n    at Function.Module._resolveFilename (module.js:469:15)\n    at Function.Module._load (module.js:417:25)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at Object.module.exports (/Users/justinafsari/Applications/js_modules/node_modules/url-loader/index.js:35:24)");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 4 */
/***/ function(module, exports) {



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ }
/******/ ]);