!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=158)}({1:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={callback:this.init};for(var r in t=Object.assign({},n,t))t.hasOwnProperty(r)&&(this["_"+r]=t[r]);this._callback()}var t,n,o;return t=e,(n=[{key:"init",value:function(){}}])&&r(t.prototype,n),o&&r(t,o),e}()},158:function(e,t,n){e.exports=n(159)},159:function(e,t,n){"use strict";n.r(t);n(39);n(83),"undefined"!=typeof learningStyles&&function(){google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback((function(){var e=new google.visualization.DataTable;e.addColumn("string","Topping"),e.addColumn("number","Slices"),e.addRows([["Visual",parseFloat(learningStyles.Visual)],["Auditory",parseFloat(learningStyles.Auditory)],["Kinesthetic",parseFloat(learningStyles.Kinesthetic)]]);var t=window.screen.width;t>500&&(t=500);var n={colors:["#08c","#80BA23","#EEAC57"],legend:{position:"bottom"},width:t,height:.7*t,pieHole:.4};new google.visualization.PieChart(document.getElementById("chart_div")).draw(e,n)}));var e=document,t=e.createElement("script");t.src="https://livelingua.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}()},39:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(1),o=n(4);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={fade:new o.a({}),menuSelector:".hidden-menu",linkSelector:".hidden-menu",overlaySelector:".hidden-menu-overlay",classActive:"open"};return e=Object.assign({},r,e),(n=u(this,l(t).call(this,e)))._overlay=document.querySelector(n._overlaySelector),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){a(l(t.prototype),"init",this).call(this);var e=this;document.querySelectorAll(this._sectionSelector),document.addEventListener("click",(function(t){return e.eventHandler(t)}),!1)}},{key:"eventHandler",value:function(e){if(this.overlay&&e.target===this.overlay)this.closeMenu();else{var t=this.getHrefAttr(e.target);!1!==t&&(e.preventDefault(),this.openMenu(t))}}},{key:"closeMenu",value:function(){document.querySelector(this._menuSelector+"."+this._classActive).classList.remove(this._classActive),this._fade.out(this.overlay)}},{key:"openMenu",value:function(e){var t=document.querySelector(".hidden-menu"+e);t&&(t.classList.add(this._classActive),this._fade.in(this.overlay))}},{key:"getHrefAttr",value:function(e){if("A"!==e.nodeName||!e.getAttribute("href")||"#"!==e.getAttribute("href").charAt(0)||e.getAttribute("href").length<2)return!1;var t=e.getAttribute("href");return!!document.getElementById(t.slice(1))&&t}},{key:"overlay",get:function(){return this._overlay},set:function(e){this._overlay=e}}])&&c(n.prototype,r),i&&c(n,i),t}(r.a);new f},4:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return l}));var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);return e=Object.assign({},{duration:200},e),i(this,u(t).call(this,e))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){c(u(t.prototype),"init",this).call(this)}},{key:"fade",value:function(e,t,n){n=void 0!==n?n:0,t=void 0!==t?t:this._duration,e.style.transitionProperty="opacity",e.style.transitionDuration=t/1e3+"s",0===parseFloat(n)?setTimeout((function(){return e.style.display=null}),t):0<parseFloat(n)&&(e.hasAttribute("hidden")&&e.removeAttribute("hidden"),e.style.display&&"none"!==e.style.display||(e.style.display="block")),setTimeout((function(){return e.style.opacity=n}),100)}},{key:"in",value:function(e,t){this.fade(e,t,1)}},{key:"out",value:function(e,t){this.fade(e,t,0)}}])&&o(n.prototype,r),l&&o(n,l),t}(n(1).a);window.fadeInOut=new l({})},83:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t),new(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);return e=Object.assign({},{linkSelector:".accordion-title",selector:".accordion",classActive:"active",iconUp:"fa-angle-up",iconDown:"fa-angle-down",icon:"i",iconCls:"far"},e),i(this,u(t).call(this,e))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,e),n=t,(r=[{key:"init",value:function(){c(u(t.prototype),"init",this).call(this);var e=this;document.querySelectorAll(this._sectionSelector),document.addEventListener("click",(function(t){return e.eventHandler(t)}),!1),[].forEach.call(document.querySelectorAll(this._selector),(function(t){var n=document.createElement("I");t.classList.contains(e._classActive)?(n.className=e._iconCls+" "+e._iconUp,setTimeout((function(n){return t.querySelector(e._icon).click()}),100)):n.className=e._iconCls+" "+e._iconDown,t.querySelector(e._linkSelector).appendChild(n)}))}},{key:"eventHandler",value:function(e){var t=this;if(e.target.classList.contains(this._linkSelector.slice(1))){e.preventDefault();var n=e.target.querySelector(this._icon),r=e.target.parentNode,o=r.classList.contains(this._classActive);document.querySelectorAll(this._selector+"."+this._classActive).forEach((function(e){e.classList.remove(t._classActive);var n=e.querySelector("."+t._iconUp);n.classList.remove(t._iconUp),n.classList.add(t._iconDown)})),o||(r.classList.add(this._classActive),n.classList.add(this._iconUp),n.classList.remove(this._iconDown))}}}])&&o(n.prototype,r),l&&o(n,l),t}(n(1).a))}});