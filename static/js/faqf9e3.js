!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n={callback:this.init};for(var r in e=Object.assign({},n,e))e.hasOwnProperty(r)&&(this["_"+r]=e[r]);this._callback()}var e,n,o;return e=t,(n=[{key:"init",value:function(){}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(f,t);var e,n,r,l=u(f);function f(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f);return t=Object.assign({},{linkSelector:".accordion-title",selector:".accordion",classActive:"active",iconUp:"fa-angle-up",iconDown:"fa-angle-down",icon:"i",iconCls:"far"},t),l.call(this,t)}return e=f,(n=[{key:"init",value:function(){i(a(f.prototype),"init",this).call(this);var t=this;document.querySelectorAll(this._sectionSelector),document.addEventListener("click",(function(e){return t.eventHandler(e)}),!1),[].forEach.call(document.querySelectorAll(this._selector),(function(e){var n=document.createElement("I");e.classList.contains(t._classActive)?(n.className=t._iconCls+" "+t._iconUp,setTimeout((function(n){return e.querySelector(t._icon).click()}),100)):n.className=t._iconCls+" "+t._iconDown,e.querySelector(t._linkSelector).appendChild(n)}))}},{key:"eventHandler",value:function(t){var e=this;if(t.target.classList.contains(this._linkSelector.slice(1))){t.preventDefault();var n=t.target.querySelector(this._icon),r=t.target.parentNode,o=r.classList.contains(this._classActive);document.querySelectorAll(this._selector+"."+this._classActive).forEach((function(t){t.classList.remove(e._classActive);var n=t.querySelector("."+e._iconUp);n.classList.remove(e._iconUp),n.classList.add(e._iconDown)})),o||(r.classList.add(this._classActive),n.classList.add(this._iconUp),n.classList.remove(this._iconDown)),setTimeout((function(){return t.target.scrollIntoView({behavior:"smooth"})}),300)}}}])&&o(e.prototype,n),r&&o(e,r),f}(n(0).a))},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(a,t);var e,n,r,o=l(a);function a(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);return t=Object.assign({},{duration:200},t),o.call(this,t)}return e=a,(n=[{key:"init",value:function(){c(f(a.prototype),"init",this).call(this)}},{key:"fade",value:function(t,e,n){n=void 0!==n?n:0,e=void 0!==e?e:this._duration,t.style.transitionProperty="opacity",t.style.transitionDuration=e/1e3+"s",0===parseFloat(n)?setTimeout((function(){return t.style.display=null}),e):0<parseFloat(n)&&(t.hasAttribute("hidden")&&t.removeAttribute("hidden"),t.style.display&&"none"!==t.style.display||(t.style.display="block")),setTimeout((function(){return t.style.opacity=n}),100)}},{key:"in",value:function(t,e){this.fade(t,e,1)}},{key:"out",value:function(t,e){this.fade(t,e,0)}}])&&i(e.prototype,n),r&&i(e,r),a}(r.a);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}window.fadeInOut=new s({}),new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,t);var e,n,r,o=b(i);function i(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var n={fade:new s({}),menuSelector:".hidden-menu",linkSelector:".hidden-menu",overlaySelector:".hidden-menu-overlay",classActive:"open"};return t=Object.assign({},n,t),(e=o.call(this,t))._overlay=document.querySelector(e._overlaySelector),e}return e=i,(n=[{key:"init",value:function(){v(m(i.prototype),"init",this).call(this);var t=this;document.querySelectorAll(this._sectionSelector),document.addEventListener("click",(function(e){return t.eventHandler(e)}),!1)}},{key:"eventHandler",value:function(t){if(this.overlay&&t.target===this.overlay)this.closeMenu();else{var e=this.getHrefAttr(t.target);!1!==e&&(t.preventDefault(),this.openMenu(e))}}},{key:"closeMenu",value:function(){document.querySelector(this._menuSelector+"."+this._classActive).classList.remove(this._classActive),this._fade.out(this.overlay)}},{key:"openMenu",value:function(t){var e=document.querySelector(".hidden-menu"+t);e&&(e.classList.add(this._classActive),this._fade.in(this.overlay))}},{key:"getHrefAttr",value:function(t){if("A"!==t.nodeName||!t.getAttribute("href")||"#"!==t.getAttribute("href").charAt(0)||t.getAttribute("href").length<2)return!1;var e=t.getAttribute("href");return!!document.getElementById(e.slice(1))&&e}},{key:"overlay",get:function(){return this._overlay},set:function(t){this._overlay=t}}])&&p(e.prototype,n),r&&p(e,r),i}(r.a)),n(2)}]);