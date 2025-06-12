(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Q3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function t0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n0={exports:{}},tc={},r0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),tS=Symbol.for("react.portal"),nS=Symbol.for("react.fragment"),rS=Symbol.for("react.strict_mode"),iS=Symbol.for("react.profiler"),sS=Symbol.for("react.provider"),oS=Symbol.for("react.context"),aS=Symbol.for("react.forward_ref"),lS=Symbol.for("react.suspense"),uS=Symbol.for("react.memo"),cS=Symbol.for("react.lazy"),Pg=Symbol.iterator;function hS(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function $s(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=$s.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||i0}var Dd=Ld.prototype=new a0;Dd.constructor=Ld;s0(Dd,$s.prototype);Dd.isPureReactComponent=!0;var kg=Array.isArray,l0=Object.prototype.hasOwnProperty,Md={current:null},u0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,r)&&!u0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ka,type:t,key:s,ref:o,props:i,_owner:Md.current}}function fS(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function dS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rg=/\/+/g;function th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dS(""+t.key):e.toString(36)}function Ul(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ka:case tS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+th(o,0):r,kg(i)?(n="",t!=null&&(n=t.replace(Rg,"$&/")+"/"),Ul(i,e,n,"",function(c){return c})):i!=null&&(Vd(i)&&(i=fS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+th(s,l);o+=Ul(s,e,n,u,i)}else if(u=hS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+th(s,l++),o+=Ul(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var r=[],i=0;return Ul(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},zl={transition:null},mS={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:zl,ReactCurrentOwner:Md};function h0(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=$s;re.Fragment=nS;re.Profiler=iS;re.PureComponent=Ld;re.StrictMode=rS;re.Suspense=lS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;re.act=h0;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=s0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Md.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)l0.call(e,u)&&!u0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ka,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:oS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sS,_context:t},t.Consumer=t};re.createElement=c0;re.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:aS,render:t}};re.isValidElement=Vd;re.lazy=function(t){return{$$typeof:cS,_payload:{_status:-1,_result:t},_init:pS}};re.memo=function(t,e){return{$$typeof:uS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=zl.transition;zl.transition={};try{t()}finally{zl.transition=e}};re.unstable_act=h0;re.useCallback=function(t,e){return St.current.useCallback(t,e)};re.useContext=function(t){return St.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return St.current.useDeferredValue(t)};re.useEffect=function(t,e){return St.current.useEffect(t,e)};re.useId=function(){return St.current.useId()};re.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return St.current.useMemo(t,e)};re.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};re.useRef=function(t){return St.current.useRef(t)};re.useState=function(t){return St.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return St.current.useTransition()};re.version="18.3.1";r0.exports=re;var V=r0.exports;const Fd=t0(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=V,yS=Symbol.for("react.element"),vS=Symbol.for("react.fragment"),_S=Object.prototype.hasOwnProperty,wS=gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ES={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_S.call(e,r)&&!ES.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yS,type:t,key:s,ref:o,props:i,_owner:wS.current}}tc.Fragment=vS;tc.jsx=f0;tc.jsxs=f0;n0.exports=tc;var T=n0.exports,Yh={},d0={exports:{}},$t={},p0={exports:{}},m0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var ee=$.length;$.push(Y);e:for(;0<ee;){var ve=ee-1>>>1,he=$[ve];if(0<i(he,Y))$[ve]=Y,$[ee]=he,ee=ve;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],ee=$.pop();if(ee!==Y){$[0]=ee;e:for(var ve=0,he=$.length,Pe=he>>>1;ve<Pe;){var en=2*(ve+1)-1,tn=$[en],pn=en+1,Pt=$[pn];if(0>i(tn,ee))pn<he&&0>i(Pt,tn)?($[ve]=Pt,$[pn]=ee,ve=pn):($[ve]=tn,$[en]=ee,ve=en);else if(pn<he&&0>i(Pt,ee))$[ve]=Pt,$[pn]=ee,ve=pn;else break e}}return Y}function i($,Y){var ee=$.sortIndex-Y.sortIndex;return ee!==0?ee:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,d=null,m=3,w=!1,S=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function R($){if(k=!1,I($),!S)if(n(u)!==null)S=!0,bn(O);else{var Y=n(c);Y!==null&&Lt(R,Y.startTime-$)}}function O($,Y){S=!1,k&&(k=!1,_(g),g=-1),w=!0;var ee=m;try{for(I(Y),d=n(u);d!==null&&(!(d.expirationTime>Y)||$&&!N());){var ve=d.callback;if(typeof ve=="function"){d.callback=null,m=d.priorityLevel;var he=ve(d.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(u)&&r(u),I(Y)}else r(u);d=n(u)}if(d!==null)var Pe=!0;else{var en=n(c);en!==null&&Lt(R,en.startTime-Y),Pe=!1}return Pe}finally{d=null,m=ee,w=!1}}var D=!1,A=null,g=-1,E=5,C=-1;function N(){return!(t.unstable_now()-C<E)}function b(){if(A!==null){var $=t.unstable_now();C=$;var Y=!0;try{Y=A(!0,$)}finally{Y?P():(D=!1,A=null)}}else D=!1}var P;if(typeof y=="function")P=function(){y(b)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Ct=Ie.port2;Ie.port1.onmessage=b,P=function(){Ct.postMessage(null)}}else P=function(){x(b,0)};function bn($){A=$,D||(D=!0,P())}function Lt($,Y){g=x(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,bn(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var ee=m;m=Y;try{return $()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=m;m=$;try{return Y()}finally{m=ee}},t.unstable_scheduleCallback=function($,Y,ee){var ve=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ve+ee:ve):ee=ve,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,$={id:f++,callback:Y,priorityLevel:$,startTime:ee,expirationTime:he,sortIndex:-1},ee>ve?($.sortIndex=ee,e(c,$),n(u)===null&&$===n(c)&&(k?(_(g),g=-1):k=!0,Lt(R,ee-ve))):($.sortIndex=he,e(u,$),S||w||(S=!0,bn(O))),$},t.unstable_shouldYield=N,t.unstable_wrapCallback=function($){var Y=m;return function(){var ee=m;m=Y;try{return $.apply(this,arguments)}finally{m=ee}}}})(m0);p0.exports=m0;var TS=p0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=V,Bt=TS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,Jo={};function Di(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Jo[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xh=Object.prototype.hasOwnProperty,SS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Ng={};function AS(t){return Xh.call(Ng,t)?!0:Xh.call(xg,t)?!1:SS.test(t)?Ng[t]=!0:(xg[t]=!0,!1)}function CS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PS(t,e,n,r){if(e===null||typeof e>"u"||CS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Ud);it[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Ud);it[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Ud);it[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PS(e,n,i,r)&&(n=null),r||i===null?AS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Zh=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),bg=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,nh;function Co(t){if(nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nh=e&&e[1]||""}return`
`+nh+t}var rh=!1;function ih(t,e){if(!t||rh)return"";rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{rh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function kS(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=ih(t.type,!1),t;case 11:return t=ih(t.type.render,!1),t;case 1:return t=ih(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Zi:return"Portal";case Jh:return"Profiler";case Bd:return"StrictMode";case Zh:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case y0:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function RS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xS(t){var e=w0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=xS(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function rf(t,e){T0(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Po(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function I0(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NS=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){NS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function P0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=C0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bS=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(bS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,gs=null,ys=null;function Vg(t){if(t=Na(t)){if(typeof hf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=oc(e),hf(t.stateNode,t.type,e))}}function k0(t){gs?ys?ys.push(t):ys=[t]:gs=t}function R0(){if(gs){var t=gs,e=ys;if(ys=gs=null,Vg(t),e)for(t=0;t<e.length;t++)Vg(e[t])}}function x0(t,e){return t(e)}function N0(){}var sh=!1;function b0(t,e,n){if(sh)return t(e,n);sh=!0;try{return x0(t,e,n)}finally{sh=!1,(gs!==null||ys!==null)&&(N0(),R0())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var ff=!1;if(Kn)try{var po={};Object.defineProperty(po,"passive",{get:function(){ff=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{ff=!1}function OS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,hu=null,fu=!1,df=null,LS={onError:function(t){Vo=!0,hu=t}};function DS(t,e,n,r,i,s,o,l,u){Vo=!1,hu=null,OS.apply(LS,arguments)}function MS(t,e,n,r,i,s,o,l,u){if(DS.apply(this,arguments),Vo){if(Vo){var c=hu;Vo=!1,hu=null}else throw Error(z(198));fu||(fu=!0,df=c)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(t){if(Mi(t)!==t)throw Error(z(188))}function VS(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fg(i),t;if(s===r)return Fg(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function L0(t){return t=VS(t),t!==null?D0(t):null}function D0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D0(t);if(e!==null)return e;t=t.sibling}return null}var M0=Bt.unstable_scheduleCallback,jg=Bt.unstable_cancelCallback,FS=Bt.unstable_shouldYield,jS=Bt.unstable_requestPaint,je=Bt.unstable_now,US=Bt.unstable_getCurrentPriorityLevel,qd=Bt.unstable_ImmediatePriority,V0=Bt.unstable_UserBlockingPriority,du=Bt.unstable_NormalPriority,zS=Bt.unstable_LowPriority,F0=Bt.unstable_IdlePriority,nc=null,En=null;function BS(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(nc,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:WS,$S=Math.log,HS=Math.LN2;function WS(t){return t>>>=0,t===0?32:31-($S(t)/HS|0)|0}var yl=64,vl=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ko(l):(s&=o,s!==0&&(r=ko(s)))}else o=n&~i,o!==0?r=ko(o):s!==0&&(r=ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function qS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=qS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=yl;return yl<<=1,!(yl&4194240)&&(yl=64),t}function oh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function KS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,Kd,B0,$0,H0,mf=!1,_l=[],Pr=null,kr=null,Rr=null,ta=new Map,na=new Map,vr=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ug(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Na(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YS(t,e,n,r,i){switch(e){case"focusin":return Pr=mo(Pr,t,e,n,r,i),!0;case"dragenter":return kr=mo(kr,t,e,n,r,i),!0;case"mouseover":return Rr=mo(Rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,mo(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,mo(na.get(s)||null,t,e,n,r,i)),!0}return!1}function W0(t){var e=hi(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=O0(n),e!==null){t.blockedOn=e,H0(t.priority,function(){B0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return e=Na(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function zg(t,e,n){Bl(t)&&n.delete(e)}function XS(){mf=!1,Pr!==null&&Bl(Pr)&&(Pr=null),kr!==null&&Bl(kr)&&(kr=null),Rr!==null&&Bl(Rr)&&(Rr=null),ta.forEach(zg),na.forEach(zg)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,XS)))}function ra(t){function e(i){return go(i,t)}if(0<_l.length){go(_l[0],t);for(var n=1;n<_l.length;n++){var r=_l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pr!==null&&go(Pr,t),kr!==null&&go(kr,t),Rr!==null&&go(Rr,t),ta.forEach(e),na.forEach(e),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&vr.shift()}var vs=sr.ReactCurrentBatchConfig,mu=!0;function JS(t,e,n,r){var i=de,s=vs.transition;vs.transition=null;try{de=1,Qd(t,e,n,r)}finally{de=i,vs.transition=s}}function ZS(t,e,n,r){var i=de,s=vs.transition;vs.transition=null;try{de=4,Qd(t,e,n,r)}finally{de=i,vs.transition=s}}function Qd(t,e,n,r){if(mu){var i=gf(t,e,n,r);if(i===null)gh(t,e,r,gu,n),Ug(t,r);else if(YS(i,t,e,n,r))r.stopPropagation();else if(Ug(t,r),e&4&&-1<QS.indexOf(t)){for(;i!==null;){var s=Na(i);if(s!==null&&z0(s),s=gf(t,e,n,r),s===null&&gh(t,e,r,gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gh(t,e,r,null,n)}}var gu=null;function gf(t,e,n,r){if(gu=null,t=Wd(r),t=hi(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gu=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(US()){case qd:return 1;case V0:return 4;case du:case zS:return 16;case F0:return 536870912;default:return 16}default:return 16}}var Sr=null,Yd=null,$l=null;function G0(){if($l)return $l;var t,e=Yd,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $l=i.slice(t,1<r?1-r:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Bg(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wl:Bg,this.isPropagationStopped=Bg,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=Ht(Hs),xa=xe({},Hs,{view:0,detail:0}),e2=Ht(xa),ah,lh,yo,rc=xe({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(ah=t.screenX-yo.screenX,lh=t.screenY-yo.screenY):lh=ah=0,yo=t),ah)},movementY:function(t){return"movementY"in t?t.movementY:lh}}),$g=Ht(rc),t2=xe({},rc,{dataTransfer:0}),n2=Ht(t2),r2=xe({},xa,{relatedTarget:0}),uh=Ht(r2),i2=xe({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),s2=Ht(i2),o2=xe({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a2=Ht(o2),l2=xe({},Hs,{data:0}),Hg=Ht(l2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=h2[t])?!!e[t]:!1}function Jd(){return f2}var d2=xe({},xa,{key:function(t){if(t.key){var e=u2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p2=Ht(d2),m2=xe({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Ht(m2),g2=xe({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),y2=Ht(g2),v2=xe({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_2=Ht(v2),w2=xe({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E2=Ht(w2),T2=[9,13,27,32],Zd=Kn&&"CompositionEvent"in window,Fo=null;Kn&&"documentMode"in document&&(Fo=document.documentMode);var I2=Kn&&"TextEvent"in window&&!Fo,K0=Kn&&(!Zd||Fo&&8<Fo&&11>=Fo),qg=" ",Gg=!1;function Q0(t,e){switch(t){case"keyup":return T2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function S2(t,e){switch(t){case"compositionend":return Y0(e);case"keypress":return e.which!==32?null:(Gg=!0,qg);case"textInput":return t=e.data,t===qg&&Gg?null:t;default:return null}}function A2(t,e){if(ts)return t==="compositionend"||!Zd&&Q0(t,e)?(t=G0(),$l=Yd=Sr=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K0&&e.locale!=="ko"?null:e.data;default:return null}}var C2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C2[t.type]:e==="textarea"}function X0(t,e,n,r){k0(r),e=yu(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,ia=null;function P2(t){lw(t,0)}function ic(t){var e=is(t);if(E0(e))return t}function k2(t,e){if(t==="change")return e}var J0=!1;if(Kn){var ch;if(Kn){var hh="oninput"in document;if(!hh){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),hh=typeof Qg.oninput=="function"}ch=hh}else ch=!1;J0=ch&&(!document.documentMode||9<document.documentMode)}function Yg(){jo&&(jo.detachEvent("onpropertychange",Z0),ia=jo=null)}function Z0(t){if(t.propertyName==="value"&&ic(ia)){var e=[];X0(e,ia,t,Wd(t)),b0(P2,e)}}function R2(t,e,n){t==="focusin"?(Yg(),jo=e,ia=n,jo.attachEvent("onpropertychange",Z0)):t==="focusout"&&Yg()}function x2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(ia)}function N2(t,e){if(t==="click")return ic(e)}function b2(t,e){if(t==="input"||t==="change")return ic(e)}function O2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:O2;function sa(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xh.call(e,i)||!fn(t[i],e[i]))return!1}return!0}function Xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jg(t,e){var n=Xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xg(n)}}function ew(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ew(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tw(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function L2(t){var e=tw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ew(n.ownerDocument.documentElement,n)){if(r!==null&&ep(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jg(n,s);var o=Jg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D2=Kn&&"documentMode"in document&&11>=document.documentMode,ns=null,yf=null,Uo=null,vf=!1;function Zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||ns==null||ns!==cu(r)||(r=ns,"selectionStart"in r&&ep(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&sa(Uo,r)||(Uo=r,r=yu(yf,"onSelect"),0<r.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ns)))}function El(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},fh={},nw={};Kn&&(nw=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function sc(t){if(fh[t])return fh[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nw)return fh[t]=e[n];return t}var rw=sc("animationend"),iw=sc("animationiteration"),sw=sc("animationstart"),ow=sc("transitionend"),aw=new Map,ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){aw.set(t,e),Di(e,[t])}for(var dh=0;dh<ey.length;dh++){var ph=ey[dh],M2=ph.toLowerCase(),V2=ph[0].toUpperCase()+ph.slice(1);Gr(M2,"on"+V2)}Gr(rw,"onAnimationEnd");Gr(iw,"onAnimationIteration");Gr(sw,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(ow,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Di("onBeforeInput",["compositionend","keypress","textInput","paste"]);Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function ty(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MS(r,e,void 0,t),t.currentTarget=null}function lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ty(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ty(i,l,c),s=u}}}if(fu)throw t=df,fu=!1,df=null,t}function we(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(uw(e,t,2,!1),n.add(r))}function mh(t,e,n){var r=0;e&&(r|=4),uw(n,t,r,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Tl]){t[Tl]=!0,g0.forEach(function(n){n!=="selectionchange"&&(F2.has(n)||mh(n,!1,t),mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,mh("selectionchange",!1,e))}}function uw(t,e,n,r){switch(q0(e)){case 1:var i=JS;break;case 4:i=ZS;break;default:i=Qd}n=i.bind(null,e,n,t),i=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=hi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}b0(function(){var c=s,f=Wd(n),d=[];e:{var m=aw.get(t);if(m!==void 0){var w=Xd,S=t;switch(t){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":w=p2;break;case"focusin":S="focus",w=uh;break;case"focusout":S="blur",w=uh;break;case"beforeblur":case"afterblur":w=uh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=$g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=y2;break;case rw:case iw:case sw:w=s2;break;case ow:w=_2;break;case"scroll":w=e2;break;case"wheel":w=E2;break;case"copy":case"cut":case"paste":w=a2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Wg}var k=(e&4)!==0,x=!k&&t==="scroll",_=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,I;y!==null;){I=y;var R=I.stateNode;if(I.tag===5&&R!==null&&(I=R,_!==null&&(R=ea(y,_),R!=null&&k.push(aa(y,R,I)))),x)break;y=y.return}0<k.length&&(m=new w(m,S,null,n,f),d.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==cf&&(S=n.relatedTarget||n.fromElement)&&(hi(S)||S[Qn]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?hi(S):null,S!==null&&(x=Mi(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(k=$g,R="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=Wg,R="onPointerLeave",_="onPointerEnter",y="pointer"),x=w==null?m:is(w),I=S==null?m:is(S),m=new k(R,y+"leave",w,n,f),m.target=x,m.relatedTarget=I,R=null,hi(f)===c&&(k=new k(_,y+"enter",S,n,f),k.target=I,k.relatedTarget=x,R=k),x=R,w&&S)t:{for(k=w,_=S,y=0,I=k;I;I=Gi(I))y++;for(I=0,R=_;R;R=Gi(R))I++;for(;0<y-I;)k=Gi(k),y--;for(;0<I-y;)_=Gi(_),I--;for(;y--;){if(k===_||_!==null&&k===_.alternate)break t;k=Gi(k),_=Gi(_)}k=null}else k=null;w!==null&&ny(d,m,w,k,!1),S!==null&&x!==null&&ny(d,x,S,k,!0)}}e:{if(m=c?is(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var O=k2;else if(Kg(m))if(J0)O=b2;else{O=x2;var D=R2}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=N2);if(O&&(O=O(t,c))){X0(d,O,n,f);break e}D&&D(t,m,c),t==="focusout"&&(D=m._wrapperState)&&D.controlled&&m.type==="number"&&sf(m,"number",m.value)}switch(D=c?is(c):window,t){case"focusin":(Kg(D)||D.contentEditable==="true")&&(ns=D,yf=c,Uo=null);break;case"focusout":Uo=yf=ns=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Zg(d,n,f);break;case"selectionchange":if(D2)break;case"keydown":case"keyup":Zg(d,n,f)}var A;if(Zd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ts?Q0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(K0&&n.locale!=="ko"&&(ts||g!=="onCompositionStart"?g==="onCompositionEnd"&&ts&&(A=G0()):(Sr=f,Yd="value"in Sr?Sr.value:Sr.textContent,ts=!0)),D=yu(c,g),0<D.length&&(g=new Hg(g,t,null,n,f),d.push({event:g,listeners:D}),A?g.data=A:(A=Y0(n),A!==null&&(g.data=A)))),(A=I2?S2(t,n):A2(t,n))&&(c=yu(c,"onBeforeInput"),0<c.length&&(f=new Hg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}lw(d,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ny(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ea(n,s),u!=null&&o.unshift(aa(n,u,l))):i||(u=ea(n,s),u!=null&&o.push(aa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j2=/\r\n?/g,U2=/\u0000|\uFFFD/g;function ry(t){return(typeof t=="string"?t:""+t).replace(j2,`
`).replace(U2,"")}function Il(t,e,n){if(e=ry(e),ry(t)!==e&&n)throw Error(z(425))}function vu(){}var _f=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,z2=typeof clearTimeout=="function"?clearTimeout:void 0,iy=typeof Promise=="function"?Promise:void 0,B2=typeof queueMicrotask=="function"?queueMicrotask:typeof iy<"u"?function(t){return iy.resolve(null).then(t).catch($2)}:Tf;function $2(t){setTimeout(function(){throw t})}function yh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),vn="__reactFiber$"+Ws,la="__reactProps$"+Ws,Qn="__reactContainer$"+Ws,If="__reactEvents$"+Ws,H2="__reactListeners$"+Ws,W2="__reactHandles$"+Ws;function hi(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sy(t);t!==null;){if(n=t[vn])return n;t=sy(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[vn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function oc(t){return t[la]||null}var Sf=[],ss=-1;function Kr(t){return{current:t}}function Ee(t){0>ss||(t.current=Sf[ss],Sf[ss]=null,ss--)}function ye(t,e){ss++,Sf[ss]=t.current,t.current=e}var jr={},mt=Kr(jr),Nt=Kr(!1),Ei=jr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function _u(){Ee(Nt),Ee(mt)}function oy(t,e,n){if(mt.current!==jr)throw Error(z(168));ye(mt,e),ye(Nt,n)}function cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,RS(t)||"Unknown",i));return xe({},n,r)}function wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,Ei=mt.current,ye(mt,t),ye(Nt,Nt.current),!0}function ay(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=cw(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,Ee(Nt),Ee(mt),ye(mt,t)):Ee(Nt),ye(Nt,n)}var Fn=null,ac=!1,vh=!1;function hw(t){Fn===null?Fn=[t]:Fn.push(t)}function q2(t){ac=!0,hw(t)}function Qr(){if(!vh&&Fn!==null){vh=!0;var t=0,e=de;try{var n=Fn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,ac=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),M0(qd,Qr),i}finally{de=e,vh=!1}}return null}var os=[],as=0,Eu=null,Tu=0,qt=[],Gt=0,Ti=null,jn=1,Un="";function ai(t,e){os[as++]=Tu,os[as++]=Eu,Eu=t,Tu=e}function fw(t,e,n){qt[Gt++]=jn,qt[Gt++]=Un,qt[Gt++]=Ti,Ti=t;var r=jn;t=Un;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-cn(e)+i|n<<i|r,Un=s+t}else jn=1<<s|n<<i|r,Un=t}function tp(t){t.return!==null&&(ai(t,1),fw(t,1,0))}function np(t){for(;t===Eu;)Eu=os[--as],os[as]=null,Tu=os[--as],os[as]=null;for(;t===Ti;)Ti=qt[--Gt],qt[Gt]=null,Un=qt[--Gt],qt[Gt]=null,jn=qt[--Gt],qt[Gt]=null}var zt=null,jt=null,Ce=!1,an=null;function dw(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ly(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,jt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:jn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,jt=null,!0):!1;default:return!1}}function Af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(Ce){var e=jt;if(e){var n=e;if(!ly(t,e)){if(Af(t))throw Error(z(418));e=xr(n.nextSibling);var r=zt;e&&ly(t,e)?dw(r,n):(t.flags=t.flags&-4097|2,Ce=!1,zt=t)}}else{if(Af(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ce=!1,zt=t}}}function uy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function Sl(t){if(t!==zt)return!1;if(!Ce)return uy(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=jt)){if(Af(t))throw pw(),Error(z(418));for(;e;)dw(t,e),e=xr(e.nextSibling)}if(uy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=zt?xr(t.stateNode.nextSibling):null;return!0}function pw(){for(var t=jt;t;)t=xr(t.nextSibling)}function ks(){jt=zt=null,Ce=!1}function rp(t){an===null?an=[t]:an.push(t)}var G2=sr.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Al(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cy(t){var e=t._init;return e(t._payload)}function mw(t){function e(_,y){if(t){var I=_.deletions;I===null?(_.deletions=[y],_.flags|=16):I.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Lr(_,y),_.index=0,_.sibling=null,_}function s(_,y,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<y?(_.flags|=2,y):I):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,y,I,R){return y===null||y.tag!==6?(y=Ah(I,_.mode,R),y.return=_,y):(y=i(y,I),y.return=_,y)}function u(_,y,I,R){var O=I.type;return O===es?f(_,y,I.props.children,R,I.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===gr&&cy(O)===y.type)?(R=i(y,I.props),R.ref=vo(_,y,I),R.return=_,R):(R=Xl(I.type,I.key,I.props,null,_.mode,R),R.ref=vo(_,y,I),R.return=_,R)}function c(_,y,I,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Ch(I,_.mode,R),y.return=_,y):(y=i(y,I.children||[]),y.return=_,y)}function f(_,y,I,R,O){return y===null||y.tag!==7?(y=vi(I,_.mode,R,O),y.return=_,y):(y=i(y,I),y.return=_,y)}function d(_,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ah(""+y,_.mode,I),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return I=Xl(y.type,y.key,y.props,null,_.mode,I),I.ref=vo(_,null,y),I.return=_,I;case Zi:return y=Ch(y,_.mode,I),y.return=_,y;case gr:var R=y._init;return d(_,R(y._payload),I)}if(Po(y)||fo(y))return y=vi(y,_.mode,I,null),y.return=_,y;Al(_,y)}return null}function m(_,y,I,R){var O=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return O!==null?null:l(_,y,""+I,R);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case pl:return I.key===O?u(_,y,I,R):null;case Zi:return I.key===O?c(_,y,I,R):null;case gr:return O=I._init,m(_,y,O(I._payload),R)}if(Po(I)||fo(I))return O!==null?null:f(_,y,I,R,null);Al(_,I)}return null}function w(_,y,I,R,O){if(typeof R=="string"&&R!==""||typeof R=="number")return _=_.get(I)||null,l(y,_,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case pl:return _=_.get(R.key===null?I:R.key)||null,u(y,_,R,O);case Zi:return _=_.get(R.key===null?I:R.key)||null,c(y,_,R,O);case gr:var D=R._init;return w(_,y,I,D(R._payload),O)}if(Po(R)||fo(R))return _=_.get(I)||null,f(y,_,R,O,null);Al(y,R)}return null}function S(_,y,I,R){for(var O=null,D=null,A=y,g=y=0,E=null;A!==null&&g<I.length;g++){A.index>g?(E=A,A=null):E=A.sibling;var C=m(_,A,I[g],R);if(C===null){A===null&&(A=E);break}t&&A&&C.alternate===null&&e(_,A),y=s(C,y,g),D===null?O=C:D.sibling=C,D=C,A=E}if(g===I.length)return n(_,A),Ce&&ai(_,g),O;if(A===null){for(;g<I.length;g++)A=d(_,I[g],R),A!==null&&(y=s(A,y,g),D===null?O=A:D.sibling=A,D=A);return Ce&&ai(_,g),O}for(A=r(_,A);g<I.length;g++)E=w(A,_,g,I[g],R),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?g:E.key),y=s(E,y,g),D===null?O=E:D.sibling=E,D=E);return t&&A.forEach(function(N){return e(_,N)}),Ce&&ai(_,g),O}function k(_,y,I,R){var O=fo(I);if(typeof O!="function")throw Error(z(150));if(I=O.call(I),I==null)throw Error(z(151));for(var D=O=null,A=y,g=y=0,E=null,C=I.next();A!==null&&!C.done;g++,C=I.next()){A.index>g?(E=A,A=null):E=A.sibling;var N=m(_,A,C.value,R);if(N===null){A===null&&(A=E);break}t&&A&&N.alternate===null&&e(_,A),y=s(N,y,g),D===null?O=N:D.sibling=N,D=N,A=E}if(C.done)return n(_,A),Ce&&ai(_,g),O;if(A===null){for(;!C.done;g++,C=I.next())C=d(_,C.value,R),C!==null&&(y=s(C,y,g),D===null?O=C:D.sibling=C,D=C);return Ce&&ai(_,g),O}for(A=r(_,A);!C.done;g++,C=I.next())C=w(A,_,g,C.value,R),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?g:C.key),y=s(C,y,g),D===null?O=C:D.sibling=C,D=C);return t&&A.forEach(function(b){return e(_,b)}),Ce&&ai(_,g),O}function x(_,y,I,R){if(typeof I=="object"&&I!==null&&I.type===es&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case pl:e:{for(var O=I.key,D=y;D!==null;){if(D.key===O){if(O=I.type,O===es){if(D.tag===7){n(_,D.sibling),y=i(D,I.props.children),y.return=_,_=y;break e}}else if(D.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===gr&&cy(O)===D.type){n(_,D.sibling),y=i(D,I.props),y.ref=vo(_,D,I),y.return=_,_=y;break e}n(_,D);break}else e(_,D);D=D.sibling}I.type===es?(y=vi(I.props.children,_.mode,R,I.key),y.return=_,_=y):(R=Xl(I.type,I.key,I.props,null,_.mode,R),R.ref=vo(_,y,I),R.return=_,_=R)}return o(_);case Zi:e:{for(D=I.key;y!==null;){if(y.key===D)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(_,y.sibling),y=i(y,I.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=Ch(I,_.mode,R),y.return=_,_=y}return o(_);case gr:return D=I._init,x(_,y,D(I._payload),R)}if(Po(I))return S(_,y,I,R);if(fo(I))return k(_,y,I,R);Al(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,I),y.return=_,_=y):(n(_,y),y=Ah(I,_.mode,R),y.return=_,_=y),o(_)):n(_,y)}return x}var Rs=mw(!0),gw=mw(!1),Iu=Kr(null),Su=null,ls=null,ip=null;function sp(){ip=ls=Su=null}function op(t){var e=Iu.current;Ee(Iu),t._currentValue=e}function Pf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){Su=t,ip=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(ip!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(Su===null)throw Error(z(308));ls=t,Su.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var fi=null;function ap(t){fi===null?fi=[t]:fi.push(t)}function yw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ap(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yn(t,n)}return i=r.interleaved,i===null?(e.next=e,ap(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yn(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}function hy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Au(t,e,n,r){var i=t.updateQueue;yr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,k=l;switch(m=e,w=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){d=S.call(w,d,m);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(w,d,m):S,m==null)break e;d=xe({},d,m);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,u=d):f=f.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Si|=o,t.lanes=o,t.memoizedState=d}}function fy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ba={},Tn=Kr(ba),ua=Kr(ba),ca=Kr(ba);function di(t){if(t===ba)throw Error(z(174));return t}function up(t,e){switch(ye(ca,e),ye(ua,t),ye(Tn,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}Ee(Tn),ye(Tn,e)}function xs(){Ee(Tn),Ee(ua),Ee(ca)}function _w(t){di(ca.current);var e=di(Tn.current),n=af(e,t.type);e!==n&&(ye(ua,t),ye(Tn,n))}function cp(t){ua.current===t&&(Ee(Tn),Ee(ua))}var ke=Kr(0);function Cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _h=[];function hp(){for(var t=0;t<_h.length;t++)_h[t]._workInProgressVersionPrimary=null;_h.length=0}var ql=sr.ReactCurrentDispatcher,wh=sr.ReactCurrentBatchConfig,Ii=0,Re=null,Be=null,Ke=null,Pu=!1,zo=!1,ha=0,K2=0;function lt(){throw Error(z(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function dp(t,e,n,r,i,s){if(Ii=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?J2:Z2,t=n(r,i),zo){s=0;do{if(zo=!1,ha=0,25<=s)throw Error(z(301));s+=1,Ke=Be=null,e.updateQueue=null,ql.current=eA,t=n(r,i)}while(zo)}if(ql.current=ku,e=Be!==null&&Be.next!==null,Ii=0,Ke=Be=Re=null,Pu=!1,e)throw Error(z(300));return t}function pp(){var t=ha!==0;return ha=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Zt(){if(Be===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ke===null?Re.memoizedState:Ke.next;if(e!==null)Ke=e,Be=t;else{if(t===null)throw Error(z(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function fa(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Ii&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=d,o=r):u=u.next=d,Re.lanes|=f,Si|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,fn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Th(t){var e=Zt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ww(){}function Ew(t,e){var n=Re,r=Zt(),i=e(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,mp(Sw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,da(9,Iw.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(z(349));Ii&30||Tw(n,e,i)}return i}function Tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iw(t,e,n,r){e.value=n,e.getSnapshot=r,Aw(e)&&Cw(t)}function Sw(t,e,n){return n(function(){Aw(e)&&Cw(t)})}function Aw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function Cw(t){var e=Yn(t,1);e!==null&&hn(e,t,1,-1)}function dy(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=X2.bind(null,Re,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pw(){return Zt().memoizedState}function Gl(t,e,n,r){var i=gn();Re.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function lc(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&fp(r,o.deps)){i.memoizedState=da(e,n,s,r);return}}Re.flags|=t,i.memoizedState=da(1|e,n,s,r)}function py(t,e){return Gl(8390656,8,t,e)}function mp(t,e){return lc(2048,8,t,e)}function kw(t,e){return lc(4,2,t,e)}function Rw(t,e){return lc(4,4,t,e)}function xw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nw(t,e,n){return n=n!=null?n.concat([t]):null,lc(4,4,xw.bind(null,e,t),n)}function gp(){}function bw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ow(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lw(t,e,n){return Ii&21?(fn(n,e)||(n=j0(),Re.lanes|=n,Si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function Q2(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=wh.transition;wh.transition={};try{t(!1),e()}finally{de=n,wh.transition=r}}function Dw(){return Zt().memoizedState}function Y2(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mw(t))Vw(e,n);else if(n=yw(t,e,n,r),n!==null){var i=It();hn(n,t,r,i),Fw(n,e,r)}}function X2(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mw(t))Vw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,o)){var u=e.interleaved;u===null?(i.next=i,ap(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=yw(t,e,i,r),n!==null&&(i=It(),hn(n,t,r,i),Fw(n,e,r))}}function Mw(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function Vw(t,e){zo=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}var ku={readContext:Jt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},J2={readContext:Jt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,xw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Y2.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:gp,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=Q2.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=gn();if(Ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Qe===null)throw Error(z(349));Ii&30||Tw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,py(Sw.bind(null,r,s,t),[t]),r.flags|=2048,da(9,Iw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=Qe.identifierPrefix;if(Ce){var n=Un,r=jn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=K2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z2={readContext:Jt,useCallback:bw,useContext:Jt,useEffect:mp,useImperativeHandle:Nw,useInsertionEffect:kw,useLayoutEffect:Rw,useMemo:Ow,useReducer:Eh,useRef:Pw,useState:function(){return Eh(fa)},useDebugValue:gp,useDeferredValue:function(t){var e=Zt();return Lw(e,Be.memoizedState,t)},useTransition:function(){var t=Eh(fa)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:Ew,useId:Dw,unstable_isNewReconciler:!1},eA={readContext:Jt,useCallback:bw,useContext:Jt,useEffect:mp,useImperativeHandle:Nw,useInsertionEffect:kw,useLayoutEffect:Rw,useMemo:Ow,useReducer:Th,useRef:Pw,useState:function(){return Th(fa)},useDebugValue:gp,useDeferredValue:function(t){var e=Zt();return Be===null?e.memoizedState=t:Lw(e,Be.memoizedState,t)},useTransition:function(){var t=Th(fa)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:Ew,useId:Dw,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Or(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(hn(e,t,i,r),Wl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Or(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(hn(e,t,i,r),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Or(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(hn(e,t,r,n),Wl(e,t,r))}};function my(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function jw(t,e,n){var r=!1,i=jr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=bt(e)?Ei:mt.current,r=e.contextTypes,s=(r=r!=null)?Ps(t,i):jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=bt(e)?Ei:mt.current,i.context=Ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&uc.enqueueReplaceState(i,i.state,null),Au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",r=e;do n+=kS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tA=typeof WeakMap=="function"?WeakMap:Map;function Uw(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xu||(xu=!0,Uf=r),xf(t,e)},n}function zw(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mA.bind(null,t,e,n),e.then(t,t))}function vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _y(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var nA=sr.ReactCurrentOwner,xt=!1;function Tt(t,e,n,r){e.child=t===null?gw(e,null,n,r):Rs(e,t.child,n,r)}function wy(t,e,n,r,i){n=n.render;var s=e.ref;return _s(e,i),r=dp(t,e,n,r,s,i),n=pp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ce&&n&&tp(e),e.flags|=1,Tt(t,e,r,i),e.child)}function Ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bw(t,e,s,r,i)):(t=Xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Nf(t,e,n,r,i)}function $w(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(cs,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(cs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(cs,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(cs,Vt),Vt|=r;return Tt(t,e,i,n),e.child}function Hw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,r,i){var s=bt(n)?Ei:mt.current;return s=Ps(e,s),_s(e,i),n=dp(t,e,n,r,s,i),r=pp(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ce&&r&&tp(e),e.flags|=1,Tt(t,e,n,i),e.child)}function Ty(t,e,n,r,i){if(bt(n)){var s=!0;wu(e)}else s=!1;if(_s(e,i),e.stateNode===null)Kl(t,e),jw(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=bt(n)?Ei:mt.current,c=Ps(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&gy(e,o,r,c),yr=!1;var m=e.memoizedState;o.state=m,Au(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Nt.current||yr?(typeof f=="function"&&(kf(e,n,f,r),u=e.memoizedState),(l=yr||my(e,n,l,r,m,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:sn(e.type,l),o.props=c,d=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=bt(n)?Ei:mt.current,u=Ps(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||m!==u)&&gy(e,o,r,u),yr=!1,m=e.memoizedState,o.state=m,Au(e,r,o,i);var S=e.memoizedState;l!==d||m!==S||Nt.current||yr?(typeof w=="function"&&(kf(e,n,w,r),S=e.memoizedState),(c=yr||my(e,n,c,r,m,S,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return bf(t,e,n,r,s,i)}function bf(t,e,n,r,i,s){Hw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ay(e,n,!1),Xn(t,e,s);r=e.stateNode,nA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,l,s)):Tt(t,e,l,s),e.memoizedState=r.state,i&&ay(e,n,!0),e.child}function Ww(t){var e=t.stateNode;e.pendingContext?oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&oy(t,e.context,!1),up(t,e.containerInfo)}function Iy(t,e,n,r,i){return ks(),rp(i),e.flags|=256,Tt(t,e,n,r),e.child}var Of={dehydrated:null,treeContext:null,retryLane:0};function Lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function qw(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(ke,i&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fc(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lf(n),e.memoizedState=Of,t):yp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Lr(l,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Of,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yp(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&rp(r),Rs(e,t.child,null,n),t=yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ih(Error(z(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fc({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=Lf(o),e.memoizedState=Of,s);if(!(e.mode&1))return Cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=Ih(s,r,void 0),Cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yn(t,i),hn(r,t,i,-1))}return Ip(),r=Ih(Error(z(421))),Cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=xr(i.nextSibling),zt=e,Ce=!0,an=null,t!==null&&(qt[Gt++]=jn,qt[Gt++]=Un,qt[Gt++]=Ti,jn=t.id,Un=t.overflow,Ti=e),e=yp(e,r.children),e.flags|=4096,e)}function Sy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pf(t.return,e,n)}function Sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sy(t,n,e);else if(t.tag===19)Sy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sh(e,!0,n,null,s);break;case"together":Sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iA(t,e,n){switch(e.tag){case 3:Ww(e),ks();break;case 5:_w(e);break;case 1:bt(e.type)&&wu(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?qw(t,e,n):(ye(ke,ke.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);ye(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,$w(t,e,n)}return Xn(t,e,n)}var Kw,Df,Qw,Yw;Kw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};Qw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,di(Tn.current);var s=null;switch(n){case"input":i=nf(t,i),r=nf(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=of(t,i),r=of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}lf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yw=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sA(t,e,n){var r=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return bt(e.type)&&_u(),ut(e),null;case 3:return r=e.stateNode,xs(),Ee(Nt),Ee(mt),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&($f(an),an=null))),Df(t,e),ut(e),null;case 5:cp(e);var i=di(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)Qw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ut(e),null}if(t=di(Tn.current),Sl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Ro.length;i++)we(Ro[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Og(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Dg(r,s),we("invalid",r)}lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Il(r.textContent,l,t),i=["children",""+l]):Jo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ml(r),Lg(r,s,!0);break;case"textarea":ml(r),Mg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[la]=r,Kw(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ro.length;i++)we(Ro[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Og(t,r),i=nf(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),we("invalid",t);break;case"textarea":Dg(t,r),i=of(t,r),we("invalid",t);break;default:i=r}lf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?P0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&A0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&zd(t,s,u,o))}switch(n){case"input":ml(t),Lg(t,r,!1);break;case"textarea":ml(t),Mg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)Yw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=di(ca.current),di(Tn.current),Sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:Il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return ut(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&jt!==null&&e.mode&1&&!(e.flags&128))pw(),ks(),e.flags|=98560,s=!1;else if(s=Sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[vn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else an!==null&&($f(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?We===0&&(We=3):Ip())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return xs(),Df(t,e),t===null&&oa(e.stateNode.containerInfo),ut(e),null;case 10:return op(e.type._context),ut(e),null;case 17:return bt(e.type)&&_u(),ut(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_o(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cu(t),o!==null){for(e.flags|=128,_o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>bs&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ut(e),null}else 2*je()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=ke.current,ye(ke,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Tp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function oA(t,e){switch(np(e),e.tag){case 1:return bt(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),Ee(Nt),Ee(mt),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cp(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return xs(),null;case 10:return op(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var Pl=!1,dt=!1,aA=typeof WeakSet=="function"?WeakSet:Set,H=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Mf(t,e,n){try{n()}catch(r){De(t,e,r)}}var Ay=!1;function lA(t,e){if(_f=mu,t=tw(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,d=t,m=null;t:for(;;){for(var w;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},mu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,x=S.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?k:sn(e.type,k),x);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(R){De(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=Ay,Ay=!1,S}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mf(e,n,s)}i=i.next}while(i!==r)}}function cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xw(t){var e=t.alternate;e!==null&&(t.alternate=null,Xw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[la],delete e[If],delete e[H2],delete e[W2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jw(t){return t.tag===5||t.tag===3||t.tag===4}function Cy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}var Ze=null,on=!1;function dr(t,e,n){for(n=n.child;n!==null;)Zw(t,e,n),n=n.sibling}function Zw(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(nc,n)}catch{}switch(n.tag){case 5:dt||us(n,e);case 6:var r=Ze,i=on;Ze=null,dr(t,e,n),Ze=r,on=i,Ze!==null&&(on?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(on?(t=Ze,n=n.stateNode,t.nodeType===8?yh(t.parentNode,n):t.nodeType===1&&yh(t,n),ra(t)):yh(Ze,n.stateNode));break;case 4:r=Ze,i=on,Ze=n.stateNode.containerInfo,on=!0,dr(t,e,n),Ze=r,on=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mf(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!dt&&(us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,dr(t,e,n),dt=r):dr(t,e,n);break;default:dr(t,e,n)}}function Py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aA),e.forEach(function(r){var i=yA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,on=!1;break e;case 3:Ze=l.stateNode.containerInfo,on=!0;break e;case 4:Ze=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(Ze===null)throw Error(z(160));Zw(s,o,i),Ze=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e1(e,t),e=e.sibling}function e1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),mn(t),r&4){try{Bo(3,t,t.return),cc(3,t)}catch(k){De(t,t.return,k)}try{Bo(5,t,t.return)}catch(k){De(t,t.return,k)}}break;case 1:rn(e,t),mn(t),r&512&&n!==null&&us(n,n.return);break;case 5:if(rn(e,t),mn(t),r&512&&n!==null&&us(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(k){De(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&T0(i,s),uf(l,o);var c=uf(l,s);for(o=0;o<u.length;o+=2){var f=u[o],d=u[o+1];f==="style"?P0(i,d):f==="dangerouslySetInnerHTML"?A0(i,d):f==="children"?Zo(i,d):zd(i,f,d,c)}switch(l){case"input":rf(i,s);break;case"textarea":I0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ms(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ms(i,!!s.multiple,s.defaultValue,!0):ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(k){De(t,t.return,k)}}break;case 6:if(rn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){De(t,t.return,k)}}break;case 3:if(rn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(k){De(t,t.return,k)}break;case 4:rn(e,t),mn(t);break;case 13:rn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=je())),r&4&&Py(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||f,rn(e,t),dt=c):rn(e,t),mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(d=H=f;H!==null;){switch(m=H,w=m.child,m.tag){case 0:case 11:case 14:case 15:Bo(4,m,m.return);break;case 1:us(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){De(r,n,k)}}break;case 5:us(m,m.return);break;case 22:if(m.memoizedState!==null){Ry(d);continue}}w!==null?(w.return=m,H=w):Ry(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=C0("display",o))}catch(k){De(t,t.return,k)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(k){De(t,t.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rn(e,t),mn(t),r&4&&Py(t);break;case 21:break;default:rn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jw(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=Cy(t);jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cy(t);Ff(t,l,o);break;default:throw Error(z(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uA(t,e,n){H=t,t1(t)}function t1(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||dt;l=Pl;var c=dt;if(Pl=o,(dt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?xy(i):u!==null?(u.return=o,H=u):xy(i);for(;s!==null;)H=s,t1(s),s=s.sibling;H=i,Pl=l,dt=c}ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ky(t)}}function ky(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||cc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}dt||e.flags&512&&Vf(e)}catch(m){De(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Ry(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function xy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cc(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Vf(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Vf(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var cA=Math.ceil,Ru=sr.ReactCurrentDispatcher,vp=sr.ReactCurrentOwner,Yt=sr.ReactCurrentBatchConfig,ae=0,Qe=null,ze=null,nt=0,Vt=0,cs=Kr(0),We=0,pa=null,Si=0,hc=0,_p=0,$o=null,Rt=null,wp=0,bs=1/0,Vn=null,xu=!1,Uf=null,br=null,kl=!1,Ar=null,Nu=0,Ho=0,zf=null,Ql=-1,Yl=0;function It(){return ae&6?je():Ql!==-1?Ql:Ql=je()}function Or(t){return t.mode&1?ae&2&&nt!==0?nt&-nt:G2.transition!==null?(Yl===0&&(Yl=j0()),Yl):(t=de,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function hn(t,e,n,r){if(50<Ho)throw Ho=0,zf=null,Error(z(185));Ra(t,n,r),(!(ae&2)||t!==Qe)&&(t===Qe&&(!(ae&2)&&(hc|=n),We===4&&_r(t,nt)),Ot(t,r),n===1&&ae===0&&!(e.mode&1)&&(bs=je()+500,ac&&Qr()))}function Ot(t,e){var n=t.callbackNode;GS(t,e);var r=pu(t,t===Qe?nt:0);if(r===0)n!==null&&jg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jg(n),e===1)t.tag===0?q2(Ny.bind(null,t)):hw(Ny.bind(null,t)),B2(function(){!(ae&6)&&Qr()}),n=null;else{switch(U0(r)){case 1:n=qd;break;case 4:n=V0;break;case 16:n=du;break;case 536870912:n=F0;break;default:n=du}n=u1(n,n1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n1(t,e){if(Ql=-1,Yl=0,ae&6)throw Error(z(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var r=pu(t,t===Qe?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bu(t,r);else{e=r;var i=ae;ae|=2;var s=i1();(Qe!==t||nt!==e)&&(Vn=null,bs=je()+500,yi(t,e));do try{dA();break}catch(l){r1(t,l)}while(!0);sp(),Ru.current=s,ae=i,ze!==null?e=0:(Qe=null,nt=0,e=We)}if(e!==0){if(e===2&&(i=pf(t),i!==0&&(r=i,e=Bf(t,i))),e===1)throw n=pa,yi(t,0),_r(t,r),Ot(t,je()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!hA(i)&&(e=bu(t,r),e===2&&(s=pf(t),s!==0&&(r=s,e=Bf(t,s))),e===1))throw n=pa,yi(t,0),_r(t,r),Ot(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:li(t,Rt,Vn);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=wp+500-je(),10<e)){if(pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tf(li.bind(null,t,Rt,Vn),e);break}li(t,Rt,Vn);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cA(r/1960))-r,10<r){t.timeoutHandle=Tf(li.bind(null,t,Rt,Vn),r);break}li(t,Rt,Vn);break;case 5:li(t,Rt,Vn);break;default:throw Error(z(329))}}}return Ot(t,je()),t.callbackNode===n?n1.bind(null,t):null}function Bf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=bu(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&$f(e)),t}function $f(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function hA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~_p,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function Ny(t){if(ae&6)throw Error(z(327));ws();var e=pu(t,0);if(!(e&1))return Ot(t,je()),null;var n=bu(t,e);if(t.tag!==0&&n===2){var r=pf(t);r!==0&&(e=r,n=Bf(t,r))}if(n===1)throw n=pa,yi(t,0),_r(t,e),Ot(t,je()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,Rt,Vn),Ot(t,je()),null}function Ep(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(bs=je()+500,ac&&Qr())}}function Ai(t){Ar!==null&&Ar.tag===0&&!(ae&6)&&ws();var e=ae;ae|=1;var n=Yt.transition,r=de;try{if(Yt.transition=null,de=1,t)return t()}finally{de=r,Yt.transition=n,ae=e,!(ae&6)&&Qr()}}function Tp(){Vt=cs.current,Ee(cs)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,z2(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:xs(),Ee(Nt),Ee(mt),hp();break;case 5:cp(r);break;case 4:xs();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:op(r.type._context);break;case 22:case 23:Tp()}n=n.return}if(Qe=t,ze=t=Lr(t.current,null),nt=Vt=e,We=0,pa=null,_p=hc=Si=0,Rt=$o=null,fi!==null){for(e=0;e<fi.length;e++)if(n=fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fi=null}return t}function r1(t,e){do{var n=ze;try{if(sp(),ql.current=ku,Pu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pu=!1}if(Ii=0,Ke=Be=Re=null,zo=!1,ha=0,vp.current=null,n===null||n.return===null){We=1,pa=e,ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=vy(o);if(w!==null){w.flags&=-257,_y(w,o,l,s,e),w.mode&1&&yy(s,c,e),e=w,u=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(u),e.updateQueue=k}else S.add(u);break e}else{if(!(e&1)){yy(s,c,e),Ip();break e}u=Error(z(426))}}else if(Ce&&l.mode&1){var x=vy(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),_y(x,o,l,s,e),rp(Ns(u,l));break e}}s=u=Ns(u,l),We!==4&&(We=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=Uw(s,u,e);hy(s,_);break e;case 1:l=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(br===null||!br.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var R=zw(s,l,e);hy(s,R);break e}}s=s.return}while(s!==null)}o1(n)}catch(O){e=O,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function i1(){var t=Ru.current;return Ru.current=ku,t===null?ku:t}function Ip(){(We===0||We===3||We===2)&&(We=4),Qe===null||!(Si&268435455)&&!(hc&268435455)||_r(Qe,nt)}function bu(t,e){var n=ae;ae|=2;var r=i1();(Qe!==t||nt!==e)&&(Vn=null,yi(t,e));do try{fA();break}catch(i){r1(t,i)}while(!0);if(sp(),ae=n,Ru.current=r,ze!==null)throw Error(z(261));return Qe=null,nt=0,We}function fA(){for(;ze!==null;)s1(ze)}function dA(){for(;ze!==null&&!FS();)s1(ze)}function s1(t){var e=l1(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?o1(t):ze=e,vp.current=null}function o1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oA(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,ze=null;return}}else if(n=sA(n,e,Vt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);We===0&&(We=5)}function li(t,e,n){var r=de,i=Yt.transition;try{Yt.transition=null,de=1,pA(t,e,n,r)}finally{Yt.transition=i,de=r}return null}function pA(t,e,n,r){do ws();while(Ar!==null);if(ae&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(KS(t,s),t===Qe&&(ze=Qe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,u1(du,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=de;de=1;var l=ae;ae|=4,vp.current=null,lA(t,n),e1(n,t),L2(wf),mu=!!_f,wf=_f=null,t.current=n,uA(n),jS(),ae=l,de=o,Yt.transition=s}else t.current=n;if(kl&&(kl=!1,Ar=t,Nu=i),s=t.pendingLanes,s===0&&(br=null),BS(n.stateNode),Ot(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,t=Uf,Uf=null,t;return Nu&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===zf?Ho++:(Ho=0,zf=t):Ho=0,Qr(),null}function ws(){if(Ar!==null){var t=U0(Nu),e=Yt.transition,n=de;try{if(Yt.transition=null,de=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Nu=0,ae&6)throw Error(z(331));var i=ae;for(ae|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Bo(8,f,s)}var d=f.child;if(d!==null)d.return=f,H=d;else for(;H!==null;){f=H;var m=f.sibling,w=f.return;if(Xw(f),f===c){H=null;break}if(m!==null){m.return=w,H=m;break}H=w}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,H=_;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:cc(9,l)}}catch(O){De(l,l.return,O)}if(l===o){H=null;break e}var R=l.sibling;if(R!==null){R.return=l.return,H=R;break e}H=l.return}}if(ae=i,Qr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(nc,t)}catch{}r=!0}return r}finally{de=n,Yt.transition=e}}return!1}function by(t,e,n){e=Ns(n,e),e=Uw(t,e,1),t=Nr(t,e,1),e=It(),t!==null&&(Ra(t,1,e),Ot(t,e))}function De(t,e,n){if(t.tag===3)by(t,t,n);else for(;e!==null;){if(e.tag===3){by(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Ns(n,t),t=zw(e,t,1),e=Nr(e,t,1),t=It(),e!==null&&(Ra(e,1,t),Ot(e,t));break}}e=e.return}}function mA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(nt&n)===n&&(We===4||We===3&&(nt&130023424)===nt&&500>je()-wp?yi(t,0):_p|=n),Ot(t,e)}function a1(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=It();t=Yn(t,e),t!==null&&(Ra(t,e,n),Ot(t,n))}function gA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a1(t,n)}function yA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),a1(t,n)}var l1;l1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,iA(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ce&&e.flags&1048576&&fw(e,Tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Kl(t,e),t=e.pendingProps;var i=Ps(e,mt.current);_s(e,n),i=dp(null,e,r,t,i,n);var s=pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lp(e),i.updater=uc,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=bf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&tp(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_A(r),t=sn(r,t),i){case 0:e=Nf(null,e,r,t,n);break e;case 1:e=Ty(null,e,r,t,n);break e;case 11:e=wy(null,e,r,t,n);break e;case 14:e=Ey(null,e,r,sn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Nf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Ty(t,e,r,i,n);case 3:e:{if(Ww(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vw(t,e),Au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ns(Error(z(423)),e),e=Iy(t,e,r,n,i);break e}else if(r!==i){i=Ns(Error(z(424)),e),e=Iy(t,e,r,n,i);break e}else for(jt=xr(e.stateNode.containerInfo.firstChild),zt=e,Ce=!0,an=null,n=gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=Xn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return _w(e),t===null&&Cf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ef(r,i)?o=null:s!==null&&Ef(r,s)&&(e.flags|=32),Hw(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return qw(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),wy(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Iu,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Wn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Pf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_s(e,n),i=Jt(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),Ey(t,e,r,i,n);case 15:return Bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),Kl(t,e),e.tag=1,bt(r)?(t=!0,wu(e)):t=!1,_s(e,n),jw(e,r,i),Rf(e,r,i,n),bf(null,e,r,!0,t,n);case 19:return Gw(t,e,n);case 22:return $w(t,e,n)}throw Error(z(156,e.tag))};function u1(t,e){return M0(t,e)}function vA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new vA(t,e,n,r)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _A(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===Hd)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return vi(n.children,i,s,e);case Bd:o=8,i|=8;break;case Jh:return t=Qt(12,n,e,i|2),t.elementType=Jh,t.lanes=s,t;case Zh:return t=Qt(13,n,e,i),t.elementType=Zh,t.lanes=s,t;case ef:return t=Qt(19,n,e,i),t.elementType=ef,t.lanes=s,t;case _0:return fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y0:o=10;break e;case v0:o=9;break e;case $d:o=11;break e;case Hd:o=14;break e;case gr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function fc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ah(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oh(0),this.expirationTimes=oh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,r,i,s,o,l,u){return t=new wA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function EA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function c1(t){if(!t)return jr;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(bt(n))return cw(t,n,e)}return e}function h1(t,e,n,r,i,s,o,l,u){return t=Ap(n,r,!0,t,i,s,o,l,u),t.context=c1(null),n=t.current,r=It(),i=Or(n),s=Wn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,Ra(t,i,r),Ot(t,r),t}function dc(t,e,n,r){var i=e.current,s=It(),o=Or(i);return n=c1(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(hn(t,i,o,s),Wl(t,i,o)),o}function Ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cp(t,e){Oy(t,e),(t=t.alternate)&&Oy(t,e)}function TA(){return null}var f1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}pc.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));dc(t,e,null,null)};pc.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ai(function(){dc(null,t,null,null)}),e[Qn]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&W0(t)}};function kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ly(){}function IA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ou(o);s.call(c)}}var o=h1(e,r,t,0,null,!1,!1,"",Ly);return t._reactRootContainer=o,t[Qn]=o.current,oa(t.nodeType===8?t.parentNode:t),Ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ou(u);l.call(c)}}var u=Ap(t,0,!1,null,null,!1,!1,"",Ly);return t._reactRootContainer=u,t[Qn]=u.current,oa(t.nodeType===8?t.parentNode:t),Ai(function(){dc(e,u,n,r)}),u}function gc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ou(o);l.call(u)}}dc(e,o,t,i)}else o=IA(n,e,t,i,r);return Ou(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(Gd(e,n|1),Ot(e,je()),!(ae&6)&&(bs=je()+500,Qr()))}break;case 13:Ai(function(){var r=Yn(t,1);if(r!==null){var i=It();hn(r,t,1,i)}}),Cp(t,1)}};Kd=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=It();hn(e,t,134217728,n)}Cp(t,134217728)}};B0=function(t){if(t.tag===13){var e=Or(t),n=Yn(t,e);if(n!==null){var r=It();hn(n,t,e,r)}Cp(t,e)}};$0=function(){return de};H0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};hf=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oc(r);if(!i)throw Error(z(90));E0(r),rf(r,i)}}}break;case"textarea":I0(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};x0=Ep;N0=Ai;var SA={usingClientEntryPoint:!1,Events:[Na,is,oc,k0,R0,Ep]},wo={findFiberByHostInstance:hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AA={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L0(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||TA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{nc=Rl.inject(AA),En=Rl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SA;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kp(e))throw Error(z(200));return EA(t,e,null,n)};$t.createRoot=function(t,e){if(!kp(t))throw Error(z(299));var n=!1,r="",i=f1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,r,i),t[Qn]=e.current,oa(t.nodeType===8?t.parentNode:t),new Pp(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=L0(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Ai(t)};$t.hydrate=function(t,e,n){if(!mc(e))throw Error(z(200));return gc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!kp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=f1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h1(e,null,t,1,n??null,i,!1,s,o),t[Qn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pc(e)};$t.render=function(t,e,n){if(!mc(e))throw Error(z(200));return gc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!mc(t))throw Error(z(40));return t._reactRootContainer?(Ai(function(){gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};$t.unstable_batchedUpdates=Ep;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return gc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function d1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d1)}catch(t){console.error(t)}}d1(),d0.exports=$t;var Rp=d0.exports,Dy=Rp;Yh.createRoot=Dy.createRoot,Yh.hydrateRoot=Dy.hydrateRoot;const CA="/neighborhood-value-plus/assets/logo_notext-CB4EPGfG.png",PA="/neighborhood-value-plus/assets/logo_text-BeXtmdLt.png";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function kA(t,e,n){return(e=xA(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function My(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?My(Object(n),!0).forEach(function(r){kA(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):My(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function RA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xA(t){var e=RA(t,"string");return typeof e=="symbol"?e:e+""}const Vy=()=>{};let xp={},p1={},m1=null,g1={mark:Vy,measure:Vy};try{typeof window<"u"&&(xp=window),typeof document<"u"&&(p1=document),typeof MutationObserver<"u"&&(m1=MutationObserver),typeof performance<"u"&&(g1=performance)}catch{}const{userAgent:Fy=""}=xp.navigator||{},Ur=xp,Te=p1,jy=m1,xl=g1;Ur.document;const or=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",y1=~Fy.indexOf("MSIE")||~Fy.indexOf("Trident/");var NA=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,bA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,v1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},OA={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],gt="classic",yc="duotone",LA="sharp",DA="sharp-duotone",w1=[gt,yc,LA,DA],MA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},VA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},FA=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),jA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},UA=["fak","fa-kit","fakd","fa-kit-duotone"],Uy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zA=["kit"],BA={kit:{"fa-kit":"fak"}},$A=["fak","fakd"],HA={kit:{fak:"fa-kit"}},zy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},WA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],qA=["fak","fa-kit","fakd","fa-kit-duotone"],GA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},KA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},QA={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Hf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},YA=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Wf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...WA,...YA],XA=["solid","regular","light","thin","duotone","brands"],E1=[1,2,3,4,5,6,7,8,9,10],JA=E1.concat([11,12,13,14,15,16,17,18,19,20]),ZA=[...Object.keys(QA),...XA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nl.GROUP,Nl.SWAP_OPACITY,Nl.PRIMARY,Nl.SECONDARY].concat(E1.map(t=>"".concat(t,"x"))).concat(JA.map(t=>"w-".concat(t))),eC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Jn="___FONT_AWESOME___",qf=16,T1="fa",I1="svg-inline--fa",Ci="data-fa-i2svg",Gf="data-fa-pseudo-element",tC="data-fa-pseudo-element-pending",Np="data-prefix",bp="data-icon",By="fontawesome-i2svg",nC="async",rC=["HTML","HEAD","STYLE","SCRIPT"],S1=(()=>{try{return!0}catch{return!1}})();function Oa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[gt]}})}const A1=U({},v1);A1[gt]=U(U(U(U({},{"fa-duotone":"duotone"}),v1[gt]),Uy.kit),Uy["kit-duotone"]);const iC=Oa(A1),Kf=U({},jA);Kf[gt]=U(U(U(U({},{duotone:"fad"}),Kf[gt]),zy.kit),zy["kit-duotone"]);const $y=Oa(Kf),Qf=U({},Hf);Qf[gt]=U(U({},Qf[gt]),HA.kit);const Op=Oa(Qf),Yf=U({},KA);Yf[gt]=U(U({},Yf[gt]),BA.kit);Oa(Yf);const sC=NA,C1="fa-layers-text",oC=bA,aC=U({},MA);Oa(aC);const lC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ph=OA,uC=[...zA,...ZA],Wo=Ur.FontAwesomeConfig||{};function cC(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Te&&typeof Te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=hC(cC(n));i!=null&&(Wo[r]=i)});const P1={styleDefault:"solid",familyDefault:gt,cssPrefix:T1,replacementClass:I1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wo.familyPrefix&&(Wo.cssPrefix=Wo.familyPrefix);const Os=U(U({},P1),Wo);Os.autoReplaceSvg||(Os.observeMutations=!1);const q={};Object.keys(P1).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){Os[t]=e,qo.forEach(n=>n(q))},get:function(){return Os[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){Os.cssPrefix=t,qo.forEach(e=>e(q))},get:function(){return Os.cssPrefix}});Ur.FontAwesomeConfig=q;const qo=[];function fC(t){return qo.push(t),()=>{qo.splice(qo.indexOf(t),1)}}const pr=qf,_n={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dC(t){if(!t||!or)return;const e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}const pC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ma(){let t=12,e="";for(;t-- >0;)e+=pC[Math.random()*62|0];return e}function qs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lp(t){return t.classList?qs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function k1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mC(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(k1(t[n]),'" '),"").trim()}function vc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Dp(t){return t.size!==_n.size||t.x!==_n.x||t.y!==_n.y||t.rotate!==_n.rotate||t.flipX||t.flipY}function gC(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function yC(t){let{transform:e,width:n=qf,height:r=qf,startCentered:i=!1}=t,s="";return i&&y1?s+="translate(".concat(e.x/pr-n/2,"em, ").concat(e.y/pr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/pr,"em), calc(-50% + ").concat(e.y/pr,"em)) "):s+="translate(".concat(e.x/pr,"em, ").concat(e.y/pr,"em) "),s+="scale(".concat(e.size/pr*(e.flipX?-1:1),", ").concat(e.size/pr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var vC=`:root, :host {
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
}`;function R1(){const t=T1,e=I1,n=q.cssPrefix,r=q.replacementClass;let i=vC;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let Hy=!1;function kh(){q.autoAddCss&&!Hy&&(dC(R1()),Hy=!0)}var _C={mixout(){return{dom:{css:R1,insertCss:kh}}},hooks(){return{beforeDOMElementCreation(){kh()},beforeI2svg(){kh()}}}};const Zn=Ur||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var wn=Zn[Jn];const x1=[],N1=function(){Te.removeEventListener("DOMContentLoaded",N1),Lu=1,x1.map(t=>t())};let Lu=!1;or&&(Lu=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Lu||Te.addEventListener("DOMContentLoaded",N1));function wC(t){or&&(Lu?setTimeout(t,0):x1.push(t))}function La(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?k1(t):"<".concat(e," ").concat(mC(n),">").concat(r.map(La).join(""),"</").concat(e,">")}function Wy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Rh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=l(f,e[c],c,e);return f};function EC(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Xf(t){const e=EC(t);return e.length===1?e[0].toString(16):null}function TC(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function qy(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Jf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=qy(e);typeof wn.hooks.addPack=="function"&&!r?wn.hooks.addPack(t,qy(e)):wn.styles[t]=U(U({},wn.styles[t]||{}),i),t==="fas"&&Jf("fa",e)}const{styles:ga,shims:IC}=wn,b1=Object.keys(Op),SC=b1.reduce((t,e)=>(t[e]=Object.keys(Op[e]),t),{});let Mp=null,O1={},L1={},D1={},M1={},V1={};function AC(t){return~uC.indexOf(t)}function CC(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!AC(i)?i:null}const F1=()=>{const t=r=>Rh(ga,(i,s,o)=>(i[o]=Rh(s,r,{}),i),{});O1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),L1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),V1=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in ga||q.autoFetchSvg,n=Rh(IC,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});D1=n.names,M1=n.unicodes,Mp=_c(q.styleDefault,{family:q.familyDefault})};fC(t=>{Mp=_c(t.styleDefault,{family:q.familyDefault})});F1();function Vp(t,e){return(O1[t]||{})[e]}function PC(t,e){return(L1[t]||{})[e]}function pi(t,e){return(V1[t]||{})[e]}function j1(t){return D1[t]||{prefix:null,iconName:null}}function kC(t){const e=M1[t],n=Vp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zr(){return Mp}const U1=()=>({prefix:null,iconName:null,rest:[]});function RC(t){let e=gt;const n=b1.reduce((r,i)=>(r[i]="".concat(q.cssPrefix,"-").concat(i),r),{});return w1.forEach(r=>{(t.includes(n[r])||t.some(i=>SC[r].includes(i)))&&(e=r)}),e}function _c(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=gt}=e,r=iC[n][t];if(n===yc&&!t)return"fad";const i=$y[n][t]||$y[n][r],s=t in wn.styles?t:null;return i||s||null}function xC(t){let e=[],n=null;return t.forEach(r=>{const i=CC(q.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function Gy(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function wc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=Wf.concat(qA),s=Gy(t.filter(d=>i.includes(d))),o=Gy(t.filter(d=>!Wf.includes(d))),l=s.filter(d=>(r=d,!_1.includes(d))),[u=null]=l,c=RC(s),f=U(U({},xC(o)),{},{prefix:_c(u,{family:c})});return U(U(U({},f),LC({values:t,family:c,styles:ga,config:q,canonical:f,givenPrefix:r})),NC(n,r,f))}function NC(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?j1(i):{},o=pi(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!ga.far&&ga.fas&&!q.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const bC=w1.filter(t=>t!==gt||t!==yc),OC=Object.keys(Hf).filter(t=>t!==gt).map(t=>Object.keys(Hf[t])).flat();function LC(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,l=n===yc,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(u||c||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&bC.includes(n)&&(Object.keys(s).find(m=>OC.includes(m))||o.autoFetchSvg)){const m=FA.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=pi(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=zr()||"fas"),r}class DC{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=U(U({},this.definitions[s]||{}),i[s]),Jf(s,i[s]);const o=Op[gt][s];o&&Jf(o,i[s]),F1()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let Ky=[],hs={};const Es={},MC=Object.keys(Es);function VC(t,e){let{mixoutsTo:n}=e;return Ky=t,hs={},Object.keys(Es).forEach(r=>{MC.indexOf(r)===-1&&delete Es[r]}),Ky.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{hs[o]||(hs[o]=[]),hs[o].push(s[o])})}r.provides&&r.provides(Es)}),n}function Zf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(hs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Pi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(hs[t]||[]).forEach(s=>{s.apply(null,n)})}function Br(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Es[t]?Es[t].apply(null,e):void 0}function ed(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||zr();if(e)return e=pi(n,e)||e,Wy(z1.definitions,n,e)||Wy(wn.styles,n,e)}const z1=new DC,FC=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,Pi("noAuto")},jC={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return or?(Pi("beforeI2svg",t),Br("pseudoElements2svg",t),Br("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,wC(()=>{zC({autoReplaceSvgRoot:e}),Pi("watch",t)})}},UC={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=_c(t[0]);return{prefix:n,iconName:pi(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(sC))){const e=wc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||zr(),iconName:pi(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=zr();return{prefix:e,iconName:pi(e,t)||t}}}},Wt={noAuto:FC,config:q,dom:jC,parse:UC,library:z1,findIconDefinition:ed,toHtml:La},zC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Te}=t;(Object.keys(wn.styles).length>0||q.autoFetchSvg)&&or&&q.autoReplaceSvg&&Wt.dom.i2svg({node:e})};function Ec(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>La(n))}}),Object.defineProperty(t,"node",{get:function(){if(!or)return;const n=Te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function BC(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Dp(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=vc(U(U({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $C(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:r}]}]}function Fp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:f,watchable:d=!1}=t,{width:m,height:w}=n.found?n:e,S=$A.includes(r),k=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(O=>f.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(f.classes).join(" ");let x={children:[],attributes:U(U({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(w)})};const _=S&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/w*16*.0625,"em")}:{};d&&(x.attributes[Ci]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||ma())},children:[l]}),delete x.attributes.title);const y=U(U({},x),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:U(U({},_),f.styles)}),{children:I,attributes:R}=n.found&&e.found?Br("generateAbstractMask",y)||{children:[],attributes:{}}:Br("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=R,o?$C(y):BC(y)}function Qy(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u=U(U(U({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Ci]="");const c=U({},o.styles);Dp(i)&&(c.transform=yC({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=vc(c);f.length>0&&(u.style=f);const d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function HC(t){const{content:e,title:n,extra:r}=t,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=vc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:xh}=wn;function td(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ph.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ph.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ph.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const WC={found:!1,width:512,height:512};function qC(t,e){!S1&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function nd(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=zr()),new Promise((r,i)=>{if(n==="fa"){const s=j1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&xh[e]&&xh[e][t]){const s=xh[e][t];return r(td(s))}qC(t,e),r(U(U({},WC),{},{icon:q.showMissingIcons&&t?Br("missingIconAbstract")||{}:{}}))})}const Yy=()=>{},rd=q.measurePerformance&&xl&&xl.mark&&xl.measure?xl:{mark:Yy,measure:Yy},xo='FA "6.7.2"',GC=t=>(rd.mark("".concat(xo," ").concat(t," begins")),()=>B1(t)),B1=t=>{rd.mark("".concat(xo," ").concat(t," ends")),rd.measure("".concat(xo," ").concat(t),"".concat(xo," ").concat(t," begins"),"".concat(xo," ").concat(t," ends"))};var jp={begin:GC,end:B1};const Jl=()=>{};function Xy(t){return typeof(t.getAttribute?t.getAttribute(Ci):null)=="string"}function KC(t){const e=t.getAttribute?t.getAttribute(Np):null,n=t.getAttribute?t.getAttribute(bp):null;return e&&n}function QC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function YC(){return q.autoReplaceSvg===!0?Zl.replace:Zl[q.autoReplaceSvg]||Zl.replace}function XC(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function JC(t){return Te.createElement(t)}function $1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?XC:JC}=e;if(typeof t=="string")return Te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild($1(s,{ceFn:n}))}),r}function ZC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Zl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($1(n),e)}),e.getAttribute(Ci)===null&&q.keepOriginalSource){let n=Te.createComment(ZC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Lp(e).indexOf(q.replacementClass))return Zl.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===q.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>La(s)).join(`
`);e.setAttribute(Ci,""),e.innerHTML=i}};function Jy(t){t()}function H1(t,e){const n=typeof e=="function"?e:Jl;if(t.length===0)n();else{let r=Jy;q.mutateApproach===nC&&(r=Ur.requestAnimationFrame||Jy),r(()=>{const i=YC(),s=jp.begin("mutate");t.map(i),s(),n()})}}let Up=!1;function W1(){Up=!0}function id(){Up=!1}let Du=null;function Zy(t){if(!jy||!q.observeMutations)return;const{treeCallback:e=Jl,nodeCallback:n=Jl,pseudoElementsCallback:r=Jl,observeMutationsRoot:i=Te}=t;Du=new jy(s=>{if(Up)return;const o=zr();qs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Xy(l.addedNodes[0])&&(q.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&q.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Xy(l.target)&&~lC.indexOf(l.attributeName))if(l.attributeName==="class"&&KC(l.target)){const{prefix:u,iconName:c}=wc(Lp(l.target));l.target.setAttribute(Np,u||o),c&&l.target.setAttribute(bp,c)}else QC(l.target)&&n(l.target)})}),or&&Du.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function eP(){Du&&Du.disconnect()}function tP(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function nP(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=wc(Lp(t));return i.prefix||(i.prefix=zr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=PC(i.prefix,t.innerText)||Vp(i.prefix,Xf(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function rP(t){const e=qs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||ma()):(e["aria-hidden"]="true",e.focusable="false")),e}function iP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_n,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ev(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=nP(t),s=rP(t),o=Zf("parseNodeAttributes",{},t);let l=e.styleParser?tP(t):[];return U({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_n,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}const{styles:sP}=wn;function q1(t){const e=q.autoReplaceSvg==="nest"?ev(t,{styleParser:!1}):ev(t);return~e.extra.classes.indexOf(C1)?Br("generateLayersText",t,e):Br("generateSvgReplacementMutation",t,e)}function oP(){return[...UA,...Wf]}function tv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!or)return Promise.resolve();const n=Te.documentElement.classList,r=f=>n.add("".concat(By,"-").concat(f)),i=f=>n.remove("".concat(By,"-").concat(f)),s=q.autoFetchSvg?oP():_1.concat(Object.keys(sP));s.includes("fa")||s.push("fa");const o=[".".concat(C1,":not([").concat(Ci,"])")].concat(s.map(f=>".".concat(f,":not([").concat(Ci,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=qs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=jp.begin("onTree"),c=l.reduce((f,d)=>{try{const m=q1(d);m&&f.push(m)}catch(m){S1||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,d)=>{Promise.all(c).then(m=>{H1(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(m=>{u(),d(m)})})}function aP(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q1(t).then(n=>{n&&H1([n],e)})}function lP(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ed(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ed(i||{})),t(r,U(U({},n),{},{mask:i}))}}const uP=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_n,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:w}=t;return Ec(U({type:"icon"},t),()=>(Pi("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(l||ma()):(c["aria-hidden"]="true",c.focusable="false")),Fp({icons:{main:td(w),mask:i?td(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:U(U({},_n),n),symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:f,classes:u}})))};var cP={mixout(){return{icon:lP(uP)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=tv,t.nodeCallback=aP,t}}},provides(t){t.i2svg=function(e){const{node:n=Te,callback:r=()=>{}}=e;return tv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:f,extra:d}=n;return new Promise((m,w)=>{Promise.all([nd(r,o),c.iconName?nd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[k,x]=S;m([e,Fp({icons:{main:k,mask:x},prefix:o,iconName:r,transform:l,symbol:u,maskId:f,title:i,titleId:s,extra:d,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=vc(o);l.length>0&&(r.style=l);let u;return Dp(s)&&(u=Br("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},hP={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ec({type:"layer"},()=>{Pi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},fP={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Ec({type:"counter",content:t},()=>(Pi("beforeDOMElementCreation",{content:t,params:e}),HC({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},dP={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_n,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Ec({type:"text",content:t},()=>(Pi("beforeDOMElementCreation",{content:t,params:e}),Qy({content:t,transform:U(U({},_n),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(y1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Qy({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const pP=new RegExp('"',"ug"),nv=[1105920,1112319],rv=U(U(U(U({},{FontAwesome:{normal:"fas",400:"fas"}}),VA),eC),GA),sd=Object.keys(rv).reduce((t,e)=>(t[e.toLowerCase()]=rv[e],t),{}),mP=Object.keys(sd).reduce((t,e)=>{const n=sd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function gP(t){const e=t.replace(pP,""),n=TC(e,0),r=n>=nv[0]&&n<=nv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Xf(i?e[0]:e),isSecondary:r||i}}function yP(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(sd[n]||{})[i]||mP[n]}function iv(t,e){const n="".concat(tC).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=qs(t.children).filter(m=>m.getAttribute(Gf)===e)[0],l=Ur.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(oC),f=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&d!=="none"&&d!==""){const m=l.getPropertyValue("content");let w=yP(u,f);const{value:S,isSecondary:k}=gP(m),x=c[0].startsWith("FontAwesome");let _=Vp(w,S),y=_;if(x){const I=kC(S);I.iconName&&I.prefix&&(_=I.iconName,w=I.prefix)}if(_&&!k&&(!o||o.getAttribute(Np)!==w||o.getAttribute(bp)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=iP(),{extra:R}=I;R.attributes[Gf]=e,nd(_,w).then(O=>{const D=Fp(U(U({},I),{},{icons:{main:O,mask:U1()},prefix:w,iconName:y,extra:R,watchable:!0})),A=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=D.map(g=>La(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function vP(t){return Promise.all([iv(t,"::before"),iv(t,"::after")])}function _P(t){return t.parentNode!==document.head&&!~rC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sv(t){if(or)return new Promise((e,n)=>{const r=qs(t.querySelectorAll("*")).filter(_P).map(vP),i=jp.begin("searchPseudoElements");W1(),Promise.all(r).then(()=>{i(),id(),e()}).catch(()=>{i(),id(),n()})})}var wP={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=sv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Te}=e;q.searchPseudoElements&&sv(n)}}};let ov=!1;var EP={mixout(){return{dom:{unwatch(){W1(),ov=!0}}}},hooks(){return{bootstrap(){Zy(Zf("mutationObserverCallbacks",{}))},noAuto(){eP()},watch(t){const{observeMutationsRoot:e}=t;ov?id():Zy(Zf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const av=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var TP={mixout(){return{parse:{transform:t=>av(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=av(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:d};return{tag:"g",attributes:U({},m.outer),children:[{tag:"g",attributes:U({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:U(U({},n.icon.attributes),m.path)}]}]}}}};const Nh={x:0,y:0,width:"100%",height:"100%"};function lv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function IP(t){return t.tag==="g"?t.children:[t]}var SP={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?wc(n.split(" ").map(i=>i.trim())):U1();return r.prefix||(r.prefix=zr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:f,icon:d}=s,m=gC({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:U(U({},Nh),{},{fill:"white"})},S=c.children?{children:c.children.map(lv)}:{},k={tag:"g",attributes:U({},m.inner),children:[lv(U({tag:c.tag,attributes:U(U({},c.attributes),m.path)},S))]},x={tag:"g",attributes:U({},m.outer),children:[k]},_="mask-".concat(o||ma()),y="clip-".concat(o||ma()),I={tag:"mask",attributes:U(U({},Nh),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:IP(d)},I]};return n.push(R,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Nh)}),{children:n,attributes:r}}}},AP={provides(t){let e=!1;Ur.matchMedia&&(e=Ur.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=U(U({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:U(U({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:U(U({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},CP={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},PP=[_C,cP,hP,fP,dP,wP,EP,TP,SP,AP,CP];VC(PP,{mixoutsTo:Wt});Wt.noAuto;Wt.config;Wt.library;Wt.dom;const od=Wt.parse;Wt.findIconDefinition;Wt.toHtml;const kP=Wt.icon;Wt.layer;Wt.text;Wt.counter;var G1={exports:{}},RP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xP=RP,NP=xP;function K1(){}function Q1(){}Q1.resetWarningCache=K1;var bP=function(){function t(r,i,s,o,l,u){if(u!==NP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Q1,resetWarningCache:K1};return n.PropTypes=n,n};G1.exports=bP();var OP=G1.exports;const ne=t0(OP);function uv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function yn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?uv(Object(n),!0).forEach(function(r){fs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):uv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mu(t){"@babel/helpers - typeof";return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mu(t)}function fs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DP(t,e){if(t==null)return{};var n=LP(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ad(t){return MP(t)||VP(t)||FP(t)||jP()}function MP(t){if(Array.isArray(t))return ld(t)}function VP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function FP(t,e){if(t){if(typeof t=="string")return ld(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ld(t,e)}}function ld(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UP(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,d=t.pulse,m=t.fixedWidth,w=t.inverse,S=t.border,k=t.listItem,x=t.flip,_=t.size,y=t.rotation,I=t.pull,R=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":m,"fa-inverse":w,"fa-border":S,"fa-li":k,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},fs(e,"fa-".concat(_),typeof _<"u"&&_!==null),fs(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),fs(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),fs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(R).map(function(O){return R[O]?O:null}).filter(function(O){return O})}function zP(t){return t=t-0,t===t}function Y1(t){return zP(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var BP=["style"];function $P(t){return t.charAt(0).toUpperCase()+t.slice(1)}function HP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Y1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[$P(i)]=s:e[i]=s,e},{})}function X1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return X1(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=HP(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[Y1(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=DP(n,BP);return i.attrs.style=yn(yn({},i.attrs.style),o),t.apply(void 0,[e.tag,yn(yn({},i.attrs),l)].concat(ad(r)))}var J1=!1;try{J1=!0}catch{}function WP(){if(!J1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function cv(t){if(t&&Mu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(od.icon)return od.icon(t);if(t===null)return null;if(t&&Mu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function bh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fs({},t,e):{}}var hv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$e=Fd.forwardRef(function(t,e){var n=yn(yn({},hv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,f=cv(r),d=bh("classes",[].concat(ad(UP(n)),ad((o||"").split(" ")))),m=bh("transform",typeof n.transform=="string"?od.transform(n.transform):n.transform),w=bh("mask",cv(i)),S=kP(f,yn(yn(yn(yn({},d),m),w),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!S)return WP("Could not find icon",f),null;var k=S.abstract,x={ref:e};return Object.keys(n).forEach(function(_){hv.hasOwnProperty(_)||(x[_]=n[_])}),qP(k[0],x)});$e.displayName="FontAwesomeIcon";$e.propTypes={beat:ne.bool,border:ne.bool,beatFade:ne.bool,bounce:ne.bool,className:ne.string,fade:ne.bool,flash:ne.bool,mask:ne.oneOfType([ne.object,ne.array,ne.string]),maskId:ne.string,fixedWidth:ne.bool,inverse:ne.bool,flip:ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ne.oneOfType([ne.object,ne.array,ne.string]),listItem:ne.bool,pull:ne.oneOf(["right","left"]),pulse:ne.bool,rotation:ne.oneOf([0,90,180,270]),shake:ne.bool,size:ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ne.bool,spinPulse:ne.bool,spinReverse:ne.bool,symbol:ne.oneOfType([ne.bool,ne.string]),title:ne.string,titleId:ne.string,transform:ne.oneOfType([ne.string,ne.object]),swapOpacity:ne.bool};var qP=X1.bind(null,Fd.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const GP={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},fv={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},KP={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},QP={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},YP={prefix:"fas",iconName:"seedling",icon:[512,512,[127793,"sprout"],"f4d8","M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]},XP={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},JP={prefix:"fas",iconName:"wrench",icon:[512,512,[128295],"f0ad","M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},ZP={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},ek={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},tk=ek,nk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},rk=nk,ik={prefix:"fas",iconName:"handshake-angle",icon:[640,512,["hands-helping"],"f4c4","M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"]},sk=ik,ok={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},dv=ok,ak={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},lk=ak,pv={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},uk={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},ck={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ki=ck,hk={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},fk={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},dk={prefix:"fas",iconName:"broom",icon:[576,512,[129529],"f51a","M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"]},pk={prefix:"fas",iconName:"dice",icon:[640,512,[127922],"f522","M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},mk=({onClose:t,onLocationSelect:e})=>{const[n,r]=V.useState(""),[i,s]=V.useState([]),[o,l]=V.useState(!1),[u,c]=V.useState(null),f=V.useRef(null);V.useEffect(()=>{if(n.trim().length<3){s([]);return}return f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{d(n)},300),()=>{f.current&&clearTimeout(f.current)}},[n]);const d=async S=>{if(S.trim()){l(!0),c(null);try{const x=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(S)}.json?access_token=pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ&proximity=-122.5715,45.498&bbox=-122.8,45.4,-122.3,45.6&limit=5&types=address,poi,place&country=US`);if(!x.ok)throw new Error("Search request failed");const _=await x.json();s(_.features||[])}catch(k){console.error("Geocoding error:",k),c("Failed to search addresses. Please try again."),s([])}finally{l(!1)}}},m=S=>{const[k,x]=S.center;e&&e({longitude:k,latitude:x,zoom:16,address:S.place_name}),t()},w=()=>{r(""),s([]),c(null)};return T.jsxs("div",{className:"header-panel search-panel",children:[T.jsxs("div",{className:"panel-header",children:[T.jsx("h3",{children:"Search Addresses"}),T.jsx("button",{className:"close-btn",onClick:t,children:T.jsx($e,{icon:ki})})]}),T.jsxs("div",{className:"panel-content",children:[T.jsx("div",{className:"search-container",children:T.jsxs("div",{className:"search-input-wrapper",children:[T.jsx("input",{type:"text",value:n,onChange:S=>r(S.target.value),placeholder:"Search for a place or address...",className:"search-input",autoFocus:!0}),n&&T.jsx("button",{className:"clear-search-btn",onClick:w,"aria-label":"Clear search",children:T.jsx($e,{icon:ki})}),o&&T.jsx("div",{className:"search-loading",children:T.jsx($e,{icon:hk,spin:!0})})]})}),u&&T.jsx("div",{className:"search-error",children:u}),T.jsxs("div",{className:"search-results",children:[i.length>0&&T.jsx("div",{className:"results-header",children:T.jsxs("span",{children:["Found ",i.length," result",i.length!==1?"s":""]})}),i.map((S,k)=>{var x;return T.jsxs("div",{className:"search-result-item",onClick:()=>m(S),children:[T.jsx("div",{className:"result-icon",children:T.jsx($e,{icon:dv})}),T.jsxs("div",{className:"result-content",children:[T.jsx("div",{className:"result-name",children:S.text}),T.jsx("div",{className:"result-address",children:S.place_name}),((x=S.properties)==null?void 0:x.category)&&T.jsx("div",{className:"result-category",children:S.properties.category})]})]},`${S.id}-${k}`)}),n.trim().length>=3&&i.length===0&&!o&&!u&&T.jsxs("div",{className:"no-results",children:[T.jsx($e,{icon:dv}),T.jsxs("p",{children:['No results found for "',n,'"']}),T.jsx("p",{className:"no-results-hint",children:"Try searching for a street address, business name, or landmark"})]})]})]})]})},Eo=[{id:"lawn-restoration",name:"Lawn Restoration",color:"#008000",icon:YP},{id:"sidewalk-repair",name:"Sidewalk Repair",color:"#808080",icon:JP},{id:"homeless-outreach",name:"Homeless Outreach",color:"#FFA500",icon:sk},{id:"legacy-sponsored",name:"Legacy Sponsored Block",color:"#FFD700",icon:QP},{id:"lifestyle-lottery",name:"Lifestyle Lottery Winner",color:"#800080",icon:pk},{id:"neighborhood-history",name:"Neighborhood History",color:"#0000FF",icon:tk},{id:"home-for-sale",name:"Home For Sale",color:"#008080",icon:rk},{id:"overnight-patrol",name:"Overnight Patrol",color:"#000080",icon:fk},{id:"vacant-home-cleanup",name:"Vacant Home Cleanup",color:"#800000",icon:dk},{id:"trash-debris",name:"Trash or Debris Dump Site",color:"#000000",icon:ZP},{id:"overgrown-vegetation",name:"Overgrown Bushes or Trees",color:"#228B22",icon:GP}],Ki=[{id:"powellhurst-gilbert",name:"Powellhurst-Gilbert"},{id:"lents",name:"Lents"},{id:"foster-powell",name:"Foster-Powell"},{id:"mt-scott-arleta",name:"Mt. Scott-Arleta"},{id:"brentwood-darlington",name:"Brentwood-Darlington"},{id:"woodstock",name:"Woodstock"},{id:"gilbert",name:"Gilbert"},{id:"pleasant-valley",name:"Pleasant Valley"},{id:"centennial",name:"Centennial"},{id:"mill-park",name:"Mill Park"},{id:"south-tabor",name:"South Tabor"}],gk=({onClose:t,onFiltersChange:e,initialFilters:n})=>{var I,R;const[r,i]=V.useState((I=n==null?void 0:n.selectedNeighborhoods)!=null&&I.length?n.selectedNeighborhoods:Ki.map(O=>O.name)),[s,o]=V.useState((R=n==null?void 0:n.selectedServiceTypes)!=null&&R.length?n.selectedServiceTypes:Eo.map(O=>O.name)),[l,u]=V.useState(!0),[c,f]=V.useState(!0),d=()=>{l?(u(!1),f(!0)):u(!0)},m=()=>{c?(f(!1),u(!0)):f(!0)},w=O=>{var A;const D=(A=Ki.find(g=>g.id===O))==null?void 0:A.name;D&&i(g=>g.includes(D)?g.filter(E=>E!==D):[...g,D])},S=O=>{o(D=>D.includes(O)?D.filter(A=>A!==O):[...D,O])},k=()=>{i(Ki.map(O=>O.name))},x=()=>{o(Eo.map(O=>O.name))},_=()=>{e({selectedNeighborhoods:r,selectedServiceTypes:s})},y=()=>{i(Ki.map(D=>D.name)),o(Eo.map(D=>D.name));const O={selectedNeighborhoods:Ki.map(D=>D.name),selectedServiceTypes:Eo.map(D=>D.name)};e(O)};return T.jsxs("div",{className:"header-panel filter-panel",children:[T.jsxs("div",{className:"panel-header",children:[T.jsx("h3",{children:"Filter Options"}),T.jsx("button",{className:"close-btn",onClick:t,children:T.jsx($e,{icon:ki})})]}),T.jsxs("div",{className:"panel-content",children:[T.jsxs("div",{className:"filter-section",children:[T.jsxs("div",{className:"filter-section-header",children:[T.jsx("h4",{children:"Neighborhoods"}),T.jsxs("span",{className:"filter-count",children:["(",r.length,")"]}),T.jsx("button",{className:"collapse-btn",onClick:d,children:T.jsx($e,{icon:l?pv:fv})})]}),T.jsxs("div",{className:"filter-section-controls",children:[T.jsx("button",{className:"select-all-btn",onClick:k,children:"Select All"}),T.jsx("button",{className:"unselect-all-btn",onClick:()=>i([]),children:"Unselect All"})]}),!l&&T.jsx("div",{className:"filter-options neighborhoods-scroll",children:Ki.map(O=>T.jsxs("label",{children:[T.jsx("input",{type:"checkbox",checked:r.includes(O.name),onChange:()=>w(O.id)}),O.name]},O.id))})]}),T.jsxs("div",{className:"filter-section",children:[T.jsxs("div",{className:"filter-section-header",children:[T.jsx("h4",{children:"Service Types"}),T.jsxs("span",{className:"filter-count",children:["(",s.length,")"]}),T.jsx("button",{className:"collapse-btn",onClick:m,children:T.jsx($e,{icon:c?pv:fv})})]}),T.jsxs("div",{className:"filter-section-controls",children:[T.jsx("button",{className:"select-all-btn",onClick:x,children:"Select All"}),T.jsx("button",{className:"unselect-all-btn",onClick:()=>o([]),children:"Unselect All"})]}),!c&&T.jsx("div",{className:"service-types-scroll",children:T.jsx("div",{className:"service-type-buttons",children:Eo.map(O=>{const D=s.includes(O.name);return T.jsx("button",{className:`service-type-btn ${D?"selected":""}`,style:{backgroundColor:D?O.color:"white",borderColor:O.color,color:D?"white":"black"},onClick:()=>S(O.name),title:O.name,children:T.jsx($e,{icon:O.icon,className:"service-icon"})},O.id)})})})]}),T.jsxs("div",{className:"filter-actions",children:[T.jsx("button",{className:"apply-filters-btn",onClick:_,children:"Apply Filters"}),T.jsx("button",{className:"clear-filters-btn",onClick:y,children:"Clear Filters"})]})]})]})};var mv={};/**
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
 */const Z1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},eE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,d=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[f],n[d],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new vk;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),d!==64){const S=c<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _k=function(t){const e=Z1(t);return eE.encodeByteArray(e,!0)},Vu=function(t){return _k(t).replace(/\./g,"")},tE=function(t){try{return eE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ek=()=>wk().__FIREBASE_DEFAULTS__,Tk=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ik=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tE(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return Ek()||Tk()||Ik()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nE=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rE=t=>{const e=nE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iE=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},sE=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Sk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vu(JSON.stringify(n)),Vu(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ak(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Ck(){var t;const e=(t=Tc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xk(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nk(){return!Ck()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bk(){try{return typeof indexedDB=="object"}catch{return!1}}function Ok(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Lk="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lk,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Da.prototype.create)}}class Da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Dk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,l,r)}}function Dk(t,e){return t.replace(Mk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Mk=/\{\$([^}]+)}/g;function Vk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gv(s)&&gv(o)){if(!Fu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function No(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fk(t,e){const n=new jk(t,e);return n.subscribe.bind(n)}class jk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Oh),i.error===void 0&&(i.error=Oh),i.complete===void 0&&(i.complete=Oh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oh(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ui="[DEFAULT]";/**
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
 */class zk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($k(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bk(t){return t===ui?void 0:t}function $k(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Wk={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},qk=se.INFO,Gk={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Kk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Gk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zp{constructor(e){this.name=e,this._logLevel=qk,this._logHandler=Kk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Qk=(t,e)=>e.some(n=>t instanceof n);let yv,vv;function Yk(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xk(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aE=new WeakMap,ud=new WeakMap,lE=new WeakMap,Lh=new WeakMap,Bp=new WeakMap;function Jk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aE.set(n,t)}).catch(()=>{}),Bp.set(e,t),e}function Zk(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eR(t){cd=t(cd)}function tR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dh(this),e,...n);return lE.set(r,e.sort?e.sort():[e]),Dr(r)}:Xk().includes(t)?function(...e){return t.apply(Dh(this),e),Dr(aE.get(this))}:function(...e){return Dr(t.apply(Dh(this),e))}}function nR(t){return typeof t=="function"?tR(t):(t instanceof IDBTransaction&&Zk(t),Qk(t,Yk())?new Proxy(t,cd):t)}function Dr(t){if(t instanceof IDBRequest)return Jk(t);if(Lh.has(t))return Lh.get(t);const e=nR(t);return e!==t&&(Lh.set(t,e),Bp.set(e,t)),e}const Dh=t=>Bp.get(t);function rR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const iR=["get","getKey","getAll","getAllKeys","count"],sR=["put","add","delete","clear"],Mh=new Map;function _v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mh.get(e))return Mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Mh.set(e,s),s}eR(t=>({...t,get:(e,n,r)=>_v(e,n)||t.get(e,n,r),has:(e,n)=>!!_v(e,n)||t.has(e,n)}));/**
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
 */class oR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",wv="0.10.13";/**
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
 */const er=new zp("@firebase/app"),lR="@firebase/app-compat",uR="@firebase/analytics-compat",cR="@firebase/analytics",hR="@firebase/app-check-compat",fR="@firebase/app-check",dR="@firebase/auth",pR="@firebase/auth-compat",mR="@firebase/database",gR="@firebase/data-connect",yR="@firebase/database-compat",vR="@firebase/functions",_R="@firebase/functions-compat",wR="@firebase/installations",ER="@firebase/installations-compat",TR="@firebase/messaging",IR="@firebase/messaging-compat",SR="@firebase/performance",AR="@firebase/performance-compat",CR="@firebase/remote-config",PR="@firebase/remote-config-compat",kR="@firebase/storage",RR="@firebase/storage-compat",xR="@firebase/firestore",NR="@firebase/vertexai-preview",bR="@firebase/firestore-compat",OR="firebase",LR="10.14.1";/**
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
 */const fd="[DEFAULT]",DR={[hd]:"fire-core",[lR]:"fire-core-compat",[cR]:"fire-analytics",[uR]:"fire-analytics-compat",[fR]:"fire-app-check",[hR]:"fire-app-check-compat",[dR]:"fire-auth",[pR]:"fire-auth-compat",[mR]:"fire-rtdb",[gR]:"fire-data-connect",[yR]:"fire-rtdb-compat",[vR]:"fire-fn",[_R]:"fire-fn-compat",[wR]:"fire-iid",[ER]:"fire-iid-compat",[TR]:"fire-fcm",[IR]:"fire-fcm-compat",[SR]:"fire-perf",[AR]:"fire-perf-compat",[CR]:"fire-rc",[PR]:"fire-rc-compat",[kR]:"fire-gcs",[RR]:"fire-gcs-compat",[xR]:"fire-fst",[bR]:"fire-fst-compat",[NR]:"fire-vertex","fire-js":"fire-js",[OR]:"fire-js-all"};/**
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
 */const ju=new Map,MR=new Map,dd=new Map;function Ev(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(dd.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,t);for(const n of ju.values())Ev(n,t);for(const n of MR.values())Ev(n,t);return!0}function Ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
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
 */const VR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new Da("app","Firebase",VR);/**
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
 */class FR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=LR;function uE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mr.create("bad-app-name",{appName:String(i)});if(n||(n=iE()),!n)throw Mr.create("no-options");const s=ju.get(i);if(s){if(Fu(n,s.options)&&Fu(r,s.config))return s;throw Mr.create("duplicate-app",{appName:i})}const o=new Hk(i);for(const u of dd.values())o.addComponent(u);const l=new FR(n,r,o);return ju.set(i,l),l}function $p(t=fd){const e=ju.get(t);if(!e&&t===fd&&iE())return uE();if(!e)throw Mr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=DR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}Ri(new $r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jR="firebase-heartbeat-database",UR=1,ya="firebase-heartbeat-store";let Vh=null;function cE(){return Vh||(Vh=rR(jR,UR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ya)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),Vh}async function zR(t){try{const n=(await cE()).transaction(ya),r=await n.objectStore(ya).get(hE(t));return await n.done,r}catch(e){if(e instanceof Nn)er.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Tv(t,e){try{const r=(await cE()).transaction(ya,"readwrite");await r.objectStore(ya).put(e,hE(t)),await r.done}catch(n){if(n instanceof Nn)er.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BR=1024,$R=30*24*60*60*1e3;class HR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=$R}),this._storage.overwrite(this._heartbeatsCache))}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iv(),{heartbeatsToSend:r,unsentEntries:i}=WR(this._heartbeatsCache.heartbeats),s=Vu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return er.warn(n),""}}}function Iv(){return new Date().toISOString().substring(0,10)}function WR(t,e=BR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bk()?Ok().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return Vu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GR(t){Ri(new $r("platform-logger",e=>new oR(e),"PRIVATE")),Ri(new $r("heartbeat",e=>new HR(e),"PRIVATE")),In(hd,wv,t),In(hd,wv,"esm2017"),In("fire-js","")}GR("");function Hp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KR=fE,dE=new Da("auth","Firebase",fE());/**
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
 */const Uu=new zp("@firebase/auth");function QR(t,...e){Uu.logLevel<=se.WARN&&Uu.warn(`Auth (${Vi}): ${t}`,...e)}function eu(t,...e){Uu.logLevel<=se.ERROR&&Uu.error(`Auth (${Vi}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw Wp(t,...e)}function Sn(t,...e){return Wp(t,...e)}function pE(t,e,n){const r=Object.assign(Object.assign({},KR()),{[e]:n});return new Da("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return pE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dE.create(t,...e)}function Q(t,e,...n){if(!t)throw Wp(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eu(e),new Error(e)}function tr(t,e){t||zn(e)}/**
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
 */function pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YR(){return Av()==="http:"||Av()==="https:"}function Av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function XR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YR()||kk()||"connection"in navigator)?navigator.onLine:!0}function JR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ak()||Rk()}get(){return XR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qp(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ex=new Va(3e4,6e4);function Yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,i={}){return gE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ma(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Pk()||(c.referrerPolicy="no-referrer"),mE.fetch()(yE(t,t.config.apiHost,n,l),c)})}async function gE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZR),e);try{const i=new nx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pE(t,f,c);dn(t,f)}}catch(i){if(i instanceof Nn)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function Fa(t,e,n,r,i={}){const s=await Xr(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qp(t.config,i):`${t.config.apiScheme}://${i}`}function tx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),ex.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function Cv(t){return t!==void 0&&t.enterprise!==void 0}class rx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ix(t,e){return Xr(t,"GET","/v2/recaptchaConfig",Yr(t,e))}/**
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
 */async function sx(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function vE(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ox(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Gp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Go(Fh(i.auth_time)),issuedAtTime:Go(Fh(i.iat)),expirationTime:Go(Fh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fh(t){return Number(t)*1e3}function Gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=tE(n);return i?JSON.parse(i):(eu("Failed to decode base64 JWT payload"),null)}catch(i){return eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pv(t){const e=Gp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&ax(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await va(t,vE(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_E(s.providerUserInfo):[],l=cx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new md(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function ux(t){const e=vt(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _E(t){return t.map(e=>{var{providerId:n}=e,r=Hp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hx(t,e){const n=await gE(t,{},async()=>{const r=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",mE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fx(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Yr(t,e))}/**
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
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Pv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ts;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function mr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new md(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await va(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ox(this,e)}reload(){return ux(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await va(this,sx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:R,isAnonymous:O,providerData:D,stsTokenManager:A}=n;Q(I&&A,e,"internal-error");const g=Ts.fromJSON(this.name,A);Q(typeof I=="string",e,"internal-error"),mr(d,e.name),mr(m,e.name),Q(typeof R=="boolean",e,"internal-error"),Q(typeof O=="boolean",e,"internal-error"),mr(w,e.name),mr(S,e.name),mr(k,e.name),mr(x,e.name),mr(_,e.name),mr(y,e.name);const E=new Bn({uid:I,auth:e,email:m,emailVerified:R,displayName:d,isAnonymous:O,photoURL:S,phoneNumber:w,tenantId:k,stsTokenManager:g,createdAt:_,lastLoginAt:y});return D&&Array.isArray(D)&&(E.providerData=D.map(C=>Object.assign({},C))),x&&(E._redirectEventId=x),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ts;i.updateFromServerResponse(n);const s=new Bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_E(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ts;l.updateFromIdToken(r);const u=new Bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const kv=new Map;function $n(t){tr(t instanceof Function,"Expected a class definition");let e=kv.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kv.set(t,e),e)}/**
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
 */class wE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wE.type="NONE";const Rv=wE;/**
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
 */function tu(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tu(this.userKey,i.apiKey,s),this.fullPersistenceKey=tu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is($n(Rv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||$n(Rv);const o=tu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const d=Bn._fromJSON(e,f);c!==s&&(l=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Is(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Is(s,e,r))}}/**
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
 */function xv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CE(e))return"Blackberry";if(PE(e))return"Webos";if(TE(e))return"Safari";if((e.includes("chrome/")||IE(e))&&!e.includes("edge/"))return"Chrome";if(AE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EE(t=yt()){return/firefox\//i.test(t)}function TE(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function IE(t=yt()){return/crios\//i.test(t)}function SE(t=yt()){return/iemobile/i.test(t)}function AE(t=yt()){return/android/i.test(t)}function CE(t=yt()){return/blackberry/i.test(t)}function PE(t=yt()){return/webos/i.test(t)}function Kp(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dx(t=yt()){var e;return Kp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function px(){return xk()&&document.documentMode===10}function kE(t=yt()){return Kp(t)||AE(t)||PE(t)||CE(t)||/windows phone/i.test(t)||SE(t)}/**
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
 */function RE(t,e=[]){let n;switch(t){case"Browser":n=xv(yt());break;case"Worker":n=`${xv(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
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
 */class mx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gx(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Yr(t,e))}/**
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
 */const yx=6;class vx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _x{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new mx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vE(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(An(this));const n=e?vt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gx(this),n=new vx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return vt(t)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fk(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wx(t){Sc=t}function xE(t){return Sc.loadJS(t)}function Ex(){return Sc.recaptchaEnterpriseScript}function Tx(){return Sc.gapiScript}function Ix(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Sx="recaptcha-enterprise",Ax="NO_RECAPTCHA";class Cx{constructor(e){this.type=Sx,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{ix(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new rx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Cv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ax)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Cv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ex();u.length!==0&&(u+=l),xE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function bv(t,e,n,r=!1){const i=new Cx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await bv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Px(t,e){const n=Ic(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fu(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Rx(t,e,n){const r=Jr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=NE(e),{host:o,port:l}=xx(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Nx()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xx(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ov(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ov(o)}}}function Ov(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function bx(t,e){return Xr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ox(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",Yr(t,e))}/**
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
 */async function Lx(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}async function Dx(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",Yr(t,e))}/**
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
 */class _a extends Qp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,n,"signInWithPassword",Ox);case"emailLink":return Lx(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,r,"signUpPassword",bx);case"emailLink":return Dx(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ss(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",Yr(t,e))}/**
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
 */const Mx="http://localhost";class xi extends Qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:Mx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ma(n)}return e}}/**
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
 */function Vx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fx(t){const e=No(bo(t)).link,n=e?No(bo(e)).deep_link_id:null,r=No(bo(t)).deep_link_id;return(r?No(bo(r)).link:null)||r||n||e||t}class Yp{constructor(e){var n,r,i,s,o,l;const u=No(bo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,d=Vx((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&f&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Fx(e);try{return new Yp(n)}catch{return null}}}/**
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
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,n){return _a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yp.parseLink(n);return Q(r,"argument-error"),_a._fromEmailAndCode(e,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ja extends bE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wr extends ja{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
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
 */class Er extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
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
 */class Tr extends ja{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
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
 */class Ir extends ja{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */async function OE(t,e){return Fa(t,"POST","/v1/accounts:signUp",Yr(t,e))}/**
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
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bn._fromIdTokenResponse(e,r,i),o=Lv(r);return new nr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lv(r);return new nr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function jx(t){var e;if(ln(t.app))return Promise.reject(An(t));const n=Jr(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new nr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await OE(n,{returnSecureToken:!0}),i=await nr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Bu extends Nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function LE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,s,e,r):s})}async function Ux(t,e,n=!1){const r=await va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nr._forOperation(t,"link",r)}/**
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
 */async function zx(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await va(t,LE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Gp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),nr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function DE(t,e,n=!1){if(ln(t.app))return Promise.reject(An(t));const r="signIn",i=await LE(t,r,e),s=await nr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bx(t,e){return DE(Jr(t),e)}/**
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
 */async function ME(t){const e=Jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $x(t,e,n){if(ln(t.app))return Promise.reject(An(t));const r=Jr(t),o=await gd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ME(t),u}),l=await nr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Hx(t,e,n){return ln(t.app)?Promise.reject(An(t)):Bx(vt(t),Gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ME(t),r})}function Wx(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function qx(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function Gx(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function Kx(t){return vt(t).signOut()}const $u="__sak";/**
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
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qx=1e3,Yx=10;class FE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);px()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FE.type="LOCAL";const Xx=FE;/**
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
 */class jE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jE.type="SESSION";const UE=jE;/**
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
 */function Jx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Jx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ac.receivers=[];/**
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
 */function Xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Xp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function eN(t){Cn().location.href=t}/**
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
 */function zE(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function tN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rN(){return zE()?self:null}/**
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
 */const BE="firebaseLocalStorageDb",iN=1,Hu="firebaseLocalStorage",$E="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function sN(){const t=indexedDB.deleteDatabase(BE);return new Ua(t).toPromise()}function yd(){const t=indexedDB.open(BE,iN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hu,{keyPath:$E})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hu)?e(r):(r.close(),await sN(),e(await yd()))})})}async function Dv(t,e,n){const r=Cc(t,!0).put({[$E]:e,value:n});return new Ua(r).toPromise()}async function oN(t,e){const n=Cc(t,!1).get(e),r=await new Ua(n).toPromise();return r===void 0?null:r.value}function Mv(t,e){const n=Cc(t,!0).delete(e);return new Ua(n).toPromise()}const aN=800,lN=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ac._getInstance(rN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tN(),!this.activeServiceWorker)return;this.sender=new Zx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await Dv(e,$u,"1"),await Mv(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cc(i,!1).getAll();return new Ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const uN=HE;new Va(3e4,6e4);/**
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
 */function cN(t,e){return e?$n(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jp extends Qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hN(t){return DE(t.auth,new Jp(t),t.bypassAuthState)}function fN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),zx(n,new Jp(t),t.bypassAuthState)}async function dN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Ux(n,new Jp(t),t.bypassAuthState)}/**
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
 */class WE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hN;case"linkViaPopup":case"linkViaRedirect":return dN;case"reauthViaPopup":case"reauthViaRedirect":return fN;default:dn(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pN=new Va(2e3,1e4);class ds extends WE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=Xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pN.get())};e()}}ds.currentPopupAction=null;/**
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
 */const mN="pendingRedirect",nu=new Map;class gN extends WE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nu.get(this.auth._key());if(!e){try{const r=await yN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nu.set(this.auth._key(),e)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yN(t,e){const n=wN(e),r=_N(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vN(t,e){nu.set(t._key(),e)}function _N(t){return $n(t._redirectPersistence)}function wN(t){return tu(mN,t.config.apiKey,t.name)}async function EN(t,e,n=!1){if(ln(t.app))return Promise.reject(An(t));const r=Jr(t),i=cN(r,e),o=await new gN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const TN=10*60*1e3;class IN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vv(e))}saveEventToCache(e){this.cachedEventUids.add(Vv(e)),this.lastProcessedEventTime=Date.now()}}function Vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
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
 */async function AN(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
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
 */const CN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PN=/^https?/;async function kN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AN(t);for(const n of e)try{if(RN(n))return}catch{}dn(t,"unauthorized-domain")}function RN(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PN.test(n))return!1;if(CN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xN=new Va(3e4,6e4);function Fv(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NN(t){return new Promise((e,n)=>{var r,i,s;function o(){Fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fv(),n(Sn(t,"network-request-failed"))},timeout:xN.get()})}if(!((i=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Cn().gapi)===null||s===void 0)&&s.load)o();else{const l=Ix("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},xE(`${Tx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ru=null,e})}let ru=null;function bN(t){return ru=ru||NN(t),ru}/**
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
 */const ON=new Va(5e3,15e3),LN="__/auth/iframe",DN="emulator/auth/iframe",MN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FN(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qp(e,DN):`https://${t.config.authDomain}/${LN}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},i=VN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ma(r).slice(1)}`}async function jN(t){const e=await bN(t),n=Cn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:FN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=Cn().setTimeout(()=>{s(o)},ON.get());function u(){Cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const UN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zN=500,BN=600,$N="_blank",HN="http://localhost";class jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WN(t,e,n,r=zN,i=BN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},UN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=yt().toLowerCase();n&&(l=IE(c)?$N:n),EE(c)&&(e=e||HN,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[w,S])=>`${m}${w}=${S},`,"");if(dx(c)&&l!=="_self")return qN(e||"",l),new jv(null);const d=window.open(e||"",l,f);Q(d,t,"popup-blocked");try{d.focus()}catch{}return new jv(d)}function qN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GN="__/auth/handler",KN="emulator/auth/handler",QN=encodeURIComponent("fac");async function Uv(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(e instanceof bE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof ja){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${QN}=${encodeURIComponent(u)}`:"";return`${YN(t)}?${Ma(l).slice(1)}${c}`}function YN({config:t}){return t.emulator?qp(t,KN):`https://${t.authDomain}/${GN}`}/**
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
 */const jh="webStorageSupport";class XN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UE,this._completeRedirectFn=EN,this._overrideRedirectResult=vN}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Uv(e,n,r,pd(),i);return WN(e,o,Xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Uv(e,n,r,pd(),i);return eN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jN(e),r=new IN(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jh,{type:jh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jh];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||TE()||Kp()}}const JN=XN;var zv="@firebase/auth",Bv="1.7.9";/**
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
 */class ZN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tb(t){Ri(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RE(t)},c=new _x(r,i,s,u);return kx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new $r("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new ZN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(zv,Bv,eb(t)),In(zv,Bv,"esm2017")}/**
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
 */const nb=5*60,rb=sE("authIdTokenMaxAge")||nb;let $v=null;const ib=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rb)return;const i=n==null?void 0:n.token;$v!==i&&($v=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GE(t=$p()){const e=Ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Px(t,{popupRedirectResolver:JN,persistence:[uN,Xx,UE]}),r=sE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ib(s.toString());qx(n,o,()=>o(n.currentUser)),Wx(n,l=>o(l))}}const i=nE("auth");return i&&Rx(n,`http://${i}`),n}function sb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tb("Browser");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,KE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,g){function E(){}E.prototype=g.prototype,A.D=g.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(C,N,b){for(var P=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)P[Ie-2]=arguments[Ie];return g.prototype[N].apply(C,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,g,E){E||(E=0);var C=Array(16);if(typeof g=="string")for(var N=0;16>N;++N)C[N]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(N=0;16>N;++N)C[N]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=A.g[0],E=A.g[1],N=A.g[2];var b=A.g[3],P=g+(b^E&(N^b))+C[0]+3614090360&4294967295;g=E+(P<<7&4294967295|P>>>25),P=b+(N^g&(E^N))+C[1]+3905402710&4294967295,b=g+(P<<12&4294967295|P>>>20),P=N+(E^b&(g^E))+C[2]+606105819&4294967295,N=b+(P<<17&4294967295|P>>>15),P=E+(g^N&(b^g))+C[3]+3250441966&4294967295,E=N+(P<<22&4294967295|P>>>10),P=g+(b^E&(N^b))+C[4]+4118548399&4294967295,g=E+(P<<7&4294967295|P>>>25),P=b+(N^g&(E^N))+C[5]+1200080426&4294967295,b=g+(P<<12&4294967295|P>>>20),P=N+(E^b&(g^E))+C[6]+2821735955&4294967295,N=b+(P<<17&4294967295|P>>>15),P=E+(g^N&(b^g))+C[7]+4249261313&4294967295,E=N+(P<<22&4294967295|P>>>10),P=g+(b^E&(N^b))+C[8]+1770035416&4294967295,g=E+(P<<7&4294967295|P>>>25),P=b+(N^g&(E^N))+C[9]+2336552879&4294967295,b=g+(P<<12&4294967295|P>>>20),P=N+(E^b&(g^E))+C[10]+4294925233&4294967295,N=b+(P<<17&4294967295|P>>>15),P=E+(g^N&(b^g))+C[11]+2304563134&4294967295,E=N+(P<<22&4294967295|P>>>10),P=g+(b^E&(N^b))+C[12]+1804603682&4294967295,g=E+(P<<7&4294967295|P>>>25),P=b+(N^g&(E^N))+C[13]+4254626195&4294967295,b=g+(P<<12&4294967295|P>>>20),P=N+(E^b&(g^E))+C[14]+2792965006&4294967295,N=b+(P<<17&4294967295|P>>>15),P=E+(g^N&(b^g))+C[15]+1236535329&4294967295,E=N+(P<<22&4294967295|P>>>10),P=g+(N^b&(E^N))+C[1]+4129170786&4294967295,g=E+(P<<5&4294967295|P>>>27),P=b+(E^N&(g^E))+C[6]+3225465664&4294967295,b=g+(P<<9&4294967295|P>>>23),P=N+(g^E&(b^g))+C[11]+643717713&4294967295,N=b+(P<<14&4294967295|P>>>18),P=E+(b^g&(N^b))+C[0]+3921069994&4294967295,E=N+(P<<20&4294967295|P>>>12),P=g+(N^b&(E^N))+C[5]+3593408605&4294967295,g=E+(P<<5&4294967295|P>>>27),P=b+(E^N&(g^E))+C[10]+38016083&4294967295,b=g+(P<<9&4294967295|P>>>23),P=N+(g^E&(b^g))+C[15]+3634488961&4294967295,N=b+(P<<14&4294967295|P>>>18),P=E+(b^g&(N^b))+C[4]+3889429448&4294967295,E=N+(P<<20&4294967295|P>>>12),P=g+(N^b&(E^N))+C[9]+568446438&4294967295,g=E+(P<<5&4294967295|P>>>27),P=b+(E^N&(g^E))+C[14]+3275163606&4294967295,b=g+(P<<9&4294967295|P>>>23),P=N+(g^E&(b^g))+C[3]+4107603335&4294967295,N=b+(P<<14&4294967295|P>>>18),P=E+(b^g&(N^b))+C[8]+1163531501&4294967295,E=N+(P<<20&4294967295|P>>>12),P=g+(N^b&(E^N))+C[13]+2850285829&4294967295,g=E+(P<<5&4294967295|P>>>27),P=b+(E^N&(g^E))+C[2]+4243563512&4294967295,b=g+(P<<9&4294967295|P>>>23),P=N+(g^E&(b^g))+C[7]+1735328473&4294967295,N=b+(P<<14&4294967295|P>>>18),P=E+(b^g&(N^b))+C[12]+2368359562&4294967295,E=N+(P<<20&4294967295|P>>>12),P=g+(E^N^b)+C[5]+4294588738&4294967295,g=E+(P<<4&4294967295|P>>>28),P=b+(g^E^N)+C[8]+2272392833&4294967295,b=g+(P<<11&4294967295|P>>>21),P=N+(b^g^E)+C[11]+1839030562&4294967295,N=b+(P<<16&4294967295|P>>>16),P=E+(N^b^g)+C[14]+4259657740&4294967295,E=N+(P<<23&4294967295|P>>>9),P=g+(E^N^b)+C[1]+2763975236&4294967295,g=E+(P<<4&4294967295|P>>>28),P=b+(g^E^N)+C[4]+1272893353&4294967295,b=g+(P<<11&4294967295|P>>>21),P=N+(b^g^E)+C[7]+4139469664&4294967295,N=b+(P<<16&4294967295|P>>>16),P=E+(N^b^g)+C[10]+3200236656&4294967295,E=N+(P<<23&4294967295|P>>>9),P=g+(E^N^b)+C[13]+681279174&4294967295,g=E+(P<<4&4294967295|P>>>28),P=b+(g^E^N)+C[0]+3936430074&4294967295,b=g+(P<<11&4294967295|P>>>21),P=N+(b^g^E)+C[3]+3572445317&4294967295,N=b+(P<<16&4294967295|P>>>16),P=E+(N^b^g)+C[6]+76029189&4294967295,E=N+(P<<23&4294967295|P>>>9),P=g+(E^N^b)+C[9]+3654602809&4294967295,g=E+(P<<4&4294967295|P>>>28),P=b+(g^E^N)+C[12]+3873151461&4294967295,b=g+(P<<11&4294967295|P>>>21),P=N+(b^g^E)+C[15]+530742520&4294967295,N=b+(P<<16&4294967295|P>>>16),P=E+(N^b^g)+C[2]+3299628645&4294967295,E=N+(P<<23&4294967295|P>>>9),P=g+(N^(E|~b))+C[0]+4096336452&4294967295,g=E+(P<<6&4294967295|P>>>26),P=b+(E^(g|~N))+C[7]+1126891415&4294967295,b=g+(P<<10&4294967295|P>>>22),P=N+(g^(b|~E))+C[14]+2878612391&4294967295,N=b+(P<<15&4294967295|P>>>17),P=E+(b^(N|~g))+C[5]+4237533241&4294967295,E=N+(P<<21&4294967295|P>>>11),P=g+(N^(E|~b))+C[12]+1700485571&4294967295,g=E+(P<<6&4294967295|P>>>26),P=b+(E^(g|~N))+C[3]+2399980690&4294967295,b=g+(P<<10&4294967295|P>>>22),P=N+(g^(b|~E))+C[10]+4293915773&4294967295,N=b+(P<<15&4294967295|P>>>17),P=E+(b^(N|~g))+C[1]+2240044497&4294967295,E=N+(P<<21&4294967295|P>>>11),P=g+(N^(E|~b))+C[8]+1873313359&4294967295,g=E+(P<<6&4294967295|P>>>26),P=b+(E^(g|~N))+C[15]+4264355552&4294967295,b=g+(P<<10&4294967295|P>>>22),P=N+(g^(b|~E))+C[6]+2734768916&4294967295,N=b+(P<<15&4294967295|P>>>17),P=E+(b^(N|~g))+C[13]+1309151649&4294967295,E=N+(P<<21&4294967295|P>>>11),P=g+(N^(E|~b))+C[4]+4149444226&4294967295,g=E+(P<<6&4294967295|P>>>26),P=b+(E^(g|~N))+C[11]+3174756917&4294967295,b=g+(P<<10&4294967295|P>>>22),P=N+(g^(b|~E))+C[2]+718787259&4294967295,N=b+(P<<15&4294967295|P>>>17),P=E+(b^(N|~g))+C[9]+3951481745&4294967295,A.g[0]=A.g[0]+g&4294967295,A.g[1]=A.g[1]+(N+(P<<21&4294967295|P>>>11))&4294967295,A.g[2]=A.g[2]+N&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,g){g===void 0&&(g=A.length);for(var E=g-this.blockSize,C=this.B,N=this.h,b=0;b<g;){if(N==0)for(;b<=E;)i(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<g;)if(C[N++]=A.charCodeAt(b++),N==this.blockSize){i(this,C),N=0;break}}else for(;b<g;)if(C[N++]=A[b++],N==this.blockSize){i(this,C),N=0;break}}this.h=N,this.o+=g},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var g=1;g<A.length-8;++g)A[g]=0;var E=8*this.o;for(g=A.length-8;g<A.length;++g)A[g]=E&255,E/=256;for(this.u(A),A=Array(16),g=E=0;4>g;++g)for(var C=0;32>C;C+=8)A[E++]=this.g[g]>>>C&255;return A};function s(A,g){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=g(A)}function o(A,g){this.h=g;for(var E=[],C=!0,N=A.length-1;0<=N;N--){var b=A[N]|0;C&&b==g||(E[N]=b,C=!1)}this.g=E}var l={};function u(A){return-128<=A&&128>A?s(A,function(g){return new o([g|0],0>g?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return x(c(-A));for(var g=[],E=1,C=0;A>=E;C++)g[C]=A/E|0,E*=4294967296;return new o(g,0)}function f(A,g){if(A.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A.charAt(0)=="-")return x(f(A.substring(1),g));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(g,8)),C=d,N=0;N<A.length;N+=8){var b=Math.min(8,A.length-N),P=parseInt(A.substring(N,N+b),g);8>b?(b=c(Math.pow(g,b)),C=C.j(b).add(c(P))):(C=C.j(E),C=C.add(c(P)))}return C}var d=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var A=0,g=1,E=0;E<this.g.length;E++){var C=this.i(E);A+=(0<=C?C:4294967296+C)*g,g*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(k(this))return"-"+x(this).toString(A);for(var g=c(Math.pow(A,6)),E=this,C="";;){var N=R(E,g).g;E=_(E,N.j(g));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=N,S(E))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var g=0;g<A.g.length;g++)if(A.g[g]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=_(this,A),k(A)?-1:S(A)?0:1};function x(A){for(var g=A.g.length,E=[],C=0;C<g;C++)E[C]=~A.g[C];return new o(E,~A.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(A){for(var g=Math.max(this.g.length,A.g.length),E=[],C=0,N=0;N<=g;N++){var b=C+(this.i(N)&65535)+(A.i(N)&65535),P=(b>>>16)+(this.i(N)>>>16)+(A.i(N)>>>16);C=P>>>16,b&=65535,P&=65535,E[N]=P<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function _(A,g){return A.add(x(g))}t.j=function(A){if(S(this)||S(A))return d;if(k(this))return k(A)?x(this).j(x(A)):x(x(this).j(A));if(k(A))return x(this.j(x(A)));if(0>this.l(w)&&0>A.l(w))return c(this.m()*A.m());for(var g=this.g.length+A.g.length,E=[],C=0;C<2*g;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var N=0;N<A.g.length;N++){var b=this.i(C)>>>16,P=this.i(C)&65535,Ie=A.i(N)>>>16,Ct=A.i(N)&65535;E[2*C+2*N]+=P*Ct,y(E,2*C+2*N),E[2*C+2*N+1]+=b*Ct,y(E,2*C+2*N+1),E[2*C+2*N+1]+=P*Ie,y(E,2*C+2*N+1),E[2*C+2*N+2]+=b*Ie,y(E,2*C+2*N+2)}for(C=0;C<g;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=g;C<2*g;C++)E[C]=0;return new o(E,0)};function y(A,g){for(;(A[g]&65535)!=A[g];)A[g+1]+=A[g]>>>16,A[g]&=65535,g++}function I(A,g){this.g=A,this.h=g}function R(A,g){if(S(g))throw Error("division by zero");if(S(A))return new I(d,d);if(k(A))return g=R(x(A),g),new I(x(g.g),x(g.h));if(k(g))return g=R(A,x(g)),new I(x(g.g),g.h);if(30<A.g.length){if(k(A)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,C=g;0>=C.l(A);)E=O(E),C=O(C);var N=D(E,1),b=D(C,1);for(C=D(C,2),E=D(E,2);!S(C);){var P=b.add(C);0>=P.l(A)&&(N=N.add(E),b=P),C=D(C,1),E=D(E,1)}return g=_(A,N.j(g)),new I(N,g)}for(N=d;0<=A.l(g);){for(E=Math.max(1,Math.floor(A.m()/g.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=c(E),P=b.j(g);k(P)||0<P.l(A);)E-=C,b=c(E),P=b.j(g);S(b)&&(b=m),N=N.add(b),A=_(A,P)}return new I(N,A)}t.A=function(A){return R(this,A).h},t.and=function(A){for(var g=Math.max(this.g.length,A.g.length),E=[],C=0;C<g;C++)E[C]=this.i(C)&A.i(C);return new o(E,this.h&A.h)},t.or=function(A){for(var g=Math.max(this.g.length,A.g.length),E=[],C=0;C<g;C++)E[C]=this.i(C)|A.i(C);return new o(E,this.h|A.h)},t.xor=function(A){for(var g=Math.max(this.g.length,A.g.length),E=[],C=0;C<g;C++)E[C]=this.i(C)^A.i(C);return new o(E,this.h^A.h)};function O(A){for(var g=A.g.length+1,E=[],C=0;C<g;C++)E[C]=A.i(C)<<1|A.i(C-1)>>>31;return new o(E,A.h)}function D(A,g){var E=g>>5;g%=32;for(var C=A.g.length-E,N=[],b=0;b<C;b++)N[b]=0<g?A.i(b+E)>>>g|A.i(b+E+1)<<32-g:A.i(b+E);return new o(N,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,KE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,_i=o}).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{});var Ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QE,Oo,YE,iu,vd,XE,JE,ZE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ol=="object"&&Ol];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var L=a[v];if(!(L in p))break e;p=p[L]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,v=!1,L={next:function(){if(!v&&p<a.length){var M=p++;return{value:h(M,a[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function w(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,L,M){for(var B=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)B[ge-2]=arguments[ge];return h.prototype[L].apply(v,B)}}function k(a){const h=a.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function x(a,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const L=a.length||0,M=v.length||0;a.length=L+M;for(let B=0;B<M;B++)a[L+B]=v[B]}else a.push(v)}}class _{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function R(a){return R[" "](a),a}R[" "]=function(){};var O=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function D(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function A(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function g(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,h){let p,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(p in v)a[p]=v[p];for(let M=0;M<E.length;M++)p=E[M],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function N(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){l.setTimeout(()=>{throw a},0)}function P(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ie{constructor(){this.h=this.g=null}add(h,p){const v=Ct.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Ct=new _(()=>new bn,a=>a.reset());class bn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,$=!1,Y=new Ie,ee=()=>{const a=l.Promise.resolve(void 0);Lt=()=>{a.then(ve)}};var ve=()=>{for(var a;a=P();){try{a.h.call(a.g)}catch(p){b(p)}var h=Ct;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var en=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function tn(a,h){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{R(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&tn.aa.h.call(this)}}S(tn,Pe);var pn={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Qa=0;function Ya(a,h,p,v,L){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=L,this.key=++Qa,this.da=this.fa=!1}function Zr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function te(a){this.src=a,this.g={},this.h=0}te.prototype.add=function(a,h,p,v,L){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var B=fe(a,h,v,L);return-1<B?(h=a[B],p||(h.fa=!1)):(h=new Ya(h,this.src,M,!!v,L),h.fa=p,a.push(h)),h};function ce(a,h){var p=h.type;if(p in a.g){var v=a.g[p],L=Array.prototype.indexOf.call(v,h,void 0),M;(M=0<=L)&&Array.prototype.splice.call(v,L,1),M&&(Zr(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function fe(a,h,p,v){for(var L=0;L<a.length;++L){var M=a[L];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==v)return L}return-1}var be="closure_lm_"+(1e6*Math.random()|0),Oe={};function Se(a,h,p,v,L){if(Array.isArray(h)){for(var M=0;M<h.length;M++)Se(a,h[M],p,v,L);return null}return p=Ln(p),a&&a[Pt]?a.K(h,p,c(v)?!!v.capture:!1,L):Ve(a,h,p,!1,v,L)}function Ve(a,h,p,v,L,M){if(!h)throw Error("Invalid event type");var B=c(L)?!!L.capture:!!L,ge=lr(a);if(ge||(a[be]=ge=new te(a)),p=ge.add(h,p,v,B,M),p.proxy)return p;if(v=ar(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)en||(L=B),L===void 0&&(L=!1),a.addEventListener(h.toString(),v,L);else if(a.attachEvent)a.attachEvent(ei(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ar(){function a(p){return h.call(a.src,a.listener,p)}const h=zi;return a}function Dt(a,h,p,v,L){if(Array.isArray(h))for(var M=0;M<h.length;M++)Dt(a,h[M],p,v,L);else v=c(v)?!!v.capture:!!v,p=Ln(p),a&&a[Pt]?(a=a.i,h=String(h).toString(),h in a.g&&(M=a.g[h],p=fe(M,p,v,L),-1<p&&(Zr(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete a.g[h],a.h--)))):a&&(a=lr(a))&&(h=a.g[h.toString()],a=-1,h&&(a=fe(h,p,v,L)),(p=-1<a?h[a]:null)&&On(p))}function On(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Pt])ce(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(ei(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=lr(h))?(ce(p,a),p.h==0&&(p.src=null,h[be]=null)):Zr(a)}}}function ei(a){return a in Oe?Oe[a]:Oe[a]="on"+a}function zi(a,h){if(a.da)a=!0;else{h=new tn(h,this);var p=a.listener,v=a.ha||a.src;a.fa&&On(a),a=p.call(v,h)}return a}function lr(a){return a=a[be],a instanceof te?a:null}var ur="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ln(a){return typeof a=="function"?a:(a[ur]||(a[ur]=function(h){return a.handleEvent(h)}),a[ur])}function me(){he.call(this),this.i=new te(this),this.M=this,this.F=null}S(me,he),me.prototype[Pt]=!0,me.prototype.removeEventListener=function(a,h,p,v){Dt(this,a,h,p,v)};function Ae(a,h){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new Pe(h,a);else if(h instanceof Pe)h.target=h.target||a;else{var L=h;h=new Pe(v,a),C(h,L)}if(L=!0,p)for(var M=p.length-1;0<=M;M--){var B=h.g=p[M];L=Bi(B,v,!0,h)&&L}if(B=h.g=a,L=Bi(B,v,!0,h)&&L,L=Bi(B,v,!1,h)&&L,p)for(M=0;M<p.length;M++)B=h.g=p[M],L=Bi(B,v,!1,h)&&L}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],v=0;v<p.length;v++)Zr(p[v]);delete a.g[h],a.h--}}this.F=null},me.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},me.prototype.L=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function Bi(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,M=0;M<h.length;++M){var B=h[M];if(B&&!B.da&&B.capture==p){var ge=B.listener,Je=B.ha||B.src;B.fa&&ce(a.i,B),L=ge.call(Je,v)!==!1&&L}}return L&&!v.defaultPrevented}function Xa(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Om(a){a.g=Xa(()=>{a.g=null,a.i&&(a.i=!1,Om(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class RI extends he{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Om(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zs(a){he.call(this),this.h=a,this.g={}}S(Zs,he);var Lm=[];function Dm(a){D(a.g,function(h,p){this.g.hasOwnProperty(p)&&On(h)},a),a.g={}}Zs.prototype.N=function(){Zs.aa.N.call(this),Dm(this)},Zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jc=l.JSON.stringify,xI=l.JSON.parse,NI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uc(){}Uc.prototype.h=null;function Mm(a){return a.h||(a.h=a.i())}function Vm(){}var eo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zc(){Pe.call(this,"d")}S(zc,Pe);function Bc(){Pe.call(this,"c")}S(Bc,Pe);var ti={},Fm=null;function Ja(){return Fm=Fm||new me}ti.La="serverreachability";function jm(a){Pe.call(this,ti.La,a)}S(jm,Pe);function to(a){const h=Ja();Ae(h,new jm(h))}ti.STAT_EVENT="statevent";function Um(a,h){Pe.call(this,ti.STAT_EVENT,a),this.stat=h}S(Um,Pe);function _t(a){const h=Ja();Ae(h,new Um(h,a))}ti.Ma="timingevent";function zm(a,h){Pe.call(this,ti.Ma,a),this.size=h}S(zm,Pe);function no(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ro(){this.g=!0}ro.prototype.xa=function(){this.g=!1};function bI(a,h,p,v,L,M){a.info(function(){if(a.g)if(M)for(var B="",ge=M.split("&"),Je=0;Je<ge.length;Je++){var le=ge[Je].split("=");if(1<le.length){var ot=le[0];le=le[1];var at=ot.split("_");B=2<=at.length&&at[1]=="type"?B+(ot+"="+le+"&"):B+(ot+"=redacted&")}}else B=null;else B=M;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+h+`
`+p+`
`+B})}function OI(a,h,p,v,L,M,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+h+`
`+p+`
`+M+" "+B})}function $i(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+DI(a,p)+(v?" "+v:"")})}function LI(a,h){a.info(function(){return"TIMEOUT: "+h})}ro.prototype.info=function(){};function DI(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var M=L[0];if(M!="noop"&&M!="stop"&&M!="close")for(var B=1;B<L.length;B++)L[B]=""}}}}return jc(p)}catch{return h}}var Za={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function el(){}S(el,Uc),el.prototype.g=function(){return new XMLHttpRequest},el.prototype.i=function(){return{}},$c=new el;function cr(a,h,p,v){this.j=a,this.i=h,this.l=p,this.R=v||1,this.U=new Zs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $m}function $m(){this.i=null,this.g="",this.h=!1}var Hm={},Hc={};function Wc(a,h,p){a.L=1,a.v=il(Dn(h)),a.m=p,a.P=!0,Wm(a,null)}function Wm(a,h){a.F=Date.now(),tl(a),a.A=Dn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),sg(p.i,"t",v),a.C=0,p=a.j.J,a.h=new $m,a.g=Ig(a.j,p?h:null,!a.m),0<a.O&&(a.M=new RI(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,v=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Lm[0]=L.toString()),L=Lm);for(var M=0;M<L.length;M++){var B=Se(p,L[M],v||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),to(),bI(a.i,a.u,a.A,a.l,a.R,a.m)}cr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Mn(a)==3?h.j():this.Y(a)},cr.prototype.Y=function(a){try{if(a==this.g)e:{const at=Mn(this.g);var h=this.g.Ba();const qi=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||fg(this.g)))){this.J||at!=4||h==7||(h==8||0>=qi?to(3):to(2)),qc(this);var p=this.g.Z();this.X=p;t:if(qm(this)){var v=fg(this.g);a="";var L=v.length,M=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),io(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(M&&h==L-1)});v.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,OI(this.i,this.u,this.A,this.l,this.R,at,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Je=this.g;if((ge=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ge)){var le=ge;break t}}le=null}if(p=le)$i(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gc(this,p);else{this.o=!1,this.s=3,_t(12),ni(this),io(this);break e}}if(this.P){p=!0;let nn;for(;!this.J&&this.C<B.length;)if(nn=MI(this,B),nn==Hc){at==4&&(this.s=4,_t(14),p=!1),$i(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Hm){this.s=4,_t(15),$i(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else $i(this.i,this.l,nn,null),Gc(this,nn);if(qm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||B.length!=0||this.h.h||(this.s=1,_t(16),p=!1),this.o=this.o&&p,!p)$i(this.i,this.l,B,"[Invalid Chunked Response]"),ni(this),io(this);else if(0<B.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Zc(ot),ot.M=!0,_t(11))}}else $i(this.i,this.l,B,null),Gc(this,B);at==4&&ni(this),this.o&&!this.J&&(at==4?_g(this.j,this):(this.o=!1,tl(this)))}else ZI(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ni(this),io(this)}}}catch{}finally{}};function qm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function MI(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?Hc:(p=Number(h.substring(p,v)),isNaN(p)?Hm:(v+=1,v+p>h.length?Hc:(h=h.slice(v,v+p),a.C=v+p,h)))}cr.prototype.cancel=function(){this.J=!0,ni(this)};function tl(a){a.S=Date.now()+a.I,Gm(a,a.I)}function Gm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=no(m(a.ba,a),h)}function qc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}cr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(LI(this.i,this.A),this.L!=2&&(to(),_t(17)),ni(this),this.s=2,io(this)):Gm(this,this.S-a)};function io(a){a.j.G==0||a.J||_g(a.j,a)}function ni(a){qc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Dm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Gc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Kc(p.h,a))){if(!a.K&&Kc(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)cl(p),ll(p);else break e;Jc(p),_t(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=no(m(p.Za,p),6e3));if(1>=Ym(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ii(p,11)}else if((a.K||p.g==a)&&cl(p),!y(h))for(L=p.Da.g.parse(h),h=0;h<L.length;h++){let le=L[h];if(p.T=le[0],le=le[1],p.G==2)if(le[0]=="c"){p.K=le[1],p.ia=le[2];const ot=le[3];ot!=null&&(p.la=ot,p.j.info("VER="+p.la));const at=le[4];at!=null&&(p.Aa=at,p.j.info("SVER="+p.Aa));const qi=le[5];qi!=null&&typeof qi=="number"&&0<qi&&(v=1.5*qi,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const nn=a.g;if(nn){const fl=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fl){var M=v.h;M.g||fl.indexOf("spdy")==-1&&fl.indexOf("quic")==-1&&fl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Qc(M,M.h),M.h=null))}if(v.D){const eh=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;eh&&(v.ya=eh,_e(v.I,v.D,eh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var B=a;if(v.qa=Tg(v,v.J?v.ia:null,v.W),B.K){Xm(v.h,B);var ge=B,Je=v.L;Je&&(ge.I=Je),ge.B&&(qc(ge),tl(ge)),v.g=B}else yg(v);0<p.i.length&&ul(p)}else le[0]!="stop"&&le[0]!="close"||ii(p,7);else p.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ii(p,7):Xc(p):le[0]!="noop"&&p.l&&p.l.ta(le),p.v=0)}}to(4)}catch{}}var VI=class{constructor(a,h){this.g=a,this.map=h}};function Km(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ym(a){return a.h?1:a.g?a.g.size:0}function Kc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Qc(a,h){a.g?a.g.add(h):a.h=h}function Xm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Km.prototype.cancel=function(){if(this.i=Jm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return k(a.i)}function FI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,v=0;v<p;v++)h.push(a[v]);return h}h=[],p=0;for(v in a)h[p++]=a[v];return h}function jI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const v in a)h[p++]=v;return h}}}function Zm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=jI(a),v=FI(a),L=v.length,M=0;M<L;M++)h.call(void 0,v[M],p&&p[M],a)}var eg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UI(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),L=null;if(0<=v){var M=a[p].substring(0,v);L=a[p].substring(v+1)}else M=a[p];h(M,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ri(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ri){this.h=a.h,nl(this,a.j),this.o=a.o,this.g=a.g,rl(this,a.s),this.l=a.l;var h=a.i,p=new ao;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),tg(this,p),this.m=a.m}else a&&(h=String(a).match(eg))?(this.h=!1,nl(this,h[1]||"",!0),this.o=so(h[2]||""),this.g=so(h[3]||"",!0),rl(this,h[4]),this.l=so(h[5]||"",!0),tg(this,h[6]||"",!0),this.m=so(h[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}ri.prototype.toString=function(){var a=[],h=this.j;h&&a.push(oo(h,ng,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(oo(h,ng,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(oo(p,p.charAt(0)=="/"?$I:BI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",oo(p,WI)),a.join("")};function Dn(a){return new ri(a)}function nl(a,h,p){a.j=p?so(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function rl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function tg(a,h,p){h instanceof ao?(a.i=h,qI(a.i,a.h)):(p||(h=oo(h,HI)),a.i=new ao(h,a.h))}function _e(a,h,p){a.i.set(h,p)}function il(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function so(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function oo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,zI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ng=/[#\/\?@]/g,BI=/[#\?:]/g,$I=/[#\?]/g,HI=/[#\?@]/g,WI=/#/g;function ao(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&UI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ao.prototype,t.add=function(a,h){hr(this),this.i=null,a=Hi(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function rg(a,h){hr(a),h=Hi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ig(a,h){return hr(a),h=Hi(a,h),a.g.has(h)}t.forEach=function(a,h){hr(this),this.g.forEach(function(p,v){p.forEach(function(L){a.call(h,L,v,this)},this)},this)},t.na=function(){hr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const L=a[v];for(let M=0;M<L.length;M++)p.push(h[v])}return p},t.V=function(a){hr(this);let h=[];if(typeof a=="string")ig(this,a)&&(h=h.concat(this.g.get(Hi(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return hr(this),this.i=null,a=Hi(this,a),ig(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function sg(a,h,p){rg(a,h),0<p.length&&(a.i=null,a.g.set(Hi(a,h),k(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const M=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var L=M;B[v]!==""&&(L+="="+encodeURIComponent(String(B[v]))),a.push(L)}}return this.i=a.join("&")};function Hi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qI(a,h){h&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(p,v){var L=v.toLowerCase();v!=L&&(rg(this,v),sg(this,L,p))},a)),a.j=h}function GI(a,h){const p=new ro;if(l.Image){const v=new Image;v.onload=w(fr,p,"TestLoadImage: loaded",!0,h,v),v.onerror=w(fr,p,"TestLoadImage: error",!1,h,v),v.onabort=w(fr,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=w(fr,p,"TestLoadImage: timeout",!1,h,v),l.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function KI(a,h){const p=new ro,v=new AbortController,L=setTimeout(()=>{v.abort(),fr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(M=>{clearTimeout(L),M.ok?fr(p,"TestPingServer: ok",!0,h):fr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),fr(p,"TestPingServer: error",!1,h)})}function fr(a,h,p,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(p)}catch{}}function QI(){this.g=new NI}function YI(a,h,p){const v=p||"";try{Zm(a,function(L,M){let B=L;c(L)&&(B=jc(L)),h.push(v+M+"="+encodeURIComponent(B))})}catch(L){throw h.push(v+"type="+encodeURIComponent("_badmap")),L}}function sl(a){this.l=a.Ub||null,this.j=a.eb||!1}S(sl,Uc),sl.prototype.g=function(){return new ol(this.l,this.j)},sl.prototype.i=function(a){return function(){return a}}({});function ol(a,h){me.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ol,me),t=ol.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,uo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;og(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function og(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?lo(this):uo(this),this.readyState==3&&og(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,lo(this))},t.Qa=function(a){this.g&&(this.response=a,lo(this))},t.ga=function(){this.g&&lo(this)};function lo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,uo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function uo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ag(a){let h="";return D(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function Yc(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=ag(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):_e(a,h,p))}function Le(a){me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Le,me);var XI=/^https?$/i,JI=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?Mm(this.o):Mm($c),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){lg(this,M);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)p.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())p.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(JI,h,void 0))||v||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,B]of p)this.g.setRequestHeader(M,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hg(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){lg(this,M)}};function lg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ug(a),al(a)}function ug(a){a.A||(a.A=!0,Ae(a,"complete"),Ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ae(this,"complete"),Ae(this,"abort"),al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),al(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cg(this):this.bb())},t.bb=function(){cg(this)};function cg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)Xa(a.Ea,0,a);else if(Ae(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=B===0){var L=String(a.D).match(eg)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),v=!XI.test(L?L.toLowerCase():"")}p=v}if(p)Ae(a,"complete"),Ae(a,"success");else{a.m=6;try{var M=2<Mn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",ug(a)}}finally{al(a)}}}}function al(a,h){if(a.g){hg(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ae(a,"ready");try{p.onreadystatechange=v}catch{}}}function hg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xI(h)}};function fg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ZI(a){const h={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(y(a[v]))continue;var p=N(a[v]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[L]||[];h[L]=M,M.push(p)}A(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function co(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function dg(a){this.Aa=0,this.i=[],this.j=new ro,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=co("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=co("baseRetryDelayMs",5e3,a),this.cb=co("retryDelaySeedMs",1e4,a),this.Wa=co("forwardChannelMaxRetries",2,a),this.wa=co("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Km(a&&a.concurrentRequestLimit),this.Da=new QI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,v){_t(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Tg(this,null,this.W),ul(this)};function Xc(a){if(pg(a),a.G==3){var h=a.U++,p=Dn(a.I);if(_e(p,"SID",a.K),_e(p,"RID",h),_e(p,"TYPE","terminate"),ho(a,p),h=new cr(a,a.j,h),h.L=2,h.v=il(Dn(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Ig(h.j,null),h.g.ea(h.v)),h.F=Date.now(),tl(h)}Eg(a)}function ll(a){a.g&&(Zc(a),a.g.cancel(),a.g=null)}function pg(a){ll(a),a.u&&(l.clearTimeout(a.u),a.u=null),cl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ul(a){if(!Qm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Lt||ee(),$||(Lt(),$=!0),Y.add(h,a),a.B=0}}function eS(a,h){return Ym(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=no(m(a.Ga,a,h),wg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new cr(this,this.j,a);let M=this.o;if(this.S&&(M?(M=g(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(L.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=gg(this,L,h),p=Dn(this.I),_e(p,"RID",a),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),ho(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(ag(M)))+"&"+h:this.m&&Yc(p,this.m,M)),Qc(this.h,L),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",h),_e(p,"SID","null"),L.T=!0,Wc(L,p,null)):Wc(L,p,h),this.G=2}}else this.G==3&&(a?mg(this,a):this.i.length==0||Qm(this.h)||mg(this))};function mg(a,h){var p;h?p=h.l:p=a.U++;const v=Dn(a.I);_e(v,"SID",a.K),_e(v,"RID",p),_e(v,"AID",a.T),ho(a,v),a.m&&a.o&&Yc(v,a.m,a.o),p=new cr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=gg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qc(a.h,p),Wc(p,v,h)}function ho(a,h){a.H&&D(a.H,function(p,v){_e(h,v,p)}),a.l&&Zm({},function(p,v){_e(h,v,p)})}function gg(a,h,p){p=Math.min(a.i.length,p);var v=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let M=-1;for(;;){const B=["count="+p];M==-1?0<p?(M=L[0].g,B.push("ofs="+M)):M=0:B.push("ofs="+M);let ge=!0;for(let Je=0;Je<p;Je++){let le=L[Je].g;const ot=L[Je].map;if(le-=M,0>le)M=Math.max(0,L[Je].g-100),ge=!1;else try{YI(ot,B,"req"+le+"_")}catch{v&&v(ot)}}if(ge){v=B.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,v}function yg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Lt||ee(),$||(Lt(),$=!0),Y.add(h,a),a.v=0}}function Jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=no(m(a.Fa,a),wg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,vg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=no(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),ll(this),vg(this))};function Zc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function vg(a){a.g=new cr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Dn(a.qa);_e(h,"RID","rpc"),_e(h,"SID",a.K),_e(h,"AID",a.T),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(h,"TO",a.ja),_e(h,"TYPE","xmlhttp"),ho(a,h),a.m&&a.o&&Yc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=il(Dn(h)),p.m=null,p.P=!0,Wm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,ll(this),Jc(this),_t(19))};function cl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _g(a,h){var p=null;if(a.g==h){cl(a),Zc(a),a.g=null;var v=2}else if(Kc(a.h,h))p=h.D,Xm(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;v=Ja(),Ae(v,new zm(v,p)),ul(a)}else yg(a);else if(L=h.s,L==3||L==0&&0<h.X||!(v==1&&eS(a,h)||v==2&&Jc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),L){case 1:ii(a,5);break;case 4:ii(a,10);break;case 3:ii(a,6);break;default:ii(a,2)}}}function wg(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function ii(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),v=a.Xa;const L=!v;v=new ri(v||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||nl(v,"https"),il(v),L?GI(v.toString(),p):KI(v.toString(),p)}else _t(2);a.G=0,a.l&&a.l.sa(h),Eg(a),pg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Eg(a){if(a.G=0,a.ka=[],a.l){const h=Jm(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Tg(a,h,p){var v=p instanceof ri?Dn(p):new ri(p);if(v.g!="")h&&(v.g=h+"."+v.g),rl(v,v.s);else{var L=l.location;v=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var M=new ri(null);v&&nl(M,v),h&&(M.g=h),L&&rl(M,L),p&&(M.l=p),v=M}return p=a.D,h=a.ya,p&&h&&_e(v,p,h),_e(v,"VER",a.la),ho(a,v),v}function Ig(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Le(new sl({eb:p})):new Le(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sg(){}t=Sg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function hl(){}hl.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){me.call(this),this.g=new dg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Wi(this)}S(Mt,me),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Xc(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=jc(a),a=p);h.i.push(new VI(h.Ya++,a)),h.G==3&&ul(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Xc(this.g),delete this.g,Mt.aa.N.call(this)};function Ag(a){zc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Ag,zc);function Cg(){Bc.call(this),this.status=1}S(Cg,Bc);function Wi(a){this.g=a}S(Wi,Sg),Wi.prototype.ua=function(){Ae(this.g,"a")},Wi.prototype.ta=function(a){Ae(this.g,new Ag(a))},Wi.prototype.sa=function(a){Ae(this.g,new Cg)},Wi.prototype.ra=function(){Ae(this.g,"b")},hl.prototype.createWebChannel=hl.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,ZE=function(){return new hl},JE=function(){return Ja()},XE=ti,vd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Za.NO_ERROR=0,Za.TIMEOUT=8,Za.HTTP_ERROR=6,iu=Za,Bm.COMPLETE="complete",YE=Bm,Vm.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",me.prototype.listen=me.prototype.K,Oo=Vm,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,QE=Le}).apply(typeof Ol<"u"?Ol:typeof self<"u"?self:typeof window<"u"?window:{});const Wv="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ks="10.14.0";/**
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
 */const Ni=new zp("@firebase/firestore");function To(){return Ni.logLevel}function W(t,...e){if(Ni.logLevel<=se.DEBUG){const n=e.map(Zp);Ni.debug(`Firestore (${Ks}): ${t}`,...n)}}function rr(t,...e){if(Ni.logLevel<=se.ERROR){const n=e.map(Zp);Ni.error(`Firestore (${Ks}): ${t}`,...n)}}function Ls(t,...e){if(Ni.logLevel<=se.WARN){const n=e.map(Zp);Ni.warn(`Firestore (${Ks}): ${t}`,...n)}}function Zp(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw rr(e),new Error(e)}function pe(t,e){t||X()}function Z(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class ab{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lb{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new eT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new ft(e)}}class ub{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ub(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new hb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function db(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=db(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new qe(0,0))}static max(){return new J(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends wa{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends wa{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Me.fromString(e))}static fromName(e){return new K(Me.fromString(e).popFirst(5))}static empty(){return new K(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Me(e.slice()))}}function mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Hr(i,K.empty(),e)}function gb(t){return new Hr(t.readTime,t.key,-1)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(J.min(),K.empty(),-1)}static max(){return new Hr(J.max(),K.empty(),-1)}}function yb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function za(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==vb)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ba(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class em{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}em.oe=-1;function Pc(t){return t==null}function Wu(t){return t===0&&1/t==-1/0}function Eb(t){return typeof t=="number"&&Number.isInteger(t)&&!Wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function qv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ll(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ll(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ll(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ll(this.root,e,this.comparator,!0)}}class Ll{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gv(this.data.getIterator())}getIteratorFrom(e){return new Gv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Gv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new un([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rT("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Tb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(pe(!!t),typeof t=="string"){let e=0;const n=Tb.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bi(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function tm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nm(t){const e=t.mapValue.fields.__previous_value__;return tm(e)?nm(e):e}function Ea(t){const e=Wr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class Ib{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ta&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dl={mapValue:{}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tm(t)?4:Ab(t)?9007199254740991:Sb(t)?10:11:X()}function Rn(t,e){if(t===e)return!0;const n=Oi(t);if(n!==Oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Wr(i.timestampValue),l=Wr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bi(i.bytesValue).isEqual(bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),l=Fe(s.doubleValue);return o===l?Wu(o)===Wu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(qv(o)!==qv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Rn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Ia(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=Oi(t),r=Oi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Kv(t.timestampValue,e.timestampValue);case 4:return Kv(Ea(t),Ea(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=bi(s),u=bi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ue(l[c],u[c]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Fe(s.latitude),Fe(o.latitude));return l!==0?l:ue(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const d=s.fields||{},m=o.fields||{},w=(l=d.value)===null||l===void 0?void 0:l.arrayValue,S=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=ue(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Qv(w,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Dl.mapValue&&o===Dl.mapValue)return 0;if(s===Dl.mapValue)return 1;if(o===Dl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let d=0;d<u.length&&d<f.length;++d){const m=ue(u[d],f[d]);if(m!==0)return m;const w=Ms(l[u[d]],c[f[d]]);if(w!==0)return w}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Kv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Wr(t),r=Wr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Qv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ms(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Vs(t){return _d(t)}function _d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_d(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_d(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function wd(t){return!!t&&"integerValue"in t}function rm(t){return!!t&&"arrayValue"in t}function Yv(t){return!!t&&"nullValue"in t}function Xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function su(t){return!!t&&"mapValue"in t}function Sb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ab(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ko(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ko(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(Ko(this.value))}}function iT(t){const e=[];return Qs(t.fields,(n,r)=>{const i=new tt([n]);if(su(r)){const s=iT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,J.min(),J.min(),J.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,J.min(),J.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,J.min(),J.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qu{constructor(e,n){this.position=e,this.inclusive=n}}function Jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sT{}class He extends sT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kb(e,n,r):n==="array-contains"?new Nb(e,r):n==="in"?new bb(e,r):n==="not-in"?new Ob(e,r):n==="array-contains-any"?new Lb(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Rb(e,r):new xb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&Oi(this.value)===Oi(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends sT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return oT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function oT(t){return t.op==="and"}function aT(t){return Pb(t)&&oT(t)}function Pb(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Ed(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(aT(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function lT(t,e){return t instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof xn?function(r,i){return i instanceof xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&lT(o,i.filters[l]),!0):!1}(t,e):void X()}function uT(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(uT).join(" ,")+"}"}(t):"Filter"}class kb extends He{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rb extends He{constructor(e,n){super(e,"in",n),this.keys=cT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xb extends He{constructor(e,n){super(e,"not-in",n),this.keys=cT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Nb extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rm(n)&&Ia(n.arrayValue,this.value)}}class bb extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ia(this.value.arrayValue,n)}}class Ob extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ia(this.value.arrayValue,n)}}class Lb extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ia(this.value.arrayValue,r))}}/**
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
 */class Db{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function e_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Db(t,e,n,r,i,s,o)}function im(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=n}return e.ue}function sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zv(t.startAt,e.startAt)&&Zv(t.endAt,e.endAt)}function Td(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class kc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mb(t,e,n,r,i,s,o,l){return new kc(t,e,n,r,i,s,o,l)}function om(t){return new kc(t)}function t_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vb(t){return t.collectionGroup!==null}function Qo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gu(s,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Gu(tt.keyField(),r))}return e.ce}function Pn(t){const e=Z(t);return e.le||(e.le=Fb(e,Qo(t))),e.le}function Fb(t,e){if(t.limitType==="F")return e_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gu(i.field,s)});const n=t.endAt?new qu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qu(t.startAt.position,t.startAt.inclusive):null;return e_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e,n){return new kc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return sm(Pn(t),Pn(e))&&t.limitType===e.limitType}function hT(t){return`${im(Pn(t))}|lt:${t.limitType}`}function Yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uT(i)).join(", ")}]`),Pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vs(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Jv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Qo(r),i)||r.endAt&&!function(o,l,u){const c=Jv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Qo(r),i))}(t,e)}function jb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fT(t){return(e,n)=>{let r=!1;for(const i of Qo(t)){const s=Ub(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ub(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ms(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nT(this.inner)}size(){return this.innerSize}}/**
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
 */const zb=new Ne(K.comparator);function ir(){return zb}const dT=new Ne(K.comparator);function Lo(...t){let e=dT;for(const n of t)e=e.insert(n.key,n);return e}function pT(t){let e=dT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return Yo()}function mT(){return Yo()}function Yo(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bb=new Ne(K.comparator),$b=new rt(K.comparator);function ie(...t){let e=$b;for(const n of t)e=e.add(n);return e}const Hb=new rt(ue);function Wb(){return Hb}/**
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
 */function am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function gT(t){return{integerValue:""+t}}function qb(t,e){return Eb(e)?gT(e):am(t,e)}/**
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
 */class Nc{constructor(){this._=void 0}}function Gb(t,e,n){return t instanceof Ku?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tm(s)&&(s=nm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Sa?vT(t,e):t instanceof Aa?_T(t,e):function(i,s){const o=yT(i,s),l=n_(o)+n_(i.Pe);return wd(o)&&wd(i.Pe)?gT(l):am(i.serializer,l)}(t,e)}function Kb(t,e,n){return t instanceof Sa?vT(t,e):t instanceof Aa?_T(t,e):n}function yT(t,e){return t instanceof Qu?function(r){return wd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ku extends Nc{}class Sa extends Nc{constructor(e){super(),this.elements=e}}function vT(t,e){const n=wT(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Aa extends Nc{constructor(e){super(),this.elements=e}}function _T(t,e){let n=wT(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Qu extends Nc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function n_(t){return Fe(t.integerValue||t.doubleValue)}function wT(t){return rm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Sa&&i instanceof Sa||r instanceof Aa&&i instanceof Aa?Ds(r.elements,i.elements,Rn):r instanceof Qu&&i instanceof Qu?Rn(r.Pe,i.Pe):r instanceof Ku&&i instanceof Ku}(t.transform,e.transform)}class Yb{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function ET(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new IT(t.key,qn.none()):new $a(t.key,t.data,qn.none());{const n=t.data,r=Kt.empty();let i=new rt(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fi(t.key,r,new un(i.toArray()),qn.none())}}function Xb(t,e,n){t instanceof $a?function(i,s,o){const l=i.value.clone(),u=i_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(i,s,o){if(!ou(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=i_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(TT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof $a?function(s,o,l,u){if(!ou(s.precondition,o))return l;const c=s.value.clone(),f=s_(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fi?function(s,o,l,u){if(!ou(s.precondition,o))return l;const c=s_(s.fieldTransforms,u,o),f=o.data;return f.setAll(TT(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,l){return ou(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Jb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yT(r.transform,i||null);s!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function r_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ds(r,i,(s,o)=>Qb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fi extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function TT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function i_(t,e,n){const r=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Kb(o,l,n[i]))}return r}function s_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Gb(s,o,e))}return r}class IT extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zb extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class e4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Xb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ET(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>r_(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>r_(n,r))}}class lm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length);let i=function(){return Bb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lm(e,n,r,i)}}/**
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
 */class t4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,oe;function r4(t){switch(t){default:return X();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function ST(t){if(t===void 0)return rr("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ue.OK:return j.OK;case Ue.CANCELLED:return j.CANCELLED;case Ue.UNKNOWN:return j.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return j.INTERNAL;case Ue.UNAVAILABLE:return j.UNAVAILABLE;case Ue.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ue.NOT_FOUND:return j.NOT_FOUND;case Ue.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ue.ABORTED:return j.ABORTED;case Ue.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ue.DATA_LOSS:return j.DATA_LOSS;default:return X()}}(oe=Ue||(Ue={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function i4(){return new TextEncoder}/**
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
 */const s4=new _i([4294967295,4294967295],0);function o_(t){const e=i4().encode(t),n=new KE;return n.update(e),new Uint8Array(n.digest())}function a_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _i([n,r],0),new _i([i,s],0)]}class um{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_i.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(_i.fromNumber(r)));return i.compare(s4)===1&&(i=new _i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=o_(e),[r,i]=a_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new um(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=o_(e),[r,i]=a_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oc(J.min(),i,new Ne(ue),ir(),ie())}}class Ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ha(r,n,ie(),ie(),ie())}}/**
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
 */class au{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class AT{constructor(e,n){this.targetId=e,this.me=n}}class CT{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class l_{constructor(){this.fe=0,this.ge=c_(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Ha(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=c_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class o4{constructor(e){this.Le=e,this.Be=new Map,this.ke=ir(),this.qe=u_(),this.Qe=new Ne(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Td(s))if(r===0){const o=new K(s.path);this.Ue(n,o,pt.newNoDocument(o,J.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=bi(r).toUint8Array()}catch(u){if(u instanceof rT)return Ls("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new um(o,i,s)}catch(u){return Ls(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Td(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,pt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Oc(e,n,this.Qe,this.ke,r);return this.ke=ir(),this.qe=u_(),this.Qe=new Ne(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new l_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new l_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function u_(){return new Ne(K.comparator)}function c_(){return new Ne(K.comparator)}const a4={asc:"ASCENDING",desc:"DESCENDING"},l4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},u4={and:"AND",or:"OR"};class c4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||Pc(e)?e:{value:e}}function Yu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function h4(t,e){return Yu(t,e.toTimestamp())}function kn(t){return pe(!!t),J.fromTimestamp(function(n){const r=Wr(n);return new qe(r.seconds,r.nanos)}(t))}function cm(t,e){return Ad(t,e).canonicalString()}function Ad(t,e){const n=function(i){return new Me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kT(t){const e=Me.fromString(t);return pe(OT(e)),e}function Cd(t,e){return cm(t.databaseId,e.path)}function Uh(t,e){const n=kT(e);if(n.get(1)!==t.databaseId.projectId)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(xT(n))}function RT(t,e){return cm(t.databaseId,e)}function f4(t){const e=kT(t);return e.length===4?Me.emptyPath():xT(e)}function Pd(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xT(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function h_(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function d4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(pe(f===void 0||typeof f=="string"),st.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?j.UNKNOWN:ST(c.code);return new G(f,c.message||"")}(o);n=new CT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uh(t,r.document.name),s=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):J.min(),l=new Kt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new au(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uh(t,r.document),s=r.readTime?kn(r.readTime):J.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new au([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uh(t,r.document),s=r.removedTargetIds||[];n=new au([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new n4(i,s),l=r.targetId;n=new AT(l,o)}}return n}function p4(t,e){let n;if(e instanceof $a)n={update:h_(t,e.key,e.value)};else if(e instanceof IT)n={delete:Cd(t,e.key)};else if(e instanceof Fi)n={update:h_(t,e.key,e.data),updateMask:I4(e.fieldMask)};else{if(!(e instanceof Zb))return X();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ku)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:h4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function m4(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?kn(i.updateTime):kn(s);return o.isEqual(J.min())&&(o=kn(s)),new Yb(o,i.transformResults||[])}(n,e))):[]}function g4(t,e){return{documents:[RT(t,e.path)]}}function y4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RT(t,i);const s=function(c){if(c.length!==0)return bT(xn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Xi(m.field),direction:w4(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function v4(t){let e=f4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(d){const m=NT(d);return m instanceof xn&&aT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(S){return new Gu(Ji(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Pc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(d){const m=!!d.before,w=d.values||[];return new qu(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const m=!d.before,w=d.values||[];return new qu(w,m)}(n.endAt)),Mb(e,i,o,s,l,"F",u,c)}function _4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ji(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ji(n.unaryFilter.field);return He.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ji(n.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ji(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>NT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function w4(t){return a4[t]}function E4(t){return l4[t]}function T4(t){return u4[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Ji(t){return tt.fromServerFormat(t.fieldPath)}function bT(t){return t instanceof He?function(n){if(n.op==="=="){if(Xv(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(Yv(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xv(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(Yv(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:E4(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(i=>bT(i));return r.length===1?r[0]:{compositeFilter:{op:T4(n.op),filters:r}}}(t):X()}function I4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=st.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class S4{constructor(e){this.ct=e}}function A4(t){const e=v4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
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
 */class C4{constructor(){this.un=new P4}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Hr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class P4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Me.comparator)).toArray()}}/**
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
 */class Fs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fs(0)}static kn(){return new Fs(-1)}}/**
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
 */class k4{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class R4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class x4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xo(r.mutation,i,un.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ir();const o=Yo(),l=function(){return Yo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Fi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Xo(f.mutation,c,f.mutation.getFieldMask(),qe.now())):o.set(c.key,un.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var d;return l.set(c,new R4(f,(d=o.get(c))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Yo();let i=new Ne((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||un.empty();f=l.applyToLocalView(c,f),r.set(u,f);const d=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,d)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,d=mT();f.forEach(m=>{if(!s.has(m)){const w=ET(n.get(m),r.get(m));w!==null&&d.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(mi());let l=-1,u=s;return o.next(c=>F.forEach(c,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(f=>({batchId:l,changes:pT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Lo();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(d,m){return new kc(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let l=Lo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Xo(f.mutation,c,un.empty(),qe.now()),xc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class N4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:kn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:A4(i.bundledQuery),readTime:kn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class b4{constructor(){this.overlays=new Ne(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=mi(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=mi(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=mi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new t4(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class O4{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class hm{constructor(){this.Tr=new rt(Ge.Er),this.dr=new rt(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Me([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Me([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class L4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(Ge.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new e4(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ge(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ue);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new K(s),0);let l=new rt(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class D4{constructor(e){this.Mr=e,this.docs=function(){return new Ne(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ir();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||yb(gb(f),r)<=0||(i.has(f.key)||xc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new M4(this)}getSize(e){return F.resolve(this.size)}}class M4 extends k4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class V4{constructor(e){this.persistence=e,this.Nr=new Ys(n=>im(n),sm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hm,this.targetCount=0,this.kr=Fs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class F4{constructor(e,n){this.qr={},this.overlays={},this.Qr=new em(0),this.Kr=!1,this.Kr=!0,this.$r=new O4,this.referenceDelegate=e(this),this.Ur=new V4(this),this.indexManager=new C4,this.remoteDocumentCache=function(i){return new D4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new S4(n),this.Gr=new N4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new b4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new L4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new j4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class j4 extends _b{constructor(e){super(),this.currentSequenceNumber=e}}class fm{constructor(e){this.persistence=e,this.Jr=new hm,this.Yr=null}static Zr(e){return new fm(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dm(e,n.fromCache,r,i)}}/**
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
 */class U4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class z4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nk()?8:wb(yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new U4;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(To()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(To()<=se.DEBUG&&W("QueryEngine","Query:",Yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(To()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):F.resolve())}Yi(e,n){if(t_(n))return F.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Id(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Id(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return t_(n)||i.isEqual(J.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(To()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yi(n)),this.rs(e,o,n,mb(i,-1)).next(l=>l))})}ts(e,n){let r=new rt(fT(e));return n.forEach((i,s)=>{xc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return To()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Yi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Hr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class B4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ne(ue),this._s=new Ys(s=>im(s),sm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x4(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function $4(t,e,n,r){return new B4(t,e,n,r)}async function LT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function H4(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const d=c.batch,m=d.keys();let w=F.resolve();return m.forEach(S=>{w=w.next(()=>f.getEntry(u,S)).next(k=>{const x=c.docVersions.get(S);pe(x!==null),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),f.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function DT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function W4(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,d)=>{const m=i.get(d);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,d)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?w=w.withResumeToken(st.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(d,w),function(k,x,_){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,w,f)&&l.push(n.Ur.updateTargetData(s,w))});let u=ir(),c=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(q4(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(d=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function q4(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function G4(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K4(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function kd(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ba(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function f_(t,e,n){const r=Z(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const d=Z(u),m=d._s.get(f);return m!==void 0?F.resolve(d.os.get(m)):d.Ur.getTargetData(c,f)}(r,o,Pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(l=>(Q4(r,jb(e),l),{documents:l,Ts:s})))}function Q4(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class d_{constructor(){this.activeTargetIds=Wb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Y4{constructor(){this.so=new d_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new d_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X4{_o(e){}shutdown(){}}/**
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
 */class p_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ml=null;function zh(){return Ml===null?Ml=function(){return 268435456+Math.round(2147483648*Math.random())}():Ml++,"0x"+Ml.toString(16)}/**
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
 */const J4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Z4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ct="WebChannelConnection";class eO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=zh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ls("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=J4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=zh();return new Promise((o,l)=>{const u=new QE;u.setWithCredentials(!0),u.listenOnce(YE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case iu.NO_ERROR:const f=u.getResponseJson();W(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case iu.TIMEOUT:W(ct,`RPC '${e}' ${s} timed out`),l(new G(j.DEADLINE_EXCEEDED,"Request time out"));break;case iu.HTTP_ERROR:const d=u.getStatus();if(W(ct,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const S=function(x){const _=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(w.status);l(new G(S,w.message))}else l(new G(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(j.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(ct,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=zh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZE(),l=JE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(ct,`Creating RPC '${e}' stream ${i}: ${f}`,u);const d=o.createWebChannel(f,u);let m=!1,w=!1;const S=new Z4({Io:x=>{w?W(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(W(ct,`Opening RPC '${e}' stream ${i} transport.`),d.open(),m=!0),W(ct,`RPC '${e}' stream ${i} sending:`,x),d.send(x))},To:()=>d.close()}),k=(x,_,y)=>{x.listen(_,I=>{try{y(I)}catch(R){setTimeout(()=>{throw R},0)}})};return k(d,Oo.EventType.OPEN,()=>{w||(W(ct,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),k(d,Oo.EventType.CLOSE,()=>{w||(w=!0,W(ct,`RPC '${e}' stream ${i} transport closed`),S.So())}),k(d,Oo.EventType.ERROR,x=>{w||(w=!0,Ls(ct,`RPC '${e}' stream ${i} transport errored:`,x),S.So(new G(j.UNAVAILABLE,"The operation could not be completed")))}),k(d,Oo.EventType.MESSAGE,x=>{var _;if(!w){const y=x.data[0];pe(!!y);const I=y,R=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(R){W(ct,`RPC '${e}' stream ${i} received error:`,R);const O=R.status;let D=function(E){const C=Ue[E];if(C!==void 0)return ST(C)}(O),A=R.message;D===void 0&&(D=j.INTERNAL,A="Unknown error status: "+O+" with message "+R.message),w=!0,S.So(new G(D,A)),d.close()}else W(ct,`RPC '${e}' stream ${i} received:`,y),S.bo(y)}}),k(l,XE.STAT_EVENT,x=>{x.stat===vd.PROXY?W(ct,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===vd.NOPROXY&&W(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Bh(){return typeof document<"u"?document:null}/**
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
 */function Lc(t){return new c4(t,!0)}/**
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
 */class MT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class VT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new MT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tO extends VT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=d4(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?kn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Td(u)?{documents:g4(s,u)}:{query:y4(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=PT(s,o.resumeToken);const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Yu(s,o.snapshotVersion.toTimestamp());const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=_4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.a_(n)}}class nO extends VT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=m4(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>p4(this.serializer,r))};this.a_(n)}}/**
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
 */class rO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ad(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ad(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rr(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class sO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ji(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await Wa(c),c.q_.set("Unknown"),c.L_.delete(4),await Dc(c)}(this))})}),this.q_=new iO(r,i)}}async function Dc(t){if(ji(t))for(const e of t.B_)await e(!0)}async function Wa(t){for(const e of t.B_)await e(!1)}function FT(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ym(n)?gm(n):Xs(n).r_()&&mm(n,e))}function pm(t,e){const n=Z(t),r=Xs(n);n.N_.delete(e),r.r_()&&jT(n,e),n.N_.size===0&&(r.r_()?r.o_():ji(n)&&n.q_.set("Unknown"))}function mm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xs(t).A_(e)}function jT(t,e){t.Q_.xe(e),Xs(t).R_(e)}function gm(t){t.Q_=new o4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xs(t).start(),t.q_.v_()}function ym(t){return ji(t)&&!Xs(t).n_()&&t.N_.size>0}function ji(t){return Z(t).L_.size===0}function UT(t){t.Q_=void 0}async function oO(t){t.q_.set("Online")}async function aO(t){t.N_.forEach((e,n)=>{mm(t,e)})}async function lO(t,e){UT(t),ym(t)?(t.q_.M_(e),gm(t)):t.q_.set("Unknown")}async function uO(t,e,n){if(t.q_.set("Online"),e instanceof CT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xu(t,r)}else if(e instanceof au?t.Q_.Ke(e):e instanceof AT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await DT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),jT(s,u);const d=new Cr(f.target,u,c,f.sequenceNumber);mm(s,d)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Xu(t,r)}}async function Xu(t,e,n){if(!Ba(e))throw e;t.L_.add(1),await Wa(t),t.q_.set("Offline"),n||(n=()=>DT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Dc(t)})}function zT(t,e){return e().catch(n=>Xu(t,n,e))}async function Mc(t){const e=Z(t),n=qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cO(e);)try{const i=await G4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,hO(e,i)}catch(i){await Xu(e,i)}BT(e)&&$T(e)}function cO(t){return ji(t)&&t.O_.length<10}function hO(t,e){t.O_.push(e);const n=qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function BT(t){return ji(t)&&!qr(t).n_()&&t.O_.length>0}function $T(t){qr(t).start()}async function fO(t){qr(t).p_()}async function dO(t){const e=qr(t);for(const n of t.O_)e.m_(n.mutations)}async function pO(t,e,n){const r=t.O_.shift(),i=lm.from(r,e,n);await zT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mc(t)}async function mO(t,e){e&&qr(t).V_&&await async function(r,i){if(function(o){return r4(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();qr(r).s_(),await zT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mc(r)}}(t,e),BT(t)&&$T(t)}async function m_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.L_.add(3),await Wa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Dc(n)}async function gO(t,e){const n=Z(t);e?(n.L_.delete(2),await Dc(n)):e||(n.L_.add(2),await Wa(n),n.q_.set("Unknown"))}function Xs(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new tO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:oO.bind(null,t),Ro:aO.bind(null,t),mo:lO.bind(null,t),d_:uO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ym(t)?gm(t):t.q_.set("Unknown")):(await t.K_.stop(),UT(t))})),t.K_}function qr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new nO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fO.bind(null,t),mo:mO.bind(null,t),f_:dO.bind(null,t),g_:pO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Mc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class vm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new vm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _m(t,e){if(rr("AsyncQueue",`${e}: ${t}`),Ba(t))return new G(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class As{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Lo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new As;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class g_{constructor(){this.W_=new Ne(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class js{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new js(e,n,As.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vO{constructor(){this.queries=y_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=y_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(j.ABORTED,"Firestore shutting down"))}}function y_(){return new Ys(t=>hT(t),Rc)}async function _O(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new yO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=_m(o,`Initialization of query '${Yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&wm(n)}async function wO(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EO(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&wm(n)}function TO(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function wm(t){t.Y_.forEach(e=>{e.next()})}var Rd,v_;(v_=Rd||(Rd={})).ea="default",v_.Cache="cache";class IO{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rd.Cache}}/**
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
 */class HT{constructor(e){this.key=e}}class WT{constructor(e){this.key=e}}class SO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=fT(e),this.Ra=new As(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new g_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,d)=>{const m=i.get(f),w=xc(this.query,d)?d:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;m&&w?m.data.isEqual(w.data)?S!==k&&(r.track({type:3,doc:w}),x=!0):this.ga(m,w)||(r.track({type:2,doc:w}),x=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),x=!0):m&&!w&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(w?(o=o.add(w),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,d)=>function(w,S){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return k(w)-k(S)}(f.type,d.type)||this.Aa(f.doc,d.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new js(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new g_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new WT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new HT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return js.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CO{constructor(e){this.key=e,this.va=!1}}class PO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ys(l=>hT(l),Rc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(K.comparator),this.Na=new Map,this.La=new hm,this.Ba={},this.ka=new Map,this.qa=Fs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kO(t,e,n=!0){const r=XT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await qT(r,e,n,!0),i}async function RO(t,e){const n=XT(t);await qT(n,e,!0,!1)}async function qT(t,e,n,r){const i=await K4(t.localStore,Pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await xO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&FT(t.remoteStore,i),l}async function xO(t,e,n,r,i){t.Ka=(d,m,w)=>async function(k,x,_,y){let I=x.view.ma(_);I.ns&&(I=await f_(k.localStore,x.query,!1).then(({documents:A})=>x.view.ma(A,I)));const R=y&&y.targetChanges.get(x.targetId),O=y&&y.targetMismatches.get(x.targetId)!=null,D=x.view.applyChanges(I,k.isPrimaryClient,R,O);return w_(k,x.targetId,D.wa),D.snapshot}(t,d,m,w);const s=await f_(t.localStore,e,!0),o=new SO(e,s.Ts),l=o.ma(s.documents),u=Ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);w_(t,n,c.wa);const f=new AO(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function NO(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Rc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&pm(r.remoteStore,i.targetId),xd(r,i.targetId)}).catch(za)):(xd(r,i.targetId),await kd(r.localStore,i.targetId,!0))}async function bO(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pm(n.remoteStore,r.targetId))}async function OO(t,e,n){const r=UO(t);try{const i=await function(o,l){const u=Z(o),c=qe.now(),f=l.reduce((w,S)=>w.add(S.key),ie());let d,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=ir(),k=ie();return u.cs.getEntries(w,f).next(x=>{S=x,S.forEach((_,y)=>{y.isValidDocument()||(k=k.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,S)).next(x=>{d=x;const _=[];for(const y of l){const I=Jb(y,d.get(y.key).overlayedDocument);I!=null&&_.push(new Fi(y.key,I,iT(I.value.mapValue),qn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,_,l)}).next(x=>{m=x;const _=x.applyToLocalDocumentSet(d,k);return u.documentOverlayCache.saveOverlays(w,x.batchId,_)})}).then(()=>({batchId:m.batchId,changes:pT(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ne(ue)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await qa(r,i.changes),await Mc(r.remoteStore)}catch(i){const s=_m(i,"Failed to persist write");n.reject(s)}}async function GT(t,e){const n=Z(t);try{const r=await W4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?pe(o.va):i.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await qa(n,r,e)}catch(r){await za(r)}}function __(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,d)=>{for(const m of d.j_)m.Z_(l)&&(c=!0)}),c&&wm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ne(K.comparator);o=o.insert(s,pt.newNoDocument(s,J.min()));const l=ie().add(s),u=new Oc(J.min(),new Map,new Ne(ue),o,l);await GT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Em(r)}else await kd(r.localStore,e,!1).then(()=>xd(r,e,n)).catch(za)}async function DO(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await H4(n.localStore,e);QT(n,r,null),KT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qa(n,i)}catch(i){await za(i)}}async function MO(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(d=>(pe(d!==null),f=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);QT(r,e,n),KT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qa(r,i)}catch(i){await za(i)}}function KT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function QT(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||YT(t,r)})}function YT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(pm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Em(t))}function w_(t,e,n){for(const r of n)r instanceof HT?(t.La.addReference(r.key,e),VO(t,r)):r instanceof WT?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||YT(t,r.key)):X()}function VO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Em(t))}function Em(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Me.fromString(e)),r=t.qa.next();t.Na.set(r,new CO(n)),t.Oa=t.Oa.insert(n,r),FT(t.remoteStore,new Cr(Pn(om(n.path)),r,"TargetPurposeLimboResolution",em.oe))}}async function qa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=dm.Wi(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(c,m=>F.forEach(m.$i,w=>f.persistence.referenceDelegate.addReference(d,m.targetId,w)).next(()=>F.forEach(m.Ui,w=>f.persistence.referenceDelegate.removeReference(d,m.targetId,w)))))}catch(d){if(!Ba(d))throw d;W("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const m=d.targetId;if(!d.fromCache){const w=f.os.get(m),S=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,k)}}}(r.localStore,s))}async function FO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await LT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qa(n,r.hs)}}function jO(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function XT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LO.bind(null,e),e.Ca.d_=EO.bind(null,e.eventManager),e.Ca.$a=TO.bind(null,e.eventManager),e}function UO(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MO.bind(null,e),e}class Ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return $4(this.persistence,new z4,e.initialUser,this.serializer)}Ga(e){return new F4(fm.Zr,this.serializer)}Wa(e){return new Y4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ju.provider={build:()=>new Ju};class Nd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>__(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FO.bind(null,this.syncEngine),await gO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vO}()}createDatastore(e){const n=Lc(e.databaseInfo.databaseId),r=function(s){return new eO(s)}(e.databaseInfo);return function(s,o,l,u){return new rO(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new sO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>__(this.syncEngine,n,0),function(){return p_.D()?new p_:new X4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const d=new PO(i,s,o,l,u,c);return f&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Wa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nd.provider={build:()=>new Nd};/**
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
 */class zO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=tT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_m(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $h(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function E_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $O(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>m_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>m_(e.remoteStore,i)),t._onlineComponents=e}async function $O(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await $h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ls("Error using user provided cache. Falling back to memory cache: "+n),await $h(t,new Ju)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await $h(t,new Ju);return t._offlineComponents}async function JT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await E_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await E_(t,new Nd))),t._onlineComponents}function HO(t){return JT(t).then(e=>e.syncEngine)}async function WO(t){const e=await JT(t),n=e.eventManager;return n.onListen=kO.bind(null,e.syncEngine),n.onUnlisten=NO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bO.bind(null,e.syncEngine),n}function qO(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new zO({next:m=>{f.Za(),o.enqueueAndForget(()=>wO(s,d));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new G(j.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new G(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),d=new IO(om(l.path),f,{includeMetadataChanges:!0,_a:!0});return _O(s,d)}(await WO(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ZT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const T_=new Map;/**
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
 */function GO(t,e,n){if(!n)throw new G(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KO(t,e,n,r){if(e===!0&&r===!0)throw new G(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function I_(t){if(!K.isDocumentKey(t))throw new G(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Ca(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tm(t);throw new G(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class S_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Im{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ob;switch(r.type){case"firstParty":return new cb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=T_.get(n);r&&(W("ComponentProvider","Removing Datastore"),T_.delete(n),r.terminate())}(this),Promise.resolve()}}function QO(t,e,n,r={}){var i;const s=(t=Ca(t,Im))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ft.MOCK_USER;else{l=oE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ft(c)}t._authCredentials=new ab(new eT(l,u))}}/**
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
 */class Sm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sm(this.firestore,e,this._query)}}class Xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class Pa extends Sm{constructor(e,n,r){super(e,n,om(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new K(e))}withConverter(e){return new Pa(this.firestore,e,this._path)}}function lu(t,e,...n){if(t=vt(t),arguments.length===1&&(e=tT.newId()),GO("doc","path",e),t instanceof Im){const r=Me.fromString(e,...n);return I_(r),new Xt(t,null,new K(r))}{if(!(t instanceof Xt||t instanceof Pa))throw new G(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return I_(r),new Xt(t.firestore,t instanceof Pa?t.converter:null,new K(r))}}/**
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
 */class A_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new MT(this,"async_queue_retry"),this.Vu=()=>{const r=Bh();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Bh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ba(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=vm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Am extends Im{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new A_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function YO(t,e){const n=typeof t=="object"?t:$p(),r=typeof t=="string"?t:e,i=Ic(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rE("firestore");s&&QO(i,...s)}return i}function eI(t){if(t._terminated)throw new G(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XO(t),t._firestoreClient}function XO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new Ib(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ZT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(st.fromBase64String(e))}catch(n){throw new G(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Cm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tI{constructor(e){this._methodName=e}}/**
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
 */class Pm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class km{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const JO=/^__.*__$/;class ZO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}function nI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Rm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nI(this.Cu)&&JO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class eL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lc(e)}Qu(e,n,r,i=!1){return new Rm({Cu:e,methodName:n,qu:r,path:tt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tL(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new eL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);oI("Data must be an object, but it was:",o,r);const l=iI(r,o);let u,c;if(s.merge)u=new un(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const d of s.mergeFields){const m=rL(e,d,n);if(!o.contains(m))throw new G(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sL(f,m)||f.push(m)}u=new un(f),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new ZO(new Kt(l),u,c)}function rI(t,e){if(sI(t=vt(t)))return oI("Unsupported field value:",e,t),iI(t,e);if(t instanceof tI)return function(r,i){if(!nI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=rI(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Yu(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yu(i.serializer,s)}}if(r instanceof Pm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:PT(i.serializer,r._byteString)};if(r instanceof Xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof km)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return am(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Tm(r)}`)}(t,e)}function iI(t,e){const n={};return nT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(t,(r,i)=>{const s=rI(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Pm||t instanceof Us||t instanceof Xt||t instanceof tI||t instanceof km)}function oI(t,e,n){if(!sI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Tm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function rL(t,e,n){if((e=vt(e))instanceof Cm)return e._internalPath;if(typeof e=="string")return aI(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const iL=new RegExp("[~\\*/\\[\\]]");function aI(t,e,n){if(e.search(iL)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cm(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(j.INVALID_ARGUMENT,l+t+u)}function sL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oL extends lI{data(){return super.data()}}function uI(t,e){return typeof e=="string"?aI(t,e):e instanceof Cm?e._internalPath:e._delegate._internalPath}class aL{convertValue(e,n="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Fe(o.doubleValue));return new km(s)}convertGeoPoint(e){return new Pm(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);pe(OT(r));const i=new Ta(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function lL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class uL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cI extends lI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cL extends cI{data(e={}){return super.data(e)}}/**
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
 */function hI(t){t=Ca(t,Xt);const e=Ca(t.firestore,Am);return qO(eI(e),t._key).then(n=>dL(e,t,n))}class hL extends aL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function C_(t,e,n){t=Ca(t,Xt);const r=Ca(t.firestore,Am),i=lL(t.converter,e,n);return fL(r,[nL(tL(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qn.none())])}function fL(t,e){return function(r,i){const s=new Vr;return r.asyncQueue.enqueueAndForget(async()=>OO(await HO(r),i,s)),s.promise}(eI(t),e)}function dL(t,e,n){const r=n.docs.get(e._key),i=new hL(t);return new cI(t,i,e._key,r,new uL(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ks=i})(Vi),Ri(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Am(new lb(r.getProvider("auth-internal")),new fb(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ta(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),In(Wv,"4.7.3",e),In(Wv,"4.7.3","esm2017")})();var pL="firebase",mL="10.14.1";/**
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
 */In(pL,mL,"app");/**
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
 */const fI="firebasestorage.googleapis.com",dI="storageBucket",gL=2*60*1e3,yL=10*60*1e3;/**
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
 */class Xe extends Nn{constructor(e,n,r=0){super(Hh(e),`Firebase Storage: ${n} (${Hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ye||(Ye={}));function Hh(t){return"storage/"+t}function pI(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(Ye.UNKNOWN,t)}function vL(t){return new Xe(Ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function _L(t){return new Xe(Ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(Ye.UNAUTHENTICATED,t)}function EL(){return new Xe(Ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TL(t){return new Xe(Ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IL(){return new Xe(Ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SL(){return new Xe(Ye.CANCELED,"User canceled the upload/download.")}function AL(t){return new Xe(Ye.INVALID_URL,"Invalid URL '"+t+"'.")}function CL(t){return new Xe(Ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function PL(){return new Xe(Ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dI+"' property when initializing the app?")}function kL(){return new Xe(Ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bd(t){return new Xe(Ye.INVALID_ARGUMENT,t)}function mI(){return new Xe(Ye.APP_DELETED,"The Firebase app was deleted.")}function RL(t){return new Xe(Ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Io(t){throw new Xe(Ye.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw CL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${d}/${f}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},k=n===fI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",_=new RegExp(`^https?://${k}/${i}/${x}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:w,indices:S,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<I.length;R++){const O=I[R],D=O.regex.exec(e);if(D){const A=D[O.indices.bucket];let g=D[O.indices.path];g||(g=""),r=new Ut(A,g),O.postModify(r);break}}if(r==null)throw AL(e);return r}}class xL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NL(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...x){c||(c=!0,e.apply(null,x))}function d(x){i=setTimeout(()=>{i=null,t(w,u())},x)}function m(){s&&clearTimeout(s)}function w(x,..._){if(c){m();return}if(x){m(),f.call(null,x,..._);return}if(u()||o){m(),f.call(null,x,..._);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,d(I)}let S=!1;function k(x){S||(S=!0,m(),!c&&(i!==null?(x||(l=2),clearTimeout(i),d(0)):x||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function bL(t){t(!1)}/**
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
 */function OL(t){return t!==void 0}function LL(t){return typeof t=="object"&&!Array.isArray(t)}function gI(t){return typeof t=="string"||t instanceof String}function P_(t,e,n,r){if(r<e)throw bd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function yI(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function vI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wi||(wi={}));/**
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
 */function DL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ML{constructor(e,n,r,i,s,o,l,u,c,f,d,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Vl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===wi.NO_ERROR,u=s.getStatus();if(!l||DL(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===wi.ABORT;r(!1,new Vl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Vl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());OL(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=pI();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?mI():SL();o(u)}else{const u=IL();o(u)}};this.canceled_?n(!1,new Vl(!1,null,!0)):this.backoffId_=NL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zL(t,e,n,r,i,s,o=!0){const l=vI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return jL(c,e),VL(c,n),FL(c,s),UL(c,r),new ML(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function _I(t){let e;try{e=JSON.parse(t)}catch{return null}return LL(e)?e:null}/**
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
 */function BL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $L(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function wI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function HL(t,e){return e}class wt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||HL}}let Fl=null;function WL(t){return!gI(t)||t.length<2?t:wI(t)}function qL(){if(Fl)return Fl;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(s,o){return WL(o)}const n=new wt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),Fl=t,Fl}function GL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ut(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function KL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return GL(r,t),r}function QL(t,e,n){const r=_I(e);return r===null?null:KL(t,r,n)}function YL(t,e,n,r){const i=_I(e);if(i===null||!gI(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,d=t.fullPath,m="/b/"+o(f)+"/o/"+o(d),w=yI(m,n,r),S=vI({alt:"media",token:c});return w+S})[0]}class XL{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function JL(t){if(!t)throw pI()}function ZL(t,e){function n(r,i){const s=QL(t,i,e);return JL(s!==null),YL(s,i,t.host,t._protocol)}return n}function eD(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=EL():i=wL():n.getStatus()===402?i=_L(t.bucket):n.getStatus()===403?i=TL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function tD(t){const e=eD(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=vL(t.path)),s.serverResponse=i.serverResponse,s}return n}function nD(t,e,n){const r=e.fullServerUrl(),i=yI(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new XL(i,s,ZL(t,n),o);return l.errorHandler=tD(e),l}class rD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class iD extends rD{initXhr(){this.xhr_.responseType="text"}}function sD(){return new iD}/**
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
 */class Li{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Li(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wI(this._location.path)}get storage(){return this._service}get parent(){const e=BL(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RL(e)}}function oD(t){t._throwIfRoot("getDownloadURL");const e=nD(t.storage,t._location,qL());return t.storage.makeRequestWithTokens(e,sD).then(n=>{if(n===null)throw kL();return n})}function aD(t,e){const n=$L(t._location.path,e),r=new Ut(t._location.bucket,n);return new Li(t.storage,r)}/**
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
 */function lD(t){return/^[A-Za-z]+:\/\//.test(t)}function uD(t,e){return new Li(t,e)}function EI(t,e){if(t instanceof xm){const n=t;if(n._bucket==null)throw PL();const r=new Li(n,n._bucket);return e!=null?EI(r,e):r}else return e!==void 0?aD(t,e):t}function cD(t,e){if(e&&lD(e)){if(t instanceof xm)return uD(t,e);throw bd("To use ref(service, url), the first argument must be a Storage instance.")}else return EI(t,e)}function k_(t,e){const n=e==null?void 0:e[dI];return n==null?null:Ut.makeFromBucketSpec(n,t)}function hD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:oE(i,t.app.options.projectId))}class xm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gL,this._maxUploadRetryTime=yL,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=k_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=k_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){P_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){P_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Li(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new xL(mI());{const o=zL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const R_="@firebase/storage",x_="0.13.2";/**
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
 */const TI="storage";function fD(t){return t=vt(t),oD(t)}function dD(t,e){return t=vt(t),cD(t,e)}function pD(t=$p(),e){t=vt(t);const r=Ic(t,TI).getImmediate({identifier:e}),i=rE("storage");return i&&mD(r,...i),r}function mD(t,e,n,r={}){hD(t,e,n,r)}function gD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new xm(n,r,i,e,Vi)}function yD(){Ri(new $r(TI,gD,"PUBLIC").setMultipleInstances(!0)),In(R_,x_,""),In(R_,x_,"esm2017")}yD();const vD={apiKey:"AIzaSyDqGGBsry3u5lo0T83X6T4B__v8On_kSV0",authDomain:"neighborhood-values.firebaseapp.com",projectId:"neighborhood-values",storageBucket:"neighborhood-values.firebasestorage.app",messagingSenderId:"259918371128",appId:"1:259918371128:web:35e0037527bf28b6f409cd"},Nm=uE(vD),uu=YO(Nm,"neighborhood-values"),Od=GE(Nm),_D=pD(Nm);jx(Od).catch(t=>{console.error("Anonymous sign-in failed:",t)});const II=V.createContext({user:null,userData:null,loading:!0,isAnonymous:!0,signOut:async()=>{}}),Vc=()=>V.useContext(II),wD=({children:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(null),[s,o]=V.useState(!0),[l,u]=V.useState(!0);V.useEffect(()=>{const f=Gx(Od,async d=>{if(n(d),u((d==null?void 0:d.isAnonymous)||!0),d&&!d.isAnonymous){const m=await hI(lu(uu,"users",d.uid)),w=m.exists()?m.data().role:"User";i({uid:d.uid,email:d.email||"",role:w,displayName:d.displayName||void 0})}else i(null);o(!1)});return()=>f()},[]);const c=async()=>{await Kx(Od),n(null),i(null)};return T.jsx(II.Provider,{value:{user:e,userData:r,loading:s,isAnonymous:l,signOut:c},children:t})},ED=({onClose:t,onLoginSuccess:e})=>{const{user:n,userData:r,isAnonymous:i,signOut:s}=Vc(),[o,l]=V.useState(""),[u,c]=V.useState(""),[f,d]=V.useState(!1),[m,w]=V.useState("User"),[S,k]=V.useState(!1),[x,_]=V.useState(null),y=GE(),I=async g=>{try{const E=await hI(lu(uu,"users",g));return E.exists()&&E.data().role||"User"}catch(E){return console.error("Error fetching user role:",E),"User"}},R=async(g,E,C)=>{try{await C_(lu(uu,"users",g),{email:E,role:C,createdAt:new Date,lastLogin:new Date})}catch(N){throw console.error("Error saving user data:",N),N}},O=async g=>{g.preventDefault(),console.log("Login handler called"),k(!0),_("");try{const C=(await Hx(y,o,u)).user;await I(C.uid),await C_(lu(uu,"users",C.uid),{lastLogin:new Date},{merge:!0}),e&&e()}catch(E){_(E.message||"Login failed")}finally{k(!1)}},D=async g=>{g.preventDefault(),console.log("Register handler called"),k(!0),_("");try{const C=(await $x(y,o,u)).user;await R(C.uid,C.email,m),e&&e()}catch(E){_(E.message||"Registration failed")}finally{k(!1)}},A=async()=>{await s(),t&&t()};if(n){const g=(r==null?void 0:r.email)||n.email,E=(r==null?void 0:r.role)||"User";return T.jsxs("div",{className:"header-panel login-panel",children:[T.jsxs("div",{className:"panel-header",children:[T.jsx("h3",{children:"User Profile"}),T.jsx("button",{className:"close-btn",onClick:t,children:T.jsx($e,{icon:ki})})]}),T.jsx("div",{className:"panel-content",children:T.jsxs("div",{className:"user-info-display",children:[T.jsxs("p",{children:[T.jsx("strong",{children:"Email:"})," ",g]}),T.jsxs("p",{children:[T.jsx("strong",{children:"Role:"})," ",E]}),T.jsx("button",{onClick:A,className:"logout-btn",children:"Sign Out"})]})})]})}return T.jsxs("div",{className:"header-panel login-panel",children:[T.jsxs("div",{className:"panel-header",children:[T.jsx("h3",{children:f?"User Registration":"User Login"}),T.jsx("button",{className:"close-btn",onClick:t,children:T.jsx($e,{icon:ki})})]}),T.jsx("div",{className:"panel-content",children:T.jsxs("form",{className:"login-form",onSubmit:f?D:O,children:[x&&T.jsx("div",{className:"error-message",children:x}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"email",children:"Email"}),T.jsx("input",{type:"email",id:"email",value:o,onChange:g=>l(g.target.value),placeholder:"Enter your email",className:"form-input",required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"password",children:"Password"}),T.jsx("input",{type:"password",id:"password",value:u,onChange:g=>c(g.target.value),placeholder:"Enter your password",className:"form-input",required:!0})]}),f&&T.jsxs("div",{className:"form-group",children:[T.jsx("label",{htmlFor:"role",children:"User Role"}),T.jsxs("select",{id:"role",value:m,onChange:g=>w(g.target.value),className:"form-input",children:[T.jsx("option",{value:"User",children:"User"}),T.jsx("option",{value:"Admin",children:"Admin"})]})]}),T.jsxs("div",{className:"form-actions",children:[T.jsx("button",{type:"submit",className:"login-btn",disabled:S,children:S?"Processing...":f?"Register":"Login"}),T.jsx("button",{type:"button",className:"register-btn",onClick:()=>{d(!f),_("")},children:f?"Back to Login":"Register"})]}),!f&&T.jsx("div",{className:"form-links",children:T.jsx("a",{href:"#",className:"forgot-password",children:"Forgot Password?"})})]})})]})},TD=({onClose:t,onAddPoint:e,coordinates:n,onCoordinatesChange:r,setIsAddingPoint:i})=>{const[s,o]=V.useState(""),[l,u]=V.useState(""),[c,f]=V.useState((n==null?void 0:n.neighborhood)||""),[d,m]=V.useState("Active"),[w,S]=V.useState(""),[k,x]=V.useState(""),[_,y]=V.useState(""),[I,R]=V.useState(""),[O,D]=V.useState("");V.useEffect(()=>{n&&(R(n.lat.toString()),D(n.lng.toString()),f(n.neighborhood||""),u(n.crossStreet||""))},[n]);const A=E=>{E.preventDefault();const C={type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(O),parseFloat(I)]},properties:{"Service Ty":s,"Cross Stre":l,neighbhood:c,Status:d,"Full Addre":w,"Refferal S":k,Estimate:_}};e(C),t()},g=()=>{R(""),D(""),r&&r(null),i&&i(!0)};return T.jsxs("div",{className:"header-panel add-point-panel",children:[T.jsxs("div",{className:"panel-header",children:[T.jsx("h3",{children:"Add New Service Point"}),T.jsx("button",{className:"close-btn",onClick:t,children:T.jsx($e,{icon:ki})})]}),T.jsx("div",{className:"panel-content",children:T.jsxs("form",{className:"add-point-form",onSubmit:A,children:[T.jsxs("div",{className:"form-group coordinates-group",children:[T.jsxs("div",{className:"coords-display",children:[T.jsxs("div",{children:[T.jsx("label",{children:"Latitude"}),T.jsx("input",{type:"text",value:I,onChange:E=>R(E.target.value),required:!0,readOnly:!0})]}),T.jsxs("div",{children:[T.jsx("label",{children:"Longitude"}),T.jsx("input",{type:"text",value:O,onChange:E=>D(E.target.value),required:!0,readOnly:!0})]})]}),T.jsx("button",{type:"button",onClick:g,className:"reset-coords-btn",children:"Reset Location"})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Service Type"}),T.jsx("input",{type:"text",value:s,onChange:E=>o(E.target.value),required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Cross Street"}),T.jsx("input",{type:"text",value:l,onChange:E=>u(E.target.value),required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Neighborhood"}),T.jsx("input",{type:"text",value:c,onChange:E=>f(E.target.value),required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Status"}),T.jsxs("select",{value:d,onChange:E=>m(E.target.value),children:[T.jsx("option",{value:"Active",children:"Active"}),T.jsx("option",{value:"Pending",children:"Pending"}),T.jsx("option",{value:"Complete",children:"Complete"})]})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Full Address"}),T.jsx("input",{type:"text",value:w,onChange:E=>S(E.target.value)})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Referral Source"}),T.jsx("input",{type:"text",value:k,onChange:E=>x(E.target.value)})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Estimate"}),T.jsx("input",{type:"text",value:_,onChange:E=>y(E.target.value)})]}),T.jsx("button",{type:"submit",className:"add-point-btn",children:"Add Point"})]})})]})},ID=({onLocationSelect:t,filters:e,onFiltersChange:n,filterPanelOpen:r,setFilterPanelOpen:i,isAddingPoint:s,setIsAddingPoint:o,addPointCoordinates:l,setAddPointCoordinates:u})=>{const[c,f]=V.useState(null),{user:d,userData:m,isAnonymous:w,signOut:S}=Vc();V.useEffect(()=>{l&&f("add-point")},[l]);const k=I=>{if(I==="filter")i(!r),f(null);else if(I==="add-point"){const R=!s;o(R),f(R?"add-point":null),i(!1)}else f(c===I?null:I),i(!1),o(!1)},x=()=>{f(null),i(!1),o(!1),u(null)},_=I=>{console.log("New point to add:",I)},y=I=>{t&&t(I),x()};return T.jsxs(T.Fragment,{children:[T.jsxs("header",{className:"app-header",children:[T.jsx("div",{className:"logo-container",children:T.jsx("img",{src:CA,alt:"Neighborhood Values Logo",className:"app-logo"})}),T.jsx("div",{className:"logo-container",children:T.jsx("img",{src:PA,alt:"Neighborhood Values Logo Text",className:"app-logo"})}),T.jsxs("div",{className:"button-box",children:[T.jsx("button",{className:c==="search"?"active":"",onClick:()=>k("search"),children:T.jsx($e,{icon:lk})}),T.jsx("button",{className:r?"active":"",onClick:()=>k("filter"),children:T.jsx($e,{icon:XP})}),T.jsx("button",{className:c==="login"?"active":"",onClick:()=>k("login"),children:T.jsx($e,{icon:KP})}),(m==null?void 0:m.role)==="Admin"&&T.jsx("button",{className:c==="add-point"||s?"active":"",onClick:()=>k("add-point"),children:T.jsx($e,{icon:uk})})]})]}),c==="search"&&T.jsx(mk,{onClose:x,onLocationSelect:y}),r&&T.jsx(gk,{onClose:()=>i(!1),onFiltersChange:n,initialFilters:e}),c==="login"&&T.jsx(ED,{onClose:x}),c==="add-point"&&T.jsx(TD,{onClose:x,onAddPoint:_,coordinates:l,onCoordinatesChange:u,setIsAddingPoint:o})]})},SD="modulepreload",AD=function(t){return"/neighborhood-value-plus/"+t},N_={},CD=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=AD(u),u in N_)return;N_[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":SD,c||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((m,w)=>{d.addEventListener("load",m),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},PD=V.createContext(null);function kD(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,r=Array.isArray(t)?t[1]:t?t.y:0,i=Array.isArray(e)?e[0]:e?e.x:0,s=Array.isArray(e)?e[1]:e?e.y:0;return n===i&&r===s}function Ft(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n)if(!e.hasOwnProperty(i)||!Ft(t[i],e[i]))return!1;return!0}return!1}function RD(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}function b_(t,e){if(!t.getProjection)return;const n=t.getProjection(),r=e.getProjection();Ft(n,r)||e.setProjection(n)}function O_(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function L_(t,e){const n=e.viewState||e;let r=!1;if("longitude"in n&&"latitude"in n){const i=t.center;t.center=new i.constructor(n.longitude,n.latitude),r=r||i!==t.center}if("zoom"in n){const i=t.zoom;t.zoom=n.zoom,r=r||i!==t.zoom}if("bearing"in n){const i=t.bearing;t.bearing=n.bearing,r=r||i!==t.bearing}if("pitch"in n){const i=t.pitch;t.pitch=n.pitch,r=r||i!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(r=!0,t.padding=n.padding),r}const xD=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function D_(t){if(!t)return null;if(typeof t=="string"||("toJS"in t&&(t=t.toJS()),!t.layers))return t;const e={};for(const r of t.layers)e[r.id]=r;const n=t.layers.map(r=>{let i=null;"interactive"in r&&(i=Object.assign({},r),delete i.interactive);const s=e[r.ref];if(s){i=i||Object.assign({},r),delete i.ref;for(const o of xD)o in s&&(i[o]=s[o])}return i||r});return{...t,layers:n}}var M_={};const V_={version:8,sources:{},layers:[]},F_={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},Wh={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},j_={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},ND=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],bD=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class zs{constructor(e,n,r){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=i=>{const s=this.props[j_[i.type]];s?s(i):i.type==="error"&&console.error(i.error)},this._onPointerEvent=i=>{(i.type==="mousemove"||i.type==="mouseout")&&this._updateHover(i);const s=this.props[F_[i.type]];s&&(this.props.interactiveLayerIds&&i.type!=="mouseover"&&i.type!=="mouseout"&&(i.features=this._hoveredFeatures||this._queryRenderedFeatures(i.point)),s(i),delete i.features)},this._onCameraEvent=i=>{if(!this._internalUpdate){const s=this.props[Wh[i.type]];s&&s(i)}i.type in this._deferredEvents&&(this._deferredEvents[i.type]=!1)},this._MapClass=e,this.props=n,this._initialize(r)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const n=this.props;this.props=e;const r=this._updateSettings(e,n);r&&this._createShadowTransform(this._map);const i=this._updateSize(e),s=this._updateViewState(e,!0);this._updateStyle(e,n),this._updateStyleComponents(e,n),this._updateHandlers(e,n),(r||i||s&&!this._map.isMoving())&&this.redraw()}static reuse(e,n){const r=zs.savedMaps.pop();if(!r)return null;const i=r.map,s=i.getContainer();for(n.className=s.className;s.childNodes.length>0;)n.appendChild(s.childNodes[0]);i._container=n;const o=i._resizeObserver;o&&(o.disconnect(),o.observe(n)),r.setProps({...e,styleDiffing:!1}),i.resize();const{initialViewState:l}=e;return l&&(l.bounds?i.fitBounds(l.bounds,{...l.fitBoundsOptions,duration:0}):r._updateViewState(l,!1)),i.isStyleLoaded()?i.fire("load"):i.once("styledata",()=>i.fire("load")),i._update(),r}_initialize(e){const{props:n}=this,{mapStyle:r=V_}=n,i={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||OD()||null,container:e,style:D_(r)},s=i.initialViewState||i.viewState||i;if(Object.assign(i,{center:[s.longitude||0,s.latitude||0],zoom:s.zoom||0,pitch:s.pitch||0,bearing:s.bearing||0}),n.gl){const f=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=f,n.gl)}const o=new this._MapClass(i);s.padding&&o.setPadding(s.padding),n.cursor&&(o.getCanvas().style.cursor=n.cursor),this._createShadowTransform(o);const l=o._render;o._render=f=>{this._inRender=!0,l.call(o,f),this._inRender=!1};const u=o._renderTaskQueue.run;o._renderTaskQueue.run=f=>{u.call(o._renderTaskQueue,f),this._onBeforeRepaint()},o.on("render",()=>this._onAfterRepaint());const c=o.fire;o.fire=this._fireEvent.bind(this,c),o.on("resize",()=>{this._renderTransform.resize(o.transform.width,o.transform.height)}),o.on("styledata",()=>{this._updateStyleComponents(this.props,{}),b_(o.transform,this._renderTransform)}),o.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const f in F_)o.on(f,this._onPointerEvent);for(const f in Wh)o.on(f,this._onCameraEvent);for(const f in j_)o.on(f,this._onEvent);this._map=o}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),zs.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const n=RD(e.transform);e.painter.transform=n,this._renderTransform=n}_updateSize(e){const{viewState:n}=e;if(n){const r=this._map;if(n.width!==r.transform.width||n.height!==r.transform.height)return r.resize(),!0}return!1}_updateViewState(e,n){if(this._internalUpdate)return!1;const r=this._map,i=this._renderTransform,{zoom:s,pitch:o,bearing:l}=i,u=r.isMoving();u&&(i.cameraElevationReference="sea");const c=L_(i,{...O_(r.transform),...e});if(u&&(i.cameraElevationReference="ground"),c&&n){const f=this._deferredEvents;f.move=!0,f.zoom||(f.zoom=s!==i.zoom),f.rotate||(f.rotate=l!==i.bearing),f.pitch||(f.pitch=o!==i.pitch)}return u||L_(r.transform,e),c}_updateSettings(e,n){const r=this._map;let i=!1;for(const s of ND)if(s in e&&!Ft(e[s],n[s])){i=!0;const o=r[`set${s[0].toUpperCase()}${s.slice(1)}`];o==null||o.call(r,e[s])}return i}_updateStyle(e,n){if(e.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==n.mapStyle){const{mapStyle:r=V_,styleDiffing:i=!0}=e,s={diff:i};return"localIdeographFontFamily"in e&&(s.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(D_(r),s),!0}return!1}_updateStyleComponents(e,n){const r=this._map;let i=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!Ft(e.light,n.light)&&(i=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!Ft(e.fog,n.fog)&&(i=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!Ft(e.terrain,n.terrain)&&(!e.terrain||r.getSource(e.terrain.source))&&(i=!0,r.setTerrain(e.terrain))),i}_updateHandlers(e,n){var r,i;const s=this._map;let o=!1;for(const l of bD){const u=(r=e[l])!==null&&r!==void 0?r:!0,c=(i=n[l])!==null&&i!==void 0?i:!0;Ft(u,c)||(o=!0,u?s[l].enable(u):s[l].disable())}return o}_queryRenderedFeatures(e){const n=this._map,r=n.transform,{interactiveLayerIds:i=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(e,{layers:i.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=r}}_updateHover(e){var n;const{props:r}=this;if(r.interactiveLayerIds&&(r.onMouseMove||r.onMouseEnter||r.onMouseLeave)){const s=e.type,o=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,l=this._queryRenderedFeatures(e.point),u=l.length>0;!u&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=l,u&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=s}else this._hoveredFeatures=null}_fireEvent(e,n,r){const i=this._map,s=i.transform,o=typeof n=="string"?n:n.type;return o==="move"&&this._updateViewState(this.props,!1),o in Wh&&(typeof n=="object"&&(n.viewState=O_(s)),this._map.isMoving())?(i.transform=this._renderTransform,e.call(i,n,r),i.transform=s,i):(e.call(i,n,r),i)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const r in this._deferredEvents)this._deferredEvents[r]&&e.fire(r);this._internalUpdate=!1;const n=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{b_(this._renderTransform,n),e.transform=n}}}zs.savedMaps=[];function OD(){let t=null;if(typeof location<"u"){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||M_.MapboxAccessToken}catch{}try{t=t||M_.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return t}const LD=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function DD(t){if(!t)return null;const e=t.map,n={getMap:()=>e,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:r=>{const i=e.transform;e.transform=t.transform;const s=e.project(r);return e.transform=i,s},unproject:r=>{const i=e.transform;e.transform=t.transform;const s=e.unproject(r);return e.transform=i,s},queryTerrainElevation:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryTerrainElevation(r,i);return e.transform=s,o},queryRenderedFeatures:(r,i)=>{const s=e.transform;e.transform=t.transform;const o=e.queryRenderedFeatures(r,i);return e.transform=s,o}};for(const r of MD(e))!(r in n)&&!LD.includes(r)&&(n[r]=e[r].bind(e));return n}function MD(t){const e=new Set;let n=t;for(;n;){for(const r of Object.getOwnPropertyNames(n))r[0]!=="_"&&typeof t[r]=="function"&&r!=="fire"&&r!=="setEventedParent"&&e.add(r);n=Object.getPrototypeOf(n)}return Array.from(e)}const VD=typeof document<"u"?V.useLayoutEffect:V.useEffect,FD=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function jD(t,e){for(const r of FD)r in e&&(t[r]=e[r]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=e;n&&t.getRTLTextPluginStatus&&t.getRTLTextPluginStatus()==="unavailable"&&t.setRTLTextPlugin(n,r=>{r&&console.error(r)},!0)}const Js=V.createContext(null);function UD(t,e,n){const r=V.useContext(PD),[i,s]=V.useState(null),o=V.useRef(),{current:l}=V.useRef({mapLib:null,map:null});V.useEffect(()=>{const f=t.mapLib;let d=!0,m;return Promise.resolve(f||n).then(w=>{if(!d)return;if(!w)throw new Error("Invalid mapLib");const S="Map"in w?w:w.default;if(!S.Map)throw new Error("Invalid mapLib");if(jD(S,t),!S.supported||S.supported(t))t.reuseMaps&&(m=zs.reuse(t,o.current)),m||(m=new zs(S.Map,t,o.current)),l.map=DD(m),l.mapLib=S,s(m),r==null||r.onMapMount(l.map,t.id);else throw new Error("Map is not supported by this browser")}).catch(w=>{const{onError:S}=t;S?S({type:"error",target:null,originalEvent:null,error:w}):console.error(w)}),()=>{d=!1,m&&(r==null||r.onMapUnmount(t.id),t.reuseMaps?m.recycle():m.destroy())}},[]),VD(()=>{i&&i.setProps(t)}),V.useImperativeHandle(e,()=>l.map,[i]);const u=V.useMemo(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]),c={height:"100%"};return V.createElement("div",{id:t.id,ref:o,style:u},i&&V.createElement(Js.Provider,{value:l},V.createElement("div",{"mapboxgl-children":"",style:c},t.children)))}const zD=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function Ui(t,e){if(!t||!e)return;const n=t.style;for(const r in e){const i=e[r];Number.isFinite(i)&&!zD.test(r)?n[r]=`${i}px`:n[r]=i}}function BD(t,e){const{map:n,mapLib:r}=V.useContext(Js),i=V.useRef({props:t});i.current.props=t;const s=V.useMemo(()=>{let k=!1;V.Children.forEach(t.children,y=>{y&&(k=!0)});const x={...t,element:k?document.createElement("div"):null},_=new r.Marker(x);return _.setLngLat([t.longitude,t.latitude]),_.getElement().addEventListener("click",y=>{var I,R;(R=(I=i.current.props).onClick)===null||R===void 0||R.call(I,{type:"click",target:_,originalEvent:y})}),_.on("dragstart",y=>{var I,R;const O=y;O.lngLat=s.getLngLat(),(R=(I=i.current.props).onDragStart)===null||R===void 0||R.call(I,O)}),_.on("drag",y=>{var I,R;const O=y;O.lngLat=s.getLngLat(),(R=(I=i.current.props).onDrag)===null||R===void 0||R.call(I,O)}),_.on("dragend",y=>{var I,R;const O=y;O.lngLat=s.getLngLat(),(R=(I=i.current.props).onDragEnd)===null||R===void 0||R.call(I,O)}),_},[]);V.useEffect(()=>(s.addTo(n.getMap()),()=>{s.remove()}),[]);const{longitude:o,latitude:l,offset:u,style:c,draggable:f=!1,popup:d=null,rotation:m=0,rotationAlignment:w="auto",pitchAlignment:S="auto"}=t;return V.useEffect(()=>{Ui(s.getElement(),c)},[c]),V.useImperativeHandle(e,()=>s,[]),(s.getLngLat().lng!==o||s.getLngLat().lat!==l)&&s.setLngLat([o,l]),u&&!kD(s.getOffset(),u)&&s.setOffset(u),s.isDraggable()!==f&&s.setDraggable(f),s.getRotation()!==m&&s.setRotation(m),s.getRotationAlignment()!==w&&s.setRotationAlignment(w),s.getPitchAlignment()!==S&&s.setPitchAlignment(S),s.getPopup()!==d&&s.setPopup(d),Rp.createPortal(t.children,s.getElement())}const $D=V.memo(V.forwardRef(BD));function U_(t){return new Set(t?t.trim().split(/\s+/):[])}function HD(t,e){const{map:n,mapLib:r}=V.useContext(Js),i=V.useMemo(()=>document.createElement("div"),[]),s=V.useRef({props:t});s.current.props=t;const o=V.useMemo(()=>{const l={...t},u=new r.Popup(l);return u.setLngLat([t.longitude,t.latitude]),u.once("open",c=>{var f,d;(d=(f=s.current.props).onOpen)===null||d===void 0||d.call(f,c)}),u},[]);if(V.useEffect(()=>{const l=u=>{var c,f;(f=(c=s.current.props).onClose)===null||f===void 0||f.call(c,u)};return o.on("close",l),o.setDOMContent(i).addTo(n.getMap()),()=>{o.off("close",l),o.isOpen()&&o.remove()}},[]),V.useEffect(()=>{Ui(o.getElement(),t.style)},[t.style]),V.useImperativeHandle(e,()=>o,[]),o.isOpen()&&((o.getLngLat().lng!==t.longitude||o.getLngLat().lat!==t.latitude)&&o.setLngLat([t.longitude,t.latitude]),t.offset&&!Ft(o.options.offset,t.offset)&&o.setOffset(t.offset),(o.options.anchor!==t.anchor||o.options.maxWidth!==t.maxWidth)&&(o.options.anchor=t.anchor,o.setMaxWidth(t.maxWidth)),o.options.className!==t.className)){const l=U_(o.options.className),u=U_(t.className);for(const c of l)u.has(c)||o.removeClassName(c);for(const c of u)l.has(c)||o.addClassName(c);o.options.className=t.className}return Rp.createPortal(t.children,i)}V.memo(V.forwardRef(HD));function Ga(t,e,n,r){const i=V.useContext(Js),s=V.useMemo(()=>t(i),[]);return V.useEffect(()=>{const o=e,l=null,u=typeof e=="function"?e:null,{map:c}=i;return c.hasControl(s)||(c.addControl(s,o==null?void 0:o.position),l&&l(i)),()=>{u&&u(i),c.hasControl(s)&&c.removeControl(s)}},[]),s}function WD(t){const e=Ga(({mapLib:n})=>new n.AttributionControl(t),{position:t.position});return V.useEffect(()=>{Ui(e._container,t.style)},[t.style]),null}V.memo(WD);function qD(t){const e=Ga(({mapLib:n})=>new n.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)}),{position:t.position});return V.useEffect(()=>{Ui(e._controlContainer,t.style)},[t.style]),null}V.memo(qD);function GD(t,e){const n=V.useRef({props:t}),r=Ga(({mapLib:i})=>{const s=new i.GeolocateControl(t),o=s._setupUI;return s._setupUI=l=>{s._container.hasChildNodes()||o(l)},s.on("geolocate",l=>{var u,c;(c=(u=n.current.props).onGeolocate)===null||c===void 0||c.call(u,l)}),s.on("error",l=>{var u,c;(c=(u=n.current.props).onError)===null||c===void 0||c.call(u,l)}),s.on("outofmaxbounds",l=>{var u,c;(c=(u=n.current.props).onOutOfMaxBounds)===null||c===void 0||c.call(u,l)}),s.on("trackuserlocationstart",l=>{var u,c;(c=(u=n.current.props).onTrackUserLocationStart)===null||c===void 0||c.call(u,l)}),s.on("trackuserlocationend",l=>{var u,c;(c=(u=n.current.props).onTrackUserLocationEnd)===null||c===void 0||c.call(u,l)}),s},{position:t.position});return n.current.props=t,V.useImperativeHandle(e,()=>r,[]),V.useEffect(()=>{Ui(r._container,t.style)},[t.style]),null}V.memo(V.forwardRef(GD));function KD(t){const e=Ga(({mapLib:n})=>new n.NavigationControl(t),{position:t.position});return V.useEffect(()=>{Ui(e._container,t.style)},[t.style]),null}const QD=V.memo(KD);function YD(t){const e=Ga(({mapLib:s})=>new s.ScaleControl(t),{position:t.position}),n=V.useRef(t),r=n.current;n.current=t;const{style:i}=t;return t.maxWidth!==void 0&&t.maxWidth!==r.maxWidth&&(e.options.maxWidth=t.maxWidth),t.unit!==void 0&&t.unit!==r.unit&&e.setUnit(t.unit),V.useEffect(()=>{Ui(e._container,i)},[i]),null}V.memo(YD);function ec(t,e){if(!t)throw new Error(e)}function XD(t,e,n,r){if(ec(n.id===r.id,"layer id changed"),ec(n.type===r.type,"layer type changed"),n.type==="custom"||r.type==="custom")return;const{layout:i={},paint:s={},filter:o,minzoom:l,maxzoom:u,beforeId:c}=n;if(c!==r.beforeId&&t.moveLayer(e,c),i!==r.layout){const f=r.layout||{};for(const d in i)Ft(i[d],f[d])||t.setLayoutProperty(e,d,i[d]);for(const d in f)i.hasOwnProperty(d)||t.setLayoutProperty(e,d,void 0)}if(s!==r.paint){const f=r.paint||{};for(const d in s)Ft(s[d],f[d])||t.setPaintProperty(e,d,s[d]);for(const d in f)s.hasOwnProperty(d)||t.setPaintProperty(e,d,void 0)}Ft(o,r.filter)||t.setFilter(e,o),(l!==r.minzoom||u!==r.maxzoom)&&t.setLayerZoomRange(e,l,u)}function JD(t,e,n){if(t.style&&t.style._loaded&&(!("source"in n)||t.getSource(n.source))){const r={...n,id:e};delete r.beforeId,t.addLayer(r,n.beforeId)}}let ZD=0;function e3(t){const e=V.useContext(Js).map.getMap(),n=V.useRef(t),[,r]=V.useState(0),i=V.useMemo(()=>t.id||`jsx-layer-${ZD++}`,[]);if(V.useEffect(()=>{if(e){const o=()=>r(l=>l+1);return e.on("styledata",o),o(),()=>{e.off("styledata",o),e.style&&e.style._loaded&&e.getLayer(i)&&e.removeLayer(i)}}},[e]),e&&e.style&&e.getLayer(i))try{XD(e,i,t,n.current)}catch(o){console.warn(o)}else JD(e,i,t);return n.current=t,null}let t3=0;function n3(t,e,n){if(t.style&&t.style._loaded){const r={...n};return delete r.id,delete r.children,t.addSource(e,r),t.getSource(e)}return null}function r3(t,e,n){ec(e.id===n.id,"source id changed"),ec(e.type===n.type,"source type changed");let r="",i=0;for(const o in e)o!=="children"&&o!=="id"&&!Ft(n[o],e[o])&&(r=o,i++);if(!i)return;const s=e.type;if(s==="geojson")t.setData(e.data);else if(s==="image")t.updateImage({url:e.url,coordinates:e.coordinates});else if("setCoordinates"in t&&i===1&&r==="coordinates")t.setCoordinates(e.coordinates);else if("setUrl"in t)switch(r){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}function i3(t){const e=V.useContext(Js).map.getMap(),n=V.useRef(t),[,r]=V.useState(0),i=V.useMemo(()=>t.id||`jsx-source-${t3++}`,[]);V.useEffect(()=>{if(e){const o=()=>setTimeout(()=>r(l=>l+1),0);return e.on("styledata",o),o(),()=>{var l;if(e.off("styledata",o),e.style&&e.style._loaded&&e.getSource(i)){const u=(l=e.getStyle())===null||l===void 0?void 0:l.layers;if(u)for(const c of u)c.source===i&&e.removeLayer(c.id);e.removeSource(i)}}}},[e]);let s=e&&e.style&&e.getSource(i);return s?r3(s,t,n.current):s=n3(e,i,t),n.current=t,s&&V.Children.map(t.children,o=>o&&V.cloneElement(o,{source:i}))||null}const s3=CD(()=>import("./mapbox-gl-B8Z2GqBL.js").then(t=>t.m),[]),o3=V.forwardRef(function(e,n){return UD(e,n,s3)}),qh=$D,a3=QD,So=e3,jl=i3;var kt=63710088e-1,SI={centimeters:kt*100,centimetres:kt*100,degrees:360/(2*Math.PI),feet:kt*3.28084,inches:kt*39.37,kilometers:kt/1e3,kilometres:kt/1e3,meters:kt,metres:kt,miles:kt/1609.344,millimeters:kt*1e3,millimetres:kt*1e3,nauticalmiles:kt/1852,radians:1,yards:kt*1.0936};function Bs(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function gi(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!B_(t[0])||!B_(t[1]))throw new Error("coordinates must contain numbers");return Bs({type:"Point",coordinates:t},e,n)}function Fc(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Bs({type:"LineString",coordinates:t},e,n)}function AI(t,e="kilometers"){const n=SI[e];if(!n)throw new Error(e+" units is invalid");return t*n}function l3(t,e="kilometers"){const n=SI[e];if(!n)throw new Error(e+" units is invalid");return t/n}function z_(t){return t%(2*Math.PI)*180/Math.PI}function ps(t){return t%360*Math.PI/180}function CI(t,e="kilometers",n="kilometers"){if(!(t>=0))throw new Error("length must be a positive number");return AI(l3(t,e),n)}function B_(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Hn(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function u3(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function $_(t,e,n){if(!t)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!t||t.type!=="Feature"||!t.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.geometry.type)}function c3(t){return t.type==="Feature"?t.geometry:t}function ci(t,e,n={}){var r=Hn(t),i=Hn(e),s=ps(i[1]-r[1]),o=ps(i[0]-r[0]),l=ps(r[1]),u=ps(i[1]),c=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(u);return AI(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),n.units)}function bm(t,e,n){if(t!==null)for(var r,i,s,o,l,u,c,f=0,d=0,m,w=t.type,S=w==="FeatureCollection",k=w==="Feature",x=S?t.features.length:1,_=0;_<x;_++){c=S?t.features[_].geometry:k?t.geometry:t,m=c?c.type==="GeometryCollection":!1,l=m?c.geometries.length:1;for(var y=0;y<l;y++){var I=0,R=0;if(o=m?c.geometries[y]:c,o!==null){u=o.coordinates;var O=o.type;switch(f=0,O){case null:break;case"Point":if(e(u,d,_,I,R)===!1)return!1;d++,I++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],d,_,I,R)===!1)return!1;d++,O==="MultiPoint"&&I++}O==="LineString"&&I++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-f;i++){if(e(u[r][i],d,_,I,R)===!1)return!1;d++}O==="MultiLineString"&&I++,O==="Polygon"&&R++}O==="Polygon"&&I++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(s=0;s<u[r][i].length-f;s++){if(e(u[r][i][s],d,_,I,R)===!1)return!1;d++}R++}I++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(bm(o.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function h3(t,e){var n,r,i,s,o,l,u,c,f,d,m=0,w=t.type==="FeatureCollection",S=t.type==="Feature",k=w?t.features.length:1;for(n=0;n<k;n++){for(l=w?t.features[n].geometry:S?t.geometry:t,c=w?t.features[n].properties:S?t.properties:{},f=w?t.features[n].bbox:S?t.bbox:void 0,d=w?t.features[n].id:S?t.id:void 0,u=l?l.type==="GeometryCollection":!1,o=u?l.geometries.length:1,i=0;i<o;i++){if(s=u?l.geometries[i]:l,s===null){if(e(null,m,c,f,d)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,m,c,f,d)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],m,c,f,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function PI(t,e){h3(t,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Bs(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var c=0;c<n.coordinates.length;c++){var f=n.coordinates[c],d={type:u,coordinates:f};if(e(Bs(d,i),r,c)===!1)return!1}})}function f3(t,e){PI(t,function(n,r,i){var s=0;if(n.geometry){var o=n.geometry.type;if(!(o==="Point"||o==="MultiPoint")){var l,u=0,c=0,f=0;if(bm(n,function(d,m,w,S,k){if(l===void 0||r>u||S>c||k>f){l=d,u=r,c=S,f=k,s=0;return}var x=Fc([l,d],n.properties);if(e(x,r,i,k,s)===!1)return!1;s++,l=d})===!1)return!1}}})}function d3(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return bm(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}var p3=d3;const Gn=11102230246251565e-32,ht=134217729,m3=(3+8*Gn)*Gn;function Gh(t,e,n,r,i){let s,o,l,u,c=e[0],f=r[0],d=0,m=0;f>c==f>-c?(s=c,c=e[++d]):(s=f,f=r[++m]);let w=0;if(d<t&&m<n)for(f>c==f>-c?(o=c+s,l=s-(o-c),c=e[++d]):(o=f+s,l=s-(o-f),f=r[++m]),s=o,l!==0&&(i[w++]=l);d<t&&m<n;)f>c==f>-c?(o=s+c,u=o-s,l=s-(o-u)+(c-u),c=e[++d]):(o=s+f,u=o-s,l=s-(o-u)+(f-u),f=r[++m]),s=o,l!==0&&(i[w++]=l);for(;d<t;)o=s+c,u=o-s,l=s-(o-u)+(c-u),c=e[++d],s=o,l!==0&&(i[w++]=l);for(;m<n;)o=s+f,u=o-s,l=s-(o-u)+(f-u),f=r[++m],s=o,l!==0&&(i[w++]=l);return(s!==0||w===0)&&(i[w++]=s),w}function g3(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function Ka(t){return new Float64Array(t)}const y3=(3+16*Gn)*Gn,v3=(2+12*Gn)*Gn,_3=(9+64*Gn)*Gn*Gn,Qi=Ka(4),H_=Ka(8),W_=Ka(12),q_=Ka(16),Et=Ka(4);function w3(t,e,n,r,i,s,o){let l,u,c,f,d,m,w,S,k,x,_,y,I,R,O,D,A,g;const E=t-i,C=n-i,N=e-s,b=r-s;R=E*b,m=ht*E,w=m-(m-E),S=E-w,m=ht*b,k=m-(m-b),x=b-k,O=S*x-(R-w*k-S*k-w*x),D=N*C,m=ht*N,w=m-(m-N),S=N-w,m=ht*C,k=m-(m-C),x=C-k,A=S*x-(D-w*k-S*k-w*x),_=O-A,d=O-_,Qi[0]=O-(_+d)+(d-A),y=R+_,d=y-R,I=R-(y-d)+(_-d),_=I-D,d=I-_,Qi[1]=I-(_+d)+(d-D),g=y+_,d=g-y,Qi[2]=y-(g-d)+(_-d),Qi[3]=g;let P=g3(4,Qi),Ie=v3*o;if(P>=Ie||-P>=Ie||(d=t-E,l=t-(E+d)+(d-i),d=n-C,c=n-(C+d)+(d-i),d=e-N,u=e-(N+d)+(d-s),d=r-b,f=r-(b+d)+(d-s),l===0&&u===0&&c===0&&f===0)||(Ie=_3*o+m3*Math.abs(P),P+=E*f+b*l-(N*c+C*u),P>=Ie||-P>=Ie))return P;R=l*b,m=ht*l,w=m-(m-l),S=l-w,m=ht*b,k=m-(m-b),x=b-k,O=S*x-(R-w*k-S*k-w*x),D=u*C,m=ht*u,w=m-(m-u),S=u-w,m=ht*C,k=m-(m-C),x=C-k,A=S*x-(D-w*k-S*k-w*x),_=O-A,d=O-_,Et[0]=O-(_+d)+(d-A),y=R+_,d=y-R,I=R-(y-d)+(_-d),_=I-D,d=I-_,Et[1]=I-(_+d)+(d-D),g=y+_,d=g-y,Et[2]=y-(g-d)+(_-d),Et[3]=g;const Ct=Gh(4,Qi,4,Et,H_);R=E*f,m=ht*E,w=m-(m-E),S=E-w,m=ht*f,k=m-(m-f),x=f-k,O=S*x-(R-w*k-S*k-w*x),D=N*c,m=ht*N,w=m-(m-N),S=N-w,m=ht*c,k=m-(m-c),x=c-k,A=S*x-(D-w*k-S*k-w*x),_=O-A,d=O-_,Et[0]=O-(_+d)+(d-A),y=R+_,d=y-R,I=R-(y-d)+(_-d),_=I-D,d=I-_,Et[1]=I-(_+d)+(d-D),g=y+_,d=g-y,Et[2]=y-(g-d)+(_-d),Et[3]=g;const bn=Gh(Ct,H_,4,Et,W_);R=l*f,m=ht*l,w=m-(m-l),S=l-w,m=ht*f,k=m-(m-f),x=f-k,O=S*x-(R-w*k-S*k-w*x),D=u*c,m=ht*u,w=m-(m-u),S=u-w,m=ht*c,k=m-(m-c),x=c-k,A=S*x-(D-w*k-S*k-w*x),_=O-A,d=O-_,Et[0]=O-(_+d)+(d-A),y=R+_,d=y-R,I=R-(y-d)+(_-d),_=I-D,d=I-_,Et[1]=I-(_+d)+(d-D),g=y+_,d=g-y,Et[2]=y-(g-d)+(_-d),Et[3]=g;const Lt=Gh(bn,W_,4,Et,q_);return q_[Lt-1]}function E3(t,e,n,r,i,s){const o=(e-s)*(n-i),l=(t-i)*(r-s),u=o-l,c=Math.abs(o+l);return Math.abs(u)>=y3*c?u:-w3(t,e,n,r,i,s,c)}function T3(t,e){var n,r,i=0,s,o,l,u,c,f,d,m=t[0],w=t[1],S=e.length;for(n=0;n<S;n++){r=0;var k=e[n],x=k.length-1;if(f=k[0],f[0]!==k[x][0]&&f[1]!==k[x][1])throw new Error("First and last coordinates in a ring must be the same");for(o=f[0]-m,l=f[1]-w,r;r<x;r++){if(d=k[r+1],u=d[0]-m,c=d[1]-w,l===0&&c===0){if(u<=0&&o>=0||o<=0&&u>=0)return 0}else if(c>=0&&l<=0||c<=0&&l>=0){if(s=E3(o,u,l,c,0,0),s===0)return 0;(s>0&&c>0&&l<=0||s<0&&c<=0&&l>0)&&i++}f=d,l=c,o=u}}return i%2!==0}function I3(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Hn(t),i=c3(e),s=i.type,o=e.bbox;let l=i.coordinates;if(o&&S3(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let u=!1;for(var c=0;c<l.length;++c){const f=T3(r,l[c]);if(f===0)return!n.ignoreBoundary;f&&(u=!0)}return u}function S3(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}var A3=Object.defineProperty,C3=Object.defineProperties,P3=Object.getOwnPropertyDescriptors,G_=Object.getOwnPropertySymbols,k3=Object.prototype.hasOwnProperty,R3=Object.prototype.propertyIsEnumerable,K_=(t,e,n)=>e in t?A3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Q_=(t,e)=>{for(var n in e||(e={}))k3.call(e,n)&&K_(t,n,e[n]);if(G_)for(var n of G_(e))R3.call(e,n)&&K_(t,n,e[n]);return t},Y_=(t,e)=>C3(t,P3(e));function x3(t,e,n={}){if(!t||!e)throw new Error("lines and pt are required arguments");const r=Hn(e);let i=gi([1/0,1/0],{dist:1/0,index:-1,multiFeatureIndex:-1,location:-1}),s=0;return PI(t,function(o,l,u){const c=u3(o);for(let f=0;f<c.length-1;f++){const d=gi(c[f]);d.properties.dist=ci(e,d,n);const m=Hn(d),w=gi(c[f+1]);w.properties.dist=ci(e,w,n);const S=Hn(w),k=ci(d,w,n);let x,_;m[0]===r[0]&&m[1]===r[1]?[x,,_]=[m,void 0,!1]:S[0]===r[0]&&S[1]===r[1]?[x,,_]=[S,void 0,!0]:[x,,_]=O3(d.geometry.coordinates,w.geometry.coordinates,Hn(e));let y;x&&(y=gi(x,{dist:ci(e,x,n),multiFeatureIndex:u,location:s+ci(d,x,n)})),y&&y.properties.dist<i.properties.dist&&(i=Y_(Q_({},y),{properties:Y_(Q_({},y.properties),{index:_?f+1:f})})),s+=k}}),i}function N3(t,e){const[n,r,i]=t,[s,o,l]=e;return n*s+r*o+i*l}function b3(t,e){const[n,r,i]=t,[s,o,l]=e;return[r*l-i*o,i*s-n*l,n*o-r*s]}function X_(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function si(t,e){const n=N3(t,e)/(X_(t)*X_(e));return Math.acos(Math.min(Math.max(n,-1),1))}function Kh(t){const e=ps(t[1]),n=ps(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function oi(t){const[e,n,r]=t,i=z_(Math.asin(r));return[z_(Math.atan2(n,e)),i]}function O3(t,e,n){const r=Kh(t),i=Kh(e),s=Kh(n),[o,l,u]=s,[c,f,d]=b3(r,i),m=f*u-d*l,w=d*o-c*u,S=c*l-f*o,k=S*f-w*d,x=m*d-S*c,_=w*c-m*f,y=1/Math.sqrt(Math.pow(k,2)+Math.pow(x,2)+Math.pow(_,2)),I=[k*y,x*y,_*y],R=[-1*k*y,-1*x*y,-1*_*y],O=si(r,i),D=si(r,I),A=si(i,I),g=si(r,R),E=si(i,R);let C;return D<g&&D<E||A<g&&A<E?C=I:C=R,si(r,C)>O||si(i,C)>O?ci(oi(C),oi(r))<=ci(oi(C),oi(i))?[oi(r),!0,!1]:[oi(i),!1,!0]:[oi(C),!1,!1]}function Qh(t,e,n={}){const r=Hn(t),i=Hn(e);i[0]+=i[0]-r[0]>180?-360:r[0]-i[0]>180?360:0;const s=L3(r,i);return CI(s,"meters",n.units)}function L3(t,e,n){n=n===void 0?kt:Number(n);const r=n,i=t[1]*Math.PI/180,s=e[1]*Math.PI/180,o=s-i;let l=Math.abs(e[0]-t[0])*Math.PI/180;l>Math.PI&&(l-=2*Math.PI);const u=Math.log(Math.tan(s/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),c=Math.abs(u)>1e-11?o/u:Math.cos(i);return Math.sqrt(o*o+c*c*l*l)*r}function J_(t,e,n={}){var r,i;const s=(r=n.method)!=null?r:"geodesic",o=(i=n.units)!=null?i:"kilometers";if(!t)throw new Error("pt is required");if(Array.isArray(t)?t=gi(t):t.type==="Point"?t=Bs(t):$_(t,"Point","point"),!e)throw new Error("line is required");Array.isArray(e)?e=Fc(e):e.type==="LineString"?e=Bs(e):$_(e,"LineString","line");let l=1/0;const u=t.geometry.coordinates;return f3(e,c=>{if(c){const f=c.geometry.coordinates[0],d=c.geometry.coordinates[1],m=D3(u,f,d,{method:s});m<l&&(l=m)}}),CI(l,"degrees",o)}function D3(t,e,n,r){if(r.method==="geodesic")return x3(Fc([e,n]).geometry,t,{units:"degrees"}).properties.dist;const i=[n[0]-e[0],n[1]-e[1]],s=[t[0]-e[0],t[1]-e[1]],o=Z_(s,i);if(o<=0)return Qh(t,e,{units:"degrees"});const l=Z_(i,i);if(l<=o)return Qh(t,n,{units:"degrees"});const u=o/l,c=[e[0]+u*i[0],e[1]+u*i[1]];return Qh(t,c,{units:"degrees"})}function Z_(t,e){return t[0]*e[0]+t[1]*e[1]}const M3=["NeighborhoodBoundaries","addpoints","Sponsors","PortlandStreets"],V3=async t=>{try{console.log(`Fetching ${t}...`);const e=[`geojson/${t}.geojson`,`${t}.geojson`,`data/${t}.geojson`];let n=null,r=null;for(const o of e)try{const l=dD(_D,o);n=await fD(l),console.log(`Found ${t} at path: ${o}`);break}catch(l){console.log(`File not found at path: ${o}`),r=l;continue}if(!n)throw new Error(`Could not find ${t}.geojson in any expected location. Last error: ${r==null?void 0:r.message}`);const i=await fetch(n);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const s=await i.json();return console.log(`Successfully loaded ${t}:`,s),s}catch(e){throw console.error(`Error fetching ${t}.geojson:`,e),e}},F3=async()=>{const t={},e={},n=M3.map(async r=>{try{const i=await V3(r);t[r]=i}catch(i){console.warn(`Failed to load ${r}:`,i),e[r]=i instanceof Error?i.message:"Unknown error"}});return await Promise.allSettled(n),console.log("Loaded layers:",Object.keys(t)),Object.keys(e).length>0&&console.warn("Failed to load layers:",e),t},kI="/neighborhood-value-plus/assets/hairconnect-DPEIByZP.png",j3=({title:t,name:e,crossStreet:n,instagram:r,onClose:i})=>T.jsxs("div",{className:"sponsor-popup",children:[T.jsxs("div",{className:"sponsor-popup-header",children:[T.jsx("h2",{className:"sponsor-popup-header-text",children:t}),T.jsx("button",{onClick:i,className:"sponsor-popup-close","aria-label":"Close",children:"×"})]}),T.jsxs("div",{className:"sponsor-popup-content",children:[T.jsx("a",{href:r,target:"_blank",className:"sponsor-popup-link",children:T.jsx("img",{src:kI,alt:"Sponsor Logo",className:"sponsor-popup-logo"})}),T.jsxs("div",{className:"sponsor-popup-info",children:[T.jsx("h3",{className:"sponsor-popup-title",children:e}),T.jsx("p",{className:"sponsor-popup-location",children:n})]}),T.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"sponsor-popup-instagram"})]})]}),U3=({jobType:t,location:e,status:n,fullAddress:r,referralSource:i,estimate:s,onClose:o,onEdit:l})=>{const{userData:u}=Vc(),c=(u==null?void 0:u.role)==="Admin";return T.jsxs("div",{className:"point-popup",children:[T.jsxs("div",{className:"point-popup-header",children:[T.jsx("h3",{className:"point-popup-title",children:"Service Point Details"}),T.jsx("button",{className:"point-popup-close",onClick:o,onMouseEnter:f=>{f.currentTarget.style.backgroundColor="#f3f4f6"},onMouseLeave:f=>{f.currentTarget.style.backgroundColor="transparent"},children:"×"})]}),T.jsxs("div",{className:"point-popup-content",children:[T.jsxs("div",{className:"point-popup-row",children:[T.jsxs("div",{children:[T.jsx("div",{className:"point-popup-label",children:"Job Type"}),T.jsx("div",{className:"point-popup-value",children:t||"Not specified"})]}),T.jsxs("div",{children:[T.jsx("div",{className:"point-popup-label",children:"Location"}),T.jsx("div",{className:"point-popup-value",children:e||"Not specified"})]}),T.jsxs("div",{children:[T.jsx("div",{className:"point-popup-label",children:"Status"}),T.jsx("div",{className:"point-popup-status",style:{backgroundColor:e0(n).bg,color:e0(n).text},children:n||"Unknown"})]})]}),c&&T.jsxs("div",{className:"point-popup-row",style:{marginTop:"12px"},children:[T.jsxs("div",{children:[T.jsx("div",{className:"point-popup-label",children:"Full Address"}),T.jsx("div",{className:"point-popup-value",children:r||"N/A"})]}),T.jsxs("div",{children:[T.jsx("div",{className:"point-popup-label",children:"Referral Source"}),T.jsx("div",{className:"point-popup-value",children:i||"N/A"})]}),T.jsxs("div",{children:[T.jsx("div",{className:"point-popup-label",children:"Estimate"}),T.jsxs("div",{className:"point-popup-value",children:["$ ",s||"N/A"]})]})]})]}),c&&T.jsx("div",{className:"point-popup-footer",children:T.jsx("button",{className:"edit-button",onClick:l,children:"Edit"})})]})},e0=t=>{if(!t)return{bg:"#f3f4f6",text:"#6b7280"};const e=t.toLowerCase();return e.includes("active")?{bg:"#daff99",text:"#166534"}:e.includes("pending")?{bg:"#faff99",text:"#92400e"}:e.includes("complete")?{bg:"#c7f7ad",text:"#003b09"}:{bg:"#f3f4f6",text:"#6b7280"}},z3=({onClose:t,onUpdatePoint:e,onDeletePoint:n,point:r})=>{const[i,s]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState(""),[f,d]=V.useState("Active"),[m,w]=V.useState(""),[S,k]=V.useState(""),[x,_]=V.useState("");V.useEffect(()=>{r&&r.properties&&(s(r.properties["Service Ty"]||""),l(r.properties["Cross Stre"]||""),c(r.properties.neighbhood||""),d(r.properties.Status||"Active"),w(r.properties["Full Addre"]||""),k(r.properties["Refferal S"]||""),_(r.properties.Estimate||""))},[r]);const y=R=>{R.preventDefault();const O={...r,properties:{...r.properties,"Service Ty":i,"Cross Stre":o,neighbhood:u,Status:f,"Full Addre":m,"Refferal S":S,Estimate:x}};e(O),t()},I=()=>{var R;if(window.confirm("Are you sure you want to delete this point?")){const O=(R=r.properties)==null?void 0:R.id;O?(n(O),t()):alert("Could not find a unique ID for this point to delete.")}};return T.jsxs("div",{className:"header-panel edit-point-panel",children:[T.jsxs("div",{className:"panel-header",children:[T.jsx("h3",{children:"Edit Service Point"}),T.jsx("button",{className:"close-btn",onClick:t,children:T.jsx($e,{icon:ki})})]}),T.jsx("div",{className:"panel-content",children:T.jsxs("form",{className:"edit-point-form",onSubmit:y,children:[T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Service Type"}),T.jsx("input",{type:"text",value:i,onChange:R=>s(R.target.value),required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Cross Street"}),T.jsx("input",{type:"text",value:o,onChange:R=>l(R.target.value),required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Neighborhood"}),T.jsx("input",{type:"text",value:u,onChange:R=>c(R.target.value),required:!0})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Status"}),T.jsxs("select",{value:f,onChange:R=>d(R.target.value),children:[T.jsx("option",{value:"Active",children:"Active"}),T.jsx("option",{value:"Pending",children:"Pending"}),T.jsx("option",{value:"Complete",children:"Complete"})]})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Full Address"}),T.jsx("input",{type:"text",value:m,onChange:R=>w(R.target.value)})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Referral Source"}),T.jsx("input",{type:"text",value:S,onChange:R=>k(R.target.value)})]}),T.jsxs("div",{className:"form-group",children:[T.jsx("label",{children:"Estimate"}),T.jsx("input",{type:"text",value:x,onChange:R=>_(R.target.value)})]}),T.jsxs("div",{className:"form-actions",children:[T.jsx("button",{type:"submit",className:"update-point-btn",children:"Update Point"}),T.jsx("button",{type:"button",className:"delete-point-btn",onClick:I,children:"Delete"})]})]})})]})},B3=({neighborhoodName:t,pointCount:e,x:n,y:r})=>T.jsx("div",{className:"neighborhood-hover-popup",style:{left:n+1,top:r+1},children:T.jsxs("div",{className:"neighborhood-hover-popup-row",children:[T.jsx("span",{className:"neighborhood-hover-popup-name",children:t}),T.jsx("span",{className:"neighborhood-hover-popup-dot",children:"•"}),T.jsxs("span",{className:"neighborhood-hover-popup-count",children:[e," ",e===1?"service":"services"]})]})}),$3={paint:{"fill-color":["match",["get","randoNum"],1,"#FF6B6B",2,"#4ECDC4",3,"#FFD166",4,"#6A4C93",5,"#43AA8B",6,"#F3722C",7,"#277DA1",8,"#F94144",9,"#90BE6D",10,"#577590","#CCCCCC"],"fill-outline-color":"#FFFFFF"}},H3={type:"line",source:"neighborhoods",layout:{},paint:{"line-color":"#FFFFFF","line-width":2}},W3={type:"circle",source:"addpoints",layout:{},paint:{"circle-color":["match",["get","Service Ty"],"Lawn Restoration","#008000","Sidewalk Repair","#808080","Homeless Outreach","#FFA500","Legacy Sponsored Block","#FFD700","Lifestyle Lottery Winner","#800080","Neighborhood History","#0000FF","Home For Sale","#008080","Overnight Patrol","#000080","Vacant Home Cleanup","#800000","Trash or Debris Dump Site","#000000","Overgrown Bushes or Trees","#228B22","#999999"],"circle-radius":["interpolate",["linear"],["zoom"],10,4,15,8,20,12],"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF"}},q3={type:"circle",source:"sponsors",layout:{},paint:{"circle-color":"#FFD700","circle-radius":10,"circle-stroke-width":2,"circle-stroke-color":"#FFA500"}},Ao={NeighborhoodBoundaries:$3,NeighborhoodBoundariesOutline:H3,addpoints:W3,Sponsors:q3},G3=({viewState:t,onViewStateChange:e,searchMarker:n,filters:r,isAddingPoint:i,onPointAdd:s,addPointCoordinates:o})=>{var Qa,Ya,Zr;const{user:l,userData:u,isAnonymous:c,loading:f}=Vc(),[d,m]=V.useState({longitude:-122.5715,latitude:45.498,zoom:12}),w=t||d,[S,k]=V.useState({}),[x,_]=V.useState(!0),[y,I]=V.useState(null),[R,O]=V.useState(!0),[D,A]=V.useState(null),[g,E]=V.useState(null),[C,N]=V.useState(null),[b,P]=V.useState(null),[Ie,Ct]=V.useState(null);V.useEffect(()=>{f||(async()=>{try{_(!0),I(null),console.log("Loading GeoJSON data...");const ce=!c&&u?u.role:null;console.log("Current user role:",ce||"Guest");const fe=await F3();console.log("Loaded and filtered layers:",Object.keys(fe)),k(fe)}catch(ce){console.error("Error loading GeoJSON data:",ce),I(`Failed to load map data: ${ce instanceof Error?ce.message:"Unknown error"}`)}finally{_(!1)}})()},[c,u,f]),V.useEffect(()=>{if(S.Sponsors){const te=S.Sponsors.features.find(ce=>{var fe;return((fe=ce.properties)==null?void 0:fe.Name)==="The Hair Connect"});te?(console.log("Sponsor feature found:",te),A(te)):console.log("Sponsor feature not found")}},[S.Sponsors]);const bn=te=>{e?e(te.viewState):m(te.viewState),te.viewState.zoom<14&&P(null)},Lt=te=>S.addpoints?S.addpoints.features.filter(ce=>{var be;return((be=ce.properties)==null?void 0:be.neighbhood)===te}).length:0,$=(te,ce,fe)=>{var Oe,Se;const be=gi([te,ce]);for(const Ve of fe.features)if((Ve.geometry.type==="Polygon"||Ve.geometry.type==="MultiPolygon")&&I3(be,Ve))return((Oe=Ve.properties)==null?void 0:Oe.MAPLABEL)||((Se=Ve.properties)==null?void 0:Se.NAME)||null;return null},Y=te=>{var fe,be,Oe,Se;if(i){const{lng:Ve,lat:ar}=te.lngLat,Dt=Math.round(Ve*1e4)/1e4,On=Math.round(ar*1e4)/1e4;let ei=null;S.NeighborhoodBoundaries&&(ei=$(Dt,On,S.NeighborhoodBoundaries));let zi=null;if(S.PortlandStreets){const lr=gi([Dt,On]),ur=S.PortlandStreets.features;let Ln=[];if(ur.forEach(me=>{if(me.geometry.type==="LineString"){const Ae=J_(lr,me);Ln.push({street:me,distance:Ae})}else me.geometry.type==="MultiLineString"&&me.geometry.coordinates.forEach(Ae=>{const Bi=Fc(Ae,me.properties),Xa=J_(lr,Bi);Ln.push({street:{...me,geometry:{type:"LineString",coordinates:Ae}},distance:Xa})})}),Ln.sort((me,Ae)=>me.distance-Ae.distance),Ln.length>=2){const me=(fe=Ln[0].street.properties)==null?void 0:fe.STREETNAME,Ae=(be=Ln[1].street.properties)==null?void 0:be.STREETNAME;zi=`${me} & ${Ae}`}}s({lat:On,lng:Dt,neighborhood:ei,crossStreet:zi});return}const ce=te.features;if(ce&&ce.length>0){const Ve=ce.find(Dt=>Dt.source==="addpoints");if(Ve){console.log("Clicked addpoint:",Ve),E(Ve);return}const ar=ce.find(Dt=>Dt.source==="neighborhoods");if(ar){const Dt=((Oe=ar.properties)==null?void 0:Oe.MAPLABEL)||((Se=ar.properties)==null?void 0:Se.NAME);if(Dt){P(Dt);const[On,ei,zi,lr]=p3(ar.geometry),ur={...w,longitude:(On+zi)/2,latitude:(ei+lr)/2,zoom:14};e?e(ur):m(ur)}}}},ee=te=>{N(te),E(null)},ve=te=>{console.log("Update point:",te),N(null)},he=te=>{console.log("Delete point:",te),N(null)},Pe=te=>{var fe,be;const ce=te.features;if(ce&&ce.length>0){const Oe=ce.find(Se=>Se.source==="neighborhoods");if(Oe){const Se=((fe=Oe.properties)==null?void 0:fe.MAPLABEL)||((be=Oe.properties)==null?void 0:be.NAME);if(Se){const Ve=Lt(Se);Ct({name:Se,pointCount:Ve,x:te.point.x,y:te.point.y})}}else Ct(null)}else Ct(null)},en=()=>{},tn=()=>{Ct(null)},Pt=(()=>{const te={...S};if(te.addpoints){let fe=te.addpoints.features;const be=b?[b]:r.selectedNeighborhoods;be.length>0&&(fe=fe.filter(Oe=>{var Ve;const Se=(Ve=Oe.properties)==null?void 0:Ve.neighbhood;return be.includes(Se)})),r.selectedServiceTypes.length>0&&(fe=fe.filter(Oe=>{var Ve;const Se=(Ve=Oe.properties)==null?void 0:Ve["Service Ty"];return r.selectedServiceTypes.includes(Se)})),te.addpoints={...te.addpoints,features:fe}}const ce=b?[b]:r.selectedNeighborhoods;if(te.NeighborhoodBoundaries&&ce.length>0){const fe=te.NeighborhoodBoundaries.features.filter(be=>{var Se;const Oe=(Se=be.properties)==null?void 0:Se.MAPLABEL;return ce.includes(Oe)});te.NeighborhoodBoundaries={...te.NeighborhoodBoundaries,features:fe}}return te})();return f||x?T.jsx("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0"},children:T.jsxs("div",{children:[f?"Initializing...":"Loading map data...",T.jsx("br",{}),T.jsx("small",{style:{color:"#666",marginTop:"8px"},children:c?"Loading as guest":`Logged in as ${u==null?void 0:u.role}`})]})}):y?T.jsxs("div",{style:{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f0",flexDirection:"column",gap:"16px"},children:[T.jsxs("div",{style:{color:"red",textAlign:"center"},children:[T.jsx("strong",{children:"Error loading map data"}),T.jsx("br",{}),y]}),T.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Retry"})]}):T.jsxs("div",{style:{height:"100vh",width:"100%",position:"relative"},children:[!c&&u&&T.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:1e3,background:"rgba(0,0,0,0.7)",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"12px"},children:[u.role," - ",u.email]}),T.jsxs(o3,{...w,onMove:bn,onClick:Y,onMouseMove:Pe,onMouseEnter:en,onMouseLeave:tn,interactiveLayerIds:["addpoints","neighborhoods-fill"],mapboxAccessToken:"pk.eyJ1IjoiaWZvcm1haGVyIiwiYSI6ImNsaHBjcnAwNDF0OGkzbnBzZmUxM2Q2bXgifQ.fIyIgSwq1WWVk9CKlXRXiQ",style:{width:"100%",height:"100%"},mapStyle:"mapbox://styles/mapbox/satellite-streets-v12",cursor:i?"crosshair":"auto",children:[T.jsx(a3,{position:"top-right"}),Pt.NeighborhoodBoundaries&&T.jsxs(jl,{id:"neighborhoods",type:"geojson",data:Pt.NeighborhoodBoundaries,children:[T.jsx(So,{id:"neighborhoods-fill",type:"fill",paint:{"fill-color":Ao.NeighborhoodBoundaries.paint["fill-color"],"fill-opacity":["interpolate",["linear"],["zoom"],13,.35,16,.05,18,0],"fill-outline-color":Ao.NeighborhoodBoundaries.paint["fill-outline-color"]}}),T.jsx(So,{...Ao.NeighborhoodBoundariesOutline}),T.jsx(So,{id:"neighborhoods-labels",type:"symbol",layout:{"text-field":["get","NAME"],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":12,"text-anchor":"center","text-justify":"center"},paint:{"text-color":"#171717","text-halo-color":"rgba(255, 255, 255, 0.8)","text-halo-width":1,"text-opacity":["interpolate",["linear"],["zoom"],13,1,16,.5,18,0]}})]}),Pt.addpoints&&T.jsx(jl,{id:"addpoints",type:"geojson",data:Pt.addpoints,children:T.jsx(So,{id:"addpoints",...Ao.addpoints})}),S.Sponsors&&T.jsx(jl,{id:"sponsors",type:"geojson",data:S.Sponsors,children:T.jsx(So,{...Ao.Sponsors})}),S.PortlandStreets&&T.jsx(jl,{id:"streets",type:"geojson",data:S.PortlandStreets}),n&&T.jsx(qh,{longitude:n.longitude,latitude:n.latitude,anchor:"bottom",children:T.jsxs("div",{className:"search-marker-container",children:[T.jsx("div",{className:"search-marker-pin",children:T.jsx("div",{className:"search-marker-dot"})}),T.jsxs("div",{className:"search-marker-tooltip",children:[n.address,T.jsx("div",{className:"search-marker-tooltip-arrow"})]})]})}),R&&D&&D.geometry.type==="Point"&&T.jsx(qh,{longitude:D.geometry.coordinates[0],latitude:D.geometry.coordinates[1],anchor:"center",children:T.jsx("div",{className:"sponsor-marker-container",children:T.jsx("img",{src:kI,alt:"Sponsor Logo",className:"sponsor-marker-img"})})}),R&&D&&!g&&!C&&T.jsx("div",{style:{position:"fixed",left:24,bottom:24,zIndex:1e3,background:"white",borderRadius:12,boxShadow:"0 2px 16px rgba(0,0,0,0.18)",padding:0,minWidth:320,maxWidth:360,display:"flex",alignItems:"center",gap:16},children:T.jsx(j3,{title:"Featured Sponsor",name:(Qa=D.properties)==null?void 0:Qa.Name,crossStreet:(Ya=D.properties)==null?void 0:Ya.CrossStreet,instagram:(Zr=D.properties)==null?void 0:Zr.Instagram,onClose:()=>O(!1)})}),o&&T.jsx(qh,{longitude:o.lng,latitude:o.lat,anchor:"bottom",children:T.jsx("div",{className:"add-point-marker"})})]}),Ie&&T.jsx(B3,{neighborhoodName:Ie.name,pointCount:Ie.pointCount,x:Ie.x,y:Ie.y}),g&&(()=>{var te,ce,fe,be,Oe,Se;return T.jsx(U3,{jobType:(te=g.properties)==null?void 0:te["Service Ty"],location:(ce=g.properties)==null?void 0:ce["Cross Stre"],status:(fe=g.properties)==null?void 0:fe.Status,fullAddress:(be=g.properties)==null?void 0:be["Full Addre"],referralSource:(Oe=g.properties)==null?void 0:Oe["Referral S"],estimate:(Se=g.properties)==null?void 0:Se.Estimate,onClose:()=>E(null),onEdit:()=>ee(g)})})(),C&&T.jsx(z3,{point:C,onClose:()=>N(null),onUpdatePoint:ve,onDeletePoint:he})]})};function K3(){const[t,e]=V.useState({longitude:-122.5715,latitude:45.498,zoom:12}),[n,r]=V.useState(null),[i,s]=V.useState({selectedNeighborhoods:[],selectedServiceTypes:[]}),[o,l]=V.useState(!1),[u,c]=V.useState(!1),[f,d]=V.useState(null),m=x=>{e({longitude:x.longitude,latitude:x.latitude,zoom:x.zoom}),r({longitude:x.longitude,latitude:x.latitude,address:x.address}),setTimeout(()=>{r(null)},1e4)},w=x=>{e(x)},S=x=>{s(x)},k=x=>{d(x),c(!1)};return T.jsx(wD,{children:T.jsxs("div",{className:"App",children:[T.jsx(ID,{onLocationSelect:m,filters:i,onFiltersChange:S,filterPanelOpen:o,setFilterPanelOpen:l,isAddingPoint:u,setIsAddingPoint:c,addPointCoordinates:f===null?void 0:f,setAddPointCoordinates:d}),T.jsx(G3,{viewState:t,onViewStateChange:w,searchMarker:n,filters:i,isAddingPoint:u,onPointAdd:k,addPointCoordinates:f===null?void 0:f})]})})}Yh.createRoot(document.getElementById("root")).render(T.jsx(Fd.StrictMode,{children:T.jsx(K3,{})}));export{Q3 as c,t0 as g};
