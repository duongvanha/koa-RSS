module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _instance = void 0;

'use strict';

/**
 * @class Container
 */

var Container = function () {
    _createClass(Container, null, [{
        key: 'instance',
        value: function instance() {
            if (!_instance) {
                _instance = new Container();
            }
            return _instance;
        }

        /**
         *
         * @param {EventEmitter} ee
         */

    }]);

    function Container(ee) {
        _classCallCheck(this, Container);

        this.bindings = {};
        this.resolved = {};
        this.ee = ee;
    }

    /**
     * Register a factory of a dependency to the Container
     *
     * @param {string} dependencyName
     * @param {Function} factory
     * @returns {Container}
     */


    _createClass(Container, [{
        key: 'bind',
        value: function bind(dependencyName, factory) {
            this.bindings[dependencyName] = {
                factory: factory,
                type: 'binding'
            };

            return this;
        }

        /**
         * Register a value as a dependency to the Container
         *
         * @param {string} dependencyName
         * @param value
         * @return {Container}
         */

    }, {
        key: 'value',
        value: function value(dependencyName, _value) {
            this.resolved[dependencyName] = _value;

            return this;
        }

        /**
         * Register a dependency to the Container as a singleton
         *
         * @param {string} dependencyName
         * @param {Function} factory
         * @returns {Container}
         */

    }, {
        key: 'singleton',
        value: function singleton(dependencyName, factory) {
            this.bindings[dependencyName] = {
                factory: factory,
                type: 'singleton'
            };

            return this;
        }

        /**
         * Resolve a dependency
         *
         * @param {string} dependencyName
         * @returns {Promise.<*>}
         */

    }, {
        key: 'make',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dependencyName) {
                var bindingRecipe, resolved;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.resolved[dependencyName]) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return', this.resolved[dependencyName]);

                            case 2:
                                bindingRecipe = this.bindings[dependencyName];

                                if (bindingRecipe) {
                                    _context.next = 5;
                                    break;
                                }

                                throw new Error('E_BINDING: Could not resolve dependency [' + dependencyName + ']');

                            case 5:
                                _context.next = 7;
                                return bindingRecipe['factory'](this);

                            case 7:
                                resolved = _context.sent;


                                if ('singleton' == bindingRecipe['type']) {
                                    this.resolved[dependencyName] = resolved;
                                }

                                return _context.abrupt('return', resolved);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function make(_x) {
                return _ref.apply(this, arguments);
            }

            return make;
        }()

        /**
         * Register an event listener to the Container
         * to handle right before resolving a dependency
         *
         * @param {string} dependencyName
         * @param {Function} handler
         * @return {Container}
         */

    }, {
        key: 'making',
        value: function making(dependencyName, handler) {
            this.ee.on(dependencyName + '.making', handler);

            return this;
        }

        /**
         * Register an event listener to the Container
         * to handle right after resolved a dependency
         *
         * @param {string} dependencyName
         * @param {Function} handler
         * @return {Container}
         */

    }, {
        key: 'made',
        value: function made(dependencyName, handler) {
            this.ee.on(dependencyName + '.made', handler);

            return this;
        }
    }]);

    return Container;
}();

exports.default = Container;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koa = __webpack_require__(23);

var _koa2 = _interopRequireDefault(_koa);

var _path = __webpack_require__(32);

var _path2 = _interopRequireDefault(_path);

var _bootstrapper = __webpack_require__(13);

var _bootstrapper2 = _interopRequireDefault(_bootstrapper);

var _router = __webpack_require__(14);

var _router2 = _interopRequireDefault(_router);

var _koaBodyparser = __webpack_require__(24);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaStatic = __webpack_require__(27);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaNunjucks = __webpack_require__(25);

var _koaNunjucks2 = _interopRequireDefault(_koaNunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var dir = _path2.default.join(__dirname, 'public');

app.use((0, _koaNunjucks2.default)({
    ext: 'html',
    path: dir
}));

app.use((0, _koaStatic2.default)(dir));
app.use((0, _koaBodyparser2.default)());
app.use(_router2.default);

var port = {"GJS_DEBUG_TOPICS":"JS ERROR;JS LOG","LESSOPEN":"| /usr/bin/lesspipe %s","npm_config_cache_lock_stale":"60000","npm_package_devDependencies_babel_core":"^6.24.1","npm_package_devDependencies_chalk":"^1.1.3","npm_package_dependencies_bluebird":"latest","npm_config_legacy_bundling":"","npm_config_sign_git_tag":"","USER":"sieunhangao","J2SDKDIR":"/usr/lib/jvm/java-8-oracle","LC_TIME":"vi_VN","npm_package_devDependencies_jest":"^20.0.4","npm_config_user_agent":"npm/4.2.0 node/v7.10.0 linux x64","npm_config_always_auth":"","XDG_SEAT":"seat0","npm_config_bin_links":"true","npm_config_key":"","SSH_AGENT_PID":"1323","XDG_SESSION_TYPE":"x11","npm_package_devDependencies_file_loader":"^0.11.1","npm_package_devDependencies_gulp":"github:gulpjs/gulp#4.0","npm_config_description":"true","npm_config_fetch_retries":"2","npm_config_heading":"npm","npm_config_if_present":"","npm_config_init_version":"1.0.0","npm_config_user":"","npm_node_execpath":"/usr/bin/nodejs","LD_LIBRARY_PATH":"/opt/WebStorm-171.4694.29/bin:","SHLVL":"1","J2REDIR":"/usr/lib/jvm/java-8-oracle/jre","npm_package_devDependencies_babel_preset_es2015":"^6.24.1","npm_package_devDependencies_url_loader":"^0.5.8","HOME":"/home/sieunhangao","QT4_IM_MODULE":"xim","npm_config_force":"","DESKTOP_SESSION":"gnome","npm_package_devDependencies_babel_preset_es2017":"^6.24.1","npm_config_only":"","GIO_LAUNCHED_DESKTOP_FILE":"/home/sieunhangao/.local/share/applications/jetbrains-webstorm.desktop","npm_package_scripts_build_w":"webpack -w","npm_package_engines_node":"7.10.0","npm_package_dependencies_babel_polyfill":"^6.23.0","npm_config_cache_min":"10","npm_config_init_license":"ISC","QT_LINUX_ACCESSIBILITY_ALWAYS_ON":"1","GTK_MODULES":"gail:atk-bridge","npm_package_dependencies_koa_router":"^7.2.0","npm_package_dependencies_redux_form":"^7.0.1","npm_config_editor":"vi","npm_config_rollback":"true","npm_config_tag_version_prefix":"v","LC_MONETARY":"vi_VN","npm_package_devDependencies_rimraf":"^2.6.1","npm_package_dependencies_react_router_config":"^1.0.0-beta.3","npm_config_cache_max":"Infinity","npm_config_userconfig":"/home/sieunhangao/.npmrc","DBUS_SESSION_BUS_ADDRESS":"unix:abstract=/tmp/dbus-8bgddf0ECg,guid=baf2a0e89bc56ff0ae59532b596ebc2b","npm_package_dependencies_koa_nunjucks_2":"^3.0.2","npm_config_engine_strict":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_tmp":"/tmp","GIO_LAUNCHED_DESKTOP_FILE_PID":"2450","npm_package_description":"","npm_package_devDependencies_babel_loader":"^7.0.0","npm_package_dependencies_cheerio":"^1.0.0-rc.1","npm_package_dependencies_material_ui":"^0.18.1","npm_package_dependencies_react_router_dom":"^4.1.2","npm_config_depth":"Infinity","npm_config_save_dev":"","npm_config_usage":"","npm_package_devDependencies_progress_bar_webpack_plugin":"^1.9.3","npm_config_cafile":"","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_progress":"true","npm_config_https_proxy":"","MANDATORY_PATH":"/usr/share/gconf/gnome.mandatory.path","npm_package_scripts_dev":"webpack && npm start","npm_package_devDependencies_babel_jest":"^20.0.3","npm_config_onload_script":"","LOGNAME":"sieunhangao","GTK_IM_MODULE":"ibus","npm_package_dependencies_request":"^2.81.0","npm_config_rebuild_bundle":"true","npm_config_save_bundle":"","npm_config_shell":"/bin/bash","_":"/usr/bin/npm","npm_package_dependencies_react_tap_event_plugin":"^2.0.1","npm_config_dry_run":"","npm_config_prefix":"/usr","DEFAULTS_PATH":"/usr/share/gconf/gnome.default.path","npm_config_scope":"","npm_config_browser":"","npm_config_cache_lock_wait":"10000","npm_config_registry":"https://registry.npmjs.org/","npm_config_save_optional":"","npm_config_searchopts":"","npm_config_versions":"","XDG_SESSION_ID":"1","TERM":"xterm-256color","USERNAME":"sieunhangao","npm_package_dependencies_redux_logger":"^3.0.6","npm_config_cache":"/home/sieunhangao/.npm","npm_config_proxy":"","npm_config_send_metrics":"","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","npm_package_scripts_clear":"rimraf public","npm_package_scripts_start":"node index.js ","npm_package_devDependencies_html_webpack_plugin":"^2.28.0","npm_package_devDependencies_webpack_node_externals":"^1.6.0","npm_config_global_style":"","npm_config_ignore_scripts":"","npm_config_version":"","WINDOWPATH":"7","npm_config_local_address":"","npm_config_viewer":"man","PATH":"/usr/lib/node_modules/npm/bin/node-gyp-bin:/media/sieunhangao/Data/Project/react/testing-react/node_modules/.bin:/home/sieunhangao/bin:/home/sieunhangao/.local/bin:/home/sieunhangao/bin:/home/sieunhangao/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin:/snap/bin:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin:/home/sieunhangao/Android/Sdk/tools:/home/sieunhangao/Android/Sdk/platform-tools:/home/sieunhangao/Android/Sdk/tools:/home/sieunhangao/Android/Sdk/platform-tools","DERBY_HOME":"/usr/lib/jvm/java-8-oracle/db","SESSION_MANAGER":"local/sieunhangao-Inspiron-7537:@/tmp/.ICE-unix/1254,unix/sieunhangao-Inspiron-7537:/tmp/.ICE-unix/1254","npm_package_name":"demo","npm_package_dependencies_koa":"^2.2.0","NODE":"/usr/bin/nodejs","LC_ADDRESS":"vi_VN","XDG_MENU_PREFIX":"gnome-","XDG_RUNTIME_DIR":"/run/user/1000","npm_package_dependencies_react_redux":"^5.0.5","npm_config_color":"true","DISPLAY":":0","npm_package_dependencies_koa_static":"^3.0.0","npm_config_fetch_retry_mintimeout":"10000","npm_config_maxsockets":"50","LC_TELEPHONE":"vi_VN","LANG":"en_US.UTF-8","XDG_CURRENT_DESKTOP":"GNOME","npm_package_devDependencies_react_test_renderer":"^15.6.1","npm_package_devDependencies_webpack":"^2.6.0","npm_package_dependencies_react_dom":"^15.5.4","npm_package_dependencies_redux":"^3.6.0","npm_config_umask":"0002","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"gnome","XAUTHORITY":"/run/user/1000/gdm/Xauthority","npm_package_main":"index.js","npm_package_devDependencies_dotenv":"^4.0.0","npm_package_devDependencies_html_loader":"^0.4.5","npm_package_gitHead":"6cbd6bcb9829e75149daa3f7ed53001dae913c24","npm_config_fetch_retry_maxtimeout":"60000","npm_config_loglevel":"warn","npm_config_logs_max":"10","npm_config_message":"%s","npm_lifecycle_script":"webpack && npm start","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","npm_package_scripts_test":"jest","npm_package_devDependencies_webpack_dev_server":"^2.4.5","npm_package_dependencies_react_router":"^4.1.2","npm_config_ca":"","npm_config_cert":"","npm_config_global":"","npm_config_link":"","SHELL":"/bin/bash","LC_NAME":"vi_VN","npm_package_version":"1.0.0","npm_package_dependencies_knex":"^0.13.0","npm_config_access":"","npm_config_also":"","npm_config_save":"","npm_config_unicode":"true","npm_lifecycle_event":"dev","QT_ACCESSIBILITY":"1","GDMSESSION":"gnome","npm_package_scripts_build":"webpack -p","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"dev\"],\"original\":[\"run\",\"dev\"]}","npm_config_long":"","npm_config_production":"","npm_config_searchlimit":"20","npm_config_unsafe_perm":"true","LESSCLOSE":"/usr/bin/lesspipe %s %s","npm_package_author":"","npm_package_dependencies_koa_bodyparser":"^4.2.0","npm_config_node_version":"7.10.0","npm_config_tag":"latest","LC_MEASUREMENT":"vi_VN","npm_package_devDependencies_babel_preset_stage_0":"^6.24.1","npm_config_git_tag_version":"true","npm_config_shrinkwrap":"true","GJS_DEBUG_OUTPUT":"stderr","LC_IDENTIFICATION":"vi_VN","npm_package_license":"ISC","npm_config_fetch_retry_factor":"10","npm_config_proprietary_attribs":"true","npm_config_save_exact":"","npm_config_strict_ssl":"true","XDG_VTNR":"7","QT_IM_MODULE":"ibus","npm_package_devDependencies_style_loader":"^0.18.0","npm_config_dev":"","npm_config_globalconfig":"/usr/etc/npmrc","npm_config_init_module":"/home/sieunhangao/.npm-init.js","npm_config_parseable":"","PWD":"/media/sieunhangao/Data/Project/react/testing-react","JAVA_HOME":"/usr/lib/jvm/java-8-oracle","npm_package_devDependencies_enzyme":"^2.9.1","npm_config_globalignorefile":"/usr/etc/npmignore","npm_execpath":"/usr/lib/node_modules/npm/bin/npm-cli.js","CLUTTER_IM_MODULE":"xim","ANDROID_HOME":"/home/sieunhangao/Android/Sdk","XDG_CONFIG_DIRS":"/etc/xdg/xdg-gnome:/etc/xdg","XDG_DATA_DIRS":"/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop","npm_package_devDependencies_css_loader":"^0.28.2","npm_package_devDependencies_image_webpack_loader":"^3.3.1","npm_config_cache_lock_retries":"10","npm_config_searchstaleness":"900","LC_NUMERIC":"vi_VN","npm_package_devDependencies_babel_preset_env":"^1.5.1","npm_package_devDependencies_extract_text_webpack_plugin":"^2.1.0","npm_config_save_prefix":"^","npm_config_scripts_prepend_node_path":"warn-only","LC_PAPER":"vi_VN","npm_config_group":"1000","npm_config_init_author_email":"","npm_config_searchexclude":"","npm_config_git":"git","npm_config_optional":"true","npm_package_devDependencies_babel_preset_react":"^6.24.1","npm_package_dependencies_pg":"^6.2.3","npm_package_dependencies_react":"^15.5.4","npm_config_json":"","DATABASE_URL":"postgres://xmvmpwalsagthi:5ecba1004453919d22f093c5bfe251e29844741799525ae02b8d1810fa572993@ec2-54-197-232-155.compute-1.amazonaws.com:5432/dcktrp0qkbns39"}.PORT || 8080;

(0, _bootstrapper2.default)(app).then(function (app) {
    app.listen(port, function () {
        return console.log('app running port ' + port);
    });
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var add = exports.add = function add(text) {
    return {
        type: 'add',
        text: text
    };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = function renderField(field) {
    return _react2.default.createElement(
        'div',
        { className: 'input-row' },
        _react2.default.createElement('input', _extends({}, field.input, { type: 'text' })),
        field.meta.touched && field.meta.error && _react2.default.createElement(
            'span',
            { className: 'error' },
            field.meta.error
        )
    );
};

var FormComponent = function FormComponent(props) {
    return _react2.default.createElement(
        'form',
        { onSubmit: props.handleSubmit },
        _react2.default.createElement(_reduxForm.Field, { name: 'text', component: renderField })
    );
};

FormComponent = (0, _reduxForm.reduxForm)({
    form: 'demo'
})(FormComponent);

FormComponent = (0, _reactRedux.connect)(function (state) {
    return {
        initialValues: state.demoForm // pull initial values from account reducer
    };
})(FormComponent);

exports.default = FormComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _AppBar = __webpack_require__(28);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactRouterConfig = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(35);

var _actions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeComponent = function (_PureComponent) {
    _inherits(HomeComponent, _PureComponent);

    function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).apply(this, arguments));
    }

    _createClass(HomeComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            var _this2 = this;

            setTimeout(function () {
                _this2.props.add('next');
            }, 500);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/home/a' },
                    'a component'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/home/b' },
                    'b component'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.text
                ),
                (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)
            );
        }
    }]);

    return HomeComponent;
}(_react.PureComponent);

HomeComponent = (0, _reactRedux.connect)(function (_ref) {
    var datas = _ref.datas;
    return datas;
}, function (dispatch, ownProps) {
    return {
        add: function add(text) {
            return dispatch((0, _actions.add)(text));
        }
    };
})(HomeComponent);

exports.default = HomeComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(4);

var _reduxForm = __webpack_require__(5);

var rootReducer = (0, _redux.combineReducers)({
    datas: function datas() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { text: 'hello' };
        var action = arguments[1];

        switch (action.type) {
            case 'add':
                return _extends({}, state, { text: action.text });
            default:
                return state;
        }
    },
    demoForm: function demoForm() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { text: '' };
        var action = arguments[1];

        return state;
    },
    form: _reduxForm.reducer
});

exports.default = rootReducer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactRouterConfig = __webpack_require__(2);

var _home = __webpack_require__(10);

var _home2 = _interopRequireDefault(_home);

var _form = __webpack_require__(9);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var aComponent = function aComponent(props) {
    return React.createElement(
        "div",
        null,
        "a component",
        (0, _reactRouterConfig.renderRoutes)(props.route.routes)
    );
};

var bComponent = function bComponent(props) {
    return React.createElement(
        "div",
        null,
        "b component",
        (0, _reactRouterConfig.renderRoutes)(props.route.routes)
    );
};

var NotFoundComponent = function NotFoundComponent(props) {
    return React.createElement(
        "div",
        null,
        "404"
    );
};

var DemoForm = function DemoForm(props) {
    return React.createElement(_form2.default, { onSubmit: console.log });
};

var routes = [{
    component: _home2.default,
    routes: [{
        path: '/home/',
        exact: true,
        component: DemoForm
    }, {
        path: '/home/a',
        component: DemoForm
    }, {
        path: '/home/b',
        component: bComponent
    }]
}, {
    component: NotFoundComponent
}];

exports.default = routes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var bootsTrapper = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(app) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        app.context.db = _index2.default;
                        container.singleton('db', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            return _context.abrupt('return', _index2.default);

                                        case 1:
                                        case 'end':
                                            return _context.stop();
                                    }
                                }
                            }, _callee, _this);
                        })));
                        return _context2.abrupt('return', app);

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function bootsTrapper(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

var _Container = __webpack_require__(3);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var container = _Container2.default.instance();

exports.default = bootsTrapper;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _koaRouter = __webpack_require__(26);

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _Container = __webpack_require__(3);

var _Container2 = _interopRequireDefault(_Container);

var _phimMoi = __webpack_require__(17);

var _server = __webpack_require__(33);

var _server2 = _interopRequireDefault(_server);

var _routers = __webpack_require__(12);

var _routers2 = _interopRequireDefault(_routers);

var _reactRouterConfig = __webpack_require__(2);

var _reactRouter = __webpack_require__(34);

var _getMuiTheme = __webpack_require__(31);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = __webpack_require__(30);

var _MuiThemeProvider = __webpack_require__(29);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reducers = __webpack_require__(11);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = new _koaRouter2.default();
var container = _Container2.default.instance();

router.get('/api', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
        var knex, page, total, query;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return container.make('db');

                    case 2:
                        knex = _context.sent;
                        page = ctx.query.page || 0;
                        total = ctx.query.total || 10;
                        query = knex.select('*').from('movies');

                        if (ctx.query.search) {
                            query = query.where('nameEn', 'like', '%' + ctx.query.search + '%').orWhere('nameVi', 'like', '%' + ctx.query.search + '%');
                        }
                        query = query.limit(total).offset(page * total);
                        _context.next = 10;
                        return query;

                    case 10:
                        ctx.body = _context.sent;

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

router.post('/api', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        url = ctx.request.body.url;
                        _context2.next = 3;
                        return (0, _phimMoi.getLinkDownloadByUrl)(url);

                    case 3:
                        ctx.body = _context2.sent;

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}());

router.get('*', function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx) {
        var context, muiTheme, preloadedState, store, body;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        context = {};
                        muiTheme = (0, _getMuiTheme2.default)({}, { userAgent: ctx.request.headers['user-agent'] });
                        preloadedState = { datas: { text: 'init state by server' }, demoForm: ctx.request.query };
                        store = (0, _redux.createStore)(_reducers2.default, preloadedState);
                        body = _server2.default.renderToString(_react2.default.createElement(
                            _reactRedux.Provider,
                            { store: store },
                            _react2.default.createElement(
                                _reactRouter.StaticRouter,
                                {
                                    location: ctx.request.url,
                                    context: context
                                },
                                (0, _reactRouterConfig.renderRoutes)(_routers2.default)
                            )
                        ));
                        _context3.next = 7;
                        return ctx.render('layout', { container: body, state: JSON.stringify(preloadedState).replace(/</g, '\\u003c') });

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x3) {
        return _ref3.apply(this, arguments);
    };
}());

module.exports = router.routes();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
* @license Gibberish-AES
* A lightweight Javascript Libray for OpenSSL compatible AES CBC encryption.
*
* Author: Mark Percival
* Email: mark@mpercival.com
* Copyright: Mark Percival - http://mpercival.com 2008
*
* With thanks to:
* Josh Davis - http://www.josh-davis.org/ecmaScrypt
* Chris Veness - http://www.movable-type.co.uk/scripts/aes.html
* Michel I. Gallant - http://www.jensign.com/
* Jean-Luc Cooke <jlcooke@certainkey.com> 2012-07-12: added strhex + invertArr to compress G2X/G3X/G9X/GBX/GEX/SBox/SBoxInv/Rcon saving over 7KB, and added encString, decString, also made the MD5 routine more easlier compressible using yuicompressor.
*
* License: MIT
*
* Usage: GibberishAES.enc("secret", "password")
* Outputs: AES Encrypted text encoded in Base64
*/

(function (root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object') {
        // Node.
        module.exports = factory();
    } else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Browser globals (root is window)
        root.GibberishAES = factory();
    }
})(undefined, function () {
    'use strict';

    var Nr = 14,

    /* Default to 256 Bit Encryption */
    Nk = 8,
        Decrypt = false,
        enc_utf8 = function enc_utf8(s) {
        try {
            return unescape(encodeURIComponent(s));
        } catch (e) {
            throw 'Error on UTF-8 encode';
        }
    },
        dec_utf8 = function dec_utf8(s) {
        try {
            return decodeURIComponent(escape(s));
        } catch (e) {
            throw 'Bad Key';
        }
    },
        padBlock = function padBlock(byteArr) {
        var array = [],
            cpad,
            i;
        if (byteArr.length < 16) {
            cpad = 16 - byteArr.length;
            array = [cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad];
        }
        for (i = 0; i < byteArr.length; i++) {
            array[i] = byteArr[i];
        }
        return array;
    },
        block2s = function block2s(block, lastBlock) {
        var string = '',
            padding,
            i;
        if (lastBlock) {
            padding = block[15];
            if (padding > 16) {
                throw 'Decryption error: Maybe bad key';
            }
            if (padding === 16) {
                return '';
            }
            for (i = 0; i < 16 - padding; i++) {
                string += String.fromCharCode(block[i]);
            }
        } else {
            for (i = 0; i < 16; i++) {
                string += String.fromCharCode(block[i]);
            }
        }
        return string;
    },
        a2h = function a2h(numArr) {
        var string = '',
            i;
        for (i = 0; i < numArr.length; i++) {
            string += (numArr[i] < 16 ? '0' : '') + numArr[i].toString(16);
        }
        return string;
    },
        h2a = function h2a(s) {
        var ret = [];
        s.replace(/(..)/g, function (s) {
            ret.push(parseInt(s, 16));
        });
        return ret;
    },
        s2a = function s2a(string, binary) {
        var array = [],
            i;

        if (!binary) {
            string = enc_utf8(string);
        }

        for (i = 0; i < string.length; i++) {
            array[i] = string.charCodeAt(i);
        }

        return array;
    },
        size = function size(newsize) {
        switch (newsize) {
            case 128:
                Nr = 10;
                Nk = 4;
                break;
            case 192:
                Nr = 12;
                Nk = 6;
                break;
            case 256:
                Nr = 14;
                Nk = 8;
                break;
            default:
                throw 'Invalid Key Size Specified:' + newsize;
        }
    },
        randArr = function randArr(num) {
        var result = [],
            i;
        for (i = 0; i < num; i++) {
            result = result.concat(Math.floor(Math.random() * 256));
        }
        return result;
    },
        openSSLKey = function openSSLKey(passwordArr, saltArr) {
        // Number of rounds depends on the size of the AES in use
        // 3 rounds for 256
        //        2 rounds for the key, 1 for the IV
        // 2 rounds for 128
        //        1 round for the key, 1 round for the IV
        // 3 rounds for 192 since it's not evenly divided by 128 bits
        var rounds = Nr >= 12 ? 3 : 2,
            key = [],
            iv = [],
            md5_hash = [],
            result = [],
            data00 = passwordArr.concat(saltArr),
            i;
        md5_hash[0] = MD5(data00);
        result = md5_hash[0];
        for (i = 1; i < rounds; i++) {
            md5_hash[i] = MD5(md5_hash[i - 1].concat(data00));
            result = result.concat(md5_hash[i]);
        }
        key = result.slice(0, 4 * Nk);
        iv = result.slice(4 * Nk, 4 * Nk + 16);
        return {
            key: key,
            iv: iv
        };
    },
        rawEncrypt = function rawEncrypt(plaintext, key, iv) {
        // plaintext, key and iv as byte arrays
        key = expandKey(key);
        var numBlocks = Math.ceil(plaintext.length / 16),
            blocks = [],
            i,
            cipherBlocks = [];
        for (i = 0; i < numBlocks; i++) {
            blocks[i] = padBlock(plaintext.slice(i * 16, i * 16 + 16));
        }
        if (plaintext.length % 16 === 0) {
            blocks.push([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);
            // CBC OpenSSL padding scheme
            numBlocks++;
        }
        for (i = 0; i < blocks.length; i++) {
            blocks[i] = i === 0 ? xorBlocks(blocks[i], iv) : xorBlocks(blocks[i], cipherBlocks[i - 1]);
            cipherBlocks[i] = encryptBlock(blocks[i], key);
        }
        return cipherBlocks;
    },
        rawDecrypt = function rawDecrypt(cryptArr, key, iv, binary) {
        //  cryptArr, key and iv as byte arrays
        key = expandKey(key);
        var numBlocks = cryptArr.length / 16,
            cipherBlocks = [],
            i,
            plainBlocks = [],
            string = '';
        for (i = 0; i < numBlocks; i++) {
            cipherBlocks.push(cryptArr.slice(i * 16, (i + 1) * 16));
        }
        for (i = cipherBlocks.length - 1; i >= 0; i--) {
            plainBlocks[i] = decryptBlock(cipherBlocks[i], key);
            plainBlocks[i] = i === 0 ? xorBlocks(plainBlocks[i], iv) : xorBlocks(plainBlocks[i], cipherBlocks[i - 1]);
        }
        for (i = 0; i < numBlocks - 1; i++) {
            string += block2s(plainBlocks[i], false);
        }
        string += block2s(plainBlocks[i], true);
        return binary ? string : dec_utf8(string);
    },
        encryptBlock = function encryptBlock(block, words) {
        Decrypt = false;
        var state = addRoundKey(block, words, 0),
            round;
        for (round = 1; round < Nr + 1; round++) {
            state = subBytes(state);
            state = shiftRows(state);
            if (round < Nr) {
                state = mixColumns(state);
            }
            //last round? don't mixColumns
            state = addRoundKey(state, words, round);
        }

        return state;
    },
        decryptBlock = function decryptBlock(block, words) {
        Decrypt = true;
        var state = addRoundKey(block, words, Nr),
            round;
        for (round = Nr - 1; round > -1; round--) {
            state = shiftRows(state);
            state = subBytes(state);
            state = addRoundKey(state, words, round);
            if (round > 0) {
                state = mixColumns(state);
            }
            //last round? don't mixColumns
        }

        return state;
    },
        subBytes = function subBytes(state) {
        var S = Decrypt ? SBoxInv : SBox,
            temp = [],
            i;
        for (i = 0; i < 16; i++) {
            temp[i] = S[state[i]];
        }
        return temp;
    },
        shiftRows = function shiftRows(state) {
        var temp = [],
            shiftBy = Decrypt ? [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3] : [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11],
            i;
        for (i = 0; i < 16; i++) {
            temp[i] = state[shiftBy[i]];
        }
        return temp;
    },
        mixColumns = function mixColumns(state) {
        var t = [],
            c;
        if (!Decrypt) {
            for (c = 0; c < 4; c++) {
                t[c * 4] = G2X[state[c * 4]] ^ G3X[state[1 + c * 4]] ^ state[2 + c * 4] ^ state[3 + c * 4];
                t[1 + c * 4] = state[c * 4] ^ G2X[state[1 + c * 4]] ^ G3X[state[2 + c * 4]] ^ state[3 + c * 4];
                t[2 + c * 4] = state[c * 4] ^ state[1 + c * 4] ^ G2X[state[2 + c * 4]] ^ G3X[state[3 + c * 4]];
                t[3 + c * 4] = G3X[state[c * 4]] ^ state[1 + c * 4] ^ state[2 + c * 4] ^ G2X[state[3 + c * 4]];
            }
        } else {
            for (c = 0; c < 4; c++) {
                t[c * 4] = GEX[state[c * 4]] ^ GBX[state[1 + c * 4]] ^ GDX[state[2 + c * 4]] ^ G9X[state[3 + c * 4]];
                t[1 + c * 4] = G9X[state[c * 4]] ^ GEX[state[1 + c * 4]] ^ GBX[state[2 + c * 4]] ^ GDX[state[3 + c * 4]];
                t[2 + c * 4] = GDX[state[c * 4]] ^ G9X[state[1 + c * 4]] ^ GEX[state[2 + c * 4]] ^ GBX[state[3 + c * 4]];
                t[3 + c * 4] = GBX[state[c * 4]] ^ GDX[state[1 + c * 4]] ^ G9X[state[2 + c * 4]] ^ GEX[state[3 + c * 4]];
            }
        }

        return t;
    },
        addRoundKey = function addRoundKey(state, words, round) {
        var temp = [],
            i;
        for (i = 0; i < 16; i++) {
            temp[i] = state[i] ^ words[round][i];
        }
        return temp;
    },
        xorBlocks = function xorBlocks(block1, block2) {
        var temp = [],
            i;
        for (i = 0; i < 16; i++) {
            temp[i] = block1[i] ^ block2[i];
        }
        return temp;
    },
        expandKey = function expandKey(key) {
        // Expects a 1d number array
        var w = [],
            temp = [],
            i,
            r,
            t,
            flat = [],
            j;

        for (i = 0; i < Nk; i++) {
            r = [key[4 * i], key[4 * i + 1], key[4 * i + 2], key[4 * i + 3]];
            w[i] = r;
        }

        for (i = Nk; i < 4 * (Nr + 1); i++) {
            w[i] = [];
            for (t = 0; t < 4; t++) {
                temp[t] = w[i - 1][t];
            }
            if (i % Nk === 0) {
                temp = subWord(rotWord(temp));
                temp[0] ^= Rcon[i / Nk - 1];
            } else if (Nk > 6 && i % Nk === 4) {
                temp = subWord(temp);
            }
            for (t = 0; t < 4; t++) {
                w[i][t] = w[i - Nk][t] ^ temp[t];
            }
        }
        for (i = 0; i < Nr + 1; i++) {
            flat[i] = [];
            for (j = 0; j < 4; j++) {
                flat[i].push(w[i * 4 + j][0], w[i * 4 + j][1], w[i * 4 + j][2], w[i * 4 + j][3]);
            }
        }
        return flat;
    },
        subWord = function subWord(w) {
        // apply SBox to 4-byte word w
        for (var i = 0; i < 4; i++) {
            w[i] = SBox[w[i]];
        }
        return w;
    },
        rotWord = function rotWord(w) {
        // rotate 4-byte word w left by one byte
        var tmp = w[0],
            i;
        for (i = 0; i < 3; i++) {
            w[i] = w[i + 1];
        }
        w[3] = tmp;
        return w;
    },


    // jlcooke: 2012-07-12: added strhex + invertArr to compress G2X/G3X/G9X/GBX/GEX/SBox/SBoxInv/Rcon saving over 7KB, and added encString, decString
    strhex = function strhex(str, size) {
        var i,
            ret = [];
        for (i = 0; i < str.length; i += size) {
            ret[i / size] = parseInt(str.substr(i, size), 16);
        }
        return ret;
    },
        invertArr = function invertArr(arr) {
        var i,
            ret = [];
        for (i = 0; i < arr.length; i++) {
            ret[arr[i]] = i;
        }
        return ret;
    },
        Gxx = function Gxx(a, b) {
        var i, ret;

        ret = 0;
        for (i = 0; i < 8; i++) {
            ret = (b & 1) === 1 ? ret ^ a : ret;
            /* xmult */
            a = a > 0x7f ? 0x11b ^ a << 1 : a << 1;
            b >>>= 1;
        }

        return ret;
    },
        Gx = function Gx(x) {
        var i,
            r = [];
        for (i = 0; i < 256; i++) {
            r[i] = Gxx(x, i);
        }
        return r;
    },


    // S-box
    /*
        SBox = [
        99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
        118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164,
        114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113,
        216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226,
        235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214,
        179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203,
        190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69,
        249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245,
        188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68,
        23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42,
        144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73,
        6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109,
        141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37,
        46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62,
        181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225,
        248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223,
        140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187,
        22], //*/SBox = strhex('637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16', 2),


    // Precomputed lookup table for the inverse SBox
    /*    SBoxInv = [
        82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
        251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222,
        233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
        250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
        109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92,
        204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21,
        70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247,
        228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
        193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220,
        234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
        53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
        41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
        198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168,
        51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81,
        127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
        224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
        23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12,
        125], //*/SBoxInv = invertArr(SBox),


    // Rijndael Rcon
    /*
        Rcon = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
        188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
    //*/Rcon = strhex('01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591', 2),


    /*
        G2X = [
        0x00, 0x02, 0x04, 0x06, 0x08, 0x0a, 0x0c, 0x0e, 0x10, 0x12, 0x14, 0x16,
        0x18, 0x1a, 0x1c, 0x1e, 0x20, 0x22, 0x24, 0x26, 0x28, 0x2a, 0x2c, 0x2e,
        0x30, 0x32, 0x34, 0x36, 0x38, 0x3a, 0x3c, 0x3e, 0x40, 0x42, 0x44, 0x46,
        0x48, 0x4a, 0x4c, 0x4e, 0x50, 0x52, 0x54, 0x56, 0x58, 0x5a, 0x5c, 0x5e,
        0x60, 0x62, 0x64, 0x66, 0x68, 0x6a, 0x6c, 0x6e, 0x70, 0x72, 0x74, 0x76,
        0x78, 0x7a, 0x7c, 0x7e, 0x80, 0x82, 0x84, 0x86, 0x88, 0x8a, 0x8c, 0x8e,
        0x90, 0x92, 0x94, 0x96, 0x98, 0x9a, 0x9c, 0x9e, 0xa0, 0xa2, 0xa4, 0xa6,
        0xa8, 0xaa, 0xac, 0xae, 0xb0, 0xb2, 0xb4, 0xb6, 0xb8, 0xba, 0xbc, 0xbe,
        0xc0, 0xc2, 0xc4, 0xc6, 0xc8, 0xca, 0xcc, 0xce, 0xd0, 0xd2, 0xd4, 0xd6,
        0xd8, 0xda, 0xdc, 0xde, 0xe0, 0xe2, 0xe4, 0xe6, 0xe8, 0xea, 0xec, 0xee,
        0xf0, 0xf2, 0xf4, 0xf6, 0xf8, 0xfa, 0xfc, 0xfe, 0x1b, 0x19, 0x1f, 0x1d,
        0x13, 0x11, 0x17, 0x15, 0x0b, 0x09, 0x0f, 0x0d, 0x03, 0x01, 0x07, 0x05,
        0x3b, 0x39, 0x3f, 0x3d, 0x33, 0x31, 0x37, 0x35, 0x2b, 0x29, 0x2f, 0x2d,
        0x23, 0x21, 0x27, 0x25, 0x5b, 0x59, 0x5f, 0x5d, 0x53, 0x51, 0x57, 0x55,
        0x4b, 0x49, 0x4f, 0x4d, 0x43, 0x41, 0x47, 0x45, 0x7b, 0x79, 0x7f, 0x7d,
        0x73, 0x71, 0x77, 0x75, 0x6b, 0x69, 0x6f, 0x6d, 0x63, 0x61, 0x67, 0x65,
        0x9b, 0x99, 0x9f, 0x9d, 0x93, 0x91, 0x97, 0x95, 0x8b, 0x89, 0x8f, 0x8d,
        0x83, 0x81, 0x87, 0x85, 0xbb, 0xb9, 0xbf, 0xbd, 0xb3, 0xb1, 0xb7, 0xb5,
        0xab, 0xa9, 0xaf, 0xad, 0xa3, 0xa1, 0xa7, 0xa5, 0xdb, 0xd9, 0xdf, 0xdd,
        0xd3, 0xd1, 0xd7, 0xd5, 0xcb, 0xc9, 0xcf, 0xcd, 0xc3, 0xc1, 0xc7, 0xc5,
        0xfb, 0xf9, 0xff, 0xfd, 0xf3, 0xf1, 0xf7, 0xf5, 0xeb, 0xe9, 0xef, 0xed,
        0xe3, 0xe1, 0xe7, 0xe5
        ], //*/G2X = Gx(2),


    /*    G3X = [
        0x00, 0x03, 0x06, 0x05, 0x0c, 0x0f, 0x0a, 0x09, 0x18, 0x1b, 0x1e, 0x1d,
        0x14, 0x17, 0x12, 0x11, 0x30, 0x33, 0x36, 0x35, 0x3c, 0x3f, 0x3a, 0x39,
        0x28, 0x2b, 0x2e, 0x2d, 0x24, 0x27, 0x22, 0x21, 0x60, 0x63, 0x66, 0x65,
        0x6c, 0x6f, 0x6a, 0x69, 0x78, 0x7b, 0x7e, 0x7d, 0x74, 0x77, 0x72, 0x71,
        0x50, 0x53, 0x56, 0x55, 0x5c, 0x5f, 0x5a, 0x59, 0x48, 0x4b, 0x4e, 0x4d,
        0x44, 0x47, 0x42, 0x41, 0xc0, 0xc3, 0xc6, 0xc5, 0xcc, 0xcf, 0xca, 0xc9,
        0xd8, 0xdb, 0xde, 0xdd, 0xd4, 0xd7, 0xd2, 0xd1, 0xf0, 0xf3, 0xf6, 0xf5,
        0xfc, 0xff, 0xfa, 0xf9, 0xe8, 0xeb, 0xee, 0xed, 0xe4, 0xe7, 0xe2, 0xe1,
        0xa0, 0xa3, 0xa6, 0xa5, 0xac, 0xaf, 0xaa, 0xa9, 0xb8, 0xbb, 0xbe, 0xbd,
        0xb4, 0xb7, 0xb2, 0xb1, 0x90, 0x93, 0x96, 0x95, 0x9c, 0x9f, 0x9a, 0x99,
        0x88, 0x8b, 0x8e, 0x8d, 0x84, 0x87, 0x82, 0x81, 0x9b, 0x98, 0x9d, 0x9e,
        0x97, 0x94, 0x91, 0x92, 0x83, 0x80, 0x85, 0x86, 0x8f, 0x8c, 0x89, 0x8a,
        0xab, 0xa8, 0xad, 0xae, 0xa7, 0xa4, 0xa1, 0xa2, 0xb3, 0xb0, 0xb5, 0xb6,
        0xbf, 0xbc, 0xb9, 0xba, 0xfb, 0xf8, 0xfd, 0xfe, 0xf7, 0xf4, 0xf1, 0xf2,
        0xe3, 0xe0, 0xe5, 0xe6, 0xef, 0xec, 0xe9, 0xea, 0xcb, 0xc8, 0xcd, 0xce,
        0xc7, 0xc4, 0xc1, 0xc2, 0xd3, 0xd0, 0xd5, 0xd6, 0xdf, 0xdc, 0xd9, 0xda,
        0x5b, 0x58, 0x5d, 0x5e, 0x57, 0x54, 0x51, 0x52, 0x43, 0x40, 0x45, 0x46,
        0x4f, 0x4c, 0x49, 0x4a, 0x6b, 0x68, 0x6d, 0x6e, 0x67, 0x64, 0x61, 0x62,
        0x73, 0x70, 0x75, 0x76, 0x7f, 0x7c, 0x79, 0x7a, 0x3b, 0x38, 0x3d, 0x3e,
        0x37, 0x34, 0x31, 0x32, 0x23, 0x20, 0x25, 0x26, 0x2f, 0x2c, 0x29, 0x2a,
        0x0b, 0x08, 0x0d, 0x0e, 0x07, 0x04, 0x01, 0x02, 0x13, 0x10, 0x15, 0x16,
        0x1f, 0x1c, 0x19, 0x1a
        ], //*/G3X = Gx(3),


    /*
        G9X = [
        0x00, 0x09, 0x12, 0x1b, 0x24, 0x2d, 0x36, 0x3f, 0x48, 0x41, 0x5a, 0x53,
        0x6c, 0x65, 0x7e, 0x77, 0x90, 0x99, 0x82, 0x8b, 0xb4, 0xbd, 0xa6, 0xaf,
        0xd8, 0xd1, 0xca, 0xc3, 0xfc, 0xf5, 0xee, 0xe7, 0x3b, 0x32, 0x29, 0x20,
        0x1f, 0x16, 0x0d, 0x04, 0x73, 0x7a, 0x61, 0x68, 0x57, 0x5e, 0x45, 0x4c,
        0xab, 0xa2, 0xb9, 0xb0, 0x8f, 0x86, 0x9d, 0x94, 0xe3, 0xea, 0xf1, 0xf8,
        0xc7, 0xce, 0xd5, 0xdc, 0x76, 0x7f, 0x64, 0x6d, 0x52, 0x5b, 0x40, 0x49,
        0x3e, 0x37, 0x2c, 0x25, 0x1a, 0x13, 0x08, 0x01, 0xe6, 0xef, 0xf4, 0xfd,
        0xc2, 0xcb, 0xd0, 0xd9, 0xae, 0xa7, 0xbc, 0xb5, 0x8a, 0x83, 0x98, 0x91,
        0x4d, 0x44, 0x5f, 0x56, 0x69, 0x60, 0x7b, 0x72, 0x05, 0x0c, 0x17, 0x1e,
        0x21, 0x28, 0x33, 0x3a, 0xdd, 0xd4, 0xcf, 0xc6, 0xf9, 0xf0, 0xeb, 0xe2,
        0x95, 0x9c, 0x87, 0x8e, 0xb1, 0xb8, 0xa3, 0xaa, 0xec, 0xe5, 0xfe, 0xf7,
        0xc8, 0xc1, 0xda, 0xd3, 0xa4, 0xad, 0xb6, 0xbf, 0x80, 0x89, 0x92, 0x9b,
        0x7c, 0x75, 0x6e, 0x67, 0x58, 0x51, 0x4a, 0x43, 0x34, 0x3d, 0x26, 0x2f,
        0x10, 0x19, 0x02, 0x0b, 0xd7, 0xde, 0xc5, 0xcc, 0xf3, 0xfa, 0xe1, 0xe8,
        0x9f, 0x96, 0x8d, 0x84, 0xbb, 0xb2, 0xa9, 0xa0, 0x47, 0x4e, 0x55, 0x5c,
        0x63, 0x6a, 0x71, 0x78, 0x0f, 0x06, 0x1d, 0x14, 0x2b, 0x22, 0x39, 0x30,
        0x9a, 0x93, 0x88, 0x81, 0xbe, 0xb7, 0xac, 0xa5, 0xd2, 0xdb, 0xc0, 0xc9,
        0xf6, 0xff, 0xe4, 0xed, 0x0a, 0x03, 0x18, 0x11, 0x2e, 0x27, 0x3c, 0x35,
        0x42, 0x4b, 0x50, 0x59, 0x66, 0x6f, 0x74, 0x7d, 0xa1, 0xa8, 0xb3, 0xba,
        0x85, 0x8c, 0x97, 0x9e, 0xe9, 0xe0, 0xfb, 0xf2, 0xcd, 0xc4, 0xdf, 0xd6,
        0x31, 0x38, 0x23, 0x2a, 0x15, 0x1c, 0x07, 0x0e, 0x79, 0x70, 0x6b, 0x62,
        0x5d, 0x54, 0x4f, 0x46
        ], //*/G9X = Gx(9),


    /*    GBX = [
        0x00, 0x0b, 0x16, 0x1d, 0x2c, 0x27, 0x3a, 0x31, 0x58, 0x53, 0x4e, 0x45,
        0x74, 0x7f, 0x62, 0x69, 0xb0, 0xbb, 0xa6, 0xad, 0x9c, 0x97, 0x8a, 0x81,
        0xe8, 0xe3, 0xfe, 0xf5, 0xc4, 0xcf, 0xd2, 0xd9, 0x7b, 0x70, 0x6d, 0x66,
        0x57, 0x5c, 0x41, 0x4a, 0x23, 0x28, 0x35, 0x3e, 0x0f, 0x04, 0x19, 0x12,
        0xcb, 0xc0, 0xdd, 0xd6, 0xe7, 0xec, 0xf1, 0xfa, 0x93, 0x98, 0x85, 0x8e,
        0xbf, 0xb4, 0xa9, 0xa2, 0xf6, 0xfd, 0xe0, 0xeb, 0xda, 0xd1, 0xcc, 0xc7,
        0xae, 0xa5, 0xb8, 0xb3, 0x82, 0x89, 0x94, 0x9f, 0x46, 0x4d, 0x50, 0x5b,
        0x6a, 0x61, 0x7c, 0x77, 0x1e, 0x15, 0x08, 0x03, 0x32, 0x39, 0x24, 0x2f,
        0x8d, 0x86, 0x9b, 0x90, 0xa1, 0xaa, 0xb7, 0xbc, 0xd5, 0xde, 0xc3, 0xc8,
        0xf9, 0xf2, 0xef, 0xe4, 0x3d, 0x36, 0x2b, 0x20, 0x11, 0x1a, 0x07, 0x0c,
        0x65, 0x6e, 0x73, 0x78, 0x49, 0x42, 0x5f, 0x54, 0xf7, 0xfc, 0xe1, 0xea,
        0xdb, 0xd0, 0xcd, 0xc6, 0xaf, 0xa4, 0xb9, 0xb2, 0x83, 0x88, 0x95, 0x9e,
        0x47, 0x4c, 0x51, 0x5a, 0x6b, 0x60, 0x7d, 0x76, 0x1f, 0x14, 0x09, 0x02,
        0x33, 0x38, 0x25, 0x2e, 0x8c, 0x87, 0x9a, 0x91, 0xa0, 0xab, 0xb6, 0xbd,
        0xd4, 0xdf, 0xc2, 0xc9, 0xf8, 0xf3, 0xee, 0xe5, 0x3c, 0x37, 0x2a, 0x21,
        0x10, 0x1b, 0x06, 0x0d, 0x64, 0x6f, 0x72, 0x79, 0x48, 0x43, 0x5e, 0x55,
        0x01, 0x0a, 0x17, 0x1c, 0x2d, 0x26, 0x3b, 0x30, 0x59, 0x52, 0x4f, 0x44,
        0x75, 0x7e, 0x63, 0x68, 0xb1, 0xba, 0xa7, 0xac, 0x9d, 0x96, 0x8b, 0x80,
        0xe9, 0xe2, 0xff, 0xf4, 0xc5, 0xce, 0xd3, 0xd8, 0x7a, 0x71, 0x6c, 0x67,
        0x56, 0x5d, 0x40, 0x4b, 0x22, 0x29, 0x34, 0x3f, 0x0e, 0x05, 0x18, 0x13,
        0xca, 0xc1, 0xdc, 0xd7, 0xe6, 0xed, 0xf0, 0xfb, 0x92, 0x99, 0x84, 0x8f,
        0xbe, 0xb5, 0xa8, 0xa3
        ], //*/GBX = Gx(0xb),


    /*
        GDX = [
        0x00, 0x0d, 0x1a, 0x17, 0x34, 0x39, 0x2e, 0x23, 0x68, 0x65, 0x72, 0x7f,
        0x5c, 0x51, 0x46, 0x4b, 0xd0, 0xdd, 0xca, 0xc7, 0xe4, 0xe9, 0xfe, 0xf3,
        0xb8, 0xb5, 0xa2, 0xaf, 0x8c, 0x81, 0x96, 0x9b, 0xbb, 0xb6, 0xa1, 0xac,
        0x8f, 0x82, 0x95, 0x98, 0xd3, 0xde, 0xc9, 0xc4, 0xe7, 0xea, 0xfd, 0xf0,
        0x6b, 0x66, 0x71, 0x7c, 0x5f, 0x52, 0x45, 0x48, 0x03, 0x0e, 0x19, 0x14,
        0x37, 0x3a, 0x2d, 0x20, 0x6d, 0x60, 0x77, 0x7a, 0x59, 0x54, 0x43, 0x4e,
        0x05, 0x08, 0x1f, 0x12, 0x31, 0x3c, 0x2b, 0x26, 0xbd, 0xb0, 0xa7, 0xaa,
        0x89, 0x84, 0x93, 0x9e, 0xd5, 0xd8, 0xcf, 0xc2, 0xe1, 0xec, 0xfb, 0xf6,
        0xd6, 0xdb, 0xcc, 0xc1, 0xe2, 0xef, 0xf8, 0xf5, 0xbe, 0xb3, 0xa4, 0xa9,
        0x8a, 0x87, 0x90, 0x9d, 0x06, 0x0b, 0x1c, 0x11, 0x32, 0x3f, 0x28, 0x25,
        0x6e, 0x63, 0x74, 0x79, 0x5a, 0x57, 0x40, 0x4d, 0xda, 0xd7, 0xc0, 0xcd,
        0xee, 0xe3, 0xf4, 0xf9, 0xb2, 0xbf, 0xa8, 0xa5, 0x86, 0x8b, 0x9c, 0x91,
        0x0a, 0x07, 0x10, 0x1d, 0x3e, 0x33, 0x24, 0x29, 0x62, 0x6f, 0x78, 0x75,
        0x56, 0x5b, 0x4c, 0x41, 0x61, 0x6c, 0x7b, 0x76, 0x55, 0x58, 0x4f, 0x42,
        0x09, 0x04, 0x13, 0x1e, 0x3d, 0x30, 0x27, 0x2a, 0xb1, 0xbc, 0xab, 0xa6,
        0x85, 0x88, 0x9f, 0x92, 0xd9, 0xd4, 0xc3, 0xce, 0xed, 0xe0, 0xf7, 0xfa,
        0xb7, 0xba, 0xad, 0xa0, 0x83, 0x8e, 0x99, 0x94, 0xdf, 0xd2, 0xc5, 0xc8,
        0xeb, 0xe6, 0xf1, 0xfc, 0x67, 0x6a, 0x7d, 0x70, 0x53, 0x5e, 0x49, 0x44,
        0x0f, 0x02, 0x15, 0x18, 0x3b, 0x36, 0x21, 0x2c, 0x0c, 0x01, 0x16, 0x1b,
        0x38, 0x35, 0x22, 0x2f, 0x64, 0x69, 0x7e, 0x73, 0x50, 0x5d, 0x4a, 0x47,
        0xdc, 0xd1, 0xc6, 0xcb, 0xe8, 0xe5, 0xf2, 0xff, 0xb4, 0xb9, 0xae, 0xa3,
        0x80, 0x8d, 0x9a, 0x97
        ], //*/GDX = Gx(0xd),


    /*
        GEX = [
        0x00, 0x0e, 0x1c, 0x12, 0x38, 0x36, 0x24, 0x2a, 0x70, 0x7e, 0x6c, 0x62,
        0x48, 0x46, 0x54, 0x5a, 0xe0, 0xee, 0xfc, 0xf2, 0xd8, 0xd6, 0xc4, 0xca,
        0x90, 0x9e, 0x8c, 0x82, 0xa8, 0xa6, 0xb4, 0xba, 0xdb, 0xd5, 0xc7, 0xc9,
        0xe3, 0xed, 0xff, 0xf1, 0xab, 0xa5, 0xb7, 0xb9, 0x93, 0x9d, 0x8f, 0x81,
        0x3b, 0x35, 0x27, 0x29, 0x03, 0x0d, 0x1f, 0x11, 0x4b, 0x45, 0x57, 0x59,
        0x73, 0x7d, 0x6f, 0x61, 0xad, 0xa3, 0xb1, 0xbf, 0x95, 0x9b, 0x89, 0x87,
        0xdd, 0xd3, 0xc1, 0xcf, 0xe5, 0xeb, 0xf9, 0xf7, 0x4d, 0x43, 0x51, 0x5f,
        0x75, 0x7b, 0x69, 0x67, 0x3d, 0x33, 0x21, 0x2f, 0x05, 0x0b, 0x19, 0x17,
        0x76, 0x78, 0x6a, 0x64, 0x4e, 0x40, 0x52, 0x5c, 0x06, 0x08, 0x1a, 0x14,
        0x3e, 0x30, 0x22, 0x2c, 0x96, 0x98, 0x8a, 0x84, 0xae, 0xa0, 0xb2, 0xbc,
        0xe6, 0xe8, 0xfa, 0xf4, 0xde, 0xd0, 0xc2, 0xcc, 0x41, 0x4f, 0x5d, 0x53,
        0x79, 0x77, 0x65, 0x6b, 0x31, 0x3f, 0x2d, 0x23, 0x09, 0x07, 0x15, 0x1b,
        0xa1, 0xaf, 0xbd, 0xb3, 0x99, 0x97, 0x85, 0x8b, 0xd1, 0xdf, 0xcd, 0xc3,
        0xe9, 0xe7, 0xf5, 0xfb, 0x9a, 0x94, 0x86, 0x88, 0xa2, 0xac, 0xbe, 0xb0,
        0xea, 0xe4, 0xf6, 0xf8, 0xd2, 0xdc, 0xce, 0xc0, 0x7a, 0x74, 0x66, 0x68,
        0x42, 0x4c, 0x5e, 0x50, 0x0a, 0x04, 0x16, 0x18, 0x32, 0x3c, 0x2e, 0x20,
        0xec, 0xe2, 0xf0, 0xfe, 0xd4, 0xda, 0xc8, 0xc6, 0x9c, 0x92, 0x80, 0x8e,
        0xa4, 0xaa, 0xb8, 0xb6, 0x0c, 0x02, 0x10, 0x1e, 0x34, 0x3a, 0x28, 0x26,
        0x7c, 0x72, 0x60, 0x6e, 0x44, 0x4a, 0x58, 0x56, 0x37, 0x39, 0x2b, 0x25,
        0x0f, 0x01, 0x13, 0x1d, 0x47, 0x49, 0x5b, 0x55, 0x7f, 0x71, 0x63, 0x6d,
        0xd7, 0xd9, 0xcb, 0xc5, 0xef, 0xe1, 0xf3, 0xfd, 0xa7, 0xa9, 0xbb, 0xb5,
        0x9f, 0x91, 0x83, 0x8d
        ], //*/GEX = Gx(0xe),
        enc = function enc(string, pass, binary) {
        // string, password in plaintext
        var salt = randArr(8),
            pbe = openSSLKey(s2a(pass, binary), salt),
            key = pbe.key,
            iv = pbe.iv,
            cipherBlocks,
            saltBlock = [[83, 97, 108, 116, 101, 100, 95, 95].concat(salt)];
        string = s2a(string, binary);
        cipherBlocks = rawEncrypt(string, key, iv);
        // Spells out 'Salted__'
        cipherBlocks = saltBlock.concat(cipherBlocks);
        return Base64.encode(cipherBlocks);
    },
        dec = function dec(string, pass, binary) {
        // string, password in plaintext
        var cryptArr = Base64.decode(string),
            salt = cryptArr.slice(8, 16),
            pbe = openSSLKey(s2a(pass, binary), salt),
            key = pbe.key,
            iv = pbe.iv;
        cryptArr = cryptArr.slice(16, cryptArr.length);
        // Take off the Salted__ffeeddcc
        string = rawDecrypt(cryptArr, key, iv, binary);
        return string;
    },
        MD5 = function MD5(numArr) {

        function rotateLeft(lValue, iShiftBits) {
            return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        }

        function addUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 0x80000000;
            lY8 = lY & 0x80000000;
            lX4 = lX & 0x40000000;
            lY4 = lY & 0x40000000;
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return lResult ^ 0x80000000 ^ lX8 ^ lY8;
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
                } else {
                    return lResult ^ 0x40000000 ^ lX8 ^ lY8;
                }
            } else {
                return lResult ^ lX8 ^ lY8;
            }
        }

        function f(x, y, z) {
            return x & y | ~x & z;
        }
        function g(x, y, z) {
            return x & z | y & ~z;
        }
        function h(x, y, z) {
            return x ^ y ^ z;
        }
        function funcI(x, y, z) {
            return y ^ (x | ~z);
        }

        function ff(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function gg(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function hh(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function ii(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(funcI(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function convertToWordArray(numArr) {
            var lWordCount,
                lMessageLength = numArr.length,
                lNumberOfWords_temp1 = lMessageLength + 8,
                lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64,
                lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
                lWordArray = [],
                lBytePosition = 0,
                lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - lByteCount % 4) / 4;
                lBytePosition = lByteCount % 4 * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | numArr[lByteCount] << lBytePosition;
                lByteCount++;
            }
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function wordToHex(lValue) {
            var lByte,
                lCount,
                wordToHexArr = [];
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = lValue >>> lCount * 8 & 255;
                wordToHexArr = wordToHexArr.concat(lByte);
            }
            return wordToHexArr;
        }

        /*function utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "",
            n,
            c;
            for (n = 0; n < string.length; n++) {
                c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        }*/

        var x = [],
            k,
            AA,
            BB,
            CC,
            DD,
            a,
            b,
            c,
            d,
            rnd = strhex('67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391', 8);

        x = convertToWordArray(numArr);

        a = rnd[0];
        b = rnd[1];
        c = rnd[2];
        d = rnd[3];

        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = ff(a, b, c, d, x[k + 0], 7, rnd[4]);
            d = ff(d, a, b, c, x[k + 1], 12, rnd[5]);
            c = ff(c, d, a, b, x[k + 2], 17, rnd[6]);
            b = ff(b, c, d, a, x[k + 3], 22, rnd[7]);
            a = ff(a, b, c, d, x[k + 4], 7, rnd[8]);
            d = ff(d, a, b, c, x[k + 5], 12, rnd[9]);
            c = ff(c, d, a, b, x[k + 6], 17, rnd[10]);
            b = ff(b, c, d, a, x[k + 7], 22, rnd[11]);
            a = ff(a, b, c, d, x[k + 8], 7, rnd[12]);
            d = ff(d, a, b, c, x[k + 9], 12, rnd[13]);
            c = ff(c, d, a, b, x[k + 10], 17, rnd[14]);
            b = ff(b, c, d, a, x[k + 11], 22, rnd[15]);
            a = ff(a, b, c, d, x[k + 12], 7, rnd[16]);
            d = ff(d, a, b, c, x[k + 13], 12, rnd[17]);
            c = ff(c, d, a, b, x[k + 14], 17, rnd[18]);
            b = ff(b, c, d, a, x[k + 15], 22, rnd[19]);
            a = gg(a, b, c, d, x[k + 1], 5, rnd[20]);
            d = gg(d, a, b, c, x[k + 6], 9, rnd[21]);
            c = gg(c, d, a, b, x[k + 11], 14, rnd[22]);
            b = gg(b, c, d, a, x[k + 0], 20, rnd[23]);
            a = gg(a, b, c, d, x[k + 5], 5, rnd[24]);
            d = gg(d, a, b, c, x[k + 10], 9, rnd[25]);
            c = gg(c, d, a, b, x[k + 15], 14, rnd[26]);
            b = gg(b, c, d, a, x[k + 4], 20, rnd[27]);
            a = gg(a, b, c, d, x[k + 9], 5, rnd[28]);
            d = gg(d, a, b, c, x[k + 14], 9, rnd[29]);
            c = gg(c, d, a, b, x[k + 3], 14, rnd[30]);
            b = gg(b, c, d, a, x[k + 8], 20, rnd[31]);
            a = gg(a, b, c, d, x[k + 13], 5, rnd[32]);
            d = gg(d, a, b, c, x[k + 2], 9, rnd[33]);
            c = gg(c, d, a, b, x[k + 7], 14, rnd[34]);
            b = gg(b, c, d, a, x[k + 12], 20, rnd[35]);
            a = hh(a, b, c, d, x[k + 5], 4, rnd[36]);
            d = hh(d, a, b, c, x[k + 8], 11, rnd[37]);
            c = hh(c, d, a, b, x[k + 11], 16, rnd[38]);
            b = hh(b, c, d, a, x[k + 14], 23, rnd[39]);
            a = hh(a, b, c, d, x[k + 1], 4, rnd[40]);
            d = hh(d, a, b, c, x[k + 4], 11, rnd[41]);
            c = hh(c, d, a, b, x[k + 7], 16, rnd[42]);
            b = hh(b, c, d, a, x[k + 10], 23, rnd[43]);
            a = hh(a, b, c, d, x[k + 13], 4, rnd[44]);
            d = hh(d, a, b, c, x[k + 0], 11, rnd[45]);
            c = hh(c, d, a, b, x[k + 3], 16, rnd[46]);
            b = hh(b, c, d, a, x[k + 6], 23, rnd[47]);
            a = hh(a, b, c, d, x[k + 9], 4, rnd[48]);
            d = hh(d, a, b, c, x[k + 12], 11, rnd[49]);
            c = hh(c, d, a, b, x[k + 15], 16, rnd[50]);
            b = hh(b, c, d, a, x[k + 2], 23, rnd[51]);
            a = ii(a, b, c, d, x[k + 0], 6, rnd[52]);
            d = ii(d, a, b, c, x[k + 7], 10, rnd[53]);
            c = ii(c, d, a, b, x[k + 14], 15, rnd[54]);
            b = ii(b, c, d, a, x[k + 5], 21, rnd[55]);
            a = ii(a, b, c, d, x[k + 12], 6, rnd[56]);
            d = ii(d, a, b, c, x[k + 3], 10, rnd[57]);
            c = ii(c, d, a, b, x[k + 10], 15, rnd[58]);
            b = ii(b, c, d, a, x[k + 1], 21, rnd[59]);
            a = ii(a, b, c, d, x[k + 8], 6, rnd[60]);
            d = ii(d, a, b, c, x[k + 15], 10, rnd[61]);
            c = ii(c, d, a, b, x[k + 6], 15, rnd[62]);
            b = ii(b, c, d, a, x[k + 13], 21, rnd[63]);
            a = ii(a, b, c, d, x[k + 4], 6, rnd[64]);
            d = ii(d, a, b, c, x[k + 11], 10, rnd[65]);
            c = ii(c, d, a, b, x[k + 2], 15, rnd[66]);
            b = ii(b, c, d, a, x[k + 9], 21, rnd[67]);
            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
        }

        return wordToHex(a).concat(wordToHex(b), wordToHex(c), wordToHex(d));
    },
        encString = function encString(plaintext, key, iv) {
        var i;
        plaintext = s2a(plaintext, false);

        key = s2a(key, false);
        for (i = key.length; i < 32; i++) {
            key[i] = 0;
        }

        if (iv === undefined) {
            // TODO: This is not defined anywhere... commented out...
            // iv = genIV();
        } else {
            iv = s2a(iv, false);
            for (i = iv.length; i < 16; i++) {
                iv[i] = 0;
            }
        }

        var ct = rawEncrypt(plaintext, key, iv);
        var ret = [iv];
        for (i = 0; i < ct.length; i++) {
            ret[ret.length] = ct[i];
        }
        return Base64.encode(ret);
    },
        decString = function decString(ciphertext, key) {
        var tmp = Base64.decode(ciphertext);
        var iv = tmp.slice(0, 16);
        var ct = tmp.slice(16, tmp.length);
        var i;

        key = s2a(key, false);
        for (i = key.length; i < 32; i++) {
            key[i] = 0;
        }

        var pt = rawDecrypt(ct, key, iv, false);
        return pt;
    },
        Base64 = function () {
        // Takes a Nx16x1 byte array and converts it to Base64
        var _chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            chars = _chars.split(''),
            encode = function encode(b, withBreaks) {
            var flatArr = [],
                b64 = '',
                i,
                broken_b64,
                totalChunks = Math.floor(b.length * 16 / 3);
            for (i = 0; i < b.length * 16; i++) {
                flatArr.push(b[Math.floor(i / 16)][i % 16]);
            }
            for (i = 0; i < flatArr.length; i = i + 3) {
                b64 += chars[flatArr[i] >> 2];
                b64 += chars[(flatArr[i] & 3) << 4 | flatArr[i + 1] >> 4];
                if (flatArr[i + 1] !== undefined) {
                    b64 += chars[(flatArr[i + 1] & 15) << 2 | flatArr[i + 2] >> 6];
                } else {
                    b64 += '=';
                }
                if (flatArr[i + 2] !== undefined) {
                    b64 += chars[flatArr[i + 2] & 63];
                } else {
                    b64 += '=';
                }
            }
            // OpenSSL is super particular about line breaks
            broken_b64 = b64.slice(0, 64) + '\n';
            for (i = 1; i < Math.ceil(b64.length / 64); i++) {
                broken_b64 += b64.slice(i * 64, i * 64 + 64) + (Math.ceil(b64.length / 64) === i + 1 ? '' : '\n');
            }
            return broken_b64;
        },
            decode = function decode(string) {
            string = string.replace(/\n/g, '');
            var flatArr = [],
                c = [],
                b = [],
                i;
            for (i = 0; i < string.length; i = i + 4) {
                c[0] = _chars.indexOf(string.charAt(i));
                c[1] = _chars.indexOf(string.charAt(i + 1));
                c[2] = _chars.indexOf(string.charAt(i + 2));
                c[3] = _chars.indexOf(string.charAt(i + 3));

                b[0] = c[0] << 2 | c[1] >> 4;
                b[1] = (c[1] & 15) << 4 | c[2] >> 2;
                b[2] = (c[2] & 3) << 6 | c[3];
                flatArr.push(b[0], b[1], b[2]);
            }
            flatArr = flatArr.slice(0, flatArr.length - flatArr.length % 16);
            return flatArr;
        };

        //internet explorer
        if (typeof Array.indexOf === "function") {
            _chars = chars;
        }

        /*
        //other way to solve internet explorer problem
        if(!Array.indexOf){
            Array.prototype.indexOf = function(obj){
                for(var i=0; i<this.length; i++){
                    if(this[i]===obj){
                        return i;
                    }
                }
                return -1;
            }
        }
        */

        return {
            "encode": encode,
            "decode": decode
        };
    }();

    return {
        "size": size,
        "h2a": h2a,
        "expandKey": expandKey,
        "encryptBlock": encryptBlock,
        "decryptBlock": decryptBlock,
        "Decrypt": Decrypt,
        "s2a": s2a,
        "rawEncrypt": rawEncrypt,
        "rawDecrypt": rawDecrypt,
        "dec": dec,
        "openSSLKey": openSSLKey,
        "a2h": a2h,
        "enc": enc,
        "Hash": { "MD5": MD5 },
        "Base64": Base64
    };
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
__webpack_require__(20).config();
exports.default = __webpack_require__(22)({
    client: 'pg',
    connection: {"GJS_DEBUG_TOPICS":"JS ERROR;JS LOG","LESSOPEN":"| /usr/bin/lesspipe %s","npm_config_cache_lock_stale":"60000","npm_package_devDependencies_babel_core":"^6.24.1","npm_package_devDependencies_chalk":"^1.1.3","npm_package_dependencies_bluebird":"latest","npm_config_legacy_bundling":"","npm_config_sign_git_tag":"","USER":"sieunhangao","J2SDKDIR":"/usr/lib/jvm/java-8-oracle","LC_TIME":"vi_VN","npm_package_devDependencies_jest":"^20.0.4","npm_config_user_agent":"npm/4.2.0 node/v7.10.0 linux x64","npm_config_always_auth":"","XDG_SEAT":"seat0","npm_config_bin_links":"true","npm_config_key":"","SSH_AGENT_PID":"1323","XDG_SESSION_TYPE":"x11","npm_package_devDependencies_file_loader":"^0.11.1","npm_package_devDependencies_gulp":"github:gulpjs/gulp#4.0","npm_config_description":"true","npm_config_fetch_retries":"2","npm_config_heading":"npm","npm_config_if_present":"","npm_config_init_version":"1.0.0","npm_config_user":"","npm_node_execpath":"/usr/bin/nodejs","LD_LIBRARY_PATH":"/opt/WebStorm-171.4694.29/bin:","SHLVL":"1","J2REDIR":"/usr/lib/jvm/java-8-oracle/jre","npm_package_devDependencies_babel_preset_es2015":"^6.24.1","npm_package_devDependencies_url_loader":"^0.5.8","HOME":"/home/sieunhangao","QT4_IM_MODULE":"xim","npm_config_force":"","DESKTOP_SESSION":"gnome","npm_package_devDependencies_babel_preset_es2017":"^6.24.1","npm_config_only":"","GIO_LAUNCHED_DESKTOP_FILE":"/home/sieunhangao/.local/share/applications/jetbrains-webstorm.desktop","npm_package_scripts_build_w":"webpack -w","npm_package_engines_node":"7.10.0","npm_package_dependencies_babel_polyfill":"^6.23.0","npm_config_cache_min":"10","npm_config_init_license":"ISC","QT_LINUX_ACCESSIBILITY_ALWAYS_ON":"1","GTK_MODULES":"gail:atk-bridge","npm_package_dependencies_koa_router":"^7.2.0","npm_package_dependencies_redux_form":"^7.0.1","npm_config_editor":"vi","npm_config_rollback":"true","npm_config_tag_version_prefix":"v","LC_MONETARY":"vi_VN","npm_package_devDependencies_rimraf":"^2.6.1","npm_package_dependencies_react_router_config":"^1.0.0-beta.3","npm_config_cache_max":"Infinity","npm_config_userconfig":"/home/sieunhangao/.npmrc","DBUS_SESSION_BUS_ADDRESS":"unix:abstract=/tmp/dbus-8bgddf0ECg,guid=baf2a0e89bc56ff0ae59532b596ebc2b","npm_package_dependencies_koa_nunjucks_2":"^3.0.2","npm_config_engine_strict":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_tmp":"/tmp","GIO_LAUNCHED_DESKTOP_FILE_PID":"2450","npm_package_description":"","npm_package_devDependencies_babel_loader":"^7.0.0","npm_package_dependencies_cheerio":"^1.0.0-rc.1","npm_package_dependencies_material_ui":"^0.18.1","npm_package_dependencies_react_router_dom":"^4.1.2","npm_config_depth":"Infinity","npm_config_save_dev":"","npm_config_usage":"","npm_package_devDependencies_progress_bar_webpack_plugin":"^1.9.3","npm_config_cafile":"","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_progress":"true","npm_config_https_proxy":"","MANDATORY_PATH":"/usr/share/gconf/gnome.mandatory.path","npm_package_scripts_dev":"webpack && npm start","npm_package_devDependencies_babel_jest":"^20.0.3","npm_config_onload_script":"","LOGNAME":"sieunhangao","GTK_IM_MODULE":"ibus","npm_package_dependencies_request":"^2.81.0","npm_config_rebuild_bundle":"true","npm_config_save_bundle":"","npm_config_shell":"/bin/bash","_":"/usr/bin/npm","npm_package_dependencies_react_tap_event_plugin":"^2.0.1","npm_config_dry_run":"","npm_config_prefix":"/usr","DEFAULTS_PATH":"/usr/share/gconf/gnome.default.path","npm_config_scope":"","npm_config_browser":"","npm_config_cache_lock_wait":"10000","npm_config_registry":"https://registry.npmjs.org/","npm_config_save_optional":"","npm_config_searchopts":"","npm_config_versions":"","XDG_SESSION_ID":"1","TERM":"xterm-256color","USERNAME":"sieunhangao","npm_package_dependencies_redux_logger":"^3.0.6","npm_config_cache":"/home/sieunhangao/.npm","npm_config_proxy":"","npm_config_send_metrics":"","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","npm_package_scripts_clear":"rimraf public","npm_package_scripts_start":"node index.js ","npm_package_devDependencies_html_webpack_plugin":"^2.28.0","npm_package_devDependencies_webpack_node_externals":"^1.6.0","npm_config_global_style":"","npm_config_ignore_scripts":"","npm_config_version":"","WINDOWPATH":"7","npm_config_local_address":"","npm_config_viewer":"man","PATH":"/usr/lib/node_modules/npm/bin/node-gyp-bin:/media/sieunhangao/Data/Project/react/testing-react/node_modules/.bin:/home/sieunhangao/bin:/home/sieunhangao/.local/bin:/home/sieunhangao/bin:/home/sieunhangao/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin:/snap/bin:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin:/home/sieunhangao/Android/Sdk/tools:/home/sieunhangao/Android/Sdk/platform-tools:/home/sieunhangao/Android/Sdk/tools:/home/sieunhangao/Android/Sdk/platform-tools","DERBY_HOME":"/usr/lib/jvm/java-8-oracle/db","SESSION_MANAGER":"local/sieunhangao-Inspiron-7537:@/tmp/.ICE-unix/1254,unix/sieunhangao-Inspiron-7537:/tmp/.ICE-unix/1254","npm_package_name":"demo","npm_package_dependencies_koa":"^2.2.0","NODE":"/usr/bin/nodejs","LC_ADDRESS":"vi_VN","XDG_MENU_PREFIX":"gnome-","XDG_RUNTIME_DIR":"/run/user/1000","npm_package_dependencies_react_redux":"^5.0.5","npm_config_color":"true","DISPLAY":":0","npm_package_dependencies_koa_static":"^3.0.0","npm_config_fetch_retry_mintimeout":"10000","npm_config_maxsockets":"50","LC_TELEPHONE":"vi_VN","LANG":"en_US.UTF-8","XDG_CURRENT_DESKTOP":"GNOME","npm_package_devDependencies_react_test_renderer":"^15.6.1","npm_package_devDependencies_webpack":"^2.6.0","npm_package_dependencies_react_dom":"^15.5.4","npm_package_dependencies_redux":"^3.6.0","npm_config_umask":"0002","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"gnome","XAUTHORITY":"/run/user/1000/gdm/Xauthority","npm_package_main":"index.js","npm_package_devDependencies_dotenv":"^4.0.0","npm_package_devDependencies_html_loader":"^0.4.5","npm_package_gitHead":"6cbd6bcb9829e75149daa3f7ed53001dae913c24","npm_config_fetch_retry_maxtimeout":"60000","npm_config_loglevel":"warn","npm_config_logs_max":"10","npm_config_message":"%s","npm_lifecycle_script":"webpack && npm start","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","npm_package_scripts_test":"jest","npm_package_devDependencies_webpack_dev_server":"^2.4.5","npm_package_dependencies_react_router":"^4.1.2","npm_config_ca":"","npm_config_cert":"","npm_config_global":"","npm_config_link":"","SHELL":"/bin/bash","LC_NAME":"vi_VN","npm_package_version":"1.0.0","npm_package_dependencies_knex":"^0.13.0","npm_config_access":"","npm_config_also":"","npm_config_save":"","npm_config_unicode":"true","npm_lifecycle_event":"dev","QT_ACCESSIBILITY":"1","GDMSESSION":"gnome","npm_package_scripts_build":"webpack -p","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"dev\"],\"original\":[\"run\",\"dev\"]}","npm_config_long":"","npm_config_production":"","npm_config_searchlimit":"20","npm_config_unsafe_perm":"true","LESSCLOSE":"/usr/bin/lesspipe %s %s","npm_package_author":"","npm_package_dependencies_koa_bodyparser":"^4.2.0","npm_config_node_version":"7.10.0","npm_config_tag":"latest","LC_MEASUREMENT":"vi_VN","npm_package_devDependencies_babel_preset_stage_0":"^6.24.1","npm_config_git_tag_version":"true","npm_config_shrinkwrap":"true","GJS_DEBUG_OUTPUT":"stderr","LC_IDENTIFICATION":"vi_VN","npm_package_license":"ISC","npm_config_fetch_retry_factor":"10","npm_config_proprietary_attribs":"true","npm_config_save_exact":"","npm_config_strict_ssl":"true","XDG_VTNR":"7","QT_IM_MODULE":"ibus","npm_package_devDependencies_style_loader":"^0.18.0","npm_config_dev":"","npm_config_globalconfig":"/usr/etc/npmrc","npm_config_init_module":"/home/sieunhangao/.npm-init.js","npm_config_parseable":"","PWD":"/media/sieunhangao/Data/Project/react/testing-react","JAVA_HOME":"/usr/lib/jvm/java-8-oracle","npm_package_devDependencies_enzyme":"^2.9.1","npm_config_globalignorefile":"/usr/etc/npmignore","npm_execpath":"/usr/lib/node_modules/npm/bin/npm-cli.js","CLUTTER_IM_MODULE":"xim","ANDROID_HOME":"/home/sieunhangao/Android/Sdk","XDG_CONFIG_DIRS":"/etc/xdg/xdg-gnome:/etc/xdg","XDG_DATA_DIRS":"/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop","npm_package_devDependencies_css_loader":"^0.28.2","npm_package_devDependencies_image_webpack_loader":"^3.3.1","npm_config_cache_lock_retries":"10","npm_config_searchstaleness":"900","LC_NUMERIC":"vi_VN","npm_package_devDependencies_babel_preset_env":"^1.5.1","npm_package_devDependencies_extract_text_webpack_plugin":"^2.1.0","npm_config_save_prefix":"^","npm_config_scripts_prepend_node_path":"warn-only","LC_PAPER":"vi_VN","npm_config_group":"1000","npm_config_init_author_email":"","npm_config_searchexclude":"","npm_config_git":"git","npm_config_optional":"true","npm_package_devDependencies_babel_preset_react":"^6.24.1","npm_package_dependencies_pg":"^6.2.3","npm_package_dependencies_react":"^15.5.4","npm_config_json":"","DATABASE_URL":"postgres://xmvmpwalsagthi:5ecba1004453919d22f093c5bfe251e29844741799525ae02b8d1810fa572993@ec2-54-197-232-155.compute-1.amazonaws.com:5432/dcktrp0qkbns39"}.DATABASE_URL + '?ssl=true'
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aes = __webpack_require__(15);
var cheerio = __webpack_require__(19);
var Promise = __webpack_require__(18);
var fs = __webpack_require__(21);
var request = __webpack_require__(36);

var requestOptions = {
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0"
    }
};

function getData(url, opt) {
    return new Promise(function (resolve, reject) {
        request(url, opt || requestOptions, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                return resolve(body);
            } else {
                return reject(error);
            }
        });
    });
}

function getLinkDownloadByUrl(url) {
    if (url.indexOf('http://www.phimMoi.net/') === -1 && url.indexOf('http://www.phimmoi.net/') === -1) url = 'http://www.phimmoi.net/' + url;
    if (url.indexOf('html') === -1) url = url + 'xem-phim.html';
    return getData(url, null).then(function (response) {
        var codeDownload = cheerio.load(response)('script[onload="checkEpisodeInfoLoaded(this)"]').attr('src');
        return getData(codeDownload.replace('javascript', 'json'), Object.assign({}, requestOptions, { json: true }));
    }).then(function (response) {
        var episodeId = response.episodeId,
            medias = response.medias;

        var password = 'PhimMoi.Net@' + episodeId;
        if (medias) return medias.map(function (video) {
            return {
                url: decodeUrl(video.url, password),
                type: video.type,
                width: video.width,
                height: video.height,
                resolution: parseFloat(video.resolution),
                label: video.resolution
            };
        });
    });
}

function decodeUrl(url, password) {
    try {
        //noinspection JSUnresolvedFunction
        return aes.dec(url, password);
    } catch (err) {}
}

exports.getLinkDownloadByUrl = getLinkDownloadByUrl;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("koa-nunjucks-2");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(6);


/***/ })
/******/ ]);