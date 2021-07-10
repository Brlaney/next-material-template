(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cache": function() { return /* binding */ cache; },
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/cache */ "@emotion/cache");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/theme */ "./src/lib/theme.ts");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/globals.scss */ "./src/scss/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Projects\\My-projects\\next-templates\\next-material-template\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_7___default()({
  key: 'css',
  prepend: true
});
function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {
    value: cache,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "NextJs|Material-Ui"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1 width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "keywords",
        content: "Keywords for seo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: "Describe what this site does/provides"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: _lib_theme__WEBPACK_IMPORTED_MODULE_8__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        key: router.route,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/lib/theme.ts":
/*!**************************!*\
  !*** ./src/lib/theme.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const font = "'Lato', sans-serif";
let theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: '#443850ff'
    },
    secondary: {
      main: '#bbbe64ff'
    },
    error: {
      main: '#8e5572ff'
    },
    warning: {
      main: '#EEE8A9'
    },
    info: {
      main: '#bcaa99ff'
    },
    success: {
      main: '#91EA84'
    },
    background: {
      default: '#f2f7f2ff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1500
    }
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 82
    },
    h2: {
      fontSize: 66
    },
    h3: {
      fontSize: 54
    },
    h4: {
      fontSize: 45
    },
    h5: {
      fontSize: 36
    },
    h6: {
      fontSize: 26
    },
    subtitle1: {
      fontSize: 24
    },
    subtitle2: {
      fontSize: 22
    },
    body1: {
      fontSize: 20
    },
    body2: {
      fontSize: 18
    }
  }
});
theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/scss/globals.scss":
/*!*******************************!*\
  !*** ./src/scss/globals.scss ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHMtbXVpLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLXRzLW11aS8uL3NyYy9saWIvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRzLW11aS9leHRlcm5hbCBcIkBlbW90aW9uL2NhY2hlXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRzLW11aS9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRzLW11aS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXRzLW11aS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovL25leHRqcy10cy1tdWkvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0anMtdHMtbXVpL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtdHMtbXVpL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtdHMtbXVpL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiY2FjaGUiLCJjcmVhdGVDYWNoZSIsImtleSIsInByZXBlbmQiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJyb3V0ZSIsImZvbnQiLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJzdWNjZXNzIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImgxIiwiZm9udFNpemUiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2Iiwic3VidGl0bGUxIiwic3VidGl0bGUyIiwiYm9keTEiLCJib2R5MiIsInJlc3BvbnNpdmVGb250U2l6ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsS0FBSyxHQUFHQyxxREFBVyxDQUFDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQWNDLFNBQU8sRUFBRTtBQUF2QixDQUFELENBQXpCO0FBRVEsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQWdDO0FBQzdDLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQTJCRixLQUFqQztBQUNBLFFBQU1HLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxzQkFDRSw4REFBQyx5REFBRDtBQUFlLFNBQUssRUFBRVQsS0FBdEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFLDhEQUFDLG1FQUFEO0FBQWUsV0FBSyxFQUFFVSwrQ0FBdEI7QUFBQSw4QkFDRSw4REFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxREFBQyxTQUFELGtDQUFlSCxTQUFmO0FBQTBCLFdBQUcsRUFBRUMsTUFBTSxDQUFDRyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQsQzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFLQSxNQUFNQyxJQUFJLEdBQUcsb0JBQWI7QUFFQSxJQUFJRixLQUFLLEdBQUdHLHFFQUFXLENBQUM7QUFDdEJDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxTQUFLLEVBQUU7QUFDTEYsVUFBSSxFQUFFO0FBREQsS0FQQTtBQVVQRyxXQUFPLEVBQUU7QUFDUEgsVUFBSSxFQUFFO0FBREMsS0FWRjtBQWFQSSxRQUFJLEVBQUU7QUFDSkosVUFBSSxFQUFFO0FBREYsS0FiQztBQWdCUEssV0FBTyxFQUFFO0FBQ1BMLFVBQUksRUFBRTtBQURDLEtBaEJGO0FBbUJQTSxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFO0FBREM7QUFuQkwsR0FEYTtBQXdCdEJDLGFBQVcsRUFBRTtBQUNYQyxVQUFNLEVBQUU7QUFDTkMsUUFBRSxFQUFFLENBREU7QUFFTkMsUUFBRSxFQUFFLEdBRkU7QUFHTkMsUUFBRSxFQUFFLEdBSEU7QUFJTkMsUUFBRSxFQUFFLElBSkU7QUFLTkMsUUFBRSxFQUFFO0FBTEU7QUFERyxHQXhCUztBQWlDdEJDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUVwQixJQURGO0FBRVZxQixNQUFFLEVBQUU7QUFDRkMsY0FBUSxFQUFFO0FBRFIsS0FGTTtBQUtWQyxNQUFFLEVBQUU7QUFDRkQsY0FBUSxFQUFFO0FBRFIsS0FMTTtBQVFWRSxNQUFFLEVBQUU7QUFDRkYsY0FBUSxFQUFFO0FBRFIsS0FSTTtBQVdWRyxNQUFFLEVBQUU7QUFDRkgsY0FBUSxFQUFFO0FBRFIsS0FYTTtBQWNWSSxNQUFFLEVBQUU7QUFDRkosY0FBUSxFQUFFO0FBRFIsS0FkTTtBQWlCVkssTUFBRSxFQUFFO0FBQ0ZMLGNBQVEsRUFBRTtBQURSLEtBakJNO0FBb0JWTSxhQUFTLEVBQUU7QUFDVE4sY0FBUSxFQUFFO0FBREQsS0FwQkQ7QUF1QlZPLGFBQVMsRUFBRTtBQUNUUCxjQUFRLEVBQUU7QUFERCxLQXZCRDtBQTBCVlEsU0FBSyxFQUFFO0FBQ0xSLGNBQVEsRUFBRTtBQURMLEtBMUJHO0FBNkJWUyxTQUFLLEVBQUU7QUFDTFQsY0FBUSxFQUFFO0FBREw7QUE3Qkc7QUFqQ1UsQ0FBRCxDQUF2QjtBQW9FQXhCLEtBQUssR0FBR2tDLDZFQUFtQixDQUFDbEMsS0FBRCxDQUEzQjtBQUVBLCtEQUFlQSxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgLyosIEFwcENvbnRleHQgKi8gfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXHJcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSdcclxuaW1wb3J0IHRoZW1lIGZyb20gJ0AvbGliL3RoZW1lJ1xyXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuc2NzcydcclxuXHJcbmV4cG9ydCBjb25zdCBjYWNoZSA9IGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJywgcHJlcGVuZDogdHJ1ZSB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHM6IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHNcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgPHRpdGxlPk5leHRKc3xNYXRlcmlhbC1VaTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5wbmcnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MSB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9J0tleXdvcmRzIGZvciBzZW8nIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0Rlc2NyaWJlIHdoYXQgdGhpcyBzaXRlIGRvZXMvcHJvdmlkZXMnIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L0NhY2hlUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlVGhlbWUsXHJcbiAgcmVzcG9uc2l2ZUZvbnRTaXplc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmNvbnN0IGZvbnQgPSBcIidMYXRvJywgc2Fucy1zZXJpZlwiXHJcblxyXG5sZXQgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiAnIzQ0Mzg1MGZmJ1xyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAnI2JiYmU2NGZmJ1xyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46ICcjOGU1NTcyZmYnXHJcbiAgICB9LFxyXG4gICAgd2FybmluZzoge1xyXG4gICAgICBtYWluOiAnI0VFRThBOSdcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIG1haW46ICcjYmNhYTk5ZmYnXHJcbiAgICB9LFxyXG4gICAgc3VjY2Vzczoge1xyXG4gICAgICBtYWluOiAnIzkxRUE4NCdcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGRlZmF1bHQ6ICcjZjJmN2YyZmYnXHJcbiAgICB9XHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgdmFsdWVzOiB7XHJcbiAgICAgIHhzOiAwLFxyXG4gICAgICBzbTogNzAwLFxyXG4gICAgICBtZDogOTAwLFxyXG4gICAgICBsZzogMTIwMCxcclxuICAgICAgeGw6IDE1MDBcclxuICAgIH1cclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6IGZvbnQsXHJcbiAgICBoMToge1xyXG4gICAgICBmb250U2l6ZTogODJcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBmb250U2l6ZTogNjZcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogNTRcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICBmb250U2l6ZTogNDVcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICBmb250U2l6ZTogMzZcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICBmb250U2l6ZTogMjZcclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZTE6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGUyOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyMlxyXG4gICAgfSxcclxuICAgIGJvZHkxOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyMFxyXG4gICAgfSxcclxuICAgIGJvZHkyOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxOFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbnRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NhY2hlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==