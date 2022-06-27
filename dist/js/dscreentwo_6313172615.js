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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/electroacoustic_project/dscreentwo.js");
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

/***/ "./src/css/electroacoustic_project/dscreentwo.less":
/*!*********************************************************!*\
  !*** ./src/css/electroacoustic_project/dscreentwo.less ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/electroacoustic_project/dscreentwo.less?");

/***/ }),

/***/ "./src/js/electroacoustic_project/dscreentwo.js":
/*!******************************************************!*\
  !*** ./src/js/electroacoustic_project/dscreentwo.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_electroacoustic_project_dscreentwo_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/electroacoustic_project/dscreentwo.less */ \"./src/css/electroacoustic_project/dscreentwo.less\");\n/* harmony import */ var _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/apiUrls */ \"./src/common/apiUrls.js\");\n\r\n\r\n\r\n(function () {\r\n  \"use strict\";\r\n  var script = document.createElement(\"script\");\r\n  script.type = \"text/javascript\";\r\n  script.src =\r\n    \"https://img.singschool.cn/wl/file/20210127134959919-1609509650.js\";\r\n\r\n  document.body.appendChild(script);\r\n  var typeNum = [0, 0, 0, 0, 0, 0];\r\n\r\n  window.onload = function () {\r\n    let init = {\r\n      getList: function () {\r\n        client.post(\r\n          _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__[\"apiUrls\"].entry,\r\n          {\r\n            paramData: {},\r\n            asmName: \"DJ_阵营歌手榜\",\r\n          },\r\n          (res) => {\r\n            let sum = res.result.resultData.totaldl[0].total || 14000;\r\n            let arr = res.result.resultData.ResultTable || [];\r\n            let dom = ``;\r\n            arr.map((item, index) => {\r\n              if (index == 3) {\r\n                dom += `\r\n                <div class=\"kongkong\"></div>\r\n                <div class=\"screen\" data-tishi=\"li\">\r\n                  <div class=\"screen-center\" style=\"display:${\r\n                    item.IsPublic == 1 ? \"flex\" : \"none\"\r\n                  }\">\r\n                    <div class=\"top\">\r\n                      <div class=\"left\"> \r\n                        <img class=\"icon_man\" src=\"https://oss.canxingtv.com/wl/file/20220619152042648-65462375.png\" alt=\"\">\r\n                        <div class=\"num\">${item.Yirens.length}</div>\r\n                      </div>\r\n                      <div class=\"right\"> \r\n                        <img class=\"icon_d\" src=\"https://oss.canxingtv.com/wl/file/20220616161513600-1804344394.png\" alt=\"\">\r\n                        <div class=\"num\">${item.DL}</div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                    <div class=\"bottom\">\r\n                    ${item.Remark}\r\n                    </div>\r\n                  </div>\r\n                </div>`;\r\n              } else {\r\n                dom += `\r\n                <div class=\"screen\" data-tishi=\"li\">\r\n                  <div class=\"screen-center\" style=\"display:${\r\n                    item.IsPublic == 1 ? \"flex\" : \"none\"\r\n                  }\">\r\n                    <div class=\"top\">\r\n                      <div class=\"left\"> \r\n                        <img class=\"icon_man\" src=\"https://oss.canxingtv.com/wl/file/20220619152042648-65462375.png\" alt=\"\">\r\n                        <div class=\"num\">${item.Yirens.length}</div>\r\n                      </div>\r\n                      <div class=\"right\"> \r\n                        <img class=\"icon_d\" src=\"https://oss.canxingtv.com/wl/file/20220616161513600-1804344394.png\" alt=\"\">\r\n                        <div class=\"num\">${item.DL}</div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                    <div class=\"bottom\">\r\n                    ${item.Remark}\r\n                    </div>\r\n                  </div>\r\n                </div>`;\r\n              }\r\n              // if (item.IsPublic == 1) {\r\n              //   let dom = $(\".screen_two\")\r\n              //     .find(\".screen\")\r\n              //     .eq(index)\r\n              //     .children(\".screen-center\");\r\n              //     dom.css({ display: \"flex\" });\r\n              //   let liDom = dom\r\n              //     .children(\".second_left\")\r\n              //     .children(\".left_block\");\r\n              //   // 左侧电音人\r\n              //   liDom.children(\".songer_name\").html(`${item.SingerName}阵营`);\r\n              //   liDom.children(\".songer_num\").html(`${item.Yirens.length}人`);\r\n\r\n              // }\r\n            });\r\n            $(\".screen_two\").html(dom);\r\n          }\r\n        );\r\n      },\r\n    };\r\n    $().ready(function () {\r\n      init.getList();\r\n      setInterval(function () {\r\n        init.getList();\r\n      }, 3000);\r\n    });\r\n  };\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/electroacoustic_project/dscreentwo.js?");

/***/ })

/******/ });