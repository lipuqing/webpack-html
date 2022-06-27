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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/electroacoustic_project/dscreenone.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiUrls\", function() { return apiUrls; });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/common/api.js\");\n// const host = \"https://mp.canxingtv.com/\";\r\n\r\nconst apiUrls = {\r\n    host: _api_js__WEBPACK_IMPORTED_MODULE_0__[\"host\"],\r\n    // 好声音十周年歌曲\r\n    songsHsySongs: _api_js__WEBPACK_IMPORTED_MODULE_0__[\"host\"] + 'api/song/hsy/songs',\r\n    // 通用接口 api/entry\r\n    entry: _api_js__WEBPACK_IMPORTED_MODULE_0__[\"host\"] + 'api/entry',\r\n}\n\n//# sourceURL=webpack:///./src/common/apiUrls.js?");

/***/ }),

/***/ "./src/css/electroacoustic_project/dscreenone.less":
/*!*********************************************************!*\
  !*** ./src/css/electroacoustic_project/dscreenone.less ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/electroacoustic_project/dscreenone.less?");

/***/ }),

/***/ "./src/js/electroacoustic_project/dscreenone.js":
/*!******************************************************!*\
  !*** ./src/js/electroacoustic_project/dscreenone.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_electroacoustic_project_dscreenone_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/electroacoustic_project/dscreenone.less */ \"./src/css/electroacoustic_project/dscreenone.less\");\n/* harmony import */ var _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/apiUrls */ \"./src/common/apiUrls.js\");\n\r\n\r\n\r\n(function () {\r\n    'use strict'\r\n    var script = document.createElement(\"script\");\r\n    script.type = \"text/javascript\";\r\n    script.src = \"https://img.singschool.cn/wl/file/20210127134959919-1609509650.js\";\r\n\r\n    document.body.appendChild(script);\r\n    var showIndex = 1\r\n\r\n    window.onload = function () {\r\n        function showcontent() {\r\n            client.post(_common_apiUrls__WEBPACK_IMPORTED_MODULE_1__[\"apiUrls\"].entry, {\r\n                \"paramData\": {},\r\n                \"asmName\": \"DJ_所有歌手\"\r\n            }, (res) => {\r\n                console.log('DJ_所有歌手')\r\n                console.log(res.result.resultData.ResultTable)\r\n                if (res.success && res.result && res.result.resultData && res.result.resultData.ResultTable) {\r\n                    let result = res.result.resultData.ResultTable\r\n                    if (result.length > 0) {\r\n                        resultshow(result)\r\n                    }\r\n                }\r\n            })\r\n        }\r\n\r\n        function resultshow(result) {\r\n            console.log(result)\r\n            let listString = ''\r\n            for (var i = 0; i < result.length; i++) {\r\n                console.log(result[i].OnShow == 0)\r\n                listString = listString + `<div class=\"screen\">\r\n                <div class=\"left_text\">\r\n                    <div class=\"left_box\">\r\n                        <div class=\"box_title\">神秘歌手</div>\r\n                        <div class=\"box_text\">${result[i].Remark}</div>\r\n                    </div>\r\n                </div>\r\n            </div>`\r\n                // if (result[i].OnShow == -1 || result[i].OnShow == 0) {\r\n                //     listString = listString + `<div class=\"screen\">\r\n                //     <div class=\"left_text\">\r\n                //         <div class=\"left_box\">\r\n                //             <div class=\"box_title\">神秘歌手</div>\r\n                //             <div class=\"box_text\">${result[i].Remark}</div>\r\n                //         </div>\r\n                //     </div>\r\n                // </div>`\r\n                // } else {\r\n                //     listString = listString + `<div class=\"screen\">\r\n                //     <div class=\"left_text\">\r\n                //         <div class=\"left_box\">\r\n                //             <div class=\"box_title\">神秘歌手</div>\r\n                //             <div class=\"box_text\">${result[i].Remark}</div>\r\n                //         </div>\r\n                //     </div>\r\n                // </div>`\r\n                // }\r\n            }\r\n            $('.screen_one').append(listString);\r\n        }\r\n        // 未揭晓\r\n        function animateactionone(title, text) {\r\n            $('.body_class .screen_one').fadeIn(\"fast\")\r\n            $('.body_class .screen_one .left_text .box_title').text(title)\r\n            $('.body_class .screen_one .left_text .box_text').text(text)\r\n            $('.body_class .screen_one .left_box').css('opacity', '1')\r\n        }\r\n        $().ready(function () {\r\n            showcontent()\r\n            setTimeout(() => {\r\n                animateactionone('神秘歌手', '连续三年获得世界音乐大奖中国区最畅销艺人奖，获得第19届金曲奖最佳作曲人奖，入选美国CNN评出的“25位亚洲最具影响力人物。')\r\n            }, 10)\r\n        });\r\n    }\r\n})()\n\n//# sourceURL=webpack:///./src/js/electroacoustic_project/dscreenone.js?");

/***/ })

/******/ });