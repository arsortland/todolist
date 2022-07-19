(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,'html, body{\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 1fr 5fr;\r\n    grid-template-areas:\r\n    "topbar topbar"\r\n    "sidebar mainarea";\r\n}\r\n\r\n.topbar{\r\n    grid-area: topbar;\r\n    background-color: blue;\r\n}\r\n\r\n.sidebar{\r\n    grid-area: sidebar;\r\n    background-color: green;\r\n}\r\n\r\n.mainarea{\r\n    grid-area: mainarea;\r\n    background-color: rgb(146, 14, 14);\r\n}\r\n\r\n.aproject{\r\n    padding: 1rem;\r\n    font-size: 2rem;\r\n}',""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=t(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),d=n.n(u),l=n(589),p=n.n(l),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=[["General"]],h=((()=>{const e=document.querySelector(".newtodo");document.querySelector(".submittodo").addEventListener("click",(()=>{h(e.value),g()}))})(),e=>{v.push([e])}),g=()=>{const e=document.querySelector(".listexisting");e.textContent="";const r=document.createElement("form");e.appendChild(r);for(let e=0;e<v.length;e++){const n=document.createElement("div"),t=document.createElement("button");t.textContent=v[e][0],r.append(n,t)}};g()})()})();