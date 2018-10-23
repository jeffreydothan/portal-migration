var pageComponent=webpackJsonppageComponent([16],{205:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=n(i),l=o(1),u=n(l);o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11);var s=o(206),p=n(s),f=function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(a.default);u.default.register(f,p.default),t.default=f},206:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.CUkwm=void 0;var i,a=o(0),l=n(a),u=o(1),s=n(u);goog.loadModule(function(e){function t(e,t,n){var i=function(){r("article",null,null,"id","how-to-migrate"),r("h3"),d("How to migrate:"),c("h3"),r("h4"),d("Direct replacements"),c("h4"),r("table"),r("thead"),r("tr"),r("th"),d("lodash"),c("th"),r("th"),d("replacement"),c("th"),c("tr"),c("thead"),r("tbody"),r("tr"),r("td"),r("code"),d("_.bind"),c("code"),c("td"),r("td"),d("to native "),r("code"),d(".bind"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.bindKey"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.escape"),c("code"),c("td"),r("td"),d("to "),r("code"),d("Liferay.Util.escape"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.groupBy"),c("code"),c("td"),r("td"),d("to "),r("code"),d("Lifeay.Util.groupBy"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.isEqual"),c("code"),c("td"),r("td"),d("to "),r("code"),d("Liferay.Util.isEqual"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.map"),c("code"),c("td"),r("td"),d("to native "),r("code"),d("Array.map"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.reduce"),c("code"),c("td"),r("td"),d("to native "),r("code"),d("Array.reduce"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.unescape"),c("code"),c("td"),r("td"),d("to "),r("code"),d("Liferay.Util.unescape"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.sub"),c("code"),c("td"),r("td"),d("to "),r("code"),d("Liferay.Util.sub"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.without"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),c("tbody"),c("table"),r("blockquote"),r("p"),d("Tip: In general, if you need a specific "),r("a",null,null,"href","https://github.com/lodash/lodash"),r("code"),d("lodash"),c("code"),c("a"),d(" function in your application, you can add it as a dependency via "),r("code"),d("npm"),c("code"),d(". Keep in mind that "),r("code"),d("lodash"),c("code"),d(" exports "),r("a",null,null,"href","https://www.npmjs.com/search?q=keywords:lodash-modularized"),d("all"),c("a"),d(" of it's methods as individual "),r("code"),d("npm"),c("code"),d(" modules, which avoids bringing the whole "),r("code"),d("lodash"),c("code"),d(" library in your code."),c("p"),c("blockquote"),r("h4"),d("Code replacements"),c("h4"),r("ul"),r("li"),r("p"),r("code"),d("_.debounce"),c("code"),d(" to "),r("code"),d("metal-debounce"),c("code"),d("."),c("p"),a({code:'<aui:script require="metal-debounce/src/debounce">\n  let debounce = metalDebounceSrcDebounce.default;\n  debounce(fn, time);\n</aui:script>',mode:"htmlmixed"},null,n);c("li"),r("li"),r("p"),r("code"),d("_.forEach"),c("code"),d(" to "),r("code"),d(".forEach"),c("code"),d(" or "),r("code"),d("for in"),c("code"),c("p"),a({code:"[1,2,3].forEach((item) => {\n  console.log(item);\n});\n\nlet obj = {a:1, b:2, c:3};\nfor (key in obj) {\n  console.log(item);\n}",mode:"javascript"},null,n),c("li"),r("li"),r("p"),r("code"),d("_.isFunction"),c("code"),d(" to"),c("p"),a({code:"  var isFunction = function(val) {\n    return typeof val === 'function';\n  };\n\n  var myFunction = function(a, b) {\n    return a + b;\n  };\n\n  console.log(isFunction(myFunction)); // true",mode:"javascript"},null,n),r("p"),d("If you are using ES5 JavaScript"),c("p"),r("p"),d("or"),c("p"),a({code:"import {core} from 'metal';\n\nconst myFunction = (a, b) => a + b;\n\nconsole.log(core.isFunction(myFunction)); // true",mode:"javascript"},null,n),r("p"),d("If you are using ES6 JavaScript"),c("p"),c("li"),c("ul"),c("article"),r("input",null,null,"type","hidden","value",e.page.title),c("input"),r("input",null,null,"type","hidden","value",e.site.title),c("input")};l(o.$$assignDefaults({content:i},e),null,n)}goog.module("CUkwm.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,c=n.elementClose,d=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),a=(n.attr,s.default.getTemplate("ElectricCode.incrementaldom","render")),l=s.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="CUkwm.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var p=function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(l.default);s.default.register(p,i),t.CUkwm=p,t.templates=i,t.default=i}},[205]);