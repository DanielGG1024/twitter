(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1addba05"],{"1b9e":function(e,t,r){},2375:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"bouncing-loader"},[r("div"),r("div"),r("div")])])}],a=(r("be95"),r("2877")),o={},i=Object(a["a"])(o,s,n,!1,null,"a6d74898",null);t["a"]=i.exports},2889:function(e,t,r){"use strict";r("f66c")},"3e69":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"center-column-header"}},[s("router-link",{attrs:{to:{name:"Main"}}},[s("img",{staticClass:"icon",attrs:{src:r("74c6"),alt:"arrow-icon"}})]),s("div",{staticClass:"header-info"},[s("div",{staticClass:"user-name"},[e._v(e._s(e.user.name))]),s("div",{staticClass:"user-tweets"},[e._v(e._s(e.user.tweetsCount)+" 推文")])])],1)},n=[],a={props:{user:{type:Object,reqiured:!0}}},o=a,i=(r("8174"),r("2877")),c=Object(i["a"])(o,s,n,!1,null,"0b646a42",null);t["a"]=c.exports},"3e6c":function(e,t,r){"use strict";r("1b9e")},"47ff":function(e,t,r){},"4cce":function(e,t,r){"use strict";var s=r("2fa3"),n=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return s["b"].get("/get-current-user",{headers:{Authorization:"Bearer ".concat(n())}})},get:function(e){var t=e.userId;return s["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(n())}})},update:function(e){var t=e.userId,r=e.formData;return s["b"].put("/users/".concat(t),r,{headers:{Authorization:"Bearer ".concat(n())}})},getTopUsers:function(){return s["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(n())}})},getUserTweets:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserReplies:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserLikes:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/likes"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserFollowers:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/followers"),{headers:{Authorization:"Bearer ".concat(n())}})},getUserFollowings:function(e){var t=e.userId;return s["b"].get("/users/".concat(t,"/followings"),{headers:{Authorization:"Bearer ".concat(n())}})}}},"74c6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},8174:function(e,t,r){"use strict";r("f797")},9556:function(e,t,r){},"99f5":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-follow-tab"}},[r("router-link",{attrs:{to:{name:"follower"}}},[r("div",{staticClass:"follower tab",class:{clicked:"follower"===this.$route.name}},[e._v("跟隨者")])]),r("router-link",{attrs:{to:{name:"following"}}},[r("div",{staticClass:"following tab",class:{clicked:"following"===this.$route.name}},[e._v("正在跟隨")])])],1)},n=[],a=(r("2889"),r("2877")),o={},i=Object(a["a"])(o,s,n,!1,null,"3472e1b4",null);t["a"]=i.exports},b12b:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popular"},[r("div",{staticClass:"popular-container"},[e._m(0),e._l(e.initialTopUsers,(function(t){return r("div",{key:t.id,staticClass:"popular-wrapper"},[r("div",{staticClass:"popular-user"},[r("router-link",{attrs:{to:{name:"user",params:{id:t.id}}}},[r("div",{staticClass:"user-icon-wrapper"},[r("img",{staticClass:"user-icon",attrs:{src:t.avatar,alt:""}})])]),r("div",{staticClass:"popular-txt"},[r("span",{staticClass:"popular-title"},[e._v(e._s(t.name))]),r("router-link",{staticClass:"popular-link",attrs:{to:{name:"user",params:{id:t.id}}}},[e._v("@"+e._s(t.account))])],1),r("div",{staticClass:"popular-follow"},[t.id!==e.currentUser.id?[t.isFollowed?r("button",{staticClass:"popular-follow-btn btn-active",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.deleteFollow(t)}}},[e._v(" 正在跟隨 ")]):r("button",{staticClass:"popular-follow-btn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),e.addFollow(t)}}},[e._v(" 跟隨 ")])]:e._e()],2)],1)])}))],2)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popular-title-wrapper"},[r("div",{staticClass:"title"},[e._v("Popular")])])}],a=r("5530"),o=r("1da1"),i=(r("96cf"),r("2fa3")),c=r("7482"),l=r("2f62"),u={name:"UserRightColumn",props:{initialTopUsers:{type:Array,required:!0}},data:function(){return{currentUserId:-1,users:"",isProcessing:!1}},methods:{deleteFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,s=e.id,r.next=5,c["a"].removeFollow({userId:s});case 5:if(n=r.sent,200===n.status){r.next=8;break}throw new Error;case 8:t.$emit("remove-follow-click",s),e.isFollowed=!1,t.isProcessing=!1,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),t.isProcessing=!1,i["a"].fire({icon:"error",title:"無法取消追蹤使用者,請稍後"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()},addFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.id,n='{\n        "id":"'.concat(s,'"\n      }'),a=JSON.parse(n),r.prev=3,t.isProcessing=!0,r.next=7,c["a"].addFollow({data_JSON:a});case 7:if(o=r.sent,200===o.status){r.next=10;break}throw new Error;case 10:e.isFollowed=!0,t.isProcessing=!1,t.$emit("add-follow-click",s),r.next=19;break;case 15:r.prev=15,r.t0=r["catch"](3),t.isProcessing=!1,i["a"].fire({icon:"error",title:"無法追蹤使用者,請稍後"});case 19:case"end":return r.stop()}}),r,null,[[3,15]])})))()}},computed:Object(a["a"])({},Object(l["b"])(["currentUser","isAuthenticated"]))},d=u,f=(r("3e6c"),r("2877")),p=Object(f["a"])(d,s,n,!1,null,"6fafd9ca",null);t["a"]=p.exports},be95:function(e,t,r){"use strict";r("47ff")},cc95:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"window demo"},[r("div",{staticClass:"user"},[r("UserLeftColumn",{attrs:{userId:e.userId,currentUserId:e.currentUserId}}),e.isLoading?r("Spinner",{staticClass:"user-spinner"}):r("div",{staticClass:"center-column scrollbar",attrs:{id:"center-column"}},[r("UserHeader",{attrs:{user:e.user}}),r("UserFollowTab"),r("div",{staticClass:"user-follower-list"},[r("div",{staticClass:"user-followers"},e._l(e.followings,(function(t){return r("div",{key:t.followingId,staticClass:"follower"},[r("div",{staticClass:"avatar"},[r("div",{staticClass:"avatar-img"},[r("img",{attrs:{src:e._f("emptyImage")(t.avatar),alt:"avatar"}})])]),r("div",{staticClass:"follower-main"},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"tag-name"},[e._v("@"+e._s(t.account))]),r("div",{staticClass:"description scrollbar"},[e._v(" "+e._s(t.introduction)+" ")])]),t.isFollowed?r("button",{staticClass:"follower-btn following",attrs:{disabled:e.isProcessing},on:{click:function(r){return e.removeFollow(t)}}},[e._v(" 正在跟隨 ")]):r("button",{staticClass:"follower-btn",attrs:{disabled:e.isProcessing},on:{click:function(r){return e.addFollow(t)}}},[e._v(" 跟隨 ")])])})),0)])],1),r("UserRightColumn",{attrs:{initialTopUsers:e.topUsers},on:{"add-follow-click":e.addFollowingUser,"remove-follow-click":e.removeFollowingUser}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.noLength,expression:"noLength === true"}],staticClass:"noLength"},[e._v(" 尚未跟隨任何人 ")])])},n=[],a=r("1da1"),o=r("5530"),i=(r("96cf"),r("a9e3"),r("d81d"),r("4de4"),r("232c")),c=r("b12b"),l=r("3e69"),u=r("99f5"),d=r("2375"),f=r("4cce"),p=r("7482"),v=r("2fa3"),w=r("2f62"),g=r("2708"),h={mixins:[g["b"],g["a"]],components:{UserLeftColumn:i["a"],UserRightColumn:c["a"],UserHeader:l["a"],UserFollowTab:u["a"],Spinner:d["a"]},data:function(){return{isLoading:!0,userId:Number(this.$route.params.id),currentUserId:-1,user:{},topUsers:[],followings:[],isProcessing:!1,noLength:!1}},created:function(){this.fetchFollowing(this.userId),this.fetchUserInfo(this.userId),this.fetchTopUsers()},computed:Object(o["a"])({},Object(w["b"])(["currentUser","isAuthenticated"])),beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchFollowing(s),this.userId=Number(s),r()},methods:{fetchFollowing:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,f["a"].getUserFollowings({userId:e});case 4:s=r.sent,n=s.data,t.followings=n,t.isLoading=!1,0===t.followings.length&&(t.noLength=!0),r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,11]])})))()},fetchUserInfo:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,f["a"].get({userId:e});case 4:s=r.sent,n=s.data,t.user=n,t.isLoading=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchTopUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getTopUser();case 3:r=t.sent,s=r.data,e.topUsers=s,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),v["a"].fire({icon:"warning",title:"無法取得前十"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},addFollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.followingId,n='{\n        "id":"'.concat(s,'"\n      }'),a=JSON.parse(n),r.prev=3,t.isProcessing=!0,r.next=7,p["a"].addFollow({data_JSON:a});case 7:o=r.sent,console.log("popular response",o),e.isFollowed=!0,t.topUsers.map((function(e){s===e.id&&s===e.id&&(e.isFollowed=!e.isFollowed)})),t.isProcessing=!1,r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](3),t.isProcessing=!1,v["a"].fire({icon:"error",title:"無法追蹤使用者,請稍後"});case 18:case"end":return r.stop()}}),r,null,[[3,14]])})))()},removeFollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.followingId,r.prev=1,t.isProcessing=!0,r.next=5,p["a"].removeFollow({userId:s});case 5:if(n=r.sent,a=n.data,"success"===a.status){r.next=9;break}throw new Error(a.message);case 9:t.followings=t.followings.map((function(e){return e.id!==s?e:Object(o["a"])(Object(o["a"])({},e),{},{isfollowered:!1})})),t.topUsers.map((function(e){s===e.id&&s===e.id&&(e.isFollowed=!e.isFollowed)})),e.isFollowed=!1,t.isProcessing=!1,r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](1),t.isProcessing=!1,console.log(r.t0),v["a"].fire({icon:"error",title:"無法取消喜歡,請稍後在試"});case 20:case"end":return r.stop()}}),r,null,[[1,15]])})))()},addFollowingUser:function(){this.fetchFollowing(this.userId)},removeFollowingUser:function(e){this.followings=this.followings.filter((function(t){return t.followingId!==e}))}}},m=h,b=(r("e23f"),r("2877")),A=Object(b["a"])(m,s,n,!1,null,"4b017f2c",null);t["default"]=A.exports},d81d:function(e,t,r){"use strict";var s=r("23e7"),n=r("b727").map,a=r("1dde"),o=a("map");s({target:"Array",proto:!0,forced:!o},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e23f:function(e,t,r){"use strict";r("9556")},f66c:function(e,t,r){},f797:function(e,t,r){}}]);
//# sourceMappingURL=chunk-1addba05.d558f013.js.map