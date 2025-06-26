(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var MM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E0={exports:{}},fc={},T0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),kI=Symbol.for("react.portal"),PI=Symbol.for("react.fragment"),RI=Symbol.for("react.strict_mode"),xI=Symbol.for("react.profiler"),bI=Symbol.for("react.provider"),NI=Symbol.for("react.context"),OI=Symbol.for("react.forward_ref"),LI=Symbol.for("react.suspense"),DI=Symbol.for("react.memo"),MI=Symbol.for("react.lazy"),qg=Symbol.iterator;function VI(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,A0={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||S0}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=Ys.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||S0}var Yf=Qf.prototype=new C0;Yf.constructor=Qf;I0(Yf,Ys.prototype);Yf.isPureReactComponent=!0;var Gg=Array.isArray,k0=Object.prototype.hasOwnProperty,Xf={current:null},P0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)k0.call(e,r)&&!P0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ma,type:t,key:s,ref:o,props:i,_owner:Xf.current}}function FI(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function jI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kg=/\/+/g;function pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jI(""+t.key):e.toString(36)}function Xl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case kI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pd(o,0):r,Gg(i)?(n="",t!=null&&(n=t.replace(Kg,"$&/")+"/"),Xl(i,e,n,"",function(c){return c})):i!=null&&(Jf(i)&&(i=FI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Kg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gg(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+pd(s,a);o+=Xl(s,e,n,u,i)}else if(u=VI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+pd(s,a++),o+=Xl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(t,e,n){if(t==null)return t;var r=[],i=0;return Xl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Jl={transition:null},zI={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:Xf};function x0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Il,forEach:function(t,e,n){Il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Il(t,function(){e++}),e},toArray:function(t){return Il(t,function(e){return e})||[]},only:function(t){if(!Jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ys;ie.Fragment=PI;ie.Profiler=xI;ie.PureComponent=Qf;ie.StrictMode=RI;ie.Suspense=LI;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zI;ie.act=x0;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)k0.call(e,u)&&!P0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ma,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:NI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bI,_context:t},t.Consumer=t};ie.createElement=R0;ie.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:OI,render:t}};ie.isValidElement=Jf;ie.lazy=function(t){return{$$typeof:MI,_payload:{_status:-1,_result:t},_init:UI}};ie.memo=function(t,e){return{$$typeof:DI,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};ie.unstable_act=x0;ie.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ie.useContext=function(t){return Rt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ie.useId=function(){return Rt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ie.useRef=function(t){return Rt.current.useRef(t)};ie.useState=function(t){return Rt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Rt.current.useTransition()};ie.version="18.3.1";T0.exports=ie;var D=T0.exports;const Va=w0(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=D,$I=Symbol.for("react.element"),WI=Symbol.for("react.fragment"),HI=Object.prototype.hasOwnProperty,qI=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GI={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)HI.call(e,r)&&!GI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$I,type:t,key:s,ref:o,props:i,_owner:qI.current}}fc.Fragment=WI;fc.jsx=b0;fc.jsxs=b0;E0.exports=fc;var v=E0.exports,ch={},N0={exports:{}},Gt={},O0={exports:{}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var we=J-1>>>1,ge=B[we];if(0<i(ge,Q))B[we]=Q,B[J]=ge,J=we;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var we=0,ge=B.length,be=ge>>>1;we<be;){var sn=2*(we+1)-1,on=B[sn],wn=sn+1,bt=B[wn];if(0>i(on,J))wn<ge&&0>i(bt,on)?(B[we]=bt,B[wn]=J,we=wn):(B[we]=on,B[sn]=J,we=sn);else if(wn<ge&&0>i(bt,J))B[we]=bt,B[wn]=J,we=wn;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,E=!1,I=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function x(B){if(k=!1,S(B),!I)if(n(u)!==null)I=!0,St(O);else{var Q=n(c);Q!==null&&ce(x,Q.startTime-B)}}function O(B,Q){I=!1,k&&(k=!1,_(g),g=-1),E=!0;var J=m;try{for(S(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||B&&!b());){var we=f.callback;if(typeof we=="function"){f.callback=null,m=f.priorityLevel;var ge=we(f.expirationTime<=Q);Q=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(u)&&r(u),S(Q)}else r(u);f=n(u)}if(f!==null)var be=!0;else{var sn=n(c);sn!==null&&ce(x,sn.startTime-Q),be=!1}return be}finally{f=null,m=J,E=!1}}var V=!1,T=null,g=-1,A=5,C=-1;function b(){return!(t.unstable_now()-C<A)}function N(){if(T!==null){var B=t.unstable_now();C=B;var Q=!0;try{Q=T(!0,B)}finally{Q?P():(V=!1,T=null)}}else V=!1}var P;if(typeof y=="function")P=function(){y(N)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,me=Y.port2;Y.port1.onmessage=N,P=function(){me.postMessage(null)}}else P=function(){R(N,0)};function St(B){T=B,V||(V=!0,P())}function ce(B,Q){g=R(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||E||(I=!0,St(O))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var we=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?we+J:we):J=we,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=J+ge,B={id:h++,callback:Q,priorityLevel:B,startTime:J,expirationTime:ge,sortIndex:-1},J>we?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(k?(_(g),g=-1):k=!0,ce(x,J-we))):(B.sortIndex=ge,e(u,B),I||E||(I=!0,St(O))),B},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(L0);O0.exports=L0;var KI=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QI=D,qt=KI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,oa={};function ji(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(oa[t]=e,t=0;t<e.length;t++)D0.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dh=Object.prototype.hasOwnProperty,YI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Yg={};function XI(t){return dh.call(Yg,t)?!0:dh.call(Qg,t)?!1:YI.test(t)?Yg[t]=!0:(Qg[t]=!0,!1)}function JI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZI(t,e,n,r){if(e===null||typeof e>"u"||JI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,ep);at[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,ep);at[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,ep);at[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tp(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZI(e,n,i,r)&&(n=null),r||i===null?XI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=QI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),hh=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),F0=Symbol.for("react.offscreen"),Xg=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Xg&&t[Xg]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,md;function No(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||""}return`
`+md+t}var gd=!1;function yd(t,e){if(!t||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function e2(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case hh:return"Profiler";case np:return"StrictMode";case fh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case M0:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ip:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function t2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n2(t){var e=j0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cl(t){t._valueTracker||(t._valueTracker=n2(t))}function U0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z0(t,e){e=e.checked,e!=null&&tp(t,"checked",e,!1)}function yh(t,e){z0(t,e);var n=zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&vh(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vh(t,e,n){(e!=="number"||Eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Oo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function B0(t,e){var n=zr(e.value),r=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kl,W0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r2=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){r2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var i2=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eh(t,e){if(e){if(i2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sh=null;function sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ih=null,Ts=null,Ss=null;function ny(t){if(t=Ua(t)){if(typeof Ih!="function")throw Error(z(280));var e=t.stateNode;e&&(e=vc(e),Ih(t.stateNode,t.type,e))}}function G0(t){Ts?Ss?Ss.push(t):Ss=[t]:Ts=t}function K0(){if(Ts){var t=Ts,e=Ss;if(Ss=Ts=null,ny(t),e)for(t=0;t<e.length;t++)ny(e[t])}}function Q0(t,e){return t(e)}function Y0(){}var vd=!1;function X0(t,e,n){if(vd)return t(e,n);vd=!0;try{return Q0(t,e,n)}finally{vd=!1,(Ts!==null||Ss!==null)&&(Y0(),K0())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Ah=!1;if(Zn)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Ah=!1}function s2(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var $o=!1,Tu=null,Su=!1,Ch=null,o2={onError:function(t){$o=!0,Tu=t}};function a2(t,e,n,r,i,s,o,a,u){$o=!1,Tu=null,s2.apply(o2,arguments)}function l2(t,e,n,r,i,s,o,a,u){if(a2.apply(this,arguments),$o){if($o){var c=Tu;$o=!1,Tu=null}else throw Error(z(198));Su||(Su=!0,Ch=c)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ry(t){if(Ui(t)!==t)throw Error(z(188))}function u2(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ry(i),t;if(s===r)return ry(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Z0(t){return t=u2(t),t!==null?ew(t):null}function ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ew(t);if(e!==null)return e;t=t.sibling}return null}var tw=qt.unstable_scheduleCallback,iy=qt.unstable_cancelCallback,c2=qt.unstable_shouldYield,d2=qt.unstable_requestPaint,$e=qt.unstable_now,h2=qt.unstable_getCurrentPriorityLevel,op=qt.unstable_ImmediatePriority,nw=qt.unstable_UserBlockingPriority,Iu=qt.unstable_NormalPriority,f2=qt.unstable_LowPriority,rw=qt.unstable_IdlePriority,pc=null,kn=null;function p2(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:y2,m2=Math.log,g2=Math.LN2;function y2(t){return t>>>=0,t===0?32:31-(m2(t)/g2|0)|0}var Pl=64,Rl=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lo(a):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),i=1<<n,r|=t[n],e&=~i;return r}function v2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=v2(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iw(){var t=Pl;return Pl<<=1,!(Pl&4194240)&&(Pl=64),t}function _d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function w2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ow,lp,aw,lw,uw,Ph=!1,xl=[],xr=null,br=null,Nr=null,ua=new Map,ca=new Map,wr=[],E2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sy(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function To(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ua(e),e!==null&&lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function T2(t,e,n,r,i){switch(e){case"focusin":return xr=To(xr,t,e,n,r,i),!0;case"dragenter":return br=To(br,t,e,n,r,i),!0;case"mouseover":return Nr=To(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ua.set(s,To(ua.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ca.set(s,To(ca.get(s)||null,t,e,n,r,i)),!0}return!1}function cw(t){var e=mi(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=J0(n),e!==null){t.blockedOn=e,uw(t.priority,function(){aw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sh=r,n.target.dispatchEvent(r),Sh=null}else return e=Ua(n),e!==null&&lp(e),t.blockedOn=n,!1;e.shift()}return!0}function oy(t,e,n){Zl(t)&&n.delete(e)}function S2(){Ph=!1,xr!==null&&Zl(xr)&&(xr=null),br!==null&&Zl(br)&&(br=null),Nr!==null&&Zl(Nr)&&(Nr=null),ua.forEach(oy),ca.forEach(oy)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,Ph||(Ph=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,S2)))}function da(t){function e(i){return So(i,t)}if(0<xl.length){So(xl[0],t);for(var n=1;n<xl.length;n++){var r=xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&So(xr,t),br!==null&&So(br,t),Nr!==null&&So(Nr,t),ua.forEach(e),ca.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)cw(n),n.blockedOn===null&&wr.shift()}var Is=cr.ReactCurrentBatchConfig,Cu=!0;function I2(t,e,n,r){var i=ve,s=Is.transition;Is.transition=null;try{ve=1,up(t,e,n,r)}finally{ve=i,Is.transition=s}}function A2(t,e,n,r){var i=ve,s=Is.transition;Is.transition=null;try{ve=4,up(t,e,n,r)}finally{ve=i,Is.transition=s}}function up(t,e,n,r){if(Cu){var i=Rh(t,e,n,r);if(i===null)Rd(t,e,r,ku,n),sy(t,r);else if(T2(i,t,e,n,r))r.stopPropagation();else if(sy(t,r),e&4&&-1<E2.indexOf(t)){for(;i!==null;){var s=Ua(i);if(s!==null&&ow(s),s=Rh(t,e,n,r),s===null&&Rd(t,e,r,ku,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rd(t,e,r,null,n)}}var ku=null;function Rh(t,e,n,r){if(ku=null,t=sp(r),t=mi(t),t!==null)if(e=Ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ku=t,null}function dw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h2()){case op:return 1;case nw:return 4;case Iu:case f2:return 16;case rw:return 536870912;default:return 16}default:return 16}}var kr=null,cp=null,eu=null;function hw(){if(eu)return eu;var t,e=cp,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return eu=i.slice(t,1<r?1-r:void 0)}function tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function ay(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:ay,this.isPropagationStopped=ay,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dp=Kt(Xs),ja=Le({},Xs,{view:0,detail:0}),C2=Kt(ja),wd,Ed,Io,mc=Le({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(wd=t.screenX-Io.screenX,Ed=t.screenY-Io.screenY):Ed=wd=0,Io=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),ly=Kt(mc),k2=Le({},mc,{dataTransfer:0}),P2=Kt(k2),R2=Le({},ja,{relatedTarget:0}),Td=Kt(R2),x2=Le({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),b2=Kt(x2),N2=Le({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O2=Kt(N2),L2=Le({},Xs,{data:0}),uy=Kt(L2),D2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V2[t])?!!e[t]:!1}function hp(){return F2}var j2=Le({},ja,{key:function(t){if(t.key){var e=D2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U2=Kt(j2),z2=Le({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cy=Kt(z2),B2=Le({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),$2=Kt(B2),W2=Le({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),H2=Kt(W2),q2=Le({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G2=Kt(q2),K2=[9,13,27,32],fp=Zn&&"CompositionEvent"in window,Wo=null;Zn&&"documentMode"in document&&(Wo=document.documentMode);var Q2=Zn&&"TextEvent"in window&&!Wo,fw=Zn&&(!fp||Wo&&8<Wo&&11>=Wo),dy=" ",hy=!1;function pw(t,e){switch(t){case"keyup":return K2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Y2(t,e){switch(t){case"compositionend":return mw(e);case"keypress":return e.which!==32?null:(hy=!0,dy);case"textInput":return t=e.data,t===dy&&hy?null:t;default:return null}}function X2(t,e){if(as)return t==="compositionend"||!fp&&pw(t,e)?(t=hw(),eu=cp=kr=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fw&&e.locale!=="ko"?null:e.data;default:return null}}var J2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J2[t.type]:e==="textarea"}function gw(t,e,n,r){G0(r),e=Pu(e,"onChange"),0<e.length&&(n=new dp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ho=null,ha=null;function Z2(t){kw(t,0)}function gc(t){var e=cs(t);if(U0(e))return t}function eA(t,e){if(t==="change")return e}var yw=!1;if(Zn){var Sd;if(Zn){var Id="oninput"in document;if(!Id){var py=document.createElement("div");py.setAttribute("oninput","return;"),Id=typeof py.oninput=="function"}Sd=Id}else Sd=!1;yw=Sd&&(!document.documentMode||9<document.documentMode)}function my(){Ho&&(Ho.detachEvent("onpropertychange",vw),ha=Ho=null)}function vw(t){if(t.propertyName==="value"&&gc(ha)){var e=[];gw(e,ha,t,sp(t)),X0(Z2,e)}}function tA(t,e,n){t==="focusin"?(my(),Ho=e,ha=n,Ho.attachEvent("onpropertychange",vw)):t==="focusout"&&my()}function nA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gc(ha)}function rA(t,e){if(t==="click")return gc(e)}function iA(t,e){if(t==="input"||t==="change")return gc(e)}function sA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:sA;function fa(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dh.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yy(t,e){var n=gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gy(n)}}function _w(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_w(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ww(){for(var t=window,e=Eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eu(t.document)}return e}function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oA(t){var e=ww(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_w(n.ownerDocument.documentElement,n)){if(r!==null&&pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=yy(n,s);var o=yy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aA=Zn&&"documentMode"in document&&11>=document.documentMode,ls=null,xh=null,qo=null,bh=!1;function vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bh||ls==null||ls!==Eu(r)||(r=ls,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qo&&fa(qo,r)||(qo=r,r=Pu(xh,"onSelect"),0<r.length&&(e=new dp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ls)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Ad={},Ew={};Zn&&(Ew=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function yc(t){if(Ad[t])return Ad[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ew)return Ad[t]=e[n];return t}var Tw=yc("animationend"),Sw=yc("animationiteration"),Iw=yc("animationstart"),Aw=yc("transitionend"),Cw=new Map,_y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){Cw.set(t,e),ji(e,[t])}for(var Cd=0;Cd<_y.length;Cd++){var kd=_y[Cd],lA=kd.toLowerCase(),uA=kd[0].toUpperCase()+kd.slice(1);Yr(lA,"on"+uA)}Yr(Tw,"onAnimationEnd");Yr(Sw,"onAnimationIteration");Yr(Iw,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(Aw,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function wy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,l2(r,e,void 0,t),t.currentTarget=null}function kw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;wy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;wy(i,a,c),s=u}}}if(Su)throw t=Ch,Su=!1,Ch=null,t}function Ce(t,e){var n=e[Mh];n===void 0&&(n=e[Mh]=new Set);var r=t+"__bubble";n.has(r)||(Pw(e,t,2,!1),n.add(r))}function Pd(t,e,n){var r=0;e&&(r|=4),Pw(n,t,r,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Ol]){t[Ol]=!0,D0.forEach(function(n){n!=="selectionchange"&&(cA.has(n)||Pd(n,!1,t),Pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,Pd("selectionchange",!1,e))}}function Pw(t,e,n,r){switch(dw(e)){case 1:var i=I2;break;case 4:i=A2;break;default:i=up}n=i.bind(null,e,n,t),i=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}X0(function(){var c=s,h=sp(n),f=[];e:{var m=Cw.get(t);if(m!==void 0){var E=dp,I=t;switch(t){case"keypress":if(tu(n)===0)break e;case"keydown":case"keyup":E=U2;break;case"focusin":I="focus",E=Td;break;case"focusout":I="blur",E=Td;break;case"beforeblur":case"afterblur":E=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ly;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=P2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=$2;break;case Tw:case Sw:case Iw:E=b2;break;case Aw:E=H2;break;case"scroll":E=C2;break;case"wheel":E=G2;break;case"copy":case"cut":case"paste":E=O2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=cy}var k=(e&4)!==0,R=!k&&t==="scroll",_=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,S;y!==null;){S=y;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,_!==null&&(x=la(y,_),x!=null&&k.push(ma(y,x,S)))),R)break;y=y.return}0<k.length&&(m=new E(m,I,null,n,h),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==Sh&&(I=n.relatedTarget||n.fromElement)&&(mi(I)||I[er]))break e;if((E||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,E?(I=n.relatedTarget||n.toElement,E=c,I=I?mi(I):null,I!==null&&(R=Ui(I),I!==R||I.tag!==5&&I.tag!==6)&&(I=null)):(E=null,I=c),E!==I)){if(k=ly,x="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=cy,x="onPointerLeave",_="onPointerEnter",y="pointer"),R=E==null?m:cs(E),S=I==null?m:cs(I),m=new k(x,y+"leave",E,n,h),m.target=R,m.relatedTarget=S,x=null,mi(h)===c&&(k=new k(_,y+"enter",I,n,h),k.target=S,k.relatedTarget=R,x=k),R=x,E&&I)t:{for(k=E,_=I,y=0,S=k;S;S=Zi(S))y++;for(S=0,x=_;x;x=Zi(x))S++;for(;0<y-S;)k=Zi(k),y--;for(;0<S-y;)_=Zi(_),S--;for(;y--;){if(k===_||_!==null&&k===_.alternate)break t;k=Zi(k),_=Zi(_)}k=null}else k=null;E!==null&&Ey(f,m,E,k,!1),I!==null&&R!==null&&Ey(f,R,I,k,!0)}}e:{if(m=c?cs(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var O=eA;else if(fy(m))if(yw)O=iA;else{O=nA;var V=tA}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=rA);if(O&&(O=O(t,c))){gw(f,O,n,h);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&vh(m,"number",m.value)}switch(V=c?cs(c):window,t){case"focusin":(fy(V)||V.contentEditable==="true")&&(ls=V,xh=c,qo=null);break;case"focusout":qo=xh=ls=null;break;case"mousedown":bh=!0;break;case"contextmenu":case"mouseup":case"dragend":bh=!1,vy(f,n,h);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":vy(f,n,h)}var T;if(fp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else as?pw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(fw&&n.locale!=="ko"&&(as||g!=="onCompositionStart"?g==="onCompositionEnd"&&as&&(T=hw()):(kr=h,cp="value"in kr?kr.value:kr.textContent,as=!0)),V=Pu(c,g),0<V.length&&(g=new uy(g,t,null,n,h),f.push({event:g,listeners:V}),T?g.data=T:(T=mw(n),T!==null&&(g.data=T)))),(T=Q2?Y2(t,n):X2(t,n))&&(c=Pu(c,"onBeforeInput"),0<c.length&&(h=new uy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}kw(f,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=la(t,n),s!=null&&r.unshift(ma(t,s,i)),s=la(t,e),s!=null&&r.push(ma(t,s,i))),t=t.return}return r}function Zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=la(n,s),u!=null&&o.unshift(ma(n,u,a))):i||(u=la(n,s),u!=null&&o.push(ma(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dA=/\r\n?/g,hA=/\u0000|\uFFFD/g;function Ty(t){return(typeof t=="string"?t:""+t).replace(dA,`
`).replace(hA,"")}function Ll(t,e,n){if(e=Ty(e),Ty(t)!==e&&n)throw Error(z(425))}function Ru(){}var Nh=null,Oh=null;function Lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,fA=typeof clearTimeout=="function"?clearTimeout:void 0,Sy=typeof Promise=="function"?Promise:void 0,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof Sy<"u"?function(t){return Sy.resolve(null).then(t).catch(mA)}:Dh;function mA(t){setTimeout(function(){throw t})}function xd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);da(e)}function Or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),In="__reactFiber$"+Js,ga="__reactProps$"+Js,er="__reactContainer$"+Js,Mh="__reactEvents$"+Js,gA="__reactListeners$"+Js,yA="__reactHandles$"+Js;function mi(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iy(t);t!==null;){if(n=t[In])return n;t=Iy(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[In]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function vc(t){return t[ga]||null}var Vh=[],ds=-1;function Xr(t){return{current:t}}function Pe(t){0>ds||(t.current=Vh[ds],Vh[ds]=null,ds--)}function Ie(t,e){ds++,Vh[ds]=t.current,t.current=e}var Br={},wt=Xr(Br),Mt=Xr(!1),Ai=Br;function Os(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function xu(){Pe(Mt),Pe(wt)}function Ay(t,e,n){if(wt.current!==Br)throw Error(z(168));Ie(wt,e),Ie(Mt,n)}function Rw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,t2(t)||"Unknown",i));return Le({},n,r)}function bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Ai=wt.current,Ie(wt,t),Ie(Mt,Mt.current),!0}function Cy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=Rw(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,Pe(Mt),Pe(wt),Ie(wt,t)):Pe(Mt),Ie(Mt,n)}var $n=null,_c=!1,bd=!1;function xw(t){$n===null?$n=[t]:$n.push(t)}function vA(t){_c=!0,xw(t)}function Jr(){if(!bd&&$n!==null){bd=!0;var t=0,e=ve;try{var n=$n;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,_c=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),tw(op,Jr),i}finally{ve=e,bd=!1}}return null}var hs=[],fs=0,Nu=null,Ou=0,Yt=[],Xt=0,Ci=null,Wn=1,Hn="";function di(t,e){hs[fs++]=Ou,hs[fs++]=Nu,Nu=t,Ou=e}function bw(t,e,n){Yt[Xt++]=Wn,Yt[Xt++]=Hn,Yt[Xt++]=Ci,Ci=t;var r=Wn;t=Hn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var s=32-gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-gn(e)+i|n<<i|r,Hn=s+t}else Wn=1<<s|n<<i|r,Hn=t}function mp(t){t.return!==null&&(di(t,1),bw(t,1,0))}function gp(t){for(;t===Nu;)Nu=hs[--fs],hs[fs]=null,Ou=hs[--fs],hs[fs]=null;for(;t===Ci;)Ci=Yt[--Xt],Yt[Xt]=null,Hn=Yt[--Xt],Yt[Xt]=null,Wn=Yt[--Xt],Yt[Xt]=null}var Ht=null,$t=null,xe=!1,hn=null;function Nw(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ky(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,$t=Or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:Wn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,$t=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(xe){var e=$t;if(e){var n=e;if(!ky(t,e)){if(Fh(t))throw Error(z(418));e=Or(n.nextSibling);var r=Ht;e&&ky(t,e)?Nw(r,n):(t.flags=t.flags&-4097|2,xe=!1,Ht=t)}}else{if(Fh(t))throw Error(z(418));t.flags=t.flags&-4097|2,xe=!1,Ht=t}}}function Py(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Dl(t){if(t!==Ht)return!1;if(!xe)return Py(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lh(t.type,t.memoizedProps)),e&&(e=$t)){if(Fh(t))throw Ow(),Error(z(418));for(;e;)Nw(t,e),e=Or(e.nextSibling)}if(Py(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=Or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Ht?Or(t.stateNode.nextSibling):null;return!0}function Ow(){for(var t=$t;t;)t=Or(t.nextSibling)}function Ls(){$t=Ht=null,xe=!1}function yp(t){hn===null?hn=[t]:hn.push(t)}var _A=cr.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ry(t){var e=t._init;return e(t._payload)}function Lw(t){function e(_,y){if(t){var S=_.deletions;S===null?(_.deletions=[y],_.flags|=16):S.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Vr(_,y),_.index=0,_.sibling=null,_}function s(_,y,S){return _.index=S,t?(S=_.alternate,S!==null?(S=S.index,S<y?(_.flags|=2,y):S):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,y,S,x){return y===null||y.tag!==6?(y=Fd(S,_.mode,x),y.return=_,y):(y=i(y,S),y.return=_,y)}function u(_,y,S,x){var O=S.type;return O===os?h(_,y,S.props.children,x,S.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===vr&&Ry(O)===y.type)?(x=i(y,S.props),x.ref=Ao(_,y,S),x.return=_,x):(x=lu(S.type,S.key,S.props,null,_.mode,x),x.ref=Ao(_,y,S),x.return=_,x)}function c(_,y,S,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=jd(S,_.mode,x),y.return=_,y):(y=i(y,S.children||[]),y.return=_,y)}function h(_,y,S,x,O){return y===null||y.tag!==7?(y=Ti(S,_.mode,x,O),y.return=_,y):(y=i(y,S),y.return=_,y)}function f(_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Fd(""+y,_.mode,S),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Al:return S=lu(y.type,y.key,y.props,null,_.mode,S),S.ref=Ao(_,null,y),S.return=_,S;case ss:return y=jd(y,_.mode,S),y.return=_,y;case vr:var x=y._init;return f(_,x(y._payload),S)}if(Oo(y)||wo(y))return y=Ti(y,_.mode,S,null),y.return=_,y;Ml(_,y)}return null}function m(_,y,S,x){var O=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:a(_,y,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Al:return S.key===O?u(_,y,S,x):null;case ss:return S.key===O?c(_,y,S,x):null;case vr:return O=S._init,m(_,y,O(S._payload),x)}if(Oo(S)||wo(S))return O!==null?null:h(_,y,S,x,null);Ml(_,S)}return null}function E(_,y,S,x,O){if(typeof x=="string"&&x!==""||typeof x=="number")return _=_.get(S)||null,a(y,_,""+x,O);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Al:return _=_.get(x.key===null?S:x.key)||null,u(y,_,x,O);case ss:return _=_.get(x.key===null?S:x.key)||null,c(y,_,x,O);case vr:var V=x._init;return E(_,y,S,V(x._payload),O)}if(Oo(x)||wo(x))return _=_.get(S)||null,h(y,_,x,O,null);Ml(y,x)}return null}function I(_,y,S,x){for(var O=null,V=null,T=y,g=y=0,A=null;T!==null&&g<S.length;g++){T.index>g?(A=T,T=null):A=T.sibling;var C=m(_,T,S[g],x);if(C===null){T===null&&(T=A);break}t&&T&&C.alternate===null&&e(_,T),y=s(C,y,g),V===null?O=C:V.sibling=C,V=C,T=A}if(g===S.length)return n(_,T),xe&&di(_,g),O;if(T===null){for(;g<S.length;g++)T=f(_,S[g],x),T!==null&&(y=s(T,y,g),V===null?O=T:V.sibling=T,V=T);return xe&&di(_,g),O}for(T=r(_,T);g<S.length;g++)A=E(T,_,g,S[g],x),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?g:A.key),y=s(A,y,g),V===null?O=A:V.sibling=A,V=A);return t&&T.forEach(function(b){return e(_,b)}),xe&&di(_,g),O}function k(_,y,S,x){var O=wo(S);if(typeof O!="function")throw Error(z(150));if(S=O.call(S),S==null)throw Error(z(151));for(var V=O=null,T=y,g=y=0,A=null,C=S.next();T!==null&&!C.done;g++,C=S.next()){T.index>g?(A=T,T=null):A=T.sibling;var b=m(_,T,C.value,x);if(b===null){T===null&&(T=A);break}t&&T&&b.alternate===null&&e(_,T),y=s(b,y,g),V===null?O=b:V.sibling=b,V=b,T=A}if(C.done)return n(_,T),xe&&di(_,g),O;if(T===null){for(;!C.done;g++,C=S.next())C=f(_,C.value,x),C!==null&&(y=s(C,y,g),V===null?O=C:V.sibling=C,V=C);return xe&&di(_,g),O}for(T=r(_,T);!C.done;g++,C=S.next())C=E(T,_,g,C.value,x),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?g:C.key),y=s(C,y,g),V===null?O=C:V.sibling=C,V=C);return t&&T.forEach(function(N){return e(_,N)}),xe&&di(_,g),O}function R(_,y,S,x){if(typeof S=="object"&&S!==null&&S.type===os&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Al:e:{for(var O=S.key,V=y;V!==null;){if(V.key===O){if(O=S.type,O===os){if(V.tag===7){n(_,V.sibling),y=i(V,S.props.children),y.return=_,_=y;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===vr&&Ry(O)===V.type){n(_,V.sibling),y=i(V,S.props),y.ref=Ao(_,V,S),y.return=_,_=y;break e}n(_,V);break}else e(_,V);V=V.sibling}S.type===os?(y=Ti(S.props.children,_.mode,x,S.key),y.return=_,_=y):(x=lu(S.type,S.key,S.props,null,_.mode,x),x.ref=Ao(_,y,S),x.return=_,_=x)}return o(_);case ss:e:{for(V=S.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(_,y.sibling),y=i(y,S.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=jd(S,_.mode,x),y.return=_,_=y}return o(_);case vr:return V=S._init,R(_,y,V(S._payload),x)}if(Oo(S))return I(_,y,S,x);if(wo(S))return k(_,y,S,x);Ml(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,S),y.return=_,_=y):(n(_,y),y=Fd(S,_.mode,x),y.return=_,_=y),o(_)):n(_,y)}return R}var Ds=Lw(!0),Dw=Lw(!1),Lu=Xr(null),Du=null,ps=null,vp=null;function _p(){vp=ps=Du=null}function wp(t){var e=Lu.current;Pe(Lu),t._currentValue=e}function Uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function As(t,e){Du=t,vp=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(vp!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Du===null)throw Error(z(308));ps=t,Du.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var gi=null;function Ep(t){gi===null?gi=[t]:gi.push(t)}function Mw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ep(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ep(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ap(t,n)}}function xy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mu(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,E=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,k=a;switch(m=e,E=n,k.tag){case 1:if(I=k.payload,typeof I=="function"){f=I.call(E,f,m);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=k.payload,m=typeof I=="function"?I.call(E,f,m):I,m==null)break e;f=Le({},f,m);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else E={eventTime:E,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=E,u=f):h=h.next=E,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=f}}function by(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var za={},Pn=Xr(za),ya=Xr(za),va=Xr(za);function yi(t){if(t===za)throw Error(z(174));return t}function Sp(t,e){switch(Ie(va,e),Ie(ya,t),Ie(Pn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wh(e,t)}Pe(Pn),Ie(Pn,e)}function Ms(){Pe(Pn),Pe(ya),Pe(va)}function Fw(t){yi(va.current);var e=yi(Pn.current),n=wh(e,t.type);e!==n&&(Ie(ya,t),Ie(Pn,n))}function Ip(t){ya.current===t&&(Pe(Pn),Pe(ya))}var Ne=Xr(0);function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function Ap(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var ru=cr.ReactCurrentDispatcher,Od=cr.ReactCurrentBatchConfig,ki=0,Oe=null,Ge=null,Je=null,Fu=!1,Go=!1,_a=0,wA=0;function ft(){throw Error(z(321))}function Cp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(ki=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ru.current=t===null||t.memoizedState===null?IA:AA,t=n(r,i),Go){s=0;do{if(Go=!1,_a=0,25<=s)throw Error(z(301));s+=1,Je=Ge=null,e.updateQueue=null,ru.current=CA,t=n(r,i)}while(Go)}if(ru.current=ju,e=Ge!==null&&Ge.next!==null,ki=0,Je=Ge=Oe=null,Fu=!1,e)throw Error(z(300));return t}function Pp(){var t=_a!==0;return _a=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Oe.memoizedState=Je=t:Je=Je.next=t,Je}function rn(){if(Ge===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Je===null?Oe.memoizedState:Je.next;if(e!==null)Je=e,Ge=t;else{if(t===null)throw Error(z(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Oe.memoizedState=Je=t:Je=Je.next=t}return Je}function wa(t,e){return typeof e=="function"?e(t):e}function Ld(t){var e=rn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ki&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Oe.lanes|=h,Pi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,vn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=rn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function jw(){}function Uw(t,e){var n=Oe,r=rn(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Rp($w.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ea(9,Bw.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(z(349));ki&30||zw(n,e,i)}return i}function zw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bw(t,e,n,r){e.value=n,e.getSnapshot=r,Ww(e)&&Hw(t)}function $w(t,e,n){return n(function(){Ww(e)&&Hw(t)})}function Ww(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function Hw(t){var e=tr(t,1);e!==null&&yn(e,t,1,-1)}function Ny(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=SA.bind(null,Oe,t),[e.memoizedState,t]}function Ea(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qw(){return rn().memoizedState}function iu(t,e,n,r){var i=Tn();Oe.flags|=t,i.memoizedState=Ea(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Cp(r,o.deps)){i.memoizedState=Ea(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=Ea(1|e,n,s,r)}function Oy(t,e){return iu(8390656,8,t,e)}function Rp(t,e){return wc(2048,8,t,e)}function Gw(t,e){return wc(4,2,t,e)}function Kw(t,e){return wc(4,4,t,e)}function Qw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yw(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,Qw.bind(null,e,t),n)}function xp(){}function Xw(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jw(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zw(t,e,n){return ki&21?(vn(n,e)||(n=iw(),Oe.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function EA(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Od.transition;Od.transition={};try{t(!1),e()}finally{ve=n,Od.transition=r}}function e1(){return rn().memoizedState}function TA(t,e,n){var r=Mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t1(t))n1(e,n);else if(n=Mw(t,e,n,r),n!==null){var i=Pt();yn(n,t,r,i),r1(n,e,r)}}function SA(t,e,n){var r=Mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t1(t))n1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var u=e.interleaved;u===null?(i.next=i,Ep(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Mw(t,e,i,r),n!==null&&(i=Pt(),yn(n,t,r,i),r1(n,e,r))}}function t1(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function n1(t,e){Go=Fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ap(t,n)}}var ju={readContext:nn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},IA={readContext:nn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:Oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,iu(4194308,4,Qw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return iu(4194308,4,t,e)},useInsertionEffect:function(t,e){return iu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TA.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:Ny,useDebugValue:xp,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=Ny(!1),e=t[0];return t=EA.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=Tn();if(xe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ze===null)throw Error(z(349));ki&30||zw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Oy($w.bind(null,r,s,t),[t]),r.flags|=2048,Ea(9,Bw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Ze.identifierPrefix;if(xe){var n=Hn,r=Wn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AA={readContext:nn,useCallback:Xw,useContext:nn,useEffect:Rp,useImperativeHandle:Yw,useInsertionEffect:Gw,useLayoutEffect:Kw,useMemo:Jw,useReducer:Ld,useRef:qw,useState:function(){return Ld(wa)},useDebugValue:xp,useDeferredValue:function(t){var e=rn();return Zw(e,Ge.memoizedState,t)},useTransition:function(){var t=Ld(wa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:jw,useSyncExternalStore:Uw,useId:e1,unstable_isNewReconciler:!1},CA={readContext:nn,useCallback:Xw,useContext:nn,useEffect:Rp,useImperativeHandle:Yw,useInsertionEffect:Gw,useLayoutEffect:Kw,useMemo:Jw,useReducer:Dd,useRef:qw,useState:function(){return Dd(wa)},useDebugValue:xp,useDeferredValue:function(t){var e=rn();return Ge===null?e.memoizedState=t:Zw(e,Ge.memoizedState,t)},useTransition:function(){var t=Dd(wa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:jw,useSyncExternalStore:Uw,useId:e1,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Mr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(yn(e,t,i,r),nu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Mr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(yn(e,t,i,r),nu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Mr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(yn(e,t,r,n),nu(e,t,r))}};function Ly(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function i1(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Vt(e)?Ai:wt.current,r=e.contextTypes,s=(r=r!=null)?Os(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Vt(e)?Ai:wt.current,i.context=Os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",r=e;do n+=e2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kA=typeof WeakMap=="function"?WeakMap:Map;function s1(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zu||(zu=!0,Zh=r),$h(t,e)},n}function o1(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$h(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function My(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zA.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var PA=cr.ReactCurrentOwner,Dt=!1;function kt(t,e,n,r){e.child=t===null?Dw(e,null,n,r):Ds(e,t.child,n,r)}function jy(t,e,n,r,i){n=n.render;var s=e.ref;return As(e,i),r=kp(t,e,n,r,s,i),n=Pp(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(xe&&n&&mp(e),e.flags|=1,kt(t,e,r,i),e.child)}function Uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a1(t,e,s,r,i)):(t=lu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function a1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fa(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return Wh(t,e,n,r,i)}function l1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(gs,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(gs,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(gs,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(gs,zt),zt|=r;return kt(t,e,i,n),e.child}function u1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wh(t,e,n,r,i){var s=Vt(n)?Ai:wt.current;return s=Os(e,s),As(e,i),n=kp(t,e,n,r,s,i),r=Pp(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(xe&&r&&mp(e),e.flags|=1,kt(t,e,n,i),e.child)}function zy(t,e,n,r,i){if(Vt(n)){var s=!0;bu(e)}else s=!1;if(As(e,i),e.stateNode===null)su(t,e),i1(e,n,r),Bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Vt(n)?Ai:wt.current,c=Os(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Dy(e,o,r,c),_r=!1;var m=e.memoizedState;o.state=m,Mu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Mt.current||_r?(typeof h=="function"&&(zh(e,n,h,r),u=e.memoizedState),(a=_r||Ly(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:cn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Vt(n)?Ai:wt.current,u=Os(e,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Dy(e,o,r,u),_r=!1,m=e.memoizedState,o.state=m,Mu(e,r,o,i);var I=e.memoizedState;a!==f||m!==I||Mt.current||_r?(typeof E=="function"&&(zh(e,n,E,r),I=e.memoizedState),(c=_r||Ly(e,n,c,r,m,I,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Hh(t,e,n,r,s,i)}function Hh(t,e,n,r,i,s){u1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Cy(e,n,!1),nr(t,e,s);r=e.stateNode,PA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&Cy(e,n,!0),e.child}function c1(t){var e=t.stateNode;e.pendingContext?Ay(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ay(t,e.context,!1),Sp(t,e.containerInfo)}function By(t,e,n,r,i){return Ls(),yp(i),e.flags|=256,kt(t,e,n,r),e.child}var qh={dehydrated:null,treeContext:null,retryLane:0};function Gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function d1(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ne,i&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gh(n),e.memoizedState=qh,t):bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vr(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qh,r}return s=t.child,t=s.sibling,r=Vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bp(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,n,r){return r!==null&&yp(r),Ds(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Md(Error(z(422))),Vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=qh,s);if(!(e.mode&1))return Vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Md(s,r,void 0),Vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),yn(r,t,i,-1))}return Vp(),r=Md(Error(z(421))),Vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$t=Or(i.nextSibling),Ht=e,xe=!0,hn=null,t!==null&&(Yt[Xt++]=Wn,Yt[Xt++]=Hn,Yt[Xt++]=Ci,Wn=t.id,Hn=t.overflow,Ci=e),e=bp(e,r.children),e.flags|=4096,e)}function $y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uh(t.return,e,n)}function Vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function h1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$y(t,n,e);else if(t.tag===19)$y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function su(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xA(t,e,n){switch(e.tag){case 3:c1(e),Ls();break;case 5:Fw(e);break;case 1:Vt(e.type)&&bu(e);break;case 4:Sp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?d1(t,e,n):(Ie(Ne,Ne.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ie(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,l1(t,e,n)}return nr(t,e,n)}var f1,Kh,p1,m1;f1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kh=function(){};p1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(Pn.current);var s=null;switch(n){case"input":i=gh(t,i),r=gh(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=_h(t,i),r=_h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ru)}Eh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ce("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};m1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bA(t,e,n){var r=e.pendingProps;switch(gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Vt(e.type)&&xu(),pt(e),null;case 3:return r=e.stateNode,Ms(),Pe(Mt),Pe(wt),Ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(nf(hn),hn=null))),Kh(t,e),pt(e),null;case 5:Ip(e);var i=yi(va.current);if(n=e.type,t!==null&&e.stateNode!=null)p1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return pt(e),null}if(t=yi(Pn.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[ga]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Do.length;i++)Ce(Do[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Jg(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":ey(r,s),Ce("invalid",r)}Eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,a,t),i=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Cl(r),Zg(r,s,!0);break;case"textarea":Cl(r),ty(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ru)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[ga]=r,f1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Th(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Do.length;i++)Ce(Do[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":Jg(t,r),i=gh(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":ey(t,r),i=_h(t,r),Ce("invalid",t);break;default:i=r}Eh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?q0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&W0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&aa(t,u):typeof u=="number"&&aa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ce("scroll",t):u!=null&&tp(t,s,u,o))}switch(n){case"input":Cl(t),Zg(t,r,!1);break;case"textarea":Cl(t),ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)m1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=yi(va.current),yi(Pn.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return pt(e),null;case 13:if(Pe(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&$t!==null&&e.mode&1&&!(e.flags&128))Ow(),Ls(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[In]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else hn!==null&&(nf(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Qe===0&&(Qe=3):Vp())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Ms(),Kh(t,e),t===null&&pa(e.stateNode.containerInfo),pt(e),null;case 10:return wp(e.type._context),pt(e),null;case 17:return Vt(e.type)&&xu(),pt(e),null;case 19:if(Pe(Ne),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vu(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>Fs&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return pt(e),null}else 2*$e()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Ne.current,Ie(Ne,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return Mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function NA(t,e){switch(gp(e),e.tag){case 1:return Vt(e.type)&&xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),Pe(Mt),Pe(wt),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(Pe(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Ne),null;case 4:return Ms(),null;case 10:return wp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var Fl=!1,vt=!1,OA=typeof WeakSet=="function"?WeakSet:Set,W=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Qh(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Wy=!1;function LA(t,e){if(Nh=Cu,t=ww(),pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oh={focusedElem:t,selectionRange:n},Cu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var k=I.memoizedProps,R=I.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?k:cn(e.type,k),R);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Ve(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return I=Wy,Wy=!1,I}function Ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qh(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g1(t){var e=t.alternate;e!==null&&(t.alternate=null,g1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[ga],delete e[Mh],delete e[gA],delete e[yA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y1(t){return t.tag===5||t.tag===3||t.tag===4}function Hy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ru));else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var nt=null,dn=!1;function mr(t,e,n){for(n=n.child;n!==null;)v1(t,e,n),n=n.sibling}function v1(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:vt||ms(n,e);case 6:var r=nt,i=dn;nt=null,mr(t,e,n),nt=r,dn=i,nt!==null&&(dn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(dn?(t=nt,n=n.stateNode,t.nodeType===8?xd(t.parentNode,n):t.nodeType===1&&xd(t,n),da(t)):xd(nt,n.stateNode));break;case 4:r=nt,i=dn,nt=n.stateNode.containerInfo,dn=!0,mr(t,e,n),nt=r,dn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qh(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!vt&&(ms(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,mr(t,e,n),vt=r):mr(t,e,n);break;default:mr(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OA),e.forEach(function(r){var i=$A.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,dn=!1;break e;case 3:nt=a.stateNode.containerInfo,dn=!0;break e;case 4:nt=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(nt===null)throw Error(z(160));v1(s,o,i),nt=null,dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_1(e,t),e=e.sibling}function _1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),En(t),r&4){try{Ko(3,t,t.return),Tc(3,t)}catch(k){Ve(t,t.return,k)}try{Ko(5,t,t.return)}catch(k){Ve(t,t.return,k)}}break;case 1:un(e,t),En(t),r&512&&n!==null&&ms(n,n.return);break;case 5:if(un(e,t),En(t),r&512&&n!==null&&ms(n,n.return),t.flags&32){var i=t.stateNode;try{aa(i,"")}catch(k){Ve(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z0(i,s),Th(a,o);var c=Th(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?q0(i,f):h==="dangerouslySetInnerHTML"?W0(i,f):h==="children"?aa(i,f):tp(i,h,f,c)}switch(a){case"input":yh(i,s);break;case"textarea":B0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Es(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[ga]=s}catch(k){Ve(t,t.return,k)}}break;case 6:if(un(e,t),En(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ve(t,t.return,k)}}break;case 3:if(un(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(k){Ve(t,t.return,k)}break;case 4:un(e,t),En(t);break;case 13:un(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lp=$e())),r&4&&qy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||h,un(e,t),vt=c):un(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(m=W,E=m.child,m.tag){case 0:case 11:case 14:case 15:Ko(4,m,m.return);break;case 1:ms(m,m.return);var I=m.stateNode;if(typeof I.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(k){Ve(r,n,k)}}break;case 5:ms(m,m.return);break;case 22:if(m.memoizedState!==null){Ky(f);continue}}E!==null?(E.return=m,W=E):Ky(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=H0("display",o))}catch(k){Ve(t,t.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Ve(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:un(e,t),En(t),r&4&&qy(t);break;case 21:break;default:un(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y1(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(aa(i,""),r.flags&=-33);var s=Hy(t);Jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hy(t);Xh(t,a,o);break;default:throw Error(z(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DA(t,e,n){W=t,w1(t)}function w1(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||vt;a=Fl;var c=vt;if(Fl=o,(vt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Qy(i):u!==null?(u.return=o,W=u):Qy(i);for(;s!==null;)W=s,w1(s),s=s.sibling;W=i,Fl=a,vt=c}Gy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Gy(t)}}function Gy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&by(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}by(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}vt||e.flags&512&&Yh(e)}catch(m){Ve(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ky(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Qy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{Yh(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{Yh(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var MA=Math.ceil,Uu=cr.ReactCurrentDispatcher,Np=cr.ReactCurrentOwner,en=cr.ReactCurrentBatchConfig,de=0,Ze=null,qe=null,st=0,zt=0,gs=Xr(0),Qe=0,Ta=null,Pi=0,Sc=0,Op=0,Qo=null,Lt=null,Lp=0,Fs=1/0,Bn=null,zu=!1,Zh=null,Dr=null,jl=!1,Pr=null,Bu=0,Yo=0,ef=null,ou=-1,au=0;function Pt(){return de&6?$e():ou!==-1?ou:ou=$e()}function Mr(t){return t.mode&1?de&2&&st!==0?st&-st:_A.transition!==null?(au===0&&(au=iw()),au):(t=ve,t!==0||(t=window.event,t=t===void 0?16:dw(t.type)),t):1}function yn(t,e,n,r){if(50<Yo)throw Yo=0,ef=null,Error(z(185));Fa(t,n,r),(!(de&2)||t!==Ze)&&(t===Ze&&(!(de&2)&&(Sc|=n),Qe===4&&Er(t,st)),Ft(t,r),n===1&&de===0&&!(e.mode&1)&&(Fs=$e()+500,_c&&Jr()))}function Ft(t,e){var n=t.callbackNode;_2(t,e);var r=Au(t,t===Ze?st:0);if(r===0)n!==null&&iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iy(n),e===1)t.tag===0?vA(Yy.bind(null,t)):xw(Yy.bind(null,t)),pA(function(){!(de&6)&&Jr()}),n=null;else{switch(sw(r)){case 1:n=op;break;case 4:n=nw;break;case 16:n=Iu;break;case 536870912:n=rw;break;default:n=Iu}n=P1(n,E1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E1(t,e){if(ou=-1,au=0,de&6)throw Error(z(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=Au(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$u(t,r);else{e=r;var i=de;de|=2;var s=S1();(Ze!==t||st!==e)&&(Bn=null,Fs=$e()+500,Ei(t,e));do try{jA();break}catch(a){T1(t,a)}while(!0);_p(),Uu.current=s,de=i,qe!==null?e=0:(Ze=null,st=0,e=Qe)}if(e!==0){if(e===2&&(i=kh(t),i!==0&&(r=i,e=tf(t,i))),e===1)throw n=Ta,Ei(t,0),Er(t,r),Ft(t,$e()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!VA(i)&&(e=$u(t,r),e===2&&(s=kh(t),s!==0&&(r=s,e=tf(t,s))),e===1))throw n=Ta,Ei(t,0),Er(t,r),Ft(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:hi(t,Lt,Bn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=Lp+500-$e(),10<e)){if(Au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dh(hi.bind(null,t,Lt,Bn),e);break}hi(t,Lt,Bn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MA(r/1960))-r,10<r){t.timeoutHandle=Dh(hi.bind(null,t,Lt,Bn),r);break}hi(t,Lt,Bn);break;case 5:hi(t,Lt,Bn);break;default:throw Error(z(329))}}}return Ft(t,$e()),t.callbackNode===n?E1.bind(null,t):null}function tf(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=$u(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&nf(e)),t}function nf(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function VA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Op,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function Yy(t){if(de&6)throw Error(z(327));Cs();var e=Au(t,0);if(!(e&1))return Ft(t,$e()),null;var n=$u(t,e);if(t.tag!==0&&n===2){var r=kh(t);r!==0&&(e=r,n=tf(t,r))}if(n===1)throw n=Ta,Ei(t,0),Er(t,e),Ft(t,$e()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Lt,Bn),Ft(t,$e()),null}function Dp(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Fs=$e()+500,_c&&Jr())}}function Ri(t){Pr!==null&&Pr.tag===0&&!(de&6)&&Cs();var e=de;de|=1;var n=en.transition,r=ve;try{if(en.transition=null,ve=1,t)return t()}finally{ve=r,en.transition=n,de=e,!(de&6)&&Jr()}}function Mp(){zt=gs.current,Pe(gs)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fA(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(gp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xu();break;case 3:Ms(),Pe(Mt),Pe(wt),Ap();break;case 5:Ip(r);break;case 4:Ms();break;case 13:Pe(Ne);break;case 19:Pe(Ne);break;case 10:wp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(Ze=t,qe=t=Vr(t.current,null),st=zt=e,Qe=0,Ta=null,Op=Sc=Pi=0,Lt=Qo=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gi=null}return t}function T1(t,e){do{var n=qe;try{if(_p(),ru.current=ju,Fu){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fu=!1}if(ki=0,Je=Ge=Oe=null,Go=!1,_a=0,Np.current=null,n===null||n.return===null){Qe=1,Ta=e,qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Vy(o);if(E!==null){E.flags&=-257,Fy(E,o,a,s,e),E.mode&1&&My(s,c,e),e=E,u=c;var I=e.updateQueue;if(I===null){var k=new Set;k.add(u),e.updateQueue=k}else I.add(u);break e}else{if(!(e&1)){My(s,c,e),Vp();break e}u=Error(z(426))}}else if(xe&&a.mode&1){var R=Vy(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Fy(R,o,a,s,e),yp(Vs(u,a));break e}}s=u=Vs(u,a),Qe!==4&&(Qe=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=s1(s,u,e);xy(s,_);break e;case 1:a=u;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Dr===null||!Dr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=o1(s,a,e);xy(s,x);break e}}s=s.return}while(s!==null)}A1(n)}catch(O){e=O,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function S1(){var t=Uu.current;return Uu.current=ju,t===null?ju:t}function Vp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Ze===null||!(Pi&268435455)&&!(Sc&268435455)||Er(Ze,st)}function $u(t,e){var n=de;de|=2;var r=S1();(Ze!==t||st!==e)&&(Bn=null,Ei(t,e));do try{FA();break}catch(i){T1(t,i)}while(!0);if(_p(),de=n,Uu.current=r,qe!==null)throw Error(z(261));return Ze=null,st=0,Qe}function FA(){for(;qe!==null;)I1(qe)}function jA(){for(;qe!==null&&!c2();)I1(qe)}function I1(t){var e=k1(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?A1(t):qe=e,Np.current=null}function A1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NA(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,qe=null;return}}else if(n=bA(n,e,zt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Qe===0&&(Qe=5)}function hi(t,e,n){var r=ve,i=en.transition;try{en.transition=null,ve=1,UA(t,e,n,r)}finally{en.transition=i,ve=r}return null}function UA(t,e,n,r){do Cs();while(Pr!==null);if(de&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w2(t,s),t===Ze&&(qe=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,P1(Iu,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=ve;ve=1;var a=de;de|=4,Np.current=null,LA(t,n),_1(n,t),oA(Oh),Cu=!!Nh,Oh=Nh=null,t.current=n,DA(n),d2(),de=a,ve=o,en.transition=s}else t.current=n;if(jl&&(jl=!1,Pr=t,Bu=i),s=t.pendingLanes,s===0&&(Dr=null),p2(n.stateNode),Ft(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zu)throw zu=!1,t=Zh,Zh=null,t;return Bu&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===ef?Yo++:(Yo=0,ef=t):Yo=0,Jr(),null}function Cs(){if(Pr!==null){var t=sw(Bu),e=en.transition,n=ve;try{if(en.transition=null,ve=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Bu=0,de&6)throw Error(z(331));var i=de;for(de|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:Ko(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var m=h.sibling,E=h.return;if(g1(h),h===c){W=null;break}if(m!==null){m.return=E,W=m;break}W=E}}}var I=s.alternate;if(I!==null){var k=I.child;if(k!==null){I.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,W=_;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=y;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(O){Ve(a,a.return,O)}if(a===o){W=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,W=x;break e}W=a.return}}if(de=i,Jr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(pc,t)}catch{}r=!0}return r}finally{ve=n,en.transition=e}}return!1}function Xy(t,e,n){e=Vs(n,e),e=s1(t,e,1),t=Lr(t,e,1),e=Pt(),t!==null&&(Fa(t,1,e),Ft(t,e))}function Ve(t,e,n){if(t.tag===3)Xy(t,t,n);else for(;e!==null;){if(e.tag===3){Xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Vs(n,t),t=o1(e,t,1),e=Lr(e,t,1),t=Pt(),e!==null&&(Fa(e,1,t),Ft(e,t));break}}e=e.return}}function zA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(Qe===4||Qe===3&&(st&130023424)===st&&500>$e()-Lp?Ei(t,0):Op|=n),Ft(t,e)}function C1(t,e){e===0&&(t.mode&1?(e=Rl,Rl<<=1,!(Rl&130023424)&&(Rl=4194304)):e=1);var n=Pt();t=tr(t,e),t!==null&&(Fa(t,e,n),Ft(t,n))}function BA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C1(t,n)}function $A(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),C1(t,n)}var k1;k1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,xA(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,xe&&e.flags&1048576&&bw(e,Ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;su(t,e),t=e.pendingProps;var i=Os(e,wt.current);As(e,n),i=kp(null,e,r,t,i,n);var s=Pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(s=!0,bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tp(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Bh(e,r,t,n),e=Hh(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&mp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(su(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HA(r),t=cn(r,t),i){case 0:e=Wh(null,e,r,t,n);break e;case 1:e=zy(null,e,r,t,n);break e;case 11:e=jy(null,e,r,t,n);break e;case 14:e=Uy(null,e,r,cn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),zy(t,e,r,i,n);case 3:e:{if(c1(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vw(t,e),Mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(z(423)),e),e=By(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(z(424)),e),e=By(t,e,r,n,i);break e}else for($t=Or(e.stateNode.containerInfo.firstChild),Ht=e,xe=!0,hn=null,n=Dw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=nr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return Fw(e),t===null&&jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lh(r,i)?o=null:s!==null&&Lh(r,s)&&(e.flags|=32),u1(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return d1(t,e,n);case 4:return Sp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),jy(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Lu,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Mt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Yn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Uh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,As(e,n),i=nn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),Uy(t,e,r,i,n);case 15:return a1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),su(t,e),e.tag=1,Vt(r)?(t=!0,bu(e)):t=!1,As(e,n),i1(e,r,i),Bh(e,r,i,n),Hh(null,e,r,!0,t,n);case 19:return h1(t,e,n);case 22:return l1(t,e,n)}throw Error(z(156,e.tag))};function P1(t,e){return tw(t,e)}function WA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new WA(t,e,n,r)}function Fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HA(t){if(typeof t=="function")return Fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===ip)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return Ti(n.children,i,s,e);case np:o=8,i|=8;break;case hh:return t=Zt(12,n,e,i|2),t.elementType=hh,t.lanes=s,t;case fh:return t=Zt(13,n,e,i),t.elementType=fh,t.lanes=s,t;case ph:return t=Zt(19,n,e,i),t.elementType=ph,t.lanes=s,t;case F0:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M0:o=10;break e;case V0:o=9;break e;case rp:o=11;break e;case ip:o=14;break e;case vr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=F0,t.lanes=n,t.stateNode={isHidden:!1},t}function Fd(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function jd(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_d(0),this.expirationTimes=_d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jp(t,e,n,r,i,s,o,a,u){return t=new qA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(s),t}function GA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function R1(t){if(!t)return Br;t=t._reactInternals;e:{if(Ui(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Vt(n))return Rw(t,n,e)}return e}function x1(t,e,n,r,i,s,o,a,u){return t=jp(n,r,!0,t,i,s,o,a,u),t.context=R1(null),n=t.current,r=Pt(),i=Mr(n),s=Yn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,Fa(t,i,r),Ft(t,r),t}function Ac(t,e,n,r){var i=e.current,s=Pt(),o=Mr(i);return n=R1(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(yn(t,i,o,s),nu(t,i,o)),o}function Wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Up(t,e){Jy(t,e),(t=t.alternate)&&Jy(t,e)}function KA(){return null}var b1=typeof reportError=="function"?reportError:function(t){console.error(t)};function zp(t){this._internalRoot=t}Cc.prototype.render=zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Ac(t,e,null,null)};Cc.prototype.unmount=zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){Ac(null,t,null,null)}),e[er]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=lw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&cw(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zy(){}function QA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wu(o);s.call(c)}}var o=x1(e,r,t,0,null,!1,!1,"",Zy);return t._reactRootContainer=o,t[er]=o.current,pa(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Wu(u);a.call(c)}}var u=jp(t,0,!1,null,null,!1,!1,"",Zy);return t._reactRootContainer=u,t[er]=u.current,pa(t.nodeType===8?t.parentNode:t),Ri(function(){Ac(e,u,n,r)}),u}function Pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Wu(o);a.call(u)}}Ac(e,o,t,i)}else o=QA(n,e,t,i,r);return Wu(o)}ow=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(ap(e,n|1),Ft(e,$e()),!(de&6)&&(Fs=$e()+500,Jr()))}break;case 13:Ri(function(){var r=tr(t,1);if(r!==null){var i=Pt();yn(r,t,1,i)}}),Up(t,1)}};lp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=Pt();yn(e,t,134217728,n)}Up(t,134217728)}};aw=function(t){if(t.tag===13){var e=Mr(t),n=tr(t,e);if(n!==null){var r=Pt();yn(n,t,e,r)}Up(t,e)}};lw=function(){return ve};uw=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Ih=function(t,e,n){switch(e){case"input":if(yh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(z(90));U0(r),yh(r,i)}}}break;case"textarea":B0(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};Q0=Dp;Y0=Ri;var YA={usingClientEntryPoint:!1,Events:[Ua,cs,vc,G0,K0,Dp]},ko={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XA={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z0(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||KA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{pc=Ul.inject(XA),kn=Ul}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YA;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(z(200));return GA(t,e,null,n)};Gt.createRoot=function(t,e){if(!Bp(t))throw Error(z(299));var n=!1,r="",i=b1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jp(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,pa(t.nodeType===8?t.parentNode:t),new zp(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Z0(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Ri(t)};Gt.hydrate=function(t,e,n){if(!kc(e))throw Error(z(200));return Pc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=b1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x1(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cc(e)};Gt.render=function(t,e,n){if(!kc(e))throw Error(z(200));return Pc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!kc(t))throw Error(z(40));return t._reactRootContainer?(Ri(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Gt.unstable_batchedUpdates=Dp;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Pc(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function N1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N1)}catch(t){console.error(t)}}N1(),N0.exports=Gt;var $p=N0.exports,ev=$p;ch.createRoot=ev.createRoot,ch.hydrateRoot=ev.hydrateRoot;const JA="/neighborhood-value-plus/assets/logo_notext-CB4EPGfG.png",ZA="/neighborhood-value-plus/assets/logo_text-BeXtmdLt.png";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function eC(t,e,n){return(e=nC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tv(Object(n),!0).forEach(function(r){eC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nC(t){var e=tC(t,"string");return typeof e=="symbol"?e:e+""}const nv=()=>{};let Wp={},O1={},L1=null,D1={mark:nv,measure:nv};try{typeof window<"u"&&(Wp=window),typeof document<"u"&&(O1=document),typeof MutationObserver<"u"&&(L1=MutationObserver),typeof performance<"u"&&(D1=performance)}catch{}const{userAgent:rv=""}=Wp.navigator||{},$r=Wp,Re=O1,iv=L1,zl=D1;$r.document;const dr=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",M1=~rv.indexOf("MSIE")||~rv.indexOf("Trident/");var rC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,iC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,V1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},sC={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},F1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Et="classic",Rc="duotone",oC="sharp",aC="sharp-duotone",j1=[Et,Rc,oC,aC],lC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},uC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),dC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hC=["fak","fa-kit","fakd","fa-kit-duotone"],sv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fC=["kit"],pC={kit:{"fa-kit":"fak"}},mC=["fak","fakd"],gC={kit:{fak:"fa-kit"}},ov={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Bl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yC=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vC=["fak","fa-kit","fakd","fa-kit-duotone"],_C={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},EC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},rf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},TC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],sf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...yC,...TC],SC=["solid","regular","light","thin","duotone","brands"],U1=[1,2,3,4,5,6,7,8,9,10],IC=U1.concat([11,12,13,14,15,16,17,18,19,20]),AC=[...Object.keys(EC),...SC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bl.GROUP,Bl.SWAP_OPACITY,Bl.PRIMARY,Bl.SECONDARY].concat(U1.map(t=>"".concat(t,"x"))).concat(IC.map(t=>"w-".concat(t))),CC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const rr="___FONT_AWESOME___",of=16,z1="fa",B1="svg-inline--fa",xi="data-fa-i2svg",af="data-fa-pseudo-element",kC="data-fa-pseudo-element-pending",Hp="data-prefix",qp="data-icon",av="fontawesome-i2svg",PC="async",RC=["HTML","HEAD","STYLE","SCRIPT"],$1=(()=>{try{return!0}catch{return!1}})();function Ba(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Et]}})}const W1=U({},V1);W1[Et]=U(U(U(U({},{"fa-duotone":"duotone"}),V1[Et]),sv.kit),sv["kit-duotone"]);const xC=Ba(W1),lf=U({},dC);lf[Et]=U(U(U(U({},{duotone:"fad"}),lf[Et]),ov.kit),ov["kit-duotone"]);const lv=Ba(lf),uf=U({},rf);uf[Et]=U(U({},uf[Et]),gC.kit);const Gp=Ba(uf),cf=U({},wC);cf[Et]=U(U({},cf[Et]),pC.kit);Ba(cf);const bC=rC,H1="fa-layers-text",NC=iC,OC=U({},lC);Ba(OC);const LC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ud=sC,DC=[...fC,...AC],Xo=$r.FontAwesomeConfig||{};function MC(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function VC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Re&&typeof Re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=VC(MC(n));i!=null&&(Xo[r]=i)});const q1={styleDefault:"solid",familyDefault:Et,cssPrefix:z1,replacementClass:B1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xo.familyPrefix&&(Xo.cssPrefix=Xo.familyPrefix);const js=U(U({},q1),Xo);js.autoReplaceSvg||(js.observeMutations=!1);const q={};Object.keys(q1).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){js[t]=e,Jo.forEach(n=>n(q))},get:function(){return js[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){js.cssPrefix=t,Jo.forEach(e=>e(q))},get:function(){return js.cssPrefix}});$r.FontAwesomeConfig=q;const Jo=[];function FC(t){return Jo.push(t),()=>{Jo.splice(Jo.indexOf(t),1)}}const gr=of,An={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jC(t){if(!t||!dr)return;const e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Re.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Re.head.insertBefore(e,r),t}const UC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sa(){let t=12,e="";for(;t-- >0;)e+=UC[Math.random()*62|0];return e}function Zs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kp(t){return t.classList?Zs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function G1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zC(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(G1(t[n]),'" '),"").trim()}function xc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Qp(t){return t.size!==An.size||t.x!==An.x||t.y!==An.y||t.rotate!==An.rotate||t.flipX||t.flipY}function BC(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function $C(t){let{transform:e,width:n=of,height:r=of,startCentered:i=!1}=t,s="";return i&&M1?s+="translate(".concat(e.x/gr-n/2,"em, ").concat(e.y/gr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/gr,"em), calc(-50% + ").concat(e.y/gr,"em)) "):s+="translate(".concat(e.x/gr,"em, ").concat(e.y/gr,"em) "),s+="scale(".concat(e.size/gr*(e.flipX?-1:1),", ").concat(e.size/gr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var WC=`:root, :host {
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
}`;function K1(){const t=z1,e=B1,n=q.cssPrefix,r=q.replacementClass;let i=WC;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let uv=!1;function zd(){q.autoAddCss&&!uv&&(jC(K1()),uv=!0)}var HC={mixout(){return{dom:{css:K1,insertCss:zd}}},hooks(){return{beforeDOMElementCreation(){zd()},beforeI2svg(){zd()}}}};const ir=$r||{};ir[rr]||(ir[rr]={});ir[rr].styles||(ir[rr].styles={});ir[rr].hooks||(ir[rr].hooks={});ir[rr].shims||(ir[rr].shims=[]);var Cn=ir[rr];const Q1=[],Y1=function(){Re.removeEventListener("DOMContentLoaded",Y1),Hu=1,Q1.map(t=>t())};let Hu=!1;dr&&(Hu=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),Hu||Re.addEventListener("DOMContentLoaded",Y1));function qC(t){dr&&(Hu?setTimeout(t,0):Q1.push(t))}function $a(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?G1(t):"<".concat(e," ").concat(zC(n),">").concat(r.map($a).join(""),"</").concat(e,">")}function cv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Bd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=a(h,e[c],c,e);return h};function GC(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function df(t){const e=GC(t);return e.length===1?e[0].toString(16):null}function KC(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function dv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function hf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=dv(e);typeof Cn.hooks.addPack=="function"&&!r?Cn.hooks.addPack(t,dv(e)):Cn.styles[t]=U(U({},Cn.styles[t]||{}),i),t==="fas"&&hf("fa",e)}const{styles:Ia,shims:QC}=Cn,X1=Object.keys(Gp),YC=X1.reduce((t,e)=>(t[e]=Object.keys(Gp[e]),t),{});let Yp=null,J1={},Z1={},eE={},tE={},nE={};function XC(t){return~DC.indexOf(t)}function JC(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!XC(i)?i:null}const rE=()=>{const t=r=>Bd(Ia,(i,s,o)=>(i[o]=Bd(s,r,{}),i),{});J1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Z1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),nE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Ia||q.autoFetchSvg,n=Bd(QC,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});eE=n.names,tE=n.unicodes,Yp=bc(q.styleDefault,{family:q.familyDefault})};FC(t=>{Yp=bc(t.styleDefault,{family:q.familyDefault})});rE();function Xp(t,e){return(J1[t]||{})[e]}function ZC(t,e){return(Z1[t]||{})[e]}function vi(t,e){return(nE[t]||{})[e]}function iE(t){return eE[t]||{prefix:null,iconName:null}}function ek(t){const e=tE[t],n=Xp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return Yp}const sE=()=>({prefix:null,iconName:null,rest:[]});function tk(t){let e=Et;const n=X1.reduce((r,i)=>(r[i]="".concat(q.cssPrefix,"-").concat(i),r),{});return j1.forEach(r=>{(t.includes(n[r])||t.some(i=>YC[r].includes(i)))&&(e=r)}),e}function bc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Et}=e,r=xC[n][t];if(n===Rc&&!t)return"fad";const i=lv[n][t]||lv[n][r],s=t in Cn.styles?t:null;return i||s||null}function nk(t){let e=[],n=null;return t.forEach(r=>{const i=JC(q.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function hv(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Nc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=sf.concat(vC),s=hv(t.filter(f=>i.includes(f))),o=hv(t.filter(f=>!sf.includes(f))),a=s.filter(f=>(r=f,!F1.includes(f))),[u=null]=a,c=tk(s),h=U(U({},nk(o)),{},{prefix:bc(u,{family:c})});return U(U(U({},h),ok({values:t,family:c,styles:Ia,config:q,canonical:h,givenPrefix:r})),rk(n,r,h))}function rk(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?iE(i):{},o=vi(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!Ia.far&&Ia.fas&&!q.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const ik=j1.filter(t=>t!==Et||t!==Rc),sk=Object.keys(rf).filter(t=>t!==Et).map(t=>Object.keys(rf[t])).flat();function ok(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,a=n===Rc,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(u||c||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ik.includes(n)&&(Object.keys(s).find(m=>sk.includes(m))||o.autoFetchSvg)){const m=cC.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=vi(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Wr()||"fas"),r}class ak{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=U(U({},this.definitions[s]||{}),i[s]),hf(s,i[s]);const o=Gp[Et][s];o&&hf(o,i[s]),rE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let fv=[],ys={};const ks={},lk=Object.keys(ks);function uk(t,e){let{mixoutsTo:n}=e;return fv=t,ys={},Object.keys(ks).forEach(r=>{lk.indexOf(r)===-1&&delete ks[r]}),fv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ys[o]||(ys[o]=[]),ys[o].push(s[o])})}r.provides&&r.provides(ks)}),n}function ff(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ys[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function bi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ys[t]||[]).forEach(s=>{s.apply(null,n)})}function Hr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ks[t]?ks[t].apply(null,e):void 0}function pf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Wr();if(e)return e=vi(n,e)||e,cv(oE.definitions,n,e)||cv(Cn.styles,n,e)}const oE=new ak,ck=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,bi("noAuto")},dk={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(bi("beforeI2svg",t),Hr("pseudoElements2svg",t),Hr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,qC(()=>{fk({autoReplaceSvgRoot:e}),bi("watch",t)})}},hk={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bc(t[0]);return{prefix:n,iconName:vi(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(bC))){const e=Nc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Wr(),iconName:vi(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Wr();return{prefix:e,iconName:vi(e,t)||t}}}},Qt={noAuto:ck,config:q,dom:dk,parse:hk,library:oE,findIconDefinition:pf,toHtml:$a},fk=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Re}=t;(Object.keys(Cn.styles).length>0||q.autoFetchSvg)&&dr&&q.autoReplaceSvg&&Qt.dom.i2svg({node:e})};function Oc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>$a(n))}}),Object.defineProperty(t,"node",{get:function(){if(!dr)return;const n=Re.createElement("div");return n.innerHTML=t.html,n.children}}),t}function pk(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Qp(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=xc(U(U({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function mk(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function Jp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:h,watchable:f=!1}=t,{width:m,height:E}=n.found?n:e,I=mC.includes(r),k=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(O=>h.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(h.classes).join(" ");let R={children:[],attributes:U(U({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(E)})};const _=I&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/E*16*.0625,"em")}:{};f&&(R.attributes[xi]=""),a&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||Sa())},children:[a]}),delete R.attributes.title);const y=U(U({},R),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:U(U({},_),h.styles)}),{children:S,attributes:x}=n.found&&e.found?Hr("generateAbstractMask",y)||{children:[],attributes:{}}:Hr("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=S,y.attributes=x,o?mk(y):pk(y)}function pv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(u[xi]="");const c=U({},o.styles);Qp(i)&&(c.transform=$C({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=xc(c);h.length>0&&(u.style=h);const f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function gk(t){const{content:e,title:n,extra:r}=t,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=xc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:$d}=Cn;function mf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ud.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ud.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ud.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const yk={found:!1,width:512,height:512};function vk(t,e){!$1&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function gf(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=Wr()),new Promise((r,i)=>{if(n==="fa"){const s=iE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&$d[e]&&$d[e][t]){const s=$d[e][t];return r(mf(s))}vk(t,e),r(U(U({},yk),{},{icon:q.showMissingIcons&&t?Hr("missingIconAbstract")||{}:{}}))})}const mv=()=>{},yf=q.measurePerformance&&zl&&zl.mark&&zl.measure?zl:{mark:mv,measure:mv},Mo='FA "6.7.2"',_k=t=>(yf.mark("".concat(Mo," ").concat(t," begins")),()=>aE(t)),aE=t=>{yf.mark("".concat(Mo," ").concat(t," ends")),yf.measure("".concat(Mo," ").concat(t),"".concat(Mo," ").concat(t," begins"),"".concat(Mo," ").concat(t," ends"))};var Zp={begin:_k,end:aE};const uu=()=>{};function gv(t){return typeof(t.getAttribute?t.getAttribute(xi):null)=="string"}function wk(t){const e=t.getAttribute?t.getAttribute(Hp):null,n=t.getAttribute?t.getAttribute(qp):null;return e&&n}function Ek(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function Tk(){return q.autoReplaceSvg===!0?cu.replace:cu[q.autoReplaceSvg]||cu.replace}function Sk(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function Ik(t){return Re.createElement(t)}function lE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Sk:Ik}=e;if(typeof t=="string")return Re.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(lE(s,{ceFn:n}))}),r}function Ak(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const cu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(lE(n),e)}),e.getAttribute(xi)===null&&q.keepOriginalSource){let n=Re.createComment(Ak(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kp(e).indexOf(q.replacementClass))return cu.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===q.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>$a(s)).join(`
`);e.setAttribute(xi,""),e.innerHTML=i}};function yv(t){t()}function uE(t,e){const n=typeof e=="function"?e:uu;if(t.length===0)n();else{let r=yv;q.mutateApproach===PC&&(r=$r.requestAnimationFrame||yv),r(()=>{const i=Tk(),s=Zp.begin("mutate");t.map(i),s(),n()})}}let em=!1;function cE(){em=!0}function vf(){em=!1}let qu=null;function vv(t){if(!iv||!q.observeMutations)return;const{treeCallback:e=uu,nodeCallback:n=uu,pseudoElementsCallback:r=uu,observeMutationsRoot:i=Re}=t;qu=new iv(s=>{if(em)return;const o=Wr();Zs(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!gv(a.addedNodes[0])&&(q.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&q.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&gv(a.target)&&~LC.indexOf(a.attributeName))if(a.attributeName==="class"&&wk(a.target)){const{prefix:u,iconName:c}=Nc(Kp(a.target));a.target.setAttribute(Hp,u||o),c&&a.target.setAttribute(qp,c)}else Ek(a.target)&&n(a.target)})}),dr&&qu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ck(){qu&&qu.disconnect()}function kk(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Pk(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Nc(Kp(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ZC(i.prefix,t.innerText)||Xp(i.prefix,df(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Rk(t){const e=Zs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||Sa()):(e["aria-hidden"]="true",e.focusable="false")),e}function xk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:An,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _v(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Pk(t),s=Rk(t),o=ff("parseNodeAttributes",{},t);let a=e.styleParser?kk(t):[];return U({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:An,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:bk}=Cn;function dE(t){const e=q.autoReplaceSvg==="nest"?_v(t,{styleParser:!1}):_v(t);return~e.extra.classes.indexOf(H1)?Hr("generateLayersText",t,e):Hr("generateSvgReplacementMutation",t,e)}function Nk(){return[...hC,...sf]}function wv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();const n=Re.documentElement.classList,r=h=>n.add("".concat(av,"-").concat(h)),i=h=>n.remove("".concat(av,"-").concat(h)),s=q.autoFetchSvg?Nk():F1.concat(Object.keys(bk));s.includes("fa")||s.push("fa");const o=[".".concat(H1,":not([").concat(xi,"])")].concat(s.map(h=>".".concat(h,":not([").concat(xi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Zs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Zp.begin("onTree"),c=a.reduce((h,f)=>{try{const m=dE(f);m&&h.push(m)}catch(m){$1||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,f)=>{Promise.all(c).then(m=>{uE(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(m=>{u(),f(m)})})}function Ok(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dE(t).then(n=>{n&&uE([n],e)})}function Lk(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:pf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:pf(i||{})),t(r,U(U({},n),{},{mask:i}))}}const Dk=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:m,icon:E}=t;return Oc(U({type:"icon"},t),()=>(bi("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(a||Sa()):(c["aria-hidden"]="true",c.focusable="false")),Jp({icons:{main:mf(E),mask:i?mf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:m,transform:U(U({},An),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:h,classes:u}})))};var Mk={mixout(){return{icon:Lk(Dk)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=wv,t.nodeCallback=Ok,t}}},provides(t){t.i2svg=function(e){const{node:n=Re,callback:r=()=>{}}=e;return wv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:h,extra:f}=n;return new Promise((m,E)=>{Promise.all([gf(r,o),c.iconName?gf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[k,R]=I;m([e,Jp({icons:{main:k,mask:R},prefix:o,iconName:r,transform:a,symbol:u,maskId:h,title:i,titleId:s,extra:f,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=xc(o);a.length>0&&(r.style=a);let u;return Qp(s)&&(u=Hr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Vk={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Oc({type:"layer"},()=>{bi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Fk={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Oc({type:"counter",content:t},()=>(bi("beforeDOMElementCreation",{content:t,params:e}),gk({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},jk={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Oc({type:"text",content:t},()=>(bi("beforeDOMElementCreation",{content:t,params:e}),pv({content:t,transform:U(U({},An),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(M1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,pv({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const Uk=new RegExp('"',"ug"),Ev=[1105920,1112319],Tv=U(U(U(U({},{FontAwesome:{normal:"fas",400:"fas"}}),uC),CC),_C),_f=Object.keys(Tv).reduce((t,e)=>(t[e.toLowerCase()]=Tv[e],t),{}),zk=Object.keys(_f).reduce((t,e)=>{const n=_f[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Bk(t){const e=t.replace(Uk,""),n=KC(e,0),r=n>=Ev[0]&&n<=Ev[1],i=e.length===2?e[0]===e[1]:!1;return{value:df(i?e[0]:e),isSecondary:r||i}}function $k(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(_f[n]||{})[i]||zk[n]}function Sv(t,e){const n="".concat(kC).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Zs(t.children).filter(m=>m.getAttribute(af)===e)[0],a=$r.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(NC),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){const m=a.getPropertyValue("content");let E=$k(u,h);const{value:I,isSecondary:k}=Bk(m),R=c[0].startsWith("FontAwesome");let _=Xp(E,I),y=_;if(R){const S=ek(I);S.iconName&&S.prefix&&(_=S.iconName,E=S.prefix)}if(_&&!k&&(!o||o.getAttribute(Hp)!==E||o.getAttribute(qp)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const S=xk(),{extra:x}=S;x.attributes[af]=e,gf(_,E).then(O=>{const V=Jp(U(U({},S),{},{icons:{main:O,mask:sE()},prefix:E,iconName:y,extra:x,watchable:!0})),T=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=V.map(g=>$a(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Wk(t){return Promise.all([Sv(t,"::before"),Sv(t,"::after")])}function Hk(t){return t.parentNode!==document.head&&!~RC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(af)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Iv(t){if(dr)return new Promise((e,n)=>{const r=Zs(t.querySelectorAll("*")).filter(Hk).map(Wk),i=Zp.begin("searchPseudoElements");cE(),Promise.all(r).then(()=>{i(),vf(),e()}).catch(()=>{i(),vf(),n()})})}var qk={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Iv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Re}=e;q.searchPseudoElements&&Iv(n)}}};let Av=!1;var Gk={mixout(){return{dom:{unwatch(){cE(),Av=!0}}}},hooks(){return{bootstrap(){vv(ff("mutationObserverCallbacks",{}))},noAuto(){Ck()},watch(t){const{observeMutationsRoot:e}=t;Av?vf():vv(ff("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Cv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Kk={mixout(){return{parse:{transform:t=>Cv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Cv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(u," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:h,path:f};return{tag:"g",attributes:U({},m.outer),children:[{tag:"g",attributes:U({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:U(U({},n.icon.attributes),m.path)}]}]}}}};const Wd={x:0,y:0,width:"100%",height:"100%"};function kv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Qk(t){return t.tag==="g"?t.children:[t]}var Yk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Nc(n.split(" ").map(i=>i.trim())):sE();return r.prefix||(r.prefix=Wr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:h,icon:f}=s,m=BC({transform:a,containerWidth:h,iconWidth:u}),E={tag:"rect",attributes:U(U({},Wd),{},{fill:"white"})},I=c.children?{children:c.children.map(kv)}:{},k={tag:"g",attributes:U({},m.inner),children:[kv(U({tag:c.tag,attributes:U(U({},c.attributes),m.path)},I))]},R={tag:"g",attributes:U({},m.outer),children:[k]},_="mask-".concat(o||Sa()),y="clip-".concat(o||Sa()),S={tag:"mask",attributes:U(U({},Wd),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,R]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Qk(f)},S]};return n.push(x,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Wd)}),{children:n,attributes:r}}}},Xk={provides(t){let e=!1;$r.matchMedia&&(e=$r.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=U(U({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:U(U({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:U(U({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Jk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Zk=[HC,Mk,Vk,Fk,jk,qk,Gk,Kk,Yk,Xk,Jk];uk(Zk,{mixoutsTo:Qt});Qt.noAuto;Qt.config;Qt.library;Qt.dom;const wf=Qt.parse;Qt.findIconDefinition;Qt.toHtml;const eP=Qt.icon;Qt.layer;Qt.text;Qt.counter;var hE={exports:{}},tP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nP=tP,rP=nP;function fE(){}function pE(){}pE.resetWarningCache=fE;var iP=function(){function t(r,i,s,o,a,u){if(u!==rP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:pE,resetWarningCache:fE};return n.PropTypes=n,n};hE.exports=iP();var sP=hE.exports;const re=w0(sP);function Pv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Sn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pv(Object(n),!0).forEach(function(r){vs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gu(t){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(t)}function vs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aP(t,e){if(t==null)return{};var n=oP(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ef(t){return lP(t)||uP(t)||cP(t)||dP()}function lP(t){if(Array.isArray(t))return Tf(t)}function uP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cP(t,e){if(t){if(typeof t=="string")return Tf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tf(t,e)}}function Tf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hP(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,f=t.pulse,m=t.fixedWidth,E=t.inverse,I=t.border,k=t.listItem,R=t.flip,_=t.size,y=t.rotation,S=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":m,"fa-inverse":E,"fa-border":I,"fa-li":k,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},vs(e,"fa-".concat(_),typeof _<"u"&&_!==null),vs(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),vs(e,"fa-pull-".concat(S),typeof S<"u"&&S!==null),vs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(O){return x[O]?O:null}).filter(function(O){return O})}function fP(t){return t=t-0,t===t}function mE(t){return fP(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var pP=["style"];function mP(t){return t.charAt(0).toUpperCase()+t.slice(1)}function gP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=mE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[mP(i)]=s:e[i]=s,e},{})}function gE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return gE(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=gP(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[mE(c)]=h}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=aP(n,pP);return i.attrs.style=Sn(Sn({},i.attrs.style),o),t.apply(void 0,[e.tag,Sn(Sn({},i.attrs),a)].concat(Ef(r)))}var yE=!1;try{yE=!0}catch{}function yP(){if(!yE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rv(t){if(t&&Gu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wf.icon)return wf.icon(t);if(t===null)return null;if(t&&Gu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Hd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?vs({},t,e):{}}var xv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ke=Va.forwardRef(function(t,e){var n=Sn(Sn({},xv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,h=Rv(r),f=Hd("classes",[].concat(Ef(hP(n)),Ef((o||"").split(" ")))),m=Hd("transform",typeof n.transform=="string"?wf.transform(n.transform):n.transform),E=Hd("mask",Rv(i)),I=eP(h,Sn(Sn(Sn(Sn({},f),m),E),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!I)return yP("Could not find icon",h),null;var k=I.abstract,R={ref:e};return Object.keys(n).forEach(function(_){xv.hasOwnProperty(_)||(R[_]=n[_])}),vP(k[0],R)});ke.displayName="FontAwesomeIcon";ke.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var vP=gE.bind(null,Va.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _P={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},bv={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},wP={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},EP={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},TP={prefix:"fas",iconName:"seedling",icon:[512,512,[127793,"sprout"],"f4d8","M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]},SP={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},IP={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},AP={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},CP={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},kP=CP,PP={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},RP=PP,xP={prefix:"fas",iconName:"handshake-angle",icon:[640,512,["hands-helping"],"f4c4","M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"]},bP=xP,NP={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Nv=NP,OP={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},LP=OP,Ku={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},DP={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},MP={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ni=MP,VP={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},FP={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},jP={prefix:"fas",iconName:"broom",icon:[576,512,[129529],"f51a","M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"]},UP={prefix:"fas",iconName:"dice",icon:[640,512,[127922],"f522","M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},zP=({onClose:t,onLocationSelect:e})=>{const[n,r]=D.useState(""),[i,s]=D.useState([]),[o,a]=D.useState(!1),[u,c]=D.useState(null),h=D.useRef(null);D.useEffect(()=>{if(n.trim().length<3){s([]);return}return h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{f(n)},300),()=>{h.current&&clearTimeout(h.current)}},[n]);const f=async I=>{if(I.trim()){a(!0),c(null);try{const R=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(I)}.json?access_token=pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ&proximity=-122.5715,45.498&bbox=-122.8,45.4,-122.3,45.6&limit=5&types=address,poi,place&country=US`);if(!R.ok)throw new Error("Search request failed");const _=await R.json();s(_.features||[])}catch(k){console.error("Geocoding error:",k),c("Failed to search addresses. Please try again."),s([])}finally{a(!1)}}},m=I=>{const[k,R]=I.center;e&&e({longitude:k,latitude:R,zoom:16,address:I.place_name}),t()},E=()=>{r(""),s([]),c(null)};return v.jsxs("div",{className:"header-panel search-panel",children:[v.jsxs("div",{className:"panel-header",children:[v.jsx("h3",{children:"Search Addresses"}),v.jsx("button",{className:"close-btn",onClick:t,children:v.jsx(ke,{icon:Ni})})]}),v.jsxs("div",{className:"panel-content",children:[v.jsx("div",{className:"search-container",children:v.jsxs("div",{className:"search-input-wrapper",children:[v.jsx("input",{type:"text",value:n,onChange:I=>r(I.target.value),placeholder:"Search for a place or address...",className:"search-input",autoFocus:!0}),n&&v.jsx("button",{className:"clear-search-btn",onClick:E,"aria-label":"Clear search",children:v.jsx(ke,{icon:Ni})}),o&&v.jsx("div",{className:"search-loading",children:v.jsx(ke,{icon:VP,spin:!0})})]})}),u&&v.jsx("div",{className:"search-error",children:u}),v.jsxs("div",{className:"search-results",children:[i.length>0&&v.jsx("div",{className:"results-header",children:v.jsxs("span",{children:["Found ",i.length," result",i.length!==1?"s":""]})}),i.map((I,k)=>{var R;return v.jsxs("div",{className:"search-result-item",onClick:()=>m(I),children:[v.jsx("div",{className:"result-icon",children:v.jsx(ke,{icon:Nv})}),v.jsxs("div",{className:"result-content",children:[v.jsx("div",{className:"result-name",children:I.text}),v.jsx("div",{className:"result-address",children:I.place_name}),((R=I.properties)==null?void 0:R.category)&&v.jsx("div",{className:"result-category",children:I.properties.category})]})]},`${I.id}-${k}`)}),n.trim().length>=3&&i.length===0&&!o&&!u&&v.jsxs("div",{className:"no-results",children:[v.jsx(ke,{icon:Nv}),v.jsxs("p",{children:['No results found for "',n,'"']}),v.jsx("p",{className:"no-results-hint",children:"Try searching for a street address, business name, or landmark"})]})]})]})]})},Us=[{id:"lawn-restoration",name:"Lawn Restoration",color:"#008000",icon:TP},{id:"sidewalk-repair",name:"Sidewalk Repair",color:"#808080",icon:IP},{id:"homeless-outreach",name:"Homeless Outreach",color:"#FFA500",icon:bP},{id:"legacy-sponsored",name:"Legacy Sponsored Block",color:"#FFD700",icon:EP},{id:"lifestyle-lottery",name:"Lifestyle Lottery Winner",color:"#800080",icon:UP},{id:"neighborhood-history",name:"Neighborhood History",color:"#0000FF",icon:kP},{id:"home-for-sale",name:"Home For Sale",color:"#008080",icon:RP},{id:"overnight-patrol",name:"Overnight Patrol",color:"#000080",icon:FP},{id:"vacant-home-cleanup",name:"Vacant Home Cleanup",color:"#800000",icon:jP},{id:"trash-debris",name:"Trash or Debris Dump Site",color:"#000000",icon:AP},{id:"overgrown-vegetation",name:"Overgrown Bushes or Trees",color:"#228B22",icon:_P}];var Ov={};/**
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
 */const vE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[h],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new $P;const m=s<<2|a>>4;if(r.push(m),c!==64){const E=a<<4&240|c>>2;if(r.push(E),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $P extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WP=function(t){const e=vE(t);return _E.encodeByteArray(e,!0)},Qu=function(t){return WP(t).replace(/\./g,"")},wE=function(t){try{return _E.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qP=()=>HP().__FIREBASE_DEFAULTS__,GP=()=>{if(typeof process>"u"||typeof Ov>"u")return;const t=Ov.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wE(t[1]);return e&&JSON.parse(e)},Lc=()=>{try{return qP()||GP()||KP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EE=t=>{var e,n;return(n=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TE=t=>{const e=EE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},SE=()=>{var t;return(t=Lc())===null||t===void 0?void 0:t.config},IE=t=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class QP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function AE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qu(JSON.stringify(n)),Qu(JSON.stringify(o)),""].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function XP(){var t;const e=(t=Lc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ZP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tR(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nR(){return!XP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rR(){try{return typeof indexedDB=="object"}catch{return!1}}function iR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const sR="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sR,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,r)}}function oR(t,e){return t.replace(aR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aR=/\{\$([^}]+)}/g;function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lv(s)&&Lv(o)){if(!Yu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uR(t,e){const n=new cR(t,e);return n.subscribe.bind(n)}class cR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qd),i.error===void 0&&(i.error=qd),i.complete===void 0&&(i.complete=qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qd(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fi="[DEFAULT]";/**
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
 */class hR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pR(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fR(t){return t===fi?void 0:t}function pR(t){return t.instantiationMode==="EAGER"}/**
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
 */class mR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const gR={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},yR=oe.INFO,vR={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},_R=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tm{constructor(e){this.name=e,this._logLevel=yR,this._logHandler=_R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const wR=(t,e)=>e.some(n=>t instanceof n);let Dv,Mv;function ER(){return Dv||(Dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TR(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CE=new WeakMap,Sf=new WeakMap,kE=new WeakMap,Gd=new WeakMap,nm=new WeakMap;function SR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CE.set(n,t)}).catch(()=>{}),nm.set(e,t),e}function IR(t){if(Sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sf.set(t,e)}let If={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AR(t){If=t(If)}function CR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return kE.set(r,e.sort?e.sort():[e]),Fr(r)}:TR().includes(t)?function(...e){return t.apply(Kd(this),e),Fr(CE.get(this))}:function(...e){return Fr(t.apply(Kd(this),e))}}function kR(t){return typeof t=="function"?CR(t):(t instanceof IDBTransaction&&IR(t),wR(t,ER())?new Proxy(t,If):t)}function Fr(t){if(t instanceof IDBRequest)return SR(t);if(Gd.has(t))return Gd.get(t);const e=kR(t);return e!==t&&(Gd.set(t,e),nm.set(e,t)),e}const Kd=t=>nm.get(t);function PR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Fr(o.result),u.oldVersion,u.newVersion,Fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const RR=["get","getKey","getAll","getAllKeys","count"],xR=["put","add","delete","clear"],Qd=new Map;function Vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Qd.set(e,s),s}AR(t=>({...t,get:(e,n,r)=>Vv(e,n)||t.get(e,n,r),has:(e,n)=>!!Vv(e,n)||t.has(e,n)}));/**
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
 */class bR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Af="@firebase/app",Fv="0.10.13";/**
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
 */const sr=new tm("@firebase/app"),OR="@firebase/app-compat",LR="@firebase/analytics-compat",DR="@firebase/analytics",MR="@firebase/app-check-compat",VR="@firebase/app-check",FR="@firebase/auth",jR="@firebase/auth-compat",UR="@firebase/database",zR="@firebase/data-connect",BR="@firebase/database-compat",$R="@firebase/functions",WR="@firebase/functions-compat",HR="@firebase/installations",qR="@firebase/installations-compat",GR="@firebase/messaging",KR="@firebase/messaging-compat",QR="@firebase/performance",YR="@firebase/performance-compat",XR="@firebase/remote-config",JR="@firebase/remote-config-compat",ZR="@firebase/storage",ex="@firebase/storage-compat",tx="@firebase/firestore",nx="@firebase/vertexai-preview",rx="@firebase/firestore-compat",ix="firebase",sx="10.14.1";/**
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
 */const Cf="[DEFAULT]",ox={[Af]:"fire-core",[OR]:"fire-core-compat",[DR]:"fire-analytics",[LR]:"fire-analytics-compat",[VR]:"fire-app-check",[MR]:"fire-app-check-compat",[FR]:"fire-auth",[jR]:"fire-auth-compat",[UR]:"fire-rtdb",[zR]:"fire-data-connect",[BR]:"fire-rtdb-compat",[$R]:"fire-fn",[WR]:"fire-fn-compat",[HR]:"fire-iid",[qR]:"fire-iid-compat",[GR]:"fire-fcm",[KR]:"fire-fcm-compat",[QR]:"fire-perf",[YR]:"fire-perf-compat",[XR]:"fire-rc",[JR]:"fire-rc-compat",[ZR]:"fire-gcs",[ex]:"fire-gcs-compat",[tx]:"fire-fst",[rx]:"fire-fst-compat",[nx]:"fire-vertex","fire-js":"fire-js",[ix]:"fire-js-all"};/**
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
 */const Xu=new Map,ax=new Map,kf=new Map;function jv(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oi(t){const e=t.name;if(kf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;kf.set(e,t);for(const n of Xu.values())jv(n,t);for(const n of ax.values())jv(n,t);return!0}function Dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
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
 */const lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Wa("app","Firebase",lx);/**
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
 */class ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const zi=sx;function PE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jr.create("bad-app-name",{appName:String(i)});if(n||(n=SE()),!n)throw jr.create("no-options");const s=Xu.get(i);if(s){if(Yu(n,s.options)&&Yu(r,s.config))return s;throw jr.create("duplicate-app",{appName:i})}const o=new mR(i);for(const u of kf.values())o.addComponent(u);const a=new ux(n,r,o);return Xu.set(i,a),a}function rm(t=Cf){const e=Xu.get(t);if(!e&&t===Cf&&SE())return PE();if(!e)throw jr.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=ox[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Oi(new qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cx="firebase-heartbeat-database",dx=1,Aa="firebase-heartbeat-store";let Yd=null;function RE(){return Yd||(Yd=PR(cx,dx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Aa)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),Yd}async function hx(t){try{const n=(await RE()).transaction(Aa),r=await n.objectStore(Aa).get(xE(t));return await n.done,r}catch(e){if(e instanceof Vn)sr.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Uv(t,e){try{const r=(await RE()).transaction(Aa,"readwrite");await r.objectStore(Aa).put(e,xE(t)),await r.done}catch(n){if(n instanceof Vn)sr.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fx=1024,px=30*24*60*60*1e3;class mx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=px}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zv(),{heartbeatsToSend:r,unsentEntries:i}=gx(this._heartbeatsCache.heartbeats),s=Qu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sr.warn(n),""}}}function zv(){return new Date().toISOString().substring(0,10)}function gx(t,e=fx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rR()?iR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bv(t){return Qu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vx(t){Oi(new qr("platform-logger",e=>new bR(e),"PRIVATE")),Oi(new qr("heartbeat",e=>new mx(e),"PRIVATE")),Rn(Af,Fv,t),Rn(Af,Fv,"esm2017"),Rn("fire-js","")}vx("");function im(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _x=bE,NE=new Wa("auth","Firebase",bE());/**
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
 */const Ju=new tm("@firebase/auth");function wx(t,...e){Ju.logLevel<=oe.WARN&&Ju.warn(`Auth (${zi}): ${t}`,...e)}function du(t,...e){Ju.logLevel<=oe.ERROR&&Ju.error(`Auth (${zi}): ${t}`,...e)}/**
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
 */function _n(t,...e){throw sm(t,...e)}function xn(t,...e){return sm(t,...e)}function OE(t,e,n){const r=Object.assign(Object.assign({},_x()),{[e]:n});return new Wa("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return OE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NE.create(t,...e)}function X(t,e,...n){if(!t)throw sm(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw du(e),new Error(e)}function or(t,e){t||qn(e)}/**
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
 */function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ex(){return $v()==="http:"||$v()==="https:"}function $v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ex()||ZP()||"connection"in navigator)?navigator.onLine:!0}function Sx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=YP()||eR()}get(){return Tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function om(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ix={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ax=new qa(3e4,6e4);function Zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ei(t,e,n,r,i={}){return DE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ha(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return JP()||(c.referrerPolicy="no-referrer"),LE.fetch()(ME(t,t.config.apiHost,n,a),c)})}async function DE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ix),e);try{const i=new kx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $l(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $l(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw OE(t,h,c);_n(t,h)}}catch(i){if(i instanceof Vn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function Ga(t,e,n,r,i={}){const s=await ei(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ME(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?om(t.config,i):`${t.config.apiScheme}://${i}`}function Cx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),Ax.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xn(t,e,r);return i.customData._tokenResponse=n,i}function Wv(t){return t!==void 0&&t.enterprise!==void 0}class Px{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Cx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rx(t,e){return ei(t,"GET","/v2/recaptchaConfig",Zr(t,e))}/**
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
 */async function xx(t,e){return ei(t,"POST","/v1/accounts:delete",e)}async function VE(t,e){return ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bx(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=am(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zo(Xd(i.auth_time)),issuedAtTime:Zo(Xd(i.iat)),expirationTime:Zo(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xd(t){return Number(t)*1e3}function am(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const i=wE(n);return i?JSON.parse(i):(du("Failed to decode base64 JWT payload"),null)}catch(i){return du("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hv(t){const e=am(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&Nx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zo(this.lastLoginAt),this.creationTime=Zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ca(t,VE(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FE(s.providerUserInfo):[],a=Dx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Lx(t){const e=lt(t);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FE(t){return t.map(e=>{var{providerId:n}=e,r=im(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Mx(t,e){const n=await DE(t,{},async()=>{const r=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ME(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vx(t,e){return ei(t,"POST","/v2/accounts:revokeToken",Zr(t,e))}/**
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
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Hv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ps;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
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
 */function yr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=im(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bx(this,e)}reload(){return Lx(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Ca(this,xx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:x,isAnonymous:O,providerData:V,stsTokenManager:T}=n;X(S&&T,e,"internal-error");const g=Ps.fromJSON(this.name,T);X(typeof S=="string",e,"internal-error"),yr(f,e.name),yr(m,e.name),X(typeof x=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),yr(E,e.name),yr(I,e.name),yr(k,e.name),yr(R,e.name),yr(_,e.name),yr(y,e.name);const A=new Gn({uid:S,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:O,photoURL:I,phoneNumber:E,tenantId:k,stsTokenManager:g,createdAt:_,lastLoginAt:y});return V&&Array.isArray(V)&&(A.providerData=V.map(C=>Object.assign({},C))),R&&(A._redirectEventId=R),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ps;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?FE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ps;a.updateFromIdToken(r);const u=new Gn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Rf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const qv=new Map;function Kn(t){or(t instanceof Function,"Expected a class definition");let e=qv.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qv.set(t,e),e)}/**
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
 */class jE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jE.type="NONE";const Gv=jE;/**
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
 */function hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(Kn(Gv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kn(Gv);const o=hu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Gn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Rs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Rs(s,e,r))}}/**
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
 */function Kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HE(e))return"Blackberry";if(qE(e))return"Webos";if(zE(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if(WE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UE(t=Tt()){return/firefox\//i.test(t)}function zE(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(t=Tt()){return/crios\//i.test(t)}function $E(t=Tt()){return/iemobile/i.test(t)}function WE(t=Tt()){return/android/i.test(t)}function HE(t=Tt()){return/blackberry/i.test(t)}function qE(t=Tt()){return/webos/i.test(t)}function lm(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fx(t=Tt()){var e;return lm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jx(){return tR()&&document.documentMode===10}function GE(t=Tt()){return lm(t)||WE(t)||qE(t)||HE(t)||/windows phone/i.test(t)||$E(t)}/**
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
 */function KE(t,e=[]){let n;switch(t){case"Browser":n=Kv(Tt());break;case"Worker":n=`${Kv(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}/**
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
 */class Ux{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zx(t,e={}){return ei(t,"GET","/v2/passwordPolicy",Zr(t,e))}/**
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
 */const Bx=6;class $x{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Bx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Wx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new Ux(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await VE(this,{idToken:e}),r=await Gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(bn(this));const n=e?lt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zx(this),n=new $x(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ti(t){return lt(t)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=uR(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hx(t){Mc=t}function QE(t){return Mc.loadJS(t)}function qx(){return Mc.recaptchaEnterpriseScript}function Gx(){return Mc.gapiScript}function Kx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qx="recaptcha-enterprise",Yx="NO_RECAPTCHA";class Xx{constructor(e){this.type=Qx,this.auth=ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Rx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Px(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Wv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Yx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Wv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qx();u.length!==0&&(u+=a),QE(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yv(t,e,n,r=!1){const i=new Xx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Jx(t,e){const n=Dc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yu(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function Zx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eb(t,e,n){const r=ti(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=YE(e),{host:o,port:a}=tb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),nb()}function YE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tb(t){const e=YE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xv(o)}}}function Xv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class um{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function rb(t,e){return ei(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ib(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",Zr(t,e))}/**
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
 */async function sb(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}async function ob(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",Zr(t,e))}/**
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
 */class ka extends um{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,n,"signInWithPassword",ib);case"emailLink":return sb(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xf(e,r,"signUpPassword",rb);case"emailLink":return ob(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",Zr(t,e))}/**
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
 */const ab="http://localhost";class Li extends um{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=im(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ha(n)}return e}}/**
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
 */function lb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ub(t){const e=Vo(Fo(t)).link,n=e?Vo(Fo(e)).deep_link_id:null,r=Vo(Fo(t)).deep_link_id;return(r?Vo(Fo(r)).link:null)||r||n||e||t}class cm{constructor(e){var n,r,i,s,o,a;const u=Vo(Fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=lb((i=u.mode)!==null&&i!==void 0?i:null);X(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ub(e);try{return new cm(n)}catch{return null}}}/**
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
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cm.parseLink(n);return X(r,"argument-error"),ka._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class XE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends XE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tr extends Ka{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
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
 */class Sr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
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
 */class Ir extends Ka{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
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
 */class Ar extends Ka{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.TWITTER_SIGN_IN_METHOD="twitter.com";Ar.PROVIDER_ID="twitter.com";/**
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
 */async function JE(t,e){return Ga(t,"POST","/v1/accounts:signUp",Zr(t,e))}/**
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
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gn._fromIdTokenResponse(e,r,i),o=Jv(r);return new ar({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jv(r);return new ar({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function cb(t){var e;if(fn(t.app))return Promise.reject(bn(t));const n=ti(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ar({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await JE(n,{returnSecureToken:!0}),i=await ar._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ec extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ec(e,n,r,i)}}function ZE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(t,s,e,r):s})}async function db(t,e,n=!1){const r=await Ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ar._forOperation(t,"link",r)}/**
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
 */async function hb(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await Ca(t,ZE(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=am(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),ar._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
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
 */async function eT(t,e,n=!1){if(fn(t.app))return Promise.reject(bn(t));const r="signIn",i=await ZE(t,r,e),s=await ar._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fb(t,e){return eT(ti(t),e)}/**
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
 */async function tT(t){const e=ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pb(t,e,n){if(fn(t.app))return Promise.reject(bn(t));const r=ti(t),o=await xf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tT(t),u}),a=await ar._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mb(t,e,n){return fn(t.app)?Promise.reject(bn(t)):fb(lt(t),eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tT(t),r})}function gb(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function yb(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function vb(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function _b(t){return lt(t).signOut()}const tc="__sak";/**
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
 */class nT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wb=1e3,Eb=10;class rT extends nT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rT.type="LOCAL";const Tb=rT;/**
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
 */class iT extends nT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iT.type="SESSION";const sT=iT;/**
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
 */function Sb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await Sb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
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
 */function dm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ib{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=dm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function Ab(t){Nn().location.href=t}/**
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
 */function oT(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function Cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pb(){return oT()?self:null}/**
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
 */const aT="firebaseLocalStorageDb",Rb=1,nc="firebaseLocalStorage",lT="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fc(t,e){return t.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function xb(){const t=indexedDB.deleteDatabase(aT);return new Qa(t).toPromise()}function bf(){const t=indexedDB.open(aT,Rb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nc,{keyPath:lT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nc)?e(r):(r.close(),await xb(),e(await bf()))})})}async function Zv(t,e,n){const r=Fc(t,!0).put({[lT]:e,value:n});return new Qa(r).toPromise()}async function bb(t,e){const n=Fc(t,!1).get(e),r=await new Qa(n).toPromise();return r===void 0?null:r.value}function e_(t,e){const n=Fc(t,!0).delete(e);return new Qa(n).toPromise()}const Nb=800,Ob=3;class uT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(Pb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cb(),!this.activeServiceWorker)return;this.sender=new Ib(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bf();return await Zv(e,tc,"1"),await e_(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fc(i,!1).getAll();return new Qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uT.type="LOCAL";const Lb=uT;new qa(3e4,6e4);/**
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
 */function Db(t,e){return e?Kn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hm extends um{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mb(t){return eT(t.auth,new hm(t),t.bypassAuthState)}function Vb(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),hb(n,new hm(t),t.bypassAuthState)}async function Fb(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),db(n,new hm(t),t.bypassAuthState)}/**
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
 */class cT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mb;case"linkViaPopup":case"linkViaRedirect":return Fb;case"reauthViaPopup":case"reauthViaRedirect":return Vb;default:_n(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jb=new qa(2e3,1e4);class _s extends cT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=dm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jb.get())};e()}}_s.currentPopupAction=null;/**
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
 */const Ub="pendingRedirect",fu=new Map;class zb extends cT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await Bb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bb(t,e){const n=Hb(e),r=Wb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $b(t,e){fu.set(t._key(),e)}function Wb(t){return Kn(t._redirectPersistence)}function Hb(t){return hu(Ub,t.config.apiKey,t.name)}async function qb(t,e,n=!1){if(fn(t.app))return Promise.reject(bn(t));const r=ti(t),i=Db(r,e),o=await new zb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gb=10*60*1e3;class Kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dT(t);default:return!1}}/**
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
 */async function Yb(t,e={}){return ei(t,"GET","/v1/projects",e)}/**
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
 */const Xb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jb=/^https?/;async function Zb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yb(t);for(const n of e)try{if(eN(n))return}catch{}_n(t,"unauthorized-domain")}function eN(t){const e=Pf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jb.test(n))return!1;if(Xb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tN=new qa(3e4,6e4);function n_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nN(t){return new Promise((e,n)=>{var r,i,s;function o(){n_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n_(),n(xn(t,"network-request-failed"))},timeout:tN.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=Kx("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},QE(`${Gx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw pu=null,e})}let pu=null;function rN(t){return pu=pu||nN(t),pu}/**
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
 */const iN=new qa(5e3,15e3),sN="__/auth/iframe",oN="emulator/auth/iframe",aN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?om(e,oN):`https://${t.config.authDomain}/${sN}`,r={apiKey:e.apiKey,appName:t.name,v:zi},i=lN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ha(r).slice(1)}`}async function cN(t){const e=await rN(t),n=Nn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:uN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},iN.get());function u(){Nn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const dN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hN=500,fN=600,pN="_blank",mN="http://localhost";class r_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gN(t,e,n,r=hN,i=fN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},dN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Tt().toLowerCase();n&&(a=BE(c)?pN:n),UE(c)&&(e=e||mN,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[E,I])=>`${m}${E}=${I},`,"");if(Fx(c)&&a!=="_self")return yN(e||"",a),new r_(null);const f=window.open(e||"",a,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new r_(f)}function yN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vN="__/auth/handler",_N="emulator/auth/handler",wN=encodeURIComponent("fac");async function i_(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(e instanceof XE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ka){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${wN}=${encodeURIComponent(u)}`:"";return`${EN(t)}?${Ha(a).slice(1)}${c}`}function EN({config:t}){return t.emulator?om(t,_N):`https://${t.authDomain}/${vN}`}/**
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
 */const Jd="webStorageSupport";class TN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sT,this._completeRedirectFn=qb,this._overrideRedirectResult=$b}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await i_(e,n,r,Pf(),i);return gN(e,o,dm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i_(e,n,r,Pf(),i);return Ab(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cN(e),r=new Kb(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jd];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||zE()||lm()}}const SN=TN;var s_="@firebase/auth",o_="1.7.9";/**
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
 */class IN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CN(t){Oi(new qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KE(t)},c=new Wx(r,i,s,u);return Zx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oi(new qr("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new IN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(s_,o_,AN(t)),Rn(s_,o_,"esm2017")}/**
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
 */const kN=5*60,PN=IE("authIdTokenMaxAge")||kN;let a_=null;const RN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PN)return;const i=n==null?void 0:n.token;a_!==i&&(a_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fm(t=rm()){const e=Dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jx(t,{popupRedirectResolver:SN,persistence:[Lb,Tb,sT]}),r=IE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RN(s.toString());yb(n,o,()=>o(n.currentUser)),gb(n,a=>o(a))}}const i=EE("auth");return i&&eb(n,`http://${i}`),n}function xN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Hx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CN("Browser");var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,hT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function A(){}A.prototype=g.prototype,T.D=g.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(C,b,N){for(var P=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)P[Y-2]=arguments[Y];return g.prototype[b].apply(C,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,A){A||(A=0);var C=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)C[b]=g.charCodeAt(A++)|g.charCodeAt(A++)<<8|g.charCodeAt(A++)<<16|g.charCodeAt(A++)<<24;else for(b=0;16>b;++b)C[b]=g[A++]|g[A++]<<8|g[A++]<<16|g[A++]<<24;g=T.g[0],A=T.g[1],b=T.g[2];var N=T.g[3],P=g+(N^A&(b^N))+C[0]+3614090360&4294967295;g=A+(P<<7&4294967295|P>>>25),P=N+(b^g&(A^b))+C[1]+3905402710&4294967295,N=g+(P<<12&4294967295|P>>>20),P=b+(A^N&(g^A))+C[2]+606105819&4294967295,b=N+(P<<17&4294967295|P>>>15),P=A+(g^b&(N^g))+C[3]+3250441966&4294967295,A=b+(P<<22&4294967295|P>>>10),P=g+(N^A&(b^N))+C[4]+4118548399&4294967295,g=A+(P<<7&4294967295|P>>>25),P=N+(b^g&(A^b))+C[5]+1200080426&4294967295,N=g+(P<<12&4294967295|P>>>20),P=b+(A^N&(g^A))+C[6]+2821735955&4294967295,b=N+(P<<17&4294967295|P>>>15),P=A+(g^b&(N^g))+C[7]+4249261313&4294967295,A=b+(P<<22&4294967295|P>>>10),P=g+(N^A&(b^N))+C[8]+1770035416&4294967295,g=A+(P<<7&4294967295|P>>>25),P=N+(b^g&(A^b))+C[9]+2336552879&4294967295,N=g+(P<<12&4294967295|P>>>20),P=b+(A^N&(g^A))+C[10]+4294925233&4294967295,b=N+(P<<17&4294967295|P>>>15),P=A+(g^b&(N^g))+C[11]+2304563134&4294967295,A=b+(P<<22&4294967295|P>>>10),P=g+(N^A&(b^N))+C[12]+1804603682&4294967295,g=A+(P<<7&4294967295|P>>>25),P=N+(b^g&(A^b))+C[13]+4254626195&4294967295,N=g+(P<<12&4294967295|P>>>20),P=b+(A^N&(g^A))+C[14]+2792965006&4294967295,b=N+(P<<17&4294967295|P>>>15),P=A+(g^b&(N^g))+C[15]+1236535329&4294967295,A=b+(P<<22&4294967295|P>>>10),P=g+(b^N&(A^b))+C[1]+4129170786&4294967295,g=A+(P<<5&4294967295|P>>>27),P=N+(A^b&(g^A))+C[6]+3225465664&4294967295,N=g+(P<<9&4294967295|P>>>23),P=b+(g^A&(N^g))+C[11]+643717713&4294967295,b=N+(P<<14&4294967295|P>>>18),P=A+(N^g&(b^N))+C[0]+3921069994&4294967295,A=b+(P<<20&4294967295|P>>>12),P=g+(b^N&(A^b))+C[5]+3593408605&4294967295,g=A+(P<<5&4294967295|P>>>27),P=N+(A^b&(g^A))+C[10]+38016083&4294967295,N=g+(P<<9&4294967295|P>>>23),P=b+(g^A&(N^g))+C[15]+3634488961&4294967295,b=N+(P<<14&4294967295|P>>>18),P=A+(N^g&(b^N))+C[4]+3889429448&4294967295,A=b+(P<<20&4294967295|P>>>12),P=g+(b^N&(A^b))+C[9]+568446438&4294967295,g=A+(P<<5&4294967295|P>>>27),P=N+(A^b&(g^A))+C[14]+3275163606&4294967295,N=g+(P<<9&4294967295|P>>>23),P=b+(g^A&(N^g))+C[3]+4107603335&4294967295,b=N+(P<<14&4294967295|P>>>18),P=A+(N^g&(b^N))+C[8]+1163531501&4294967295,A=b+(P<<20&4294967295|P>>>12),P=g+(b^N&(A^b))+C[13]+2850285829&4294967295,g=A+(P<<5&4294967295|P>>>27),P=N+(A^b&(g^A))+C[2]+4243563512&4294967295,N=g+(P<<9&4294967295|P>>>23),P=b+(g^A&(N^g))+C[7]+1735328473&4294967295,b=N+(P<<14&4294967295|P>>>18),P=A+(N^g&(b^N))+C[12]+2368359562&4294967295,A=b+(P<<20&4294967295|P>>>12),P=g+(A^b^N)+C[5]+4294588738&4294967295,g=A+(P<<4&4294967295|P>>>28),P=N+(g^A^b)+C[8]+2272392833&4294967295,N=g+(P<<11&4294967295|P>>>21),P=b+(N^g^A)+C[11]+1839030562&4294967295,b=N+(P<<16&4294967295|P>>>16),P=A+(b^N^g)+C[14]+4259657740&4294967295,A=b+(P<<23&4294967295|P>>>9),P=g+(A^b^N)+C[1]+2763975236&4294967295,g=A+(P<<4&4294967295|P>>>28),P=N+(g^A^b)+C[4]+1272893353&4294967295,N=g+(P<<11&4294967295|P>>>21),P=b+(N^g^A)+C[7]+4139469664&4294967295,b=N+(P<<16&4294967295|P>>>16),P=A+(b^N^g)+C[10]+3200236656&4294967295,A=b+(P<<23&4294967295|P>>>9),P=g+(A^b^N)+C[13]+681279174&4294967295,g=A+(P<<4&4294967295|P>>>28),P=N+(g^A^b)+C[0]+3936430074&4294967295,N=g+(P<<11&4294967295|P>>>21),P=b+(N^g^A)+C[3]+3572445317&4294967295,b=N+(P<<16&4294967295|P>>>16),P=A+(b^N^g)+C[6]+76029189&4294967295,A=b+(P<<23&4294967295|P>>>9),P=g+(A^b^N)+C[9]+3654602809&4294967295,g=A+(P<<4&4294967295|P>>>28),P=N+(g^A^b)+C[12]+3873151461&4294967295,N=g+(P<<11&4294967295|P>>>21),P=b+(N^g^A)+C[15]+530742520&4294967295,b=N+(P<<16&4294967295|P>>>16),P=A+(b^N^g)+C[2]+3299628645&4294967295,A=b+(P<<23&4294967295|P>>>9),P=g+(b^(A|~N))+C[0]+4096336452&4294967295,g=A+(P<<6&4294967295|P>>>26),P=N+(A^(g|~b))+C[7]+1126891415&4294967295,N=g+(P<<10&4294967295|P>>>22),P=b+(g^(N|~A))+C[14]+2878612391&4294967295,b=N+(P<<15&4294967295|P>>>17),P=A+(N^(b|~g))+C[5]+4237533241&4294967295,A=b+(P<<21&4294967295|P>>>11),P=g+(b^(A|~N))+C[12]+1700485571&4294967295,g=A+(P<<6&4294967295|P>>>26),P=N+(A^(g|~b))+C[3]+2399980690&4294967295,N=g+(P<<10&4294967295|P>>>22),P=b+(g^(N|~A))+C[10]+4293915773&4294967295,b=N+(P<<15&4294967295|P>>>17),P=A+(N^(b|~g))+C[1]+2240044497&4294967295,A=b+(P<<21&4294967295|P>>>11),P=g+(b^(A|~N))+C[8]+1873313359&4294967295,g=A+(P<<6&4294967295|P>>>26),P=N+(A^(g|~b))+C[15]+4264355552&4294967295,N=g+(P<<10&4294967295|P>>>22),P=b+(g^(N|~A))+C[6]+2734768916&4294967295,b=N+(P<<15&4294967295|P>>>17),P=A+(N^(b|~g))+C[13]+1309151649&4294967295,A=b+(P<<21&4294967295|P>>>11),P=g+(b^(A|~N))+C[4]+4149444226&4294967295,g=A+(P<<6&4294967295|P>>>26),P=N+(A^(g|~b))+C[11]+3174756917&4294967295,N=g+(P<<10&4294967295|P>>>22),P=b+(g^(N|~A))+C[2]+718787259&4294967295,b=N+(P<<15&4294967295|P>>>17),P=A+(N^(b|~g))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var A=g-this.blockSize,C=this.B,b=this.h,N=0;N<g;){if(b==0)for(;N<=A;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<g;)if(C[b++]=T.charCodeAt(N++),b==this.blockSize){i(this,C),b=0;break}}else for(;N<g;)if(C[b++]=T[N++],b==this.blockSize){i(this,C),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var A=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=A&255,A/=256;for(this.u(T),T=Array(16),g=A=0;4>g;++g)for(var C=0;32>C;C+=8)T[A++]=this.g[g]>>>C&255;return T};function s(T,g){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=g(T)}function o(T,g){this.h=g;for(var A=[],C=!0,b=T.length-1;0<=b;b--){var N=T[b]|0;C&&N==g||(A[b]=N,C=!1)}this.g=A}var a={};function u(T){return-128<=T&&128>T?s(T,function(g){return new o([g|0],0>g?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return R(c(-T));for(var g=[],A=1,C=0;T>=A;C++)g[C]=T/A|0,A*=4294967296;return new o(g,0)}function h(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return R(h(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(g,8)),C=f,b=0;b<T.length;b+=8){var N=Math.min(8,T.length-b),P=parseInt(T.substring(b,b+N),g);8>N?(N=c(Math.pow(g,N)),C=C.j(N).add(c(P))):(C=C.j(A),C=C.add(c(P)))}return C}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var T=0,g=1,A=0;A<this.g.length;A++){var C=this.i(A);T+=(0<=C?C:4294967296+C)*g,g*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(k(this))return"-"+R(this).toString(T);for(var g=c(Math.pow(T,6)),A=this,C="";;){var b=x(A,g).g;A=_(A,b.j(g));var N=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=b,I(A))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=_(this,T),k(T)?-1:I(T)?0:1};function R(T){for(var g=T.g.length,A=[],C=0;C<g;C++)A[C]=~T.g[C];return new o(A,~T.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],C=0,b=0;b<=g;b++){var N=C+(this.i(b)&65535)+(T.i(b)&65535),P=(N>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);C=P>>>16,N&=65535,P&=65535,A[b]=P<<16|N}return new o(A,A[A.length-1]&-2147483648?-1:0)};function _(T,g){return T.add(R(g))}t.j=function(T){if(I(this)||I(T))return f;if(k(this))return k(T)?R(this).j(R(T)):R(R(this).j(T));if(k(T))return R(this.j(R(T)));if(0>this.l(E)&&0>T.l(E))return c(this.m()*T.m());for(var g=this.g.length+T.g.length,A=[],C=0;C<2*g;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var b=0;b<T.g.length;b++){var N=this.i(C)>>>16,P=this.i(C)&65535,Y=T.i(b)>>>16,me=T.i(b)&65535;A[2*C+2*b]+=P*me,y(A,2*C+2*b),A[2*C+2*b+1]+=N*me,y(A,2*C+2*b+1),A[2*C+2*b+1]+=P*Y,y(A,2*C+2*b+1),A[2*C+2*b+2]+=N*Y,y(A,2*C+2*b+2)}for(C=0;C<g;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=g;C<2*g;C++)A[C]=0;return new o(A,0)};function y(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function S(T,g){this.g=T,this.h=g}function x(T,g){if(I(g))throw Error("division by zero");if(I(T))return new S(f,f);if(k(T))return g=x(R(T),g),new S(R(g.g),R(g.h));if(k(g))return g=x(T,R(g)),new S(R(g.g),g.h);if(30<T.g.length){if(k(T)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var A=m,C=g;0>=C.l(T);)A=O(A),C=O(C);var b=V(A,1),N=V(C,1);for(C=V(C,2),A=V(A,2);!I(C);){var P=N.add(C);0>=P.l(T)&&(b=b.add(A),N=P),C=V(C,1),A=V(A,1)}return g=_(T,b.j(g)),new S(b,g)}for(b=f;0<=T.l(g);){for(A=Math.max(1,Math.floor(T.m()/g.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(A),P=N.j(g);k(P)||0<P.l(T);)A-=C,N=c(A),P=N.j(g);I(N)&&(N=m),b=b.add(N),T=_(T,P)}return new S(b,T)}t.A=function(T){return x(this,T).h},t.and=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],C=0;C<g;C++)A[C]=this.i(C)&T.i(C);return new o(A,this.h&T.h)},t.or=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],C=0;C<g;C++)A[C]=this.i(C)|T.i(C);return new o(A,this.h|T.h)},t.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),A=[],C=0;C<g;C++)A[C]=this.i(C)^T.i(C);return new o(A,this.h^T.h)};function O(T){for(var g=T.g.length+1,A=[],C=0;C<g;C++)A[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(A,T.h)}function V(T,g){var A=g>>5;g%=32;for(var C=T.g.length-A,b=[],N=0;N<C;N++)b[N]=0<g?T.i(N+A)>>>g|T.i(N+A+1)<<32-g:T.i(N+A);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Si=o}).apply(typeof l_<"u"?l_:typeof self<"u"?self:typeof window<"u"?window:{});var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fT,jo,pT,mu,Nf,mT,gT,yT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wl=="object"&&Wl];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in p))break e;p=p[L]}l=l[l.length-1],w=p[l],d=d(w),d!=w&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,w=!1,L={next:function(){if(!w&&p<l.length){var M=p++;return{value:d(M,l[M]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function E(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function I(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(w,L,M){for(var $=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)$[Te-2]=arguments[Te];return d.prototype[L].apply(w,$)}}function k(l){const d=l.length;if(0<d){const p=Array(d);for(let w=0;w<d;w++)p[w]=l[w];return p}return[]}function R(l,d){for(let p=1;p<arguments.length;p++){const w=arguments[p];if(u(w)){const L=l.length||0,M=w.length||0;l.length=L+M;for(let $=0;$<M;$++)l[L+$]=w[$]}else l.push(w)}}class _{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(l,d,p){for(const w in l)d.call(p,l[w],w,l)}function T(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function g(l){const d={};for(const p in l)d[p]=l[p];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let p,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(p in w)l[p]=w[p];for(let M=0;M<A.length;M++)p=A[M],Object.prototype.hasOwnProperty.call(w,p)&&(l[p]=w[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Y{constructor(){this.h=this.g=null}add(d,p){const w=me.get();w.set(d,p),this.h?this.h.next=w:this.g=w,this.h=w}}var me=new _(()=>new St,l=>l.reset());class St{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,B=!1,Q=new Y,J=()=>{const l=a.Promise.resolve(void 0);ce=()=>{l.then(we)}};var we=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(p){N(p)}var d=me;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}B=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function on(l,d){if(be.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(O){e:{try{x(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:wn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&on.aa.h.call(this)}}I(on,be);var wn={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),Xc=0;function ol(l,d,p,w,L){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!w,this.ha=L,this.key=++Xc,this.da=this.fa=!1}function ni(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ri(l){this.src=l,this.g={},this.h=0}ri.prototype.add=function(l,d,p,w,L){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var $=qi(l,d,w,L);return-1<$?(d=l[$],p||(d.fa=!1)):(d=new ol(d,this.src,M,!!w,L),d.fa=p,l.push(d)),d};function Hi(l,d){var p=d.type;if(p in l.g){var w=l.g[p],L=Array.prototype.indexOf.call(w,d,void 0),M;(M=0<=L)&&Array.prototype.splice.call(w,L,1),M&&(ni(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function qi(l,d,p,w){for(var L=0;L<l.length;++L){var M=l[L];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==w)return L}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),Ki={};function ee(l,d,p,w,L){if(Array.isArray(d)){for(var M=0;M<d.length;M++)ee(l,d[M],p,w,L);return null}return p=an(p),l&&l[bt]?l.K(d,p,c(w)?!!w.capture:!1,L):ae(l,d,p,!1,w,L)}function ae(l,d,p,w,L,M){if(!d)throw Error("Invalid event type");var $=c(L)?!!L.capture:!!L,Te=ct(l);if(Te||(l[Gi]=Te=new ri(l)),p=Te.add(d,p,w,$,M),p.proxy)return p;if(w=le(),p.proxy=w,w.src=l,w.listener=p,l.addEventListener)sn||(L=$),L===void 0&&(L=!1),l.addEventListener(d.toString(),w,L);else if(l.attachEvent)l.attachEvent(ye(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function le(){function l(p){return d.call(l.src,l.listener,p)}const d=Se;return l}function pe(l,d,p,w,L){if(Array.isArray(d))for(var M=0;M<d.length;M++)pe(l,d[M],p,w,L);else w=c(w)?!!w.capture:!!w,p=an(p),l&&l[bt]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],p=qi(M,p,w,L),-1<p&&(ni(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=ct(l))&&(d=l.g[d.toString()],l=-1,d&&(l=qi(d,p,w,L)),(p=-1<l?d[l]:null)&&Ee(p))}function Ee(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[bt])Hi(d.i,l);else{var p=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(p,w,l.capture):d.detachEvent?d.detachEvent(ye(p),w):d.addListener&&d.removeListener&&d.removeListener(w),(p=ct(d))?(Hi(p,l),p.h==0&&(p.src=null,d[Gi]=null)):ni(l)}}}function ye(l){return l in Ki?Ki[l]:Ki[l]="on"+l}function Se(l,d){if(l.da)l=!0;else{d=new on(d,this);var p=l.listener,w=l.ha||l.src;l.fa&&Ee(l),l=p.call(w,d)}return l}function ct(l){return l=l[Gi],l instanceof ri?l:null}var et="__closure_events_fn_"+(1e9*Math.random()>>>0);function an(l){return typeof l=="function"?l:(l[et]||(l[et]=function(d){return l.handleEvent(d)}),l[et])}function ze(){ge.call(this),this.i=new ri(this),this.M=this,this.F=null}I(ze,ge),ze.prototype[bt]=!0,ze.prototype.removeEventListener=function(l,d,p,w){pe(this,l,d,p,w)};function We(l,d){var p,w=l.F;if(w)for(p=[];w;w=w.F)p.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new be(d,l);else if(d instanceof be)d.target=d.target||l;else{var L=d;d=new be(w,l),C(d,L)}if(L=!0,p)for(var M=p.length-1;0<=M;M--){var $=d.g=p[M];L=Fn($,w,!0,d)&&L}if($=d.g=l,L=Fn($,w,!0,d)&&L,L=Fn($,w,!1,d)&&L,p)for(M=0;M<p.length;M++)$=d.g=p[M],L=Fn($,w,!1,d)&&L}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],w=0;w<p.length;w++)ni(p[w]);delete l.g[d],l.h--}}this.F=null},ze.prototype.K=function(l,d,p,w){return this.i.add(String(l),d,!1,p,w)},ze.prototype.L=function(l,d,p,w){return this.i.add(String(l),d,!0,p,w)};function Fn(l,d,p,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,M=0;M<d.length;++M){var $=d[M];if($&&!$.da&&$.capture==p){var Te=$.listener,tt=$.ha||$.src;$.fa&&Hi(l.i,$),L=Te.call(tt,w)!==!1&&L}}return L&&!w.defaultPrevented}function ii(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function jn(l){l.g=ii(()=>{l.g=null,l.i&&(l.i=!1,jn(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class jt extends ge{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:jn(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(l){ge.call(this),this.h=l,this.g={}}I(Nt,ge);var al=[];function ll(l){V(l.g,function(d,p){this.g.hasOwnProperty(p)&&Ee(d)},l),l.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),ll(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jc=a.JSON.stringify,nI=a.JSON.parse,rI=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Zc(){}Zc.prototype.h=null;function tg(l){return l.h||(l.h=l.i())}function ng(){}var ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ed(){be.call(this,"d")}I(ed,be);function td(){be.call(this,"c")}I(td,be);var si={},rg=null;function ul(){return rg=rg||new ze}si.La="serverreachability";function ig(l){be.call(this,si.La,l)}I(ig,be);function lo(l){const d=ul();We(d,new ig(d))}si.STAT_EVENT="statevent";function sg(l,d){be.call(this,si.STAT_EVENT,l),this.stat=d}I(sg,be);function It(l){const d=ul();We(d,new sg(d,l))}si.Ma="timingevent";function og(l,d){be.call(this,si.Ma,l),this.size=d}I(og,be);function uo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function co(){this.g=!0}co.prototype.xa=function(){this.g=!1};function iI(l,d,p,w,L,M){l.info(function(){if(l.g)if(M)for(var $="",Te=M.split("&"),tt=0;tt<Te.length;tt++){var he=Te[tt].split("=");if(1<he.length){var dt=he[0];he=he[1];var ht=dt.split("_");$=2<=ht.length&&ht[1]=="type"?$+(dt+"="+he+"&"):$+(dt+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+p+`
`+$})}function sI(l,d,p,w,L,M,$){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+p+`
`+M+" "+$})}function Qi(l,d,p,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+aI(l,p)+(w?" "+w:"")})}function oI(l,d){l.info(function(){return"TIMEOUT: "+d})}co.prototype.info=function(){};function aI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var w=p[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var M=L[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<L.length;$++)L[$]=""}}}}return Jc(p)}catch{return d}}var cl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ag={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nd;function dl(){}I(dl,Zc),dl.prototype.g=function(){return new XMLHttpRequest},dl.prototype.i=function(){return{}},nd=new dl;function hr(l,d,p,w){this.j=l,this.i=d,this.l=p,this.R=w||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lg}function lg(){this.i=null,this.g="",this.h=!1}var ug={},rd={};function id(l,d,p){l.L=1,l.v=ml(Un(d)),l.m=p,l.P=!0,cg(l,null)}function cg(l,d){l.F=Date.now(),hl(l),l.A=Un(l.v);var p=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Ig(p.i,"t",w),l.C=0,p=l.j.J,l.h=new lg,l.g=Bg(l.j,p?d:null,!l.m),0<l.O&&(l.M=new jt(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(al[0]=L.toString()),L=al);for(var M=0;M<L.length;M++){var $=ee(p,L[M],w||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),lo(),iI(l.i,l.u,l.A,l.l,l.R,l.m)}hr.prototype.ca=function(l){l=l.target;const d=this.M;d&&zn(l)==3?d.j():this.Y(l)},hr.prototype.Y=function(l){try{if(l==this.g)e:{const ht=zn(this.g);var d=this.g.Ba();const Ji=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||bg(this.g)))){this.J||ht!=4||d==7||(d==8||0>=Ji?lo(3):lo(2)),sd(this);var p=this.g.Z();this.X=p;t:if(dg(this)){var w=bg(this.g);l="";var L=w.length,M=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oi(this),ho(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(M&&d==L-1)});w.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,sI(this.i,this.u,this.A,this.l,this.R,ht,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,tt=this.g;if((Te=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Te)){var he=Te;break t}}he=null}if(p=he)Qi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,od(this,p);else{this.o=!1,this.s=3,It(12),oi(this),ho(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<$.length;)if(ln=lI(this,$),ln==rd){ht==4&&(this.s=4,It(14),p=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ug){this.s=4,It(15),Qi(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Qi(this.i,this.l,ln,null),od(this,ln);if(dg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||$.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)Qi(this.i,this.l,$,"[Invalid Chunked Response]"),oi(this),ho(this);else if(0<$.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),hd(dt),dt.M=!0,It(11))}}else Qi(this.i,this.l,$,null),od(this,$);ht==4&&oi(this),this.o&&!this.J&&(ht==4?Fg(this.j,this):(this.o=!1,hl(this)))}else AI(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),oi(this),ho(this)}}}catch{}finally{}};function dg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function lI(l,d){var p=l.C,w=d.indexOf(`
`,p);return w==-1?rd:(p=Number(d.substring(p,w)),isNaN(p)?ug:(w+=1,w+p>d.length?rd:(d=d.slice(w,w+p),l.C=w+p,d)))}hr.prototype.cancel=function(){this.J=!0,oi(this)};function hl(l){l.S=Date.now()+l.I,hg(l,l.I)}function hg(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=uo(m(l.ba,l),d)}function sd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}hr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(oI(this.i,this.A),this.L!=2&&(lo(),It(17)),oi(this),this.s=2,ho(this)):hg(this,this.S-l)};function ho(l){l.j.G==0||l.J||Fg(l.j,l)}function oi(l){sd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ll(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function od(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||ad(p.h,l))){if(!l.K&&ad(p.h,l)&&p.G==3){try{var w=p.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)El(p),_l(p);else break e;dd(p),It(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=uo(m(p.Za,p),6e3));if(1>=mg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else li(p,11)}else if((l.K||p.g==l)&&El(p),!y(d))for(L=p.Da.g.parse(d),d=0;d<L.length;d++){let he=L[d];if(p.T=he[0],he=he[1],p.G==2)if(he[0]=="c"){p.K=he[1],p.ia=he[2];const dt=he[3];dt!=null&&(p.la=dt,p.j.info("VER="+p.la));const ht=he[4];ht!=null&&(p.Aa=ht,p.j.info("SVER="+p.Aa));const Ji=he[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(w=1.5*Ji,p.L=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const ln=l.g;if(ln){const Sl=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sl){var M=w.h;M.g||Sl.indexOf("spdy")==-1&&Sl.indexOf("quic")==-1&&Sl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ld(M,M.h),M.h=null))}if(w.D){const fd=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;fd&&(w.ya=fd,Ae(w.I,w.D,fd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),w=p;var $=l;if(w.qa=zg(w,w.J?w.ia:null,w.W),$.K){gg(w.h,$);var Te=$,tt=w.L;tt&&(Te.I=tt),Te.B&&(sd(Te),hl(Te)),w.g=$}else Mg(w);0<p.i.length&&wl(p)}else he[0]!="stop"&&he[0]!="close"||li(p,7);else p.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?li(p,7):cd(p):he[0]!="noop"&&p.l&&p.l.ta(he),p.v=0)}}lo(4)}catch{}}var uI=class{constructor(l,d){this.g=l,this.map=d}};function fg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function mg(l){return l.h?1:l.g?l.g.size:0}function ad(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function ld(l,d){l.g?l.g.add(d):l.h=d}function gg(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}fg.prototype.cancel=function(){if(this.i=yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function yg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return k(l.i)}function cI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,w=0;w<p;w++)d.push(l[w]);return d}d=[],p=0;for(w in l)d[p++]=l[w];return d}function dI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const w in l)d[p++]=w;return d}}}function vg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=dI(l),w=cI(l),L=w.length,M=0;M<L;M++)d.call(void 0,w[M],p&&p[M],l)}var _g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var w=l[p].indexOf("="),L=null;if(0<=w){var M=l[p].substring(0,w);L=l[p].substring(w+1)}else M=l[p];d(M,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ai(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ai){this.h=l.h,fl(this,l.j),this.o=l.o,this.g=l.g,pl(this,l.s),this.l=l.l;var d=l.i,p=new mo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),wg(this,p),this.m=l.m}else l&&(d=String(l).match(_g))?(this.h=!1,fl(this,d[1]||"",!0),this.o=fo(d[2]||""),this.g=fo(d[3]||"",!0),pl(this,d[4]),this.l=fo(d[5]||"",!0),wg(this,d[6]||"",!0),this.m=fo(d[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}ai.prototype.toString=function(){var l=[],d=this.j;d&&l.push(po(d,Eg,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(po(d,Eg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(po(p,p.charAt(0)=="/"?mI:pI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",po(p,yI)),l.join("")};function Un(l){return new ai(l)}function fl(l,d,p){l.j=p?fo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function pl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function wg(l,d,p){d instanceof mo?(l.i=d,vI(l.i,l.h)):(p||(d=po(d,gI)),l.i=new mo(d,l.h))}function Ae(l,d,p){l.i.set(d,p)}function ml(l){return Ae(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function fo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function po(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,fI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Eg=/[#\/\?@]/g,pI=/[#\?:]/g,mI=/[#\?]/g,gI=/[#\?@]/g,yI=/#/g;function mo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function fr(l){l.g||(l.g=new Map,l.h=0,l.i&&hI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=mo.prototype,t.add=function(l,d){fr(this),this.i=null,l=Yi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Tg(l,d){fr(l),d=Yi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Sg(l,d){return fr(l),d=Yi(l,d),l.g.has(d)}t.forEach=function(l,d){fr(this),this.g.forEach(function(p,w){p.forEach(function(L){l.call(d,L,w,this)},this)},this)},t.na=function(){fr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let w=0;w<d.length;w++){const L=l[w];for(let M=0;M<L.length;M++)p.push(d[w])}return p},t.V=function(l){fr(this);let d=[];if(typeof l=="string")Sg(this,l)&&(d=d.concat(this.g.get(Yi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return fr(this),this.i=null,l=Yi(this,l),Sg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Ig(l,d,p){Tg(l,d),0<p.length&&(l.i=null,l.g.set(Yi(l,d),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var w=d[p];const M=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var L=M;$[w]!==""&&(L+="="+encodeURIComponent(String($[w]))),l.push(L)}}return this.i=l.join("&")};function Yi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function vI(l,d){d&&!l.j&&(fr(l),l.i=null,l.g.forEach(function(p,w){var L=w.toLowerCase();w!=L&&(Tg(this,w),Ig(this,L,p))},l)),l.j=d}function _I(l,d){const p=new co;if(a.Image){const w=new Image;w.onload=E(pr,p,"TestLoadImage: loaded",!0,d,w),w.onerror=E(pr,p,"TestLoadImage: error",!1,d,w),w.onabort=E(pr,p,"TestLoadImage: abort",!1,d,w),w.ontimeout=E(pr,p,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function wI(l,d){const p=new co,w=new AbortController,L=setTimeout(()=>{w.abort(),pr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(M=>{clearTimeout(L),M.ok?pr(p,"TestPingServer: ok",!0,d):pr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),pr(p,"TestPingServer: error",!1,d)})}function pr(l,d,p,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(p)}catch{}}function EI(){this.g=new rI}function TI(l,d,p){const w=p||"";try{vg(l,function(L,M){let $=L;c(L)&&($=Jc(L)),d.push(w+M+"="+encodeURIComponent($))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function gl(l){this.l=l.Ub||null,this.j=l.eb||!1}I(gl,Zc),gl.prototype.g=function(){return new yl(this.l,this.j)},gl.prototype.i=function(l){return function(){return l}}({});function yl(l,d){ze.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(yl,ze),t=yl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,yo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,yo(this)),this.g&&(this.readyState=3,yo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ag(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ag(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?go(this):yo(this),this.readyState==3&&Ag(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,go(this))},t.Qa=function(l){this.g&&(this.response=l,go(this))},t.ga=function(){this.g&&go(this)};function go(l){l.readyState=4,l.l=null,l.j=null,l.v=null,yo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function yo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Cg(l){let d="";return V(l,function(p,w){d+=w,d+=":",d+=p,d+=`\r
`}),d}function ud(l,d,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=Cg(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ae(l,d,p))}function Me(l){ze.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Me,ze);var SI=/^https?$/i,II=["POST","PUT"];t=Me.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nd.g(),this.v=this.o?tg(this.o):tg(nd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){kg(this,M);return}if(l=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)p.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())p.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(II,d,void 0))||w||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of p)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xg(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){kg(this,M)}};function kg(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Pg(l),vl(l)}function Pg(l){l.A||(l.A=!0,We(l,"complete"),We(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,We(this,"complete"),We(this,"abort"),vl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rg(this):this.bb())},t.bb=function(){Rg(this)};function Rg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||zn(l)!=4||l.Z()!=2)){if(l.u&&zn(l)==4)ii(l.Ea,0,l);else if(We(l,"readystatechange"),zn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var w;if(w=$===0){var L=String(l.D).match(_g)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!SI.test(L?L.toLowerCase():"")}p=w}if(p)We(l,"complete"),We(l,"success");else{l.m=6;try{var M=2<zn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Pg(l)}}finally{vl(l)}}}}function vl(l,d){if(l.g){xg(l);const p=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||We(l,"ready");try{p.onreadystatechange=w}catch{}}}function xg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),nI(d)}};function bg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AI(l){const d={};l=(l.g&&2<=zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(y(l[w]))continue;var p=b(l[w]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[L]||[];d[L]=M,M.push(p)}T(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Ng(l){this.Aa=0,this.i=[],this.j=new co,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vo("baseRetryDelayMs",5e3,l),this.cb=vo("retryDelaySeedMs",1e4,l),this.Wa=vo("forwardChannelMaxRetries",2,l),this.wa=vo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new fg(l&&l.concurrentRequestLimit),this.Da=new EI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ng.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,w){It(0),this.W=l,this.H=d||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.I=zg(this,null,this.W),wl(this)};function cd(l){if(Og(l),l.G==3){var d=l.U++,p=Un(l.I);if(Ae(p,"SID",l.K),Ae(p,"RID",d),Ae(p,"TYPE","terminate"),_o(l,p),d=new hr(l,l.j,d),d.L=2,d.v=ml(Un(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Bg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),hl(d)}Ug(l)}function _l(l){l.g&&(hd(l),l.g.cancel(),l.g=null)}function Og(l){_l(l),l.u&&(a.clearTimeout(l.u),l.u=null),El(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function wl(l){if(!pg(l.h)&&!l.s){l.s=!0;var d=l.Ga;ce||J(),B||(ce(),B=!0),Q.add(d,l),l.B=0}}function CI(l,d){return mg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=uo(m(l.Ga,l,d),jg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new hr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=g(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(L.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Dg(this,L,d),p=Un(this.I),Ae(p,"RID",l),Ae(p,"CVER",22),this.D&&Ae(p,"X-HTTP-Session-Id",this.D),_o(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(Cg(M)))+"&"+d:this.m&&ud(p,this.m,M)),ld(this.h,L),this.Ua&&Ae(p,"TYPE","init"),this.P?(Ae(p,"$req",d),Ae(p,"SID","null"),L.T=!0,id(L,p,null)):id(L,p,d),this.G=2}}else this.G==3&&(l?Lg(this,l):this.i.length==0||pg(this.h)||Lg(this))};function Lg(l,d){var p;d?p=d.l:p=l.U++;const w=Un(l.I);Ae(w,"SID",l.K),Ae(w,"RID",p),Ae(w,"AID",l.T),_o(l,w),l.m&&l.o&&ud(w,l.m,l.o),p=new hr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Dg(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ld(l.h,p),id(p,w,d)}function _o(l,d){l.H&&V(l.H,function(p,w){Ae(d,w,p)}),l.l&&vg({},function(p,w){Ae(d,w,p)})}function Dg(l,d,p){p=Math.min(l.i.length,p);var w=l.l?m(l.l.Na,l.l,l):null;e:{var L=l.i;let M=-1;for(;;){const $=["count="+p];M==-1?0<p?(M=L[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let Te=!0;for(let tt=0;tt<p;tt++){let he=L[tt].g;const dt=L[tt].map;if(he-=M,0>he)M=Math.max(0,L[tt].g-100),Te=!1;else try{TI(dt,$,"req"+he+"_")}catch{w&&w(dt)}}if(Te){w=$.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,w}function Mg(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ce||J(),B||(ce(),B=!0),Q.add(d,l),l.v=0}}function dd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=uo(m(l.Fa,l),jg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Vg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=uo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),_l(this),Vg(this))};function hd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Vg(l){l.g=new hr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Un(l.qa);Ae(d,"RID","rpc"),Ae(d,"SID",l.K),Ae(d,"AID",l.T),Ae(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ae(d,"TO",l.ja),Ae(d,"TYPE","xmlhttp"),_o(l,d),l.m&&l.o&&ud(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ml(Un(d)),p.m=null,p.P=!0,cg(p,l)}t.Za=function(){this.C!=null&&(this.C=null,_l(this),dd(this),It(19))};function El(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Fg(l,d){var p=null;if(l.g==d){El(l),hd(l),l.g=null;var w=2}else if(ad(l.h,d))p=d.D,gg(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;w=ul(),We(w,new og(w,p)),wl(l)}else Mg(l);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&CI(l,d)||w==2&&dd(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),L){case 1:li(l,5);break;case 4:li(l,10);break;case 3:li(l,6);break;default:li(l,2)}}}function jg(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function li(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),w=l.Xa;const L=!w;w=new ai(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fl(w,"https"),ml(w),L?_I(w.toString(),p):wI(w.toString(),p)}else It(2);l.G=0,l.l&&l.l.sa(d),Ug(l),Og(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Ug(l){if(l.G=0,l.ka=[],l.l){const d=yg(l.h);(d.length!=0||l.i.length!=0)&&(R(l.ka,d),R(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function zg(l,d,p){var w=p instanceof ai?Un(p):new ai(p);if(w.g!="")d&&(w.g=d+"."+w.g),pl(w,w.s);else{var L=a.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var M=new ai(null);w&&fl(M,w),d&&(M.g=d),L&&pl(M,L),p&&(M.l=p),w=M}return p=l.D,d=l.ya,p&&d&&Ae(w,p,d),Ae(w,"VER",l.la),_o(l,w),w}function Bg(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Me(new gl({eb:p})):new Me(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $g(){}t=$g.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Tl(){}Tl.prototype.g=function(l,d){return new Ut(l,d)};function Ut(l,d){ze.call(this),this.g=new Ng(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!y(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Xi(this)}I(Ut,ze),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){cd(this.g)},Ut.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Jc(l),l=p);d.i.push(new uI(d.Ya++,l)),d.G==3&&wl(d)},Ut.prototype.N=function(){this.g.l=null,delete this.j,cd(this.g),delete this.g,Ut.aa.N.call(this)};function Wg(l){ed.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}I(Wg,ed);function Hg(){td.call(this),this.status=1}I(Hg,td);function Xi(l){this.g=l}I(Xi,$g),Xi.prototype.ua=function(){We(this.g,"a")},Xi.prototype.ta=function(l){We(this.g,new Wg(l))},Xi.prototype.sa=function(l){We(this.g,new Hg)},Xi.prototype.ra=function(){We(this.g,"b")},Tl.prototype.createWebChannel=Tl.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,yT=function(){return new Tl},gT=function(){return ul()},mT=si,Nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cl.NO_ERROR=0,cl.TIMEOUT=8,cl.HTTP_ERROR=6,mu=cl,ag.COMPLETE="complete",pT=ag,ng.EventType=ao,ao.OPEN="a",ao.CLOSE="b",ao.ERROR="c",ao.MESSAGE="d",ze.prototype.listen=ze.prototype.K,jo=ng,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,fT=Me}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});const u_="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let to="10.14.0";/**
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
 */const Di=new tm("@firebase/firestore");function Po(){return Di.logLevel}function H(t,...e){if(Di.logLevel<=oe.DEBUG){const n=e.map(pm);Di.debug(`Firestore (${to}): ${t}`,...n)}}function lr(t,...e){if(Di.logLevel<=oe.ERROR){const n=e.map(pm);Di.error(`Firestore (${to}): ${t}`,...n)}}function zs(t,...e){if(Di.logLevel<=oe.WARN){const n=e.map(pm);Di.warn(`Firestore (${to}): ${t}`,...n)}}function pm(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: `+t;throw lr(e),new Error(e)}function _e(t,e){t||Z()}function ne(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class NN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ON{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new vT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new yt(e)}}class LN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){_e(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new MN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function FN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ye(0,0))}static max(){return new te(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Pa{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const jN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Pa{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return jN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Fe.fromString(e))}static fromName(e){return new K(Fe.fromString(e).popFirst(5))}static empty(){return new K(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Fe(e.slice()))}}function UN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Gr(i,K.empty(),e)}function zN(t){return new Gr(t.readTime,t.key,-1)}class Gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gr(te.min(),K.empty(),-1)}static max(){return new Gr(te.max(),K.empty(),-1)}}function BN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const $N="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ya(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==$N)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mm.oe=-1;function jc(t){return t==null}function rc(t){return t===0&&1/t==-1/0}function qN(t){return typeof t=="number"&&Number.isInteger(t)&&!rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function no(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hl(this.root,e,this.comparator,!0)}}class Hl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pn{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new pn([])}unionWith(e){let n=new ot(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ET extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ET("Invalid base64 string: "+s):s}}(e);return new ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const GN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(_e(!!t),typeof t=="string"){let e=0;const n=GN.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function gm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ym(t){const e=t.mapValue.fields.__previous_value__;return gm(e)?ym(e):e}function Ra(t){const e=Kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class KN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class xa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ql={mapValue:{}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gm(t)?4:YN(t)?9007199254740991:QN(t)?10:11:Z()}function Dn(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),a=Kr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mi(i.bytesValue).isEqual(Mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?rc(o)===rc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(c_(o)!==c_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Dn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function ba(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(Ra(t),Ra(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mi(s),u=Mi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=fe(a[c],u[c]);if(h!==0)return h}return fe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe(Be(s.latitude),Be(o.latitude));return a!==0?a:fe(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},E=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=fe(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:f_(E,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ql.mapValue&&o===ql.mapValue)return 0;if(s===ql.mapValue)return 1;if(o===ql.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=fe(u[f],h[f]);if(m!==0)return m;const E=$s(a[u[f]],c[h[f]]);if(E!==0)return E}return fe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Kr(t),r=Kr(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function f_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=$s(n[i],r[i]);if(s)return s}return fe(n.length,r.length)}function Ws(t){return Of(t)}function Of(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Of(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Of(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Lf(t){return!!t&&"integerValue"in t}function vm(t){return!!t&&"arrayValue"in t}function p_(t){return!!t&&"nullValue"in t}function m_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gu(t){return!!t&&"mapValue"in t}function QN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return no(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){no(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(ea(this.value))}}function TT(t){const e=[];return no(t.fields,(n,r)=>{const i=new it([n]);if(gu(r)){const s=TT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new pn(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,te.min(),te.min(),te.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,te.min(),te.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,te.min(),te.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ic{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function XN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ST{}class Ke extends ST{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZN(e,n,r):n==="array-contains"?new n4(e,r):n==="in"?new r4(e,r):n==="not-in"?new i4(e,r):n==="array-contains-any"?new s4(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e4(e,r):new t4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends ST{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return IT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function IT(t){return t.op==="and"}function AT(t){return JN(t)&&IT(t)}function JN(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Df(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(AT(t))return t.filters.map(e=>Df(e)).join(",");{const e=t.filters.map(n=>Df(n)).join(",");return`${t.op}(${e})`}}function CT(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&CT(o,i.filters[a]),!0):!1}(t,e):void Z()}function kT(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(kT).join(" ,")+"}"}(t):"Filter"}class ZN extends Ke{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class e4 extends Ke{constructor(e,n){super(e,"in",n),this.keys=PT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t4 extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=PT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class n4 extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vm(n)&&ba(n.arrayValue,this.value)}}class r4 extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ba(this.value.arrayValue,n)}}class i4 extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ba(this.value.arrayValue,n)}}class s4 extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ba(this.value.arrayValue,r))}}/**
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
 */class o4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function v_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new o4(t,e,n,r,i,s,o)}function _m(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Df(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.ue=n}return e.ue}function wm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!CT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function Mf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a4(t,e,n,r,i,s,o,a){return new Uc(t,e,n,r,i,s,o,a)}function Em(t){return new Uc(t)}function __(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l4(t){return t.collectionGroup!==null}function ta(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new sc(s,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new sc(it.keyField(),r))}return e.ce}function On(t){const e=ne(t);return e.le||(e.le=u4(e,ta(t))),e.le}function u4(t,e){if(t.limitType==="F")return v_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sc(i.field,s)});const n=t.endAt?new ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ic(t.startAt.position,t.startAt.inclusive):null;return v_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vf(t,e,n){return new Uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zc(t,e){return wm(On(t),On(e))&&t.limitType===e.limitType}function RT(t){return`${_m(On(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kT(i)).join(", ")}]`),jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ws(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ta(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=g_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ta(r),i)||r.endAt&&!function(o,a,u){const c=g_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ta(r),i))}(t,e)}function c4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xT(t){return(e,n)=>{let r=!1;for(const i of ta(t)){const s=d4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function d4(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?$s(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){no(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wT(this.inner)}size(){return this.innerSize}}/**
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
 */const h4=new De(K.comparator);function ur(){return h4}const bT=new De(K.comparator);function Uo(...t){let e=bT;for(const n of t)e=e.insert(n.key,n);return e}function NT(t){let e=bT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _i(){return na()}function OT(){return na()}function na(){return new ro(t=>t.toString(),(t,e)=>t.isEqual(e))}const f4=new De(K.comparator),p4=new ot(K.comparator);function se(...t){let e=p4;for(const n of t)e=e.add(n);return e}const m4=new ot(fe);function g4(){return m4}/**
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
 */function Tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function LT(t){return{integerValue:""+t}}function y4(t,e){return qN(e)?LT(e):Tm(t,e)}/**
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
 */class $c{constructor(){this._=void 0}}function v4(t,e,n){return t instanceof oc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gm(s)&&(s=ym(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Na?MT(t,e):t instanceof Oa?VT(t,e):function(i,s){const o=DT(i,s),a=w_(o)+w_(i.Pe);return Lf(o)&&Lf(i.Pe)?LT(a):Tm(i.serializer,a)}(t,e)}function _4(t,e,n){return t instanceof Na?MT(t,e):t instanceof Oa?VT(t,e):n}function DT(t,e){return t instanceof ac?function(r){return Lf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class oc extends $c{}class Na extends $c{constructor(e){super(),this.elements=e}}function MT(t,e){const n=FT(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oa extends $c{constructor(e){super(),this.elements=e}}function VT(t,e){let n=FT(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class ac extends $c{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return Be(t.integerValue||t.doubleValue)}function FT(t){return vm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function w4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Na&&i instanceof Na||r instanceof Oa&&i instanceof Oa?Bs(r.elements,i.elements,Dn):r instanceof ac&&i instanceof ac?Dn(r.Pe,i.Pe):r instanceof oc&&i instanceof oc}(t.transform,e.transform)}class E4{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wc{}function jT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zT(t.key,Xn.none()):new Ja(t.key,t.data,Xn.none());{const n=t.data,r=Jt.empty();let i=new ot(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bi(t.key,r,new pn(i.toArray()),Xn.none())}}function T4(t,e,n){t instanceof Ja?function(i,s,o){const a=i.value.clone(),u=T_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Bi?function(i,s,o){if(!yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=T_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(UT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n,r){return t instanceof Ja?function(s,o,a,u){if(!yu(s.precondition,o))return a;const c=s.value.clone(),h=S_(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bi?function(s,o,a,u){if(!yu(s.precondition,o))return a;const c=S_(s.fieldTransforms,u,o),h=o.data;return h.setAll(UT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function S4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DT(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bs(r,i,(s,o)=>w4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends Wc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bi extends Wc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function UT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_4(o,a,n[i]))}return r}function S_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v4(s,o,e))}return r}class zT extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I4 extends Wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=jT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>E_(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class Sm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length);let i=function(){return f4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sm(e,n,r,i)}}/**
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
 */class C4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class k4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ue;function P4(t){switch(t){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function BT(t){if(t===void 0)return lr("GRPC error has no .code"),j.UNKNOWN;switch(t){case He.OK:return j.OK;case He.CANCELLED:return j.CANCELLED;case He.UNKNOWN:return j.UNKNOWN;case He.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case He.INTERNAL:return j.INTERNAL;case He.UNAVAILABLE:return j.UNAVAILABLE;case He.UNAUTHENTICATED:return j.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case He.NOT_FOUND:return j.NOT_FOUND;case He.ALREADY_EXISTS:return j.ALREADY_EXISTS;case He.PERMISSION_DENIED:return j.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case He.ABORTED:return j.ABORTED;case He.OUT_OF_RANGE:return j.OUT_OF_RANGE;case He.UNIMPLEMENTED:return j.UNIMPLEMENTED;case He.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(ue=He||(He={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function R4(){return new TextEncoder}/**
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
 */const x4=new Si([4294967295,4294967295],0);function I_(t){const e=R4().encode(t),n=new hT;return n.update(e),new Uint8Array(n.digest())}function A_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Si([n,r],0),new Si([i,s],0)]}class Im{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zo(`Invalid padding: ${n}`);if(r<0)throw new zo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Si.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Si.fromNumber(r)));return i.compare(x4)===1&&(i=new Si([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=I_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Im(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=I_(e),[r,i]=A_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(te.min(),i,new De(fe),ur(),se())}}class Za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Za(r,n,se(),se(),se())}}/**
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
 */class vu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class $T{constructor(e,n){this.targetId=e,this.me=n}}class WT{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class C_{constructor(){this.fe=0,this.ge=P_(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Za(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=P_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class b4{constructor(e){this.Le=e,this.Be=new Map,this.ke=ur(),this.qe=k_(),this.Qe=new De(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Mf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,_t.newNoDocument(o,te.min()))}else _e(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Mi(r).toUint8Array()}catch(u){if(u instanceof ET)return zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Im(o,i,s)}catch(u){return zs(u instanceof zo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Mf(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hc(e,n,this.Qe,this.ke,r);return this.ke=ur(),this.qe=k_(),this.Qe=new De(fe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new C_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new C_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function k_(){return new De(K.comparator)}function P_(){return new De(K.comparator)}const N4={asc:"ASCENDING",desc:"DESCENDING"},O4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L4={and:"AND",or:"OR"};class D4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ff(t,e){return t.useProto3Json||jc(e)?e:{value:e}}function lc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function M4(t,e){return lc(t,e.toTimestamp())}function Ln(t){return _e(!!t),te.fromTimestamp(function(n){const r=Kr(n);return new Ye(r.seconds,r.nanos)}(t))}function Am(t,e){return jf(t,e).canonicalString()}function jf(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qT(t){const e=Fe.fromString(t);return _e(XT(e)),e}function Uf(t,e){return Am(t.databaseId,e.path)}function Zd(t,e){const n=qT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(KT(n))}function GT(t,e){return Am(t.databaseId,e)}function V4(t){const e=qT(t);return e.length===4?Fe.emptyPath():KT(e)}function zf(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function R_(t,e,n){return{name:Uf(t,e),fields:n.value.mapValue.fields}}function F4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(_e(h===void 0||typeof h=="string"),ut.fromBase64String(h||"")):(_e(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:BT(c.code);return new G(h,c.message||"")}(o);n=new WT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Zd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):te.min(),a=new Jt({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new vu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Zd(t,r.document),s=r.readTime?Ln(r.readTime):te.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Zd(t,r.document),s=r.removedTargetIds||[];n=new vu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new k4(i,s),a=r.targetId;n=new $T(a,o)}}return n}function j4(t,e){let n;if(e instanceof Ja)n={update:R_(t,e.key,e.value)};else if(e instanceof zT)n={delete:Uf(t,e.key)};else if(e instanceof Bi)n={update:R_(t,e.key,e.data),updateMask:K4(e.fieldMask)};else{if(!(e instanceof I4))return Z();n={verify:Uf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof oc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ac)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:M4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function U4(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(te.min())&&(o=Ln(s)),new E4(o,i.transformResults||[])}(n,e))):[]}function z4(t,e){return{documents:[GT(t,e.path)]}}function B4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GT(t,i);const s=function(c){if(c.length!==0)return YT(Mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:rs(m.field),direction:H4(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ff(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function $4(t){let e=V4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=QT(f);return m instanceof Mn&&AT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(I){return new sc(is(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,jc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new ic(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new ic(E,m)}(n.endAt)),a4(e,i,o,s,a,"F",u,c)}function W4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function QT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=is(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=is(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(is(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>QT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function H4(t){return N4[t]}function q4(t){return O4[t]}function G4(t){return L4[t]}function rs(t){return{fieldPath:t.canonicalString()}}function is(t){return it.fromServerFormat(t.fieldPath)}function YT(t){return t instanceof Ke?function(n){if(n.op==="=="){if(m_(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(p_(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m_(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(p_(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:q4(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(i=>YT(i));return r.length===1?r[0]:{compositeFilter:{op:G4(n.op),filters:r}}}(t):Z()}function K4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Rr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Q4{constructor(e){this.ct=e}}function Y4(t){const e=$4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vf(e,e.limit,"L"):e}/**
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
 */class X4{constructor(){this.un=new J4}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Gr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Gr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class J4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(Fe.comparator)).toArray()}}/**
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
 */class Hs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hs(0)}static kn(){return new Hs(-1)}}/**
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
 */class Z4{constructor(){this.changes=new ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ra(r.mutation,i,pn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=_i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Uo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ur();const o=na(),a=function(){return na()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Bi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ra(h.mutation,c,h.mutation.getFieldMask(),Ye.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new eO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=na();let i=new De((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||pn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=OT();h.forEach(m=>{if(!s.has(m)){const E=jT(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(_i());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:a,changes:NT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Uo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Uo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new Uc(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,_t.newInvalidDocument(h)))});let a=Uo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ra(h.mutation,c,pn.empty(),Ye.now()),Bc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class nO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Y4(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),F.resolve()}}/**
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
 */class rO{constructor(){this.overlays=new De(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_i();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=_i(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=_i(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=_i(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new C4(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class iO{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Cm{constructor(){this.Tr=new ot(Xe.Er),this.dr=new ot(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Fe([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Fe([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class sO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ot(Xe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(fe);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new K(s),0);let a=new ot(fe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oO{constructor(e){this.Mr=e,this.docs=function(){return new De(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ur();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BN(zN(h),r)<=0||(i.has(h.key)||Bc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aO(this)}getSize(e){return F.resolve(this.size)}}class aO extends Z4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class lO{constructor(e){this.persistence=e,this.Nr=new ro(n=>_m(n),wm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Cm,this.targetCount=0,this.kr=Hs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class uO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new mm(0),this.Kr=!1,this.Kr=!0,this.$r=new iO,this.referenceDelegate=e(this),this.Ur=new lO(this),this.indexManager=new X4,this.remoteDocumentCache=function(i){return new oO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Q4(n),this.Gr=new nO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new cO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cO extends WN{constructor(e){super(),this.currentSequenceNumber=e}}class km{constructor(e){this.persistence=e,this.Jr=new Cm,this.Yr=null}static Zr(e){return new km(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Pm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pm(e,n.fromCache,r,i)}}/**
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
 */class dO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nR()?8:HN(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Po()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Po()<=oe.DEBUG&&H("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Po()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):F.resolve())}Yi(e,n){if(__(n))return F.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vf(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Vf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return __(n)||i.isEqual(te.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Po()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ns(n)),this.rs(e,o,n,UN(i,-1)).next(a=>a))})}ts(e,n){let r=new ot(xT(e));return n.forEach((i,s)=>{Bc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Po()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ns(n)),this.Ji.getDocumentsMatchingQuery(e,n,Gr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new De(fe),this._s=new ro(s=>_m(s),wm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pO(t,e,n,r){return new fO(t,e,n,r)}async function JT(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function mO(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let E=F.resolve();return m.forEach(I=>{E=E.next(()=>h.getEntry(u,I)).next(k=>{const R=c.docVersions.get(I);_e(R!==null),k.version.compareTo(R)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ZT(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gO(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(ut.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,r)),i=i.insert(f,E),function(k,R,_){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,E,h)&&a.push(n.Ur.updateTargetData(s,E))});let u=ur(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(yO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(te.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function yO(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ur();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function vO(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _O(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Bf(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function x_(t,e,n){const r=ne(t);let i=te.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),m=f._s.get(h);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:se())).next(a=>(wO(r,c4(e),a),{documents:a,Ts:s})))}function wO(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class b_{constructor(){this.activeTargetIds=g4()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EO{constructor(){this.so=new b_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new b_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TO{_o(e){}shutdown(){}}/**
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
 */class N_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gl=null;function eh(){return Gl===null?Gl=function(){return 268435456+Math.round(2147483648*Math.random())}():Gl++,"0x"+Gl.toString(16)}/**
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
 */const SO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class AO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=eh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw zs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=SO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=eh();return new Promise((o,a)=>{const u=new fT;u.setWithCredentials(!0),u.listenOnce(pT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mu.NO_ERROR:const h=u.getResponseJson();H(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case mu.TIMEOUT:H(mt,`RPC '${e}' ${s} timed out`),a(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case mu.HTTP_ERROR:const f=u.getStatus();if(H(mt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const I=function(R){const _=R.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(E.status);a(new G(I,E.message))}else a(new G(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(mt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=eh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yT(),a=gT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(mt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,E=!1;const I=new IO({Io:R=>{E?H(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(H(mt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),H(mt,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),k=(R,_,y)=>{R.listen(_,S=>{try{y(S)}catch(x){setTimeout(()=>{throw x},0)}})};return k(f,jo.EventType.OPEN,()=>{E||(H(mt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),k(f,jo.EventType.CLOSE,()=>{E||(E=!0,H(mt,`RPC '${e}' stream ${i} transport closed`),I.So())}),k(f,jo.EventType.ERROR,R=>{E||(E=!0,zs(mt,`RPC '${e}' stream ${i} transport errored:`,R),I.So(new G(j.UNAVAILABLE,"The operation could not be completed")))}),k(f,jo.EventType.MESSAGE,R=>{var _;if(!E){const y=R.data[0];_e(!!y);const S=y,x=S.error||((_=S[0])===null||_===void 0?void 0:_.error);if(x){H(mt,`RPC '${e}' stream ${i} received error:`,x);const O=x.status;let V=function(A){const C=He[A];if(C!==void 0)return BT(C)}(O),T=x.message;V===void 0&&(V=j.INTERNAL,T="Unknown error status: "+O+" with message "+x.message),E=!0,I.So(new G(V,T)),f.close()}else H(mt,`RPC '${e}' stream ${i} received:`,y),I.bo(y)}}),k(a,mT.STAT_EVENT,R=>{R.stat===Nf.PROXY?H(mt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Nf.NOPROXY&&H(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function th(){return typeof document<"u"?document:null}/**
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
 */function qc(t){return new D4(t,!0)}/**
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
 */class eS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class tS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new eS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CO extends tS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=F4(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Ln(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=zf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Mf(u)?{documents:z4(s,u)}:{query:B4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HT(s,o.resumeToken);const c=Ff(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=lc(s,o.snapshotVersion.toTimestamp());const c=Ff(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=W4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=zf(this.serializer),n.removeTarget=e,this.a_(n)}}class kO extends tS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=U4(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=zf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>j4(this.serializer,r))};this.a_(n)}}/**
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
 */class PO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,jf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,jf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(lr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{$i(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await el(c),c.q_.set("Unknown"),c.L_.delete(4),await Gc(c)}(this))})}),this.q_=new RO(r,i)}}async function Gc(t){if($i(t))for(const e of t.B_)await e(!0)}async function el(t){for(const e of t.B_)await e(!1)}function nS(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Nm(n)?bm(n):io(n).r_()&&xm(n,e))}function Rm(t,e){const n=ne(t),r=io(n);n.N_.delete(e),r.r_()&&rS(n,e),n.N_.size===0&&(r.r_()?r.o_():$i(n)&&n.q_.set("Unknown"))}function xm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).A_(e)}function rS(t,e){t.Q_.xe(e),io(t).R_(e)}function bm(t){t.Q_=new b4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),io(t).start(),t.q_.v_()}function Nm(t){return $i(t)&&!io(t).n_()&&t.N_.size>0}function $i(t){return ne(t).L_.size===0}function iS(t){t.Q_=void 0}async function bO(t){t.q_.set("Online")}async function NO(t){t.N_.forEach((e,n)=>{xm(t,e)})}async function OO(t,e){iS(t),Nm(t)?(t.q_.M_(e),bm(t)):t.q_.set("Unknown")}async function LO(t,e,n){if(t.q_.set("Online"),e instanceof WT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uc(t,r)}else if(e instanceof vu?t.Q_.Ke(e):e instanceof $T?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await ZT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ut.EMPTY_BYTE_STRING,h.snapshotVersion)),rS(s,u);const f=new Rr(h.target,u,c,h.sequenceNumber);xm(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await uc(t,r)}}async function uc(t,e,n){if(!Xa(e))throw e;t.L_.add(1),await el(t),t.q_.set("Offline"),n||(n=()=>ZT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Gc(t)})}function sS(t,e){return e().catch(n=>uc(t,n,e))}async function Kc(t){const e=ne(t),n=Qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DO(e);)try{const i=await vO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,MO(e,i)}catch(i){await uc(e,i)}oS(e)&&aS(e)}function DO(t){return $i(t)&&t.O_.length<10}function MO(t,e){t.O_.push(e);const n=Qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function oS(t){return $i(t)&&!Qr(t).n_()&&t.O_.length>0}function aS(t){Qr(t).start()}async function VO(t){Qr(t).p_()}async function FO(t){const e=Qr(t);for(const n of t.O_)e.m_(n.mutations)}async function jO(t,e,n){const r=t.O_.shift(),i=Sm.from(r,e,n);await sS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kc(t)}async function UO(t,e){e&&Qr(t).V_&&await async function(r,i){if(function(o){return P4(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Qr(r).s_(),await sS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kc(r)}}(t,e),oS(t)&&aS(t)}async function O_(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.L_.add(3),await el(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Gc(n)}async function zO(t,e){const n=ne(t);e?(n.L_.delete(2),await Gc(n)):e||(n.L_.add(2),await el(n),n.q_.set("Unknown"))}function io(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new CO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:bO.bind(null,t),Ro:NO.bind(null,t),mo:OO.bind(null,t),d_:LO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Nm(t)?bm(t):t.q_.set("Unknown")):(await t.K_.stop(),iS(t))})),t.K_}function Qr(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new kO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VO.bind(null,t),mo:UO.bind(null,t),f_:FO.bind(null,t),g_:jO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Kc(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Om{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Om(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lm(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Xa(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Uo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class L_{constructor(){this.W_=new De(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qs(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class BO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $O{constructor(){this.queries=D_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=D_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function D_(){return new ro(t=>RT(t),zc)}async function WO(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new BO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Lm(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Dm(n)}async function HO(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qO(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Dm(n)}function GO(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Dm(t){t.Y_.forEach(e=>{e.next()})}var $f,M_;(M_=$f||($f={})).ea="default",M_.Cache="cache";class KO{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$f.Cache}}/**
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
 */class lS{constructor(e){this.key=e}}class uS{constructor(e){this.key=e}}class QO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=xT(e),this.Ra=new bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new L_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),E=Bc(this.query,f)?f:null,I=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let R=!1;m&&E?m.data.isEqual(E.data)?I!==k&&(r.track({type:3,doc:E}),R=!0):this.ga(m,E)||(r.track({type:2,doc:E}),R=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(a=!0)):!m&&E?(r.track({type:0,doc:E}),R=!0):m&&!E&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(E?(o=o.add(E),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(E,I){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return k(E)-k(I)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new qs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new L_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new uS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new lS(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class YO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XO{constructor(e){this.key=e,this.va=!1}}class JO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ro(a=>RT(a),zc),this.Ma=new Map,this.xa=new Set,this.Oa=new De(K.comparator),this.Na=new Map,this.La=new Cm,this.Ba={},this.ka=new Map,this.qa=Hs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ZO(t,e,n=!0){const r=mS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await cS(r,e,n,!0),i}async function eL(t,e){const n=mS(t);await cS(n,e,!0,!1)}async function cS(t,e,n,r){const i=await _O(t.localStore,On(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await tL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nS(t.remoteStore,i),a}async function tL(t,e,n,r,i){t.Ka=(f,m,E)=>async function(k,R,_,y){let S=R.view.ma(_);S.ns&&(S=await x_(k.localStore,R.query,!1).then(({documents:T})=>R.view.ma(T,S)));const x=y&&y.targetChanges.get(R.targetId),O=y&&y.targetMismatches.get(R.targetId)!=null,V=R.view.applyChanges(S,k.isPrimaryClient,x,O);return F_(k,R.targetId,V.wa),V.snapshot}(t,f,m,E);const s=await x_(t.localStore,e,!0),o=new QO(e,s.Ts),a=o.ma(s.documents),u=Za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);F_(t,n,c.wa);const h=new YO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function nL(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!zc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rm(r.remoteStore,i.targetId),Wf(r,i.targetId)}).catch(Ya)):(Wf(r,i.targetId),await Bf(r.localStore,i.targetId,!0))}async function rL(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rm(n.remoteStore,r.targetId))}async function iL(t,e,n){const r=dL(t);try{const i=await function(o,a){const u=ne(o),c=Ye.now(),h=a.reduce((E,I)=>E.add(I.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let I=ur(),k=se();return u.cs.getEntries(E,h).next(R=>{I=R,I.forEach((_,y)=>{y.isValidDocument()||(k=k.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,I)).next(R=>{f=R;const _=[];for(const y of a){const S=S4(y,f.get(y.key).overlayedDocument);S!=null&&_.push(new Bi(y.key,S,TT(S.value.mapValue),Xn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,_,a)}).next(R=>{m=R;const _=R.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(E,R.batchId,_)})}).then(()=>({batchId:m.batchId,changes:NT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new De(fe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await tl(r,i.changes),await Kc(r.remoteStore)}catch(i){const s=Lm(i,"Failed to persist write");n.reject(s)}}async function dS(t,e){const n=ne(t);try{const r=await gO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?_e(o.va):i.removedDocuments.size>0&&(_e(o.va),o.va=!1))}),await tl(n,r,e)}catch(r){await Ya(r)}}function V_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Dm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sL(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new De(K.comparator);o=o.insert(s,_t.newNoDocument(s,te.min()));const a=se().add(s),u=new Hc(te.min(),new Map,new De(fe),o,a);await dS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Mm(r)}else await Bf(r.localStore,e,!1).then(()=>Wf(r,e,n)).catch(Ya)}async function oL(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await mO(n.localStore,e);fS(n,r,null),hS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tl(n,i)}catch(i){await Ya(i)}}async function aL(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(_e(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);fS(r,e,n),hS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tl(r,i)}catch(i){await Ya(i)}}function hS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function fS(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Wf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||pS(t,r)})}function pS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Rm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mm(t))}function F_(t,e,n){for(const r of n)r instanceof lS?(t.La.addReference(r.key,e),lL(t,r)):r instanceof uS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||pS(t,r.key)):Z()}function lL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mm(t))}function Mm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new XO(n)),t.Oa=t.Oa.insert(n,r),nS(t.remoteStore,new Rr(On(Em(n.path)),r,"TargetPurposeLimboResolution",mm.oe))}}async function tl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Pm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,E=>h.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>F.forEach(m.Ui,E=>h.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!Xa(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=h.os.get(m),I=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(m,k)}}}(r.localStore,s))}async function uL(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await JT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tl(n,r.hs)}}function cL(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function mS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sL.bind(null,e),e.Ca.d_=qO.bind(null,e.eventManager),e.Ca.$a=GO.bind(null,e.eventManager),e}function dL(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aL.bind(null,e),e}class cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pO(this.persistence,new hO,e.initialUser,this.serializer)}Ga(e){return new uO(km.Zr,this.serializer)}Wa(e){return new EO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cc.provider={build:()=>new cc};class Hf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>V_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uL.bind(null,this.syncEngine),await zO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $O}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(s){return new AO(s)}(e.databaseInfo);return function(s,o,a,u){return new PO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>V_(this.syncEngine,n,0),function(){return N_.D()?new N_:new TO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new JO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await el(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hf.provider={build:()=>new Hf};/**
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
 */class hL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class fL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=_T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pL(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}async function pL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await nh(t,new cc)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await nh(t,new cc);return t._offlineComponents}async function gS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await j_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await j_(t,new Hf))),t._onlineComponents}function mL(t){return gS(t).then(e=>e.syncEngine)}async function gL(t){const e=await gS(t),n=e.eventManager;return n.onListen=ZO.bind(null,e.syncEngine),n.onUnlisten=nL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rL.bind(null,e.syncEngine),n}function yL(t,e,n={}){const r=new Ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new hL({next:m=>{h.Za(),o.enqueueAndForget(()=>HO(s,f));const E=m.docs.has(a);!E&&m.fromCache?c.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new KO(Em(a.path),h,{includeMetadataChanges:!0,_a:!0});return WO(s,f)}(await gL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function yS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const U_=new Map;/**
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
 */function vL(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _L(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function z_(t){if(!K.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function La(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vm(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class B_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_L("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bN;switch(r.type){case"firstParty":return new DN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=U_.get(n);r&&(H("ComponentProvider","Removing Datastore"),U_.delete(n),r.terminate())}(this),Promise.resolve()}}function wL(t,e,n,r={}){var i;const s=(t=La(t,Fm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=yt.MOCK_USER;else{a=AE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new NN(new vT(a,u))}}/**
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
 */class jm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jm(this.firestore,e,this._query)}}class tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Da(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}}class Da extends jm{constructor(e,n,r){super(e,n,Em(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new K(e))}withConverter(e){return new Da(this.firestore,e,this._path)}}function _u(t,e,...n){if(t=lt(t),arguments.length===1&&(e=_T.newId()),vL("doc","path",e),t instanceof Fm){const r=Fe.fromString(e,...n);return z_(r),new tn(t,null,new K(r))}{if(!(t instanceof tn||t instanceof Da))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return z_(r),new tn(t.firestore,t instanceof Da?t.converter:null,new K(r))}}/**
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
 */class $_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new eS(this,"async_queue_retry"),this.Vu=()=>{const r=th();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ur;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Om.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Um extends Fm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $_(e),this._firestoreClient=void 0,await e}}}function EL(t,e){const n=typeof t=="object"?t:rm(),r=typeof t=="string"?t:e,i=Dc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=TE("firestore");s&&wL(i,...s)}return i}function vS(t){if(t._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TL(t),t._firestoreClient}function TL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new KN(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,yS(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new fL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(ut.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _S{constructor(e){this._methodName=e}}/**
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
 */class Bm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class $m{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const SL=/^__.*__$/;class IL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}function wS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Wm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return dc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(wS(this.Cu)&&SL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class AL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}Qu(e,n,r,i=!1){return new Wm({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CL(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new AL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);IS("Data must be an object, but it was:",o,r);const a=TS(r,o);let u,c;if(s.merge)u=new pn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=PL(e,f,n);if(!o.contains(m))throw new G(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xL(h,m)||h.push(m)}u=new pn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new IL(new Jt(a),u,c)}function ES(t,e){if(SS(t=lt(t)))return IS("Unsupported field value:",e,t),TS(t,e);if(t instanceof _S)return function(r,i){if(!wS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ES(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:lc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lc(i.serializer,s)}}if(r instanceof Bm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gs)return{bytesValue:HT(i.serializer,r._byteString)};if(r instanceof tn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Am(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $m)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Tm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vm(r)}`)}(t,e)}function TS(t,e){const n={};return wT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):no(t,(r,i)=>{const s=ES(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function SS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Bm||t instanceof Gs||t instanceof tn||t instanceof _S||t instanceof $m)}function IS(t,e,n){if(!SS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function PL(t,e,n){if((e=lt(e))instanceof zm)return e._internalPath;if(typeof e=="string")return AS(t,e);throw dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const RL=new RegExp("[~\\*/\\[\\]]");function AS(t,e,n){if(e.search(RL)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zm(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(j.INVALID_ARGUMENT,a+t+u)}function xL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class CS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends CS{data(){return super.data()}}function kS(t,e){return typeof e=="string"?AS(t,e):e instanceof zm?e._internalPath:e._delegate._internalPath}class NL{convertValue(e,n="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return no(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Be(o.doubleValue));return new $m(s)}convertGeoPoint(e){return new Bm(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ym(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);_e(XT(r));const i=new xa(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function OL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class LL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PS extends CS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new DL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class DL extends PS{data(e={}){return super.data(e)}}/**
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
 */function RS(t){t=La(t,tn);const e=La(t.firestore,Um);return yL(vS(e),t._key).then(n=>FL(e,t,n))}class ML extends NL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,n)}}function W_(t,e,n){t=La(t,tn);const r=La(t.firestore,Um),i=OL(t.converter,e,n);return VL(r,[kL(CL(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xn.none())])}function VL(t,e){return function(r,i){const s=new Ur;return r.asyncQueue.enqueueAndForget(async()=>iL(await mL(r),i,s)),s.promise}(vS(t),e)}function FL(t,e,n){const r=n.docs.get(e._key),i=new ML(t);return new PS(t,i,e._key,r,new LL(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){to=i})(zi),Oi(new qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Um(new ON(r.getProvider("auth-internal")),new VN(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Rn(u_,"4.7.3",e),Rn(u_,"4.7.3","esm2017")})();var jL="firebase",UL="10.14.1";/**
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
 */Rn(jL,UL,"app");/**
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
 */const xS="firebasestorage.googleapis.com",bS="storageBucket",zL=2*60*1e3,BL=10*60*1e3;/**
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
 */class Ue extends Vn{constructor(e,n,r=0){super(rh(e),`Firebase Storage: ${n} (${rh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function rh(t){return"storage/"+t}function Hm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(je.UNKNOWN,t)}function $L(t){return new Ue(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WL(t){return new Ue(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(je.UNAUTHENTICATED,t)}function qL(){return new Ue(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GL(t){return new Ue(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KL(){return new Ue(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QL(){return new Ue(je.CANCELED,"User canceled the upload/download.")}function YL(t){return new Ue(je.INVALID_URL,"Invalid URL '"+t+"'.")}function XL(t){return new Ue(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JL(){return new Ue(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bS+"' property when initializing the app?")}function ZL(){return new Ue(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eD(){return new Ue(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tD(t){return new Ue(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qf(t){return new Ue(je.INVALID_ARGUMENT,t)}function NS(){return new Ue(je.APP_DELETED,"The Firebase app was deleted.")}function nD(t){return new Ue(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ia(t,e){return new Ue(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ro(t){throw new Ue(je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw XL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),I={bucket:1,path:3},k=n===xS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",_=new RegExp(`^https?://${k}/${i}/${R}`,"i"),S=[{regex:a,indices:u,postModify:s},{regex:E,indices:I,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<S.length;x++){const O=S[x],V=O.regex.exec(e);if(V){const T=V[O.indices.bucket];let g=V[O.indices.path];g||(g=""),r=new Wt(T,g),O.postModify(r);break}}if(r==null)throw YL(e);return r}}class rD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...R){c||(c=!0,e.apply(null,R))}function f(R){i=setTimeout(()=>{i=null,t(E,u())},R)}function m(){s&&clearTimeout(s)}function E(R,..._){if(c){m();return}if(R){m(),h.call(null,R,..._);return}if(u()||o){m(),h.call(null,R,..._);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let I=!1;function k(R){I||(I=!0,m(),!c&&(i!==null?(R||(a=2),clearTimeout(i),f(0)):R||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function sD(t){t(!1)}/**
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
 */function oD(t){return t!==void 0}function aD(t){return typeof t=="object"&&!Array.isArray(t)}function qm(t){return typeof t=="string"||t instanceof String}function H_(t){return Gm()&&t instanceof Blob}function Gm(){return typeof Blob<"u"}function q_(t,e,n,r){if(r<e)throw qf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Km(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ii||(Ii={}));/**
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
 */function lD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class uD{constructor(e,n,r,i,s,o,a,u,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,I)=>{this.resolve_=E,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Kl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ii.NO_ERROR,u=s.getStatus();if(!a||lD(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ii.ABORT;r(!1,new Kl(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Kl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());oD(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Hm();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?NS():QL();o(u)}else{const u=KL();o(u)}};this.canceled_?n(!1,new Kl(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pD(t,e,n,r,i,s,o=!0){const a=OS(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return hD(c,e),cD(c,n),dD(c,s),fD(c,r),new uD(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function mD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gD(...t){const e=mD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gm())return new Blob(t);throw new Ue(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function vD(t){if(typeof atob>"u")throw tD("base-64");return atob(t)}/**
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
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ih{constructor(e,n){this.data=e,this.contentType=n||null}}function LS(t,e){switch(t){case mn.RAW:return new ih(DS(e));case mn.BASE64:case mn.BASE64URL:return new ih(MS(t,e));case mn.DATA_URL:return new ih(wD(e),ED(e))}throw Hm()}function DS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _D(t){let e;try{e=decodeURIComponent(t)}catch{throw ia(mn.DATA_URL,"Malformed data URL.")}return DS(e)}function MS(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ia(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ia(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vD(e)}catch(i){throw i.message.includes("polyfill")?i:ia(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class VS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ia(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=TD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function wD(t){const e=new VS(t);return e.base64?MS(mn.BASE64,e.rest):_D(e.rest)}function ED(t){return new VS(t).contentType}function TD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cr{constructor(e,n){let r=0,i="";H_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(H_(this.data_)){const r=this.data_,i=yD(r,e,n);return i===null?null:new Cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(Gm()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(gD.apply(null,n))}else{const n=e.map(o=>qm(o)?LS(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function FS(t){let e;try{e=JSON.parse(t)}catch{return null}return aD(e)?e:null}/**
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
 */function SD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ID(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function jS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function AD(t,e){return e}class At{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AD}}let Ql=null;function CD(t){return!qm(t)||t.length<2?t:jS(t)}function US(){if(Ql)return Ql;const t=[];t.push(new At("bucket")),t.push(new At("generation")),t.push(new At("metageneration")),t.push(new At("name","fullPath",!0));function e(s,o){return CD(o)}const n=new At("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new At("size");return i.xform=r,t.push(i),t.push(new At("timeCreated")),t.push(new At("updated")),t.push(new At("md5Hash",null,!0)),t.push(new At("cacheControl",null,!0)),t.push(new At("contentDisposition",null,!0)),t.push(new At("contentEncoding",null,!0)),t.push(new At("contentLanguage",null,!0)),t.push(new At("contentType",null,!0)),t.push(new At("metadata","customMetadata",!0)),Ql=t,Ql}function kD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function PD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return kD(r,t),r}function zS(t,e,n){const r=FS(e);return r===null?null:PD(t,r,n)}function RD(t,e,n,r){const i=FS(e);if(i===null||!qm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),E=Km(m,n,r),I=OS({alt:"media",token:c});return E+I})[0]}function xD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class BS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $S(t){if(!t)throw Hm()}function bD(t,e){function n(r,i){const s=zS(t,i,e);return $S(s!==null),s}return n}function ND(t,e){function n(r,i){const s=zS(t,i,e);return $S(s!==null),RD(s,i,t.host,t._protocol)}return n}function WS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qL():i=HL():n.getStatus()===402?i=WL(t.bucket):n.getStatus()===403?i=GL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function OD(t){const e=WS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$L(t.path)),s.serverResponse=i.serverResponse,s}return n}function LD(t,e,n){const r=e.fullServerUrl(),i=Km(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new BS(i,s,ND(t,n),o);return a.errorHandler=OD(e),a}function DD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DD(null,e)),r}function VD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let x=0;x<2;x++)S=S+Math.random().toString().slice(2);return S}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=MD(e,r,i),h=xD(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=Cr.getBlob(f,r,m);if(E===null)throw ZL();const I={name:c.fullPath},k=Km(s,t.host,t._protocol),R="POST",_=t.maxUploadRetryTime,y=new BS(k,R,bD(t,n),_);return y.urlParams=I,y.headers=o,y.body=E.uploadData(),y.errorHandler=WS(e),y}class FD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ro("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jD extends FD{initXhr(){this.xhr_.responseType="text"}}function HS(){return new jD}/**
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
 */class Fi{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fi(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jS(this._location.path)}get storage(){return this._service}get parent(){const e=SD(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new Fi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nD(e)}}function UD(t,e,n){t._throwIfRoot("uploadBytes");const r=VD(t.storage,t._location,US(),new Cr(e,!0),n);return t.storage.makeRequestWithTokens(r,HS).then(i=>({metadata:i,ref:t}))}function zD(t,e,n=mn.RAW,r){t._throwIfRoot("uploadString");const i=LS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),UD(t,i.data,s)}function BD(t){t._throwIfRoot("getDownloadURL");const e=LD(t.storage,t._location,US());return t.storage.makeRequestWithTokens(e,HS).then(n=>{if(n===null)throw eD();return n})}function $D(t,e){const n=ID(t._location.path,e),r=new Wt(t._location.bucket,n);return new Fi(t.storage,r)}/**
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
 */function WD(t){return/^[A-Za-z]+:\/\//.test(t)}function HD(t,e){return new Fi(t,e)}function qS(t,e){if(t instanceof Qm){const n=t;if(n._bucket==null)throw JL();const r=new Fi(n,n._bucket);return e!=null?qS(r,e):r}else return e!==void 0?$D(t,e):t}function qD(t,e){if(e&&WD(e)){if(t instanceof Qm)return HD(t,e);throw qf("To use ref(service, url), the first argument must be a Storage instance.")}else return qS(t,e)}function G_(t,e){const n=e==null?void 0:e[bS];return n==null?null:Wt.makeFromBucketSpec(n,t)}function GD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:AE(i,t.app.options.projectId))}class Qm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=xS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zL,this._maxUploadRetryTime=BL,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=G_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=G_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){q_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){q_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rD(NS());{const o=pD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const K_="@firebase/storage",Q_="0.13.2";/**
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
 */const GS="storage";function KD(t,e,n,r){return t=lt(t),zD(t,e,n,r)}function KS(t){return t=lt(t),BD(t)}function Ym(t,e){return t=lt(t),qD(t,e)}function QD(t=rm(),e){t=lt(t);const r=Dc(t,GS).getImmediate({identifier:e}),i=TE("storage");return i&&YD(r,...i),r}function YD(t,e,n,r={}){GD(t,e,n,r)}function XD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qm(n,r,i,e,zi)}function JD(){Oi(new qr(GS,XD,"PUBLIC").setMultipleInstances(!0)),Rn(K_,Q_,""),Rn(K_,Q_,"esm2017")}JD();const ZD={apiKey:"AIzaSyDqGGBsry3u5lo0T83X6T4B__v8On_kSV0",authDomain:"neighborhood-values.firebaseapp.com",projectId:"neighborhood-values",storageBucket:"neighborhood-values.firebasestorage.app",messagingSenderId:"259918371128",appId:"1:259918371128:web:35e0037527bf28b6f409cd"},Xm=PE(ZD),wu=EL(Xm,"neighborhood-values"),Gf=fm(Xm),Jm=QD(Xm);cb(Gf).catch(t=>{console.error("Anonymous sign-in failed:",t)});const QS=D.createContext({user:null,userData:null,loading:!0,isAnonymous:!0,signOut:async()=>{}}),nl=()=>D.useContext(QS),e3=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),[a,u]=D.useState(!0);D.useEffect(()=>{const h=vb(Gf,async f=>{if(n(f),u((f==null?void 0:f.isAnonymous)||!0),f&&!f.isAnonymous){const m=await RS(_u(wu,"users",f.uid));let E="Subscriber",I;if(m.exists()){const k=m.data();E=k.role||"Subscriber",E==="Contractor"&&(I=k.contractorType)}i({uid:f.uid,email:f.email||"",role:E,displayName:f.displayName||void 0,contractorType:I})}else i(null);o(!1)});return()=>h()},[]);const c=async()=>{await _b(Gf),n(null),i(null)};return v.jsx(QS.Provider,{value:{user:e,userData:r,loading:s,isAnonymous:a,signOut:c},children:t})},Qc={"Contractor-Yard":["Lawn Restoration","Overgrown Bushes or Trees"],"Contractor-Cleanup":["Sidewalk Repair","Graffifiti Cleanup","Trash or Debris Dump Site","Vacant Home Cleanup"],"Contractor-Community":["Homeless Outreach","Overnight Patrol","Home For Sale","Legacy Sponsored Block","Lifestyle Lottery Winner","Neighborhood History"]},t3=Qc,es=[{id:"brentwood-darlington",name:"Brentwood-Darlington"},{id:"centennial",name:"Centennial"},{id:"centennial-pleasant-valley",name:"Centennial/Pleasant-Valley"},{id:"creston-kenilworth",name:"Creston-Kenilworth"},{id:"eastmoreland",name:"Eastmoreland"},{id:"eastmoreland-reed",name:"Eastmoreland/Reed"},{id:"foster-powell",name:"Foster-Powell"},{id:"gilbert",name:"Gilbert"},{id:"glenfair",name:"Glenfair"},{id:"hazelwood",name:"Hazelwood"},{id:"hazelwood-mill-park",name:"Hazelwood/Mill Park"},{id:"laurelhurst",name:"Laurelhurst"},{id:"lents",name:"Lents"},{id:"lents-powellhurst-gilbert",name:"Lents/Powellhurst-Gilbert"},{id:"mill-park",name:"Mill Park"},{id:"montavilla",name:"Montavilla"},{id:"mt-scott-arleta",name:"Mt. Scott-Arleta"},{id:"mt-tabor",name:"Mt. Tabor"},{id:"north-tabor",name:"North Tabor"},{id:"pleasant-valley",name:"Pleasant Valley"},{id:"pleasant-valley-powellhurst-gilbert",name:"Pleasant Valley/Powellhurst-Gilbert"},{id:"powellhurst-gilbert",name:"Powellhurst-Gilbert"},{id:"reed",name:"Reed"},{id:"richmond",name:"Richmond"},{id:"south-tabor",name:"South Tabor"},{id:"sunnyside",name:"Sunnyside"},{id:"woodstock",name:"Woodstock"}],n3=({onClose:t,onFiltersChange:e,initialFilters:n})=>{var O,V;const{userData:r}=nl();let i=Us;if((r==null?void 0:r.role)==="Contractor"&&r.contractorType){const T=t3[r.contractorType]||[];i=Us.filter(g=>T.includes(g.name))}const[s,o]=D.useState((O=n==null?void 0:n.selectedNeighborhoods)!=null&&O.length?n.selectedNeighborhoods:es.map(T=>T.name)),[a,u]=D.useState((V=n==null?void 0:n.selectedServiceTypes)!=null&&V.length?n.selectedServiceTypes:i.map(T=>T.name)),[c,h]=D.useState(!0),[f,m]=D.useState(!0),E=()=>{c?(h(!1),m(!0)):h(!0)},I=()=>{f?(m(!1),h(!0)):m(!0)},k=T=>{var A;const g=(A=es.find(C=>C.id===T))==null?void 0:A.name;g&&o(C=>C.includes(g)?C.filter(b=>b!==g):[...C,g])},R=T=>{u(g=>g.includes(T)?g.filter(A=>A!==T):[...g,T])},_=()=>{o(es.map(T=>T.name))},y=()=>{u(i.map(T=>T.name))},S=()=>{e({selectedNeighborhoods:s,selectedServiceTypes:a})},x=()=>{o(es.map(g=>g.name)),u(i.map(g=>g.name));const T={selectedNeighborhoods:es.map(g=>g.name),selectedServiceTypes:i.map(g=>g.name)};e(T)};return v.jsxs("div",{className:"header-panel filter-panel",children:[v.jsxs("div",{className:"panel-header",children:[v.jsx("h3",{children:"Filter Options"}),v.jsx("button",{className:"close-btn",onClick:t,children:v.jsx(ke,{icon:Ni})})]}),v.jsxs("div",{className:"panel-content",children:[v.jsxs("div",{className:"filter-section",children:[v.jsxs("div",{className:"filter-section-header",children:[v.jsx("h4",{children:"Neighborhoods"}),v.jsxs("span",{className:"filter-count",children:["(",s.length,")"]}),v.jsx("button",{className:"collapse-btn",onClick:E,children:v.jsx(ke,{icon:c?Ku:bv})})]}),v.jsxs("div",{className:"filter-section-controls",children:[v.jsx("button",{className:"select-all-btn",onClick:_,children:"Select All"}),v.jsx("button",{className:"unselect-all-btn",onClick:()=>o([]),children:"Unselect All"})]}),!c&&v.jsx("div",{className:"filter-options neighborhoods-scroll",children:es.map(T=>v.jsxs("label",{children:[v.jsx("input",{type:"checkbox",checked:s.includes(T.name),onChange:()=>k(T.id)}),T.name]},T.id))})]}),v.jsxs("div",{className:"filter-section",children:[v.jsxs("div",{className:"filter-section-header",children:[v.jsx("h4",{children:"Service Types"}),v.jsxs("span",{className:"filter-count",children:["(",a.length,")"]}),v.jsx("button",{className:"collapse-btn",onClick:I,children:v.jsx(ke,{icon:f?Ku:bv})})]}),v.jsxs("div",{className:"filter-section-controls",children:[v.jsx("button",{className:"select-all-btn",onClick:y,children:"Select All"}),v.jsx("button",{className:"unselect-all-btn",onClick:()=>u([]),children:"Unselect All"})]}),!f&&v.jsx("div",{className:"service-types-scroll",children:v.jsx("div",{className:"service-type-buttons",children:i.map(T=>{const g=a.includes(T.name);return v.jsx("button",{className:`service-type-btn ${g?"selected":""}`,style:{backgroundColor:g?T.color:"white",borderColor:T.color,color:g?"white":"black"},onClick:()=>R(T.name),title:T.name,children:v.jsx(ke,{icon:T.icon,className:"service-icon"})},T.id)})})})]}),v.jsxs("div",{className:"filter-actions",children:[v.jsx("button",{className:"apply-filters-btn",onClick:S,children:"Apply Filters"}),v.jsx("button",{className:"clear-filters-btn",onClick:x,children:"Clear Filters"})]})]})]})},r3=({onClose:t,onLoginSuccess:e})=>{const{user:n,userData:r,isAnonymous:i,signOut:s}=nl(),[o,a]=D.useState(""),[u,c]=D.useState(""),[h,f]=D.useState(!1),[m,E]=D.useState("Subscriber"),[I,k]=D.useState(""),[R,_]=D.useState(!1),[y,S]=D.useState(null),x=fm(),O=Object.keys(Qc),V=async b=>{try{const N=await RS(_u(wu,"users",b));return N.exists()&&N.data().role||"Subscriber"}catch(N){return console.error("[LoginPanel] Error fetching user role:",N),"Subscriber"}},T=async(b,N,P,Y)=>{try{await W_(_u(wu,"users",b),{email:N,role:P,contractorType:P==="Contractor"?Y:void 0,createdAt:new Date,lastLogin:new Date})}catch(me){throw console.error("Error saving user data:",me),me}},g=async b=>{b.preventDefault(),console.log("[LoginPanel] Login handler called"),_(!0),S("");try{const P=(await mb(x,o,u)).user;await V(P.uid),await W_(_u(wu,"users",P.uid),{lastLogin:new Date},{merge:!0}),e&&e()}catch(N){console.error("[LoginPanel] Login error:",N),S(N.message||"Login failed")}finally{_(!1)}},A=async b=>{b.preventDefault(),console.log("[LoginPanel] Register handler called"),_(!0),S("");try{const P=(await pb(x,o,u)).user;console.log("[LoginPanel] Firebase user after register:",P),await T(P.uid,P.email,m,m==="Contractor"?I:void 0),e&&e()}catch(N){console.error("[LoginPanel] Register error:",N),S(N.message||"Registration failed")}finally{_(!1)}},C=async()=>{await s(),t&&t()};if(n){const b=(r==null?void 0:r.email)||n.email,N=(r==null?void 0:r.role)||"User";return v.jsxs("div",{className:"header-panel login-panel",children:[v.jsxs("div",{className:"panel-header",children:[v.jsx("h3",{children:"User Profile"}),v.jsx("button",{className:"close-btn",onClick:t,children:v.jsx(ke,{icon:Ni})})]}),v.jsx("div",{className:"panel-content",children:v.jsxs("div",{className:"user-info-display",children:[v.jsxs("p",{children:[v.jsx("strong",{children:"Email:"})," ",b]}),v.jsxs("p",{children:[v.jsx("strong",{children:"Role:"})," ",N]}),n&&(r==null?void 0:r.role)==="Contractor"&&r.contractorType&&v.jsxs("p",{children:[v.jsx("strong",{children:"Contractor Type:"})," ",r.contractorType]}),v.jsx("button",{onClick:C,className:"logout-btn",children:"Sign Out"})]})})]})}return v.jsxs("div",{className:"header-panel login-panel",children:[v.jsxs("div",{className:"panel-header",children:[v.jsx("h3",{children:h?"User Registration":"User Login"}),v.jsx("button",{className:"close-btn",onClick:t,children:v.jsx(ke,{icon:Ni})})]}),v.jsx("div",{className:"panel-content",children:v.jsxs("form",{className:"login-form",onSubmit:h?A:g,children:[y&&v.jsx("div",{className:"error-message",children:y}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"email",children:"Email"}),v.jsx("input",{type:"email",id:"email",value:o,onChange:b=>a(b.target.value),placeholder:"Enter your email",className:"form-input",required:!0})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"password",children:"Password"}),v.jsx("input",{type:"password",id:"password",value:u,onChange:b=>c(b.target.value),placeholder:"Enter your password",className:"form-input",required:!0})]}),h&&v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"role",children:"User Role"}),v.jsxs("select",{id:"role",value:m,onChange:b=>E(b.target.value),className:"form-input",children:[v.jsx("option",{value:"Subscriber",children:"Subscriber"}),v.jsx("option",{value:"Contractor",children:"Contractor"}),v.jsx("option",{value:"Admin",children:"Admin"})]})]}),h&&m==="Contractor"&&v.jsxs("div",{className:"form-group",children:[v.jsx("label",{htmlFor:"contractorType",children:"Contractor Type"}),v.jsxs("select",{id:"contractorType",value:I,onChange:b=>k(b.target.value),className:"form-input",required:!0,children:[v.jsx("option",{value:"",children:"Select Contractor Type"}),O.map(b=>v.jsx("option",{value:b,children:b},b))]})]}),v.jsxs("div",{className:"form-actions",children:[v.jsx("button",{type:"submit",className:"login-btn",disabled:R,children:R?"Processing...":h?"Register":"Login"}),v.jsx("button",{type:"button",className:"register-btn",onClick:()=>{f(!h),S("")},children:h?"Back to Login":"Register"})]}),!h&&v.jsx("div",{className:"form-links",children:v.jsx("a",{href:"#",className:"forgot-password",children:"Forgot Password?"})})]})})]})},i3=["NeighborhoodBoundaries","addpoints","Sponsors","PortlandStreets"],sa={},so=async t=>{try{if(sa[t])return console.log(`Using cached data for ${t}`),sa[t];console.log(`Fetching ${t}...`);const e=[`${t}.geojson`];let n=null,r=null;for(const o of e)try{const a=Ym(Jm,o);n=await KS(a),console.log(`Found ${t} at path: ${o}`);break}catch(a){console.log(`File not found at path: ${o}`),r=a;continue}if(!n)throw new Error(`Could not find ${t}.geojson in any expected location. Last error: ${r==null?void 0:r.message}`);const i=await fetch(n);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();return console.log(`Successfully loaded ${t}:`,s),sa[t]=s,s}catch(e){throw console.error(`Error fetching ${t}.geojson:`,e),e}},Kf=async()=>{const t={},e={},n=i3.map(async r=>{try{const i=await so(r);t[r]=i}catch(i){console.warn(`Failed to load ${r}:`,i),e[r]=i instanceof Error?i.message:"Unknown error"}});return await Promise.allSettled(n),console.log("Loaded layers:",Object.keys(t)),Object.keys(e).length>0&&console.warn("Failed to load layers:",e),t},rl=async(t,e)=>{try{console.log(`Saving ${t}...`);const r=fm().currentUser;r?console.log("[saveGeoJSONLayer] Authenticated user:",{uid:r.uid,email:r.email,displayName:r.displayName,isAnonymous:r.isAnonymous,providerData:r.providerData}):console.log("[saveGeoJSONLayer] No authenticated user");const i=JSON.stringify(e,null,2),s=`${t}.geojson`,o=Ym(Jm,s);console.log("[saveGeoJSONLayer] uploadString request:",{storagePath:s,geoJsonString:i,contentType:"application/json",user:r?{uid:r.uid,email:r.email,displayName:r.displayName,isAnonymous:r.isAnonymous}:null}),await KD(o,i,"raw",{contentType:"application/json"}),sa[t]=e,console.log(`Successfully saved ${t} to ${s}`)}catch(n){throw console.error(`Error saving ${t}:`,n),n}},YS=async(t,e)=>{try{const n=await so(t);e.id||(e.id=`feature_${Date.now()}_${Math.random().toString(36).substr(2,9)}`);const r={...n,features:[...n.features,e]};return await rl(t,r),r}catch(n){throw console.error(`Error adding feature to ${t}:`,n),n}},Zm=async(t,e)=>{try{const n=await so(t),r=e.properties.FID;if(!r)throw new Error("Feature must have an id to be updated");const i=n.features.map(o=>o.id===r?e:o),s={...n,features:i};return await rl(t,s),s}catch(n){throw console.error(`Error updating feature in ${t}:`,n),n}},XS=async(t,e)=>{try{const n=await so(t),r=n.features.filter(s=>s.id!==e),i={...n,features:r};return await rl(t,i),i}catch(n){throw console.error(`Error deleting feature from ${t}:`,n),n}},s3=t=>{delete sa[t]},o3=async t=>{try{const e=await so(t),n=`${t}_backup_${new Date().toISOString().replace(/[:.]/g,"-")}`;await rl(n,e),console.log(`Created backup: ${n}`)}catch(e){throw console.error(`Error creating backup for ${t}:`,e),e}},a3=({selectedServiceType:t,onServiceTypeChange:e})=>{const[n,r]=D.useState(!1),i=(a,u)=>{const c=parseInt(a.slice(1,3),16),h=parseInt(a.slice(3,5),16),f=parseInt(a.slice(5,7),16);return`rgba(${c}, ${h}, ${f}, ${u})`},s=Us.find(a=>a.name===t),o=a=>{e(a.name),r(!1)};return v.jsxs("div",{className:"service-type-dropdown",children:[v.jsxs("div",{className:"dropdown-label-row",style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:4},children:[v.jsx("label",{className:"field-label",style:{marginBottom:0},children:"Service Type *"}),v.jsx(ke,{icon:Ku,className:`dropdown-arrow ${n?"rotated":""}`,style:{cursor:"pointer"},onClick:()=>r(!n)})]}),v.jsxs("div",{className:"dropdown-container",children:[v.jsx("div",{className:`dropdown-trigger ${n?"open":""}`,onClick:()=>r(!n),children:s?v.jsx("div",{className:"selected-service",children:v.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(s.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[v.jsx(ke,{icon:s.icon,style:{color:s.color},className:"service-icon"}),v.jsx("span",{className:"service-name",style:{color:s.color,fontWeight:600},children:s.name})]})}):v.jsx("span",{className:"placeholder",children:"Select a service type"})}),n&&v.jsx("div",{className:"dropdown-menu",children:Us.map(a=>v.jsx("div",{className:`dropdown-option ${(s==null?void 0:s.id)===a.id?"selected":""}`,onClick:()=>o(a),style:{backgroundColor:(s==null?void 0:s.id)===a.id?i(a.color,.1):"transparent",borderRadius:"6px",marginBottom:"4px",cursor:"pointer",padding:"2px 0"},children:v.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(a.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[v.jsx(ke,{icon:a.icon,style:{color:a.color},className:"service-icon"}),v.jsx("span",{className:"service-name",style:{color:a.color,fontWeight:600},children:a.name})]})},a.id))})]})]})},l3=({onClose:t,onAddPoint:e,coordinates:n,onCoordinatesChange:r,setIsAddingPoint:i,layerName:s="addpoints"})=>{const[o,a]=D.useState(""),[u,c]=D.useState(""),[h,f]=D.useState((n==null?void 0:n.neighborhood)||""),[m,E]=D.useState("Active"),[I,k]=D.useState(""),[R,_]=D.useState(""),[y,S]=D.useState(""),[x,O]=D.useState(""),[V,T]=D.useState(""),[g,A]=D.useState(!1),[C,b]=D.useState(null);D.useEffect(()=>{n&&(O(n.lat.toString()),T(n.lng.toString()),f(n.neighborhood||""),c(n.crossStreet||""))},[n]),D.useEffect(()=>{const Y=me=>{!(me.target instanceof Element)||me.target.closest(".dropdown-container")};return document.addEventListener("mousedown",Y),()=>{document.removeEventListener("mousedown",Y)}},[]);const N=async Y=>{Y.preventDefault(),A(!0),b(null);try{const me=Date.now(),St={type:"Feature",id:me,geometry:{type:"Point",coordinates:[parseFloat(V),parseFloat(x)]},properties:{FID:me,"Service Ty":o,"Cross Stre":u,neighbhood:h,Status:m,"Full Addre":I,"Referral S":R,Estimate:y,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}};console.log(`Adding point to layer: ${s}`),await YS(s,St),e(St),console.log("Point added successfully!"),t()}catch(me){console.error("Error adding point:",me),b(me instanceof Error?me.message:"Failed to add point")}finally{A(!1)}},P=()=>{O(""),T(""),r&&r(null),i&&i(!0)};return v.jsxs("div",{className:"header-panel add-point-panel",children:[v.jsxs("div",{className:"panel-header",children:[v.jsx("h3",{children:"Add New Service Point"}),v.jsx("button",{className:"close-btn",onClick:t,disabled:g,children:v.jsx(ke,{icon:Ni})})]}),v.jsxs("div",{className:"panel-content",children:[C&&v.jsx("div",{className:"error-message",style:{color:"#d32f2f",backgroundColor:"#ffebee",padding:"8px 12px",borderRadius:"4px",marginBottom:"16px",fontSize:"14px"},children:C}),v.jsxs("form",{className:"add-point-form",onSubmit:N,children:[v.jsxs("div",{className:"form-group coordinates-group",children:[v.jsxs("div",{className:"coords-display",children:[v.jsxs("div",{children:[v.jsx("label",{children:"Latitude"}),v.jsx("input",{type:"text",value:x,onChange:Y=>O(Y.target.value),required:!0,readOnly:!0})]}),v.jsxs("div",{children:[v.jsx("label",{children:"Longitude"}),v.jsx("input",{type:"text",value:V,onChange:Y=>T(Y.target.value),required:!0,readOnly:!0})]})]}),v.jsx("button",{type:"button",onClick:P,className:"reset-coords-btn",disabled:g,children:"Reset Location"})]}),v.jsx(a3,{selectedServiceType:o,onServiceTypeChange:a}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Cross Street"}),v.jsx("input",{type:"text",value:u,onChange:Y=>c(Y.target.value),required:!0,disabled:g})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Neighborhood"}),v.jsx("input",{type:"text",value:h,onChange:Y=>f(Y.target.value),required:!0,disabled:g})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Status"}),v.jsxs("select",{value:m,onChange:Y=>E(Y.target.value),disabled:g,children:[v.jsx("option",{value:"Active",children:"Active"}),v.jsx("option",{value:"Pending",children:"Pending"}),v.jsx("option",{value:"Complete",children:"Complete"})]})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Full Address"}),v.jsx("input",{type:"text",value:I,onChange:Y=>k(Y.target.value),disabled:g})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Referral Source"}),v.jsx("input",{type:"text",value:R,onChange:Y=>_(Y.target.value),disabled:g})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Estimate"}),v.jsx("input",{type:"text",value:y,onChange:Y=>S(Y.target.value),disabled:g})]}),v.jsx("button",{type:"submit",className:"add-point-btn",disabled:g||!o,children:g?"Adding Point...":"Add Point"})]})]})]})},u3=({onLocationSelect:t,filters:e,onFiltersChange:n,filterPanelOpen:r,setFilterPanelOpen:i,isAddingPoint:s,setIsAddingPoint:o,addPointCoordinates:a,setAddPointCoordinates:u,onAddPoint:c})=>{const[h,f]=D.useState(null),{user:m,userData:E,isAnonymous:I,signOut:k}=nl();D.useEffect(()=>{a&&f("add-point")},[a]);const R=x=>{if(x==="filter")i(!r),f(null);else if(x==="add-point"){const O=!s;o(O),f(O?"add-point":null),i(!1)}else f(h===x?null:x),i(!1),o(!1)},_=()=>{f(null),i(!1),o(!1),u(null)},y=async x=>{c?await c(x):console.log("New point to add:",x)},S=x=>{t&&t(x),_()};return v.jsxs(v.Fragment,{children:[v.jsxs("header",{className:"app-header",children:[v.jsx("div",{className:"logo-container",children:v.jsx("img",{src:JA,alt:"Neighborhood Values Logo",className:"app-logo"})}),v.jsx("div",{className:"logo-container",children:v.jsx("img",{src:ZA,alt:"Neighborhood Values Logo Text",className:"app-logo"})}),v.jsxs("div",{className:"button-box",children:[v.jsx("button",{className:h==="search"?"active":"",onClick:()=>R("search"),children:v.jsx(ke,{icon:LP})}),v.jsx("button",{className:r?"active":"",onClick:()=>R("filter"),children:v.jsx(ke,{icon:SP})}),v.jsx("button",{className:h==="login"?"active":"",onClick:()=>R("login"),children:v.jsx(ke,{icon:wP})}),(E==null?void 0:E.role)==="Admin"&&v.jsx("button",{className:h==="add-point"||s?"active":"",onClick:()=>R("add-point"),children:v.jsx(ke,{icon:DP})})]})]}),h==="search"&&v.jsx(zP,{onClose:_,onLocationSelect:S}),r&&v.jsx(n3,{onClose:()=>i(!1),onFiltersChange:n,initialFilters:e}),h==="login"&&v.jsx(r3,{onClose:_}),h==="add-point"&&v.jsx(l3,{onClose:_,onAddPoint:y,coordinates:a,onCoordinatesChange:u,setIsAddingPoint:o})]})},c3="modulepreload",d3=function(t){return"/neighborhood-value-plus/"+t},Y_={},h3=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=d3(u),u in Y_)return;Y_[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":c3,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,E)=>{f.addEventListener("load",m),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},f3=D.createContext(null);function p3(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,r=Array.isArray(t)?t[1]:t?t.y:0,i=Array.isArray(e)?e[0]:e?e.x:0,s=Array.isArray(e)?e[1]:e?e.y:0;return n===i&&r===s}function Bt(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n)if(!e.hasOwnProperty(i)||!Bt(t[i],e[i]))return!1;return!0}return!1}function m3(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}function X_(t,e){if(!t.getProjection)return;const n=t.getProjection(),r=e.getProjection();Bt(n,r)||e.setProjection(n)}function J_(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function Z_(t,e){const n=e.viewState||e;let r=!1;if("longitude"in n&&"latitude"in n){const i=t.center;t.center=new i.constructor(n.longitude,n.latitude),r=r||i!==t.center}if("zoom"in n){const i=t.zoom;t.zoom=n.zoom,r=r||i!==t.zoom}if("bearing"in n){const i=t.bearing;t.bearing=n.bearing,r=r||i!==t.bearing}if("pitch"in n){const i=t.pitch;t.pitch=n.pitch,r=r||i!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(r=!0,t.padding=n.padding),r}const g3=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function e0(t){if(!t)return null;if(typeof t=="string"||("toJS"in t&&(t=t.toJS()),!t.layers))return t;const e={};for(const r of t.layers)e[r.id]=r;const n=t.layers.map(r=>{let i=null;"interactive"in r&&(i=Object.assign({},r),delete i.interactive);const s=e[r.ref];if(s){i=i||Object.assign({},r),delete i.ref;for(const o of g3)o in s&&(i[o]=s[o])}return i||r});return{...t,layers:n}}var t0={};const n0={version:8,sources:{},layers:[]},r0={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},sh={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},i0={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},y3=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],v3=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class Ks{constructor(e,n,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=i=>{const s=this.props[i0[i.type]];s?s(i):i.type==="error"&&console.error(i.error)},this._onPointerEvent=i=>{(i.type==="mousemove"||i.type==="mouseout")&&this._updateHover(i);const s=this.props[r0[i.type]];s&&(this.props.interactiveLayerIds&&i.type!=="mouseover"&&i.type!=="mouseout"&&(i.features=this._hoveredFeatures||this._queryRenderedFeatures(i.point)),s(i),delete i.features)},this._onCameraEvent=i=>{if(!this._internalUpdate){const s=this.props[sh[i.type]];s&&s(i)}i.type in this._deferredEvents&&(this._deferredEvents[i.type]=!1)},this._MapClass=e,this.props=n,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const n=this.props;this.props=e;const r=this._updateSettings(e,n);r&&this._createShadowTransform(this._map);const i=this._updateSize(e),s=this._updateViewState(e,!0);this._updateStyle(e,n),this._updateStyleComponents(e,n),this._updateHandlers(e,n),(r||i||s&&!this._map.isMoving())&&this.redraw()}static reuse(e,n){const r=Ks.savedMaps.pop();if(!r)return null;const i=r.map,s=i.getContainer();for(n.className=s.className;s.childNodes.length>0;)n.appendChild(s.childNodes[0]);i._container=n;const o=i._resizeObserver;o&&(o.disconnect(),o.observe(n)),r.setProps({...e,styleDiffing:!1}),i.resize();const{initialViewState:a}=e;return a&&(a.bounds?i.fitBounds(a.bounds,{...a.fitBoundsOptions,duration:0}):r._updateViewState(a,!1)),i.isStyleLoaded()?i.fire("load"):i.once("styledata",()=>i.fire("load")),i._update(),r}_initialize(e){const{props:n}=this,{mapStyle:r=n0}=n,i={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||_3()||null,container:e,style:e0(r)},s=i.initialViewState||i.viewState||i;if(Object.assign(i,{center:[s.longitude||0,s.latitude||0],zoom:s.zoom||0,pitch:s.pitch||0,bearing:s.bearing||0}),n.gl){const h=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=h,n.gl)}const o=new this._MapClass(i);s.padding&&o.setPadding(s.padding),n.cursor&&(o.getCanvas().style.cursor=n.cursor),this._createShadowTransform(o);const a=o._render;o._render=h=>{this._inRender=!0,a.call(o,h),this._inRender=!1};const u=o._renderTaskQueue.run;o._renderTaskQueue.run=h=>{u.call(o._renderTaskQueue,h),this._onBeforeRepaint()},o.on("render",()=>this._onAfterRepaint());const c=o.fire;o.fire=this._fireEvent.bind(this,c),o.on("resize",()=>{this._renderTransform.resize(o.transform.width,o.transform.height)}),o.on("styledata",()=>{this._updateStyleComponents(this.props,{}),X_(o.transform,this._renderTransform)}),o.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const h in r0)o.on(h,this._onPointerEvent);for(const h in sh)o.on(h,this._onCameraEvent);for(const h in i0)o.on(h,this._onEvent);this._map=o}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),Ks.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const n=m3(e.transform);e.painter.transform=n,this._renderTransform=n}_updateSize(e){const{viewState:n}=e;if(n){const r=this._map;if(n.width!==r.transform.width||n.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(e,n){if(this._internalUpdate)return!1;const r=this._map,i=this._renderTransform,{zoom:s,pitch:o,bearing:a}=i,u=r.isMoving();u&&(i.cameraElevationReference="sea");const c=Z_(i,{...J_(r.transform),...e});if(u&&(i.cameraElevationReference="ground"),c&&n){const h=this._deferredEvents;h.move=!0,h.zoom||(h.zoom=s!==i.zoom),h.rotate||(h.rotate=a!==i.bearing),h.pitch||(h.pitch=o!==i.pitch)}return u||Z_(r.transform,e),c}_updateSettings(e,n){const r=this._map;let i=!1;for(const s of y3)if(s in e&&!Bt(e[s],n[s])){i=!0;const o=r[`set${s[0].toUpperCase()}${s.slice(1)}`];o==null||o.call(r,e[s])}return i}_updateStyle(e,n){if(e.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==n.mapStyle){const{mapStyle:r=n0,styleDiffing:i=!0}=e,s={diff:i};return"localIdeographFontFamily"in e&&(s.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(e0(r),s),!0}return!1}_updateStyleComponents(e,n){const r=this._map;let i=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!Bt(e.light,n.light)&&(i=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!Bt(e.fog,n.fog)&&(i=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!Bt(e.terrain,n.terrain)&&(!e.terrain||r.getSource(e.terrain.source))&&(i=!0,r.setTerrain(e.terrain))),i}_updateHandlers(e,n){var r,i;const s=this._map;let o=!1;for(const a of v3){const u=(r=e[a])!==null&&r!==void 0?r:!0,c=(i=n[a])!==null&&i!==void 0?i:!0;Bt(u,c)||(o=!0,u?s[a].enable(u):s[a].disable())}return o}_queryRenderedFeatures(e){const n=this._map,r=n.transform,{interactiveLayerIds:i=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(e,{layers:i.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=r}}_updateHover(e){var n;const{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){const s=e.type,o=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,a=this._queryRenderedFeatures(e.point),u=a.length>0;!u&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,u&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=s}else this._hoveredFeatures=null}_fireEvent(e,n,r){const i=this._map,s=i.transform,o=typeof n=="string"?n:n.type;return o==="move"&&this._updateViewState(this.props,!1),o in sh&&(typeof n=="object"&&(n.viewState=J_(s)),this._map.isMoving())?(i.transform=this._renderTransform,e.call(i,n,r),i.transform=s,i):(e.call(i,n,r),i)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const r in this._deferredEvents)this._deferredEvents[r]&&e.fire(r);this._internalUpdate=!1;const n=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{X_(this._renderTransform,n),e.transform=n}}}Ks.savedMaps=[];function _3(){let t=null;if(typeof location<"u"){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||t0.MapboxAccessToken}catch{}try{t=t||t0.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return t}const w3=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function E3(t){if(!t)return null;const e=t.map,n={getMap:()=>e,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:r=>{const i=e.transform;e.transform=t.transform;const s=e.project(r);return e.transform=i,s},unproject:r=>{const i=e.transform;e.transform=t.transform;const s=e.unproject(r);return e.transform=i,s},queryTerrainElevation:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryTerrainElevation(r,i);return e.transform=s,o},queryRenderedFeatures:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryRenderedFeatures(r,i);return e.transform=s,o}};for(const r of T3(e))!(r in n)&&!w3.includes(r)&&(n[r]=e[r].bind(e));return n}function T3(t){const e=new Set;let n=t;for(;n;){for(const r of Object.getOwnPropertyNames(n))r[0]!=="_"&&typeof t[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&e.add(r);n=Object.getPrototypeOf(n)}return Array.from(e)}const S3=typeof document<"u"?D.useLayoutEffect:D.useEffect,I3=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function A3(t,e){for(const r of I3)r in e&&(t[r]=e[r]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=e;n&&t.getRTLTextPluginStatus&&t.getRTLTextPluginStatus()==="unavailable"&&t.setRTLTextPlugin(n,r=>{r&&console.error(r)},!0)}const oo=D.createContext(null);function C3(t,e,n){const r=D.useContext(f3),[i,s]=D.useState(null),o=D.useRef(),{current:a}=D.useRef({mapLib:null,map:null});D.useEffect(()=>{const h=t.mapLib;let f=!0,m;return Promise.resolve(h||n).then(E=>{if(!f)return;if(!E)throw new Error("Invalid mapLib");const I="Map"in E?E:E.default;if(!I.Map)throw new Error("Invalid mapLib");if(A3(I,t),!I.supported||I.supported(t))t.reuseMaps&&(m=Ks.reuse(t,o.current)),m||(m=new Ks(I.Map,t,o.current)),a.map=E3(m),a.mapLib=I,s(m),r==null||r.onMapMount(a.map,t.id);else throw new Error("Map is not supported by this browser")}).catch(E=>{const{onError:I}=t;I?I({type:"error",target:null,originalEvent:null,error:E}):console.error(E)}),()=>{f=!1,m&&(r==null||r.onMapUnmount(t.id),t.reuseMaps?m.recycle():m.destroy())}},[]),S3(()=>{i&&i.setProps(t)}),D.useImperativeHandle(e,()=>a.map,[i]);const u=D.useMemo(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]),c={height:"100%"};return D.createElement("div",{id:t.id,ref:o,style:u},i&&D.createElement(oo.Provider,{value:a},D.createElement("div",{"mapboxgl-children":"",style:c},t.children)))}const k3=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function Wi(t,e){if(!t||!e)return;const n=t.style;for(const r in e){const i=e[r];Number.isFinite(i)&&!k3.test(r)?n[r]=`${i}px`:n[r]=i}}function P3(t,e){const{map:n,mapLib:r}=D.useContext(oo),i=D.useRef({props:t});i.current.props=t;const s=D.useMemo(()=>{let k=!1;D.Children.forEach(t.children,y=>{y&&(k=!0)});const R={...t,element:k?document.createElement("div"):null},_=new r.Marker(R);return _.setLngLat([t.longitude,t.latitude]),_.getElement().addEventListener("click",y=>{var S,x;(x=(S=i.current.props).onClick)===null||x===void 0||x.call(S,{type:"click",target:_,originalEvent:y})}),_.on("dragstart",y=>{var S,x;const O=y;O.lngLat=s.getLngLat(),(x=(S=i.current.props).onDragStart)===null||x===void 0||x.call(S,O)}),_.on("drag",y=>{var S,x;const O=y;O.lngLat=s.getLngLat(),(x=(S=i.current.props).onDrag)===null||x===void 0||x.call(S,O)}),_.on("dragend",y=>{var S,x;const O=y;O.lngLat=s.getLngLat(),(x=(S=i.current.props).onDragEnd)===null||x===void 0||x.call(S,O)}),_},[]);D.useEffect(()=>(s.addTo(n.getMap()),()=>{s.remove()}),[]);const{longitude:o,latitude:a,offset:u,style:c,draggable:h=!1,popup:f=null,rotation:m=0,rotationAlignment:E="auto",pitchAlignment:I="auto"}=t;return D.useEffect(()=>{Wi(s.getElement(),c)},[c]),D.useImperativeHandle(e,()=>s,[]),(s.getLngLat().lng!==o||s.getLngLat().lat!==a)&&s.setLngLat([o,a]),u&&!p3(s.getOffset(),u)&&s.setOffset(u),s.isDraggable()!==h&&s.setDraggable(h),s.getRotation()!==m&&s.setRotation(m),s.getRotationAlignment()!==E&&s.setRotationAlignment(E),s.getPitchAlignment()!==I&&s.setPitchAlignment(I),s.getPopup()!==f&&s.setPopup(f),$p.createPortal(t.children,s.getElement())}const R3=D.memo(D.forwardRef(P3));function s0(t){return new Set(t?t.trim().split(/\s+/):[])}function x3(t,e){const{map:n,mapLib:r}=D.useContext(oo),i=D.useMemo(()=>document.createElement("div"),[]),s=D.useRef({props:t});s.current.props=t;const o=D.useMemo(()=>{const a={...t},u=new r.Popup(a);return u.setLngLat([t.longitude,t.latitude]),u.once("open",c=>{var h,f;(f=(h=s.current.props).onOpen)===null||f===void 0||f.call(h,c)}),u},[]);if(D.useEffect(()=>{const a=u=>{var c,h;(h=(c=s.current.props).onClose)===null||h===void 0||h.call(c,u)};return o.on("close",a),o.setDOMContent(i).addTo(n.getMap()),()=>{o.off("close",a),o.isOpen()&&o.remove()}},[]),D.useEffect(()=>{Wi(o.getElement(),t.style)},[t.style]),D.useImperativeHandle(e,()=>o,[]),o.isOpen()&&((o.getLngLat().lng!==t.longitude||o.getLngLat().lat!==t.latitude)&&o.setLngLat([t.longitude,t.latitude]),t.offset&&!Bt(o.options.offset,t.offset)&&o.setOffset(t.offset),(o.options.anchor!==t.anchor||o.options.maxWidth!==t.maxWidth)&&(o.options.anchor=t.anchor,o.setMaxWidth(t.maxWidth)),o.options.className!==t.className)){const a=s0(o.options.className),u=s0(t.className);for(const c of a)u.has(c)||o.removeClassName(c);for(const c of u)a.has(c)||o.addClassName(c);o.options.className=t.className}return $p.createPortal(t.children,i)}D.memo(D.forwardRef(x3));function il(t,e,n,r){const i=D.useContext(oo),s=D.useMemo(()=>t(i),[]);return D.useEffect(()=>{const o=e,a=null,u=typeof e=="function"?e:null,{map:c}=i;return c.hasControl(s)||(c.addControl(s,o==null?void 0:o.position),a&&a(i)),()=>{u&&u(i),c.hasControl(s)&&c.removeControl(s)}},[]),s}function b3(t){const e=il(({mapLib:n})=>new n.AttributionControl(t),{position:t.position});return D.useEffect(()=>{Wi(e._container,t.style)},[t.style]),null}D.memo(b3);function N3(t){const e=il(({mapLib:n})=>new n.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)}),{position:t.position});return D.useEffect(()=>{Wi(e._controlContainer,t.style)},[t.style]),null}D.memo(N3);function O3(t,e){const n=D.useRef({props:t}),r=il(({mapLib:i})=>{const s=new i.GeolocateControl(t),o=s._setupUI;return s._setupUI=a=>{s._container.hasChildNodes()||o(a)},s.on("geolocate",a=>{var u,c;(c=(u=n.current.props).onGeolocate)===null||c===void 0||c.call(u,a)}),s.on("error",a=>{var u,c;(c=(u=n.current.props).onError)===null||c===void 0||c.call(u,a)}),s.on("outofmaxbounds",a=>{var u,c;(c=(u=n.current.props).onOutOfMaxBounds)===null||c===void 0||c.call(u,a)}),s.on("trackuserlocationstart",a=>{var u,c;(c=(u=n.current.props).onTrackUserLocationStart)===null||c===void 0||c.call(u,a)}),s.on("trackuserlocationend",a=>{var u,c;(c=(u=n.current.props).onTrackUserLocationEnd)===null||c===void 0||c.call(u,a)}),s},{position:t.position});return n.current.props=t,D.useImperativeHandle(e,()=>r,[]),D.useEffect(()=>{Wi(r._container,t.style)},[t.style]),null}D.memo(D.forwardRef(O3));function L3(t){const e=il(({mapLib:n})=>new n.NavigationControl(t),{position:t.position});return D.useEffect(()=>{Wi(e._container,t.style)},[t.style]),null}const D3=D.memo(L3);function M3(t){const e=il(({mapLib:s})=>new s.ScaleControl(t),{position:t.position}),n=D.useRef(t),r=n.current;n.current=t;const{style:i}=t;return t.maxWidth!==void 0&&t.maxWidth!==r.maxWidth&&(e.options.maxWidth=t.maxWidth),t.unit!==void 0&&t.unit!==r.unit&&e.setUnit(t.unit),D.useEffect(()=>{Wi(e._container,i)},[i]),null}D.memo(M3);function hc(t,e){if(!t)throw new Error(e)}function V3(t,e,n,r){if(hc(n.id===r.id,"layer id changed"),hc(n.type===r.type,"layer type changed"),n.type==="custom"||r.type==="custom")return;const{layout:i={},paint:s={},filter:o,minzoom:a,maxzoom:u,beforeId:c}=n;if(c!==r.beforeId&&t.moveLayer(e,c),i!==r.layout){const h=r.layout||{};for(const f in i)Bt(i[f],h[f])||t.setLayoutProperty(e,f,i[f]);for(const f in h)i.hasOwnProperty(f)||t.setLayoutProperty(e,f,void 0)}if(s!==r.paint){const h=r.paint||{};for(const f in s)Bt(s[f],h[f])||t.setPaintProperty(e,f,s[f]);for(const f in h)s.hasOwnProperty(f)||t.setPaintProperty(e,f,void 0)}Bt(o,r.filter)||t.setFilter(e,o),(a!==r.minzoom||u!==r.maxzoom)&&t.setLayerZoomRange(e,a,u)}function F3(t,e,n){if(t.style&&t.style._loaded&&(!("source"in n)||t.getSource(n.source))){const r={...n,id:e};delete r.beforeId,t.addLayer(r,n.beforeId)}}let j3=0;function U3(t){const e=D.useContext(oo).map.getMap(),n=D.useRef(t),[,r]=D.useState(0),i=D.useMemo(()=>t.id||`jsx-layer-${j3++}`,[]);if(D.useEffect(()=>{if(e){const o=()=>r(a=>a+1);return e.on("styledata",o),o(),()=>{e.off("styledata",o),e.style&&e.style._loaded&&e.getLayer(i)&&e.removeLayer(i)}}},[e]),e&&e.style&&e.getLayer(i))try{V3(e,i,t,n.current)}catch(o){console.warn(o)}else F3(e,i,t);return n.current=t,null}let z3=0;function B3(t,e,n){if(t.style&&t.style._loaded){const r={...n};return delete r.id,delete r.children,t.addSource(e,r),t.getSource(e)}return null}function $3(t,e,n){hc(e.id===n.id,"source id changed"),hc(e.type===n.type,"source type changed");let r="",i=0;for(const o in e)o!=="children"&&o!=="id"&&!Bt(n[o],e[o])&&(r=o,i++);if(!i)return;const s=e.type;if(s==="geojson")t.setData(e.data);else if(s==="image")t.updateImage({url:e.url,coordinates:e.coordinates});else if("setCoordinates"in t&&i===1&&r==="coordinates")t.setCoordinates(e.coordinates);else if("setUrl"in t)switch(r){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}function W3(t){const e=D.useContext(oo).map.getMap(),n=D.useRef(t),[,r]=D.useState(0),i=D.useMemo(()=>t.id||`jsx-source-${z3++}`,[]);D.useEffect(()=>{if(e){const o=()=>setTimeout(()=>r(a=>a+1),0);return e.on("styledata",o),o(),()=>{var a;if(e.off("styledata",o),e.style&&e.style._loaded&&e.getSource(i)){const u=(a=e.getStyle())===null||a===void 0?void 0:a.layers;if(u)for(const c of u)c.source===i&&e.removeLayer(c.id);e.removeSource(i)}}}},[e]);let s=e&&e.style&&e.getSource(i);return s?$3(s,t,n.current):s=B3(e,i,t),n.current=t,s&&D.Children.map(t.children,o=>o&&D.cloneElement(o,{source:i}))||null}const H3=h3(()=>import("./mapbox-gl-B4xo19iY.js").then(t=>t.m),[]),q3=D.forwardRef(function(e,n){return C3(e,n,H3)}),oh=R3,G3=D3,xo=U3,Yl=W3;var Ot=63710088e-1,JS={centimeters:Ot*100,centimetres:Ot*100,degrees:360/(2*Math.PI),feet:Ot*3.28084,inches:Ot*39.37,kilometers:Ot/1e3,kilometres:Ot/1e3,meters:Ot,metres:Ot,miles:Ot/1609.344,millimeters:Ot*1e3,millimetres:Ot*1e3,nauticalmiles:Ot/1852,radians:1,yards:Ot*1.0936};function Qs(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function wi(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!a0(t[0])||!a0(t[1]))throw new Error("coordinates must contain numbers");return Qs({type:"Point",coordinates:t},e,n)}function Yc(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Qs({type:"LineString",coordinates:t},e,n)}function ZS(t,e="kilometers"){const n=JS[e];if(!n)throw new Error(e+" units is invalid");return t*n}function K3(t,e="kilometers"){const n=JS[e];if(!n)throw new Error(e+" units is invalid");return t/n}function o0(t){return t%(2*Math.PI)*180/Math.PI}function ws(t){return t%360*Math.PI/180}function eI(t,e="kilometers",n="kilometers"){if(!(t>=0))throw new Error("length must be a positive number");return ZS(K3(t,e),n)}function a0(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Qn(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Q3(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function l0(t,e,n){if(!t)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!t||t.type!=="Feature"||!t.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.geometry.type)}function Y3(t){return t.type==="Feature"?t.geometry:t}function pi(t,e,n={}){var r=Qn(t),i=Qn(e),s=ws(i[1]-r[1]),o=ws(i[0]-r[0]),a=ws(r[1]),u=ws(i[1]),c=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(a)*Math.cos(u);return ZS(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),n.units)}function eg(t,e,n){if(t!==null)for(var r,i,s,o,a,u,c,h=0,f=0,m,E=t.type,I=E==="FeatureCollection",k=E==="Feature",R=I?t.features.length:1,_=0;_<R;_++){c=I?t.features[_].geometry:k?t.geometry:t,m=c?c.type==="GeometryCollection":!1,a=m?c.geometries.length:1;for(var y=0;y<a;y++){var S=0,x=0;if(o=m?c.geometries[y]:c,o!==null){u=o.coordinates;var O=o.type;switch(h=0,O){case null:break;case"Point":if(e(u,f,_,S,x)===!1)return!1;f++,S++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],f,_,S,x)===!1)return!1;f++,O==="MultiPoint"&&S++}O==="LineString"&&S++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],f,_,S,x)===!1)return!1;f++}O==="MultiLineString"&&S++,O==="Polygon"&&x++}O==="Polygon"&&S++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(x=0,i=0;i<u[r].length;i++){for(s=0;s<u[r][i].length-h;s++){if(e(u[r][i][s],f,_,S,x)===!1)return!1;f++}x++}S++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(eg(o.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function X3(t,e){var n,r,i,s,o,a,u,c,h,f,m=0,E=t.type==="FeatureCollection",I=t.type==="Feature",k=E?t.features.length:1;for(n=0;n<k;n++){for(a=E?t.features[n].geometry:I?t.geometry:t,c=E?t.features[n].properties:I?t.properties:{},h=E?t.features[n].bbox:I?t.bbox:void 0,f=E?t.features[n].id:I?t.id:void 0,u=a?a.type==="GeometryCollection":!1,o=u?a.geometries.length:1,i=0;i<o;i++){if(s=u?a.geometries[i]:a,s===null){if(e(null,m,c,h,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,m,c,h,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],m,c,h,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function tI(t,e){X3(t,function(n,r,i,s,o){var a=n===null?null:n.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return e(Qs(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var u;switch(a){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var c=0;c<n.coordinates.length;c++){var h=n.coordinates[c],f={type:u,coordinates:h};if(e(Qs(f,i),r,c)===!1)return!1}})}function J3(t,e){tI(t,function(n,r,i){var s=0;if(n.geometry){var o=n.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var a,u=0,c=0,h=0;if(eg(n,function(f,m,E,I,k){if(a===void 0||r>u||I>c||k>h){a=f,u=r,c=I,h=k,s=0;return}var R=Yc([a,f],n.properties);if(e(R,r,i,k,s)===!1)return!1;s++,a=f})===!1)return!1}}})}function Z3(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return eg(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}var eM=Z3;const Jn=11102230246251565e-32,gt=134217729,tM=(3+8*Jn)*Jn;function ah(t,e,n,r,i){let s,o,a,u,c=e[0],h=r[0],f=0,m=0;h>c==h>-c?(s=c,c=e[++f]):(s=h,h=r[++m]);let E=0;if(f<t&&m<n)for(h>c==h>-c?(o=c+s,a=s-(o-c),c=e[++f]):(o=h+s,a=s-(o-h),h=r[++m]),s=o,a!==0&&(i[E++]=a);f<t&&m<n;)h>c==h>-c?(o=s+c,u=o-s,a=s-(o-u)+(c-u),c=e[++f]):(o=s+h,u=o-s,a=s-(o-u)+(h-u),h=r[++m]),s=o,a!==0&&(i[E++]=a);for(;f<t;)o=s+c,u=o-s,a=s-(o-u)+(c-u),c=e[++f],s=o,a!==0&&(i[E++]=a);for(;m<n;)o=s+h,u=o-s,a=s-(o-u)+(h-u),h=r[++m],s=o,a!==0&&(i[E++]=a);return(s!==0||E===0)&&(i[E++]=s),E}function nM(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function sl(t){return new Float64Array(t)}const rM=(3+16*Jn)*Jn,iM=(2+12*Jn)*Jn,sM=(9+64*Jn)*Jn*Jn,ts=sl(4),u0=sl(8),c0=sl(12),d0=sl(16),Ct=sl(4);function oM(t,e,n,r,i,s,o){let a,u,c,h,f,m,E,I,k,R,_,y,S,x,O,V,T,g;const A=t-i,C=n-i,b=e-s,N=r-s;x=A*N,m=gt*A,E=m-(m-A),I=A-E,m=gt*N,k=m-(m-N),R=N-k,O=I*R-(x-E*k-I*k-E*R),V=b*C,m=gt*b,E=m-(m-b),I=b-E,m=gt*C,k=m-(m-C),R=C-k,T=I*R-(V-E*k-I*k-E*R),_=O-T,f=O-_,ts[0]=O-(_+f)+(f-T),y=x+_,f=y-x,S=x-(y-f)+(_-f),_=S-V,f=S-_,ts[1]=S-(_+f)+(f-V),g=y+_,f=g-y,ts[2]=y-(g-f)+(_-f),ts[3]=g;let P=nM(4,ts),Y=iM*o;if(P>=Y||-P>=Y||(f=t-A,a=t-(A+f)+(f-i),f=n-C,c=n-(C+f)+(f-i),f=e-b,u=e-(b+f)+(f-s),f=r-N,h=r-(N+f)+(f-s),a===0&&u===0&&c===0&&h===0)||(Y=sM*o+tM*Math.abs(P),P+=A*h+N*a-(b*c+C*u),P>=Y||-P>=Y))return P;x=a*N,m=gt*a,E=m-(m-a),I=a-E,m=gt*N,k=m-(m-N),R=N-k,O=I*R-(x-E*k-I*k-E*R),V=u*C,m=gt*u,E=m-(m-u),I=u-E,m=gt*C,k=m-(m-C),R=C-k,T=I*R-(V-E*k-I*k-E*R),_=O-T,f=O-_,Ct[0]=O-(_+f)+(f-T),y=x+_,f=y-x,S=x-(y-f)+(_-f),_=S-V,f=S-_,Ct[1]=S-(_+f)+(f-V),g=y+_,f=g-y,Ct[2]=y-(g-f)+(_-f),Ct[3]=g;const me=ah(4,ts,4,Ct,u0);x=A*h,m=gt*A,E=m-(m-A),I=A-E,m=gt*h,k=m-(m-h),R=h-k,O=I*R-(x-E*k-I*k-E*R),V=b*c,m=gt*b,E=m-(m-b),I=b-E,m=gt*c,k=m-(m-c),R=c-k,T=I*R-(V-E*k-I*k-E*R),_=O-T,f=O-_,Ct[0]=O-(_+f)+(f-T),y=x+_,f=y-x,S=x-(y-f)+(_-f),_=S-V,f=S-_,Ct[1]=S-(_+f)+(f-V),g=y+_,f=g-y,Ct[2]=y-(g-f)+(_-f),Ct[3]=g;const St=ah(me,u0,4,Ct,c0);x=a*h,m=gt*a,E=m-(m-a),I=a-E,m=gt*h,k=m-(m-h),R=h-k,O=I*R-(x-E*k-I*k-E*R),V=u*c,m=gt*u,E=m-(m-u),I=u-E,m=gt*c,k=m-(m-c),R=c-k,T=I*R-(V-E*k-I*k-E*R),_=O-T,f=O-_,Ct[0]=O-(_+f)+(f-T),y=x+_,f=y-x,S=x-(y-f)+(_-f),_=S-V,f=S-_,Ct[1]=S-(_+f)+(f-V),g=y+_,f=g-y,Ct[2]=y-(g-f)+(_-f),Ct[3]=g;const ce=ah(St,c0,4,Ct,d0);return d0[ce-1]}function aM(t,e,n,r,i,s){const o=(e-s)*(n-i),a=(t-i)*(r-s),u=o-a,c=Math.abs(o+a);return Math.abs(u)>=rM*c?u:-oM(t,e,n,r,i,s,c)}function lM(t,e){var n,r,i=0,s,o,a,u,c,h,f,m=t[0],E=t[1],I=e.length;for(n=0;n<I;n++){r=0;var k=e[n],R=k.length-1;if(h=k[0],h[0]!==k[R][0]&&h[1]!==k[R][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-m,a=h[1]-E,r;r<R;r++){if(f=k[r+1],u=f[0]-m,c=f[1]-E,a===0&&c===0){if(u<=0&&o>=0||o<=0&&u>=0)return 0}else if(c>=0&&a<=0||c<=0&&a>=0){if(s=aM(o,u,a,c,0,0),s===0)return 0;(s>0&&c>0&&a<=0||s<0&&c<=0&&a>0)&&i++}h=f,a=c,o=u}}return i%2!==0}function uM(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Qn(t),i=Y3(e),s=i.type,o=e.bbox;let a=i.coordinates;if(o&&cM(r,o)===!1)return!1;s==="Polygon"&&(a=[a]);let u=!1;for(var c=0;c<a.length;++c){const h=lM(r,a[c]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function cM(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}var dM=Object.defineProperty,hM=Object.defineProperties,fM=Object.getOwnPropertyDescriptors,h0=Object.getOwnPropertySymbols,pM=Object.prototype.hasOwnProperty,mM=Object.prototype.propertyIsEnumerable,f0=(t,e,n)=>e in t?dM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p0=(t,e)=>{for(var n in e||(e={}))pM.call(e,n)&&f0(t,n,e[n]);if(h0)for(var n of h0(e))mM.call(e,n)&&f0(t,n,e[n]);return t},m0=(t,e)=>hM(t,fM(e));function gM(t,e,n={}){if(!t||!e)throw new Error("lines and pt are required arguments");const r=Qn(e);let i=wi([1/0,1/0],{dist:1/0,index:-1,multiFeatureIndex:-1,location:-1}),s=0;return tI(t,function(o,a,u){const c=Q3(o);for(let h=0;h<c.length-1;h++){const f=wi(c[h]);f.properties.dist=pi(e,f,n);const m=Qn(f),E=wi(c[h+1]);E.properties.dist=pi(e,E,n);const I=Qn(E),k=pi(f,E,n);let R,_;m[0]===r[0]&&m[1]===r[1]?[R,,_]=[m,void 0,!1]:I[0]===r[0]&&I[1]===r[1]?[R,,_]=[I,void 0,!0]:[R,,_]=_M(f.geometry.coordinates,E.geometry.coordinates,Qn(e));let y;R&&(y=wi(R,{dist:pi(e,R,n),multiFeatureIndex:u,location:s+pi(f,R,n)})),y&&y.properties.dist<i.properties.dist&&(i=m0(p0({},y),{properties:m0(p0({},y.properties),{index:_?h+1:h})})),s+=k}}),i}function yM(t,e){const[n,r,i]=t,[s,o,a]=e;return n*s+r*o+i*a}function vM(t,e){const[n,r,i]=t,[s,o,a]=e;return[r*a-i*o,i*s-n*a,n*o-r*s]}function g0(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function ui(t,e){const n=yM(t,e)/(g0(t)*g0(e));return Math.acos(Math.min(Math.max(n,-1),1))}function lh(t){const e=ws(t[1]),n=ws(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function ci(t){const[e,n,r]=t,i=o0(Math.asin(r));return[o0(Math.atan2(n,e)),i]}function _M(t,e,n){const r=lh(t),i=lh(e),s=lh(n),[o,a,u]=s,[c,h,f]=vM(r,i),m=h*u-f*a,E=f*o-c*u,I=c*a-h*o,k=I*h-E*f,R=m*f-I*c,_=E*c-m*h,y=1/Math.sqrt(Math.pow(k,2)+Math.pow(R,2)+Math.pow(_,2)),S=[k*y,R*y,_*y],x=[-1*k*y,-1*R*y,-1*_*y],O=ui(r,i),V=ui(r,S),T=ui(i,S),g=ui(r,x),A=ui(i,x);let C;return V<g&&V<A||T<g&&T<A?C=S:C=x,ui(r,C)>O||ui(i,C)>O?pi(ci(C),ci(r))<=pi(ci(C),ci(i))?[ci(r),!0,!1]:[ci(i),!1,!0]:[ci(C),!1,!1]}function uh(t,e,n={}){const r=Qn(t),i=Qn(e);i[0]+=i[0]-r[0]>180?-360:r[0]-i[0]>180?360:0;const s=wM(r,i);return eI(s,"meters",n.units)}function wM(t,e,n){n=n===void 0?Ot:Number(n);const r=n,i=t[1]*Math.PI/180,s=e[1]*Math.PI/180,o=s-i;let a=Math.abs(e[0]-t[0])*Math.PI/180;a>Math.PI&&(a-=2*Math.PI);const u=Math.log(Math.tan(s/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),c=Math.abs(u)>1e-11?o/u:Math.cos(i);return Math.sqrt(o*o+c*c*a*a)*r}function y0(t,e,n={}){var r,i;const s=(r=n.method)!=null?r:"geodesic",o=(i=n.units)!=null?i:"kilometers";if(!t)throw new Error("pt is required");if(Array.isArray(t)?t=wi(t):t.type==="Point"?t=Qs(t):l0(t,"Point","point"),!e)throw new Error("line is required");Array.isArray(e)?e=Yc(e):e.type==="LineString"?e=Qs(e):l0(e,"LineString","line");let a=1/0;const u=t.geometry.coordinates;return J3(e,c=>{if(c){const h=c.geometry.coordinates[0],f=c.geometry.coordinates[1],m=EM(u,h,f,{method:s});m<a&&(a=m)}}),eI(a,"degrees",o)}function EM(t,e,n,r){if(r.method==="geodesic")return gM(Yc([e,n]).geometry,t,{units:"degrees"}).properties.dist;const i=[n[0]-e[0],n[1]-e[1]],s=[t[0]-e[0],t[1]-e[1]],o=v0(s,i);if(o<=0)return uh(t,e,{units:"degrees"});const a=v0(i,i);if(a<=o)return uh(t,n,{units:"degrees"});const u=o/a,c=[e[0]+u*i[0],e[1]+u*i[1]];return uh(t,c,{units:"degrees"})}function v0(t,e){return t[0]*e[0]+t[1]*e[1]}const TM=({title:t,name:e,crossStreet:n,instagram:r,logoUrl:i,onClose:s,isAdmin:o=!1,sponsors:a=[],currentFeaturedId:u=null,onSetFeatured:c,loading:h=!1})=>{const[f,m]=D.useState(u||""),[E,I]=D.useState(!1),[k,R]=D.useState(null),_=S=>{m(S.target.value),R(null)},y=async()=>{if(!(!f||!c)){I(!0),R(null);try{await c(f)}catch{R("Failed to update featured sponsor.")}finally{I(!1)}}};return v.jsxs("div",{className:"sponsor-popup",style:{maxWidth:320,minWidth:0,width:"100%"},children:[v.jsxs("div",{className:"sponsor-popup-header",children:[v.jsx("h2",{className:"sponsor-popup-header-text",children:t}),v.jsx("button",{onClick:s,className:"sponsor-popup-close","aria-label":"Close",children:"×"})]}),v.jsxs("div",{className:"sponsor-popup-content",children:[i&&v.jsx("a",{href:r,target:"_blank",className:"sponsor-popup-link",rel:"noopener noreferrer",children:v.jsx("img",{src:i,alt:"Sponsor Logo",className:"sponsor-popup-logo"})}),v.jsxs("div",{className:"sponsor-popup-info",children:[v.jsx("h3",{className:"sponsor-popup-title",children:e}),v.jsx("p",{className:"sponsor-popup-location",children:n})]}),v.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"sponsor-popup-instagram"})]}),o&&a.length>0&&v.jsxs("div",{style:{marginTop:32,width:"100%",maxWidth:"300px",padding:"10px"},children:[v.jsx("hr",{style:{border:"none",borderTop:"1.5px solid #e5e7eb",margin:"18px 0 16px 0"}}),v.jsx("label",{htmlFor:"featured-sponsor-select",style:{fontWeight:600,color:"#324f4f",fontSize:14,marginBottom:6,display:"block"},children:"Set Featured Sponsor"}),v.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[v.jsxs("select",{id:"featured-sponsor-select",value:f,onChange:_,disabled:h||E,style:{flex:1,padding:"8px 12px",border:"1.5px solid #e5e7eb",borderRadius:6,fontSize:15,background:"#f9fafb",color:"#324f4f",outline:"none",minWidth:0},children:[v.jsx("option",{value:"",children:"-- Select Sponsor --"}),a.map(S=>{var x,O,V,T,g,A,C;return v.jsx("option",{value:((O=(x=S.properties)==null?void 0:x.OBJECTID)==null?void 0:O.toString())||((V=S.properties)==null?void 0:V.Name),children:(T=S.properties)==null?void 0:T.Name},((A=(g=S.properties)==null?void 0:g.OBJECTID)==null?void 0:A.toString())||((C=S.properties)==null?void 0:C.Name))})]}),v.jsx("button",{onClick:y,disabled:h||E||!f,style:{background:"#324f4f",color:"white",border:"none",borderRadius:6,padding:"8px 16px",fontWeight:600,fontSize:15,cursor:h||E||!f?"not-allowed":"pointer",transition:"background 0.2s",minWidth:100},children:E?"Saving...":"Set Featured"})]}),k&&v.jsx("div",{style:{color:"red",marginTop:8,fontSize:13},children:k})]})]})},SM=Qc,IM=({jobType:t,location:e,status:n,fullAddress:r,referralSource:i,estimate:s,onClose:o,onEdit:a,feature:u,onStatusUpdate:c})=>{var V;const{userData:h}=nl(),f=(h==null?void 0:h.role)==="Admin",E=(h==null?void 0:h.role)==="Contractor"&&h.contractorType&&t&&((V=SM[h.contractorType])==null?void 0:V.includes(t)),[I,k]=D.useState(n||""),[R,_]=D.useState(!1),[y,S]=D.useState(null);Va.useEffect(()=>{console.log("[PointPopup] feature on mount:",u),u&&console.log("[PointPopup] feature.id on mount:",u.id)},[u]);const x=T=>{k(T.target.value),S(null)},O=async()=>{if(!u)return;_(!0),S(null);let T={...u,properties:{...u.properties,Status:I}};!T.id&&u.properties&&u.properties.FID&&(T.id=u.properties.FID),console.log("[PointPopup] handleSaveStatus: feature:",T),console.log("[PointPopup] handleSaveStatus: feature.id:",T.id);try{await Zm("addpoints",T),c&&c(I),_(!1),o()}catch{S("Failed to update status."),_(!1)}};return v.jsxs("div",{className:"point-popup",children:[v.jsxs("div",{className:"point-popup-header",children:[v.jsx("h3",{className:"point-popup-title",children:"Service Point Details"}),v.jsx("button",{className:"point-popup-close",onClick:o,onMouseEnter:T=>{T.currentTarget.style.backgroundColor="#f3f4f6"},onMouseLeave:T=>{T.currentTarget.style.backgroundColor="transparent"},children:"×"})]}),v.jsxs("div",{className:"point-popup-content",children:[v.jsxs("div",{className:"point-popup-row",children:[v.jsxs("div",{children:[v.jsx("div",{className:"point-popup-label",children:"Job Type"}),v.jsx("div",{className:"point-popup-value",children:t||"Not specified"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"point-popup-label",children:"Location"}),v.jsx("div",{className:"point-popup-value",children:e||"Not specified"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"point-popup-label",children:"Status"}),E?v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[v.jsxs("select",{value:I,onChange:x,className:"point-popup-status-select",children:[v.jsx("option",{value:"Active",children:"Active"}),v.jsx("option",{value:"Pending",children:"Pending"}),v.jsx("option",{value:"Complete",children:"Complete"})]}),v.jsx("button",{className:"edit-button",style:{minWidth:80},onClick:O,disabled:R,children:R?"Saving...":"Save"})]}):v.jsx("div",{className:"point-popup-status",style:{backgroundColor:_0(n).bg,color:_0(n).text},children:n||"Unknown"})]})]}),f&&v.jsxs("div",{className:"point-popup-row",style:{marginTop:"12px"},children:[v.jsxs("div",{children:[v.jsx("div",{className:"point-popup-label",children:"Full Address"}),v.jsx("div",{className:"point-popup-value",children:r||"N/A"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"point-popup-label",children:"Referral Source"}),v.jsx("div",{className:"point-popup-value",children:i||"N/A"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"point-popup-label",children:"Estimate"}),v.jsxs("div",{className:"point-popup-value",children:["$ ",s||"N/A"]})]})]})]}),(f||E)&&v.jsxs("div",{className:"point-popup-footer",children:[f&&v.jsx("button",{className:"edit-button",onClick:a,children:"Edit"}),E&&y&&v.jsx("div",{style:{color:"red",marginTop:8},children:y})]})]})},_0=t=>{if(!t)return{bg:"#f3f4f6",text:"#6b7280"};const e=t.toLowerCase();return e.includes("active")?{bg:"#daff99",text:"#166534"}:e.includes("pending")?{bg:"#faff99",text:"#92400e"}:e.includes("complete")?{bg:"#c7f7ad",text:"#003b09"}:{bg:"#f3f4f6",text:"#6b7280"}},AM=({selectedServiceType:t,onServiceTypeChange:e})=>{const[n,r]=Va.useState(!1),i=(a,u)=>{const c=parseInt(a.slice(1,3),16),h=parseInt(a.slice(3,5),16),f=parseInt(a.slice(5,7),16);return`rgba(${c}, ${h}, ${f}, ${u})`},s=Us.find(a=>a.name===t),o=a=>{e(a.name),r(!1)};return v.jsxs("div",{className:"service-type-dropdown",children:[v.jsxs("div",{className:"dropdown-label-row",style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:4},children:[v.jsx("label",{className:"field-label",style:{marginBottom:0},children:"Service Type *"}),v.jsx(ke,{icon:Ku,className:`dropdown-arrow ${n?"rotated":""}`,style:{cursor:"pointer"},onClick:()=>r(!n)})]}),v.jsxs("div",{className:"dropdown-container",children:[v.jsx("div",{className:`dropdown-trigger ${n?"open":""}`,onClick:()=>r(!n),children:s?v.jsx("div",{className:"selected-service",children:v.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(s.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[v.jsx(ke,{icon:s.icon,style:{color:s.color},className:"service-icon"}),v.jsx("span",{className:"service-name",style:{color:s.color,fontWeight:600},children:s.name})]})}):v.jsx("span",{className:"placeholder",children:"Select a service type"})}),n&&v.jsx("div",{className:"dropdown-menu",children:Us.map(a=>v.jsx("div",{className:`dropdown-option ${(s==null?void 0:s.id)===a.id?"selected":""}`,onClick:()=>o(a),style:{backgroundColor:(s==null?void 0:s.id)===a.id?i(a.color,.1):"transparent",borderRadius:"6px",marginBottom:"4px",cursor:"pointer",padding:"2px 0"},children:v.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(a.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[v.jsx(ke,{icon:a.icon,style:{color:a.color},className:"service-icon"}),v.jsx("span",{className:"service-name",style:{color:a.color,fontWeight:600},children:a.name})]})},a.id))})]})]})},CM=({onClose:t,onUpdatePoint:e,onDeletePoint:n,point:r,layerName:i="addpoints"})=>{var N,P,Y,me,St;const[s,o]=D.useState(""),[a,u]=D.useState(""),[c,h]=D.useState(""),[f,m]=D.useState("Active"),[E,I]=D.useState(""),[k,R]=D.useState(""),[_,y]=D.useState(""),[S,x]=D.useState(!1),[O,V]=D.useState(!1),[T,g]=D.useState(null);D.useEffect(()=>{r&&r.properties&&(o(r.properties["Service Ty"]||""),u(r.properties["Cross Stre"]||""),h(r.properties.neighbhood||""),m(r.properties.Status||"Active"),I(r.properties["Full Addre"]||""),R(r.properties["Refferal S"]||""),y(r.properties.Estimate||""))},[r]);const A=async ce=>{ce.preventDefault(),x(!0),g(null);try{const B={...r,properties:{...r.properties,"Service Ty":s,"Cross Stre":a,neighbhood:c,Status:f,"Full Addre":E,"Refferal S":k,Estimate:_,updated_at:new Date().toISOString()}};console.log(`Updating point in layer: ${i}`),await Zm(i,B),e(B),console.log("Point updated successfully!"),t()}catch(B){console.error("Error updating point:",B),g(B instanceof Error?B.message:"Failed to update point")}finally{x(!1)}},C=async()=>{var ce;if(window.confirm("Are you sure you want to delete this point? This action cannot be undone.")){V(!0),g(null);try{const B=(ce=r.properties)==null?void 0:ce.id;if(!B)throw new Error("Point must have an ID to be deleted");console.log(`Deleting point from layer: ${i}`),await XS(i,B),n(B),console.log("Point deleted successfully!"),t()}catch(B){console.error("Error deleting point:",B),g(B instanceof Error?B.message:"Failed to delete point")}finally{V(!1)}}},b=()=>{var J,we;const ce=r.geometry.coordinates,B=((J=ce[1])==null?void 0:J.toFixed(6))||"N/A",Q=((we=ce[0])==null?void 0:we.toFixed(6))||"N/A";return`${B}, ${Q}`};return v.jsxs("div",{className:"header-panel edit-point-panel",children:[v.jsxs("div",{className:"panel-header",children:[v.jsxs("div",{children:[v.jsx("h3",{children:"Edit Service Point"}),v.jsxs("small",{style:{color:"#666",fontSize:"12px"},children:["Location: ",b()]})]}),v.jsx("button",{className:"close-btn",onClick:t,disabled:S||O,children:v.jsx(ke,{icon:Ni})})]}),v.jsxs("div",{className:"panel-content",children:[T&&v.jsx("div",{className:"error-message",style:{color:"#d32f2f",backgroundColor:"#ffebee",padding:"8px 12px",borderRadius:"4px",marginBottom:"16px",fontSize:"14px"},children:T}),v.jsxs("form",{className:"edit-point-form",onSubmit:A,children:[v.jsx(AM,{selectedServiceType:s,onServiceTypeChange:o}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Cross Street"}),v.jsx("input",{type:"text",value:a,onChange:ce=>u(ce.target.value),required:!0,disabled:S||O})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Neighborhood"}),v.jsx("input",{type:"text",value:c,onChange:ce=>h(ce.target.value),required:!0,disabled:S||O})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Status"}),v.jsxs("select",{value:f,onChange:ce=>m(ce.target.value),disabled:S||O,children:[v.jsx("option",{value:"Active",children:"Active"}),v.jsx("option",{value:"Pending",children:"Pending"}),v.jsx("option",{value:"Complete",children:"Complete"})]})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Full Address"}),v.jsx("input",{type:"text",value:E,onChange:ce=>I(ce.target.value),disabled:S||O})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Referral Source"}),v.jsx("input",{type:"text",value:k,onChange:ce=>R(ce.target.value),disabled:S||O})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Estimate"}),v.jsx("input",{type:"text",value:_,onChange:ce=>y(ce.target.value),disabled:S||O})]}),(((N=r.properties)==null?void 0:N.created_at)||((P=r.properties)==null?void 0:P.updated_at))&&v.jsxs("div",{className:"metadata-section",style:{marginTop:"16px",padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"12px",color:"#666"},children:[((Y=r.properties)==null?void 0:Y.created_at)&&v.jsxs("div",{children:["Created: ",new Date(r.properties.created_at).toLocaleString()]}),((me=r.properties)==null?void 0:me.updated_at)&&v.jsxs("div",{children:["Last Updated: ",new Date(r.properties.updated_at).toLocaleString()]}),((St=r.properties)==null?void 0:St.id)&&v.jsxs("div",{children:["ID: ",r.properties.id]})]}),v.jsxs("div",{className:"form-actions",style:{display:"flex",gap:"12px",marginTop:"20px",flexDirection:"column"},children:[v.jsx("button",{type:"submit",className:"update-point-btn",disabled:S||O||!s,style:{backgroundColor:S?"#ccc":"#4caf50",color:"white",border:"none",padding:"12px 16px",borderRadius:"4px",cursor:S||O?"not-allowed":"pointer",fontSize:"14px",fontWeight:"600"},children:S?"Updating Point...":"Update Point"}),v.jsx("button",{type:"button",className:"delete-point-btn",onClick:C,disabled:S||O,style:{backgroundColor:O?"#ccc":"#f44336",color:"white",border:"none",padding:"12px 16px",borderRadius:"4px",cursor:S||O?"not-allowed":"pointer",fontSize:"14px",fontWeight:"600"},children:O?"Deleting...":"Delete Point"})]})]})]})]})},kM=({neighborhoodName:t,pointCount:e})=>v.jsx("div",{className:"neighborhood-hover-popup",style:{position:"fixed",top:134,left:24,zIndex:1001,pointerEvents:"none",maxWidth:320},children:v.jsxs("div",{className:"neighborhood-hover-popup-row",children:[v.jsx("span",{className:"neighborhood-hover-popup-name",children:t}),v.jsx("span",{className:"neighborhood-hover-popup-dot",children:"•"}),v.jsxs("span",{className:"neighborhood-hover-popup-count",children:[e," ",e===1?"service":"services"]})]})}),PM={paint:{"fill-color":["match",["get","randoNum"],1,"#FF6B6B",2,"#4ECDC4",3,"#FFD166",4,"#6A4C93",5,"#43AA8B",6,"#F3722C",7,"#277DA1",8,"#F94144",9,"#90BE6D",10,"#577590","#CCCCCC"],"fill-outline-color":"#FFFFFF"}},RM={type:"line",source:"neighborhoods",layout:{},paint:{"line-color":"#FFFFFF","line-width":2}},xM={type:"circle",source:"addpoints",layout:{},paint:{"circle-color":["match",["get","Service Ty"],"Lawn Restoration","#008000","Sidewalk Repair","#808080","Homeless Outreach","#FFA500","Legacy Sponsored Block","#FFD700","Lifestyle Lottery Winner","#800080","Neighborhood History","#0000FF","Home For Sale","#008080","Overnight Patrol","#000080","Vacant Home Cleanup","#800000","Trash or Debris Dump Site","#000000","Overgrown Bushes or Trees","#228B22","#999999"],"circle-radius":["interpolate",["linear"],["zoom"],10,4,15,8,20,12],"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF"}},bM={type:"circle",source:"sponsors",layout:{},paint:{"circle-color":"#FFD700","circle-radius":10,"circle-stroke-width":2,"circle-stroke-color":"#FFA500"}},bo={NeighborhoodBoundaries:PM,NeighborhoodBoundariesOutline:RM,addpoints:xM,Sponsors:bM},NM=Qc,OM=({viewState:t,onViewStateChange:e,searchMarker:n,filters:r,isAddingPoint:i,onPointAdd:s,addPointCoordinates:o,geoJsonData:a,loadingGeoJson:u})=>{var ol,ni,ri,Hi,qi,Gi,Ki;const{user:c,userData:h,isAnonymous:f,loading:m}=nl(),[E,I]=D.useState({longitude:-122.5715,latitude:45.498,zoom:12}),k=t||E,[R,_]=D.useState(null),[y,S]=D.useState(!0),[x,O]=D.useState(null),[V,T]=D.useState(null),[g,A]=D.useState(null),[C,b]=D.useState(null),[N,P]=D.useState(null),[Y,me]=D.useState(null);D.useEffect(()=>{m||(async()=>{try{_(null),console.log("Loading GeoJSON data...");const ae=!f&&h?h.role:null;console.log("Current user role:",ae||"Guest");const le=await Kf();console.log("Loaded and filtered layers:",Object.keys(le))}catch(ae){console.error("Error loading GeoJSON data:",ae),_(`Failed to load map data: ${ae instanceof Error?ae.message:"Unknown error"}`)}})()},[f,h,m]),D.useEffect(()=>{if(a.Sponsors){const ee=a.Sponsors.features.find(ae=>{var le;return((le=ae.properties)==null?void 0:le.Featured)==="Y"});ee?(console.log("Featured sponsor found:",ee),O(ee)):(console.log("No featured sponsor found"),O(null))}},[a.Sponsors]),D.useEffect(()=>{(async()=>{var ae;if(x&&((ae=x.properties)!=null&&ae.Image))try{const le=x.properties.Image,pe=Ym(Jm,`sponsor-logos/${le}`),Ee=await KS(pe);me(Ee)}catch(le){console.error("Error fetching sponsor logo:",le),me(null)}else me(null)})()},[x]);const St=ee=>{e?e(ee.viewState):I(ee.viewState),ee.viewState.zoom<14&&b(null)},ce=ee=>a.addpoints?a.addpoints.features.filter(ae=>{var pe;return((pe=ae.properties)==null?void 0:pe.neighbhood)===ee}).length:0,B=(ee,ae,le)=>{var Ee,ye;const pe=wi([ee,ae]);for(const Se of le.features)if((Se.geometry.type==="Polygon"||Se.geometry.type==="MultiPolygon")&&uM(pe,Se))return((Ee=Se.properties)==null?void 0:Ee.MAPLABEL)||((ye=Se.properties)==null?void 0:ye.NAME)||null;return null},Q=ee=>{var le,pe,Ee,ye;if(i){const{lng:Se,lat:ct}=ee.lngLat,et=Math.round(Se*1e4)/1e4,an=Math.round(ct*1e4)/1e4;let ze=null;a.NeighborhoodBoundaries&&(ze=B(et,an,a.NeighborhoodBoundaries));let We=null;if(a.PortlandStreets){const Fn=wi([et,an]),ii=a.PortlandStreets.features;let jn=[];if(ii.forEach(jt=>{if(jt.geometry.type==="LineString"){const Nt=y0(Fn,jt);jn.push({street:jt,distance:Nt})}else jt.geometry.type==="MultiLineString"&&jt.geometry.coordinates.forEach(Nt=>{const al=Yc(Nt,jt.properties),ll=y0(Fn,al);jn.push({street:{...jt,geometry:{type:"LineString",coordinates:Nt}},distance:ll})})}),jn.sort((jt,Nt)=>jt.distance-Nt.distance),jn.length>=2){const jt=(le=jn[0].street.properties)==null?void 0:le.FullName,Nt=(pe=jn[1].street.properties)==null?void 0:pe.FullName;We=`${jt} & ${Nt}`}}s({lat:an,lng:et,neighborhood:ze,crossStreet:We});return}const ae=ee.features;if(ae&&ae.length>0){const Se=ae.find(et=>et.source==="addpoints");if(Se){console.log("Clicked addpoint:",Se),T(Se);return}const ct=ae.find(et=>et.source==="neighborhoods");if(ct){const et=((Ee=ct.properties)==null?void 0:Ee.MAPLABEL)||((ye=ct.properties)==null?void 0:ye.NAME);if(et){b(et);const[an,ze,We,Fn]=eM(ct.geometry),ii={...k,longitude:(an+We)/2,latitude:(ze+Fn)/2,zoom:14};e?e(ii):I(ii)}}}},J=ee=>{A(ee),T(null)},we=ee=>{console.log("Update point:",ee),A(null)},ge=ee=>{console.log("Delete point:",ee),A(null)},be=ee=>{var le,pe;const ae=ee.features;if(ae&&ae.length>0){const Ee=ae.find(ye=>ye.source==="neighborhoods");if(Ee){const ye=((le=Ee.properties)==null?void 0:le.MAPLABEL)||((pe=Ee.properties)==null?void 0:pe.NAME);if(ye){const Se=ce(ye);P({name:ye,pointCount:Se,x:ee.point.x,y:ee.point.y})}}else P(null)}else P(null)},sn=()=>{},on=()=>{P(null)},bt=(()=>{const ee={...a};if(ee.addpoints){let le=ee.addpoints.features;const pe=C?[C]:r.selectedNeighborhoods;if(pe.length>0&&(le=le.filter(Ee=>{var Se;const ye=(Se=Ee.properties)==null?void 0:Se.neighbhood;return pe.includes(ye)})),r.selectedServiceTypes.length>0&&(le=le.filter(Ee=>{var Se;const ye=(Se=Ee.properties)==null?void 0:Se["Service Ty"];return r.selectedServiceTypes.includes(ye)})),(h==null?void 0:h.role)==="Contractor"&&h.contractorType){const Ee=NM[h.contractorType]||[];le=le.filter(ye=>{var ct;const Se=(ct=ye.properties)==null?void 0:ct["Service Ty"];return Ee.includes(Se)})}ee.addpoints={...ee.addpoints,features:le}}const ae=C?[C]:r.selectedNeighborhoods;if(ee.NeighborhoodBoundaries&&ae.length>0){const le=ee.NeighborhoodBoundaries.features.filter(pe=>{var ye;const Ee=(ye=pe.properties)==null?void 0:ye.MAPLABEL;return ae.includes(Ee)});ee.NeighborhoodBoundaries={...ee.NeighborhoodBoundaries,features:le}}return ee})();if(m||u)return v.jsx("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0"},children:v.jsxs("div",{children:[m?"Initializing...":"Loading map data...",v.jsx("br",{}),v.jsx("small",{style:{color:"#666",marginTop:"8px"},children:f?"Loading as guest":`Logged in as ${h==null?void 0:h.role}`})]})});if(R)return v.jsxs("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",flexDirection:"column",gap:"16px"},children:[v.jsxs("div",{style:{color:"red",textAlign:"center"},children:[v.jsx("strong",{children:"Error loading map data"}),v.jsx("br",{}),R]}),v.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Retry"})]});const Xc=async ee=>{if(!a.Sponsors)return;const ae=a.Sponsors.features.map(pe=>{var ye,Se,ct,et,an;const Ee=((Se=(ye=pe.properties)==null?void 0:ye.FID)==null?void 0:Se.toString())||((et=(ct=pe.properties)==null?void 0:ct.OBJECTID)==null?void 0:et.toString())||((an=pe.properties)==null?void 0:an.Name);return{...pe,properties:{...pe.properties,Featured:Ee===ee?"Y":"N"}}}),le={...a.Sponsors,features:ae};await rl("Sponsors",le),O(ae.find(pe=>pe.properties.Featured==="Y")||null)};return v.jsxs("div",{style:{height:"100vh",width:"100%",position:"relative"},children:[!f&&h&&v.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:1e3,background:"rgba(0,0,0,0.7)",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"12px"},children:[h.role," - ",h.email]}),v.jsxs(q3,{...k,onMove:St,onClick:Q,onMouseMove:be,onMouseEnter:sn,onMouseLeave:on,interactiveLayerIds:["addpoints","neighborhoods-fill"],mapboxAccessToken:"pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ",style:{width:"100%",height:"100%"},mapStyle:"mapbox://styles/mapbox/satellite-streets-v12",cursor:i?"crosshair":"auto",children:[v.jsx(G3,{position:"top-right"}),bt.NeighborhoodBoundaries&&v.jsxs(Yl,{id:"neighborhoods",type:"geojson",data:bt.NeighborhoodBoundaries,children:[v.jsx(xo,{id:"neighborhoods-fill",type:"fill",paint:{"fill-color":bo.NeighborhoodBoundaries.paint["fill-color"],"fill-opacity":["interpolate",["linear"],["zoom"],13,.35,16,.05,18,0],"fill-outline-color":bo.NeighborhoodBoundaries.paint["fill-outline-color"]}}),v.jsx(xo,{...bo.NeighborhoodBoundariesOutline}),v.jsx(xo,{id:"neighborhoods-labels",type:"symbol",layout:{"text-field":["get","NAME"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12,"text-anchor":"center","text-justify":"center"},paint:{"text-color":"#171717","text-halo-color":"rgba(255, 255, 255, 0.8)","text-halo-width":1,"text-opacity":["interpolate",["linear"],["zoom"],13,1,16,.5,18,0]}})]}),bt.addpoints&&v.jsx(Yl,{id:"addpoints",type:"geojson",data:bt.addpoints,children:v.jsx(xo,{id:"addpoints",...bo.addpoints})}),a.Sponsors&&v.jsx(Yl,{id:"sponsors",type:"geojson",data:a.Sponsors,children:v.jsx(xo,{...bo.Sponsors})}),a.PortlandStreets&&v.jsx(Yl,{id:"streets",type:"geojson",data:a.PortlandStreets}),n&&v.jsx(oh,{longitude:n.longitude,latitude:n.latitude,anchor:"bottom",children:v.jsxs("div",{className:"search-marker-container",children:[v.jsx("div",{className:"search-marker-pin",children:v.jsx("div",{className:"search-marker-dot"})}),v.jsxs("div",{className:"search-marker-tooltip",children:[n.address,v.jsx("div",{className:"search-marker-tooltip-arrow"})]})]})}),y&&x&&x.geometry.type==="Point"&&Y&&v.jsx(oh,{longitude:x.geometry.coordinates[0],latitude:x.geometry.coordinates[1],anchor:"center",children:v.jsx("div",{className:"sponsor-marker-container",children:v.jsx("img",{src:Y,alt:"Sponsor Logo",className:"sponsor-marker-img"})})}),y&&x&&!V&&!g&&v.jsx("div",{style:{position:"fixed",left:24,bottom:24,zIndex:1e3,background:"white",borderRadius:12,boxShadow:"0 2px 16px rgba(0,0,0,0.18)",padding:0,minWidth:320,maxWidth:360,display:"flex",alignItems:"center",gap:16},children:v.jsx(TM,{title:"Featured Sponsor",name:(ol=x.properties)==null?void 0:ol.Name,crossStreet:(ni=x.properties)==null?void 0:ni.CrossStreet,instagram:(ri=x.properties)==null?void 0:ri.Instagram,logoUrl:Y,onClose:()=>S(!1),isAdmin:(h==null?void 0:h.role)==="Admin",sponsors:((Hi=a.Sponsors)==null?void 0:Hi.features)||[],currentFeaturedId:((Gi=(qi=x==null?void 0:x.properties)==null?void 0:qi.OBJECTID)==null?void 0:Gi.toString())||((Ki=x==null?void 0:x.properties)==null?void 0:Ki.Name)||null,onSetFeatured:Xc,loading:u})}),o&&v.jsx(oh,{longitude:o.lng,latitude:o.lat,anchor:"center",children:v.jsx("div",{className:"add-point-marker"})})]}),N&&v.jsx(kM,{neighborhoodName:N.name,pointCount:N.pointCount}),V&&(()=>{var ee,ae,le,pe,Ee,ye;return v.jsx(IM,{jobType:(ee=V.properties)==null?void 0:ee["Service Ty"],location:(ae=V.properties)==null?void 0:ae["Cross Stre"],status:(le=V.properties)==null?void 0:le.Status,fullAddress:(pe=V.properties)==null?void 0:pe["Full Addre"],referralSource:(Ee=V.properties)==null?void 0:Ee["Referral S"],estimate:(ye=V.properties)==null?void 0:ye.Estimate,feature:V,onClose:()=>T(null),onEdit:()=>J(V),onStatusUpdate:()=>{}})})(),g&&v.jsx(CM,{point:g,onClose:()=>A(null),onUpdatePoint:we,onDeletePoint:ge})]})},LM=()=>{const[t,e]=D.useState({}),[n,r]=D.useState(!0),[i,s]=D.useState(null);D.useEffect(()=>{(async()=>{r(!0),s(null);try{const k=await Kf();e(k)}catch(k){s(k instanceof Error?k.message:"Failed to load initial data"),console.error("Error loading initial data:",k)}finally{r(!1)}})()},[]);const o=D.useCallback(async I=>{s(null);try{s3(I);const k=await so(I);e(R=>({...R,[I]:k}))}catch(k){const R=k instanceof Error?k.message:`Failed to refresh ${I}`;throw s(R),console.error(`Error refreshing layer ${I}:`,k),k}},[]),a=D.useCallback(async()=>{r(!0),s(null);try{const I=await Kf();e(I)}catch(I){const k=I instanceof Error?I.message:"Failed to refresh all layers";throw s(k),console.error("Error refreshing all layers:",I),I}finally{r(!1)}},[]),u=D.useCallback(async(I,k)=>{s(null);try{const R=await YS(I,k);e(_=>({..._,[I]:R}))}catch(R){const _=R instanceof Error?R.message:`Failed to add point to ${I}`;throw s(_),console.error(`Error adding point to ${I}:`,R),R}},[]),c=D.useCallback(async(I,k)=>{s(null);try{const R=await Zm(I,k);e(_=>({..._,[I]:R}))}catch(R){const _=R instanceof Error?R.message:`Failed to update point in ${I}`;throw s(_),console.error(`Error updating point in ${I}:`,R),R}},[]),h=D.useCallback(async(I,k)=>{s(null);try{const R=await XS(I,k);e(_=>({..._,[I]:R}))}catch(R){const _=R instanceof Error?R.message:`Failed to delete point from ${I}`;throw s(_),console.error(`Error deleting point from ${I}:`,R),R}},[]),f=D.useCallback(async I=>{s(null);try{await o3(I)}catch(k){const R=k instanceof Error?k.message:`Failed to create backup for ${I}`;throw s(R),console.error(`Error creating backup for ${I}:`,k),k}},[]),m=D.useCallback(I=>{var k;return((k=t[I])==null?void 0:k.features)||[]},[t]),E=D.useCallback((I,k)=>m(I).find(_=>{var y;return((y=_.properties)==null?void 0:y.id)===k}),[m]);return{layers:t,loading:n,error:i,refreshLayer:o,refreshAllLayers:a,addPoint:u,updatePoint:c,deletePoint:h,createBackup:f,getLayerFeatures:m,findFeatureById:E}};function DM(){const t=LM(),[e,n]=D.useState({longitude:-122.5715,latitude:45.498,zoom:12}),[r,i]=D.useState(null),[s,o]=D.useState({selectedNeighborhoods:[],selectedServiceTypes:[]}),[a,u]=D.useState(!1),[c,h]=D.useState(!1),[f,m]=D.useState(null),E=y=>{n({longitude:y.longitude,latitude:y.latitude,zoom:y.zoom}),i({longitude:y.longitude,latitude:y.latitude,address:y.address}),setTimeout(()=>{i(null)},1e4)},I=y=>{n(y)},k=y=>{o(y)},R=async y=>{await t.addPoint("addpoints",y),await t.refreshAllLayers(),m(null)},_=y=>{m(y),h(!1)};return v.jsx(e3,{children:v.jsxs("div",{className:"App",children:[v.jsx(u3,{onLocationSelect:E,filters:s,onFiltersChange:k,filterPanelOpen:a,setFilterPanelOpen:u,isAddingPoint:c,setIsAddingPoint:h,addPointCoordinates:f===null?void 0:f,setAddPointCoordinates:m,onAddPoint:R}),v.jsx(OM,{viewState:e,onViewStateChange:I,searchMarker:r,filters:s,isAddingPoint:c,onPointAdd:_,addPointCoordinates:f===null?void 0:f,geoJsonData:t.layers,loadingGeoJson:t.loading})]})})}ch.createRoot(document.getElementById("root")).render(v.jsx(Va.StrictMode,{children:v.jsx(DM,{})}));export{MM as c,w0 as g};
