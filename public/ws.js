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

const doCache = "prod" === 'prod';

// Name our cache
const CACHE_NAME     = 'my-pwa-cache-v' + "1";
const cacheWhitelist = [CACHE_NAME];

// Delete old caches that are not our current one!
self.addEventListener("activate", event => doCache && event.waitUntil(clearCache()));

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', event => doCache && event.waitUntil(addCache()));

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function (event) {
    if(doCache) {
        event.respondWith(
            caches.match(event.request).then(response => response || fetch(event.request))
        )
    }
});

async function clearCache() {
    const keyList = await caches.keys();
    console.log('keylist', keyList);
    return Promise.all(keyList.map(key => !cacheWhitelist.includes(key) &&
        (console.log('Deleting cache: ' + key) || caches.delete(key))))
}

async function addCache() {
    await clearCache();
    const cache       = await caches.open(CACHE_NAME)
    const urlsToCache = [
        '/',
        'manifest.js',
        'vendor.js',
        'bundle.js',
        'style.css'
    ]
    cache.addAll(urlsToCache)
    console.log('cached');
}


/***/ })
/******/ ]);