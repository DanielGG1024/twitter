(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0860deea"],{1904:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"self-reply reply-list",attrs:{id:"self-reply-list"}},e._l(e.replies,(function(t){return r("div",{key:t.id,staticClass:"reply"},[r("router-link",{attrs:{to:{name:"user",params:{id:t.User.id}}}},[r("div",{staticClass:"avatar"},[r("div",{staticClass:"avatar-img"},[r("img",{attrs:{src:e._f("emptyImage")(t.User.avatar),alt:"avatar"}})])])]),r("div",{staticClass:"reply-main"},[r("router-link",{attrs:{to:{name:"Reply",params:{id:t.TweetId}}}},[r("div",{staticClass:"reply-user-info"},[r("div",{staticClass:"name"},[e._v(e._s(t.User.name))]),r("div",{staticClass:"account"},[e._v("@"+e._s(t.User.account)),r("span",[e._v("‧"+e._s(e._f("fromNow")(t.createdAt)))])])]),r("div",{staticClass:"reply-this-reply"},[e._v("回覆"),r("span",[e._v(" @"+e._s(t.Tweet.User.account))])]),r("div",{staticClass:"reply-content"},[e._v(e._s(t.comment))])])],1)],1)})),0)},s=[],n=r("1da1"),i=(r("96cf"),r("4cce")),c=r("2fa3"),o=r("2708"),u={mixins:[o["b"],o["a"]],data:function(){return{replies:[]}},created:function(){var e=this.$route.params.id;this.fetchUserReplies(e)},beforeRouteUpdate:function(e,t,r){console.log(e,t);var a=e.params.id;this.fetchUserReplies(a),r()},methods:{fetchUserReplies:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i["a"].getUserReplies({userId:e});case 3:a=r.sent,s=a.data,console.log("this reply",s),t.replies=s,r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:"無法取得推文，請稍後再試"});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},l=u,d=(r("a868"),r("2877")),p=Object(d["a"])(l,a,s,!1,null,"4e8a5254",null);t["default"]=p.exports},"4cce":function(e,t,r){"use strict";var a=r("2fa3"),s=function(){return localStorage.getItem("token")};t["a"]={getCurrentUser:function(){return a["b"].get("/get-current-user",{headers:{Authorization:"Bearer ".concat(s())}})},get:function(e){var t=e.userId;return a["b"].get("/users/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},update:function(e){var t=e.userId,r=e.formData;return a["b"].put("/users/".concat(t),r,{headers:{Authorization:"Bearer ".concat(s())}})},getTopUsers:function(){return a["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(s())}})},getUserTweets:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/tweets"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserReplies:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserLikes:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/likes"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserFollowers:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/followers"),{headers:{Authorization:"Bearer ".concat(s())}})},getUserFollowings:function(e){var t=e.userId;return a["b"].get("/users/".concat(t,"/followings"),{headers:{Authorization:"Bearer ".concat(s())}})}}},a868:function(e,t,r){"use strict";r("de0d")},de0d:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0860deea.fa074bcb.js.map