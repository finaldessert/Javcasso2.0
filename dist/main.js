/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZjYXNzbzIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var container = document.getElementById('container');\n  var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n  var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  container.appendChild(renderer.domElement);\n  var light = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xFFFFFF);\n  light.position.set(-10, 15, 50);\n  scene.add(light);\n  var geometry1 = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1, 32, 16);\n  var material1 = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({\n    color: 0x0095DD,\n    wireframe: true,\n    wireframeLinewidth: 1\n  });\n  var geometry2 = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1.2, 32, 16);\n  var material2 = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({\n    color: 0x0095DD,\n    wireframe: true,\n    wireframeLinewidth: 1\n  });\n  var material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({\n    color: 0xffffcc\n  });\n  var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n  var x, y, z;\n\n  (function () {\n    return times(1000, function (n) {\n      x = Math.random() * 800 - 400;\n      y = Math.random() * 800 - 400;\n      z = Math.random() * 800 - 400;\n      geometry.vertices.push(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z));\n    });\n  });\n\n  var pointCloud = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);\n  scene.add(pointCloud);\n  var insidesphere = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry1, material1);\n  var outersphere = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry2, material2);\n  scene.add(insidesphere);\n  scene.add(outersphere);\n  camera.position.z = 5;\n\n  function animate() {\n    insidesphere.rotation.y += 0.001;\n    insidesphere.rotation.x += 0.001;\n    outersphere.rotation.y += 0.002;\n    outersphere.rotation.x += 0.002;\n    requestAnimationFrame(animate);\n    renderer.render(scene, camera);\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBckI7QUFDQSxNQUFNeUIsV0FBVyxHQUFHLElBQUlqRCx1Q0FBSixDQUFnQjZCLFNBQWhCLEVBQTJCQyxTQUEzQixDQUFwQjtBQUVBekIsRUFBQUEsS0FBSyxDQUFDZ0IsR0FBTixDQUFXMEIsWUFBWDtBQUNBMUMsRUFBQUEsS0FBSyxDQUFDZ0IsR0FBTixDQUFXNEIsV0FBWDtBQUdBMUMsRUFBQUEsTUFBTSxDQUFDWSxRQUFQLENBQWdCa0IsQ0FBaEIsR0FBb0IsQ0FBcEI7O0FBRUEsV0FBU2EsT0FBVCxHQUFrQjtBQUNkSCxJQUFBQSxZQUFZLENBQUNJLFFBQWIsQ0FBc0JmLENBQXRCLElBQTJCLEtBQTNCO0FBQ0FXLElBQUFBLFlBQVksQ0FBQ0ksUUFBYixDQUFzQmhCLENBQXRCLElBQTJCLEtBQTNCO0FBRUFjLElBQUFBLFdBQVcsQ0FBQ0UsUUFBWixDQUFxQmYsQ0FBckIsSUFBMEIsS0FBMUI7QUFDQWEsSUFBQUEsV0FBVyxDQUFDRSxRQUFaLENBQXFCaEIsQ0FBckIsSUFBMEIsS0FBMUI7QUFFQWlCLElBQUFBLHFCQUFxQixDQUFHRixPQUFILENBQXJCO0FBQ0F0QyxJQUFBQSxRQUFRLENBQUN5QyxNQUFULENBQWtCaEQsS0FBbEIsRUFBeUJFLE1BQXpCO0FBQ0g7O0FBQ0QyQyxFQUFBQSxPQUFPO0FBQ04sQ0FoRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZjYXNzbzIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbnJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG5jb25zdCBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4RkZGRkZGKTtcbmxpZ2h0LnBvc2l0aW9uLnNldCgtMTAsIDE1LCA1MCk7XG5zY2VuZS5hZGQobGlnaHQpO1xuXG5jb25zdCBnZW9tZXRyeTEgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIDEsIDMyLCAxNiApO1xuY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwgKHtcbiAgICBjb2xvcjogMHgwMDk1REQsXG4gICAgd2lyZWZyYW1lOiB0cnVlLFxuICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMVxufSk7XG5cbmNvbnN0IGdlb21ldHJ5MiA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSggMS4yLCAzMiwgMTYgKTtcbmNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsICh7XG4gICAgY29sb3I6IDB4MDA5NURELFxuICAgIHdpcmVmcmFtZTogdHJ1ZSxcbiAgICB3aXJlZnJhbWVMaW5ld2lkdGg6IDFcbn0pO1xuXG5jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7XG4gICAgY29sb3I6IDB4ZmZmZmNjLFxufSk7XG5cbmNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG52YXIgeCwgeSwgejtcbigpID0+IHRpbWVzKDEwMDAsIGZ1bmN0aW9uKG4pe1xuICB4ID0gKE1hdGgucmFuZG9tKCkgKiA4MDApIC0gNDAwO1xuICB5ID0gKE1hdGgucmFuZG9tKCkgKiA4MDApIC0gNDAwO1xuICB6ID0gKE1hdGgucmFuZG9tKCkgKiA4MDApIC0gNDAwO1xuXG4gIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeikpO1xufSk7XG5cbnZhciBwb2ludENsb3VkID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuc2NlbmUuYWRkKHBvaW50Q2xvdWQpO1xuXG5jb25zdCBpbnNpZGVzcGhlcmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnkxLCBtYXRlcmlhbDEgKTtcbmNvbnN0IG91dGVyc3BoZXJlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5MiwgbWF0ZXJpYWwyICk7XG5cbnNjZW5lLmFkZCggaW5zaWRlc3BoZXJlICk7XG5zY2VuZS5hZGQoIG91dGVyc3BoZXJlICk7XG5cblxuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuXG5mdW5jdGlvbiBhbmltYXRlKCl7XG4gICAgaW5zaWRlc3BoZXJlLnJvdGF0aW9uLnkgKz0gMC4wMDE7XG4gICAgaW5zaWRlc3BoZXJlLnJvdGF0aW9uLnggKz0gMC4wMDE7XG5cbiAgICBvdXRlcnNwaGVyZS5yb3RhdGlvbi55ICs9IDAuMDAyO1xuICAgIG91dGVyc3BoZXJlLnJvdGF0aW9uLnggKz0gMC4wMDI7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKCBhbmltYXRlICk7XG4gICAgcmVuZGVyZXIucmVuZGVyICggc2NlbmUsIGNhbWVyYSApO1xufVxuYW5pbWF0ZSgpO1xufSkiXSwibmFtZXMiOlsiVEhSRUUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJsaWdodCIsIlBvaW50TGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImFkZCIsImdlb21ldHJ5MSIsIlNwaGVyZUdlb21ldHJ5IiwibWF0ZXJpYWwxIiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwid2lyZWZyYW1lTGluZXdpZHRoIiwiZ2VvbWV0cnkyIiwibWF0ZXJpYWwyIiwibWF0ZXJpYWwiLCJQb2ludHNNYXRlcmlhbCIsImdlb21ldHJ5IiwiQnVmZmVyR2VvbWV0cnkiLCJ4IiwieSIsInoiLCJ0aW1lcyIsIm4iLCJNYXRoIiwicmFuZG9tIiwidmVydGljZXMiLCJwdXNoIiwiVmVjdG9yMyIsInBvaW50Q2xvdWQiLCJQb2ludHMiLCJpbnNpZGVzcGhlcmUiLCJNZXNoIiwib3V0ZXJzcGhlcmUiLCJhbmltYXRlIiwicm90YXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;