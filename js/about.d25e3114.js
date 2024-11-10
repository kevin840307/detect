(self["webpackChunkdetect"]=self["webpackChunkdetect"]||[]).push([[594],{329:function(e,t,n){n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(8992),n(4520),n(1454),n(4979),function(){"use strict";var e;function t(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var i="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function r(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof n.g&&n.g];for(var t=0;t<e.length;++t){var i=e[t];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var o=r(this);function a(e,t){if(t)e:{var n=o;e=e.split(".");for(var r=0;r<e.length-1;r++){var a=e[r];if(!(a in n))break e;n=n[a]}e=e[e.length-1],r=n[e],t=t(r),t!=r&&null!=t&&i(n,e,{configurable:!0,writable:!0,value:t})}}function s(e){return e={next:e},e[Symbol.iterator]=function(){return this},e}function u(e){var n="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return n?n.call(e):{next:t(e)}}function l(e){if(!(e instanceof Array)){e=u(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);e=n}return e}a("Symbol",(function(e){function t(e){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new n(r+(e||"")+"_"+o++,e)}function n(e,t){this.h=e,i(this,"description",{configurable:!0,writable:!0,value:t})}if(e)return e;n.prototype.toString=function(){return this.h};var r="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",o=0;return t})),a("Symbol.iterator",(function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var n="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),r=0;r<n.length;r++){var a=o[n[r]];"function"===typeof a&&"function"!=typeof a.prototype[e]&&i(a.prototype,e,{configurable:!0,writable:!0,value:function(){return s(t(this))}})}return e}));var h="function"==typeof Object.assign?Object.assign:function(e,t){for(var n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};a("Object.assign",(function(e){return e||h}));var d,c="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)d=Object.setPrototypeOf;else{var p;e:{var f={a:!0},m={};try{m.__proto__=f,p=m.a;break e}catch(Dn){}p=!1}d=p?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var g=d;function y(e,t){if(e.prototype=c(t.prototype),e.prototype.constructor=e,g)g(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}else e[n]=t[n];e.za=t.prototype}function x(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function b(e){if(e.m)throw new TypeError("Generator is already running");e.m=!0}function w(e,t){e.l={ma:t,na:!0},e.h=e.s||e.v}function v(e,t,n){return e.h=n,{value:t}}function S(e){this.h=new x,this.i=e}function k(e,t){b(e.h);var n=e.h.j;return n?C(e,"return"in n?n["return"]:function(e){return{value:e,done:!0}},t,e.h.return):(e.h.return(t),I(e))}function C(e,t,n,i){try{var r=t.call(e.h.j,n);if(!(r instanceof Object))throw new TypeError("Iterator result "+r+" is not an object");if(!r.done)return e.h.m=!1,r;var o=r.value}catch(a){return e.h.j=null,w(e.h,a),I(e)}return e.h.j=null,i.call(e.h,o),I(e)}function I(e){for(;e.h.h;)try{var t=e.i(e.h);if(t)return e.h.m=!1,{value:t.value,done:!1}}catch(n){e.h.i=void 0,w(e.h,n)}if(e.h.m=!1,e.h.l){if(t=e.h.l,e.h.l=null,t.na)throw t.ma;return{value:t.return,done:!0}}return{value:void 0,done:!0}}function R(e){this.next=function(t){return b(e.h),e.h.j?t=C(e,e.h.j.next,t,e.h.u):(e.h.u(t),t=I(e)),t},this.throw=function(t){return b(e.h),e.h.j?t=C(e,e.h.j["throw"],t,e.h.u):(w(e.h,t),t=I(e)),t},this.return=function(t){return k(e,t)},this[Symbol.iterator]=function(){return this}}function P(e){function t(t){return e.next(t)}function n(t){return e.throw(t)}return new Promise((function(i,r){function o(e){e.done?i(e.value):Promise.resolve(e.value).then(t,n).then(o,r)}o(e.next())}))}function z(e){return P(new R(new S(e)))}function A(e,t){e instanceof String&&(e+="");var n=0,i=!1,r={next:function(){if(!i&&n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}function T(e){return e||Array.prototype.fill}x.prototype.u=function(e){this.i=e},x.prototype.return=function(e){this.l={return:e},this.h=this.v},a("Promise",(function(e){function t(e){this.i=0,this.j=void 0,this.h=[],this.u=!1;var t=this.l();try{e(t.resolve,t.reject)}catch(n){t.reject(n)}}function n(){this.h=null}function i(e){return e instanceof t?e:new t((function(t){t(e)}))}if(e)return e;n.prototype.i=function(e){if(null==this.h){this.h=[];var t=this;this.j((function(){t.m()}))}this.h.push(e)};var r=o.setTimeout;n.prototype.j=function(e){r(e,0)},n.prototype.m=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var t=0;t<e.length;++t){var n=e[t];e[t]=null;try{n()}catch(i){this.l(i)}}}this.h=null},n.prototype.l=function(e){this.j((function(){throw e}))},t.prototype.l=function(){function e(e){return function(i){n||(n=!0,e.call(t,i))}}var t=this,n=!1;return{resolve:e(this.I),reject:e(this.m)}},t.prototype.I=function(e){if(e===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof t)this.L(e);else{e:switch(typeof e){case"object":var n=null!=e;break e;case"function":n=!0;break e;default:n=!1}n?this.F(e):this.s(e)}},t.prototype.F=function(e){var t=void 0;try{t=e.then}catch(n){return void this.m(n)}"function"==typeof t?this.M(t,e):this.s(e)},t.prototype.m=function(e){this.v(2,e)},t.prototype.s=function(e){this.v(1,e)},t.prototype.v=function(e,t){if(0!=this.i)throw Error("Cannot settle("+e+", "+t+"): Promise already settled in state"+this.i);this.i=e,this.j=t,2===this.i&&this.K(),this.H()},t.prototype.K=function(){var e=this;r((function(){if(e.D()){var t=o.console;"undefined"!==typeof t&&t.error(e.j)}}),1)},t.prototype.D=function(){if(this.u)return!1;var e=o.CustomEvent,t=o.Event,n=o.dispatchEvent;return"undefined"===typeof n||("function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof t?e=new t("unhandledrejection",{cancelable:!0}):(e=o.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e)),e.promise=this,e.reason=this.j,n(e))},t.prototype.H=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)a.i(this.h[e]);this.h=null}};var a=new n;return t.prototype.L=function(e){var t=this.l();e.T(t.resolve,t.reject)},t.prototype.M=function(e,t){var n=this.l();try{e.call(t,n.resolve,n.reject)}catch(i){n.reject(i)}},t.prototype.then=function(e,n){function i(e,t){return"function"==typeof e?function(t){try{r(e(t))}catch(n){o(n)}}:t}var r,o,a=new t((function(e,t){r=e,o=t}));return this.T(i(e,r),i(n,o)),a},t.prototype.catch=function(e){return this.then(void 0,e)},t.prototype.T=function(e,t){function n(){switch(i.i){case 1:e(i.j);break;case 2:t(i.j);break;default:throw Error("Unexpected state: "+i.i)}}var i=this;null==this.h?a.i(n):this.h.push(n),this.u=!0},t.resolve=i,t.reject=function(e){return new t((function(t,n){n(e)}))},t.race=function(e){return new t((function(t,n){for(var r=u(e),o=r.next();!o.done;o=r.next())i(o.value).T(t,n)}))},t.all=function(e){var n=u(e),r=n.next();return r.done?i([]):new t((function(e,t){function o(t){return function(n){a[t]=n,s--,0==s&&e(a)}}var a=[],s=0;do{a.push(void 0),s++,i(r.value).T(o(a.length-1),t),r=n.next()}while(!r.done)}))},t})),a("Array.prototype.keys",(function(e){return e||function(){return A(this,(function(e){return e}))}})),a("Array.prototype.fill",(function(e){return e||function(e,t,n){var i=this.length||0;for(0>t&&(t=Math.max(0,i+t)),(null==n||n>i)&&(n=i),n=Number(n),0>n&&(n=Math.max(0,i+n)),t=Number(t||0);t<n;t++)this[t]=e;return this}})),a("Int8Array.prototype.fill",T),a("Uint8Array.prototype.fill",T),a("Uint8ClampedArray.prototype.fill",T),a("Int16Array.prototype.fill",T),a("Uint16Array.prototype.fill",T),a("Int32Array.prototype.fill",T),a("Uint32Array.prototype.fill",T),a("Float32Array.prototype.fill",T),a("Float64Array.prototype.fill",T),a("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}})),a("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(t=t||0,0>t&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}})),a("String.prototype.includes",(function(e){return e||function(e,t){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(e,t||0)}}));var L=this||self;function E(e,t){e=e.split(".");var n,i=L;e[0]in i||"undefined"==typeof i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)e.length||void 0===t?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}function $(e){var t;return(t=L.navigator)&&(t=t.userAgent)||(t=""),-1!=t.indexOf(e)}var F=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r="string"===typeof e?e.split(""):e,o=0;o<n;o++)o in r&&(i[o]=t.call(void 0,r[o],o,e));return i},N={},D=null;function _(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):-1!="=.".indexOf(e[t-1])&&(n=-1!="=.".indexOf(e[t-2])?n-2:n-1);var i=new Uint8Array(n),r=0;return M(e,(function(e){i[r++]=e})),r!==n?i.subarray(0,r):i}function M(e,t){function n(t){for(;i<e.length;){var n=e.charAt(i++),r=D[n];if(null!=r)return r;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return t}O();for(var i=0;;){var r=n(-1),o=n(0),a=n(64),s=n(64);if(64===s&&-1===r)break;t(r<<2|o>>4),64!=a&&(t(o<<4&240|a>>2),64!=s&&t(a<<6&192|s))}}function O(){if(!D){D={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=e.concat(t[n].split(""));N[n]=i;for(var r=0;r<i.length;r++){var o=i[r];void 0===D[o]&&(D[o]=r)}}}}var B="undefined"!==typeof Uint8Array,U=!($("Trident")||$("MSIE"))&&"function"===typeof L.btoa;function W(e){if(!U){var t;void 0===t&&(t=0),O(),t=N[t];for(var n=Array(Math.floor(e.length/3)),i=t[64]||"",r=0,o=0;r<e.length-2;r+=3){var a=e[r],s=e[r+1],u=e[r+2],l=t[a>>2];a=t[(3&a)<<4|s>>4],s=t[(15&s)<<2|u>>6],u=t[63&u],n[o++]=l+a+s+u}switch(l=0,u=i,e.length-r){case 2:l=e[r+1],u=t[(15&l)<<2]||i;case 1:e=e[r],n[o]=t[e>>2]+t[(3&e)<<4|l>>4]+u+i}return n.join("")}for(t="";10240<e.length;)t+=String.fromCharCode.apply(null,e.subarray(0,10240)),e=e.subarray(10240);return t+=String.fromCharCode.apply(null,e),btoa(t)}var V,H=RegExp("[-_.]","g");function G(e){switch(e){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function j(e){if(!U)return _(e);H.test(e)&&(e=e.replace(H,G)),e=atob(e);for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function K(){return V||(V=new Uint8Array(0))}var X={},q="function"===typeof Uint8Array.prototype.slice,Y=0,Z=0;function Q(e){var t=0>e;e=Math.abs(e);var n=e>>>0;e=Math.floor((e-n)/4294967296),t&&(n=u(te(n,e)),t=n.next().value,e=n.next().value,n=t),Y=n>>>0,Z=e>>>0}var J,ee="function"===typeof BigInt;function te(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function ne(e,t){this.i=e>>>0,this.h=t>>>0}function ie(e){if(!e)return J||(J=new ne(0,0));if(!/^-?\d+$/.test(e))return null;if(16>e.length)Q(Number(e));else if(ee)e=BigInt(e),Y=Number(e&BigInt(4294967295))>>>0,Z=Number(e>>BigInt(32)&BigInt(4294967295));else{var t=+("-"===e[0]);Z=Y=0;for(var n=e.length,i=t,r=(n-t)%6+t;r<=n;i=r,r+=6)i=Number(e.slice(i,r)),Z*=1e6,Y=1e6*Y+i,4294967296<=Y&&(Z+=Y/4294967296|0,Y%=4294967296);t&&(t=u(te(Y,Z)),e=t.next().value,t=t.next().value,Y=e,Z=t)}return new ne(Y,Z)}function re(e,t){return Error("Invalid wire type: "+e+" (at position "+t+")")}function oe(){return Error("Failed to read varint, encoding is invalid.")}function ae(e,t){return Error("Tried to read past the end of the data "+t+" > "+e)}function se(){throw Error("Invalid UTF8")}function ue(e,t){return t=String.fromCharCode.apply(null,t),null==e?t:e+t}var le,he,de,ce=void 0,pe="undefined"!==typeof TextDecoder,fe="undefined"!==typeof TextEncoder;function me(e){if(e!==X)throw Error("illegal external caller")}function ge(e,t){if(me(t),this.V=e,null!=e&&0===e.length)throw Error("ByteString should be constructed with non-empty values")}function ye(){return de||(de=new ge(null,X))}function xe(e){me(X);var t=e.V;return t=null==t||B&&null!=t&&t instanceof Uint8Array?t:"string"===typeof t?j(t):null,null==t?t:e.V=t}function be(e){if("string"===typeof e)return{buffer:j(e),C:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),C:!1};if(e.constructor===Uint8Array)return{buffer:e,C:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),C:!1};if(e.constructor===ge)return{buffer:xe(e)||K(),C:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function we(e,t){this.i=null,this.m=!1,this.h=this.j=this.l=0,ve(this,e,t)}function ve(e,t,n){n=void 0===n?{}:n,e.S=void 0!==n.S&&n.S,t&&(t=be(t),e.i=t.buffer,e.m=t.C,e.l=0,e.j=e.i.length,e.h=e.l)}function Se(e,t){if(e.h=t,t>e.j)throw ae(e.j,t)}function ke(e){var t=e.i,n=e.h,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw oe();return Se(e,n),r}function Ce(e,t){if(0>t)throw Error("Tried to read a negative byte length: "+t);var n=e.h,i=n+t;if(i>e.j)throw ae(t,e.j-n);return e.h=i,n}we.prototype.reset=function(){this.h=this.l};var Ie=[];function Re(){this.h=[]}function Pe(e,t,n){for(;0<n||127<t;)e.h.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.h.push(t)}function ze(e,t){for(;127<t;)e.h.push(127&t|128),t>>>=7;e.h.push(t)}function Ae(e,t){if(Ie.length){var n=Ie.pop();ve(n,e,t),e=n}else e=new we(e,t);this.h=e,this.j=this.h.h,this.i=this.l=-1,this.setOptions(t)}function Te(e){var t=e.h;if(t.h==t.j)return!1;e.j=e.h.h;var n=ke(e.h)>>>0;if(t=n>>>3,n&=7,!(0<=n&&5>=n))throw re(n,e.j);if(1>t)throw Error("Invalid field number: "+t+" (at position "+e.j+")");return e.l=t,e.i=n,!0}function Le(e){switch(e.i){case 0:if(0!=e.i)Le(e);else e:{e=e.h;for(var t=e.h,n=t+10,i=e.i;t<n;)if(0===(128&i[t++])){Se(e,t);break e}throw oe()}break;case 1:e=e.h,Se(e,e.h+8);break;case 2:2!=e.i?Le(e):(t=ke(e.h)>>>0,e=e.h,Se(e,e.h+t));break;case 5:e=e.h,Se(e,e.h+4);break;case 3:t=e.l;do{if(!Te(e))throw Error("Unmatched start-group tag: stream EOF");if(4==e.i){if(e.l!=t)throw Error("Unmatched end-group tag");break}Le(e)}while(1);break;default:throw re(e.i,e.j)}}Re.prototype.length=function(){return this.h.length},Re.prototype.end=function(){var e=this.h;return this.h=[],e},Ae.prototype.setOptions=function(e){e=void 0===e?{}:e,this.ca=void 0!==e.ca&&e.ca},Ae.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};var Ee=[];function $e(){this.j=[],this.i=0,this.h=new Re}function Fe(e,t){0!==t.length&&(e.j.push(t),e.i+=t.length)}function Ne(e,t){if(t=t.R){Fe(e,e.h.end());for(var n=0;n<t.length;n++)Fe(e,xe(t[n])||K())}}var De="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function _e(e,t){return De?e[De]|=t:void 0!==e.A?e.A|=t:(Object.defineProperties(e,{A:{value:t,configurable:!0,writable:!0,enumerable:!1}}),t)}function Me(e,t){De?e[De]&&(e[De]&=~t):void 0!==e.A&&(e.A&=~t)}function Oe(e){var t;return t=De?e[De]:e.A,null==t?0:t}function Be(e,t){De?e[De]=t:void 0!==e.A?e.A=t:Object.defineProperties(e,{A:{value:t,configurable:!0,writable:!0,enumerable:!1}})}function Ue(e){return _e(e,1),e}function We(e,t){Be(t,-51&e)}function Ve(e,t){Be(t,-41&e|18)}var He={};function Ge(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)&&e.constructor===Object}var je,Ke,Xe=[];function qe(e){if(2&Oe(e.o))throw Error("Cannot mutate an immutable Message")}function Ye(e){var t=e.length;(t=t?e[t-1]:void 0)&&Ge(t)?t.g=1:(t={},e.push((t.g=1,t)))}function Ze(e){var t=e.i+e.G;return e.B||(e.B=e.o[t]={})}function Qe(e,t){return-1===t?null:t>=e.i?e.B?e.B[t]:void 0:e.o[t+e.G]}function Je(e,t,n,i){qe(e),et(e,t,n,i)}function et(e,t,n,i){e.j&&(e.j=void 0),t>=e.i||i?Ze(e)[t]=n:(e.o[t+e.G]=n,(e=e.B)&&t in e&&delete e[t])}function tt(e,t,n,i){var r=Qe(e,t);Array.isArray(r)||(r=je);var o=Oe(r);if(1&o||Ue(r),i)2&o||_e(r,2),1&n||Object.freeze(r);else{i=!(2&n);var a=2&o;1&n||!a?i&&16&o&&!a&&Me(r,16):(r=Ue(Array.prototype.slice.call(r)),et(e,t,r))}return r}function nt(e,t){var n=Qe(e,t),i=null==n?n:"number"===typeof n||"NaN"===n||"Infinity"===n||"-Infinity"===n?Number(n):void 0;return null!=i&&i!==n&&et(e,t,i),i}function it(e,t,n,i,r){e.h||(e.h={});var o=e.h[n],a=tt(e,n,3,r);if(!o){var s=a;o=[];var u=!!(16&Oe(e.o));a=!!(2&Oe(s));var l=s;!r&&a&&(s=Array.prototype.slice.call(s));for(var h=a,d=0;d<s.length;d++){var c=s[d],p=t,f=!1;if(f=void 0!==f&&f,c=Array.isArray(c)?new p(c):f?new p:void 0,void 0!==c){p=c.o;var m=f=Oe(p);a&&(m|=2),u&&(m|=16),m!=f&&Be(p,m),p=m,h=h||!!(2&p),o.push(c)}}return e.h[n]=o,u=Oe(s),t=33|u,t=h?-9&t:8|t,u!=t&&(h=s,Object.isFrozen(h)&&(h=Array.prototype.slice.call(h)),Be(h,t),s=h),l!==s&&et(e,n,s),(r||i&&a)&&_e(o,2),i&&Object.freeze(o),o}return r||(r=Object.isFrozen(o),i&&!r?Object.freeze(o):!i&&r&&(o=Array.prototype.slice.call(o),e.h[n]=o)),o}function rt(e,t,n){var i=!!(2&Oe(e.o));if(t=it(e,t,n,i,i),e=tt(e,n,3,i),!(i||8&Oe(e))){for(i=0;i<t.length;i++){if(n=t[i],2&Oe(n.o)){var r=yt(n,!1);r.j=n}else r=n;n!==r&&(t[i]=r,e[i]=r.o)}_e(e,8)}return t}function ot(e,t,n){if(null!=n&&"number"!==typeof n)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof n+": "+n);Je(e,t,n)}function at(e,t,n,i,r){qe(e);var o=it(e,n,t,!1,!1);return n=null!=i?i:new n,e=tt(e,t,2,!1),void 0!=r?(o.splice(r,0,n),e.splice(r,0,n.o)):(o.push(n),e.push(n.o)),n.C()&&Me(e,8),n}function st(e,t){return null==e?t:e}function ut(e,t,n){return n=void 0===n?0:n,st(nt(e,t),n)}function lt(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"object":if(e)if(Array.isArray(e)){if(0!==(128&Oe(e)))return e=Array.prototype.slice.call(e),Ye(e),e}else{if(B&&null!=e&&e instanceof Uint8Array)return W(e);if(e instanceof ge){var t=e.V;return null==t?"":"string"===typeof t?t:e.V=W(t)}}}return e}function ht(e,t,n,i){if(null!=e){if(Array.isArray(e))e=dt(e,t,n,void 0!==i);else if(Ge(e)){var r,o={};for(r in e)o[r]=ht(e[r],t,n,i);e=o}else e=t(e,i);return e}}function dt(e,t,n,i){var r=Oe(e);i=i?!!(16&r):void 0,e=Array.prototype.slice.call(e);for(var o=0;o<e.length;o++)e[o]=ht(e[o],t,n,i);return n(r,e),e}function ct(e){return e.ja===He?e.toJSON():lt(e)}function pt(e,t){128&e&&Ye(t)}function ft(e,t,n){if(n=void 0===n?Ve:n,null!=e){if(B&&e instanceof Uint8Array)return e.length?new ge(new Uint8Array(e),X):ye();if(Array.isArray(e)){var i=Oe(e);return 2&i?e:!t||32&i||!(16&i||0===i)?(e=dt(e,ft,4&i?Ve:n,!0),t=Oe(e),4&t&&2&t&&Object.freeze(e),e):(Be(e,2|i),e)}return e.ja===He?gt(e):e}}function mt(e,t,n,i,r,o,a){if(e=e.h&&e.h[n]){if(i=Oe(e),2&i?i=e:(o=F(e,gt),Ve(i,o),Object.freeze(o),i=o),qe(t),a=null==i?je:Ue([]),null!=i){for(o=!!i.length,e=0;e<i.length;e++){var s=i[e];o=o&&!(2&Oe(s.o)),a[e]=s.o}o=1|(o?8:0),e=Oe(a),(e&o)!==o&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Be(a,e|o)),t.h||(t.h={}),t.h[n]=i}else t.h&&(t.h[n]=void 0);et(t,n,a,r)}else Je(t,n,ft(i,o,a),r)}function gt(e){return 2&Oe(e.o)||(e=yt(e,!0),_e(e.o,2)),e}function yt(e,t){var n=e.o,i=[];_e(i,16);var r=e.constructor.h;if(r&&i.push(r),r=e.B,r){i.length=n.length,i.fill(void 0,i.length,n.length);var o={};i[i.length-1]=o}0!==(128&Oe(n))&&Ye(i),t=t||e.C()?Ve:We,o=e.constructor,Ke=i,i=new o(i),Ke=void 0,e.R&&(i.R=e.R.slice()),o=!!(16&Oe(n));for(var a=r?n.length-1:n.length,s=0;s<a;s++)mt(e,i,s-e.G,n[s],!1,o,t);if(r)for(var u in r)mt(e,i,+u,r[u],!0,o,t);return i}function xt(e,t,n){null==e&&(e=Ke),Ke=void 0;var i,r=this.constructor.i||0,o=0<r,a=this.constructor.h,s=!1;if(null==e){e=a?[a]:[];var u=48,l=!0;o&&(r=0,u|=128),Be(e,u)}else{if(!Array.isArray(e))throw Error();if(a&&a!==e[0])throw Error();var h=u=_e(e,0);if((l=0!==(16&h))&&((s=0!==(32&h))||(h|=32)),o){if(128&h)r=0;else if(0<e.length){var d=e[e.length-1];if(Ge(d)&&"g"in d){r=0,h|=128,delete d.g;var c,p=!0;for(c in d){p=!1;break}p&&e.pop()}}}else if(128&h)throw Error();u!==h&&Be(e,h)}if(this.G=(a?0:-1)-r,this.h=void 0,this.o=e,a=this.o.length,r=a-1,a&&(a=this.o[r],Ge(a))?(this.B=a,this.i=r-this.G):void 0!==t&&-1<t?(this.i=Math.max(t,r+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE,!o&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(n)for(t=l&&!s&&!0,o=this.i,l=0;l<n.length;l++)s=n[l],s<o?(s+=this.G,(r=e[s])?bt(r,t):e[s]=je):(i||(i=Ze(this)),(r=i[s])?bt(r,t):i[s]=je)}function bt(e,t){if(Array.isArray(e)){var n=Oe(e),i=1;!t||2&n||(i|=16),(n&i)!==i&&Be(e,n|i)}}function wt(e,t,n){if(n){var i,r={};for(i in n){var o=n[i],a=o.ra;a||(r.J=o.xa||o.oa.W,o.ia?(r.aa=At(o.ia),a=function(e){return function(t,n,i){return e.J(t,n,i,e.aa)}}(r)):o.ka?(r.Z=Tt(o.da.P,o.ka),a=function(e){return function(t,n,i){return e.J(t,n,i,e.Z)}}(r)):a=r.J,o.ra=a),a(t,e,o.da),r={J:r.J,aa:r.aa,Z:r.Z}}}Ne(t,e)}Be(Xe,23),je=Object.freeze(Xe),xt.prototype.toJSON=function(){return dt(this.o,ct,pt)},xt.prototype.C=function(){return!!(2&Oe(this.o))},xt.prototype.ja=He,xt.prototype.toString=function(){return this.o.toString()};var vt=Symbol();function St(e,t,n){return e[vt]||(e[vt]=function(e,i){return t(e,i,n)})}function kt(e){var t=e[vt];if(!t){var n=Wt(e);t=function(e,t){return Vt(e,t,n)},e[vt]=t}return t}function Ct(e){var t=e.ia;return t?kt(t):(t=e.wa)?St(e.da.P,t,e.ka):void 0}function It(e){var t=Ct(e),n=e.da,i=e.oa.U;return t?function(e,r){return i(e,r,n,t)}:function(e,t){return i(e,t,n)}}function Rt(e,t){var n=e[t];return"function"==typeof n&&0===n.length&&(n=n(),e[t]=n),Array.isArray(n)&&(_t in n||Lt in n||0<n.length&&"function"==typeof n[0])?n:void 0}function Pt(e,t,n,i,r,o){t.P=e[0];var a=1;if(e.length>a&&"number"!==typeof e[a]){var s=e[a++];n(t,s)}for(;a<e.length;){n=e[a++];for(var u=a+1;u<e.length&&"number"!==typeof e[u];)u++;switch(s=e[a++],u-=a,u){case 0:i(t,n,s);break;case 1:(u=Rt(e,a))?(a++,r(t,n,s,u)):i(t,n,s,e[a++]);break;case 2:u=a++,u=Rt(e,u),r(t,n,s,u,e[a++]);break;case 3:o(t,n,s,e[a++],e[a++],e[a++]);break;case 4:o(t,n,s,e[a++],e[a++],e[a++],e[a++]);break;default:throw Error("unexpected number of binary field arguments: "+u)}}return t}var zt=Symbol();function At(e){var t=e[zt];if(!t){var n=Dt(e);t=function(e,t){return Ht(e,t,n)},e[zt]=t}return t}function Tt(e,t){var n=e[zt];return n||(n=function(e,n){return wt(e,n,t)},e[zt]=n),n}var Lt=Symbol();function Et(e,t){e.push(t)}function $t(e,t,n){e.push(t,n.W)}function Ft(e,t,n,i){var r=At(i),o=Dt(i).P,a=n.W;e.push(t,(function(e,t,n){return a(e,t,n,o,r)}))}function Nt(e,t,n,i,r,o){var a=Tt(i,o),s=n.W;e.push(t,(function(e,t,n){return s(e,t,n,i,a)}))}function Dt(e){var t=e[Lt];return t||(t=Pt(e,e[Lt]=[],Et,$t,Ft,Nt),_t in e&&Lt in e&&(e.length=0),t)}var _t=Symbol();function Mt(e,t){e[0]=t}function Ot(e,t,n,i){var r=n.U;e[t]=i?function(e,t,n){return r(e,t,n,i)}:r}function Bt(e,t,n,i,r){var o=n.U,a=kt(i),s=Wt(i).P;e[t]=function(e,t,n){return o(e,t,n,s,a,r)}}function Ut(e,t,n,i,r,o,a){var s=n.U,u=St(i,r,o);e[t]=function(e,t,n){return s(e,t,n,i,u,a)}}function Wt(e){var t=e[_t];return t||(t=Pt(e,e[_t]={},Mt,Ot,Bt,Ut),_t in e&&Lt in e&&(e.length=0),t)}function Vt(e,t,n){for(;Te(t)&&4!=t.i;){var i=t.l,r=n[i];if(!r){var o=n[0];o&&(o=o[i])&&(r=n[i]=It(o))}if(!r||!r(t,e,i)){r=t,i=e,o=r.j,Le(r);var a=r;if(!a.ca){if(r=a.h.h-o,a.h.h=o,a=a.h,0==r)r=ye();else{if(o=Ce(a,r),a.S&&a.m)r=a.i.subarray(o,o+r);else{a=a.i;var s=o;r=o+r,r=s===r?K():q?a.slice(s,r):new Uint8Array(a.subarray(s,r))}r=0==r.length?ye():new ge(r,X)}(o=i.R)?o.push(r):i.R=[r]}}}return e}function Ht(e,t,n){for(var i=n.length,r=1==i%2,o=r?1:0;o<i;o+=2)(0,n[o+1])(t,e,n[o]);wt(e,t,r?n[0]:void 0)}function Gt(e,t){return{U:e,W:t}}var jt=Gt((function(e,t,n){if(5!==e.i)return!1;e=e.h;var i=e.i,r=e.h,o=i[r],a=i[r+1],s=i[r+2];return i=i[r+3],Se(e,e.h+4),a=(o|a<<8|s<<16|i<<24)>>>0,e=2*(a>>31)+1,o=a>>>23&255,a&=8388607,Je(t,n,255==o?a?NaN:1/0*e:0==o?e*Math.pow(2,-149)*a:e*Math.pow(2,o-150)*(a+Math.pow(2,23))),!0}),(function(e,t,n){if(t=nt(t,n),null!=t){ze(e.h,8*n+5),e=e.h;var i=+t;0===i?0<1/i?Y=Z=0:(Z=0,Y=2147483648):isNaN(i)?(Z=0,Y=2147483647):(i=(n=0>i?-2147483648:0)?-i:i,34028234663852886e22<i?(Z=0,Y=(2139095040|n)>>>0):11754943508222875e-54>i?(i=Math.round(i/Math.pow(2,-149)),Z=0,Y=(n|i)>>>0):(t=Math.floor(Math.log(i)/Math.LN2),i*=Math.pow(2,-t),i=Math.round(8388608*i),16777216<=i&&++t,Z=0,Y=(n|t+127<<23|8388607&i)>>>0)),n=Y,e.h.push(n>>>0&255),e.h.push(n>>>8&255),e.h.push(n>>>16&255),e.h.push(n>>>24&255)}})),Kt=Gt((function(e,t,n){if(0!==e.i)return!1;var i=e.h,r=0,o=e=0,a=i.i,s=i.h;do{var u=a[s++];r|=(127&u)<<o,o+=7}while(32>o&&128&u);for(32<o&&(e|=(127&u)>>4),o=3;32>o&&128&u;o+=7)u=a[s++],e|=(127&u)<<o;if(Se(i,s),!(128>u))throw oe();return i=r>>>0,u=e>>>0,(e=2147483648&u)&&(i=1+~i>>>0,u=~u>>>0,0==i&&(u=u+1>>>0)),i=4294967296*u+(i>>>0),Je(t,n,e?-i:i),!0}),(function(e,t,n){t=Qe(t,n),null!=t&&("string"===typeof t&&ie(t),null!=t&&(ze(e.h,8*n),"number"===typeof t?(e=e.h,Q(t),Pe(e,Y,Z)):(n=ie(t),Pe(e.h,n.i,n.h))))})),Xt=Gt((function(e,t,n){return 0===e.i&&(Je(t,n,ke(e.h)),!0)}),(function(e,t,n){if(t=Qe(t,n),null!=t&&null!=t)if(ze(e.h,8*n),e=e.h,n=t,0<=n)ze(e,n);else{for(t=0;9>t;t++)e.h.push(127&n|128),n>>=7;e.h.push(1)}})),qt=Gt((function(e,t,n){if(2!==e.i)return!1;var i=ke(e.h)>>>0;e=e.h;var r=Ce(e,i);if(e=e.i,pe){var o,a=e;(o=le)||(o=le=new TextDecoder("utf-8",{fatal:!0})),e=r+i,a=0===r&&e===a.length?a:a.subarray(r,e);try{var s=o.decode(a)}catch(d){if(void 0===ce){try{o.decode(new Uint8Array([128]))}catch(c){}try{o.decode(new Uint8Array([97])),ce=!0}catch(c){ce=!1}}throw!ce&&(le=void 0),d}}else{s=r,i=s+i,r=[];for(var u,l,h=null;s<i;)u=e[s++],128>u?r.push(u):224>u?s>=i?se():(l=e[s++],194>u||128!==(192&l)?(s--,se()):r.push((31&u)<<6|63&l)):240>u?s>=i-1?se():(l=e[s++],128!==(192&l)||224===u&&160>l||237===u&&160<=l||128!==(192&(a=e[s++]))?(s--,se()):r.push((15&u)<<12|(63&l)<<6|63&a)):244>=u?s>=i-2?se():(l=e[s++],128!==(192&l)||0!==l-144+(u<<28)>>30||128!==(192&(a=e[s++]))||128!==(192&(o=e[s++]))?(s--,se()):(u=(7&u)<<18|(63&l)<<12|(63&a)<<6|63&o,u-=65536,r.push(55296+(u>>10&1023),56320+(1023&u)))):se(),8192<=r.length&&(h=ue(h,r),r.length=0);s=ue(h,r)}return Je(t,n,s),!0}),(function(e,t,n){if(t=Qe(t,n),null!=t){var i=!1;if(i=void 0!==i&&i,fe){if(i&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(t))throw Error("Found an unpaired surrogate");t=(he||(he=new TextEncoder)).encode(t)}else{for(var r=0,o=new Uint8Array(3*t.length),a=0;a<t.length;a++){var s=t.charCodeAt(a);if(128>s)o[r++]=s;else{if(2048>s)o[r++]=s>>6|192;else{if(55296<=s&&57343>=s){if(56319>=s&&a<t.length){var u=t.charCodeAt(++a);if(56320<=u&&57343>=u){s=1024*(s-55296)+u-56320+65536,o[r++]=s>>18|240,o[r++]=s>>12&63|128,o[r++]=s>>6&63|128,o[r++]=63&s|128;continue}a--}if(i)throw Error("Found an unpaired surrogate");s=65533}o[r++]=s>>12|224,o[r++]=s>>6&63|128}o[r++]=63&s|128}}t=r===o.length?o:o.subarray(0,r)}ze(e.h,8*n+2),ze(e.h,t.length),Fe(e,e.h.end()),Fe(e,t)}})),Yt=Gt((function(e,t,n,i,r){if(2!==e.i)return!1;t=at(t,n,i),n=e.h.j,i=ke(e.h)>>>0;var o=e.h.h+i,a=o-n;if(0>=a&&(e.h.j=o,r(t,e,void 0,void 0,void 0),a=o-e.h.h),a)throw Error("Message parsing ended unexpectedly. Expected to read "+i+" bytes, instead read "+(i-a)+" bytes, either the data ended unexpectedly or the message misreported its own length");return e.h.h=o,e.h.j=n,!0}),(function(e,t,n,i,r){if(t=rt(t,i,n),null!=t)for(i=0;i<t.length;i++){var o=e;ze(o.h,8*n+2);var a=o.h.end();Fe(o,a),a.push(o.i),o=a,r(t[i],e),a=e;var s=o.pop();for(s=a.i+a.h.length()-s;127<s;)o.push(127&s|128),s>>>=7,a.i++;o.push(s),a.i++}}));function Zt(e){return function(t,n){e:{if(Ee.length){var i=Ee.pop();i.setOptions(n),ve(i.h,t,n),t=i}else t=new Ae(t,n);try{var r=Wt(e),o=Vt(new r.P,t,r);break e}finally{r=t.h,r.i=null,r.m=!1,r.l=0,r.j=0,r.h=0,r.S=!1,t.l=-1,t.i=-1,100>Ee.length&&Ee.push(t)}o=void 0}return o}}function Qt(e){return function(){var t=new $e;Ht(this,t,Dt(e)),Fe(t,t.h.end());for(var n=new Uint8Array(t.i),i=t.j,r=i.length,o=0,a=0;a<r;a++){var s=i[a];n.set(s,o),o+=s.length}return t.j=[n],n}}function Jt(e){xt.call(this,e)}y(Jt,xt);var en=[Jt,1,Xt,2,jt,3,qt,4,qt];function tn(e){xt.call(this,e,-1,nn)}Jt.prototype.l=Qt(en),y(tn,xt),tn.prototype.addClassification=function(e,t){return at(this,1,Jt,e,t),this};var nn=[1],rn=Zt([tn,1,Yt,en]);function on(e){xt.call(this,e)}y(on,xt);var an=[on,1,jt,2,jt,3,jt,4,jt,5,jt];function sn(e){xt.call(this,e,-1,un)}on.prototype.l=Qt(an),y(sn,xt);var un=[1],ln=Zt([sn,1,Yt,an]);function hn(e){xt.call(this,e)}y(hn,xt);var dn=[hn,1,jt,2,jt,3,jt,4,jt,5,jt,6,Kt],cn=Zt(dn);function pn(e,t,n){if(n=e.createShader(0===n?e.VERTEX_SHADER:e.FRAGMENT_SHADER),e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+e.getShaderInfoLog(n));return n}function fn(e){return rt(e,Jt,1).map((function(e){var t=Qe(e,1);return{index:null==t?0:t,qa:ut(e,2),label:null!=Qe(e,3)?st(Qe(e,3),""):void 0,displayName:null!=Qe(e,4)?st(Qe(e,4),""):void 0}}))}function mn(e){return{x:ut(e,1),y:ut(e,2),z:ut(e,3),visibility:null!=nt(e,4)?ut(e,4):void 0}}function gn(e){return rt(ln(e),on,1).map(mn)}function yn(e,t){this.i=e,this.h=t,this.m=0}function xn(e,t,n){return bn(e,t),"function"===typeof e.h.canvas.transferToImageBitmap?Promise.resolve(e.h.canvas.transferToImageBitmap()):n?Promise.resolve(e.h.canvas):"function"===typeof createImageBitmap?createImageBitmap(e.h.canvas):(void 0===e.j&&(e.j=document.createElement("canvas")),new Promise((function(t){e.j.height=e.h.canvas.height,e.j.width=e.h.canvas.width,e.j.getContext("2d",{}).drawImage(e.h.canvas,0,0,e.h.canvas.width,e.h.canvas.height),t(e.j)})))}function bn(e,t){var n=e.h;if(void 0===e.s){var i=pn(n,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),r=pn(n,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),o=n.createProgram();if(n.attachShader(o,i),n.attachShader(o,r),n.linkProgram(o),!n.getProgramParameter(o,n.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+n.getProgramInfoLog(o));i=e.s=o,n.useProgram(i),r=n.getUniformLocation(i,"sampler0"),e.l={O:n.getAttribLocation(i,"aVertex"),N:n.getAttribLocation(i,"aTex"),ya:r},e.v=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.v),n.enableVertexAttribArray(e.l.O),n.vertexAttribPointer(e.l.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),e.u=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.u),n.enableVertexAttribArray(e.l.N),n.vertexAttribPointer(e.l.N,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.uniform1i(r,0)}i=e.l,n.useProgram(e.s),n.canvas.width=t.width,n.canvas.height=t.height,n.viewport(0,0,t.width,t.height),n.activeTexture(n.TEXTURE0),e.i.bindTexture2d(t.glName),n.enableVertexAttribArray(i.O),n.bindBuffer(n.ARRAY_BUFFER,e.v),n.vertexAttribPointer(i.O,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i.N),n.bindBuffer(n.ARRAY_BUFFER,e.u),n.vertexAttribPointer(i.N,2,n.FLOAT,!1,0,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER?n.DRAW_FRAMEBUFFER:n.FRAMEBUFFER,null),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.colorMask(!0,!0,!0,!0),n.drawArrays(n.TRIANGLE_FAN,0,4),n.disableVertexAttribArray(i.O),n.disableVertexAttribArray(i.N),n.bindBuffer(n.ARRAY_BUFFER,null),e.i.bindTexture2d(0)}function wn(e){this.h=e}hn.prototype.l=Qt(dn);var vn=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Sn(e,t){return t+e}function kn(e,t){window[e]=t}function Cn(e){var t=document.createElement("script");return t.setAttribute("src",e),t.setAttribute("crossorigin","anonymous"),new Promise((function(e){t.addEventListener("load",(function(){e()}),!1),t.addEventListener("error",(function(){e()}),!1),document.body.appendChild(t)}))}function In(){return z((function(e){switch(e.h){case 1:return e.s=2,v(e,WebAssembly.instantiate(vn),4);case 4:e.h=3,e.s=0;break;case 2:return e.s=0,e.l=null,e.return(!1);case 3:return e.return(!0)}}))}function Rn(e){if(this.h=e,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=e&&e.locateFile||Sn,"object"===typeof window)var t=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if("undefined"===typeof location)throw Error("solutions can only be loaded on a web page or in a web worker");t=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.ha=t,e.options){t=u(Object.keys(e.options));for(var n=t.next();!n.done;n=t.next()){n=n.value;var i=e.options[n].default;void 0!==i&&(this.l[n]="function"===typeof i?i():i)}}}function Pn(e){var t,n,i,r,o,a,s,u,h,d,c;return z((function(p){switch(p.h){case 1:return e.ga?(t=void 0===e.h.files?[]:"function"===typeof e.h.files?e.h.files(e.l):e.h.files,v(p,In(),2)):p.return();case 2:if(n=p.i,"object"===typeof window)return kn("createMediapipeSolutionsWasm",{locateFile:e.locateFile}),kn("createMediapipeSolutionsPackedAssets",{locateFile:e.locateFile}),a=t.filter((function(e){return void 0!==e.data})),s=t.filter((function(e){return void 0===e.data})),u=Promise.all(a.map((function(t){var n=Tn(e,t.url);if(void 0!==t.path){var i=t.path;n=n.then((function(t){return e.overrideFile(i,t),Promise.resolve(t)}))}return n}))),h=Promise.all(s.map((function(t){return void 0===t.simd||t.simd&&n||!t.simd&&!n?Cn(e.locateFile(t.url,e.ha)):Promise.resolve()}))).then((function(){var t,n,i;return z((function(r){if(1==r.h)return t=window.createMediapipeSolutionsWasm,n=window.createMediapipeSolutionsPackedAssets,i=e,v(r,t(n),2);i.i=r.i,r.h=0}))})),d=function(){return z((function(t){return e.h.graph&&e.h.graph.url?t=v(t,Tn(e,e.h.graph.url),0):(t.h=0,t=void 0),t}))}(),v(p,Promise.all([h,u,d]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");return i=t.filter((function(e){return void 0===e.simd||e.simd&&n||!e.simd&&!n})).map((function(t){return e.locateFile(t.url,e.ha)})),importScripts.apply(null,l(i)),r=e,v(p,createMediapipeSolutionsWasm(Module),6);case 6:r.i=p.i,e.m=new OffscreenCanvas(1,1),e.i.canvas=e.m,o=e.i.GL.createContext(e.m,{antialias:!1,alpha:!1,va:"undefined"!==typeof WebGL2RenderingContext?2:1}),e.i.GL.makeContextCurrent(o),p.h=4;break;case 7:if(e.m=document.createElement("canvas"),c=e.m.getContext("webgl2",{}),!c&&(c=e.m.getContext("webgl",{}),!c))return alert("Failed to create WebGL canvas context when passing video frame."),p.return();e.K=c,e.i.canvas=e.m,e.i.createContext(e.m,!0,!0,{});case 4:e.j=new e.i.SolutionWasm,e.ga=!1,p.h=0}}))}function zn(e){var t,n,i,r,o,a,s,l;return z((function(h){if(1==h.h)return e.h.graph&&e.h.graph.url&&e.fa===e.h.graph.url?h.return():(e.u=!0,e.h.graph&&e.h.graph.url?(e.fa=e.h.graph.url,v(h,Tn(e,e.h.graph.url),3)):void(h.h=2));for(2!=h.h&&(t=h.i,e.j.loadGraph(t)),n=u(Object.keys(e.D)),i=n.next();!i.done;i=n.next())r=i.value,e.j.overrideFile(r,e.D[r]);if(e.D={},e.h.listeners)for(o=u(e.h.listeners),a=o.next();!a.done;a=o.next())s=a.value,$n(e,s);l=e.l,e.l={},e.setOptions(l),h.h=0}))}function An(e){var t,n,i,r,o,a,s;return z((function(l){switch(l.h){case 1:if(!e.u)return l.return();if(!e.F){l.h=2;break}t=u(e.F),n=t.next();case 3:if(n.done){l.h=5;break}return i=n.value,v(l,i(),4);case 4:n=t.next(),l.h=3;break;case 5:e.F=void 0;case 2:if(e.H){for(r=new e.i.GraphOptionChangeRequestList,o=u(e.H),a=o.next();!a.done;a=o.next())s=a.value,r.push_back(s);e.j.changeOptions(r),r.delete(),e.H=void 0}e.u=!1,l.h=0}}))}function Tn(e,t){var n,i;return z((function(r){return t in e.L?r.return(e.L[t]):(n=e.locateFile(t,""),i=fetch(n).then((function(e){return e.arrayBuffer()})),e.L[t]=i,r.return(i))}))}function Ln(e,t,n){var i,r,o,a,s,l,h,d,c,p,f,m,g,y;return z((function(x){switch(x.h){case 1:if(!n)return x.return(t);for(i={},r=0,o=u(Object.keys(n)),a=o.next();!a.done;a=o.next())s=a.value,l=n[s],"string"!==typeof l&&"texture"===l.type&&void 0!==t[l.stream]&&++r;1<r&&(e.M=!1),h=u(Object.keys(n)),a=h.next();case 2:if(a.done){x.h=4;break}if(d=a.value,c=n[d],"string"===typeof c)return g=i,y=d,v(x,En(e,d,t[c]),14);if(p=t[c.stream],"detection_list"===c.type){if(p){for(var b=p.getRectList(),w=p.getLandmarksList(),S=p.getClassificationsList(),k=[],C=0;C<b.size();++C){var I=cn(b.get(C)),R=ut(I,1),P=ut(I,2),z=ut(I,3),A=ut(I,4),T=ut(I,5,0),L=void 0;L=void 0===L?0:L,I={la:{sa:R,ta:P,height:z,width:A,rotation:T,pa:st(Qe(I,6),L)},ea:gn(w.get(C)),ba:fn(rn(S.get(C)))},k.push(I)}b=k}else b=[];i[d]=b,x.h=7;break}if("proto_list"===c.type){if(p){for(b=Array(p.size()),w=0;w<p.size();w++)b[w]=p.get(w);p.delete()}else b=[];i[d]=b,x.h=7;break}if(void 0===p){x.h=3;break}if("float_list"===c.type){i[d]=p,x.h=7;break}if("proto"===c.type){i[d]=p,x.h=7;break}if("texture"!==c.type)throw Error("Unknown output config type: '"+c.type+"'");return f=e.v[d],f||(f=new yn(e.i,e.K),e.v[d]=f),v(x,xn(f,p,e.M),13);case 13:m=x.i,i[d]=m;case 7:c.transform&&i[d]&&(i[d]=c.transform(i[d])),x.h=3;break;case 14:g[y]=x.i;case 3:a=h.next(),x.h=2;break;case 4:return x.return(i)}}))}function En(e,t,n){var i;return z((function(r){return"number"===typeof n||n instanceof Uint8Array||n instanceof e.i.Uint8BlobList?r.return(n):n instanceof e.i.Texture2dDataOut?(i=e.v[t],i||(i=new yn(e.i,e.K),e.v[t]=i),r.return(xn(i,n,e.M))):r.return(void 0)}))}function $n(e,t){for(var n=t.name||"$",i=[].concat(l(t.wants)),r=new e.i.StringList,o=u(t.wants),a=o.next();!a.done;a=o.next())r.push_back(a.value);o=e.i.PacketListener.implement({onResults:function(r){for(var o={},a=0;a<t.wants.length;++a)o[i[a]]=r.get(a);var s=e.listeners[n];s&&(e.I=Ln(e,o,t.outs).then((function(n){n=s(n);for(var r=0;r<t.wants.length;++r){var a=o[i[r]];"object"===typeof a&&a.hasOwnProperty&&a.hasOwnProperty("delete")&&a.delete()}n&&(e.I=n)})))}}),e.j.attachMultiListener(r,o),r.delete()}function Fn(e){switch(void 0===e&&(e=0),e){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function Nn(e){var t=this;e=e||{},this.h=new Rn({locateFile:e.locateFile,files:function(e){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:Fn(e.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:gn},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:gn},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"object"===typeof window&&void 0!==window.navigator&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(e){var n,i,r;return z((function(o){return 1==o.h?(n=Fn(e),i="third_party/mediapipe/modules/pose_landmark/"+n,v(o,Tn(t.h,n),2)):(r=o.i,t.h.overrideFile(i,r),o.return(!0))}))}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}e=Rn.prototype,e.close=function(){return this.j&&this.j.delete(),Promise.resolve()},e.reset=function(){var e=this;return z((function(t){e.j&&(e.j.reset(),e.s={},e.v={}),t.h=0}))},e.setOptions=function(e,t){var n=this;if(t=t||this.h.options){for(var i=[],r=[],o={},a=u(Object.keys(e)),s=a.next();!s.done;o={X:o.X,Y:o.Y},s=a.next())if(s=s.value,!(s in this.l)||this.l[s]!==e[s]){this.l[s]=e[s];var l=t[s];void 0!==l&&(l.onChange&&(o.X=l.onChange,o.Y=e[s],i.push(function(e){return function(){var t;return z((function(i){if(1==i.h)return v(i,e.X(e.Y),2);t=i.i,!0===t&&(n.u=!0),i.h=0}))}}(o))),l.graphOptionXref&&(s=Object.assign({},{calculatorName:"",calculatorIndex:0},l.graphOptionXref,{valueNumber:1===l.type?e[s]:0,valueBoolean:0===l.type&&e[s],valueString:2===l.type?e[s]:""}),r.push(s)))}0===i.length&&0===r.length||(this.u=!0,this.H=(void 0===this.H?[]:this.H).concat(r),this.F=(void 0===this.F?[]:this.F).concat(i))}},e.initialize=function(){var e=this;return z((function(t){return 1==t.h?v(t,Pn(e),2):3!=t.h?v(t,zn(e),3):v(t,An(e),0)}))},e.overrideFile=function(e,t){this.j?this.j.overrideFile(e,t):this.D[e]=t},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(e,t){var n,i,r,o,a,s,l,h,d,c=this;return z((function(p){switch(p.h){case 1:return c.h.inputs?(n=1e3*(void 0===t||null===t?performance.now():t),v(p,c.I,2)):p.return();case 2:return v(p,c.initialize(),3);case 3:for(i=new c.i.PacketDataList,r=u(Object.keys(e)),o=r.next();!o.done;o=r.next())if(a=o.value,s=c.h.inputs[a]){e:{var f=e[a];switch(s.type){case"video":var m=c.s[s.stream];if(m||(m=new yn(c.i,c.K),c.s[s.stream]=m),0===m.m&&(m.m=m.i.createTexture()),"undefined"!==typeof HTMLVideoElement&&f instanceof HTMLVideoElement)var g=f.videoWidth,y=f.videoHeight;else"undefined"!==typeof HTMLImageElement&&f instanceof HTMLImageElement?(g=f.naturalWidth,y=f.naturalHeight):(g=f.width,y=f.height);y={glName:m.m,width:g,height:y},g=m.h,g.canvas.width=y.width,g.canvas.height=y.height,g.activeTexture(g.TEXTURE0),m.i.bindTexture2d(m.m),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,f),m.i.bindTexture2d(0),m=y;break e;case"detections":for(m=c.s[s.stream],m||(m=new wn(c.i),c.s[s.stream]=m),m.data||(m.data=new m.h.DetectionListData),m.data.reset(f.length),y=0;y<f.length;++y){g=f[y];var x=m.data,b=x.setBoundingBox,w=y,S=g.la,k=new hn;if(ot(k,1,S.sa),ot(k,2,S.ta),ot(k,3,S.height),ot(k,4,S.width),ot(k,5,S.rotation),Je(k,6,S.pa),S=k.l(),b.call(x,w,S),g.ea)for(x=0;x<g.ea.length;++x){k=g.ea[x],b=m.data,w=b.addNormalizedLandmark,S=y,k=Object.assign({},k,{visibility:k.visibility?k.visibility:0});var C=new on;ot(C,1,k.x),ot(C,2,k.y),ot(C,3,k.z),k.visibility&&ot(C,4,k.visibility),k=C.l(),w.call(b,S,k)}if(g.ba)for(x=0;x<g.ba.length;++x)b=m.data,w=b.addClassification,S=y,k=g.ba[x],C=new Jt,ot(C,2,k.qa),k.index&&Je(C,1,k.index),k.label&&Je(C,3,k.label),k.displayName&&Je(C,4,k.displayName),k=C.l(),w.call(b,S,k)}m=m.data;break e;default:m={}}}switch(l=m,h=s.stream,s.type){case"video":i.pushTexture2d(Object.assign({},l,{stream:h,timestamp:n}));break;case"detections":d=l,d.stream=h,d.timestamp=n,i.pushDetectionList(d);break;default:throw Error("Unknown input config type: '"+s.type+"'")}}return c.j.send(i),v(p,c.I,4);case 4:i.delete(),p.h=0}}))},e.onResults=function(e,t){this.listeners[t||"$"]=e},E("Solution",Rn),E("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"}),e=Nn.prototype,e.reset=function(){this.h.reset()},e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(e){this.h.onResults(e)},e.initialize=function(){var e=this;return z((function(t){return v(t,e.h.initialize(),0)}))},e.send=function(e,t){var n=this;return z((function(i){return v(i,n.h.send(e,t),0)}))},e.setOptions=function(e){this.h.setOptions(e)},E("Pose",Nn),E("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),E("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),E("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),E("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),E("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),E("VERSION","0.5.1675469404")}.call(this)},1358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Vp}});var i=n(6768);const r={ref:"video",autoplay:"",playsinline:"",style:{display:"none"}};function o(e,t,n,o,a,s){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("video",r,null,512),t[1]||(t[1]=(0,i.Lk)("div",null,[(0,i.Lk)("canvas",{id:"output",style:{width:"calc(100vw - 16px)",height:"calc(100vh  - 130px)"}})],-1)),(0,i.Lk)("div",null,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.startRecognition&&o.startRecognition(...e))},"辨識")])])}n(4114),n(8992),n(1454),n(8872);var a=n(144),s=(n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4520),n(3949),n(7550),n(329)),u=n(4720),l=n(5782);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const h=(0,u._K2)();h.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",(()=>15)),h.registerFlag("WEBGPU_CPU_FORWARD",(()=>!0)),h.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",(()=>-1)),h.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",(()=>!0)),h.registerFlag("WEBGPU_USE_LOW_POWER_GPU",(()=>!1)),h.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e3)),h.registerFlag("WEBGPU_USE_PROFILE_TOOL",(()=>!1)),h.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",(()=>!0)),h.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",(()=>!1)),h.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",(()=>-1)),h.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",(()=>!1)),h.registerFlag("WEBGPU_PRINT_SHADER",(()=>"")),h.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",(()=>!1));n(3215);
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class d{constructor(e){e&&(this.vendor=e.vendor,this.architecture=e.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return"intel"===this.vendor}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class c{constructor(e){this.device=e,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(e,t,n=!1,i=!0){let r;const o=p(e,t);return i?(this.freeBuffers.has(o)||this.freeBuffers.set(o,[]),this.freeBuffers.get(o).length>0?(r=this.freeBuffers.get(o).pop(),this.numFreeBuffers--):(r=this.device.createBuffer({size:e,usage:t,mappedAtCreation:n}),this.numBytesAllocated+=e)):(r=this.device.createBuffer({size:e,usage:t,mappedAtCreation:n}),this.numBytesAllocated+=e),this.usedBuffers.has(o)||this.usedBuffers.set(o,[]),this.usedBuffers.get(o).push(r),this.numUsedBuffers++,this.numBytesUsed+=e,r}releaseBuffer(e,t=!0){if(0===this.freeBuffers.size)return;const n=e.size,i=e.usage,r=p(n,i),o=this.usedBuffers.get(r),a=o.indexOf(e);if(a<0)throw new Error("Cannot find the buffer in buffer manager");o[a]=o[o.length-1],o.pop(),this.numUsedBuffers--,this.numBytesUsed-=n,t?(this.freeBuffers.get(r).push(e),this.numFreeBuffers++):(e.destroy(),this.numBytesAllocated-=n)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.usedBuffers.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function p(e,t){return`${e}_${t}`}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class f{constructor(e){this.device=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(e,t,n,i){const r=g(n),o=e*t*r,a=m(e,t,n,i);if(this.freeTextures.has(a)||this.freeTextures.set(a,[]),this.usedTextures.has(a)||this.usedTextures.set(a,[]),this.numBytesUsed+=o,this.numUsedTextures++,this.freeTextures.get(a).length>0){this.numFreeTextures--;const e=this.freeTextures.get(a).shift();return this.usedTextures.get(a).push(e),e}this.numBytesAllocated+=o;const s=this.device.createTexture({size:[e,t],format:n,usage:i});return this.usedTextures.get(a).push(s),s}releaseTexture(e){if(0===this.freeTextures.size)return;const t=e.width,n=e.height,i=e.format,r=e.usage,o=m(t,n,i,r);this.freeTextures.has(o)||this.freeTextures.set(o,[]),this.freeTextures.get(o).push(e),this.numFreeTextures++,this.numUsedTextures--;const a=this.usedTextures.get(o),s=a.indexOf(e);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1);const u=g(i),l=t*n*u;this.numBytesUsed-=l}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.usedTextures.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function m(e,t,n,i){return`${e}_${t}_${n}_${i}`}function g(e){if("rgba8unorm"===e)return 16;throw new Error(`${e} is not supported!`)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function y(e,t){if(Math.max(...e)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const n=e.length,i="xyzwuv",r=e.map((e=>`${t}.${i[e]}`)),o=new Array(n-1);o[n-2]=r[n-1];for(let a=n-3;a>=0;--a)o[a]=`(${o[a+1]} * ${r[a+1]})`;return o}const x=(e,t,n)=>"int32"===n?`atomicAdd(${e}, bitcast<i32>(${t}));`:`\n          {\n            var oldValue = 0;\n            loop {\n              let newValueF32 = bitcast<f32>(oldValue) + (${t});\n              let newValue = bitcast<i32>(newValueF32);\n              let res = atomicCompareExchangeWeak(${e}, oldValue, newValue);\n              if res.exchanged {\n                break;\n              }\n              oldValue = res.old_value;\n            }\n          }`;
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var b;(function(e){e[e["FROM_PIXELS"]=0]="FROM_PIXELS",e[e["DRAW"]=1]="DRAW"})(b||(b={}));const w=(e,t,n,i,r)=>{const o={dtype:i.dtype,shape:i.shape},a=P(n,o,t),s=e.createShaderModule({code:a,label:t.constructor.name});let l=(0,u._K2)().get("WEBGPU_PRINT_SHADER");if(""!==l){l=l.toLowerCase();const e=l.split(",");("all"===l||e.some((e=>t.shaderKey.toLowerCase().includes(e))))&&(console.group(t.shaderKey),console.debug(a),console.groupEnd())}return r?e.createComputePipelineAsync({compute:{module:s,entryPoint:"_start"},label:t.constructor.name,layout:"auto"}):e.createComputePipeline({compute:{module:s,entryPoint:"_start"},label:t.constructor.name,layout:"auto"})},v=(e,t="f32")=>{switch(e){case 1:return`${t}`;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component ${t} is not supported.`)}};function S(e){if(e<=1)return"i32";if(2===e)return"vec2<i32>";if(3===e)return"vec3<i32>";if(4===e)return"vec4<i32>";if(5===e)return"vec5";if(6===e)return"vec6";throw Error(`GPU for rank ${e} is not yet supported`)}function k(e){if(0===e)return"x";if(1===e)return"y";if(2===e)return"z";if(3===e)return"w";if(4===e)return"u";if(5===e)return"v";throw Error(`Index ${e} is not yet supported`)}function C(...e){let t;switch(e.length){case 0:t="\n        fn main()\n      ";break;case 1:t=`\n        fn main(${e[0]} : i32)\n      `;break;default:throw Error("Unreachable")}return t}function I(e,t){let n;return n=`\n     ${R(t)}\n      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,\n                @builtin(global_invocation_id) GlobalId : vec3<u32>,\n                @builtin(local_invocation_index) LocalIndex: u32,\n                @builtin(workgroup_id) WorkgroupId : vec3<u32>,\n                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {\n        localId = LocalId;\n        localIndex = LocalIndex;\n        globalId = GlobalId;\n        numWorkgroups = NumWorkgroups;\n        workgroupId = WorkgroupId;\n        ${e?"main(getGlobalIndex());":"main();"};\n      }\n    `,n}function R(e){return`\n  @compute @workgroup_size(${e.workgroupSize[0]}, ${e.workgroupSize[1]}, ${e.workgroupSize[2]})\n`}function P(e,t,n){const i=[],r=n.workgroupSize[0]*n.workgroupSize[1]*n.workgroupSize[2];if(n.outputComponent=n.outputComponent?n.outputComponent:1,i.push(`\n\n      var<private> localId: vec3<u32>;\n      var<private> localIndex: u32;\n      var<private> globalId: vec3<u32>;\n      var<private> numWorkgroups: vec3<u32>;\n      var<private> workgroupId: vec3<u32>;\n\n      // Only used when the y/z dimension of workgroup size is 1.\n      fn getGlobalIndex() -> i32 {\n        ${_(n)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +\n                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${r}u +\n                localIndex);\n        `}\n      }\n    `),null!=n.pixelsOpType){const r=n.pixelsOpType===b.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${M(t.dtype,n.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${M(e[0].dtype,n.outputComponent)}>;`,o=3===t.shape.length?"vec2<i32>":"i32";i.push(`\n        struct Uniform {\n          outShapeStrides : ${o},\n          size            : i32,\n          numChannels     : i32,\n          alpha           : f32,\n        };\n\n        ${r}\n        @group(0) @binding(2) var<uniform> uniforms: Uniform;\n      `);const a=U(n);return[A,i.join("\n"),L(t.shape),n.getUserCode(),I(a,n)].join("\n")}let o,a,s="struct Uniforms { NAN : f32, INFINITY : f32, ";n.variableNames.forEach(((t,n)=>{const i=S(e[n].shape.length);s+=`${t.charAt(0).toLowerCase()+t.slice(1)}Shape : ${i}, `,o=e[n].shape.length-1,a=S(o),s+=`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides: ${a}, `}));const u=S(t.shape.length);s+=`outShape : ${u}, `,o=t.shape.length-1,a=S(o),s+=`\n         outShapeStrides: ${a}, `,n.size&&(s+="size : i32, "),n.uniforms&&(s+=n.uniforms),s+="};",s=B(s),i.push(s),n.atomic?i.push("\n      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;\n    "):i.push(`\n      @group(0) @binding(0) var<storage, read_write> result: array<${M(t.dtype,n.outputComponent)}>;\n    `),n.variableNames.forEach(((t,r)=>{i.push(`\n      @group(0) @binding(${1+r}) var<storage, read> ${t}: array<${n.variableComponents?M(e[r].dtype,n.variableComponents[r]):M(e[r].dtype,n.outputComponent)}>;\n        `)})),""!==s&&i.push(`\n      @group(0) @binding(${1+n.variableNames.length}) var<uniform> uniforms: Uniforms;\n      `);const l=N(t.shape,n.dispatchLayout),h=[A,i.join("\n")+T,L(t.shape),l,D(t.shape.length)];n.atomic||h.push(O(t.shape,t.dtype,n.outputComponent)),n.variableNames.forEach(((t,n)=>{h.push(`${L(e[n].shape,t)}`)}));const d=e.map(((e,i)=>F(e,t.shape,n.variableComponents?n.variableComponents[i]:n.outputComponent,n.dispatchLayout.x.length===t.shape.length))).join("\n");h.push(d),h.push(n.getUserCode());const c=U(n);h.push(I(c,n));const p=h.join("\n");return p}function z(e,t,n){let i=e.shaderKey;if(null!=e.pixelsOpType)return i;const r=[],o=[];t.forEach((e=>{r.push(e.shape),o.push(e.dtype)})),r.push(n.shape),o.push(n.dtype);const a=t.map((e=>u.C0T.getBroadcastDims(e.shape,n.shape))),s=t.map((e=>u.ZSL.arraysEqual(e.shape,n.shape))).join("_"),l=a.map((e=>e.join("_"))).join(";"),h=_(e)?"flatDispatch":"";return i+="_"+(e.workgroupSize?e.workgroupSize.join(","):"")+r.map((e=>e.length)).join(",")+o.join(",")+e.variableNames.join(",")+l+s+h,i}const A="\n  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};\n  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};\n\n  // Checks whether coordinates lie within the bounds of the shape.\n  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {\n    return all(coord >= vec2<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {\n    return all(coord >= vec3<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {\n    return all(coord >= vec4<i32>(0)) && all(coord < shape);\n  }\n\n  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {\n    return coord;\n  }\n  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {\n    return dot(coords, vec2<i32>(shape.y, 1));\n  }\n  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {\n    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));\n  }\n  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {\n    return dot(coords, vec4<i32>(\n        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));\n  }\n  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {\n    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;\n  }\n  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {\n    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;\n  }\n\n  // NaN defination in IEEE 754-1985 is :\n  //   - sign = either 0 or 1.\n  //   - biased exponent = all 1 bits.\n  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).\n  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers\n  fn isnan(val: f32) -> bool {\n    let floatToUint: u32 = bitcast<u32>(val);\n    return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n  }\n  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {\n    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);\n    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);\n  }\n",T="\n  fn isinf(val: f32) -> bool {\n    return abs(val) == uniforms.INFINITY;\n  }\n";function L(e,t=""){const n=e.length,i=""!==t?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",r=""!==t?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(n<=1)return`fn ${i}(index : i32) -> i32 { return index; }`;const o=u.ZSL.computeStrides(e),a=S(n),s=[];for(let u=0;u<n;u++)s.push(`d${u}`);if(1===o.length)return`    fn ${i}(index : i32) -> vec2<i32> {\n      let d0 = index / uniforms.${r}; let d1 = index - d0 * uniforms.${r};\n      return vec2<i32>(d0, d1);\n    }`;let l;return l="var index2 = index;"+o.map(((e,t)=>{const n=`let ${s[t]} = index2 / uniforms.${r}.${k(t)}`,i=t===o.length-1?`let ${s[t+1]} = index2 - ${s[t]} * uniforms.${r}.${k(t)}`:`index2 = index2 - ${s[t]} * uniforms.${r}.${k(t)}`;return`${n}; ${i};`})).join(""),`\n    fn ${i}(index : i32) -> ${a} {\n      ${l}\n      return ${a}(${s.join(",")});\n    }\n  `}function E(e,t){const n=e.name,i=e.shape.length,r=S(i),o="get"+n.charAt(0).toUpperCase()+n.slice(1),a=["d0","d1","d2","d3","d4","d5"].slice(0,i),s=a.map((e=>`${e} : i32`)).join(", ");if(i<1)return`\n      fn ${o}() -> ${v(t)} {\n        return ${v(t)}(${n}[0]);\n      }\n    `;const u=`uniforms.${n.charAt(0).toLowerCase()+n.slice(1)}Shape`;let l=`${i}D`;return 0===i&&(l="1D"),`\n    fn ${o}(${s}) -> ${v(t)} {\n      return ${v(t)}(${n}[getIndexFromCoords${l}(${r}(${a.join(",")}),\n        ${u})${1===t?"":` / ${t}`}]);\n    }\n   `}function $(e,t,n,i){const r=e.name,o=r.charAt(0).toUpperCase()+r.slice(1),a="get"+o+"ByOutput",s=e.shape.length,l=t.length,h=S(l);if(u.ZSL.arraysEqual(e.shape,t)&&i)return`\n    fn ${a}Index(globalIndex : i32) -> ${v(n)} {\n      return ${v(n)}(${r}[globalIndex]);\n    }\n\n    fn ${a}Coords(coords : ${h}) -> ${v(n)} {\n      return ${v(n)}(${r}[${l>1?"getOutputIndexFromCoords(coords)":"coords"}${1===n?"":` / ${n}`}]);\n    }\n    `;const d=u.C0T.getBroadcastDims(e.shape,t),c=l-s;let p="";if(0===s)return`\n    fn ${a}Index(globalIndex : i32) -> ${v(n)}{\n      return get${o}();\n    }\n\n    fn ${a}Coords(coords : ${h}) -> ${v(n)}{\n      return get${o}();\n    }\n  `;p=l<2&&d.length>=1?"coords = 0;":d.map((e=>`coords.${k(e+c)} = 0;`)).join("\n");let f="";if(l<2&&s>0)f="coords";else if(l>1){const t=S(s),n=e.shape.map(((e,t)=>`coords.${k(t+c)}`)).join(", ");f=`${t}(${n})`}else f="coords";const m=`uniforms.${r.charAt(0).toLowerCase()+r.slice(1)}Shape`,g=`${s}D`;return`\n  fn ${a}Index(globalIndex : i32) -> ${v(n)} {\n    var coords = getCoordsFromIndex(globalIndex);\n    ${p}\n    return ${v(n)}(${r}[getIndexFromCoords${g}(${f}, ${m})${1===n?"":` / ${n}`}]);\n  }\n\n  fn ${a}Coords(coordsIn : ${h}) -> ${v(n)} {\n    var coords = coordsIn;\n    ${p}\n    return ${v(n)}(${r}[getIndexFromCoords${g}(${f}, ${m})${1===n?"":` / ${n}`}]);\n  }\n`}function F(e,t,n,i){let r=E(e,n);const o=e.shape;return o.length<=t.length&&(r+=$(e,t,n,i)),r}function N(e,t){const{x:n,y:i=[],z:r=[]}=t,o=e.length,a=n.length+i.length+r.length;if(a!==o)return"";if(n.length===o){const e=S(o),t=`fn getOutputCoords() -> ${e}{\n    let globalIndex = getGlobalIndex();\n    return getCoordsFromIndex(globalIndex);\n  }\n  `;return t}let s="";const u=[n,i,r];for(let c=0;c<u.length;c++){const e=u[c];if(0!==e.length)if(1===e.length)s+=`let d${e[0]} = i32(globalId[${c}]);`;else{const t=y(e,"uniforms.outShape");s+=`var index${c} = i32(globalId[${c}]);`;for(let n=0;n<t.length;n++)s+=`let d${e[n]} = index${c} / ${t[n]};`,n===t.length-1?s+=`let d${e[n+1]} = index${c} - d${e[n]} * ${t[n]};`:s+=`index${c} = index${c} - d${e[n]} * ${t[n]};`}}const l=[];for(let c=0;c<a;c++)l.push(`d${c}`);const h=S(a);let d=`fn getOutputCoords() -> ${h} {\n  ${s}\n`;return 0===l.length?d+=`return ${h}(0); }`:d+=`return ${h}(${l.join(",")}); }`,d}function D(e){let t="";switch(e){case 0:case 1:t+="\n        fn getOutputIndexFromCoords(coords : i32) -> i32 {\n          return coords;\n        }\n        ";break;case 2:t+="\n        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {\n          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));\n        }\n        ";break;case 3:t+="\n        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {\n          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));\n        }\n        ";break;case 4:t+="\n        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {\n          return dot(coords, vec4<i32>(\n            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));\n        }\n        ";break;case 5:t+="\n        fn getOutputIndexFromCoords(coords : vec5) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u;\n        }\n        ";break;case 6:t+="\n        fn getOutputIndexFromCoords(coords : vec6) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u * uniforms.outShapeStrides.u +\n              coords.v;\n        }\n        ";break;default:u.ZSL.assert(!1,(()=>`Unsupported ${e}D shape`));break}return t}function _(e){return 1===e.dispatch[1]&&1===e.dispatch[2]}function M(e,t=1){if("float32"===e)return v(t,"f32");if("int32"===e||"bool"===e)return v(t,"i32");throw new Error(`type ${e} is not supported.`)}function O(e,t,n){const i=e.length,r=M(t,n);let o=`fn setOutputAtIndex(flatIndex : i32, value : ${v(n)}) {\n      result[flatIndex] = ${r}(value);\n    }\n\n    fn setOutputAtIndexI32(flatIndex : i32, value : ${v(n,"i32")}) {\n      result[flatIndex] = ${r}(value);\n    }\n    `;if(i>=2){const e=["d0","d1","d2","d3","d4","d5"].slice(0,i),t=S(i);o+=`\n      fn setOutputAtCoords(${e.map((e=>`${e} : i32`)).join(", ")}, value : ${v(n)}) {\n        let flatIndex = getOutputIndexFromCoords(${t}(${e.join(", ")}));\n        setOutputAtIndex(flatIndex${1===n?"":` / ${n}`}, value);\n      }\n      fn setOutputAtCoordsI32(${e.map((e=>`${e} : i32`)).join(", ")}, value : ${v(n,"i32")}) {\n        let flatIndex = getOutputIndexFromCoords(${t}(${e.join(", ")}));\n        setOutputAtIndexI32(flatIndex${1===n?"":` / ${n}`}, value);\n      }\n    `}return o}function B(e){const t=/(\w+)\s*:\s*vec(5|6)/g;e=e.replace(t,(e=>"@align(16) "+e));const n=/vec(5|6)\s*,\s*(\w+)/g;return e=e.replace(n,((e,t,n)=>`vec${t}, @align(16) ${n}`)),e}function U(e){return(!e.dispatchLayout.hasOwnProperty("y")||0===e.dispatchLayout.y.length)&&(!e.dispatchLayout.hasOwnProperty("z")||0===e.dispatchLayout.z.length)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const W=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t};function V(e,t,n=[1,1,1],i=[1,1,1]){const[r,o,a]=[Math.ceil(W(e.x.map((e=>t[e])))/(n[0]*i[0])),e.y?Math.ceil(W(e.y.map((e=>t[e])))/(n[1]*i[1])):1,e.z?Math.ceil(W(e.z.map((e=>t[e])))/(n[2]*i[2])):1];return[r,o,a]}function H(e,t,n,i=!1){const r=[8,8,1],o=[4,4,1];return i||(e<=8&&(o[1]=1),t<=16&&n<=16&&(r[0]=4)),{workgroupSize:r,elementsPerThread:o}}function G(e,t,n=!1){if(n)return[8,8,1];const i=W(e.x.map((e=>t[e]))),r=W(e.y.map((e=>t[e])));return i<=4?[4,16,1]:r<=4?[16,4,1]:[16,16,1]}function j(e,t,n=!1){if(n)return[4,4,1];const i=W(e.x.map((e=>t[e]))),r=W(e.y.map((e=>t[e])));return i<=4?[1,2,1]:r<=4?[2,1,1]:[2,2,1]}function K(e){return{x:e.map(((e,t)=>t))}}function X(e){if("float32"===e||"int32"===e||"bool"===e||"string"===e)return 4;if("complex64"===e)return 8;throw new Error(`Unknown dtype ${e}`)}function q(){return!("undefined"===typeof globalThis||!globalThis.navigator||!globalThis.navigator.gpu)}function Y(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&u.ZSL.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the WebGPU backend.`))}))}var Z;(function(e){e[e["MatMulReduceProgram"]=0]="MatMulReduceProgram",e[e["MatMulSplitKProgram"]=1]="MatMulSplitKProgram",e[e["MatMulSmallOutputSizeProgram"]=2]="MatMulSmallOutputSizeProgram",e[e["MatMulPackedProgram"]=3]="MatMulPackedProgram",e[e["MatMulMax"]=4]="MatMulMax"})(Z||(Z={}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Q=(0,u._K2)().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD"),J=(e,t)=>{const n=e.limits.maxComputeWorkgroupsPerDimension,i=t["dispatchLayout"],r=t["dispatch"];if(r.every((e=>e<=n)))return r;u.ZSL.assert(r[0]>n&&void 0===i.y&&void 0===i.z,(()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension."));let o=Math.ceil(Math.sqrt(r[0]));return o>n?(o=Math.ceil(Math.cbrt(r[0])),u.ZSL.assert(o<=n,(()=>"Total dispatch size exceeds WebGPU maximum.")),[o,o,o]):[o,o,1]};class ee extends u.uI_{nextDataId(){return ee.nextDataId++}constructor(e,t){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!q())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=e,this.queue=e.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new d(t),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new c(this.device),this.textureManager=new f(this.device),this.tensorMap=new u.GJx(this,(0,u.Hi9)()),(0,u._K2)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:e,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(e,t=!1){if(!this.tensorMap.has(e))return!0;const n=this.tensorMap.get(e);return t?n.refCount=0:n.refCount--,!(n.refCount>0)&&(null!=n.complexTensorInfos&&(this.disposeData(n.complexTensorInfos.real.dataId),this.disposeData(n.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(e)?(this.tensorDataPendingDisposal.push(e),!0):(this.releaseResource(e),this.tensorMap.delete(e),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(e){const t=this.tensorMap.get(e);t&&t.resource&&(t.external||(t.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(t.resource):t.resource instanceof GPUTexture&&this.textureManager.releaseTexture(t.resource)),t.resource=null)}refCount(e){if(this.tensorMap.has(e)){const t=this.tensorMap.get(e);return t.refCount}return 0}incRef(e){const t=this.tensorMap.get(e);t.refCount++}decRef(e){if(this.tensorMap.has(e)){const t=this.tensorMap.get(e);t.refCount--}}write(e,t,n){if("complex64"===n&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const i={id:this.nextDataId()};return this.tensorMap.set(i,{dtype:n,shape:t,values:e,refCount:1}),i}move(e,t,n,i,r){if("complex64"===i)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(e,{dtype:i,shape:n,values:t,refCount:r})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach((e=>{this.releaseResource(e),this.tensorMap.delete(e)})),this.uniformPendingDisposal.forEach((e=>this.bufferManager.releaseBuffer(e))),this.stagingPendingDisposal.forEach((e=>this.bufferManager.releaseBuffer(e,!1))),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let e;try{e=await Promise.all(Object.values(this.pipelineCache))}catch(t){throw new Error(t.message)}Object.keys(this.pipelineCache).map(((t,n)=>{this.pipelineCache[t]=e[n]}))}async getBufferData(e){if((0,u._K2)().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const t=e.size,n=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,n,0,t),this.submitQueue(),await n.mapAsync(GPUMapMode.READ);const i=n.getMappedRange().slice(0);return n.unmap(),null!=n&&this.bufferManager.releaseBuffer(n),(0,u._K2)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(u.ZSL.assert(void 0!==this.dummyContext,(()=>"Fail to get context for profiling tool")),this.dummyContext.getCurrentTexture()),i}convertAndCacheOnCPU(e,t){const n=this.tensorMap.get(e);return n.values=t,n.values}readSync(e){const t=this.tensorMap.get(e),{values:n,complexTensorInfos:i}=t;if(null!=n||"string"===t.dtype)return n;if("complex64"===t.dtype){const t=this.readSync(i.real.dataId),n=this.readSync(i.imag.dataId),r=u.ZSL.convertBackendValuesAndArrayBuffer(u.C0T.mergeRealAndImagArrays(t,n).buffer,"float32");return this.convertAndCacheOnCPU(e,r),r}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const r=["opaque","premultiplied"],o=t.resource,a=o.size;u.ZSL.assert(a%4===0,(()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4."));const s=a/4,l=new ArrayBuffer(a),h=256,d=256,c=r.map((e=>new OffscreenCanvas(h,d))),p=new OffscreenCanvas(h,d);this.endComputePassEncoder(),c.map(((e,t)=>{const n=e.getContext("webgpu");return n.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:r[t]}),n.getCurrentTexture()})).map(((e,t)=>{const n=4*h,i=(i,a,s)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:o,bytesPerRow:n,offset:s},{texture:e},{width:i,height:a}),this.submitQueue();const u=p.getContext("2d",{willReadFrequently:!0});u.clearRect(0,0,i,a),u.drawImage(c[t],0,0);const h=u.getImageData(0,0,i,a).data,d=r[t],f=new Uint8ClampedArray(l,s,i*a*4);for(let e=0;e<f.length;e+=4)if("premultiplied"===d)f[e+3]=h[e+3];else{const t=h[e];f[e]=h[e+2],f[e+1]=h[e+1],f[e+2]=t}},a=Math.floor(s/(h*d));let u=h,f=d,m=0;for(let r=0;r<a;r++)i(u,f,m),m+=h*d*4;const g=s%(h*d);f=Math.floor(g/h),f>0&&(i(u,f,m),m+=f*(4*h)),u=g%h,u>0&&i(u,1,m)}));const f=u.ZSL.convertBackendValuesAndArrayBuffer(l,t.dtype);return this.convertAndCacheOnCPU(e,f),f}async read(e){if(!this.tensorMap.has(e))throw new Error(`Tensor ${e} was not registered!`);const t=this.tensorMap.get(e),{values:n}=t;if(null!=n)return n;let i;if("complex64"===t.dtype){const e=await Promise.all([this.read(t.complexTensorInfos.real.dataId),this.read(t.complexTensorInfos.imag.dataId)]),n=e[0],r=e[1];i=u.C0T.mergeRealAndImagArrays(n,r)}else{const e=await this.getBufferData(t.resource);i=u.ZSL.convertBackendValuesAndArrayBuffer(e,t.dtype)}return this.convertAndCacheOnCPU(e,i),i}copyBuffer(e){const t=e.size,n=e.usage,i=this.bufferManager.acquireBuffer(t,n);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,i,0,t),this.submitQueue(),i}createTensorFromGPUData(e,t,n){let i=e.buffer;if("complex64"===n)throw new Error("Cannot write to a complex64 dtype. ");const r={id:this.nextDataId()};this.tensorMap.set(r,{dtype:n,shape:t,values:null,refCount:1,external:e.zeroCopy});const o=this.tensorMap.get(r),a=X(o.dtype)*u.ZSL.sizeFromShape(o.shape);if(e.buffer.size<a)throw new Error(`GPUBuffer size(${e.buffer.size}) is smaller than tensor size(${a})!`);if((e.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!==(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return!0!==e.zeroCopy&&(i=this.copyBuffer(i)),o.resource=i,(0,u.Hi9)().makeTensorFromDataId(r,t,n,this)}readToGPU(e){const t=this.tensorMap.get(e),{values:n,dtype:i,shape:r,resource:o}=t;if("complex64"===i)throw new Error("Does not support reading buffer for complex64 dtype.");if(null==o)throw null!=n?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const a=o,s=a.size,l=a.usage,h=this.bufferManager.acquireBuffer(s,l);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(o,0,h,0,s),this.submitQueue();const d=this.makeTensorInfo(r,i),c=(0,u.Hi9)().makeTensorFromTensorInfo(d),p=this.tensorMap.get(d.dataId);return p.resource=h,{tensorRef:c,buffer:h}}bufferSync(e){const t=this.readSync(e.dataId);if("string"===e.dtype)try{const n=t.map((e=>u.ZSL.decodeString(e)));return(0,u.ra8)(e.shape,e.dtype,n)}catch(n){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,u.ra8)(e.shape,e.dtype,t)}async time(e){this.supportTimestampQuery||this.hasTimestampQueryWarned||(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const t=this.activeTimers,n=[];let i=!1;null==this.programTimersStack?(this.programTimersStack=n,i=!0):this.activeTimers.push(n),this.activeTimers=n,e();const r=u.ZSL.flatten(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),o=u.ZSL.flatten(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=t,i&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},s=await Promise.all(r);return a["kernelMs"]=u.ZSL.sum(s),a["getExtraProfileInfo"]=()=>s.map(((e,t)=>({name:o[t],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,a}makeTensorInfo(e,t,n){"string"===t&&null!=n&&n.length>0&&u.ZSL.isString(n[0])&&(n=n.map((e=>u.ZSL.encodeString(e))));const i=this.write(n,e,t);return{dataId:i,shape:e,dtype:t}}tensorToBinding(e){if(!e)return null;const t=this.tensorMap.get(e.dataId),n=t.resource;return n instanceof GPUBuffer?{buffer:n}:n instanceof GPUTexture?n.createView():n}uploadToGPU(e){const t=this.tensorMap.get(e);if(null!=t.resource)return;const n=X(t.dtype)*u.ZSL.sizeFromShape(t.shape);let i;const r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(t.values){if(i=this.bufferManager.acquireBuffer(n,r,!0),"unmapped"===i.mapState){const e=this.bufferManager.acquireBuffer(n,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),r=e.getMappedRange();"int32"===t.dtype||"bool"===t.dtype?new Int32Array(r).set(t.values):new Float32Array(r).set(t.values),e.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,i,0,n),this.stagingPendingDisposal.push(e)}else{const e=i.getMappedRange();"int32"===t.dtype||"bool"===t.dtype?new Int32Array(e).set(t.values):new Float32Array(e).set(t.values),i.unmap()}t.values=null}else i=this.bufferManager.acquireBuffer(n,r);t.resource=i}makeUniforms(e){let t=0,n=0;const i=[];let r=1;e.forEach((e=>{let o;switch(0===e.data.length&&(e.data=[1]),e.data.length){case 1:o=4;break;case 2:o=8;break;case 3:o=16;break;case 4:o=16;break;case 5:o=16;break;case 6:o=16;break;default:u.ZSL.assert(!1,(()=>`Unsupported ${e.data.length}D shape`))}5!==n&&6!==n||(o=16),o>r&&(r=o),t=Math.ceil(t/o)*o,n=e.data.length,i.push(t),t+=4*e.data.length})),t=Math.ceil(t/r)*r;const o=new ArrayBuffer(t);e.forEach(((e,t)=>{const n=i[t];"int32"===e.type?new Int32Array(o,n,e.data.length).set(e.data):"uint32"===e.type?new Uint32Array(o,n,e.data.length).set(e.data):new Float32Array(o,n,e.data.length).set(e.data)}));const a=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(a,0,o,0,t),this.uniformPendingDisposal.push(a),{offset:0,size:t,buffer:a}}runWebGPUProgram(e,t,n,i,r){if(r||(r=this.makeTensorInfo(e.outputShape,n)),0===u.ZSL.sizeFromShape(r.shape))return this.tensorMap.get(r.dataId).values=u.ZSL.getTypedArrayFromDType(r.dtype,0),r;this.uploadToGPU(r.dataId),e.dispatch=J(this.device,e);const o=t.map(((t,n)=>{if("complex64"===t.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(t.dataId),{dtype:this.tensorMap.get(t.dataId).dtype,shape:t.shape,name:e.variableNames[n]}}));e.shaderKey=z(e,o,r);const a=(0,u._K2)().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return e.shaderKey in this.pipelineCache||(this.pipelineCache[e.shaderKey]=w(this.device,e,o,r,a)),e.pipeline=this.pipelineCache[e.shaderKey],a||this.recordAndSubmit(e,r,t,i),r}recordAndSubmit(e,t,n,i){if(e.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let r=[],o=[];const a="int32";if(null==e.pixelsOpType){r.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),o=n.concat(t).map((e=>e.shape));const e="int32";o.map((t=>{r.push({type:e,data:t});const n=u.ZSL.computeStrides(t);r.push({type:e,data:n})}))}else{const e=u.ZSL.computeStrides(t.shape);r.push({type:a,data:e})}if(e.size){const t=u.ZSL.sizeFromShape(e.outputShape);r.push({type:a,data:[e.outputComponent?t/e.outputComponent:t]})}i&&(r=[...r,...i]);const s=[this.tensorToBinding(t),...n.map((e=>this.tensorToBinding(e))),this.makeUniforms(r)];n.forEach((e=>{this.commandQueueOwnedIds.add(e.dataId)})),this.commandQueueOwnedIds.add(t.dataId);const l=this.device.createBindGroup({layout:e.pipeline.getBindGroupLayout(0),entries:s.map(((e,t)=>({binding:t,resource:e})))}),h=null!=this.activeTimers;this.ensureCommandEncoderReady();const d={};h&&this.supportTimestampQuery?(this.endComputePassEncoder(),null==this.querySet&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),d.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(d)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(d)),this.computePassEncoder.setPipeline(e.pipeline),this.computePassEncoder.setBindGroup(0,l),this.computePassEncoder.dispatchWorkgroups(e.dispatch[0],e.dispatch[1],e.dispatch[2]),this.dispatchCountInPass++,(h||(0,u._K2)().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||e.pixelsOpType===b.DRAW)&&(this.endComputePassEncoder(),h?this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;null==this.queryResolveBuffer&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const e=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,8*this.querySetCount),this.submitQueue(),await e.mapAsync(GPUMapMode.READ);const t=new BigUint64Array(e.getMappedRange()),n=Number(t[1]-t[0])/1e6;return e.unmap(),this.bufferManager.releaseBuffer(e),n}shouldExecuteOnCPU(e,t=Q){return(0,u._K2)().getBool("WEBGPU_CPU_FORWARD")&&e.every((e=>null==this.tensorMap.get(e.dataId).resource&&u.ZSL.sizeFromShape(e.shape)<t))}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(null!=this.querySet&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var te;ee.nextDataId=0,
/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
q()&&(0,u.gJX)("webgpu",(async()=>{const e={powerPreference:(0,u._K2)().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},t=await navigator.gpu.requestAdapter(e),n={},i=[];t.features.has("timestamp-query")&&i.push("timestamp-query"),t.features.has("bgra8unorm-storage")&&i.push(["bgra8unorm-storage"]),n.requiredFeatures=i;const r=t.limits;n.requiredLimits={maxComputeWorkgroupStorageSize:r.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.maxStorageBufferBindingSize,maxBufferSize:r.maxBufferSize,maxComputeWorkgroupSizeX:r.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:r.maxComputeInvocationsPerWorkgroup};const o=await t.requestDevice(n),a="info"in t?t.info:"requestAdapterInfo"in t?await t.requestAdapterInfo():void 0;return new ee(o,a)}),3),function(e){e[e["ADD"]=0]="ADD",e[e["ATAN2"]=1]="ATAN2",e[e["COMPLEX_MULTIPLY_IMAG"]=2]="COMPLEX_MULTIPLY_IMAG",e[e["COMPLEX_MULTIPLY_REAL"]=3]="COMPLEX_MULTIPLY_REAL",e[e["DIV"]=4]="DIV",e[e["ELU_DER"]=5]="ELU_DER",e[e["EQUAL"]=6]="EQUAL",e[e["FLOOR_DIV"]=7]="FLOOR_DIV",e[e["GREATER"]=8]="GREATER",e[e["GREATER_EQUAL"]=9]="GREATER_EQUAL",e[e["LESS"]=10]="LESS",e[e["LESS_EQUAL"]=11]="LESS_EQUAL",e[e["LOGICAL_AND"]=12]="LOGICAL_AND",e[e["LOGICAL_OR"]=13]="LOGICAL_OR",e[e["MAX"]=14]="MAX",e[e["MIN"]=15]="MIN",e[e["MOD"]=16]="MOD",e[e["MUL"]=17]="MUL",e[e["NOT_EQUAL"]=18]="NOT_EQUAL",e[e["POW"]=19]="POW",e[e["PRELU"]=20]="PRELU",e[e["SQUARED_DIFFERENCE"]=21]="SQUARED_DIFFERENCE",e[e["SUB"]=22]="SUB"}(te||(te={}));const ne="let resultTemp = a + b;",ie="let resultTemp = atan2(a, b);",re="let resultTemp = areal * breal - aimag * bimag;",oe="let resultTemp = areal * bimag + aimag * breal;",ae="let resultTemp = a / b;",se="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",ue="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a == b);\n",le="\n  let remainder =\n      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));\n  let quotient = (a - remainder) / b;\n  let resultTemp =\n      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));\n",he="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a > b);\n",de="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a >= b);\n",ce="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a < b);\n",pe="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a <= b);\n",fe="return f32(a >= 1.0 && b >= 1.0);",me="return (vec4<f32>(a >= vec4<f32>(1.0)) *\n  vec4<f32>(b >= vec4<f32>(1.0)));",ge="return f32(a >= 1.0 || b >= 1.0);",ye="return min(vec4<f32>(a >= vec4<f32>(1.0)) +\n  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));",xe="let resultTemp = max(a, b);",be="let resultTemp = min(a, b);",we="\n  let isNaN = b == 0.;\n  var resultTemp = a % b;\n  resultTemp = select((resultTemp + b) % b, resultTemp,\n      (a < 0. && b < 0.) || (a >= 0. && b > 0.));\n",ve="\n  let isNaN = !vec4<bool>(b);\n  var resultTemp = vec4<f32>(a % b);\n  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {\n    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];\n  }\n  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {\n    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];\n  }\n  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {\n    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];\n  }\n  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {\n    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];\n  }\n",Se="let resultTemp = a * b;",ke="\n  var resultTemp = f32(a != b);\n  let valueForNaN = 1.0;\n",Ce="\n  var resultTemp = vec4<f32>(a != b);\n  let valueForNaN = 1.0;\n",Ie="\n  let isNaN = a < 0.0 && floor(b) < b;\n  if (b == 0.0) {\n    return 1.0;\n  }\n  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),\n      round(abs(b) % 2.0) != 1.0);\n",Re="\n  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);\n  let isModRound1 = vec4<f32>(isModRound1Bool);\n  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);\n  var resultTemp = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  let isExpZero = b == vec4<f32>(0.0);\n  if (isExpZero.r) {\n    resultTemp.r = 1.0;\n  }\n  if (isExpZero.g) {\n    resultTemp.g = 1.0;\n  }\n  if (isExpZero.b) {\n    resultTemp.b = 1.0;\n  }\n  if (isExpZero.a) {\n    resultTemp.a = 1.0;\n  }\n  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);\n",Pe="if (a < 0.0) { return b * a; }  return a;",ze="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",Ae="let resultTemp = (a - b) * (a - b);",Te="let resultTemp = a - b;";function Le(e,t){let n;do{switch(e){case te.ATAN2:n=ie;break;case te.MAX:n=xe;break;case te.MIN:n=be;break;case te.MOD:n=t?ve:we;break;case te.NOT_EQUAL:n=t?Ce:ke;break;case te.POW:n=t?Re:Ie;break;default:continue}let i,r,o;return t?(i="isnanVec4",r="vec4<f32>",o="vec4<bool>"):(i="isnan",r="f32",o="bool"),`\n      let aIsNaN = ${i}(a);\n      let aPostLegalization = select(a, ${r}(42), aIsNaN);\n      let bIsNaN = ${i}(b);\n      let bPostLegalization = select(b, ${r}(42), bIsNaN);\n      let isNaN = false;\n      let valueForNaN = uniforms.NAN;\n      {\n        let a = aPostLegalization;\n        let b = bPostLegalization;\n        ${n}\n        return select(\n            resultTemp, ${r}(valueForNaN),\n            ${o}(isNaN) | aIsNaN | bIsNaN);\n      }\n    `}while(0);switch(e){case te.ADD:n=ne;break;case te.COMPLEX_MULTIPLY_IMAG:n=oe;break;case te.COMPLEX_MULTIPLY_REAL:n=re;break;case te.DIV:n=ae;break;case te.ELU_DER:n=se;break;case te.EQUAL:n=ue;break;case te.FLOOR_DIV:n=le;break;case te.GREATER:n=he;break;case te.GREATER_EQUAL:n=de;break;case te.LESS:n=ce;break;case te.LESS_EQUAL:n=pe;break;case te.LOGICAL_AND:return t?me:fe;case te.LOGICAL_OR:return t?ye:ge;case te.MUL:n=Se;break;case te.PRELU:return t?ze:Pe;case te.SQUARED_DIFFERENCE:n=Ae;break;case te.SUB:n=Te;break;default:}return`\n    ${n}\n    return resultTemp;\n  `}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var Ee;(function(e){e[e["ABS"]=0]="ABS",e[e["ACOS"]=1]="ACOS",e[e["ACOSH"]=2]="ACOSH",e[e["ASIN"]=3]="ASIN",e[e["ASINH"]=4]="ASINH",e[e["ATAN"]=5]="ATAN",e[e["ATANH"]=6]="ATANH",e[e["CEIL"]=7]="CEIL",e[e["COS"]=8]="COS",e[e["COSH"]=9]="COSH",e[e["ELU"]=10]="ELU",e[e["ERF"]=11]="ERF",e[e["EXP"]=12]="EXP",e[e["EXPM1"]=13]="EXPM1",e[e["FLOOR"]=14]="FLOOR",e[e["IS_FINITE"]=15]="IS_FINITE",e[e["IS_INF"]=16]="IS_INF",e[e["IS_NAN"]=17]="IS_NAN",e[e["LINEAR"]=18]="LINEAR",e[e["LOG"]=19]="LOG",e[e["LOG1P"]=20]="LOG1P",e[e["LOGICAL_NOT"]=21]="LOGICAL_NOT",e[e["NEG"]=22]="NEG",e[e["RELU"]=23]="RELU",e[e["RELU6"]=24]="RELU6",e[e["LEAKYRELU"]=25]="LEAKYRELU",e[e["RECIPROCAL"]=26]="RECIPROCAL",e[e["ROUND"]=27]="ROUND",e[e["RSQRT"]=28]="RSQRT",e[e["SELU"]=29]="SELU",e[e["SIGMOID"]=30]="SIGMOID",e[e["SIGN"]=31]="SIGN",e[e["SIN"]=32]="SIN",e[e["SINH"]=33]="SINH",e[e["SOFTPLUS"]=34]="SOFTPLUS",e[e["SQRT"]=35]="SQRT",e[e["SQUARE"]=36]="SQUARE",e[e["STEP"]=37]="STEP",e[e["TAN"]=38]="TAN",e[e["TANH"]=39]="TANH",e[e["TO_INT"]=40]="TO_INT"})(Ee||(Ee={}));const $e="return abs(a);",Fe="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return acos(a);\n",Ne="\n  if (a < 1.) {\n    return uniforms.NAN;\n  }\n  return acosh(a);\n",De="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return asin(a);\n",_e="return asinh(a);",Me="\n  if (isnan(a)) {\n    return uniforms.NAN;\n  }\n  return atan(a);\n",Oe="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  if (a == 1.) {\n    return uniforms.INFINITY;\n  }\n  if (a == -1.) {\n    return -uniforms.INFINITY;\n  }\n  return atanh(a);\n",Be="return ceil(a);",Ue="return cos(a);",We="\n  let e2x = exp(-a);\n  return (e2x + 1.0 / e2x) / 2.0;\n",Ve="return exp(a) - 1.0;",He="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",Ge="\n  var resFloat = exp(a) - vec4<f32>(1.0);\n  if (a.r >= 0.0) {\n    resFloat.r = a.r;\n  }\n  if (a.g >= 0.0) {\n    resFloat.g = a.g;\n  }\n  if (a.b >= 0.0) {\n    resFloat.b = a.b;\n  }\n  if (a.a >= 0.0) {\n    resFloat.a = a.a;\n  }\n  return resFloat;\n",je=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  let p = ${u.C0T.ERF_P};\n  let a1 = ${u.C0T.ERF_A1};\n  let a2 = ${u.C0T.ERF_A2};\n  let a3 = ${u.C0T.ERF_A3};\n  let a4 = ${u.C0T.ERF_A4};\n  let a5 = ${u.C0T.ERF_A5};\n\n  let sign = sign(a);\n  let absA = abs(a);\n  let t = 1.0 / (1.0 + p * absA);\n  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));\n`,Ke="return exp(a);",Xe="return floor(a);",qe="return f32(!isnan(a) && !isinf(a));",Ye="return f32(isinf(a));",Ze="return f32(isnan(a));",Qe="return a;",Je="if (a < 0.0) { return uniforms.NAN; }\n  return log(a);",et="\n  if (isnan(a)) { return a; }\n  return log(1.0 + a);\n",tt="return f32(!(a >= 1.0));",nt="return -a;",it="if (a < 0.0) { return uniforms.alpha * a; } return a;",rt="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",ot="return 1.0 / a;",at="return select(a, 0.0, a < 0.0);",st="return clamp(a, 0.0, 6.0);",ut="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",lt="\n  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));\n",ht="return round(a);",dt="return inverseSqrt(a);",ct=`\n  if (a >= 0.0) {\n    return ${u.C0T.SELU_SCALE} * a;\n  } else {\n    return ${u.C0T.SELU_SCALEALPHA} * (exp(a) - 1.0);\n  }\n`,pt="return 1.0 / (1.0 + exp(-1.0 * a));",ft="return sign(a);",mt="return sin(a);",gt="\n  let e2x = exp(a);\n  return (e2x - 1.0 / e2x) / 2.0;\n",yt="\n  let epsilon = 1.1920928955078125e-7;\n  let threshold = log(epsilon) + 2.0;\n\n  let too_large = a > -threshold;\n  let too_small = a < threshold;\n  let exp_a = exp(a);\n\n  if (too_large) {\n    return a;\n  } else if (too_small) {\n    return exp_a;\n  } else {\n    return log(exp_a + 1.0);\n  }\n",xt="return sqrt(a);",bt="return a * a;",wt="\n  if (isnan(a)) {\n    return a;\n  }\n\n  return select(uniforms.stepAlpha, 1.0, a > 0.0);\n",vt="return tan(a);",St="\n  let e2x = exp(-2.0 * abs(a));\n  return sign(a) * (1.0 - e2x) / (1.0 + e2x);\n",kt="return f32(i32((a)));";function Ct(e,t){switch(e){case Ee.ABS:return $e;case Ee.ACOS:return Fe;case Ee.ACOSH:return Ne;case Ee.ASIN:return De;case Ee.ASINH:return _e;case Ee.ATAN:return Me;case Ee.ATANH:return Oe;case Ee.COS:return Ue;case Ee.COSH:return We;case Ee.CEIL:return Be;case Ee.ELU:return t?Ge:He;case Ee.ERF:return je;case Ee.EXP:return Ke;case Ee.EXPM1:return Ve;case Ee.FLOOR:return Xe;case Ee.IS_FINITE:return qe;case Ee.IS_INF:return Ye;case Ee.IS_NAN:return Ze;case Ee.LINEAR:return Qe;case Ee.LOG:return Je;case Ee.LOG1P:return et;case Ee.LOGICAL_NOT:return tt;case Ee.NEG:return nt;case Ee.LEAKYRELU:return t?rt:it;case Ee.RECIPROCAL:return ot;case Ee.RELU:return t?lt:at;case Ee.RELU6:return t?ut:st;case Ee.ROUND:return ht;case Ee.RSQRT:return dt;case Ee.SELU:return ct;case Ee.SIGMOID:return pt;case Ee.SIGN:return ft;case Ee.SIN:return mt;case Ee.SINH:return gt;case Ee.SOFTPLUS:return yt;case Ee.SQRT:return xt;case Ee.SQUARE:return bt;case Ee.STEP:return wt;case Ee.TAN:return vt;case Ee.TANH:return St;case Ee.TO_INT:return kt;default:throw new Error(`BinaryType ${e} is not implemented!`)}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function It(e,t=!1,n=!1,i=3){if(null===e)return"";let r="";if("linear"===e)r=Ct(Ee.LINEAR);else if("relu"===e)r=Ct(Ee.RELU,n);else if("elu"===e)r=Ct(Ee.ELU,n);else if("relu6"===e)r=Ct(Ee.RELU6,n);else if("prelu"===e)r=Le(te.PRELU,n);else if("sigmoid"===e)r=Ct(Ee.SIGMOID,n);else{if("leakyrelu"!==e)throw new Error(`Activation ${e} has not been implemented for the WebGPU backend.`);r=Ct(Ee.LEAKYRELU,n)}const o=n?4:1,a=v(o);let s="";return s=t?`\n      fn activation(a : ${a}, coords : vec${i}<i32>) -> ${a} {\n        let b = getPreluActivationWeightsByOutputCoords(coords);\n        ${r}\n      }`:`\n      fn activation(a : ${a}, coords : vec${i}<i32>) -> ${a} {\n        ${r}\n      }`,s}function Rt(e,t){return`\n      ${e?"value = value + getBiasByOutputCoords(coords);":""}\n      ${t?"value = activation(value, coords);":""}\n      `}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pt(e,t,n=!1,i=!1,r=!1,o=1){u.ZSL.assert(e&&1===o||!e,(()=>`transposeA ${e} is not compatible with component size ${o}`));const a=`\n      ${e?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}\n\n    `,s=t?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`\n  fn mm_readA(batch: i32, row: i32, col: i32) -> ${v(o)} {\n    var value = ${v(o)}(0.0);\n    ${n&&r?a:`\n    ${e?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}\n    {\n      ${a}\n    }\n    `}\n    return value;\n  }\n\n  fn mm_readB(batch: i32, row: i32, col: i32) -> ${v(o)} {\n    var value = ${v(o)}(0.0);\n    ${s}\n    return value;\n  }\n  `}function zt(e,t,n,i,r=!1,o=!1,a=!1,s=1){return`\n  ${Pt(n,i,r,o,a,s)}\n  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${v(s)}) {\n    ${r&&o?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}\n    {\n      var value = valueIn;\n      let coords = vec3<i32>(batch, row, col);\n      ${Rt(e,t)}\n      setOutputAtCoords(coords[0], coords[1], coords[2], value);\n    }\n  }\n  `}const At=(e,t)=>e?`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol * ${t});\n        `:`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRow + innerRow,\n          kStart + inputCol * ${t});\n        `,Tt=(e,t,n,i)=>{if(e)return`\n      for (var k = 0; k < ${i}; k++) {\n        let BCached0 = mm_Bsub[k][tileCol];\n        let ACached0 = mm_Asub[k][localRow];\n        for (var i = 0; i < ${n}; i++) {\n          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);\n        }\n      }`;{let e="",r="";for(let n=0;n<t;n++)e+=`let BCached${n} = mm_Bsub[k * ${t} + ${n}][tileCol];`,r+=`acc[i] = fma(BCached${n}, vec4<f32>(ACached[${n}]), acc[i]);`;return`\n      for (var k = 0; k < ${i/t}; k++) {\n        ${e}\n        for (var i = 0; i < ${n}; i++) {\n          let ACached = mm_Asub[tileRow + i][k];\n          ${r}\n        }\n      }`}};function Lt(e,t,n=!1,i=32,r=!1,o=32,a=!1){const s=t[1]*e[1],l=t[0]*e[0],h=n?s:i,d=n?i:s,c=h/t[0],p=i/t[1],f=e[1],m=e[0];return u.ZSL.assert((n&&4===c&&4===e[1]||!n&&(3===c||4===c))&&h%t[0]===0&&i%t[1]===0&&4===e[0],(()=>`If transposeA ${n} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.\n          Otherwise, innerElementSize ${c} must be 3 or 4.\n      tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`)),`\n  var<workgroup> mm_Asub : array<array<vec${c}<f32>, ${h/c}>, ${d}>;\n  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${l/e[0]}>, ${i}>;\n\n  ${C()} {\n    let localRow = i32(localId.y);\n    let tileRow = localRow * ${f};\n    let tileCol = i32(localId.x);\n\n    let globalRow = i32(globalId.y) * ${f};\n    let globalCol = i32(globalId.x) * ${m};\n    let batch = ${r?"0":"i32(globalId.z)"};\n    let batchA = ${r||!a?"batch":"batch % uniforms.aShape[0]"};\n    let batchB = ${r||!a?"batch":"batch % uniforms.bShape[0]"};\n    let globalRowStart = i32(workgroupId.y) * ${s};\n\n    let numTiles = ${r?`${Math.ceil(o/i)}`:`(uniforms.dimInner - 1) / ${i} + 1`};\n    var kStart = ${r?`i32(globalId.z) * ${o}`:"0"};\n\n    var acc: array<vec4<f32>, ${f}>;\n\n    // Loop over shared dimension.\n    let tileRowB = localRow * ${p};\n    for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var innerRow = 0; innerRow < ${f}; innerRow++) {\n            let inputRow = tileRow + innerRow;\n            let inputCol = tileCol;\n            ${At(n,c)}\n        }\n\n        // Load one tile of B into local memory.\n        for (var innerRow = 0; innerRow < ${p}; innerRow++) {\n            let inputRow = tileRowB + innerRow;\n            let inputCol = tileCol;\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);\n        }\n        kStart = kStart + ${i};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        ${Tt(n,c,f,i)}\n        workgroupBarrier();\n    }\n\n    for (var innerRow = 0; innerRow < ${f}; innerRow++) {\n        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);\n    }\n  }`}const Et=e=>e?"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol);\n        ":"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRowStart + inputRow,\n          kStart + inputCol);\n        ",$t=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];";function Ft(e,t,n=!1,i=32,r=!1,o=32,a=!1,s=!1){const l=e[1]*t[1],h=e[0]*t[0],d=n?l:i,c=n?i:l;u.ZSL.assert(c%t[1]===0&&d%t[0]===0&&i%t[1]===0,(()=>`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`));const p=c/t[1],f=d/t[0],m=i/t[1],g=e[1],y=e[0],x=a?`\n      let localRow = i32(localId.y);\n      let localCol = i32(localId.x);\n      let globalRowStart = i32(workgroupId.y) * ${l};\n      let globalColStart = i32(workgroupId.x) * ${h};\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {\n          for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {\n            ${Et(n)}\n          }\n        }\n        // Load one tile of B into local memory.\n        for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {\n              for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n              kStart + inputRow,\n              globalColStart + inputCol);\n          }\n        }\n        kStart = kStart + ${i};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        var BCached : array<f32, ${y}>;\n        for (var k = 0; k < ${i}; k++) {\n          for (var inner = 0; inner < ${y}; inner++) {\n            BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];\n          }\n          for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n            let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}\n            for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n              acc[innerRow][innerCol] =\n                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n            }\n          }\n        }\n        workgroupBarrier();\n      }\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        let gRow = globalRowStart + localRow + innerRow * ${t[1]};\n        for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n          let gCol = globalColStart + localCol + innerCol * ${t[0]};\n          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);\n        }\n      }\n      `:`\n  let tileRow = i32(localId.y) * ${g};\n  let tileCol = i32(localId.x) * ${y};\n\n  let globalRow = i32(globalId.y) * ${g};\n  let globalCol = i32(globalId.x) * ${y};\n  let globalRowStart = i32(workgroupId.y) * ${l};\n\n  let tileRowA = i32(localId.y) * ${p};\n  let tileColA = i32(localId.x) * ${f};\n  let tileRowB = i32(localId.y) * ${m};\n  // Loop over shared dimension.\n  for (var t = 0; t < numTiles; t++) {\n    // Load one tile of A into local memory.\n    for (var innerRow = 0; innerRow < ${p}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${f}; innerCol++) {\n        let inputRow = tileRowA + innerRow;\n        let inputCol = tileColA + innerCol;\n        ${Et(n)}\n      }\n    }\n\n    // Load one tile of B into local memory.\n    for (var innerRow = 0; innerRow < ${m}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n        let inputRow = tileRowB + innerRow;\n        let inputCol = tileCol + innerCol;\n        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n          kStart + inputRow,\n          globalCol + innerCol);\n      }\n    }\n    kStart = kStart + ${i};\n    workgroupBarrier();\n\n    // Compute acc values for a single thread.\n    var BCached : array<f32, ${y}>;\n    for (var k = 0; k < ${i}; k++) {\n      for (var inner = 0; inner < ${y}; inner++) {\n        BCached[inner] = mm_Bsub[k][tileCol + inner];\n      }\n\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        ${$t(n)}\n        for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n          acc[innerRow][innerCol] =\n              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n        }\n      }\n    }\n\n    workgroupBarrier();\n  }\n\n  for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n    for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n      mm_write(batch, globalRow + innerRow, globalCol + innerCol,\n          acc[innerRow][innerCol]);\n    }\n  }\n  `;return`\n    var<workgroup> mm_Asub : array<array<f32, ${d}>, ${c}>;\n    var<workgroup> mm_Bsub : array<array<f32, ${h}>, ${i}>;\n\n    ${C()} {\n      let batch = ${r?"0":"i32(globalId.z)"};\n      let batchA = ${r||!s?"batch":"batch % uniforms.aShape[0]"};\n      let batchB = ${r||!s?"batch":"batch % uniforms.bShape[0]"};\n      let numTiles = ${r?`${Math.ceil(o/i)}`:`(uniforms.dimInner - 1) / ${i} + 1`};\n      var kStart = ${r?`i32(globalId.z) * ${o}`:"0"};\n\n      var acc : array<array<f32, ${y}>, ${g}>;\n\n      // Without this initialization strange values show up in acc.\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n          acc[innerRow][innerCol] = 0.0;\n        }\n      }\n      ${x}\n    }\n  `}const Nt=e=>e?"\n      mm_readA(batchA, colA, globalRow),\n      mm_readA(batchA, colA + 1, globalRow),\n      mm_readA(batchA, colA + 2, globalRow),\n      mm_readA(batchA, colA + 3, globalRow)\n  ":"\n      mm_readA(batchA, globalRow, colA),\n      mm_readA(batchA, globalRow, colA + 1),\n      mm_readA(batchA, globalRow, colA + 2),\n      mm_readA(batchA, globalRow, colA + 3)\n  ";function Dt(e,t=!1){u.ZSL.assert(1===e[1]&&1===e[2],(()=>`A linear work group size is required. But got ${e}.`));const n=4*e[0];return`\n    var<workgroup> mm_Asub : array<vec4<f32>, ${e[0]}>;\n\n    ${C()} {\n      let tileCol = i32(localId.x);\n      let globalCol = i32(globalId.x);\n      let globalRow = i32(globalId.y);\n\n      let numTiles = (uniforms.dimInner - 1) / ${n} + 1;\n      let batch = i32(globalId.z);\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      // Without this initialization strange values show up in acc.\n      var acc = 0.0;\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        let colA = t * ${n} + tileCol * 4;\n        mm_Asub[tileCol] = vec4<f32>(${Nt(t)});\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < ${n/4}; k++) {\n          let rowB = t * ${n} + k * 4;\n          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),\n                              mm_readB(batchB, rowB + 1, globalCol),\n                              mm_readB(batchB, rowB + 2, globalCol),\n                              mm_readB(batchB, rowB + 3, globalCol));\n\n          let ACached = mm_Asub[k];\n          acc = acc + dot(ACached, BCached);\n        }\n\n        workgroupBarrier();\n      }\n\n      mm_write(batch, globalRow, globalCol, acc);\n    }\n  `}class _t{constructor(e,t,n=!1,i=!1,r=null,o=null,a=null,s=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0]};const u=n?e[1]:e[2];if(this.isVec4=(u%4===0&&!n||t[1]%4===0&&n)&&t[2]%4===0&&!i,this.outputComponent=this.isVec4?4:1,this.isVectorA=1===t[1]&&!n,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const e=H(t[1],u,t[2],n);this.workgroupSize=e.workgroupSize,this.elementsPerThread=e.elementsPerThread}this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const l=null!=r,h=null!=a;l&&this.variableNames.push("bias"),h&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=s,this.transposeA=n,this.transposeB=i,this.addBias=l,this.activation=o,this.hasPreluActivationWeights=h,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(t[1],t[2],u),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${n}_${i}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(e,t,n){const i=this.workgroupSize[1]*this.elementsPerThread[1],r=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=4*this.workgroupSize[0]:this.tileInner=r;const o=e%i===0,a=t%r===0,s=n%this.tileInner===0;return[o,a,s]}getUserCode(){const e=`\n      ${It(this.activation,this.hasPreluActivationWeights,this.isVec4)}\n      ${zt(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}\n      ${this.isVec4?Lt(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?Dt(this.workgroupSize,this.transposeA):Ft(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mt(e){return`\n    var<workgroup> sumValues : array<f32, ${e}>;\n    ${C()} {\n      let coords = getOutputCoords();\n      let batch = coords[0];\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      let row = coords[1];\n      let col = coords[2];\n      var sum = 0.0;\n      let Length = uniforms.dimInner;\n      for (var k = i32(localId.x); k < Length; k = k + ${e}) {\n        let dataA = mm_readA(batchA, row, k);\n        let dataB = mm_readB(batchB, k, col);\n        sum = sum + dataA * dataB;\n      }\n      sumValues[localId.x] = sum;\n      workgroupBarrier();\n\n      for(var currentSize = ${e/2}u; currentSize > 1u;\n          currentSize = currentSize / 2u) {\n        if (localId.x < currentSize)\n        {\n          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (localId.x == 0u) {\n        sum = sumValues[0] + sumValues[1];\n        mm_write(batch, row, col, sum);\n      }\n    }\n  `}class Ot{constructor(e,t=!1,n=!1,i=null,r=null,o=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize);const a=null!=i,s=null!=o;a&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights"),this.transposeA=t,this.transposeB=n,this.addBias=a,this.activation=r,this.hasPreluActivationWeights=s,this.shaderKey=`matMulReduce_${this.activation}_${t}_${n}`}getUserCode(){const e=`\n      ${It(this.activation,this.hasPreluActivationWeights)}\n      ${zt(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${Mt(this.workgroupSize[0])}\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bt(e){const t=e[1],n=e[0],i=t>n?t:n;return`\n  var<workgroup> mm_Asub : array<array<f32, ${i}>, ${t}>;\n  var<workgroup> mm_Bsub : array<array<f32, ${n}>, ${i}>;\n\n  // If the output size is small for matrix multiplication, avoid to use vec4\n  // and handle some elements per thread to optimally utilize the ALU.\n  // Read data from global memory to registers firstly, then store them into\n  // shared memory, so it is instruction-Level parallelism for arithmetic\n  // operations and others handle IO operations between barrier api, makes ALU\n  // and load/store units work simultaneously, could improves the performance.\n  ${C()} {\n    let tileRow = i32(localId.y);\n    let tileCol = i32(localId.x);\n    let globalRow = i32(globalId.y);\n    let globalCol = i32(globalId.x);\n    let batch = i32(globalId.z);\n    let batchA = batch % uniforms.aShape[0];\n    let batchB = batch % uniforms.bShape[0];\n\n    // uniforms.dimInner should be greater than 0.\n    let numTiles = (uniforms.dimInner - 1) / ${i} + 1;\n    var acc = 0.0;\n\n    var globalColA = tileCol;\n    var globalRowB = 0;\n    var regA = mm_readA(batchA, globalRow, globalColA);\n    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n    globalColA = globalColA + ${i};\n    globalRowB = globalRowB + ${i};\n\n    for (var t = 0; t < numTiles; t = t + 1) {\n      mm_Asub[tileRow][tileCol] = regA;\n      mm_Bsub[2 * tileRow][tileCol] = regB0;\n      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;\n\n      workgroupBarrier();\n\n      regA = mm_readA(batchA, globalRow, globalColA);\n      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n      globalColA = globalColA + ${i};\n      globalRowB = globalRowB + ${i};\n\n      for (var k = 0; k < ${i}; k = k + 1) {\n        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];\n      }\n      workgroupBarrier();\n    }\n\n    mm_write(batch, globalRow, globalCol, acc);\n  }\n  `}class Ut{constructor(e,t,n,i=!1,r=!1,o=null,a=null,s=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=n,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(n[2]/this.workgroupSize[0]),Math.ceil(n[1]/this.workgroupSize[1]),n[0]];const u=null!=o;u&&this.variableNames.push("bias");const l=null!=s;l&&this.variableNames.push("preluActivationWeights"),this.transposeA=i,this.transposeB=r,this.addBias=u,this.activation=a,this.hasPreluActivationWeights=l,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${i}_${r}`}getUserCode(){const e=`\n      ${It(this.activation,this.hasPreluActivationWeights)}\n      ${zt(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${Bt(this.workgroupSize)}\n    `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Wt{constructor(e,t,n=!1,i=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,u.ZSL.assert(1===e[0],(()=>"MatMulSplitKProgram only supports batch = 1.")),this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const r=(n&&this.outputShape[1]%4===0||!n&&t%4===0)&&this.outputShape[2]%4===0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=r?4:1,r||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=V(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],t],this.workgroupSize,this.elementsPerThread),this.transposeA=n,this.transposeB=i,this.shaderKey=`matMulSplitK_${n}_${i}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const e=this.outputComponent,t=`\n      ${Pt(!1,this.transposeB,!1,!1,!1,e)}\n      fn mm_write(batch: i32, row : i32, col : i32, value : ${v(e)}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n          let coords = vec3<i32>(batch, row, col);\n          let flatIndex = getOutputIndexFromCoords(coords);\n          // The problem is that we should initialize output to zero before using.\n          // Otherwise, the original value will be added to the result.\n          for (var i = 0; i < ${e}; i = i + 1) {\n            ${x("&result[flatIndex + i]",""+(e>1?"value[i]":"value"),"float32")}\n          }\n        }\n      }\n      ${4===e?Lt(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):Ft(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}\n    `;return t}}class Vt{constructor(e,t=null,n=null,i=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=null!=t,this.hasPreluActivationWeights=null!=i,this.activation=n,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${n}`}getUserCode(){return`\n    ${It(this.activation,this.hasPreluActivationWeights)}\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        var value = getXByOutputIndex(index);\n        ${Rt(this.addBias,this.activation)}\n        setOutputAtIndex(index, value);\n      }\n    }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ht{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        setOutputAtIndex(index, uniforms.value);\n      }\n    }\n  `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gt(e){const{backend:t,attrs:n}=e,{shape:i,value:r}=n;let{dtype:o}=n;if(o=o||u.ZSL.inferDtype(r),"string"===o){const e=u.ZSL.getArrayFromDType(o,u.ZSL.sizeFromShape(i));return e.fill(r),t.makeTensorInfo(i,o,e)}{const e=new Ht(i),n=[{type:"float32",data:[r]}];return t.runWebGPUProgram(e,[],o,n)}}const jt={kernelName:u.SQl,backendName:"webgpu",kernelFunc:Gt};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kt(e){const{inputs:t,attrs:n}=e,{x:i}=t,{shape:r}=n,o=u.ZSL.sizeFromShape(i.shape),a=u.ZSL.inferFromImplicitShape(r,o),s=u.ZSL.sizeFromShape(a);return u.ZSL.assert(o===s,(()=>`The new shape (${a}) has ${s} elements and the old shape (${i.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`)),e.backend.incRef(i.dataId),{dataId:i.dataId,shape:a,dtype:i.dtype}}const Xt={kernelName:u.R23,backendName:"webgpu",kernelFunc:Kt};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qt({a:e,b:t,transposeA:n,transposeB:i,backend:r,bias:o=null,preluActivationWeights:a=null,leakyreluAlpha:s=0,activation:l=null}){const h=e.shape.length,d=t.shape.length,c=n?e.shape[h-2]:e.shape[h-1],p=i?t.shape[d-1]:t.shape[d-2],f=n?e.shape[h-1]:e.shape[h-2],m=i?t.shape[d-2]:t.shape[d-1],g=e.shape.slice(0,-2),y=t.shape.slice(0,-2),x=u.ZSL.sizeFromShape(g),b=u.ZSL.sizeFromShape(y),w=u.ZEY.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)),v=w.concat([f,m]);u.ZSL.assert(c===p,(()=>`Error in matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${i} must match.`));const S=n?[x,c,f]:[x,f,c],k=i?[b,m,p]:[b,p,m],C=Kt({inputs:{x:e},backend:r,attrs:{shape:S}}),I=Kt({inputs:{x:t},backend:r,attrs:{shape:k}}),R=[C,I],P=Math.max(x,b),z=[C,I],A=[{type:"int32",data:[f]},{type:"int32",data:[m]},{type:"int32",data:[c]}];let T,L;const E=[P,f,m];let $=(0,u._K2)().get("WEBGPU_MATMUL_PROGRAM_TYPE");if($<0){const e=(0,u._K2)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),t=e>0?e:r.thresholdToIncreaseWorkgroups,n=P*Math.ceil(f/32)*Math.ceil(m/32),i=n<=t||f<=8&&n<=2*t;$=i?P*f*m<=128?Z.MatMulReduceProgram:1===P&&p>=2e3?Z.MatMulSplitKProgram:Z.MatMulSmallOutputSizeProgram:Z.MatMulPackedProgram}switch($){case Z.MatMulReduceProgram:T=new Ot(E,n,i,o,l,a);break;case Z.MatMulSplitKProgram:if(L=Gt({backend:r,attrs:{shape:E,value:0,dtype:e.dtype}}),T=new Wt(E,p,n,i),o||l){L=r.runWebGPUProgram(T,z,e.dtype,A,L);const t=new Vt(L.shape,o,l,a);let n=null;const i=[L];o&&i.push(o),a&&i.push(a),"leakyrelu"===l&&(n=[{type:"float32",data:[s]}],t.uniforms+=" alpha : f32,");const u=r.runWebGPUProgram(t,i,L.dtype,n);R.push(L);const h=Kt({inputs:{x:u},backend:r,attrs:{shape:v}});R.push(u);for(const e of R)r.disposeData(e.dataId);return h}break;case Z.MatMulSmallOutputSizeProgram:T=new Ut(S,k,E,n,i,o,l,a);break;case Z.MatMulPackedProgram:const t=r.adapterInfo.isIntel();T=new _t(S,E,n,i,o,l,a,t);break;default:throw new Error(`Unsupported MatMulProgramType ${$}.`)}o&&z.push(o),a&&z.push(a),"leakyrelu"===l&&(A.push({type:"float32",data:[s]}),T.uniforms+=" alpha : f32,"),L=r.runWebGPUProgram(T,z,e.dtype,A,L);const F=Kt({inputs:{x:L},backend:r,attrs:{shape:v}});R.push(L);for(const u of R)r.disposeData(u.dataId);return F}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Yt(e){const{inputs:t,backend:n,attrs:i}=e,{a:r,b:o,bias:a,preluActivationWeights:s}=t,{transposeA:u,transposeB:l,activation:h,leakyreluAlpha:d}=i;return qt({a:r,b:o,transposeA:u,transposeB:l,backend:n,bias:a,preluActivationWeights:s,leakyreluAlpha:d,activation:h})}const Zt={kernelName:u.Dr,backendName:"webgpu",kernelFunc:Yt};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Qt{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=u.C0T.assertAndGetBroadcastShape(t,n),this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${e}`,this.op=e}getUserCode(){const e=Le(this.op,!1),t=`\n      fn binaryOpComplex(\n          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {\n        ${e}\n      }\n\n      ${C("index")} {\n        if(index < uniforms.size) {\n          let areal = getARealByOutputIndex(index);\n          let aimag = getAImagByOutputIndex(index);\n          let breal = getBRealByOutputIndex(index);\n          let bimag = getBImagByOutputIndex(index);\n          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Jt{constructor(e,t,n){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=u.C0T.assertAndGetBroadcastShape(t,n),this.dispatchLayout=K(this.outputShape),this.op=e,this.useSharedMemoryWithA=t.length<=1&&n.length>1&&t[0]<128,this.useSharedMemoryWithB=n.length<=1&&t.length>1&&n[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?n[0]:t[0],this.shaderKey=`binary_${e}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const i=t.length>0&&t[t.length-1]%4===0,r=n.length>0&&n[n.length-1]%4===0;i&&r?(this.outputComponent=4,this.variableComponents=[4,4]):i&&(u.ZSL.isScalarShape(n)||1===n[n.length-1])||r&&(u.ZSL.isScalarShape(t)||1===t[t.length-1])?(this.outputComponent=4,this.variableComponents=i?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${e}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let e;const t=4===this.outputComponent?"vec4<f32>":"f32",n=`\n    fn binaryOperation(a : ${t}, b : ${t}) -> ${t} {\n      ${Le(this.op,4===this.outputComponent)}\n    };\n    `;if("shared"===this.type){const t=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",i=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);\n          let b = sharedBuf[${t}];`:`let a = sharedBuf[${t}];\n          let b = getBByOutputIndex(index);`;e=`\n        ${n}\n        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;\n        ${C("index")} {\n          // Fill in the shared memory buffer.\n          let localIndex = i32(localId.x);\n          if(localIndex < ${this.lastDimensionSize}) {\n            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);\n          }\n          workgroupBarrier();\n\n          if(index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            ${i}\n            setOutputAtIndex(index, binaryOperation(a, b));\n          }\n        }\n        `}else e=`\n       ${n}\n       ${C("index")} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index * ${this.outputComponent});\n           let a = ${t}(getAByOutputCoords(coords));\n           let b = ${t}(getBByOutputCoords(coords));\n           setOutputAtIndex(index, binaryOperation(a, b));\n         }\n       }\n       `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function en(e){const{inputs:t}=e,{x:n}=t;return e.backend.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}const tn={kernelName:u.lzr,backendName:"webgpu",kernelFunc:en};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function nn(e){const{inputs:t,backend:n}=e,{real:i,imag:r}=t,o=n.makeTensorInfo(i.shape,"complex64"),a=n.tensorMap.get(o.dataId),s=en({inputs:{x:i},backend:n}),u=en({inputs:{x:r},backend:n});return a.complexTensorInfos={real:s,imag:u},o}const rn={kernelName:u.pr3,backendName:"webgpu",kernelFunc:nn};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class on{constructor(e,t,n=""){this.variableNames=["A"],this.size=!0;const i=128;this.workgroupSize=[i,1,1],this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=t,""!==n&&(this.uniforms=n),this.shaderKey=`unary_${t}`}getUserCode(){return`\n      fn unaryOperation(a : f32) -> f32 {\n        ${Ct(this.op,!1)}\n      }\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          setOutputAtIndex(index, unaryOperation(a));\n        }\n      }\n      `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function an({opType:e,cpuKernelImpl:t,dtype:n}){return({inputs:i,backend:r})=>{const{x:o}=i,a=r,s=n||o.dtype;if(a.shouldExecuteOnCPU([o])&&null!=t){const e=a.tensorMap.get(o.dataId),n=t(e.values,s);return a.makeTensorInfo(o.shape,s,n)}const u=new on(o.shape,e);return a.runWebGPUProgram(u,[o],s)}}function sn({opType:e,cpuKernelImpl:t,supportsComplex:n=!1,dtype:i}){return({inputs:r,backend:o})=>{const{a:a,b:s}=r,l=o;if(n&&"complex64"===a.dtype){const t=l.tensorMap.get(a.dataId),n=l.tensorMap.get(s.dataId);let i,r;if(e!==te.MUL)[i,r]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map((t=>{const[n,i]=t,r={dataId:n.dataId,dtype:n.dtype,shape:a.shape},o={dataId:i.dataId,dtype:i.dtype,shape:s.shape},h=new Jt(e,a.shape,s.shape);return l.runWebGPUProgram(h,[r,o],(0,u.TuY)(n.dtype,i.dtype))}));else{const e=new Qt(te.COMPLEX_MULTIPLY_REAL,a.shape,s.shape),o=new Qt(te.COMPLEX_MULTIPLY_IMAG,a.shape,s.shape),u=[{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:a.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:s.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:s.shape}];i=l.runWebGPUProgram(e,u,"float32"),r=l.runWebGPUProgram(o,u,"float32")}const o=nn({inputs:{real:i,imag:r},backend:l});return l.disposeData(i.dataId),l.disposeData(r.dataId),o}const h=i||(0,u.TuY)(a.dtype,s.dtype);if(("string"===a.dtype||"string"===s.dtype||l.shouldExecuteOnCPU([a,s]))&&null!=t){const e=l.tensorMap.get(a.dataId).values,n=l.tensorMap.get(s.dataId).values,i="string"===a.dtype?u.C0T.fromUint8ToStringArray(e):e,r="string"===a.dtype?u.C0T.fromUint8ToStringArray(n):n,[o,d]=t(a.shape,s.shape,i,r,h);return l.makeTensorInfo(d,h,o)}const d=new Jt(e,a.shape,s.shape);return l.runWebGPUProgram(d,[a,s],h)}}var un=n(4082);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const{mx:ln,ct:hn,YG:dn,hH:cn,z3:pn,sG:fn,uM:mn,vS:gn,C1:yn,qB:xn,GG:bn,lg:wn,rq:vn,cu:Sn,WR:kn,px:Cn,jC:In,He:Rn,hE:Pn,BF:zn,Dk:An,cl:Tn,_B:Ln,qy:En,Zy:$n,bu:Fn,dH:Nn,HS:Dn,eW:_n,GK:Mn,dl:On,Dw:Bn,xT:Un,_X:Wn,wz:Vn}=un,Hn=an({opType:Ee.ABS,cpuKernelImpl:Nn}),Gn={kernelName:u.ljI,backendName:"webgpu",kernelFunc:Hn},jn=an({opType:Ee.ACOS}),Kn={kernelName:u.Vvy,backendName:"webgpu",kernelFunc:jn},Xn=an({opType:Ee.ACOSH}),qn={kernelName:u.PH8,backendName:"webgpu",kernelFunc:Xn},Yn=sn({opType:te.ADD,cpuKernelImpl:ln,supportsComplex:!0}),Zn={kernelName:u.OMN,backendName:"webgpu",kernelFunc:Yn};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Qn{constructor(e){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e[0],this.variableNames=e.map(((e,t)=>`T${t}`)),this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const e=[];this.variableNames.forEach((t=>{e.push(`let v${t} = get${t}ByOutputCoords(coords);`)}));const t=this.variableNames.map((e=>`v${e}`)).join(" + "),n=`\n      ${C("index")} {\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if (flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            ${e.join("\n        ")}\n            setOutputAtIndex(flatIndex, ${t});\n          }\n        }\n      }\n    `;return n}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Jn(e){const{inputs:t,backend:n}=e,i=t;if(1===i.length)return en({inputs:{x:i[0]},backend:n});const r=i.map((e=>e.dtype)).reduce(((e,t)=>(0,u.TuY)(e,t))),o=i.map((e=>e.shape)),a=new Qn(o);return n.runWebGPUProgram(a,i,r)}const ei={kernelName:u.EkD,backendName:"webgpu",kernelFunc:Jn};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ti{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[16,16,1];const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[t[i]];this.outputShape=n,this.dispatchLayout={x:[0],y:[1]},this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){u.ZSL.assert(this.workgroupSize[0]===this.workgroupSize[1],(()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`));const e=this.workgroupSize[0],t=`\n      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;\n      ${C()} {\n        var x = i32(workgroupId.x) * ${e} + i32(localId.x);\n        var y = i32(workgroupId.y) * ${e} + i32(localId.y);\n        let width = uniforms.outShape[0];\n        let height = uniforms.outShape[1];\n        if (x < width && y < height) {\n          tile[localId.y][localId.x] = f32(A[y * width + x]);\n        }\n        workgroupBarrier();\n\n        x = i32(workgroupId.y) * ${e} + i32(localId.x);\n        y = i32(workgroupId.x) * ${e} + i32(localId.y);\n        if (x < height && y < width) {\n          setOutputAtIndex((y * height + x), tile[localId.x]\n            [localId.y]);\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ni{constructor(e,t){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[t[i]];this.outputShape=n,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=t,this.shaderKey=`transpose_${t}`}getUserCode(){const e=S(this.outputShape.length),t=ii(this.newDim),n=`\n      ${C("index")} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(\n              ${e}(${t}), uniforms.aShape)]);\n          }\n        }\n      }\n    `;return n}}function ii(e){const t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const n=new Array(t);for(let i=0;i<e.length;i++)n[e[i]]=`coords.${k(i)}`;return n.join()}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ri(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{perm:o}=i,a=n,s=r.shape.length,l=new Array(s);for(let u=0;u<l.length;u++)l[u]=r.shape[o[u]];if(n.shouldExecuteOnCPU([r])){const e=a.tensorMap.get(r.dataId),t=e.values,i=Wn(t,r.shape,r.dtype,o,l);return n.makeTensorInfo(l,r.dtype,i)}if(2===r.shape.length&&u.ZSL.arraysEqual(o,[1,0])){const e=new ti(r.shape,o);return a.runWebGPUProgram(e,[r],r.dtype)}const h=new ni(r.shape,o);return a.runWebGPUProgram(h,[r],r.dtype)}const oi={kernelName:u.wx0,backendName:"webgpu",kernelFunc:ri};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ai{constructor(e,t,n){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[e.batchSize,e.inSize];const[i]=u.C0T.computeOutAndReduceShapes(this.inputShape,[1]);this.outputShape=0===i.length?[1]:i,e.inSize>=32768&&n>=512?this.workgroupSize=[512,1,1]:e.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=t,this.shaderKey=`reduce_${t}`}getUserCode(){let e="",t="0.0";const n=this.workgroupSize[0];"min"===this.reduceType||"max"===this.reduceType?(e=`\n         if (isnan(candidate)) {\n          bestValue = uniforms.NAN;\n         } else if (!isnan(bestValue) && candidate ${"min"===this.reduceType?"<":">"} bestValue)\n           {  bestValue = candidate; }`,t="f32(x[offset])"):"sum"===this.reduceType||"mean"===this.reduceType?e=" bestValue = bestValue + candidate; ":"prod"===this.reduceType?(e=" bestValue = bestValue * candidate; ",t="1.0"):"all"===this.reduceType?(e=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",t="1.0"):"any"===this.reduceType&&(e=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",t="0.0");const i="mean"===this.reduceType?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);",r=`\n         var<workgroup> xBestValues : array<f32, ${n}>;\n       `,o=`\n       fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n       }\n\n       ${r}\n       fn getOffset(outputIndex : i32) -> i32 {\n         let outputCoords = getCoordsFromIndex(outputIndex);\n         let offset = ${1===this.outputShape.length?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;\n          return offset;\n       }\n       ${C("index")} {\n         let outputIndex = index / ${n};\n         let offset = getOffset(outputIndex);\n         var bestValue = ${t};\n         let Length = uniforms.reduceSize;\n         let WorkPerThread = DIV_CEIL(u32(Length), ${n}u);\n         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;\n             k = k + ${n}) {\n           let candidate = f32(x[offset + k]);\n           ${e}\n         }\n         xBestValues[localId.x] = bestValue;\n         workgroupBarrier();\n\n         var reduceSize = min(u32(Length), ${n}u);\n         for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n             currentSize = reduceSize / 2u) {\n           let interval = DIV_CEIL(reduceSize, 2u);\n           if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            ${e}\n            xBestValues[localId.x] = bestValue;\n           }\n           reduceSize = interval;\n           workgroupBarrier();\n         }\n\n         if (localId.x == 0u && outputIndex < uniforms.size) {\n          ${i}\n        }\n       }\n     `;return o}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const si={mean:"float32",all:"bool",any:"bool"};function ui(e,t,n,i,r){const o=e.shape.length,a=[],s=u.ZSL.parseAxisParam(t,e.shape);let l=s;const h=u.C0T.getAxesPermutation(l,o);let d=e;null!=h&&(d=ri({inputs:{x:e},attrs:{perm:h},backend:r}),l=u.C0T.getInnerMostAxes(l.length,o),a.push(d)),u.C0T.assertAxesAreInnerMostDims(i,l,o);const[c,p]=u.C0T.computeOutAndReduceShapes(d.shape,l);let f,m=c;if(n&&(m=u.C0T.expandShapeToKeepDim(c,s)),"max"!==i&&"prod"!==i||!r.shouldExecuteOnCPU([d])){const t=u.ZSL.sizeFromShape(p),n=u.ZSL.sizeFromShape(d.shape),o=n/t,s={windowSize:t,inSize:t,batchSize:o,outSize:1},l=si[i]||(0,u.chL)(e.dtype),h=[{type:"int32",data:[t]}],c=new ai(s,i,r.device.limits.maxComputeWorkgroupSizeX),g=r.runWebGPUProgram(c,[d],l,h);a.push(g),f=Kt({inputs:{x:g},attrs:{shape:m},backend:r})}else{const t=r.tensorMap.get(d.dataId).values;switch(i){case"max":const n=In(t,u.ZSL.sizeFromShape(p),m,e.dtype);f=r.makeTensorInfo(m,e.dtype,n);break;case"prod":const{outVals:o,outShape:a,outDtype:s}=Ln(d.shape,d.dtype,t,l);f=r.makeTensorInfo(a,s,o);break;default:throw new Error(`${i} CPU implementation is not yet supported.`)}}return a.forEach((e=>r.disposeData(e.dataId))),f}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function li(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{keepDims:o,axis:a}=i;return ui(r,a,o,"all",n)}const hi={kernelName:u.u8Z,backendName:"webgpu",kernelFunc:li};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function di(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{keepDims:o,axis:a}=i;return ui(r,a,o,"any",n)}const ci={kernelName:u.FSt,backendName:"webgpu",kernelFunc:di};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class pi{constructor(e,t,n){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const i=[t];this.op="min"===n?"<":">";const[r,o]=u.C0T.computeOutAndReduceShapes(e,i);this.outputShape=0===r.length?[1]:r,this.dispatchLayout=K(this.outputShape),u.ZSL.sizeFromShape(o)<32?(this.type="plain",this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=V(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=e,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const e=this.workgroupSize[0],t=()=>1===this.inputShape.length?"uniforms.xShape":`uniforms.xShape.${k(this.inputShape.length-1)}`,n=()=>{let e="";if(1===this.outputShape.length)1!==this.inputShape.length&&(e+="outputCoords,");else for(let t=0;t<this.outputShape.length;t++)e+=`outputCoords.${k(t)},`;return e};if("shared"===this.type){const i=`\n      var<workgroup> xBestIndices : array<i32, ${e}>;\n      var<workgroup> xBestValues : array<f32, ${e}>;\n    `,r=`\n      fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n      }\n\n      ${i}\n\n      ${C("index")} {\n        let outputIndex = index / ${e};\n        let reduceLength = ${t()};\n\n        var bestIndex = i32(localId.x);\n        var bestValue = uniforms.infinityValue;\n        let outputCoords = getCoordsFromIndex(outputIndex);\n        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;\n            k = k + ${e}) {\n          let candidate = getX(${n()} k);\n          if (!isnan(candidate) && candidate ${this.op} bestValue) {\n            bestValue = candidate;\n            bestIndex = k;\n          }\n        }\n        xBestValues[localId.x] = bestValue;\n        xBestIndices[localId.x] = bestIndex;\n        workgroupBarrier();\n\n        var reduceSize = min(u32(reduceLength), ${e}u);\n        for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n            currentSize = reduceSize / 2u) {\n          let interval = DIV_CEIL(reduceSize, 2u);\n          if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              xBestValues[localId.x] = bestValue;\n              xBestIndices[localId.x] = xBestIndices[localId.x + interval];\n            }\n          }\n          reduceSize = interval;\n          workgroupBarrier();\n        }\n\n        if (localId.x == 0u && outputIndex < uniforms.size) {\n          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);\n        }\n      }\n    `;return r}{const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let outputCoords = getCoordsFromIndex(index);\n          var bestIndex = 0;\n          var bestValue = getX(${n()} 0);\n          let reduceLength = ${t()};\n          for (var i = 1; i < reduceLength; i++) {\n            let candidate = getX(${n()} i);\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              bestIndex = i;\n            }\n          }\n          setOutputAtIndexI32(index, bestIndex);\n        }\n      }\n      `;return e}}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fi(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o}=i;let a=u.ZSL.parseAxisParam(o,r.shape);const s=u.C0T.getAxesPermutation(a,r.shape.length);let l=r;const h=[];null!=s&&(l=ri({inputs:{x:r},backend:n,attrs:{perm:s}}),h.push(l),a=u.C0T.getInnerMostAxes(a.length,l.shape.length)),u.C0T.assertAxesAreInnerMostDims("argMax",[a[0]],l.shape.length);const d=new pi(l.shape,a[0],"max"),c=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],p=n.runWebGPUProgram(d,[l],"int32",c);return h.forEach((e=>n.disposeData(e.dataId))),p}const mi={kernelName:u.Jp_,backendName:"webgpu",kernelFunc:fi};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gi(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o}=i;let a=u.ZSL.parseAxisParam(o,r.shape);const s=u.C0T.getAxesPermutation(a,r.shape.length);let l=r;const h=[];null!=s&&(l=ri({inputs:{x:r},backend:n,attrs:{perm:s}}),h.push(l),a=u.C0T.getInnerMostAxes(a.length,l.shape.length)),u.C0T.assertAxesAreInnerMostDims("argMin",[a[0]],l.shape.length);const d=new pi(l.shape,a[0],"min"),c=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],p=n.runWebGPUProgram(d,[l],"int32",c);return h.forEach((e=>n.disposeData(e.dataId))),p}const yi={kernelName:u.p_m,backendName:"webgpu",kernelFunc:gi},xi=an({opType:Ee.ASIN}),bi={kernelName:u.QKF,backendName:"webgpu",kernelFunc:xi},wi=an({opType:Ee.ASINH}),vi={kernelName:u.epO,backendName:"webgpu",kernelFunc:wi},Si=an({opType:Ee.ATAN}),ki={kernelName:u.TyE,backendName:"webgpu",kernelFunc:Si},Ci=sn({opType:te.ATAN2}),Ii={kernelName:u.lxb,backendName:"webgpu",kernelFunc:Ci},Ri=an({opType:Ee.ATANH}),Pi={kernelName:u.zP9,backendName:"webgpu",kernelFunc:Ri};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class zi{constructor(e){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n\n          let xRCCorner = coords.yz * uniforms.strides;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          let value = getX(batch, xRCorner, xCCorner, d);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ai{constructor(e,t,n=!1,i=!1,r=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=n,this.flattenPositions=i,this.includeBatchIndex=r,this.shaderKey=`pool2D_${t}_${n}_${i}_${r}`}getUserCode(){let e;if("avg"===this.poolType)e="resultValue = resultValue + value; count = count + 1.0;";else if(this.computePositions){const t=this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC";e=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${t};\n      }`}else e="resultValue = max(value, resultValue);";let t="resultValue";"avg"===this.poolType&&(t="resultValue / max(count, 1.0)");const n=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}\n\n          var count = 0.0;\n          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {\n            let xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {\n              let xC = xCCorner + wC;\n              if (xC < 0 || xC >= uniforms.convDims.y) {\n                continue;\n              }\n\n              let value = getX(batch, xR, xC, d);\n              ${e}\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}\n        }\n      }\n    `;return n}}class Ti{constructor(e,t,n=!1,i=!1,r=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=n,this.flattenPositions=i,this.includeBatchIndex=r,this.shaderKey=`pool3D_${t}_${n}_${i}_${r}`}getUserCode(){let e;if("avg"===this.poolType)e="resultValue += value; count += 1.0;";else if(this.computePositions){const t=this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC";e=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${t};\n      }`}else e="resultValue = max(value, resultValue);";let t="resultValue";"avg"===this.poolType&&(t="resultValue / max(count, 1.0)");const n=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords.x;\n          let ch = coords.u;\n\n          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n          let xDCorner = xCorner.x;\n          let xRCorner = xCorner.y;\n          let xCCorner = xCorner.z;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}\n\n          var count = 0.0;\n          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {\n            let xD = xDCorner + wD;\n            if (xD < 0 || xD >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {\n              let xR = xRCorner + wR;\n              if (xR < 0 || xR >= uniforms.convDims.y) {\n                continue;\n              }\n\n              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {\n                let xC = xCCorner + wC;\n                if (xC < 0 || xC >= uniforms.convDims.z) {\n                  continue;\n                }\n\n                let value = getX(batch, xD, xR, xC, ch);\n                ${e}\n              }\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}\n        }\n      }\n    `;return n}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Li(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{reductionIndices:o,keepDims:a}=i;return ui(r,o,a,"max",n)}const Ei={kernelName:u.VAI,backendName:"webgpu",kernelFunc:Li};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $i(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{keepDims:o,axis:a}=i;return ui(r,a,o,"mean",n)}const Fi={kernelName:u.g5A,backendName:"webgpu",kernelFunc:$i};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ni(e,t,n,i){if(1===t.filterWidth&&1===t.filterHeight&&u.ZSL.arraysEqual(t.inShape,t.outShape))return en({inputs:{x:e},backend:i});if(t.filterWidth===t.inWidth&&t.filterHeight===t.inHeight&&1===t.batchSize&&"VALID"===t.padInfo.type){const r=e.shape.length,o=Kt({inputs:{x:e},backend:i,attrs:{shape:[e.shape[r-3]*e.shape[r-2],e.shape[r-1]]}});let a;"avg"===n?a=$i({inputs:{x:o},backend:i,attrs:{axis:0,keepDims:!1}}):(u.ZSL.assert("max"===n,(()=>`Invalid pool type ${n}`)),a=Li({inputs:{x:o},backend:i,attrs:{reductionIndices:0,keepDims:!1}}));const s=Kt({inputs:{x:a},backend:i,attrs:{shape:t.outShape}});return i.disposeData(o.dataId),i.disposeData(a.dataId),s}let r;const o=[{type:"int32",data:[t.strideHeight,t.strideWidth]}];return 1===t.filterHeight&&1===t.filterWidth?r=new zi(t):("avg"===n?r=new Ai(t,"avg"):(u.ZSL.assert("max"===n,(()=>`Invalid pool type ${n}`)),r=new Ai(t,"max")),o.push({type:"int32",data:[t.padInfo.top,t.padInfo.left]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]},{type:"int32",data:[t.inHeight,t.inWidth]},{type:"int32",data:[t.effectiveFilterHeight,t.effectiveFilterWidth]})),i.runWebGPUProgram(r,[e],e.dtype,o)}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Di(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{filterSize:o,strides:a,pad:s,dimRoundingMode:l}=i,h=1,d=u.C0T.computePool2DInfo(r.shape,o,a,h,s,l);return Ni(r,d,"avg",n)}const _i={kernelName:u.ho8,backendName:"webgpu",kernelFunc:Di};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mi(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{filterSize:o,strides:a,pad:s,dataFormat:l,dimRoundingMode:h}=i,d=[1,1,1],c=u.C0T.computePool3DInfo(r.shape,o,a,d,s,h,l),p=new Ti(c,"avg"),f=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.front,c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.inDepth,c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]}];return n.runWebGPUProgram(p,[r],r.dtype,f)}const Oi={kernelName:u.cS,backendName:"webgpu",kernelFunc:Mi};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Bi{constructor(e){this.variableNames=["dy"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){const e=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n\n            dotProd = dotProd + dyValue * uniforms.avgMultiplier;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `;return e}}class Ui{constructor(e){this.variableNames=["dy"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){const e=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              dotProd += dyValue * uniforms.avgMultiplier;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Wi(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,input:o}=t,a=o,{filterSize:s,strides:l,pad:h,dimRoundingMode:d}=i,c=u.C0T.computePool3DInfo(a.shape,s,l,1,h,d),p=new Ui(c),f=1/(c.filterDepth*c.filterHeight*c.filterWidth),m=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.effectiveFilterDepth-1-c.padInfo.front,c.effectiveFilterHeight-1-c.padInfo.top,c.effectiveFilterWidth-1-c.padInfo.left]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]},{type:"int32",data:[c.outDepth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"float32",data:[f]}];return n.runWebGPUProgram(p,[r],a.dtype,m)}const Vi={kernelName:u.wwC,backendName:"webgpu",kernelFunc:Wi};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Hi(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,input:o}=t,a=o;Y([r,o],"avgPoolGrad");const{filterSize:s,strides:l,pad:h}=i,d=u.C0T.computePool2DInfo(a.shape,s,l,1,h),c=new Bi(d),p=1/(d.filterHeight*d.filterWidth),f=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"float32",data:[p]}];return n.runWebGPUProgram(c,[r],a.dtype,f)}const Gi={kernelName:u.VCH,backendName:"webgpu",kernelFunc:Hi};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ji(e){const{inputs:t,backend:n,attrs:i}=e,{a:r,b:o}=t,{transposeA:a,transposeB:s}=i;return qt({a:r,b:o,transposeA:a,transposeB:s,backend:n})}const Ki={kernelName:u.jAQ,backendName:"webgpu",kernelFunc:ji};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Xi{constructor(e,t){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.rank=t.length,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=e,this.uniforms=`start : ${S(e.length)}, `,this.shaderKey="slice"}getUserCode(){const e=S(this.rank),t=Yi(this.rank);let n;n=1===this.start.length?this.outputShape.map(((e,t)=>"sourceLoc = uniforms.start + coords;")):this.outputShape.map(((e,t)=>`sourceLoc.${qi[t]} = uniforms.start.${k(t)} + coords.${qi[t]};`));const i=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          var sourceLoc : ${e};\n          let coords = getCoordsFromIndex(index);\n          ${n.join("\n")}\n          setOutputAtIndex(index, getSource(${t}));\n        }\n      }\n    `;return i}}const qi=["x","y","z","w","u","v"];function Yi(e){if(1===e)return"sourceLoc";if(e<=6)return qi.slice(0,e).map((e=>`sourceLoc.${e}`)).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Zi(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{begin:o,size:a}=i,[s,l]=u.Kro.parseSliceParams(r,o,a);if(u.Kro.assertParamsValid(r,s,l),n.shouldExecuteOnCPU([r])||"string"===r.dtype){const e=n.tensorMap.get(r.dataId),t=Dn(e.values,s,l,r.shape,r.dtype);return n.makeTensorInfo(l,r.dtype,t)}if(0===u.ZSL.sizeFromShape(l))return n.makeTensorInfo(l,r.dtype,[]);const h=new Xi(s,l),d=[{type:"int32",data:s}];return n.runWebGPUProgram(h,[r],r.dtype,d)}const Qi={kernelName:u.JiE,backendName:"webgpu",kernelFunc:Zi},Ji=e=>{const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{blockShape:o,crops:a}=i;u.ZSL.assert(r.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet"));const s=o.reduce(((e,t)=>e*t)),l=u.C0T.getReshaped(r.shape,o,s),h=u.C0T.getPermuted(l.length,o.length),d=u.C0T.getReshapedPermuted(r.shape,o,s),c=u.C0T.getSliceBeginCoords(a,o.length),p=u.C0T.getSliceSize(d,a,o.length),f=[],m=Kt({inputs:{x:r},backend:n,attrs:{shape:l}}),g=ri({inputs:{x:m},backend:n,attrs:{perm:h}}),y=Kt({inputs:{x:g},backend:n,attrs:{shape:d}}),x=Zi({inputs:{x:y},backend:n,attrs:{begin:c,size:p}});return f.push(m),f.push(g),f.push(y),f.forEach((e=>n.disposeData(e.dataId))),x},er={kernelName:u.Ik2,backendName:"webgpu",kernelFunc:Ji},tr=`\n  fn bincount_write(index: i32, value: f32) {\n    ${x("&result[index]","value","float32")}\n  }\n`,nr="\n  fn bincount_write(index: i32, value: f32) {\n    atomicStore(&result[index], bitcast<i32>(value));\n  }\n";class ir{constructor(e,t,n=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=e,this.rank=e.length,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=n,n&&(this.atomic=!1),this.hasWeights=t,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){const e=`\n    ${this.binaryOutput?nr:tr}\n  ${C("index")} {\n    ${1===this.rank?`if (index < uniforms.xShape) {\n      let indexVal = i32(getX(index));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};\n        bincount_write(indexVal, value);\n      }\n    }`:`let coord = getCoordsFromIndex(index);\n    if (coordsInBounds2D(coord, uniforms.xShape)) {\n      let indexVal = i32(getX(coord[0], coord[1]));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};\n        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);\n      }\n    }`}\n  }\n  `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function rr(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,weights:o}=t,{size:a}=i,s=u.ZSL.sizeFromShape(r.shape),l=u.ZSL.sizeFromShape(o.shape),h=l>0,d=[a],c=o.dtype,p=Gt({backend:n,attrs:{shape:d,value:0,dtype:c}}),f=new ir([s],h),m=[{type:"int32",data:[a]}],g=h?[r,o]:[r],y=n.runWebGPUProgram(f,g,c,m,p);return y}const or={kernelName:u.N4F,backendName:"webgpu",kernelFunc:rr};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ar{constructor(e){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){const e=`\n  ${C("index")} {\n    if (index < uniforms.size) {\n      var s0 = 1.0;\n      var s1 = 1.0;\n      let indexS0 = index - uniforms.size + uniforms.s0Size;\n      let indexS1 = index - uniforms.size + uniforms.s1Size;\n      if (indexS0 >= 0) {\n        s0 = getS0(indexS0);\n      }\n      if (indexS1 >= 0) {\n        s1 = getS1(indexS1);\n      }\n\n      if (s0 == 1.0) {\n        setOutputAtIndex(index, s1);\n      } else if (s1 == 1.0) {\n        setOutputAtIndex(index, s0);\n      } else if (s0 != s1) {\n        setOutputAtIndex(index, uniforms.NAN);\n      } else {\n        setOutputAtIndex(index, s0);\n      }\n    }\n  }\n  `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function sr(e){const{inputs:t,backend:n}=e,{s0:i,s1:r}=t;if(n.shouldExecuteOnCPU([i,r])){const e=n.tensorMap.get(i.dataId),t=n.tensorMap.get(r.dataId),o=e.values,a=t.values,s=u.C0T.assertAndGetBroadcastShape(Array.from(o),Array.from(a));return n.makeTensorInfo([s.length],"int32",Int32Array.from(s))}const o=u.ZSL.sizeFromShape(i.shape),a=u.ZSL.sizeFromShape(r.shape),s=Math.max(o,a),l=new ar(s),h=[{type:"int32",data:[o]},{type:"int32",data:[a]}];return n.runWebGPUProgram(l,[i,r],"int32",h)}const ur={kernelName:u.vj7,backendName:"webgpu",kernelFunc:sr},lr=sn({opType:te.NOT_EQUAL,dtype:"bool",cpuKernelImpl:Tn}),hr={kernelName:u.ylV,backendName:"webgpu",kernelFunc:lr};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function dr(e){const{inputs:t,backend:n}=e,{input:i}=t,r=n.tensorMap.get(i.dataId);return en({inputs:{x:r.complexTensorInfos.real},backend:n})}const cr={kernelName:u.LRy,backendName:"webgpu",kernelFunc:dr};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pr(e,t){const n=new on(e.shape,Ee.TO_INT),i=t.runWebGPUProgram(n,[e],"int32");return{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fr(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{dtype:o}=i;if("complex64"===o){if("complex64"===r.dtype)return en({inputs:{x:r},backend:n});const e=u.Ul9(r.shape),t=fr({inputs:{x:r},backend:n,attrs:{dtype:"float32"}}),i=nn({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeData(t.dataId),i}if("complex64"===r.dtype){const e=dr({inputs:{input:r},backend:n}),t=fr({inputs:{x:e},backend:n,attrs:{dtype:o}});return n.disposeData(e.dataId),t}if(!u.ZSL.hasEncodingLoss(r.dtype,o)){const e=en({inputs:{x:r},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:o}}if(n.shouldExecuteOnCPU([r])){const e=n.tensorMap.get(r.dataId).values,[t,i,a]=hn(e,r.shape,r.dtype,o);return n.makeTensorInfo(t,i,a)}if("int32"===o)return pr(r,n);if("bool"===o){const e=n.makeTensorInfo([],"bool",u.ZSL.getTypedArrayFromDType("bool",1)),t={a:r,b:e},i=lr({inputs:t,backend:n});return n.disposeData(e.dataId),i}throw new Error(`Error in Cast: failed to cast ${r.dtype} to ${o}`)}const mr={kernelName:u.KXH,backendName:"webgpu",kernelFunc:fr},gr=an({opType:Ee.CEIL,cpuKernelImpl:dn}),yr={kernelName:u.QDP,backendName:"webgpu",kernelFunc:gr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xr{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){const e=`\n      ${C("index")} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          var clampedValue = clamp(\n              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));\n          clampedValue = select(clampedValue, value, isnanVec4(value));\n          setOutputAtIndex(index, clampedValue);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class br{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){const e=`\n      ${C("index")} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          if (isnan(value)) {\n            setOutputAtIndex(index, value);\n            return;\n          }\n          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wr(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{clipValueMin:o,clipValueMax:a}=i;let s;const l=[{type:"float32",data:[o]},{type:"float32",data:[a]}];return s=u.ZSL.sizeFromShape(r.shape)%4===0?new xr(r.shape):new br(r.shape),n.runWebGPUProgram(s,[r],r.dtype,l)}const vr={kernelName:u.vaV,backendName:"webgpu",kernelFunc:wr};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Sr{constructor(e){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let re = abs(getRealByOutputIndex(index));\n        let im = abs(getImagByOutputIndex(index));\n        let mx = max(re, im);\n\n        // The length function in wgsl may be not underflow-safe on some GPUs.\n        // So the safe solution is to ensure underflow-safety in all cases.\n        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));\n      }\n    }\n  `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function kr(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function Cr(e){const{inputs:t,backend:n}=e,{x:i}=t,r=n.tensorMap.get(i.dataId),o=new Sr(i.shape),a=[kr(i,r.complexTensorInfos.real),kr(i,r.complexTensorInfos.imag)];return n.runWebGPUProgram(o,a,a[0].dtype)}const Ir={kernelName:u.$zE,backendName:"webgpu",kernelFunc:Cr};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Rr{constructor(e){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=u.C0T.computeOutShape(e,1),this.variableNames=e.map(((e,t)=>`T${t}`)),this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=e.length-1;for(let t=0;t<this.offsetLength;t++)this.uniforms+=`offset${t} : i32,`;this.shaderKey="concat"}getUserCode(){const e=[];if(this.offsetLength>0){e.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let i=1;i<this.offsetLength;i++)e.push(`else if (yC < uniforms.offset${[i]}){ setOutputAtCoords(coords.x, coords.y, getT${i}(yR, yC - uniforms.offset${i-1})); }`);const t=this.offsetLength,n=this.offsetLength-1;e.push(`else { setOutputAtCoords(coords.x, coords.y, getT${t}(yR, yC - uniforms.offset${n})); }`)}else e.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");const t=`\n      ${C("index")} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            let yR = coords.x;\n            let yC = coords.y;\n\n            ${e.join("\n        ")}\n          }\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pr(e){const{inputs:t,backend:n}=e,{input:i}=t,r=n.tensorMap.get(i.dataId);return en({inputs:{x:r.complexTensorInfos.imag},backend:n})}const zr={kernelName:u.dv8,backendName:"webgpu",kernelFunc:Pr};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ar(e,t,n){const i=e[0].dtype;if("complex64"===i){const i=e.map((e=>dr({inputs:{input:e},backend:n}))),r=e.map((e=>Pr({inputs:{input:e},backend:n}))),o=Ar(i,t,n),a=Ar(r,t,n),s=nn({inputs:{real:o,imag:a},backend:n});return i.forEach((e=>n.disposeData(e.dataId))),r.forEach((e=>n.disposeData(e.dataId))),n.disposeData(o.dataId),n.disposeData(a.dataId),s}let r=n.shouldExecuteOnCPU(e);if("string"===i&&(r=!0),r){const r=e.map((e=>{const i=u.ZSL.sizeFromShape(e.shape.slice(t)),r=[-1,i];return Kt({inputs:{x:e},backend:n,attrs:{shape:r}})})),o=r.map((e=>({vals:n.readSync(e.dataId),shape:e.shape}))),a=u.C0T.computeOutShape(r.map((e=>e.shape)),1),s=1===r[0].shape[0],l=cn(o,a,i,s),h=u.C0T.computeOutShape(e.map((e=>e.shape)),t),d=n.makeTensorInfo(h,i,l);return r.forEach((e=>n.disposeData(e.dataId))),d}const o=n.device.limits.maxStorageBuffersPerShaderStage-1;if(e.length>o){const i=[];for(let a=0;a<e.length;a+=o){const r=e.slice(a,a+o);i.push(Ar(r,t,n))}const r=Ar(i,t,n);for(const e of i)n.disposeData(e.dataId);return r}const{tensors2D:a,outShape:s}=Tr(e,t,n),l=a.map((e=>e.shape)),h=new Rr(l),d=[],c=new Array(l.length-1);if(c.length>0){c[0]=l[0][1],d.push({type:"int32",data:[c[0]]});for(let e=1;e<c.length;e++)c[e]=c[e-1]+l[e][1],d.push({type:"int32",data:[c[e]]})}const p=n.runWebGPUProgram(h,a,a[0].dtype,d);a.forEach((e=>n.disposeData(e.dataId)));const f=Kt({inputs:{x:p},backend:n,attrs:{shape:s}});return n.disposeData(p.dataId),f}function Tr(e,t,n){const i=u.C0T.computeOutShape(e.map((e=>e.shape)),t),r=e.map((e=>Kt({inputs:{x:e},backend:n,attrs:{shape:[u.ZSL.sizeFromShape(e.shape.slice(0,t)),u.ZSL.sizeFromShape(e.shape.slice(t))]}})));return{tensors2D:r,outShape:i}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Lr(e){const{inputs:t,backend:n,attrs:i}=e,{axis:r}=i,o=u.ZSL.parseAxisParam(r,t[0].shape)[0],a=t.map((e=>e.shape));u.C0T.assertParamsConsistent(a,o);const s=u.C0T.computeOutShape(t.map((e=>e.shape)),o);if(0===u.ZSL.sizeFromShape(s))return n.makeTensorInfo(s,t[0].dtype,[]);const l=t.filter((e=>u.ZSL.sizeFromShape(e.shape)>0));return 1===l.length?en({inputs:{x:l[0]},backend:n}):Ar(l,o,n)}const Er={kernelName:u.$dB,backendName:"webgpu",kernelFunc:Lr};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $r(e,t,n,i,r=!1,o=null,a=!1,s=4,u=4,l=4){const h=e=>{switch(e){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${e} is not supported.`)}},c=e?"\n      let coord = vec4<i32>(batch, xRow, xCol, xCh);\n      ":"\n      let coord = vec4<i32>(batch, xCh, xRow, xCol);\n      ",p=e?"\n      let coords = vec4<i32>(\n        batch,\n        row / outWidth,\n        row % outWidth,\n        col);\n      ":"\n      let coords = vec4<i32>(\n        batch,\n        row,\n        col / outWidth,\n        col % outWidth);\n      ",f=e?"uniforms.xShape[1]":"uniforms.xShape[2]",m=e?"uniforms.xShape[2]":"uniforms.xShape[3]",g=e?"row":"col",y=e?"col":"row",x=`\n      let inChannels = uniforms.wShape[2];\n      let outWidth = ${e?"uniforms.outShape[2]":"uniforms.outShape[3]"};\n      let outRow = ${g} / outWidth;\n      let outCol = ${g} % outWidth;\n\n      let WRow = ${y} / (uniforms.filterDims[1] * inChannels);\n      let WCol = ${y} / inChannels % uniforms.filterDims[1];\n      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];\n      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];\n      let xCh = ${y} % inChannels;\n      var resData = ${v(s)}(0.0);\n      // The bounds checking is always needed since we use it to pad zero for\n      // the 'same' padding type.\n      if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${m}) {\n        ${c}\n        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);\n        ${h(s)}\n      }\n      return resData;`,b=e?t&&i?`\n      ${x}`:`\n      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        ${x}\n      }\n      return ${v(s)}(0.0);`:i&&n?`\n      ${x}`:`\n      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {\n        ${x}\n      }\n      return ${v(s)}(0.0);`,w=`${d(u)}`,S=v(l),k=v(e?s:u),C=v(e?u:s),I=`\n      ${It(o,a,4===l,4)}\n      fn mm_readA(batch: i32, row : i32, col : i32) -> ${k} {\n        ${e?b:w}\n      }\n\n      fn mm_readB(batch: i32, row : i32, col : i32) -> ${C} {\n        ${e?w:b}\n      }\n\n      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${S}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)\n        {\n        var value = valueIn;\n        let outWidth = ${e?"uniforms.outShape[2]":"uniforms.outShape[3]"};\n        ${p}\n        ${Rt(r,o)}\n        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }`;return I}class Fr{constructor(e,t,n,i,r=!1,o=null,a=!1,s=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.outShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.isVec4=((e.inChannels%4===0||e.inChannels%3===0)&&this.isChannelsLast||e.outWidth%4===0&&!this.isChannelsLast)&&e.outChannels%4===0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=G(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=j(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&e.inChannels%4!==0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),r&&(this.variableNames.push("bias"),this.variableComponents.push(4)),a&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],r&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=s,this.addBias=r,this.activation=o,this.hasPreluActivationWeights=a,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=t%this.tileAOuter===0,this.fitBOuter=n%this.tileBOuter===0,this.fitInner=i%this.tileInner===0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const e=this.isVec4?Lt(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):Ft(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),t=this.isVec4?[this.innerElementSize,4,4]:[1,1,1],n=`\n    ${$r(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,t[0],t[1],t[2])}\n    ${e}\n  `;return n}}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Nr{constructor(e,t=!1,n=null,i=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=e.outShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=t,this.activation=n,this.hasPreluActivationWeights=i,t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){const e=`\n       ${It(this.activation,this.hasPreluActivationWeights,!1,4)}\n       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{\n         let coords = vec4<i32>(batch, row, col, chan);\n         if (coordsInBounds4D(coords, uniforms.xShape)) {\n           return  getX(batch, row, col, chan);\n         } else {\n          return 0.0;\n         }\n       }\n       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{\n         let coords = vec4<i32>(row, col, xChannel, outChannel);\n         if(coordsInBounds4D(coords, uniforms.wShape)) {\n           return getW(row, col, xChannel, outChannel);\n          } else {\n            return 0.0;\n          }\n       }\n       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {\n         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}\n         if (coordsInBounds4D(coords, uniforms.outShape)) {\n           var value = valueIn;\n           ${Rt(this.addBias,this.activation)}\n           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);\n         }\n       }\n       ${C("index")} {\n         let coords = getOutputCoords();\n         let batch = coords[0];\n         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}\n         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}\n         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}\n         var acc : f32 = 0.0;\n         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {\n           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {\n             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];\n             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];\n             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {\n               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}\n               let f = readFilt(row, col, xChannel, outChannel);\n               acc = acc + v * f;\n             }\n           }\n         }\n         writeResult(batch, outRow, outCol, outChannel, acc);\n       }\n     `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Dr{constructor(e,t){this.variableNames=["x"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,\n       inChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,n=this.isChannelsLast?"coords[1]":"coords[2]",i=this.isChannelsLast?"coords[2]":"coords[1]",r=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)",o=`\n    ${C("index")} {\n      let coords = getCoordsFromIndex(index);\n      if(index < uniforms.size) {\n        let batch = coords[0];\n        let row = ${n};\n        let col = ${i};\n        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];\n        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);\n        var value = 0.0;\n        if(xRow < uniforms.xShape[${e}] && xRow >= 0) {\n          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -\n              uniforms.pads[1];\n          let xCol = offsetX + uniforms.dilations[1] * ((col %\n              uniforms.itemsPerBlockRow) / uniforms.inChannels);\n          let ch = col % uniforms.inChannels;\n          if(xCol < uniforms.xShape[${t}] && xCol >= 0) {\n            value = ${r};\n          }\n        }\n        setOutputAtIndex(index, value);\n      }\n    }\n   `;return o}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _r(e,t){const n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&1===n&&e[0]>1?[e[0],1]:null}function Mr({x:e,filter:t,convInfo:n,backend:i,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){const u="channelsLast"===n.dataFormat,l=!u,h=!1,d=u&&n.filterHeight===n.inHeight&&n.filterWidth===n.inWidth&&"VALID"===n.padInfo.type,c=[];let p,f;if(d){const r=n.inHeight*n.inWidth*n.inChannels;p=Kt({inputs:{x:e},backend:i,attrs:{shape:[1,n.batchSize,r]}}),f=Kt({inputs:{x:t},backend:i,attrs:{shape:[1,r,n.outChannels]}})}else p=Kt({inputs:{x:e},backend:i,attrs:{shape:u?[n.batchSize,n.inHeight*n.inWidth,n.inChannels]:[n.batchSize,n.inChannels,n.inHeight*n.inWidth]}}),f=Kt({inputs:{x:t},backend:i,attrs:{shape:[1,n.inChannels,n.outChannels]}});if(c.push(p),c.push(f),null!=o){const e=_r(o.shape,u);null!=e&&(o=Kt({inputs:{x:o},backend:i,attrs:{shape:e}}),c.push(o))}if(null!=r){const e=_r(r.shape,u);null!=e&&(r=Kt({inputs:{x:r},backend:i,attrs:{shape:e}}),c.push(r))}const m=qt({a:u?p:f,b:u?f:p,transposeA:l,transposeB:h,backend:i,bias:r,activation:s,preluActivationWeights:o,leakyreluAlpha:a}),g=Kt({inputs:{x:m},backend:i,attrs:{shape:n.outShape}});c.push(m);for(const y of c)i.disposeData(y.dataId);return g}function Or({x:e,filter:t,convInfo:n,backend:i,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){const{filterWidth:u,filterHeight:l,inChannels:h,strideWidth:d,strideHeight:c,padInfo:p,outWidth:f,outHeight:m,dilationWidth:g,dilationHeight:y,dataFormat:x}=n,b="channelsLast"===x,w=u*l*h,v=m*f,S=b?[n.batchSize,v,w]:[n.batchSize,w,v],k=new Dr(S,b),C=[{type:"int32",data:[p.top,p.left]},{type:"int32",data:[c,d]},{type:"int32",data:[y,g]},{type:"int32",data:[f]},{type:"int32",data:[h*u]},{type:"int32",data:[h]}],I=i.runWebGPUProgram(k,[e],e.dtype,C),R=[];R.push(I);const P=Kt({inputs:{x:t},backend:i,attrs:{shape:[1,w,-1]}});if(R.push(P),null!=o){const e=_r(o.shape,b);null!=e&&(o=Kt({inputs:{x:o},backend:i,attrs:{shape:e}}),R.push(o))}if(null!=r){const e=_r(r.shape,b);null!=e&&(r=Kt({inputs:{x:r},backend:i,attrs:{shape:e}}),R.push(r))}const z=!b,A=!1,T=qt({a:b?I:P,b:b?P:I,transposeA:z,transposeB:A,backend:i,bias:r,activation:s,preluActivationWeights:o,leakyreluAlpha:a}),L=Kt({inputs:{x:T},backend:i,attrs:{shape:n.outShape}});R.push(T);for(const E of R)i.disposeData(E.dataId);return L}function Br({x:e,filter:t,convInfo:n,backend:i,bias:r=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){const l=null!=r,h=null!=o,d="channelsLast"===n.dataFormat,c=d&&n.filterHeight===n.inHeight&&n.filterWidth===n.inWidth&&"VALID"===n.padInfo.type,p=(0,u._K2)().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!p&&(c||1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type)))return Mr({x:e,filter:t,convInfo:n,backend:i,bias:r,activation:s,preluActivationWeights:o,leakyreluAlpha:a});const f=(0,u._K2)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),m=f>-1?f:i.thresholdToIncreaseWorkgroups,g=n.batchSize*Math.ceil(n.outHeight*n.outWidth/32)*Math.ceil(n.outChannels/32);if((0,u._K2)().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||g<=m)return Or({x:e,filter:t,convInfo:n,backend:i,bias:r,preluActivationWeights:o,leakyreluAlpha:a,activation:s});let y;const x=[n.padInfo.top,n.padInfo.left],b=[{type:"int32",data:[n.filterHeight,n.filterWidth]},{type:"int32",data:[...x]},{type:"int32",data:[n.strideHeight,n.strideWidth]},{type:"int32",data:[n.dilationHeight,n.dilationWidth]}];if(p)y=new Nr(n,l,s,h);else{const e=d?n.outHeight*n.outWidth:n.outChannels,t=d?n.outChannels:n.outHeight*n.outWidth,r=n.filterHeight*n.filterWidth*n.inChannels;b.push({type:"int32",data:[e]},{type:"int32",data:[t]},{type:"int32",data:[r]});const o=i.adapterInfo.isIntel();y=new Fr(n,e,t,r,l,s,h,o)}const w=[],v=[e,t];l&&(d||1!==r.shape.length||(r=Kt({inputs:{x:r},backend:i,attrs:{shape:[r.shape[0],1,1]}}),w.push(r)),v.push(r)),h&&(d||1!==o.shape.length||(o=Kt({inputs:{x:o},backend:i,attrs:{shape:[o.shape[0],1,1]}}),w.push(o)),v.push(o)),"leakyrelu"===s&&(b.push({type:"float32",data:[a]}),y.uniforms+=" alpha : f32,");const S=i.runWebGPUProgram(y,v,e.dtype,b);for(const u of w)i.disposeData(u.dataId);return S}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ur(e){const{inputs:t,attrs:n,backend:i}=e,{x:r,filter:o}=t,{strides:a,pad:s,dataFormat:l,dilations:h,dimRoundingMode:d}=n,c=u.C0T.convertConv2DDataFormat(l),p=u.C0T.computeConv2DInfo(r.shape,o.shape,a,h,s,d,!1,c);return Br({x:r,filter:o,convInfo:p,backend:i})}const Wr={kernelName:u.p2J,backendName:"webgpu",kernelFunc:Ur};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Vr{constructor(e){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=e.inShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.isVec4=this.isChannelsLast&&e.outChannels%4===0&&e.inChannels%4===0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,n=this.isChannelsLast?3:1,i=`\n    ${C()} {\n      let batch = i32(globalId.z) / uniforms.outShape[1];\n      let r = i32(globalId.z) % uniforms.outShape[1];\n      let c = i32(globalId.y) * ${this.workPerThread};\n      let d1 = i32(globalId.x) * 4;\n\n      let dyCorner = vec2<i32>(r, c) - uniforms.pads;\n\n      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n      // ? = to be determined. : = across all values in that axis.\n      var dotProd: array<vec4<f32>, ${this.workPerThread}>;\n      for (var i = 0; i < ${this.workPerThread}; i++) {\n        dotProd[i] = vec4<f32>(0.0);\n      }\n      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);\n        let wRPerm = uniforms.filterDims.x - 1 - wR;\n        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||\n            fract(dyR) > 0.0) {\n          continue;\n        }\n        let idyR = i32(dyR);\n\n        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);\n          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);\n          let wCPerm = uniforms.filterDims.y - 1 - wC;\n          var bDyCVal = true;\n          var bDyCVal2 = true;\n          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC) > 0.0) {\n            bDyCVal = false;\n          }\n          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC2) > 0.0) {\n            bDyCVal2 = false;\n          }\n\n          let idyC = i32(dyC);\n          let idyC2 = i32(dyC2);\n          if (bDyCVal && bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n              xValue = getDy(batch, idyR, idyC2, d2);\n              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),\n                                                  dot(xValue, wValue1),\n                                                  dot(xValue, wValue2),\n                                                  dot(xValue, wValue3));\n            }\n          } else if (bDyCVal) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n            }\n          } else if (bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC2, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[1] = dotProd[1] + tmpval;\n            }\n          }\n        }\n      }\n\n      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n        let coords = vec4<i32>(batch, r, c + i, d1);\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);\n        }\n      }\n    }\n    `;return this.isVec4?`\n    ${i}\n    `:`\n    ${C("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[${n}];\n\n        let dyCorner = vec2<i32>(coords[${e}], coords[${t}]) - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);\n          let wRPerm = uniforms.filterDims.x - 1 - wR;\n          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||\n              wRPerm < 0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);\n            let wCPerm = uniforms.filterDims.y - 1 - wC;\n            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n                fract(dyC) > 0.0 || wCPerm < 0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {\n              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};\n              let wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd = dotProd + xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class Hr{constructor(e){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===e.dataFormat,this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`\n    ${C("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let d2 = coords[3];\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b = b + 1) {\n          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              if (${this.isChannelsLast}) {\n                let dyValue = getDy(b, yR, yC, d2);\n                let xValue = getX(b, xR, xC, d1);\n                dotProd = dotProd + xValue * dyValue;\n              } else {\n                let dyValue = getDy(b, d2, yR, yC);\n                let xValue = getX(b, d1, xR, xC);\n                dotProd = dotProd + xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class Gr{constructor(e){this.variableNames=["x","dy"],this.uniforms="pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,\n       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`\n    ${C("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wF = coords.x;\n        let wR = coords.y;\n        let wC = coords.z;\n        let d1 = coords.w;\n        let d2 = coords.u;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yF = 0; yF < uniforms.outDepth; yF++) {\n            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];\n            if (xF < 0 || xF >= uniforms.inDepth) {\n              continue;\n            }\n\n            for (var yR = 0; yR < uniforms.outHeight; yR++) {\n              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];\n              if (xR < 0 || xR >= uniforms.inHeight) {\n                continue;\n              }\n\n              for (var yC = 0; yC < uniforms.outWidth; yC++) {\n                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];\n                if (xC < 0 || xC >= uniforms.inWidth) {\n                  continue;\n                }\n\n                let dyValue = getDy(b, yF, yR, yC, d2);\n                let xValue = getX(b, xF, xR, xC, d1);\n                dotProd += xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class jr{constructor(e){this.variableNames=["dy","W"],this.uniforms="filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`\n    ${C("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let d1 = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyFCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);\n          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {\n            continue;\n          }\n          let idyF = i32(dyF);\n\n          let wFPerm = uniforms.filterDims[0] - 1 - wF;\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            let wRPerm = uniforms.filterDims[1] - 1 - wR;\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let wCPerm = uniforms.filterDims[2] - 1 - wC;\n\n              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {\n                let xValue = getDy(batch, idyF, idyR, idyC, d2);\n                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kr(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,dy:o}=t,{strides:a,pad:s,dataFormat:l,dimRoundingMode:h,filterShape:d}=i,c=u.C0T.convertConv2DDataFormat(l),p=u.C0T.computeConv2DInfo(r.shape,d,a,1,s,h,!1,c),f=new Hr(p),m=[{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.batchSize]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.inHeight]},{type:"int32",data:[p.inWidth]}];return n.runWebGPUProgram(f,[r,o],r.dtype,m)}const Xr={kernelName:u.rFm,backendName:"webgpu",kernelFunc:Kr};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qr(e=4){const t=e=>{switch(e){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return"\n            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);\n            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);\n            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);\n            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];\n            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];\n            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];\n            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];\n            return vec4<f32>(v0, v1, v2, v3);\n            ";default:throw new Error(`innerElementSize ${e} is not supported.`)}},n=`\n      let outRow = row / uniforms.outShape[2];\n      let outCol = row % uniforms.outShape[2];\n\n      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];\n      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);\n      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);\n      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {\n        return ${v(e)}(0.0);\n      }\n      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {\n        return ${v(e)}(0.0);\n      }\n      let coord = vec4<i32>(\n          batch,\n          i32(xR),\n          i32(xC),\n          col % uniforms.outBackprop[3]);\n      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${e}];`,i=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        ${n}\n      }\n      return ${v(e)}(0.0);`,r=`\n  fn mm_readA(batch: i32, row : i32, col : i32) -> ${v(e)} {\n    ${i}\n  }\n\n  fn mm_readB(batch: i32, row : i32, col : i32) -> ${v(e)} {\n    let coordX = uniforms.filterDims.x - 1 -\n        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n    let coordY = uniforms.filterDims.y - 1 -\n        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];\n    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&\n        coordX >= 0 && coordY >= 0) {\n      let rowInner = row % uniforms.outBackprop[3];\n      let coord = vec4<i32>(coordX, coordY, col, rowInner);\n      ${t(e)}\n    }\n    return ${v(e)}(0.0);\n  }\n\n  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${v(e)}) {\n    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n      var value = valueInput;\n      let outCoord = vec4<i32>(\n          batch,\n          row / uniforms.outShape[2],\n          row % uniforms.outShape[2],\n          col);\n      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${e}] = value;\n    }\n  }`;return r}class Yr{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.inShape,u.ZSL.assert("channelsLast"===e.dataFormat,(()=>"TODO: NCHW is unimplemented")),this.isVec4=e.inChannels%4===0&&e.outChannels%4===0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=G(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=j(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const e=this.isVec4?Lt(this.elementsPerThread,this.workgroupSize):Ft(this.elementsPerThread,this.workgroupSize),t=`\n    ${qr(this.isVec4?4:1)}\n    ${e}\n    `;return t}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Zr(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,filter:o}=t,{inputShape:a,strides:s,pad:l,dataFormat:h,dimRoundingMode:d}=i,c=u.C0T.convertConv2DDataFormat(h),p=u.C0T.computeConv2DInfo(a,o.shape,s,1,l,d,!1,c),f=[{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.filterHeight-1-p.padInfo.top,p.filterWidth-1-p.padInfo.left]},{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.batchSize,p.outHeight,p.outWidth,p.outChannels]}];let m;if((0,u._K2)().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||"channelsLast"!==p.dataFormat)m=new Vr(p);else{m=new Yr(p);const e=p.inHeight*p.inWidth,t=p.inChannels,n=p.filterHeight*p.filterWidth*p.outChannels;f.push({type:"uint32",data:[e]},{type:"uint32",data:[t]},{type:"uint32",data:[n]})}return n.runWebGPUProgram(m,[r,o],"float32",f)}const Qr={kernelName:u.jfg,backendName:"webgpu",kernelFunc:Zr};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Jr{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords.x;\n        let d2 = coords.u;\n\n        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n        let xFCorner = xFRCCorner.x;\n        let xRCorner = xFRCCorner.y;\n        let xCCorner = xFRCCorner.z;\n\n        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;\n        let inputDepthVec4Remainder = uniforms.xShape.u % 4;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let xF = xFCorner + wF * uniforms.dilations[0];\n          if (xF < 0 || xF >= uniforms.xShape.y) {\n            continue;\n          }\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let xR = xRCorner + wR * uniforms.dilations[1];\n            if (xR < 0 || xR >= uniforms.xShape.z) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let xC = xCCorner + wC * uniforms.dilations[2];\n              if (xC < 0 || xC >= uniforms.xShape.w) {\n                continue;\n              }\n\n              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {\n                let xValues = vec4<f32>(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                let wValues = vec4<f32>(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (inputDepthVec4Remainder == 1) {\n                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2);\n              } else if (inputDepthVec4Remainder == 2) {\n                let xValues = vec2<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)\n                );\n                let wValues = vec2<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (inputDepthVec4Remainder == 3) {\n                let xValues = vec3<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)\n                );\n                let wValues = vec3<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }`;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function eo(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o}=t,{strides:a,pad:s,dilations:l}=i,h=u.C0T.computeConv3DInfo(r.shape,o.shape,a,l,s),d=[h.padInfo.front,h.padInfo.top,h.padInfo.left],c=[{type:"int32",data:[h.filterDepth,h.filterHeight,h.filterWidth]},{type:"int32",data:[...d]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationDepth,h.dilationHeight,h.dilationWidth]}],p=new Jr(h),f=(0,u.TuY)(r.dtype,o.dtype);return n.runWebGPUProgram(p,[r,o],f,c)}const to={kernelName:u.A1h,backendName:"webgpu",kernelFunc:eo};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function no(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,dy:o}=t,{strides:a,pad:s,filterShape:l}=i,h=u.C0T.computeConv3DInfo(r.shape,l,a,1,s),d=new Gr(h),c=[{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.batchSize]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.inDepth]},{type:"int32",data:[h.inHeight]},{type:"int32",data:[h.inWidth]}];return n.runWebGPUProgram(d,[r,o],o.dtype,c)}const io={kernelName:u.iGz,backendName:"webgpu",kernelFunc:no};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ro(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,filter:o}=t,{strides:a,pad:s,inputShape:l}=i,h=u.C0T.computeConv3DInfo(l,o.shape,a,1,s),d=new jr(h),c=[{type:"int32",data:[h.filterDepth,h.filterHeight,h.filterWidth]},{type:"int32",data:[h.filterDepth-1-h.padInfo.front,h.filterHeight-1-h.padInfo.top,h.filterWidth-1-h.padInfo.left]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.outChannels]}];return n.runWebGPUProgram(d,[r,o],r.dtype,c)}const oo={kernelName:u.gC7,backendName:"webgpu",kernelFunc:ro},ao=an({opType:Ee.COS}),so={kernelName:u.Mn0,backendName:"webgpu",kernelFunc:ao},uo=an({opType:Ee.COSH}),lo={kernelName:u.MnK,backendName:"webgpu",kernelFunc:uo};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ho{constructor(e,t,n,i){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[r]=t;this.outputShape=[r,n[0],n[1],e],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId="bilinear"===i?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[e,t]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[n,i,r]=this.cropHeightBiggerThan1?[`(${e} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${e} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${e}`],[o,a,s]=this.cropWidthBiggerThan1?[`(${t} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${t} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${t}`],u=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let height_ratio = f32(${n});\n        let width_ratio = f32(${o});\n        let b = coords[0];\n        let y = coords[1];\n        let x = coords[2];\n        let d = coords[3];\n        // get box vals\n        let y1 = getBoxes(b, 0);\n        let x1 = getBoxes(b, 1);\n        let y2 = getBoxes(b, 2);\n        let x2 = getBoxes(b, 3);\n        // get image in batch index\n        let bInd = i32(round(getBoxInd(b)));\n        if(bInd < 0 || bInd >= uniforms.outShape[0]) {\n          return;\n        }\n        let height_scale = ${i};\n        let width_scale = ${a};\n        let in_y = ${r};\n        if( in_y < 0.0 || in_y > ${e} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let in_x = ${s};\n        if( in_x < 0.0 || in_x > ${t} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let sourceFracIndexCR = vec2<f32>(in_x,in_y);\n        if(${this.methodId} == 1) {\n          // Compute the four integer indices.\n          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);\n          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));\n          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);\n          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);\n          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);\n          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);\n          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);\n          let top = topLeft + (topRight - topLeft) * fracCR.x;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          let newValue = top + (bottom - top) * fracCR.y;\n          setOutputAtIndex(index, newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          let sourceNearestCR = vec2<i32>(floor(\n            sourceFracIndexCR + vec2<f32>(0.5,0.5)));\n          let newValue = getImage(\n            bInd, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    }\n    `;return u}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const co=e=>{const{inputs:t,backend:n,attrs:i}=e,{image:r,boxes:o,boxInd:a}=t,{cropSize:s,method:u,extrapolationValue:l}=i,h=new ho(r.shape[3],o.shape,s,u),d=[{type:"float32",data:[l]}];return n.runWebGPUProgram(h,[r,o,a],"float32",d)},po={kernelName:u.MRQ,backendName:"webgpu",kernelFunc:co};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var fo;(function(e){e["Prod"]="*",e["Sum"]="+"})(fo||(fo={}));class mo{constructor(e,t,n,i){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=t,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=n,this.reverse=i,this.op=e,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const e=this.outputShape.length,t=this.op===fo.Prod?"1.0":"0.0",n=this.exclusive?t:`getX(${go(e,"coords",this.op)})`,i=this.outputShape[this.outputShape.length-1];let r="",o="";return this.exclusive?(r=this.reverse?"end != "+(i-1):"end != 0",o=this.reverse?"end + 1":"end - 1"):(r=this.reverse?`end + pow2 < ${i}`:"end >= pow2",o=this.reverse?"end + pow2":"end - pow2"),`\n      ${C("index")} {\n       if (index < uniforms.size) {\n         var coords = getCoordsFromIndex(index);\n\n         let end = ${yo(e,"coords",this.op)};\n         var val = ${n};\n         let pow2 = i32(pow(2.0, uniforms.index));\n         if (${r}) {\n           let idx = ${o};\n           ${yo(e,"coords",this.op)} = idx;\n           val ${this.op}= getX(${go(e,"coords",this.op)});\n         }\n         setOutputAtIndex(index, val);\n       }\n      }\n    `}}function go(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function yo(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xo(e,t,n,i,r,o){const a=t.shape.length,s=u.C0T.getAxesPermutation([i],a);let l=t;null!=s&&(l=ri({inputs:{x:t},backend:n,attrs:{perm:s}}));const h=u.C0T.getInnerMostAxes(1,a)[0];if(h!==a-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${i}`);const d=l.shape[h];let c=en({inputs:{x:l},backend:n});for(let u=0;u<=Math.ceil(Math.log2(d))-1;u++){const t=new mo(e,l.shape,!1,o),i=c,r=[{type:"float32",data:[u]}];c=n.runWebGPUProgram(t,[c],c.dtype,r),n.disposeData(i.dataId)}if(r){const t=new mo(e,l.shape,r,o),i=c,a=[{type:"float32",data:[0]}];c=n.runWebGPUProgram(t,[c],c.dtype,a),n.disposeData(i.dataId)}if(null!=s){const e=u.C0T.getUndoAxesPermutation(s),t=ri({inputs:{x:c},backend:n,attrs:{perm:e}});return n.disposeData(c.dataId),n.disposeData(l.dataId),t}return c}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bo(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o,exclusive:a,reverse:s}=i;return xo(fo.Prod,r,n,o,a,s)}const wo={kernelName:u.jj_,backendName:"webgpu",kernelFunc:bo};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vo(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o,exclusive:a,reverse:s}=i;return xo(fo.Sum,r,n,o,a,s)}const So={kernelName:u.nY8,backendName:"webgpu",kernelFunc:vo};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ko(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,weights:o}=t,{size:a,binaryOutput:s}=i,l=1===r.shape.length,h=u.ZSL.sizeFromShape(o.shape),d=h>0,c=o.dtype,p=l?[r.shape[0]]:[r.shape[0],r.shape[1]],f=l?[a]:[r.shape[0],a],m=Gt({backend:n,attrs:{shape:f,value:0,dtype:c}}),g=new ir(p,d,s),y=[{type:"int32",data:[a]}],x=d?[r,o]:[r],b=n.runWebGPUProgram(g,x,c,y,m);return b}const Co={kernelName:u.wNW,backendName:"webgpu",kernelFunc:ko};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Io{constructor(e,t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${t}`,this.dataFormat=t}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let h = ${this.getHeightCoordString()};\n          let w = ${this.getWidthCoordString()};\n          let d = ${this.getDepthCoordString()};\n\n          let in_h = h / uniforms.blockSize;\n          let offset_h = h % uniforms.blockSize;\n          let in_w = w / uniforms.blockSize;\n          let offset_w = w % uniforms.blockSize;\n          let offset_d = (offset_h * uniforms.blockSize + offset_w) *\n            ${this.getOutputDepthSize()};\n          let in_d = d + offset_d;\n\n          let rlt = ${this.getInputSamplingString()};\n          setOutputAtIndex(index, rlt);\n        }\n      }`;return e}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ro(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{blockSize:o,dataFormat:a}=i,s=r.shape[0],u="NHWC"===a?r.shape[1]:r.shape[2],l="NHWC"===a?r.shape[2]:r.shape[3],h="NHWC"===a?r.shape[3]:r.shape[1],d=u*o,c=l*o,p=h/(o*o),f="NHWC"===a?[s,d,c,p]:[s,p,d,c],m=[{type:"int32",data:[o]}],g=new Io(f,a);return n.runWebGPUProgram(g,[r],r.dtype,m)}const Po={kernelName:u.TMz,backendName:"webgpu",kernelFunc:Ro};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class zo{constructor(e,t,n,i=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=e,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),i&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.addBias=i,this.activation=r,this.hasPreluActivation=o,this.filterHeight=t,this.filterWidth=n,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const e=this.filterWidth*this.filterHeight,t=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],n=this.workgroupSize[1]+this.filterHeight-1,i=this.workgroupSize[0]+this.filterWidth-1,r=`\n      ${It(this.activation,this.hasPreluActivation,!1,4)}\n\n      var<workgroup> mm_Asub : array<array<f32, ${i}>, ${n}>;\n      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;\n      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {\n        var value = 0.0;\n        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])\n        {\n          value = getX(batch, channel, row, col);\n        }\n        return value;\n      }\n\n      ${C()} {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;\n        let channelMul = uniforms.wShape[3];\n        let d1 = coords[1] / channelMul;\n        let q = coords[1] % channelMul;\n\n        let inputRowStart = xRCCorner.x;\n        let inputColStart = xRCCorner.y;\n\n        let localRow = i32(localId.y);\n        let localCol = i32(localId.x);\n\n        // Load one tile of X into local memory.\n        for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${this.workgroupSize[1]}) {\n          for (var inputCol = localCol; inputCol < ${i}; inputCol = inputCol + ${this.workgroupSize[0]}) {\n            let rowOffset = inputRow - localRow;\n            let colOffset = inputCol - localCol;\n            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);\n          }\n        }\n\n        // Load one tile of W into local memory.\n        var wIndex = i32(localIndex);\n        ${e<t?`if (wIndex < ${e})`:`for(; wIndex < ${e}; wIndex = wIndex + ${t})`}\n\n        {\n          let wRow = wIndex / ${this.filterWidth};\n          let wCol = wIndex % ${this.filterWidth};\n          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);\n        }\n\n        workgroupBarrier();\n\n        var value = 0.0;\n        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {\n          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {\n            let xVal = mm_Asub[localRow + wR][localCol + wC];\n            let wVal = mm_Bsub[wR][wC];\n            value = fma(xVal, wVal, value);\n          }\n        }\n        ${Rt(this.addBias,this.activation)}\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `;return r}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ao{constructor(e,t=!1,n=null,i=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=e.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const r=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=K(r),this.dispatch=V(this.dispatchLayout,r,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),u.ZSL.assert("channelsLast"===e.dataFormat,(()=>"TODO: NCHW is unimplemented")),t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=n,this.hasPreluActivation=i,this.shaderKey=`depthwiseVec4_${n}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const e=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,t=this.convInfo.strideHeight,n=this.convInfo.strideWidth,i=`\n      ${It(this.activation,this.hasPreluActivation,!0,4)}\n      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {\n        var value = vec4<f32>(0.0);\n        if (col >=0 && col < uniforms.inDims[1]) {\n          value = getX(batch, row, col, channel);\n        }\n        return value;\n      }\n\n      ${C("index")} {\n        let width0 = uniforms.outShape[3] / ${this.outputComponent};\n        let d1 = (index % width0) * ${this.outputComponent};\n        var index1 = index / width0;\n        let width1 = uniforms.virtualWidth / ${this.workPerThread};\n        let c = (index1 % width1) * ${this.workPerThread};\n        index1 = index1 / width1;\n        let r = index1 % uniforms.outShape[1];\n        let batch = index1 / uniforms.outShape[1];\n\n        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${t}, ${n}) - uniforms.pads;\n\n        let xRCorner = xRCCorner.x;\n        let xCCorner = xRCCorner.y;\n        var xVals : array<vec4<f32>, ${e}>;\n        var dotProd : array<vec4<f32>, ${this.workPerThread}>;\n        for (var i = 0; i < ${this.workPerThread}; i++) {\n          dotProd[i] = vec4<f32>(0.0);\n        }\n\n        // Use constant instead of uniform can give better performance.\n        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {\n          let xR = xRCorner + wR;\n          if (xR >=0 && xR < uniforms.inDims[0]) {\n            for (var i = 0; i < ${e}; i++) {\n              xVals[i] = readX(batch, xR, xCCorner + i, d1);\n            }\n            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {\n              let wValue = getW(wR, wC, d1, 0);\n              for (var i = 0; i < ${this.workPerThread}; i++) {\n                dotProd[i] = fma(xVals[i * ${n} + wC], wValue, dotProd[i]);\n              }\n            }\n          }\n        }\n\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let coords = vec4<i32>(batch, r, c + i, d1);\n          if (coordsInBounds4D(coords, uniforms.outShape)) {\n            var value = dotProd[i];\n            ${Rt(this.addBias,this.activation)}\n            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n          }\n        }\n      }\n    `;return i}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class To{constructor(e,t=!1,n=null,i=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,\n      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===e.dataFormat,t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=n,this.hasPreluActivation=i,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const e=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);",t=`\n      ${It(this.activation,this.hasPreluActivation,!1,4)}\n\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let batch = coords[0];\n          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;\n          let d2 = coords[${this.isChannelsLast?3:1}];\n          let channelMul = uniforms.wShape[3];\n          let d1 = d2 / channelMul;\n          let q = d2 % channelMul;\n\n          let inputRowStart = xRCCorner.x;\n          let inputColStart = xRCCorner.y;\n          let inputRowEnd = inputRowStart + uniforms.filterHeight *\n              uniforms.dilations[0];\n          let inputColEnd = inputColStart + uniforms.filterWidth *\n              uniforms.dilations[1];\n\n          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get\n          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all\n          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.\n          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.\n          var value = 0.0;\n\n          // Extract if checking out of for loop for performance.\n          if (inputRowStart >= 0 && inputColStart >= 0 &&\n            inputRowEnd < uniforms.inDims[0] &&\n                inputColEnd < uniforms.inDims[1]) {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  let xVal = ${e};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            } else {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                if (xR < 0 || xR >= uniforms.inDims[0]) {\n                  continue;\n                }\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  if (xC < 0 || xC >= uniforms.inDims[1]) {\n                    continue;\n                  }\n\n                  let xVal = ${e};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            }\n            ${Rt(this.addBias,this.activation)}\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Lo(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o}=t,{strides:a,pad:s,dataFormat:l,dilations:h,dimRoundingMode:d}=i,c=u.C0T.convertConv2DDataFormat(l);let p=h;null==p&&(p=[1,1]);const f=u.C0T.computeConv2DInfo(r.shape,o.shape,a,p,s,d,!0,c),m=[{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.inHeight,f.inWidth]}],g="channelsLast"===f.dataFormat;let y;return!g&&f.inHeight>16&&f.inWidth>16&&1===f.strideHeight&&1===f.strideWidth&&1===f.dilationWidth&&1===f.dilationHeight&&f.inChannels===f.outChannels?y=new zo(f.outShape,f.filterHeight,f.filterWidth):g&&f.outHeight>4&&f.outWidth>4&&f.strideWidth<=2&&f.inChannels===f.outChannels&&1===f.dilationHeight&&1===f.dilationWidth&&f.inChannels%4===0?(y=new Ao(f),m.push({type:"int32",data:[y.virtualWidth]})):(y=new To(f),m.push({type:"int32",data:[f.filterHeight]},{type:"int32",data:[f.filterWidth]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]})),n.runWebGPUProgram(y,[r,o],r.dtype,m)}const Eo={kernelName:u.tGH,backendName:"webgpu",kernelFunc:Lo};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class $o{constructor(e){this.variableNames=["x","dy"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,\n      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){const e=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let dm = coords[3];\n        let d2 = d1 * uniforms.channelMul + dm;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yR = 0; yR < uniforms.outHeight; yR++) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC++) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              let dyValue = getDy(b, yR, yC, d2);\n              let xValue = getX(b, xR, xC, d1);\n              dotProd += xValue * dyValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `;return e}}class Fo{constructor(e){this.variableNames=["dy","W"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){const e=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[3];\n        let dyCorner = coords.yz - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n\n          let idyR = i32(dyR);\n          let wRPerm = uniforms.filterDims[0] - 1 - wR;\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n\n            let idyC = i32(dyC);\n            let wCPerm = uniforms.filterDims[1] - 1 - wC;\n\n            for (var dm = 0; dm < uniforms.channelMul; dm++) {\n              let d2 = d1 * uniforms.channelMul + dm;\n              let xValue = getDy(batch, idyR, idyC, d2);\n              let wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function No(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,dy:o}=t,{strides:a,dilations:s,pad:l,dimRoundingMode:h,filterShape:d}=i,c=u.C0T.computeConv2DInfo(r.shape,d,a,s,l,h,!0),p=new $o(c),f=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.inHeight]},{type:"int32",data:[c.inWidth]},{type:"int32",data:[c.batchSize]},{type:"int32",data:[c.outChannels/c.inChannels]}];return n.runWebGPUProgram(p,[r,o],"float32",f)}const Do={kernelName:u.X$8,backendName:"webgpu",kernelFunc:No};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _o(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,filter:o}=t,{strides:a,dilations:s,pad:l,dimRoundingMode:h,inputShape:d}=i,c=u.C0T.computeConv2DInfo(d,o.shape,a,s,l,h,!0),p=new Fo(c),f=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.filterHeight-1-c.padInfo.top,c.filterWidth-1-c.padInfo.left]},{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.outChannels/c.inChannels]}];return n.runWebGPUProgram(p,[r,o],r.dtype,f)}const Mo={kernelName:u.nVu,backendName:"webgpu",kernelFunc:_o};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Oo{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,e],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bo(e){const{inputs:t,backend:n}=e,{x:i}=t,r=[...i.shape,...i.shape],o=u.ZSL.sizeFromShape(i.shape),a=Kt({inputs:{x:i},backend:n,attrs:{shape:[o]}}),s=new Oo(o),l=n.runWebGPUProgram(s,[a],a.dtype),h=Kt({inputs:{x:l},backend:n,attrs:{shape:r}});return n.disposeData(a.dataId),n.disposeData(l.dataId),h}const Uo={kernelName:u.ORI,backendName:"webgpu",kernelFunc:Bo};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Wo{constructor(e){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){const e=`\n       ${C("index")} {\n         if (index < uniforms.size) {\n           let neg_infinity = -3.4e38;\n           let coords = getOutputCoords();\n           let batch = coords.x;\n           let d1 = coords.w;\n           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;\n           let hBeg = outTopLeftCorner.x;\n           let wBeg = outTopLeftCorner.y;\n\n           var curVal = neg_infinity;\n           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {\n             let hIn = hBeg + h * uniforms.dilations[0];\n\n             if (hIn >= 0 && hIn < uniforms.xShape[1]) {\n               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {\n                 let wIn = wBeg + w * uniforms.dilations[1];\n\n                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {\n                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);\n                   if (val > curVal) {\n                     curVal = val;\n                   }\n                 }\n               }\n             }\n           }\n\n           setOutputAtIndex(index, curVal);\n         }\n       }\n     `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vo(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o}=t,{strides:a,pad:s,dilations:l}=i,h=u.C0T.computeDilation2DInfo(r.shape,o.shape,a,s,"NHWC",l),d=[h.padInfo.top,h.padInfo.left],c=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[...d]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]}],p=new Wo(h),f=n.runWebGPUProgram(p,[r,o],r.dtype,c);return f}const Ho={kernelName:u.jxD,backendName:"webgpu",kernelFunc:Vo};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Go{constructor(e,t){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.inShape,this.dispatchLayout=K(e.outShape),this.dispatch=V(this.dispatchLayout,e.outShape,this.workgroupSize),"float32"!==t&&"int32"!==t)throw new Error(`Dilation2DBackpropInput only supports float32 and int32\n          types, does not support ${t} type.`);this.type=t,this.shaderKey="dilation2DBackpropInput"}getUserCode(){const e=`\n       ${C("index")} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var xRMax = 0;\n           var xCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     xRMax = xR;\n                     xCMax = xC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.xShape[3] *\n               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));\n           let value = getDy(b, r, c, d);\n           ${x("&result[flatIndexIn]","value",this.type)}\n         }\n       }\n     `;return e}}class jo{constructor(e,t,n){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.filterShape,this.dispatchLayout=K(e.outShape),this.dispatch=V(this.dispatchLayout,e.outShape,this.workgroupSize),"float32"!==n&&"int32"!==n)throw new Error(`Dilation2DBackpropFilter only supports float32 and int32\n          types, does not support ${n} type.`);this.type=n,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){const e=`\n       ${C("index")} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var wRMax = 0;\n           var wCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     wRMax = wR;\n                     wCMax = wC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);\n           let value = getDy(b, r, c, d);\n           ${x("&result[flatIndexIn]","value",this.type)}\n         }\n       }\n     `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ko(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o,dy:a}=t,{strides:s,pad:l,dilations:h}=i,d=u.C0T.computeDilation2DInfo(r.shape,o.shape,s,l,"NHWC",h),c=o.dtype,p=new jo(d,o.shape,c),f=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[u.ZSL.sizeFromShape(d.outShape)]}],m=Gt({backend:n,attrs:{shape:o.shape,value:0,dtype:c}});return n.runWebGPUProgram(p,[r,o,a],c,f,m)}const Xo={kernelName:u.pk0,backendName:"webgpu",kernelFunc:Ko};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qo(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o,dy:a}=t,{strides:s,pad:l,dilations:h}=i,d=u.C0T.computeDilation2DInfo(r.shape,o.shape,s,l,"NHWC",h),c=r.dtype,p=new Go(d,c),f=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[u.ZSL.sizeFromShape(d.outShape)]}],m=Gt({backend:n,attrs:{shape:d.inShape,value:0,dtype:c}});return n.runWebGPUProgram(p,[r,o,a],c,f,m)}const Yo={kernelName:u.bP9,backendName:"webgpu",kernelFunc:qo};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Zo{constructor(e,t,n){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=b.DRAW,this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=t,this.textureFormat=n,this.shaderKey=`draw_${t}_${n}`}getUserCode(){let e;const t="float32"===this.type?"value":"value / 255.0";e=`\n      if (uniforms.numChannels == 1) {\n        rgba[0] = ${t};\n        rgba[1] = ${t};\n        rgba[2] = ${t};\n      } else {\n        rgba[d] = ${t};\n      }`;const n=`\n       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;\n       ${C("index")} {\n         if (index < uniforms.size) {\n           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);\n           for (var d = 0; d < uniforms.numChannels; d = d + 1) {\n             let value = f32(inBuf[index * uniforms.numChannels + d]);\n             ${e}\n           }\n           rgba.x = rgba.x * rgba.w;\n           rgba.y = rgba.y * rgba.w;\n           rgba.z = rgba.z * rgba.w;\n           let coords = getCoordsFromIndex(index);\n           textureStore(outImage, vec2<i32>(coords.yx), rgba);\n         }\n       }\n      `;return n}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qo(e){const{inputs:t,backend:n,attrs:i}=e,{image:r}=t,{canvas:o,options:a}=i,[s,u]=r.shape.slice(0,2),{imageOptions:l}=a||{},h=(null===l||void 0===l?void 0:l.alpha)||1,d=n.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",c=[s,u],p=new Zo(c,r.dtype,d);o.width=u,o.height=s;const f="webgpu";let m,g=o.getContext(f);g||(m=new OffscreenCanvas(u,s),g=m.getContext(f));const y=3===r.shape.length?r.shape[2]:1;g.configure({device:n.device,format:d,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const x="int32",b=n.makeTensorInfo(c,x),w=n.tensorMap.get(b.dataId);w.resource=g.getCurrentTexture(),w.external=!0;const v=[{type:"uint32",data:[y]},{type:"float32",data:[h]}];if(n.runWebGPUProgram(p,[r],x,v,b),m){const e=o.getContext("2d");if(!e)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");e.drawImage(m,0,0)}return n.disposeData(b.dataId),r}const Jo={kernelName:u.XmO,backendName:"webgpu",kernelFunc:Qo},ea=sn({opType:te.MUL,cpuKernelImpl:zn,supportsComplex:!0}),ta={kernelName:u.xu7,backendName:"webgpu",kernelFunc:ea};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function na(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o,keepDims:a}=i;return ui(r,o,a,"sum",n)}const ia={kernelName:u.WuN,backendName:"webgpu",kernelFunc:na};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ra(e){const{inputs:t,backend:n,attrs:i}=e,{equation:r}=i,o=t,{allDims:a,summedDims:s,idDims:l}=u.C0T.decodeEinsumEquation(r,o.length);u.C0T.checkEinsumDimSizes(a.length,l,o);const{path:h,steps:d}=u.C0T.getEinsumComputePath(s,l),c=d.length;let p=null,f=a.length;const m=[];for(let g=0;g<c;++g){for(const e of d[g]){const{permutationIndices:t,expandDims:i}=u.C0T.getEinsumPermutation(f,l[e]);let r;u.C0T.isIdentityPermutation(t)?r=o[e]:(r=ri({inputs:{x:o[e]},backend:n,attrs:{perm:t}}),m.push(r));const a=r.shape.slice();for(let e=0;e<i.length;++e)a.splice(i[e],0,1);u.ZSL.arraysEqual(r.shape,a)||(r=Kt({inputs:{x:r},backend:n,attrs:{shape:a}}),m.push(r)),null===p?p=r:(p=ea({inputs:{a:r,b:p},backend:n}),m.push(p))}g<c-1&&(h[g]>=0&&(p=na({inputs:{x:p},backend:n,attrs:{axis:h[g]-(a.length-f),keepDims:!1}}),m.push(p)),f--)}for(const u of m)u!==p&&n.disposeData(u.dataId);return p}const oa={kernelName:u.Qgm,backendName:"webgpu",kernelFunc:ra},aa=an({opType:Ee.ELU}),sa={kernelName:u.Pah,backendName:"webgpu",kernelFunc:aa},ua=e=>{const{inputs:t,backend:n}=e,{dy:i,y:r}=t,o=new Jt(te.ELU_DER,i.shape,r.shape);return n.runWebGPUProgram(o,[i,r],i.dtype)},la={kernelName:u.rsH,backendName:"webgpu",kernelFunc:ua},ha=sn({opType:te.EQUAL,dtype:"bool",cpuKernelImpl:pn}),da={kernelName:u.BRl,backendName:"webgpu",kernelFunc:ha},ca=an({opType:Ee.ERF}),pa={kernelName:u._s9,backendName:"webgpu",kernelFunc:ca},fa=an({opType:Ee.EXP,cpuKernelImpl:fn,dtype:"float32"}),ma={kernelName:u.ox3,backendName:"webgpu",kernelFunc:fa};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ga(e){const{inputs:t,attrs:n,backend:i}=e,{dim:r}=n,{input:o}=t,a=o.shape.length,s=o.shape.slice();let l=r;return r<0&&(u.ZSL.assert(-(a+1)<=r,(()=>`Axis must be in the interval [${-(a+1)}, ${a}]`)),l=a+r+1),s.splice(l,0,1),Kt({inputs:{x:o},backend:i,attrs:{shape:s}})}const ya={kernelName:u.ybN,backendName:"webgpu",kernelFunc:ga},xa=an({opType:Ee.EXPM1,cpuKernelImpl:mn}),ba={kernelName:u.ybj,backendName:"webgpu",kernelFunc:xa};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class wa{constructor(e,t){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=e,this.shaderKey=`fft_${e}`}getUserCode(){const e="real"===this.component?"return real * expR - imag * expI;":"return real * expI + imag * expR;",t=`\n    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {\n      ${e}\n    }\n\n    fn mulMatDFT(batch: i32, index: i32) -> f32 {\n      let indexRatio = f32(index) / f32(uniforms.realShape[1]);\n      let exponentMultiplierTimesIndexRatio =\n          uniforms.exponentMultiplier * indexRatio;\n\n      var result = 0.0;\n\n      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {\n        // x = (-2|2 * PI / N) * index * i;\n        let x = exponentMultiplierTimesIndexRatio * f32(i);\n        let expR = cos(x);\n        let expI = sin(x);\n        let real = getReal(batch, i);\n        let imag = getImag(batch, i);\n\n        result = result +\n            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;\n      }\n\n      return result;\n    }\n\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));\n      }\n    }\n  `;return t}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function va(e,t,n){const i=n.tensorMap.get(e.dataId),r=u.ZSL.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],a=r/o,s=[],l=Kt({inputs:{x:e},backend:n,attrs:{shape:[a,o]}});s.push(l);const h=l.shape,d=new wa("real",h),c=new wa("imag",h),p=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:h},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:h}],f=t?2*Math.PI:-2*Math.PI,m=t?h[1]:1,g=[{type:"float32",data:[f]},{type:"float32",data:[m]}],y=n.runWebGPUProgram(d,p,"float32",g);s.push(y);const x=n.runWebGPUProgram(c,p,"float32",g);s.push(x);const b=nn({inputs:{real:y,imag:x},backend:n});s.push(b);const w=Kt({inputs:{x:b},backend:n,attrs:{shape:e.shape}});return s.forEach((e=>n.disposeData(e.dataId))),w}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Sa(e){const{inputs:t,backend:n}=e,{input:i}=t;return va(i,!1,n)}const ka={kernelName:u.rGP,backendName:"webgpu",kernelFunc:Sa};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ca{constructor(e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let coordX = uniforms.xShape[2] - coords[2] - 1;\n          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);\n          setOutputAtIndex(index, outputValue);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ia={kernelName:u.BxF,backendName:"webgpu",kernelFunc:({inputs:e,backend:t})=>{const{image:n}=e,i=t,r=new Ca(n.shape),o=i.runWebGPUProgram(r,[n],n.dtype);return o}},Ra=an({opType:Ee.FLOOR,cpuKernelImpl:gn}),Pa={kernelName:u.ZgB,backendName:"webgpu",kernelFunc:Ra},za=sn({opType:te.FLOOR_DIV,cpuKernelImpl:yn,dtype:"int32"}),Aa={kernelName:u.ElG,backendName:"webgpu",kernelFunc:za};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ta{constructor(e,t,n=!1){this.pixelsOpType=b.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[t,1,1]),this.importVideo=n,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const e=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)",t=this.importVideo?"texture_external":"texture_2d<f32>";return`\n      @binding(1) @group(0) var src: ${t};\n      ${C("index")} {\n        let flatIndex = index * uniforms.numChannels;\n        if (flatIndex < uniforms.size) {\n          let coords = getCoordsFromIndex(flatIndex);\n          let values = ${e};\n          for (var i = 0; i < uniforms.numChannels; i = i + 1) {\n            result[flatIndex + i] = i32(floor(255.0 * values[i]));\n          }\n        }\n      }\n  `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const La={kernelName:u.awo,backendName:"webgpu",kernelFunc:Fa};let Ea,$a=(0,u._K2)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function Fa(e){const{inputs:t,backend:n,attrs:i}=e;let{pixels:r}=t;const{numChannels:o}=i;if(null==r)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const a="undefined"!==typeof HTMLVideoElement&&r instanceof HTMLVideoElement,s="undefined"!==typeof HTMLImageElement&&r instanceof HTMLImageElement,l="undefined"!==typeof HTMLCanvasElement&&r instanceof HTMLCanvasElement||"undefined"!==typeof OffscreenCanvas&&r instanceof OffscreenCanvas,h="undefined"!==typeof ImageBitmap&&r instanceof ImageBitmap,[d,c]=a?[r.videoWidth,r.videoHeight]:[r.width,r.height],p=[c,d,o],f=(0,u._K2)().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&a,m=a||s;if(h||l||m){let e;if(f)e=n.device.importExternalTexture({source:r});else{if(m){const e=(0,u._K2)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");null!=Ea&&e===$a||($a=e,Ea=document.createElement("canvas").getContext("2d",{willReadFrequently:$a})),Ea.canvas.width=d,Ea.canvas.height=c,Ea.drawImage(r,0,0,d,c),r=Ea.canvas}const t=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,i="rgba8unorm",o=n.textureManager.acquireTexture(p[1],p[0],i,t);n.queue.copyExternalImageToTexture({source:r},{texture:o},[p[1],p[0]]),e=o}const t=u.ZSL.sizeFromShape(p),i=u.ZSL.computeStrides(p),a=new Ta(p,o,f),s=[{type:"uint32",data:[t]},{type:"uint32",data:[o]},{type:"uint32",data:[...i]}],l=n.makeTensorInfo([c,d],"int32"),h=n.tensorMap.get(l.dataId);h.resource=e;const g=n.runWebGPUProgram(a,[l],"int32",s);return n.disposeData(l.dataId),g}const g=r.data;let y=g;if(null!=o&&4!==o){y=new Uint8Array(r.width*r.height*o);const e=g.length;let t=0;for(let n=0;n<e;n++)n%4<o&&(y[t++]=g[n])}const x=n.makeTensorInfo(p,"int32",new Int32Array(y));return n.uploadToGPU(x.dataId),x}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Na{constructor(e,t,n,i,r){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],u.C0T.assertAndGetBroadcastShape(e,t),u.C0T.assertAndGetBroadcastShape(e,n),this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),null!=i&&(u.C0T.assertAndGetBroadcastShape(e,i),this.variableNames.push("offset")),null!=r&&(u.C0T.assertAndGetBroadcastShape(e,r),this.variableNames.push("scale")),this.offsetShape=i,this.scaleShape=r,this.shaderKey="batchNorm"}getUserCode(){let e="0.0";null!=this.offsetShape&&(e="getOffsetByOutputIndex(index)");let t="1.0";null!=this.scaleShape&&(t="getScaleByOutputIndex(index)");const n=`\n      ${C("index")} {\n        if (index < uniforms.size)\n        {\n          let xValue = getXByOutputIndex(index);\n          let meanValue = getMeanByOutputIndex(index);\n          let varianValue = getVarianceByOutputIndex(index);\n          let offsetValue = ${e};\n          let scaleValue = ${t};\n          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));\n          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));\n        }\n      }\n  `;return n}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Da={kernelName:u.i5R,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:i,scale:r,offset:o,mean:a,variance:s}=e,{varianceEpsilon:u}=t,l=n,h=[i,a,s];let d=null;null!=o&&(d=o.shape,h.push(o));let c=null;null!=r&&(c=r.shape,h.push(r));const p=new Na(i.shape,a.shape,s.shape,d,c),f=[{type:"float32",data:[u]}];return l.runWebGPUProgram(p,h,i.dtype,f)}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _a(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o,bias:a,preluActivationWeights:s}=t,{strides:l,pad:h,dataFormat:d,dilations:c,dimRoundingMode:p,activation:f,leakyreluAlpha:m}=i,g=u.C0T.convertConv2DDataFormat(d),y=u.C0T.computeConv2DInfo(r.shape,o.shape,l,c,h,p,!1,g);return Br({x:r,filter:o,convInfo:y,backend:n,bias:a,preluActivationWeights:s,leakyreluAlpha:m,activation:f})}const Ma={kernelName:u.aAr,backendName:"webgpu",kernelFunc:_a};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Oa(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,filter:o,bias:a,preluActivationWeights:s}=t,{strides:l,pad:h,dilations:d,dimRoundingMode:c,activation:p,leakyreluAlpha:f}=i;let m=d;null==m&&(m=[1,1]),u.ZSL.assert(u.C0T.eitherStridesOrDilationsAreOne(l,m),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`));const g=u.C0T.computeConv2DInfo(r.shape,o.shape,l,m,h,c,!0),y=[r,o],x=null!=a,b=null!=s;x&&y.push(a),b&&y.push(s);const w=[{type:"int32",data:[g.padInfo.top,g.padInfo.left]},{type:"int32",data:[g.inHeight,g.inWidth]}];let v;g.outHeight>4&&g.outWidth>4&&g.strideWidth<=2&&g.inChannels===g.outChannels&&1===g.dilationHeight&&1===g.dilationWidth&&g.inChannels%4===0?(v=new Ao(g,x,p,b),w.push({type:"int32",data:[v.virtualWidth]})):(v=new To(g,x,p,b),w.push({type:"int32",data:[g.filterHeight]},{type:"int32",data:[g.filterWidth]},{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.dilationHeight,g.dilationWidth]})),"leakyrelu"===p&&(w.push({type:"float32",data:[f]}),v.uniforms+=" alpha : f32,");const S=n.runWebGPUProgram(v,y,"float32",w);return S}const Ba={kernelName:u.T7M,backendName:"webgpu",kernelFunc:Oa};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ua{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${e}`,this.sliceDim=e,this.uniforms=`sliceDim : i32, strides : ${S(e)},`}getUserCode(){let e;e=this.sliceDim>1?"uniforms.strides[j]":"uniforms.strides";const t=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          var flattenIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexTemp = i32(round(getIndices(coords[0], j)));\n            let strideNum = ${e};\n            flattenIndex = flattenIndex + indexTemp * strideNum;\n          }\n\n          setOutputAtIndex(index, getA(flattenIndex, coords[1]));\n        }\n      }\n      `;return t}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Wa(e){const{inputs:t,backend:n}=e,{params:i,indices:r}=t,o=r.shape,a=o[o.length-1],s=u.ZSL.sizeFromShape(i.shape),[l,h,d,c]=u.C0T.prepareAndValidate(i,r),p=Kt({inputs:{x:r},backend:n,attrs:{shape:[h,a]}}),f=Kt({inputs:{x:i},backend:n,attrs:{shape:[u.ZSL.sizeFromShape(i.shape)/d,d]}});if(n.shouldExecuteOnCPU([i,r])||"string"===i.dtype){const e=n.readSync(r.dataId),t=n.bufferSync(i),o=xn(e,t,i.dtype,h,a,d,c,i.shape,s);return n.makeTensorInfo(l,i.dtype,o.values)}const m=new Ua(a,[h,d]),g=[{type:"int32",data:[a]},{type:"int32",data:c}],y=n.runWebGPUProgram(m,[f,p],f.dtype,g),x=Kt({inputs:{x:y},backend:n,attrs:{shape:l}});return n.disposeData(p.dataId),n.disposeData(f.dataId),n.disposeData(y.dataId),x}const Va={kernelName:u.O4G,backendName:"webgpu",kernelFunc:Wa};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ha{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.slice(),this.aShape=e,this.outputShape=t,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const e=Ga(this.aShape),t=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let indexZ = i32(getIndices(resRC.x, resRC.z));\n          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);\n          setOutputAtIndex(index, inBounds * getA(${e}));\n        }\n      }\n    `;return t}}function Ga(e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[];for(let i=0;i<e.length;i++)2===i?n.push("indexZ"):n.push(`${t[i]}`);return n.join()}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ja(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,indices:o}=t,{axis:a,batchDims:s}=i,l=u.ZSL.parseAxisParam(a,r.shape)[0],h=u.C0T.segment_util.collectGatherOpShapeInfo(r,o,l,s),d=u.ZSL.sizeFromShape(o.shape),c=[],p=Kt({inputs:{x:r},backend:n,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),f=Kt({inputs:{x:o},backend:n,attrs:{shape:[h.batchSize,d/h.batchSize]}});c.push(p),c.push(f);const m=[h.batchSize,h.outerSize,d/h.batchSize,h.sliceSize];if(n.shouldExecuteOnCPU([r,o])){const e=n.tensorMap.get(f.dataId),t=e.values,i=(0,u.ra8)(f.shape,f.dtype,t),r=n.tensorMap.get(p.dataId),o=r.values,a=(0,u.ra8)(p.shape,p.dtype,o),s=bn(a,i,m);return c.forEach((e=>n.disposeData(e.dataId))),n.makeTensorInfo(h.outputShape,s.dtype,s.values)}const g=new Ha(p.shape,m),y=n.runWebGPUProgram(g,[p,f],p.dtype);c.push(y);const x=Kt({inputs:{x:y},backend:n,attrs:{shape:h.outputShape}});return c.forEach((e=>n.disposeData(e.dataId))),x}const Ka={kernelName:u.mxL,backendName:"webgpu",kernelFunc:ja},Xa=sn({opType:te.GREATER,cpuKernelImpl:vn,dtype:"bool"}),qa={kernelName:u.XhZ,backendName:"webgpu",kernelFunc:Xa},Ya=sn({opType:te.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:wn}),Za={kernelName:u.lLS,backendName:"webgpu",kernelFunc:Ya};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qa(e){const{inputs:t,backend:n}=e,{input:i}=t;return va(i,!0,n)}const Ja={kernelName:u.OAQ,backendName:"webgpu",kernelFunc:Qa},es=an({opType:Ee.IS_FINITE,dtype:"bool"}),ts={kernelName:u.gIW,backendName:"webgpu",kernelFunc:es},ns=an({opType:Ee.IS_INF,dtype:"bool"}),is={kernelName:u.E3$,backendName:"webgpu",kernelFunc:ns},rs=an({opType:Ee.IS_NAN,dtype:"bool"}),os={kernelName:u.iPs,backendName:"webgpu",kernelFunc:rs};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function as(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{alpha:o}=i,a=[{type:"float32",data:[o]}],s=new on(r.shape,Ee.LEAKYRELU,"alpha : f32,");return n.runWebGPUProgram(s,[r],"float32",a)}const ss={kernelName:u.X0$,backendName:"webgpu",kernelFunc:as},us=sn({opType:te.LESS,dtype:"bool",cpuKernelImpl:kn}),ls={kernelName:u.mIA,backendName:"webgpu",kernelFunc:us},hs=sn({opType:te.LESS_EQUAL,dtype:"bool",cpuKernelImpl:Sn}),ds={kernelName:u.CwD,backendName:"webgpu",kernelFunc:hs};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class cs{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ps(e){const{backend:t,attrs:n}=e,{start:i,stop:r,num:o}=n,a=(r-i)/(o-1),s=new cs(o),u=[{type:"float32",data:[i]},{type:"float32",data:[a]}];return t.runWebGPUProgram(s,[],"float32",u)}const fs={kernelName:u.mnI,backendName:"webgpu",kernelFunc:ps},ms=an({opType:Ee.LOG,cpuKernelImpl:Cn}),gs={kernelName:u.tG8,backendName:"webgpu",kernelFunc:ms},ys=an({opType:Ee.LOG1P}),xs={kernelName:u.Cg$,backendName:"webgpu",kernelFunc:ys},bs=sn({opType:te.LOGICAL_AND,dtype:"bool"}),ws={kernelName:u.RUm,backendName:"webgpu",kernelFunc:bs},vs=an({opType:Ee.LOGICAL_NOT}),Ss={kernelName:u.nZd,backendName:"webgpu",kernelFunc:vs},ks=sn({opType:te.LOGICAL_OR}),Cs={kernelName:u.LXA,backendName:"webgpu",kernelFunc:ks},Is="\n  var powValue = 0.0;\n  let basis = uniforms.bias + uniforms.alpha * sum;\n  if (uniforms.beta == 0.5) {\n    powValue = inverseSqrt(basis);\n  } else if (uniforms.beta == 1.0) {\n    powValue = 1.0 / basis;\n  } else {\n    powValue = exp(log(basis) * (-uniforms.beta));\n  }\n";class Rs{constructor(e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n        let d = coords[3];\n\n        let x = getX(b, r, c, d);\n        var sum = 0.0;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let idx = d + i;\n          if (idx >= 0 && idx < uniforms.xShape[3]) {\n            let z = getX(b, r, c, idx);\n            sum = sum + z * z;\n          }\n        }\n        ${Is}\n\n        setOutputAtIndex(index, x * powValue);\n      }\n    }\n  `;return e}}class Ps{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,u.ZSL.assert(t<=this.maxAllowRadius,(()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${t}`)),this.outputShape=e,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=V(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){const e=`\n    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;\n    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};\n    const maxAllowRadius = ${this.maxAllowRadius};\n\n    ${C()} {\n      let localDepth = i32(localId.x);\n      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;\n      let xDepth = workgroupDepth + localDepth - maxAllowRadius;\n      let b = i32(globalId.z) / uniforms.xShape[1];\n      let r = i32(globalId.z) - b * uniforms.xShape[1];\n      let c = i32(globalId.y);\n      let d = workgroupDepth + localDepth;\n\n      var x = 0.0;\n      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {\n        x = getX(b, r, c, xDepth);\n      }\n      lrnSub[localDepth] = x;\n      workgroupBarrier();\n\n      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {\n        var sum = 0.0;\n        let index = localDepth + maxAllowRadius;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let z = lrnSub[index + i];\n          sum = sum + z * z;\n        }\n        ${Is}\n\n        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);\n      }\n    } `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zs(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{depthRadius:o,bias:a,alpha:s,beta:u}=i;let l;l=o>16?new Rs(r.shape):new Ps(r.shape,o);const h=[{type:"int32",data:[o]},{type:"float32",data:[a]},{type:"float32",data:[s]},{type:"float32",data:[u]}],d=n.runWebGPUProgram(l,[r],r.dtype,h);return d}const As={kernelName:u.jM4,backendName:"webgpu",kernelFunc:zs};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ts{constructor(e){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n\n        let MIN_DEPTH_BEGIN = 0;\n        let MAX_DEPTH_END = uniforms.outShape[3];\n        var result = 0.0;\n        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {\n          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);\n          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);\n\n          var norm = 0.0;\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            } else {\n              break;\n            }\n          }\n\n          norm = uniforms.alpha * norm + uniforms.bias;\n\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              var dyi = -2.0 * uniforms.alpha * uniforms.beta\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * uniforms.beta);\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            } else {\n              break;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, result);\n      }\n    }\n  `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ls(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,y:o,dy:a}=t,{depthRadius:s,bias:u,alpha:l,beta:h}=i,d=new Ts(r.shape),c=[{type:"int32",data:[s]},{type:"float32",data:[u]},{type:"float32",data:[l]},{type:"float32",data:[h]}],p=n.runWebGPUProgram(d,[r,o,a],r.dtype,c);return p}const Es={kernelName:u.ToN,backendName:"webgpu",kernelFunc:Ls},$s=sn({opType:te.MAX,cpuKernelImpl:Rn}),Fs={kernelName:u.LDN,backendName:"webgpu",kernelFunc:$s};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ns(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{filterSize:o,strides:a,pad:s,dimRoundingMode:l}=i,h=1,d=u.C0T.computePool2DInfo(r.shape,o,a,h,s,l);return Ni(r,d,"max",n)}const Ds={kernelName:u.t3d,backendName:"webgpu",kernelFunc:Ns};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _s(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{filterSize:o,strides:a,pad:s,dataFormat:l,dimRoundingMode:h}=i,d=[1,1,1],c=u.C0T.computePool3DInfo(r.shape,o,a,d,s,h,l),p=new Ti(c,"max"),f=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.front,c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.inDepth,c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]}];return n.runWebGPUProgram(p,[r],r.dtype,f)}const Ms={kernelName:u.ySp,backendName:"webgpu",kernelFunc:_s};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Os{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){const e=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            let curPosValue = wR * uniforms.filterDims[1] + wC;\n            let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `;return e}}class Bs{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){const e=`\n      ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;\n\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;\n              let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Us(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,input:o}=t,a=o,{filterSize:s,strides:l,pad:h,dimRoundingMode:d}=i,c=[1,1,1],p=u.C0T.computePool3DInfo(a.shape,s,l,c,h,d),f=new Ti(p,"max",!0);let m=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.front,p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.inDepth,p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]}];const g=n.runWebGPUProgram(f,[a],"int32",m),y=new Bs(p);m=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterDepth-1-p.padInfo.front,p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outDepth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]}];const x=n.runWebGPUProgram(y,[r,g],a.dtype,m);return n.disposeData(g.dataId),x}const Ws={kernelName:u.cHb,backendName:"webgpu",kernelFunc:Us};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vs(e){const{inputs:t,backend:n,attrs:i}=e,{dy:r,input:o,output:a}=t,s=o;Y([o,a],"maxPoolGrad");const{filterSize:l,strides:h,pad:d,dimRoundingMode:c}=i,p=u.C0T.computePool2DInfo(s.shape,l,h,1,d,c),f=new Ai(p,"max",!0);let m=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterHeight,p.effectiveFilterWidth]}];const g=n.runWebGPUProgram(f,[s],"int32",m),y=new Os(p);m=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]}];const x=n.runWebGPUProgram(y,[r,g],s.dtype,m);return n.disposeData(g.dataId),x}const Hs={kernelName:u.RXX,backendName:"webgpu",kernelFunc:Vs};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gs(e){const{inputs:t,backend:n,attrs:i}=e,{filterSize:r,strides:o,pad:a,includeBatchInIndex:s}=i,{x:l}=t;u.ZSL.assert(4===l.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${l.shape.length}.`));const h=[1,1];u.ZSL.assert(u.C0T.eitherStridesOrDilationsAreOne(o,h),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${h}'`));const d=u.C0T.computePool2DInfo(l.shape,r,o,h,a),c=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterHeight,d.effectiveFilterWidth]}];let p=new Ai(d,"max",!1);const f=n.runWebGPUProgram(p,[l],l.dtype,c);p=new Ai(d,"max",!0,!0,s);const m=n.runWebGPUProgram(p,[l],"int32",c);return[f,m]}const js={kernelName:u.TL8,backendName:"webgpu",kernelFunc:Gs};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ks(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o,keepDims:a}=i;return ui(r,o,a,"min",n)}const Xs={kernelName:u.lNG,backendName:"webgpu",kernelFunc:Ks},qs=sn({opType:te.MIN,cpuKernelImpl:Pn}),Ys={kernelName:u.LG0,backendName:"webgpu",kernelFunc:qs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Zs{constructor(e,t,n){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1])),this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,t.map(((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`})),this.offset="reflect"===n?0:1,this.shaderKey=`mirrorPad_${n}`}getUserCode(){const e=this.xShape.length,t=this.xShape.map(((e,t)=>`uniforms.pad${t}[0]`)).join(","),n=this.xShape.map(((t,n)=>`uniforms.pad${n}[0] + uniforms.xShape${e>1?`[${n}]`:""}`)).join(","),i=1===e?"start":"start[i]",r=1===e?"end":"end[i]",o=1===e?"outC":"outC[i]",a=S(e),s=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let start = ${a}(${t});\n          let end = ${a}(${n});\n          var outC = getCoordsFromIndex(index);\n          for (var i = 0; i < ${e}; i = i + 1) {\n            if (${o} < ${i}) {\n              ${o} = ${i} * 2 - ${o} - ${this.offset};\n            } else if(${o} >= ${r}) {\n              ${o} = (${r} - 1) * 2 - ${o} + ${this.offset};\n            }\n          }\n          let coords = outC - start;\n          setOutputAtIndex(index, getX(${s}));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Qs={kernelName:u.x7F,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:i}=e,{paddings:r,mode:o}=t,a=n,s=r.map((e=>({type:"int32",data:[e[0],e[1]]}))),u=new Zs(i.shape,r,o),l=a.runWebGPUProgram(u,[i],i.dtype,s);return l}},Js=sn({opType:te.MOD}),eu={kernelName:u.BLA,backendName:"webgpu",kernelFunc:Js};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class tu{constructor(e,t){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){const e=`\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {\n      let HASHSCALE1 = 443.8975;\n      let p = resultUV * seed;\n      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);\n      p3 = p3 + dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n\n        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),\n            f32(coords[0]) / f32(uniforms.outShape[0]));\n        let r = random(uniforms.seed, resUV);\n        var cdf = 0.0;\n        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {\n          cdf = cdf + getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutputAtIndexI32(index, i);\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);\n      }\n    }\n  `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class nu{constructor(e){this.variableNames=["logits"],this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){const e=`\n    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;\n    var<workgroup> rowMaxShared : f32;\n    var<workgroup> rowSumShared : f32;\n    const blockSize = ${this.workgroupSize[0]};\n    ${C("index")} {\n      let row = index / blockSize;\n      let tid = i32(localId.x);\n      let cols = uniforms.outShape[1];\n\n      var threadMax = -3.402823e+38f;\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = getLogits(row, col);\n        threadMax = max(threadMax, value);\n      }\n      if (tid < cols) {\n        buf[tid] = threadMax;\n      }\n      workgroupBarrier();\n\n      var reduceSize = min(cols, blockSize);\n      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {\n        reduceSize = currSize + (reduceSize & 1);\n        if (tid < currSize) {\n          buf[tid] = max(buf[tid], buf[tid + reduceSize]);\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowMaxShared = buf[0];\n      }\n      workgroupBarrier();\n\n      var threadSum = 0.0;\n      for (var col = tid; col < cols; col += blockSize) {\n        let subExp = exp(getLogits(row, col) - rowMaxShared);\n        threadSum += subExp;\n      }\n      buf[tid] = threadSum;\n      workgroupBarrier();\n\n      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {\n        if (tid < currSize) {\n          buf[tid] = buf[tid] + buf[tid + currSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowSumShared = buf[0];\n      }\n      workgroupBarrier();\n\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;\n        setOutputAtCoords(row, col, value);\n      }\n  }\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function iu(e){const{inputs:t,backend:n,attrs:i}=e,{logits:r}=t,{dim:o}=i,a=Kt({inputs:{x:r},backend:n,attrs:{shape:[u.ZSL.sizeFromShape(r.shape)/r.shape[o],r.shape[o]]}}),s=new nu(a.shape),l=n.runWebGPUProgram(s,[a],r.dtype),h=Kt({inputs:{x:l},backend:n,attrs:{shape:r.shape}});return n.disposeData(a.dataId),n.disposeData(l.dataId),h}const ru={kernelName:u.rFG,backendName:"webgpu",kernelFunc:iu};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ou(e){const{inputs:t,backend:n,attrs:i}=e,{logits:r}=t,{numSamples:o,seed:a,normalized:s}=i,u=s?r:iu({inputs:{logits:r},backend:n,attrs:{dim:r.shape.length-1}}),l=u.shape[0],h=u.shape[1],d=new tu(l,o),c=[{type:"float32",data:[a]},{type:"int32",data:[h]}],p=n.runWebGPUProgram(d,[u],"int32",c);return s||n.disposeData(u.dataId),p}const au={kernelName:u.WT3,backendName:"webgpu",kernelFunc:ou};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function su(e){const{inputs:t,backend:n}=e,{x:i}=t;if(n.shouldExecuteOnCPU([i])){const e=n.tensorMap.get(i.dataId),[t,r]=An(e.values,i.shape,i.dtype);return n.makeTensorInfo(r,i.dtype,t)}const r=new on(i.shape,Ee.NEG);return n.runWebGPUProgram(r,[i],i.dtype)}const uu={kernelName:u.l0G,backendName:"webgpu",kernelFunc:su};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function lu(e){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:i}=e,{boxes:r,scores:o}=t,{maxOutputSize:a,iouThreshold:s,scoreThreshold:l}=i,h=n.readSync(r.dataId),d=n.readSync(o.dataId),{selectedIndices:c}=u.kpo.nonMaxSuppressionV3Impl(h,d,a,s,l);return n.makeTensorInfo([c.length],"int32",new Int32Array(c))}const hu={kernelName:u.SDM,backendName:"webgpu",kernelFunc:lu};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function du(e){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:i}=e,{boxes:r,scores:o}=t,{maxOutputSize:a,iouThreshold:s,scoreThreshold:l,softNmsSigma:h}=i,d=n.readSync(r.dataId),c=n.readSync(o.dataId),p=a,f=s,m=l,g=h,{selectedIndices:y,selectedScores:x}=u.kpo.nonMaxSuppressionV5Impl(d,c,p,f,m,g);return[n.makeTensorInfo([y.length],"int32",new Int32Array(y)),n.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const cu={kernelName:u.e0f,backendName:"webgpu",kernelFunc:du};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class pu{constructor(e,t){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){const e=`\n      ${C("index")} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,\n                                      f32(i32(round(getX(coords.x))) == coords.y)));\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fu(e){const{inputs:t,backend:n,attrs:i}=e,{indices:r}=t,{dtype:o,depth:a,onValue:s,offValue:l}=i,h=u.ZSL.sizeFromShape(r.shape),d=new pu(h,a),c=Kt({inputs:{x:r},backend:n,attrs:{shape:[h]}}),p=[{type:"float32",data:[s]},{type:"float32",data:[l]}],f=n.runWebGPUProgram(d,[c],o,p);n.disposeData(c.dataId);const m=[...r.shape,a],g=Kt({inputs:{x:f},backend:n,attrs:{shape:m}});return n.disposeData(f.dataId),g}const mu={kernelName:u.urI,backendName:"webgpu",kernelFunc:fu};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gu(e){const{inputs:t,backend:n}=e,{x:i}=t;if("complex64"===i.dtype){const e=dr({inputs:{input:i},backend:n}),t=gu({inputs:{x:e},backend:n}),r=Pr({inputs:{input:i},backend:n}),o=gu({inputs:{x:r},backend:n}),a=nn({inputs:{real:t,imag:o},backend:n});return n.disposeData(e.dataId),n.disposeData(t.dataId),n.disposeData(r.dataId),n.disposeData(o.dataId),a}return Gt({attrs:{shape:i.shape,dtype:i.dtype,value:"string"===i.dtype?"":0},backend:n})}const yu={kernelName:u.xJ3,backendName:"webgpu",kernelFunc:gu};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xu(e){const{inputs:t,backend:n}=e,{x:i}=t;if("string"===i.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===i.dtype){const e=dr({inputs:{input:i},backend:n}),t=xu({inputs:{x:e},backend:n}),r=Pr({inputs:{input:i},backend:n}),o=gu({inputs:{x:r},backend:n}),a=nn({inputs:{real:t,imag:o},backend:n});return n.disposeData(e.dataId),n.disposeData(t.dataId),n.disposeData(r.dataId),n.disposeData(o.dataId),a}return Gt({attrs:{shape:i.shape,dtype:i.dtype,value:1},backend:n})}const bu={kernelName:u.LWX,backendName:"webgpu",kernelFunc:xu};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wu(e){const{inputs:t,backend:n,attrs:i}=e,{axis:r}=i;if(1===t.length)return ga({inputs:{input:t[0]},backend:n,attrs:{dim:r}});const o=t[0].shape,a=t[0].dtype;t.forEach((e=>{u.ZSL.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),u.ZSL.assert(a===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const s=[],l=t.map((e=>{const t=ga({inputs:{input:e},backend:n,attrs:{dim:r}});return s.push(t),t})),h=Lr({inputs:l,backend:n,attrs:{axis:r}});return s.forEach((e=>n.disposeData(e.dataId))),h}const vu={kernelName:u.mM$,backendName:"webgpu",kernelFunc:wu};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Su(e,t=!1){const n=e.length,i=S(n),r=e.map(((e,t)=>`uniforms.pad${t}[0]`)).join(","),o=e.map(((e,t)=>`uniforms.pad${t}[0] + uniforms.xShape${n>1?`[${t}]`:""}`)).join(","),a=n>1?`${i}(${r})`:`${r}`,s=n>1?`${i}(${o})`:`${o}`,u=n>1?"any(paddedCoords < start)":"paddedCoords < start",l=n>1?"any(paddedCoords >= end)":"paddedCoords >= end",h=n>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n):"coords";return`\n        let start = ${a};\n        let end = ${s};\n        if (${u} || ${l}) {\n          setOutputAtIndex(index, ${t?0:"uniforms.constantValue"});\n        } else {\n          let coords = paddedCoords - start;\n          setOutputAtIndex(index, getX(${h}));\n        }\n  `}class ku{constructor(e,t){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1])),this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),t.map(((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`})),this.xShape=e,this.shaderKey="pad"}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let paddedCoords = getCoordsFromIndex(index);\n          ${Su(this.xShape)}\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Cu=e=>{const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{paddings:o,constantValue:a}=i;if(o.every((e=>u.ZSL.arraysEqual(e,[0,0]))))return en({inputs:{x:r},backend:n});if(0===u.ZSL.sizeFromShape(r.shape)){const e=o.map(((e,t)=>e[0]+r.shape[t]+e[1]));return Gt({backend:n,attrs:{shape:e,value:a,dtype:r.dtype}})}const s=[{type:"float32",data:[a]}];o.map((e=>s.push({type:"int32",data:[e[0],e[1]]})));const l=new ku(r.shape,o);return n.runWebGPUProgram(l,[r],r.dtype,s)},Iu={kernelName:u.ODT,backendName:"webgpu",kernelFunc:Cu},Ru=sn({opType:te.POW}),Pu={kernelName:u.pyJ,backendName:"webgpu",kernelFunc:Ru};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zu(e){const{inputs:t,backend:n}=e,{x:i,alpha:r}=t,o=new Jt(te.PRELU,i.shape,r.shape);return n.runWebGPUProgram(o,[i,r],"float32")}const Au={kernelName:u.Ncv,backendName:"webgpu",kernelFunc:zu};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Tu(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:o,keepDims:a}=i;return ui(r,o,a,"prod",n)}const Lu={kernelName:u.kdj,backendName:"webgpu",kernelFunc:Tu},Eu=e=>{const{backend:t,attrs:n}=e,{start:i,stop:r,step:o,dtype:a}=n,s=En(i,r,o,a);return t.makeTensorInfo([s.length],a,s)},$u={kernelName:u.Q6t,backendName:"webgpu",kernelFunc:Eu},Fu=sn({opType:te.DIV}),Nu={kernelName:u.sDr,backendName:"webgpu",kernelFunc:Fu},Du=an({opType:Ee.RECIPROCAL}),_u={kernelName:u.huO,backendName:"webgpu",kernelFunc:Du},Mu=an({opType:Ee.RELU}),Ou={kernelName:u.fUj,backendName:"webgpu",kernelFunc:Mu},Bu=an({opType:Ee.RELU6}),Uu={kernelName:u.P_L,backendName:"webgpu",kernelFunc:Bu};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Wu{constructor(e,t,n){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,n,e[3]],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC =\n            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *\n            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);\n\n          // Compute the four integer indices.\n          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);\n          let sourceCeilRC = vec2<i32>(\n            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));\n\n          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);\n\n          let top = topLeft + (topRight - topLeft) * fracRC.y;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          let newValue = top + (bottom - top) * fracRC.x;\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vu(e){const{inputs:t,backend:n,attrs:i}=e,{images:r}=t,{alignCorners:o,size:a,halfPixelCenters:s}=i,[u,l]=a,h=o&&u>1?1:0,d=o&&l>1?1:0,c=s?.5:0,p=[{type:"float32",data:[h,d]},{type:"float32",data:[c]}],f=new Wu(r.shape,u,l);return n.runWebGPUProgram(f,[r],"float32",p)}const Hu={kernelName:u.hgw,backendName:"webgpu",kernelFunc:Vu};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Gu{constructor(e,t){this.variableNames=["dy"],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,\n       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeBilinearBackprop_${t}`}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let dxR = f32(dyR) * uniforms.heightScale;\n              let topDxRIndex = i32(floor(dxR));\n              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));\n              let dxRLerp = dxR - f32(topDxRIndex);\n              let inverseDxRLerp = 1.0 - dxRLerp;\n\n              let dxC = f32(dyC) * uniforms.widthScale;\n              let leftDxCIndex = i32(floor(dxC));\n              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));\n              let dxCLerp = dxC - f32(leftDxCIndex);\n              let inverseDxCLerp = 1.0 - dxCLerp;\n\n              if (r == topDxRIndex && c == leftDxCIndex) {\n                // topLeft\n                accumulator +=\n                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n              }\n\n              if (r == topDxRIndex && c == rightDxCIndex) {\n                // topRight\n                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == leftDxCIndex) {\n                // bottomLeft\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == rightDxCIndex) {\n                // bottomRight\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ju(e){const{inputs:t,backend:n,attrs:i}=e,{images:r,dy:o}=t,{alignCorners:a}=i,[,s,u]=r.shape,[,l,h]=o.shape,d=[a&&l>1?s-1:s,a&&h>1?u-1:u],c=[a&&l>1?l-1:l,a&&h>1?h-1:h],p=d[0]/c[0],f=d[1]/c[1],m=1/p,g=1/f,y=2*Math.ceil(m)+2,x=2*Math.ceil(g)+2,b=new Gu(r.shape,a),w=[{type:"int32",data:d},{type:"int32",data:c},{type:"float32",data:[p]},{type:"float32",data:[f]},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[y]},{type:"int32",data:[x]}];return n.runWebGPUProgram(b,[o],o.dtype,w)}const Ku={kernelName:u.FCQ,backendName:"webgpu",kernelFunc:ju};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Xu{constructor(e,t,n,i){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,n,e[3]],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=i,this.shaderKey=`resizeNearest_${i}`}getUserCode(){let e;e=this.halfPixelCenters?"max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":"vec2<f32>(rc) * effectiveInputOverOutputRatioRC";const t=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC = ${e};\n\n          // Compute the coordinators of nearest neighbor point.\n          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));\n          let sourceNearestRC = vec2<i32>(\n            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));\n          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qu(e){const{inputs:t,backend:n,attrs:i}=e,{images:r}=t,{alignCorners:o,halfPixelCenters:a,size:s}=i,[u,l]=s,h=o&&u>1?1:0,d=o&&l>1?1:0,c=o?.5:0,p=[{type:"float32",data:[h,d]},{type:"float32",data:[c]}],f=new Xu(r.shape,u,l,a);return n.runWebGPUProgram(f,[r],r.dtype,p)}const Yu={kernelName:u.jOE,backendName:"webgpu",kernelFunc:qu};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Zu{constructor(e,t){this.variableNames=["dy"],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,\n       winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeNearestNeigborBackprop_${t}`}getUserCode(){const e=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *\n                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));\n\n              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *\n                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));\n\n              let sourceNearestRow =\n                  i32(min(f32(uniforms.outShape[1] - 1),\n                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));\n\n              let sourceNearestCol =\n                  i32(min(f32(uniforms.outShape[2] - 1),\n                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));\n\n              if (r == sourceNearestRow && c == sourceNearestCol) {\n                accumulator += getDy(b, dyR, dyC, d);\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qu(e){const{inputs:t,backend:n,attrs:i}=e,{images:r,dy:o}=t,{alignCorners:a}=i,[,s,u]=r.shape,[,l,h]=o.shape,d=[a&&l>1?s-1:s,a&&h>1?u-1:u],c=[a&&l>1?l-1:l,a&&h>1?h-1:h],p=d[0]/c[0],f=d[1]/c[1],m=1/p,g=1/f,y=2*Math.ceil(m)+2,x=2*Math.ceil(g)+2,b=new Zu(r.shape,a),w=[{type:"int32",data:d},{type:"int32",data:c},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[y]},{type:"int32",data:[x]}];return n.runWebGPUProgram(b,[o],o.dtype,w)}const Ju={kernelName:u.XQy,backendName:"webgpu",kernelFunc:Qu};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class el{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){const e="\n      // Using uniform variables as judging conditions, so the function has\n      // coherent execution within all threads.\n      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {\n        var reverseCoords = coords;\n        if (uniforms.axis[0] == 1) {\n          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;\n        }\n        if (uniforms.axis[1] == 1) {\n          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;\n        }\n        if (uniforms.axis[2] == 1) {\n          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;\n        }\n        if (uniforms.axis[3] == 1) {\n          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;\n        }\n\n        return reverseCoords;\n      }\n    ",t=`\n      ${e}\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let reverseCoords = getReverseCoords(coords);\n          setOutputAtIndex(index, getX(reverseCoords[0],\n              reverseCoords[1], reverseCoords[2], reverseCoords[3]));\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function tl(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{dims:o}=i,a=r.shape.length;if(0===a)return en({inputs:{x:r},backend:n});const s=r.shape,l=[1,1,1,1];s.forEach(((e,t)=>{const n=t+4-a;l[n]=e}));const h=u.ZSL.parseAxisParam(o,r.shape),d=[0,0,0,0];h.forEach((e=>{const t=e+4-a;d[t]=1}));const c=[{type:"int32",data:d}],p=Kt({inputs:{x:r},backend:n,attrs:{shape:l}}),f=new el(l),m=n.runWebGPUProgram(f,[p],p.dtype,c);n.disposeData(p.dataId);const g=Kt({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeData(m.dataId),g}const nl={kernelName:u.D7i,backendName:"webgpu",kernelFunc:tl};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class il{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="centerX : f32, centerY : f32, sinRadians : f32,\n          cosRadians : f32,",this.shaderKey="rotate",this.outputShape=e,"number"===typeof t?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){const e=`\n        ${C("index")} {\n          if (index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *\n                uniforms.sinRadians;\n            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *\n                uniforms.cosRadians;\n            let coordX = i32(round(coordXFloat + uniforms.centerX));\n            let coordY = i32(round(coordYFloat + uniforms.centerY));\n            ${this.fillSnippet}\n            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&\n                coordY < uniforms.xShape[1]) {\n              outputValue = getX(coords[0], coordY, coordX, coords[3]);\n            }\n            setOutputAtIndex(index, outputValue);\n          }\n        }\n      `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const rl={kernelName:u.BK4,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:i}=e,{radians:r,fillValue:o,center:a}=t,s=n,l=new il(i.shape,o),[h,d]=u.C0T.getImageCenter(a,i.shape[1],i.shape[2]),c=[{type:"float32",data:[h]},{type:"float32",data:[d]},{type:"float32",data:[Math.sin(r)]},{type:"float32",data:[Math.cos(r)]}];"number"===typeof o?c.push({type:"float32",data:[Number.parseFloat(o.toFixed(2))]}):c.push({type:"float32",data:o});const p=s.runWebGPUProgram(l,[i],i.dtype,c);return p}},ol=an({opType:Ee.ROUND}),al={kernelName:u.hVg,backendName:"webgpu",kernelFunc:ol},sl=an({opType:Ee.RSQRT,cpuKernelImpl:$n}),ul={kernelName:u.TOR,backendName:"webgpu",kernelFunc:sl};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ll{constructor(e,t,n,i,r,o,a,s=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=o,this.type=a,this.sumDupeIndices=s,this.dispatchLayout=K(e),this.dispatch=V(this.dispatchLayout,e,this.workgroupSize),this.sliceDimGreaterThanOne=t>1,this.shaderKey=`scatter_${n}_${i}_${this.sliceDimGreaterThanOne}_${a}_${s}_${r.length}`;const u=S(r.length);this.uniforms=`sliceDim : i32, strides: ${u}, updatesSize: i32,`,this.updatesRank=i,this.indicesRank=n}getUserCode(){let e="";1===this.indicesRank?e="coords[0]":2===this.indicesRank&&(e="coords[0], j");const t=`getIndices(${e})`,n=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let i="",r="";1===this.dispatchLayout.x.length?(i="flattenedIndex",r="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {\n        return index;\n      }\n      "):2===this.dispatchLayout.x.length&&(i="vec2<i32>(flattenedIndex, coords[1])",r="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {\n        // N.B. |updates| could be a scalar tensor, conceptually representing a\n        // 2D tensor with all values equal to that. By design, its size must be\n        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|\n        // gives the other.\n        let sliceSize = uniforms.outShape[1];\n        let d0 = index / sliceSize;\n        let d1 = index - d0 * sliceSize;\n        return vec2<i32>(d0, d1);\n      }\n      ");const o=Array.from({length:this.updatesRank},((e,t)=>`coords[${t}]`)),a=`getUpdates(${o.join(", ")})`,s=`\n    ${r}\n      ${C("index")} {\n        if (index < uniforms.updatesSize) {\n          let coords = getUpdatesCoordsFromFlatIndex(index);\n          var flattenedIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexInside = i32(round(${t}));\n            flattenedIndex = flattenedIndex + indexInside * ${n};\n          }\n          let updateValue =\n              ${M(this.type)}(${a});\n          let flatIndex = getOutputIndexFromCoords(${i});\n\n          ${this.sumDupeIndices?x("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}\n        }\n      }`;return s}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function hl(e){const{inputs:t,backend:n,attrs:i}=e,{indices:r,updates:o}=t,{shape:a}=i,{sliceRank:s,numUpdates:l,sliceSize:h,strides:d,outputSize:c}=u.C0T.calculateShapes(o,r,a),p=[c/h,h];if(0===c)return n.makeTensorInfo(a,r.dtype);const f=Kt({inputs:{x:r},backend:n,attrs:{shape:[l,s]}}),m=Kt({inputs:{x:o},backend:n,attrs:{shape:[l,h]}}),g=m.dtype,y=Gt({backend:n,attrs:{shape:p,value:0,dtype:g}}),x=u.ZSL.sizeFromShape(m.shape),b=[{type:"int32",data:[s]},{type:"int32",data:d},{type:"int32",data:[x]}],w=new ll(m.shape,s,f.shape.length,m.shape.length,d,p,g),v=n.runWebGPUProgram(w,[m,f],g,b,y),S=Kt({inputs:{x:v},backend:n,attrs:{shape:a}});return n.disposeData(f.dataId),n.disposeData(m.dataId),n.disposeData(v.dataId),S}const dl={kernelName:u.pJc,backendName:"webgpu",kernelFunc:hl};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class cl{constructor(e,t){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=t,this.shaderKey=`search_sorted_${t}`}getUserCode(){const e="left"===this.side?"<":"<=",t=`\n      fn findBound(batch: i32, value: f32) -> i32 {\n        var left = i32(0);\n        var right = uniforms.numInputs;\n        while (left < right) {\n          var mid = (left + right) / 2;\n          if (getSortedSequence(batch, mid) ${e} value) {\n            left = mid + 1;\n          } else {\n            right = mid;\n          }\n        }\n        return right;\n      }\n\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let value = getValuesByOutputIndex(index);\n          setOutputAtIndexI32(index, findBound(coords[0], value));\n        }\n      }\n    `;return t}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pl(e){const{inputs:t,backend:n,attrs:i}=e,{sortedSequence:r,values:o}=t,{side:a}=i,s=new cl([o.shape[0],o.shape[1]],a),u=[{type:"int32",data:[r.shape[1]]}];return n.runWebGPUProgram(s,[r,o],"int32",u)}const fl={kernelName:u.uWl,backendName:"webgpu",kernelFunc:pl};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ml{constructor(e,t,n){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=e,this.rank=n,this.shaderKey="select"}getUserCode(){let e,t;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(1===this.rank)t="resRC",e="resRC";else{const n=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],r=[];for(let e=0;e<this.outputShape.length;e++)r.push(`${n[e]}`),e<this.cRank&&i.push(`${n[e]}`);e=i.join(),t=r.join()}const n=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let cVal = getC(${e});\n          if (cVal >= 1.0) {\n            setOutputAtIndex(index, getA(${t}));\n          } else {\n            setOutputAtIndex(index, getB(${t}));\n          }\n        }\n      }\n    `;return n}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gl(e){const{inputs:t,backend:n}=e,{condition:i,t:r,e:o}=t,a=new ml(i.shape.length,r.shape,r.shape.length);return n.runWebGPUProgram(a,[i,r,o],(0,u.TuY)(r.dtype,o.dtype))}const yl={kernelName:u.l6P,backendName:"webgpu",kernelFunc:gl},xl=an({opType:Ee.SELU}),bl={kernelName:u.u$b,backendName:"webgpu",kernelFunc:xl},wl=an({opType:Ee.SIGMOID}),vl={kernelName:u.vI1,backendName:"webgpu",kernelFunc:wl},Sl=an({opType:Ee.SIGN}),kl={kernelName:u.YVe,backendName:"webgpu",kernelFunc:Sl},Cl=an({opType:Ee.SIN}),Il={kernelName:u.hql,backendName:"webgpu",kernelFunc:Cl},Rl=an({opType:Ee.SINH}),Pl={kernelName:u.J3C,backendName:"webgpu",kernelFunc:Rl},zl=an({opType:Ee.SOFTPLUS}),Al={kernelName:u.Fin,backendName:"webgpu",kernelFunc:zl};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Tl{constructor(e,t,n,i,r,o){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const a=new Array(i.length);for(let s=0;s<a.length;s++)a[s]=i[r[s]];this.outputShape=a,this.newDim=r,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,this.paddedXShape=t,this.uniforms+=`reshapedPaddedXShape : ${S(i.length)}, paddedXShapeStrides : ${S(o)}, `,n.map(((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`})),this.shaderKey=`spaceToBatchND_${r}`}getUserCode(){const e=S(this.outputShape.length),t=ii(this.newDim),n=`\n      ${L(this.paddedXShape,"PaddedX")}\n      ${C("index")} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${e}(${t}), uniforms.reshapedPaddedXShape);\n          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);\n          ${Su(this.xShape,!0)}\n        }\n      }\n    `;return n}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ll=e=>{const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{blockShape:o,paddings:a}=i;u.ZSL.assert(r.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet"));const s=o.reduce(((e,t)=>e*t)),l=[[0,0]];l.push(...a);for(let u=1+o.length;u<r.shape.length;++u)l.push([0,0]);const h=l.map(((e,t)=>e[0]+r.shape[t]+e[1])),d=u.C0T.getReshaped(h,o,s,!1),c=u.C0T.getPermuted(d.length,o.length,!1),p=u.C0T.getReshapedPermuted(h,o,s,!1),f=u.ZSL.computeStrides(h),m=new Tl(r.shape,h,l,d,c,f.length),g=[{type:"int32",data:d},{type:"int32",data:f}];l.map((e=>g.push({type:"int32",data:[e[0],e[1]]})));const y=n.runWebGPUProgram(m,[r],r.dtype,g),x=Kt({inputs:{x:y},backend:n,attrs:{shape:p}});return n.disposeData(y.dataId),x},El={kernelName:u.A8B,backendName:"webgpu",kernelFunc:Ll};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class $l{constructor(e,t,n){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.type=n,this.dispatchLayout=K([t]),this.dispatch=V(this.dispatchLayout,[t],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.sparseSize) {\n        let indexInSegmentIds = index / uniforms.segmentSize;\n        let indexInSegment = index % uniforms.segmentSize;\n        let indexInInput = indices[indexInSegmentIds];\n        let segmentId = segmentIds[indexInSegmentIds];\n\n        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];\n        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;\n        ${x("&result[outIndex]","value",this.type)}\n      }\n    }\n  `;return e}}class Fl{constructor(e,t){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[e],this.dispatchLayout=K(t),this.dispatch=V(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.segmentIdsShape) {\n        let segmentId = segmentIds[index];\n        ${x("&result[segmentId]","1","int32")}\n      }\n    }\n  `;return e}}class Nl{constructor(e,t){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.type=t,this.dispatchLayout=K(e),this.dispatch=V(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.size) {\n        let segmentId = index / uniforms.segmentSize;\n        let count = sameSegmentIdCount[segmentId];\n        if (count != 0) {\n          ${"float32"===this.type?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}\n        }\n      }\n    }\n  `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Dl(e,t,n,i=!1,r){const o=u.ZSL.sizeFromShape(e.shape),a=o/e.shape[0],s=e.dtype,l=u.ZSL.sizeFromShape(t.shape),h=r.readSync(n.dataId),d=l>0?h[l-1]+1:0,c=d;let p;const f=e.shape.slice();f[0]=c;const m=l*a,g=Gt({backend:r,attrs:{shape:f,value:0,dtype:s}});p=new $l(f,m,s);let y=[{type:"int32",data:[a]},{type:"int32",data:[m]}];const x=r.runWebGPUProgram(p,[e,t,n],s,y,g);if(i)return x;const b=Gt({backend:r,attrs:{shape:[c],value:0,dtype:"int32"}});p=new Fl(c,n.shape);const w=r.runWebGPUProgram(p,[n],"int32",null,b),v=Gt({backend:r,attrs:{shape:f,value:0,dtype:s}});p=new Nl(f,s),y=[{type:"int32",data:[a]}];const S=r.runWebGPUProgram(p,[x,w],s,y,v);return r.disposeData(x.dataId),r.disposeData(w.dataId),S}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _l(e){const{inputs:t,backend:n}=e,{data:i,indices:r,segmentIds:o}=t;return Dl(i,r,o,!1,n)}const Ml={kernelName:u.L6G,backendName:"webgpu",kernelFunc:_l};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ol(e){const{inputs:t,backend:n}=e,{data:i,indices:r,segmentIds:o}=t;return Dl(i,r,o,!0,n)}const Bl={kernelName:u.DvZ,backendName:"webgpu",kernelFunc:Ol};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ul{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[i]*t[i];this.outputShape=n,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const e=Wl(this.rank,"uniforms."),t=`\n      ${C("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          setOutputAtIndex(index, getA(${e}));\n        }\n      }\n    `;return t}}function Wl(e,t=""){if(e>=5)throw Error(`Tile for rank ${e} is not yet supported`);if(1===e)return`(resRC % ${t}aShape)`;const n=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[];for(let r=0;r<e;r++)i.push(`(${n[r]} % ${t}aShape[${r}])`);return i.join()}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vl(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{reps:o}=i;if(n.shouldExecuteOnCPU([r])||"string"===r.dtype||r.shape.length>=5){const e=n.readSync(r.dataId),t="string"===r.dtype?e.map((e=>u.ZSL.decodeString(e))):e,i=(0,u.ra8)(r.shape,r.dtype,t),a=Bn(i,o);return n.makeTensorInfo(a.shape,a.dtype,a.values)}const a=new Ul(r.shape,o),s=n.runWebGPUProgram(a,[r],r.dtype);return s}const Hl={kernelName:u.FAs,backendName:"webgpu",kernelFunc:Vl};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gl(e){const{inputs:t,backend:n,attrs:i}=e,{sparseIndices:r,sparseValues:o,defaultValue:a}=t,{outputShape:s}=i,{sliceRank:l,numUpdates:h,sliceSize:d,strides:c,outputSize:p}=u.C0T.calculateShapes(o,r,s),f=!1;if("string"===o.dtype){const e=n.bufferSync(r),t=n.bufferSync(o),i=u.ZSL.decodeString(n.readSync(a.dataId)[0]),m=Fn(e,t,s,p,d,h,l,c,i,f);return n.makeTensorInfo(s,m.dtype,m.values)}const m=[p/d,d],g=Kt({inputs:{x:r},backend:n,attrs:{shape:[h,l]}}),y=o.shape.length?Kt({inputs:{x:o},backend:n,attrs:{shape:[h,d]}}):en({inputs:{x:o},backend:n}),x=y.dtype,b=n.makeTensorInfo([],x,u.ZSL.makeZerosTypedArray(1,x)),w=Kt({inputs:{x:a},backend:n,attrs:{shape:Array(m.length).fill(1)}}),v=Vl({inputs:{x:w},backend:n,attrs:{reps:m}}),S=u.ZSL.sizeFromShape([h,d]),k=[{type:"int32",data:[l]},{type:"int32",data:c},{type:"int32",data:[S]}];switch(h){case 0:break;case 1:{const e=new ll([h,d],l,g.shape.length,y.shape.length,c,m,x,f);n.runWebGPUProgram(e,[y,g],x,k,v)}break;default:{const e=new ll([h,d],l,g.shape.length,b.shape.length,c,m,x,f);n.runWebGPUProgram(e,[b,g],x,k,v)}{const e=new ll([h,d],l,g.shape.length,y.shape.length,c,m,x);n.runWebGPUProgram(e,[y,g],x,k,v)}}const C=Kt({inputs:{x:v},backend:n,attrs:{shape:s}});return n.disposeData(g.dataId),n.disposeData(y.dataId),n.disposeData(w.dataId),n.disposeData(b.dataId),n.disposeData(v.dataId),C}const jl={kernelName:u.jgd,backendName:"webgpu",kernelFunc:Gl};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kl(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{numOrSizeSplits:o,axis:a}=i,s=u.ZSL.parseAxisParam(a,r.shape)[0],l=u.C0T.prepareSplitSize(r,o,s),h=r.shape.length,d=new Array(h).fill(0),c=r.shape.slice();return l.map((e=>{const t=[...c];t[s]=e;const i=Zi({inputs:{x:r},backend:n,attrs:{begin:d,size:t}});return d[s]+=e,i}))}const Xl={kernelName:u.Blb,backendName:"webgpu",kernelFunc:Kl},ql=an({opType:Ee.SQRT}),Yl={kernelName:u.dFH,backendName:"webgpu",kernelFunc:ql},Zl={kernelName:u.M6A,backendName:"webgpu",kernelFunc:({inputs:e,backend:t})=>{const{x:n}=e,i=t,r=new on(n.shape,Ee.SQUARE);return i.runWebGPUProgram(r,[n],n.dtype)}},Ql=sn({opType:te.SQUARED_DIFFERENCE}),Jl={kernelName:u.Ddj,backendName:"webgpu",kernelFunc:Ql};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function eh({inputs:e,attrs:t,backend:n}){const{x:i}=e,r=new on(i.shape,Ee.STEP,"stepAlpha : f32,"),o=[{type:"float32",data:[t.alpha]}];return n.runWebGPUProgram(r,[i],i.dtype,o)}const th={kernelName:u.pnw,backendName:"webgpu",kernelFunc:eh};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class nh{constructor(e){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const t=S(this.outputShape.length);this.uniforms=`begin : ${t},  strides : ${t}, `,this.shaderKey="stridedSlice"}getUserCode(){const e=this.outputShape.length;let t="";if(1===e)t="coords * uniforms.strides + uniforms.begin";else{let e=0;t=this.outputShape.map(((t,n)=>(e++,1===this.outputShape.length?`coords * uniforms.strides[${n}] + uniforms.begin[${n}]`:`coords[${e-1}] * uniforms.strides[${n}] + uniforms.begin[${n}]`))).join(",")}const n=`\n       ${C("index")} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index);\n           setOutputAtIndex(index, getX(${t}));\n         }\n       }\n     `;return n}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ih(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{begin:o,end:a,strides:s,beginMask:l,endMask:h,ellipsisMask:d,newAxisMask:c,shrinkAxisMask:p}=i,{finalShapeSparse:f,finalShape:m,isIdentity:g,sliceDim0:y,isSimpleSlice:x,begin:b,end:w,strides:v}=u.Kro.sliceInfo(r.shape,o,a,s,l,h,d,c,p);let S;if(g)S=Kt({inputs:{x:r},backend:n,attrs:{shape:m}});else if(y||x){u.ZSL.assert(r.shape.length>=1,(()=>`Input must have rank at least 1, got: ${r.shape.length}`));const e=u.Kro.computeOutShape(b,w,v),t=Zi({inputs:{x:r},backend:n,attrs:{begin:b,size:e}});S=Kt({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeData(t.dataId)}else{const e=n.shouldExecuteOnCPU([r]);if(e){const e=n.readSync(r.dataId),t=(0,u.ra8)(r.shape,r.dtype,e),i=_n(f,t,v,b);S=n.makeTensorInfo(m,r.dtype,i.values)}else{const e=new nh(f),t=[{type:"int32",data:b},{type:"int32",data:v}],i=n.runWebGPUProgram(e,[r],r.dtype,t);S=Kt({inputs:{x:i},backend:n,attrs:{shape:m}}),n.disposeData(i.dataId)}}return S}const rh={kernelName:u.UcO,backendName:"webgpu",kernelFunc:ih};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function oh(e){const{inputs:t,backend:n,attrs:i}=e,{separator:r,nGramWidths:o,leftPad:a,rightPad:s,padWidth:u,preserveShortSequences:l}=i,{data:h,dataSplits:d}=t,c=n.readSync(h.dataId),p=n.readSync(d.dataId),[f,m]=Mn(c,p,r,o,a,s,u,l);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(d.shape,"int32",m)]}const ah={kernelName:u.YAb,backendName:"webgpu",kernelFunc:oh},sh=sn({opType:te.SUB,cpuKernelImpl:On,supportsComplex:!0}),uh={kernelName:u.PbM,backendName:"webgpu",kernelFunc:sh},lh=an({opType:Ee.TAN}),hh={kernelName:u.oFs,backendName:"webgpu",kernelFunc:lh},dh=an({opType:Ee.TANH}),ch={kernelName:u.iuW,backendName:"webgpu",kernelFunc:dh};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ph(e){const{inputs:t,backend:n,attrs:i}=e,{tensor:r,indices:o,updates:a}=t,{}=i,{sliceRank:s,numUpdates:l,sliceSize:h,strides:d,outputSize:c}=u.C0T.calculateShapes(a,o,r.shape),p=[c/h,h];if(0===c)return n.makeTensorInfo(r.shape,o.dtype);const f=[],m=Kt({inputs:{x:o},backend:n,attrs:{shape:[l,s]}});f.push(m);const g=Kt({inputs:{x:a},backend:n,attrs:{shape:[l,h]}});f.push(g);const y=Kt({inputs:{x:r},backend:n,attrs:{shape:p}});f.push(y);const x=Vl({inputs:{x:y},backend:n,attrs:{reps:Array(p.length).fill(1)}}),b=new ll([l,h],s,m.shape.length,g.shape.length,d,p,r.dtype,!1),w=u.ZSL.sizeFromShape([l,h]),v=[{type:"int32",data:[s]},{type:"int32",data:d},{type:"int32",data:[w]}],S=n.runWebGPUProgram(b,[g,m],y.dtype,v,x);f.push(S);const k=Kt({inputs:{x:S},backend:n,attrs:{shape:r.shape}});return f.forEach((e=>n.disposeData(e.dataId))),k}const fh={kernelName:u.X4r,backendName:"webgpu",kernelFunc:ph};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class mh{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, negativeInf : f32,\n        dir : i32, inc : i32,",this.shaderKey="swap"}getUserCode(){const e=`\n        ${C("index")} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // We compare elements pair-wise within a group of size 2 * inc.\n            // The comparing rule for each group alternates between ascending\n            // and descending. Within each group, we compare each pair at\n            // positions i and i+inc. To decide whether an element at position i\n            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n            // inc, it is in the first half of the group, we denote it as x0,\n            // otherwise we denote it as x1.\n            // For example, as shown in the Bitonic top K paper referenced\n            // above, Figure5(a) shows that element[1] is in the second half of\n            // the group when group size is 2, but it is in the first half of\n            // the group when group size is 4.\n            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;\n            var i = 0;\n            if (isFirstInPair) {\n              i = elemIdx;\n            } else {\n              i = elemIdx - uniforms.inc;\n            }\n\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.inc;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.inc));\n            }\n\n            var x0 = f32(0.0);\n            var x1 = f32(0.0);\n            if (i0 < uniforms.inputSize) {\n              x0 = getX(batch, i0);\n            } else {\n              x0 = uniforms.negativeInf;\n            }\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = uniforms.negativeInf;\n            }\n\n            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;\n            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n            if (reverse == isGreater) {\n              // Elements in opposite order of direction\n              let iTemp = i0;\n              i0 = i1;\n              i1 = iTemp;\n            }\n            if (isFirstInPair) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `;return e}}class gh{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){const e=`\n        ${C("index")} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // The output size is half of the previous size.\n            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _\n            // (k=4), we only need to output the indices at positions |, the\n            // indices at positions _ can be thrown away, see Figure5(b) After\n            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced\n            // above.\n            // For example, the paper shows we only need to output the orange\n            // bars. The output sequence should look like this | | | | | | | |.\n            // Because the sequence is halved, to map the output index back to\n            // the previous sequence to find the corresponding value, we need\n            // to double the index. When we double the index, we basically\n            // interpolate a position, so 2i looks like\n            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k\n            // position of each 2k positions by - elemIdx % k. E.g. for output\n            // at index 4,5,6,7, we want to get the corresponding element at\n            // original index 8,9,10,11, for output at index 8,9,10,11,\n            // we want to get the corresponding element at original index\n            // 16,17,18,19, so on and so forth.\n\n            var i = 0;\n            if (elemIdx < uniforms.k) {\n              i = elemIdx;\n            } else {\n              i = elemIdx * 2 - elemIdx % uniforms.k;\n            }\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.k;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.k));\n            }\n\n            let x0 = getX(batch, i0);\n            var x1 = f32(0.0);\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = x0;\n            }\n\n            if (x0 >= x1) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yh(e,t){null!==t&&e.disposeData(t.dataId)}function xh(e){let t=1;while(t<e)t*=2;return t}function bh(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{k:o,sorted:a}=i,s=r.shape,l=s[s.length-1];if(n.shouldExecuteOnCPU([r])){const e=n.readSync(r.dataId),[t,i]=Un(e,s,r.dtype,o,a);return[n.makeTensorInfo(t.shape,t.dtype,t.values),n.makeTensorInfo(i.shape,i.dtype,i.values)]}if(0===o)return s[s.length-1]=0,[n.makeTensorInfo(s,r.dtype,[]),n.makeTensorInfo(s,"int32",[])];if(1===l)return[r,Gt({attrs:{shape:s,dtype:"int32",value:0},backend:n})];const h=u.ZSL.sizeFromShape(s),d=h/l,c=Kt({inputs:{x:r},attrs:{shape:[d,l]},backend:n}),p=xh(o),f=xh(l);let m=null;const g=()=>null===m?[c,c]:[c,m],y=(e,t,i)=>{const r=g(),o=new mh(i),a=null===m?1:0,s=[{type:"int32",data:[l]},{type:"int32",data:[a]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[e]},{type:"int32",data:[t]}],u=m;m=n.runWebGPUProgram(o,r,"int32",s),yh(n,u)};for(let u=1;u<p;u*=2){const e=2*u;for(let t=u;t>=1;t/=2)y(e,t,[d,f])}for(let u=f;u>p;u/=2){const e=g(),t=new gh([d,u/2]),i=null===m?1:0,r=[{type:"int32",data:[l]},{type:"int32",data:[i]},{type:"int32",data:[p]}],o=m;m=n.runWebGPUProgram(t,e,"int32",r),yh(n,o);const a=p/2,s=2*a;for(let n=a;n>=1;n/=2)y(s,n,m.shape)}let x=m;m=Zi({inputs:{x:m},backend:n,attrs:{begin:0,size:[d,o]}}),yh(n,x);let b=ja({inputs:{x:c,indices:m},backend:n,attrs:{axis:1,batchDims:1}});yh(n,c);const w=s.slice(0,-1);w.push(o),x=m,m=Kt({inputs:{x:m},attrs:{shape:w},backend:n}),yh(n,x);const v=b;return b=Kt({inputs:{x:b},attrs:{shape:w},backend:n}),yh(n,v),[b,m]}const wh={kernelName:u.TBb,backendName:"webgpu",kernelFunc:bh};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class vh{constructor(e){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){const e=`\n          fn mapCoord(outCoord : f32, len : f32) -> f32{\n            var inCoord = outCoord;\n            if(uniforms.fillModeId == 2) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  if (inCoord < sz2) {\n                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +\n                    inCoord;\n                  }\n                  if (inCoord < -len) {\n                    inCoord = inCoord + sz2;\n                  } else {\n                    inCoord = -inCoord - 1.0;\n                  }\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));\n                  if (inCoord >= len) {\n                    inCoord = sz2 - inCoord - 1.0;\n                  }\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 3) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 4) {\n              return clamp(outCoord, 0.0, len - 1.0);\n            }\n            return outCoord;\n          }\n          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,\n            channel : i32) -> f32 {\n            var outputValue : f32;\n            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {\n                outputValue = getImage(batch, coordY, coordX, channel);\n            } else {\n              outputValue = uniforms.fillValue;\n            }\n            return outputValue;\n          }\n\n          ${C("index")} {\n            if (index < uniforms.size) {\n              let coords = getCoordsFromIndex(index);\n              var outputValue : f32;\n              let batch = coords[0];\n              let x = coords[2];\n              let y = coords[1];\n              let channel = coords[3];\n              let xf = f32(x);\n              let yf = f32(y);\n              let a1 = getTransforms(batch, 0);\n              let a2 = getTransforms(batch, 1);\n              let a3 = getTransforms(batch, 2);\n              let b1 = getTransforms(batch, 3);\n              let b2 = getTransforms(batch, 4);\n              let b3 = getTransforms(batch, 5);\n              let c1 = getTransforms(batch, 6);\n              let c2 = getTransforms(batch, 7);\n              let projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = uniforms.fillValue;\n              } else {\n                let inX = (a1 * xf + a2 * yf + a3) / projection;\n                let inY = (b1 * xf + b2 * yf + b3) / projection;\n                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));\n                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));\n\n                if (uniforms.interpolationModeId == 1) {\n                  let coordY = i32(round(mapY));\n                  let coordX = i32(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  let yFloor = floor(mapY);\n                  let xFloor = floor(mapX);\n                  let yCeil = yFloor + 1.0;\n                  let xCeil = xFloor + 1.0;\n                  let valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);\n                  let valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutputAtIndex(index, outputValue);\n            }\n          }\n        `;return e}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Sh(e){const{inputs:t,backend:n,attrs:i}=e,{image:r,transforms:o}=t,{interpolation:a,fillMode:s,fillValue:u,outputShape:l}=i,[h,d,c,p]=r.shape,[f,m]=null!=l?l:[d,c],g=[h,f,m,p],y=new vh(g),x="nearest"===a?1:2;let b;switch(s){case"constant":b=1;break;case"reflect":b=2;break;case"wrap":b=3;break;case"nearest":b=4;break;default:b=1;break}const w=[{type:"int32",data:[x]},{type:"int32",data:[b]},{type:"float32",data:[u]}];return n.runWebGPUProgram(y,[r,o],"float32",w)}const kh={kernelName:u.dLy,backendName:"webgpu",kernelFunc:Sh};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ch(e){const{inputs:t,backend:n,attrs:i}=e,{value:r}=t;let{axis:o}=i;o<0&&(o+=r.shape.length);const a=r,s=a.shape.length,u=r.shape[o],l=new Array(s-1);let h=0;for(let m=0;m<s;m++)m!==o&&(l[h++]=a.shape[m]);const d=[],c=new Array(s).fill(0),p=a.shape.slice();p[o]=1;const f=new Array(u);for(let m=0;m<f.length;m++){c[o]=m;const e=Zi({inputs:{x:a},backend:n,attrs:{begin:c,size:p}}),t=Kt({inputs:{x:e},backend:n,attrs:{shape:l}});f[m]=t,d.push(e)}return d.forEach((e=>n.disposeData(e.dataId))),f}const Ih={kernelName:u.dXR,backendName:"webgpu",kernelFunc:Ch};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Rh{constructor(e,t,n){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.dispatchLayout=K(e),this.dispatch=V(this.dispatchLayout,e,this.workgroupSize),"float32"!==n&&"int32"!==n)throw new Error(`UnsortedSegmentSum only supports float32 and int32\n              types, does not support ${n} type.`);this.type=n,this.shaderKey="unsortedSegmentSum"}getUserCode(){const e=`\n    ${C("index")} {\n      if (index < uniforms.xSize) {\n        let coords = getXCoordsFromIndex(index);\n        let b = coords[0];\n        let inCol = coords[1];\n\n        let segmentId = i32(getSegmentIds(inCol));\n        if (segmentId >= 0) {\n          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;\n          let value = getX(b, inCol);\n\n          ${x("&result[flatIndex]","value",this.type)}\n        }\n      }\n    }\n  `;return e}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ph(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,segmentIds:o}=t,{numSegments:a}=i,s=r.shape.length,l=[];let h=0;const d=u.C0T.getAxesPermutation([h],s);let c=r;null!=d&&(c=ri({inputs:{x:r},backend:n,attrs:{perm:d}}),l.push(c),h=u.C0T.getInnerMostAxes(1,s)[0]);const p=u.C0T.segment_util.computeOutShape(c.shape,h,a),f=u.ZSL.sizeFromShape([c.shape[h]]),m=Kt({inputs:{x:c},backend:n,attrs:{shape:[-1,f]}});l.push(m);const g=r.dtype,y=[m.shape[0],a],x=Gt({backend:n,attrs:{shape:y,value:0,dtype:g}}),b=new Rh(m.shape,y,g),w=[{type:"int32",data:[a]},{type:"int32",data:[u.ZSL.sizeFromShape(m.shape)]}],v=n.runWebGPUProgram(b,[m,o],g,w,x),S=Kt({inputs:{x:v},backend:n,attrs:{shape:p}});l.push(v);let k=S;if(null!=d){l.push(S);const e=u.C0T.getUndoAxesPermutation(d);k=ri({inputs:{x:k},backend:n,attrs:{perm:e}})}return l.forEach((e=>n.disposeData(e.dataId))),k}const zh={kernelName:u.pPe,backendName:"webgpu",kernelFunc:Ph},Ah=[Zt,Gn,Kn,qn,Zn,ei,hi,ci,mi,yi,bi,vi,ki,Ii,Pi,_i,Oi,Vi,Gi,Ki,er,or,ur,mr,yr,vr,rn,Ir,Er,Wr,Xr,Qr,to,io,oo,so,lo,po,wo,So,Co,Po,Do,Mo,Eo,Uo,Ho,Xo,Yo,Jo,oa,sa,la,da,pa,ma,ya,ba,ka,jt,Ia,La,Pa,Aa,Da,Ma,Ba,Va,Ka,qa,Za,tn,Ja,zr,ts,is,os,ss,ls,ds,fs,xs,gs,ws,Ss,Cs,As,Es,Ei,Fs,Ds,Hs,Ms,Ws,js,Fi,Xs,Ys,Qs,eu,au,ta,uu,hu,cu,hr,mu,bu,vu,Iu,Pu,Au,Lu,$u,cr,Nu,_u,Ou,Uu,Xt,Hu,Ku,Yu,Ju,nl,rl,al,ul,dl,fl,yl,bl,vl,kl,Il,Pl,Qi,th,rh,ah,ru,Al,El,Ml,Bl,jl,Xl,Yl,Zl,Jl,uh,ia,hh,ch,fh,Hl,wh,kh,oi,Ih,zh,yu];for(const Hp of Ah)(0,u.tAK)(Hp);
/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
var Th=function(e,t){return(Th=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Lh(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Th(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Eh=function(){return(Eh=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function $h(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))}function Fh(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!((r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function Nh(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Dh=["nose","left_eye","right_eye","left_ear","right_ear","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle"],_h=["nose","left_eye_inner","left_eye","left_eye_outer","right_eye_inner","right_eye","right_eye_outer","left_ear","right_ear","mouth_left","mouth_right","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_pinky","right_pinky","left_index","right_index","left_thumb","right_thumb","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle","left_heel","right_heel","left_foot_index","right_foot_index"],Mh={left:[1,2,3,7,9,11,13,15,17,19,21,23,25,27,29,31],right:[4,5,6,8,10,12,14,16,18,20,22,24,26,28,30,32],middle:[0]},Oh={left:[1,3,5,7,9,11,13,15],right:[2,4,6,8,10,12,14,16],middle:[0]},Bh=[[0,1],[0,2],[1,3],[2,4],[5,6],[5,7],[5,11],[6,8],[6,12],[7,9],[8,10],[11,12],[11,13],[12,14],[13,15],[14,16]],Uh=[[0,1],[0,4],[1,2],[2,3],[3,7],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[11,23],[12,14],[14,16],[12,24],[13,15],[15,17],[16,18],[16,20],[15,17],[15,19],[15,21],[16,22],[17,19],[18,20],[23,25],[23,24],[24,26],[25,27],[26,28],[27,29],[28,30],[27,31],[28,32],[29,31],[30,32]];function Wh(e){return e instanceof SVGAnimatedLength?e.baseVal.value:e}function Vh(e){return $h(this,void 0,void 0,(function(){var t,n;return Fh(this,(function(i){switch(i.label){case 0:return t=document.createElement("canvas"),e instanceof u.qYS?[4,u.TaL.toPixels(e,t)]:[3,2];case 1:return i.sent(),[3,3];case 2:t.width=Wh(e.width),t.height=Wh(e.height),n=t.getContext("2d"),e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0),i.label=3;case 3:return[2,t]}}))}))}function Hh(e){return $h(this,void 0,void 0,(function(){var t,n,i,r,o,a;return Fh(this,(function(s){switch(s.label){case 0:return e instanceof u.qYS?(t=e.shape.slice(0,2),n=t[0],i=t[1],r=ImageData.bind,[4,u.TaL.toPixels(e)]):[3,2];case 1:return[2,new(r.apply(ImageData,[void 0,s.sent(),i,n]))];case 2:return o=document.createElement("canvas"),a=o.getContext("2d"),o.width=Wh(e.width),o.height=Wh(e.height),a.drawImage(e,0,0),[2,a.getImageData(0,0,o.width,o.height)]}}))}))}function Gh(e){return $h(this,void 0,void 0,(function(){var t,n;return Fh(this,(function(i){switch(i.label){case 0:return e instanceof SVGImageElement||e instanceof OffscreenCanvas?[4,Vh(e)]:[3,2];case 1:return n=i.sent(),[3,3];case 2:n=e,i.label=3;case 3:return t=n,[2,u.TaL.fromPixels(t,4)]}}))}))}function jh(e){if(e<0||e>=256)throw new Error("Mask value must be in range [0, 255] but got ".concat(e));if(!Number.isInteger(e))throw new Error("Mask value must be an integer but got ".concat(e))}var Kh={runtime:"mediapipe",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,modelType:"full"},Xh=function(){function e(e){this.mask=e}return e.prototype.toCanvasImageSource=function(){return $h(this,void 0,void 0,(function(){return Fh(this,(function(e){return[2,this.mask]}))}))},e.prototype.toImageData=function(){return $h(this,void 0,void 0,(function(){return Fh(this,(function(e){return[2,Hh(this.mask)]}))}))},e.prototype.toTensor=function(){return $h(this,void 0,void 0,(function(){return Fh(this,(function(e){return[2,Gh(this.mask)]}))}))},e.prototype.getUnderlyingType=function(){return"canvasimagesource"},e}();function qh(e){return jh(e),"person"}var Yh=function(){function e(e){var t,n=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.poseSolution=new s.Pose({locateFile:function(t,n){if(e.solutionPath){var i=e.solutionPath.replace(/\/+$/,"");return"".concat(i,"/").concat(t)}return"".concat(n,"/").concat(t)}}),e.modelType){case"lite":t=0;break;case"heavy":t=2;break;case"full":default:t=1}this.poseSolution.setOptions({modelComplexity:t,smoothLandmarks:e.enableSmoothing,enableSegmentation:e.enableSegmentation,smoothSegmentation:e.smoothSegmentation,selfieMode:this.selfieMode}),this.poseSolution.onResults((function(e){if(n.height=e.image.height,n.width=e.image.width,null==e.poseLandmarks)n.poses=[];else{var t=n.translateOutput(e.poseLandmarks,e.poseWorldLandmarks);e.segmentationMask&&(t.segmentation={maskValueToLabel:qh,mask:new Xh(e.segmentationMask)}),n.poses=[t]}}))}return e.prototype.translateOutput=function(e,t){var n=this,i={keypoints:e.map((function(e,t){return{x:e.x*n.width,y:e.y*n.height,z:e.z,score:e.visibility,name:_h[t]}}))};return null!=t&&(i.keypoints3D=t.map((function(e,t){return{x:e.x,y:e.y,z:e.z,score:e.visibility,name:_h[t]}}))),i},e.prototype.estimatePoses=function(e,t,n){return $h(this,void 0,void 0,(function(){var i,r;return Fh(this,(function(o){switch(o.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.poseSolution.setOptions({selfieMode:this.selfieMode})),e instanceof u.qYS?(r=ImageData.bind,[4,u.TaL.toPixels(e)]):[3,2];case 1:return i=new(r.apply(ImageData,[void 0,o.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:i=e,o.label=3;case 3:return e=i,[4,this.poseSolution.send({image:e},n)];case 4:return o.sent(),[2,this.poses]}}))}))},e.prototype.dispose=function(){this.poseSolution.close()},e.prototype.reset=function(){this.poseSolution.reset()},e.prototype.initialize=function(){return this.poseSolution.initialize()},e}();function Zh(e){return $h(this,void 0,void 0,(function(){var t,n;return Fh(this,(function(i){switch(i.label){case 0:return t=function(e){if(null==e)return Eh({},Kh);var t=Eh({},e);return t.runtime="mediapipe",null==t.enableSegmentation&&(t.enableSegmentation=Kh.enableSegmentation),null==t.enableSmoothing&&(t.enableSmoothing=Kh.enableSmoothing),null==t.smoothSegmentation&&(t.smoothSegmentation=Kh.smoothSegmentation),null==t.modelType&&(t.modelType=Kh.modelType),t}(e),[4,(n=new Yh(t)).initialize()];case 1:return i.sent(),[2,n]}}))}))}function Qh(e){return e instanceof u.qYS?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function Jh(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function ed(e){return e instanceof u.qYS?e:u.TaL.fromPixels(e)}function td(e,t,n){return nd(n,"inputResolution"),[1/n.width*e[0][0]*t.width,1/n.height*e[0][1]*t.width,e[0][3]*t.width,1/n.width*e[1][0]*t.height,1/n.height*e[1][1]*t.height,e[1][3]*t.height,0,0]}function nd(e,t){u.ZSL.assert(0!==e.width,(function(){return"".concat(t," width cannot be 0.")})),u.ZSL.assert(0!==e.height,(function(){return"".concat(t," height cannot be 0.")}))}function id(e,t,n){var i=n.rotationVectorStartKeypointIndex,r=n.rotationVectorEndKeypointIndex,o=e.locationData,a=o.relativeKeypoints[i].x*t.width,s=o.relativeKeypoints[i].y*t.height,u=o.relativeKeypoints[r].x*t.width,l=o.relativeKeypoints[r].y*t.height,h=2*Math.sqrt((u-a)*(u-a)+(l-s)*(l-s)),d=function(e,t,n){var i,r=e.locationData,o=n.rotationVectorStartKeypointIndex,a=n.rotationVectorEndKeypointIndex;i=n.rotationVectorTargetAngle?n.rotationVectorTargetAngle:Math.PI*n.rotationVectorTargetAngleDegree/180;var s=r.relativeKeypoints[o].x*t.width,u=r.relativeKeypoints[o].y*t.height,l=r.relativeKeypoints[a].x*t.width,h=r.relativeKeypoints[a].y*t.height;return Jh(i-Math.atan2(-(h-u),l-s))}(e,t,n);return{xCenter:a/t.width,yCenter:s/t.height,width:h/t.width,height:h/t.height,rotation:d}}function rd(e){if(16!==e.length)throw new Error("Array length must be 16 but got ".concat(e.length));return[[e[0],e[1],e[2],e[3]],[e[4],e[5],e[6],e[7]],[e[8],e[9],e[10],e[11]],[e[12],e[13],e[14],e[15]]]}function od(e,t,n,i,r,o,a){return e[t][r]*(e[n][o]*e[i][a]-e[n][a]*e[i][o])}function ad(e,t,n){var i=(t+1)%4,r=(t+2)%4,o=(t+3)%4,a=(n+1)%4,s=(n+2)%4,u=(n+3)%4;return od(e,i,r,o,a,s,u)+od(e,r,o,i,a,s,u)+od(e,o,i,r,a,s,u)}function sd(e,t,n){void 0===n&&(n={ignoreRotation:!1});for(var i=[],r=0,o=e;r<o.length;r++){var a=o[r],s=a.x-.5,u=a.y-.5,l=n.ignoreRotation?0:t.rotation,h=Math.cos(l)*s-Math.sin(l)*u,d=Math.sin(l)*s+Math.cos(l)*u;h=h*t.width+t.xCenter,d=d*t.height+t.yCenter;var c=a.z*t.width,p=Eh({},a);p.x=h,p.y=d,p.z=c,i.push(p)}return i}function ud(e,t){var n=function(e,t,n,i){var r=t-e,o=i-n;if(0===r)throw new Error("Original min and max are both ".concat(e,", range cannot be 0."));var a=o/r;return{scale:a,offset:n-e*a}}(0,255,t[0],t[1]);return(0,u.DZQ)((function(){return(0,u.WQq)((0,u.lKK)(e,n.scale),n.offset)}))}function ld(e,t,n){var i,r,o,a,s,l,h,d,c,p,f,m,g,y,x=t.outputTensorSize,b=t.keepAspectRatio,w=t.borderMode,v=t.outputTensorFloatRange,S=Qh(e),k=function(e,t){return t?{xCenter:t.xCenter*e.width,yCenter:t.yCenter*e.height,width:t.width*e.width,height:t.height*e.height,rotation:t.rotation}:{xCenter:.5*e.width,yCenter:.5*e.height,width:e.width,height:e.height,rotation:0}}(S,n),C=function(e,t,n){if(void 0===n&&(n=!1),!n)return{top:0,left:0,right:0,bottom:0};var i=t.height,r=t.width;nd(t,"targetSize"),nd(e,"roi");var o,a,s=i/r,u=e.height/e.width,l=0,h=0;return s>u?(o=e.width,a=e.width*s,h=(1-u/s)/2):(o=e.height/s,a=e.height,l=(1-s/u)/2),e.width=o,e.height=a,{top:h,left:l,right:l,bottom:h}}(k,x,b),I=(i=k,r=S.width,o=S.height,a=!1,s=i.width,l=i.height,h=a?-1:1,d=Math.cos(i.rotation),c=Math.sin(i.rotation),p=i.xCenter,f=i.yCenter,m=1/r,g=1/o,(y=new Array(16))[0]=s*d*h*m,y[1]=-l*c*m,y[2]=0,y[3]=(-.5*s*d*h+.5*l*c+p)*m,y[4]=s*c*h*g,y[5]=l*d*g,y[6]=0,y[7]=(-.5*l*d-.5*s*c*h+f)*g,y[8]=0,y[9]=0,y[10]=s*m,y[11]=0,y[12]=0,y[13]=0,y[14]=0,y[15]=1,rd(y));return{imageTensor:(0,u.DZQ)((function(){var t=ed(e),n=(0,u.KtR)(td(I,S,x),[1,8]),i="zero"===w?"constant":"nearest",r=u.Slp.transform((0,u.UG6)((0,u.wgE)(t,"float32")),n,"bilinear",i,0,[x.height,x.width]);return null!=v?ud(r,v):r})),padding:C,transformationMatrix:I}}function hd(e,t,n,i){return 1===i?.5*(e+t):e+(t-e)*n/(i-1)}function dd(e){return(0,u.DZQ)((function(){var t=function(e){return(0,u.DZQ)((function(){return[(0,u.dik)(e,[0,0,0],[1,-1,1]),(0,u.dik)(e,[0,0,1],[1,-1,-1])]}))}(e),n=t[0],i=t[1];return{boxes:(0,u.r2V)(i),logits:(0,u.r2V)(n)}}))}function cd(e){return null!=e&&null!=e.currentTime}function pd(e){for(var t={locationData:{relativeKeypoints:[]}},n=Number.MAX_SAFE_INTEGER,i=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER,a=0;a<e.length;++a){var s=e[a];n=Math.min(n,s.x),i=Math.max(i,s.x),r=Math.min(r,s.y),o=Math.max(o,s.y),t.locationData.relativeKeypoints.push({x:s.x,y:s.y})}return t.locationData.relativeBoundingBox={xMin:n,yMin:r,xMax:i,yMax:o,width:i-n,height:o-r},t}function fd(e,t,n,i){return $h(this,void 0,void 0,(function(){var i,r,o,a,s;return Fh(this,(function(l){switch(l.label){case 0:return e.sort((function(e,t){return Math.max.apply(Math,t.score)-Math.max.apply(Math,e.score)})),i=(0,u.KtR)(e.map((function(e){return[e.locationData.relativeBoundingBox.yMin,e.locationData.relativeBoundingBox.xMin,e.locationData.relativeBoundingBox.yMax,e.locationData.relativeBoundingBox.xMax]}))),r=(0,u.tGX)(e.map((function(e){return e.score[0]}))),[4,u.Slp.nonMaxSuppressionAsync(i,r,t,n)];case 1:return[4,(o=l.sent()).array()];case 2:return a=l.sent(),s=e.filter((function(e,t){return a.indexOf(t)>-1})),(0,u.ASo)([i,r,o]),[2,s]}}))}))}function md(e,t){return e.map((function(e){var n=Eh(Eh({},e),{x:e.x*t.width,y:e.y*t.height});return null!=e.z&&(n.z=e.z*t.width),n}))}function gd(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s,l,h,d,c,p,f,m,g,y,x,b,w,v,S,k,C,I,R,P;return Fh(this,(function(z){switch(z.label){case 0:if(i=(0,u.r2V)(t,[0]),r=i.shape,o=r[0],a=r[1],s=r[2],e.length!==s)throw new Error("Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: "+"".concat(e.length,", heatmap length: ").concat(s));return l=[],[4,i.buffer()];case 1:for(h=z.sent(),d=0;d<e.length;d++)if(c=e[d],p=Eh({},c),l.push(p),f=Math.trunc(p.x*a),m=Math.trunc(p.y*o),!(f<0||f>=a||m<0||f>=o)){for(g=Math.trunc((n.kernelSize-1)/2),y=Math.max(0,f-g),x=Math.min(a,f+g+1),b=Math.max(0,m-g),w=Math.min(o,m+g+1),v=0,S=0,k=0,C=0,I=b;I<w;++I)for(R=y;R<x;++R)P=h.get(I,R,d),v+=P,C=Math.max(C,P),S+=R*P,k+=I*P;C>=n.minConfidenceToRefine&&v>0&&(p.x=S/a/v,p.y=k/o/v)}return i.dispose(),[2,l]}}))}))}function yd(e,t){var n=t.left,i=t.top,r=t.left+t.right,o=t.top+t.bottom;return e.map((function(e){return Eh(Eh({},e),{x:(e.x-n)/(1-r),y:(e.y-i)/(1-o),z:e.z/(1-r)})}))}function xd(e,t,n){return"webgl"===(0,u.jz4)()?function(e,t,n){var i=n.combineWithPreviousRatio.toFixed(2),r={variableNames:["prevMask","newMask"],outputShape:e.shape,userCode:"\n  void main() {\n      ivec2 coords = getOutputCoords();\n      int height = coords[0];\n      int width = coords[1];\n\n      float prevMaskValue = getPrevMask(height, width);\n      float newMaskValue = getNewMask(height, width);\n\n      /*\n      * Assume p := newMaskValue\n      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)\n      * uncertainty alpha(p) =\n      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the\n      * uncertainty]\n      *\n      * The following polynomial approximates uncertainty alpha as a\n      * function of (p + 0.5):\n      */\n      const float c1 = 5.68842;\n      const float c2 = -0.748699;\n      const float c3 = -57.8051;\n      const float c4 = 291.309;\n      const float c5 = -624.717;\n      float t = newMaskValue - 0.5;\n      float x = t * t;\n\n      float uncertainty =\n        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));\n\n      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *\n                             (uncertainty * ".concat(i,");\n\n      setOutput(outputValue);\n    }\n")},o=(0,u.Hs)();return(0,u.DZQ)((function(){var n=o.compileAndRun(r,[e,t]);return(0,u.Hi9)().makeTensorFromDataId(n.dataId,n.shape,n.dtype)}))}(e,t,n):(0,u.DZQ)((function(){var i=(0,u.jbE)(t,.5),r=(0,u.EwI)(i),o=(0,u.jbE)(1,(0,u.BpO)(1,(0,u.lKK)(r,(0,u.WQq)(5.68842,(0,u.lKK)(r,(0,u.WQq)(-.748699,(0,u.lKK)(r,(0,u.WQq)(-57.8051,(0,u.lKK)(r,(0,u.WQq)(291.309,(0,u.lKK)(r,-624.717)))))))))));return(0,u.WQq)(t,(0,u.lKK)((0,u.jbE)(e,t),(0,u.lKK)(o,n.combineWithPreviousRatio)))}))}function bd(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s;return Fh(this,(function(l){switch(l.label){case 0:return i=e[0],r=e[1],o=function(e,t,n){return(0,u.DZQ)((function(){var i,r,o,a;n.reverseOutputOrder?(r=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+0],[-1,1])),i=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+1],[-1,1])),a=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+2],[-1,1])),o=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+3],[-1,1]))):(i=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+0],[-1,1])),r=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+1],[-1,1])),o=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+2],[-1,1])),a=(0,u.r2V)((0,u.dik)(e,[0,n.boxCoordOffset+3],[-1,1]))),r=(0,u.WQq)((0,u.lKK)((0,u.y4m)(r,n.xScale),t.w),t.x),i=(0,u.WQq)((0,u.lKK)((0,u.y4m)(i,n.yScale),t.h),t.y),n.applyExponentialOnBoxSize?(o=(0,u.lKK)((0,u.oNF)((0,u.y4m)(o,n.hScale)),t.h),a=(0,u.lKK)((0,u.oNF)((0,u.y4m)(a,n.wScale)),t.w)):(o=(0,u.lKK)((0,u.y4m)(o,n.hScale),t.h),a=(0,u.lKK)((0,u.y4m)(a,n.wScale),t.h));var s=(0,u.jbE)(i,(0,u.y4m)(o,2)),l=(0,u.jbE)(r,(0,u.y4m)(a,2)),h=(0,u.WQq)(i,(0,u.y4m)(o,2)),d=(0,u.WQq)(r,(0,u.y4m)(a,2)),c=(0,u.xWs)([(0,u.tQQ)(s,[n.numBoxes,1]),(0,u.tQQ)(l,[n.numBoxes,1]),(0,u.tQQ)(h,[n.numBoxes,1]),(0,u.tQQ)(d,[n.numBoxes,1])],1);if(n.numKeypoints)for(var p=0;p<n.numKeypoints;++p){var f=n.keypointCoordOffset+p*n.numValuesPerKeypoint,m=void 0,g=void 0;n.reverseOutputOrder?(m=(0,u.r2V)((0,u.dik)(e,[0,f],[-1,1])),g=(0,u.r2V)((0,u.dik)(e,[0,f+1],[-1,1]))):(g=(0,u.r2V)((0,u.dik)(e,[0,f],[-1,1])),m=(0,u.r2V)((0,u.dik)(e,[0,f+1],[-1,1])));var y=(0,u.WQq)((0,u.lKK)((0,u.y4m)(m,n.xScale),t.w),t.x),x=(0,u.WQq)((0,u.lKK)((0,u.y4m)(g,n.yScale),t.h),t.y);c=(0,u.xWs)([c,(0,u.tQQ)(y,[n.numBoxes,1]),(0,u.tQQ)(x,[n.numBoxes,1])],1)}return c}))}(r,t,n),a=(0,u.DZQ)((function(){var e=i;return n.sigmoidScore?(null!=n.scoreClippingThresh&&(e=(0,u.zQh)(i,-n.scoreClippingThresh,n.scoreClippingThresh)),e=(0,u.ry7)(e)):e})),[4,wd(o,a,n)];case 1:return s=l.sent(),(0,u.ASo)([o,a]),[2,s]}}))}))}function wd(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s,u,l,h,d,c,p,f;return Fh(this,(function(m){switch(m.label){case 0:return i=[],[4,e.data()];case 1:return r=m.sent(),[4,t.data()];case 2:for(o=m.sent(),a=0;a<n.numBoxes;++a)if(!(null!=n.minScoreThresh&&o[a]<n.minScoreThresh||(s=a*n.numCoords,u=vd(r[s+0],r[s+1],r[s+2],r[s+3],o[a],n.flipVertically,a),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(n.numKeypoints>0)for((h=u.locationData).relativeKeypoints=[],d=n.numKeypoints*n.numValuesPerKeypoint,c=0;c<d;c+=n.numValuesPerKeypoint)p=s+n.keypointCoordOffset+c,f={x:r[p+0],y:n.flipVertically?1-r[p+1]:r[p+1]},h.relativeKeypoints.push(f);i.push(u)}return[2,i]}}))}))}function vd(e,t,n,i,r,o,a){return{score:[r],ind:a,locationData:{relativeBoundingBox:{xMin:t,yMin:o?1-n:e,xMax:i,yMax:o?1-e:n,width:i-t,height:n-e}}}}function Sd(e,t){return"none"===e?t:function(e){return 1/(1+Math.exp(-e))}(t)}function kd(e,t,n,i){return $h(this,void 0,void 0,(function(){var r,o,a,s,u,l,h,d;return Fh(this,(function(c){switch(c.label){case 0:return n=n||t.flipHorizontally||!1,i=i||t.flipVertically||!1,r=e.size,o=r/t.numLandmarks,[4,e.data()];case 1:for(a=c.sent(),s=[],u=0;u<t.numLandmarks;++u)l=u*o,(d={x:0,y:0}).x=n?t.inputImageWidth-a[l]:a[l],o>1&&(d.y=i?t.inputImageHeight-a[l+1]:a[l+1]),o>2&&(d.z=a[l+2]),o>3&&(d.score=Sd(t.visibilityActivation,a[l+3])),s.push(d);for(h=0;h<s.length;++h)(d=s[h]).x=d.x/t.inputImageWidth,d.y=d.y/t.inputImageHeight,d.z=d.z/t.inputImageWidth/(t.normalizeZ||1);return[2,s]}}))}))}function Cd(e,t,n){var i=e.width,r=e.height,o=e.rotation;if(null==n.rotation&&null==n.rotationDegree||(o=function(e,t){return null!=t.rotation?e+=t.rotation:null!=t.rotationDegree&&(e+=Math.PI*t.rotationDegree/180),Jh(e)}(o,n)),0===o)e.xCenter=e.xCenter+i*n.shiftX,e.yCenter=e.yCenter+r*n.shiftY;else{var a=(t.width*i*n.shiftX*Math.cos(o)-t.height*r*n.shiftY*Math.sin(o))/t.width,s=(t.width*i*n.shiftX*Math.sin(o)+t.height*r*n.shiftY*Math.cos(o))/t.height;e.xCenter=e.xCenter+a,e.yCenter=e.yCenter+s}if(n.squareLong){var u=Math.max(i*t.width,r*t.height);i=u/t.width,r=u/t.height}else if(n.squareShort){var l=Math.min(i*t.width,r*t.height);i=l/t.width,r=l/t.height}return e.width=i*n.scaleX,e.height=r*n.scaleY,e}function Id(e,t){return e.map((function(e){var n=Eh(Eh({},e),{x:e.x/t.width,y:e.y/t.height});return null!=e.z&&(e.z=e.z/t.width),n}))}var Rd=function(){function e(e){this.alpha=e,this.initialized=!1}return e.prototype.apply=function(e,t){var n;return this.initialized?n=null==t?this.storedValue+this.alpha*(e-this.storedValue):this.storedValue+this.alpha*t*Math.asinh((e-this.storedValue)/t):(n=e,this.initialized=!0),this.rawValue=e,this.storedValue=n,n},e.prototype.applyWithAlpha=function(e,t,n){return this.alpha=t,this.apply(e,n)},e.prototype.hasLastRawValue=function(){return this.initialized},e.prototype.lastRawValue=function(){return this.rawValue},e.prototype.reset=function(){this.initialized=!1},e}(),Pd=function(){function e(e){this.frequency=e.frequency,this.minCutOff=e.minCutOff,this.beta=e.beta,this.thresholdCutOff=e.thresholdCutOff,this.thresholdBeta=e.thresholdBeta,this.derivateCutOff=e.derivateCutOff,this.x=new Rd(this.getAlpha(this.minCutOff)),this.dx=new Rd(this.getAlpha(this.derivateCutOff)),this.lastTimestamp=0}return e.prototype.apply=function(e,t,n){if(null==e)return e;var i=Math.trunc(t);if(this.lastTimestamp>=i)return e;0!==this.lastTimestamp&&0!==i&&(this.frequency=1/(1e-6*(i-this.lastTimestamp))),this.lastTimestamp=i;var r=this.x.hasLastRawValue()?(e-this.x.lastRawValue())*n*this.frequency:0,o=this.dx.applyWithAlpha(r,this.getAlpha(this.derivateCutOff)),a=this.minCutOff+this.beta*Math.abs(o),s=null!=this.thresholdCutOff?this.thresholdCutOff+this.thresholdBeta*Math.abs(o):null;return this.x.applyWithAlpha(e,this.getAlpha(a),s)},e.prototype.getAlpha=function(e){return 1/(1+this.frequency/(2*Math.PI*e))},e}(),zd=function(){function e(e){this.config=e}return e.prototype.apply=function(e,t,n){var i=this;if(null==e)return this.reset(),null;this.initializeFiltersIfEmpty(e);var r=1;if(!this.config.disableValueScaling){if(n<this.config.minAllowedObjectScale)return Nh([],e,!0);r=1/n}return e.map((function(e,n){var o=Eh(Eh({},e),{x:i.xFilters[n].apply(e.x,t,r),y:i.yFilters[n].apply(e.y,t,r)});return null!=e.z&&(o.z=i.zFilters[n].apply(e.z,t,r)),o}))},e.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},e.prototype.initializeFiltersIfEmpty=function(e){var t=this;null!=this.xFilters&&this.xFilters.length===e.length||(this.xFilters=e.map((function(e){return new Pd(t.config)})),this.yFilters=e.map((function(e){return new Pd(t.config)})),this.zFilters=e.map((function(e){return new Pd(t.config)})))},e}(),Ad=function(){function e(e){this.config=e,this.window=[],this.lowPassFilter=new Rd(1),this.lastValue=0,this.lastValueScale=1,this.lastTimestamp=-1}return e.prototype.apply=function(e,t,n){if(null==e)return e;var i,r=Math.trunc(t);if(this.lastTimestamp>=r)return e;if(-1===this.lastTimestamp)i=1;else{for(var o=e*n-this.lastValue*this.lastValueScale,a=r-this.lastTimestamp,s=o,u=a,l=(1+this.window.length)*(1e6/30),h=0,d=this.window;h<d.length;h++){var c=d[h];if(u+c.duration>l)break;s+=c.distance,u+=c.duration}var p=s/(1e-6*u);i=1-1/(1+this.config.velocityScale*Math.abs(p)),this.window.unshift({distance:o,duration:a}),this.window.length>this.config.windowSize&&this.window.pop()}return this.lastValue=e,this.lastValueScale=n,this.lastTimestamp=r,this.lowPassFilter.applyWithAlpha(e,i)},e}(),Td=function(){function e(e){this.config=e}return e.prototype.apply=function(e,t,n){var i=this;if(null==e)return this.reset(),null;var r=1;if(!this.config.disableValueScaling){if(n<this.config.minAllowedObjectScale)return Nh([],e,!0);r=1/n}return this.initializeFiltersIfEmpty(e),e.map((function(e,n){var o=Eh(Eh({},e),{x:i.xFilters[n].apply(e.x,t,r),y:i.yFilters[n].apply(e.y,t,r)});return null!=e.z&&(o.z=i.zFilters[n].apply(e.z,t,r)),o}))},e.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},e.prototype.initializeFiltersIfEmpty=function(e){var t=this;null!=this.xFilters&&this.xFilters.length===e.length||(this.xFilters=e.map((function(e){return new Ad(t.config)})),this.yFilters=e.map((function(e){return new Ad(t.config)})),this.zFilters=e.map((function(e){return new Ad(t.config)})))},e}(),Ld=function(){function e(e){if(null!=e.velocityFilter)this.keypointsFilter=new Td(e.velocityFilter);else{if(null==e.oneEuroFilter)throw new Error("Either configure velocityFilter or oneEuroFilter, but got "+"".concat(e,"."));this.keypointsFilter=new zd(e.oneEuroFilter)}}return e.prototype.apply=function(e,t,n,i,r){if(void 0===i&&(i=!1),null==e)return this.keypointsFilter.reset(),null;var o=null!=r?function(e,t){return(e.width*t.width+e.height*t.height)/2}(r,n):1,a=i?md(e,n):e,s=this.keypointsFilter.apply(a,t,o);return i?Id(s,n):s},e}(),Ed=function(){function e(e){this.alpha=e.alpha}return e.prototype.apply=function(e){var t=this;if(null==e)return this.visibilityFilters=null,null;null!=this.visibilityFilters&&this.visibilityFilters.length===e.length||(this.visibilityFilters=e.map((function(e){return new Rd(t.alpha)})));for(var n=[],i=0;i<e.length;++i){var r=e[i],o=Eh({},r);o.score=this.visibilityFilters[i].apply(r.score),n.push(o)}return n},e}(),$d={reduceBoxesInLowestlayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:5,minScale:.1484375,maxScale:.75,inputSizeHeight:224,inputSizeWidth:224,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,32,32,32],aspectRatios:[1],fixedAnchorSize:!0},Fd={runtime:"tfjs",modelType:"full",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"},Nd={maxPoses:1,flipHorizontal:!1},Dd={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2254,numCoords:12,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:4,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:224,yScale:224,hScale:224,wScale:224,minScoreThresh:.5},_d=.3,Md={shiftX:0,shiftY:0,scaleX:1.25,scaleY:1.25,squareLong:!0},Od={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},Bd={outputTensorSize:{width:256,height:256},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},Ud={numLandmarks:39,inputImageWidth:256,inputImageHeight:256,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},Wd={numLandmarks:39,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},Vd={kernelSize:7,minConfidenceToRefine:.5},Hd={alpha:.1},Gd={oneEuroFilter:{frequency:30,minCutOff:.05,beta:80,derivateCutOff:1,minAllowedObjectScale:1e-6}},jd={oneEuroFilter:{frequency:30,minCutOff:.01,beta:10,derivateCutOff:1,minAllowedObjectScale:1e-6}},Kd={oneEuroFilter:{frequency:30,minCutOff:.1,beta:40,derivateCutOff:1,minAllowedObjectScale:1e-6,disableValueScaling:!0}},Xd={activation:"none"},qd={combineWithPreviousRatio:.7},Yd=function(){function e(e){this.mask=e}return e.prototype.toCanvasImageSource=function(){return $h(this,void 0,void 0,(function(){return Fh(this,(function(e){return[2,Vh(this.mask)]}))}))},e.prototype.toImageData=function(){return $h(this,void 0,void 0,(function(){return Fh(this,(function(e){return[2,Hh(this.mask)]}))}))},e.prototype.toTensor=function(){return $h(this,void 0,void 0,(function(){return Fh(this,(function(e){return[2,this.mask]}))}))},e.prototype.getUnderlyingType=function(){return"tensor"},e}();function Zd(e){return jh(e),"person"}var Qd=function(){function e(e,t,n,i,r,o){this.detectorModel=e,this.landmarkModel=t,this.enableSmoothing=n,this.enableSegmentation=i,this.smoothSegmentation=r,this.modelType=o,this.regionOfInterest=null,this.prevFilteredSegmentationMask=null,this.anchors=function(e){null==e.reduceBoxesInLowestLayer&&(e.reduceBoxesInLowestLayer=!1),null==e.interpolatedScaleAspectRatio&&(e.interpolatedScaleAspectRatio=1),null==e.fixedAnchorSize&&(e.fixedAnchorSize=!1);for(var t=[],n=0;n<e.numLayers;){for(var i=[],r=[],o=[],a=[],s=n;s<e.strides.length&&e.strides[s]===e.strides[n];){var u=hd(e.minScale,e.maxScale,s,e.strides.length);if(0===s&&e.reduceBoxesInLowestLayer)o.push(1),o.push(2),o.push(.5),a.push(.1),a.push(u),a.push(u);else{for(var l=0;l<e.aspectRatios.length;++l)o.push(e.aspectRatios[l]),a.push(u);if(e.interpolatedScaleAspectRatio>0){var h=s===e.strides.length-1?1:hd(e.minScale,e.maxScale,s+1,e.strides.length);a.push(Math.sqrt(u*h)),o.push(e.interpolatedScaleAspectRatio)}}s++}for(var d=0;d<o.length;++d){var c=Math.sqrt(o[d]);i.push(a[d]/c),r.push(a[d]*c)}var p=0,f=0;if(e.featureMapHeight.length>0)p=e.featureMapHeight[n],f=e.featureMapWidth[n];else{var m=e.strides[n];p=Math.ceil(e.inputSizeHeight/m),f=Math.ceil(e.inputSizeWidth/m)}for(var g=0;g<p;++g)for(var y=0;y<f;++y)for(var x=0;x<i.length;++x){var b={xCenter:(y+e.anchorOffsetX)/f,yCenter:(g+e.anchorOffsetY)/p,width:0,height:0};e.fixedAnchorSize?(b.width=1,b.height=1):(b.width=r[x],b.height=i[x]),t.push(b)}n=s}return t}($d);var a=(0,u.tGX)(this.anchors.map((function(e){return e.width}))),s=(0,u.tGX)(this.anchors.map((function(e){return e.height}))),l=(0,u.tGX)(this.anchors.map((function(e){return e.xCenter}))),h=(0,u.tGX)(this.anchors.map((function(e){return e.yCenter})));this.anchorTensor={x:l,y:h,w:a,h:s},this.prevFilteredSegmentationMask=this.enableSegmentation?(0,u.KtR)([],[0,0]):null}return e.prototype.estimatePoses=function(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s,l,h,d,c,p,f,m,g,y,x,b,w,v,S,k,C,I,R;return Fh(this,(function(P){switch(P.label){case 0:return i=function(e){var t;if(null==(t=null==e?Nd:Eh({},e)).maxPoses&&(t.maxPoses=1),t.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(t.maxPoses,". Should be > 0."));if(t.maxPoses>1)throw new Error("Multi-pose detection is not implemented yet. Please set maxPoses to 1.");return t}(t),null==e?(this.reset(),[2,[]]):(this.maxPoses=i.maxPoses,this.timestamp=null!=n?1e3*n:cd(e)?1e6*e.currentTime:null,r=Qh(e),o=(0,u.DZQ)((function(){return(0,u.wgE)(ed(e),"float32")})),null!=(a=this.regionOfInterest)?[3,2]:[4,this.detectPose(o)]);case 1:if(0===(s=P.sent()).length)return this.reset(),o.dispose(),[2,[]];l=s[0],a=this.poseDetectionToRoi(l,r),P.label=2;case 2:return[4,this.poseLandmarksByRoi(a,o)];case 3:return h=P.sent(),o.dispose(),null==h?(this.reset(),[2,[]]):(d=h.landmarks,c=h.auxiliaryLandmarks,p=h.poseScore,f=h.worldLandmarks,m=h.segmentationMask,g=this.poseLandmarkFiltering(d,c,f,r),y=g.actualLandmarksFiltered,x=g.auxiliaryLandmarksFiltered,b=g.actualWorldLandmarksFiltered,w=this.poseLandmarksToRoi(x,r),this.regionOfInterest=w,v=this.smoothSegmentation&&null!=m?this.poseSegmentationFiltering(m):m,null!=(S=null!=y?md(y,r):null)&&S.forEach((function(e,t){e.name=_h[t]})),null!=(k=b)&&k.forEach((function(e,t){e.name=_h[t]})),C={score:p,keypoints:S,keypoints3D:k},null!==v&&(I=(0,u.DZQ)((function(){var e=(0,u.UG6)(v,2),t=(0,u.eVF)(e,[[0,0],[0,0],[0,1]]);return(0,u.FFZ)(t,[[0,0],[0,0],[0,2]],"symmetric")})),this.smoothSegmentation||(0,u.ASo)(v),R={maskValueToLabel:Zd,mask:new Yd(I)},C.segmentation=R),[2,[C]])}}))}))},e.prototype.poseSegmentationFiltering=function(e){var t=this.prevFilteredSegmentationMask;return 0===t.size?this.prevFilteredSegmentationMask=e:(this.prevFilteredSegmentationMask=xd(t,e,qd),(0,u.ASo)(e)),(0,u.ASo)(t),this.prevFilteredSegmentationMask},e.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),(0,u.ASo)([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h,this.prevFilteredSegmentationMask])},e.prototype.reset=function(){this.regionOfInterest=null,this.enableSegmentation&&((0,u.ASo)(this.prevFilteredSegmentationMask),this.prevFilteredSegmentationMask=(0,u.KtR)([],[0,0])),this.visibilitySmoothingFilterActual=null,this.visibilitySmoothingFilterAuxiliary=null,this.landmarksSmoothingFilterActual=null,this.landmarksSmoothingFilterAuxiliary=null},e.prototype.detectPose=function(e){return $h(this,void 0,void 0,(function(){var t,n,i,r,o,a,s,l,h,d;return Fh(this,(function(c){switch(c.label){case 0:return t=ld(e,Od),n=t.imageTensor,i=t.padding,r=this.detectorModel.predict(n),o=dd(r),a=o.boxes,[4,bd([s=o.logits,a],this.anchorTensor,Dd)];case 1:return 0===(l=c.sent()).length?((0,u.ASo)([n,r,s,a]),[2,l]):[4,fd(l,this.maxPoses,_d)];case 2:return h=c.sent(),d=function(e,t){void 0===e&&(e=[]);for(var n=t.left,i=t.top,r=t.left+t.right,o=t.top+t.bottom,a=0;a<e.length;a++){var s=e[a],u=s.locationData.relativeBoundingBox,l=(u.xMin-n)/(1-r),h=(u.yMin-i)/(1-o),d=u.width/(1-r),c=u.height/(1-o);u.xMin=l,u.yMin=h,u.width=d,u.height=c,u.xMax=l+d,u.yMax=h+c;var p=s.locationData.relativeKeypoints;p&&p.forEach((function(e){var t=(e.x-n)/(1-r),a=(e.y-i)/(1-o);e.x=t,e.y=a}))}return e}(h,i),(0,u.ASo)([n,r,s,a]),[2,d]}}))}))},e.prototype.poseDetectionToRoi=function(e,t){return Cd(id(e,t,{rotationVectorEndKeypointIndex:1,rotationVectorStartKeypointIndex:0,rotationVectorTargetAngleDegree:90}),t,Md)},e.prototype.poseLandmarksByRoi=function(e,t){return $h(this,void 0,void 0,(function(){var n,i,r,o,a,s,l,h,d,c,p,f,m,g;return Fh(this,(function(y){switch(y.label){case 0:if(n=Qh(t),i=ld(t,Bd,e),r=i.imageTensor,o=i.padding,a=i.transformationMatrix,"lite"!==this.modelType&&"full"!==this.modelType&&"heavy"!==this.modelType)throw new Error("Model type must be one of lite, full or heavy,"+"but got ".concat(this.modelType));return s=["ld_3d","output_poseflag","activation_heatmap","world_3d"],this.enableSegmentation&&s.push("activation_segmentation"),l=this.landmarkModel.execute(r,s),[4,this.tensorsToPoseLandmarksAndSegmentation(l)];case 1:return null==(h=y.sent())?((0,u.ASo)(l),(0,u.ASo)(r),[2,null]):(d=h.landmarks,c=h.auxiliaryLandmarks,p=h.poseScore,f=h.worldLandmarks,m=h.segmentationMask,[4,this.poseLandmarksAndSegmentationInverseProjection(n,e,o,a,d,c,f,m)]);case 2:return g=y.sent(),(0,u.ASo)(l),(0,u.ASo)(r),[2,Eh({poseScore:p},g)]}}))}))},e.prototype.poseLandmarksAndSegmentationInverseProjection=function(e,t,n,i,r,o,a,s){return $h(this,void 0,void 0,(function(){var l,h,d,c,p,f;return Fh(this,(function(m){return l=yd(r,n),h=yd(o,n),d=sd(l,t),c=sd(h,t),p=function(e,t){for(var n=[],i=0,r=e;i<r.length;i++){var o=r[i],a=o.x,s=o.y,u=t.rotation,l=Math.cos(u)*a-Math.sin(u)*s,h=Math.sin(u)*a+Math.cos(u)*s,d=Eh({},o);d.x=l,d.y=h,n.push(d)}return n}(a,t),f=null,this.enableSegmentation&&(f=(0,u.DZQ)((function(){var t=s.shape,n=t[0],r=t[1],o=function(e){var t=rd(new Array(16).fill(0));t[0][0]=ad(e,0,0),t[1][0]=-ad(e,0,1),t[2][0]=ad(e,0,2),t[3][0]=-ad(e,0,3),t[0][2]=ad(e,2,0),t[1][2]=-ad(e,2,1),t[2][2]=ad(e,2,2),t[3][2]=-ad(e,2,3),t[0][1]=-ad(e,1,0),t[1][1]=ad(e,1,1),t[2][1]=-ad(e,1,2),t[3][1]=ad(e,1,3),t[0][3]=-ad(e,3,0),t[1][3]=ad(e,3,1),t[2][3]=-ad(e,3,2),t[3][3]=ad(e,3,3);for(var n=e[0][0]*t[0][0]+e[1][0]*t[0][1]+e[2][0]*t[0][2]+e[3][0]*t[0][3],i=0;i<t.length;i++)for(var r=0;r<t.length;r++)t[i][r]/=n;return t}(i),a=(0,u.KtR)(td(o,{width:r,height:n},e),[1,8]),l=[1,n,r,1];return(0,u.r2V)(u.Slp.transform((0,u.tQQ)(s,l),a,"bilinear","constant",0,[e.height,e.width]),[0,3])})),(0,u.ASo)(s)),[2,{landmarks:d,auxiliaryLandmarks:c,worldLandmarks:p,segmentationMask:f}]}))}))},e.prototype.tensorsToPoseLandmarksAndSegmentation=function(e){return $h(this,void 0,void 0,(function(){var t,n,i,r,o,a,s,l,h,d,c,p,f;return Fh(this,(function(m){switch(m.label){case 0:return t=e[0],n=e[1],i=e[2],r=e[3],o=this.enableSegmentation?e[4]:null,[4,n.data()];case 1:return(a=m.sent()[0])<.5?[2,null]:[4,kd(t,Ud)];case 2:return[4,gd(m.sent(),i,Vd)];case 3:return s=m.sent(),l=s.slice(0,33),h=s.slice(33,35),[4,kd(r,Wd)];case 4:return d=m.sent(),c=d.slice(0,33),p=function(e,t,n){void 0===n&&(n=!0);for(var i=[],r=0;r<e.length;r++){var o=Eh({},t[r]);n&&(o.score=e[r].score),i.push(o)}return i}(l,c,!0),f=this.enableSegmentation?function(e,t,n){return(0,u.DZQ)((function(){var i=(0,u.r2V)(e,[0]),r=i.shape[2];if(1===r){var o=i;switch(t.activation){case"none":break;case"sigmoid":o=(0,u.ry7)(o);break;case"softmax":throw new Error("Softmax activation requires two channels.");default:throw new Error("Activation not supported (".concat(t.activation,")"))}var a=n?u.Slp.resizeBilinear(o,[n.height,n.width]):o;return(0,u.r2V)(a,[2])}throw new Error("Unsupported number of tensor channels ".concat(r))}))}(o,Xd):null,[2,{landmarks:l,auxiliaryLandmarks:h,poseScore:a,worldLandmarks:p,segmentationMask:f}]}}))}))},e.prototype.poseLandmarksToRoi=function(e,t){return Cd(id(pd(e),t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:90}),t,Md)},e.prototype.poseLandmarkFiltering=function(e,t,n,i){var r,o,a;if(null!=this.timestamp&&this.enableSmoothing){var s=id(pd(t),i,{rotationVectorEndKeypointIndex:0,rotationVectorStartKeypointIndex:1,rotationVectorTargetAngleDegree:90});null==this.visibilitySmoothingFilterActual&&(this.visibilitySmoothingFilterActual=new Ed(Hd)),r=this.visibilitySmoothingFilterActual.apply(e),null==this.visibilitySmoothingFilterAuxiliary&&(this.visibilitySmoothingFilterAuxiliary=new Ed(Hd)),o=this.visibilitySmoothingFilterAuxiliary.apply(t),a=this.visibilitySmoothingFilterActual.apply(n),null==this.landmarksSmoothingFilterActual&&(this.landmarksSmoothingFilterActual=new Ld(Gd)),r=this.landmarksSmoothingFilterActual.apply(r,this.timestamp,i,!0,s),null==this.landmarksSmoothingFilterAuxiliary&&(this.landmarksSmoothingFilterAuxiliary=new Ld(jd)),o=this.landmarksSmoothingFilterAuxiliary.apply(o,this.timestamp,i,!0,s),null==this.worldLandmarksSmoothingFilterActual&&(this.worldLandmarksSmoothingFilterActual=new Ld(Kd)),a=this.worldLandmarksSmoothingFilterActual.apply(n,this.timestamp)}else r=e,o=t,a=n;return{actualLandmarksFiltered:r,auxiliaryLandmarksFiltered:o,actualWorldLandmarksFiltered:a}},e}();function Jd(e){return $h(this,void 0,void 0,(function(){var t,n,i,r,o,a;return Fh(this,(function(s){switch(s.label){case 0:return t=function(e){var t=Eh({},null==e?Fd:e);if(null==t.enableSmoothing&&(t.enableSmoothing=Fd.enableSmoothing),null==t.enableSegmentation&&(t.enableSegmentation=Fd.enableSegmentation),null==t.smoothSegmentation&&(t.smoothSegmentation=Fd.smoothSegmentation),null==t.modelType&&(t.modelType=Fd.modelType),null==t.detectorModelUrl&&(t.detectorModelUrl=Fd.detectorModelUrl),null==t.landmarkModelUrl)switch(t.modelType){case"lite":t.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";break;case"heavy":t.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";break;case"full":default:t.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"}return t}(e),n="string"==typeof t.detectorModelUrl&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,i="string"==typeof t.landmarkModelUrl&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([(0,l.ox)(t.detectorModelUrl,{fromTFHub:n}),(0,l.ox)(t.landmarkModelUrl,{fromTFHub:i})])];case 1:return r=s.sent(),o=r[0],a=r[1],[2,new Qd(o,a,t.enableSmoothing,t.enableSegmentation,t.smoothSegmentation,t.modelType)]}}))}))}var ec,tc,nc=function(){function e(e){!function(e){if(e.maxTracks<1)throw new Error("Must specify 'maxTracks' to be at least 1, but "+"encountered ".concat(e.maxTracks));if(e.maxAge<=0)throw new Error("Must specify 'maxAge' to be positive, but "+"encountered ".concat(e.maxAge));if(void 0!==e.keypointTrackerParams){if(e.keypointTrackerParams.keypointConfidenceThreshold<0||e.keypointTrackerParams.keypointConfidenceThreshold>1)throw new Error("Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered "+"".concat(e.keypointTrackerParams.keypointConfidenceThreshold));if(e.keypointTrackerParams.minNumberOfKeypoints<1)throw new Error("Must specify 'minNumberOfKeypoints' to be at least 1, but "+"encountered ".concat(e.keypointTrackerParams.minNumberOfKeypoints));for(var t=0,n=e.keypointTrackerParams.keypointFalloff;t<n.length;t++){var i=n[t];if(i<=0)throw new Error("Must specify each keypoint falloff parameterto be positive "+"but encountered ".concat(i))}}}(e),this.tracks=[],this.maxTracks=e.maxTracks,this.maxAge=1e3*e.maxAge,this.minSimilarity=e.minSimilarity,this.nextID=1}return e.prototype.apply=function(e,t){this.filterOldTracks(t);var n=this.computeSimilarity(e);return this.assignTracks(e,n,t),this.updateTracks(t),e},e.prototype.getTracks=function(){return this.tracks.slice()},e.prototype.getTrackIDs=function(){return new Set(this.tracks.map((function(e){return e.id})))},e.prototype.filterOldTracks=function(e){var t=this;this.tracks=this.tracks.filter((function(n){return e-n.lastTimestamp<=t.maxAge}))},e.prototype.assignTracks=function(e,t,n){for(var i=Array.from(Array(t[0].length).keys()),r=[],o=0,a=Array.from(Array(e.length).keys());o<a.length;o++){var s=a[o];if(0!==i.length){for(var u=-1,l=-1,h=0,d=i;h<d.length;h++){var c=d[h],p=t[s][c];p>=this.minSimilarity&&p>l&&(u=c,l=p)}if(u>=0){var f=this.tracks[u];f=Object.assign(f,this.createTrack(e[s],n,f.id)),e[s].id=f.id;var m=i.indexOf(u);i.splice(m,1)}else r.push(s)}else r.push(s)}for(var g=0,y=r;g<y.length;g++){s=y[g];var x=this.createTrack(e[s],n);this.tracks.push(x),e[s].id=x.id}},e.prototype.updateTracks=function(e){this.tracks.sort((function(e,t){return t.lastTimestamp-e.lastTimestamp})),this.tracks=this.tracks.slice(0,this.maxTracks)},e.prototype.createTrack=function(e,t,n){var i={id:n||this.nextTrackID(),lastTimestamp:t,keypoints:Nh([],e.keypoints,!0).map((function(e){return Eh({},e)}))};return void 0!==e.box&&(i.box=Eh({},e.box)),i},e.prototype.nextTrackID=function(){var e=this.nextID;return this.nextID+=1,e},e.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.tracks=this.tracks.filter((function(t){return!e.includes(t.id)}))},e.prototype.reset=function(){this.tracks=[]},e}(),ic=function(e){function t(t){return e.call(this,t)||this}return Lh(t,e),t.prototype.computeSimilarity=function(e){var t=this;return 0===e.length||0===this.tracks.length?[[]]:e.map((function(e){return t.tracks.map((function(n){return t.iou(e,n)}))}))},t.prototype.iou=function(e,t){var n=Math.max(e.box.xMin,t.box.xMin),i=Math.max(e.box.yMin,t.box.yMin),r=Math.min(e.box.xMax,t.box.xMax),o=Math.min(e.box.yMax,t.box.yMax);if(n>=r||i>=o)return 0;var a=(r-n)*(o-i);return a/(e.box.width*e.box.height+t.box.width*t.box.height-a)},t}(nc),rc=function(e){function t(t){var n=e.call(this,t)||this;return n.keypointThreshold=t.keypointTrackerParams.keypointConfidenceThreshold,n.keypointFalloff=t.keypointTrackerParams.keypointFalloff,n.minNumKeyoints=t.keypointTrackerParams.minNumberOfKeypoints,n}return Lh(t,e),t.prototype.computeSimilarity=function(e){if(0===e.length||0===this.tracks.length)return[[]];for(var t=[],n=0,i=e;n<i.length;n++){for(var r=i[n],o=[],a=0,s=this.tracks;a<s.length;a++){var u=s[a];o.push(this.oks(r,u))}t.push(o)}return t},t.prototype.oks=function(e,t){for(var n=this.area(t.keypoints)+1e-6,i=0,r=0,o=0;o<e.keypoints.length;++o){var a=e.keypoints[o],s=t.keypoints[o];if(!(a.score<this.keypointThreshold||s.score<this.keypointThreshold)){r+=1;var u=Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2),l=2*this.keypointFalloff[o];i+=Math.exp(-1*u/(2*n*Math.pow(l,2)))}}return r<this.minNumKeyoints?0:i/r},t.prototype.area=function(e){var t=this,n=e.filter((function(e){return e.score>t.keypointThreshold})),i=Math.min.apply(Math,Nh([1],n.map((function(e){return e.x})),!1)),r=Math.max.apply(Math,Nh([0],n.map((function(e){return e.x})),!1)),o=Math.min.apply(Math,Nh([1],n.map((function(e){return e.y})),!1));return(r-i)*(Math.max.apply(Math,Nh([0],n.map((function(e){return e.y})),!1))-o)},t}(nc);function oc(e){switch(e){case tc.BlazePose:return _h.reduce((function(e,t,n){return e[t]=n,e}),{});case tc.PoseNet:case tc.MoveNet:return Dh.reduce((function(e,t,n){return e[t]=n,e}),{});default:throw new Error("Model ".concat(e," is not supported."))}}!function(e){e.Keypoint="keypoint",e.BoundingBox="boundingBox"}(ec||(ec={})),function(e){e.MoveNet="MoveNet",e.BlazePose="BlazePose",e.PoseNet="PoseNet"}(tc||(tc={}));Object.freeze({__proto__:null,getKeypointIndexBySide:function(e){switch(e){case tc.BlazePose:return Mh;case tc.PoseNet:case tc.MoveNet:return Oh;default:throw new Error("Model ".concat(e," is not supported."))}},getAdjacentPairs:function(e){switch(e){case tc.BlazePose:return Uh;case tc.PoseNet:case tc.MoveNet:return Bh;default:throw new Error("Model ".concat(e," is not supported."))}},getKeypointIndexByName:oc});var ac=["SinglePose.Lightning","SinglePose.Thunder","MultiPose.Lightning"],sc={modelType:"SinglePose.Lightning",enableSmoothing:!0},uc={},lc={frequency:30,minCutOff:2.5,beta:300,derivateCutOff:2.5,thresholdCutOff:.5,thresholdBeta:5,disableValueScaling:!0},hc={maxTracks:18,maxAge:1e3,minSimilarity:.2,keypointTrackerParams:{keypointConfidenceThreshold:.3,keypointFalloff:[.026,.025,.025,.035,.035,.079,.079,.072,.072,.062,.062,.107,.107,.087,.087,.089,.089],minNumberOfKeypoints:4}},dc={maxTracks:18,maxAge:1e3,minSimilarity:.15,trackerParams:{}};function cc(e,t,n,i){for(var r={},o=0,a=Dh;o<a.length;o++){var s=a[o];r[s]=[t[n[s]].y*i.height,t[n[s]].x*i.width]}if(function(e,t){return(e[t.left_hip].score>.2||e[t.right_hip].score>.2)&&(e[t.left_shoulder].score>.2||e[t.right_shoulder].score>.2)}(t,n)){var u=(r.left_hip[0]+r.right_hip[0])/2,l=(r.left_hip[1]+r.right_hip[1])/2,h=function(e,t,n,i,r){for(var o=["left_shoulder","right_shoulder","left_hip","right_hip"],a=0,s=0,u=0;u<o.length;u++)(p=Math.abs(i-n[o[u]][0]))>a&&(a=p),(f=Math.abs(r-n[o[u]][1]))>s&&(s=f);for(var l=0,h=0,d=0,c=Object.keys(n);d<c.length;d++){var p,f,m=c[d];e[t[m]].score<.2||((p=Math.abs(i-n[m][0]))>l&&(l=p),(f=Math.abs(r-n[m][1]))>h&&(h=f))}return[a,s,l,h]}(t,n,r,u,l),d=h[0],c=h[1],p=h[2],f=h[3],m=Math.max(1.9*c,1.9*d,1.2*p,1.2*f),g=[u-(m=Math.min(m,Math.max(l,i.width-l,u,i.height-u))),l-m];if(m>Math.max(i.width,i.height)/2)return pc(null==e,i);var y=2*m;return{yMin:g[0]/i.height,xMin:g[1]/i.width,yMax:(g[0]+y)/i.height,xMax:(g[1]+y)/i.width,height:(g[0]+y)/i.height-g[0]/i.height,width:(g[1]+y)/i.width-g[1]/i.width}}return pc(null==e,i)}function pc(e,t){var n,i,r,o;return e?t.width>t.height?(n=1,i=t.height/t.width,r=0,o=(t.width/2-t.height/2)/t.width):(n=t.width/t.height,i=1,r=(t.height/2-t.width/2)/t.height,o=0):t.width>t.height?(n=t.width/t.height,i=1,r=(t.height/2-t.width/2)/t.height,o=0):(n=1,i=t.height/t.width,r=0,o=(t.width/2-t.height/2)/t.width),{yMin:r,xMin:o,yMax:r+n,xMax:o+i,height:n,width:i}}function fc(e){var t,n=null==e?sc:Eh({},e);if(null==n.modelType)n.modelType="SinglePose.Lightning";else if(ac.indexOf(n.modelType)<0)throw new Error("Invalid architecture ".concat(n.modelType,". ")+"Should be one of ".concat(ac));if(null==n.enableSmoothing&&(n.enableSmoothing=!0),null!=n.minPoseScore&&(n.minPoseScore<0||n.minPoseScore>1))throw new Error("minPoseScore should be between 0.0 and 1.0");if(null!=n.multiPoseMaxDimension&&(n.multiPoseMaxDimension%32!=0||n.multiPoseMaxDimension<32))throw new Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");if("MultiPose.Lightning"===n.modelType&&null==n.enableTracking&&(n.enableTracking=!0),"MultiPose.Lightning"===n.modelType&&!0===n.enableTracking)if(null==n.trackerType&&(n.trackerType=ec.BoundingBox),n.trackerType===ec.Keypoint)null!=n.trackerConfig?n.trackerConfig=function(e){var t=mc(hc,e);return t.keypointTrackerParams=Eh({},hc.keypointTrackerParams),null!=e.keypointTrackerParams&&(null!=e.keypointTrackerParams.keypointConfidenceThreshold&&(t.keypointTrackerParams.keypointConfidenceThreshold=e.keypointTrackerParams.keypointConfidenceThreshold),null!=e.keypointTrackerParams.keypointFalloff&&(t.keypointTrackerParams.keypointFalloff=e.keypointTrackerParams.keypointFalloff),null!=e.keypointTrackerParams.minNumberOfKeypoints&&(t.keypointTrackerParams.minNumberOfKeypoints=e.keypointTrackerParams.minNumberOfKeypoints)),t}(n.trackerConfig):n.trackerConfig=hc;else{if(n.trackerType!==ec.BoundingBox)throw new Error("Tracker type not supported by MoveNet");null!=n.trackerConfig?n.trackerConfig=(t=n.trackerConfig,mc(dc,t)):n.trackerConfig=dc}return n}function mc(e,t){var n={maxTracks:e.maxTracks,maxAge:e.maxAge,minSimilarity:e.minSimilarity};return null!=t.maxTracks&&(n.maxTracks=t.maxTracks),null!=t.maxAge&&(n.maxAge=t.maxAge),null!=t.minSimilarity&&(n.minSimilarity=t.minSimilarity),n}var gc=function(){function e(e,t){this.moveNetModel=e,this.modelInputResolution={height:0,width:0},this.keypointIndexByName=oc(tc.MoveNet),"SinglePose.Lightning"===t.modelType?(this.modelInputResolution.width=192,this.modelInputResolution.height=192):"SinglePose.Thunder"===t.modelType&&(this.modelInputResolution.width=256,this.modelInputResolution.height=256),this.multiPoseModel="MultiPose.Lightning"===t.modelType,this.multiPoseModel||(this.keypointFilter=new zd(lc),this.cropRegionFilterYMin=new Rd(.9),this.cropRegionFilterXMin=new Rd(.9),this.cropRegionFilterYMax=new Rd(.9),this.cropRegionFilterXMax=new Rd(.9)),this.enableSmoothing=t.enableSmoothing,t.minPoseScore?this.minPoseScore=t.minPoseScore:this.minPoseScore=.25,t.multiPoseMaxDimension?this.multiPoseMaxDimension=t.multiPoseMaxDimension:this.multiPoseMaxDimension=256,this.enableTracking=t.enableTracking,this.multiPoseModel&&this.enableTracking&&(t.trackerType===ec.Keypoint?this.tracker=new rc(t.trackerConfig):t.trackerType===ec.BoundingBox&&(this.tracker=new ic(t.trackerConfig)),this.enableSmoothing&&(this.keypointFilterMap=new Map))}return e.prototype.runSinglePersonPoseModel=function(e){return $h(this,void 0,void 0,(function(){var t,n,i,r,o;return Fh(this,(function(a){switch(a.label){case 0:if(4!==(t=this.moveNetModel.execute(e)).shape.length||1!==t.shape[0]||1!==t.shape[1]||17!==t.shape[2]||3!==t.shape[3])throw t.dispose(),new Error("Unexpected output shape from model: [".concat(t.shape,"]"));return"webgpu"===(0,u.jz4)()?[3,1]:(n=t.dataSync(),[3,3]);case 1:return[4,t.data()];case 2:n=a.sent(),a.label=3;case 3:for(t.dispose(),i={keypoints:[],score:0},r=0,o=0;o<17;++o)i.keypoints[o]={y:n[3*o],x:n[3*o+1],score:n[3*o+2]},i.keypoints[o].score>.2&&(++r,i.score+=i.keypoints[o].score);return r>0&&(i.score/=r),[2,i]}}))}))},e.prototype.runMultiPersonPoseModel=function(e){return $h(this,void 0,void 0,(function(){var t,n,i,r,o,a,s,l;return Fh(this,(function(h){switch(h.label){case 0:if(3!==(t=this.moveNetModel.execute(e)).shape.length||1!==t.shape[0]||56!==t.shape[2])throw t.dispose(),new Error("Unexpected output shape from model: [".concat(t.shape,"]"));return"webgpu"===(0,u.jz4)()?[3,1]:(n=t.dataSync(),[3,3]);case 1:return[4,t.data()];case 2:n=h.sent(),h.label=3;case 3:for(t.dispose(),i=[],r=n.length/56,o=0;o<r;++o)for(i[o]={keypoints:[]},a=56*o+51,i[o].box={yMin:n[a],xMin:n[a+1],yMax:n[a+2],xMax:n[a+3],width:n[a+3]-n[a+1],height:n[a+2]-n[a]},s=56*o+55,i[o].score=n[s],i[o].keypoints=[],l=0;l<17;++l)i[o].keypoints[l]={y:n[56*o+3*l],x:n[56*o+3*l+1],score:n[56*o+3*l+2]};return[2,i]}}))}))},e.prototype.estimatePoses=function(e,t,n){return void 0===t&&(t=uc),$h(this,void 0,void 0,(function(){var i,r,o,a,s,l;return Fh(this,(function(h){switch(h.label){case 0:return t=function(e){return null==e?uc:Eh({},e)}(t),null==e?(this.reset(),[2,[]]):(null==n?cd(e)&&(n=1e6*e.currentTime):n*=1e3,i=ed(e),r=Qh(i),o=(0,u.UG6)(i,0),e instanceof u.qYS||i.dispose(),a=[],this.multiPoseModel?[3,2]:[4,this.estimateSinglePose(o,r,n)]);case 1:return a=h.sent(),[3,4];case 2:return[4,this.estimateMultiplePoses(o,r,n)];case 3:a=h.sent(),h.label=4;case 4:for(s=0;s<a.length;++s)for(l=0;l<a[s].keypoints.length;++l)a[s].keypoints[l].name=Dh[l],a[s].keypoints[l].y*=r.height,a[s].keypoints[l].x*=r.width;return[2,a]}}))}))},e.prototype.estimateSinglePose=function(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s=this;return Fh(this,(function(l){switch(l.label){case 0:return this.cropRegion||(this.cropRegion=pc(null==this.cropRegion,t)),i=(0,u.DZQ)((function(){var t=(0,u.KtR)([[s.cropRegion.yMin,s.cropRegion.xMin,s.cropRegion.yMax,s.cropRegion.xMax]]),n=(0,u.Ul9)([1],"int32"),i=[s.modelInputResolution.height,s.modelInputResolution.width];return(0,u.wgE)(u.Slp.cropAndResize(e,t,n,i,"bilinear",0),"int32")})),e.dispose(),[4,this.runSinglePersonPoseModel(i)];case 1:if(r=l.sent(),i.dispose(),r.score<this.minPoseScore)return this.reset(),[2,[]];for(o=0;o<r.keypoints.length;++o)r.keypoints[o].y=this.cropRegion.yMin+r.keypoints[o].y*this.cropRegion.height,r.keypoints[o].x=this.cropRegion.xMin+r.keypoints[o].x*this.cropRegion.width;return null!=n&&this.enableSmoothing&&(r.keypoints=this.keypointFilter.apply(r.keypoints,n,1)),a=cc(this.cropRegion,r.keypoints,this.keypointIndexByName,t),this.cropRegion=this.filterCropRegion(a),[2,[r]]}}))}))},e.prototype.estimateMultiplePoses=function(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s,l,h,d,c,p,f,m=this;return Fh(this,(function(g){switch(g.label){case 0:return t.width>t.height?(r=this.multiPoseMaxDimension,o=Math.round(this.multiPoseMaxDimension*t.height/t.width),i=u.Slp.resizeBilinear(e,[o,r]),s=r,l=32*Math.ceil(o/32),a=(0,u.eVF)(i,[[0,0],[0,l-o],[0,0],[0,0]])):(r=Math.round(this.multiPoseMaxDimension*t.width/t.height),o=this.multiPoseMaxDimension,i=u.Slp.resizeBilinear(e,[o,r]),s=32*Math.ceil(r/32),l=o,a=(0,u.eVF)(i,[[0,0],[0,0],[0,s-r],[0,0]])),i.dispose(),e.dispose(),h=(0,u.wgE)(a,"int32"),a.dispose(),[4,this.runMultiPersonPoseModel(h)];case 1:for(d=g.sent(),h.dispose(),d=d.filter((function(e){return e.score>=m.minPoseScore})),p=0;p<d.length;++p)for(c=0;c<d[p].keypoints.length;++c)d[p].keypoints[c].y*=l/o,d[p].keypoints[c].x*=s/r;if(this.enableTracking&&(this.tracker.apply(d,n),this.enableSmoothing)){for(p=0;p<d.length;++p)this.keypointFilterMap.has(d[p].id)||this.keypointFilterMap.set(d[p].id,new zd(lc)),d[p].keypoints=this.keypointFilterMap.get(d[p].id).apply(d[p].keypoints,n,1);f=this.tracker.getTrackIDs(),this.keypointFilterMap.forEach((function(e,t){f.has(t)||m.keypointFilterMap.delete(t)}))}return[2,d]}}))}))},e.prototype.filterCropRegion=function(e){if(e){var t=this.cropRegionFilterYMin.apply(e.yMin),n=this.cropRegionFilterXMin.apply(e.xMin),i=this.cropRegionFilterYMax.apply(e.yMax),r=this.cropRegionFilterXMax.apply(e.xMax);return{yMin:t,xMin:n,yMax:i,xMax:r,height:i-t,width:r-n}}return this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset(),null},e.prototype.dispose=function(){this.moveNetModel.dispose()},e.prototype.reset=function(){this.cropRegion=null,this.resetFilters()},e.prototype.resetFilters=function(){this.keypointFilter.reset(),this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset()},e}();function yc(e){return void 0===e&&(e=sc),$h(this,void 0,void 0,(function(){var t,n,i,r;return Fh(this,(function(o){switch(o.label){case 0:return t=fc(e),i=!0,t.modelUrl?(i="string"==typeof t.modelUrl&&t.modelUrl.indexOf("https://tfhub.dev")>-1,[4,(0,l.ox)(t.modelUrl,{fromTFHub:i})]):[3,2];case 1:return n=o.sent(),[3,4];case 2:return r=void 0,"SinglePose.Lightning"===t.modelType?r="https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4":"SinglePose.Thunder"===t.modelType?r="https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4":"MultiPose.Lightning"===t.modelType&&(r="https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"),[4,(0,l.ox)(r,{fromTFHub:i})];case 3:n=o.sent(),o.label=4;case 4:return"webgl"===(0,u.jz4)()&&(0,u._K2)().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",0),[2,new gc(n,t)]}}))}))}var xc={architecture:"MobileNetV1",outputStride:16,multiplier:.75,inputResolution:{height:257,width:257}},bc=["MobileNetV1","ResNet50"],wc={MobileNetV1:[8,16],ResNet50:[16]},vc=[8,16,32],Sc={MobileNetV1:[.5,.75,1],ResNet50:[1]},kc=[1,2,4],Cc={maxPoses:1,flipHorizontal:!1},Ic={maxPoses:5,flipHorizontal:!1,scoreThreshold:.5,nmsRadius:20},Rc=[-123.15,-115.9,-103.06];function Pc(e){return Math.floor(e/2)}var zc=function(){function e(e,t){this.priorityQueue=new Array(e),this.numberOfElements=-1,this.getElementValue=t}return e.prototype.enqueue=function(e){this.priorityQueue[++this.numberOfElements]=e,this.swim(this.numberOfElements)},e.prototype.dequeue=function(){var e=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,e},e.prototype.empty=function(){return-1===this.numberOfElements},e.prototype.size=function(){return this.numberOfElements+1},e.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},e.prototype.max=function(){return this.priorityQueue[0]},e.prototype.swim=function(e){for(;e>0&&this.less(Pc(e),e);)this.exchange(e,Pc(e)),e=Pc(e)},e.prototype.sink=function(e){for(;2*e<=this.numberOfElements;){var t=2*e;if(t<this.numberOfElements&&this.less(t,t+1)&&t++,!this.less(e,t))break;this.exchange(e,t),e=t}},e.prototype.getValueAt=function(e){return this.getElementValue(this.priorityQueue[e])},e.prototype.less=function(e,t){return this.getValueAt(e)<this.getValueAt(t)},e.prototype.exchange=function(e,t){var n=this.priorityQueue[e];this.priorityQueue[e]=this.priorityQueue[t],this.priorityQueue[t]=n},e}();function Ac(e,t,n,i,r,o){for(var a=o.shape,s=a[0],u=a[1],l=!0,h=Math.max(n-r,0),d=Math.min(n+r+1,s),c=h;c<d;++c){for(var p=Math.max(i-r,0),f=Math.min(i+r+1,u),m=p;m<f;++m)if(o.get(c,m,e)>t){l=!1;break}if(!l)break}return l}function Tc(e){return $h(this,void 0,void 0,(function(){return Fh(this,(function(t){return[2,Promise.all(e.map((function(e){return e.buffer()})))]}))}))}function Lc(e,t,n,i){return{y:i.get(e,t,n),x:i.get(e,t,n+17)}}function Ec(e,t,n){var i=Lc(e.heatmapY,e.heatmapX,e.id,n),r=i.y,o=i.x;return{x:e.heatmapX*t+o,y:e.heatmapY*t+r}}function $c(e,t,n,i){var r=n.x,o=n.y;return e.some((function(e){var n,a,s,u,l,h,d=e.keypoints;return n=o,a=r,s=d[i].y,u=d[i].x,(l=s-n)*l+(h=u-a)*h<=t}))}var Fc=Dh.reduce((function(e,t,n){return e[t]=n,e}),{}),Nc=[["nose","left_eye"],["left_eye","left_ear"],["nose","right_eye"],["right_eye","right_ear"],["nose","left_shoulder"],["left_shoulder","left_elbow"],["left_elbow","left_wrist"],["left_shoulder","left_hip"],["left_hip","left_knee"],["left_knee","left_ankle"],["nose","right_shoulder"],["right_shoulder","right_elbow"],["right_elbow","right_wrist"],["right_shoulder","right_hip"],["right_hip","right_knee"],["right_knee","right_ankle"]].map((function(e){var t=e[0],n=e[1];return[Fc[t],Fc[n]]})),Dc=Nc.map((function(e){return e[1]})),_c=Nc.map((function(e){return e[0]}));function Mc(e,t,n){return e<t?t:e>n?n:e}function Oc(e,t,n,i){return{y:Mc(Math.round(e.y/t),0,n-1),x:Mc(Math.round(e.x/t),0,i-1)}}function Bc(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Uc(e,t,n,i,r,o,a,s){void 0===s&&(s=2);for(var u=i.shape,l=u[0],h=u[1],d={y:t.y,x:t.x},c=Bc(d,function(e,t,n){var i=n.shape[2]/2;return{y:n.get(t.y,t.x,e),x:n.get(t.y,t.x,i+e)}}(e,Oc(d,o,l,h),a)),p=0;p<s;p++){var f=Oc(c,o,l,h),m=Lc(f.y,f.x,n,r);c=Bc({x:f.x*o,y:f.y*o},{x:m.x,y:m.y})}var g=Oc(c,o,l,h),y=i.get(g.y,g.x,n);return{y:c.y,x:c.x,name:Dh[n],score:y}}function Wc(e,t,n,i,r,o){var a=t.shape[2],s=Dc.length,u=new Array(a),l=e.part,h=e.score,d=Ec(l,i,n);u[l.id]={score:h,name:Dh[l.id],y:d.y,x:d.x};for(var c=s-1;c>=0;--c){var p=Dc[c],f=_c[c];u[p]&&!u[f]&&(u[f]=Uc(c,u[p],f,t,n,i,o))}for(c=0;c<s;++c)p=_c[c],f=Dc[c],u[p]&&!u[f]&&(u[f]=Uc(c,u[p],f,t,n,i,r));return u}function Vc(e,t,n){return n.reduce((function(n,i,r){var o=i.y,a=i.x,s=i.score;return $c(e,t,{y:o,x:a},r)||(n+=s),n}),0)/n.length}function Hc(e,t,n,i,r,o,a,s){return void 0===a&&(a=.5),void 0===s&&(s=20),$h(this,void 0,void 0,(function(){var u,l,h,d,c,p,f,m,g,y,x,b;return Fh(this,(function(w){switch(w.label){case 0:return[4,Tc([e,t,n,i])];case 1:for(u=w.sent(),l=u[0],h=u[1],d=u[2],c=u[3],p=[],f=function(e,t,n){for(var i=n.shape,r=i[0],o=i[1],a=i[2],s=new zc(r*o*a,(function(e){return e.score})),u=0;u<r;++u)for(var l=0;l<o;++l)for(var h=0;h<a;++h){var d=n.get(u,l,h);d<e||Ac(h,d,u,l,t,n)&&s.enqueue({score:d,part:{heatmapY:u,heatmapX:l,id:h}})}return s}(a,1,l),m=s*s;p.length<o&&!f.empty();)g=f.dequeue(),y=Ec(g.part,r,h),$c(p,m,y,g.part.id)||(x=Wc(g,l,h,r,d,c),b=Vc(p,m,x),p.push({keypoints:x,score:b}));return[2,p]}}))}))}function Gc(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];switch(t.length){case 0:e="fn main() ";break;case 1:e="fn main(".concat(t[0]," : i32)");break;default:throw Error("Unreachable")}return e}var jc=function(){function e(e){this.variableNames=["A","B"],this.size=!0,this.workgroupSize=[32,1,1],this.outputShape=[e[0],1],this.dispatchLayout=K(this.outputShape),this.dispatch=V(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="getpointsConfidenceOp"}return e.prototype.getUserCode=function(){return"\n        ".concat(Gc("index")," {\n          if (index < uniforms.size) {\n            let y = B[index * 2];\n            let x = B[index * 2 + 1];\n            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;\n            result[index] = A[outIndex];\n          }\n        }\n        ")},e}();function Kc(e,t){if((0,u.Hs)()instanceof ee)return function(e,t){var n=(0,u.Hs)(),i=new jc(t.shape),r=n.runWebGPUProgram(i,[e,t],"float32");return(0,u.Hi9)().makeTensorFromTensorInfo(r)}(e,t);throw new Error("getPointsConfidenceWebGPU is not supported in this backend!")}var Xc=function(){function e(e){if(this.variableNames=["A","B"],this.size=!0,this.supportedLastDimension=2,2!==e.length||e[1]!==this.supportedLastDimension)throw new Error("GetOffsetVectorsProgram only supports shape of [x, ".concat(this.supportedLastDimension,"], but current shape is ").concat(e));this.workgroupSize=[32,1,1],this.outputShape=e;var t=[e[0],1];this.dispatchLayout=K(t),this.dispatch=V(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="GetOffsetVectors"}return e.prototype.getUserCode=function(){return"\n    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {\n      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;\n      let outIndexX = outIndexY + uniforms.bShape.z;\n      let outY = i32(B[outIndexY]);\n      let outX = i32(B[outIndexX]);\n      return vec2<i32>(outY, outX);\n    }\n\n    ".concat(Gc("index")," {\n      if (index < uniforms.size) {\n        let indexY = index * ").concat(this.supportedLastDimension,";\n        let indexX = indexY + 1;\n        let heatmapY = A[indexY];\n        let heatmapX = A[indexX];\n        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);\n        result[indexY] = f32(out[0]);\n        result[indexX] = f32(out[1]);\n      }\n    }\n    ")},e}();function qc(e,t){if((0,u.Hs)()instanceof ee)return function(e,t){var n=(0,u.Hs)(),i=new Xc(e.shape),r=n.runWebGPUProgram(i,[e,t],"float32");return(0,u.Hi9)().makeTensorFromTensorInfo(r)}(e,t);throw new Error("getOffsetVectorsGPU is not supported in this backend!")}function Yc(e){var t=e.shape,n=t[0],i=t[1],r=t[2];return(0,u.DZQ)((function(){var t,o,a=(0,u.tQQ)(e,[n*i,r]),s=(0,u.FLi)(a,0),l=(0,u.UG6)((0,u.y4m)(s,(0,u.d_2)(i,"int32")),1),h=(0,u.UG6)((t=s,o=i,(0,u.DZQ)((function(){var e=(0,u.y4m)(t,(0,u.d_2)(o,"int32"));return(0,u.jbE)(t,(0,u.lKK)(e,(0,u.d_2)(o,"int32")))}))),1);return(0,u.xWs)([l,h],1)}))}function Zc(e,t,n){return(0,u.DZQ)((function(){var i=function(e,t){for(var n=[],i=0;i<Dh.length;i++){var r=e.get(i,0).valueOf(),o=e.get(i,1).valueOf(),a=Qc(r,o,i,t),s=a.x,l=a.y;n.push(l),n.push(s)}return(0,u.KtR)(n,[Dh.length,2])}(e,n);return(0,u.WQq)((0,u.wgE)((0,u.lKK)(e.toTensor(),(0,u.d_2)(t,"int32")),"float32"),i)}))}function Qc(e,t,n,i){return{y:i.get(e,t,n),x:i.get(e,t,n+Dh.length)}}function Jc(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o,a,s,u,l,h,d,c;return Fh(this,(function(p){switch(p.label){case 0:return i=0,r=Yc(e),[4,Promise.all([e.buffer(),t.buffer(),r.buffer()])];case 1:return o=p.sent(),a=o[0],s=o[1],u=o[2],[4,(l=Zc(u,n,s)).buffer()];case 2:return h=p.sent(),d=Array.from(function(e,t){for(var n=t.shape[0],i=new Float32Array(n),r=0;r<n;r++){var o=t.get(r,0),a=t.get(r,1);i[r]=e.get(o,a,r)}return i}(a,u)),c=d.map((function(e,t){return i+=e,{y:h.get(t,0),x:h.get(t,1),score:e,name:Dh[t]}})),r.dispose(),l.dispose(),[2,{keypoints:c,score:i/c.length}]}}))}))}function ep(e,t,n){return $h(this,void 0,void 0,(function(){var i,r,o;return Fh(this,(function(a){return i=Yc(e),r=function(e,t,n){return(0,u.DZQ)((function(){var i=qc(e,n);return(0,u.WQq)((0,u.wgE)((0,u.lKK)(e,(0,u.d_2)(t,"int32")),"float32"),i)}))}(i,n,t),o=Kc(e,i),[2,[r,o]]}))}))}function tp(e,t){return(e-1)%t==0}var np="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",ip="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";function rp(e,t){return function(e,t){return(e-1)%t==0}(e,t)?e:Math.floor(e/t)*t+1}var op=function(){function e(e,t){this.posenetModel=e;var n=this.posenetModel.inputs[0].shape;u.ZSL.assert(-1===n[1]&&-1===n[2],(function(){return"Input shape [".concat(n[1],", ").concat(n[2],"] ")+"must both be equal to or -1"}));var i,r,o=(i=t.inputResolution,r=t.outputStride,{height:rp(i.height,r),width:rp(i.width,r)});!function(e){u.ZSL.assert(vc.indexOf(e)>=0,(function(){return"outputStride of ".concat(e," is invalid. ")+"It must be either 8 or 16."}))}(t.outputStride),function(e,t){u.ZSL.assert(tp(e.height,t),(function(){return"height of ".concat(e.height," is invalid for output stride ")+"".concat(t,".")})),u.ZSL.assert(tp(e.width,t),(function(){return"width of ".concat(e.width," is invalid for output stride ")+"".concat(t,".")}))}(o,t.outputStride),this.inputResolution=o,this.outputStride=t.outputStride,this.architecture=t.architecture}return e.prototype.estimatePoses=function(e,t){return void 0===t&&(t=Cc),$h(this,void 0,void 0,(function(){return Fh(this,(function(n){return[2,this.estimatePosesGPU(e,t,!1)]}))}))},e.prototype.estimatePosesGPU=function(e,t,n){return void 0===t&&(t=Cc),void 0===n&&(n=!1),$h(this,void 0,void 0,(function(){var i,r,o,a,s,l,h,d,c,p,f,m,g,y,x,b,w,v;return Fh(this,(function(S){switch(S.label){case 0:return i=function(e){var t=e;if(null==t.maxPoses&&(t.maxPoses=1),t.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(t.maxPoses,". Should be > 0."));if(t.maxPoses>1){if((t=Eh(Eh({},Ic),t)).scoreThreshold<0||t.scoreThreshold>1)throw new Error("Invalid scoreThreshold ".concat(t.scoreThreshold,". ")+"Should be in range [0.0, 1.0]");if(t.nmsRadius<=0)throw new Error("Invalid nmsRadius ".concat(t.nmsRadius,"."))}return t}(t),null==e?[2,n?[[],[]]:[]]:(this.maxPoses=i.maxPoses,r=ld(e,{outputTensorSize:this.inputResolution,keepAspectRatio:!0,borderMode:"replicate"}),o=r.imageTensor,a=r.padding,s="ResNet50"===this.architecture?(0,u.WQq)(o,Rc):ud(o,[-1,1]),l=this.posenetModel.predict(s),"ResNet50"===this.architecture?(h=(0,u.r2V)(l[2],[0]),d=(0,u.r2V)(l[3],[0]),c=(0,u.r2V)(l[0],[0]),p=(0,u.r2V)(l[1],[0])):(h=(0,u.r2V)(l[0],[0]),d=(0,u.r2V)(l[1],[0]),c=(0,u.r2V)(l[2],[0]),p=(0,u.r2V)(l[3],[0])),f=(0,u.ry7)(d),1!==this.maxPoses?[3,5]:n?[4,ep(f,h,this.outputStride)]:[3,2]);case 1:return g=S.sent(),x=g[0],y=g[1],m=[x,y],[3,4];case 2:return[4,Jc(f,h,this.outputStride)];case 3:x=S.sent(),m=[x],S.label=4;case 4:return[3,7];case 5:if(n)throw new Error("GPU renderer only supports single pose!");return[4,Hc(f,h,c,p,this.outputStride,this.maxPoses,i.scoreThreshold,i.nmsRadius)];case 6:m=S.sent(),S.label=7;case 7:if(n){if(!0===i.flipHorizontal)throw new Error("flipHorizontal is not supported!");b=this.getCanvasInfo(Qh(e),this.inputResolution,a)}else v=Qh(e),w=function(e,t,n,i){var r=t.height,o=t.width,a=r/(n.height*(1-i.top-i.bottom)),s=o/(n.width*(1-i.left-i.right)),u=-i.top*n.height,l=-i.left*n.width;if(1===s&&1===a&&0===u&&0===l)return e;for(var h=0,d=e;h<d.length;h++)for(var c=0,p=d[h].keypoints;c<p.length;c++){var f=p[c];f.x=(f.x+l)*s,f.y=(f.y+u)*a}return e}(m,v,this.inputResolution,a),i.flipHorizontal&&(w=function(e,t){for(var n=0,i=e;n<i.length;n++)for(var r=0,o=i[n].keypoints;r<o.length;r++){var a=o[r];a.x=t.width-1-a.x}return e}(w,v));return o.dispose(),s.dispose(),(0,u.ASo)(l),h.dispose(),d.dispose(),c.dispose(),p.dispose(),f.dispose(),[2,n?[m,b]:w]}}))}))},e.prototype.getCanvasInfo=function(e,t,n){var i=e.height,r=e.width,o=i/(t.height*(1-n.top-n.bottom)),a=r/(t.width*(1-n.left-n.right)),s=-n.top*t.height;return[-n.left*t.width,s,a,o,e.width,e.height]},e.prototype.dispose=function(){this.posenetModel.dispose()},e.prototype.reset=function(){},e}();function ap(e){return void 0===e&&(e=xc),$h(this,void 0,void 0,(function(){var t,n,i,r,o;return Fh(this,(function(a){switch(a.label){case 0:return"ResNet50"!==(t=function(e){var t=e||xc;if(null==t.architecture&&(t.architecture="MobileNetV1"),bc.indexOf(t.architecture)<0)throw new Error("Invalid architecture ".concat(t.architecture,". ")+"Should be one of ".concat(bc));if(null==t.inputResolution&&(t.inputResolution={height:257,width:257}),null==t.outputStride&&(t.outputStride=16),wc[t.architecture].indexOf(t.outputStride)<0)throw new Error("Invalid outputStride ".concat(t.outputStride,". ")+"Should be one of ".concat(wc[t.architecture]," ")+"for architecture ".concat(t.architecture,"."));if(null==t.multiplier&&(t.multiplier=1),Sc[t.architecture].indexOf(t.multiplier)<0)throw new Error("Invalid multiplier ".concat(t.multiplier,". ")+"Should be one of ".concat(Sc[t.architecture]," ")+"for architecture ".concat(t.architecture,"."));if(null==t.quantBytes&&(t.quantBytes=4),kc.indexOf(t.quantBytes)<0)throw new Error("Invalid quantBytes ".concat(t.quantBytes,". ")+"Should be one of ".concat(kc," ")+"for architecture ".concat(t.architecture,"."));if("MobileNetV1"===t.architecture&&32===t.outputStride&&1!==t.multiplier)throw new Error("When using an output stride of 32, you must select 1 as the multiplier.");return t}(e)).architecture?[3,2]:(s=t.outputStride,u=t.quantBytes,h="model-stride".concat(s,".json"),n=4===u?ip+"float/"+h:ip+"quant".concat(u,"/")+h,[4,(0,l.ox)(t.modelUrl||n)]);case 1:return i=a.sent(),[2,new op(i,t)];case 2:return r=function(e,t,n){var i={1:"100",.75:"075",.5:"050"},r="model-stride".concat(e,".json");return 4===n?np+"float/".concat(i[t],"/")+r:np+"quant".concat(n,"/").concat(i[t],"/")+r}(t.outputStride,t.multiplier,t.quantBytes),[4,(0,l.ox)(t.modelUrl||r)];case 3:return o=a.sent(),[2,new op(o,t)]}var s,u,h}))}))}function sp(e,t){return $h(this,void 0,void 0,(function(){var n,i;return Fh(this,(function(r){switch(e){case tc.PoseNet:return[2,ap(t)];case tc.BlazePose:if(i=void 0,null!=(n=t)){if("tfjs"===n.runtime)return[2,Jd(t)];if("mediapipe"===n.runtime)return[2,Zh(t)];i=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(i));case tc.MoveNet:return[2,yc(t)];default:throw new Error("".concat(e," is not a supported model name."))}}))}))}n(3223);var up=n(4923),lp=n(1354);const hp=(e,t,n)=>Math.max(Math.min(e,n),t),dp=(e,t,n)=>(hp(e,t,n)-t)/(n-t),cp={Face:{eye:{l:1,r:1},mouth:{x:0,y:0,shape:{A:0,E:0,I:0,O:0,U:0}},head:{x:0,y:0,z:0,width:.3,height:.6,position:{x:.5,y:.5,z:0}},brow:0,pupil:{x:0,y:0}},Pose:{RightUpperArm:{x:0,y:0,z:-1.25},LeftUpperArm:{x:0,y:0,z:1.25},RightLowerArm:{x:0,y:0,z:0},LeftLowerArm:{x:0,y:0,z:0},LeftUpperLeg:{x:0,y:0,z:0},RightUpperLeg:{x:0,y:0,z:0},RightLowerLeg:{x:0,y:0,z:0},LeftLowerLeg:{x:0,y:0,z:0},LeftHand:{x:0,y:0,z:0},RightHand:{x:0,y:0,z:0},Spine:{x:0,y:0,z:0},Hips:{position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}}},RightHand:{RightWrist:{x:-.13,y:-.07,z:-1.04},RightRingProximal:{x:0,y:0,z:-.13},RightRingIntermediate:{x:0,y:0,z:-.4},RightRingDistal:{x:0,y:0,z:-.04},RightIndexProximal:{x:0,y:0,z:-.24},RightIndexIntermediate:{x:0,y:0,z:-.25},RightIndexDistal:{x:0,y:0,z:-.06},RightMiddleProximal:{x:0,y:0,z:-.09},RightMiddleIntermediate:{x:0,y:0,z:-.44},RightMiddleDistal:{x:0,y:0,z:-.06},RightThumbProximal:{x:-.23,y:-.33,z:-.12},RightThumbIntermediate:{x:-.2,y:-.199,z:-.0139},RightThumbDistal:{x:-.2,y:.002,z:.15},RightLittleProximal:{x:0,y:0,z:-.09},RightLittleIntermediate:{x:0,y:0,z:-.225},RightLittleDistal:{x:0,y:0,z:-.1}},LeftHand:{LeftWrist:{x:-.13,y:-.07,z:-1.04},LeftRingProximal:{x:0,y:0,z:.13},LeftRingIntermediate:{x:0,y:0,z:.4},LeftRingDistal:{x:0,y:0,z:.049},LeftIndexProximal:{x:0,y:0,z:.24},LeftIndexIntermediate:{x:0,y:0,z:.25},LeftIndexDistal:{x:0,y:0,z:.06},LeftMiddleProximal:{x:0,y:0,z:.09},LeftMiddleIntermediate:{x:0,y:0,z:.44},LeftMiddleDistal:{x:0,y:0,z:.066},LeftThumbProximal:{x:-.23,y:.33,z:.12},LeftThumbIntermediate:{x:-.2,y:.25,z:.05},LeftThumbDistal:{x:-.2,y:.17,z:-.06},LeftLittleProximal:{x:0,y:0,z:.17},LeftLittleIntermediate:{x:0,y:0,z:.4},LeftLittleDistal:{x:0,y:0,z:.1}}},pp="Right",fp="Left",mp=Math.PI,gp=2*Math.PI;class yp{constructor(e,t,n){var i,r,o,a,s,u;return Array.isArray(e)?(this.x=null!==(i=e[0])&&void 0!==i?i:0,this.y=null!==(r=e[1])&&void 0!==r?r:0,void(this.z=null!==(o=e[2])&&void 0!==o?o:0)):e&&"object"===typeof e?(this.x=null!==(a=e.x)&&void 0!==a?a:0,this.y=null!==(s=e.y)&&void 0!==s?s:0,void(this.z=null!==(u=e.z)&&void 0!==u?u:0)):(this.x=null!==e&&void 0!==e?e:0,this.y=null!==t&&void 0!==t?t:0,void(this.z=null!==n&&void 0!==n?n:0))}negative(){return new yp(-this.x,-this.y,-this.z)}add(e){return e instanceof yp?new yp(this.x+e.x,this.y+e.y,this.z+e.z):new yp(this.x+e,this.y+e,this.z+e)}subtract(e){return e instanceof yp?new yp(this.x-e.x,this.y-e.y,this.z-e.z):new yp(this.x-e,this.y-e,this.z-e)}multiply(e){return e instanceof yp?new yp(this.x*e.x,this.y*e.y,this.z*e.z):new yp(this.x*e,this.y*e,this.z*e)}divide(e){return e instanceof yp?new yp(this.x/e.x,this.y/e.y,this.z/e.z):new yp(this.x/e,this.y/e,this.z/e)}equals(e){return this.x==e.x&&this.y==e.y&&this.z==e.z}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){return new yp(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}length(){return Math.sqrt(this.dot(this))}distance(e,t=3){return 2===t?Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2)):Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2)+Math.pow(this.z-e.z,2))}lerp(e,t){return e.subtract(this).multiply(t).add(this)}unit(){return this.divide(this.length())}min(){return Math.min(Math.min(this.x,this.y),this.z)}max(){return Math.max(Math.max(this.x,this.y),this.z)}toSphericalCoords(e={x:"x",y:"y",z:"z"}){return{theta:Math.atan2(this[e.y],this[e.x]),phi:Math.acos(this[e.z]/this.length())}}angleTo(e){return Math.acos(this.dot(e)/(this.length()*e.length()))}toArray(e){return[this.x,this.y,this.z].slice(0,e||3)}clone(){return new yp(this.x,this.y,this.z)}init(e,t,n){return this.x=e,this.y=t,this.z=n,this}static negative(e,t=new yp){return t.x=-e.x,t.y=-e.y,t.z=-e.z,t}static add(e,t,n=new yp){return t instanceof yp?(n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z):(n.x=e.x+t,n.y=e.y+t,n.z=e.z+t),n}static subtract(e,t,n=new yp){return t instanceof yp?(n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z):(n.x=e.x-t,n.y=e.y-t,n.z=e.z-t),n}static multiply(e,t,n=new yp){return t instanceof yp?(n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z):(n.x=e.x*t,n.y=e.y*t,n.z=e.z*t),n}static divide(e,t,n=new yp){return t instanceof yp?(n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z):(n.x=e.x/t,n.y=e.y/t,n.z=e.z/t),n}static cross(e,t,n=new yp){return n.x=e.y*t.z-e.z*t.y,n.y=e.z*t.x-e.x*t.z,n.z=e.x*t.y-e.y*t.x,n}static unit(e,t){const n=e.length();return t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t}static fromAngles(e,t){return new yp(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t))}static randomDirection(){return yp.fromAngles(Math.random()*gp,Math.asin(2*Math.random()-1))}static min(e,t){return new yp(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z))}static max(e,t){return new yp(Math.max(e.x,t.x),Math.max(e.y,t.y),Math.max(e.z,t.z))}static lerp(e,t,n){return t instanceof yp?t.subtract(e).multiply(n).add(e):(t-e)*n+e}static fromArray(e){return Array.isArray(e)?new yp(e[0],e[1],e[2]):new yp(e.x,e.y,e.z)}static angleBetween(e,t){return e.angleTo(t)}static distance(e,t,n){return 2===n?Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)):Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}static toDegrees(e){return e*(180/mp)}static normalizeAngle(e){let t=e%gp;return t=t>mp?t-gp:t<-mp?gp+t:t,t/mp}static normalizeRadians(e){return e>=mp/2&&(e-=gp),e<=-mp/2&&(e+=gp,e=mp-e),e/mp}static find2DAngle(e,t,n,i){const r=i-t,o=n-e,a=Math.atan2(r,o);return a}static findRotation(e,t,n=!0){return n?new yp(yp.normalizeRadians(yp.find2DAngle(e.z,e.x,t.z,t.x)),yp.normalizeRadians(yp.find2DAngle(e.z,e.y,t.z,t.y)),yp.normalizeRadians(yp.find2DAngle(e.x,e.y,t.x,t.y))):new yp(yp.find2DAngle(e.z,e.x,t.z,t.x),yp.find2DAngle(e.z,e.y,t.z,t.y),yp.find2DAngle(e.x,e.y,t.x,t.y))}static rollPitchYaw(e,t,n){if(!n)return new yp(yp.normalizeAngle(yp.find2DAngle(e.z,e.y,t.z,t.y)),yp.normalizeAngle(yp.find2DAngle(e.z,e.x,t.z,t.x)),yp.normalizeAngle(yp.find2DAngle(e.x,e.y,t.x,t.y)));const i=t.subtract(e),r=n.subtract(e),o=i.cross(r),a=o.unit(),s=i.unit(),u=a.cross(s),l=Math.asin(a.x)||0,h=Math.atan2(-a.y,a.z)||0,d=Math.atan2(-u.x,s.x)||0;return new yp(yp.normalizeAngle(h),yp.normalizeAngle(l),yp.normalizeAngle(d))}static angleBetween3DCoords(e,t,n){e instanceof yp||(e=new yp(e),t=new yp(t),n=new yp(n));const i=e.subtract(t),r=n.subtract(t),o=i.unit(),a=r.unit(),s=o.dot(a),u=Math.acos(s);return yp.normalizeRadians(u)}static getRelativeSphericalCoords(e,t,n,i){e instanceof yp||(e=new yp(e),t=new yp(t),n=new yp(n));const r=t.subtract(e),o=n.subtract(t),a=r.unit(),s=o.unit(),{theta:u,phi:l}=a.toSphericalCoords(i),{theta:h,phi:d}=s.toSphericalCoords(i),c=u-h,p=l-d;return{theta:yp.normalizeAngle(c),phi:yp.normalizeAngle(p)}}static getSphericalCoords(e,t,n={x:"x",y:"y",z:"z"}){e instanceof yp||(e=new yp(e),t=new yp(t));const i=t.subtract(e),r=i.unit(),{theta:o,phi:a}=r.toSphericalCoords(n);return{theta:yp.normalizeAngle(-o),phi:yp.normalizeAngle(mp/2-a)}}}const xp=e=>{const t={r:yp.findRotation(e[11],e[13]),l:yp.findRotation(e[12],e[14])};t.r.y=yp.angleBetween3DCoords(e[12],e[11],e[13]),t.l.y=yp.angleBetween3DCoords(e[11],e[12],e[14]);const n={r:yp.findRotation(e[13],e[15]),l:yp.findRotation(e[14],e[16])};n.r.y=yp.angleBetween3DCoords(e[11],e[13],e[15]),n.l.y=yp.angleBetween3DCoords(e[12],e[14],e[16]),n.r.z=hp(n.r.z,-2.14,0),n.l.z=hp(n.l.z,-2.14,0);const i={r:yp.findRotation(yp.fromArray(e[15]),yp.lerp(yp.fromArray(e[17]),yp.fromArray(e[19]),.5)),l:yp.findRotation(yp.fromArray(e[16]),yp.lerp(yp.fromArray(e[18]),yp.fromArray(e[20]),.5))},r=bp(t.r,n.r,i.r,pp),o=bp(t.l,n.l,i.l,fp);return{UpperArm:{r:r.UpperArm,l:o.UpperArm},LowerArm:{r:r.LowerArm,l:o.LowerArm},Hand:{r:r.Hand,l:o.Hand},Unscaled:{UpperArm:t,LowerArm:n,Hand:i}}},bp=(e,t,n,i=pp)=>{const r=i===pp?1:-1;return e.z*=-2.3*r,e.y*=mp*r,e.y-=Math.max(t.x),e.y-=-r*Math.max(t.z,0),e.x-=.3*r,t.z*=-2.14*r,t.y*=2.14*r,t.x*=2.14*r,e.x=hp(e.x,-.5,mp),t.x=hp(t.x,-.3,.3),n.y=hp(2*n.z,-.6,.6),n.z=-2.3*n.z*r,{UpperArm:e,LowerArm:t,Hand:n}},wp=(e,t)=>{const n=yp.fromArray(t[23]),i=yp.fromArray(t[24]),r=yp.fromArray(t[11]),o=yp.fromArray(t[12]),a=n.lerp(i,1),s=r.lerp(o,1),u=a.distance(s),l={position:{x:hp(a.x-.4,-1,1),y:0,z:hp(u-1,-2,0)}};l.worldPosition={x:l.position.x,y:0,z:l.position.z*Math.pow(-2*l.position.z,2)},l.worldPosition.x*=l.worldPosition.z,l.rotation=yp.rollPitchYaw(e[23],e[24]),l.rotation.y>.5&&(l.rotation.y-=2),l.rotation.y+=.5,l.rotation.z>0&&(l.rotation.z=1-l.rotation.z),l.rotation.z<0&&(l.rotation.z=-1-l.rotation.z);const h=dp(Math.abs(l.rotation.y),.2,.4);l.rotation.z*=1-h,l.rotation.x=0;const d=yp.rollPitchYaw(e[11],e[12]);d.y>.5&&(d.y-=2),d.y+=.5,d.z>0&&(d.z=1-d.z),d.z<0&&(d.z=-1-d.z);const c=dp(Math.abs(d.y),.2,.4);return d.z*=1-c,d.x=0,vp(l,d)},vp=(e,t)=>(e.rotation&&(e.rotation.x*=Math.PI,e.rotation.y*=Math.PI,e.rotation.z*=Math.PI),t.x*=mp,t.y*=mp,t.z*=mp,{Hips:e,Spine:t});class Sp{constructor(e,t,n,i){var r,o,a,s;if(e&&"object"===typeof e)return this.x=null!==(r=e.x)&&void 0!==r?r:0,this.y=null!==(o=e.y)&&void 0!==o?o:0,this.z=null!==(a=e.z)&&void 0!==a?a:0,void(this.rotationOrder=null!==(s=e.rotationOrder)&&void 0!==s?s:"XYZ");this.x=null!==e&&void 0!==e?e:0,this.y=null!==t&&void 0!==t?t:0,this.z=null!==n&&void 0!==n?n:0,this.rotationOrder=null!==i&&void 0!==i?i:"XYZ"}multiply(e){return new Sp(this.x*e,this.y*e,this.z*e,this.rotationOrder)}}const kp={upperLeg:{z:.1}},Cp=e=>{const t=yp.getSphericalCoords(e[23],e[25],{x:"y",y:"z",z:"x"}),n=yp.getSphericalCoords(e[24],e[26],{x:"y",y:"z",z:"x"}),i=yp.getRelativeSphericalCoords(e[23],e[25],e[27],{x:"y",y:"z",z:"x"}),r=yp.getRelativeSphericalCoords(e[24],e[26],e[28],{x:"y",y:"z",z:"x"}),o=yp.findRotation(e[23],e[24]),a={r:new yp({x:t.theta,y:i.phi,z:t.phi-o.z}),l:new yp({x:n.theta,y:r.phi,z:n.phi-o.z})},s={r:new yp({x:-Math.abs(i.theta),y:0,z:0}),l:new yp({x:-Math.abs(r.theta),y:0,z:0})},u=Ip(a.r,s.r,pp),l=Ip(a.l,s.l,fp);return{UpperLeg:{r:u.UpperLeg,l:l.UpperLeg},LowerLeg:{r:u.LowerLeg,l:l.LowerLeg},Unscaled:{UpperLeg:a,LowerLeg:s}}},Ip=(e,t,n=pp)=>{const i=n===pp?1:-1,r=new Sp({x:hp(e.x,0,.5)*mp,y:hp(e.y,-.25,.25)*mp,z:hp(e.z,-.5,.5)*mp+i*kp.upperLeg.z,rotationOrder:"XYZ"}),o=new Sp({x:t.x*mp,y:t.y*mp,z:t.z*mp});return{UpperLeg:r,LowerLeg:o}};class Rp{static solve(e,t,{runtime:n="mediapipe",video:i=null,imageSize:r=null,enableLegs:o=!0}={}){var a,s,u,l;if(!e&&!t)return void console.error("Need both World Pose and Pose Landmarks");if(i){const e="string"===typeof i?document.querySelector(i):i;r={width:e.videoWidth,height:e.videoHeight}}if("tfjs"===n&&r){for(const t of e)t.visibility=t.score;for(const e of t)e.x/=r.width,e.y/=r.height,e.z=0,e.visibility=e.score}const h=xp(e),d=wp(e,t),c=o?Cp(e):null,p=e[15].y>.1||(null!==(a=e[15].visibility)&&void 0!==a?a:0)<.23||.995<t[15].y,f=e[16].y>.1||(null!==(s=e[16].visibility)&&void 0!==s?s:0)<.23||.995<t[16].y,m=e[23].y>.1||(null!==(u=e[23].visibility)&&void 0!==u?u:0)<.63||d.Hips.position.z>-.4,g=e[24].y>.1||(null!==(l=e[24].visibility)&&void 0!==l?l:0)<.63||d.Hips.position.z>-.4;return h.UpperArm.l=h.UpperArm.l.multiply(f?0:1),h.UpperArm.l.z=f?cp.Pose.LeftUpperArm.z:h.UpperArm.l.z,h.UpperArm.r=h.UpperArm.r.multiply(p?0:1),h.UpperArm.r.z=p?cp.Pose.RightUpperArm.z:h.UpperArm.r.z,h.LowerArm.l=h.LowerArm.l.multiply(f?0:1),h.LowerArm.r=h.LowerArm.r.multiply(p?0:1),h.Hand.l=h.Hand.l.multiply(f?0:1),h.Hand.r=h.Hand.r.multiply(p?0:1),c&&(c.UpperLeg.l=c.UpperLeg.l.multiply(g?0:1),c.UpperLeg.r=c.UpperLeg.r.multiply(m?0:1),c.LowerLeg.l=c.LowerLeg.l.multiply(g?0:1),c.LowerLeg.r=c.LowerLeg.r.multiply(m?0:1)),{RightUpperArm:h.UpperArm.r,RightLowerArm:h.LowerArm.r,LeftUpperArm:h.UpperArm.l,LeftLowerArm:h.LowerArm.l,RightHand:h.Hand.r,LeftHand:h.Hand.l,RightUpperLeg:c?c.UpperLeg.r:cp.Pose.RightUpperLeg,RightLowerLeg:c?c.LowerLeg.r:cp.Pose.RightLowerLeg,LeftUpperLeg:c?c.UpperLeg.l:cp.Pose.LeftUpperLeg,LeftLowerLeg:c?c.LowerLeg.l:cp.Pose.LeftLowerLeg,Hips:d.Hips,Spine:d.Spine}}}Rp.calcArms=xp,Rp.calcHips=wp,Rp.calcLegs=Cp;const Pp=e=>{const t=new yp(e[21]),n=new yp(e[251]),i=new yp(e[397]),r=new yp(e[172]),o=i.lerp(r,.5);return{vector:[t,n,o],points:[t,n,i,r]}},zp=e=>{const t=Pp(e).vector,n=yp.rollPitchYaw(t[0],t[1],t[2]),i=t[0].lerp(t[1],.5),r=t[0].distance(t[1]),o=i.distance(t[2]);return n.x*=-1,n.z*=-1,{y:n.y*mp,x:n.x*mp,z:n.z*mp,width:r,height:o,position:i.lerp(t[2],.5),normalized:{y:n.y,x:n.x,z:n.z},degrees:{y:180*n.y,x:180*n.x,z:180*n.z}}},Ap={eye:{[fp]:[130,133,160,159,158,144,145,153],[pp]:[263,362,387,386,385,373,374,380]},brow:{[fp]:[35,244,63,105,66,229,230,231],[pp]:[265,464,293,334,296,449,450,451]},pupil:{[fp]:[468,469,470,471,472],[pp]:[473,474,475,476,477]}},Tp=(e,t=fp,{high:n=.85,low:i=.55}={})=>{const r=Ap.eye[t],o=Lp(e[r[0]],e[r[1]],e[r[2]],e[r[3]],e[r[4]],e[r[5]],e[r[6]],e[r[7]]),a=.285,s=hp(o/a,0,2),u=dp(s,i,n);return{norm:u,raw:s}},Lp=(e,t,n,i,r,o,a,s)=>{e=new yp(e),t=new yp(t),n=new yp(n),i=new yp(i),r=new yp(r),o=new yp(o),a=new yp(a),s=new yp(s);const u=e.distance(t,2),l=n.distance(o,2),h=i.distance(a,2),d=r.distance(s,2),c=(l+h+d)/3,p=c/u;return p},Ep=(e,t=fp)=>{const n=new yp(e[Ap.eye[t][0]]),i=new yp(e[Ap.eye[t][1]]),r=n.distance(i,2),o=n.lerp(i,.5),a=new yp(e[Ap.pupil[t][0]]),s=o.x-a.x,u=o.y-.075*r-a.y;let l=s/(r/2),h=u/(r/4);return l*=4,h*=4,{x:l,y:h}},$p=(e,t,{enableWink:n=!0,maxRot:i=.5}={})=>{e.r=hp(e.r,0,1),e.l=hp(e.l,0,1);const r=Math.abs(e.l-e.r),o=n?.8:1.2,a=e.l<.3&&e.r<.3,s=e.l>.6&&e.r>.6;return t>i?{l:e.r,r:e.r}:t<-i?{l:e.l,r:e.l}:{l:r>=o&&!a&&!s?e.l:e.r>e.l?yp.lerp(e.r,e.l,.95):yp.lerp(e.r,e.l,.05),r:r>=o&&!a&&!s?e.r:e.r>e.l?yp.lerp(e.r,e.l,.95):yp.lerp(e.r,e.l,.05)}},Fp=(e,{high:t=.85,low:n=.55}={})=>{if(478!==e.length)return{l:1,r:1};const i=Tp(e,fp,{high:t,low:n}),r=Tp(e,pp,{high:t,low:n});return{l:i.norm||0,r:r.norm||0}},Np=e=>{if(478!==e.length)return{x:0,y:0};{const t=Ep(e,fp),n=Ep(e,pp);return{x:.5*(t.x+n.x)||0,y:.5*(t.y+n.y)||0}}},Dp=(e,t=fp)=>{const n=Ap.brow[t],i=Lp(e[n[0]],e[n[1]],e[n[2]],e[n[3]],e[n[4]],e[n[5]],e[n[6]],e[n[7]]),r=1.15,o=.125,a=.07,s=i/r-1,u=(hp(s,a,o)-a)/(o-a);return u},_p=e=>{if(478!==e.length)return 0;{const t=Dp(e,fp),n=Dp(e,pp);return(t+n)/2||0}},Mp=e=>{const t=new yp(e[133]),n=new yp(e[362]),i=new yp(e[130]),r=new yp(e[263]),o=t.distance(n),a=i.distance(r),s=new yp(e[13]),u=new yp(e[14]),l=new yp(e[61]),h=new yp(e[291]),d=s.distance(u),c=l.distance(h);let p=d/o,f=c/a;p=dp(p,.15,.7),f=dp(f,.45,.9),f=2*(f-.3);const m=f,g=dp(d/o,.17,.5),y=hp(2*dp(m,0,1)*dp(g,.2,.7),0,1),x=.4*g+g*(1-y)*.6,b=g*dp(1-y,0,.3)*.1,w=dp(b,.2,1)*(1-y)*.3,v=(1-y)*dp(g,.3,1)*.4;return{x:f||0,y:p||0,shape:{A:x||0,E:w||0,I:y||0,O:v||0,U:b||0}}};class Op{static solve(e,{runtime:t="tfjs",video:n=null,imageSize:i=null,smoothBlink:r=!1,blinkSettings:o=[]}={}){if(!e)return void console.error("Need Face Landmarks");if(n){const e="string"===typeof n?document.querySelector(n):n;i={width:e.videoWidth,height:e.videoHeight}}if("mediapipe"===t&&i)for(const d of e)d.x*=i.width,d.y*=i.height,d.z*=i.width;const a=zp(e),s=Mp(e);o=o.length>0?o:"tfjs"===t?[.55,.85]:[.35,.5];let u=Fp(e,{high:o[1],low:o[0]});r&&(u=$p(u,a.y));const l=Np(e),h=_p(e);return{head:a,eye:u,brow:h,pupil:l,mouth:s}}}Op.stabilizeBlink=$p;var Bp={name:"PoseRecognitionComponent",setup(){const e=(0,a.KR)(null),t=(0,a.KR)(null),n=async()=>{const t=await navigator.mediaDevices.getUserMedia({video:!0});return e.value.srcObject=t,e.value.width=320,e.value.height=280,new Promise((t=>{e.value.onloadedmetadata=()=>{t(e.value)}}))},r=async()=>{await u.jh6("webgl"),t.value=(0,a.IG)(await sp(tc.BlazePose,{runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/pose"}))},o=async()=>{try{const n=await t.value.estimatePoses(e.value,{maxPoses:1,flipHorizontal:!1});for(let e=0;e<n.length;e++)if(n.length>e){const t=n[e].keypoints,i=n[e].keypoints3D,r=Rp.solve(i,t,{runtime:"mediapipe",video:null});l({scaledMesh:t.reduce(((e,t)=>(e.push([t.x,t.y,t.z]),e)),[]),Mesh3D:i.reduce(((e,t)=>(e.push([t.x,t.y,t.z]),e)),[]),poseResult:r},e)}else l({scaledMesh:[],Mesh3D:[]},e)}catch(n){console.log("识别错误:",n)}},s=async()=>{await o(),setInterval(o,100)},l=(e,t)=>{p.render(h,c),w(e,t)},h=new up.Z58,d=[];let c=null,p=null;const f={rightArm:"mixamorigRightForeArm",leftArm:"mixamorigLeftForeArm",rightUpArm:"mixamorigRightArm",leftUpArm:"mixamorigLeftArm",rightUpLeg:"mixamorigRightUpLeg",leftUpLeg:"mixamorigLeftUpLeg",rightLeg:"mixamorigRightLeg",leftLeg:"mixamorigLeftLeg"},m=()=>{const t=e.value.videoWidth,n=e.value.videoHeight,i=new up.Nv2(e.value),r=new up.eaF(new up.bdM(t,n),new up.V9B({map:i}));r.position.set(0,0,-1e3),h.add(r),c=new up.qUd(t/-2,t/2,n/2,n/-2,.1,2e3),c.position.set(0,0,1e3),c.lookAt(h.position);const o=new up.dth(16777215,16777215,.3);h.add(o);const s=new up.$p8(16777215,.7);h.add(s);const u=new up.ZyN(16777215,1);u.position.set(10,10,10),h.add(u),p=(0,a.IG)(new up.JeP({canvas:document.getElementById("output"),alpha:!0,antialias:!0})),p.setPixelRatio(window.devicePixelRatio);let l=window.innerWidth-16,f=window.innerHeight-130;const m=t/n;l/f>m?l=f*m:f=l/m,p.setSize(l,f);const g="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb";let y=(new up.Tap).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy.jpg");y.flipY=!1;const x=new up.tXL({map:y,color:16777215,skinning:!0}),b=new lp.B;b.load(g,(function(e){const t=e.scene,n={};t.traverse((e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material=x),e.isBone&&(n[e.name]=e)})),n["mixamorigRightLeg"].rotation.z=up.cj9.degToRad(50);const i=e.scene,r=new up.Pq0,o=(new up.NRn).setFromObject(i);o.getSize(r),i.scale.set(250,250,250);const a=new up._xc(i);d.push({size:r,model:i,skeletonHelper:a,bones:n}),h.add(i),h.add(a),p.render(h,c)}))},g=(e,t=0,n=1)=>{const i=new up.Pq0(...e[t]),r=new up.Pq0(...e[n]);return i.distanceTo(r)},y=(e,t,n)=>{const i=new up.kn4,r=t.clone().sub(n).normalize(),o=t.clone().add(n).multiplyScalar(.5).sub(e).multiplyScalar(-1).normalize(),a=(new up.Pq0).crossVectors(r,o).normalize();return i.makeBasis(r,o,a),i.invert()},x=(e,t)=>{if(3!==e.length||3!==t.length)throw new Error("Each point must have three coordinates (x, y, z).");const n=(e[0]+t[0])/2,i=(e[1]+t[1])/2,r=(e[2]+t[2])/2;return[n,i,r]};function b(e,t,n,i=null,r="xyz",o={x:0,y:0,z:0}){const a=e=>new up.Pq0(e[r[0]],e[r[1]],e[r[2]]),s=a(t),u=a(n),l=new up.PTz;e.parent.getWorldQuaternion(l);const h=s.clone().applyQuaternion(l.clone().invert()).normalize(),d=u.clone().applyQuaternion(l.clone().invert()).normalize(),c=(new up.PTz).setFromUnitVectors(h,d),p=(new up.O9p).setFromQuaternion(c);if(p.x+=o.x,p.y+=o.y,p.z+=o.z,i){(new up.O9p).setFromQuaternion(e.quaternion);p[i]=0}c.setFromEuler(p),e.quaternion.copy(c)}const w=(t,n)=>{const i=e.value.videoWidth,r=e.value.videoHeight,o=v(t.scaledMesh,i,r),a=(t.poseResult,t.Mesh3D),s=d[n].bones,u=d[n].model,l=(d[n].size,x(o[24],o[23])),h=(g(t.scaledMesh,11,12),g(t.scaledMesh,6,30)),c=new up.Pq0(a[11][0],-a[11][1],-a[11][2]),p=new up.Pq0(a[12][0],-a[12][1],-a[12][2]),m=new up.Pq0(a[13][0],-a[13][1],-a[13][2]),w=new up.Pq0(a[14][0],-a[14][1],-a[14][2]),S=new up.Pq0(a[15][0],-a[15][1],-a[15][2]),k=new up.Pq0(a[16][0],-a[16][1],-a[16][2]),C=(new up.Pq0(a[21][0],-a[21][1],-a[21][2]),new up.Pq0(a[22][0],-a[22][1],-a[22][2]),new up.Pq0(a[23][0],-a[23][1],-a[23][2])),I=new up.Pq0(a[24][0],-a[24][1],-a[24][2]),R=(new up.Pq0).copy(C).add(I).multiplyScalar(.5),P=(new up.Pq0).copy(p).add(c).multiplyScalar(.5),z=new up.Pq0(a[25][0],-a[25][1],-a[25][2]),A=new up.Pq0(a[27][0],-a[27][1],-a[27][2]),T=new up.Pq0(a[26][0],-a[26][1],-a[26][2]),L=new up.Pq0(a[28][0],-a[28][1],-a[28][2]);var E,$,F,N,D;l[1]-=h/2,u.position.set(...l);const _=[.5*(t.Mesh3D[11][0]+t.Mesh3D[12][0]),.5*(t.Mesh3D[11][1]+t.Mesh3D[12][1]),.5*(t.Mesh3D[11][2]+t.Mesh3D[12][2])],M=y(new up.Pq0(..._),new up.Pq0(...t.Mesh3D[23]),new up.Pq0(...t.Mesh3D[24]));u.rotation.setFromRotationMatrix(M),u.rotation.y=-u.rotation.y+Math.PI,u.rotateZ(-Math.PI),E=p,$=w,F=k,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.rightArm],N,D,""),E=c,$=m,F=S,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.leftArm],N,D,""),E=P,$=p,F=w,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.rightUpArm],N,D,""),E=P,$=c,F=m,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.leftUpArm],N,D,""),E=R,$=I,F=T,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.rightUpLeg],N,D,"","xyz",{x:0,y:0,z:Math.PI/2}),E=I,$=T,F=L,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.rightLeg],N,D,""),E=R,$=C,F=z,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.leftUpLeg],N,D,"","xyz",{x:0,y:0,z:-Math.PI/2}),E=C,$=z,F=A,N=(new up.Pq0).subVectors($,E),D=(new up.Pq0).subVectors(F,$),b(s[f.leftLeg],N,D,"")},v=(e,t,n)=>e.map((e=>[e[0]-t/2,n/2-e[1],-e[2]]));return(0,i.sV)((async()=>{await n(),await r(),m()})),{video:e,startRecognition:s}}},Up=n(1241);const Wp=(0,Up.A)(Bp,[["render",o],["__scopeId","data-v-6c384a40"]]);var Vp=Wp},1871:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(6768);const r={ref:"arContainer",class:"ar-container"},o={ref:"threeCanvas"};function a(e,t,n,a,s,u){return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("canvas",o,null,512)],512)}n(8992),n(3949);var s=n(4923),u=function(e){var t=this,n={type:"change"},i=1e-6;this.object=e,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0;var r=function(e){t.deviceOrientation=e},o=function(){t.screenOrientation=window.orientation||0},a=function(){var e=new s.Pq0(0,0,1),t=new s.O9p,n=new s.PTz,i=new s.PTz(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(r,o,a,s,u){t.set(a,o,-s,"YXZ"),r.setFromEuler(t),r.multiply(i),r.multiply(n.setFromAxisAngle(e,-u))}}();this.connect=function(){o(),void 0!==window.DeviceOrientationEvent&&"function"===typeof window.DeviceOrientationEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((function(e){"granted"==e&&(window.addEventListener("orientationchange",o),window.addEventListener("deviceorientation",r))})).catch((function(e){console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:",e)})):(window.addEventListener("orientationchange",o),window.addEventListener("deviceorientation",r)),t.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",o),window.removeEventListener("deviceorientation",r),t.enabled=!1},this.update=function(){var e=new s.PTz;return function(){if(!1!==t.enabled){var r=t.deviceOrientation;if(r){var o=r.alpha?s.cj9.degToRad(r.alpha)+t.alphaOffset:0,u=r.beta?s.cj9.degToRad(r.beta):0,l=r.gamma?s.cj9.degToRad(r.gamma):0,h=t.screenOrientation?s.cj9.degToRad(t.screenOrientation):0;a(t.object.quaternion,o,u,l,h),8*(1-e.dot(t.object.quaternion))>i&&(e.copy(t.object.quaternion),t.dispatchEvent(n))}}}}(),this.dispose=function(){t.disconnect()},this.connect()};u.prototype=Object.create(s.Qev.prototype),u.prototype.constructor=u;var l=function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new s.Pq0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:s.kBv.ROTATE,MIDDLE:s.kBv.DOLLY,RIGHT:s.kBv.PAN},this.touches={ONE:s.wtR.ROTATE,TWO:s.wtR.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",ae),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),u=a.NONE},this.update=function(){var t=new s.Pq0,r=(new s.PTz).setFromUnitVectors(e.up,new s.Pq0(0,1,0)),o=r.clone().invert(),m=new s.Pq0,g=new s.PTz,y=2*Math.PI;return function(){var e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(r),h.setFromVector3(t),n.autoRotate&&u===a.NONE&&R(C()),n.enableDamping?(h.theta+=d.theta*n.dampingFactor,h.phi+=d.phi*n.dampingFactor):(h.theta+=d.theta,h.phi+=d.phi);var s=n.minAzimuthAngle,x=n.maxAzimuthAngle;return isFinite(s)&&isFinite(x)&&(s<-Math.PI?s+=y:s>Math.PI&&(s-=y),x<-Math.PI?x+=y:x>Math.PI&&(x-=y),h.theta=s<=x?Math.max(s,Math.min(x,h.theta)):h.theta>(s+x)/2?Math.max(s,h.theta):Math.min(x,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=c,h.radius=Math.max(n.minDistance,Math.min(n.maxDistance,h.radius)),!0===n.enableDamping?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),t.setFromSpherical(h),t.applyQuaternion(o),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),p.set(0,0,0)),c=1,!!(f||m.distanceToSquared(n.object.position)>l||8*(1-g.dot(n.object.quaternion))>l)&&(n.dispatchEvent(i),m.copy(n.object.position),g.copy(n.object.quaternion),f=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",he),n.domElement.removeEventListener("pointerdown",J),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("touchstart",se),n.domElement.removeEventListener("touchend",le),n.domElement.removeEventListener("touchmove",ue),n.domElement.ownerDocument.removeEventListener("pointermove",ee),n.domElement.ownerDocument.removeEventListener("pointerup",te),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ae)};var n=this,i={type:"change"},r={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},u=a.NONE,l=1e-6,h=new s.YHV,d=new s.YHV,c=1,p=new s.Pq0,f=!1,m=new s.I9Y,g=new s.I9Y,y=new s.I9Y,x=new s.I9Y,b=new s.I9Y,w=new s.I9Y,v=new s.I9Y,S=new s.I9Y,k=new s.I9Y;function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function R(e){d.theta-=e}function P(e){d.phi-=e}var z=function(){var e=new s.Pq0;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),p.add(e)}}(),A=function(){var e=new s.Pq0;return function(t,i){!0===n.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),p.add(e)}}(),T=function(){var e=new s.Pq0;return function(t,i){var r=n.domElement;if(n.object.isPerspectiveCamera){var o=n.object.position;e.copy(o).sub(n.target);var a=e.length();a*=Math.tan(n.object.fov/2*Math.PI/180),z(2*t*a/r.clientHeight,n.object.matrix),A(2*i*a/r.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),A(i*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera?c/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function E(e){n.object.isPerspectiveCamera?c*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(e){m.set(e.clientX,e.clientY)}function F(e){v.set(e.clientX,e.clientY)}function N(e){x.set(e.clientX,e.clientY)}function D(e){g.set(e.clientX,e.clientY),y.subVectors(g,m).multiplyScalar(n.rotateSpeed);var t=n.domElement;R(2*Math.PI*y.x/t.clientHeight),P(2*Math.PI*y.y/t.clientHeight),m.copy(g),n.update()}function _(e){S.set(e.clientX,e.clientY),k.subVectors(S,v),k.y>0?L(I()):k.y<0&&E(I()),v.copy(S),n.update()}function M(e){b.set(e.clientX,e.clientY),w.subVectors(b,x).multiplyScalar(n.panSpeed),T(w.x,w.y),x.copy(b),n.update()}function O(){}function B(e){e.deltaY<0?E(I()):e.deltaY>0&&L(I()),n.update()}function U(e){var t=!1;switch(e.keyCode){case n.keys.UP:T(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:T(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:T(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:T(-n.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),n.update())}function W(e){if(1==e.touches.length)m.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);m.set(t,n)}}function V(e){if(1==e.touches.length)x.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);x.set(t,n)}}function H(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+n*n);v.set(0,i)}function G(e){n.enableZoom&&H(e),n.enablePan&&V(e)}function j(e){n.enableZoom&&H(e),n.enableRotate&&W(e)}function K(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,i)}y.subVectors(g,m).multiplyScalar(n.rotateSpeed);var r=n.domElement;R(2*Math.PI*y.x/r.clientHeight),P(2*Math.PI*y.y/r.clientHeight),m.copy(g)}function X(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,i)}w.subVectors(b,x).multiplyScalar(n.panSpeed),T(w.x,w.y),x.copy(b)}function q(e){var t=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+i*i);S.set(0,r),k.set(0,Math.pow(S.y/v.y,n.zoomSpeed)),L(k.y),v.copy(S)}function Y(e){n.enableZoom&&q(e),n.enablePan&&X(e)}function Z(e){n.enableZoom&&q(e),n.enableRotate&&K(e)}function Q(){}function J(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":ne(e);break}}function ee(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":ie(e);break}}function te(e){switch(e.pointerType){case"mouse":case"pen":re(e);break}}function ne(e){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case s.kBv.DOLLY:if(!1===n.enableZoom)return;F(e),u=a.DOLLY;break;case s.kBv.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;N(e),u=a.PAN}else{if(!1===n.enableRotate)return;$(e),u=a.ROTATE}break;case s.kBv.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;$(e),u=a.ROTATE}else{if(!1===n.enablePan)return;N(e),u=a.PAN}break;default:u=a.NONE}u!==a.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",ee),n.domElement.ownerDocument.addEventListener("pointerup",te),n.dispatchEvent(r))}function ie(e){if(!1!==n.enabled)switch(e.preventDefault(),u){case a.ROTATE:if(!1===n.enableRotate)return;D(e);break;case a.DOLLY:if(!1===n.enableZoom)return;_(e);break;case a.PAN:if(!1===n.enablePan)return;M(e);break}}function re(e){n.domElement.ownerDocument.removeEventListener("pointermove",ee),n.domElement.ownerDocument.removeEventListener("pointerup",te),!1!==n.enabled&&(O(e),n.dispatchEvent(o),u=a.NONE)}function oe(e){!1===n.enabled||!1===n.enableZoom||u!==a.NONE&&u!==a.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(r),B(e),n.dispatchEvent(o))}function ae(e){!1!==n.enabled&&!1!==n.enablePan&&U(e)}function se(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case s.wtR.ROTATE:if(!1===n.enableRotate)return;W(e),u=a.TOUCH_ROTATE;break;case s.wtR.PAN:if(!1===n.enablePan)return;V(e),u=a.TOUCH_PAN;break;default:u=a.NONE}break;case 2:switch(n.touches.TWO){case s.wtR.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;G(e),u=a.TOUCH_DOLLY_PAN;break;case s.wtR.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;j(e),u=a.TOUCH_DOLLY_ROTATE;break;default:u=a.NONE}break;default:u=a.NONE}u!==a.NONE&&n.dispatchEvent(r)}}function ue(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),u){case a.TOUCH_ROTATE:if(!1===n.enableRotate)return;K(e),n.update();break;case a.TOUCH_PAN:if(!1===n.enablePan)return;X(e),n.update();break;case a.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;Y(e),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;Z(e),n.update();break;default:u=a.NONE}}function le(e){!1!==n.enabled&&(Q(e),n.dispatchEvent(o),u=a.NONE)}function he(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",he),n.domElement.addEventListener("pointerdown",J),n.domElement.addEventListener("wheel",oe),n.domElement.addEventListener("touchstart",se),n.domElement.addEventListener("touchend",le),n.domElement.addEventListener("touchmove",ue),this.update()};l.prototype=Object.create(s.Qev.prototype),l.prototype.constructor=l;var h=function(e,t){l.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=s.kBv.PAN,this.mouseButtons.RIGHT=s.kBv.ROTATE,this.touches.ONE=s.wtR.PAN,this.touches.TWO=s.wtR.DOLLY_ROTATE};h.prototype=Object.create(s.Qev.prototype),h.prototype.constructor=h;var d=n(144),c={data(){return{scene:(0,d.IG)(new s.Z58),camera:(0,d.IG)(new s.ubm(75,window.innerWidth/window.innerHeight,.1,1e3)),renderer:null,cube:null,video:null,videoTexture:null,controls:null,baseDistance:5,zAccelerationThreshold:.05,currentZAcceleration:0,alpha:0,beta:0,gamma:0}},methods:{async initCamera(){try{this.video=document.createElement("video"),this.video.autoplay=!0;const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}}});this.video.srcObject=e,await this.video.play(),this.videoTexture=(0,d.IG)(new s.Nv2(this.video)),this.videoTexture.minFilter=s.k6q,this.videoTexture.magFilter=s.k6q,this.videoTexture.format=s.HIg,this.scene.background=this.videoTexture}catch(e){console.error("Error accessing camera:",e)}},initThreeJS(){const e=this.$refs.arContainer;this.renderer=(0,d.IG)(new s.JeP({antialias:!0,alpha:!0,canvas:this.$refs.threeCanvas})),this.renderer.setSize(e.clientWidth,e.clientHeight);const t=new s.iNn(1,1,1),n=new s.qBx;this.cube=(0,d.IG)(new s.eaF(t,n)),this.cube.position.set(0,0,-5),this.scene.add(this.cube),this.camera.position.set(0,0,this.baseDistance),this.camera.lookAt(this.cube.position),this.isMobileDevice()?(this.controls=new u(this.camera),this.controls.connect(),this.controls.alphaOffset=-Math.PI/2,this.startDeviceMotionListener(),window.addEventListener("deviceorientation",this.handleDeviceOrientation)):(this.controls=new l(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.enableZoom=!0),this.animate()},animate(){requestAnimationFrame(this.animate),this.controls&&this.controls.update(),this.isMobileDevice()&&this.updateCameraDistance(),this.renderer.render(this.scene,this.camera)},resize(){const e=this.$refs.arContainer;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)},startDeviceMotionListener(){window.addEventListener("devicemotion",(e=>{const t=e.accelerationIncludingGravity.z||0;this.currentZAcceleration=t}))},updateCameraDistance(){Math.abs(this.currentZAcceleration)>this.zAccelerationThreshold&&(this.baseDistance-=.1*this.currentZAcceleration,this.baseDistance=Math.max(1,Math.min(this.baseDistance,15)),this.camera.position.z=this.baseDistance)},handleDeviceOrientation(e){this.alpha=e.alpha?s.zUP.degToRad(e.alpha):0,this.beta=e.beta?s.zUP.degToRad(e.beta):0,this.gamma=e.gamma?s.zUP.degToRad(e.gamma):0,this.cube.rotation.set(this.beta,this.alpha,-this.gamma)},isMobileDevice(){return/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)}},async mounted(){await this.initCamera(),this.initThreeJS(),window.addEventListener("resize",this.resize)},beforeDestroy(){if(window.removeEventListener("resize",this.resize),window.removeEventListener("devicemotion",this.startDeviceMotionListener),window.removeEventListener("deviceorientation",this.handleDeviceOrientation),this.video&&this.video.srcObject){const e=this.video.srcObject,t=e.getTracks();t.forEach((e=>e.stop()))}}},p=n(1241);const f=(0,p.A)(c,[["render",a]]);var m=f}}]);
//# sourceMappingURL=about.d25e3114.js.map