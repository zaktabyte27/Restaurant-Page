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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst contactPage = function(){\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()\n    const about = document.createElement(\"div\")\n    about.classList.add(\"about\")\n    about.style.width = \"500px\"\n    about.style.height = \"300px\"\n    const titleh4 = document.createElement(\"h4\")\n    titleh4.textContent = \"Contact\"\n    const description = document.createElement(\"p\")\n    description.textContent = \"Phone Number: 01234 57890\\nEmail:Shazads@hotmail.com\\nCheck our social media too @shazadsRestaurant on twitter\"\n    description.style.fontSize = \"1.5em\"\n    about.appendChild(titleh4)\n    about.appendChild(description)\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(about)\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homepage: () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst homepage = function(){\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()\n    const about = document.createElement(\"div\")\n    about.classList.add(\"about\")\n    about.style.width = \"500px\"\n    about.style.height = \"300px\"\n    const titleh4 = document.createElement(\"h4\")\n    titleh4.textContent = \"About us\"\n    const description = document.createElement(\"p\")\n    description.textContent = \"This is a nice restaurant that you should come to and eat lots of food. Check out the menu for nice food\"\n    description.style.fontSize = \"1.5em\"\n    about.appendChild(titleh4)\n    about.appendChild(description)\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(about)\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nconst content = document.querySelector(\".content\")\nconst homeBtn = document.querySelector(\".homeBtn\")\nconst menuBtn = document.querySelector(\".menuBtn\")\nconst contactBtn = document.querySelector(\".contactBtn\")\n\n\nconst about = document.createElement(\"div\")\nabout.classList.add(\"about\")\nabout.style.width = \"500px\"\nabout.style.height = \"300px\"\nconst titleh4 = document.createElement(\"h4\")\ntitleh4.textContent = \"About us\"\nconst description = document.createElement(\"p\")\ndescription.textContent = \"This is a nice restaurant that you should come to and eat lots of food. Check out the menu for nice food\"\ndescription.style.fontSize = \"1.5em\"\nabout.appendChild(titleh4)\nabout.appendChild(description)\ncontent.appendChild(about)\n\nhomeBtn.addEventListener(\"click\",_home__WEBPACK_IMPORTED_MODULE_0__.homepage)\ncontactBtn.addEventListener(\"click\",_contact__WEBPACK_IMPORTED_MODULE_1__.contactPage)\nmenuBtn.addEventListener(\"click\",_menu__WEBPACK_IMPORTED_MODULE_2__.menuPage)\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst menuPage = function(){\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()\n    const about = document.createElement(\"div\")\n    about.classList.add(\"about\")\n    about.style.width = \"500px\"\n    about.style.height = \"300px\"\n    const titleh4 = document.createElement(\"h4\")\n    titleh4.textContent = \"Menu\"\n    const description = document.createElement(\"p\")\n    description.textContent = \"Check out our amazing menu of food\"\n    description.style.fontSize = \"1.5em\"\n    about.appendChild(titleh4)\n    about.appendChild(description)\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(about)\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;