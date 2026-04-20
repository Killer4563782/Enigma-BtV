(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var bu={exports:{}},Na={},Nu={exports:{}},dt={};var Dp;function wv(){if(Dp)return dt;Dp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function x(k,re,Le){this.props=k,this.context=re,this.refs=T,this.updater=Le||M}x.prototype.isReactComponent={},x.prototype.setState=function(k,re){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,re,"setState")},x.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=x.prototype;function D(k,re,Le){this.props=k,this.context=re,this.refs=T,this.updater=Le||M}var w=D.prototype=new v;w.constructor=D,A(w,x.prototype),w.isPureReactComponent=!0;var b=Array.isArray,H=Object.prototype.hasOwnProperty,L={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function j(k,re,Le){var J,de={},xe=null,ye=null;if(re!=null)for(J in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(xe=""+re.key),re)H.call(re,J)&&!I.hasOwnProperty(J)&&(de[J]=re[J]);var we=arguments.length-2;if(we===1)de.children=Le;else if(1<we){for(var Ue=Array(we),be=0;be<we;be++)Ue[be]=arguments[be+2];de.children=Ue}if(k&&k.defaultProps)for(J in we=k.defaultProps,we)de[J]===void 0&&(de[J]=we[J]);return{$$typeof:s,type:k,key:xe,ref:ye,props:de,_owner:L.current}}function P(k,re){return{$$typeof:s,type:k.type,key:re,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var re={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Le){return re[Le]})}var Y=/\/+/g;function q(k,re){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):re.toString(36)}function ae(k,re,Le,J,de){var xe=typeof k;(xe==="undefined"||xe==="boolean")&&(k=null);var ye=!1;if(k===null)ye=!0;else switch(xe){case"string":case"number":ye=!0;break;case"object":switch(k.$$typeof){case s:case e:ye=!0}}if(ye)return ye=k,de=de(ye),k=J===""?"."+q(ye,0):J,b(de)?(Le="",k!=null&&(Le=k.replace(Y,"$&/")+"/"),ae(de,re,Le,"",function(be){return be})):de!=null&&(R(de)&&(de=P(de,Le+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(Y,"$&/")+"/")+k)),re.push(de)),1;if(ye=0,J=J===""?".":J+":",b(k))for(var we=0;we<k.length;we++){xe=k[we];var Ue=J+q(xe,we);ye+=ae(xe,re,Le,Ue,de)}else if(Ue=y(k),typeof Ue=="function")for(k=Ue.call(k),we=0;!(xe=k.next()).done;)xe=xe.value,Ue=J+q(xe,we++),ye+=ae(xe,re,Le,Ue,de);else if(xe==="object")throw re=String(k),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function le(k,re,Le){if(k==null)return k;var J=[],de=0;return ae(k,J,"","",function(xe){return re.call(Le,xe,de++)}),J}function oe(k){if(k._status===-1){var re=k._result;re=re(),re.then(function(Le){(k._status===0||k._status===-1)&&(k._status=1,k._result=Le)},function(Le){(k._status===0||k._status===-1)&&(k._status=2,k._result=Le)}),k._status===-1&&(k._status=0,k._result=re)}if(k._status===1)return k._result.default;throw k._result}var ce={current:null},B={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:L};function ie(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:le,forEach:function(k,re,Le){le(k,function(){re.apply(this,arguments)},Le)},count:function(k){var re=0;return le(k,function(){re++}),re},toArray:function(k){return le(k,function(re){return re})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},dt.Component=x,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=D,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,dt.act=ie,dt.cloneElement=function(k,re,Le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=A({},k.props),de=k.key,xe=k.ref,ye=k._owner;if(re!=null){if(re.ref!==void 0&&(xe=re.ref,ye=L.current),re.key!==void 0&&(de=""+re.key),k.type&&k.type.defaultProps)var we=k.type.defaultProps;for(Ue in re)H.call(re,Ue)&&!I.hasOwnProperty(Ue)&&(J[Ue]=re[Ue]===void 0&&we!==void 0?we[Ue]:re[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=Le;else if(1<Ue){we=Array(Ue);for(var be=0;be<Ue;be++)we[be]=arguments[be+2];J.children=we}return{$$typeof:s,type:k.type,key:de,ref:xe,props:J,_owner:ye}},dt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},dt.createElement=j,dt.createFactory=function(k){var re=j.bind(null,k);return re.type=k,re},dt.createRef=function(){return{current:null}},dt.forwardRef=function(k){return{$$typeof:u,render:k}},dt.isValidElement=R,dt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:oe}},dt.memo=function(k,re){return{$$typeof:g,type:k,compare:re===void 0?null:re}},dt.startTransition=function(k){var re=B.transition;B.transition={};try{k()}finally{B.transition=re}},dt.unstable_act=ie,dt.useCallback=function(k,re){return ce.current.useCallback(k,re)},dt.useContext=function(k){return ce.current.useContext(k)},dt.useDebugValue=function(){},dt.useDeferredValue=function(k){return ce.current.useDeferredValue(k)},dt.useEffect=function(k,re){return ce.current.useEffect(k,re)},dt.useId=function(){return ce.current.useId()},dt.useImperativeHandle=function(k,re,Le){return ce.current.useImperativeHandle(k,re,Le)},dt.useInsertionEffect=function(k,re){return ce.current.useInsertionEffect(k,re)},dt.useLayoutEffect=function(k,re){return ce.current.useLayoutEffect(k,re)},dt.useMemo=function(k,re){return ce.current.useMemo(k,re)},dt.useReducer=function(k,re,Le){return ce.current.useReducer(k,re,Le)},dt.useRef=function(k){return ce.current.useRef(k)},dt.useState=function(k){return ce.current.useState(k)},dt.useSyncExternalStore=function(k,re,Le){return ce.current.useSyncExternalStore(k,re,Le)},dt.useTransition=function(){return ce.current.useTransition()},dt.version="18.3.1",dt}var Ip;function $d(){return Ip||(Ip=1,Nu.exports=wv()),Nu.exports}var Up;function Tv(){if(Up)return Na;Up=1;var s=$d(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(u,p,g){var _,S={},y=null,M=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(S[_]=p[_]);if(u&&u.defaultProps)for(_ in p=u.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:u,key:y,ref:M,props:S,_owner:o.current}}return Na.Fragment=n,Na.jsx=d,Na.jsxs=d,Na}var Fp;function Av(){return Fp||(Fp=1,bu.exports=Tv()),bu.exports}var f=Av(),Ke=$d(),el={},Pu={exports:{}},wn={},Lu={exports:{}},Du={};var kp;function Cv(){return kp||(kp=1,(function(s){function e(B,ue){var ie=B.length;B.push(ue);e:for(;0<ie;){var k=ie-1>>>1,re=B[k];if(0<o(re,ue))B[k]=ue,B[ie]=re,ie=k;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],ie=B.pop();if(ie!==ue){B[0]=ie;e:for(var k=0,re=B.length,Le=re>>>1;k<Le;){var J=2*(k+1)-1,de=B[J],xe=J+1,ye=B[xe];if(0>o(de,ie))xe<re&&0>o(ye,de)?(B[k]=ye,B[xe]=ie,k=xe):(B[k]=de,B[J]=ie,k=J);else if(xe<re&&0>o(ye,ie))B[k]=ye,B[xe]=ie,k=xe;else break e}}return ue}function o(B,ue){var ie=B.sortIndex-ue.sortIndex;return ie!==0?ie:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();s.unstable_now=function(){return d.now()-u}}var p=[],g=[],_=1,S=null,y=3,M=!1,A=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(B){for(var ue=n(g);ue!==null;){if(ue.callback===null)r(g);else if(ue.startTime<=B)r(g),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(g)}}function b(B){if(T=!1,w(B),!A)if(n(p)!==null)A=!0,oe(H);else{var ue=n(g);ue!==null&&ce(b,ue.startTime-B)}}function H(B,ue){A=!1,T&&(T=!1,v(j),j=-1),M=!0;var ie=y;try{for(w(ue),S=n(p);S!==null&&(!(S.expirationTime>ue)||B&&!z());){var k=S.callback;if(typeof k=="function"){S.callback=null,y=S.priorityLevel;var re=k(S.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?S.callback=re:S===n(p)&&r(p),w(ue)}else r(p);S=n(p)}if(S!==null)var Le=!0;else{var J=n(g);J!==null&&ce(b,J.startTime-ue),Le=!1}return Le}finally{S=null,y=ie,M=!1}}var L=!1,I=null,j=-1,P=5,R=-1;function z(){return!(s.unstable_now()-R<P)}function Y(){if(I!==null){var B=s.unstable_now();R=B;var ue=!0;try{ue=I(!0,B)}finally{ue?q():(L=!1,I=null)}}else L=!1}var q;if(typeof D=="function")q=function(){D(Y)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,le=ae.port2;ae.port1.onmessage=Y,q=function(){le.postMessage(null)}}else q=function(){x(Y,0)};function oe(B){I=B,L||(L=!0,q())}function ce(B,ue){j=x(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,oe(H))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var ie=y;y=ue;try{return B()}finally{y=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=y;y=B;try{return ue()}finally{y=ie}},s.unstable_scheduleCallback=function(B,ue,ie){var k=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?k+ie:k):ie=k,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ie+re,B={id:_++,callback:ue,priorityLevel:B,startTime:ie,expirationTime:re,sortIndex:-1},ie>k?(B.sortIndex=ie,e(g,B),n(p)===null&&B===n(g)&&(T?(v(j),j=-1):T=!0,ce(b,ie-k))):(B.sortIndex=re,e(p,B),A||M||(A=!0,oe(H))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var ue=y;return function(){var ie=y;y=ue;try{return B.apply(this,arguments)}finally{y=ie}}}})(Du)),Du}var Op;function Rv(){return Op||(Op=1,Lu.exports=Cv()),Lu.exports}var Bp;function bv(){if(Bp)return wn;Bp=1;var s=$d(),e=Rv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function y(t){return p.call(S,t)?!0:p.call(_,t)?!1:g.test(t)?S[t]=!0:(_[t]=!0,!1)}function M(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,c){if(i===null||typeof i>"u"||M(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,c,h,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);x[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);x[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);x[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function w(t,i,a,c){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?t.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),L=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,k;function re(t){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var Le=!1;function J(t,i){if(!t||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){c=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}t()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var h=ne.stack.split(`
`),m=c.stack.split(`
`),E=h.length-1,U=m.length-1;1<=E&&0<=U&&h[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(h[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||h[E]!==m[U]){var V=`
`+h[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=U);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function de(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case L:return"Portal";case P:return"Profiler";case j:return"StrictMode";case q:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case le:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(t){var i=Ue(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function lt(t){t._valueTracker||(t._valueTracker=be(t))}function O(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Ue(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vt(t,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xe(t,i){i=i.checked,i!=null&&w(t,"checked",i,!1)}function Ut(t,i){Xe(t,i);var a=we(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?it(t,i.type,a):i.hasOwnProperty("defaultValue")&&it(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function tt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function it(t,i,a){(i!=="number"||bt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var F=Array.isArray;function C(t,i,a,c){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&c&&(t[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,c&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function se(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pe(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(F(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:we(a)}}function ve(t,i){var a=we(i.value),c=we(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function me(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function qe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?qe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ke,st=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,h)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ke=ke||document.createElement("div"),ke.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ke.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){ft.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function et(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=et(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,h):t[a]=h}}var rt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(t,i){if(i){if(rt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function At(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W=null;function Te(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fe=null,he=null,Ce=null;function Ze(t){if(t=ma(t)){if(typeof fe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),fe(t.stateNode,t.type,i))}}function ht(t){he?Ce?Ce.push(t):Ce=[t]:he=t}function Ot(){if(he){var t=he,i=Ce;if(Ce=he=null,Ze(t),i)for(t=0;t<i.length;t++)Ze(i[t])}}function Gt(t,i){return t(i)}function _t(){}var Pn=!1;function Ln(t,i,a){if(Pn)return t(i,a);Pn=!0;try{return Gt(t,i,a)}finally{Pn=!1,(he!==null||Ce!==null)&&(_t(),Ot())}}function zi(t,i){var a=t.stateNode;if(a===null)return null;var c=mo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Kn=!1;if(u)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Kn=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Kn=!1}function $a(t,i,a,c,h,m,E,U,V){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(a,ne)}catch(_e){this.onError(_e)}}var Hi=!1,Si=null,Mr=!1,Vi=null,Ya={onError:function(t){Hi=!0,Si=t}};function Ka(t,i,a,c,h,m,E,U,V){Hi=!1,Si=null,$a.apply(Ya,arguments)}function Zl(t,i,a,c,h,m,E,U,V){if(Ka.apply(this,arguments),Hi){if(Hi){var ne=Si;Hi=!1,Si=null}else throw Error(n(198));Mr||(Mr=!0,Vi=ne)}}function Mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Za(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function N(t){if(Mi(t)!==t)throw Error(n(188))}function X(t){var i=t.alternate;if(!i){if(i=Mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return N(h),t;if(m===c)return N(h),i;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=h,c=m;else{for(var E=!1,U=h.child;U;){if(U===a){E=!0,a=h,c=m;break}if(U===c){E=!0,c=h,a=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===a){E=!0,a=m,c=h;break}if(U===c){E=!0,c=m,a=h;break}U=U.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ee(t){return t=X(t),t!==null?te(t):null}function te(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=te(t);if(i!==null)return i;t=t.sibling}return null}var $=e.unstable_scheduleCallback,Ae=e.unstable_cancelCallback,Ie=e.unstable_shouldYield,He=e.unstable_requestPaint,Re=e.unstable_now,Je=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,gt=e.unstable_NormalPriority,Ft=e.unstable_LowPriority,Nt=e.unstable_IdlePriority,Qt=null,ot=null;function We(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Qt,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:ji,yt=Math.log,Dn=Math.LN2;function ji(t){return t>>>=0,t===0?32:31-(yt(t)/Dn|0)|0}var Jt=64,Gi=4194304;function Ct(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function In(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,h=t.suspendedLanes,m=t.pingedLanes,E=a&268435455;if(E!==0){var U=E&~h;U!==0?c=Ct(U):(m&=E,m!==0&&(c=Ct(m)))}else E=a&~h,E!==0?c=Ct(E):m!==0&&(c=Ct(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-wt(i),h=1<<a,c|=t[a],i&=~h;return c}function Zs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _n(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes;0<m;){var E=31-wt(m),U=1<<E,V=h[E];V===-1?((U&a)===0||(U&c)!==0)&&(h[E]=Zs(U,i)):V<=i&&(t.expiredLanes|=U),m&=~U}}function Er(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qa(){var t=Jt;return Jt<<=1,(Jt&4194240)===0&&(Jt=64),t}function Qr(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Qs(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-wt(i),t[i]=a}function Wg(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-wt(a),m=1<<h;i[h]=0,c[h]=-1,t[h]=-1,a&=~m}}function Ql(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-wt(a),h=1<<c;h&i|t[c]&i&&(t[c]|=i),a&=~h}}var Tt=0;function df(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ff,Jl,hf,pf,mf,ec=!1,Ja=[],Wi=null,Xi=null,qi=null,Js=new Map,ea=new Map,$i=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(i.pointerId)}}function ta(t,i,a,c,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ma(i),i!==null&&Jl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function qg(t,i,a,c,h){switch(i){case"focusin":return Wi=ta(Wi,t,i,a,c,h),!0;case"dragenter":return Xi=ta(Xi,t,i,a,c,h),!0;case"mouseover":return qi=ta(qi,t,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return Js.set(m,ta(Js.get(m)||null,t,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,ea.set(m,ta(ea.get(m)||null,t,i,a,c,h)),!0}return!1}function vf(t){var i=wr(t.target);if(i!==null){var a=Mi(i);if(a!==null){if(i=a.tag,i===13){if(i=Za(a),i!==null){t.blockedOn=i,mf(t.priority,function(){hf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);W=c,a.target.dispatchEvent(c),W=null}else return i=ma(a),i!==null&&Jl(i),t.blockedOn=a,!1;i.shift()}return!0}function _f(t,i,a){eo(t)&&a.delete(i)}function $g(){ec=!1,Wi!==null&&eo(Wi)&&(Wi=null),Xi!==null&&eo(Xi)&&(Xi=null),qi!==null&&eo(qi)&&(qi=null),Js.forEach(_f),ea.forEach(_f)}function na(t,i){t.blockedOn===i&&(t.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function ia(t){function i(h){return na(h,t)}if(0<Ja.length){na(Ja[0],t);for(var a=1;a<Ja.length;a++){var c=Ja[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Wi!==null&&na(Wi,t),Xi!==null&&na(Xi,t),qi!==null&&na(qi,t),Js.forEach(i),ea.forEach(i),a=0;a<$i.length;a++)c=$i[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<$i.length&&(a=$i[0],a.blockedOn===null);)vf(a),a.blockedOn===null&&$i.shift()}var Jr=b.ReactCurrentBatchConfig,to=!0;function Yg(t,i,a,c){var h=Tt,m=Jr.transition;Jr.transition=null;try{Tt=1,tc(t,i,a,c)}finally{Tt=h,Jr.transition=m}}function Kg(t,i,a,c){var h=Tt,m=Jr.transition;Jr.transition=null;try{Tt=4,tc(t,i,a,c)}finally{Tt=h,Jr.transition=m}}function tc(t,i,a,c){if(to){var h=nc(t,i,a,c);if(h===null)xc(t,i,c,no,a),gf(t,c);else if(qg(h,t,i,a,c))c.stopPropagation();else if(gf(t,c),i&4&&-1<Xg.indexOf(t)){for(;h!==null;){var m=ma(h);if(m!==null&&ff(m),m=nc(t,i,a,c),m===null&&xc(t,i,c,no,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else xc(t,i,c,null,a)}}var no=null;function nc(t,i,a,c){if(no=null,t=Te(c),t=wr(t),t!==null)if(i=Mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Za(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function xf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Qe:return 1;case Ge:return 4;case gt:case Ft:return 16;case Nt:return 536870912;default:return 16}default:return 16}}var Yi=null,ic=null,io=null;function yf(){if(io)return io;var t,i=ic,a=i.length,c,h="value"in Yi?Yi.value:Yi.textContent,m=h.length;for(t=0;t<a&&i[t]===h[t];t++);var E=a-t;for(c=1;c<=E&&i[a-c]===h[m-c];c++);return io=h.slice(t,1<c?1-c:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Sf(){return!1}function Un(t){function i(a,c,h,m,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?so:Sf,this.isPropagationStopped=Sf,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Un(es),ra=ie({},es,{view:0,detail:0}),Zg=Un(ra),sc,ac,sa,ao=ie({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(sc=t.screenX-sa.screenX,ac=t.screenY-sa.screenY):ac=sc=0,sa=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Mf=Un(ao),Qg=ie({},ao,{dataTransfer:0}),Jg=Un(Qg),e0=ie({},ra,{relatedTarget:0}),oc=Un(e0),t0=ie({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),n0=Un(t0),i0=ie({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r0=Un(i0),s0=ie({},es,{data:0}),Ef=Un(s0),a0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=l0[t])?!!i[t]:!1}function lc(){return c0}var u0=ie({},ra,{key:function(t){if(t.key){var i=a0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d0=Un(u0),f0=ie({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Un(f0),h0=ie({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),p0=Un(h0),m0=ie({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),g0=Un(m0),v0=ie({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Un(v0),x0=[9,13,27,32],cc=u&&"CompositionEvent"in window,aa=null;u&&"documentMode"in document&&(aa=document.documentMode);var y0=u&&"TextEvent"in window&&!aa,Tf=u&&(!cc||aa&&8<aa&&11>=aa),Af=" ",Cf=!1;function Rf(t,i){switch(t){case"keyup":return x0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function S0(t,i){switch(t){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(Cf=!0,Af);case"textInput":return t=i.data,t===Af&&Cf?null:t;default:return null}}function M0(t,i){if(ts)return t==="compositionend"||!cc&&Rf(t,i)?(t=yf(),io=ic=Yi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tf&&i.locale!=="ko"?null:i.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!E0[t.type]:i==="textarea"}function Pf(t,i,a,c){ht(c),i=fo(i,"onChange"),0<i.length&&(a=new rc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var oa=null,la=null;function w0(t){Yf(t,0)}function oo(t){var i=as(t);if(O(i))return t}function T0(t,i){if(t==="change")return i}var Lf=!1;if(u){var uc;if(u){var dc="oninput"in document;if(!dc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),dc=typeof Df.oninput=="function"}uc=dc}else uc=!1;Lf=uc&&(!document.documentMode||9<document.documentMode)}function If(){oa&&(oa.detachEvent("onpropertychange",Uf),la=oa=null)}function Uf(t){if(t.propertyName==="value"&&oo(la)){var i=[];Pf(i,la,t,Te(t)),Ln(w0,i)}}function A0(t,i,a){t==="focusin"?(If(),oa=i,la=a,oa.attachEvent("onpropertychange",Uf)):t==="focusout"&&If()}function C0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(la)}function R0(t,i){if(t==="click")return oo(i)}function b0(t,i){if(t==="input"||t==="change")return oo(i)}function N0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:N0;function ca(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Zn(t[h],i[h]))return!1}return!0}function Ff(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kf(t,i){var a=Ff(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ff(a)}}function Of(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Of(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Bf(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=bt(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function P0(t){var i=Bf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(c!==null&&fc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!t.extend&&m>c&&(h=c,c=m,m=h),h=kf(a,m);var E=kf(a,c);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),m>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L0=u&&"documentMode"in document&&11>=document.documentMode,ns=null,hc=null,ua=null,pc=!1;function zf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||ns==null||ns!==bt(c)||(c=ns,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&ca(ua,c)||(ua=c,c=fo(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ns)))}function lo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var is={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},mc={},Hf={};u&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function co(t){if(mc[t])return mc[t];if(!is[t])return t;var i=is[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Hf)return mc[t]=i[a];return t}var Vf=co("animationend"),jf=co("animationiteration"),Gf=co("animationstart"),Wf=co("transitionend"),Xf=new Map,qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Xf.set(t,i),l(i,[t])}for(var gc=0;gc<qf.length;gc++){var vc=qf[gc],D0=vc.toLowerCase(),I0=vc[0].toUpperCase()+vc.slice(1);Ki(D0,"on"+I0)}Ki(Vf,"onAnimationEnd"),Ki(jf,"onAnimationIteration"),Ki(Gf,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Wf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function $f(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,Zl(c,i,void 0,t),t.currentTarget=null}function Yf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],V=U.instance,ne=U.currentTarget;if(U=U.listener,V!==m&&h.isPropagationStopped())break e;$f(h,U,ne),m=V}else for(E=0;E<c.length;E++){if(U=c[E],V=U.instance,ne=U.currentTarget,U=U.listener,V!==m&&h.isPropagationStopped())break e;$f(h,U,ne),m=V}}}if(Mr)throw t=Vi,Mr=!1,Vi=null,t}function Pt(t,i){var a=i[Tc];a===void 0&&(a=i[Tc]=new Set);var c=t+"__bubble";a.has(c)||(Kf(i,t,2,!1),a.add(c))}function _c(t,i,a){var c=0;i&&(c|=4),Kf(a,t,c,i)}var uo="_reactListening"+Math.random().toString(36).slice(2);function fa(t){if(!t[uo]){t[uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(U0.has(a)||_c(a,!1,t),_c(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uo]||(i[uo]=!0,_c("selectionchange",!1,i))}}function Kf(t,i,a,c){switch(xf(i)){case 1:var h=Yg;break;case 4:h=Kg;break;default:h=tc}a=h.bind(null,i,a,t),h=void 0,!Kn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function xc(t,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;E=E.return}for(;U!==null;){if(E=wr(U),E===null)return;if(V=E.tag,V===5||V===6){c=m=E;continue e}U=U.parentNode}}c=c.return}Ln(function(){var ne=m,_e=Te(a),Se=[];e:{var ge=Xf.get(t);if(ge!==void 0){var Fe=rc,ze=t;switch(t){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":Fe=d0;break;case"focusin":ze="focus",Fe=oc;break;case"focusout":ze="blur",Fe=oc;break;case"beforeblur":case"afterblur":Fe=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=p0;break;case Vf:case jf:case Gf:Fe=n0;break;case Wf:Fe=g0;break;case"scroll":Fe=Zg;break;case"wheel":Fe=_0;break;case"copy":case"cut":case"paste":Fe=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=wf}var Ve=(i&4)!==0,jt=!Ve&&t==="scroll",K=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var G=ne,Q;G!==null;){Q=G;var Ee=Q.stateNode;if(Q.tag===5&&Ee!==null&&(Q=Ee,K!==null&&(Ee=zi(G,K),Ee!=null&&Ve.push(ha(G,Ee,Q)))),jt)break;G=G.return}0<Ve.length&&(ge=new Fe(ge,ze,null,a,_e),Se.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",ge&&a!==W&&(ze=a.relatedTarget||a.fromElement)&&(wr(ze)||ze[Ei]))break e;if((Fe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(ze=a.relatedTarget||a.toElement,Fe=ne,ze=ze?wr(ze):null,ze!==null&&(jt=Mi(ze),ze!==jt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Fe=null,ze=ne),Fe!==ze)){if(Ve=Mf,Ee="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=wf,Ee="onPointerLeave",K="onPointerEnter",G="pointer"),jt=Fe==null?ge:as(Fe),Q=ze==null?ge:as(ze),ge=new Ve(Ee,G+"leave",Fe,a,_e),ge.target=jt,ge.relatedTarget=Q,Ee=null,wr(_e)===ne&&(Ve=new Ve(K,G+"enter",ze,a,_e),Ve.target=Q,Ve.relatedTarget=jt,Ee=Ve),jt=Ee,Fe&&ze)t:{for(Ve=Fe,K=ze,G=0,Q=Ve;Q;Q=rs(Q))G++;for(Q=0,Ee=K;Ee;Ee=rs(Ee))Q++;for(;0<G-Q;)Ve=rs(Ve),G--;for(;0<Q-G;)K=rs(K),Q--;for(;G--;){if(Ve===K||K!==null&&Ve===K.alternate)break t;Ve=rs(Ve),K=rs(K)}Ve=null}else Ve=null;Fe!==null&&Zf(Se,ge,Fe,Ve,!1),ze!==null&&jt!==null&&Zf(Se,jt,ze,Ve,!0)}}e:{if(ge=ne?as(ne):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var je=T0;else if(Nf(ge))if(Lf)je=b0;else{je=C0;var $e=A0}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=R0);if(je&&(je=je(t,ne))){Pf(Se,je,a,_e);break e}$e&&$e(t,ge,ne),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&it(ge,"number",ge.value)}switch($e=ne?as(ne):window,t){case"focusin":(Nf($e)||$e.contentEditable==="true")&&(ns=$e,hc=ne,ua=null);break;case"focusout":ua=hc=ns=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,zf(Se,a,_e);break;case"selectionchange":if(L0)break;case"keydown":case"keyup":zf(Se,a,_e)}var Ye;if(cc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ts?Rf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Tf&&a.locale!=="ko"&&(ts||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ts&&(Ye=yf()):(Yi=_e,ic="value"in Yi?Yi.value:Yi.textContent,ts=!0)),$e=fo(ne,nt),0<$e.length&&(nt=new Ef(nt,t,null,a,_e),Se.push({event:nt,listeners:$e}),Ye?nt.data=Ye:(Ye=bf(a),Ye!==null&&(nt.data=Ye)))),(Ye=y0?S0(t,a):M0(t,a))&&(ne=fo(ne,"onBeforeInput"),0<ne.length&&(_e=new Ef("onBeforeInput","beforeinput",null,a,_e),Se.push({event:_e,listeners:ne}),_e.data=Ye))}Yf(Se,i)})}function ha(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fo(t,i){for(var a=i+"Capture",c=[];t!==null;){var h=t,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=zi(t,a),m!=null&&c.unshift(ha(t,m,h)),m=zi(t,i),m!=null&&c.push(ha(t,m,h))),t=t.return}return c}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zf(t,i,a,c,h){for(var m=i._reactName,E=[];a!==null&&a!==c;){var U=a,V=U.alternate,ne=U.stateNode;if(V!==null&&V===c)break;U.tag===5&&ne!==null&&(U=ne,h?(V=zi(a,m),V!=null&&E.unshift(ha(a,V,U))):h||(V=zi(a,m),V!=null&&E.push(ha(a,V,U)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var F0=/\r\n?/g,k0=/\u0000|\uFFFD/g;function Qf(t){return(typeof t=="string"?t:""+t).replace(F0,`
`).replace(k0,"")}function ho(t,i,a){if(i=Qf(i),Qf(t)!==i&&a)throw Error(n(425))}function po(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(t){return Jf.resolve(null).then(t).catch(z0)}:Ec;function z0(t){setTimeout(function(){throw t})}function wc(t,i){var a=i,c=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){t.removeChild(h),ia(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ia(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function eh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),ui="__reactFiber$"+ss,pa="__reactProps$"+ss,Ei="__reactContainer$"+ss,Tc="__reactEvents$"+ss,H0="__reactListeners$"+ss,V0="__reactHandles$"+ss;function wr(t){var i=t[ui];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ei]||a[ui]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=eh(t);t!==null;){if(a=t[ui])return a;t=eh(t)}return i}t=a,a=t.parentNode}return null}function ma(t){return t=t[ui]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[pa]||null}var Ac=[],os=-1;function Qi(t){return{current:t}}function Lt(t){0>os||(t.current=Ac[os],Ac[os]=null,os--)}function Rt(t,i){os++,Ac[os]=t.current,t.current=i}var Ji={},ln=Qi(Ji),xn=Qi(!1),Tr=Ji;function ls(t,i){var a=t.type.contextTypes;if(!a)return Ji;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function yn(t){return t=t.childContextTypes,t!=null}function go(){Lt(xn),Lt(ln)}function th(t,i,a){if(ln.current!==Ji)throw Error(n(168));Rt(ln,i),Rt(xn,a)}function nh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(n(108,ye(t)||"Unknown",h));return ie({},a,c)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=ln.current,Rt(ln,t),Rt(xn,xn.current),!0}function ih(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=nh(t,i,Tr),c.__reactInternalMemoizedMergedChildContext=t,Lt(xn),Lt(ln),Rt(ln,t)):Lt(xn),Rt(xn,a)}var wi=null,_o=!1,Cc=!1;function rh(t){wi===null?wi=[t]:wi.push(t)}function j0(t){_o=!0,rh(t)}function er(){if(!Cc&&wi!==null){Cc=!0;var t=0,i=Tt;try{var a=wi;for(Tt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}wi=null,_o=!1}catch(h){throw wi!==null&&(wi=wi.slice(t+1)),$(Qe,er),h}finally{Tt=i,Cc=!1}}return null}var cs=[],us=0,xo=null,yo=0,Vn=[],jn=0,Ar=null,Ti=1,Ai="";function Cr(t,i){cs[us++]=yo,cs[us++]=xo,xo=t,yo=i}function sh(t,i,a){Vn[jn++]=Ti,Vn[jn++]=Ai,Vn[jn++]=Ar,Ar=t;var c=Ti;t=Ai;var h=32-wt(c)-1;c&=~(1<<h),a+=1;var m=32-wt(i)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Ti=1<<32-wt(i)+h|a<<h|c,Ai=m+t}else Ti=1<<m|a<<h|c,Ai=t}function Rc(t){t.return!==null&&(Cr(t,1),sh(t,1,0))}function bc(t){for(;t===xo;)xo=cs[--us],cs[us]=null,yo=cs[--us],cs[us]=null;for(;t===Ar;)Ar=Vn[--jn],Vn[jn]=null,Ai=Vn[--jn],Vn[jn]=null,Ti=Vn[--jn],Vn[jn]=null}var Fn=null,kn=null,kt=!1,Qn=null;function ah(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function oh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,kn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ar!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Fn=t,kn=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(kt){var i=kn;if(i){var a=i;if(!oh(t,i)){if(Nc(t))throw Error(n(418));i=Zi(a.nextSibling);var c=Fn;i&&oh(t,i)?ah(c,a):(t.flags=t.flags&-4097|2,kt=!1,Fn=t)}}else{if(Nc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Fn=t}}}function lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function So(t){if(t!==Fn)return!1;if(!kt)return lh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=kn)){if(Nc(t))throw ch(),Error(n(418));for(;i;)ah(t,i),i=Zi(i.nextSibling)}if(lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){kn=Zi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=Fn?Zi(t.stateNode.nextSibling):null;return!0}function ch(){for(var t=kn;t;)t=Zi(t.nextSibling)}function ds(){kn=Fn=null,kt=!1}function Lc(t){Qn===null?Qn=[t]:Qn.push(t)}var G0=b.ReactCurrentBatchConfig;function ga(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var h=c,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=h.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function uh(t){var i=t._init;return i(t._payload)}function dh(t){function i(K,G){if(t){var Q=K.deletions;Q===null?(K.deletions=[G],K.flags|=16):Q.push(G)}}function a(K,G){if(!t)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function h(K,G){return K=lr(K,G),K.index=0,K.sibling=null,K}function m(K,G,Q){return K.index=Q,t?(Q=K.alternate,Q!==null?(Q=Q.index,Q<G?(K.flags|=2,G):Q):(K.flags|=2,G)):(K.flags|=1048576,G)}function E(K){return t&&K.alternate===null&&(K.flags|=2),K}function U(K,G,Q,Ee){return G===null||G.tag!==6?(G=Eu(Q,K.mode,Ee),G.return=K,G):(G=h(G,Q),G.return=K,G)}function V(K,G,Q,Ee){var je=Q.type;return je===I?_e(K,G,Q.props.children,Ee,Q.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&uh(je)===G.type)?(Ee=h(G,Q.props),Ee.ref=ga(K,G,Q),Ee.return=K,Ee):(Ee=Xo(Q.type,Q.key,Q.props,null,K.mode,Ee),Ee.ref=ga(K,G,Q),Ee.return=K,Ee)}function ne(K,G,Q,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=wu(Q,K.mode,Ee),G.return=K,G):(G=h(G,Q.children||[]),G.return=K,G)}function _e(K,G,Q,Ee,je){return G===null||G.tag!==7?(G=Ur(Q,K.mode,Ee,je),G.return=K,G):(G=h(G,Q),G.return=K,G)}function Se(K,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Eu(""+G,K.mode,Q),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return Q=Xo(G.type,G.key,G.props,null,K.mode,Q),Q.ref=ga(K,null,G),Q.return=K,Q;case L:return G=wu(G,K.mode,Q),G.return=K,G;case oe:var Ee=G._init;return Se(K,Ee(G._payload),Q)}if(F(G)||ue(G))return G=Ur(G,K.mode,Q,null),G.return=K,G;Mo(K,G)}return null}function ge(K,G,Q,Ee){var je=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return je!==null?null:U(K,G,""+Q,Ee);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case H:return Q.key===je?V(K,G,Q,Ee):null;case L:return Q.key===je?ne(K,G,Q,Ee):null;case oe:return je=Q._init,ge(K,G,je(Q._payload),Ee)}if(F(Q)||ue(Q))return je!==null?null:_e(K,G,Q,Ee,null);Mo(K,Q)}return null}function Fe(K,G,Q,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return K=K.get(Q)||null,U(G,K,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case H:return K=K.get(Ee.key===null?Q:Ee.key)||null,V(G,K,Ee,je);case L:return K=K.get(Ee.key===null?Q:Ee.key)||null,ne(G,K,Ee,je);case oe:var $e=Ee._init;return Fe(K,G,Q,$e(Ee._payload),je)}if(F(Ee)||ue(Ee))return K=K.get(Q)||null,_e(G,K,Ee,je,null);Mo(G,Ee)}return null}function ze(K,G,Q,Ee){for(var je=null,$e=null,Ye=G,nt=G=0,nn=null;Ye!==null&&nt<Q.length;nt++){Ye.index>nt?(nn=Ye,Ye=null):nn=Ye.sibling;var St=ge(K,Ye,Q[nt],Ee);if(St===null){Ye===null&&(Ye=nn);break}t&&Ye&&St.alternate===null&&i(K,Ye),G=m(St,G,nt),$e===null?je=St:$e.sibling=St,$e=St,Ye=nn}if(nt===Q.length)return a(K,Ye),kt&&Cr(K,nt),je;if(Ye===null){for(;nt<Q.length;nt++)Ye=Se(K,Q[nt],Ee),Ye!==null&&(G=m(Ye,G,nt),$e===null?je=Ye:$e.sibling=Ye,$e=Ye);return kt&&Cr(K,nt),je}for(Ye=c(K,Ye);nt<Q.length;nt++)nn=Fe(Ye,K,nt,Q[nt],Ee),nn!==null&&(t&&nn.alternate!==null&&Ye.delete(nn.key===null?nt:nn.key),G=m(nn,G,nt),$e===null?je=nn:$e.sibling=nn,$e=nn);return t&&Ye.forEach(function(cr){return i(K,cr)}),kt&&Cr(K,nt),je}function Ve(K,G,Q,Ee){var je=ue(Q);if(typeof je!="function")throw Error(n(150));if(Q=je.call(Q),Q==null)throw Error(n(151));for(var $e=je=null,Ye=G,nt=G=0,nn=null,St=Q.next();Ye!==null&&!St.done;nt++,St=Q.next()){Ye.index>nt?(nn=Ye,Ye=null):nn=Ye.sibling;var cr=ge(K,Ye,St.value,Ee);if(cr===null){Ye===null&&(Ye=nn);break}t&&Ye&&cr.alternate===null&&i(K,Ye),G=m(cr,G,nt),$e===null?je=cr:$e.sibling=cr,$e=cr,Ye=nn}if(St.done)return a(K,Ye),kt&&Cr(K,nt),je;if(Ye===null){for(;!St.done;nt++,St=Q.next())St=Se(K,St.value,Ee),St!==null&&(G=m(St,G,nt),$e===null?je=St:$e.sibling=St,$e=St);return kt&&Cr(K,nt),je}for(Ye=c(K,Ye);!St.done;nt++,St=Q.next())St=Fe(Ye,K,nt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&Ye.delete(St.key===null?nt:St.key),G=m(St,G,nt),$e===null?je=St:$e.sibling=St,$e=St);return t&&Ye.forEach(function(Ev){return i(K,Ev)}),kt&&Cr(K,nt),je}function jt(K,G,Q,Ee){if(typeof Q=="object"&&Q!==null&&Q.type===I&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case H:e:{for(var je=Q.key,$e=G;$e!==null;){if($e.key===je){if(je=Q.type,je===I){if($e.tag===7){a(K,$e.sibling),G=h($e,Q.props.children),G.return=K,K=G;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&uh(je)===$e.type){a(K,$e.sibling),G=h($e,Q.props),G.ref=ga(K,$e,Q),G.return=K,K=G;break e}a(K,$e);break}else i(K,$e);$e=$e.sibling}Q.type===I?(G=Ur(Q.props.children,K.mode,Ee,Q.key),G.return=K,K=G):(Ee=Xo(Q.type,Q.key,Q.props,null,K.mode,Ee),Ee.ref=ga(K,G,Q),Ee.return=K,K=Ee)}return E(K);case L:e:{for($e=Q.key;G!==null;){if(G.key===$e)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(K,G.sibling),G=h(G,Q.children||[]),G.return=K,K=G;break e}else{a(K,G);break}else i(K,G);G=G.sibling}G=wu(Q,K.mode,Ee),G.return=K,K=G}return E(K);case oe:return $e=Q._init,jt(K,G,$e(Q._payload),Ee)}if(F(Q))return ze(K,G,Q,Ee);if(ue(Q))return Ve(K,G,Q,Ee);Mo(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(a(K,G.sibling),G=h(G,Q),G.return=K,K=G):(a(K,G),G=Eu(Q,K.mode,Ee),G.return=K,K=G),E(K)):a(K,G)}return jt}var fs=dh(!0),fh=dh(!1),Eo=Qi(null),wo=null,hs=null,Dc=null;function Ic(){Dc=hs=wo=null}function Uc(t){var i=Eo.current;Lt(Eo),t._currentValue=i}function Fc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function ps(t,i){wo=t,Dc=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Sn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(wo===null)throw Error(n(308));hs=t,wo.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Rr=null;function kc(t){Rr===null?Rr=[t]:Rr.push(t)}function hh(t,i,a,c){var h=i.interleaved;return h===null?(a.next=a,kc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ci(t,c)}function Ci(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var tr=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ci(t,a)}return h=c.interleaved,h===null?(i.next=i,kc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ci(t,a)}function To(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ql(t,a)}}function mh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ao(t,i,a,c){var h=t.updateQueue;tr=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var V=U,ne=V.next;V.next=null,E===null?m=ne:E.next=ne,E=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==E&&(U===null?_e.firstBaseUpdate=ne:U.next=ne,_e.lastBaseUpdate=V))}if(m!==null){var Se=h.baseState;E=0,_e=ne=V=null,U=m;do{var ge=U.lane,Fe=U.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var ze=t,Ve=U;switch(ge=i,Fe=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){Se=ze.call(Fe,Se,ge);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Fe,Se,ge):ze,ge==null)break e;Se=ie({},Se,ge);break e;case 2:tr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,ge=h.effects,ge===null?h.effects=[U]:ge.push(U))}else Fe={eventTime:Fe,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ne=_e=Fe,V=Se):_e=_e.next=Fe,E|=ge;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(_e===null&&(V=Se),h.baseState=V,h.firstBaseUpdate=ne,h.lastBaseUpdate=_e,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Pr|=E,t.lanes=E,t.memoizedState=Se}}function gh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(n(191,h));h.call(c)}}}var va={},di=Qi(va),_a=Qi(va),xa=Qi(va);function br(t){if(t===va)throw Error(n(174));return t}function Bc(t,i){switch(Rt(xa,i),Rt(_a,t),Rt(di,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ne(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ne(i,t)}Lt(di),Rt(di,i)}function ms(){Lt(di),Lt(_a),Lt(xa)}function vh(t){br(xa.current);var i=br(di.current),a=Ne(i,t.type);i!==a&&(Rt(_a,t),Rt(di,a))}function zc(t){_a.current===t&&(Lt(di),Lt(_a))}var Bt=Qi(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ro=b.ReactCurrentDispatcher,jc=b.ReactCurrentBatchConfig,Nr=0,zt=null,$t=null,en=null,bo=!1,ya=!1,Sa=0,W0=0;function cn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Zn(t[a],i[a]))return!1;return!0}function Wc(t,i,a,c,h,m){if(Nr=m,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ro.current=t===null||t.memoizedState===null?Y0:K0,t=a(c,h),ya){m=0;do{if(ya=!1,Sa=0,25<=m)throw Error(n(301));m+=1,en=$t=null,i.updateQueue=null,Ro.current=Z0,t=a(c,h)}while(ya)}if(Ro.current=Lo,i=$t!==null&&$t.next!==null,Nr=0,en=$t=zt=null,bo=!1,i)throw Error(n(300));return t}function Xc(){var t=Sa!==0;return Sa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function Wn(){if($t===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function Ma(t,i){return typeof i=="function"?i(t):i}function qc(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=$t,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var U=E=null,V=null,ne=m;do{var _e=ne.lane;if((Nr&_e)===_e)V!==null&&(V=V.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:t(c,ne.action);else{var Se={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};V===null?(U=V=Se,E=c):V=V.next=Se,zt.lanes|=_e,Pr|=_e}ne=ne.next}while(ne!==null&&ne!==m);V===null?E=c:V.next=U,Zn(c,i.memoizedState)||(Sn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=V,a.lastRenderedState=c}if(t=a.interleaved,t!==null){h=t;do m=h.lane,zt.lanes|=m,Pr|=m,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $c(t){var i=Wn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do m=t(m,E.action),E=E.next;while(E!==h);Zn(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function _h(){}function xh(t,i){var a=zt,c=Wn(),h=i(),m=!Zn(c.memoizedState,h);if(m&&(c.memoizedState=h,Sn=!0),c=c.queue,Yc(Mh.bind(null,a,c,t),[t]),c.getSnapshot!==i||m||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Sh.bind(null,a,c,h,i),void 0,null),tn===null)throw Error(n(349));(Nr&30)!==0||yh(a,i,h)}return h}function yh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Sh(t,i,a,c){i.value=a,i.getSnapshot=c,Eh(i)&&wh(t)}function Mh(t,i,a){return a(function(){Eh(i)&&wh(t)})}function Eh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Zn(t,a)}catch{return!0}}function wh(t){var i=Ci(t,1);i!==null&&ni(i,t,1,-1)}function Th(t){var i=fi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},i.queue=t,t=t.dispatch=$0.bind(null,zt,t),[i.memoizedState,t]}function Ea(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Ah(){return Wn().memoizedState}function No(t,i,a,c){var h=fi();zt.flags|=t,h.memoizedState=Ea(1|i,a,void 0,c===void 0?null:c)}function Po(t,i,a,c){var h=Wn();c=c===void 0?null:c;var m=void 0;if($t!==null){var E=$t.memoizedState;if(m=E.destroy,c!==null&&Gc(c,E.deps)){h.memoizedState=Ea(i,a,m,c);return}}zt.flags|=t,h.memoizedState=Ea(1|i,a,m,c)}function Ch(t,i){return No(8390656,8,t,i)}function Yc(t,i){return Po(2048,8,t,i)}function Rh(t,i){return Po(4,2,t,i)}function bh(t,i){return Po(4,4,t,i)}function Nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ph(t,i,a){return a=a!=null?a.concat([t]):null,Po(4,4,Nh.bind(null,i,t),a)}function Kc(){}function Lh(t,i){var a=Wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Dh(t,i){var a=Wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Ih(t,i,a){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,Sn=!0),t.memoizedState=a):(Zn(a,i)||(a=Qa(),zt.lanes|=a,Pr|=a,t.baseState=!0),i)}function X0(t,i){var a=Tt;Tt=a!==0&&4>a?a:4,t(!0);var c=jc.transition;jc.transition={};try{t(!1),i()}finally{Tt=a,jc.transition=c}}function Uh(){return Wn().memoizedState}function q0(t,i,a){var c=ar(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Fh(t))kh(i,a);else if(a=hh(t,i,a,c),a!==null){var h=mn();ni(a,t,c,h),Oh(a,i,c)}}function $0(t,i,a){var c=ar(t),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fh(t))kh(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,a);if(h.hasEagerState=!0,h.eagerState=U,Zn(U,E)){var V=i.interleaved;V===null?(h.next=h,kc(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}a=hh(t,i,h,c),a!==null&&(h=mn(),ni(a,t,c,h),Oh(a,i,c))}}function Fh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function kh(t,i){ya=bo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Oh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ql(t,a)}}var Lo={readContext:Gn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},Y0={readContext:Gn,useCallback:function(t,i){return fi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:Ch,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,No(4194308,4,Nh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return No(4194308,4,t,i)},useInsertionEffect:function(t,i){return No(4,2,t,i)},useMemo:function(t,i){var a=fi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=fi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=q0.bind(null,zt,t),[c.memoizedState,t]},useRef:function(t){var i=fi();return t={current:t},i.memoizedState=t},useState:Th,useDebugValue:Kc,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Th(!1),i=t[0];return t=X0.bind(null,t[1]),fi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=zt,h=fi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),tn===null)throw Error(n(349));(Nr&30)!==0||yh(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Ch(Mh.bind(null,c,m,t),[t]),c.flags|=2048,Ea(9,Sh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var t=fi(),i=tn.identifierPrefix;if(kt){var a=Ai,c=Ti;a=(c&~(1<<32-wt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Sa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=W0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},K0={readContext:Gn,useCallback:Lh,useContext:Gn,useEffect:Yc,useImperativeHandle:Ph,useInsertionEffect:Rh,useLayoutEffect:bh,useMemo:Dh,useReducer:qc,useRef:Ah,useState:function(){return qc(Ma)},useDebugValue:Kc,useDeferredValue:function(t){var i=Wn();return Ih(i,$t.memoizedState,t)},useTransition:function(){var t=qc(Ma)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:_h,useSyncExternalStore:xh,useId:Uh,unstable_isNewReconciler:!1},Z0={readContext:Gn,useCallback:Lh,useContext:Gn,useEffect:Yc,useImperativeHandle:Ph,useInsertionEffect:Rh,useLayoutEffect:bh,useMemo:Dh,useReducer:$c,useRef:Ah,useState:function(){return $c(Ma)},useDebugValue:Kc,useDeferredValue:function(t){var i=Wn();return $t===null?i.memoizedState=t:Ih(i,$t.memoizedState,t)},useTransition:function(){var t=$c(Ma)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:_h,useSyncExternalStore:xh,useId:Uh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=ie({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Zc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Do={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=mn(),h=ar(t),m=Ri(c,h);m.payload=i,a!=null&&(m.callback=a),i=nr(t,m,h),i!==null&&(ni(i,t,h,c),To(i,t,h))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=mn(),h=ar(t),m=Ri(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=nr(t,m,h),i!==null&&(ni(i,t,h,c),To(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=mn(),c=ar(t),h=Ri(a,c);h.tag=2,i!=null&&(h.callback=i),i=nr(t,h,c),i!==null&&(ni(i,t,c,a),To(i,t,c))}};function Bh(t,i,a,c,h,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!ca(a,c)||!ca(h,m):!0}function zh(t,i,a){var c=!1,h=Ji,m=i.contextType;return typeof m=="object"&&m!==null?m=Gn(m):(h=yn(i)?Tr:ln.current,c=i.contextTypes,m=(c=c!=null)?ls(t,h):Ji),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=m),i}function Hh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function Qc(t,i,a,c){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},Oc(t);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Gn(m):(m=yn(i)?Tr:ln.current,h.context=ls(t,m)),h.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Zc(t,i,m,a),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Do.enqueueReplaceState(h,h.state,null),Ao(t,a,h,c),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var a="",c=i;do a+=de(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:h,digest:null}}function Jc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Q0=typeof WeakMap=="function"?WeakMap:Map;function Vh(t,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){zo||(zo=!0,mu=c),eu(t,i)},a}function jh(t,i,a){a=Ri(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){eu(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){eu(t,i),typeof c!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Gh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Q0;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),t=fv.bind(null,t,i,a),i.then(t,t))}function Wh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Xh(t,i,a,c,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,nr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var J0=b.ReactCurrentOwner,Sn=!1;function pn(t,i,a,c){i.child=t===null?fh(i,null,a,c):fs(i,t.child,a,c)}function qh(t,i,a,c,h){a=a.render;var m=i.ref;return ps(i,h),c=Wc(t,i,a,c,m,h),a=Xc(),t!==null&&!Sn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,bi(t,i,h)):(kt&&a&&Rc(i),i.flags|=1,pn(t,i,c,h),i.child)}function $h(t,i,a,c,h){if(t===null){var m=a.type;return typeof m=="function"&&!Mu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Yh(t,i,m,c,h)):(t=Xo(a.type,null,c,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&h)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(E,c)&&t.ref===i.ref)return bi(t,i,h)}return i.flags|=1,t=lr(m,c),t.ref=i.ref,t.return=i,i.child=t}function Yh(t,i,a,c,h){if(t!==null){var m=t.memoizedProps;if(ca(m,c)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=c=m,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,bi(t,i,h)}return tu(t,i,a,c,h)}function Kh(t,i,a){var c=i.pendingProps,h=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(_s,On),On|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Rt(_s,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Rt(_s,On),On|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Rt(_s,On),On|=c;return pn(t,i,h,a),i.child}function Zh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,a,c,h){var m=yn(a)?Tr:ln.current;return m=ls(i,m),ps(i,h),a=Wc(t,i,a,c,m,h),c=Xc(),t!==null&&!Sn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,bi(t,i,h)):(kt&&c&&Rc(i),i.flags|=1,pn(t,i,a,h),i.child)}function Qh(t,i,a,c,h){if(yn(a)){var m=!0;vo(i)}else m=!1;if(ps(i,h),i.stateNode===null)Uo(t,i),zh(i,a,c),Qc(i,a,c,h),c=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var V=E.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Gn(ne):(ne=yn(a)?Tr:ln.current,ne=ls(i,ne));var _e=a.getDerivedStateFromProps,Se=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||V!==ne)&&Hh(i,E,c,ne),tr=!1;var ge=i.memoizedState;E.state=ge,Ao(i,c,E,h),V=i.memoizedState,U!==c||ge!==V||xn.current||tr?(typeof _e=="function"&&(Zc(i,a,_e,c),V=i.memoizedState),(U=tr||Bh(i,a,U,c,ge,V,ne))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),E.props=c,E.state=V,E.context=ne,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,ph(t,i),U=i.memoizedProps,ne=i.type===i.elementType?U:Jn(i.type,U),E.props=ne,Se=i.pendingProps,ge=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=Gn(V):(V=yn(a)?Tr:ln.current,V=ls(i,V));var Fe=a.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ge!==V)&&Hh(i,E,c,V),tr=!1,ge=i.memoizedState,E.state=ge,Ao(i,c,E,h);var ze=i.memoizedState;U!==Se||ge!==ze||xn.current||tr?(typeof Fe=="function"&&(Zc(i,a,Fe,c),ze=i.memoizedState),(ne=tr||Bh(i,a,ne,c,ge,ze,V)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ze,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ze,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),E.props=c,E.state=ze,E.context=V,c=ne):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,a,c,m,h)}function nu(t,i,a,c,h,m){Zh(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&ih(i,a,!1),bi(t,i,m);c=i.stateNode,J0.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=fs(i,t.child,null,m),i.child=fs(i,null,U,m)):pn(t,i,U,m),i.memoizedState=c.state,h&&ih(i,a,!0),i.child}function Jh(t){var i=t.stateNode;i.pendingContext?th(t,i.pendingContext,i.pendingContext!==i.context):i.context&&th(t,i.context,!1),Bc(t,i.containerInfo)}function ep(t,i,a,c,h){return ds(),Lc(h),i.flags|=256,pn(t,i,a,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function tp(t,i,a){var c=i.pendingProps,h=Bt.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(h&2)!==0),U?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Rt(Bt,h&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=qo(E,c,0,null),t=Ur(t,c,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=ru(a),i.memoizedState=iu,t):su(i,E));if(h=t.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return ev(t,i,E,c,U,h,a);if(m){m=c.fallback,E=i.mode,h=t.child,U=h.sibling;var V={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=lr(h,V),c.subtreeFlags=h.subtreeFlags&14680064),U!==null?m=lr(U,m):(m=Ur(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=t.child.memoizedState,E=E===null?ru(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=t.childLanes&~a,i.memoizedState=iu,c}return m=t.child,t=m.sibling,c=lr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Io(t,i,a,c){return c!==null&&Lc(c),fs(i,t.child,null,a),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ev(t,i,a,c,h,m,E){if(a)return i.flags&256?(i.flags&=-257,c=Jc(Error(n(422))),Io(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=qo({mode:"visible",children:c.children},h,0,null),m=Ur(m,h,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&fs(i,t.child,null,E),i.child.memoizedState=ru(E),i.memoizedState=iu,m);if((i.mode&1)===0)return Io(t,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(n(419)),c=Jc(m,c,void 0),Io(t,i,E,c)}if(U=(E&t.childLanes)!==0,Sn||U){if(c=tn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Ci(t,h),ni(c,t,h,-1))}return Su(),c=Jc(Error(n(421))),Io(t,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=hv.bind(null,t),h._reactRetry=i,null):(t=m.treeContext,kn=Zi(h.nextSibling),Fn=i,kt=!0,Qn=null,t!==null&&(Vn[jn++]=Ti,Vn[jn++]=Ai,Vn[jn++]=Ar,Ti=t.id,Ai=t.overflow,Ar=i),i=su(i,c.children),i.flags|=4096,i)}function np(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,a)}function au(t,i,a,c,h){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function ip(t,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(pn(t,i,c.children,a),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,a,i);else if(t.tag===19)np(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Rt(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),au(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Co(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}au(i,!0,a,null,m);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=lr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=lr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function tv(t,i,a){switch(i.tag){case 3:Jh(i),ds();break;case 5:vh(i);break;case 1:yn(i.type)&&vo(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Rt(Eo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Rt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?tp(t,i,a):(Rt(Bt,Bt.current&1),t=bi(t,i,a),t!==null?t.sibling:null);Rt(Bt,Bt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return ip(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Rt(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,Kh(t,i,a)}return bi(t,i,a)}var rp,ou,sp,ap;rp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ou=function(){},sp=function(t,i,a,c){var h=t.memoizedProps;if(h!==c){t=i.stateNode,br(di.current);var m=null;switch(a){case"input":h=vt(t,h),c=vt(t,c),m=[];break;case"select":h=ie({},h,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":h=se(t,h),c=se(t,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=po)}at(a,c);var E;a=null;for(ne in h)if(!c.hasOwnProperty(ne)&&h.hasOwnProperty(ne)&&h[ne]!=null)if(ne==="style"){var U=h[ne];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in c){var V=c[ne];if(U=h?.[ne],c.hasOwnProperty(ne)&&V!==U&&(V!=null||U!=null))if(ne==="style")if(U){for(E in U)!U.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&U[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(m||(m=[]),m.push(ne,a)),a=V;else ne==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(m=m||[]).push(ne,V)):ne==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ne,""+V):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(V!=null&&ne==="onScroll"&&Pt("scroll",t),m||U===V||(m=[])):(m=m||[]).push(ne,V))}a&&(m=m||[]).push("style",a);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},ap=function(t,i,a,c){a!==c&&(i.flags|=4)};function wa(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function nv(t,i,a){var c=i.pendingProps;switch(bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return yn(i.type)&&go(),un(i),null;case 3:return c=i.stateNode,ms(),Lt(xn),Lt(ln),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(So(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(_u(Qn),Qn=null))),ou(t,i),un(i),null;case 5:zc(i);var h=br(xa.current);if(a=i.type,t!==null&&i.stateNode!=null)sp(t,i,a,c,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=br(di.current),So(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[ui]=i,c[pa]=m,t=(i.mode&1)!==0,a){case"dialog":Pt("cancel",c),Pt("close",c);break;case"iframe":case"object":case"embed":Pt("load",c);break;case"video":case"audio":for(h=0;h<da.length;h++)Pt(da[h],c);break;case"source":Pt("error",c);break;case"img":case"image":case"link":Pt("error",c),Pt("load",c);break;case"details":Pt("toggle",c);break;case"input":Mt(c,m),Pt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Pt("invalid",c);break;case"textarea":pe(c,m),Pt("invalid",c)}at(a,m),h=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&ho(c.textContent,U,t),h=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&ho(c.textContent,U,t),h=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Pt("scroll",c)}switch(a){case"input":lt(c),tt(c,m,!0);break;case"textarea":lt(c),me(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=po)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(a,{is:c.is}):(t=E.createElement(a),a==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,a),t[ui]=i,t[pa]=c,rp(t,i,!1,!1),i.stateNode=t;e:{switch(E=At(a,c),a){case"dialog":Pt("cancel",t),Pt("close",t),h=c;break;case"iframe":case"object":case"embed":Pt("load",t),h=c;break;case"video":case"audio":for(h=0;h<da.length;h++)Pt(da[h],t);h=c;break;case"source":Pt("error",t),h=c;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),h=c;break;case"details":Pt("toggle",t),h=c;break;case"input":Mt(t,c),h=vt(t,c),Pt("invalid",t);break;case"option":h=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},h=ie({},c,{value:void 0}),Pt("invalid",t);break;case"textarea":pe(t,c),h=se(t,c),Pt("invalid",t);break;default:h=c}at(a,h),U=h;for(m in U)if(U.hasOwnProperty(m)){var V=U[m];m==="style"?Oe(t,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&st(t,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Me(t,V):typeof V=="number"&&Me(t,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Pt("scroll",t):V!=null&&w(t,m,V,E))}switch(a){case"input":lt(t),tt(t,c,!1);break;case"textarea":lt(t),me(t);break;case"option":c.value!=null&&t.setAttribute("value",""+we(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?C(t,!!c.multiple,m,!1):c.defaultValue!=null&&C(t,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)ap(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=br(xa.current),br(di.current),So(i)){if(c=i.stateNode,a=i.memoizedProps,c[ui]=i,(m=c.nodeValue!==a)&&(t=Fn,t!==null))switch(t.tag){case 3:ho(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(c.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ui]=i,i.stateNode=c}return un(i),null;case 13:if(Lt(Bt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ch(),ds(),i.flags|=98560,m=!1;else if(m=So(i),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[ui]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),m=!1}else Qn!==null&&(_u(Qn),Qn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Yt===0&&(Yt=3):Su())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return ms(),ou(t,i),t===null&&fa(i.stateNode.containerInfo),un(i),null;case 10:return Uc(i.type._context),un(i),null;case 17:return yn(i.type)&&go(),un(i),null;case 19:if(Lt(Bt),m=i.memoizedState,m===null)return un(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)wa(m,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Co(t),E!==null){for(i.flags|=128,wa(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,t=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,t=E.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Rt(Bt,Bt.current&1|2),i.child}t=t.sibling}m.tail!==null&&Re()>xs&&(i.flags|=128,c=!0,wa(m,!1),i.lanes=4194304)}else{if(!c)if(t=Co(E),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!kt)return un(i),null}else 2*Re()-m.renderingStartTime>xs&&a!==1073741824&&(i.flags|=128,c=!0,wa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Re(),i.sibling=null,a=Bt.current,Rt(Bt,c?a&1|2:a&1),i):(un(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(On&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function iv(t,i){switch(bc(i),i.tag){case 1:return yn(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),Lt(xn),Lt(ln),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Lt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Bt),null;case 4:return ms(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Fo=!1,dn=!1,rv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function vs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Vt(t,i,c)}else a.current=null}function lu(t,i,a){try{a()}catch(c){Vt(t,i,c)}}var op=!1;function sv(t,i){if(yc=to,t=Bf(),fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,U=-1,V=-1,ne=0,_e=0,Se=t,ge=null;t:for(;;){for(var Fe;Se!==a||h!==0&&Se.nodeType!==3||(U=E+h),Se!==m||c!==0&&Se.nodeType!==3||(V=E+c),Se.nodeType===3&&(E+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ge=Se,Se=Fe;for(;;){if(Se===t)break t;if(ge===a&&++ne===h&&(U=E),ge===m&&++_e===c&&(V=E),(Fe=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Fe}a=U===-1||V===-1?null:{start:U,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sc={focusedElem:t,selectionRange:a},to=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,jt=ze.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:Jn(i.type,Ve),jt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Vt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return ze=op,op=!1,ze}function Ta(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&t)===t){var m=h.destroy;h.destroy=void 0,m!==void 0&&lu(i,a,m)}h=h.next}while(h!==c)}}function ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function cu(t){var i=t.ref;if(i!==null){var a=t.stateNode;t.tag,t=a,typeof i=="function"?i(t):i.current=t}}function lp(t){var i=t.alternate;i!==null&&(t.alternate=null,lp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ui],delete i[pa],delete i[Tc],delete i[H0],delete i[V0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cp(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,a),t=t.sibling;t!==null;)uu(t,i,a),t=t.sibling}function du(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,a),t=t.sibling;t!==null;)du(t,i,a),t=t.sibling}var sn=null,ei=!1;function ir(t,i,a){for(a=a.child;a!==null;)dp(t,i,a),a=a.sibling}function dp(t,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 5:dn||vs(a,i);case 6:var c=sn,h=ei;sn=null,ir(t,i,a),sn=c,ei=h,sn!==null&&(ei?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ei?(t=sn,a=a.stateNode,t.nodeType===8?wc(t.parentNode,a):t.nodeType===1&&wc(t,a),ia(t)):wc(sn,a.stateNode));break;case 4:c=sn,h=ei,sn=a.stateNode.containerInfo,ei=!0,ir(t,i,a),sn=c,ei=h;break;case 0:case 11:case 14:case 15:if(!dn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&lu(a,i,E),h=h.next}while(h!==c)}ir(t,i,a);break;case 1:if(!dn&&(vs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Vt(a,i,U)}ir(t,i,a);break;case 21:ir(t,i,a);break;case 22:a.mode&1?(dn=(c=dn)||a.memoizedState!==null,ir(t,i,a),dn=c):ir(t,i,a);break;default:ir(t,i,a)}}function fp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new rv),i.forEach(function(c){var h=pv.bind(null,t,c);a.has(c)||(a.add(c),c.then(h,h))})}}function ti(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:sn=U.stateNode,ei=!1;break e;case 3:sn=U.stateNode.containerInfo,ei=!0;break e;case 4:sn=U.stateNode.containerInfo,ei=!0;break e}U=U.return}if(sn===null)throw Error(n(160));dp(m,E,h),sn=null,ei=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(ne){Vt(h,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hp(i,t),i=i.sibling}function hp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),hi(t),c&4){try{Ta(3,t,t.return),ko(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{Ta(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ti(i,t),hi(t),c&512&&a!==null&&vs(a,a.return);break;case 5:if(ti(i,t),hi(t),c&512&&a!==null&&vs(a,a.return),t.flags&32){var h=t.stateNode;try{Me(h,"")}catch(Ve){Vt(t,t.return,Ve)}}if(c&4&&(h=t.stateNode,h!=null)){var m=t.memoizedProps,E=a!==null?a.memoizedProps:m,U=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&Xe(h,m),At(U,E);var ne=At(U,m);for(E=0;E<V.length;E+=2){var _e=V[E],Se=V[E+1];_e==="style"?Oe(h,Se):_e==="dangerouslySetInnerHTML"?st(h,Se):_e==="children"?Me(h,Se):w(h,_e,Se,ne)}switch(U){case"input":Ut(h,m);break;case"textarea":ve(h,m);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?C(h,!!m.multiple,Fe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?C(h,!!m.multiple,m.defaultValue,!0):C(h,!!m.multiple,m.multiple?[]:"",!1))}h[pa]=m}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ti(i,t),hi(t),c&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,m=t.memoizedProps;try{h.nodeValue=m}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ti(i,t),hi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ia(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ti(i,t),hi(t);break;case 13:ti(i,t),hi(t),h=t.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(pu=Re())),c&4&&fp(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(dn=(ne=dn)||_e,ti(i,t),dn=ne):ti(i,t),hi(t),c&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(Se=Be=_e;Be!==null;){switch(ge=Be,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ta(4,ge,ge.return);break;case 1:vs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Vt(c,a,Ve)}}break;case 5:vs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){gp(Se);continue}}Fe!==null?(Fe.return=ge,Be=Fe):gp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{h=Se.stateNode,ne?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Se.stateNode,V=Se.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=et("display",E))}catch(Ve){Vt(t,t.return,Ve)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ti(i,t),hi(t),c&4&&fp(t);break;case 21:break;default:ti(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(cp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Me(h,""),c.flags&=-33);var m=up(t);du(t,m,h);break;case 3:case 4:var E=c.stateNode.containerInfo,U=up(t);uu(t,U,E);break;default:throw Error(n(161))}}catch(V){Vt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function av(t,i,a){Be=t,pp(t)}function pp(t,i,a){for(var c=(t.mode&1)!==0;Be!==null;){var h=Be,m=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Fo;if(!E){var U=h.alternate,V=U!==null&&U.memoizedState!==null||dn;U=Fo;var ne=dn;if(Fo=E,(dn=V)&&!ne)for(Be=h;Be!==null;)E=Be,V=E.child,E.tag===22&&E.memoizedState!==null?vp(h):V!==null?(V.return=E,Be=V):vp(h);for(;m!==null;)Be=m,pp(m),m=m.sibling;Be=h,Fo=U,dn=ne}mp(t)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Be=m):mp(t)}}function mp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||ko(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!dn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Jn(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&gh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}gh(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ia(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&cu(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function gp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function vp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ko(4,i)}catch(V){Vt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){Vt(i,h,V)}}var m=i.return;try{cu(i)}catch(V){Vt(i,m,V)}break;case 5:var E=i.return;try{cu(i)}catch(V){Vt(i,E,V)}}}catch(V){Vt(i,i.return,V)}if(i===t){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var ov=Math.ceil,Oo=b.ReactCurrentDispatcher,fu=b.ReactCurrentOwner,Xn=b.ReactCurrentBatchConfig,xt=0,tn=null,Wt=null,an=0,On=0,_s=Qi(0),Yt=0,Aa=null,Pr=0,Bo=0,hu=0,Ca=null,Mn=null,pu=0,xs=1/0,Ni=null,zo=!1,mu=null,rr=null,Ho=!1,sr=null,Vo=0,Ra=0,gu=null,jo=-1,Go=0;function mn(){return(xt&6)!==0?Re():jo!==-1?jo:jo=Re()}function ar(t){return(t.mode&1)===0?1:(xt&2)!==0&&an!==0?an&-an:G0.transition!==null?(Go===0&&(Go=Qa()),Go):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:xf(t.type)),t)}function ni(t,i,a,c){if(50<Ra)throw Ra=0,gu=null,Error(n(185));Qs(t,a,c),((xt&2)===0||t!==tn)&&(t===tn&&((xt&2)===0&&(Bo|=a),Yt===4&&or(t,an)),En(t,c),a===1&&xt===0&&(i.mode&1)===0&&(xs=Re()+500,_o&&er()))}function En(t,i){var a=t.callbackNode;_n(t,i);var c=In(t,t===tn?an:0);if(c===0)a!==null&&Ae(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&Ae(a),i===1)t.tag===0?j0(xp.bind(null,t)):rh(xp.bind(null,t)),B0(function(){(xt&6)===0&&er()}),a=null;else{switch(df(c)){case 1:a=Qe;break;case 4:a=Ge;break;case 16:a=gt;break;case 536870912:a=Nt;break;default:a=gt}a=Cp(a,_p.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function _p(t,i){if(jo=-1,Go=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ys()&&t.callbackNode!==a)return null;var c=In(t,t===tn?an:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Wo(t,c);else{i=c;var h=xt;xt|=2;var m=Sp();(tn!==t||an!==i)&&(Ni=null,xs=Re()+500,Dr(t,i));do try{uv();break}catch(U){yp(t,U)}while(!0);Ic(),Oo.current=m,xt=h,Wt!==null?i=0:(tn=null,an=0,i=Yt)}if(i!==0){if(i===2&&(h=Er(t),h!==0&&(c=h,i=vu(t,h))),i===1)throw a=Aa,Dr(t,0),or(t,c),En(t,Re()),a;if(i===6)or(t,c);else{if(h=t.current.alternate,(c&30)===0&&!lv(h)&&(i=Wo(t,c),i===2&&(m=Er(t),m!==0&&(c=m,i=vu(t,m))),i===1))throw a=Aa,Dr(t,0),or(t,c),En(t,Re()),a;switch(t.finishedWork=h,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,Mn,Ni);break;case 3:if(or(t,c),(c&130023424)===c&&(i=pu+500-Re(),10<i)){if(In(t,0)!==0)break;if(h=t.suspendedLanes,(h&c)!==c){mn(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=Ec(Ir.bind(null,t,Mn,Ni),i);break}Ir(t,Mn,Ni);break;case 4:if(or(t,c),(c&4194240)===c)break;for(i=t.eventTimes,h=-1;0<c;){var E=31-wt(c);m=1<<E,E=i[E],E>h&&(h=E),c&=~m}if(c=h,c=Re()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ov(c/1960))-c,10<c){t.timeoutHandle=Ec(Ir.bind(null,t,Mn,Ni),c);break}Ir(t,Mn,Ni);break;case 5:Ir(t,Mn,Ni);break;default:throw Error(n(329))}}}return En(t,Re()),t.callbackNode===a?_p.bind(null,t):null}function vu(t,i){var a=Ca;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=Mn,Mn=a,i!==null&&_u(i)),t}function _u(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function lv(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!Zn(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~hu,i&=~Bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-wt(i),c=1<<a;t[a]=-1,i&=~c}}function xp(t){if((xt&6)!==0)throw Error(n(327));ys();var i=In(t,0);if((i&1)===0)return En(t,Re()),null;var a=Wo(t,i);if(t.tag!==0&&a===2){var c=Er(t);c!==0&&(i=c,a=vu(t,c))}if(a===1)throw a=Aa,Dr(t,0),or(t,i),En(t,Re()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,Mn,Ni),En(t,Re()),null}function xu(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(xs=Re()+500,_o&&er())}}function Lr(t){sr!==null&&sr.tag===0&&(xt&6)===0&&ys();var i=xt;xt|=1;var a=Xn.transition,c=Tt;try{if(Xn.transition=null,Tt=1,t)return t()}finally{Tt=c,Xn.transition=a,xt=i,(xt&6)===0&&er()}}function yu(){On=_s.current,Lt(_s)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,O0(a)),Wt!==null)for(a=Wt.return;a!==null;){var c=a;switch(bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&go();break;case 3:ms(),Lt(xn),Lt(ln),Vc();break;case 5:zc(c);break;case 4:ms();break;case 13:Lt(Bt);break;case 19:Lt(Bt);break;case 10:Uc(c.type._context);break;case 22:case 23:yu()}a=a.return}if(tn=t,Wt=t=lr(t.current,null),an=On=i,Yt=0,Aa=null,hu=Bo=Pr=0,Mn=Ca=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=h,c.next=E}a.pending=c}Rr=null}return t}function yp(t,i){do{var a=Wt;try{if(Ic(),Ro.current=Lo,bo){for(var c=zt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}bo=!1}if(Nr=0,en=$t=zt=null,ya=!1,Sa=0,fu.current=null,a===null||a.return===null){Yt=1,Aa=i,Wt=null;break}e:{var m=t,E=a.return,U=a,V=i;if(i=an,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ne=V,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=Wh(E);if(Fe!==null){Fe.flags&=-257,Xh(Fe,E,U,m,i),Fe.mode&1&&Gh(m,ne,i),i=Fe,V=ne;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(V),i.updateQueue=Ve}else ze.add(V);break e}else{if((i&1)===0){Gh(m,ne,i),Su();break e}V=Error(n(426))}}else if(kt&&U.mode&1){var jt=Wh(E);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Xh(jt,E,U,m,i),Lc(gs(V,U));break e}}m=V=gs(V,U),Yt!==4&&(Yt=2),Ca===null?Ca=[m]:Ca.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=Vh(m,V,i);mh(m,K);break e;case 1:U=V;var G=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(rr===null||!rr.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=jh(m,U,i);mh(m,Ee);break e}}m=m.return}while(m!==null)}Ep(a)}catch(je){i=je,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function Sp(){var t=Oo.current;return Oo.current=Lo,t===null?Lo:t}function Su(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),tn===null||(Pr&268435455)===0&&(Bo&268435455)===0||or(tn,an)}function Wo(t,i){var a=xt;xt|=2;var c=Sp();(tn!==t||an!==i)&&(Ni=null,Dr(t,i));do try{cv();break}catch(h){yp(t,h)}while(!0);if(Ic(),xt=a,Oo.current=c,Wt!==null)throw Error(n(261));return tn=null,an=0,Yt}function cv(){for(;Wt!==null;)Mp(Wt)}function uv(){for(;Wt!==null&&!Ie();)Mp(Wt)}function Mp(t){var i=Ap(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?Ep(t):Wt=i,fu.current=null}function Ep(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=nv(a,i,On),a!==null){Wt=a;return}}else{if(a=iv(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Ir(t,i,a){var c=Tt,h=Xn.transition;try{Xn.transition=null,Tt=1,dv(t,i,a,c)}finally{Xn.transition=h,Tt=c}return null}function dv(t,i,a,c){do ys();while(sr!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Wg(t,m),t===tn&&(Wt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ho||(Ho=!0,Cp(gt,function(){return ys(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Xn.transition,Xn.transition=null;var E=Tt;Tt=1;var U=xt;xt|=4,fu.current=null,sv(t,a),hp(a,t),P0(Sc),to=!!yc,Sc=yc=null,t.current=a,av(a),He(),xt=U,Tt=E,Xn.transition=m}else t.current=a;if(Ho&&(Ho=!1,sr=t,Vo=h),m=t.pendingLanes,m===0&&(rr=null),We(a.stateNode),En(t,Re()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(zo)throw zo=!1,t=mu,mu=null,t;return(Vo&1)!==0&&t.tag!==0&&ys(),m=t.pendingLanes,(m&1)!==0?t===gu?Ra++:(Ra=0,gu=t):Ra=0,er(),null}function ys(){if(sr!==null){var t=df(Vo),i=Xn.transition,a=Tt;try{if(Xn.transition=null,Tt=16>t?16:t,sr===null)var c=!1;else{if(t=sr,sr=null,Vo=0,(xt&6)!==0)throw Error(n(331));var h=xt;for(xt|=4,Be=t.current;Be!==null;){var m=Be,E=m.child;if((Be.flags&16)!==0){var U=m.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ne=U[V];for(Be=ne;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Ta(8,_e,m)}var Se=_e.child;if(Se!==null)Se.return=_e,Be=Se;else for(;Be!==null;){_e=Be;var ge=_e.sibling,Fe=_e.return;if(lp(_e),_e===ne){Be=null;break}if(ge!==null){ge.return=Fe,Be=ge;break}Be=Fe}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var jt=Ve.sibling;Ve.sibling=null,Ve=jt}while(Ve!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Be=E;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ta(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Be=K;break e}Be=m.return}}var G=t.current;for(Be=G;Be!==null;){E=Be;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,Be=Q;else e:for(E=G;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ko(9,U)}}catch(je){Vt(U,U.return,je)}if(U===E){Be=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,Be=Ee;break e}Be=U.return}}if(xt=h,er(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Qt,t)}catch{}c=!0}return c}finally{Tt=a,Xn.transition=i}}return!1}function wp(t,i,a){i=gs(a,i),i=Vh(t,i,1),t=nr(t,i,1),i=mn(),t!==null&&(Qs(t,1,i),En(t,i))}function Vt(t,i,a){if(t.tag===3)wp(t,t,a);else for(;i!==null;){if(i.tag===3){wp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(rr===null||!rr.has(c))){t=gs(a,t),t=jh(i,t,1),i=nr(i,t,1),t=mn(),i!==null&&(Qs(i,1,t),En(i,t));break}}i=i.return}}function fv(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&a,tn===t&&(an&a)===a&&(Yt===4||Yt===3&&(an&130023424)===an&&500>Re()-pu?Dr(t,0):hu|=a),En(t,i)}function Tp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gi,Gi<<=1,(Gi&130023424)===0&&(Gi=4194304)));var a=mn();t=Ci(t,i),t!==null&&(Qs(t,i,a),En(t,a))}function hv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Tp(t,a)}function pv(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Tp(t,a)}var Ap;Ap=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||xn.current)Sn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Sn=!1,tv(t,i,a);Sn=(t.flags&131072)!==0}else Sn=!1,kt&&(i.flags&1048576)!==0&&sh(i,yo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Uo(t,i),t=i.pendingProps;var h=ls(i,ln.current);ps(i,a),h=Wc(null,i,c,t,h,a);var m=Xc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(c)?(m=!0,vo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Oc(i),h.updater=Do,i.stateNode=h,h._reactInternals=i,Qc(i,c,t,a),i=nu(null,i,c,!0,m,a)):(i.tag=0,kt&&m&&Rc(i),pn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Uo(t,i),t=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=gv(c),t=Jn(c,t),h){case 0:i=tu(null,i,c,t,a);break e;case 1:i=Qh(null,i,c,t,a);break e;case 11:i=qh(null,i,c,t,a);break e;case 14:i=$h(null,i,c,Jn(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Jn(c,h),tu(t,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Jn(c,h),Qh(t,i,c,h,a);case 3:e:{if(Jh(i),t===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,h=m.element,ph(t,i),Ao(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=gs(Error(n(423)),i),i=ep(t,i,c,a,h);break e}else if(c!==h){h=gs(Error(n(424)),i),i=ep(t,i,c,a,h);break e}else for(kn=Zi(i.stateNode.containerInfo.firstChild),Fn=i,kt=!0,Qn=null,a=fh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),c===h){i=bi(t,i,a);break e}pn(t,i,c,a)}i=i.child}return i;case 5:return vh(i),t===null&&Pc(i),c=i.type,h=i.pendingProps,m=t!==null?t.memoizedProps:null,E=h.children,Mc(c,h)?E=null:m!==null&&Mc(c,m)&&(i.flags|=32),Zh(t,i),pn(t,i,E,a),i.child;case 6:return t===null&&Pc(i),null;case 13:return tp(t,i,a);case 4:return Bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=fs(i,null,c,a):pn(t,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Jn(c,h),qh(t,i,c,h,a);case 7:return pn(t,i,i.pendingProps,a),i.child;case 8:return pn(t,i,i.pendingProps.children,a),i.child;case 12:return pn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,E=h.value,Rt(Eo,c._currentValue),c._currentValue=E,m!==null)if(Zn(m.value,E)){if(m.children===h.children&&!xn.current){i=bi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var V=U.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=Ri(-1,a&-a),V.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),ne.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),Fc(m.return,a,i),U.lanes|=a;break}V=V.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Fc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}pn(t,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ps(i,a),h=Gn(h),c=c(h),i.flags|=1,pn(t,i,c,a),i.child;case 14:return c=i.type,h=Jn(c,i.pendingProps),h=Jn(c.type,h),$h(t,i,c,h,a);case 15:return Yh(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Jn(c,h),Uo(t,i),i.tag=1,yn(c)?(t=!0,vo(i)):t=!1,ps(i,a),zh(i,c,h),Qc(i,c,h,a),nu(null,i,c,!0,t,a);case 19:return ip(t,i,a);case 22:return Kh(t,i,a)}throw Error(n(156,i.tag))};function Cp(t,i){return $(t,i)}function mv(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,c){return new mv(t,i,a,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gv(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===le)return 14}return 2}function lr(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Xo(t,i,a,c,h,m){var E=2;if(c=t,typeof t=="function")Mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case I:return Ur(a.children,h,m,i);case j:E=8,h|=8;break;case P:return t=qn(12,a,i,h|2),t.elementType=P,t.lanes=m,t;case q:return t=qn(13,a,i,h),t.elementType=q,t.lanes=m,t;case ae:return t=qn(19,a,i,h),t.elementType=ae,t.lanes=m,t;case ce:return qo(a,h,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case z:E=9;break e;case Y:E=11;break e;case le:E=14;break e;case oe:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(E,a,i,h),i.elementType=t,i.type=c,i.lanes=m,i}function Ur(t,i,a,c){return t=qn(7,t,c,i),t.lanes=a,t}function qo(t,i,a,c){return t=qn(22,t,c,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function Eu(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function wu(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function vv(t,i,a,c,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Tu(t,i,a,c,h,m,E,U,V){return t=new vv(t,i,a,U,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=qn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(m),t}function _v(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Rp(t){if(!t)return Ji;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(yn(a))return nh(t,a,i)}return i}function bp(t,i,a,c,h,m,E,U,V){return t=Tu(a,c,!0,t,h,m,E,U,V),t.context=Rp(null),a=t.current,c=mn(),h=ar(a),m=Ri(c,h),m.callback=i??null,nr(a,m,h),t.current.lanes=h,Qs(t,h,c),En(t,c),t}function $o(t,i,a,c){var h=i.current,m=mn(),E=ar(h);return a=Rp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(m,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=nr(h,i,E),t!==null&&(ni(t,h,E,m),To(t,h,E)),E}function Yo(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Au(t,i){Np(t,i),(t=t.alternate)&&Np(t,i)}function xv(){return null}var Pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cu(t){this._internalRoot=t}Ko.prototype.render=Cu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));$o(t,i,null,null)},Ko.prototype.unmount=Cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){$o(null,t,null,null)}),i[Ei]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=pf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<$i.length&&i!==0&&i<$i[a].priority;a++);$i.splice(a,0,t),a===0&&vf(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function yv(t,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var ne=Yo(E);m.call(ne)}}var E=bp(i,c,t,0,null,!1,!1,"",Lp);return t._reactRootContainer=E,t[Ei]=E.current,fa(t.nodeType===8?t.parentNode:t),Lr(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof c=="function"){var U=c;c=function(){var ne=Yo(V);U.call(ne)}}var V=Tu(t,0,!1,null,null,!1,!1,"",Lp);return t._reactRootContainer=V,t[Ei]=V.current,fa(t.nodeType===8?t.parentNode:t),Lr(function(){$o(i,V,a,c)}),V}function Qo(t,i,a,c,h){var m=a._reactRootContainer;if(m){var E=m;if(typeof h=="function"){var U=h;h=function(){var V=Yo(E);U.call(V)}}$o(i,E,t,h)}else E=yv(a,i,t,h,c);return Yo(E)}ff=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(Ql(i,a|1),En(i,Re()),(xt&6)===0&&(xs=Re()+500,er()))}break;case 13:Lr(function(){var c=Ci(t,1);if(c!==null){var h=mn();ni(c,t,1,h)}}),Au(t,1)}},Jl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var a=mn();ni(i,t,134217728,a)}Au(t,134217728)}},hf=function(t){if(t.tag===13){var i=ar(t),a=Ci(t,i);if(a!==null){var c=mn();ni(a,t,i,c)}Au(t,i)}},pf=function(){return Tt},mf=function(t,i){var a=Tt;try{return Tt=t,i()}finally{Tt=a}},fe=function(t,i,a){switch(i){case"input":if(Ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var h=mo(c);if(!h)throw Error(n(90));O(c),Ut(c,h)}}}break;case"textarea":ve(t,a);break;case"select":i=a.value,i!=null&&C(t,!!a.multiple,i,!1)}},Gt=xu,_t=Lr;var Sv={usingClientEntryPoint:!1,Events:[ma,as,mo,ht,Ot,xu]},ba={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ee(t),t===null?null:t.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Qt=Jo.inject(Mv),ot=Jo}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv,wn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(n(200));return _v(t,i,null,a)},wn.createRoot=function(t,i){if(!Ru(t))throw Error(n(299));var a=!1,c="",h=Pp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Tu(t,1,!1,null,null,a,!1,c,h),t[Ei]=i.current,fa(t.nodeType===8?t.parentNode:t),new Cu(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ee(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Lr(t)},wn.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!0,a)},wn.hydrateRoot=function(t,i,a){if(!Ru(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",E=Pp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=bp(i,null,t,1,a??null,h,!1,m,E),t[Ei]=i.current,fa(t),c)for(t=0;t<c.length;t++)a=c[t],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Ko(i)},wn.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!1,a)},wn.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1},wn.unstable_batchedUpdates=xu,wn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,a,!1,c)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var zp;function Nv(){if(zp)return Pu.exports;zp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=bv(),Pu.exports}var Hp;function Pv(){if(Hp)return el;Hp=1;var s=Nv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var Lv=Pv();const Dv={particles:!0,glyphs:!0,reducedMotion:!1,theme:"void",blur:!0},Vp={void:{"--accent-purple":"#6f00ff","--bright-purple":"#aa44ff","--glow-purple":"#cc77ff","--pink-accent":"#ff00dd"},nether:{"--accent-purple":"#FF4500","--bright-purple":"#FF6B35","--glow-purple":"#FF8C55","--pink-accent":"#FF2200"},abyss:{"--accent-purple":"#001aff","--bright-purple":"#0044ff","--glow-purple":"#4488ff","--pink-accent":"#00ccff"},emerald:{"--accent-purple":"#00c853","--bright-purple":"#1de9b6","--glow-purple":"#69f0ae","--pink-accent":"#00e676"},blood:{"--accent-purple":"#c62828","--bright-purple":"#e53935","--glow-purple":"#ff6b6b","--pink-accent":"#ff1744"},frost:{"--accent-purple":"#00bcd4","--bright-purple":"#4dd0e1","--glow-purple":"#80deea","--pink-accent":"#18ffff"},solar:{"--accent-purple":"#ff8f00","--bright-purple":"#ffb300","--glow-purple":"#ffca28","--pink-accent":"#ff6d00"},obsidian:{"--accent-purple":"#546e7a","--bright-purple":"#78909c","--glow-purple":"#90a4ae","--pink-accent":"#b0bec5"}};function Iv(s){const e=document.documentElement,n=Vp[s]||Vp.void;Object.entries(n).forEach(([r,o])=>e.style.setProperty(r,o))}function Uv(){const[s,e]=Ke.useState(Dv);return[s,r=>{e(r),Iv(r.theme),document.documentElement.style.setProperty("--transition-fast",r.reducedMotion?"0s":"0.15s ease"),document.documentElement.style.setProperty("--transition-mid",r.reducedMotion?"0s":"0.3s ease")}]}function Fv(s=20){const[e,n]=Ke.useState(!1);return Ke.useEffect(()=>{const r=()=>n(window.scrollY>s);return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[s]),e}function kv(s,e,n=[]){Ke.useEffect(()=>{const r=o=>{o.key===s&&e(o)};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[s,e,...n])}function Ov(s=!0){Ke.useEffect(()=>{if(s)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[s])}function Bv(){const[s,e]=Ke.useState(null),n=s!==null;return Ov(n),kv("Escape",()=>{n&&e(null)},[n]),{openChapter:s,openModal:r=>e(r),closeModal:()=>e(null)}}function zv({onExplore:s}){return f.jsxs("div",{className:"hero-section",children:[f.jsx("div",{className:"hero-glow-1"}),f.jsx("div",{className:"hero-glow-2"}),f.jsxs("div",{className:"hero-content",children:[f.jsx("div",{className:"hero-tag",children:"✦ Minecraft Adventure Map"}),f.jsxs("h1",{className:"hero-title",children:[f.jsx("span",{className:"hero-title-enigma",children:"Enigma"}),f.jsx("span",{className:"hero-title-divider",children:"|"}),f.jsx("span",{className:"hero-title-sub",children:"Beyond the Void"})]}),f.jsxs("p",{className:"hero-desc",children:["Six chapters. Countless secrets. One void that hungers for answers.",f.jsx("br",{}),"A story-driven Minecraft adventure for up to 20 players."]}),f.jsx("div",{className:"hero-actions",children:f.jsxs("button",{className:"hero-btn-primary",onClick:s,children:["Explore Chapters",f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"16",height:"16",children:f.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})}),f.jsxs("div",{className:"hero-stats",children:[f.jsxs("div",{className:"hero-stat",children:[f.jsx("span",{className:"hero-stat-value",children:"5"}),f.jsx("span",{className:"hero-stat-label",children:"Chapters"})]}),f.jsx("div",{className:"hero-stat-sep"}),f.jsxs("div",{className:"hero-stat",children:[f.jsx("span",{className:"hero-stat-value",children:"20"}),f.jsx("span",{className:"hero-stat-label",children:"Max Players"})]}),f.jsx("div",{className:"hero-stat-sep"}),f.jsxs("div",{className:"hero-stat",children:[f.jsx("span",{className:"hero-stat-value",children:"∞"}),f.jsx("span",{className:"hero-stat-label",children:"Secrets"})]})]})]}),f.jsxs("div",{className:"hero-scroll-hint",children:[f.jsx("div",{className:"scroll-line"}),f.jsx("span",{children:"Scroll"})]})]})}const Hv=[{id:"n1",type:"announcement",label:"Announcement",date:"2025-04-01",title:"It's Quiet… Almost a Little Too Quiet.",content:"Something stirs beyond the Void. Keep your eyes open, adventurer. The next fragment draws near.",pinned:!0},{id:"n2",type:"info",label:"About the Project",date:"2025-03-15",title:"What is Enigma: Beyond the Void?",content:`Enigma is a five-chaptered Minecraft adventure designed to deliver an immersive, story-driven experience while staying as close to vanilla Minecraft as possible — no mods, no datapacks, no custom textures. Just pure creativity powered by custom plugins.

Each chapter features a unique theme, custom structures, handcrafted dungeons, bosses, and deep lore. Up to 20 players can join forces to conquer each chapter's challenges.`}],jp={announcement:{label:"Announcement",color:"#cc88ff",border:"rgba(170,68,255,0.4)",glow:"rgba(170,68,255,0.12)",icon:"📣"},info:{label:"Information",color:"#88aaff",border:"rgba(80,120,255,0.4)",glow:"rgba(80,120,255,0.10)",icon:"📋"},update:{label:"Update",color:"#55ffaa",border:"rgba(50,200,120,0.4)",glow:"rgba(50,200,120,0.10)",icon:"⚡"},warning:{label:"Warning",color:"#ffcc55",border:"rgba(200,160,50,0.4)",glow:"rgba(200,160,50,0.10)",icon:"⚠️"}};function Vv(s){return new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function jv(){return f.jsxs("section",{className:"page-section home-section",children:[f.jsx("h2",{className:"section-heading",children:"News & Announcements"}),f.jsx("div",{className:"news-grid",children:Hv.map((s,e)=>f.jsx(Gv,{item:s,index:e},s.id))})]})}function Gv({item:s,index:e}){const[n,r]=Ke.useState(!1),o=jp[s.type]||jp.info,l=s.content.length>180,d=l&&!n?s.content.slice(0,180).trim()+"…":s.content;return f.jsxs("div",{className:`news-card${s.pinned?" pinned":""}`,style:{"--card-accent":o.color,"--card-border-accent":o.border,"--card-glow":o.glow,animationDelay:`${e*.1}s`},children:[f.jsx("div",{className:"news-card-bar",style:{background:`linear-gradient(90deg, transparent, ${o.color}88, transparent)`}}),s.pinned&&f.jsxs("div",{className:"news-pin-badge",children:[f.jsx("span",{children:"📌"})," Pinned"]}),f.jsxs("div",{className:"news-card-header",children:[f.jsx("span",{className:"news-type-icon",children:o.icon}),f.jsx("span",{className:"news-type-badge",style:{color:o.color,borderColor:o.border,background:o.glow},children:o.label}),s.date&&f.jsx("span",{className:"news-date",children:Vv(s.date)})]}),f.jsx("h3",{className:"news-title",children:s.title}),f.jsx("p",{className:"news-content",children:d}),l&&f.jsx("button",{className:"news-expand-btn",onClick:()=>r(u=>!u),style:{color:o.color},children:n?"▲ Show less":"▼ Read more"}),f.jsx("div",{className:"news-card-orb",style:{background:o.glow}})]})}function Wv({onExplore:s}){return f.jsxs(f.Fragment,{children:[f.jsx(zv,{onExplore:s}),f.jsx(jv,{})]})}const kl=[{id:"chapter-1",number:"I",title:"Mischievous Mansion",subtitle:"Chapter I",theme:"fragment",status:"available",image:"assets/Mansion.png",color:"#1a6fff",accentColor:"#55aaff",description:"Uncover the secrets hidden within an illager fortress, tainted by something dark.",lore:`Step into the shadows of the Mischievous Mansion. Recently appeared without a trace, its eerie halls hold secrets waiting to be unraveled. Explore its many twisting passages, face challenging enemies, and uncover the mysteries that have been concealed for so long.

Within the mansion, every room reveals a new puzzle, every flickering candle a clue, every creaking floorboard a warning, and every shadow a potential threat. Work together with your team to overcome the unpredictable dangers lurking around every corner.

Rumor has it: the mobs have become more evolved over the years… adapting to those who dare enter.`,trailerId:null,screenshots:["assets/Mansion.png"],armor:{name:"Cursed Illager Set",skinName:"Killer4563782",helmet:{name:"Cursed Hood",rarity:"rare",emoji:"🪖",color:"#8B00FF",desc:"+4 Armor, Night Vision"},chestplate:{name:"Tainted Robes",rarity:"rare",emoji:"🥋",color:"#6600CC",desc:"+8 Armor, Spell Boost"},leggings:{name:"Shadowed Pants",rarity:"uncommon",emoji:"👖",color:"#4400AA",desc:"+6 Armor, Speed I"},boots:{name:"Void Treads",rarity:"uncommon",emoji:"👟",color:"#330088",desc:"+2 Armor, Feather Falling"}},mobs:[{id:"evoker-lord",name:"Evoker Lord",type:"Boss",health:200,damage:"10–18",difficulty:"legendary",description:"The corrupted master of the mansion. Commands vexes and summons dark magic from the beyond. Becomes enraged at 50% health.",abilities:["Vex Swarm","Dark Fangs","Phase Shift","Void Burst"],color:"#8B00FF",skinColors:{head:"#3a1a6e",body:"#2a0f52",legs:"#1e0a3d",arms:"#3a1a6e"}},{id:"shadow-illager",name:"Shadow Illager",type:"Elite",health:80,damage:"6–12",difficulty:"hard",description:"An illager corrupted by void energy. Becomes invisible when below 30% health, making it nearly impossible to track.",abilities:["Void Cloak","Shadow Strike"],color:"#4B0082",skinColors:{head:"#2d0d4a",body:"#1e0833",legs:"#150626",arms:"#2d0d4a"}},{id:"vex-swarm",name:"Vex Swarm",type:"Minion",health:20,damage:"4–8",difficulty:"medium",description:"Tiny void-touched spirits summoned by the Evoker Lord. They phase through walls and attack in groups.",abilities:["Phase Walk","Swarm Attack"],color:"#7B68EE",skinColors:{head:"#6a5acd",body:"#483d8b",legs:"#3d3477",arms:"#6a5acd"}}],loreEntries:[{id:"l1-1",title:"The Mansion's Origin",category:"History",preview:"Long before the players arrived, the mansion stood as a beacon of illager civilization...",content:`Long before the players arrived, the mansion stood as a beacon of illager civilization. Built over centuries by generations of evokers and their kin, the structure was more than a home—it was a temple to their forbidden arts.

The elders spoke of a pact made with something beyond the End. A deal for power, for knowledge, for dominion over all things natural and unnatural. For decades the price seemed worth it.

Then the silence came.`,locked:!1},{id:"l1-2",title:"The Corruption",category:"Secrets",preview:"Something ancient stirred beneath the mansion foundations...",content:`Something ancient stirred beneath the mansion's foundations. The players who first explored the catacombs below did not return to tell their tale.

Those who followed found only scorch marks and silence.

The corruption does not spread like fire or plague. It spreads like doubt—quietly, inward, until the host forgets what they were before.`,locked:!1},{id:"l1-3",title:"The Evoker's Journal",category:"Documents",preview:"Day 1: The ritual is almost complete. The Void responds...",content:`Day 1: The ritual is almost complete. The Void responds to our calls now. I can hear it between the words.

Day 7: Three more have vanished from the eastern wing. The others refuse to search for them. They are right not to.

Day 14: I understand now. We were never in control. We were the bait.`,locked:!1},{id:"l1-4",title:"The Lost Wing",category:"Maps",preview:"Blueprints of a section that should not exist...",content:"This entry is sealed by the Void itself. Complete the chapter to unlock.",locked:!0}]},{id:"chapter-2",number:"II",title:"Baneful Bastion",subtitle:"Chapter II",theme:"void",status:"available",image:"assets/Bastion.png",color:"#FF4500",accentColor:"#ff8c00",description:"Venture into the depths of the Nether's cindering realm.",lore:`The Nether was never meant to be conquered. Yet here you stand, at the threshold of something older than the world above.

The Bastion does not welcome the living. Its walls of blackstone remember every soul that has passed through, and every soul that never left.

Piglin war-horns echo through volcanic corridors. Gold is the only language spoken here—and you are running out of words.`,trailerId:null,screenshots:["assets/Bastion.png"],armor:{name:"Nether-Forged Warplate",skinName:"MHF_Piglin",helmet:{name:"Piglin War Helm",rarity:"epic",emoji:"⛏️",color:"#FF4500",desc:"+5 Armor, Fire Resistance"},chestplate:{name:"Bastion Breastplate",rarity:"epic",emoji:"🛡️",color:"#CC3300",desc:"+9 Armor, Knockback Resist"},leggings:{name:"Magma Cuisses",rarity:"rare",emoji:"🦵",color:"#AA2200",desc:"+7 Armor, Lava Walk"},boots:{name:"Ember Greaves",rarity:"rare",emoji:"🔥",color:"#881a00",desc:"+3 Armor, Fire Step"}},mobs:[{id:"bastion-warlord",name:"Bastion Warlord",type:"Boss",health:250,damage:"14–22",difficulty:"legendary",description:"An ancient Piglin commander empowered by void energy. Wears gold-inlaid Nether armor and commands absolute loyalty from nearby mobs.",abilities:["Gold Slam","Berserk Charge","Piglin Summon","Magma Eruption"],color:"#FF4500",skinColors:{head:"#c47a2e",body:"#8b5a1a",legs:"#6b4410",arms:"#c47a2e"}},{id:"corrupted-piglin",name:"Corrupted Piglin",type:"Elite",health:100,damage:"8–14",difficulty:"hard",description:"A Piglin touched by the void corruption. Its golden armor has turned dark, and its eyes glow with an empty light.",abilities:["Dark Charge","Void Slash"],color:"#8B4513",skinColors:{head:"#7d4a1e",body:"#5c3515",legs:"#3d2210",arms:"#7d4a1e"}}],loreEntries:[{id:"l2-1",title:"Ancient Piglin Texts",category:"History",preview:"Carved into the blackstone walls, symbols that predate modern language...",content:`Carved into the blackstone walls, symbols that predate modern language tell of a time before the Nether was named.

The Piglins did not build this Bastion. They inherited it. From what, the carvings do not say—or perhaps cannot say.

What is clear: something lived here before. And something still does.`,locked:!1},{id:"l2-2",title:"The Gold Covenant",category:"Secrets",preview:"Gold was never about wealth. It was about recognition...",content:`Gold was never about wealth. It was about recognition.

To offer gold to a Piglin is to acknowledge their ancestry—to say: I know who you were before the corruption took you. For a moment, that recognition breaks through.

The Void hates gold for exactly this reason. It cannot corrupt what remembers itself.`,locked:!1}]},...Array.from({length:3},(s,e)=>({id:`chapter-${e+3}`,number:["III","IV","V"][e],title:"Unknown",subtitle:`Chapter ${["III","IV","V"][e]}`,theme:"echo",status:"coming-soon",image:"assets/commingsoon.png",color:"#333355",accentColor:"#555588",description:"Coming Soon",lore:"",trailerId:null,screenshots:[],armor:null,mobs:[],loreEntries:[]}))];function sg(){return kl}function Xv(){return kl.filter(s=>s.status==="available")}function qv(){const s=kl.length,e=kl.filter(n=>n.status==="available").length;return{available:e,total:s,allUnlocked:e===s}}function $v({onOpenChapter:s}){const e=sg(),{available:n,total:r,allUnlocked:o}=qv(),l=d=>{d.status==="available"&&s(d)};return f.jsxs("section",{className:"page-section chapters-section",children:[f.jsx("h2",{className:"section-heading",children:"The Road Beyond"}),f.jsx("p",{className:"chapters-road-subtitle",children:"Five chapters stand between you and the Void. Walk the path."}),f.jsxs("div",{className:"chapters-seals",children:[f.jsx("span",{className:"chapters-seals-eyebrow",children:"Seals of Passage"}),f.jsx("div",{className:"chapters-seals-row",children:e.map(d=>f.jsxs("div",{className:`ch-seal${d.status==="available"?" ch-seal--lit":""}`,style:{"--ch-color":d.color},children:[f.jsx("div",{className:"ch-seal-ring ch-seal-ring--outer"}),f.jsx("div",{className:"ch-seal-ring ch-seal-ring--inner"}),f.jsx("div",{className:"ch-seal-core",children:f.jsx("span",{className:"ch-seal-num",children:d.number})})]},d.id))}),f.jsxs("span",{className:"chapters-seals-count",children:[n," of ",r," seals broken"]})]}),f.jsxs("div",{className:"road-container",children:[f.jsxs("div",{className:"road-spine",children:[o&&f.jsx("div",{className:"beacon-stream"}),[...Array(6)].map((d,u)=>f.jsx("div",{className:"spine-orb",style:{"--sp-offset":`${10+u*15}%`,"--sp-delay":`${u*.9}s`}},u))]}),e.map((d,u)=>f.jsx(Yv,{chapter:d,index:u,side:u%2===0?"left":"right",onOpen:()=>l(d)},d.id)),f.jsxs("div",{className:`enigma-gate${o?" awakened":""}`,children:[f.jsx("div",{className:"eg-haze"}),f.jsxs("div",{className:"eg-rings",children:[f.jsx("div",{className:"eg-ring eg-ring--1"}),f.jsx("div",{className:"eg-ring eg-ring--2"}),f.jsx("div",{className:"eg-ring eg-ring--3"})]}),f.jsx("div",{className:"eg-orbit",children:["ᚨ","ᛟ","ᚷ","ᛉ","ᚱ","ᛊ","ᚾ","ᛏ"].map((d,u)=>f.jsx("span",{className:"eg-rune",style:{"--eg-i":u,"--eg-total":8},children:d},u))}),f.jsxs("div",{className:"eg-core",children:[f.jsx("div",{className:"eg-core-inner",children:f.jsx("div",{className:"eg-sigil",children:o?"⌬":"?"})}),f.jsx("div",{className:"eg-core-pulse"}),f.jsx("div",{className:"eg-core-pulse eg-core-pulse--2"})]}),f.jsx("div",{className:"eg-scanlines"}),f.jsxs("div",{className:"eg-text",children:[f.jsx("div",{className:"eg-text-eyebrow",children:o?"— SEAL BROKEN —":"— BEYOND CHAPTER V —"}),f.jsx("h3",{className:"eg-title",children:o?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"eg-title-main",children:"ENIGMA"}),f.jsx("br",{}),f.jsx("span",{className:"eg-title-sub",children:"BEYOND"})]}):f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"eg-title-redacted",children:"▓▓▓▓▓▓▓▓"}),f.jsx("br",{}),f.jsx("span",{className:"eg-title-redacted eg-title-redacted--sm",children:"▓▓▓▓▓▓"})]})}),f.jsx("p",{className:"eg-desc",children:o?"The seal fractures. Something that has no name stirs beyond the boundary of the known path.":"The sigil holds. Walk all five roads before the gate considers you worthy."}),!o&&f.jsx("div",{className:"eg-lock-row",children:[...Array(5)].map((d,u)=>f.jsx("span",{className:"eg-lock-pip"},u))})]})]})]})]})}function Yv({chapter:s,index:e,side:n,onOpen:r}){const o=s.status==="coming-soon",l=s.mobs?.length??0,d=s.loreEntries?.length??0;return f.jsxs("div",{className:`road-stop road-stop--${n}`,style:{animationDelay:`${e*.13}s`},children:[f.jsx("div",{className:"road-arm",style:{"--ch-color":s.color}}),f.jsxs("div",{className:`road-card${o?" locked":" unlocked"}`,style:{"--ch-color":s.color,"--ch-accent":s.accentColor},onClick:r,role:o?void 0:"button",tabIndex:o?-1:0,onKeyDown:u=>u.key==="Enter"&&r(),children:[f.jsx("div",{className:"road-card-glow"}),f.jsxs("div",{className:"road-card-image",children:[f.jsx("img",{src:s.image,alt:s.title,loading:"lazy"}),o&&f.jsx("div",{className:"road-card-veil",children:f.jsx("span",{className:"road-card-veil-icon",children:"🔒"})}),f.jsx("div",{className:"road-card-tint",style:{background:`linear-gradient(135deg, ${s.color}44, ${s.accentColor}22)`}}),!o&&f.jsxs("div",{className:"road-card-image-cta",children:[f.jsx("span",{children:"View Chapter"}),f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:f.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),f.jsxs("div",{className:"road-card-body",children:[f.jsx("span",{className:"road-card-number",children:s.subtitle}),f.jsx("h3",{className:"road-card-title",children:s.title}),!o&&f.jsx("p",{className:"road-card-desc",children:s.description}),o?f.jsx("span",{className:"road-card-coming",children:"Coming Soon"}):f.jsxs("div",{className:"road-card-footer",children:[f.jsxs("div",{className:"road-card-meta",children:[f.jsxs("span",{className:"road-card-meta-pill",style:{"--pill-color":s.color},children:["⚔️ ",l," enemies"]}),f.jsxs("span",{className:"road-card-meta-pill",style:{"--pill-color":s.accentColor},children:["📜 ",d," lore"]})]}),f.jsxs("div",{className:"road-card-cta",style:{color:s.color},children:[f.jsx("span",{children:"Enter"}),f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"12",height:"12",children:f.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),!o&&f.jsx("div",{className:"road-card-bottom-bar",style:{background:`linear-gradient(90deg, ${s.color}, ${s.accentColor})`}}),f.jsx("div",{className:"road-card-badge",style:{borderColor:s.color,color:s.color},children:s.number})]}),f.jsxs("div",{className:`road-node${o?" locked":" active"}`,style:{"--ch-color":s.color},children:[!o&&f.jsx("div",{className:"road-node-pulse"}),!o&&f.jsx("div",{className:"road-node-pulse road-node-pulse--slow"})]})]})}function Kv({onOpenChapter:s}){return f.jsx($v,{onOpenChapter:s})}const Ba=[{id:"q1",category:"General",question:"What is Enigma: Beyond the Void?",answer:"Enigma: Beyond the Void is a story-driven Minecraft adventure map consisting of five chapters, each with a unique theme, custom structures, handcrafted dungeons, and original bosses. No mods or datapacks required — only custom plugins power the experience."},{id:"q2",category:"General",question:"How many players can play at once?",answer:"Up to 20 players can join a session. The chapters are designed to be challenging enough for larger groups while still being completable by smaller teams."},{id:"q3",category:"Technical",question:"Do I need any mods or texture packs?",answer:"No mods are required. Enigma runs entirely on a custom plugin server with vanilla Minecraft. No texture packs, datapacks, or mod loaders needed."},{id:"q4",category:"Technical",question:"What Minecraft version does Enigma use?",answer:"Enigma runs on a specific server version maintained by the team. Check the Discord for the latest version information and server IP when play sessions are open."},{id:"q5",category:"Gameplay",question:"How difficult are the chapters?",answer:"Each chapter scales in difficulty. Chapter I (Mischievous Mansion) is designed as an introduction, while Chapter II (Baneful Bastion) ramps up significantly. Coming chapters will push teams even further."},{id:"q6",category:"Gameplay",question:"Can I explore chapters in any order?",answer:"Chapters are designed to be played in order, as the story and difficulty progression builds upon each previous chapter. The narrative connections between chapters are a core part of the experience."},{id:"q7",category:"Gameplay",question:"What happens if my team dies?",answer:"The chapter has built-in respawn mechanics. Dying is not the end — but repeated failure against bosses may reset certain encounter phases. Coordinate with your team to manage resources and revives."},{id:"q8",category:"Story",question:"Is there an overarching story connecting all chapters?",answer:"Yes. Each chapter reveals new fragments of a larger mystery centered around a force called The Void. Lore entries, boss dialogues, and hidden secrets all weave into a single continuous narrative."},{id:"q9",category:"Story",question:"Where can I find more lore?",answer:"Lore entries are unlocked by exploring each chapter and defeating its bosses. You can read them in the Lore Catalogue tab within each chapter's detail view on this website."},{id:"q10",category:"Community",question:"How do I join the server or get updates?",answer:"Join the official Discord server to get notified about play sessions, server access, chapter releases, and community events. The team posts all announcements there first."}],Gp={General:{color:"#cc88ff",bg:"rgba(170,68,255,0.12)",border:"rgba(170,68,255,0.3)"},Technical:{color:"#55aaff",bg:"rgba(50,120,255,0.12)",border:"rgba(50,120,255,0.3)"},Gameplay:{color:"#55ffaa",bg:"rgba(50,200,100,0.1)",border:"rgba(50,200,100,0.3)"},Story:{color:"#ffcc55",bg:"rgba(200,160,50,0.1)",border:"rgba(200,160,50,0.3)"},Community:{color:"#ff88aa",bg:"rgba(255,80,120,0.1)",border:"rgba(255,80,120,0.3)"}},Zv=["All",...Array.from(new Set(Ba.map(s=>s.category)))];function Qv(){const[s,e]=Ke.useState("All"),[n,r]=Ke.useState(null),[o,l]=Ke.useState(""),d=Ke.useMemo(()=>{let u=s==="All"?Ba:Ba.filter(p=>p.category===s);if(o.trim()){const p=o.toLowerCase();u=u.filter(g=>g.question.toLowerCase().includes(p)||g.answer.toLowerCase().includes(p))}return u},[s,o]);return f.jsxs("section",{className:"page-section qa-section",children:[f.jsx("h2",{className:"section-heading",children:"Questions & Answers"}),f.jsx("p",{className:"qa-subtitle",children:"Common questions from the community — answered."}),f.jsxs("div",{className:"qa-search-wrap",children:[f.jsxs("svg",{className:"qa-search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"15",height:"15",children:[f.jsx("circle",{cx:"11",cy:"11",r:"8"}),f.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),f.jsx("input",{className:"qa-search",type:"text",placeholder:"Search questions...",value:o,onChange:u=>l(u.target.value)}),o&&f.jsx("button",{className:"qa-search-clear",onClick:()=>l(""),"aria-label":"Clear search",children:"✕"})]}),f.jsx("div",{className:"qa-filters",children:Zv.map(u=>{const p=Gp[u];return f.jsxs("button",{className:`qa-filter-btn${s===u?" active":""}`,onClick:()=>e(u),style:s===u&&p?{background:p.bg,borderColor:p.border,color:p.color,boxShadow:`0 0 12px ${p.bg}`}:{},children:[u==="All"?"✦ All":u,f.jsx("span",{className:"qa-filter-count",children:u==="All"?Ba.length:Ba.filter(g=>g.category===u).length})]},u)})}),f.jsx("div",{className:"qa-list",children:d.length===0?f.jsxs("div",{className:"qa-empty",children:[f.jsx("span",{children:"🔍"}),f.jsxs("p",{children:['No results for "',f.jsx("strong",{children:o}),'"']})]}):d.map((u,p)=>f.jsx(Jv,{item:u,isOpen:n===u.id,index:p,onToggle:()=>r(n===u.id?null:u.id),categoryColor:Gp[u.category],searchQuery:o},u.id))}),f.jsxs("div",{className:"qa-discord-cta",children:[f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"18",height:"18",children:f.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"})}),f.jsx("span",{children:"Have a question that isn't listed?"}),f.jsx("a",{href:"https://discord.gg/enigma",target:"_blank",rel:"noopener noreferrer",className:"qa-discord-link",children:"Ask on Discord →"})]})]})}function Wp(s,e){return e.trim()?s.split(new RegExp(`(${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi")).map((r,o)=>r.toLowerCase()===e.toLowerCase()?f.jsx("mark",{className:"qa-highlight",children:r},o):r):s}function Jv({item:s,isOpen:e,index:n,onToggle:r,categoryColor:o,searchQuery:l}){const d=o||{};return f.jsxs("div",{className:`qa-item${e?" open":""}`,style:{animationDelay:`${n*.04}s`,"--qa-color":d.color,"--qa-border":d.border},children:[f.jsxs("button",{className:"qa-question",onClick:r,children:[f.jsx("span",{className:"qa-category-pill",style:{color:d.color,background:d.bg,borderColor:d.border},children:s.category}),f.jsx("span",{className:"qa-question-text",children:Wp(s.question,l)}),f.jsx("svg",{className:"qa-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"15",height:"15",children:f.jsx("path",{d:"M6 9l6 6 6-6"})})]}),f.jsx("div",{className:"qa-answer-wrap",children:f.jsx("div",{className:"qa-answer",children:f.jsx("p",{children:Wp(s.answer,l)})})})]})}function e_(){return f.jsx(Qv,{})}function tl(s,e,n,r=null,o={}){return{name:s,role:e,description:n,avatar:r,socials:o}}const t_=[tl("Lucreator245","Creator & Visionary","The mind behind Enigma. Designed the overall concept, story arc, and gameplay vision for all six chapters.","assets/Teammembers/luca.gif",{discord:"Lucreator245"}),tl("Jxson","Lead Developer","Backend plugin developer. Built the custom mechanics, boss systems, and dungeon logic that powers the experience.","assets/Teammembers/jason.png",{discord:"Jxson"}),tl("Killer456378","Web Developer","Designed and built the website you are exploring right now. Turned the vision into a digital experience.","assets/Teammembers/Killer.png",{discord:"Killer456378"}),tl("Xei","Builder & Storycrafter","Master builder and artist. Brings atmosphere, passion, and visual storytelling to every structure in the world.","assets/Teammembers/xei.png",{discord:"Xei"})],n_={"Creator & Visionary":"#cc88ff","Lead Developer":"#88aaff","Web Developer":"#88ffcc","Builder & Storycrafter":"#ffcc55","Mechanic Designer & Storycrafter":"#ff8855",Builder:"#aaaaff"};function i_(){return f.jsxs("section",{className:"page-section credits-section",children:[f.jsx("h2",{className:"section-heading",children:"The Team"}),f.jsx("p",{className:"credits-subtitle",children:"The minds and hands behind Enigma: Beyond the Void"}),f.jsx("div",{className:"credits-grid",children:t_.map((s,e)=>f.jsx(r_,{member:s,index:e},s.name))}),f.jsxs("div",{className:"credits-footnote",children:[f.jsx("span",{children:"✦"}),f.jsx("p",{children:"Enigma: Beyond the Void — A Minecraft adventure crafted with passion."}),f.jsx("span",{children:"✦"})]})]})}function r_({member:s,index:e}){const n=n_[s.role]||"#aaaaff";return f.jsxs("div",{className:"credit-card",style:{"--role-color":n,animationDelay:`${e*.07}s`},children:[f.jsxs("div",{className:"credit-avatar-wrap",children:[s.avatar?f.jsx("img",{src:s.avatar,alt:s.name,className:"credit-avatar"}):f.jsx("div",{className:"credit-avatar-placeholder",children:s.name.charAt(0).toUpperCase()}),f.jsx("div",{className:"credit-avatar-ring"})]}),f.jsxs("div",{className:"credit-info",children:[f.jsx("h3",{className:"credit-name",children:s.name}),f.jsx("span",{className:"credit-role",style:{color:n},children:s.role}),f.jsx("p",{className:"credit-desc",children:s.description})]}),s.socials&&Object.keys(s.socials).length>0&&f.jsx("div",{className:"credit-socials",children:s.socials.discord&&f.jsxs("span",{className:"credit-social-tag",title:"Discord",children:[f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"12",height:"12",children:f.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"})}),s.socials.discord]})})]})}function s_(){return f.jsx(i_,{})}function nl({icon:s,title:e,description:n,children:r}){return f.jsxs("div",{className:"settings-panel",children:[f.jsxs("div",{className:"settings-panel-header",children:[f.jsx("span",{className:"settings-panel-icon",children:s}),f.jsxs("div",{children:[f.jsx("h3",{className:"settings-panel-title",children:e}),f.jsx("p",{className:"settings-panel-desc",children:n})]})]}),f.jsx("div",{className:"settings-panel-body",children:r})]})}function Fr({label:s,description:e,icon:n,value:r,onChange:o}){return f.jsxs("div",{className:`setting-row${r?" setting-row--on":""}`,onClick:()=>o(!r),children:[f.jsxs("div",{className:"setting-row-left",children:[f.jsx("span",{className:"setting-icon",children:n}),f.jsxs("div",{className:"setting-label-wrap",children:[f.jsx("span",{className:"setting-label",children:s}),e&&f.jsx("span",{className:"setting-desc",children:e})]})]}),f.jsx("div",{className:`toggle ${r?"on":"off"}`,children:f.jsx("div",{className:"toggle-thumb"})})]})}const a_=[{value:"void",label:"Void",subtitle:"Deep purple cosmos",gradient:"linear-gradient(135deg, #3d006b 0%, #6f00ff 45%, #ff00dd 100%)",dot:"#cc77ff"},{value:"nether",label:"Nether Flame",subtitle:"Molten embers and ash",gradient:"linear-gradient(135deg, #7a0000 0%, #FF4500 55%, #FF6B35 100%)",dot:"#FF8C55"},{value:"abyss",label:"Deep Abyss",subtitle:"Cold depths of the ocean",gradient:"linear-gradient(135deg, #000c6b 0%, #001aff 50%, #00ccff 100%)",dot:"#4488ff"},{value:"emerald",label:"Emerald",subtitle:"Ancient forest magic",gradient:"linear-gradient(135deg, #003d1f 0%, #00c853 55%, #1de9b6 100%)",dot:"#69f0ae"},{value:"blood",label:"Blood Moon",subtitle:"Crimson darkness rises",gradient:"linear-gradient(135deg, #3b0000 0%, #c62828 50%, #ff4040 100%)",dot:"#ff6b6b"},{value:"frost",label:"Arctic Frost",subtitle:"Icy tundra winds",gradient:"linear-gradient(135deg, #002f3a 0%, #00bcd4 55%, #e0f7fa 100%)",dot:"#80deea"},{value:"solar",label:"Solar Flare",subtitle:"Blazing golden light",gradient:"linear-gradient(135deg, #3d1c00 0%, #ff8f00 55%, #ffca28 100%)",dot:"#ffb300"},{value:"obsidian",label:"Obsidian",subtitle:"Dark volcanic silence",gradient:"linear-gradient(135deg, #1a1a2e 0%, #546e7a 55%, #b0bec5 100%)",dot:"#90a4ae"}];function o_({value:s,onChange:e}){return f.jsx("div",{className:"theme-grid",children:a_.map(n=>f.jsxs("button",{className:`theme-card${s===n.value?" active":""}`,onClick:()=>e(n.value),children:[f.jsxs("div",{className:"theme-card-swatch",style:{background:n.gradient},children:[f.jsx("div",{className:"theme-card-glow",style:{background:n.dot}}),s===n.value&&f.jsx("div",{className:"theme-card-check",children:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",width:"11",height:"11",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})})})]}),f.jsxs("div",{className:"theme-card-info",children:[f.jsx("span",{className:"theme-card-name",children:n.label}),f.jsx("span",{className:"theme-card-sub",children:n.subtitle})]})]},n.value))})}function Pa({label:s,value:e,accent:n}){return f.jsxs("div",{className:"info-row",children:[f.jsx("span",{className:"info-row-label",children:s}),f.jsx("span",{className:`info-row-value${n?" accent":""}`,children:e})]})}function l_({settings:s,onSettingsChange:e}){const n=(l,d)=>e({...s,[l]:d}),r=sg().length,o=Xv().length;return f.jsxs("section",{className:"page-section settings-section",children:[f.jsx("h2",{className:"section-heading",children:"Settings"}),f.jsx("p",{className:"settings-subtitle",children:"Tune your journey through the Void"}),f.jsxs("div",{className:"settings-layout",children:[f.jsxs(nl,{icon:"✦",title:"Visual Effects",description:"Control how the world around you is rendered",children:[f.jsx(Fr,{label:"Particle Effects",description:"Drifting particles throughout the background",icon:"🌀",value:s.particles,onChange:l=>n("particles",l)}),f.jsx(Fr,{label:"Glyph Animations",description:"Animated mystic symbols on the loading screen",icon:"🔮",value:s.glyphs,onChange:l=>n("glyphs",l)}),f.jsx(Fr,{label:"Blur Effects",description:"Backdrop blur on navigation and card surfaces",icon:"💫",value:s.blur,onChange:l=>n("blur",l)}),f.jsx(Fr,{label:"Reduced Motion",description:"Minimize all animations for accessibility",icon:"♿",value:s.reducedMotion,onChange:l=>n("reducedMotion",l)})]}),f.jsxs(nl,{icon:"🎵",title:"Audio & Atmosphere",description:"Immersive soundscape and environmental settings",children:[f.jsx(Fr,{label:"Ambient Sounds",description:"Subtle void ambience while browsing",icon:"🔊",value:s.ambientSounds??!1,onChange:l=>n("ambientSounds",l)}),f.jsx(Fr,{label:"UI Sound Effects",description:"Click and hover sounds on buttons",icon:"🎛️",value:s.uiSounds??!1,onChange:l=>n("uiSounds",l)}),f.jsx(Fr,{label:"Dark Atmosphere",description:"Deeper shadows and more contrast throughout",icon:"🌑",value:s.darkAtmosphere??!1,onChange:l=>n("darkAtmosphere",l)})]}),f.jsx(nl,{icon:"🎨",title:"Color Theme",description:"Choose the color that resonates with your path",children:f.jsx(o_,{value:s.theme,onChange:l=>n("theme",l)})}),f.jsx(nl,{icon:"📜",title:"About",description:"Details about this site and project",children:f.jsxs("div",{className:"settings-info-rows",children:[f.jsx(Pa,{label:"Website Version",value:"2.0.0"}),f.jsx(Pa,{label:"Project",value:"Enigma: Beyond the Void"}),f.jsx(Pa,{label:"Chapters Available",value:`${o} / ${r}`,accent:!0}),f.jsx(Pa,{label:"Built With",value:"React + Vite"}),f.jsx(Pa,{label:"Renderer",value:"Three.js"})]})})]})]})}function c_({settings:s,onSettingsChange:e}){return f.jsx(l_,{settings:s,onSettingsChange:e})}function u_(s,e){switch(s){case"home":return f.jsx(Wv,{onExplore:e.onExplore});case"chapters":return f.jsx(Kv,{onOpenChapter:e.onOpenChapter});case"qa":return f.jsx(e_,{});case"credits":return f.jsx(s_,{});case"settings":return f.jsx(c_,{settings:e.settings,onSettingsChange:e.onSettingsChange});default:return null}}const Xp=["∂","ợ","ɹ","г","đ","מ","ø","ƒ","ρ","σ","Ŧ","∩","Ψ","Ω","Δ"],qp=["Retrieving Clues","Listening to Echoes","Watching Stars","Reading Forgotten Pages","Studying Floorplans","Trading Loot","Awakening Mobs","Opening Traveling Bag","Following the Path"],d_="What is my purpose?",f_=[7,6,8,5,9,4,10,3,11,2,12,1,13,0,14,0,1,13,2,12];function h_(){return Math.random()<.05?d_:qp[Math.floor(Math.random()*qp.length)]}const il=50;function p_({onComplete:s}){const[e,n]=Ke.useState("Decoding Void's Prophecies..."),[r,o]=Ke.useState(-1),[l,d]=Ke.useState(!1),[u,p]=Ke.useState(!1),[g]=Ke.useState(()=>{const b=window.innerWidth,H=window.innerHeight;return Xp.map(()=>({x:il+Math.random()*(b-il*2),y:il+Math.random()*(H-il*2)}))}),_=Ke.useMemo(()=>Array.from({length:50},()=>({top:Math.random()*100,left:Math.random()*100,duration:1+Math.random()*2,delay:Math.random()*2,size:1+Math.random()*1.5})),[]),S=Ke.useRef([]),y=Ke.useRef([]),M=Ke.useRef(null),A=Ke.useRef(0),T=Ke.useRef([]),x=Ke.useRef(null),v=Ke.useRef(null),D=Ke.useRef(null),w=Ke.useRef(!1);return Ke.useEffect(()=>{const b={x:window.innerWidth,y:window.innerHeight};y.current=S.current.map((I,j)=>I?(I.style.left=`${g[j].x}px`,I.style.top=`${g[j].y}px`,{el:I,x:g[j].x,y:g[j].y,vx:(Math.random()*2-1)*.38,vy:(Math.random()*2-1)*.38}):null);const H=16,L=()=>{y.current.forEach(I=>{I&&(I.x+=I.vx,I.y+=I.vy,I.x<H&&(I.x=H,I.vx=Math.abs(I.vx)),I.x>b.x-H&&(I.x=b.x-H,I.vx=-Math.abs(I.vx)),I.y<H&&(I.y=H,I.vy=Math.abs(I.vy)),I.y>b.y-H&&(I.y=b.y-H,I.vy=-Math.abs(I.vy)),I.el.style.left=`${I.x}px`,I.el.style.top=`${I.y}px`)}),M.current=requestAnimationFrame(L)};return M.current=requestAnimationFrame(L),()=>cancelAnimationFrame(M.current)},[g]),Ke.useEffect(()=>{const b=()=>{T.current.forEach(clearTimeout),T.current=[]},H=()=>{b(),f_.forEach((j,P)=>{const R=setTimeout(()=>o(j),P*240),z=setTimeout(()=>o(Y=>Y===j?-1:Y),P*240+380);T.current.push(R,z)})},L=setTimeout(H,1400),I=setInterval(H,7500);return()=>{b(),clearTimeout(L),clearInterval(I)}},[]),Ke.useEffect(()=>{const b=setInterval(()=>n(h_()),2200);return()=>clearInterval(b)},[]),Ke.useEffect(()=>{let b;const H=()=>{if(A.current>=100){if(w.current)return;w.current=!0,x.current&&(x.current.style.width="100%"),v.current&&(v.current.style.left="100%"),D.current&&(D.current.textContent="100%"),n("Void is Ready."),setTimeout(()=>p(!0),600),setTimeout(()=>s?.(),1e3),setTimeout(()=>d(!0),2e3);return}A.current+=.18*(Math.random()*.7+.3);const L=Math.min(A.current,100),I=`${L.toFixed(2)}%`;x.current&&(x.current.style.width=I),v.current&&(v.current.style.left=I),D.current&&(D.current.textContent=`${Math.floor(L)}%`),b=requestAnimationFrame(H)};return b=requestAnimationFrame(H),()=>cancelAnimationFrame(b)},[s]),l?null:f.jsxs("div",{className:`loading-screen${u?" fade-out":""}`,children:[f.jsx("div",{className:"ls-glyphs",children:Xp.map((b,H)=>f.jsx("span",{ref:L=>S.current[H]=L,className:`ls-glyph${r===H?" flash":""}`,style:{left:`${g[H].x}px`,top:`${g[H].y}px`,"--glyph-delay":`${H*.3}s`},children:b},H))}),f.jsx("div",{className:"ls-bg-radial"}),f.jsx("div",{className:"ls-orb-wrap",children:f.jsxs("div",{className:"ls-orb",children:[f.jsx("div",{className:"ls-swirl"}),f.jsx("div",{className:"ls-swirl ls-swirl--2"}),_.map((b,H)=>f.jsx("div",{className:"ls-star",style:{top:`${b.top}%`,left:`${b.left}%`,width:`${b.size}px`,height:`${b.size}px`,animationDuration:`${b.duration}s`,animationDelay:`${b.delay}s`}},H)),f.jsx("div",{className:"ls-orb-ring ls-orb-ring--1"}),f.jsx("div",{className:"ls-orb-ring ls-orb-ring--2"}),f.jsx("div",{className:"ls-glow-symbol",children:"✦"})]})}),f.jsxs("div",{className:"ls-phrase",children:[f.jsx("span",{className:"ls-arrow",children:"➥"}),f.jsx("span",{className:"ls-phrase-text",children:e},e)]}),f.jsxs("div",{className:"ls-progress-wrap",children:[f.jsx("div",{className:"ls-progress-bar",ref:x,style:{width:"0%"}}),f.jsx("div",{className:"ls-progress-spark",ref:v,style:{left:"0%"}})]}),f.jsx("div",{className:"ls-progress-label",ref:D,children:"0%"})]})}const $p=[{id:"home",label:"Home",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[f.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),f.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{id:"chapters",label:"Chapters",icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:f.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{id:"qa",label:"Q&A",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})},{id:"credits",label:"Team",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[f.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"9",cy:"7",r:"4"}),f.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),f.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"settings",label:"Settings",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}];function m_({activeTab:s,onTabChange:e,inChapterView:n,onBackFromChapter:r}){const[o,l]=Ke.useState(!1),d=Fv(20),u=p=>{e(p),l(!1)};return f.jsxs("nav",{className:`main-nav${d?" scrolled":""}`,children:[f.jsxs("div",{className:"nav-inner",children:[f.jsxs("div",{className:"nav-logo",children:[f.jsx("span",{className:"nav-logo-symbol",children:"✦"}),f.jsxs("div",{className:"nav-logo-text-wrap",children:[f.jsx("span",{className:"nav-logo-text",children:"Enigma"}),f.jsx("span",{className:"nav-logo-sub",children:"Beyond the Void"})]})]}),n?f.jsxs("button",{className:"nav-back-btn",onClick:r,children:[f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:f.jsx("path",{d:"M19 12H5M12 5l-7 7 7 7"})}),"Back to Site"]}):f.jsx("div",{className:"nav-tabs",children:$p.map(p=>f.jsxs("button",{className:`nav-tab${s===p.id?" active":""}`,onClick:()=>u(p.id),children:[p.icon,f.jsx("span",{children:p.label})]},p.id))}),!n&&f.jsxs("button",{className:`nav-burger${o?" open":""}`,onClick:()=>l(p=>!p),"aria-label":"Toggle menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}),o&&!n&&f.jsx("div",{className:"nav-mobile-menu",children:$p.map(p=>f.jsxs("button",{className:`nav-mobile-tab${s===p.id?" active":""}`,onClick:()=>u(p.id),children:[p.icon,f.jsx("span",{children:p.label})]},p.id))})]})}function g_({activeTab:s,onTabChange:e,inChapterView:n,onBackFromChapter:r,children:o}){const l=s==="home";return f.jsxs(f.Fragment,{children:[f.jsx(m_,{activeTab:s,onTabChange:e,inChapterView:n,onBackFromChapter:r}),f.jsx("main",{style:{paddingTop:l?"0":"60px"},children:o})]})}function v_({chapter:s}){return f.jsxs("div",{className:"ci-root",children:[f.jsxs("div",{className:"ci-stats-bar",children:[f.jsxs("div",{className:"ci-stat-item",children:[f.jsx("span",{className:"ci-stat-icon",children:"⚔"}),f.jsx("span",{className:"ci-stat-label",children:"Type"}),f.jsx("span",{className:"ci-stat-val",children:"Adventure"})]}),f.jsx("div",{className:"ci-stat-divider"}),f.jsxs("div",{className:"ci-stat-item",children:[f.jsx("span",{className:"ci-stat-icon",children:"👥"}),f.jsx("span",{className:"ci-stat-label",children:"Players"}),f.jsx("span",{className:"ci-stat-val",children:"Up to 20"})]}),f.jsx("div",{className:"ci-stat-divider"}),f.jsxs("div",{className:"ci-stat-item",children:[f.jsx("span",{className:"ci-stat-icon",children:"✦"}),f.jsx("span",{className:"ci-stat-label",children:"Style"}),f.jsx("span",{className:"ci-stat-val",children:"Vanilla+"})]}),f.jsx("div",{className:"ci-stat-divider"}),f.jsxs("div",{className:"ci-stat-item",children:[f.jsx("span",{className:"ci-stat-icon",children:s.status==="available"?"🟢":"🔒"}),f.jsx("span",{className:"ci-stat-label",children:"Status"}),f.jsx("span",{className:"ci-stat-val ci-stat-val--status","data-status":s.status,children:s.status==="available"?"Available":"Coming Soon"})]}),s.theme&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"ci-stat-divider"}),f.jsxs("div",{className:"ci-stat-item",children:[f.jsx("span",{className:"ci-stat-icon",children:"🌌"}),f.jsx("span",{className:"ci-stat-label",children:"Theme"}),f.jsx("span",{className:"ci-stat-val",style:{textTransform:"capitalize"},children:s.theme})]})]})]}),f.jsxs("div",{className:"ci-grid",children:[f.jsxs("div",{className:"ci-left",children:[f.jsxs("div",{className:"ci-image-wrap",children:[f.jsx("img",{src:s.image,alt:s.title}),f.jsx("div",{className:"ci-image-overlay"}),f.jsx("div",{className:"ci-image-chapter-badge",children:s.number})]}),f.jsxs("div",{className:"ci-tags",children:[f.jsx("span",{className:"ci-tag",children:"⚔ Adventure"}),f.jsx("span",{className:"ci-tag",children:"👥 Up to 20 Players"}),f.jsx("span",{className:"ci-tag",children:"✦ Vanilla+"}),s.status==="available"&&f.jsx("span",{className:"ci-tag ci-tag--available",children:"🟢 Available Now"})]})]}),f.jsxs("div",{className:"ci-info",children:[f.jsx("div",{className:"ci-info-eyebrow",children:s.subtitle}),f.jsx("h2",{className:"ci-info-title",children:s.title}),f.jsxs("div",{className:"ci-info-divider",children:[f.jsx("span",{className:"ci-info-divider-line"}),f.jsx("span",{className:"ci-info-divider-icon",children:"✦"}),f.jsx("span",{className:"ci-info-divider-line"})]}),s.description&&f.jsx("p",{className:"ci-description",children:s.description}),f.jsx("div",{className:"ci-lore-label",children:"Chapter Lore"}),f.jsx("p",{className:"ci-lore",style:{whiteSpace:"pre-line"},children:s.lore})]})]})]})}function __({chapter:s}){return f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Trailer & Teaser"}),f.jsx("div",{className:"trailer-wrap",children:s.trailerId?f.jsx("div",{className:"trailer-embed",children:f.jsx("iframe",{src:`https://www.youtube.com/embed/${s.trailerId}?rel=0`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:`${s.title} Trailer`})}):f.jsxs("div",{className:"trailer-placeholder",children:[f.jsx("span",{children:"▶"}),f.jsx("span",{children:"Trailer Coming Soon"})]})})]})}function x_({chapter:s}){const[e,n]=Ke.useState(0),r=s.screenshots,o=r.length,l=()=>n(u=>(u-1+o)%o),d=()=>n(u=>(u+1)%o);return o===0?f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Screenshots"}),f.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[f.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"🖼"}),f.jsx("span",{children:"No screenshots yet"})]})]}):f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Screenshots"}),f.jsxs("div",{className:"carousel-wrap",children:[f.jsxs("div",{className:"carousel-stage",children:[f.jsx("img",{src:r[e],alt:`Screenshot ${e+1}`,className:"carousel-img"},e),o>1&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"carousel-btn carousel-btn--prev",onClick:l,"aria-label":"Previous",children:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"18",height:"18",children:f.jsx("path",{d:"M15 18l-6-6 6-6"})})}),f.jsx("button",{className:"carousel-btn carousel-btn--next",onClick:d,"aria-label":"Next",children:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",width:"18",height:"18",children:f.jsx("path",{d:"M9 18l6-6-6-6"})})})]}),f.jsxs("div",{className:"carousel-counter",children:[e+1," / ",o]})]}),o>1&&f.jsx("div",{className:"carousel-thumbs",children:r.map((u,p)=>f.jsx("button",{className:`carousel-thumb${p===e?" active":""}`,onClick:()=>n(p),children:f.jsx("img",{src:u,alt:"",loading:"lazy"})},p))})]})]})}const y_=["helmet","chestplate","leggings","boots"],Yp={helmet:"🪖",chestplate:"🛡️",leggings:"👖",boots:"👟"},Kp={helmet:"Helmet",chestplate:"Chestplate",leggings:"Leggings",boots:"Boots"},Zp={common:"#aaaaaa",uncommon:"#55ff55",rare:"#5588ff",epic:"#aa44ff",legendary:"#ffaa00"};const Yd="168",S_=0,Qp=1,M_=2,ag=1,E_=2,Fi=3,xr=0,Nn=1,vi=2,vr=0,zs=1,Jp=2,em=3,tm=4,w_=5,Xr=100,T_=101,A_=102,C_=103,R_=104,b_=200,N_=201,P_=202,L_=203,hd=204,pd=205,D_=206,I_=207,U_=208,F_=209,k_=210,O_=211,B_=212,z_=213,H_=214,V_=0,j_=1,G_=2,Ol=3,W_=4,X_=5,q_=6,$_=7,Kd=0,Y_=1,K_=2,_r=0,Z_=1,Q_=2,J_=3,ex=4,tx=5,nx=6,ix=7,og=300,js=301,Gs=302,md=303,gd=304,Xl=306,vd=1e3,$r=1001,_d=1002,bn=1003,rx=1004,rl=1005,ai=1006,Iu=1007,Yr=1008,Bi=1009,lg=1010,cg=1011,ja=1012,Zd=1013,Kr=1014,ki=1015,Ga=1016,Qd=1017,Jd=1018,Ws=1020,ug=35902,dg=1021,fg=1022,oi=1023,hg=1024,pg=1025,Hs=1026,Xs=1027,mg=1028,ef=1029,gg=1030,tf=1031,nf=1033,Nl=33776,Pl=33777,Ll=33778,Dl=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,Cd=37809,Rd=37810,bd=37811,Nd=37812,Pd=37813,Ld=37814,Dd=37815,Id=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,Bd=37821,Il=36492,zd=36494,Hd=36495,vg=36283,Vd=36284,jd=36285,Gd=36286,sx=3200,ax=3201,_g=0,ox=1,gr="",mi="srgb",Sr="srgb-linear",rf="display-p3",ql="display-p3-linear",Bl="linear",Dt="srgb",zl="rec709",Hl="p3",Ss=7680,nm=519,lx=512,cx=513,ux=514,xg=515,dx=516,fx=517,hx=518,px=519,im=35044,rm="300 es",Oi=2e3,Vl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Wd=180/Math.PI;function Wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function mx(s,e){return(s%e+e)%e}function Fu(s,e,n){return(1-n)*s+n*e}function La(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,o,l,d,u,p,g){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,d,u,p,g)}set(e,n,r,o,l,d,u,p,g){const _=this.elements;return _[0]=e,_[1]=o,_[2]=u,_[3]=n,_[4]=l,_[5]=p,_[6]=r,_[7]=d,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,d=r[0],u=r[3],p=r[6],g=r[1],_=r[4],S=r[7],y=r[2],M=r[5],A=r[8],T=o[0],x=o[3],v=o[6],D=o[1],w=o[4],b=o[7],H=o[2],L=o[5],I=o[8];return l[0]=d*T+u*D+p*H,l[3]=d*x+u*w+p*L,l[6]=d*v+u*b+p*I,l[1]=g*T+_*D+S*H,l[4]=g*x+_*w+S*L,l[7]=g*v+_*b+S*I,l[2]=y*T+M*D+A*H,l[5]=y*x+M*w+A*L,l[8]=y*v+M*b+A*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],d=e[4],u=e[5],p=e[6],g=e[7],_=e[8];return n*d*_-n*u*g-r*l*_+r*u*p+o*l*g-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],d=e[4],u=e[5],p=e[6],g=e[7],_=e[8],S=_*d-u*g,y=u*p-_*l,M=g*l-d*p,A=n*S+r*y+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(o*g-_*r)*T,e[2]=(u*r-o*d)*T,e[3]=y*T,e[4]=(_*n-o*p)*T,e[5]=(o*l-u*n)*T,e[6]=M*T,e[7]=(r*p-g*n)*T,e[8]=(d*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,d,u){const p=Math.cos(l),g=Math.sin(l);return this.set(r*p,r*g,-r*(p*d+g*u)+d+e,-o*g,o*p,-o*(-g*d+p*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new ut;function yg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gx(){const s=jl("canvas");return s.style.display="block",s}const sm={};function Ha(s){s in sm||(sm[s]=!0,console.warn(s))}function vx(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const am=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),om=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Sr]:{transfer:Bl,primaries:zl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[mi]:{transfer:Dt,primaries:zl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ql]:{transfer:Bl,primaries:Hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(om),fromReference:s=>s.applyMatrix3(am)},[rf]:{transfer:Dt,primaries:Hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(om),fromReference:s=>s.applyMatrix3(am).convertLinearToSRGB()}},_x=new Set([Sr,ql]),Et={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_x.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Da[e].toReference,o=Da[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Da[s].primaries},getTransfer:function(s){return s===gr?Bl:Da[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Da[e].luminanceCoefficients)}};function Vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ou(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=jl("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Vs(l[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vs(n[r]/255)*255):n[r]=Vs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class Sg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,u=o.length;d<u;d++)o[d].isDataTexture?l.push(Bu(o[d].image)):l.push(Bu(o[d]))}else l=Bu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sx=0;class vn extends $s{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,r=$r,o=$r,l=ai,d=Yr,u=oi,p=Bi,g=vn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Wa(),this.name="",this.source=new Sg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=g,this.format=u,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=og;vn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,r=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const p=e.elements,g=p[0],_=p[4],S=p[8],y=p[1],M=p[5],A=p[9],T=p[2],x=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(S-T)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(S+T)<.1&&Math.abs(A+x)<.1&&Math.abs(g+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(g+1)/2,b=(M+1)/2,H=(v+1)/2,L=(_+y)/4,I=(S+T)/4,j=(A+x)/4;return w>b&&w>H?w<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(w),o=L/r,l=I/r):b>H?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=L/o,l=j/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=I/l,o=j/l),this.set(r,o,l,n),this}let D=Math.sqrt((x-A)*(x-A)+(S-T)*(S-T)+(y-_)*(y-_));return Math.abs(D)<.001&&(D=1),this.x=(x-A)/D,this.y=(S-T)/D,this.z=(y-_)/D,this.w=Math.acos((g+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mx extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new vn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let u=0;u<d;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends Mx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Mg extends vn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ex extends vn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,d,u){let p=r[o+0],g=r[o+1],_=r[o+2],S=r[o+3];const y=l[d+0],M=l[d+1],A=l[d+2],T=l[d+3];if(u===0){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=S;return}if(u===1){e[n+0]=y,e[n+1]=M,e[n+2]=A,e[n+3]=T;return}if(S!==T||p!==y||g!==M||_!==A){let x=1-u;const v=p*y+g*M+_*A+S*T,D=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const H=Math.sqrt(w),L=Math.atan2(H,v*D);x=Math.sin(x*L)/H,u=Math.sin(u*L)/H}const b=u*D;if(p=p*x+y*b,g=g*x+M*b,_=_*x+A*b,S=S*x+T*b,x===1-u){const H=1/Math.sqrt(p*p+g*g+_*_+S*S);p*=H,g*=H,_*=H,S*=H}}e[n]=p,e[n+1]=g,e[n+2]=_,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,l,d){const u=r[o],p=r[o+1],g=r[o+2],_=r[o+3],S=l[d],y=l[d+1],M=l[d+2],A=l[d+3];return e[n]=u*A+_*S+p*M-g*y,e[n+1]=p*A+_*y+g*S-u*M,e[n+2]=g*A+_*M+u*y-p*S,e[n+3]=_*A-u*S-p*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,d=e._order,u=Math.cos,p=Math.sin,g=u(r/2),_=u(o/2),S=u(l/2),y=p(r/2),M=p(o/2),A=p(l/2);switch(d){case"XYZ":this._x=y*_*S+g*M*A,this._y=g*M*S-y*_*A,this._z=g*_*A+y*M*S,this._w=g*_*S-y*M*A;break;case"YXZ":this._x=y*_*S+g*M*A,this._y=g*M*S-y*_*A,this._z=g*_*A-y*M*S,this._w=g*_*S+y*M*A;break;case"ZXY":this._x=y*_*S-g*M*A,this._y=g*M*S+y*_*A,this._z=g*_*A+y*M*S,this._w=g*_*S-y*M*A;break;case"ZYX":this._x=y*_*S-g*M*A,this._y=g*M*S+y*_*A,this._z=g*_*A-y*M*S,this._w=g*_*S+y*M*A;break;case"YZX":this._x=y*_*S+g*M*A,this._y=g*M*S+y*_*A,this._z=g*_*A-y*M*S,this._w=g*_*S-y*M*A;break;case"XZY":this._x=y*_*S-g*M*A,this._y=g*M*S-y*_*A,this._z=g*_*A+y*M*S,this._w=g*_*S+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],d=n[1],u=n[5],p=n[9],g=n[2],_=n[6],S=n[10],y=r+u+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(l-g)*M,this._z=(d-o)*M}else if(r>u&&r>S){const M=2*Math.sqrt(1+r-u-S);this._w=(_-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+g)/M}else if(u>S){const M=2*Math.sqrt(1+u-r-S);this._w=(l-g)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+S-r-u);this._w=(d-o)/M,this._x=(l+g)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,d=e._w,u=n._x,p=n._y,g=n._z,_=n._w;return this._x=r*_+d*u+o*g-l*p,this._y=o*_+d*p+l*u-r*g,this._z=l*_+d*g+r*p-o*u,this._w=d*_-r*u-o*p-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,d=this._w;let u=d*e._w+r*e._x+o*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=r,this._y=o,this._z=l,this;const p=1-u*u;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,u),S=Math.sin((1-n)*_)/g,y=Math.sin(n*_)/g;return this._w=d*S+this._w*y,this._x=r*S+this._x*y,this._y=o*S+this._y*y,this._z=l*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,d=e.y,u=e.z,p=e.w,g=2*(d*o-u*r),_=2*(u*n-l*o),S=2*(l*r-d*n);return this.x=n+p*g+d*S-u*_,this.y=r+p*_+u*g-l*S,this.z=o+p*S+l*_-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,d=n.x,u=n.y,p=n.z;return this.x=o*p-l*u,this.y=l*d-r*p,this.z=r*u-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new Z,lm=new Xa;class qa{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,u=l.count;d<u;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(l,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),al.subVectors(this.max,Ia),Es.subVectors(e.a,Ia),ws.subVectors(e.b,Ia),Ts.subVectors(e.c,Ia),ur.subVectors(ws,Es),dr.subVectors(Ts,ws),kr.subVectors(Es,Ts);let n=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-kr.z,kr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,kr.z,0,-kr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-kr.y,kr.x,0];return!Hu(n,Es,ws,Ts,al)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,Es,ws,Ts,al))?!1:(ol.crossVectors(ur,dr),n=[ol.x,ol.y,ol.z],Hu(n,Es,ws,Ts,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ii=new Z,sl=new qa,Es=new Z,ws=new Z,Ts=new Z,ur=new Z,dr=new Z,kr=new Z,Ia=new Z,al=new Z,ol=new Z,Or=new Z;function Hu(s,e,n,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Or.fromArray(s,l);const u=o.x*Math.abs(Or.x)+o.y*Math.abs(Or.y)+o.z*Math.abs(Or.z),p=e.dot(Or),g=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>u)return!1}return!0}const wx=new qa,Ua=new Z,Vu=new Z;class $l{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):wx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Vu)),this.expandByPoint(Ua.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Z,ju=new Z,ll=new Z,fr=new Z,Gu=new Z,cl=new Z,Wu=new Z;class Eg{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ju.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(ju);const l=e.distanceTo(n)*.5,d=-this.direction.dot(ll),u=fr.dot(this.direction),p=-fr.dot(ll),g=fr.lengthSq(),_=Math.abs(1-d*d);let S,y,M,A;if(_>0)if(S=d*p-u,y=d*u-p,A=l*_,S>=0)if(y>=-A)if(y<=A){const T=1/_;S*=T,y*=T,M=S*(S+d*y+2*u)+y*(d*S+y+2*p)+g}else y=l,S=Math.max(0,-(d*y+u)),M=-S*S+y*(y+2*p)+g;else y=-l,S=Math.max(0,-(d*y+u)),M=-S*S+y*(y+2*p)+g;else y<=-A?(S=Math.max(0,-(-d*l+u)),y=S>0?-l:Math.min(Math.max(-l,-p),l),M=-S*S+y*(y+2*p)+g):y<=A?(S=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+g):(S=Math.max(0,-(d*l+u)),y=S>0?l:Math.min(Math.max(-l,-p),l),M=-S*S+y*(y+2*p)+g);else y=d>0?-l:l,S=Math.max(0,-(d*y+u)),M=-S*S+y*(y+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(ju).addScaledVector(ll,y),M}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),o=Li.dot(Li)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),u=r-d,p=r+d;return p<0?null:u<0?this.at(p,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,d,u,p;const g=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),_>=0?(l=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),S>=0?(u=(e.min.z-y.z)*S,p=(e.max.z-y.z)*S):(u=(e.max.z-y.z)*S,p=(e.min.z-y.z)*S),r>p||u>o)||((u>r||r!==r)&&(r=u),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,o,l){Gu.subVectors(n,e),cl.subVectors(r,e),Wu.crossVectors(Gu,cl);let d=this.direction.dot(Wu),u;if(d>0){if(o)return null;u=1}else if(d<0)u=-1,d=-d;else return null;fr.subVectors(this.origin,e);const p=u*this.direction.dot(cl.crossVectors(fr,cl));if(p<0)return null;const g=u*this.direction.dot(Gu.cross(fr));if(g<0||p+g>d)return null;const _=-u*fr.dot(Wu);return _<0?null:this.at(_/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,o,l,d,u,p,g,_,S,y,M,A,T,x){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,d,u,p,g,_,S,y,M,A,T,x)}set(e,n,r,o,l,d,u,p,g,_,S,y,M,A,T,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=d,v[9]=u,v[13]=p,v[2]=g,v[6]=_,v[10]=S,v[14]=y,v[3]=M,v[7]=A,v[11]=T,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),l=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),u=Math.sin(r),p=Math.cos(o),g=Math.sin(o),_=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const y=d*_,M=d*S,A=u*_,T=u*S;n[0]=p*_,n[4]=-p*S,n[8]=g,n[1]=M+A*g,n[5]=y-T*g,n[9]=-u*p,n[2]=T-y*g,n[6]=A+M*g,n[10]=d*p}else if(e.order==="YXZ"){const y=p*_,M=p*S,A=g*_,T=g*S;n[0]=y+T*u,n[4]=A*u-M,n[8]=d*g,n[1]=d*S,n[5]=d*_,n[9]=-u,n[2]=M*u-A,n[6]=T+y*u,n[10]=d*p}else if(e.order==="ZXY"){const y=p*_,M=p*S,A=g*_,T=g*S;n[0]=y-T*u,n[4]=-d*S,n[8]=A+M*u,n[1]=M+A*u,n[5]=d*_,n[9]=T-y*u,n[2]=-d*g,n[6]=u,n[10]=d*p}else if(e.order==="ZYX"){const y=d*_,M=d*S,A=u*_,T=u*S;n[0]=p*_,n[4]=A*g-M,n[8]=y*g+T,n[1]=p*S,n[5]=T*g+y,n[9]=M*g-A,n[2]=-g,n[6]=u*p,n[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*g,A=u*p,T=u*g;n[0]=p*_,n[4]=T-y*S,n[8]=A*S+M,n[1]=S,n[5]=d*_,n[9]=-u*_,n[2]=-g*_,n[6]=M*S+A,n[10]=y-T*S}else if(e.order==="XZY"){const y=d*p,M=d*g,A=u*p,T=u*g;n[0]=p*_,n[4]=-S,n[8]=g*_,n[1]=y*S+T,n[5]=d*_,n[9]=M*S-A,n[2]=A*S-M,n[6]=u*_,n[10]=T*S+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tx,e,Ax)}lookAt(e,n,r){const o=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hr.crossVectors(r,Bn),hr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hr.crossVectors(r,Bn)),hr.normalize(),ul.crossVectors(Bn,hr),o[0]=hr.x,o[4]=ul.x,o[8]=Bn.x,o[1]=hr.y,o[5]=ul.y,o[9]=Bn.y,o[2]=hr.z,o[6]=ul.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,d=r[0],u=r[4],p=r[8],g=r[12],_=r[1],S=r[5],y=r[9],M=r[13],A=r[2],T=r[6],x=r[10],v=r[14],D=r[3],w=r[7],b=r[11],H=r[15],L=o[0],I=o[4],j=o[8],P=o[12],R=o[1],z=o[5],Y=o[9],q=o[13],ae=o[2],le=o[6],oe=o[10],ce=o[14],B=o[3],ue=o[7],ie=o[11],k=o[15];return l[0]=d*L+u*R+p*ae+g*B,l[4]=d*I+u*z+p*le+g*ue,l[8]=d*j+u*Y+p*oe+g*ie,l[12]=d*P+u*q+p*ce+g*k,l[1]=_*L+S*R+y*ae+M*B,l[5]=_*I+S*z+y*le+M*ue,l[9]=_*j+S*Y+y*oe+M*ie,l[13]=_*P+S*q+y*ce+M*k,l[2]=A*L+T*R+x*ae+v*B,l[6]=A*I+T*z+x*le+v*ue,l[10]=A*j+T*Y+x*oe+v*ie,l[14]=A*P+T*q+x*ce+v*k,l[3]=D*L+w*R+b*ae+H*B,l[7]=D*I+w*z+b*le+H*ue,l[11]=D*j+w*Y+b*oe+H*ie,l[15]=D*P+w*q+b*ce+H*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],d=e[1],u=e[5],p=e[9],g=e[13],_=e[2],S=e[6],y=e[10],M=e[14],A=e[3],T=e[7],x=e[11],v=e[15];return A*(+l*p*S-o*g*S-l*u*y+r*g*y+o*u*M-r*p*M)+T*(+n*p*M-n*g*y+l*d*y-o*d*M+o*g*_-l*p*_)+x*(+n*g*S-n*u*M-l*d*S+r*d*M+l*u*_-r*g*_)+v*(-o*u*_-n*p*S+n*u*y+o*d*S-r*d*y+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],d=e[4],u=e[5],p=e[6],g=e[7],_=e[8],S=e[9],y=e[10],M=e[11],A=e[12],T=e[13],x=e[14],v=e[15],D=S*x*g-T*y*g+T*p*M-u*x*M-S*p*v+u*y*v,w=A*y*g-_*x*g-A*p*M+d*x*M+_*p*v-d*y*v,b=_*T*g-A*S*g+A*u*M-d*T*M-_*u*v+d*S*v,H=A*S*p-_*T*p-A*u*y+d*T*y+_*u*x-d*S*x,L=n*D+r*w+o*b+l*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=D*I,e[1]=(T*y*l-S*x*l-T*o*M+r*x*M+S*o*v-r*y*v)*I,e[2]=(u*x*l-T*p*l+T*o*g-r*x*g-u*o*v+r*p*v)*I,e[3]=(S*p*l-u*y*l-S*o*g+r*y*g+u*o*M-r*p*M)*I,e[4]=w*I,e[5]=(_*x*l-A*y*l+A*o*M-n*x*M-_*o*v+n*y*v)*I,e[6]=(A*p*l-d*x*l-A*o*g+n*x*g+d*o*v-n*p*v)*I,e[7]=(d*y*l-_*p*l+_*o*g-n*y*g-d*o*M+n*p*M)*I,e[8]=b*I,e[9]=(A*S*l-_*T*l-A*r*M+n*T*M+_*r*v-n*S*v)*I,e[10]=(d*T*l-A*u*l+A*r*g-n*T*g-d*r*v+n*u*v)*I,e[11]=(_*u*l-d*S*l-_*r*g+n*S*g+d*r*M-n*u*M)*I,e[12]=H*I,e[13]=(_*T*o-A*S*o+A*r*y-n*T*y-_*r*x+n*S*x)*I,e[14]=(A*u*o-d*T*o-A*r*p+n*T*p+d*r*x-n*u*x)*I,e[15]=(d*S*o-_*u*o+_*r*p-n*S*p-d*r*y+n*u*y)*I,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,d=e.x,u=e.y,p=e.z,g=l*d,_=l*u;return this.set(g*d+r,g*u-o*p,g*p+o*u,0,g*u+o*p,_*u+r,_*p-o*d,0,g*p-o*u,_*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,d=n._y,u=n._z,p=n._w,g=l+l,_=d+d,S=u+u,y=l*g,M=l*_,A=l*S,T=d*_,x=d*S,v=u*S,D=p*g,w=p*_,b=p*S,H=r.x,L=r.y,I=r.z;return o[0]=(1-(T+v))*H,o[1]=(M+b)*H,o[2]=(A-w)*H,o[3]=0,o[4]=(M-b)*L,o[5]=(1-(y+v))*L,o[6]=(x+D)*L,o[7]=0,o[8]=(A+w)*I,o[9]=(x-D)*I,o[10]=(1-(y+T))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=As.set(o[0],o[1],o[2]).length();const d=As.set(o[4],o[5],o[6]).length(),u=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const g=1/l,_=1/d,S=1/u;return ri.elements[0]*=g,ri.elements[1]*=g,ri.elements[2]*=g,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=S,ri.elements[9]*=S,ri.elements[10]*=S,n.setFromRotationMatrix(ri),r.x=l,r.y=d,r.z=u,this}makePerspective(e,n,r,o,l,d,u=Oi){const p=this.elements,g=2*l/(n-e),_=2*l/(r-o),S=(n+e)/(n-e),y=(r+o)/(r-o);let M,A;if(u===Oi)M=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(u===Vl)M=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,d,u=Oi){const p=this.elements,g=1/(n-e),_=1/(r-o),S=1/(d-l),y=(n+e)*g,M=(r+o)*_;let A,T;if(u===Oi)A=(d+l)*S,T=-2*S;else if(u===Vl)A=l*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new Z,ri=new Ht,Tx=new Z(0,0,0),Ax=new Z(1,1,1),hr=new Z,ul=new Z,Bn=new Z,cm=new Ht,um=new Xa;class xi{constructor(e=0,n=0,r=0,o=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],u=o[8],p=o[1],g=o[5],_=o[9],S=o[2],y=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Cn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const dm=new Z,Cs=new Xa,Di=new Ht,dl=new Z,Fa=new Z,Rx=new Z,bx=new Xa,fm=new Z(1,0,0),hm=new Z(0,1,0),pm=new Z(0,0,1),mm={type:"added"},Nx={type:"removed"},Rs={type:"childadded",child:null},Xu={type:"childremoved",child:null};class on extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new Z,n=new xi,r=new Xa,o=new Z(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Fa,dl,this.up):Di.lookAt(dl,Fa,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Nx),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const S=p[g];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,g=this.material.length;p<g;p++)u.push(l(e.materials,this.material[p]));o.material=u}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];o.animations.push(l(e.animations,p))}}if(n){const u=d(e.geometries),p=d(e.materials),g=d(e.textures),_=d(e.images),S=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);u.length>0&&(r.geometries=u),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function d(u){const p=[];for(const g in u){const _=u[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}on.DEFAULT_UP=new Z(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new Z,Ii=new Z,qu=new Z,Ui=new Z,bs=new Z,Ns=new Z,gm=new Z,$u=new Z,Yu=new Z,Ku=new Z;class _i{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){si.subVectors(o,n),Ii.subVectors(r,n),qu.subVectors(e,n);const d=si.dot(si),u=si.dot(Ii),p=si.dot(qu),g=Ii.dot(Ii),_=Ii.dot(qu),S=d*g-u*u;if(S===0)return l.set(0,0,0),null;const y=1/S,M=(g*p-u*_)*y,A=(d*_-u*p)*y;return l.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,o,l,d,u,p){return this.getBarycoord(e,n,r,o,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ui.x),p.addScaledVector(d,Ui.y),p.addScaledVector(u,Ui.z),p)}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Ii.subVectors(e,n),si.cross(Ii).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return _i.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let d,u;bs.subVectors(o,r),Ns.subVectors(l,r),$u.subVectors(e,r);const p=bs.dot($u),g=Ns.dot($u);if(p<=0&&g<=0)return n.copy(r);Yu.subVectors(e,o);const _=bs.dot(Yu),S=Ns.dot(Yu);if(_>=0&&S<=_)return n.copy(o);const y=p*S-_*g;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),n.copy(r).addScaledVector(bs,d);Ku.subVectors(e,l);const M=bs.dot(Ku),A=Ns.dot(Ku);if(A>=0&&M<=A)return n.copy(l);const T=M*g-p*A;if(T<=0&&g>=0&&A<=0)return u=g/(g-A),n.copy(r).addScaledVector(Ns,u);const x=_*A-M*S;if(x<=0&&S-_>=0&&M-A>=0)return gm.subVectors(l,o),u=(S-_)/(S-_+(M-A)),n.copy(o).addScaledVector(gm,u);const v=1/(x+T+y);return d=T*v,u=y*v,n.copy(r).addScaledVector(bs,d).addScaledVector(Ns,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Zu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=mx(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=Zu(d,l,e+1/3),this.g=Zu(d,l,e),this.b=Zu(d,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,n=mi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],u=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=Ou(e.r),this.g=Ou(e.g),this.b=Ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Et.fromWorkingColorSpace(hn.copy(this),e),Math.round(Cn(hn.r*255,0,255))*65536+Math.round(Cn(hn.g*255,0,255))*256+Math.round(Cn(hn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,o=hn.g,l=hn.b,d=Math.max(r,o,l),u=Math.min(r,o,l);let p,g;const _=(u+d)/2;if(u===d)p=0,g=0;else{const S=d-u;switch(g=_<=.5?S/(d+u):S/(2-d-u),d){case r:p=(o-l)/S+(o<l?6:0);break;case o:p=(l-r)/S+2;break;case l:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=mi){Et.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,o=hn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(fl);const r=Fu(pr.h,fl.h,n),o=Fu(pr.s,fl.s,n),l=Fu(pr.l,fl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new pt;pt.NAMES=Tg;let Px=0;class Ys extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=zs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hd&&(r.blendSrc=this.blendSrc),this.blendDst!==pd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ol&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const u in l){const p=l[u];delete p.metadata,d.push(p)}return d}if(n){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Va extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Z,hl=new mt;class li{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=im,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ha("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=La(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=La(n,this.array)),n}setX(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=La(n,this.array)),n}setY(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=La(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=La(n,this.array)),n}setW(e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),o=Tn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Tn(n,this.array),r=Tn(r,this.array),o=Tn(o,this.array),l=Tn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class Ag extends li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Cg extends li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Hn extends li{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Lx=0;const $n=new Ht,Qu=new on,Ps=new Z,zn=new qa,ka=new qa,rn=new Z;class ci extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?Cg:Ag)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Hn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const u=n[l];ka.setFromBufferAttribute(u),this.morphTargetsRelative?(rn.addVectors(zn.min,ka.min),zn.expandByPoint(rn),rn.addVectors(zn.max,ka.max),zn.expandByPoint(rn)):(zn.expandByPoint(ka.min),zn.expandByPoint(ka.max))}zn.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)rn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(rn));if(n)for(let l=0,d=n.length;l<d;l++){const u=n[l],p=this.morphTargetsRelative;for(let g=0,_=u.count;g<_;g++)rn.fromBufferAttribute(u,g),p&&(Ps.fromBufferAttribute(e,g),rn.add(Ps)),o=Math.max(o,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),u=[],p=[];for(let j=0;j<r.count;j++)u[j]=new Z,p[j]=new Z;const g=new Z,_=new Z,S=new Z,y=new mt,M=new mt,A=new mt,T=new Z,x=new Z;function v(j,P,R){g.fromBufferAttribute(r,j),_.fromBufferAttribute(r,P),S.fromBufferAttribute(r,R),y.fromBufferAttribute(l,j),M.fromBufferAttribute(l,P),A.fromBufferAttribute(l,R),_.sub(g),S.sub(g),M.sub(y),A.sub(y);const z=1/(M.x*A.y-A.x*M.y);isFinite(z)&&(T.copy(_).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(z),x.copy(S).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(z),u[j].add(T),u[P].add(T),u[R].add(T),p[j].add(x),p[P].add(x),p[R].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,P=D.length;j<P;++j){const R=D[j],z=R.start,Y=R.count;for(let q=z,ae=z+Y;q<ae;q+=3)v(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new Z,b=new Z,H=new Z,L=new Z;function I(j){H.fromBufferAttribute(o,j),L.copy(H);const P=u[j];w.copy(P),w.sub(H.multiplyScalar(H.dot(P))).normalize(),b.crossVectors(L,P);const z=b.dot(p[j])<0?-1:1;d.setXYZW(j,w.x,w.y,w.z,z)}for(let j=0,P=D.length;j<P;++j){const R=D[j],z=R.start,Y=R.count;for(let q=z,ae=z+Y;q<ae;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new Z,l=new Z,d=new Z,u=new Z,p=new Z,g=new Z,_=new Z,S=new Z;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),T=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),_.subVectors(d,l),S.subVectors(o,l),_.cross(S),u.fromBufferAttribute(r,A),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,x),u.add(_),p.add(_),g.add(_),r.setXYZ(A,u.x,u.y,u.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(x,g.x,g.y,g.z)}else for(let y=0,M=n.count;y<M;y+=3)o.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),_.subVectors(d,l),S.subVectors(o,l),_.cross(S),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(u,p){const g=u.array,_=u.itemSize,S=u.normalized,y=new g.constructor(p.length*_);let M=0,A=0;for(let T=0,x=p.length;T<x;T++){u.isInterleavedBufferAttribute?M=p[T]*u.data.stride+u.offset:M=p[T]*_;for(let v=0;v<_;v++)y[A++]=g[M++]}return new li(y,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,r=this.index.array,o=this.attributes;for(const u in o){const p=o[u],g=e(p,r);n.setAttribute(u,g)}const l=this.morphAttributes;for(const u in l){const p=[],g=l[u];for(let _=0,S=g.length;_<S;_++){const y=g[_],M=e(y,r);p.push(M)}n.morphAttributes[u]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,p=d.length;u<p;u++){const g=d[u];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let S=0,y=g.length;S<y;S++){const M=g[S];_.push(M.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const _=o[g];this.setAttribute(g,_.clone(n))}const l=e.morphAttributes;for(const g in l){const _=[],S=l[g];for(let y=0,M=S.length;y<M;y++)_.push(S[y].clone(n));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,_=d.length;g<_;g++){const S=d[g];this.addGroup(S.start,S.count,S.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Ht,Br=new Eg,pl=new $l,_m=new Z,Ls=new Z,Ds=new Z,Is=new Z,Ju=new Z,ml=new Z,gl=new mt,vl=new mt,_l=new mt,xm=new Z,ym=new Z,Sm=new Z,xl=new Z,yl=new Z;class qt extends on{constructor(e=new ci,n=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(l&&u){ml.set(0,0,0);for(let p=0,g=l.length;p<g;p++){const _=u[p],S=l[p];_!==0&&(Ju.fromBufferAttribute(S,e),d?ml.addScaledVector(Ju,_):ml.addScaledVector(Ju.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),Br.copy(e.ray).recast(e.near),!(pl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(pl,_m)===null||Br.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(l).invert(),Br.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const l=this.geometry,d=this.material,u=l.index,p=l.attributes.position,g=l.attributes.uv,_=l.attributes.uv1,S=l.attributes.normal,y=l.groups,M=l.drawRange;if(u!==null)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const x=y[A],v=d[x.materialIndex],D=Math.max(x.start,M.start),w=Math.min(u.count,Math.min(x.start+x.count,M.start+M.count));for(let b=D,H=w;b<H;b+=3){const L=u.getX(b),I=u.getX(b+1),j=u.getX(b+2);o=Sl(this,v,e,r,g,_,S,L,I,j),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),T=Math.min(u.count,M.start+M.count);for(let x=A,v=T;x<v;x+=3){const D=u.getX(x),w=u.getX(x+1),b=u.getX(x+2);o=Sl(this,d,e,r,g,_,S,D,w,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const x=y[A],v=d[x.materialIndex],D=Math.max(x.start,M.start),w=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let b=D,H=w;b<H;b+=3){const L=b,I=b+1,j=b+2;o=Sl(this,v,e,r,g,_,S,L,I,j),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let x=A,v=T;x<v;x+=3){const D=x,w=x+1,b=x+2;o=Sl(this,d,e,r,g,_,S,D,w,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function Dx(s,e,n,r,o,l,d,u){let p;if(e.side===Nn?p=r.intersectTriangle(d,l,o,!0,u):p=r.intersectTriangle(o,l,d,e.side===xr,u),p===null)return null;yl.copy(u),yl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(yl);return g<n.near||g>n.far?null:{distance:g,point:yl.clone(),object:s}}function Sl(s,e,n,r,o,l,d,u,p,g){s.getVertexPosition(u,Ls),s.getVertexPosition(p,Ds),s.getVertexPosition(g,Is);const _=Dx(s,e,n,r,Ls,Ds,Is,xl);if(_){o&&(gl.fromBufferAttribute(o,u),vl.fromBufferAttribute(o,p),_l.fromBufferAttribute(o,g),_.uv=_i.getInterpolation(xl,Ls,Ds,Is,gl,vl,_l,new mt)),l&&(gl.fromBufferAttribute(l,u),vl.fromBufferAttribute(l,p),_l.fromBufferAttribute(l,g),_.uv1=_i.getInterpolation(xl,Ls,Ds,Is,gl,vl,_l,new mt)),d&&(xm.fromBufferAttribute(d,u),ym.fromBufferAttribute(d,p),Sm.fromBufferAttribute(d,g),_.normal=_i.getInterpolation(xl,Ls,Ds,Is,xm,ym,Sm,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:u,b:p,c:g,normal:new Z,materialIndex:0};_i.getNormal(Ls,Ds,Is,S.normal),_.face=S}return _}class An extends ci{constructor(e=1,n=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const u=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],g=[],_=[],S=[];let y=0,M=0;A("z","y","x",-1,-1,r,n,e,d,l,0),A("z","y","x",1,-1,r,n,-e,d,l,1),A("x","z","y",1,1,e,r,n,o,d,2),A("x","z","y",1,-1,e,r,-n,o,d,3),A("x","y","z",1,-1,e,n,r,o,l,4),A("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(S,2));function A(T,x,v,D,w,b,H,L,I,j,P){const R=b/I,z=H/j,Y=b/2,q=H/2,ae=L/2,le=I+1,oe=j+1;let ce=0,B=0;const ue=new Z;for(let ie=0;ie<oe;ie++){const k=ie*z-q;for(let re=0;re<le;re++){const Le=re*R-Y;ue[T]=Le*D,ue[x]=k*w,ue[v]=ae,g.push(ue.x,ue.y,ue.z),ue[T]=0,ue[x]=0,ue[v]=L>0?1:-1,_.push(ue.x,ue.y,ue.z),S.push(re/I),S.push(1-ie/j),ce+=1}}for(let ie=0;ie<j;ie++)for(let k=0;k<I;k++){const re=y+k+le*ie,Le=y+k+le*(ie+1),J=y+(k+1)+le*(ie+1),de=y+(k+1)+le*ie;p.push(re,Le,de),p.push(Le,J,de),B+=6}u.addGroup(M,B,P),M+=B,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function gn(s){const e={};for(let n=0;n<s.length;n++){const r=qs(s[n]);for(const o in r)e[o]=r[o]}return e}function Ix(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Ux={clone:qs,merge:gn};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Z,Mm=new mt,Em=new mt;class Rn extends bg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Mm,Em),n.subVectors(Em,Mm)}setViewOffset(e,n,r,o,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,g=d.fullHeight;l+=d.offsetX*o/p,n-=d.offsetY*r/g,o*=d.width/p,r*=d.height/g}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Fs=1;class Ox extends on{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Rn(Us,Fs,e,n);o.layers=this.layers,this.add(o);const l=new Rn(Us,Fs,e,n);l.layers=this.layers,this.add(l);const d=new Rn(Us,Fs,e,n);d.layers=this.layers,this.add(d);const u=new Rn(Us,Fs,e,n);u.layers=this.layers,this.add(u);const p=new Rn(Us,Fs,e,n);p.layers=this.layers,this.add(p);const g=new Rn(Us,Fs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,d,u,p]=n;for(const g of n)this.remove(g);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,u,p,g,_]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,u),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,_),e.setRenderTarget(S,y,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ng extends vn{constructor(e,n,r,o,l,d,u,p,g,_){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,o,l,d,u,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bx extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ng(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new An(5,5,5),l=new yr({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:vr});l.uniforms.tEquirect.value=n;const d=new qt(o,l),u=n.minFilter;return n.minFilter===Yr&&(n.minFilter=ai),new Ox(1,10,this).update(e,d),n.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(l)}}const ed=new Z,zx=new Z,Hx=new ut;class Gr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=ed.subVectors(r,n).cross(zx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Hx.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new $l,Ml=new Z;class sf{constructor(e=new Gr,n=new Gr,r=new Gr,o=new Gr,l=new Gr,d=new Gr){this.planes=[e,n,r,o,l,d]}set(e,n,r,o,l,d){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,o=e.elements,l=o[0],d=o[1],u=o[2],p=o[3],g=o[4],_=o[5],S=o[6],y=o[7],M=o[8],A=o[9],T=o[10],x=o[11],v=o[12],D=o[13],w=o[14],b=o[15];if(r[0].setComponents(p-l,y-g,x-M,b-v).normalize(),r[1].setComponents(p+l,y+g,x+M,b+v).normalize(),r[2].setComponents(p+d,y+_,x+A,b+D).normalize(),r[3].setComponents(p-d,y-_,x-A,b-D).normalize(),r[4].setComponents(p-u,y-S,x-T,b-w).normalize(),n===Oi)r[5].setComponents(p+u,y+S,x+T,b+w).normalize();else if(n===Vl)r[5].setComponents(u,S,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pg(){let s=null,e=!1,n=null,r=null;function o(l,d){n(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Vx(s){const e=new WeakMap;function n(u,p){const g=u.array,_=u.usage,S=g.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,_),u.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)u.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:u.version,size:S}}function r(u,p,g){const _=p.array,S=p._updateRange,y=p.updateRanges;if(s.bindBuffer(g,u),S.count===-1&&y.length===0&&s.bufferSubData(g,0,_),y.length!==0){for(let M=0,A=y.length;M<A;M++){const T=y[M];s.bufferSubData(g,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}S.count!==-1&&(s.bufferSubData(g,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count),S.count=-1),p.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=e.get(u);p&&(s.deleteBuffer(p.buffer),e.delete(u))}function d(u,p){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const _=e.get(u);(!_||_.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const g=e.get(u);if(g===void 0)e.set(u,n(u,p));else if(g.version<u.version){if(g.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,u,p),g.version=u.version}}return{get:o,remove:l,update:d}}class Yl extends ci{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,d=n/2,u=Math.floor(r),p=Math.floor(o),g=u+1,_=p+1,S=e/u,y=n/p,M=[],A=[],T=[],x=[];for(let v=0;v<_;v++){const D=v*y-d;for(let w=0;w<g;w++){const b=w*S-l;A.push(b,-D,0),T.push(0,0,1),x.push(w/u),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let D=0;D<u;D++){const w=D+g*v,b=D+g*(v+1),H=D+1+g*(v+1),L=D+1+g*v;M.push(w,b,L),M.push(b,H,L)}this.setIndex(M),this.setAttribute("position",new Hn(A,3)),this.setAttribute("normal",new Hn(T,3)),this.setAttribute("uv",new Hn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gx=`#ifdef USE_ALPHAHASH
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
#endif`,Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`
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
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iy=`uniform bool receiveShadow;
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
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
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
#endif`,Hy=`struct PhysicalMaterial {
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
}`,Vy=`
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
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
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,NS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,kS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
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
}`,YS=`#if DEPTH_PACKING == 3200
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
}`,KS=`#define DISTANCE
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
}`,ZS=`#define DISTANCE
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,sM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,oM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,hM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,gM=`uniform float size;
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
}`,vM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,yM=`uniform float rotation;
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
}`,SM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:jx,alphahash_pars_fragment:Gx,alphamap_fragment:Wx,alphamap_pars_fragment:Xx,alphatest_fragment:qx,alphatest_pars_fragment:$x,aomap_fragment:Yx,aomap_pars_fragment:Kx,batching_pars_vertex:Zx,batching_vertex:Qx,begin_vertex:Jx,beginnormal_vertex:ey,bsdfs:ty,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:oy,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:uy,color_vertex:dy,common:fy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:vy,emissivemap_pars_fragment:_y,colorspace_fragment:xy,colorspace_pars_fragment:yy,envmap_fragment:Sy,envmap_common_pars_fragment:My,envmap_pars_fragment:Ey,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Uy,envmap_vertex:Ty,fog_vertex:Ay,fog_pars_vertex:Cy,fog_fragment:Ry,fog_pars_fragment:by,gradientmap_pars_fragment:Ny,lightmap_pars_fragment:Py,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Dy,lights_pars_begin:Iy,lights_toon_fragment:Fy,lights_toon_pars_fragment:ky,lights_phong_fragment:Oy,lights_phong_pars_fragment:By,lights_physical_fragment:zy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Vy,lights_fragment_maps:jy,lights_fragment_end:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:$y,map_fragment:Yy,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:Qy,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:eS,morphinstance_vertex:tS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:vS,premultiplied_alpha_fragment:_S,project_vertex:xS,dithering_fragment:yS,dithering_pars_fragment:SS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:TS,shadowmap_vertex:AS,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:bS,skinning_vertex:NS,skinnormal_vertex:PS,specularmap_fragment:LS,specularmap_pars_fragment:DS,tonemapping_fragment:IS,tonemapping_pars_fragment:US,transmission_fragment:FS,transmission_pars_fragment:kS,uv_pars_fragment:OS,uv_pars_vertex:BS,uv_vertex:zS,worldpos_vertex:HS,background_vert:VS,background_frag:jS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:qS,depth_vert:$S,depth_frag:YS,distanceRGBA_vert:KS,distanceRGBA_frag:ZS,equirect_vert:QS,equirect_frag:JS,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:hM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:vM,shadow_vert:_M,shadow_frag:xM,sprite_vert:yM,sprite_frag:SM},Pe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},gi={basic:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:gn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:gn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new pt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:gn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:gn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:gn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:gn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:gn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:gn([Pe.lights,Pe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};gi.physical={uniforms:gn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const El={r:0,b:0,g:0},Hr=new xi,MM=new Ht;function EM(s,e,n,r,o,l,d){const u=new pt(0);let p=l===!0?0:1,g,_,S=null,y=0,M=null;function A(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?n:e).get(w)),w}function T(D){let w=!1;const b=A(D);b===null?v(u,p):b&&b.isColor&&(v(b,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,w){const b=A(w);b&&(b.isCubeTexture||b.mapping===Xl)?(_===void 0&&(_=new qt(new An(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:qs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),Hr.copy(w.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),_.material.uniforms.envMap.value=b,_.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(MM.makeRotationFromEuler(Hr)),_.material.toneMapped=Et.getTransfer(b.colorSpace)!==Dt,(S!==b||y!==b.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,S=b,y=b.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):b&&b.isTexture&&(g===void 0&&(g=new qt(new Yl(2,2),new yr({name:"BackgroundMaterial",uniforms:qs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=b,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.toneMapped=Et.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),g.material.uniforms.uvTransform.value.copy(b.matrix),(S!==b||y!==b.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,S=b,y=b.version,M=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function v(D,w){D.getRGB(El,Rg(s)),r.buffers.color.setClear(El.r,El.g,El.b,w,d)}return{getClearColor:function(){return u},setClearColor:function(D,w=1){u.set(D),p=w,v(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(u,p)},render:T,addToRenderList:x}}function wM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,d=!1;function u(R,z,Y,q,ae){let le=!1;const oe=S(q,Y,z);l!==oe&&(l=oe,g(l.object)),le=M(R,q,Y,ae),le&&A(R,q,Y,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,b(R,z,Y,q),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return s.createVertexArray()}function g(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function S(R,z,Y){const q=Y.wireframe===!0;let ae=r[R.id];ae===void 0&&(ae={},r[R.id]=ae);let le=ae[z.id];le===void 0&&(le={},ae[z.id]=le);let oe=le[q];return oe===void 0&&(oe=y(p()),le[q]=oe),oe}function y(R){const z=[],Y=[],q=[];for(let ae=0;ae<n;ae++)z[ae]=0,Y[ae]=0,q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:q,object:R,attributes:{},index:null}}function M(R,z,Y,q){const ae=l.attributes,le=z.attributes;let oe=0;const ce=Y.getAttributes();for(const B in ce)if(ce[B].location>=0){const ie=ae[B];let k=le[B];if(k===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),ie===void 0||ie.attribute!==k||k&&ie.data!==k.data)return!0;oe++}return l.attributesNum!==oe||l.index!==q}function A(R,z,Y,q){const ae={},le=z.attributes;let oe=0;const ce=Y.getAttributes();for(const B in ce)if(ce[B].location>=0){let ie=le[B];ie===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const k={};k.attribute=ie,ie&&ie.data&&(k.data=ie.data),ae[B]=k,oe++}l.attributes=ae,l.attributesNum=oe,l.index=q}function T(){const R=l.newAttributes;for(let z=0,Y=R.length;z<Y;z++)R[z]=0}function x(R){v(R,0)}function v(R,z){const Y=l.newAttributes,q=l.enabledAttributes,ae=l.attributeDivisors;Y[R]=1,q[R]===0&&(s.enableVertexAttribArray(R),q[R]=1),ae[R]!==z&&(s.vertexAttribDivisor(R,z),ae[R]=z)}function D(){const R=l.newAttributes,z=l.enabledAttributes;for(let Y=0,q=z.length;Y<q;Y++)z[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),z[Y]=0)}function w(R,z,Y,q,ae,le,oe){oe===!0?s.vertexAttribIPointer(R,z,Y,ae,le):s.vertexAttribPointer(R,z,Y,q,ae,le)}function b(R,z,Y,q){T();const ae=q.attributes,le=Y.getAttributes(),oe=z.defaultAttributeValues;for(const ce in le){const B=le[ce];if(B.location>=0){let ue=ae[ce];if(ue===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const ie=ue.normalized,k=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Le=re.buffer,J=re.type,de=re.bytesPerElement,xe=J===s.INT||J===s.UNSIGNED_INT||ue.gpuType===Zd;if(ue.isInterleavedBufferAttribute){const ye=ue.data,we=ye.stride,Ue=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let be=0;be<B.locationSize;be++)v(B.location+be,ye.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let be=0;be<B.locationSize;be++)x(B.location+be);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let be=0;be<B.locationSize;be++)w(B.location+be,k/B.locationSize,J,ie,we*de,(Ue+k/B.locationSize*be)*de,xe)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)v(B.location+ye,ue.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<B.locationSize;ye++)x(B.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ye=0;ye<B.locationSize;ye++)w(B.location+ye,k/B.locationSize,J,ie,k*de,k/B.locationSize*ye*de,xe)}}else if(oe!==void 0){const ie=oe[ce];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(B.location,ie);break;case 3:s.vertexAttrib3fv(B.location,ie);break;case 4:s.vertexAttrib4fv(B.location,ie);break;default:s.vertexAttrib1fv(B.location,ie)}}}}D()}function H(){j();for(const R in r){const z=r[R];for(const Y in z){const q=z[Y];for(const ae in q)_(q[ae].object),delete q[ae];delete z[Y]}delete r[R]}}function L(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const Y in z){const q=z[Y];for(const ae in q)_(q[ae].object),delete q[ae];delete z[Y]}delete r[R.id]}function I(R){for(const z in r){const Y=r[z];if(Y[R.id]===void 0)continue;const q=Y[R.id];for(const ae in q)_(q[ae].object),delete q[ae];delete Y[R.id]}}function j(){P(),d=!0,l!==o&&(l=o,g(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:j,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:x,disableUnusedAttributes:D}}function TM(s,e,n){let r;function o(g){r=g}function l(g,_){s.drawArrays(r,g,_),n.update(_,r,1)}function d(g,_,S){S!==0&&(s.drawArraysInstanced(r,g,_,S),n.update(_,r,S))}function u(g,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,_,0,S);let M=0;for(let A=0;A<S;A++)M+=_[A];n.update(M,r,1)}function p(g,_,S,y){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<g.length;A++)d(g[A],_[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,_,0,y,0,S);let A=0;for(let T=0;T<S;T++)A+=_[T];for(let T=0;T<y.length;T++)n.update(A,r,y[T])}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function AM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(L){return!(L!==oi&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(L){const I=L===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Bi&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ki&&!I)}function p(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const S=n.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=M>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:u,precision:g,logarithmicDepthBuffer:S,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:v,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:b,maxSamples:H}}function CM(s){const e=this;let n=null,r=0,o=!1,l=!1;const d=new Gr,u=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||r!==0||o;return o=y,r=S.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,y){n=_(S,y,0)},this.setState=function(S,y,M){const A=S.clippingPlanes,T=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||A===null||A.length===0||l&&!x)l?_(null):g();else{const D=l?0:r,w=D*4;let b=v.clippingState||null;p.value=b,b=_(A,y,w,M);for(let H=0;H!==w;++H)b[H]=n[H];v.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,y,M,A){const T=S!==null?S.length:0;let x=null;if(T!==0){if(x=p.value,A!==!0||x===null){const v=M+T*4,D=y.matrixWorldInverse;u.getNormalMatrix(D),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,b=M;w!==T;++w,b+=4)d.copy(S[w]).applyMatrix4(D,u),d.normal.toArray(x,b),x[b+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function RM(s){let e=new WeakMap;function n(d,u){return u===md?d.mapping=js:u===gd&&(d.mapping=Gs),d}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===md||u===gd)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new Bx(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",o),n(g.texture,d.mapping)}else return null}}return d}function o(d){const u=d.target;u.removeEventListener("dispose",o);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Lg extends bg{constructor(e=-1,n=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,u=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,d=l+g*this.view.width,u-=_*this.view.offsetY,p=u-_*this.view.height}this.projectionMatrix.makeOrthographic(l,d,u,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,wm=[.125,.215,.35,.446,.526,.582],qr=20,td=new Lg,Tm=new pt;let nd=null,id=0,rd=0,sd=!1;const Wr=(1+Math.sqrt(5))/2,ks=1/Wr,Am=[new Z(-Wr,ks,0),new Z(Wr,ks,0),new Z(-ks,0,Wr),new Z(ks,0,Wr),new Z(0,Wr,-ks),new Z(0,Wr,ks),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Ga,format:oi,colorSpace:Sr,depthBuffer:!1},o=Rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(l)),this._blurMaterial=NM(l,e,n)}return o}_compileMaterial(e){const n=new qt(this._lodPlanes[0],e);this._renderer.compile(n,td)}_sceneToCubeUV(e,n,r,o){const u=new Rn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(Tm),_.toneMapping=_r,_.autoClear=!1;const M=new Va({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),A=new qt(new An,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(Tm),T=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(u.up.set(0,p[v],0),u.lookAt(g[v],0,0)):D===1?(u.up.set(0,0,p[v]),u.lookAt(0,g[v],0)):(u.up.set(0,p[v],0),u.lookAt(0,0,g[v]));const w=this._cubeSize;wl(o,D*w,v>2?w:0,w,w),_.setRenderTarget(o),T&&_.render(A,u),_.render(e,u)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=S,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===js||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());const l=o?this._cubemapMaterial:this._equirectMaterial,d=new qt(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const p=this._cubeSize;wl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,td)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const d=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=Am[(o-l-1)%Am.length];this._blur(e,l-1,l,d,u)}n.autoClear=r}_blur(e,n,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,d,u){const p=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new qt(this._lodPlanes[o],g),y=g.uniforms,M=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*qr-1),T=l/A,x=isFinite(l)?1+Math.floor(_*T):qr;x>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qr}`);const v=[];let D=0;for(let I=0;I<qr;++I){const j=I/T,P=Math.exp(-j*j/2);v.push(P),I===0?D+=P:I<x&&(D+=2*P)}for(let I=0;I<v.length;I++)v[I]=v[I]/D;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=d==="latitudinal",u&&(y.poleAxis.value=u);const{_lodMax:w}=this;y.dTheta.value=A,y.mipInt.value=w-r;const b=this._sizeLods[o],H=3*b*(o>w-Os?o-w+Os:0),L=4*(this._cubeSize-b);wl(n,H,L,3*b,2*b),p.setRenderTarget(n),p.render(S,td)}}function bM(s){const e=[],n=[],r=[];let o=s;const l=s-Os+1+wm.length;for(let d=0;d<l;d++){const u=Math.pow(2,o);n.push(u);let p=1/u;d>s-Os?p=wm[d-s+Os-1]:d===0&&(p=0),r.push(p);const g=1/(u-2),_=-g,S=1+g,y=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,A=6,T=3,x=2,v=1,D=new Float32Array(T*A*M),w=new Float32Array(x*A*M),b=new Float32Array(v*A*M);for(let L=0;L<M;L++){const I=L%3*2/3-1,j=L>2?0:-1,P=[I,j,0,I+2/3,j,0,I+2/3,j+1,0,I,j,0,I+2/3,j+1,0,I,j+1,0];D.set(P,T*A*L),w.set(y,x*A*L);const R=[L,L,L,L,L,L];b.set(R,v*A*L)}const H=new ci;H.setAttribute("position",new li(D,T)),H.setAttribute("uv",new li(w,x)),H.setAttribute("faceIndex",new li(b,v)),e.push(H),o>Os&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Rm(s,e,n){const r=new Zr(s,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function NM(s,e,n){const r=new Float32Array(qr),o=new Z(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:af(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function bm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Nm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function af(){return`

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
	`}function PM(s){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const p=u.mapping,g=p===md||p===gd,_=p===js||p===Gs;if(g||_){let S=e.get(u);const y=S!==void 0?S.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==y)return n===null&&(n=new Cm(s)),S=g?n.fromEquirectangular(u,S):n.fromCubemap(u,S),S.texture.pmremVersion=u.pmremVersion,e.set(u,S),S.texture;if(S!==void 0)return S.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&o(M)?(n===null&&(n=new Cm(s)),S=g?n.fromEquirectangular(u):n.fromCubemap(u),S.texture.pmremVersion=u.pmremVersion,e.set(u,S),u.addEventListener("dispose",l),S.texture):null}}}return u}function o(u){let p=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function LM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ha("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function DM(s,e,n,r){const o={},l=new WeakMap;function d(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const T=y.morphAttributes[A];for(let x=0,v=T.length;x<v;x++)e.remove(T[x])}y.removeEventListener("dispose",d),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function u(S,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,n.memory.geometries++),y}function p(S){const y=S.attributes;for(const A in y)e.update(y[A],s.ARRAY_BUFFER);const M=S.morphAttributes;for(const A in M){const T=M[A];for(let x=0,v=T.length;x<v;x++)e.update(T[x],s.ARRAY_BUFFER)}}function g(S){const y=[],M=S.index,A=S.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let w=0,b=D.length;w<b;w+=3){const H=D[w+0],L=D[w+1],I=D[w+2];y.push(H,L,L,I,I,H)}}else if(A!==void 0){const D=A.array;T=A.version;for(let w=0,b=D.length/3-1;w<b;w+=3){const H=w+0,L=w+1,I=w+2;y.push(H,L,L,I,I,H)}}else return;const x=new(yg(y)?Cg:Ag)(y,1);x.version=T;const v=l.get(S);v&&e.remove(v),l.set(S,x)}function _(S){const y=l.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&g(S)}else g(S);return l.get(S)}return{get:u,update:p,getWireframeAttribute:_}}function IM(s,e,n){let r;function o(y){r=y}let l,d;function u(y){l=y.type,d=y.bytesPerElement}function p(y,M){s.drawElements(r,M,l,y*d),n.update(M,r,1)}function g(y,M,A){A!==0&&(s.drawElementsInstanced(r,M,l,y*d,A),n.update(M,r,A))}function _(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,A);let x=0;for(let v=0;v<A;v++)x+=M[v];n.update(x,r,1)}function S(y,M,A,T){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)g(y[v]/d,M[v],T[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,T,0,A);let v=0;for(let D=0;D<A;D++)v+=M[D];for(let D=0;D<T.length;D++)n.update(v,r,T[D])}}this.setMode=o,this.setIndex=u,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function UM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,u){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=u*(l/3);break;case s.LINES:n.lines+=u*(l/2);break;case s.LINE_STRIP:n.lines+=u*(l-1);break;case s.LINE_LOOP:n.lines+=u*l;break;case s.POINTS:n.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function FM(s,e,n){const r=new WeakMap,o=new It;function l(d,u,p){const g=d.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=_!==void 0?_.length:0;let y=r.get(u);if(y===void 0||y.count!==S){let R=function(){j.dispose(),r.delete(u),u.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const A=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let b=0;A===!0&&(b=1),T===!0&&(b=2),x===!0&&(b=3);let H=u.attributes.position.count*b,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const I=new Float32Array(H*L*4*S),j=new Mg(I,H,L,S);j.type=ki,j.needsUpdate=!0;const P=b*4;for(let z=0;z<S;z++){const Y=v[z],q=D[z],ae=w[z],le=H*L*4*z;for(let oe=0;oe<Y.count;oe++){const ce=oe*P;A===!0&&(o.fromBufferAttribute(Y,oe),I[le+ce+0]=o.x,I[le+ce+1]=o.y,I[le+ce+2]=o.z,I[le+ce+3]=0),T===!0&&(o.fromBufferAttribute(q,oe),I[le+ce+4]=o.x,I[le+ce+5]=o.y,I[le+ce+6]=o.z,I[le+ce+7]=0),x===!0&&(o.fromBufferAttribute(ae,oe),I[le+ce+8]=o.x,I[le+ce+9]=o.y,I[le+ce+10]=o.z,I[le+ce+11]=ae.itemSize===4?o.w:1)}}y={count:S,texture:j,size:new mt(H,L)},r.set(u,y),u.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let A=0;for(let x=0;x<g.length;x++)A+=g[x];const T=u.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function kM(s,e,n,r){let o=new WeakMap;function l(p){const g=r.render.frame,_=p.geometry,S=e.get(p,_);if(o.get(S)!==g&&(e.update(S),o.set(S,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),o.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return S}function d(){o=new WeakMap}function u(p){const g=p.target;g.removeEventListener("dispose",u),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:d}}class Dg extends vn{constructor(e,n,r,o,l,d,u,p,g,_=Hs){if(_!==Hs&&_!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Hs&&(r=Kr),r===void 0&&_===Xs&&(r=Ws),super(null,o,l,d,u,p,_,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:bn,this.minFilter=p!==void 0?p:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ig=new vn,Pm=new Dg(1,1),Ug=new Mg,Fg=new Ex,kg=new Ng,Lm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Lm[o];if(l===void 0&&(l=new Float32Array(o),Lm[o]=l),e!==0){r.toArray(l,0);for(let d=1,u=0;d!==e;++d)u+=n,s[d].toArray(l,u)}return l}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function OM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function VM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Fm.set(r),s.uniformMatrix2fv(this.addr,!1,Fm),Zt(n,r)}}function jM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Um.set(r),s.uniformMatrix3fv(this.addr,!1,Um),Zt(n,r)}}function GM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;Im.set(r),s.uniformMatrix4fv(this.addr,!1,Im),Zt(n,r)}}function WM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function YM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function ZM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function JM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Pm.compareFunction=xg,l=Pm):l=Ig,n.setTexture2D(e||l,o)}function e1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Fg,o)}function t1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||kg,o)}function n1(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Ug,o)}function i1(s){switch(s){case 5126:return OM;case 35664:return BM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return jM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return $M;case 5125:return YM;case 36294:return KM;case 36295:return ZM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(s,e){s.uniform1fv(this.addr,e)}function s1(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function a1(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function o1(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function l1(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function c1(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function u1(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function d1(s,e){s.uniform1iv(this.addr,e)}function f1(s,e){s.uniform2iv(this.addr,e)}function h1(s,e){s.uniform3iv(this.addr,e)}function p1(s,e){s.uniform4iv(this.addr,e)}function m1(s,e){s.uniform1uiv(this.addr,e)}function g1(s,e){s.uniform2uiv(this.addr,e)}function v1(s,e){s.uniform3uiv(this.addr,e)}function _1(s,e){s.uniform4uiv(this.addr,e)}function x1(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||Ig,l[d])}function y1(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||Fg,l[d])}function S1(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||kg,l[d])}function M1(s,e,n){const r=this.cache,o=e.length,l=Kl(n,o);Kt(r,l)||(s.uniform1iv(this.addr,l),Zt(r,l));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||Ug,l[d])}function E1(s){switch(s){case 5126:return r1;case 35664:return s1;case 35665:return a1;case 35666:return o1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return d1;case 35667:case 35671:return f1;case 35668:case 35672:return h1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class w1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=i1(n.type)}}class T1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=E1(n.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const u=o[l];u.setValue(e,n[u.id],r)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function km(s,e){s.seq.push(e),s.map[e.id]=e}function C1(s,e,n){const r=s.name,o=r.length;for(ad.lastIndex=0;;){const l=ad.exec(r),d=ad.lastIndex;let u=l[1];const p=l[2]==="]",g=l[3];if(p&&(u=u|0),g===void 0||g==="["&&d+2===o){km(n,g===void 0?new w1(u,s,e):new T1(u,s,e));break}else{let S=n.map[u];S===void 0&&(S=new A1(u),km(n,S)),n=S}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),d=e.getUniformLocation(n,l.name);C1(l,d,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,d=n.length;l!==d;++l){const u=n[l],p=r[u.id];p.needsUpdate!==!1&&u.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Om(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const R1=37297;let b1=0;function N1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=o;d<l;d++){const u=d+1;r.push(`${u===e?">":" "} ${u}: ${n[d]}`)}return r.join(`
`)}function P1(s){const e=Et.getPrimaries(Et.workingColorSpace),n=Et.getPrimaries(s);let r;switch(e===n?r="":e===Hl&&n===zl?r="LinearDisplayP3ToLinearSRGB":e===zl&&n===Hl&&(r="LinearSRGBToLinearDisplayP3"),s){case Sr:case ql:return[r,"LinearTransferOETF"];case mi:case rf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Bm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+N1(s.getShaderSource(e),d)}else return o}function L1(s,e){const n=P1(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function D1(s,e){let n;switch(e){case Z_:n="Linear";break;case Q_:n="Reinhard";break;case J_:n="Cineon";break;case ex:n="ACESFilmic";break;case nx:n="AgX";break;case ix:n="Neutral";break;case tx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new Z;function I1(){Et.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function F1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function k1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),n[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:u}}return n}function za(s){return s!==""}function zm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(O1,z1)}const B1=new Map;function z1(s,e){let n=ct[e];if(n===void 0){const r=B1.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(s){return s.replace(H1,V1)}function V1(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function jm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function j1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function G1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Gs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Gs&&(e="ENVMAP_MODE_REFRACTION"),e}function X1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kd:e="ENVMAP_BLENDING_MULTIPLY";break;case Y_:e="ENVMAP_BLENDING_MIX";break;case K_:e="ENVMAP_BLENDING_ADD";break}return e}function q1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function $1(s,e,n,r){const o=s.getContext(),l=n.defines;let d=n.vertexShader,u=n.fragmentShader;const p=j1(n),g=G1(n),_=W1(n),S=X1(n),y=q1(n),M=U1(n),A=F1(l),T=o.createProgram();let x,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(za).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(za).join(`
`),v.length>0&&(v+=`
`)):(x=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),v=[jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?ct.tonemapping_pars_fragment:"",n.toneMapping!==_r?D1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,L1("linearToOutputTexel",n.outputColorSpace),I1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),d=Xd(d),d=zm(d,n),d=Hm(d,n),u=Xd(u),u=zm(u,n),u=Hm(u,n),d=Vm(d),u=Vm(u),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=D+x+d,b=D+v+u,H=Om(o,o.VERTEX_SHADER,w),L=Om(o,o.FRAGMENT_SHADER,b);o.attachShader(T,H),o.attachShader(T,L),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function I(z){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(T).trim(),q=o.getShaderInfoLog(H).trim(),ae=o.getShaderInfoLog(L).trim();let le=!0,oe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,H,L);else{const ce=Bm(o,H,"vertex"),B=Bm(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+ce+`
`+B)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||ae==="")&&(oe=!1);oe&&(z.diagnostics={runnable:le,programLog:Y,vertexShader:{log:q,prefix:x},fragmentShader:{log:ae,prefix:v}})}o.deleteShader(H),o.deleteShader(L),j=new Ul(o,T),P=k1(o,T)}let j;this.getUniforms=function(){return j===void 0&&I(this),j};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,R1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=b1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=L,this}let Y1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Z1(e),n.set(e,r)),r}}class Z1{constructor(e){this.id=Y1++,this.code=e,this.usedTimes=0}}function Q1(s,e,n,r,o,l,d){const u=new wg,p=new K1,g=new Set,_=[],S=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return g.add(P),P===0?"uv":`uv${P}`}function x(P,R,z,Y,q){const ae=Y.fog,le=q.geometry,oe=P.isMeshStandardMaterial?Y.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),B=ce&&ce.mapping===Xl?ce.image.height:null,ue=A[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ie=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,k=ie!==void 0?ie.length:0;let re=0;le.morphAttributes.position!==void 0&&(re=1),le.morphAttributes.normal!==void 0&&(re=2),le.morphAttributes.color!==void 0&&(re=3);let Le,J,de,xe;if(ue){const _t=gi[ue];Le=_t.vertexShader,J=_t.fragmentShader}else Le=P.vertexShader,J=P.fragmentShader,p.update(P),de=p.getVertexShaderID(P),xe=p.getFragmentShaderID(P);const ye=s.getRenderTarget(),we=q.isInstancedMesh===!0,Ue=q.isBatchedMesh===!0,be=!!P.map,lt=!!P.matcap,O=!!ce,bt=!!P.aoMap,vt=!!P.lightMap,Mt=!!P.bumpMap,Xe=!!P.normalMap,Ut=!!P.displacementMap,tt=!!P.emissiveMap,it=!!P.metalnessMap,F=!!P.roughnessMap,C=P.anisotropy>0,se=P.clearcoat>0,pe=P.dispersion>0,ve=P.iridescence>0,me=P.sheen>0,qe=P.transmission>0,Ne=C&&!!P.anisotropyMap,ke=se&&!!P.clearcoatMap,st=se&&!!P.clearcoatNormalMap,Me=se&&!!P.clearcoatRoughnessMap,De=ve&&!!P.iridescenceMap,ft=ve&&!!P.iridescenceThicknessMap,et=me&&!!P.sheenColorMap,Oe=me&&!!P.sheenRoughnessMap,rt=!!P.specularMap,at=!!P.specularColorMap,At=!!P.specularIntensityMap,W=qe&&!!P.transmissionMap,Te=qe&&!!P.thicknessMap,fe=!!P.gradientMap,he=!!P.alphaMap,Ce=P.alphaTest>0,Ze=!!P.alphaHash,ht=!!P.extensions;let Ot=_r;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Gt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Le,fragmentShader:J,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ue,batchingColor:Ue&&q._colorsTexture!==null,instancing:we,instancingColor:we&&q.instanceColor!==null,instancingMorph:we&&q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Sr,alphaToCoverage:!!P.alphaToCoverage,map:be,matcap:lt,envMap:O,envMapMode:O&&ce.mapping,envMapCubeUVHeight:B,aoMap:bt,lightMap:vt,bumpMap:Mt,normalMap:Xe,displacementMap:y&&Ut,emissiveMap:tt,normalMapObjectSpace:Xe&&P.normalMapType===ox,normalMapTangentSpace:Xe&&P.normalMapType===_g,metalnessMap:it,roughnessMap:F,anisotropy:C,anisotropyMap:Ne,clearcoat:se,clearcoatMap:ke,clearcoatNormalMap:st,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:De,iridescenceThicknessMap:ft,sheen:me,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:rt,specularColorMap:at,specularIntensityMap:At,transmission:qe,transmissionMap:W,thicknessMap:Te,gradientMap:fe,opaque:P.transparent===!1&&P.blending===zs&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:Ze,combine:P.combine,mapUv:be&&T(P.map.channel),aoMapUv:bt&&T(P.aoMap.channel),lightMapUv:vt&&T(P.lightMap.channel),bumpMapUv:Mt&&T(P.bumpMap.channel),normalMapUv:Xe&&T(P.normalMap.channel),displacementMapUv:Ut&&T(P.displacementMap.channel),emissiveMapUv:tt&&T(P.emissiveMap.channel),metalnessMapUv:it&&T(P.metalnessMap.channel),roughnessMapUv:F&&T(P.roughnessMap.channel),anisotropyMapUv:Ne&&T(P.anisotropyMap.channel),clearcoatMapUv:ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:st&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(P.sheenRoughnessMap.channel),specularMapUv:rt&&T(P.specularMap.channel),specularColorMapUv:at&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:W&&T(P.transmissionMap.channel),thicknessMapUv:Te&&T(P.thicknessMap.channel),alphaMapUv:he&&T(P.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Xe||C),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!le.attributes.uv&&(be||he),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:be&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===vi,flipSided:P.side===Nn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ht&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&P.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Gt.vertexUv1s=g.has(1),Gt.vertexUv2s=g.has(2),Gt.vertexUv3s=g.has(3),g.clear(),Gt}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)R.push(z),R.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(D(R,P),w(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function w(P,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.skinning&&u.enable(4),R.morphTargets&&u.enable(5),R.morphNormals&&u.enable(6),R.morphColors&&u.enable(7),R.premultipliedAlpha&&u.enable(8),R.shadowMapEnabled&&u.enable(9),R.doubleSided&&u.enable(10),R.flipSided&&u.enable(11),R.useDepthPacking&&u.enable(12),R.dithering&&u.enable(13),R.transmission&&u.enable(14),R.sheen&&u.enable(15),R.opaque&&u.enable(16),R.pointsUvs&&u.enable(17),R.decodeVideoTexture&&u.enable(18),R.alphaToCoverage&&u.enable(19),P.push(u.mask)}function b(P){const R=A[P.type];let z;if(R){const Y=gi[R];z=Ux.clone(Y.uniforms)}else z=P.uniforms;return z}function H(P,R){let z;for(let Y=0,q=_.length;Y<q;Y++){const ae=_[Y];if(ae.cacheKey===R){z=ae,++z.usedTimes;break}}return z===void 0&&(z=new $1(s,R,P,l),_.push(z)),z}function L(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function I(P){p.remove(P)}function j(){p.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:b,acquireProgram:H,releaseProgram:L,releaseShaderCache:I,programs:_,dispose:j}}function J1(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let u=s.get(d);return u===void 0&&(u={},s.set(d,u)),u}function r(d){s.delete(d)}function o(d,u,p){s.get(d)[u]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function eE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function d(S,y,M,A,T,x){let v=s[e];return v===void 0?(v={id:S.id,object:S,geometry:y,material:M,groupOrder:A,renderOrder:S.renderOrder,z:T,group:x},s[e]=v):(v.id=S.id,v.object=S,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=S.renderOrder,v.z=T,v.group=x),e++,v}function u(S,y,M,A,T,x){const v=d(S,y,M,A,T,x);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):n.push(v)}function p(S,y,M,A,T,x){const v=d(S,y,M,A,T,x);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):n.unshift(v)}function g(S,y){n.length>1&&n.sort(S||eE),r.length>1&&r.sort(y||Gm),o.length>1&&o.sort(y||Gm)}function _(){for(let S=e,y=s.length;S<y;S++){const M=s[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:u,unshift:p,finish:_,sort:g}}function tE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new Wm,s.set(r,[d])):o>=l.length?(d=new Wm,l.push(d)):d=l[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function nE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new pt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function iE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let rE=0;function sE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function aE(s){const e=new nE,n=iE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new Z);const o=new Z,l=new Ht,d=new Ht;function u(g){let _=0,S=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,A=0,T=0,x=0,v=0,D=0,w=0,b=0,H=0,L=0,I=0;g.sort(sE);for(let P=0,R=g.length;P<R;P++){const z=g[P],Y=z.color,q=z.intensity,ae=z.distance,le=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=Y.r*q,S+=Y.g*q,y+=Y.b*q;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],q);I++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,B=n.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=le,r.directionalShadowMatrix[M]=z.shadow.matrix,D++}r.directional[M]=oe,M++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(Y).multiplyScalar(q),oe.distance=ae,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[T]=oe;const ce=z.shadow;if(z.map&&(r.spotLightMap[H]=z.map,H++,ce.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[T]=ce.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=le,b++}T++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(Y).multiplyScalar(q),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=oe,x++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const ce=z.shadow,B=n.get(z);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[A]=B,r.pointShadowMap[A]=le,r.pointShadowMatrix[A]=z.shadow.matrix,w++}r.point[A]=oe,A++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(q),oe.groundColor.copy(z.groundColor).multiplyScalar(q),r.hemi[v]=oe,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==M||j.pointLength!==A||j.spotLength!==T||j.rectAreaLength!==x||j.hemiLength!==v||j.numDirectionalShadows!==D||j.numPointShadows!==w||j.numSpotShadows!==b||j.numSpotMaps!==H||j.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=x,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+H-L,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=I,j.directionalLength=M,j.pointLength=A,j.spotLength=T,j.rectAreaLength=x,j.hemiLength=v,j.numDirectionalShadows=D,j.numPointShadows=w,j.numSpotShadows=b,j.numSpotMaps=H,j.numLightProbes=I,r.version=rE++)}function p(g,_){let S=0,y=0,M=0,A=0,T=0;const x=_.matrixWorldInverse;for(let v=0,D=g.length;v<D;v++){const w=g[v];if(w.isDirectionalLight){const b=r.directional[S];b.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),S++}else if(w.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),M++}else if(w.isRectAreaLight){const b=r.rectArea[A];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),d.identity(),l.copy(w.matrixWorld),l.premultiply(x),d.extractRotation(l),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),A++}else if(w.isPointLight){const b=r.point[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),y++}else if(w.isHemisphereLight){const b=r.hemi[T];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(x),T++}}}return{setup:u,setupView:p,state:r}}function Xm(s){const e=new aE(s),n=[],r=[];function o(_){g.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function d(_){r.push(_)}function u(){e.setup(n)}function p(_){e.setupView(n,_)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:u,setupLightsView:p,pushLight:l,pushShadow:d}}function oE(s){let e=new WeakMap;function n(o,l=0){const d=e.get(o);let u;return d===void 0?(u=new Xm(s),e.set(o,[u])):l>=d.length?(u=new Xm(s),d.push(u)):u=d[l],u}function r(){e=new WeakMap}return{get:n,dispose:r}}class lE extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
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
}`;function fE(s,e,n){let r=new sf;const o=new mt,l=new mt,d=new It,u=new lE({depthPacking:ax}),p=new cE,g={},_=n.maxTextureSize,S={[xr]:Nn,[Nn]:xr,[vi]:vi},y=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:uE,fragmentShader:dE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new ci;A.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new qt(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag;let v=this.type;this.render=function(L,I,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(vr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=v!==Fi&&this.type===Fi,ae=v===Fi&&this.type!==Fi;for(let le=0,oe=L.length;le<oe;le++){const ce=L[le],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ue=B.getFrameExtents();if(o.multiply(ue),l.copy(B.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ue.x),o.x=l.x*ue.x,B.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ue.y),o.y=l.y*ue.y,B.mapSize.y=l.y)),B.map===null||q===!0||ae===!0){const k=this.type!==Fi?{minFilter:bn,magFilter:bn}:{};B.map!==null&&B.map.dispose(),B.map=new Zr(o.x,o.y,k),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const ie=B.getViewportCount();for(let k=0;k<ie;k++){const re=B.getViewport(k);d.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),Y.viewport(d),B.updateMatrices(ce,k),r=B.getFrustum(),b(I,j,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Fi&&D(B,j),B.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(P,R,z)};function D(L,I){const j=e.update(T);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zr(o.x,o.y)),y.uniforms.shadow_pass.value=L.map.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,j,y,T,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,j,M,T,null)}function w(L,I,j,P){let R=null;const z=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?p:u,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Y=R.uuid,q=I.uuid;let ae=g[Y];ae===void 0&&(ae={},g[Y]=ae);let le=ae[q];le===void 0&&(le=R.clone(),ae[q]=le,I.addEventListener("dispose",H)),R=le}if(R.visible=I.visible,R.wireframe=I.wireframe,P===Fi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:S[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=s.properties.get(R);Y.light=j}return R}function b(L,I,j,P,R){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Fi)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);const q=e.update(L),ae=L.material;if(Array.isArray(ae)){const le=q.groups;for(let oe=0,ce=le.length;oe<ce;oe++){const B=le[oe],ue=ae[B.materialIndex];if(ue&&ue.visible){const ie=w(L,ue,P,R);L.onBeforeShadow(s,L,I,j,q,ie,B),s.renderBufferDirect(j,null,q,ie,L,B),L.onAfterShadow(s,L,I,j,q,ie,B)}}}else if(ae.visible){const le=w(L,ae,P,R);L.onBeforeShadow(s,L,I,j,q,le,null),s.renderBufferDirect(j,null,q,le,L,null),L.onAfterShadow(s,L,I,j,q,le,null)}}const Y=L.children;for(let q=0,ae=Y.length;q<ae;q++)b(Y[q],I,j,P,R)}function H(L){L.target.removeEventListener("dispose",H);for(const j in g){const P=g[j],R=L.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function hE(s){function e(){let W=!1;const Te=new It;let fe=null;const he=new It(0,0,0,0);return{setMask:function(Ce){fe!==Ce&&!W&&(s.colorMask(Ce,Ce,Ce,Ce),fe=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,Ze,ht,Ot,Gt){Gt===!0&&(Ce*=Ot,Ze*=Ot,ht*=Ot),Te.set(Ce,Ze,ht,Ot),he.equals(Te)===!1&&(s.clearColor(Ce,Ze,ht,Ot),he.copy(Te))},reset:function(){W=!1,fe=null,he.set(-1,0,0,0)}}}function n(){let W=!1,Te=null,fe=null,he=null;return{setTest:function(Ce){Ce?xe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ce){Te!==Ce&&!W&&(s.depthMask(Ce),Te=Ce)},setFunc:function(Ce){if(fe!==Ce){switch(Ce){case V_:s.depthFunc(s.NEVER);break;case j_:s.depthFunc(s.ALWAYS);break;case G_:s.depthFunc(s.LESS);break;case Ol:s.depthFunc(s.LEQUAL);break;case W_:s.depthFunc(s.EQUAL);break;case X_:s.depthFunc(s.GEQUAL);break;case q_:s.depthFunc(s.GREATER);break;case $_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ce}},setLocked:function(Ce){W=Ce},setClear:function(Ce){he!==Ce&&(s.clearDepth(Ce),he=Ce)},reset:function(){W=!1,Te=null,fe=null,he=null}}}function r(){let W=!1,Te=null,fe=null,he=null,Ce=null,Ze=null,ht=null,Ot=null,Gt=null;return{setTest:function(_t){W||(_t?xe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(_t){Te!==_t&&!W&&(s.stencilMask(_t),Te=_t)},setFunc:function(_t,Pn,Ln){(fe!==_t||he!==Pn||Ce!==Ln)&&(s.stencilFunc(_t,Pn,Ln),fe=_t,he=Pn,Ce=Ln)},setOp:function(_t,Pn,Ln){(Ze!==_t||ht!==Pn||Ot!==Ln)&&(s.stencilOp(_t,Pn,Ln),Ze=_t,ht=Pn,Ot=Ln)},setLocked:function(_t){W=_t},setClear:function(_t){Gt!==_t&&(s.clearStencil(_t),Gt=_t)},reset:function(){W=!1,Te=null,fe=null,he=null,Ce=null,Ze=null,ht=null,Ot=null,Gt=null}}}const o=new e,l=new n,d=new r,u=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],M=null,A=!1,T=null,x=null,v=null,D=null,w=null,b=null,H=null,L=new pt(0,0,0),I=0,j=!1,P=null,R=null,z=null,Y=null,q=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,oe=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ce)[1]),le=oe>=1):ce.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),le=oe>=2);let B=null,ue={};const ie=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),re=new It().fromArray(ie),Le=new It().fromArray(k);function J(W,Te,fe,he){const Ce=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(W,Ze),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<fe;ht++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Te+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ze}const de={};de[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),l.setFunc(Ol),Mt(!1),Xe(Qp),xe(s.CULL_FACE),bt(vr);function xe(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function ye(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function we(W,Te){return _[W]!==Te?(s.bindFramebuffer(W,Te),_[W]=Te,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Te),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ue(W,Te){let fe=y,he=!1;if(W){fe=S.get(Te),fe===void 0&&(fe=[],S.set(Te,fe));const Ce=W.textures;if(fe.length!==Ce.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,ht=Ce.length;Ze<ht;Ze++)fe[Ze]=s.COLOR_ATTACHMENT0+Ze;fe.length=Ce.length,he=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,he=!0);he&&s.drawBuffers(fe)}function be(W){return M!==W?(s.useProgram(W),M=W,!0):!1}const lt={[Xr]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[A_]:s.FUNC_REVERSE_SUBTRACT};lt[C_]=s.MIN,lt[R_]=s.MAX;const O={[b_]:s.ZERO,[N_]:s.ONE,[P_]:s.SRC_COLOR,[hd]:s.SRC_ALPHA,[k_]:s.SRC_ALPHA_SATURATE,[U_]:s.DST_COLOR,[D_]:s.DST_ALPHA,[L_]:s.ONE_MINUS_SRC_COLOR,[pd]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[I_]:s.ONE_MINUS_DST_ALPHA,[O_]:s.CONSTANT_COLOR,[B_]:s.ONE_MINUS_CONSTANT_COLOR,[z_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(W,Te,fe,he,Ce,Ze,ht,Ot,Gt,_t){if(W===vr){A===!0&&(ye(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),W!==w_){if(W!==T||_t!==j){if((x!==Xr||w!==Xr)&&(s.blendEquation(s.FUNC_ADD),x=Xr,w=Xr),_t)switch(W){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}v=null,D=null,b=null,H=null,L.set(0,0,0),I=0,T=W,j=_t}return}Ce=Ce||Te,Ze=Ze||fe,ht=ht||he,(Te!==x||Ce!==w)&&(s.blendEquationSeparate(lt[Te],lt[Ce]),x=Te,w=Ce),(fe!==v||he!==D||Ze!==b||ht!==H)&&(s.blendFuncSeparate(O[fe],O[he],O[Ze],O[ht]),v=fe,D=he,b=Ze,H=ht),(Ot.equals(L)===!1||Gt!==I)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Gt),L.copy(Ot),I=Gt),T=W,j=!1}function vt(W,Te){W.side===vi?ye(s.CULL_FACE):xe(s.CULL_FACE);let fe=W.side===Nn;Te&&(fe=!fe),Mt(fe),W.blending===zs&&W.transparent===!1?bt(vr):bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),o.setMask(W.colorWrite);const he=W.stencilWrite;d.setTest(he),he&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),tt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(W){P!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),P=W)}function Xe(W){W!==S_?(xe(s.CULL_FACE),W!==R&&(W===Qp?s.cullFace(s.BACK):W===M_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),R=W}function Ut(W){W!==z&&(le&&s.lineWidth(W),z=W)}function tt(W,Te,fe){W?(xe(s.POLYGON_OFFSET_FILL),(Y!==Te||q!==fe)&&(s.polygonOffset(Te,fe),Y=Te,q=fe)):ye(s.POLYGON_OFFSET_FILL)}function it(W){W?xe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function F(W){W===void 0&&(W=s.TEXTURE0+ae-1),B!==W&&(s.activeTexture(W),B=W)}function C(W,Te,fe){fe===void 0&&(B===null?fe=s.TEXTURE0+ae-1:fe=B);let he=ue[fe];he===void 0&&(he={type:void 0,texture:void 0},ue[fe]=he),(he.type!==W||he.texture!==Te)&&(B!==fe&&(s.activeTexture(fe),B=fe),s.bindTexture(W,Te||de[W]),he.type=W,he.texture=Te)}function se(){const W=ue[B];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){re.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),re.copy(W))}function Oe(W){Le.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Le.copy(W))}function rt(W,Te){let fe=p.get(Te);fe===void 0&&(fe=new WeakMap,p.set(Te,fe));let he=fe.get(W);he===void 0&&(he=s.getUniformBlockIndex(Te,W.name),fe.set(W,he))}function at(W,Te){const he=p.get(Te).get(W);u.get(Te)!==he&&(s.uniformBlockBinding(Te,he,W.__bindingPointIndex),u.set(Te,he))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},B=null,ue={},_={},S=new WeakMap,y=[],M=null,A=!1,T=null,x=null,v=null,D=null,w=null,b=null,H=null,L=new pt(0,0,0),I=0,j=!1,P=null,R=null,z=null,Y=null,q=null,re.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),d.reset()}return{buffers:{color:o,depth:l,stencil:d},enable:xe,disable:ye,bindFramebuffer:we,drawBuffers:Ue,useProgram:be,setBlending:bt,setMaterial:vt,setFlipSided:Mt,setCullFace:Xe,setLineWidth:Ut,setPolygonOffset:tt,setScissorTest:it,activeTexture:F,bindTexture:C,unbindTexture:se,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:De,texImage3D:ft,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:st,texStorage3D:Me,texSubImage2D:me,texSubImage3D:qe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:ke,scissor:et,viewport:Oe,reset:At}}function qm(s,e,n,r){const o=pE(r);switch(n){case dg:return s*e;case hg:return s*e;case pg:return s*e*2;case mg:return s*e/o.components*o.byteLength;case ef:return s*e/o.components*o.byteLength;case gg:return s*e*2/o.components*o.byteLength;case tf:return s*e*2/o.components*o.byteLength;case fg:return s*e*3/o.components*o.byteLength;case oi:return s*e*4/o.components*o.byteLength;case nf:return s*e*4/o.components*o.byteLength;case Nl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(s,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(s,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case zd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vg:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jd:case Gd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pE(s){switch(s){case Bi:case lg:return{byteLength:1,components:1};case ja:case cg:case Ga:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Kr:case Zd:case ki:return{byteLength:4,components:1};case ug:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function mE(s,e,n,r,o,l,d){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new mt,_=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(F,C){return M?new OffscreenCanvas(F,C):jl("canvas")}function T(F,C,se){let pe=1;const ve=it(F);if((ve.width>se||ve.height>se)&&(pe=se/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const me=Math.floor(pe*ve.width),qe=Math.floor(pe*ve.height);S===void 0&&(S=A(me,qe));const Ne=C?A(me,qe):S;return Ne.width=me,Ne.height=qe,Ne.getContext("2d").drawImage(F,0,0,me,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+me+"x"+qe+")."),Ne}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),F;return F}function x(F){return F.generateMipmaps&&F.minFilter!==bn&&F.minFilter!==ai}function v(F){s.generateMipmap(F)}function D(F,C,se,pe,ve=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let me=C;if(C===s.RED&&(se===s.FLOAT&&(me=s.R32F),se===s.HALF_FLOAT&&(me=s.R16F),se===s.UNSIGNED_BYTE&&(me=s.R8)),C===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(me=s.R8UI),se===s.UNSIGNED_SHORT&&(me=s.R16UI),se===s.UNSIGNED_INT&&(me=s.R32UI),se===s.BYTE&&(me=s.R8I),se===s.SHORT&&(me=s.R16I),se===s.INT&&(me=s.R32I)),C===s.RG&&(se===s.FLOAT&&(me=s.RG32F),se===s.HALF_FLOAT&&(me=s.RG16F),se===s.UNSIGNED_BYTE&&(me=s.RG8)),C===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(me=s.RG8UI),se===s.UNSIGNED_SHORT&&(me=s.RG16UI),se===s.UNSIGNED_INT&&(me=s.RG32UI),se===s.BYTE&&(me=s.RG8I),se===s.SHORT&&(me=s.RG16I),se===s.INT&&(me=s.RG32I)),C===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),C===s.RGBA){const qe=ve?Bl:Et.getTransfer(pe);se===s.FLOAT&&(me=s.RGBA32F),se===s.HALF_FLOAT&&(me=s.RGBA16F),se===s.UNSIGNED_BYTE&&(me=qe===Dt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function w(F,C){let se;return F?C===null||C===Kr||C===Ws?se=s.DEPTH24_STENCIL8:C===ki?se=s.DEPTH32F_STENCIL8:C===ja&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Kr||C===Ws?se=s.DEPTH_COMPONENT24:C===ki?se=s.DEPTH_COMPONENT32F:C===ja&&(se=s.DEPTH_COMPONENT16),se}function b(F,C){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==bn&&F.minFilter!==ai?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function H(F){const C=F.target;C.removeEventListener("dispose",H),I(C),C.isVideoTexture&&_.delete(C)}function L(F){const C=F.target;C.removeEventListener("dispose",L),P(C)}function I(F){const C=r.get(F);if(C.__webglInit===void 0)return;const se=F.source,pe=y.get(se);if(pe){const ve=pe[C.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&j(F),Object.keys(pe).length===0&&y.delete(se)}r.remove(F)}function j(F){const C=r.get(F);s.deleteTexture(C.__webglTexture);const se=F.source,pe=y.get(se);delete pe[C.__cacheKey],d.memory.textures--}function P(F){const C=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(C.__webglFramebuffer[pe]))for(let ve=0;ve<C.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(C.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(C.__webglFramebuffer[pe]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[pe])}else{if(Array.isArray(C.__webglFramebuffer))for(let pe=0;pe<C.__webglFramebuffer.length;pe++)s.deleteFramebuffer(C.__webglFramebuffer[pe]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let pe=0;pe<C.__webglColorRenderbuffer.length;pe++)C.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[pe]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const se=F.textures;for(let pe=0,ve=se.length;pe<ve;pe++){const me=r.get(se[pe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),d.memory.textures--),r.remove(se[pe])}r.remove(F)}let R=0;function z(){R=0}function Y(){const F=R;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),R+=1,F}function q(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function ae(F,C){const se=r.get(F);if(F.isVideoTexture&&Ut(F),F.isRenderTargetTexture===!1&&F.version>0&&se.__version!==F.version){const pe=F.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(se,F,C);return}}n.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+C)}function le(F,C){const se=r.get(F);if(F.version>0&&se.__version!==F.version){Le(se,F,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+C)}function oe(F,C){const se=r.get(F);if(F.version>0&&se.__version!==F.version){Le(se,F,C);return}n.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+C)}function ce(F,C){const se=r.get(F);if(F.version>0&&se.__version!==F.version){J(se,F,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+C)}const B={[vd]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[_d]:s.MIRRORED_REPEAT},ue={[bn]:s.NEAREST,[rx]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},ie={[lx]:s.NEVER,[px]:s.ALWAYS,[cx]:s.LESS,[xg]:s.LEQUAL,[ux]:s.EQUAL,[hx]:s.GEQUAL,[dx]:s.GREATER,[fx]:s.NOTEQUAL};function k(F,C){if(C.type===ki&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ai||C.magFilter===Iu||C.magFilter===rl||C.magFilter===Yr||C.minFilter===ai||C.minFilter===Iu||C.minFilter===rl||C.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,B[C.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,B[C.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,B[C.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,ue[C.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,ue[C.minFilter]),C.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,ie[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===bn||C.minFilter!==rl&&C.minFilter!==Yr||C.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function re(F,C){let se=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",H));const pe=C.source;let ve=y.get(pe);ve===void 0&&(ve={},y.set(pe,ve));const me=q(C);if(me!==F.__cacheKey){ve[me]===void 0&&(ve[me]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,se=!0),ve[me].usedTimes++;const qe=ve[F.__cacheKey];qe!==void 0&&(ve[F.__cacheKey].usedTimes--,qe.usedTimes===0&&j(C)),F.__cacheKey=me,F.__webglTexture=ve[me].texture}return se}function Le(F,C,se){let pe=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=re(F,C),me=C.source;n.bindTexture(pe,F.__webglTexture,s.TEXTURE0+se);const qe=r.get(me);if(me.version!==qe.__version||ve===!0){n.activeTexture(s.TEXTURE0+se);const Ne=Et.getPrimaries(Et.workingColorSpace),ke=C.colorSpace===gr?null:Et.getPrimaries(C.colorSpace),st=C.colorSpace===gr||Ne===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Me=T(C.image,!1,o.maxTextureSize);Me=tt(C,Me);const De=l.convert(C.format,C.colorSpace),ft=l.convert(C.type);let et=D(C.internalFormat,De,ft,C.colorSpace,C.isVideoTexture);k(pe,C);let Oe;const rt=C.mipmaps,at=C.isVideoTexture!==!0,At=qe.__version===void 0||ve===!0,W=me.dataReady,Te=b(C,Me);if(C.isDepthTexture)et=w(C.format===Xs,C.type),At&&(at?n.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,De,ft,null));else if(C.isDataTexture)if(rt.length>0){at&&At&&n.texStorage2D(s.TEXTURE_2D,Te,et,rt[0].width,rt[0].height);for(let fe=0,he=rt.length;fe<he;fe++)Oe=rt[fe],at?W&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,De,ft,Oe.data):n.texImage2D(s.TEXTURE_2D,fe,et,Oe.width,Oe.height,0,De,ft,Oe.data);C.generateMipmaps=!1}else at?(At&&n.texStorage2D(s.TEXTURE_2D,Te,et,Me.width,Me.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,De,ft,Me.data)):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,De,ft,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){at&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,et,rt[0].width,rt[0].height,Me.depth);for(let fe=0,he=rt.length;fe<he;fe++)if(Oe=rt[fe],C.format!==oi)if(De!==null)if(at){if(W)if(C.layerUpdates.size>0){const Ce=qm(Oe.width,Oe.height,C.format,C.type);for(const Ze of C.layerUpdates){const ht=Oe.data.subarray(Ze*Ce/Oe.data.BYTES_PER_ELEMENT,(Ze+1)*Ce/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ze,Oe.width,Oe.height,1,De,ht,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Oe.width,Oe.height,Me.depth,De,Oe.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,et,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Oe.width,Oe.height,Me.depth,De,ft,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,et,Oe.width,Oe.height,Me.depth,0,De,ft,Oe.data)}else{at&&At&&n.texStorage2D(s.TEXTURE_2D,Te,et,rt[0].width,rt[0].height);for(let fe=0,he=rt.length;fe<he;fe++)Oe=rt[fe],C.format!==oi?De!==null?at?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,De,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?W&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Oe.width,Oe.height,De,ft,Oe.data):n.texImage2D(s.TEXTURE_2D,fe,et,Oe.width,Oe.height,0,De,ft,Oe.data)}else if(C.isDataArrayTexture)if(at){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,et,Me.width,Me.height,Me.depth),W)if(C.layerUpdates.size>0){const fe=qm(Me.width,Me.height,C.format,C.type);for(const he of C.layerUpdates){const Ce=Me.data.subarray(he*fe/Me.data.BYTES_PER_ELEMENT,(he+1)*fe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,De,ft,Ce)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,ft,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,De,ft,Me.data);else if(C.isData3DTexture)at?(At&&n.texStorage3D(s.TEXTURE_3D,Te,et,Me.width,Me.height,Me.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,ft,Me.data)):n.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,De,ft,Me.data);else if(C.isFramebufferTexture){if(At)if(at)n.texStorage2D(s.TEXTURE_2D,Te,et,Me.width,Me.height);else{let fe=Me.width,he=Me.height;for(let Ce=0;Ce<Te;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,et,fe,he,0,De,ft,null),fe>>=1,he>>=1}}else if(rt.length>0){if(at&&At){const fe=it(rt[0]);n.texStorage2D(s.TEXTURE_2D,Te,et,fe.width,fe.height)}for(let fe=0,he=rt.length;fe<he;fe++)Oe=rt[fe],at?W&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,De,ft,Oe):n.texImage2D(s.TEXTURE_2D,fe,et,De,ft,Oe);C.generateMipmaps=!1}else if(at){if(At){const fe=it(Me);n.texStorage2D(s.TEXTURE_2D,Te,et,fe.width,fe.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,ft,Me)}else n.texImage2D(s.TEXTURE_2D,0,et,De,ft,Me);x(C)&&v(pe),qe.__version=me.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function J(F,C,se){if(C.image.length!==6)return;const pe=re(F,C),ve=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+se);const me=r.get(ve);if(ve.version!==me.__version||pe===!0){n.activeTexture(s.TEXTURE0+se);const qe=Et.getPrimaries(Et.workingColorSpace),Ne=C.colorSpace===gr?null:Et.getPrimaries(C.colorSpace),ke=C.colorSpace===gr||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const st=C.isCompressedTexture||C.image[0].isCompressedTexture,Me=C.image[0]&&C.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!st&&!Me?De[he]=T(C.image[he],!0,o.maxCubemapSize):De[he]=Me?C.image[he].image:C.image[he],De[he]=tt(C,De[he]);const ft=De[0],et=l.convert(C.format,C.colorSpace),Oe=l.convert(C.type),rt=D(C.internalFormat,et,Oe,C.colorSpace),at=C.isVideoTexture!==!0,At=me.__version===void 0||pe===!0,W=ve.dataReady;let Te=b(C,ft);k(s.TEXTURE_CUBE_MAP,C);let fe;if(st){at&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Te,rt,ft.width,ft.height);for(let he=0;he<6;he++){fe=De[he].mipmaps;for(let Ce=0;Ce<fe.length;Ce++){const Ze=fe[Ce];C.format!==oi?et!==null?at?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ze.width,Ze.height,et,Ze.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,rt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Ze.width,Ze.height,et,Oe,Ze.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,rt,Ze.width,Ze.height,0,et,Oe,Ze.data)}}}else{if(fe=C.mipmaps,at&&At){fe.length>0&&Te++;const he=it(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Te,rt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){at?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,et,Oe,De[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,De[he].width,De[he].height,0,et,Oe,De[he].data);for(let Ce=0;Ce<fe.length;Ce++){const ht=fe[Ce].image[he].image;at?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,ht.width,ht.height,et,Oe,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,rt,ht.width,ht.height,0,et,Oe,ht.data)}}else{at?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,Oe,De[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,et,Oe,De[he]);for(let Ce=0;Ce<fe.length;Ce++){const Ze=fe[Ce];at?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,et,Oe,Ze.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,rt,et,Oe,Ze.image[he])}}}x(C)&&v(s.TEXTURE_CUBE_MAP),me.__version=ve.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function de(F,C,se,pe,ve,me){const qe=l.convert(se.format,se.colorSpace),Ne=l.convert(se.type),ke=D(se.internalFormat,qe,Ne,se.colorSpace);if(!r.get(C).__hasExternalTextures){const Me=Math.max(1,C.width>>me),De=Math.max(1,C.height>>me);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,me,ke,Me,De,C.depth,0,qe,Ne,null):n.texImage2D(ve,me,ke,Me,De,0,qe,Ne,null)}n.bindFramebuffer(s.FRAMEBUFFER,F),Xe(C)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,r.get(se).__webglTexture,0,Mt(C)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,r.get(se).__webglTexture,me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(F,C,se){if(s.bindRenderbuffer(s.RENDERBUFFER,F),C.depthBuffer){const pe=C.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,me=w(C.stencilBuffer,ve),qe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Mt(C);Xe(C)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,me,C.width,C.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,me,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,F)}else{const pe=C.textures;for(let ve=0;ve<pe.length;ve++){const me=pe[ve],qe=l.convert(me.format,me.colorSpace),Ne=l.convert(me.type),ke=D(me.internalFormat,qe,Ne,me.colorSpace),st=Mt(C);se&&Xe(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,ke,C.width,C.height):Xe(C)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,ke,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ke,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ae(C.depthTexture,0);const pe=r.get(C.depthTexture).__webglTexture,ve=Mt(C);if(C.depthTexture.format===Hs)Xe(C)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(C.depthTexture.format===Xs)Xe(C)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function we(F){const C=r.get(F),se=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const pe=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),pe){const ve=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),C.__depthDisposeCallback=ve}C.__boundDepthTexture=pe}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ye(C.__webglFramebuffer,F)}else if(se){C.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[pe]),C.__webglDepthbuffer[pe]===void 0)C.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(C.__webglDepthbuffer[pe],F,!1);else{const ve=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=C.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,me)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),xe(C.__webglDepthbuffer,F,!1);else{const pe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(F,C,se){const pe=r.get(F);C!==void 0&&de(pe.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&we(F)}function be(F){const C=F.texture,se=r.get(F),pe=r.get(C);F.addEventListener("dispose",L);const ve=F.textures,me=F.isWebGLCubeRenderTarget===!0,qe=ve.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=C.version,d.memory.textures++),me){se.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer[Ne]=[];for(let ke=0;ke<C.mipmaps.length;ke++)se.__webglFramebuffer[Ne][ke]=s.createFramebuffer()}else se.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)se.__webglFramebuffer[Ne]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ne=0,ke=ve.length;Ne<ke;Ne++){const st=r.get(ve[Ne]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),d.memory.textures++)}if(F.samples>0&&Xe(F)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ve.length;Ne++){const ke=ve[Ne];se.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Ne]);const st=l.convert(ke.format,ke.colorSpace),Me=l.convert(ke.type),De=D(ke.internalFormat,st,Me,ke.colorSpace,F.isXRRenderTarget===!0),ft=Mt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,De,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(se.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),k(s.TEXTURE_CUBE_MAP,C);for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0)for(let ke=0;ke<C.mipmaps.length;ke++)de(se.__webglFramebuffer[Ne][ke],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ke);else de(se.__webglFramebuffer[Ne],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);x(C)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ne=0,ke=ve.length;Ne<ke;Ne++){const st=ve[Ne],Me=r.get(st);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),k(s.TEXTURE_2D,st),de(se.__webglFramebuffer,F,st,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),x(st)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,pe.__webglTexture),k(Ne,C),C.mipmaps&&C.mipmaps.length>0)for(let ke=0;ke<C.mipmaps.length;ke++)de(se.__webglFramebuffer[ke],F,C,s.COLOR_ATTACHMENT0,Ne,ke);else de(se.__webglFramebuffer,F,C,s.COLOR_ATTACHMENT0,Ne,0);x(C)&&v(Ne),n.unbindTexture()}F.depthBuffer&&we(F)}function lt(F){const C=F.textures;for(let se=0,pe=C.length;se<pe;se++){const ve=C[se];if(x(ve)){const me=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,qe=r.get(ve).__webglTexture;n.bindTexture(me,qe),v(me),n.unbindTexture()}}}const O=[],bt=[];function vt(F){if(F.samples>0){if(Xe(F)===!1){const C=F.textures,se=F.width,pe=F.height;let ve=s.COLOR_BUFFER_BIT;const me=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(F),Ne=C.length>1;if(Ne)for(let ke=0;ke<C.length;ke++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<C.length;ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const st=r.get(C[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,se,pe,0,0,se,pe,ve,s.NEAREST),p===!0&&(O.length=0,bt.length=0,O.push(s.COLOR_ATTACHMENT0+ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&(O.push(me),bt.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let ke=0;ke<C.length;ke++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const st=r.get(C[ke]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,st,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const C=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Mt(F){return Math.min(o.maxSamples,F.samples)}function Xe(F){const C=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ut(F){const C=d.render.frame;_.get(F)!==C&&(_.set(F,C),F.update())}function tt(F,C){const se=F.colorSpace,pe=F.format,ve=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||se!==Sr&&se!==gr&&(Et.getTransfer(se)===Dt?(pe!==oi||ve!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),C}function it(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(g.width=F.naturalWidth||F.width,g.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(g.width=F.displayWidth,g.height=F.displayHeight):(g.width=F.width,g.height=F.height),g}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.setTexture2D=ae,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=ce,this.rebindTextures=Ue,this.setupRenderTarget=be,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Xe}function gE(s,e){function n(r,o=gr){let l;const d=Et.getTransfer(o);if(r===Bi)return s.UNSIGNED_BYTE;if(r===Qd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ug)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===lg)return s.BYTE;if(r===cg)return s.SHORT;if(r===ja)return s.UNSIGNED_SHORT;if(r===Zd)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Ga)return s.HALF_FLOAT;if(r===dg)return s.ALPHA;if(r===fg)return s.RGB;if(r===oi)return s.RGBA;if(r===hg)return s.LUMINANCE;if(r===pg)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===mg)return s.RED;if(r===ef)return s.RED_INTEGER;if(r===gg)return s.RG;if(r===tf)return s.RG_INTEGER;if(r===nf)return s.RGBA_INTEGER;if(r===Nl||r===Pl||r===Ll||r===Dl)if(d===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Nl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Nl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xd||r===yd||r===Sd||r===Md)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===xd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed||r===wd||r===Td)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ed||r===wd)return d===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Td)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ad||r===Cd||r===Rd||r===bd||r===Nd||r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===kd||r===Od||r===Bd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ad)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Id)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bd)return d===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===zd||r===Hd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Il)return d===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vg||r===Vd||r===jd||r===Gd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Il)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Vd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class vE extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bs extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,d=null;const u=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,r),v=this._getHandJoint(g,T);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=g.joints["index-finger-tip"],S=g.joints["thumb-tip"],y=_.position.distanceTo(S.position),M=.02,A=.005;g.inputState.pinching&&y>M+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return u!==null&&(u.visible=o!==null),p!==null&&(p.visible=l!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
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

}`;class SE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new vn,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:xE,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qt(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends $s{constructor(e,n){super();const r=this;let o=null,l=1,d=null,u="local-floor",p=1,g=null,_=null,S=null,y=null,M=null,A=null;const T=new SE,x=n.getContextAttributes();let v=null,D=null;const w=[],b=[],H=new mt;let L=null;const I=new Rn;I.layers.enable(1),I.viewport=new It;const j=new Rn;j.layers.enable(2),j.viewport=new It;const P=[I,j],R=new vE;R.layers.enable(1),R.layers.enable(2);let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=w[J];return de===void 0&&(de=new od,w[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=w[J];return de===void 0&&(de=new od,w[J]=de),de.getGripSpace()},this.getHand=function(J){let de=w[J];return de===void 0&&(de=new od,w[J]=de),de.getHandSpace()};function q(J){const de=b.indexOf(J.inputSource);if(de===-1)return;const xe=w[de];xe!==void 0&&(xe.update(J.inputSource,J.frame,g||d),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function ae(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",le);for(let J=0;J<w.length;J++){const de=b[J];de!==null&&(b[J]=null,w[J].disconnect(de))}z=null,Y=null,T.reset(),e.setRenderTarget(v),M=null,y=null,S=null,o=null,D=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(J){g=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",le),x.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(H),o.renderState.layers===void 0){const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,de),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Zr(M.framebufferWidth,M.framebufferHeight,{format:oi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let de=null,xe=null,ye=null;x.depth&&(ye=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=x.stencil?Xs:Hs,xe=x.stencil?Ws:Kr);const we={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:l};S=new XRWebGLBinding(o,n),y=S.createProjectionLayer(we),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Zr(y.textureWidth,y.textureHeight,{format:oi,type:Bi,depthTexture:new Dg(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),g=null,d=await o.requestReferenceSpace(u),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function le(J){for(let de=0;de<J.removed.length;de++){const xe=J.removed[de],ye=b.indexOf(xe);ye>=0&&(b[ye]=null,w[ye].disconnect(xe))}for(let de=0;de<J.added.length;de++){const xe=J.added[de];let ye=b.indexOf(xe);if(ye===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=b.length){b.push(xe),ye=Ue;break}else if(b[Ue]===null){b[Ue]=xe,ye=Ue;break}if(ye===-1)break}const we=w[ye];we&&we.connect(xe)}}const oe=new Z,ce=new Z;function B(J,de,xe){oe.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(xe.matrixWorld);const ye=oe.distanceTo(ce),we=de.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,be=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),O=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],vt=(we[8]-1)/we[0],Mt=(Ue[8]+1)/Ue[0],Xe=be*vt,Ut=be*Mt,tt=ye/(-vt+Mt),it=tt*-vt;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(it),J.translateZ(tt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const F=be+tt,C=lt+tt,se=Xe-it,pe=Ut+(ye-it),ve=O*lt/C*F,me=bt*lt/C*F;J.projectionMatrix.makePerspective(se,pe,ve,me,F,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let de=J.near,xe=J.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(xe=T.depthFar)),R.near=j.near=I.near=de,R.far=j.far=I.far=xe,(z!==R.near||Y!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,Y=R.far);const ye=J.parent,we=R.cameras;ue(R,ye);for(let Ue=0;Ue<we.length;Ue++)ue(we[Ue],ye);we.length===2?B(R,I,j):R.projectionMatrix.copy(I.projectionMatrix),ie(J,R,ye)};function ie(J,de,xe){xe===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(J){p=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let k=null;function re(J,de){if(_=de.getViewerPose(g||d),A=de,_!==null){const xe=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let ye=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Ue=0;Ue<xe.length;Ue++){const be=xe[Ue];let lt=null;if(M!==null)lt=M.getViewport(be);else{const bt=S.getViewSubImage(y,be);lt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(D,bt.colorTexture,y.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(D))}let O=P[Ue];O===void 0&&(O=new Rn,O.layers.enable(Ue),O.viewport=new It,P[Ue]=O),O.matrix.fromArray(be.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(be.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(lt.x,lt.y,lt.width,lt.height),Ue===0&&(R.matrix.copy(O.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(O)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=S.getDepthInformation(xe[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,o.renderState)}}for(let xe=0;xe<w.length;xe++){const ye=b[xe],we=w[xe];ye!==null&&we!==void 0&&we.update(ye,de,g||d)}k&&k(J,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),A=null}const Le=new Pg;Le.setAnimationLoop(re),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const Vr=new xi,EE=new Ht;function wE(s,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Rg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,D,w,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),S(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),A(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),T(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(d(x,v),v.isLineDashedMaterial&&u(x,v)):v.isPointsMaterial?p(x,v,D,w):v.isSpriteMaterial?g(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Nn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Nn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const D=e.get(v),w=D.envMap,b=D.envMapRotation;w&&(x.envMap.value=w,Vr.copy(b),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),x.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Vr)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function u(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,D,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*D,x.scale.value=w*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,D){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function T(x,v){const D=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function TE(s,e,n,r){let o={},l={},d=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,w){const b=w.program;r.uniformBlockBinding(D,b)}function g(D,w){let b=o[D.id];b===void 0&&(A(D),b=_(D),o[D.id]=b,D.addEventListener("dispose",x));const H=w.program;r.updateUBOMapping(D,H);const L=e.render.frame;l[D.id]!==L&&(y(D),l[D.id]=L)}function _(D){const w=S();D.__bindingPointIndex=w;const b=s.createBuffer(),H=D.__size,L=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,H,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function S(){for(let D=0;D<u;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const w=o[D.id],b=D.uniforms,H=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let L=0,I=b.length;L<I;L++){const j=Array.isArray(b[L])?b[L]:[b[L]];for(let P=0,R=j.length;P<R;P++){const z=j[P];if(M(z,L,P,H)===!0){const Y=z.__offset,q=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let le=0;le<q.length;le++){const oe=q[le],ce=T(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,Y+ae,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,ae),ae+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,w,b,H){const L=D.value,I=w+"_"+b;if(H[I]===void 0)return typeof L=="number"||typeof L=="boolean"?H[I]=L:H[I]=L.clone(),!0;{const j=H[I];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return H[I]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function A(D){const w=D.uniforms;let b=0;const H=16;for(let I=0,j=w.length;I<j;I++){const P=Array.isArray(w[I])?w[I]:[w[I]];for(let R=0,z=P.length;R<z;R++){const Y=P[R],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let ae=0,le=q.length;ae<le;ae++){const oe=q[ae],ce=T(oe),B=b%H,ue=B%ce.boundary,ie=B+ue;b+=ue,ie!==0&&H-ie<ce.storage&&(b+=H-ie),Y.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=ce.storage}}}const L=b%H;return L>0&&(b+=H-L),D.__size=b,D.__cache={},this}function T(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),w}function x(D){const w=D.target;w.removeEventListener("dispose",x);const b=d.indexOf(w.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function v(){for(const D in o)s.deleteBuffer(o[D]);d=[],o={},l={}}return{bind:p,update:g,dispose:v}}class Og{constructor(e={}){const{canvas:n=gx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:u=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const M=new Uint32Array(4),A=new Int32Array(4);let T=null,x=null;const v=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=_r,this.toneMappingExposure=1;const w=this;let b=!1,H=0,L=0,I=null,j=-1,P=null;const R=new It,z=new It;let Y=null;const q=new pt(0);let ae=0,le=n.width,oe=n.height,ce=1,B=null,ue=null;const ie=new It(0,0,le,oe),k=new It(0,0,le,oe);let re=!1;const Le=new sf;let J=!1,de=!1;const xe=new Ht,ye=new Z,we=new It,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function lt(){return I===null?ce:1}let O=r;function bt(N,X){return n.getContext(N,X)}try{const N={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",Ce,!1),O===null){const X="webgl2";if(O=bt(X,N),O===null)throw bt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let vt,Mt,Xe,Ut,tt,it,F,C,se,pe,ve,me,qe,Ne,ke,st,Me,De,ft,et,Oe,rt,at,At;function W(){vt=new LM(O),vt.init(),rt=new gE(O,vt),Mt=new AM(O,vt,e,rt),Xe=new hE(O),Ut=new UM(O),tt=new J1,it=new mE(O,vt,Xe,tt,Mt,rt,Ut),F=new RM(w),C=new PM(w),se=new Vx(O),at=new wM(O,se),pe=new DM(O,se,Ut,at),ve=new kM(O,pe,se,Ut),ft=new FM(O,Mt,it),st=new CM(tt),me=new Q1(w,F,C,vt,Mt,at,st),qe=new wE(w,tt),Ne=new tE,ke=new oE(vt),De=new EM(w,F,C,Xe,ve,y,p),Me=new fE(w,ve,Mt),At=new TE(O,Ut,Mt,Xe),et=new TM(O,vt,Ut),Oe=new IM(O,vt,Ut),Ut.programs=me.programs,w.capabilities=Mt,w.extensions=vt,w.properties=tt,w.renderLists=Ne,w.shadowMap=Me,w.state=Xe,w.info=Ut}W();const Te=new ME(w,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const N=vt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=vt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(N){N!==void 0&&(ce=N,this.setSize(le,oe,!1))},this.getSize=function(N){return N.set(le,oe)},this.setSize=function(N,X,ee=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=N,oe=X,n.width=Math.floor(N*ce),n.height=Math.floor(X*ce),ee===!0&&(n.style.width=N+"px",n.style.height=X+"px"),this.setViewport(0,0,N,X)},this.getDrawingBufferSize=function(N){return N.set(le*ce,oe*ce).floor()},this.setDrawingBufferSize=function(N,X,ee){le=N,oe=X,ce=ee,n.width=Math.floor(N*ee),n.height=Math.floor(X*ee),this.setViewport(0,0,N,X)},this.getCurrentViewport=function(N){return N.copy(R)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,X,ee,te){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,X,ee,te),Xe.viewport(R.copy(ie).multiplyScalar(ce).round())},this.getScissor=function(N){return N.copy(k)},this.setScissor=function(N,X,ee,te){N.isVector4?k.set(N.x,N.y,N.z,N.w):k.set(N,X,ee,te),Xe.scissor(z.copy(k).multiplyScalar(ce).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(N){Xe.setScissorTest(re=N)},this.setOpaqueSort=function(N){B=N},this.setTransparentSort=function(N){ue=N},this.getClearColor=function(N){return N.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(N=!0,X=!0,ee=!0){let te=0;if(N){let $=!1;if(I!==null){const Ae=I.texture.format;$=Ae===nf||Ae===tf||Ae===ef}if($){const Ae=I.texture.type,Ie=Ae===Bi||Ae===Kr||Ae===ja||Ae===Ws||Ae===Qd||Ae===Jd,He=De.getClearColor(),Re=De.getClearAlpha(),Je=He.r,Qe=He.g,Ge=He.b;Ie?(M[0]=Je,M[1]=Qe,M[2]=Ge,M[3]=Re,O.clearBufferuiv(O.COLOR,0,M)):(A[0]=Je,A[1]=Qe,A[2]=Ge,A[3]=Re,O.clearBufferiv(O.COLOR,0,A))}else te|=O.COLOR_BUFFER_BIT}X&&(te|=O.DEPTH_BUFFER_BIT),ee&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",Ce,!1),Ne.dispose(),ke.dispose(),tt.dispose(),F.dispose(),C.dispose(),ve.dispose(),at.dispose(),At.dispose(),me.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ln),Te.removeEventListener("sessionend",zi),Kn.stop()};function fe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const N=Ut.autoReset,X=Me.enabled,ee=Me.autoUpdate,te=Me.needsUpdate,$=Me.type;W(),Ut.autoReset=N,Me.enabled=X,Me.autoUpdate=ee,Me.needsUpdate=te,Me.type=$}function Ce(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ze(N){const X=N.target;X.removeEventListener("dispose",Ze),ht(X)}function ht(N){Ot(N),tt.remove(N)}function Ot(N){const X=tt.get(N).programs;X!==void 0&&(X.forEach(function(ee){me.releaseProgram(ee)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,X,ee,te,$,Ae){X===null&&(X=Ue);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,He=Zl(N,X,ee,te,$);Xe.setMaterial(te,Ie);let Re=ee.index,Je=1;if(te.wireframe===!0){if(Re=pe.getWireframeAttribute(ee),Re===void 0)return;Je=2}const Qe=ee.drawRange,Ge=ee.attributes.position;let gt=Qe.start*Je,Ft=(Qe.start+Qe.count)*Je;Ae!==null&&(gt=Math.max(gt,Ae.start*Je),Ft=Math.min(Ft,(Ae.start+Ae.count)*Je)),Re!==null?(gt=Math.max(gt,0),Ft=Math.min(Ft,Re.count)):Ge!=null&&(gt=Math.max(gt,0),Ft=Math.min(Ft,Ge.count));const Nt=Ft-gt;if(Nt<0||Nt===1/0)return;at.setup($,te,He,ee,Re);let Qt,ot=et;if(Re!==null&&(Qt=se.get(Re),ot=Oe,ot.setIndex(Qt)),$.isMesh)te.wireframe===!0?(Xe.setLineWidth(te.wireframeLinewidth*lt()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if($.isLine){let We=te.linewidth;We===void 0&&(We=1),Xe.setLineWidth(We*lt()),$.isLineSegments?ot.setMode(O.LINES):$.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else $.isPoints?ot.setMode(O.POINTS):$.isSprite&&ot.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ot.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const We=$._multiDrawStarts,wt=$._multiDrawCounts,yt=$._multiDrawCount,Dn=Re?se.get(Re).bytesPerElement:1,ji=tt.get(te).currentProgram.getUniforms();for(let Jt=0;Jt<yt;Jt++)ji.setValue(O,"_gl_DrawID",Jt),ot.render(We[Jt]/Dn,wt[Jt])}else if($.isInstancedMesh)ot.renderInstances(gt,Nt,$.count);else if(ee.isInstancedBufferGeometry){const We=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,wt=Math.min(ee.instanceCount,We);ot.renderInstances(gt,Nt,wt)}else ot.render(gt,Nt)};function Gt(N,X,ee){N.transparent===!0&&N.side===vi&&N.forceSinglePass===!1?(N.side=Nn,N.needsUpdate=!0,Vi(N,X,ee),N.side=xr,N.needsUpdate=!0,Vi(N,X,ee),N.side=vi):Vi(N,X,ee)}this.compile=function(N,X,ee=null){ee===null&&(ee=N),x=ke.get(ee),x.init(X),D.push(x),ee.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),N!==ee&&N.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const te=new Set;return N.traverse(function($){const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const He=Ae[Ie];Gt(He,ee,$),te.add(He)}else Gt(Ae,ee,$),te.add(Ae)}),D.pop(),x=null,te},this.compileAsync=function(N,X,ee=null){const te=this.compile(N,X,ee);return new Promise($=>{function Ae(){if(te.forEach(function(Ie){tt.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){$(N);return}setTimeout(Ae,10)}vt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let _t=null;function Pn(N){_t&&_t(N)}function Ln(){Kn.stop()}function zi(){Kn.start()}const Kn=new Pg;Kn.setAnimationLoop(Pn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(N){_t=N,Te.setAnimationLoop(N),N===null?Kn.stop():Kn.start()},Te.addEventListener("sessionstart",Ln),Te.addEventListener("sessionend",zi),this.render=function(N,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,X,I),x=ke.get(N,D.length),x.init(X),D.push(x),xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Le.setFromProjectionMatrix(xe),de=this.localClippingEnabled,J=st.init(this.clippingPlanes,de),T=Ne.get(N,v.length),T.init(),v.push(T),Te.enabled===!0&&Te.isPresenting===!0){const Ae=w.xr.getDepthSensingMesh();Ae!==null&&yi(Ae,X,-1/0,w.sortObjects)}yi(N,X,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(B,ue),be=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,be&&De.addToRenderList(T,N),this.info.render.frame++,J===!0&&st.beginShadows();const ee=x.state.shadowsArray;Me.render(ee,N,X),J===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=T.opaque,$=T.transmissive;if(x.setupLights(),X.isArrayCamera){const Ae=X.cameras;if($.length>0)for(let Ie=0,He=Ae.length;Ie<He;Ie++){const Re=Ae[Ie];Hi(te,$,N,Re)}be&&De.render(N);for(let Ie=0,He=Ae.length;Ie<He;Ie++){const Re=Ae[Ie];$a(T,N,Re,Re.viewport)}}else $.length>0&&Hi(te,$,N,X),be&&De.render(N),$a(T,N,X);I!==null&&(it.updateMultisampleRenderTarget(I),it.updateRenderTargetMipmap(I)),N.isScene===!0&&N.onAfterRender(w,N,X),at.resetDefaultState(),j=-1,P=null,D.pop(),D.length>0?(x=D[D.length-1],J===!0&&st.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function yi(N,X,ee,te){if(N.visible===!1)return;if(N.layers.test(X.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(X);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Le.intersectsSprite(N)){te&&we.setFromMatrixPosition(N.matrixWorld).applyMatrix4(xe);const Ie=ve.update(N),He=N.material;He.visible&&T.push(N,Ie,He,ee,we.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Le.intersectsObject(N))){const Ie=ve.update(N),He=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),we.copy(N.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),we.copy(Ie.boundingSphere.center)),we.applyMatrix4(N.matrixWorld).applyMatrix4(xe)),Array.isArray(He)){const Re=Ie.groups;for(let Je=0,Qe=Re.length;Je<Qe;Je++){const Ge=Re[Je],gt=He[Ge.materialIndex];gt&&gt.visible&&T.push(N,Ie,gt,ee,we.z,Ge)}}else He.visible&&T.push(N,Ie,He,ee,we.z,null)}}const Ae=N.children;for(let Ie=0,He=Ae.length;Ie<He;Ie++)yi(Ae[Ie],X,ee,te)}function $a(N,X,ee,te){const $=N.opaque,Ae=N.transmissive,Ie=N.transparent;x.setupLightsView(ee),J===!0&&st.setGlobalState(w.clippingPlanes,ee),te&&Xe.viewport(R.copy(te)),$.length>0&&Si($,X,ee),Ae.length>0&&Si(Ae,X,ee),Ie.length>0&&Si(Ie,X,ee),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Hi(N,X,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new Zr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Ga:Bi,minFilter:Yr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[te.id],Ie=te.viewport||R;Ae.setSize(Ie.z,Ie.w);const He=w.getRenderTarget();w.setRenderTarget(Ae),w.getClearColor(q),ae=w.getClearAlpha(),ae<1&&w.setClearColor(16777215,.5),w.clear(),be&&De.render(ee);const Re=w.toneMapping;w.toneMapping=_r;const Je=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),J===!0&&st.setGlobalState(w.clippingPlanes,te),Si(N,ee,te),it.updateMultisampleRenderTarget(Ae),it.updateRenderTargetMipmap(Ae),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ge=0,gt=X.length;Ge<gt;Ge++){const Ft=X[Ge],Nt=Ft.object,Qt=Ft.geometry,ot=Ft.material,We=Ft.group;if(ot.side===vi&&Nt.layers.test(te.layers)){const wt=ot.side;ot.side=Nn,ot.needsUpdate=!0,Mr(Nt,ee,te,Qt,ot,We),ot.side=wt,ot.needsUpdate=!0,Qe=!0}}Qe===!0&&(it.updateMultisampleRenderTarget(Ae),it.updateRenderTargetMipmap(Ae))}w.setRenderTarget(He),w.setClearColor(q,ae),Je!==void 0&&(te.viewport=Je),w.toneMapping=Re}function Si(N,X,ee){const te=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Ae=N.length;$<Ae;$++){const Ie=N[$],He=Ie.object,Re=Ie.geometry,Je=te===null?Ie.material:te,Qe=Ie.group;He.layers.test(ee.layers)&&Mr(He,X,ee,Re,Je,Qe)}}function Mr(N,X,ee,te,$,Ae){N.onBeforeRender(w,X,ee,te,$,Ae),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(w,X,ee,te,N,Ae),$.transparent===!0&&$.side===vi&&$.forceSinglePass===!1?($.side=Nn,$.needsUpdate=!0,w.renderBufferDirect(ee,X,te,$,N,Ae),$.side=xr,$.needsUpdate=!0,w.renderBufferDirect(ee,X,te,$,N,Ae),$.side=vi):w.renderBufferDirect(ee,X,te,$,N,Ae),N.onAfterRender(w,X,ee,te,$,Ae)}function Vi(N,X,ee){X.isScene!==!0&&(X=Ue);const te=tt.get(N),$=x.state.lights,Ae=x.state.shadowsArray,Ie=$.state.version,He=me.getParameters(N,$.state,Ae,X,ee),Re=me.getProgramCacheKey(He);let Je=te.programs;te.environment=N.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(N.isMeshStandardMaterial?C:F).get(N.envMap||te.environment),te.envMapRotation=te.environment!==null&&N.envMap===null?X.environmentRotation:N.envMapRotation,Je===void 0&&(N.addEventListener("dispose",Ze),Je=new Map,te.programs=Je);let Qe=Je.get(Re);if(Qe!==void 0){if(te.currentProgram===Qe&&te.lightsStateVersion===Ie)return Ka(N,He),Qe}else He.uniforms=me.getUniforms(N),N.onBeforeCompile(He,w),Qe=me.acquireProgram(He,Re),Je.set(Re,Qe),te.uniforms=He.uniforms;const Ge=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ge.clippingPlanes=st.uniform),Ka(N,He),te.needsLights=Za(N),te.lightsStateVersion=Ie,te.needsLights&&(Ge.ambientLightColor.value=$.state.ambient,Ge.lightProbe.value=$.state.probe,Ge.directionalLights.value=$.state.directional,Ge.directionalLightShadows.value=$.state.directionalShadow,Ge.spotLights.value=$.state.spot,Ge.spotLightShadows.value=$.state.spotShadow,Ge.rectAreaLights.value=$.state.rectArea,Ge.ltc_1.value=$.state.rectAreaLTC1,Ge.ltc_2.value=$.state.rectAreaLTC2,Ge.pointLights.value=$.state.point,Ge.pointLightShadows.value=$.state.pointShadow,Ge.hemisphereLights.value=$.state.hemi,Ge.directionalShadowMap.value=$.state.directionalShadowMap,Ge.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ge.spotShadowMap.value=$.state.spotShadowMap,Ge.spotLightMatrix.value=$.state.spotLightMatrix,Ge.spotLightMap.value=$.state.spotLightMap,Ge.pointShadowMap.value=$.state.pointShadowMap,Ge.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=Qe,te.uniformsList=null,Qe}function Ya(N){if(N.uniformsList===null){const X=N.currentProgram.getUniforms();N.uniformsList=Ul.seqWithValue(X.seq,N.uniforms)}return N.uniformsList}function Ka(N,X){const ee=tt.get(N);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function Zl(N,X,ee,te,$){X.isScene!==!0&&(X=Ue),it.resetTextureUnits();const Ae=X.fog,Ie=te.isMeshStandardMaterial?X.environment:null,He=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sr,Re=(te.isMeshStandardMaterial?C:F).get(te.envMap||Ie),Je=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!ee.morphAttributes.position,gt=!!ee.morphAttributes.normal,Ft=!!ee.morphAttributes.color;let Nt=_r;te.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=w.toneMapping);const Qt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ot=Qt!==void 0?Qt.length:0,We=tt.get(te),wt=x.state.lights;if(J===!0&&(de===!0||N!==P)){const _n=N===P&&te.id===j;st.setState(te,N,_n)}let yt=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==wt.state.version||We.outputColorSpace!==He||$.isBatchedMesh&&We.batching===!1||!$.isBatchedMesh&&We.batching===!0||$.isBatchedMesh&&We.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&We.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&We.instancing===!1||!$.isInstancedMesh&&We.instancing===!0||$.isSkinnedMesh&&We.skinning===!1||!$.isSkinnedMesh&&We.skinning===!0||$.isInstancedMesh&&We.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&We.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&We.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&We.instancingMorph===!1&&$.morphTexture!==null||We.envMap!==Re||te.fog===!0&&We.fog!==Ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==st.numPlanes||We.numIntersection!==st.numIntersection)||We.vertexAlphas!==Je||We.vertexTangents!==Qe||We.morphTargets!==Ge||We.morphNormals!==gt||We.morphColors!==Ft||We.toneMapping!==Nt||We.morphTargetsCount!==ot)&&(yt=!0):(yt=!0,We.__version=te.version);let Dn=We.currentProgram;yt===!0&&(Dn=Vi(te,X,$));let ji=!1,Jt=!1,Gi=!1;const Ct=Dn.getUniforms(),In=We.uniforms;if(Xe.useProgram(Dn.program)&&(ji=!0,Jt=!0,Gi=!0),te.id!==j&&(j=te.id,Jt=!0),ji||P!==N){Ct.setValue(O,"projectionMatrix",N.projectionMatrix),Ct.setValue(O,"viewMatrix",N.matrixWorldInverse);const _n=Ct.map.cameraPosition;_n!==void 0&&_n.setValue(O,ye.setFromMatrixPosition(N.matrixWorld)),Mt.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",N.isOrthographicCamera===!0),P!==N&&(P=N,Jt=!0,Gi=!0)}if($.isSkinnedMesh){Ct.setOptional(O,$,"bindMatrix"),Ct.setOptional(O,$,"bindMatrixInverse");const _n=$.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ct.setValue(O,"boneTexture",_n.boneTexture,it))}$.isBatchedMesh&&(Ct.setOptional(O,$,"batchingTexture"),Ct.setValue(O,"batchingTexture",$._matricesTexture,it),Ct.setOptional(O,$,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",$._indirectTexture,it),Ct.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",$._colorsTexture,it));const Zs=ee.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&ft.update($,ee,Dn),(Jt||We.receiveShadow!==$.receiveShadow)&&(We.receiveShadow=$.receiveShadow,Ct.setValue(O,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(In.envMap.value=Re,In.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(In.envMapIntensity.value=X.environmentIntensity),Jt&&(Ct.setValue(O,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&Mi(In,Gi),Ae&&te.fog===!0&&qe.refreshFogUniforms(In,Ae),qe.refreshMaterialUniforms(In,te,ce,oe,x.state.transmissionRenderTarget[N.id]),Ul.upload(O,Ya(We),In,it)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ul.upload(O,Ya(We),In,it),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(O,"center",$.center),Ct.setValue(O,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(O,"normalMatrix",$.normalMatrix),Ct.setValue(O,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const _n=te.uniformsGroups;for(let Er=0,Qa=_n.length;Er<Qa;Er++){const Qr=_n[Er];At.update(Qr,Dn),At.bind(Qr,Dn)}}return Dn}function Mi(N,X){N.ambientLightColor.needsUpdate=X,N.lightProbe.needsUpdate=X,N.directionalLights.needsUpdate=X,N.directionalLightShadows.needsUpdate=X,N.pointLights.needsUpdate=X,N.pointLightShadows.needsUpdate=X,N.spotLights.needsUpdate=X,N.spotLightShadows.needsUpdate=X,N.rectAreaLights.needsUpdate=X,N.hemisphereLights.needsUpdate=X}function Za(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(N,X,ee){tt.get(N.texture).__webglTexture=X,tt.get(N.depthTexture).__webglTexture=ee;const te=tt.get(N);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,X){const ee=tt.get(N);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(N,X=0,ee=0){I=N,H=X,L=ee;let te=!0,$=null,Ae=!1,Ie=!1;if(N){const Re=tt.get(N);if(Re.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(Re.__webglFramebuffer===void 0)it.setupRenderTarget(N);else if(Re.__hasExternalTextures)it.rebindTextures(N,tt.get(N.texture).__webglTexture,tt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ge=N.depthTexture;if(Re.__boundDepthTexture!==Ge){if(Ge!==null&&tt.has(Ge)&&(N.width!==Ge.image.width||N.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(N)}}const Je=N.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ie=!0);const Qe=tt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?$=Qe[X][ee]:$=Qe[X],Ae=!0):N.samples>0&&it.useMultisampledRTT(N)===!1?$=tt.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?$=Qe[ee]:$=Qe,R.copy(N.viewport),z.copy(N.scissor),Y=N.scissorTest}else R.copy(ie).multiplyScalar(ce).floor(),z.copy(k).multiplyScalar(ce).floor(),Y=re;if(Xe.bindFramebuffer(O.FRAMEBUFFER,$)&&te&&Xe.drawBuffers(N,$),Xe.viewport(R),Xe.scissor(z),Xe.setScissorTest(Y),Ae){const Re=tt.get(N.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,ee)}else if(Ie){const Re=tt.get(N.texture),Je=X||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,ee||0,Je)}j=-1},this.readRenderTargetPixels=function(N,X,ee,te,$,Ae,Ie){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=tt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){Xe.bindFramebuffer(O.FRAMEBUFFER,He);try{const Re=N.texture,Je=Re.format,Qe=Re.type;if(!Mt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=N.width-te&&ee>=0&&ee<=N.height-$&&O.readPixels(X,ee,te,$,rt.convert(Je),rt.convert(Qe),Ae)}finally{const Re=I!==null?tt.get(I).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(N,X,ee,te,$,Ae,Ie){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=tt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){Xe.bindFramebuffer(O.FRAMEBUFFER,He);try{const Re=N.texture,Je=Re.format,Qe=Re.type;if(!Mt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=N.width-te&&ee>=0&&ee<=N.height-$){const Ge=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.bufferData(O.PIXEL_PACK_BUFFER,Ae.byteLength,O.STREAM_READ),O.readPixels(X,ee,te,$,rt.convert(Je),rt.convert(Qe),0),O.flush();const gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await vx(O,gt,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ae)}finally{O.deleteBuffer(Ge),O.deleteSync(gt)}return Ae}}finally{const Re=I!==null?tt.get(I).__webglFramebuffer:null;Xe.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(N,X=null,ee=0){N.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,N=arguments[1]);const te=Math.pow(2,-ee),$=Math.floor(N.image.width*te),Ae=Math.floor(N.image.height*te),Ie=X!==null?X.x:0,He=X!==null?X.y:0;it.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,Ie,He,$,Ae),Xe.unbindTexture()},this.copyTextureToTexture=function(N,X,ee=null,te=null,$=0){N.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,N=arguments[1],X=arguments[2],$=arguments[3]||0,ee=null);let Ae,Ie,He,Re,Je,Qe;ee!==null?(Ae=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,He=ee.min.x,Re=ee.min.y):(Ae=N.image.width,Ie=N.image.height,He=0,Re=0),te!==null?(Je=te.x,Qe=te.y):(Je=0,Qe=0);const Ge=rt.convert(X.format),gt=rt.convert(X.type);it.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const Ft=O.getParameter(O.UNPACK_ROW_LENGTH),Nt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qt=O.getParameter(O.UNPACK_SKIP_PIXELS),ot=O.getParameter(O.UNPACK_SKIP_ROWS),We=O.getParameter(O.UNPACK_SKIP_IMAGES),wt=N.isCompressedTexture?N.mipmaps[$]:N.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,He),O.pixelStorei(O.UNPACK_SKIP_ROWS,Re),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,Je,Qe,Ae,Ie,Ge,gt,wt.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,Je,Qe,wt.width,wt.height,Ge,wt.data):O.texSubImage2D(O.TEXTURE_2D,$,Je,Qe,Ae,Ie,Ge,gt,wt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,We),$===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(N,X,ee=null,te=null,$=0){N.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,N=arguments[2],X=arguments[3],$=arguments[4]||0);let Ae,Ie,He,Re,Je,Qe,Ge,gt,Ft;const Nt=N.isCompressedTexture?N.mipmaps[$]:N.image;ee!==null?(Ae=ee.max.x-ee.min.x,Ie=ee.max.y-ee.min.y,He=ee.max.z-ee.min.z,Re=ee.min.x,Je=ee.min.y,Qe=ee.min.z):(Ae=Nt.width,Ie=Nt.height,He=Nt.depth,Re=0,Je=0,Qe=0),te!==null?(Ge=te.x,gt=te.y,Ft=te.z):(Ge=0,gt=0,Ft=0);const Qt=rt.convert(X.format),ot=rt.convert(X.type);let We;if(X.isData3DTexture)it.setTexture3D(X,0),We=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)it.setTexture2DArray(X,0),We=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Dn=O.getParameter(O.UNPACK_SKIP_PIXELS),ji=O.getParameter(O.UNPACK_SKIP_ROWS),Jt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),O.pixelStorei(O.UNPACK_SKIP_ROWS,Je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),N.isDataTexture||N.isData3DTexture?O.texSubImage3D(We,$,Ge,gt,Ft,Ae,Ie,He,Qt,ot,Nt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(We,$,Ge,gt,Ft,Ae,Ie,He,Qt,Nt.data):O.texSubImage3D(We,$,Ge,gt,Ft,Ae,Ie,He,Qt,ot,Nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ji),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Jt),$===0&&X.generateMipmaps&&O.generateMipmap(We),Xe.unbindTexture()},this.initRenderTarget=function(N){tt.get(N).__webglFramebuffer===void 0&&it.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?it.setTextureCube(N,0):N.isData3DTexture?it.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?it.setTexture2DArray(N,0):it.setTexture2D(N,0),Xe.unbindTexture()},this.resetState=function(){H=0,L=0,I=null,Xe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rf?"display-p3":"srgb",n.unpackColorSpace=Et.workingColorSpace===ql?"display-p3":"srgb"}}class of{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=n}clone(){return new of(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bg extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zg extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $m=new Ht,qd=new Eg,Al=new $l,Cl=new Z;class AE extends on{constructor(e=new ci,n=new zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(o),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;$m.copy(o).invert(),qd.copy(e.ray).applyMatrix4($m);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=u*u,g=r.index,S=r.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let A=y,T=M;A<T;A++){const x=g.getX(A);Cl.fromBufferAttribute(S,x),Ym(Cl,x,p,o,e,n,this)}}else{const y=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let A=y,T=M;A<T;A++)Cl.fromBufferAttribute(S,A),Ym(Cl,A,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Ym(s,e,n,r,o,l,d){const u=qd.distanceSqToPoint(s);if(u<n){const p=new Z;qd.closestPointToPoint(s,p),p.applyMatrix4(r);const g=o.ray.origin.distanceTo(p);if(g<o.near||g>o.far)return;l.push({distance:g,distanceToRay:Math.sqrt(u),point:p,index:e,face:null,object:d})}}class CE extends vn{constructor(e,n,r,o,l,d,u,p,g){super(e,n,r,o,l,d,u,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lf extends ci{constructor(e=1,n=1,r=1,o=32,l=1,d=!1,u=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:u,thetaLength:p};const g=this;o=Math.floor(o),l=Math.floor(l);const _=[],S=[],y=[],M=[];let A=0;const T=[],x=r/2;let v=0;D(),d===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(_),this.setAttribute("position",new Hn(S,3)),this.setAttribute("normal",new Hn(y,3)),this.setAttribute("uv",new Hn(M,2));function D(){const b=new Z,H=new Z;let L=0;const I=(n-e)/r;for(let j=0;j<=l;j++){const P=[],R=j/l,z=R*(n-e)+e;for(let Y=0;Y<=o;Y++){const q=Y/o,ae=q*p+u,le=Math.sin(ae),oe=Math.cos(ae);H.x=z*le,H.y=-R*r+x,H.z=z*oe,S.push(H.x,H.y,H.z),b.set(le,I,oe).normalize(),y.push(b.x,b.y,b.z),M.push(q,1-R),P.push(A++)}T.push(P)}for(let j=0;j<o;j++)for(let P=0;P<l;P++){const R=T[P][j],z=T[P+1][j],Y=T[P+1][j+1],q=T[P][j+1];_.push(R,z,q),_.push(z,Y,q),L+=6}g.addGroup(v,L,0),v+=L}function w(b){const H=A,L=new mt,I=new Z;let j=0;const P=b===!0?e:n,R=b===!0?1:-1;for(let Y=1;Y<=o;Y++)S.push(0,x*R,0),y.push(0,R,0),M.push(.5,.5),A++;const z=A;for(let Y=0;Y<=o;Y++){const ae=Y/o*p+u,le=Math.cos(ae),oe=Math.sin(ae);I.x=P*oe,I.y=x*R,I.z=P*le,S.push(I.x,I.y,I.z),y.push(0,R,0),L.x=le*.5+.5,L.y=oe*.5*R+.5,M.push(L.x,L.y),A++}for(let Y=0;Y<o;Y++){const q=H+Y,ae=z+Y;b===!0?_.push(ae,ae+1,q):_.push(ae+1,ae,q),j+=3}g.addGroup(v,j,b===!0?1:2),v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cf extends ci{constructor(e=.5,n=1,r=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const u=[],p=[],g=[],_=[];let S=e;const y=(n-e)/o,M=new Z,A=new mt;for(let T=0;T<=o;T++){for(let x=0;x<=r;x++){const v=l+x/r*d;M.x=S*Math.cos(v),M.y=S*Math.sin(v),p.push(M.x,M.y,M.z),g.push(0,0,1),A.x=(M.x/n+1)/2,A.y=(M.y/n+1)/2,_.push(A.x,A.y)}S+=y}for(let T=0;T<o;T++){const x=T*(r+1);for(let v=0;v<r;v++){const D=v+x,w=D,b=D+r+1,H=D+r+2,L=D+1;u.push(w,b,L),u.push(b,H,L)}}this.setIndex(u),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gl extends Ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_g,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uf extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ld=new Ht,Km=new Z,Zm=new Z;class Hg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qm=new Ht,Oa=new Z,cd=new Z;class RE extends Hg{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Oa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Oa),cd.copy(r.position),cd.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(cd),r.updateMatrixWorld(),o.makeTranslation(-Oa.x,-Oa.y,-Oa.z),Qm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm)}}class bE extends uf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new RE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class NE extends Hg{constructor(){super(new Lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends uf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new NE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vg extends uf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class PE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Jm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Jm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);const Yn=.125,Rl={head:[8,8,8],body:[8,12,4],rarm:[4,12,4],larm:[4,12,4],rleg:[4,12,4],lleg:[4,12,4]},jr={head:[0,20*Yn,0],body:[0,18*Yn,0],rarm:[-6*Yn,18*Yn,0],larm:[6*Yn,18*Yn,0],rleg:[-2*Yn,6*Yn,0],lleg:[2*Yn,6*Yn,0]},LE={helmet:1.1,chestplate:1.07,leggings:1.05,boots:1.06},DE={helmet:["head"],chestplate:["body","rarm","larm"],leggings:["rleg","lleg"],boots:["rleg","lleg"]},ud={head:[[0,8,8,8],[16,8,8,8],[8,0,8,8],[16,0,8,8],[8,8,8,8],[24,8,8,8]],head_overlay:[[32,8,8,8],[48,8,8,8],[40,0,8,8],[48,0,8,8],[40,8,8,8],[56,8,8,8]],body:[[16,20,4,12],[28,20,4,12],[20,16,8,4],[28,16,8,4],[20,20,8,12],[32,20,8,12]],rarm:[[40,20,4,12],[48,20,4,12],[44,16,4,4],[48,16,4,4],[44,20,4,12],[52,20,4,12]],larm:[[32,52,4,12],[40,52,4,12],[36,48,4,4],[40,48,4,4],[36,52,4,12],[44,52,4,12]],rleg:[[0,20,4,12],[8,20,4,12],[4,16,4,4],[8,16,4,4],[4,20,4,12],[12,20,4,12]],lleg:[[16,52,4,12],[24,52,4,12],[20,48,4,4],[24,48,4,4],[20,52,4,12],[28,52,4,12]]};function jg(s){const e=new CE(s);return e.magFilter=bn,e.minFilter=bn,e.generateMipmaps=!1,e}function IE(s,e,n,r,o){const l=document.createElement("canvas");l.width=r,l.height=o;const d=l.getContext("2d");return d.imageSmoothingEnabled=!1,d.drawImage(s,e,n,r,o,0,0,r,o),jg(l)}function dd(s,e){return e.map(([n,r,o,l])=>{const d=IE(s,n,r,o,l);return new Gl({map:d,transparent:!0,alphaTest:.1})})}function UE(s,e){const n=parseInt(s.replace("#",""),16),r=Math.min(255,Math.floor((n>>16&255)*e)),o=Math.min(255,Math.floor((n>>8&255)*e)),l=Math.min(255,Math.floor((n&255)*e));return`rgb(${r},${o},${l})`}function FE(s,e){const r=document.createElement("canvas");r.width=16,r.height=16;const o=r.getContext("2d"),d={top:1.2,front:1,side:.75,back:.6,bottom:.5}[e]||1;o.fillStyle=UE(s,d),o.fillRect(0,0,16,16),o.fillStyle="rgba(255,255,255,0.1)";for(let u=0;u<16;u+=4)o.fillRect(u,0,1,16);for(let u=0;u<16;u+=4)o.fillRect(0,u,16,1);return o.fillStyle="rgba(255,255,255,0.15)",o.fillRect(0,0,16,1),o.fillRect(0,0,1,16),o.fillStyle="rgba(0,0,0,0.25)",o.fillRect(0,15,16,1),o.fillRect(15,0,1,16),jg(r)}function kE(s,e,n=0){return["side","side","top","bottom","front","back"].map(o=>{const l=FE(s,o);return new Gl({map:l,transparent:!0,opacity:.92,emissive:new pt(s),emissiveIntensity:n})})}function fd(s,e,n){const[r,o,l]=s.map(p=>p*Yn),d=new An(r,o,l),u=new qt(d,n);return u.position.set(...e),u}function eg(){const s=document.createElement("canvas");s.width=64,s.height=64;const e=s.getContext("2d"),n=(r,o,l,d,u)=>{e.fillStyle=u,e.fillRect(r,o,l,d)};return n(0,0,32,16,"#c8a77a"),n(32,0,32,16,"#c8a77a"),n(9,10,2,2,"#2a1a0a"),n(13,10,2,2,"#2a1a0a"),n(9,12,6,1,"#a06040"),n(16,16,24,16,"#3b5fa0"),n(16,20,4,12,"#2d4a80"),n(28,20,4,12,"#2d4a80"),n(40,16,16,16,"#c8a77a"),n(40,16,4,12,"#b0905c"),n(48,16,4,12,"#b0905c"),n(0,16,16,16,"#2a3566"),n(0,16,4,12,"#1e2848"),n(8,16,4,12,"#1e2848"),n(16,48,16,16,"#2a3566"),n(32,48,16,16,"#c8a77a"),s}function OE({armor:s,highlighted:e,skinName:n}){const r=Ke.useRef(null),o=Ke.useRef({});return Ke.useEffect(()=>{const l=r.current;if(!l)return;const d=new Og({antialias:!1,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(l.clientWidth,l.clientHeight),d.setClearColor(0,0),l.appendChild(d.domElement);const u=new Bg,p=l.clientWidth/l.clientHeight,g=new Rn(35,p,.1,100);g.position.set(0,1.5,6.5),g.lookAt(0,1.5,0);const _=new Vg(16777215,.6);u.add(_);const S=new Wl(16774624,1.4);S.position.set(3,5,4),u.add(S);const y=new Wl(12638463,.5);y.position.set(-3,2,-2),u.add(y);const M=new Bs;u.add(M);const A={},T={},x=Y=>{const ae=Y instanceof HTMLImageElement?Y:null,le=B=>{if(ae)return dd(ae,ud[B]);const ue=eg(),ie=new Image(64,64);return ie.src=ue.toDataURL(),dd(ie,ud[B])};if(["head","body","rarm","larm","rleg","lleg"].forEach(B=>{const ue=le(B),ie=fd(Rl[B],jr[B],ue);A[B]=ie,M.add(ie)}),ae){const B=dd(ae,ud.head_overlay),ue=fd(Rl.head.map(ie=>ie+.5),jr.head,B);M.add(ue)}["helmet","chestplate","leggings","boots"].forEach(B=>{if(!s[B])return;const ue=s[B].color||"#888888",ie=e===B,k=[];DE[B].forEach(Le=>{const J=LE[B],de=Rl[Le].map(we=>we*J),xe=kE(ue,B,ie?.15:0),ye=fd(de,jr[Le],xe);k.push({mesh:ye,mats:xe}),M.add(ye)}),T[B]=k}),s.boots&&T.boots&&(T.boots.forEach(({mesh:B})=>{B.scale.y=.45,B.position.y=jr.rleg[1]-Rl.rleg[1]*Yn*(1-.45)*.5}),T.boots.length>=2&&(T.boots[0].mesh.position.x=jr.rleg[0],T.boots[1].mesh.position.x=jr.lleg[0])),M.position.y=-4.5/2,o.current.built=!0};(()=>{const Y=n||"MHF_Steve",q=new Image;q.crossOrigin="anonymous",q.onload=()=>x(q),q.onerror=()=>{const ae=eg(),le=new Image(64,64);le.onload=()=>x(le),le.src=ae.toDataURL()},q.src=`https://mc-heads.net/skin/${Y}`})();const D={rotY:.3,rotX:.1,dragging:!1,lastX:0,lastY:0,autoRot:!0,idleTimer:null},w=()=>{clearTimeout(D.idleTimer),D.idleTimer=setTimeout(()=>{D.autoRot=!0},2500)},b=Y=>{D.dragging=!0,D.autoRot=!1;const q=Y.touches?Y.touches[0]:Y;D.lastX=q.clientX,D.lastY=q.clientY},H=Y=>{if(!D.dragging)return;const q=Y.touches?Y.touches[0]:Y;D.rotY+=(q.clientX-D.lastX)*.012,D.rotX+=(q.clientY-D.lastY)*.008,D.rotX=Math.max(-.5,Math.min(.6,D.rotX)),D.lastX=q.clientX,D.lastY=q.clientY},L=()=>{D.dragging=!1,w()};d.domElement.addEventListener("mousedown",b),d.domElement.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("mousemove",H),window.addEventListener("touchmove",H,{passive:!0}),window.addEventListener("mouseup",L),window.addEventListener("touchend",L);const I=new PE;let j;const P=()=>{j=requestAnimationFrame(P);const Y=I.getElapsedTime();D.autoRot&&(D.rotY+=.004),M.rotation.y=D.rotY,M.rotation.x=D.rotX,A.head&&(A.head.position.y=jr.head[1]+Math.sin(Y*1.2)*.012),A.rarm&&(A.rarm.rotation.z=Math.sin(Y*1.2)*.04),A.larm&&(A.larm.rotation.z=-Math.sin(Y*1.2)*.04),d.render(u,g)};P();const R=()=>{if(!l)return;const Y=l.clientWidth,q=l.clientHeight;g.aspect=Y/q,g.updateProjectionMatrix(),d.setSize(Y,q)},z=new ResizeObserver(R);return z.observe(l),o.current={...o.current,armorMeshes:T,scene:u,renderer:d},()=>{cancelAnimationFrame(j),z.disconnect(),d.domElement.removeEventListener("mousedown",b),d.domElement.removeEventListener("touchstart",b),window.removeEventListener("mousemove",H),window.removeEventListener("touchmove",H),window.removeEventListener("mouseup",L),window.removeEventListener("touchend",L),clearTimeout(D.idleTimer),d.dispose(),l.contains(d.domElement)&&l.removeChild(d.domElement)}},[n]),Ke.useEffect(()=>{const{armorMeshes:l}=o.current;l&&Object.entries(l).forEach(([d,u])=>{if(!u)return;const p=d===e;u.forEach(({mats:g})=>{g.forEach(_=>{_.emissiveIntensity=p?.22:0})})})},[e]),f.jsx("div",{ref:r,style:{width:"100%",height:"320px",cursor:"grab",userSelect:"none"},title:"Drag to rotate"})}function BE({chapter:s}){const[e,n]=Ke.useState("helmet");if(!s.armor)return f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Armor Display"}),f.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[f.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"🛡"}),f.jsx("span",{children:"Armor data not available"})]})]});const{armor:r}=s,o=r[e],l=Zp[o?.rarity]||"var(--glow-purple)",d=o?.color||l;return f.jsxs("div",{children:[f.jsxs("div",{className:"armor-header",children:[f.jsxs("div",{children:[f.jsx("div",{className:"armor-header-label",children:"Armor Set"}),f.jsx("div",{className:"armor-header-name",children:r.name})]}),f.jsx("div",{className:"armor-header-hint",children:"Drag to rotate · Click slot to inspect"})]}),f.jsxs("div",{className:"armor-layout",children:[f.jsxs("div",{className:"armor-mannequin-wrap",children:[f.jsxs("div",{className:"armor-mannequin-stage",style:{padding:0,minHeight:340},children:[f.jsx("div",{className:"armor-mannequin-bg",style:{background:`radial-gradient(ellipse at 50% 55%, ${d}28 0%, transparent 68%)`}}),f.jsx(OE,{armor:r,highlighted:e,skinName:r.skinName||"MHF_Steve"}),f.jsx("div",{className:"armor-mannequin-shadow"})]}),o&&f.jsxs("div",{className:"armor-piece-card",style:{"--piece-color":d},children:[f.jsxs("div",{className:"armor-piece-card-top",children:[f.jsxs("div",{className:"armor-piece-slot-chip",children:[f.jsx("span",{children:Yp[e]}),f.jsx("span",{children:Kp[e]})]}),f.jsx("span",{className:`rarity-badge rarity-${o.rarity}`,children:o.rarity})]}),f.jsx("div",{className:"armor-piece-name",children:o.name}),f.jsx("div",{className:"armor-piece-desc",children:o.desc})]})]}),f.jsxs("div",{className:"armor-slots",children:[y_.map(u=>{const p=r[u];if(!p)return null;const g=Zp[p.rarity]||"var(--glow-purple)",_=p.color||g,S=e===u;return f.jsxs("div",{className:`armor-slot${S?" active-slot":""}`,onClick:()=>n(u),style:S?{borderColor:_,background:`${_}14`,boxShadow:`0 0 20px ${_}22`}:{},children:[f.jsx("div",{className:"armor-slot-icon",style:{borderColor:_,color:_,boxShadow:S?`0 0 12px ${_}66`:"none"},children:p.emoji||Yp[u]}),f.jsxs("div",{className:"armor-slot-info",children:[f.jsx("h4",{children:p.name}),f.jsx("span",{className:"armor-slot-sublabel",children:Kp[u]}),p.desc&&f.jsx("span",{className:"armor-slot-desc",children:p.desc})]}),f.jsxs("div",{className:"armor-slot-right",children:[f.jsx("span",{className:`rarity-badge rarity-${p.rarity}`,children:p.rarity}),S&&f.jsx("div",{className:"armor-slot-active-dot",style:{background:_,boxShadow:`0 0 6px ${_}`}})]})]},u)}),f.jsxs("div",{className:"armor-set-bonus",children:[f.jsx("div",{className:"armor-set-bonus-label",children:"✦ Full Set Bonus"}),f.jsxs("div",{className:"armor-set-bonus-desc",children:[r.setBonus||"Equipping all 4 pieces grants +10% damage in void-touched areas and unlocks the ",!r.setBonus&&f.jsx("em",{children:"Cursed Veil"}),!r.setBonus&&" passive."]})]})]})]})]})}const zE=["common","easy","medium","hard","elite","legendary"],Fl={common:"Common",easy:"Easy",medium:"Medium",hard:"Hard",elite:"Elite",legendary:"Legendary"},Gg={common:"#aaaaaa",easy:"#55ff55",medium:"#ffaa00",hard:"#ff4444",elite:"#aa44ff",legendary:"#ffaa00"};function HE(s){const e=Math.min(100,Math.round(s.health/300*100)),n=typeof s.damage=="string"?parseInt(s.damage.split("–")[1]||s.damage,10):s.damage,r=Math.min(100,Math.round(n/30*100)),l={Boss:85,Elite:55,Rare:35,Common:20}[s.type]??20,d=l,p={legendary:90,elite:70,hard:55,medium:40,easy:25,common:15}[s.difficulty]??30,_={legendary:95,elite:80,hard:65,medium:45,easy:30,common:15}[s.difficulty]??40;return[{icon:"❤",label:"Health",val:s.health,pct:e,cls:"fill--hp"},{icon:"⚔",label:"Damage",val:s.damage,pct:r,cls:"fill--dmg"},{icon:"🛡",label:"Defense",val:`${l}%`,pct:d,cls:"fill--def"},{icon:"💨",label:"Speed",val:`${p}%`,pct:p,cls:"fill--spd"},{icon:"🎯",label:"Aggression",val:`${_}%`,pct:_,cls:"fill--aggro"}]}function pi(s,e){const n=parseInt((s||"#888888").replace("#",""),16),r=u=>Math.min(255,Math.max(0,u)),o=r((n>>16&255)+e),l=r((n>>8&255)+e),d=r((n&255)+e);return`rgb(${o},${l},${d})`}function VE({mob:s,width:e=80,height:n=145}){const r=s?.skinColors||{head:"#888888",body:"#555555",legs:"#444444",arms:"#777777"},o=d=>pi(d,-40),l=d=>pi(d,50);return f.jsxs("svg",{viewBox:"0 0 110 200",width:e,height:n,style:{imageRendering:"pixelated",overflow:"visible",display:"block"},children:[f.jsx("rect",{x:"30",y:"4",width:"50",height:"44",fill:r.head,rx:"2"}),f.jsx("rect",{x:"68",y:"4",width:"12",height:"44",fill:o(r.head)}),f.jsx("rect",{x:"30",y:"4",width:"50",height:"6",fill:l(r.head),opacity:"0.45",rx:"2"}),f.jsx("rect",{x:"37",y:"20",width:"12",height:"10",fill:"#0a0a14",rx:"1"}),f.jsx("rect",{x:"61",y:"20",width:"12",height:"10",fill:"#0a0a14",rx:"1"}),f.jsx("rect",{x:"39",y:"22",width:"5",height:"4",fill:"white",opacity:"0.55"}),f.jsx("rect",{x:"63",y:"22",width:"5",height:"4",fill:"white",opacity:"0.55"}),f.jsx("rect",{x:"43",y:"24",width:"3",height:"3",fill:"#111",opacity:"0.8"}),f.jsx("rect",{x:"67",y:"24",width:"3",height:"3",fill:"#111",opacity:"0.8"}),f.jsx("rect",{x:"34",y:"38",width:"42",height:"10",fill:pi(r.head,-20),rx:"1"}),f.jsx("rect",{x:"48",y:"48",width:"14",height:"8",fill:"#c8a87a",rx:"1"}),f.jsx("rect",{x:"28",y:"56",width:"54",height:"58",fill:r.body,rx:"2"}),f.jsx("rect",{x:"68",y:"56",width:"14",height:"58",fill:o(r.body)}),f.jsx("rect",{x:"28",y:"56",width:"54",height:"7",fill:l(r.body),opacity:"0.4",rx:"2"}),f.jsx("rect",{x:"28",y:"106",width:"54",height:"8",fill:pi(r.body,-60)}),f.jsx("rect",{x:"50",y:"106",width:"10",height:"8",fill:pi(r.body,-20),rx:"1"}),f.jsx("rect",{x:"4",y:"56",width:"22",height:"58",fill:r.arms,rx:"2"}),f.jsx("rect",{x:"18",y:"56",width:"8",height:"58",fill:o(r.arms)}),f.jsx("rect",{x:"84",y:"56",width:"22",height:"58",fill:r.arms,rx:"2"}),f.jsx("rect",{x:"98",y:"56",width:"8",height:"58",fill:o(r.arms)}),f.jsx("rect",{x:"28",y:"114",width:"26",height:"54",fill:r.legs,rx:"2"}),f.jsx("rect",{x:"44",y:"114",width:"10",height:"54",fill:o(r.legs)}),f.jsx("rect",{x:"56",y:"114",width:"26",height:"54",fill:r.legs,rx:"2"}),f.jsx("rect",{x:"70",y:"114",width:"12",height:"54",fill:o(r.legs)}),f.jsx("rect",{x:"53",y:"114",width:"4",height:"54",fill:pi(r.legs,-70),opacity:"0.6"}),f.jsx("rect",{x:"26",y:"168",width:"28",height:"26",fill:pi(r.legs,-15),rx:"2"}),f.jsx("rect",{x:"42",y:"168",width:"12",height:"26",fill:o(r.legs)}),f.jsx("rect",{x:"24",y:"182",width:"30",height:"12",fill:pi(r.legs,-25),rx:"2"}),f.jsx("rect",{x:"56",y:"168",width:"28",height:"26",fill:pi(r.legs,-15),rx:"2"}),f.jsx("rect",{x:"72",y:"168",width:"12",height:"26",fill:o(r.legs)}),f.jsx("rect",{x:"56",y:"182",width:"30",height:"12",fill:pi(r.legs,-25),rx:"2"})]})}function jE({mob:s}){const e=Ke.useRef(null);return Ke.useEffect(()=>{const n=e.current;if(!n)return;let r,o,l;const d=setTimeout(()=>{const u=n.clientWidth||280,p=n.clientHeight||280;r=new Og({antialias:!0,alpha:!0}),r.setSize(u,p),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(0,0),n.appendChild(r.domElement);const g=new Bg,_=new Rn(42,u/p,.1,100);_.position.set(0,1.2,5.2),_.lookAt(0,1.2,0),g.fog=new of(262157,.06),g.add(new Vg(16777215,.55));const S=new Wl(16777215,1.1);S.position.set(3,6,4),g.add(S);const y=new pt(s?.color||"#6f00ff"),M=new bE(y,2,10);M.position.set(-2.5,2.5,2),g.add(M);const A=new Wl(11184895,.5);A.position.set(2,4,-4),g.add(A);const T=s?.skinColors||{head:"#888888",body:"#555555",legs:"#444444",arms:"#777777"},x=be=>new Gl({color:new pt(be)}),v=new Bs,D=new qt(new An(1.22,1.22,1.22),x(T.head));D.position.y=3.12;const w=new Va({color:16777215}),b=be=>{const lt=new qt(new An(.28,.17,.02),w);return lt.position.set(be,3.14,.63),lt},H=new Va({color:y}),L=be=>{const lt=new qt(new An(.12,.12,.02),H);return lt.position.set(be,3.14,.645),lt},I=new qt(new An(1.02,1.52,.72),x(T.body));I.position.y=1.76;const j=new qt(new An(.42,1.4,.42),x(T.arms));j.position.set(-.72,1.76,0);const P=new qt(new An(.42,1.4,.42),x(T.arms));P.position.set(.72,1.76,0);const R=new qt(new An(.46,1.32,.46),x(T.legs));R.position.set(-.27,.66,0);const z=new qt(new An(.46,1.32,.46),x(T.legs));z.position.set(.27,.66,0),v.add(D,b(-.23),b(.23),L(-.23),L(.23),I,j,P,R,z),v.position.y=-1.5,g.add(v);const Y=new qt(new lf(1.4,1.4,.08,32),new Gl({color:y,transparent:!0,opacity:.18}));Y.position.y=-1.52,g.add(Y);const q=new qt(new cf(.9,1.35,40),new Va({color:y,transparent:!0,opacity:.35,side:vi}));q.rotation.x=-Math.PI/2,q.position.y=-1.47,g.add(q);const ae=30,le=new ci,oe=new Float32Array(ae*3),ce=[];for(let be=0;be<ae;be++){const lt=Math.random()*Math.PI*2,O=.5+Math.random()*.9;oe[be*3]=Math.cos(lt)*O,oe[be*3+1]=Math.random()*3.5,oe[be*3+2]=Math.sin(lt)*O,ce.push({speed:.008+Math.random()*.014,base:oe[be*3+1]})}le.setAttribute("position",new li(oe,3));const B=new AE(le,new zg({color:y,size:.06,transparent:!0,opacity:.7}));B.position.y=-1.5,g.add(B);let ue=0,ie=0,k=!1,re=0;const Le=be=>{k=!0,re=be.clientX},J=be=>{k&&(ue+=(be.clientX-re)*.013,re=be.clientX)},de=()=>{k=!1},xe=be=>{k=!0,re=be.touches[0].clientX},ye=be=>{k&&(ue+=(be.touches[0].clientX-re)*.013,re=be.touches[0].clientX)};r.domElement.addEventListener("mousedown",Le),window.addEventListener("mousemove",J),window.addEventListener("mouseup",de),r.domElement.addEventListener("touchstart",xe),r.domElement.addEventListener("touchmove",ye),r.domElement.addEventListener("touchend",de);let we=0;const Ue=()=>{o=requestAnimationFrame(Ue),we+=.018,k||(ue+=.005),ie+=(ue-ie)*.08,v.rotation.y=ie,B.rotation.y=ie*.3,j.rotation.x=Math.sin(we)*.28,P.rotation.x=-Math.sin(we)*.28,R.rotation.x=-Math.sin(we)*.2,z.rotation.x=Math.sin(we)*.2;const be=Math.sin(we*.55)*.07;v.position.y=-1.5+be,B.position.y=-1.5+be*.3,q.material.opacity=.28+Math.sin(we*1.2)*.12,Y.material.opacity=.14+Math.sin(we*1.2)*.06,M.intensity=1.8+Math.sin(we*1.4)*.5;const lt=le.attributes.position.array;for(let O=0;O<ae;O++)lt[O*3+1]+=ce[O].speed,lt[O*3+1]>ce[O].base+2&&(lt[O*3+1]=ce[O].base);le.attributes.position.needsUpdate=!0,r.render(g,_)};Ue(),l=()=>{cancelAnimationFrame(o),r.domElement.removeEventListener("mousedown",Le),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",de),r.domElement.removeEventListener("touchstart",xe),r.domElement.removeEventListener("touchmove",ye),r.domElement.removeEventListener("touchend",de),r.dispose(),n.contains(r.domElement)&&n.removeChild(r.domElement)}},80);return()=>{clearTimeout(d),l&&l()}},[s]),f.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"},title:"Drag to rotate"})}function GE({mob:s,index:e,total:n,onBack:r,onPrev:o,onNext:l}){const d=Gg[s.difficulty]||"var(--glow-purple)",u=HE(s);return f.jsxs("div",{className:"mcx-detail",style:{"--mob-color":s.color||"#6f00ff","--diff-color":d},children:[f.jsxs("div",{className:"mcx-detail-nav",children:[f.jsxs("button",{className:"mcx-nav-back",onClick:r,children:[f.jsx("span",{className:"mcx-nav-back-arrow",children:"←"}),f.jsx("span",{children:"Enemy Roster"})]}),f.jsxs("div",{className:"mcx-nav-center",children:[s.type," · ",s.name]}),f.jsxs("div",{className:"mcx-nav-pager",children:[f.jsxs("span",{className:"mcx-nav-pos",children:[e+1," / ",n]}),f.jsx("button",{className:"mcx-nav-arrow",onClick:o,disabled:e===0,title:"Previous enemy",children:"‹"}),f.jsx("button",{className:"mcx-nav-arrow",onClick:l,disabled:e===n-1,title:"Next enemy",children:"›"})]})]}),f.jsxs("div",{className:"mcx-detail-body",children:[f.jsxs("div",{className:"mcx-detail-left",children:[f.jsxs("div",{className:"mcx-viewer-wrap",children:[f.jsxs("div",{className:"mcx-viewer-corners",children:[f.jsx("span",{className:"mcx-corner-tl"}),f.jsx("span",{className:"mcx-corner-tr"}),f.jsx("span",{className:"mcx-corner-bl"}),f.jsx("span",{className:"mcx-corner-br"})]}),f.jsx("div",{className:"mcx-viewer-scanlines"}),f.jsx("div",{className:"mcx-viewer-inner",children:f.jsx(jE,{mob:s},s.id)})]}),f.jsx("p",{className:"mcx-drag-hint",children:"⟳ Drag to rotate"}),f.jsxs("div",{className:"mcx-identity",children:[f.jsxs("div",{className:"mcx-id-badges",children:[f.jsx("span",{className:"mcx-type-badge",children:s.type}),f.jsxs("span",{className:"mcx-diff-badge",style:{color:d,borderColor:`${d}55`,background:`${d}14`},children:[f.jsx("span",{className:"mcx-diff-dot",style:{background:d,boxShadow:`0 0 6px ${d}`}}),Fl[s.difficulty]]})]}),f.jsx("h3",{className:"mcx-mob-name",children:s.name}),f.jsxs("div",{className:"mcx-quick-trio",children:[f.jsxs("div",{className:"mcx-qt-item",children:[f.jsx("span",{className:"mcx-qt-icon",children:"❤"}),f.jsx("span",{className:"mcx-qt-val",children:s.health}),f.jsx("span",{className:"mcx-qt-label",children:"HP"})]}),f.jsx("div",{className:"mcx-qt-sep"}),f.jsxs("div",{className:"mcx-qt-item",children:[f.jsx("span",{className:"mcx-qt-icon",children:"⚔"}),f.jsx("span",{className:"mcx-qt-val",children:s.damage}),f.jsx("span",{className:"mcx-qt-label",children:"DMG"})]}),f.jsx("div",{className:"mcx-qt-sep"}),f.jsxs("div",{className:"mcx-qt-item",children:[f.jsx("span",{className:"mcx-qt-icon",children:"🛡"}),f.jsx("span",{className:"mcx-qt-val",children:s.type==="Boss"?"85%":s.type==="Elite"?"55%":"20%"}),f.jsx("span",{className:"mcx-qt-label",children:"DEF"})]})]})]})]}),f.jsxs("div",{className:"mcx-detail-right",children:[f.jsxs("div",{className:"mcx-section",children:[f.jsxs("div",{className:"mcx-section-hd",children:[f.jsx("span",{className:"mcx-section-line"}),f.jsx("span",{children:"Field Report"}),f.jsx("span",{className:"mcx-section-line"})]}),f.jsx("p",{className:"mcx-description",children:s.description})]}),s.lore&&f.jsxs("div",{className:"mcx-section",children:[f.jsxs("div",{className:"mcx-section-hd",children:[f.jsx("span",{className:"mcx-section-line"}),f.jsx("span",{children:"Lore"}),f.jsx("span",{className:"mcx-section-line"})]}),f.jsx("p",{className:"mcx-lore",children:s.lore})]}),f.jsxs("div",{className:"mcx-section",children:[f.jsxs("div",{className:"mcx-section-hd",children:[f.jsx("span",{className:"mcx-section-line"}),f.jsx("span",{children:"Combat Analytics"}),f.jsx("span",{className:"mcx-section-line"})]}),f.jsx("div",{className:"mcx-stats",children:u.map(p=>f.jsxs("div",{className:"mcx-stat-row",children:[f.jsxs("div",{className:"mcx-stat-meta",children:[f.jsx("span",{className:"mcx-stat-icon",children:p.icon}),f.jsx("span",{className:"mcx-stat-name",children:p.label}),f.jsx("span",{className:"mcx-stat-val",children:p.val})]}),f.jsxs("div",{className:"mcx-stat-track",children:[f.jsx("div",{className:`mcx-stat-fill ${p.cls}`,style:{width:`${p.pct}%`}}),f.jsxs("span",{className:"mcx-stat-pct",children:[p.pct,"%"]})]})]},p.label))})]}),f.jsxs("div",{className:"mcx-section",children:[f.jsxs("div",{className:"mcx-section-hd",children:[f.jsx("span",{className:"mcx-section-line"}),f.jsxs("span",{children:["Active Abilities (",s.abilities.length,")"]}),f.jsx("span",{className:"mcx-section-line"})]}),f.jsx("div",{className:"mcx-abilities",children:s.abilities.map((p,g)=>f.jsxs("div",{className:"mcx-ability",style:{"--mob-color":s.color||"var(--glow-purple)",animationDelay:`${g*.07}s`},children:[f.jsx("span",{className:"mcx-ability-num",children:String(g+1).padStart(2,"0")}),f.jsx("span",{className:"mcx-ability-name",children:p}),f.jsx("span",{className:"mcx-ability-arrow",children:"→"})]},p))})]}),s.drops&&s.drops.length>0&&f.jsxs("div",{className:"mcx-section",children:[f.jsxs("div",{className:"mcx-section-hd",children:[f.jsx("span",{className:"mcx-section-line"}),f.jsx("span",{children:"Possible Drops"}),f.jsx("span",{className:"mcx-section-line"})]}),f.jsx("div",{className:"mcx-drops",children:s.drops.map((p,g)=>f.jsxs("div",{className:"mcx-drop",children:[f.jsx("span",{className:"mcx-drop-icon",children:p.icon||"🎁"}),f.jsx("span",{children:p.name})]},g))})]})]})]})]})}function WE({chapter:s}){const[e,n]=Ke.useState(null),[r,o]=Ke.useState("all");if(s.mobs.length===0)return f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Enemy Codex"}),f.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[f.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"👾"}),f.jsx("span",{children:"No enemies catalogued yet"})]})]});if(e!==null)return f.jsx(GE,{mob:s.mobs[e],index:e,total:s.mobs.length,onBack:()=>n(null),onPrev:()=>n(u=>Math.max(0,u-1)),onNext:()=>n(u=>Math.min(s.mobs.length-1,u+1))});const l=zE.filter(u=>s.mobs.some(p=>p.difficulty===u)),d=r==="all"?s.mobs:s.mobs.filter(u=>u.difficulty===r);return f.jsxs("div",{className:"mcx-root",children:[f.jsxs("div",{className:"mcx-header",children:[f.jsxs("div",{className:"mcx-header-left",children:[f.jsx("div",{className:"mcx-header-eyebrow",children:"Chapter Enemies"}),f.jsx("h2",{className:"mcx-header-title",children:"Enemy Codex"})]}),f.jsx("div",{className:"mcx-header-right",children:f.jsxs("div",{className:"mcx-count-chip",children:[f.jsx("strong",{children:s.mobs.length})," threats logged"]})})]}),l.length>1&&f.jsxs("div",{className:"mcx-filters",children:[f.jsxs("button",{className:`mcx-filter-btn${r==="all"?" active":""}`,"data-diff":"all",onClick:()=>o("all"),children:["All (",s.mobs.length,")"]}),l.map(u=>f.jsxs("button",{className:`mcx-filter-btn${r===u?" active":""}`,"data-diff":u,onClick:()=>o(u),children:[Fl[u]," (",s.mobs.filter(p=>p.difficulty===u).length,")"]},u))]}),f.jsx("div",{className:"mcx-grid",children:d.length===0?f.jsx("div",{className:"mcx-empty",children:"No enemies match this filter."}):d.map((u,p)=>{const g=Gg[u.difficulty]||"var(--glow-purple)",_=s.mobs.indexOf(u);return f.jsxs("div",{className:"mcx-card",style:{"--mob-color":u.color||"#6f00ff",animationDelay:`${p*.06}s`},onClick:()=>n(_),children:[f.jsxs("div",{className:"mcx-card-preview",children:[f.jsx("div",{className:"mcx-card-diff-dot",style:{color:g,background:g},title:Fl[u.difficulty]}),f.jsx(VE,{mob:u,width:72,height:130}),f.jsx("div",{className:"mcx-card-preview-floor"})]}),f.jsxs("div",{className:"mcx-card-body",children:[f.jsx("div",{className:"mcx-card-type",children:u.type}),f.jsx("h3",{className:"mcx-card-name",children:u.name})]}),f.jsxs("div",{className:"mcx-card-footer",children:[f.jsxs("div",{className:"mcx-card-stats",children:[f.jsxs("span",{className:"mcx-card-stat",children:["❤ ",f.jsx("strong",{children:u.health})]}),f.jsxs("span",{className:"mcx-card-stat",children:["⚔ ",f.jsx("strong",{children:u.damage})]})]}),f.jsx("span",{className:"mcx-card-diff-pill",style:{color:g,borderColor:`${g}44`,background:`${g}12`},children:Fl[u.difficulty]})]})]},u.id)})})]})}const tg=[{color:"#9b4fd4",dark:"#5a1e99"},{color:"#c0392b",dark:"#7b1010"},{color:"#1a78c2",dark:"#0c3e70"},{color:"#177a44",dark:"#0a4022"},{color:"#c47a10",dark:"#6e3e06"},{color:"#8b1a8b",dark:"#4a0a4a"},{color:"#0d8c8c",dark:"#054848"},{color:"#a05c00",dark:"#5a3000"},{color:"#3d2db0",dark:"#1e1670"},{color:"#7a2040",dark:"#3e0e20"},{color:"#1a6666",dark:"#0a3333"},{color:"#b84a00",dark:"#6a2600"}],bl=[{color:"#3e2810",dark:"#20130a",width:20,height:100},{color:"#1e2c1e",dark:"#0e180e",width:16,height:88},{color:"#2e2008",dark:"#180f04",width:22,height:122},{color:"#141e30",dark:"#080f1a",width:18,height:95},{color:"#2c1220",dark:"#160910",width:24,height:108},{color:"#1e2c14",dark:"#0f160a",width:14,height:80},{color:"#2e1e10",dark:"#180f08",width:20,height:115},{color:"#10101e",dark:"#08080f",width:16,height:92},{color:"#1e1030",dark:"#0f0818",width:22,height:105},{color:"#281608",dark:"#140b04",width:18,height:98},{color:"#0e1e22",dark:"#070f11",width:20,height:110},{color:"#241020",dark:"#120810",width:14,height:86}];function ng(s,e=0){const n=[];s.forEach((o,l)=>{const d=l===0?2:1;for(let u=0;u<d;u++)n.push({type:"filler",data:bl[(e+n.length)%bl.length]});n.push({type:"book",data:o,index:l})});const r=Math.max(0,3-Math.floor(n.length/4));for(let o=0;o<r;o++)n.push({type:"filler",data:bl[(e+n.length)%bl.length]});return n}function XE({item:s,index:e}){if(typeof s=="string")return f.jsx("span",{className:"shelf-deco-item",style:{animationDelay:`${e*.8}s`,fontSize:e===1?"0.95rem":"1.1rem"},children:s});const n=`${e*.6}s`;switch(s.type){case"candle":return f.jsxs("div",{className:"shelf-candle",style:{animationDelay:n},children:[f.jsxs("div",{className:"shelf-candle-flame-wrap",children:[f.jsx("div",{className:"shelf-candle-glow",style:{animationDelay:n}}),f.jsx("div",{className:"shelf-candle-flame",style:{animationDelay:n},children:f.jsx("div",{className:"shelf-candle-flame-inner"})})]}),f.jsx("div",{className:"shelf-candle-wax",children:f.jsx("div",{className:"shelf-candle-drip"})})]});case"bottle":return f.jsxs("div",{className:"shelf-bottle",style:{"--bottle-color":s.color||"#00ffd0",animationDelay:n},children:[f.jsx("div",{className:"shelf-bottle-stopper"}),f.jsx("div",{className:"shelf-bottle-neck"}),f.jsx("div",{className:"shelf-bottle-body"}),f.jsx("div",{className:"shelf-bottle-glow"})]});case"orb":return f.jsxs("div",{className:"shelf-orb",style:{"--orb-color":s.color||"#cc44ff",animationDelay:n},children:[f.jsx("div",{className:"shelf-orb-sphere"}),f.jsx("div",{className:"shelf-orb-base"})]});default:return null}}function ig({items:s,onSelect:e,decoItems:n}){return f.jsxs("div",{className:"bookcase-shelf",children:[f.jsx("div",{className:"shelf-plank"}),f.jsxs("div",{className:"shelf-row",children:[s.map((r,o)=>{if(r.type==="filler")return f.jsxs("div",{className:"book book--filler",style:{"--book-color":r.data.color,"--book-color-dark":r.data.dark,"--book-width":r.data.width+"px","--book-height":r.data.height+"px",animationDelay:`${o*.04}s`},children:[f.jsx("div",{className:"book-spine"}),f.jsx("div",{className:"book-pages-edge"})]},`f-${o}`);const l=r.data,d=l.locked,u=tg[r.index%tg.length],p=l.title.length>14?l.title.slice(0,12)+"...":l.title;return f.jsxs("div",{className:`book ${d?"book--locked":"book--available"}`,style:{"--book-color":d?"#1e1e1e":u.color,"--book-color-dark":d?"#0a0a0a":u.dark,"--book-width":"30px","--book-height":"132px",animationDelay:`${o*.04}s`},onClick:()=>e(l),children:[f.jsx("div",{className:"book-spine",children:d?f.jsx("span",{className:"book-lock",children:"🔒"}):f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"book-enchant",children:"✦"}),f.jsx("span",{className:"book-spine-title",children:p}),f.jsx("span",{className:"book-enchant",children:"✦"})]})}),f.jsx("div",{className:"book-pages-edge"}),!d&&f.jsx("div",{className:"book-tooltip",children:l.title})]},l.id)}),n&&n.length>0&&f.jsx("div",{className:"shelf-deco",style:{marginLeft:"auto"},children:n.map((r,o)=>f.jsx(XE,{item:r,index:o},o))})]}),f.jsx("div",{className:"shelf-plank"})]})}const qE=[{left:"12%",top:"65%",size:2,dur:"9s",delay:"0s"},{left:"28%",top:"80%",size:1.5,dur:"12s",delay:"2.5s"},{left:"44%",top:"70%",size:2.5,dur:"10s",delay:"1.2s"},{left:"58%",top:"75%",size:1.5,dur:"14s",delay:"0.8s"},{left:"71%",top:"68%",size:2,dur:"11s",delay:"3.5s"},{left:"85%",top:"78%",size:1.5,dur:"13s",delay:"1.8s"},{left:"20%",top:"55%",size:1,dur:"16s",delay:"4.1s"},{left:"65%",top:"60%",size:1,dur:"15s",delay:"2.2s"},{left:"38%",top:"85%",size:2,dur:"10s",delay:"5.0s"},{left:"52%",top:"58%",size:1.5,dur:"12s",delay:"0.4s"}];function $E({chapter:s}){const[e,n]=Ke.useState(null),r=g=>{g.locked||n(g)};if(s.loreEntries.length===0)return f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Lore Catalogue"}),f.jsxs("div",{className:"trailer-placeholder",style:{aspectRatio:"3/1"},children:[f.jsx("span",{style:{fontSize:"1.5rem",opacity:.4},children:"📖"}),f.jsx("span",{children:"No lore entries yet"})]})]});const o=Math.ceil(s.loreEntries.length/2),l=s.loreEntries.slice(0,o),d=s.loreEntries.slice(o),u=ng(l,0),p=d.length>0?ng(d,4):null;return f.jsxs("div",{children:[f.jsx("h2",{className:"section-heading",style:{textAlign:"left",marginBottom:"1.5rem"},children:"Lore Catalogue"}),f.jsx("p",{className:"bookshelf-hint",children:"✦ Select an enchanted tome to unveil its secrets ✦"}),f.jsxs("div",{className:"library",children:[f.jsx("div",{className:"library-wall"}),f.jsx("div",{className:"library-dust","aria-hidden":"true",children:qE.map((g,_)=>f.jsx("div",{className:"library-dust-mote",style:{left:g.left,top:g.top,width:g.size+"px",height:g.size+"px",animationDuration:g.dur,animationDelay:g.delay}},_))}),f.jsxs("div",{className:"library-torch library-torch--left",children:[f.jsx("div",{className:"library-torch-flame",children:"🔥"}),f.jsx("div",{className:"library-torch-glow"}),f.jsx("div",{className:"library-torch-bracket"})]}),f.jsxs("div",{className:"library-torch library-torch--right",children:[f.jsx("div",{className:"library-torch-flame",children:"🔥"}),f.jsx("div",{className:"library-torch-glow"}),f.jsx("div",{className:"library-torch-bracket"})]}),f.jsxs("div",{className:"bookcase",children:[f.jsx("div",{className:"bookcase-crown",children:f.jsx("div",{className:"bookcase-crown-rune",children:"✦ ◆ ✦"})}),f.jsx(ig,{items:u,onSelect:r,decoItems:[{type:"candle"},{type:"bottle",color:"#00e8d4"}]}),p&&f.jsx(ig,{items:p,onSelect:r,decoItems:[{type:"orb",color:"#b044ff"},{type:"bottle",color:"#ff6040"}]}),f.jsx("div",{className:"bookcase-base"})]})]}),e&&f.jsx("div",{className:"book-reader-overlay",onClick:()=>n(null),children:f.jsx("div",{className:"open-book-wrap",onClick:g=>g.stopPropagation(),children:f.jsxs("div",{className:"open-book",children:[f.jsxs("div",{className:"book-page-left",children:[f.jsx("div",{className:"left-page-ornament",children:f.jsx("div",{className:"left-page-ornament-line",children:f.jsx("span",{className:"left-page-ornament-symbol",children:"❧"})})}),f.jsxs("p",{className:"left-page-chapter-label",children:[s.subtitle," — ",s.title]}),f.jsx("span",{className:"left-page-category",children:e.category}),f.jsx("h2",{className:"left-page-title",children:e.title}),f.jsx("div",{className:"left-page-divider",children:f.jsx("span",{className:"left-page-divider-symbol",children:"✦"})}),f.jsx("p",{className:"left-page-flavour",children:"From the archives of Enigma, recovered beyond the veil of the Void. These records remain as written — unaltered, unabridged."}),f.jsx("div",{className:"left-page-footer",children:f.jsx("span",{children:"Enigma · Beyond the Void"})})]}),f.jsx("div",{className:"book-binding"}),f.jsx("div",{className:"book-page-right",children:f.jsxs("div",{className:"right-page-inner",children:[f.jsxs("div",{className:"right-page-header",children:[f.jsxs("span",{className:"right-page-running-title",children:[e.category," · ",e.title]}),f.jsx("button",{className:"book-close-btn",onClick:()=>n(null),children:"✕"})]}),f.jsxs("div",{className:"right-page-content",children:[f.jsx("p",{className:"right-page-drop-cap",children:e.content}),f.jsx("div",{className:"right-page-divider-line",children:f.jsx("span",{children:"✦"})})]}),f.jsxs("div",{className:"right-page-footer",children:[f.jsx("span",{children:"Recovered from the archives"}),f.jsx("span",{className:"right-page-page-num",children:"I"})]})]})})]})})})]})}function YE(s){if(!s||!s.startsWith("#"))return[111,0,255];const e=s.replace("#","");return e.length===3?[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16)]:[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function KE({color:s}){const e=Ke.useRef(null);return Ke.useEffect(()=>{const n=e.current;if(!n)return;const r=n.getContext("2d"),[o,l,d]=YE(s),u=()=>{n.width=n.offsetWidth||1100,n.height=n.offsetHeight||600};u();const p=new ResizeObserver(u);p.observe(n.parentElement||n);const g=Array.from({length:5},(v,D)=>({x:.15+D/5*.75,y:.3+Math.random()*.5,radius:Math.random()*.28+.18,alpha:Math.random()*.035+.018,vx:(Math.random()-.5)*8e-5,vy:(Math.random()-.5)*6e-5,phase:Math.random()*Math.PI*2,speed:Math.random()*.004+.002})),S=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.1+.3,vx:(Math.random()-.5)*12e-5,vy:-(Math.random()*18e-5+6e-5),alpha:Math.random()*.28+.06,life:Math.random(),decay:Math.random()*.0018+8e-4})),y=6,M=Array.from({length:y},(v,D)=>({angle:D/y*Math.PI*2,width:Math.random()*.06+.025,alpha:Math.random()*.028+.01,length:Math.random()*.5+.7}));let A=0,T;const x=()=>{const v=n.width||1100,D=n.height||600,w=Math.sqrt(v*v+D*D);r.clearRect(0,0,v,D),A+=15e-5;const b=v*.5,H=D*-.1;r.save(),r.globalCompositeOperation="screen",M.forEach(L=>{const I=L.angle+A,j=I-L.width*.5,P=I+L.width*.5,R=w*L.length,z=b+Math.cos(j)*R,Y=H+Math.sin(j)*R,q=b+Math.cos(P)*R,ae=H+Math.sin(P)*R,le=r.createLinearGradient(b,H,b+Math.cos(I)*R*.6,H+Math.sin(I)*R*.6);le.addColorStop(0,`rgba(${o},${l},${d},${L.alpha*1.6})`),le.addColorStop(.4,`rgba(${o},${l},${d},${L.alpha})`),le.addColorStop(1,`rgba(${o},${l},${d},0)`),r.beginPath(),r.moveTo(b,H),r.lineTo(z,Y),r.lineTo(q,ae),r.closePath(),r.fillStyle=le,r.fill()}),r.restore(),g.forEach(L=>{L.phase+=L.speed,L.x+=L.vx,L.y+=L.vy,L.x<-L.radius&&(L.x=1+L.radius),L.x>1+L.radius&&(L.x=-L.radius),L.y<-L.radius&&(L.y=1+L.radius),L.y>1+L.radius&&(L.y=-L.radius);const I=L.x*v,j=L.y*D,P=L.radius*w,R=L.alpha*(.65+.35*Math.sin(L.phase)),z=r.createRadialGradient(I,j,0,I,j,P);z.addColorStop(0,`rgba(${o},${l},${d},${R})`),z.addColorStop(.45,`rgba(${o},${l},${d},${R*.35})`),z.addColorStop(1,`rgba(${o},${l},${d},0)`),r.beginPath(),r.arc(I,j,P,0,Math.PI*2),r.fillStyle=z,r.fill()}),S.forEach(L=>{L.x+=L.vx,L.y+=L.vy,L.life+=L.decay,(L.y<-.02||L.life>1)&&(L.x=Math.random(),L.y=1.02,L.life=0,L.alpha=Math.random()*.28+.06);const I=L.x*v,j=L.y*D,P=Math.sin(L.life*Math.PI),R=L.alpha*P;if(R<.01)return;const z=r.createRadialGradient(I,j,0,I,j,L.r*3.5);z.addColorStop(0,`rgba(${o},${l},${d},${R*.5})`),z.addColorStop(1,`rgba(${o},${l},${d},0)`),r.beginPath(),r.arc(I,j,L.r*3.5,0,Math.PI*2),r.fillStyle=z,r.fill(),r.beginPath(),r.arc(I,j,L.r,0,Math.PI*2),r.fillStyle=`rgba(${o},${l},${d},${R})`,r.fill()}),T=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(T),p.disconnect()}},[s]),f.jsx("canvas",{ref:e,style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",borderRadius:"inherit"}})}const ZE=[{id:"info",label:"Info",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})},{id:"trailer",label:"Trailer",icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})},{id:"screenshots",label:"Shots",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),f.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),f.jsx("polyline",{points:"21 15 16 10 5 21"})]})},{id:"armor",label:"Armor",icon:f.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{id:"mobs",label:"Enemies",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"9",cy:"7",r:"4"}),f.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),f.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"lore",label:"Lore",icon:f.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),f.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]})}],QE={info:s=>f.jsx(v_,{chapter:s}),trailer:s=>f.jsx(__,{chapter:s}),screenshots:s=>f.jsx(x_,{chapter:s}),armor:s=>f.jsx(BE,{chapter:s}),mobs:s=>f.jsx(WE,{chapter:s}),lore:s=>f.jsx($E,{chapter:s})};function JE({chapter:s,onClose:e}){const[n,r]=Ke.useState("info"),o=Ke.useRef(null);return f.jsx("div",{className:"cv-overlay",ref:o,onClick:l=>{l.target===o.current&&e()},children:f.jsxs("div",{className:"cv-panel",style:{"--ch-color":s.color,"--ch-accent":s.accentColor},children:[f.jsx(KE,{color:s.color}),f.jsx("div",{className:"cv-border-glow"}),f.jsxs("div",{className:"cv-hero",children:[f.jsx("img",{src:s.image,alt:s.title}),f.jsx("div",{className:"cv-hero-overlay"}),f.jsx("div",{className:"cv-hero-scan"}),f.jsx("div",{className:"cv-roman",children:s.number}),f.jsx("button",{className:"cv-close-btn",onClick:e,"aria-label":"Close",children:"✕"}),f.jsxs("div",{className:"cv-hero-text",children:[f.jsx("span",{className:"cv-subtitle",children:s.subtitle}),f.jsx("h2",{className:"cv-title",children:s.title})]})]}),f.jsxs("div",{className:"cv-body",children:[f.jsx("nav",{className:"cv-sidebar",children:ZE.map(l=>f.jsxs("button",{className:`cv-sidebar-btn${n===l.id?" active":""}`,onClick:()=>r(l.id),title:l.label,children:[l.icon,f.jsx("span",{children:l.label})]},l.id))}),f.jsx("div",{className:"cv-content",children:QE[n]?.(s)},n)]})]})})}function ew(){const s=Ke.useRef(null);return Ke.useEffect(()=>{const e=s.current;if(!e)return;const n=e.getContext("2d");let r=window.innerWidth,o=window.innerHeight;const l=()=>{r=window.innerWidth,o=window.innerHeight,e.width=r,e.height=o};l(),window.addEventListener("resize",l);const d=[[120,50,255],[80,0,200],[60,120,255],[180,60,255],[220,80,255]],u=()=>d[Math.floor(Math.random()*d.length)],g=Array.from({length:90},()=>{const[w,b,H]=u();return{x:Math.random()*r,y:Math.random()*o,r:Math.random()*1.6+.3,vx:(Math.random()-.5)*.14,vy:(Math.random()-.5)*.1,alpha:Math.random()*.55+.15,pulse:Math.random()*Math.PI*2,cr:w,cg:b,cb:H}}),S=Array.from({length:5},()=>{const[w,b,H]=u();return{x:Math.random()*r,y:Math.random()*o,radius:Math.random()*200+120,alpha:Math.random()*.04+.015,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.04,cr:w,cg:b,cb:H}}),y=2,M=[],A=()=>{if(M.length>=y)return;const w=Math.random()<.5,[b,H,L]=u();M.push({x:w?Math.random()*r:-40,y:w?-40:Math.random()*o*.6,vx:Math.random()*2.5+1.5,vy:w?Math.random()*1.5+.8:(Math.random()-.5)*.5,len:Math.random()*80+60,alpha:Math.random()*.5+.3,cr:b,cg:H,cb:L,life:0})},T=140;let x=0,v;const D=()=>{x++,n.clearRect(0,0,r,o),S.forEach(w=>{w.x+=w.vx,w.y+=w.vy,w.x<-w.radius&&(w.x=r+w.radius),w.x>r+w.radius&&(w.x=-w.radius),w.y<-w.radius&&(w.y=o+w.radius),w.y>o+w.radius&&(w.y=-w.radius);const b=n.createRadialGradient(w.x,w.y,0,w.x,w.y,w.radius);b.addColorStop(0,`rgba(${w.cr},${w.cg},${w.cb},${w.alpha})`),b.addColorStop(1,`rgba(${w.cr},${w.cg},${w.cb},0)`),n.beginPath(),n.arc(w.x,w.y,w.radius,0,Math.PI*2),n.fillStyle=b,n.fill()});for(let w=0;w<g.length;w++)for(let b=w+1;b<g.length;b++){const H=g[w],L=g[b],I=H.x-L.x,j=H.y-L.y,P=Math.sqrt(I*I+j*j);if(P<T){const R=(1-P/T)*.12;n.beginPath(),n.moveTo(H.x,H.y),n.lineTo(L.x,L.y),n.strokeStyle=`rgba(${H.cr},${H.cg},${H.cb},${R})`,n.lineWidth=.5,n.stroke()}}g.forEach(w=>{w.x+=w.vx,w.y+=w.vy,w.pulse+=.018,w.x<-5&&(w.x=r+5),w.x>r+5&&(w.x=-5),w.y<-5&&(w.y=o+5),w.y>o+5&&(w.y=-5);const b=.75+.25*Math.sin(w.pulse),H=w.alpha*b,L=n.createRadialGradient(w.x,w.y,0,w.x,w.y,w.r*3.5);L.addColorStop(0,`rgba(${w.cr},${w.cg},${w.cb},${H*.5})`),L.addColorStop(1,`rgba(${w.cr},${w.cg},${w.cb},0)`),n.beginPath(),n.arc(w.x,w.y,w.r*3.5,0,Math.PI*2),n.fillStyle=L,n.fill(),n.beginPath(),n.arc(w.x,w.y,w.r,0,Math.PI*2),n.fillStyle=`rgba(${w.cr},${w.cg},${w.cb},${H})`,n.fill()}),x%280===0&&A();for(let w=M.length-1;w>=0;w--){const b=M[w];if(b.x+=b.vx,b.y+=b.vy,b.life+=.012,b.x>r+100||b.y>o+100||b.life>1){M.splice(w,1);continue}const H=b.alpha*Math.sin(b.life*Math.PI),L=b.x-b.vx/Math.hypot(b.vx,b.vy)*b.len,I=b.y-b.vy/Math.hypot(b.vx,b.vy)*b.len,j=n.createLinearGradient(L,I,b.x,b.y);j.addColorStop(0,`rgba(${b.cr},${b.cg},${b.cb},0)`),j.addColorStop(1,`rgba(${b.cr},${b.cg},${b.cb},${H})`),n.beginPath(),n.moveTo(L,I),n.lineTo(b.x,b.y),n.strokeStyle=j,n.lineWidth=1.5,n.stroke(),n.beginPath(),n.arc(b.x,b.y,2.5,0,Math.PI*2),n.fillStyle=`rgba(${b.cr},${b.cg},${b.cb},${H})`,n.fill()}v=requestAnimationFrame(D)};return D(),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",l)}},[]),f.jsx("canvas",{ref:s,id:"particleCanvas",style:{position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})}const rg=12,tw=Array.from({length:rg},(s,e)=>({angle:360/rg*e,delay:e*.018,width:e%3===0?3:2}));function nw({phase:s}){return f.jsxs("div",{className:`void-rift void-rift--${s}`,children:[f.jsx("div",{className:"vr-bg"}),f.jsx("div",{className:"vr-flash"}),f.jsx("div",{className:"vr-core"}),tw.map((e,n)=>f.jsx("div",{className:"vr-beam",style:{"--angle":`${e.angle}deg`,"--delay":`${e.delay}s`,"--width":`${e.width}px`}},n)),f.jsx("div",{className:"vr-ring vr-ring--1"}),f.jsx("div",{className:"vr-ring vr-ring--2"}),f.jsx("div",{className:"vr-ring vr-ring--3"}),f.jsx("div",{className:"vr-ring vr-ring--4"}),f.jsxs("div",{className:"vr-cracks",children:[f.jsx("div",{className:"vr-crack vr-crack--a"}),f.jsx("div",{className:"vr-crack vr-crack--b"}),f.jsx("div",{className:"vr-crack vr-crack--c"}),f.jsx("div",{className:"vr-crack vr-crack--d"})]})]})}function iw(){const[s,e]=Ke.useState("loading"),[n,r]=Ke.useState("home"),[o,l]=Uv(),{openChapter:d,openModal:u,closeModal:p}=Bv(),g=u_(n,{onExplore:()=>r("chapters"),onOpenChapter:u,settings:o,onSettingsChange:l}),_=()=>{e("rift"),setTimeout(()=>e("reveal"),700),setTimeout(()=>e("done"),1850)};return f.jsxs(f.Fragment,{children:[s==="loading"&&f.jsx(p_,{onComplete:_}),(s==="rift"||s==="reveal")&&f.jsx(nw,{phase:s}),f.jsxs("div",{className:`app-main app-main--${s}`,children:[o.particles&&f.jsx(ew,{}),f.jsx(g_,{activeTab:n,onTabChange:r,inChapterView:!!d,onBackFromChapter:p,children:g}),d&&f.jsx(JE,{chapter:d,onClose:p})]})]})}Lv.createRoot(document.getElementById("root")).render(f.jsx(Ke.StrictMode,{children:f.jsx(iw,{})}));
