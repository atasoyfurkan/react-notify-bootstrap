/*! For license information please see main.20f77afe.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-notify-bootstrap-example"]=this["webpackJsonpreact-notify-bootstrap-example"]||[]).push([[0],{10:function(t,e,n){t.exports=n(21)},11:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);n(11);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(5),s=n(6),f=n(9),l=n(8),u=n(4);n(18);function p(t,e){return t(e={exports:{}},e.exports),e.exports}var m="function"===typeof Symbol&&Symbol.for,y=m?Symbol.for("react.element"):60103,b=m?Symbol.for("react.portal"):60106,d=m?Symbol.for("react.fragment"):60107,h=m?Symbol.for("react.strict_mode"):60108,g=m?Symbol.for("react.profiler"):60114,v=m?Symbol.for("react.provider"):60109,w=m?Symbol.for("react.context"):60110,S=m?Symbol.for("react.async_mode"):60111,O=m?Symbol.for("react.concurrent_mode"):60111,x=m?Symbol.for("react.forward_ref"):60112,C=m?Symbol.for("react.suspense"):60113,E=m?Symbol.for("react.suspense_list"):60120,j=m?Symbol.for("react.memo"):60115,k=m?Symbol.for("react.lazy"):60116,$=m?Symbol.for("react.block"):60121,_=m?Symbol.for("react.fundamental"):60117,P=m?Symbol.for("react.responder"):60118,N=m?Symbol.for("react.scope"):60119;function T(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case y:switch(t=t.type){case S:case O:case d:case g:case h:case C:return t;default:switch(t=t&&t.$$typeof){case w:case x:case k:case j:case v:return t;default:return e}}case b:return e}}}function M(t){return T(t)===O}var I={AsyncMode:S,ConcurrentMode:O,ContextConsumer:w,ContextProvider:v,Element:y,ForwardRef:x,Fragment:d,Lazy:k,Memo:j,Portal:b,Profiler:g,StrictMode:h,Suspense:C,isAsyncMode:function(t){return M(t)||T(t)===S},isConcurrentMode:M,isContextConsumer:function(t){return T(t)===w},isContextProvider:function(t){return T(t)===v},isElement:function(t){return"object"===typeof t&&null!==t&&t.$$typeof===y},isForwardRef:function(t){return T(t)===x},isFragment:function(t){return T(t)===d},isLazy:function(t){return T(t)===k},isMemo:function(t){return T(t)===j},isPortal:function(t){return T(t)===b},isProfiler:function(t){return T(t)===g},isStrictMode:function(t){return T(t)===h},isSuspense:function(t){return T(t)===C},isValidElementType:function(t){return"string"===typeof t||"function"===typeof t||t===d||t===O||t===g||t===h||t===C||t===E||"object"===typeof t&&null!==t&&(t.$$typeof===k||t.$$typeof===j||t.$$typeof===v||t.$$typeof===w||t.$$typeof===x||t.$$typeof===_||t.$$typeof===P||t.$$typeof===N||t.$$typeof===$)},typeOf:T},R=(p((function(t,e){0})),p((function(t){t.exports=I})),Object.getOwnPropertySymbols),F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;function A(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var L="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function z(t,e,n,r,o){}z.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function D(){}function q(){}q.resetWarningCache=D;var B,H=p((function(t){t.exports=function(){function t(t,e,n,r,o,a){if(a!==L){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:q,resetWarningCache:D};return n.PropTypes=n,n}()})),J={white:"#fff",primary:"#007bff",secondary:"#6c757d",success:"#28a745",info:"#17a2b8",warning:"#ffc107",danger:"#dc3545",light:"#f8f9fa",dark:"#343a40"},U=function(t){var e=t.text,n=void 0===e?"":e,r=t.variant,o=void 0===r?"primary":r;if(!B)throw new Error("Can't use notify before declaration");B(n,o)},V=function(t){var e,n;function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={show:!1,variant:J.primary,text:""},e.open=function(t,n){void 0===t&&(t=""),void 0===n&&(n="primary"),e.setState({show:!0,text:t,variant:J[n]})},e.onClose=function(){e.setState({show:!1})},e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=r.prototype;return a.componentWillMount=function(){B=this.open},a.render=function(){var t=this.props.options,e=this.state,n=e.show,r=e.variant,a=e.text,c=!1,i=4e3,s=!0;return t&&(c=t.animation||!1,i=t.delay||4e3,s=t.autohide||!0),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(u.a,{style:{background:r,position:"fixed",bottom:20,zIndex:999},onClose:this.onClose,show:n,animation:c,delay:i,autohide:s},o.a.createElement(u.a.Header,null,o.a.createElement("strong",{className:"mr-auto"},a))))},r}(r.Component);V.propTypes={options:H.shape({animation:H.bool,delay:H.number,autohide:H.bool})},V.configure=function(t){notification=t.current};var Y=V,G=function(t){Object(f.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).primary=function(){U({text:"Primary",variant:"primary"})},t.secondary=function(){U({text:"Secondary",variant:"secondary"})},t.success=function(){U({text:"Success",variant:"success"})},t.info=function(){U({text:"Info",variant:"info"})},t.warning=function(){U({text:"Warning",variant:"warning"})},t.danger=function(){U({text:"Danger",variant:"danger"})},t.light=function(){U({text:"Light",variant:"light"})},t.dark=function(){U({text:"Dark",variant:"dark"})},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"container text-center",style:{marginTop:200}},o.a.createElement("button",{className:"btn btn-primary btn-lg mr-2 mb-2",onClick:this.primary},"primary"),o.a.createElement("button",{className:"btn btn-secondary btn-lg mr-2 mb-2",onClick:this.secondary},"secondary"),o.a.createElement("button",{className:"btn btn-success btn-lg mr-2 mb-2",onClick:this.success},"success"),o.a.createElement("button",{className:"btn btn-info btn-lg mr-2 mb-2",onClick:this.info},"info"),o.a.createElement("button",{className:"btn btn-warning btn-lg mr-2 mb-2",onClick:this.warning},"warning"),o.a.createElement("button",{className:"btn btn-danger btn-lg mr-2 mb-2",onClick:this.danger},"danger"),o.a.createElement("button",{className:"btn btn-light btn-lg mr-2 mb-2",onClick:this.light},"light"),o.a.createElement("button",{className:"btn btn-dark btn-lg mr-2 mb-2",onClick:this.dark},"dark"),o.a.createElement(Y,null))}}]),n}(r.Component);c.a.render(o.a.createElement(G,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.20f77afe.chunk.js.map