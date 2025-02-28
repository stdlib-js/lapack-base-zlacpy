// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@v0.3.0-esm/index.mjs";function l(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function f(r,e){for(var t=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m=function(r){return c.exec(r).slice(1)};function d(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=f(w(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function p(r){var e=h(r),t="/"===_(r,-1);return(r=f(w(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function h(r){return"/"===r.charAt(0)}function v(){return p(w(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function b(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=d(r).substr(1),e=d(e).substr(1);for(var n=t(r.split("/")),s=t(e.split("/")),i=Math.min(n.length,s.length),o=i,a=0;a<i;a++)if(n[a]!==s[a]){o=a;break}var u=[];for(a=o;a<n.length;a++)u.push("..");return(u=u.concat(s.slice(o))).join("/")}function g(r){var e=m(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function j(r,e){var t=m(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function y(r){return m(r)[3]}var x={extname:y,basename:j,dirname:g,sep:"/",delimiter:":",relative:b,join:v,isAbsolute:h,normalize:p,resolve:d};function w(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var _="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},A=l(Object.freeze({__proto__:null,basename:j,default:x,delimiter:":",dirname:g,extname:y,isAbsolute:h,join:v,normalize:p,relative:b,resolve:d,sep:"/"}));function E(r,e,t,n,s,l,f,c,m,d,p){var h,v;return h=i(n,0),v=i(c,0),s*=2,l*=2,m*=2,d*=2,f*=2,p*=2,"upper"===r?function(r,e,t,n,s,i,a,l,f,c){var m,d,p,h,v,b;if(m=i,d=c,o([n,s])){for(h=0;h<r;h++){for(v=m+h*s,b=d+h*f,p=h;p<e;p++)a[b]=t[v],a[b+1]=t[v+1],v+=s,b+=f;m+=n,d+=l}return a}for(h=0;h<e;h++){for(b=d,v=m,p=0;p<=u(h,r-1);p++)a[b]=t[v],a[b+1]=t[v+1],v+=n,b+=l;m+=s,d+=f}}(e,t,h,s,l,f,v,m,d,p):"lower"===r?function(r,e,t,n,s,i,a,l,f,c){var m,d,p,h,v,b;if(m=i,d=c,o([n,s])){for(h=0;h<r;h++){for(v=m,b=d,p=0;p<=u(h,e-1);p++)a[b]=t[v],a[b+1]=t[v+1],v+=s,b+=f;m+=n,d+=l}return a}for(h=0;h<e;h++){for(v=m+h*n,b=d+h*l,p=h;p<r;p++)a[b]=t[v],a[b+1]=t[v+1],v+=n,b+=l;m+=s,d+=f}}(e,t,h,s,l,f,v,m,d,p):function(r,e,t,n,s,i,o,u,l,f){var c,m,d,p,h,v,b,g,j,y,x,w,_,A;for(h=(A=a([r,e],[n,s],[u,l])).sh,g=A.sx,j=A.sy,v=h[0],b=h[1],c=g[0],m=g[1]-v*g[0],d=j[0],p=j[1]-v*j[0],y=i,x=f,_=0;_<b;_++){for(w=0;w<v;w++)o[x]=t[y],o[x+1]=t[y+1],y+=c,x+=d;y+=m,x+=p}}(e,t,h,s,l,f,v,m,d,p),c}function O(r,e,t,i,o,a,u,l){var f,c,m,d;if(!n(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)f=1,c=a,m=1,d=l;else{if(a<i)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",i,a));if(l<i)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",i,l));f=a,c=1,m=l,d=1}return E(e,t,i,o,f,c,0,u,m,d,0)}t(O,"ndarray",(function(r,e,t,n,s,i,o,a,u,l,f){return E(r,e,t,n,s,i,o,a,u,l,f)}));var k,z=r((0,A.join)("/home/runner/work/lapack-base-zlacpy/lapack-base-zlacpy/lib","./native.js")),q=k=e(z)?O:z;const{ndarray:M}=k;export{q as default,M as ndarray};
//# sourceMappingURL=index.mjs.map
