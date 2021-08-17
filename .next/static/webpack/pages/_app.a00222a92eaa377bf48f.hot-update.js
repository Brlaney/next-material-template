"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/theme.ts":
/*!**************************!*\
  !*** ./src/lib/theme.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var font = "'Raleway', sans-serif";
var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  // Palette
  palette: {
    primary: {
      main: '#2969ff'
    },
    secondary: {
      main: '#ffce5c'
    },
    error: {
      main: '#ff5c8d'
    },
    warning: {
      main: '#EEE8A9'
    },
    info: {
      main: '#016FB9'
    },
    success: {
      main: '#91EA84'
    },
    background: {
      "default": '#016FB9'
    }
  },
  // Breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536
    }
  },
  // Font-family & font-sizes
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 66
    },
    h2: {
      fontSize: 52
    },
    h3: {
      fontSize: 44
    },
    h4: {
      fontSize: 36
    },
    h5: {
      fontSize: 30
    },
    h6: {
      fontSize: 26
    },
    subtitle1: {
      fontSize: 26
    },
    subtitle2: {
      fontSize: 24
    },
    body1: {
      fontSize: 22
    },
    body2: {
      fontSize: 20
    }
  }
}); // Responsive font-size helper

theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);
/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/scss/globals.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/scss/globals.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Itim&family=Raleway:wght@300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  background: #016FB9;\n  color: #fff;\n  font-family: \"Raleway\", sans-serif;\n}\n\na {\n  color: inherit;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://globals.scss","webpack://theme/theme.scss"],"names":[],"mappings":"AAEA;;EAEE,UAAA;EACA,SAAA;EACA,mBCcG;EDbH,WAAA;EACA,kCCiBa;ADjBf;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AAAF","sourcesContent":["@import './theme/theme';\r\n\r\nhtml,\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background: $bg;\r\n  color: #fff;\r\n  font-family: $primary-font;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Itim&family=Raleway:wght@300;400;500;600&display=swap');\r\n\r\n// Palette\r\n$primary: #2969ff;\r\n$secondary: #ffce5c;\r\n$tertiary: #ff5c8d;\r\n$quaternary: #8dff5c;\r\n$quinary: #7c5cff;\r\n$light: #f6f8ffff;\r\n\r\n// Text colors\r\n$text-light: #aeaeae;\r\n$text-med: #50514fff;\r\n$text-dark: #363636;\r\n\r\n// Background colors\r\n$bg-light: #EFFBFF;\r\n$bg-dark: #272d2dff;\r\n\r\n\r\n$bg: #016FB9;\r\n$bg1: hsla(204, 99%, 36%, 1);\r\n$bg2: hsla(204, 99%, 36%, 0.67);\r\n\r\n// Primary font-family\r\n$primary-font: 'Raleway', sans-serif;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMDAyMjJhOTJlYWEzNzdiZjQ4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBS0EsSUFBTUUsSUFBSSxHQUFHLHVCQUFiO0FBRUEsSUFBSUMsS0FBSyxHQUFHSCxxRUFBVyxDQUFDO0FBQ3RCO0FBQ0FJLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxJQUFBQSxTQUFTLEVBQUU7QUFDVEQsTUFBQUEsSUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxJQUFBQSxLQUFLLEVBQUU7QUFDTEYsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FQQTtBQVVQRyxJQUFBQSxPQUFPLEVBQUU7QUFDUEgsTUFBQUEsSUFBSSxFQUFFO0FBREMsS0FWRjtBQWFQSSxJQUFBQSxJQUFJLEVBQUU7QUFDSkosTUFBQUEsSUFBSSxFQUFFO0FBREYsS0FiQztBQWdCUEssSUFBQUEsT0FBTyxFQUFFO0FBQ1BMLE1BQUFBLElBQUksRUFBRTtBQURDLEtBaEJGO0FBbUJQTSxJQUFBQSxVQUFVLEVBQUU7QUFDVixpQkFBUztBQURDO0FBbkJMLEdBRmE7QUF5QnRCO0FBQ0FDLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsRUFBRSxFQUFFLENBREU7QUFFTkMsTUFBQUEsRUFBRSxFQUFFLEdBRkU7QUFHTkMsTUFBQUEsRUFBRSxFQUFFLElBSEU7QUFJTkMsTUFBQUEsRUFBRSxFQUFFLElBSkU7QUFLTkMsTUFBQUEsRUFBRSxFQUFFO0FBTEU7QUFERyxHQTFCUztBQW1DdEI7QUFDQUMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRW5CLElBREY7QUFFVm9CLElBQUFBLEVBQUUsRUFBRTtBQUNGQyxNQUFBQSxRQUFRLEVBQUU7QUFEUixLQUZNO0FBS1ZDLElBQUFBLEVBQUUsRUFBRTtBQUNGRCxNQUFBQSxRQUFRLEVBQUU7QUFEUixLQUxNO0FBUVZFLElBQUFBLEVBQUUsRUFBRTtBQUNGRixNQUFBQSxRQUFRLEVBQUU7QUFEUixLQVJNO0FBV1ZHLElBQUFBLEVBQUUsRUFBRTtBQUNGSCxNQUFBQSxRQUFRLEVBQUU7QUFEUixLQVhNO0FBY1ZJLElBQUFBLEVBQUUsRUFBRTtBQUNGSixNQUFBQSxRQUFRLEVBQUU7QUFEUixLQWRNO0FBaUJWSyxJQUFBQSxFQUFFLEVBQUU7QUFDRkwsTUFBQUEsUUFBUSxFQUFFO0FBRFIsS0FqQk07QUFvQlZNLElBQUFBLFNBQVMsRUFBRTtBQUNUTixNQUFBQSxRQUFRLEVBQUU7QUFERCxLQXBCRDtBQXVCVk8sSUFBQUEsU0FBUyxFQUFFO0FBQ1RQLE1BQUFBLFFBQVEsRUFBRTtBQURELEtBdkJEO0FBMEJWUSxJQUFBQSxLQUFLLEVBQUU7QUFDTFIsTUFBQUEsUUFBUSxFQUFFO0FBREwsS0ExQkc7QUE2QlZTLElBQUFBLEtBQUssRUFBRTtBQUNMVCxNQUFBQSxRQUFRLEVBQUU7QUFETDtBQTdCRztBQXBDVSxDQUFELENBQXZCLEVBdUVBOztBQUNBcEIsS0FBSyxHQUFHRiw2RUFBbUIsQ0FBQ0UsS0FBRCxDQUEzQjtBQUVBLCtEQUFlQSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDa0c7QUFDbEcsOEJBQThCLHlGQUEyQjtBQUN6RCw0SEFBNEgsSUFBSSxJQUFJLGtCQUFrQjtBQUN0SjtBQUNBLHVEQUF1RCxlQUFlLGNBQWMsd0JBQXdCLGdCQUFnQix5Q0FBeUMsR0FBRyxPQUFPLG1CQUFtQixHQUFHLE9BQU8sbUNBQW1DLG1DQUFtQyxtQ0FBbUMsR0FBRyxPQUFPLDJHQUEyRyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLGlEQUFpRCx1QkFBdUIsaUJBQWlCLGdCQUFnQixzQkFBc0Isa0JBQWtCLGlDQUFpQyxLQUFLLFdBQVcscUJBQXFCLEtBQUssV0FBVyw2QkFBNkIsS0FBSywwRkFBMEYsSUFBSSxJQUFJLG1CQUFtQix3Q0FBd0Msd0JBQXdCLHVCQUF1Qix5QkFBeUIsc0JBQXNCLHNCQUFzQiwrQ0FBK0MseUJBQXlCLHdCQUF3QixtREFBbUQsd0JBQXdCLHlCQUF5QixpQ0FBaUMsb0NBQW9DLHVFQUF1RSx1QkFBdUI7QUFDbDZDO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi90aGVtZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Njc3MvZ2xvYmFscy5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY3JlYXRlVGhlbWUsXHJcbiAgcmVzcG9uc2l2ZUZvbnRTaXplc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmNvbnN0IGZvbnQgPSBcIidSYWxld2F5Jywgc2Fucy1zZXJpZlwiXHJcblxyXG5sZXQgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgLy8gUGFsZXR0ZVxyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyMyOTY5ZmYnXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjZmZjZTVjJ1xyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46ICcjZmY1YzhkJ1xyXG4gICAgfSxcclxuICAgIHdhcm5pbmc6IHtcclxuICAgICAgbWFpbjogJyNFRUU4QTknXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtYWluOiAnIzAxNkZCOSdcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiB7XHJcbiAgICAgIG1haW46ICcjOTFFQTg0J1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyMwMTZGQjknXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBCcmVha3BvaW50c1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICB2YWx1ZXM6IHtcclxuICAgICAgeHM6IDAsXHJcbiAgICAgIHNtOiA2MDAsXHJcbiAgICAgIG1kOiAxMDAwLFxyXG4gICAgICBsZzogMTIwMCxcclxuICAgICAgeGw6IDE1MzYsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gRm9udC1mYW1pbHkgJiBmb250LXNpemVzXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogZm9udCxcclxuICAgIGgxOiB7XHJcbiAgICAgIGZvbnRTaXplOiA2NlxyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgIGZvbnRTaXplOiA1MlxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0NFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIGZvbnRTaXplOiAzNlxyXG4gICAgfSxcclxuICAgIGg1OiB7XHJcbiAgICAgIGZvbnRTaXplOiAzMFxyXG4gICAgfSxcclxuICAgIGg2OiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNlxyXG4gICAgfSxcclxuICAgIHN1YnRpdGxlMToge1xyXG4gICAgICBmb250U2l6ZTogMjZcclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZTI6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9LFxyXG4gICAgYm9keTE6IHtcclxuICAgICAgZm9udFNpemU6IDIyXHJcbiAgICB9LFxyXG4gICAgYm9keTI6IHtcclxuICAgICAgZm9udFNpemU6IDIwXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuLy8gUmVzcG9uc2l2ZSBmb250LXNpemUgaGVscGVyXHJcbnRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lXHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0aW0mZmFtaWx5PVJhbGV3YXk6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiAjMDE2RkI5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkNjRztFRGJILFdBQUE7RUFDQSxrQ0NpQmE7QURqQmY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtLQUFBLDJCQUFBO1VBQUEsc0JBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3RoZW1lL3RoZW1lJztcXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQ6ICRiZztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JdGltJmZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vIFBhbGV0dGVcXHJcXG4kcHJpbWFyeTogIzI5NjlmZjtcXHJcXG4kc2Vjb25kYXJ5OiAjZmZjZTVjO1xcclxcbiR0ZXJ0aWFyeTogI2ZmNWM4ZDtcXHJcXG4kcXVhdGVybmFyeTogIzhkZmY1YztcXHJcXG4kcXVpbmFyeTogIzdjNWNmZjtcXHJcXG4kbGlnaHQ6ICNmNmY4ZmZmZjtcXHJcXG5cXHJcXG4vLyBUZXh0IGNvbG9yc1xcclxcbiR0ZXh0LWxpZ2h0OiAjYWVhZWFlO1xcclxcbiR0ZXh0LW1lZDogIzUwNTE0ZmZmO1xcclxcbiR0ZXh0LWRhcms6ICMzNjM2MzY7XFxyXFxuXFxyXFxuLy8gQmFja2dyb3VuZCBjb2xvcnNcXHJcXG4kYmctbGlnaHQ6ICNFRkZCRkY7XFxyXFxuJGJnLWRhcms6ICMyNzJkMmRmZjtcXHJcXG5cXHJcXG5cXHJcXG4kYmc6ICMwMTZGQjk7XFxyXFxuJGJnMTogaHNsYSgyMDQsIDk5JSwgMzYlLCAxKTtcXHJcXG4kYmcyOiBoc2xhKDIwNCwgOTklLCAzNiUsIDAuNjcpO1xcclxcblxcclxcbi8vIFByaW1hcnkgZm9udC1mYW1pbHlcXHJcXG4kcHJpbWFyeS1mb250OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJmb250IiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwic3VjY2VzcyIsImJhY2tncm91bmQiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImgxIiwiZm9udFNpemUiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2Iiwic3VidGl0bGUxIiwic3VidGl0bGUyIiwiYm9keTEiLCJib2R5MiJdLCJzb3VyY2VSb290IjoiIn0=