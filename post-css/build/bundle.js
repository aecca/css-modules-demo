/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _buttons = __webpack_require__(1);

	var _buttons2 = _interopRequireDefault(_buttons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var html = '\n<button class=\'' + _buttons2.default.button + '\'>Default</button>\n<button class=\'' + _buttons2.default.danger + '\'>Submit</button>\n<button class=\'' + _buttons2.default.warning + '\'>Warning</button>\n';

	document.write(html);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"colors":"\"./shared/colors.css\"","primary":"#ccc","light":"#fff","red":"#b53c3c","blue":"#ddd","orange":"#ec810b","green":"#aaf200","medium":"18pt","large":"22pt","light-shadow":"4px 4px 2px #fafafa","padding-all-medium":"2px 4px","button":"buttons__button___F1HcM","danger":"buttons__danger___3GJX_ buttons__button___F1HcM","warning":"buttons__warning___3AUQx buttons__button___F1HcM","success":"buttons__success___Rf6fb buttons__button___F1HcM"};

/***/ }
/******/ ]);