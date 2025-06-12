(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var zD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var T_={exports:{}},Au={},I_={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),_I=Symbol.for("react.portal"),EI=Symbol.for("react.fragment"),wI=Symbol.for("react.strict_mode"),TI=Symbol.for("react.profiler"),II=Symbol.for("react.provider"),SI=Symbol.for("react.context"),AI=Symbol.for("react.forward_ref"),kI=Symbol.for("react.suspense"),CI=Symbol.for("react.memo"),RI=Symbol.for("react.lazy"),og=Symbol.iterator;function PI(t){return t===null||typeof t!="object"?null:(t=og&&t[og]||t["@@iterator"],typeof t=="function"?t:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A_=Object.assign,k_={};function ms(t,e,n){this.props=t,this.context=e,this.refs=k_,this.updater=n||S_}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C_(){}C_.prototype=ms.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=k_,this.updater=n||S_}var cd=ud.prototype=new C_;cd.constructor=ud;A_(cd,ms.prototype);cd.isPureReactComponent=!0;var ag=Array.isArray,R_=Object.prototype.hasOwnProperty,hd={current:null},P_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R_.call(e,r)&&!P_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ea,type:t,key:s,ref:o,props:i,_owner:hd.current}}function xI(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function NI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lg=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NI(""+t.key):e.toString(36)}function cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ea:case _I:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bc(o,0):r,ag(i)?(n="",t!=null&&(n=t.replace(lg,"$&/")+"/"),cl(i,e,n,"",function(c){return c})):i!=null&&(fd(i)&&(i=xI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ag(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+bc(s,l);o+=cl(s,e,n,u,i)}else if(u=PI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+bc(s,l++),o+=cl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],i=0;return cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},hl={transition:null},OI={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:hd};function N_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ms;ie.Fragment=EI;ie.Profiler=TI;ie.PureComponent=ud;ie.StrictMode=wI;ie.Suspense=kI;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;ie.act=N_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=A_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)R_.call(e,u)&&!P_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:SI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:II,_context:t},t.Consumer=t};ie.createElement=x_;ie.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:AI,render:t}};ie.isValidElement=fd;ie.lazy=function(t){return{$$typeof:RI,_payload:{_status:-1,_result:t},_init:bI}};ie.memo=function(t,e){return{$$typeof:CI,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};ie.unstable_act=N_;ie.useCallback=function(t,e){return vt.current.useCallback(t,e)};ie.useContext=function(t){return vt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return vt.current.useEffect(t,e)};ie.useId=function(){return vt.current.useId()};ie.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return vt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ie.useRef=function(t){return vt.current.useRef(t)};ie.useState=function(t){return vt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return vt.current.useTransition()};ie.version="18.3.1";I_.exports=ie;var V=I_.exports;const dd=w_(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LI=V,DI=Symbol.for("react.element"),MI=Symbol.for("react.fragment"),VI=Object.prototype.hasOwnProperty,FI=LI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UI={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VI.call(e,r)&&!UI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:DI,type:t,key:s,ref:o,props:i,_owner:FI.current}}Au.Fragment=MI;Au.jsx=b_;Au.jsxs=b_;T_.exports=Au;var I=T_.exports,Ah={},O_={exports:{}},Ot={},L_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Z=$.length;$.push(Y);e:for(;0<Z;){var ve=Z-1>>>1,de=$[ve];if(0<i(de,Y))$[ve]=Y,$[Z]=de,Z=ve;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],Z=$.pop();if(Z!==Y){$[0]=Z;e:for(var ve=0,de=$.length,K=de>>>1;ve<K;){var ne=2*(ve+1)-1,ae=$[ne],ue=ne+1,pe=$[ue];if(0>i(ae,Z))ue<de&&0>i(pe,ae)?($[ve]=pe,$[ue]=Z,ve=ue):($[ve]=ae,$[ne]=Z,ve=ne);else if(ue<de&&0>i(pe,Z))$[ve]=pe,$[ue]=Z,ve=ue;else break e}}return Y}function i($,Y){var Z=$.sortIndex-Y.sortIndex;return Z!==0?Z:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,A=!1,C=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function x($){if(P=!1,T($),!C)if(n(u)!==null)C=!0,Dr(L);else{var Y=n(c);Y!==null&&Ht(x,Y.startTime-$)}}function L($,Y){C=!1,P&&(P=!1,E(g),g=-1),A=!0;var Z=m;try{for(T(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||$&&!R());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var de=ve(p.expirationTime<=Y);Y=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(u)&&r(u),T(Y)}else r(u);p=n(u)}if(p!==null)var K=!0;else{var ne=n(c);ne!==null&&Ht(x,ne.startTime-Y),K=!1}return K}finally{p=null,m=Z,A=!1}}var M=!1,w=null,g=-1,v=5,S=-1;function R(){return!(t.unstable_now()-S<v)}function b(){if(w!==null){var $=t.unstable_now();S=$;var Y=!0;try{Y=w(!0,$)}finally{Y?k():(M=!1,w=null)}}else M=!1}var k;if(typeof _=="function")k=function(){_(b)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,wn=Et.port2;Et.port1.onmessage=b,k=function(){wn.postMessage(null)}}else k=function(){N(b,0)};function Dr($){w=$,M||(M=!0,k())}function Ht($,Y){g=N(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,Dr(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function($,Y,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,$){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,$={id:f++,callback:Y,priorityLevel:$,startTime:Z,expirationTime:de,sortIndex:-1},Z>ve?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(E(g),g=-1):P=!0,Ht(x,Z-ve))):($.sortIndex=de,e(u,$),C||A||(C=!0,Dr(L))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Y=m;return function(){var Z=m;m=Y;try{return $.apply(this,arguments)}finally{m=Z}}}})(D_);L_.exports=D_;var jI=L_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zI=V,bt=jI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M_=new Set,So={};function hi(t,e){Ji(t,e),Ji(t+"Capture",e)}function Ji(t,e){for(So[t]=e,t=0;t<e.length;t++)M_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kh=Object.prototype.hasOwnProperty,BI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ug={},cg={};function $I(t){return kh.call(cg,t)?!0:kh.call(ug,t)?!1:BI.test(t)?cg[t]=!0:(ug[t]=!0,!1)}function HI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WI(t,e,n,r){if(e===null||typeof e>"u"||HI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);Je[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);Je[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);Je[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WI(e,n,i,r)&&(n=null),r||i===null?$I(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=zI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),U_=Symbol.for("react.offscreen"),hg=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Oc;function Xs(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Lc=!1;function Dc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function qI(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case ki:return"Portal";case Ch:return"Profiler";case yd:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F_:return(t.displayName||"Context")+".Consumer";case V_:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:xh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return xh(t(e))}catch{}}return null}function KI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GI(t){var e=j_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=GI(t))}function z_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B_(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function bh(t,e){B_(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oh(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Js(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function $_(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,W_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QI=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){QI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function K_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=q_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YI=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(t,e){if(e){if(YI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function Ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uh=null,Bi=null,$i=null;function gg(t){if(t=ra(t)){if(typeof Uh!="function")throw Error(z(280));var e=t.stateNode;e&&(e=xu(e),Uh(t.stateNode,t.type,e))}}function G_(t){Bi?$i?$i.push(t):$i=[t]:Bi=t}function Q_(){if(Bi){var t=Bi,e=$i;if($i=Bi=null,gg(t),e)for(t=0;t<e.length;t++)gg(e[t])}}function Y_(t,e){return t(e)}function X_(){}var Mc=!1;function J_(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return Y_(t,e,n)}finally{Mc=!1,(Bi!==null||$i!==null)&&(X_(),Q_())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var jh=!1;if(On)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){jh=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{jh=!1}function XI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var lo=!1,Dl=null,Ml=!1,zh=null,JI={onError:function(t){lo=!0,Dl=t}};function ZI(t,e,n,r,i,s,o,l,u){lo=!1,Dl=null,XI.apply(JI,arguments)}function eS(t,e,n,r,i,s,o,l,u){if(ZI.apply(this,arguments),lo){if(lo){var c=Dl;lo=!1,Dl=null}else throw Error(z(198));Ml||(Ml=!0,zh=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yg(t){if(fi(t)!==t)throw Error(z(188))}function tS(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yg(i),t;if(s===r)return yg(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function e0(t){return t=tS(t),t!==null?t0(t):null}function t0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t0(t);if(e!==null)return e;t=t.sibling}return null}var n0=bt.unstable_scheduleCallback,vg=bt.unstable_cancelCallback,nS=bt.unstable_shouldYield,rS=bt.unstable_requestPaint,Oe=bt.unstable_now,iS=bt.unstable_getCurrentPriorityLevel,wd=bt.unstable_ImmediatePriority,r0=bt.unstable_UserBlockingPriority,Vl=bt.unstable_NormalPriority,sS=bt.unstable_LowPriority,i0=bt.unstable_IdlePriority,ku=null,cn=null;function oS(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(ku,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:uS,aS=Math.log,lS=Math.LN2;function uS(t){return t>>>=0,t===0?32:31-(aS(t)/lS|0)|0}var Ba=64,$a=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zs(l):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function cS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=cS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s0(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function fS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function o0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a0,Id,l0,u0,c0,$h=!1,Ha=[],ur=null,cr=null,hr=null,Co=new Map,Ro=new Map,er=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _g(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ra(e),e!==null&&Id(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pS(t,e,n,r,i){switch(e){case"focusin":return ur=js(ur,t,e,n,r,i),!0;case"dragenter":return cr=js(cr,t,e,n,r,i),!0;case"mouseover":return hr=js(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,js(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,js(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function h0(t){var e=$r(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Z_(n),e!==null){t.blockedOn=e,c0(t.priority,function(){l0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fh=r,n.target.dispatchEvent(r),Fh=null}else return e=ra(n),e!==null&&Id(e),t.blockedOn=n,!1;e.shift()}return!0}function Eg(t,e,n){fl(t)&&n.delete(e)}function mS(){$h=!1,ur!==null&&fl(ur)&&(ur=null),cr!==null&&fl(cr)&&(cr=null),hr!==null&&fl(hr)&&(hr=null),Co.forEach(Eg),Ro.forEach(Eg)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,mS)))}function Po(t){function e(i){return zs(i,t)}if(0<Ha.length){zs(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&zs(ur,t),cr!==null&&zs(cr,t),hr!==null&&zs(hr,t),Co.forEach(e),Ro.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&er.shift()}var Hi=Hn.ReactCurrentBatchConfig,Ul=!0;function gS(t,e,n,r){var i=me,s=Hi.transition;Hi.transition=null;try{me=1,Sd(t,e,n,r)}finally{me=i,Hi.transition=s}}function yS(t,e,n,r){var i=me,s=Hi.transition;Hi.transition=null;try{me=4,Sd(t,e,n,r)}finally{me=i,Hi.transition=s}}function Sd(t,e,n,r){if(Ul){var i=Hh(t,e,n,r);if(i===null)Kc(t,e,r,jl,n),_g(t,r);else if(pS(i,t,e,n,r))r.stopPropagation();else if(_g(t,r),e&4&&-1<dS.indexOf(t)){for(;i!==null;){var s=ra(i);if(s!==null&&a0(s),s=Hh(t,e,n,r),s===null&&Kc(t,e,r,jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var jl=null;function Hh(t,e,n,r){if(jl=null,t=Ed(r),t=$r(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jl=t,null}function f0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case wd:return 1;case r0:return 4;case Vl:case sS:return 16;case i0:return 536870912;default:return 16}default:return 16}}var or=null,Ad=null,dl=null;function d0(){if(dl)return dl;var t,e=Ad,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function wg(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:wg,this.isPropagationStopped=wg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=Lt(gs),na=Ce({},gs,{view:0,detail:0}),vS=Lt(na),Fc,Uc,Bs,Cu=Ce({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Fc=t.screenX-Bs.screenX,Uc=t.screenY-Bs.screenY):Uc=Fc=0,Bs=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Tg=Lt(Cu),_S=Ce({},Cu,{dataTransfer:0}),ES=Lt(_S),wS=Ce({},na,{relatedTarget:0}),jc=Lt(wS),TS=Ce({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Lt(TS),SS=Ce({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AS=Lt(SS),kS=Ce({},gs,{data:0}),Ig=Lt(kS),CS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PS[t])?!!e[t]:!1}function Cd(){return xS}var NS=Ce({},na,{key:function(t){if(t.key){var e=CS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=Lt(NS),OS=Ce({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sg=Lt(OS),LS=Ce({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),DS=Lt(LS),MS=Ce({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),VS=Lt(MS),FS=Ce({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Lt(FS),jS=[9,13,27,32],Rd=On&&"CompositionEvent"in window,uo=null;On&&"documentMode"in document&&(uo=document.documentMode);var zS=On&&"TextEvent"in window&&!uo,p0=On&&(!Rd||uo&&8<uo&&11>=uo),Ag=" ",kg=!1;function m0(t,e){switch(t){case"keyup":return jS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function BS(t,e){switch(t){case"compositionend":return g0(e);case"keypress":return e.which!==32?null:(kg=!0,Ag);case"textInput":return t=e.data,t===Ag&&kg?null:t;default:return null}}function $S(t,e){if(Ri)return t==="compositionend"||!Rd&&m0(t,e)?(t=d0(),dl=Ad=or=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HS[t.type]:e==="textarea"}function y0(t,e,n,r){G_(r),e=zl(e,"onChange"),0<e.length&&(n=new kd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,xo=null;function WS(t){R0(t,0)}function Ru(t){var e=Ni(t);if(z_(e))return t}function qS(t,e){if(t==="change")return e}var v0=!1;if(On){var zc;if(On){var Bc="oninput"in document;if(!Bc){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),Bc=typeof Rg.oninput=="function"}zc=Bc}else zc=!1;v0=zc&&(!document.documentMode||9<document.documentMode)}function Pg(){co&&(co.detachEvent("onpropertychange",_0),xo=co=null)}function _0(t){if(t.propertyName==="value"&&Ru(xo)){var e=[];y0(e,xo,t,Ed(t)),J_(WS,e)}}function KS(t,e,n){t==="focusin"?(Pg(),co=e,xo=n,co.attachEvent("onpropertychange",_0)):t==="focusout"&&Pg()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru(xo)}function QS(t,e){if(t==="click")return Ru(e)}function YS(t,e){if(t==="input"||t==="change")return Ru(e)}function XS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:XS;function No(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kh.call(e,i)||!en(t[i],e[i]))return!1}return!0}function xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ng(t,e){var n=xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xg(n)}}function E0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w0(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JS(t){var e=w0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ng(n,s);var o=Ng(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZS=On&&"documentMode"in document&&11>=document.documentMode,Pi=null,Wh=null,ho=null,qh=!1;function bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||Pi==null||Pi!==Ll(r)||(r=Pi,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&No(ho,r)||(ho=r,r=zl(Wh,"onSelect"),0<r.length&&(e=new kd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},$c={},T0={};On&&(T0=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Pu(t){if($c[t])return $c[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T0)return $c[t]=e[n];return t}var I0=Pu("animationend"),S0=Pu("animationiteration"),A0=Pu("animationstart"),k0=Pu("transitionend"),C0=new Map,Og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){C0.set(t,e),hi(e,[t])}for(var Hc=0;Hc<Og.length;Hc++){var Wc=Og[Hc],e2=Wc.toLowerCase(),t2=Wc[0].toUpperCase()+Wc.slice(1);Pr(e2,"on"+t2)}Pr(I0,"onAnimationEnd");Pr(S0,"onAnimationIteration");Pr(A0,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(k0,"onTransitionEnd");Ji("onMouseEnter",["mouseout","mouseover"]);Ji("onMouseLeave",["mouseout","mouseover"]);Ji("onPointerEnter",["pointerout","pointerover"]);Ji("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n2=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eS(r,e,void 0,t),t.currentTarget=null}function R0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Lg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Lg(i,l,c),s=u}}}if(Ml)throw t=zh,Ml=!1,zh=null,t}function we(t,e){var n=e[Xh];n===void 0&&(n=e[Xh]=new Set);var r=t+"__bubble";n.has(r)||(P0(e,t,2,!1),n.add(r))}function qc(t,e,n){var r=0;e&&(r|=4),P0(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Ka]){t[Ka]=!0,M_.forEach(function(n){n!=="selectionchange"&&(n2.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,qc("selectionchange",!1,e))}}function P0(t,e,n,r){switch(f0(e)){case 1:var i=gS;break;case 4:i=yS;break;default:i=Sd}n=i.bind(null,e,n,t),i=void 0,!jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}J_(function(){var c=s,f=Ed(n),p=[];e:{var m=C0.get(t);if(m!==void 0){var A=kd,C=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":A=bS;break;case"focusin":C="focus",A=jc;break;case"focusout":C="blur",A=jc;break;case"beforeblur":case"afterblur":A=jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=DS;break;case I0:case S0:case A0:A=IS;break;case k0:A=VS;break;case"scroll":A=vS;break;case"wheel":A=US;break;case"copy":case"cut":case"paste":A=AS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Sg}var P=(e&4)!==0,N=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,T;_!==null;){T=_;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,E!==null&&(x=ko(_,E),x!=null&&P.push(Oo(_,x,T)))),N)break;_=_.return}0<P.length&&(m=new A(m,C,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==Fh&&(C=n.relatedTarget||n.fromElement)&&($r(C)||C[Ln]))break e;if((A||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=c,C=C?$r(C):null,C!==null&&(N=fi(C),C!==N||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=c),A!==C)){if(P=Tg,x="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Sg,x="onPointerLeave",E="onPointerEnter",_="pointer"),N=A==null?m:Ni(A),T=C==null?m:Ni(C),m=new P(x,_+"leave",A,n,f),m.target=N,m.relatedTarget=T,x=null,$r(f)===c&&(P=new P(E,_+"enter",C,n,f),P.target=T,P.relatedTarget=N,x=P),N=x,A&&C)t:{for(P=A,E=C,_=0,T=P;T;T=wi(T))_++;for(T=0,x=E;x;x=wi(x))T++;for(;0<_-T;)P=wi(P),_--;for(;0<T-_;)E=wi(E),T--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=wi(P),E=wi(E)}P=null}else P=null;A!==null&&Dg(p,m,A,P,!1),C!==null&&N!==null&&Dg(p,N,C,P,!0)}}e:{if(m=c?Ni(c):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var L=qS;else if(Cg(m))if(v0)L=YS;else{L=GS;var M=KS}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=QS);if(L&&(L=L(t,c))){y0(p,L,n,f);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Oh(m,"number",m.value)}switch(M=c?Ni(c):window,t){case"focusin":(Cg(M)||M.contentEditable==="true")&&(Pi=M,Wh=c,ho=null);break;case"focusout":ho=Wh=Pi=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,bg(p,n,f);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":bg(p,n,f)}var w;if(Rd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ri?m0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(p0&&n.locale!=="ko"&&(Ri||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ri&&(w=d0()):(or=f,Ad="value"in or?or.value:or.textContent,Ri=!0)),M=zl(c,g),0<M.length&&(g=new Ig(g,t,null,n,f),p.push({event:g,listeners:M}),w?g.data=w:(w=g0(n),w!==null&&(g.data=w)))),(w=zS?BS(t,n):$S(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(f=new Ig("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=w))}R0(p,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(Oo(t,s,i)),s=ko(t,e),s!=null&&r.push(Oo(t,s,i))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ko(n,s),u!=null&&o.unshift(Oo(n,u,l))):i||(u=ko(n,s),u!=null&&o.push(Oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var r2=/\r\n?/g,i2=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(r2,`
`).replace(i2,"")}function Ga(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(z(425))}function Bl(){}var Kh=null,Gh=null;function Qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yh=typeof setTimeout=="function"?setTimeout:void 0,s2=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,o2=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(a2)}:Yh;function a2(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),an="__reactFiber$"+ys,Lo="__reactProps$"+ys,Ln="__reactContainer$"+ys,Xh="__reactEvents$"+ys,l2="__reactListeners$"+ys,u2="__reactHandles$"+ys;function $r(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[an])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[an]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function xu(t){return t[Lo]||null}var Jh=[],bi=-1;function xr(t){return{current:t}}function Te(t){0>bi||(t.current=Jh[bi],Jh[bi]=null,bi--)}function _e(t,e){bi++,Jh[bi]=t.current,t.current=e}var wr={},ut=xr(wr),It=xr(!1),Jr=wr;function Zi(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function $l(){Te(It),Te(ut)}function Ug(t,e,n){if(ut.current!==wr)throw Error(z(168));_e(ut,e),_e(It,n)}function x0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,KI(t)||"Unknown",i));return Ce({},n,r)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Jr=ut.current,_e(ut,t),_e(It,It.current),!0}function jg(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=x0(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,Te(It),Te(ut),_e(ut,t)):Te(It),_e(It,n)}var An=null,Nu=!1,Qc=!1;function N0(t){An===null?An=[t]:An.push(t)}function c2(t){Nu=!0,N0(t)}function Nr(){if(!Qc&&An!==null){Qc=!0;var t=0,e=me;try{var n=An;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Nu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),n0(wd,Nr),i}finally{me=e,Qc=!1}}return null}var Oi=[],Li=0,Wl=null,ql=0,Mt=[],Vt=0,Zr=null,kn=1,Cn="";function jr(t,e){Oi[Li++]=ql,Oi[Li++]=Wl,Wl=t,ql=e}function b0(t,e,n){Mt[Vt++]=kn,Mt[Vt++]=Cn,Mt[Vt++]=Zr,Zr=t;var r=kn;t=Cn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Jt(e)+i|n<<i|r,Cn=s+t}else kn=1<<s|n<<i|r,Cn=t}function xd(t){t.return!==null&&(jr(t,1),b0(t,1,0))}function Nd(t){for(;t===Wl;)Wl=Oi[--Li],Oi[Li]=null,ql=Oi[--Li],Oi[Li]=null;for(;t===Zr;)Zr=Mt[--Vt],Mt[Vt]=null,Cn=Mt[--Vt],Mt[Vt]=null,kn=Mt[--Vt],Mt[Vt]=null}var Nt=null,Pt=null,Se=!1,Qt=null;function O0(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:kn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Pt=null,!0):!1;default:return!1}}function Zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ef(t){if(Se){var e=Pt;if(e){var n=e;if(!zg(t,e)){if(Zh(t))throw Error(z(418));e=fr(n.nextSibling);var r=Nt;e&&zg(t,e)?O0(r,n):(t.flags=t.flags&-4097|2,Se=!1,Nt=t)}}else{if(Zh(t))throw Error(z(418));t.flags=t.flags&-4097|2,Se=!1,Nt=t}}}function Bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Qa(t){if(t!==Nt)return!1;if(!Se)return Bg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qh(t.type,t.memoizedProps)),e&&(e=Pt)){if(Zh(t))throw L0(),Error(z(418));for(;e;)O0(t,e),e=fr(e.nextSibling)}if(Bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Nt?fr(t.stateNode.nextSibling):null;return!0}function L0(){for(var t=Pt;t;)t=fr(t.nextSibling)}function es(){Pt=Nt=null,Se=!1}function bd(t){Qt===null?Qt=[t]:Qt.push(t)}var h2=Hn.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function D0(t){function e(E,_){if(t){var T=E.deletions;T===null?(E.deletions=[_],E.flags|=16):T.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=gr(E,_),E.index=0,E.sibling=null,E}function s(E,_,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<_?(E.flags|=2,_):T):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,T,x){return _===null||_.tag!==6?(_=nh(T,E.mode,x),_.return=E,_):(_=i(_,T),_.return=E,_)}function u(E,_,T,x){var L=T.type;return L===Ci?f(E,_,T.props.children,x,T.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Jn&&$g(L)===_.type)?(x=i(_,T.props),x.ref=$s(E,_,T),x.return=E,x):(x=wl(T.type,T.key,T.props,null,E.mode,x),x.ref=$s(E,_,T),x.return=E,x)}function c(E,_,T,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=rh(T,E.mode,x),_.return=E,_):(_=i(_,T.children||[]),_.return=E,_)}function f(E,_,T,x,L){return _===null||_.tag!==7?(_=Qr(T,E.mode,x,L),_.return=E,_):(_=i(_,T),_.return=E,_)}function p(E,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=nh(""+_,E.mode,T),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ua:return T=wl(_.type,_.key,_.props,null,E.mode,T),T.ref=$s(E,null,_),T.return=E,T;case ki:return _=rh(_,E.mode,T),_.return=E,_;case Jn:var x=_._init;return p(E,x(_._payload),T)}if(Js(_)||Fs(_))return _=Qr(_,E.mode,T,null),_.return=E,_;Ya(E,_)}return null}function m(E,_,T,x){var L=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return L!==null?null:l(E,_,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ua:return T.key===L?u(E,_,T,x):null;case ki:return T.key===L?c(E,_,T,x):null;case Jn:return L=T._init,m(E,_,L(T._payload),x)}if(Js(T)||Fs(T))return L!==null?null:f(E,_,T,x,null);Ya(E,T)}return null}function A(E,_,T,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(T)||null,l(_,E,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:return E=E.get(x.key===null?T:x.key)||null,u(_,E,x,L);case ki:return E=E.get(x.key===null?T:x.key)||null,c(_,E,x,L);case Jn:var M=x._init;return A(E,_,T,M(x._payload),L)}if(Js(x)||Fs(x))return E=E.get(T)||null,f(_,E,x,L,null);Ya(_,x)}return null}function C(E,_,T,x){for(var L=null,M=null,w=_,g=_=0,v=null;w!==null&&g<T.length;g++){w.index>g?(v=w,w=null):v=w.sibling;var S=m(E,w,T[g],x);if(S===null){w===null&&(w=v);break}t&&w&&S.alternate===null&&e(E,w),_=s(S,_,g),M===null?L=S:M.sibling=S,M=S,w=v}if(g===T.length)return n(E,w),Se&&jr(E,g),L;if(w===null){for(;g<T.length;g++)w=p(E,T[g],x),w!==null&&(_=s(w,_,g),M===null?L=w:M.sibling=w,M=w);return Se&&jr(E,g),L}for(w=r(E,w);g<T.length;g++)v=A(w,E,g,T[g],x),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?g:v.key),_=s(v,_,g),M===null?L=v:M.sibling=v,M=v);return t&&w.forEach(function(R){return e(E,R)}),Se&&jr(E,g),L}function P(E,_,T,x){var L=Fs(T);if(typeof L!="function")throw Error(z(150));if(T=L.call(T),T==null)throw Error(z(151));for(var M=L=null,w=_,g=_=0,v=null,S=T.next();w!==null&&!S.done;g++,S=T.next()){w.index>g?(v=w,w=null):v=w.sibling;var R=m(E,w,S.value,x);if(R===null){w===null&&(w=v);break}t&&w&&R.alternate===null&&e(E,w),_=s(R,_,g),M===null?L=R:M.sibling=R,M=R,w=v}if(S.done)return n(E,w),Se&&jr(E,g),L;if(w===null){for(;!S.done;g++,S=T.next())S=p(E,S.value,x),S!==null&&(_=s(S,_,g),M===null?L=S:M.sibling=S,M=S);return Se&&jr(E,g),L}for(w=r(E,w);!S.done;g++,S=T.next())S=A(w,E,g,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?g:S.key),_=s(S,_,g),M===null?L=S:M.sibling=S,M=S);return t&&w.forEach(function(b){return e(E,b)}),Se&&jr(E,g),L}function N(E,_,T,x){if(typeof T=="object"&&T!==null&&T.type===Ci&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ua:e:{for(var L=T.key,M=_;M!==null;){if(M.key===L){if(L=T.type,L===Ci){if(M.tag===7){n(E,M.sibling),_=i(M,T.props.children),_.return=E,E=_;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Jn&&$g(L)===M.type){n(E,M.sibling),_=i(M,T.props),_.ref=$s(E,M,T),_.return=E,E=_;break e}n(E,M);break}else e(E,M);M=M.sibling}T.type===Ci?(_=Qr(T.props.children,E.mode,x,T.key),_.return=E,E=_):(x=wl(T.type,T.key,T.props,null,E.mode,x),x.ref=$s(E,_,T),x.return=E,E=x)}return o(E);case ki:e:{for(M=T.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(E,_.sibling),_=i(_,T.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=rh(T,E.mode,x),_.return=E,E=_}return o(E);case Jn:return M=T._init,N(E,_,M(T._payload),x)}if(Js(T))return C(E,_,T,x);if(Fs(T))return P(E,_,T,x);Ya(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,T),_.return=E,E=_):(n(E,_),_=nh(T,E.mode,x),_.return=E,E=_),o(E)):n(E,_)}return N}var ts=D0(!0),M0=D0(!1),Kl=xr(null),Gl=null,Di=null,Od=null;function Ld(){Od=Di=Gl=null}function Dd(t){var e=Kl.current;Te(Kl),t._currentValue=e}function tf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){Gl=t,Od=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Od!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(Gl===null)throw Error(z(308));Di=t,Gl.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var Hr=null;function Md(t){Hr===null?Hr=[t]:Hr.push(t)}function V0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Md(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Md(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}function Hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,A=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(A,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(A,p,m):C,m==null)break e;p=Ce({},p,m);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=p):f=f.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ti|=o,t.lanes=o,t.memoizedState=p}}function Wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ia={},hn=xr(ia),Do=xr(ia),Mo=xr(ia);function Wr(t){if(t===ia)throw Error(z(174));return t}function Fd(t,e){switch(_e(Mo,e),_e(Do,t),_e(hn,ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dh(e,t)}Te(hn),_e(hn,e)}function ns(){Te(hn),Te(Do),Te(Mo)}function U0(t){Wr(Mo.current);var e=Wr(hn.current),n=Dh(e,t.type);e!==n&&(_e(Do,t),_e(hn,n))}function Ud(t){Do.current===t&&(Te(hn),Te(Do))}var Ae=xr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function jd(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var gl=Hn.ReactCurrentDispatcher,Xc=Hn.ReactCurrentBatchConfig,ei=0,ke=null,Me=null,ze=null,Xl=!1,fo=!1,Vo=0,f2=0;function rt(){throw Error(z(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Bd(t,e,n,r,i,s){if(ei=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?g2:y2,t=n(r,i),fo){s=0;do{if(fo=!1,Vo=0,25<=s)throw Error(z(301));s+=1,ze=Me=null,e.updateQueue=null,gl.current=v2,t=n(r,i)}while(fo)}if(gl.current=Jl,e=Me!==null&&Me.next!==null,ei=0,ze=Me=ke=null,Xl=!1,e)throw Error(z(300));return t}function $d(){var t=Vo!==0;return Vo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ke.memoizedState=ze=t:ze=ze.next=t,ze}function $t(){if(Me===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=ze===null?ke.memoizedState:ze.next;if(e!==null)ze=e,Me=t;else{if(t===null)throw Error(z(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?ke.memoizedState=ze=t:ze=ze.next=t}return ze}function Fo(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=$t(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ei&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ke.lanes|=f,ti|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,en(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=$t(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function j0(){}function z0(t,e){var n=ke,r=$t(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Hd(H0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Uo(9,$0.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(z(349));ei&30||B0(n,e,i)}return i}function B0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $0(t,e,n,r){e.value=n,e.getSnapshot=r,W0(e)&&q0(t)}function H0(t,e,n){return n(function(){W0(e)&&q0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function q0(t){var e=Dn(t,1);e!==null&&Zt(e,t,1,-1)}function qg(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=m2.bind(null,ke,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function K0(){return $t().memoizedState}function yl(t,e,n,r){var i=sn();ke.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&zd(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function Kg(t,e){return yl(8390656,8,t,e)}function Hd(t,e){return bu(2048,8,t,e)}function G0(t,e){return bu(4,2,t,e)}function Q0(t,e){return bu(4,4,t,e)}function Y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,Y0.bind(null,e,t),n)}function Wd(){}function J0(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z0(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function eE(t,e,n){return ei&21?(en(n,e)||(n=s0(),ke.lanes|=n,ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function d2(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{me=n,Xc.transition=r}}function tE(){return $t().memoizedState}function p2(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nE(t))rE(e,n);else if(n=V0(t,e,n,r),n!==null){var i=yt();Zt(n,t,r,i),iE(n,e,r)}}function m2(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nE(t))rE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var u=e.interleaved;u===null?(i.next=i,Md(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=V0(t,e,i,r),n!==null&&(i=yt(),Zt(n,t,r,i),iE(n,e,r))}}function nE(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function rE(t,e){fo=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}var Jl={readContext:Bt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},g2={readContext:Bt,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,Y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=p2.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:qg,useDebugValue:Wd,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=qg(!1),e=t[0];return t=d2.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=sn();if(Se){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),$e===null)throw Error(z(349));ei&30||B0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kg(H0.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,$0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=$e.identifierPrefix;if(Se){var n=Cn,r=kn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=f2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y2={readContext:Bt,useCallback:J0,useContext:Bt,useEffect:Hd,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:Q0,useMemo:Z0,useReducer:Jc,useRef:K0,useState:function(){return Jc(Fo)},useDebugValue:Wd,useDeferredValue:function(t){var e=$t();return eE(e,Me.memoizedState,t)},useTransition:function(){var t=Jc(Fo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:z0,useId:tE,unstable_isNewReconciler:!1},v2={readContext:Bt,useCallback:J0,useContext:Bt,useEffect:Hd,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:Q0,useMemo:Z0,useReducer:Zc,useRef:K0,useState:function(){return Zc(Fo)},useDebugValue:Wd,useDeferredValue:function(t){var e=$t();return Me===null?e.memoizedState=t:eE(e,Me.memoizedState,t)},useTransition:function(){var t=Zc(Fo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:z0,useId:tE,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=mr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Zt(e,t,i,r),ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=mr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Zt(e,t,i,r),ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=mr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Zt(e,t,r,n),ml(e,t,r))}};function Gg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function sE(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(e)?Jr:ut.current,r=e.contextTypes,s=(r=r!=null)?Zi(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(e)?Jr:ut.current,i.context=Zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ou.enqueueReplaceState(i,i.state,null),Ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e){try{var n="",r=e;do n+=qI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _2=typeof WeakMap=="function"?WeakMap:Map;function oE(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eu||(eu=!0,mf=r),sf(t,e)},n}function aE(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sf(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=O2.bind(null,t,e,n),e.then(t,t))}function Xg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var E2=Hn.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?M0(e,null,n,r):ts(e,t.child,n,r)}function Zg(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=Bd(t,e,n,r,s,i),n=$d(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Se&&n&&xd(e),e.flags|=1,gt(t,e,r,i),e.child)}function ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lE(t,e,s,r,i)):(t=wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function lE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(No(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return of(t,e,n,r,i)}function uE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Vi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Vi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Vi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Vi,Ct),Ct|=r;return gt(t,e,i,n),e.child}function cE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function of(t,e,n,r,i){var s=St(n)?Jr:ut.current;return s=Zi(e,s),Wi(e,i),n=Bd(t,e,n,r,s,i),r=$d(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Se&&r&&xd(e),e.flags|=1,gt(t,e,n,i),e.child)}function ty(t,e,n,r,i){if(St(n)){var s=!0;Hl(e)}else s=!1;if(Wi(e,i),e.stateNode===null)vl(t,e),sE(e,n,r),rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bt(c):(c=St(n)?Jr:ut.current,c=Zi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Qg(e,o,r,c),Zn=!1;var m=e.memoizedState;o.state=m,Ql(e,r,o,i),u=e.memoizedState,l!==r||m!==u||It.current||Zn?(typeof f=="function"&&(nf(e,n,f,r),u=e.memoizedState),(l=Zn||Gg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,F0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Kt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?Jr:ut.current,u=Zi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Qg(e,o,r,u),Zn=!1,m=e.memoizedState,o.state=m,Ql(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||It.current||Zn?(typeof A=="function"&&(nf(e,n,A,r),C=e.memoizedState),(c=Zn||Gg(e,n,c,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return af(t,e,n,r,s,i)}function af(t,e,n,r,i,s){cE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jg(e,n,!1),Mn(t,e,s);r=e.stateNode,E2.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,l,s)):gt(t,e,l,s),e.memoizedState=r.state,i&&jg(e,n,!0),e.child}function hE(t){var e=t.stateNode;e.pendingContext?Ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ug(t,e.context,!1),Fd(t,e.containerInfo)}function ny(t,e,n,r,i){return es(),bd(i),e.flags|=256,gt(t,e,n,r),e.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function fE(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ae,i&1),t===null)return ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=lf,t):qd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return w2(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lf,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qd(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,r){return r!==null&&bd(r),ts(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function w2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(z(422))),Xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ts(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=lf,s);if(!(e.mode&1))return Xa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=eh(s,r,void 0),Xa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Zt(r,t,i,-1))}return Jd(),r=eh(Error(z(421))),Xa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=L2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=fr(i.nextSibling),Nt=e,Se=!0,Qt=null,t!==null&&(Mt[Vt++]=kn,Mt[Vt++]=Cn,Mt[Vt++]=Zr,kn=t.id,Cn=t.overflow,Zr=e),e=qd(e,r.children),e.flags|=4096,e)}function ry(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tf(t.return,e,n)}function th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function dE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ry(t,n,e);else if(t.tag===19)ry(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}th(e,!0,n,null,s);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function T2(t,e,n){switch(e.tag){case 3:hE(e),es();break;case 5:U0(e);break;case 1:St(e.type)&&Hl(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?fE(t,e,n):(_e(Ae,Ae.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,uE(t,e,n)}return Mn(t,e,n)}var pE,cf,mE,gE;pE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cf=function(){};mE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(hn.current);var s=null;switch(n){case"input":i=Nh(t,i),r=Nh(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Lh(t,i),r=Lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bl)}Mh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(So.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(So.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function I2(t,e,n){var r=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return St(e.type)&&$l(),it(e),null;case 3:return r=e.stateNode,ns(),Te(It),Te(ut),jd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(vf(Qt),Qt=null))),cf(t,e),it(e),null;case 5:Ud(e);var i=Wr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)mE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return it(e),null}if(t=Wr(hn.current),Qa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[an]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)we(eo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":fg(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":pg(r,s),we("invalid",r)}Mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ga(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ga(r.textContent,l,t),i=["children",""+l]):So.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ja(r),dg(r,s,!0);break;case"textarea":ja(r),mg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[Lo]=r,pE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)we(eo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":fg(t,r),i=Nh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),we("invalid",t);break;case"textarea":pg(t,r),i=Lh(t,r),we("invalid",t);break;default:i=r}Mh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?K_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&W_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ao(t,u):typeof u=="number"&&Ao(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&gd(t,s,u,o))}switch(n){case"input":ja(t),dg(t,r,!1);break;case"textarea":ja(t),mg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)gE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Wr(Mo.current),Wr(hn.current),Qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return it(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Pt!==null&&e.mode&1&&!(e.flags&128))L0(),es(),e.flags|=98560,s=!1;else if(s=Qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[an]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Qt!==null&&(vf(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Fe===0&&(Fe=3):Jd())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return ns(),cf(t,e),t===null&&bo(e.stateNode.containerInfo),it(e),null;case 10:return Dd(e.type._context),it(e),null;case 17:return St(e.type)&&$l(),it(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hs(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yl(t),o!==null){for(e.flags|=128,Hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>is&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return it(e),null}else 2*Oe()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Xd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function S2(t,e){switch(Nd(e),e.tag){case 1:return St(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),Te(It),Te(ut),jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return ns(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Ja=!1,at=!1,A2=typeof WeakSet=="function"?WeakSet:Set,H=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function hf(t,e,n){try{n()}catch(r){xe(t,e,r)}}var iy=!1;function k2(t,e){if(Kh=Ul,t=w0(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)m=p,p=A;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:t,selectionRange:n},Ul=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,N=C.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Kt(e.type,P),N);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){xe(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=iy,iy=!1,C}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hf(e,n,s)}i=i.next}while(i!==r)}}function Lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yE(t){var e=t.alternate;e!==null&&(t.alternate=null,yE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[Lo],delete e[Xh],delete e[l2],delete e[u2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vE(t){return t.tag===5||t.tag===3||t.tag===4}function sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(r!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function pf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}var Ke=null,Gt=!1;function Qn(t,e,n){for(n=n.child;n!==null;)_E(t,e,n),n=n.sibling}function _E(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(ku,n)}catch{}switch(n.tag){case 5:at||Mi(n,e);case 6:var r=Ke,i=Gt;Ke=null,Qn(t,e,n),Ke=r,Gt=i,Ke!==null&&(Gt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Gt?(t=Ke,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Po(t)):Gc(Ke,n.stateNode));break;case 4:r=Ke,i=Gt,Ke=n.stateNode.containerInfo,Gt=!0,Qn(t,e,n),Ke=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hf(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!at&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Qn(t,e,n),at=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function oy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A2),e.forEach(function(r){var i=D2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Gt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Gt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(Ke===null)throw Error(z(160));_E(s,o,i),Ke=null,Gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)EE(e,t),e=e.sibling}function EE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),rn(t),r&4){try{po(3,t,t.return),Lu(3,t)}catch(P){xe(t,t.return,P)}try{po(5,t,t.return)}catch(P){xe(t,t.return,P)}}break;case 1:qt(e,t),rn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(qt(e,t),rn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{Ao(i,"")}catch(P){xe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&B_(i,s),Vh(l,o);var c=Vh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?K_(i,p):f==="dangerouslySetInnerHTML"?W_(i,p):f==="children"?Ao(i,p):gd(i,f,p,c)}switch(l){case"input":bh(i,s);break;case"textarea":$_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?zi(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?zi(i,!!s.multiple,s.defaultValue,!0):zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(P){xe(t,t.return,P)}}break;case 6:if(qt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){xe(t,t.return,P)}}break;case 3:if(qt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(P){xe(t,t.return,P)}break;case 4:qt(e,t),rn(t);break;case 13:qt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qd=Oe())),r&4&&oy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||f,qt(e,t),at=c):qt(e,t),rn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,A=m.child,m.tag){case 0:case 11:case 14:case 15:po(4,m,m.return);break;case 1:Mi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){xe(r,n,P)}}break;case 5:Mi(m,m.return);break;case 22:if(m.memoizedState!==null){ly(p);continue}}A!==null?(A.return=m,H=A):ly(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=q_("display",o))}catch(P){xe(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){xe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(e,t),rn(t),r&4&&oy(t);break;case 21:break;default:qt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vE(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var s=sy(t);pf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sy(t);df(t,l,o);break;default:throw Error(z(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function C2(t,e,n){H=t,wE(t)}function wE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ja;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=Ja;var c=at;if(Ja=o,(at=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?uy(i):u!==null?(u.return=o,H=u):uy(i);for(;s!==null;)H=s,wE(s),s=s.sibling;H=i,Ja=l,at=c}ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ay(t)}}function ay(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Lu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Po(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}at||e.flags&512&&ff(e)}catch(m){xe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ly(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function uy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{ff(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{ff(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var R2=Math.ceil,Zl=Hn.ReactCurrentDispatcher,Kd=Hn.ReactCurrentOwner,jt=Hn.ReactCurrentBatchConfig,ce=0,$e=null,De=null,Ye=0,Ct=0,Vi=xr(0),Fe=0,jo=null,ti=0,Du=0,Gd=0,mo=null,wt=null,Qd=0,is=1/0,Sn=null,eu=!1,mf=null,pr=null,Za=!1,ar=null,tu=0,go=0,gf=null,_l=-1,El=0;function yt(){return ce&6?Oe():_l!==-1?_l:_l=Oe()}function mr(t){return t.mode&1?ce&2&&Ye!==0?Ye&-Ye:h2.transition!==null?(El===0&&(El=s0()),El):(t=me,t!==0||(t=window.event,t=t===void 0?16:f0(t.type)),t):1}function Zt(t,e,n,r){if(50<go)throw go=0,gf=null,Error(z(185));ta(t,n,r),(!(ce&2)||t!==$e)&&(t===$e&&(!(ce&2)&&(Du|=n),Fe===4&&tr(t,Ye)),At(t,r),n===1&&ce===0&&!(e.mode&1)&&(is=Oe()+500,Nu&&Nr()))}function At(t,e){var n=t.callbackNode;hS(t,e);var r=Fl(t,t===$e?Ye:0);if(r===0)n!==null&&vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vg(n),e===1)t.tag===0?c2(cy.bind(null,t)):N0(cy.bind(null,t)),o2(function(){!(ce&6)&&Nr()}),n=null;else{switch(o0(r)){case 1:n=wd;break;case 4:n=r0;break;case 16:n=Vl;break;case 536870912:n=i0;break;default:n=Vl}n=PE(n,TE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function TE(t,e){if(_l=-1,El=0,ce&6)throw Error(z(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=Fl(t,t===$e?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nu(t,r);else{e=r;var i=ce;ce|=2;var s=SE();($e!==t||Ye!==e)&&(Sn=null,is=Oe()+500,Gr(t,e));do try{N2();break}catch(l){IE(t,l)}while(!0);Ld(),Zl.current=s,ce=i,De!==null?e=0:($e=null,Ye=0,e=Fe)}if(e!==0){if(e===2&&(i=Bh(t),i!==0&&(r=i,e=yf(t,i))),e===1)throw n=jo,Gr(t,0),tr(t,r),At(t,Oe()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!P2(i)&&(e=nu(t,r),e===2&&(s=Bh(t),s!==0&&(r=s,e=yf(t,s))),e===1))throw n=jo,Gr(t,0),tr(t,r),At(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:zr(t,wt,Sn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=Qd+500-Oe(),10<e)){if(Fl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yh(zr.bind(null,t,wt,Sn),e);break}zr(t,wt,Sn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R2(r/1960))-r,10<r){t.timeoutHandle=Yh(zr.bind(null,t,wt,Sn),r);break}zr(t,wt,Sn);break;case 5:zr(t,wt,Sn);break;default:throw Error(z(329))}}}return At(t,Oe()),t.callbackNode===n?TE.bind(null,t):null}function yf(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=nu(t,e),t!==2&&(e=wt,wt=n,e!==null&&vf(e)),t}function vf(t){wt===null?wt=t:wt.push.apply(wt,t)}function P2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Gd,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function cy(t){if(ce&6)throw Error(z(327));qi();var e=Fl(t,0);if(!(e&1))return At(t,Oe()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var r=Bh(t);r!==0&&(e=r,n=yf(t,r))}if(n===1)throw n=jo,Gr(t,0),tr(t,e),At(t,Oe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,wt,Sn),At(t,Oe()),null}function Yd(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(is=Oe()+500,Nu&&Nr())}}function ni(t){ar!==null&&ar.tag===0&&!(ce&6)&&qi();var e=ce;ce|=1;var n=jt.transition,r=me;try{if(jt.transition=null,me=1,t)return t()}finally{me=r,jt.transition=n,ce=e,!(ce&6)&&Nr()}}function Xd(){Ct=Vi.current,Te(Vi)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,s2(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:ns(),Te(It),Te(ut),jd();break;case 5:Ud(r);break;case 4:ns();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Dd(r.type._context);break;case 22:case 23:Xd()}n=n.return}if($e=t,De=t=gr(t.current,null),Ye=Ct=e,Fe=0,jo=null,Gd=Du=ti=0,wt=mo=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hr=null}return t}function IE(t,e){do{var n=De;try{if(Ld(),gl.current=Jl,Xl){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xl=!1}if(ei=0,ze=Me=ke=null,fo=!1,Vo=0,Kd.current=null,n===null||n.return===null){Fe=1,jo=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Xg(o);if(A!==null){A.flags&=-257,Jg(A,o,l,s,e),A.mode&1&&Yg(s,c,e),e=A,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){Yg(s,c,e),Jd();break e}u=Error(z(426))}}else if(Se&&l.mode&1){var N=Xg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Jg(N,o,l,s,e),bd(rs(u,l));break e}}s=u=rs(u,l),Fe!==4&&(Fe=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=oE(s,u,e);Hg(s,E);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(pr===null||!pr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=aE(s,l,e);Hg(s,x);break e}}s=s.return}while(s!==null)}kE(n)}catch(L){e=L,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function SE(){var t=Zl.current;return Zl.current=Jl,t===null?Jl:t}function Jd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||!(ti&268435455)&&!(Du&268435455)||tr($e,Ye)}function nu(t,e){var n=ce;ce|=2;var r=SE();($e!==t||Ye!==e)&&(Sn=null,Gr(t,e));do try{x2();break}catch(i){IE(t,i)}while(!0);if(Ld(),ce=n,Zl.current=r,De!==null)throw Error(z(261));return $e=null,Ye=0,Fe}function x2(){for(;De!==null;)AE(De)}function N2(){for(;De!==null&&!nS();)AE(De)}function AE(t){var e=RE(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?kE(t):De=e,Kd.current=null}function kE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S2(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=I2(n,e,Ct),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function zr(t,e,n){var r=me,i=jt.transition;try{jt.transition=null,me=1,b2(t,e,n,r)}finally{jt.transition=i,me=r}return null}function b2(t,e,n,r){do qi();while(ar!==null);if(ce&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fS(t,s),t===$e&&(De=$e=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,PE(Vl,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=me;me=1;var l=ce;ce|=4,Kd.current=null,k2(t,n),EE(n,t),JS(Gh),Ul=!!Kh,Gh=Kh=null,t.current=n,C2(n),rS(),ce=l,me=o,jt.transition=s}else t.current=n;if(Za&&(Za=!1,ar=t,tu=i),s=t.pendingLanes,s===0&&(pr=null),oS(n.stateNode),At(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eu)throw eu=!1,t=mf,mf=null,t;return tu&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===gf?go++:(go=0,gf=t):go=0,Nr(),null}function qi(){if(ar!==null){var t=o0(tu),e=jt.transition,n=me;try{if(jt.transition=null,me=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,tu=0,ce&6)throw Error(z(331));var i=ce;for(ce|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:po(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,A=f.return;if(yE(f),f===c){H=null;break}if(m!==null){m.return=A,H=m;break}H=A}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,H=T;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lu(9,l)}}catch(L){xe(l,l.return,L)}if(l===o){H=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,H=x;break e}H=l.return}}if(ce=i,Nr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(ku,t)}catch{}r=!0}return r}finally{me=n,jt.transition=e}}return!1}function hy(t,e,n){e=rs(n,e),e=oE(t,e,1),t=dr(t,e,1),e=yt(),t!==null&&(ta(t,1,e),At(t,e))}function xe(t,e,n){if(t.tag===3)hy(t,t,n);else for(;e!==null;){if(e.tag===3){hy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=rs(n,t),t=aE(e,t,1),e=dr(e,t,1),t=yt(),e!==null&&(ta(e,1,t),At(e,t));break}}e=e.return}}function O2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ye&n)===n&&(Fe===4||Fe===3&&(Ye&130023424)===Ye&&500>Oe()-Qd?Gr(t,0):Gd|=n),At(t,e)}function CE(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=yt();t=Dn(t,e),t!==null&&(ta(t,e,n),At(t,n))}function L2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),CE(t,n)}function D2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),CE(t,n)}var RE;RE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,T2(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Se&&e.flags&1048576&&b0(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vl(t,e),t=e.pendingProps;var i=Zi(e,ut.current);Wi(e,n),i=Bd(null,e,r,t,i,n);var s=$d();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vd(e),i.updater=Ou,e.stateNode=i,i._reactInternals=e,rf(e,r,t,n),e=af(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&xd(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=V2(r),t=Kt(r,t),i){case 0:e=of(null,e,r,t,n);break e;case 1:e=ty(null,e,r,t,n);break e;case 11:e=Zg(null,e,r,t,n);break e;case 14:e=ey(null,e,r,Kt(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),of(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),ty(t,e,r,i,n);case 3:e:{if(hE(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,F0(t,e),Ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rs(Error(z(423)),e),e=ny(t,e,r,n,i);break e}else if(r!==i){i=rs(Error(z(424)),e),e=ny(t,e,r,n,i);break e}else for(Pt=fr(e.stateNode.containerInfo.firstChild),Nt=e,Se=!0,Qt=null,n=M0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),r===i){e=Mn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return U0(e),t===null&&ef(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qh(r,i)?o=null:s!==null&&Qh(r,s)&&(e.flags|=32),cE(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&ef(e),null;case 13:return fE(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ts(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Zg(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Kl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!It.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),tf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=Bt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),ey(t,e,r,i,n);case 15:return lE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),vl(t,e),e.tag=1,St(r)?(t=!0,Hl(e)):t=!1,Wi(e,n),sE(e,r,i),rf(e,r,i,n),af(null,e,r,!0,t,n);case 19:return dE(t,e,n);case 22:return uE(t,e,n)}throw Error(z(156,e.tag))};function PE(t,e){return n0(t,e)}function M2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new M2(t,e,n,r)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V2(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===_d)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Qr(n.children,i,s,e);case yd:o=8,i|=8;break;case Ch:return t=Ut(12,n,e,i|2),t.elementType=Ch,t.lanes=s,t;case Rh:return t=Ut(13,n,e,i),t.elementType=Rh,t.lanes=s,t;case Ph:return t=Ut(19,n,e,i),t.elementType=Ph,t.lanes=s,t;case U_:return Mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V_:o=10;break e;case F_:o=9;break e;case vd:o=11;break e;case _d:o=14;break e;case Jn:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=U_,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function F2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ep(t,e,n,r,i,s,o,l,u){return t=new F2(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(s),t}function U2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xE(t){if(!t)return wr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(St(n))return x0(t,n,e)}return e}function NE(t,e,n,r,i,s,o,l,u){return t=ep(n,r,!0,t,i,s,o,l,u),t.context=xE(null),n=t.current,r=yt(),i=mr(n),s=Nn(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ta(t,i,r),At(t,r),t}function Vu(t,e,n,r){var i=e.current,s=yt(),o=mr(i);return n=xE(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Zt(t,i,o,s),ml(t,i,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tp(t,e){fy(t,e),(t=t.alternate)&&fy(t,e)}function j2(){return null}var bE=typeof reportError=="function"?reportError:function(t){console.error(t)};function np(t){this._internalRoot=t}Fu.prototype.render=np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Vu(t,e,null,null)};Fu.prototype.unmount=np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ni(function(){Vu(null,t,null,null)}),e[Ln]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=u0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&h0(t)}};function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dy(){}function z2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ru(o);s.call(c)}}var o=NE(e,r,t,0,null,!1,!1,"",dy);return t._reactRootContainer=o,t[Ln]=o.current,bo(t.nodeType===8?t.parentNode:t),ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ru(u);l.call(c)}}var u=ep(t,0,!1,null,null,!1,!1,"",dy);return t._reactRootContainer=u,t[Ln]=u.current,bo(t.nodeType===8?t.parentNode:t),ni(function(){Vu(e,u,n,r)}),u}function ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ru(o);l.call(u)}}Vu(e,o,t,i)}else o=z2(n,e,t,i,r);return ru(o)}a0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Td(e,n|1),At(e,Oe()),!(ce&6)&&(is=Oe()+500,Nr()))}break;case 13:ni(function(){var r=Dn(t,1);if(r!==null){var i=yt();Zt(r,t,1,i)}}),tp(t,1)}};Id=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=yt();Zt(e,t,134217728,n)}tp(t,134217728)}};l0=function(t){if(t.tag===13){var e=mr(t),n=Dn(t,e);if(n!==null){var r=yt();Zt(n,t,e,r)}tp(t,e)}};u0=function(){return me};c0=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Uh=function(t,e,n){switch(e){case"input":if(bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xu(r);if(!i)throw Error(z(90));z_(r),bh(r,i)}}}break;case"textarea":$_(t,n);break;case"select":e=n.value,e!=null&&zi(t,!!n.multiple,e,!1)}};Y_=Yd;X_=ni;var B2={usingClientEntryPoint:!1,Events:[ra,Ni,xu,G_,Q_,Yd]},Ws={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$2={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||j2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{ku=el.inject($2),cn=el}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B2;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(z(200));return U2(t,e,null,n)};Ot.createRoot=function(t,e){if(!rp(t))throw Error(z(299));var n=!1,r="",i=bE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ep(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,bo(t.nodeType===8?t.parentNode:t),new np(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=e0(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return ni(t)};Ot.hydrate=function(t,e,n){if(!Uu(e))throw Error(z(200));return ju(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!rp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=NE(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fu(e)};Ot.render=function(t,e,n){if(!Uu(e))throw Error(z(200));return ju(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!Uu(t))throw Error(z(40));return t._reactRootContainer?(ni(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Ot.unstable_batchedUpdates=Yd;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return ju(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function OE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OE)}catch(t){console.error(t)}}OE(),O_.exports=Ot;var ip=O_.exports,py=ip;Ah.createRoot=py.createRoot,Ah.hydrateRoot=py.hydrateRoot;const H2="/neighborhood-value-plus/assets/logo_notext-CB4EPGfG.png",W2="/neighborhood-value-plus/assets/logo_text-BeXtmdLt.png";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function q2(t,e,n){return(e=G2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function my(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?my(Object(n),!0).forEach(function(r){q2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):my(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function K2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function G2(t){var e=K2(t,"string");return typeof e=="symbol"?e:e+""}const gy=()=>{};let sp={},LE={},DE=null,ME={mark:gy,measure:gy};try{typeof window<"u"&&(sp=window),typeof document<"u"&&(LE=document),typeof MutationObserver<"u"&&(DE=MutationObserver),typeof performance<"u"&&(ME=performance)}catch{}const{userAgent:yy=""}=sp.navigator||{},Tr=sp,Ie=LE,vy=DE,tl=ME;Tr.document;const Wn=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",VE=~yy.indexOf("MSIE")||~yy.indexOf("Trident/");var Q2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Y2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,FE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},X2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},UE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ct="classic",zu="duotone",J2="sharp",Z2="sharp-duotone",jE=[ct,zu,J2,Z2],eA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},tA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},nA=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),rA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},iA=["fak","fa-kit","fakd","fa-kit-duotone"],_y={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},sA=["kit"],oA={kit:{"fa-kit":"fak"}},aA=["fak","fakd"],lA={kit:{fak:"fa-kit"}},Ey={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],cA=["fak","fa-kit","fakd","fa-kit-duotone"],hA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},fA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},dA={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},_f={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},pA=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ef=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...uA,...pA],mA=["solid","regular","light","thin","duotone","brands"],zE=[1,2,3,4,5,6,7,8,9,10],gA=zE.concat([11,12,13,14,15,16,17,18,19,20]),yA=[...Object.keys(dA),...mA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nl.GROUP,nl.SWAP_OPACITY,nl.PRIMARY,nl.SECONDARY].concat(zE.map(t=>"".concat(t,"x"))).concat(gA.map(t=>"w-".concat(t))),vA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Vn="___FONT_AWESOME___",wf=16,BE="fa",$E="svg-inline--fa",ri="data-fa-i2svg",Tf="data-fa-pseudo-element",_A="data-fa-pseudo-element-pending",op="data-prefix",ap="data-icon",wy="fontawesome-i2svg",EA="async",wA=["HTML","HEAD","STYLE","SCRIPT"],HE=(()=>{try{return!0}catch{return!1}})();function sa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ct]}})}const WE=j({},FE);WE[ct]=j(j(j(j({},{"fa-duotone":"duotone"}),FE[ct]),_y.kit),_y["kit-duotone"]);const TA=sa(WE),If=j({},rA);If[ct]=j(j(j(j({},{duotone:"fad"}),If[ct]),Ey.kit),Ey["kit-duotone"]);const Ty=sa(If),Sf=j({},_f);Sf[ct]=j(j({},Sf[ct]),lA.kit);const lp=sa(Sf),Af=j({},fA);Af[ct]=j(j({},Af[ct]),oA.kit);sa(Af);const IA=Q2,qE="fa-layers-text",SA=Y2,AA=j({},eA);sa(AA);const kA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ih=X2,CA=[...sA,...yA],yo=Tr.FontAwesomeConfig||{};function RA(t){var e=Ie.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function PA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ie&&typeof Ie.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=PA(RA(n));i!=null&&(yo[r]=i)});const KE={styleDefault:"solid",familyDefault:ct,cssPrefix:BE,replacementClass:$E,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yo.familyPrefix&&(yo.cssPrefix=yo.familyPrefix);const ss=j(j({},KE),yo);ss.autoReplaceSvg||(ss.observeMutations=!1);const q={};Object.keys(KE).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){ss[t]=e,vo.forEach(n=>n(q))},get:function(){return ss[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){ss.cssPrefix=t,vo.forEach(e=>e(q))},get:function(){return ss.cssPrefix}});Tr.FontAwesomeConfig=q;const vo=[];function xA(t){return vo.push(t),()=>{vo.splice(vo.indexOf(t),1)}}const Yn=wf,ln={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function NA(t){if(!t||!Wn)return;const e=Ie.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ie.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ie.head.insertBefore(e,r),t}const bA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zo(){let t=12,e="";for(;t-- >0;)e+=bA[Math.random()*62|0];return e}function vs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function up(t){return t.classList?vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function GE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OA(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(GE(t[n]),'" '),"").trim()}function Bu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function cp(t){return t.size!==ln.size||t.x!==ln.x||t.y!==ln.y||t.rotate!==ln.rotate||t.flipX||t.flipY}function LA(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function DA(t){let{transform:e,width:n=wf,height:r=wf,startCentered:i=!1}=t,s="";return i&&VE?s+="translate(".concat(e.x/Yn-n/2,"em, ").concat(e.y/Yn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Yn,"em), calc(-50% + ").concat(e.y/Yn,"em)) "):s+="translate(".concat(e.x/Yn,"em, ").concat(e.y/Yn,"em) "),s+="scale(".concat(e.size/Yn*(e.flipX?-1:1),", ").concat(e.size/Yn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var MA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function QE(){const t=BE,e=$E,n=q.cssPrefix,r=q.replacementClass;let i=MA;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let Iy=!1;function sh(){q.autoAddCss&&!Iy&&(NA(QE()),Iy=!0)}var VA={mixout(){return{dom:{css:QE,insertCss:sh}}},hooks(){return{beforeDOMElementCreation(){sh()},beforeI2svg(){sh()}}}};const Fn=Tr||{};Fn[Vn]||(Fn[Vn]={});Fn[Vn].styles||(Fn[Vn].styles={});Fn[Vn].hooks||(Fn[Vn].hooks={});Fn[Vn].shims||(Fn[Vn].shims=[]);var un=Fn[Vn];const YE=[],XE=function(){Ie.removeEventListener("DOMContentLoaded",XE),iu=1,YE.map(t=>t())};let iu=!1;Wn&&(iu=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),iu||Ie.addEventListener("DOMContentLoaded",XE));function FA(t){Wn&&(iu?setTimeout(t,0):YE.push(t))}function oa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?GE(t):"<".concat(e," ").concat(OA(n),">").concat(r.map(oa).join(""),"</").concat(e,">")}function Sy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var oh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=l(f,e[c],c,e);return f};function UA(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function kf(t){const e=UA(t);return e.length===1?e[0].toString(16):null}function jA(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ay(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Cf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Ay(e);typeof un.hooks.addPack=="function"&&!r?un.hooks.addPack(t,Ay(e)):un.styles[t]=j(j({},un.styles[t]||{}),i),t==="fas"&&Cf("fa",e)}const{styles:Bo,shims:zA}=un,JE=Object.keys(lp),BA=JE.reduce((t,e)=>(t[e]=Object.keys(lp[e]),t),{});let hp=null,ZE={},ew={},tw={},nw={},rw={};function $A(t){return~CA.indexOf(t)}function HA(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!$A(i)?i:null}const iw=()=>{const t=r=>oh(Bo,(i,s,o)=>(i[o]=oh(s,r,{}),i),{});ZE=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),ew=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),rw=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in Bo||q.autoFetchSvg,n=oh(zA,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});tw=n.names,nw=n.unicodes,hp=$u(q.styleDefault,{family:q.familyDefault})};xA(t=>{hp=$u(t.styleDefault,{family:q.familyDefault})});iw();function fp(t,e){return(ZE[t]||{})[e]}function WA(t,e){return(ew[t]||{})[e]}function qr(t,e){return(rw[t]||{})[e]}function sw(t){return tw[t]||{prefix:null,iconName:null}}function qA(t){const e=nw[t],n=fp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ir(){return hp}const ow=()=>({prefix:null,iconName:null,rest:[]});function KA(t){let e=ct;const n=JE.reduce((r,i)=>(r[i]="".concat(q.cssPrefix,"-").concat(i),r),{});return jE.forEach(r=>{(t.includes(n[r])||t.some(i=>BA[r].includes(i)))&&(e=r)}),e}function $u(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ct}=e,r=TA[n][t];if(n===zu&&!t)return"fad";const i=Ty[n][t]||Ty[n][r],s=t in un.styles?t:null;return i||s||null}function GA(t){let e=[],n=null;return t.forEach(r=>{const i=HA(q.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function ky(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Hu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=Ef.concat(cA),s=ky(t.filter(p=>i.includes(p))),o=ky(t.filter(p=>!Ef.includes(p))),l=s.filter(p=>(r=p,!UE.includes(p))),[u=null]=l,c=KA(s),f=j(j({},GA(o)),{},{prefix:$u(u,{family:c})});return j(j(j({},f),JA({values:t,family:c,styles:Bo,config:q,canonical:f,givenPrefix:r})),QA(n,r,f))}function QA(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?sw(i):{},o=qr(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!Bo.far&&Bo.fas&&!q.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const YA=jE.filter(t=>t!==ct||t!==zu),XA=Object.keys(_f).filter(t=>t!==ct).map(t=>Object.keys(_f[t])).flat();function JA(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,l=n===zu,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||c||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&YA.includes(n)&&(Object.keys(s).find(m=>XA.includes(m))||o.autoFetchSvg)){const m=nA.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=qr(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Ir()||"fas"),r}class ZA{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=j(j({},this.definitions[s]||{}),i[s]),Cf(s,i[s]);const o=lp[ct][s];o&&Cf(o,i[s]),iw()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let Cy=[],Fi={};const Ki={},ek=Object.keys(Ki);function tk(t,e){let{mixoutsTo:n}=e;return Cy=t,Fi={},Object.keys(Ki).forEach(r=>{ek.indexOf(r)===-1&&delete Ki[r]}),Cy.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Fi[o]||(Fi[o]=[]),Fi[o].push(s[o])})}r.provides&&r.provides(Ki)}),n}function Rf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Fi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ii(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Fi[t]||[]).forEach(s=>{s.apply(null,n)})}function Sr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ki[t]?Ki[t].apply(null,e):void 0}function Pf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ir();if(e)return e=qr(n,e)||e,Sy(aw.definitions,n,e)||Sy(un.styles,n,e)}const aw=new ZA,nk=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,ii("noAuto")},rk={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wn?(ii("beforeI2svg",t),Sr("pseudoElements2svg",t),Sr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,FA(()=>{sk({autoReplaceSvgRoot:e}),ii("watch",t)})}},ik={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:qr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=$u(t[0]);return{prefix:n,iconName:qr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(IA))){const e=Hu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ir(),iconName:qr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ir();return{prefix:e,iconName:qr(e,t)||t}}}},Dt={noAuto:nk,config:q,dom:rk,parse:ik,library:aw,findIconDefinition:Pf,toHtml:oa},sk=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ie}=t;(Object.keys(un.styles).length>0||q.autoFetchSvg)&&Wn&&q.autoReplaceSvg&&Dt.dom.i2svg({node:e})};function Wu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>oa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Wn)return;const n=Ie.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ok(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(cp(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Bu(j(j({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ak(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function dp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:f,watchable:p=!1}=t,{width:m,height:A}=n.found?n:e,C=aA.includes(r),P=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(L=>f.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(f.classes).join(" ");let N={children:[],attributes:j(j({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:P,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(A)})};const E=C&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/A*16*.0625,"em")}:{};p&&(N.attributes[ri]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||zo())},children:[l]}),delete N.attributes.title);const _=j(j({},N),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:j(j({},E),f.styles)}),{children:T,attributes:x}=n.found&&e.found?Sr("generateAbstractMask",_)||{children:[],attributes:{}}:Sr("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=T,_.attributes=x,o?ak(_):ok(_)}function Ry(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u=j(j(j({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ri]="");const c=j({},o.styles);cp(i)&&(c.transform=DA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Bu(c);f.length>0&&(u.style=f);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function lk(t){const{content:e,title:n,extra:r}=t,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Bu(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ah}=un;function xf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(ih.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(ih.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(ih.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const uk={found:!1,width:512,height:512};function ck(t,e){!HE&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Nf(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=Ir()),new Promise((r,i)=>{if(n==="fa"){const s=sw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ah[e]&&ah[e][t]){const s=ah[e][t];return r(xf(s))}ck(t,e),r(j(j({},uk),{},{icon:q.showMissingIcons&&t?Sr("missingIconAbstract")||{}:{}}))})}const Py=()=>{},bf=q.measurePerformance&&tl&&tl.mark&&tl.measure?tl:{mark:Py,measure:Py},to='FA "6.7.2"',hk=t=>(bf.mark("".concat(to," ").concat(t," begins")),()=>lw(t)),lw=t=>{bf.mark("".concat(to," ").concat(t," ends")),bf.measure("".concat(to," ").concat(t),"".concat(to," ").concat(t," begins"),"".concat(to," ").concat(t," ends"))};var pp={begin:hk,end:lw};const Tl=()=>{};function xy(t){return typeof(t.getAttribute?t.getAttribute(ri):null)=="string"}function fk(t){const e=t.getAttribute?t.getAttribute(op):null,n=t.getAttribute?t.getAttribute(ap):null;return e&&n}function dk(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function pk(){return q.autoReplaceSvg===!0?Il.replace:Il[q.autoReplaceSvg]||Il.replace}function mk(t){return Ie.createElementNS("http://www.w3.org/2000/svg",t)}function gk(t){return Ie.createElement(t)}function uw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?mk:gk}=e;if(typeof t=="string")return Ie.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(uw(s,{ceFn:n}))}),r}function yk(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Il={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(uw(n),e)}),e.getAttribute(ri)===null&&q.keepOriginalSource){let n=Ie.createComment(yk(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~up(e).indexOf(q.replacementClass))return Il.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===q.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>oa(s)).join(`
`);e.setAttribute(ri,""),e.innerHTML=i}};function Ny(t){t()}function cw(t,e){const n=typeof e=="function"?e:Tl;if(t.length===0)n();else{let r=Ny;q.mutateApproach===EA&&(r=Tr.requestAnimationFrame||Ny),r(()=>{const i=pk(),s=pp.begin("mutate");t.map(i),s(),n()})}}let mp=!1;function hw(){mp=!0}function Of(){mp=!1}let su=null;function by(t){if(!vy||!q.observeMutations)return;const{treeCallback:e=Tl,nodeCallback:n=Tl,pseudoElementsCallback:r=Tl,observeMutationsRoot:i=Ie}=t;su=new vy(s=>{if(mp)return;const o=Ir();vs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!xy(l.addedNodes[0])&&(q.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&q.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&xy(l.target)&&~kA.indexOf(l.attributeName))if(l.attributeName==="class"&&fk(l.target)){const{prefix:u,iconName:c}=Hu(up(l.target));l.target.setAttribute(op,u||o),c&&l.target.setAttribute(ap,c)}else dk(l.target)&&n(l.target)})}),Wn&&su.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vk(){su&&su.disconnect()}function _k(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Ek(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Hu(up(t));return i.prefix||(i.prefix=Ir()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WA(i.prefix,t.innerText)||fp(i.prefix,kf(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function wk(t){const e=vs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||zo()):(e["aria-hidden"]="true",e.focusable="false")),e}function Tk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ln,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Ek(t),s=wk(t),o=Rf("parseNodeAttributes",{},t);let l=e.styleParser?_k(t):[];return j({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ln,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}const{styles:Ik}=un;function fw(t){const e=q.autoReplaceSvg==="nest"?Oy(t,{styleParser:!1}):Oy(t);return~e.extra.classes.indexOf(qE)?Sr("generateLayersText",t,e):Sr("generateSvgReplacementMutation",t,e)}function Sk(){return[...iA,...Ef]}function Ly(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wn)return Promise.resolve();const n=Ie.documentElement.classList,r=f=>n.add("".concat(wy,"-").concat(f)),i=f=>n.remove("".concat(wy,"-").concat(f)),s=q.autoFetchSvg?Sk():UE.concat(Object.keys(Ik));s.includes("fa")||s.push("fa");const o=[".".concat(qE,":not([").concat(ri,"])")].concat(s.map(f=>".".concat(f,":not([").concat(ri,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=vs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=pp.begin("onTree"),c=l.reduce((f,p)=>{try{const m=fw(p);m&&f.push(m)}catch(m){HE||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{cw(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(m=>{u(),p(m)})})}function Ak(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fw(t).then(n=>{n&&cw([n],e)})}function kk(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Pf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Pf(i||{})),t(r,j(j({},n),{},{mask:i}))}}const Ck=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ln,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:A}=t;return Wu(j({type:"icon"},t),()=>(ii("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(l||zo()):(c["aria-hidden"]="true",c.focusable="false")),dp({icons:{main:xf(A),mask:i?xf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:j(j({},ln),n),symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:f,classes:u}})))};var Rk={mixout(){return{icon:kk(Ck)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ly,t.nodeCallback=Ak,t}}},provides(t){t.i2svg=function(e){const{node:n=Ie,callback:r=()=>{}}=e;return Ly(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:f,extra:p}=n;return new Promise((m,A)=>{Promise.all([Nf(r,o),c.iconName?Nf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[P,N]=C;m([e,dp({icons:{main:P,mask:N},prefix:o,iconName:r,transform:l,symbol:u,maskId:f,title:i,titleId:s,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Bu(o);l.length>0&&(r.style=l);let u;return cp(s)&&(u=Sr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Pk={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Wu({type:"layer"},()=>{ii("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},xk={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Wu({type:"counter",content:t},()=>(ii("beforeDOMElementCreation",{content:t,params:e}),lk({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},Nk={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ln,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Wu({type:"text",content:t},()=>(ii("beforeDOMElementCreation",{content:t,params:e}),Ry({content:t,transform:j(j({},ln),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(VE){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Ry({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const bk=new RegExp('"',"ug"),Dy=[1105920,1112319],My=j(j(j(j({},{FontAwesome:{normal:"fas",400:"fas"}}),tA),vA),hA),Lf=Object.keys(My).reduce((t,e)=>(t[e.toLowerCase()]=My[e],t),{}),Ok=Object.keys(Lf).reduce((t,e)=>{const n=Lf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Lk(t){const e=t.replace(bk,""),n=jA(e,0),r=n>=Dy[0]&&n<=Dy[1],i=e.length===2?e[0]===e[1]:!1;return{value:kf(i?e[0]:e),isSecondary:r||i}}function Dk(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Lf[n]||{})[i]||Ok[n]}function Vy(t,e){const n="".concat(_A).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=vs(t.children).filter(m=>m.getAttribute(Tf)===e)[0],l=Tr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(SA),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let A=Dk(u,f);const{value:C,isSecondary:P}=Lk(m),N=c[0].startsWith("FontAwesome");let E=fp(A,C),_=E;if(N){const T=qA(C);T.iconName&&T.prefix&&(E=T.iconName,A=T.prefix)}if(E&&!P&&(!o||o.getAttribute(op)!==A||o.getAttribute(ap)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const T=Tk(),{extra:x}=T;x.attributes[Tf]=e,Nf(E,A).then(L=>{const M=dp(j(j({},T),{},{icons:{main:L,mask:ow()},prefix:A,iconName:_,extra:x,watchable:!0})),w=Ie.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=M.map(g=>oa(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Mk(t){return Promise.all([Vy(t,"::before"),Vy(t,"::after")])}function Vk(t){return t.parentNode!==document.head&&!~wA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fy(t){if(Wn)return new Promise((e,n)=>{const r=vs(t.querySelectorAll("*")).filter(Vk).map(Mk),i=pp.begin("searchPseudoElements");hw(),Promise.all(r).then(()=>{i(),Of(),e()}).catch(()=>{i(),Of(),n()})})}var Fk={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Fy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ie}=e;q.searchPseudoElements&&Fy(n)}}};let Uy=!1;var Uk={mixout(){return{dom:{unwatch(){hw(),Uy=!0}}}},hooks(){return{bootstrap(){by(Rf("mutationObserverCallbacks",{}))},noAuto(){vk()},watch(t){const{observeMutationsRoot:e}=t;Uy?Of():by(Rf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const jy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var jk={mixout(){return{parse:{transform:t=>jy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=jy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:j({},m.outer),children:[{tag:"g",attributes:j({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:j(j({},n.icon.attributes),m.path)}]}]}}}};const lh={x:0,y:0,width:"100%",height:"100%"};function zy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zk(t){return t.tag==="g"?t.children:[t]}var Bk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Hu(n.split(" ").map(i=>i.trim())):ow();return r.prefix||(r.prefix=Ir()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:f,icon:p}=s,m=LA({transform:l,containerWidth:f,iconWidth:u}),A={tag:"rect",attributes:j(j({},lh),{},{fill:"white"})},C=c.children?{children:c.children.map(zy)}:{},P={tag:"g",attributes:j({},m.inner),children:[zy(j({tag:c.tag,attributes:j(j({},c.attributes),m.path)},C))]},N={tag:"g",attributes:j({},m.outer),children:[P]},E="mask-".concat(o||zo()),_="clip-".concat(o||zo()),T={tag:"mask",attributes:j(j({},lh),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,N]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:zk(p)},T]};return n.push(x,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(E,")")},lh)}),{children:n,attributes:r}}}},$k={provides(t){let e=!1;Tr.matchMedia&&(e=Tr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:j(j({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=j(j({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:j(j({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:j(j({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:j(j({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:j(j({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:j(j({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Hk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Wk=[VA,Rk,Pk,xk,Nk,Fk,Uk,jk,Bk,$k,Hk];tk(Wk,{mixoutsTo:Dt});Dt.noAuto;Dt.config;Dt.library;Dt.dom;const Df=Dt.parse;Dt.findIconDefinition;Dt.toHtml;const qk=Dt.icon;Dt.layer;Dt.text;Dt.counter;var dw={exports:{}},Kk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Gk=Kk,Qk=Gk;function pw(){}function mw(){}mw.resetWarningCache=pw;var Yk=function(){function t(r,i,s,o,l,u){if(u!==Qk){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mw,resetWarningCache:pw};return n.PropTypes=n,n};dw.exports=Yk();var Xk=dw.exports;const re=w_(Xk);function By(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function on(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?By(Object(n),!0).forEach(function(r){Ui(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):By(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ou(t){"@babel/helpers - typeof";return ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ou(t)}function Ui(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Zk(t,e){if(t==null)return{};var n=Jk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Mf(t){return eC(t)||tC(t)||nC(t)||rC()}function eC(t){if(Array.isArray(t))return Vf(t)}function tC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nC(t,e){if(t){if(typeof t=="string")return Vf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vf(t,e)}}function Vf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iC(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,p=t.pulse,m=t.fixedWidth,A=t.inverse,C=t.border,P=t.listItem,N=t.flip,E=t.size,_=t.rotation,T=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":A,"fa-border":C,"fa-li":P,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Ui(e,"fa-".concat(E),typeof E<"u"&&E!==null),Ui(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),Ui(e,"fa-pull-".concat(T),typeof T<"u"&&T!==null),Ui(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(L){return x[L]?L:null}).filter(function(L){return L})}function sC(t){return t=t-0,t===t}function gw(t){return sC(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var oC=["style"];function aC(t){return t.charAt(0).toUpperCase()+t.slice(1)}function lC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=gw(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[aC(i)]=s:e[i]=s,e},{})}function yw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return yw(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=lC(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[gw(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=Zk(n,oC);return i.attrs.style=on(on({},i.attrs.style),o),t.apply(void 0,[e.tag,on(on({},i.attrs),l)].concat(Mf(r)))}var vw=!1;try{vw=!0}catch{}function uC(){if(!vw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $y(t){if(t&&ou(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Df.icon)return Df.icon(t);if(t===null)return null;if(t&&ou(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function uh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ui({},t,e):{}}var Hy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Be=dd.forwardRef(function(t,e){var n=on(on({},Hy),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,f=$y(r),p=uh("classes",[].concat(Mf(iC(n)),Mf((o||"").split(" ")))),m=uh("transform",typeof n.transform=="string"?Df.transform(n.transform):n.transform),A=uh("mask",$y(i)),C=qk(f,on(on(on(on({},p),m),A),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!C)return uC("Could not find icon",f),null;var P=C.abstract,N={ref:e};return Object.keys(n).forEach(function(E){Hy.hasOwnProperty(E)||(N[E]=n[E])}),cC(P[0],N)});Be.displayName="FontAwesomeIcon";Be.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var cC=yw.bind(null,dd.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const hC={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},Wy={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},fC={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},dC={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},pC={prefix:"fas",iconName:"seedling",icon:[512,512,[127793,"sprout"],"f4d8","M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]},mC={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},gC={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},yC={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},vC={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},_C=vC,EC={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},wC=EC,TC={prefix:"fas",iconName:"handshake-angle",icon:[640,512,["hands-helping"],"f4c4","M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"]},IC=TC,SC={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},qy=SC,AC={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},kC=AC,Ky={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},CC={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},RC={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},os=RC,PC={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},xC={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},NC={prefix:"fas",iconName:"broom",icon:[576,512,[129529],"f51a","M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"]},bC={prefix:"fas",iconName:"dice",icon:[640,512,[127922],"f522","M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},OC=({onClose:t,onLocationSelect:e})=>{const[n,r]=V.useState(""),[i,s]=V.useState([]),[o,l]=V.useState(!1),[u,c]=V.useState(null),f=V.useRef(null);V.useEffect(()=>{if(n.trim().length<3){s([]);return}return f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{p(n)},300),()=>{f.current&&clearTimeout(f.current)}},[n]);const p=async C=>{if(C.trim()){l(!0),c(null);try{const N=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(C)}.json?access_token=pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ&proximity=-122.5715,45.498&bbox=-122.8,45.4,-122.3,45.6&limit=5&types=address,poi,place&country=US`);if(!N.ok)throw new Error("Search request failed");const E=await N.json();s(E.features||[])}catch(P){console.error("Geocoding error:",P),c("Failed to search addresses. Please try again."),s([])}finally{l(!1)}}},m=C=>{const[P,N]=C.center;e&&e({longitude:P,latitude:N,zoom:16,address:C.place_name}),t()},A=()=>{r(""),s([]),c(null)};return I.jsxs("div",{className:"header-panel search-panel",children:[I.jsxs("div",{className:"panel-header",children:[I.jsx("h3",{children:"Search Addresses"}),I.jsx("button",{className:"close-btn",onClick:t,children:I.jsx(Be,{icon:os})})]}),I.jsxs("div",{className:"panel-content",children:[I.jsx("div",{className:"search-container",children:I.jsxs("div",{className:"search-input-wrapper",children:[I.jsx("input",{type:"text",value:n,onChange:C=>r(C.target.value),placeholder:"Search for a place or address...",className:"search-input",autoFocus:!0}),n&&I.jsx("button",{className:"clear-search-btn",onClick:A,"aria-label":"Clear search",children:I.jsx(Be,{icon:os})}),o&&I.jsx("div",{className:"search-loading",children:I.jsx(Be,{icon:PC,spin:!0})})]})}),u&&I.jsx("div",{className:"search-error",children:u}),I.jsxs("div",{className:"search-results",children:[i.length>0&&I.jsx("div",{className:"results-header",children:I.jsxs("span",{children:["Found ",i.length," result",i.length!==1?"s":""]})}),i.map((C,P)=>{var N;return I.jsxs("div",{className:"search-result-item",onClick:()=>m(C),children:[I.jsx("div",{className:"result-icon",children:I.jsx(Be,{icon:qy})}),I.jsxs("div",{className:"result-content",children:[I.jsx("div",{className:"result-name",children:C.text}),I.jsx("div",{className:"result-address",children:C.place_name}),((N=C.properties)==null?void 0:N.category)&&I.jsx("div",{className:"result-category",children:C.properties.category})]})]},`${C.id}-${P}`)}),n.trim().length>=3&&i.length===0&&!o&&!u&&I.jsxs("div",{className:"no-results",children:[I.jsx(Be,{icon:qy}),I.jsxs("p",{children:['No results found for "',n,'"']}),I.jsx("p",{className:"no-results-hint",children:"Try searching for a street address, business name, or landmark"})]})]})]})]})},qs=[{id:"lawn-restoration",name:"Lawn Restoration",color:"#008000",icon:pC},{id:"sidewalk-repair",name:"Sidewalk Repair",color:"#808080",icon:gC},{id:"homeless-outreach",name:"Homeless Outreach",color:"#FFA500",icon:IC},{id:"legacy-sponsored",name:"Legacy Sponsored Block",color:"#FFD700",icon:dC},{id:"lifestyle-lottery",name:"Lifestyle Lottery Winner",color:"#800080",icon:bC},{id:"neighborhood-history",name:"Neighborhood History",color:"#0000FF",icon:_C},{id:"home-for-sale",name:"Home For Sale",color:"#008080",icon:wC},{id:"overnight-patrol",name:"Overnight Patrol",color:"#000080",icon:xC},{id:"vacant-home-cleanup",name:"Vacant Home Cleanup",color:"#800000",icon:NC},{id:"trash-debris",name:"Trash or Debris Dump Site",color:"#000000",icon:yC},{id:"overgrown-vegetation",name:"Overgrown Bushes or Trees",color:"#228B22",icon:hC}],Ti=[{id:"powellhurst-gilbert",name:"Powellhurst-Gilbert"},{id:"lents",name:"Lents"},{id:"foster-powell",name:"Foster-Powell"},{id:"mt-scott-arleta",name:"Mt. Scott-Arleta"},{id:"brentwood-darlington",name:"Brentwood-Darlington"},{id:"woodstock",name:"Woodstock"},{id:"gilbert",name:"Gilbert"},{id:"pleasant-valley",name:"Pleasant Valley"},{id:"centennial",name:"Centennial"},{id:"mill-park",name:"Mill Park"},{id:"south-tabor",name:"South Tabor"}],LC=({onClose:t,onFiltersChange:e,initialFilters:n})=>{var T,x;const[r,i]=V.useState((T=n==null?void 0:n.selectedNeighborhoods)!=null&&T.length?n.selectedNeighborhoods:Ti.map(L=>L.name)),[s,o]=V.useState((x=n==null?void 0:n.selectedServiceTypes)!=null&&x.length?n.selectedServiceTypes:qs.map(L=>L.name)),[l,u]=V.useState(!0),[c,f]=V.useState(!0),p=()=>{l?(u(!1),f(!0)):u(!0)},m=()=>{c?(f(!1),u(!0)):f(!0)},A=L=>{var w;const M=(w=Ti.find(g=>g.id===L))==null?void 0:w.name;M&&i(g=>g.includes(M)?g.filter(v=>v!==M):[...g,M])},C=L=>{o(M=>M.includes(L)?M.filter(w=>w!==L):[...M,L])},P=()=>{i(Ti.map(L=>L.name))},N=()=>{o(qs.map(L=>L.name))},E=()=>{e({selectedNeighborhoods:r,selectedServiceTypes:s})},_=()=>{i(Ti.map(M=>M.name)),o(qs.map(M=>M.name));const L={selectedNeighborhoods:Ti.map(M=>M.name),selectedServiceTypes:qs.map(M=>M.name)};e(L)};return I.jsxs("div",{className:"header-panel filter-panel",children:[I.jsxs("div",{className:"panel-header",children:[I.jsx("h3",{children:"Filter Options"}),I.jsx("button",{className:"close-btn",onClick:t,children:I.jsx(Be,{icon:os})})]}),I.jsxs("div",{className:"panel-content",children:[I.jsxs("div",{className:"filter-section",children:[I.jsxs("div",{className:"filter-section-header",children:[I.jsx("h4",{children:"Neighborhoods"}),I.jsxs("span",{className:"filter-count",children:["(",r.length,")"]}),I.jsx("button",{className:"collapse-btn",onClick:p,children:I.jsx(Be,{icon:l?Ky:Wy})})]}),I.jsxs("div",{className:"filter-section-controls",children:[I.jsx("button",{className:"select-all-btn",onClick:P,children:"Select All"}),I.jsx("button",{className:"unselect-all-btn",onClick:()=>i([]),children:"Unselect All"})]}),!l&&I.jsx("div",{className:"filter-options neighborhoods-scroll",children:Ti.map(L=>I.jsxs("label",{children:[I.jsx("input",{type:"checkbox",checked:r.includes(L.name),onChange:()=>A(L.id)}),L.name]},L.id))})]}),I.jsxs("div",{className:"filter-section",children:[I.jsxs("div",{className:"filter-section-header",children:[I.jsx("h4",{children:"Service Types"}),I.jsxs("span",{className:"filter-count",children:["(",s.length,")"]}),I.jsx("button",{className:"collapse-btn",onClick:m,children:I.jsx(Be,{icon:c?Ky:Wy})})]}),I.jsxs("div",{className:"filter-section-controls",children:[I.jsx("button",{className:"select-all-btn",onClick:N,children:"Select All"}),I.jsx("button",{className:"unselect-all-btn",onClick:()=>o([]),children:"Unselect All"})]}),!c&&I.jsx("div",{className:"service-types-scroll",children:I.jsx("div",{className:"service-type-buttons",children:qs.map(L=>{const M=s.includes(L.name);return I.jsx("button",{className:`service-type-btn ${M?"selected":""}`,style:{backgroundColor:M?L.color:"white",borderColor:L.color,color:M?"white":"black"},onClick:()=>C(L.name),title:L.name,children:I.jsx(Be,{icon:L.icon,className:"service-icon"})},L.id)})})})]}),I.jsxs("div",{className:"filter-actions",children:[I.jsx("button",{className:"apply-filters-btn",onClick:E,children:"Apply Filters"}),I.jsx("button",{className:"clear-filters-btn",onClick:_,children:"Clear Filters"})]})]})]})};var Gy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ew={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(m=64)),r.push(n[f],n[p],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new MC;const m=s<<2|l>>4;if(r.push(m),c!==64){const A=l<<4&240|c>>2;if(r.push(A),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VC=function(t){const e=_w(t);return Ew.encodeByteArray(e,!0)},au=function(t){return VC(t).replace(/\./g,"")},ww=function(t){try{return Ew.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=()=>FC().__FIREBASE_DEFAULTS__,jC=()=>{if(typeof process>"u"||typeof Gy>"u")return;const t=Gy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ww(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return UC()||jC()||zC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tw=t=>{var e,n;return(n=(e=qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Iw=t=>{const e=Tw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sw=()=>{var t;return(t=qu())===null||t===void 0?void 0:t.config},Aw=t=>{var e;return(e=qu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[au(JSON.stringify(n)),au(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $C(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function HC(){var t;const e=(t=qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GC(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QC(){return!HC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YC(){try{return typeof indexedDB=="object"}catch{return!1}}function XC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JC,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function ZC(t,e){return t.replace(eR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eR=/\{\$([^}]+)}/g;function tR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qy(s)&&Qy(o)){if(!lu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nR(t,e){const n=new rR(t,e);return n.subscribe.bind(n)}class rR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ch),i.error===void 0&&(i.error=ch),i.complete===void 0&&(i.complete=ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aR(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oR(t){return t===Br?void 0:t}function aR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const uR={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},cR=oe.INFO,hR={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gp{constructor(e){this.name=e,this._logLevel=cR,this._logHandler=fR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const dR=(t,e)=>e.some(n=>t instanceof n);let Yy,Xy;function pR(){return Yy||(Yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mR(){return Xy||(Xy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cw=new WeakMap,Ff=new WeakMap,Rw=new WeakMap,hh=new WeakMap,yp=new WeakMap;function gR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cw.set(n,t)}).catch(()=>{}),yp.set(e,t),e}function yR(t){if(Ff.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ff.set(t,e)}let Uf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ff.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vR(t){Uf=t(Uf)}function _R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fh(this),e,...n);return Rw.set(r,e.sort?e.sort():[e]),yr(r)}:mR().includes(t)?function(...e){return t.apply(fh(this),e),yr(Cw.get(this))}:function(...e){return yr(t.apply(fh(this),e))}}function ER(t){return typeof t=="function"?_R(t):(t instanceof IDBTransaction&&yR(t),dR(t,pR())?new Proxy(t,Uf):t)}function yr(t){if(t instanceof IDBRequest)return gR(t);if(hh.has(t))return hh.get(t);const e=ER(t);return e!==t&&(hh.set(t,e),yp.set(e,t)),e}const fh=t=>yp.get(t);function wR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const TR=["get","getKey","getAll","getAllKeys","count"],IR=["put","add","delete","clear"],dh=new Map;function Jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return dh.set(e,s),s}vR(t=>({...t,get:(e,n,r)=>Jy(e,n)||t.get(e,n,r),has:(e,n)=>!!Jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jf="@firebase/app",Zy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new gp("@firebase/app"),kR="@firebase/app-compat",CR="@firebase/analytics-compat",RR="@firebase/analytics",PR="@firebase/app-check-compat",xR="@firebase/app-check",NR="@firebase/auth",bR="@firebase/auth-compat",OR="@firebase/database",LR="@firebase/data-connect",DR="@firebase/database-compat",MR="@firebase/functions",VR="@firebase/functions-compat",FR="@firebase/installations",UR="@firebase/installations-compat",jR="@firebase/messaging",zR="@firebase/messaging-compat",BR="@firebase/performance",$R="@firebase/performance-compat",HR="@firebase/remote-config",WR="@firebase/remote-config-compat",qR="@firebase/storage",KR="@firebase/storage-compat",GR="@firebase/firestore",QR="@firebase/vertexai-preview",YR="@firebase/firestore-compat",XR="firebase",JR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="[DEFAULT]",ZR={[jf]:"fire-core",[kR]:"fire-core-compat",[RR]:"fire-analytics",[CR]:"fire-analytics-compat",[xR]:"fire-app-check",[PR]:"fire-app-check-compat",[NR]:"fire-auth",[bR]:"fire-auth-compat",[OR]:"fire-rtdb",[LR]:"fire-data-connect",[DR]:"fire-rtdb-compat",[MR]:"fire-fn",[VR]:"fire-fn-compat",[FR]:"fire-iid",[UR]:"fire-iid-compat",[jR]:"fire-fcm",[zR]:"fire-fcm-compat",[BR]:"fire-perf",[$R]:"fire-perf-compat",[HR]:"fire-rc",[WR]:"fire-rc-compat",[qR]:"fire-gcs",[KR]:"fire-gcs-compat",[GR]:"fire-fst",[YR]:"fire-fst-compat",[QR]:"fire-vertex","fire-js":"fire-js",[XR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=new Map,eP=new Map,Bf=new Map;function ev(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(Bf.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,t);for(const n of uu.values())ev(n,t);for(const n of eP.values())ev(n,t);return!0}function Ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new aa("app","Firebase",tP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=JR;function Pw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=Sw()),!n)throw vr.create("no-options");const s=uu.get(i);if(s){if(lu(n,s.options)&&lu(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new lR(i);for(const u of Bf.values())o.addComponent(u);const l=new nP(n,r,o);return uu.set(i,l),l}function vp(t=zf){const e=uu.get(t);if(!e&&t===zf&&Sw())return Pw();if(!e)throw vr.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let i=(r=ZR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}si(new Ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="firebase-heartbeat-database",iP=1,$o="firebase-heartbeat-store";let ph=null;function xw(){return ph||(ph=wR(rP,iP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),ph}async function sP(t){try{const n=(await xw()).transaction($o),r=await n.objectStore($o).get(Nw(t));return await n.done,r}catch(e){if(e instanceof En)Un.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function tv(t,e){try{const r=(await xw()).transaction($o,"readwrite");await r.objectStore($o).put(e,Nw(t)),await r.done}catch(n){if(n instanceof En)Un.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function Nw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=1024,aP=30*24*60*60*1e3;class lP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=aP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nv(),{heartbeatsToSend:r,unsentEntries:i}=uP(this._heartbeatsCache.heartbeats),s=au(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function nv(){return new Date().toISOString().substring(0,10)}function uP(t,e=oP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YC()?XC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rv(t){return au(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){si(new Ar("platform-logger",e=>new SR(e),"PRIVATE")),si(new Ar("heartbeat",e=>new lP(e),"PRIVATE")),fn(jf,Zy,t),fn(jf,Zy,"esm2017"),fn("fire-js","")}hP("");function _p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fP=bw,Ow=new aa("auth","Firebase",bw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new gp("@firebase/auth");function dP(t,...e){cu.logLevel<=oe.WARN&&cu.warn(`Auth (${di}): ${t}`,...e)}function Sl(t,...e){cu.logLevel<=oe.ERROR&&cu.error(`Auth (${di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Ep(t,...e)}function dn(t,...e){return Ep(t,...e)}function Lw(t,e,n){const r=Object.assign(Object.assign({},fP()),{[e]:n});return new aa("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return Lw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ep(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ow.create(t,...e)}function X(t,e,...n){if(!t)throw Ep(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sl(e),new Error(e)}function jn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pP(){return iv()==="http:"||iv()==="https:"}function iv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pP()||qC()||"connection"in navigator)?navigator.onLine:!0}function gP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=$C()||KC()}get(){return mP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new ua(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,i={}){return Mw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=la(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return WC()||(c.referrerPolicy="no-referrer"),Dw.fetch()(Vw(t,t.config.apiHost,n,l),c)})}async function Mw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yP),e);try{const i=new EP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw rl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lw(t,f,c);tn(t,f)}}catch(i){if(i instanceof En)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ca(t,e,n,r,i={}){const s=await Or(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Vw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wp(t.config,i):`${t.config.apiScheme}://${i}`}function _P(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),vP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}function sv(t){return t!==void 0&&t.enterprise!==void 0}class wP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _P(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TP(t,e){return Or(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function Fw(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SP(t,e=!1){const n=ft(t),r=await n.getIdToken(e),i=Tp(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(mh(i.auth_time)),issuedAtTime:_o(mh(i.iat)),expirationTime:_o(mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function Tp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ww(n);return i?JSON.parse(i):(Sl("Failed to decode base64 JWT payload"),null)}catch(i){return Sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ov(t){const e=Tp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&AP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ho(t,Fw(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uw(s.providerUserInfo):[],l=RP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Hf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function CP(t){const e=ft(t);await hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uw(t){return t.map(e=>{var{providerId:n}=e,r=_p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e){const n=await Mw(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Vw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xP(t,e){return Or(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=ov(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gi;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SP(this,e)}reload(){return CP(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await Ho(this,IP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:x,isAnonymous:L,providerData:M,stsTokenManager:w}=n;X(T&&w,e,"internal-error");const g=Gi.fromJSON(this.name,w);X(typeof T=="string",e,"internal-error"),Xn(p,e.name),Xn(m,e.name),X(typeof x=="boolean",e,"internal-error"),X(typeof L=="boolean",e,"internal-error"),Xn(A,e.name),Xn(C,e.name),Xn(P,e.name),Xn(N,e.name),Xn(E,e.name),Xn(_,e.name);const v=new Pn({uid:T,auth:e,email:m,emailVerified:x,displayName:p,isAnonymous:L,photoURL:C,phoneNumber:A,tenantId:P,stsTokenManager:g,createdAt:E,lastLoginAt:_});return M&&Array.isArray(M)&&(v.providerData=M.map(S=>Object.assign({},S))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gi;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Gi;l.updateFromIdToken(r);const u=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;function xn(t){jn(t instanceof Function,"Expected a class definition");let e=av.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,av.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jw.type="NONE";const lv=jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e,n){return`firebase:${t}:${e}:${n}`}class Qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Al(this.userKey,i.apiKey,s),this.fullPersistenceKey=Al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qi(xn(lv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xn(lv);const o=Al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Pn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qw(e))return"Blackberry";if(Kw(e))return"Webos";if(Bw(e))return"Safari";if((e.includes("chrome/")||$w(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zw(t=ht()){return/firefox\//i.test(t)}function Bw(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $w(t=ht()){return/crios\//i.test(t)}function Hw(t=ht()){return/iemobile/i.test(t)}function Ww(t=ht()){return/android/i.test(t)}function qw(t=ht()){return/blackberry/i.test(t)}function Kw(t=ht()){return/webos/i.test(t)}function Ip(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NP(t=ht()){var e;return Ip(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bP(){return GC()&&document.documentMode===10}function Gw(t=ht()){return Ip(t)||Ww(t)||Kw(t)||qw(t)||/windows phone/i.test(t)||Hw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e=[]){let n;switch(t){case"Browser":n=uv(ht());break;case"Worker":n=`${uv(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e={}){return Or(t,"GET","/v2/passwordPolicy",br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=6;class MP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new OP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fw(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(pn(this));const n=e?ft(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LP(this),n=new MP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return ft(t)}class cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=nR(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FP(t){Gu=t}function Yw(t){return Gu.loadJS(t)}function UP(){return Gu.recaptchaEnterpriseScript}function jP(){return Gu.gapiScript}function zP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BP="recaptcha-enterprise",$P="NO_RECAPTCHA";class HP{constructor(e){this.type=BP,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{TP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new wP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;sv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($P)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&sv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UP();u.length!==0&&(u+=l),Yw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function hv(t,e,n,r=!1){const i=new HP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await hv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){const n=Ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lu(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function qP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KP(t,e,n){const r=Lr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Xw(e),{host:o,port:l}=GP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),QP()}function Xw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GP(t){const e=Xw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fv(o)}}}function fv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function YP(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e){return ca(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function ZP(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Sp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wf(e,n,"signInWithPassword",XP);case"emailLink":return JP(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wf(e,r,"signUpPassword",YP);case"emailLink":return ZP(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="http://localhost";class oi extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:ex,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nx(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class Ap{constructor(e){var n,r,i,s,o,l;const u=no(ro(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=tx((i=u.mode)!==null&&i!==void 0?i:null);X(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=nx(e);try{return new Ap(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ap.parseLink(n);return X(r,"argument-error"),Wo._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Jw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ha{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ha{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ha{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(t,e){return ca(t,"POST","/v1/accounts:signUp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=dv(r);return new zn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dv(r);return new zn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t){var e;if(Yt(t.app))return Promise.reject(pn(t));const n=Lr(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new zn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Zw(n,{returnSecureToken:!0}),i=await zn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fu(e,n,r,i)}}function e1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fu._fromErrorAndOperation(t,s,e,r):s})}async function ix(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await Ho(t,e1(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Tp(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),zn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e,n=!1){if(Yt(t.app))return Promise.reject(pn(t));const r="signIn",i=await e1(t,r,e),s=await zn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ox(t,e){return t1(Lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ax(t,e,n){if(Yt(t.app))return Promise.reject(pn(t));const r=Lr(t),o=await Wf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zw).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&n1(t),u}),l=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function lx(t,e,n){return Yt(t.app)?Promise.reject(pn(t)):ox(ft(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&n1(t),r})}function ux(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function cx(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function hx(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function fx(t){return ft(t).signOut()}const du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(du,"1"),this.storage.removeItem(du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=1e3,px=10;class i1 extends r1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,px):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i1.type="LOCAL";const mx=i1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1 extends r1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s1.type="SESSION";const o1=s1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await gx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=kp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function vx(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function _x(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ex(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wx(){return a1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="firebaseLocalStorageDb",Tx=1,pu="firebaseLocalStorage",u1="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yu(t,e){return t.transaction([pu],e?"readwrite":"readonly").objectStore(pu)}function Ix(){const t=indexedDB.deleteDatabase(l1);return new fa(t).toPromise()}function qf(){const t=indexedDB.open(l1,Tx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pu,{keyPath:u1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pu)?e(r):(r.close(),await Ix(),e(await qf()))})})}async function pv(t,e,n){const r=Yu(t,!0).put({[u1]:e,value:n});return new fa(r).toPromise()}async function Sx(t,e){const n=Yu(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function mv(t,e){const n=Yu(t,!0).delete(e);return new fa(n).toPromise()}const Ax=800,kx=3;class c1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(wx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _x(),!this.activeServiceWorker)return;this.sender=new yx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ex()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await pv(e,du,"1"),await mv(e,du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yu(i,!1).getAll();return new fa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c1.type="LOCAL";const Cx=c1;new ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t,e){return e?xn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Px(t){return t1(t.auth,new Cp(t),t.bypassAuthState)}function xx(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),sx(n,new Cp(t),t.bypassAuthState)}async function Nx(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),ix(n,new Cp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Px;case"linkViaPopup":case"linkViaRedirect":return Nx;case"reauthViaPopup":case"reauthViaRedirect":return xx;default:tn(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new ua(2e3,1e4);class ji extends h1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bx.get())};e()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="pendingRedirect",kl=new Map;class Lx extends h1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await Dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dx(t,e){const n=Fx(e),r=Vx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mx(t,e){kl.set(t._key(),e)}function Vx(t){return xn(t._redirectPersistence)}function Fx(t){return Al(Ox,t.config.apiKey,t.name)}async function Ux(t,e,n=!1){if(Yt(t.app))return Promise.reject(pn(t));const r=Lr(t),i=Rx(r,e),o=await new Lx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=10*60*1e3;class zx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jx&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wx=/^https?/;async function qx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $x(t);for(const n of e)try{if(Kx(n))return}catch{}tn(t,"unauthorized-domain")}function Kx(t){const e=$f(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wx.test(n))return!1;if(Hx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=new ua(3e4,6e4);function yv(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qx(t){return new Promise((e,n)=>{var r,i,s;function o(){yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yv(),n(dn(t,"network-request-failed"))},timeout:Gx.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const l=zP("iframefcb");return mn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},Yw(`${jP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cl=null,e})}let Cl=null;function Yx(t){return Cl=Cl||Qx(t),Cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new ua(5e3,15e3),Jx="__/auth/iframe",Zx="emulator/auth/iframe",eN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wp(e,Zx):`https://${t.config.authDomain}/${Jx}`,r={apiKey:e.apiKey,appName:t.name,v:di},i=tN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function rN(t){const e=await Yx(t),n=mn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:nN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=mn().setTimeout(()=>{s(o)},Xx.get());function u(){mn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,oN=600,aN="_blank",lN="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uN(t,e,n,r=sN,i=oN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},iN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ht().toLowerCase();n&&(l=$w(c)?aN:n),zw(c)&&(e=e||lN,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,C])=>`${m}${A}=${C},`,"");if(NP(c)&&l!=="_self")return cN(e||"",l),new vv(null);const p=window.open(e||"",l,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new vv(p)}function cN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="__/auth/handler",fN="emulator/auth/handler",dN=encodeURIComponent("fac");async function _v(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:di,eventId:i};if(e instanceof Jw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ha){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${dN}=${encodeURIComponent(u)}`:"";return`${pN(t)}?${la(l).slice(1)}${c}`}function pN({config:t}){return t.emulator?wp(t,fN):`https://${t.authDomain}/${hN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="webStorageSupport";class mN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o1,this._completeRedirectFn=Ux,this._overrideRedirectResult=Mx}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _v(e,n,r,$f(),i);return uN(e,o,kp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _v(e,n,r,$f(),i);return vx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rN(e),r=new zx(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gh,{type:gh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gh];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gw()||Bw()||Ip()}}const gN=mN;var Ev="@firebase/auth",wv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _N(t){si(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qw(t)},c=new VP(r,i,s,u);return qP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new Ar("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new yN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Ev,wv,vN(t)),fn(Ev,wv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=5*60,wN=Aw("authIdTokenMaxAge")||EN;let Tv=null;const TN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wN)return;const i=n==null?void 0:n.token;Tv!==i&&(Tv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function d1(t=vp()){const e=Ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:gN,persistence:[Cx,mx,o1]}),r=Aw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=TN(s.toString());cx(n,o,()=>o(n.currentUser)),ux(n,l=>o(l))}}const i=Tw("auth");return i&&KP(n,`http://${i}`),n}function IN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_N("Browser");var Iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,p1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(S,R,b){for(var k=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)k[Et-2]=arguments[Et];return g.prototype[R].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var S=Array(16);if(typeof g=="string")for(var R=0;16>R;++R)S[R]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(R=0;16>R;++R)S[R]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],R=w.g[2];var b=w.g[3],k=g+(b^v&(R^b))+S[0]+3614090360&4294967295;g=v+(k<<7&4294967295|k>>>25),k=b+(R^g&(v^R))+S[1]+3905402710&4294967295,b=g+(k<<12&4294967295|k>>>20),k=R+(v^b&(g^v))+S[2]+606105819&4294967295,R=b+(k<<17&4294967295|k>>>15),k=v+(g^R&(b^g))+S[3]+3250441966&4294967295,v=R+(k<<22&4294967295|k>>>10),k=g+(b^v&(R^b))+S[4]+4118548399&4294967295,g=v+(k<<7&4294967295|k>>>25),k=b+(R^g&(v^R))+S[5]+1200080426&4294967295,b=g+(k<<12&4294967295|k>>>20),k=R+(v^b&(g^v))+S[6]+2821735955&4294967295,R=b+(k<<17&4294967295|k>>>15),k=v+(g^R&(b^g))+S[7]+4249261313&4294967295,v=R+(k<<22&4294967295|k>>>10),k=g+(b^v&(R^b))+S[8]+1770035416&4294967295,g=v+(k<<7&4294967295|k>>>25),k=b+(R^g&(v^R))+S[9]+2336552879&4294967295,b=g+(k<<12&4294967295|k>>>20),k=R+(v^b&(g^v))+S[10]+4294925233&4294967295,R=b+(k<<17&4294967295|k>>>15),k=v+(g^R&(b^g))+S[11]+2304563134&4294967295,v=R+(k<<22&4294967295|k>>>10),k=g+(b^v&(R^b))+S[12]+1804603682&4294967295,g=v+(k<<7&4294967295|k>>>25),k=b+(R^g&(v^R))+S[13]+4254626195&4294967295,b=g+(k<<12&4294967295|k>>>20),k=R+(v^b&(g^v))+S[14]+2792965006&4294967295,R=b+(k<<17&4294967295|k>>>15),k=v+(g^R&(b^g))+S[15]+1236535329&4294967295,v=R+(k<<22&4294967295|k>>>10),k=g+(R^b&(v^R))+S[1]+4129170786&4294967295,g=v+(k<<5&4294967295|k>>>27),k=b+(v^R&(g^v))+S[6]+3225465664&4294967295,b=g+(k<<9&4294967295|k>>>23),k=R+(g^v&(b^g))+S[11]+643717713&4294967295,R=b+(k<<14&4294967295|k>>>18),k=v+(b^g&(R^b))+S[0]+3921069994&4294967295,v=R+(k<<20&4294967295|k>>>12),k=g+(R^b&(v^R))+S[5]+3593408605&4294967295,g=v+(k<<5&4294967295|k>>>27),k=b+(v^R&(g^v))+S[10]+38016083&4294967295,b=g+(k<<9&4294967295|k>>>23),k=R+(g^v&(b^g))+S[15]+3634488961&4294967295,R=b+(k<<14&4294967295|k>>>18),k=v+(b^g&(R^b))+S[4]+3889429448&4294967295,v=R+(k<<20&4294967295|k>>>12),k=g+(R^b&(v^R))+S[9]+568446438&4294967295,g=v+(k<<5&4294967295|k>>>27),k=b+(v^R&(g^v))+S[14]+3275163606&4294967295,b=g+(k<<9&4294967295|k>>>23),k=R+(g^v&(b^g))+S[3]+4107603335&4294967295,R=b+(k<<14&4294967295|k>>>18),k=v+(b^g&(R^b))+S[8]+1163531501&4294967295,v=R+(k<<20&4294967295|k>>>12),k=g+(R^b&(v^R))+S[13]+2850285829&4294967295,g=v+(k<<5&4294967295|k>>>27),k=b+(v^R&(g^v))+S[2]+4243563512&4294967295,b=g+(k<<9&4294967295|k>>>23),k=R+(g^v&(b^g))+S[7]+1735328473&4294967295,R=b+(k<<14&4294967295|k>>>18),k=v+(b^g&(R^b))+S[12]+2368359562&4294967295,v=R+(k<<20&4294967295|k>>>12),k=g+(v^R^b)+S[5]+4294588738&4294967295,g=v+(k<<4&4294967295|k>>>28),k=b+(g^v^R)+S[8]+2272392833&4294967295,b=g+(k<<11&4294967295|k>>>21),k=R+(b^g^v)+S[11]+1839030562&4294967295,R=b+(k<<16&4294967295|k>>>16),k=v+(R^b^g)+S[14]+4259657740&4294967295,v=R+(k<<23&4294967295|k>>>9),k=g+(v^R^b)+S[1]+2763975236&4294967295,g=v+(k<<4&4294967295|k>>>28),k=b+(g^v^R)+S[4]+1272893353&4294967295,b=g+(k<<11&4294967295|k>>>21),k=R+(b^g^v)+S[7]+4139469664&4294967295,R=b+(k<<16&4294967295|k>>>16),k=v+(R^b^g)+S[10]+3200236656&4294967295,v=R+(k<<23&4294967295|k>>>9),k=g+(v^R^b)+S[13]+681279174&4294967295,g=v+(k<<4&4294967295|k>>>28),k=b+(g^v^R)+S[0]+3936430074&4294967295,b=g+(k<<11&4294967295|k>>>21),k=R+(b^g^v)+S[3]+3572445317&4294967295,R=b+(k<<16&4294967295|k>>>16),k=v+(R^b^g)+S[6]+76029189&4294967295,v=R+(k<<23&4294967295|k>>>9),k=g+(v^R^b)+S[9]+3654602809&4294967295,g=v+(k<<4&4294967295|k>>>28),k=b+(g^v^R)+S[12]+3873151461&4294967295,b=g+(k<<11&4294967295|k>>>21),k=R+(b^g^v)+S[15]+530742520&4294967295,R=b+(k<<16&4294967295|k>>>16),k=v+(R^b^g)+S[2]+3299628645&4294967295,v=R+(k<<23&4294967295|k>>>9),k=g+(R^(v|~b))+S[0]+4096336452&4294967295,g=v+(k<<6&4294967295|k>>>26),k=b+(v^(g|~R))+S[7]+1126891415&4294967295,b=g+(k<<10&4294967295|k>>>22),k=R+(g^(b|~v))+S[14]+2878612391&4294967295,R=b+(k<<15&4294967295|k>>>17),k=v+(b^(R|~g))+S[5]+4237533241&4294967295,v=R+(k<<21&4294967295|k>>>11),k=g+(R^(v|~b))+S[12]+1700485571&4294967295,g=v+(k<<6&4294967295|k>>>26),k=b+(v^(g|~R))+S[3]+2399980690&4294967295,b=g+(k<<10&4294967295|k>>>22),k=R+(g^(b|~v))+S[10]+4293915773&4294967295,R=b+(k<<15&4294967295|k>>>17),k=v+(b^(R|~g))+S[1]+2240044497&4294967295,v=R+(k<<21&4294967295|k>>>11),k=g+(R^(v|~b))+S[8]+1873313359&4294967295,g=v+(k<<6&4294967295|k>>>26),k=b+(v^(g|~R))+S[15]+4264355552&4294967295,b=g+(k<<10&4294967295|k>>>22),k=R+(g^(b|~v))+S[6]+2734768916&4294967295,R=b+(k<<15&4294967295|k>>>17),k=v+(b^(R|~g))+S[13]+1309151649&4294967295,v=R+(k<<21&4294967295|k>>>11),k=g+(R^(v|~b))+S[4]+4149444226&4294967295,g=v+(k<<6&4294967295|k>>>26),k=b+(v^(g|~R))+S[11]+3174756917&4294967295,b=g+(k<<10&4294967295|k>>>22),k=R+(g^(b|~v))+S[2]+718787259&4294967295,R=b+(k<<15&4294967295|k>>>17),k=v+(b^(R|~g))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,S=this.B,R=this.h,b=0;b<g;){if(R==0)for(;b<=v;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<g;)if(S[R++]=w.charCodeAt(b++),R==this.blockSize){i(this,S),R=0;break}}else for(;b<g;)if(S[R++]=w[b++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var S=0;32>S;S+=8)w[v++]=this.g[g]>>>S&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],S=!0,R=w.length-1;0<=R;R--){var b=w[R]|0;S&&b==g||(v[R]=b,S=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(c(-w));for(var g=[],v=1,S=0;w>=v;S++)g[S]=w/v|0,v*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return N(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(g,8)),S=p,R=0;R<w.length;R+=8){var b=Math.min(8,w.length-R),k=parseInt(w.substring(R,R+b),g);8>b?(b=c(Math.pow(g,b)),S=S.j(b).add(c(k))):(S=S.j(v),S=S.add(c(k)))}return S}var p=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var S=this.i(v);w+=(0<=S?S:4294967296+S)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(P(this))return"-"+N(this).toString(w);for(var g=c(Math.pow(w,6)),v=this,S="";;){var R=x(v,g).g;v=E(v,R.j(g));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=R,C(v))return b+S;for(;6>b.length;)b="0"+b;S=b+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=E(this,w),P(w)?-1:C(w)?0:1};function N(w){for(var g=w.g.length,v=[],S=0;S<g;S++)v[S]=~w.g[S];return new o(v,~w.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],S=0,R=0;R<=g;R++){var b=S+(this.i(R)&65535)+(w.i(R)&65535),k=(b>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);S=k>>>16,b&=65535,k&=65535,v[R]=k<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function E(w,g){return w.add(N(g))}t.j=function(w){if(C(this)||C(w))return p;if(P(this))return P(w)?N(this).j(N(w)):N(N(this).j(w));if(P(w))return N(this.j(N(w)));if(0>this.l(A)&&0>w.l(A))return c(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],S=0;S<2*g;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<w.g.length;R++){var b=this.i(S)>>>16,k=this.i(S)&65535,Et=w.i(R)>>>16,wn=w.i(R)&65535;v[2*S+2*R]+=k*wn,_(v,2*S+2*R),v[2*S+2*R+1]+=b*wn,_(v,2*S+2*R+1),v[2*S+2*R+1]+=k*Et,_(v,2*S+2*R+1),v[2*S+2*R+2]+=b*Et,_(v,2*S+2*R+2)}for(S=0;S<g;S++)v[S]=v[2*S+1]<<16|v[2*S];for(S=g;S<2*g;S++)v[S]=0;return new o(v,0)};function _(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function T(w,g){this.g=w,this.h=g}function x(w,g){if(C(g))throw Error("division by zero");if(C(w))return new T(p,p);if(P(w))return g=x(N(w),g),new T(N(g.g),N(g.h));if(P(g))return g=x(w,N(g)),new T(N(g.g),g.h);if(30<w.g.length){if(P(w)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=g;0>=S.l(w);)v=L(v),S=L(S);var R=M(v,1),b=M(S,1);for(S=M(S,2),v=M(v,2);!C(S);){var k=b.add(S);0>=k.l(w)&&(R=R.add(v),b=k),S=M(S,1),v=M(v,1)}return g=E(w,R.j(g)),new T(R,g)}for(R=p;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),b=c(v),k=b.j(g);P(k)||0<k.l(w);)v-=S,b=c(v),k=b.j(g);C(b)&&(b=m),R=R.add(b),w=E(w,k)}return new T(R,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],S=0;S<g;S++)v[S]=this.i(S)&w.i(S);return new o(v,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],S=0;S<g;S++)v[S]=this.i(S)|w.i(S);return new o(v,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],S=0;S<g;S++)v[S]=this.i(S)^w.i(S);return new o(v,this.h^w.h)};function L(w){for(var g=w.g.length+1,v=[],S=0;S<g;S++)v[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(v,w.h)}function M(w,g){var v=g>>5;g%=32;for(var S=w.g.length-v,R=[],b=0;b<S;b++)R[b]=0<g?w.i(b+v)>>>g|w.i(b+v+1)<<32-g:w.i(b+v);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Yr=o}).apply(typeof Iv<"u"?Iv:typeof self<"u"?self:typeof window<"u"?window:{});var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m1,io,g1,Rl,Kf,y1,v1,_1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof il=="object"&&il];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in d))break e;d=d[O]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,y=!1,O={next:function(){if(!y&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function A(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,O,D){for(var B=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)B[ye-2]=arguments[ye];return h.prototype[O].apply(y,B)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const O=a.length||0,D=y.length||0;a.length=O+D;for(let B=0;B<D;B++)a[O+B]=y[B]}else a.push(y)}}class E{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var L=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function M(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function g(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(d in y)a[d]=y[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Et{constructor(){this.h=this.g=null}add(h,d){const y=wn.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var wn=new E(()=>new Dr,a=>a.reset());class Dr{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,$=!1,Y=new Et,Z=()=>{const a=l.Promise.resolve(void 0);Ht=()=>{a.then(ve)}};var ve=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(d){b(d)}var h=wn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function ae(a,h){if(K.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{x(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ue[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ae.aa.h.call(this)}}C(ae,K);var ue={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pe="closure_listenable_"+(1e6*Math.random()|0),nn=0;function lc(a,h,d,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=O,this.key=++nn,this.da=this.fa=!1}function Ea(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function wa(a){this.src=a,this.g={},this.h=0}wa.prototype.add=function(a,h,d,y,O){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=cc(a,h,y,O);return-1<B?(h=a[B],d||(h.fa=!1)):(h=new lc(h,this.src,D,!!y,O),h.fa=d,a.push(h)),h};function uc(a,h){var d=h.type;if(d in a.g){var y=a.g[d],O=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=O)&&Array.prototype.splice.call(y,O,1),D&&(Ea(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function cc(a,h,d,y){for(var O=0;O<a.length;++O){var D=a[O];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==y)return O}return-1}var hc="closure_lm_"+(1e6*Math.random()|0),fc={};function am(a,h,d,y,O){if(Array.isArray(h)){for(var D=0;D<h.length;D++)am(a,h[D],d,y,O);return null}return d=cm(d),a&&a[pe]?a.K(h,d,c(y)?!!y.capture:!1,O):HT(a,h,d,!1,y,O)}function HT(a,h,d,y,O,D){if(!h)throw Error("Invalid event type");var B=c(O)?!!O.capture:!!O,ye=pc(a);if(ye||(a[hc]=ye=new wa(a)),d=ye.add(h,d,y,B,D),d.proxy)return d;if(y=WT(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)ne||(O=B),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(um(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function WT(){function a(d){return h.call(a.src,a.listener,d)}const h=qT;return a}function lm(a,h,d,y,O){if(Array.isArray(h))for(var D=0;D<h.length;D++)lm(a,h[D],d,y,O);else y=c(y)?!!y.capture:!!y,d=cm(d),a&&a[pe]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=cc(D,d,y,O),-1<d&&(Ea(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=pc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=cc(h,d,y,O)),(d=-1<a?h[a]:null)&&dc(d))}function dc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[pe])uc(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(um(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=pc(h))?(uc(d,a),d.h==0&&(d.src=null,h[hc]=null)):Ea(a)}}}function um(a){return a in fc?fc[a]:fc[a]="on"+a}function qT(a,h){if(a.da)a=!0;else{h=new ae(h,this);var d=a.listener,y=a.ha||a.src;a.fa&&dc(a),a=d.call(y,h)}return a}function pc(a){return a=a[hc],a instanceof wa?a:null}var mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function cm(a){return typeof a=="function"?a:(a[mc]||(a[mc]=function(h){return a.handleEvent(h)}),a[mc])}function et(){de.call(this),this.i=new wa(this),this.M=this,this.F=null}C(et,de),et.prototype[pe]=!0,et.prototype.removeEventListener=function(a,h,d,y){lm(this,a,h,d,y)};function dt(a,h){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new K(h,a);else if(h instanceof K)h.target=h.target||a;else{var O=h;h=new K(y,a),S(h,O)}if(O=!0,d)for(var D=d.length-1;0<=D;D--){var B=h.g=d[D];O=Ta(B,y,!0,h)&&O}if(B=h.g=a,O=Ta(B,y,!0,h)&&O,O=Ta(B,y,!1,h)&&O,d)for(D=0;D<d.length;D++)B=h.g=d[D],O=Ta(B,y,!1,h)&&O}et.prototype.N=function(){if(et.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],y=0;y<d.length;y++)Ea(d[y]);delete a.g[h],a.h--}}this.F=null},et.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},et.prototype.L=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function Ta(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==d){var ye=B.listener,qe=B.ha||B.src;B.fa&&uc(a.i,B),O=ye.call(qe,y)!==!1&&O}}return O&&!y.defaultPrevented}function hm(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function fm(a){a.g=hm(()=>{a.g=null,a.i&&(a.i=!1,fm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class KT extends de{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:fm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(a){de.call(this),this.h=a,this.g={}}C(As,de);var dm=[];function pm(a){M(a.g,function(h,d){this.g.hasOwnProperty(d)&&dc(h)},a),a.g={}}As.prototype.N=function(){As.aa.N.call(this),pm(this)},As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gc=l.JSON.stringify,GT=l.JSON.parse,QT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yc(){}yc.prototype.h=null;function mm(a){return a.h||(a.h=a.i())}function gm(){}var ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vc(){K.call(this,"d")}C(vc,K);function _c(){K.call(this,"c")}C(_c,K);var Mr={},ym=null;function Ia(){return ym=ym||new et}Mr.La="serverreachability";function vm(a){K.call(this,Mr.La,a)}C(vm,K);function Cs(a){const h=Ia();dt(h,new vm(h))}Mr.STAT_EVENT="statevent";function _m(a,h){K.call(this,Mr.STAT_EVENT,a),this.stat=h}C(_m,K);function pt(a){const h=Ia();dt(h,new _m(h,a))}Mr.Ma="timingevent";function Em(a,h){K.call(this,Mr.Ma,a),this.size=h}C(Em,K);function Rs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function YT(a,h,d,y,O,D){a.info(function(){if(a.g)if(D)for(var B="",ye=D.split("&"),qe=0;qe<ye.length;qe++){var he=ye[qe].split("=");if(1<he.length){var tt=he[0];he=he[1];var nt=tt.split("_");B=2<=nt.length&&nt[1]=="type"?B+(tt+"="+he+"&"):B+(tt+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+d+`
`+B})}function XT(a,h,d,y,O,D,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+d+`
`+D+" "+B})}function yi(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ZT(a,d)+(y?" "+y:"")})}function JT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ps.prototype.info=function(){};function ZT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<O.length;B++)O[B]=""}}}}return gc(d)}catch{return h}}var Sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ec;function Aa(){}C(Aa,yc),Aa.prototype.g=function(){return new XMLHttpRequest},Aa.prototype.i=function(){return{}},Ec=new Aa;function qn(a,h,d,y){this.j=a,this.i=h,this.l=d,this.R=y||1,this.U=new As(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tm}function Tm(){this.i=null,this.g="",this.h=!1}var Im={},wc={};function Tc(a,h,d){a.L=1,a.v=Pa(Tn(h)),a.m=d,a.P=!0,Sm(a,null)}function Sm(a,h){a.F=Date.now(),ka(a),a.A=Tn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Fm(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Tm,a.g=ng(a.j,d?h:null,!a.m),0<a.O&&(a.M=new KT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(dm[0]=O.toString()),O=dm);for(var D=0;D<O.length;D++){var B=am(d,O[D],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Cs(),YT(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const nt=In(this.g);var h=this.g.Ba();const Ei=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Wm(this.g)))){this.J||nt!=4||h==7||(h==8||0>=Ei?Cs(3):Cs(2)),Ic(this);var d=this.g.Z();this.X=d;t:if(Am(this)){var y=Wm(this.g);a="";var O=y.length,D=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),xs(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(D&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,XT(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,qe=this.g;if((ye=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ye)){var he=ye;break t}}he=null}if(d=he)yi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sc(this,d);else{this.o=!1,this.s=3,pt(12),Vr(this),xs(this);break e}}if(this.P){d=!0;let Wt;for(;!this.J&&this.C<B.length;)if(Wt=eI(this,B),Wt==wc){nt==4&&(this.s=4,pt(14),d=!1),yi(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Im){this.s=4,pt(15),yi(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else yi(this.i,this.l,Wt,null),Sc(this,Wt);if(Am(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||B.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)yi(this.i,this.l,B,"[Invalid Chunked Response]"),Vr(this),xs(this);else if(0<B.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),xc(tt),tt.M=!0,pt(11))}}else yi(this.i,this.l,B,null),Sc(this,B);nt==4&&Vr(this),this.o&&!this.J&&(nt==4?Jm(this.j,this):(this.o=!1,ka(this)))}else yI(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Vr(this),xs(this)}}}catch{}finally{}};function Am(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function eI(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?wc:(d=Number(h.substring(d,y)),isNaN(d)?Im:(y+=1,y+d>h.length?wc:(h=h.slice(y,y+d),a.C=y+d,h)))}qn.prototype.cancel=function(){this.J=!0,Vr(this)};function ka(a){a.S=Date.now()+a.I,km(a,a.I)}function km(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Rs(m(a.ba,a),h)}function Ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(JT(this.i,this.A),this.L!=2&&(Cs(),pt(17)),Vr(this),this.s=2,xs(this)):km(this,this.S-a)};function xs(a){a.j.G==0||a.J||Jm(a.j,a)}function Vr(a){Ic(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,pm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Sc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Ac(d.h,a))){if(!a.K&&Ac(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Da(d),Oa(d);else break e;Pc(d),pt(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=Rs(m(d.Za,d),6e3));if(1>=Pm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ur(d,11)}else if((a.K||d.g==a)&&Da(d),!_(h))for(O=d.Da.g.parse(h),h=0;h<O.length;h++){let he=O[h];if(d.T=he[0],he=he[1],d.G==2)if(he[0]=="c"){d.K=he[1],d.ia=he[2];const tt=he[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=he[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const Ei=he[5];Ei!=null&&typeof Ei=="number"&&0<Ei&&(y=1.5*Ei,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Wt=a.g;if(Wt){const Va=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Va){var D=y.h;D.g||Va.indexOf("spdy")==-1&&Va.indexOf("quic")==-1&&Va.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(kc(D,D.h),D.h=null))}if(y.D){const Nc=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(y.ya=Nc,Ee(y.I,y.D,Nc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var B=a;if(y.qa=tg(y,y.J?y.ia:null,y.W),B.K){xm(y.h,B);var ye=B,qe=y.L;qe&&(ye.I=qe),ye.B&&(Ic(ye),ka(ye)),y.g=B}else Ym(y);0<d.i.length&&La(d)}else he[0]!="stop"&&he[0]!="close"||Ur(d,7);else d.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Ur(d,7):Rc(d):he[0]!="noop"&&d.l&&d.l.ta(he),d.v=0)}}Cs(4)}catch{}}var tI=class{constructor(a,h){this.g=a,this.map=h}};function Cm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pm(a){return a.h?1:a.g?a.g.size:0}function Ac(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kc(a,h){a.g?a.g.add(h):a.h=h}function xm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Cm.prototype.cancel=function(){if(this.i=Nm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function nI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,y=0;y<d;y++)h.push(a[y]);return h}h=[],d=0;for(y in a)h[d++]=a[y];return h}function rI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const y in a)h[d++]=y;return h}}}function bm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=rI(a),y=nI(a),O=y.length,D=0;D<O;D++)h.call(void 0,y[D],d&&d[D],a)}var Om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iI(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),O=null;if(0<=y){var D=a[d].substring(0,y);O=a[d].substring(y+1)}else D=a[d];h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fr){this.h=a.h,Ca(this,a.j),this.o=a.o,this.g=a.g,Ra(this,a.s),this.l=a.l;var h=a.i,d=new Os;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Lm(this,d),this.m=a.m}else a&&(h=String(a).match(Om))?(this.h=!1,Ca(this,h[1]||"",!0),this.o=Ns(h[2]||""),this.g=Ns(h[3]||"",!0),Ra(this,h[4]),this.l=Ns(h[5]||"",!0),Lm(this,h[6]||"",!0),this.m=Ns(h[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}Fr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(bs(h,Dm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(bs(h,Dm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(bs(d,d.charAt(0)=="/"?aI:oI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",bs(d,uI)),a.join("")};function Tn(a){return new Fr(a)}function Ca(a,h,d){a.j=d?Ns(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ra(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Lm(a,h,d){h instanceof Os?(a.i=h,cI(a.i,a.h)):(d||(h=bs(h,lI)),a.i=new Os(h,a.h))}function Ee(a,h,d){a.i.set(h,d)}function Pa(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,sI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dm=/[#\/\?@]/g,oI=/[#\?:]/g,aI=/[#\?]/g,lI=/[#\?@]/g,uI=/#/g;function Os(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&iI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Os.prototype,t.add=function(a,h){Kn(this),this.i=null,a=vi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Mm(a,h){Kn(a),h=vi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vm(a,h){return Kn(a),h=vi(a,h),a.g.has(h)}t.forEach=function(a,h){Kn(this),this.g.forEach(function(d,y){d.forEach(function(O){a.call(h,O,y,this)},this)},this)},t.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const O=a[y];for(let D=0;D<O.length;D++)d.push(h[y])}return d},t.V=function(a){Kn(this);let h=[];if(typeof a=="string")Vm(this,a)&&(h=h.concat(this.g.get(vi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Kn(this),this.i=null,a=vi(this,a),Vm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Fm(a,h,d){Mm(a,h),0<d.length&&(a.i=null,a.g.set(vi(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const D=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var O=D;B[y]!==""&&(O+="="+encodeURIComponent(String(B[y]))),a.push(O)}}return this.i=a.join("&")};function vi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function cI(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(d,y){var O=y.toLowerCase();y!=O&&(Mm(this,y),Fm(this,O,d))},a)),a.j=h}function hI(a,h){const d=new Ps;if(l.Image){const y=new Image;y.onload=A(Gn,d,"TestLoadImage: loaded",!0,h,y),y.onerror=A(Gn,d,"TestLoadImage: error",!1,h,y),y.onabort=A(Gn,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=A(Gn,d,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function fI(a,h){const d=new Ps,y=new AbortController,O=setTimeout(()=>{y.abort(),Gn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(O),D.ok?Gn(d,"TestPingServer: ok",!0,h):Gn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Gn(d,"TestPingServer: error",!1,h)})}function Gn(a,h,d,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(d)}catch{}}function dI(){this.g=new QT}function pI(a,h,d){const y=d||"";try{bm(a,function(O,D){let B=O;c(O)&&(B=gc(O)),h.push(y+D+"="+encodeURIComponent(B))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function xa(a){this.l=a.Ub||null,this.j=a.eb||!1}C(xa,yc),xa.prototype.g=function(){return new Na(this.l,this.j)},xa.prototype.i=function(a){return function(){return a}}({});function Na(a,h){et.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Na,et),t=Na.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Um(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Um(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ls(this):Ds(this),this.readyState==3&&Um(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ls(this))},t.Qa=function(a){this.g&&(this.response=a,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ds(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jm(a){let h="";return M(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function Cc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=jm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ee(a,h,d))}function Pe(a){et.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Pe,et);var mI=/^https?$/i,gI=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ec.g(),this.v=this.o?mm(this.o):mm(Ec),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){zm(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)d.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(gI,h,void 0))||y||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){zm(this,D)}};function zm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Bm(a),ba(a)}function Bm(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ba(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$m(this):this.bb())},t.bb=function(){$m(this)};function $m(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)hm(a.Ea,0,a);else if(dt(a,"readystatechange"),In(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=B===0){var O=String(a.D).match(Om)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!mI.test(O?O.toLowerCase():"")}d=y}if(d)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var D=2<In(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Bm(a)}}finally{ba(a)}}}}function ba(a,h){if(a.g){Hm(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||dt(a,"ready");try{d.onreadystatechange=y}catch{}}}function Hm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),GT(h)}};function Wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function yI(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var d=R(a[y]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[O]||[];h[O]=D,D.push(d)}w(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function qm(a){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,a),this.cb=Ms("retryDelaySeedMs",1e4,a),this.Wa=Ms("forwardChannelMaxRetries",2,a),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cm(a&&a.concurrentRequestLimit),this.Da=new dI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,y){pt(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=tg(this,null,this.W),La(this)};function Rc(a){if(Km(a),a.G==3){var h=a.U++,d=Tn(a.I);if(Ee(d,"SID",a.K),Ee(d,"RID",h),Ee(d,"TYPE","terminate"),Vs(a,d),h=new qn(a,a.j,h),h.L=2,h.v=Pa(Tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=ng(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ka(h)}eg(a)}function Oa(a){a.g&&(xc(a),a.g.cancel(),a.g=null)}function Km(a){Oa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Da(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function La(a){if(!Rm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ht||Z(),$||(Ht(),$=!0),Y.add(h,a),a.B=0}}function vI(a,h){return Pm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Rs(m(a.Ga,a,h),Zm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new qn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Qm(this,O,h),d=Tn(this.I),Ee(d,"RID",a),Ee(d,"CVER",22),this.D&&Ee(d,"X-HTTP-Session-Id",this.D),Vs(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(jm(D)))+"&"+h:this.m&&Cc(d,this.m,D)),kc(this.h,O),this.Ua&&Ee(d,"TYPE","init"),this.P?(Ee(d,"$req",h),Ee(d,"SID","null"),O.T=!0,Tc(O,d,null)):Tc(O,d,h),this.G=2}}else this.G==3&&(a?Gm(this,a):this.i.length==0||Rm(this.h)||Gm(this))};function Gm(a,h){var d;h?d=h.l:d=a.U++;const y=Tn(a.I);Ee(y,"SID",a.K),Ee(y,"RID",d),Ee(y,"AID",a.T),Vs(a,y),a.m&&a.o&&Cc(y,a.m,a.o),d=new qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Qm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kc(a.h,d),Tc(d,y,h)}function Vs(a,h){a.H&&M(a.H,function(d,y){Ee(h,y,d)}),a.l&&bm({},function(d,y){Ee(h,y,d)})}function Qm(a,h,d){d=Math.min(a.i.length,d);var y=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let D=-1;for(;;){const B=["count="+d];D==-1?0<d?(D=O[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let ye=!0;for(let qe=0;qe<d;qe++){let he=O[qe].g;const tt=O[qe].map;if(he-=D,0>he)D=Math.max(0,O[qe].g-100),ye=!1;else try{pI(tt,B,"req"+he+"_")}catch{y&&y(tt)}}if(ye){y=B.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,y}function Ym(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ht||Z(),$||(Ht(),$=!0),Y.add(h,a),a.v=0}}function Pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Rs(m(a.Fa,a),Zm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Rs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Oa(this),Xm(this))};function xc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xm(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);Ee(h,"RID","rpc"),Ee(h,"SID",a.K),Ee(h,"AID",a.T),Ee(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(h,"TO",a.ja),Ee(h,"TYPE","xmlhttp"),Vs(a,h),a.m&&a.o&&Cc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Pa(Tn(h)),d.m=null,d.P=!0,Sm(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Oa(this),Pc(this),pt(19))};function Da(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jm(a,h){var d=null;if(a.g==h){Da(a),xc(a),a.g=null;var y=2}else if(Ac(a.h,h))d=h.D,xm(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Ia(),dt(y,new Em(y,d)),La(a)}else Ym(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&vI(a,h)||y==2&&Pc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),O){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Zm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),y=a.Xa;const O=!y;y=new Fr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ca(y,"https"),Pa(y),O?hI(y.toString(),d):fI(y.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(h),eg(a),Km(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function eg(a){if(a.G=0,a.ka=[],a.l){const h=Nm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function tg(a,h,d){var y=d instanceof Fr?Tn(d):new Fr(d);if(y.g!="")h&&(y.g=h+"."+y.g),Ra(y,y.s);else{var O=l.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var D=new Fr(null);y&&Ca(D,y),h&&(D.g=h),O&&Ra(D,O),d&&(D.l=d),y=D}return d=a.D,h=a.ya,d&&h&&Ee(y,d,h),Ee(y,"VER",a.la),Vs(a,y),y}function ng(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Pe(new xa({eb:d})):new Pe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rg(){}t=rg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ma(){}Ma.prototype.g=function(a,h){return new kt(a,h)};function kt(a,h){et.call(this),this.g=new qm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _i(this)}C(kt,et),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Rc(this.g)},kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=gc(a),a=d);h.i.push(new tI(h.Ya++,a)),h.G==3&&La(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,Rc(this.g),delete this.g,kt.aa.N.call(this)};function ig(a){vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(ig,vc);function sg(){_c.call(this),this.status=1}C(sg,_c);function _i(a){this.g=a}C(_i,rg),_i.prototype.ua=function(){dt(this.g,"a")},_i.prototype.ta=function(a){dt(this.g,new ig(a))},_i.prototype.sa=function(a){dt(this.g,new sg)},_i.prototype.ra=function(){dt(this.g,"b")},Ma.prototype.createWebChannel=Ma.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,_1=function(){return new Ma},v1=function(){return Ia()},y1=Mr,Kf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,Rl=Sa,wm.COMPLETE="complete",g1=wm,gm.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",et.prototype.listen=et.prototype.K,io=gm,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,m1=Pe}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});const Sv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new gp("@firebase/firestore");function Ks(){return ai.logLevel}function W(t,...e){if(ai.logLevel<=oe.DEBUG){const n=e.map(Rp);ai.debug(`Firestore (${Es}): ${t}`,...n)}}function Bn(t,...e){if(ai.logLevel<=oe.ERROR){const n=e.map(Rp);ai.error(`Firestore (${Es}): ${t}`,...n)}}function as(t,...e){if(ai.logLevel<=oe.WARN){const n=e.map(Rp);ai.warn(`Firestore (${Es}): ${t}`,...n)}}function Rp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function ge(t,e){t||J()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class AN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kN{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new E1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new ot(e)}}class CN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new PN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ue(0,0))}static max(){return new ee(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends qo{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const bN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends qo{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return bN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function ON(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new kr(i,Q.empty(),e)}function LN(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(ee.min(),Q.empty(),-1)}static max(){return new kr(ee.max(),Q.empty(),-1)}}function DN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==MN)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function FN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pp.oe=-1;function Xu(t){return t==null}function mu(t){return t===0&&1/t==-1/0}function UN(t){return typeof t=="number"&&Number.isInteger(t)&&!mu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function T1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(e){return new kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Xe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new I1("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const jN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=jN.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function li(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Np(t){const e=t.mapValue.fields.__previous_value__;return xp(e)?Np(e):e}function Ko(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Go{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={mapValue:{}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xp(t)?4:$N(t)?9007199254740991:BN(t)?10:11:J()}function vn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cr(i.timestampValue),l=Cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return li(i.bytesValue).isEqual(li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?mu(o)===mu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Av(o)!==Av(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function Qo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cv(t.timestampValue,e.timestampValue);case 4:return Cv(Ko(t),Ko(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=li(s),u=li(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=fe(l[c],u[c]);if(f!==0)return f}return fe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=fe(be(s.latitude),be(o.latitude));return l!==0?l:fe(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=fe(((c=A==null?void 0:A.values)===null||c===void 0?void 0:c.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Rv(A,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ol.mapValue&&o===ol.mapValue)return 0;if(s===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=fe(u[p],f[p]);if(m!==0)return m;const A=us(l[u[p]],c[f[p]]);if(A!==0)return A}return fe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function Cv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Cr(t),r=Cr(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Rv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=us(n[i],r[i]);if(s)return s}return fe(n.length,r.length)}function cs(t){return Gf(t)}function Gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gf(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function Qf(t){return!!t&&"integerValue"in t}function bp(t){return!!t&&"arrayValue"in t}function Pv(t){return!!t&&"nullValue"in t}function xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function BN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $N(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Eo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Eo(this.value))}}function S1(t){const e=[];return ws(t.fields,(n,r)=>{const i=new Qe([n]);if(Pl(r)){const s=S1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,ee.min(),ee.min(),ee.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,ee.min(),ee.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ee.min(),ee.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.position=e,this.inclusive=n}}function Nv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=us(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n="asc"){this.field=e,this.dir=n}}function HN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{}class Ve extends A1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qN(e,n,r):n==="array-contains"?new QN(e,r):n==="in"?new YN(e,r):n==="not-in"?new XN(e,r):n==="array-contains-any"?new JN(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KN(e,r):new GN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(us(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends A1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _n(e,n)}matches(e){return k1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function k1(t){return t.op==="and"}function C1(t){return WN(t)&&k1(t)}function WN(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Yf(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(C1(t))return t.filters.map(e=>Yf(e)).join(",");{const e=t.filters.map(n=>Yf(n)).join(",");return`${t.op}(${e})`}}function R1(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&vn(r.value,i.value)}(t,e):t instanceof _n?function(r,i){return i instanceof _n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&R1(o,i.filters[l]),!0):!1}(t,e):void J()}function P1(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(P1).join(" ,")+"}"}(t):"Filter"}class qN extends Ve{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class KN extends Ve{constructor(e,n){super(e,"in",n),this.keys=x1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GN extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=x1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class QN extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bp(n)&&Qo(n.arrayValue,this.value)}}class YN extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class XN extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qo(this.value.arrayValue,n)}}class JN extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Ov(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZN(t,e,n,r,i,s,o)}function Op(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ue=n}return e.ue}function Lp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!R1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bv(t.startAt,e.startAt)&&bv(t.endAt,e.endAt)}function Xf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eb(t,e,n,r,i,s,o,l){return new Ju(t,e,n,r,i,s,o,l)}function Dp(t){return new Ju(t)}function Lv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tb(t){return t.collectionGroup!==null}function wo(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yu(s,r))}),n.has(Qe.keyField().canonicalString())||e.ce.push(new yu(Qe.keyField(),r))}return e.ce}function gn(t){const e=te(t);return e.le||(e.le=nb(e,wo(t))),e.le}function nb(t,e){if(t.limitType==="F")return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yu(i.field,s)});const n=t.endAt?new gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gu(t.startAt.position,t.startAt.inclusive):null;return Ov(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jf(t,e,n){return new Ju(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zu(t,e){return Lp(gn(t),gn(e))&&t.limitType===e.limitType}function N1(t){return`${Op(gn(t))}|lt:${t.limitType}`}function Ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>P1(i)).join(", ")}]`),Xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>cs(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Nv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,wo(r),i)||r.endAt&&!function(o,l,u){const c=Nv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,wo(r),i))}(t,e)}function rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function b1(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=ib(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ib(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?us(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return T1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new Re(Q.comparator);function $n(){return sb}const O1=new Re(Q.comparator);function so(...t){let e=O1;for(const n of t)e=e.insert(n.key,n);return e}function L1(t){let e=O1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return To()}function D1(){return To()}function To(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const ob=new Re(Q.comparator),ab=new Xe(Q.comparator);function se(...t){let e=ab;for(const n of t)e=e.add(n);return e}const lb=new Xe(fe);function ub(){return lb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mu(e)?"-0":e}}function M1(t){return{integerValue:""+t}}function cb(t,e){return UN(e)?M1(e):Mp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this._=void 0}}function hb(t,e,n){return t instanceof vu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xp(s)&&(s=Np(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Yo?F1(t,e):t instanceof Xo?U1(t,e):function(i,s){const o=V1(i,s),l=Dv(o)+Dv(i.Pe);return Qf(o)&&Qf(i.Pe)?M1(l):Mp(i.serializer,l)}(t,e)}function fb(t,e,n){return t instanceof Yo?F1(t,e):t instanceof Xo?U1(t,e):n}function V1(t,e){return t instanceof _u?function(r){return Qf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vu extends tc{}class Yo extends tc{constructor(e){super(),this.elements=e}}function F1(t,e){const n=j1(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends tc{constructor(e){super(),this.elements=e}}function U1(t,e){let n=j1(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class _u extends tc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Dv(t){return be(t.integerValue||t.doubleValue)}function j1(t){return bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function db(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Yo&&i instanceof Yo||r instanceof Xo&&i instanceof Xo?ls(r.elements,i.elements,vn):r instanceof _u&&i instanceof _u?vn(r.Pe,i.Pe):r instanceof vu&&i instanceof vu}(t.transform,e.transform)}class pb{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function z1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $1(t.key,bn.none()):new ma(t.key,t.data,bn.none());{const n=t.data,r=Ft.empty();let i=new Xe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pi(t.key,r,new Xt(i.toArray()),bn.none())}}function mb(t,e,n){t instanceof ma?function(i,s,o){const l=i.value.clone(),u=Vv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof pi?function(i,s,o){if(!xl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Vv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(B1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof ma?function(s,o,l,u){if(!xl(s.precondition,o))return l;const c=s.value.clone(),f=Fv(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof pi?function(s,o,l,u){if(!xl(s.precondition,o))return l;const c=Fv(s.fieldTransforms,u,o),f=o.data;return f.setAll(B1(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return xl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function gb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=V1(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function Mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ls(r,i,(s,o)=>db(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pi extends nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function B1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vv(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,fb(o,l,n[i]))}return r}function Fv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hb(s,o,e))}return r}class $1 extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yb extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=z1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>Mv(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>Mv(n,r))}}class Vp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return ob}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,le;function wb(t){switch(t){default:return J();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function H1(t){if(t===void 0)return Bn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Le.OK:return U.OK;case Le.CANCELLED:return U.CANCELLED;case Le.UNKNOWN:return U.UNKNOWN;case Le.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Le.INTERNAL:return U.INTERNAL;case Le.UNAVAILABLE:return U.UNAVAILABLE;case Le.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Le.NOT_FOUND:return U.NOT_FOUND;case Le.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Le.ABORTED:return U.ABORTED;case Le.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Le.DATA_LOSS:return U.DATA_LOSS;default:return J()}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new Yr([4294967295,4294967295],0);function Uv(t){const e=Tb().encode(t),n=new p1;return n.update(e),new Uint8Array(n.digest())}function jv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class Fp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oo(`Invalid padding: ${n}`);if(r<0)throw new oo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Yr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Yr.fromNumber(r)));return i.compare(Ib)===1&&(i=new Yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Uv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(ee.min(),i,new Re(fe),$n(),se())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class W1{constructor(e,n){this.targetId=e,this.me=n}}class q1{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zv{constructor(){this.fe=0,this.ge=$v(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new ga(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=$v()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Sb{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=Bv(),this.Qe=new Re(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Xf(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,lt.newNoDocument(o,ee.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=li(r).toUint8Array()}catch(u){if(u instanceof I1)return as("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Fp(o,i,s)}catch(u){return as(u instanceof oo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Xf(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,lt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new rc(e,n,this.Qe,this.ke,r);return this.ke=$n(),this.qe=Bv(),this.Qe=new Re(fe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new zv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bv(){return new Re(Q.comparator)}function $v(){return new Re(Q.comparator)}const Ab={asc:"ASCENDING",desc:"DESCENDING"},kb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cb={and:"AND",or:"OR"};class Rb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zf(t,e){return t.useProto3Json||Xu(e)?e:{value:e}}function Eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Pb(t,e){return Eu(t,e.toTimestamp())}function yn(t){return ge(!!t),ee.fromTimestamp(function(n){const r=Cr(n);return new Ue(r.seconds,r.nanos)}(t))}function Up(t,e){return ed(t,e).canonicalString()}function ed(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function G1(t){const e=Ne.fromString(t);return ge(Z1(e)),e}function td(t,e){return Up(t.databaseId,e.path)}function yh(t,e){const n=G1(e);if(n.get(1)!==t.databaseId.projectId)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Y1(n))}function Q1(t,e){return Up(t.databaseId,e)}function xb(t){const e=G1(t);return e.length===4?Ne.emptyPath():Y1(e)}function nd(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Y1(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hv(t,e,n){return{name:td(t,e),fields:n.value.mapValue.fields}}function Nb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ge(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(ge(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?U.UNKNOWN:H1(c.code);return new G(f,c.message||"")}(o);n=new q1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yh(t,r.document.name),s=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):ee.min(),l=new Ft({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Nl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yh(t,r.document),s=r.readTime?yn(r.readTime):ee.min(),o=lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yh(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Eb(i,s),l=r.targetId;n=new W1(l,o)}}return n}function bb(t,e){let n;if(e instanceof ma)n={update:Hv(t,e.key,e.value)};else if(e instanceof $1)n={delete:td(t,e.key)};else if(e instanceof pi)n={update:Hv(t,e.key,e.data),updateMask:zb(e.fieldMask)};else{if(!(e instanceof yb))return J();n={verify:td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _u)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Pb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function Ob(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yn(i.updateTime):yn(s);return o.isEqual(ee.min())&&(o=yn(s)),new pb(o,i.transformResults||[])}(n,e))):[]}function Lb(t,e){return{documents:[Q1(t,e.path)]}}function Db(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Q1(t,i);const s=function(c){if(c.length!==0)return J1(_n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Si(m.field),direction:Fb(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Zf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Mb(t){let e=xb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=X1(p);return m instanceof _n&&C1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new yu(Ai(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Xu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,A=p.values||[];return new gu(A,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,A=p.values||[];return new gu(A,m)}(n.endAt)),eb(e,i,o,s,l,"F",u,c)}function Vb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function X1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ai(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ai(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ai(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ai(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ai(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>X1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function Fb(t){return Ab[t]}function Ub(t){return kb[t]}function jb(t){return Cb[t]}function Si(t){return{fieldPath:t.canonicalString()}}function Ai(t){return Qe.fromServerFormat(t.fieldPath)}function J1(t){return t instanceof Ve?function(n){if(n.op==="=="){if(xv(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xv(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NOT_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Si(n.field),op:Ub(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(i=>J1(i));return r.length===1?r[0]:{compositeFilter:{op:jb(n.op),filters:r}}}(t):J()}function zb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Z1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.ct=e}}function $b(t){const e=Mb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.un=new Wb}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(kr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new hs(0)}static kn(){return new hs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Io(r.mutation,i,Xt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=so();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=To(),l=function(){return To()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof pi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Io(f.mutation,c,f.mutation.getFieldMask(),Ue.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new Kb(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=To();let i=new Re((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Xt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=D1();f.forEach(m=>{if(!s.has(m)){const A=z1(n.get(m),r.get(m));A!==null&&p.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Kr());let l=-1,u=s;return o.next(c=>F.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:L1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=so();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=so();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new Ju(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=so();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Io(f.mutation,c,Xt.empty(),Ue.now()),ec(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:$b(i.bundledQuery),readTime:yn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.overlays=new Re(Q.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Kr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _b(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.Tr=new Xe(je.Er),this.dr=new Xe(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Ne([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Ne([])),r=new je(n,e),i=new je(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(je.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(fe);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new je(new Q(s),0);let l=new Xe(fe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.Mr=e,this.docs=function(){return new Re(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||DN(LN(f),r)<=0||(i.has(f.key)||ec(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new e4(this)}getSize(e){return F.resolve(this.size)}}class e4 extends qb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.persistence=e,this.Nr=new Ts(n=>Op(n),Lp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jp,this.targetCount=0,this.kr=hs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pp(0),this.Kr=!1,this.Kr=!0,this.$r=new Xb,this.referenceDelegate=e(this),this.Ur=new t4(this),this.indexManager=new Hb,this.remoteDocumentCache=function(i){return new Zb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Bb(n),this.Gr=new Qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Yb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Jb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new r4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class r4 extends VN{constructor(e){super(),this.currentSequenceNumber=e}}class zp{constructor(e){this.persistence=e,this.Jr=new jp,this.Yr=null}static Zr(e){return new zp(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QC()?8:FN(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new i4;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ks()<=oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Ks()<=oe.DEBUG&&W("QueryEngine","Query:",Ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ks()<=oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):F.resolve())}Yi(e,n){if(Lv(n))return F.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jf(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Jf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Lv(n)||i.isEqual(ee.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Ks()<=oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ii(n)),this.rs(e,o,n,ON(i,-1)).next(l=>l))})}ts(e,n){let r=new Xe(b1(e));return n.forEach((i,s)=>{ec(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ks()<=oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ii(n)),this.Ji.getDocumentsMatchingQuery(e,n,kr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(fe),this._s=new Ts(s=>Op(s),Lp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function a4(t,e,n,r){return new o4(t,e,n,r)}async function eT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function l4(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let A=F.resolve();return m.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(P=>{const N=c.docVersions.get(C);ge(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tT(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function u4(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ze.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(P,N,E){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=$n(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(c4(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function c4(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function h4(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function f4(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function rd(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pa(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Wv(t,e,n){const r=te(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=te(u),m=p._s.get(f);return m!==void 0?F.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,gn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(l=>(d4(r,rb(e),l),{documents:l,Ts:s})))}function d4(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class qv{constructor(){this.activeTargetIds=ub()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p4{constructor(){this.so=new qv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al=null;function vh(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class v4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=vh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw as("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=g4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=vh();return new Promise((o,l)=>{const u=new m1;u.setWithCredentials(!0),u.listenOnce(g1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rl.NO_ERROR:const f=u.getResponseJson();W(st,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Rl.TIMEOUT:W(st,`RPC '${e}' ${s} timed out`),l(new G(U.DEADLINE_EXCEEDED,"Request time out"));break;case Rl.HTTP_ERROR:const p=u.getStatus();if(W(st,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const C=function(N){const E=N.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(E)>=0?E:U.UNKNOWN}(A.status);l(new G(C,A.message))}else l(new G(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(U.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W(st,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(st,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=vh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_1(),l=v1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(st,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,A=!1;const C=new y4({Io:N=>{A?W(st,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(W(st,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(st,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,E,_)=>{N.listen(E,T=>{try{_(T)}catch(x){setTimeout(()=>{throw x},0)}})};return P(p,io.EventType.OPEN,()=>{A||(W(st,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),P(p,io.EventType.CLOSE,()=>{A||(A=!0,W(st,`RPC '${e}' stream ${i} transport closed`),C.So())}),P(p,io.EventType.ERROR,N=>{A||(A=!0,as(st,`RPC '${e}' stream ${i} transport errored:`,N),C.So(new G(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,io.EventType.MESSAGE,N=>{var E;if(!A){const _=N.data[0];ge(!!_);const T=_,x=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(x){W(st,`RPC '${e}' stream ${i} received error:`,x);const L=x.status;let M=function(v){const S=Le[v];if(S!==void 0)return H1(S)}(L),w=x.message;M===void 0&&(M=U.INTERNAL,w="Unknown error status: "+L+" with message "+x.message),A=!0,C.So(new G(M,w)),p.close()}else W(st,`RPC '${e}' stream ${i} received:`,_),C.bo(_)}}),P(l,y1.STAT_EVENT,N=>{N.stat===Kf.PROXY?W(st,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Kf.NOPROXY&&W(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function _h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new Rb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _4 extends rT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Nb(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?yn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Xf(u)?{documents:Lb(s,u)}:{query:Db(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=K1(s,o.resumeToken);const c=Zf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Eu(s,o.snapshotVersion.toTimestamp());const c=Zf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Vb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=nd(this.serializer),n.removeTarget=e,this.a_(n)}}class E4 extends rT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Ob(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=nd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bb(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ed(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ed(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class T4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{mi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await ya(c),c.q_.set("Unknown"),c.L_.delete(4),await sc(c)}(this))})}),this.q_=new T4(r,i)}}async function sc(t){if(mi(t))for(const e of t.B_)await e(!0)}async function ya(t){for(const e of t.B_)await e(!1)}function iT(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),qp(n)?Wp(n):Is(n).r_()&&Hp(n,e))}function $p(t,e){const n=te(t),r=Is(n);n.N_.delete(e),r.r_()&&sT(n,e),n.N_.size===0&&(r.r_()?r.o_():mi(n)&&n.q_.set("Unknown"))}function Hp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).A_(e)}function sT(t,e){t.Q_.xe(e),Is(t).R_(e)}function Wp(t){t.Q_=new Sb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.q_.v_()}function qp(t){return mi(t)&&!Is(t).n_()&&t.N_.size>0}function mi(t){return te(t).L_.size===0}function oT(t){t.Q_=void 0}async function S4(t){t.q_.set("Online")}async function A4(t){t.N_.forEach((e,n)=>{Hp(t,e)})}async function k4(t,e){oT(t),qp(t)?(t.q_.M_(e),Wp(t)):t.q_.set("Unknown")}async function C4(t,e,n){if(t.q_.set("Online"),e instanceof q1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wu(t,r)}else if(e instanceof Nl?t.Q_.Ke(e):e instanceof W1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await tT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),sT(s,u);const p=new lr(f.target,u,c,f.sequenceNumber);Hp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await wu(t,r)}}async function wu(t,e,n){if(!pa(e))throw e;t.L_.add(1),await ya(t),t.q_.set("Offline"),n||(n=()=>tT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await sc(t)})}function aT(t,e){return e().catch(n=>wu(t,n,e))}async function oc(t){const e=te(t),n=Rr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;R4(e);)try{const i=await h4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,P4(e,i)}catch(i){await wu(e,i)}lT(e)&&uT(e)}function R4(t){return mi(t)&&t.O_.length<10}function P4(t,e){t.O_.push(e);const n=Rr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function lT(t){return mi(t)&&!Rr(t).n_()&&t.O_.length>0}function uT(t){Rr(t).start()}async function x4(t){Rr(t).p_()}async function N4(t){const e=Rr(t);for(const n of t.O_)e.m_(n.mutations)}async function b4(t,e,n){const r=t.O_.shift(),i=Vp.from(r,e,n);await aT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oc(t)}async function O4(t,e){e&&Rr(t).V_&&await async function(r,i){if(function(o){return wb(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();Rr(r).s_(),await aT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oc(r)}}(t,e),lT(t)&&uT(t)}async function Gv(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.L_.add(3),await ya(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await sc(n)}async function L4(t,e){const n=te(t);e?(n.L_.delete(2),await sc(n)):e||(n.L_.add(2),await ya(n),n.q_.set("Unknown"))}function Is(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new _4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:S4.bind(null,t),Ro:A4.bind(null,t),mo:k4.bind(null,t),d_:C4.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qp(t)?Wp(t):t.q_.set("Unknown")):(await t.K_.stop(),oT(t))})),t.K_}function Rr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new E4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:x4.bind(null,t),mo:O4.bind(null,t),f_:N4.bind(null,t),g_:b4.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await oc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Kp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),pa(t))return new G(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.W_=new Re(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fs(e,n,Xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class M4{constructor(){this.queries=Yv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Yv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(U.ABORTED,"Firestore shutting down"))}}function Yv(){return new Ts(t=>N1(t),Zu)}async function V4(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new D4,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Gp(o,`Initialization of query '${Ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Qp(n)}async function F4(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function U4(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Qp(n)}function j4(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Qp(t){t.Y_.forEach(e=>{e.next()})}var id,Xv;(Xv=id||(id={})).ea="default",Xv.Cache="cache";class z4{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==id.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.key=e}}class hT{constructor(e){this.key=e}}class B4{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=b1(e),this.Ra=new Xi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Qv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),A=ec(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;m&&A?m.data.isEqual(A.data)?C!==P&&(r.track({type:3,doc:A}),N=!0):this.ga(m,A)||(r.track({type:2,doc:A}),N=!0,(u&&this.Aa(A,u)>0||c&&this.Aa(A,c)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),N=!0):m&&!A&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(A?(o=o.add(A),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(A,C){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return P(A)-P(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new fs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new hT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cT(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class H4{constructor(e){this.key=e,this.va=!1}}class W4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ts(l=>N1(l),Zu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(Q.comparator),this.Na=new Map,this.La=new jp,this.Ba={},this.ka=new Map,this.qa=hs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function q4(t,e,n=!0){const r=yT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await fT(r,e,n,!0),i}async function K4(t,e){const n=yT(t);await fT(n,e,!0,!1)}async function fT(t,e,n,r){const i=await f4(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await G4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&iT(t.remoteStore,i),l}async function G4(t,e,n,r,i){t.Ka=(p,m,A)=>async function(P,N,E,_){let T=N.view.ma(E);T.ns&&(T=await Wv(P.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,T)));const x=_&&_.targetChanges.get(N.targetId),L=_&&_.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(T,P.isPrimaryClient,x,L);return Zv(P,N.targetId,M.wa),M.snapshot}(t,p,m,A);const s=await Wv(t.localStore,e,!0),o=new B4(e,s.Ts),l=o.ma(s.documents),u=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Zv(t,n,c.wa);const f=new $4(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Q4(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Zu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$p(r.remoteStore,i.targetId),sd(r,i.targetId)}).catch(da)):(sd(r,i.targetId),await rd(r.localStore,i.targetId,!0))}async function Y4(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$p(n.remoteStore,r.targetId))}async function X4(t,e,n){const r=iO(t);try{const i=await function(o,l){const u=te(o),c=Ue.now(),f=l.reduce((A,C)=>A.add(C.key),se());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=$n(),P=se();return u.cs.getEntries(A,f).next(N=>{C=N,C.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(N=>{p=N;const E=[];for(const _ of l){const T=gb(_,p.get(_.key).overlayedDocument);T!=null&&E.push(new pi(_.key,T,S1(T.value.mapValue),bn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,E,l)}).next(N=>{m=N;const E=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(A,N.batchId,E)})}).then(()=>({batchId:m.batchId,changes:L1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Re(fe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await va(r,i.changes),await oc(r.remoteStore)}catch(i){const s=Gp(i,"Failed to persist write");n.reject(s)}}async function dT(t,e){const n=te(t);try{const r=await u4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await va(n,r,e)}catch(r){await da(r)}}function Jv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Qp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J4(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(Q.comparator);o=o.insert(s,lt.newNoDocument(s,ee.min()));const l=se().add(s),u=new rc(ee.min(),new Map,new Re(fe),o,l);await dT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Yp(r)}else await rd(r.localStore,e,!1).then(()=>sd(r,e,n)).catch(da)}async function Z4(t,e){const n=te(t),r=e.batch.batchId;try{const i=await l4(n.localStore,e);mT(n,r,null),pT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await da(i)}}async function eO(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ge(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);mT(r,e,n),pT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await da(i)}}function pT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mT(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function sd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||gT(t,r)})}function gT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($p(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yp(t))}function Zv(t,e,n){for(const r of n)r instanceof cT?(t.La.addReference(r.key,e),tO(t,r)):r instanceof hT?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||gT(t,r.key)):J()}function tO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yp(t))}function Yp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new H4(n)),t.Oa=t.Oa.insert(n,r),iT(t.remoteStore,new lr(gn(Dp(n.path)),r,"TargetPurposeLimboResolution",Pp.oe))}}async function va(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Bp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.$i,A=>f.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>F.forEach(m.Ui,A=>f.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!pa(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const A=f.os.get(m),C=A.snapshotVersion,P=A.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,P)}}}(r.localStore,s))}async function nO(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await eT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.hs)}}function rO(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function yT(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J4.bind(null,e),e.Ca.d_=U4.bind(null,e.eventManager),e.Ca.$a=j4.bind(null,e.eventManager),e}function iO(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eO.bind(null,e),e}class Tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return a4(this.persistence,new s4,e.initialUser,this.serializer)}Ga(e){return new n4(zp.Zr,this.serializer)}Wa(e){return new p4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tu.provider={build:()=>new Tu};class od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nO.bind(null,this.syncEngine),await L4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new M4}()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=function(s){return new v4(s)}(e.databaseInfo);return function(s,o,l,u){return new w4(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new I4(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Jv(this.syncEngine,n,0),function(){return Kv.D()?new Kv:new m4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new W4(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ya(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}od.provider={build:()=>new od};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=w1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Eh(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aO(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Gv(e.remoteStore,i)),t._onlineComponents=e}async function aO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Eh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await Eh(t,new Tu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Eh(t,new Tu);return t._offlineComponents}async function vT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await e_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await e_(t,new od))),t._onlineComponents}function lO(t){return vT(t).then(e=>e.syncEngine)}async function uO(t){const e=await vT(t),n=e.eventManager;return n.onListen=q4.bind(null,e.syncEngine),n.onUnlisten=Q4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=K4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Y4.bind(null,e.syncEngine),n}function cO(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new sO({next:m=>{f.Za(),o.enqueueAndForget(()=>F4(s,p));const A=m.docs.has(l);!A&&m.fromCache?c.reject(new G(U.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?c.reject(new G(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new z4(Dp(l.path),f,{includeMetadataChanges:!0,_a:!0});return V4(s,p)}(await uO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t,e,n){if(!n)throw new G(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fO(t,e,n,r){if(e===!0&&r===!0)throw new G(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n_(t){if(!Q.isDocumentKey(t))throw new G(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Jo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xp(t);throw new G(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_T((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SN;switch(r.type){case"firstParty":return new RN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t_.get(n);r&&(W("ComponentProvider","Removing Datastore"),t_.delete(n),r.terminate())}(this),Promise.resolve()}}function dO(t,e,n,r={}){var i;const s=(t=Jo(t,Jp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ot.MOCK_USER;else{l=kw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(c)}t._authCredentials=new AN(new E1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zp(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Zo extends Zp{constructor(e,n,r){super(e,n,Dp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new Q(e))}withConverter(e){return new Zo(this.firestore,e,this._path)}}function bl(t,e,...n){if(t=ft(t),arguments.length===1&&(e=w1.newId()),hO("doc","path",e),t instanceof Jp){const r=Ne.fromString(e,...n);return n_(r),new zt(t,null,new Q(r))}{if(!(t instanceof zt||t instanceof Zo))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return n_(r),new zt(t.firestore,t instanceof Zo?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nT(this,"async_queue_retry"),this.Vu=()=>{const r=_h();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_h();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new _r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pa(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Kp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class em extends Jp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new i_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new i_(e),this._firestoreClient=void 0,await e}}}function pO(t,e){const n=typeof t=="object"?t:vp(),r=typeof t=="string"?t:e,i=Ku(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Iw("firestore");s&&dO(i,...s)}return i}function ET(t){if(t._terminated)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mO(t),t._firestoreClient}function mO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new zN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,_T(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new oO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(Ze.fromBase64String(e))}catch(n){throw new G(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=/^__.*__$/;class yO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}function TT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class im{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Iu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(TT(this.Cu)&&gO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}Qu(e,n,r,i=!1){return new im({Cu:e,methodName:n,qu:r,path:Qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _O(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new vO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EO(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);kT("Data must be an object, but it was:",o,r);const l=ST(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=wO(e,p,n);if(!o.contains(m))throw new G(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);IO(f,m)||f.push(m)}u=new Xt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new yO(new Ft(l),u,c)}function IT(t,e){if(AT(t=ft(t)))return kT("Unsupported field value:",e,t),ST(t,e);if(t instanceof wT)return function(r,i){if(!TT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=IT(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Eu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(i.serializer,s)}}if(r instanceof nm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:K1(i.serializer,r._byteString)};if(r instanceof zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Up(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof rm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Xp(r)}`)}(t,e)}function ST(t,e){const n={};return T1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,i)=>{const s=IT(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof nm||t instanceof ds||t instanceof zt||t instanceof wT||t instanceof rm)}function kT(t,e,n){if(!AT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function wO(t,e,n){if((e=ft(e))instanceof tm)return e._internalPath;if(typeof e=="string")return CT(t,e);throw Iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const TO=new RegExp("[~\\*/\\[\\]]");function CT(t,e,n){if(e.search(TO)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tm(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(U.INVALID_ARGUMENT,l+t+u)}function IO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SO extends RT{data(){return super.data()}}function PT(t,e){return typeof e=="string"?CT(t,e):e instanceof tm?e._internalPath:e._delegate._internalPath}class AO{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new rm(s)}convertGeoPoint(e){return new nm(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Np(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);ge(Z1(r));const i=new Go(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xT extends RT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new RO(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(PT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class RO extends xT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){t=Jo(t,zt);const e=Jo(t.firestore,em);return cO(ET(e),t._key).then(n=>NO(e,t,n))}class PO extends AO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function s_(t,e,n){t=Jo(t,zt);const r=Jo(t.firestore,em),i=kO(t.converter,e,n);return xO(r,[EO(_O(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,bn.none())])}function xO(t,e){return function(r,i){const s=new _r;return r.asyncQueue.enqueueAndForget(async()=>X4(await lO(r),i,s)),s.promise}(ET(t),e)}function NO(t,e,n){const r=n.docs.get(e._key),i=new PO(t);return new xT(t,i,e._key,r,new CO(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Es=i})(di),si(new Ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new em(new kN(r.getProvider("auth-internal")),new xN(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),fn(Sv,"4.7.3",e),fn(Sv,"4.7.3","esm2017")})();var bO="firebase",OO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(bO,OO,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebasestorage.googleapis.com",OT="storageBucket",LO=2*60*1e3,DO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends En{constructor(e,n,r=0){super(wh(e),`Firebase Storage: ${n} (${wh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function wh(t){return"storage/"+t}function LT(){const t="An unknown error occurred, please check the error payload for server response.";return new We(He.UNKNOWN,t)}function MO(t){return new We(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function VO(t){return new We(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(He.UNAUTHENTICATED,t)}function UO(){return new We(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jO(t){return new We(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zO(){return new We(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BO(){return new We(He.CANCELED,"User canceled the upload/download.")}function $O(t){return new We(He.INVALID_URL,"Invalid URL '"+t+"'.")}function HO(t){return new We(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WO(){return new We(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+OT+"' property when initializing the app?")}function qO(){return new We(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ad(t){return new We(He.INVALID_ARGUMENT,t)}function DT(){return new We(He.APP_DELETED,"The Firebase app was deleted.")}function KO(t){return new We(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gs(t){throw new We(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw HO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},P=n===bT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${N}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:A,indices:C,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<T.length;x++){const L=T[x],M=L.regex.exec(e);if(M){const w=M[L.indices.bucket];let g=M[L.indices.path];g||(g=""),r=new xt(w,g),L.postModify(r);break}}if(r==null)throw $O(e);return r}}class GO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(A,u())},N)}function m(){s&&clearTimeout(s)}function A(N,...E){if(c){m();return}if(N){m(),f.call(null,N,...E);return}if(u()||o){m(),f.call(null,N,...E);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,p(T)}let C=!1;function P(N){C||(C=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function YO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){return t!==void 0}function JO(t){return typeof t=="object"&&!Array.isArray(t)}function MT(t){return typeof t=="string"||t instanceof String}function o_(t,e,n,r){if(r<e)throw ad(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ad(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Xr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xr||(Xr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n,r,i,s,o,l,u,c,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,C)=>{this.resolve_=A,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ll(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Xr.NO_ERROR,u=s.getStatus();if(!l||ZO(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Xr.ABORT;r(!1,new ll(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ll(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());XO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=LT();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?DT():BO();o(u)}else{const u=zO();o(u)}};this.canceled_?n(!1,new ll(!1,null,!0)):this.backoffId_=QO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ll{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function tL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sL(t,e,n,r,i,s,o=!0){const l=FT(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return rL(c,e),tL(c,n),nL(c,s),iL(c,r),new eL(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t){let e;try{e=JSON.parse(t)}catch{return null}return JO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||lL}}let ul=null;function uL(t){return!MT(t)||t.length<2?t:jT(t)}function cL(){if(ul)return ul;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return uL(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),ul=t,ul}function hL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new xt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function fL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return hL(r,t),r}function dL(t,e,n){const r=UT(e);return r===null?null:fL(t,r,n)}function pL(t,e,n,r){const i=UT(e);if(i===null||!MT(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),A=VT(m,n,r),C=FT({alt:"media",token:c});return A+C})[0]}class mL{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(t){if(!t)throw LT()}function yL(t,e){function n(r,i){const s=dL(t,i,e);return gL(s!==null),pL(s,i,t.host,t._protocol)}return n}function vL(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=UO():i=FO():n.getStatus()===402?i=VO(t.bucket):n.getStatus()===403?i=jO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function _L(t){const e=vL(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=MO(t.path)),s.serverResponse=i.serverResponse,s}return n}function EL(t,e,n){const r=e.fullServerUrl(),i=VT(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new mL(i,s,yL(t,n),o);return l.errorHandler=_L(e),l}class wL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TL extends wL{initXhr(){this.xhr_.responseType="text"}}function IL(){return new TL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ci(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jT(this._location.path)}get storage(){return this._service}get parent(){const e=oL(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw KO(e)}}function SL(t){t._throwIfRoot("getDownloadURL");const e=EL(t.storage,t._location,cL());return t.storage.makeRequestWithTokens(e,IL).then(n=>{if(n===null)throw qO();return n})}function AL(t,e){const n=aL(t._location.path,e),r=new xt(t._location.bucket,n);return new ci(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){return/^[A-Za-z]+:\/\//.test(t)}function CL(t,e){return new ci(t,e)}function zT(t,e){if(t instanceof sm){const n=t;if(n._bucket==null)throw WO();const r=new ci(n,n._bucket);return e!=null?zT(r,e):r}else return e!==void 0?AL(t,e):t}function RL(t,e){if(e&&kL(e)){if(t instanceof sm)return CL(t,e);throw ad("To use ref(service, url), the first argument must be a Storage instance.")}else return zT(t,e)}function a_(t,e){const n=e==null?void 0:e[OT];return n==null?null:xt.makeFromBucketSpec(n,t)}function PL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kw(i,t.app.options.projectId))}class sm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=bT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LO,this._maxUploadRetryTime=DO,this._requests=new Set,i!=null?this._bucket=xt.makeFromBucketSpec(i,this._host):this._bucket=a_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=a_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ci(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new GO(DT());{const o=sL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const l_="@firebase/storage",u_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="storage";function xL(t){return t=ft(t),SL(t)}function NL(t,e){return t=ft(t),RL(t,e)}function bL(t=vp(),e){t=ft(t);const r=Ku(t,BT).getImmediate({identifier:e}),i=Iw("storage");return i&&OL(r,...i),r}function OL(t,e,n,r={}){PL(t,e,n,r)}function LL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sm(n,r,i,e,di)}function DL(){si(new Ar(BT,LL,"PUBLIC").setMultipleInstances(!0)),fn(l_,u_,""),fn(l_,u_,"esm2017")}DL();const ML={apiKey:"AIzaSyDqGGBsry3u5lo0T83X6T4B__v8On_kSV0",authDomain:"neighborhood-values.firebaseapp.com",projectId:"neighborhood-values",storageBucket:"neighborhood-values.firebasestorage.app",messagingSenderId:"259918371128",appId:"1:259918371128:web:35e0037527bf28b6f409cd"},om=Pw(ML),Ol=pO(om,"neighborhood-values"),ld=d1(om),VL=bL(om);rx(ld).catch(t=>{console.error("Anonymous sign-in failed:",t)});const $T=V.createContext({user:null,userData:null,loading:!0,isAnonymous:!0,signOut:async()=>{}}),ac=()=>V.useContext($T),FL=({children:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(null),[s,o]=V.useState(!0),[l,u]=V.useState(!0);V.useEffect(()=>{const f=hx(ld,async p=>{if(n(p),u((p==null?void 0:p.isAnonymous)||!0),p&&!p.isAnonymous){const m=await NT(bl(Ol,"users",p.uid)),A=m.exists()?m.data().role:"User";i({uid:p.uid,email:p.email||"",role:A,displayName:p.displayName||void 0})}else i(null);o(!1)});return()=>f()},[]);const c=async()=>{await fx(ld),n(null),i(null)};return I.jsx($T.Provider,{value:{user:e,userData:r,loading:s,isAnonymous:l,signOut:c},children:t})},UL=({onClose:t,onLoginSuccess:e})=>{const{user:n,userData:r,isAnonymous:i,signOut:s}=ac(),[o,l]=V.useState(""),[u,c]=V.useState(""),[f,p]=V.useState(!1),[m,A]=V.useState("User"),[C,P]=V.useState(!1),[N,E]=V.useState(null),_=d1(),T=async g=>{try{const v=await NT(bl(Ol,"users",g));return v.exists()&&v.data().role||"User"}catch(v){return console.error("Error fetching user role:",v),"User"}},x=async(g,v,S)=>{try{await s_(bl(Ol,"users",g),{email:v,role:S,createdAt:new Date,lastLogin:new Date})}catch(R){throw console.error("Error saving user data:",R),R}},L=async g=>{g.preventDefault(),console.log("Login handler called"),P(!0),E("");try{const S=(await lx(_,o,u)).user;await T(S.uid),await s_(bl(Ol,"users",S.uid),{lastLogin:new Date},{merge:!0}),e&&e()}catch(v){E(v.message||"Login failed")}finally{P(!1)}},M=async g=>{g.preventDefault(),console.log("Register handler called"),P(!0),E("");try{const S=(await ax(_,o,u)).user;await x(S.uid,S.email,m),e&&e()}catch(v){E(v.message||"Registration failed")}finally{P(!1)}},w=async()=>{await s(),t&&t()};if(n){const g=(r==null?void 0:r.email)||n.email,v=(r==null?void 0:r.role)||"User";return I.jsxs("div",{className:"header-panel login-panel",children:[I.jsxs("div",{className:"panel-header",children:[I.jsx("h3",{children:"User Profile"}),I.jsx("button",{className:"close-btn",onClick:t,children:I.jsx(Be,{icon:os})})]}),I.jsx("div",{className:"panel-content",children:I.jsxs("div",{className:"user-info-display",children:[I.jsxs("p",{children:[I.jsx("strong",{children:"Email:"})," ",g]}),I.jsxs("p",{children:[I.jsx("strong",{children:"Role:"})," ",v]}),I.jsx("button",{onClick:w,className:"logout-btn",children:"Sign Out"})]})})]})}return I.jsxs("div",{className:"header-panel login-panel",children:[I.jsxs("div",{className:"panel-header",children:[I.jsx("h3",{children:f?"User Registration":"User Login"}),I.jsx("button",{className:"close-btn",onClick:t,children:I.jsx(Be,{icon:os})})]}),I.jsx("div",{className:"panel-content",children:I.jsxs("form",{className:"login-form",onSubmit:f?M:L,children:[N&&I.jsx("div",{className:"error-message",children:N}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"email",children:"Email"}),I.jsx("input",{type:"email",id:"email",value:o,onChange:g=>l(g.target.value),placeholder:"Enter your email",className:"form-input",required:!0})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"password",children:"Password"}),I.jsx("input",{type:"password",id:"password",value:u,onChange:g=>c(g.target.value),placeholder:"Enter your password",className:"form-input",required:!0})]}),f&&I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"role",children:"User Role"}),I.jsxs("select",{id:"role",value:m,onChange:g=>A(g.target.value),className:"form-input",children:[I.jsx("option",{value:"User",children:"User"}),I.jsx("option",{value:"Admin",children:"Admin"})]})]}),I.jsxs("div",{className:"form-actions",children:[I.jsx("button",{type:"submit",className:"login-btn",disabled:C,children:C?"Processing...":f?"Register":"Login"}),I.jsx("button",{type:"button",className:"register-btn",onClick:()=>{p(!f),E("")},children:f?"Back to Login":"Register"})]}),!f&&I.jsx("div",{className:"form-links",children:I.jsx("a",{href:"#",className:"forgot-password",children:"Forgot Password?"})})]})})]})},jL=({onClose:t,onAddPoint:e,coordinates:n,onCoordinatesChange:r,setIsAddingPoint:i})=>{const[s,o]=V.useState(""),[l,u]=V.useState(""),[c,f]=V.useState(""),[p,m]=V.useState("Active"),[A,C]=V.useState(""),[P,N]=V.useState(""),[E,_]=V.useState(""),[T,x]=V.useState(""),[L,M]=V.useState("");V.useEffect(()=>{n&&(x(n.lat.toString()),M(n.lng.toString()))},[n]);const w=v=>{v.preventDefault();const S={type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(L),parseFloat(T)]},properties:{"Service Ty":s,"Cross Stre":l,neighbhood:c,Status:p,"Full Addre":A,"Refferal S":P,Estimate:E}};e(S),t()},g=()=>{x(""),M(""),r&&r(null),i&&i(!0)};return I.jsxs("div",{className:"header-panel add-point-panel",children:[I.jsxs("div",{className:"panel-header",children:[I.jsx("h3",{children:"Add New Service Point"}),I.jsx("button",{className:"close-btn",onClick:t,children:I.jsx(Be,{icon:os})})]}),I.jsx("div",{className:"panel-content",children:I.jsxs("form",{className:"add-point-form",onSubmit:w,children:[I.jsxs("div",{className:"form-group coordinates-group",children:[I.jsxs("div",{className:"coords-display",children:[I.jsxs("div",{children:[I.jsx("label",{children:"Latitude"}),I.jsx("input",{type:"text",value:T,onChange:v=>x(v.target.value),required:!0,readOnly:!0})]}),I.jsxs("div",{children:[I.jsx("label",{children:"Longitude"}),I.jsx("input",{type:"text",value:L,onChange:v=>M(v.target.value),required:!0,readOnly:!0})]})]}),I.jsx("button",{type:"button",onClick:g,className:"reset-coords-btn",children:"Reset Location"})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Service Type"}),I.jsx("input",{type:"text",value:s,onChange:v=>o(v.target.value),required:!0})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Cross Street"}),I.jsx("input",{type:"text",value:l,onChange:v=>u(v.target.value),required:!0})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Neighborhood"}),I.jsx("input",{type:"text",value:c,onChange:v=>f(v.target.value),required:!0})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Status"}),I.jsxs("select",{value:p,onChange:v=>m(v.target.value),children:[I.jsx("option",{value:"Active",children:"Active"}),I.jsx("option",{value:"Pending",children:"Pending"}),I.jsx("option",{value:"Complete",children:"Complete"})]})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Full Address"}),I.jsx("input",{type:"text",value:A,onChange:v=>C(v.target.value)})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Referral Source"}),I.jsx("input",{type:"text",value:P,onChange:v=>N(v.target.value)})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{children:"Estimate"}),I.jsx("input",{type:"text",value:E,onChange:v=>_(v.target.value)})]}),I.jsx("button",{type:"submit",className:"add-point-btn",children:"Add Point"})]})})]})},zL=({onLocationSelect:t,filters:e,onFiltersChange:n,filterPanelOpen:r,setFilterPanelOpen:i,isAddingPoint:s,setIsAddingPoint:o,addPointCoordinates:l,setAddPointCoordinates:u})=>{const[c,f]=V.useState(null),{user:p,userData:m,isAnonymous:A,signOut:C}=ac();V.useEffect(()=>{l&&f("add-point")},[l]);const P=T=>{if(T==="filter")i(!r),f(null);else if(T==="add-point"){const x=!s;o(x),f(x?"add-point":null),i(!1)}else f(c===T?null:T),i(!1),o(!1)},N=()=>{f(null),i(!1),o(!1),u(null)},E=T=>{console.log("New point to add:",T)},_=T=>{t&&t(T),N()};return I.jsxs(I.Fragment,{children:[I.jsxs("header",{className:"app-header",children:[I.jsx("div",{className:"logo-container",children:I.jsx("img",{src:H2,alt:"Neighborhood Values Logo",className:"app-logo"})}),I.jsx("div",{className:"logo-container",children:I.jsx("img",{src:W2,alt:"Neighborhood Values Logo Text",className:"app-logo"})}),I.jsxs("div",{className:"button-box",children:[I.jsx("button",{className:c==="search"?"active":"",onClick:()=>P("search"),children:I.jsx(Be,{icon:kC})}),I.jsx("button",{className:r?"active":"",onClick:()=>P("filter"),children:I.jsx(Be,{icon:mC})}),I.jsx("button",{className:c==="login"?"active":"",onClick:()=>P("login"),children:I.jsx(Be,{icon:fC})}),(m==null?void 0:m.role)==="Admin"&&I.jsx("button",{className:c==="add-point"||s?"active":"",onClick:()=>P("add-point"),children:I.jsx(Be,{icon:CC})})]})]}),c==="search"&&I.jsx(OC,{onClose:N,onLocationSelect:_}),r&&I.jsx(LC,{onClose:()=>i(!1),onFiltersChange:n,initialFilters:e}),c==="login"&&I.jsx(UL,{onClose:N}),c==="add-point"&&I.jsx(jL,{onClose:N,onAddPoint:E,coordinates:l,onCoordinatesChange:u,setIsAddingPoint:o})]})},BL="modulepreload",$L=function(t){return"/neighborhood-value-plus/"+t},c_={},HL=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=$L(u),u in c_)return;c_[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":BL,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,A)=>{p.addEventListener("load",m),p.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},WL=V.createContext(null);function qL(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,r=Array.isArray(t)?t[1]:t?t.y:0,i=Array.isArray(e)?e[0]:e?e.x:0,s=Array.isArray(e)?e[1]:e?e.y:0;return n===i&&r===s}function Rt(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n)if(!e.hasOwnProperty(i)||!Rt(t[i],e[i]))return!1;return!0}return!1}function KL(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}function h_(t,e){if(!t.getProjection)return;const n=t.getProjection(),r=e.getProjection();Rt(n,r)||e.setProjection(n)}function f_(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function d_(t,e){const n=e.viewState||e;let r=!1;if("longitude"in n&&"latitude"in n){const i=t.center;t.center=new i.constructor(n.longitude,n.latitude),r=r||i!==t.center}if("zoom"in n){const i=t.zoom;t.zoom=n.zoom,r=r||i!==t.zoom}if("bearing"in n){const i=t.bearing;t.bearing=n.bearing,r=r||i!==t.bearing}if("pitch"in n){const i=t.pitch;t.pitch=n.pitch,r=r||i!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(r=!0,t.padding=n.padding),r}const GL=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function p_(t){if(!t)return null;if(typeof t=="string"||("toJS"in t&&(t=t.toJS()),!t.layers))return t;const e={};for(const r of t.layers)e[r.id]=r;const n=t.layers.map(r=>{let i=null;"interactive"in r&&(i=Object.assign({},r),delete i.interactive);const s=e[r.ref];if(s){i=i||Object.assign({},r),delete i.ref;for(const o of GL)o in s&&(i[o]=s[o])}return i||r});return{...t,layers:n}}var m_={};const g_={version:8,sources:{},layers:[]},y_={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},Th={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},v_={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},QL=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],YL=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class ps{constructor(e,n,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=i=>{const s=this.props[v_[i.type]];s?s(i):i.type==="error"&&console.error(i.error)},this._onPointerEvent=i=>{(i.type==="mousemove"||i.type==="mouseout")&&this._updateHover(i);const s=this.props[y_[i.type]];s&&(this.props.interactiveLayerIds&&i.type!=="mouseover"&&i.type!=="mouseout"&&(i.features=this._hoveredFeatures||this._queryRenderedFeatures(i.point)),s(i),delete i.features)},this._onCameraEvent=i=>{if(!this._internalUpdate){const s=this.props[Th[i.type]];s&&s(i)}i.type in this._deferredEvents&&(this._deferredEvents[i.type]=!1)},this._MapClass=e,this.props=n,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const n=this.props;this.props=e;const r=this._updateSettings(e,n);r&&this._createShadowTransform(this._map);const i=this._updateSize(e),s=this._updateViewState(e,!0);this._updateStyle(e,n),this._updateStyleComponents(e,n),this._updateHandlers(e,n),(r||i||s&&!this._map.isMoving())&&this.redraw()}static reuse(e,n){const r=ps.savedMaps.pop();if(!r)return null;const i=r.map,s=i.getContainer();for(n.className=s.className;s.childNodes.length>0;)n.appendChild(s.childNodes[0]);i._container=n;const o=i._resizeObserver;o&&(o.disconnect(),o.observe(n)),r.setProps({...e,styleDiffing:!1}),i.resize();const{initialViewState:l}=e;return l&&(l.bounds?i.fitBounds(l.bounds,{...l.fitBoundsOptions,duration:0}):r._updateViewState(l,!1)),i.isStyleLoaded()?i.fire("load"):i.once("styledata",()=>i.fire("load")),i._update(),r}_initialize(e){const{props:n}=this,{mapStyle:r=g_}=n,i={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||XL()||null,container:e,style:p_(r)},s=i.initialViewState||i.viewState||i;if(Object.assign(i,{center:[s.longitude||0,s.latitude||0],zoom:s.zoom||0,pitch:s.pitch||0,bearing:s.bearing||0}),n.gl){const f=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=f,n.gl)}const o=new this._MapClass(i);s.padding&&o.setPadding(s.padding),n.cursor&&(o.getCanvas().style.cursor=n.cursor),this._createShadowTransform(o);const l=o._render;o._render=f=>{this._inRender=!0,l.call(o,f),this._inRender=!1};const u=o._renderTaskQueue.run;o._renderTaskQueue.run=f=>{u.call(o._renderTaskQueue,f),this._onBeforeRepaint()},o.on("render",()=>this._onAfterRepaint());const c=o.fire;o.fire=this._fireEvent.bind(this,c),o.on("resize",()=>{this._renderTransform.resize(o.transform.width,o.transform.height)}),o.on("styledata",()=>{this._updateStyleComponents(this.props,{}),h_(o.transform,this._renderTransform)}),o.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const f in y_)o.on(f,this._onPointerEvent);for(const f in Th)o.on(f,this._onCameraEvent);for(const f in v_)o.on(f,this._onEvent);this._map=o}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),ps.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const n=KL(e.transform);e.painter.transform=n,this._renderTransform=n}_updateSize(e){const{viewState:n}=e;if(n){const r=this._map;if(n.width!==r.transform.width||n.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(e,n){if(this._internalUpdate)return!1;const r=this._map,i=this._renderTransform,{zoom:s,pitch:o,bearing:l}=i,u=r.isMoving();u&&(i.cameraElevationReference="sea");const c=d_(i,{...f_(r.transform),...e});if(u&&(i.cameraElevationReference="ground"),c&&n){const f=this._deferredEvents;f.move=!0,f.zoom||(f.zoom=s!==i.zoom),f.rotate||(f.rotate=l!==i.bearing),f.pitch||(f.pitch=o!==i.pitch)}return u||d_(r.transform,e),c}_updateSettings(e,n){const r=this._map;let i=!1;for(const s of QL)if(s in e&&!Rt(e[s],n[s])){i=!0;const o=r[`set${s[0].toUpperCase()}${s.slice(1)}`];o==null||o.call(r,e[s])}return i}_updateStyle(e,n){if(e.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==n.mapStyle){const{mapStyle:r=g_,styleDiffing:i=!0}=e,s={diff:i};return"localIdeographFontFamily"in e&&(s.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(p_(r),s),!0}return!1}_updateStyleComponents(e,n){const r=this._map;let i=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!Rt(e.light,n.light)&&(i=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!Rt(e.fog,n.fog)&&(i=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!Rt(e.terrain,n.terrain)&&(!e.terrain||r.getSource(e.terrain.source))&&(i=!0,r.setTerrain(e.terrain))),i}_updateHandlers(e,n){var r,i;const s=this._map;let o=!1;for(const l of YL){const u=(r=e[l])!==null&&r!==void 0?r:!0,c=(i=n[l])!==null&&i!==void 0?i:!0;Rt(u,c)||(o=!0,u?s[l].enable(u):s[l].disable())}return o}_queryRenderedFeatures(e){const n=this._map,r=n.transform,{interactiveLayerIds:i=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(e,{layers:i.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=r}}_updateHover(e){var n;const{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){const s=e.type,o=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,l=this._queryRenderedFeatures(e.point),u=l.length>0;!u&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=l,u&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=s}else this._hoveredFeatures=null}_fireEvent(e,n,r){const i=this._map,s=i.transform,o=typeof n=="string"?n:n.type;return o==="move"&&this._updateViewState(this.props,!1),o in Th&&(typeof n=="object"&&(n.viewState=f_(s)),this._map.isMoving())?(i.transform=this._renderTransform,e.call(i,n,r),i.transform=s,i):(e.call(i,n,r),i)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const r in this._deferredEvents)this._deferredEvents[r]&&e.fire(r);this._internalUpdate=!1;const n=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{h_(this._renderTransform,n),e.transform=n}}}ps.savedMaps=[];function XL(){let t=null;if(typeof location<"u"){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||m_.MapboxAccessToken}catch{}try{t=t||m_.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return t}const JL=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function ZL(t){if(!t)return null;const e=t.map,n={getMap:()=>e,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:r=>{const i=e.transform;e.transform=t.transform;const s=e.project(r);return e.transform=i,s},unproject:r=>{const i=e.transform;e.transform=t.transform;const s=e.unproject(r);return e.transform=i,s},queryTerrainElevation:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryTerrainElevation(r,i);return e.transform=s,o},queryRenderedFeatures:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryRenderedFeatures(r,i);return e.transform=s,o}};for(const r of eD(e))!(r in n)&&!JL.includes(r)&&(n[r]=e[r].bind(e));return n}function eD(t){const e=new Set;let n=t;for(;n;){for(const r of Object.getOwnPropertyNames(n))r[0]!=="_"&&typeof t[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&e.add(r);n=Object.getPrototypeOf(n)}return Array.from(e)}const tD=typeof document<"u"?V.useLayoutEffect:V.useEffect,nD=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function rD(t,e){for(const r of nD)r in e&&(t[r]=e[r]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=e;n&&t.getRTLTextPluginStatus&&t.getRTLTextPluginStatus()==="unavailable"&&t.setRTLTextPlugin(n,r=>{r&&console.error(r)},!0)}const Ss=V.createContext(null);function iD(t,e,n){const r=V.useContext(WL),[i,s]=V.useState(null),o=V.useRef(),{current:l}=V.useRef({mapLib:null,map:null});V.useEffect(()=>{const f=t.mapLib;let p=!0,m;return Promise.resolve(f||n).then(A=>{if(!p)return;if(!A)throw new Error("Invalid mapLib");const C="Map"in A?A:A.default;if(!C.Map)throw new Error("Invalid mapLib");if(rD(C,t),!C.supported||C.supported(t))t.reuseMaps&&(m=ps.reuse(t,o.current)),m||(m=new ps(C.Map,t,o.current)),l.map=ZL(m),l.mapLib=C,s(m),r==null||r.onMapMount(l.map,t.id);else throw new Error("Map is not supported by this browser")}).catch(A=>{const{onError:C}=t;C?C({type:"error",target:null,originalEvent:null,error:A}):console.error(A)}),()=>{p=!1,m&&(r==null||r.onMapUnmount(t.id),t.reuseMaps?m.recycle():m.destroy())}},[]),tD(()=>{i&&i.setProps(t)}),V.useImperativeHandle(e,()=>l.map,[i]);const u=V.useMemo(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]),c={height:"100%"};return V.createElement("div",{id:t.id,ref:o,style:u},i&&V.createElement(Ss.Provider,{value:l},V.createElement("div",{"mapboxgl-children":"",style:c},t.children)))}const sD=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function gi(t,e){if(!t||!e)return;const n=t.style;for(const r in e){const i=e[r];Number.isFinite(i)&&!sD.test(r)?n[r]=`${i}px`:n[r]=i}}function oD(t,e){const{map:n,mapLib:r}=V.useContext(Ss),i=V.useRef({props:t});i.current.props=t;const s=V.useMemo(()=>{let P=!1;V.Children.forEach(t.children,_=>{_&&(P=!0)});const N={...t,element:P?document.createElement("div"):null},E=new r.Marker(N);return E.setLngLat([t.longitude,t.latitude]),E.getElement().addEventListener("click",_=>{var T,x;(x=(T=i.current.props).onClick)===null||x===void 0||x.call(T,{type:"click",target:E,originalEvent:_})}),E.on("dragstart",_=>{var T,x;const L=_;L.lngLat=s.getLngLat(),(x=(T=i.current.props).onDragStart)===null||x===void 0||x.call(T,L)}),E.on("drag",_=>{var T,x;const L=_;L.lngLat=s.getLngLat(),(x=(T=i.current.props).onDrag)===null||x===void 0||x.call(T,L)}),E.on("dragend",_=>{var T,x;const L=_;L.lngLat=s.getLngLat(),(x=(T=i.current.props).onDragEnd)===null||x===void 0||x.call(T,L)}),E},[]);V.useEffect(()=>(s.addTo(n.getMap()),()=>{s.remove()}),[]);const{longitude:o,latitude:l,offset:u,style:c,draggable:f=!1,popup:p=null,rotation:m=0,rotationAlignment:A="auto",pitchAlignment:C="auto"}=t;return V.useEffect(()=>{gi(s.getElement(),c)},[c]),V.useImperativeHandle(e,()=>s,[]),(s.getLngLat().lng!==o||s.getLngLat().lat!==l)&&s.setLngLat([o,l]),u&&!qL(s.getOffset(),u)&&s.setOffset(u),s.isDraggable()!==f&&s.setDraggable(f),s.getRotation()!==m&&s.setRotation(m),s.getRotationAlignment()!==A&&s.setRotationAlignment(A),s.getPitchAlignment()!==C&&s.setPitchAlignment(C),s.getPopup()!==p&&s.setPopup(p),ip.createPortal(t.children,s.getElement())}const aD=V.memo(V.forwardRef(oD));function __(t){return new Set(t?t.trim().split(/\s+/):[])}function lD(t,e){const{map:n,mapLib:r}=V.useContext(Ss),i=V.useMemo(()=>document.createElement("div"),[]),s=V.useRef({props:t});s.current.props=t;const o=V.useMemo(()=>{const l={...t},u=new r.Popup(l);return u.setLngLat([t.longitude,t.latitude]),u.once("open",c=>{var f,p;(p=(f=s.current.props).onOpen)===null||p===void 0||p.call(f,c)}),u},[]);if(V.useEffect(()=>{const l=u=>{var c,f;(f=(c=s.current.props).onClose)===null||f===void 0||f.call(c,u)};return o.on("close",l),o.setDOMContent(i).addTo(n.getMap()),()=>{o.off("close",l),o.isOpen()&&o.remove()}},[]),V.useEffect(()=>{gi(o.getElement(),t.style)},[t.style]),V.useImperativeHandle(e,()=>o,[]),o.isOpen()&&((o.getLngLat().lng!==t.longitude||o.getLngLat().lat!==t.latitude)&&o.setLngLat([t.longitude,t.latitude]),t.offset&&!Rt(o.options.offset,t.offset)&&o.setOffset(t.offset),(o.options.anchor!==t.anchor||o.options.maxWidth!==t.maxWidth)&&(o.options.anchor=t.anchor,o.setMaxWidth(t.maxWidth)),o.options.className!==t.className)){const l=__(o.options.className),u=__(t.className);for(const c of l)u.has(c)||o.removeClassName(c);for(const c of u)l.has(c)||o.addClassName(c);o.options.className=t.className}return ip.createPortal(t.children,i)}V.memo(V.forwardRef(lD));function _a(t,e,n,r){const i=V.useContext(Ss),s=V.useMemo(()=>t(i),[]);return V.useEffect(()=>{const o=e,l=null,u=typeof e=="function"?e:null,{map:c}=i;return c.hasControl(s)||(c.addControl(s,o==null?void 0:o.position),l&&l(i)),()=>{u&&u(i),c.hasControl(s)&&c.removeControl(s)}},[]),s}function uD(t){const e=_a(({mapLib:n})=>new n.AttributionControl(t),{position:t.position});return V.useEffect(()=>{gi(e._container,t.style)},[t.style]),null}V.memo(uD);function cD(t){const e=_a(({mapLib:n})=>new n.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)}),{position:t.position});return V.useEffect(()=>{gi(e._controlContainer,t.style)},[t.style]),null}V.memo(cD);function hD(t,e){const n=V.useRef({props:t}),r=_a(({mapLib:i})=>{const s=new i.GeolocateControl(t),o=s._setupUI;return s._setupUI=l=>{s._container.hasChildNodes()||o(l)},s.on("geolocate",l=>{var u,c;(c=(u=n.current.props).onGeolocate)===null||c===void 0||c.call(u,l)}),s.on("error",l=>{var u,c;(c=(u=n.current.props).onError)===null||c===void 0||c.call(u,l)}),s.on("outofmaxbounds",l=>{var u,c;(c=(u=n.current.props).onOutOfMaxBounds)===null||c===void 0||c.call(u,l)}),s.on("trackuserlocationstart",l=>{var u,c;(c=(u=n.current.props).onTrackUserLocationStart)===null||c===void 0||c.call(u,l)}),s.on("trackuserlocationend",l=>{var u,c;(c=(u=n.current.props).onTrackUserLocationEnd)===null||c===void 0||c.call(u,l)}),s},{position:t.position});return n.current.props=t,V.useImperativeHandle(e,()=>r,[]),V.useEffect(()=>{gi(r._container,t.style)},[t.style]),null}V.memo(V.forwardRef(hD));function fD(t){const e=_a(({mapLib:n})=>new n.NavigationControl(t),{position:t.position});return V.useEffect(()=>{gi(e._container,t.style)},[t.style]),null}const dD=V.memo(fD);function pD(t){const e=_a(({mapLib:s})=>new s.ScaleControl(t),{position:t.position}),n=V.useRef(t),r=n.current;n.current=t;const{style:i}=t;return t.maxWidth!==void 0&&t.maxWidth!==r.maxWidth&&(e.options.maxWidth=t.maxWidth),t.unit!==void 0&&t.unit!==r.unit&&e.setUnit(t.unit),V.useEffect(()=>{gi(e._container,i)},[i]),null}V.memo(pD);function Su(t,e){if(!t)throw new Error(e)}function mD(t,e,n,r){if(Su(n.id===r.id,"layer id changed"),Su(n.type===r.type,"layer type changed"),n.type==="custom"||r.type==="custom")return;const{layout:i={},paint:s={},filter:o,minzoom:l,maxzoom:u,beforeId:c}=n;if(c!==r.beforeId&&t.moveLayer(e,c),i!==r.layout){const f=r.layout||{};for(const p in i)Rt(i[p],f[p])||t.setLayoutProperty(e,p,i[p]);for(const p in f)i.hasOwnProperty(p)||t.setLayoutProperty(e,p,void 0)}if(s!==r.paint){const f=r.paint||{};for(const p in s)Rt(s[p],f[p])||t.setPaintProperty(e,p,s[p]);for(const p in f)s.hasOwnProperty(p)||t.setPaintProperty(e,p,void 0)}Rt(o,r.filter)||t.setFilter(e,o),(l!==r.minzoom||u!==r.maxzoom)&&t.setLayerZoomRange(e,l,u)}function gD(t,e,n){if(t.style&&t.style._loaded&&(!("source"in n)||t.getSource(n.source))){const r={...n,id:e};delete r.beforeId,t.addLayer(r,n.beforeId)}}let yD=0;function vD(t){const e=V.useContext(Ss).map.getMap(),n=V.useRef(t),[,r]=V.useState(0),i=V.useMemo(()=>t.id||`jsx-layer-${yD++}`,[]);if(V.useEffect(()=>{if(e){const o=()=>r(l=>l+1);return e.on("styledata",o),o(),()=>{e.off("styledata",o),e.style&&e.style._loaded&&e.getLayer(i)&&e.removeLayer(i)}}},[e]),e&&e.style&&e.getLayer(i))try{mD(e,i,t,n.current)}catch(o){console.warn(o)}else gD(e,i,t);return n.current=t,null}let _D=0;function ED(t,e,n){if(t.style&&t.style._loaded){const r={...n};return delete r.id,delete r.children,t.addSource(e,r),t.getSource(e)}return null}function wD(t,e,n){Su(e.id===n.id,"source id changed"),Su(e.type===n.type,"source type changed");let r="",i=0;for(const o in e)o!=="children"&&o!=="id"&&!Rt(n[o],e[o])&&(r=o,i++);if(!i)return;const s=e.type;if(s==="geojson")t.setData(e.data);else if(s==="image")t.updateImage({url:e.url,coordinates:e.coordinates});else if("setCoordinates"in t&&i===1&&r==="coordinates")t.setCoordinates(e.coordinates);else if("setUrl"in t)switch(r){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}function TD(t){const e=V.useContext(Ss).map.getMap(),n=V.useRef(t),[,r]=V.useState(0),i=V.useMemo(()=>t.id||`jsx-source-${_D++}`,[]);V.useEffect(()=>{if(e){const o=()=>setTimeout(()=>r(l=>l+1),0);return e.on("styledata",o),o(),()=>{var l;if(e.off("styledata",o),e.style&&e.style._loaded&&e.getSource(i)){const u=(l=e.getStyle())===null||l===void 0?void 0:l.layers;if(u)for(const c of u)c.source===i&&e.removeLayer(c.id);e.removeSource(i)}}}},[e]);let s=e&&e.style&&e.getSource(i);return s?wD(s,t,n.current):s=ED(e,i,t),n.current=t,s&&V.Children.map(t.children,o=>o&&V.cloneElement(o,{source:i}))||null}const ID=HL(()=>import("./mapbox-gl-DoYwenht.js").then(t=>t.m),[]),SD=V.forwardRef(function(e,n){return iD(e,n,ID)}),Ih=aD,AD=dD,Qs=vD,Sh=TD,kD=["NeighborhoodBoundaries","addpoints","Sponsors"],CD={NeighborhoodBoundaries:["NAME","MAPLABEL","geometry"],addpoints:["Service Ty","Cross Stre","neighbhood","Status","geometry"],Sponsors:["Name","CrossStreet","Instagram","geometry"]},RD={NeighborhoodBoundaries:[],addpoints:["Full Addre","Refferal S","Estimate"],Sponsors:[]},PD=async t=>{try{console.log(`Fetching ${t}...`);const e=[`geojson/${t}.geojson`,`${t}.geojson`,`data/${t}.geojson`];let n=null,r=null;for(const o of e)try{const l=NL(VL,o);n=await xL(l),console.log(`Found ${t} at path: ${o}`);break}catch(l){console.log(`File not found at path: ${o}`),r=l;continue}if(!n)throw new Error(`Could not find ${t}.geojson in any expected location. Last error: ${r==null?void 0:r.message}`);const i=await fetch(n);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();return console.log(`Successfully loaded ${t}:`,s),s}catch(e){throw console.error(`Error fetching ${t}.geojson:`,e),e}},xD=async()=>{const t={},e={},n=kD.map(async r=>{try{const i=await PD(r);t[r]=i}catch(i){console.warn(`Failed to load ${r}:`,i),e[r]=i instanceof Error?i.message:"Unknown error"}});return await Promise.allSettled(n),console.log("Loaded layers:",Object.keys(t)),Object.keys(e).length>0&&console.warn("Failed to load layers:",e),t},ND=(t,e,n=null)=>{const r=CD[e]||[],i=RD[e]||[],s=n==="Admin"?[...r,...i]:r,o=t.features.map(l=>({...l,properties:Object.keys(l.properties||{}).filter(u=>s.includes(u)).reduce((u,c)=>(u[c]=l.properties[c],u),{})}));return{...t,features:o}},bD=({title:t,name:e,crossStreet:n,instagram:r,onClose:i})=>I.jsxs("div",{className:"sponsor-popup",children:[I.jsxs("div",{className:"sponsor-popup-header",children:[I.jsx("h2",{className:"sponsor-popup-header-text",children:t}),I.jsx("button",{onClick:i,className:"sponsor-popup-close","aria-label":"Close",children:"×"})]}),I.jsxs("div",{className:"sponsor-popup-content",children:[I.jsx("a",{href:r,target:"_blank",className:"sponsor-popup-link",children:I.jsx("img",{src:"/src/assets/hairconnect.png",alt:"Sponsor Logo",className:"sponsor-popup-logo"})}),I.jsxs("div",{className:"sponsor-popup-info",children:[I.jsx("h3",{className:"sponsor-popup-title",children:e}),I.jsx("p",{className:"sponsor-popup-location",children:n})]}),I.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"sponsor-popup-instagram"})]})]}),OD=({jobType:t,location:e,status:n,fullAddress:r,referralSource:i,estimate:s,onClose:o})=>{const{userData:l}=ac(),u=(l==null?void 0:l.role)==="Admin";return I.jsxs("div",{className:"point-popup",children:[I.jsxs("div",{className:"point-popup-header",children:[I.jsx("h3",{className:"point-popup-title",children:"Service Point Details"}),I.jsx("button",{className:"point-popup-close",onClick:o,onMouseEnter:c=>{c.currentTarget.style.backgroundColor="#f3f4f6"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="transparent"},children:"×"})]}),I.jsxs("div",{className:"point-popup-content",children:[I.jsxs("div",{className:"point-popup-row",children:[I.jsxs("div",{children:[I.jsx("div",{className:"point-popup-label",children:"Job Type"}),I.jsx("div",{className:"point-popup-value",children:t||"Not specified"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"point-popup-label",children:"Location"}),I.jsx("div",{className:"point-popup-value",children:e||"Not specified"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"point-popup-label",children:"Status"}),I.jsx("div",{className:"point-popup-status",style:{backgroundColor:E_(n).bg,color:E_(n).text},children:n||"Unknown"})]})]}),u&&I.jsxs("div",{className:"point-popup-row",style:{marginTop:"12px"},children:[I.jsxs("div",{children:[I.jsx("div",{className:"point-popup-label",children:"Full Address"}),I.jsx("div",{className:"point-popup-value",children:r||"N/A"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"point-popup-label",children:"Referral Source"}),I.jsx("div",{className:"point-popup-value",children:i||"N/A"})]}),I.jsxs("div",{children:[I.jsx("div",{className:"point-popup-label",children:"Estimate"}),I.jsxs("div",{className:"point-popup-value",children:["$ ",s||"N/A"]})]})]})]})]})},E_=t=>{if(!t)return{bg:"#f3f4f6",text:"#6b7280"};const e=t.toLowerCase();return e.includes("active")?{bg:"#daff99",text:"#166534"}:e.includes("pending")?{bg:"#faff99",text:"#92400e"}:e.includes("complete")?{bg:"#c7f7ad",text:"#003b09"}:{bg:"#f3f4f6",text:"#6b7280"}},LD=({neighborhoodName:t,pointCount:e,x:n,y:r})=>I.jsx("div",{className:"neighborhood-hover-popup",style:{left:n+1,top:r+1},children:I.jsxs("div",{className:"neighborhood-hover-popup-row",children:[I.jsx("span",{className:"neighborhood-hover-popup-name",children:t}),I.jsx("span",{className:"neighborhood-hover-popup-dot",children:"•"}),I.jsxs("span",{className:"neighborhood-hover-popup-count",children:[e," ",e===1?"service":"services"]})]})}),DD={paint:{"fill-color":["match",["get","randoNum"],1,"#FF6B6B",2,"#4ECDC4",3,"#FFD166",4,"#6A4C93",5,"#43AA8B",6,"#F3722C",7,"#277DA1",8,"#F94144",9,"#90BE6D",10,"#577590","#CCCCCC"],"fill-outline-color":"#FFFFFF"}},MD={type:"line",source:"neighborhoods",layout:{},paint:{"line-color":"#FFFFFF","line-width":2}},VD={type:"circle",source:"addpoints",layout:{},paint:{"circle-color":["match",["get","Service Ty"],"Lawn Restoration","#008000","Sidewalk Repair","#808080","Homeless Outreach","#FFA500","Legacy Sponsored Block","#FFD700","Lifestyle Lottery Winner","#800080","Neighborhood History","#0000FF","Home For Sale","#008080","Overnight Patrol","#000080","Vacant Home Cleanup","#800000","Trash or Debris Dump Site","#000000","Overgrown Bushes or Trees","#228B22","#999999"],"circle-radius":["interpolate",["linear"],["zoom"],10,4,15,8,20,12],"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF"}},FD={type:"circle",source:"sponsors",layout:{},paint:{"circle-color":"#FFD700","circle-radius":10,"circle-stroke-width":2,"circle-stroke-color":"#FFA500"}},Ys={NeighborhoodBoundaries:DD,NeighborhoodBoundariesOutline:MD,addpoints:VD,Sponsors:FD},UD=({viewState:t,onViewStateChange:e,searchMarker:n,filters:r,isAddingPoint:i,onPointAdd:s,addPointCoordinates:o})=>{var Z,ve,de;const{user:l,userData:u,isAnonymous:c,loading:f}=ac(),[p,m]=V.useState({longitude:-122.5715,latitude:45.498,zoom:12}),A=t||p,[C,P]=V.useState({}),[N,E]=V.useState(!0),[_,T]=V.useState(null),[x,L]=V.useState(!0),[M,w]=V.useState(null),[g,v]=V.useState(null),[S,R]=V.useState(null);V.useEffect(()=>{f||(async()=>{try{E(!0),T(null),console.log("Loading GeoJSON data...");const ne=!c&&u?u.role:null;console.log("Current user role:",ne||"Guest");const ae=await xD(),ue={};Object.keys(ae).forEach(pe=>{ue[pe]=ND(ae[pe],pe,ne)}),console.log("Loaded and filtered layers:",Object.keys(ue)),P(ue)}catch(ne){console.error("Error loading GeoJSON data:",ne),T(`Failed to load map data: ${ne instanceof Error?ne.message:"Unknown error"}`)}finally{E(!1)}})()},[c,u,f]),V.useEffect(()=>{if(C.Sponsors){const K=C.Sponsors.features.find(ne=>{var ae;return((ae=ne.properties)==null?void 0:ae.Name)==="The Hair Connect"});K?(console.log("Sponsor feature found:",K),w(K)):console.log("Sponsor feature not found")}},[C.Sponsors]);const b=K=>{e?e(K.viewState):m(K.viewState)},k=K=>C.addpoints?C.addpoints.features.filter(ne=>{var ue;return((ue=ne.properties)==null?void 0:ue.neighbhood)===K}).length:0,Et=K=>{if(i){const{lng:ae,lat:ue}=K.lngLat;s({lng:ae,lat:ue});return}const ne=K.features;if(ne&&ne.length>0){const ae=ne.find(ue=>ue.source==="addpoints");ae&&(console.log("Clicked addpoint:",ae),v(ae))}},wn=K=>{var ae,ue;const ne=K.features;if(ne&&ne.length>0){const pe=ne.find(nn=>nn.source==="neighborhoods");if(pe){const nn=((ae=pe.properties)==null?void 0:ae.MAPLABEL)||((ue=pe.properties)==null?void 0:ue.NAME);if(nn){const lc=k(nn);R({name:nn,pointCount:lc,x:K.point.x,y:K.point.y})}}else R(null)}else R(null)},Dr=()=>{},Ht=()=>{R(null)},Y=(()=>{const K={...C};if(K.addpoints){let ne=K.addpoints.features;r.selectedNeighborhoods.length>0&&(ne=ne.filter(ae=>{var pe;const ue=(pe=ae.properties)==null?void 0:pe.neighbhood;return r.selectedNeighborhoods.includes(ue)})),r.selectedServiceTypes.length>0&&(ne=ne.filter(ae=>{var pe;const ue=(pe=ae.properties)==null?void 0:pe["Service Ty"];return r.selectedServiceTypes.includes(ue)})),K.addpoints={...K.addpoints,features:ne}}if(K.NeighborhoodBoundaries&&r.selectedNeighborhoods.length>0){const ne=K.NeighborhoodBoundaries.features.filter(ae=>{var pe;const ue=(pe=ae.properties)==null?void 0:pe.MAPLABEL;return console.log("Comparing boundary MAPLABEL:",ue,"against",r.selectedNeighborhoods),r.selectedNeighborhoods.includes(ue)});K.NeighborhoodBoundaries={...K.NeighborhoodBoundaries,features:ne}}return K})();return f||N?I.jsx("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0"},children:I.jsxs("div",{children:[f?"Initializing...":"Loading map data...",I.jsx("br",{}),I.jsx("small",{style:{color:"#666",marginTop:"8px"},children:c?"Loading as guest":`Logged in as ${u==null?void 0:u.role}`})]})}):_?I.jsxs("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",flexDirection:"column",gap:"16px"},children:[I.jsxs("div",{style:{color:"red",textAlign:"center"},children:[I.jsx("strong",{children:"Error loading map data"}),I.jsx("br",{}),_]}),I.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Retry"})]}):I.jsxs("div",{style:{height:"100vh",width:"100%",position:"relative"},children:[!c&&u&&I.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:1e3,background:"rgba(0,0,0,0.7)",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"12px"},children:[u.role," - ",u.email]}),I.jsxs(SD,{...A,onMove:b,onClick:Et,onMouseMove:wn,onMouseEnter:Dr,onMouseLeave:Ht,interactiveLayerIds:["addpoints","neighborhoods-fill"],mapboxAccessToken:"pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ",style:{width:"100%",height:"100%"},mapStyle:"mapbox://styles/mapbox/satellite-streets-v12",cursor:i?"crosshair":"auto",children:[I.jsx(AD,{position:"top-right"}),Y.NeighborhoodBoundaries&&I.jsxs(Sh,{id:"neighborhoods",type:"geojson",data:Y.NeighborhoodBoundaries,children:[I.jsx(Qs,{id:"neighborhoods-fill",type:"fill",paint:{"fill-color":Ys.NeighborhoodBoundaries.paint["fill-color"],"fill-opacity":["interpolate",["linear"],["zoom"],13,.35,16,.05,18,0],"fill-outline-color":Ys.NeighborhoodBoundaries.paint["fill-outline-color"]}}),I.jsx(Qs,{...Ys.NeighborhoodBoundariesOutline}),I.jsx(Qs,{id:"neighborhoods-labels",type:"symbol",layout:{"text-field":["get","NAME"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12,"text-anchor":"center","text-justify":"center"},paint:{"text-color":"#171717","text-halo-color":"rgba(255, 255, 255, 0.8)","text-halo-width":1,"text-opacity":["interpolate",["linear"],["zoom"],13,1,16,.5,18,0]}})]}),Y.addpoints&&I.jsx(Sh,{id:"addpoints",type:"geojson",data:Y.addpoints,children:I.jsx(Qs,{id:"addpoints",...Ys.addpoints})}),C.Sponsors&&I.jsx(Sh,{id:"sponsors",type:"geojson",data:C.Sponsors,children:I.jsx(Qs,{...Ys.Sponsors})}),n&&I.jsx(Ih,{longitude:n.longitude,latitude:n.latitude,anchor:"bottom",children:I.jsxs("div",{className:"search-marker-container",children:[I.jsx("div",{className:"search-marker-pin",children:I.jsx("div",{className:"search-marker-dot"})}),I.jsxs("div",{className:"search-marker-tooltip",children:[n.address,I.jsx("div",{className:"search-marker-tooltip-arrow"})]})]})}),x&&M&&M.geometry.type==="Point"&&I.jsx(Ih,{longitude:M.geometry.coordinates[0],latitude:M.geometry.coordinates[1],anchor:"center",children:I.jsx("div",{className:"sponsor-marker-container",children:I.jsx("img",{src:"/src/assets/hairconnect.png",alt:"Sponsor Logo",className:"sponsor-marker-img"})})}),x&&M&&!g&&I.jsx("div",{style:{position:"fixed",left:24,bottom:24,zIndex:1e3,background:"white",borderRadius:12,boxShadow:"0 2px 16px rgba(0,0,0,0.18)",padding:0,minWidth:320,maxWidth:360,display:"flex",alignItems:"center",gap:16},children:I.jsx(bD,{title:"Featured Sponsor",name:(Z=M.properties)==null?void 0:Z.Name,crossStreet:(ve=M.properties)==null?void 0:ve.CrossStreet,instagram:(de=M.properties)==null?void 0:de.Instagram,onClose:()=>L(!1)})}),o&&I.jsx(Ih,{longitude:o.lng,latitude:o.lat,anchor:"bottom",children:I.jsx("div",{className:"add-point-marker"})})]}),S&&I.jsx(LD,{neighborhoodName:S.name,pointCount:S.pointCount,x:S.x,y:S.y}),g&&(()=>{var K,ne,ae,ue,pe,nn;return I.jsx(OD,{jobType:(K=g.properties)==null?void 0:K["Service Ty"],location:(ne=g.properties)==null?void 0:ne["Cross Stre"],status:(ae=g.properties)==null?void 0:ae.Status,fullAddress:(ue=g.properties)==null?void 0:ue["Full Addre"],referralSource:(pe=g.properties)==null?void 0:pe["Refferal S"],estimate:(nn=g.properties)==null?void 0:nn.Estimate,onClose:()=>v(null)})})()]})};function jD(){const[t,e]=V.useState({longitude:-122.5715,latitude:45.498,zoom:12}),[n,r]=V.useState(null),[i,s]=V.useState({selectedNeighborhoods:[],selectedServiceTypes:[]}),[o,l]=V.useState(!1),[u,c]=V.useState(!1),[f,p]=V.useState(null),m=N=>{e({longitude:N.longitude,latitude:N.latitude,zoom:N.zoom}),r({longitude:N.longitude,latitude:N.latitude,address:N.address}),setTimeout(()=>{r(null)},1e4)},A=N=>{e(N)},C=N=>{s(N)},P=N=>{p(N),c(!1)};return I.jsx(FL,{children:I.jsxs("div",{className:"App",children:[I.jsx(zL,{onLocationSelect:m,filters:i,onFiltersChange:C,filterPanelOpen:o,setFilterPanelOpen:l,isAddingPoint:u,setIsAddingPoint:c,addPointCoordinates:f===null?void 0:f,setAddPointCoordinates:p}),I.jsx(UD,{viewState:t,onViewStateChange:A,searchMarker:n,filters:i,isAddingPoint:u,onPointAdd:P,addPointCoordinates:f===null?void 0:f})]})})}Ah.createRoot(document.getElementById("root")).render(I.jsx(dd.StrictMode,{children:I.jsx(jD,{})}));export{zD as c,w_ as g};
