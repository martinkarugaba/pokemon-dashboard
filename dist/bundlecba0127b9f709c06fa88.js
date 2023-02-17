/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes breathing {\n  0% {\n    width: 150px;\n  }\n  50% {\n    width: 200px;\n  }\n  100% {\n    width: 150px;\n  }\n}\n.cards-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 4rem 8rem;\n  gap: 4rem;\n}\n\n.card {\n  flex: 1;\n  flex-basis: 300px;\n  border: 1px solid #212121;\n  border-radius: 15px;\n  padding: 2rem 1rem;\n  display: grid;\n  place-items: center;\n}\n\n.card .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  width: 70%;\n}\n\n.card .name {\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.125rem;\n}\n\n.card .comment__button {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  margin-top: 2rem;\n  cursor: pointer;\n}\n\n.card__image {\n  width: 200px;\n  height: 200px;\n  object-fit: contain;\n  animation-name: breathing;\n  animation-duration: 5s;\n  animation-iteration-count: infinite;\n}\n\n.card .like {\n  cursor: pointer;\n  transition: all ease-in 0.05s;\n  margin-left: 1rem;\n  color: rgba(244, 176, 176, 0.708);\n}\n\n.card .like:hover {\n  scale: 1.2;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;EACE;IACE,YAAA;EACF;EAEA;IACE,YAAA;EAAF;EAGA;IACE,YAAA;EADF;AACF;AAIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,SAAA;AAFF;;AAKA;EACE,OAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AAFF;;AAKA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;AAFF;;AAKA;EACE,0BAAA;EACA,gBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AAFF;;AAKA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,mCAAA;AAFF;;AAKA;EACE,eAAA;EACA,6BAAA;EACA,iBAAA;EACA,iCAAA;AAFF;;AAKA;EACE,UAAA;AAFF","sourcesContent":["@keyframes breathing {\n  0% {\n    width: 150px;\n  }\n\n  50% {\n    width: 200px;\n  }\n\n  100% {\n    width: 150px;\n  }\n}\n\n.cards-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 4rem 8rem;\n  gap: 4rem;\n}\n\n.card {\n  flex: 1;\n  flex-basis: 300px;\n  border: 1px solid #212121;\n  border-radius: 15px;\n  padding: 2rem 1rem;\n  display: grid;\n  place-items: center;\n}\n\n.card .title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  width: 70%;\n}\n\n.card .name {\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 1.125rem;\n}\n\n.card .comment__button {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  margin-top: 2rem;\n  cursor: pointer;\n}\n\n.card__image {\n  width: 200px;\n  height: 200px;\n  object-fit: contain;\n  animation-name: breathing;\n  animation-duration: 5s;\n  animation-iteration-count: infinite;\n}\n\n.card .like {\n  cursor: pointer;\n  transition: all ease-in 0.05s;\n  margin-left: 1rem;\n  color: rgba(244, 176, 176, 0.708);\n}\n\n.card .like:hover {\n  scale: 1.2;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes breathing2 {\n  0% {\n    width: 90%;\n  }\n  50% {\n    width: 100%;\n  }\n  100% {\n    width: 90%;\n  }\n}\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 4rem;\n}\n\n.logo img {\n  width: 100%;\n}\n\nmain {\n  min-height: calc(85vh - 20px);\n}\n\n.logo-wrapper {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.logo-wrapper p {\n  margin-left: 1rem;\n}\n\n.logo {\n  border: 1px solid black;\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n}\n\nnav {\n  width: 35%;\n  min-width: 290px;\n}\n\nnav .menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n}\n\nfooter {\n  padding: 1rem 4rem;\n  border: 1px inset black;\n  border-radius: 15px;\n  margin: 5px 10px;\n}\n\n.popupsection {\n  position: fixed;\n  top: 0%;\n  left: auto;\n  right: auto;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(255, 255, 255, 0.7);\n  margin: auto;\n}\n\n.upfront {\n  width: 60%;\n  height: 90vh;\n  margin: 30px auto;\n  background-color: #fff;\n  border: 1px outset black;\n  padding: 1rem 3rem;\n  overflow: scroll;\n  border-radius: 15px;\n}\n\n.upfront::-webkit-scrollbar {\n  display: none;\n}\n\n#namePop {\n  font-size: 35px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.wrapimageBtn {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n}\n\n.imageWrap {\n  width: 100%;\n}\n\n.popupImg {\n  width: 100%;\n  height: 80vh;\n  flex-grow: 5;\n  animation-name: breathing2;\n  animation-duration: 5s;\n  animation-iteration-count: infinite;\n}\n\n.cross {\n  flex-grow: 1;\n}\n\n.pokemonName {\n  text-align: center;\n}\n\n.popupSubH {\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.commentSection li {\n  list-style: disc;\n}\n\n.Add-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 2rem;\n  border-radius: 15px;\n  box-shadow: 0 -5px 16px 6px rgba(0, 0, 0, 0.5);\n  margin: 5rem auto 1rem auto;\n}\n\n.inputs {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  padding: 1rem 3rem;\n}\n\n.inputs input,\n.inputs textarea,\n.inputs button {\n  height: 2rem;\n  padding: 0.125rem;\n  outline: none;\n  border-radius: 5px;\n}\n\n.pokemonLocation,\n.pokemonType {\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n}\n\n.pokemonType li {\n  width: fit-content;\n  font-size: large;\n  padding: 0.1rem 0.5rem;\n  border-radius: 5px;\n  background-color: rgb(218, 216, 216);\n}\n\n.inputs textarea {\n  height: 4rem;\n}\n\n.usr-name,\n.cmnt {\n  text-transform: capitalize;\n}\n\n.usr-name {\n  font-weight: bold;\n  width: 14%;\n}\n\n.date {\n  font-size: 11px;\n}\n\n.commentSection {\n  border: 1px solid black;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.specialmoves {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  align-items: center;\n  margin: auto;\n  list-style: none;\n}\n\n.moves {\n  text-align: center;\n  font-style: italic;\n  margin: 2rem auto;\n}\n\n.specialmoves li {\n  width: 46%;\n  text-align: center;\n}\n\n.specialmoves li span {\n  text-transform: uppercase;\n  width: 60%;\n  display: block;\n  margin: auto;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: blanchedalmond;\n}\n\n.commentsWow {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 15px;\n  gap: 1rem;\n  overflow: hidden;\n  padding: 0.3rem;\n}\n\n.commentsWow:nth-of-type(even) {\n  background-color: rgb(215, 212, 212);\n}\n\n.commentsWow:hover {\n  background-color: rgba(252, 160, 160, 0.596);\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE;IACE,UAAA;EACF;EAEA;IACE,WAAA;EAAF;EAGA;IACE,UAAA;EADF;AACF;AAIA;EACE,uBAAA;AAFF;;AAKA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAFF;;AAKA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,WAAA;AAFF;;AAKA;EACE,6BAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,uBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AAFF;;AAKA;EACE,UAAA;EACA,gBAAA;AAFF;;AAKA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;AAFF;;AAKA;EACE,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AAFF;;AAKA;EACE,eAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,0CAAA;EACA,YAAA;AAFF;;AAKA;EACE,UAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,aAAA;AAFF;;AAKA;EACE,eAAA;EACA,gBAAA;EACA,yBAAA;AAFF;;AAKA;EACE,WAAA;EACA,aAAA;EACA,SAAA;AAFF;;AAKA;EACE,WAAA;AAFF;;AAKA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;EACA,mCAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,kBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,cAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAKA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,mBAAA;EACA,8CAAA;EACA,2BAAA;AAFF;;AAKA;EACE,aAAA;EACA,SAAA;EACA,sBAAA;EACA,kBAAA;AAFF;;AAKA;;;EAGE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;AAFF;;AAKA;;EAEE,aAAA;EACA,6BAAA;EACA,gBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,oCAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;;EAEE,0BAAA;AAFF;;AAKA;EACE,iBAAA;EACA,UAAA;AAFF;;AAKA;EACE,eAAA;AAFF;;AAKA;EACE,uBAAA;EACA,mBAAA;EACA,gBAAA;AAFF;;AAKA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,kBAAA;EACA,iBAAA;AAFF;;AAKA;EACE,UAAA;EACA,kBAAA;AAFF;;AAKA;EACE,yBAAA;EACA,UAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,gCAAA;AAFF;;AAKA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;AAFF;;AAKA;EACE,oCAAA;AAFF;;AAKA;EACE,4CAAA;AAFF;;AAKA;EACE,aAAA;AAFF","sourcesContent":["@keyframes breathing2 {\n  0% {\n    width: 90%;\n  }\n\n  50% {\n    width: 100%;\n  }\n\n  100% {\n    width: 90%;\n  }\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 4rem;\n}\n\n.logo img {\n  width: 100%;\n}\n\nmain {\n  min-height: calc(85vh - 20px);\n}\n\n.logo-wrapper {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.logo-wrapper p {\n  margin-left: 1rem;\n}\n\n.logo {\n  border: 1px solid black;\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n}\n\nnav {\n  width: 35%;\n  min-width: 290px;\n}\n\nnav .menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  width: 100%;\n}\n\nfooter {\n  padding: 1rem 4rem;\n  border: 1px inset black;\n  border-radius: 15px;\n  margin: 5px 10px;\n}\n\n.popupsection {\n  position: fixed;\n  top: 0%;\n  left: auto;\n  right: auto;\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(255, 255, 255, 70%);\n  margin: auto;\n}\n\n.upfront {\n  width: 60%;\n  height: 90vh;\n  margin: 30px auto;\n  background-color: #fff;\n  border: 1px outset black;\n  padding: 1rem 3rem;\n  overflow: scroll;\n  border-radius: 15px;\n}\n\n.upfront::-webkit-scrollbar {\n  display: none;\n}\n\n#namePop {\n  font-size: 35px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.wrapimageBtn {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n}\n\n.imageWrap {\n  width: 100%;\n}\n\n.popupImg {\n  width: 100%;\n  height: 80vh;\n  flex-grow: 5;\n  animation-name: breathing2;\n  animation-duration: 5s;\n  animation-iteration-count: infinite;\n}\n\n.cross {\n  flex-grow: 1;\n}\n\n.pokemonName {\n  text-align: center;\n}\n\n.popupSubH {\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.commentSection li {\n  list-style: disc;\n}\n\n.Add-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 2rem;\n  border-radius: 15px;\n  box-shadow: 0 -5px 16px 6px rgba(0, 0, 0, 0.5);\n  margin: 5rem auto 1rem auto;\n}\n\n.inputs {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  padding: 1rem 3rem;\n}\n\n.inputs input,\n.inputs textarea,\n.inputs button {\n  height: 2rem;\n  padding: 0.125rem;\n  outline: none;\n  border-radius: 5px;\n}\n\n.pokemonLocation,\n.pokemonType {\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n}\n\n.pokemonType li {\n  width: fit-content;\n  font-size: large;\n  padding: 0.1rem 0.5rem;\n  border-radius: 5px;\n  background-color: rgb(218, 216, 216);\n}\n\n.inputs textarea {\n  height: 4rem;\n}\n\n.usr-name,\n.cmnt {\n  text-transform: capitalize;\n}\n\n.usr-name {\n  font-weight: bold;\n  width: 14%;\n}\n\n.date {\n  font-size: 11px;\n}\n\n.commentSection {\n  border: 1px solid black;\n  border-radius: 15px;\n  overflow: hidden;\n}\n\n.specialmoves {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  align-items: center;\n  margin: auto;\n  list-style: none;\n}\n\n.moves {\n  text-align: center;\n  font-style: italic;\n  margin: 2rem auto;\n}\n\n.specialmoves li {\n  width: 46%;\n  text-align: center;\n}\n\n.specialmoves li span {\n  text-transform: uppercase;\n  width: 60%;\n  display: block;\n  margin: auto;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: blanchedalmond;\n}\n\n.commentsWow {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 15px;\n  gap: 1rem;\n  overflow: hidden;\n  padding: 0.3rem;\n}\n\n.commentsWow:nth-of-type(even) {\n  background-color: rgb(215, 212, 212);\n}\n\n.commentsWow:hover {\n  background-color: rgba(252, 160, 160, 0.596);\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const id = 'Qtf3crftMlT7ljX0e5jU';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const url = `${baseUrl}apps/${id}/likes/`;

const sendLike = async (like) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(like),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const retrieveLike = async (name) => {
  const response = await fetch(url);
  const data = await response.json();
  const likedItem = data.find((item) => item.item_id === name);
  const likesContainer = document.querySelector(`.${name}`);
  const heart = document.querySelector(`.${name}.like`);
  likesContainer.innerHTML = likedItem.likes;
  heart.style.color = 'rgba(244, 176, 176, 0.708)';
};

const addLike = async () => {
  const likeButtons = document.querySelectorAll('.like');
  likeButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { name } = e.target.dataset;
      const like = { item_id: name, name };
      const { item_id: id } = like;
      const heart = document.querySelector(`.${name}.like`);
      heart.style.color = 'red';
      await sendLike(like);
      retrieveLike(id, name);
    });
  });
};

const fetchLikes = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const cardsContainer = document.querySelector('.cards-container');
  const likes = cardsContainer.querySelectorAll('span');

  likes.forEach((like) => {
    data.forEach((item) => {
      if (item.item_id === like.dataset.name) {
        like.innerHTML = item.likes;
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  fetchLikes();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);


/***/ }),

/***/ "./src/modules/cmntCounter.js":
/*!************************************!*\
  !*** ./src/modules/cmntCounter.js ***!
  \************************************/
/***/ ((module) => {

const commentCounter = () => {
  const comments = document.querySelectorAll('.commentsWow');
  const commentCount = document.querySelector('#commentCount');
  commentCount.innerHTML = `(${comments.length})`;
};

module.exports = commentCounter;

/***/ }),

/***/ "./src/modules/comment-post.js":
/*!*************************************!*\
  !*** ./src/modules/comment-post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const id = '01bPQut4VIty6lAPGuX9';
const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/comments`;
const commentCounter = __webpack_require__(/*! ./cmntCounter.js */ "./src/modules/cmntCounter.js");

const postComments = async (name, comment1, id) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: comment1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComments = async (querryid) => {
  const response = await fetch(`${baseUrl}?item_id=${querryid}`);
  const data = await response.json();
  const commentSection = document.querySelector('.commentSection');
  commentSection.innerHTML = '';

  // Check if data is an array
  if (!Array.isArray(data)) {
    commentSection.innerHTML = '<p class="nocomment">there is no comments yet</p>';
    return;
  }

  data.forEach((element) => {
    commentSection.innerHTML += `
    <li class="commentsWow">
      <span class="date">${element.creation_date}</span>
      <span class="usr-name">${element.username}</span> :
      <span class="cmnt">${element.comment}<span>
    </li>
    `;
  });

  await commentCounter();
};

const formSubmition = async () => {
  // e.preventDefault();
  const commentid = document.querySelector('#commentPostId');
  const name = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  const submitBtn = document.querySelector('.submit');
  const error = document.querySelector('.error');

  if (
    name.value.length > 8
    || name.value.trim().length === 0
    || comment.value.trim().length === 0
    || comment.value.length > 20
  ) {
    error.innerHTML = 'please submit valid comment or name';
    submitBtn.disabled = false;
    submitBtn.innerText = 'Try again';
    setInterval(() => window.location.reload(), 2000);
    return;
  }
  submitBtn.disabled = true;
  submitBtn.innerText = 'Posting...';
  await postComments(name.value, comment.value, commentid.value);
  name.value = '';
  comment.value = '';
  submitBtn.disabled = false;
  submitBtn.innerText = 'submit';
  getComments(commentid.value);
};

const from = document.querySelector('.Add-comment');

from.addEventListener('submit', (e) => {
  e.preventDefault();
  formSubmition();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/commentPopUP.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopUP.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ "./src/modules/fetchData.js");
/* harmony import */ var _comment_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-post.js */ "./src/modules/comment-post.js");
 // eslint-disable-line


const showPop = async (id) => {
  const dataRequired = _fetchData_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter((data) => data.id === Number(id));
  const move = [...dataRequired[0].move];

  const namePop = document.querySelector('#namePop');
  const imagePop = document.querySelector('#imagePop');
  imagePop.src = '';
  const specialMoves = document.querySelector('.specialmoves');

  move.forEach((element) => {
    specialMoves.innerHTML += `
      <li><span>${element.move.name}</span></li>
    `;
  });
  const unhidden = document.querySelector('.popupsection');
  const commentPostId = document.querySelector('#commentPostId');
  const name = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  name.value = '';
  comment.value = '';

  //  this eslint is not working for sure i had destructured it then too
  commentPostId.value = dataRequired[0].items[1]; // eslint-disable-line 
  namePop.innerHTML = dataRequired[0].items[1]; // eslint-disable-line
  imagePop.src = `${dataRequired[0].items[0]}`; // eslint-disable-line
  unhidden.classList.toggle('hidden');
  await (0,_comment_post_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentPostId.value);
};

const hidePop = () => {
  const unhidden = document.querySelector('.popupsection');
  const commentCount = document.querySelector('#commentCount');
  commentCount.innerHTML = '(0)';
  const specialMoves = document.querySelector('.specialmoves');
  specialMoves.innerHTML = '';
  unhidden.classList.toggle('hidden');
};

const cross = document.querySelector('.cross');
const popupsectionBackground = document.querySelector('.popupsection');
const upfront = document.querySelector('.upfront');

upfront.addEventListener('click', (event) => {
  event.stopPropagation();
});
popupsectionBackground.addEventListener('click', hidePop);

cross.addEventListener('click', hidePop);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPop);


/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLike.js */ "./src/modules/addLike.js");
/* harmony import */ var _commentPopUP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopUP.js */ "./src/modules/commentPopUP.js");

 // eslint-disable-line
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
const cardsContainer = document.querySelector('.cards-container');

const dataBase = [];

const fetchImage = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const {
    sprites: {
      other: {
        dream_world: { front_default: image },
      },
    },
    species: { name },
    id,
  } = data;

  cardsContainer.innerHTML += `
    <div class='card'>
      <img class="card__image" src=${image} alt=${name}/>
      <div class="title">
        <p class="name">${name}</p>
        <p class="card__likes">Likes <span data-name=${name} class="like-count ${name}">${0}</span> <i class="fa-solid fa-heart ${name} like" data-name=${name}></i></p>
      </div>
      <button class="comment__button" id="${id}">Comment</button>
    </div>
  `;

  (0,_addLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // console.log(data)
  dataBase.push({
    id,
    items: [image, name],
    move: data.moves.slice(0, 4),
  });
};

const fetchData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const { results } = data;

  results.forEach((item) => {
    const { url } = item;
    fetchImage(url);
  });

  cardsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('comment__button')) {
      (0,_commentPopUP_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target.id);
    }
  });
};

fetchData();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataBase);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fetchData.js */ "./src/modules/fetchData.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _modules_comment_post_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comment-post.js */ "./src/modules/comment-post.js");





})();

/******/ })()
;
//# sourceMappingURL=bundlecba0127b9f709c06fa88.js.map