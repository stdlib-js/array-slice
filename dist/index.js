"use strict";var u=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var s=u(function(h,a){
var g=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-integer/dist').isPrimitive,l=require('@stdlib/array-base-slice/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function m(t){var e,r;if(!g(t))throw new TypeError(i('1pF2O',t));if(arguments.length>1){if(e=arguments[1],!n(e))throw new TypeError(i('1pF7f',e));if(arguments.length>2){if(r=arguments[2],!n(r))throw new TypeError(i('1pF2z',r))}else r=t.length}else e=0,r=t.length;return l(t,e,r)}a.exports=m
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
