// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\montserrat-v14-latin_cyrillic-100.woff2":[["montserrat-v14-latin_cyrillic-100.67572b0f.woff2","fonts/montserrat-v14-latin_cyrillic-100.woff2"],"fonts/montserrat-v14-latin_cyrillic-100.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-100.woff":[["montserrat-v14-latin_cyrillic-100.2e7543e0.woff","fonts/montserrat-v14-latin_cyrillic-100.woff"],"fonts/montserrat-v14-latin_cyrillic-100.woff"],"./..\\fonts\\Montserrat-Thin.ttf":[["Montserrat-Thin.8c4fc1c5.ttf","fonts/Montserrat-Thin.ttf"],"fonts/Montserrat-Thin.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-100italic.woff2":[["montserrat-v14-latin_cyrillic-100italic.eb7ff13f.woff2","fonts/montserrat-v14-latin_cyrillic-100italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-100italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-100italic.woff":[["montserrat-v14-latin_cyrillic-100italic.0901f042.woff","fonts/montserrat-v14-latin_cyrillic-100italic.woff"],"fonts/montserrat-v14-latin_cyrillic-100italic.woff"],"./..\\fonts\\montserrat-v14-latin_cyrillic-100italic.ttf":[["montserrat-v14-latin_cyrillic-100italic.9fb96bd7.ttf","fonts/montserrat-v14-latin_cyrillic-100italic.ttf"],"fonts/montserrat-v14-latin_cyrillic-100italic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-200.woff2":[["montserrat-v14-latin_cyrillic-200.3e2208cf.woff2","fonts/montserrat-v14-latin_cyrillic-200.woff2"],"fonts/montserrat-v14-latin_cyrillic-200.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-200.woff":[["montserrat-v14-latin_cyrillic-200.efab8557.woff","fonts/montserrat-v14-latin_cyrillic-200.woff"],"fonts/montserrat-v14-latin_cyrillic-200.woff"],"./..\\fonts\\Montserrat-ExtraLight.ttf":[["Montserrat-ExtraLight.f8b4317c.ttf","fonts/Montserrat-ExtraLight.ttf"],"fonts/Montserrat-ExtraLight.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-200italic.woff2":[["montserrat-v14-latin_cyrillic-200italic.77cca529.woff2","fonts/montserrat-v14-latin_cyrillic-200italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-200italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-200italic.woff":[["montserrat-v14-latin_cyrillic-200italic.566de8b6.woff","fonts/montserrat-v14-latin_cyrillic-200italic.woff"],"fonts/montserrat-v14-latin_cyrillic-200italic.woff"],"./..\\fonts\\Montserrat-ExtraLightItalic.ttf":[["Montserrat-ExtraLightItalic.63cb1e62.ttf","fonts/Montserrat-ExtraLightItalic.ttf"],"fonts/Montserrat-ExtraLightItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-300.woff2":[["montserrat-v14-latin_cyrillic-300.62eb84b2.woff2","fonts/montserrat-v14-latin_cyrillic-300.woff2"],"fonts/montserrat-v14-latin_cyrillic-300.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-300.woff":[["montserrat-v14-latin_cyrillic-300.4fb5dca1.woff","fonts/montserrat-v14-latin_cyrillic-300.woff"],"fonts/montserrat-v14-latin_cyrillic-300.woff"],"./..\\fonts\\Montserrat-Light.ttf":[["Montserrat-Light.fbb571cf.ttf","fonts/Montserrat-Light.ttf"],"fonts/Montserrat-Light.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-300italic.woff2":[["montserrat-v14-latin_cyrillic-300italic.990ecd55.woff2","fonts/montserrat-v14-latin_cyrillic-300italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-300italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-300italic.woff":[["montserrat-v14-latin_cyrillic-300italic.227e3bec.woff","fonts/montserrat-v14-latin_cyrillic-300italic.woff"],"fonts/montserrat-v14-latin_cyrillic-300italic.woff"],"./..\\fonts\\Montserrat-LightItalic.ttf":[["Montserrat-LightItalic.98f5d6ba.ttf","fonts/Montserrat-LightItalic.ttf"],"fonts/Montserrat-LightItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-regular.woff2":[["montserrat-v14-latin_cyrillic-regular.b3efb4d8.woff2","fonts/montserrat-v14-latin_cyrillic-regular.woff2"],"fonts/montserrat-v14-latin_cyrillic-regular.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-regular.woff":[["montserrat-v14-latin_cyrillic-regular.61492ccf.woff","fonts/montserrat-v14-latin_cyrillic-regular.woff"],"fonts/montserrat-v14-latin_cyrillic-regular.woff"],"./..\\fonts\\Montserrat-Regular.ttf":[["Montserrat-Regular.44e710c1.ttf","fonts/Montserrat-Regular.ttf"],"fonts/Montserrat-Regular.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-italic.woff2":[["montserrat-v14-latin_cyrillic-italic.6a1ea251.woff2","fonts/montserrat-v14-latin_cyrillic-italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-italic.woff":[["montserrat-v14-latin_cyrillic-italic.ebab8f73.woff","fonts/montserrat-v14-latin_cyrillic-italic.woff"],"fonts/montserrat-v14-latin_cyrillic-italic.woff"],"./..\\fonts\\Montserrat-RegularItalic.ttf":[["Montserrat-RegularItalic.33b7b174.ttf","fonts/Montserrat-RegularItalic.ttf"],"fonts/Montserrat-RegularItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-500.woff2":[["montserrat-v14-latin_cyrillic-500.bd5a7a4e.woff2","fonts/montserrat-v14-latin_cyrillic-500.woff2"],"fonts/montserrat-v14-latin_cyrillic-500.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-500.woff":[["montserrat-v14-latin_cyrillic-500.2b237b66.woff","fonts/montserrat-v14-latin_cyrillic-500.woff"],"fonts/montserrat-v14-latin_cyrillic-500.woff"],"./..\\fonts\\Montserrat-Medium.ttf":[["Montserrat-Medium.d1110365.ttf","fonts/Montserrat-Medium.ttf"],"fonts/Montserrat-Medium.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-500italic.woff2":[["montserrat-v14-latin_cyrillic-500italic.fceaeed6.woff2","fonts/montserrat-v14-latin_cyrillic-500italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-500italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-500italic.woff":[["montserrat-v14-latin_cyrillic-500italic.b55ca8b4.woff","fonts/montserrat-v14-latin_cyrillic-500italic.woff"],"fonts/montserrat-v14-latin_cyrillic-500italic.woff"],"./..\\fonts\\Montserrat-MediumItalic.ttf":[["Montserrat-MediumItalic.7dd20c70.ttf","fonts/Montserrat-MediumItalic.ttf"],"fonts/Montserrat-MediumItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-600.woff2":[["montserrat-v14-latin_cyrillic-600.78bfcd30.woff2","fonts/montserrat-v14-latin_cyrillic-600.woff2"],"fonts/montserrat-v14-latin_cyrillic-600.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-600.woff":[["montserrat-v14-latin_cyrillic-600.9ab243fb.woff","fonts/montserrat-v14-latin_cyrillic-600.woff"],"fonts/montserrat-v14-latin_cyrillic-600.woff"],"./..\\fonts\\Montserrat-SemiBold.ttf":[["Montserrat-SemiBold.907fc829.ttf","fonts/Montserrat-SemiBold.ttf"],"fonts/Montserrat-SemiBold.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-600italic.woff2":[["montserrat-v14-latin_cyrillic-600italic.35ce93e9.woff2","fonts/montserrat-v14-latin_cyrillic-600italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-600italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-600italic.woff":[["montserrat-v14-latin_cyrillic-600italic.82e794ba.woff","fonts/montserrat-v14-latin_cyrillic-600italic.woff"],"fonts/montserrat-v14-latin_cyrillic-600italic.woff"],"./..\\fonts\\Montserrat-SemiBoldItalic.ttf":[["Montserrat-SemiBoldItalic.d5589f9d.ttf","fonts/Montserrat-SemiBoldItalic.ttf"],"fonts/Montserrat-SemiBoldItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-700.woff2":[["montserrat-v14-latin_cyrillic-700.c08a7122.woff2","fonts/montserrat-v14-latin_cyrillic-700.woff2"],"fonts/montserrat-v14-latin_cyrillic-700.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-700.woff":[["montserrat-v14-latin_cyrillic-700.47587240.woff","fonts/montserrat-v14-latin_cyrillic-700.woff"],"fonts/montserrat-v14-latin_cyrillic-700.woff"],"./..\\fonts\\Montserrat-Bold.ttf":[["Montserrat-Bold.f3410305.ttf","fonts/Montserrat-Bold.ttf"],"fonts/Montserrat-Bold.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-700italic.woff2":[["montserrat-v14-latin_cyrillic-700italic.06b48bff.woff2","fonts/montserrat-v14-latin_cyrillic-700italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-700italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-700italic.woff":[["montserrat-v14-latin_cyrillic-700italic.c8493632.woff","fonts/montserrat-v14-latin_cyrillic-700italic.woff"],"fonts/montserrat-v14-latin_cyrillic-700italic.woff"],"./..\\fonts\\Montserrat-BoldItalic.ttf":[["Montserrat-BoldItalic.474b9e20.ttf","fonts/Montserrat-BoldItalic.ttf"],"fonts/Montserrat-BoldItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-800.woff2":[["montserrat-v14-latin_cyrillic-800.d8a484f6.woff2","fonts/montserrat-v14-latin_cyrillic-800.woff2"],"fonts/montserrat-v14-latin_cyrillic-800.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-800.woff":[["montserrat-v14-latin_cyrillic-800.d7b51b6d.woff","fonts/montserrat-v14-latin_cyrillic-800.woff"],"fonts/montserrat-v14-latin_cyrillic-800.woff"],"./..\\fonts\\Montserrat-ExtraBold.ttf":[["Montserrat-ExtraBold.aa4e0e88.ttf","fonts/Montserrat-ExtraBold.ttf"],"fonts/Montserrat-ExtraBold.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-800italic.woff2":[["montserrat-v14-latin_cyrillic-800italic.2080b79c.woff2","fonts/montserrat-v14-latin_cyrillic-800italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-800italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-800italic.woff":[["montserrat-v14-latin_cyrillic-800italic.6804392f.woff","fonts/montserrat-v14-latin_cyrillic-800italic.woff"],"fonts/montserrat-v14-latin_cyrillic-800italic.woff"],"./..\\fonts\\Montserrat-ExtraBoldItalic.ttf":[["Montserrat-ExtraBoldItalic.d07ea3e9.ttf","fonts/Montserrat-ExtraBoldItalic.ttf"],"fonts/Montserrat-ExtraBoldItalic.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-900.woff2":[["montserrat-v14-latin_cyrillic-900.ec9e8d78.woff2","fonts/montserrat-v14-latin_cyrillic-900.woff2"],"fonts/montserrat-v14-latin_cyrillic-900.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-900.woff":[["montserrat-v14-latin_cyrillic-900.b71271d5.woff","fonts/montserrat-v14-latin_cyrillic-900.woff"],"fonts/montserrat-v14-latin_cyrillic-900.woff"],"./..\\fonts\\Montserrat-Black.ttf":[["Montserrat-Black.1b51557d.ttf","fonts/Montserrat-Black.ttf"],"fonts/Montserrat-Black.ttf"],"./..\\fonts\\montserrat-v14-latin_cyrillic-900italic.woff2":[["montserrat-v14-latin_cyrillic-900italic.a1497a46.woff2","fonts/montserrat-v14-latin_cyrillic-900italic.woff2"],"fonts/montserrat-v14-latin_cyrillic-900italic.woff2"],"./..\\fonts\\montserrat-v14-latin_cyrillic-900italic.woff":[["montserrat-v14-latin_cyrillic-900italic.9de845b3.woff","fonts/montserrat-v14-latin_cyrillic-900italic.woff"],"fonts/montserrat-v14-latin_cyrillic-900italic.woff"],"./..\\fonts\\Montserrat-BlackItalic.ttf":[["Montserrat-BlackItalic.f2271998.ttf","fonts/Montserrat-BlackItalic.ttf"],"fonts/Montserrat-BlackItalic.ttf"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\Vector.png":[["Vector.d3de0691.png","images/Vector.png"],"images/Vector.png"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\Vectorfortab.png":[["Vectorfortab.02fcca38.png","images/Vectorfortab.png"],"images/Vectorfortab.png"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\Vectorfordesktop.png":[["Vectorfordesktop.6952a96e.png","images/Vectorfordesktop.png"],"images/Vectorfordesktop.png"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\adapt.svg":[["adapt.2cebcc49.svg","images/adapt.svg"],"images/adapt.svg"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\imghero\\adapt-d.svg":[["adapt-d.6caa2f9a.svg","images/imghero/adapt-d.svg"],"images/imghero/adapt-d.svg"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\modern.svg":[["modern.88b766a7.svg","images/modern.svg"],"images/modern.svg"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\imghero\\modern-d.svg":[["modern-d.34deb088.svg","images/imghero/modern-d.svg"],"images/imghero/modern-d.svg"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\finance.svg":[["finance.7807d59a.svg","images/finance.svg"],"images/finance.svg"],"C:\\Users\\User\\Documents\\GitHub\\Team-project\\Team-Project-1\\src\\images\\imghero\\finance-d.svg":[["finance-d.6f10e8b1.svg","images/imghero/finance-d.svg"],"images/imghero/finance-d.svg"],"./..\\images\\mobile\\our-team-mobile.png":[["our-team-mobile.8b620152.png","images/mobile/our-team-mobile.png"],"images/mobile/our-team-mobile.png"],"./..\\images\\mobile\\our-team-mobile@2x.png":[["our-team-mobile@2x.29818764.png","images/mobile/our-team-mobile@2x.png"],"images/mobile/our-team-mobile@2x.png"],"./..\\images\\tablet\\our-team-tablet.png":[["our-team-tablet.13a5ae5b.png","images/tablet/our-team-tablet.png"],"images/tablet/our-team-tablet.png"],"./..\\images\\tablet\\our-team-tablet@2x.png":[["our-team-tablet@2x.2922e679.png","images/tablet/our-team-tablet@2x.png"],"images/tablet/our-team-tablet@2x.png"],"./..\\images\\desctop\\our-team-desctop.png":[["our-team-desctop.db1d55ca.png","images/desctop/our-team-desctop.png"],"images/desctop/our-team-desctop.png"],"./..\\images\\desctop\\our-team-desctop@2x.png":[["our-team-desctop@2x.afdf28ef.png","images/desctop/our-team-desctop@2x.png"],"images/desctop/our-team-desctop@2x.png"],"./..\\images\\icon-check.svg":[["icon-check.72789738.svg","images/icon-check.svg"],"images/icon-check.svg"],"./..\\images\\campfire.svg":[["campfire.df7ed37a.svg","images/campfire.svg"],"images/campfire.svg"],"./..\\images\\footer\\footer-background-320.png":[["footer-background-320.ecbd9737.png","images/footer/footer-background-320.png"],"images/footer/footer-background-320.png"],"./..\\images\\footer\\footer-background-320@2x.png":[["footer-background-320@2x.0813b5d5.png","images/footer/footer-background-320@2x.png"],"images/footer/footer-background-320@2x.png"],"./..\\images\\footer\\footer-background-768.png":[["footer-background-768.3e293f57.png","images/footer/footer-background-768.png"],"images/footer/footer-background-768.png"],"./..\\images\\footer\\footer-background-768@2x.png":[["footer-background-768@2x.8f313a31.png","images/footer/footer-background-768@2x.png"],"images/footer/footer-background-768@2x.png"],"./..\\images\\footer\\footer-background-1680.png":[["footer-background-1680.cb3bab0e.png","images/footer/footer-background-1680.png"],"images/footer/footer-background-1680.png"],"./..\\images\\footer\\footer-background-1680@2x.png":[["footer-background-1680@2x.8c961124.png","images/footer/footer-background-1680@2x.png"],"images/footer/footer-background-1680@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "2286" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map