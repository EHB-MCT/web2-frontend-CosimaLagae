/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\r\nwindow.onload = () => {\r\n    mapboxgl.accessToken = 'pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw';\r\n    getData();\r\n    navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {\r\n        enableHighAccuracy: true\r\n    })\r\n    \r\n    function succesLocation(position){\r\n        console.log(position) \r\n        setupMap([position.coords.longitude, position.coords.latitude])       \r\n    }\r\n    \r\n    function errorLocation(){\r\n        setupMap([4.34878, 50.85045])\r\n    }\r\n    \r\n    function setupMap(center){\r\n        const map = new mapboxgl.Map({\r\n            container: 'map',\r\n            style: 'mapbox://styles/cosimarosie/ckuwpxdftohgf18s0f4r0ngat',\r\n            center: center,\r\n            zoom: 14,\r\n        });    \r\n\r\n        const nav = new mapboxgl.NavigationControl();\r\n        map.addControl(nav);\r\n\r\n        var directions = new MapboxDirections({\r\n            accessToken: mapboxgl.accessToken,\r\n        });    \r\n    }\r\n\r\n    function getData(data){\r\n        fetch(\"https://api.mapbox.com/datasets/v1/cosimarosie/ckx5z09s606qi28pjuwu8eqq5/features?access_token=pk.eyJ1IjoiY29zaW1hcm9zaWUiLCJhIjoiY2t1d3BtYnF4MDZrcTJucXFoNGN1M3hkaCJ9.RgMCkP3mQoUKWG2O5Rw4Fw\")\r\n        .then(response => response.json())\r\n        .then(data => console.log(data.features));\r\n    }\r\n    //dataset id: ckx5z09s606qi28pjuwu8eqq5\r\n\r\n    \r\n      \r\n}\n\n//# sourceURL=webpack://web2-frontend-cosimalagae/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;