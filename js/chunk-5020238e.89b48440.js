(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5020238e"],{"0a94":function(e,t,r){"use strict";r("3b2b")},2889:function(e,t,r){"use strict";r("f66c")},"3b2b":function(e,t,r){},7384:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"window demo"},[r("div",{staticClass:"user"},[r("UserLeftColumn",{attrs:{userId:e.userId,currentUserId:e.currentUserId}}),e.isLoading?r("Spinner",{staticClass:"user-spinner"}):r("div",{staticClass:"center-column scrollbar",attrs:{id:"center-column"}},[r("UserHeader",{attrs:{user:e.user}}),r("UserFollowTab"),r("div",{staticClass:"user-follower-list "},[r("div",{staticClass:"user-followers"},e._l(e.followers,(function(t){return r("div",{key:t.followerId,staticClass:"follower"},[r("div",{staticClass:"avatar"},[r("div",{staticClass:"avatar-img"},[r("img",{attrs:{src:e._f("emptyImage")(t.avatar),alt:"avatar"}})])]),r("div",{staticClass:"follower-main"},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"tag-name"},[e._v("@"+e._s(t.account))]),r("div",{staticClass:"description"},[e._v(" "+e._s(t.introduction)+" ")])]),t.isFollowed?r("button",{staticClass:"follower-btn following",attrs:{disabled:e.isProcessing},on:{click:function(r){return e.removeFollow(t)}}},[e._v(" 正在跟隨 ")]):r("button",{staticClass:"follower-btn",attrs:{disabled:e.isProcessing},on:{click:function(r){return e.addFollow(t)}}},[e._v(" 跟隨 ")])])})),0)])],1),r("UserRightColumn",{attrs:{initialTopUsers:e.topUsers},on:{"add-follow-click":e.followClicked,"remove-follow-click":e.followClicked}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.noLength,expression:"noLength === true"}],staticClass:"noLength"},[e._v(" 尚未有人追隨 ")])])},n=[],o=r("1da1"),a=r("5530"),i=(r("96cf"),r("a9e3"),r("d81d"),r("232c")),l=r("b12b"),c=r("3e69"),u=r("99f5"),d=r("2375"),f=r("4cce"),w=r("7482"),v=r("2fa3"),p=r("2f62"),h=r("2708"),m={mixins:[h["b"],h["a"]],components:{UserLeftColumn:i["a"],UserRightColumn:l["a"],UserHeader:c["a"],UserFollowTab:u["a"],Spinner:d["a"]},data:function(){return{isLoading:!0,userId:Number(this.$route.params.id),currentUserId:-1,user:{},topUsers:[],followers:[],isProcessing:!1,noLength:!1}},created:function(){this.fetchFollower(this.userId),this.fetchUserInfo(this.userId),this.fetchTopUsers()},computed:Object(a["a"])({},Object(p["b"])(["currentUser","isAuthenticated"])),beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchFollower(s),this.userId=Number(s),r()},methods:{fetchFollower:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,f["a"].getUserFollowers({userId:e});case 4:s=r.sent,n=s.data,t.followers=n,t.isLoading=!1,0===t.followers.length&&(t.noLength=!0),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},fetchUserInfo:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,f["a"].get({userId:e});case 4:s=r.sent,n=s.data,t.user=n,t.isLoading=!1,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},fetchTopUsers:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w["a"].getTopUser();case 3:r=t.sent,s=r.data,e.topUsers=s,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),v["a"].fire({icon:"warning",title:"無法取得前十"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},addFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.followerId,n='{\n        "id":"'.concat(s,'"\n      }'),o=JSON.parse(n),r.prev=3,t.isProcessing=!0,r.next=7,w["a"].addFollow({data_JSON:o});case 7:a=r.sent,console.log("popular response",a),e.isFollowed=!0,t.topUsers.map((function(e){s===e.id&&s===e.id&&(e.isFollowed=!0)})),t.isProcessing=!1,r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](3),t.isProcessing=!1,v["a"].fire({icon:"error",title:"無法追蹤使用者,請稍後"});case 18:case"end":return r.stop()}}),r,null,[[3,14]])})))()},removeFollow:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var s,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.followerId,r.prev=1,t.isProcessing=!0,r.next=5,w["a"].removeFollow({userId:s});case 5:if(n=r.sent,o=n.data,"success"===o.status){r.next=9;break}throw new Error(o.message);case 9:t.followers=t.followers.map((function(e){return e.id!==s?e:Object(a["a"])(Object(a["a"])({},e),{},{isfollowered:!1})})),e.isFollowed=!1,t.topUsers.map((function(e){s===e.id&&s===e.id&&(e.isFollowed=!1)})),t.isProcessing=!1,r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](1),t.isProcessing=!1,console.log(r.t0),v["a"].fire({icon:"error",title:"無法取消喜歡,請稍後在試"});case 20:case"end":return r.stop()}}),r,null,[[1,15]])})))()},followClicked:function(e){this.followers.map((function(t){e===t.followerId&&e===t.followerId&&(t.isFollowed=!t.isFollowed)}))}}},g=m,b=(r("0a94"),r("2877")),k=Object(b["a"])(g,s,n,!1,null,"f5460dde",null);t["default"]=k.exports},"99f5":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-follow-tab"}},[r("router-link",{attrs:{to:{name:"follower"}}},[r("div",{staticClass:"follower tab",class:{clicked:"follower"===this.$route.name}},[e._v("跟隨者")])]),r("router-link",{attrs:{to:{name:"following"}}},[r("div",{staticClass:"following tab",class:{clicked:"following"===this.$route.name}},[e._v("正在跟隨")])])],1)},n=[],o=(r("2889"),r("2877")),a={},i=Object(o["a"])(a,s,n,!1,null,"3472e1b4",null);t["a"]=i.exports},f66c:function(e,t,r){}}]);
//# sourceMappingURL=chunk-5020238e.89b48440.js.map