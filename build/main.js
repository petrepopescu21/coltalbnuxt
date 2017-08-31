require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' }, { hid: 'description', name: 'description', content: 'Colt Alb' }],
    link: [{ rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=ro' }, { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }, { rel: 'stylesheet', type: 'text/css', href: 'https://code.getmdl.io/1.3.0/material.light_blue-pink.min.css' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismic_io__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismic_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismic_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_marked__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





exports.getRawData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
        var api, rawLabels, rawDogs, dogs, labels;
        return __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return __WEBPACK_IMPORTED_MODULE_1_prismic_io___default.a.api("https://coltalb.prismic.io/api");

                    case 2:
                        api = _context.sent;
                        _context.next = 5;
                        return api.query(__WEBPACK_IMPORTED_MODULE_1_prismic_io___default.a.Predicates.at('document.type', 'labels'));

                    case 5:
                        rawLabels = _context.sent;
                        _context.next = 8;
                        return api.query(__WEBPACK_IMPORTED_MODULE_1_prismic_io___default.a.Predicates.at('document.type', 'dogs'));

                    case 8:
                        rawDogs = _context.sent;
                        dogs = processDogs(rawDogs, 'en');
                        labels = processLabels(rawLabels);
                        return _context.abrupt('return', { labels: labels, dogs: dogs, lang: 'en' });

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function getRawData() {
        return _ref.apply(this, arguments);
    }

    return getRawData;
}();

exports.getData = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        data = this.getRawData();
                        //console.log(data)

                        return _context2.abrupt('return', data);

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    function getData() {
        return _ref2.apply(this, arguments);
    }

    return getData;
}();

function processLabels(data) {
    var returnable = {};
    returnable['ro'] = {};
    returnable['en'] = {};
    returnable['de'] = {};
    var temp = data.results[0].data;
    for (var key in temp) {
        if (!temp.hasOwnProperty(key)) continue;

        var obj = temp[key];
        returnable['ro'][key.split('.')[1]] = obj.value.split('|')[0];
        returnable['en'][key.split('.')[1]] = obj.value.split('|')[1];
        returnable['de'][key.split('.')[1]] = obj.value.split('|')[2];
    }
    return returnable;
}

function processDogs(data, lang) {
    var returnable = [];
    data.results.forEach(function (item) {
        var output = {};
        if (item.uid) output.uid = item.uid;

        if (item.data['dogs.name']) output.name = item.data['dogs.name'].value;else output.name = "";

        if (item.data['dogs.birthdate']) {
            output.birthdate = item.data['dogs.birthdate'].value;
            var a = __WEBPACK_IMPORTED_MODULE_2_moment___default()();
            var b = __WEBPACK_IMPORTED_MODULE_2_moment___default()(output.birthdate);

            var age = a.diff(b, 'months');
            if (age < 12) output.age = 1;
            if (age >= 12 && age <= 30) output.age = 2;
            if (age > 30) output.age = 3;
        } else {
            output.birthdate = "";
            output.age = 0;
        }
        if (item.data['dogs.status']) {
            if (item.data['dogs.status'].value == "adoptat") output.status = 1;else if (item.data['dogs.status'].value == "rezervat") output.status = 2;else output.status = 0;
        } else output.status = 0;

        if (item.data['dogs.sex']) output.sex = item.data['dogs.sex'].value;else output.sex = "N/A";

        if (item.data['dogs.sort']) output.sort = item.data['dogs.sort'].value;else output.sort = 0;

        if (item.data['dogs.size']) output.size = item.data['dogs.size'].value;else output.size = "N/A";

        if (item.data['dogs.description']) {
            output.description = item.data['dogs.description'].value[0];
            for (var k in output.description) {
                if (lang === k) {
                    output.description = nl2br(output.description[k].value);
                }
            }
        } else output.description = "";
        if (item.data['dogs.restrictii']) {
            output.restrictii = item.data['dogs.restrictii'].value[0];
            for (var k in output.restrictii) {
                if (lang === k) {
                    output.restrictii = output.restrictii[k].value;
                }
            }
        } else output.restrictii = "-";

        if (item.data['dogs.dataadapost']) {
            output.dataadapost = item.data['dogs.dataadapost'].value;
        } else output.dataadapost = "N/A";

        if (item.data['dogs.castrat']) {
            output.castrat = item.data['dogs.castrat'].value;
        } else output.castrat = "N/A";
        if (item.data['dogs.long-description']) {
            output.longdescription = item.data['dogs.long-description'].value[0];
            for (var k in output.longdescription) {
                if (lang === k) {
                    output.longdescription = __WEBPACK_IMPORTED_MODULE_3_marked___default()(output.longdescription[k].value, {
                        sanitize: true
                    });
                }
            }
        } else output.longdescription = "";

        output.images = [];
        output.frontimages = [];
        output.largeimages = [];
        if (item.data['dogs.gallery']) {
            item.data['dogs.gallery'].value.forEach(function (image) {
                output.images.push({
                    src: image.image.value.main.url,
                    w: parseInt(image.image.value.main.dimensions.width),
                    h: parseInt(image.image.value.main.dimensions.height)
                });
                if (image.image.value.views['front']) output.frontimages.push({
                    src: image.image.value.views['front'].url,
                    w: parseInt(image.image.value.views['front'].dimensions.width),
                    h: parseInt(image.image.value.views['front'].dimensions.height)
                });
                if (image.image.value.views['square']) output.largeimages.push({
                    src: image.image.value.views['square'].url,
                    w: parseInt(image.image.value.views['square'].dimensions.width),
                    h: parseInt(image.image.value.views['square'].dimensions.height)
                });
            });
        } else output.images.push("images/nodog.jpg");

        /*
        output.images256=[]
        item.data['dogs.gallery'].value.forEach((image)=>{
            output.images256.push(image.image.value.views['256'].url)
        })
        output.images512=[]
        item.data['dogs.gallery'].value.forEach((image)=>{
            output.images512.push(image.image.value.views['512'].url)
        })*/
        returnable.push(output);
    });
    returnable.sort(function (a, b) {
        return b.sort > a.sort;
    });

    return returnable;
}

function nl2br(str) {
    var breakTag = '<br />';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("marked");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("prismic.io");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var prismic = __webpack_require__(2);

var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var router = new __WEBPACK_IMPORTED_MODULE_2_koa_router___default.a();

var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

var api_data = {};

router.get('/api/data', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_a_pepope_projects_coltalbnuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(api_data.labels == undefined)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return prismic.getRawData();

          case 3:
            api_data = _context.sent;

          case 4:
            ctx.body = api_data;

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Import and Set Nuxt.js options
var config = __webpack_require__(1);
config.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);

// Build in development
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}
app.use(router.routes());
app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset
  ctx.customData = { message: 'Hello' };
  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }
/******/ ]);
//# sourceMappingURL=main.map