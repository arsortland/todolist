(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),c=r.n(a)()(o());c.push([e.id,'html, body{\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 1fr 5fr;\r\n    grid-template-areas:\r\n    "topbar topbar"\r\n    "sidebar mainarea";\r\n}\r\n\r\n.topbar{\r\n    grid-area: topbar;\r\n    background-color: blue;\r\n}\r\n\r\n.sidebar{\r\n    grid-area: sidebar;\r\n    background-color: green;\r\n}\r\n\r\n.mainarea{\r\n    grid-area: mainarea;\r\n    background-color: rgb(146, 14, 14);\r\n}\r\n\r\n.aproject{\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}',""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);n&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=n.base?s[0]+n.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=r(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=i,t.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var s=n(e,o),u=0;u<a.length;u++){var d=r(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),c=r.n(a),i=r(565),s=r.n(i),u=r(216),d=r.n(u),l=r(589),p=r.n(l),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=[],h=((()=>{const e=document.querySelector(".makenew"),t=document.createElement("input"),r=document.createElement("button");t.setAttribute("type","text"),t.setAttribute("required",""),r.textContent="Add Project",t.classList.add("inputnew"),r.classList.add("submitnew"),e.appendChild(t),e.appendChild(r)})(),(()=>{const e=document.querySelector(".inputnew");document.querySelector(".submitnew").addEventListener("click",(()=>{v.push(e.value),h()}))})(),(()=>{const e=document.querySelector(".makenew");let t=document.createElement("div");t.textContent="General",e.appendChild(t)})(),()=>{const e=document.querySelector(".listexisting");e.textContent="";for(let t of v){let r=document.createElement("button");r.classList.add("aproject"),r.textContent=t,e.appendChild(r)}y()}),y=()=>{const e=document.querySelectorAll(".aproject"),t=document.querySelector(".mainarea");e.forEach((e=>{e.addEventListener("click",(()=>{console.log(e.innerHTML);const r=document.createElement("div");r.textContent=e.innerHTML,t.appendChild(r)}))}))};h()})()})();