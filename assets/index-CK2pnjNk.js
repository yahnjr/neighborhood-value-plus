(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var VM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v0={exports:{}},lc={},_0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),PI=Symbol.for("react.portal"),kI=Symbol.for("react.fragment"),RI=Symbol.for("react.strict_mode"),xI=Symbol.for("react.profiler"),bI=Symbol.for("react.provider"),NI=Symbol.for("react.context"),OI=Symbol.for("react.forward_ref"),LI=Symbol.for("react.suspense"),DI=Symbol.for("react.memo"),MI=Symbol.for("react.lazy"),$g=Symbol.iterator;function VI(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,T0={};function qs(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||w0}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S0(){}S0.prototype=qs.prototype;function Wf(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||w0}var Hf=Wf.prototype=new S0;Hf.constructor=Wf;E0(Hf,qs.prototype);Hf.isPureReactComponent=!0;var Wg=Array.isArray,I0=Object.prototype.hasOwnProperty,qf={current:null},A0={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)I0.call(e,r)&&!A0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oa,type:t,key:s,ref:o,props:i,_owner:qf.current}}function FI(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function jI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hg=/\/+/g;function ud(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jI(""+t.key):e.toString(36)}function ql(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case PI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ud(o,0):r,Wg(i)?(n="",t!=null&&(n=t.replace(Hg,"$&/")+"/"),ql(i,e,n,"",function(c){return c})):i!=null&&(Gf(i)&&(i=FI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wg(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+ud(s,a);o+=ql(s,e,n,u,i)}else if(u=VI(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+ud(s,a++),o+=ql(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _l(t,e,n){if(t==null)return t;var r=[],i=0;return ql(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Gl={transition:null},zI={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Gl,ReactCurrentOwner:qf};function P0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=qs;ie.Fragment=kI;ie.Profiler=xI;ie.PureComponent=Wf;ie.StrictMode=RI;ie.Suspense=LI;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zI;ie.act=P0;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)I0.call(e,u)&&!A0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Oa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:NI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bI,_context:t},t.Consumer=t};ie.createElement=C0;ie.createFactory=function(t){var e=C0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:OI,render:t}};ie.isValidElement=Gf;ie.lazy=function(t){return{$$typeof:MI,_payload:{_status:-1,_result:t},_init:UI}};ie.memo=function(t,e){return{$$typeof:DI,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Gl.transition;Gl.transition={};try{t()}finally{Gl.transition=e}};ie.unstable_act=P0;ie.useCallback=function(t,e){return kt.current.useCallback(t,e)};ie.useContext=function(t){return kt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return kt.current.useEffect(t,e)};ie.useId=function(){return kt.current.useId()};ie.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return kt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ie.useRef=function(t){return kt.current.useRef(t)};ie.useState=function(t){return kt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return kt.current.useTransition()};ie.version="18.3.1";_0.exports=ie;var D=_0.exports;const La=y0(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=D,$I=Symbol.for("react.element"),WI=Symbol.for("react.fragment"),HI=Object.prototype.hasOwnProperty,qI=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GI={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)HI.call(e,r)&&!GI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$I,type:t,key:s,ref:o,props:i,_owner:qI.current}}lc.Fragment=WI;lc.jsx=k0;lc.jsxs=k0;v0.exports=lc;var _=v0.exports,sh={},R0={exports:{}},Wt={},x0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ye=J-1>>>1,pe=B[ye];if(0<i(pe,Q))B[ye]=Q,B[J]=pe,J=ye;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ye=0,pe=B.length,xe=pe>>>1;ye<xe;){var _n=2*(ye+1)-1,xt=B[_n],Gt=_n+1,Kt=B[Gt];if(0>i(xt,J))Gt<pe&&0>i(Kt,xt)?(B[ye]=Kt,B[Gt]=J,ye=Gt):(B[ye]=xt,B[_n]=J,ye=_n);else if(Gt<pe&&0>i(Kt,J))B[ye]=Kt,B[Gt]=J,ye=Gt;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,T=!1,S=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b(B){if(P=!1,I(B),!S)if(n(u)!==null)S=!0,Et(L);else{var Q=n(c);Q!==null&&le(b,Q.startTime-B)}}function L(B,Q){S=!1,P&&(P=!1,v(g),g=-1),T=!0;var J=m;try{for(I(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||B&&!x());){var ye=f.callback;if(typeof ye=="function"){f.callback=null,m=f.priorityLevel;var pe=ye(f.expirationTime<=Q);Q=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(u)&&r(u),I(Q)}else r(u);f=n(u)}if(f!==null)var xe=!0;else{var _n=n(c);_n!==null&&le(b,_n.startTime-Q),xe=!1}return xe}finally{f=null,m=J,T=!1}}var V=!1,E=null,g=-1,A=5,C=-1;function x(){return!(t.unstable_now()-C<A)}function N(){if(E!==null){var B=t.unstable_now();C=B;var Q=!0;try{Q=E(!0,B)}finally{Q?k():(V=!1,E=null)}}else V=!1}var k;if(typeof y=="function")k=function(){y(N)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ve=X.port2;X.port1.onmessage=N,k=function(){ve.postMessage(null)}}else k=function(){R(N,0)};function Et(B){E=B,V||(V=!0,k())}function le(B,Q){g=R(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,Et(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,B){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=J+pe,B={id:h++,callback:Q,priorityLevel:B,startTime:J,expirationTime:pe,sortIndex:-1},J>ye?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(P?(v(g),g=-1):P=!0,le(b,J-ye))):(B.sortIndex=pe,e(u,B),S||T||(S=!0,Et(L))),B},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(b0);x0.exports=b0;var KI=x0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QI=D,$t=KI;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,ra={};function Fi(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(ra[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oh=Object.prototype.hasOwnProperty,YI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qg={},Gg={};function XI(t){return oh.call(Gg,t)?!0:oh.call(qg,t)?!1:YI.test(t)?Gg[t]=!0:(qg[t]=!0,!1)}function JI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZI(t,e,n,r){if(e===null||typeof e>"u"||JI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kf,Qf);ot[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kf,Qf);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kf,Qf);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yf(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZI(e,n,i,r)&&(n=null),r||i===null?XI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=QI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),lh=Symbol.for("react.suspense"),uh=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),Kg=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,cd;function Ro(t){if(cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+t}var dd=!1;function hd(t,e){if(!t||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function e2(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case ah:return"Profiler";case Xf:return"StrictMode";case lh:return"Suspense";case uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L0:return(t.displayName||"Context")+".Consumer";case O0:return(t._context.displayName||"Context")+".Provider";case Jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:ch(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return ch(t(e))}catch{}}return null}function t2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ch(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n2(t){var e=M0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function El(t){t._valueTracker||(t._valueTracker=n2(t))}function V0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=M0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dh(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F0(t,e){e=e.checked,e!=null&&Yf(t,"checked",e,!1)}function hh(t,e){F0(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fh(t,e.type,n):e.hasOwnProperty("defaultValue")&&fh(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fh(t,e,n){(e!=="number"||gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(xo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function j0(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r2=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){r2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function B0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function $0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=B0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var i2=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gh(t,e){if(e){if(i2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=null;function ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _h=null,vs=null,_s=null;function Zg(t){if(t=Va(t)){if(typeof _h!="function")throw Error(z(280));var e=t.stateNode;e&&(e=fc(e),_h(t.stateNode,t.type,e))}}function W0(t){vs?_s?_s.push(t):_s=[t]:vs=t}function H0(){if(vs){var t=vs,e=_s;if(_s=vs=null,Zg(t),e)for(t=0;t<e.length;t++)Zg(e[t])}}function q0(t,e){return t(e)}function G0(){}var fd=!1;function K0(t,e,n){if(fd)return t(e,n);fd=!0;try{return q0(t,e,n)}finally{fd=!1,(vs!==null||_s!==null)&&(G0(),H0())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var r=fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var wh=!1;if(Xn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){wh=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{wh=!1}function s2(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Uo=!1,yu=null,vu=!1,Eh=null,o2={onError:function(t){Uo=!0,yu=t}};function a2(t,e,n,r,i,s,o,a,u){Uo=!1,yu=null,s2.apply(o2,arguments)}function l2(t,e,n,r,i,s,o,a,u){if(a2.apply(this,arguments),Uo){if(Uo){var c=yu;Uo=!1,yu=null}else throw Error(z(198));vu||(vu=!0,Eh=c)}}function ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ey(t){if(ji(t)!==t)throw Error(z(188))}function u2(t){var e=t.alternate;if(!e){if(e=ji(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ey(i),t;if(s===r)return ey(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Y0(t){return t=u2(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var J0=$t.unstable_scheduleCallback,ty=$t.unstable_cancelCallback,c2=$t.unstable_shouldYield,d2=$t.unstable_requestPaint,Be=$t.unstable_now,h2=$t.unstable_getCurrentPriorityLevel,tp=$t.unstable_ImmediatePriority,Z0=$t.unstable_UserBlockingPriority,_u=$t.unstable_NormalPriority,f2=$t.unstable_LowPriority,ew=$t.unstable_IdlePriority,uc=null,Pn=null;function p2(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:y2,m2=Math.log,g2=Math.LN2;function y2(t){return t>>>=0,t===0?32:31-(m2(t)/g2|0)|0}var Sl=64,Il=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bo(a):(s&=o,s!==0&&(r=bo(s)))}else o=n&~i,o!==0?r=bo(o):s!==0&&(r=bo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function v2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=v2(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tw(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function w2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function nw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rw,rp,iw,sw,ow,Sh=!1,Al=[],Rr=null,xr=null,br=null,oa=new Map,aa=new Map,_r=[],E2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ny(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function _o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Va(e),e!==null&&rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function T2(t,e,n,r,i){switch(e){case"focusin":return Rr=_o(Rr,t,e,n,r,i),!0;case"dragenter":return xr=_o(xr,t,e,n,r,i),!0;case"mouseover":return br=_o(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oa.set(s,_o(oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,aa.set(s,_o(aa.get(s)||null,t,e,n,r,i)),!0}return!1}function aw(t){var e=pi(t.target);if(e!==null){var n=ji(e);if(n!==null){if(e=n.tag,e===13){if(e=Q0(n),e!==null){t.blockedOn=e,ow(t.priority,function(){iw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vh=r,n.target.dispatchEvent(r),vh=null}else return e=Va(n),e!==null&&rp(e),t.blockedOn=n,!1;e.shift()}return!0}function ry(t,e,n){Kl(t)&&n.delete(e)}function S2(){Sh=!1,Rr!==null&&Kl(Rr)&&(Rr=null),xr!==null&&Kl(xr)&&(xr=null),br!==null&&Kl(br)&&(br=null),oa.forEach(ry),aa.forEach(ry)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Sh||(Sh=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,S2)))}function la(t){function e(i){return wo(i,t)}if(0<Al.length){wo(Al[0],t);for(var n=1;n<Al.length;n++){var r=Al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&wo(Rr,t),xr!==null&&wo(xr,t),br!==null&&wo(br,t),oa.forEach(e),aa.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)aw(n),n.blockedOn===null&&_r.shift()}var ws=lr.ReactCurrentBatchConfig,Eu=!0;function I2(t,e,n,r){var i=me,s=ws.transition;ws.transition=null;try{me=1,ip(t,e,n,r)}finally{me=i,ws.transition=s}}function A2(t,e,n,r){var i=me,s=ws.transition;ws.transition=null;try{me=4,ip(t,e,n,r)}finally{me=i,ws.transition=s}}function ip(t,e,n,r){if(Eu){var i=Ih(t,e,n,r);if(i===null)Id(t,e,r,Tu,n),ny(t,r);else if(T2(i,t,e,n,r))r.stopPropagation();else if(ny(t,r),e&4&&-1<E2.indexOf(t)){for(;i!==null;){var s=Va(i);if(s!==null&&rw(s),s=Ih(t,e,n,r),s===null&&Id(t,e,r,Tu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Id(t,e,r,null,n)}}var Tu=null;function Ih(t,e,n,r){if(Tu=null,t=ep(r),t=pi(t),t!==null)if(e=ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tu=t,null}function lw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h2()){case tp:return 1;case Z0:return 4;case _u:case f2:return 16;case ew:return 536870912;default:return 16}default:return 16}}var Cr=null,sp=null,Ql=null;function uw(){if(Ql)return Ql;var t,e=sp,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ql=i.slice(t,1<r?1-r:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function iy(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cl:iy,this.isPropagationStopped=iy,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},op=Ht(Gs),Ma=Oe({},Gs,{view:0,detail:0}),C2=Ht(Ma),md,gd,Eo,cc=Oe({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(md=t.screenX-Eo.screenX,gd=t.screenY-Eo.screenY):gd=md=0,Eo=t),md)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),sy=Ht(cc),P2=Oe({},cc,{dataTransfer:0}),k2=Ht(P2),R2=Oe({},Ma,{relatedTarget:0}),yd=Ht(R2),x2=Oe({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),b2=Ht(x2),N2=Oe({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O2=Ht(N2),L2=Oe({},Gs,{data:0}),oy=Ht(L2),D2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V2[t])?!!e[t]:!1}function ap(){return F2}var j2=Oe({},Ma,{key:function(t){if(t.key){var e=D2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ap,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U2=Ht(j2),z2=Oe({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ay=Ht(z2),B2=Oe({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ap}),$2=Ht(B2),W2=Oe({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),H2=Ht(W2),q2=Oe({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G2=Ht(q2),K2=[9,13,27,32],lp=Xn&&"CompositionEvent"in window,zo=null;Xn&&"documentMode"in document&&(zo=document.documentMode);var Q2=Xn&&"TextEvent"in window&&!zo,cw=Xn&&(!lp||zo&&8<zo&&11>=zo),ly=" ",uy=!1;function dw(t,e){switch(t){case"keyup":return K2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Y2(t,e){switch(t){case"compositionend":return hw(e);case"keypress":return e.which!==32?null:(uy=!0,ly);case"textInput":return t=e.data,t===ly&&uy?null:t;default:return null}}function X2(t,e){if(rs)return t==="compositionend"||!lp&&dw(t,e)?(t=uw(),Ql=sp=Cr=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cw&&e.locale!=="ko"?null:e.data;default:return null}}var J2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J2[t.type]:e==="textarea"}function fw(t,e,n,r){W0(r),e=Su(e,"onChange"),0<e.length&&(n=new op("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bo=null,ua=null;function Z2(t){Iw(t,0)}function dc(t){var e=os(t);if(V0(e))return t}function eA(t,e){if(t==="change")return e}var pw=!1;if(Xn){var vd;if(Xn){var _d="oninput"in document;if(!_d){var dy=document.createElement("div");dy.setAttribute("oninput","return;"),_d=typeof dy.oninput=="function"}vd=_d}else vd=!1;pw=vd&&(!document.documentMode||9<document.documentMode)}function hy(){Bo&&(Bo.detachEvent("onpropertychange",mw),ua=Bo=null)}function mw(t){if(t.propertyName==="value"&&dc(ua)){var e=[];fw(e,ua,t,ep(t)),K0(Z2,e)}}function tA(t,e,n){t==="focusin"?(hy(),Bo=e,ua=n,Bo.attachEvent("onpropertychange",mw)):t==="focusout"&&hy()}function nA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(ua)}function rA(t,e){if(t==="click")return dc(e)}function iA(t,e){if(t==="input"||t==="change")return dc(e)}function sA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:sA;function ca(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oh.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function fy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function py(t,e){var n=fy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fy(n)}}function gw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yw(){for(var t=window,e=gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gu(t.document)}return e}function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oA(t){var e=yw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gw(n.ownerDocument.documentElement,n)){if(r!==null&&up(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=py(n,s);var o=py(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aA=Xn&&"documentMode"in document&&11>=document.documentMode,is=null,Ah=null,$o=null,Ch=!1;function my(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||is==null||is!==gu(r)||(r=is,"selectionStart"in r&&up(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&ca($o,r)||($o=r,r=Su(Ah,"onSelect"),0<r.length&&(e=new op("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=is)))}function Pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},wd={},vw={};Xn&&(vw=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function hc(t){if(wd[t])return wd[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vw)return wd[t]=e[n];return t}var _w=hc("animationend"),ww=hc("animationiteration"),Ew=hc("animationstart"),Tw=hc("transitionend"),Sw=new Map,gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){Sw.set(t,e),Fi(e,[t])}for(var Ed=0;Ed<gy.length;Ed++){var Td=gy[Ed],lA=Td.toLowerCase(),uA=Td[0].toUpperCase()+Td.slice(1);Qr(lA,"on"+uA)}Qr(_w,"onAnimationEnd");Qr(ww,"onAnimationIteration");Qr(Ew,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(Tw,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cA=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,l2(r,e,void 0,t),t.currentTarget=null}function Iw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;yy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;yy(i,a,c),s=u}}}if(vu)throw t=Eh,vu=!1,Eh=null,t}function Ie(t,e){var n=e[bh];n===void 0&&(n=e[bh]=new Set);var r=t+"__bubble";n.has(r)||(Aw(e,t,2,!1),n.add(r))}function Sd(t,e,n){var r=0;e&&(r|=4),Aw(n,t,r,e)}var kl="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[kl]){t[kl]=!0,N0.forEach(function(n){n!=="selectionchange"&&(cA.has(n)||Sd(n,!1,t),Sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kl]||(e[kl]=!0,Sd("selectionchange",!1,e))}}function Aw(t,e,n,r){switch(lw(e)){case 1:var i=I2;break;case 4:i=A2;break;default:i=ip}n=i.bind(null,e,n,t),i=void 0,!wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}K0(function(){var c=s,h=ep(n),f=[];e:{var m=Sw.get(t);if(m!==void 0){var T=op,S=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":T=U2;break;case"focusin":S="focus",T=yd;break;case"focusout":S="blur",T=yd;break;case"beforeblur":case"afterblur":T=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=k2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=$2;break;case _w:case ww:case Ew:T=b2;break;case Tw:T=H2;break;case"scroll":T=C2;break;case"wheel":T=G2;break;case"copy":case"cut":case"paste":T=O2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ay}var P=(e&4)!==0,R=!P&&t==="scroll",v=P?m!==null?m+"Capture":null:m;P=[];for(var y=c,I;y!==null;){I=y;var b=I.stateNode;if(I.tag===5&&b!==null&&(I=b,v!==null&&(b=sa(y,v),b!=null&&P.push(ha(y,b,I)))),R)break;y=y.return}0<P.length&&(m=new T(m,S,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==vh&&(S=n.relatedTarget||n.fromElement)&&(pi(S)||S[Jn]))break e;if((T||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,T?(S=n.relatedTarget||n.toElement,T=c,S=S?pi(S):null,S!==null&&(R=ji(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(T=null,S=c),T!==S)){if(P=sy,b="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=ay,b="onPointerLeave",v="onPointerEnter",y="pointer"),R=T==null?m:os(T),I=S==null?m:os(S),m=new P(b,y+"leave",T,n,h),m.target=R,m.relatedTarget=I,b=null,pi(h)===c&&(P=new P(v,y+"enter",S,n,h),P.target=I,P.relatedTarget=R,b=P),R=b,T&&S)t:{for(P=T,v=S,y=0,I=P;I;I=Qi(I))y++;for(I=0,b=v;b;b=Qi(b))I++;for(;0<y-I;)P=Qi(P),y--;for(;0<I-y;)v=Qi(v),I--;for(;y--;){if(P===v||v!==null&&P===v.alternate)break t;P=Qi(P),v=Qi(v)}P=null}else P=null;T!==null&&vy(f,m,T,P,!1),S!==null&&R!==null&&vy(f,R,S,P,!0)}}e:{if(m=c?os(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var L=eA;else if(cy(m))if(pw)L=iA;else{L=nA;var V=tA}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=rA);if(L&&(L=L(t,c))){fw(f,L,n,h);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&fh(m,"number",m.value)}switch(V=c?os(c):window,t){case"focusin":(cy(V)||V.contentEditable==="true")&&(is=V,Ah=c,$o=null);break;case"focusout":$o=Ah=is=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,my(f,n,h);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":my(f,n,h)}var E;if(lp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else rs?dw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(cw&&n.locale!=="ko"&&(rs||g!=="onCompositionStart"?g==="onCompositionEnd"&&rs&&(E=uw()):(Cr=h,sp="value"in Cr?Cr.value:Cr.textContent,rs=!0)),V=Su(c,g),0<V.length&&(g=new oy(g,t,null,n,h),f.push({event:g,listeners:V}),E?g.data=E:(E=hw(n),E!==null&&(g.data=E)))),(E=Q2?Y2(t,n):X2(t,n))&&(c=Su(c,"onBeforeInput"),0<c.length&&(h=new oy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}Iw(f,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sa(t,n),s!=null&&r.unshift(ha(t,s,i)),s=sa(t,e),s!=null&&r.push(ha(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=sa(n,s),u!=null&&o.unshift(ha(n,u,a))):i||(u=sa(n,s),u!=null&&o.push(ha(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dA=/\r\n?/g,hA=/\u0000|\uFFFD/g;function _y(t){return(typeof t=="string"?t:""+t).replace(dA,`
`).replace(hA,"")}function Rl(t,e,n){if(e=_y(e),_y(t)!==e&&n)throw Error(z(425))}function Iu(){}var Ph=null,kh=null;function Rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,fA=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,pA=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(t){return wy.resolve(null).then(t).catch(mA)}:xh;function mA(t){setTimeout(function(){throw t})}function Ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),la(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);la(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),In="__reactFiber$"+Ks,fa="__reactProps$"+Ks,Jn="__reactContainer$"+Ks,bh="__reactEvents$"+Ks,gA="__reactListeners$"+Ks,yA="__reactHandles$"+Ks;function pi(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ey(t);t!==null;){if(n=t[In])return n;t=Ey(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[In]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function fc(t){return t[fa]||null}var Nh=[],as=-1;function Yr(t){return{current:t}}function Ce(t){0>as||(t.current=Nh[as],Nh[as]=null,as--)}function Ee(t,e){as++,Nh[as]=t.current,t.current=e}var zr={},vt=Yr(zr),Lt=Yr(!1),Ii=zr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Au(){Ce(Lt),Ce(vt)}function Ty(t,e,n){if(vt.current!==zr)throw Error(z(168));Ee(vt,e),Ee(Lt,n)}function Cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,t2(t)||"Unknown",i));return Oe({},n,r)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Ii=vt.current,Ee(vt,t),Ee(Lt,Lt.current),!0}function Sy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=Cw(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,Ce(Lt),Ce(vt),Ee(vt,t)):Ce(Lt),Ee(Lt,n)}var zn=null,pc=!1,Cd=!1;function Pw(t){zn===null?zn=[t]:zn.push(t)}function vA(t){pc=!0,Pw(t)}function Xr(){if(!Cd&&zn!==null){Cd=!0;var t=0,e=me;try{var n=zn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zn=null,pc=!1}catch(i){throw zn!==null&&(zn=zn.slice(t+1)),J0(tp,Xr),i}finally{me=e,Cd=!1}}return null}var ls=[],us=0,Pu=null,ku=0,Xt=[],Jt=0,Ai=null,Bn=1,$n="";function ci(t,e){ls[us++]=ku,ls[us++]=Pu,Pu=t,ku=e}function kw(t,e,n){Xt[Jt++]=Bn,Xt[Jt++]=$n,Xt[Jt++]=Ai,Ai=t;var r=Bn;t=$n;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-mn(e)+i|n<<i|r,$n=s+t}else Bn=1<<s|n<<i|r,$n=t}function cp(t){t.return!==null&&(ci(t,1),kw(t,1,0))}function dp(t){for(;t===Pu;)Pu=ls[--us],ls[us]=null,ku=ls[--us],ls[us]=null;for(;t===Ai;)Ai=Xt[--Jt],Xt[Jt]=null,$n=Xt[--Jt],Xt[Jt]=null,Bn=Xt[--Jt],Xt[Jt]=null}var Bt=null,Ut=null,Re=!1,dn=null;function Rw(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Ut=null,!0):!1;default:return!1}}function Oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lh(t){if(Re){var e=Ut;if(e){var n=e;if(!Iy(t,e)){if(Oh(t))throw Error(z(418));e=Nr(n.nextSibling);var r=Bt;e&&Iy(t,e)?Rw(r,n):(t.flags=t.flags&-4097|2,Re=!1,Bt=t)}}else{if(Oh(t))throw Error(z(418));t.flags=t.flags&-4097|2,Re=!1,Bt=t}}}function Ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function xl(t){if(t!==Bt)return!1;if(!Re)return Ay(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rh(t.type,t.memoizedProps)),e&&(e=Ut)){if(Oh(t))throw xw(),Error(z(418));for(;e;)Rw(t,e),e=Nr(e.nextSibling)}if(Ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=Bt?Nr(t.stateNode.nextSibling):null;return!0}function xw(){for(var t=Ut;t;)t=Nr(t.nextSibling)}function xs(){Ut=Bt=null,Re=!1}function hp(t){dn===null?dn=[t]:dn.push(t)}var _A=lr.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cy(t){var e=t._init;return e(t._payload)}function bw(t){function e(v,y){if(t){var I=v.deletions;I===null?(v.deletions=[y],v.flags|=16):I.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=Mr(v,y),v.index=0,v.sibling=null,v}function s(v,y,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<y?(v.flags|=2,y):I):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,y,I,b){return y===null||y.tag!==6?(y=Od(I,v.mode,b),y.return=v,y):(y=i(y,I),y.return=v,y)}function u(v,y,I,b){var L=I.type;return L===ns?h(v,y,I.props.children,b,I.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===yr&&Cy(L)===y.type)?(b=i(y,I.props),b.ref=To(v,y,I),b.return=v,b):(b=ru(I.type,I.key,I.props,null,v.mode,b),b.ref=To(v,y,I),b.return=v,b)}function c(v,y,I,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Ld(I,v.mode,b),y.return=v,y):(y=i(y,I.children||[]),y.return=v,y)}function h(v,y,I,b,L){return y===null||y.tag!==7?(y=Ei(I,v.mode,b,L),y.return=v,y):(y=i(y,I),y.return=v,y)}function f(v,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Od(""+y,v.mode,I),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wl:return I=ru(y.type,y.key,y.props,null,v.mode,I),I.ref=To(v,null,y),I.return=v,I;case ts:return y=Ld(y,v.mode,I),y.return=v,y;case yr:var b=y._init;return f(v,b(y._payload),I)}if(xo(y)||yo(y))return y=Ei(y,v.mode,I,null),y.return=v,y;bl(v,y)}return null}function m(v,y,I,b){var L=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:a(v,y,""+I,b);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case wl:return I.key===L?u(v,y,I,b):null;case ts:return I.key===L?c(v,y,I,b):null;case yr:return L=I._init,m(v,y,L(I._payload),b)}if(xo(I)||yo(I))return L!==null?null:h(v,y,I,b,null);bl(v,I)}return null}function T(v,y,I,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(I)||null,a(y,v,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wl:return v=v.get(b.key===null?I:b.key)||null,u(y,v,b,L);case ts:return v=v.get(b.key===null?I:b.key)||null,c(y,v,b,L);case yr:var V=b._init;return T(v,y,I,V(b._payload),L)}if(xo(b)||yo(b))return v=v.get(I)||null,h(y,v,b,L,null);bl(y,b)}return null}function S(v,y,I,b){for(var L=null,V=null,E=y,g=y=0,A=null;E!==null&&g<I.length;g++){E.index>g?(A=E,E=null):A=E.sibling;var C=m(v,E,I[g],b);if(C===null){E===null&&(E=A);break}t&&E&&C.alternate===null&&e(v,E),y=s(C,y,g),V===null?L=C:V.sibling=C,V=C,E=A}if(g===I.length)return n(v,E),Re&&ci(v,g),L;if(E===null){for(;g<I.length;g++)E=f(v,I[g],b),E!==null&&(y=s(E,y,g),V===null?L=E:V.sibling=E,V=E);return Re&&ci(v,g),L}for(E=r(v,E);g<I.length;g++)A=T(E,v,g,I[g],b),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?g:A.key),y=s(A,y,g),V===null?L=A:V.sibling=A,V=A);return t&&E.forEach(function(x){return e(v,x)}),Re&&ci(v,g),L}function P(v,y,I,b){var L=yo(I);if(typeof L!="function")throw Error(z(150));if(I=L.call(I),I==null)throw Error(z(151));for(var V=L=null,E=y,g=y=0,A=null,C=I.next();E!==null&&!C.done;g++,C=I.next()){E.index>g?(A=E,E=null):A=E.sibling;var x=m(v,E,C.value,b);if(x===null){E===null&&(E=A);break}t&&E&&x.alternate===null&&e(v,E),y=s(x,y,g),V===null?L=x:V.sibling=x,V=x,E=A}if(C.done)return n(v,E),Re&&ci(v,g),L;if(E===null){for(;!C.done;g++,C=I.next())C=f(v,C.value,b),C!==null&&(y=s(C,y,g),V===null?L=C:V.sibling=C,V=C);return Re&&ci(v,g),L}for(E=r(v,E);!C.done;g++,C=I.next())C=T(E,v,g,C.value,b),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?g:C.key),y=s(C,y,g),V===null?L=C:V.sibling=C,V=C);return t&&E.forEach(function(N){return e(v,N)}),Re&&ci(v,g),L}function R(v,y,I,b){if(typeof I=="object"&&I!==null&&I.type===ns&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case wl:e:{for(var L=I.key,V=y;V!==null;){if(V.key===L){if(L=I.type,L===ns){if(V.tag===7){n(v,V.sibling),y=i(V,I.props.children),y.return=v,v=y;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===yr&&Cy(L)===V.type){n(v,V.sibling),y=i(V,I.props),y.ref=To(v,V,I),y.return=v,v=y;break e}n(v,V);break}else e(v,V);V=V.sibling}I.type===ns?(y=Ei(I.props.children,v.mode,b,I.key),y.return=v,v=y):(b=ru(I.type,I.key,I.props,null,v.mode,b),b.ref=To(v,y,I),b.return=v,v=b)}return o(v);case ts:e:{for(V=I.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(v,y.sibling),y=i(y,I.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=Ld(I,v.mode,b),y.return=v,v=y}return o(v);case yr:return V=I._init,R(v,y,V(I._payload),b)}if(xo(I))return S(v,y,I,b);if(yo(I))return P(v,y,I,b);bl(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,I),y.return=v,v=y):(n(v,y),y=Od(I,v.mode,b),y.return=v,v=y),o(v)):n(v,y)}return R}var bs=bw(!0),Nw=bw(!1),Ru=Yr(null),xu=null,cs=null,fp=null;function pp(){fp=cs=xu=null}function mp(t){var e=Ru.current;Ce(Ru),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){xu=t,fp=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(fp!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(xu===null)throw Error(z(308));cs=t,xu.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var mi=null;function gp(t){mi===null?mi=[t]:mi.push(t)}function Ow(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,gp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,np(t,n)}}function Py(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bu(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,T=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(m=e,T=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){f=S.call(T,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(T,f,m):S,m==null)break e;f=Oe({},f,m);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else T={eventTime:T,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=T,u=f):h=h.next=T,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=f}}function ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Fa={},kn=Yr(Fa),pa=Yr(Fa),ma=Yr(Fa);function gi(t){if(t===Fa)throw Error(z(174));return t}function vp(t,e){switch(Ee(ma,e),Ee(pa,t),Ee(kn,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mh(e,t)}Ce(kn),Ee(kn,e)}function Ns(){Ce(kn),Ce(pa),Ce(ma)}function Dw(t){gi(ma.current);var e=gi(kn.current),n=mh(e,t.type);e!==n&&(Ee(pa,t),Ee(kn,n))}function _p(t){pa.current===t&&(Ce(kn),Ce(pa))}var be=Yr(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pd=[];function wp(){for(var t=0;t<Pd.length;t++)Pd[t]._workInProgressVersionPrimary=null;Pd.length=0}var Jl=lr.ReactCurrentDispatcher,kd=lr.ReactCurrentBatchConfig,Ci=0,Ne=null,He=null,Xe=null,Ou=!1,Wo=!1,ga=0,wA=0;function dt(){throw Error(z(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Tp(t,e,n,r,i,s){if(Ci=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=t===null||t.memoizedState===null?IA:AA,t=n(r,i),Wo){s=0;do{if(Wo=!1,ga=0,25<=s)throw Error(z(301));s+=1,Xe=He=null,e.updateQueue=null,Jl.current=CA,t=n(r,i)}while(Wo)}if(Jl.current=Lu,e=He!==null&&He.next!==null,Ci=0,Xe=He=Ne=null,Ou=!1,e)throw Error(z(300));return t}function Sp(){var t=ga!==0;return ga=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function sn(){if(He===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Xe===null?Ne.memoizedState:Xe.next;if(e!==null)Xe=e,He=t;else{if(t===null)throw Error(z(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?Ne.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ya(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Ci&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ne.lanes|=h,Pi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,yn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Mw(){}function Vw(t,e){var n=Ne,r=sn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Ip(Uw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,va(9,jw.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(z(349));Ci&30||Fw(n,e,i)}return i}function Fw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jw(t,e,n,r){e.value=n,e.getSnapshot=r,zw(e)&&Bw(t)}function Uw(t,e,n){return n(function(){zw(e)&&Bw(t)})}function zw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function Bw(t){var e=Zn(t,1);e!==null&&gn(e,t,1,-1)}function Ry(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=SA.bind(null,Ne,t),[e.memoizedState,t]}function va(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $w(){return sn().memoizedState}function Zl(t,e,n,r){var i=Tn();Ne.flags|=t,i.memoizedState=va(1|e,n,void 0,r===void 0?null:r)}function mc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Ep(r,o.deps)){i.memoizedState=va(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=va(1|e,n,s,r)}function xy(t,e){return Zl(8390656,8,t,e)}function Ip(t,e){return mc(2048,8,t,e)}function Ww(t,e){return mc(4,2,t,e)}function Hw(t,e){return mc(4,4,t,e)}function qw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gw(t,e,n){return n=n!=null?n.concat([t]):null,mc(4,4,qw.bind(null,e,t),n)}function Ap(){}function Kw(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Qw(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yw(t,e,n){return Ci&21?(yn(n,e)||(n=tw(),Ne.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function EA(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=kd.transition;kd.transition={};try{t(!1),e()}finally{me=n,kd.transition=r}}function Xw(){return sn().memoizedState}function TA(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jw(t))Zw(e,n);else if(n=Ow(t,e,n,r),n!==null){var i=Pt();gn(n,t,r,i),e1(n,e,r)}}function SA(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jw(t))Zw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var u=e.interleaved;u===null?(i.next=i,gp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Ow(t,e,i,r),n!==null&&(i=Pt(),gn(n,t,r,i),e1(n,e,r))}}function Jw(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Zw(t,e){Wo=Ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,np(t,n)}}var Lu={readContext:rn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},IA={readContext:rn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,qw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TA.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:Ry,useDebugValue:Ap,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=Ry(!1),e=t[0];return t=EA.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Tn();if(Re){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Je===null)throw Error(z(349));Ci&30||Fw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xy(Uw.bind(null,r,s,t),[t]),r.flags|=2048,va(9,jw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Je.identifierPrefix;if(Re){var n=$n,r=Bn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AA={readContext:rn,useCallback:Kw,useContext:rn,useEffect:Ip,useImperativeHandle:Gw,useInsertionEffect:Ww,useLayoutEffect:Hw,useMemo:Qw,useReducer:Rd,useRef:$w,useState:function(){return Rd(ya)},useDebugValue:Ap,useDeferredValue:function(t){var e=sn();return Yw(e,He.memoizedState,t)},useTransition:function(){var t=Rd(ya)[0],e=sn().memoizedState;return[t,e]},useMutableSource:Mw,useSyncExternalStore:Vw,useId:Xw,unstable_isNewReconciler:!1},CA={readContext:rn,useCallback:Kw,useContext:rn,useEffect:Ip,useImperativeHandle:Gw,useInsertionEffect:Ww,useLayoutEffect:Hw,useMemo:Qw,useReducer:xd,useRef:$w,useState:function(){return xd(ya)},useDebugValue:Ap,useDeferredValue:function(t){var e=sn();return He===null?e.memoizedState=t:Yw(e,He.memoizedState,t)},useTransition:function(){var t=xd(ya)[0],e=sn().memoizedState;return[t,e]},useMutableSource:Mw,useSyncExternalStore:Vw,useId:Xw,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gc={isMounted:function(t){return(t=t._reactInternals)?ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Dr(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(gn(e,t,i,r),Xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Dr(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(gn(e,t,i,r),Xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Dr(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Or(t,i,r),e!==null&&(gn(e,t,r,n),Xl(e,t,r))}};function by(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(n,r)||!ca(i,s):!0}function t1(t,e,n){var r=!1,i=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Dt(e)?Ii:vt.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gc.enqueueReplaceState(e,e.state,null)}function Vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},yp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Dt(e)?Ii:vt.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gc.enqueueReplaceState(i,i.state,null),bu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",r=e;do n+=e2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PA=typeof WeakMap=="function"?WeakMap:Map;function n1(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,Kh=r),Fh(t,e)},n}function r1(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fh(t,e),typeof r!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zA.bind(null,t,e,n),e.then(t,t))}function Ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var kA=lr.ReactCurrentOwner,Ot=!1;function Ct(t,e,n,r){e.child=t===null?Nw(e,null,n,r):bs(e,t.child,n,r)}function My(t,e,n,r,i){n=n.render;var s=e.ref;return Es(e,i),r=Tp(t,e,n,r,s,i),n=Sp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Re&&n&&cp(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i1(t,e,s,r,i)):(t=ru(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function i1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ca(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,er(t,e,i)}return jh(t,e,n,r,i)}function s1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(hs,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(hs,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(hs,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(hs,Ft),Ft|=r;return Ct(t,e,i,n),e.child}function o1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jh(t,e,n,r,i){var s=Dt(n)?Ii:vt.current;return s=Rs(e,s),Es(e,i),n=Tp(t,e,n,r,s,i),r=Sp(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Re&&r&&cp(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Fy(t,e,n,r,i){if(Dt(n)){var s=!0;Cu(e)}else s=!1;if(Es(e,i),e.stateNode===null)eu(t,e),t1(e,n,r),Vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Dt(n)?Ii:vt.current,c=Rs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ny(e,o,r,c),vr=!1;var m=e.memoizedState;o.state=m,bu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Lt.current||vr?(typeof h=="function"&&(Mh(e,n,h,r),u=e.memoizedState),(a=vr||by(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Dt(n)?Ii:vt.current,u=Rs(e,u));var T=n.getDerivedStateFromProps;(h=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Ny(e,o,r,u),vr=!1,m=e.memoizedState,o.state=m,bu(e,r,o,i);var S=e.memoizedState;a!==f||m!==S||Lt.current||vr?(typeof T=="function"&&(Mh(e,n,T,r),S=e.memoizedState),(c=vr||by(e,n,c,r,m,S,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Uh(t,e,n,r,s,i)}function Uh(t,e,n,r,i,s){o1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sy(e,n,!1),er(t,e,s);r=e.stateNode,kA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&Sy(e,n,!0),e.child}function a1(t){var e=t.stateNode;e.pendingContext?Ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ty(t,e.context,!1),vp(t,e.containerInfo)}function jy(t,e,n,r,i){return xs(),hp(i),e.flags|=256,Ct(t,e,n,r),e.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function l1(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(be,i&1),t===null)return Lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bh(n),e.memoizedState=zh,t):Cp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zh,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cp(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&hp(r),bs(e,t.child,null,n),t=Cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bd(Error(z(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_c({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Bh(o),e.memoizedState=zh,s);if(!(e.mode&1))return Nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=bd(s,r,void 0),Nl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),gn(r,t,i,-1))}return Np(),r=bd(Error(z(421))),Nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Nr(i.nextSibling),Bt=e,Re=!0,dn=null,t!==null&&(Xt[Jt++]=Bn,Xt[Jt++]=$n,Xt[Jt++]=Ai,Bn=t.id,$n=t.overflow,Ai=e),e=Cp(e,r.children),e.flags|=4096,e)}function Uy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dh(t.return,e,n)}function Nd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function u1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uy(t,n,e);else if(t.tag===19)Uy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nd(e,!0,n,null,s);break;case"together":Nd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xA(t,e,n){switch(e.tag){case 3:a1(e),xs();break;case 5:Dw(e);break;case 1:Dt(e.type)&&Cu(e);break;case 4:vp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Ru,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?l1(t,e,n):(Ee(be,be.current&1),t=er(t,e,n),t!==null?t.sibling:null);Ee(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return u1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,s1(t,e,n)}return er(t,e,n)}var c1,$h,d1,h1;c1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$h=function(){};d1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(kn.current);var s=null;switch(n){case"input":i=dh(t,i),r=dh(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=ph(t,i),r=ph(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Iu)}gh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h1=function(t,e,n,r){n!==r&&(e.flags|=4)};function So(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bA(t,e,n){var r=e.pendingProps;switch(dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Dt(e.type)&&Au(),ht(e),null;case 3:return r=e.stateNode,Ns(),Ce(Lt),Ce(vt),wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Xh(dn),dn=null))),$h(t,e),ht(e),null;case 5:_p(e);var i=gi(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)d1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ht(e),null}if(t=gi(kn.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[fa]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<No.length;i++)Ie(No[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Qg(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Xg(r,s),Ie("invalid",r)}gh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,a,t),i=["children",""+a]):ra.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":El(r),Yg(r,s,!0);break;case"textarea":El(r),Jg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[fa]=r,c1(t,e,!1,!1),e.stateNode=t;e:{switch(o=yh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<No.length;i++)Ie(No[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Qg(t,r),i=dh(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Xg(t,r),i=ph(t,r),Ie("invalid",t);break;default:i=r}gh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?$0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&z0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ia(t,u):typeof u=="number"&&ia(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&Yf(t,s,u,o))}switch(n){case"input":El(t),Yg(t,r,!1);break;case"textarea":El(t),Jg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)h1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=gi(ma.current),gi(kn.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return ht(e),null;case 13:if(Ce(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ut!==null&&e.mode&1&&!(e.flags&128))xw(),xs(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[In]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else dn!==null&&(Xh(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Ge===0&&(Ge=3):Np())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Ns(),$h(t,e),t===null&&da(e.stateNode.containerInfo),ht(e),null;case 10:return mp(e.type._context),ht(e),null;case 17:return Dt(e.type)&&Au(),ht(e),null;case 19:if(Ce(be),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)So(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,So(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>Ls&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return ht(e),null}else 2*Be()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,r=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=be.current,Ee(be,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return bp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function NA(t,e){switch(dp(e),e.tag){case 1:return Dt(e.type)&&Au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),Ce(Lt),Ce(vt),wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(Ce(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(be),null;case 4:return Ns(),null;case 10:return mp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var Ol=!1,gt=!1,OA=typeof WeakSet=="function"?WeakSet:Set,W=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Wh(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var zy=!1;function LA(t,e){if(Ph=Eu,t=yw(),up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)m=f,f=T;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(T=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},Eu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,R=S.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:un(e.type,P),R);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){Ve(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=zy,zy=!1,S}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wh(e,n,s)}i=i.next}while(i!==r)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f1(t){var e=t.alternate;e!==null&&(t.alternate=null,f1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[fa],delete e[bh],delete e[gA],delete e[yA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p1(t){return t.tag===5||t.tag===3||t.tag===4}function By(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Iu));else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}var tt=null,cn=!1;function pr(t,e,n){for(n=n.child;n!==null;)m1(t,e,n),n=n.sibling}function m1(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:gt||ds(n,e);case 6:var r=tt,i=cn;tt=null,pr(t,e,n),tt=r,cn=i,tt!==null&&(cn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(cn?(t=tt,n=n.stateNode,t.nodeType===8?Ad(t.parentNode,n):t.nodeType===1&&Ad(t,n),la(t)):Ad(tt,n.stateNode));break;case 4:r=tt,i=cn,tt=n.stateNode.containerInfo,cn=!0,pr(t,e,n),tt=r,cn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wh(n,e,o),i=i.next}while(i!==r)}pr(t,e,n);break;case 1:if(!gt&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,pr(t,e,n),gt=r):pr(t,e,n);break;default:pr(t,e,n)}}function $y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OA),e.forEach(function(r){var i=$A.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,cn=!1;break e;case 3:tt=a.stateNode.containerInfo,cn=!0;break e;case 4:tt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(tt===null)throw Error(z(160));m1(s,o,i),tt=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g1(e,t),e=e.sibling}function g1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),En(t),r&4){try{Ho(3,t,t.return),yc(3,t)}catch(P){Ve(t,t.return,P)}try{Ho(5,t,t.return)}catch(P){Ve(t,t.return,P)}}break;case 1:ln(e,t),En(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(ln(e,t),En(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{ia(i,"")}catch(P){Ve(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&F0(i,s),yh(a,o);var c=yh(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?$0(i,f):h==="dangerouslySetInnerHTML"?z0(i,f):h==="children"?ia(i,f):Yf(i,h,f,c)}switch(a){case"input":hh(i,s);break;case"textarea":j0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?ys(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?ys(i,!!s.multiple,s.defaultValue,!0):ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[fa]=s}catch(P){Ve(t,t.return,P)}}break;case 6:if(ln(e,t),En(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ve(t,t.return,P)}}break;case 3:if(ln(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(P){Ve(t,t.return,P)}break;case 4:ln(e,t),En(t);break;case 13:ln(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rp=Be())),r&4&&$y(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(c=gt)||h,ln(e,t),gt=c):ln(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(m=W,T=m.child,m.tag){case 0:case 11:case 14:case 15:Ho(4,m,m.return);break;case 1:ds(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Ve(r,n,P)}}break;case 5:ds(m,m.return);break;case 22:if(m.memoizedState!==null){Hy(f);continue}}T!==null?(T.return=m,W=T):Hy(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=B0("display",o))}catch(P){Ve(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Ve(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),En(t),r&4&&$y(t);break;case 21:break;default:ln(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p1(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ia(i,""),r.flags&=-33);var s=By(t);Gh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=By(t);qh(t,a,o);break;default:throw Error(z(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DA(t,e,n){W=t,y1(t)}function y1(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||gt;a=Ol;var c=gt;if(Ol=o,(gt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?qy(i):u!==null?(u.return=o,W=u):qy(i);for(;s!==null;)W=s,y1(s),s=s.sibling;W=i,Ol=a,gt=c}Wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Wy(t)}}function Wy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ky(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ky(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&la(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}gt||e.flags&512&&Hh(e)}catch(m){Ve(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Hy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function qy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{Hh(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{Hh(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var MA=Math.ceil,Du=lr.ReactCurrentDispatcher,Pp=lr.ReactCurrentOwner,tn=lr.ReactCurrentBatchConfig,ue=0,Je=null,We=null,it=0,Ft=0,hs=Yr(0),Ge=0,_a=null,Pi=0,vc=0,kp=0,qo=null,Nt=null,Rp=0,Ls=1/0,Un=null,Mu=!1,Kh=null,Lr=null,Ll=!1,Pr=null,Vu=0,Go=0,Qh=null,tu=-1,nu=0;function Pt(){return ue&6?Be():tu!==-1?tu:tu=Be()}function Dr(t){return t.mode&1?ue&2&&it!==0?it&-it:_A.transition!==null?(nu===0&&(nu=tw()),nu):(t=me,t!==0||(t=window.event,t=t===void 0?16:lw(t.type)),t):1}function gn(t,e,n,r){if(50<Go)throw Go=0,Qh=null,Error(z(185));Da(t,n,r),(!(ue&2)||t!==Je)&&(t===Je&&(!(ue&2)&&(vc|=n),Ge===4&&wr(t,it)),Mt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Ls=Be()+500,pc&&Xr()))}function Mt(t,e){var n=t.callbackNode;_2(t,e);var r=wu(t,t===Je?it:0);if(r===0)n!==null&&ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ty(n),e===1)t.tag===0?vA(Gy.bind(null,t)):Pw(Gy.bind(null,t)),pA(function(){!(ue&6)&&Xr()}),n=null;else{switch(nw(r)){case 1:n=tp;break;case 4:n=Z0;break;case 16:n=_u;break;case 536870912:n=ew;break;default:n=_u}n=A1(n,v1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v1(t,e){if(tu=-1,nu=0,ue&6)throw Error(z(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var r=wu(t,t===Je?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fu(t,r);else{e=r;var i=ue;ue|=2;var s=w1();(Je!==t||it!==e)&&(Un=null,Ls=Be()+500,wi(t,e));do try{jA();break}catch(a){_1(t,a)}while(!0);pp(),Du.current=s,ue=i,We!==null?e=0:(Je=null,it=0,e=Ge)}if(e!==0){if(e===2&&(i=Th(t),i!==0&&(r=i,e=Yh(t,i))),e===1)throw n=_a,wi(t,0),wr(t,r),Mt(t,Be()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!VA(i)&&(e=Fu(t,r),e===2&&(s=Th(t),s!==0&&(r=s,e=Yh(t,s))),e===1))throw n=_a,wi(t,0),wr(t,r),Mt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:di(t,Nt,Un);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Rp+500-Be(),10<e)){if(wu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xh(di.bind(null,t,Nt,Un),e);break}di(t,Nt,Un);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MA(r/1960))-r,10<r){t.timeoutHandle=xh(di.bind(null,t,Nt,Un),r);break}di(t,Nt,Un);break;case 5:di(t,Nt,Un);break;default:throw Error(z(329))}}}return Mt(t,Be()),t.callbackNode===n?v1.bind(null,t):null}function Yh(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=Fu(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&Xh(e)),t}function Xh(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function VA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~kp,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Gy(t){if(ue&6)throw Error(z(327));Ts();var e=wu(t,0);if(!(e&1))return Mt(t,Be()),null;var n=Fu(t,e);if(t.tag!==0&&n===2){var r=Th(t);r!==0&&(e=r,n=Yh(t,r))}if(n===1)throw n=_a,wi(t,0),wr(t,e),Mt(t,Be()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,di(t,Nt,Un),Mt(t,Be()),null}function xp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Ls=Be()+500,pc&&Xr())}}function ki(t){Pr!==null&&Pr.tag===0&&!(ue&6)&&Ts();var e=ue;ue|=1;var n=tn.transition,r=me;try{if(tn.transition=null,me=1,t)return t()}finally{me=r,tn.transition=n,ue=e,!(ue&6)&&Xr()}}function bp(){Ft=hs.current,Ce(hs)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fA(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Au();break;case 3:Ns(),Ce(Lt),Ce(vt),wp();break;case 5:_p(r);break;case 4:Ns();break;case 13:Ce(be);break;case 19:Ce(be);break;case 10:mp(r.type._context);break;case 22:case 23:bp()}n=n.return}if(Je=t,We=t=Mr(t.current,null),it=Ft=e,Ge=0,_a=null,kp=vc=Pi=0,Nt=qo=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function _1(t,e){do{var n=We;try{if(pp(),Jl.current=Lu,Ou){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ou=!1}if(Ci=0,Xe=He=Ne=null,Wo=!1,ga=0,Pp.current=null,n===null||n.return===null){Ge=1,_a=e,We=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=it,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var T=Ly(o);if(T!==null){T.flags&=-257,Dy(T,o,a,s,e),T.mode&1&&Oy(s,c,e),e=T,u=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(u),e.updateQueue=P}else S.add(u);break e}else{if(!(e&1)){Oy(s,c,e),Np();break e}u=Error(z(426))}}else if(Re&&a.mode&1){var R=Ly(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Dy(R,o,a,s,e),hp(Os(u,a));break e}}s=u=Os(u,a),Ge!==4&&(Ge=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=n1(s,u,e);Py(s,v);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Lr===null||!Lr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=r1(s,a,e);Py(s,b);break e}}s=s.return}while(s!==null)}T1(n)}catch(L){e=L,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function w1(){var t=Du.current;return Du.current=Lu,t===null?Lu:t}function Np(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||!(Pi&268435455)&&!(vc&268435455)||wr(Je,it)}function Fu(t,e){var n=ue;ue|=2;var r=w1();(Je!==t||it!==e)&&(Un=null,wi(t,e));do try{FA();break}catch(i){_1(t,i)}while(!0);if(pp(),ue=n,Du.current=r,We!==null)throw Error(z(261));return Je=null,it=0,Ge}function FA(){for(;We!==null;)E1(We)}function jA(){for(;We!==null&&!c2();)E1(We)}function E1(t){var e=I1(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?T1(t):We=e,Pp.current=null}function T1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NA(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,We=null;return}}else if(n=bA(n,e,Ft),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ge===0&&(Ge=5)}function di(t,e,n){var r=me,i=tn.transition;try{tn.transition=null,me=1,UA(t,e,n,r)}finally{tn.transition=i,me=r}return null}function UA(t,e,n,r){do Ts();while(Pr!==null);if(ue&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w2(t,s),t===Je&&(We=Je=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,A1(_u,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=me;me=1;var a=ue;ue|=4,Pp.current=null,LA(t,n),g1(n,t),oA(kh),Eu=!!Ph,kh=Ph=null,t.current=n,DA(n),d2(),ue=a,me=o,tn.transition=s}else t.current=n;if(Ll&&(Ll=!1,Pr=t,Vu=i),s=t.pendingLanes,s===0&&(Lr=null),p2(n.stateNode),Mt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=Kh,Kh=null,t;return Vu&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===Qh?Go++:(Go=0,Qh=t):Go=0,Xr(),null}function Ts(){if(Pr!==null){var t=nw(Vu),e=tn.transition,n=me;try{if(tn.transition=null,me=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Vu=0,ue&6)throw Error(z(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:Ho(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var m=h.sibling,T=h.return;if(f1(h),h===c){W=null;break}if(m!==null){m.return=T,W=m;break}W=T}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var R=P.sibling;P.sibling=null,P=R}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=y;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(L){Ve(a,a.return,L)}if(a===o){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(ue=i,Xr(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(uc,t)}catch{}r=!0}return r}finally{me=n,tn.transition=e}}return!1}function Ky(t,e,n){e=Os(n,e),e=n1(t,e,1),t=Or(t,e,1),e=Pt(),t!==null&&(Da(t,1,e),Mt(t,e))}function Ve(t,e,n){if(t.tag===3)Ky(t,t,n);else for(;e!==null;){if(e.tag===3){Ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lr===null||!Lr.has(r))){t=Os(n,t),t=r1(e,t,1),e=Or(e,t,1),t=Pt(),e!==null&&(Da(e,1,t),Mt(e,t));break}}e=e.return}}function zA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(it&n)===n&&(Ge===4||Ge===3&&(it&130023424)===it&&500>Be()-Rp?wi(t,0):kp|=n),Mt(t,e)}function S1(t,e){e===0&&(t.mode&1?(e=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):e=1);var n=Pt();t=Zn(t,e),t!==null&&(Da(t,e,n),Mt(t,n))}function BA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),S1(t,n)}function $A(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),S1(t,n)}var I1;I1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,xA(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&kw(e,ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eu(t,e),t=e.pendingProps;var i=Rs(e,vt.current);Es(e,n),i=Tp(null,e,r,t,i,n);var s=Sp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,Cu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yp(e),i.updater=gc,e.stateNode=i,i._reactInternals=e,Vh(e,r,t,n),e=Uh(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&cp(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HA(r),t=un(r,t),i){case 0:e=jh(null,e,r,t,n);break e;case 1:e=Fy(null,e,r,t,n);break e;case 11:e=My(null,e,r,t,n);break e;case 14:e=Vy(null,e,r,un(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),jh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Fy(t,e,r,i,n);case 3:e:{if(a1(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lw(t,e),bu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Os(Error(z(423)),e),e=jy(t,e,r,n,i);break e}else if(r!==i){i=Os(Error(z(424)),e),e=jy(t,e,r,n,i);break e}else for(Ut=Nr(e.stateNode.containerInfo.firstChild),Bt=e,Re=!0,dn=null,n=Nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){e=er(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return Dw(e),t===null&&Lh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rh(r,i)?o=null:s!==null&&Rh(r,s)&&(e.flags|=32),o1(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&Lh(e),null;case 13:return l1(t,e,n);case 4:return vp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),My(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Ru,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Lt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Kn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Es(e,n),i=rn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Vy(t,e,r,i,n);case 15:return i1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),eu(t,e),e.tag=1,Dt(r)?(t=!0,Cu(e)):t=!1,Es(e,n),t1(e,r,i),Vh(e,r,i,n),Uh(null,e,r,!0,t,n);case 19:return u1(t,e,n);case 22:return s1(t,e,n)}throw Error(z(156,e.tag))};function A1(t,e){return J0(t,e)}function WA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new WA(t,e,n,r)}function Op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HA(t){if(typeof t=="function")return Op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jf)return 11;if(t===Zf)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ru(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return Ei(n.children,i,s,e);case Xf:o=8,i|=8;break;case ah:return t=en(12,n,e,i|2),t.elementType=ah,t.lanes=s,t;case lh:return t=en(13,n,e,i),t.elementType=lh,t.lanes=s,t;case uh:return t=en(19,n,e,i),t.elementType=uh,t.lanes=s,t;case D0:return _c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O0:o=10;break e;case L0:o=9;break e;case Jf:o=11;break e;case Zf:o=14;break e;case yr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function _c(t,e,n,r){return t=en(22,t,r,e),t.elementType=D0,t.lanes=n,t.stateNode={isHidden:!1},t}function Od(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,r,i,s,o,a,u){return t=new qA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(s),t}function GA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function C1(t){if(!t)return zr;t=t._reactInternals;e:{if(ji(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Dt(n))return Cw(t,n,e)}return e}function P1(t,e,n,r,i,s,o,a,u){return t=Lp(n,r,!0,t,i,s,o,a,u),t.context=C1(null),n=t.current,r=Pt(),i=Dr(n),s=Kn(r,i),s.callback=e??null,Or(n,s,i),t.current.lanes=i,Da(t,i,r),Mt(t,r),t}function wc(t,e,n,r){var i=e.current,s=Pt(),o=Dr(i);return n=C1(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Or(i,e,o),t!==null&&(gn(t,i,o,s),Xl(t,i,o)),o}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){Qy(t,e),(t=t.alternate)&&Qy(t,e)}function KA(){return null}var k1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mp(t){this._internalRoot=t}Ec.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));wc(t,e,null,null)};Ec.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){wc(null,t,null,null)}),e[Jn]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=sw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&aw(t)}};function Vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yy(){}function QA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ju(o);s.call(c)}}var o=P1(e,r,t,0,null,!1,!1,"",Yy);return t._reactRootContainer=o,t[Jn]=o.current,da(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ju(u);a.call(c)}}var u=Lp(t,0,!1,null,null,!1,!1,"",Yy);return t._reactRootContainer=u,t[Jn]=u.current,da(t.nodeType===8?t.parentNode:t),ki(function(){wc(e,u,n,r)}),u}function Sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ju(o);a.call(u)}}wc(e,o,t,i)}else o=QA(n,e,t,i,r);return ju(o)}rw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(np(e,n|1),Mt(e,Be()),!(ue&6)&&(Ls=Be()+500,Xr()))}break;case 13:ki(function(){var r=Zn(t,1);if(r!==null){var i=Pt();gn(r,t,1,i)}}),Dp(t,1)}};rp=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=Pt();gn(e,t,134217728,n)}Dp(t,134217728)}};iw=function(t){if(t.tag===13){var e=Dr(t),n=Zn(t,e);if(n!==null){var r=Pt();gn(n,t,e,r)}Dp(t,e)}};sw=function(){return me};ow=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};_h=function(t,e,n){switch(e){case"input":if(hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fc(r);if(!i)throw Error(z(90));V0(r),hh(r,i)}}}break;case"textarea":j0(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};q0=xp;G0=ki;var YA={usingClientEntryPoint:!1,Events:[Va,os,fc,W0,H0,xp]},Io={findFiberByHostInstance:pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XA={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||KA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{uc=Dl.inject(XA),Pn=Dl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YA;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(e))throw Error(z(200));return GA(t,e,null,n)};Wt.createRoot=function(t,e){if(!Vp(t))throw Error(z(299));var n=!1,r="",i=k1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,da(t.nodeType===8?t.parentNode:t),new Mp(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return ki(t)};Wt.hydrate=function(t,e,n){if(!Tc(e))throw Error(z(200));return Sc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Vp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=k1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P1(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,da(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ec(e)};Wt.render=function(t,e,n){if(!Tc(e))throw Error(z(200));return Sc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(z(40));return t._reactRootContainer?(ki(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};Wt.unstable_batchedUpdates=xp;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Sc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function R1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R1)}catch(t){console.error(t)}}R1(),R0.exports=Wt;var Fp=R0.exports,Xy=Fp;sh.createRoot=Xy.createRoot,sh.hydrateRoot=Xy.hydrateRoot;const JA="/neighborhood-value-plus/assets/logo_notext-CB4EPGfG.png",ZA="/neighborhood-value-plus/assets/logo_text-BeXtmdLt.png";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function eC(t,e,n){return(e=nC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jy(Object(n),!0).forEach(function(r){eC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nC(t){var e=tC(t,"string");return typeof e=="symbol"?e:e+""}const Zy=()=>{};let jp={},x1={},b1=null,N1={mark:Zy,measure:Zy};try{typeof window<"u"&&(jp=window),typeof document<"u"&&(x1=document),typeof MutationObserver<"u"&&(b1=MutationObserver),typeof performance<"u"&&(N1=performance)}catch{}const{userAgent:ev=""}=jp.navigator||{},Br=jp,Pe=x1,tv=b1,Ml=N1;Br.document;const ur=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",O1=~ev.indexOf("MSIE")||~ev.indexOf("Trident/");var rC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,iC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,L1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},sC={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},D1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_t="classic",Ic="duotone",oC="sharp",aC="sharp-duotone",M1=[_t,Ic,oC,aC],lC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},uC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),dC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hC=["fak","fa-kit","fakd","fa-kit-duotone"],nv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},fC=["kit"],pC={kit:{"fa-kit":"fak"}},mC=["fak","fakd"],gC={kit:{fak:"fa-kit"}},rv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Vl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yC=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],vC=["fak","fa-kit","fakd","fa-kit-duotone"],_C={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},EC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Jh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},TC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Zh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...yC,...TC],SC=["solid","regular","light","thin","duotone","brands"],V1=[1,2,3,4,5,6,7,8,9,10],IC=V1.concat([11,12,13,14,15,16,17,18,19,20]),AC=[...Object.keys(EC),...SC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vl.GROUP,Vl.SWAP_OPACITY,Vl.PRIMARY,Vl.SECONDARY].concat(V1.map(t=>"".concat(t,"x"))).concat(IC.map(t=>"w-".concat(t))),CC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const tr="___FONT_AWESOME___",ef=16,F1="fa",j1="svg-inline--fa",Ri="data-fa-i2svg",tf="data-fa-pseudo-element",PC="data-fa-pseudo-element-pending",Up="data-prefix",zp="data-icon",iv="fontawesome-i2svg",kC="async",RC=["HTML","HEAD","STYLE","SCRIPT"],U1=(()=>{try{return!0}catch{return!1}})();function ja(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_t]}})}const z1=U({},L1);z1[_t]=U(U(U(U({},{"fa-duotone":"duotone"}),L1[_t]),nv.kit),nv["kit-duotone"]);const xC=ja(z1),nf=U({},dC);nf[_t]=U(U(U(U({},{duotone:"fad"}),nf[_t]),rv.kit),rv["kit-duotone"]);const sv=ja(nf),rf=U({},Jh);rf[_t]=U(U({},rf[_t]),gC.kit);const Bp=ja(rf),sf=U({},wC);sf[_t]=U(U({},sf[_t]),pC.kit);ja(sf);const bC=rC,B1="fa-layers-text",NC=iC,OC=U({},lC);ja(OC);const LC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dd=sC,DC=[...fC,...AC],Ko=Br.FontAwesomeConfig||{};function MC(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function VC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Pe&&typeof Pe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=VC(MC(n));i!=null&&(Ko[r]=i)});const $1={styleDefault:"solid",familyDefault:_t,cssPrefix:F1,replacementClass:j1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ko.familyPrefix&&(Ko.cssPrefix=Ko.familyPrefix);const Ds=U(U({},$1),Ko);Ds.autoReplaceSvg||(Ds.observeMutations=!1);const q={};Object.keys($1).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){Ds[t]=e,Qo.forEach(n=>n(q))},get:function(){return Ds[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){Ds.cssPrefix=t,Qo.forEach(e=>e(q))},get:function(){return Ds.cssPrefix}});Br.FontAwesomeConfig=q;const Qo=[];function FC(t){return Qo.push(t),()=>{Qo.splice(Qo.indexOf(t),1)}}const mr=ef,An={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jC(t){if(!t||!ur)return;const e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Pe.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Pe.head.insertBefore(e,r),t}const UC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wa(){let t=12,e="";for(;t-- >0;)e+=UC[Math.random()*62|0];return e}function Qs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $p(t){return t.classList?Qs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function W1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zC(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(W1(t[n]),'" '),"").trim()}function Ac(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Wp(t){return t.size!==An.size||t.x!==An.x||t.y!==An.y||t.rotate!==An.rotate||t.flipX||t.flipY}function BC(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function $C(t){let{transform:e,width:n=ef,height:r=ef,startCentered:i=!1}=t,s="";return i&&O1?s+="translate(".concat(e.x/mr-n/2,"em, ").concat(e.y/mr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/mr,"em), calc(-50% + ").concat(e.y/mr,"em)) "):s+="translate(".concat(e.x/mr,"em, ").concat(e.y/mr,"em) "),s+="scale(".concat(e.size/mr*(e.flipX?-1:1),", ").concat(e.size/mr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var WC=`:root, :host {
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
}`;function H1(){const t=F1,e=j1,n=q.cssPrefix,r=q.replacementClass;let i=WC;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let ov=!1;function Md(){q.autoAddCss&&!ov&&(jC(H1()),ov=!0)}var HC={mixout(){return{dom:{css:H1,insertCss:Md}}},hooks(){return{beforeDOMElementCreation(){Md()},beforeI2svg(){Md()}}}};const nr=Br||{};nr[tr]||(nr[tr]={});nr[tr].styles||(nr[tr].styles={});nr[tr].hooks||(nr[tr].hooks={});nr[tr].shims||(nr[tr].shims=[]);var Cn=nr[tr];const q1=[],G1=function(){Pe.removeEventListener("DOMContentLoaded",G1),Uu=1,q1.map(t=>t())};let Uu=!1;ur&&(Uu=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),Uu||Pe.addEventListener("DOMContentLoaded",G1));function qC(t){ur&&(Uu?setTimeout(t,0):q1.push(t))}function Ua(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?W1(t):"<".concat(e," ").concat(zC(n),">").concat(r.map(Ua).join(""),"</").concat(e,">")}function av(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=a(h,e[c],c,e);return h};function GC(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function of(t){const e=GC(t);return e.length===1?e[0].toString(16):null}function KC(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function lv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function af(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=lv(e);typeof Cn.hooks.addPack=="function"&&!r?Cn.hooks.addPack(t,lv(e)):Cn.styles[t]=U(U({},Cn.styles[t]||{}),i),t==="fas"&&af("fa",e)}const{styles:Ea,shims:QC}=Cn,K1=Object.keys(Bp),YC=K1.reduce((t,e)=>(t[e]=Object.keys(Bp[e]),t),{});let Hp=null,Q1={},Y1={},X1={},J1={},Z1={};function XC(t){return~DC.indexOf(t)}function JC(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!XC(i)?i:null}const eE=()=>{const t=r=>Vd(Ea,(i,s,o)=>(i[o]=Vd(s,r,{}),i),{});Q1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),Y1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),Z1=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in Ea||q.autoFetchSvg,n=Vd(QC,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});X1=n.names,J1=n.unicodes,Hp=Cc(q.styleDefault,{family:q.familyDefault})};FC(t=>{Hp=Cc(t.styleDefault,{family:q.familyDefault})});eE();function qp(t,e){return(Q1[t]||{})[e]}function ZC(t,e){return(Y1[t]||{})[e]}function yi(t,e){return(Z1[t]||{})[e]}function tE(t){return X1[t]||{prefix:null,iconName:null}}function eP(t){const e=J1[t],n=qp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $r(){return Hp}const nE=()=>({prefix:null,iconName:null,rest:[]});function tP(t){let e=_t;const n=K1.reduce((r,i)=>(r[i]="".concat(q.cssPrefix,"-").concat(i),r),{});return M1.forEach(r=>{(t.includes(n[r])||t.some(i=>YC[r].includes(i)))&&(e=r)}),e}function Cc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_t}=e,r=xC[n][t];if(n===Ic&&!t)return"fad";const i=sv[n][t]||sv[n][r],s=t in Cn.styles?t:null;return i||s||null}function nP(t){let e=[],n=null;return t.forEach(r=>{const i=JC(q.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function uv(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Pc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=Zh.concat(vC),s=uv(t.filter(f=>i.includes(f))),o=uv(t.filter(f=>!Zh.includes(f))),a=s.filter(f=>(r=f,!D1.includes(f))),[u=null]=a,c=tP(s),h=U(U({},nP(o)),{},{prefix:Cc(u,{family:c})});return U(U(U({},h),oP({values:t,family:c,styles:Ea,config:q,canonical:h,givenPrefix:r})),rP(n,r,h))}function rP(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?tE(i):{},o=yi(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!Ea.far&&Ea.fas&&!q.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const iP=M1.filter(t=>t!==_t||t!==Ic),sP=Object.keys(Jh).filter(t=>t!==_t).map(t=>Object.keys(Jh[t])).flat();function oP(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,a=n===Ic,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(u||c||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&iP.includes(n)&&(Object.keys(s).find(m=>sP.includes(m))||o.autoFetchSvg)){const m=cC.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=yi(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=$r()||"fas"),r}class aP{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=U(U({},this.definitions[s]||{}),i[s]),af(s,i[s]);const o=Bp[_t][s];o&&af(o,i[s]),eE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let cv=[],fs={};const Ss={},lP=Object.keys(Ss);function uP(t,e){let{mixoutsTo:n}=e;return cv=t,fs={},Object.keys(Ss).forEach(r=>{lP.indexOf(r)===-1&&delete Ss[r]}),cv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{fs[o]||(fs[o]=[]),fs[o].push(s[o])})}r.provides&&r.provides(Ss)}),n}function lf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(fs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function xi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(fs[t]||[]).forEach(s=>{s.apply(null,n)})}function Wr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ss[t]?Ss[t].apply(null,e):void 0}function uf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||$r();if(e)return e=yi(n,e)||e,av(rE.definitions,n,e)||av(Cn.styles,n,e)}const rE=new aP,cP=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,xi("noAuto")},dP={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ur?(xi("beforeI2svg",t),Wr("pseudoElements2svg",t),Wr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,qC(()=>{fP({autoReplaceSvgRoot:e}),xi("watch",t)})}},hP={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Cc(t[0]);return{prefix:n,iconName:yi(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(bC))){const e=Pc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||$r(),iconName:yi(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=$r();return{prefix:e,iconName:yi(e,t)||t}}}},qt={noAuto:cP,config:q,dom:dP,parse:hP,library:rE,findIconDefinition:uf,toHtml:Ua},fP=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Pe}=t;(Object.keys(Cn.styles).length>0||q.autoFetchSvg)&&ur&&q.autoReplaceSvg&&qt.dom.i2svg({node:e})};function kc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ua(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ur)return;const n=Pe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function pP(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Wp(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Ac(U(U({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function mP(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function Gp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:h,watchable:f=!1}=t,{width:m,height:T}=n.found?n:e,S=mC.includes(r),P=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(L=>h.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(h.classes).join(" ");let R={children:[],attributes:U(U({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:P,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(T)})};const v=S&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/T*16*.0625,"em")}:{};f&&(R.attributes[Ri]=""),a&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||wa())},children:[a]}),delete R.attributes.title);const y=U(U({},R),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:U(U({},v),h.styles)}),{children:I,attributes:b}=n.found&&e.found?Wr("generateAbstractMask",y)||{children:[],attributes:{}}:Wr("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=b,o?mP(y):pP(y)}function dv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(u[Ri]="");const c=U({},o.styles);Wp(i)&&(c.transform=$C({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const h=Ac(c);h.length>0&&(u.style=h);const f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function gP(t){const{content:e,title:n,extra:r}=t,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ac(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Fd}=Cn;function cf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Dd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Dd.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Dd.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const yP={found:!1,width:512,height:512};function vP(t,e){!U1&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function df(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=$r()),new Promise((r,i)=>{if(n==="fa"){const s=tE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fd[e]&&Fd[e][t]){const s=Fd[e][t];return r(cf(s))}vP(t,e),r(U(U({},yP),{},{icon:q.showMissingIcons&&t?Wr("missingIconAbstract")||{}:{}}))})}const hv=()=>{},hf=q.measurePerformance&&Ml&&Ml.mark&&Ml.measure?Ml:{mark:hv,measure:hv},Oo='FA "6.7.2"',_P=t=>(hf.mark("".concat(Oo," ").concat(t," begins")),()=>iE(t)),iE=t=>{hf.mark("".concat(Oo," ").concat(t," ends")),hf.measure("".concat(Oo," ").concat(t),"".concat(Oo," ").concat(t," begins"),"".concat(Oo," ").concat(t," ends"))};var Kp={begin:_P,end:iE};const iu=()=>{};function fv(t){return typeof(t.getAttribute?t.getAttribute(Ri):null)=="string"}function wP(t){const e=t.getAttribute?t.getAttribute(Up):null,n=t.getAttribute?t.getAttribute(zp):null;return e&&n}function EP(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function TP(){return q.autoReplaceSvg===!0?su.replace:su[q.autoReplaceSvg]||su.replace}function SP(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function IP(t){return Pe.createElement(t)}function sE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?SP:IP}=e;if(typeof t=="string")return Pe.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(sE(s,{ceFn:n}))}),r}function AP(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const su={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sE(n),e)}),e.getAttribute(Ri)===null&&q.keepOriginalSource){let n=Pe.createComment(AP(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$p(e).indexOf(q.replacementClass))return su.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===q.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Ua(s)).join(`
`);e.setAttribute(Ri,""),e.innerHTML=i}};function pv(t){t()}function oE(t,e){const n=typeof e=="function"?e:iu;if(t.length===0)n();else{let r=pv;q.mutateApproach===kC&&(r=Br.requestAnimationFrame||pv),r(()=>{const i=TP(),s=Kp.begin("mutate");t.map(i),s(),n()})}}let Qp=!1;function aE(){Qp=!0}function ff(){Qp=!1}let zu=null;function mv(t){if(!tv||!q.observeMutations)return;const{treeCallback:e=iu,nodeCallback:n=iu,pseudoElementsCallback:r=iu,observeMutationsRoot:i=Pe}=t;zu=new tv(s=>{if(Qp)return;const o=$r();Qs(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!fv(a.addedNodes[0])&&(q.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&q.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&fv(a.target)&&~LC.indexOf(a.attributeName))if(a.attributeName==="class"&&wP(a.target)){const{prefix:u,iconName:c}=Pc($p(a.target));a.target.setAttribute(Up,u||o),c&&a.target.setAttribute(zp,c)}else EP(a.target)&&n(a.target)})}),ur&&zu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function CP(){zu&&zu.disconnect()}function PP(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function kP(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Pc($p(t));return i.prefix||(i.prefix=$r()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ZC(i.prefix,t.innerText)||qp(i.prefix,of(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function RP(t){const e=Qs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||wa()):(e["aria-hidden"]="true",e.focusable="false")),e}function xP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:An,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=kP(t),s=RP(t),o=lf("parseNodeAttributes",{},t);let a=e.styleParser?PP(t):[];return U({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:An,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:bP}=Cn;function lE(t){const e=q.autoReplaceSvg==="nest"?gv(t,{styleParser:!1}):gv(t);return~e.extra.classes.indexOf(B1)?Wr("generateLayersText",t,e):Wr("generateSvgReplacementMutation",t,e)}function NP(){return[...hC,...Zh]}function yv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ur)return Promise.resolve();const n=Pe.documentElement.classList,r=h=>n.add("".concat(iv,"-").concat(h)),i=h=>n.remove("".concat(iv,"-").concat(h)),s=q.autoFetchSvg?NP():D1.concat(Object.keys(bP));s.includes("fa")||s.push("fa");const o=[".".concat(B1,":not([").concat(Ri,"])")].concat(s.map(h=>".".concat(h,":not([").concat(Ri,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Qs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Kp.begin("onTree"),c=a.reduce((h,f)=>{try{const m=lE(f);m&&h.push(m)}catch(m){U1||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,f)=>{Promise.all(c).then(m=>{oE(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(m=>{u(),f(m)})})}function OP(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;lE(t).then(n=>{n&&oE([n],e)})}function LP(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:uf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:uf(i||{})),t(r,U(U({},n),{},{mask:i}))}}const DP=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:h={}}=e;if(!t)return;const{prefix:f,iconName:m,icon:T}=t;return kc(U({type:"icon"},t),()=>(xi("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(a||wa()):(c["aria-hidden"]="true",c.focusable="false")),Gp({icons:{main:cf(T),mask:i?cf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:m,transform:U(U({},An),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:h,classes:u}})))};var MP={mixout(){return{icon:LP(DP)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=yv,t.nodeCallback=OP,t}}},provides(t){t.i2svg=function(e){const{node:n=Pe,callback:r=()=>{}}=e;return yv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:h,extra:f}=n;return new Promise((m,T)=>{Promise.all([df(r,o),c.iconName?df(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[P,R]=S;m([e,Gp({icons:{main:P,mask:R},prefix:o,iconName:r,transform:a,symbol:u,maskId:h,title:i,titleId:s,extra:f,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Ac(o);a.length>0&&(r.style=a);let u;return Wp(s)&&(u=Wr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},VP={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return kc({type:"layer"},()=>{xi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},FP={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return kc({type:"counter",content:t},()=>(xi("beforeDOMElementCreation",{content:t,params:e}),gP({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},jP={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return kc({type:"text",content:t},()=>(xi("beforeDOMElementCreation",{content:t,params:e}),dv({content:t,transform:U(U({},An),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(O1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,dv({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const UP=new RegExp('"',"ug"),vv=[1105920,1112319],_v=U(U(U(U({},{FontAwesome:{normal:"fas",400:"fas"}}),uC),CC),_C),pf=Object.keys(_v).reduce((t,e)=>(t[e.toLowerCase()]=_v[e],t),{}),zP=Object.keys(pf).reduce((t,e)=>{const n=pf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function BP(t){const e=t.replace(UP,""),n=KC(e,0),r=n>=vv[0]&&n<=vv[1],i=e.length===2?e[0]===e[1]:!1;return{value:of(i?e[0]:e),isSecondary:r||i}}function $P(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(pf[n]||{})[i]||zP[n]}function wv(t,e){const n="".concat(PC).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Qs(t.children).filter(m=>m.getAttribute(tf)===e)[0],a=Br.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(NC),h=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){const m=a.getPropertyValue("content");let T=$P(u,h);const{value:S,isSecondary:P}=BP(m),R=c[0].startsWith("FontAwesome");let v=qp(T,S),y=v;if(R){const I=eP(S);I.iconName&&I.prefix&&(v=I.iconName,T=I.prefix)}if(v&&!P&&(!o||o.getAttribute(Up)!==T||o.getAttribute(zp)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=xP(),{extra:b}=I;b.attributes[tf]=e,df(v,T).then(L=>{const V=Gp(U(U({},I),{},{icons:{main:L,mask:nE()},prefix:T,iconName:y,extra:b,watchable:!0})),E=Pe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=V.map(g=>Ua(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function WP(t){return Promise.all([wv(t,"::before"),wv(t,"::after")])}function HP(t){return t.parentNode!==document.head&&!~RC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(tf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ev(t){if(ur)return new Promise((e,n)=>{const r=Qs(t.querySelectorAll("*")).filter(HP).map(WP),i=Kp.begin("searchPseudoElements");aE(),Promise.all(r).then(()=>{i(),ff(),e()}).catch(()=>{i(),ff(),n()})})}var qP={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ev,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Pe}=e;q.searchPseudoElements&&Ev(n)}}};let Tv=!1;var GP={mixout(){return{dom:{unwatch(){aE(),Tv=!0}}}},hooks(){return{bootstrap(){mv(lf("mutationObserverCallbacks",{}))},noAuto(){CP()},watch(t){const{observeMutationsRoot:e}=t;Tv?ff():mv(lf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Sv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var KP={mixout(){return{parse:{transform:t=>Sv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Sv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(u," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:h,path:f};return{tag:"g",attributes:U({},m.outer),children:[{tag:"g",attributes:U({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:U(U({},n.icon.attributes),m.path)}]}]}}}};const jd={x:0,y:0,width:"100%",height:"100%"};function Iv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function QP(t){return t.tag==="g"?t.children:[t]}var YP={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Pc(n.split(" ").map(i=>i.trim())):nE();return r.prefix||(r.prefix=$r()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:h,icon:f}=s,m=BC({transform:a,containerWidth:h,iconWidth:u}),T={tag:"rect",attributes:U(U({},jd),{},{fill:"white"})},S=c.children?{children:c.children.map(Iv)}:{},P={tag:"g",attributes:U({},m.inner),children:[Iv(U({tag:c.tag,attributes:U(U({},c.attributes),m.path)},S))]},R={tag:"g",attributes:U({},m.outer),children:[P]},v="mask-".concat(o||wa()),y="clip-".concat(o||wa()),I={tag:"mask",attributes:U(U({},jd),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,R]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:QP(f)},I]};return n.push(b,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},jd)}),{children:n,attributes:r}}}},XP={provides(t){let e=!1;Br.matchMedia&&(e=Br.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=U(U({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:U(U({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:U(U({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},JP={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ZP=[HC,MP,VP,FP,jP,qP,GP,KP,YP,XP,JP];uP(ZP,{mixoutsTo:qt});qt.noAuto;qt.config;qt.library;qt.dom;const mf=qt.parse;qt.findIconDefinition;qt.toHtml;const ek=qt.icon;qt.layer;qt.text;qt.counter;var uE={exports:{}},tk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nk=tk,rk=nk;function cE(){}function dE(){}dE.resetWarningCache=cE;var ik=function(){function t(r,i,s,o,a,u){if(u!==rk){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:dE,resetWarningCache:cE};return n.PropTypes=n,n};uE.exports=ik();var sk=uE.exports;const re=y0(sk);function Av(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Sn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Av(Object(n),!0).forEach(function(r){ps(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Av(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bu(t){"@babel/helpers - typeof";return Bu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bu(t)}function ps(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ok(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ak(t,e){if(t==null)return{};var n=ok(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function gf(t){return lk(t)||uk(t)||ck(t)||dk()}function lk(t){if(Array.isArray(t))return yf(t)}function uk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ck(t,e){if(t){if(typeof t=="string")return yf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yf(t,e)}}function yf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hk(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,h=t.spinReverse,f=t.pulse,m=t.fixedWidth,T=t.inverse,S=t.border,P=t.listItem,R=t.flip,v=t.size,y=t.rotation,I=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":h,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":m,"fa-inverse":T,"fa-border":S,"fa-li":P,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},ps(e,"fa-".concat(v),typeof v<"u"&&v!==null),ps(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),ps(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),ps(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(L){return b[L]?L:null}).filter(function(L){return L})}function fk(t){return t=t-0,t===t}function hE(t){return fk(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var pk=["style"];function mk(t){return t.charAt(0).toUpperCase()+t.slice(1)}function gk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=hE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[mk(i)]=s:e[i]=s,e},{})}function fE(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return fE(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var h=e.attributes[c];switch(c){case"class":u.attrs.className=h,delete e.attributes.class;break;case"style":u.attrs.style=gk(h);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=h:u.attrs[hE(c)]=h}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=ak(n,pk);return i.attrs.style=Sn(Sn({},i.attrs.style),o),t.apply(void 0,[e.tag,Sn(Sn({},i.attrs),a)].concat(gf(r)))}var pE=!1;try{pE=!0}catch{}function yk(){if(!pE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Cv(t){if(t&&Bu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(mf.icon)return mf.icon(t);if(t===null)return null;if(t&&Bu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ud(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ps({},t,e):{}}var Pv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ae=La.forwardRef(function(t,e){var n=Sn(Sn({},Pv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,h=Cv(r),f=Ud("classes",[].concat(gf(hk(n)),gf((o||"").split(" ")))),m=Ud("transform",typeof n.transform=="string"?mf.transform(n.transform):n.transform),T=Ud("mask",Cv(i)),S=ek(h,Sn(Sn(Sn(Sn({},f),m),T),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!S)return yk("Could not find icon",h),null;var P=S.abstract,R={ref:e};return Object.keys(n).forEach(function(v){Pv.hasOwnProperty(v)||(R[v]=n[v])}),vk(P[0],R)});Ae.displayName="FontAwesomeIcon";Ae.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var vk=fE.bind(null,La.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _k={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},kv={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},wk={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Ek={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Tk={prefix:"fas",iconName:"seedling",icon:[512,512,[127793,"sprout"],"f4d8","M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]},Sk={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},Ik={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Ak={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Ck={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Pk=Ck,kk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Rk=kk,xk={prefix:"fas",iconName:"handshake-angle",icon:[640,512,["hands-helping"],"f4c4","M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"]},bk=xk,Nk={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Rv=Nk,Ok={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Lk=Ok,$u={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Dk={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Mk={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},bi=Mk,Vk={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},Fk={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},jk={prefix:"fas",iconName:"broom",icon:[576,512,[129529],"f51a","M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"]},Uk={prefix:"fas",iconName:"dice",icon:[640,512,[127922],"f522","M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},zk=({onClose:t,onLocationSelect:e})=>{const[n,r]=D.useState(""),[i,s]=D.useState([]),[o,a]=D.useState(!1),[u,c]=D.useState(null),h=D.useRef(null);D.useEffect(()=>{if(n.trim().length<3){s([]);return}return h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{f(n)},300),()=>{h.current&&clearTimeout(h.current)}},[n]);const f=async S=>{if(S.trim()){a(!0),c(null);try{const R=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(S)}.json?access_token=pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ&proximity=-122.5715,45.498&bbox=-122.8,45.4,-122.3,45.6&limit=5&types=address,poi,place&country=US`);if(!R.ok)throw new Error("Search request failed");const v=await R.json();s(v.features||[])}catch(P){console.error("Geocoding error:",P),c("Failed to search addresses. Please try again."),s([])}finally{a(!1)}}},m=S=>{const[P,R]=S.center;e&&e({longitude:P,latitude:R,zoom:16,address:S.place_name}),t()},T=()=>{r(""),s([]),c(null)};return _.jsxs("div",{className:"header-panel search-panel",children:[_.jsxs("div",{className:"panel-header",children:[_.jsx("h3",{children:"Search Addresses"}),_.jsx("button",{className:"close-btn",onClick:t,children:_.jsx(Ae,{icon:bi})})]}),_.jsxs("div",{className:"panel-content",children:[_.jsx("div",{className:"search-container",children:_.jsxs("div",{className:"search-input-wrapper",children:[_.jsx("input",{type:"text",value:n,onChange:S=>r(S.target.value),placeholder:"Search for a place or address...",className:"search-input",autoFocus:!0}),n&&_.jsx("button",{className:"clear-search-btn",onClick:T,"aria-label":"Clear search",children:_.jsx(Ae,{icon:bi})}),o&&_.jsx("div",{className:"search-loading",children:_.jsx(Ae,{icon:Vk,spin:!0})})]})}),u&&_.jsx("div",{className:"search-error",children:u}),_.jsxs("div",{className:"search-results",children:[i.length>0&&_.jsx("div",{className:"results-header",children:_.jsxs("span",{children:["Found ",i.length," result",i.length!==1?"s":""]})}),i.map((S,P)=>{var R;return _.jsxs("div",{className:"search-result-item",onClick:()=>m(S),children:[_.jsx("div",{className:"result-icon",children:_.jsx(Ae,{icon:Rv})}),_.jsxs("div",{className:"result-content",children:[_.jsx("div",{className:"result-name",children:S.text}),_.jsx("div",{className:"result-address",children:S.place_name}),((R=S.properties)==null?void 0:R.category)&&_.jsx("div",{className:"result-category",children:S.properties.category})]})]},`${S.id}-${P}`)}),n.trim().length>=3&&i.length===0&&!o&&!u&&_.jsxs("div",{className:"no-results",children:[_.jsx(Ae,{icon:Rv}),_.jsxs("p",{children:['No results found for "',n,'"']}),_.jsx("p",{className:"no-results-hint",children:"Try searching for a street address, business name, or landmark"})]})]})]})]})},Ms=[{id:"lawn-restoration",name:"Lawn Restoration",color:"#008000",icon:Tk},{id:"sidewalk-repair",name:"Sidewalk Repair",color:"#808080",icon:Ik},{id:"homeless-outreach",name:"Homeless Outreach",color:"#FFA500",icon:bk},{id:"legacy-sponsored",name:"Legacy Sponsored Block",color:"#FFD700",icon:Ek},{id:"lifestyle-lottery",name:"Lifestyle Lottery Winner",color:"#800080",icon:Uk},{id:"neighborhood-history",name:"Neighborhood History",color:"#0000FF",icon:Pk},{id:"home-for-sale",name:"Home For Sale",color:"#008080",icon:Rk},{id:"overnight-patrol",name:"Overnight Patrol",color:"#000080",icon:Fk},{id:"vacant-home-cleanup",name:"Vacant Home Cleanup",color:"#800000",icon:jk},{id:"trash-debris",name:"Trash or Debris Dump Site",color:"#000000",icon:Ak},{id:"overgrown-vegetation",name:"Overgrown Bushes or Trees",color:"#228B22",icon:_k}];var xv={};/**
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
 */const mE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[h],n[f],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new $k;const m=s<<2|a>>4;if(r.push(m),c!==64){const T=a<<4&240|c>>2;if(r.push(T),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $k extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wk=function(t){const e=mE(t);return gE.encodeByteArray(e,!0)},Wu=function(t){return Wk(t).replace(/\./g,"")},yE=function(t){try{return gE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qk=()=>Hk().__FIREBASE_DEFAULTS__,Gk=()=>{if(typeof process>"u"||typeof xv>"u")return;const t=xv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yE(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return qk()||Gk()||Kk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vE=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_E=t=>{const e=vE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wE=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},EE=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function TE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wu(JSON.stringify(n)),Wu(JSON.stringify(o)),""].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Xk(){var t;const e=(t=Rc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tR(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nR(){return!Xk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rR(){try{return typeof indexedDB=="object"}catch{return!1}}function iR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const sR="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sR,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,r)}}function oR(t,e){return t.replace(aR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aR=/\{\$([^}]+)}/g;function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bv(s)&&bv(o)){if(!Hu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ba(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Lo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Do(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uR(t,e){const n=new cR(t,e);return n.subscribe.bind(n)}class cR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zd),i.error===void 0&&(i.error=zd),i.complete===void 0&&(i.complete=zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zd(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hi="[DEFAULT]";/**
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
 */class hR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pR(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fR(t){return t===hi?void 0:t}function pR(t){return t.instantiationMode==="EAGER"}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const gR={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},yR=oe.INFO,vR={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},_R=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yp{constructor(e){this.name=e,this._logLevel=yR,this._logHandler=_R,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const wR=(t,e)=>e.some(n=>t instanceof n);let Nv,Ov;function ER(){return Nv||(Nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TR(){return Ov||(Ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SE=new WeakMap,vf=new WeakMap,IE=new WeakMap,Bd=new WeakMap,Xp=new WeakMap;function SR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SE.set(n,t)}).catch(()=>{}),Xp.set(e,t),e}function IR(t){if(vf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vf.set(t,e)}let _f={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AR(t){_f=t(_f)}function CR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($d(this),e,...n);return IE.set(r,e.sort?e.sort():[e]),Vr(r)}:TR().includes(t)?function(...e){return t.apply($d(this),e),Vr(SE.get(this))}:function(...e){return Vr(t.apply($d(this),e))}}function PR(t){return typeof t=="function"?CR(t):(t instanceof IDBTransaction&&IR(t),wR(t,ER())?new Proxy(t,_f):t)}function Vr(t){if(t instanceof IDBRequest)return SR(t);if(Bd.has(t))return Bd.get(t);const e=PR(t);return e!==t&&(Bd.set(t,e),Xp.set(e,t)),e}const $d=t=>Xp.get(t);function kR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vr(o.result),u.oldVersion,u.newVersion,Vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const RR=["get","getKey","getAll","getAllKeys","count"],xR=["put","add","delete","clear"],Wd=new Map;function Lv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Wd.set(e,s),s}AR(t=>({...t,get:(e,n,r)=>Lv(e,n)||t.get(e,n,r),has:(e,n)=>!!Lv(e,n)||t.has(e,n)}));/**
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
 */class bR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wf="@firebase/app",Dv="0.10.13";/**
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
 */const rr=new Yp("@firebase/app"),OR="@firebase/app-compat",LR="@firebase/analytics-compat",DR="@firebase/analytics",MR="@firebase/app-check-compat",VR="@firebase/app-check",FR="@firebase/auth",jR="@firebase/auth-compat",UR="@firebase/database",zR="@firebase/data-connect",BR="@firebase/database-compat",$R="@firebase/functions",WR="@firebase/functions-compat",HR="@firebase/installations",qR="@firebase/installations-compat",GR="@firebase/messaging",KR="@firebase/messaging-compat",QR="@firebase/performance",YR="@firebase/performance-compat",XR="@firebase/remote-config",JR="@firebase/remote-config-compat",ZR="@firebase/storage",ex="@firebase/storage-compat",tx="@firebase/firestore",nx="@firebase/vertexai-preview",rx="@firebase/firestore-compat",ix="firebase",sx="10.14.1";/**
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
 */const Ef="[DEFAULT]",ox={[wf]:"fire-core",[OR]:"fire-core-compat",[DR]:"fire-analytics",[LR]:"fire-analytics-compat",[VR]:"fire-app-check",[MR]:"fire-app-check-compat",[FR]:"fire-auth",[jR]:"fire-auth-compat",[UR]:"fire-rtdb",[zR]:"fire-data-connect",[BR]:"fire-rtdb-compat",[$R]:"fire-fn",[WR]:"fire-fn-compat",[HR]:"fire-iid",[qR]:"fire-iid-compat",[GR]:"fire-fcm",[KR]:"fire-fcm-compat",[QR]:"fire-perf",[YR]:"fire-perf-compat",[XR]:"fire-rc",[JR]:"fire-rc-compat",[ZR]:"fire-gcs",[ex]:"fire-gcs-compat",[tx]:"fire-fst",[rx]:"fire-fst-compat",[nx]:"fire-vertex","fire-js":"fire-js",[ix]:"fire-js-all"};/**
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
 */const qu=new Map,ax=new Map,Tf=new Map;function Mv(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ni(t){const e=t.name;if(Tf.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Tf.set(e,t);for(const n of qu.values())Mv(n,t);for(const n of ax.values())Mv(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
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
 */const lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new za("app","Firebase",lx);/**
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
 */class ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ui=sx;function AE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ef,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=wE()),!n)throw Fr.create("no-options");const s=qu.get(i);if(s){if(Hu(n,s.options)&&Hu(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new mR(i);for(const u of Tf.values())o.addComponent(u);const a=new ux(n,r,o);return qu.set(i,a),a}function Jp(t=Ef){const e=qu.get(t);if(!e&&t===Ef&&wE())return AE();if(!e)throw Fr.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=ox[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}Ni(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cx="firebase-heartbeat-database",dx=1,Ta="firebase-heartbeat-store";let Hd=null;function CE(){return Hd||(Hd=kR(cx,dx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Hd}async function hx(t){try{const n=(await CE()).transaction(Ta),r=await n.objectStore(Ta).get(PE(t));return await n.done,r}catch(e){if(e instanceof Vn)rr.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Vv(t,e){try{const r=(await CE()).transaction(Ta,"readwrite");await r.objectStore(Ta).put(e,PE(t)),await r.done}catch(n){if(n instanceof Vn)rr.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function PE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fx=1024,px=30*24*60*60*1e3;class mx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=px}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fv(),{heartbeatsToSend:r,unsentEntries:i}=gx(this._heartbeatsCache.heartbeats),s=Wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function Fv(){return new Date().toISOString().substring(0,10)}function gx(t,e=fx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rR()?iR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jv(t){return Wu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vx(t){Ni(new Hr("platform-logger",e=>new bR(e),"PRIVATE")),Ni(new Hr("heartbeat",e=>new mx(e),"PRIVATE")),Rn(wf,Dv,t),Rn(wf,Dv,"esm2017"),Rn("fire-js","")}vx("");function Zp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _x=kE,RE=new za("auth","Firebase",kE());/**
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
 */const Gu=new Yp("@firebase/auth");function wx(t,...e){Gu.logLevel<=oe.WARN&&Gu.warn(`Auth (${Ui}): ${t}`,...e)}function ou(t,...e){Gu.logLevel<=oe.ERROR&&Gu.error(`Auth (${Ui}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw em(t,...e)}function xn(t,...e){return em(t,...e)}function xE(t,e,n){const r=Object.assign(Object.assign({},_x()),{[e]:n});return new za("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return xE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function em(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return RE.create(t,...e)}function Y(t,e,...n){if(!t)throw em(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ou(e),new Error(e)}function ir(t,e){t||Wn(e)}/**
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
 */function Sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ex(){return Uv()==="http:"||Uv()==="https:"}function Uv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ex()||Zk()||"connection"in navigator)?navigator.onLine:!0}function Sx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $a{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Yk()||eR()}get(){return Tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ax=new $a(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,r,i={}){return NE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ba(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Jk()||(c.referrerPolicy="no-referrer"),bE.fetch()(OE(t,t.config.apiHost,n,a),c)})}async function NE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ix),e);try{const i=new Px(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xE(t,h,c);vn(t,h)}}catch(i){if(i instanceof Vn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function Wa(t,e,n,r,i={}){const s=await Zr(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function OE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tm(t.config,i):`${t.config.apiScheme}://${i}`}function Cx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Px{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),Ax.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xn(t,e,r);return i.customData._tokenResponse=n,i}function zv(t){return t!==void 0&&t.enterprise!==void 0}class kx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Cx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Rx(t,e){return Zr(t,"GET","/v2/recaptchaConfig",Jr(t,e))}/**
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
 */async function xx(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function LE(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bx(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=nm(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(qd(i.auth_time)),issuedAtTime:Yo(qd(i.iat)),expirationTime:Yo(qd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qd(t){return Number(t)*1e3}function nm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const i=yE(n);return i?JSON.parse(i):(ou("Failed to decode base64 JWT payload"),null)}catch(i){return ou("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bv(t){const e=nm(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&Nx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Sa(t,LE(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DE(s.providerUserInfo):[],a=Dx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new If(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Lx(t){const e=at(t);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DE(t){return t.map(e=>{var{providerId:n}=e,r=Zp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Mx(t,e){const n=await NE(t,{},async()=>{const r=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=OE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vx(t,e){return Zr(t,"POST","/v2/accounts:revokeToken",Jr(t,e))}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Bv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Mx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Is;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function gr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new If(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Sa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bx(this,e)}reload(){return Lx(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Sa(this,xx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:b,isAnonymous:L,providerData:V,stsTokenManager:E}=n;Y(I&&E,e,"internal-error");const g=Is.fromJSON(this.name,E);Y(typeof I=="string",e,"internal-error"),gr(f,e.name),gr(m,e.name),Y(typeof b=="boolean",e,"internal-error"),Y(typeof L=="boolean",e,"internal-error"),gr(T,e.name),gr(S,e.name),gr(P,e.name),gr(R,e.name),gr(v,e.name),gr(y,e.name);const A=new Hn({uid:I,auth:e,email:m,emailVerified:b,displayName:f,isAnonymous:L,photoURL:S,phoneNumber:T,tenantId:P,stsTokenManager:g,createdAt:v,lastLoginAt:y});return V&&Array.isArray(V)&&(A.providerData=V.map(C=>Object.assign({},C))),R&&(A._redirectEventId=R),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const s=new Hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ku(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?DE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Is;a.updateFromIdToken(r);const u=new Hn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new If(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const $v=new Map;function qn(t){ir(t instanceof Function,"Expected a class definition");let e=$v.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$v.set(t,e),e)}/**
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
 */class ME{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ME.type="NONE";const Wv=ME;/**
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
 */function au(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=au(this.userKey,i.apiKey,s),this.fullPersistenceKey=au("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(qn(Wv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||qn(Wv);const o=au(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Hn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
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
 */function Hv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BE(e))return"Blackberry";if($E(e))return"Webos";if(FE(e))return"Safari";if((e.includes("chrome/")||jE(e))&&!e.includes("edge/"))return"Chrome";if(zE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VE(t=wt()){return/firefox\//i.test(t)}function FE(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jE(t=wt()){return/crios\//i.test(t)}function UE(t=wt()){return/iemobile/i.test(t)}function zE(t=wt()){return/android/i.test(t)}function BE(t=wt()){return/blackberry/i.test(t)}function $E(t=wt()){return/webos/i.test(t)}function rm(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fx(t=wt()){var e;return rm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jx(){return tR()&&document.documentMode===10}function WE(t=wt()){return rm(t)||zE(t)||$E(t)||BE(t)||/windows phone/i.test(t)||UE(t)}/**
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
 */function HE(t,e=[]){let n;switch(t){case"Browser":n=Hv(wt());break;case"Worker":n=`${Hv(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}/**
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
 */async function zx(t,e={}){return Zr(t,"GET","/v2/passwordPolicy",Jr(t,e))}/**
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
 */class Wx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qv(this),this.idTokenSubscription=new qv(this),this.beforeStateQueue=new Ux(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LE(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(bn(this));const n=e?at(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zx(this),n=new $x(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ei(t){return at(t)}class qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=uR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hx(t){bc=t}function qE(t){return bc.loadJS(t)}function qx(){return bc.recaptchaEnterpriseScript}function Gx(){return bc.gapiScript}function Kx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qx="recaptcha-enterprise",Yx="NO_RECAPTCHA";class Xx{constructor(e){this.type=Qx,this.auth=ei(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Rx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;zv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Yx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&zv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qx();u.length!==0&&(u+=a),qE(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Gv(t,e,n,r=!1){const i=new Xx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Af(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Gv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Jx(t,e){const n=xc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hu(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function Zx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eb(t,e,n){const r=ei(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=GE(e),{host:o,port:a}=tb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),nb()}function GE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tb(t){const e=GE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kv(o)}}}function Kv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function rb(t,e){return Zr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ib(t,e){return Wa(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}/**
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
 */async function sb(t,e){return Wa(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function ob(t,e){return Wa(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
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
 */class Ia extends im{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Af(e,n,"signInWithPassword",ib);case"emailLink":return sb(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Af(e,r,"signUpPassword",rb);case"emailLink":return ob(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cs(t,e){return Wa(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
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
 */const ab="http://localhost";class Oi extends im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ba(n)}return e}}/**
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
 */function lb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ub(t){const e=Lo(Do(t)).link,n=e?Lo(Do(e)).deep_link_id:null,r=Lo(Do(t)).deep_link_id;return(r?Lo(Do(r)).link:null)||r||n||e||t}class sm{constructor(e){var n,r,i,s,o,a;const u=Lo(Do(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=lb((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ub(e);try{return new sm(n)}catch{return null}}}/**
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
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return Ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sm.parseLink(n);return Y(r,"argument-error"),Ia._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class KE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ha extends KE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends Ha{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Tr extends Ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
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
 */class Sr extends Ha{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
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
 */class Ir extends Ha{constructor(){super("twitter.com")}static credential(e,n){return Oi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */async function QE(t,e){return Wa(t,"POST","/v1/accounts:signUp",Jr(t,e))}/**
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
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Hn._fromIdTokenResponse(e,r,i),o=Qv(r);return new sr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qv(r);return new sr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function cb(t){var e;if(hn(t.app))return Promise.reject(bn(t));const n=ei(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new sr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await QE(n,{returnSecureToken:!0}),i=await sr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Qu extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qu(e,n,r,i)}}function YE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(t,s,e,r):s})}async function db(t,e,n=!1){const r=await Sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",r)}/**
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
 */async function hb(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await Sa(t,YE(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=nm(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),sr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
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
 */async function XE(t,e,n=!1){if(hn(t.app))return Promise.reject(bn(t));const r="signIn",i=await YE(t,r,e),s=await sr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function fb(t,e){return XE(ei(t),e)}/**
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
 */async function JE(t){const e=ei(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pb(t,e,n){if(hn(t.app))return Promise.reject(bn(t));const r=ei(t),o=await Af(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&JE(t),u}),a=await sr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mb(t,e,n){return hn(t.app)?Promise.reject(bn(t)):fb(at(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JE(t),r})}function gb(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function yb(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function vb(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function _b(t){return at(t).signOut()}const Yu="__sak";/**
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
 */class ZE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wb=1e3,Eb=10;class eT extends ZE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eT.type="LOCAL";const Tb=eT;/**
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
 */class tT extends ZE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tT.type="SESSION";const nT=tT;/**
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
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await Sb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
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
 */function om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ib{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=om("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rT(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function Cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kb(){return rT()?self:null}/**
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
 */const iT="firebaseLocalStorageDb",Rb=1,Xu="firebaseLocalStorage",sT="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oc(t,e){return t.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function xb(){const t=indexedDB.deleteDatabase(iT);return new qa(t).toPromise()}function Cf(){const t=indexedDB.open(iT,Rb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xu,{keyPath:sT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xu)?e(r):(r.close(),await xb(),e(await Cf()))})})}async function Yv(t,e,n){const r=Oc(t,!0).put({[sT]:e,value:n});return new qa(r).toPromise()}async function bb(t,e){const n=Oc(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function Xv(t,e){const n=Oc(t,!0).delete(e);return new qa(n).toPromise()}const Nb=800,Ob=3;class oT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(kb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cb(),!this.activeServiceWorker)return;this.sender=new Ib(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await Yv(e,Yu,"1"),await Xv(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oc(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oT.type="LOCAL";const Lb=oT;new $a(3e4,6e4);/**
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
 */function Db(t,e){return e?qn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class am extends im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mb(t){return XE(t.auth,new am(t),t.bypassAuthState)}function Vb(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),hb(n,new am(t),t.bypassAuthState)}async function Fb(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),db(n,new am(t),t.bypassAuthState)}/**
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
 */class aT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mb;case"linkViaPopup":case"linkViaRedirect":return Fb;case"reauthViaPopup":case"reauthViaRedirect":return Vb;default:vn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jb=new $a(2e3,1e4);class ms extends aT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jb.get())};e()}}ms.currentPopupAction=null;/**
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
 */const Ub="pendingRedirect",lu=new Map;class zb extends aT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const r=await Bb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bb(t,e){const n=Hb(e),r=Wb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $b(t,e){lu.set(t._key(),e)}function Wb(t){return qn(t._redirectPersistence)}function Hb(t){return au(Ub,t.config.apiKey,t.name)}async function qb(t,e,n=!1){if(hn(t.app))return Promise.reject(bn(t));const r=ei(t),i=Db(r,e),o=await new zb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gb=10*60*1e3;class Kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jv(e))}saveEventToCache(e){this.cachedEventUids.add(Jv(e)),this.lastProcessedEventTime=Date.now()}}function Jv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lT(t);default:return!1}}/**
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
 */async function Yb(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
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
 */const Xb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jb=/^https?/;async function Zb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yb(t);for(const n of e)try{if(eN(n))return}catch{}vn(t,"unauthorized-domain")}function eN(t){const e=Sf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jb.test(n))return!1;if(Xb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tN=new $a(3e4,6e4);function Zv(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nN(t){return new Promise((e,n)=>{var r,i,s;function o(){Zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zv(),n(xn(t,"network-request-failed"))},timeout:tN.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=Kx("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},qE(`${Gx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw uu=null,e})}let uu=null;function rN(t){return uu=uu||nN(t),uu}/**
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
 */const iN=new $a(5e3,15e3),sN="__/auth/iframe",oN="emulator/auth/iframe",aN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uN(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tm(e,oN):`https://${t.config.authDomain}/${sN}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=lN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ba(r).slice(1)}`}async function cN(t){const e=await rN(t),n=Nn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:uN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},iN.get());function u(){Nn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const dN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hN=500,fN=600,pN="_blank",mN="http://localhost";class e_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gN(t,e,n,r=hN,i=fN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},dN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=wt().toLowerCase();n&&(a=jE(c)?pN:n),VE(c)&&(e=e||mN,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[T,S])=>`${m}${T}=${S},`,"");if(Fx(c)&&a!=="_self")return yN(e||"",a),new e_(null);const f=window.open(e||"",a,h);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new e_(f)}function yN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vN="__/auth/handler",_N="emulator/auth/handler",wN=encodeURIComponent("fac");async function t_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof KE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ha){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${wN}=${encodeURIComponent(u)}`:"";return`${EN(t)}?${Ba(a).slice(1)}${c}`}function EN({config:t}){return t.emulator?tm(t,_N):`https://${t.authDomain}/${vN}`}/**
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
 */const Gd="webStorageSupport";class TN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nT,this._completeRedirectFn=qb,this._overrideRedirectResult=$b}async _openPopup(e,n,r,i){var s;ir((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await t_(e,n,r,Sf(),i);return gN(e,o,om())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await t_(e,n,r,Sf(),i);return Ab(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cN(e),r=new Kb(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gd,{type:Gd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gd];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WE()||FE()||rm()}}const SN=TN;var n_="@firebase/auth",r_="1.7.9";/**
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
 */class IN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CN(t){Ni(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HE(t)},c=new Wx(r,i,s,u);return Zx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ni(new Hr("auth-internal",e=>{const n=ei(e.getProvider("auth").getImmediate());return(r=>new IN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(n_,r_,AN(t)),Rn(n_,r_,"esm2017")}/**
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
 */const PN=5*60,kN=EE("authIdTokenMaxAge")||PN;let i_=null;const RN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kN)return;const i=n==null?void 0:n.token;i_!==i&&(i_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lm(t=Jp()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jx(t,{popupRedirectResolver:SN,persistence:[Lb,Tb,nT]}),r=EE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=RN(s.toString());yb(n,o,()=>o(n.currentUser)),gb(n,a=>o(a))}}const i=vE("auth");return i&&eb(n,`http://${i}`),n}function xN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Hx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CN("Browser");var s_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ti,uT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function A(){}A.prototype=g.prototype,E.D=g.prototype,E.prototype=new A,E.prototype.constructor=E,E.C=function(C,x,N){for(var k=Array(arguments.length-2),X=2;X<arguments.length;X++)k[X-2]=arguments[X];return g.prototype[x].apply(C,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,A){A||(A=0);var C=Array(16);if(typeof g=="string")for(var x=0;16>x;++x)C[x]=g.charCodeAt(A++)|g.charCodeAt(A++)<<8|g.charCodeAt(A++)<<16|g.charCodeAt(A++)<<24;else for(x=0;16>x;++x)C[x]=g[A++]|g[A++]<<8|g[A++]<<16|g[A++]<<24;g=E.g[0],A=E.g[1],x=E.g[2];var N=E.g[3],k=g+(N^A&(x^N))+C[0]+3614090360&4294967295;g=A+(k<<7&4294967295|k>>>25),k=N+(x^g&(A^x))+C[1]+3905402710&4294967295,N=g+(k<<12&4294967295|k>>>20),k=x+(A^N&(g^A))+C[2]+606105819&4294967295,x=N+(k<<17&4294967295|k>>>15),k=A+(g^x&(N^g))+C[3]+3250441966&4294967295,A=x+(k<<22&4294967295|k>>>10),k=g+(N^A&(x^N))+C[4]+4118548399&4294967295,g=A+(k<<7&4294967295|k>>>25),k=N+(x^g&(A^x))+C[5]+1200080426&4294967295,N=g+(k<<12&4294967295|k>>>20),k=x+(A^N&(g^A))+C[6]+2821735955&4294967295,x=N+(k<<17&4294967295|k>>>15),k=A+(g^x&(N^g))+C[7]+4249261313&4294967295,A=x+(k<<22&4294967295|k>>>10),k=g+(N^A&(x^N))+C[8]+1770035416&4294967295,g=A+(k<<7&4294967295|k>>>25),k=N+(x^g&(A^x))+C[9]+2336552879&4294967295,N=g+(k<<12&4294967295|k>>>20),k=x+(A^N&(g^A))+C[10]+4294925233&4294967295,x=N+(k<<17&4294967295|k>>>15),k=A+(g^x&(N^g))+C[11]+2304563134&4294967295,A=x+(k<<22&4294967295|k>>>10),k=g+(N^A&(x^N))+C[12]+1804603682&4294967295,g=A+(k<<7&4294967295|k>>>25),k=N+(x^g&(A^x))+C[13]+4254626195&4294967295,N=g+(k<<12&4294967295|k>>>20),k=x+(A^N&(g^A))+C[14]+2792965006&4294967295,x=N+(k<<17&4294967295|k>>>15),k=A+(g^x&(N^g))+C[15]+1236535329&4294967295,A=x+(k<<22&4294967295|k>>>10),k=g+(x^N&(A^x))+C[1]+4129170786&4294967295,g=A+(k<<5&4294967295|k>>>27),k=N+(A^x&(g^A))+C[6]+3225465664&4294967295,N=g+(k<<9&4294967295|k>>>23),k=x+(g^A&(N^g))+C[11]+643717713&4294967295,x=N+(k<<14&4294967295|k>>>18),k=A+(N^g&(x^N))+C[0]+3921069994&4294967295,A=x+(k<<20&4294967295|k>>>12),k=g+(x^N&(A^x))+C[5]+3593408605&4294967295,g=A+(k<<5&4294967295|k>>>27),k=N+(A^x&(g^A))+C[10]+38016083&4294967295,N=g+(k<<9&4294967295|k>>>23),k=x+(g^A&(N^g))+C[15]+3634488961&4294967295,x=N+(k<<14&4294967295|k>>>18),k=A+(N^g&(x^N))+C[4]+3889429448&4294967295,A=x+(k<<20&4294967295|k>>>12),k=g+(x^N&(A^x))+C[9]+568446438&4294967295,g=A+(k<<5&4294967295|k>>>27),k=N+(A^x&(g^A))+C[14]+3275163606&4294967295,N=g+(k<<9&4294967295|k>>>23),k=x+(g^A&(N^g))+C[3]+4107603335&4294967295,x=N+(k<<14&4294967295|k>>>18),k=A+(N^g&(x^N))+C[8]+1163531501&4294967295,A=x+(k<<20&4294967295|k>>>12),k=g+(x^N&(A^x))+C[13]+2850285829&4294967295,g=A+(k<<5&4294967295|k>>>27),k=N+(A^x&(g^A))+C[2]+4243563512&4294967295,N=g+(k<<9&4294967295|k>>>23),k=x+(g^A&(N^g))+C[7]+1735328473&4294967295,x=N+(k<<14&4294967295|k>>>18),k=A+(N^g&(x^N))+C[12]+2368359562&4294967295,A=x+(k<<20&4294967295|k>>>12),k=g+(A^x^N)+C[5]+4294588738&4294967295,g=A+(k<<4&4294967295|k>>>28),k=N+(g^A^x)+C[8]+2272392833&4294967295,N=g+(k<<11&4294967295|k>>>21),k=x+(N^g^A)+C[11]+1839030562&4294967295,x=N+(k<<16&4294967295|k>>>16),k=A+(x^N^g)+C[14]+4259657740&4294967295,A=x+(k<<23&4294967295|k>>>9),k=g+(A^x^N)+C[1]+2763975236&4294967295,g=A+(k<<4&4294967295|k>>>28),k=N+(g^A^x)+C[4]+1272893353&4294967295,N=g+(k<<11&4294967295|k>>>21),k=x+(N^g^A)+C[7]+4139469664&4294967295,x=N+(k<<16&4294967295|k>>>16),k=A+(x^N^g)+C[10]+3200236656&4294967295,A=x+(k<<23&4294967295|k>>>9),k=g+(A^x^N)+C[13]+681279174&4294967295,g=A+(k<<4&4294967295|k>>>28),k=N+(g^A^x)+C[0]+3936430074&4294967295,N=g+(k<<11&4294967295|k>>>21),k=x+(N^g^A)+C[3]+3572445317&4294967295,x=N+(k<<16&4294967295|k>>>16),k=A+(x^N^g)+C[6]+76029189&4294967295,A=x+(k<<23&4294967295|k>>>9),k=g+(A^x^N)+C[9]+3654602809&4294967295,g=A+(k<<4&4294967295|k>>>28),k=N+(g^A^x)+C[12]+3873151461&4294967295,N=g+(k<<11&4294967295|k>>>21),k=x+(N^g^A)+C[15]+530742520&4294967295,x=N+(k<<16&4294967295|k>>>16),k=A+(x^N^g)+C[2]+3299628645&4294967295,A=x+(k<<23&4294967295|k>>>9),k=g+(x^(A|~N))+C[0]+4096336452&4294967295,g=A+(k<<6&4294967295|k>>>26),k=N+(A^(g|~x))+C[7]+1126891415&4294967295,N=g+(k<<10&4294967295|k>>>22),k=x+(g^(N|~A))+C[14]+2878612391&4294967295,x=N+(k<<15&4294967295|k>>>17),k=A+(N^(x|~g))+C[5]+4237533241&4294967295,A=x+(k<<21&4294967295|k>>>11),k=g+(x^(A|~N))+C[12]+1700485571&4294967295,g=A+(k<<6&4294967295|k>>>26),k=N+(A^(g|~x))+C[3]+2399980690&4294967295,N=g+(k<<10&4294967295|k>>>22),k=x+(g^(N|~A))+C[10]+4293915773&4294967295,x=N+(k<<15&4294967295|k>>>17),k=A+(N^(x|~g))+C[1]+2240044497&4294967295,A=x+(k<<21&4294967295|k>>>11),k=g+(x^(A|~N))+C[8]+1873313359&4294967295,g=A+(k<<6&4294967295|k>>>26),k=N+(A^(g|~x))+C[15]+4264355552&4294967295,N=g+(k<<10&4294967295|k>>>22),k=x+(g^(N|~A))+C[6]+2734768916&4294967295,x=N+(k<<15&4294967295|k>>>17),k=A+(N^(x|~g))+C[13]+1309151649&4294967295,A=x+(k<<21&4294967295|k>>>11),k=g+(x^(A|~N))+C[4]+4149444226&4294967295,g=A+(k<<6&4294967295|k>>>26),k=N+(A^(g|~x))+C[11]+3174756917&4294967295,N=g+(k<<10&4294967295|k>>>22),k=x+(g^(N|~A))+C[2]+718787259&4294967295,x=N+(k<<15&4294967295|k>>>17),k=A+(N^(x|~g))+C[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(x+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var A=g-this.blockSize,C=this.B,x=this.h,N=0;N<g;){if(x==0)for(;N<=A;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<g;)if(C[x++]=E.charCodeAt(N++),x==this.blockSize){i(this,C),x=0;break}}else for(;N<g;)if(C[x++]=E[N++],x==this.blockSize){i(this,C),x=0;break}}this.h=x,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var A=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=A&255,A/=256;for(this.u(E),E=Array(16),g=A=0;4>g;++g)for(var C=0;32>C;C+=8)E[A++]=this.g[g]>>>C&255;return E};function s(E,g){var A=a;return Object.prototype.hasOwnProperty.call(A,E)?A[E]:A[E]=g(E)}function o(E,g){this.h=g;for(var A=[],C=!0,x=E.length-1;0<=x;x--){var N=E[x]|0;C&&N==g||(A[x]=N,C=!1)}this.g=A}var a={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return R(c(-E));for(var g=[],A=1,C=0;E>=A;C++)g[C]=E/A|0,A*=4294967296;return new o(g,0)}function h(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return R(h(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(g,8)),C=f,x=0;x<E.length;x+=8){var N=Math.min(8,E.length-x),k=parseInt(E.substring(x,x+N),g);8>N?(N=c(Math.pow(g,N)),C=C.j(N).add(c(k))):(C=C.j(A),C=C.add(c(k)))}return C}var f=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-R(this).m();for(var E=0,g=1,A=0;A<this.g.length;A++){var C=this.i(A);E+=(0<=C?C:4294967296+C)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(P(this))return"-"+R(this).toString(E);for(var g=c(Math.pow(E,6)),A=this,C="";;){var x=b(A,g).g;A=v(A,x.j(g));var N=((0<A.g.length?A.g[0]:A.h)>>>0).toString(E);if(A=x,S(A))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=v(this,E),P(E)?-1:S(E)?0:1};function R(E){for(var g=E.g.length,A=[],C=0;C<g;C++)A[C]=~E.g[C];return new o(A,~E.h).add(m)}t.abs=function(){return P(this)?R(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),A=[],C=0,x=0;x<=g;x++){var N=C+(this.i(x)&65535)+(E.i(x)&65535),k=(N>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);C=k>>>16,N&=65535,k&=65535,A[x]=k<<16|N}return new o(A,A[A.length-1]&-2147483648?-1:0)};function v(E,g){return E.add(R(g))}t.j=function(E){if(S(this)||S(E))return f;if(P(this))return P(E)?R(this).j(R(E)):R(R(this).j(E));if(P(E))return R(this.j(R(E)));if(0>this.l(T)&&0>E.l(T))return c(this.m()*E.m());for(var g=this.g.length+E.g.length,A=[],C=0;C<2*g;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<E.g.length;x++){var N=this.i(C)>>>16,k=this.i(C)&65535,X=E.i(x)>>>16,ve=E.i(x)&65535;A[2*C+2*x]+=k*ve,y(A,2*C+2*x),A[2*C+2*x+1]+=N*ve,y(A,2*C+2*x+1),A[2*C+2*x+1]+=k*X,y(A,2*C+2*x+1),A[2*C+2*x+2]+=N*X,y(A,2*C+2*x+2)}for(C=0;C<g;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=g;C<2*g;C++)A[C]=0;return new o(A,0)};function y(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function I(E,g){this.g=E,this.h=g}function b(E,g){if(S(g))throw Error("division by zero");if(S(E))return new I(f,f);if(P(E))return g=b(R(E),g),new I(R(g.g),R(g.h));if(P(g))return g=b(E,R(g)),new I(R(g.g),g.h);if(30<E.g.length){if(P(E)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var A=m,C=g;0>=C.l(E);)A=L(A),C=L(C);var x=V(A,1),N=V(C,1);for(C=V(C,2),A=V(A,2);!S(C);){var k=N.add(C);0>=k.l(E)&&(x=x.add(A),N=k),C=V(C,1),A=V(A,1)}return g=v(E,x.j(g)),new I(x,g)}for(x=f;0<=E.l(g);){for(A=Math.max(1,Math.floor(E.m()/g.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(A),k=N.j(g);P(k)||0<k.l(E);)A-=C,N=c(A),k=N.j(g);S(N)&&(N=m),x=x.add(N),E=v(E,k)}return new I(x,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),A=[],C=0;C<g;C++)A[C]=this.i(C)&E.i(C);return new o(A,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),A=[],C=0;C<g;C++)A[C]=this.i(C)|E.i(C);return new o(A,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),A=[],C=0;C<g;C++)A[C]=this.i(C)^E.i(C);return new o(A,this.h^E.h)};function L(E){for(var g=E.g.length+1,A=[],C=0;C<g;C++)A[C]=E.i(C)<<1|E.i(C-1)>>>31;return new o(A,E.h)}function V(E,g){var A=g>>5;g%=32;for(var C=E.g.length-A,x=[],N=0;N<C;N++)x[N]=0<g?E.i(N+A)>>>g|E.i(N+A+1)<<32-g:E.i(N+A);return new o(x,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Ti=o}).apply(typeof s_<"u"?s_:typeof self<"u"?self:typeof window<"u"?window:{});var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cT,Mo,dT,cu,Pf,hT,fT,pT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof jl=="object"&&jl];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var O=l[w];if(!(O in p))break e;p=p[O]}l=l[l.length-1],w=p[l],d=d(w),d!=w&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,w=!1,O={next:function(){if(!w&&p<l.length){var M=p++;return{value:d(M,l[M]),done:!1}}return w=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,w),l.apply(d,O)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function T(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function S(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(w,O,M){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return d.prototype[O].apply(w,$)}}function P(l){const d=l.length;if(0<d){const p=Array(d);for(let w=0;w<d;w++)p[w]=l[w];return p}return[]}function R(l,d){for(let p=1;p<arguments.length;p++){const w=arguments[p];if(u(w)){const O=l.length||0,M=w.length||0;l.length=O+M;for(let $=0;$<M;$++)l[O+$]=w[$]}else l.push(w)}}class v{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(l,d,p){for(const w in l)d.call(p,l[w],w,l)}function E(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function g(l){const d={};for(const p in l)d[p]=l[p];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let p,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(p in w)l[p]=w[p];for(let M=0;M<A.length;M++)p=A[M],Object.prototype.hasOwnProperty.call(w,p)&&(l[p]=w[p])}}function x(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function k(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class X{constructor(){this.h=this.g=null}add(d,p){const w=ve.get();w.set(d,p),this.h?this.h.next=w:this.g=w,this.h=w}}var ve=new v(()=>new Et,l=>l.reset());class Et{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let le,B=!1,Q=new X,J=()=>{const l=a.Promise.resolve(void 0);le=()=>{l.then(ye)}};var ye=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(p){N(p)}var d=ve;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}B=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var _n=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function xt(l,d){if(xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(L){e:{try{b(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Gt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&xt.aa.h.call(this)}}S(xt,xe);var Gt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),nl=0;function ne(l,d,p,w,O){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!w,this.ha=O,this.key=++nl,this.da=this.fa=!1}function he(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function fe(l){this.src=l,this.g={},this.h=0}fe.prototype.add=function(l,d,p,w,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var $=ke(l,d,w,O);return-1<$?(d=l[$],p||(d.fa=!1)):(d=new ne(d,this.src,M,!!w,O),d.fa=p,l.push(d)),d};function De(l,d){var p=d.type;if(p in l.g){var w=l.g[p],O=Array.prototype.indexOf.call(w,d,void 0),M;(M=0<=O)&&Array.prototype.splice.call(w,O,1),M&&(he(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function ke(l,d,p,w){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==w)return O}return-1}var _e="closure_lm_"+(1e6*Math.random()|0),Te={};function Qt(l,d,p,w,O){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Qt(l,d[M],p,w,O);return null}return p=on(p),l&&l[Kt]?l.K(d,p,c(w)?!!w.capture:!1,O):Yt(l,d,p,!1,w,O)}function Yt(l,d,p,w,O,M){if(!d)throw Error("Invalid event type");var $=c(O)?!!O.capture:!!O,we=wn(l);if(we||(l[_e]=we=new fe(l)),p=we.add(d,p,w,$,M),p.proxy)return p;if(w=ti(),p.proxy=w,w.src=l,w.listener=p,l.addEventListener)_n||(O=$),O===void 0&&(O=!1),l.addEventListener(d.toString(),w,O);else if(l.attachEvent)l.attachEvent(ri(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ti(){function l(p){return d.call(l.src,l.listener,p)}const d=Wi;return l}function ni(l,d,p,w,O){if(Array.isArray(d))for(var M=0;M<d.length;M++)ni(l,d[M],p,w,O);else w=c(w)?!!w.capture:!!w,p=on(p),l&&l[Kt]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],p=ke(M,p,w,O),-1<p&&(he(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=wn(l))&&(d=l.g[d.toString()],l=-1,d&&(l=ke(d,p,w,O)),(p=-1<l?d[l]:null)&&cr(p))}function cr(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Kt])De(d.i,l);else{var p=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(p,w,l.capture):d.detachEvent?d.detachEvent(ri(p),w):d.addListener&&d.removeListener&&d.removeListener(w),(p=wn(d))?(De(p,l),p.h==0&&(p.src=null,d[_e]=null)):he(l)}}}function ri(l){return l in Te?Te[l]:Te[l]="on"+l}function Wi(l,d){if(l.da)l=!0;else{d=new xt(d,this);var p=l.listener,w=l.ha||l.src;l.fa&&cr(l),l=p.call(w,d)}return l}function wn(l){return l=l[_e],l instanceof fe?l:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function on(l){return typeof l=="function"?l:(l[Tt]||(l[Tt]=function(d){return l.handleEvent(d)}),l[Tt])}function Qe(){pe.call(this),this.i=new fe(this),this.M=this,this.F=null}S(Qe,pe),Qe.prototype[Kt]=!0,Qe.prototype.removeEventListener=function(l,d,p,w){ni(this,l,d,p,w)};function Ze(l,d){var p,w=l.F;if(w)for(p=[];w;w=w.F)p.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new xe(d,l);else if(d instanceof xe)d.target=d.target||l;else{var O=d;d=new xe(w,l),C(d,O)}if(O=!0,p)for(var M=p.length-1;0<=M;M--){var $=d.g=p[M];O=rl($,w,!0,d)&&O}if($=d.g=l,O=rl($,w,!0,d)&&O,O=rl($,w,!1,d)&&O,p)for(M=0;M<p.length;M++)$=d.g=p[M],O=rl($,w,!1,d)&&O}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],w=0;w<p.length;w++)he(p[w]);delete l.g[d],l.h--}}this.F=null},Qe.prototype.K=function(l,d,p,w){return this.i.add(String(l),d,!1,p,w)},Qe.prototype.L=function(l,d,p,w){return this.i.add(String(l),d,!0,p,w)};function rl(l,d,p,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,M=0;M<d.length;++M){var $=d[M];if($&&!$.da&&$.capture==p){var we=$.listener,et=$.ha||$.src;$.fa&&De(l.i,$),O=we.call(et,w)!==!1&&O}}return O&&!w.defaultPrevented}function Km(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Qm(l){l.g=Km(()=>{l.g=null,l.i&&(l.i=!1,Qm(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class tI extends pe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Qm(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ro(l){pe.call(this),this.h=l,this.g={}}S(ro,pe);var Ym=[];function Xm(l){V(l.g,function(d,p){this.g.hasOwnProperty(p)&&cr(d)},l),l.g={}}ro.prototype.N=function(){ro.aa.N.call(this),Xm(this)},ro.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gc=a.JSON.stringify,nI=a.JSON.parse,rI=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Kc(){}Kc.prototype.h=null;function Jm(l){return l.h||(l.h=l.i())}function Zm(){}var io={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qc(){xe.call(this,"d")}S(Qc,xe);function Yc(){xe.call(this,"c")}S(Yc,xe);var ii={},eg=null;function il(){return eg=eg||new Qe}ii.La="serverreachability";function tg(l){xe.call(this,ii.La,l)}S(tg,xe);function so(l){const d=il();Ze(d,new tg(d))}ii.STAT_EVENT="statevent";function ng(l,d){xe.call(this,ii.STAT_EVENT,l),this.stat=d}S(ng,xe);function St(l){const d=il();Ze(d,new ng(d,l))}ii.Ma="timingevent";function rg(l,d){xe.call(this,ii.Ma,l),this.size=d}S(rg,xe);function oo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function ao(){this.g=!0}ao.prototype.xa=function(){this.g=!1};function iI(l,d,p,w,O,M){l.info(function(){if(l.g)if(M)for(var $="",we=M.split("&"),et=0;et<we.length;et++){var ce=we[et].split("=");if(1<ce.length){var ut=ce[0];ce=ce[1];var ct=ut.split("_");$=2<=ct.length&&ct[1]=="type"?$+(ut+"="+ce+"&"):$+(ut+"=redacted&")}}else $=null;else $=M;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+d+`
`+p+`
`+$})}function sI(l,d,p,w,O,M,$){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+d+`
`+p+`
`+M+" "+$})}function Hi(l,d,p,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+aI(l,p)+(w?" "+w:"")})}function oI(l,d){l.info(function(){return"TIMEOUT: "+d})}ao.prototype.info=function(){};function aI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var w=p[l];if(!(2>w.length)){var O=w[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var $=1;$<O.length;$++)O[$]=""}}}}return Gc(p)}catch{return d}}var sl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ig={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xc;function ol(){}S(ol,Kc),ol.prototype.g=function(){return new XMLHttpRequest},ol.prototype.i=function(){return{}},Xc=new ol;function dr(l,d,p,w){this.j=l,this.i=d,this.l=p,this.R=w||1,this.U=new ro(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sg}function sg(){this.i=null,this.g="",this.h=!1}var og={},Jc={};function Zc(l,d,p){l.L=1,l.v=cl(Fn(d)),l.m=p,l.P=!0,ag(l,null)}function ag(l,d){l.F=Date.now(),al(l),l.A=Fn(l.v);var p=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Eg(p.i,"t",w),l.C=0,p=l.j.J,l.h=new sg,l.g=jg(l.j,p?d:null,!l.m),0<l.O&&(l.M=new tI(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,w=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ym[0]=O.toString()),O=Ym);for(var M=0;M<O.length;M++){var $=Qt(p,O[M],w||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),so(),iI(l.i,l.u,l.A,l.l,l.R,l.m)}dr.prototype.ca=function(l){l=l.target;const d=this.M;d&&jn(l)==3?d.j():this.Y(l)},dr.prototype.Y=function(l){try{if(l==this.g)e:{const ct=jn(this.g);var d=this.g.Ba();const Ki=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||kg(this.g)))){this.J||ct!=4||d==7||(d==8||0>=Ki?so(3):so(2)),ed(this);var p=this.g.Z();this.X=p;t:if(lg(this)){var w=kg(this.g);l="";var O=w.length,M=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){si(this),lo(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(M&&d==O-1)});w.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,sI(this.i,this.u,this.A,this.l,this.R,ct,p),this.o){if(this.T&&!this.K){t:{if(this.g){var we,et=this.g;if((we=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(we)){var ce=we;break t}}ce=null}if(p=ce)Hi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,td(this,p);else{this.o=!1,this.s=3,St(12),si(this),lo(this);break e}}if(this.P){p=!0;let an;for(;!this.J&&this.C<$.length;)if(an=lI(this,$),an==Jc){ct==4&&(this.s=4,St(14),p=!1),Hi(this.i,this.l,null,"[Incomplete Response]");break}else if(an==og){this.s=4,St(15),Hi(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else Hi(this.i,this.l,an,null),td(this,an);if(lg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||$.length!=0||this.h.h||(this.s=1,St(16),p=!1),this.o=this.o&&p,!p)Hi(this.i,this.l,$,"[Invalid Chunked Response]"),si(this),lo(this);else if(0<$.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),ad(ut),ut.M=!0,St(11))}}else Hi(this.i,this.l,$,null),td(this,$);ct==4&&si(this),this.o&&!this.J&&(ct==4?Dg(this.j,this):(this.o=!1,al(this)))}else AI(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),si(this),lo(this)}}}catch{}finally{}};function lg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function lI(l,d){var p=l.C,w=d.indexOf(`
`,p);return w==-1?Jc:(p=Number(d.substring(p,w)),isNaN(p)?og:(w+=1,w+p>d.length?Jc:(d=d.slice(w,w+p),l.C=w+p,d)))}dr.prototype.cancel=function(){this.J=!0,si(this)};function al(l){l.S=Date.now()+l.I,ug(l,l.I)}function ug(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=oo(m(l.ba,l),d)}function ed(l){l.B&&(a.clearTimeout(l.B),l.B=null)}dr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(oI(this.i,this.A),this.L!=2&&(so(),St(17)),si(this),this.s=2,lo(this)):ug(this,this.S-l)};function lo(l){l.j.G==0||l.J||Dg(l.j,l)}function si(l){ed(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Xm(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function td(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||nd(p.h,l))){if(!l.K&&nd(p.h,l)&&p.G==3){try{var w=p.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)gl(p),pl(p);else break e;od(p),St(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=oo(m(p.Za,p),6e3));if(1>=hg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ai(p,11)}else if((l.K||p.g==l)&&gl(p),!y(d))for(O=p.Da.g.parse(d),d=0;d<O.length;d++){let ce=O[d];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const ut=ce[3];ut!=null&&(p.la=ut,p.j.info("VER="+p.la));const ct=ce[4];ct!=null&&(p.Aa=ct,p.j.info("SVER="+p.Aa));const Ki=ce[5];Ki!=null&&typeof Ki=="number"&&0<Ki&&(w=1.5*Ki,p.L=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const an=l.g;if(an){const vl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vl){var M=w.h;M.g||vl.indexOf("spdy")==-1&&vl.indexOf("quic")==-1&&vl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(rd(M,M.h),M.h=null))}if(w.D){const ld=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;ld&&(w.ya=ld,Se(w.I,w.D,ld))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),w=p;var $=l;if(w.qa=Fg(w,w.J?w.ia:null,w.W),$.K){fg(w.h,$);var we=$,et=w.L;et&&(we.I=et),we.B&&(ed(we),al(we)),w.g=$}else Og(w);0<p.i.length&&ml(p)}else ce[0]!="stop"&&ce[0]!="close"||ai(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?ai(p,7):sd(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}so(4)}catch{}}var uI=class{constructor(l,d){this.g=l,this.map=d}};function cg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function hg(l){return l.h?1:l.g?l.g.size:0}function nd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function rd(l,d){l.g?l.g.add(d):l.h=d}function fg(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}cg.prototype.cancel=function(){if(this.i=pg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function pg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return P(l.i)}function cI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,w=0;w<p;w++)d.push(l[w]);return d}d=[],p=0;for(w in l)d[p++]=l[w];return d}function dI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const w in l)d[p++]=w;return d}}}function mg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=dI(l),w=cI(l),O=w.length,M=0;M<O;M++)d.call(void 0,w[M],p&&p[M],l)}var gg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var w=l[p].indexOf("="),O=null;if(0<=w){var M=l[p].substring(0,w);O=l[p].substring(w+1)}else M=l[p];d(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function oi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof oi){this.h=l.h,ll(this,l.j),this.o=l.o,this.g=l.g,ul(this,l.s),this.l=l.l;var d=l.i,p=new ho;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),yg(this,p),this.m=l.m}else l&&(d=String(l).match(gg))?(this.h=!1,ll(this,d[1]||"",!0),this.o=uo(d[2]||""),this.g=uo(d[3]||"",!0),ul(this,d[4]),this.l=uo(d[5]||"",!0),yg(this,d[6]||"",!0),this.m=uo(d[7]||"")):(this.h=!1,this.i=new ho(null,this.h))}oi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(co(d,vg,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(co(d,vg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(co(p,p.charAt(0)=="/"?mI:pI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",co(p,yI)),l.join("")};function Fn(l){return new oi(l)}function ll(l,d,p){l.j=p?uo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ul(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function yg(l,d,p){d instanceof ho?(l.i=d,vI(l.i,l.h)):(p||(d=co(d,gI)),l.i=new ho(d,l.h))}function Se(l,d,p){l.i.set(d,p)}function cl(l){return Se(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function uo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function co(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,fI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var vg=/[#\/\?@]/g,pI=/[#\?:]/g,mI=/[#\?]/g,gI=/[#\?@]/g,yI=/#/g;function ho(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function hr(l){l.g||(l.g=new Map,l.h=0,l.i&&hI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=ho.prototype,t.add=function(l,d){hr(this),this.i=null,l=qi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function _g(l,d){hr(l),d=qi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function wg(l,d){return hr(l),d=qi(l,d),l.g.has(d)}t.forEach=function(l,d){hr(this),this.g.forEach(function(p,w){p.forEach(function(O){l.call(d,O,w,this)},this)},this)},t.na=function(){hr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let w=0;w<d.length;w++){const O=l[w];for(let M=0;M<O.length;M++)p.push(d[w])}return p},t.V=function(l){hr(this);let d=[];if(typeof l=="string")wg(this,l)&&(d=d.concat(this.g.get(qi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return hr(this),this.i=null,l=qi(this,l),wg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Eg(l,d,p){_g(l,d),0<p.length&&(l.i=null,l.g.set(qi(l,d),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var w=d[p];const M=encodeURIComponent(String(w)),$=this.V(w);for(w=0;w<$.length;w++){var O=M;$[w]!==""&&(O+="="+encodeURIComponent(String($[w]))),l.push(O)}}return this.i=l.join("&")};function qi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function vI(l,d){d&&!l.j&&(hr(l),l.i=null,l.g.forEach(function(p,w){var O=w.toLowerCase();w!=O&&(_g(this,w),Eg(this,O,p))},l)),l.j=d}function _I(l,d){const p=new ao;if(a.Image){const w=new Image;w.onload=T(fr,p,"TestLoadImage: loaded",!0,d,w),w.onerror=T(fr,p,"TestLoadImage: error",!1,d,w),w.onabort=T(fr,p,"TestLoadImage: abort",!1,d,w),w.ontimeout=T(fr,p,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function wI(l,d){const p=new ao,w=new AbortController,O=setTimeout(()=>{w.abort(),fr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(M=>{clearTimeout(O),M.ok?fr(p,"TestPingServer: ok",!0,d):fr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),fr(p,"TestPingServer: error",!1,d)})}function fr(l,d,p,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(p)}catch{}}function EI(){this.g=new rI}function TI(l,d,p){const w=p||"";try{mg(l,function(O,M){let $=O;c(O)&&($=Gc(O)),d.push(w+M+"="+encodeURIComponent($))})}catch(O){throw d.push(w+"type="+encodeURIComponent("_badmap")),O}}function dl(l){this.l=l.Ub||null,this.j=l.eb||!1}S(dl,Kc),dl.prototype.g=function(){return new hl(this.l,this.j)},dl.prototype.i=function(l){return function(){return l}}({});function hl(l,d){Qe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(hl,Qe),t=hl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,po(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?fo(this):po(this),this.readyState==3&&Tg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,fo(this))},t.Qa=function(l){this.g&&(this.response=l,fo(this))},t.ga=function(){this.g&&fo(this)};function fo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,po(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function po(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Sg(l){let d="";return V(l,function(p,w){d+=w,d+=":",d+=p,d+=`\r
`}),d}function id(l,d,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=Sg(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Se(l,d,p))}function Me(l){Qe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Me,Qe);var SI=/^https?$/i,II=["POST","PUT"];t=Me.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xc.g(),this.v=this.o?Jm(this.o):Jm(Xc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){Ig(this,M);return}if(l=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)p.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())p.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(II,d,void 0))||w||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of p)this.g.setRequestHeader(M,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pg(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Ig(this,M)}};function Ig(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Ag(l),fl(l)}function Ag(l){l.A||(l.A=!0,Ze(l,"complete"),Ze(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ze(this,"complete"),Ze(this,"abort"),fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cg(this):this.bb())},t.bb=function(){Cg(this)};function Cg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||jn(l)!=4||l.Z()!=2)){if(l.u&&jn(l)==4)Km(l.Ea,0,l);else if(Ze(l,"readystatechange"),jn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var w;if(w=$===0){var O=String(l.D).match(gg)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),w=!SI.test(O?O.toLowerCase():"")}p=w}if(p)Ze(l,"complete"),Ze(l,"success");else{l.m=6;try{var M=2<jn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Ag(l)}}finally{fl(l)}}}}function fl(l,d){if(l.g){Pg(l);const p=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Ze(l,"ready");try{p.onreadystatechange=w}catch{}}}function Pg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function jn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),nI(d)}};function kg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AI(l){const d={};l=(l.g&&2<=jn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(y(l[w]))continue;var p=x(l[w]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[O]||[];d[O]=M,M.push(p)}E(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Rg(l){this.Aa=0,this.i=[],this.j=new ao,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mo("baseRetryDelayMs",5e3,l),this.cb=mo("retryDelaySeedMs",1e4,l),this.Wa=mo("forwardChannelMaxRetries",2,l),this.wa=mo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new cg(l&&l.concurrentRequestLimit),this.Da=new EI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Rg.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,w){St(0),this.W=l,this.H=d||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.I=Fg(this,null,this.W),ml(this)};function sd(l){if(xg(l),l.G==3){var d=l.U++,p=Fn(l.I);if(Se(p,"SID",l.K),Se(p,"RID",d),Se(p,"TYPE","terminate"),go(l,p),d=new dr(l,l.j,d),d.L=2,d.v=cl(Fn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=jg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),al(d)}Vg(l)}function pl(l){l.g&&(ad(l),l.g.cancel(),l.g=null)}function xg(l){pl(l),l.u&&(a.clearTimeout(l.u),l.u=null),gl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ml(l){if(!dg(l.h)&&!l.s){l.s=!0;var d=l.Ga;le||J(),B||(le(),B=!0),Q.add(d,l),l.B=0}}function CI(l,d){return hg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=oo(m(l.Ga,l,d),Mg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new dr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=g(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Ng(this,O,d),p=Fn(this.I),Se(p,"RID",l),Se(p,"CVER",22),this.D&&Se(p,"X-HTTP-Session-Id",this.D),go(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(Sg(M)))+"&"+d:this.m&&id(p,this.m,M)),rd(this.h,O),this.Ua&&Se(p,"TYPE","init"),this.P?(Se(p,"$req",d),Se(p,"SID","null"),O.T=!0,Zc(O,p,null)):Zc(O,p,d),this.G=2}}else this.G==3&&(l?bg(this,l):this.i.length==0||dg(this.h)||bg(this))};function bg(l,d){var p;d?p=d.l:p=l.U++;const w=Fn(l.I);Se(w,"SID",l.K),Se(w,"RID",p),Se(w,"AID",l.T),go(l,w),l.m&&l.o&&id(w,l.m,l.o),p=new dr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Ng(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),rd(l.h,p),Zc(p,w,d)}function go(l,d){l.H&&V(l.H,function(p,w){Se(d,w,p)}),l.l&&mg({},function(p,w){Se(d,w,p)})}function Ng(l,d,p){p=Math.min(l.i.length,p);var w=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const $=["count="+p];M==-1?0<p?(M=O[0].g,$.push("ofs="+M)):M=0:$.push("ofs="+M);let we=!0;for(let et=0;et<p;et++){let ce=O[et].g;const ut=O[et].map;if(ce-=M,0>ce)M=Math.max(0,O[et].g-100),we=!1;else try{TI(ut,$,"req"+ce+"_")}catch{w&&w(ut)}}if(we){w=$.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,w}function Og(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;le||J(),B||(le(),B=!0),Q.add(d,l),l.v=0}}function od(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=oo(m(l.Fa,l),Mg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Lg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=oo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),pl(this),Lg(this))};function ad(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Lg(l){l.g=new dr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Fn(l.qa);Se(d,"RID","rpc"),Se(d,"SID",l.K),Se(d,"AID",l.T),Se(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Se(d,"TO",l.ja),Se(d,"TYPE","xmlhttp"),go(l,d),l.m&&l.o&&id(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=cl(Fn(d)),p.m=null,p.P=!0,ag(p,l)}t.Za=function(){this.C!=null&&(this.C=null,pl(this),od(this),St(19))};function gl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Dg(l,d){var p=null;if(l.g==d){gl(l),ad(l),l.g=null;var w=2}else if(nd(l.h,d))p=d.D,fg(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var O=l.B;w=il(),Ze(w,new rg(w,p)),ml(l)}else Og(l);else if(O=d.s,O==3||O==0&&0<d.X||!(w==1&&CI(l,d)||w==2&&od(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),O){case 1:ai(l,5);break;case 4:ai(l,10);break;case 3:ai(l,6);break;default:ai(l,2)}}}function Mg(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ai(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),w=l.Xa;const O=!w;w=new oi(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ll(w,"https"),cl(w),O?_I(w.toString(),p):wI(w.toString(),p)}else St(2);l.G=0,l.l&&l.l.sa(d),Vg(l),xg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Vg(l){if(l.G=0,l.ka=[],l.l){const d=pg(l.h);(d.length!=0||l.i.length!=0)&&(R(l.ka,d),R(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function Fg(l,d,p){var w=p instanceof oi?Fn(p):new oi(p);if(w.g!="")d&&(w.g=d+"."+w.g),ul(w,w.s);else{var O=a.location;w=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var M=new oi(null);w&&ll(M,w),d&&(M.g=d),O&&ul(M,O),p&&(M.l=p),w=M}return p=l.D,d=l.ya,p&&d&&Se(w,p,d),Se(w,"VER",l.la),go(l,w),w}function jg(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Me(new dl({eb:p})):new Me(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ug(){}t=Ug.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yl(){}yl.prototype.g=function(l,d){return new Vt(l,d)};function Vt(l,d){Qe.call(this),this.g=new Rg(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!y(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Gi(this)}S(Vt,Qe),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){sd(this.g)},Vt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Gc(l),l=p);d.i.push(new uI(d.Ya++,l)),d.G==3&&ml(d)},Vt.prototype.N=function(){this.g.l=null,delete this.j,sd(this.g),delete this.g,Vt.aa.N.call(this)};function zg(l){Qc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}S(zg,Qc);function Bg(){Yc.call(this),this.status=1}S(Bg,Yc);function Gi(l){this.g=l}S(Gi,Ug),Gi.prototype.ua=function(){Ze(this.g,"a")},Gi.prototype.ta=function(l){Ze(this.g,new zg(l))},Gi.prototype.sa=function(l){Ze(this.g,new Bg)},Gi.prototype.ra=function(){Ze(this.g,"b")},yl.prototype.createWebChannel=yl.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,pT=function(){return new yl},fT=function(){return il()},hT=ii,Pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sl.NO_ERROR=0,sl.TIMEOUT=8,sl.HTTP_ERROR=6,cu=sl,ig.COMPLETE="complete",dT=ig,Zm.EventType=io,io.OPEN="a",io.CLOSE="b",io.ERROR="c",io.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Mo=Zm,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,cT=Me}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});const o_="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Xs="10.14.0";/**
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
 */const Li=new Yp("@firebase/firestore");function Ao(){return Li.logLevel}function H(t,...e){if(Li.logLevel<=oe.DEBUG){const n=e.map(um);Li.debug(`Firestore (${Xs}): ${t}`,...n)}}function or(t,...e){if(Li.logLevel<=oe.ERROR){const n=e.map(um);Li.error(`Firestore (${Xs}): ${t}`,...n)}}function Vs(t,...e){if(Li.logLevel<=oe.WARN){const n=e.map(um);Li.warn(`Firestore (${Xs}): ${t}`,...n)}}function um(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function ge(t,e){t||Z()}function te(t,e){return t}/**
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
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class NN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ON{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new mT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new mt(e)}}class LN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new MN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class gT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ke(0,0))}static max(){return new ee(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Aa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Aa{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const jN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Aa{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return jN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Fe.fromString(e))}static fromName(e){return new K(Fe.fromString(e).popFirst(5))}static empty(){return new K(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Fe(e.slice()))}}function UN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new qr(i,K.empty(),e)}function zN(t){return new qr(t.readTime,t.key,-1)}class qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qr(ee.min(),K.empty(),-1)}static max(){return new qr(ee.max(),K.empty(),-1)}}function BN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */async function Ga(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==$N)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ka(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cm.oe=-1;function Lc(t){return t==null}function Ju(t){return t===0&&1/t==-1/0}function qN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ju(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function a_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ul(this.root,e,this.comparator,!0)}}class Ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??nt.RED,this.left=i??nt.EMPTY,this.right=s??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new l_(this.data.getIterator())}getIteratorFrom(e){return new l_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class l_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new st(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class vT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vT("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const GN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=GN.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function dm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hm(t){const e=t.mapValue.fields.__previous_value__;return dm(e)?hm(e):e}function Ca(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class KN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zl={mapValue:{}};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dm(t)?4:YN(t)?9007199254740991:QN(t)?10:11:Z()}function Dn(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gr(i.timestampValue),a=Gr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Di(i.bytesValue).isEqual(Di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),a=ze(s.doubleValue);return o===a?Ju(o)===Ju(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(a_(o)!==a_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Dn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function ka(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return u_(t.timestampValue,e.timestampValue);case 4:return u_(Ca(t),Ca(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Di(s),u=Di(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=de(a[c],u[c]);if(h!==0)return h}return de(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(ze(s.latitude),ze(o.latitude));return a!==0?a:de(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return c_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},T=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=de(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:c_(T,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===zl.mapValue&&o===zl.mapValue)return 0;if(s===zl.mapValue)return 1;if(o===zl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=de(u[f],h[f]);if(m!==0)return m;const T=js(a[u[f]],c[h[f]]);if(T!==0)return T}return de(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function u_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Gr(t),r=Gr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function c_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=js(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function Us(t){return kf(t)}function kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kf(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Rf(t){return!!t&&"integerValue"in t}function fm(t){return!!t&&"arrayValue"in t}function d_(t){return!!t&&"nullValue"in t}function h_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function du(t){return!!t&&"mapValue"in t}function QN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xo(n)}setAll(e){let n=rt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(Xo(this.value))}}function _T(t){const e=[];return Js(t.fields,(n,r)=>{const i=new rt([n]);if(du(r)){const s=_T(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,ee.min(),ee.min(),ee.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,ee.min(),ee.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ee.min(),ee.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zu{constructor(e,n){this.position=e,this.inclusive=n}}function f_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function p_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ec{constructor(e,n="asc"){this.field=e,this.dir=n}}function XN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class wT{}class qe extends wT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZN(e,n,r):n==="array-contains"?new n4(e,r):n==="in"?new r4(e,r):n==="not-in"?new i4(e,r):n==="array-contains-any"?new s4(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new e4(e,r):new t4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends wT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mn(e,n)}matches(e){return ET(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ET(t){return t.op==="and"}function TT(t){return JN(t)&&ET(t)}function JN(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function xf(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(TT(t))return t.filters.map(e=>xf(e)).join(",");{const e=t.filters.map(n=>xf(n)).join(",");return`${t.op}(${e})`}}function ST(t,e){return t instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof Mn?function(r,i){return i instanceof Mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ST(o,i.filters[a]),!0):!1}(t,e):void Z()}function IT(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(IT).join(" ,")+"}"}(t):"Filter"}class ZN extends qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class e4 extends qe{constructor(e,n){super(e,"in",n),this.keys=AT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t4 extends qe{constructor(e,n){super(e,"not-in",n),this.keys=AT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class n4 extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fm(n)&&ka(n.arrayValue,this.value)}}class r4 extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class i4 extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class s4 extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ka(this.value.arrayValue,r))}}/**
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
 */class o4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function m_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new o4(t,e,n,r,i,s,o)}function pm(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.ue=n}return e.ue}function mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ST(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!p_(t.startAt,e.startAt)&&p_(t.endAt,e.endAt)}function bf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Dc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function a4(t,e,n,r,i,s,o,a){return new Dc(t,e,n,r,i,s,o,a)}function gm(t){return new Dc(t)}function g_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l4(t){return t.collectionGroup!==null}function Jo(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ec(s,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new ec(rt.keyField(),r))}return e.ce}function On(t){const e=te(t);return e.le||(e.le=u4(e,Jo(t))),e.le}function u4(t,e){if(t.limitType==="F")return m_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ec(i.field,s)});const n=t.endAt?new Zu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zu(t.startAt.position,t.startAt.inclusive):null;return m_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nf(t,e,n){return new Dc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mc(t,e){return mm(On(t),On(e))&&t.limitType===e.limitType}function CT(t){return`${pm(On(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IT(i)).join(", ")}]`),Lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Us(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=f_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Jo(r),i)||r.endAt&&!function(o,a,u){const c=f_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Jo(r),i))}(t,e)}function c4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PT(t){return(e,n)=>{let r=!1;for(const i of Jo(t)){const s=d4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function d4(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?js(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yT(this.inner)}size(){return this.innerSize}}/**
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
 */const h4=new Le(K.comparator);function ar(){return h4}const kT=new Le(K.comparator);function Vo(...t){let e=kT;for(const n of t)e=e.insert(n.key,n);return e}function RT(t){let e=kT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vi(){return Zo()}function xT(){return Zo()}function Zo(){return new Zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const f4=new Le(K.comparator),p4=new st(K.comparator);function se(...t){let e=p4;for(const n of t)e=e.add(n);return e}const m4=new st(de);function g4(){return m4}/**
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
 */function ym(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function bT(t){return{integerValue:""+t}}function y4(t,e){return qN(e)?bT(e):ym(t,e)}/**
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
 */class Fc{constructor(){this._=void 0}}function v4(t,e,n){return t instanceof tc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&dm(s)&&(s=hm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ra?OT(t,e):t instanceof xa?LT(t,e):function(i,s){const o=NT(i,s),a=y_(o)+y_(i.Pe);return Rf(o)&&Rf(i.Pe)?bT(a):ym(i.serializer,a)}(t,e)}function _4(t,e,n){return t instanceof Ra?OT(t,e):t instanceof xa?LT(t,e):n}function NT(t,e){return t instanceof nc?function(r){return Rf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class tc extends Fc{}class Ra extends Fc{constructor(e){super(),this.elements=e}}function OT(t,e){const n=DT(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xa extends Fc{constructor(e){super(),this.elements=e}}function LT(t,e){let n=DT(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class nc extends Fc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function y_(t){return ze(t.integerValue||t.doubleValue)}function DT(t){return fm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function w4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ra&&i instanceof Ra||r instanceof xa&&i instanceof xa?Fs(r.elements,i.elements,Dn):r instanceof nc&&i instanceof nc?Dn(r.Pe,i.Pe):r instanceof tc&&i instanceof tc}(t.transform,e.transform)}class E4{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function MT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new FT(t.key,Qn.none()):new Qa(t.key,t.data,Qn.none());{const n=t.data,r=Zt.empty();let i=new st(rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(t.key,r,new fn(i.toArray()),Qn.none())}}function T4(t,e,n){t instanceof Qa?function(i,s,o){const a=i.value.clone(),u=__(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zi?function(i,s,o){if(!hu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=__(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(VT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ea(t,e,n,r){return t instanceof Qa?function(s,o,a,u){if(!hu(s.precondition,o))return a;const c=s.value.clone(),h=w_(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zi?function(s,o,a,u){if(!hu(s.precondition,o))return a;const c=w_(s.fieldTransforms,u,o),h=o.data;return h.setAll(VT(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return hu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function S4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=NT(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function v_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fs(r,i,(s,o)=>w4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qa extends jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function __(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_4(o,a,n[i]))}return r}function w_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v4(s,o,e))}return r}class FT extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I4 extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class A4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=MT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>v_(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>v_(n,r))}}class vm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return f4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vm(e,n,r,i)}}/**
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
 */class P4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,ae;function k4(t){switch(t){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function jT(t){if(t===void 0)return or("GRPC error has no .code"),j.UNKNOWN;switch(t){case $e.OK:return j.OK;case $e.CANCELLED:return j.CANCELLED;case $e.UNKNOWN:return j.UNKNOWN;case $e.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case $e.INTERNAL:return j.INTERNAL;case $e.UNAVAILABLE:return j.UNAVAILABLE;case $e.UNAUTHENTICATED:return j.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case $e.NOT_FOUND:return j.NOT_FOUND;case $e.ALREADY_EXISTS:return j.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return j.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case $e.ABORTED:return j.ABORTED;case $e.OUT_OF_RANGE:return j.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return j.UNIMPLEMENTED;case $e.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(ae=$e||($e={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const x4=new Ti([4294967295,4294967295],0);function E_(t){const e=R4().encode(t),n=new uT;return n.update(e),new Uint8Array(n.digest())}function T_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ti([n,r],0),new Ti([i,s],0)]}class _m{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fo(`Invalid padding: ${n}`);if(r<0)throw new Fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ti.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ti.fromNumber(r)));return i.compare(x4)===1&&(i=new Ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=E_(e),[r,i]=T_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _m(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=E_(e),[r,i]=T_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uc(ee.min(),i,new Le(de),ar(),se())}}class Ya{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ya(r,n,se(),se(),se())}}/**
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
 */class fu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class UT{constructor(e,n){this.targetId=e,this.me=n}}class zT{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class S_{constructor(){this.fe=0,this.ge=A_(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Ya(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=A_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class b4{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=I_(),this.Qe=new Le(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(bf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,yt.newNoDocument(o,ee.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Di(r).toUint8Array()}catch(u){if(u instanceof vT)return Vs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new _m(o,i,s)}catch(u){return Vs(u instanceof Fo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&bf(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Uc(e,n,this.Qe,this.ke,r);return this.ke=ar(),this.qe=I_(),this.Qe=new Le(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new S_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new S_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function I_(){return new Le(K.comparator)}function A_(){return new Le(K.comparator)}const N4={asc:"ASCENDING",desc:"DESCENDING"},O4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L4={and:"AND",or:"OR"};class D4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Of(t,e){return t.useProto3Json||Lc(e)?e:{value:e}}function rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function M4(t,e){return rc(t,e.toTimestamp())}function Ln(t){return ge(!!t),ee.fromTimestamp(function(n){const r=Gr(n);return new Ke(r.seconds,r.nanos)}(t))}function wm(t,e){return Lf(t,e).canonicalString()}function Lf(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $T(t){const e=Fe.fromString(t);return ge(KT(e)),e}function Df(t,e){return wm(t.databaseId,e.path)}function Kd(t,e){const n=$T(e);if(n.get(1)!==t.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(HT(n))}function WT(t,e){return wm(t.databaseId,e)}function V4(t){const e=$T(t);return e.length===4?Fe.emptyPath():HT(e)}function Mf(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HT(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C_(t,e,n){return{name:Df(t,e),fields:n.value.mapValue.fields}}function F4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ge(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:jT(c.code);return new G(h,c.message||"")}(o);n=new zT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):ee.min(),a=new Zt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new fu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kd(t,r.document),s=r.readTime?Ln(r.readTime):ee.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kd(t,r.document),s=r.removedTargetIds||[];n=new fu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new P4(i,s),a=r.targetId;n=new UT(a,o)}}return n}function j4(t,e){let n;if(e instanceof Qa)n={update:C_(t,e.key,e.value)};else if(e instanceof FT)n={delete:Df(t,e.key)};else if(e instanceof zi)n={update:C_(t,e.key,e.data),updateMask:K4(e.fieldMask)};else{if(!(e instanceof I4))return Z();n={verify:Df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:M4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function U4(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(ee.min())&&(o=Ln(s)),new E4(o,i.transformResults||[])}(n,e))):[]}function z4(t,e){return{documents:[WT(t,e.path)]}}function B4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WT(t,i);const s=function(c){if(c.length!==0)return GT(Mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Zi(m.field),direction:H4(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Of(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function $4(t){let e=V4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=qT(f);return m instanceof Mn&&TT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new ec(es(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Lc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,T=f.values||[];return new Zu(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,T=f.values||[];return new Zu(T,m)}(n.endAt)),a4(e,i,o,s,a,"F",u,c)}function W4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>qT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function H4(t){return N4[t]}function q4(t){return O4[t]}function G4(t){return L4[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return rt.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof qe?function(n){if(n.op==="=="){if(h_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(d_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(h_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(d_(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:q4(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:G4(n.op),filters:r}}}(t):Z()}function K4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Q4{constructor(e){this.ct=e}}function Y4(t){const e=$4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
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
 */class X4{constructor(){this.un=new J4}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(qr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class J4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new st(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new st(Fe.comparator)).toArray()}}/**
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
 */class zs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zs(0)}static kn(){return new zs(-1)}}/**
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
 */class Z4{constructor(){this.changes=new Zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ea(r.mutation,i,fn.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ar();const o=Zo(),a=function(){return Zo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof zi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ea(h.mutation,c,h.mutation.getFieldMask(),Ke.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new eO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zo();let i=new Le((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||fn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=xT();h.forEach(m=>{if(!s.has(m)){const T=MT(n.get(m),r.get(m));T!==null&&f.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):l4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(vi());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:a,changes:RT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Vo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Vo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,m){return new Dc(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,yt.newInvalidDocument(h)))});let a=Vo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ea(h.mutation,c,fn.empty(),Ke.now()),Vc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class rO{constructor(){this.overlays=new Le(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=vi(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=vi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=vi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new C4(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class iO{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Em{constructor(){this.Tr=new st(Ye.Er),this.dr=new st(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Fe([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Fe([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class sO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(Ye.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(de);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new K(s),0);let a=new st(de);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oO{constructor(e){this.Mr=e,this.docs=function(){return new Le(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ar();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BN(zN(h),r)<=0||(i.has(h.key)||Vc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aO(this)}getSize(e){return F.resolve(this.size)}}class aO extends Z4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class lO{constructor(e){this.persistence=e,this.Nr=new Zs(n=>pm(n),mm),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Em,this.targetCount=0,this.kr=zs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class uO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cm(0),this.Kr=!1,this.Kr=!0,this.$r=new iO,this.referenceDelegate=e(this),this.Ur=new lO(this),this.indexManager=new X4,this.remoteDocumentCache=function(i){return new oO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Q4(n),this.Gr=new nO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new cO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cO extends WN{constructor(e){super(),this.currentSequenceNumber=e}}class Tm{constructor(e){this.persistence=e,this.Jr=new Em,this.Yr=null}static Zr(e){return new Tm(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Sm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sm(e,n.fromCache,r,i)}}/**
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
 */class hO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return nR()?8:HN(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ao()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Ao()<=oe.DEBUG&&H("QueryEngine","Query:",Ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ao()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):F.resolve())}Yi(e,n){if(g_(n))return F.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nf(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Nf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return g_(n)||i.isEqual(ee.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(Ao()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ji(n)),this.rs(e,o,n,UN(i,-1)).next(a=>a))})}ts(e,n){let r=new st(PT(e));return n.forEach((i,s)=>{Vc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ao()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.Ji.getDocumentsMatchingQuery(e,n,qr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class fO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Le(de),this._s=new Zs(s=>pm(s),mm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pO(t,e,n,r){return new fO(t,e,n,r)}async function QT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function mO(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let T=F.resolve();return m.forEach(S=>{T=T.next(()=>h.getEntry(u,S)).next(P=>{const R=c.docVersions.get(S);ge(R!==null),P.version.compareTo(R)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),T.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YT(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gO(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(lt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,r)),i=i.insert(f,T),function(P,R,v){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,T,h)&&a.push(n.Ur.updateTargetData(s,T))});let u=ar(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(yO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ee.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function yO(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ar();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function vO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _O(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Vf(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ka(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function P_(t,e,n){const r=te(t);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=te(u),m=f._s.get(h);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:se())).next(a=>(wO(r,c4(e),a),{documents:a,Ts:s})))}function wO(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class k_{constructor(){this.activeTargetIds=g4()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EO{constructor(){this.so=new k_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new k_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bl=null;function Qd(){return Bl===null?Bl=function(){return 268435456+Math.round(2147483648*Math.random())}():Bl++,"0x"+Bl.toString(16)}/**
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
 */const ft="WebChannelConnection";class AO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Qd(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Vs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=SO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Qd();return new Promise((o,a)=>{const u=new cT;u.setWithCredentials(!0),u.listenOnce(dT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cu.NO_ERROR:const h=u.getResponseJson();H(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case cu.TIMEOUT:H(ft,`RPC '${e}' ${s} timed out`),a(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const f=u.getStatus();if(H(ft,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const S=function(R){const v=R.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(v)>=0?v:j.UNKNOWN}(T.status);a(new G(S,T.message))}else a(new G(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ft,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Qd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pT(),a=fT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(ft,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,T=!1;const S=new IO({Io:R=>{T?H(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(H(ft,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),H(ft,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),P=(R,v,y)=>{R.listen(v,I=>{try{y(I)}catch(b){setTimeout(()=>{throw b},0)}})};return P(f,Mo.EventType.OPEN,()=>{T||(H(ft,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(f,Mo.EventType.CLOSE,()=>{T||(T=!0,H(ft,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(f,Mo.EventType.ERROR,R=>{T||(T=!0,Vs(ft,`RPC '${e}' stream ${i} transport errored:`,R),S.So(new G(j.UNAVAILABLE,"The operation could not be completed")))}),P(f,Mo.EventType.MESSAGE,R=>{var v;if(!T){const y=R.data[0];ge(!!y);const I=y,b=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(b){H(ft,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let V=function(A){const C=$e[A];if(C!==void 0)return jT(C)}(L),E=b.message;V===void 0&&(V=j.INTERNAL,E="Unknown error status: "+L+" with message "+b.message),T=!0,S.So(new G(V,E)),f.close()}else H(ft,`RPC '${e}' stream ${i} received:`,y),S.bo(y)}}),P(a,hT.STAT_EVENT,R=>{R.stat===Pf.PROXY?H(ft,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Pf.NOPROXY&&H(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Yd(){return typeof document<"u"?document:null}/**
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
 */function zc(t){return new D4(t,!0)}/**
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
 */class XT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class JT{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new XT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CO extends JT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=F4(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Ln(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Mf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=bf(u)?{documents:z4(s,u)}:{query:B4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BT(s,o.resumeToken);const c=Of(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=rc(s,o.snapshotVersion.toTimestamp());const c=Of(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=W4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Mf(this.serializer),n.removeTarget=e,this.a_(n)}}class PO extends JT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=U4(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Mf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>j4(this.serializer,r))};this.a_(n)}}/**
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
 */class kO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Lf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Lf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(or(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await Xa(c),c.q_.set("Unknown"),c.L_.delete(4),await Bc(c)}(this))})}),this.q_=new RO(r,i)}}async function Bc(t){if(Bi(t))for(const e of t.B_)await e(!0)}async function Xa(t){for(const e of t.B_)await e(!1)}function ZT(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Pm(n)?Cm(n):eo(n).r_()&&Am(n,e))}function Im(t,e){const n=te(t),r=eo(n);n.N_.delete(e),r.r_()&&eS(n,e),n.N_.size===0&&(r.r_()?r.o_():Bi(n)&&n.q_.set("Unknown"))}function Am(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}eo(t).A_(e)}function eS(t,e){t.Q_.xe(e),eo(t).R_(e)}function Cm(t){t.Q_=new b4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),eo(t).start(),t.q_.v_()}function Pm(t){return Bi(t)&&!eo(t).n_()&&t.N_.size>0}function Bi(t){return te(t).L_.size===0}function tS(t){t.Q_=void 0}async function bO(t){t.q_.set("Online")}async function NO(t){t.N_.forEach((e,n)=>{Am(t,e)})}async function OO(t,e){tS(t),Pm(t)?(t.q_.M_(e),Cm(t)):t.q_.set("Unknown")}async function LO(t,e,n){if(t.q_.set("Online"),e instanceof zT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof fu?t.Q_.Ke(e):e instanceof UT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await YT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),eS(s,u);const f=new kr(h.target,u,c,h.sequenceNumber);Am(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!Ka(e))throw e;t.L_.add(1),await Xa(t),t.q_.set("Offline"),n||(n=()=>YT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Bc(t)})}function nS(t,e){return e().catch(n=>ic(t,n,e))}async function $c(t){const e=te(t),n=Kr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DO(e);)try{const i=await vO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,MO(e,i)}catch(i){await ic(e,i)}rS(e)&&iS(e)}function DO(t){return Bi(t)&&t.O_.length<10}function MO(t,e){t.O_.push(e);const n=Kr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function rS(t){return Bi(t)&&!Kr(t).n_()&&t.O_.length>0}function iS(t){Kr(t).start()}async function VO(t){Kr(t).p_()}async function FO(t){const e=Kr(t);for(const n of t.O_)e.m_(n.mutations)}async function jO(t,e,n){const r=t.O_.shift(),i=vm.from(r,e,n);await nS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $c(t)}async function UO(t,e){e&&Kr(t).V_&&await async function(r,i){if(function(o){return k4(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Kr(r).s_(),await nS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $c(r)}}(t,e),rS(t)&&iS(t)}async function x_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Bi(n);n.L_.add(3),await Xa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Bc(n)}async function zO(t,e){const n=te(t);e?(n.L_.delete(2),await Bc(n)):e||(n.L_.add(2),await Xa(n),n.q_.set("Unknown"))}function eo(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new CO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:bO.bind(null,t),Ro:NO.bind(null,t),mo:OO.bind(null,t),d_:LO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Pm(t)?Cm(t):t.q_.set("Unknown")):(await t.K_.stop(),tS(t))})),t.K_}function Kr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new PO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VO.bind(null,t),mo:UO.bind(null,t),f_:FO.bind(null,t),g_:jO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await $c(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class km{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new km(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rm(t,e){if(or("AsyncQueue",`${e}: ${t}`),Ka(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Vo(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class b_{constructor(){this.W_=new Le(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bs(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class BO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $O{constructor(){this.queries=N_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=N_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function N_(){return new Zs(t=>CT(t),Mc)}async function WO(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new BO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Rm(o,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&xm(n)}async function HO(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qO(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&xm(n)}function GO(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function xm(t){t.Y_.forEach(e=>{e.next()})}var Ff,O_;(O_=Ff||(Ff={})).ea="default",O_.Cache="cache";class KO{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ff.Cache}}/**
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
 */class sS{constructor(e){this.key=e}}class oS{constructor(e){this.key=e}}class QO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=PT(e),this.Ra=new Ps(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new b_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),T=Vc(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let R=!1;m&&T?m.data.isEqual(T.data)?S!==P&&(r.track({type:3,doc:T}),R=!0):this.ga(m,T)||(r.track({type:2,doc:T}),R=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(a=!0)):!m&&T?(r.track({type:0,doc:T}),R=!0):m&&!T&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(T?(o=o.add(T),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(T,S){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(T)-P(S)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Bs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new b_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new oS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sS(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Bs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class YO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XO{constructor(e){this.key=e,this.va=!1}}class JO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Zs(a=>CT(a),Mc),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(K.comparator),this.Na=new Map,this.La=new Em,this.Ba={},this.ka=new Map,this.qa=zs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ZO(t,e,n=!0){const r=hS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await aS(r,e,n,!0),i}async function eL(t,e){const n=hS(t);await aS(n,e,!0,!1)}async function aS(t,e,n,r){const i=await _O(t.localStore,On(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await tL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZT(t.remoteStore,i),a}async function tL(t,e,n,r,i){t.Ka=(f,m,T)=>async function(P,R,v,y){let I=R.view.ma(v);I.ns&&(I=await P_(P.localStore,R.query,!1).then(({documents:E})=>R.view.ma(E,I)));const b=y&&y.targetChanges.get(R.targetId),L=y&&y.targetMismatches.get(R.targetId)!=null,V=R.view.applyChanges(I,P.isPrimaryClient,b,L);return D_(P,R.targetId,V.wa),V.snapshot}(t,f,m,T);const s=await P_(t.localStore,e,!0),o=new QO(e,s.Ts),a=o.ma(s.documents),u=Ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);D_(t,n,c.wa);const h=new YO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function nL(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Mc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Im(r.remoteStore,i.targetId),jf(r,i.targetId)}).catch(Ga)):(jf(r,i.targetId),await Vf(r.localStore,i.targetId,!0))}async function rL(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Im(n.remoteStore,r.targetId))}async function iL(t,e,n){const r=dL(t);try{const i=await function(o,a){const u=te(o),c=Ke.now(),h=a.reduce((T,S)=>T.add(S.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=ar(),P=se();return u.cs.getEntries(T,h).next(R=>{S=R,S.forEach((v,y)=>{y.isValidDocument()||(P=P.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,S)).next(R=>{f=R;const v=[];for(const y of a){const I=S4(y,f.get(y.key).overlayedDocument);I!=null&&v.push(new zi(y.key,I,_T(I.value.mapValue),Qn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,v,a)}).next(R=>{m=R;const v=R.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(T,R.batchId,v)})}).then(()=>({batchId:m.batchId,changes:RT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Le(de)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ja(r,i.changes),await $c(r.remoteStore)}catch(i){const s=Rm(i,"Failed to persist write");n.reject(s)}}async function lS(t,e){const n=te(t);try{const r=await gO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Ja(n,r,e)}catch(r){await Ga(r)}}function L_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=te(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&xm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sL(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Le(K.comparator);o=o.insert(s,yt.newNoDocument(s,ee.min()));const a=se().add(s),u=new Uc(ee.min(),new Map,new Le(de),o,a);await lS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),bm(r)}else await Vf(r.localStore,e,!1).then(()=>jf(r,e,n)).catch(Ga)}async function oL(t,e){const n=te(t),r=e.batch.batchId;try{const i=await mO(n.localStore,e);cS(n,r,null),uS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ja(n,i)}catch(i){await Ga(i)}}async function aL(t,e,n){const r=te(t);try{const i=await function(o,a){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);cS(r,e,n),uS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ja(r,i)}catch(i){await Ga(i)}}function uS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cS(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||dS(t,r)})}function dS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Im(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bm(t))}function D_(t,e,n){for(const r of n)r instanceof sS?(t.La.addReference(r.key,e),lL(t,r)):r instanceof oS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||dS(t,r.key)):Z()}function lL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),bm(t))}function bm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new XO(n)),t.Oa=t.Oa.insert(n,r),ZT(t.remoteStore,new kr(On(gm(n.path)),r,"TargetPurposeLimboResolution",cm.oe))}}async function Ja(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Sm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=te(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,T=>h.persistence.referenceDelegate.addReference(f,m.targetId,T)).next(()=>F.forEach(m.Ui,T=>h.persistence.referenceDelegate.removeReference(f,m.targetId,T)))))}catch(f){if(!Ka(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const T=h.os.get(m),S=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(m,P)}}}(r.localStore,s))}async function uL(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ja(n,r.hs)}}function cL(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function hS(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sL.bind(null,e),e.Ca.d_=qO.bind(null,e.eventManager),e.Ca.$a=GO.bind(null,e.eventManager),e}function dL(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aL.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pO(this.persistence,new hO,e.initialUser,this.serializer)}Ga(e){return new uO(Tm.Zr,this.serializer)}Wa(e){return new EO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class Uf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>L_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uL.bind(null,this.syncEngine),await zO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $O}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),r=function(s){return new AO(s)}(e.databaseInfo);return function(s,o,a,u){return new kO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>L_(this.syncEngine,n,0),function(){return R_.D()?new R_:new TO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new JO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uf.provider={build:()=>new Uf};/**
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
 */class hL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class fL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=gT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function M_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pL(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>x_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>x_(e.remoteStore,i)),t._onlineComponents=e}async function pL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await Xd(t,new sc)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Xd(t,new sc);return t._offlineComponents}async function fS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await M_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await M_(t,new Uf))),t._onlineComponents}function mL(t){return fS(t).then(e=>e.syncEngine)}async function gL(t){const e=await fS(t),n=e.eventManager;return n.onListen=ZO.bind(null,e.syncEngine),n.onUnlisten=nL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rL.bind(null,e.syncEngine),n}function yL(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new hL({next:m=>{h.Za(),o.enqueueAndForget(()=>HO(s,f));const T=m.docs.has(a);!T&&m.fromCache?c.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new KO(gm(a.path),h,{includeMetadataChanges:!0,_a:!0});return WO(s,f)}(await gL(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function pS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const V_=new Map;/**
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
 */function vL(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _L(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function F_(t){if(!K.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function ba(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nm(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class j_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_L("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Om{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bN;switch(r.type){case"firstParty":return new DN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=V_.get(n);r&&(H("ComponentProvider","Removing Datastore"),V_.delete(n),r.terminate())}(this),Promise.resolve()}}function wL(t,e,n,r={}){var i;const s=(t=ba(t,Om))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=mt.MOCK_USER;else{a=TE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new mt(c)}t._authCredentials=new NN(new mT(a,u))}}/**
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
 */class Lm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lm(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Na(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class Na extends Lm{constructor(e,n,r){super(e,n,gm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new K(e))}withConverter(e){return new Na(this.firestore,e,this._path)}}function pu(t,e,...n){if(t=at(t),arguments.length===1&&(e=gT.newId()),vL("doc","path",e),t instanceof Om){const r=Fe.fromString(e,...n);return F_(r),new nn(t,null,new K(r))}{if(!(t instanceof nn||t instanceof Na))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return F_(r),new nn(t.firestore,t instanceof Na?t.converter:null,new K(r))}}/**
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
 */class U_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new XT(this,"async_queue_retry"),this.Vu=()=>{const r=Yd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Yd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new jr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ka(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=km.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Dm extends Om{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new U_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new U_(e),this._firestoreClient=void 0,await e}}}function EL(t,e){const n=typeof t=="object"?t:Jp(),r=typeof t=="string"?t:e,i=xc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_E("firestore");s&&wL(i,...s)}return i}function mS(t){if(t._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TL(t),t._firestoreClient}function TL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new KN(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,pS(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new fL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(lt.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Mm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gS{constructor(e){this._methodName=e}}/**
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
 */class Vm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class Fm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const SL=/^__.*__$/;class IL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}function yS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class jm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yS(this.Cu)&&SL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class AL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zc(e)}Qu(e,n,r,i=!1){return new jm({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CL(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new AL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ES("Data must be an object, but it was:",o,r);const a=_S(r,o);let u,c;if(s.merge)u=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=kL(e,f,n);if(!o.contains(m))throw new G(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xL(h,m)||h.push(m)}u=new fn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new IL(new Zt(a),u,c)}function vS(t,e){if(wS(t=at(t)))return ES("Unsupported field value:",e,t),_S(t,e);if(t instanceof gS)return function(r,i){if(!yS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=vS(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ke.fromDate(r);return{timestampValue:rc(i.serializer,s)}}if(r instanceof Ke){const s=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rc(i.serializer,s)}}if(r instanceof Vm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $s)return{bytesValue:BT(i.serializer,r._byteString)};if(r instanceof nn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Fm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return ym(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Nm(r)}`)}(t,e)}function _S(t,e){const n={};return yT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(r,i)=>{const s=vS(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Vm||t instanceof $s||t instanceof nn||t instanceof gS||t instanceof Fm)}function ES(t,e,n){if(!wS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Nm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function kL(t,e,n){if((e=at(e))instanceof Mm)return e._internalPath;if(typeof e=="string")return TS(t,e);throw oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const RL=new RegExp("[~\\*/\\[\\]]");function TS(t,e,n){if(e.search(RL)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mm(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(j.INVALID_ARGUMENT,a+t+u)}function xL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(IS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends SS{data(){return super.data()}}function IS(t,e){return typeof e=="string"?TS(t,e):e instanceof Mm?e._internalPath:e._delegate._internalPath}class NL{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Js(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ze(o.doubleValue));return new Fm(s)}convertGeoPoint(e){return new Vm(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);ge(KT(r));const i=new Pa(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class LL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AS extends SS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new DL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(IS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class DL extends AS{data(e={}){return super.data(e)}}/**
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
 */function CS(t){t=ba(t,nn);const e=ba(t.firestore,Dm);return yL(mS(e),t._key).then(n=>FL(e,t,n))}class ML extends NL{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function z_(t,e,n){t=ba(t,nn);const r=ba(t.firestore,Dm),i=OL(t.converter,e,n);return VL(r,[PL(CL(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qn.none())])}function VL(t,e){return function(r,i){const s=new jr;return r.asyncQueue.enqueueAndForget(async()=>iL(await mL(r),i,s)),s.promise}(mS(t),e)}function FL(t,e,n){const r=n.docs.get(e._key),i=new ML(t);return new AS(t,i,e._key,r,new LL(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Xs=i})(Ui),Ni(new Hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Dm(new ON(r.getProvider("auth-internal")),new VN(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Rn(o_,"4.7.3",e),Rn(o_,"4.7.3","esm2017")})();var jL="firebase",UL="10.14.1";/**
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
 */const PS="firebasestorage.googleapis.com",kS="storageBucket",zL=2*60*1e3,BL=10*60*1e3;/**
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
 */class Ue extends Vn{constructor(e,n,r=0){super(Jd(e),`Firebase Storage: ${n} (${Jd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Jd(t){return"storage/"+t}function Um(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(je.UNKNOWN,t)}function $L(t){return new Ue(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WL(t){return new Ue(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(je.UNAUTHENTICATED,t)}function qL(){return new Ue(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GL(t){return new Ue(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function KL(){return new Ue(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QL(){return new Ue(je.CANCELED,"User canceled the upload/download.")}function YL(t){return new Ue(je.INVALID_URL,"Invalid URL '"+t+"'.")}function XL(t){return new Ue(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JL(){return new Ue(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kS+"' property when initializing the app?")}function ZL(){return new Ue(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eD(){return new Ue(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tD(t){return new Ue(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zf(t){return new Ue(je.INVALID_ARGUMENT,t)}function RS(){return new Ue(je.APP_DELETED,"The Firebase app was deleted.")}function nD(t){return new Ue(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ta(t,e){return new Ue(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Co(t){throw new Ue(je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zt.makeFromUrl(e,n)}catch{return new zt(e,"")}if(r.path==="")return r;throw XL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},P=n===PS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",v=new RegExp(`^https?://${P}/${i}/${R}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:T,indices:S,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<I.length;b++){const L=I[b],V=L.regex.exec(e);if(V){const E=V[L.indices.bucket];let g=V[L.indices.path];g||(g=""),r=new zt(E,g),L.postModify(r);break}}if(r==null)throw YL(e);return r}}class rD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...R){c||(c=!0,e.apply(null,R))}function f(R){i=setTimeout(()=>{i=null,t(T,u())},R)}function m(){s&&clearTimeout(s)}function T(R,...v){if(c){m();return}if(R){m(),h.call(null,R,...v);return}if(u()||o){m(),h.call(null,R,...v);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let S=!1;function P(R){S||(S=!0,m(),!c&&(i!==null?(R||(a=2),clearTimeout(i),f(0)):R||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function sD(t){t(!1)}/**
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
 */function oD(t){return t!==void 0}function aD(t){return typeof t=="object"&&!Array.isArray(t)}function zm(t){return typeof t=="string"||t instanceof String}function B_(t){return Bm()&&t instanceof Blob}function Bm(){return typeof Blob<"u"}function $_(t,e,n,r){if(r<e)throw zf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $m(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Si;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Si||(Si={}));/**
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
 */class uD{constructor(e,n,r,i,s,o,a,u,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,S)=>{this.resolve_=T,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $l(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Si.NO_ERROR,u=s.getStatus();if(!a||lD(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Si.ABORT;r(!1,new $l(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new $l(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());oD(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Um();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?RS():QL();o(u)}else{const u=KL();o(u)}};this.canceled_?n(!1,new $l(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pD(t,e,n,r,i,s,o=!0){const a=xS(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return hD(c,e),cD(c,n),dD(c,s),fD(c,r),new uD(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function mD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gD(...t){const e=mD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Bm())return new Blob(t);throw new Ue(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zd{constructor(e,n){this.data=e,this.contentType=n||null}}function bS(t,e){switch(t){case pn.RAW:return new Zd(NS(e));case pn.BASE64:case pn.BASE64URL:return new Zd(OS(t,e));case pn.DATA_URL:return new Zd(wD(e),ED(e))}throw Um()}function NS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _D(t){let e;try{e=decodeURIComponent(t)}catch{throw ta(pn.DATA_URL,"Malformed data URL.")}return NS(e)}function OS(t,e){switch(t){case pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ta(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ta(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vD(e)}catch(i){throw i.message.includes("polyfill")?i:ta(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class LS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ta(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=TD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function wD(t){const e=new LS(t);return e.base64?OS(pn.BASE64,e.rest):_D(e.rest)}function ED(t){return new LS(t).contentType}function TD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ar{constructor(e,n){let r=0,i="";B_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(B_(this.data_)){const r=this.data_,i=yD(r,e,n);return i===null?null:new Ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ar(r,!0)}}static getBlob(...e){if(Bm()){const n=e.map(r=>r instanceof Ar?r.data_:r);return new Ar(gD.apply(null,n))}else{const n=e.map(o=>zm(o)?bS(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ar(i,!0)}}uploadData(){return this.data_}}/**
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
 */function DS(t){let e;try{e=JSON.parse(t)}catch{return null}return aD(e)?e:null}/**
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
 */function SD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ID(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function MS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function AD(t,e){return e}class It{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||AD}}let Wl=null;function CD(t){return!zm(t)||t.length<2?t:MS(t)}function VS(){if(Wl)return Wl;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(s,o){return CD(o)}const n=new It("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new It("size");return i.xform=r,t.push(i),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),Wl=t,Wl}function PD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new zt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function kD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return PD(r,t),r}function FS(t,e,n){const r=DS(e);return r===null?null:kD(t,r,n)}function RD(t,e,n,r){const i=DS(e);if(i===null||!zm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),T=$m(m,n,r),S=xS({alt:"media",token:c});return T+S})[0]}function xD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class jS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function US(t){if(!t)throw Um()}function bD(t,e){function n(r,i){const s=FS(t,i,e);return US(s!==null),s}return n}function ND(t,e){function n(r,i){const s=FS(t,i,e);return US(s!==null),RD(s,i,t.host,t._protocol)}return n}function zS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qL():i=HL():n.getStatus()===402?i=WL(t.bucket):n.getStatus()===403?i=GL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function OD(t){const e=zS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$L(t.path)),s.serverResponse=i.serverResponse,s}return n}function LD(t,e,n){const r=e.fullServerUrl(),i=$m(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new jS(i,s,ND(t,n),o);return a.errorHandler=OD(e),a}function DD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DD(null,e)),r}function VD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let b=0;b<2;b++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=MD(e,r,i),h=xD(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",T=Ar.getBlob(f,r,m);if(T===null)throw ZL();const S={name:c.fullPath},P=$m(s,t.host,t._protocol),R="POST",v=t.maxUploadRetryTime,y=new jS(P,R,bD(t,n),v);return y.urlParams=S,y.headers=o,y.body=T.uploadData(),y.errorHandler=zS(e),y}class FD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Si.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Si.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Si.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Co("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Co("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Co("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Co("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Co("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jD extends FD{initXhr(){this.xhr_.responseType="text"}}function BS(){return new jD}/**
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
 */class Vi{constructor(e,n){this._service=e,n instanceof zt?this._location=n:this._location=zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vi(e,n)}get root(){const e=new zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MS(this._location.path)}get storage(){return this._service}get parent(){const e=SD(this._location.path);if(e===null)return null;const n=new zt(this._location.bucket,e);return new Vi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nD(e)}}function UD(t,e,n){t._throwIfRoot("uploadBytes");const r=VD(t.storage,t._location,VS(),new Ar(e,!0),n);return t.storage.makeRequestWithTokens(r,BS).then(i=>({metadata:i,ref:t}))}function zD(t,e,n=pn.RAW,r){t._throwIfRoot("uploadString");const i=bS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),UD(t,i.data,s)}function BD(t){t._throwIfRoot("getDownloadURL");const e=LD(t.storage,t._location,VS());return t.storage.makeRequestWithTokens(e,BS).then(n=>{if(n===null)throw eD();return n})}function $D(t,e){const n=ID(t._location.path,e),r=new zt(t._location.bucket,n);return new Vi(t.storage,r)}/**
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
 */function WD(t){return/^[A-Za-z]+:\/\//.test(t)}function HD(t,e){return new Vi(t,e)}function $S(t,e){if(t instanceof Wm){const n=t;if(n._bucket==null)throw JL();const r=new Vi(n,n._bucket);return e!=null?$S(r,e):r}else return e!==void 0?$D(t,e):t}function qD(t,e){if(e&&WD(e)){if(t instanceof Wm)return HD(t,e);throw zf("To use ref(service, url), the first argument must be a Storage instance.")}else return $S(t,e)}function W_(t,e){const n=e==null?void 0:e[kS];return n==null?null:zt.makeFromBucketSpec(n,t)}function GD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:TE(i,t.app.options.projectId))}class Wm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=PS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zL,this._maxUploadRetryTime=BL,this._requests=new Set,i!=null?this._bucket=zt.makeFromBucketSpec(i,this._host):this._bucket=W_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,e):this._bucket=W_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rD(RS());{const o=pD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const H_="@firebase/storage",q_="0.13.2";/**
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
 */const WS="storage";function KD(t,e,n,r){return t=at(t),zD(t,e,n,r)}function QD(t){return t=at(t),BD(t)}function HS(t,e){return t=at(t),qD(t,e)}function YD(t=Jp(),e){t=at(t);const r=xc(t,WS).getImmediate({identifier:e}),i=_E("storage");return i&&XD(r,...i),r}function XD(t,e,n,r={}){GD(t,e,n,r)}function JD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wm(n,r,i,e,Ui)}function ZD(){Ni(new Hr(WS,JD,"PUBLIC").setMultipleInstances(!0)),Rn(H_,q_,""),Rn(H_,q_,"esm2017")}ZD();const e3={apiKey:"AIzaSyDqGGBsry3u5lo0T83X6T4B__v8On_kSV0",authDomain:"neighborhood-values.firebaseapp.com",projectId:"neighborhood-values",storageBucket:"neighborhood-values.firebasestorage.app",messagingSenderId:"259918371128",appId:"1:259918371128:web:35e0037527bf28b6f409cd"},Hm=AE(e3),mu=EL(Hm,"neighborhood-values"),Bf=lm(Hm),qS=YD(Hm);cb(Bf).catch(t=>{console.error("Anonymous sign-in failed:",t)});const GS=D.createContext({user:null,userData:null,loading:!0,isAnonymous:!0,signOut:async()=>{}}),Za=()=>D.useContext(GS),t3=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),[a,u]=D.useState(!0);D.useEffect(()=>{const h=vb(Bf,async f=>{if(n(f),u((f==null?void 0:f.isAnonymous)||!0),f&&!f.isAnonymous){const m=await CS(pu(mu,"users",f.uid));let T="Subscriber",S;if(m.exists()){const P=m.data();T=P.role||"Subscriber",T==="Contractor"&&(S=P.contractorType)}i({uid:f.uid,email:f.email||"",role:T,displayName:f.displayName||void 0,contractorType:S})}else i(null);o(!1)});return()=>h()},[]);const c=async()=>{await _b(Bf),n(null),i(null)};return _.jsx(GS.Provider,{value:{user:e,userData:r,loading:s,isAnonymous:a,signOut:c},children:t})},Wc={"Contractor-Yard":["Lawn Restoration","Overgrown Bushes or Trees"],"Contractor-Cleanup":["Sidewalk Repair","Graffifiti Cleanup","Trash or Debris Dump Site","Vacant Home Cleanup"],"Contractor-Community":["Homeless Outreach","Overnight Patrol","Home For Sale","Legacy Sponsored Block","Lifestyle Lottery Winner","Neighborhood History"]},n3=Wc,Yi=[{id:"powellhurst-gilbert",name:"Powellhurst-Gilbert"},{id:"lents",name:"Lents"},{id:"foster-powell",name:"Foster-Powell"},{id:"mt-scott-arleta",name:"Mt. Scott-Arleta"},{id:"brentwood-darlington",name:"Brentwood-Darlington"},{id:"woodstock",name:"Woodstock"},{id:"gilbert",name:"Gilbert"},{id:"pleasant-valley",name:"Pleasant Valley"},{id:"centennial",name:"Centennial"},{id:"mill-park",name:"Mill Park"},{id:"south-tabor",name:"South Tabor"}],r3=({onClose:t,onFiltersChange:e,initialFilters:n})=>{var L,V;const{userData:r}=Za();let i=Ms;if((r==null?void 0:r.role)==="Contractor"&&r.contractorType){const E=n3[r.contractorType]||[];i=Ms.filter(g=>E.includes(g.name))}const[s,o]=D.useState((L=n==null?void 0:n.selectedNeighborhoods)!=null&&L.length?n.selectedNeighborhoods:Yi.map(E=>E.name)),[a,u]=D.useState((V=n==null?void 0:n.selectedServiceTypes)!=null&&V.length?n.selectedServiceTypes:i.map(E=>E.name)),[c,h]=D.useState(!0),[f,m]=D.useState(!0),T=()=>{c?(h(!1),m(!0)):h(!0)},S=()=>{f?(m(!1),h(!0)):m(!0)},P=E=>{var A;const g=(A=Yi.find(C=>C.id===E))==null?void 0:A.name;g&&o(C=>C.includes(g)?C.filter(x=>x!==g):[...C,g])},R=E=>{u(g=>g.includes(E)?g.filter(A=>A!==E):[...g,E])},v=()=>{o(Yi.map(E=>E.name))},y=()=>{u(i.map(E=>E.name))},I=()=>{e({selectedNeighborhoods:s,selectedServiceTypes:a})},b=()=>{o(Yi.map(g=>g.name)),u(i.map(g=>g.name));const E={selectedNeighborhoods:Yi.map(g=>g.name),selectedServiceTypes:i.map(g=>g.name)};e(E)};return _.jsxs("div",{className:"header-panel filter-panel",children:[_.jsxs("div",{className:"panel-header",children:[_.jsx("h3",{children:"Filter Options"}),_.jsx("button",{className:"close-btn",onClick:t,children:_.jsx(Ae,{icon:bi})})]}),_.jsxs("div",{className:"panel-content",children:[_.jsxs("div",{className:"filter-section",children:[_.jsxs("div",{className:"filter-section-header",children:[_.jsx("h4",{children:"Neighborhoods"}),_.jsxs("span",{className:"filter-count",children:["(",s.length,")"]}),_.jsx("button",{className:"collapse-btn",onClick:T,children:_.jsx(Ae,{icon:c?$u:kv})})]}),_.jsxs("div",{className:"filter-section-controls",children:[_.jsx("button",{className:"select-all-btn",onClick:v,children:"Select All"}),_.jsx("button",{className:"unselect-all-btn",onClick:()=>o([]),children:"Unselect All"})]}),!c&&_.jsx("div",{className:"filter-options neighborhoods-scroll",children:Yi.map(E=>_.jsxs("label",{children:[_.jsx("input",{type:"checkbox",checked:s.includes(E.name),onChange:()=>P(E.id)}),E.name]},E.id))})]}),_.jsxs("div",{className:"filter-section",children:[_.jsxs("div",{className:"filter-section-header",children:[_.jsx("h4",{children:"Service Types"}),_.jsxs("span",{className:"filter-count",children:["(",a.length,")"]}),_.jsx("button",{className:"collapse-btn",onClick:S,children:_.jsx(Ae,{icon:f?$u:kv})})]}),_.jsxs("div",{className:"filter-section-controls",children:[_.jsx("button",{className:"select-all-btn",onClick:y,children:"Select All"}),_.jsx("button",{className:"unselect-all-btn",onClick:()=>u([]),children:"Unselect All"})]}),!f&&_.jsx("div",{className:"service-types-scroll",children:_.jsx("div",{className:"service-type-buttons",children:i.map(E=>{const g=a.includes(E.name);return _.jsx("button",{className:`service-type-btn ${g?"selected":""}`,style:{backgroundColor:g?E.color:"white",borderColor:E.color,color:g?"white":"black"},onClick:()=>R(E.name),title:E.name,children:_.jsx(Ae,{icon:E.icon,className:"service-icon"})},E.id)})})})]}),_.jsxs("div",{className:"filter-actions",children:[_.jsx("button",{className:"apply-filters-btn",onClick:I,children:"Apply Filters"}),_.jsx("button",{className:"clear-filters-btn",onClick:b,children:"Clear Filters"})]})]})]})},i3=({onClose:t,onLoginSuccess:e})=>{const{user:n,userData:r,isAnonymous:i,signOut:s}=Za(),[o,a]=D.useState(""),[u,c]=D.useState(""),[h,f]=D.useState(!1),[m,T]=D.useState("Subscriber"),[S,P]=D.useState(""),[R,v]=D.useState(!1),[y,I]=D.useState(null),b=lm(),L=Object.keys(Wc),V=async x=>{try{const N=await CS(pu(mu,"users",x));return N.exists()&&N.data().role||"Subscriber"}catch(N){return console.error("[LoginPanel] Error fetching user role:",N),"Subscriber"}},E=async(x,N,k,X)=>{try{await z_(pu(mu,"users",x),{email:N,role:k,contractorType:k==="Contractor"?X:void 0,createdAt:new Date,lastLogin:new Date})}catch(ve){throw console.error("Error saving user data:",ve),ve}},g=async x=>{x.preventDefault(),console.log("[LoginPanel] Login handler called"),v(!0),I("");try{const k=(await mb(b,o,u)).user;await V(k.uid),await z_(pu(mu,"users",k.uid),{lastLogin:new Date},{merge:!0}),e&&e()}catch(N){console.error("[LoginPanel] Login error:",N),I(N.message||"Login failed")}finally{v(!1)}},A=async x=>{x.preventDefault(),console.log("[LoginPanel] Register handler called"),v(!0),I("");try{const k=(await pb(b,o,u)).user;console.log("[LoginPanel] Firebase user after register:",k),await E(k.uid,k.email,m,m==="Contractor"?S:void 0),e&&e()}catch(N){console.error("[LoginPanel] Register error:",N),I(N.message||"Registration failed")}finally{v(!1)}},C=async()=>{await s(),t&&t()};if(n){const x=(r==null?void 0:r.email)||n.email,N=(r==null?void 0:r.role)||"User";return _.jsxs("div",{className:"header-panel login-panel",children:[_.jsxs("div",{className:"panel-header",children:[_.jsx("h3",{children:"User Profile"}),_.jsx("button",{className:"close-btn",onClick:t,children:_.jsx(Ae,{icon:bi})})]}),_.jsx("div",{className:"panel-content",children:_.jsxs("div",{className:"user-info-display",children:[_.jsxs("p",{children:[_.jsx("strong",{children:"Email:"})," ",x]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Role:"})," ",N]}),n&&(r==null?void 0:r.role)==="Contractor"&&r.contractorType&&_.jsxs("p",{children:[_.jsx("strong",{children:"Contractor Type:"})," ",r.contractorType]}),_.jsx("button",{onClick:C,className:"logout-btn",children:"Sign Out"})]})})]})}return _.jsxs("div",{className:"header-panel login-panel",children:[_.jsxs("div",{className:"panel-header",children:[_.jsx("h3",{children:h?"User Registration":"User Login"}),_.jsx("button",{className:"close-btn",onClick:t,children:_.jsx(Ae,{icon:bi})})]}),_.jsx("div",{className:"panel-content",children:_.jsxs("form",{className:"login-form",onSubmit:h?A:g,children:[y&&_.jsx("div",{className:"error-message",children:y}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{htmlFor:"email",children:"Email"}),_.jsx("input",{type:"email",id:"email",value:o,onChange:x=>a(x.target.value),placeholder:"Enter your email",className:"form-input",required:!0})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{htmlFor:"password",children:"Password"}),_.jsx("input",{type:"password",id:"password",value:u,onChange:x=>c(x.target.value),placeholder:"Enter your password",className:"form-input",required:!0})]}),h&&_.jsxs("div",{className:"form-group",children:[_.jsx("label",{htmlFor:"role",children:"User Role"}),_.jsxs("select",{id:"role",value:m,onChange:x=>T(x.target.value),className:"form-input",children:[_.jsx("option",{value:"Subscriber",children:"Subscriber"}),_.jsx("option",{value:"Contractor",children:"Contractor"}),_.jsx("option",{value:"Admin",children:"Admin"})]})]}),h&&m==="Contractor"&&_.jsxs("div",{className:"form-group",children:[_.jsx("label",{htmlFor:"contractorType",children:"Contractor Type"}),_.jsxs("select",{id:"contractorType",value:S,onChange:x=>P(x.target.value),className:"form-input",required:!0,children:[_.jsx("option",{value:"",children:"Select Contractor Type"}),L.map(x=>_.jsx("option",{value:x,children:x},x))]})]}),_.jsxs("div",{className:"form-actions",children:[_.jsx("button",{type:"submit",className:"login-btn",disabled:R,children:R?"Processing...":h?"Register":"Login"}),_.jsx("button",{type:"button",className:"register-btn",onClick:()=>{f(!h),I("")},children:h?"Back to Login":"Register"})]}),!h&&_.jsx("div",{className:"form-links",children:_.jsx("a",{href:"#",className:"forgot-password",children:"Forgot Password?"})})]})})]})},s3=["NeighborhoodBoundaries","addpoints","Sponsors","PortlandStreets"],na={},to=async t=>{try{if(na[t])return console.log(`Using cached data for ${t}`),na[t];console.log(`Fetching ${t}...`);const e=[`${t}.geojson`];let n=null,r=null;for(const o of e)try{const a=HS(qS,o);n=await QD(a),console.log(`Found ${t} at path: ${o}`);break}catch(a){console.log(`File not found at path: ${o}`),r=a;continue}if(!n)throw new Error(`Could not find ${t}.geojson in any expected location. Last error: ${r==null?void 0:r.message}`);const i=await fetch(n);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();return console.log(`Successfully loaded ${t}:`,s),na[t]=s,s}catch(e){throw console.error(`Error fetching ${t}.geojson:`,e),e}},$f=async()=>{const t={},e={},n=s3.map(async r=>{try{const i=await to(r);t[r]=i}catch(i){console.warn(`Failed to load ${r}:`,i),e[r]=i instanceof Error?i.message:"Unknown error"}});return await Promise.allSettled(n),console.log("Loaded layers:",Object.keys(t)),Object.keys(e).length>0&&console.warn("Failed to load layers:",e),t},Hc=async(t,e)=>{try{console.log(`Saving ${t}...`);const r=lm().currentUser;r?console.log("[saveGeoJSONLayer] Authenticated user:",{uid:r.uid,email:r.email,displayName:r.displayName,isAnonymous:r.isAnonymous,providerData:r.providerData}):console.log("[saveGeoJSONLayer] No authenticated user");const i=JSON.stringify(e,null,2),s=`${t}.geojson`,o=HS(qS,s);console.log("[saveGeoJSONLayer] uploadString request:",{storagePath:s,geoJsonString:i,contentType:"application/json",user:r?{uid:r.uid,email:r.email,displayName:r.displayName,isAnonymous:r.isAnonymous}:null}),await KD(o,i,"raw",{contentType:"application/json"}),na[t]=e,console.log(`Successfully saved ${t} to ${s}`)}catch(n){throw console.error(`Error saving ${t}:`,n),n}},KS=async(t,e)=>{try{const n=await to(t);e.id||(e.id=`feature_${Date.now()}_${Math.random().toString(36).substr(2,9)}`);const r={...n,features:[...n.features,e]};return await Hc(t,r),r}catch(n){throw console.error(`Error adding feature to ${t}:`,n),n}},qm=async(t,e)=>{try{const n=await to(t),r=e.properties.FID;if(!r)throw new Error("Feature must have an id to be updated");const i=n.features.map(o=>o.id===r?e:o),s={...n,features:i};return await Hc(t,s),s}catch(n){throw console.error(`Error updating feature in ${t}:`,n),n}},QS=async(t,e)=>{try{const n=await to(t),r=n.features.filter(s=>s.id!==e),i={...n,features:r};return await Hc(t,i),i}catch(n){throw console.error(`Error deleting feature from ${t}:`,n),n}},o3=t=>{delete na[t]},a3=async t=>{try{const e=await to(t),n=`${t}_backup_${new Date().toISOString().replace(/[:.]/g,"-")}`;await Hc(n,e),console.log(`Created backup: ${n}`)}catch(e){throw console.error(`Error creating backup for ${t}:`,e),e}},l3=({selectedServiceType:t,onServiceTypeChange:e})=>{const[n,r]=D.useState(!1),i=(a,u)=>{const c=parseInt(a.slice(1,3),16),h=parseInt(a.slice(3,5),16),f=parseInt(a.slice(5,7),16);return`rgba(${c}, ${h}, ${f}, ${u})`},s=Ms.find(a=>a.name===t),o=a=>{e(a.name),r(!1)};return _.jsxs("div",{className:"service-type-dropdown",children:[_.jsxs("div",{className:"dropdown-label-row",style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:4},children:[_.jsx("label",{className:"field-label",style:{marginBottom:0},children:"Service Type *"}),_.jsx(Ae,{icon:$u,className:`dropdown-arrow ${n?"rotated":""}`,style:{cursor:"pointer"},onClick:()=>r(!n)})]}),_.jsxs("div",{className:"dropdown-container",children:[_.jsx("div",{className:`dropdown-trigger ${n?"open":""}`,onClick:()=>r(!n),children:s?_.jsx("div",{className:"selected-service",children:_.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(s.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[_.jsx(Ae,{icon:s.icon,style:{color:s.color},className:"service-icon"}),_.jsx("span",{className:"service-name",style:{color:s.color,fontWeight:600},children:s.name})]})}):_.jsx("span",{className:"placeholder",children:"Select a service type"})}),n&&_.jsx("div",{className:"dropdown-menu",children:Ms.map(a=>_.jsx("div",{className:`dropdown-option ${(s==null?void 0:s.id)===a.id?"selected":""}`,onClick:()=>o(a),style:{backgroundColor:(s==null?void 0:s.id)===a.id?i(a.color,.1):"transparent",borderRadius:"6px",marginBottom:"4px",cursor:"pointer",padding:"2px 0"},children:_.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(a.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[_.jsx(Ae,{icon:a.icon,style:{color:a.color},className:"service-icon"}),_.jsx("span",{className:"service-name",style:{color:a.color,fontWeight:600},children:a.name})]})},a.id))})]})]})},u3=({onClose:t,onAddPoint:e,coordinates:n,onCoordinatesChange:r,setIsAddingPoint:i,layerName:s="addpoints"})=>{const[o,a]=D.useState(""),[u,c]=D.useState(""),[h,f]=D.useState((n==null?void 0:n.neighborhood)||""),[m,T]=D.useState("Active"),[S,P]=D.useState(""),[R,v]=D.useState(""),[y,I]=D.useState(""),[b,L]=D.useState(""),[V,E]=D.useState(""),[g,A]=D.useState(!1),[C,x]=D.useState(null);D.useEffect(()=>{n&&(L(n.lat.toString()),E(n.lng.toString()),f(n.neighborhood||""),c(n.crossStreet||""))},[n]),D.useEffect(()=>{const X=ve=>{!(ve.target instanceof Element)||ve.target.closest(".dropdown-container")};return document.addEventListener("mousedown",X),()=>{document.removeEventListener("mousedown",X)}},[]);const N=async X=>{X.preventDefault(),A(!0),x(null);try{const ve=Date.now(),Et={type:"Feature",id:ve,geometry:{type:"Point",coordinates:[parseFloat(V),parseFloat(b)]},properties:{FID:ve,"Service Ty":o,"Cross Stre":u,neighbhood:h,Status:m,"Full Addre":S,"Referral S":R,Estimate:y,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}};console.log(`Adding point to layer: ${s}`),await KS(s,Et),e(Et),console.log("Point added successfully!"),t()}catch(ve){console.error("Error adding point:",ve),x(ve instanceof Error?ve.message:"Failed to add point")}finally{A(!1)}},k=()=>{L(""),E(""),r&&r(null),i&&i(!0)};return _.jsxs("div",{className:"header-panel add-point-panel",children:[_.jsxs("div",{className:"panel-header",children:[_.jsx("h3",{children:"Add New Service Point"}),_.jsx("button",{className:"close-btn",onClick:t,disabled:g,children:_.jsx(Ae,{icon:bi})})]}),_.jsxs("div",{className:"panel-content",children:[C&&_.jsx("div",{className:"error-message",style:{color:"#d32f2f",backgroundColor:"#ffebee",padding:"8px 12px",borderRadius:"4px",marginBottom:"16px",fontSize:"14px"},children:C}),_.jsxs("form",{className:"add-point-form",onSubmit:N,children:[_.jsxs("div",{className:"form-group coordinates-group",children:[_.jsxs("div",{className:"coords-display",children:[_.jsxs("div",{children:[_.jsx("label",{children:"Latitude"}),_.jsx("input",{type:"text",value:b,onChange:X=>L(X.target.value),required:!0,readOnly:!0})]}),_.jsxs("div",{children:[_.jsx("label",{children:"Longitude"}),_.jsx("input",{type:"text",value:V,onChange:X=>E(X.target.value),required:!0,readOnly:!0})]})]}),_.jsx("button",{type:"button",onClick:k,className:"reset-coords-btn",disabled:g,children:"Reset Location"})]}),_.jsx(l3,{selectedServiceType:o,onServiceTypeChange:a}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Cross Street"}),_.jsx("input",{type:"text",value:u,onChange:X=>c(X.target.value),required:!0,disabled:g})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Neighborhood"}),_.jsx("input",{type:"text",value:h,onChange:X=>f(X.target.value),required:!0,disabled:g})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Status"}),_.jsxs("select",{value:m,onChange:X=>T(X.target.value),disabled:g,children:[_.jsx("option",{value:"Active",children:"Active"}),_.jsx("option",{value:"Pending",children:"Pending"}),_.jsx("option",{value:"Complete",children:"Complete"})]})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Full Address"}),_.jsx("input",{type:"text",value:S,onChange:X=>P(X.target.value),disabled:g})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Referral Source"}),_.jsx("input",{type:"text",value:R,onChange:X=>v(X.target.value),disabled:g})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Estimate"}),_.jsx("input",{type:"text",value:y,onChange:X=>I(X.target.value),disabled:g})]}),_.jsx("button",{type:"submit",className:"add-point-btn",disabled:g||!o,children:g?"Adding Point...":"Add Point"})]})]})]})},c3=({onLocationSelect:t,filters:e,onFiltersChange:n,filterPanelOpen:r,setFilterPanelOpen:i,isAddingPoint:s,setIsAddingPoint:o,addPointCoordinates:a,setAddPointCoordinates:u,onAddPoint:c})=>{const[h,f]=D.useState(null),{user:m,userData:T,isAnonymous:S,signOut:P}=Za();D.useEffect(()=>{a&&f("add-point")},[a]);const R=b=>{if(b==="filter")i(!r),f(null);else if(b==="add-point"){const L=!s;o(L),f(L?"add-point":null),i(!1)}else f(h===b?null:b),i(!1),o(!1)},v=()=>{f(null),i(!1),o(!1),u(null)},y=async b=>{c?await c(b):console.log("New point to add:",b)},I=b=>{t&&t(b),v()};return _.jsxs(_.Fragment,{children:[_.jsxs("header",{className:"app-header",children:[_.jsx("div",{className:"logo-container",children:_.jsx("img",{src:JA,alt:"Neighborhood Values Logo",className:"app-logo"})}),_.jsx("div",{className:"logo-container",children:_.jsx("img",{src:ZA,alt:"Neighborhood Values Logo Text",className:"app-logo"})}),_.jsxs("div",{className:"button-box",children:[_.jsx("button",{className:h==="search"?"active":"",onClick:()=>R("search"),children:_.jsx(Ae,{icon:Lk})}),_.jsx("button",{className:r?"active":"",onClick:()=>R("filter"),children:_.jsx(Ae,{icon:Sk})}),_.jsx("button",{className:h==="login"?"active":"",onClick:()=>R("login"),children:_.jsx(Ae,{icon:wk})}),(T==null?void 0:T.role)==="Admin"&&_.jsx("button",{className:h==="add-point"||s?"active":"",onClick:()=>R("add-point"),children:_.jsx(Ae,{icon:Dk})})]})]}),h==="search"&&_.jsx(zk,{onClose:v,onLocationSelect:I}),r&&_.jsx(r3,{onClose:()=>i(!1),onFiltersChange:n,initialFilters:e}),h==="login"&&_.jsx(i3,{onClose:v}),h==="add-point"&&_.jsx(u3,{onClose:v,onAddPoint:y,coordinates:a,onCoordinatesChange:u,setIsAddingPoint:o})]})},d3="modulepreload",h3=function(t){return"/neighborhood-value-plus/"+t},G_={},f3=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=h3(u),u in G_)return;G_[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":d3,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,T)=>{f.addEventListener("load",m),f.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},p3=D.createContext(null);function m3(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,r=Array.isArray(t)?t[1]:t?t.y:0,i=Array.isArray(e)?e[0]:e?e.x:0,s=Array.isArray(e)?e[1]:e?e.y:0;return n===i&&r===s}function jt(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n)if(!e.hasOwnProperty(i)||!jt(t[i],e[i]))return!1;return!0}return!1}function g3(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}function K_(t,e){if(!t.getProjection)return;const n=t.getProjection(),r=e.getProjection();jt(n,r)||e.setProjection(n)}function Q_(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function Y_(t,e){const n=e.viewState||e;let r=!1;if("longitude"in n&&"latitude"in n){const i=t.center;t.center=new i.constructor(n.longitude,n.latitude),r=r||i!==t.center}if("zoom"in n){const i=t.zoom;t.zoom=n.zoom,r=r||i!==t.zoom}if("bearing"in n){const i=t.bearing;t.bearing=n.bearing,r=r||i!==t.bearing}if("pitch"in n){const i=t.pitch;t.pitch=n.pitch,r=r||i!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(r=!0,t.padding=n.padding),r}const y3=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function X_(t){if(!t)return null;if(typeof t=="string"||("toJS"in t&&(t=t.toJS()),!t.layers))return t;const e={};for(const r of t.layers)e[r.id]=r;const n=t.layers.map(r=>{let i=null;"interactive"in r&&(i=Object.assign({},r),delete i.interactive);const s=e[r.ref];if(s){i=i||Object.assign({},r),delete i.ref;for(const o of y3)o in s&&(i[o]=s[o])}return i||r});return{...t,layers:n}}var J_={};const Z_={version:8,sources:{},layers:[]},e0={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},eh={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},t0={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},v3=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],_3=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class Ws{constructor(e,n,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=i=>{const s=this.props[t0[i.type]];s?s(i):i.type==="error"&&console.error(i.error)},this._onPointerEvent=i=>{(i.type==="mousemove"||i.type==="mouseout")&&this._updateHover(i);const s=this.props[e0[i.type]];s&&(this.props.interactiveLayerIds&&i.type!=="mouseover"&&i.type!=="mouseout"&&(i.features=this._hoveredFeatures||this._queryRenderedFeatures(i.point)),s(i),delete i.features)},this._onCameraEvent=i=>{if(!this._internalUpdate){const s=this.props[eh[i.type]];s&&s(i)}i.type in this._deferredEvents&&(this._deferredEvents[i.type]=!1)},this._MapClass=e,this.props=n,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const n=this.props;this.props=e;const r=this._updateSettings(e,n);r&&this._createShadowTransform(this._map);const i=this._updateSize(e),s=this._updateViewState(e,!0);this._updateStyle(e,n),this._updateStyleComponents(e,n),this._updateHandlers(e,n),(r||i||s&&!this._map.isMoving())&&this.redraw()}static reuse(e,n){const r=Ws.savedMaps.pop();if(!r)return null;const i=r.map,s=i.getContainer();for(n.className=s.className;s.childNodes.length>0;)n.appendChild(s.childNodes[0]);i._container=n;const o=i._resizeObserver;o&&(o.disconnect(),o.observe(n)),r.setProps({...e,styleDiffing:!1}),i.resize();const{initialViewState:a}=e;return a&&(a.bounds?i.fitBounds(a.bounds,{...a.fitBoundsOptions,duration:0}):r._updateViewState(a,!1)),i.isStyleLoaded()?i.fire("load"):i.once("styledata",()=>i.fire("load")),i._update(),r}_initialize(e){const{props:n}=this,{mapStyle:r=Z_}=n,i={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||w3()||null,container:e,style:X_(r)},s=i.initialViewState||i.viewState||i;if(Object.assign(i,{center:[s.longitude||0,s.latitude||0],zoom:s.zoom||0,pitch:s.pitch||0,bearing:s.bearing||0}),n.gl){const h=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=h,n.gl)}const o=new this._MapClass(i);s.padding&&o.setPadding(s.padding),n.cursor&&(o.getCanvas().style.cursor=n.cursor),this._createShadowTransform(o);const a=o._render;o._render=h=>{this._inRender=!0,a.call(o,h),this._inRender=!1};const u=o._renderTaskQueue.run;o._renderTaskQueue.run=h=>{u.call(o._renderTaskQueue,h),this._onBeforeRepaint()},o.on("render",()=>this._onAfterRepaint());const c=o.fire;o.fire=this._fireEvent.bind(this,c),o.on("resize",()=>{this._renderTransform.resize(o.transform.width,o.transform.height)}),o.on("styledata",()=>{this._updateStyleComponents(this.props,{}),K_(o.transform,this._renderTransform)}),o.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const h in e0)o.on(h,this._onPointerEvent);for(const h in eh)o.on(h,this._onCameraEvent);for(const h in t0)o.on(h,this._onEvent);this._map=o}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),Ws.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const n=g3(e.transform);e.painter.transform=n,this._renderTransform=n}_updateSize(e){const{viewState:n}=e;if(n){const r=this._map;if(n.width!==r.transform.width||n.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(e,n){if(this._internalUpdate)return!1;const r=this._map,i=this._renderTransform,{zoom:s,pitch:o,bearing:a}=i,u=r.isMoving();u&&(i.cameraElevationReference="sea");const c=Y_(i,{...Q_(r.transform),...e});if(u&&(i.cameraElevationReference="ground"),c&&n){const h=this._deferredEvents;h.move=!0,h.zoom||(h.zoom=s!==i.zoom),h.rotate||(h.rotate=a!==i.bearing),h.pitch||(h.pitch=o!==i.pitch)}return u||Y_(r.transform,e),c}_updateSettings(e,n){const r=this._map;let i=!1;for(const s of v3)if(s in e&&!jt(e[s],n[s])){i=!0;const o=r[`set${s[0].toUpperCase()}${s.slice(1)}`];o==null||o.call(r,e[s])}return i}_updateStyle(e,n){if(e.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==n.mapStyle){const{mapStyle:r=Z_,styleDiffing:i=!0}=e,s={diff:i};return"localIdeographFontFamily"in e&&(s.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(X_(r),s),!0}return!1}_updateStyleComponents(e,n){const r=this._map;let i=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!jt(e.light,n.light)&&(i=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!jt(e.fog,n.fog)&&(i=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!jt(e.terrain,n.terrain)&&(!e.terrain||r.getSource(e.terrain.source))&&(i=!0,r.setTerrain(e.terrain))),i}_updateHandlers(e,n){var r,i;const s=this._map;let o=!1;for(const a of _3){const u=(r=e[a])!==null&&r!==void 0?r:!0,c=(i=n[a])!==null&&i!==void 0?i:!0;jt(u,c)||(o=!0,u?s[a].enable(u):s[a].disable())}return o}_queryRenderedFeatures(e){const n=this._map,r=n.transform,{interactiveLayerIds:i=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(e,{layers:i.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=r}}_updateHover(e){var n;const{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){const s=e.type,o=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,a=this._queryRenderedFeatures(e.point),u=a.length>0;!u&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,u&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=s}else this._hoveredFeatures=null}_fireEvent(e,n,r){const i=this._map,s=i.transform,o=typeof n=="string"?n:n.type;return o==="move"&&this._updateViewState(this.props,!1),o in eh&&(typeof n=="object"&&(n.viewState=Q_(s)),this._map.isMoving())?(i.transform=this._renderTransform,e.call(i,n,r),i.transform=s,i):(e.call(i,n,r),i)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const r in this._deferredEvents)this._deferredEvents[r]&&e.fire(r);this._internalUpdate=!1;const n=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{K_(this._renderTransform,n),e.transform=n}}}Ws.savedMaps=[];function w3(){let t=null;if(typeof location<"u"){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||J_.MapboxAccessToken}catch{}try{t=t||J_.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return t}const E3=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function T3(t){if(!t)return null;const e=t.map,n={getMap:()=>e,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:r=>{const i=e.transform;e.transform=t.transform;const s=e.project(r);return e.transform=i,s},unproject:r=>{const i=e.transform;e.transform=t.transform;const s=e.unproject(r);return e.transform=i,s},queryTerrainElevation:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryTerrainElevation(r,i);return e.transform=s,o},queryRenderedFeatures:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryRenderedFeatures(r,i);return e.transform=s,o}};for(const r of S3(e))!(r in n)&&!E3.includes(r)&&(n[r]=e[r].bind(e));return n}function S3(t){const e=new Set;let n=t;for(;n;){for(const r of Object.getOwnPropertyNames(n))r[0]!=="_"&&typeof t[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&e.add(r);n=Object.getPrototypeOf(n)}return Array.from(e)}const I3=typeof document<"u"?D.useLayoutEffect:D.useEffect,A3=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function C3(t,e){for(const r of A3)r in e&&(t[r]=e[r]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=e;n&&t.getRTLTextPluginStatus&&t.getRTLTextPluginStatus()==="unavailable"&&t.setRTLTextPlugin(n,r=>{r&&console.error(r)},!0)}const no=D.createContext(null);function P3(t,e,n){const r=D.useContext(p3),[i,s]=D.useState(null),o=D.useRef(),{current:a}=D.useRef({mapLib:null,map:null});D.useEffect(()=>{const h=t.mapLib;let f=!0,m;return Promise.resolve(h||n).then(T=>{if(!f)return;if(!T)throw new Error("Invalid mapLib");const S="Map"in T?T:T.default;if(!S.Map)throw new Error("Invalid mapLib");if(C3(S,t),!S.supported||S.supported(t))t.reuseMaps&&(m=Ws.reuse(t,o.current)),m||(m=new Ws(S.Map,t,o.current)),a.map=T3(m),a.mapLib=S,s(m),r==null||r.onMapMount(a.map,t.id);else throw new Error("Map is not supported by this browser")}).catch(T=>{const{onError:S}=t;S?S({type:"error",target:null,originalEvent:null,error:T}):console.error(T)}),()=>{f=!1,m&&(r==null||r.onMapUnmount(t.id),t.reuseMaps?m.recycle():m.destroy())}},[]),I3(()=>{i&&i.setProps(t)}),D.useImperativeHandle(e,()=>a.map,[i]);const u=D.useMemo(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]),c={height:"100%"};return D.createElement("div",{id:t.id,ref:o,style:u},i&&D.createElement(no.Provider,{value:a},D.createElement("div",{"mapboxgl-children":"",style:c},t.children)))}const k3=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function $i(t,e){if(!t||!e)return;const n=t.style;for(const r in e){const i=e[r];Number.isFinite(i)&&!k3.test(r)?n[r]=`${i}px`:n[r]=i}}function R3(t,e){const{map:n,mapLib:r}=D.useContext(no),i=D.useRef({props:t});i.current.props=t;const s=D.useMemo(()=>{let P=!1;D.Children.forEach(t.children,y=>{y&&(P=!0)});const R={...t,element:P?document.createElement("div"):null},v=new r.Marker(R);return v.setLngLat([t.longitude,t.latitude]),v.getElement().addEventListener("click",y=>{var I,b;(b=(I=i.current.props).onClick)===null||b===void 0||b.call(I,{type:"click",target:v,originalEvent:y})}),v.on("dragstart",y=>{var I,b;const L=y;L.lngLat=s.getLngLat(),(b=(I=i.current.props).onDragStart)===null||b===void 0||b.call(I,L)}),v.on("drag",y=>{var I,b;const L=y;L.lngLat=s.getLngLat(),(b=(I=i.current.props).onDrag)===null||b===void 0||b.call(I,L)}),v.on("dragend",y=>{var I,b;const L=y;L.lngLat=s.getLngLat(),(b=(I=i.current.props).onDragEnd)===null||b===void 0||b.call(I,L)}),v},[]);D.useEffect(()=>(s.addTo(n.getMap()),()=>{s.remove()}),[]);const{longitude:o,latitude:a,offset:u,style:c,draggable:h=!1,popup:f=null,rotation:m=0,rotationAlignment:T="auto",pitchAlignment:S="auto"}=t;return D.useEffect(()=>{$i(s.getElement(),c)},[c]),D.useImperativeHandle(e,()=>s,[]),(s.getLngLat().lng!==o||s.getLngLat().lat!==a)&&s.setLngLat([o,a]),u&&!m3(s.getOffset(),u)&&s.setOffset(u),s.isDraggable()!==h&&s.setDraggable(h),s.getRotation()!==m&&s.setRotation(m),s.getRotationAlignment()!==T&&s.setRotationAlignment(T),s.getPitchAlignment()!==S&&s.setPitchAlignment(S),s.getPopup()!==f&&s.setPopup(f),Fp.createPortal(t.children,s.getElement())}const x3=D.memo(D.forwardRef(R3));function n0(t){return new Set(t?t.trim().split(/\s+/):[])}function b3(t,e){const{map:n,mapLib:r}=D.useContext(no),i=D.useMemo(()=>document.createElement("div"),[]),s=D.useRef({props:t});s.current.props=t;const o=D.useMemo(()=>{const a={...t},u=new r.Popup(a);return u.setLngLat([t.longitude,t.latitude]),u.once("open",c=>{var h,f;(f=(h=s.current.props).onOpen)===null||f===void 0||f.call(h,c)}),u},[]);if(D.useEffect(()=>{const a=u=>{var c,h;(h=(c=s.current.props).onClose)===null||h===void 0||h.call(c,u)};return o.on("close",a),o.setDOMContent(i).addTo(n.getMap()),()=>{o.off("close",a),o.isOpen()&&o.remove()}},[]),D.useEffect(()=>{$i(o.getElement(),t.style)},[t.style]),D.useImperativeHandle(e,()=>o,[]),o.isOpen()&&((o.getLngLat().lng!==t.longitude||o.getLngLat().lat!==t.latitude)&&o.setLngLat([t.longitude,t.latitude]),t.offset&&!jt(o.options.offset,t.offset)&&o.setOffset(t.offset),(o.options.anchor!==t.anchor||o.options.maxWidth!==t.maxWidth)&&(o.options.anchor=t.anchor,o.setMaxWidth(t.maxWidth)),o.options.className!==t.className)){const a=n0(o.options.className),u=n0(t.className);for(const c of a)u.has(c)||o.removeClassName(c);for(const c of u)a.has(c)||o.addClassName(c);o.options.className=t.className}return Fp.createPortal(t.children,i)}D.memo(D.forwardRef(b3));function el(t,e,n,r){const i=D.useContext(no),s=D.useMemo(()=>t(i),[]);return D.useEffect(()=>{const o=e,a=null,u=typeof e=="function"?e:null,{map:c}=i;return c.hasControl(s)||(c.addControl(s,o==null?void 0:o.position),a&&a(i)),()=>{u&&u(i),c.hasControl(s)&&c.removeControl(s)}},[]),s}function N3(t){const e=el(({mapLib:n})=>new n.AttributionControl(t),{position:t.position});return D.useEffect(()=>{$i(e._container,t.style)},[t.style]),null}D.memo(N3);function O3(t){const e=el(({mapLib:n})=>new n.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)}),{position:t.position});return D.useEffect(()=>{$i(e._controlContainer,t.style)},[t.style]),null}D.memo(O3);function L3(t,e){const n=D.useRef({props:t}),r=el(({mapLib:i})=>{const s=new i.GeolocateControl(t),o=s._setupUI;return s._setupUI=a=>{s._container.hasChildNodes()||o(a)},s.on("geolocate",a=>{var u,c;(c=(u=n.current.props).onGeolocate)===null||c===void 0||c.call(u,a)}),s.on("error",a=>{var u,c;(c=(u=n.current.props).onError)===null||c===void 0||c.call(u,a)}),s.on("outofmaxbounds",a=>{var u,c;(c=(u=n.current.props).onOutOfMaxBounds)===null||c===void 0||c.call(u,a)}),s.on("trackuserlocationstart",a=>{var u,c;(c=(u=n.current.props).onTrackUserLocationStart)===null||c===void 0||c.call(u,a)}),s.on("trackuserlocationend",a=>{var u,c;(c=(u=n.current.props).onTrackUserLocationEnd)===null||c===void 0||c.call(u,a)}),s},{position:t.position});return n.current.props=t,D.useImperativeHandle(e,()=>r,[]),D.useEffect(()=>{$i(r._container,t.style)},[t.style]),null}D.memo(D.forwardRef(L3));function D3(t){const e=el(({mapLib:n})=>new n.NavigationControl(t),{position:t.position});return D.useEffect(()=>{$i(e._container,t.style)},[t.style]),null}const M3=D.memo(D3);function V3(t){const e=el(({mapLib:s})=>new s.ScaleControl(t),{position:t.position}),n=D.useRef(t),r=n.current;n.current=t;const{style:i}=t;return t.maxWidth!==void 0&&t.maxWidth!==r.maxWidth&&(e.options.maxWidth=t.maxWidth),t.unit!==void 0&&t.unit!==r.unit&&e.setUnit(t.unit),D.useEffect(()=>{$i(e._container,i)},[i]),null}D.memo(V3);function ac(t,e){if(!t)throw new Error(e)}function F3(t,e,n,r){if(ac(n.id===r.id,"layer id changed"),ac(n.type===r.type,"layer type changed"),n.type==="custom"||r.type==="custom")return;const{layout:i={},paint:s={},filter:o,minzoom:a,maxzoom:u,beforeId:c}=n;if(c!==r.beforeId&&t.moveLayer(e,c),i!==r.layout){const h=r.layout||{};for(const f in i)jt(i[f],h[f])||t.setLayoutProperty(e,f,i[f]);for(const f in h)i.hasOwnProperty(f)||t.setLayoutProperty(e,f,void 0)}if(s!==r.paint){const h=r.paint||{};for(const f in s)jt(s[f],h[f])||t.setPaintProperty(e,f,s[f]);for(const f in h)s.hasOwnProperty(f)||t.setPaintProperty(e,f,void 0)}jt(o,r.filter)||t.setFilter(e,o),(a!==r.minzoom||u!==r.maxzoom)&&t.setLayerZoomRange(e,a,u)}function j3(t,e,n){if(t.style&&t.style._loaded&&(!("source"in n)||t.getSource(n.source))){const r={...n,id:e};delete r.beforeId,t.addLayer(r,n.beforeId)}}let U3=0;function z3(t){const e=D.useContext(no).map.getMap(),n=D.useRef(t),[,r]=D.useState(0),i=D.useMemo(()=>t.id||`jsx-layer-${U3++}`,[]);if(D.useEffect(()=>{if(e){const o=()=>r(a=>a+1);return e.on("styledata",o),o(),()=>{e.off("styledata",o),e.style&&e.style._loaded&&e.getLayer(i)&&e.removeLayer(i)}}},[e]),e&&e.style&&e.getLayer(i))try{F3(e,i,t,n.current)}catch(o){console.warn(o)}else j3(e,i,t);return n.current=t,null}let B3=0;function $3(t,e,n){if(t.style&&t.style._loaded){const r={...n};return delete r.id,delete r.children,t.addSource(e,r),t.getSource(e)}return null}function W3(t,e,n){ac(e.id===n.id,"source id changed"),ac(e.type===n.type,"source type changed");let r="",i=0;for(const o in e)o!=="children"&&o!=="id"&&!jt(n[o],e[o])&&(r=o,i++);if(!i)return;const s=e.type;if(s==="geojson")t.setData(e.data);else if(s==="image")t.updateImage({url:e.url,coordinates:e.coordinates});else if("setCoordinates"in t&&i===1&&r==="coordinates")t.setCoordinates(e.coordinates);else if("setUrl"in t)switch(r){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}function H3(t){const e=D.useContext(no).map.getMap(),n=D.useRef(t),[,r]=D.useState(0),i=D.useMemo(()=>t.id||`jsx-source-${B3++}`,[]);D.useEffect(()=>{if(e){const o=()=>setTimeout(()=>r(a=>a+1),0);return e.on("styledata",o),o(),()=>{var a;if(e.off("styledata",o),e.style&&e.style._loaded&&e.getSource(i)){const u=(a=e.getStyle())===null||a===void 0?void 0:a.layers;if(u)for(const c of u)c.source===i&&e.removeLayer(c.id);e.removeSource(i)}}}},[e]);let s=e&&e.style&&e.getSource(i);return s?W3(s,t,n.current):s=$3(e,i,t),n.current=t,s&&D.Children.map(t.children,o=>o&&D.cloneElement(o,{source:i}))||null}const q3=f3(()=>import("./mapbox-gl-CVRuhc8S.js").then(t=>t.m),[]),G3=D.forwardRef(function(e,n){return P3(e,n,q3)}),th=x3,K3=M3,Po=z3,Hl=H3;var bt=63710088e-1,YS={centimeters:bt*100,centimetres:bt*100,degrees:360/(2*Math.PI),feet:bt*3.28084,inches:bt*39.37,kilometers:bt/1e3,kilometres:bt/1e3,meters:bt,metres:bt,miles:bt/1609.344,millimeters:bt*1e3,millimetres:bt*1e3,nauticalmiles:bt/1852,radians:1,yards:bt*1.0936};function Hs(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function _i(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!i0(t[0])||!i0(t[1]))throw new Error("coordinates must contain numbers");return Hs({type:"Point",coordinates:t},e,n)}function qc(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Hs({type:"LineString",coordinates:t},e,n)}function XS(t,e="kilometers"){const n=YS[e];if(!n)throw new Error(e+" units is invalid");return t*n}function Q3(t,e="kilometers"){const n=YS[e];if(!n)throw new Error(e+" units is invalid");return t/n}function r0(t){return t%(2*Math.PI)*180/Math.PI}function gs(t){return t%360*Math.PI/180}function JS(t,e="kilometers",n="kilometers"){if(!(t>=0))throw new Error("length must be a positive number");return XS(Q3(t,e),n)}function i0(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Gn(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Y3(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function s0(t,e,n){if(!t)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!t||t.type!=="Feature"||!t.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.geometry.type)}function X3(t){return t.type==="Feature"?t.geometry:t}function fi(t,e,n={}){var r=Gn(t),i=Gn(e),s=gs(i[1]-r[1]),o=gs(i[0]-r[0]),a=gs(r[1]),u=gs(i[1]),c=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(a)*Math.cos(u);return XS(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),n.units)}function Gm(t,e,n){if(t!==null)for(var r,i,s,o,a,u,c,h=0,f=0,m,T=t.type,S=T==="FeatureCollection",P=T==="Feature",R=S?t.features.length:1,v=0;v<R;v++){c=S?t.features[v].geometry:P?t.geometry:t,m=c?c.type==="GeometryCollection":!1,a=m?c.geometries.length:1;for(var y=0;y<a;y++){var I=0,b=0;if(o=m?c.geometries[y]:c,o!==null){u=o.coordinates;var L=o.type;switch(h=0,L){case null:break;case"Point":if(e(u,f,v,I,b)===!1)return!1;f++,I++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],f,v,I,b)===!1)return!1;f++,L==="MultiPoint"&&I++}L==="LineString"&&I++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],f,v,I,b)===!1)return!1;f++}L==="MultiLineString"&&I++,L==="Polygon"&&b++}L==="Polygon"&&I++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(b=0,i=0;i<u[r].length;i++){for(s=0;s<u[r][i].length-h;s++){if(e(u[r][i][s],f,v,I,b)===!1)return!1;f++}b++}I++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(Gm(o.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function J3(t,e){var n,r,i,s,o,a,u,c,h,f,m=0,T=t.type==="FeatureCollection",S=t.type==="Feature",P=T?t.features.length:1;for(n=0;n<P;n++){for(a=T?t.features[n].geometry:S?t.geometry:t,c=T?t.features[n].properties:S?t.properties:{},h=T?t.features[n].bbox:S?t.bbox:void 0,f=T?t.features[n].id:S?t.id:void 0,u=a?a.type==="GeometryCollection":!1,o=u?a.geometries.length:1,i=0;i<o;i++){if(s=u?a.geometries[i]:a,s===null){if(e(null,m,c,h,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,m,c,h,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],m,c,h,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function ZS(t,e){J3(t,function(n,r,i,s,o){var a=n===null?null:n.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return e(Hs(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var u;switch(a){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var c=0;c<n.coordinates.length;c++){var h=n.coordinates[c],f={type:u,coordinates:h};if(e(Hs(f,i),r,c)===!1)return!1}})}function Z3(t,e){ZS(t,function(n,r,i){var s=0;if(n.geometry){var o=n.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var a,u=0,c=0,h=0;if(Gm(n,function(f,m,T,S,P){if(a===void 0||r>u||S>c||P>h){a=f,u=r,c=S,h=P,s=0;return}var R=qc([a,f],n.properties);if(e(R,r,i,P,s)===!1)return!1;s++,a=f})===!1)return!1}}})}function eM(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Gm(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}var tM=eM;const Yn=11102230246251565e-32,pt=134217729,nM=(3+8*Yn)*Yn;function nh(t,e,n,r,i){let s,o,a,u,c=e[0],h=r[0],f=0,m=0;h>c==h>-c?(s=c,c=e[++f]):(s=h,h=r[++m]);let T=0;if(f<t&&m<n)for(h>c==h>-c?(o=c+s,a=s-(o-c),c=e[++f]):(o=h+s,a=s-(o-h),h=r[++m]),s=o,a!==0&&(i[T++]=a);f<t&&m<n;)h>c==h>-c?(o=s+c,u=o-s,a=s-(o-u)+(c-u),c=e[++f]):(o=s+h,u=o-s,a=s-(o-u)+(h-u),h=r[++m]),s=o,a!==0&&(i[T++]=a);for(;f<t;)o=s+c,u=o-s,a=s-(o-u)+(c-u),c=e[++f],s=o,a!==0&&(i[T++]=a);for(;m<n;)o=s+h,u=o-s,a=s-(o-u)+(h-u),h=r[++m],s=o,a!==0&&(i[T++]=a);return(s!==0||T===0)&&(i[T++]=s),T}function rM(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function tl(t){return new Float64Array(t)}const iM=(3+16*Yn)*Yn,sM=(2+12*Yn)*Yn,oM=(9+64*Yn)*Yn*Yn,Xi=tl(4),o0=tl(8),a0=tl(12),l0=tl(16),At=tl(4);function aM(t,e,n,r,i,s,o){let a,u,c,h,f,m,T,S,P,R,v,y,I,b,L,V,E,g;const A=t-i,C=n-i,x=e-s,N=r-s;b=A*N,m=pt*A,T=m-(m-A),S=A-T,m=pt*N,P=m-(m-N),R=N-P,L=S*R-(b-T*P-S*P-T*R),V=x*C,m=pt*x,T=m-(m-x),S=x-T,m=pt*C,P=m-(m-C),R=C-P,E=S*R-(V-T*P-S*P-T*R),v=L-E,f=L-v,Xi[0]=L-(v+f)+(f-E),y=b+v,f=y-b,I=b-(y-f)+(v-f),v=I-V,f=I-v,Xi[1]=I-(v+f)+(f-V),g=y+v,f=g-y,Xi[2]=y-(g-f)+(v-f),Xi[3]=g;let k=rM(4,Xi),X=sM*o;if(k>=X||-k>=X||(f=t-A,a=t-(A+f)+(f-i),f=n-C,c=n-(C+f)+(f-i),f=e-x,u=e-(x+f)+(f-s),f=r-N,h=r-(N+f)+(f-s),a===0&&u===0&&c===0&&h===0)||(X=oM*o+nM*Math.abs(k),k+=A*h+N*a-(x*c+C*u),k>=X||-k>=X))return k;b=a*N,m=pt*a,T=m-(m-a),S=a-T,m=pt*N,P=m-(m-N),R=N-P,L=S*R-(b-T*P-S*P-T*R),V=u*C,m=pt*u,T=m-(m-u),S=u-T,m=pt*C,P=m-(m-C),R=C-P,E=S*R-(V-T*P-S*P-T*R),v=L-E,f=L-v,At[0]=L-(v+f)+(f-E),y=b+v,f=y-b,I=b-(y-f)+(v-f),v=I-V,f=I-v,At[1]=I-(v+f)+(f-V),g=y+v,f=g-y,At[2]=y-(g-f)+(v-f),At[3]=g;const ve=nh(4,Xi,4,At,o0);b=A*h,m=pt*A,T=m-(m-A),S=A-T,m=pt*h,P=m-(m-h),R=h-P,L=S*R-(b-T*P-S*P-T*R),V=x*c,m=pt*x,T=m-(m-x),S=x-T,m=pt*c,P=m-(m-c),R=c-P,E=S*R-(V-T*P-S*P-T*R),v=L-E,f=L-v,At[0]=L-(v+f)+(f-E),y=b+v,f=y-b,I=b-(y-f)+(v-f),v=I-V,f=I-v,At[1]=I-(v+f)+(f-V),g=y+v,f=g-y,At[2]=y-(g-f)+(v-f),At[3]=g;const Et=nh(ve,o0,4,At,a0);b=a*h,m=pt*a,T=m-(m-a),S=a-T,m=pt*h,P=m-(m-h),R=h-P,L=S*R-(b-T*P-S*P-T*R),V=u*c,m=pt*u,T=m-(m-u),S=u-T,m=pt*c,P=m-(m-c),R=c-P,E=S*R-(V-T*P-S*P-T*R),v=L-E,f=L-v,At[0]=L-(v+f)+(f-E),y=b+v,f=y-b,I=b-(y-f)+(v-f),v=I-V,f=I-v,At[1]=I-(v+f)+(f-V),g=y+v,f=g-y,At[2]=y-(g-f)+(v-f),At[3]=g;const le=nh(Et,a0,4,At,l0);return l0[le-1]}function lM(t,e,n,r,i,s){const o=(e-s)*(n-i),a=(t-i)*(r-s),u=o-a,c=Math.abs(o+a);return Math.abs(u)>=iM*c?u:-aM(t,e,n,r,i,s,c)}function uM(t,e){var n,r,i=0,s,o,a,u,c,h,f,m=t[0],T=t[1],S=e.length;for(n=0;n<S;n++){r=0;var P=e[n],R=P.length-1;if(h=P[0],h[0]!==P[R][0]&&h[1]!==P[R][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-m,a=h[1]-T,r;r<R;r++){if(f=P[r+1],u=f[0]-m,c=f[1]-T,a===0&&c===0){if(u<=0&&o>=0||o<=0&&u>=0)return 0}else if(c>=0&&a<=0||c<=0&&a>=0){if(s=lM(o,u,a,c,0,0),s===0)return 0;(s>0&&c>0&&a<=0||s<0&&c<=0&&a>0)&&i++}h=f,a=c,o=u}}return i%2!==0}function cM(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Gn(t),i=X3(e),s=i.type,o=e.bbox;let a=i.coordinates;if(o&&dM(r,o)===!1)return!1;s==="Polygon"&&(a=[a]);let u=!1;for(var c=0;c<a.length;++c){const h=uM(r,a[c]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function dM(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}var hM=Object.defineProperty,fM=Object.defineProperties,pM=Object.getOwnPropertyDescriptors,u0=Object.getOwnPropertySymbols,mM=Object.prototype.hasOwnProperty,gM=Object.prototype.propertyIsEnumerable,c0=(t,e,n)=>e in t?hM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d0=(t,e)=>{for(var n in e||(e={}))mM.call(e,n)&&c0(t,n,e[n]);if(u0)for(var n of u0(e))gM.call(e,n)&&c0(t,n,e[n]);return t},h0=(t,e)=>fM(t,pM(e));function yM(t,e,n={}){if(!t||!e)throw new Error("lines and pt are required arguments");const r=Gn(e);let i=_i([1/0,1/0],{dist:1/0,index:-1,multiFeatureIndex:-1,location:-1}),s=0;return ZS(t,function(o,a,u){const c=Y3(o);for(let h=0;h<c.length-1;h++){const f=_i(c[h]);f.properties.dist=fi(e,f,n);const m=Gn(f),T=_i(c[h+1]);T.properties.dist=fi(e,T,n);const S=Gn(T),P=fi(f,T,n);let R,v;m[0]===r[0]&&m[1]===r[1]?[R,,v]=[m,void 0,!1]:S[0]===r[0]&&S[1]===r[1]?[R,,v]=[S,void 0,!0]:[R,,v]=wM(f.geometry.coordinates,T.geometry.coordinates,Gn(e));let y;R&&(y=_i(R,{dist:fi(e,R,n),multiFeatureIndex:u,location:s+fi(f,R,n)})),y&&y.properties.dist<i.properties.dist&&(i=h0(d0({},y),{properties:h0(d0({},y.properties),{index:v?h+1:h})})),s+=P}}),i}function vM(t,e){const[n,r,i]=t,[s,o,a]=e;return n*s+r*o+i*a}function _M(t,e){const[n,r,i]=t,[s,o,a]=e;return[r*a-i*o,i*s-n*a,n*o-r*s]}function f0(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function li(t,e){const n=vM(t,e)/(f0(t)*f0(e));return Math.acos(Math.min(Math.max(n,-1),1))}function rh(t){const e=gs(t[1]),n=gs(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function ui(t){const[e,n,r]=t,i=r0(Math.asin(r));return[r0(Math.atan2(n,e)),i]}function wM(t,e,n){const r=rh(t),i=rh(e),s=rh(n),[o,a,u]=s,[c,h,f]=_M(r,i),m=h*u-f*a,T=f*o-c*u,S=c*a-h*o,P=S*h-T*f,R=m*f-S*c,v=T*c-m*h,y=1/Math.sqrt(Math.pow(P,2)+Math.pow(R,2)+Math.pow(v,2)),I=[P*y,R*y,v*y],b=[-1*P*y,-1*R*y,-1*v*y],L=li(r,i),V=li(r,I),E=li(i,I),g=li(r,b),A=li(i,b);let C;return V<g&&V<A||E<g&&E<A?C=I:C=b,li(r,C)>L||li(i,C)>L?fi(ui(C),ui(r))<=fi(ui(C),ui(i))?[ui(r),!0,!1]:[ui(i),!1,!0]:[ui(C),!1,!1]}function ih(t,e,n={}){const r=Gn(t),i=Gn(e);i[0]+=i[0]-r[0]>180?-360:r[0]-i[0]>180?360:0;const s=EM(r,i);return JS(s,"meters",n.units)}function EM(t,e,n){n=n===void 0?bt:Number(n);const r=n,i=t[1]*Math.PI/180,s=e[1]*Math.PI/180,o=s-i;let a=Math.abs(e[0]-t[0])*Math.PI/180;a>Math.PI&&(a-=2*Math.PI);const u=Math.log(Math.tan(s/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),c=Math.abs(u)>1e-11?o/u:Math.cos(i);return Math.sqrt(o*o+c*c*a*a)*r}function p0(t,e,n={}){var r,i;const s=(r=n.method)!=null?r:"geodesic",o=(i=n.units)!=null?i:"kilometers";if(!t)throw new Error("pt is required");if(Array.isArray(t)?t=_i(t):t.type==="Point"?t=Hs(t):s0(t,"Point","point"),!e)throw new Error("line is required");Array.isArray(e)?e=qc(e):e.type==="LineString"?e=Hs(e):s0(e,"LineString","line");let a=1/0;const u=t.geometry.coordinates;return Z3(e,c=>{if(c){const h=c.geometry.coordinates[0],f=c.geometry.coordinates[1],m=TM(u,h,f,{method:s});m<a&&(a=m)}}),JS(a,"degrees",o)}function TM(t,e,n,r){if(r.method==="geodesic")return yM(qc([e,n]).geometry,t,{units:"degrees"}).properties.dist;const i=[n[0]-e[0],n[1]-e[1]],s=[t[0]-e[0],t[1]-e[1]],o=m0(s,i);if(o<=0)return ih(t,e,{units:"degrees"});const a=m0(i,i);if(a<=o)return ih(t,n,{units:"degrees"});const u=o/a,c=[e[0]+u*i[0],e[1]+u*i[1]];return ih(t,c,{units:"degrees"})}function m0(t,e){return t[0]*e[0]+t[1]*e[1]}const eI="/neighborhood-value-plus/assets/hairconnect-DPEIByZP.png",SM=({title:t,name:e,crossStreet:n,instagram:r,onClose:i})=>_.jsxs("div",{className:"sponsor-popup",children:[_.jsxs("div",{className:"sponsor-popup-header",children:[_.jsx("h2",{className:"sponsor-popup-header-text",children:t}),_.jsx("button",{onClick:i,className:"sponsor-popup-close","aria-label":"Close",children:"×"})]}),_.jsxs("div",{className:"sponsor-popup-content",children:[_.jsx("a",{href:r,target:"_blank",className:"sponsor-popup-link",children:_.jsx("img",{src:eI,alt:"Sponsor Logo",className:"sponsor-popup-logo"})}),_.jsxs("div",{className:"sponsor-popup-info",children:[_.jsx("h3",{className:"sponsor-popup-title",children:e}),_.jsx("p",{className:"sponsor-popup-location",children:n})]}),_.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"sponsor-popup-instagram"})]})]}),IM=Wc,AM=({jobType:t,location:e,status:n,fullAddress:r,referralSource:i,estimate:s,onClose:o,onEdit:a,feature:u,onStatusUpdate:c})=>{var V;const{userData:h}=Za(),f=(h==null?void 0:h.role)==="Admin",T=(h==null?void 0:h.role)==="Contractor"&&h.contractorType&&t&&((V=IM[h.contractorType])==null?void 0:V.includes(t)),[S,P]=D.useState(n||""),[R,v]=D.useState(!1),[y,I]=D.useState(null);La.useEffect(()=>{console.log("[PointPopup] feature on mount:",u),u&&console.log("[PointPopup] feature.id on mount:",u.id)},[u]);const b=E=>{P(E.target.value),I(null)},L=async()=>{if(!u)return;v(!0),I(null);let E={...u,properties:{...u.properties,Status:S}};!E.id&&u.properties&&u.properties.FID&&(E.id=u.properties.FID),console.log("[PointPopup] handleSaveStatus: feature:",E),console.log("[PointPopup] handleSaveStatus: feature.id:",E.id);try{await qm("addpoints",E),c&&c(S),v(!1),o()}catch{I("Failed to update status."),v(!1)}};return _.jsxs("div",{className:"point-popup",children:[_.jsxs("div",{className:"point-popup-header",children:[_.jsx("h3",{className:"point-popup-title",children:"Service Point Details"}),_.jsx("button",{className:"point-popup-close",onClick:o,onMouseEnter:E=>{E.currentTarget.style.backgroundColor="#f3f4f6"},onMouseLeave:E=>{E.currentTarget.style.backgroundColor="transparent"},children:"×"})]}),_.jsxs("div",{className:"point-popup-content",children:[_.jsxs("div",{className:"point-popup-row",children:[_.jsxs("div",{children:[_.jsx("div",{className:"point-popup-label",children:"Job Type"}),_.jsx("div",{className:"point-popup-value",children:t||"Not specified"})]}),_.jsxs("div",{children:[_.jsx("div",{className:"point-popup-label",children:"Location"}),_.jsx("div",{className:"point-popup-value",children:e||"Not specified"})]}),_.jsxs("div",{children:[_.jsx("div",{className:"point-popup-label",children:"Status"}),T?_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[_.jsxs("select",{value:S,onChange:b,className:"point-popup-status-select",children:[_.jsx("option",{value:"Active",children:"Active"}),_.jsx("option",{value:"Pending",children:"Pending"}),_.jsx("option",{value:"Complete",children:"Complete"})]}),_.jsx("button",{className:"edit-button",style:{minWidth:80},onClick:L,disabled:R,children:R?"Saving...":"Save"})]}):_.jsx("div",{className:"point-popup-status",style:{backgroundColor:g0(n).bg,color:g0(n).text},children:n||"Unknown"})]})]}),f&&_.jsxs("div",{className:"point-popup-row",style:{marginTop:"12px"},children:[_.jsxs("div",{children:[_.jsx("div",{className:"point-popup-label",children:"Full Address"}),_.jsx("div",{className:"point-popup-value",children:r||"N/A"})]}),_.jsxs("div",{children:[_.jsx("div",{className:"point-popup-label",children:"Referral Source"}),_.jsx("div",{className:"point-popup-value",children:i||"N/A"})]}),_.jsxs("div",{children:[_.jsx("div",{className:"point-popup-label",children:"Estimate"}),_.jsxs("div",{className:"point-popup-value",children:["$ ",s||"N/A"]})]})]})]}),(f||T)&&_.jsxs("div",{className:"point-popup-footer",children:[f&&_.jsx("button",{className:"edit-button",onClick:a,children:"Edit"}),T&&y&&_.jsx("div",{style:{color:"red",marginTop:8},children:y})]})]})},g0=t=>{if(!t)return{bg:"#f3f4f6",text:"#6b7280"};const e=t.toLowerCase();return e.includes("active")?{bg:"#daff99",text:"#166534"}:e.includes("pending")?{bg:"#faff99",text:"#92400e"}:e.includes("complete")?{bg:"#c7f7ad",text:"#003b09"}:{bg:"#f3f4f6",text:"#6b7280"}},CM=({selectedServiceType:t,onServiceTypeChange:e})=>{const[n,r]=La.useState(!1),i=(a,u)=>{const c=parseInt(a.slice(1,3),16),h=parseInt(a.slice(3,5),16),f=parseInt(a.slice(5,7),16);return`rgba(${c}, ${h}, ${f}, ${u})`},s=Ms.find(a=>a.name===t),o=a=>{e(a.name),r(!1)};return _.jsxs("div",{className:"service-type-dropdown",children:[_.jsxs("div",{className:"dropdown-label-row",style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:4},children:[_.jsx("label",{className:"field-label",style:{marginBottom:0},children:"Service Type *"}),_.jsx(Ae,{icon:$u,className:`dropdown-arrow ${n?"rotated":""}`,style:{cursor:"pointer"},onClick:()=>r(!n)})]}),_.jsxs("div",{className:"dropdown-container",children:[_.jsx("div",{className:`dropdown-trigger ${n?"open":""}`,onClick:()=>r(!n),children:s?_.jsx("div",{className:"selected-service",children:_.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(s.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[_.jsx(Ae,{icon:s.icon,style:{color:s.color},className:"service-icon"}),_.jsx("span",{className:"service-name",style:{color:s.color,fontWeight:600},children:s.name})]})}):_.jsx("span",{className:"placeholder",children:"Select a service type"})}),n&&_.jsx("div",{className:"dropdown-menu",children:Ms.map(a=>_.jsx("div",{className:`dropdown-option ${(s==null?void 0:s.id)===a.id?"selected":""}`,onClick:()=>o(a),style:{backgroundColor:(s==null?void 0:s.id)===a.id?i(a.color,.1):"transparent",borderRadius:"6px",marginBottom:"4px",cursor:"pointer",padding:"2px 0"},children:_.jsxs("div",{className:"service-icon-container",style:{backgroundColor:i(a.color,.1),display:"flex",alignItems:"center",gap:"8px",padding:"6px 12px",borderRadius:"6px",minWidth:"160px"},children:[_.jsx(Ae,{icon:a.icon,style:{color:a.color},className:"service-icon"}),_.jsx("span",{className:"service-name",style:{color:a.color,fontWeight:600},children:a.name})]})},a.id))})]})]})},PM=({onClose:t,onUpdatePoint:e,onDeletePoint:n,point:r,layerName:i="addpoints"})=>{var N,k,X,ve,Et;const[s,o]=D.useState(""),[a,u]=D.useState(""),[c,h]=D.useState(""),[f,m]=D.useState("Active"),[T,S]=D.useState(""),[P,R]=D.useState(""),[v,y]=D.useState(""),[I,b]=D.useState(!1),[L,V]=D.useState(!1),[E,g]=D.useState(null);D.useEffect(()=>{r&&r.properties&&(o(r.properties["Service Ty"]||""),u(r.properties["Cross Stre"]||""),h(r.properties.neighbhood||""),m(r.properties.Status||"Active"),S(r.properties["Full Addre"]||""),R(r.properties["Refferal S"]||""),y(r.properties.Estimate||""))},[r]);const A=async le=>{le.preventDefault(),b(!0),g(null);try{const B={...r,properties:{...r.properties,"Service Ty":s,"Cross Stre":a,neighbhood:c,Status:f,"Full Addre":T,"Refferal S":P,Estimate:v,updated_at:new Date().toISOString()}};console.log(`Updating point in layer: ${i}`),await qm(i,B),e(B),console.log("Point updated successfully!"),t()}catch(B){console.error("Error updating point:",B),g(B instanceof Error?B.message:"Failed to update point")}finally{b(!1)}},C=async()=>{var le;if(window.confirm("Are you sure you want to delete this point? This action cannot be undone.")){V(!0),g(null);try{const B=(le=r.properties)==null?void 0:le.id;if(!B)throw new Error("Point must have an ID to be deleted");console.log(`Deleting point from layer: ${i}`),await QS(i,B),n(B),console.log("Point deleted successfully!"),t()}catch(B){console.error("Error deleting point:",B),g(B instanceof Error?B.message:"Failed to delete point")}finally{V(!1)}}},x=()=>{var J,ye;const le=r.geometry.coordinates,B=((J=le[1])==null?void 0:J.toFixed(6))||"N/A",Q=((ye=le[0])==null?void 0:ye.toFixed(6))||"N/A";return`${B}, ${Q}`};return _.jsxs("div",{className:"header-panel edit-point-panel",children:[_.jsxs("div",{className:"panel-header",children:[_.jsxs("div",{children:[_.jsx("h3",{children:"Edit Service Point"}),_.jsxs("small",{style:{color:"#666",fontSize:"12px"},children:["Location: ",x()]})]}),_.jsx("button",{className:"close-btn",onClick:t,disabled:I||L,children:_.jsx(Ae,{icon:bi})})]}),_.jsxs("div",{className:"panel-content",children:[E&&_.jsx("div",{className:"error-message",style:{color:"#d32f2f",backgroundColor:"#ffebee",padding:"8px 12px",borderRadius:"4px",marginBottom:"16px",fontSize:"14px"},children:E}),_.jsxs("form",{className:"edit-point-form",onSubmit:A,children:[_.jsx(CM,{selectedServiceType:s,onServiceTypeChange:o}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Cross Street"}),_.jsx("input",{type:"text",value:a,onChange:le=>u(le.target.value),required:!0,disabled:I||L})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Neighborhood"}),_.jsx("input",{type:"text",value:c,onChange:le=>h(le.target.value),required:!0,disabled:I||L})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Status"}),_.jsxs("select",{value:f,onChange:le=>m(le.target.value),disabled:I||L,children:[_.jsx("option",{value:"Active",children:"Active"}),_.jsx("option",{value:"Pending",children:"Pending"}),_.jsx("option",{value:"Complete",children:"Complete"})]})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Full Address"}),_.jsx("input",{type:"text",value:T,onChange:le=>S(le.target.value),disabled:I||L})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Referral Source"}),_.jsx("input",{type:"text",value:P,onChange:le=>R(le.target.value),disabled:I||L})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{children:"Estimate"}),_.jsx("input",{type:"text",value:v,onChange:le=>y(le.target.value),disabled:I||L})]}),(((N=r.properties)==null?void 0:N.created_at)||((k=r.properties)==null?void 0:k.updated_at))&&_.jsxs("div",{className:"metadata-section",style:{marginTop:"16px",padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"12px",color:"#666"},children:[((X=r.properties)==null?void 0:X.created_at)&&_.jsxs("div",{children:["Created: ",new Date(r.properties.created_at).toLocaleString()]}),((ve=r.properties)==null?void 0:ve.updated_at)&&_.jsxs("div",{children:["Last Updated: ",new Date(r.properties.updated_at).toLocaleString()]}),((Et=r.properties)==null?void 0:Et.id)&&_.jsxs("div",{children:["ID: ",r.properties.id]})]}),_.jsxs("div",{className:"form-actions",style:{display:"flex",gap:"12px",marginTop:"20px",flexDirection:"column"},children:[_.jsx("button",{type:"submit",className:"update-point-btn",disabled:I||L||!s,style:{backgroundColor:I?"#ccc":"#4caf50",color:"white",border:"none",padding:"12px 16px",borderRadius:"4px",cursor:I||L?"not-allowed":"pointer",fontSize:"14px",fontWeight:"600"},children:I?"Updating Point...":"Update Point"}),_.jsx("button",{type:"button",className:"delete-point-btn",onClick:C,disabled:I||L,style:{backgroundColor:L?"#ccc":"#f44336",color:"white",border:"none",padding:"12px 16px",borderRadius:"4px",cursor:I||L?"not-allowed":"pointer",fontSize:"14px",fontWeight:"600"},children:L?"Deleting...":"Delete Point"})]})]})]})]})},kM=({neighborhoodName:t,pointCount:e,x:n,y:r})=>_.jsx("div",{className:"neighborhood-hover-popup",style:{left:n+1,top:r+1},children:_.jsxs("div",{className:"neighborhood-hover-popup-row",children:[_.jsx("span",{className:"neighborhood-hover-popup-name",children:t}),_.jsx("span",{className:"neighborhood-hover-popup-dot",children:"•"}),_.jsxs("span",{className:"neighborhood-hover-popup-count",children:[e," ",e===1?"service":"services"]})]})}),RM={paint:{"fill-color":["match",["get","randoNum"],1,"#FF6B6B",2,"#4ECDC4",3,"#FFD166",4,"#6A4C93",5,"#43AA8B",6,"#F3722C",7,"#277DA1",8,"#F94144",9,"#90BE6D",10,"#577590","#CCCCCC"],"fill-outline-color":"#FFFFFF"}},xM={type:"line",source:"neighborhoods",layout:{},paint:{"line-color":"#FFFFFF","line-width":2}},bM={type:"circle",source:"addpoints",layout:{},paint:{"circle-color":["match",["get","Service Ty"],"Lawn Restoration","#008000","Sidewalk Repair","#808080","Homeless Outreach","#FFA500","Legacy Sponsored Block","#FFD700","Lifestyle Lottery Winner","#800080","Neighborhood History","#0000FF","Home For Sale","#008080","Overnight Patrol","#000080","Vacant Home Cleanup","#800000","Trash or Debris Dump Site","#000000","Overgrown Bushes or Trees","#228B22","#999999"],"circle-radius":["interpolate",["linear"],["zoom"],10,4,15,8,20,12],"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF"}},NM={type:"circle",source:"sponsors",layout:{},paint:{"circle-color":"#FFD700","circle-radius":10,"circle-stroke-width":2,"circle-stroke-color":"#FFA500"}},ko={NeighborhoodBoundaries:RM,NeighborhoodBoundariesOutline:xM,addpoints:bM,Sponsors:NM},OM=Wc,LM=({viewState:t,onViewStateChange:e,searchMarker:n,filters:r,isAddingPoint:i,onPointAdd:s,addPointCoordinates:o,geoJsonData:a,loadingGeoJson:u})=>{var Gt,Kt,nl;const{user:c,userData:h,isAnonymous:f,loading:m}=Za(),[T,S]=D.useState({longitude:-122.5715,latitude:45.498,zoom:12}),P=t||T,[R,v]=D.useState(null),[y,I]=D.useState(!0),[b,L]=D.useState(null),[V,E]=D.useState(null),[g,A]=D.useState(null),[C,x]=D.useState(null),[N,k]=D.useState(null);D.useEffect(()=>{m||(async()=>{try{v(null),console.log("Loading GeoJSON data...");const he=!f&&h?h.role:null;console.log("Current user role:",he||"Guest");const fe=await $f();console.log("Loaded and filtered layers:",Object.keys(fe))}catch(he){console.error("Error loading GeoJSON data:",he),v(`Failed to load map data: ${he instanceof Error?he.message:"Unknown error"}`)}})()},[f,h,m]),D.useEffect(()=>{if(a.Sponsors){const ne=a.Sponsors.features.find(he=>{var fe;return((fe=he.properties)==null?void 0:fe.Name)==="The Hair Connect"});ne?(console.log("Sponsor feature found:",ne),L(ne)):console.log("Sponsor feature not found")}},[a.Sponsors]);const X=ne=>{e?e(ne.viewState):S(ne.viewState),ne.viewState.zoom<14&&x(null)},ve=ne=>a.addpoints?a.addpoints.features.filter(he=>{var De;return((De=he.properties)==null?void 0:De.neighbhood)===ne}).length:0,Et=(ne,he,fe)=>{var ke,_e;const De=_i([ne,he]);for(const Te of fe.features)if((Te.geometry.type==="Polygon"||Te.geometry.type==="MultiPolygon")&&cM(De,Te))return((ke=Te.properties)==null?void 0:ke.MAPLABEL)||((_e=Te.properties)==null?void 0:_e.NAME)||null;return null},le=ne=>{var fe,De,ke,_e;if(i){const{lng:Te,lat:Qt}=ne.lngLat,Yt=Math.round(Te*1e4)/1e4,ti=Math.round(Qt*1e4)/1e4;let ni=null;a.NeighborhoodBoundaries&&(ni=Et(Yt,ti,a.NeighborhoodBoundaries));let cr=null;if(a.PortlandStreets){const ri=_i([Yt,ti]),Wi=a.PortlandStreets.features;let wn=[];if(Wi.forEach(Tt=>{if(Tt.geometry.type==="LineString"){const on=p0(ri,Tt);wn.push({street:Tt,distance:on})}else Tt.geometry.type==="MultiLineString"&&Tt.geometry.coordinates.forEach(on=>{const Qe=qc(on,Tt.properties),Ze=p0(ri,Qe);wn.push({street:{...Tt,geometry:{type:"LineString",coordinates:on}},distance:Ze})})}),wn.sort((Tt,on)=>Tt.distance-on.distance),wn.length>=2){const Tt=(fe=wn[0].street.properties)==null?void 0:fe.FullName,on=(De=wn[1].street.properties)==null?void 0:De.FullName;cr=`${Tt} & ${on}`}}s({lat:ti,lng:Yt,neighborhood:ni,crossStreet:cr});return}const he=ne.features;if(he&&he.length>0){const Te=he.find(Yt=>Yt.source==="addpoints");if(Te){console.log("Clicked addpoint:",Te),E(Te);return}const Qt=he.find(Yt=>Yt.source==="neighborhoods");if(Qt){const Yt=((ke=Qt.properties)==null?void 0:ke.MAPLABEL)||((_e=Qt.properties)==null?void 0:_e.NAME);if(Yt){x(Yt);const[ti,ni,cr,ri]=tM(Qt.geometry),Wi={...P,longitude:(ti+cr)/2,latitude:(ni+ri)/2,zoom:14};e?e(Wi):S(Wi)}}}},B=ne=>{A(ne),E(null)},Q=ne=>{console.log("Update point:",ne),A(null)},J=ne=>{console.log("Delete point:",ne),A(null)},ye=ne=>{var fe,De;const he=ne.features;if(he&&he.length>0){const ke=he.find(_e=>_e.source==="neighborhoods");if(ke){const _e=((fe=ke.properties)==null?void 0:fe.MAPLABEL)||((De=ke.properties)==null?void 0:De.NAME);if(_e){const Te=ve(_e);k({name:_e,pointCount:Te,x:ne.point.x,y:ne.point.y})}}else k(null)}else k(null)},pe=()=>{},xe=()=>{k(null)},xt=(()=>{const ne={...a};if(ne.addpoints){let fe=ne.addpoints.features;const De=C?[C]:r.selectedNeighborhoods;if(De.length>0&&(fe=fe.filter(ke=>{var Te;const _e=(Te=ke.properties)==null?void 0:Te.neighbhood;return De.includes(_e)})),r.selectedServiceTypes.length>0&&(fe=fe.filter(ke=>{var Te;const _e=(Te=ke.properties)==null?void 0:Te["Service Ty"];return r.selectedServiceTypes.includes(_e)})),(h==null?void 0:h.role)==="Contractor"&&h.contractorType){const ke=OM[h.contractorType]||[];fe=fe.filter(_e=>{var Qt;const Te=(Qt=_e.properties)==null?void 0:Qt["Service Ty"];return ke.includes(Te)})}ne.addpoints={...ne.addpoints,features:fe}}const he=C?[C]:r.selectedNeighborhoods;if(ne.NeighborhoodBoundaries&&he.length>0){const fe=ne.NeighborhoodBoundaries.features.filter(De=>{var _e;const ke=(_e=De.properties)==null?void 0:_e.MAPLABEL;return he.includes(ke)});ne.NeighborhoodBoundaries={...ne.NeighborhoodBoundaries,features:fe}}return ne})();return m||u?_.jsx("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0"},children:_.jsxs("div",{children:[m?"Initializing...":"Loading map data...",_.jsx("br",{}),_.jsx("small",{style:{color:"#666",marginTop:"8px"},children:f?"Loading as guest":`Logged in as ${h==null?void 0:h.role}`})]})}):R?_.jsxs("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",flexDirection:"column",gap:"16px"},children:[_.jsxs("div",{style:{color:"red",textAlign:"center"},children:[_.jsx("strong",{children:"Error loading map data"}),_.jsx("br",{}),R]}),_.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Retry"})]}):_.jsxs("div",{style:{height:"100vh",width:"100%",position:"relative"},children:[!f&&h&&_.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:1e3,background:"rgba(0,0,0,0.7)",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"12px"},children:[h.role," - ",h.email]}),_.jsxs(G3,{...P,onMove:X,onClick:le,onMouseMove:ye,onMouseEnter:pe,onMouseLeave:xe,interactiveLayerIds:["addpoints","neighborhoods-fill"],mapboxAccessToken:"pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ",style:{width:"100%",height:"100%"},mapStyle:"mapbox://styles/mapbox/satellite-streets-v12",cursor:i?"crosshair":"auto",children:[_.jsx(K3,{position:"top-right"}),xt.NeighborhoodBoundaries&&_.jsxs(Hl,{id:"neighborhoods",type:"geojson",data:xt.NeighborhoodBoundaries,children:[_.jsx(Po,{id:"neighborhoods-fill",type:"fill",paint:{"fill-color":ko.NeighborhoodBoundaries.paint["fill-color"],"fill-opacity":["interpolate",["linear"],["zoom"],13,.35,16,.05,18,0],"fill-outline-color":ko.NeighborhoodBoundaries.paint["fill-outline-color"]}}),_.jsx(Po,{...ko.NeighborhoodBoundariesOutline}),_.jsx(Po,{id:"neighborhoods-labels",type:"symbol",layout:{"text-field":["get","NAME"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12,"text-anchor":"center","text-justify":"center"},paint:{"text-color":"#171717","text-halo-color":"rgba(255, 255, 255, 0.8)","text-halo-width":1,"text-opacity":["interpolate",["linear"],["zoom"],13,1,16,.5,18,0]}})]}),xt.addpoints&&_.jsx(Hl,{id:"addpoints",type:"geojson",data:xt.addpoints,children:_.jsx(Po,{id:"addpoints",...ko.addpoints})}),a.Sponsors&&_.jsx(Hl,{id:"sponsors",type:"geojson",data:a.Sponsors,children:_.jsx(Po,{...ko.Sponsors})}),a.PortlandStreets&&_.jsx(Hl,{id:"streets",type:"geojson",data:a.PortlandStreets}),n&&_.jsx(th,{longitude:n.longitude,latitude:n.latitude,anchor:"bottom",children:_.jsxs("div",{className:"search-marker-container",children:[_.jsx("div",{className:"search-marker-pin",children:_.jsx("div",{className:"search-marker-dot"})}),_.jsxs("div",{className:"search-marker-tooltip",children:[n.address,_.jsx("div",{className:"search-marker-tooltip-arrow"})]})]})}),y&&b&&b.geometry.type==="Point"&&_.jsx(th,{longitude:b.geometry.coordinates[0],latitude:b.geometry.coordinates[1],anchor:"center",children:_.jsx("div",{className:"sponsor-marker-container",children:_.jsx("img",{src:eI,alt:"Sponsor Logo",className:"sponsor-marker-img"})})}),y&&b&&!V&&!g&&_.jsx("div",{style:{position:"fixed",left:24,bottom:24,zIndex:1e3,background:"white",borderRadius:12,boxShadow:"0 2px 16px rgba(0,0,0,0.18)",padding:0,minWidth:320,maxWidth:360,display:"flex",alignItems:"center",gap:16},children:_.jsx(SM,{title:"Featured Sponsor",name:(Gt=b.properties)==null?void 0:Gt.Name,crossStreet:(Kt=b.properties)==null?void 0:Kt.CrossStreet,instagram:(nl=b.properties)==null?void 0:nl.Instagram,onClose:()=>I(!1)})}),o&&_.jsx(th,{longitude:o.lng,latitude:o.lat,anchor:"center",children:_.jsx("div",{className:"add-point-marker"})})]}),N&&_.jsx(kM,{neighborhoodName:N.name,pointCount:N.pointCount,x:N.x,y:N.y}),V&&(()=>{var ne,he,fe,De,ke,_e;return _.jsx(AM,{jobType:(ne=V.properties)==null?void 0:ne["Service Ty"],location:(he=V.properties)==null?void 0:he["Cross Stre"],status:(fe=V.properties)==null?void 0:fe.Status,fullAddress:(De=V.properties)==null?void 0:De["Full Addre"],referralSource:(ke=V.properties)==null?void 0:ke["Referral S"],estimate:(_e=V.properties)==null?void 0:_e.Estimate,feature:V,onClose:()=>E(null),onEdit:()=>B(V),onStatusUpdate:()=>{}})})(),g&&_.jsx(PM,{point:g,onClose:()=>A(null),onUpdatePoint:Q,onDeletePoint:J})]})},DM=()=>{const[t,e]=D.useState({}),[n,r]=D.useState(!0),[i,s]=D.useState(null);D.useEffect(()=>{(async()=>{r(!0),s(null);try{const P=await $f();e(P)}catch(P){s(P instanceof Error?P.message:"Failed to load initial data"),console.error("Error loading initial data:",P)}finally{r(!1)}})()},[]);const o=D.useCallback(async S=>{s(null);try{o3(S);const P=await to(S);e(R=>({...R,[S]:P}))}catch(P){const R=P instanceof Error?P.message:`Failed to refresh ${S}`;throw s(R),console.error(`Error refreshing layer ${S}:`,P),P}},[]),a=D.useCallback(async()=>{r(!0),s(null);try{const S=await $f();e(S)}catch(S){const P=S instanceof Error?S.message:"Failed to refresh all layers";throw s(P),console.error("Error refreshing all layers:",S),S}finally{r(!1)}},[]),u=D.useCallback(async(S,P)=>{s(null);try{const R=await KS(S,P);e(v=>({...v,[S]:R}))}catch(R){const v=R instanceof Error?R.message:`Failed to add point to ${S}`;throw s(v),console.error(`Error adding point to ${S}:`,R),R}},[]),c=D.useCallback(async(S,P)=>{s(null);try{const R=await qm(S,P);e(v=>({...v,[S]:R}))}catch(R){const v=R instanceof Error?R.message:`Failed to update point in ${S}`;throw s(v),console.error(`Error updating point in ${S}:`,R),R}},[]),h=D.useCallback(async(S,P)=>{s(null);try{const R=await QS(S,P);e(v=>({...v,[S]:R}))}catch(R){const v=R instanceof Error?R.message:`Failed to delete point from ${S}`;throw s(v),console.error(`Error deleting point from ${S}:`,R),R}},[]),f=D.useCallback(async S=>{s(null);try{await a3(S)}catch(P){const R=P instanceof Error?P.message:`Failed to create backup for ${S}`;throw s(R),console.error(`Error creating backup for ${S}:`,P),P}},[]),m=D.useCallback(S=>{var P;return((P=t[S])==null?void 0:P.features)||[]},[t]),T=D.useCallback((S,P)=>m(S).find(v=>{var y;return((y=v.properties)==null?void 0:y.id)===P}),[m]);return{layers:t,loading:n,error:i,refreshLayer:o,refreshAllLayers:a,addPoint:u,updatePoint:c,deletePoint:h,createBackup:f,getLayerFeatures:m,findFeatureById:T}};function MM(){const t=DM(),[e,n]=D.useState({longitude:-122.5715,latitude:45.498,zoom:12}),[r,i]=D.useState(null),[s,o]=D.useState({selectedNeighborhoods:[],selectedServiceTypes:[]}),[a,u]=D.useState(!1),[c,h]=D.useState(!1),[f,m]=D.useState(null),T=y=>{n({longitude:y.longitude,latitude:y.latitude,zoom:y.zoom}),i({longitude:y.longitude,latitude:y.latitude,address:y.address}),setTimeout(()=>{i(null)},1e4)},S=y=>{n(y)},P=y=>{o(y)},R=async y=>{await t.addPoint("addpoints",y),await t.refreshAllLayers(),m(null)},v=y=>{m(y),h(!1)};return _.jsx(t3,{children:_.jsxs("div",{className:"App",children:[_.jsx(c3,{onLocationSelect:T,filters:s,onFiltersChange:P,filterPanelOpen:a,setFilterPanelOpen:u,isAddingPoint:c,setIsAddingPoint:h,addPointCoordinates:f===null?void 0:f,setAddPointCoordinates:m,onAddPoint:R}),_.jsx(LM,{viewState:e,onViewStateChange:S,searchMarker:r,filters:s,isAddingPoint:c,onPointAdd:v,addPointCoordinates:f===null?void 0:f,geoJsonData:t.layers,loadingGeoJson:t.loading})]})})}sh.createRoot(document.getElementById("root")).render(_.jsx(La.StrictMode,{children:_.jsx(MM,{})}));export{VM as c,y0 as g};
