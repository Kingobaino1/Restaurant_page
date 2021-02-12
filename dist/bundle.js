/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_bgd_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bgd_image.jpg */ "./src/images/bgd_image.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_bgd_image_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".name {\n  width: 50%;\n}\n#content {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center;\n  background-size: cover;\n}\n\nli {\n  list-style: none;\n}\n\n.advert {\n  height: 500px;\n  filter: opacity(0.8);\n}\n\n.img {\n  height: 200px;\n  margin-top: 5rem;\n}\n\n.sample {\n  height: 100%;\n  border-radius: 50%;\n}\n\n.foot {\n  height: 50px;\n}\n\n.image-item {\n  height: 100px;\n  width: 100px;\n}\n\n.row {\n  filter: opacity(0.8);\n  width: 50%;\n}\n\n.item {\n  opacity: 0.3;\n}\n\na:active {\n  color: blue;\n}\n\n.contact {\n  height: 80vh;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;AACA;EACE,2EAAiE;EACjE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd","sourcesContent":[".name {\n  width: 50%;\n}\n#content {\n  background: url('./images/bgd_image.jpg') no-repeat center center;\n  background-size: cover;\n}\n\nli {\n  list-style: none;\n}\n\n.advert {\n  height: 500px;\n  filter: opacity(0.8);\n}\n\n.img {\n  height: 200px;\n  margin-top: 5rem;\n}\n\n.sample {\n  height: 100%;\n  border-radius: 50%;\n}\n\n.foot {\n  height: 50px;\n}\n\n.image-item {\n  height: 100px;\n  width: 100px;\n}\n\n.row {\n  filter: opacity(0.8);\n  width: 50%;\n}\n\n.item {\n  opacity: 0.3;\n}\n\na:active {\n  color: blue;\n}\n\n.contact {\n  height: 80vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/images/bgd.png":
/*!****************************!*\
  !*** ./src/images/bgd.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b2ab13c75cf656cb88e046b7907dfce5.png");

/***/ }),

/***/ "./src/images/bgd_image.jpg":
/*!**********************************!*\
  !*** ./src/images/bgd_image.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e5fa48f4cf382a161e5e280a512e618a.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/JS/contact.js":
/*!***************************!*\
  !*** ./src/JS/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = () => {
  const contactUs = document.createElement('div');
  const contactElement = document.createElement('div');
  contactElement.className = 'w-50 mx-auto bg-dark h-50 d-flex flex-column';
  const address = document.createElement('p');
  address.textContent = 'Address: Road 1 House 4, Udoka Housing Estate, Awka, Nigeria';
  address.className = 'w-50 mx-auto text-white'
  const phone = document.createElement('p');
  phone.textContent = 'Tel: +2348100000000';
  phone.className = 'w-50 mx-auto text-white';
  contactElement.appendChild(address);
  contactElement.appendChild(phone);
  contactUs.appendChild(contactElement);
  return contactUs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/JS/footer.js":
/*!**************************!*\
  !*** ./src/JS/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const foot = () => {
  const foot = document.createElement('div');
  foot.className = 'bg-dark foot'
  const footer = document.createElement('ul');
  footer.className = 'd-flex justify-content-center mt-3'
  const footElementOne = document.createElement('li');
  footElementOne.innerHTML = 'CopyRight <span>&#169; 2021 Kingsley <a href="https://github.com/Kingobaino1"><i class="fab fa-github text-white"></i></a></span'
  footElementOne.className = 'text-white mt-3'
  footer.appendChild(footElementOne);
  foot.appendChild(footer);
  return foot;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foot);



/***/ }),

/***/ "./src/JS/header.js":
/*!**************************!*\
  !*** ./src/JS/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const head = () => {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'd-flex justify-content-between';
  const title = document.createElement('h3');
  title.className = 'text-secondary m-4';
  title.textContent = 'Kings Restaurant';
  headerContainer.appendChild(title);

  const links = document.createElement('ul');
  links.className = 'd-flex justify-content-between w-25 m-4';

  const home = document.createElement('li');
  home.classList.add('text-white');
  const homeLink = document.createElement('button');
  homeLink.setAttribute('type', 'button');
  homeLink.className = 'text-white btn btn-secondary';
  homeLink.textContent = 'Home';
  home.appendChild(homeLink);
  links.appendChild(home);

  const menu = document.createElement('li');
  menu.classList.add('text-white');
  const menuLink = document.createElement('button');
  menuLink.className = 'text-white btn btn-secondary';
  menuLink.setAttribute('type', 'button');
  menuLink.textContent = 'Menu';
  menu.appendChild(menuLink);
  links.appendChild(menu);

  const contact = document.createElement('li');
  contact.classList.add('text-white');
  const contactLink = document.createElement('button');
  contactLink.className = 'text-white btn btn-secondary';
  contactLink.setAttribute('type', 'button');
  contactLink.textContent = 'Contact';
  contact.appendChild(contactLink);
  links.appendChild(contact);
  headerContainer.appendChild(links);
  return { 
    headerContainer,
    homeLink,
    menuLink,
    contactLink
};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (head);


/***/ }),

/***/ "./src/JS/homePage.js":
/*!****************************!*\
  !*** ./src/JS/homePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/JS/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/JS/footer.js");




const { headerContainer } = (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.default)();
const footer = (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.default)();

const home = () => {
  const div = document.createElement('div');
  const advert = document.createElement('div');
  advert.className = 'mx-auto w-50 advert bg-dark';
  const text = document.createElement('h2');
  text.textContent = "Welcome to Kings' Restaurant";
  text.className = 'm-5 text-white'
  advert.appendChild(text);

  const description = document.createElement('h5');
  description.textContent = "A home of good food(both local and international) and quality wine!";
  description.className = 'm-5 text-white'
  advert.appendChild(description);

  div.appendChild(advert);
  div.appendChild(footer);

  return { div };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/JS/menu.js":
/*!************************!*\
  !*** ./src/JS/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'row bg-dark mx-auto';
  const item1 = document.createElement('div');
  item1.className = 'col-5 m-4 d-flex flex-column align-content-center border';
  const itemImage1 = document.createElement('img');
  itemImage1.setAttribute('src', '../src/images/bgd.png');
  itemImage1.setAttribute('alt', 'Sample image');
  itemImage1.className = 'image-item mx-auto'
  const itemTitle = document.createElement('h2');
  itemTitle.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle.textContent = 'Nkwobi';

  const itemDes = document.createElement('p');
  itemDes.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item1.appendChild(itemImage1);
  item1.appendChild(itemTitle);
  item1.appendChild(itemDes);
  menuContainer.appendChild(item1);

  const item2 = document.createElement('div');
  item2.className = 'col-5 m-4 d-flex flex-column align-content-center border';
  const itemImage2 = document.createElement('img');
  itemImage2.setAttribute('src', '../src/images/abacha.png');
  itemImage2.setAttribute('alt', 'Sample image');
  itemImage2.className = 'image-item mx-auto'
  const itemTitle1 = document.createElement('h2');
  itemTitle1.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle1.textContent = 'Abacha';

  const itemDes1 = document.createElement('p');
  itemDes1.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes1.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item2.appendChild(itemImage2);
  item2.appendChild(itemTitle1);
  item2.appendChild(itemDes1);
  menuContainer.appendChild(item2);

  const item3 = document.createElement('div');
  item3.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage3 = document.createElement('img');
  itemImage3.setAttribute('src', '../src/images/egusi.jpeg');
  itemImage3.setAttribute('alt', 'Sample image');
  itemImage3.className = 'image-item mx-auto';
  const itemTitle2 = document.createElement('h2');
  itemTitle2.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle2.textContent = 'Egusi';

  const itemDes2 = document.createElement('p');
  itemDes2.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes2.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item3.appendChild(itemImage3);
  item3.appendChild(itemTitle2);
  item3.appendChild(itemDes2);
  menuContainer.appendChild(item3);

  const item4 = document.createElement('div');
  item4.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage4 = document.createElement('img');
  itemImage4.setAttribute('src', '../src/images/moi-moi.jpeg');
  itemImage4.setAttribute('alt', 'Sample image');
  itemImage4.className = 'image-item mx-auto'
  const itemTitle3 = document.createElement('h2');
  itemTitle3.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle3.textContent = 'Moi Moi';

  const itemDes3 = document.createElement('p');
  itemDes3.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes3.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item4.appendChild(itemImage4);
  item4.appendChild(itemTitle3);
  item4.appendChild(itemDes3);
  menuContainer.appendChild(item4);

  const item5 = document.createElement('div');
  item5.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage5 = document.createElement('img');
  itemImage5.setAttribute('src', '../src/images/nsala.jpg');
  itemImage5.setAttribute('alt', 'Sample image');
  itemImage5.className = 'image-item mx-auto'
  const itemTitle4 = document.createElement('h2');
  itemTitle4.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle4.textContent = 'Nsala';

  const itemDes4 = document.createElement('p');
  itemDes4.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes4.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item5.appendChild(itemImage5);
  item5.appendChild(itemTitle4);
  item5.appendChild(itemDes4);
  menuContainer.appendChild(item5);

  const item6 = document.createElement('div');
  item6.className = 'col-5 border m-4 d-flex flex-column align-content-center';
  const itemImage6 = document.createElement('img');
  itemImage6.setAttribute('src', '../src/images/ukwa.jpeg');
  itemImage6.setAttribute('alt', 'Sample image');
  itemImage6.className = 'image-item mx-auto';
  const itemTitle5 = document.createElement('h2');
  itemTitle5.className = 'text-white font-weight-bold mx-auto pt-3';
  itemTitle5.textContent = 'Ukwa';

  const itemDes5 = document.createElement('p');
  itemDes5.className = 'text-white font-weight-bold mx-auto pt-3';
  itemDes5.textContent = 'Red oil, Oil bean, Cow head, Cow leg';
  item6.appendChild(itemImage6);
  item6.appendChild(itemTitle5);
  item6.appendChild(itemDes5);
  menuContainer.appendChild(item6);

  const viewMore = document.createElement('div');
  viewMore.className = 'w-50 border mx-auto';
  const h6 = document.createElement('h6');
  h6.className = 'w-50 pt-3 mx-auto text-white';
  h6.innerHTML = 'See more <span><i class="fas fa-arrow-right text-white pt-1"></i></span>'
  viewMore.appendChild(h6);
  menuContainer.appendChild(viewMore);

  return menuContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JS_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS/homePage */ "./src/JS/homePage.js");
/* harmony import */ var _images_bgd_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bgd.png */ "./src/images/bgd.png");
/* harmony import */ var _JS_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/menu.js */ "./src/JS/menu.js");
/* harmony import */ var _JS_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JS/header.js */ "./src/JS/header.js");
/* harmony import */ var _JS_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JS/footer.js */ "./src/JS/footer.js");
/* harmony import */ var _JS_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JS/contact */ "./src/JS/contact.js");







const { div } = (0,_JS_homePage__WEBPACK_IMPORTED_MODULE_0__.default)();
const { headerContainer,
        homeLink, menuLink,
        contactLink
      } = (0,_JS_header_js__WEBPACK_IMPORTED_MODULE_3__.default)();
const content = document.querySelector('#content');
content.appendChild(headerContainer);
content.appendChild(div);

function menuPage() {
  content.innerHTML = ''
  content.appendChild(headerContainer);
  content.appendChild((0,_JS_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)());
  content.appendChild((0,_JS_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)())
}

function homePage() {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild(div);
}

function contactPage() {
  content.innerHTML = '';
  content.appendChild(headerContainer);
  content.appendChild((0,_JS_contact__WEBPACK_IMPORTED_MODULE_5__.default)());
  content.appendChild((0,_JS_footer_js__WEBPACK_IMPORTED_MODULE_4__.default)());
}

homeLink.addEventListener('click', homePage);
menuLink.addEventListener('click', menuPage);
contactLink.addEventListener('click', contactPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW1hZ2VzL2JnZC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2ltYWdlcy9iZ2RfaW1hZ2UuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL0pTL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL0pTL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvSlMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9KUy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvSlMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDN0I7QUFDbkUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsMERBQTZCO0FBQ3RHO0FBQ0EsaURBQWlELGVBQWUsR0FBRyxZQUFZLHdGQUF3RiwyQkFBMkIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLGFBQWEsa0JBQWtCLHlCQUF5QixHQUFHLFVBQVUsa0JBQWtCLHFCQUFxQixHQUFHLGFBQWEsaUJBQWlCLHVCQUF1QixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIsR0FBRyxVQUFVLHlCQUF5QixlQUFlLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxjQUFjLGdCQUFnQixHQUFHLGNBQWMsaUJBQWlCLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFP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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7O1VDZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2ltYWdlcy9iZ2RfaW1hZ2UuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hbWUge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5hZHZlcnQge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGZpbHRlcjogb3BhY2l0eSgwLjgpO1xcbn1cXG5cXG4uaW1nIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5cXG4uc2FtcGxlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZvb3Qge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uaW1hZ2UtaXRlbSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gIGZpbHRlcjogb3BhY2l0eSgwLjgpO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyRUFBaUU7RUFDakUsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hbWUge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9iZ2RfaW1hZ2UuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYWR2ZXJ0IHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC44KTtcXG59XFxuXFxuLmltZyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuLnNhbXBsZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mb290IHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmltYWdlLWl0ZW0ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLnJvdyB7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC44KTtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5pdGVtIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuYTphY3RpdmUge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGhlaWdodDogODB2aDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjJhYjEzYzc1Y2Y2NTZjYjg4ZTA0NmI3OTA3ZGZjZTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1ZmE0OGY0Y2YzODJhMTYxZTVlMjgwYTUxMmU2MThhLmpwZ1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEVsZW1lbnQuY2xhc3NOYW1lID0gJ3ctNTAgbXgtYXV0byBiZy1kYXJrIGgtNTAgZC1mbGV4IGZsZXgtY29sdW1uJztcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiBSb2FkIDEgSG91c2UgNCwgVWRva2EgSG91c2luZyBFc3RhdGUsIEF3a2EsIE5pZ2VyaWEnO1xuICBhZGRyZXNzLmNsYXNzTmFtZSA9ICd3LTUwIG14LWF1dG8gdGV4dC13aGl0ZSdcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBob25lLnRleHRDb250ZW50ID0gJ1RlbDogKzIzNDgxMDAwMDAwMDAnO1xuICBwaG9uZS5jbGFzc05hbWUgPSAndy01MCBteC1hdXRvIHRleHQtd2hpdGUnO1xuICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xuICByZXR1cm4gY29udGFjdFVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0IiwiY29uc3QgZm9vdCA9ICgpID0+IHtcbiAgY29uc3QgZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290LmNsYXNzTmFtZSA9ICdiZy1kYXJrIGZvb3QnXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGZvb3Rlci5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMydcbiAgY29uc3QgZm9vdEVsZW1lbnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBmb290RWxlbWVudE9uZS5pbm5lckhUTUwgPSAnQ29weVJpZ2h0IDxzcGFuPiYjMTY5OyAyMDIxIEtpbmdzbGV5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vS2luZ29iYWlubzFcIj48aSBjbGFzcz1cImZhYiBmYS1naXRodWIgdGV4dC13aGl0ZVwiPjwvaT48L2E+PC9zcGFuJ1xuICBmb290RWxlbWVudE9uZS5jbGFzc05hbWUgPSAndGV4dC13aGl0ZSBtdC0zJ1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdEVsZW1lbnRPbmUpO1xuICBmb290LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIHJldHVybiBmb290O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb290XG5cbiIsImNvbnN0IGhlYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ3RleHQtc2Vjb25kYXJ5IG0tNCc7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0tpbmdzIFJlc3RhdXJhbnQnO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlua3MuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTI1IG0tNCc7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgndGV4dC13aGl0ZScpO1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lTGluay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGhvbWVMaW5rLmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGJ0biBidG4tc2Vjb25kYXJ5JztcbiAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICBsaW5rcy5hcHBlbmRDaGlsZChob21lKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdoaXRlJyk7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVMaW5rLmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGJ0biBidG4tc2Vjb25kYXJ5JztcbiAgbWVudUxpbmsuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gIGxpbmtzLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ3RleHQtd2hpdGUnKTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdExpbmsuY2xhc3NOYW1lID0gJ3RleHQtd2hpdGUgYnRuIGJ0bi1zZWNvbmRhcnknO1xuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcbiAgbGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rcyk7XG4gIHJldHVybiB7IFxuICAgIGhlYWRlckNvbnRhaW5lcixcbiAgICBob21lTGluayxcbiAgICBtZW51TGluayxcbiAgICBjb250YWN0TGlua1xufTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZDtcbiIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWFkIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBmb290IGZyb20gJy4vZm9vdGVyLmpzJztcblxuY29uc3QgeyBoZWFkZXJDb250YWluZXIgfSA9IGhlYWQoKTtcbmNvbnN0IGZvb3RlciA9IGZvb3QoKTtcblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFkdmVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZHZlcnQuY2xhc3NOYW1lID0gJ214LWF1dG8gdy01MCBhZHZlcnQgYmctZGFyayc7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEtpbmdzJyBSZXN0YXVyYW50XCI7XG4gIHRleHQuY2xhc3NOYW1lID0gJ20tNSB0ZXh0LXdoaXRlJ1xuICBhZHZlcnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQSBob21lIG9mIGdvb2QgZm9vZChib3RoIGxvY2FsIGFuZCBpbnRlcm5hdGlvbmFsKSBhbmQgcXVhbGl0eSB3aW5lIVwiO1xuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnbS01IHRleHQtd2hpdGUnXG4gIGFkdmVydC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGFkdmVydCk7XG4gIGRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIHJldHVybiB7IGRpdiB9O1xufVxuZXhwb3J0IGRlZmF1bHQgaG9tZVxuIiwiY29uc3QgbWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdyb3cgYmctZGFyayBteC1hdXRvJztcbiAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbTEuY2xhc3NOYW1lID0gJ2NvbC01IG0tNCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24tY29udGVudC1jZW50ZXIgYm9yZGVyJztcbiAgY29uc3QgaXRlbUltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpdGVtSW1hZ2UxLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvYmdkLnBuZycpO1xuICBpdGVtSW1hZ2UxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1NhbXBsZSBpbWFnZScpO1xuICBpdGVtSW1hZ2UxLmNsYXNzTmFtZSA9ICdpbWFnZS1pdGVtIG14LWF1dG8nXG4gIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGl0ZW1UaXRsZS5jbGFzc05hbWUgPSAndGV4dC13aGl0ZSBmb250LXdlaWdodC1ib2xkIG14LWF1dG8gcHQtMyc7XG4gIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9ICdOa3dvYmknO1xuXG4gIGNvbnN0IGl0ZW1EZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGl0ZW1EZXMuY2xhc3NOYW1lID0gJ3RleHQtd2hpdGUgZm9udC13ZWlnaHQtYm9sZCBteC1hdXRvIHB0LTMnO1xuICBpdGVtRGVzLnRleHRDb250ZW50ID0gJ1JlZCBvaWwsIE9pbCBiZWFuLCBDb3cgaGVhZCwgQ293IGxlZyc7XG4gIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW1JbWFnZTEpO1xuICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtRGVzKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMSk7XG5cbiAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbTIuY2xhc3NOYW1lID0gJ2NvbC01IG0tNCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24tY29udGVudC1jZW50ZXIgYm9yZGVyJztcbiAgY29uc3QgaXRlbUltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpdGVtSW1hZ2UyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvYWJhY2hhLnBuZycpO1xuICBpdGVtSW1hZ2UyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1NhbXBsZSBpbWFnZScpO1xuICBpdGVtSW1hZ2UyLmNsYXNzTmFtZSA9ICdpbWFnZS1pdGVtIG14LWF1dG8nXG4gIGNvbnN0IGl0ZW1UaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBpdGVtVGl0bGUxLmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWJvbGQgbXgtYXV0byBwdC0zJztcbiAgaXRlbVRpdGxlMS50ZXh0Q29udGVudCA9ICdBYmFjaGEnO1xuXG4gIGNvbnN0IGl0ZW1EZXMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpdGVtRGVzMS5jbGFzc05hbWUgPSAndGV4dC13aGl0ZSBmb250LXdlaWdodC1ib2xkIG14LWF1dG8gcHQtMyc7XG4gIGl0ZW1EZXMxLnRleHRDb250ZW50ID0gJ1JlZCBvaWwsIE9pbCBiZWFuLCBDb3cgaGVhZCwgQ293IGxlZyc7XG4gIGl0ZW0yLmFwcGVuZENoaWxkKGl0ZW1JbWFnZTIpO1xuICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtVGl0bGUxKTtcbiAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbURlczEpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0yKTtcblxuICBjb25zdCBpdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtMy5jbGFzc05hbWUgPSAnY29sLTUgYm9yZGVyIG0tNCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24tY29udGVudC1jZW50ZXInO1xuICBjb25zdCBpdGVtSW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGl0ZW1JbWFnZTMuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9lZ3VzaS5qcGVnJyk7XG4gIGl0ZW1JbWFnZTMuc2V0QXR0cmlidXRlKCdhbHQnLCAnU2FtcGxlIGltYWdlJyk7XG4gIGl0ZW1JbWFnZTMuY2xhc3NOYW1lID0gJ2ltYWdlLWl0ZW0gbXgtYXV0byc7XG4gIGNvbnN0IGl0ZW1UaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBpdGVtVGl0bGUyLmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWJvbGQgbXgtYXV0byBwdC0zJztcbiAgaXRlbVRpdGxlMi50ZXh0Q29udGVudCA9ICdFZ3VzaSc7XG5cbiAgY29uc3QgaXRlbURlczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGl0ZW1EZXMyLmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWJvbGQgbXgtYXV0byBwdC0zJztcbiAgaXRlbURlczIudGV4dENvbnRlbnQgPSAnUmVkIG9pbCwgT2lsIGJlYW4sIENvdyBoZWFkLCBDb3cgbGVnJztcbiAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbUltYWdlMyk7XG4gIGl0ZW0zLmFwcGVuZENoaWxkKGl0ZW1UaXRsZTIpO1xuICBpdGVtMy5hcHBlbmRDaGlsZChpdGVtRGVzMik7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuXG4gIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW00LmNsYXNzTmFtZSA9ICdjb2wtNSBib3JkZXIgbS00IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1jb250ZW50LWNlbnRlcic7XG4gIGNvbnN0IGl0ZW1JbWFnZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaXRlbUltYWdlNC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL21vaS1tb2kuanBlZycpO1xuICBpdGVtSW1hZ2U0LnNldEF0dHJpYnV0ZSgnYWx0JywgJ1NhbXBsZSBpbWFnZScpO1xuICBpdGVtSW1hZ2U0LmNsYXNzTmFtZSA9ICdpbWFnZS1pdGVtIG14LWF1dG8nXG4gIGNvbnN0IGl0ZW1UaXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBpdGVtVGl0bGUzLmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWJvbGQgbXgtYXV0byBwdC0zJztcbiAgaXRlbVRpdGxlMy50ZXh0Q29udGVudCA9ICdNb2kgTW9pJztcblxuICBjb25zdCBpdGVtRGVzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaXRlbURlczMuY2xhc3NOYW1lID0gJ3RleHQtd2hpdGUgZm9udC13ZWlnaHQtYm9sZCBteC1hdXRvIHB0LTMnO1xuICBpdGVtRGVzMy50ZXh0Q29udGVudCA9ICdSZWQgb2lsLCBPaWwgYmVhbiwgQ293IGhlYWQsIENvdyBsZWcnO1xuICBpdGVtNC5hcHBlbmRDaGlsZChpdGVtSW1hZ2U0KTtcbiAgaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlMyk7XG4gIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW1EZXMzKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNCk7XG5cbiAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbTUuY2xhc3NOYW1lID0gJ2NvbC01IGJvcmRlciBtLTQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWNvbnRlbnQtY2VudGVyJztcbiAgY29uc3QgaXRlbUltYWdlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpdGVtSW1hZ2U1LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvbnNhbGEuanBnJyk7XG4gIGl0ZW1JbWFnZTUuc2V0QXR0cmlidXRlKCdhbHQnLCAnU2FtcGxlIGltYWdlJyk7XG4gIGl0ZW1JbWFnZTUuY2xhc3NOYW1lID0gJ2ltYWdlLWl0ZW0gbXgtYXV0bydcbiAgY29uc3QgaXRlbVRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGl0ZW1UaXRsZTQuY2xhc3NOYW1lID0gJ3RleHQtd2hpdGUgZm9udC13ZWlnaHQtYm9sZCBteC1hdXRvIHB0LTMnO1xuICBpdGVtVGl0bGU0LnRleHRDb250ZW50ID0gJ05zYWxhJztcblxuICBjb25zdCBpdGVtRGVzNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaXRlbURlczQuY2xhc3NOYW1lID0gJ3RleHQtd2hpdGUgZm9udC13ZWlnaHQtYm9sZCBteC1hdXRvIHB0LTMnO1xuICBpdGVtRGVzNC50ZXh0Q29udGVudCA9ICdSZWQgb2lsLCBPaWwgYmVhbiwgQ293IGhlYWQsIENvdyBsZWcnO1xuICBpdGVtNS5hcHBlbmRDaGlsZChpdGVtSW1hZ2U1KTtcbiAgaXRlbTUuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlNCk7XG4gIGl0ZW01LmFwcGVuZENoaWxkKGl0ZW1EZXM0KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNSk7XG5cbiAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbTYuY2xhc3NOYW1lID0gJ2NvbC01IGJvcmRlciBtLTQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWNvbnRlbnQtY2VudGVyJztcbiAgY29uc3QgaXRlbUltYWdlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpdGVtSW1hZ2U2LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvdWt3YS5qcGVnJyk7XG4gIGl0ZW1JbWFnZTYuc2V0QXR0cmlidXRlKCdhbHQnLCAnU2FtcGxlIGltYWdlJyk7XG4gIGl0ZW1JbWFnZTYuY2xhc3NOYW1lID0gJ2ltYWdlLWl0ZW0gbXgtYXV0byc7XG4gIGNvbnN0IGl0ZW1UaXRsZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBpdGVtVGl0bGU1LmNsYXNzTmFtZSA9ICd0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWJvbGQgbXgtYXV0byBwdC0zJztcbiAgaXRlbVRpdGxlNS50ZXh0Q29udGVudCA9ICdVa3dhJztcblxuICBjb25zdCBpdGVtRGVzNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaXRlbURlczUuY2xhc3NOYW1lID0gJ3RleHQtd2hpdGUgZm9udC13ZWlnaHQtYm9sZCBteC1hdXRvIHB0LTMnO1xuICBpdGVtRGVzNS50ZXh0Q29udGVudCA9ICdSZWQgb2lsLCBPaWwgYmVhbiwgQ293IGhlYWQsIENvdyBsZWcnO1xuICBpdGVtNi5hcHBlbmRDaGlsZChpdGVtSW1hZ2U2KTtcbiAgaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlNSk7XG4gIGl0ZW02LmFwcGVuZENoaWxkKGl0ZW1EZXM1KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNik7XG5cbiAgY29uc3Qgdmlld01vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmlld01vcmUuY2xhc3NOYW1lID0gJ3ctNTAgYm9yZGVyIG14LWF1dG8nO1xuICBjb25zdCBoNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gIGg2LmNsYXNzTmFtZSA9ICd3LTUwIHB0LTMgbXgtYXV0byB0ZXh0LXdoaXRlJztcbiAgaDYuaW5uZXJIVE1MID0gJ1NlZSBtb3JlIDxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFycm93LXJpZ2h0IHRleHQtd2hpdGUgcHQtMVwiPjwvaT48L3NwYW4+J1xuICB2aWV3TW9yZS5hcHBlbmRDaGlsZChoNik7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld01vcmUpO1xuXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9KUy9ob21lUGFnZSc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9iZ2QucG5nJztcbmltcG9ydCBtZW51IGZyb20gJy4vSlMvbWVudS5qcyc7XG5pbXBvcnQgaGVhZCBmcm9tICcuL0pTL2hlYWRlci5qcyc7XG5pbXBvcnQgZm9vdCBmcm9tICcuL0pTL2Zvb3Rlci5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL0pTL2NvbnRhY3QnO1xuXG5jb25zdCB7IGRpdiB9ID0gaG9tZSgpO1xuY29uc3QgeyBoZWFkZXJDb250YWluZXIsXG4gICAgICAgIGhvbWVMaW5rLCBtZW51TGluayxcbiAgICAgICAgY29udGFjdExpbmtcbiAgICAgIH0gPSBoZWFkKCk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdCgpKVxufVxuXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290KCkpO1xufVxuXG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVQYWdlKTtcbm1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVBhZ2UpO1xuY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0UGFnZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==