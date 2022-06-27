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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/electroacoustic_project/singerpower.js");
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

/***/ "./src/css/electroacoustic_project/singerpower.less":
/*!**********************************************************!*\
  !*** ./src/css/electroacoustic_project/singerpower.less ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/electroacoustic_project/singerpower.less?");

/***/ }),

/***/ "./src/js/electroacoustic_project/singerpower.js":
/*!*******************************************************!*\
  !*** ./src/js/electroacoustic_project/singerpower.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_electroacoustic_project_singerpower_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/electroacoustic_project/singerpower.less */ \"./src/css/electroacoustic_project/singerpower.less\");\n/* harmony import */ var _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/apiUrls */ \"./src/common/apiUrls.js\");\n\r\n\r\n\r\n(function () {\r\n  \"use strict\";\r\n  var script = document.createElement(\"script\");\r\n  script.type = \"text/javascript\";\r\n  script.src =\r\n    \"https://img.singschool.cn/wl/file/20210127134959919-1609509650.js\";\r\n\r\n  document.body.appendChild(script);\r\n\r\n  window.onload = function () {\r\n    var beforelist = [],\r\n      num = 0;\r\n    var newlist;\r\n    function actionnow() {\r\n      client.post(\r\n        _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__[\"apiUrls\"].entry,\r\n        {\r\n          paramData: {},\r\n          asmName: \"DJ_歌手排行榜\",\r\n        },\r\n        (res) => {\r\n          if (\r\n            res.success &&\r\n            res.result &&\r\n            res.result.resultData &&\r\n            res.result.resultData.ResultTable\r\n          ) {\r\n            let result = res.result.resultData.ResultTable;\r\n            if (result.length > 0) {\r\n              result.forEach((el, index) => {\r\n                el.rightwidth = ((!!el.DL ? el.DL : 0) / 15000) * 100;\r\n                el.ewidth = ((!!el.TeamNum ? el.TeamNum : 0) / 30) * 100;\r\n              });\r\n              singerpower(result);\r\n            }\r\n          }\r\n        }\r\n      );\r\n    }\r\n\r\n    function singerpower(result) {\r\n      let listString = \"\";\r\n      for (var i = 0; i < result.length; i++) { \r\n        listString =\r\n          listString +\r\n          `<div class=\"screen_item\">\r\n                    <div class=\"item_left\">\r\n                        <div class=\"left_num\" style=\"background:${result[i].BgColor}\">${\r\n            result[i].num\r\n          }</div>\r\n                        <div class=\"left_box\">\r\n                            <div class=\"left_bg\" style=\"background:${result[i].BgColor}\"></div>\r\n                            <div class=\"left_top\">\r\n                                <div class=\"item_grem\">${\r\n                                  result[i].SingerName\r\n                                }阵营：</div>\r\n                                <div class=\"item_num\">${\r\n                                  !!result[i].TeamNum ? result[i].TeamNum : 0\r\n                                }人</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item_right\">\r\n                        <div class=\"right-center\">\r\n                            <div class=\"right_color\">\r\n                                <div class=\"right_line\"></div>\r\n                                <div class=\"right_show\"></div>\r\n                            </div>\r\n                            <div class=\"right_number\">\r\n                                <img src=\"https://oss.canxingtv.com/wl/file/20220617113158869-1060010739.png\" alt=\"\" class=\"icon\">\r\n                                <div class=\"number\">${result[i].DL}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>`;\r\n      }\r\n      $(\".screen_box\").html(listString);\r\n      animate(result);\r\n    }\r\n    function animate(result) {\r\n      $(\".screen_item .left_bg\").each((index, item) => {\r\n        let timelong = result[index].rightwidth / 2;\r\n        if (beforelist.length != 0) {\r\n          if (beforelist[index].TeamNum != result[index].TeamNum) {\r\n            $(item).animate(\r\n              { width: result[index].ewidth + \"%\" },\r\n              timelong * 200\r\n            );\r\n          } else {\r\n            $(item).css({ width: result[index].ewidth + \"%\" });\r\n          }\r\n        } else {\r\n          $(item).animate(\r\n            { width: result[index].ewidth + \"%\" },\r\n            timelong * 200\r\n          );\r\n        }\r\n      });\r\n\r\n      $(\".screen_item .item_right .right_show\").each((index, item) => {\r\n        let timelong = result[index].rightwidth / 2;\r\n        if (beforelist.length != 0) {\r\n          if (beforelist[index].TeamNum != result[index].TeamNum) {\r\n            $(item).animate(\r\n              { width: result[index].rightwidth + \"%\" },\r\n              timelong * 200\r\n            );\r\n          } else {\r\n            $(item).css({ width: result[index].rightwidth + \"%\" });\r\n          }\r\n        } else {\r\n          $(item).animate(\r\n            { width: result[index].rightwidth + \"%\" },\r\n            timelong * 200\r\n          );\r\n        }\r\n      });\r\n\r\n      beforelist = result;\r\n    }\r\n\r\n    function runningman() {\r\n      client.post(\r\n        _common_apiUrls__WEBPACK_IMPORTED_MODULE_1__[\"apiUrls\"].entry,\r\n        {\r\n          paramData: {},\r\n          asmName: \"DJ_正在表演的人\",\r\n        },\r\n        (res) => {\r\n          if (\r\n            res.success &&\r\n            res.result &&\r\n            res.result.resultData &&\r\n            res.result.resultData.ResultTable\r\n          ) {\r\n            let result = res.result.resultData.ResultTable[0];\r\n            console.log(result);\r\n            animateaction(result.Name, result.Remark);\r\n          }\r\n        }\r\n      );\r\n    }\r\n    function animateaction(title, text) {\r\n      $(\".body_class .screen-one\").fadeIn(\"fast\");\r\n      $(\".body_class .screen-one .left_box .box_title .title\").text(title);\r\n      $(\".body_class .screen-one .left_box .box_text\").text(text);\r\n      $(\".body_class .screen-one .left_box\").css(\"opacity\", \"1\");\r\n    }\r\n\r\n    $().ready(function () {\r\n      //   runningman();\r\n      actionnow();\r\n      setInterval(() => {\r\n        // runningman();\r\n        // actionnow();\r\n      }, 2000);\r\n    });\r\n  };\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/electroacoustic_project/singerpower.js?");

/***/ })

/******/ });