(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09be1766"],{"15b5":function(t,e,a){},2375:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],r=(a("7ce14"),a("2877")),i={},o=Object(r["a"])(i,s,n,!1,null,"446f95da",null);e["a"]=o.exports},2797:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.ReplyModalSwitch,expression:"ReplyModalSwitch"}],staticClass:"modal-background",on:{click:t.clickModalBackground}},[s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"close-icon",on:{click:t.clickClose}},[s("img",{staticClass:"close",attrs:{src:a("98f5"),alt:""}})])]),s("div",{staticClass:"reply"},[s("div",{staticClass:"reply-icon-wrapper"},[s("img",{staticClass:"user-icon",attrs:{src:t.tweet.User.avatar,alt:""}})]),s("div",{staticClass:"txt-wrapper"},[s("div",{staticClass:"txt-info"},[s("span",{staticClass:"user-name"}),s("span",{staticClass:"user-account"},[t._v("＠"+t._s(t.tweet.User.account)+" "),s("span",[t._v("．"+t._s(t._f("fromYear")(t.tweet.createdAt)))])])]),s("div",{staticClass:"txt"},[s("p",[t._v(" "+t._s(t.tweet.description)+" ")])]),s("div",{staticClass:"txt-footer"},[s("span",{staticClass:"txt-footer-reply"},[t._v("回覆給")]),s("span",{staticClass:"footer-account"},[t._v("＠"+t._s(t.tweet.User.account))])])])]),s("div",{staticClass:"modal-txt"},[s("div",{staticClass:"modal-content-post"},[s("div",{staticClass:"modal-main-tweet"},[s("div",{staticClass:"user-icon-wrapper"},[s("img",{staticClass:"user-icosn",attrs:{src:t.currentUser.avatar,alt:""}})]),s("div",{staticClass:"modal-main-tweet-txt"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.teweetContent,expression:"teweetContent"}],staticClass:"modal-textarea",attrs:{placeholder:"有甚麼新鮮事?"},domProps:{value:t.teweetContent},on:{input:function(e){e.target.composing||(t.teweetContent=e.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.contentError,expression:"contentError"}],staticClass:"modal-info"},[t._v(t._s(t.errorContentMessage))])]),s("button",{staticClass:"modal-main-tweet-button",attrs:{disabled:t.isProcessing},on:{click:function(e){return t.handleSubmit(t.tweet.TweetId)}}},[t._v(" 推文 ")])])])])])])])},n=[],r=a("1da1"),i=a("5530"),o=(a("96cf"),a("498a"),a("7482")),c=a("2fa3"),l=a("2f62"),u=a("2708"),d={name:"ReplyModal",mixins:[u["b"]],props:{ReplyModalSwitch:{type:Boolean,required:!0},tweet:{type:Object}},data:function(){return{teweetContent:"",contentError:!1,errorContentMessage:"",isProcessing:!1}},computed:Object(i["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),methods:{clickClose:function(){this.$emit("after-click-close")},clickModalBackground:function(t){var e=t.target;"modal-background"===e.className&&this.$emit("after-click-background")},handleSubmit:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,n,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=e.teweetContent,0!==s.trim().length){a.next=7;break}return e.contentError=!0,e.errorContentMessage="內容不可以空白",a.abrupt("return");case 7:if(!(s.length>140)){a.next=11;break}return e.contentError=!0,e.errorContentMessage="字數不可超過140字",a.abrupt("return");case 11:e.contentError=!1,e.errorContentMessage="";case 13:return a.prev=13,n='{\n          "comment":"'.concat(s,'"\n        }'),r=JSON.parse(n),a.next=18,o["a"].postTweetReply({tweetId:t,data_JSON:r});case 18:if(i=a.sent,"success"===i.data.status){a.next=21;break}throw new Error;case 21:e.$emit("after-tweetReply-post"),e.teweetContent="",e.isProcessing=!0,c["a"].fire({icon:"success",title:"發送成功!"}),a.next=31;break;case 27:a.prev=27,a.t0=a["catch"](13),c["a"].fire({icon:"error",title:"無法回復,請稍後"}),e.isProcessing=!1;case 31:case"end":return a.stop()}}),a,null,[[13,27]])})))()}}},p=d,w=(a("6770"),a("2877")),f=Object(w["a"])(p,s,n,!1,null,"63f8adec",null);e["a"]=f.exports},"29f5":function(t,e,a){},3113:function(t,e,a){},"3b8f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popular"},[a("div",{staticClass:"popular-wrapper"},[t._m(0),t._l(t.users,(function(e){return a("div",{key:e.id,staticClass:"one-popular-wrapper"},[a("div",{staticClass:"one-popular"},[a("div",{staticClass:"user-icon-wrapper"},[a("img",{staticClass:"user-icon",attrs:{src:e.avatar,alt:""}})]),a("div",{staticClass:"popular-txt"},[a("span",{staticClass:"popular-title"},[t._v(t._s(e.name))]),a("a",{staticClass:"popular-link",attrs:{href:""}},[t._v("@"+t._s(e.account))])]),a("div",{staticClass:"popular-follow"},[e.id!==t.currentUser.id?[e.isFollowed?a("button",{staticClass:"popular-follow-btn btn-active",attrs:{disabled:t.isProcessing},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.deleteFollow(e.id)}}},[t._v(" 正在跟隨 ")]):a("button",{staticClass:"popular-follow-btn",attrs:{disabled:t.isProcessing},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.addFollow(e.id)}}},[t._v(" 跟隨 ")])]:t._e()],2)])])}))],2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popular-title-wrapper"},[a("div",{staticClass:"title"},[t._v("Popular")])])}],r=a("5530"),i=a("1da1"),o=(a("96cf"),a("2fa3")),c=a("7482"),l=a("2f62"),u={name:"Popular",data:function(){return{currentUserId:-1,users:"",isProcessing:!1}},created:function(){this.fetchTopUsers()},watch:{users:{handler:function(){this.fetchTopUsers()}}},methods:{deleteFollow:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,s=t,a.next=5,c["a"].removeFollow({userId:s});case 5:if(n=a.sent,200===n.status){a.next=8;break}throw new Error;case 8:e.$emit("follow-click"),e.isProcessing=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),e.isProcessing=!1,o["a"].fire({icon:"error",title:"無法取消追蹤使用者,請稍後"});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},addFollow:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,n,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t,console.log(t),n='{\n        "id":"'.concat(s,'"\n      }'),r=JSON.parse(n),a.prev=4,e.isProcessing=!0,a.next=8,c["a"].addFollow({data_JSON:r});case 8:if(i=a.sent,200===i.status){a.next=11;break}throw new Error;case 11:e.isProcessing=!1,a.next=18;break;case 14:a.prev=14,a.t0=a["catch"](4),e.isProcessing=!1,o["a"].fire({icon:"error",title:"無法追蹤使用者,請稍後"});case 18:case"end":return a.stop()}}),a,null,[[4,14]])})))()},fetchTopUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getTopUser();case 3:a=e.sent,s=a.data,t.users=s,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),o["a"].fire({icon:"warning",title:"無法取得前十"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},computed:Object(r["a"])({},Object(l["b"])(["currentUser","isAuthenticated"]))},d=u,p=(a("f862"),a("2877")),w=Object(p["a"])(d,s,n,!1,null,"2613b3b3",null);e["a"]=w.exports},4167:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMISURBVHgB7ZlRbtpAEEBn1pCvKuUGsRXyH05QOEHpX1WllKgHSDlB4ARJT1BCoqp/5QZxT9D8B4T56W/9HcDTWacIYq/N2hjiSDwJIYb1emY8s7szBtixY8eLBpMMHpn1EhReHfNl8lPyhUQOzCa25fxwEkzFc703oVisAqG5kHq2NbixIQFaBkjFRWH/jAC+8M+SehTZRHBlDa+7sXOVT6oIeM63rkYMcRGp700mHR2nrDRgfNj4RAiXEKl4YEKkrjcxWpbTdZflvhOM1xeE1NSZBwgcAuqsckisAeNy45y93oakyJvPHmpzD8pwQWPvlu9mQkJYwfbBoNeJ+V/N+KhxxiFxCWnxjRAVjghAY/93GuUXU1HLGlwrdVEa4HussDeCtaE+EriE2IT1cGn6UFHlREE1WhhFGToZgHVKtM5FUsJC8Rt/10J3CAqy8372EHi14DIrgoOk9yGvkKgHRSEDOF6PIacgwpugTCjG5dYAUOj2xICR2TQh5/yxPh8s/xbwwgmtQk65kc0KuiHMQe+JzuEnwDso5Bc3KAgbgHw8zi10F5SEl1HAX5BTVLopktizIbeEdVOeVDiR/4Lm+X9rcG6aw54VFAv1WPgKOQMF2iq5eh+YivR1wIbwJqgsapQGPJaDZENOQMQu6+So/ovciWlqnEJOiPK+JNIAaTGXlM+eC3Hel8SfhWaiDYrdb2vwyhPnfUmsATIXuA3SgmfCb6vEeF+iVbE65Y8/ZX0LW0SGzsH91co81DpO+wm9zUOeRujM0e4ZjI4+HCMVbmHzOzS3UERlVejM0S5orPvvd0Sbzwci71RXeUmiikz2KfmYofVo0yDntoY3/STXpGo7jcqNNl+YafvFV37Qa0NCUvfNsjQirfKStRp/WRgR17jVYe3O5ejwpI4gLlJ0n11uFb5L+kYmSCatV9lPQsNL0P/ntzm8tyRZbaLIpnf8H42Qcv3jwRohEyRTAyR+d8/w2tzHfAuLTc/1qzwulIKvntYlcwOWkS/0AD0XJntO1orv2LHjkX833CXiXlBIlQAAAABJRU5ErkJggg=="},"498a":function(t,e,a){"use strict";var s=a("23e7"),n=a("58a8").trim,r=a("c8d2");s({target:"String",proto:!0,forced:r("trim")},{trim:function(){return n(this)}})},5550:function(t,e,a){"use strict";a("3113")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),n=a("577e"),r=a("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),l=function(t){return function(e){var a=n(s(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},6770:function(t,e,a){"use strict";a("e2dd")},"6ef5":function(t,e,a){"use strict";a("f62a")},7482:function(t,e,a){"use strict";var s=a("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={postTweet:function(t){var e=t.data_JSON;return s["b"].post("tweets",e,{headers:{Authorization:"Bearer ".concat(n())}})},postTweetReply:function(t){var e=t.tweetId,a=t.data_JSON;return s["b"].post("tweets/".concat(e,"/replies"),a,{headers:{Authorization:"Bearer ".concat(n())}})},getTweets:function(){return s["b"].get("tweets",{headers:{Authorization:"Bearer ".concat(n())}})},getTweet:function(t){var e=t.tweetId;return s["b"].get("tweets/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},getTweetReplies:function(t){var e=t.tweetId;return s["b"].get("tweets/".concat(e,"/replies"),{headers:{Authorization:"Bearer ".concat(n())}})},addLike:function(t){var e=t.tweetId;return s["b"].post("tweets/".concat(e,"/like"),null,{headers:{Authorization:"Bearer ".concat(n())}})},removeLike:function(t){var e=t.tweetId;return s["b"].post("tweets/".concat(e,"/unlike"),null,{headers:{Authorization:"Bearer ".concat(n())}})},addFollow:function(t){var e=t.data_JSON;return s["b"].post("followships",e,{headers:{Authorization:"Bearer ".concat(n())}})},removeFollow:function(t){var e=t.userId;return s["b"].delete("followships/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},getTopUser:function(){return s["b"].get("users/top",{headers:{Authorization:"Bearer ".concat(n())}})}}},"7ce14":function(t,e,a){"use strict";a("e001")},"7db0":function(t,e,a){"use strict";var s=a("23e7"),n=a("b727").find,r=a("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(i)},"98f5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBxdfLEYIwEAbgf6nAEuxMPOjdDijBsx6MldmCHWCCBHmEZDdsxj0AG5Z8M5lkZwD+FOQu7RkHtLja7G3Thm54okCMHQ+/7G0/qqm18Q4FjM+r7yh2szrTFxZBfzBwCdSr4CHUBQ0FJ9Q2ewS+zV72NdSu8JEmuSIeRe8wtBhXwFOoe6TghxtwDroK5+JcNApLcQmahLm4FGXBKby/GwhQNpzAIUVFMBtnoGI4iTNRFxWkQXb6nHeLUkGs7t5psDocf3PxUDbOO06Rc9rPIm6v6QbCaA457ZW2osOQECcNNAcnLVSKkyYqwUkb5eJUAmXhpdAU7nt1gwKoi24O32gW8PxPQgmN4R+H8M/Gca8TfQAAAABJRU5ErkJggg=="},"99cc":function(t,e,a){"use strict";a("b557")},a03b:function(t,e,a){"use strict";a("f622")},a605:function(t,e,a){"use strict";a("29f5")},a896:function(t,e){t.exports="data:image/png;base64,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"},b4af:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgBvVbNThNRFD7nTmdqDIvyBuUJKBvjxtgm7i1LV9ZYjTtKolgwpG0IUnBB2RHAMOzcgTtXtiSuTd+A8Qnsks4wczznTqeWOrQV0C+Z3Dt35n7fOXfOzwD8J+DwQqFUTSnTzCcUzsp9QPDjQrkndr3qxBHI+wnLKhiIswTU8ck//bi1ejJS6OXSWj5A45AXUzE22V63u2g3qp1IwEpaFQIoxeg7bGFt/8M7+w+h4tJGBZGqEamPwamCwEFSeQT1mK1NC4HXdefgTjJlEh3zfYavDiHtUBC0Q0IjjwhP9Zywure1XOsLiSeExnG4yZ8/qK+2Bs17Vd5I+wEToyaWZ+Jxhje373bdXKPnZYQXb9YzoLAp7zFfTviUPCBMbIeO0OKwiGC3vux4rpsDArE62xNx4kQEfGRtMTikNA71WHy9lkXDEPXW/uZKDkZAe0Z0JnMD3ZndKwKk79nb98KbFa8UKJXVXhF8hjEQz9jEZ3KNE7nEGRiZRLQYEHVgAuzXf0fSWCHwHQ4OmaUU/EMQqX6aKE5IRyaG0hF1q1AIaRlRgaPYsXa4HFaC2wQiPtQTH9o6jzg6fvKQ4mSctmPC9ToocIRyUp9JGuxtrsyEeUS0I6NlmSW4JSSIFiAkP5JBC124XgN0VcAFqWFwQ4g3CJjXAsqz+0JyXD2vUmYyuQ03hElQAV0baSfKt354i1dsBS9S4TnXPrgmuM4VhEO+jYH6pDQutYlimcsR6XLU8dCdsyfI/kGEAQBN7Q1Xj8HkvpSwUlAD6B0hWc2/+V6DItxuasMVBOM2RcWQN7W9rpcbF/JikJm0ZE+GG2HrIKY4x5Ygzqf5sCVgxkyazUK5moZRnvREpD9Nyd4YIIyy0mKCsNk5/M1yw9+swA3OVOpYH9cVTXCsUCTG/wWHfBw6CqPWrNet5EKAVELdReFo6twtNUYc8UihCMXyepVFKjJn0U5vowQK5x/UDrZWGuM4DJgA3799bd178OiIK/00/3jcZ5FzlvrEXfbJ3ubql0k4fgFTX2blSSTp7wAAAABJRU5ErkJggg=="},b557:function(t,e,a){},b74f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgBtVZdbtpAEJ6xCUHlofQGzglKbuDcoDlBjQSobwGpBUQU4YgWKH0IvFUQqXCC5gbhBqEnqG9QPwb8M51d44gSI0xwPwm87C7z7czszGeEHTAqZi4DkHNTqha1nnI96/vAtHbZwW3G0+njC0LS+acO8TADn6bjb5eTWETFj20d1dQPANJWUxZ/5rzVjjJAvI+N5HmYe9rv0zkTzrcSFWvdFiKZq6UJoTu97V3NIAaKjbYOvmogwnv5bwWMUbc5fUZU+vTFAAXZE7ABqTruRYdgJ2HtcwVRuRFjQu8sPKgkMhpd7YjgXoQLyTsf9a/u4ACUGnxokoe2nMXydDIwbUUsMEkryAlODiURENFgD4QdLZ0+qog5ZbWmiy8VF9eQEMgnaYsQg5xxbvKcmwcez8Zfm2eQIEq1zgMnJ8/he6P46GurM/yChEEA0mYqo+YVIkXefyKw4T8izBHw/c9BwmCbr5+IVFn1cvotJA0CTTzcR28u66hU7/zhR04kTdx5SABBbdJvHs75kp3K0BHRUDzTx5kWJISgNhkY2JZE7tIZIKBF4FfK3O/gQJRr7Xd8fIPDZWUfHdkA1nudqCduQ5BDQnO5XAxfEkaD7aTYDopujlQIe+Y/3VuQoaL8pEAiLF6ekedOuUnaquPYuwSuVO9dcFRMQcIqcD3qXZrh2jM9+sBJdH0yw3a/gcjuIYXyON3iApV9jWuyettvDtb3RCpsSOiBr/MVzRNffQz6ocVEJ+v71oVS5MRHrxClYVuJNsElQOtEm14w0TC7cMzBlrym4AUIvVjl0mYNK+ySFwX2RLneuUFVvQ/0S7nLLpYncTRsX480ESqRCyCvOuo3Y4vk3h6JXLxied5XieN7xMXHNWLFfSvaxF+amCCyjEpAPQAAAABJRU5ErkJggg=="},c8d2:function(t,e,a){var s=a("d039"),n=a("5899"),r="​᠎";t.exports=function(t){return s((function(){return!!n[t]()||r[t]()!=r||n[t].name!==t}))}},cd56:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"main-container"},[a("Menu",{on:{"after-tweet-post":t.afterTweetPost}}),a("main",{staticClass:"content"},[a("div",{staticClass:"content-post"},[t._m(0),a("MainTweetPost",{on:{"after-tweet-post":t.afterTweetPost}})],1),t.isLoading?a("Spinner"):a("MainTweets",{attrs:{allTweets:t.allTweets},on:{"after-tweetReply-post":t.afterTweetPost}})],1),a("Popular")],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-header"},[a("span",{staticClass:"title"},[t._v("首頁")])])}],r=a("1da1"),i=(a("96cf"),a("fb62")),o=a("3b8f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-tweet"},[a("div",{staticClass:"user-icon-wrapper"},[a("img",{staticClass:"user-icon",attrs:{src:t.currentUser.avatar,alt:""}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mainTweetPost,expression:"mainTweetPost"}],staticClass:"main-tweet-txt",attrs:{name:"",id:"",value:"hello",placeholder:"有甚麼新鮮事?"},domProps:{value:t.mainTweetPost},on:{input:function(e){e.target.composing||(t.mainTweetPost=e.target.value)}}}),a("button",{staticClass:"main-tweet-button",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 推文 ")]),a("p")])},l=[],u=a("2fa3"),d=a("7482"),p=a("2f62"),w={name:"MainTweetPost",data(){return{mainTweetPost:"",avatar:""}},computed:{...Object(p["b"])(["currentUser","isAuthenticated"])},methods:{async handleSubmit(){const t=this.mainTweetPost;if(t.trim().length<1)u["a"].fire({icon:"warning",title:"內容不能為空白"});else if(t.length>140)u["a"].fire({icon:"warning",title:"內容不能超過140個字"});else try{const e=`{\n          "description":"${t}"\n        }`,a=JSON.parse(e),s=await d["a"].postTweet({data_JSON:a});if(console.log("maintweetpost"),"success"!==s.data.status)throw new Error;u["a"].fire({icon:"success",title:"發送成功!"}),this.$emit("after-tweet-post"),this.mainTweetPost=""}catch{u["a"].fire({icon:"error",title:"無法送出推文,請稍後"})}}}},f=w,A=(a("a03b"),a("2877")),m=Object(A["a"])(f,c,l,!1,null,"580c499e",null),v=m.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"chat",staticClass:"tweets"},[t._l(t.allTweets,(function(e){return s("div",{key:e.TweetId,staticClass:"onetweet"},[s("div",{staticClass:"onetweet-user-icon-wrapper"},[s("router-link",{attrs:{to:{name:"Reply",params:{id:e.TweetId}}}},[s("img",{staticClass:"user-icon",attrs:{src:e.User.avatar,alt:""}})])],1),s("div",{staticClass:"onetweet-txt-wrapper"},[s("div",{staticClass:"onetweet-txt-header"},[s("router-link",{attrs:{to:{name:"Reply",params:{id:e.TweetId}}}},[s("span",{staticClass:"user-title"},[t._v(t._s(e.User.name))]),s("span",{staticClass:"user-info"},[s("a",{staticClass:"user-link",attrs:{href:"#"}},[t._v(" ＠"+t._s(e.User.account))]),s("span",{staticClass:"user-link-time"},[t._v("．"+t._s(t._f("fromNow")(e.createdAt)))])])])],1),s("router-link",{attrs:{to:{name:"Reply",params:{id:e.TweetId}}}},[s("div",{staticClass:"onetweet-txt"},[t._v(" "+t._s(e.description)+" ")])]),s("div",{staticClass:"onetweet-footer"},[s("div",{staticClass:"chat"},[s("div",{staticClass:"onetweet-footer-icon"},[s("img",{staticClass:"chat-icon",attrs:{src:a("b74f"),alt:""},on:{click:function(a){return t.clickChatBtn(e.TweetId)}}})]),s("span",{staticClass:"footer-amount"},[t._v(t._s(e.RepliesCount))])]),s("div",{staticClass:"heart"},[s("div",{staticClass:"onetweet-footer-icon"},[e.isLiked?s("img",{staticClass:"heart-icon",attrs:{src:a("4167"),alt:"heart-icon",disabled:t.isProcessing},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.removeLike(e)}}}):s("img",{staticClass:"heart-icon",attrs:{src:a("b4af"),alt:"heart-icon",disabled:t.isProcessing},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addLike(e)}}})]),s("span",{staticClass:"footer-amount"},[t._v(t._s(e.LikesCount))])])])],1)])})),s("ReplyModal",{attrs:{ReplyModalSwitch:t.ReplyModal,tweet:t.tweet},on:{"after-click-background":t.afterClickClose,"after-click-close":t.afterClickClose,"after-tweetReply-post":t.afterTweetReplyPost}})],2)},g=[],h=(a("7db0"),a("2797")),b=a("2708"),k={name:"MainTweets",mixins:[b["b"]],components:{ReplyModal:h["a"]},props:{allTweets:{type:Array,require:!0}},data:function(){return{ReplyModal:!1,tweet:{User:{avatar:""}},isProcessing:!1}},methods:{clickChatBtn:function(t){this.ReplyModal=!0,this.tweet=this.allTweets.find((function(e){return e.TweetId===t})),console.log("clickChatBtn",this.tweet)},afterClickClose:function(){this.ReplyModal=!1},afterTweetReplyPost:function(){this.ReplyModal=!1,this.$emit("after-tweetReply-post")},addLike:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("tweet",t),a.prev=1,e.isProcessing=!0,s=t.TweetId,a.next=6,d["a"].addLike({tweetId:s});case 6:if(n=a.sent,r=n.data,console.log("add data",r),"success"===r.status){a.next=11;break}throw new Error(r.message);case 11:t.LikesCount+=1,t.isLiked=!0,e.isProcessing=!1,a.next=21;break;case 16:a.prev=16,a.t0=a["catch"](1),e.isProcessing=!1,console.log(a.t0),u["a"].fire({icon:"error",title:"無法喜歡,請稍後在試"});case 21:case"end":return a.stop()}}),a,null,[[1,16]])})))()},removeLike:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("tweet",t),a.prev=1,e.isProcessing=!0,s=t.TweetId,a.next=6,d["a"].removeLike({tweetId:s});case 6:if(n=a.sent,console.log("delete reponse",n),r=n.data,"success"===r.status){a.next=11;break}throw new Error(r.message);case 11:t.isLiked=!1,t.LikesCount-=1,e.isProcessing=!1,a.next=21;break;case 16:a.prev=16,a.t0=a["catch"](1),e.isProcessing=!1,console.log(a.t0),u["a"].fire({icon:"error",title:"無法取消喜歡,請稍後在試"});case 21:case"end":return a.stop()}}),a,null,[[1,16]])})))()}}},x=k,E=(a("99cc"),Object(A["a"])(x,C,g,!1,null,"3c7cbd3c",null)),T=E.exports,U=a("2375"),R={namd:"main",components:{Menu:i["a"],Popular:o["a"],MainTweetPost:v,MainTweets:T,Spinner:U["a"]},data:function(){return{isLoading:!0,allTweets:[],tweet:{}}},created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].getTweets();case 3:a=e.sent,s=a.data,t.allTweets=s,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,u["a"].fire({icon:"warning",title:"tweets錯誤唷"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},afterTweetPost:function(){this.fetchTweets()}}},Q=R,B=(a("a605"),Object(A["a"])(Q,s,n,!1,null,"86f2e79e",null));e["default"]=B.exports},e001:function(t,e,a){},e2dd:function(t,e,a){},f622:function(t,e,a){},f62a:function(t,e,a){},f862:function(t,e,a){"use strict";a("15b5")},fb62:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"menu"},[s("div",{staticClass:"logo-wrapper"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{src:a("a896"),alt:""}})])],1),s("nav",{staticClass:"menu-nav"},[s("ul",{staticClass:"menu-nav-wrapper"},[s("li",{staticClass:"menu-nav-link"},[s("router-link",{staticClass:"menu-link",attrs:{to:"/main"}},[s("i",{staticClass:"bx bxs-home-circle"}),s("span",{staticClass:"menu-link-title"},[t._v(" 首頁 ")])])],1),s("li",{staticClass:"menu-nav-link"},[s("router-link",{staticClass:"menu-link",attrs:{to:{name:"user",params:{id:t.currentUserId}}}},[s("i",{staticClass:"bx bx-user"}),s("span",{staticClass:"menu-link-title"},[t._v(" 個人資料 ")])])],1),s("li",{staticClass:"menu-nav-link"},[s("router-link",{staticClass:"menu-link",attrs:{to:"/publicmessage"}},[s("i",{staticClass:"bx bxs-home-circle"}),s("span",{staticClass:"menu-link-title"},[t._v(" 公開聊天室 ")])])],1),s("li",{staticClass:"menu-nav-link"},[s("router-link",{staticClass:"menu-link",attrs:{to:"/setting"}},[s("i",{staticClass:"bx bx-cog"}),s("span",{staticClass:"menu-link-title"},[t._v(" 設定 ")])])],1),s("li",{staticClass:"menu-nav-post"},[s("button",{staticClass:"menu-nav-btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.clickPostModal.apply(null,arguments)}}},[t._v(" 推文 ")])])]),s("ul",{staticClass:"menu-nav-wrapper"},[s("li",{staticClass:"menu-nav-link",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.clickLogout.apply(null,arguments)}}},[s("router-link",{staticClass:"menu-link",attrs:{to:"/#"}},[s("i",{staticClass:"bx bx-log-out"}),s("span",{staticClass:"menu-link-title"},[t._v(" 登出 ")])])],1)])]),s("MainTweetPostModal",{attrs:{MainTweetPostModalSwitch:t.MainTweetPostModal},on:{"after-click-close":t.afterClickClose,"after-click-background":t.afterClickClose,"after-tweet-post":t.afterTweetPost}})],1)},n=[],r=a("5530"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.MainTweetPostModalSwitch,expression:"MainTweetPostModalSwitch"}],staticClass:"modal-background",on:{click:t.clickModalBackground}},[s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"close-icon",on:{click:t.ciickClose}},[s("img",{staticClass:"close",attrs:{src:a("98f5"),alt:""}})])]),s("div",{staticClass:"modal-txt"},[s("div",{staticClass:"modal-content-post"},[s("div",{staticClass:"modal-main-tweet"},[s("div",{staticClass:"user-icon-wrapper"},[s("img",{staticClass:"user-icon",attrs:{src:t.currentUser.avatar,alt:""}})]),s("div",{staticClass:"modal-main-tweet-txt"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.teweetContent,expression:"teweetContent"}],staticClass:"modal-textarea",attrs:{placeholder:"有甚麼新鮮事?"},domProps:{value:t.teweetContent},on:{input:function(e){e.target.composing||(t.teweetContent=e.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.contentError,expression:"contentError"}],staticClass:"modal-info"},[t._v(" "+t._s(t.errorContentMessage))])]),s("button",{staticClass:"modal-main-tweet-button",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 推文 ")])])])])])])])},o=[],c=a("1da1"),l=(a("96cf"),a("498a"),a("7482")),u=a("2fa3"),d=a("2f62"),p={name:"MainTweetPostModal",props:{MainTweetPostModalSwitch:{type:Boolean,required:!0}},data:function(){return{teweetContent:"",contentError:!1,errorContentMessage:"",avatar:""}},computed:Object(r["a"])({},Object(d["b"])(["currentUser","isAuthenticated"])),methods:{ciickClose:function(){this.$emit("after-click-close")},clickModalBackground:function(t){var e=t.target;"modal-background"===e.className&&this.$emit("after-click-background")},handleSubmit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,s,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.teweetContent,0!==a.trim().length){e.next=7;break}return t.contentError=!0,t.errorContentMessage="內容不可以空白",e.abrupt("return");case 7:if(!(a.length>140)){e.next=11;break}return t.contentError=!0,t.errorContentMessage="字數不可超過140字",e.abrupt("return");case 11:t.contentError=!1,t.errorContentMessage="";case 13:return e.prev=13,s='{\n          "description":"'.concat(a,'"\n        }'),n=JSON.parse(s),e.next=18,l["a"].postTweet({data_JSON:n});case 18:if(r=e.sent,"success"===r.data.status){e.next=21;break}throw new Error;case 21:u["a"].fire({icon:"success",title:"發送成功!"}),t.ciickClose(),t.$emit("after-tweet-post"),t.teweetContent="",e.next=30;break;case 27:e.prev=27,e.t0=e["catch"](13),u["a"].fire({icon:"error",title:"無法送出推文,請稍後"});case 30:case"end":return e.stop()}}),e,null,[[13,27]])})))()}}},w=p,f=(a("5550"),a("2877")),A=Object(f["a"])(w,i,o,!1,null,"5a59fd86",null),m=A.exports,v={namd:"Menu",components:{MainTweetPostModal:m},data:function(){return{MainTweetPostModal:!1,currentUserId:-1}},computed:Object(r["a"])({},Object(d["b"])(["currentUser","isAuthenticated"])),created:function(){this.currentUserId=this.currentUser.id},methods:{clickPostModal:function(){this.MainTweetPostModal=!0},afterClickClose:function(){this.MainTweetPostModal=!1},afterTweetPost:function(){this.$emit("after-tweet-post")},clickLogout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}}},C=v,g=(a("6ef5"),Object(f["a"])(C,s,n,!1,null,"3ff45866",null));e["a"]=g.exports}}]);
//# sourceMappingURL=chunk-09be1766.663a4c62.js.map