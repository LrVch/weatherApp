var app =
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	styles
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.controller = undefined;

	__webpack_require__(9);

	__webpack_require__(44);

	var _controller = __webpack_require__(14);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 markup
	 */
	if (true) {
	  __webpack_require__(34);
	}

	/*
	 logic
	*/

	// const cities = {
	//     1489425: {name: "tomsk", id: 14894252},
	//     6167865: {name: "toronto", id: 6167865}
	// };

	/*
	 images
	 */
	var controller = exports.controller = new _controller2.default();

	// controller._model.getData(cities["1489425"]);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./_index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./_index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n.mac {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.mac input,\n.mac textarea,\n.mac button {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ninput:focus,\nbutton:focus,\na:focus {\n  outline: 0;\n}\n\n.city__more {\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.shown {\n  display: block !important;\n}\n\n.addition__list:before,\n.details__item:before,\n.city__descr:before,\n.hourly__slider:before,\n.addition__list:after,\n.details__item:after,\n.city__descr:after,\n.hourly__slider:after {\n  content: \"\";\n  display: table;\n}\n\n.addition__list:after,\n.details__item:after,\n.city__descr:after,\n.hourly__slider:after {\n  clear: both;\n}\n\n.dashed {\n  text-decoration: none;\n}\n\n.dashed:hover {\n  text-decoration: none;\n}\n\n.dashed span {\n  position: relative;\n}\n\n.dashed span:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 0;\n  border-bottom: 1px dashed;\n  border-color: inherit;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  min-width: 320px;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", Arial, Helvetica, Garuda, sans-serif;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: #f1f1f1;\n  color: #333;\n}\n\n@media only screen and (min-width: 992px) {\n  html,\n  body {\n    min-height: 620px;\n  }\n}\n\nhtml {\n  position: relative;\n}\n\n.wrapper,\n.maincontent {\n  height: 100%;\n  min-height: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.maincontent {\n  position: relative;\n  background: #f1f1f1;\n}\n\n.isLandscape html,\n.isLandscape body,\n.isLandscape .wrapper,\n.isLandscape .maincontent,\n.isLandscape .content,\n.isLandscape .current-city,\n.isLandscape .addition {\n  height: auto;\n  min-height: initial;\n}\n\n@media only screen and (min-width: 992px) {\n  .isLandscape html,\n  .isLandscape body,\n  .isLandscape .maincontent,\n  .isLandscape .wrapper,\n  .isLandscape .content,\n  .isLandscape .menu {\n    height: 100% !important;\n    min-height: 100% !important;\n  }\n}\n\n.addition {\n  height: 50%;\n  transition: height .3s;\n}\n\n@media only screen and (min-width: 992px) {\n  .addition {\n    height: 45% !important;\n  }\n}\n\n.addition__list {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: auto;\n  transition: height .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .addition__list {\n    padding: 10px;\n    padding-bottom: 0;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .addition__list {\n    padding-bottom: 10px;\n  }\n}\n\n.addition__item {\n  margin: 0 10px;\n  margin-bottom: 10px;\n  list-style-type: none;\n}\n\n.addition__item:last-child {\n  margin-bottom: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .addition__item {\n    width: 50%;\n    float: left;\n    margin: 0;\n    padding-bottom: 20px;\n    height: 33.3333333%;\n  }\n\n  .addition__item:nth-child(2n) {\n    padding-left: 10px;\n  }\n\n  .addition__item:nth-child(2n - 1) {\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .addition__item {\n    width: 20%;\n    height: 100%;\n    padding: 0 5px;\n    display: table;\n  }\n\n  .addition__item:nth-child(2n - 1),\n  .addition__item:nth-child(2n) {\n    padding: 0 5px;\n  }\n\n  .addition__item:first-child {\n    padding-left: 0;\n  }\n\n  .addition__item:last-child {\n    padding-right: 0;\n  }\n}\n\n.city-viewer {\n  height: 100%;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n@media only screen and (min-width: 992px) {\n  .city-viewer {\n    font-size: 22px;\n    line-height: 24px;\n  }\n}\n\n.city-viewer__inner {\n  height: inherit;\n  overflow: auto;\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.city-viewer__item {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  position: relative;\n  padding: 12px;\n  padding-right: 40px;\n  margin-bottom: 10px;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n}\n\n.city-viewer__item:last-child {\n  margin-bottom: 0;\n}\n\n.city-viewer__item.active {\n  background-color: #ddd;\n}\n\n.city-viewer__item-close {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 3px solid rgba(0, 0, 0, 0.35);\n  transform: rotate(45deg);\n  box-shadow: 0 0  12px #666;\n  box-shadow: none;\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n.city-viewer__item-close:before,\n.city-viewer__item-close:after {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.city-viewer__item-close:before {\n  width: 100%;\n  height: 3px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.city-viewer__item-close:after {\n  width: 3px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.content {\n  height: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.content .content__inner {\n  height: inherit;\n  min-height: inherit;\n  background: #f1f1f1;\n}\n\n@media only screen and (min-width: 992px) {\n  .content {\n    margin-left: 400px;\n  }\n}\n\n.current-city {\n  height: 50%;\n  padding: 10px;\n  transition: height .3s;\n}\n\n.current-city.init {\n  visibility: hidden;\n}\n\n.current-city.small {\n  height: 150px;\n}\n\n.current-city.small .city__descr-img {\n  width: 60px;\n  margin-bottom: -5px;\n}\n\n.current-city.small .city__date {\n  font-size: 10px;\n}\n\n.current-city.show-more-details {\n  position: relative;\n  z-index: 12;\n  height: auto !important;\n}\n\n.current-city.shown .current-city__overlay {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n@media only screen and (min-width: 992px) {\n  .current-city {\n    height: 55% !important;\n  }\n}\n\n.current-city__inner {\n  position: relative;\n  z-index: 8;\n  height: 100%;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n.current-city__overlay {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transition: background .5s;\n}\n\n.menu {\n  position: absolute;\n  top: 0;\n  left: -300px;\n  width: 300px;\n  height: 100%;\n  min-height: 100%;\n  transition: left .3s;\n}\n\n.menu.open {\n  left: 0;\n}\n\n.menu.open .menu__overflow {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) {\n  .menu {\n    width: 440px;\n    left: -440px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .menu {\n    position: relative;\n    left: 0;\n    width: 400px;\n    float: left;\n    padding: 10px;\n  }\n}\n\n.menu__inner {\n  position: relative;\n  z-index: 11;\n  height: 100%;\n  min-height: 100%;\n  padding: 0 20px 10px 0;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__inner {\n    padding-left: 20px;\n  }\n}\n\n.menu__close {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 4px solid rgba(0, 0, 0, 0.35);\n  transform: rotate(45deg);\n  box-shadow: 0 0  12px #666;\n}\n\n.menu__close:before,\n.menu__close:after {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.menu__close:before {\n  width: 100%;\n  height: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.menu__close:after {\n  width: 4px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__close {\n    display: none;\n  }\n}\n\n.menu__overflow {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 10;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__overflow {\n    display: none !important;\n  }\n}\n\ndiv.menu__search {\n  height: 20%;\n  padding-top: 65px;\n}\n\n@media only screen and (min-width: 992px) {\n  div.menu__search {\n    height: 20% !important;\n  }\n}\n\n.menu__city-viewer {\n  height: 80%;\n  padding-top: 30px;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__city-viewer {\n    height: 80% !important;\n  }\n}\n\n.menu__tongue {\n  position: absolute;\n  width: 9px;\n  height: 100px;\n  background: #aaa;\n  right: -9px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 0 5px 5px 0;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__tongue {\n    display: none;\n  }\n}\n\n.search {\n  height: 30%;\n}\n\n.search .tp-ac__item {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.search__inner {\n  padding-right: 5px !important;\n}\n\n.search__input {\n  width: 100%;\n  padding: 20px !important;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n  font-size: 22px;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n}\n\n.overflow {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.overflow.show {\n  display: block;\n}\n\n.preloader {\n  display: none;\n  position: fixed;\n  z-index: 20;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-image: url(" + __webpack_require__(12) + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.preloader.show {\n  display: block;\n}\n\n.details {\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .details {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.details.hidden {\n  display: none;\n}\n\n.details.open {\n  padding-bottom: 4px;\n  margin-bottom: 11px;\n}\n\n.details.open .details__item {\n  margin-bottom: 10px;\n}\n\n.details.open .details__item.datails--more {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) {\n  .details.open .details__item {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #000;\n  }\n}\n\n.details__item {\n  margin-bottom: 3px;\n  list-style-type: none;\n}\n\n.details__item.datails--more {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) {\n  .details__item {\n    margin-bottom: 10px;\n  }\n}\n\n.details__item-text {\n  float: left;\n  width: 50%;\n}\n\n.details__num {\n  float: right;\n  width: 50%;\n  text-align: right;\n}\n\n.details__hidden {\n  display: none;\n}\n\n.city {\n  position: relative;\n  height: 100%;\n  padding: 20px;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  overflow: hidden;\n}\n\n@media only screen and (min-width: 768px) {\n  .city {\n    padding: 40px;\n    padding-top: 10px;\n    padding-bottom: 55px;\n  }\n}\n\n.city__name {\n  text-align: right;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__name {\n    padding-top: 10px;\n    font-size: 40px;\n    line-height: 42px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__name {\n    padding-top: 10px;\n    font-size: 30px;\n    line-height: 32px;\n  }\n}\n\n.city__descr {\n  margin-bottom: 5px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr {\n    margin-bottom: 30px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__descr {\n    margin-bottom: 10px;\n  }\n}\n\n.city__details {\n  max-width: 65%;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__details {\n    max-width: 65%;\n  }\n}\n\n.city__descr-main {\n  float: left;\n}\n\n.city__weather {\n  margin-bottom: 10px;\n  font-size: 26px;\n  line-height: 28px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__weather {\n    margin-bottom: 30px;\n    font-size: 46px;\n    line-height: 48px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__weather {\n    font-size: 36px;\n    line-height: 38px;\n  }\n}\n\n.city__temp {\n  font-size: 40px;\n  line-height: 42px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__temp {\n    font-size: 80px;\n    line-height: 82px;\n  }\n\n  .city__temp.celcius:after {\n    font-size: 80px;\n    line-height: 60px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__temp {\n    font-size: 60px;\n    line-height: 62px;\n  }\n}\n\n.city__descr-img-wrap {\n  float: right;\n  padding-top: 5px;\n  text-align: right;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr-img-wrap {\n    padding-top: 15px;\n  }\n}\n\n.city__descr-img {\n  width: 100px;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr-img {\n    width: 170px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__descr-img {\n    width: 125px;\n  }\n}\n\n.city__date {\n  text-align: right;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__date {\n    font-size: 26px;\n    line-height: 28px;\n  }\n}\n\n.city__more {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  display: block;\n  text-align: right;\n  color: #000;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__more {\n    padding-top: 80px;\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__more {\n    padding-top: 70px;\n  }\n}\n\n.city__reload {\n  position: absolute;\n  left: 20px;\n  bottom: 5px;\n  width: 25px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__reload {\n    width: 40px;\n    left: 35px;\n    bottom: 10px;\n  }\n}\n\n.city__reload-img {\n  max-width: 100%;\n  color: inherit;\n}\n\n.hourly {\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n  transition: height 0.1s;\n  height: 0;\n}\n\n.hourly:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  content: \"\";\n  width: 94%;\n  height: 1px;\n  box-shadow: 0 -4px 14px 1px #777;\n}\n\n.hourly.shown {\n  height: 80px;\n}\n\n.hourly.shown-slider .hourly__inner {\n  top: 0;\n}\n\n.hourly.hidden {\n  display: none;\n}\n\n@media only screen and (min-width: 768px) {\n  .hourly {\n    font-size: 24px;\n    line-height: 38px;\n  }\n}\n\n.hourly__inner {\n  position: absolute;\n  top: -80px;\n  width: 100%;\n  height: 80px;\n  padding-top: 15px;\n  overflow: hidden;\n  transition: top 0.45s ease-in-out;\n}\n\n@media only screen and (min-width: 768px) {\n  .hourly__inner {\n    padding-top: 20px;\n  }\n}\n\n.hourly__slider {\n  position: absolute;\n  left: 0;\n  width: 200%;\n  transition: all .3s;\n}\n\n.hourly__slider.slide {\n  left: -100%;\n}\n\n.hourly__slide {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  float: left;\n  width: 12.5%;\n  border-left: 1px solid #ccc;\n}\n\n.hourly__slide:first-child,\n.hourly__slide:nth-child(5) {\n  border-left-color: transparent;\n}\n\n.hourly__slide-time {\n  line-height: 25px;\n  margin-bottom: 3px;\n}\n\n.hourly__slide-temp.celcius:after {\n  font-size: 30px;\n}\n\n.nex-day {\n  display: table;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day {\n    display: table-cell;\n  }\n}\n\n.nex-day__img-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n  width: 90px;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__img-wrapper {\n    display: block;\n    width: auto;\n    margin-bottom: 20px;\n  }\n}\n\n.nex-day__img {\n  display: block;\n  width: 70px;\n  margin: 0 auto;\n}\n\n.nex-day__desc {\n  vertical-align: middle;\n  display: table-cell;\n  font-size: 14px;\n}\n\n@media only screen and (min-width: 768px) {\n  .nex-day__desc {\n    font-size: 22px;\n    line-height: 24px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__desc {\n    display: block;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n\n.nex-day__date {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n\n@media only screen and (min-width: 768px) {\n  .nex-day__date {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.nex-day__weather {\n  text-align: center;\n}\n\n.nex-day__temp {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 22px;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__temp {\n    display: block;\n  }\n}\n\n.nex-day__temp-day {\n  margin-bottom: 10px;\n}\n\n.celcius {\n  position: relative;\n}\n\n.celcius:after {\n  position: absolute;\n  content: \"\\2DA\";\n  top: -6px;\n  font-size: 36px;\n  line-height: 36px;\n}\n\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/preloader.gif";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import {log} from './../stuff/logger';
	// import Model from './../model';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _view = __webpack_require__(15);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var dataDays = [{
	    img: "img/m03d.svg",
	    data: "12 Nov",
	    main: "Cloudly",
	    temp: {
	        day: 28,
	        night: 5
	    }
	}, {
	    img: "img/m04d.svg",
	    data: "12 Nov",
	    main: "Cloudly",
	    temp: {
	        day: 18,
	        night: 5
	    }
	}, {
	    img: "img/m09d.svg",
	    data: "12 Nov",
	    main: "Cloudly",
	    temp: {
	        day: 18,
	        night: 15
	    }
	}, {
	    img: "img/m10d.svg",
	    data: "12 Nov",
	    main: "Cloudly",
	    temp: {
	        day: 18,
	        night: 5
	    }
	}, {
	    img: "img/m13d.svg",
	    data: "12 Nov",
	    main: "Cloudly",
	    temp: {
	        day: 18,
	        night: 5
	    }
	}];
	var dataDetails = [["Pressure", 92, "unit"], ["Humidity", 55, "unit"], ["Wind", 6, "unit"], ["Clouds", "Cloudiness"], ["Rain", "none"]];
	var dataHourly = [{ time: "11:00", temp: 22 }, { time: "12:00", temp: 22 }, { time: "13:00", temp: 22 }, { time: "14:00", temp: 22 }, { time: "15:00", temp: 22 }, { time: "16:00", temp: 22 }];
	var dataMain = {
	    name: "Boston, USA",
	    weather: "Sunny",
	    temp: 18,
	    data: "5 December",
	    img: "/img/m01d.svg"
	};

	var Controller = function () {
	    function Controller() {
	        var _this = this;

	        _classCallCheck(this, Controller);

	        // this._model = new Model();
	        this._view = new _view2.default();

	        this._view.nexDays.render(dataDays);
	        this._view.currentCity.details.render(dataDetails, this._view.currentCity.getFreeSpaceFroDetails());
	        // this._view.currentCity.render(dataMain);

	        this._view.on(_view2.default.EVENTS.resizeWindow, function () {
	            if (document.documentElement.clientWidth < 768) {
	                _this._view.currentCity.details.render(dataDetails, _this._view.currentCity.getFreeSpaceFroDetails());
	            }
	        });

	        this._view.currentCity.on(_view2.default.EVENTS.CurrentCity.onShowMoreDetails, function (value) {
	            _this._view.currentCity.hourly.render(_this._getDataForHourlyView());
	        });

	        this._view.currentCity.on(_view2.default.EVENTS.CurrentCity.onHideMoreDetails, function (value) {
	            _this._view.currentCity.hourly.destroy();
	        });

	        this._view.search.on(_view2.default.EVENTS.Search.onGetCity, function (cityData) {
	            console.log(cityData);
	            alert('' + cityData.name);
	        });

	        this._view.cityViewer.on(_view2.default.EVENTS.CityViewer.onSelectedCity, function (geoId) {
	            console.log(geoId);
	            // alert("select " + geoId);
	        });

	        this._view.cityViewer.on(_view2.default.EVENTS.CityViewer.onDeleteCity, function (geoId) {
	            console.log(geoId);
	            // alert("delete " + geoId);
	        });

	        this._view.cityViewer.on(_view2.default.EVENTS.CityViewer.onDeletAllCities, function () {
	            console.log("очистить всю температуру");
	            // alert("delete " + geoId);
	        });

	        this._view.cityViewer.addCity({
	            name: "Omsk, Russia",
	            geoId: 12345
	        });
	    }

	    _createClass(Controller, [{
	        key: '_getDataForHourlyView',
	        value: function _getDataForHourlyView() {
	            return dataHourly;
	        }
	    }]);

	    return Controller;
	}();

		exports.default = Controller;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _currentCity = __webpack_require__(16);

	var _currentCity2 = _interopRequireDefault(_currentCity);

	var _nexDays = __webpack_require__(25);

	var _nexDays2 = _interopRequireDefault(_nexDays);

	var _menu = __webpack_require__(27);

	var _menu2 = _interopRequireDefault(_menu);

	var _search = __webpack_require__(28);

	var _search2 = _interopRequireDefault(_search);

	var _cityViewer = __webpack_require__(32);

	var _cityViewer2 = _interopRequireDefault(_cityViewer);

	__webpack_require__(22);

	var _eventMixin = __webpack_require__(24);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View() {
	        var _this = this;

	        _classCallCheck(this, View);

	        this._mainElement = new Hammer(document.body);
	        this._mainElement.get('swipe').set({ threshold: 0, velocity: 0.1 });

	        this.currentCity = new _currentCity2.default(document.querySelector("[data-current-city]"));
	        this.nexDays = new _nexDays2.default(document.querySelector("[data-addition]"));
	        this.menu = new _menu2.default(document.querySelector("[data-menu]"));
	        this.search = new _search2.default(document.querySelector("[data-search]"));
	        this.cityViewer = new _cityViewer2.default(document.querySelector("[data-city-viewer]"));

	        this.cityViewer.on(_cityViewer2.default.EVENTS.onDeleteCityGetDimention, function (isScroll) {
	            if (isScroll) {
	                _this.menu.setOffsetMargin();
	            } else {
	                _this.menu.removeOffsetMargin();
	            }
	        });

	        this.cityViewer.on(_cityViewer2.default.EVENTS.onAddCity, function (isScroll) {
	            if (isScroll) {
	                _this.menu.setOffsetMargin();
	            } else {
	                _this.menu.removeOffsetMargin();
	            }
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onReloadDataRequest, function (event) {
	            alert("reload");
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onShowMoreDetails, function (event) {
	            _this.menu.disable();
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onHideMoreDetails, function (event) {
	            _this.menu.enable();
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onChangeHeightByPan, function (value) {
	            _this.nexDays.setHeight(parseInt(_this.nexDays.getHeight()) + value + "px");
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onChangeHeightAfterAnimationPanUp, function (value) {
	            _this.nexDays.setHeight(value + "px");
	        });

	        this.currentCity.on(_currentCity2.default.EVENTS.onChangeHeightAfterAnimationPanDown, function () {
	            _this.nexDays.clearHeight();
	        });

	        window.addEventListener("resize", this._addLandClass.bind(this, document.body));
	        window.addEventListener("resize", function (event) {
	            _this.trigger(View.EVENTS.resizeWindow);
	            _this.currentCity.addPanClass();
	            _this.currentCity.removeSmallClass();
	            _this._enableDisableMenu();

	            if (_this.currentCity.isSmallSize() && !_this._isLandscape()) {
	                _this.nexDays.setHeight(document.documentElement.clientHeight - parseInt(_this.currentCity.getHeight()) + "px");
	            } else {
	                _this.nexDays.clearHeight();
	            }
	        });

	        this._mainElement.on("swipeleft", function (ev) {
	            console.log("swipe");
	            if (!ev.target.closest(".menuSwipe")) {
	                return;
	            }

	            _this.menu.hide();
	        });

	        this._mainElement.on("swiperight", function (ev) {
	            if (!ev.target.closest(".menuSwipe")) {
	                return;
	            }

	            _this.menu.show();
	        });

	        this._addLandClass(document.body);
	        this._enableDisableMenu();
	    }

	    _createClass(View, [{
	        key: "_enableDisableMenu",
	        value: function _enableDisableMenu() {
	            if (this._getScreenWidth() < 992) {
	                this.menu.enable();
	            } else {
	                this.menu.disable();
	            }
	        }
	    }, {
	        key: "_addLandClass",
	        value: function _addLandClass(elem) {
	            if (this._isLandscape()) {
	                elem.classList.add("isLandscape");
	            } else {
	                elem.classList.remove("isLandscape");
	            }
	        }
	    }, {
	        key: "_getScreenWidth",
	        value: function _getScreenWidth() {
	            return document.documentElement.clientWidth;
	        }
	    }, {
	        key: "_isLandscape",
	        value: function _isLandscape() {
	            return document.documentElement.clientHeight < document.documentElement.clientWidth;
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "resizeWindow": "resizeWindow",
	                CurrentCity: _currentCity2.default.EVENTS,
	                NexDays: _nexDays2.default.EVENTS,
	                Menu: _menu2.default.EVENTS,
	                Search: _search2.default.EVENTS,
	                CityViewer: _cityViewer2.default.EVENTS
	            };
	        }
	    }]);

	    return View;
	}();

	exports.default = View;


	for (var key in _eventMixin2.default) {
	    View.prototype[key] = _eventMixin2.default[key];
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _details = __webpack_require__(17);

	var _details2 = _interopRequireDefault(_details);

	var _hourly = __webpack_require__(21);

	var _hourly2 = _interopRequireDefault(_hourly);

	var _eventMixin = __webpack_require__(24);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	__webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CurrentCity = function () {
	    function CurrentCity(elem) {
	        var _this = this;

	        _classCallCheck(this, CurrentCity);

	        this._elem = elem;
	        // флаг наличия класса small у elem
	        this._isSmallClass = false;

	        this.details = new _details2.default();
	        this.hourly = new _hourly2.default();

	        this._elem.querySelector("[data-details]").appendChild(this.details.elem);
	        this._elem.querySelector("[data-hourly]").appendChild(this.hourly.elem);

	        this._cityInitHeight = getComputedStyle(this._elem).height;
	        this._elem.addEventListener("click", this._manager.bind(this));
	        this._elem.addEventListener("transitionend", this._onAnimationEnd.bind(this));

	        this.setPanDirection();

	        window.addEventListener("resize", function (event) {
	            _this.setPanDirection();
	            _this._cityInitHeight = getComputedStyle(_this._elem).height;
	        });

	        this._hammertime.on("panup", this._handlePanUp.bind(this));

	        this._hammertime.on("pandown", this._handlePanDown.bind(this));

	        this.addPanClass();
	    }

	    _createClass(CurrentCity, [{
	        key: "setPanDirection",
	        value: function setPanDirection() {
	            if (this._isLandscape()) {
	                this._hammertime = new Hammer(this._elem, { domEvents: true });
	            } else {
	                if (!this._hammertime) {
	                    this._hammertime = new Hammer(this._elem, { domEvents: true });
	                }
	                this._hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	            }
	        }
	    }, {
	        key: "getFreeSpaceFroDetails",
	        value: function getFreeSpaceFroDetails() {
	            var details = this._elem.querySelector("[data-details]");
	            var more = this._elem.querySelector("[data-more-details]");
	            return more.getBoundingClientRect().top - details.getBoundingClientRect().top;
	        }
	    }, {
	        key: "_handlePanUp",
	        value: function _handlePanUp(event) {
	            if (!event.target.closest(".vertical")) {
	                return;
	            }

	            var cityHeight = getComputedStyle(this._elem).height;

	            if (parseInt(cityHeight) <= 150) {
	                return;
	            }

	            if (parseInt(cityHeight) < parseInt(this._cityInitHeight) - 10) {
	                this._elem.classList.add("small");
	                this.details.hide();
	                this._isSmallClass = true;
	                this._elem.style.height = "150px";
	                this._hideReloadButton();

	                return;
	            }

	            this._elem.style.height = parseInt(cityHeight) - event.distance + "px";
	            this.trigger(this.constructor.EVENTS.onChangeHeightByPan, event.distance);
	            // this.details.setFontSize(parseInt(this.details.getFontSize()) - (parseInt(cityHeight) / 200) + "px");
	        }
	    }, {
	        key: "_handlePanDown",
	        value: function _handlePanDown(event) {
	            var cityHeight = getComputedStyle(this._elem).height;

	            if (parseInt(cityHeight) > 155) {
	                this._elem.classList.remove("small");
	                this._isSmallClass = false;
	                this._elem.style.height = "";
	                return;
	            }

	            this._elem.style.height = parseInt(cityHeight) + event.distance + "px";
	        }
	    }, {
	        key: "init",
	        value: function init() {
	            this._elem.classList.remove("init");
	        }
	    }, {
	        key: "render",
	        value: function render(data) {
	            this._elem.querySelector("[data-city-img]").src = data.img;
	            this._elem.querySelector("[data-city-data]").innerHTML = data.data;
	            this._elem.querySelector("[data-city-name]").innerHTML = data.name;
	            this._elem.querySelector("[data-city-weather]").innerHTML = data.weather;
	            this._elem.querySelector("[data-city-temp]").innerHTML = data.temp;
	        }
	    }, {
	        key: "isSmallSize",
	        value: function isSmallSize() {
	            return this._elem.classList.contains("small");
	        }
	    }, {
	        key: "getHeight",
	        value: function getHeight() {
	            return getComputedStyle(this._elem).height;
	        }
	    }, {
	        key: "_manager",
	        value: function _manager(event) {
	            var target = event.target;

	            if (target.closest("[data-more-details]")) {
	                event.preventDefault();
	                this._toggleMoreView(target);
	            }

	            if (target.closest("[data-current-city-overlay]")) {
	                this._toggleMoreView(this._elem.querySelector("[data-more-details]"));
	            }

	            if (target.closest("[data-reload-data]")) {
	                event.preventDefault();
	                this.trigger(this.constructor.EVENTS.onReloadDataRequest, "");
	            }
	        }
	    }, {
	        key: "_hideReloadButton",
	        value: function _hideReloadButton() {
	            this._elem.querySelector("[data-reload-data]").style.display = "none";
	        }
	    }, {
	        key: "_showReloadButton",
	        value: function _showReloadButton() {
	            this._elem.querySelector("[data-reload-data]").style.display = "";
	        }
	    }, {
	        key: "_toggleMoreView",
	        value: function _toggleMoreView(elem) {
	            var _this2 = this;

	            var self = this;

	            if (!this._elem.classList.contains("show-more-details")) {
	                this._elem.classList.add("show-more-details");

	                // this._elem.classList.remove("vertical");


	                if (this._elem.classList.contains("small")) {
	                    this.details.show();
	                    this.details.showMore();
	                } else {
	                    this.details.showMore();
	                }

	                elem.innerHTML = "less details";

	                this.trigger(this.constructor.EVENTS.onShowMoreDetails, "");

	                setTimeout(function () {
	                    _this2._elem.classList.add("shown");
	                }, 0);
	            } else {
	                this._elem.classList.remove("shown");
	                this.trigger(this.constructor.EVENTS.onHideMoreDetails, "");

	                if (this._elem.classList.contains("small")) {
	                    this.details.hide();
	                }

	                this._elem.addEventListener("transitionend", function me(event) {
	                    self._elem.classList.remove("show-more-details");
	                    self._elem.removeEventListener("transitionend", me);
	                    self.details.hideMore();
	                });

	                // if (!this._isLandscape()) {
	                //     this._elem.classList.add("vertical");
	                // }

	                elem.innerHTML = "more details";
	            }
	        }
	    }, {
	        key: "_isLandscape",
	        value: function _isLandscape() {
	            return document.documentElement.clientHeight < document.documentElement.clientWidth;
	        }
	    }, {
	        key: "addPanClass",
	        value: function addPanClass() {
	            if (this._isLandscape()) {
	                this._elem.classList.remove("vertical");
	            } else {
	                if (document.documentElement.clientWidth >= 768) {
	                    return;
	                }

	                this._elem.classList.add("vertical");
	            }
	        }
	    }, {
	        key: "removeSmallClass",
	        value: function removeSmallClass() {
	            var _this3 = this;

	            if (this._isLandscape()) {
	                this.details.show();
	                this._elem.classList.remove("small");
	            } else {
	                if (this._isSmallClass) {
	                    this.details.hide();
	                    this._elem.style.height = "50%";
	                    setTimeout(function () {
	                        _this3._elem.style.height = "";
	                        _this3._elem.classList.add("small");
	                    }, 0);
	                }
	            }
	        }
	    }, {
	        key: "_onAnimationEnd",
	        value: function _onAnimationEnd() {
	            this._elem.style.height = "";
	            this.details.clearFontSize();
	            this.trigger(this.constructor.EVENTS.onAnimationEnd, "");

	            if (this._isLandscape()) {
	                this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimation, "");
	            } else {
	                if (this._elem.classList.contains("small")) {
	                    this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimationPanUp, document.documentElement.clientHeight - parseInt(getComputedStyle(this._elem).height));
	                } else {
	                    this._showReloadButton();
	                    this.trigger(this.constructor.EVENTS.onChangeHeightAfterAnimationPanDown);
	                    this.details.show();
	                }
	            }
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onChangeHeightByPan": "onChangeHeightByPan",
	                "onChangeHeightAfterAnimationPanUp": "onChangeHeightAfterAnimationPanUp",
	                "onChangeHeightAfterAnimationPanDown": "onChangeHeightAfterAnimationPanDown",
	                "onAnimationEnd": "onAnimationEnd",
	                "onShowMoreDetails": "onShowMoreDetails",
	                "onHideMoreDetails": "onHideMoreDetails",
	                "onReloadDataRequest": "onReloadDataRequest",
	                Hourly: _hourly2.default.EVENTS
	            };
	        }
	    }]);

	    return CurrentCity;
	}();

	exports.default = CurrentCity;


	for (var key in _eventMixin2.default) {
	    CurrentCity.prototype[key] = _eventMixin2.default[key];
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _template = __webpack_require__(18);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Details = function () {
	    function Details() {
	        _classCallCheck(this, Details);

	        this._elem = document.createElement("div");
	        this._elem.className = "details";
	    }

	    _createClass(Details, [{
	        key: "getFontSize",
	        value: function getFontSize() {
	            return getComputedStyle(this._elem).fontSize;
	        }
	    }, {
	        key: "setFontSize",
	        value: function setFontSize(value) {
	            this._elem.style.fontSize = value;
	        }
	    }, {
	        key: "getElem",
	        value: function getElem() {
	            return this._elem;
	        }
	    }, {
	        key: "clearFontSize",
	        value: function clearFontSize() {
	            this._elem.style.fontSize = "";
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this._elem.classList.add("hidden");
	        }
	    }, {
	        key: "show",
	        value: function show(cb) {
	            this._elem.classList.remove("hidden");
	        }
	    }, {
	        key: "showMore",
	        value: function showMore() {
	            this._elem.classList.add("open");
	        }
	    }, {
	        key: "hideMore",
	        value: function hideMore() {
	            this._elem.classList.remove("open");
	        }
	    }, {
	        key: "render",
	        value: function render(data, freeSpace) {
	            var itemHeight = this._getItemInListHeight();
	            var col = parseInt(freeSpace / itemHeight) >= 2 ? parseInt(freeSpace / itemHeight) : 1;
	            col = col > 4 ? 4 : col;
	            // const html = template({items: data, freeSpace: ()});
	            this._elem.innerHTML = (0, _template2.default)({ items: data, freeSpace: col });

	            // console.log(col);
	            // console.log(freeSpace);
	            // console.log(freeSpace / itemHeight);
	        }
	    }, {
	        key: "_getItemInListHeight",
	        value: function _getItemInListHeight() {
	            var fackeInstance = document.createElement("div");
	            fackeInstance.style.position = "absolute";
	            fackeInstance.style.left = "-99999px";
	            var div = document.createElement("div");
	            div.className = "details__item";
	            div.innerHTML = "fake";
	            fackeInstance.appendChild(div);
	            document.body.appendChild(fackeInstance);
	            var itemHeight = fackeInstance.children[0].clientHeight;
	            document.body.removeChild(fackeInstance);

	            return itemHeight;
	        }
	    }, {
	        key: "elem",
	        get: function get() {
	            return this._elem;
	        }
	    }]);

	    return Details;
	}();

		exports.default = Details;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (freeSpace, items) {var pug_indent = [];
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {
	      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	        var item = $$obj[index];
	pug_html = pug_html + "\n\u003Cdiv" + (pug.attr("class", pug.classes(["details__item " + ((index >= freeSpace) ? "datails--more" : "")], [true]), false, true)) + "\u003E\u003Cspan class=\"details__item-text\"\u003E" + (pug.escape(null == (pug_interp = item[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = item[2] || "") ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;
	      var item = $$obj[index];
	pug_html = pug_html + "\n\u003Cdiv" + (pug.attr("class", pug.classes(["details__item " + ((index >= freeSpace) ? "datails--more" : "")], [true]), false, true)) + "\u003E\u003Cspan class=\"details__item-text\"\u003E" + (pug.escape(null == (pug_interp = item[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E" + (pug.escape(null == (pug_interp = item[1]) ? "" : pug_interp)) + "\u003Cspan\u003E" + (pug.escape(null == (pug_interp = item[2] || "") ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);
	}.call(this,"freeSpace" in locals_for_with?locals_for_with.freeSpace:typeof freeSpace!=="undefined"?freeSpace:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(20).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(22);

	var _template = __webpack_require__(23);

	var _template2 = _interopRequireDefault(_template);

	var _eventMixin = __webpack_require__(24);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Hourly = function () {
	    function Hourly(elem) {
	        var _this = this;

	        _classCallCheck(this, Hourly);

	        this._elem = document.createElement("div");
	        this._elem.className = "hourly";

	        this._swipeElem = new Hammer(this._elem, { domEvents: true });

	        this._swipeElem.on("swipeleft", function (ev) {
	            _this._slider.classList.add("slide");
	            _this.trigger(_this.constructor.EVENTS.onSwipeLeft, "");
	        });

	        this._swipeElem.on("swiperight", function (ev) {
	            _this._slider.classList.remove("slide");
	            _this.trigger(_this.constructor.EVENTS.onSwipeRight, "");
	        });

	        this._swipeElem.on("swipe", function (ev) {
	            _this.trigger(_this.constructor.EVENTS.onSwipe, "");
	        });
	    }

	    _createClass(Hourly, [{
	        key: "render",
	        value: function render(data) {
	            var _this2 = this;

	            this._elem.innerHTML = (0, _template2.default)({ slides: data });
	            this._slider = this._elem.querySelector("[data-hourly-slider]");
	            this._inner = this._elem.querySelector("[data-hourly-inner]");
	            this.trigger(this.constructor.EVENTS.onRender, "");

	            setTimeout(function () {
	                _this2._elem.classList.add("shown");
	                setTimeout(function () {
	                    _this2._elem.classList.add("shown-slider");
	                }, 50);
	            }, 0);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.elem.innerHTML = "";
	            this._elem.classList.remove("shown");
	            this._elem.classList.remove("shown-slider");
	            this.trigger(this.constructor.EVENTS.onDestroy, "");
	        }
	    }, {
	        key: "elem",
	        get: function get() {
	            return this._elem;
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onRender": "onRender",
	                "onDestroy": "onDestroy",
	                "onSwipe": "onSwipe",
	                "onSwipeLeft": "onSwipeLeft",
	                "onSwipeRight": "onSwipeRight",
	                "onTransitionEnd": "onTransitionEnd",
	                "onDestroyTransitionEnd": "onDestroyTransitionEnd"
	            };
	        }
	    }]);

	    return Hourly;
	}();

	exports.default = Hourly;


	for (var key in _eventMixin2.default) {
	    Hourly.prototype[key] = _eventMixin2.default[key];
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! Hammer.JS - v2.0.8 - 2016-04-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	!function (a, b, c, d) {
	  "use strict";
	  function e(a, b, c) {
	    return setTimeout(j(a, c), b);
	  }function f(a, b, c) {
	    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
	  }function g(a, b, c) {
	    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
	      b.call(c, a[e], e, a), e++;
	    } else for (e in a) {
	      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
	    }
	  }function h(b, c, d) {
	    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
	      var c = new Error("get-stack-trace"),
	          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
	          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
	    };
	  }function i(a, b, c) {
	    var d,
	        e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
	  }function j(a, b) {
	    return function () {
	      return a.apply(b, arguments);
	    };
	  }function k(a, b) {
	    return (typeof a === "undefined" ? "undefined" : _typeof(a)) == oa ? a.apply(b ? b[0] || d : d, b) : a;
	  }function l(a, b) {
	    return a === d ? b : a;
	  }function m(a, b, c) {
	    g(q(b), function (b) {
	      a.addEventListener(b, c, !1);
	    });
	  }function n(a, b, c) {
	    g(q(b), function (b) {
	      a.removeEventListener(b, c, !1);
	    });
	  }function o(a, b) {
	    for (; a;) {
	      if (a == b) return !0;a = a.parentNode;
	    }return !1;
	  }function p(a, b) {
	    return a.indexOf(b) > -1;
	  }function q(a) {
	    return a.trim().split(/\s+/g);
	  }function r(a, b, c) {
	    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
	      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
	    }return -1;
	  }function s(a) {
	    return Array.prototype.slice.call(a, 0);
	  }function t(a, b, c) {
	    for (var d = [], e = [], f = 0; f < a.length;) {
	      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
	    }return c && (d = b ? d.sort(function (a, c) {
	      return a[b] > c[b];
	    }) : d.sort()), d;
	  }function u(a, b) {
	    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
	      if (c = ma[g], e = c ? c + f : b, e in a) return e;g++;
	    }return d;
	  }function v() {
	    return ua++;
	  }function w(b) {
	    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
	  }function x(a, b) {
	    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
	      k(a.options.enable, [a]) && c.handler(b);
	    }, this.init();
	  }function y(a) {
	    var b,
	        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
	  }function z(a, b, c) {
	    var d = c.pointers.length,
	        e = c.changedPointers.length,
	        f = b & Ea && d - e === 0,
	        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
	  }function A(a, b) {
	    var c = a.session,
	        d = b.pointers,
	        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
	        g = c.firstMultiple,
	        h = g ? g.center : f.center,
	        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
	  }function B(a, b) {
	    var c = b.center,
	        d = a.offsetDelta || {},
	        e = a.prevDelta || {},
	        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
	  }function C(a, b) {
	    var c,
	        e,
	        f,
	        g,
	        h = a.lastInterval || b,
	        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
	      var j = b.deltaX - h.deltaX,
	          k = b.deltaY - h.deltaY,
	          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
	    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
	  }function D(a) {
	    for (var b = [], c = 0; c < a.pointers.length;) {
	      b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;
	    }return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
	  }function E(a) {
	    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
	      c += a[e].clientX, d += a[e].clientY, e++;
	    }return { x: pa(c / b), y: pa(d / b) };
	  }function F(a, b, c) {
	    return { x: b / a || 0, y: c / a || 0 };
	  }function G(a, b) {
	    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
	  }function H(a, b, c) {
	    c || (c = Qa);var d = b[c[0]] - a[c[0]],
	        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
	  }function I(a, b, c) {
	    c || (c = Qa);var d = b[c[0]] - a[c[0]],
	        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
	  }function J(a, b) {
	    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
	  }function K(a, b) {
	    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
	  }function L() {
	    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
	  }function M() {
	    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
	  }function N() {
	    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
	  }function O(a, b) {
	    var c = s(a.touches),
	        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
	  }function P() {
	    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
	  }function Q(a, b) {
	    var c = s(a.touches),
	        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
	        f,
	        g = s(a.changedTouches),
	        h = [],
	        i = this.target;if (f = c.filter(function (a) {
	      return o(a.target, i);
	    }), b === Ea) for (e = 0; e < f.length;) {
	      d[f[e].identifier] = !0, e++;
	    }for (e = 0; e < g.length;) {
	      d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
	    }return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
	  }function R() {
	    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
	  }function S(a, b) {
	    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
	  }function T(a) {
	    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
	      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
	          e = function e() {
	        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
	      };setTimeout(e, cb);
	    }
	  }function U(a) {
	    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
	      var e = this.lastTouches[d],
	          f = Math.abs(b - e.x),
	          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
	    }return !1;
	  }function V(a, b) {
	    this.manager = a, this.set(b);
	  }function W(a) {
	    if (p(a, jb)) return jb;var b = p(a, kb),
	        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
	  }function X() {
	    if (!fb) return !1;var b = {},
	        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
	      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
	    }), b;
	  }function Y(a) {
	    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
	  }function Z(a) {
	    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
	  }function $(a) {
	    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
	  }function _(a, b) {
	    var c = b.manager;return c ? c.get(a) : a;
	  }function aa() {
	    Y.apply(this, arguments);
	  }function ba() {
	    aa.apply(this, arguments), this.pX = null, this.pY = null;
	  }function ca() {
	    aa.apply(this, arguments);
	  }function da() {
	    Y.apply(this, arguments), this._timer = null, this._input = null;
	  }function ea() {
	    aa.apply(this, arguments);
	  }function fa() {
	    aa.apply(this, arguments);
	  }function ga() {
	    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
	  }function ha(a, b) {
	    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
	  }function ia(a, b) {
	    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
	      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
	    }, this);
	  }function ja(a, b) {
	    var c = a.element;if (c.style) {
	      var d;g(a.options.cssProps, function (e, f) {
	        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
	      }), b || (a.oldCssProps = {});
	    }
	  }function ka(a, c) {
	    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
	  }var la,
	      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
	      na = b.createElement("div"),
	      oa = "function",
	      pa = Math.round,
	      qa = Math.abs,
	      ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
	    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
	      var e = arguments[c];if (e !== d && null !== e) for (var f in e) {
	        e.hasOwnProperty(f) && (b[f] = e[f]);
	      }
	    }return b;
	  } : Object.assign;var sa = h(function (a, b, c) {
	    for (var e = Object.keys(b), f = 0; f < e.length;) {
	      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
	    }return a;
	  }, "extend", "Use `assign`."),
	      ta = h(function (a, b) {
	    return sa(a, b, !0);
	  }, "merge", "Use `assign`."),
	      ua = 1,
	      va = /mobile|tablet|ip(ad|hone|od)|android/i,
	      wa = "ontouchstart" in a,
	      xa = u(a, "PointerEvent") !== d,
	      ya = wa && va.test(navigator.userAgent),
	      za = "touch",
	      Aa = "pen",
	      Ba = "mouse",
	      Ca = "kinect",
	      Da = 25,
	      Ea = 1,
	      Fa = 2,
	      Ga = 4,
	      Ha = 8,
	      Ia = 1,
	      Ja = 2,
	      Ka = 4,
	      La = 8,
	      Ma = 16,
	      Na = Ja | Ka,
	      Oa = La | Ma,
	      Pa = Na | Oa,
	      Qa = ["x", "y"],
	      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
	      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
	    }, destroy: function destroy() {
	      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
	    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
	      Ta = "mousedown",
	      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
	      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
	    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
	      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
	      Xa = "pointerdown",
	      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
	      var b = this.store,
	          c = !1,
	          d = a.type.toLowerCase().replace("ms", ""),
	          e = Va[d],
	          f = Wa[a.pointerType] || a.pointerType,
	          g = f == za,
	          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
	    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
	      $a = "touchstart",
	      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
	      var b = Za[a.type];if (b === Ea && (this.started = !0), this.started) {
	        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
	      }
	    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
	      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
	      var b = ab[a.type],
	          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
	    } });var cb = 2500,
	      db = 25;i(R, x, { handler: function handler(a, b, c) {
	      var d = c.pointerType == za,
	          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
	        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
	      }
	    }, destroy: function destroy() {
	      this.touch.destroy(), this.mouse.destroy();
	    } });var eb = u(na.style, "touchAction"),
	      fb = eb !== d,
	      gb = "compute",
	      hb = "auto",
	      ib = "manipulation",
	      jb = "none",
	      kb = "pan-x",
	      lb = "pan-y",
	      mb = X();V.prototype = { set: function set(a) {
	      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
	    }, update: function update() {
	      this.set(this.manager.options.touchAction);
	    }, compute: function compute() {
	      var a = [];return g(this.manager.recognizers, function (b) {
	        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
	      }), W(a.join(" "));
	    }, preventDefaults: function preventDefaults(a) {
	      var b = a.srcEvent,
	          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
	          e = p(d, jb) && !mb[jb],
	          f = p(d, lb) && !mb[lb],
	          g = p(d, kb) && !mb[kb];if (e) {
	        var h = 1 === a.pointers.length,
	            i = a.distance < 2,
	            j = a.deltaTime < 250;if (h && i && j) return;
	      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
	    }, preventSrc: function preventSrc(a) {
	      this.manager.session.prevented = !0, a.preventDefault();
	    } };var nb = 1,
	      ob = 2,
	      pb = 4,
	      qb = 8,
	      rb = qb,
	      sb = 16,
	      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
	      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
	    }, recognizeWith: function recognizeWith(a) {
	      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
	    }, dropRecognizeWith: function dropRecognizeWith(a) {
	      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
	    }, requireFailure: function requireFailure(a) {
	      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
	    }, dropRequireFailure: function dropRequireFailure(a) {
	      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
	    }, hasRequireFailures: function hasRequireFailures() {
	      return this.requireFail.length > 0;
	    }, canRecognizeWith: function canRecognizeWith(a) {
	      return !!this.simultaneous[a.id];
	    }, emit: function emit(a) {
	      function b(b) {
	        c.manager.emit(b, a);
	      }var c = this,
	          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
	    }, tryEmit: function tryEmit(a) {
	      return this.canEmit() ? this.emit(a) : void (this.state = tb);
	    }, canEmit: function canEmit() {
	      for (var a = 0; a < this.requireFail.length;) {
	        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
	      }return !0;
	    }, recognize: function recognize(a) {
	      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
	    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
	      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
	    }, process: function process(a) {
	      var b = this.state,
	          c = a.eventType,
	          d = b & (ob | pb),
	          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
	    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
	      var a = this.options.direction,
	          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
	    }, directionTest: function directionTest(a) {
	      var b = this.options,
	          c = !0,
	          d = a.distance,
	          e = a.direction,
	          f = a.deltaX,
	          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
	    }, attrTest: function attrTest(a) {
	      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
	    }, emit: function emit(a) {
	      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
	    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
	      return [jb];
	    }, attrTest: function attrTest(a) {
	      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
	    }, emit: function emit(a) {
	      if (1 !== a.scale) {
	        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
	      }this._super.emit.call(this, a);
	    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
	      return [hb];
	    }, process: function process(a) {
	      var b = this.options,
	          c = a.pointers.length === b.pointers,
	          d = a.distance < b.threshold,
	          f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
	        this.state = rb, this.tryEmit();
	      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
	    }, reset: function reset() {
	      clearTimeout(this._timer);
	    }, emit: function emit(a) {
	      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
	    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
	      return [jb];
	    }, attrTest: function attrTest(a) {
	      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
	    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
	      return ba.prototype.getTouchAction.call(this);
	    }, attrTest: function attrTest(a) {
	      var b,
	          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
	    }, emit: function emit(a) {
	      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
	    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
	      return [ib];
	    }, process: function process(a) {
	      var b = this.options,
	          c = a.pointers.length === b.pointers,
	          d = a.distance < b.threshold,
	          f = a.deltaTime < b.time;if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();if (d && f && c) {
	        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
	            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
	          this.state = rb, this.tryEmit();
	        }, b.interval, this), ob) : rb;
	      }return tb;
	    }, failTimeout: function failTimeout() {
	      return this._timer = e(function () {
	        this.state = tb;
	      }, this.options.interval, this), tb;
	    }, reset: function reset() {
	      clearTimeout(this._timer);
	    }, emit: function emit() {
	      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
	    } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
	      vb = 2;ia.prototype = { set: function set(a) {
	      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
	    }, stop: function stop(a) {
	      this.session.stopped = a ? vb : ub;
	    }, recognize: function recognize(a) {
	      var b = this.session;if (!b.stopped) {
	        this.touchAction.preventDefaults(a);var c,
	            d = this.recognizers,
	            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
	          c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
	        }
	      }
	    }, get: function get(a) {
	      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
	        if (b[c].options.event == a) return b[c];
	      }return null;
	    }, add: function add(a) {
	      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
	    }, remove: function remove(a) {
	      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
	        var b = this.recognizers,
	            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
	      }return this;
	    }, on: function on(a, b) {
	      if (a !== d && b !== d) {
	        var c = this.handlers;return g(q(a), function (a) {
	          c[a] = c[a] || [], c[a].push(b);
	        }), this;
	      }
	    }, off: function off(a, b) {
	      if (a !== d) {
	        var c = this.handlers;return g(q(a), function (a) {
	          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
	        }), this;
	      }
	    }, emit: function emit(a, b) {
	      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
	        b.type = a, b.preventDefault = function () {
	          b.srcEvent.preventDefault();
	        };for (var d = 0; d < c.length;) {
	          c[d](b), d++;
	        }
	      }
	    }, destroy: function destroy() {
	      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
	    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha,  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return ha;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
	}(window, document, "Hammer");
	//# sourceMappingURL=hammer.min.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (slides) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"hourly__inner\" data-hourly-inner\u003E\n  \u003Cdiv class=\"hourly__slider\" data-hourly-slider\u003E";
	// iterate slides
	;(function(){
	  var $$obj = slides;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var slide = $$obj[pug_index0];
	pug_html = pug_html + "\n    \u003Cdiv class=\"hourly__slide\"\u003E\n      \u003Cdiv class=\"hourly__slide-time\"\u003E" + (pug.escape(null == (pug_interp = slide.time) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide-temp celcius\"\u003E" + (pug.escape(null == (pug_interp = slide.temp) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var slide = $$obj[pug_index0];
	pug_html = pug_html + "\n    \u003Cdiv class=\"hourly__slide\"\u003E\n      \u003Cdiv class=\"hourly__slide-time\"\u003E" + (pug.escape(null == (pug_interp = slide.time) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide-temp celcius\"\u003E" + (pug.escape(null == (pug_interp = slide.temp) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";}.call(this,"slides" in locals_for_with?locals_for_with.slides:typeof slides!=="undefined"?slides:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var EventMixin = {

	    /**
	     * Подписка на событие
	     * Использование:
	     *  object.on('select', function(item) { ... }
	     */
	    on: function on(eventName, handler) {
	        if (!this._eventHandlers) this._eventHandlers = {};
	        if (!this._eventHandlers[eventName]) {
	            this._eventHandlers[eventName] = [];
	        }
	        this._eventHandlers[eventName].push(handler);
	    },

	    /**
	     * Прекращение подписки
	     *  object.off('select',  handler)
	     */
	    off: function off(eventName, handler) {
	        var handlers = this._eventHandlers && this._eventHandlers[eventName];
	        if (!handlers) return;
	        for (var i = 0; i < handlers.length; i++) {
	            if (handlers[i] == handler) {
	                handlers.splice(i--, 1);
	            }
	        }
	    },

	    /**
	     * Генерация события с передачей данных
	     *  this.trigger('select', item);
	     */
	    trigger: function trigger(eventName /*, ... */) {

	        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
	            return; // обработчиков для события нет
	        }

	        // вызвать обработчики
	        var handlers = this._eventHandlers[eventName];
	        for (var i = 0; i < handlers.length; i++) {
	            handlers[i].apply(this, [].slice.call(arguments, 1));
	        }
	    }
	};

		exports.default = EventMixin;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _template = __webpack_require__(26);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NexDays = function () {
	    function NexDays(elem) {
	        _classCallCheck(this, NexDays);

	        this._elem = elem;
	    }

	    _createClass(NexDays, [{
	        key: "getHeight",
	        value: function getHeight() {
	            return getComputedStyle(this._elem).height;
	        }
	    }, {
	        key: "setHeight",
	        value: function setHeight(value) {
	            this._elem.style.height = value;
	        }
	    }, {
	        key: "clearHeight",
	        value: function clearHeight() {
	            this._elem.style.height = "";
	        }
	    }, {
	        key: "render",
	        value: function render(data) {
	            this._elem.innerHTML = (0, _template2.default)({ items: data });
	        }
	    }]);

	    return NexDays;
	}();

		exports.default = NexDays;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (items) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cul class=\"addition__list\"\u003E";
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
	        var item = $$obj[pug_index0];
	pug_html = pug_html + "\n  \u003Cli class=\"addition__item\"\u003E\n    \u003Cdiv class=\"nex-day\" data-next-day\u003E\n      \u003Cdiv class=\"nex-day__img-wrapper\"\u003E\u003Cimg" + (" class=\"nex-day__img\""+pug.attr("src", item.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__desc\"\u003E\n        \u003Cdiv class=\"nex-day__date\"\u003E" + (pug.escape(null == (pug_interp = item.data) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"nex-day__weather\"\u003E" + (pug.escape(null == (pug_interp = item.main) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__temp\"\u003E\n        \u003Cdiv class=\"nex-day__temp-day celcius\"\u003E" + (pug.escape(null == (pug_interp = item.temp.day) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"nex-day__temp-hight celcius\"\u003E" + (pug.escape(null == (pug_interp = item.temp.night) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fli\u003E";
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index0 in $$obj) {
	      $$l++;
	      var item = $$obj[pug_index0];
	pug_html = pug_html + "\n  \u003Cli class=\"addition__item\"\u003E\n    \u003Cdiv class=\"nex-day\" data-next-day\u003E\n      \u003Cdiv class=\"nex-day__img-wrapper\"\u003E\u003Cimg" + (" class=\"nex-day__img\""+pug.attr("src", item.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__desc\"\u003E\n        \u003Cdiv class=\"nex-day__date\"\u003E" + (pug.escape(null == (pug_interp = item.data) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"nex-day__weather\"\u003E" + (pug.escape(null == (pug_interp = item.main) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"nex-day__temp\"\u003E\n        \u003Cdiv class=\"nex-day__temp-day celcius\"\u003E" + (pug.escape(null == (pug_interp = item.temp.day) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"nex-day__temp-hight celcius\"\u003E" + (pug.escape(null == (pug_interp = item.temp.night) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fli\u003E";
	    }
	  }
	}).call(this);

	pug_html = pug_html + "\n\u003C\u002Ful\u003E";}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function () {
	    function Menu(elem) {
	        _classCallCheck(this, Menu);

	        this._elem = elem;

	        elem.addEventListener("click", this._manager.bind(this));

	        this.setOffsetMargin();
	    }

	    _createClass(Menu, [{
	        key: "setOffsetMargin",
	        value: function setOffsetMargin() {
	            this._elem.querySelector(".menu__city-viewer").style.marginRight = -this._getScrollWidth() + "px";
	        }
	    }, {
	        key: "removeOffsetMargin",
	        value: function removeOffsetMargin() {
	            this._elem.querySelector(".menu__city-viewer").style.marginRight = "";
	        }
	    }, {
	        key: "_manager",
	        value: function _manager(event) {
	            if (event.target.closest(".menu__close")) {
	                this.hide();
	            }

	            if (event.target.closest(".menu__overflow")) {
	                this.hide();
	            }
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            this._elem.classList.add("open");
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this._elem.classList.remove("open");
	        }
	    }, {
	        key: "enable",
	        value: function enable() {
	            document.body.classList.add("menuSwipe");
	        }
	    }, {
	        key: "disable",
	        value: function disable() {
	            document.body.classList.remove("menuSwipe");
	        }
	    }, {
	        key: "_getScrollWidth",
	        value: function _getScrollWidth() {
	            var div = document.createElement("div");
	            div.style.overflow = "scroll";
	            div.style.width = '50px';
	            div.style.height = '50px';
	            div.style.visibility = 'hidden';
	            document.body.appendChild(div);
	            var scrollWidth = div.offsetWidth - div.clientWidth;
	            document.body.removeChild(div);

	            return scrollWidth;
	        }
	    }]);

	    return Menu;
	}();

		exports.default = Menu;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _teleportAutocompleteMin = __webpack_require__(29);

	var _teleportAutocompleteMin2 = _interopRequireDefault(_teleportAutocompleteMin);

	__webpack_require__(30);

	var _eventMixin = __webpack_require__(24);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Search = function () {
	    function Search(elem) {
	        var _this = this;

	        _classCallCheck(this, Search);

	        this._elem = elem;
	        var input = elem.querySelector("." + elem.className + "__input");

	        _teleportAutocompleteMin2.default.init(input).on('change', function (cityData) {
	            _this._sendCityData(cityData);
	        });
	    }

	    _createClass(Search, [{
	        key: "_sendCityData",
	        value: function _sendCityData(cityData) {
	            this.trigger(this.constructor.EVENTS.onGetCity, cityData);
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onGetCity": "onGetCity"
	            };
	        }
	    }]);

	    return Search;
	}();

	for (var key in _eventMixin2.default) {
	    Search.prototype[key] = _eventMixin2.default[key];
	}

	exports.default = Search;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! teleport-autocomplete - v0.3.1 | https://github.com/teleport/autocomplete#readme | MIT */
	!function (e) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.TeleportAutocomplete = e();
	  }
	}(function () {
	  return function e(t, n, i) {
	    function r(s, a) {
	      if (!n[s]) {
	        if (!t[s]) {
	          var u = "function" == typeof require && require;if (!a && u) return require(s, !0);if (o) return o(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
	        }var l = n[s] = { exports: {} };t[s][0].call(l.exports, function (e) {
	          var n = t[s][1][e];return r(n ? n : e);
	        }, l, l.exports, e, t, n, i);
	      }return n[s].exports;
	    }for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) {
	      r(i[s]);
	    }return r;
	  }({ 1: [function (e, t, n) {
	      "use strict";
	      function i(e) {
	        return e && e.__esModule ? e : { "default": e };
	      }function r(e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	      }Object.defineProperty(n, "__esModule", { value: !0 });var o = function () {
	        function e(e, t) {
	          for (var n = 0; n < t.length; n++) {
	            var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
	          }
	        }return function (t, n, i) {
	          return n && e(t.prototype, n), i && e(t, i), t;
	        };
	      }();e("classlist-polyfill"), e("element-closest");var s = e("halfred"),
	          a = i(s),
	          u = e("minivents"),
	          c = i(u),
	          l = e("core-js/library/fn/object/assign"),
	          f = i(l),
	          d = e("core-js/library/fn/array/find"),
	          p = i(d),
	          h = e("core-js/library/fn/regexp/escape"),
	          y = i(h),
	          v = e("debounce"),
	          m = i(v),
	          g = { BACK: 8, TAB: 9, ENTER: 13, UP: 38, DOWN: 40 },
	          b = '<div class="tp-autocomplete"><ul class="tp-ac__list"></ul></div>',
	          _ = "tp-ac__input",
	          x = function x(e) {
	        return '<li class="tp-ac__item">' + e + "</li>";
	      },
	          k = '<li class="tp-ac__item no-results">No matches</li>',
	          $ = '<li class="tp-ac__item geolocate">Detect my current location</li>',
	          w = function w(e) {
	        return this.wrapMatches(e.title);
	      };HTMLElement.prototype.on = HTMLElement.prototype.addEventListener, HTMLElement.prototype.off = HTMLElement.prototype.removeEventListener;var j = function () {
	        function e() {
	          var t = this,
	              n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
	              i = n.el,
	              o = void 0 === i ? null : i,
	              s = n.value,
	              a = n.maxItems,
	              u = void 0 === a ? 10 : a,
	              l = n.itemTemplate,
	              d = void 0 === l ? w : l,
	              p = n.geoLocate,
	              h = void 0 === p ? !0 : p,
	              y = n.apiRoot,
	              v = void 0 === y ? "https://api.teleport.org/api" : y,
	              g = n.apiVersion,
	              b = void 0 === g ? 1 : g,
	              _ = n.embeds,
	              x = void 0 === _ ? "city:country,city:admin1_division,city:timezone/tz:offsets-now,city:urban_area" : _;r(this, e), (0, c["default"])(this);var k = "string" == typeof o ? document.querySelector(o) : o;return this.setupInput(k), (0, f["default"])(this, { maxItems: u, geoLocate: h, apiRoot: v, apiVersion: b, itemTemplate: d, embeds: x, results: [], _activeIndex: 0, _cache: {}, _query: this.el.value, value: s }), this.value && this.value.title ? this.query = this.value.title : this.query && this.fetchResults(function () {
	            t.value = t.getResultByTitle(t.query), t.emit("change", t.value);
	          }), this.getCities = (0, m["default"])(this.getCities, 200), this;
	        }return o(e, [{ key: "query", get: function get() {
	            return this._query;
	          }, set: function set(e) {
	            return e === this._query ? e : (this._query = e, this.el.value = e, void this.emit("querychange", e));
	          } }, { key: "activeIndex", get: function get() {
	            return this._activeIndex;
	          }, set: function set(e) {
	            var t = this.list.childNodes[this._activeIndex];t && t.classList.remove("is-active"), this._activeIndex = e;var n = this.list.childNodes[e];n && n.classList.add("is-active");
	          } }, { key: "loading", set: function set(e) {
	            this.container.classList.toggle("spinner", e);
	          } }]), o(e, [{ key: "destroy", value: function value() {
	            this.el.off("input", this.oninput), this.el.off("keydown", this.onkeydown), this.el.off("focus", this.onfocus), this.el.off("blur", this.onblur), this.el.off("click", this.onclick), this.el.classList.remove(_);var e = this.container.parentNode;e.replaceChild(this.el.parentNode.removeChild(this.el), this.container);
	          } }, { key: "clear", value: function value() {
	            this.results = [], this.selectByIndex(0);
	          } }, { key: "setupInput", value: function value(e) {
	            if (!(e && e instanceof HTMLInputElement)) throw new Error("Invalid element given");e.insertAdjacentHTML("beforebegin", b), Object.defineProperty(this, "container", { value: e.previousSibling }), Object.defineProperty(this, "list", { value: this.container.firstChild });var t = this.container.insertBefore(e.parentNode.removeChild(e), this.list);t.classList.add(_), Object.defineProperty(this, "el", { enumerable: !0, value: t }), this.el.on("input", this.oninput.bind(this)), this.el.on("keydown", this.onkeydown.bind(this)), this.el.on("focus", this.onfocus.bind(this)), this.el.on("blur", this.onblur.bind(this)), this.el.on("click", this.onclick.bind(this)), this.list.on("mousedown", this.onlistclick.bind(this));
	          } }, { key: "onlistclick", value: function value(e) {
	            var t = [].indexOf.call(this.list.children, e.target.closest(".tp-ac__item"));this.selectByIndex(t);
	          } }, { key: "onclick", value: function value() {
	            this.el.select();
	          } }, { key: "onfocus", value: function value() {
	            this.renderList();
	          } }, { key: "onblur", value: function value() {
	            this.list.innerHTML = "";
	          } }, { key: "oninput", value: function value() {
	            var e = this;this._query = this.el.value, this.fetchResults(function () {
	              return e.renderList();
	            });
	          } }, { key: "onkeydown", value: function value(e) {
	            var t = e.keyCode;switch (-1 !== [g.UP, g.DOWN].indexOf(t) && e.preventDefault(), t) {case g.BACK:
	                (this.value || 1 === this.query.length) && this.clear();break;case g.ENTER:
	                !this.value && this.query && e.preventDefault(), this.selectByIndex(this.activeIndex);break;case g.TAB:
	                this.value || this.selectByIndex(this.activeIndex);break;case g.UP:
	                this.activeIndex = Math.max(0, this.activeIndex - 1);break;case g.DOWN:
	                this.activeIndex = Math.min(this.results.length - 1, this.activeIndex + 1);}
	          } }, { key: "selectByIndex", value: function value(e) {
	            this.activeIndex = e;var t = this.value;this.value = this.results[e] || null;var n = this.list.firstChild && this.list.firstChild.classList.contains("geolocate");n && this.currentLocation(), t === this.value || n || this.emit("change", this.value), this.list.innerHTML = "", this.query = this.value ? this.value.title : "";
	          } }, { key: "wrapMatches", value: function value() {
	            var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
	                t = e;return this.query.split(/[\,\s]+/).filter(function (e) {
	              return !!e;
	            }).forEach(function (e) {
	              var n = new RegExp((0, y["default"])(e) + "(?![^<]*>|[^<>]*</)", "gi");t = t.replace(n, "<span>$&</span>");
	            }), t;
	          } }, { key: "renderList", value: function value() {
	            var e = this,
	                t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
	                n = t.geoLocate,
	                i = void 0 === n ? this.geoLocate : n,
	                r = this.results.map(function (t) {
	              return x(e.itemTemplate(t));
	            }).slice(0, this.maxItems).join("");r || "" === this.query || this.value || (r = k), "" === this.query && i && (r = $), this.list.innerHTML = r, this.activeIndex = 0;
	          } }, { key: "getResultByTitle", value: function value(e) {
	            return this.results && e ? (0, p["default"])(this.results, function (t) {
	              return -1 !== t.title.indexOf(e);
	            }) : null;
	          } }, { key: "fetchResults", value: function value() {
	            var e = this,
	                t = arguments.length <= 0 || void 0 === arguments[0] ? function () {} : arguments[0];this.req && this.req.abort();var n = this._cache[this.query];return n ? (this.results = n, t()) : (this.req = this.getCities(function (n) {
	              e.results = e._cache[e.query] = n, t(), e.loading = !1;
	            }), void (this.loading = !0));
	          } }, { key: "currentLocation", value: function value() {
	            var e = this,
	                t = new XMLHttpRequest(),
	                n = "location:nearest-cities/location:nearest-city/" + (this.embeds ? "{" + this.embeds + "}" : "");this.loading = !0, this.oldPlaceholder = this.el.placeholder, this.el.placeholder = "Detecting location...", navigator.geolocation.getCurrentPosition(function (i) {
	              var r = i.coords;t.open("GET", e.apiRoot + "/locations/" + r.latitude + "," + r.longitude + "/?embed=" + n), t.setRequestHeader("Accept", "application/vnd.teleport.v" + e.apiVersion + "+json"), t.addEventListener("load", function () {
	                return e.parseLocation(JSON.parse(t.response));
	              }), t.send();
	            }, function (t) {
	              var n = t.message;e.loading = !1, e.el.placeholder = n, setTimeout(function () {
	                return e.el.placeholder = e.oldPlaceholder;
	              }, 3e3);
	            }, { timeout: 5e3 });
	          } }, { key: "parseLocation", value: function value(e) {
	            var t = a["default"].parse(e),
	                n = t.embeddedArray("location:nearest-cities")[0];n && (this.results = [this.parseCity(n)], "nopick" === this.geoLocate ? (this.el.focus(), this.renderList({ geoLocate: !1 })) : this.selectByIndex(0)), this.loading = !1, this.el.placeholder = this.oldPlaceholder;
	          } }, { key: "getCities", value: function value(e) {
	            var t = this;if (!this.query) return e([]);var n = "city:search-results/city:item/" + (this.embeds ? "{" + this.embeds + "}" : ""),
	                i = new XMLHttpRequest();return i.open("GET", this.apiRoot + "/cities/?search=" + this.query + "&embed=" + n + "&limit=" + this.maxItems), i.setRequestHeader("Accept", "application/vnd.teleport.v" + this.apiVersion + "+json"), i.addEventListener("load", function () {
	              var n = a["default"].parse(JSON.parse(i.response)).embeddedArray("city:search-results").map(function (e) {
	                return t.parseCity(e);
	              });e(n);
	            }), i.send(), i;
	          } }, { key: "parseCity", value: function value(e) {
	            var t = e.embedded("location:nearest-city") || e.embedded("city:item");t.country = t.embedded("city:country"), t.admin1_division = t.embedded("city:admin1_division"), t.timezone = t.embedded("city:timezone"), t.urban_area = t.embedded("city:urban_area");var n = t.full_name,
	                i = t.name,
	                r = t.geoname_id,
	                o = t.population,
	                s = t.location.latlon,
	                a = s.latitude,
	                u = s.longitude,
	                c = e.matching_full_name,
	                l = void 0 === c ? n : c,
	                d = { title: l, name: i, geonameId: r, latitude: a, longitude: u, population: o };if (t.country && (0, f["default"])(d, { country: t.country.name }), t.admin1_division) {
	              var p = t.admin1_division,
	                  h = p.name,
	                  y = p.geonames_admin1_code;(0, f["default"])(d, { admin1Division: h, admin1DivisionCode: y });
	            }if (t.timezone) {
	              var v = t.timezone.embedded("tz:offsets-now");(0, f["default"])(d, { tzOffsetMinutes: v.total_offset_min });
	            }if (t.urban_area) {
	              var m = t.urban_area,
	                  g = m.slug,
	                  b = m.name,
	                  _ = m.ua_id,
	                  x = m.teleport_city_url;(0, f["default"])(d, { uaName: b, uaId: _, uaCityUrl: x, uaSlug: g });
	            }return d;
	          } }], [{ key: "init", value: function value(t) {
	            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
	                i = "string" == typeof t || t instanceof HTMLInputElement ? (0, f["default"])(n, { el: t }) : t;return new e(i);
	          } }]), e;
	      }();n["default"] = j, t.exports = n["default"];
	    }, { "classlist-polyfill": 2, "core-js/library/fn/array/find": 3, "core-js/library/fn/object/assign": 4, "core-js/library/fn/regexp/escape": 5, debounce: 33, "element-closest": 34, halfred: 35, minivents: 39 }], 2: [function (e, t, n) {
	      "document" in window.self && ("classList" in document.createElement("_") ? !function () {
	        "use strict";
	        var e = document.createElement("_");if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
	          var t = function t(e) {
	            var t = DOMTokenList.prototype[e];DOMTokenList.prototype[e] = function (e) {
	              var n,
	                  i = arguments.length;for (n = 0; i > n; n++) {
	                e = arguments[n], t.call(this, e);
	              }
	            };
	          };t("add"), t("remove");
	        }if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
	          var n = DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle = function (e, t) {
	            return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
	          };
	        }e = null;
	      }() : !function (e) {
	        "use strict";
	        if ("Element" in e) {
	          var t = "classList",
	              n = "prototype",
	              i = e.Element[n],
	              r = Object,
	              o = String[n].trim || function () {
	            return this.replace(/^\s+|\s+$/g, "");
	          },
	              s = Array[n].indexOf || function (e) {
	            for (var t = 0, n = this.length; n > t; t++) {
	              if (t in this && this[t] === e) return t;
	            }return -1;
	          },
	              a = function a(e, t) {
	            this.name = e, this.code = DOMException[e], this.message = t;
	          },
	              u = function u(e, t) {
	            if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");return s.call(e, t);
	          },
	              c = function c(e) {
	            for (var t = o.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, r = n.length; r > i; i++) {
	              this.push(n[i]);
	            }this._updateClassName = function () {
	              e.setAttribute("class", this.toString());
	            };
	          },
	              l = c[n] = [],
	              f = function f() {
	            return new c(this);
	          };if (a[n] = Error[n], l.item = function (e) {
	            return this[e] || null;
	          }, l.contains = function (e) {
	            return e += "", -1 !== u(this, e);
	          }, l.add = function () {
	            var e,
	                t = arguments,
	                n = 0,
	                i = t.length,
	                r = !1;do {
	              e = t[n] + "", -1 === u(this, e) && (this.push(e), r = !0);
	            } while (++n < i);r && this._updateClassName();
	          }, l.remove = function () {
	            var e,
	                t,
	                n = arguments,
	                i = 0,
	                r = n.length,
	                o = !1;do {
	              for (e = n[i] + "", t = u(this, e); -1 !== t;) {
	                this.splice(t, 1), o = !0, t = u(this, e);
	              }
	            } while (++i < r);o && this._updateClassName();
	          }, l.toggle = function (e, t) {
	            e += "";var n = this.contains(e),
	                i = n ? t !== !0 && "remove" : t !== !1 && "add";return i && this[i](e), t === !0 || t === !1 ? t : !n;
	          }, l.toString = function () {
	            return this.join(" ");
	          }, r.defineProperty) {
	            var d = { get: f, enumerable: !0, configurable: !0 };try {
	              r.defineProperty(i, t, d);
	            } catch (p) {
	              -2146823252 === p.number && (d.enumerable = !1, r.defineProperty(i, t, d));
	            }
	          } else r[n].__defineGetter__ && i.__defineGetter__(t, f);
	        }
	      }(window.self));
	    }, {}], 3: [function (e, t, n) {
	      e("../../modules/es6.array.find"), t.exports = e("../../modules/$.core").Array.find;
	    }, { "../../modules/$.core": 11, "../../modules/es6.array.find": 29 }], 4: [function (e, t, n) {
	      e("../../modules/es6.object.assign"), t.exports = e("../../modules/$.core").Object.assign;
	    }, { "../../modules/$.core": 11, "../../modules/es6.object.assign": 30 }], 5: [function (e, t, n) {
	      e("../../modules/es7.regexp.escape"), t.exports = e("../../modules/$.core").RegExp.escape;
	    }, { "../../modules/$.core": 11, "../../modules/es7.regexp.escape": 31 }], 6: [function (e, t, n) {
	      t.exports = function (e) {
	        if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
	      };
	    }, {}], 7: [function (e, t, n) {
	      t.exports = function () {};
	    }, {}], 8: [function (e, t, n) {
	      var i = e("./$.ctx"),
	          r = e("./$.iobject"),
	          o = e("./$.to-object"),
	          s = e("./$.to-length"),
	          a = e("./$.array-species-create");t.exports = function (e) {
	        var t = 1 == e,
	            n = 2 == e,
	            u = 3 == e,
	            c = 4 == e,
	            l = 6 == e,
	            f = 5 == e || l;return function (d, p, h) {
	          for (var y, v, m = o(d), g = r(m), b = i(p, h, 3), _ = s(g.length), x = 0, k = t ? a(d, _) : n ? a(d, 0) : void 0; _ > x; x++) {
	            if ((f || x in g) && (y = g[x], v = b(y, x, m), e)) if (t) k[x] = v;else if (v) switch (e) {case 3:
	                return !0;case 5:
	                return y;case 6:
	                return x;case 2:
	                k.push(y);} else if (c) return !1;
	          }return l ? -1 : u || c ? c : k;
	        };
	      };
	    }, { "./$.array-species-create": 9, "./$.ctx": 12, "./$.iobject": 17, "./$.to-length": 25, "./$.to-object": 26 }], 9: [function (e, t, n) {
	      var i = e("./$.is-object"),
	          r = e("./$.is-array"),
	          o = e("./$.wks")("species");t.exports = function (e, t) {
	        var n;return r(e) && (n = e.constructor, "function" != typeof n || n !== Array && !r(n.prototype) || (n = void 0), i(n) && (n = n[o], null === n && (n = void 0))), new (void 0 === n ? Array : n)(t);
	      };
	    }, { "./$.is-array": 18, "./$.is-object": 19, "./$.wks": 28 }], 10: [function (e, t, n) {
	      var i = {}.toString;t.exports = function (e) {
	        return i.call(e).slice(8, -1);
	      };
	    }, {}], 11: [function (e, t, n) {
	      var i = t.exports = { version: "1.2.6" };"number" == typeof __e && (__e = i);
	    }, {}], 12: [function (e, t, n) {
	      var i = e("./$.a-function");t.exports = function (e, t, n) {
	        if (i(e), void 0 === t) return e;switch (n) {case 1:
	            return function (n) {
	              return e.call(t, n);
	            };case 2:
	            return function (n, i) {
	              return e.call(t, n, i);
	            };case 3:
	            return function (n, i, r) {
	              return e.call(t, n, i, r);
	            };}return function () {
	          return e.apply(t, arguments);
	        };
	      };
	    }, { "./$.a-function": 6 }], 13: [function (e, t, n) {
	      t.exports = function (e) {
	        if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
	      };
	    }, {}], 14: [function (e, t, n) {
	      var i = e("./$.global"),
	          r = e("./$.core"),
	          o = e("./$.ctx"),
	          s = "prototype",
	          a = function a(e, t, n) {
	        var u,
	            c,
	            l,
	            f = e & a.F,
	            d = e & a.G,
	            p = e & a.S,
	            h = e & a.P,
	            y = e & a.B,
	            v = e & a.W,
	            m = d ? r : r[t] || (r[t] = {}),
	            g = d ? i : p ? i[t] : (i[t] || {})[s];d && (n = t);for (u in n) {
	          c = !f && g && u in g, c && u in m || (l = c ? g[u] : n[u], m[u] = d && "function" != typeof g[u] ? n[u] : y && c ? o(l, i) : v && g[u] == l ? function (e) {
	            var t = function t(_t) {
	              return this instanceof e ? new e(_t) : e(_t);
	            };return t[s] = e[s], t;
	          }(l) : h && "function" == typeof l ? o(Function.call, l) : l, h && ((m[s] || (m[s] = {}))[u] = l));
	        }
	      };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
	    }, { "./$.core": 11, "./$.ctx": 12, "./$.global": 16 }], 15: [function (e, t, n) {
	      t.exports = function (e) {
	        try {
	          return !!e();
	        } catch (t) {
	          return !0;
	        }
	      };
	    }, {}], 16: [function (e, t, n) {
	      var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = i);
	    }, {}], 17: [function (e, t, n) {
	      var i = e("./$.cof");t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
	        return "String" == i(e) ? e.split("") : Object(e);
	      };
	    }, { "./$.cof": 10 }], 18: [function (e, t, n) {
	      var i = e("./$.cof");t.exports = Array.isArray || function (e) {
	        return "Array" == i(e);
	      };
	    }, { "./$.cof": 10 }], 19: [function (e, t, n) {
	      t.exports = function (e) {
	        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e;
	      };
	    }, {}], 20: [function (e, t, n) {
	      var i = Object;t.exports = { create: i.create, getProto: i.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: i.getOwnPropertyDescriptor, setDesc: i.defineProperty, setDescs: i.defineProperties, getKeys: i.keys, getNames: i.getOwnPropertyNames, getSymbols: i.getOwnPropertySymbols, each: [].forEach };
	    }, {}], 21: [function (e, t, n) {
	      var i = e("./$"),
	          r = e("./$.to-object"),
	          o = e("./$.iobject");t.exports = e("./$.fails")(function () {
	        var e = Object.assign,
	            t = {},
	            n = {},
	            i = Symbol(),
	            r = "abcdefghijklmnopqrst";return t[i] = 7, r.split("").forEach(function (e) {
	          n[e] = e;
	        }), 7 != e({}, t)[i] || Object.keys(e({}, n)).join("") != r;
	      }) ? function (e, t) {
	        for (var n = r(e), s = arguments, a = s.length, u = 1, c = i.getKeys, l = i.getSymbols, f = i.isEnum; a > u;) {
	          for (var d, p = o(s[u++]), h = l ? c(p).concat(l(p)) : c(p), y = h.length, v = 0; y > v;) {
	            f.call(p, d = h[v++]) && (n[d] = p[d]);
	          }
	        }return n;
	      } : Object.assign;
	    }, { "./$": 20, "./$.fails": 15, "./$.iobject": 17, "./$.to-object": 26 }], 22: [function (e, t, n) {
	      t.exports = function (e, t) {
	        var n = t === Object(t) ? function (e) {
	          return t[e];
	        } : t;return function (t) {
	          return String(t).replace(e, n);
	        };
	      };
	    }, {}], 23: [function (e, t, n) {
	      var i = e("./$.global"),
	          r = "__core-js_shared__",
	          o = i[r] || (i[r] = {});t.exports = function (e) {
	        return o[e] || (o[e] = {});
	      };
	    }, { "./$.global": 16 }], 24: [function (e, t, n) {
	      var i = Math.ceil,
	          r = Math.floor;t.exports = function (e) {
	        return isNaN(e = +e) ? 0 : (e > 0 ? r : i)(e);
	      };
	    }, {}], 25: [function (e, t, n) {
	      var i = e("./$.to-integer"),
	          r = Math.min;t.exports = function (e) {
	        return e > 0 ? r(i(e), 9007199254740991) : 0;
	      };
	    }, { "./$.to-integer": 24 }], 26: [function (e, t, n) {
	      var i = e("./$.defined");t.exports = function (e) {
	        return Object(i(e));
	      };
	    }, { "./$.defined": 13 }], 27: [function (e, t, n) {
	      var i = 0,
	          r = Math.random();t.exports = function (e) {
	        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + r).toString(36));
	      };
	    }, {}], 28: [function (e, t, n) {
	      var i = e("./$.shared")("wks"),
	          r = e("./$.uid"),
	          o = e("./$.global").Symbol;t.exports = function (e) {
	        return i[e] || (i[e] = o && o[e] || (o || r)("Symbol." + e));
	      };
	    }, { "./$.global": 16, "./$.shared": 23, "./$.uid": 27 }], 29: [function (e, t, n) {
	      "use strict";
	      var i = e("./$.export"),
	          r = e("./$.array-methods")(5),
	          o = "find",
	          s = !0;o in [] && Array(1)[o](function () {
	        s = !1;
	      }), i(i.P + i.F * s, "Array", { find: function find(e) {
	          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
	        } }), e("./$.add-to-unscopables")(o);
	    }, { "./$.add-to-unscopables": 7, "./$.array-methods": 8, "./$.export": 14 }], 30: [function (e, t, n) {
	      var i = e("./$.export");i(i.S + i.F, "Object", { assign: e("./$.object-assign") });
	    }, { "./$.export": 14, "./$.object-assign": 21 }], 31: [function (e, t, n) {
	      var i = e("./$.export"),
	          r = e("./$.replacer")(/[\\^$*+?.()|[\]{}]/g, "\\$&");i(i.S, "RegExp", { escape: function escape(e) {
	          return r(e);
	        } });
	    }, { "./$.export": 14, "./$.replacer": 22 }], 32: [function (e, t, n) {
	      function i() {
	        return new Date().getTime();
	      }t.exports = Date.now || i;
	    }, {}], 33: [function (e, t, n) {
	      var i = e("date-now");t.exports = function (e, t, n) {
	        function r() {
	          var l = i() - u;t > l && l > 0 ? o = setTimeout(r, t - l) : (o = null, n || (c = e.apply(a, s), o || (a = s = null)));
	        }var o, s, a, u, c;return null == t && (t = 100), function () {
	          a = this, s = arguments, u = i();var l = n && !o;return o || (o = setTimeout(r, t)), l && (c = e.apply(a, s), a = s = null), c;
	        };
	      };
	    }, { "date-now": 32 }], 34: [function (e, t, n) {
	      !function (e) {
	        e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector, e.closest = e.closest || function (e) {
	          for (var t = this; t && !t.matches(e);) {
	            t = t.parentElement;
	          }return t;
	        };
	      }(Element.prototype);
	    }, {}], 35: [function (e, t, n) {
	      var i = e("./lib/parser"),
	          r = e("./lib/resource"),
	          o = !1;t.exports = { parse: function parse(e) {
	          return new i().parse(e, o);
	        }, enableValidation: function enableValidation(e) {
	          o = null != e ? e : !0;
	        }, disableValidation: function disableValidation() {
	          o = !1;
	        }, Resource: r };
	    }, { "./lib/parser": 37, "./lib/resource": 38 }], 36: [function (e, t, n) {
	      "use strict";
	      function i() {
	        arguments.length >= 1 ? this._array = arguments[0] : this._array = [];
	      }i.prototype.array = function () {
	        return this._array;
	      }, i.prototype.isEmpty = function (e) {
	        return 0 === this._array.length;
	      }, i.prototype.push = function (e) {
	        var t = this._array.slice(0);return t.push(e), new i(t);
	      }, i.prototype.pop = function () {
	        var e = this._array.slice(0, this._array.length - 1);return new i(e);
	      }, i.prototype.peek = function () {
	        if (this.isEmpty()) throw new Error("can't peek on empty stack");return this._array[this._array.length - 1];
	      }, t.exports = i;
	    }, {}], 37: [function (e, t, n) {
	      "use strict";
	      function i() {}function r(e, t, n) {
	        if (null == e) return e;var i = o(e._links, t, n.push("_links")),
	            r = s(i),
	            c = a(e._embedded, t, n.push("_embedded")),
	            l = new b(i, r, c, t);return u(e, l), l._original = e, l;
	      }function o(e, t, n) {
	        return e = c(e, f, t, n), null != e && null != e.self || y("Resource does not have a self link", t, n), e;
	      }function s(e) {
	        return e ? e.curies : [];
	      }function a(e, t, n) {
	        var i = c(e, h, t, n);return null == i ? i : (Object.keys(i).forEach(function (e) {
	          i[e] = i[e].map(function (i) {
	            var o = null != t ? [] : null,
	                s = r(i, o, n.push(e));return s._original = i, s;
	          });
	        }), i);
	      }function u(e, t) {
	        Object.keys(e).forEach(function (n) {
	          "_links" !== n && "_embedded" !== n && (t[n] = e[n]);
	        });
	      }function c(e, t, n, i) {
	        if (null == e) return e;var r = {};return Object.keys(e).forEach(function (o) {
	          r[o] = l(o, e[o], t, n, i);
	        }), r;
	      }function l(e, t, n, i, r) {
	        return d(t) ? t.map(function (t) {
	          return n(e, t, i, r);
	        }) : [n(e, t, i, r)];
	      }function f(e, t, n, i) {
	        if (!p(t)) throw new Error("Link object is not an actual object: " + t + " [" + (typeof t === "undefined" ? "undefined" : _typeof(t)) + "]");var r = m(t);return Object.keys(x).forEach(function (t) {
	          null == r[t] && (x[t].required && y("Link misses required property " + t + ".", n, i.push(e)), null != x[t].defaultValue && (r[t] = x[t].defaultValue));
	        }), r.deprecation && v("Warning: Link " + g(i.push(e)) + " is deprecated, see " + r.deprecation), r.templated !== !0 && r.templated !== !1 && (r.templated = !1), n ? (r.href && r.href.indexOf("{") >= 0 && !r.templated && y('Link seems to be an URI template but its "templated" property is not set to true.', n, i.push(e)), r) : r;
	      }function d(e) {
	        return "[object Array]" === Object.prototype.toString.call(e);
	      }function p(e) {
	        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	      }function h(e, t) {
	        return t;
	      }function y(e, t, n) {
	        t && t.push({ path: g(n), message: e });
	      }function v(e) {
	        "undefined" != typeof console && "function" == typeof console.log && console.log(e);
	      }function m(e) {
	        var t = {};return Object.keys(e).forEach(function (n) {
	          t[n] = e[n];
	        }), t;
	      }function g(e) {
	        for (var t = "$.", n = 0; n < e.array().length; n++) {
	          t += e.array()[n] + ".";
	        }return t = t.substring(0, t.length - 1);
	      }var b = e("./resource"),
	          _ = e("./immutable_stack"),
	          x = { href: { required: !0, defaultValue: null }, templated: { required: !1, defaultValue: !1 }, type: { required: !1, defaultValue: null }, deprecation: { required: !1, defaultValue: null }, name: { required: !1, defaultValue: null }, profile: { required: !1, defaultValue: null }, title: { required: !1, defaultValue: null }, hreflang: { required: !1, defaultValue: null } };i.prototype.parse = function (e, t) {
	        var n = t ? [] : null;return r(e, n, new _());
	      }, t.exports = i;
	    }, { "./immutable_stack": 36, "./resource": 38 }], 38: [function (e, t, n) {
	      "use strict";
	      function i(e, t, n, i) {
	        this._links = e || {}, this._initCuries(t), this._embedded = n || {}, this._validation = i || [];
	      }function r(e, t) {
	        return null != e ? e[t] : null;
	      }function o(e, t, n) {
	        n = n || 0;var i = r(e, t);return null != i && i.length >= 1 ? i[n] : null;
	      }i.prototype._initCuries = function (e) {
	        if (this._curiesMap = {}, e) {
	          this._curies = e;for (var t = 0; t < this._curies.length; t++) {
	            var n = this._curies[t];this._curiesMap[n.name] = n;
	          }
	        } else this._curies = [];this._preResolveCuries();
	      }, i.prototype._preResolveCuries = function () {
	        this._resolvedCuriesMap = {};for (var e = 0; e < this._curies.length; e++) {
	          var t = this._curies[e];if (t.name) for (var n in this._links) {
	            "curies" !== n && this._preResolveCurie(t, n);
	          }
	        }
	      }, i.prototype._preResolveCurie = function (e, t) {
	        var n = (this._links[t], t.split(/:(.+)/)),
	            i = n[0];if (e.name === i) if (e.templated && n.length >= 1) {
	          var r = e.href.replace(/(.*){(.*)}(.*)/, "$1" + n[1] + "$3");this._resolvedCuriesMap[r] = t;
	        } else this._resolvedCuriesMap[e.href] = t;
	      }, i.prototype.allLinkArrays = function () {
	        return this._links;
	      }, i.prototype.linkArray = function (e) {
	        return r(this._links, e);
	      }, i.prototype.link = function (e, t) {
	        return o(this._links, e, t);
	      }, i.prototype.hasCuries = function (e) {
	        return this._curies.length > 0;
	      }, i.prototype.curieArray = function (e) {
	        return this._curies;
	      }, i.prototype.curie = function (e) {
	        return this._curiesMap[e];
	      }, i.prototype.reverseResolveCurie = function (e) {
	        return this._resolvedCuriesMap[e];
	      }, i.prototype.allEmbeddedResourceArrays = function () {
	        return this._embedded;
	      }, i.prototype.embeddedResourceArray = function (e) {
	        return r(this._embedded, e);
	      }, i.prototype.embeddedResource = function (e, t) {
	        return o(this._embedded, e, t);
	      }, i.prototype.original = function () {
	        return this._original;
	      }, i.prototype.validationIssues = function () {
	        return this._validation;
	      }, i.prototype.allLinks = i.prototype.allLinkArrays, i.prototype.allEmbeddedArrays = i.prototype.allEmbeddedResources = i.prototype.allEmbeddedResourceArrays, i.prototype.embeddedArray = i.prototype.embeddedResourceArray, i.prototype.embedded = i.prototype.embeddedResource, i.prototype.validation = i.prototype.validationIssues, t.exports = i;
	    }, {}], 39: [function (e, t, n) {
	      t.exports = function (e) {
	        var t = {},
	            n = [];e = e || this, e.on = function (e, n, i) {
	          (t[e] = t[e] || []).push([n, i]);
	        }, e.off = function (e, i) {
	          e || (t = {});for (var r = t[e] || n, o = r.length = i ? r.length : 0; o--;) {
	            i == r[o][0] && r.splice(o, 1);
	          }
	        }, e.emit = function (e) {
	          for (var i, r = t[e] || n, o = 0; i = r[o++];) {
	            i[0].apply(i[1], n.slice.call(arguments, 1));
	          }
	        };
	      };
	    }, {}] }, {}, [1])(1);
	});
	//# sourceMappingURL=teleport-autocomplete.min.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/resolve-url-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./teleport-autocomplete.min.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/resolve-url-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!./teleport-autocomplete.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*! teleport-autocomplete - v0.3.1 | https://github.com/teleport/autocomplete#readme | MIT */\n\n.tp-ac__input,\n.tp-ac__list {\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0,0,0,.35);\n}\n\n.tp-autocomplete {\n  position: relative;\n  max-width: 25em;\n}\n\n.tp-ac__input {\n  padding: .25em;\n  border: 1px solid transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  font-size: 1.25em;\n  font-weight: 700;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n}\n\n.tp-ac__input::-webkit-input-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input::-moz-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input:-ms-input-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input::placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input:focus {\n  outline: 0;\n}\n\n.tp-ac__input::-ms-clear {\n  display: none;\n}\n\n.spinner .tp-ac__input {\n  padding-right: 1.5em;\n  margin-right: -1.5em;\n}\n\n.tp-ac__list {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  padding-left: 0;\n  list-style-type: none;\n  color: #979797;\n  background-color: #fff;\n  font-size: .875em;\n}\n\n.tp-ac__item {\n  overflow: hidden;\n  padding: .35714em .71429em;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.tp-ac__item.is-active,\n.tp-ac__item:hover {\n  background-color: #ddd;\n}\n\n.tp-ac__item.no-results,\n.tp-ac__item.no-results:hover {\n  cursor: default;\n  background-color: #fff;\n}\n\n.tp-ac__item span {\n  color: #4a4a4a;\n  font-weight: 700;\n}\n\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner:before {\n  position: absolute;\n  top: 50%;\n  right: .5em;\n  width: 1em;\n  height: 1em;\n  margin-top: -.625em;\n  margin-left: -.625em;\n  content: '';\n  animation: spinner 1s linear infinite;\n  border: 2px solid rgba(0,0,0,.3);\n  border-top-color: rgba(0,0,0,.6);\n  border-radius: 50%;\n}", ""]);

	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventMixin = __webpack_require__(24);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	var _itemCity = __webpack_require__(33);

	var _itemCity2 = _interopRequireDefault(_itemCity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SELECTORS = {
	    closeButton: "[data-city-viewer-item-close]",
	    viewerItem: "[data-city-viewer-item]",
	    viewerInner: "[data-city-viewer-inner]",
	    activeClass: "active"
	};

	var CityViewer = function () {
	    function CityViewer(elem) {
	        _classCallCheck(this, CityViewer);

	        this._elem = elem;

	        elem.addEventListener("click", this._manager.bind(this));
	    }

	    _createClass(CityViewer, [{
	        key: "getItemHeight",
	        value: function getItemHeight() {
	            return this._elem.querySelector(".city-viewer__item").clientHeight;
	        }
	    }, {
	        key: "getAllItemsHeight",
	        value: function getAllItemsHeight() {
	            var itemsLingth = this.getItemsLength();
	            var itemHeight = this.getItemHeight();
	            var itemMarginBottom = this.getItemMarginBottom();
	            var result = 0;

	            for (var i = 0; i < itemsLingth - 1; i++) {
	                result += itemHeight + itemMarginBottom;
	            }

	            result += itemHeight;

	            return result;
	        }
	    }, {
	        key: "getViewerHeight",
	        value: function getViewerHeight() {
	            return this._elem.clientHeight;
	        }
	    }, {
	        key: "getItemMarginBottom",
	        value: function getItemMarginBottom() {
	            return parseInt(getComputedStyle(this._elem.querySelector(".city-viewer__item")).marginBottom);
	        }
	    }, {
	        key: "getItemsLength",
	        value: function getItemsLength() {
	            return this._elem.querySelectorAll(".city-viewer__item").length;
	        }
	    }, {
	        key: "isScroll",
	        value: function isScroll() {
	            return this.getAllItemsHeight() > this.getViewerHeight();
	        }
	    }, {
	        key: "addCity",
	        value: function addCity(cityData) {
	            var elem = (0, _itemCity2.default)(cityData);
	            var div = document.createElement("div");

	            div.innerHTML = elem;

	            var newElem = div.firstElementChild;
	            var parent = this._elem.querySelector(SELECTORS.viewerInner);

	            parent.insertBefore(newElem, parent.firstElementChild);
	            this._setActiveClass(newElem);
	            this.trigger(this.constructor.EVENTS.onAddCity, this.isScroll());
	        }
	    }, {
	        key: "_manager",
	        value: function _manager(event) {
	            var target = event.target;

	            if (target.closest(SELECTORS.closeButton)) {
	                event.preventDefault();

	                var close = target.closest(SELECTORS.closeButton);

	                this._deleteCity(close);
	                return;
	            }

	            if (target.closest(SELECTORS.viewerItem)) {
	                var item = target.closest(SELECTORS.viewerItem);

	                this._selectCity(item);
	                return;
	            }
	        }
	    }, {
	        key: "_selectCity",
	        value: function _selectCity(item) {
	            var geoId = item.getAttribute("data-geoId");

	            this._setActiveClass(item);
	            this.trigger(this.constructor.EVENTS.onSelectedCity, parseInt(geoId));
	        }
	    }, {
	        key: "_deleteCity",
	        value: function _deleteCity(elemClose) {
	            var elem = elemClose.closest(SELECTORS.viewerItem);
	            var geoId = elem.getAttribute("data-geoId");

	            elem.parentNode.removeChild(elem);

	            if (elem.classList.contains(SELECTORS.activeClass)) {
	                this._setNewActiveElement();
	            }

	            this._onDeleteCity(geoId);
	        }
	    }, {
	        key: "_setNewActiveElement",
	        value: function _setNewActiveElement() {
	            var _this = this;

	            var newActiveElem = this._elem.querySelector(SELECTORS.viewerItem);

	            if (!newActiveElem) {
	                this.trigger(this.constructor.EVENTS.onDeletAllCities);
	                return;
	            }

	            this._selectCity(newActiveElem);

	            setTimeout(function () {
	                _this._setScrollTop();
	            }, 0);
	        }
	    }, {
	        key: "_setScrollTop",
	        value: function _setScrollTop() {
	            if (!document.body.classList.contains("isLandscape")) {
	                this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
	            } else {
	                if (document.documentElement.clientWidth >= 1024) {
	                    this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
	                } else {
	                    window.scrollTo(0, 0);
	                }
	            }
	        }
	    }, {
	        key: "_setActiveClass",
	        value: function _setActiveClass(elem) {
	            var cities = this._elem.querySelectorAll(SELECTORS.viewerItem);

	            Array.prototype.slice.call(cities).forEach(function (city) {
	                return city.classList.remove("active");
	            });
	            elem.classList.add("active");
	        }
	    }, {
	        key: "_onDeleteCity",
	        value: function _onDeleteCity(geoId) {
	            this.trigger(this.constructor.EVENTS.onDeleteCity, parseInt(geoId));
	            this.trigger(this.constructor.EVENTS.onDeleteCityGetDimention, this.isScroll());
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                "onSelectedCity": "onSelectedCity",
	                "onDeleteCity": "onDeleteCity",
	                "onDeletAllCities": "onDeletAllCities",
	                "onDeleteCityGetDimention": "onDeleteCityGetDimention",
	                "onAddCity": "onAddCity"
	            };
	        }
	    }]);

	    return CityViewer;
	}();

	for (var key in _eventMixin2.default) {
	    CityViewer.prototype[key] = _eventMixin2.default[key];
	}

	exports.default = CityViewer;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (geoId, name) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv" + (" class=\"city-viewer__item\""+pug.attr("data-geoId", geoId, true, true)+" data-city-viewer-item") + "\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";}.call(this,"geoId" in locals_for_with?locals_for_with.geoId:typeof geoId!=="undefined"?geoId:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"utf-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"initial-scale=1.0, width=device-width\"\u003E\n    \u003Cmeta name=\"description\" content=\"\"\u003E\n    \u003Cmeta name=\"keywords\" content=\"\"\u003E\n    \u003Cmeta name=\"author\" content=\"\"\u003E\n    \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:400,700\" type=\"text\u002Fcss\"\u003E\n    \u003Ctitle\u003Eweather app v0.0.1\n    \u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003C!-- wrapper--\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003C!-- maincontent--\u003E\n      \u003Cdiv class=\"maincontent\"\u003E\n        \u003C!-- menu--\u003E" + (null == (pug_interp = __webpack_require__(35).call(this, locals)) ? "" : pug_interp) + "\n        \u003C!-- END menu--\u003E\n        \u003C!-- content--\u003E" + (null == (pug_interp = __webpack_require__(38).call(this, locals)) ? "" : pug_interp) + "\n        \u003C!-- END content--\u003E\n      \u003C\u002Fdiv\u003E\n      \u003C!-- END maincontent--\u003E\n    \u003C\u002Fdiv\u003E\n    \u003C!-- END wrapper--\u003E\n    \u003Cdiv class=\"overflow\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"preloader\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"menu\" data-menu\u003E\n  \u003Cdiv class=\"menu__inner\"\u003E\u003Ca class=\"menu__close\" href=\"#\"\u003E\u003C\u002Fa\u003E\n    \u003Cdiv class=\"menu__search\"\u003E" + (null == (pug_interp = __webpack_require__(36).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"menu__city-viewer\"\u003E" + (null == (pug_interp = __webpack_require__(37).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"menu__tongue\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"menu__overflow\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"search\" data-search\u003E\n  \u003Cdiv class=\"search__inner\"\u003E\n    \u003Cinput class=\"search__input\" type=\"text\" placeholder=\"start type city's name\"\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"city-viewer\" data-city-viewer\u003E\n  \u003Cdiv class=\"city-viewer__inner\" data-city-viewer-inner\u003E\n    \u003Cdiv class=\"city-viewer__item active\" data-geoId=\"6167865\" data-city-viewer-item\u003EToronto, Canada\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"content\"\u003E\n  \u003Cdiv class=\"content__inner\"\u003E" + (null == (pug_interp = __webpack_require__(39).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(43).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"current-city\" data-current-city\u003E\n  \u003Cdiv class=\"current-city__inner\"\u003E" + (null == (pug_interp = __webpack_require__(40).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"current-city__overlay\" data-current-city-overlay\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"city\"\u003E\n  \u003Cdiv class=\"city__name\" data-city-name\u003EToronto, Canada\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__descr\"\u003E\n    \u003Cdiv class=\"city__descr-main\"\u003E\n      \u003Cdiv class=\"city__weather\" data-city-weather\u003ECloudly\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"city__temp celcius\" data-city-temp\u003E18\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city__descr-img-wrap\"\u003E\u003Cimg" + (" class=\"city__descr-img\""+pug.attr("src", __webpack_require__(41), true, true)+" data-city-img") + "\u003E\n      \u003Cdiv class=\"city__date\" data-city-data\u003E25 November\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__details\" data-details\u003E\n    \u003C!-- include .\u002F_details.pug--\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__hourly\" data-hourly\u003E\n    \u003C!-- include .\u002F_hourly.pug--\u003E\n  \u003C\u002Fdiv\u003E\u003Ca class=\"city__more\" href=\"#\" data-more-details\u003Emore details\u003C\u002Fa\u003E\u003Ca class=\"city__reload\" href=\"#\" data-reload-data\u003E\u003Cimg" + (" class=\"city__reload-img\""+pug.attr("src", __webpack_require__(42), true, true)) + "\u003E\u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m11d.svg";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/cloud-reload.svg";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(19);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"addition\" data-addition\u003E\n  \u003C!--ul.addition__list--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n  \u003C!--    li.addition__item--\u003E\n  \u003C!--        include .\u002F_next-day.pug--\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(47);

	__webpack_require__(48);

	__webpack_require__(49);

	__webpack_require__(50);

	__webpack_require__(46);

	__webpack_require__(51);

	__webpack_require__(52);

	__webpack_require__(53);

	__webpack_require__(54);

	__webpack_require__(55);

	__webpack_require__(56);

	__webpack_require__(57);

	__webpack_require__(41);

	__webpack_require__(58);

	__webpack_require__(59);

	__webpack_require__(60);

	__webpack_require__(45);

		__webpack_require__(61);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m50d.svg";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m03d.svg";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m01d.svg";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m01n.svg";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m02d.svg";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m02n.svg";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m03n.svg";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m04d.svg";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m04n.svg";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m09d.svg";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m09n.svg";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m10d.svg";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m10n.svg";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m11n.svg";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m13d.svg";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m13n.svg";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/m50n.svg";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzP2hhc2g9NGU0MDNmNjRiODc2MDkwNmI1ZjEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGU0MDNmNjRiODc2MDkwNmI1ZjEiLCJ3ZWJwYWNrOi8vLy4vbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL21haW4vX2luZGV4LnNjc3M/ZDY2MiIsIndlYnBhY2s6Ly8vLi9tYWluL19pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2ltZy9wcmVsb2FkZXIuZ2lmIiwid2VicGFjazovLy8uLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb250cm9sbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvY3VycmVudC1jaXR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9kZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9kZXRhaWxzL3RlbXBsYXRlLnB1ZyIsIndlYnBhY2s6Ly8vLi4vfi9wdWcvfi9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL21vZHVsZXMvdmlldy9ob3VybHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9ycy9oYW1tZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2hvdXJseS90ZW1wbGF0ZS5wdWciLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vZXZlbnRNaXhpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvbmV4LWRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L25leC1kYXlzL3RlbXBsYXRlLnB1ZyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzPzY3ZDkiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvY2l0eS12aWV3ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2NpdHktdmlld2VyL2l0ZW0tY2l0eS5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fc2VhcmNoLnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LXZpZXdlci5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY29udGVudC5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY3VycmVudC1jaXR5LnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LnB1ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTExZC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL2Nsb3VkLXJlbG9hZC5zdmciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fYWRkaXRpb24ucHVnIiwid2VicGFjazovLy8uL2ltZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbWcvbTUwZC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wM2Quc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTAxbi5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wMmQuc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMDJuLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTAzbi5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wNGQuc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMDRuLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTA5ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20wOW4uc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMTBkLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTEwbi5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL20xMW4uc3ZnIiwid2VicGFjazovLy8uL2ltZy9tMTNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbTEzbi5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL201MG4uc3ZnIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZTQwM2Y2NGI4NzYwOTA2YjVmMSIsIid1c2Ugc3RyaWN0JztcblxuLypcbnN0eWxlc1xuICovXG5pbXBvcnQgJy4vX2luZGV4LnNjc3MnO1xuXG4vKlxuIGltYWdlc1xuICovXG5pbXBvcnQgJy4vLi4vaW1nL2luZGV4JztcblxuLypcbiBtYXJrdXBcbiAqL1xuaWYgKE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmVxdWlyZSgnLi9pbmRleC5wdWcnKTtcbn1cblxuLypcbiBsb2dpY1xuKi9cblxuLy8gY29uc3QgY2l0aWVzID0ge1xuLy8gICAgIDE0ODk0MjU6IHtuYW1lOiBcInRvbXNrXCIsIGlkOiAxNDg5NDI1Mn0sXG4vLyAgICAgNjE2Nzg2NToge25hbWU6IFwidG9yb250b1wiLCBpZDogNjE2Nzg2NX1cbi8vIH07XG5cbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuLy4uL21vZHVsZXMvY29udHJvbGxlclwiO1xuXG5leHBvcnQgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbi8vIGNvbnRyb2xsZXIuX21vZGVsLmdldERhdGEoY2l0aWVzW1wiMTQ4OTQyNVwiXSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4vaW5kZXguanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL19pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vX2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL19pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vX2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcblxcbi8qISBub3JtYWxpemUuY3NzIHYzLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXFxuICogICAgd2l0aG91dCBkaXNhYmxpbmcgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXFxuICogYW5kIEZpcmVmb3guXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG5wcm9ncmVzcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSBvZiBmb2N1c2VkIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgYWxzbyBpbiBhblxcbiAqIGFjdGl2ZS9ob3ZlciBzdGF0ZS5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuZGZuIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXFxuICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXFxuICpcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICovXFxuXFxub3B0Z3JvdXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1hYyB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5tYWMgaW5wdXQsXFxuLm1hYyB0ZXh0YXJlYSxcXG4ubWFjIGJ1dHRvbiB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyxcXG5hOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi5jaXR5X19tb3JlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmFkZGl0aW9uX19saXN0OmJlZm9yZSxcXG4uZGV0YWlsc19faXRlbTpiZWZvcmUsXFxuLmNpdHlfX2Rlc2NyOmJlZm9yZSxcXG4uaG91cmx5X19zbGlkZXI6YmVmb3JlLFxcbi5hZGRpdGlvbl9fbGlzdDphZnRlcixcXG4uZGV0YWlsc19faXRlbTphZnRlcixcXG4uY2l0eV9fZGVzY3I6YWZ0ZXIsXFxuLmhvdXJseV9fc2xpZGVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbi5hZGRpdGlvbl9fbGlzdDphZnRlcixcXG4uZGV0YWlsc19faXRlbTphZnRlcixcXG4uY2l0eV9fZGVzY3I6YWZ0ZXIsXFxuLmhvdXJseV9fc2xpZGVyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4uZGFzaGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmRhc2hlZDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5kYXNoZWQgc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYXNoZWQgc3BhbjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIEdhcnVkYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiA2MjBweDtcXG4gIH1cXG59XFxuXFxuaHRtbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53cmFwcGVyLFxcbi5tYWluY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbi5pc0xhbmRzY2FwZSBodG1sLFxcbi5pc0xhbmRzY2FwZSBib2R5LFxcbi5pc0xhbmRzY2FwZSAud3JhcHBlcixcXG4uaXNMYW5kc2NhcGUgLm1haW5jb250ZW50LFxcbi5pc0xhbmRzY2FwZSAuY29udGVudCxcXG4uaXNMYW5kc2NhcGUgLmN1cnJlbnQtY2l0eSxcXG4uaXNMYW5kc2NhcGUgLmFkZGl0aW9uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IGluaXRpYWw7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5pc0xhbmRzY2FwZSBodG1sLFxcbiAgLmlzTGFuZHNjYXBlIGJvZHksXFxuICAuaXNMYW5kc2NhcGUgLm1haW5jb250ZW50LFxcbiAgLmlzTGFuZHNjYXBlIC53cmFwcGVyLFxcbiAgLmlzTGFuZHNjYXBlIC5jb250ZW50LFxcbiAgLmlzTGFuZHNjYXBlIC5tZW51IHtcXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLmFkZGl0aW9uIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmFkZGl0aW9uIHtcXG4gICAgaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLmFkZGl0aW9uX19saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuM3M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5hZGRpdGlvbl9fbGlzdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuYWRkaXRpb25fX2xpc3Qge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmFkZGl0aW9uX19pdGVtIHtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmFkZGl0aW9uX19pdGVtOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmFkZGl0aW9uX19pdGVtIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGhlaWdodDogMzMuMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuYWRkaXRpb25fX2l0ZW06bnRoLWNoaWxkKDJuKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpudGgtY2hpbGQoMm4gLSAxKSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5hZGRpdGlvbl9faXRlbSB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgfVxcblxcbiAgLmFkZGl0aW9uX19pdGVtOm50aC1jaGlsZCgybiAtIDEpLFxcbiAgLmFkZGl0aW9uX19pdGVtOm50aC1jaGlsZCgybikge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gIH1cXG59XFxuXFxuLmNpdHktdmlld2VyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5LXZpZXdlciB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faW5uZXIge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0ge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAgMTJweCAjNjY2O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZTpiZWZvcmUsXFxuLmNpdHktdmlld2VyX19pdGVtLWNsb3NlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG59XFxuXFxuLmNpdHktdmlld2VyX19pdGVtLWNsb3NlOmJlZm9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZTphZnRlciB7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnQgLmNvbnRlbnRfX2lubmVyIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcXG4gIH1cXG59XFxuXFxuLmN1cnJlbnQtY2l0eSB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzO1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LmluaXQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNtYWxsIHtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbi5jdXJyZW50LWNpdHkuc21hbGwgLmNpdHlfX2Rlc2NyLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxufVxcblxcbi5jdXJyZW50LWNpdHkuc21hbGwgLmNpdHlfX2RhdGUge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNob3ctbW9yZS1kZXRhaWxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEyO1xcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jdXJyZW50LWNpdHkuc2hvd24gLmN1cnJlbnQtY2l0eV9fb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jdXJyZW50LWNpdHkge1xcbiAgICBoZWlnaHQ6IDU1JSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4uY3VycmVudC1jaXR5X19pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2M7XFxufVxcblxcbi5jdXJyZW50LWNpdHlfX292ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cztcXG59XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogLTMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGxlZnQgLjNzO1xcbn1cXG5cXG4ubWVudS5vcGVuIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5tZW51Lm9wZW4gLm1lbnVfX292ZXJmbG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubWVudSB7XFxuICAgIHdpZHRoOiA0NDBweDtcXG4gICAgbGVmdDogLTQ0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG59XFxuXFxuLm1lbnVfX2lubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDExO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnVfX2lubmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4ubWVudV9fY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBib3gtc2hhZG93OiAwIDAgIDEycHggIzY2NjtcXG59XFxuXFxuLm1lbnVfX2Nsb3NlOmJlZm9yZSxcXG4ubWVudV9fY2xvc2U6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4ubWVudV9fY2xvc2U6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLm1lbnVfX2Nsb3NlOmFmdGVyIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZW51X19jbG9zZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5tZW51X19vdmVyZmxvdyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZW51X19vdmVyZmxvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuZGl2Lm1lbnVfX3NlYXJjaCB7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmctdG9wOiA2NXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBkaXYubWVudV9fc2VhcmNoIHtcXG4gICAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLm1lbnVfX2NpdHktdmlld2VyIHtcXG4gIGhlaWdodDogODAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZW51X19jaXR5LXZpZXdlciB7XFxuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi5tZW51X190b25ndWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDlweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgcmlnaHQ6IC05cHg7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudV9fdG9uZ3VlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaCB7XFxuICBoZWlnaHQ6IDMwJTtcXG59XFxuXFxuLnNlYXJjaCAudHAtYWNfX2l0ZW0ge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnNlYXJjaF9faW5uZXIge1xcbiAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWFyY2hfX2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLm92ZXJmbG93IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi5vdmVyZmxvdy5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ucHJlbG9hZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLy4uL2ltZy9wcmVsb2FkZXIuZ2lmXCIpICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5wcmVsb2FkZXIuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgfVxcbn1cXG5cXG4uZGV0YWlscy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHMub3BlbiB7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcXG59XFxuXFxuLmRldGFpbHMub3BlbiAuZGV0YWlsc19faXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy5vcGVuIC5kZXRhaWxzX19pdGVtLmRhdGFpbHMtLW1vcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kZXRhaWxzLm9wZW4gLmRldGFpbHNfX2l0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICB9XFxufVxcblxcbi5kZXRhaWxzX19pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHNfX2l0ZW0uZGF0YWlscy0tbW9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZGV0YWlsc19faXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxufVxcblxcbi5kZXRhaWxzX19pdGVtLXRleHQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZGV0YWlsc19fbnVtIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmRldGFpbHNfX2hpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2l0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5IHtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1NXB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fbmFtZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX25hbWUge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDJweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNpdHlfX25hbWUge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX2Rlc2NyIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX2Rlc2NyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNpdHlfX2Rlc2NyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX2RldGFpbHMge1xcbiAgbWF4LXdpZHRoOiA2NSU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19kZXRhaWxzIHtcXG4gICAgbWF4LXdpZHRoOiA2NSU7XFxuICB9XFxufVxcblxcbi5jaXR5X19kZXNjci1tYWluIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uY2l0eV9fd2VhdGhlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X193ZWF0aGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNpdHlfX3dlYXRoZXIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fdGVtcCB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDJweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX3RlbXAge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA4MnB4O1xcbiAgfVxcblxcbiAgLmNpdHlfX3RlbXAuY2VsY2l1czphZnRlciB7XFxuICAgIGZvbnQtc2l6ZTogODBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5X190ZW1wIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjJweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX2Rlc2NyLWltZy13cmFwIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX2Rlc2NyLWltZy13cmFwIHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxufVxcblxcbi5jaXR5X19kZXNjci1pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHlfX2Rlc2NyLWltZyB7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNpdHlfX2Rlc2NyLWltZyB7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX2RhdGUge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICB9XFxufVxcblxcbi5jaXR5X19tb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fbW9yZSB7XFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fbW9yZSB7XFxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fcmVsb2FkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDIwcHg7XFxuICBib3R0b206IDVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fcmVsb2FkIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGxlZnQ6IDM1cHg7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX3JlbG9hZC1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5ob3VybHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjFzO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uaG91cmx5OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA5NCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJveC1zaGFkb3c6IDAgLTRweCAxNHB4IDFweCAjNzc3O1xcbn1cXG5cXG4uaG91cmx5LnNob3duIHtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuLmhvdXJseS5zaG93bi1zbGlkZXIgLmhvdXJseV9faW5uZXIge1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uaG91cmx5LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaG91cmx5IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzhweDtcXG4gIH1cXG59XFxuXFxuLmhvdXJseV9faW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdG9wIDAuNDVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaG91cmx5X19pbm5lciB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4uaG91cmx5X19zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuXFxuLmhvdXJseV9fc2xpZGVyLnNsaWRlIHtcXG4gIGxlZnQ6IC0xMDAlO1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZSB7XFxuICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDEyLjUlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZTpmaXJzdC1jaGlsZCxcXG4uaG91cmx5X19zbGlkZTpudGgtY2hpbGQoNSkge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZS10aW1lIHtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4uaG91cmx5X19zbGlkZS10ZW1wLmNlbGNpdXM6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubmV4LWRheSB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm5leC1kYXkge1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgfVxcbn1cXG5cXG4ubmV4LWRheV9faW1nLXdyYXBwZXIge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm5leC1kYXlfX2ltZy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4ubmV4LWRheV9faW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm5leC1kYXlfX2Rlc2Mge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uZXgtZGF5X19kZXNjIHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm5leC1kYXlfX2Rlc2Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4ubmV4LWRheV9fZGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubmV4LWRheV9fZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICB9XFxufVxcblxcbi5uZXgtZGF5X193ZWF0aGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5leC1kYXlfX3RlbXAge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5uZXgtZGF5X190ZW1wIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi5uZXgtZGF5X190ZW1wLWRheSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2VsY2l1cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jZWxjaXVzOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMkRBXFxcIjtcXG4gIHRvcDogLTZweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2Nzcy1sb2FkZXIhLi4vfi9hdXRvcHJlZml4ZXItbG9hZGVyP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuLi9+L3Jlc29sdmUtdXJsLWxvYWRlciEuLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL21haW4vX2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wcmVsb2FkZXIuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvcHJlbG9hZGVyLmdpZlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGltcG9ydCB7bG9nfSBmcm9tICcuLy4uL3N0dWZmL2xvZ2dlcic7XHJcbi8vIGltcG9ydCBNb2RlbCBmcm9tICcuLy4uL21vZGVsJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi8uLi92aWV3JztcclxuXHJcblxyXG5jb25zdCBkYXRhRGF5cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWc6IFwiaW1nL20wM2Quc3ZnXCIsXHJcbiAgICAgICAgZGF0YTogXCIxMiBOb3ZcIixcclxuICAgICAgICBtYWluOiBcIkNsb3VkbHlcIixcclxuICAgICAgICB0ZW1wOiB7XHJcbiAgICAgICAgICAgIGRheTogMjgsXHJcbiAgICAgICAgICAgIG5pZ2h0OiA1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6IFwiaW1nL20wNGQuc3ZnXCIsXHJcbiAgICAgICAgZGF0YTogXCIxMiBOb3ZcIixcclxuICAgICAgICBtYWluOiBcIkNsb3VkbHlcIixcclxuICAgICAgICB0ZW1wOiB7XHJcbiAgICAgICAgICAgIGRheTogMTgsXHJcbiAgICAgICAgICAgIG5pZ2h0OiA1XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6IFwiaW1nL20wOWQuc3ZnXCIsXHJcbiAgICAgICAgZGF0YTogXCIxMiBOb3ZcIixcclxuICAgICAgICBtYWluOiBcIkNsb3VkbHlcIixcclxuICAgICAgICB0ZW1wOiB7XHJcbiAgICAgICAgICAgIGRheTogMTgsXHJcbiAgICAgICAgICAgIG5pZ2h0OiAxNVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nOiBcImltZy9tMTBkLnN2Z1wiLFxyXG4gICAgICAgIGRhdGE6IFwiMTIgTm92XCIsXHJcbiAgICAgICAgbWFpbjogXCJDbG91ZGx5XCIsXHJcbiAgICAgICAgdGVtcDoge1xyXG4gICAgICAgICAgICBkYXk6IDE4LFxyXG4gICAgICAgICAgICBuaWdodDogNVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nOiBcImltZy9tMTNkLnN2Z1wiLFxyXG4gICAgICAgIGRhdGE6IFwiMTIgTm92XCIsXHJcbiAgICAgICAgbWFpbjogXCJDbG91ZGx5XCIsXHJcbiAgICAgICAgdGVtcDoge1xyXG4gICAgICAgICAgICBkYXk6IDE4LFxyXG4gICAgICAgICAgICBuaWdodDogNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXTtcclxuY29uc3QgZGF0YURldGFpbHMgPSBbXHJcbiAgICBbXCJQcmVzc3VyZVwiLCA5MiwgXCJ1bml0XCJdLFxyXG4gICAgW1wiSHVtaWRpdHlcIiwgNTUsIFwidW5pdFwiXSxcclxuICAgIFtcIldpbmRcIiwgNiwgXCJ1bml0XCJdLFxyXG4gICAgW1wiQ2xvdWRzXCIsIFwiQ2xvdWRpbmVzc1wiXSxcclxuICAgIFtcIlJhaW5cIiwgXCJub25lXCJdXHJcbl07XHJcbmNvbnN0IGRhdGFIb3VybHkgPSBbXHJcbiAgICB7dGltZTogXCIxMTowMFwiLCB0ZW1wOiAyMn0sXHJcbiAgICB7dGltZTogXCIxMjowMFwiLCB0ZW1wOiAyMn0sXHJcbiAgICB7dGltZTogXCIxMzowMFwiLCB0ZW1wOiAyMn0sXHJcbiAgICB7dGltZTogXCIxNDowMFwiLCB0ZW1wOiAyMn0sXHJcbiAgICB7dGltZTogXCIxNTowMFwiLCB0ZW1wOiAyMn0sXHJcbiAgICB7dGltZTogXCIxNjowMFwiLCB0ZW1wOiAyMn1cclxuXTtcclxuY29uc3QgZGF0YU1haW4gPSB7XHJcbiAgICBuYW1lOiBcIkJvc3RvbiwgVVNBXCIsXHJcbiAgICB3ZWF0aGVyOiBcIlN1bm55XCIsXHJcbiAgICB0ZW1wOiAxOCxcclxuICAgIGRhdGE6IFwiNSBEZWNlbWJlclwiLFxyXG4gICAgaW1nOiBcIi9pbWcvbTAxZC5zdmdcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLl9tb2RlbCA9IG5ldyBNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBuZXcgVmlldygpO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3Lm5leERheXMucmVuZGVyKGRhdGFEYXlzKTtcclxuICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmRldGFpbHMucmVuZGVyKGRhdGFEZXRhaWxzLCB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmdldEZyZWVTcGFjZUZyb0RldGFpbHMoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5fdmlldy5jdXJyZW50Q2l0eS5yZW5kZXIoZGF0YU1haW4pO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3Lm9uKFZpZXcuRVZFTlRTLnJlc2l6ZVdpbmRvdywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmRldGFpbHMucmVuZGVyKGRhdGFEZXRhaWxzLCB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmdldEZyZWVTcGFjZUZyb0RldGFpbHMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy5jdXJyZW50Q2l0eS5vbihWaWV3LkVWRU5UUy5DdXJyZW50Q2l0eS5vblNob3dNb3JlRGV0YWlscywgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmN1cnJlbnRDaXR5LmhvdXJseS5yZW5kZXIodGhpcy5fZ2V0RGF0YUZvckhvdXJseVZpZXcoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuY3VycmVudENpdHkub24oVmlldy5FVkVOVFMuQ3VycmVudENpdHkub25IaWRlTW9yZURldGFpbHMsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdmlldy5jdXJyZW50Q2l0eS5ob3VybHkuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnNlYXJjaC5vbihWaWV3LkVWRU5UUy5TZWFyY2gub25HZXRDaXR5LCBmdW5jdGlvbiAoY2l0eURhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2l0eURhdGEpO1xyXG4gICAgICAgICAgICBhbGVydChgJHtjaXR5RGF0YS5uYW1lfWApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LmNpdHlWaWV3ZXIub24oVmlldy5FVkVOVFMuQ2l0eVZpZXdlci5vblNlbGVjdGVkQ2l0eSwgZnVuY3Rpb24gKGdlb0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdlb0lkKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJzZWxlY3QgXCIgKyBnZW9JZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5vbihWaWV3LkVWRU5UUy5DaXR5Vmlld2VyLm9uRGVsZXRlQ2l0eSwgZnVuY3Rpb24gKGdlb0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdlb0lkKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoXCJkZWxldGUgXCIgKyBnZW9JZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcuY2l0eVZpZXdlci5vbihWaWV3LkVWRU5UUy5DaXR5Vmlld2VyLm9uRGVsZXRBbGxDaXRpZXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLQvtGH0LjRgdGC0LjRgtGMINCy0YHRjiDRgtC10LzQv9C10YDQsNGC0YPRgNGDXCIpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChcImRlbGV0ZSBcIiArIGdlb0lkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy5jaXR5Vmlld2VyLmFkZENpdHkoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIk9tc2ssIFJ1c3NpYVwiLFxyXG4gICAgICAgICAgICBnZW9JZDogMTIzNDVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2dldERhdGFGb3JIb3VybHlWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiBkYXRhSG91cmx5O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy9jb250cm9sbGVyL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ3VycmVudENpdHkgZnJvbSBcIi4vY3VycmVudC1jaXR5XCI7XHJcbmltcG9ydCBOZXhEYXlzIGZyb20gXCIuL25leC1kYXlzXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9zZWFyY2hcIjtcclxuaW1wb3J0IENpdHlWaWV3ZXIgZnJvbSBcIi4vY2l0eS12aWV3ZXJcIjtcclxuaW1wb3J0ICcuLy4uLy4uL3ZlbmRvcnMvaGFtbWVyJztcclxuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSBcIi4vLi4vY29tbW9uL2V2ZW50TWl4aW5cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX21haW5FbGVtZW50ID0gbmV3IEhhbW1lcihkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICB0aGlzLl9tYWluRWxlbWVudC5nZXQoJ3N3aXBlJykuc2V0KHt0aHJlc2hvbGQ6IDAsIHZlbG9jaXR5Olx0MC4xfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5ID0gbmV3IEN1cnJlbnRDaXR5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jdXJyZW50LWNpdHldXCIpKTtcclxuICAgICAgICB0aGlzLm5leERheXMgPSBuZXcgTmV4RGF5cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYWRkaXRpb25dXCIpKTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWVudV1cIikpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VhcmNoXVwiKSk7XHJcbiAgICAgICAgdGhpcy5jaXR5Vmlld2VyID0gbmV3IENpdHlWaWV3ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNpdHktdmlld2VyXVwiKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2l0eVZpZXdlci5vbihDaXR5Vmlld2VyLkVWRU5UUy5vbkRlbGV0ZUNpdHlHZXREaW1lbnRpb24sIGlzU2Nyb2xsID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2V0T2Zmc2V0TWFyZ2luKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUucmVtb3ZlT2Zmc2V0TWFyZ2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaXR5Vmlld2VyLm9uKENpdHlWaWV3ZXIuRVZFTlRTLm9uQWRkQ2l0eSwgaXNTY3JvbGwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zZXRPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5yZW1vdmVPZmZzZXRNYXJnaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vblJlbG9hZERhdGFSZXF1ZXN0LCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwicmVsb2FkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vblNob3dNb3JlRGV0YWlscywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZGlzYWJsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vbkhpZGVNb3JlRGV0YWlscywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZW5hYmxlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENpdHkub24oQ3VycmVudENpdHkuRVZFTlRTLm9uQ2hhbmdlSGVpZ2h0QnlQYW4sIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXhEYXlzLnNldEhlaWdodChwYXJzZUludCh0aGlzLm5leERheXMuZ2V0SGVpZ2h0KCkpICsgdmFsdWUgKyBcInB4XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDaXR5Lm9uKEN1cnJlbnRDaXR5LkVWRU5UUy5vbkNoYW5nZUhlaWdodEFmdGVyQW5pbWF0aW9uUGFuVXAsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXhEYXlzLnNldEhlaWdodCh2YWx1ZSArIFwicHhcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENpdHkub24oQ3VycmVudENpdHkuRVZFTlRTLm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5Eb3duLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4RGF5cy5jbGVhckhlaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9hZGRMYW5kQ2xhc3MuYmluZCh0aGlzLCBkb2N1bWVudC5ib2R5KSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoVmlldy5FVkVOVFMucmVzaXplV2luZG93KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2l0eS5hZGRQYW5DbGFzcygpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDaXR5LnJlbW92ZVNtYWxsQ2xhc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5fZW5hYmxlRGlzYWJsZU1lbnUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDaXR5LmlzU21hbGxTaXplKCkgJiYgIXRoaXMuX2lzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4RGF5cy5zZXRIZWlnaHQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIHBhcnNlSW50KHRoaXMuY3VycmVudENpdHkuZ2V0SGVpZ2h0KCkpICsgXCJweFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4RGF5cy5jbGVhckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX21haW5FbGVtZW50Lm9uKFwic3dpcGVsZWZ0XCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN3aXBlXCIpXHJcbiAgICAgICAgICAgIGlmICghZXYudGFyZ2V0LmNsb3Nlc3QoXCIubWVudVN3aXBlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX21haW5FbGVtZW50Lm9uKFwic3dpcGVyaWdodFwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFldi50YXJnZXQuY2xvc2VzdChcIi5tZW51U3dpcGVcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tZW51LnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkTGFuZENsYXNzKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZURpc2FibGVNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2VuYWJsZURpc2FibGVNZW51KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nZXRTY3JlZW5XaWR0aCgpIDwgOTkyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5lbmFibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYWRkTGFuZENsYXNzKGVsZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5faXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJpc0xhbmRzY2FwZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpc0xhbmRzY2FwZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfZ2V0U2NyZWVuV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBfaXNMYW5kc2NhcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBFVkVOVFMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJyZXNpemVXaW5kb3dcIjogXCJyZXNpemVXaW5kb3dcIixcclxuICAgICAgICAgICAgQ3VycmVudENpdHk6IEN1cnJlbnRDaXR5LkVWRU5UUyxcclxuICAgICAgICAgICAgTmV4RGF5czogTmV4RGF5cy5FVkVOVFMsXHJcbiAgICAgICAgICAgIE1lbnU6IE1lbnUuRVZFTlRTLFxyXG4gICAgICAgICAgICBTZWFyY2g6IFNlYXJjaC5FVkVOVFMsXHJcbiAgICAgICAgICAgIENpdHlWaWV3ZXI6IENpdHlWaWV3ZXIuRVZFTlRTXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKHZhciBrZXkgaW4gZXZlbnRNaXhpbikge1xyXG4gICAgVmlldy5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IERldGFpbHMgZnJvbSBcIi4vLi4vZGV0YWlsc1wiO1xyXG5pbXBvcnQgSG91cmx5IGZyb20gXCIuLy4uL2hvdXJseVwiO1xyXG5pbXBvcnQgZXZlbnRNaXhpbiBmcm9tIFwiLi8uLi8uLi9jb21tb24vZXZlbnRNaXhpblwiO1xyXG5pbXBvcnQgXCIuLy4uLy4uLy4uL3ZlbmRvcnMvaGFtbWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50Q2l0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW07XHJcbiAgICAgICAgLy8g0YTQu9Cw0LMg0L3QsNC70LjRh9C40Y8g0LrQu9Cw0YHRgdCwIHNtYWxsINGDIGVsZW1cclxuICAgICAgICB0aGlzLl9pc1NtYWxsQ2xhc3MgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscygpO1xyXG4gICAgICAgIHRoaXMuaG91cmx5ID0gbmV3IEhvdXJseSgpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKS5hcHBlbmRDaGlsZCh0aGlzLmRldGFpbHMuZWxlbSk7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaG91cmx5XVwiKS5hcHBlbmRDaGlsZCh0aGlzLmhvdXJseS5lbGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2l0eUluaXRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9tYW5hZ2VyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgdGhpcy5fb25BbmltYXRpb25FbmQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UGFuRGlyZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYW5EaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5fY2l0eUluaXRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5faGFtbWVydGltZS5vbihcInBhbnVwXCIsIHRoaXMuX2hhbmRsZVBhblVwLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLl9oYW1tZXJ0aW1lLm9uKFwicGFuZG93blwiLCB0aGlzLl9oYW5kbGVQYW5Eb3duLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFBhbkNsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFuRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0xhbmRzY2FwZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMuX2VsZW0sIHtkb21FdmVudHM6IHRydWV9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hhbW1lcnRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbW1lcnRpbWUgPSBuZXcgSGFtbWVyKHRoaXMuX2VsZW0sIHtkb21FdmVudHM6IHRydWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9oYW1tZXJ0aW1lLmdldCgncGFuJykuc2V0KHtkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEZyZWVTcGFjZUZyb0RldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xyXG4gICAgICAgIGNvbnN0IG1vcmUgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb3JlLWRldGFpbHNdXCIpO1xyXG4gICAgICAgIHJldHVybiBtb3JlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGRldGFpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVQYW5VcChldmVudCkge1xyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudmVydGljYWxcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNpdHlIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGNpdHlIZWlnaHQpIDw9IDE1MCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VJbnQoY2l0eUhlaWdodCkgPCBwYXJzZUludCh0aGlzLl9jaXR5SW5pdEhlaWdodCkgLSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzbWFsbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5faXNTbWFsbENsYXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSBcIjE1MHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVSZWxvYWRCdXR0b24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoY2l0eUhlaWdodCkgLSBldmVudC5kaXN0YW5jZSArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25DaGFuZ2VIZWlnaHRCeVBhbiwgZXZlbnQuZGlzdGFuY2UpO1xyXG4gICAgICAgIC8vIHRoaXMuZGV0YWlscy5zZXRGb250U2l6ZShwYXJzZUludCh0aGlzLmRldGFpbHMuZ2V0Rm9udFNpemUoKSkgLSAocGFyc2VJbnQoY2l0eUhlaWdodCkgLyAyMDApICsgXCJweFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlUGFuRG93bihldmVudCkge1xyXG4gICAgICAgIGxldCBjaXR5SGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChwYXJzZUludChjaXR5SGVpZ2h0KSA+IDE1NSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbFwiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNTbWFsbENsYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChjaXR5SGVpZ2h0KSArIGV2ZW50LmRpc3RhbmNlICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5pdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWNpdHktaW1nXVwiKS5zcmMgPSBkYXRhLmltZztcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaXR5LWRhdGFdXCIpLmlubmVySFRNTCA9IGRhdGEuZGF0YTtcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaXR5LW5hbWVdXCIpLmlubmVySFRNTCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaXR5LXdlYXRoZXJdXCIpLmlubmVySFRNTCA9IGRhdGEud2VhdGhlcjtcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaXR5LXRlbXBdXCIpLmlubmVySFRNTCA9IGRhdGEudGVtcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNTbWFsbFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic21hbGxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBfbWFuYWdlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbW9yZS1kZXRhaWxzXVwiKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVNb3JlVmlldyh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtY3VycmVudC1jaXR5LW92ZXJsYXldXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZU1vcmVWaWV3KHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vcmUtZGV0YWlsc11cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtcmVsb2FkLWRhdGFdXCIpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vblJlbG9hZERhdGFSZXF1ZXN0LCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVSZWxvYWRCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcmVsb2FkLWRhdGFdXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBfc2hvd1JlbG9hZEJ1dHRvbigpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1yZWxvYWQtZGF0YV1cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZU1vcmVWaWV3KGVsZW0pIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctbW9yZS1kZXRhaWxzXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcInNob3ctbW9yZS1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWxcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic21hbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMuc2hvd01vcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5zaG93TW9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwibGVzcyBkZXRhaWxzXCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25TaG93TW9yZURldGFpbHMsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93blwiKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3duXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25IaWRlTW9yZURldGFpbHMsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic21hbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24gbWUoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9yZS1kZXRhaWxzXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBtZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldGFpbHMuaGlkZU1vcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoIXRoaXMuX2lzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwibW9yZSBkZXRhaWxzXCI7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaXNMYW5kc2NhcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGFuQ2xhc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwidmVydGljYWxcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKFwidmVydGljYWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNtYWxsQ2xhc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGFuZHNjYXBlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGxcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzU21hbGxDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gXCI1MCVcIjtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0uc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJzbWFsbFwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkFuaW1hdGlvbkVuZCgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzLmNsZWFyRm9udFNpemUoKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25BbmltYXRpb25FbmQsIFwiXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNMYW5kc2NhcGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvbiwgXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic21hbGxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkNoYW5nZUhlaWdodEFmdGVyQW5pbWF0aW9uUGFuVXAsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmhlaWdodCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1JlbG9hZEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5Eb3duKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBFVkVOVFMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJvbkNoYW5nZUhlaWdodEJ5UGFuXCI6IFwib25DaGFuZ2VIZWlnaHRCeVBhblwiLFxyXG4gICAgICAgICAgICBcIm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5VcFwiOiBcIm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5VcFwiLFxyXG4gICAgICAgICAgICBcIm9uQ2hhbmdlSGVpZ2h0QWZ0ZXJBbmltYXRpb25QYW5Eb3duXCI6IFwib25DaGFuZ2VIZWlnaHRBZnRlckFuaW1hdGlvblBhbkRvd25cIixcclxuICAgICAgICAgICAgXCJvbkFuaW1hdGlvbkVuZFwiOiBcIm9uQW5pbWF0aW9uRW5kXCIsXHJcbiAgICAgICAgICAgIFwib25TaG93TW9yZURldGFpbHNcIjogXCJvblNob3dNb3JlRGV0YWlsc1wiLFxyXG4gICAgICAgICAgICBcIm9uSGlkZU1vcmVEZXRhaWxzXCI6IFwib25IaWRlTW9yZURldGFpbHNcIixcclxuICAgICAgICAgICAgXCJvblJlbG9hZERhdGFSZXF1ZXN0XCI6IFwib25SZWxvYWREYXRhUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBIb3VybHk6IEhvdXJseS5FVkVOVFNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAodmFyIGtleSBpbiBldmVudE1peGluKSB7XHJcbiAgICBDdXJyZW50Q2l0eS5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvY3VycmVudC1jaXR5L2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5wdWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlscyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTmFtZSA9IFwiZGV0YWlsc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvbnRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW0pLmZvbnRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZvbnRTaXplKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5mb250U2l6ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGb250U2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmZvbnRTaXplID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1vcmUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKGRhdGEsIGZyZWVTcGFjZSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLl9nZXRJdGVtSW5MaXN0SGVpZ2h0KCk7XHJcbiAgICAgICAgbGV0IGNvbCA9IHBhcnNlSW50KGZyZWVTcGFjZSAvIGl0ZW1IZWlnaHQpID49IDIgPyBwYXJzZUludChmcmVlU3BhY2UgLyBpdGVtSGVpZ2h0KSA6IDE7XHJcbiAgICAgICAgY29sID0gKGNvbCA+IDQpID8gNCA6IGNvbDtcclxuICAgICAgICAvLyBjb25zdCBodG1sID0gdGVtcGxhdGUoe2l0ZW1zOiBkYXRhLCBmcmVlU3BhY2U6ICgpfSk7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7aXRlbXM6IGRhdGEsIGZyZWVTcGFjZTogY29sfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2wpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZyZWVTcGFjZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZnJlZVNwYWNlIC8gaXRlbUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEl0ZW1Jbkxpc3RIZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgZmFja2VJbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmFja2VJbnN0YW5jZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBmYWNrZUluc3RhbmNlLnN0eWxlLmxlZnQgPSBcIi05OTk5OXB4XCI7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJkZXRhaWxzX19pdGVtXCI7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiZmFrZVwiO1xyXG4gICAgICAgIGZhY2tlSW5zdGFuY2UuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZhY2tlSW5zdGFuY2UpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBmYWNrZUluc3RhbmNlLmNoaWxkcmVuWzBdLmNsaWVudEhlaWdodDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZhY2tlSW5zdGFuY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9kZXRhaWxzL2luZGV4LmpzIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChmcmVlU3BhY2UsIGl0ZW1zKSB7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbi8vIGl0ZXJhdGUgaXRlbXNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gaXRlbXM7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgaW5kZXggPCAkJGw7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkJG9ialtpbmRleF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2XCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbXCJkZXRhaWxzX19pdGVtIFwiICsgKChpbmRleCA+PSBmcmVlU3BhY2UpID8gXCJkYXRhaWxzLS1tb3JlXCIgOiBcIlwiKV0sIFt0cnVlXSksIGZhbHNlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19faXRlbS10ZXh0XFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtWzBdKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19fbnVtXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtWzFdKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGl0ZW1bMl0gfHwgXCJcIikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIGluZGV4IGluICQkb2JqKSB7XG4gICAgICAkJGwrKztcbiAgICAgIHZhciBpdGVtID0gJCRvYmpbaW5kZXhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdlwiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW1wiZGV0YWlsc19faXRlbSBcIiArICgoaW5kZXggPj0gZnJlZVNwYWNlKSA/IFwiZGF0YWlscy0tbW9yZVwiIDogXCJcIildLCBbdHJ1ZV0pLCBmYWxzZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImRldGFpbHNfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbVswXSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImRldGFpbHNfX251bVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbVsxXSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDc3BhblxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBpdGVtWzJdIHx8IFwiXCIpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG59LmNhbGwodGhpcyxcImZyZWVTcGFjZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguZnJlZVNwYWNlOnR5cGVvZiBmcmVlU3BhY2UhPT1cInVuZGVmaW5lZFwiP2ZyZWVTcGFjZTp1bmRlZmluZWQsXCJpdGVtc1wiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguaXRlbXM6dHlwZW9mIGl0ZW1zIT09XCJ1bmRlZmluZWRcIj9pdGVtczp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy92aWV3L2RldGFpbHMvdGVtcGxhdGUucHVnXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgYVtrZXldID0gdmFsQSArICh2YWxBICYmIHZhbEIgJiYgJzsnKSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJycsIGRlbGltID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgZGVsaW0gKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV07XG4gICAgICAgIGRlbGltID0gJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHZhbCA9ICcnICsgdmFsO1xuICAgIGlmICh2YWxbdmFsLmxlbmd0aCAtIDFdID09PSAnOycpIHJldHVybiB2YWwuc2xpY2UoMCwgLTEpO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcHVnL34vcHVnLXJ1bnRpbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGZzIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuLy4uLy4uLy4uL3ZlbmRvcnMvaGFtbWVyXCI7XHJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLnB1Zyc7XHJcbmltcG9ydCBldmVudE1peGluIGZyb20gXCIuLy4uLy4uL2NvbW1vbi9ldmVudE1peGluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3VybHkge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NOYW1lID0gXCJob3VybHlcIjtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3N3aXBlRWxlbSA9IG5ldyBIYW1tZXIodGhpcy5fZWxlbSwge2RvbUV2ZW50czogdHJ1ZX0pO1xyXG5cclxuICAgICAgICB0aGlzLl9zd2lwZUVsZW0ub24oXCJzd2lwZWxlZnRcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vblN3aXBlTGVmdCwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N3aXBlRWxlbSAub24oXCJzd2lwZXJpZ2h0XCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25Td2lwZVJpZ2h0LCBcIlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3dpcGVFbGVtIC5vbihcInN3aXBlXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25Td2lwZSwgXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlKHtzbGlkZXM6IGRhdGF9KTtcclxuICAgICAgICB0aGlzLl9zbGlkZXIgPSB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1ob3VybHktc2xpZGVyXVwiKTtcclxuICAgICAgICB0aGlzLl9pbm5lciA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIltkYXRhLWhvdXJseS1pbm5lcl1cIik7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uUmVuZGVyLCBcIlwiKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcInNob3duXCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZChcInNob3duLXNsaWRlclwiKTtcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH0sIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3duXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3duLXNsaWRlclwiKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZXN0cm95LCBcIlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGVsZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBFVkVOVFMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJvblJlbmRlclwiOiBcIm9uUmVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwib25EZXN0cm95XCI6IFwib25EZXN0cm95XCIsXHJcbiAgICAgICAgICAgIFwib25Td2lwZVwiOiBcIm9uU3dpcGVcIixcclxuICAgICAgICAgICAgXCJvblN3aXBlTGVmdFwiOiBcIm9uU3dpcGVMZWZ0XCIsXHJcbiAgICAgICAgICAgIFwib25Td2lwZVJpZ2h0XCI6IFwib25Td2lwZVJpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwib25UcmFuc2l0aW9uRW5kXCI6IFwib25UcmFuc2l0aW9uRW5kXCIsXHJcbiAgICAgICAgICAgIFwib25EZXN0cm95VHJhbnNpdGlvbkVuZFwiOiBcIm9uRGVzdHJveVRyYW5zaXRpb25FbmRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZm9yICh2YXIga2V5IGluIGV2ZW50TWl4aW4pIHtcclxuICAgIEhvdXJseS5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9ob3VybHkvaW5kZXguanMiLCIvKiEgSGFtbWVyLkpTIC0gdjIuMC44IC0gMjAxNi0wNC0yM1xyXG4gKiBodHRwOi8vaGFtbWVyanMuZ2l0aHViLmlvL1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSm9yaWsgVGFuZ2VsZGVyO1xyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KGooYSxjKSxiKX1mdW5jdGlvbiBmKGEsYixjKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKT8oZyhhLGNbYl0sYyksITApOiExfWZ1bmN0aW9uIGcoYSxiLGMpe3ZhciBlO2lmKGEpaWYoYS5mb3JFYWNoKWEuZm9yRWFjaChiLGMpO2Vsc2UgaWYoYS5sZW5ndGghPT1kKWZvcihlPTA7ZTxhLmxlbmd0aDspYi5jYWxsKGMsYVtlXSxlLGEpLGUrKztlbHNlIGZvcihlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmYi5jYWxsKGMsYVtlXSxlLGEpfWZ1bmN0aW9uIGgoYixjLGQpe3ZhciBlPVwiREVQUkVDQVRFRCBNRVRIT0Q6IFwiK2MrXCJcXG5cIitkK1wiIEFUIFxcblwiO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPW5ldyBFcnJvcihcImdldC1zdGFjay10cmFjZVwiKSxkPWMmJmMuc3RhY2s/Yy5zdGFjay5yZXBsYWNlKC9eW15cXChdKz9bXFxuJF0vZ20sXCJcIikucmVwbGFjZSgvXlxccythdFxccysvZ20sXCJcIikucmVwbGFjZSgvXk9iamVjdC48YW5vbnltb3VzPlxccypcXCgvZ20sXCJ7YW5vbnltb3VzfSgpQFwiKTpcIlVua25vd24gU3RhY2sgVHJhY2VcIixmPWEuY29uc29sZSYmKGEuY29uc29sZS53YXJufHxhLmNvbnNvbGUubG9nKTtyZXR1cm4gZiYmZi5jYWxsKGEuY29uc29sZSxlLGQpLGIuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBpKGEsYixjKXt2YXIgZCxlPWIucHJvdG90eXBlO2Q9YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlKSxkLmNvbnN0cnVjdG9yPWEsZC5fc3VwZXI9ZSxjJiZsYShkLGMpfWZ1bmN0aW9uIGooYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGsoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PW9hP2EuYXBwbHkoYj9iWzBdfHxkOmQsYik6YX1mdW5jdGlvbiBsKGEsYil7cmV0dXJuIGE9PT1kP2I6YX1mdW5jdGlvbiBtKGEsYixjKXtnKHEoYiksZnVuY3Rpb24oYil7YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiBuKGEsYixjKXtnKHEoYiksZnVuY3Rpb24oYil7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9KX1mdW5jdGlvbiBvKGEsYil7Zm9yKDthOyl7aWYoYT09YilyZXR1cm4hMDthPWEucGFyZW50Tm9kZX1yZXR1cm4hMX1mdW5jdGlvbiBwKGEsYil7cmV0dXJuIGEuaW5kZXhPZihiKT4tMX1mdW5jdGlvbiBxKGEpe3JldHVybiBhLnRyaW0oKS5zcGxpdCgvXFxzKy9nKX1mdW5jdGlvbiByKGEsYixjKXtpZihhLmluZGV4T2YmJiFjKXJldHVybiBhLmluZGV4T2YoYik7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDspe2lmKGMmJmFbZF1bY109PWJ8fCFjJiZhW2RdPT09YilyZXR1cm4gZDtkKyt9cmV0dXJuLTF9ZnVuY3Rpb24gcyhhKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSwwKX1mdW5jdGlvbiB0KGEsYixjKXtmb3IodmFyIGQ9W10sZT1bXSxmPTA7ZjxhLmxlbmd0aDspe3ZhciBnPWI/YVtmXVtiXTphW2ZdO3IoZSxnKTwwJiZkLnB1c2goYVtmXSksZVtmXT1nLGYrK31yZXR1cm4gYyYmKGQ9Yj9kLnNvcnQoZnVuY3Rpb24oYSxjKXtyZXR1cm4gYVtiXT5jW2JdfSk6ZC5zb3J0KCkpLGR9ZnVuY3Rpb24gdShhLGIpe2Zvcih2YXIgYyxlLGY9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZz0wO2c8bWEubGVuZ3RoOyl7aWYoYz1tYVtnXSxlPWM/YytmOmIsZSBpbiBhKXJldHVybiBlO2crK31yZXR1cm4gZH1mdW5jdGlvbiB2KCl7cmV0dXJuIHVhKyt9ZnVuY3Rpb24gdyhiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnR8fGI7cmV0dXJuIGMuZGVmYXVsdFZpZXd8fGMucGFyZW50V2luZG93fHxhfWZ1bmN0aW9uIHgoYSxiKXt2YXIgYz10aGlzO3RoaXMubWFuYWdlcj1hLHRoaXMuY2FsbGJhY2s9Yix0aGlzLmVsZW1lbnQ9YS5lbGVtZW50LHRoaXMudGFyZ2V0PWEub3B0aW9ucy5pbnB1dFRhcmdldCx0aGlzLmRvbUhhbmRsZXI9ZnVuY3Rpb24oYil7ayhhLm9wdGlvbnMuZW5hYmxlLFthXSkmJmMuaGFuZGxlcihiKX0sdGhpcy5pbml0KCl9ZnVuY3Rpb24geShhKXt2YXIgYixjPWEub3B0aW9ucy5pbnB1dENsYXNzO3JldHVybiBuZXcoYj1jP2M6eGE/TTp5YT9QOndhP1I6TCkoYSx6KX1mdW5jdGlvbiB6KGEsYixjKXt2YXIgZD1jLnBvaW50ZXJzLmxlbmd0aCxlPWMuY2hhbmdlZFBvaW50ZXJzLmxlbmd0aCxmPWImRWEmJmQtZT09PTAsZz1iJihHYXxIYSkmJmQtZT09PTA7Yy5pc0ZpcnN0PSEhZixjLmlzRmluYWw9ISFnLGYmJihhLnNlc3Npb249e30pLGMuZXZlbnRUeXBlPWIsQShhLGMpLGEuZW1pdChcImhhbW1lci5pbnB1dFwiLGMpLGEucmVjb2duaXplKGMpLGEuc2Vzc2lvbi5wcmV2SW5wdXQ9Y31mdW5jdGlvbiBBKGEsYil7dmFyIGM9YS5zZXNzaW9uLGQ9Yi5wb2ludGVycyxlPWQubGVuZ3RoO2MuZmlyc3RJbnB1dHx8KGMuZmlyc3RJbnB1dD1EKGIpKSxlPjEmJiFjLmZpcnN0TXVsdGlwbGU/Yy5maXJzdE11bHRpcGxlPUQoYik6MT09PWUmJihjLmZpcnN0TXVsdGlwbGU9ITEpO3ZhciBmPWMuZmlyc3RJbnB1dCxnPWMuZmlyc3RNdWx0aXBsZSxoPWc/Zy5jZW50ZXI6Zi5jZW50ZXIsaT1iLmNlbnRlcj1FKGQpO2IudGltZVN0YW1wPXJhKCksYi5kZWx0YVRpbWU9Yi50aW1lU3RhbXAtZi50aW1lU3RhbXAsYi5hbmdsZT1JKGgsaSksYi5kaXN0YW5jZT1IKGgsaSksQihjLGIpLGIub2Zmc2V0RGlyZWN0aW9uPUcoYi5kZWx0YVgsYi5kZWx0YVkpO3ZhciBqPUYoYi5kZWx0YVRpbWUsYi5kZWx0YVgsYi5kZWx0YVkpO2Iub3ZlcmFsbFZlbG9jaXR5WD1qLngsYi5vdmVyYWxsVmVsb2NpdHlZPWoueSxiLm92ZXJhbGxWZWxvY2l0eT1xYShqLngpPnFhKGoueSk/ai54OmoueSxiLnNjYWxlPWc/SyhnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP0ooZy5wb2ludGVycyxkKTowLGIubWF4UG9pbnRlcnM9Yy5wcmV2SW5wdXQ/Yi5wb2ludGVycy5sZW5ndGg+Yy5wcmV2SW5wdXQubWF4UG9pbnRlcnM/Yi5wb2ludGVycy5sZW5ndGg6Yy5wcmV2SW5wdXQubWF4UG9pbnRlcnM6Yi5wb2ludGVycy5sZW5ndGgsQyhjLGIpO3ZhciBrPWEuZWxlbWVudDtvKGIuc3JjRXZlbnQudGFyZ2V0LGspJiYoaz1iLnNyY0V2ZW50LnRhcmdldCksYi50YXJnZXQ9a31mdW5jdGlvbiBCKGEsYil7dmFyIGM9Yi5jZW50ZXIsZD1hLm9mZnNldERlbHRhfHx7fSxlPWEucHJldkRlbHRhfHx7fSxmPWEucHJldklucHV0fHx7fTtiLmV2ZW50VHlwZSE9PUVhJiZmLmV2ZW50VHlwZSE9PUdhfHwoZT1hLnByZXZEZWx0YT17eDpmLmRlbHRhWHx8MCx5OmYuZGVsdGFZfHwwfSxkPWEub2Zmc2V0RGVsdGE9e3g6Yy54LHk6Yy55fSksYi5kZWx0YVg9ZS54KyhjLngtZC54KSxiLmRlbHRhWT1lLnkrKGMueS1kLnkpfWZ1bmN0aW9uIEMoYSxiKXt2YXIgYyxlLGYsZyxoPWEubGFzdEludGVydmFsfHxiLGk9Yi50aW1lU3RhbXAtaC50aW1lU3RhbXA7aWYoYi5ldmVudFR5cGUhPUhhJiYoaT5EYXx8aC52ZWxvY2l0eT09PWQpKXt2YXIgaj1iLmRlbHRhWC1oLmRlbHRhWCxrPWIuZGVsdGFZLWguZGVsdGFZLGw9RihpLGosayk7ZT1sLngsZj1sLnksYz1xYShsLngpPnFhKGwueSk/bC54OmwueSxnPUcoaixrKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgYz1oLnZlbG9jaXR5LGU9aC52ZWxvY2l0eVgsZj1oLnZlbG9jaXR5WSxnPWguZGlyZWN0aW9uO2IudmVsb2NpdHk9YyxiLnZlbG9jaXR5WD1lLGIudmVsb2NpdHlZPWYsYi5kaXJlY3Rpb249Z31mdW5jdGlvbiBEKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLnBvaW50ZXJzLmxlbmd0aDspYltjXT17Y2xpZW50WDpwYShhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6cGEoYS5wb2ludGVyc1tjXS5jbGllbnRZKX0sYysrO3JldHVybnt0aW1lU3RhbXA6cmEoKSxwb2ludGVyczpiLGNlbnRlcjpFKGIpLGRlbHRhWDphLmRlbHRhWCxkZWx0YVk6YS5kZWx0YVl9fWZ1bmN0aW9uIEUoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6cGEoYVswXS5jbGllbnRYKSx5OnBhKGFbMF0uY2xpZW50WSl9O2Zvcih2YXIgYz0wLGQ9MCxlPTA7Yj5lOyljKz1hW2VdLmNsaWVudFgsZCs9YVtlXS5jbGllbnRZLGUrKztyZXR1cm57eDpwYShjL2IpLHk6cGEoZC9iKX19ZnVuY3Rpb24gRihhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBHKGEsYil7cmV0dXJuIGE9PT1iP0lhOnFhKGEpPj1xYShiKT8wPmE/SmE6S2E6MD5iP0xhOk1hfWZ1bmN0aW9uIEgoYSxiLGMpe2N8fChjPVFhKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBJKGEsYixjKXtjfHwoYz1RYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gSihhLGIpe3JldHVybiBJKGJbMV0sYlswXSxSYSkrSShhWzFdLGFbMF0sUmEpfWZ1bmN0aW9uIEsoYSxiKXtyZXR1cm4gSChiWzBdLGJbMV0sUmEpL0goYVswXSxhWzFdLFJhKX1mdW5jdGlvbiBMKCl7dGhpcy5ldkVsPVRhLHRoaXMuZXZXaW49VWEsdGhpcy5wcmVzc2VkPSExLHguYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIE0oKXt0aGlzLmV2RWw9WGEsdGhpcy5ldldpbj1ZYSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnN0b3JlPXRoaXMubWFuYWdlci5zZXNzaW9uLnBvaW50ZXJFdmVudHM9W119ZnVuY3Rpb24gTigpe3RoaXMuZXZUYXJnZXQ9JGEsdGhpcy5ldldpbj1fYSx0aGlzLnN0YXJ0ZWQ9ITEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gTyhhLGIpe3ZhciBjPXMoYS50b3VjaGVzKSxkPXMoYS5jaGFuZ2VkVG91Y2hlcyk7cmV0dXJuIGImKEdhfEhhKSYmKGM9dChjLmNvbmNhdChkKSxcImlkZW50aWZpZXJcIiwhMCkpLFtjLGRdfWZ1bmN0aW9uIFAoKXt0aGlzLmV2VGFyZ2V0PWJiLHRoaXMudGFyZ2V0SWRzPXt9LHguYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIFEoYSxiKXt2YXIgYz1zKGEudG91Y2hlcyksZD10aGlzLnRhcmdldElkcztpZihiJihFYXxGYSkmJjE9PT1jLmxlbmd0aClyZXR1cm4gZFtjWzBdLmlkZW50aWZpZXJdPSEwLFtjLGNdO3ZhciBlLGYsZz1zKGEuY2hhbmdlZFRvdWNoZXMpLGg9W10saT10aGlzLnRhcmdldDtpZihmPWMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBvKGEudGFyZ2V0LGkpfSksYj09PUVhKWZvcihlPTA7ZTxmLmxlbmd0aDspZFtmW2VdLmlkZW50aWZpZXJdPSEwLGUrKztmb3IoZT0wO2U8Zy5sZW5ndGg7KWRbZ1tlXS5pZGVudGlmaWVyXSYmaC5wdXNoKGdbZV0pLGImKEdhfEhhKSYmZGVsZXRlIGRbZ1tlXS5pZGVudGlmaWVyXSxlKys7cmV0dXJuIGgubGVuZ3RoP1t0KGYuY29uY2F0KGgpLFwiaWRlbnRpZmllclwiLCEwKSxoXTp2b2lkIDB9ZnVuY3Rpb24gUigpe3guYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBhPWoodGhpcy5oYW5kbGVyLHRoaXMpO3RoaXMudG91Y2g9bmV3IFAodGhpcy5tYW5hZ2VyLGEpLHRoaXMubW91c2U9bmV3IEwodGhpcy5tYW5hZ2VyLGEpLHRoaXMucHJpbWFyeVRvdWNoPW51bGwsdGhpcy5sYXN0VG91Y2hlcz1bXX1mdW5jdGlvbiBTKGEsYil7YSZFYT8odGhpcy5wcmltYXJ5VG91Y2g9Yi5jaGFuZ2VkUG9pbnRlcnNbMF0uaWRlbnRpZmllcixULmNhbGwodGhpcyxiKSk6YSYoR2F8SGEpJiZULmNhbGwodGhpcyxiKX1mdW5jdGlvbiBUKGEpe3ZhciBiPWEuY2hhbmdlZFBvaW50ZXJzWzBdO2lmKGIuaWRlbnRpZmllcj09PXRoaXMucHJpbWFyeVRvdWNoKXt2YXIgYz17eDpiLmNsaWVudFgseTpiLmNsaWVudFl9O3RoaXMubGFzdFRvdWNoZXMucHVzaChjKTt2YXIgZD10aGlzLmxhc3RUb3VjaGVzLGU9ZnVuY3Rpb24oKXt2YXIgYT1kLmluZGV4T2YoYyk7YT4tMSYmZC5zcGxpY2UoYSwxKX07c2V0VGltZW91dChlLGNiKX19ZnVuY3Rpb24gVShhKXtmb3IodmFyIGI9YS5zcmNFdmVudC5jbGllbnRYLGM9YS5zcmNFdmVudC5jbGllbnRZLGQ9MDtkPHRoaXMubGFzdFRvdWNoZXMubGVuZ3RoO2QrKyl7dmFyIGU9dGhpcy5sYXN0VG91Y2hlc1tkXSxmPU1hdGguYWJzKGItZS54KSxnPU1hdGguYWJzKGMtZS55KTtpZihkYj49ZiYmZGI+PWcpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gVihhLGIpe3RoaXMubWFuYWdlcj1hLHRoaXMuc2V0KGIpfWZ1bmN0aW9uIFcoYSl7aWYocChhLGpiKSlyZXR1cm4gamI7dmFyIGI9cChhLGtiKSxjPXAoYSxsYik7cmV0dXJuIGImJmM/amI6Ynx8Yz9iP2tiOmxiOnAoYSxpYik/aWI6aGJ9ZnVuY3Rpb24gWCgpe2lmKCFmYilyZXR1cm4hMTt2YXIgYj17fSxjPWEuQ1NTJiZhLkNTUy5zdXBwb3J0cztyZXR1cm5bXCJhdXRvXCIsXCJtYW5pcHVsYXRpb25cIixcInBhbi15XCIsXCJwYW4teFwiLFwicGFuLXggcGFuLXlcIixcIm5vbmVcIl0uZm9yRWFjaChmdW5jdGlvbihkKXtiW2RdPWM/YS5DU1Muc3VwcG9ydHMoXCJ0b3VjaC1hY3Rpb25cIixkKTohMH0pLGJ9ZnVuY3Rpb24gWShhKXt0aGlzLm9wdGlvbnM9bGEoe30sdGhpcy5kZWZhdWx0cyxhfHx7fSksdGhpcy5pZD12KCksdGhpcy5tYW5hZ2VyPW51bGwsdGhpcy5vcHRpb25zLmVuYWJsZT1sKHRoaXMub3B0aW9ucy5lbmFibGUsITApLHRoaXMuc3RhdGU9bmIsdGhpcy5zaW11bHRhbmVvdXM9e30sdGhpcy5yZXF1aXJlRmFpbD1bXX1mdW5jdGlvbiBaKGEpe3JldHVybiBhJnNiP1wiY2FuY2VsXCI6YSZxYj9cImVuZFwiOmEmcGI/XCJtb3ZlXCI6YSZvYj9cInN0YXJ0XCI6XCJcIn1mdW5jdGlvbiAkKGEpe3JldHVybiBhPT1NYT9cImRvd25cIjphPT1MYT9cInVwXCI6YT09SmE/XCJsZWZ0XCI6YT09S2E/XCJyaWdodFwiOlwiXCJ9ZnVuY3Rpb24gXyhhLGIpe3ZhciBjPWIubWFuYWdlcjtyZXR1cm4gYz9jLmdldChhKTphfWZ1bmN0aW9uIGFhKCl7WS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5wWD1udWxsLHRoaXMucFk9bnVsbH1mdW5jdGlvbiBjYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBkYSgpe1kuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBlYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBmYSgpe2FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBnYSgpe1kuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFRpbWU9ITEsdGhpcy5wQ2VudGVyPSExLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLmNvdW50PTB9ZnVuY3Rpb24gaGEoYSxiKXtyZXR1cm4gYj1ifHx7fSxiLnJlY29nbml6ZXJzPWwoYi5yZWNvZ25pemVycyxoYS5kZWZhdWx0cy5wcmVzZXQpLG5ldyBpYShhLGIpfWZ1bmN0aW9uIGlhKGEsYil7dGhpcy5vcHRpb25zPWxhKHt9LGhhLmRlZmF1bHRzLGJ8fHt9KSx0aGlzLm9wdGlvbnMuaW5wdXRUYXJnZXQ9dGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0fHxhLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMucmVjb2duaXplcnM9W10sdGhpcy5vbGRDc3NQcm9wcz17fSx0aGlzLmVsZW1lbnQ9YSx0aGlzLmlucHV0PXkodGhpcyksdGhpcy50b3VjaEFjdGlvbj1uZXcgVih0aGlzLHRoaXMub3B0aW9ucy50b3VjaEFjdGlvbiksamEodGhpcywhMCksZyh0aGlzLm9wdGlvbnMucmVjb2duaXplcnMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGQobmV3IGFbMF0oYVsxXSkpO2FbMl0mJmIucmVjb2duaXplV2l0aChhWzJdKSxhWzNdJiZiLnJlcXVpcmVGYWlsdXJlKGFbM10pfSx0aGlzKX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWEuZWxlbWVudDtpZihjLnN0eWxlKXt2YXIgZDtnKGEub3B0aW9ucy5jc3NQcm9wcyxmdW5jdGlvbihlLGYpe2Q9dShjLnN0eWxlLGYpLGI/KGEub2xkQ3NzUHJvcHNbZF09Yy5zdHlsZVtkXSxjLnN0eWxlW2RdPWUpOmMuc3R5bGVbZF09YS5vbGRDc3NQcm9wc1tkXXx8XCJcIn0pLGJ8fChhLm9sZENzc1Byb3BzPXt9KX19ZnVuY3Rpb24ga2EoYSxjKXt2YXIgZD1iLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwhMCwhMCksZC5nZXN0dXJlPWMsYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKX12YXIgbGEsbWE9W1wiXCIsXCJ3ZWJraXRcIixcIk1velwiLFwiTVNcIixcIm1zXCIsXCJvXCJdLG5hPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxvYT1cImZ1bmN0aW9uXCIscGE9TWF0aC5yb3VuZCxxYT1NYXRoLmFicyxyYT1EYXRlLm5vdztsYT1cImZ1bmN0aW9uXCIhPXR5cGVvZiBPYmplY3QuYXNzaWduP2Z1bmN0aW9uKGEpe2lmKGE9PT1kfHxudWxsPT09YSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO2Zvcih2YXIgYj1PYmplY3QoYSksYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspe3ZhciBlPWFyZ3VtZW50c1tjXTtpZihlIT09ZCYmbnVsbCE9PWUpZm9yKHZhciBmIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShmKSYmKGJbZl09ZVtmXSl9cmV0dXJuIGJ9Ok9iamVjdC5hc3NpZ247dmFyIHNhPWgoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyhiKSxmPTA7ZjxlLmxlbmd0aDspKCFjfHxjJiZhW2VbZl1dPT09ZCkmJihhW2VbZl1dPWJbZVtmXV0pLGYrKztyZXR1cm4gYX0sXCJleHRlbmRcIixcIlVzZSBgYXNzaWduYC5cIiksdGE9aChmdW5jdGlvbihhLGIpe3JldHVybiBzYShhLGIsITApfSxcIm1lcmdlXCIsXCJVc2UgYGFzc2lnbmAuXCIpLHVhPTEsdmE9L21vYmlsZXx0YWJsZXR8aXAoYWR8aG9uZXxvZCl8YW5kcm9pZC9pLHdhPVwib250b3VjaHN0YXJ0XCJpbiBhLHhhPXUoYSxcIlBvaW50ZXJFdmVudFwiKSE9PWQseWE9d2EmJnZhLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksemE9XCJ0b3VjaFwiLEFhPVwicGVuXCIsQmE9XCJtb3VzZVwiLENhPVwia2luZWN0XCIsRGE9MjUsRWE9MSxGYT0yLEdhPTQsSGE9OCxJYT0xLEphPTIsS2E9NCxMYT04LE1hPTE2LE5hPUphfEthLE9hPUxhfE1hLFBhPU5hfE9hLFFhPVtcInhcIixcInlcIl0sUmE9W1wiY2xpZW50WFwiLFwiY2xpZW50WVwiXTt4LnByb3RvdHlwZT17aGFuZGxlcjpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe3RoaXMuZXZFbCYmbSh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmbSh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmbSh3KHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZuKHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZuKHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZuKHcodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9fTt2YXIgU2E9e21vdXNlZG93bjpFYSxtb3VzZW1vdmU6RmEsbW91c2V1cDpHYX0sVGE9XCJtb3VzZWRvd25cIixVYT1cIm1vdXNlbW92ZSBtb3VzZXVwXCI7aShMLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9U2FbYS50eXBlXTtiJkVhJiYwPT09YS5idXR0b24mJih0aGlzLnByZXNzZWQ9ITApLGImRmEmJjEhPT1hLndoaWNoJiYoYj1HYSksdGhpcy5wcmVzc2VkJiYoYiZHYSYmKHRoaXMucHJlc3NlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6W2FdLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6QmEsc3JjRXZlbnQ6YX0pKX19KTt2YXIgVmE9e3BvaW50ZXJkb3duOkVhLHBvaW50ZXJtb3ZlOkZhLHBvaW50ZXJ1cDpHYSxwb2ludGVyY2FuY2VsOkhhLHBvaW50ZXJvdXQ6SGF9LFdhPXsyOnphLDM6QWEsNDpCYSw1OkNhfSxYYT1cInBvaW50ZXJkb3duXCIsWWE9XCJwb2ludGVybW92ZSBwb2ludGVydXAgcG9pbnRlcmNhbmNlbFwiO2EuTVNQb2ludGVyRXZlbnQmJiFhLlBvaW50ZXJFdmVudCYmKFhhPVwiTVNQb2ludGVyRG93blwiLFlhPVwiTVNQb2ludGVyTW92ZSBNU1BvaW50ZXJVcCBNU1BvaW50ZXJDYW5jZWxcIiksaShNLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1WYVtkXSxmPVdhW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09emEsaD1yKGIsYS5wb2ludGVySWQsXCJwb2ludGVySWRcIik7ZSZFYSYmKDA9PT1hLmJ1dHRvbnx8Zyk/MD5oJiYoYi5wdXNoKGEpLGg9Yi5sZW5ndGgtMSk6ZSYoR2F8SGEpJiYoYz0hMCksMD5ofHwoYltoXT1hLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGUse3BvaW50ZXJzOmIsY2hhbmdlZFBvaW50ZXJzOlthXSxwb2ludGVyVHlwZTpmLHNyY0V2ZW50OmF9KSxjJiZiLnNwbGljZShoLDEpKX19KTt2YXIgWmE9e3RvdWNoc3RhcnQ6RWEsdG91Y2htb3ZlOkZhLHRvdWNoZW5kOkdhLHRvdWNoY2FuY2VsOkhhfSwkYT1cInRvdWNoc3RhcnRcIixfYT1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aShOLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9WmFbYS50eXBlXTtpZihiPT09RWEmJih0aGlzLnN0YXJ0ZWQ9ITApLHRoaXMuc3RhcnRlZCl7dmFyIGM9Ty5jYWxsKHRoaXMsYSxiKTtiJihHYXxIYSkmJmNbMF0ubGVuZ3RoLWNbMV0ubGVuZ3RoPT09MCYmKHRoaXMuc3RhcnRlZD0hMSksdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp6YSxzcmNFdmVudDphfSl9fX0pO3ZhciBhYj17dG91Y2hzdGFydDpFYSx0b3VjaG1vdmU6RmEsdG91Y2hlbmQ6R2EsdG91Y2hjYW5jZWw6SGF9LGJiPVwidG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIjtpKFAseCx7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1hYlthLnR5cGVdLGM9US5jYWxsKHRoaXMsYSxiKTtjJiZ0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixiLHtwb2ludGVyczpjWzBdLGNoYW5nZWRQb2ludGVyczpjWzFdLHBvaW50ZXJUeXBlOnphLHNyY0V2ZW50OmF9KX19KTt2YXIgY2I9MjUwMCxkYj0yNTtpKFIseCx7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09emEsZT1jLnBvaW50ZXJUeXBlPT1CYTtpZighKGUmJmMuc291cmNlQ2FwYWJpbGl0aWVzJiZjLnNvdXJjZUNhcGFiaWxpdGllcy5maXJlc1RvdWNoRXZlbnRzKSl7aWYoZClTLmNhbGwodGhpcyxiLGMpO2Vsc2UgaWYoZSYmVS5jYWxsKHRoaXMsYykpcmV0dXJuO3RoaXMuY2FsbGJhY2soYSxiLGMpfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMudG91Y2guZGVzdHJveSgpLHRoaXMubW91c2UuZGVzdHJveSgpfX0pO3ZhciBlYj11KG5hLnN0eWxlLFwidG91Y2hBY3Rpb25cIiksZmI9ZWIhPT1kLGdiPVwiY29tcHV0ZVwiLGhiPVwiYXV0b1wiLGliPVwibWFuaXB1bGF0aW9uXCIsamI9XCJub25lXCIsa2I9XCJwYW4teFwiLGxiPVwicGFuLXlcIixtYj1YKCk7Vi5wcm90b3R5cGU9e3NldDpmdW5jdGlvbihhKXthPT1nYiYmKGE9dGhpcy5jb21wdXRlKCkpLGZiJiZ0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZSYmbWJbYV0mJih0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtlYl09YSksdGhpcy5hY3Rpb25zPWEudG9Mb3dlckNhc2UoKS50cmltKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKX0sY29tcHV0ZTpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBnKHRoaXMubWFuYWdlci5yZWNvZ25pemVycyxmdW5jdGlvbihiKXtrKGIub3B0aW9ucy5lbmFibGUsW2JdKSYmKGE9YS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSl9KSxXKGEuam9pbihcIiBcIikpfSxwcmV2ZW50RGVmYXVsdHM6ZnVuY3Rpb24oYSl7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gdm9pZCBiLnByZXZlbnREZWZhdWx0KCk7dmFyIGQ9dGhpcy5hY3Rpb25zLGU9cChkLGpiKSYmIW1iW2piXSxmPXAoZCxsYikmJiFtYltsYl0sZz1wKGQsa2IpJiYhbWJba2JdO2lmKGUpe3ZhciBoPTE9PT1hLnBvaW50ZXJzLmxlbmd0aCxpPWEuZGlzdGFuY2U8MixqPWEuZGVsdGFUaW1lPDI1MDtpZihoJiZpJiZqKXJldHVybn1yZXR1cm4gZyYmZj92b2lkIDA6ZXx8ZiYmYyZOYXx8ZyYmYyZPYT90aGlzLnByZXZlbnRTcmMoYik6dm9pZCAwfSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgbmI9MSxvYj0yLHBiPTQscWI9OCxyYj1xYixzYj0xNix0Yj0zMjtZLnByb3RvdHlwZT17ZGVmYXVsdHM6e30sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiBsYSh0aGlzLm9wdGlvbnMsYSksdGhpcy5tYW5hZ2VyJiZ0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30scmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtpZihmKGEsXCJyZWNvZ25pemVXaXRoXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5zaW11bHRhbmVvdXM7cmV0dXJuIGE9XyhhLHRoaXMpLGJbYS5pZF18fChiW2EuaWRdPWEsYS5yZWNvZ25pemVXaXRoKHRoaXMpKSx0aGlzfSxkcm9wUmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtyZXR1cm4gZihhLFwiZHJvcFJlY29nbml6ZVdpdGhcIix0aGlzKT90aGlzOihhPV8oYSx0aGlzKSxkZWxldGUgdGhpcy5zaW11bHRhbmVvdXNbYS5pZF0sdGhpcyl9LHJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcInJlcXVpcmVGYWlsdXJlXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5yZXF1aXJlRmFpbDtyZXR1cm4gYT1fKGEsdGhpcyksLTE9PT1yKGIsYSkmJihiLnB1c2goYSksYS5yZXF1aXJlRmFpbHVyZSh0aGlzKSksdGhpc30sZHJvcFJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGYoYSxcImRyb3BSZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO2E9XyhhLHRoaXMpO3ZhciBiPXIodGhpcy5yZXF1aXJlRmFpbCxhKTtyZXR1cm4gYj4tMSYmdGhpcy5yZXF1aXJlRmFpbC5zcGxpY2UoYiwxKSx0aGlzfSxoYXNSZXF1aXJlRmFpbHVyZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg+MH0sY2FuUmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtyZXR1cm4hIXRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdfSxlbWl0OmZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYil7Yy5tYW5hZ2VyLmVtaXQoYixhKX12YXIgYz10aGlzLGQ9dGhpcy5zdGF0ZTtxYj5kJiZiKGMub3B0aW9ucy5ldmVudCtaKGQpKSxiKGMub3B0aW9ucy5ldmVudCksYS5hZGRpdGlvbmFsRXZlbnQmJmIoYS5hZGRpdGlvbmFsRXZlbnQpLGQ+PXFiJiZiKGMub3B0aW9ucy5ldmVudCtaKGQpKX0sdHJ5RW1pdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jYW5FbWl0KCk/dGhpcy5lbWl0KGEpOnZvaWQodGhpcy5zdGF0ZT10Yil9LGNhbkVtaXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoOyl7aWYoISh0aGlzLnJlcXVpcmVGYWlsW2FdLnN0YXRlJih0YnxuYikpKXJldHVybiExO2ErK31yZXR1cm4hMH0scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPWxhKHt9LGEpO3JldHVybiBrKHRoaXMub3B0aW9ucy5lbmFibGUsW3RoaXMsYl0pPyh0aGlzLnN0YXRlJihyYnxzYnx0YikmJih0aGlzLnN0YXRlPW5iKSx0aGlzLnN0YXRlPXRoaXMucHJvY2VzcyhiKSx2b2lkKHRoaXMuc3RhdGUmKG9ifHBifHFifHNiKSYmdGhpcy50cnlFbWl0KGIpKSk6KHRoaXMucmVzZXQoKSx2b2lkKHRoaXMuc3RhdGU9dGIpKX0scHJvY2VzczpmdW5jdGlvbihhKXt9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7fSxyZXNldDpmdW5jdGlvbigpe319LGkoYWEsWSx7ZGVmYXVsdHM6e3BvaW50ZXJzOjF9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5wb2ludGVycztyZXR1cm4gMD09PWJ8fGEucG9pbnRlcnMubGVuZ3RoPT09Yn0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0YXRlLGM9YS5ldmVudFR5cGUsZD1iJihvYnxwYiksZT10aGlzLmF0dHJUZXN0KGEpO3JldHVybiBkJiYoYyZIYXx8IWUpP2J8c2I6ZHx8ZT9jJkdhP2J8cWI6YiZvYj9ifHBiOm9iOnRifX0pLGkoYmEsYWEse2RlZmF1bHRzOntldmVudDpcInBhblwiLHRocmVzaG9sZDoxMCxwb2ludGVyczoxLGRpcmVjdGlvbjpQYX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmTmEmJmIucHVzaChsYiksYSZPYSYmYi5wdXNoKGtiKSxifSxkaXJlY3Rpb25UZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPSEwLGQ9YS5kaXN0YW5jZSxlPWEuZGlyZWN0aW9uLGY9YS5kZWx0YVgsZz1hLmRlbHRhWTtyZXR1cm4gZSZiLmRpcmVjdGlvbnx8KGIuZGlyZWN0aW9uJk5hPyhlPTA9PT1mP0lhOjA+Zj9KYTpLYSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP0lhOjA+Zz9MYTpNYSxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBhYS5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYodGhpcy5zdGF0ZSZvYnx8ISh0aGlzLnN0YXRlJm9iKSYmdGhpcy5kaXJlY3Rpb25UZXN0KGEpKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnBYPWEuZGVsdGFYLHRoaXMucFk9YS5kZWx0YVk7dmFyIGI9JChhLmRpcmVjdGlvbik7YiYmKGEuYWRkaXRpb25hbEV2ZW50PXRoaXMub3B0aW9ucy5ldmVudCtiKSx0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKX19KSxpKGNhLGFhLHtkZWZhdWx0czp7ZXZlbnQ6XCJwaW5jaFwiLHRocmVzaG9sZDowLHBvaW50ZXJzOjJ9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2piXX0sYXR0clRlc3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKE1hdGguYWJzKGEuc2NhbGUtMSk+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZvYil9LGVtaXQ6ZnVuY3Rpb24oYSl7aWYoMSE9PWEuc2NhbGUpe3ZhciBiPWEuc2NhbGU8MT9cImluXCI6XCJvdXRcIjthLmFkZGl0aW9uYWxFdmVudD10aGlzLm9wdGlvbnMuZXZlbnQrYn10aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKX19KSxpKGRhLFkse2RlZmF1bHRzOntldmVudDpcInByZXNzXCIscG9pbnRlcnM6MSx0aW1lOjI1MSx0aHJlc2hvbGQ6OX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5baGJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZj1hLmRlbHRhVGltZT5iLnRpbWU7aWYodGhpcy5faW5wdXQ9YSwhZHx8IWN8fGEuZXZlbnRUeXBlJihHYXxIYSkmJiFmKXRoaXMucmVzZXQoKTtlbHNlIGlmKGEuZXZlbnRUeXBlJkVhKXRoaXMucmVzZXQoKSx0aGlzLl90aW1lcj1lKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1yYix0aGlzLnRyeUVtaXQoKX0sYi50aW1lLHRoaXMpO2Vsc2UgaWYoYS5ldmVudFR5cGUmR2EpcmV0dXJuIHJiO3JldHVybiB0Yn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMuc3RhdGU9PT1yYiYmKGEmJmEuZXZlbnRUeXBlJkdhP3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtcInVwXCIsYSk6KHRoaXMuX2lucHV0LnRpbWVTdGFtcD1yYSgpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpKX19KSxpKGVhLGFhLHtkZWZhdWx0czp7ZXZlbnQ6XCJyb3RhdGVcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltqYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnJvdGF0aW9uKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJm9iKX19KSxpKGZhLGFhLHtkZWZhdWx0czp7ZXZlbnQ6XCJzd2lwZVwiLHRocmVzaG9sZDoxMCx2ZWxvY2l0eTouMyxkaXJlY3Rpb246TmF8T2EscG9pbnRlcnM6MX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gYmEucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYyYoTmF8T2EpP2I9YS5vdmVyYWxsVmVsb2NpdHk6YyZOYT9iPWEub3ZlcmFsbFZlbG9jaXR5WDpjJk9hJiYoYj1hLm92ZXJhbGxWZWxvY2l0eVkpLHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmYyZhLm9mZnNldERpcmVjdGlvbiYmYS5kaXN0YW5jZT50aGlzLm9wdGlvbnMudGhyZXNob2xkJiZhLm1heFBvaW50ZXJzPT10aGlzLm9wdGlvbnMucG9pbnRlcnMmJnFhKGIpPnRoaXMub3B0aW9ucy52ZWxvY2l0eSYmYS5ldmVudFR5cGUmR2F9LGVtaXQ6ZnVuY3Rpb24oYSl7dmFyIGI9JChhLm9mZnNldERpcmVjdGlvbik7YiYmdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K2IsYSksdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LGEpfX0pLGkoZ2EsWSx7ZGVmYXVsdHM6e2V2ZW50OlwidGFwXCIscG9pbnRlcnM6MSx0YXBzOjEsaW50ZXJ2YWw6MzAwLHRpbWU6MjUwLHRocmVzaG9sZDo5LHBvc1RocmVzaG9sZDoxMH0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5baWJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZj1hLmRlbHRhVGltZTxiLnRpbWU7aWYodGhpcy5yZXNldCgpLGEuZXZlbnRUeXBlJkVhJiYwPT09dGhpcy5jb3VudClyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO2lmKGQmJmYmJmMpe2lmKGEuZXZlbnRUeXBlIT1HYSlyZXR1cm4gdGhpcy5mYWlsVGltZW91dCgpO3ZhciBnPXRoaXMucFRpbWU/YS50aW1lU3RhbXAtdGhpcy5wVGltZTxiLmludGVydmFsOiEwLGg9IXRoaXMucENlbnRlcnx8SCh0aGlzLnBDZW50ZXIsYS5jZW50ZXIpPGIucG9zVGhyZXNob2xkO3RoaXMucFRpbWU9YS50aW1lU3RhbXAsdGhpcy5wQ2VudGVyPWEuY2VudGVyLGgmJmc/dGhpcy5jb3VudCs9MTp0aGlzLmNvdW50PTEsdGhpcy5faW5wdXQ9YTt2YXIgaT10aGlzLmNvdW50JWIudGFwcztpZigwPT09aSlyZXR1cm4gdGhpcy5oYXNSZXF1aXJlRmFpbHVyZXMoKT8odGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9cmIsdGhpcy50cnlFbWl0KCl9LGIuaW50ZXJ2YWwsdGhpcyksb2IpOnJifXJldHVybiB0Yn0sZmFpbFRpbWVvdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9dGJ9LHRoaXMub3B0aW9ucy5pbnRlcnZhbCx0aGlzKSx0Yn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT09cmImJih0aGlzLl9pbnB1dC50YXBDb3VudD10aGlzLmNvdW50LHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCx0aGlzLl9pbnB1dCkpfX0pLGhhLlZFUlNJT049XCIyLjAuOFwiLGhhLmRlZmF1bHRzPXtkb21FdmVudHM6ITEsdG91Y2hBY3Rpb246Z2IsZW5hYmxlOiEwLGlucHV0VGFyZ2V0Om51bGwsaW5wdXRDbGFzczpudWxsLHByZXNldDpbW2VhLHtlbmFibGU6ITF9XSxbY2Ese2VuYWJsZTohMX0sW1wicm90YXRlXCJdXSxbZmEse2RpcmVjdGlvbjpOYX1dLFtiYSx7ZGlyZWN0aW9uOk5hfSxbXCJzd2lwZVwiXV0sW2dhXSxbZ2Ese2V2ZW50OlwiZG91YmxldGFwXCIsdGFwczoyfSxbXCJ0YXBcIl1dLFtkYV1dLGNzc1Byb3BzOnt1c2VyU2VsZWN0Olwibm9uZVwiLHRvdWNoU2VsZWN0Olwibm9uZVwiLHRvdWNoQ2FsbG91dDpcIm5vbmVcIixjb250ZW50Wm9vbWluZzpcIm5vbmVcIix1c2VyRHJhZzpcIm5vbmVcIix0YXBIaWdobGlnaHRDb2xvcjpcInJnYmEoMCwwLDAsMClcIn19O3ZhciB1Yj0xLHZiPTI7aWEucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGxhKHRoaXMub3B0aW9ucyxhKSxhLnRvdWNoQWN0aW9uJiZ0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGEuaW5wdXRUYXJnZXQmJih0aGlzLmlucHV0LmRlc3Ryb3koKSx0aGlzLmlucHV0LnRhcmdldD1hLmlucHV0VGFyZ2V0LHRoaXMuaW5wdXQuaW5pdCgpKSx0aGlzfSxzdG9wOmZ1bmN0aW9uKGEpe3RoaXMuc2Vzc2lvbi5zdG9wcGVkPWE/dmI6dWJ9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNlc3Npb247aWYoIWIuc3RvcHBlZCl7dGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsZD10aGlzLnJlY29nbml6ZXJzLGU9Yi5jdXJSZWNvZ25pemVyOyghZXx8ZSYmZS5zdGF0ZSZyYikmJihlPWIuY3VyUmVjb2duaXplcj1udWxsKTtmb3IodmFyIGY9MDtmPGQubGVuZ3RoOyljPWRbZl0sYi5zdG9wcGVkPT09dmJ8fGUmJmMhPWUmJiFjLmNhblJlY29nbml6ZVdpdGgoZSk/Yy5yZXNldCgpOmMucmVjb2duaXplKGEpLCFlJiZjLnN0YXRlJihvYnxwYnxxYikmJihlPWIuY3VyUmVjb2duaXplcj1jKSxmKyt9fSxnZXQ6ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFkpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGYoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpcztpZihhPXRoaXMuZ2V0KGEpKXt2YXIgYj10aGlzLnJlY29nbml6ZXJzLGM9cihiLGEpOy0xIT09YyYmKGIuc3BsaWNlKGMsMSksdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSl9cmV0dXJuIHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7aWYoYSE9PWQmJmIhPT1kKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHEoYSksZnVuY3Rpb24oYSl7Y1thXT1jW2FdfHxbXSxjW2FdLnB1c2goYil9KSx0aGlzfX0sb2ZmOmZ1bmN0aW9uKGEsYil7aWYoYSE9PWQpe3ZhciBjPXRoaXMuaGFuZGxlcnM7cmV0dXJuIGcocShhKSxmdW5jdGlvbihhKXtiP2NbYV0mJmNbYV0uc3BsaWNlKHIoY1thXSxiKSwxKTpkZWxldGUgY1thXX0pLHRoaXN9fSxlbWl0OmZ1bmN0aW9uKGEsYil7dGhpcy5vcHRpb25zLmRvbUV2ZW50cyYma2EoYSxiKTt2YXIgYz10aGlzLmhhbmRsZXJzW2FdJiZ0aGlzLmhhbmRsZXJzW2FdLnNsaWNlKCk7aWYoYyYmYy5sZW5ndGgpe2IudHlwZT1hLGIucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXtiLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KCl9O2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7KWNbZF0oYiksZCsrfX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZWxlbWVudCYmamEodGhpcywhMSksdGhpcy5oYW5kbGVycz17fSx0aGlzLnNlc3Npb249e30sdGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5lbGVtZW50PW51bGx9fSxsYShoYSx7SU5QVVRfU1RBUlQ6RWEsSU5QVVRfTU9WRTpGYSxJTlBVVF9FTkQ6R2EsSU5QVVRfQ0FOQ0VMOkhhLFNUQVRFX1BPU1NJQkxFOm5iLFNUQVRFX0JFR0FOOm9iLFNUQVRFX0NIQU5HRUQ6cGIsU1RBVEVfRU5ERUQ6cWIsU1RBVEVfUkVDT0dOSVpFRDpyYixTVEFURV9DQU5DRUxMRUQ6c2IsU1RBVEVfRkFJTEVEOnRiLERJUkVDVElPTl9OT05FOklhLERJUkVDVElPTl9MRUZUOkphLERJUkVDVElPTl9SSUdIVDpLYSxESVJFQ1RJT05fVVA6TGEsRElSRUNUSU9OX0RPV046TWEsRElSRUNUSU9OX0hPUklaT05UQUw6TmEsRElSRUNUSU9OX1ZFUlRJQ0FMOk9hLERJUkVDVElPTl9BTEw6UGEsTWFuYWdlcjppYSxJbnB1dDp4LFRvdWNoQWN0aW9uOlYsVG91Y2hJbnB1dDpQLE1vdXNlSW5wdXQ6TCxQb2ludGVyRXZlbnRJbnB1dDpNLFRvdWNoTW91c2VJbnB1dDpSLFNpbmdsZVRvdWNoSW5wdXQ6TixSZWNvZ25pemVyOlksQXR0clJlY29nbml6ZXI6YWEsVGFwOmdhLFBhbjpiYSxTd2lwZTpmYSxQaW5jaDpjYSxSb3RhdGU6ZWEsUHJlc3M6ZGEsb246bSxvZmY6bixlYWNoOmcsbWVyZ2U6dGEsZXh0ZW5kOnNhLGFzc2lnbjpsYSxpbmhlcml0OmksYmluZEZuOmoscHJlZml4ZWQ6dX0pO3ZhciB3Yj1cInVuZGVmaW5lZFwiIT10eXBlb2YgYT9hOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e307d2IuSGFtbWVyPWhhLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gaGF9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1oYTphW2NdPWhhfSh3aW5kb3csZG9jdW1lbnQsXCJIYW1tZXJcIik7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbW1lci5taW4uanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9ycy9oYW1tZXIvaW5kZXguanMiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHNsaWRlcykge3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX2lubmVyXFxcIiBkYXRhLWhvdXJseS1pbm5lclxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9fc2xpZGVyXFxcIiBkYXRhLWhvdXJseS1zbGlkZXJcXHUwMDNFXCI7XG4vLyBpdGVyYXRlIHNsaWRlc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBzbGlkZXM7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgwID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBwdWdfaW5kZXgwIDwgJCRsOyBwdWdfaW5kZXgwKyspIHtcbiAgICAgICAgdmFyIHNsaWRlID0gJCRvYmpbcHVnX2luZGV4MF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZS10aW1lXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBzbGlkZS50aW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9fc2xpZGUtdGVtcCBjZWxjaXVzXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBzbGlkZS50ZW1wKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBwdWdfaW5kZXgwIGluICQkb2JqKSB7XG4gICAgICAkJGwrKztcbiAgICAgIHZhciBzbGlkZSA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9fc2xpZGVcXFwiXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9fc2xpZGUtdGltZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gc2xpZGUudGltZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRlbXAgY2VsY2l1c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gc2xpZGUudGVtcCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwic2xpZGVzXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5zbGlkZXM6dHlwZW9mIHNsaWRlcyE9PVwidW5kZWZpbmVkXCI/c2xpZGVzOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL3ZpZXcvaG91cmx5L3RlbXBsYXRlLnB1Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBFdmVudE1peGluID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC00L/QuNGB0LrQsCDQvdCwINGB0L7QsdGL0YLQuNC1XHJcbiAgICAgKiDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtTpcclxuICAgICAqICBvYmplY3Qub24oJ3NlbGVjdCcsIGZ1bmN0aW9uKGl0ZW0pIHsgLi4uIH1cclxuICAgICAqL1xyXG4gICAgb246IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVycykgdGhpcy5fZXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgICAgIGlmICghdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0LXQutGA0LDRidC10L3QuNC1INC/0L7QtNC/0LjRgdC60LhcclxuICAgICAqICBvYmplY3Qub2ZmKCdzZWxlY3QnLCAgaGFuZGxlcilcclxuICAgICAqL1xyXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLl9ldmVudEhhbmRsZXJzICYmIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWhhbmRsZXJzKSByZXR1cm47XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8aGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09IGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLS0sIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDRgdC+0LHRi9GC0LjRjyDRgSDQv9C10YDQtdC00LDRh9C10Lkg0LTQsNC90L3Ri9GFXHJcbiAgICAgKiAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCBpdGVtKTtcclxuICAgICAqL1xyXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnROYW1lIC8qLCAuLi4gKi8pIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzIHx8ICF0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0LTQu9GPINGB0L7QsdGL0YLQuNGPINC90LXRglxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0LLRi9C30LLQsNGC0Ywg0L7QsdGA0LDQsdC+0YLRh9C40LrQuFxyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzW2ldLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWl4aW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy9jb21tb24vZXZlbnRNaXhpbi9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUucHVnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leERheXMge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtKS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5oZWlnaHQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckhlaWdodCgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmlubmVySFRNTCA9IHRlbXBsYXRlKHtpdGVtczogZGF0YX0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvbmV4LWRheXMvaW5kZXguanMiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGl0ZW1zKSB7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0N1bCBjbGFzcz1cXFwiYWRkaXRpb25fX2xpc3RcXFwiXFx1MDAzRVwiO1xuLy8gaXRlcmF0ZSBpdGVtc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBpdGVtcztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuICBcXHUwMDNDbGkgY2xhc3M9XFxcImFkZGl0aW9uX19pdGVtXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheVxcXCIgZGF0YS1uZXh0LWRheVxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X19pbWctd3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKFwiIGNsYXNzPVxcXCJuZXgtZGF5X19pbWdcXFwiXCIrcHVnLmF0dHIoXCJzcmNcIiwgaXRlbS5pbWcsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX2Rlc2NcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fZGF0ZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5kYXRhKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fd2VhdGhlclxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5tYWluKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXBcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fdGVtcC1kYXkgY2VsY2l1c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS50ZW1wLmRheSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXAtaGlnaHQgY2VsY2l1c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS50ZW1wLm5pZ2h0KSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXCI7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgcHVnX2luZGV4MCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7XG4gICAgICB2YXIgaXRlbSA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuICBcXHUwMDNDbGkgY2xhc3M9XFxcImFkZGl0aW9uX19pdGVtXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheVxcXCIgZGF0YS1uZXh0LWRheVxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X19pbWctd3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKFwiIGNsYXNzPVxcXCJuZXgtZGF5X19pbWdcXFwiXCIrcHVnLmF0dHIoXCJzcmNcIiwgaXRlbS5pbWcsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX2Rlc2NcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fZGF0ZVxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5kYXRhKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fd2VhdGhlclxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS5tYWluKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXBcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmV4LWRheV9fdGVtcC1kYXkgY2VsY2l1c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS50ZW1wLmRheSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXAtaGlnaHQgY2VsY2l1c1xcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaXRlbS50ZW1wLm5pZ2h0KSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVwiO30uY2FsbCh0aGlzLFwiaXRlbXNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLml0ZW1zOnR5cGVvZiBpdGVtcyE9PVwidW5kZWZpbmVkXCI/aXRlbXM6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdmlldy9uZXgtZGF5cy90ZW1wbGF0ZS5wdWdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW0pIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcclxuXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fbWFuYWdlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRPZmZzZXRNYXJnaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPZmZzZXRNYXJnaW4oKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX2NpdHktdmlld2VyXCIpLnN0eWxlLm1hcmdpblJpZ2h0ID0gLXRoaXMuX2dldFNjcm9sbFdpZHRoKCkgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlT2Zmc2V0TWFyZ2luKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIi5tZW51X19jaXR5LXZpZXdlclwiKS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgX21hbmFnZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubWVudV9fY2xvc2VcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubWVudV9fb3ZlcmZsb3dcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1lbnVTd2lwZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVTd2lwZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U2Nyb2xsV2lkdGgoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcclxuICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIGRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbFdpZHRoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9tZW51L2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgVGVsZXBvcnRBdXRvY29tcGxldGUgZnJvbSBcIi4vLi4vLi4vLi4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmpzXCI7XHJcbmltcG9ydCAgXCIuLy4uLy4uLy4uL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3NcIjtcclxuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSBcIi4vLi4vLi4vY29tbW9uL2V2ZW50TWl4aW5cIjtcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW07XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW0uY2xhc3NOYW1lfV9faW5wdXRgKTtcclxuXHJcbiAgICAgICAgVGVsZXBvcnRBdXRvY29tcGxldGUuaW5pdChpbnB1dCkub24oJ2NoYW5nZScsIGNpdHlEYXRhID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZENpdHlEYXRhKGNpdHlEYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2VuZENpdHlEYXRhKGNpdHlEYXRhKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRVZFTlRTLm9uR2V0Q2l0eSwgY2l0eURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgRVZFTlRTICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIm9uR2V0Q2l0eVwiOiBcIm9uR2V0Q2l0eVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKHZhciBrZXkgaW4gZXZlbnRNaXhpbikge1xyXG4gICAgU2VhcmNoLnByb3RvdHlwZVtrZXldID0gZXZlbnRNaXhpbltrZXldO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbW9kdWxlcy92aWV3L3NlYXJjaC9pbmRleC5qcyIsIi8qISB0ZWxlcG9ydC1hdXRvY29tcGxldGUgLSB2MC4zLjEgfCBodHRwczovL2dpdGh1Yi5jb20vdGVsZXBvcnQvYXV0b2NvbXBsZXRlI3JlYWRtZSB8IE1JVCAqL1xuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgdDt0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyx0LlRlbGVwb3J0QXV0b2NvbXBsZXRlPWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUodCxuLGkpe2Z1bmN0aW9uIHIocyxhKXtpZighbltzXSl7aWYoIXRbc10pe3ZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWEmJnUpcmV0dXJuIHUocywhMCk7aWYobylyZXR1cm4gbyhzLCEwKTt2YXIgYz1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3MrXCInXCIpO3Rocm93IGMuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixjfXZhciBsPW5bc109e2V4cG9ydHM6e319O3Rbc11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtzXVsxXVtlXTtyZXR1cm4gcihuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLGkpfXJldHVybiBuW3NdLmV4cG9ydHN9Zm9yKHZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUscz0wO3M8aS5sZW5ndGg7cysrKXIoaVtzXSk7cmV0dXJuIHJ9KHsxOltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO2kuZW51bWVyYWJsZT1pLmVudW1lcmFibGV8fCExLGkuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGkmJihpLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLmtleSxpKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixpKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxpJiZlKHQsaSksdH19KCk7ZShcImNsYXNzbGlzdC1wb2x5ZmlsbFwiKSxlKFwiZWxlbWVudC1jbG9zZXN0XCIpO3ZhciBzPWUoXCJoYWxmcmVkXCIpLGE9aShzKSx1PWUoXCJtaW5pdmVudHNcIiksYz1pKHUpLGw9ZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLGY9aShsKSxkPWUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZmluZFwiKSxwPWkoZCksaD1lKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGVcIikseT1pKGgpLHY9ZShcImRlYm91bmNlXCIpLG09aSh2KSxnPXtCQUNLOjgsVEFCOjksRU5URVI6MTMsVVA6MzgsRE9XTjo0MH0sYj0nPGRpdiBjbGFzcz1cInRwLWF1dG9jb21wbGV0ZVwiPjx1bCBjbGFzcz1cInRwLWFjX19saXN0XCI+PC91bD48L2Rpdj4nLF89XCJ0cC1hY19faW5wdXRcIix4PWZ1bmN0aW9uKGUpe3JldHVybic8bGkgY2xhc3M9XCJ0cC1hY19faXRlbVwiPicrZStcIjwvbGk+XCJ9LGs9JzxsaSBjbGFzcz1cInRwLWFjX19pdGVtIG5vLXJlc3VsdHNcIj5ObyBtYXRjaGVzPC9saT4nLCQ9JzxsaSBjbGFzcz1cInRwLWFjX19pdGVtIGdlb2xvY2F0ZVwiPkRldGVjdCBteSBjdXJyZW50IGxvY2F0aW9uPC9saT4nLHc9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMud3JhcE1hdGNoZXMoZS50aXRsZSl9O0hUTUxFbGVtZW50LnByb3RvdHlwZS5vbj1IVE1MRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcixIVE1MRWxlbWVudC5wcm90b3R5cGUub2ZmPUhUTUxFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO3ZhciBqPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/e306YXJndW1lbnRzWzBdLGk9bi5lbCxvPXZvaWQgMD09PWk/bnVsbDppLHM9bi52YWx1ZSxhPW4ubWF4SXRlbXMsdT12b2lkIDA9PT1hPzEwOmEsbD1uLml0ZW1UZW1wbGF0ZSxkPXZvaWQgMD09PWw/dzpsLHA9bi5nZW9Mb2NhdGUsaD12b2lkIDA9PT1wPyEwOnAseT1uLmFwaVJvb3Qsdj12b2lkIDA9PT15P1wiaHR0cHM6Ly9hcGkudGVsZXBvcnQub3JnL2FwaVwiOnksZz1uLmFwaVZlcnNpb24sYj12b2lkIDA9PT1nPzE6ZyxfPW4uZW1iZWRzLHg9dm9pZCAwPT09Xz9cImNpdHk6Y291bnRyeSxjaXR5OmFkbWluMV9kaXZpc2lvbixjaXR5OnRpbWV6b25lL3R6Om9mZnNldHMtbm93LGNpdHk6dXJiYW5fYXJlYVwiOl87cih0aGlzLGUpLCgwLGNbXCJkZWZhdWx0XCJdKSh0aGlzKTt2YXIgaz1cInN0cmluZ1wiPT10eXBlb2Ygbz9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pOm87cmV0dXJuIHRoaXMuc2V0dXBJbnB1dChrKSwoMCxmW1wiZGVmYXVsdFwiXSkodGhpcyx7bWF4SXRlbXM6dSxnZW9Mb2NhdGU6aCxhcGlSb290OnYsYXBpVmVyc2lvbjpiLGl0ZW1UZW1wbGF0ZTpkLGVtYmVkczp4LHJlc3VsdHM6W10sX2FjdGl2ZUluZGV4OjAsX2NhY2hlOnt9LF9xdWVyeTp0aGlzLmVsLnZhbHVlLHZhbHVlOnN9KSx0aGlzLnZhbHVlJiZ0aGlzLnZhbHVlLnRpdGxlP3RoaXMucXVlcnk9dGhpcy52YWx1ZS50aXRsZTp0aGlzLnF1ZXJ5JiZ0aGlzLmZldGNoUmVzdWx0cyhmdW5jdGlvbigpe3QudmFsdWU9dC5nZXRSZXN1bHRCeVRpdGxlKHQucXVlcnkpLHQuZW1pdChcImNoYW5nZVwiLHQudmFsdWUpfSksdGhpcy5nZXRDaXRpZXM9KDAsbVtcImRlZmF1bHRcIl0pKHRoaXMuZ2V0Q2l0aWVzLDIwMCksdGhpc31yZXR1cm4gbyhlLFt7a2V5OlwicXVlcnlcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcXVlcnl9LHNldDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PXRoaXMuX3F1ZXJ5P2U6KHRoaXMuX3F1ZXJ5PWUsdGhpcy5lbC52YWx1ZT1lLHZvaWQgdGhpcy5lbWl0KFwicXVlcnljaGFuZ2VcIixlKSl9fSx7a2V5OlwiYWN0aXZlSW5kZXhcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYWN0aXZlSW5kZXh9LHNldDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxpc3QuY2hpbGROb2Rlc1t0aGlzLl9hY3RpdmVJbmRleF07dCYmdC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpLHRoaXMuX2FjdGl2ZUluZGV4PWU7dmFyIG49dGhpcy5saXN0LmNoaWxkTm9kZXNbZV07biYmbi5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpfX0se2tleTpcImxvYWRpbmdcIixzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNwaW5uZXJcIixlKX19XSksbyhlLFt7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbC5vZmYoXCJpbnB1dFwiLHRoaXMub25pbnB1dCksdGhpcy5lbC5vZmYoXCJrZXlkb3duXCIsdGhpcy5vbmtleWRvd24pLHRoaXMuZWwub2ZmKFwiZm9jdXNcIix0aGlzLm9uZm9jdXMpLHRoaXMuZWwub2ZmKFwiYmx1clwiLHRoaXMub25ibHVyKSx0aGlzLmVsLm9mZihcImNsaWNrXCIsdGhpcy5vbmNsaWNrKSx0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXyk7dmFyIGU9dGhpcy5jb250YWluZXIucGFyZW50Tm9kZTtlLnJlcGxhY2VDaGlsZCh0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCksdGhpcy5jb250YWluZXIpfX0se2tleTpcImNsZWFyXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlc3VsdHM9W10sdGhpcy5zZWxlY3RCeUluZGV4KDApfX0se2tleTpcInNldHVwSW5wdXRcIix2YWx1ZTpmdW5jdGlvbihlKXtpZighKGUmJmUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVsZW1lbnQgZ2l2ZW5cIik7ZS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLGIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGFpbmVyXCIse3ZhbHVlOmUucHJldmlvdXNTaWJsaW5nfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsaXN0XCIse3ZhbHVlOnRoaXMuY29udGFpbmVyLmZpcnN0Q2hpbGR9KTt2YXIgdD10aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLHRoaXMubGlzdCk7dC5jbGFzc0xpc3QuYWRkKF8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZWxcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksdGhpcy5lbC5vbihcImlucHV0XCIsdGhpcy5vbmlucHV0LmJpbmQodGhpcykpLHRoaXMuZWwub24oXCJrZXlkb3duXCIsdGhpcy5vbmtleWRvd24uYmluZCh0aGlzKSksdGhpcy5lbC5vbihcImZvY3VzXCIsdGhpcy5vbmZvY3VzLmJpbmQodGhpcykpLHRoaXMuZWwub24oXCJibHVyXCIsdGhpcy5vbmJsdXIuYmluZCh0aGlzKSksdGhpcy5lbC5vbihcImNsaWNrXCIsdGhpcy5vbmNsaWNrLmJpbmQodGhpcykpLHRoaXMubGlzdC5vbihcIm1vdXNlZG93blwiLHRoaXMub25saXN0Y2xpY2suYmluZCh0aGlzKSl9fSx7a2V5Olwib25saXN0Y2xpY2tcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1bXS5pbmRleE9mLmNhbGwodGhpcy5saXN0LmNoaWxkcmVuLGUudGFyZ2V0LmNsb3Nlc3QoXCIudHAtYWNfX2l0ZW1cIikpO3RoaXMuc2VsZWN0QnlJbmRleCh0KX19LHtrZXk6XCJvbmNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmVsLnNlbGVjdCgpfX0se2tleTpcIm9uZm9jdXNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVuZGVyTGlzdCgpfX0se2tleTpcIm9uYmx1clwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saXN0LmlubmVySFRNTD1cIlwifX0se2tleTpcIm9uaW5wdXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5fcXVlcnk9dGhpcy5lbC52YWx1ZSx0aGlzLmZldGNoUmVzdWx0cyhmdW5jdGlvbigpe3JldHVybiBlLnJlbmRlckxpc3QoKX0pfX0se2tleTpcIm9ua2V5ZG93blwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUua2V5Q29kZTtzd2l0Y2goLTEhPT1bZy5VUCxnLkRPV05dLmluZGV4T2YodCkmJmUucHJldmVudERlZmF1bHQoKSx0KXtjYXNlIGcuQkFDSzoodGhpcy52YWx1ZXx8MT09PXRoaXMucXVlcnkubGVuZ3RoKSYmdGhpcy5jbGVhcigpO2JyZWFrO2Nhc2UgZy5FTlRFUjohdGhpcy52YWx1ZSYmdGhpcy5xdWVyeSYmZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuc2VsZWN0QnlJbmRleCh0aGlzLmFjdGl2ZUluZGV4KTticmVhaztjYXNlIGcuVEFCOnRoaXMudmFsdWV8fHRoaXMuc2VsZWN0QnlJbmRleCh0aGlzLmFjdGl2ZUluZGV4KTticmVhaztjYXNlIGcuVVA6dGhpcy5hY3RpdmVJbmRleD1NYXRoLm1heCgwLHRoaXMuYWN0aXZlSW5kZXgtMSk7YnJlYWs7Y2FzZSBnLkRPV046dGhpcy5hY3RpdmVJbmRleD1NYXRoLm1pbih0aGlzLnJlc3VsdHMubGVuZ3RoLTEsdGhpcy5hY3RpdmVJbmRleCsxKX19fSx7a2V5Olwic2VsZWN0QnlJbmRleFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuYWN0aXZlSW5kZXg9ZTt2YXIgdD10aGlzLnZhbHVlO3RoaXMudmFsdWU9dGhpcy5yZXN1bHRzW2VdfHxudWxsO3ZhciBuPXRoaXMubGlzdC5maXJzdENoaWxkJiZ0aGlzLmxpc3QuZmlyc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJnZW9sb2NhdGVcIik7biYmdGhpcy5jdXJyZW50TG9jYXRpb24oKSx0PT09dGhpcy52YWx1ZXx8bnx8dGhpcy5lbWl0KFwiY2hhbmdlXCIsdGhpcy52YWx1ZSksdGhpcy5saXN0LmlubmVySFRNTD1cIlwiLHRoaXMucXVlcnk9dGhpcy52YWx1ZT90aGlzLnZhbHVlLnRpdGxlOlwiXCJ9fSx7a2V5Olwid3JhcE1hdGNoZXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT9cIlwiOmFyZ3VtZW50c1swXSx0PWU7cmV0dXJuIHRoaXMucXVlcnkuc3BsaXQoL1tcXCxcXHNdKy8pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4hIWV9KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBuPW5ldyBSZWdFeHAoKDAseVtcImRlZmF1bHRcIl0pKGUpK1wiKD8hW148XSo+fFtePD5dKjwvKVwiLFwiZ2lcIik7dD10LnJlcGxhY2UobixcIjxzcGFuPiQmPC9zcGFuPlwiKX0pLHR9fSx7a2V5OlwicmVuZGVyTGlzdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg8PTB8fHZvaWQgMD09PWFyZ3VtZW50c1swXT97fTphcmd1bWVudHNbMF0sbj10Lmdlb0xvY2F0ZSxpPXZvaWQgMD09PW4/dGhpcy5nZW9Mb2NhdGU6bixyPXRoaXMucmVzdWx0cy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHgoZS5pdGVtVGVtcGxhdGUodCkpfSkuc2xpY2UoMCx0aGlzLm1heEl0ZW1zKS5qb2luKFwiXCIpO3J8fFwiXCI9PT10aGlzLnF1ZXJ5fHx0aGlzLnZhbHVlfHwocj1rKSxcIlwiPT09dGhpcy5xdWVyeSYmaSYmKHI9JCksdGhpcy5saXN0LmlubmVySFRNTD1yLHRoaXMuYWN0aXZlSW5kZXg9MH19LHtrZXk6XCJnZXRSZXN1bHRCeVRpdGxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVzdWx0cyYmZT8oMCxwW1wiZGVmYXVsdFwiXSkodGhpcy5yZXN1bHRzLGZ1bmN0aW9uKHQpe3JldHVybi0xIT09dC50aXRsZS5pbmRleE9mKGUpfSk6bnVsbH19LHtrZXk6XCJmZXRjaFJlc3VsdHNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/ZnVuY3Rpb24oKXt9OmFyZ3VtZW50c1swXTt0aGlzLnJlcSYmdGhpcy5yZXEuYWJvcnQoKTt2YXIgbj10aGlzLl9jYWNoZVt0aGlzLnF1ZXJ5XTtyZXR1cm4gbj8odGhpcy5yZXN1bHRzPW4sdCgpKToodGhpcy5yZXE9dGhpcy5nZXRDaXRpZXMoZnVuY3Rpb24obil7ZS5yZXN1bHRzPWUuX2NhY2hlW2UucXVlcnldPW4sdCgpLGUubG9hZGluZz0hMX0pLHZvaWQodGhpcy5sb2FkaW5nPSEwKSl9fSx7a2V5OlwiY3VycmVudExvY2F0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9bmV3IFhNTEh0dHBSZXF1ZXN0LG49XCJsb2NhdGlvbjpuZWFyZXN0LWNpdGllcy9sb2NhdGlvbjpuZWFyZXN0LWNpdHkvXCIrKHRoaXMuZW1iZWRzP1wie1wiK3RoaXMuZW1iZWRzK1wifVwiOlwiXCIpO3RoaXMubG9hZGluZz0hMCx0aGlzLm9sZFBsYWNlaG9sZGVyPXRoaXMuZWwucGxhY2Vob2xkZXIsdGhpcy5lbC5wbGFjZWhvbGRlcj1cIkRldGVjdGluZyBsb2NhdGlvbi4uLlwiLG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24oaSl7dmFyIHI9aS5jb29yZHM7dC5vcGVuKFwiR0VUXCIsZS5hcGlSb290K1wiL2xvY2F0aW9ucy9cIityLmxhdGl0dWRlK1wiLFwiK3IubG9uZ2l0dWRlK1wiLz9lbWJlZD1cIituKSx0LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL3ZuZC50ZWxlcG9ydC52XCIrZS5hcGlWZXJzaW9uK1wiK2pzb25cIiksdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGUucGFyc2VMb2NhdGlvbihKU09OLnBhcnNlKHQucmVzcG9uc2UpKX0pLHQuc2VuZCgpfSxmdW5jdGlvbih0KXt2YXIgbj10Lm1lc3NhZ2U7ZS5sb2FkaW5nPSExLGUuZWwucGxhY2Vob2xkZXI9bixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGUuZWwucGxhY2Vob2xkZXI9ZS5vbGRQbGFjZWhvbGRlcn0sM2UzKX0se3RpbWVvdXQ6NWUzfSl9fSx7a2V5OlwicGFyc2VMb2NhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFbXCJkZWZhdWx0XCJdLnBhcnNlKGUpLG49dC5lbWJlZGRlZEFycmF5KFwibG9jYXRpb246bmVhcmVzdC1jaXRpZXNcIilbMF07biYmKHRoaXMucmVzdWx0cz1bdGhpcy5wYXJzZUNpdHkobildLFwibm9waWNrXCI9PT10aGlzLmdlb0xvY2F0ZT8odGhpcy5lbC5mb2N1cygpLHRoaXMucmVuZGVyTGlzdCh7Z2VvTG9jYXRlOiExfSkpOnRoaXMuc2VsZWN0QnlJbmRleCgwKSksdGhpcy5sb2FkaW5nPSExLHRoaXMuZWwucGxhY2Vob2xkZXI9dGhpcy5vbGRQbGFjZWhvbGRlcn19LHtrZXk6XCJnZXRDaXRpZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKCF0aGlzLnF1ZXJ5KXJldHVybiBlKFtdKTt2YXIgbj1cImNpdHk6c2VhcmNoLXJlc3VsdHMvY2l0eTppdGVtL1wiKyh0aGlzLmVtYmVkcz9cIntcIit0aGlzLmVtYmVkcytcIn1cIjpcIlwiKSxpPW5ldyBYTUxIdHRwUmVxdWVzdDtyZXR1cm4gaS5vcGVuKFwiR0VUXCIsdGhpcy5hcGlSb290K1wiL2NpdGllcy8/c2VhcmNoPVwiK3RoaXMucXVlcnkrXCImZW1iZWQ9XCIrbitcIiZsaW1pdD1cIit0aGlzLm1heEl0ZW1zKSxpLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL3ZuZC50ZWxlcG9ydC52XCIrdGhpcy5hcGlWZXJzaW9uK1wiK2pzb25cIiksaS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIG49YVtcImRlZmF1bHRcIl0ucGFyc2UoSlNPTi5wYXJzZShpLnJlc3BvbnNlKSkuZW1iZWRkZWRBcnJheShcImNpdHk6c2VhcmNoLXJlc3VsdHNcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiB0LnBhcnNlQ2l0eShlKX0pO2Uobil9KSxpLnNlbmQoKSxpfX0se2tleTpcInBhcnNlQ2l0eVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuZW1iZWRkZWQoXCJsb2NhdGlvbjpuZWFyZXN0LWNpdHlcIil8fGUuZW1iZWRkZWQoXCJjaXR5Oml0ZW1cIik7dC5jb3VudHJ5PXQuZW1iZWRkZWQoXCJjaXR5OmNvdW50cnlcIiksdC5hZG1pbjFfZGl2aXNpb249dC5lbWJlZGRlZChcImNpdHk6YWRtaW4xX2RpdmlzaW9uXCIpLHQudGltZXpvbmU9dC5lbWJlZGRlZChcImNpdHk6dGltZXpvbmVcIiksdC51cmJhbl9hcmVhPXQuZW1iZWRkZWQoXCJjaXR5OnVyYmFuX2FyZWFcIik7dmFyIG49dC5mdWxsX25hbWUsaT10Lm5hbWUscj10Lmdlb25hbWVfaWQsbz10LnBvcHVsYXRpb24scz10LmxvY2F0aW9uLmxhdGxvbixhPXMubGF0aXR1ZGUsdT1zLmxvbmdpdHVkZSxjPWUubWF0Y2hpbmdfZnVsbF9uYW1lLGw9dm9pZCAwPT09Yz9uOmMsZD17dGl0bGU6bCxuYW1lOmksZ2VvbmFtZUlkOnIsbGF0aXR1ZGU6YSxsb25naXR1ZGU6dSxwb3B1bGF0aW9uOm99O2lmKHQuY291bnRyeSYmKDAsZltcImRlZmF1bHRcIl0pKGQse2NvdW50cnk6dC5jb3VudHJ5Lm5hbWV9KSx0LmFkbWluMV9kaXZpc2lvbil7dmFyIHA9dC5hZG1pbjFfZGl2aXNpb24saD1wLm5hbWUseT1wLmdlb25hbWVzX2FkbWluMV9jb2RlOygwLGZbXCJkZWZhdWx0XCJdKShkLHthZG1pbjFEaXZpc2lvbjpoLGFkbWluMURpdmlzaW9uQ29kZTp5fSl9aWYodC50aW1lem9uZSl7dmFyIHY9dC50aW1lem9uZS5lbWJlZGRlZChcInR6Om9mZnNldHMtbm93XCIpOygwLGZbXCJkZWZhdWx0XCJdKShkLHt0ek9mZnNldE1pbnV0ZXM6di50b3RhbF9vZmZzZXRfbWlufSl9aWYodC51cmJhbl9hcmVhKXt2YXIgbT10LnVyYmFuX2FyZWEsZz1tLnNsdWcsYj1tLm5hbWUsXz1tLnVhX2lkLHg9bS50ZWxlcG9ydF9jaXR5X3VybDsoMCxmW1wiZGVmYXVsdFwiXSkoZCx7dWFOYW1lOmIsdWFJZDpfLHVhQ2l0eVVybDp4LHVhU2x1ZzpnfSl9cmV0dXJuIGR9fV0sW3trZXk6XCJpbml0XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aDw9MXx8dm9pZCAwPT09YXJndW1lbnRzWzFdP3t9OmFyZ3VtZW50c1sxXSxpPVwic3RyaW5nXCI9PXR5cGVvZiB0fHx0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD8oMCxmW1wiZGVmYXVsdFwiXSkobix7ZWw6dH0pOnQ7cmV0dXJuIG5ldyBlKGkpfX1dKSxlfSgpO25bXCJkZWZhdWx0XCJdPWosdC5leHBvcnRzPW5bXCJkZWZhdWx0XCJdfSx7XCJjbGFzc2xpc3QtcG9seWZpbGxcIjoyLFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2ZpbmRcIjozLFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIjo0LFwiY29yZS1qcy9saWJyYXJ5L2ZuL3JlZ2V4cC9lc2NhcGVcIjo1LGRlYm91bmNlOjMzLFwiZWxlbWVudC1jbG9zZXN0XCI6MzQsaGFsZnJlZDozNSxtaW5pdmVudHM6Mzl9XSwyOltmdW5jdGlvbihlLHQsbil7XCJkb2N1bWVudFwiaW4gd2luZG93LnNlbGYmJihcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik/IWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7aWYoZS5jbGFzc0xpc3QuYWRkKFwiYzFcIixcImMyXCIpLCFlLmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKXt2YXIgdD1mdW5jdGlvbihlKXt2YXIgdD1ET01Ub2tlbkxpc3QucHJvdG90eXBlW2VdO0RPTVRva2VuTGlzdC5wcm90b3R5cGVbZV09ZnVuY3Rpb24oZSl7dmFyIG4saT1hcmd1bWVudHMubGVuZ3RoO2ZvcihuPTA7aT5uO24rKyllPWFyZ3VtZW50c1tuXSx0LmNhbGwodGhpcyxlKX19O3QoXCJhZGRcIiksdChcInJlbW92ZVwiKX1pZihlLmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCExKSxlLmNsYXNzTGlzdC5jb250YWlucyhcImMzXCIpKXt2YXIgbj1ET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZTtET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihlLHQpe3JldHVybiAxIGluIGFyZ3VtZW50cyYmIXRoaXMuY29udGFpbnMoZSk9PSF0P3Q6bi5jYWxsKHRoaXMsZSl9fWU9bnVsbH0oKTohZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7aWYoXCJFbGVtZW50XCJpbiBlKXt2YXIgdD1cImNsYXNzTGlzdFwiLG49XCJwcm90b3R5cGVcIixpPWUuRWxlbWVudFtuXSxyPU9iamVjdCxvPVN0cmluZ1tuXS50cmltfHxmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIil9LHM9QXJyYXlbbl0uaW5kZXhPZnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj10aGlzLmxlbmd0aDtuPnQ7dCsrKWlmKHQgaW4gdGhpcyYmdGhpc1t0XT09PWUpcmV0dXJuIHQ7cmV0dXJuLTF9LGE9ZnVuY3Rpb24oZSx0KXt0aGlzLm5hbWU9ZSx0aGlzLmNvZGU9RE9NRXhjZXB0aW9uW2VdLHRoaXMubWVzc2FnZT10fSx1PWZ1bmN0aW9uKGUsdCl7aWYoXCJcIj09PXQpdGhyb3cgbmV3IGEoXCJTWU5UQVhfRVJSXCIsXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIik7aWYoL1xccy8udGVzdCh0KSl0aHJvdyBuZXcgYShcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiLFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCIpO3JldHVybiBzLmNhbGwoZSx0KX0sYz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9by5jYWxsKGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpLG49dD90LnNwbGl0KC9cXHMrLyk6W10saT0wLHI9bi5sZW5ndGg7cj5pO2krKyl0aGlzLnB1c2gobltpXSk7dGhpcy5fdXBkYXRlQ2xhc3NOYW1lPWZ1bmN0aW9uKCl7ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHRoaXMudG9TdHJpbmcoKSl9fSxsPWNbbl09W10sZj1mdW5jdGlvbigpe3JldHVybiBuZXcgYyh0aGlzKX07aWYoYVtuXT1FcnJvcltuXSxsLml0ZW09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXNbZV18fG51bGx9LGwuY29udGFpbnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUrPVwiXCIsLTEhPT11KHRoaXMsZSl9LGwuYWRkPWZ1bmN0aW9uKCl7dmFyIGUsdD1hcmd1bWVudHMsbj0wLGk9dC5sZW5ndGgscj0hMTtkbyBlPXRbbl0rXCJcIiwtMT09PXUodGhpcyxlKSYmKHRoaXMucHVzaChlKSxyPSEwKTt3aGlsZSgrK248aSk7ciYmdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCl9LGwucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGUsdCxuPWFyZ3VtZW50cyxpPTAscj1uLmxlbmd0aCxvPSExO2RvIGZvcihlPW5baV0rXCJcIix0PXUodGhpcyxlKTstMSE9PXQ7KXRoaXMuc3BsaWNlKHQsMSksbz0hMCx0PXUodGhpcyxlKTt3aGlsZSgrK2k8cik7byYmdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCl9LGwudG9nZ2xlPWZ1bmN0aW9uKGUsdCl7ZSs9XCJcIjt2YXIgbj10aGlzLmNvbnRhaW5zKGUpLGk9bj90IT09ITAmJlwicmVtb3ZlXCI6dCE9PSExJiZcImFkZFwiO3JldHVybiBpJiZ0aGlzW2ldKGUpLHQ9PT0hMHx8dD09PSExP3Q6IW59LGwudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qb2luKFwiIFwiKX0sci5kZWZpbmVQcm9wZXJ0eSl7dmFyIGQ9e2dldDpmLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfTt0cnl7ci5kZWZpbmVQcm9wZXJ0eShpLHQsZCl9Y2F0Y2gocCl7LTIxNDY4MjMyNTI9PT1wLm51bWJlciYmKGQuZW51bWVyYWJsZT0hMSxyLmRlZmluZVByb3BlcnR5KGksdCxkKSl9fWVsc2UgcltuXS5fX2RlZmluZUdldHRlcl9fJiZpLl9fZGVmaW5lR2V0dGVyX18odCxmKX19KHdpbmRvdy5zZWxmKSl9LHt9XSwzOltmdW5jdGlvbihlLHQsbil7ZShcIi4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmRcIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiKS5BcnJheS5maW5kfSx7XCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiOjExLFwiLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZmluZFwiOjI5fV0sNDpbZnVuY3Rpb24oZSx0LG4pe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduXCIpLHQuZXhwb3J0cz1lKFwiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIikuT2JqZWN0LmFzc2lnbn0se1wiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIjoxMSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ25cIjozMH1dLDU6W2Z1bmN0aW9uKGUsdCxuKXtlKFwiLi4vLi4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZVwiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvJC5jb3JlXCIpLlJlZ0V4cC5lc2NhcGV9LHtcIi4uLy4uL21vZHVsZXMvJC5jb3JlXCI6MTEsXCIuLi8uLi9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlXCI6MzF9XSw2OltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgVHlwZUVycm9yKGUrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiBlfX0se31dLDc6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSx7fV0sODpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuY3R4XCIpLHI9ZShcIi4vJC5pb2JqZWN0XCIpLG89ZShcIi4vJC50by1vYmplY3RcIikscz1lKFwiLi8kLnRvLWxlbmd0aFwiKSxhPWUoXCIuLyQuYXJyYXktc3BlY2llcy1jcmVhdGVcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PTE9PWUsbj0yPT1lLHU9Mz09ZSxjPTQ9PWUsbD02PT1lLGY9NT09ZXx8bDtyZXR1cm4gZnVuY3Rpb24oZCxwLGgpe2Zvcih2YXIgeSx2LG09byhkKSxnPXIobSksYj1pKHAsaCwzKSxfPXMoZy5sZW5ndGgpLHg9MCxrPXQ/YShkLF8pOm4/YShkLDApOnZvaWQgMDtfPng7eCsrKWlmKChmfHx4IGluIGcpJiYoeT1nW3hdLHY9Yih5LHgsbSksZSkpaWYodClrW3hdPXY7ZWxzZSBpZih2KXN3aXRjaChlKXtjYXNlIDM6cmV0dXJuITA7Y2FzZSA1OnJldHVybiB5O2Nhc2UgNjpyZXR1cm4geDtjYXNlIDI6ay5wdXNoKHkpfWVsc2UgaWYoYylyZXR1cm4hMTtyZXR1cm4gbD8tMTp1fHxjP2M6a319fSx7XCIuLyQuYXJyYXktc3BlY2llcy1jcmVhdGVcIjo5LFwiLi8kLmN0eFwiOjEyLFwiLi8kLmlvYmplY3RcIjoxNyxcIi4vJC50by1sZW5ndGhcIjoyNSxcIi4vJC50by1vYmplY3RcIjoyNn1dLDk6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmlzLW9iamVjdFwiKSxyPWUoXCIuLyQuaXMtYXJyYXlcIiksbz1lKFwiLi8kLndrc1wiKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuIHIoZSkmJihuPWUuY29uc3RydWN0b3IsXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8biE9PUFycmF5JiYhcihuLnByb3RvdHlwZSl8fChuPXZvaWQgMCksaShuKSYmKG49bltvXSxudWxsPT09biYmKG49dm9pZCAwKSkpLG5ldyh2b2lkIDA9PT1uP0FycmF5Om4pKHQpfX0se1wiLi8kLmlzLWFycmF5XCI6MTgsXCIuLyQuaXMtb2JqZWN0XCI6MTksXCIuLyQud2tzXCI6Mjh9XSwxMDpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaS5jYWxsKGUpLnNsaWNlKDgsLTEpfX0se31dLDExOltmdW5jdGlvbihlLHQsbil7dmFyIGk9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMS4yLjZcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1pKX0se31dLDEyOltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5hLWZ1bmN0aW9uXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQsbil7aWYoaShlKSx2b2lkIDA9PT10KXJldHVybiBlO3N3aXRjaChuKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBlLmNhbGwodCxuKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLGkpe3JldHVybiBlLmNhbGwodCxuLGkpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4saSxyKXtyZXR1cm4gZS5jYWxsKHQsbixpLHIpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0LGFyZ3VtZW50cyl9fX0se1wiLi8kLmEtZnVuY3Rpb25cIjo2fV0sMTM6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT1lKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIitlKTtyZXR1cm4gZX19LHt9XSwxNDpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuZ2xvYmFsXCIpLHI9ZShcIi4vJC5jb3JlXCIpLG89ZShcIi4vJC5jdHhcIikscz1cInByb3RvdHlwZVwiLGE9ZnVuY3Rpb24oZSx0LG4pe3ZhciB1LGMsbCxmPWUmYS5GLGQ9ZSZhLkcscD1lJmEuUyxoPWUmYS5QLHk9ZSZhLkIsdj1lJmEuVyxtPWQ/cjpyW3RdfHwoclt0XT17fSksZz1kP2k6cD9pW3RdOihpW3RdfHx7fSlbc107ZCYmKG49dCk7Zm9yKHUgaW4gbiljPSFmJiZnJiZ1IGluIGcsYyYmdSBpbiBtfHwobD1jP2dbdV06blt1XSxtW3VdPWQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGdbdV0/blt1XTp5JiZjP28obCxpKTp2JiZnW3VdPT1sP2Z1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgZT9uZXcgZSh0KTplKHQpfTtyZXR1cm4gdFtzXT1lW3NdLHR9KGwpOmgmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGw/byhGdW5jdGlvbi5jYWxsLGwpOmwsaCYmKChtW3NdfHwobVtzXT17fSkpW3VdPWwpKX07YS5GPTEsYS5HPTIsYS5TPTQsYS5QPTgsYS5CPTE2LGEuVz0zMix0LmV4cG9ydHM9YX0se1wiLi8kLmNvcmVcIjoxMSxcIi4vJC5jdHhcIjoxMixcIi4vJC5nbG9iYWxcIjoxNn1dLDE1OltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4hIWUoKX1jYXRjaCh0KXtyZXR1cm4hMH19fSx7fV0sMTY6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1pKX0se31dLDE3OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5jb2ZcIik7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKGUpe3JldHVyblwiU3RyaW5nXCI9PWkoZSk/ZS5zcGxpdChcIlwiKTpPYmplY3QoZSl9fSx7XCIuLyQuY29mXCI6MTB9XSwxODpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuY29mXCIpO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIkFycmF5XCI9PWkoZSl9fSx7XCIuLyQuY29mXCI6MTB9XSwxOTpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT9udWxsIT09ZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfX0se31dLDIwOltmdW5jdGlvbihlLHQsbil7dmFyIGk9T2JqZWN0O3QuZXhwb3J0cz17Y3JlYXRlOmkuY3JlYXRlLGdldFByb3RvOmkuZ2V0UHJvdG90eXBlT2YsaXNFbnVtOnt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLGdldERlc2M6aS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Isc2V0RGVzYzppLmRlZmluZVByb3BlcnR5LHNldERlc2NzOmkuZGVmaW5lUHJvcGVydGllcyxnZXRLZXlzOmkua2V5cyxnZXROYW1lczppLmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9sczppLmdldE93blByb3BlcnR5U3ltYm9scyxlYWNoOltdLmZvckVhY2h9fSx7fV0sMjE6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kXCIpLHI9ZShcIi4vJC50by1vYmplY3RcIiksbz1lKFwiLi8kLmlvYmplY3RcIik7dC5leHBvcnRzPWUoXCIuLyQuZmFpbHNcIikoZnVuY3Rpb24oKXt2YXIgZT1PYmplY3QuYXNzaWduLHQ9e30sbj17fSxpPVN5bWJvbCgpLHI9XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W2ldPTcsci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZV09ZX0pLDchPWUoe30sdClbaV18fE9iamVjdC5rZXlzKGUoe30sbikpLmpvaW4oXCJcIikhPXJ9KT9mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1yKGUpLHM9YXJndW1lbnRzLGE9cy5sZW5ndGgsdT0xLGM9aS5nZXRLZXlzLGw9aS5nZXRTeW1ib2xzLGY9aS5pc0VudW07YT51Oylmb3IodmFyIGQscD1vKHNbdSsrXSksaD1sP2MocCkuY29uY2F0KGwocCkpOmMocCkseT1oLmxlbmd0aCx2PTA7eT52OylmLmNhbGwocCxkPWhbdisrXSkmJihuW2RdPXBbZF0pO3JldHVybiBufTpPYmplY3QuYXNzaWdufSx7XCIuLyRcIjoyMCxcIi4vJC5mYWlsc1wiOjE1LFwiLi8kLmlvYmplY3RcIjoxNyxcIi4vJC50by1vYmplY3RcIjoyNn1dLDIyOltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIG49dD09PU9iamVjdCh0KT9mdW5jdGlvbihlKXtyZXR1cm4gdFtlXX06dDtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIFN0cmluZyh0KS5yZXBsYWNlKGUsbil9fX0se31dLDIzOltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5nbG9iYWxcIikscj1cIl9fY29yZS1qc19zaGFyZWRfX1wiLG89aVtyXXx8KGlbcl09e30pO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gb1tlXXx8KG9bZV09e30pfX0se1wiLi8kLmdsb2JhbFwiOjE2fV0sMjQ6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaXNOYU4oZT0rZSk/MDooZT4wP3I6aSkoZSl9fSx7fV0sMjU6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLnRvLWludGVnZXJcIikscj1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU+MD9yKGkoZSksOTAwNzE5OTI1NDc0MDk5MSk6MH19LHtcIi4vJC50by1pbnRlZ2VyXCI6MjR9XSwyNjpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuZGVmaW5lZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdChpKGUpKX19LHtcIi4vJC5kZWZpbmVkXCI6MTN9XSwyNzpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09ZT9cIlwiOmUsXCIpX1wiLCgrK2krcikudG9TdHJpbmcoMzYpKX19LHt9XSwyODpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuc2hhcmVkXCIpKFwid2tzXCIpLHI9ZShcIi4vJC51aWRcIiksbz1lKFwiLi8kLmdsb2JhbFwiKS5TeW1ib2w7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpW2VdfHwoaVtlXT1vJiZvW2VdfHwob3x8cikoXCJTeW1ib2wuXCIrZSkpfX0se1wiLi8kLmdsb2JhbFwiOjE2LFwiLi8kLnNoYXJlZFwiOjIzLFwiLi8kLnVpZFwiOjI3fV0sMjk6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiLi8kLmV4cG9ydFwiKSxyPWUoXCIuLyQuYXJyYXktbWV0aG9kc1wiKSg1KSxvPVwiZmluZFwiLHM9ITA7byBpbltdJiZBcnJheSgxKVtvXShmdW5jdGlvbigpe3M9ITF9KSxpKGkuUCtpLkYqcyxcIkFycmF5XCIse2ZpbmQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHIodGhpcyxlLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxlKFwiLi8kLmFkZC10by11bnNjb3BhYmxlc1wiKShvKX0se1wiLi8kLmFkZC10by11bnNjb3BhYmxlc1wiOjcsXCIuLyQuYXJyYXktbWV0aG9kc1wiOjgsXCIuLyQuZXhwb3J0XCI6MTR9XSwzMDpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuZXhwb3J0XCIpO2koaS5TK2kuRixcIk9iamVjdFwiLHthc3NpZ246ZShcIi4vJC5vYmplY3QtYXNzaWduXCIpfSl9LHtcIi4vJC5leHBvcnRcIjoxNCxcIi4vJC5vYmplY3QtYXNzaWduXCI6MjF9XSwzMTpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuZXhwb3J0XCIpLHI9ZShcIi4vJC5yZXBsYWNlclwiKSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csXCJcXFxcJCZcIik7aShpLlMsXCJSZWdFeHBcIix7ZXNjYXBlOmZ1bmN0aW9uKGUpe3JldHVybiByKGUpfX0pfSx7XCIuLyQuZXhwb3J0XCI6MTQsXCIuLyQucmVwbGFjZXJcIjoyMn1dLDMyOltmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaSgpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfXQuZXhwb3J0cz1EYXRlLm5vd3x8aX0se31dLDMzOltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcImRhdGUtbm93XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcigpe3ZhciBsPWkoKS11O3Q+bCYmbD4wP289c2V0VGltZW91dChyLHQtbCk6KG89bnVsbCxufHwoYz1lLmFwcGx5KGEscyksb3x8KGE9cz1udWxsKSkpfXZhciBvLHMsYSx1LGM7cmV0dXJuIG51bGw9PXQmJih0PTEwMCksZnVuY3Rpb24oKXthPXRoaXMscz1hcmd1bWVudHMsdT1pKCk7dmFyIGw9biYmIW87cmV0dXJuIG98fChvPXNldFRpbWVvdXQocix0KSksbCYmKGM9ZS5hcHBseShhLHMpLGE9cz1udWxsKSxjfX19LHtcImRhdGUtbm93XCI6MzJ9XSwzNDpbZnVuY3Rpb24oZSx0LG4peyFmdW5jdGlvbihlKXtlLm1hdGNoZXM9ZS5tYXRjaGVzfHxlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ZS5tc01hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3RvcixlLmNsb3Nlc3Q9ZS5jbG9zZXN0fHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpczt0JiYhdC5tYXRjaGVzKGUpOyl0PXQucGFyZW50RWxlbWVudDtyZXR1cm4gdH19KEVsZW1lbnQucHJvdG90eXBlKX0se31dLDM1OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vbGliL3BhcnNlclwiKSxyPWUoXCIuL2xpYi9yZXNvdXJjZVwiKSxvPSExO3QuZXhwb3J0cz17cGFyc2U6ZnVuY3Rpb24oZSl7cmV0dXJuKG5ldyBpKS5wYXJzZShlLG8pfSxlbmFibGVWYWxpZGF0aW9uOmZ1bmN0aW9uKGUpe289bnVsbCE9ZT9lOiEwfSxkaXNhYmxlVmFsaWRhdGlvbjpmdW5jdGlvbigpe289ITF9LFJlc291cmNlOnJ9fSx7XCIuL2xpYi9wYXJzZXJcIjozNyxcIi4vbGliL3Jlc291cmNlXCI6Mzh9XSwzNjpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoKXthcmd1bWVudHMubGVuZ3RoPj0xP3RoaXMuX2FycmF5PWFyZ3VtZW50c1swXTp0aGlzLl9hcnJheT1bXX1pLnByb3RvdHlwZS5hcnJheT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcnJheX0saS5wcm90b3R5cGUuaXNFbXB0eT1mdW5jdGlvbihlKXtyZXR1cm4gMD09PXRoaXMuX2FycmF5Lmxlbmd0aH0saS5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9hcnJheS5zbGljZSgwKTtyZXR1cm4gdC5wdXNoKGUpLG5ldyBpKHQpfSxpLnByb3RvdHlwZS5wb3A9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9hcnJheS5zbGljZSgwLHRoaXMuX2FycmF5Lmxlbmd0aC0xKTtyZXR1cm4gbmV3IGkoZSl9LGkucHJvdG90eXBlLnBlZWs9ZnVuY3Rpb24oKXtpZih0aGlzLmlzRW1wdHkoKSl0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBwZWVrIG9uIGVtcHR5IHN0YWNrXCIpO3JldHVybiB0aGlzLl9hcnJheVt0aGlzLl9hcnJheS5sZW5ndGgtMV19LHQuZXhwb3J0cz1pfSx7fV0sMzc6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKCl7fWZ1bmN0aW9uIHIoZSx0LG4pe2lmKG51bGw9PWUpcmV0dXJuIGU7dmFyIGk9byhlLl9saW5rcyx0LG4ucHVzaChcIl9saW5rc1wiKSkscj1zKGkpLGM9YShlLl9lbWJlZGRlZCx0LG4ucHVzaChcIl9lbWJlZGRlZFwiKSksbD1uZXcgYihpLHIsYyx0KTtyZXR1cm4gdShlLGwpLGwuX29yaWdpbmFsPWUsbH1mdW5jdGlvbiBvKGUsdCxuKXtyZXR1cm4gZT1jKGUsZix0LG4pLG51bGwhPWUmJm51bGwhPWUuc2VsZnx8eShcIlJlc291cmNlIGRvZXMgbm90IGhhdmUgYSBzZWxmIGxpbmtcIix0LG4pLGV9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gZT9lLmN1cmllczpbXX1mdW5jdGlvbiBhKGUsdCxuKXt2YXIgaT1jKGUsaCx0LG4pO3JldHVybiBudWxsPT1pP2k6KE9iamVjdC5rZXlzKGkpLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLm1hcChmdW5jdGlvbihpKXt2YXIgbz1udWxsIT10P1tdOm51bGwscz1yKGksbyxuLnB1c2goZSkpO3JldHVybiBzLl9vcmlnaW5hbD1pLHN9KX0pLGkpfWZ1bmN0aW9uIHUoZSx0KXtPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiX2xpbmtzXCIhPT1uJiZcIl9lbWJlZGRlZFwiIT09biYmKHRbbl09ZVtuXSl9KX1mdW5jdGlvbiBjKGUsdCxuLGkpe2lmKG51bGw9PWUpcmV0dXJuIGU7dmFyIHI9e307cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obyl7cltvXT1sKG8sZVtvXSx0LG4saSl9KSxyfWZ1bmN0aW9uIGwoZSx0LG4saSxyKXtyZXR1cm4gZCh0KT90Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbihlLHQsaSxyKX0pOltuKGUsdCxpLHIpXX1mdW5jdGlvbiBmKGUsdCxuLGkpe2lmKCFwKHQpKXRocm93IG5ldyBFcnJvcihcIkxpbmsgb2JqZWN0IGlzIG5vdCBhbiBhY3R1YWwgb2JqZWN0OiBcIit0K1wiIFtcIit0eXBlb2YgdCtcIl1cIik7dmFyIHI9bSh0KTtyZXR1cm4gT2JqZWN0LmtleXMoeCkuZm9yRWFjaChmdW5jdGlvbih0KXtudWxsPT1yW3RdJiYoeFt0XS5yZXF1aXJlZCYmeShcIkxpbmsgbWlzc2VzIHJlcXVpcmVkIHByb3BlcnR5IFwiK3QrXCIuXCIsbixpLnB1c2goZSkpLG51bGwhPXhbdF0uZGVmYXVsdFZhbHVlJiYoclt0XT14W3RdLmRlZmF1bHRWYWx1ZSkpfSksci5kZXByZWNhdGlvbiYmdihcIldhcm5pbmc6IExpbmsgXCIrZyhpLnB1c2goZSkpK1wiIGlzIGRlcHJlY2F0ZWQsIHNlZSBcIityLmRlcHJlY2F0aW9uKSxyLnRlbXBsYXRlZCE9PSEwJiZyLnRlbXBsYXRlZCE9PSExJiYoci50ZW1wbGF0ZWQ9ITEpLG4/KHIuaHJlZiYmci5ocmVmLmluZGV4T2YoXCJ7XCIpPj0wJiYhci50ZW1wbGF0ZWQmJnkoJ0xpbmsgc2VlbXMgdG8gYmUgYW4gVVJJIHRlbXBsYXRlIGJ1dCBpdHMgXCJ0ZW1wbGF0ZWRcIiBwcm9wZXJ0eSBpcyBub3Qgc2V0IHRvIHRydWUuJyxuLGkucHVzaChlKSkscik6cn1mdW5jdGlvbiBkKGUpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX1mdW5jdGlvbiBwKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlfWZ1bmN0aW9uIGgoZSx0KXtyZXR1cm4gdH1mdW5jdGlvbiB5KGUsdCxuKXt0JiZ0LnB1c2goe3BhdGg6ZyhuKSxtZXNzYWdlOmV9KX1mdW5jdGlvbiB2KGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjb25zb2xlLmxvZyYmY29uc29sZS5sb2coZSl9ZnVuY3Rpb24gbShlKXt2YXIgdD17fTtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXt0W25dPWVbbl19KSx0fWZ1bmN0aW9uIGcoZSl7Zm9yKHZhciB0PVwiJC5cIixuPTA7bjxlLmFycmF5KCkubGVuZ3RoO24rKyl0Kz1lLmFycmF5KClbbl0rXCIuXCI7cmV0dXJuIHQ9dC5zdWJzdHJpbmcoMCx0Lmxlbmd0aC0xKX12YXIgYj1lKFwiLi9yZXNvdXJjZVwiKSxfPWUoXCIuL2ltbXV0YWJsZV9zdGFja1wiKSx4PXtocmVmOntyZXF1aXJlZDohMCxkZWZhdWx0VmFsdWU6bnVsbH0sdGVtcGxhdGVkOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6ITF9LHR5cGU6e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTpudWxsfSxkZXByZWNhdGlvbjp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOm51bGx9LG5hbWU6e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTpudWxsfSxwcm9maWxlOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6bnVsbH0sdGl0bGU6e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTpudWxsfSxocmVmbGFuZzp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOm51bGx9fTtpLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbihlLHQpe3ZhciBuPXQ/W106bnVsbDtyZXR1cm4gcihlLG4sbmV3IF8pfSx0LmV4cG9ydHM9aX0se1wiLi9pbW11dGFibGVfc3RhY2tcIjozNixcIi4vcmVzb3VyY2VcIjozOH1dLDM4OltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlLHQsbixpKXt0aGlzLl9saW5rcz1lfHx7fSx0aGlzLl9pbml0Q3VyaWVzKHQpLHRoaXMuX2VtYmVkZGVkPW58fHt9LHRoaXMuX3ZhbGlkYXRpb249aXx8W119ZnVuY3Rpb24gcihlLHQpe3JldHVybiBudWxsIT1lP2VbdF06bnVsbH1mdW5jdGlvbiBvKGUsdCxuKXtuPW58fDA7dmFyIGk9cihlLHQpO3JldHVybiBudWxsIT1pJiZpLmxlbmd0aD49MT9pW25dOm51bGx9aS5wcm90b3R5cGUuX2luaXRDdXJpZXM9ZnVuY3Rpb24oZSl7aWYodGhpcy5fY3VyaWVzTWFwPXt9LGUpe3RoaXMuX2N1cmllcz1lO2Zvcih2YXIgdD0wO3Q8dGhpcy5fY3VyaWVzLmxlbmd0aDt0Kyspe3ZhciBuPXRoaXMuX2N1cmllc1t0XTt0aGlzLl9jdXJpZXNNYXBbbi5uYW1lXT1ufX1lbHNlIHRoaXMuX2N1cmllcz1bXTt0aGlzLl9wcmVSZXNvbHZlQ3VyaWVzKCl9LGkucHJvdG90eXBlLl9wcmVSZXNvbHZlQ3VyaWVzPWZ1bmN0aW9uKCl7dGhpcy5fcmVzb2x2ZWRDdXJpZXNNYXA9e307Zm9yKHZhciBlPTA7ZTx0aGlzLl9jdXJpZXMubGVuZ3RoO2UrKyl7dmFyIHQ9dGhpcy5fY3VyaWVzW2VdO2lmKHQubmFtZSlmb3IodmFyIG4gaW4gdGhpcy5fbGlua3MpXCJjdXJpZXNcIiE9PW4mJnRoaXMuX3ByZVJlc29sdmVDdXJpZSh0LG4pfX0saS5wcm90b3R5cGUuX3ByZVJlc29sdmVDdXJpZT1mdW5jdGlvbihlLHQpe3ZhciBuPSh0aGlzLl9saW5rc1t0XSx0LnNwbGl0KC86KC4rKS8pKSxpPW5bMF07aWYoZS5uYW1lPT09aSlpZihlLnRlbXBsYXRlZCYmbi5sZW5ndGg+PTEpe3ZhciByPWUuaHJlZi5yZXBsYWNlKC8oLiopeyguKil9KC4qKS8sXCIkMVwiK25bMV0rXCIkM1wiKTt0aGlzLl9yZXNvbHZlZEN1cmllc01hcFtyXT10fWVsc2UgdGhpcy5fcmVzb2x2ZWRDdXJpZXNNYXBbZS5ocmVmXT10fSxpLnByb3RvdHlwZS5hbGxMaW5rQXJyYXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xpbmtzfSxpLnByb3RvdHlwZS5saW5rQXJyYXk9ZnVuY3Rpb24oZSl7cmV0dXJuIHIodGhpcy5fbGlua3MsZSl9LGkucHJvdG90eXBlLmxpbms9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbyh0aGlzLl9saW5rcyxlLHQpfSxpLnByb3RvdHlwZS5oYXNDdXJpZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2N1cmllcy5sZW5ndGg+MH0saS5wcm90b3R5cGUuY3VyaWVBcnJheT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fY3VyaWVzfSxpLnByb3RvdHlwZS5jdXJpZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fY3VyaWVzTWFwW2VdfSxpLnByb3RvdHlwZS5yZXZlcnNlUmVzb2x2ZUN1cmllPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9yZXNvbHZlZEN1cmllc01hcFtlXX0saS5wcm90b3R5cGUuYWxsRW1iZWRkZWRSZXNvdXJjZUFycmF5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9lbWJlZGRlZH0saS5wcm90b3R5cGUuZW1iZWRkZWRSZXNvdXJjZUFycmF5PWZ1bmN0aW9uKGUpe3JldHVybiByKHRoaXMuX2VtYmVkZGVkLGUpfSxpLnByb3RvdHlwZS5lbWJlZGRlZFJlc291cmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG8odGhpcy5fZW1iZWRkZWQsZSx0KX0saS5wcm90b3R5cGUub3JpZ2luYWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3JpZ2luYWx9LGkucHJvdG90eXBlLnZhbGlkYXRpb25Jc3N1ZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdmFsaWRhdGlvbn0saS5wcm90b3R5cGUuYWxsTGlua3M9aS5wcm90b3R5cGUuYWxsTGlua0FycmF5cyxpLnByb3RvdHlwZS5hbGxFbWJlZGRlZEFycmF5cz1pLnByb3RvdHlwZS5hbGxFbWJlZGRlZFJlc291cmNlcz1pLnByb3RvdHlwZS5hbGxFbWJlZGRlZFJlc291cmNlQXJyYXlzLGkucHJvdG90eXBlLmVtYmVkZGVkQXJyYXk9aS5wcm90b3R5cGUuZW1iZWRkZWRSZXNvdXJjZUFycmF5LGkucHJvdG90eXBlLmVtYmVkZGVkPWkucHJvdG90eXBlLmVtYmVkZGVkUmVzb3VyY2UsaS5wcm90b3R5cGUudmFsaWRhdGlvbj1pLnByb3RvdHlwZS52YWxpZGF0aW9uSXNzdWVzLHQuZXhwb3J0cz1pfSx7fV0sMzk6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e30sbj1bXTtlPWV8fHRoaXMsZS5vbj1mdW5jdGlvbihlLG4saSl7KHRbZV09dFtlXXx8W10pLnB1c2goW24saV0pfSxlLm9mZj1mdW5jdGlvbihlLGkpe2V8fCh0PXt9KTtmb3IodmFyIHI9dFtlXXx8bixvPXIubGVuZ3RoPWk/ci5sZW5ndGg6MDtvLS07KWk9PXJbb11bMF0mJnIuc3BsaWNlKG8sMSl9LGUuZW1pdD1mdW5jdGlvbihlKXtmb3IodmFyIGkscj10W2VdfHxuLG89MDtpPXJbbysrXTspaVswXS5hcHBseShpWzFdLG4uc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpfX19LHt9XX0se30sWzFdKSgxKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5qcy5tYXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuL3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISB0ZWxlcG9ydC1hdXRvY29tcGxldGUgLSB2MC4zLjEgfCBodHRwczovL2dpdGh1Yi5jb20vdGVsZXBvcnQvYXV0b2NvbXBsZXRlI3JlYWRtZSB8IE1JVCAqL1xcblxcbi50cC1hY19faW5wdXQsXFxuLnRwLWFjX19saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLDAsMCwuMzUpO1xcbn1cXG5cXG4udHAtYXV0b2NvbXBsZXRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogMjVlbTtcXG59XFxuXFxuLnRwLWFjX19pbnB1dCB7XFxuICBwYWRkaW5nOiAuMjVlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRwLWFjX19pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi50cC1hY19faW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi50cC1hY19faW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi50cC1hY19faW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLnRwLWFjX19pbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zcGlubmVyIC50cC1hY19faW5wdXQge1xcbiAgcGFkZGluZy1yaWdodDogMS41ZW07XFxuICBtYXJnaW4tcmlnaHQ6IC0xLjVlbTtcXG59XFxuXFxuLnRwLWFjX19saXN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogIzk3OTc5NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IC44NzVlbTtcXG59XFxuXFxuLnRwLWFjX19pdGVtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAuMzU3MTRlbSAuNzE0MjllbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50cC1hY19faXRlbS5pcy1hY3RpdmUsXFxuLnRwLWFjX19pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbi50cC1hY19faXRlbS5uby1yZXN1bHRzLFxcbi50cC1hY19faXRlbS5uby1yZXN1bHRzOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi50cC1hY19faXRlbSBzcGFuIHtcXG4gIGNvbG9yOiAjNGE0YTRhO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGlubmVyIHtcXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLnNwaW5uZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IC41ZW07XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAtLjYyNWVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0uNjI1ZW07XFxuICBjb250ZW50OiAnJztcXG4gIGFuaW1hdGlvbjogc3Bpbm5lciAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsMCwwLC4zKTtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2Nzcy1sb2FkZXIhLi4vfi9yZXNvbHZlLXVybC1sb2FkZXIhLi4vfi9hdXRvcHJlZml4ZXItbG9hZGVyP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9ucyEuL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSBcIi4vLi4vLi4vY29tbW9uL2V2ZW50TWl4aW5cIjtcclxuaW1wb3J0IHRlbXBsYXRlSXRlbUNpdHkgZnJvbSAnLi9pdGVtLWNpdHkucHVnJztcclxuXHJcbmNvbnN0IFNFTEVDVE9SUyA9IHtcclxuICAgIGNsb3NlQnV0dG9uOiBcIltkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VdXCIsXHJcbiAgICB2aWV3ZXJJdGVtOiBcIltkYXRhLWNpdHktdmlld2VyLWl0ZW1dXCIsXHJcbiAgICB2aWV3ZXJJbm5lcjogXCJbZGF0YS1jaXR5LXZpZXdlci1pbm5lcl1cIixcclxuICAgIGFjdGl2ZUNsYXNzOiBcImFjdGl2ZVwiXHJcbn07XHJcblxyXG5jbGFzcyBDaXR5Vmlld2VyIHtcclxuICAgIGNvbnN0cnVjdG9yIChlbGVtKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW07XHJcblxyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX21hbmFnZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEl0ZW1IZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihcIi5jaXR5LXZpZXdlcl9faXRlbVwiKS5jbGllbnRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsSXRlbXNIZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXNMaW5ndGggPSB0aGlzLmdldEl0ZW1zTGVuZ3RoKCk7XHJcbiAgICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHRoaXMuZ2V0SXRlbUhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1NYXJnaW5Cb3R0b20gPSB0aGlzLmdldEl0ZW1NYXJnaW5Cb3R0b20oKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc0xpbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gaXRlbUhlaWdodCArIGl0ZW1NYXJnaW5Cb3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQgKz0gaXRlbUhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3ZXJIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW0uY2xpZW50SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1NYXJnaW5Cb3R0b20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmNpdHktdmlld2VyX19pdGVtXCIpKS5tYXJnaW5Cb3R0b20pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eS12aWV3ZXJfX2l0ZW1cIikubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2Nyb2xsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFsbEl0ZW1zSGVpZ2h0KCkgPiB0aGlzLmdldFZpZXdlckhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENpdHkoY2l0eURhdGEpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gdGVtcGxhdGVJdGVtQ2l0eShjaXR5RGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGVsZW07XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJbm5lcik7XHJcblxyXG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobmV3RWxlbSwgcGFyZW50LmZpcnN0RWxlbWVudENoaWxkKTtcclxuICAgICAgICB0aGlzLl9zZXRBY3RpdmVDbGFzcyhuZXdFbGVtKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25BZGRDaXR5LCB0aGlzLmlzU2Nyb2xsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tYW5hZ2VyKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JTLmNsb3NlQnV0dG9uKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMuY2xvc2VCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGVsZXRlQ2l0eShjbG9zZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMudmlld2VySXRlbSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy52aWV3ZXJJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdENpdHkoaXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NlbGVjdENpdHkoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGdlb0lkID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdlb0lkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9zZXRBY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25TZWxlY3RlZENpdHksIHBhcnNlSW50KGdlb0lkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RlbGV0ZUNpdHkoZWxlbUNsb3NlKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGVsZW1DbG9zZS5jbG9zZXN0KFNFTEVDVE9SUy52aWV3ZXJJdGVtKTtcclxuICAgICAgICBjb25zdCBnZW9JZCA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1nZW9JZFwiKTtcclxuXHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xyXG5cclxuICAgICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoU0VMRUNUT1JTLmFjdGl2ZUNsYXNzKSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldE5ld0FjdGl2ZUVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX29uRGVsZXRlQ2l0eShnZW9JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE5ld0FjdGl2ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV3QWN0aXZlRWxlbSA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySXRlbSk7XHJcblxyXG4gICAgICAgIGlmICghbmV3QWN0aXZlRWxlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZWxldEFsbENpdGllcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NlbGVjdENpdHkobmV3QWN0aXZlRWxlbSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTY3JvbGxUb3AoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0U2Nyb2xsVG9wKCkge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJpc0xhbmRzY2FwZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JTLnZpZXdlcklubmVyKS5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPj0gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJbm5lcikuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2V0QWN0aXZlQ2xhc3MoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMudmlld2VySXRlbSk7XHJcblxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNpdGllcykuZm9yRWFjaChjaXR5ID0+IGNpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRlbGV0ZUNpdHkoZ2VvSWQpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZWxldGVDaXR5LCBwYXJzZUludChnZW9JZCkpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkRlbGV0ZUNpdHlHZXREaW1lbnRpb24sIHRoaXMuaXNTY3JvbGwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBFVkVOVFMgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwib25TZWxlY3RlZENpdHlcIjogXCJvblNlbGVjdGVkQ2l0eVwiLFxyXG4gICAgICAgICAgICBcIm9uRGVsZXRlQ2l0eVwiOiBcIm9uRGVsZXRlQ2l0eVwiLFxyXG4gICAgICAgICAgICBcIm9uRGVsZXRBbGxDaXRpZXNcIjogXCJvbkRlbGV0QWxsQ2l0aWVzXCIsXHJcbiAgICAgICAgICAgIFwib25EZWxldGVDaXR5R2V0RGltZW50aW9uXCI6IFwib25EZWxldGVDaXR5R2V0RGltZW50aW9uXCIsXHJcbiAgICAgICAgICAgIFwib25BZGRDaXR5XCI6IFwib25BZGRDaXR5XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAodmFyIGtleSBpbiBldmVudE1peGluKSB7XHJcbiAgICBDaXR5Vmlld2VyLnByb3RvdHlwZVtrZXldID0gZXZlbnRNaXhpbltrZXldO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXR5Vmlld2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9jaXR5LXZpZXdlci9pbmRleC5qcyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoZ2VvSWQsIG5hbWUpIHt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdlwiICsgKFwiIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCJcIitwdWcuYXR0cihcImRhdGEtZ2VvSWRcIiwgZ2VvSWQsIHRydWUsIHRydWUpK1wiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVwiKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IG5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwiZ2VvSWRcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmdlb0lkOnR5cGVvZiBnZW9JZCE9PVwidW5kZWZpbmVkXCI/Z2VvSWQ6dW5kZWZpbmVkLFwibmFtZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgubmFtZTp0eXBlb2YgbmFtZSE9PVwidW5kZWZpbmVkXCI/bmFtZTp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy92aWV3L2NpdHktdmlld2VyL2l0ZW0tY2l0eS5wdWdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFxuXFx1MDAzQ2h0bWxcXHUwMDNFXFxuICBcXHUwMDNDaGVhZFxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIG5hbWU9XFxcImRlc2NyaXB0aW9uXFxcIiBjb250ZW50PVxcXCJcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDbWV0YSBuYW1lPVxcXCJrZXl3b3Jkc1xcXCIgY29udGVudD1cXFwiXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgbmFtZT1cXFwiYXV0aG9yXFxcIiBjb250ZW50PVxcXCJcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDbGluayBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmZvbnRzLmdvb2dsZWFwaXMuY29tXFx1MDAyRmNzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDBcXFwiIHR5cGU9XFxcInRleHRcXHUwMDJGY3NzXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ3RpdGxlXFx1MDAzRXdlYXRoZXIgYXBwIHYwLjAuMVxcbiAgICBcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcbiAgXFx1MDAzQ2JvZHlcXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gd3JhcHBlci0tXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcXG4gICAgICBcXHUwMDNDIS0tIG1haW5jb250ZW50LS1cXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbmNvbnRlbnRcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQyEtLSBtZW51LS1cXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL21hcmt1cC9fYmxvY2tzL19tZW51LnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgICAgIFxcdTAwM0MhLS0gRU5EIG1lbnUtLVxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0MhLS0gY29udGVudC0tXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9tYXJrdXAvX2Jsb2Nrcy9fY29udGVudC5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICAgICAgICBcXHUwMDNDIS0tIEVORCBjb250ZW50LS1cXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQyEtLSBFTkQgbWFpbmNvbnRlbnQtLVxcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gRU5EIHdyYXBwZXItLVxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwib3ZlcmZsb3dcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJwcmVsb2FkZXJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9pbmRleC5wdWdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudVxcXCIgZGF0YS1tZW51XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9faW5uZXJcXFwiXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJtZW51X19jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19zZWFyY2hcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fc2VhcmNoLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2NpdHktdmlld2VyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX2NpdHktdmlld2VyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX3Rvbmd1ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX292ZXJmbG93XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2VhcmNoXFxcIiBkYXRhLXNlYXJjaFxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcInNlYXJjaF9faW5uZXJcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDaW5wdXQgY2xhc3M9XFxcInNlYXJjaF9faW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJzdGFydCB0eXBlIGNpdHkncyBuYW1lXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19zZWFyY2gucHVnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyXFxcIiBkYXRhLWNpdHktdmlld2VyXFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2lubmVyXFxcIiBkYXRhLWNpdHktdmlld2VyLWlubmVyXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbSBhY3RpdmVcXFwiIGRhdGEtZ2VvSWQ9XFxcIjYxNjc4NjVcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VUb3JvbnRvLCBDYW5hZGFcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiIGRhdGEtZ2VvSWQ9XFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VMb3MgQW5nZWxlcywgVVNBXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCIgZGF0YS1nZW9JZD1cXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXFx1MDAzRUxvcyBBbmdlbGVzLCBVU0FcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiIGRhdGEtZ2VvSWQ9XFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VMb3MgQW5nZWxlcywgVVNBXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCIgZGF0YS1nZW9JZD1cXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXFx1MDAzRUxvcyBBbmdlbGVzLCBVU0FcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiIGRhdGEtZ2VvSWQ9XFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VMb3MgQW5nZWxlcywgVVNBXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCIgZGF0YS1nZW9JZD1cXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXFx1MDAzRUxvcyBBbmdlbGVzLCBVU0FcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LXZpZXdlci5wdWdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19pbm5lclxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19jdXJyZW50LWNpdHkucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19hZGRpdGlvbi5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY29udGVudC5wdWdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY3VycmVudC1jaXR5XFxcIiBkYXRhLWN1cnJlbnQtY2l0eVxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eV9faW5uZXJcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fY2l0eS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eV9fb3ZlcmxheVxcXCIgZGF0YS1jdXJyZW50LWNpdHktb3ZlcmxheVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY3VycmVudC1jaXR5LnB1Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHlfX25hbWVcXFwiIGRhdGEtY2l0eS1uYW1lXFx1MDAzRVRvcm9udG8sIENhbmFkYVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fZGVzY3JcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19kZXNjci1tYWluXFxcIlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X193ZWF0aGVyXFxcIiBkYXRhLWNpdHktd2VhdGhlclxcdTAwM0VDbG91ZGx5XFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fdGVtcCBjZWxjaXVzXFxcIiBkYXRhLWNpdHktdGVtcFxcdTAwM0UxOFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fZGVzY3ItaW1nLXdyYXBcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChcIiBjbGFzcz1cXFwiY2l0eV9fZGVzY3ItaW1nXFxcIlwiK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoXCIuLy4uLy4uLy4uL2ltZy9tMTFkLnN2Z1wiKSwgdHJ1ZSwgdHJ1ZSkrXCIgZGF0YS1jaXR5LWltZ1wiKSArIFwiXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHlfX2RhdGVcXFwiIGRhdGEtY2l0eS1kYXRhXFx1MDAzRTI1IE5vdmVtYmVyXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19kZXRhaWxzXFxcIiBkYXRhLWRldGFpbHNcXHUwMDNFXFxuICAgIFxcdTAwM0MhLS0gaW5jbHVkZSAuXFx1MDAyRl9kZXRhaWxzLnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19ob3VybHlcXFwiIGRhdGEtaG91cmx5XFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tIGluY2x1ZGUgLlxcdTAwMkZfaG91cmx5LnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHlfX21vcmVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtbW9yZS1kZXRhaWxzXFx1MDAzRW1vcmUgZGV0YWlsc1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eV9fcmVsb2FkXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLXJlbG9hZC1kYXRhXFx1MDAzRVxcdTAwM0NpbWdcIiArIChcIiBjbGFzcz1cXFwiY2l0eV9fcmVsb2FkLWltZ1xcXCJcIitwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi8uLi8uLi8uLi9pbWcvY2xvdWQtcmVsb2FkLnN2Z1wiKSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LnB1Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20xMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTExZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG91ZC1yZWxvYWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvY2xvdWQtcmVsb2FkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJhZGRpdGlvblxcXCIgZGF0YS1hZGRpdGlvblxcdTAwM0VcXG4gIFxcdTAwM0MhLS11bC5hZGRpdGlvbl9fbGlzdC0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICBsaS5hZGRpdGlvbl9faXRlbS0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICAgICAgaW5jbHVkZSAuXFx1MDAyRl9uZXh0LWRheS5wdWctLVxcdTAwM0VcXG4gIFxcdTAwM0MhLS0gICAgbGkuYWRkaXRpb25fX2l0ZW0tLVxcdTAwM0VcXG4gIFxcdTAwM0MhLS0gICAgICAgIGluY2x1ZGUgLlxcdTAwMkZfbmV4dC1kYXkucHVnLS1cXHUwMDNFXFxuICBcXHUwMDNDIS0tICAgIGxpLmFkZGl0aW9uX19pdGVtLS1cXHUwMDNFXFxuICBcXHUwMDNDIS0tICAgICAgICBpbmNsdWRlIC5cXHUwMDJGX25leHQtZGF5LnB1Zy0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICBsaS5hZGRpdGlvbl9faXRlbS0tXFx1MDAzRVxcbiAgXFx1MDAzQyEtLSAgICAgICAgaW5jbHVkZSAuXFx1MDAyRl9uZXh0LWRheS5wdWctLVxcdTAwM0VcXG4gIFxcdTAwM0MhLS0gICAgbGkuYWRkaXRpb25fX2l0ZW0tLVxcdTAwM0VcXG4gIFxcdTAwM0MhLS0gICAgICAgIGluY2x1ZGUgLlxcdTAwMkZfbmV4dC1kYXkucHVnLS1cXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vbWFya3VwL19ibG9ja3MvX2FkZGl0aW9uLnB1Z1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL20wMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTAxbi5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20wMm4uc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMDNuLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20wNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTA0bi5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMDlkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20wOW4uc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTEwZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMTBuLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20xMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTExbi5zdmdcIjtcclxuaW1wb3J0IFwiLi9tMTNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL20xM24uc3ZnXCI7XHJcbmltcG9ydCBcIi4vbTUwZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9tNTBuLnN2Z1wiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2ltZy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tNTBkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL201MGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20wMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMDFuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20wMW4uc3ZnXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20wMm4uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTAybi5zdmdcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMDNuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20wM24uc3ZnXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20wNG4uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTA0bi5zdmdcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMDlkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20wOWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTA5bi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMDluLnN2Z1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20xMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTEwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMTBuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20xMG4uc3ZnXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTExbi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tMTFuLnN2Z1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL20xM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWcvbTEzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tMTNuLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1nL20xM24uc3ZnXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbTUwbi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9tNTBuLnN2Z1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBaUJBO0FBQ0E7Ozs7O0FBakJBOzs7QUFHQTtBQUNBO0FDQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7O0FBdUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNQQTs7OztBQUlBO0FBQ0E7QUhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FJaERBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUVBO0FOQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFPQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBTUNBO0FOQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQXBEQTs7Ozs7O0FPN0VBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FQQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7OztBQXpIQTtBQUNBO0FBQ0E7QU8wSEE7QVBDQTs7Ozs7OztBUXhJQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FSQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOzs7Ozs7QUFuUEE7QUFDQTtBQUNBO0FRb1BBO0FSQ0E7Ozs7Ozs7QVM5UEE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FUQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFwRUE7Ozs7OztBVUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdQQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBYkFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7Ozs7O0FBNURBO0FBQ0E7QUFDQTtBYTZEQTtBYkNBOzs7Ozs7Ozs7OztBY3RFQTs7Ozs7QUFLQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FBQUE7QUFBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QUFBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBY0FBO0FkQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FBQUE7QUFBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBQUFBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FBQUE7QWRBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QWNBQTtBQUFBO0FkQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBY0FBO0FkQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBY0FBO0FkQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FjQUE7QUFBQTtBQUFBO0FkQUE7QWNBQTtBZEFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QUFBQTtBQUFBO0FBQUE7QWRBQTtBQUFBO0FjQUE7QWRBQTtBY0FBO0FkQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QWNBQTtBQUFBO0FkQUE7QUFBQTtBY0FBO0FkQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBY0FBO0FkQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FjQUE7QWRBQTtBQUFBO0FBQUE7QWNBQTtBQUFBO0FBQUE7QUFBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWNBQTtBQUFBO0FBQUE7QUFBQTtBZEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FlTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2QkE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBaEJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQTdDQTtBQUNBO0FBK0NBOzs7Ozs7QWlCbERBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBakJBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQW5CQTs7Ozs7O0FrQkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQ0E7QW5CQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7OztBb0I3REE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBcEJBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FxQjlCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FBQUE7QXJCQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FyQkFBO0FBQUE7QXFCQUE7QXJCQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBQUFBO0FyQkFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QXJCQUE7QXFCQUE7QUFBQTtBckJBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FyQkFBO0FxQkFBO0FyQkFBO0FBQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FxQkFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FBQUE7QUFBQTtBckJBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXJCQUE7QUFBQTtBcUJBQTtBQUFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FBQUE7QXJCQUE7QXFCQUE7QUFBQTtBQUFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FBQUE7QXJCQUE7QXFCQUE7QUFBQTtBQUFBO0FyQkFBO0FxQkFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBQUFBO0FyQkFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FxQkFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FxQkFBO0FBQUE7QUFBQTtBckJBQTtBcUJBQTtBQUFBO0FBQUE7QUFBQTtBckJBQTtBcUJBQTtBQUFBO0FBQUE7QXJCQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FxQkFBO0FyQkFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBcUJBQTtBQUFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBQUFBO0FBQUE7QXJCQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QXJCQUE7QXFCQUE7QXJCQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBQUFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QUFBQTtBQUFBO0FyQkFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QXFCQUE7QUFBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBcUJBQTtBckJBQTtBcUJBQTtBckJBQTtBcUJBQTtBQUFBO0FBQUE7QUFBQTtBckJBQTtBQUFBO0FxQkFBO0FBQUE7QXJCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBcUJBQTtBckJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QXNCREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBeEJDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0F5QmpLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUNuQkE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Iiwic291cmNlUm9vdCI6IiJ9