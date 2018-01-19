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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(selector) {
  switch (typeof selector) {
    case 'string':
      return getNodesFromDom(selector);
    case 'object':
      if (selector instanceof HTMLElement) {
        return new DOMNodeCollection([selector]);
      }
  }
};

function getNodesFromDom(selector) {
  const nodes = document.querySelectorAll(selector);
  let arr = Array.from(nodes);
  return new DOMNodeCollection(arr);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// module.exports.DOMNodeCollection

class DOMNodeCollection {
  constructor(HTMLelements) {
    this.HTMLelements = HTMLelements;
  }

  html(string) {
    if (typeof string === "string") {
      this.forEach((node) => {
        node.innerHTML = string;
      });
    } else if (this.HTMLelements.length > 0) {
      return this.HTMLelements[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(input) {
    this.forEach((el) => {
      el.innerHTML += input;
    });
  }

  attr(key, value){
    if (typeof value === 'string') {
      this.forEach(node => node.setAttribute(key, value));
    } else {
      return this.HTMLelements[0].getAttribute(key);
    }
  }

  addClass(value) {
    if (!this.attr('class')) {
      this.attr('class',value);
    } else {

    }
  }
}


/***/ })
/******/ ]);