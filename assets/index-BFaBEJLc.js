(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Tu={exports:{}},Ca={},Au={exports:{}},dt={};var Ap;function pv(){if(Ap)return dt;Ap=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function x(U,ie,Le){this.props=U,this.context=ie,this.refs=T,this.updater=Le||M}x.prototype.isReactComponent={},x.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=x.prototype;function N(U,ie,Le){this.props=U,this.context=ie,this.refs=T,this.updater=Le||M}var R=N.prototype=new v;R.constructor=N,A(R,x.prototype),R.isPureReactComponent=!0;var L=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function q(U,ie,Le){var Q,ue={},xe=null,Se=null;if(ie!=null)for(Q in ie.ref!==void 0&&(Se=ie.ref),ie.key!==void 0&&(xe=""+ie.key),ie)G.call(ie,Q)&&!k.hasOwnProperty(Q)&&(ue[Q]=ie[Q]);var Ae=arguments.length-2;if(Ae===1)ue.children=Le;else if(1<Ae){for(var Ue=Array(Ae),Re=0;Re<Ae;Re++)Ue[Re]=arguments[Re+2];ue.children=Ue}if(U&&U.defaultProps)for(Q in Ae=U.defaultProps,Ae)ue[Q]===void 0&&(ue[Q]=Ae[Q]);return{$$typeof:s,type:U,key:xe,ref:Se,props:ue,_owner:F.current}}function P(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Le){return ie[Le]})}var ne=/\/+/g;function K(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ie.toString(36)}function oe(U,ie,Le,Q,ue){var xe=typeof U;(xe==="undefined"||xe==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(xe){case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case s:case e:Se=!0}}if(Se)return Se=U,ue=ue(Se),U=Q===""?"."+K(Se,0):Q,L(ue)?(Le="",U!=null&&(Le=U.replace(ne,"$&/")+"/"),oe(ue,ie,Le,"",function(Re){return Re})):ue!=null&&(C(ue)&&(ue=P(ue,Le+(!ue.key||Se&&Se.key===ue.key?"":(""+ue.key).replace(ne,"$&/")+"/")+U)),ie.push(ue)),1;if(Se=0,Q=Q===""?".":Q+":",L(U))for(var Ae=0;Ae<U.length;Ae++){xe=U[Ae];var Ue=Q+K(xe,Ae);Se+=oe(xe,ie,Le,Ue,ue)}else if(Ue=y(U),typeof Ue=="function")for(U=Ue.call(U),Ae=0;!(xe=U.next()).done;)xe=xe.value,Ue=Q+K(xe,Ae++),Se+=oe(xe,ie,Le,Ue,ue);else if(xe==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Se}function ce(U,ie,Le){if(U==null)return U;var Q=[],ue=0;return oe(U,Q,"","",function(xe){return ie.call(Le,xe,ue++)}),Q}function se(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Le){(U._status===0||U._status===-1)&&(U._status=1,U._result=Le)},function(Le){(U._status===0||U._status===-1)&&(U._status=2,U._result=Le)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},H={transition:null},de={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function ae(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:ce,forEach:function(U,ie,Le){ce(U,function(){ie.apply(this,arguments)},Le)},count:function(U){var ie=0;return ce(U,function(){ie++}),ie},toArray:function(U){return ce(U,function(ie){return ie})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=x,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=N,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,dt.act=ae,dt.cloneElement=function(U,ie,Le){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=A({},U.props),ue=U.key,xe=U.ref,Se=U._owner;if(ie!=null){if(ie.ref!==void 0&&(xe=ie.ref,Se=F.current),ie.key!==void 0&&(ue=""+ie.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Ue in ie)G.call(ie,Ue)&&!k.hasOwnProperty(Ue)&&(Q[Ue]=ie[Ue]===void 0&&Ae!==void 0?Ae[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Le;else if(1<Ue){Ae=Array(Ue);for(var Re=0;Re<Ue;Re++)Ae[Re]=arguments[Re+2];Q.children=Ae}return{$$typeof:s,type:U.type,key:ue,ref:xe,props:Q,_owner:Se}},dt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},dt.createElement=q,dt.createFactory=function(U){var ie=q.bind(null,U);return ie.type=U,ie},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:u,render:U}},dt.isValidElement=C,dt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},dt.memo=function(U,ie){return{$$typeof:g,type:U,compare:ie===void 0?null:ie}},dt.startTransition=function(U){var ie=H.transition;H.transition={};try{U()}finally{H.transition=ie}},dt.unstable_act=ae,dt.useCallback=function(U,ie){return le.current.useCallback(U,ie)},dt.useContext=function(U){return le.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},dt.useEffect=function(U,ie){return le.current.useEffect(U,ie)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(U,ie,Le){return le.current.useImperativeHandle(U,ie,Le)},dt.useInsertionEffect=function(U,ie){return le.current.useInsertionEffect(U,ie)},dt.useLayoutEffect=function(U,ie){return le.current.useLayoutEffect(U,ie)},dt.useMemo=function(U,ie){return le.current.useMemo(U,ie)},dt.useReducer=function(U,ie,Le){return le.current.useReducer(U,ie,Le)},dt.useRef=function(U){return le.current.useRef(U)},dt.useState=function(U){return le.current.useState(U)},dt.useSyncExternalStore=function(U,ie,Le){return le.current.useSyncExternalStore(U,ie,Le)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var Cp;function Hd(){return Cp||(Cp=1,Au.exports=pv()),Au.exports}var bp;function mv(){if(bp)return Ca;bp=1;var s=Hd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(u,p,g){var _,S={},y=null,M=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(S[_]=p[_]);if(u&&u.defaultProps)for(_ in p=u.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:u,key:y,ref:M,props:S,_owner:o.current}}return Ca.Fragment=n,Ca.jsx=d,Ca.jsxs=d,Ca}var Rp;function gv(){return Rp||(Rp=1,Tu.exports=mv()),Tu.exports}var h=gv(),ot=Hd(),el={},Cu={exports:{}},En={},bu={exports:{}},Ru={};var Pp;function vv(){return Pp||(Pp=1,(function(s){function e(H,de){var ae=H.length;H.push(de);e:for(;0<ae;){var U=ae-1>>>1,ie=H[U];if(0<o(ie,de))H[U]=de,H[ae]=ie,ae=U;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var de=H[0],ae=H.pop();if(ae!==de){H[0]=ae;e:for(var U=0,ie=H.length,Le=ie>>>1;U<Le;){var Q=2*(U+1)-1,ue=H[Q],xe=Q+1,Se=H[xe];if(0>o(ue,ae))xe<ie&&0>o(Se,ue)?(H[U]=Se,H[xe]=ae,U=xe):(H[U]=ue,H[Q]=ae,U=Q);else if(xe<ie&&0>o(Se,ae))H[U]=Se,H[xe]=ae,U=xe;else break e}}return de}function o(H,de){var ae=H.sortIndex-de.sortIndex;return ae!==0?ae:H.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,u=d.now();s.unstable_now=function(){return d.now()-u}}var p=[],g=[],_=1,S=null,y=3,M=!1,A=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var de=n(g);de!==null;){if(de.callback===null)r(g);else if(de.startTime<=H)r(g),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(g)}}function L(H){if(T=!1,R(H),!A)if(n(p)!==null)A=!0,se(G);else{var de=n(g);de!==null&&le(L,de.startTime-H)}}function G(H,de){A=!1,T&&(T=!1,v(q),q=-1),M=!0;var ae=y;try{for(R(de),S=n(p);S!==null&&(!(S.expirationTime>de)||H&&!z());){var U=S.callback;if(typeof U=="function"){S.callback=null,y=S.priorityLevel;var ie=U(S.expirationTime<=de);de=s.unstable_now(),typeof ie=="function"?S.callback=ie:S===n(p)&&r(p),R(de)}else r(p);S=n(p)}if(S!==null)var Le=!0;else{var Q=n(g);Q!==null&&le(L,Q.startTime-de),Le=!1}return Le}finally{S=null,y=ae,M=!1}}var F=!1,k=null,q=-1,P=5,C=-1;function z(){return!(s.unstable_now()-C<P)}function ne(){if(k!==null){var H=s.unstable_now();C=H;var de=!0;try{de=k(!0,H)}finally{de?K():(F=!1,k=null)}}else F=!1}var K;if(typeof N=="function")K=function(){N(ne)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=ne,K=function(){ce.postMessage(null)}}else K=function(){x(ne,0)};function se(H){k=H,F||(F=!0,K())}function le(H,de){q=x(function(){H(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,se(G))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var ae=y;y=de;try{return H()}finally{y=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,de){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=y;y=H;try{return de()}finally{y=ae}},s.unstable_scheduleCallback=function(H,de,ae){var U=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?U+ae:U):ae=U,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ae+ie,H={id:_++,callback:de,priorityLevel:H,startTime:ae,expirationTime:ie,sortIndex:-1},ae>U?(H.sortIndex=ae,e(g,H),n(p)===null&&H===n(g)&&(T?(v(q),q=-1):T=!0,le(L,ae-U))):(H.sortIndex=ie,e(p,H),A||M||(A=!0,se(G))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var de=y;return function(){var ae=y;y=de;try{return H.apply(this,arguments)}finally{y=ae}}}})(Ru)),Ru}var Np;function _v(){return Np||(Np=1,bu.exports=vv()),bu.exports}var Lp;function xv(){if(Lp)return En;Lp=1;var s=Hd(),e=_v();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function y(t){return p.call(S,t)?!0:p.call(_,t)?!1:g.test(t)?S[t]=!0:(_[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,f,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,N);x[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,N);x[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,N);x[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,a,l){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,l)&&(a=null),l||f===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),H=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,U;function ie(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Le=!1;function Q(t,i){if(!t||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var f=te.stack.split(`
`),m=l.stack.split(`
`),E=f.length-1,D=m.length-1;1<=E&&0<=D&&f[E]!==m[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==m[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==m[D]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=D);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case P:return"Profiler";case q:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(t){var i=Ue(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function lt(t){t._valueTracker||(t._valueTracker=Re(t))}function O(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Rt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vt(t,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xe(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function Ut(t,i){Xe(t,i);var a=Ae(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?nt(t,i.type,a):i.hasOwnProperty("defaultValue")&&nt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function et(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function nt(t,i,a){(i!=="number"||Rt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var I=Array.isArray;function w(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function re(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pe(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(I(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ae(a)}}function ve(t,i){var a=Ae(i.value),l=Ae(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function qe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?qe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ke,rt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ke=ke||document.createElement("div"),ke.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ke.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){ft.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var it=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function At(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j=null;function we(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fe=null,he=null,Ce=null;function Ke(t){if(t=fa(t)){if(typeof fe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),fe(t.stateNode,t.type,i))}}function ht(t){he?Ce?Ce.push(t):Ce=[t]:he=t}function Ot(){if(he){var t=he,i=Ce;if(Ce=he=null,Ke(t),i)for(t=0;t<i.length;t++)Ke(i[t])}}function jt(t,i){return t(i)}function _t(){}var bn=!1;function Rn(t,i,a){if(bn)return t(i,a);bn=!0;try{return jt(t,i,a)}finally{bn=!1,(he!==null||Ce!==null)&&(_t(),Ot())}}function Bi(t,i){var a=t.stateNode;if(a===null)return null;var l=mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Kn=!1;if(u)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Kn=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Kn=!1}function Ya(t,i,a,l,f,m,E,D,B){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(_e){this.onError(_e)}}var zi=!1,yi=null,Sr=!1,Hi=null,$a={onError:function(t){zi=!0,yi=t}};function Ka(t,i,a,l,f,m,E,D,B){zi=!1,yi=null,Ya.apply($a,arguments)}function ql(t,i,a,l,f,m,E,D,B){if(Ka.apply(this,arguments),zi){if(zi){var te=yi;zi=!1,yi=null}else throw Error(n(198));Sr||(Sr=!0,Hi=te)}}function Si(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Za(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(Si(t)!==t)throw Error(n(188))}function W(t){var i=t.alternate;if(!i){if(i=Si(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return b(f),t;if(m===l)return b(f),i;m=m.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=m;else{for(var E=!1,D=f.child;D;){if(D===a){E=!0,a=f,l=m;break}if(D===l){E=!0,l=f,a=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===a){E=!0,a=m,l=f;break}if(D===l){E=!0,l=m,a=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function J(t){return t=W(t),t!==null?ee(t):null}function ee(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ee(t);if(i!==null)return i;t=t.sibling}return null}var X=e.unstable_scheduleCallback,Te=e.unstable_cancelCallback,Ie=e.unstable_shouldYield,He=e.unstable_requestPaint,be=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,Ze=e.unstable_ImmediatePriority,je=e.unstable_UserBlockingPriority,mt=e.unstable_NormalPriority,Ft=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,Qt=null,at=null;function We(t){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Qt,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Vi,yt=Math.log,Pn=Math.LN2;function Vi(t){return t>>>=0,t===0?32:31-(yt(t)/Pn|0)|0}var Jt=64,Gi=4194304;function Ct(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,m=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~f;D!==0?l=Ct(D):(m&=E,m!==0&&(l=Ct(m)))}else E=a&~f,E!==0?l=Ct(E):m!==0&&(l=Ct(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-wt(i),f=1<<a,l|=t[a],i&=~f;return l}function Ys(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var E=31-wt(m),D=1<<E,B=f[E];B===-1?((D&a)===0||(D&l)!==0)&&(f[E]=Ys(D,i)):B<=i&&(t.expiredLanes|=D),m&=~D}}function Mr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qa(){var t=Jt;return Jt<<=1,(Jt&4194240)===0&&(Jt=64),t}function Kr(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function $s(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-wt(i),t[i]=a}function Ug(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-wt(a),m=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~m}}function Yl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-wt(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var Tt=0;function rf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sf,$l,af,of,lf,Kl=!1,Ja=[],ji=null,Wi=null,Xi=null,Ks=new Map,Zs=new Map,qi=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,a,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=fa(i),i!==null&&$l(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function kg(t,i,a,l,f){switch(i){case"focusin":return ji=Qs(ji,t,i,a,l,f),!0;case"dragenter":return Wi=Qs(Wi,t,i,a,l,f),!0;case"mouseover":return Xi=Qs(Xi,t,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return Ks.set(m,Qs(Ks.get(m)||null,t,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Zs.set(m,Qs(Zs.get(m)||null,t,i,a,l,f)),!0}return!1}function uf(t){var i=Er(t.target);if(i!==null){var a=Si(i);if(a!==null){if(i=a.tag,i===13){if(i=Za(a),i!==null){t.blockedOn=i,lf(t.priority,function(){af(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);j=l,a.target.dispatchEvent(l),j=null}else return i=fa(a),i!==null&&$l(i),t.blockedOn=a,!1;i.shift()}return!0}function df(t,i,a){eo(t)&&a.delete(i)}function Og(){Kl=!1,ji!==null&&eo(ji)&&(ji=null),Wi!==null&&eo(Wi)&&(Wi=null),Xi!==null&&eo(Xi)&&(Xi=null),Ks.forEach(df),Zs.forEach(df)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Kl||(Kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Og)))}function ea(t){function i(f){return Js(f,t)}if(0<Ja.length){Js(Ja[0],t);for(var a=1;a<Ja.length;a++){var l=Ja[a];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&Js(ji,t),Wi!==null&&Js(Wi,t),Xi!==null&&Js(Xi,t),Ks.forEach(i),Zs.forEach(i),a=0;a<qi.length;a++)l=qi[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(a=qi[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&qi.shift()}var Zr=L.ReactCurrentBatchConfig,to=!0;function Bg(t,i,a,l){var f=Tt,m=Zr.transition;Zr.transition=null;try{Tt=1,Zl(t,i,a,l)}finally{Tt=f,Zr.transition=m}}function zg(t,i,a,l){var f=Tt,m=Zr.transition;Zr.transition=null;try{Tt=4,Zl(t,i,a,l)}finally{Tt=f,Zr.transition=m}}function Zl(t,i,a,l){if(to){var f=Ql(t,i,a,l);if(f===null)mc(t,i,l,no,a),cf(t,l);else if(kg(f,t,i,a,l))l.stopPropagation();else if(cf(t,l),i&4&&-1<Fg.indexOf(t)){for(;f!==null;){var m=fa(f);if(m!==null&&sf(m),m=Ql(t,i,a,l),m===null&&mc(t,i,l,no,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else mc(t,i,l,null,a)}}var no=null;function Ql(t,i,a,l){if(no=null,t=we(l),t=Er(t),t!==null)if(i=Si(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Za(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function ff(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Ze:return 1;case je:return 4;case mt:case Ft:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var Yi=null,Jl=null,io=null;function hf(){if(io)return io;var t,i=Jl,a=i.length,l,f="value"in Yi?Yi.value:Yi.textContent,m=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[m-l];l++);return io=f.slice(t,1<l?1-l:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function pf(){return!1}function Ln(t){function i(a,l,f,m,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?so:pf,this.isPropagationStopped=pf,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Ln(Qr),ta=ae({},Qr,{view:0,detail:0}),Hg=Ln(ta),tc,nc,na,ao=ae({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?(tc=t.screenX-na.screenX,nc=t.screenY-na.screenY):nc=tc=0,na=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),mf=Ln(ao),Vg=ae({},ao,{dataTransfer:0}),Gg=Ln(Vg),jg=ae({},ta,{relatedTarget:0}),ic=Ln(jg),Wg=ae({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=Ln(Wg),qg=ae({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yg=Ln(qg),$g=ae({},Qr,{data:0}),gf=Ln($g),Kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Qg[t])?!!i[t]:!1}function rc(){return Jg}var e0=ae({},ta,{key:function(t){if(t.key){var i=Kg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t0=Ln(e0),n0=ae({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=Ln(n0),i0=ae({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),r0=Ln(i0),s0=ae({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),a0=Ln(s0),o0=ae({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=Ln(o0),c0=[9,13,27,32],sc=u&&"CompositionEvent"in window,ia=null;u&&"documentMode"in document&&(ia=document.documentMode);var u0=u&&"TextEvent"in window&&!ia,_f=u&&(!sc||ia&&8<ia&&11>=ia),xf=" ",yf=!1;function Sf(t,i){switch(t){case"keyup":return c0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function d0(t,i){switch(t){case"compositionend":return Mf(i);case"keypress":return i.which!==32?null:(yf=!0,xf);case"textInput":return t=i.data,t===xf&&yf?null:t;default:return null}}function f0(t,i){if(Jr)return t==="compositionend"||!sc&&Sf(t,i)?(t=hf(),io=Jl=Yi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _f&&i.locale!=="ko"?null:i.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!h0[t.type]:i==="textarea"}function wf(t,i,a,l){ht(l),i=fo(i,"onChange"),0<i.length&&(a=new ec("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ra=null,sa=null;function p0(t){Vf(t,0)}function oo(t){var i=rs(t);if(O(i))return t}function m0(t,i){if(t==="change")return i}var Tf=!1;if(u){var ac;if(u){var oc="oninput"in document;if(!oc){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),oc=typeof Af.oninput=="function"}ac=oc}else ac=!1;Tf=ac&&(!document.documentMode||9<document.documentMode)}function Cf(){ra&&(ra.detachEvent("onpropertychange",bf),sa=ra=null)}function bf(t){if(t.propertyName==="value"&&oo(sa)){var i=[];wf(i,sa,t,we(t)),Rn(p0,i)}}function g0(t,i,a){t==="focusin"?(Cf(),ra=i,sa=a,ra.attachEvent("onpropertychange",bf)):t==="focusout"&&Cf()}function v0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(sa)}function _0(t,i){if(t==="click")return oo(i)}function x0(t,i){if(t==="input"||t==="change")return oo(i)}function y0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:y0;function aa(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!Zn(t[f],i[f]))return!1}return!0}function Rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pf(t,i){var a=Rf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rf(a)}}function Nf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Nf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Lf(){for(var t=window,i=Rt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Rt(t.document)}return i}function lc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function S0(t){var i=Lf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nf(a.ownerDocument.documentElement,a)){if(l!==null&&lc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!t.extend&&m>l&&(f=l,l=m,m=f),f=Pf(a,m);var E=Pf(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M0=u&&"documentMode"in document&&11>=document.documentMode,es=null,cc=null,oa=null,uc=!1;function Df(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||es==null||es!==Rt(l)||(l=es,"selectionStart"in l&&lc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oa&&aa(oa,l)||(oa=l,l=fo(cc,"onSelect"),0<l.length&&(i=new ec("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=es)))}function lo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ts={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},dc={},If={};u&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function co(t){if(dc[t])return dc[t];if(!ts[t])return t;var i=ts[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in If)return dc[t]=i[a];return t}var Uf=co("animationend"),Ff=co("animationiteration"),kf=co("animationstart"),Of=co("transitionend"),Bf=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Bf.set(t,i),c(i,[t])}for(var fc=0;fc<zf.length;fc++){var hc=zf[fc],E0=hc.toLowerCase(),w0=hc[0].toUpperCase()+hc.slice(1);$i(E0,"on"+w0)}$i(Uf,"onAnimationEnd"),$i(Ff,"onAnimationIteration"),$i(kf,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Of,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Hf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,ql(l,i,void 0,t),t.currentTarget=null}function Vf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],B=D.instance,te=D.currentTarget;if(D=D.listener,B!==m&&f.isPropagationStopped())break e;Hf(f,D,te),m=B}else for(E=0;E<l.length;E++){if(D=l[E],B=D.instance,te=D.currentTarget,D=D.listener,B!==m&&f.isPropagationStopped())break e;Hf(f,D,te),m=B}}}if(Sr)throw t=Hi,Sr=!1,Hi=null,t}function Nt(t,i){var a=i[Sc];a===void 0&&(a=i[Sc]=new Set);var l=t+"__bubble";a.has(l)||(Gf(i,t,2,!1),a.add(l))}function pc(t,i,a){var l=0;i&&(l|=4),Gf(a,t,l,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[uo]){t[uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(T0.has(a)||pc(a,!1,t),pc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,pc("selectionchange",!1,i))}}function Gf(t,i,a,l){switch(ff(i)){case 1:var f=Bg;break;case 4:f=zg;break;default:f=Zl}a=f.bind(null,i,a,t),f=void 0,!Kn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function mc(t,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Er(D),E===null)return;if(B=E.tag,B===5||B===6){l=m=E;continue e}D=D.parentNode}}l=l.return}Rn(function(){var te=m,_e=we(a),ye=[];e:{var ge=Bf.get(t);if(ge!==void 0){var Fe=ec,ze=t;switch(t){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":Fe=t0;break;case"focusin":ze="focus",Fe=ic;break;case"focusout":ze="blur",Fe=ic;break;case"beforeblur":case"afterblur":Fe=ic;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=r0;break;case Uf:case Ff:case kf:Fe=Xg;break;case Of:Fe=a0;break;case"scroll":Fe=Hg;break;case"wheel":Fe=l0;break;case"copy":case"cut":case"paste":Fe=Yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=vf}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",Y=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var V=te,Z;V!==null;){Z=V;var Ee=Z.stateNode;if(Z.tag===5&&Ee!==null&&(Z=Ee,Y!==null&&(Ee=Bi(V,Y),Ee!=null&&Ve.push(ua(V,Ee,Z)))),Gt)break;V=V.return}0<Ve.length&&(ge=new Fe(ge,ze,null,a,_e),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",ge&&a!==j&&(ze=a.relatedTarget||a.fromElement)&&(Er(ze)||ze[Mi]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(ze=a.relatedTarget||a.toElement,Fe=te,ze=ze?Er(ze):null,ze!==null&&(Gt=Si(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Fe=null,ze=te),Fe!==ze)){if(Ve=mf,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=vf,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Gt=Fe==null?ge:rs(Fe),Z=ze==null?ge:rs(ze),ge=new Ve(Ee,V+"leave",Fe,a,_e),ge.target=Gt,ge.relatedTarget=Z,Ee=null,Er(_e)===te&&(Ve=new Ve(Y,V+"enter",ze,a,_e),Ve.target=Z,Ve.relatedTarget=Gt,Ee=Ve),Gt=Ee,Fe&&ze)t:{for(Ve=Fe,Y=ze,V=0,Z=Ve;Z;Z=ns(Z))V++;for(Z=0,Ee=Y;Ee;Ee=ns(Ee))Z++;for(;0<V-Z;)Ve=ns(Ve),V--;for(;0<Z-V;)Y=ns(Y),Z--;for(;V--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ns(Ve),Y=ns(Y)}Ve=null}else Ve=null;Fe!==null&&jf(ye,ge,Fe,Ve,!1),ze!==null&&Gt!==null&&jf(ye,Gt,ze,Ve,!0)}}e:{if(ge=te?rs(te):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var Ge=m0;else if(Ef(ge))if(Tf)Ge=x0;else{Ge=v0;var Ye=g0}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ge=_0);if(Ge&&(Ge=Ge(t,te))){wf(ye,Ge,a,_e);break e}Ye&&Ye(t,ge,te),t==="focusout"&&(Ye=ge._wrapperState)&&Ye.controlled&&ge.type==="number"&&nt(ge,"number",ge.value)}switch(Ye=te?rs(te):window,t){case"focusin":(Ef(Ye)||Ye.contentEditable==="true")&&(es=Ye,cc=te,oa=null);break;case"focusout":oa=cc=es=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Df(ye,a,_e);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":Df(ye,a,_e)}var $e;if(sc)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Jr?Sf(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(_f&&a.locale!=="ko"&&(Jr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Jr&&($e=hf()):(Yi=_e,Jl="value"in Yi?Yi.value:Yi.textContent,Jr=!0)),Ye=fo(te,tt),0<Ye.length&&(tt=new gf(tt,t,null,a,_e),ye.push({event:tt,listeners:Ye}),$e?tt.data=$e:($e=Mf(a),$e!==null&&(tt.data=$e)))),($e=u0?d0(t,a):f0(t,a))&&(te=fo(te,"onBeforeInput"),0<te.length&&(_e=new gf("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:te}),_e.data=$e))}Vf(ye,i)})}function ua(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Bi(t,a),m!=null&&l.unshift(ua(t,m,f)),m=Bi(t,i),m!=null&&l.push(ua(t,m,f))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,i,a,l,f){for(var m=i._reactName,E=[];a!==null&&a!==l;){var D=a,B=D.alternate,te=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&te!==null&&(D=te,f?(B=Bi(a,m),B!=null&&E.unshift(ua(a,B,D))):f||(B=Bi(a,m),B!=null&&E.push(ua(a,B,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var A0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function Wf(t){return(typeof t=="string"?t:""+t).replace(A0,`
`).replace(C0,"")}function ho(t,i,a){if(i=Wf(i),Wf(t)!==i&&a)throw Error(n(425))}function po(){}var gc=null,vc=null;function _c(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch(P0)}:xc;function P0(t){setTimeout(function(){throw t})}function yc(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),ea(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);ea(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),ui="__reactFiber$"+is,da="__reactProps$"+is,Mi="__reactContainer$"+is,Sc="__reactEvents$"+is,N0="__reactListeners$"+is,L0="__reactHandles$"+is;function Er(t){var i=t[ui];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Mi]||a[ui]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=qf(t);t!==null;){if(a=t[ui])return a;t=qf(t)}return i}t=a,a=t.parentNode}return null}function fa(t){return t=t[ui]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[da]||null}var Mc=[],ss=-1;function Zi(t){return{current:t}}function Lt(t){0>ss||(t.current=Mc[ss],Mc[ss]=null,ss--)}function bt(t,i){ss++,Mc[ss]=t.current,t.current=i}var Qi={},ln=Zi(Qi),_n=Zi(!1),wr=Qi;function as(t,i){var a=t.type.contextTypes;if(!a)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function xn(t){return t=t.childContextTypes,t!=null}function go(){Lt(_n),Lt(ln)}function Yf(t,i,a){if(ln.current!==Qi)throw Error(n(168));bt(ln,i),bt(_n,a)}function $f(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,Se(t)||"Unknown",f));return ae({},a,l)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,wr=ln.current,bt(ln,t),bt(_n,_n.current),!0}function Kf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=$f(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,Lt(_n),Lt(ln),bt(ln,t)):Lt(_n),bt(_n,a)}var Ei=null,_o=!1,Ec=!1;function Zf(t){Ei===null?Ei=[t]:Ei.push(t)}function D0(t){_o=!0,Zf(t)}function Ji(){if(!Ec&&Ei!==null){Ec=!0;var t=0,i=Tt;try{var a=Ei;for(Tt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ei=null,_o=!1}catch(f){throw Ei!==null&&(Ei=Ei.slice(t+1)),X(Ze,Ji),f}finally{Tt=i,Ec=!1}}return null}var os=[],ls=0,xo=null,yo=0,Vn=[],Gn=0,Tr=null,wi=1,Ti="";function Ar(t,i){os[ls++]=yo,os[ls++]=xo,xo=t,yo=i}function Qf(t,i,a){Vn[Gn++]=wi,Vn[Gn++]=Ti,Vn[Gn++]=Tr,Tr=t;var l=wi;t=Ti;var f=32-wt(l)-1;l&=~(1<<f),a+=1;var m=32-wt(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,wi=1<<32-wt(i)+f|a<<f|l,Ti=m+t}else wi=1<<m|a<<f|l,Ti=t}function wc(t){t.return!==null&&(Ar(t,1),Qf(t,1,0))}function Tc(t){for(;t===xo;)xo=os[--ls],os[ls]=null,yo=os[--ls],os[ls]=null;for(;t===Tr;)Tr=Vn[--Gn],Vn[Gn]=null,Ti=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var Dn=null,In=null,kt=!1,Qn=null;function Jf(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function eh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,In=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Tr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Dn=t,In=null,!0):!1;default:return!1}}function Ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(kt){var i=In;if(i){var a=i;if(!eh(t,i)){if(Ac(t))throw Error(n(418));i=Ki(a.nextSibling);var l=Dn;i&&eh(t,i)?Jf(l,a):(t.flags=t.flags&-4097|2,kt=!1,Dn=t)}}else{if(Ac(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Dn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function So(t){if(t!==Dn)return!1;if(!kt)return th(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!_c(t.type,t.memoizedProps)),i&&(i=In)){if(Ac(t))throw nh(),Error(n(418));for(;i;)Jf(t,i),i=Ki(i.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){In=Ki(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}In=null}}else In=Dn?Ki(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=In;t;)t=Ki(t.nextSibling)}function cs(){In=Dn=null,kt=!1}function bc(t){Qn===null?Qn=[t]:Qn.push(t)}var I0=L.ReactCurrentBatchConfig;function ha(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var D=f.refs;E===null?delete D[m]:D[m]=E},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ih(t){var i=t._init;return i(t._payload)}function rh(t){function i(Y,V){if(t){var Z=Y.deletions;Z===null?(Y.deletions=[V],Y.flags|=16):Z.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function f(Y,V){return Y=or(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,Z){return Y.index=Z,t?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<V?(Y.flags|=2,V):Z):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,Z,Ee){return V===null||V.tag!==6?(V=xu(Z,Y.mode,Ee),V.return=Y,V):(V=f(V,Z),V.return=Y,V)}function B(Y,V,Z,Ee){var Ge=Z.type;return Ge===k?_e(Y,V,Z.props.children,Ee,Z.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&ih(Ge)===V.type)?(Ee=f(V,Z.props),Ee.ref=ha(Y,V,Z),Ee.return=Y,Ee):(Ee=Xo(Z.type,Z.key,Z.props,null,Y.mode,Ee),Ee.ref=ha(Y,V,Z),Ee.return=Y,Ee)}function te(Y,V,Z,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=yu(Z,Y.mode,Ee),V.return=Y,V):(V=f(V,Z.children||[]),V.return=Y,V)}function _e(Y,V,Z,Ee,Ge){return V===null||V.tag!==7?(V=Ir(Z,Y.mode,Ee,Ge),V.return=Y,V):(V=f(V,Z),V.return=Y,V)}function ye(Y,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=xu(""+V,Y.mode,Z),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return Z=Xo(V.type,V.key,V.props,null,Y.mode,Z),Z.ref=ha(Y,null,V),Z.return=Y,Z;case F:return V=yu(V,Y.mode,Z),V.return=Y,V;case se:var Ee=V._init;return ye(Y,Ee(V._payload),Z)}if(I(V)||de(V))return V=Ir(V,Y.mode,Z,null),V.return=Y,V;Mo(Y,V)}return null}function ge(Y,V,Z,Ee){var Ge=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ge!==null?null:D(Y,V,""+Z,Ee);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case G:return Z.key===Ge?B(Y,V,Z,Ee):null;case F:return Z.key===Ge?te(Y,V,Z,Ee):null;case se:return Ge=Z._init,ge(Y,V,Ge(Z._payload),Ee)}if(I(Z)||de(Z))return Ge!==null?null:_e(Y,V,Z,Ee,null);Mo(Y,Z)}return null}function Fe(Y,V,Z,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(Z)||null,D(V,Y,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return Y=Y.get(Ee.key===null?Z:Ee.key)||null,B(V,Y,Ee,Ge);case F:return Y=Y.get(Ee.key===null?Z:Ee.key)||null,te(V,Y,Ee,Ge);case se:var Ye=Ee._init;return Fe(Y,V,Z,Ye(Ee._payload),Ge)}if(I(Ee)||de(Ee))return Y=Y.get(Z)||null,_e(V,Y,Ee,Ge,null);Mo(V,Ee)}return null}function ze(Y,V,Z,Ee){for(var Ge=null,Ye=null,$e=V,tt=V=0,nn=null;$e!==null&&tt<Z.length;tt++){$e.index>tt?(nn=$e,$e=null):nn=$e.sibling;var St=ge(Y,$e,Z[tt],Ee);if(St===null){$e===null&&($e=nn);break}t&&$e&&St.alternate===null&&i(Y,$e),V=m(St,V,tt),Ye===null?Ge=St:Ye.sibling=St,Ye=St,$e=nn}if(tt===Z.length)return a(Y,$e),kt&&Ar(Y,tt),Ge;if($e===null){for(;tt<Z.length;tt++)$e=ye(Y,Z[tt],Ee),$e!==null&&(V=m($e,V,tt),Ye===null?Ge=$e:Ye.sibling=$e,Ye=$e);return kt&&Ar(Y,tt),Ge}for($e=l(Y,$e);tt<Z.length;tt++)nn=Fe($e,Y,tt,Z[tt],Ee),nn!==null&&(t&&nn.alternate!==null&&$e.delete(nn.key===null?tt:nn.key),V=m(nn,V,tt),Ye===null?Ge=nn:Ye.sibling=nn,Ye=nn);return t&&$e.forEach(function(lr){return i(Y,lr)}),kt&&Ar(Y,tt),Ge}function Ve(Y,V,Z,Ee){var Ge=de(Z);if(typeof Ge!="function")throw Error(n(150));if(Z=Ge.call(Z),Z==null)throw Error(n(151));for(var Ye=Ge=null,$e=V,tt=V=0,nn=null,St=Z.next();$e!==null&&!St.done;tt++,St=Z.next()){$e.index>tt?(nn=$e,$e=null):nn=$e.sibling;var lr=ge(Y,$e,St.value,Ee);if(lr===null){$e===null&&($e=nn);break}t&&$e&&lr.alternate===null&&i(Y,$e),V=m(lr,V,tt),Ye===null?Ge=lr:Ye.sibling=lr,Ye=lr,$e=nn}if(St.done)return a(Y,$e),kt&&Ar(Y,tt),Ge;if($e===null){for(;!St.done;tt++,St=Z.next())St=ye(Y,St.value,Ee),St!==null&&(V=m(St,V,tt),Ye===null?Ge=St:Ye.sibling=St,Ye=St);return kt&&Ar(Y,tt),Ge}for($e=l(Y,$e);!St.done;tt++,St=Z.next())St=Fe($e,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),V=m(St,V,tt),Ye===null?Ge=St:Ye.sibling=St,Ye=St);return t&&$e.forEach(function(hv){return i(Y,hv)}),kt&&Ar(Y,tt),Ge}function Gt(Y,V,Z,Ee){if(typeof Z=="object"&&Z!==null&&Z.type===k&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case G:e:{for(var Ge=Z.key,Ye=V;Ye!==null;){if(Ye.key===Ge){if(Ge=Z.type,Ge===k){if(Ye.tag===7){a(Y,Ye.sibling),V=f(Ye,Z.props.children),V.return=Y,Y=V;break e}}else if(Ye.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&ih(Ge)===Ye.type){a(Y,Ye.sibling),V=f(Ye,Z.props),V.ref=ha(Y,Ye,Z),V.return=Y,Y=V;break e}a(Y,Ye);break}else i(Y,Ye);Ye=Ye.sibling}Z.type===k?(V=Ir(Z.props.children,Y.mode,Ee,Z.key),V.return=Y,Y=V):(Ee=Xo(Z.type,Z.key,Z.props,null,Y.mode,Ee),Ee.ref=ha(Y,V,Z),Ee.return=Y,Y=Ee)}return E(Y);case F:e:{for(Ye=Z.key;V!==null;){if(V.key===Ye)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){a(Y,V.sibling),V=f(V,Z.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else i(Y,V);V=V.sibling}V=yu(Z,Y.mode,Ee),V.return=Y,Y=V}return E(Y);case se:return Ye=Z._init,Gt(Y,V,Ye(Z._payload),Ee)}if(I(Z))return ze(Y,V,Z,Ee);if(de(Z))return Ve(Y,V,Z,Ee);Mo(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(a(Y,V.sibling),V=f(V,Z),V.return=Y,Y=V):(a(Y,V),V=xu(Z,Y.mode,Ee),V.return=Y,Y=V),E(Y)):a(Y,V)}return Gt}var us=rh(!0),sh=rh(!1),Eo=Zi(null),wo=null,ds=null,Rc=null;function Pc(){Rc=ds=wo=null}function Nc(t){var i=Eo.current;Lt(Eo),t._currentValue=i}function Lc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function fs(t,i){wo=t,Rc=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Rc!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(wo===null)throw Error(n(308));ds=t,wo.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var Cr=null;function Dc(t){Cr===null?Cr=[t]:Cr.push(t)}function ah(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Dc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ai(t,l)}function Ai(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var er=!1;function Ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ai(t,a)}return f=l.interleaved,f===null?(i.next=i,Dc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ai(t,a)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Yl(t,a)}}function lh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,l){var f=t.updateQueue;er=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var B=D,te=B.next;B.next=null,E===null?m=te:E.next=te,E=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==E&&(D===null?_e.firstBaseUpdate=te:D.next=te,_e.lastBaseUpdate=B))}if(m!==null){var ye=f.baseState;E=0,_e=te=B=null,D=m;do{var ge=D.lane,Fe=D.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ve=D;switch(ge=i,Fe=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(Fe,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Fe,ye,ge):ze,ge==null)break e;ye=ae({},ye,ge);break e;case 2:er=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[D]:ge.push(D))}else Fe={eventTime:Fe,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(te=_e=Fe,B=ye):_e=_e.next=Fe,E|=ge;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(_e===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=te,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Pr|=E,t.lanes=E,t.memoizedState=ye}}function ch(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var pa={},di=Zi(pa),ma=Zi(pa),ga=Zi(pa);function br(t){if(t===pa)throw Error(n(174));return t}function Uc(t,i){switch(bt(ga,i),bt(ma,t),bt(di,pa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Pe(i,t)}Lt(di),bt(di,i)}function hs(){Lt(di),Lt(ma),Lt(ga)}function uh(t){br(ga.current);var i=br(di.current),a=Pe(i,t.type);i!==a&&(bt(ma,t),bt(di,a))}function Fc(t){ma.current===t&&(Lt(di),Lt(ma))}var Bt=Zi(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var kc=[];function Oc(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var bo=L.ReactCurrentDispatcher,Bc=L.ReactCurrentBatchConfig,Rr=0,zt=null,qt=null,en=null,Ro=!1,va=!1,_a=0,U0=0;function cn(){throw Error(n(321))}function zc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Zn(t[a],i[a]))return!1;return!0}function Hc(t,i,a,l,f,m){if(Rr=m,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=t===null||t.memoizedState===null?B0:z0,t=a(l,f),va){m=0;do{if(va=!1,_a=0,25<=m)throw Error(n(301));m+=1,en=qt=null,i.updateQueue=null,bo.current=H0,t=a(l,f)}while(va)}if(bo.current=Lo,i=qt!==null&&qt.next!==null,Rr=0,en=qt=zt=null,Ro=!1,i)throw Error(n(300));return t}function Vc(){var t=_a!==0;return _a=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function Wn(){if(qt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function xa(t,i){return typeof i=="function"?i(t):i}function Gc(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=qt,f=l.baseQueue,m=a.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}l.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,l=l.baseState;var D=E=null,B=null,te=m;do{var _e=te.lane;if((Rr&_e)===_e)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var ye={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(D=B=ye,E=l):B=B.next=ye,zt.lanes|=_e,Pr|=_e}te=te.next}while(te!==null&&te!==m);B===null?E=l:B.next=D,Zn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do m=f.lane,zt.lanes|=m,Pr|=m,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function jc(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);Zn(m,i.memoizedState)||(yn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function dh(){}function fh(t,i){var a=zt,l=Wn(),f=i(),m=!Zn(l.memoizedState,f);if(m&&(l.memoizedState=f,yn=!0),l=l.queue,Wc(mh.bind(null,a,l,t),[t]),l.getSnapshot!==i||m||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,ya(9,ph.bind(null,a,l,f,i),void 0,null),tn===null)throw Error(n(349));(Rr&30)!==0||hh(a,i,f)}return f}function hh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function ph(t,i,a,l){i.value=a,i.getSnapshot=l,gh(i)&&vh(t)}function mh(t,i,a){return a(function(){gh(i)&&vh(t)})}function gh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Zn(t,a)}catch{return!0}}function vh(t){var i=Ai(t,1);i!==null&&ni(i,t,1,-1)}function _h(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},i.queue=t,t=t.dispatch=O0.bind(null,zt,t),[i.memoizedState,t]}function ya(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function xh(){return Wn().memoizedState}function Po(t,i,a,l){var f=fi();zt.flags|=t,f.memoizedState=ya(1|i,a,void 0,l===void 0?null:l)}function No(t,i,a,l){var f=Wn();l=l===void 0?null:l;var m=void 0;if(qt!==null){var E=qt.memoizedState;if(m=E.destroy,l!==null&&zc(l,E.deps)){f.memoizedState=ya(i,a,m,l);return}}zt.flags|=t,f.memoizedState=ya(1|i,a,m,l)}function yh(t,i){return Po(8390656,8,t,i)}function Wc(t,i){return No(2048,8,t,i)}function Sh(t,i){return No(4,2,t,i)}function Mh(t,i){return No(4,4,t,i)}function Eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,a){return a=a!=null?a.concat([t]):null,No(4,4,Eh.bind(null,i,t),a)}function Xc(){}function Th(t,i){var a=Wn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&zc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Ah(t,i){var a=Wn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&zc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Ch(t,i,a){return(Rr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=a):(Zn(a,i)||(a=Qa(),zt.lanes|=a,Pr|=a,t.baseState=!0),i)}function F0(t,i){var a=Tt;Tt=a!==0&&4>a?a:4,t(!0);var l=Bc.transition;Bc.transition={};try{t(!1),i()}finally{Tt=a,Bc.transition=l}}function bh(){return Wn().memoizedState}function k0(t,i,a){var l=sr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Rh(t))Ph(i,a);else if(a=ah(t,i,a,l),a!==null){var f=mn();ni(a,t,l,f),Nh(a,i,l)}}function O0(t,i,a){var l=sr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rh(t))Ph(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,a);if(f.hasEagerState=!0,f.eagerState=D,Zn(D,E)){var B=i.interleaved;B===null?(f.next=f,Dc(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}a=ah(t,i,f,l),a!==null&&(f=mn(),ni(a,t,l,f),Nh(a,i,l))}}function Rh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Ph(t,i){va=Ro=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Nh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Yl(t,a)}}var Lo={readContext:jn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},B0={readContext:jn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:yh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Po(4194308,4,Eh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Po(4194308,4,t,i)},useInsertionEffect:function(t,i){return Po(4,2,t,i)},useMemo:function(t,i){var a=fi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=fi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=k0.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:_h,useDebugValue:Xc,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=_h(!1),i=t[0];return t=F0.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,f=fi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),tn===null)throw Error(n(349));(Rr&30)!==0||hh(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,yh(mh.bind(null,l,m,t),[t]),l.flags|=2048,ya(9,ph.bind(null,l,m,a,i),void 0,null),a},useId:function(){var t=fi(),i=tn.identifierPrefix;if(kt){var a=Ti,l=wi;a=(l&~(1<<32-wt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=U0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},z0={readContext:jn,useCallback:Th,useContext:jn,useEffect:Wc,useImperativeHandle:wh,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Gc,useRef:xh,useState:function(){return Gc(xa)},useDebugValue:Xc,useDeferredValue:function(t){var i=Wn();return Ch(i,qt.memoizedState,t)},useTransition:function(){var t=Gc(xa)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:fh,useId:bh,unstable_isNewReconciler:!1},H0={readContext:jn,useCallback:Th,useContext:jn,useEffect:Wc,useImperativeHandle:wh,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:jc,useRef:xh,useState:function(){return jc(xa)},useDebugValue:Xc,useDeferredValue:function(t){var i=Wn();return qt===null?i.memoizedState=t:Ch(i,qt.memoizedState,t)},useTransition:function(){var t=jc(xa)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:fh,useId:bh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function qc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:ae({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Do={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=mn(),f=sr(t),m=Ci(l,f);m.payload=i,a!=null&&(m.callback=a),i=tr(t,m,f),i!==null&&(ni(i,t,f,l),To(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=mn(),f=sr(t),m=Ci(l,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=tr(t,m,f),i!==null&&(ni(i,t,f,l),To(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=mn(),l=sr(t),f=Ci(a,l);f.tag=2,i!=null&&(f.callback=i),i=tr(t,f,l),i!==null&&(ni(i,t,l,a),To(i,t,l))}};function Lh(t,i,a,l,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!aa(a,l)||!aa(f,m):!0}function Dh(t,i,a){var l=!1,f=Qi,m=i.contextType;return typeof m=="object"&&m!==null?m=jn(m):(f=xn(i)?wr:ln.current,l=i.contextTypes,m=(l=l!=null)?as(t,f):Qi),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function Ih(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function Yc(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Ic(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=jn(m):(m=xn(i)?wr:ln.current,f.context=as(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(qc(t,i,m,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Do.enqueueReplaceState(f,f.state,null),Ao(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var a="",l=i;do a+=ue(l),l=l.return;while(l);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function $c(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Kc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function Uh(t,i,a){a=Ci(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){zo||(zo=!0,du=l),Kc(t,i)},a}function Fh(t,i,a){a=Ci(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Kc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Kc(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function kh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new V0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=nv.bind(null,t,i,a),i.then(t,t))}function Oh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ci(-1,1),i.tag=2,tr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var G0=L.ReactCurrentOwner,yn=!1;function pn(t,i,a,l){i.child=t===null?sh(i,null,a,l):us(i,t.child,a,l)}function zh(t,i,a,l,f){a=a.render;var m=i.ref;return fs(i,f),l=Hc(t,i,a,l,m,f),a=Vc(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,bi(t,i,f)):(kt&&a&&wc(i),i.flags|=1,pn(t,i,l,f),i.child)}function Hh(t,i,a,l,f){if(t===null){var m=a.type;return typeof m=="function"&&!_u(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Vh(t,i,m,l,f)):(t=Xo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(E,l)&&t.ref===i.ref)return bi(t,i,f)}return i.flags|=1,t=or(m,l),t.ref=i.ref,t.return=i,i.child=t}function Vh(t,i,a,l,f){if(t!==null){var m=t.memoizedProps;if(aa(m,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,bi(t,i,f)}return Zc(t,i,a,l,f)}function Gh(t,i,a){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(gs,Un),Un|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(gs,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,bt(gs,Un),Un|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,bt(gs,Un),Un|=l;return pn(t,i,f,a),i.child}function jh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Zc(t,i,a,l,f){var m=xn(a)?wr:ln.current;return m=as(i,m),fs(i,f),a=Hc(t,i,a,l,m,f),l=Vc(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,bi(t,i,f)):(kt&&l&&wc(i),i.flags|=1,pn(t,i,a,f),i.child)}function Wh(t,i,a,l,f){if(xn(a)){var m=!0;vo(i)}else m=!1;if(fs(i,f),i.stateNode===null)Uo(t,i),Dh(i,a,l),Yc(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var B=E.context,te=a.contextType;typeof te=="object"&&te!==null?te=jn(te):(te=xn(a)?wr:ln.current,te=as(i,te));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||B!==te)&&Ih(i,E,l,te),er=!1;var ge=i.memoizedState;E.state=ge,Ao(i,l,E,f),B=i.memoizedState,D!==l||ge!==B||_n.current||er?(typeof _e=="function"&&(qc(i,a,_e,l),B=i.memoizedState),(D=er||Lh(i,a,D,l,ge,B,te))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=te,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,oh(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:Jn(i.type,D),E.props=te,ye=i.pendingProps,ge=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=xn(a)?wr:ln.current,B=as(i,B));var Fe=a.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||ge!==B)&&Ih(i,E,l,B),er=!1,ge=i.memoizedState,E.state=ge,Ao(i,l,E,f);var ze=i.memoizedState;D!==ye||ge!==ze||_n.current||er?(typeof Fe=="function"&&(qc(i,a,Fe,l),ze=i.memoizedState),(te=er||Lh(i,a,te,l,ge,ze,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ze,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ze,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),E.props=l,E.state=ze,E.context=B,l=te):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Qc(t,i,a,l,m,f)}function Qc(t,i,a,l,f,m){jh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&Kf(i,a,!1),bi(t,i,m);l=i.stateNode,G0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=us(i,t.child,null,m),i.child=us(i,null,D,m)):pn(t,i,D,m),i.memoizedState=l.state,f&&Kf(i,a,!0),i.child}function Xh(t){var i=t.stateNode;i.pendingContext?Yf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Yf(t,i.context,!1),Uc(t,i.containerInfo)}function qh(t,i,a,l,f){return cs(),bc(f),i.flags|=256,pn(t,i,a,l),i.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,i,a){var l=i.pendingProps,f=Bt.current,m=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),bt(Bt,f&1),t===null)return Cc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,m?(l=i.mode,m=i.child,E={mode:"hidden",children:E},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=qo(E,l,0,null),t=Ir(t,l,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=eu(a),i.memoizedState=Jc,t):tu(i,E));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return j0(t,i,E,l,D,f,a);if(m){m=l.fallback,E=i.mode,f=t.child,D=f.sibling;var B={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=or(f,B),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?m=or(D,m):(m=Ir(m,E,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,E=t.child.memoizedState,E=E===null?eu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=t.childLanes&~a,i.memoizedState=Jc,l}return m=t.child,t=m.sibling,l=or(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function tu(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Io(t,i,a,l){return l!==null&&bc(l),us(i,t.child,null,a),t=tu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function j0(t,i,a,l,f,m,E){if(a)return i.flags&256?(i.flags&=-257,l=$c(Error(n(422))),Io(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,f=i.mode,l=qo({mode:"visible",children:l.children},f,0,null),m=Ir(m,f,E,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,E),i.child.memoizedState=eu(E),i.memoizedState=Jc,m);if((i.mode&1)===0)return Io(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,m=Error(n(419)),l=$c(m,l,void 0),Io(t,i,E,l)}if(D=(E&t.childLanes)!==0,yn||D){if(l=tn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ai(t,f),ni(l,t,f,-1))}return vu(),l=$c(Error(n(421))),Io(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=iv.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,In=Ki(f.nextSibling),Dn=i,kt=!0,Qn=null,t!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ti,Vn[Gn++]=Tr,wi=t.id,Ti=t.overflow,Tr=i),i=tu(i,l.children),i.flags|=4096,i)}function $h(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Lc(t.return,i,a)}function nu(t,i,a,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function Kh(t,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(pn(t,i,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,a,i);else if(t.tag===19)$h(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),nu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Co(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}nu(i,!0,a,null,m);break;case"together":nu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=or(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=or(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function W0(t,i,a){switch(i.tag){case 3:Xh(i),cs();break;case 5:uh(i);break;case 1:xn(i.type)&&vo(i);break;case 4:Uc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;bt(Eo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Yh(t,i,a):(bt(Bt,Bt.current&1),t=bi(t,i,a),t!==null?t.sibling:null);bt(Bt,Bt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Kh(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),bt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Gh(t,i,a)}return bi(t,i,a)}var Zh,iu,Qh,Jh;Zh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},iu=function(){},Qh=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,br(di.current);var m=null;switch(a){case"input":f=vt(t,f),l=vt(t,l),m=[];break;case"select":f=ae({},f,{value:void 0}),l=ae({},l,{value:void 0}),m=[];break;case"textarea":f=re(t,f),l=re(t,l),m=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}st(a,l);var E;a=null;for(te in f)if(!l.hasOwnProperty(te)&&f.hasOwnProperty(te)&&f[te]!=null)if(te==="style"){var D=f[te];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?m||(m=[]):(m=m||[]).push(te,null));for(te in l){var B=l[te];if(D=f?.[te],l.hasOwnProperty(te)&&B!==D&&(B!=null||D!=null))if(te==="style")if(D){for(E in D)!D.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&D[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(m||(m=[]),m.push(te,a)),a=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(m=m||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Nt("scroll",t),m||D===B||(m=[])):(m=m||[]).push(te,B))}a&&(m=m||[]).push("style",a);var te=m;(i.updateQueue=te)&&(i.flags|=4)}},Jh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Sa(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function X0(t,i,a){var l=i.pendingProps;switch(Tc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return xn(i.type)&&go(),un(i),null;case 3:return l=i.stateNode,hs(),Lt(_n),Lt(ln),Oc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(pu(Qn),Qn=null))),iu(t,i),un(i),null;case 5:Fc(i);var f=br(ga.current);if(a=i.type,t!==null&&i.stateNode!=null)Qh(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=br(di.current),So(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[ui]=i,l[da]=m,t=(i.mode&1)!==0,a){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(f=0;f<la.length;f++)Nt(la[f],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":Mt(l,m),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Nt("invalid",l);break;case"textarea":pe(l,m),Nt("invalid",l)}st(a,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var D=m[E];E==="children"?typeof D=="string"?l.textContent!==D&&(m.suppressHydrationWarning!==!0&&ho(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&ho(l.textContent,D,t),f=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Nt("scroll",l)}switch(a){case"input":lt(l),et(l,m,!0);break;case"textarea":lt(l),me(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=po)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[ui]=i,t[da]=l,Zh(t,i,!1,!1),i.stateNode=t;e:{switch(E=At(a,l),a){case"dialog":Nt("cancel",t),Nt("close",t),f=l;break;case"iframe":case"object":case"embed":Nt("load",t),f=l;break;case"video":case"audio":for(f=0;f<la.length;f++)Nt(la[f],t);f=l;break;case"source":Nt("error",t),f=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),f=l;break;case"details":Nt("toggle",t),f=l;break;case"input":Mt(t,l),f=vt(t,l),Nt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=ae({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":pe(t,l),f=re(t,l),Nt("invalid",t);break;default:f=l}st(a,f),D=f;for(m in D)if(D.hasOwnProperty(m)){var B=D[m];m==="style"?Oe(t,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&rt(t,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Me(t,B):typeof B=="number"&&Me(t,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Nt("scroll",t):B!=null&&R(t,m,B,E))}switch(a){case"input":lt(t),et(t,l,!1);break;case"textarea":lt(t),me(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?w(t,!!l.multiple,m,!1):l.defaultValue!=null&&w(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)Jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=br(ga.current),br(di.current),So(i)){if(l=i.stateNode,a=i.memoizedProps,l[ui]=i,(m=l.nodeValue!==a)&&(t=Dn,t!==null))switch(t.tag){case 3:ho(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(l.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[ui]=i,i.stateNode=l}return un(i),null;case 13:if(Lt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)nh(),cs(),i.flags|=98560,m=!1;else if(m=So(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[ui]=i}else cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),m=!1}else Qn!==null&&(pu(Qn),Qn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Yt===0&&(Yt=3):vu())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return hs(),iu(t,i),t===null&&ca(i.stateNode.containerInfo),un(i),null;case 10:return Nc(i.type._context),un(i),null;case 17:return xn(i.type)&&go(),un(i),null;case 19:if(Lt(Bt),m=i.memoizedState,m===null)return un(i),null;if(l=(i.flags&128)!==0,E=m.rendering,E===null)if(l)Sa(m,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Co(t),E!==null){for(i.flags|=128,Sa(m,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,t=l,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,t=E.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return bt(Bt,Bt.current&1|2),i.child}t=t.sibling}m.tail!==null&&be()>vs&&(i.flags|=128,l=!0,Sa(m,!1),i.lanes=4194304)}else{if(!l)if(t=Co(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!kt)return un(i),null}else 2*be()-m.renderingStartTime>vs&&a!==1073741824&&(i.flags|=128,l=!0,Sa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=be(),i.sibling=null,a=Bt.current,bt(Bt,l?a&1|2:a&1),i):(un(i),null);case 22:case 23:return gu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function q0(t,i){switch(Tc(i),i.tag){case 1:return xn(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Lt(_n),Lt(ln),Oc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Fc(i),null;case 13:if(Lt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));cs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Bt),null;case 4:return hs(),null;case 10:return Nc(i.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var Fo=!1,dn=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ms(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Vt(t,i,l)}else a.current=null}function ru(t,i,a){try{a()}catch(l){Vt(t,i,l)}}var ep=!1;function $0(t,i){if(gc=to,t=Lf(),lc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,D=-1,B=-1,te=0,_e=0,ye=t,ge=null;t:for(;;){for(var Fe;ye!==a||f!==0&&ye.nodeType!==3||(D=E+f),ye!==m||l!==0&&ye.nodeType!==3||(B=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)ge=ye,ye=Fe;for(;;){if(ye===t)break t;if(ge===a&&++te===f&&(D=E),ge===m&&++_e===l&&(B=E),(Fe=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Fe}a=D===-1||B===-1?null:{start:D,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:t,selectionRange:a},to=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Gt=ze.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Jn(i.type,Ve),Gt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Vt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return ze=ep,ep=!1,ze}function Ma(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&ru(i,a,m)}f=f.next}while(f!==l)}}function ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function su(t){var i=t.ref;if(i!==null){var a=t.stateNode;t.tag,t=a,typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[da],delete i[Sc],delete i[N0],delete i[L0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function au(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(au(t,i,a),t=t.sibling;t!==null;)au(t,i,a),t=t.sibling}function ou(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ou(t,i,a),t=t.sibling;t!==null;)ou(t,i,a),t=t.sibling}var sn=null,ei=!1;function nr(t,i,a){for(a=a.child;a!==null;)rp(t,i,a),a=a.sibling}function rp(t,i,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 5:dn||ms(a,i);case 6:var l=sn,f=ei;sn=null,nr(t,i,a),sn=l,ei=f,sn!==null&&(ei?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ei?(t=sn,a=a.stateNode,t.nodeType===8?yc(t.parentNode,a):t.nodeType===1&&yc(t,a),ea(t)):yc(sn,a.stateNode));break;case 4:l=sn,f=ei,sn=a.stateNode.containerInfo,ei=!0,nr(t,i,a),sn=l,ei=f;break;case 0:case 11:case 14:case 15:if(!dn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&ru(a,i,E),f=f.next}while(f!==l)}nr(t,i,a);break;case 1:if(!dn&&(ms(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Vt(a,i,D)}nr(t,i,a);break;case 21:nr(t,i,a);break;case 22:a.mode&1?(dn=(l=dn)||a.memoizedState!==null,nr(t,i,a),dn=l):nr(t,i,a);break;default:nr(t,i,a)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Y0),i.forEach(function(l){var f=rv.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ti(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var m=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,ei=!1;break e;case 3:sn=D.stateNode.containerInfo,ei=!0;break e;case 4:sn=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(sn===null)throw Error(n(160));rp(m,E,f),sn=null,ei=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(te){Vt(f,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),hi(t),l&4){try{Ma(3,t,t.return),ko(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{Ma(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ti(i,t),hi(t),l&512&&a!==null&&ms(a,a.return);break;case 5:if(ti(i,t),hi(t),l&512&&a!==null&&ms(a,a.return),t.flags&32){var f=t.stateNode;try{Me(f,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,E=a!==null?a.memoizedProps:m,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&Xe(f,m),At(D,E);var te=At(D,m);for(E=0;E<B.length;E+=2){var _e=B[E],ye=B[E+1];_e==="style"?Oe(f,ye):_e==="dangerouslySetInnerHTML"?rt(f,ye):_e==="children"?Me(f,ye):R(f,_e,ye,te)}switch(D){case"input":Ut(f,m);break;case"textarea":ve(f,m);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?w(f,!!m.multiple,Fe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?w(f,!!m.multiple,m.defaultValue,!0):w(f,!!m.multiple,m.multiple?[]:"",!1))}f[da]=m}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ti(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ti(i,t),hi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ti(i,t),hi(t);break;case 13:ti(i,t),hi(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(uu=be())),l&4&&sp(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(dn=(te=dn)||_e,ti(i,t),dn=te):ti(i,t),hi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(ye=Be=_e;Be!==null;){switch(ge=Be,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ma(4,ge,ge.return);break;case 1:ms(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Vt(l,a,Ve)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){cp(ye);continue}}Fe!==null?(Fe.return=ge,Be=Fe):cp(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{f=ye.stateNode,te?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=ye.stateNode,B=ye.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Je("display",E))}catch(Ve){Vt(t,t.return,Ve)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,t),hi(t),l&4&&sp(t);break;case 21:break;default:ti(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(np(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Me(f,""),l.flags&=-33);var m=ip(t);ou(t,m,f);break;case 3:case 4:var E=l.stateNode.containerInfo,D=ip(t);au(t,D,E);break;default:throw Error(n(161))}}catch(B){Vt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function K0(t,i,a){Be=t,op(t)}function op(t,i,a){for(var l=(t.mode&1)!==0;Be!==null;){var f=Be,m=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Fo;if(!E){var D=f.alternate,B=D!==null&&D.memoizedState!==null||dn;D=Fo;var te=dn;if(Fo=E,(dn=B)&&!te)for(Be=f;Be!==null;)E=Be,B=E.child,E.tag===22&&E.memoizedState!==null?up(f):B!==null?(B.return=E,Be=B):up(f);for(;m!==null;)Be=m,op(m),m=m.sibling;Be=f,Fo=D,dn=te}lp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Be=m):lp(t)}}function lp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||ko(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Jn(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&ch(i,m,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ch(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&su(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function cp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function up(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ko(4,i)}catch(B){Vt(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){Vt(i,f,B)}}var m=i.return;try{su(i)}catch(B){Vt(i,m,B)}break;case 5:var E=i.return;try{su(i)}catch(B){Vt(i,E,B)}}}catch(B){Vt(i,i.return,B)}if(i===t){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var Z0=Math.ceil,Oo=L.ReactCurrentDispatcher,lu=L.ReactCurrentOwner,Xn=L.ReactCurrentBatchConfig,xt=0,tn=null,Wt=null,an=0,Un=0,gs=Zi(0),Yt=0,Ea=null,Pr=0,Bo=0,cu=0,wa=null,Sn=null,uu=0,vs=1/0,Ri=null,zo=!1,du=null,ir=null,Ho=!1,rr=null,Vo=0,Ta=0,fu=null,Go=-1,jo=0;function mn(){return(xt&6)!==0?be():Go!==-1?Go:Go=be()}function sr(t){return(t.mode&1)===0?1:(xt&2)!==0&&an!==0?an&-an:I0.transition!==null?(jo===0&&(jo=Qa()),jo):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:ff(t.type)),t)}function ni(t,i,a,l){if(50<Ta)throw Ta=0,fu=null,Error(n(185));$s(t,a,l),((xt&2)===0||t!==tn)&&(t===tn&&((xt&2)===0&&(Bo|=a),Yt===4&&ar(t,an)),Mn(t,l),a===1&&xt===0&&(i.mode&1)===0&&(vs=be()+500,_o&&Ji()))}function Mn(t,i){var a=t.callbackNode;vn(t,i);var l=Nn(t,t===tn?an:0);if(l===0)a!==null&&Te(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&Te(a),i===1)t.tag===0?D0(fp.bind(null,t)):Zf(fp.bind(null,t)),R0(function(){(xt&6)===0&&Ji()}),a=null;else{switch(rf(l)){case 1:a=Ze;break;case 4:a=je;break;case 16:a=mt;break;case 536870912:a=Pt;break;default:a=mt}a=yp(a,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function dp(t,i){if(Go=-1,jo=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(_s()&&t.callbackNode!==a)return null;var l=Nn(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Wo(t,l);else{i=l;var f=xt;xt|=2;var m=pp();(tn!==t||an!==i)&&(Ri=null,vs=be()+500,Lr(t,i));do try{ev();break}catch(D){hp(t,D)}while(!0);Pc(),Oo.current=m,xt=f,Wt!==null?i=0:(tn=null,an=0,i=Yt)}if(i!==0){if(i===2&&(f=Mr(t),f!==0&&(l=f,i=hu(t,f))),i===1)throw a=Ea,Lr(t,0),ar(t,l),Mn(t,be()),a;if(i===6)ar(t,l);else{if(f=t.current.alternate,(l&30)===0&&!Q0(f)&&(i=Wo(t,l),i===2&&(m=Mr(t),m!==0&&(l=m,i=hu(t,m))),i===1))throw a=Ea,Lr(t,0),ar(t,l),Mn(t,be()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,Sn,Ri);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=uu+500-be(),10<i)){if(Nn(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=xc(Dr.bind(null,t,Sn,Ri),i);break}Dr(t,Sn,Ri);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-wt(l);m=1<<E,E=i[E],E>f&&(f=E),l&=~m}if(l=f,l=be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Z0(l/1960))-l,10<l){t.timeoutHandle=xc(Dr.bind(null,t,Sn,Ri),l);break}Dr(t,Sn,Ri);break;case 5:Dr(t,Sn,Ri);break;default:throw Error(n(329))}}}return Mn(t,be()),t.callbackNode===a?dp.bind(null,t):null}function hu(t,i){var a=wa;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=Sn,Sn=a,i!==null&&pu(i)),t}function pu(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function Q0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!Zn(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~cu,i&=~Bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-wt(i),l=1<<a;t[a]=-1,i&=~l}}function fp(t){if((xt&6)!==0)throw Error(n(327));_s();var i=Nn(t,0);if((i&1)===0)return Mn(t,be()),null;var a=Wo(t,i);if(t.tag!==0&&a===2){var l=Mr(t);l!==0&&(i=l,a=hu(t,l))}if(a===1)throw a=Ea,Lr(t,0),ar(t,i),Mn(t,be()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,Sn,Ri),Mn(t,be()),null}function mu(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(vs=be()+500,_o&&Ji())}}function Nr(t){rr!==null&&rr.tag===0&&(xt&6)===0&&_s();var i=xt;xt|=1;var a=Xn.transition,l=Tt;try{if(Xn.transition=null,Tt=1,t)return t()}finally{Tt=l,Xn.transition=a,xt=i,(xt&6)===0&&Ji()}}function gu(){Un=gs.current,Lt(gs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,b0(a)),Wt!==null)for(a=Wt.return;a!==null;){var l=a;switch(Tc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:hs(),Lt(_n),Lt(ln),Oc();break;case 5:Fc(l);break;case 4:hs();break;case 13:Lt(Bt);break;case 19:Lt(Bt);break;case 10:Nc(l.type._context);break;case 22:case 23:gu()}a=a.return}if(tn=t,Wt=t=or(t.current,null),an=Un=i,Yt=0,Ea=null,cu=Bo=Pr=0,Sn=wa=null,Cr!==null){for(i=0;i<Cr.length;i++)if(a=Cr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,m=a.pending;if(m!==null){var E=m.next;m.next=f,l.next=E}a.pending=l}Cr=null}return t}function hp(t,i){do{var a=Wt;try{if(Pc(),bo.current=Lo,Ro){for(var l=zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ro=!1}if(Rr=0,en=qt=zt=null,va=!1,_a=0,lu.current=null,a===null||a.return===null){Yt=1,Ea=i,Wt=null;break}e:{var m=t,E=a.return,D=a,B=i;if(i=an,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,_e=D,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=Oh(E);if(Fe!==null){Fe.flags&=-257,Bh(Fe,E,D,m,i),Fe.mode&1&&kh(m,te,i),i=Fe,B=te;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else ze.add(B);break e}else{if((i&1)===0){kh(m,te,i),vu();break e}B=Error(n(426))}}else if(kt&&D.mode&1){var Gt=Oh(E);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Bh(Gt,E,D,m,i),bc(ps(B,D));break e}}m=B=ps(B,D),Yt!==4&&(Yt=2),wa===null?wa=[m]:wa.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=Uh(m,B,i);lh(m,Y);break e;case 1:D=B;var V=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ir===null||!ir.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=Fh(m,D,i);lh(m,Ee);break e}}m=m.return}while(m!==null)}gp(a)}catch(Ge){i=Ge,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function pp(){var t=Oo.current;return Oo.current=Lo,t===null?Lo:t}function vu(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),tn===null||(Pr&268435455)===0&&(Bo&268435455)===0||ar(tn,an)}function Wo(t,i){var a=xt;xt|=2;var l=pp();(tn!==t||an!==i)&&(Ri=null,Lr(t,i));do try{J0();break}catch(f){hp(t,f)}while(!0);if(Pc(),xt=a,Oo.current=l,Wt!==null)throw Error(n(261));return tn=null,an=0,Yt}function J0(){for(;Wt!==null;)mp(Wt)}function ev(){for(;Wt!==null&&!Ie();)mp(Wt)}function mp(t){var i=xp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?gp(t):Wt=i,lu.current=null}function gp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=X0(a,i,Un),a!==null){Wt=a;return}}else{if(a=q0(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Dr(t,i,a){var l=Tt,f=Xn.transition;try{Xn.transition=null,Tt=1,tv(t,i,a,l)}finally{Xn.transition=f,Tt=l}return null}function tv(t,i,a,l){do _s();while(rr!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ug(t,m),t===tn&&(Wt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ho||(Ho=!0,yp(mt,function(){return _s(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Xn.transition,Xn.transition=null;var E=Tt;Tt=1;var D=xt;xt|=4,lu.current=null,$0(t,a),ap(a,t),S0(vc),to=!!gc,vc=gc=null,t.current=a,K0(a),He(),xt=D,Tt=E,Xn.transition=m}else t.current=a;if(Ho&&(Ho=!1,rr=t,Vo=f),m=t.pendingLanes,m===0&&(ir=null),We(a.stateNode),Mn(t,be()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(zo)throw zo=!1,t=du,du=null,t;return(Vo&1)!==0&&t.tag!==0&&_s(),m=t.pendingLanes,(m&1)!==0?t===fu?Ta++:(Ta=0,fu=t):Ta=0,Ji(),null}function _s(){if(rr!==null){var t=rf(Vo),i=Xn.transition,a=Tt;try{if(Xn.transition=null,Tt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Vo=0,(xt&6)!==0)throw Error(n(331));var f=xt;for(xt|=4,Be=t.current;Be!==null;){var m=Be,E=m.child;if((Be.flags&16)!==0){var D=m.deletions;if(D!==null){for(var B=0;B<D.length;B++){var te=D[B];for(Be=te;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Ma(8,_e,m)}var ye=_e.child;if(ye!==null)ye.return=_e,Be=ye;else for(;Be!==null;){_e=Be;var ge=_e.sibling,Fe=_e.return;if(tp(_e),_e===te){Be=null;break}if(ge!==null){ge.return=Fe,Be=ge;break}Be=Fe}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Be=E;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ma(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Be=Y;break e}Be=m.return}}var V=t.current;for(Be=V;Be!==null;){E=Be;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,Be=Z;else e:for(E=V;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:ko(9,D)}}catch(Ge){Vt(D,D.return,Ge)}if(D===E){Be=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Be=Ee;break e}Be=D.return}}if(xt=f,Ji(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Qt,t)}catch{}l=!0}return l}finally{Tt=a,Xn.transition=i}}return!1}function vp(t,i,a){i=ps(a,i),i=Uh(t,i,1),t=tr(t,i,1),i=mn(),t!==null&&($s(t,1,i),Mn(t,i))}function Vt(t,i,a){if(t.tag===3)vp(t,t,a);else for(;i!==null;){if(i.tag===3){vp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=ps(a,t),t=Fh(i,t,1),i=tr(i,t,1),t=mn(),i!==null&&($s(i,1,t),Mn(i,t));break}}i=i.return}}function nv(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&a,tn===t&&(an&a)===a&&(Yt===4||Yt===3&&(an&130023424)===an&&500>be()-uu?Lr(t,0):cu|=a),Mn(t,i)}function _p(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gi,Gi<<=1,(Gi&130023424)===0&&(Gi=4194304)));var a=mn();t=Ai(t,i),t!==null&&($s(t,i,a),Mn(t,a))}function iv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),_p(t,a)}function rv(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),_p(t,a)}var xp;xp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||_n.current)yn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return yn=!1,W0(t,i,a);yn=(t.flags&131072)!==0}else yn=!1,kt&&(i.flags&1048576)!==0&&Qf(i,yo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Uo(t,i),t=i.pendingProps;var f=as(i,ln.current);fs(i,a),f=Hc(null,i,l,t,f,a);var m=Vc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(m=!0,vo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ic(i),f.updater=Do,i.stateNode=f,f._reactInternals=i,Yc(i,l,t,a),i=Qc(null,i,l,!0,m,a)):(i.tag=0,kt&&m&&wc(i),pn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Uo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=av(l),t=Jn(l,t),f){case 0:i=Zc(null,i,l,t,a);break e;case 1:i=Wh(null,i,l,t,a);break e;case 11:i=zh(null,i,l,t,a);break e;case 14:i=Hh(null,i,l,Jn(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Zc(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Wh(t,i,l,f,a);case 3:e:{if(Xh(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,f=m.element,oh(t,i),Ao(i,l,null,a);var E=i.memoizedState;if(l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ps(Error(n(423)),i),i=qh(t,i,l,a,f);break e}else if(l!==f){f=ps(Error(n(424)),i),i=qh(t,i,l,a,f);break e}else for(In=Ki(i.stateNode.containerInfo.firstChild),Dn=i,kt=!0,Qn=null,a=sh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),l===f){i=bi(t,i,a);break e}pn(t,i,l,a)}i=i.child}return i;case 5:return uh(i),t===null&&Cc(i),l=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,E=f.children,_c(l,f)?E=null:m!==null&&_c(l,m)&&(i.flags|=32),jh(t,i),pn(t,i,E,a),i.child;case 6:return t===null&&Cc(i),null;case 13:return Yh(t,i,a);case 4:return Uc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,a):pn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),zh(t,i,l,f,a);case 7:return pn(t,i,i.pendingProps,a),i.child;case 8:return pn(t,i,i.pendingProps.children,a),i.child;case 12:return pn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,m=i.memoizedProps,E=f.value,bt(Eo,l._currentValue),l._currentValue=E,m!==null)if(Zn(m.value,E)){if(m.children===f.children&&!_n.current){i=bi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){E=m.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(m.tag===1){B=Ci(-1,a&-a),B.tag=2;var te=m.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),te.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),Lc(m.return,a,i),D.lanes|=a;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Lc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}pn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,fs(i,a),f=jn(f),l=l(f),i.flags|=1,pn(t,i,l,a),i.child;case 14:return l=i.type,f=Jn(l,i.pendingProps),f=Jn(l.type,f),Hh(t,i,l,f,a);case 15:return Vh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Uo(t,i),i.tag=1,xn(l)?(t=!0,vo(i)):t=!1,fs(i,a),Dh(i,l,f),Yc(i,l,f,a),Qc(null,i,l,!0,t,a);case 19:return Kh(t,i,a);case 22:return Gh(t,i,a)}throw Error(n(156,i.tag))};function yp(t,i){return X(t,i)}function sv(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,l){return new sv(t,i,a,l)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function av(t){if(typeof t=="function")return _u(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ce)return 14}return 2}function or(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xo(t,i,a,l,f,m){var E=2;if(l=t,typeof t=="function")_u(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return Ir(a.children,f,m,i);case q:E=8,f|=8;break;case P:return t=qn(12,a,i,f|2),t.elementType=P,t.lanes=m,t;case K:return t=qn(13,a,i,f),t.elementType=K,t.lanes=m,t;case oe:return t=qn(19,a,i,f),t.elementType=oe,t.lanes=m,t;case le:return qo(a,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case z:E=9;break e;case ne:E=11;break e;case ce:E=14;break e;case se:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Ir(t,i,a,l){return t=qn(7,t,l,i),t.lanes=a,t}function qo(t,i,a,l){return t=qn(22,t,l,i),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function xu(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function yu(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function ov(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Su(t,i,a,l,f,m,E,D,B){return t=new ov(t,i,a,D,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=qn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(m),t}function lv(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Sp(t){if(!t)return Qi;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(xn(a))return $f(t,a,i)}return i}function Mp(t,i,a,l,f,m,E,D,B){return t=Su(a,l,!0,t,f,m,E,D,B),t.context=Sp(null),a=t.current,l=mn(),f=sr(a),m=Ci(l,f),m.callback=i??null,tr(a,m,f),t.current.lanes=f,$s(t,f,l),Mn(t,l),t}function Yo(t,i,a,l){var f=i.current,m=mn(),E=sr(f);return a=Sp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ci(m,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(f,i,E),t!==null&&(ni(t,f,E,m),To(t,f,E)),E}function $o(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Mu(t,i){Ep(t,i),(t=t.alternate)&&Ep(t,i)}function cv(){return null}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eu(t){this._internalRoot=t}Ko.prototype.render=Eu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Yo(t,i,null,null)},Ko.prototype.unmount=Eu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nr(function(){Yo(null,t,null,null)}),i[Mi]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=of();t={blockedOn:null,target:t,priority:i};for(var a=0;a<qi.length&&i!==0&&i<qi[a].priority;a++);qi.splice(a,0,t),a===0&&uf(t)}};function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function uv(t,i,a,l,f){if(f){if(typeof l=="function"){var m=l;l=function(){var te=$o(E);m.call(te)}}var E=Mp(i,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=E,t[Mi]=E.current,ca(t.nodeType===8?t.parentNode:t),Nr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var te=$o(B);D.call(te)}}var B=Su(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=B,t[Mi]=B.current,ca(t.nodeType===8?t.parentNode:t),Nr(function(){Yo(i,B,a,l)}),B}function Qo(t,i,a,l,f){var m=a._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var D=f;f=function(){var B=$o(E);D.call(B)}}Yo(i,E,t,f)}else E=uv(a,i,t,f,l);return $o(E)}sf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(Yl(i,a|1),Mn(i,be()),(xt&6)===0&&(vs=be()+500,Ji()))}break;case 13:Nr(function(){var l=Ai(t,1);if(l!==null){var f=mn();ni(l,t,1,f)}}),Mu(t,1)}},$l=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var a=mn();ni(i,t,134217728,a)}Mu(t,134217728)}},af=function(t){if(t.tag===13){var i=sr(t),a=Ai(t,i);if(a!==null){var l=mn();ni(a,t,i,l)}Mu(t,i)}},of=function(){return Tt},lf=function(t,i){var a=Tt;try{return Tt=t,i()}finally{Tt=a}},fe=function(t,i,a){switch(i){case"input":if(Ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=mo(l);if(!f)throw Error(n(90));O(l),Ut(l,f)}}}break;case"textarea":ve(t,a);break;case"select":i=a.value,i!=null&&w(t,!!a.multiple,i,!1)}},jt=mu,_t=Nr;var dv={usingClientEntryPoint:!1,Events:[fa,rs,mo,ht,Ot,mu]},Aa={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fv={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Qt=Jo.inject(fv),at=Jo}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv,En.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(i))throw Error(n(200));return lv(t,i,null,a)},En.createRoot=function(t,i){if(!wu(t))throw Error(n(299));var a=!1,l="",f=wp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Su(t,1,!1,null,null,a,!1,l,f),t[Mi]=i.current,ca(t.nodeType===8?t.parentNode:t),new Eu(i)},En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=J(i),t=t===null?null:t.stateNode,t},En.flushSync=function(t){return Nr(t)},En.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!0,a)},En.hydrateRoot=function(t,i,a){if(!wu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,m="",E=wp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Mp(i,null,t,1,a??null,f,!1,m,E),t[Mi]=i.current,ca(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Ko(i)},En.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!1,a)},En.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(Nr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},En.unstable_batchedUpdates=mu,En.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,a,!1,l)},En.version="18.3.1-next-f1338f8080-20240426",En}var Dp;function yv(){if(Dp)return Cu.exports;Dp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cu.exports=xv(),Cu.exports}var Ip;function Sv(){if(Ip)return el;Ip=1;var s=yv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var Mv=Sv();const Up=["∂","ợ","ɹ","г","đ","מ","ø","ƒ","ρ","σ","Ŧ","∩","Ψ","Ω","Δ"],Fp=["Retrieving Clues","Listening to Echoes","Watching Stars","Reading Forgotten Pages","Studying Floorplans","Trading Loot","Awakening Mobs","Opening Traveling Bag","Following the Path"],Ev="What is my purpose?",wv=[7,6,8,5,9,4,10,3,11,2,12,1,13,0,14,0,1,13,2,12];function Tv(){return Math.random()<.05?Ev:Fp[Math.floor(Math.random()*Fp.length)]}const tl=50;function Av({onComplete:s}){const[e,n]=ot.useState(0),[r,o]=ot.useState("Decoding Void's Prophecies..."),[c,d]=ot.useState(-1),[u,p]=ot.useState(!1),[g,_]=ot.useState(!1),[S]=ot.useState(()=>{const N=window.innerWidth,R=window.innerHeight;return Up.map(()=>({x:tl+Math.random()*(N-tl*2),y:tl+Math.random()*(R-tl*2)}))}),y=ot.useMemo(()=>Array.from({length:50},()=>({top:Math.random()*100,left:Math.random()*100,duration:1+Math.random()*2,delay:Math.random()*2,size:1+Math.random()*1.5})),[]),M=ot.useRef([]),A=ot.useRef([]),T=ot.useRef(null),x=ot.useRef(0),v=ot.useRef([]);return ot.useEffect(()=>{const N={x:window.innerWidth,y:window.innerHeight};A.current=M.current.map((G,F)=>G?(G.style.left=`${S[F].x}px`,G.style.top=`${S[F].y}px`,{el:G,x:S[F].x,y:S[F].y,vx:(Math.random()*2-1)*.38,vy:(Math.random()*2-1)*.38}):null);const R=16,L=()=>{A.current.forEach(G=>{G&&(G.x+=G.vx,G.y+=G.vy,G.x<R&&(G.x=R,G.vx=Math.abs(G.vx)),G.x>N.x-R&&(G.x=N.x-R,G.vx=-Math.abs(G.vx)),G.y<R&&(G.y=R,G.vy=Math.abs(G.vy)),G.y>N.y-R&&(G.y=N.y-R,G.vy=-Math.abs(G.vy)),G.el.style.left=`${G.x}px`,G.el.style.top=`${G.y}px`)}),T.current=requestAnimationFrame(L)};return T.current=requestAnimationFrame(L),()=>cancelAnimationFrame(T.current)},[S]),ot.useEffect(()=>{const N=()=>{v.current.forEach(clearTimeout),v.current=[]},R=()=>{N(),wv.forEach((F,k)=>{const q=setTimeout(()=>d(F),k*240),P=setTimeout(()=>d(C=>C===F?-1:C),k*240+380);v.current.push(q,P)})},L=setTimeout(R,1400),G=setInterval(R,7500);return()=>{N(),clearTimeout(L),clearInterval(G)}},[]),ot.useEffect(()=>{const N=setInterval(()=>o(Tv()),2200);return()=>clearInterval(N)},[]),ot.useEffect(()=>{let N;const R=()=>{if(x.current>=100){n(100),o("Void is Ready."),setTimeout(()=>_(!0),600),setTimeout(()=>{p(!0),s?.()},1300);return}x.current+=.18*(Math.random()*.7+.3),n(Math.min(x.current,100)),N=requestAnimationFrame(R)};return N=requestAnimationFrame(R),()=>cancelAnimationFrame(N)},[s]),u?null:h.jsxs("div",{className:`loading-screen${g?" fade-out":""}`,children:[h.jsx("div",{className:"ls-glyphs",children:Up.map((N,R)=>h.jsx("span",{ref:L=>M.current[R]=L,className:`ls-glyph${c===R?" flash":""}`,style:{left:`${S[R].x}px`,top:`${S[R].y}px`,"--glyph-delay":`${R*.3}s`},children:N},R))}),h.jsx("div",{className:"ls-bg-radial"}),h.jsx("div",{className:"ls-orb-wrap",children:h.jsxs("div",{className:"ls-orb",children:[h.jsx("div",{className:"ls-swirl"}),h.jsx("div",{className:"ls-swirl ls-swirl--2"}),y.map((N,R)=>h.jsx("div",{className:"ls-star",style:{top:`${N.top}%`,left:`${N.left}%`,width:`${N.size}px`,height:`${N.size}px`,animationDuration:`${N.duration}s`,animationDelay:`${N.delay}s`}},R)),h.jsx("div",{className:"ls-orb-ring ls-orb-ring--1"}),h.jsx("div",{className:"ls-orb-ring ls-orb-ring--2"}),h.jsx("div",{className:"ls-glow-symbol",children:"✦"})]})}),h.jsxs("div",{className:"ls-phrase",children:[h.jsx("span",{className:"ls-arrow",children:"➥"})," ",r]}),h.jsxs("div",{className:"ls-progress-wrap",children:[h.jsx("div",{className:"ls-progress-bar",style:{width:`${e.toFixed(1)}%`}}),h.jsx("div",{className:"ls-progress-spark",style:{left:`${e.toFixed(1)}%`}})]}),h.jsxs("div",{className:"ls-progress-label",children:[Math.floor(e),"%"]})]})}const kp=[{id:"home",label:"Home",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[h.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),h.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"chapters",label:"Chapters",icon:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:h.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{id:"qa",label:"Q&A",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),h.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})},{id:"credits",label:"Team",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[h.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),h.jsx("circle",{cx:"9",cy:"7",r:"4"}),h.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),h.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"settings",label:"Settings",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[h.jsx("circle",{cx:"12",cy:"12",r:"3"}),h.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}];function Cv({activeTab:s,onTabChange:e,inChapterView:n,onBackFromChapter:r}){const[o,c]=ot.useState(!1),[d,u]=ot.useState(!1);ot.useEffect(()=>{const g=()=>u(window.scrollY>20);return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]);const p=g=>{e(g),c(!1)};return h.jsxs("nav",{className:`main-nav${d?" scrolled":""}`,children:[h.jsxs("div",{className:"nav-inner",children:[h.jsxs("div",{className:"nav-logo",children:[h.jsx("span",{className:"nav-logo-symbol",children:"✦"}),h.jsxs("div",{className:"nav-logo-text-wrap",children:[h.jsx("span",{className:"nav-logo-text",children:"Enigma"}),h.jsx("span",{className:"nav-logo-sub",children:"Beyond the Void"})]})]}),n?h.jsxs("button",{className:"nav-back-btn",onClick:r,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:h.jsx("path",{d:"M19 12H5M12 5l-7 7 7 7"})}),"Back to Home"]}):h.jsx("div",{className:"nav-tabs",children:kp.map(g=>h.jsxs("button",{className:`nav-tab${s===g.id?" active":""}`,onClick:()=>p(g.id),children:[g.icon,g.label,s===g.id&&h.jsx("span",{className:"nav-tab-indicator"})]},g.id))}),!n&&h.jsxs("button",{className:`nav-hamburger${o?" open":""}`,onClick:()=>c(g=>!g),"aria-label":"Toggle menu",children:[h.jsx("span",{}),h.jsx("span",{}),h.jsx("span",{})]})]}),!n&&h.jsx("div",{className:`nav-mobile-menu${o?" open":""}`,children:kp.map(g=>h.jsxs("button",{className:`nav-mobile-tab${s===g.id?" active":""}`,onClick:()=>p(g.id),children:[g.icon,g.label]},g.id))})]})}function bv(){const s=ot.useRef(null);return ot.useEffect(()=>{const e=s.current;if(!e)return;const n=e.getContext("2d"),r=()=>{e.width=window.innerWidth,e.height=window.innerHeight};r(),window.addEventListener("resize",r);const c=Array.from({length:70},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:Math.random()*1.4+.3,vx:(Math.random()-.5)*.22,vy:-(Math.random()*.35+.08),alpha:Math.random()*.5+.1,life:Math.random()}));let d;const u=()=>{n.clearRect(0,0,e.width,e.height),c.forEach(p=>{p.x+=p.vx,p.y+=p.vy,p.life+=.003,(p.y<-10||p.life>1)&&(p.x=Math.random()*e.width,p.y=e.height+10,p.life=0);const g=p.alpha*Math.sin(p.life*Math.PI);n.beginPath(),n.arc(p.x,p.y,p.r,0,Math.PI*2),n.fillStyle=`rgba(140, 60, 255, ${g})`,n.fill()}),d=requestAnimationFrame(u)};return u(),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",r)}},[]),h.jsx("canvas",{ref:s,id:"particleCanvas",style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})}function Rv({onExplore:s}){return h.jsxs("div",{className:"hero-section",children:[h.jsx("div",{className:"hero-glow-1"}),h.jsx("div",{className:"hero-glow-2"}),h.jsxs("div",{className:"hero-content",children:[h.jsx("div",{className:"hero-tag",children:"✦ Minecraft Adventure Map"}),h.jsxs("h1",{className:"hero-title",children:[h.jsx("span",{className:"hero-title-enigma",children:"Enigma"}),h.jsx("span",{className:"hero-title-divider",children:"|"}),h.jsx("span",{className:"hero-title-sub",children:"Beyond the Void"})]}),h.jsxs("p",{className:"hero-desc",children:["Six chapters. Countless secrets. One void that hungers for answers.",h.jsx("br",{}),"A story-driven Minecraft adventure for up to 20 players."]}),h.jsx("div",{className:"hero-actions",children:h.jsxs("button",{className:"hero-btn-primary",onClick:s,children:["Explore Chapters",h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"16",height:"16",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})}),h.jsxs("div",{className:"hero-stats",children:[h.jsxs("div",{className:"hero-stat",children:[h.jsx("span",{className:"hero-stat-value",children:"5"}),h.jsx("span",{className:"hero-stat-label",children:"Chapters"})]}),h.jsx("div",{className:"hero-stat-sep"}),h.jsxs("div",{className:"hero-stat",children:[h.jsx("span",{className:"hero-stat-value",children:"20"}),h.jsx("span",{className:"hero-stat-label",children:"Max Players"})]}),h.jsx("div",{className:"hero-stat-sep"}),h.jsxs("div",{className:"hero-stat",children:[h.jsx("span",{className:"hero-stat-value",children:"∞"}),h.jsx("span",{className:"hero-stat-label",children:"Secrets"})]})]})]}),h.jsxs("div",{className:"hero-scroll-hint",children:[h.jsx("div",{className:"scroll-line"}),h.jsx("span",{children:"Scroll"})]})]})}const Pv=[{id:"n1",type:"announcement",label:"Announcement",date:"2025-04-01",title:"It's Quiet… Almost a Little Too Quiet.",content:"Something stirs beyond the Void. Keep your eyes open, adventurer. The next fragment draws near.",pinned:!0},{id:"n2",type:"info",label:"About the Project",date:"2025-03-15",title:"What is Enigma: Beyond the Void?",content:`Enigma is a five-chaptered Minecraft adventure designed to deliver an immersive, story-driven experience while staying as close to vanilla Minecraft as possible — no mods, no datapacks, no custom textures. Just pure creativity powered by custom plugins.

Each chapter features a unique theme, custom structures, handcrafted dungeons, bosses, and deep lore. Up to 20 players can join forces to conquer each chapter's challenges.`}],Op={announcement:{label:"Announcement",color:"#cc88ff",border:"rgba(170,68,255,0.4)",glow:"rgba(170,68,255,0.12)",icon:"📣"},info:{label:"Information",color:"#88aaff",border:"rgba(80,120,255,0.4)",glow:"rgba(80,120,255,0.10)",icon:"📋"},update:{label:"Update",color:"#55ffaa",border:"rgba(50,200,120,0.4)",glow:"rgba(50,200,120,0.10)",icon:"⚡"},warning:{label:"Warning",color:"#ffcc55",border:"rgba(200,160,50,0.4)",glow:"rgba(200,160,50,0.10)",icon:"⚠️"}};function Nv(s){return new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function Lv(){return h.jsxs("section",{className:"page-section home-section",children:[h.jsx("h2",{className:"section-heading",children:"News & Announcements"}),h.jsx("div",{className:"news-grid",children:Pv.map((s,e)=>h.jsx(Dv,{item:s,index:e},s.id))})]})}function Dv({item:s,index:e}){const[n,r]=ot.useState(!1),o=Op[s.type]||Op.info,c=s.content.length>180,d=c&&!n?s.content.slice(0,180).trim()+"…":s.content;return h.jsxs("div",{className:`news-card${s.pinned?" pinned":""}`,style:{"--card-accent":o.color,"--card-border-accent":o.border,"--card-glow":o.glow,animationDelay:`${e*.1}s`},children:[h.jsx("div",{className:"news-card-bar",style:{background:`linear-gradient(90deg, transparent, ${o.color}88, transparent)`}}),s.pinned&&h.jsxs("div",{className:"news-pin-badge",children:[h.jsx("span",{children:"📌"})," Pinned"]}),h.jsxs("div",{className:"news-card-header",children:[h.jsx("span",{className:"news-type-icon",children:o.icon}),h.jsx("span",{className:"news-type-badge",style:{color:o.color,borderColor:o.border,background:o.glow},children:o.label}),s.date&&h.jsx("span",{className:"news-date",children:Nv(s.date)})]}),h.jsx("h3",{className:"news-title",children:s.title}),h.jsx("p",{className:"news-content",children:d}),c&&h.jsx("button",{className:"news-expand-btn",onClick:()=>r(u=>!u),style:{color:o.color},children:n?"▲ Show less":"▼ Read more"}),h.jsx("div",{className:"news-card-orb",style:{background:o.glow}})]})}const za=[{id:"chapter-1",number:"I",title:"Mischievous Mansion",subtitle:"Chapter I",theme:"fragment",status:"available",image:"assets/Mansion.png",color:"#1a6fff",accentColor:"#55aaff",description:"Uncover the secrets hidden within an illager fortress, tainted by something dark.",lore:`Step into the shadows of the Mischievous Mansion. Recently appeared without a trace, its eerie halls hold secrets waiting to be unraveled. Explore its many twisting passages, face challenging enemies, and uncover the mysteries that have been concealed for so long.

Within the mansion, every room reveals a new puzzle, every flickering candle a clue, every creaking floorboard a warning, and every shadow a potential threat. Work together with your team to overcome the unpredictable dangers lurking around every corner.

Rumor has it: the mobs have become more evolved over the years… adapting to those who dare enter.`,trailerId:null,screenshots:["assets/Mansion.png"],armor:{name:"Cursed Illager Set",helmet:{name:"Cursed Hood",rarity:"rare",emoji:"🪖",color:"#8B00FF",desc:"+4 Armor, Night Vision"},chestplate:{name:"Tainted Robes",rarity:"rare",emoji:"🥋",color:"#6600CC",desc:"+8 Armor, Spell Boost"},leggings:{name:"Shadowed Pants",rarity:"uncommon",emoji:"👖",color:"#4400AA",desc:"+6 Armor, Speed I"},boots:{name:"Void Treads",rarity:"uncommon",emoji:"👟",color:"#330088",desc:"+2 Armor, Feather Falling"}},mobs:[{id:"evoker-lord",name:"Evoker Lord",type:"Boss",health:200,damage:"10–18",difficulty:"legendary",description:"The corrupted master of the mansion. Commands vexes and summons dark magic from the beyond. Becomes enraged at 50% health.",abilities:["Vex Swarm","Dark Fangs","Phase Shift","Void Burst"],color:"#8B00FF",skinColors:{head:"#3a1a6e",body:"#2a0f52",legs:"#1e0a3d",arms:"#3a1a6e"}},{id:"shadow-illager",name:"Shadow Illager",type:"Elite",health:80,damage:"6–12",difficulty:"hard",description:"An illager corrupted by void energy. Becomes invisible when below 30% health, making it nearly impossible to track.",abilities:["Void Cloak","Shadow Strike"],color:"#4B0082",skinColors:{head:"#2d0d4a",body:"#1e0833",legs:"#150626",arms:"#2d0d4a"}},{id:"vex-swarm",name:"Vex Swarm",type:"Minion",health:20,damage:"4–8",difficulty:"medium",description:"Tiny void-touched spirits summoned by the Evoker Lord. They phase through walls and attack in groups.",abilities:["Phase Walk","Swarm Attack"],color:"#7B68EE",skinColors:{head:"#6a5acd",body:"#483d8b",legs:"#3d3477",arms:"#6a5acd"}}],loreEntries:[{id:"l1-1",title:"The Mansion's Origin",category:"History",preview:"Long before the players arrived, the mansion stood as a beacon of illager civilization...",content:`Long before the players arrived, the mansion stood as a beacon of illager civilization. Built over centuries by generations of evokers and their kin, the structure was more than a home—it was a temple to their forbidden arts.

The elders spoke of a pact made with something beyond the End. A deal for power, for knowledge, for dominion over all things natural and unnatural. For decades the price seemed worth it.

Then the silence came.`,locked:!1},{id:"l1-2",title:"The Corruption",category:"Secrets",preview:"Something ancient stirred beneath the mansion foundations...",content:`Something ancient stirred beneath the mansion's foundations. The players who first explored the catacombs below did not return to tell their tale.

Those who followed found only scorch marks and silence.

The corruption does not spread like fire or plague. It spreads like doubt—quietly, inward, until the host forgets what they were before.`,locked:!1},{id:"l1-3",title:"The Evoker's Journal",category:"Documents",preview:"Day 1: The ritual is almost complete. The Void responds...",content:`Day 1: The ritual is almost complete. The Void responds to our calls now. I can hear it between the words.

Day 7: Three more have vanished from the eastern wing. The others refuse to search for them. They are right not to.

Day 14: I understand now. We were never in control. We were the bait.`,locked:!1},{id:"l1-4",title:"The Lost Wing",category:"Maps",preview:"Blueprints of a section that should not exist...",content:"This entry is sealed by the Void itself. Complete the chapter to unlock.",locked:!0}]},{id:"chapter-2",number:"II",title:"Baneful Bastion",subtitle:"Chapter II",theme:"void",status:"available",image:"assets/Bastion.png",color:"#FF4500",accentColor:"#ff8c00",description:"Venture into the depths of the Nether's cindering realm.",lore:`The Nether was never meant to be conquered. Yet here you stand, at the threshold of something older than the world above.

The Bastion does not welcome the living. Its walls of blackstone remember every soul that has passed through, and every soul that never left.

Piglin war-horns echo through volcanic corridors. Gold is the only language spoken here—and you are running out of words.`,trailerId:null,screenshots:["assets/Bastion.png"],armor:{name:"Nether-Forged Warplate",helmet:{name:"Piglin War Helm",rarity:"epic",emoji:"⛏️",color:"#FF4500",desc:"+5 Armor, Fire Resistance"},chestplate:{name:"Bastion Breastplate",rarity:"epic",emoji:"🛡️",color:"#CC3300",desc:"+9 Armor, Knockback Resist"},leggings:{name:"Magma Cuisses",rarity:"rare",emoji:"🦵",color:"#AA2200",desc:"+7 Armor, Lava Walk"},boots:{name:"Ember Greaves",rarity:"rare",emoji:"🔥",color:"#881a00",desc:"+3 Armor, Fire Step"}},mobs:[{id:"bastion-warlord",name:"Bastion Warlord",type:"Boss",health:250,damage:"14–22",difficulty:"legendary",description:"An ancient Piglin commander empowered by void energy. Wears gold-inlaid Nether armor and commands absolute loyalty from nearby mobs.",abilities:["Gold Slam","Berserk Charge","Piglin Summon","Magma Eruption"],color:"#FF4500",skinColors:{head:"#c47a2e",body:"#8b5a1a",legs:"#6b4410",arms:"#c47a2e"}},{id:"corrupted-piglin",name:"Corrupted Piglin",type:"Elite",health:100,damage:"8–14",difficulty:"hard",description:"A Piglin touched by the void corruption. Its golden armor has turned dark, and its eyes glow with an empty light.",abilities:["Dark Charge","Void Slash"],color:"#8B4513",skinColors:{head:"#7d4a1e",body:"#5c3515",legs:"#3d2210",arms:"#7d4a1e"}}],loreEntries:[{id:"l2-1",title:"Ancient Piglin Texts",category:"History",preview:"Carved into the blackstone walls, symbols that predate modern language...",content:`Carved into the blackstone walls, symbols that predate modern language tell of a time before the Nether was named.

The Piglins did not build this Bastion. They inherited it. From what, the carvings do not say—or perhaps cannot say.

What is clear: something lived here before. And something still does.`,locked:!1},{id:"l2-2",title:"The Gold Covenant",category:"Secrets",preview:"Gold was never about wealth. It was about recognition...",content:`Gold was never about wealth. It was about recognition.

To offer gold to a Piglin is to acknowledge their ancestry—to say: I know who you were before the corruption took you. For a moment, that recognition breaks through.

The Void hates gold for exactly this reason. It cannot corrupt what remembers itself.`,locked:!1}]},...Array.from({length:3},(s,e)=>({id:`chapter-${e+3}`,number:["III","IV","V"][e],title:"Unknown",subtitle:`Chapter ${["III","IV","V"][e]}`,theme:"echo",status:"coming-soon",image:"assets/commingsoon.png",color:"#333355",accentColor:"#555588",description:"Coming Soon",lore:"",trailerId:null,screenshots:[],armor:null,mobs:[],loreEntries:[]}))],ba=za.every(s=>s.status==="available"),Bp=za.filter(s=>s.status==="available").length;function Iv({onOpenChapter:s}){const[e,n]=ot.useState(null),r=o=>{o.status==="available"&&n(o)};return h.jsxs("section",{className:"page-section chapters-section",children:[h.jsx("h2",{className:"section-heading",children:"The Road Beyond"}),h.jsx("p",{className:"chapters-road-subtitle",children:"Five chapters stand between you and the Void. Walk the path."}),h.jsxs("div",{className:"chapters-progress-bar-wrap",children:[h.jsx("div",{className:"chapters-progress-bar-inner",style:{width:`${Bp/za.length*100}%`}}),h.jsxs("span",{className:"chapters-progress-label",children:[Bp," / ",za.length," Chapters Available"]})]}),h.jsxs("div",{className:"road-container",children:[h.jsxs("div",{className:"road-spine",children:[ba&&h.jsx("div",{className:"beacon-stream"}),[...Array(6)].map((o,c)=>h.jsx("div",{className:"spine-orb",style:{"--sp-offset":`${10+c*15}%`,"--sp-delay":`${c*.9}s`}},c))]}),za.map((o,c)=>h.jsx(Fv,{chapter:o,index:c,side:c%2===0?"left":"right",onOpen:()=>r(o)},o.id)),h.jsxs("div",{className:`void-ending${ba?" ignited":""}`,children:[h.jsx("div",{className:"void-ending-glow"}),h.jsx("div",{className:"void-ending-particles",children:[...Array(8)].map((o,c)=>h.jsx("div",{className:"ve-particle",style:{"--ve-angle":`${c*45}deg`,"--ve-delay":`${c*.3}s`}},c))}),h.jsx("div",{className:"void-ending-icon",children:ba?"🔥":"⬛"}),h.jsx("h3",{className:"void-ending-title",children:"The Void"}),h.jsx("p",{className:"void-ending-desc",children:ba?"The path is complete. The Void awakens.":"Complete all chapters to unveil what lies beyond."}),ba&&h.jsx("div",{className:"void-ignite-ring"})]})]}),e&&h.jsx(Uv,{chapter:e,onEnter:()=>{s(e),n(null)},onClose:()=>n(null)})]})}function Uv({chapter:s,onEnter:e,onClose:n}){const r=ot.useRef(null);return ot.useEffect(()=>{const o=c=>{c.key==="Escape"&&n()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n]),h.jsx("div",{className:"chapter-popup-overlay",ref:r,onClick:o=>{o.target===r.current&&n()},children:h.jsxs("div",{className:"chapter-popup",style:{"--ch-color":s.color,"--ch-accent":s.accentColor},children:[h.jsx("div",{className:"chapter-popup-border-glow"}),h.jsxs("div",{className:"chapter-popup-hero",children:[h.jsx("img",{src:s.image,alt:s.title}),h.jsx("div",{className:"chapter-popup-hero-overlay"}),h.jsxs("div",{className:"chapter-popup-hero-text",children:[h.jsx("span",{className:"chapter-popup-subtitle",children:s.subtitle}),h.jsx("h2",{className:"chapter-popup-title",children:s.title})]}),h.jsx("button",{className:"chapter-popup-close",onClick:n,"aria-label":"Close",children:"✕"}),h.jsx("div",{className:"chapter-popup-roman",children:s.number}),h.jsx("div",{className:"chapter-popup-hero-scan"})]}),h.jsxs("div",{className:"chapter-popup-body",children:[h.jsx("p",{className:"chapter-popup-desc",children:s.description}),h.jsxs("div",{className:"chapter-popup-stats",children:[h.jsx(nl,{value:s.mobs?.length??0,label:"Enemies",icon:"⚔️"}),h.jsx(nl,{value:s.loreEntries?.length??0,label:"Lore Entries",icon:"📜"}),h.jsx(nl,{value:s.screenshots?.length??0,label:"Screenshots",icon:"🖼️"}),h.jsx(nl,{value:s.armor?4:0,label:"Armor Pieces",icon:"🛡️"})]}),s.lore&&h.jsxs("div",{className:"chapter-popup-lore",children:[h.jsx("div",{className:"chapter-popup-lore-bar"}),h.jsxs("p",{className:"chapter-popup-lore-text",children:[s.lore.slice(0,140).trim(),"…"]})]}),h.jsxs("button",{className:"chapter-popup-enter-btn",onClick:e,children:[h.jsx("span",{className:"cta-text",children:"Enter Chapter"}),h.jsx("span",{className:"cta-arrow",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"16",height:"16",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})})]})]})]})})}function nl({value:s,label:e,icon:n}){return h.jsxs("div",{className:"chapter-popup-stat",children:[h.jsx("span",{className:"stat-icon",children:n}),h.jsx("span",{className:"stat-value",children:s}),h.jsx("span",{className:"stat-label",children:e})]})}function Fv({chapter:s,index:e,side:n,onOpen:r}){const o=s.status==="coming-soon",c=s.mobs?.length??0,d=s.loreEntries?.length??0;return h.jsxs("div",{className:`road-stop road-stop--${n}`,style:{animationDelay:`${e*.13}s`},children:[h.jsx("div",{className:"road-arm",style:{"--ch-color":s.color}}),h.jsxs("div",{className:`road-card${o?" locked":" unlocked"}`,style:{"--ch-color":s.color,"--ch-accent":s.accentColor},onClick:r,role:o?void 0:"button",tabIndex:o?-1:0,onKeyDown:u=>u.key==="Enter"&&r(),children:[h.jsx("div",{className:"road-card-glow"}),h.jsxs("div",{className:"road-card-image",children:[h.jsx("img",{src:s.image,alt:s.title,loading:"lazy"}),o&&h.jsx("div",{className:"road-card-veil",children:h.jsx("span",{className:"road-card-veil-icon",children:"🔒"})}),h.jsx("div",{className:"road-card-tint",style:{background:`linear-gradient(135deg, ${s.color}44, ${s.accentColor}22)`}}),!o&&h.jsxs("div",{className:"road-card-image-cta",children:[h.jsx("span",{children:"Enter Chapter"}),h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),h.jsxs("div",{className:"road-card-body",children:[h.jsx("span",{className:"road-card-number",children:s.subtitle}),h.jsx("h3",{className:"road-card-title",children:s.title}),!o&&h.jsx("p",{className:"road-card-desc",children:s.description}),o?h.jsx("span",{className:"road-card-coming",children:"Coming Soon"}):h.jsxs("div",{className:"road-card-footer",children:[h.jsxs("div",{className:"road-card-meta",children:[h.jsxs("span",{className:"road-card-meta-pill",style:{"--pill-color":s.color},children:["⚔️ ",c," enemies"]}),h.jsxs("span",{className:"road-card-meta-pill",style:{"--pill-color":s.accentColor},children:["📜 ",d," lore"]})]}),h.jsxs("div",{className:"road-card-cta",style:{color:s.color},children:[h.jsx("span",{children:"Enter"}),h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"12",height:"12",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),!o&&h.jsx("div",{className:"road-card-bottom-bar",style:{background:`linear-gradient(90deg, ${s.color}, ${s.accentColor})`}}),h.jsx("div",{className:"road-card-badge",style:{borderColor:s.color,color:s.color},children:s.number})]}),h.jsxs("div",{className:`road-node${o?" locked":" active"}`,style:{"--ch-color":s.color},children:[!o&&h.jsx("div",{className:"road-node-pulse"}),!o&&h.jsx("div",{className:"road-node-pulse road-node-pulse--slow"})]})]})}function il(s,e,n,r=null,o={}){return{name:s,role:e,description:n,avatar:r,socials:o}}const kv=[il("Lucreator245","Creator & Visionary","The mind behind Enigma. Designed the overall concept, story arc, and gameplay vision for all six chapters.","assets/Teammembers/luca.gif",{discord:"Lucreator245"}),il("Jxson","Lead Developer","Backend plugin developer. Built the custom mechanics, boss systems, and dungeon logic that powers the experience.","assets/Teammembers/jason.png",{discord:"Jxson"}),il("Killer456378","Web Developer","Designed and built the website you are exploring right now. Turned the vision into a digital experience.","assets/Teammembers/Killer.png",{discord:"Killer456378"}),il("Xei","Builder & Storycrafter","Master builder and artist. Brings atmosphere, passion, and visual storytelling to every structure in the world.","assets/Teammembers/xei.png",{discord:"Xei"})],Ov={"Creator & Visionary":"#cc88ff","Lead Developer":"#88aaff","Web Developer":"#88ffcc","Builder & Storycrafter":"#ffcc55","Mechanic Designer & Storycrafter":"#ff8855",Builder:"#aaaaff"};function Bv(){return h.jsxs("section",{className:"page-section credits-section",children:[h.jsx("h2",{className:"section-heading",children:"The Team"}),h.jsx("p",{className:"credits-subtitle",children:"The minds and hands behind Enigma: Beyond the Void"}),h.jsx("div",{className:"credits-grid",children:kv.map((s,e)=>h.jsx(zv,{member:s,index:e},s.name))}),h.jsxs("div",{className:"credits-footnote",children:[h.jsx("span",{children:"✦"}),h.jsx("p",{children:"Enigma: Beyond the Void — A Minecraft adventure crafted with passion."}),h.jsx("span",{children:"✦"})]})]})}function zv({member:s,index:e}){const n=Ov[s.role]||"#aaaaff";return h.jsxs("div",{className:"credit-card",style:{"--role-color":n,animationDelay:`${e*.07}s`},children:[h.jsxs("div",{className:"credit-avatar-wrap",children:[s.avatar?h.jsx("img",{src:s.avatar,alt:s.name,className:"credit-avatar"}):h.jsx("div",{className:"credit-avatar-placeholder",children:s.name.charAt(0).toUpperCase()}),h.jsx("div",{className:"credit-avatar-ring"})]}),h.jsxs("div",{className:"credit-info",children:[h.jsx("h3",{className:"credit-name",children:s.name}),h.jsx("span",{className:"credit-role",style:{color:n},children:s.role}),h.jsx("p",{className:"credit-desc",children:s.description})]}),s.socials&&Object.keys(s.socials).length>0&&h.jsx("div",{className:"credit-socials",children:s.socials.discord&&h.jsxs("span",{className:"credit-social-tag",title:"Discord",children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"12",height:"12",children:h.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"})}),s.socials.discord]})})]})}function Hv({settings:s,onSettingsChange:e}){return h.jsxs("section",{className:"page-section settings-section",children:[h.jsx("h2",{className:"section-heading",children:"Settings"}),h.jsx("p",{className:"settings-subtitle",children:"Tune your journey through the Void"}),h.jsxs("div",{className:"settings-layout",children:[h.jsxs(rl,{icon:"✦",title:"Visual Effects",description:"Control how the world around you is rendered",children:[h.jsx(Ur,{label:"Particle Effects",description:"Drifting particles throughout the background",icon:"🌀",value:s.particles,onChange:n=>e({...s,particles:n})}),h.jsx(Ur,{label:"Glyph Animations",description:"Animated mystic symbols on the loading screen",icon:"🔮",value:s.glyphs,onChange:n=>e({...s,glyphs:n})}),h.jsx(Ur,{label:"Blur Effects",description:"Backdrop blur on navigation and card surfaces",icon:"💫",value:s.blur,onChange:n=>e({...s,blur:n})}),h.jsx(Ur,{label:"Reduced Motion",description:"Minimize all animations for accessibility",icon:"♿",value:s.reducedMotion,onChange:n=>e({...s,reducedMotion:n})})]}),h.jsxs(rl,{icon:"🎵",title:"Audio & Atmosphere",description:"Immersive soundscape and environmental settings",children:[h.jsx(Ur,{label:"Ambient Sounds",description:"Subtle void ambience while browsing",icon:"🔊",value:s.ambientSounds??!1,onChange:n=>e({...s,ambientSounds:n})}),h.jsx(Ur,{label:"UI Sound Effects",description:"Click and hover sounds on buttons",icon:"🎛️",value:s.uiSounds??!1,onChange:n=>e({...s,uiSounds:n})}),h.jsx(Ur,{label:"Dark Atmosphere Mode",description:"Deeper shadows and more contrast throughout",icon:"🌑",value:s.darkAtmosphere??!1,onChange:n=>e({...s,darkAtmosphere:n})})]}),h.jsx(rl,{icon:"🎨",title:"Color Theme",description:"Choose the color that resonates with your path",children:h.jsx(Gv,{value:s.theme,onChange:n=>e({...s,theme:n})})}),h.jsx(rl,{icon:"📜",title:"About",description:"Details about this site and project",children:h.jsxs("div",{className:"settings-info-rows",children:[h.jsx(Ra,{label:"Website Version",value:"2.0.0"}),h.jsx(Ra,{label:"Project",value:"Enigma: Beyond the Void"}),h.jsx(Ra,{label:"Chapters Available",value:"2 / 5",accent:!0}),h.jsx(Ra,{label:"Built With",value:"React + Vite"}),h.jsx(Ra,{label:"Renderer",value:"Three.js"})]})})]})]})}function rl({icon:s,title:e,description:n,children:r}){return h.jsxs("div",{className:"settings-panel",children:[h.jsxs("div",{className:"settings-panel-header",children:[h.jsx("span",{className:"settings-panel-icon",children:s}),h.jsxs("div",{children:[h.jsx("h3",{className:"settings-panel-title",children:e}),h.jsx("p",{className:"settings-panel-desc",children:n})]})]}),h.jsx("div",{className:"settings-panel-body",children:r})]})}function Ur({label:s,description:e,icon:n,value:r,onChange:o}){return h.jsxs("div",{className:`setting-row${r?" setting-row--on":""}`,onClick:()=>o(!r),children:[h.jsxs("div",{className:"setting-row-left",children:[h.jsx("span",{className:"setting-icon",children:n}),h.jsxs("div",{className:"setting-label-wrap",children:[h.jsx("span",{className:"setting-label",children:s}),e&&h.jsx("span",{className:"setting-desc",children:e})]})]}),h.jsx("div",{className:`toggle ${r?"on":"off"}`,children:h.jsx("div",{className:"toggle-thumb"})})]})}const Vv=[{value:"void",label:"Void",subtitle:"Deep purple cosmos",gradient:"linear-gradient(135deg, #3d006b 0%, #6f00ff 45%, #ff00dd 100%)",dot:"#cc77ff"},{value:"nether",label:"Nether Flame",subtitle:"Molten embers and ash",gradient:"linear-gradient(135deg, #7a0000 0%, #FF4500 55%, #FF6B35 100%)",dot:"#FF8C55"},{value:"abyss",label:"Deep Abyss",subtitle:"Cold depths of the ocean",gradient:"linear-gradient(135deg, #000c6b 0%, #001aff 50%, #00ccff 100%)",dot:"#4488ff"},{value:"emerald",label:"Emerald",subtitle:"Ancient forest magic",gradient:"linear-gradient(135deg, #003d1f 0%, #00c853 55%, #1de9b6 100%)",dot:"#69f0ae"},{value:"blood",label:"Blood Moon",subtitle:"Crimson darkness rises",gradient:"linear-gradient(135deg, #3b0000 0%, #c62828 50%, #ff4040 100%)",dot:"#ff6b6b"},{value:"frost",label:"Arctic Frost",subtitle:"Icy tundra winds",gradient:"linear-gradient(135deg, #002f3a 0%, #00bcd4 55%, #e0f7fa 100%)",dot:"#80deea"},{value:"solar",label:"Solar Flare",subtitle:"Blazing golden light",gradient:"linear-gradient(135deg, #3d1c00 0%, #ff8f00 55%, #ffca28 100%)",dot:"#ffb300"},{value:"obsidian",label:"Obsidian",subtitle:"Dark volcanic silence",gradient:"linear-gradient(135deg, #1a1a2e 0%, #546e7a 55%, #b0bec5 100%)",dot:"#90a4ae"}];function Gv({value:s,onChange:e}){return h.jsx("div",{className:"theme-grid",children:Vv.map(n=>h.jsxs("button",{className:`theme-card${s===n.value?" active":""}`,onClick:()=>e(n.value),children:[h.jsxs("div",{className:"theme-card-swatch",style:{background:n.gradient},children:[h.jsx("div",{className:"theme-card-glow",style:{background:n.dot}}),s===n.value&&h.jsx("div",{className:"theme-card-check",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",width:"11",height:"11",children:h.jsx("polyline",{points:"20 6 9 17 4 12"})})})]}),h.jsxs("div",{className:"theme-card-info",children:[h.jsx("span",{className:"theme-card-name",children:n.label}),h.jsx("span",{className:"theme-card-sub",children:n.subtitle})]})]},n.value))})}function Ra({label:s,value:e,accent:n}){return h.jsxs("div",{className:"info-row",children:[h.jsx("span",{className:"info-row-label",children:s}),h.jsx("span",{className:`info-row-value${n?" accent":""}`,children:e})]})}const ka=[{id:"q1",category:"General",question:"What is Enigma: Beyond the Void?",answer:"Enigma: Beyond the Void is a story-driven Minecraft adventure map consisting of five chapters, each with a unique theme, custom structures, handcrafted dungeons, and original bosses. No mods or datapacks required — only custom plugins power the experience."},{id:"q2",category:"General",question:"How many players can play at once?",answer:"Up to 20 players can join a session. The chapters are designed to be challenging enough for larger groups while still being completable by smaller teams."},{id:"q3",category:"Technical",question:"Do I need any mods or texture packs?",answer:"No mods are required. Enigma runs entirely on a custom plugin server with vanilla Minecraft. No texture packs, datapacks, or mod loaders needed."},{id:"q4",category:"Technical",question:"What Minecraft version does Enigma use?",answer:"Enigma runs on a specific server version maintained by the team. Check the Discord for the latest version information and server IP when play sessions are open."},{id:"q5",category:"Gameplay",question:"How difficult are the chapters?",answer:"Each chapter scales in difficulty. Chapter I (Mischievous Mansion) is designed as an introduction, while Chapter II (Baneful Bastion) ramps up significantly. Coming chapters will push teams even further."},{id:"q6",category:"Gameplay",question:"Can I explore chapters in any order?",answer:"Chapters are designed to be played in order, as the story and difficulty progression builds upon each previous chapter. The narrative connections between chapters are a core part of the experience."},{id:"q7",category:"Gameplay",question:"What happens if my team dies?",answer:"The chapter has built-in respawn mechanics. Dying is not the end — but repeated failure against bosses may reset certain encounter phases. Coordinate with your team to manage resources and revives."},{id:"q8",category:"Story",question:"Is there an overarching story connecting all chapters?",answer:"Yes. Each chapter reveals new fragments of a larger mystery centered around a force called The Void. Lore entries, boss dialogues, and hidden secrets all weave into a single continuous narrative."},{id:"q9",category:"Story",question:"Where can I find more lore?",answer:"Lore entries are unlocked by exploring each chapter and defeating its bosses. You can read them in the Lore Catalogue tab within each chapter's detail view on this website."},{id:"q10",category:"Community",question:"How do I join the server or get updates?",answer:"Join the official Discord server to get notified about play sessions, server access, chapter releases, and community events. The team posts all announcements there first."}],zp={General:{color:"#cc88ff",bg:"rgba(170,68,255,0.12)",border:"rgba(170,68,255,0.3)"},Technical:{color:"#55aaff",bg:"rgba(50,120,255,0.12)",border:"rgba(50,120,255,0.3)"},Gameplay:{color:"#55ffaa",bg:"rgba(50,200,100,0.1)",border:"rgba(50,200,100,0.3)"},Story:{color:"#ffcc55",bg:"rgba(200,160,50,0.1)",border:"rgba(200,160,50,0.3)"},Community:{color:"#ff88aa",bg:"rgba(255,80,120,0.1)",border:"rgba(255,80,120,0.3)"}},jv=["All",...Array.from(new Set(ka.map(s=>s.category)))];function Wv(){const[s,e]=ot.useState("All"),[n,r]=ot.useState(null),[o,c]=ot.useState(""),d=ot.useMemo(()=>{let u=s==="All"?ka:ka.filter(p=>p.category===s);if(o.trim()){const p=o.toLowerCase();u=u.filter(g=>g.question.toLowerCase().includes(p)||g.answer.toLowerCase().includes(p))}return u},[s,o]);return h.jsxs("section",{className:"page-section qa-section",children:[h.jsx("h2",{className:"section-heading",children:"Questions & Answers"}),h.jsx("p",{className:"qa-subtitle",children:"Common questions from the community — answered."}),h.jsxs("div",{className:"qa-search-wrap",children:[h.jsxs("svg",{className:"qa-search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"15",height:"15",children:[h.jsx("circle",{cx:"11",cy:"11",r:"8"}),h.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),h.jsx("input",{className:"qa-search",type:"text",placeholder:"Search questions...",value:o,onChange:u=>c(u.target.value)}),o&&h.jsx("button",{className:"qa-search-clear",onClick:()=>c(""),"aria-label":"Clear search",children:"✕"})]}),h.jsx("div",{className:"qa-filters",children:jv.map(u=>{const p=zp[u];return h.jsxs("button",{className:`qa-filter-btn${s===u?" active":""}`,onClick:()=>e(u),style:s===u&&p?{background:p.bg,borderColor:p.border,color:p.color,boxShadow:`0 0 12px ${p.bg}`}:{},children:[u==="All"?"✦ All":u,h.jsx("span",{className:"qa-filter-count",children:u==="All"?ka.length:ka.filter(g=>g.category===u).length})]},u)})}),h.jsx("div",{className:"qa-list",children:d.length===0?h.jsxs("div",{className:"qa-empty",children:[h.jsx("span",{children:"🔍"}),h.jsxs("p",{children:['No results for "',h.jsx("strong",{children:o}),'"']})]}):d.map((u,p)=>h.jsx(Xv,{item:u,isOpen:n===u.id,index:p,onToggle:()=>r(n===u.id?null:u.id),categoryColor:zp[u.category],searchQuery:o},u.id))}),h.jsxs("div",{className:"qa-discord-cta",children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18",children:h.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"})}),h.jsx("span",{children:"Have a question that isn't listed?"}),h.jsx("a",{href:"https://discord.gg/enigma",target:"_blank",rel:"noopener noreferrer",className:"qa-discord-link",children:"Ask on Discord →"})]})]})}function Hp(s,e){return e.trim()?s.split(new RegExp(`(${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi")).map((r,o)=>r.toLowerCase()===e.toLowerCase()?h.jsx("mark",{className:"qa-highlight",children:r},o):r):s}function Xv({item:s,isOpen:e,index:n,onToggle:r,categoryColor:o,searchQuery:c}){const d=o||{};return h.jsxs("div",{className:`qa-item${e?" open":""}`,style:{animationDelay:`${n*.04}s`,"--qa-color":d.color,"--qa-border":d.border},children:[h.jsxs("button",{className:"qa-question",onClick:r,children:[h.jsx("span",{className:"qa-category-pill",style:{color:d.color,background:d.bg,borderColor:d.border},children:s.category}),h.jsx("span",{className:"qa-question-text",children:Hp(s.question,c)}),h.jsx("svg",{className:"qa-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"15",height:"15",children:h.jsx("path",{d:"M6 9l6 6 6-6"})})]}),h.jsx("div",{className:"qa-answer-wrap",children:h.jsx("div",{className:"qa-answer",children:h.jsx("p",{children:Hp(s.answer,c)})})})]})}const Vd="168",qv=0,Vp=1,Yv=2,Qm=1,$v=2,Ui=3,_r=0,An=1,gi=2,gr=0,ks=1,Gp=2,jp=3,Wp=4,Kv=5,jr=100,Zv=101,Qv=102,Jv=103,e_=104,t_=200,n_=201,i_=202,r_=203,ad=204,od=205,s_=206,a_=207,o_=208,l_=209,c_=210,u_=211,d_=212,f_=213,h_=214,p_=0,m_=1,g_=2,Ul=3,v_=4,__=5,x_=6,y_=7,Gd=0,S_=1,M_=2,vr=0,E_=1,w_=2,T_=3,A_=4,C_=5,b_=6,R_=7,Jm=300,zs=301,Hs=302,ld=303,cd=304,Vl=306,ud=1e3,Xr=1001,dd=1002,$n=1003,P_=1004,sl=1005,ai=1006,Pu=1007,qr=1008,Oi=1009,eg=1010,tg=1011,Ga=1012,jd=1013,Yr=1014,Fi=1015,ja=1016,Wd=1017,Xd=1018,Vs=1020,ng=35902,ig=1021,rg=1022,oi=1023,sg=1024,ag=1025,Os=1026,Gs=1027,og=1028,qd=1029,lg=1030,Yd=1031,$d=1033,Rl=33776,Pl=33777,Nl=33778,Ll=33779,fd=35840,hd=35841,pd=35842,md=35843,gd=36196,vd=37492,_d=37496,xd=37808,yd=37809,Sd=37810,Md=37811,Ed=37812,wd=37813,Td=37814,Ad=37815,Cd=37816,bd=37817,Rd=37818,Pd=37819,Nd=37820,Ld=37821,Dl=36492,Dd=36494,Id=36495,cg=36283,Ud=36284,Fd=36285,kd=36286,N_=3200,L_=3201,ug=0,D_=1,mr="",pi="srgb",yr="srgb-linear",Kd="display-p3",Gl="display-p3-linear",Fl="linear",Dt="srgb",kl="rec709",Ol="p3",xs=7680,Xp=519,I_=512,U_=513,F_=514,dg=515,k_=516,O_=517,B_=518,z_=519,qp=35044,Yp="300 es",ki=2e3,Bl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=Math.PI/180,Od=180/Math.PI;function Wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Tn(s,e,n){return Math.max(e,Math.min(n,s))}function H_(s,e){return(s%e+e)%e}function Lu(s,e,n){return(1-n)*s+n*e}function Pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,o,c,d,u,p,g){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,u,p,g)}set(e,n,r,o,c,d,u,p,g){const _=this.elements;return _[0]=e,_[1]=o,_[2]=u,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=d,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],u=r[3],p=r[6],g=r[1],_=r[4],S=r[7],y=r[2],M=r[5],A=r[8],T=o[0],x=o[3],v=o[6],N=o[1],R=o[4],L=o[7],G=o[2],F=o[5],k=o[8];return c[0]=d*T+u*N+p*G,c[3]=d*x+u*R+p*F,c[6]=d*v+u*L+p*k,c[1]=g*T+_*N+S*G,c[4]=g*x+_*R+S*F,c[7]=g*v+_*L+S*k,c[2]=y*T+M*N+A*G,c[5]=y*x+M*R+A*F,c[8]=y*v+M*L+A*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],u=e[5],p=e[6],g=e[7],_=e[8];return n*d*_-n*u*g-r*c*_+r*u*p+o*c*g-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],u=e[5],p=e[6],g=e[7],_=e[8],S=_*d-u*g,y=u*p-_*c,M=g*c-d*p,A=n*S+r*y+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(o*g-_*r)*T,e[2]=(u*r-o*d)*T,e[3]=y*T,e[4]=(_*n-o*p)*T,e[5]=(o*c-u*n)*T,e[6]=M*T,e[7]=(r*p-g*n)*T,e[8]=(d*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,u){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*d+g*u)+d+e,-o*g,o*p,-o*(-g*d+p*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Du.makeScale(e,n)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,n){return this.premultiply(Du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new ut;function fg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function V_(){const s=zl("canvas");return s.style.display="block",s}const $p={};function Ha(s){s in $p||($p[s]=!0,console.warn(s))}function G_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Kp=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zp=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Na={[yr]:{transfer:Fl,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[pi]:{transfer:Dt,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Gl]:{transfer:Fl,primaries:Ol,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Zp),fromReference:s=>s.applyMatrix3(Kp)},[Kd]:{transfer:Dt,primaries:Ol,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zp),fromReference:s=>s.applyMatrix3(Kp).convertLinearToSRGB()}},j_=new Set([yr,Gl]),Et={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!j_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Na[e].toReference,o=Na[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Na[s].primaries},getTransfer:function(s){return s===mr?Fl:Na[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Na[e].luminanceCoefficients)}};function Bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Iu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class W_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=zl("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Bs(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Bs(n[r]/255)*255):n[r]=Bs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X_=0;class hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,u=o.length;d<u;d++)o[d].isDataTexture?c.push(Uu(o[d].image)):c.push(Uu(o[d]))}else c=Uu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Uu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?W_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q_=0;class Cn extends Ws{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=Xr,o=Xr,c=ai,d=qr,u=oi,p=Oi,g=Cn.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Wa(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=u,this.internalFormat=null,this.type=p,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Jm;Cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,r=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,g=p[0],_=p[4],S=p[8],y=p[1],M=p[5],A=p[9],T=p[2],x=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(S-T)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(S+T)<.1&&Math.abs(A+x)<.1&&Math.abs(g+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(g+1)/2,L=(M+1)/2,G=(v+1)/2,F=(_+y)/4,k=(S+T)/4,q=(A+x)/4;return R>L&&R>G?R<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(R),o=F/r,c=k/r):L>G?L<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),r=F/o,c=q/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=k/c,o=q/c),this.set(r,o,c,n),this}let N=Math.sqrt((x-A)*(x-A)+(S-T)*(S-T)+(y-_)*(y-_));return Math.abs(N)<.001&&(N=1),this.x=(x-A)/N,this.y=(S-T)/N,this.z=(y-_)/N,this.w=Math.acos((g+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y_ extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Cn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let u=0;u<d;u++)this.textures[u]=c.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Y_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class pg extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=$n,this.minFilter=$n,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,u){let p=r[o+0],g=r[o+1],_=r[o+2],S=r[o+3];const y=c[d+0],M=c[d+1],A=c[d+2],T=c[d+3];if(u===0){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(u===1){e[n+0]=y,e[n+1]=M,e[n+2]=A,e[n+3]=T;return}if(S!==T||p!==y||g!==M||_!==A){let x=1-u;const v=p*y+g*M+_*A+S*T,N=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const G=Math.sqrt(R),F=Math.atan2(G,v*N);x=Math.sin(x*F)/G,u=Math.sin(u*F)/G}const L=u*N;if(p=p*x+y*L,g=g*x+M*L,_=_*x+A*L,S=S*x+T*L,x===1-u){const G=1/Math.sqrt(p*p+g*g+_*_+S*S);p*=G,g*=G,_*=G,S*=G}}e[n]=p,e[n+1]=g,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,d){const u=r[o],p=r[o+1],g=r[o+2],_=r[o+3],S=c[d],y=c[d+1],M=c[d+2],A=c[d+3];return e[n]=u*A+_*S+p*M-g*y,e[n+1]=p*A+_*y+g*S-u*M,e[n+2]=g*A+_*M+u*y-p*S,e[n+3]=_*A-u*S-p*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,u=Math.cos,p=Math.sin,g=u(r/2),_=u(o/2),S=u(c/2),y=p(r/2),M=p(o/2),A=p(c/2);switch(d){case"XYZ":this._x=y*_*S+g*M*A,this._y=g*M*S-y*_*A,this._z=g*_*A+y*M*S,this._w=g*_*S-y*M*A;break;case"YXZ":this._x=y*_*S+g*M*A,this._y=g*M*S-y*_*A,this._z=g*_*A-y*M*S,this._w=g*_*S+y*M*A;break;case"ZXY":this._x=y*_*S-g*M*A,this._y=g*M*S+y*_*A,this._z=g*_*A+y*M*S,this._w=g*_*S-y*M*A;break;case"ZYX":this._x=y*_*S-g*M*A,this._y=g*M*S+y*_*A,this._z=g*_*A-y*M*S,this._w=g*_*S+y*M*A;break;case"YZX":this._x=y*_*S+g*M*A,this._y=g*M*S+y*_*A,this._z=g*_*A-y*M*S,this._w=g*_*S-y*M*A;break;case"XZY":this._x=y*_*S-g*M*A,this._y=g*M*S-y*_*A,this._z=g*_*A+y*M*S,this._w=g*_*S+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],u=n[5],p=n[9],g=n[2],_=n[6],S=n[10],y=r+u+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(c-g)*M,this._z=(d-o)*M}else if(r>u&&r>S){const M=2*Math.sqrt(1+r-u-S);this._w=(_-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+g)/M}else if(u>S){const M=2*Math.sqrt(1+u-r-S);this._w=(c-g)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+S-r-u);this._w=(d-o)/M,this._x=(c+g)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,u=n._x,p=n._y,g=n._z,_=n._w;return this._x=r*_+d*u+o*g-c*p,this._y=o*_+d*p+c*u-r*g,this._z=c*_+d*g+r*p-o*u,this._w=d*_-r*u-o*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let u=d*e._w+r*e._x+o*e._y+c*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const p=1-u*u;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,u),S=Math.sin((1-n)*_)/g,y=Math.sin(n*_)/g;return this._w=d*S+this._w*y,this._x=r*S+this._x*y,this._y=o*S+this._y*y,this._z=c*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,u=e.z,p=e.w,g=2*(d*o-u*r),_=2*(u*n-c*o),S=2*(c*r-d*n);return this.x=n+p*g+d*S-u*_,this.y=r+p*_+u*g-c*S,this.z=o+p*S+c*_-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,u=n.y,p=n.z;return this.x=o*p-c*u,this.y=c*d-r*p,this.z=r*u-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new $,Qp=new Xa;class qa{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=c.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(c,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),ol.subVectors(this.max,La),Ss.subVectors(e.a,La),Ms.subVectors(e.b,La),Es.subVectors(e.c,La),cr.subVectors(Ms,Ss),ur.subVectors(Es,Ms),Fr.subVectors(Ss,Es);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Fr.y,Fr.x,0];return!ku(n,Ss,Ms,Es,ol)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,Ss,Ms,Es,ol))?!1:(ll.crossVectors(cr,ur),n=[ll.x,ll.y,ll.z],ku(n,Ss,Ms,Es,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new $,new $,new $,new $,new $,new $,new $,new $],ii=new $,al=new qa,Ss=new $,Ms=new $,Es=new $,cr=new $,ur=new $,Fr=new $,La=new $,ol=new $,ll=new $,kr=new $;function ku(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){kr.fromArray(s,c);const u=o.x*Math.abs(kr.x)+o.y*Math.abs(kr.y)+o.z*Math.abs(kr.z),p=e.dot(kr),g=n.dot(kr),_=r.dot(kr);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>u)return!1}return!0}const K_=new qa,Da=new $,Ou=new $;class jl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):K_.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const n=Da.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Ou)),this.expandByPoint(Da.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new $,Bu=new $,cl=new $,dr=new $,zu=new $,ul=new $,Hu=new $;class mg{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Bu.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Bu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(cl),u=dr.dot(this.direction),p=-dr.dot(cl),g=dr.lengthSq(),_=Math.abs(1-d*d);let S,y,M,A;if(_>0)if(S=d*p-u,y=d*u-p,A=c*_,S>=0)if(y>=-A)if(y<=A){const T=1/_;S*=T,y*=T,M=S*(S+d*y+2*u)+y*(d*S+y+2*p)+g}else y=c,S=Math.max(0,-(d*y+u)),M=-S*S+y*(y+2*p)+g;else y=-c,S=Math.max(0,-(d*y+u)),M=-S*S+y*(y+2*p)+g;else y<=-A?(S=Math.max(0,-(-d*c+u)),y=S>0?-c:Math.min(Math.max(-c,-p),c),M=-S*S+y*(y+2*p)+g):y<=A?(S=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+g):(S=Math.max(0,-(d*c+u)),y=S>0?c:Math.min(Math.max(-c,-p),c),M=-S*S+y*(y+2*p)+g);else y=d>0?-c:c,S=Math.max(0,-(d*y+u)),M=-S*S+y*(y+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Bu).addScaledVector(cl,y),M}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),o=Ni.dot(Ni)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),u=r-d,p=r+d;return p<0?null:u<0?this.at(p,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,u,p;const g=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),_>=0?(c=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),S>=0?(u=(e.min.z-y.z)*S,p=(e.max.z-y.z)*S):(u=(e.max.z-y.z)*S,p=(e.min.z-y.z)*S),r>p||u>o)||((u>r||r!==r)&&(r=u),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,o,c){zu.subVectors(n,e),ul.subVectors(r,e),Hu.crossVectors(zu,ul);let d=this.direction.dot(Hu),u;if(d>0){if(o)return null;u=1}else if(d<0)u=-1,d=-d;else return null;dr.subVectors(this.origin,e);const p=u*this.direction.dot(ul.crossVectors(dr,ul));if(p<0)return null;const g=u*this.direction.dot(zu.cross(dr));if(g<0||p+g>d)return null;const _=-u*dr.dot(Hu);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,o,c,d,u,p,g,_,S,y,M,A,T,x){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,u,p,g,_,S,y,M,A,T,x)}set(e,n,r,o,c,d,u,p,g,_,S,y,M,A,T,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=d,v[9]=u,v[13]=p,v[2]=g,v[6]=_,v[10]=S,v[14]=y,v[3]=M,v[7]=A,v[11]=T,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),d=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),u=Math.sin(r),p=Math.cos(o),g=Math.sin(o),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const y=d*_,M=d*S,A=u*_,T=u*S;n[0]=p*_,n[4]=-p*S,n[8]=g,n[1]=M+A*g,n[5]=y-T*g,n[9]=-u*p,n[2]=T-y*g,n[6]=A+M*g,n[10]=d*p}else if(e.order==="YXZ"){const y=p*_,M=p*S,A=g*_,T=g*S;n[0]=y+T*u,n[4]=A*u-M,n[8]=d*g,n[1]=d*S,n[5]=d*_,n[9]=-u,n[2]=M*u-A,n[6]=T+y*u,n[10]=d*p}else if(e.order==="ZXY"){const y=p*_,M=p*S,A=g*_,T=g*S;n[0]=y-T*u,n[4]=-d*S,n[8]=A+M*u,n[1]=M+A*u,n[5]=d*_,n[9]=T-y*u,n[2]=-d*g,n[6]=u,n[10]=d*p}else if(e.order==="ZYX"){const y=d*_,M=d*S,A=u*_,T=u*S;n[0]=p*_,n[4]=A*g-M,n[8]=y*g+T,n[1]=p*S,n[5]=T*g+y,n[9]=M*g-A,n[2]=-g,n[6]=u*p,n[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*g,A=u*p,T=u*g;n[0]=p*_,n[4]=T-y*S,n[8]=A*S+M,n[1]=S,n[5]=d*_,n[9]=-u*_,n[2]=-g*_,n[6]=M*S+A,n[10]=y-T*S}else if(e.order==="XZY"){const y=d*p,M=d*g,A=u*p,T=u*g;n[0]=p*_,n[4]=-S,n[8]=g*_,n[1]=y*S+T,n[5]=d*_,n[9]=M*S-A,n[2]=A*S-M,n[6]=u*_,n[10]=T*S+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,Q_)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(r,Fn),fr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(r,Fn)),fr.normalize(),dl.crossVectors(Fn,fr),o[0]=fr.x,o[4]=dl.x,o[8]=Fn.x,o[1]=fr.y,o[5]=dl.y,o[9]=Fn.y,o[2]=fr.z,o[6]=dl.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],u=r[4],p=r[8],g=r[12],_=r[1],S=r[5],y=r[9],M=r[13],A=r[2],T=r[6],x=r[10],v=r[14],N=r[3],R=r[7],L=r[11],G=r[15],F=o[0],k=o[4],q=o[8],P=o[12],C=o[1],z=o[5],ne=o[9],K=o[13],oe=o[2],ce=o[6],se=o[10],le=o[14],H=o[3],de=o[7],ae=o[11],U=o[15];return c[0]=d*F+u*C+p*oe+g*H,c[4]=d*k+u*z+p*ce+g*de,c[8]=d*q+u*ne+p*se+g*ae,c[12]=d*P+u*K+p*le+g*U,c[1]=_*F+S*C+y*oe+M*H,c[5]=_*k+S*z+y*ce+M*de,c[9]=_*q+S*ne+y*se+M*ae,c[13]=_*P+S*K+y*le+M*U,c[2]=A*F+T*C+x*oe+v*H,c[6]=A*k+T*z+x*ce+v*de,c[10]=A*q+T*ne+x*se+v*ae,c[14]=A*P+T*K+x*le+v*U,c[3]=N*F+R*C+L*oe+G*H,c[7]=N*k+R*z+L*ce+G*de,c[11]=N*q+R*ne+L*se+G*ae,c[15]=N*P+R*K+L*le+G*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],u=e[5],p=e[9],g=e[13],_=e[2],S=e[6],y=e[10],M=e[14],A=e[3],T=e[7],x=e[11],v=e[15];return A*(+c*p*S-o*g*S-c*u*y+r*g*y+o*u*M-r*p*M)+T*(+n*p*M-n*g*y+c*d*y-o*d*M+o*g*_-c*p*_)+x*(+n*g*S-n*u*M-c*d*S+r*d*M+c*u*_-r*g*_)+v*(-o*u*_-n*p*S+n*u*y+o*d*S-r*d*y+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],u=e[5],p=e[6],g=e[7],_=e[8],S=e[9],y=e[10],M=e[11],A=e[12],T=e[13],x=e[14],v=e[15],N=S*x*g-T*y*g+T*p*M-u*x*M-S*p*v+u*y*v,R=A*y*g-_*x*g-A*p*M+d*x*M+_*p*v-d*y*v,L=_*T*g-A*S*g+A*u*M-d*T*M-_*u*v+d*S*v,G=A*S*p-_*T*p-A*u*y+d*T*y+_*u*x-d*S*x,F=n*N+r*R+o*L+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=N*k,e[1]=(T*y*c-S*x*c-T*o*M+r*x*M+S*o*v-r*y*v)*k,e[2]=(u*x*c-T*p*c+T*o*g-r*x*g-u*o*v+r*p*v)*k,e[3]=(S*p*c-u*y*c-S*o*g+r*y*g+u*o*M-r*p*M)*k,e[4]=R*k,e[5]=(_*x*c-A*y*c+A*o*M-n*x*M-_*o*v+n*y*v)*k,e[6]=(A*p*c-d*x*c-A*o*g+n*x*g+d*o*v-n*p*v)*k,e[7]=(d*y*c-_*p*c+_*o*g-n*y*g-d*o*M+n*p*M)*k,e[8]=L*k,e[9]=(A*S*c-_*T*c-A*r*M+n*T*M+_*r*v-n*S*v)*k,e[10]=(d*T*c-A*u*c+A*r*g-n*T*g-d*r*v+n*u*v)*k,e[11]=(_*u*c-d*S*c-_*r*g+n*S*g+d*r*M-n*u*M)*k,e[12]=G*k,e[13]=(_*T*o-A*S*o+A*r*y-n*T*y-_*r*x+n*S*x)*k,e[14]=(A*u*o-d*T*o-A*r*p+n*T*p+d*r*x-n*u*x)*k,e[15]=(d*S*o-_*u*o+_*r*p-n*S*p-d*r*y+n*u*y)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,u=e.y,p=e.z,g=c*d,_=c*u;return this.set(g*d+r,g*u-o*p,g*p+o*u,0,g*u+o*p,_*u+r,_*p-o*d,0,g*p-o*u,_*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,u=n._z,p=n._w,g=c+c,_=d+d,S=u+u,y=c*g,M=c*_,A=c*S,T=d*_,x=d*S,v=u*S,N=p*g,R=p*_,L=p*S,G=r.x,F=r.y,k=r.z;return o[0]=(1-(T+v))*G,o[1]=(M+L)*G,o[2]=(A-R)*G,o[3]=0,o[4]=(M-L)*F,o[5]=(1-(y+v))*F,o[6]=(x+N)*F,o[7]=0,o[8]=(A+R)*k,o[9]=(x-N)*k,o[10]=(1-(y+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=ws.set(o[0],o[1],o[2]).length();const d=ws.set(o[4],o[5],o[6]).length(),u=ws.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const g=1/c,_=1/d,S=1/u;return ri.elements[0]*=g,ri.elements[1]*=g,ri.elements[2]*=g,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=S,ri.elements[9]*=S,ri.elements[10]*=S,n.setFromRotationMatrix(ri),r.x=c,r.y=d,r.z=u,this}makePerspective(e,n,r,o,c,d,u=ki){const p=this.elements,g=2*c/(n-e),_=2*c/(r-o),S=(n+e)/(n-e),y=(r+o)/(r-o);let M,A;if(u===ki)M=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(u===Bl)M=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,d,u=ki){const p=this.elements,g=1/(n-e),_=1/(r-o),S=1/(d-c),y=(n+e)*g,M=(r+o)*_;let A,T;if(u===ki)A=(d+c)*S,T=-2*S;else if(u===Bl)A=c*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new $,ri=new Ht,Z_=new $(0,0,0),Q_=new $(1,1,1),fr=new $,dl=new $,Fn=new $,Jp=new Ht,em=new Xa;class _i{constructor(e=0,n=0,r=0,o=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],u=o[8],p=o[1],g=o[5],_=o[9],S=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Tn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(u,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const tm=new $,Ts=new Xa,Li=new Ht,fl=new $,Ia=new $,ex=new $,tx=new Xa,nm=new $(1,0,0),im=new $(0,1,0),rm=new $(0,0,1),sm={type:"added"},nx={type:"removed"},As={type:"childadded",child:null},Vu={type:"childremoved",child:null};class on extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new $,n=new _i,r=new Xa,o=new $(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ia,fl,this.up):Li.lookAt(fl,Ia,this.up),this.quaternion.setFromRotationMatrix(Li),o&&(Li.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(Li),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nx),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const S=p[g];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,g=this.material.length;p<g;p++)u.push(c(e.materials,this.material[p]));o.material=u}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];o.animations.push(c(e.animations,p))}}if(n){const u=d(e.geometries),p=d(e.materials),g=d(e.textures),_=d(e.images),S=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);u.length>0&&(r.geometries=u),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function d(u){const p=[];for(const g in u){const _=u[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}on.DEFAULT_UP=new $(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new $,Di=new $,Gu=new $,Ii=new $,Cs=new $,bs=new $,am=new $,ju=new $,Wu=new $,Xu=new $;class vi{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){si.subVectors(o,n),Di.subVectors(r,n),Gu.subVectors(e,n);const d=si.dot(si),u=si.dot(Di),p=si.dot(Gu),g=Di.dot(Di),_=Di.dot(Gu),S=d*g-u*u;if(S===0)return c.set(0,0,0),null;const y=1/S,M=(g*p-u*_)*y,A=(d*_-u*p)*y;return c.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,o,c,d,u,p){return this.getBarycoord(e,n,r,o,Ii)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ii.x),p.addScaledVector(d,Ii.y),p.addScaledVector(u,Ii.z),p)}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Di.subVectors(e,n),si.cross(Di).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return vi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,u;Cs.subVectors(o,r),bs.subVectors(c,r),ju.subVectors(e,r);const p=Cs.dot(ju),g=bs.dot(ju);if(p<=0&&g<=0)return n.copy(r);Wu.subVectors(e,o);const _=Cs.dot(Wu),S=bs.dot(Wu);if(_>=0&&S<=_)return n.copy(o);const y=p*S-_*g;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(Cs,d);Xu.subVectors(e,c);const M=Cs.dot(Xu),A=bs.dot(Xu);if(A>=0&&M<=A)return n.copy(c);const T=M*g-p*A;if(T<=0&&g>=0&&A<=0)return u=g/(g-A),n.copy(r).addScaledVector(bs,u);const x=_*A-M*S;if(x<=0&&S-_>=0&&M-A>=0)return am.subVectors(c,o),u=(S-_)/(S-_+(M-A)),n.copy(o).addScaledVector(am,u);const v=1/(x+T+y);return d=T*v,u=y*v,n.copy(r).addScaledVector(Cs,d).addScaledVector(bs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=H_(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=qu(d,c,e+1/3),this.g=qu(d,c,e),this.b=qu(d,c,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,n=pi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],u=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Iu(e.r),this.g=Iu(e.g),this.b=Iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Et.fromWorkingColorSpace(hn.copy(this),e),Math.round(Tn(hn.r*255,0,255))*65536+Math.round(Tn(hn.g*255,0,255))*256+Math.round(Tn(hn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,o=hn.g,c=hn.b,d=Math.max(r,o,c),u=Math.min(r,o,c);let p,g;const _=(u+d)/2;if(u===d)p=0,g=0;else{const S=d-u;switch(g=_<=.5?S/(d+u):S/(2-d-u),d){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=pi){Et.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,o=hn.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(hl);const r=Lu(hr.h,hl.h,n),o=Lu(hr.s,hl.s,n),c=Lu(hr.l,hl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new gt;gt.NAMES=vg;let ix=0;class Xs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=ks,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==_r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==od&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const u in c){const p=c[u];delete p.metadata,d.push(p)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Va extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new $,pl=new pt;class li{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=qp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ha("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=wn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),o=wn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),o=wn(o,this.array),c=wn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class _g extends li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class xg extends li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Hn extends li{constructor(e,n,r){super(new Float32Array(e),n,r)}}let rx=0;const Yn=new Ht,Yu=new on,Rs=new $,kn=new qa,Ua=new qa,rn=new $;class ci extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fg(e)?xg:_g)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];kn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const u=n[c];Ua.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(kn.min,Ua.min),kn.expandByPoint(rn),rn.addVectors(kn.max,Ua.max),kn.expandByPoint(rn)):(kn.expandByPoint(Ua.min),kn.expandByPoint(Ua.max))}kn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)rn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(rn));if(n)for(let c=0,d=n.length;c<d;c++){const u=n[c],p=this.morphTargetsRelative;for(let g=0,_=u.count;g<_;g++)rn.fromBufferAttribute(u,g),p&&(Rs.fromBufferAttribute(e,g),rn.add(Rs)),o=Math.max(o,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),u=[],p=[];for(let q=0;q<r.count;q++)u[q]=new $,p[q]=new $;const g=new $,_=new $,S=new $,y=new pt,M=new pt,A=new pt,T=new $,x=new $;function v(q,P,C){g.fromBufferAttribute(r,q),_.fromBufferAttribute(r,P),S.fromBufferAttribute(r,C),y.fromBufferAttribute(c,q),M.fromBufferAttribute(c,P),A.fromBufferAttribute(c,C),_.sub(g),S.sub(g),M.sub(y),A.sub(y);const z=1/(M.x*A.y-A.x*M.y);isFinite(z)&&(T.copy(_).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(z),x.copy(S).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(z),u[q].add(T),u[P].add(T),u[C].add(T),p[q].add(x),p[P].add(x),p[C].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,P=N.length;q<P;++q){const C=N[q],z=C.start,ne=C.count;for(let K=z,oe=z+ne;K<oe;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const R=new $,L=new $,G=new $,F=new $;function k(q){G.fromBufferAttribute(o,q),F.copy(G);const P=u[q];R.copy(P),R.sub(G.multiplyScalar(G.dot(P))).normalize(),L.crossVectors(F,P);const z=L.dot(p[q])<0?-1:1;d.setXYZW(q,R.x,R.y,R.z,z)}for(let q=0,P=N.length;q<P;++q){const C=N[q],z=C.start,ne=C.count;for(let K=z,oe=z+ne;K<oe;K+=3)k(e.getX(K+0)),k(e.getX(K+1)),k(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new $,c=new $,d=new $,u=new $,p=new $,g=new $,_=new $,S=new $;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),T=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(n,A),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),_.subVectors(d,c),S.subVectors(o,c),_.cross(S),u.fromBufferAttribute(r,A),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,x),u.add(_),p.add(_),g.add(_),r.setXYZ(A,u.x,u.y,u.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(x,g.x,g.y,g.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),_.subVectors(d,c),S.subVectors(o,c),_.cross(S),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(u,p){const g=u.array,_=u.itemSize,S=u.normalized,y=new g.constructor(p.length*_);let M=0,A=0;for(let T=0,x=p.length;T<x;T++){u.isInterleavedBufferAttribute?M=p[T]*u.data.stride+u.offset:M=p[T]*_;for(let v=0;v<_;v++)y[A++]=g[M++]}return new li(y,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,r=this.index.array,o=this.attributes;for(const u in o){const p=o[u],g=e(p,r);n.setAttribute(u,g)}const c=this.morphAttributes;for(const u in c){const p=[],g=c[u];for(let _=0,S=g.length;_<S;_++){const y=g[_],M=e(y,r);p.push(M)}n.morphAttributes[u]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,p=d.length;u<p;u++){const g=d[u];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let S=0,y=g.length;S<y;S++){const M=g[S];_.push(M.toJSON(e.data))}_.length>0&&(o[p]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const _=o[g];this.setAttribute(g,_.clone(n))}const c=e.morphAttributes;for(const g in c){const _=[],S=c[g];for(let y=0,M=S.length;y<M;y++)_.push(S[y].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,_=d.length;g<_;g++){const S=d[g];this.addGroup(S.start,S.count,S.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Ht,Or=new mg,ml=new jl,lm=new $,Ps=new $,Ns=new $,Ls=new $,$u=new $,gl=new $,vl=new pt,_l=new pt,xl=new pt,cm=new $,um=new $,dm=new $,yl=new $,Sl=new $;class $t extends on{constructor(e=new ci,n=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const u=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(c&&u){gl.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const _=u[p],S=c[p];_!==0&&($u.fromBufferAttribute(S,e),d?gl.addScaledVector($u,_):gl.addScaledVector($u.sub(n),_))}n.add(gl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(c),Or.copy(e.ray).recast(e.near),!(ml.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ml,lm)===null||Or.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(c).invert(),Or.copy(e.ray).applyMatrix4(om),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,u=c.index,p=c.attributes.position,g=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,y=c.groups,M=c.drawRange;if(u!==null)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const x=y[A],v=d[x.materialIndex],N=Math.max(x.start,M.start),R=Math.min(u.count,Math.min(x.start+x.count,M.start+M.count));for(let L=N,G=R;L<G;L+=3){const F=u.getX(L),k=u.getX(L+1),q=u.getX(L+2);o=Ml(this,v,e,r,g,_,S,F,k,q),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),T=Math.min(u.count,M.start+M.count);for(let x=A,v=T;x<v;x+=3){const N=u.getX(x),R=u.getX(x+1),L=u.getX(x+2);o=Ml(this,d,e,r,g,_,S,N,R,L),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const x=y[A],v=d[x.materialIndex],N=Math.max(x.start,M.start),R=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let L=N,G=R;L<G;L+=3){const F=L,k=L+1,q=L+2;o=Ml(this,v,e,r,g,_,S,F,k,q),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let x=A,v=T;x<v;x+=3){const N=x,R=x+1,L=x+2;o=Ml(this,d,e,r,g,_,S,N,R,L),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function sx(s,e,n,r,o,c,d,u){let p;if(e.side===An?p=r.intersectTriangle(d,c,o,!0,u):p=r.intersectTriangle(o,c,d,e.side===_r,u),p===null)return null;Sl.copy(u),Sl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(Sl);return g<n.near||g>n.far?null:{distance:g,point:Sl.clone(),object:s}}function Ml(s,e,n,r,o,c,d,u,p,g){s.getVertexPosition(u,Ps),s.getVertexPosition(p,Ns),s.getVertexPosition(g,Ls);const _=sx(s,e,n,r,Ps,Ns,Ls,yl);if(_){o&&(vl.fromBufferAttribute(o,u),_l.fromBufferAttribute(o,p),xl.fromBufferAttribute(o,g),_.uv=vi.getInterpolation(yl,Ps,Ns,Ls,vl,_l,xl,new pt)),c&&(vl.fromBufferAttribute(c,u),_l.fromBufferAttribute(c,p),xl.fromBufferAttribute(c,g),_.uv1=vi.getInterpolation(yl,Ps,Ns,Ls,vl,_l,xl,new pt)),d&&(cm.fromBufferAttribute(d,u),um.fromBufferAttribute(d,p),dm.fromBufferAttribute(d,g),_.normal=vi.getInterpolation(yl,Ps,Ns,Ls,cm,um,dm,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:u,b:p,c:g,normal:new $,materialIndex:0};vi.getNormal(Ps,Ns,Ls,S.normal),_.face=S}return _}class Bn extends ci{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const u=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],g=[],_=[],S=[];let y=0,M=0;A("z","y","x",-1,-1,r,n,e,d,c,0),A("z","y","x",1,-1,r,n,-e,d,c,1),A("x","z","y",1,1,e,r,n,o,d,2),A("x","z","y",1,-1,e,r,-n,o,d,3),A("x","y","z",1,-1,e,n,r,o,c,4),A("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(S,2));function A(T,x,v,N,R,L,G,F,k,q,P){const C=L/k,z=G/q,ne=L/2,K=G/2,oe=F/2,ce=k+1,se=q+1;let le=0,H=0;const de=new $;for(let ae=0;ae<se;ae++){const U=ae*z-K;for(let ie=0;ie<ce;ie++){const Le=ie*C-ne;de[T]=Le*N,de[x]=U*R,de[v]=oe,g.push(de.x,de.y,de.z),de[T]=0,de[x]=0,de[v]=F>0?1:-1,_.push(de.x,de.y,de.z),S.push(ie/k),S.push(1-ae/q),le+=1}}for(let ae=0;ae<q;ae++)for(let U=0;U<k;U++){const ie=y+U+ce*ae,Le=y+U+ce*(ae+1),Q=y+(U+1)+ce*(ae+1),ue=y+(U+1)+ce*ae;p.push(ie,Le,ue),p.push(Le,Q,ue),H+=6}u.addGroup(M,H,P),M+=H,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function gn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const o in r)e[o]=r[o]}return e}function ax(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ox={clone:js,merge:gn};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Sg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new $,fm=new pt,hm=new pt;class zn extends Sg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,fm,hm),n.subVectors(hm,fm)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,g=d.fullHeight;c+=d.offsetX*o/p,n-=d.offsetY*r/g,o*=d.width/p,r*=d.height/g}const u=this.filmOffset;u!==0&&(c+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Is=1;class ux extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(Ds,Is,e,n);o.layers=this.layers,this.add(o);const c=new zn(Ds,Is,e,n);c.layers=this.layers,this.add(c);const d=new zn(Ds,Is,e,n);d.layers=this.layers,this.add(d);const u=new zn(Ds,Is,e,n);u.layers=this.layers,this.add(u);const p=new zn(Ds,Is,e,n);p.layers=this.layers,this.add(p);const g=new zn(Ds,Is,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,u,p]=n;for(const g of n)this.remove(g);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,u,p,g,_]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,u),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,_),e.setRenderTarget(S,y,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Mg extends Cn{constructor(e,n,r,o,c,d,u,p,g,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,o,c,d,u,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dx extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Bn(5,5,5),c=new xr({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:gr});c.uniforms.tEquirect.value=n;const d=new $t(o,c),u=n.minFilter;return n.minFilter===qr&&(n.minFilter=ai),new ux(1,10,this).update(e,d),n.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}const Ku=new $,fx=new $,hx=new ut;class Vr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ku.subVectors(r,n).cross(fx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ku),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||hx.getNormalMatrix(e),o=this.coplanarPoint(Ku).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new jl,El=new $;class Zd{constructor(e=new Vr,n=new Vr,r=new Vr,o=new Vr,c=new Vr,d=new Vr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(o),u[4].copy(c),u[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki){const r=this.planes,o=e.elements,c=o[0],d=o[1],u=o[2],p=o[3],g=o[4],_=o[5],S=o[6],y=o[7],M=o[8],A=o[9],T=o[10],x=o[11],v=o[12],N=o[13],R=o[14],L=o[15];if(r[0].setComponents(p-c,y-g,x-M,L-v).normalize(),r[1].setComponents(p+c,y+g,x+M,L+v).normalize(),r[2].setComponents(p+d,y+_,x+A,L+N).normalize(),r[3].setComponents(p-d,y-_,x-A,L-N).normalize(),r[4].setComponents(p-u,y-S,x-T,L-R).normalize(),n===ki)r[5].setComponents(p+u,y+S,x+T,L+R).normalize();else if(n===Bl)r[5].setComponents(u,S,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(El.x=o.normal.x>0?e.max.x:e.min.x,El.y=o.normal.y>0?e.max.y:e.min.y,El.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function px(s){const e=new WeakMap;function n(u,p){const g=u.array,_=u.usage,S=g.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,_),u.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)u.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:u.version,size:S}}function r(u,p,g){const _=p.array,S=p._updateRange,y=p.updateRanges;if(s.bindBuffer(g,u),S.count===-1&&y.length===0&&s.bufferSubData(g,0,_),y.length!==0){for(let M=0,A=y.length;M<A;M++){const T=y[M];s.bufferSubData(g,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}S.count!==-1&&(s.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count),S.count=-1),p.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function c(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=e.get(u);p&&(s.deleteBuffer(p.buffer),e.delete(u))}function d(u,p){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const _=e.get(u);(!_||_.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const g=e.get(u);if(g===void 0)e.set(u,n(u,p));else if(g.version<u.version){if(g.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,u,p),g.version=u.version}}return{get:o,remove:c,update:d}}class Wl extends ci{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,u=Math.floor(r),p=Math.floor(o),g=u+1,_=p+1,S=e/u,y=n/p,M=[],A=[],T=[],x=[];for(let v=0;v<_;v++){const N=v*y-d;for(let R=0;R<g;R++){const L=R*S-c;A.push(L,-N,0),T.push(0,0,1),x.push(R/u),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let N=0;N<u;N++){const R=N+g*v,L=N+g*(v+1),G=N+1+g*(v+1),F=N+1+g*v;M.push(R,L,F),M.push(L,G,F)}this.setIndex(M),this.setAttribute("position",new Hn(A,3)),this.setAttribute("normal",new Hn(T,3)),this.setAttribute("uv",new Hn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,py=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,by=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ES=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,US=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:vx,alphamap_pars_fragment:_x,alphatest_fragment:xx,alphatest_pars_fragment:yx,aomap_fragment:Sx,aomap_pars_fragment:Mx,batching_pars_vertex:Ex,batching_vertex:wx,begin_vertex:Tx,beginnormal_vertex:Ax,bsdfs:Cx,iridescence_fragment:bx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Nx,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Ix,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:kx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:jx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:$x,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:oy,envmap_vertex:Zx,fog_vertex:Qx,fog_pars_vertex:Jx,fog_fragment:ey,fog_pars_fragment:ty,gradientmap_pars_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:sy,lights_pars_begin:ay,lights_toon_fragment:ly,lights_toon_pars_fragment:cy,lights_phong_fragment:uy,lights_phong_pars_fragment:dy,lights_physical_fragment:fy,lights_physical_pars_fragment:hy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,logdepthbuf_fragment:vy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:yy,map_fragment:Sy,map_pars_fragment:My,map_particle_fragment:Ey,map_particle_pars_fragment:wy,metalnessmap_fragment:Ty,metalnessmap_pars_fragment:Ay,morphinstance_vertex:Cy,morphcolor_vertex:by,morphnormal_vertex:Ry,morphtarget_pars_vertex:Py,morphtarget_vertex:Ny,normal_fragment_begin:Ly,normal_fragment_maps:Dy,normal_pars_fragment:Iy,normal_pars_vertex:Uy,normal_vertex:Fy,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:zy,iridescence_pars_fragment:Hy,opaque_fragment:Vy,packing:Gy,premultiplied_alpha_fragment:jy,project_vertex:Wy,dithering_fragment:Xy,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Zy,shadowmap_vertex:Qy,shadowmask_pars_fragment:Jy,skinbase_vertex:eS,skinning_pars_vertex:tS,skinning_vertex:nS,skinnormal_vertex:iS,specularmap_fragment:rS,specularmap_pars_fragment:sS,tonemapping_fragment:aS,tonemapping_pars_fragment:oS,transmission_fragment:lS,transmission_pars_fragment:cS,uv_pars_fragment:uS,uv_pars_vertex:dS,uv_vertex:fS,worldpos_vertex:hS,background_vert:pS,background_frag:mS,backgroundCube_vert:gS,backgroundCube_frag:vS,cube_vert:_S,cube_frag:xS,depth_vert:yS,depth_frag:SS,distanceRGBA_vert:MS,distanceRGBA_frag:ES,equirect_vert:wS,equirect_frag:TS,linedashed_vert:AS,linedashed_frag:CS,meshbasic_vert:bS,meshbasic_frag:RS,meshlambert_vert:PS,meshlambert_frag:NS,meshmatcap_vert:LS,meshmatcap_frag:DS,meshnormal_vert:IS,meshnormal_frag:US,meshphong_vert:FS,meshphong_frag:kS,meshphysical_vert:OS,meshphysical_frag:BS,meshtoon_vert:zS,meshtoon_frag:HS,points_vert:VS,points_frag:GS,shadow_vert:jS,shadow_frag:WS,sprite_vert:XS,sprite_frag:qS},Ne={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:gn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:gn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:gn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:gn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:gn([Ne.points,Ne.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:gn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:gn([Ne.common,Ne.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:gn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:gn([Ne.sprite,Ne.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:gn([Ne.common,Ne.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:gn([Ne.lights,Ne.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const wl={r:0,b:0,g:0},zr=new _i,YS=new Ht;function $S(s,e,n,r,o,c,d){const u=new gt(0);let p=c===!0?0:1,g,_,S=null,y=0,M=null;function A(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?n:e).get(R)),R}function T(N){let R=!1;const L=A(N);L===null?v(u,p):L&&L.isColor&&(v(L,1),R=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(N,R){const L=A(R);L&&(L.isCubeTexture||L.mapping===Vl)?(_===void 0&&(_=new $t(new Bn(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:js(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),zr.copy(R.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(YS.makeRotationFromEuler(zr)),_.material.toneMapped=Et.getTransfer(L.colorSpace)!==Dt,(S!==L||y!==L.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,S=L,y=L.version,M=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(g===void 0&&(g=new $t(new Wl(2,2),new xr({name:"BackgroundMaterial",uniforms:js(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=L,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=Et.getTransfer(L.colorSpace)!==Dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),g.material.uniforms.uvTransform.value.copy(L.matrix),(S!==L||y!==L.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,S=L,y=L.version,M=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function v(N,R){N.getRGB(wl,yg(s)),r.buffers.color.setClear(wl.r,wl.g,wl.b,R,d)}return{getClearColor:function(){return u},setClearColor:function(N,R=1){u.set(N),p=R,v(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(u,p)},render:T,addToRenderList:x}}function KS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,d=!1;function u(C,z,ne,K,oe){let ce=!1;const se=S(K,ne,z);c!==se&&(c=se,g(c.object)),ce=M(C,K,ne,oe),ce&&A(C,K,ne,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,L(C,z,ne,K),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function g(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function S(C,z,ne){const K=ne.wireframe===!0;let oe=r[C.id];oe===void 0&&(oe={},r[C.id]=oe);let ce=oe[z.id];ce===void 0&&(ce={},oe[z.id]=ce);let se=ce[K];return se===void 0&&(se=y(p()),ce[K]=se),se}function y(C){const z=[],ne=[],K=[];for(let oe=0;oe<n;oe++)z[oe]=0,ne[oe]=0,K[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ne,attributeDivisors:K,object:C,attributes:{},index:null}}function M(C,z,ne,K){const oe=c.attributes,ce=z.attributes;let se=0;const le=ne.getAttributes();for(const H in le)if(le[H].location>=0){const ae=oe[H];let U=ce[H];if(U===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),ae===void 0||ae.attribute!==U||U&&ae.data!==U.data)return!0;se++}return c.attributesNum!==se||c.index!==K}function A(C,z,ne,K){const oe={},ce=z.attributes;let se=0;const le=ne.getAttributes();for(const H in le)if(le[H].location>=0){let ae=ce[H];ae===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const U={};U.attribute=ae,ae&&ae.data&&(U.data=ae.data),oe[H]=U,se++}c.attributes=oe,c.attributesNum=se,c.index=K}function T(){const C=c.newAttributes;for(let z=0,ne=C.length;z<ne;z++)C[z]=0}function x(C){v(C,0)}function v(C,z){const ne=c.newAttributes,K=c.enabledAttributes,oe=c.attributeDivisors;ne[C]=1,K[C]===0&&(s.enableVertexAttribArray(C),K[C]=1),oe[C]!==z&&(s.vertexAttribDivisor(C,z),oe[C]=z)}function N(){const C=c.newAttributes,z=c.enabledAttributes;for(let ne=0,K=z.length;ne<K;ne++)z[ne]!==C[ne]&&(s.disableVertexAttribArray(ne),z[ne]=0)}function R(C,z,ne,K,oe,ce,se){se===!0?s.vertexAttribIPointer(C,z,ne,oe,ce):s.vertexAttribPointer(C,z,ne,K,oe,ce)}function L(C,z,ne,K){T();const oe=K.attributes,ce=ne.getAttributes(),se=z.defaultAttributeValues;for(const le in ce){const H=ce[le];if(H.location>=0){let de=oe[le];if(de===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const ae=de.normalized,U=de.itemSize,ie=e.get(de);if(ie===void 0)continue;const Le=ie.buffer,Q=ie.type,ue=ie.bytesPerElement,xe=Q===s.INT||Q===s.UNSIGNED_INT||de.gpuType===jd;if(de.isInterleavedBufferAttribute){const Se=de.data,Ae=Se.stride,Ue=de.offset;if(Se.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)v(H.location+Re,Se.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Re=0;Re<H.locationSize;Re++)x(H.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Re=0;Re<H.locationSize;Re++)R(H.location+Re,U/H.locationSize,Q,ae,Ae*ue,(Ue+U/H.locationSize*Re)*ue,xe)}else{if(de.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)v(H.location+Se,de.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Se=0;Se<H.locationSize;Se++)x(H.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Se=0;Se<H.locationSize;Se++)R(H.location+Se,U/H.locationSize,Q,ae,U*ue,U/H.locationSize*Se*ue,xe)}}else if(se!==void 0){const ae=se[le];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(H.location,ae);break;case 3:s.vertexAttrib3fv(H.location,ae);break;case 4:s.vertexAttrib4fv(H.location,ae);break;default:s.vertexAttrib1fv(H.location,ae)}}}}N()}function G(){q();for(const C in r){const z=r[C];for(const ne in z){const K=z[ne];for(const oe in K)_(K[oe].object),delete K[oe];delete z[ne]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const ne in z){const K=z[ne];for(const oe in K)_(K[oe].object),delete K[oe];delete z[ne]}delete r[C.id]}function k(C){for(const z in r){const ne=r[z];if(ne[C.id]===void 0)continue;const K=ne[C.id];for(const oe in K)_(K[oe].object),delete K[oe];delete ne[C.id]}}function q(){P(),d=!0,c!==o&&(c=o,g(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:q,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:x,disableUnusedAttributes:N}}function ZS(s,e,n){let r;function o(g){r=g}function c(g,_){s.drawArrays(r,g,_),n.update(_,r,1)}function d(g,_,S){S!==0&&(s.drawArraysInstanced(r,g,_,S),n.update(_,r,S))}function u(g,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,_,0,S);let M=0;for(let A=0;A<S;A++)M+=_[A];n.update(M,r,1)}function p(g,_,S,y){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<g.length;A++)d(g[A],_[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,_,0,y,0,S);let A=0;for(let T=0;T<S;T++)A+=_[T];for(let T=0;T<y.length;T++)n.update(A,r,y[T])}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function QS(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(F){return!(F!==oi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const k=F===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Oi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Fi&&!k)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const S=n.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=M>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:u,precision:g,logarithmicDepthBuffer:S,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:v,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:L,maxSamples:G}}function JS(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new Vr,u=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||r!==0||o;return o=y,r=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,y){n=_(S,y,0)},this.setState=function(S,y,M){const A=S.clippingPlanes,T=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||A===null||A.length===0||c&&!x)c?_(null):g();else{const N=c?0:r,R=N*4;let L=v.clippingState||null;p.value=L,L=_(A,y,R,M);for(let G=0;G!==R;++G)L[G]=n[G];v.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,y,M,A){const T=S!==null?S.length:0;let x=null;if(T!==0){if(x=p.value,A!==!0||x===null){const v=M+T*4,N=y.matrixWorldInverse;u.getNormalMatrix(N),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,L=M;R!==T;++R,L+=4)d.copy(S[R]).applyMatrix4(N,u),d.normal.toArray(x,L),x[L+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function eM(s){let e=new WeakMap;function n(d,u){return u===ld?d.mapping=zs:u===cd&&(d.mapping=Hs),d}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===ld||u===cd)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new dx(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",o),n(g.texture,d.mapping)}else return null}}return d}function o(d){const u=d.target;u.removeEventListener("dispose",o);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class wg extends Sg{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,u=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,u-=_*this.view.offsetY,p=u-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,u,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,pm=[.125,.215,.35,.446,.526,.582],Wr=20,Zu=new wg,mm=new gt;let Qu=null,Ju=0,ed=0,td=!1;const Gr=(1+Math.sqrt(5))/2,Us=1/Gr,gm=[new $(-Gr,Us,0),new $(Gr,Us,0),new $(-Us,0,Gr),new $(Us,0,Gr),new $(0,Gr,-Us),new $(0,Gr,Us),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,Ju,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ja,format:oi,colorSpace:yr,depthBuffer:!1},o=_m(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(c)),this._blurMaterial=nM(c,e,n)}return o}_compileMaterial(e){const n=new $t(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,r,o){const u=new zn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(mm),_.toneMapping=vr,_.autoClear=!1;const M=new Va({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),A=new $t(new Bn,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(mm),T=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(u.up.set(0,p[v],0),u.lookAt(g[v],0,0)):N===1?(u.up.set(0,0,p[v]),u.lookAt(0,g[v],0)):(u.up.set(0,p[v],0),u.lookAt(0,0,g[v]));const R=this._cubeSize;Tl(o,N*R,v>2?R:0,R,R),_.setRenderTarget(o),T&&_.render(A,u),_.render(e,u)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=S,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===zs||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new $t(this._lodPlanes[0],c),u=c.uniforms;u.envMap.value=e;const p=this._cubeSize;Tl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Zu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),u=gm[(o-c-1)%gm.length];this._blur(e,c-1,c,d,u)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,u){const p=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new $t(this._lodPlanes[o],g),y=g.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Wr-1),T=c/A,x=isFinite(c)?1+Math.floor(_*T):Wr;x>Wr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wr}`);const v=[];let N=0;for(let k=0;k<Wr;++k){const q=k/T,P=Math.exp(-q*q/2);v.push(P),k===0?N+=P:k<x&&(N+=2*P)}for(let k=0;k<v.length;k++)v[k]=v[k]/N;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=d==="latitudinal",u&&(y.poleAxis.value=u);const{_lodMax:R}=this;y.dTheta.value=A,y.mipInt.value=R-r;const L=this._sizeLods[o],G=3*L*(o>R-Fs?o-R+Fs:0),F=4*(this._cubeSize-L);Tl(n,G,F,3*L,2*L),p.setRenderTarget(n),p.render(S,Zu)}}function tM(s){const e=[],n=[],r=[];let o=s;const c=s-Fs+1+pm.length;for(let d=0;d<c;d++){const u=Math.pow(2,o);n.push(u);let p=1/u;d>s-Fs?p=pm[d-s+Fs-1]:d===0&&(p=0),r.push(p);const g=1/(u-2),_=-g,S=1+g,y=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,A=6,T=3,x=2,v=1,N=new Float32Array(T*A*M),R=new Float32Array(x*A*M),L=new Float32Array(v*A*M);for(let F=0;F<M;F++){const k=F%3*2/3-1,q=F>2?0:-1,P=[k,q,0,k+2/3,q,0,k+2/3,q+1,0,k,q,0,k+2/3,q+1,0,k,q+1,0];N.set(P,T*A*F),R.set(y,x*A*F);const C=[F,F,F,F,F,F];L.set(C,v*A*F)}const G=new ci;G.setAttribute("position",new li(N,T)),G.setAttribute("uv",new li(R,x)),G.setAttribute("faceIndex",new li(L,v)),e.push(G),o>Fs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function _m(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function nM(s,e,n){const r=new Float32Array(Wr),o=new $(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function xm(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function ym(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iM(s){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const p=u.mapping,g=p===ld||p===cd,_=p===zs||p===Hs;if(g||_){let S=e.get(u);const y=S!==void 0?S.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==y)return n===null&&(n=new vm(s)),S=g?n.fromEquirectangular(u,S):n.fromCubemap(u,S),S.texture.pmremVersion=u.pmremVersion,e.set(u,S),S.texture;if(S!==void 0)return S.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&o(M)?(n===null&&(n=new vm(s)),S=g?n.fromEquirectangular(u):n.fromCubemap(u),S.texture.pmremVersion=u.pmremVersion,e.set(u,S),u.addEventListener("dispose",c),S.texture):null}}}return u}function o(u){let p=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function rM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ha("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function sM(s,e,n,r){const o={},c=new WeakMap;function d(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const T=y.morphAttributes[A];for(let x=0,v=T.length;x<v;x++)e.remove(T[x])}y.removeEventListener("dispose",d),delete o[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function u(S,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,n.memory.geometries++),y}function p(S){const y=S.attributes;for(const A in y)e.update(y[A],s.ARRAY_BUFFER);const M=S.morphAttributes;for(const A in M){const T=M[A];for(let x=0,v=T.length;x<v;x++)e.update(T[x],s.ARRAY_BUFFER)}}function g(S){const y=[],M=S.index,A=S.attributes.position;let T=0;if(M!==null){const N=M.array;T=M.version;for(let R=0,L=N.length;R<L;R+=3){const G=N[R+0],F=N[R+1],k=N[R+2];y.push(G,F,F,k,k,G)}}else if(A!==void 0){const N=A.array;T=A.version;for(let R=0,L=N.length/3-1;R<L;R+=3){const G=R+0,F=R+1,k=R+2;y.push(G,F,F,k,k,G)}}else return;const x=new(fg(y)?xg:_g)(y,1);x.version=T;const v=c.get(S);v&&e.remove(v),c.set(S,x)}function _(S){const y=c.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&g(S)}else g(S);return c.get(S)}return{get:u,update:p,getWireframeAttribute:_}}function aM(s,e,n){let r;function o(y){r=y}let c,d;function u(y){c=y.type,d=y.bytesPerElement}function p(y,M){s.drawElements(r,M,c,y*d),n.update(M,r,1)}function g(y,M,A){A!==0&&(s.drawElementsInstanced(r,M,c,y*d,A),n.update(M,r,A))}function _(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,A);let x=0;for(let v=0;v<A;v++)x+=M[v];n.update(x,r,1)}function S(y,M,A,T){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)g(y[v]/d,M[v],T[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,T,0,A);let v=0;for(let N=0;N<A;N++)v+=M[N];for(let N=0;N<T.length;N++)n.update(v,r,T[N])}}this.setMode=o,this.setIndex=u,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function oM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,u){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=u*(c/3);break;case s.LINES:n.lines+=u*(c/2);break;case s.LINE_STRIP:n.lines+=u*(c-1);break;case s.LINE_LOOP:n.lines+=u*c;break;case s.POINTS:n.points+=u*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function lM(s,e,n){const r=new WeakMap,o=new It;function c(d,u,p){const g=d.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=_!==void 0?_.length:0;let y=r.get(u);if(y===void 0||y.count!==S){let C=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const A=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let L=0;A===!0&&(L=1),T===!0&&(L=2),x===!0&&(L=3);let G=u.attributes.position.count*L,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const k=new Float32Array(G*F*4*S),q=new pg(k,G,F,S);q.type=Fi,q.needsUpdate=!0;const P=L*4;for(let z=0;z<S;z++){const ne=v[z],K=N[z],oe=R[z],ce=G*F*4*z;for(let se=0;se<ne.count;se++){const le=se*P;A===!0&&(o.fromBufferAttribute(ne,se),k[ce+le+0]=o.x,k[ce+le+1]=o.y,k[ce+le+2]=o.z,k[ce+le+3]=0),T===!0&&(o.fromBufferAttribute(K,se),k[ce+le+4]=o.x,k[ce+le+5]=o.y,k[ce+le+6]=o.z,k[ce+le+7]=0),x===!0&&(o.fromBufferAttribute(oe,se),k[ce+le+8]=o.x,k[ce+le+9]=o.y,k[ce+le+10]=o.z,k[ce+le+11]=oe.itemSize===4?o.w:1)}}y={count:S,texture:q,size:new pt(G,F)},r.set(u,y),u.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let A=0;for(let x=0;x<g.length;x++)A+=g[x];const T=u.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function cM(s,e,n,r){let o=new WeakMap;function c(p){const g=r.render.frame,_=p.geometry,S=e.get(p,_);if(o.get(S)!==g&&(e.update(S),o.set(S,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),o.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return S}function d(){o=new WeakMap}function u(p){const g=p.target;g.removeEventListener("dispose",u),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:d}}class Tg extends Cn{constructor(e,n,r,o,c,d,u,p,g,_=Os){if(_!==Os&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=Yr),r===void 0&&_===Gs&&(r=Vs),super(null,o,c,d,u,p,_,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:$n,this.minFilter=p!==void 0?p:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ag=new Cn,Sm=new Tg(1,1),Cg=new pg,bg=new $_,Rg=new Mg,Mm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Am=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Mm[o];if(c===void 0&&(c=new Float32Array(o),Mm[o]=c),e!==0){r.toArray(c,0);for(let d=1,u=0;d!==e;++d)u+=n,s[d].toArray(c,u)}return c}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Xl(s,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function uM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function pM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Am.set(r),s.uniformMatrix2fv(this.addr,!1,Am),Zt(n,r)}}function mM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),Zt(n,r)}}function gM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;wm.set(r),s.uniformMatrix4fv(this.addr,!1,wm),Zt(n,r)}}function vM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function _M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function SM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function MM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function EM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function wM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function TM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Sm.compareFunction=dg,c=Sm):c=Ag,n.setTexture2D(e||c,o)}function AM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||bg,o)}function CM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Rg,o)}function bM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Cg,o)}function RM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return bM}}function PM(s,e){s.uniform1fv(this.addr,e)}function NM(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function LM(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function DM(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function IM(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function UM(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function FM(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function kM(s,e){s.uniform1iv(this.addr,e)}function OM(s,e){s.uniform2iv(this.addr,e)}function BM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function HM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function GM(s,e){s.uniform3uiv(this.addr,e)}function jM(s,e){s.uniform4uiv(this.addr,e)}function WM(s,e,n){const r=this.cache,o=e.length,c=Xl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Ag,c[d])}function XM(s,e,n){const r=this.cache,o=e.length,c=Xl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||bg,c[d])}function qM(s,e,n){const r=this.cache,o=e.length,c=Xl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||Rg,c[d])}function YM(s,e,n){const r=this.cache,o=e.length,c=Xl(n,o);Kt(r,c)||(s.uniform1iv(this.addr,c),Zt(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Cg,c[d])}function $M(s){switch(s){case 5126:return PM;case 35664:return NM;case 35665:return LM;case 35666:return DM;case 35674:return IM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return kM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class KM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=RM(n.type)}}class ZM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$M(n.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const u=o[c];u.setValue(e,n[u.id],r)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function Cm(s,e){s.seq.push(e),s.map[e.id]=e}function JM(s,e,n){const r=s.name,o=r.length;for(nd.lastIndex=0;;){const c=nd.exec(r),d=nd.lastIndex;let u=c[1];const p=c[2]==="]",g=c[3];if(p&&(u=u|0),g===void 0||g==="["&&d+2===o){Cm(n,g===void 0?new KM(u,s,e):new ZM(u,s,e));break}else{let S=n.map[u];S===void 0&&(S=new QM(u),Cm(n,S)),n=S}}}class Il{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);JM(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const u=n[c],p=r[u.id];p.needsUpdate!==!1&&u.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const eE=37297;let tE=0;function nE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const u=d+1;r.push(`${u===e?">":" "} ${u}: ${n[d]}`)}return r.join(`
`)}function iE(s){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(s);let r;switch(e===n?r="":e===Ol&&n===kl?r="LinearDisplayP3ToLinearSRGB":e===kl&&n===Ol&&(r="LinearSRGBToLinearDisplayP3"),s){case yr:case Gl:return[r,"LinearTransferOETF"];case pi:case Kd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Rm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+nE(s.getShaderSource(e),d)}else return o}function rE(s,e){const n=iE(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function sE(s,e){let n;switch(e){case E_:n="Linear";break;case w_:n="Reinhard";break;case T_:n="Cineon";break;case A_:n="ACESFilmic";break;case b_:n="AgX";break;case R_:n="Neutral";break;case C_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new $;function aE(){Et.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function lE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function cE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let u=1;c.type===s.FLOAT_MAT2&&(u=2),c.type===s.FLOAT_MAT3&&(u=3),c.type===s.FLOAT_MAT4&&(u=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:u}}return n}function Oa(s){return s!==""}function Pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(s){return s.replace(uE,fE)}const dE=new Map;function fE(s,e){let n=ct[e];if(n===void 0){const r=dE.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(hE,pE)}function pE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Dm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function gE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vE(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Hs&&(e="ENVMAP_MODE_REFRACTION"),e}function _E(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gd:e="ENVMAP_BLENDING_MULTIPLY";break;case S_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function xE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function yE(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,u=n.fragmentShader;const p=mE(n),g=gE(n),_=vE(n),S=_E(n),y=xE(n),M=oE(n),A=lE(c),T=o.createProgram();let x,v,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Oa).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Oa).join(`
`),v.length>0&&(v+=`
`)):(x=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),v=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?ct.tonemapping_pars_fragment:"",n.toneMapping!==vr?sE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,rE("linearToOutputTexel",n.outputColorSpace),aE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oa).join(`
`)),d=Bd(d),d=Pm(d,n),d=Nm(d,n),u=Bd(u),u=Pm(u,n),u=Nm(u,n),d=Lm(d),u=Lm(u),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=N+x+d,L=N+v+u,G=bm(o,o.VERTEX_SHADER,R),F=bm(o,o.FRAGMENT_SHADER,L);o.attachShader(T,G),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(z){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(T).trim(),K=o.getShaderInfoLog(G).trim(),oe=o.getShaderInfoLog(F).trim();let ce=!0,se=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,G,F);else{const le=Rm(o,G,"vertex"),H=Rm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ne+`
`+le+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(K===""||oe==="")&&(se=!1);se&&(z.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:K,prefix:x},fragmentShader:{log:oe,prefix:v}})}o.deleteShader(G),o.deleteShader(F),q=new Il(o,T),P=cE(o,T)}let q;this.getUniforms=function(){return q===void 0&&k(this),q};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,eE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=F,this}let SE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new EE(e),n.set(e,r)),r}}class EE{constructor(e){this.id=SE++,this.code=e,this.usedTimes=0}}function wE(s,e,n,r,o,c,d){const u=new gg,p=new ME,g=new Set,_=[],S=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return g.add(P),P===0?"uv":`uv${P}`}function x(P,C,z,ne,K){const oe=ne.fog,ce=K.geometry,se=P.isMeshStandardMaterial?ne.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),H=le&&le.mapping===Vl?le.image.height:null,de=A[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ae=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=ae!==void 0?ae.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Le,Q,ue,xe;if(de){const _t=mi[de];Le=_t.vertexShader,Q=_t.fragmentShader}else Le=P.vertexShader,Q=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),xe=p.getFragmentShaderID(P);const Se=s.getRenderTarget(),Ae=K.isInstancedMesh===!0,Ue=K.isBatchedMesh===!0,Re=!!P.map,lt=!!P.matcap,O=!!le,Rt=!!P.aoMap,vt=!!P.lightMap,Mt=!!P.bumpMap,Xe=!!P.normalMap,Ut=!!P.displacementMap,et=!!P.emissiveMap,nt=!!P.metalnessMap,I=!!P.roughnessMap,w=P.anisotropy>0,re=P.clearcoat>0,pe=P.dispersion>0,ve=P.iridescence>0,me=P.sheen>0,qe=P.transmission>0,Pe=w&&!!P.anisotropyMap,ke=re&&!!P.clearcoatMap,rt=re&&!!P.clearcoatNormalMap,Me=re&&!!P.clearcoatRoughnessMap,De=ve&&!!P.iridescenceMap,ft=ve&&!!P.iridescenceThicknessMap,Je=me&&!!P.sheenColorMap,Oe=me&&!!P.sheenRoughnessMap,it=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,j=qe&&!!P.transmissionMap,we=qe&&!!P.thicknessMap,fe=!!P.gradientMap,he=!!P.alphaMap,Ce=P.alphaTest>0,Ke=!!P.alphaHash,ht=!!P.extensions;let Ot=vr;P.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const jt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:Le,fragmentShader:Q,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ue,batchingColor:Ue&&K._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,instancingMorph:Ae&&K.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:yr,alphaToCoverage:!!P.alphaToCoverage,map:Re,matcap:lt,envMap:O,envMapMode:O&&le.mapping,envMapCubeUVHeight:H,aoMap:Rt,lightMap:vt,bumpMap:Mt,normalMap:Xe,displacementMap:y&&Ut,emissiveMap:et,normalMapObjectSpace:Xe&&P.normalMapType===D_,normalMapTangentSpace:Xe&&P.normalMapType===ug,metalnessMap:nt,roughnessMap:I,anisotropy:w,anisotropyMap:Pe,clearcoat:re,clearcoatMap:ke,clearcoatNormalMap:rt,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:De,iridescenceThicknessMap:ft,sheen:me,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:it,specularColorMap:st,specularIntensityMap:At,transmission:qe,transmissionMap:j,thicknessMap:we,gradientMap:fe,opaque:P.transparent===!1&&P.blending===ks&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:Ke,combine:P.combine,mapUv:Re&&T(P.map.channel),aoMapUv:Rt&&T(P.aoMap.channel),lightMapUv:vt&&T(P.lightMap.channel),bumpMapUv:Mt&&T(P.bumpMap.channel),normalMapUv:Xe&&T(P.normalMap.channel),displacementMapUv:Ut&&T(P.displacementMap.channel),emissiveMapUv:et&&T(P.emissiveMap.channel),metalnessMapUv:nt&&T(P.metalnessMap.channel),roughnessMapUv:I&&T(P.roughnessMap.channel),anisotropyMapUv:Pe&&T(P.anisotropyMap.channel),clearcoatMapUv:ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:rt&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(P.sheenRoughnessMap.channel),specularMapUv:it&&T(P.specularMap.channel),specularColorMapUv:st&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:j&&T(P.transmissionMap.channel),thicknessMapUv:we&&T(P.thicknessMap.channel),alphaMapUv:he&&T(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Xe||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ce.attributes.uv&&(Re||he),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:K.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Re&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===gi,flipSided:P.side===An,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ht&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&P.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return jt.vertexUv1s=g.has(1),jt.vertexUv2s=g.has(2),jt.vertexUv3s=g.has(3),g.clear(),jt}function v(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(N(C,P),R(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function N(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function R(P,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.skinning&&u.enable(4),C.morphTargets&&u.enable(5),C.morphNormals&&u.enable(6),C.morphColors&&u.enable(7),C.premultipliedAlpha&&u.enable(8),C.shadowMapEnabled&&u.enable(9),C.doubleSided&&u.enable(10),C.flipSided&&u.enable(11),C.useDepthPacking&&u.enable(12),C.dithering&&u.enable(13),C.transmission&&u.enable(14),C.sheen&&u.enable(15),C.opaque&&u.enable(16),C.pointsUvs&&u.enable(17),C.decodeVideoTexture&&u.enable(18),C.alphaToCoverage&&u.enable(19),P.push(u.mask)}function L(P){const C=A[P.type];let z;if(C){const ne=mi[C];z=ox.clone(ne.uniforms)}else z=P.uniforms;return z}function G(P,C){let z;for(let ne=0,K=_.length;ne<K;ne++){const oe=_[ne];if(oe.cacheKey===C){z=oe,++z.usedTimes;break}}return z===void 0&&(z=new yE(s,C,P,c),_.push(z)),z}function F(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function k(P){p.remove(P)}function q(){p.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:L,acquireProgram:G,releaseProgram:F,releaseShaderCache:k,programs:_,dispose:q}}function TE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let u=s.get(d);return u===void 0&&(u={},s.set(d,u)),u}function r(d){s.delete(d)}function o(d,u,p){s.get(d)[u]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function AE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(S,y,M,A,T,x){let v=s[e];return v===void 0?(v={id:S.id,object:S,geometry:y,material:M,groupOrder:A,renderOrder:S.renderOrder,z:T,group:x},s[e]=v):(v.id=S.id,v.object=S,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=S.renderOrder,v.z=T,v.group=x),e++,v}function u(S,y,M,A,T,x){const v=d(S,y,M,A,T,x);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):n.push(v)}function p(S,y,M,A,T,x){const v=d(S,y,M,A,T,x);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):n.unshift(v)}function g(S,y){n.length>1&&n.sort(S||AE),r.length>1&&r.sort(y||Im),o.length>1&&o.sort(y||Im)}function _(){for(let S=e,y=s.length;S<y;S++){const M=s[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:u,unshift:p,finish:_,sort:g}}function CE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Um,s.set(r,[d])):o>=c.length?(d=new Um,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function bE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new gt};break;case"SpotLight":n={position:new $,direction:new $,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function RE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let PE=0;function NE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LE(s){const e=new bE,n=RE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new $);const o=new $,c=new Ht,d=new Ht;function u(g){let _=0,S=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,A=0,T=0,x=0,v=0,N=0,R=0,L=0,G=0,F=0,k=0;g.sort(NE);for(let P=0,C=g.length;P<C;P++){const z=g[P],ne=z.color,K=z.intensity,oe=z.distance,ce=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ne.r*K,S+=ne.g*K,y+=ne.b*K;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],K);k++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=z.shadow.matrix,N++}r.directional[M]=se,M++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(ne).multiplyScalar(K),se.distance=oe,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[T]=se;const le=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,le.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[T]=le.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.spotShadow[T]=H,r.spotShadowMap[T]=ce,L++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(ne).multiplyScalar(K),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=se,x++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,H=n.get(z);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,H.shadowCameraNear=le.camera.near,H.shadowCameraFar=le.camera.far,r.pointShadow[A]=H,r.pointShadowMap[A]=ce,r.pointShadowMatrix[A]=z.shadow.matrix,R++}r.point[A]=se,A++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(K),se.groundColor.copy(z.groundColor).multiplyScalar(K),r.hemi[v]=se,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==M||q.pointLength!==A||q.spotLength!==T||q.rectAreaLength!==x||q.hemiLength!==v||q.numDirectionalShadows!==N||q.numPointShadows!==R||q.numSpotShadows!==L||q.numSpotMaps!==G||q.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=x,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=L+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,q.directionalLength=M,q.pointLength=A,q.spotLength=T,q.rectAreaLength=x,q.hemiLength=v,q.numDirectionalShadows=N,q.numPointShadows=R,q.numSpotShadows=L,q.numSpotMaps=G,q.numLightProbes=k,r.version=PE++)}function p(g,_){let S=0,y=0,M=0,A=0,T=0;const x=_.matrixWorldInverse;for(let v=0,N=g.length;v<N;v++){const R=g[v];if(R.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),S++}else if(R.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),M++}else if(R.isRectAreaLight){const L=r.rectArea[A];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),d.identity(),c.copy(R.matrixWorld),c.premultiply(x),d.extractRotation(c),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),A++}else if(R.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),y++}else if(R.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(x),T++}}}return{setup:u,setupView:p,state:r}}function Fm(s){const e=new LE(s),n=[],r=[];function o(_){g.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function d(_){r.push(_)}function u(){e.setup(n)}function p(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:u,setupLightsView:p,pushLight:c,pushShadow:d}}function DE(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let u;return d===void 0?(u=new Fm(s),e.set(o,[u])):c>=d.length?(u=new Fm(s),d.push(u)):u=d[c],u}function r(){e=new WeakMap}return{get:n,dispose:r}}class IE extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UE extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OE(s,e,n){let r=new Zd;const o=new pt,c=new pt,d=new It,u=new IE({depthPacking:L_}),p=new UE,g={},_=n.maxTextureSize,S={[_r]:An,[An]:_r,[gi]:gi},y=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:FE,fragmentShader:kE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new ci;A.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new $t(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qm;let v=this.type;this.render=function(F,k,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(gr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const K=v!==Ui&&this.type===Ui,oe=v===Ui&&this.type!==Ui;for(let ce=0,se=F.length;ce<se;ce++){const le=F[ce],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const de=H.getFrameExtents();if(o.multiply(de),c.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/de.x),o.x=c.x*de.x,H.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/de.y),o.y=c.y*de.y,H.mapSize.y=c.y)),H.map===null||K===!0||oe===!0){const U=this.type!==Ui?{minFilter:$n,magFilter:$n}:{};H.map!==null&&H.map.dispose(),H.map=new $r(o.x,o.y,U),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ae=H.getViewportCount();for(let U=0;U<ae;U++){const ie=H.getViewport(U);d.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ne.viewport(d),H.updateMatrices(le,U),r=H.getFrustum(),L(k,q,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===Ui&&N(H,q),H.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(P,C,z)};function N(F,k){const q=e.update(T);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new $r(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,q,y,T,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,q,M,T,null)}function R(F,k,q,P){let C=null;const z=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)C=z;else if(C=q.isPointLight===!0?p:u,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ne=C.uuid,K=k.uuid;let oe=g[ne];oe===void 0&&(oe={},g[ne]=oe);let ce=oe[K];ce===void 0&&(ce=C.clone(),oe[K]=ce,k.addEventListener("dispose",G)),C=ce}if(C.visible=k.visible,C.wireframe=k.wireframe,P===Ui?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:S[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=s.properties.get(C);ne.light=q}return C}function L(F,k,q,P,C){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ui)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const K=e.update(F),oe=F.material;if(Array.isArray(oe)){const ce=K.groups;for(let se=0,le=ce.length;se<le;se++){const H=ce[se],de=oe[H.materialIndex];if(de&&de.visible){const ae=R(F,de,P,C);F.onBeforeShadow(s,F,k,q,K,ae,H),s.renderBufferDirect(q,null,K,ae,F,H),F.onAfterShadow(s,F,k,q,K,ae,H)}}}else if(oe.visible){const ce=R(F,oe,P,C);F.onBeforeShadow(s,F,k,q,K,ce,null),s.renderBufferDirect(q,null,K,ce,F,null),F.onAfterShadow(s,F,k,q,K,ce,null)}}const ne=F.children;for(let K=0,oe=ne.length;K<oe;K++)L(ne[K],k,q,P,C)}function G(F){F.target.removeEventListener("dispose",G);for(const q in g){const P=g[q],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function BE(s){function e(){let j=!1;const we=new It;let fe=null;const he=new It(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!j&&(s.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){j=Ce},setClear:function(Ce,Ke,ht,Ot,jt){jt===!0&&(Ce*=Ot,Ke*=Ot,ht*=Ot),we.set(Ce,Ke,ht,Ot),he.equals(we)===!1&&(s.clearColor(Ce,Ke,ht,Ot),he.copy(we))},reset:function(){j=!1,fe=null,he.set(-1,0,0,0)}}}function n(){let j=!1,we=null,fe=null,he=null;return{setTest:function(Ce){Ce?xe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(Ce){we!==Ce&&!j&&(s.depthMask(Ce),we=Ce)},setFunc:function(Ce){if(fe!==Ce){switch(Ce){case p_:s.depthFunc(s.NEVER);break;case m_:s.depthFunc(s.ALWAYS);break;case g_:s.depthFunc(s.LESS);break;case Ul:s.depthFunc(s.LEQUAL);break;case v_:s.depthFunc(s.EQUAL);break;case __:s.depthFunc(s.GEQUAL);break;case x_:s.depthFunc(s.GREATER);break;case y_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ce}},setLocked:function(Ce){j=Ce},setClear:function(Ce){he!==Ce&&(s.clearDepth(Ce),he=Ce)},reset:function(){j=!1,we=null,fe=null,he=null}}}function r(){let j=!1,we=null,fe=null,he=null,Ce=null,Ke=null,ht=null,Ot=null,jt=null;return{setTest:function(_t){j||(_t?xe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(_t){we!==_t&&!j&&(s.stencilMask(_t),we=_t)},setFunc:function(_t,bn,Rn){(fe!==_t||he!==bn||Ce!==Rn)&&(s.stencilFunc(_t,bn,Rn),fe=_t,he=bn,Ce=Rn)},setOp:function(_t,bn,Rn){(Ke!==_t||ht!==bn||Ot!==Rn)&&(s.stencilOp(_t,bn,Rn),Ke=_t,ht=bn,Ot=Rn)},setLocked:function(_t){j=_t},setClear:function(_t){jt!==_t&&(s.clearStencil(_t),jt=_t)},reset:function(){j=!1,we=null,fe=null,he=null,Ce=null,Ke=null,ht=null,Ot=null,jt=null}}}const o=new e,c=new n,d=new r,u=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],M=null,A=!1,T=null,x=null,v=null,N=null,R=null,L=null,G=null,F=new gt(0,0,0),k=0,q=!1,P=null,C=null,z=null,ne=null,K=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,se=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(le)[1]),ce=se>=1):le.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ce=se>=2);let H=null,de={};const ae=s.getParameter(s.SCISSOR_BOX),U=s.getParameter(s.VIEWPORT),ie=new It().fromArray(ae),Le=new It().fromArray(U);function Q(j,we,fe,he){const Ce=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(j,Ke),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<fe;ht++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(we+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ke}const ue={};ue[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Ul),Mt(!1),Xe(Vp),xe(s.CULL_FACE),Rt(gr);function xe(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Se(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function Ae(j,we){return _[j]!==we?(s.bindFramebuffer(j,we),_[j]=we,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ue(j,we){let fe=y,he=!1;if(j){fe=S.get(we),fe===void 0&&(fe=[],S.set(we,fe));const Ce=j.textures;if(fe.length!==Ce.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,ht=Ce.length;Ke<ht;Ke++)fe[Ke]=s.COLOR_ATTACHMENT0+Ke;fe.length=Ce.length,he=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,he=!0);he&&s.drawBuffers(fe)}function Re(j){return M!==j?(s.useProgram(j),M=j,!0):!1}const lt={[jr]:s.FUNC_ADD,[Zv]:s.FUNC_SUBTRACT,[Qv]:s.FUNC_REVERSE_SUBTRACT};lt[Jv]=s.MIN,lt[e_]=s.MAX;const O={[t_]:s.ZERO,[n_]:s.ONE,[i_]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[c_]:s.SRC_ALPHA_SATURATE,[o_]:s.DST_COLOR,[s_]:s.DST_ALPHA,[r_]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[l_]:s.ONE_MINUS_DST_COLOR,[a_]:s.ONE_MINUS_DST_ALPHA,[u_]:s.CONSTANT_COLOR,[d_]:s.ONE_MINUS_CONSTANT_COLOR,[f_]:s.CONSTANT_ALPHA,[h_]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(j,we,fe,he,Ce,Ke,ht,Ot,jt,_t){if(j===gr){A===!0&&(Se(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),j!==Kv){if(j!==T||_t!==q){if((x!==jr||R!==jr)&&(s.blendEquation(s.FUNC_ADD),x=jr,R=jr),_t)switch(j){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.ONE,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}v=null,N=null,L=null,G=null,F.set(0,0,0),k=0,T=j,q=_t}return}Ce=Ce||we,Ke=Ke||fe,ht=ht||he,(we!==x||Ce!==R)&&(s.blendEquationSeparate(lt[we],lt[Ce]),x=we,R=Ce),(fe!==v||he!==N||Ke!==L||ht!==G)&&(s.blendFuncSeparate(O[fe],O[he],O[Ke],O[ht]),v=fe,N=he,L=Ke,G=ht),(Ot.equals(F)===!1||jt!==k)&&(s.blendColor(Ot.r,Ot.g,Ot.b,jt),F.copy(Ot),k=jt),T=j,q=!1}function vt(j,we){j.side===gi?Se(s.CULL_FACE):xe(s.CULL_FACE);let fe=j.side===An;we&&(fe=!fe),Mt(fe),j.blending===ks&&j.transparent===!1?Rt(gr):Rt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const he=j.stencilWrite;d.setTest(he),he&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),et(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(j){P!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),P=j)}function Xe(j){j!==qv?(xe(s.CULL_FACE),j!==C&&(j===Vp?s.cullFace(s.BACK):j===Yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),C=j}function Ut(j){j!==z&&(ce&&s.lineWidth(j),z=j)}function et(j,we,fe){j?(xe(s.POLYGON_OFFSET_FILL),(ne!==we||K!==fe)&&(s.polygonOffset(we,fe),ne=we,K=fe)):Se(s.POLYGON_OFFSET_FILL)}function nt(j){j?xe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function I(j){j===void 0&&(j=s.TEXTURE0+oe-1),H!==j&&(s.activeTexture(j),H=j)}function w(j,we,fe){fe===void 0&&(H===null?fe=s.TEXTURE0+oe-1:fe=H);let he=de[fe];he===void 0&&(he={type:void 0,texture:void 0},de[fe]=he),(he.type!==j||he.texture!==we)&&(H!==fe&&(s.activeTexture(fe),H=fe),s.bindTexture(j,we||ue[j]),he.type=j,he.texture=we)}function re(){const j=de[H];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(j){ie.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ie.copy(j))}function Oe(j){Le.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Le.copy(j))}function it(j,we){let fe=p.get(we);fe===void 0&&(fe=new WeakMap,p.set(we,fe));let he=fe.get(j);he===void 0&&(he=s.getUniformBlockIndex(we,j.name),fe.set(j,he))}function st(j,we){const he=p.get(we).get(j);u.get(we)!==he&&(s.uniformBlockBinding(we,he,j.__bindingPointIndex),u.set(we,he))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},H=null,de={},_={},S=new WeakMap,y=[],M=null,A=!1,T=null,x=null,v=null,N=null,R=null,L=null,G=null,F=new gt(0,0,0),k=0,q=!1,P=null,C=null,z=null,ne=null,K=null,ie.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:xe,disable:Se,bindFramebuffer:Ae,drawBuffers:Ue,useProgram:Re,setBlending:Rt,setMaterial:vt,setFlipSided:Mt,setCullFace:Xe,setLineWidth:Ut,setPolygonOffset:et,setScissorTest:nt,activeTexture:I,bindTexture:w,unbindTexture:re,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:De,texImage3D:ft,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:rt,texStorage3D:Me,texSubImage2D:me,texSubImage3D:qe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:ke,scissor:Je,viewport:Oe,reset:At}}function km(s,e,n,r){const o=zE(r);switch(n){case ig:return s*e;case sg:return s*e;case ag:return s*e*2;case og:return s*e/o.components*o.byteLength;case qd:return s*e/o.components*o.byteLength;case lg:return s*e*2/o.components*o.byteLength;case Yd:return s*e*2/o.components*o.byteLength;case rg:return s*e*3/o.components*o.byteLength;case oi:return s*e*4/o.components*o.byteLength;case $d:return s*e*4/o.components*o.byteLength;case Rl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:case md:return Math.max(s,16)*Math.max(e,8)/4;case fd:case pd:return Math.max(s,8)*Math.max(e,8)/2;case gd:case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Dd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cg:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fd:case kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zE(s){switch(s){case Oi:case eg:return{byteLength:1,components:1};case Ga:case tg:case ja:return{byteLength:2,components:1};case Wd:case Xd:return{byteLength:2,components:4};case Yr:case jd:case Fi:return{byteLength:4,components:1};case ng:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function HE(s,e,n,r,o,c,d){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new pt,_=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,w){return M?new OffscreenCanvas(I,w):zl("canvas")}function T(I,w,re){let pe=1;const ve=nt(I);if((ve.width>re||ve.height>re)&&(pe=re/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const me=Math.floor(pe*ve.width),qe=Math.floor(pe*ve.height);S===void 0&&(S=A(me,qe));const Pe=w?A(me,qe):S;return Pe.width=me,Pe.height=qe,Pe.getContext("2d").drawImage(I,0,0,me,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+me+"x"+qe+")."),Pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function x(I){return I.generateMipmaps&&I.minFilter!==$n&&I.minFilter!==ai}function v(I){s.generateMipmap(I)}function N(I,w,re,pe,ve=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me=w;if(w===s.RED&&(re===s.FLOAT&&(me=s.R32F),re===s.HALF_FLOAT&&(me=s.R16F),re===s.UNSIGNED_BYTE&&(me=s.R8)),w===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(me=s.R8UI),re===s.UNSIGNED_SHORT&&(me=s.R16UI),re===s.UNSIGNED_INT&&(me=s.R32UI),re===s.BYTE&&(me=s.R8I),re===s.SHORT&&(me=s.R16I),re===s.INT&&(me=s.R32I)),w===s.RG&&(re===s.FLOAT&&(me=s.RG32F),re===s.HALF_FLOAT&&(me=s.RG16F),re===s.UNSIGNED_BYTE&&(me=s.RG8)),w===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(me=s.RG8UI),re===s.UNSIGNED_SHORT&&(me=s.RG16UI),re===s.UNSIGNED_INT&&(me=s.RG32UI),re===s.BYTE&&(me=s.RG8I),re===s.SHORT&&(me=s.RG16I),re===s.INT&&(me=s.RG32I)),w===s.RGB&&re===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),w===s.RGBA){const qe=ve?Fl:Et.getTransfer(pe);re===s.FLOAT&&(me=s.RGBA32F),re===s.HALF_FLOAT&&(me=s.RGBA16F),re===s.UNSIGNED_BYTE&&(me=qe===Dt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function R(I,w){let re;return I?w===null||w===Yr||w===Vs?re=s.DEPTH24_STENCIL8:w===Fi?re=s.DEPTH32F_STENCIL8:w===Ga&&(re=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yr||w===Vs?re=s.DEPTH_COMPONENT24:w===Fi?re=s.DEPTH_COMPONENT32F:w===Ga&&(re=s.DEPTH_COMPONENT16),re}function L(I,w){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==$n&&I.minFilter!==ai?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function G(I){const w=I.target;w.removeEventListener("dispose",G),k(w),w.isVideoTexture&&_.delete(w)}function F(I){const w=I.target;w.removeEventListener("dispose",F),P(w)}function k(I){const w=r.get(I);if(w.__webglInit===void 0)return;const re=I.source,pe=y.get(re);if(pe){const ve=pe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(I),Object.keys(pe).length===0&&y.delete(re)}r.remove(I)}function q(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const re=I.source,pe=y.get(re);delete pe[w.__cacheKey],d.memory.textures--}function P(I){const w=r.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ve=0;ve<w.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const re=I.textures;for(let pe=0,ve=re.length;pe<ve;pe++){const me=r.get(re[pe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),d.memory.textures--),r.remove(re[pe])}r.remove(I)}let C=0;function z(){C=0}function ne(){const I=C;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),C+=1,I}function K(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function oe(I,w){const re=r.get(I);if(I.isVideoTexture&&Ut(I),I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){const pe=I.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(re,I,w);return}}n.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+w)}function ce(I,w){const re=r.get(I);if(I.version>0&&re.__version!==I.version){Le(re,I,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+w)}function se(I,w){const re=r.get(I);if(I.version>0&&re.__version!==I.version){Le(re,I,w);return}n.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+w)}function le(I,w){const re=r.get(I);if(I.version>0&&re.__version!==I.version){Q(re,I,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+w)}const H={[ud]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[dd]:s.MIRRORED_REPEAT},de={[$n]:s.NEAREST,[P_]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Pu]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},ae={[I_]:s.NEVER,[z_]:s.ALWAYS,[U_]:s.LESS,[dg]:s.LEQUAL,[F_]:s.EQUAL,[B_]:s.GEQUAL,[k_]:s.GREATER,[O_]:s.NOTEQUAL};function U(I,w){if(w.type===Fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ai||w.magFilter===Pu||w.magFilter===sl||w.magFilter===qr||w.minFilter===ai||w.minFilter===Pu||w.minFilter===sl||w.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,H[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,H[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,H[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,de[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,de[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$n||w.minFilter!==sl&&w.minFilter!==qr||w.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ie(I,w){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",G));const pe=w.source;let ve=y.get(pe);ve===void 0&&(ve={},y.set(pe,ve));const me=K(w);if(me!==I.__cacheKey){ve[me]===void 0&&(ve[me]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,re=!0),ve[me].usedTimes++;const qe=ve[I.__cacheKey];qe!==void 0&&(ve[I.__cacheKey].usedTimes--,qe.usedTimes===0&&q(w)),I.__cacheKey=me,I.__webglTexture=ve[me].texture}return re}function Le(I,w,re){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=ie(I,w),me=w.source;n.bindTexture(pe,I.__webglTexture,s.TEXTURE0+re);const qe=r.get(me);if(me.version!==qe.__version||ve===!0){n.activeTexture(s.TEXTURE0+re);const Pe=Et.getPrimaries(Et.workingColorSpace),ke=w.colorSpace===mr?null:Et.getPrimaries(w.colorSpace),rt=w.colorSpace===mr||Pe===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=T(w.image,!1,o.maxTextureSize);Me=et(w,Me);const De=c.convert(w.format,w.colorSpace),ft=c.convert(w.type);let Je=N(w.internalFormat,De,ft,w.colorSpace,w.isVideoTexture);U(pe,w);let Oe;const it=w.mipmaps,st=w.isVideoTexture!==!0,At=qe.__version===void 0||ve===!0,j=me.dataReady,we=L(w,Me);if(w.isDepthTexture)Je=R(w.format===Gs,w.type),At&&(st?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,De,ft,null));else if(w.isDataTexture)if(it.length>0){st&&At&&n.texStorage2D(s.TEXTURE_2D,we,Je,it[0].width,it[0].height);for(let fe=0,he=it.length;fe<he;fe++)Oe=it[fe],st?j&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,De,ft,Oe.data):n.texImage2D(s.TEXTURE_2D,fe,Je,Oe.width,Oe.height,0,De,ft,Oe.data);w.generateMipmaps=!1}else st?(At&&n.texStorage2D(s.TEXTURE_2D,we,Je,Me.width,Me.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,De,ft,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,De,ft,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Je,it[0].width,it[0].height,Me.depth);for(let fe=0,he=it.length;fe<he;fe++)if(Oe=it[fe],w.format!==oi)if(De!==null)if(st){if(j)if(w.layerUpdates.size>0){const Ce=km(Oe.width,Oe.height,w.format,w.type);for(const Ke of w.layerUpdates){const ht=Oe.data.subarray(Ke*Ce/Oe.data.BYTES_PER_ELEMENT,(Ke+1)*Ce/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ke,Oe.width,Oe.height,1,De,ht,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Oe.width,Oe.height,Me.depth,De,Oe.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Je,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Oe.width,Oe.height,Me.depth,De,ft,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,Je,Oe.width,Oe.height,Me.depth,0,De,ft,Oe.data)}else{st&&At&&n.texStorage2D(s.TEXTURE_2D,we,Je,it[0].width,it[0].height);for(let fe=0,he=it.length;fe<he;fe++)Oe=it[fe],w.format!==oi?De!==null?st?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,De,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,Je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?j&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,De,ft,Oe.data):n.texImage2D(s.TEXTURE_2D,fe,Je,Oe.width,Oe.height,0,De,ft,Oe.data)}else if(w.isDataArrayTexture)if(st){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Je,Me.width,Me.height,Me.depth),j)if(w.layerUpdates.size>0){const fe=km(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const Ce=Me.data.subarray(he*fe/Me.data.BYTES_PER_ELEMENT,(he+1)*fe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,De,ft,Ce)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,ft,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,De,ft,Me.data);else if(w.isData3DTexture)st?(At&&n.texStorage3D(s.TEXTURE_3D,we,Je,Me.width,Me.height,Me.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,ft,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,De,ft,Me.data);else if(w.isFramebufferTexture){if(At)if(st)n.texStorage2D(s.TEXTURE_2D,we,Je,Me.width,Me.height);else{let fe=Me.width,he=Me.height;for(let Ce=0;Ce<we;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,Je,fe,he,0,De,ft,null),fe>>=1,he>>=1}}else if(it.length>0){if(st&&At){const fe=nt(it[0]);n.texStorage2D(s.TEXTURE_2D,we,Je,fe.width,fe.height)}for(let fe=0,he=it.length;fe<he;fe++)Oe=it[fe],st?j&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,De,ft,Oe):n.texImage2D(s.TEXTURE_2D,fe,Je,De,ft,Oe);w.generateMipmaps=!1}else if(st){if(At){const fe=nt(Me);n.texStorage2D(s.TEXTURE_2D,we,Je,fe.width,fe.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,ft,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,De,ft,Me);x(w)&&v(pe),qe.__version=me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Q(I,w,re){if(w.image.length!==6)return;const pe=ie(I,w),ve=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+re);const me=r.get(ve);if(ve.version!==me.__version||pe===!0){n.activeTexture(s.TEXTURE0+re);const qe=Et.getPrimaries(Et.workingColorSpace),Pe=w.colorSpace===mr?null:Et.getPrimaries(w.colorSpace),ke=w.colorSpace===mr||qe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!rt&&!Me?De[he]=T(w.image[he],!0,o.maxCubemapSize):De[he]=Me?w.image[he].image:w.image[he],De[he]=et(w,De[he]);const ft=De[0],Je=c.convert(w.format,w.colorSpace),Oe=c.convert(w.type),it=N(w.internalFormat,Je,Oe,w.colorSpace),st=w.isVideoTexture!==!0,At=me.__version===void 0||pe===!0,j=ve.dataReady;let we=L(w,ft);U(s.TEXTURE_CUBE_MAP,w);let fe;if(rt){st&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,ft.width,ft.height);for(let he=0;he<6;he++){fe=De[he].mipmaps;for(let Ce=0;Ce<fe.length;Ce++){const Ke=fe[Ce];w.format!==oi?Je!==null?st?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ke.width,Ke.height,Je,Ke.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,it,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ke.width,Ke.height,Je,Oe,Ke.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,it,Ke.width,Ke.height,0,Je,Oe,Ke.data)}}}else{if(fe=w.mipmaps,st&&At){fe.length>0&&we++;const he=nt(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,we,it,he.width,he.height)}for(let he=0;he<6;he++)if(Me){st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,Je,Oe,De[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,it,De[he].width,De[he].height,0,Je,Oe,De[he].data);for(let Ce=0;Ce<fe.length;Ce++){const ht=fe[Ce].image[he].image;st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,ht.width,ht.height,Je,Oe,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,it,ht.width,ht.height,0,Je,Oe,ht.data)}}else{st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Oe,De[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,it,Je,Oe,De[he]);for(let Ce=0;Ce<fe.length;Ce++){const Ke=fe[Ce];st?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,Je,Oe,Ke.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,it,Je,Oe,Ke.image[he])}}}x(w)&&v(s.TEXTURE_CUBE_MAP),me.__version=ve.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ue(I,w,re,pe,ve,me){const qe=c.convert(re.format,re.colorSpace),Pe=c.convert(re.type),ke=N(re.internalFormat,qe,Pe,re.colorSpace);if(!r.get(w).__hasExternalTextures){const Me=Math.max(1,w.width>>me),De=Math.max(1,w.height>>me);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,me,ke,Me,De,w.depth,0,qe,Pe,null):n.texImage2D(ve,me,ke,Me,De,0,qe,Pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),Xe(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,r.get(re).__webglTexture,0,Mt(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,r.get(re).__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(I,w,re){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const pe=w.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,me=R(w.stencilBuffer,ve),qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=Mt(w);Xe(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,me,w.width,w.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,I)}else{const pe=w.textures;for(let ve=0;ve<pe.length;ve++){const me=pe[ve],qe=c.convert(me.format,me.colorSpace),Pe=c.convert(me.type),ke=N(me.internalFormat,qe,Pe,me.colorSpace),rt=Mt(w);re&&Xe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,ke,w.width,w.height):Xe(w)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,ke,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ke,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe(w.depthTexture,0);const pe=r.get(w.depthTexture).__webglTexture,ve=Mt(w);if(w.depthTexture.format===Os)Xe(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Gs)Xe(w)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ae(I){const w=r.get(I),re=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=pe}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Se(w.__webglFramebuffer,I)}else if(re){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[pe],I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(I,w,re){const pe=r.get(I);w!==void 0&&ue(pe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Ae(I)}function Re(I){const w=I.texture,re=r.get(I),pe=r.get(w);I.addEventListener("dispose",F);const ve=I.textures,me=I.isWebGLCubeRenderTarget===!0,qe=ve.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,d.memory.textures++),me){re.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(w.mipmaps&&w.mipmaps.length>0){re.__webglFramebuffer[Pe]=[];for(let ke=0;ke<w.mipmaps.length;ke++)re.__webglFramebuffer[Pe][ke]=s.createFramebuffer()}else re.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){re.__webglFramebuffer=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)re.__webglFramebuffer[Pe]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Pe=0,ke=ve.length;Pe<ke;Pe++){const rt=r.get(ve[Pe]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&Xe(I)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ve.length;Pe++){const ke=ve[Pe];re.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Pe]);const rt=c.convert(ke.format,ke.colorSpace),Me=c.convert(ke.type),De=N(ke.internalFormat,rt,Me,ke.colorSpace,I.isXRRenderTarget===!0),ft=Mt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,De,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,re.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(re.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),U(s.TEXTURE_CUBE_MAP,w);for(let Pe=0;Pe<6;Pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)ue(re.__webglFramebuffer[Pe][ke],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ke);else ue(re.__webglFramebuffer[Pe],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(w)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Pe=0,ke=ve.length;Pe<ke;Pe++){const rt=ve[Pe],Me=r.get(rt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),U(s.TEXTURE_2D,rt),ue(re.__webglFramebuffer,I,rt,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),x(rt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,pe.__webglTexture),U(Pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)ue(re.__webglFramebuffer[ke],I,w,s.COLOR_ATTACHMENT0,Pe,ke);else ue(re.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,Pe,0);x(w)&&v(Pe),n.unbindTexture()}I.depthBuffer&&Ae(I)}function lt(I){const w=I.textures;for(let re=0,pe=w.length;re<pe;re++){const ve=w[re];if(x(ve)){const me=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,qe=r.get(ve).__webglTexture;n.bindTexture(me,qe),v(me),n.unbindTexture()}}}const O=[],Rt=[];function vt(I){if(I.samples>0){if(Xe(I)===!1){const w=I.textures,re=I.width,pe=I.height;let ve=s.COLOR_BUFFER_BIT;const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(I),Pe=w.length>1;if(Pe)for(let ke=0;ke<w.length;ke++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const rt=r.get(w[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,re,pe,0,0,re,pe,ve,s.NEAREST),p===!0&&(O.length=0,Rt.length=0,O.push(s.COLOR_ATTACHMENT0+ke),I.depthBuffer&&I.resolveDepthBuffer===!1&&(O.push(me),Rt.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let ke=0;ke<w.length;ke++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const rt=r.get(w[ke]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,rt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Mt(I){return Math.min(o.maxSamples,I.samples)}function Xe(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ut(I){const w=d.render.frame;_.get(I)!==w&&(_.set(I,w),I.update())}function et(I,w){const re=I.colorSpace,pe=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==yr&&re!==mr&&(Et.getTransfer(re)===Dt?(pe!==oi||ve!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),w}function nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(g.width=I.naturalWidth||I.width,g.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(g.width=I.displayWidth,g.height=I.displayHeight):(g.width=I.width,g.height=I.height),g}this.allocateTextureUnit=ne,this.resetTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=ce,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=Ue,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Xe}function VE(s,e){function n(r,o=mr){let c;const d=Et.getTransfer(o);if(r===Oi)return s.UNSIGNED_BYTE;if(r===Wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ng)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===eg)return s.BYTE;if(r===tg)return s.SHORT;if(r===Ga)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===Yr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===ja)return s.HALF_FLOAT;if(r===ig)return s.ALPHA;if(r===rg)return s.RGB;if(r===oi)return s.RGBA;if(r===sg)return s.LUMINANCE;if(r===ag)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===og)return s.RED;if(r===qd)return s.RED_INTEGER;if(r===lg)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===$d)return s.RGBA_INTEGER;if(r===Rl||r===Pl||r===Nl||r===Ll)if(d===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Rl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Rl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fd||r===hd||r===pd||r===md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gd||r===vd||r===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===gd||r===vd)return d===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xd||r===yd||r===Sd||r===Md||r===Ed||r===wd||r===Td||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Nd||r===Ld)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===xd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Md)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ed)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Td)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ad)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===Dd||r===Id)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Dl)return d===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cg||r===Ud||r===Fd||r===kd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Dl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class GE extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jE={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const u=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,r),v=this._getHandJoint(g,T);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=g.joints["index-finger-tip"],S=g.joints["thumb-tip"],y=_.position.distanceTo(S.position),M=.02,A=.005;g.inputState.pinching&&y>M+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(jE)))}return u!==null&&(u.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ba;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const WE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Cn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new xr({vertexShader:WE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new Wl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends Ws{constructor(e,n){super();const r=this;let o=null,c=1,d=null,u="local-floor",p=1,g=null,_=null,S=null,y=null,M=null,A=null;const T=new qE,x=n.getContextAttributes();let v=null,N=null;const R=[],L=[],G=new pt;let F=null;const k=new zn;k.layers.enable(1),k.viewport=new It;const q=new zn;q.layers.enable(2),q.viewport=new It;const P=[k,q],C=new GE;C.layers.enable(1),C.layers.enable(2);let z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=R[Q];return ue===void 0&&(ue=new id,R[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=R[Q];return ue===void 0&&(ue=new id,R[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=R[Q];return ue===void 0&&(ue=new id,R[Q]=ue),ue.getHandSpace()};function K(Q){const ue=L.indexOf(Q.inputSource);if(ue===-1)return;const xe=R[ue];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,g||d),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<R.length;Q++){const ue=L[Q];ue!==null&&(L[Q]=null,R[Q].disconnect(ue))}z=null,ne=null,T.reset(),e.setRenderTarget(v),M=null,y=null,S=null,o=null,N=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0){const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ue),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new $r(M.framebufferWidth,M.framebufferHeight,{format:oi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,xe=null,Se=null;x.depth&&(Se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=x.stencil?Gs:Os,xe=x.stencil?Vs:Yr);const Ae={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:c};S=new XRWebGLBinding(o,n),y=S.createProjectionLayer(Ae),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new $r(y.textureWidth,y.textureHeight,{format:oi,type:Oi,depthTexture:new Tg(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),g=null,d=await o.requestReferenceSpace(u),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ce(Q){for(let ue=0;ue<Q.removed.length;ue++){const xe=Q.removed[ue],Se=L.indexOf(xe);Se>=0&&(L[Se]=null,R[Se].disconnect(xe))}for(let ue=0;ue<Q.added.length;ue++){const xe=Q.added[ue];let Se=L.indexOf(xe);if(Se===-1){for(let Ue=0;Ue<R.length;Ue++)if(Ue>=L.length){L.push(xe),Se=Ue;break}else if(L[Ue]===null){L[Ue]=xe,Se=Ue;break}if(Se===-1)break}const Ae=R[Se];Ae&&Ae.connect(xe)}}const se=new $,le=new $;function H(Q,ue,xe){se.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const Se=se.distanceTo(le),Ae=ue.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,Re=Ae[14]/(Ae[10]-1),lt=Ae[14]/(Ae[10]+1),O=(Ae[9]+1)/Ae[5],Rt=(Ae[9]-1)/Ae[5],vt=(Ae[8]-1)/Ae[0],Mt=(Ue[8]+1)/Ue[0],Xe=Re*vt,Ut=Re*Mt,et=Se/(-vt+Mt),nt=et*-vt;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(nt),Q.translateZ(et),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const I=Re+et,w=lt+et,re=Xe-nt,pe=Ut+(Se-nt),ve=O*lt/w*I,me=Rt*lt/w*I;Q.projectionMatrix.makePerspective(re,pe,ve,me,I,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ue=Q.near,xe=Q.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(xe=T.depthFar)),C.near=q.near=k.near=ue,C.far=q.far=k.far=xe,(z!==C.near||ne!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ne=C.far);const Se=Q.parent,Ae=C.cameras;de(C,Se);for(let Ue=0;Ue<Ae.length;Ue++)de(Ae[Ue],Se);Ae.length===2?H(C,k,q):C.projectionMatrix.copy(k.projectionMatrix),ae(Q,C,Se)};function ae(Q,ue,xe){xe===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Od*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(Q){p=Q,y!==null&&(y.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let U=null;function ie(Q,ue){if(_=ue.getViewerPose(g||d),A=ue,_!==null){const xe=_.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Se=!1;xe.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ue=0;Ue<xe.length;Ue++){const Re=xe[Ue];let lt=null;if(M!==null)lt=M.getViewport(Re);else{const Rt=S.getViewSubImage(y,Re);lt=Rt.viewport,Ue===0&&(e.setRenderTargetTextures(N,Rt.colorTexture,y.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(N))}let O=P[Ue];O===void 0&&(O=new zn,O.layers.enable(Ue),O.viewport=new It,P[Ue]=O),O.matrix.fromArray(Re.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Re.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(lt.x,lt.y,lt.width,lt.height),Ue===0&&(C.matrix.copy(O.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(O)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=S.getDepthInformation(xe[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,o.renderState)}}for(let xe=0;xe<R.length;xe++){const Se=L[xe],Ae=R[xe];Se!==null&&Ae!==void 0&&Ae.update(Se,ue,g||d)}U&&U(Q,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),A=null}const Le=new Eg;Le.setAnimationLoop(ie),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Hr=new _i,$E=new Ht;function KE(s,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,yg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,N,R,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),S(x,v)):v.isMeshPhongMaterial?(c(x,v),_(x,v)):v.isMeshStandardMaterial?(c(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,L)):v.isMeshMatcapMaterial?(c(x,v),A(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),T(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(d(x,v),v.isLineDashedMaterial&&u(x,v)):v.isPointsMaterial?p(x,v,N,R):v.isSpriteMaterial?g(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===An&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===An&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const N=e.get(v),R=N.envMap,L=N.envMapRotation;R&&(x.envMap.value=R,Hr.copy(L),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(Hr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function u(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,N,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*N,x.scale.value=R*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,N){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===An&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function T(x,v){const N=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ZE(s,e,n,r){let o={},c={},d=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,R){const L=R.program;r.uniformBlockBinding(N,L)}function g(N,R){let L=o[N.id];L===void 0&&(A(N),L=_(N),o[N.id]=L,N.addEventListener("dispose",x));const G=R.program;r.updateUBOMapping(N,G);const F=e.render.frame;c[N.id]!==F&&(y(N),c[N.id]=F)}function _(N){const R=S();N.__bindingPointIndex=R;const L=s.createBuffer(),G=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,L),L}function S(){for(let N=0;N<u;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const R=o[N.id],L=N.uniforms,G=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let F=0,k=L.length;F<k;F++){const q=Array.isArray(L[F])?L[F]:[L[F]];for(let P=0,C=q.length;P<C;P++){const z=q[P];if(M(z,F,P,G)===!0){const ne=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let ce=0;ce<K.length;ce++){const se=K[ce],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ne+oe,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,oe),oe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(N,R,L,G){const F=N.value,k=R+"_"+L;if(G[k]===void 0)return typeof F=="number"||typeof F=="boolean"?G[k]=F:G[k]=F.clone(),!0;{const q=G[k];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return G[k]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function A(N){const R=N.uniforms;let L=0;const G=16;for(let k=0,q=R.length;k<q;k++){const P=Array.isArray(R[k])?R[k]:[R[k]];for(let C=0,z=P.length;C<z;C++){const ne=P[C],K=Array.isArray(ne.value)?ne.value:[ne.value];for(let oe=0,ce=K.length;oe<ce;oe++){const se=K[oe],le=T(se),H=L%G,de=H%le.boundary,ae=H+de;L+=de,ae!==0&&G-ae<le.storage&&(L+=G-ae),ne.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=L,L+=le.storage}}}const F=L%G;return F>0&&(L+=G-F),N.__size=L,N.__cache={},this}function T(N){const R={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function x(N){const R=N.target;R.removeEventListener("dispose",x);const L=d.indexOf(R.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function v(){for(const N in o)s.deleteBuffer(o[N]);d=[],o={},c={}}return{bind:p,update:g,dispose:v}}class QE{constructor(e={}){const{canvas:n=V_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:u=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const M=new Uint32Array(4),A=new Int32Array(4);let T=null,x=null;const v=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=vr,this.toneMappingExposure=1;const R=this;let L=!1,G=0,F=0,k=null,q=-1,P=null;const C=new It,z=new It;let ne=null;const K=new gt(0);let oe=0,ce=n.width,se=n.height,le=1,H=null,de=null;const ae=new It(0,0,ce,se),U=new It(0,0,ce,se);let ie=!1;const Le=new Zd;let Q=!1,ue=!1;const xe=new Ht,Se=new $,Ae=new It,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function lt(){return k===null?le:1}let O=r;function Rt(b,W){return n.getContext(b,W)}try{const b={alpha:!0,depth:o,stencil:c,antialias:u,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),O===null){const W="webgl2";if(O=Rt(W,b),O===null)throw Rt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let vt,Mt,Xe,Ut,et,nt,I,w,re,pe,ve,me,qe,Pe,ke,rt,Me,De,ft,Je,Oe,it,st,At;function j(){vt=new rM(O),vt.init(),it=new VE(O,vt),Mt=new QS(O,vt,e,it),Xe=new BE(O),Ut=new oM(O),et=new TE,nt=new HE(O,vt,Xe,et,Mt,it,Ut),I=new eM(R),w=new iM(R),re=new px(O),st=new KS(O,re),pe=new sM(O,re,Ut,st),ve=new cM(O,pe,re,Ut),ft=new lM(O,Mt,nt),rt=new JS(et),me=new wE(R,I,w,vt,Mt,st,rt),qe=new KE(R,et),Pe=new CE,ke=new DE(vt),De=new $S(R,I,w,Xe,ve,y,p),Me=new OE(R,ve,Mt),At=new ZE(O,Ut,Mt,Xe),Je=new ZS(O,vt,Ut),Oe=new aM(O,vt,Ut),Ut.programs=me.programs,R.capabilities=Mt,R.extensions=vt,R.properties=et,R.renderLists=Pe,R.shadowMap=Me,R.state=Xe,R.info=Ut}j();const we=new YE(R,O);this.xr=we,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(ce,se,!1))},this.getSize=function(b){return b.set(ce,se)},this.setSize=function(b,W,J=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=b,se=W,n.width=Math.floor(b*le),n.height=Math.floor(W*le),J===!0&&(n.style.width=b+"px",n.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(ce*le,se*le).floor()},this.setDrawingBufferSize=function(b,W,J){ce=b,se=W,le=J,n.width=Math.floor(b*J),n.height=Math.floor(W*J),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,W,J,ee){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,W,J,ee),Xe.viewport(C.copy(ae).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,W,J,ee){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,W,J,ee),Xe.scissor(z.copy(U).multiplyScalar(le).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){Xe.setScissorTest(ie=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,W=!0,J=!0){let ee=0;if(b){let X=!1;if(k!==null){const Te=k.texture.format;X=Te===$d||Te===Yd||Te===qd}if(X){const Te=k.texture.type,Ie=Te===Oi||Te===Yr||Te===Ga||Te===Vs||Te===Wd||Te===Xd,He=De.getClearColor(),be=De.getClearAlpha(),Qe=He.r,Ze=He.g,je=He.b;Ie?(M[0]=Qe,M[1]=Ze,M[2]=je,M[3]=be,O.clearBufferuiv(O.COLOR,0,M)):(A[0]=Qe,A[1]=Ze,A[2]=je,A[3]=be,O.clearBufferiv(O.COLOR,0,A))}else ee|=O.COLOR_BUFFER_BIT}W&&(ee|=O.DEPTH_BUFFER_BIT),J&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Pe.dispose(),ke.dispose(),et.dispose(),I.dispose(),w.dispose(),ve.dispose(),st.dispose(),At.dispose(),me.dispose(),we.dispose(),we.removeEventListener("sessionstart",Rn),we.removeEventListener("sessionend",Bi),Kn.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Ut.autoReset,W=Me.enabled,J=Me.autoUpdate,ee=Me.needsUpdate,X=Me.type;j(),Ut.autoReset=b,Me.enabled=W,Me.autoUpdate=J,Me.needsUpdate=ee,Me.type=X}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ke(b){const W=b.target;W.removeEventListener("dispose",Ke),ht(W)}function ht(b){Ot(b),et.remove(b)}function Ot(b){const W=et.get(b).programs;W!==void 0&&(W.forEach(function(J){me.releaseProgram(J)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,J,ee,X,Te){W===null&&(W=Ue);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,He=ql(b,W,J,ee,X);Xe.setMaterial(ee,Ie);let be=J.index,Qe=1;if(ee.wireframe===!0){if(be=pe.getWireframeAttribute(J),be===void 0)return;Qe=2}const Ze=J.drawRange,je=J.attributes.position;let mt=Ze.start*Qe,Ft=(Ze.start+Ze.count)*Qe;Te!==null&&(mt=Math.max(mt,Te.start*Qe),Ft=Math.min(Ft,(Te.start+Te.count)*Qe)),be!==null?(mt=Math.max(mt,0),Ft=Math.min(Ft,be.count)):je!=null&&(mt=Math.max(mt,0),Ft=Math.min(Ft,je.count));const Pt=Ft-mt;if(Pt<0||Pt===1/0)return;st.setup(X,ee,He,J,be);let Qt,at=Je;if(be!==null&&(Qt=re.get(be),at=Oe,at.setIndex(Qt)),X.isMesh)ee.wireframe===!0?(Xe.setLineWidth(ee.wireframeLinewidth*lt()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(X.isLine){let We=ee.linewidth;We===void 0&&(We=1),Xe.setLineWidth(We*lt()),X.isLineSegments?at.setMode(O.LINES):X.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else X.isPoints?at.setMode(O.POINTS):X.isSprite&&at.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const We=X._multiDrawStarts,wt=X._multiDrawCounts,yt=X._multiDrawCount,Pn=be?re.get(be).bytesPerElement:1,Vi=et.get(ee).currentProgram.getUniforms();for(let Jt=0;Jt<yt;Jt++)Vi.setValue(O,"_gl_DrawID",Jt),at.render(We[Jt]/Pn,wt[Jt])}else if(X.isInstancedMesh)at.renderInstances(mt,Pt,X.count);else if(J.isInstancedBufferGeometry){const We=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,wt=Math.min(J.instanceCount,We);at.renderInstances(mt,Pt,wt)}else at.render(mt,Pt)};function jt(b,W,J){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,Hi(b,W,J),b.side=_r,b.needsUpdate=!0,Hi(b,W,J),b.side=gi):Hi(b,W,J)}this.compile=function(b,W,J=null){J===null&&(J=b),x=ke.get(J),x.init(W),N.push(x),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),b!==J&&b.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const ee=new Set;return b.traverse(function(X){const Te=X.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const He=Te[Ie];jt(He,J,X),ee.add(He)}else jt(Te,J,X),ee.add(Te)}),N.pop(),x=null,ee},this.compileAsync=function(b,W,J=null){const ee=this.compile(b,W,J);return new Promise(X=>{function Te(){if(ee.forEach(function(Ie){et.get(Ie).currentProgram.isReady()&&ee.delete(Ie)}),ee.size===0){X(b);return}setTimeout(Te,10)}vt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let _t=null;function bn(b){_t&&_t(b)}function Rn(){Kn.stop()}function Bi(){Kn.start()}const Kn=new Eg;Kn.setAnimationLoop(bn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){_t=b,we.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},we.addEventListener("sessionstart",Rn),we.addEventListener("sessionend",Bi),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,W,k),x=ke.get(b,N.length),x.init(W),N.push(x),xe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Le.setFromProjectionMatrix(xe),ue=this.localClippingEnabled,Q=rt.init(this.clippingPlanes,ue),T=Pe.get(b,v.length),T.init(),v.push(T),we.enabled===!0&&we.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&xi(Te,W,-1/0,R.sortObjects)}xi(b,W,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(H,de),Re=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Re&&De.addToRenderList(T,b),this.info.render.frame++,Q===!0&&rt.beginShadows();const J=x.state.shadowsArray;Me.render(J,b,W),Q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=T.opaque,X=T.transmissive;if(x.setupLights(),W.isArrayCamera){const Te=W.cameras;if(X.length>0)for(let Ie=0,He=Te.length;Ie<He;Ie++){const be=Te[Ie];zi(ee,X,b,be)}Re&&De.render(b);for(let Ie=0,He=Te.length;Ie<He;Ie++){const be=Te[Ie];Ya(T,b,be,be.viewport)}}else X.length>0&&zi(ee,X,b,W),Re&&De.render(b),Ya(T,b,W);k!==null&&(nt.updateMultisampleRenderTarget(k),nt.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(R,b,W),st.resetDefaultState(),q=-1,P=null,N.pop(),N.length>0?(x=N[N.length-1],Q===!0&&rt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function xi(b,W,J,ee){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Le.intersectsSprite(b)){ee&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const Ie=ve.update(b),He=b.material;He.visible&&T.push(b,Ie,He,J,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Le.intersectsObject(b))){const Ie=ve.update(b),He=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ae.copy(Ie.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(He)){const be=Ie.groups;for(let Qe=0,Ze=be.length;Qe<Ze;Qe++){const je=be[Qe],mt=He[je.materialIndex];mt&&mt.visible&&T.push(b,Ie,mt,J,Ae.z,je)}}else He.visible&&T.push(b,Ie,He,J,Ae.z,null)}}const Te=b.children;for(let Ie=0,He=Te.length;Ie<He;Ie++)xi(Te[Ie],W,J,ee)}function Ya(b,W,J,ee){const X=b.opaque,Te=b.transmissive,Ie=b.transparent;x.setupLightsView(J),Q===!0&&rt.setGlobalState(R.clippingPlanes,J),ee&&Xe.viewport(C.copy(ee)),X.length>0&&yi(X,W,J),Te.length>0&&yi(Te,W,J),Ie.length>0&&yi(Ie,W,J),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function zi(b,W,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new $r(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?ja:Oi,minFilter:qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ee.id],Ie=ee.viewport||C;Te.setSize(Ie.z,Ie.w);const He=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(K),oe=R.getClearAlpha(),oe<1&&R.setClearColor(16777215,.5),R.clear(),Re&&De.render(J);const be=R.toneMapping;R.toneMapping=vr;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),Q===!0&&rt.setGlobalState(R.clippingPlanes,ee),yi(b,J,ee),nt.updateMultisampleRenderTarget(Te),nt.updateRenderTargetMipmap(Te),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,mt=W.length;je<mt;je++){const Ft=W[je],Pt=Ft.object,Qt=Ft.geometry,at=Ft.material,We=Ft.group;if(at.side===gi&&Pt.layers.test(ee.layers)){const wt=at.side;at.side=An,at.needsUpdate=!0,Sr(Pt,J,ee,Qt,at,We),at.side=wt,at.needsUpdate=!0,Ze=!0}}Ze===!0&&(nt.updateMultisampleRenderTarget(Te),nt.updateRenderTargetMipmap(Te))}R.setRenderTarget(He),R.setClearColor(K,oe),Qe!==void 0&&(ee.viewport=Qe),R.toneMapping=be}function yi(b,W,J){const ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Te=b.length;X<Te;X++){const Ie=b[X],He=Ie.object,be=Ie.geometry,Qe=ee===null?Ie.material:ee,Ze=Ie.group;He.layers.test(J.layers)&&Sr(He,W,J,be,Qe,Ze)}}function Sr(b,W,J,ee,X,Te){b.onBeforeRender(R,W,J,ee,X,Te),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,W,J,ee,b,Te),X.transparent===!0&&X.side===gi&&X.forceSinglePass===!1?(X.side=An,X.needsUpdate=!0,R.renderBufferDirect(J,W,ee,X,b,Te),X.side=_r,X.needsUpdate=!0,R.renderBufferDirect(J,W,ee,X,b,Te),X.side=gi):R.renderBufferDirect(J,W,ee,X,b,Te),b.onAfterRender(R,W,J,ee,X,Te)}function Hi(b,W,J){W.isScene!==!0&&(W=Ue);const ee=et.get(b),X=x.state.lights,Te=x.state.shadowsArray,Ie=X.state.version,He=me.getParameters(b,X.state,Te,W,J),be=me.getProgramCacheKey(He);let Qe=ee.programs;ee.environment=b.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(b.isMeshStandardMaterial?w:I).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",Ke),Qe=new Map,ee.programs=Qe);let Ze=Qe.get(be);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===Ie)return Ka(b,He),Ze}else He.uniforms=me.getUniforms(b),b.onBeforeCompile(He,R),Ze=me.acquireProgram(He,be),Qe.set(be,Ze),ee.uniforms=He.uniforms;const je=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=rt.uniform),Ka(b,He),ee.needsLights=Za(b),ee.lightsStateVersion=Ie,ee.needsLights&&(je.ambientLightColor.value=X.state.ambient,je.lightProbe.value=X.state.probe,je.directionalLights.value=X.state.directional,je.directionalLightShadows.value=X.state.directionalShadow,je.spotLights.value=X.state.spot,je.spotLightShadows.value=X.state.spotShadow,je.rectAreaLights.value=X.state.rectArea,je.ltc_1.value=X.state.rectAreaLTC1,je.ltc_2.value=X.state.rectAreaLTC2,je.pointLights.value=X.state.point,je.pointLightShadows.value=X.state.pointShadow,je.hemisphereLights.value=X.state.hemi,je.directionalShadowMap.value=X.state.directionalShadowMap,je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,je.spotShadowMap.value=X.state.spotShadowMap,je.spotLightMatrix.value=X.state.spotLightMatrix,je.spotLightMap.value=X.state.spotLightMap,je.pointShadowMap.value=X.state.pointShadowMap,je.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function $a(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=Il.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ka(b,W){const J=et.get(b);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function ql(b,W,J,ee,X){W.isScene!==!0&&(W=Ue),nt.resetTextureUnits();const Te=W.fog,Ie=ee.isMeshStandardMaterial?W.environment:null,He=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:yr,be=(ee.isMeshStandardMaterial?w:I).get(ee.envMap||Ie),Qe=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ze=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,Ft=!!J.morphAttributes.color;let Pt=vr;ee.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=R.toneMapping);const Qt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,at=Qt!==void 0?Qt.length:0,We=et.get(ee),wt=x.state.lights;if(Q===!0&&(ue===!0||b!==P)){const vn=b===P&&ee.id===q;rt.setState(ee,b,vn)}let yt=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==wt.state.version||We.outputColorSpace!==He||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==be||ee.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==rt.numPlanes||We.numIntersection!==rt.numIntersection)||We.vertexAlphas!==Qe||We.vertexTangents!==Ze||We.morphTargets!==je||We.morphNormals!==mt||We.morphColors!==Ft||We.toneMapping!==Pt||We.morphTargetsCount!==at)&&(yt=!0):(yt=!0,We.__version=ee.version);let Pn=We.currentProgram;yt===!0&&(Pn=Hi(ee,W,X));let Vi=!1,Jt=!1,Gi=!1;const Ct=Pn.getUniforms(),Nn=We.uniforms;if(Xe.useProgram(Pn.program)&&(Vi=!0,Jt=!0,Gi=!0),ee.id!==q&&(q=ee.id,Jt=!0),Vi||P!==b){Ct.setValue(O,"projectionMatrix",b.projectionMatrix),Ct.setValue(O,"viewMatrix",b.matrixWorldInverse);const vn=Ct.map.cameraPosition;vn!==void 0&&vn.setValue(O,Se.setFromMatrixPosition(b.matrixWorld)),Mt.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,Jt=!0,Gi=!0)}if(X.isSkinnedMesh){Ct.setOptional(O,X,"bindMatrix"),Ct.setOptional(O,X,"bindMatrixInverse");const vn=X.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ct.setValue(O,"boneTexture",vn.boneTexture,nt))}X.isBatchedMesh&&(Ct.setOptional(O,X,"batchingTexture"),Ct.setValue(O,"batchingTexture",X._matricesTexture,nt),Ct.setOptional(O,X,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",X._indirectTexture,nt),Ct.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",X._colorsTexture,nt));const Ys=J.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&ft.update(X,J,Pn),(Jt||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Ct.setValue(O,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Nn.envMap.value=be,Nn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Jt&&(Ct.setValue(O,"toneMappingExposure",R.toneMappingExposure),We.needsLights&&Si(Nn,Gi),Te&&ee.fog===!0&&qe.refreshFogUniforms(Nn,Te),qe.refreshMaterialUniforms(Nn,ee,le,se,x.state.transmissionRenderTarget[b.id]),Il.upload(O,$a(We),Nn,nt)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Il.upload(O,$a(We),Nn,nt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ct.setValue(O,"center",X.center),Ct.setValue(O,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(O,"normalMatrix",X.normalMatrix),Ct.setValue(O,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let Mr=0,Qa=vn.length;Mr<Qa;Mr++){const Kr=vn[Mr];At.update(Kr,Pn),At.bind(Kr,Pn)}}return Pn}function Si(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Za(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,W,J){et.get(b.texture).__webglTexture=W,et.get(b.depthTexture).__webglTexture=J;const ee=et.get(b);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const J=et.get(b);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,J=0){k=b,G=W,F=J;let ee=!0,X=null,Te=!1,Ie=!1;if(b){const be=et.get(b);if(be.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(be.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(be.__hasExternalTextures)nt.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(be.__boundDepthTexture!==je){if(je!==null&&et.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}const Qe=b.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ie=!0);const Ze=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?X=Ze[W][J]:X=Ze[W],Te=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?X=et.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[J]:X=Ze,C.copy(b.viewport),z.copy(b.scissor),ne=b.scissorTest}else C.copy(ae).multiplyScalar(le).floor(),z.copy(U).multiplyScalar(le).floor(),ne=ie;if(Xe.bindFramebuffer(O.FRAMEBUFFER,X)&&ee&&Xe.drawBuffers(b,X),Xe.viewport(C),Xe.scissor(z),Xe.setScissorTest(ne),Te){const be=et.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,be.__webglTexture,J)}else if(Ie){const be=et.get(b.texture),Qe=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,J||0,Qe)}q=-1},this.readRenderTargetPixels=function(b,W,J,ee,X,Te,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){Xe.bindFramebuffer(O.FRAMEBUFFER,He);try{const be=b.texture,Qe=be.format,Ze=be.type;if(!Mt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ee&&J>=0&&J<=b.height-X&&O.readPixels(W,J,ee,X,it.convert(Qe),it.convert(Ze),Te)}finally{const be=k!==null?et.get(k).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,W,J,ee,X,Te,Ie){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){Xe.bindFramebuffer(O.FRAMEBUFFER,He);try{const be=b.texture,Qe=be.format,Ze=be.type;if(!Mt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-ee&&J>=0&&J<=b.height-X){const je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(W,J,ee,X,it.convert(Qe),it.convert(Ze),0),O.flush();const mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await G_(O,mt,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te)}finally{O.deleteBuffer(je),O.deleteSync(mt)}return Te}}finally{const be=k!==null?et.get(k).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(b,W=null,J=0){b.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const ee=Math.pow(2,-J),X=Math.floor(b.image.width*ee),Te=Math.floor(b.image.height*ee),Ie=W!==null?W.x:0,He=W!==null?W.y:0;nt.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ie,He,X,Te),Xe.unbindTexture()},this.copyTextureToTexture=function(b,W,J=null,ee=null,X=0){b.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,b=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let Te,Ie,He,be,Qe,Ze;J!==null?(Te=J.max.x-J.min.x,Ie=J.max.y-J.min.y,He=J.min.x,be=J.min.y):(Te=b.image.width,Ie=b.image.height,He=0,be=0),ee!==null?(Qe=ee.x,Ze=ee.y):(Qe=0,Ze=0);const je=it.convert(W.format),mt=it.convert(W.type);nt.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ft=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qt=O.getParameter(O.UNPACK_SKIP_PIXELS),at=O.getParameter(O.UNPACK_SKIP_ROWS),We=O.getParameter(O.UNPACK_SKIP_IMAGES),wt=b.isCompressedTexture?b.mipmaps[X]:b.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,He),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,Qe,Ze,Te,Ie,je,mt,wt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,Qe,Ze,wt.width,wt.height,je,wt.data):O.texSubImage2D(O.TEXTURE_2D,X,Qe,Ze,Te,Ie,je,mt,wt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,at),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(b,W,J=null,ee=null,X=0){b.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,b=arguments[2],W=arguments[3],X=arguments[4]||0);let Te,Ie,He,be,Qe,Ze,je,mt,Ft;const Pt=b.isCompressedTexture?b.mipmaps[X]:b.image;J!==null?(Te=J.max.x-J.min.x,Ie=J.max.y-J.min.y,He=J.max.z-J.min.z,be=J.min.x,Qe=J.min.y,Ze=J.min.z):(Te=Pt.width,Ie=Pt.height,He=Pt.depth,be=0,Qe=0,Ze=0),ee!==null?(je=ee.x,mt=ee.y,Ft=ee.z):(je=0,mt=0,Ft=0);const Qt=it.convert(W.format),at=it.convert(W.type);let We;if(W.isData3DTexture)nt.setTexture3D(W,0),We=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)nt.setTexture2DArray(W,0),We=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const wt=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),Vi=O.getParameter(O.UNPACK_SKIP_ROWS),Jt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze),b.isDataTexture||b.isData3DTexture?O.texSubImage3D(We,X,je,mt,Ft,Te,Ie,He,Qt,at,Pt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(We,X,je,mt,Ft,Te,Ie,He,Qt,Pt.data):O.texSubImage3D(We,X,je,mt,Ft,Te,Ie,He,Qt,at,Pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt),X===0&&W.generateMipmaps&&O.generateMipmap(We),Xe.unbindTexture()},this.initRenderTarget=function(b){et.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),Xe.unbindTexture()},this.resetState=function(){G=0,F=0,k=null,Xe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kd?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===Gl?"display-p3":"srgb"}}class Jd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=n}clone(){return new Jd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class JE extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Pg extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Om=new Ht,zd=new mg,Cl=new jl,bl=new $;class e1 extends on{constructor(e=new ci,n=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(o),Cl.radius+=c,e.ray.intersectsSphere(Cl)===!1)return;Om.copy(o).invert(),zd.copy(e.ray).applyMatrix4(Om);const u=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=u*u,g=r.index,S=r.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let A=y,T=M;A<T;A++){const x=g.getX(A);bl.fromBufferAttribute(S,x),Bm(bl,x,p,o,e,n,this)}}else{const y=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let A=y,T=M;A<T;A++)bl.fromBufferAttribute(S,A),Bm(bl,A,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const u=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}}function Bm(s,e,n,r,o,c,d){const u=zd.distanceSqToPoint(s);if(u<n){const p=new $;zd.closestPointToPoint(s,p),p.applyMatrix4(r);const g=o.ray.origin.distanceTo(p);if(g<o.near||g>o.far)return;c.push({distance:g,distanceToRay:Math.sqrt(u),point:p,index:e,face:null,object:d})}}class ef extends ci{constructor(e=1,n=1,r=1,o=32,c=1,d=!1,u=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:d,thetaStart:u,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const _=[],S=[],y=[],M=[];let A=0;const T=[],x=r/2;let v=0;N(),d===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Hn(S,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(M,2));function N(){const L=new $,G=new $;let F=0;const k=(n-e)/r;for(let q=0;q<=c;q++){const P=[],C=q/c,z=C*(n-e)+e;for(let ne=0;ne<=o;ne++){const K=ne/o,oe=K*p+u,ce=Math.sin(oe),se=Math.cos(oe);G.x=z*ce,G.y=-C*r+x,G.z=z*se,S.push(G.x,G.y,G.z),L.set(ce,k,se).normalize(),y.push(L.x,L.y,L.z),M.push(K,1-C),P.push(A++)}T.push(P)}for(let q=0;q<o;q++)for(let P=0;P<c;P++){const C=T[P][q],z=T[P+1][q],ne=T[P+1][q+1],K=T[P][q+1];_.push(C,z,K),_.push(z,ne,K),F+=6}g.addGroup(v,F,0),v+=F}function R(L){const G=A,F=new pt,k=new $;let q=0;const P=L===!0?e:n,C=L===!0?1:-1;for(let ne=1;ne<=o;ne++)S.push(0,x*C,0),y.push(0,C,0),M.push(.5,.5),A++;const z=A;for(let ne=0;ne<=o;ne++){const oe=ne/o*p+u,ce=Math.cos(oe),se=Math.sin(oe);k.x=P*se,k.y=x*C,k.z=P*ce,S.push(k.x,k.y,k.z),y.push(0,C,0),F.x=ce*.5+.5,F.y=se*.5*C+.5,M.push(F.x,F.y),A++}for(let ne=0;ne<o;ne++){const K=G+ne,oe=z+ne;L===!0?_.push(oe,oe+1,K):_.push(oe+1,oe,K),q+=3}g.addGroup(v,q,L===!0?1:2),v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tf extends ci{constructor(e=.5,n=1,r=32,o=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const u=[],p=[],g=[],_=[];let S=e;const y=(n-e)/o,M=new $,A=new pt;for(let T=0;T<=o;T++){for(let x=0;x<=r;x++){const v=c+x/r*d;M.x=S*Math.cos(v),M.y=S*Math.sin(v),p.push(M.x,M.y,M.z),g.push(0,0,1),A.x=(M.x/n+1)/2,A.y=(M.y/n+1)/2,_.push(A.x,A.y)}S+=y}for(let T=0;T<o;T++){const x=T*(r+1);for(let v=0;v<r;v++){const N=v+x,R=N,L=N+r+1,G=N+r+2,F=N+1;u.push(R,L,F),u.push(L,G,F)}}this.setIndex(u),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zm extends Xs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ug,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nf extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const rd=new Ht,Hm=new $,Vm=new $;class Ng{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gm=new Ht,Fa=new $,sd=new $;class t1 extends Ng{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Fa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Fa),sd.copy(r.position),sd.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(sd),r.updateMatrixWorld(),o.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Gm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gm)}}class n1 extends nf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new t1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i1 extends Ng{constructor(){super(new wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends nf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new i1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class r1 extends nf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);function s1({mob:s}){const e=ot.useRef(null);return ot.useEffect(()=>{const n=e.current;if(!n)return;let r,o,c;const d=setTimeout(()=>{const u=n.clientWidth||280,p=n.clientHeight||280;r=new QE({antialias:!0,alpha:!0}),r.setSize(u,p),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(0,0),n.appendChild(r.domElement);const g=new JE,_=new zn(42,u/p,.1,100);_.position.set(0,1.2,5.2),_.lookAt(0,1.2,0),g.fog=new Jd(262157,.06),g.add(new r1(16777215,.55));const S=new jm(16777215,1.1);S.position.set(3,6,4),g.add(S);const y=new gt(s?.color||"#6f00ff"),M=new n1(y,2,10);M.position.set(-2.5,2.5,2),g.add(M);const A=new jm(11184895,.5);A.position.set(2,4,-4),g.add(A);const T=s?.skinColors||{head:"#888888",body:"#555555",legs:"#444444",arms:"#777777"},x=Re=>new zm({color:new gt(Re)}),v=new Ba,N=new $t(new Bn(1.22,1.22,1.22),x(T.head));N.position.y=3.12;const R=new Va({color:16777215}),L=Re=>{const lt=new $t(new Bn(.28,.17,.02),R);return lt.position.set(Re,3.14,.63),lt},G=new Va({color:y}),F=Re=>{const lt=new $t(new Bn(.12,.12,.02),G);return lt.position.set(Re,3.14,.645),lt},k=new $t(new Bn(1.02,1.52,.72),x(T.body));k.position.y=1.76;const q=new $t(new Bn(.42,1.4,.42),x(T.arms));q.position.set(-.72,1.76,0);const P=new $t(new Bn(.42,1.4,.42),x(T.arms));P.position.set(.72,1.76,0);const C=new $t(new Bn(.46,1.32,.46),x(T.legs));C.position.set(-.27,.66,0);const z=new $t(new Bn(.46,1.32,.46),x(T.legs));z.position.set(.27,.66,0),v.add(N,L(-.23),L(.23),F(-.23),F(.23),k,q,P,C,z),v.position.y=-1.5,g.add(v);const ne=new $t(new ef(1.4,1.4,.08,32),new zm({color:y,transparent:!0,opacity:.18}));ne.position.y=-1.52,g.add(ne);const K=new $t(new tf(.9,1.35,40),new Va({color:y,transparent:!0,opacity:.35,side:gi}));K.rotation.x=-Math.PI/2,K.position.y=-1.47,g.add(K);const oe=30,ce=new ci,se=new Float32Array(oe*3),le=[];for(let Re=0;Re<oe;Re++){const lt=Math.random()*Math.PI*2,O=.5+Math.random()*.9;se[Re*3]=Math.cos(lt)*O,se[Re*3+1]=Math.random()*3.5,se[Re*3+2]=Math.sin(lt)*O,le.push({speed:.008+Math.random()*.014,base:se[Re*3+1]})}ce.setAttribute("position",new li(se,3));const H=new e1(ce,new Pg({color:y,size:.06,transparent:!0,opacity:.7}));H.position.y=-1.5,g.add(H);let de=0,ae=0,U=!1,ie=0;const Le=Re=>{U=!0,ie=Re.clientX},Q=Re=>{U&&(de+=(Re.clientX-ie)*.013,ie=Re.clientX)},ue=()=>{U=!1},xe=Re=>{U=!0,ie=Re.touches[0].clientX},Se=Re=>{U&&(de+=(Re.touches[0].clientX-ie)*.013,ie=Re.touches[0].clientX)};r.domElement.addEventListener("mousedown",Le),window.addEventListener("mousemove",Q),window.addEventListener("mouseup",ue),r.domElement.addEventListener("touchstart",xe),r.domElement.addEventListener("touchmove",Se),r.domElement.addEventListener("touchend",ue);let Ae=0;const Ue=()=>{o=requestAnimationFrame(Ue),Ae+=.018,U||(de+=.005),ae+=(de-ae)*.08,v.rotation.y=ae,H.rotation.y=ae*.3,q.rotation.x=Math.sin(Ae)*.28,P.rotation.x=-Math.sin(Ae)*.28,C.rotation.x=-Math.sin(Ae)*.2,z.rotation.x=Math.sin(Ae)*.2;const Re=Math.sin(Ae*.55)*.07;v.position.y=-1.5+Re,H.position.y=-1.5+Re*.3,K.material.opacity=.28+Math.sin(Ae*1.2)*.12,ne.material.opacity=.14+Math.sin(Ae*1.2)*.06,M.intensity=1.8+Math.sin(Ae*1.4)*.5;const lt=ce.attributes.position.array;for(let O=0;O<oe;O++)lt[O*3+1]+=le[O].speed,lt[O*3+1]>le[O].base+2&&(lt[O*3+1]=le[O].base);ce.attributes.position.needsUpdate=!0,r.render(g,_)};Ue(),c=()=>{cancelAnimationFrame(o),r.domElement.removeEventListener("mousedown",Le),window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",ue),r.domElement.removeEventListener("touchstart",xe),r.domElement.removeEventListener("touchmove",Se),r.domElement.removeEventListener("touchend",ue),r.dispose(),n.contains(r.domElement)&&n.removeChild(r.domElement)}},80);return()=>{clearTimeout(d),c&&c()}},[s]),h.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"},title:"Drag to rotate"})}function a1({chapter:s}){return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Chapter Info"}),h.jsxs("div",{className:"ci-grid",children:[h.jsx("div",{className:"ci-image-wrap",children:h.jsx("img",{src:s.image,alt:s.title})}),h.jsxs("div",{className:"ci-info",children:[h.jsx("h3",{children:s.subtitle}),h.jsx("h2",{children:s.title}),h.jsx("p",{style:{whiteSpace:"pre-line"},children:s.lore}),h.jsxs("div",{className:"ci-tags",children:[h.jsx("span",{className:"ci-tag",children:"⚔ Adventure"}),h.jsx("span",{className:"ci-tag",children:"👥 Up to 20 Players"}),h.jsx("span",{className:"ci-tag",children:"✦ Vanilla+"}),s.status==="available"&&h.jsx("span",{className:"ci-tag",children:"🟢 Available"})]})]})]})]})}function o1({chapter:s}){return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Trailer & Teaser"}),h.jsx("div",{className:"trailer-wrap",children:s.trailerId?h.jsx("div",{className:"trailer-embed",children:h.jsx("iframe",{src:`https://www.youtube.com/embed/${s.trailerId}?rel=0`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:`${s.title} Trailer`})}):h.jsxs("div",{className:"trailer-placeholder",children:[h.jsx("span",{children:"▶"}),h.jsx("span",{children:"Trailer Coming Soon"})]})})]})}function l1({chapter:s}){const[e,n]=ot.useState(0),r=s.screenshots,o=r.length,c=()=>n(u=>(u-1+o)%o),d=()=>n(u=>(u+1)%o);return o===0?h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Screenshots"}),h.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[h.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"🖼"}),h.jsx("span",{children:"No screenshots yet"})]})]}):h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Screenshots"}),h.jsxs("div",{className:"carousel-wrap",children:[h.jsxs("div",{className:"carousel-stage",children:[h.jsx("img",{src:r[e],alt:`Screenshot ${e+1}`,className:"carousel-img"},e),o>1&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"carousel-btn carousel-btn--prev",onClick:c,"aria-label":"Previous",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"18",height:"18",children:h.jsx("path",{d:"M15 18l-6-6 6-6"})})}),h.jsx("button",{className:"carousel-btn carousel-btn--next",onClick:d,"aria-label":"Next",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"18",height:"18",children:h.jsx("path",{d:"M9 18l6-6-6-6"})})})]}),h.jsxs("div",{className:"carousel-counter",children:[e+1," / ",o]})]}),o>1&&h.jsx("div",{className:"carousel-thumbs",children:r.map((u,p)=>h.jsx("button",{className:`carousel-thumb${p===e?" active":""}`,onClick:()=>n(p),children:h.jsx("img",{src:u,alt:"",loading:"lazy"})},p))})]})]})}const Lg=["helmet","chestplate","leggings","boots"],c1={helmet:"🪖",chestplate:"🛡️",leggings:"👖",boots:"👟"},Wm={helmet:"Helmet",chestplate:"Chestplate",leggings:"Leggings",boots:"Boots"},Xm={common:"#aaaaaa",uncommon:"#55ff55",rare:"#5588ff",epic:"#aa44ff",legendary:"#ffaa00"};function u1({chapter:s}){const[e,n]=ot.useState("helmet");if(!s.armor)return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Armor Display"}),h.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[h.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"🛡"}),h.jsx("span",{children:"Armor data not available"})]})]});const{armor:r}=s,o=r[e],c=Xm[o?.rarity]||"var(--glow-purple)";return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Armor Display"}),h.jsxs("div",{className:"armor-layout",children:[h.jsxs("div",{className:"armor-mannequin-wrap",children:[h.jsxs("div",{className:"armor-set-header",children:[h.jsx("h3",{children:"Armor Set"}),h.jsx("span",{className:"armor-set-name",children:r.name})]}),h.jsxs("div",{className:"armor-mannequin-stage",children:[h.jsx(d1,{armor:r,highlighted:e}),h.jsx("div",{className:"armor-mannequin-shadow"})]}),o&&h.jsxs("div",{className:"armor-piece-card",style:{"--piece-color":o.color||c},children:[h.jsxs("div",{className:"armor-piece-card-top",children:[h.jsx("div",{className:"armor-piece-slot-label",children:Wm[e]}),h.jsx("span",{className:`rarity-badge rarity-${o.rarity}`,children:o.rarity})]}),h.jsx("div",{className:"armor-piece-name",children:o.name}),h.jsx("div",{className:"armor-piece-desc",children:o.desc})]})]}),h.jsxs("div",{className:"armor-slots",children:[Lg.map(d=>{const u=r[d];if(!u)return null;const p=Xm[u.rarity]||"var(--glow-purple)";return h.jsxs("div",{className:`armor-slot${e===d?" active-slot":""}`,onClick:()=>n(d),style:e===d?{borderColor:u.color||p,background:`${u.color||p}18`}:{},children:[h.jsx("div",{className:"armor-slot-icon",style:{borderColor:u.color||p,color:u.color||p},children:u.emoji||c1[d]}),h.jsxs("div",{className:"armor-slot-info",children:[h.jsx("h4",{children:u.name}),h.jsx("span",{children:Wm[d]})]}),h.jsxs("div",{className:"armor-slot-right",children:[h.jsx("span",{className:`rarity-badge rarity-${u.rarity}`,children:u.rarity}),e===d&&h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"12",height:"12",style:{color:u.color||p,marginTop:"4px"},children:h.jsx("polyline",{points:"20 6 9 17 4 12"})})]})]},d)}),h.jsxs("div",{className:"armor-set-bonus",children:[h.jsx("div",{className:"armor-set-bonus-label",children:"✦ Full Set Bonus"}),h.jsxs("div",{className:"armor-set-bonus-desc",children:["Equipping all 4 pieces grants +10% damage in void-touched areas and unlocks the ",h.jsx("em",{children:"Cursed Veil"})," passive."]})]})]})]})]})}function d1({armor:s,highlighted:e}){const n={helmet:s.helmet?.color||"#555",chestplate:s.chestplate?.color||"#555",leggings:s.leggings?.color||"#555",boots:s.boots?.color||"#555"},r=(c,d)=>{const u=parseInt(c.replace("#",""),16),p=y=>Math.min(255,Math.max(0,y)),g=p((u>>16&255)+d),_=p((u>>8&255)+d),S=p((u&255)+d);return`rgb(${g},${_},${S})`},o=c=>e===c;return h.jsxs("svg",{viewBox:"0 0 110 200",width:"110",height:"200",style:{imageRendering:"pixelated",overflow:"visible"},children:[h.jsx("defs",{children:Lg.map(c=>h.jsxs("filter",{id:`glow-${c}`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[h.jsx("feGaussianBlur",{stdDeviation:o(c)?"3":"0",result:"blur"}),h.jsxs("feMerge",{children:[h.jsx("feMergeNode",{in:"blur"}),h.jsx("feMergeNode",{in:"SourceGraphic"})]})]},c))}),h.jsxs("g",{filter:"url(#glow-helmet)",style:{transition:"filter 0.3s"},children:[h.jsx("rect",{x:"30",y:"4",width:"50",height:"44",fill:n.helmet,rx:"2"}),h.jsx("rect",{x:"68",y:"4",width:"12",height:"44",fill:r(n.helmet,-40),rx:"0",style:{borderRadius:"0 2px 2px 0"}}),h.jsx("rect",{x:"30",y:"4",width:"50",height:"6",fill:r(n.helmet,50),opacity:"0.45",rx:"2"}),h.jsx("rect",{x:"37",y:"20",width:"12",height:"10",fill:"#0a0a14",rx:"1"}),h.jsx("rect",{x:"61",y:"20",width:"12",height:"10",fill:"#0a0a14",rx:"1"}),h.jsx("rect",{x:"39",y:"22",width:"5",height:"4",fill:"white",opacity:"0.5"}),h.jsx("rect",{x:"63",y:"22",width:"5",height:"4",fill:"white",opacity:"0.5"}),h.jsx("rect",{x:"34",y:"38",width:"42",height:"10",fill:r(n.helmet,-20),rx:"1"}),o("helmet")&&h.jsx("rect",{x:"29",y:"3",width:"52",height:"46",fill:"none",stroke:n.helmet,strokeWidth:"1.5",rx:"2.5",opacity:"0.8"})]}),h.jsx("rect",{x:"48",y:"48",width:"14",height:"8",fill:"#c8a87a",rx:"1"}),h.jsxs("g",{filter:"url(#glow-chestplate)",style:{transition:"filter 0.3s"},children:[h.jsx("rect",{x:"28",y:"56",width:"54",height:"58",fill:n.chestplate,rx:"2"}),h.jsx("rect",{x:"68",y:"56",width:"14",height:"58",fill:r(n.chestplate,-40),rx:"0"}),h.jsx("rect",{x:"28",y:"56",width:"54",height:"7",fill:r(n.chestplate,45),opacity:"0.4",rx:"2"}),h.jsx("rect",{x:"36",y:"68",width:"4",height:"30",fill:r(n.chestplate,-30),opacity:"0.5"}),h.jsx("rect",{x:"70",y:"68",width:"4",height:"30",fill:r(n.chestplate,-30),opacity:"0.5"}),h.jsx("rect",{x:"36",y:"68",width:"38",height:"3",fill:r(n.chestplate,-30),opacity:"0.5"}),h.jsx("rect",{x:"28",y:"106",width:"54",height:"8",fill:r(n.chestplate,-60),rx:"0"}),h.jsx("rect",{x:"50",y:"106",width:"10",height:"8",fill:r(n.chestplate,-20),rx:"1"}),h.jsx("rect",{x:"4",y:"56",width:"22",height:"58",fill:n.chestplate,rx:"2"}),h.jsx("rect",{x:"18",y:"56",width:"8",height:"58",fill:r(n.chestplate,-40),rx:"0"}),h.jsx("rect",{x:"4",y:"56",width:"22",height:"7",fill:r(n.chestplate,45),opacity:"0.4"}),h.jsx("rect",{x:"84",y:"56",width:"22",height:"58",fill:n.chestplate,rx:"2"}),h.jsx("rect",{x:"98",y:"56",width:"8",height:"58",fill:r(n.chestplate,-40),rx:"0"}),h.jsx("rect",{x:"84",y:"56",width:"22",height:"7",fill:r(n.chestplate,45),opacity:"0.4"}),o("chestplate")&&h.jsx("rect",{x:"3",y:"55",width:"104",height:"60",fill:"none",stroke:n.chestplate,strokeWidth:"1.5",rx:"2.5",opacity:"0.8"})]}),h.jsxs("g",{filter:"url(#glow-leggings)",style:{transition:"filter 0.3s"},children:[h.jsx("rect",{x:"28",y:"114",width:"26",height:"54",fill:n.leggings,rx:"2"}),h.jsx("rect",{x:"44",y:"114",width:"10",height:"54",fill:r(n.leggings,-40),rx:"0"}),h.jsx("rect",{x:"28",y:"114",width:"26",height:"6",fill:r(n.leggings,40),opacity:"0.4"}),h.jsx("rect",{x:"56",y:"114",width:"26",height:"54",fill:n.leggings,rx:"2"}),h.jsx("rect",{x:"70",y:"114",width:"12",height:"54",fill:r(n.leggings,-40),rx:"0"}),h.jsx("rect",{x:"56",y:"114",width:"26",height:"6",fill:r(n.leggings,40),opacity:"0.4"}),h.jsx("rect",{x:"53",y:"114",width:"4",height:"54",fill:r(n.leggings,-70),opacity:"0.6"}),o("leggings")&&h.jsxs(h.Fragment,{children:[h.jsx("rect",{x:"27",y:"113",width:"28",height:"56",fill:"none",stroke:n.leggings,strokeWidth:"1.5",rx:"2.5",opacity:"0.8"}),h.jsx("rect",{x:"55",y:"113",width:"28",height:"56",fill:"none",stroke:n.leggings,strokeWidth:"1.5",rx:"2.5",opacity:"0.8"})]})]}),h.jsxs("g",{filter:"url(#glow-boots)",style:{transition:"filter 0.3s"},children:[h.jsx("rect",{x:"26",y:"168",width:"28",height:"26",fill:n.boots,rx:"2"}),h.jsx("rect",{x:"42",y:"168",width:"12",height:"26",fill:r(n.boots,-40),rx:"0"}),h.jsx("rect",{x:"26",y:"168",width:"28",height:"5",fill:r(n.boots,50),opacity:"0.4"}),h.jsx("rect",{x:"24",y:"182",width:"30",height:"12",fill:n.boots,rx:"2"}),h.jsx("rect",{x:"44",y:"182",width:"10",height:"12",fill:r(n.boots,-40),rx:"0"}),h.jsx("rect",{x:"56",y:"168",width:"28",height:"26",fill:n.boots,rx:"2"}),h.jsx("rect",{x:"72",y:"168",width:"12",height:"26",fill:r(n.boots,-40),rx:"0"}),h.jsx("rect",{x:"56",y:"168",width:"28",height:"5",fill:r(n.boots,50),opacity:"0.4"}),h.jsx("rect",{x:"56",y:"182",width:"30",height:"12",fill:n.boots,rx:"2"}),h.jsx("rect",{x:"74",y:"182",width:"12",height:"12",fill:r(n.boots,-40),rx:"0"}),o("boots")&&h.jsxs(h.Fragment,{children:[h.jsx("rect",{x:"23",y:"167",width:"32",height:"28",fill:"none",stroke:n.boots,strokeWidth:"1.5",rx:"2.5",opacity:"0.8"}),h.jsx("rect",{x:"55",y:"167",width:"32",height:"28",fill:"none",stroke:n.boots,strokeWidth:"1.5",rx:"2.5",opacity:"0.8"})]})]})]})}function On(s,e){const n=parseInt((s||"#888888").replace("#",""),16),r=u=>Math.min(255,Math.max(0,u)),o=r((n>>16&255)+e),c=r((n>>8&255)+e),d=r((n&255)+e);return`rgb(${o},${c},${d})`}function f1({mob:s,width:e=110,height:n=200,animate:r=!1}){const o=s?.skinColors||{head:"#888888",body:"#555555",legs:"#444444",arms:"#777777"},c=u=>On(u,-40),d=u=>On(u,50);return h.jsxs("svg",{viewBox:"0 0 110 200",width:e,height:n,style:{imageRendering:"pixelated",overflow:"visible",display:"block"},className:r?"mob-sprite-anim":"",children:[h.jsx("rect",{x:"30",y:"4",width:"50",height:"44",fill:o.head,rx:"2"}),h.jsx("rect",{x:"68",y:"4",width:"12",height:"44",fill:c(o.head)}),h.jsx("rect",{x:"30",y:"4",width:"50",height:"6",fill:d(o.head),opacity:"0.45",rx:"2"}),h.jsx("rect",{x:"37",y:"20",width:"12",height:"10",fill:"#0a0a14",rx:"1"}),h.jsx("rect",{x:"61",y:"20",width:"12",height:"10",fill:"#0a0a14",rx:"1"}),h.jsx("rect",{x:"39",y:"22",width:"5",height:"4",fill:"white",opacity:"0.55"}),h.jsx("rect",{x:"63",y:"22",width:"5",height:"4",fill:"white",opacity:"0.55"}),h.jsx("rect",{x:"43",y:"24",width:"3",height:"3",fill:"#111",opacity:"0.8"}),h.jsx("rect",{x:"67",y:"24",width:"3",height:"3",fill:"#111",opacity:"0.8"}),h.jsx("rect",{x:"34",y:"38",width:"42",height:"10",fill:On(o.head,-20),rx:"1"}),h.jsx("rect",{x:"48",y:"48",width:"14",height:"8",fill:"#c8a87a",rx:"1"}),h.jsx("rect",{x:"28",y:"56",width:"54",height:"58",fill:o.body,rx:"2"}),h.jsx("rect",{x:"68",y:"56",width:"14",height:"58",fill:c(o.body)}),h.jsx("rect",{x:"28",y:"56",width:"54",height:"7",fill:d(o.body),opacity:"0.4",rx:"2"}),h.jsx("rect",{x:"36",y:"68",width:"4",height:"30",fill:On(o.body,-30),opacity:"0.5"}),h.jsx("rect",{x:"70",y:"68",width:"4",height:"30",fill:On(o.body,-30),opacity:"0.5"}),h.jsx("rect",{x:"36",y:"68",width:"38",height:"3",fill:On(o.body,-30),opacity:"0.5"}),h.jsx("rect",{x:"28",y:"106",width:"54",height:"8",fill:On(o.body,-60)}),h.jsx("rect",{x:"50",y:"106",width:"10",height:"8",fill:On(o.body,-20),rx:"1"}),h.jsx("rect",{x:"4",y:"56",width:"22",height:"58",fill:o.arms,rx:"2"}),h.jsx("rect",{x:"18",y:"56",width:"8",height:"58",fill:c(o.arms)}),h.jsx("rect",{x:"4",y:"56",width:"22",height:"7",fill:d(o.arms),opacity:"0.4"}),h.jsx("rect",{x:"84",y:"56",width:"22",height:"58",fill:o.arms,rx:"2"}),h.jsx("rect",{x:"98",y:"56",width:"8",height:"58",fill:c(o.arms)}),h.jsx("rect",{x:"84",y:"56",width:"22",height:"7",fill:d(o.arms),opacity:"0.4"}),h.jsx("rect",{x:"28",y:"114",width:"26",height:"54",fill:o.legs,rx:"2"}),h.jsx("rect",{x:"44",y:"114",width:"10",height:"54",fill:c(o.legs)}),h.jsx("rect",{x:"56",y:"114",width:"26",height:"54",fill:o.legs,rx:"2"}),h.jsx("rect",{x:"70",y:"114",width:"12",height:"54",fill:c(o.legs)}),h.jsx("rect",{x:"53",y:"114",width:"4",height:"54",fill:On(o.legs,-70),opacity:"0.6"}),h.jsx("rect",{x:"26",y:"168",width:"28",height:"26",fill:On(o.legs,-15),rx:"2"}),h.jsx("rect",{x:"42",y:"168",width:"12",height:"26",fill:c(o.legs)}),h.jsx("rect",{x:"24",y:"182",width:"30",height:"12",fill:On(o.legs,-25),rx:"2"}),h.jsx("rect",{x:"56",y:"168",width:"28",height:"26",fill:On(o.legs,-15),rx:"2"}),h.jsx("rect",{x:"72",y:"168",width:"12",height:"26",fill:c(o.legs)}),h.jsx("rect",{x:"56",y:"182",width:"30",height:"12",fill:On(o.legs,-25),rx:"2"})]})}const Dg={easy:"diff-easy",medium:"diff-medium",hard:"diff-hard",legendary:"diff-legendary"},Hl={easy:"Easy",medium:"Medium",hard:"Hard",legendary:"Legendary"},Ig={easy:"#5dff5d",medium:"#ffcc55",hard:"#ff8844",legendary:"#cc88ff"};function h1({chapter:s}){const[e,n]=ot.useState(null);return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Mob Catalogue"}),s.mobs.length===0?h.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[h.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"👾"}),h.jsx("span",{children:"No mobs catalogued yet"})]}):h.jsx("div",{className:"mob-grid",children:s.mobs.map(r=>{const o=Ig[r.difficulty]||"var(--glow-purple)";return h.jsxs("div",{className:"mob-card",onClick:()=>n(r),style:{"--mob-color":r.color||"#6f00ff","--mob-diff-color":o},children:[h.jsxs("div",{className:"mob-card-preview",children:[h.jsx("div",{className:"mob-card-preview-glow",style:{background:`radial-gradient(ellipse at 50% 85%, ${r.color}55 0%, transparent 70%)`}}),h.jsx(f1,{mob:r,width:58,height:105})]}),h.jsx("div",{className:`mob-difficulty ${Dg[r.difficulty]}`,title:Hl[r.difficulty]}),h.jsx("div",{className:"mob-card-type",children:r.type}),h.jsx("h3",{className:"mob-card-name",children:r.name}),h.jsxs("div",{className:"mob-card-footer",children:[h.jsxs("div",{className:"mob-card-stats",children:[h.jsxs("span",{className:"mob-stat",children:["❤ ",h.jsx("strong",{children:r.health})]}),h.jsxs("span",{className:"mob-stat",children:["⚔ ",h.jsx("strong",{children:r.damage})]})]}),h.jsx("span",{className:"mob-card-diff-pill",style:{color:o,borderColor:`${o}44`,background:`${o}14`},children:Hl[r.difficulty]})]})]},r.id)})}),e&&h.jsx(p1,{mob:e,onClose:()=>n(null)})]})}function p1({mob:s,onClose:e}){const n=Ig[s.difficulty]||"var(--glow-purple)",r=Math.min(100,Math.round(s.health/300*100)),o=typeof s.damage=="string"?parseInt(s.damage.split("–").pop()||s.damage,10):s.damage,c=Math.min(100,Math.round(o/30*100)),d=s.type==="Boss"?85:s.type==="Elite"?55:20,u=/(phase|charge|dash|sprint|walk|blink|cloak|shift)/i,p=s.abilities.some(y=>u.test(y))?s.difficulty==="legendary"?90:68:s.difficulty==="hard"?52:34,g=Math.min(100,Math.round(s.abilities.length/5*100)),_={easy:18,medium:42,hard:70,legendary:100}[s.difficulty]??50,S=[{icon:"❤",label:"Health",val:s.health,pct:r,cls:"bar--health"},{icon:"⚔",label:"Damage",val:s.damage,pct:c,cls:"bar--damage"},{icon:"🛡",label:"Defense",val:`${d}%`,pct:d,cls:"bar--defense"},{icon:"⚡",label:"Speed",val:`${p}%`,pct:p,cls:"bar--speed"},{icon:"🔮",label:"Magic",val:`${s.abilities.length} spells`,pct:g,cls:"bar--magic"},{icon:"☠",label:"Threat",val:Hl[s.difficulty],pct:_,cls:"bar--threat"}];return h.jsx("div",{className:"mob-popup-overlay",onClick:e,children:h.jsxs("div",{className:"mob-popup",onClick:y=>y.stopPropagation(),style:{"--mob-color":s.color||"#6f00ff","--mob-diff":n},children:[h.jsx("button",{className:"mob-popup-close",onClick:e,"aria-label":"Close",children:"✕"}),h.jsxs("div",{className:"mob-popup-body",children:[h.jsxs("div",{className:"mob-popup-left",children:[h.jsx("div",{className:"mob-3d-viewport",children:h.jsx(s1,{mob:s})}),h.jsx("p",{className:"mob-3d-hint",children:"⟳ Drag to rotate"}),h.jsxs("div",{className:"mob-popup-identity",children:[h.jsxs("div",{className:"mob-popup-type-row",children:[h.jsx("span",{className:"mob-popup-type-badge",children:s.type}),h.jsxs("span",{className:"mob-popup-diff-badge",style:{color:n,borderColor:`${n}44`,background:`${n}12`},children:[h.jsx("span",{className:`mob-difficulty ${Dg[s.difficulty]}`,style:{width:7,height:7,borderRadius:"50%",display:"inline-block",marginRight:4}}),Hl[s.difficulty]]})]}),h.jsx("h2",{className:"mob-popup-title",children:s.name})]})]}),h.jsxs("div",{className:"mob-popup-info",children:[h.jsxs("div",{className:"mob-info-section",children:[h.jsx("div",{className:"mob-info-section-label",children:"About"}),h.jsx("p",{className:"mob-description",children:s.description})]}),h.jsxs("div",{className:"mob-info-section",children:[h.jsx("div",{className:"mob-info-section-label",children:"Combat Statistics"}),h.jsx("div",{className:"mob-stat-bars",children:S.map(y=>h.jsxs("div",{className:"mob-stat-bar-row",children:[h.jsxs("div",{className:"mob-stat-bar-meta",children:[h.jsx("span",{className:"mob-stat-bar-icon",children:y.icon}),h.jsx("span",{className:"mob-stat-bar-name",children:y.label}),h.jsx("span",{className:"mob-stat-bar-val",children:y.val}),h.jsxs("span",{className:"mob-stat-bar-pct",children:[y.pct,"%"]})]}),h.jsx("div",{className:"mob-stat-bar-track",children:h.jsx("div",{className:`mob-stat-bar-fill ${y.cls}`,style:{width:`${y.pct}%`}})})]},y.label))})]}),h.jsxs("div",{className:"mob-info-section",children:[h.jsxs("div",{className:"mob-info-section-label",children:["Abilities (",s.abilities.length,")"]}),h.jsx("div",{className:"mob-abilities",children:s.abilities.map((y,M)=>h.jsx("span",{className:"mob-ability",style:{animationDelay:`${M*.07}s`,borderColor:`${s.color}55`,background:`${s.color}14`,color:s.color||"var(--glow-purple)"},children:y},y))})]})]})]})]})})}const qm=[{color:"#7b3fbf",dark:"#4a1e80"},{color:"#8b2020",dark:"#4a0e0e"},{color:"#1e5c96",dark:"#0e2e50"},{color:"#2e7a3c",dark:"#164020"},{color:"#8b5a10",dark:"#4a2e08"},{color:"#6b1e6b",dark:"#380e38"},{color:"#1a6b6b",dark:"#0a3838"},{color:"#7a5c1e",dark:"#3e2e0a"}],Ym=[{color:"#4a3018",dark:"#2a1a08",width:20,height:100},{color:"#2a3a28",dark:"#141e12",width:16,height:88},{color:"#3a2a10",dark:"#1e1608",width:22,height:122},{color:"#1a2a3a",dark:"#0e1620",width:18,height:95},{color:"#3a1828",dark:"#1e0c14",width:24,height:108},{color:"#28381a",dark:"#141e0c",width:14,height:80},{color:"#382818",dark:"#1e160c",width:20,height:115},{color:"#181828",dark:"#0c0c16",width:16,height:92},{color:"#2a1a38",dark:"#160c1e",width:22,height:105},{color:"#382010",dark:"#1e1008",width:18,height:98}];function $m(s,e,n=0){const r=[];s.forEach((c,d)=>{const u=d===0?2:1;for(let p=0;p<u;p++)r.push({type:"filler",data:e[(n+r.length)%e.length]});r.push({type:"book",data:c,index:d})});const o=Math.max(0,3-Math.floor(r.length/4));for(let c=0;c<o;c++)r.push({type:"filler",data:e[(n+r.length)%e.length]});return r}function m1({chapter:s}){const[e,n]=ot.useState(null),r=g=>{g.locked||n(g)};if(s.loreEntries.length===0)return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Lore Catalogue"}),h.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[h.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"📖"}),h.jsx("span",{children:"No lore entries yet"})]})]});const o=Math.ceil(s.loreEntries.length/2),c=s.loreEntries.slice(0,o),d=s.loreEntries.slice(o),u=$m(c,Ym,0),p=d.length>0?$m(d,Ym,5):null;return h.jsxs("div",{children:[h.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Lore Catalogue"}),h.jsx("p",{className:"bookshelf-hint",children:"✦ Select an enchanted tome to unveil its secrets ✦"}),h.jsxs("div",{className:"library",children:[h.jsx("div",{className:"library-wall"}),h.jsxs("div",{className:"library-torch library-torch--left",children:[h.jsx("div",{className:"library-torch-flame",children:"🔥"}),h.jsx("div",{className:"library-torch-glow"}),h.jsx("div",{className:"library-torch-bracket"})]}),h.jsxs("div",{className:"library-torch library-torch--right",children:[h.jsx("div",{className:"library-torch-flame",children:"🔥"}),h.jsx("div",{className:"library-torch-glow"}),h.jsx("div",{className:"library-torch-bracket"})]}),h.jsxs("div",{className:"bookcase",children:[h.jsx("div",{className:"bookcase-crown"}),h.jsx(Km,{items:u,palette:qm,onSelect:r,decoItems:["💀","🕯️"]}),p&&h.jsx(Km,{items:p,palette:qm,onSelect:r,decoItems:["🧪","🔮"]}),h.jsx("div",{className:"bookcase-base"})]})]}),e&&h.jsx("div",{className:"book-reader-overlay",onClick:()=>n(null),children:h.jsx("div",{className:"open-book-wrap",onClick:g=>g.stopPropagation(),children:h.jsxs("div",{className:"open-book",children:[h.jsxs("div",{className:"book-page-left",children:[h.jsx("div",{className:"left-page-ornament",children:h.jsx("div",{className:"left-page-ornament-line",children:h.jsx("span",{className:"left-page-ornament-symbol",children:"❧"})})}),h.jsxs("p",{className:"left-page-chapter-label",children:[s.subtitle," — ",s.title]}),h.jsx("span",{className:"left-page-category",children:e.category}),h.jsx("h2",{className:"left-page-title",children:e.title}),h.jsx("div",{className:"left-page-divider",children:h.jsx("span",{className:"left-page-divider-symbol",children:"✦"})}),h.jsx("p",{className:"left-page-flavour",children:"From the archives of Enigma, recovered beyond the veil of the Void. These records remain as written — unaltered, unabridged."}),h.jsx("div",{className:"left-page-footer",children:h.jsx("span",{children:"Enigma · Beyond the Void"})})]}),h.jsx("div",{className:"book-binding"}),h.jsx("div",{className:"book-page-right",children:h.jsxs("div",{className:"right-page-inner",children:[h.jsxs("div",{className:"right-page-header",children:[h.jsxs("span",{className:"right-page-running-title",children:[e.category," · ",e.title]}),h.jsx("button",{className:"book-close-btn",onClick:()=>n(null),children:"✕"})]}),h.jsxs("div",{className:"right-page-content",children:[h.jsx("p",{className:"right-page-drop-cap",children:e.content}),h.jsx("div",{className:"right-page-divider-line",children:h.jsx("span",{children:"✦"})})]}),h.jsxs("div",{className:"right-page-footer",children:[h.jsx("span",{children:"Recovered from the archives"}),h.jsx("span",{className:"right-page-page-num",children:"I"})]})]})})]})})})]})}function Km({items:s,palette:e,onSelect:n,decoItems:r}){return h.jsxs("div",{className:"bookcase-shelf",children:[h.jsx("div",{className:"shelf-plank"}),h.jsxs("div",{className:"shelf-row",children:[s.map((o,c)=>{if(o.type==="filler")return h.jsxs("div",{className:"book book--filler",style:{"--book-color":o.data.color,"--book-color-dark":o.data.dark,"--book-width":o.data.width+"px","--book-height":o.data.height+"px",animationDelay:`${c*.04}s`},children:[h.jsx("div",{className:"book-spine"}),h.jsx("div",{className:"book-pages-edge"})]},`f-${c}`);const d=o.data,u=d.locked,p=e[o.index%e.length],g=d.title.length>14?d.title.slice(0,12)+"…":d.title;return h.jsxs("div",{className:`book ${u?"book--locked":"book--available"}`,style:{"--book-color":u?"#1e1e1e":p.color,"--book-color-dark":u?"#0e0e0e":p.dark,"--book-width":"30px","--book-height":"128px",animationDelay:`${c*.04}s`},onClick:()=>n(d),children:[h.jsx("div",{className:"book-spine",children:u?h.jsx("span",{className:"book-lock",children:"🔒"}):h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"book-enchant",children:"✦"}),h.jsx("span",{className:"book-spine-title",children:g}),h.jsx("span",{className:"book-enchant",children:"✦"})]})}),h.jsx("div",{className:"book-pages-edge"}),!u&&h.jsx("div",{className:"book-tooltip",children:d.title})]},d.id)}),r&&h.jsx("div",{className:"shelf-deco",style:{marginLeft:"auto"},children:r.map((o,c)=>h.jsx("span",{className:"shelf-deco-item",style:{animationDelay:`${c*.8}s`},children:o},c))})]}),h.jsx("div",{className:"shelf-plank"})]})}const g1=[{id:"info",label:"Chapter Info",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),h.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})},{id:"trailer",label:"Trailer",icon:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})},{id:"screenshots",label:"Screenshots",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),h.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),h.jsx("polyline",{points:"21 15 16 10 5 21"})]})},{id:"armor",label:"Armor Display",icon:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{id:"mobs",label:"Mob Catalogue",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),h.jsx("circle",{cx:"9",cy:"7",r:"4"}),h.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),h.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"lore",label:"Lore Catalogue",icon:h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[h.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),h.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}];function v1({chapter:s,onClose:e}){const[n,r]=ot.useState("info"),o=()=>{switch(n){case"info":return h.jsx(a1,{chapter:s});case"trailer":return h.jsx(o1,{chapter:s});case"screenshots":return h.jsx(l1,{chapter:s});case"armor":return h.jsx(u1,{chapter:s});case"mobs":return h.jsx(h1,{chapter:s});case"lore":return h.jsx(m1,{chapter:s});default:return null}};return h.jsxs("div",{className:"chapter-view",style:{"--ch-color":s.color},children:[h.jsxs("div",{className:"cv-header",children:[h.jsxs("button",{className:"cv-back-btn",onClick:e,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h.jsx("path",{d:"M19 12H5M12 5l-7 7 7 7"})}),"Back"]}),h.jsxs("div",{className:"cv-header-title",children:[h.jsx("span",{children:s.subtitle}),h.jsx("h2",{children:s.title})]}),h.jsx("div",{style:{width:"80px"}})]}),h.jsxs("div",{className:"cv-body",children:[h.jsx("div",{className:"cv-sidebar",children:g1.map(c=>h.jsxs("button",{className:`cv-tab-btn${n===c.id?" active":""}`,onClick:()=>r(c.id),children:[c.icon,c.label]},c.id))}),h.jsx("div",{className:"cv-content",children:o()},n)]}),h.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg, transparent, ${s.color}, transparent)`,pointerEvents:"none"}})]})}const _1={particles:!0,glyphs:!0,reducedMotion:!1,theme:"void",blur:!0},Zm={void:{"--accent-purple":"#6f00ff","--bright-purple":"#aa44ff","--glow-purple":"#cc77ff","--pink-accent":"#ff00dd"},nether:{"--accent-purple":"#FF4500","--bright-purple":"#FF6B35","--glow-purple":"#FF8C55","--pink-accent":"#FF2200"},abyss:{"--accent-purple":"#001aff","--bright-purple":"#0044ff","--glow-purple":"#4488ff","--pink-accent":"#00ccff"},emerald:{"--accent-purple":"#00c853","--bright-purple":"#1de9b6","--glow-purple":"#69f0ae","--pink-accent":"#00e676"},blood:{"--accent-purple":"#c62828","--bright-purple":"#e53935","--glow-purple":"#ff6b6b","--pink-accent":"#ff1744"},frost:{"--accent-purple":"#00bcd4","--bright-purple":"#4dd0e1","--glow-purple":"#80deea","--pink-accent":"#18ffff"},solar:{"--accent-purple":"#ff8f00","--bright-purple":"#ffb300","--glow-purple":"#ffca28","--pink-accent":"#ff6d00"},obsidian:{"--accent-purple":"#546e7a","--bright-purple":"#78909c","--glow-purple":"#90a4ae","--pink-accent":"#b0bec5"}};function x1(s){const e=document.documentElement,n=Zm[s]||Zm.void;Object.entries(n).forEach(([r,o])=>e.style.setProperty(r,o))}function y1(){const[s,e]=ot.useState(!1),[n,r]=ot.useState("home"),[o,c]=ot.useState(null),[d,u]=ot.useState(_1),p=S=>{u(S),x1(S.theme),document.documentElement.style.setProperty("--transition-fast",S.reducedMotion?"0s":"0.15s ease"),document.documentElement.style.setProperty("--transition-mid",S.reducedMotion?"0s":"0.3s ease")},g=()=>r("chapters"),_=()=>{switch(n){case"home":return h.jsxs(h.Fragment,{children:[h.jsx(Rv,{onExplore:g}),h.jsx(Lv,{})]});case"chapters":return h.jsx(Iv,{onOpenChapter:c});case"qa":return h.jsx(Wv,{});case"credits":return h.jsx(Bv,{});case"settings":return h.jsx(Hv,{settings:d,onSettingsChange:p});default:return null}};return h.jsxs(h.Fragment,{children:[!s&&h.jsx(Av,{onComplete:()=>e(!0)}),h.jsxs("div",{style:{opacity:s?1:0,transition:"opacity 0.6s ease",minHeight:"100vh"},children:[d.particles&&h.jsx(bv,{}),h.jsx(Cv,{activeTab:n,onTabChange:r,inChapterView:!!o,onBackFromChapter:()=>c(null)}),o&&h.jsx(v1,{chapter:o,onClose:()=>c(null)}),!o&&h.jsx("main",{style:{paddingTop:n==="home"?"0":"60px"},children:_()})]})]})}Mv.createRoot(document.getElementById("root")).render(h.jsx(ot.StrictMode,{children:h.jsx(y1,{})}));
