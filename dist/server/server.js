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

/***/ "./src/server/indexTemplate.js"
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
(__unused_webpack_module, exports) {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.indexTemplate = void 0;\nconst indexTemplate = (content) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Reddit</title>\r\n  <script src=\"/static/client.js\"></script>\r\n</head>\r\n<body>\r\n  <div id=\"root\">${content}</div>\r\n</body>\r\n</html>`;\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack://new/./src/server/indexTemplate.js?\n}");

/***/ },

/***/ "./src/server/server.js"
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst Header_1 = __importDefault(__webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\"));\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nconst HeaderHtml = (0, server_1.renderToString)(react_1.default.createElement(Header_1.default, null));\n// const express = require('express');\nconst app = (0, express_1.default)();\n// // Добавляем базовую политику безопасности для разработки.\n// // На проде эту политику нужно чуть жестче настроить.\n// app.use((req, res, next) => {\n//   res.set(\"Content-Security-Policy\", \"default-src 'self'; connect-src 'self' http://localhost:3000 https://localhost:3000; script-src 'self'; style-src 'self';\");\n//   next();\n// });\napp.use(\"/static\", express_1.default.static(\"dist/client\"));\napp.get(\"/\", (req, res) => {\n    res.send((0, indexTemplate_1.indexTemplate)(HeaderHtml));\n});\napp.listen(3000, () => {\n    console.log(\"Server started on http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack://new/./src/server/server.js?\n}");

/***/ },

/***/ "./src/shared/Header.jsx"
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
(__unused_webpack_module, exports, __webpack_require__) {

eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = Header;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction Header() {\n    return (react_1.default.createElement(\"header\", null,\n        react_1.default.createElement(\"h1\", null, \"My React App  \\u0432\\u0430\\u043F\\u0432\\u0430\\u043F 12 erwer3\")));\n}\n\n\n//# sourceURL=webpack://new/./src/shared/Header.jsx?\n}");

/***/ },

/***/ "express"
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
(module) {

module.exports = require("express");

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = require("react");

/***/ },

/***/ "react-dom/server"
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
(module) {

module.exports = require("react-dom/server");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;