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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/city.js":
/*!****************************!*\
  !*** ./src/common/city.js ***!
  \****************************/
/*! exports provided: countryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countryList\", function() { return countryList; });\n  \r\n  const countryList = [{\"checkKey\":\"^(86){0,1}1\\\\d{10}$\",\"areaName\":\"中国大陆\",\"domainAbbreviation\":\"CN\",\"code\":\"86\"},{\"checkKey\":\"^(00){0,1}(886){1}0{0,1}[6,7,9](?:\\\\d{7}|\\\\d{8}|\\\\d{10})$\",\"areaName\":\"中国台湾\",\"domainAbbreviation\":\"TW\",\"code\":\"886\"},{\"checkKey\":\"^(00){0,1}(852){1}0{0,1}[1,4,5,6,9](?:\\\\d{7}|\\\\d{8}|\\\\d{12})$\",\"areaName\":\"中国香港\",\"domainAbbreviation\":\"HK\",\"code\":\"852\"},{\"checkKey\":\"^(00){0,1}(60){1}1\\\\d{8,9}$\",\"areaName\":\"马来西亚\",\"domainAbbreviation\":\"MY\",\"code\":\"60\"},{\"checkKey\":\"^(00){0,1}(65){1}[13689]\\\\d{6,7}$\",\"areaName\":\"新加坡\",\"domainAbbreviation\":\"SG\",\"code\":\"65\"},{\"checkKey\":\"^(00){0,1}(81){1}0{0,1}[7,8,9](?:\\\\d{8}|\\\\d{9})$\",\"areaName\":\"日本\",\"domainAbbreviation\":\"JP\",\"code\":\"81\"},{\"checkKey\":\"^(00){0,1}(82){1}0{0,1}[7,1](?:\\\\d{8}|\\\\d{9})$\",\"areaName\":\"韩国\",\"domainAbbreviation\":\"KR\",\"code\":\"82\"},{\"checkKey\":\"^(00){0,1}(1){1}\\\\d{10,12}$\",\"areaName\":\"美国\",\"domainAbbreviation\":\"US\",\"code\":\"1\"},{\"checkKey\":\"^(00){0,1}(1){1}\\\\d{10}$\",\"areaName\":\"加拿大\",\"domainAbbreviation\":\"CA\",\"code\":\"1\"},{\"checkKey\":\"^(00){0,1}(61){1}4\\\\d{8,9}$\",\"areaName\":\"澳大利亚\",\"domainAbbreviation\":\"AU\",\"code\":\"61\"},{\"checkKey\":\"^(00){0,1}(64){1}[278]\\\\d{7,9}$\",\"areaName\":\"新西兰\",\"domainAbbreviation\":\"NZ\",\"code\":\"64\"},{\"checkKey\":\"^(00){0,1}(853){1}6\\\\d{7}$\",\"areaName\":\"中国澳门\",\"domainAbbreviation\":\"MO\",\"code\":\"853\"},{\"checkKey\":\"^(00){0,1}(45){1}\\\\d{6,12}$\",\"areaName\":\"丹麦\",\"domainAbbreviation\":\"DK\",\"code\":\"45\"},{\"checkKey\":\"^(00){0,1}(380){1}[3-79]\\\\d{8,9}$\",\"areaName\":\"乌克兰\",\"domainAbbreviation\":\"UA\",\"code\":\"380\"},{\"checkKey\":\"^(00){0,1}(998){1}\\\\d{6,15}$\",\"areaName\":\"乌兹别克斯坦\",\"domainAbbreviation\":\"UZ\",\"code\":\"998\"},{\"checkKey\":\"^(00){0,1}(256){1}\\\\d{6,15}$\",\"areaName\":\"乌干达\",\"domainAbbreviation\":\"UG\",\"code\":\"256\"},{\"checkKey\":\"^(00){0,1}(598){1}\\\\d{6,15}$\",\"areaName\":\"乌拉圭\",\"domainAbbreviation\":\"UY\",\"code\":\"598\"},{\"checkKey\":\"^(00){0,1}(235){1}\\\\d{6,15}$\",\"areaName\":\"乍得\",\"domainAbbreviation\":\"TD\",\"code\":\"235\"},{\"checkKey\":\"^(00){0,1}(967){1}\\\\d{6,15}$\",\"areaName\":\"也门\",\"domainAbbreviation\":\"YE\",\"code\":\"967\"},{\"checkKey\":\"^(00){0,1}(972){1}\\\\d{6,12}$\",\"areaName\":\"以色列\",\"domainAbbreviation\":\"IL\",\"code\":\"972\"},{\"checkKey\":\"^(00){0,1}(501){1}\\\\d{6,12}$\",\"areaName\":\"伯利兹\",\"domainAbbreviation\":\"BZ\",\"code\":\"501\"},{\"checkKey\":\"^(00){0,1}(238){1}\\\\d{6,15}$\",\"areaName\":\"佛得角\",\"domainAbbreviation\":\"CV\",\"code\":\"238\"},{\"checkKey\":\"^(00){0,1}(7){1}[13489]\\\\d{9,11}$\",\"areaName\":\"俄罗斯\",\"domainAbbreviation\":\"RU\",\"code\":\"7\"},{\"checkKey\":\"^(00){0,1}(359){1}\\\\d{6,12}$\",\"areaName\":\"保加利亚\",\"domainAbbreviation\":\"BG\",\"code\":\"359\"},{\"checkKey\":\"^(00){0,1}(385){1}\\\\d{6,15}$\",\"areaName\":\"克罗地亚\",\"domainAbbreviation\":\"HR\",\"code\":\"385\"},{\"checkKey\":\"^(00){0,1}(220){1}\\\\d{6,15}$\",\"areaName\":\"冈比亚\",\"domainAbbreviation\":\"GM\",\"code\":\"220\"},{\"checkKey\":\"^(00){0,1}(224){1}\\\\d{6,15}$\",\"areaName\":\"几内亚\",\"domainAbbreviation\":\"GN\",\"code\":\"224\"},{\"checkKey\":\"^(00){0,1}(245){1}\\\\d{6,15}$\",\"areaName\":\"几内亚比绍\",\"domainAbbreviation\":\"GW\",\"code\":\"245\"},{\"checkKey\":\"^(00){0,1}(241){1}\\\\d{6,15}$\",\"areaName\":\"加蓬\",\"domainAbbreviation\":\"GA\",\"code\":\"241\"},{\"checkKey\":\"^(00){0,1}(36){1}\\\\d{6,12}$\",\"areaName\":\"匈牙利\",\"domainAbbreviation\":\"HU\",\"code\":\"36\"},{\"checkKey\":\"^(00){0,1}(27){1}\\\\d{6,12}$\",\"areaName\":\"南非\",\"domainAbbreviation\":\"ZA\",\"code\":\"27\"},{\"checkKey\":\"^(00){0,1}(974){1}\\\\d{6,12}$\",\"areaName\":\"卡塔尔\",\"domainAbbreviation\":\"QA\",\"code\":\"974\"},{\"checkKey\":\"^(00){0,1}(250){1}\\\\d{6,15}$\",\"areaName\":\"卢旺达\",\"domainAbbreviation\":\"RW\",\"code\":\"250\"},{\"checkKey\":\"^(00){0,1}(352){1}\\\\d{6,12}$\",\"areaName\":\"卢森堡\",\"domainAbbreviation\":\"LU\",\"code\":\"352\"},{\"checkKey\":\"^(00){0,1}(91){1}\\\\d{6,12}$\",\"areaName\":\"印度\",\"domainAbbreviation\":\"IN\",\"code\":\"91\"},{\"checkKey\":\"^(00){0,1}(62){1}[2-9]\\\\d{7,11}$\",\"areaName\":\"印度尼西亚\",\"domainAbbreviation\":\"ID\",\"code\":\"62\"},{\"checkKey\":\"^(00){0,1}(502){1}\\\\d{6,15}$\",\"areaName\":\"危地马拉\",\"domainAbbreviation\":\"GT\",\"code\":\"502\"},{\"checkKey\":\"^(00){0,1}(996){1}\\\\d{6,12}$\",\"areaName\":\"吉尔吉斯斯坦\",\"domainAbbreviation\":\"KG\",\"code\":\"996\"},{\"checkKey\":\"^(00){0,1}(253){1}\\\\d{6,15}$\",\"areaName\":\"吉布提\",\"domainAbbreviation\":\"DJ\",\"code\":\"253\"},{\"checkKey\":\"^(00){0,1}(57){1}\\\\d{6,12}$\",\"areaName\":\"哥伦比亚\",\"domainAbbreviation\":\"CO\",\"code\":\"57\"},{\"checkKey\":\"^(00){0,1}(506){1}\\\\d{6,15}$\",\"areaName\":\"哥斯达黎加\",\"domainAbbreviation\":\"CR\",\"code\":\"506\"},{\"checkKey\":\"^(00){0,1}(237){1}\\\\d{6,15}$\",\"areaName\":\"喀麦隆\",\"domainAbbreviation\":\"CM\",\"code\":\"237\"},{\"checkKey\":\"^(00){0,1}(993){1}\\\\d{6,15}$\",\"areaName\":\"土库曼斯坦\",\"domainAbbreviation\":\"TM\",\"code\":\"993\"},{\"checkKey\":\"^(00){0,1}(90){1}\\\\d{6,12}$\",\"areaName\":\"土耳其\",\"domainAbbreviation\":\"TR\",\"code\":\"90\"},{\"checkKey\":\"^(00){0,1}(592){1}\\\\d{6,15}$\",\"areaName\":\"圭亚那\",\"domainAbbreviation\":\"GY\",\"code\":\"592\"},{\"checkKey\":\"^(00){0,1}(255){1}\\\\d{6,15}$\",\"areaName\":\"坦桑尼亚\",\"domainAbbreviation\":\"TZ\",\"code\":\"255\"},{\"checkKey\":\"^(00){0,1}(20){1}\\\\d{6,12}$\",\"areaName\":\"埃及\",\"domainAbbreviation\":\"EG\",\"code\":\"20\"},{\"checkKey\":\"^(00){0,1}(992){1}\\\\d{6,15}$\",\"areaName\":\"塔吉克斯坦\",\"domainAbbreviation\":\"TJ\",\"code\":\"992\"},{\"checkKey\":\"^(00){0,1}(221){1}\\\\d{6,15}$\",\"areaName\":\"塞内加尔\",\"domainAbbreviation\":\"SN\",\"code\":\"221\"},{\"checkKey\":\"^(00){0,1}(381){1}\\\\d{6,12}$\",\"areaName\":\"塞尔维亚\",\"domainAbbreviation\":\"RS\",\"code\":\"381\"},{\"checkKey\":\"^(00){0,1}(232){1}\\\\d{6,15}$\",\"areaName\":\"塞拉利昂\",\"domainAbbreviation\":\"SL\",\"code\":\"232\"},{\"checkKey\":\"^(00){0,1}(357){1}\\\\d{6,15}$\",\"areaName\":\"塞浦路斯\",\"domainAbbreviation\":\"CY\",\"code\":\"357\"},{\"checkKey\":\"^(00){0,1}(248){1}\\\\d{6,12}$\",\"areaName\":\"塞舌尔\",\"domainAbbreviation\":\"SC\",\"code\":\"248\"},{\"checkKey\":\"^(00){0,1}(52){1}\\\\d{6,12}$\",\"areaName\":\"墨西哥\",\"domainAbbreviation\":\"MX\",\"code\":\"52\"},{\"checkKey\":\"^(00){0,1}(228){1}\\\\d{6,15}$\",\"areaName\":\"多哥\",\"domainAbbreviation\":\"TG\",\"code\":\"228\"},{\"checkKey\":\"^(00){0,1}(43){1}\\\\d{6,12}$\",\"areaName\":\"奥地利\",\"domainAbbreviation\":\"AT\",\"code\":\"43\"},{\"checkKey\":\"^(00){0,1}(58){1}\\\\d{6,12}$\",\"areaName\":\"委内瑞拉\",\"domainAbbreviation\":\"VE\",\"code\":\"58\"},{\"checkKey\":\"^(00){0,1}(244){1}\\\\d{6,15}$\",\"areaName\":\"安哥拉\",\"domainAbbreviation\":\"AO\",\"code\":\"244\"},{\"checkKey\":\"^(00){0,1}(505){1}\\\\d{6,15}$\",\"areaName\":\"尼加拉瓜\",\"domainAbbreviation\":\"NI\",\"code\":\"505\"},{\"checkKey\":\"^(00){0,1}(234){1}\\\\d{6,12}$\",\"areaName\":\"尼日利亚\",\"domainAbbreviation\":\"NG\",\"code\":\"234\"},{\"checkKey\":\"^(00){0,1}(227){1}\\\\d{6,15}$\",\"areaName\":\"尼日尔\",\"domainAbbreviation\":\"NE\",\"code\":\"227\"},{\"checkKey\":\"^(00){0,1}(970){1}\\\\d{6,15}$\",\"areaName\":\"巴勒斯坦\",\"domainAbbreviation\":\"PS\",\"code\":\"970\"},{\"checkKey\":\"^(00){0,1}(1242){1}\\\\d{6,12}$\",\"areaName\":\"巴哈马\",\"domainAbbreviation\":\"BS\",\"code\":\"1242\"},{\"checkKey\":\"^(00){0,1}(675){1}\\\\d{6,15}$\",\"areaName\":\"巴布亚新几内亚\",\"domainAbbreviation\":\"PG\",\"code\":\"675\"},{\"checkKey\":\"^(00){0,1}(507){1}\\\\d{6,12}$\",\"areaName\":\"巴拿马\",\"domainAbbreviation\":\"PA\",\"code\":\"507\"},{\"checkKey\":\"^(00){0,1}(973){1}\\\\d{6,15}$\",\"areaName\":\"巴林\",\"domainAbbreviation\":\"BH\",\"code\":\"973\"},{\"checkKey\":\"^(00){0,1}(55){1}\\\\d{6,12}$\",\"areaName\":\"巴西\",\"domainAbbreviation\":\"BR\",\"code\":\"55\"},{\"checkKey\":\"^(00){0,1}(226){1}\\\\d{6,15}$\",\"areaName\":\"布基纳法索\",\"domainAbbreviation\":\"BF\",\"code\":\"226\"},{\"checkKey\":\"^(00){0,1}(30){1}\\\\d{6,12}$\",\"areaName\":\"希腊\",\"domainAbbreviation\":\"GR\",\"code\":\"30\"},{\"checkKey\":\"^(00){0,1}(1345){1}\\\\d{6,15}$\",\"areaName\":\"开曼群岛\",\"domainAbbreviation\":\"KY\",\"code\":\"1345\"},{\"checkKey\":\"^(00){0,1}(49){1}1(\\\\d{5,6}|\\\\d{9,12})$\",\"areaName\":\"德国\",\"domainAbbreviation\":\"DE\",\"code\":\"49\"},{\"checkKey\":\"^(00){0,1}(39){1}[37]\\\\d{8,11}$\",\"areaName\":\"意大利\",\"domainAbbreviation\":\"IT\",\"code\":\"39\"},{\"checkKey\":\"^(00){0,1}(371){1}\\\\d{6,15}$\",\"areaName\":\"拉脱维亚\",\"domainAbbreviation\":\"LV\",\"code\":\"371\"},{\"checkKey\":\"^(00){0,1}(47){1}\\\\d{6,12}$\",\"areaName\":\"挪威\",\"domainAbbreviation\":\"NO\",\"code\":\"47\"},{\"checkKey\":\"^(00){0,1}(373){1}\\\\d{6,15}$\",\"areaName\":\"摩尔多瓦\",\"domainAbbreviation\":\"MD\",\"code\":\"373\"},{\"checkKey\":\"^(00){0,1}(212){1}\\\\d{6,12}$\",\"areaName\":\"摩洛哥\",\"domainAbbreviation\":\"MA\",\"code\":\"212\"},{\"checkKey\":\"^(00){0,1}(673){1}\\\\d{6,15}$\",\"areaName\":\"文莱\",\"domainAbbreviation\":\"BN\",\"code\":\"673\"},{\"checkKey\":\"^(00){0,1}(268){1}\\\\d{6,15}$\",\"areaName\":\"斯威士兰\",\"domainAbbreviation\":\"SZ\",\"code\":\"268\"},{\"checkKey\":\"^(00){0,1}(421){1}\\\\d{6,15}$\",\"areaName\":\"斯洛伐克\",\"domainAbbreviation\":\"SK\",\"code\":\"421\"},{\"checkKey\":\"^(00){0,1}(386){1}\\\\d{6,15}$\",\"areaName\":\"斯洛文尼亚\",\"domainAbbreviation\":\"SI\",\"code\":\"386\"},{\"checkKey\":\"^(00){0,1}(94){1}\\\\d{6,12}$\",\"areaName\":\"斯里兰卡\",\"domainAbbreviation\":\"LK\",\"code\":\"94\"},{\"checkKey\":\"^(00){0,1}(56){1}\\\\d{6,12}$\",\"areaName\":\"智利\",\"domainAbbreviation\":\"CL\",\"code\":\"56\"},{\"checkKey\":\"^(00){0,1}(855){1}\\\\d{6,12}$\",\"areaName\":\"柬埔寨\",\"domainAbbreviation\":\"KH\",\"code\":\"855\"},{\"checkKey\":\"^(00){0,1}(1473){1}\\\\d{6,15}$\",\"areaName\":\"格林纳达\",\"domainAbbreviation\":\"GD\",\"code\":\"1473\"},{\"checkKey\":\"^(00){0,1}(995){1}\\\\d{6,15}$\",\"areaName\":\"格鲁吉亚\",\"domainAbbreviation\":\"GE\",\"code\":\"995\"},{\"checkKey\":\"^(00){0,1}(32){1}\\\\d{6,12}$\",\"areaName\":\"比利时\",\"domainAbbreviation\":\"BE\",\"code\":\"32\"},{\"checkKey\":\"^(00){0,1}(222){1}\\\\d{6,15}$\",\"areaName\":\"毛里塔尼亚\",\"domainAbbreviation\":\"MR\",\"code\":\"222\"},{\"checkKey\":\"^(00){0,1}(230){1}\\\\d{6,15}$\",\"areaName\":\"毛里求斯\",\"domainAbbreviation\":\"MU\",\"code\":\"230\"},{\"checkKey\":\"^(00){0,1}(966){1}\\\\d{6,12}$\",\"areaName\":\"沙特阿拉伯\",\"domainAbbreviation\":\"SA\",\"code\":\"966\"},{\"checkKey\":\"^(00){0,1}(33){1}(\\\\d{6}|\\\\d{8,10})$\",\"areaName\":\"法国\",\"domainAbbreviation\":\"FR\",\"code\":\"33\"},{\"checkKey\":\"^(00){0,1}(48){1}\\\\d{6,12}$\",\"areaName\":\"波兰\",\"domainAbbreviation\":\"PL\",\"code\":\"48\"},{\"checkKey\":\"^(00){0,1}(66){1}[13456789]\\\\d{7,8}$\",\"areaName\":\"泰国\",\"domainAbbreviation\":\"TH\",\"code\":\"66\"},{\"checkKey\":\"^(00){0,1}(263){1}\\\\d{6,15}$\",\"areaName\":\"津巴布韦\",\"domainAbbreviation\":\"ZW\",\"code\":\"263\"},{\"checkKey\":\"^(00){0,1}(504){1}\\\\d{6,15}$\",\"areaName\":\"洪都拉斯\",\"domainAbbreviation\":\"HN\",\"code\":\"504\"},{\"checkKey\":\"^(00){0,1}(353){1}\\\\d{6,12}$\",\"areaName\":\"爱尔兰\",\"domainAbbreviation\":\"IE\",\"code\":\"353\"},{\"checkKey\":\"^(00){0,1}(372){1}\\\\d{6,12}$\",\"areaName\":\"爱沙尼亚\",\"domainAbbreviation\":\"EE\",\"code\":\"372\"},{\"checkKey\":\"^(00){0,1}(1876){1}\\\\d{6,15}$\",\"areaName\":\"牙买加\",\"domainAbbreviation\":\"JM\",\"code\":\"1876\"},{\"checkKey\":\"^(00){0,1}(1868){1}\\\\d{6,15}$\",\"areaName\":\"特立尼达和多巴哥\",\"domainAbbreviation\":\"TT\",\"code\":\"1868\"},{\"checkKey\":\"^(00){0,1}(591){1}\\\\d{6,15}$\",\"areaName\":\"玻利维亚\",\"domainAbbreviation\":\"BO\",\"code\":\"591\"},{\"checkKey\":\"^(00){0,1}(46){1}[124-7](\\\\d{8}|\\\\d{10}|\\\\d{12})$\",\"areaName\":\"瑞典\",\"domainAbbreviation\":\"SE\",\"code\":\"46\"},{\"checkKey\":\"^(00){0,1}(41){1}\\\\d{6,12}$\",\"areaName\":\"瑞士\",\"domainAbbreviation\":\"CH\",\"code\":\"41\"},{\"checkKey\":\"^(00){0,1}(375){1}\\\\d{6,12}$\",\"areaName\":\"白俄罗斯\",\"domainAbbreviation\":\"BY\",\"code\":\"375\"},{\"checkKey\":\"^(00){0,1}(965){1}\\\\d{6,15}$\",\"areaName\":\"科威特\",\"domainAbbreviation\":\"KW\",\"code\":\"965\"},{\"checkKey\":\"^(00){0,1}(269){1}\\\\d{6,15}$\",\"areaName\":\"科摩罗\",\"domainAbbreviation\":\"KM\",\"code\":\"269\"},{\"checkKey\":\"^(00){0,1}(51){1}\\\\d{6,12}$\",\"areaName\":\"秘鲁\",\"domainAbbreviation\":\"PE\",\"code\":\"51\"},{\"checkKey\":\"^(00){0,1}(216){1}\\\\d{6,12}$\",\"areaName\":\"突尼斯\",\"domainAbbreviation\":\"TN\",\"code\":\"216\"},{\"checkKey\":\"^(00){0,1}(370){1}\\\\d{6,12}$\",\"areaName\":\"立陶宛\",\"domainAbbreviation\":\"LT\",\"code\":\"370\"},{\"checkKey\":\"^(00){0,1}(962){1}\\\\d{6,12}$\",\"areaName\":\"约旦\",\"domainAbbreviation\":\"JO\",\"code\":\"962\"},{\"checkKey\":\"^(00){0,1}(264){1}\\\\d{6,15}$\",\"areaName\":\"纳米比亚\",\"domainAbbreviation\":\"NA\",\"code\":\"264\"},{\"checkKey\":\"^(00){0,1}(40){1}\\\\d{6,12}$\",\"areaName\":\"罗马尼亚\",\"domainAbbreviation\":\"RO\",\"code\":\"40\"},{\"checkKey\":\"^(00){0,1}(254){1}\\\\d{6,15}$\",\"areaName\":\"肯尼亚\",\"domainAbbreviation\":\"KE\",\"code\":\"254\"},{\"checkKey\":\"^(00){0,1}(358){1}\\\\d{6,12}$\",\"areaName\":\"芬兰\",\"domainAbbreviation\":\"FI\",\"code\":\"358\"},{\"checkKey\":\"^(00){0,1}(597){1}\\\\d{6,15}$\",\"areaName\":\"苏里南\",\"domainAbbreviation\":\"SR\",\"code\":\"597\"},{\"checkKey\":\"^(00){0,1}(44){1}[347-9](\\\\d{8,9}|\\\\d{11,12})$\",\"areaName\":\"英国\",\"domainAbbreviation\":\"GB\",\"code\":\"44\"},{\"checkKey\":\"^(00){0,1}(1284){1}\\\\d{6,12}$\",\"areaName\":\"英属维尔京群岛\",\"domainAbbreviation\":\"VG\",\"code\":\"1284\"},{\"checkKey\":\"^(00){0,1}(31){1}6\\\\d{8}$\",\"areaName\":\"荷兰\",\"domainAbbreviation\":\"NL\",\"code\":\"31\"},{\"checkKey\":\"^(00){0,1}(258){1}\\\\d{6,15}$\",\"areaName\":\"莫桑比克\",\"domainAbbreviation\":\"MZ\",\"code\":\"258\"},{\"checkKey\":\"^(00){0,1}(266){1}\\\\d{6,15}$\",\"areaName\":\"莱索托\",\"domainAbbreviation\":\"LS\",\"code\":\"266\"},{\"checkKey\":\"^(00){0,1}(63){1}[24579](\\\\d{7,9}|\\\\d{12})$\",\"areaName\":\"菲律宾\",\"domainAbbreviation\":\"PH\",\"code\":\"63\"},{\"checkKey\":\"^(00){0,1}(503){1}\\\\d{6,15}$\",\"areaName\":\"萨尔瓦多\",\"domainAbbreviation\":\"SV\",\"code\":\"503\"},{\"checkKey\":\"^(00){0,1}(351){1}\\\\d{6,12}$\",\"areaName\":\"葡萄牙\",\"domainAbbreviation\":\"PT\",\"code\":\"351\"},{\"checkKey\":\"^(00){0,1}(976){1}\\\\d{6,12}$\",\"areaName\":\"蒙古\",\"domainAbbreviation\":\"MN\",\"code\":\"976\"},{\"checkKey\":\"^(00){0,1}(34){1}\\\\d{6,12}$\",\"areaName\":\"西班牙\",\"domainAbbreviation\":\"ES\",\"code\":\"34\"},{\"checkKey\":\"^(00){0,1}(229){1}\\\\d{6,15}$\",\"areaName\":\"贝宁\",\"domainAbbreviation\":\"BJ\",\"code\":\"229\"},{\"checkKey\":\"^(00){0,1}(260){1}\\\\d{6,15}$\",\"areaName\":\"赞比亚\",\"domainAbbreviation\":\"ZM\",\"code\":\"260\"},{\"checkKey\":\"^(00){0,1}(240){1}\\\\d{6,15}$\",\"areaName\":\"赤道几内亚\",\"domainAbbreviation\":\"GQ\",\"code\":\"240\"},{\"checkKey\":\"^(00){0,1}(84){1}[1-9]\\\\d{6,9}$\",\"areaName\":\"越南\",\"domainAbbreviation\":\"VN\",\"code\":\"84\"},{\"checkKey\":\"^(00){0,1}(994){1}\\\\d{6,15}$\",\"areaName\":\"阿塞拜疆\",\"domainAbbreviation\":\"AZ\",\"code\":\"994\"},{\"checkKey\":\"^(00){0,1}(355){1}\\\\d{6,15}$\",\"areaName\":\"阿尔巴尼亚\",\"domainAbbreviation\":\"AL\",\"code\":\"355\"},{\"checkKey\":\"^(00){0,1}(968){1}\\\\d{6,15}$\",\"areaName\":\"阿曼\",\"domainAbbreviation\":\"OM\",\"code\":\"968\"},{\"checkKey\":\"^(00){0,1}(54){1}\\\\d{6,12}$\",\"areaName\":\"阿根廷\",\"domainAbbreviation\":\"AR\",\"code\":\"54\"},{\"checkKey\":\"^(00){0,1}(971){1}\\\\d{6,12}$\",\"areaName\":\"阿联酋\",\"domainAbbreviation\":\"AE\",\"code\":\"971\"},{\"checkKey\":\"^(00){0,1}(960){1}\\\\d{6,12}$\",\"areaName\":\"马尔代夫\",\"domainAbbreviation\":\"MV\",\"code\":\"960\"},{\"checkKey\":\"^(00){0,1}(265){1}\\\\d{6,15}$\",\"areaName\":\"马拉维\",\"domainAbbreviation\":\"MW\",\"code\":\"265\"},{\"checkKey\":\"^(00){0,1}(261){1}\\\\d{6,15}$\",\"areaName\":\"马达加斯加\",\"domainAbbreviation\":\"MG\",\"code\":\"261\"},{\"checkKey\":\"^(00){0,1}(223){1}\\\\d{6,15}$\",\"areaName\":\"马里\",\"domainAbbreviation\":\"ML\",\"code\":\"223\"}];\r\n  \n\n//# sourceURL=webpack:///./src/common/city.js?");

/***/ }),

/***/ 2:
/*!**********************************!*\
  !*** multi ./src/common/city.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\works\\vue-buildserve\\lightapp\\app\\src\\common\\city.js */\"./src/common/city.js\");\n\n\n//# sourceURL=webpack:///multi_./src/common/city.js?");

/***/ })

/******/ });