!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuePagination=t():e.VuePagination=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);t.default=a.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("VuePagination",a.a)},function(e,t,n){"use strict";function a(e){n(2)}var r=n(8),i=n(9),s=n(7),o=a,u=s(r.a,i.a,!1,o,null,null);t.a=u.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(5)("05f3845d",a,!0)},function(e,t,n){t=e.exports=n(4)(!0),t.push([e.i,".pagination a.page-link:not(.disabled){cursor:pointer}","",{version:3,sources:["/workspace/projects/meteorlxy/vue-bs-pagination/src/components/VuePagination.vue"],names:[],mappings:"AACA,uCACE,cAAgB,CACjB",file:"VuePagination.vue",sourcesContent:["\n.pagination a.page-link:not(.disabled) {\n  cursor: pointer;\n}\n"],sourceRoot:""}])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=a(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function a(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var a=n(t,e);return t[2]?"@media "+t[2]+"{"+a+"}":a}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=l[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(i(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(h)return g;a.parentNode.removeChild(a)}if(v){var i=d++;a=p||(p=r()),t=s.bind(null,a,i,!1),n=s.bind(null,a,i,!0)}else a=r(),t=o.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function s(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function o(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(a&&e.setAttribute("media",a),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(6),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=c(e,t);return a(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],o=l[s.id];o.refs--,n.push(o)}t?(r=c(e,t),a(r)):r=[];for(var i=0;i<n.length;i++){var o=n[i];if(0===o.refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete l[o.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],s=i[0],o=i[1],u=i[2],c=i[3],l={id:e+":"+r,css:o,media:u,sourceMap:c};a[s]?a[s].parts.push(l):n.push(a[s]={id:s,parts:[l]})}return n}},function(e,t){e.exports=function(e,t,n,a,r,i){var s,o=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):a&&(l=a),l){var f=c.functional,p=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(e,t){return l.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:s,exports:o,options:c}}},function(e,t,n){"use strict";t.a={props:{value:{type:Number,default:1,validator:function(e){return e>0}},total:{type:Number,required:!0,validator:function(e){return e>0}},eachSide:{type:Number,default:1,validator:function(e){return e>=0}}},computed:{firstPage:function(){return 1},lastPage:function(){return this.total},onFirstPage:function(){return this.currentPage===this.firstPage},onLastPage:function(){return this.currentPage===this.lastPage},currentPage:function(){return this.value},paginators:function(){var e=[];if(this.firstPage<=this.lastPage)if(this.lastPage<2*this.eachSide+4)for(var t=this.firstPage;t<this.lastPage+1;++t)e.push({value:t,enable:!0});else if(this.currentPage-this.firstPage<this.eachSide+2){for(var n=this.firstPage;n<Math.max(2*this.eachSide+1,this.currentPage+this.eachSide+1);++n)e.push({value:n,enable:!0});e.push({value:"...",enable:!1}),e.push({value:this.lastPage,enable:!0})}else if(this.lastPage-this.currentPage<this.eachSide+2){e.push({value:this.firstPage,enable:!0}),e.push({value:"...",enable:!1});for(var a=Math.min(this.lastPage-2*this.eachSide+1,this.currentPage-this.eachSide);a<this.lastPage+1;++a)e.push({value:a,enable:!0})}else{e.push({value:this.firstPage,enable:!0}),e.push({value:"...",enable:!1});for(var r=this.currentPage-this.eachSide;r<this.currentPage+this.eachSide+1;++r)e.push({value:r,enable:!0});e.push({value:"...",enable:!1}),e.push({value:this.lastPage,enable:!0})}return e}},methods:{nextPage:function(){this.setPage(this.currentPage+1)},prevPage:function(){this.setPage(this.currentPage-1)},setPage:function(e){e<=this.lastPage&&e>=this.firstPage&&this.$emit("input",e)}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:{disabled:e.onFirstPage}},[n("a",{staticClass:"page-link",attrs:{rel:"prev","aria-label":"Previous"},on:{click:function(t){t.preventDefault(),e.prevPage(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),e._v(" "),e._l(e.paginators,function(t){return n("li",{staticClass:"page-item",class:{active:t.value===e.currentPage,disabled:!t.enable}},[n("a",{staticClass:"page-link",attrs:{disabled:!t.enable},on:{click:function(n){n.preventDefault(),e.setPage(t.value)}}},[n("span",[e._v(e._s(t.value))])])])}),e._v(" "),n("li",{staticClass:"page-item",class:{disabled:e.onLastPage}},[n("a",{staticClass:"page-link",attrs:{rel:"next","aria-label":"Next"},on:{click:function(t){t.preventDefault(),e.nextPage(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])],2)},r=[],i={render:a,staticRenderFns:r};t.a=i}])});
//# sourceMappingURL=vue-bs-pagination.js.map