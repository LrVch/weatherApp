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

	__webpack_require__(12);

	__webpack_require__(17);

	var _menu = __webpack_require__(18);

	var _menu2 = _interopRequireDefault(_menu);

	var _search = __webpack_require__(19);

	var _search2 = _interopRequireDefault(_search);

	var _cityViewer = __webpack_require__(24);

	var _cityViewer2 = _interopRequireDefault(_cityViewer);

	__webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 markup
	 */
	if (true) {
	    __webpack_require__(29);
	}

	/*
	 logic
	*/

	var mainElem = new Hammer(document.body);
	var menu = new _menu2.default(document.querySelector("[data-menu]"));
	var search = new _search2.default(document.querySelector("[data-search]"));
	var cityViewer = new _cityViewer2.default(document.querySelector("[data-city-viewer]"));

	mainElem.on("swipeleft", function (ev) {
	    menu.hide();
	});

	mainElem.on("swiperight", function (ev) {
	    menu.show();
	});

	search.on(_search2.default.EVENTS.onGetCity, function (cityData) {
	    console.log(cityData);
	    alert('' + cityData.name);
	});

	cityViewer.on(_cityViewer2.default.EVENTS.onSelectedCity, function (geoId) {
	    console.log(geoId);
	    // alert("select " + geoId);
	});

	cityViewer.on(_cityViewer2.default.EVENTS.onDeleteCity, function (geoId) {
	    console.log(geoId);
	    // alert("delete " + geoId);
	});

	cityViewer.on(_cityViewer2.default.EVENTS.onDeletAllCities, function () {
	    console.log("очистить всю температуру");
	    // alert("delete " + geoId);
	});

	cityViewer.addCity({
	    name: "Omsk, Russia",
	    geoId: 12345
		});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n.mac {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.mac input,\n.mac textarea,\n.mac button {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ninput:focus,\nbutton:focus,\na:focus {\n  outline: 0;\n}\n\n.city__more {\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.shown {\n  display: block !important;\n}\n\n.addition__list:before,\n.details__item:before,\n.city__descr:before,\n.hourly__slider:before,\n.addition__list:after,\n.details__item:after,\n.city__descr:after,\n.hourly__slider:after {\n  content: \"\";\n  display: table;\n}\n\n.addition__list:after,\n.details__item:after,\n.city__descr:after,\n.hourly__slider:after {\n  clear: both;\n}\n\n.dashed {\n  text-decoration: none;\n}\n\n.dashed:hover {\n  text-decoration: none;\n}\n\n.dashed span {\n  position: relative;\n}\n\n.dashed span:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 0;\n  border-bottom: 1px dashed;\n  border-color: inherit;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", Arial, Helvetica, Garuda, sans-serif;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: #f1f1f1;\n}\n\nhtml {\n  position: relative;\n}\n\n.wrapper,\n.maincontent {\n  height: 100%;\n  min-height: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.maincontent {\n  position: relative;\n  background: #f1f1f1;\n}\n\n.isLandscape html,\n.isLandscape body,\n.isLandscape .wrapper,\n.isLandscape .maincontent,\n.isLandscape .content,\n.isLandscape .current-city,\n.isLandscape .addition,\n.isLandscape .menu__search,\n.isLandscape .menu__city-viewer {\n  height: auto;\n  min-height: initial;\n}\n\n@media only screen and (min-width: 992px) {\n  .isLandscape html,\n  .isLandscape body,\n  .isLandscape .maincontent,\n  .isLandscape .wrapper,\n  .isLandscape .content {\n    height: 100% !important;\n    min-height: 100% !important;\n  }\n}\n\n.addition {\n  height: 50%;\n}\n\n@media only screen and (min-width: 992px) {\n  .addition {\n    height: 45% !important;\n  }\n}\n\n.addition__list {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: auto;\n  transition: height .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .addition__list {\n    padding: 10px;\n    padding-bottom: 0;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .addition__list {\n    padding-bottom: 10px;\n  }\n}\n\n.addition__item {\n  margin: 0 10px;\n  margin-bottom: 10px;\n  list-style-type: none;\n}\n\n.addition__item:last-child {\n  margin-bottom: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .addition__item {\n    width: 50%;\n    float: left;\n    margin: 0;\n    padding-bottom: 20px;\n    height: 33.3333333%;\n  }\n\n  .addition__item:nth-child(2n) {\n    padding-left: 10px;\n  }\n\n  .addition__item:nth-child(2n - 1) {\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .addition__item {\n    width: 20%;\n    height: 100%;\n    padding: 0 5px;\n    display: table;\n  }\n\n  .addition__item:nth-child(2n - 1),\n  .addition__item:nth-child(2n) {\n    padding: 0 5px;\n  }\n\n  .addition__item:first-child {\n    padding-left: 0;\n  }\n\n  .addition__item:last-child {\n    padding-right: 0;\n  }\n}\n\n.city-viewer {\n  height: 100%;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n@media only screen and (min-width: 992px) {\n  .city-viewer {\n    font-size: 22px;\n    line-height: 24px;\n  }\n}\n\n.city-viewer__inner {\n  height: inherit;\n  overflow: auto;\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.city-viewer__item {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  position: relative;\n  padding: 12px;\n  padding-right: 40px;\n  margin-bottom: 10px;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n}\n\n.city-viewer__item:last-child {\n  margin-bottom: 0;\n}\n\n.city-viewer__item.active {\n  background-color: #ddd;\n}\n\n.city-viewer__item-close {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.35);\n  transform: rotate(45deg);\n  box-shadow: 0 0  12px #666;\n  box-shadow: none;\n}\n\n.city-viewer__item-close:before,\n.city-viewer__item-close:after {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.city-viewer__item-close:before {\n  width: 100%;\n  height: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.city-viewer__item-close:after {\n  width: 2px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.content {\n  height: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.content .content__inner {\n  height: inherit;\n  min-height: inherit;\n  background: #f1f1f1;\n}\n\n@media only screen and (min-width: 992px) {\n  .content {\n    margin-left: 400px;\n  }\n}\n\n.current-city {\n  height: 50%;\n  padding: 10px;\n  transition: height .3s;\n}\n\n.current-city.small {\n  height: 150px;\n  min-height: 150px;\n}\n\n.current-city.small .details {\n  display: none;\n}\n\n.current-city.small .city__descr-img {\n  width: 60px;\n  margin-bottom: -15px;\n}\n\n.current-city.small .city__date {\n  font-size: 10px;\n}\n\n.current-city.show-more-details {\n  height: auto !important;\n}\n\n.current-city.show-more-details .details {\n  width: 100%;\n  max-width: 100%;\n}\n\n.current-city.show-more-details .details__item {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #000;\n}\n\n@media only screen and (min-width: 768px) {\n  .current-city.show-more-details .details__item {\n    margin-bottom: 20px;\n  }\n}\n\n.current-city.show-more-details .details__hidden {\n  display: block;\n}\n\n.current-city.show-more-details .current-city__overlay {\n  display: block;\n}\n\n.current-city.show-more-details .hourly {\n  display: block;\n}\n\n@media only screen and (min-width: 992px) {\n  .current-city {\n    height: 55% !important;\n  }\n}\n\n.current-city__inner {\n  position: relative;\n  z-index: 8;\n  height: 100%;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n.current-city__overlay {\n  display: none;\n  position: fixed;\n  z-index: 5;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.menu {\n  position: absolute;\n  top: 0;\n  left: -300px;\n  width: 300px;\n  height: 100%;\n  min-height: 100%;\n  transition: left .3s;\n}\n\n.menu.open {\n  left: 0;\n}\n\n.menu.open .menu__overflow {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) {\n  .menu {\n    width: 440px;\n    left: -440px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .menu {\n    position: relative;\n    left: 0;\n    width: 400px;\n    float: left;\n    padding: 10px;\n  }\n}\n\n.menu__inner {\n  position: relative;\n  z-index: 11;\n  height: 100%;\n  min-height: 100%;\n  padding: 0 20px 10px 0;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__inner {\n    padding-left: 20px;\n  }\n}\n\n.menu__close {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  border: 4px solid rgba(0, 0, 0, 0.35);\n  transform: rotate(45deg);\n  box-shadow: 0 0  12px #666;\n}\n\n.menu__close:before,\n.menu__close:after {\n  position: absolute;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.35);\n}\n\n.menu__close:before {\n  width: 100%;\n  height: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.menu__close:after {\n  width: 4px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__close {\n    display: none;\n  }\n}\n\n.menu__overflow {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 10;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__overflow {\n    display: none !important;\n  }\n}\n\ndiv.menu__search {\n  height: 20%;\n  padding-top: 65px;\n}\n\n@media only screen and (min-width: 992px) {\n  div.menu__search {\n    height: 20% !important;\n  }\n}\n\n.menu__city-viewer {\n  height: 80%;\n  padding-top: 30px;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__city-viewer {\n    height: 80% !important;\n  }\n}\n\n.menu__tongue {\n  position: absolute;\n  width: 6px;\n  height: 100px;\n  background: rgba(0, 0, 0, 0.35);\n  right: -6px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 0 3px 3px 0;\n}\n\n@media only screen and (min-width: 992px) {\n  .menu__tongue {\n    display: none;\n  }\n}\n\n.search {\n  height: 30%;\n}\n\n.search .tp-ac__item {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.search__inner {\n  padding-right: 5px !important;\n}\n\n.search__input {\n  width: 100%;\n  padding: 20px !important;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n  font-size: 22px;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n}\n\n.overflow {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.overflow.show {\n  display: block;\n}\n\n.preloader {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  background-image: url(" + __webpack_require__(15) + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.preloader.show {\n  display: block;\n}\n\n.details {\n  max-width: 60%;\n  margin: 0;\n  padding: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .details {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.details__item {\n  margin-bottom: 5px;\n  list-style-type: none;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .details__item {\n    margin-bottom: 10px;\n  }\n}\n\n.details__item-text {\n  float: left;\n  width: 70%;\n}\n\n.details__num {\n  float: right;\n  width: 30%;\n  text-align: right;\n}\n\n.details__hidden {\n  display: none;\n}\n\n.city {\n  position: relative;\n  height: 100%;\n  padding: 20px;\n  padding-top: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city {\n    padding: 40px;\n    padding-top: 10px;\n  }\n}\n\n.city__name {\n  text-align: right;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__name {\n    padding-top: 10px;\n    font-size: 40px;\n    line-height: 42px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__name {\n    padding-top: 10px;\n    font-size: 30px;\n    line-height: 32px;\n  }\n}\n\n.city__descr {\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr {\n    margin-bottom: 30px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__descr {\n    margin-bottom: 10px;\n  }\n}\n\n.city__descr-main {\n  float: left;\n}\n\n.city__weather {\n  margin-bottom: 10px;\n  font-size: 26px;\n  line-height: 28px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__weather {\n    margin-bottom: 30px;\n    font-size: 46px;\n    line-height: 48px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__weather {\n    font-size: 36px;\n    line-height: 38px;\n  }\n}\n\n.city__temp {\n  font-size: 40px;\n  line-height: 42px;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__temp {\n    font-size: 80px;\n    line-height: 82px;\n  }\n\n  .city__temp.celcius:after {\n    font-size: 80px;\n    line-height: 60px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__temp {\n    font-size: 60px;\n    line-height: 62px;\n  }\n}\n\n.city__descr-img-wrap {\n  float: right;\n  text-align: right;\n}\n\n.city__descr-img {\n  width: 140px;\n  margin-bottom: -25px;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__descr-img {\n    width: 200px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .city__descr-img {\n    width: 125px;\n    margin-bottom: -15px;\n  }\n}\n\n.city__date {\n  text-align: right;\n  transition: all .3s;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__date {\n    font-size: 26px;\n    line-height: 28px;\n  }\n}\n\n.city__more {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  display: block;\n  text-align: right;\n  color: #000;\n}\n\n@media only screen and (min-width: 768px) {\n  .city__more {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.hourly {\n  display: none;\n  padding-bottom: 25px;\n  text-align: center;\n}\n\n@media only screen and (min-width: 768px) {\n  .hourly {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.hourly__inner {\n  position: relative;\n  overflow: hidden;\n  height: 41px;\n}\n\n@media only screen and (min-width: 768px) {\n  .hourly__inner {\n    height: 51px;\n  }\n}\n\n.hourly__slider {\n  position: absolute;\n  left: 0;\n  width: 200%;\n  transition: all .3s;\n}\n\n.hourly__slider.slide {\n  left: -100%;\n}\n\n.hourly__slide {\n  float: left;\n  width: 12.5%;\n  border-left: 1px solid #000;\n}\n\n.hourly__slide:first-child,\n.hourly__slide:nth-child(5) {\n  border-left-color: transparent;\n}\n\n.hourly__slide-time {\n  line-height: 25px;\n}\n\n.nex-day {\n  display: table;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 10px #ccc;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day {\n    display: table-cell;\n  }\n}\n\n.nex-day__img-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n  width: 75px;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__img-wrapper {\n    display: block;\n    width: auto;\n    margin-bottom: 20px;\n  }\n}\n\n.nex-day__img {\n  display: block;\n  width: 70px;\n  margin: 0 auto;\n}\n\n.nex-day__desc {\n  vertical-align: middle;\n  display: table-cell;\n  font-size: 14px;\n}\n\n@media only screen and (min-width: 768px) {\n  .nex-day__desc {\n    font-size: 22px;\n    line-height: 24px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__desc {\n    display: block;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n}\n\n.nex-day__date {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n\n@media only screen and (min-width: 768px) {\n  .nex-day__date {\n    font-size: 24px;\n    line-height: 26px;\n  }\n}\n\n.nex-day__weather {\n  text-align: center;\n}\n\n.nex-day__temp {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 22px;\n}\n\n@media only screen and (min-width: 992px) {\n  .nex-day__temp {\n    display: block;\n  }\n}\n\n.nex-day__temp-day {\n  margin-bottom: 10px;\n}\n\n.celcius {\n  position: relative;\n}\n\n.celcius:after {\n  position: absolute;\n  content: \"\\2DA\";\n  top: -6px;\n  font-size: 36px;\n  line-height: 36px;\n}\n\n.search {\n  height: 30%;\n}\n\n.search .tp-ac__item {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.search__inner {\n  padding-right: 5px !important;\n}\n\n.search__input {\n  width: 100%;\n  padding: 20px !important;\n  border: solid 1px transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.35);\n  font-size: 22px;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n}\n\n", ""]);

	// exports


/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/preloader.gif?hash=72701b";

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	"use strict";

	// for content

	function isLandscape(elem) {
	    if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
	        elem.classList.remove("isLandscape");
	    } else {
	        elem.classList.add("isLandscape");
	    }
	};

	window.addEventListener("resize", isLandscape.bind(window, document.body));
	isLandscape(document.body);

/***/ },
/* 18 */
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
	    }

	    _createClass(Menu, [{
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
	    }]);

	    return Menu;
	}();

		exports.default = Menu;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _teleportAutocompleteMin = __webpack_require__(20);

	var _teleportAutocompleteMin2 = _interopRequireDefault(_teleportAutocompleteMin);

	__webpack_require__(21);

	var _eventMixin = __webpack_require__(23);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "/*! teleport-autocomplete - v0.3.1 | https://github.com/teleport/autocomplete#readme | MIT */\n\n.tp-ac__input,\n.tp-ac__list {\n  width: 100%;\n  box-shadow: 2px 2px 4px rgba(0,0,0,.35);\n}\n\n.tp-autocomplete {\n  position: relative;\n  max-width: 25em;\n}\n\n.tp-ac__input {\n  padding: .25em;\n  border: 1px solid transparent;\n  border-radius: 0;\n  background-color: #fafafa;\n  font-size: 1.25em;\n  font-weight: 700;\n  -webkit-appearance: none;\n  text-overflow: ellipsis;\n}\n\n.tp-ac__input::-webkit-input-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input::-moz-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input:-ms-input-placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input::placeholder {\n  color: #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n.tp-ac__input:focus {\n  outline: 0;\n}\n\n.tp-ac__input::-ms-clear {\n  display: none;\n}\n\n.spinner .tp-ac__input {\n  padding-right: 1.5em;\n  margin-right: -1.5em;\n}\n\n.tp-ac__list {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  padding-left: 0;\n  list-style-type: none;\n  color: #979797;\n  background-color: #fff;\n  font-size: .875em;\n}\n\n.tp-ac__item {\n  overflow: hidden;\n  padding: .35714em .71429em;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.tp-ac__item.is-active,\n.tp-ac__item:hover {\n  background-color: #ddd;\n}\n\n.tp-ac__item.no-results,\n.tp-ac__item.no-results:hover {\n  cursor: default;\n  background-color: #fff;\n}\n\n.tp-ac__item span {\n  color: #4a4a4a;\n  font-weight: 700;\n}\n\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner:before {\n  position: absolute;\n  top: 50%;\n  right: .5em;\n  width: 1em;\n  height: 1em;\n  margin-top: -.625em;\n  margin-left: -.625em;\n  content: '';\n  animation: spinner 1s linear infinite;\n  border: 2px solid rgba(0,0,0,.3);\n  border-top-color: rgba(0,0,0,.6);\n  border-radius: 50%;\n}", ""]);

	// exports


/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventMixin = __webpack_require__(23);

	var _eventMixin2 = _interopRequireDefault(_eventMixin);

	var _itemCity = __webpack_require__(25);

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
	        key: "addCity",
	        value: function addCity(cityData) {
	            var elem = (0, _itemCity2.default)(cityData);
	            var div = document.createElement("div");

	            div.innerHTML = elem;

	            var newElem = div.firstElementChild;
	            var parent = this._elem.querySelector(SELECTORS.viewerInner);

	            parent.insertBefore(newElem, parent.firstElementChild);
	            this._setActiveClass(newElem);
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

	            // TODO
	            // поправить прокрутку в верх при удалени элемента на размере экрана от айпад в горизонте
	            setTimeout(function () {
	                if (!document.body.classList.contains("isLandscape")) {
	                    _this._elem.querySelector(SELECTORS.viewerInner).scrollTop = 0;
	                } else {
	                    window.scrollTo(0, 0);
	                }
	            }, 0);
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
	        }
	    }], [{
	        key: "EVENTS",
	        get: function get() {
	            return {
	                onSelectedCity: "onSelectedCity",
	                onDeleteCity: "onDeleteCity",
	                onDeletAllCities: "onDeletAllCities"
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (geoId, name) {var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv" + (" class=\"city-viewer__item\""+pug.attr("data-geoId", geoId, true, true)+" data-city-viewer-item") + "\u003E" + (pug.escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";}.call(this,"geoId" in locals_for_with?locals_for_with.geoId:typeof geoId!=="undefined"?geoId:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 26 */
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
	    str = str || __webpack_require__(27).readFileSync(filename, 'utf8')
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
/* 27 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml class=\"no-js\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"utf-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"initial-scale=1.0, width=device-width\"\u003E\n    \u003Cmeta name=\"description\" content=\"\"\u003E\n    \u003Cmeta name=\"keywords\" content=\"\"\u003E\n    \u003Cmeta name=\"author\" content=\"\"\u003E\n    \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Open+Sans:400,700\" type=\"text\u002Fcss\"\u003E\n    \u003Ctitle\u003Eweather app v0.0.1\n    \u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003C!-- wrapper--\u003E\n    \u003Cdiv class=\"wrapper\"\u003E\n      \u003C!-- maincontent--\u003E\n      \u003Cdiv class=\"maincontent\"\u003E\n        \u003C!-- menu--\u003E" + (null == (pug_interp = __webpack_require__(30).call(this, locals)) ? "" : pug_interp) + "\n        \u003C!-- END menu--\u003E\n        \u003C!-- content--\u003E" + (null == (pug_interp = __webpack_require__(33).call(this, locals)) ? "" : pug_interp) + "\n        \u003C!-- END content--\u003E\n      \u003C\u002Fdiv\u003E\n      \u003C!-- END maincontent--\u003E\n    \u003C\u002Fdiv\u003E\n    \u003C!-- END wrapper--\u003E\n    \u003Cdiv class=\"overflow\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"preloader\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"menu open\" data-menu\u003E\n  \u003Cdiv class=\"menu__inner\"\u003E\u003Ca class=\"menu__close\" href=\"#\"\u003E\u003C\u002Fa\u003E\n    \u003Cdiv class=\"menu__search\"\u003E" + (null == (pug_interp = __webpack_require__(31).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"menu__city-viewer\"\u003E" + (null == (pug_interp = __webpack_require__(32).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"menu__tongue\"\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"menu__overflow\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"search\" data-search\u003E\n  \u003Cdiv class=\"search__inner\"\u003E\n    \u003Cinput class=\"search__input\" type=\"text\" placeholder=\"start type city's name\"\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"city-viewer\" data-city-viewer\u003E\n  \u003Cdiv class=\"city-viewer__inner\" data-city-viewer-inner\u003E\n    \u003Cdiv class=\"city-viewer__item active\" data-geoId=\"6167865\" data-city-viewer-item\u003EToronto, Canada\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city-viewer__item\" data-geoId=\"5368361\" data-city-viewer-item\u003ELos Angeles, USA\u003Ca class=\"city-viewer__item-close\" href=\"#\" data-city-viewer-item-close\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"content\"\u003E\n  \u003Cdiv class=\"content__inner\"\u003E" + (null == (pug_interp = __webpack_require__(34).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(38).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"current-city\"\u003E\n  \u003Cdiv class=\"current-city__inner\"\u003E" + (null == (pug_interp = __webpack_require__(35).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"current-city__overlay\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"city\"\u003E\n  \u003Cdiv class=\"city__name\"\u003EToronto, Canada\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"city__descr\"\u003E\n    \u003Cdiv class=\"city__descr-main\"\u003E\n      \u003Cdiv class=\"city__weather\"\u003ECloudly\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"city__temp celcius\"\u003E18\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"city__descr-img-wrap\"\u003E\u003Cimg class=\"city__descr-img\" src=\"http:\u002F\u002Fopenweathermap.org\u002Fimg\u002Fw\u002F10d.png\"\u003E\n      \u003Cdiv class=\"city__date\"\u003E25 November\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(36).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(37).call(this, locals)) ? "" : pug_interp) + "\u003Ca class=\"city__more\" href=\"#\"\u003Emore details\u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"details\"\u003E\n  \u003Cdiv class=\"details__item\"\u003E\u003Cspan class=\"details__item-text\"\u003EFeels like\u003C\u002Fspan\u003E\u003Cspan class=\"details__num celcius\"\u003E14\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"details__item\"\u003E\u003Cspan class=\"details__item-text\"\u003EHumidity\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E55%\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"details__item\"\u003E\u003Cspan class=\"details__item-text\"\u003EWind speed\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E3\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"details__hidden\"\u003E\n    \u003Cdiv class=\"details__item\"\u003E\u003Cspan class=\"details__item-text\"\u003ESample\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E3\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"details__item\"\u003E\u003Cspan class=\"details__item-text\"\u003ESample\u003C\u002Fspan\u003E\u003Cspan class=\"details__num\"\u003E3\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"hourly\"\u003E\n  \u003Cdiv class=\"hourly__inner\"\u003E\n    \u003Cdiv class=\"hourly__slider\"\u003E\n      \u003Cdiv class=\"hourly__slide\"\u003E\n        \u003Cdiv class=\"hourly__slide-time\"\u003E21:00\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"hourly__slide-temp\"\u003E10\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide\"\u003E\n        \u003Cdiv class=\"hourly__slide-time\"\u003E21:00\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"hourly__slide-temp\"\u003E10\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide\"\u003E\n        \u003Cdiv class=\"hourly__slide-time\"\u003E21:00\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"hourly__slide-temp\"\u003E10\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide\"\u003E\n        \u003Cdiv class=\"hourly__slide-time\"\u003E21:00\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"hourly__slide-temp\"\u003E11\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"hourly__slide\"\u003E\n        \u003Cdiv class=\"hourly__slide-time\"\u003E21:00\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"hourly__slide-temp\"\u003E12\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"addition\"\u003E\n  \u003Cul class=\"addition__list\"\u003E\n    \u003Cli class=\"addition__item\"\u003E" + (null == (pug_interp = __webpack_require__(39).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fli\u003E\n    \u003Cli class=\"addition__item\"\u003E" + (null == (pug_interp = __webpack_require__(39).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fli\u003E\n    \u003Cli class=\"addition__item\"\u003E" + (null == (pug_interp = __webpack_require__(39).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fli\u003E\n    \u003Cli class=\"addition__item\"\u003E" + (null == (pug_interp = __webpack_require__(39).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fli\u003E\n    \u003Cli class=\"addition__item\"\u003E" + (null == (pug_interp = __webpack_require__(39).call(this, locals)) ? "" : pug_interp) + "\n    \u003C\u002Fli\u003E\n  \u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(26);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
	pug_html = pug_html + "\n\u003Cdiv class=\"nex-day\"\u003E\n  \u003Cdiv class=\"nex-day__img-wrapper\"\u003E\u003Cimg class=\"nex-day__img\" src=\"http:\u002F\u002Fopenweathermap.org\u002Fimg\u002Fw\u002F10d.png\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"nex-day__desc\"\u003E\n    \u003Cdiv class=\"nex-day__date\"\u003E4 Nov\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"nex-day__weather\"\u003ECloudly\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"nex-day__temp\"\u003E\n    \u003Cdiv class=\"nex-day__temp-day celcius\"\u003E12\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"nex-day__temp-hight celcius\"\u003E5\u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
	module.exports = template;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzP2hhc2g9M2MxZmFkNTIzMDZkMzY3MjlmYWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MxZmFkNTIzMDZkMzY3MjlmYWYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy8uL21haW4vX2luZGV4LnNjc3M/ZDY2MiIsIndlYnBhY2s6Ly8vLi9tYWluL19pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2ltZy9wcmVsb2FkZXIuZ2lmIiwid2VicGFjazovLy8uLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2NvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L21lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzcz82N2Q5Iiwid2VicGFjazovLy8uL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb21tb24vZXZlbnRNaXhpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3ZpZXcvY2l0eS12aWV3ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy92aWV3L2NpdHktdmlld2VyL2l0ZW0tY2l0eS5wdWciLCJ3ZWJwYWNrOi8vLy4uL34vcHVnL34vcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi92ZW5kb3JzL2hhbW1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYWluL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19tZW51LnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19zZWFyY2gucHVnIiwid2VicGFjazovLy8uL21haW4vbWFya3VwL19ibG9ja3MvX2NpdHktdmlld2VyLnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19jb250ZW50LnB1ZyIsIndlYnBhY2s6Ly8vLi9tYWluL21hcmt1cC9fYmxvY2tzL19jdXJyZW50LWNpdHkucHVnIiwid2VicGFjazovLy8uL21haW4vbWFya3VwL19ibG9ja3MvX2NpdHkucHVnIiwid2VicGFjazovLy8uL21haW4vbWFya3VwL19ibG9ja3MvX2RldGFpbHMucHVnIiwid2VicGFjazovLy8uL21haW4vbWFya3VwL19ibG9ja3MvX2hvdXJseS5wdWciLCJ3ZWJwYWNrOi8vLy4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fYWRkaXRpb24ucHVnIiwid2VicGFjazovLy8uL21haW4vbWFya3VwL19ibG9ja3MvX25leHQtZGF5LnB1ZyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2MxZmFkNTIzMDZkMzY3MjlmYWYiLCIndXNlIHN0cmljdCc7XG5cbi8qXG5zdHlsZXNcbiAqL1xuaW1wb3J0ICcuL19pbmRleC5zY3NzJztcblxuLypcbiBtYXJrdXBcbiAqL1xuaWYgKE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmVxdWlyZSgnLi9pbmRleC5wdWcnKTtcbn1cblxuLypcbiBsb2dpY1xuKi9cblxuXG5pbXBvcnQgXCIuLy4uL21vZHVsZXMvdmlldy9jb250ZW50XCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi8uLi9tb2R1bGVzL3ZpZXcvbWVudVwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi8uLi9tb2R1bGVzL3ZpZXcvc2VhcmNoXCI7XG5pbXBvcnQgQ2l0eVZpZXdlciBmcm9tIFwiLi8uLi9tb2R1bGVzL3ZpZXcvY2l0eS12aWV3ZXJcIjtcbmltcG9ydCAnLi8uLi92ZW5kb3JzL2hhbW1lcic7XG5cbmNvbnN0IG1haW5FbGVtID0gbmV3IEhhbW1lcihkb2N1bWVudC5ib2R5KTtcbmNvbnN0IG1lbnUgPSBuZXcgTWVudShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWVudV1cIikpO1xuY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2VhcmNoXVwiKSk7XG5jb25zdCBjaXR5Vmlld2VyID0gbmV3IENpdHlWaWV3ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNpdHktdmlld2VyXVwiKSk7XG5cblxubWFpbkVsZW0ub24oXCJzd2lwZWxlZnRcIiwgZnVuY3Rpb24oZXYpIHtcbiAgICBtZW51LmhpZGUoKTtcbn0pO1xuXG5tYWluRWxlbS5vbihcInN3aXBlcmlnaHRcIiwgZnVuY3Rpb24oZXYpIHtcbiAgICBtZW51LnNob3coKTtcbn0pO1xuXG5cblxuXG5zZWFyY2gub24oU2VhcmNoLkVWRU5UUy5vbkdldENpdHksIGZ1bmN0aW9uKGNpdHlEYXRhKSB7XG4gICAgY29uc29sZS5sb2coY2l0eURhdGEpO1xuICAgIGFsZXJ0KGAke2NpdHlEYXRhLm5hbWV9YCk7XG59KTtcblxuXG5cblxuY2l0eVZpZXdlci5vbihDaXR5Vmlld2VyLkVWRU5UUy5vblNlbGVjdGVkQ2l0eSwgZnVuY3Rpb24oZ2VvSWQpIHtcbiAgICBjb25zb2xlLmxvZyhnZW9JZCk7XG4gICAgLy8gYWxlcnQoXCJzZWxlY3QgXCIgKyBnZW9JZCk7XG59KTtcblxuY2l0eVZpZXdlci5vbihDaXR5Vmlld2VyLkVWRU5UUy5vbkRlbGV0ZUNpdHksIGZ1bmN0aW9uKGdlb0lkKSB7XG4gICAgY29uc29sZS5sb2coZ2VvSWQpO1xuICAgIC8vIGFsZXJ0KFwiZGVsZXRlIFwiICsgZ2VvSWQpO1xufSk7XG5cbmNpdHlWaWV3ZXIub24oQ2l0eVZpZXdlci5FVkVOVFMub25EZWxldEFsbENpdGllcywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCLQvtGH0LjRgdGC0LjRgtGMINCy0YHRjiDRgtC10LzQv9C10YDQsNGC0YPRgNGDXCIpO1xuICAgIC8vIGFsZXJ0KFwiZGVsZXRlIFwiICsgZ2VvSWQpO1xufSk7XG5cbmNpdHlWaWV3ZXIuYWRkQ2l0eSh7XG4gICAgbmFtZTogXCJPbXNrLCBSdXNzaWFcIixcbiAgICBnZW9JZDogMTIzNDVcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYWluL2luZGV4LmpzIiwidW5kZWZpbmVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9faW5kZXguc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL19pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9faW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL19pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgYW5kIElFIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZSxcXG4gKiAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXG4gKiBhbmQgRmlyZWZveC5cXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcblxcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIGZvY3VzZWQgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBhbHNvIGluIGFuXFxuICogYWN0aXZlL2hvdmVyIHN0YXRlLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxuYnV0dG9uIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXG4gKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXG4gKi9cXG5cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFjIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuLm1hYyBpbnB1dCxcXG4ubWFjIHRleHRhcmVhLFxcbi5tYWMgYnV0dG9uIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbmE6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLmNpdHlfX21vcmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkaXRpb25fX2xpc3Q6YmVmb3JlLFxcbi5kZXRhaWxzX19pdGVtOmJlZm9yZSxcXG4uY2l0eV9fZGVzY3I6YmVmb3JlLFxcbi5ob3VybHlfX3NsaWRlcjpiZWZvcmUsXFxuLmFkZGl0aW9uX19saXN0OmFmdGVyLFxcbi5kZXRhaWxzX19pdGVtOmFmdGVyLFxcbi5jaXR5X19kZXNjcjphZnRlcixcXG4uaG91cmx5X19zbGlkZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuXFxuLmFkZGl0aW9uX19saXN0OmFmdGVyLFxcbi5kZXRhaWxzX19pdGVtOmFmdGVyLFxcbi5jaXR5X19kZXNjcjphZnRlcixcXG4uaG91cmx5X19zbGlkZXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5kYXNoZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uZGFzaGVkOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmRhc2hlZCBzcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhc2hlZCBzcGFuOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBHYXJ1ZGEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG5cXG5odG1sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndyYXBwZXIsXFxuLm1haW5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWFpbmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuXFxuLmlzTGFuZHNjYXBlIGh0bWwsXFxuLmlzTGFuZHNjYXBlIGJvZHksXFxuLmlzTGFuZHNjYXBlIC53cmFwcGVyLFxcbi5pc0xhbmRzY2FwZSAubWFpbmNvbnRlbnQsXFxuLmlzTGFuZHNjYXBlIC5jb250ZW50LFxcbi5pc0xhbmRzY2FwZSAuY3VycmVudC1jaXR5LFxcbi5pc0xhbmRzY2FwZSAuYWRkaXRpb24sXFxuLmlzTGFuZHNjYXBlIC5tZW51X19zZWFyY2gsXFxuLmlzTGFuZHNjYXBlIC5tZW51X19jaXR5LXZpZXdlciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiBpbml0aWFsO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuaXNMYW5kc2NhcGUgaHRtbCxcXG4gIC5pc0xhbmRzY2FwZSBib2R5LFxcbiAgLmlzTGFuZHNjYXBlIC5tYWluY29udGVudCxcXG4gIC5pc0xhbmRzY2FwZSAud3JhcHBlcixcXG4gIC5pc0xhbmRzY2FwZSAuY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi5hZGRpdGlvbiB7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmFkZGl0aW9uIHtcXG4gICAgaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLmFkZGl0aW9uX19saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuM3M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5hZGRpdGlvbl9fbGlzdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuYWRkaXRpb25fX2xpc3Qge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmFkZGl0aW9uX19pdGVtIHtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmFkZGl0aW9uX19pdGVtOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmFkZGl0aW9uX19pdGVtIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGhlaWdodDogMzMuMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuYWRkaXRpb25fX2l0ZW06bnRoLWNoaWxkKDJuKSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpudGgtY2hpbGQoMm4gLSAxKSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5hZGRpdGlvbl9faXRlbSB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgfVxcblxcbiAgLmFkZGl0aW9uX19pdGVtOm50aC1jaGlsZCgybiAtIDEpLFxcbiAgLmFkZGl0aW9uX19pdGVtOm50aC1jaGlsZCgybikge1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5hZGRpdGlvbl9faXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gIH1cXG59XFxuXFxuLmNpdHktdmlld2VyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5LXZpZXdlciB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB9XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faW5uZXIge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0ge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbi5jaXR5LXZpZXdlcl9faXRlbS1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAgMTJweCAjNjY2O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNpdHktdmlld2VyX19pdGVtLWNsb3NlOmJlZm9yZSxcXG4uY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2U6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbn1cXG5cXG4uY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2U6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLmNpdHktdmlld2VyX19pdGVtLWNsb3NlOmFmdGVyIHtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGVudCAuY29udGVudF9faW5uZXIge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbiAgfVxcbn1cXG5cXG4uY3VycmVudC1jaXR5IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuM3M7XFxufVxcblxcbi5jdXJyZW50LWNpdHkuc21hbGwge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNtYWxsIC5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jdXJyZW50LWNpdHkuc21hbGwgLmNpdHlfX2Rlc2NyLWltZyB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNtYWxsIC5jaXR5X19kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5zaG93LW1vcmUtZGV0YWlscyB7XFxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5zaG93LW1vcmUtZGV0YWlscyAuZGV0YWlscyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5zaG93LW1vcmUtZGV0YWlscyAuZGV0YWlsc19faXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jdXJyZW50LWNpdHkuc2hvdy1tb3JlLWRldGFpbHMgLmRldGFpbHNfX2l0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4uY3VycmVudC1jaXR5LnNob3ctbW9yZS1kZXRhaWxzIC5kZXRhaWxzX19oaWRkZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jdXJyZW50LWNpdHkuc2hvdy1tb3JlLWRldGFpbHMgLmN1cnJlbnQtY2l0eV9fb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmN1cnJlbnQtY2l0eS5zaG93LW1vcmUtZGV0YWlscyAuaG91cmx5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY3VycmVudC1jaXR5IHtcXG4gICAgaGVpZ2h0OiA1NSUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLmN1cnJlbnQtY2l0eV9faW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogODtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xcbn1cXG5cXG4uY3VycmVudC1jaXR5X19vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAuM3M7XFxufVxcblxcbi5tZW51Lm9wZW4ge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm1lbnUub3BlbiAubWVudV9fb3ZlcmZsb3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5tZW51IHtcXG4gICAgd2lkdGg6IDQ0MHB4O1xcbiAgICBsZWZ0OiAtNDQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZW51IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4ubWVudV9faW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubWVudV9faW5uZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICB9XFxufVxcblxcbi5tZW51X19jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAgMTJweCAjNjY2O1xcbn1cXG5cXG4ubWVudV9fY2xvc2U6YmVmb3JlLFxcbi5tZW51X19jbG9zZTphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxufVxcblxcbi5tZW51X19jbG9zZTpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4ubWVudV9fY2xvc2U6YWZ0ZXIge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnVfX2Nsb3NlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLm1lbnVfX292ZXJmbG93IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnVfX292ZXJmbG93IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG5kaXYubWVudV9fc2VhcmNoIHtcXG4gIGhlaWdodDogMjAlO1xcbiAgcGFkZGluZy10b3A6IDY1cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIGRpdi5tZW51X19zZWFyY2gge1xcbiAgICBoZWlnaHQ6IDIwJSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4ubWVudV9fY2l0eS12aWV3ZXIge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm1lbnVfX2NpdHktdmlld2VyIHtcXG4gICAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLm1lbnVfX3Rvbmd1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICByaWdodDogLTZweDtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5tZW51X190b25ndWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cXG4uc2VhcmNoIC50cC1hY19faXRlbSB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoX19pbm5lciB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcXG59XFxuXFxuLnNlYXJjaF9faW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ub3ZlcmZsb3cge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLm92ZXJmbG93LnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5wcmVsb2FkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCIuLy4uL2ltZy9wcmVsb2FkZXIuZ2lmXCIpICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5wcmVsb2FkZXIuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICB9XFxufVxcblxcbi5kZXRhaWxzX19pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5kZXRhaWxzX19pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuLmRldGFpbHNfX2l0ZW0tdGV4dCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5kZXRhaWxzX19udW0ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZGV0YWlsc19faGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNpdHkge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX25hbWUge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19uYW1lIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5X19uYW1lIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB9XFxufVxcblxcbi5jaXR5X19kZXNjciB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fZGVzY3Ige1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fZGVzY3Ige1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fZGVzY3ItbWFpbiB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmNpdHlfX3dlYXRoZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2l0eV9fd2VhdGhlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5X193ZWF0aGVyIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzhweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX3RlbXAge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X190ZW1wIHtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogODJweDtcXG4gIH1cXG5cXG4gIC5jaXR5X190ZW1wLmNlbGNpdXM6YWZ0ZXIge1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2l0eV9fdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYycHg7XFxuICB9XFxufVxcblxcbi5jaXR5X19kZXNjci1pbWctd3JhcCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNpdHlfX2Rlc2NyLWltZyB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19kZXNjci1pbWcge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5jaXR5X19kZXNjci1pbWcge1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgfVxcbn1cXG5cXG4uY2l0eV9fZGF0ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19kYXRlIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gIH1cXG59XFxuXFxuLmNpdHlfX21vcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jaXR5X19tb3JlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gIH1cXG59XFxuXFxuLmhvdXJseSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5ob3VybHkge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgfVxcbn1cXG5cXG4uaG91cmx5X19pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiA0MXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaG91cmx5X19pbm5lciB7XFxuICAgIGhlaWdodDogNTFweDtcXG4gIH1cXG59XFxuXFxuLmhvdXJseV9fc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMjAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbi5ob3VybHlfX3NsaWRlci5zbGlkZSB7XFxuICBsZWZ0OiAtMTAwJTtcXG59XFxuXFxuLmhvdXJseV9fc2xpZGUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTIuNSU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5ob3VybHlfX3NsaWRlOmZpcnN0LWNoaWxkLFxcbi5ob3VybHlfX3NsaWRlOm50aC1jaGlsZCg1KSB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ob3VybHlfX3NsaWRlLXRpbWUge1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5uZXgtZGF5IHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubmV4LWRheSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB9XFxufVxcblxcbi5uZXgtZGF5X19pbWctd3JhcHBlciB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiA3NXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubmV4LWRheV9faW1nLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcblxcbi5uZXgtZGF5X19pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubmV4LWRheV9fZGVzYyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5leC1kYXlfX2Rlc2Mge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAubmV4LWRheV9fZGVzYyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcblxcbi5uZXgtZGF5X19kYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uZXgtZGF5X19kYXRlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gIH1cXG59XFxuXFxuLm5leC1kYXlfX3dlYXRoZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmV4LWRheV9fdGVtcCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLm5leC1kYXlfX3RlbXAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLm5leC1kYXlfX3RlbXAtZGF5IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jZWxjaXVzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNlbGNpdXM6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXFwyREFcXFwiO1xcbiAgdG9wOiAtNnB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcblxcbi5zZWFyY2ggLnRwLWFjX19pdGVtIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zZWFyY2hfX2lubmVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VhcmNoX19pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vY3NzLWxvYWRlciEuLi9+L2F1dG9wcmVmaXhlci1sb2FkZXI/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4uL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4uL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vbWFpbi9faW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3ByZWxvYWRlci5naWY/aGFzaD03MjcwMWJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ltZy9wcmVsb2FkZXIuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLy8gZm9yIGNvbnRlbnRcclxuZnVuY3Rpb24gaXNMYW5kc2NhcGUoZWxlbSkge1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpc0xhbmRzY2FwZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiaXNMYW5kc2NhcGVcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpc0xhbmRzY2FwZS5iaW5kKHdpbmRvdywgZG9jdW1lbnQuYm9keSkpO1xyXG5pc0xhbmRzY2FwZShkb2N1bWVudC5ib2R5KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvY29udGVudC9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW0pIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcclxuXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fbWFuYWdlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBfbWFuYWdlcihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5tZW51X19jbG9zZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5tZW51X19vdmVyZmxvd1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvbWVudS9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFRlbGVwb3J0QXV0b2NvbXBsZXRlIGZyb20gXCIuLy4uLy4uLy4uL3ZlbmRvcnMvYXV0b2NvbXBsZXRlL2Rpc3QvdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5qc1wiO1xyXG5pbXBvcnQgIFwiLi8uLi8uLi8uLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXCI7XHJcbmltcG9ydCBldmVudE1peGluIGZyb20gXCIuLy4uLy4uL2NvbW1vbi9ldmVudE1peGluXCI7XHJcblxyXG5jbGFzcyBTZWFyY2gge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtLmNsYXNzTmFtZX1fX2lucHV0YCk7XHJcblxyXG4gICAgICAgIFRlbGVwb3J0QXV0b2NvbXBsZXRlLmluaXQoaW5wdXQpLm9uKCdjaGFuZ2UnLCBjaXR5RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRDaXR5RGF0YShjaXR5RGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NlbmRDaXR5RGF0YShjaXR5RGF0YSkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkdldENpdHksIGNpdHlEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEVWRU5UUyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJvbkdldENpdHlcIjogXCJvbkdldENpdHlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZm9yICh2YXIga2V5IGluIGV2ZW50TWl4aW4pIHtcclxuICAgIFNlYXJjaC5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZHVsZXMvdmlldy9zZWFyY2gvaW5kZXguanMiLCIvKiEgdGVsZXBvcnQtYXV0b2NvbXBsZXRlIC0gdjAuMy4xIHwgaHR0cHM6Ly9naXRodWIuY29tL3RlbGVwb3J0L2F1dG9jb21wbGV0ZSNyZWFkbWUgfCBNSVQgKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIHQ7dD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsdC5UZWxlcG9ydEF1dG9jb21wbGV0ZT1lKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBlKHQsbixpKXtmdW5jdGlvbiByKHMsYSl7aWYoIW5bc10pe2lmKCF0W3NdKXt2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFhJiZ1KXJldHVybiB1KHMsITApO2lmKG8pcmV0dXJuIG8ocywhMCk7dmFyIGM9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitzK1wiJ1wiKTt0aHJvdyBjLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsY312YXIgbD1uW3NdPXtleHBvcnRzOnt9fTt0W3NdWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbc11bMV1bZV07cmV0dXJuIHIobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixpKX1yZXR1cm4gbltzXS5leHBvcnRzfWZvcih2YXIgbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLHM9MDtzPGkubGVuZ3RoO3MrKylyKGlbc10pO3JldHVybiByfSh7MTpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpLmVudW1lcmFibGU9aS5lbnVtZXJhYmxlfHwhMSxpLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBpJiYoaS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaS5rZXksaSl9fXJldHVybiBmdW5jdGlvbih0LG4saSl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksaSYmZSh0LGkpLHR9fSgpO2UoXCJjbGFzc2xpc3QtcG9seWZpbGxcIiksZShcImVsZW1lbnQtY2xvc2VzdFwiKTt2YXIgcz1lKFwiaGFsZnJlZFwiKSxhPWkocyksdT1lKFwibWluaXZlbnRzXCIpLGM9aSh1KSxsPWUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSxmPWkobCksZD1lKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2ZpbmRcIikscD1pKGQpLGg9ZShcImNvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlXCIpLHk9aShoKSx2PWUoXCJkZWJvdW5jZVwiKSxtPWkodiksZz17QkFDSzo4LFRBQjo5LEVOVEVSOjEzLFVQOjM4LERPV046NDB9LGI9JzxkaXYgY2xhc3M9XCJ0cC1hdXRvY29tcGxldGVcIj48dWwgY2xhc3M9XCJ0cC1hY19fbGlzdFwiPjwvdWw+PC9kaXY+JyxfPVwidHAtYWNfX2lucHV0XCIseD1mdW5jdGlvbihlKXtyZXR1cm4nPGxpIGNsYXNzPVwidHAtYWNfX2l0ZW1cIj4nK2UrXCI8L2xpPlwifSxrPSc8bGkgY2xhc3M9XCJ0cC1hY19faXRlbSBuby1yZXN1bHRzXCI+Tm8gbWF0Y2hlczwvbGk+JywkPSc8bGkgY2xhc3M9XCJ0cC1hY19faXRlbSBnZW9sb2NhdGVcIj5EZXRlY3QgbXkgY3VycmVudCBsb2NhdGlvbjwvbGk+Jyx3PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLndyYXBNYXRjaGVzKGUudGl0bGUpfTtIVE1MRWxlbWVudC5wcm90b3R5cGUub249SFRNTEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsSFRNTEVsZW1lbnQucHJvdG90eXBlLm9mZj1IVE1MRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjt2YXIgaj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXSxpPW4uZWwsbz12b2lkIDA9PT1pP251bGw6aSxzPW4udmFsdWUsYT1uLm1heEl0ZW1zLHU9dm9pZCAwPT09YT8xMDphLGw9bi5pdGVtVGVtcGxhdGUsZD12b2lkIDA9PT1sP3c6bCxwPW4uZ2VvTG9jYXRlLGg9dm9pZCAwPT09cD8hMDpwLHk9bi5hcGlSb290LHY9dm9pZCAwPT09eT9cImh0dHBzOi8vYXBpLnRlbGVwb3J0Lm9yZy9hcGlcIjp5LGc9bi5hcGlWZXJzaW9uLGI9dm9pZCAwPT09Zz8xOmcsXz1uLmVtYmVkcyx4PXZvaWQgMD09PV8/XCJjaXR5OmNvdW50cnksY2l0eTphZG1pbjFfZGl2aXNpb24sY2l0eTp0aW1lem9uZS90ejpvZmZzZXRzLW5vdyxjaXR5OnVyYmFuX2FyZWFcIjpfO3IodGhpcyxlKSwoMCxjW1wiZGVmYXVsdFwiXSkodGhpcyk7dmFyIGs9XCJzdHJpbmdcIj09dHlwZW9mIG8/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvKTpvO3JldHVybiB0aGlzLnNldHVwSW5wdXQoayksKDAsZltcImRlZmF1bHRcIl0pKHRoaXMse21heEl0ZW1zOnUsZ2VvTG9jYXRlOmgsYXBpUm9vdDp2LGFwaVZlcnNpb246YixpdGVtVGVtcGxhdGU6ZCxlbWJlZHM6eCxyZXN1bHRzOltdLF9hY3RpdmVJbmRleDowLF9jYWNoZTp7fSxfcXVlcnk6dGhpcy5lbC52YWx1ZSx2YWx1ZTpzfSksdGhpcy52YWx1ZSYmdGhpcy52YWx1ZS50aXRsZT90aGlzLnF1ZXJ5PXRoaXMudmFsdWUudGl0bGU6dGhpcy5xdWVyeSYmdGhpcy5mZXRjaFJlc3VsdHMoZnVuY3Rpb24oKXt0LnZhbHVlPXQuZ2V0UmVzdWx0QnlUaXRsZSh0LnF1ZXJ5KSx0LmVtaXQoXCJjaGFuZ2VcIix0LnZhbHVlKX0pLHRoaXMuZ2V0Q2l0aWVzPSgwLG1bXCJkZWZhdWx0XCJdKSh0aGlzLmdldENpdGllcywyMDApLHRoaXN9cmV0dXJuIG8oZSxbe2tleTpcInF1ZXJ5XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3F1ZXJ5fSxzZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10aGlzLl9xdWVyeT9lOih0aGlzLl9xdWVyeT1lLHRoaXMuZWwudmFsdWU9ZSx2b2lkIHRoaXMuZW1pdChcInF1ZXJ5Y2hhbmdlXCIsZSkpfX0se2tleTpcImFjdGl2ZUluZGV4XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FjdGl2ZUluZGV4fSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5saXN0LmNoaWxkTm9kZXNbdGhpcy5fYWN0aXZlSW5kZXhdO3QmJnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKSx0aGlzLl9hY3RpdmVJbmRleD1lO3ZhciBuPXRoaXMubGlzdC5jaGlsZE5vZGVzW2VdO24mJm4uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKX19LHtrZXk6XCJsb2FkaW5nXCIsc2V0OmZ1bmN0aW9uKGUpe3RoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzcGlubmVyXCIsZSl9fV0pLG8oZSxbe2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuZWwub2ZmKFwiaW5wdXRcIix0aGlzLm9uaW5wdXQpLHRoaXMuZWwub2ZmKFwia2V5ZG93blwiLHRoaXMub25rZXlkb3duKSx0aGlzLmVsLm9mZihcImZvY3VzXCIsdGhpcy5vbmZvY3VzKSx0aGlzLmVsLm9mZihcImJsdXJcIix0aGlzLm9uYmx1ciksdGhpcy5lbC5vZmYoXCJjbGlja1wiLHRoaXMub25jbGljayksdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKF8pO3ZhciBlPXRoaXMuY29udGFpbmVyLnBhcmVudE5vZGU7ZS5yZXBsYWNlQ2hpbGQodGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpLHRoaXMuY29udGFpbmVyKX19LHtrZXk6XCJjbGVhclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yZXN1bHRzPVtdLHRoaXMuc2VsZWN0QnlJbmRleCgwKX19LHtrZXk6XCJzZXR1cElucHV0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoIShlJiZlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbGVtZW50IGdpdmVuXCIpO2UuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIixiKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImNvbnRhaW5lclwiLHt2YWx1ZTplLnByZXZpb3VzU2libGluZ30pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwibGlzdFwiLHt2YWx1ZTp0aGlzLmNvbnRhaW5lci5maXJzdENoaWxkfSk7dmFyIHQ9dGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSx0aGlzLmxpc3QpO3QuY2xhc3NMaXN0LmFkZChfKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImVsXCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLHRoaXMuZWwub24oXCJpbnB1dFwiLHRoaXMub25pbnB1dC5iaW5kKHRoaXMpKSx0aGlzLmVsLm9uKFwia2V5ZG93blwiLHRoaXMub25rZXlkb3duLmJpbmQodGhpcykpLHRoaXMuZWwub24oXCJmb2N1c1wiLHRoaXMub25mb2N1cy5iaW5kKHRoaXMpKSx0aGlzLmVsLm9uKFwiYmx1clwiLHRoaXMub25ibHVyLmJpbmQodGhpcykpLHRoaXMuZWwub24oXCJjbGlja1wiLHRoaXMub25jbGljay5iaW5kKHRoaXMpKSx0aGlzLmxpc3Qub24oXCJtb3VzZWRvd25cIix0aGlzLm9ubGlzdGNsaWNrLmJpbmQodGhpcykpfX0se2tleTpcIm9ubGlzdGNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9W10uaW5kZXhPZi5jYWxsKHRoaXMubGlzdC5jaGlsZHJlbixlLnRhcmdldC5jbG9zZXN0KFwiLnRwLWFjX19pdGVtXCIpKTt0aGlzLnNlbGVjdEJ5SW5kZXgodCl9fSx7a2V5Olwib25jbGlja1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5lbC5zZWxlY3QoKX19LHtrZXk6XCJvbmZvY3VzXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlbmRlckxpc3QoKX19LHtrZXk6XCJvbmJsdXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubGlzdC5pbm5lckhUTUw9XCJcIn19LHtrZXk6XCJvbmlucHV0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuX3F1ZXJ5PXRoaXMuZWwudmFsdWUsdGhpcy5mZXRjaFJlc3VsdHMoZnVuY3Rpb24oKXtyZXR1cm4gZS5yZW5kZXJMaXN0KCl9KX19LHtrZXk6XCJvbmtleWRvd25cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmtleUNvZGU7c3dpdGNoKC0xIT09W2cuVVAsZy5ET1dOXS5pbmRleE9mKHQpJiZlLnByZXZlbnREZWZhdWx0KCksdCl7Y2FzZSBnLkJBQ0s6KHRoaXMudmFsdWV8fDE9PT10aGlzLnF1ZXJ5Lmxlbmd0aCkmJnRoaXMuY2xlYXIoKTticmVhaztjYXNlIGcuRU5URVI6IXRoaXMudmFsdWUmJnRoaXMucXVlcnkmJmUucHJldmVudERlZmF1bHQoKSx0aGlzLnNlbGVjdEJ5SW5kZXgodGhpcy5hY3RpdmVJbmRleCk7YnJlYWs7Y2FzZSBnLlRBQjp0aGlzLnZhbHVlfHx0aGlzLnNlbGVjdEJ5SW5kZXgodGhpcy5hY3RpdmVJbmRleCk7YnJlYWs7Y2FzZSBnLlVQOnRoaXMuYWN0aXZlSW5kZXg9TWF0aC5tYXgoMCx0aGlzLmFjdGl2ZUluZGV4LTEpO2JyZWFrO2Nhc2UgZy5ET1dOOnRoaXMuYWN0aXZlSW5kZXg9TWF0aC5taW4odGhpcy5yZXN1bHRzLmxlbmd0aC0xLHRoaXMuYWN0aXZlSW5kZXgrMSl9fX0se2tleTpcInNlbGVjdEJ5SW5kZXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmFjdGl2ZUluZGV4PWU7dmFyIHQ9dGhpcy52YWx1ZTt0aGlzLnZhbHVlPXRoaXMucmVzdWx0c1tlXXx8bnVsbDt2YXIgbj10aGlzLmxpc3QuZmlyc3RDaGlsZCYmdGhpcy5saXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2VvbG9jYXRlXCIpO24mJnRoaXMuY3VycmVudExvY2F0aW9uKCksdD09PXRoaXMudmFsdWV8fG58fHRoaXMuZW1pdChcImNoYW5nZVwiLHRoaXMudmFsdWUpLHRoaXMubGlzdC5pbm5lckhUTUw9XCJcIix0aGlzLnF1ZXJ5PXRoaXMudmFsdWU/dGhpcy52YWx1ZS50aXRsZTpcIlwifX0se2tleTpcIndyYXBNYXRjaGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/XCJcIjphcmd1bWVudHNbMF0sdD1lO3JldHVybiB0aGlzLnF1ZXJ5LnNwbGl0KC9bXFwsXFxzXSsvKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuISFlfSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1uZXcgUmVnRXhwKCgwLHlbXCJkZWZhdWx0XCJdKShlKStcIig/IVtePF0qPnxbXjw+XSo8LylcIixcImdpXCIpO3Q9dC5yZXBsYWNlKG4sXCI8c3Bhbj4kJjwvc3Bhbj5cIil9KSx0fX0se2tleTpcInJlbmRlckxpc3RcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPD0wfHx2b2lkIDA9PT1hcmd1bWVudHNbMF0/e306YXJndW1lbnRzWzBdLG49dC5nZW9Mb2NhdGUsaT12b2lkIDA9PT1uP3RoaXMuZ2VvTG9jYXRlOm4scj10aGlzLnJlc3VsdHMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB4KGUuaXRlbVRlbXBsYXRlKHQpKX0pLnNsaWNlKDAsdGhpcy5tYXhJdGVtcykuam9pbihcIlwiKTtyfHxcIlwiPT09dGhpcy5xdWVyeXx8dGhpcy52YWx1ZXx8KHI9ayksXCJcIj09PXRoaXMucXVlcnkmJmkmJihyPSQpLHRoaXMubGlzdC5pbm5lckhUTUw9cix0aGlzLmFjdGl2ZUluZGV4PTB9fSx7a2V5OlwiZ2V0UmVzdWx0QnlUaXRsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlc3VsdHMmJmU/KDAscFtcImRlZmF1bHRcIl0pKHRoaXMucmVzdWx0cyxmdW5jdGlvbih0KXtyZXR1cm4tMSE9PXQudGl0bGUuaW5kZXhPZihlKX0pOm51bGx9fSx7a2V5OlwiZmV0Y2hSZXN1bHRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP2Z1bmN0aW9uKCl7fTphcmd1bWVudHNbMF07dGhpcy5yZXEmJnRoaXMucmVxLmFib3J0KCk7dmFyIG49dGhpcy5fY2FjaGVbdGhpcy5xdWVyeV07cmV0dXJuIG4/KHRoaXMucmVzdWx0cz1uLHQoKSk6KHRoaXMucmVxPXRoaXMuZ2V0Q2l0aWVzKGZ1bmN0aW9uKG4pe2UucmVzdWx0cz1lLl9jYWNoZVtlLnF1ZXJ5XT1uLHQoKSxlLmxvYWRpbmc9ITF9KSx2b2lkKHRoaXMubG9hZGluZz0hMCkpfX0se2tleTpcImN1cnJlbnRMb2NhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PW5ldyBYTUxIdHRwUmVxdWVzdCxuPVwibG9jYXRpb246bmVhcmVzdC1jaXRpZXMvbG9jYXRpb246bmVhcmVzdC1jaXR5L1wiKyh0aGlzLmVtYmVkcz9cIntcIit0aGlzLmVtYmVkcytcIn1cIjpcIlwiKTt0aGlzLmxvYWRpbmc9ITAsdGhpcy5vbGRQbGFjZWhvbGRlcj10aGlzLmVsLnBsYWNlaG9sZGVyLHRoaXMuZWwucGxhY2Vob2xkZXI9XCJEZXRlY3RpbmcgbG9jYXRpb24uLi5cIixuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKGkpe3ZhciByPWkuY29vcmRzO3Qub3BlbihcIkdFVFwiLGUuYXBpUm9vdCtcIi9sb2NhdGlvbnMvXCIrci5sYXRpdHVkZStcIixcIityLmxvbmdpdHVkZStcIi8/ZW1iZWQ9XCIrbiksdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi92bmQudGVsZXBvcnQudlwiK2UuYXBpVmVyc2lvbitcIitqc29uXCIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3JldHVybiBlLnBhcnNlTG9jYXRpb24oSlNPTi5wYXJzZSh0LnJlc3BvbnNlKSl9KSx0LnNlbmQoKX0sZnVuY3Rpb24odCl7dmFyIG49dC5tZXNzYWdlO2UubG9hZGluZz0hMSxlLmVsLnBsYWNlaG9sZGVyPW4sc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiBlLmVsLnBsYWNlaG9sZGVyPWUub2xkUGxhY2Vob2xkZXJ9LDNlMyl9LHt0aW1lb3V0OjVlM30pfX0se2tleTpcInBhcnNlTG9jYXRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hW1wiZGVmYXVsdFwiXS5wYXJzZShlKSxuPXQuZW1iZWRkZWRBcnJheShcImxvY2F0aW9uOm5lYXJlc3QtY2l0aWVzXCIpWzBdO24mJih0aGlzLnJlc3VsdHM9W3RoaXMucGFyc2VDaXR5KG4pXSxcIm5vcGlja1wiPT09dGhpcy5nZW9Mb2NhdGU/KHRoaXMuZWwuZm9jdXMoKSx0aGlzLnJlbmRlckxpc3Qoe2dlb0xvY2F0ZTohMX0pKTp0aGlzLnNlbGVjdEJ5SW5kZXgoMCkpLHRoaXMubG9hZGluZz0hMSx0aGlzLmVsLnBsYWNlaG9sZGVyPXRoaXMub2xkUGxhY2Vob2xkZXJ9fSx7a2V5OlwiZ2V0Q2l0aWVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZighdGhpcy5xdWVyeSlyZXR1cm4gZShbXSk7dmFyIG49XCJjaXR5OnNlYXJjaC1yZXN1bHRzL2NpdHk6aXRlbS9cIisodGhpcy5lbWJlZHM/XCJ7XCIrdGhpcy5lbWJlZHMrXCJ9XCI6XCJcIiksaT1uZXcgWE1MSHR0cFJlcXVlc3Q7cmV0dXJuIGkub3BlbihcIkdFVFwiLHRoaXMuYXBpUm9vdCtcIi9jaXRpZXMvP3NlYXJjaD1cIit0aGlzLnF1ZXJ5K1wiJmVtYmVkPVwiK24rXCImbGltaXQ9XCIrdGhpcy5tYXhJdGVtcyksaS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi92bmQudGVsZXBvcnQudlwiK3RoaXMuYXBpVmVyc2lvbitcIitqc29uXCIpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3ZhciBuPWFbXCJkZWZhdWx0XCJdLnBhcnNlKEpTT04ucGFyc2UoaS5yZXNwb25zZSkpLmVtYmVkZGVkQXJyYXkoXCJjaXR5OnNlYXJjaC1yZXN1bHRzXCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdC5wYXJzZUNpdHkoZSl9KTtlKG4pfSksaS5zZW5kKCksaX19LHtrZXk6XCJwYXJzZUNpdHlcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLmVtYmVkZGVkKFwibG9jYXRpb246bmVhcmVzdC1jaXR5XCIpfHxlLmVtYmVkZGVkKFwiY2l0eTppdGVtXCIpO3QuY291bnRyeT10LmVtYmVkZGVkKFwiY2l0eTpjb3VudHJ5XCIpLHQuYWRtaW4xX2RpdmlzaW9uPXQuZW1iZWRkZWQoXCJjaXR5OmFkbWluMV9kaXZpc2lvblwiKSx0LnRpbWV6b25lPXQuZW1iZWRkZWQoXCJjaXR5OnRpbWV6b25lXCIpLHQudXJiYW5fYXJlYT10LmVtYmVkZGVkKFwiY2l0eTp1cmJhbl9hcmVhXCIpO3ZhciBuPXQuZnVsbF9uYW1lLGk9dC5uYW1lLHI9dC5nZW9uYW1lX2lkLG89dC5wb3B1bGF0aW9uLHM9dC5sb2NhdGlvbi5sYXRsb24sYT1zLmxhdGl0dWRlLHU9cy5sb25naXR1ZGUsYz1lLm1hdGNoaW5nX2Z1bGxfbmFtZSxsPXZvaWQgMD09PWM/bjpjLGQ9e3RpdGxlOmwsbmFtZTppLGdlb25hbWVJZDpyLGxhdGl0dWRlOmEsbG9uZ2l0dWRlOnUscG9wdWxhdGlvbjpvfTtpZih0LmNvdW50cnkmJigwLGZbXCJkZWZhdWx0XCJdKShkLHtjb3VudHJ5OnQuY291bnRyeS5uYW1lfSksdC5hZG1pbjFfZGl2aXNpb24pe3ZhciBwPXQuYWRtaW4xX2RpdmlzaW9uLGg9cC5uYW1lLHk9cC5nZW9uYW1lc19hZG1pbjFfY29kZTsoMCxmW1wiZGVmYXVsdFwiXSkoZCx7YWRtaW4xRGl2aXNpb246aCxhZG1pbjFEaXZpc2lvbkNvZGU6eX0pfWlmKHQudGltZXpvbmUpe3ZhciB2PXQudGltZXpvbmUuZW1iZWRkZWQoXCJ0ejpvZmZzZXRzLW5vd1wiKTsoMCxmW1wiZGVmYXVsdFwiXSkoZCx7dHpPZmZzZXRNaW51dGVzOnYudG90YWxfb2Zmc2V0X21pbn0pfWlmKHQudXJiYW5fYXJlYSl7dmFyIG09dC51cmJhbl9hcmVhLGc9bS5zbHVnLGI9bS5uYW1lLF89bS51YV9pZCx4PW0udGVsZXBvcnRfY2l0eV91cmw7KDAsZltcImRlZmF1bHRcIl0pKGQse3VhTmFtZTpiLHVhSWQ6Xyx1YUNpdHlVcmw6eCx1YVNsdWc6Z30pfXJldHVybiBkfX1dLFt7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg8PTF8fHZvaWQgMD09PWFyZ3VtZW50c1sxXT97fTphcmd1bWVudHNbMV0saT1cInN0cmluZ1wiPT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ/KDAsZltcImRlZmF1bHRcIl0pKG4se2VsOnR9KTp0O3JldHVybiBuZXcgZShpKX19XSksZX0oKTtuW1wiZGVmYXVsdFwiXT1qLHQuZXhwb3J0cz1uW1wiZGVmYXVsdFwiXX0se1wiY2xhc3NsaXN0LXBvbHlmaWxsXCI6MixcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9maW5kXCI6MyxcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCI6NCxcImNvcmUtanMvbGlicmFyeS9mbi9yZWdleHAvZXNjYXBlXCI6NSxkZWJvdW5jZTozMyxcImVsZW1lbnQtY2xvc2VzdFwiOjM0LGhhbGZyZWQ6MzUsbWluaXZlbnRzOjM5fV0sMjpbZnVuY3Rpb24oZSx0LG4pe1wiZG9jdW1lbnRcImluIHdpbmRvdy5zZWxmJiYoXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpPyFmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO2lmKGUuY2xhc3NMaXN0LmFkZChcImMxXCIsXCJjMlwiKSwhZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSl7dmFyIHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9RE9NVG9rZW5MaXN0LnByb3RvdHlwZVtlXTtET01Ub2tlbkxpc3QucHJvdG90eXBlW2VdPWZ1bmN0aW9uKGUpe3ZhciBuLGk9YXJndW1lbnRzLmxlbmd0aDtmb3Iobj0wO2k+bjtuKyspZT1hcmd1bWVudHNbbl0sdC5jYWxsKHRoaXMsZSl9fTt0KFwiYWRkXCIpLHQoXCJyZW1vdmVcIil9aWYoZS5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwhMSksZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSl7dmFyIG49RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMSBpbiBhcmd1bWVudHMmJiF0aGlzLmNvbnRhaW5zKGUpPT0hdD90Om4uY2FsbCh0aGlzLGUpfX1lPW51bGx9KCk6IWZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2lmKFwiRWxlbWVudFwiaW4gZSl7dmFyIHQ9XCJjbGFzc0xpc3RcIixuPVwicHJvdG90eXBlXCIsaT1lLkVsZW1lbnRbbl0scj1PYmplY3Qsbz1TdHJpbmdbbl0udHJpbXx8ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxzPUFycmF5W25dLmluZGV4T2Z8fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49dGhpcy5sZW5ndGg7bj50O3QrKylpZih0IGluIHRoaXMmJnRoaXNbdF09PT1lKXJldHVybiB0O3JldHVybi0xfSxhPWZ1bmN0aW9uKGUsdCl7dGhpcy5uYW1lPWUsdGhpcy5jb2RlPURPTUV4Y2VwdGlvbltlXSx0aGlzLm1lc3NhZ2U9dH0sdT1mdW5jdGlvbihlLHQpe2lmKFwiXCI9PT10KXRocm93IG5ldyBhKFwiU1lOVEFYX0VSUlwiLFwiQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkXCIpO2lmKC9cXHMvLnRlc3QodCkpdGhyb3cgbmV3IGEoXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIixcIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwiKTtyZXR1cm4gcy5jYWxsKGUsdCl9LGM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW8uY2FsbChlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKSxuPXQ/dC5zcGxpdCgvXFxzKy8pOltdLGk9MCxyPW4ubGVuZ3RoO3I+aTtpKyspdGhpcy5wdXNoKG5baV0pO3RoaXMuX3VwZGF0ZUNsYXNzTmFtZT1mdW5jdGlvbigpe2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0aGlzLnRvU3RyaW5nKCkpfX0sbD1jW25dPVtdLGY9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGModGhpcyl9O2lmKGFbbl09RXJyb3Jbbl0sbC5pdGVtPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzW2VdfHxudWxsfSxsLmNvbnRhaW5zPWZ1bmN0aW9uKGUpe3JldHVybiBlKz1cIlwiLC0xIT09dSh0aGlzLGUpfSxsLmFkZD1mdW5jdGlvbigpe3ZhciBlLHQ9YXJndW1lbnRzLG49MCxpPXQubGVuZ3RoLHI9ITE7ZG8gZT10W25dK1wiXCIsLTE9PT11KHRoaXMsZSkmJih0aGlzLnB1c2goZSkscj0hMCk7d2hpbGUoKytuPGkpO3ImJnRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpfSxsLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBlLHQsbj1hcmd1bWVudHMsaT0wLHI9bi5sZW5ndGgsbz0hMTtkbyBmb3IoZT1uW2ldK1wiXCIsdD11KHRoaXMsZSk7LTEhPT10Oyl0aGlzLnNwbGljZSh0LDEpLG89ITAsdD11KHRoaXMsZSk7d2hpbGUoKytpPHIpO28mJnRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpfSxsLnRvZ2dsZT1mdW5jdGlvbihlLHQpe2UrPVwiXCI7dmFyIG49dGhpcy5jb250YWlucyhlKSxpPW4/dCE9PSEwJiZcInJlbW92ZVwiOnQhPT0hMSYmXCJhZGRcIjtyZXR1cm4gaSYmdGhpc1tpXShlKSx0PT09ITB8fHQ9PT0hMT90OiFufSxsLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuam9pbihcIiBcIil9LHIuZGVmaW5lUHJvcGVydHkpe3ZhciBkPXtnZXQ6ZixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH07dHJ5e3IuZGVmaW5lUHJvcGVydHkoaSx0LGQpfWNhdGNoKHApey0yMTQ2ODIzMjUyPT09cC5udW1iZXImJihkLmVudW1lcmFibGU9ITEsci5kZWZpbmVQcm9wZXJ0eShpLHQsZCkpfX1lbHNlIHJbbl0uX19kZWZpbmVHZXR0ZXJfXyYmaS5fX2RlZmluZUdldHRlcl9fKHQsZil9fSh3aW5kb3cuc2VsZikpfSx7fV0sMzpbZnVuY3Rpb24oZSx0LG4pe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kXCIpLHQuZXhwb3J0cz1lKFwiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIikuQXJyYXkuZmluZH0se1wiLi4vLi4vbW9kdWxlcy8kLmNvcmVcIjoxMSxcIi4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZpbmRcIjoyOX1dLDQ6W2Z1bmN0aW9uKGUsdCxuKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnblwiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvJC5jb3JlXCIpLk9iamVjdC5hc3NpZ259LHtcIi4uLy4uL21vZHVsZXMvJC5jb3JlXCI6MTEsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduXCI6MzB9XSw1OltmdW5jdGlvbihlLHQsbil7ZShcIi4uLy4uL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGVcIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiKS5SZWdFeHAuZXNjYXBlfSx7XCIuLi8uLi9tb2R1bGVzLyQuY29yZVwiOjExLFwiLi4vLi4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZVwiOjMxfV0sNjpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IFR5cGVFcnJvcihlK1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gZX19LHt9XSw3OltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKCl7fX0se31dLDg6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmN0eFwiKSxyPWUoXCIuLyQuaW9iamVjdFwiKSxvPWUoXCIuLyQudG8tb2JqZWN0XCIpLHM9ZShcIi4vJC50by1sZW5ndGhcIiksYT1lKFwiLi8kLmFycmF5LXNwZWNpZXMtY3JlYXRlXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD0xPT1lLG49Mj09ZSx1PTM9PWUsYz00PT1lLGw9Nj09ZSxmPTU9PWV8fGw7cmV0dXJuIGZ1bmN0aW9uKGQscCxoKXtmb3IodmFyIHksdixtPW8oZCksZz1yKG0pLGI9aShwLGgsMyksXz1zKGcubGVuZ3RoKSx4PTAsaz10P2EoZCxfKTpuP2EoZCwwKTp2b2lkIDA7Xz54O3grKylpZigoZnx8eCBpbiBnKSYmKHk9Z1t4XSx2PWIoeSx4LG0pLGUpKWlmKHQpa1t4XT12O2Vsc2UgaWYodilzd2l0Y2goZSl7Y2FzZSAzOnJldHVybiEwO2Nhc2UgNTpyZXR1cm4geTtjYXNlIDY6cmV0dXJuIHg7Y2FzZSAyOmsucHVzaCh5KX1lbHNlIGlmKGMpcmV0dXJuITE7cmV0dXJuIGw/LTE6dXx8Yz9jOmt9fX0se1wiLi8kLmFycmF5LXNwZWNpZXMtY3JlYXRlXCI6OSxcIi4vJC5jdHhcIjoxMixcIi4vJC5pb2JqZWN0XCI6MTcsXCIuLyQudG8tbGVuZ3RoXCI6MjUsXCIuLyQudG8tb2JqZWN0XCI6MjZ9XSw5OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC5pcy1vYmplY3RcIikscj1lKFwiLi8kLmlzLWFycmF5XCIpLG89ZShcIi4vJC53a3NcIikoXCJzcGVjaWVzXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybiByKGUpJiYobj1lLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIiE9dHlwZW9mIG58fG4hPT1BcnJheSYmIXIobi5wcm90b3R5cGUpfHwobj12b2lkIDApLGkobikmJihuPW5bb10sbnVsbD09PW4mJihuPXZvaWQgMCkpKSxuZXcodm9pZCAwPT09bj9BcnJheTpuKSh0KX19LHtcIi4vJC5pcy1hcnJheVwiOjE4LFwiLi8kLmlzLW9iamVjdFwiOjE5LFwiLi8kLndrc1wiOjI4fV0sMTA6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGkuY2FsbChlKS5zbGljZSg4LC0xKX19LHt9XSwxMTpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXQuZXhwb3J0cz17dmVyc2lvbjpcIjEuMi42XCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9aSl9LHt9XSwxMjpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuYS1mdW5jdGlvblwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4pe2lmKGkoZSksdm9pZCAwPT09dClyZXR1cm4gZTtzd2l0Y2gobil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gZS5jYWxsKHQsbil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24obixpKXtyZXR1cm4gZS5jYWxsKHQsbixpKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLGkscil7cmV0dXJuIGUuY2FsbCh0LG4saSxyKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodCxhcmd1bWVudHMpfX19LHtcIi4vJC5hLWZ1bmN0aW9uXCI6Nn1dLDEzOltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09ZSl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrZSk7cmV0dXJuIGV9fSx7fV0sMTQ6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmdsb2JhbFwiKSxyPWUoXCIuLyQuY29yZVwiKSxvPWUoXCIuLyQuY3R4XCIpLHM9XCJwcm90b3R5cGVcIixhPWZ1bmN0aW9uKGUsdCxuKXt2YXIgdSxjLGwsZj1lJmEuRixkPWUmYS5HLHA9ZSZhLlMsaD1lJmEuUCx5PWUmYS5CLHY9ZSZhLlcsbT1kP3I6clt0XXx8KHJbdF09e30pLGc9ZD9pOnA/aVt0XTooaVt0XXx8e30pW3NdO2QmJihuPXQpO2Zvcih1IGluIG4pYz0hZiYmZyYmdSBpbiBnLGMmJnUgaW4gbXx8KGw9Yz9nW3VdOm5bdV0sbVt1XT1kJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBnW3VdP25bdV06eSYmYz9vKGwsaSk6diYmZ1t1XT09bD9mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGU/bmV3IGUodCk6ZSh0KX07cmV0dXJuIHRbc109ZVtzXSx0fShsKTpoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP28oRnVuY3Rpb24uY2FsbCxsKTpsLGgmJigobVtzXXx8KG1bc109e30pKVt1XT1sKSl9O2EuRj0xLGEuRz0yLGEuUz00LGEuUD04LGEuQj0xNixhLlc9MzIsdC5leHBvcnRzPWF9LHtcIi4vJC5jb3JlXCI6MTEsXCIuLyQuY3R4XCI6MTIsXCIuLyQuZ2xvYmFsXCI6MTZ9XSwxNTpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbihlKXt0cnl7cmV0dXJuISFlKCl9Y2F0Y2godCl7cmV0dXJuITB9fX0se31dLDE2OltmdW5jdGlvbihlLHQsbil7dmFyIGk9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9aSl9LHt9XSwxNzpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuY29mXCIpO3QuZXhwb3J0cz1PYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApP09iamVjdDpmdW5jdGlvbihlKXtyZXR1cm5cIlN0cmluZ1wiPT1pKGUpP2Uuc3BsaXQoXCJcIik6T2JqZWN0KGUpfX0se1wiLi8kLmNvZlwiOjEwfV0sMTg6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmNvZlwiKTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJBcnJheVwiPT1pKGUpfX0se1wiLi8kLmNvZlwiOjEwfV0sMTk6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/bnVsbCE9PWU6XCJmdW5jdGlvblwiPT10eXBlb2YgZX19LHt9XSwyMDpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPU9iamVjdDt0LmV4cG9ydHM9e2NyZWF0ZTppLmNyZWF0ZSxnZXRQcm90bzppLmdldFByb3RvdHlwZU9mLGlzRW51bTp7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxnZXREZXNjOmkuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLHNldERlc2M6aS5kZWZpbmVQcm9wZXJ0eSxzZXREZXNjczppLmRlZmluZVByb3BlcnRpZXMsZ2V0S2V5czppLmtleXMsZ2V0TmFtZXM6aS5nZXRPd25Qcm9wZXJ0eU5hbWVzLGdldFN5bWJvbHM6aS5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsZWFjaDpbXS5mb3JFYWNofX0se31dLDIxOltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJFwiKSxyPWUoXCIuLyQudG8tb2JqZWN0XCIpLG89ZShcIi4vJC5pb2JqZWN0XCIpO3QuZXhwb3J0cz1lKFwiLi8kLmZhaWxzXCIpKGZ1bmN0aW9uKCl7dmFyIGU9T2JqZWN0LmFzc2lnbix0PXt9LG49e30saT1TeW1ib2woKSxyPVwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIjtyZXR1cm4gdFtpXT03LHIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbihlKXtuW2VdPWV9KSw3IT1lKHt9LHQpW2ldfHxPYmplY3Qua2V5cyhlKHt9LG4pKS5qb2luKFwiXCIpIT1yfSk/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49cihlKSxzPWFyZ3VtZW50cyxhPXMubGVuZ3RoLHU9MSxjPWkuZ2V0S2V5cyxsPWkuZ2V0U3ltYm9scyxmPWkuaXNFbnVtO2E+dTspZm9yKHZhciBkLHA9byhzW3UrK10pLGg9bD9jKHApLmNvbmNhdChsKHApKTpjKHApLHk9aC5sZW5ndGgsdj0wO3k+djspZi5jYWxsKHAsZD1oW3YrK10pJiYobltkXT1wW2RdKTtyZXR1cm4gbn06T2JqZWN0LmFzc2lnbn0se1wiLi8kXCI6MjAsXCIuLyQuZmFpbHNcIjoxNSxcIi4vJC5pb2JqZWN0XCI6MTcsXCIuLyQudG8tb2JqZWN0XCI6MjZ9XSwyMjpbZnVuY3Rpb24oZSx0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciBuPXQ9PT1PYmplY3QodCk/ZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19OnQ7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBTdHJpbmcodCkucmVwbGFjZShlLG4pfX19LHt9XSwyMzpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuLyQuZ2xvYmFsXCIpLHI9XCJfX2NvcmUtanNfc2hhcmVkX19cIixvPWlbcl18fChpW3JdPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG9bZV18fChvW2VdPXt9KX19LHtcIi4vJC5nbG9iYWxcIjoxNn1dLDI0OltmdW5jdGlvbihlLHQsbil7dmFyIGk9TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGlzTmFOKGU9K2UpPzA6KGU+MD9yOmkpKGUpfX0se31dLDI1OltmdW5jdGlvbihlLHQsbil7dmFyIGk9ZShcIi4vJC50by1pbnRlZ2VyXCIpLHI9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlPjA/cihpKGUpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSx7XCIuLyQudG8taW50ZWdlclwiOjI0fV0sMjY6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmRlZmluZWRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QoaShlKSl9fSx7XCIuLyQuZGVmaW5lZFwiOjEzfV0sMjc6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT0wLHI9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PWU/XCJcIjplLFwiKV9cIiwoKytpK3IpLnRvU3RyaW5nKDM2KSl9fSx7fV0sMjg6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLnNoYXJlZFwiKShcIndrc1wiKSxyPWUoXCIuLyQudWlkXCIpLG89ZShcIi4vJC5nbG9iYWxcIikuU3ltYm9sO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaVtlXXx8KGlbZV09byYmb1tlXXx8KG98fHIpKFwiU3ltYm9sLlwiK2UpKX19LHtcIi4vJC5nbG9iYWxcIjoxNixcIi4vJC5zaGFyZWRcIjoyMyxcIi4vJC51aWRcIjoyN31dLDI5OltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9ZShcIi4vJC5leHBvcnRcIikscj1lKFwiLi8kLmFycmF5LW1ldGhvZHNcIikoNSksbz1cImZpbmRcIixzPSEwO28gaW5bXSYmQXJyYXkoMSlbb10oZnVuY3Rpb24oKXtzPSExfSksaShpLlAraS5GKnMsXCJBcnJheVwiLHtmaW5kOmZ1bmN0aW9uKGUpe3JldHVybiByKHRoaXMsZSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSksZShcIi4vJC5hZGQtdG8tdW5zY29wYWJsZXNcIikobyl9LHtcIi4vJC5hZGQtdG8tdW5zY29wYWJsZXNcIjo3LFwiLi8kLmFycmF5LW1ldGhvZHNcIjo4LFwiLi8kLmV4cG9ydFwiOjE0fV0sMzA6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmV4cG9ydFwiKTtpKGkuUytpLkYsXCJPYmplY3RcIix7YXNzaWduOmUoXCIuLyQub2JqZWN0LWFzc2lnblwiKX0pfSx7XCIuLyQuZXhwb3J0XCI6MTQsXCIuLyQub2JqZWN0LWFzc2lnblwiOjIxfV0sMzE6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgaT1lKFwiLi8kLmV4cG9ydFwiKSxyPWUoXCIuLyQucmVwbGFjZXJcIikoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLFwiXFxcXCQmXCIpO2koaS5TLFwiUmVnRXhwXCIse2VzY2FwZTpmdW5jdGlvbihlKXtyZXR1cm4gcihlKX19KX0se1wiLi8kLmV4cG9ydFwiOjE0LFwiLi8kLnJlcGxhY2VyXCI6MjJ9XSwzMjpbZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGkoKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX10LmV4cG9ydHM9RGF0ZS5ub3d8fGl9LHt9XSwzMzpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCJkYXRlLW5vd1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoKXt2YXIgbD1pKCktdTt0PmwmJmw+MD9vPXNldFRpbWVvdXQocix0LWwpOihvPW51bGwsbnx8KGM9ZS5hcHBseShhLHMpLG98fChhPXM9bnVsbCkpKX12YXIgbyxzLGEsdSxjO3JldHVybiBudWxsPT10JiYodD0xMDApLGZ1bmN0aW9uKCl7YT10aGlzLHM9YXJndW1lbnRzLHU9aSgpO3ZhciBsPW4mJiFvO3JldHVybiBvfHwobz1zZXRUaW1lb3V0KHIsdCkpLGwmJihjPWUuYXBwbHkoYSxzKSxhPXM9bnVsbCksY319fSx7XCJkYXRlLW5vd1wiOjMyfV0sMzQ6W2Z1bmN0aW9uKGUsdCxuKXshZnVuY3Rpb24oZSl7ZS5tYXRjaGVzPWUubWF0Y2hlc3x8ZS5tb3pNYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUub01hdGNoZXNTZWxlY3Rvcnx8ZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IsZS5jbG9zZXN0PWUuY2xvc2VzdHx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXM7dCYmIXQubWF0Y2hlcyhlKTspdD10LnBhcmVudEVsZW1lbnQ7cmV0dXJuIHR9fShFbGVtZW50LnByb3RvdHlwZSl9LHt9XSwzNTpbZnVuY3Rpb24oZSx0LG4pe3ZhciBpPWUoXCIuL2xpYi9wYXJzZXJcIikscj1lKFwiLi9saWIvcmVzb3VyY2VcIiksbz0hMTt0LmV4cG9ydHM9e3BhcnNlOmZ1bmN0aW9uKGUpe3JldHVybihuZXcgaSkucGFyc2UoZSxvKX0sZW5hYmxlVmFsaWRhdGlvbjpmdW5jdGlvbihlKXtvPW51bGwhPWU/ZTohMH0sZGlzYWJsZVZhbGlkYXRpb246ZnVuY3Rpb24oKXtvPSExfSxSZXNvdXJjZTpyfX0se1wiLi9saWIvcGFyc2VyXCI6MzcsXCIuL2xpYi9yZXNvdXJjZVwiOjM4fV0sMzY6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBpKCl7YXJndW1lbnRzLmxlbmd0aD49MT90aGlzLl9hcnJheT1hcmd1bWVudHNbMF06dGhpcy5fYXJyYXk9W119aS5wcm90b3R5cGUuYXJyYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXJyYXl9LGkucHJvdG90eXBlLmlzRW1wdHk9ZnVuY3Rpb24oZSl7cmV0dXJuIDA9PT10aGlzLl9hcnJheS5sZW5ndGh9LGkucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fYXJyYXkuc2xpY2UoMCk7cmV0dXJuIHQucHVzaChlKSxuZXcgaSh0KX0saS5wcm90b3R5cGUucG9wPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fYXJyYXkuc2xpY2UoMCx0aGlzLl9hcnJheS5sZW5ndGgtMSk7cmV0dXJuIG5ldyBpKGUpfSxpLnByb3RvdHlwZS5wZWVrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc0VtcHR5KCkpdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgcGVlayBvbiBlbXB0eSBzdGFja1wiKTtyZXR1cm4gdGhpcy5fYXJyYXlbdGhpcy5fYXJyYXkubGVuZ3RoLTFdfSx0LmV4cG9ydHM9aX0se31dLDM3OltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaSgpe31mdW5jdGlvbiByKGUsdCxuKXtpZihudWxsPT1lKXJldHVybiBlO3ZhciBpPW8oZS5fbGlua3MsdCxuLnB1c2goXCJfbGlua3NcIikpLHI9cyhpKSxjPWEoZS5fZW1iZWRkZWQsdCxuLnB1c2goXCJfZW1iZWRkZWRcIikpLGw9bmV3IGIoaSxyLGMsdCk7cmV0dXJuIHUoZSxsKSxsLl9vcmlnaW5hbD1lLGx9ZnVuY3Rpb24gbyhlLHQsbil7cmV0dXJuIGU9YyhlLGYsdCxuKSxudWxsIT1lJiZudWxsIT1lLnNlbGZ8fHkoXCJSZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgc2VsZiBsaW5rXCIsdCxuKSxlfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIGU/ZS5jdXJpZXM6W119ZnVuY3Rpb24gYShlLHQsbil7dmFyIGk9YyhlLGgsdCxuKTtyZXR1cm4gbnVsbD09aT9pOihPYmplY3Qua2V5cyhpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lbZV09aVtlXS5tYXAoZnVuY3Rpb24oaSl7dmFyIG89bnVsbCE9dD9bXTpudWxsLHM9cihpLG8sbi5wdXNoKGUpKTtyZXR1cm4gcy5fb3JpZ2luYWw9aSxzfSl9KSxpKX1mdW5jdGlvbiB1KGUsdCl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXtcIl9saW5rc1wiIT09biYmXCJfZW1iZWRkZWRcIiE9PW4mJih0W25dPWVbbl0pfSl9ZnVuY3Rpb24gYyhlLHQsbixpKXtpZihudWxsPT1lKXJldHVybiBlO3ZhciByPXt9O3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG8pe3Jbb109bChvLGVbb10sdCxuLGkpfSkscn1mdW5jdGlvbiBsKGUsdCxuLGkscil7cmV0dXJuIGQodCk/dC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4oZSx0LGkscil9KTpbbihlLHQsaSxyKV19ZnVuY3Rpb24gZihlLHQsbixpKXtpZighcCh0KSl0aHJvdyBuZXcgRXJyb3IoXCJMaW5rIG9iamVjdCBpcyBub3QgYW4gYWN0dWFsIG9iamVjdDogXCIrdCtcIiBbXCIrdHlwZW9mIHQrXCJdXCIpO3ZhciByPW0odCk7cmV0dXJuIE9iamVjdC5rZXlzKHgpLmZvckVhY2goZnVuY3Rpb24odCl7bnVsbD09clt0XSYmKHhbdF0ucmVxdWlyZWQmJnkoXCJMaW5rIG1pc3NlcyByZXF1aXJlZCBwcm9wZXJ0eSBcIit0K1wiLlwiLG4saS5wdXNoKGUpKSxudWxsIT14W3RdLmRlZmF1bHRWYWx1ZSYmKHJbdF09eFt0XS5kZWZhdWx0VmFsdWUpKX0pLHIuZGVwcmVjYXRpb24mJnYoXCJXYXJuaW5nOiBMaW5rIFwiK2coaS5wdXNoKGUpKStcIiBpcyBkZXByZWNhdGVkLCBzZWUgXCIrci5kZXByZWNhdGlvbiksci50ZW1wbGF0ZWQhPT0hMCYmci50ZW1wbGF0ZWQhPT0hMSYmKHIudGVtcGxhdGVkPSExKSxuPyhyLmhyZWYmJnIuaHJlZi5pbmRleE9mKFwie1wiKT49MCYmIXIudGVtcGxhdGVkJiZ5KCdMaW5rIHNlZW1zIHRvIGJlIGFuIFVSSSB0ZW1wbGF0ZSBidXQgaXRzIFwidGVtcGxhdGVkXCIgcHJvcGVydHkgaXMgbm90IHNldCB0byB0cnVlLicsbixpLnB1c2goZSkpLHIpOnJ9ZnVuY3Rpb24gZChlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9ZnVuY3Rpb24gcChlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBoKGUsdCl7cmV0dXJuIHR9ZnVuY3Rpb24geShlLHQsbil7dCYmdC5wdXNoKHtwYXRoOmcobiksbWVzc2FnZTplfSl9ZnVuY3Rpb24gdihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgY29uc29sZS5sb2cmJmNvbnNvbGUubG9nKGUpfWZ1bmN0aW9uIG0oZSl7dmFyIHQ9e307cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7dFtuXT1lW25dfSksdH1mdW5jdGlvbiBnKGUpe2Zvcih2YXIgdD1cIiQuXCIsbj0wO248ZS5hcnJheSgpLmxlbmd0aDtuKyspdCs9ZS5hcnJheSgpW25dK1wiLlwiO3JldHVybiB0PXQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMSl9dmFyIGI9ZShcIi4vcmVzb3VyY2VcIiksXz1lKFwiLi9pbW11dGFibGVfc3RhY2tcIikseD17aHJlZjp7cmVxdWlyZWQ6ITAsZGVmYXVsdFZhbHVlOm51bGx9LHRlbXBsYXRlZDp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOiExfSx0eXBlOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6bnVsbH0sZGVwcmVjYXRpb246e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTpudWxsfSxuYW1lOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6bnVsbH0scHJvZmlsZTp7cmVxdWlyZWQ6ITEsZGVmYXVsdFZhbHVlOm51bGx9LHRpdGxlOntyZXF1aXJlZDohMSxkZWZhdWx0VmFsdWU6bnVsbH0saHJlZmxhbmc6e3JlcXVpcmVkOiExLGRlZmF1bHRWYWx1ZTpudWxsfX07aS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24oZSx0KXt2YXIgbj10P1tdOm51bGw7cmV0dXJuIHIoZSxuLG5ldyBfKX0sdC5leHBvcnRzPWl9LHtcIi4vaW1tdXRhYmxlX3N0YWNrXCI6MzYsXCIuL3Jlc291cmNlXCI6Mzh9XSwzODpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSx0LG4saSl7dGhpcy5fbGlua3M9ZXx8e30sdGhpcy5faW5pdEN1cmllcyh0KSx0aGlzLl9lbWJlZGRlZD1ufHx7fSx0aGlzLl92YWxpZGF0aW9uPWl8fFtdfWZ1bmN0aW9uIHIoZSx0KXtyZXR1cm4gbnVsbCE9ZT9lW3RdOm51bGx9ZnVuY3Rpb24gbyhlLHQsbil7bj1ufHwwO3ZhciBpPXIoZSx0KTtyZXR1cm4gbnVsbCE9aSYmaS5sZW5ndGg+PTE/aVtuXTpudWxsfWkucHJvdG90eXBlLl9pbml0Q3VyaWVzPWZ1bmN0aW9uKGUpe2lmKHRoaXMuX2N1cmllc01hcD17fSxlKXt0aGlzLl9jdXJpZXM9ZTtmb3IodmFyIHQ9MDt0PHRoaXMuX2N1cmllcy5sZW5ndGg7dCsrKXt2YXIgbj10aGlzLl9jdXJpZXNbdF07dGhpcy5fY3VyaWVzTWFwW24ubmFtZV09bn19ZWxzZSB0aGlzLl9jdXJpZXM9W107dGhpcy5fcHJlUmVzb2x2ZUN1cmllcygpfSxpLnByb3RvdHlwZS5fcHJlUmVzb2x2ZUN1cmllcz1mdW5jdGlvbigpe3RoaXMuX3Jlc29sdmVkQ3VyaWVzTWFwPXt9O2Zvcih2YXIgZT0wO2U8dGhpcy5fY3VyaWVzLmxlbmd0aDtlKyspe3ZhciB0PXRoaXMuX2N1cmllc1tlXTtpZih0Lm5hbWUpZm9yKHZhciBuIGluIHRoaXMuX2xpbmtzKVwiY3VyaWVzXCIhPT1uJiZ0aGlzLl9wcmVSZXNvbHZlQ3VyaWUodCxuKX19LGkucHJvdG90eXBlLl9wcmVSZXNvbHZlQ3VyaWU9ZnVuY3Rpb24oZSx0KXt2YXIgbj0odGhpcy5fbGlua3NbdF0sdC5zcGxpdCgvOiguKykvKSksaT1uWzBdO2lmKGUubmFtZT09PWkpaWYoZS50ZW1wbGF0ZWQmJm4ubGVuZ3RoPj0xKXt2YXIgcj1lLmhyZWYucmVwbGFjZSgvKC4qKXsoLiopfSguKikvLFwiJDFcIituWzFdK1wiJDNcIik7dGhpcy5fcmVzb2x2ZWRDdXJpZXNNYXBbcl09dH1lbHNlIHRoaXMuX3Jlc29sdmVkQ3VyaWVzTWFwW2UuaHJlZl09dH0saS5wcm90b3R5cGUuYWxsTGlua0FycmF5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9saW5rc30saS5wcm90b3R5cGUubGlua0FycmF5PWZ1bmN0aW9uKGUpe3JldHVybiByKHRoaXMuX2xpbmtzLGUpfSxpLnByb3RvdHlwZS5saW5rPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG8odGhpcy5fbGlua3MsZSx0KX0saS5wcm90b3R5cGUuaGFzQ3VyaWVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9jdXJpZXMubGVuZ3RoPjB9LGkucHJvdG90eXBlLmN1cmllQXJyYXk9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2N1cmllc30saS5wcm90b3R5cGUuY3VyaWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2N1cmllc01hcFtlXX0saS5wcm90b3R5cGUucmV2ZXJzZVJlc29sdmVDdXJpZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fcmVzb2x2ZWRDdXJpZXNNYXBbZV19LGkucHJvdG90eXBlLmFsbEVtYmVkZGVkUmVzb3VyY2VBcnJheXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZW1iZWRkZWR9LGkucHJvdG90eXBlLmVtYmVkZGVkUmVzb3VyY2VBcnJheT1mdW5jdGlvbihlKXtyZXR1cm4gcih0aGlzLl9lbWJlZGRlZCxlKX0saS5wcm90b3R5cGUuZW1iZWRkZWRSZXNvdXJjZT1mdW5jdGlvbihlLHQpe3JldHVybiBvKHRoaXMuX2VtYmVkZGVkLGUsdCl9LGkucHJvdG90eXBlLm9yaWdpbmFsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX29yaWdpbmFsfSxpLnByb3RvdHlwZS52YWxpZGF0aW9uSXNzdWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3ZhbGlkYXRpb259LGkucHJvdG90eXBlLmFsbExpbmtzPWkucHJvdG90eXBlLmFsbExpbmtBcnJheXMsaS5wcm90b3R5cGUuYWxsRW1iZWRkZWRBcnJheXM9aS5wcm90b3R5cGUuYWxsRW1iZWRkZWRSZXNvdXJjZXM9aS5wcm90b3R5cGUuYWxsRW1iZWRkZWRSZXNvdXJjZUFycmF5cyxpLnByb3RvdHlwZS5lbWJlZGRlZEFycmF5PWkucHJvdG90eXBlLmVtYmVkZGVkUmVzb3VyY2VBcnJheSxpLnByb3RvdHlwZS5lbWJlZGRlZD1pLnByb3RvdHlwZS5lbWJlZGRlZFJlc291cmNlLGkucHJvdG90eXBlLnZhbGlkYXRpb249aS5wcm90b3R5cGUudmFsaWRhdGlvbklzc3Vlcyx0LmV4cG9ydHM9aX0se31dLDM5OltmdW5jdGlvbihlLHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9LG49W107ZT1lfHx0aGlzLGUub249ZnVuY3Rpb24oZSxuLGkpeyh0W2VdPXRbZV18fFtdKS5wdXNoKFtuLGldKX0sZS5vZmY9ZnVuY3Rpb24oZSxpKXtlfHwodD17fSk7Zm9yKHZhciByPXRbZV18fG4sbz1yLmxlbmd0aD1pP3IubGVuZ3RoOjA7by0tOylpPT1yW29dWzBdJiZyLnNwbGljZShvLDEpfSxlLmVtaXQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciBpLHI9dFtlXXx8bixvPTA7aT1yW28rK107KWlbMF0uYXBwbHkoaVsxXSxuLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKX19fSx7fV19LHt9LFsxXSkoMSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb25zIS4vdGVsZXBvcnQtYXV0b2NvbXBsZXRlLm1pbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdmVuZG9ycy9hdXRvY29tcGxldGUvZGlzdC90ZWxlcG9ydC1hdXRvY29tcGxldGUubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgdGVsZXBvcnQtYXV0b2NvbXBsZXRlIC0gdjAuMy4xIHwgaHR0cHM6Ly9naXRodWIuY29tL3RlbGVwb3J0L2F1dG9jb21wbGV0ZSNyZWFkbWUgfCBNSVQgKi9cXG5cXG4udHAtYWNfX2lucHV0LFxcbi50cC1hY19fbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwwLDAsLjM1KTtcXG59XFxuXFxuLnRwLWF1dG9jb21wbGV0ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDI1ZW07XFxufVxcblxcbi50cC1hY19faW5wdXQge1xcbiAgcGFkZGluZzogLjI1ZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50cC1hY19faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLnRwLWFjX19pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4udHAtYWNfX2lucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi50cC1hY19faW5wdXQ6Oi1tcy1jbGVhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3Bpbm5lciAudHAtYWNfX2lucHV0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMS41ZW07XFxufVxcblxcbi50cC1hY19fbGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6ICM5Nzk3OTc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAuODc1ZW07XFxufVxcblxcbi50cC1hY19faXRlbSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogLjM1NzE0ZW0gLjcxNDI5ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udHAtYWNfX2l0ZW0uaXMtYWN0aXZlLFxcbi50cC1hY19faXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG4udHAtYWNfX2l0ZW0ubm8tcmVzdWx0cyxcXG4udHAtYWNfX2l0ZW0ubm8tcmVzdWx0czpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udHAtYWNfX2l0ZW0gc3BhbiB7XFxuICBjb2xvcjogIzRhNGE0YTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5zcGlubmVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAuNWVtO1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogLS42MjVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtLjYyNWVtO1xcbiAgY29udGVudDogJyc7XFxuICBhbmltYXRpb246IHNwaW5uZXIgMXMgbGluZWFyIGluZmluaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLDAsMCwuMyk7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9jc3MtbG9hZGVyIS4uL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4uL34vYXV0b3ByZWZpeGVyLWxvYWRlcj9icm93c2Vycz1sYXN0IDIgdmVyc2lvbnMhLi92ZW5kb3JzL2F1dG9jb21wbGV0ZS9kaXN0L3RlbGVwb3J0LWF1dG9jb21wbGV0ZS5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEV2ZW50TWl4aW4gPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LTQv9C40YHQutCwINC90LAg0YHQvtCx0YvRgtC40LVcclxuICAgICAqINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1OlxyXG4gICAgICogIG9iamVjdC5vbignc2VsZWN0JywgZnVuY3Rpb24oaXRlbSkgeyAuLi4gfVxyXG4gICAgICovXHJcbiAgICBvbjogZnVuY3Rpb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzKSB0aGlzLl9ldmVudEhhbmRsZXJzID0ge307XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQtdC60YDQsNGJ0LXQvdC40LUg0L/QvtC00L/QuNGB0LrQuFxyXG4gICAgICogIG9iamVjdC5vZmYoJ3NlbGVjdCcsICBoYW5kbGVyKVxyXG4gICAgICovXHJcbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuX2V2ZW50SGFuZGxlcnMgJiYgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xyXG4gICAgICAgIGlmICghaGFuZGxlcnMpIHJldHVybjtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxoYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0gPT0gaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGktLSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JPQtdC90LXRgNCw0YbQuNGPINGB0L7QsdGL0YLQuNGPINGBINC/0LXRgNC10LTQsNGH0LXQuSDQtNCw0L3QvdGL0YVcclxuICAgICAqICB0aGlzLnRyaWdnZXIoJ3NlbGVjdCcsIGl0ZW0pO1xyXG4gICAgICovXHJcbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudE5hbWUgLyosIC4uLiAqLykge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2V2ZW50SGFuZGxlcnMgfHwgIXRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDQtNC70Y8g0YHQvtCx0YvRgtC40Y8g0L3QtdGCXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQstGL0LfQstCw0YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaGFuZGxlcnNbaV0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRNaXhpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL2NvbW1vbi9ldmVudE1peGluL2luZGV4LmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZXZlbnRNaXhpbiBmcm9tIFwiLi8uLi8uLi9jb21tb24vZXZlbnRNaXhpblwiO1xyXG5pbXBvcnQgdGVtcGxhdGVJdGVtQ2l0eSBmcm9tICcuL2l0ZW0tY2l0eS5wdWcnO1xyXG5cclxuY29uc3QgU0VMRUNUT1JTID0ge1xyXG4gICAgY2xvc2VCdXR0b246IFwiW2RhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZV1cIixcclxuICAgIHZpZXdlckl0ZW06IFwiW2RhdGEtY2l0eS12aWV3ZXItaXRlbV1cIixcclxuICAgIHZpZXdlcklubmVyOiBcIltkYXRhLWNpdHktdmlld2VyLWlubmVyXVwiLFxyXG4gICAgYWN0aXZlQ2xhc3M6IFwiYWN0aXZlXCJcclxufTtcclxuXHJcbmNsYXNzIENpdHlWaWV3ZXIge1xyXG4gICAgY29uc3RydWN0b3IgKGVsZW0pIHtcclxuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcclxuXHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fbWFuYWdlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaXR5KGNpdHlEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRlbXBsYXRlSXRlbUNpdHkoY2l0eURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBlbGVtO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdFbGVtID0gZGl2LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySW5uZXIpO1xyXG5cclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW0sIHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MobmV3RWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgX21hbmFnZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUlMuY2xvc2VCdXR0b24pKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9IHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy5jbG9zZUJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kZWxldGVDaXR5KGNsb3NlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SUy52aWV3ZXJJdGVtKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JTLnZpZXdlckl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0Q2l0eShpdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc2VsZWN0Q2l0eShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgZ2VvSWQgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZ2VvSWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZUNsYXNzKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vblNlbGVjdGVkQ2l0eSwgcGFyc2VJbnQoZ2VvSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVsZXRlQ2l0eShlbGVtQ2xvc2UpIHtcclxuICAgICAgICBjb25zdCBlbGVtID0gZWxlbUNsb3NlLmNsb3Nlc3QoU0VMRUNUT1JTLnZpZXdlckl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGdlb0lkID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdlb0lkXCIpO1xyXG5cclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhTRUxFQ1RPUlMuYWN0aXZlQ2xhc3MpKXtcclxuICAgICAgICAgICAgdGhpcy5fc2V0TmV3QWN0aXZlRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fb25EZWxldGVDaXR5KGdlb0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0TmV3QWN0aXZlRWxlbWVudCgpIHtcclxuICAgICAgICBjb25zdCBuZXdBY3RpdmVFbGVtID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SUy52aWV3ZXJJdGVtKTtcclxuXHJcbiAgICAgICAgaWYgKCFuZXdBY3RpdmVFbGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UUy5vbkRlbGV0QWxsQ2l0aWVzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0Q2l0eShuZXdBY3RpdmVFbGVtKTtcclxuXHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIC8vINC/0L7Qv9GA0LDQstC40YLRjCDQv9GA0L7QutGA0YPRgtC60YMg0LIg0LLQtdGA0YUg0L/RgNC4INGD0LTQsNC70LXQvdC4INGN0LvQtdC80LXQvdGC0LAg0L3QsCDRgNCw0LfQvNC10YDQtSDRjdC60YDQsNC90LAg0L7RgiDQsNC50L/QsNC0INCyINCz0L7RgNC40LfQvtC90YLQtVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXNMYW5kc2NhcGVcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUlMudmlld2VySW5uZXIpLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0QWN0aXZlQ2xhc3MoZWxlbSkge1xyXG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUlMudmlld2VySXRlbSk7XHJcblxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNpdGllcykuZm9yRWFjaChjaXR5ID0+IGNpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRlbGV0ZUNpdHkoZ2VvSWQpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVFMub25EZWxldGVDaXR5LCBwYXJzZUludChnZW9JZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgRVZFTlRTICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvblNlbGVjdGVkQ2l0eTogXCJvblNlbGVjdGVkQ2l0eVwiLFxyXG4gICAgICAgICAgICBvbkRlbGV0ZUNpdHk6IFwib25EZWxldGVDaXR5XCIsXHJcbiAgICAgICAgICAgIG9uRGVsZXRBbGxDaXRpZXM6IFwib25EZWxldEFsbENpdGllc1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb3IgKHZhciBrZXkgaW4gZXZlbnRNaXhpbikge1xyXG4gICAgQ2l0eVZpZXdlci5wcm90b3R5cGVba2V5XSA9IGV2ZW50TWl4aW5ba2V5XTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2l0eVZpZXdlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tb2R1bGVzL3ZpZXcvY2l0eS12aWV3ZXIvaW5kZXguanMiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGdlb0lkLCBuYW1lKSB7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXZcIiArIChcIiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiXCIrcHVnLmF0dHIoXCJkYXRhLWdlb0lkXCIsIGdlb0lkLCB0cnVlLCB0cnVlKStcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cIikgKyBcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBuYW1lKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjt9LmNhbGwodGhpcyxcImdlb0lkXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5nZW9JZDp0eXBlb2YgZ2VvSWQhPT1cInVuZGVmaW5lZFwiP2dlb0lkOnVuZGVmaW5lZCxcIm5hbWVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLm5hbWU6dHlwZW9mIG5hbWUhPT1cInVuZGVmaW5lZFwiP25hbWU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdmlldy9jaXR5LXZpZXdlci9pdGVtLWNpdHkucHVnXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgYVtrZXldID0gdmFsQSArICh2YWxBICYmIHZhbEIgJiYgJzsnKSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJycsIGRlbGltID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgZGVsaW0gKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV07XG4gICAgICAgIGRlbGltID0gJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHZhbCA9ICcnICsgdmFsO1xuICAgIGlmICh2YWxbdmFsLmxlbmd0aCAtIDFdID09PSAnOycpIHJldHVybiB2YWwuc2xpY2UoMCwgLTEpO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcHVnL34vcHVnLXJ1bnRpbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGZzIChpZ25vcmVkKVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohIEhhbW1lci5KUyAtIHYyLjAuOCAtIDIwMTYtMDQtMjNcclxuICogaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDE2IEpvcmlrIFRhbmdlbGRlcjtcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlICovXHJcbiFmdW5jdGlvbihhLGIsYyxkKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGEsYixjKXtyZXR1cm4gc2V0VGltZW91dChqKGEsYyksYil9ZnVuY3Rpb24gZihhLGIsYyl7cmV0dXJuIEFycmF5LmlzQXJyYXkoYSk/KGcoYSxjW2JdLGMpLCEwKTohMX1mdW5jdGlvbiBnKGEsYixjKXt2YXIgZTtpZihhKWlmKGEuZm9yRWFjaClhLmZvckVhY2goYixjKTtlbHNlIGlmKGEubGVuZ3RoIT09ZClmb3IoZT0wO2U8YS5sZW5ndGg7KWIuY2FsbChjLGFbZV0sZSxhKSxlKys7ZWxzZSBmb3IoZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJmIuY2FsbChjLGFbZV0sZSxhKX1mdW5jdGlvbiBoKGIsYyxkKXt2YXIgZT1cIkRFUFJFQ0FURUQgTUVUSE9EOiBcIitjK1wiXFxuXCIrZCtcIiBBVCBcXG5cIjtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1uZXcgRXJyb3IoXCJnZXQtc3RhY2stdHJhY2VcIiksZD1jJiZjLnN0YWNrP2Muc3RhY2sucmVwbGFjZSgvXlteXFwoXSs/W1xcbiRdL2dtLFwiXCIpLnJlcGxhY2UoL15cXHMrYXRcXHMrL2dtLFwiXCIpLnJlcGxhY2UoL15PYmplY3QuPGFub255bW91cz5cXHMqXFwoL2dtLFwie2Fub255bW91c30oKUBcIik6XCJVbmtub3duIFN0YWNrIFRyYWNlXCIsZj1hLmNvbnNvbGUmJihhLmNvbnNvbGUud2Fybnx8YS5jb25zb2xlLmxvZyk7cmV0dXJuIGYmJmYuY2FsbChhLmNvbnNvbGUsZSxkKSxiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19ZnVuY3Rpb24gaShhLGIsYyl7dmFyIGQsZT1iLnByb3RvdHlwZTtkPWEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSksZC5jb25zdHJ1Y3Rvcj1hLGQuX3N1cGVyPWUsYyYmbGEoZCxjKX1mdW5jdGlvbiBqKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBrKGEsYil7cmV0dXJuIHR5cGVvZiBhPT1vYT9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gbChhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gbShhLGIsYyl7ZyhxKGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbihhLGIsYyl7ZyhxKGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gbyhhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gcChhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24gcShhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24gcihhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHMoYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gdChhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTtyKGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIHUoYSxiKXtmb3IodmFyIGMsZSxmPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGc9MDtnPG1hLmxlbmd0aDspe2lmKGM9bWFbZ10sZT1jP2MrZjpiLGUgaW4gYSlyZXR1cm4gZTtnKyt9cmV0dXJuIGR9ZnVuY3Rpb24gdigpe3JldHVybiB1YSsrfWZ1bmN0aW9uIHcoYil7dmFyIGM9Yi5vd25lckRvY3VtZW50fHxiO3JldHVybiBjLmRlZmF1bHRWaWV3fHxjLnBhcmVudFdpbmRvd3x8YX1mdW5jdGlvbiB4KGEsYil7dmFyIGM9dGhpczt0aGlzLm1hbmFnZXI9YSx0aGlzLmNhbGxiYWNrPWIsdGhpcy5lbGVtZW50PWEuZWxlbWVudCx0aGlzLnRhcmdldD1hLm9wdGlvbnMuaW5wdXRUYXJnZXQsdGhpcy5kb21IYW5kbGVyPWZ1bmN0aW9uKGIpe2soYS5vcHRpb25zLmVuYWJsZSxbYV0pJiZjLmhhbmRsZXIoYil9LHRoaXMuaW5pdCgpfWZ1bmN0aW9uIHkoYSl7dmFyIGIsYz1hLm9wdGlvbnMuaW5wdXRDbGFzcztyZXR1cm4gbmV3KGI9Yz9jOnhhP006eWE/UDp3YT9SOkwpKGEseil9ZnVuY3Rpb24geihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJkVhJiZkLWU9PT0wLGc9YiYoR2F8SGEpJiZkLWU9PT0wO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLEEoYSxjKSxhLmVtaXQoXCJoYW1tZXIuaW5wdXRcIixjKSxhLnJlY29nbml6ZShjKSxhLnNlc3Npb24ucHJldklucHV0PWN9ZnVuY3Rpb24gQShhLGIpe3ZhciBjPWEuc2Vzc2lvbixkPWIucG9pbnRlcnMsZT1kLmxlbmd0aDtjLmZpcnN0SW5wdXR8fChjLmZpcnN0SW5wdXQ9RChiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1EKGIpOjE9PT1lJiYoYy5maXJzdE11bHRpcGxlPSExKTt2YXIgZj1jLmZpcnN0SW5wdXQsZz1jLmZpcnN0TXVsdGlwbGUsaD1nP2cuY2VudGVyOmYuY2VudGVyLGk9Yi5jZW50ZXI9RShkKTtiLnRpbWVTdGFtcD1yYSgpLGIuZGVsdGFUaW1lPWIudGltZVN0YW1wLWYudGltZVN0YW1wLGIuYW5nbGU9SShoLGkpLGIuZGlzdGFuY2U9SChoLGkpLEIoYyxiKSxiLm9mZnNldERpcmVjdGlvbj1HKGIuZGVsdGFYLGIuZGVsdGFZKTt2YXIgaj1GKGIuZGVsdGFUaW1lLGIuZGVsdGFYLGIuZGVsdGFZKTtiLm92ZXJhbGxWZWxvY2l0eVg9ai54LGIub3ZlcmFsbFZlbG9jaXR5WT1qLnksYi5vdmVyYWxsVmVsb2NpdHk9cWEoai54KT5xYShqLnkpP2oueDpqLnksYi5zY2FsZT1nP0soZy5wb2ludGVycyxkKToxLGIucm90YXRpb249Zz9KKGcucG9pbnRlcnMsZCk6MCxiLm1heFBvaW50ZXJzPWMucHJldklucHV0P2IucG9pbnRlcnMubGVuZ3RoPmMucHJldklucHV0Lm1heFBvaW50ZXJzP2IucG9pbnRlcnMubGVuZ3RoOmMucHJldklucHV0Lm1heFBvaW50ZXJzOmIucG9pbnRlcnMubGVuZ3RoLEMoYyxiKTt2YXIgaz1hLmVsZW1lbnQ7byhiLnNyY0V2ZW50LnRhcmdldCxrKSYmKGs9Yi5zcmNFdmVudC50YXJnZXQpLGIudGFyZ2V0PWt9ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307Yi5ldmVudFR5cGUhPT1FYSYmZi5ldmVudFR5cGUhPT1HYXx8KGU9YS5wcmV2RGVsdGE9e3g6Zi5kZWx0YVh8fDAseTpmLmRlbHRhWXx8MH0sZD1hLm9mZnNldERlbHRhPXt4OmMueCx5OmMueX0pLGIuZGVsdGFYPWUueCsoYy54LWQueCksYi5kZWx0YVk9ZS55KyhjLnktZC55KX1mdW5jdGlvbiBDKGEsYil7dmFyIGMsZSxmLGcsaD1hLmxhc3RJbnRlcnZhbHx8YixpPWIudGltZVN0YW1wLWgudGltZVN0YW1wO2lmKGIuZXZlbnRUeXBlIT1IYSYmKGk+RGF8fGgudmVsb2NpdHk9PT1kKSl7dmFyIGo9Yi5kZWx0YVgtaC5kZWx0YVgsaz1iLmRlbHRhWS1oLmRlbHRhWSxsPUYoaSxqLGspO2U9bC54LGY9bC55LGM9cWEobC54KT5xYShsLnkpP2wueDpsLnksZz1HKGosayksYS5sYXN0SW50ZXJ2YWw9Yn1lbHNlIGM9aC52ZWxvY2l0eSxlPWgudmVsb2NpdHlYLGY9aC52ZWxvY2l0eVksZz1oLmRpcmVjdGlvbjtiLnZlbG9jaXR5PWMsYi52ZWxvY2l0eVg9ZSxiLnZlbG9jaXR5WT1mLGIuZGlyZWN0aW9uPWd9ZnVuY3Rpb24gRChhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5wb2ludGVycy5sZW5ndGg7KWJbY109e2NsaWVudFg6cGEoYS5wb2ludGVyc1tjXS5jbGllbnRYKSxjbGllbnRZOnBhKGEucG9pbnRlcnNbY10uY2xpZW50WSl9LGMrKztyZXR1cm57dGltZVN0YW1wOnJhKCkscG9pbnRlcnM6YixjZW50ZXI6RShiKSxkZWx0YVg6YS5kZWx0YVgsZGVsdGFZOmEuZGVsdGFZfX1mdW5jdGlvbiBFKGEpe3ZhciBiPWEubGVuZ3RoO2lmKDE9PT1iKXJldHVybnt4OnBhKGFbMF0uY2xpZW50WCkseTpwYShhWzBdLmNsaWVudFkpfTtmb3IodmFyIGM9MCxkPTAsZT0wO2I+ZTspYys9YVtlXS5jbGllbnRYLGQrPWFbZV0uY2xpZW50WSxlKys7cmV0dXJue3g6cGEoYy9iKSx5OnBhKGQvYil9fWZ1bmN0aW9uIEYoYSxiLGMpe3JldHVybnt4OmIvYXx8MCx5OmMvYXx8MH19ZnVuY3Rpb24gRyhhLGIpe3JldHVybiBhPT09Yj9JYTpxYShhKT49cWEoYik/MD5hP0phOkthOjA+Yj9MYTpNYX1mdW5jdGlvbiBIKGEsYixjKXtjfHwoYz1RYSk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiBNYXRoLnNxcnQoZCpkK2UqZSl9ZnVuY3Rpb24gSShhLGIsYyl7Y3x8KGM9UWEpO3ZhciBkPWJbY1swXV0tYVtjWzBdXSxlPWJbY1sxXV0tYVtjWzFdXTtyZXR1cm4gMTgwKk1hdGguYXRhbjIoZSxkKS9NYXRoLlBJfWZ1bmN0aW9uIEooYSxiKXtyZXR1cm4gSShiWzFdLGJbMF0sUmEpK0koYVsxXSxhWzBdLFJhKX1mdW5jdGlvbiBLKGEsYil7cmV0dXJuIEgoYlswXSxiWzFdLFJhKS9IKGFbMF0sYVsxXSxSYSl9ZnVuY3Rpb24gTCgpe3RoaXMuZXZFbD1UYSx0aGlzLmV2V2luPVVhLHRoaXMucHJlc3NlZD0hMSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBNKCl7dGhpcy5ldkVsPVhhLHRoaXMuZXZXaW49WWEseC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5zdG9yZT10aGlzLm1hbmFnZXIuc2Vzc2lvbi5wb2ludGVyRXZlbnRzPVtdfWZ1bmN0aW9uIE4oKXt0aGlzLmV2VGFyZ2V0PSRhLHRoaXMuZXZXaW49X2EsdGhpcy5zdGFydGVkPSExLHguYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIE8oYSxiKXt2YXIgYz1zKGEudG91Y2hlcyksZD1zKGEuY2hhbmdlZFRvdWNoZXMpO3JldHVybiBiJihHYXxIYSkmJihjPXQoYy5jb25jYXQoZCksXCJpZGVudGlmaWVyXCIsITApKSxbYyxkXX1mdW5jdGlvbiBQKCl7dGhpcy5ldlRhcmdldD1iYix0aGlzLnRhcmdldElkcz17fSx4LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBRKGEsYil7dmFyIGM9cyhhLnRvdWNoZXMpLGQ9dGhpcy50YXJnZXRJZHM7aWYoYiYoRWF8RmEpJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9cyhhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbyhhLnRhcmdldCxpKX0pLGI9PT1FYSlmb3IoZT0wO2U8Zi5sZW5ndGg7KWRbZltlXS5pZGVudGlmaWVyXT0hMCxlKys7Zm9yKGU9MDtlPGcubGVuZ3RoOylkW2dbZV0uaWRlbnRpZmllcl0mJmgucHVzaChnW2VdKSxiJihHYXxIYSkmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bdChmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIFIoKXt4LmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgYT1qKHRoaXMuaGFuZGxlcix0aGlzKTt0aGlzLnRvdWNoPW5ldyBQKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyBMKHRoaXMubWFuYWdlcixhKSx0aGlzLnByaW1hcnlUb3VjaD1udWxsLHRoaXMubGFzdFRvdWNoZXM9W119ZnVuY3Rpb24gUyhhLGIpe2EmRWE/KHRoaXMucHJpbWFyeVRvdWNoPWIuY2hhbmdlZFBvaW50ZXJzWzBdLmlkZW50aWZpZXIsVC5jYWxsKHRoaXMsYikpOmEmKEdhfEhhKSYmVC5jYWxsKHRoaXMsYil9ZnVuY3Rpb24gVChhKXt2YXIgYj1hLmNoYW5nZWRQb2ludGVyc1swXTtpZihiLmlkZW50aWZpZXI9PT10aGlzLnByaW1hcnlUb3VjaCl7dmFyIGM9e3g6Yi5jbGllbnRYLHk6Yi5jbGllbnRZfTt0aGlzLmxhc3RUb3VjaGVzLnB1c2goYyk7dmFyIGQ9dGhpcy5sYXN0VG91Y2hlcyxlPWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbmRleE9mKGMpO2E+LTEmJmQuc3BsaWNlKGEsMSl9O3NldFRpbWVvdXQoZSxjYil9fWZ1bmN0aW9uIFUoYSl7Zm9yKHZhciBiPWEuc3JjRXZlbnQuY2xpZW50WCxjPWEuc3JjRXZlbnQuY2xpZW50WSxkPTA7ZDx0aGlzLmxhc3RUb3VjaGVzLmxlbmd0aDtkKyspe3ZhciBlPXRoaXMubGFzdFRvdWNoZXNbZF0sZj1NYXRoLmFicyhiLWUueCksZz1NYXRoLmFicyhjLWUueSk7aWYoZGI+PWYmJmRiPj1nKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIFYoYSxiKXt0aGlzLm1hbmFnZXI9YSx0aGlzLnNldChiKX1mdW5jdGlvbiBXKGEpe2lmKHAoYSxqYikpcmV0dXJuIGpiO3ZhciBiPXAoYSxrYiksYz1wKGEsbGIpO3JldHVybiBiJiZjP2piOmJ8fGM/Yj9rYjpsYjpwKGEsaWIpP2liOmhifWZ1bmN0aW9uIFgoKXtpZighZmIpcmV0dXJuITE7dmFyIGI9e30sYz1hLkNTUyYmYS5DU1Muc3VwcG9ydHM7cmV0dXJuW1wiYXV0b1wiLFwibWFuaXB1bGF0aW9uXCIsXCJwYW4teVwiLFwicGFuLXhcIixcInBhbi14IHBhbi15XCIsXCJub25lXCJdLmZvckVhY2goZnVuY3Rpb24oZCl7YltkXT1jP2EuQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsZCk6ITB9KSxifWZ1bmN0aW9uIFkoYSl7dGhpcy5vcHRpb25zPWxhKHt9LHRoaXMuZGVmYXVsdHMsYXx8e30pLHRoaXMuaWQ9digpLHRoaXMubWFuYWdlcj1udWxsLHRoaXMub3B0aW9ucy5lbmFibGU9bCh0aGlzLm9wdGlvbnMuZW5hYmxlLCEwKSx0aGlzLnN0YXRlPW5iLHRoaXMuc2ltdWx0YW5lb3VzPXt9LHRoaXMucmVxdWlyZUZhaWw9W119ZnVuY3Rpb24gWihhKXtyZXR1cm4gYSZzYj9cImNhbmNlbFwiOmEmcWI/XCJlbmRcIjphJnBiP1wibW92ZVwiOmEmb2I/XCJzdGFydFwiOlwiXCJ9ZnVuY3Rpb24gJChhKXtyZXR1cm4gYT09TWE/XCJkb3duXCI6YT09TGE/XCJ1cFwiOmE9PUphP1wibGVmdFwiOmE9PUthP1wicmlnaHRcIjpcIlwifWZ1bmN0aW9uIF8oYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBhYSgpe1kuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKCl7YWEuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMucFg9bnVsbCx0aGlzLnBZPW51bGx9ZnVuY3Rpb24gY2EoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZGEoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGx9ZnVuY3Rpb24gZWEoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZmEoKXthYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZ2EoKXtZLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGhhKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1sKGIucmVjb2duaXplcnMsaGEuZGVmYXVsdHMucHJlc2V0KSxuZXcgaWEoYSxiKX1mdW5jdGlvbiBpYShhLGIpe3RoaXMub3B0aW9ucz1sYSh7fSxoYS5kZWZhdWx0cyxifHx7fSksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMub2xkQ3NzUHJvcHM9e30sdGhpcy5lbGVtZW50PWEsdGhpcy5pbnB1dD15KHRoaXMpLHRoaXMudG91Y2hBY3Rpb249bmV3IFYodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGphKHRoaXMsITApLGcodGhpcy5vcHRpb25zLnJlY29nbml6ZXJzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWRkKG5ldyBhWzBdKGFbMV0pKTthWzJdJiZiLnJlY29nbml6ZVdpdGgoYVsyXSksYVszXSYmYi5yZXF1aXJlRmFpbHVyZShhWzNdKX0sdGhpcyl9ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLmVsZW1lbnQ7aWYoYy5zdHlsZSl7dmFyIGQ7ZyhhLm9wdGlvbnMuY3NzUHJvcHMsZnVuY3Rpb24oZSxmKXtkPXUoYy5zdHlsZSxmKSxiPyhhLm9sZENzc1Byb3BzW2RdPWMuc3R5bGVbZF0sYy5zdHlsZVtkXT1lKTpjLnN0eWxlW2RdPWEub2xkQ3NzUHJvcHNbZF18fFwiXCJ9KSxifHwoYS5vbGRDc3NQcm9wcz17fSl9fWZ1bmN0aW9uIGthKGEsYyl7dmFyIGQ9Yi5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2QuaW5pdEV2ZW50KGEsITAsITApLGQuZ2VzdHVyZT1jLGMudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCl9dmFyIGxhLG1hPVtcIlwiLFwid2Via2l0XCIsXCJNb3pcIixcIk1TXCIsXCJtc1wiLFwib1wiXSxuYT1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksb2E9XCJmdW5jdGlvblwiLHBhPU1hdGgucm91bmQscWE9TWF0aC5hYnMscmE9RGF0ZS5ub3c7bGE9XCJmdW5jdGlvblwiIT10eXBlb2YgT2JqZWN0LmFzc2lnbj9mdW5jdGlvbihhKXtpZihhPT09ZHx8bnVsbD09PWEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtmb3IodmFyIGI9T2JqZWN0KGEpLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKXt2YXIgZT1hcmd1bWVudHNbY107aWYoZSE9PWQmJm51bGwhPT1lKWZvcih2YXIgZiBpbiBlKWUuaGFzT3duUHJvcGVydHkoZikmJihiW2ZdPWVbZl0pfXJldHVybiBifTpPYmplY3QuYXNzaWduO3ZhciBzYT1oKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGU9T2JqZWN0LmtleXMoYiksZj0wO2Y8ZS5sZW5ndGg7KSghY3x8YyYmYVtlW2ZdXT09PWQpJiYoYVtlW2ZdXT1iW2VbZl1dKSxmKys7cmV0dXJuIGF9LFwiZXh0ZW5kXCIsXCJVc2UgYGFzc2lnbmAuXCIpLHRhPWgoZnVuY3Rpb24oYSxiKXtyZXR1cm4gc2EoYSxiLCEwKX0sXCJtZXJnZVwiLFwiVXNlIGBhc3NpZ25gLlwiKSx1YT0xLHZhPS9tb2JpbGV8dGFibGV0fGlwKGFkfGhvbmV8b2QpfGFuZHJvaWQvaSx3YT1cIm9udG91Y2hzdGFydFwiaW4gYSx4YT11KGEsXCJQb2ludGVyRXZlbnRcIikhPT1kLHlhPXdhJiZ2YS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHphPVwidG91Y2hcIixBYT1cInBlblwiLEJhPVwibW91c2VcIixDYT1cImtpbmVjdFwiLERhPTI1LEVhPTEsRmE9MixHYT00LEhhPTgsSWE9MSxKYT0yLEthPTQsTGE9OCxNYT0xNixOYT1KYXxLYSxPYT1MYXxNYSxQYT1OYXxPYSxRYT1bXCJ4XCIsXCJ5XCJdLFJhPVtcImNsaWVudFhcIixcImNsaWVudFlcIl07eC5wcm90b3R5cGU9e2hhbmRsZXI6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt0aGlzLmV2RWwmJm0odGhpcy5lbGVtZW50LHRoaXMuZXZFbCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZUYXJnZXQmJm0odGhpcy50YXJnZXQsdGhpcy5ldlRhcmdldCx0aGlzLmRvbUhhbmRsZXIpLHRoaXMuZXZXaW4mJm0odyh0aGlzLmVsZW1lbnQpLHRoaXMuZXZXaW4sdGhpcy5kb21IYW5kbGVyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuZXZFbCYmbih0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmbih0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmbih3KHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfX07dmFyIFNhPXttb3VzZWRvd246RWEsbW91c2Vtb3ZlOkZhLG1vdXNldXA6R2F9LFRhPVwibW91c2Vkb3duXCIsVWE9XCJtb3VzZW1vdmUgbW91c2V1cFwiO2koTCx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVNhW2EudHlwZV07YiZFYSYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJkZhJiYxIT09YS53aGljaCYmKGI9R2EpLHRoaXMucHJlc3NlZCYmKGImR2EmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOkJhLHNyY0V2ZW50OmF9KSl9fSk7dmFyIFZhPXtwb2ludGVyZG93bjpFYSxwb2ludGVybW92ZTpGYSxwb2ludGVydXA6R2EscG9pbnRlcmNhbmNlbDpIYSxwb2ludGVyb3V0OkhhfSxXYT17Mjp6YSwzOkFhLDQ6QmEsNTpDYX0sWGE9XCJwb2ludGVyZG93blwiLFlhPVwicG9pbnRlcm1vdmUgcG9pbnRlcnVwIHBvaW50ZXJjYW5jZWxcIjthLk1TUG9pbnRlckV2ZW50JiYhYS5Qb2ludGVyRXZlbnQmJihYYT1cIk1TUG9pbnRlckRvd25cIixZYT1cIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLGkoTSx4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc3RvcmUsYz0hMSxkPWEudHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJtc1wiLFwiXCIpLGU9VmFbZF0sZj1XYVthLnBvaW50ZXJUeXBlXXx8YS5wb2ludGVyVHlwZSxnPWY9PXphLGg9cihiLGEucG9pbnRlcklkLFwicG9pbnRlcklkXCIpO2UmRWEmJigwPT09YS5idXR0b258fGcpPzA+aCYmKGIucHVzaChhKSxoPWIubGVuZ3RoLTEpOmUmKEdhfEhhKSYmKGM9ITApLDA+aHx8KGJbaF09YSx0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlcixlLHtwb2ludGVyczpiLGNoYW5nZWRQb2ludGVyczpbYV0scG9pbnRlclR5cGU6ZixzcmNFdmVudDphfSksYyYmYi5zcGxpY2UoaCwxKSl9fSk7dmFyIFphPXt0b3VjaHN0YXJ0OkVhLHRvdWNobW92ZTpGYSx0b3VjaGVuZDpHYSx0b3VjaGNhbmNlbDpIYX0sJGE9XCJ0b3VjaHN0YXJ0XCIsX2E9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO2koTix4LHtoYW5kbGVyOmZ1bmN0aW9uKGEpe3ZhciBiPVphW2EudHlwZV07aWYoYj09PUVhJiYodGhpcy5zdGFydGVkPSEwKSx0aGlzLnN0YXJ0ZWQpe3ZhciBjPU8uY2FsbCh0aGlzLGEsYik7YiYoR2F8SGEpJiZjWzBdLmxlbmd0aC1jWzFdLmxlbmd0aD09PTAmJih0aGlzLnN0YXJ0ZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6emEsc3JjRXZlbnQ6YX0pfX19KTt2YXIgYWI9e3RvdWNoc3RhcnQ6RWEsdG91Y2htb3ZlOkZhLHRvdWNoZW5kOkdhLHRvdWNoY2FuY2VsOkhhfSxiYj1cInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7aShQLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9YWJbYS50eXBlXSxjPVEuY2FsbCh0aGlzLGEsYik7YyYmdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsYix7cG9pbnRlcnM6Y1swXSxjaGFuZ2VkUG9pbnRlcnM6Y1sxXSxwb2ludGVyVHlwZTp6YSxzcmNFdmVudDphfSl9fSk7dmFyIGNiPTI1MDAsZGI9MjU7aShSLHgse2hhbmRsZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWMucG9pbnRlclR5cGU9PXphLGU9Yy5wb2ludGVyVHlwZT09QmE7aWYoIShlJiZjLnNvdXJjZUNhcGFiaWxpdGllcyYmYy5zb3VyY2VDYXBhYmlsaXRpZXMuZmlyZXNUb3VjaEV2ZW50cykpe2lmKGQpUy5jYWxsKHRoaXMsYixjKTtlbHNlIGlmKGUmJlUuY2FsbCh0aGlzLGMpKXJldHVybjt0aGlzLmNhbGxiYWNrKGEsYixjKX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLnRvdWNoLmRlc3Ryb3koKSx0aGlzLm1vdXNlLmRlc3Ryb3koKX19KTt2YXIgZWI9dShuYS5zdHlsZSxcInRvdWNoQWN0aW9uXCIpLGZiPWViIT09ZCxnYj1cImNvbXB1dGVcIixoYj1cImF1dG9cIixpYj1cIm1hbmlwdWxhdGlvblwiLGpiPVwibm9uZVwiLGtiPVwicGFuLXhcIixsYj1cInBhbi15XCIsbWI9WCgpO1YucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7YT09Z2ImJihhPXRoaXMuY29tcHV0ZSgpKSxmYiYmdGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGUmJm1iW2FdJiYodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbZWJdPWEpLHRoaXMuYWN0aW9ucz1hLnRvTG93ZXJDYXNlKCkudHJpbSgpfSx1cGRhdGU6ZnVuY3Rpb24oKXt0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbil9LGNvbXB1dGU6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gZyh0aGlzLm1hbmFnZXIucmVjb2duaXplcnMsZnVuY3Rpb24oYil7ayhiLm9wdGlvbnMuZW5hYmxlLFtiXSkmJihhPWEuY29uY2F0KGIuZ2V0VG91Y2hBY3Rpb24oKSkpfSksVyhhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe3ZhciBiPWEuc3JjRXZlbnQsYz1hLm9mZnNldERpcmVjdGlvbjtpZih0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQpcmV0dXJuIHZvaWQgYi5wcmV2ZW50RGVmYXVsdCgpO3ZhciBkPXRoaXMuYWN0aW9ucyxlPXAoZCxqYikmJiFtYltqYl0sZj1wKGQsbGIpJiYhbWJbbGJdLGc9cChkLGtiKSYmIW1iW2tiXTtpZihlKXt2YXIgaD0xPT09YS5wb2ludGVycy5sZW5ndGgsaT1hLmRpc3RhbmNlPDIsaj1hLmRlbHRhVGltZTwyNTA7aWYoaCYmaSYmailyZXR1cm59cmV0dXJuIGcmJmY/dm9pZCAwOmV8fGYmJmMmTmF8fGcmJmMmT2E/dGhpcy5wcmV2ZW50U3JjKGIpOnZvaWQgMH0scHJldmVudFNyYzpmdW5jdGlvbihhKXt0aGlzLm1hbmFnZXIuc2Vzc2lvbi5wcmV2ZW50ZWQ9ITAsYS5wcmV2ZW50RGVmYXVsdCgpfX07dmFyIG5iPTEsb2I9MixwYj00LHFiPTgscmI9cWIsc2I9MTYsdGI9MzI7WS5wcm90b3R5cGU9e2RlZmF1bHRzOnt9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gbGEodGhpcy5vcHRpb25zLGEpLHRoaXMubWFuYWdlciYmdGhpcy5tYW5hZ2VyLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LHJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVjb2duaXplV2l0aFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuc2ltdWx0YW5lb3VzO3JldHVybiBhPV8oYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGYoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1fKGEsdGhpcyksZGVsZXRlIHRoaXMuc2ltdWx0YW5lb3VzW2EuaWRdLHRoaXMpfSxyZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJyZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMucmVxdWlyZUZhaWw7cmV0dXJuIGE9XyhhLHRoaXMpLC0xPT09cihiLGEpJiYoYi5wdXNoKGEpLGEucmVxdWlyZUZhaWx1cmUodGhpcykpLHRoaXN9LGRyb3BSZXF1aXJlRmFpbHVyZTpmdW5jdGlvbihhKXtpZihmKGEsXCJkcm9wUmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczthPV8oYSx0aGlzKTt2YXIgYj1yKHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe2MubWFuYWdlci5lbWl0KGIsYSl9dmFyIGM9dGhpcyxkPXRoaXMuc3RhdGU7cWI+ZCYmYihjLm9wdGlvbnMuZXZlbnQrWihkKSksYihjLm9wdGlvbnMuZXZlbnQpLGEuYWRkaXRpb25hbEV2ZW50JiZiKGEuYWRkaXRpb25hbEV2ZW50KSxkPj1xYiYmYihjLm9wdGlvbnMuZXZlbnQrWihkKSl9LHRyeUVtaXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2FuRW1pdCgpP3RoaXMuZW1pdChhKTp2b2lkKHRoaXMuc3RhdGU9dGIpfSxjYW5FbWl0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTx0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aDspe2lmKCEodGhpcy5yZXF1aXJlRmFpbFthXS5zdGF0ZSYodGJ8bmIpKSlyZXR1cm4hMTthKyt9cmV0dXJuITB9LHJlY29nbml6ZTpmdW5jdGlvbihhKXt2YXIgYj1sYSh7fSxhKTtyZXR1cm4gayh0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYocmJ8c2J8dGIpJiYodGhpcy5zdGF0ZT1uYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdm9pZCh0aGlzLnN0YXRlJihvYnxwYnxxYnxzYikmJnRoaXMudHJ5RW1pdChiKSkpOih0aGlzLnJlc2V0KCksdm9pZCh0aGlzLnN0YXRlPXRiKSl9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7fSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe30scmVzZXQ6ZnVuY3Rpb24oKXt9fSxpKGFhLFkse2RlZmF1bHRzOntwb2ludGVyczoxfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMucG9pbnRlcnM7cmV0dXJuIDA9PT1ifHxhLnBvaW50ZXJzLmxlbmd0aD09PWJ9LHByb2Nlc3M6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdGF0ZSxjPWEuZXZlbnRUeXBlLGQ9YiYob2J8cGIpLGU9dGhpcy5hdHRyVGVzdChhKTtyZXR1cm4gZCYmKGMmSGF8fCFlKT9ifHNiOmR8fGU/YyZHYT9ifHFiOmImb2I/YnxwYjpvYjp0Yn19KSxpKGJhLGFhLHtkZWZhdWx0czp7ZXZlbnQ6XCJwYW5cIix0aHJlc2hvbGQ6MTAscG9pbnRlcnM6MSxkaXJlY3Rpb246UGF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmRpcmVjdGlvbixiPVtdO3JldHVybiBhJk5hJiZiLnB1c2gobGIpLGEmT2EmJmIucHVzaChrYiksYn0sZGlyZWN0aW9uVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz0hMCxkPWEuZGlzdGFuY2UsZT1hLmRpcmVjdGlvbixmPWEuZGVsdGFYLGc9YS5kZWx0YVk7cmV0dXJuIGUmYi5kaXJlY3Rpb258fChiLmRpcmVjdGlvbiZOYT8oZT0wPT09Zj9JYTowPmY/SmE6S2EsYz1mIT10aGlzLnBYLGQ9TWF0aC5hYnMoYS5kZWx0YVgpKTooZT0wPT09Zz9JYTowPmc/TGE6TWEsYz1nIT10aGlzLnBZLGQ9TWF0aC5hYnMoYS5kZWx0YVkpKSksYS5kaXJlY3Rpb249ZSxjJiZkPmIudGhyZXNob2xkJiZlJmIuZGlyZWN0aW9ufSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gYWEucHJvdG90eXBlLmF0dHJUZXN0LmNhbGwodGhpcyxhKSYmKHRoaXMuc3RhdGUmb2J8fCEodGhpcy5zdGF0ZSZvYikmJnRoaXMuZGlyZWN0aW9uVGVzdChhKSl9LGVtaXQ6ZnVuY3Rpb24oYSl7dGhpcy5wWD1hLmRlbHRhWCx0aGlzLnBZPWEuZGVsdGFZO3ZhciBiPSQoYS5kaXJlY3Rpb24pO2ImJihhLmFkZGl0aW9uYWxFdmVudD10aGlzLm9wdGlvbnMuZXZlbnQrYiksdGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSl9fSksaShjYSxhYSx7ZGVmYXVsdHM6e2V2ZW50OlwicGluY2hcIix0aHJlc2hvbGQ6MCxwb2ludGVyczoyfSxnZXRUb3VjaEFjdGlvbjpmdW5jdGlvbigpe3JldHVybltqYl19LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJihNYXRoLmFicyhhLnNjYWxlLTEpPnRoaXMub3B0aW9ucy50aHJlc2hvbGR8fHRoaXMuc3RhdGUmb2IpfSxlbWl0OmZ1bmN0aW9uKGEpe2lmKDEhPT1hLnNjYWxlKXt2YXIgYj1hLnNjYWxlPDE/XCJpblwiOlwib3V0XCI7YS5hZGRpdGlvbmFsRXZlbnQ9dGhpcy5vcHRpb25zLmV2ZW50K2J9dGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsYSl9fSksaShkYSxZLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZToyNTEsdGhyZXNob2xkOjl9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2hiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoR2F8SGEpJiYhZil0aGlzLnJlc2V0KCk7ZWxzZSBpZihhLmV2ZW50VHlwZSZFYSl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ZShmdW5jdGlvbigpe3RoaXMuc3RhdGU9cmIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJkdhKXJldHVybiByYjtyZXR1cm4gdGJ9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnN0YXRlPT09cmImJihhJiZhLmV2ZW50VHlwZSZHYT90aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrXCJ1cFwiLGEpOih0aGlzLl9pbnB1dC50aW1lU3RhbXA9cmEoKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSksaShlYSxhYSx7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bamJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZvYil9fSksaShmYSxhYSx7ZGVmYXVsdHM6e2V2ZW50Olwic3dpcGVcIix0aHJlc2hvbGQ6MTAsdmVsb2NpdHk6LjMsZGlyZWN0aW9uOk5hfE9hLHBvaW50ZXJzOjF9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGJhLnByb3RvdHlwZS5nZXRUb3VjaEFjdGlvbi5jYWxsKHRoaXMpfSxhdHRyVGVzdDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJuIGMmKE5hfE9hKT9iPWEub3ZlcmFsbFZlbG9jaXR5OmMmTmE/Yj1hLm92ZXJhbGxWZWxvY2l0eVg6YyZPYSYmKGI9YS5vdmVyYWxsVmVsb2NpdHlZKSx0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsYSkmJmMmYS5vZmZzZXREaXJlY3Rpb24mJmEuZGlzdGFuY2U+dGhpcy5vcHRpb25zLnRocmVzaG9sZCYmYS5tYXhQb2ludGVycz09dGhpcy5vcHRpb25zLnBvaW50ZXJzJiZxYShiKT50aGlzLm9wdGlvbnMudmVsb2NpdHkmJmEuZXZlbnRUeXBlJkdhfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPSQoYS5vZmZzZXREaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCxhKX19KSxpKGdhLFkse2RlZmF1bHRzOntldmVudDpcInRhcFwiLHBvaW50ZXJzOjEsdGFwczoxLGludGVydmFsOjMwMCx0aW1lOjI1MCx0aHJlc2hvbGQ6OSxwb3NUaHJlc2hvbGQ6MTB9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW2liXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGY9YS5kZWx0YVRpbWU8Yi50aW1lO2lmKHRoaXMucmVzZXQoKSxhLmV2ZW50VHlwZSZFYSYmMD09PXRoaXMuY291bnQpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZihkJiZmJiZjKXtpZihhLmV2ZW50VHlwZSE9R2EpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZz10aGlzLnBUaW1lP2EudGltZVN0YW1wLXRoaXMucFRpbWU8Yi5pbnRlcnZhbDohMCxoPSF0aGlzLnBDZW50ZXJ8fEgodGhpcy5wQ2VudGVyLGEuY2VudGVyKTxiLnBvc1RocmVzaG9sZDt0aGlzLnBUaW1lPWEudGltZVN0YW1wLHRoaXMucENlbnRlcj1hLmNlbnRlcixoJiZnP3RoaXMuY291bnQrPTE6dGhpcy5jb3VudD0xLHRoaXMuX2lucHV0PWE7dmFyIGk9dGhpcy5jb3VudCViLnRhcHM7aWYoMD09PWkpcmV0dXJuIHRoaXMuaGFzUmVxdWlyZUZhaWx1cmVzKCk/KHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXJiLHRoaXMudHJ5RW1pdCgpfSxiLmludGVydmFsLHRoaXMpLG9iKTpyYn1yZXR1cm4gdGJ9LGZhaWxUaW1lb3V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RpbWVyPWUoZnVuY3Rpb24oKXt0aGlzLnN0YXRlPXRifSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwsdGhpcyksdGJ9LHJlc2V0OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKX0sZW1pdDpmdW5jdGlvbigpe3RoaXMuc3RhdGU9PXJiJiYodGhpcy5faW5wdXQudGFwQ291bnQ9dGhpcy5jb3VudCx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKX19KSxoYS5WRVJTSU9OPVwiMi4wLjhcIixoYS5kZWZhdWx0cz17ZG9tRXZlbnRzOiExLHRvdWNoQWN0aW9uOmdiLGVuYWJsZTohMCxpbnB1dFRhcmdldDpudWxsLGlucHV0Q2xhc3M6bnVsbCxwcmVzZXQ6W1tlYSx7ZW5hYmxlOiExfV0sW2NhLHtlbmFibGU6ITF9LFtcInJvdGF0ZVwiXV0sW2ZhLHtkaXJlY3Rpb246TmF9XSxbYmEse2RpcmVjdGlvbjpOYX0sW1wic3dpcGVcIl1dLFtnYV0sW2dhLHtldmVudDpcImRvdWJsZXRhcFwiLHRhcHM6Mn0sW1widGFwXCJdXSxbZGFdXSxjc3NQcm9wczp7dXNlclNlbGVjdDpcIm5vbmVcIix0b3VjaFNlbGVjdDpcIm5vbmVcIix0b3VjaENhbGxvdXQ6XCJub25lXCIsY29udGVudFpvb21pbmc6XCJub25lXCIsdXNlckRyYWc6XCJub25lXCIsdGFwSGlnaGxpZ2h0Q29sb3I6XCJyZ2JhKDAsMCwwLDApXCJ9fTt2YXIgdWI9MSx2Yj0yO2lhLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe3JldHVybiBsYSh0aGlzLm9wdGlvbnMsYSksYS50b3VjaEFjdGlvbiYmdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhLmlucHV0VGFyZ2V0JiYodGhpcy5pbnB1dC5kZXN0cm95KCksdGhpcy5pbnB1dC50YXJnZXQ9YS5pbnB1dFRhcmdldCx0aGlzLmlucHV0LmluaXQoKSksdGhpc30sc3RvcDpmdW5jdGlvbihhKXt0aGlzLnNlc3Npb24uc3RvcHBlZD1hP3ZiOnVifSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zZXNzaW9uO2lmKCFiLnN0b3BwZWQpe3RoaXMudG91Y2hBY3Rpb24ucHJldmVudERlZmF1bHRzKGEpO3ZhciBjLGQ9dGhpcy5yZWNvZ25pemVycyxlPWIuY3VyUmVjb2duaXplcjsoIWV8fGUmJmUuc3RhdGUmcmIpJiYoZT1iLmN1clJlY29nbml6ZXI9bnVsbCk7Zm9yKHZhciBmPTA7ZjxkLmxlbmd0aDspYz1kW2ZdLGIuc3RvcHBlZD09PXZifHxlJiZjIT1lJiYhYy5jYW5SZWNvZ25pemVXaXRoKGUpP2MucmVzZXQoKTpjLnJlY29nbml6ZShhKSwhZSYmYy5zdGF0ZSYob2J8cGJ8cWIpJiYoZT1iLmN1clJlY29nbml6ZXI9YyksZisrfX0sZ2V0OmZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBZKXJldHVybiBhO2Zvcih2YXIgYj10aGlzLnJlY29nbml6ZXJzLGM9MDtjPGIubGVuZ3RoO2MrKylpZihiW2NdLm9wdGlvbnMuZXZlbnQ9PWEpcmV0dXJuIGJbY107cmV0dXJuIG51bGx9LGFkZDpmdW5jdGlvbihhKXtpZihmKGEsXCJhZGRcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmdldChhLm9wdGlvbnMuZXZlbnQpO3JldHVybiBiJiZ0aGlzLnJlbW92ZShiKSx0aGlzLnJlY29nbml6ZXJzLnB1c2goYSksYS5tYW5hZ2VyPXRoaXMsdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSxhfSxyZW1vdmU6ZnVuY3Rpb24oYSl7aWYoZihhLFwicmVtb3ZlXCIsdGhpcykpcmV0dXJuIHRoaXM7aWYoYT10aGlzLmdldChhKSl7dmFyIGI9dGhpcy5yZWNvZ25pemVycyxjPXIoYixhKTstMSE9PWMmJihiLnNwbGljZShjLDEpLHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCkpfXJldHVybiB0aGlzfSxvbjpmdW5jdGlvbihhLGIpe2lmKGEhPT1kJiZiIT09ZCl7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gZyhxKGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc319LG9mZjpmdW5jdGlvbihhLGIpe2lmKGEhPT1kKXt2YXIgYz10aGlzLmhhbmRsZXJzO3JldHVybiBnKHEoYSksZnVuY3Rpb24oYSl7Yj9jW2FdJiZjW2FdLnNwbGljZShyKGNbYV0sYiksMSk6ZGVsZXRlIGNbYV19KSx0aGlzfX0sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJmthKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmphKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0sbGEoaGEse0lOUFVUX1NUQVJUOkVhLElOUFVUX01PVkU6RmEsSU5QVVRfRU5EOkdhLElOUFVUX0NBTkNFTDpIYSxTVEFURV9QT1NTSUJMRTpuYixTVEFURV9CRUdBTjpvYixTVEFURV9DSEFOR0VEOnBiLFNUQVRFX0VOREVEOnFiLFNUQVRFX1JFQ09HTklaRUQ6cmIsU1RBVEVfQ0FOQ0VMTEVEOnNiLFNUQVRFX0ZBSUxFRDp0YixESVJFQ1RJT05fTk9ORTpJYSxESVJFQ1RJT05fTEVGVDpKYSxESVJFQ1RJT05fUklHSFQ6S2EsRElSRUNUSU9OX1VQOkxhLERJUkVDVElPTl9ET1dOOk1hLERJUkVDVElPTl9IT1JJWk9OVEFMOk5hLERJUkVDVElPTl9WRVJUSUNBTDpPYSxESVJFQ1RJT05fQUxMOlBhLE1hbmFnZXI6aWEsSW5wdXQ6eCxUb3VjaEFjdGlvbjpWLFRvdWNoSW5wdXQ6UCxNb3VzZUlucHV0OkwsUG9pbnRlckV2ZW50SW5wdXQ6TSxUb3VjaE1vdXNlSW5wdXQ6UixTaW5nbGVUb3VjaElucHV0Ok4sUmVjb2duaXplcjpZLEF0dHJSZWNvZ25pemVyOmFhLFRhcDpnYSxQYW46YmEsU3dpcGU6ZmEsUGluY2g6Y2EsUm90YXRlOmVhLFByZXNzOmRhLG9uOm0sb2ZmOm4sZWFjaDpnLG1lcmdlOnRhLGV4dGVuZDpzYSxhc3NpZ246bGEsaW5oZXJpdDppLGJpbmRGbjpqLHByZWZpeGVkOnV9KTt2YXIgd2I9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGE/YTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9O3diLkhhbW1lcj1oYSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGhhfSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9aGE6YVtjXT1oYX0od2luZG93LGRvY3VtZW50LFwiSGFtbWVyXCIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oYW1tZXIubWluLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvcnMvaGFtbWVyL2luZGV4LmpzIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXG5cXHUwMDNDaHRtbCBjbGFzcz1cXFwibm8tanNcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ2hlYWRcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDbWV0YSBuYW1lPVxcXCJkZXNjcmlwdGlvblxcXCIgY29udGVudD1cXFwiXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ21ldGEgbmFtZT1cXFwia2V5d29yZHNcXFwiIGNvbnRlbnQ9XFxcIlxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIG5hbWU9XFxcImF1dGhvclxcXCIgY29udGVudD1cXFwiXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2xpbmsgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZmb250cy5nb29nbGVhcGlzLmNvbVxcdTAwMkZjc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwXFxcIiB0eXBlPVxcXCJ0ZXh0XFx1MDAyRmNzc1xcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0N0aXRsZVxcdTAwM0V3ZWF0aGVyIGFwcCB2MC4wLjFcXG4gICAgXFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXG4gIFxcdTAwM0Nib2R5XFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tIHdyYXBwZXItLVxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXFxuICAgICAgXFx1MDAzQyEtLSBtYWluY29udGVudC0tXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5jb250ZW50XFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0MhLS0gbWVudS0tXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICAgICAgICBcXHUwMDNDIS0tIEVORCBtZW51LS1cXHUwMDNFXFxuICAgICAgICBcXHUwMDNDIS0tIGNvbnRlbnQtLVxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vbWFya3VwL19ibG9ja3MvX2NvbnRlbnQucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcbiAgICAgICAgXFx1MDAzQyEtLSBFTkQgY29udGVudC0tXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0MhLS0gRU5EIG1haW5jb250ZW50LS1cXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDIS0tIEVORCB3cmFwcGVyLS1cXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm92ZXJmbG93XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwicHJlbG9hZGVyXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vaW5kZXgucHVnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnUgb3BlblxcXCIgZGF0YS1tZW51XFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9faW5uZXJcXFwiXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJtZW51X19jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19zZWFyY2hcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fc2VhcmNoLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2NpdHktdmlld2VyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX2NpdHktdmlld2VyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX3Rvbmd1ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX292ZXJmbG93XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fbWVudS5wdWdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2VhcmNoXFxcIiBkYXRhLXNlYXJjaFxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcInNlYXJjaF9faW5uZXJcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDaW5wdXQgY2xhc3M9XFxcInNlYXJjaF9faW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJzdGFydCB0eXBlIGNpdHkncyBuYW1lXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19zZWFyY2gucHVnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcblxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyXFxcIiBkYXRhLWNpdHktdmlld2VyXFx1MDAzRVxcbiAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2lubmVyXFxcIiBkYXRhLWNpdHktdmlld2VyLWlubmVyXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbSBhY3RpdmVcXFwiIGRhdGEtZ2VvSWQ9XFxcIjYxNjc4NjVcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VUb3JvbnRvLCBDYW5hZGFcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiIGRhdGEtZ2VvSWQ9XFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VMb3MgQW5nZWxlcywgVVNBXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCIgZGF0YS1nZW9JZD1cXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXFx1MDAzRUxvcyBBbmdlbGVzLCBVU0FcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiIGRhdGEtZ2VvSWQ9XFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VMb3MgQW5nZWxlcywgVVNBXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCIgZGF0YS1nZW9JZD1cXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXFx1MDAzRUxvcyBBbmdlbGVzLCBVU0FcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW1cXFwiIGRhdGEtZ2VvSWQ9XFxcIjUzNjgzNjFcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbVxcdTAwM0VMb3MgQW5nZWxlcywgVVNBXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW0tY2xvc2VcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbVxcXCIgZGF0YS1nZW9JZD1cXFwiNTM2ODM2MVxcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtXFx1MDAzRUxvcyBBbmdlbGVzLCBVU0FcXHUwMDNDYSBjbGFzcz1cXFwiY2l0eS12aWV3ZXJfX2l0ZW0tY2xvc2VcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtY2l0eS12aWV3ZXItaXRlbS1jbG9zZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHktdmlld2VyX19pdGVtXFxcIiBkYXRhLWdlb0lkPVxcXCI1MzY4MzYxXFxcIiBkYXRhLWNpdHktdmlld2VyLWl0ZW1cXHUwMDNFTG9zIEFuZ2VsZXMsIFVTQVxcdTAwM0NhIGNsYXNzPVxcXCJjaXR5LXZpZXdlcl9faXRlbS1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCIgZGF0YS1jaXR5LXZpZXdlci1pdGVtLWNsb3NlXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19jaXR5LXZpZXdlci5wdWdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19pbm5lclxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19jdXJyZW50LWNpdHkucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19hZGRpdGlvbi5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY29udGVudC5wdWdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY3VycmVudC1jaXR5XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eV9faW5uZXJcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fY2l0eS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImN1cnJlbnQtY2l0eV9fb3ZlcmxheVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vbWFya3VwL19ibG9ja3MvX2N1cnJlbnQtY2l0eS5wdWdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eVxcXCJcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19uYW1lXFxcIlxcdTAwM0VUb3JvbnRvLCBDYW5hZGFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHlfX2Rlc2NyXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fZGVzY3ItbWFpblxcXCJcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2l0eV9fd2VhdGhlclxcXCJcXHUwMDNFQ2xvdWRseVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHlfX3RlbXAgY2VsY2l1c1xcXCJcXHUwMDNFMThcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNpdHlfX2Rlc2NyLWltZy13cmFwXFxcIlxcdTAwM0VcXHUwMDNDaW1nIGNsYXNzPVxcXCJjaXR5X19kZXNjci1pbWdcXFwiIHNyYz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRm9wZW53ZWF0aGVybWFwLm9yZ1xcdTAwMkZpbWdcXHUwMDJGd1xcdTAwMkYxMGQucG5nXFxcIlxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaXR5X19kYXRlXFxcIlxcdTAwM0UyNSBOb3ZlbWJlclxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fZGV0YWlscy5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX2hvdXJseS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ2EgY2xhc3M9XFxcImNpdHlfX21vcmVcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRW1vcmUgZGV0YWlsc1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fY2l0eS5wdWdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGV0YWlsc1xcXCJcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXRhaWxzX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19faXRlbS10ZXh0XFxcIlxcdTAwM0VGZWVscyBsaWtlXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJkZXRhaWxzX19udW0gY2VsY2l1c1xcXCJcXHUwMDNFMTRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXRhaWxzX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19faXRlbS10ZXh0XFxcIlxcdTAwM0VIdW1pZGl0eVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19fbnVtXFxcIlxcdTAwM0U1NSVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXRhaWxzX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19faXRlbS10ZXh0XFxcIlxcdTAwM0VXaW5kIHNwZWVkXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJkZXRhaWxzX19udW1cXFwiXFx1MDAzRTNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXRhaWxzX19oaWRkZW5cXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXRhaWxzX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwiZGV0YWlsc19faXRlbS10ZXh0XFxcIlxcdTAwM0VTYW1wbGVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImRldGFpbHNfX251bVxcXCJcXHUwMDNFM1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGV0YWlsc19faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcImRldGFpbHNfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFU2FtcGxlXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJkZXRhaWxzX19udW1cXFwiXFx1MDAzRTNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi9tYXJrdXAvX2Jsb2Nrcy9fZGV0YWlscy5wdWdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhvdXJseV9faW5uZXJcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlclxcXCJcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRpbWVcXFwiXFx1MDAzRTIxOjAwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRlbXBcXFwiXFx1MDAzRTEwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRpbWVcXFwiXFx1MDAzRTIxOjAwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRlbXBcXFwiXFx1MDAzRTEwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRpbWVcXFwiXFx1MDAzRTIxOjAwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRlbXBcXFwiXFx1MDAzRTEwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRpbWVcXFwiXFx1MDAzRTIxOjAwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRlbXBcXFwiXFx1MDAzRTExXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaG91cmx5X19zbGlkZVxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRpbWVcXFwiXFx1MDAzRTIxOjAwXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJob3VybHlfX3NsaWRlLXRlbXBcXFwiXFx1MDAzRTEyXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vbWFya3VwL19ibG9ja3MvX2hvdXJseS5wdWdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDt2YXIgcHVnX2luZGVudCA9IFtdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFxuXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWRkaXRpb25cXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3VsIGNsYXNzPVxcXCJhZGRpdGlvbl9fbGlzdFxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NsaSBjbGFzcz1cXFwiYWRkaXRpb25fX2l0ZW1cXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fbmV4dC1kYXkucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcbiAgICBcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICBcXHUwMDNDbGkgY2xhc3M9XFxcImFkZGl0aW9uX19pdGVtXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX25leHQtZGF5LnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXG4gICAgXFx1MDAzQ2xpIGNsYXNzPVxcXCJhZGRpdGlvbl9faXRlbVxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19uZXh0LWRheS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFxuICAgIFxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgIFxcdTAwM0NsaSBjbGFzcz1cXFwiYWRkaXRpb25fX2l0ZW1cXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9fbmV4dC1kYXkucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcbiAgICBcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICBcXHUwMDNDbGkgY2xhc3M9XFxcImFkZGl0aW9uX19pdGVtXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX25leHQtZGF5LnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXG4gICAgXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4vbWFya3VwL19ibG9ja3MvX2FkZGl0aW9uLnB1Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3ZhciBwdWdfaW5kZW50ID0gW107XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX2ltZy13cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDaW1nIGNsYXNzPVxcXCJuZXgtZGF5X19pbWdcXFwiIHNyYz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRm9wZW53ZWF0aGVybWFwLm9yZ1xcdTAwMkZpbWdcXHUwMDJGd1xcdTAwMkYxMGQucG5nXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX2Rlc2NcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X19kYXRlXFxcIlxcdTAwM0U0IE5vdlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X193ZWF0aGVyXFxcIlxcdTAwM0VDbG91ZGx5XFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5leC1kYXlfX3RlbXBcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X190ZW1wLWRheSBjZWxjaXVzXFxcIlxcdTAwM0UxMlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuZXgtZGF5X190ZW1wLWhpZ2h0IGNlbGNpdXNcXFwiXFx1MDAzRTVcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYWluL21hcmt1cC9fYmxvY2tzL19uZXh0LWRheS5wdWdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQWFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFqQkE7OztBQUdBO0FBQ0E7QUNDQTtBQUNBO0FBQ0E7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUEE7Ozs7QUFJQTtBQUNBO0FIQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBSWhEQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDclBBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QU5DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FPWkE7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFDQTtBUEFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7O0FROUJBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QVJBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FTOUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QVNBQTtBVEFBO0FTQUE7QVRBQTtBU0FBO0FUQUE7QVNBQTtBVEFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBVEFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FTQUE7QVRBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FTQUE7QUFBQTtBVEFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QVNBQTtBVEFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QUFBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBVEFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FBQUE7QVRBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBVEFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBVEFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FBQUE7QVRBQTtBU0FBO0FBQUE7QUFBQTtBVEFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FUQUE7QVNBQTtBQUFBO0FBQUE7QVRBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QVNBQTtBQUFBO0FBQUE7QUFBQTtBVEFBO0FTQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBU0FBO0FUQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBVEFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FTQUE7QUFBQTtBQUFBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FBQUE7QVRBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FTQUE7QVRBQTtBQUFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBVEFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QUFBQTtBQUFBO0FUQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBQUFBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBU0FBO0FBQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FTQUE7QUFBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBQUFBO0FUQUE7QUFBQTtBU0FBO0FUQUE7QVNBQTtBVEFBO0FTQUE7QUFBQTtBQUFBO0FBQUE7QVRBQTtBQUFBO0FTQUE7QUFBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVNBQTtBVEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FTQUE7QVRBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QVVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBWkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBN0NBO0FBQ0E7QUErQ0E7Ozs7OztBYWxEQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QWJDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FjcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3UEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7QUFLQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QUFBQTtBQUFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QUFBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaUJBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBaUJBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QUFBQTtBaUJBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FBQUE7QUFBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QUFBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QUFBQTtBakJBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FpQkFBO0FBQUE7QWpCQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FpQkFBO0FqQkFBO0FpQkFBO0FqQkFBO0FpQkFBO0FqQkFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBaUJBQTtBakJBQTtBaUJBQTtBakJBQTtBaUJBQTtBakJBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBaUJBQTtBQUFBO0FBQUE7QWpCQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FpQkFBO0FBQUE7QUFBQTtBQUFBO0FqQkFBO0FBQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QUFBQTtBaUJBQTtBakJBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FpQkFBO0FqQkFBO0FBQUE7QUFBQTtBaUJBQTtBakJBQTtBQUFBO0FpQkFBO0FBQUE7QWpCQUE7QUFBQTtBaUJBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FpQkFBO0FBQUE7QUFBQTtBQUFBO0FqQkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QWlCQUE7QWpCQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBaUJBQTtBQUFBO0FBQUE7QUFBQTtBakJBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBa0JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Iiwic291cmNlUm9vdCI6IiJ9