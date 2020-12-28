(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["model"] = factory();
	else
		root["model"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "b153");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1f6b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "324b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_5c449dff_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1f6b");
/* harmony import */ var _users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_5c449dff_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_users_jinfeng_yan_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_5c449dff_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "62f4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b153":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AHelloWorld", function() { return /* reexport */ AHelloWorld; });

// CONCATENATED MODULE: D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("62f4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"56ef397a-vue-loader-template"}!D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./packages/HelloWorld/src/HelloWorld.vue?vue&type=template&id=5c449dff&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._m(0),_c('h3',[_vm._v("Installed CLI Plugins")]),_vm._m(1),_c('h3',[_vm._v("Essential Links")]),_vm._m(2),_c('h3',[_vm._v("Ecosystem")]),_vm._m(3)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(" For a guide and recipes on how to configure / customize this project,"),_c('br'),_vm._v(" check out the "),_c('a',{attrs:{"href":"https://cli.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-cli documentation")]),_vm._v(". ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel","target":"_blank","rel":"noopener"}},[_vm._v("babel")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint","target":"_blank","rel":"noopener"}},[_vm._v("eslint")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Community Chat")])]),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_c('li',[_c('a',{attrs:{"href":"https://news.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("News")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://router.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_c('li',[_c('a',{attrs:{"href":"https://vuex.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-devtools#vue-devtools","target":"_blank","rel":"noopener"}},[_vm._v("vue-devtools")])]),_c('li',[_c('a',{attrs:{"href":"https://vue-loader.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])])}]


// CONCATENATED MODULE: ./packages/HelloWorld/src/HelloWorld.vue?vue&type=template&id=5c449dff&scoped=true&

// CONCATENATED MODULE: D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./packages/HelloWorld/src/HelloWorld.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});

// CONCATENATED MODULE: ./packages/HelloWorld/src/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/HelloWorld/src/HelloWorld.vue?vue&type=style&index=0&id=5c449dff&scoped=true&lang=css&
var HelloWorldvue_type_style_index_0_id_5c449dff_scoped_true_lang_css_ = __webpack_require__("324b");

// CONCATENATED MODULE: D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/HelloWorld/src/HelloWorld.vue






/* normalize component */

var component = normalizeComponent(
  src_HelloWorldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5c449dff",
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
// CONCATENATED MODULE: ./packages/HelloWorld/index.js


HelloWorld.install = (Vue) => {
    Vue.components(HelloWorld.name,HelloWorld)
}

/* harmony default export */ var packages_HelloWorld = (HelloWorld);
// CONCATENATED MODULE: ./packages/index.js


// 将引入的组件模块存储，方便循环注册所有组件
const components = {
    HelloWorld: packages_HelloWorld ,
};

const install = (Vue,options)=>{
    if (install.installed) return;
    install.installed = true
    console.log(options)
    for (const key in components) {
        console.log(components[key]);
        const component = components[key];
        Vue.component(component.name, component)
    }
}

// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue,{})
}

// 每个组件单独导出时使用
for(let key in components){
    components[key].install = (Vue,options)=>{
        console.log(options)
        const component = components[key];
        Vue.component(component.name, component)
    }
}

var AHelloWorld = packages_HelloWorld

/* harmony default export */ var packages_0 = ({
    // 同时导出组件列表
    ...components,
    // 使用Vue.use必须具有install方法
    // https://cn.vuejs.org/v2/api/#Vue-use
    install,
});

// CONCATENATED MODULE: D:/users/jinfeng.yan/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=model.umd.js.map