"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//import Image from 'next/image'\n\n// import picOne from '../assets/00005.png'\n// import picTwo from '../assets/00022.png'\nvar clickable = true;\nvar countdown = 10;\nvar correctText;\nfunction timer() {\n    var int = setInterval(function() {\n        document.querySelector(\"#countdownText\").innerText = countdown;\n        countdown--;\n    }, 1000);\n}\nfunction selectImage(x) {\n    if (clickable) {\n        clickable = false;\n    } else {\n        return;\n    }\n    var p = points(x);\n    document.querySelectorAll(\".photo\")[x].style.cssText = p ? \"border: 5px solid green;\" : \"border: 5px solid red;\";\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Real Human\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"timer\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().timer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"countdownText\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().countdownText)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().svg),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    r: \"50\",\n                                    cx: \"50\",\n                                    cy: \"50\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: \"Choose the real human\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: correctText\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return selectImage(0);\n                                },\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" photo\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: picOne,\n                                    alt: \"Picture\",\n                                    width: \"300px\",\n                                    height: \"300px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return selectImage(1);\n                                },\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card), \" photo\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n                                    alt: \"Picture\",\n                                    width: \"300px\",\n                                    height: \"300px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Points: 0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWxCbkIscUVBQVcsRUFBQyxRQUFNLENBQUM7MENBQ25FLDRFQUFDeUMsS0FBRztvQ0FDRkMsR0FBRyxFQUFDLHFFQUFxRTtvQ0FDekVFLEdBQUcsRUFBQyxTQUFTO29DQUNiQyxLQUFLLEVBQUMsT0FBTztvQ0FDYkMsTUFBTSxFQUFDLE9BQU87Ozs7O3dDQUNkOzs7OztvQ0FDRTs7Ozs7OzRCQUNGO2tDQUVOLDhEQUFDVCxJQUFFO2tDQUFDLFdBQVM7Ozs7OzRCQUFLOzs7Ozs7b0JBQ2I7Ozs7OztZQUNILENBQ1A7Q0FDRjtBQWpEdUJwQixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy9pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbi8vIGltcG9ydCBwaWNPbmUgZnJvbSAnLi4vYXNzZXRzLzAwMDA1LnBuZydcbi8vIGltcG9ydCBwaWNUd28gZnJvbSAnLi4vYXNzZXRzLzAwMDIyLnBuZydcblxudmFyIGNsaWNrYWJsZSA9IHRydWU7XG52YXIgY291bnRkb3duID0gMTA7XG52YXIgY29ycmVjdFRleHQ7XG5cbmZ1bmN0aW9uIHRpbWVyKCkge1xuICBsZXQgaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudGRvd25UZXh0JykuaW5uZXJUZXh0ID0gY291bnRkb3duO1xuICAgIGNvdW50ZG93bi0tO1xuICB9LCAxMDAwKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0SW1hZ2UoeCkge1xuICBpZiAoY2xpY2thYmxlKSB7XG4gICAgY2xpY2thYmxlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHAgPSBwb2ludHMoeCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG90bycpW3hdLnN0eWxlLmNzc1RleHQgPSAocCkgPyBcImJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1wiIDogXCJib3JkZXI6IDVweCBzb2xpZCByZWQ7XCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWFsIEh1bWFuPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJ0aW1lclwiIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyfT5cbiAgICAgICAgICA8ZGl2IGlkPVwiY291bnRkb3duVGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93blRleHR9PjwvZGl2PlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfT5cbiAgICAgICAgICAgIDxjaXJjbGUgcj1cIjUwXCIgY3g9XCI1MFwiIGN5PVwiNTBcIj48L2NpcmNsZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBDaG9vc2UgdGhlIHJlYWwgaHVtYW5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxoMj57Y29ycmVjdFRleHR9PC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNlbGVjdEltYWdlKDApfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfSBwaG90b2B9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtwaWNPbmV9XG4gICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZWxlY3RJbWFnZSgxKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gcGhvdG9gfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgyPlBvaW50czogMDwvaDI+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiY2xpY2thYmxlIiwiY291bnRkb3duIiwiY29ycmVjdFRleHQiLCJ0aW1lciIsImludCIsInNldEludGVydmFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0Iiwic2VsZWN0SW1hZ2UiLCJ4IiwicCIsInBvaW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImNzc1RleHQiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJpZCIsImNvdW50ZG93blRleHQiLCJzdmciLCJjaXJjbGUiLCJyIiwiY3giLCJjeSIsImgxIiwiaDIiLCJncmlkIiwib25DbGljayIsImNhcmQiLCJpbWciLCJzcmMiLCJwaWNPbmUiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});