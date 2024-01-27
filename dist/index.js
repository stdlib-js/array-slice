"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=u(function(h,a){
var g=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/assert-is-integer/dist').isPrimitive,l=require('@stdlib/array-base-slice/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r){var e,t;if(!g(r))throw new TypeError(i('null2O',r));if(arguments.length>1){if(e=arguments[1],!n(e))throw new TypeError(i('null7f',e));if(arguments.length>2){if(t=arguments[2],!n(t))throw new TypeError(i('null2z',t))}else t=r.length}else e=0,t=r.length;return l(r,e,t)}a.exports=m
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
