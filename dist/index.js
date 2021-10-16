/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\n/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/map.png */ \"./src/img/map.png\");\n/* harmony import */ var _img_bonfireIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bonfireIcon.png */ \"./src/img/bonfireIcon.png\");\n\r\n\r\nfunction renderContact(){\r\n    const contact = document.createElement('div')\r\n    contact.classList.add('mainContent')\r\n    \r\n    const bonfire = document.createElement('div')\r\n    bonfire.id = \"bonfire\"\r\n    const bonfireName = document.createElement('h3');\r\n    bonfireName.innerHTML = \"Third bonfire from Undead Asylum.<br>Warping via the Lord-Vessel available.\";\r\n    const icon = document.createElement(\"img\")\r\n    icon.src = _img_bonfireIcon_png__WEBPACK_IMPORTED_MODULE_1__\r\n    icon.id = \"icon\"\r\n    \r\n\r\n    bonfire.append(icon)\r\n    bonfire.append(bonfireName)\r\n    \r\n    const map = document.createElement('img');\r\n    map.src = _img_map_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    map.id = 'imgMap';\r\n\r\n    \r\n    contact.append(map);\r\n    contact.append(bonfire);\r\n\r\n    return contact;\r\n}\n\n//# sourceURL=webpack://ResturantPage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _img_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chef.png */ \"./src/img/chef.png\");\n\r\nfunction renderHome(){\r\n    const home = document.createElement('div');\r\n    home.classList.add('mainContent');\r\n\r\n    const image = document.createElement('img');\r\n    image.src = _img_chef_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    image.id = 'imgHome';\r\n\r\n    const about = document.createElement('h1');\r\n    about.id = \"about\"\r\n    about.textContent = \"About Us\";\r\n\r\n    const description = document.createElement('p');\r\n    description.innerHTML = \"<br>We have water, moss, moisture, these nice iron bars...<br>Now dish up some souls! Vee hee hee! \";\r\n    description.id = \"homeDescription\"\r\n\r\n    home.append(about);\r\n    home.append(image);   \r\n    home.append(description);\r\n    return home;\r\n}\n\n//# sourceURL=webpack://ResturantPage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _img_emberBackground_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/emberBackground.jpg */ \"./src/img/emberBackground.jpg\");\n/* harmony import */ var _img_bonfire_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bonfire.jpg */ \"./src/img/bonfire.jpg\");\n// import \"./style.css\";\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\nconst body = document.querySelector(\"body\")\r\nbody.style.backgroundImage = `url(${_img_emberBackground_jpg__WEBPACK_IMPORTED_MODULE_3__})`\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement('header');\r\n    const resturantName = document.createElement('h1');\r\n    const bonfireImg1 = document.createElement('img')\r\n    const bonfireImg2 = document.createElement('img')\r\n    bonfireImg1.src = _img_bonfire_jpg__WEBPACK_IMPORTED_MODULE_4__\r\n    bonfireImg2.src = _img_bonfire_jpg__WEBPACK_IMPORTED_MODULE_4__\r\n    bonfireImg1.classList.add(\"bonfireImg\")\r\n    bonfireImg2.classList.add(\"bonfireImg\")\r\n    bonfireImg2.classList.add(\"bonfireImg2\")\r\n    \r\n    resturantName.textContent = 'Firelink Dine';\r\n    header.appendChild(bonfireImg1);\r\n    header.appendChild(resturantName);\r\n    header.appendChild(bonfireImg2)\r\n\r\n    content.appendChild(header);\r\n}\r\nfunction createFooter(){\r\n    const footer = document.createElement(\"footer\")\r\n    const copyright = document.createElement('p')\r\n    const link = document.createElement('a')\r\n\r\n    copyright.textContent = \"Copyright © 2021\"\r\n    link.text = \"maskudo\"\r\n    link.href = \"https://github.com/maskudo\"\r\n\r\n    footer.append(copyright)\r\n    footer.append(link)\r\n\r\n    content.append(footer)\r\n}\r\nfunction createNav(){\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('navBox');\r\n    \r\n    const home = document.createElement('button');\r\n    home.textContent = 'Home';\r\n    home.id = 'active';\r\n    home.classList.add('active')\r\n    nav.append(home);\r\n\r\n    home.addEventListener('click',e => {\r\n        setActive(home);\r\n        content.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHome)());\r\n        createFooter()\r\n    })\r\n\r\n    const menu = document.createElement('button');\r\n    menu.textContent = 'Menu';\r\n    menu.id = 'menu';\r\n    nav.append(menu);\r\n    menu.addEventListener('click',e => {\r\n        setActive(menu);\r\n        content.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.renderMenu)());\r\n        createFooter()\r\n    })\r\n\r\n    const contact = document.createElement('button');\r\n    contact.textContent = 'Contact';\r\n    contact.id = 'contact';\r\n    nav.append(contact);\r\n    contact.addEventListener('click',e => {\r\n        setActive(contact);\r\n        content.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__.renderContact)());\r\n        createFooter()\r\n    })\r\n\r\n    content.append(nav);\r\n    \r\n}\r\nfunction initMainContent()\r\n{\r\n    content.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHome)());\r\n}\r\n\r\nfunction setActive(navButton){\r\n    const buttons = document.querySelectorAll('button');\r\n    buttons.forEach(button=>{\r\n        if(button.classList == 'active'){\r\n            button.classList.remove('active');\r\n            button.id = \"\"\r\n        }\r\n    })\r\n    const mainContent = content.querySelector('.mainContent')\r\n    content.removeChild(mainContent)\r\n    const footer = content.querySelector(\"footer\")\r\n    content.removeChild(footer)\r\n    \r\n    navButton.classList.add('active')\r\n    navButton.id = \"active\"\r\n}\r\n\r\ncreateHeader();\r\ncreateNav();\r\ninitMainContent();\r\ncreateFooter();\n\n//# sourceURL=webpack://ResturantPage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _img_estus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/estus.png */ \"./src/img/estus.png\");\n/* harmony import */ var _img_bloodredMossClump_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bloodredMossClump.png */ \"./src/img/bloodredMossClump.png\");\n/* harmony import */ var _img_bloomingPurpleMossClump_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bloomingPurpleMossClump.jpg */ \"./src/img/bloomingPurpleMossClump.jpg\");\n/* harmony import */ var _img_divineBlessing_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/divineBlessing.jpg */ \"./src/img/divineBlessing.jpg\");\n/* harmony import */ var _img_greenBlossom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/greenBlossom.png */ \"./src/img/greenBlossom.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenuItem(source,name){\r\n    const menuItem = document.createElement('div')\r\n    const itemName = document.createElement('h2')\r\n    const itemImage = document.createElement('img')\r\n\r\n    menuItem.className = 'menu-item'\r\n\r\n    itemImage.src = source\r\n    itemName.textContent = name\r\n    \r\n    menuItem.append(itemImage)\r\n    menuItem.append(itemName)\r\n\r\n    return menuItem\r\n}\r\nfunction renderMenu(){\r\n    const menu = document.createElement('div')\r\n    menu.classList.add('mainContent')\r\n    menu.classList.add('menu')\r\n    \r\n    const beverages = document.createElement('h1')\r\n    const mainDish = document.createElement('h1')\r\n\r\n    beverages.textContent = \"Beverages\"\r\n    mainDish.textContent = \"Main Dishes\"\r\n\r\n    const item1 = createMenuItem(_img_estus_png__WEBPACK_IMPORTED_MODULE_0__,\"Estus\")\r\n    const item2 = createMenuItem(_img_divineBlessing_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Diving Blessing\")\r\n    const item3 = createMenuItem(_img_bloomingPurpleMossClump_jpg__WEBPACK_IMPORTED_MODULE_2__,\"Blooming Purple Moss Clump\")\r\n    const item4 = createMenuItem(_img_greenBlossom_png__WEBPACK_IMPORTED_MODULE_4__,\"Green Blossom\")\r\n    const item5 = createMenuItem(_img_bloodredMossClump_png__WEBPACK_IMPORTED_MODULE_1__,'Bloodred Moss Clump')\r\n\r\n    menu.append(beverages)\r\n    menu.append(item1)\r\n    menu.append(item2)\r\n    menu.append(mainDish)\r\n    menu.append(item3)\r\n    menu.append(item4)\r\n    menu.append(item5)\r\n    return menu;\r\n}\n\n//# sourceURL=webpack://ResturantPage/./src/menu.js?");

/***/ }),

/***/ "./src/img/bloodredMossClump.png":
/*!***************************************!*\
  !*** ./src/img/bloodredMossClump.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/b17f6da523f0a6f7ed81.png\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/bloodredMossClump.png?");

/***/ }),

/***/ "./src/img/bloomingPurpleMossClump.jpg":
/*!*********************************************!*\
  !*** ./src/img/bloomingPurpleMossClump.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/32c9255a13a901df50a8.jpg\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/bloomingPurpleMossClump.jpg?");

/***/ }),

/***/ "./src/img/bonfire.jpg":
/*!*****************************!*\
  !*** ./src/img/bonfire.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/01f1766f43e3a454fdeb.jpg\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/bonfire.jpg?");

/***/ }),

/***/ "./src/img/bonfireIcon.png":
/*!*********************************!*\
  !*** ./src/img/bonfireIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/7efd8f7da63b5440b0c5.png\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/bonfireIcon.png?");

/***/ }),

/***/ "./src/img/chef.png":
/*!**************************!*\
  !*** ./src/img/chef.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/513c86099f0d5e2cd4ef.png\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/chef.png?");

/***/ }),

/***/ "./src/img/divineBlessing.jpg":
/*!************************************!*\
  !*** ./src/img/divineBlessing.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/a46423767b519e7144a2.jpg\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/divineBlessing.jpg?");

/***/ }),

/***/ "./src/img/emberBackground.jpg":
/*!*************************************!*\
  !*** ./src/img/emberBackground.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1c0bfe0608d0b95a46f7.jpg\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/emberBackground.jpg?");

/***/ }),

/***/ "./src/img/estus.png":
/*!***************************!*\
  !*** ./src/img/estus.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/fa64a8a5a782465bf108.png\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/estus.png?");

/***/ }),

/***/ "./src/img/greenBlossom.png":
/*!**********************************!*\
  !*** ./src/img/greenBlossom.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ce57e327cf4cfac916b2.png\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/greenBlossom.png?");

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/56648c31536d8f626f8f.png\";\n\n//# sourceURL=webpack://ResturantPage/./src/img/map.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;