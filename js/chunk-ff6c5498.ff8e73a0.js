(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff6c5498"],{"4c90":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"main-container"},[a("AdminMenu"),a("main",{staticClass:"content"},[t._m(0),a("div",{staticClass:"admin-tweets-wrapper"},[t.isLoading?a("Spinner"):t._l(t.tweets,(function(e){return a("AdminTweets",{key:e.id,attrs:{tweet:e},on:{"after-delete-tweet":t.afterDeleteTweet}})}))],2)])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-header"},[a("span",{staticClass:"title"},[t._v("推文清單")])])}],i=a("1da1"),r=(a("4de4"),a("96cf"),a("ddfd")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-tweet"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"tweet-wrapper"},[n("div",{staticClass:"icon-wrapper"},[n("img",{staticClass:"user-icon",attrs:{src:t.tweet.User.avatar,alt:""}})]),n("div",{staticClass:"admin-txt-wrapper"},[n("div",{staticClass:"tweet-info"},[n("span",{staticClass:"tweet-name"},[t._v(t._s(t.tweet.User.name))]),n("span",{staticClass:"tweet-account"},[t._v("＠"+t._s(t.tweet.User.account))]),n("span",{staticClass:"time"},[t._v("．"+t._s(t._f("fromNow")(t.tweet.updatedAt)))])]),n("div",{staticClass:"tweet-txt"},[t._v(" "+t._s(t.tweet.description)+" ")])])])]),n("div",{staticClass:"close-wrapper",on:{click:function(e){return t.clickDelete(t.tweet.id)}}},[n("img",{staticClass:"close-icon",attrs:{src:a("f045"),alt:""}})])])},l=[],o=a("2708"),u=a("be6c"),d=a("2fa3"),m={name:"adminTweets",mixins:[o["b"]],props:{tweet:{type:Object,required:!0}},methods:{clickDelete:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,a.prev=1,a.next=4,u["a"].adminDeleteTweet({tweetId:n});case 4:if(s=a.sent,200===s.status){a.next=7;break}throw new Error;case 7:d["a"].fire({icon:"success",title:"刪除成功!"}),e.$emit("after-delete-tweet",n),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](1),d["a"].fire({icon:"error",title:"無法刪除推文,請稍後"});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})))()}}},w=m,f=(a("6a37"),a("2877")),p=Object(f["a"])(w,c,l,!1,null,"411fc286",null),A=p.exports,v=a("2375"),h={name:"adminMain",components:{AdminMenu:r["a"],AdminTweets:A,Spinner:v["a"]},data:function(){return{tweets:[],isLoading:!0}},created:function(){this.fetchAdminTweets()},methods:{fetchAdminTweets:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].adminGetTweets();case 3:a=e.sent,n=a.data,t.tweets=n.tweets,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"無法取得後台推文"}),t.isLoading=!1;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},afterDeleteTweet:function(t){this.tweets=this.tweets.filter((function(e){return e.id!==t}))}}},C=h,g=(a("a736"),Object(f["a"])(C,n,s,!1,null,"bf2883f8",null));e["default"]=g.exports},"58b9":function(t,e,a){},"6a37":function(t,e,a){"use strict";a("58b9")},7831:function(t,e,a){"use strict";a("a17f")},a17f:function(t,e,a){},a736:function(t,e,a){"use strict";a("aba0")},aba0:function(t,e,a){},be6c:function(t,e,a){"use strict";var n=a("2fa3"),s=function(){return localStorage.getItem("token")};e["a"]={adminlogIn:function(t){var e=t.email,a=t.password;return n["b"].post("admin/login",{email:e,password:a})},adminGetTweets:function(){return n["b"].get("admin/tweets",{headers:{Authorization:"Bearer ".concat(s())}})},adminGetUsers:function(){return n["b"].get("admin/users",{headers:{Authorization:"Bearer ".concat(s())}})},adminDeleteTweet:function(t){var e=t.tweetId;return n["b"].delete("admin/tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(s())}})}}},ddfd:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"menu"},[n("div",{staticClass:"logo-wrapper"},[n("router-link",{attrs:{to:"/adminMain"}},[n("img",{staticClass:"logo",attrs:{src:a("a896"),alt:""}})])],1),n("nav",{staticClass:"menu-nav"},[n("ul",{staticClass:"menu-nav-wrapper"},[n("li",{staticClass:"menu-nav-link"},[n("router-link",{staticClass:"menu-link",attrs:{to:"/adminMain"}},[n("i",{staticClass:"bx bxs-home-circle"}),n("span",{staticClass:"menu-link-title"},[t._v(" 推文清單 ")])])],1),n("li",{staticClass:"menu-nav-link"},[n("router-link",{staticClass:"menu-link",attrs:{to:"/adminUser"}},[n("i",{staticClass:"bx bx-user"}),n("span",{staticClass:"menu-link-title"},[t._v(" 使用者列表 ")])])],1)]),n("ul",{staticClass:"menu-nav-wrapper"},[n("li",{staticClass:"menu-nav-link",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.clickLogout.apply(null,arguments)}}},[n("router-link",{staticClass:"menu-link",attrs:{to:"/#"}},[n("i",{staticClass:"bx bx-log-out"}),n("span",{staticClass:"menu-link-title"},[t._v(" 登出 ")])])],1)])])])},s=[],i={methods:{clickLogout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}}},r=i,c=(a("7831"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,"3eb731ad",null);e["a"]=l.exports},f045:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgBxdc7UsMwEAbgXekCOQJ3gBYKuEBukFCQnobh0aQhUFJDgTkIVGlh4AZwAy6AhTYeMUJYj5XXw1949HD8RR57bQP8U5A2i5PVrEW4sZ1PVLC8vTp/gBHiO4oGDOLSdia2uWVaaBZnqxkIh1CD0DhHdcNm4u8kjTvUH+tgNMfhzlJ4H0rRtHlZP71u7+5/2H8w/a3DdGfv4P15/fgGgqhd6KF2bWk8hd5dXzTaH5PCcyg1dTg3FC9Be+EheCkahWtwDpqEOTgX3UxBQY5OL+e2vN3/+bGCOXxR5eOhxXAK7z9qGqUkT7Wf6GmvQFlwEV6IUhQwgy2a6BzG58KwVhy9el0YFa4YzqJMvOiqTt2nHdZ/q6XeZLIrzhWH2vKqh6CuW4ProWgtriXQGlxLoVxcS6IcHKVRP6mnGo6F5vCfLwkYAaVsjuEKTQiHXxJSaAr/Bo/RdpzDP+IEAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-ff6c5498.ff8e73a0.js.map