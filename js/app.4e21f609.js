(function(e){function n(n){for(var r,a,o=n[0],i=n[1],d=n[2],h=0,s=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&s.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(s.length)s.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-21bf94a0":"8ce53657","chunk-0bc2de6d":"3fd65418","chunk-54e1bd92":"d25d9982","chunk-085aa29a":"f7b6ead6","chunk-1addba05":"d558f013","chunk-44bbe812":"78beaf41","chunk-b958a178":"8b693b1e","chunk-6ab21f84":"fc76402e","chunk-0ad80b5b":"c65a9204","chunk-3a871beb":"7475ac8e","chunk-9df58312":"266881d6","chunk-91d9b9d8":"e7f44a67","chunk-0bd2b308":"4fce40fb","chunk-d8364006":"9572b499","chunk-2d0e5e97":"7f48eb61","chunk-30f9671e":"7510acfc","chunk-578b4bf4":"80d524ef","chunk-64800d43":"96bc6231","chunk-6e1b3d46":"acd7e805","chunk-f518a18a":"6284a48a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0bc2de6d":1,"chunk-54e1bd92":1,"chunk-085aa29a":1,"chunk-1addba05":1,"chunk-44bbe812":1,"chunk-b958a178":1,"chunk-6ab21f84":1,"chunk-0ad80b5b":1,"chunk-3a871beb":1,"chunk-9df58312":1,"chunk-91d9b9d8":1,"chunk-0bd2b308":1,"chunk-d8364006":1,"chunk-30f9671e":1,"chunk-578b4bf4":1,"chunk-64800d43":1,"chunk-6e1b3d46":1,"chunk-f518a18a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-21bf94a0":"31d6cfe0","chunk-0bc2de6d":"325c420d","chunk-54e1bd92":"762a8227","chunk-085aa29a":"fd4f8654","chunk-1addba05":"f60e4fd1","chunk-44bbe812":"f532a6b7","chunk-b958a178":"0222362a","chunk-6ab21f84":"27cfefd5","chunk-0ad80b5b":"70bdfbac","chunk-3a871beb":"21b37511","chunk-9df58312":"09762545","chunk-91d9b9d8":"12fc1377","chunk-0bd2b308":"35bceb71","chunk-d8364006":"7ac8bcc1","chunk-2d0e5e97":"31d6cfe0","chunk-30f9671e":"25209693","chunk-578b4bf4":"7aa2825b","chunk-64800d43":"adf53397","chunk-6e1b3d46":"6ad06b0e","chunk-f518a18a":"975a5173"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var d=c[o],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===r||h===u))return n()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){d=s[o],h=d.getAttribute("data-href");if(h===r||h===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),t(c)},f.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var s=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}u[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/twitter-front-end-vue/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var s=0;s<d.length;s++)n(d[s]);var f=h;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},1602:function(e,n,t){"use strict";var r=t("2fa3"),a=function(){return localStorage.getItem("token")};n["a"]={getUser:function(e){var n=e.userId;return r["b"].get("users/".concat(n),{headers:{Authorization:"Bearer ".concat(a())}})},getCurrentUser:function(){return r["b"].get("users/get-current-user",{headers:{Authorization:"Bearer ".concat(a())}})},putUser:function(e){var n=e.userId,t=e.JSON_data;return console.log("api-JSON_data:",t),r["b"].put("users/".concat(n,"/setting"),t,{headers:{Authorization:"Bearer ".concat(a())}})}}},"2fa3":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return d}));var r=t("bc3a"),a=t.n(r),u=t("3d20"),c=t.n(u),o="https://tranquil-crag-64775.herokuapp.com/api/",i=a.a.create({baseURL:o}),d=c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],c=(t("034f"),t("2877")),o={},i=Object(c["a"])(o,a,u,!1,null,null,null),d=i.exports,h=t("1da1"),s=(t("96cf"),t("d3b7"),t("3ca3"),t("ddb0"),t("caad"),t("b0c0"),t("2532"),t("8c4f")),f=t("5530"),l=t("2f62"),b=t("1602");r["a"].use(l["a"]);var p=new l["a"].Store({state:{currentUser:{id:-1,name:"",email:"",account:"",avatar:"",role:""},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,n){e.currentUser=Object(f["a"])(Object(f["a"])({},e.currentUser),n),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,localStorage.removeItem("token"),e.token=""}},actions:{fetchCurrentUser:function(e){return Object(h["a"])(regeneratorRuntime.mark((function n(){var t,r,a,u,c,o,i,d,h,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.prev=1,n.next=4,b["a"].getCurrentUser();case 4:return r=n.sent,a=r.data,u=a.id,c=a.name,o=a.email,i=a.avatar,d=a.isAuthenticated,h=a.account,s=a.role,t("setCurrentUser",{id:u,name:c,email:o,avatar:i,role:s,account:h,isAuthenticated:d}),n.abrupt("return",!0);case 10:n.prev=10,n.t0=n["catch"](1),console.log("error",n.t0),console.error("can not fetch user information");case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()}},modules:{}});r["a"].use(s["a"]);var k=[{path:"/",name:"root",redirect:{name:"Login"}},{path:"/login",name:"Login",component:function(){return t.e("chunk-6e1b3d46").then(t.bind(null,"a55b"))}},{path:"/regist",name:"Regist",component:function(){return t.e("chunk-64800d43").then(t.bind(null,"879c"))}},{path:"/main",name:"Main",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-6ab21f84"),t.e("chunk-9df58312"),t.e("chunk-91d9b9d8")]).then(t.bind(null,"cd56"))}},{path:"/main/reply/:id",name:"Reply",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-9df58312"),t.e("chunk-0bd2b308")]).then(t.bind(null,"b0c6"))}},{path:"/setting",name:"Setting",component:function(){return t.e("chunk-30f9671e").then(t.bind(null,"4ef5"))}},{path:"/adminlogin",name:"AdminLogin",component:function(){return t.e("chunk-f518a18a").then(t.bind(null,"23b1"))}},{path:"/adminMain",name:"AdminMain",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-d8364006")]).then(t.bind(null,"4c90"))}},{path:"/adminUser",name:"AdminUser",component:function(){return t.e("chunk-578b4bf4").then(t.bind(null,"6e65"))}},{path:"/publicMessage",name:"publicMessage",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-54e1bd92"),t.e("chunk-085aa29a")]).then(t.bind(null,"5d05"))}},{path:"/user/:id/follower",name:"follower",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-54e1bd92"),t.e("chunk-44bbe812")]).then(t.bind(null,"7384"))}},{path:"/user/:id/following",name:"following",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-54e1bd92"),t.e("chunk-1addba05")]).then(t.bind(null,"cc95"))}},{path:"/user/:id",name:"user",redirect:"/user/:id/tweetList",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-54e1bd92"),t.e("chunk-b958a178")]).then(t.bind(null,"1511"))},children:[{path:"tweetList",name:"tweetList",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-6ab21f84"),t.e("chunk-0ad80b5b")]).then(t.bind(null,"9398"))}},{path:"replies",name:"replies",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-0bc2de6d")]).then(t.bind(null,"1904"))}},{path:"likes",name:"likes",component:function(){return Promise.all([t.e("chunk-21bf94a0"),t.e("chunk-6ab21f84"),t.e("chunk-3a871beb")]).then(t.bind(null,"c03c"))}}]},{path:"*",name:"Not-found",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}}],m=new s["a"]({linkActiveClass:"active",routes:k});m.beforeEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(n,t,r){var a,u,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("token"),u=p.state.token,c=p.state.isAuthenticated,!a||a===u){e.next=7;break}return e.next=6,p.dispatch("fetchCurrentUser");case 6:c=e.sent;case 7:if(o=["Regist","Login","AdminLogin"],c||o.includes(n.name)){e.next=11;break}return r("/login"),e.abrupt("return");case 11:if(!c||!o.includes(n.name)){e.next=14;break}return r("/main"),e.abrupt("return");case 14:r();case 15:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}());var g=m,v=(t("3357"),t("bc3a")),w=t.n(v),y=t("5132"),P=t.n(y),A=t("8e27"),O=t.n(A);r["a"].prototype.$axios=w.a,r["a"].config.productionTip=!1,r["a"].use(new P.a({debug:!0,connection:O()("https://tranquil-crag-64775.herokuapp.com"),vuex:{store:p,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),new r["a"]({router:g,store:p,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.4e21f609.js.map