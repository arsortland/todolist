(()=>{"use strict";var r={426:(r,e,n)=>{n.d(e,{Z:()=>c});var t=n(81),a=n.n(t),o=n(645),i=n.n(o)()(a());i.push([r.id,'html, body{\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 1fr 5fr;\r\n    grid-template-areas:\r\n    "topbar topbar"\r\n    "sidebar mainarea";\r\n}\r\n\r\n.topbar{\r\n    grid-area: topbar;\r\n    background-color: blue;\r\n}\r\n\r\n.sidebar{\r\n    grid-area: sidebar;\r\n    background-color: green;\r\n}\r\n\r\n.mainarea{\r\n    grid-area: mainarea;\r\n    background-color: rgb(146, 14, 14);\r\n}\r\n\r\n.sidebarbtn{\r\n    border-radius: 3px;\r\n    font-size: 2rem;\r\n    background-color: rgb(80, 78, 212);\r\n    border: none;\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n.sidebarbtn:hover{\r\n    background-color: rgb(85, 11, 11);\r\n}',""]);const c=i},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,a,o){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<r.length;d++){var u=[].concat(r[d]);t&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var o={},i=[],c=0;c<r.length;c++){var s=r[c],d=t.base?s[0]+t.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=a(f,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function a(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,a){var o=t(r=r||[],a=a||{});return function(r){r=r||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=t(r,a),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},e={};function n(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return r[t](o,o.exports,n),o.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),n.nc=void 0,(()=>{var r=n(379),e=n.n(r),t=n(795),a=n.n(t),o=n(569),i=n.n(o),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),p=n.n(l),f=n(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector(".mainarea");document.querySelector(".sidebar"),document.querySelector(".topbar"),(r=>{const e=document.createElement("div");e.classList.add(".projectname"),e.textContent=r;const n=document.createElement("button");n.classList.add("addnewtodobtn"),n.textContent="+",n.value=r,e.appendChild(n),m.appendChild(e)})("Inbox")})()})();