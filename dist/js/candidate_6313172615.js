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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/electroacoustic_project/candidate.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/api.js":
/*!***************************!*\
  !*** ./src/common/api.js ***!
  \***************************/
/*! exports provided: host */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"host\", function() { return host; });\nconsole.log(window.location.host)\r\nlet _host = window.location.host\r\n// export const  host =  _host.indexOf('192') == -1? \"https://mp.canxingtv.com/\":\"https://test.api.singchina.com/\";\r\nconst  host = \"https://mp.canxingtv.com/\"\r\n\n\n//# sourceURL=webpack:///./src/common/api.js?");

/***/ }),

/***/ "./src/common/apiUrls.js":
/*!*******************************!*\
  !*** ./src/common/apiUrls.js ***!
  \*******************************/
/*! exports provided: apiUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiUrls\", function() { return apiUrls; });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/common/api.js\");\n// const host = \"https://mp.canxingtv.com/\";\r\n\r\nconst apiUrls = {\r\n    host: _api_js__WEBPACK_IMPORTED_MODULE_0__[\"host\"],\r\n    // ????????????????????????\r\n    songsHsySongs: _api_js__WEBPACK_IMPORTED_MODULE_0__[\"host\"] + 'api/song/hsy/songs',\r\n    // ???????????? api/entry\r\n    entry: _api_js__WEBPACK_IMPORTED_MODULE_0__[\"host\"] + 'api/entry',\r\n}\n\n//# sourceURL=webpack:///./src/common/apiUrls.js?");

/***/ }),

/***/ "./src/css/electroacoustic_project/candidate.less":
/*!********************************************************!*\
  !*** ./src/css/electroacoustic_project/candidate.less ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/electroacoustic_project/candidate.less?");

/***/ }),

/***/ "./src/js/electroacoustic_project/candidate.js":
/*!*****************************************************!*\
  !*** ./src/js/electroacoustic_project/candidate.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_electroacoustic_project_candidate_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/electroacoustic_project/candidate.less */ \"./src/css/electroacoustic_project/candidate.less\");\n/* harmony import */ var _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/apiUrls */ \"./src/common/apiUrls.js\");\n\r\n\r\n\r\n(function () {\r\n    'use strict'\r\n    var script = document.createElement(\"script\");\r\n    script.type = \"text/javascript\";\r\n    script.src = \"https://img.singschool.cn/wl/file/20210127134959919-1609509650.js\";\r\n\r\n    document.body.appendChild(script);\r\n\r\n    window.onload = function () {\r\n        function runningman() {\r\n            client.post(_common_apiUrls__WEBPACK_IMPORTED_MODULE_1__[\"apiUrls\"].entry, {\r\n                \"paramData\": {},\r\n                \"asmName\": \"DJ_??????????????????\",\r\n            }, (res) => {\r\n                if (res.success && res.result && res.result.resultData && res.result.resultData.ResultTable) {\r\n                    let result = res.result.resultData.ResultTable[0]\r\n                    console.log(result)\r\n                    animateaction(result.Name, result.Remark )\r\n                }\r\n            })\r\n        }\r\n        function animateaction(title,text) {\r\n            $('.body_class .screen-one').fadeIn(\"fast\")\r\n            $('.body_class .screen-one .left_box .box_title .title').text(title)\r\n            $('.body_class .screen-one .left_box .box_text').text(text)\r\n            $('.body_class .screen-one .left_box').css('opacity', '1')\r\n        }\r\n\r\n        $().ready(function () {\r\n            runningman()\r\n            setInterval(()=>{\r\n                runningman()\r\n            },2000)\r\n        });\r\n    }\r\n})()\n\n//# sourceURL=webpack:///./src/js/electroacoustic_project/candidate.js?");

/***/ })

/******/ });