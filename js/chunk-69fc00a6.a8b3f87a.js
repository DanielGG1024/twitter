(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69fc00a6"],{3424:function(t,e,s){"use strict";s("c59f")},"5d05":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"window"}},[s("div",{staticClass:"publicMessage"},[s("div",{staticClass:"menu-container"},[s("UserLeftColumn",{attrs:{userId:t.userId,currentUserId:t.currentUserId}})],1),s("div",{staticClass:"user-list"},[s("div",{staticClass:"online online-list"},[s("header",[s("div",{staticClass:"title"},[t._v(" 上線使用者 "),s("span",{staticClass:"onlineCount"},[t._v("("+t._s(t.onlineList.length)+")")])])]),s("div",{staticClass:"online-users"},t._l(t.onlineList,(function(e){return s("div",{key:e.id,staticClass:"online-user"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.avatar,alt:""}})]),s("div",{staticClass:"user-info"},[s("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"account"},[t._v(" @ "+t._s(e.account)+" ")])])])})),0)])]),s("div",{staticClass:"message-box"},[s("MessageBox",{attrs:{onlineList:t.onlineList}})],1)])])},i=[],a=s("5530"),r=(s("a9e3"),s("232c")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messageBox"},[t._m(0),s("div",{ref:"messageBox",staticClass:"messageBox-wrapper"},[t._l(t.onlineList,(function(e){return s("div",{key:e.id,staticClass:"notify"},[s("div",{staticClass:"notify-mgs"},[t._v(t._s(e.name)+"上線")])])})),"undefined"!==t.newMessages.length?t._l(t.newMessages,(function(e){return s("div",{key:e.ChatId},[Number(e.User.id)!==Number(t.userId)?s("div",{staticClass:"user-remote"},[s("div",{staticClass:"avatar"},[s("div",{staticClass:"pic"},[s("img",{staticClass:"icon",attrs:{src:e.User.avatar,alt:""}})])]),s("div",{staticClass:"txt-wrapper"},[s("div",{staticClass:"message"},[t._v(" "+t._s(e.text)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(t._f("fromNowWithWord")(e.createdAt))+" ")])])]):s("div",{staticClass:"user-local"},[s("div",{staticClass:"txt-wrapper"},[s("div",{staticClass:"message"},[t._v(" "+t._s(e.text)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(t._f("fromNowWithWord")(e.createdAt))+" ")])])])])})):t._e()],2),s("div",{staticClass:"input-area",attrs:{id:"textArea"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{name:"",type:"text",placeholder:"輸入訊息..."},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send.apply(null,arguments)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("button",{staticClass:"btn",attrs:{disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.send.apply(null,arguments)}}},[s("i",{staticClass:"bx bx-right-arrow"})])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("公開聊天室")])])}],l=s("1da1"),u=(s("96cf"),s("498a"),s("b0c0"),s("2fa3")),d=function(){return localStorage.getItem("token")},v={getHistory:function(){return u["b"].get("chatroom/getHistoryMsg",{headers:{Authorization:"Bearer ".concat(d())}})}},m=s("2708"),f=s("2f62"),h={name:"messageBox",components:{},props:{onlineList:{type:Array,required:!1}},mixins:[m["b"]],data:function(){return{userId:-1,text:"",newMessages:[],announceData:"",isProcessing:!1}},created:function(){this.fetchHistory(),this.$socket.connect(),this.userId=this.currentUser.id;var t=this.currentUser.id;console.log(t)},mounted:function(){var t=this.currentUser.id;this.$socket.emit("leave"),this.$socket.emit("joinPublic",t),this.scrollToBottom()},updated:function(){this.scrollToBottom()},methods:{scrollToBottom:function(){this.$refs.messageBox.scrollTop=this.$refs.messageBox.scrollHeight},send:function(){this.isProcessing=!0;var t=this.currentUser.id,e=this.text.trim();console.log(e),0!==e.length&&(this.$socket.emit("chatmessage",{msg:e,UserId:t}),this.text="",this.isProcessing=!1)},fetchHistory:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getHistory();case 3:s=e.sent,n=s.data,console.log(n),t.newMessages=n,t.scrollToBottom(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:"無法取的歷史訊息"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},computed:Object(a["a"])({},Object(f["b"])(["currentUser","isAuthenticated"])),sockets:{connect:function(){console.log("connect");var t=this.currentUser.id;this.$socket.emit("joinPublic",t)},announce:function(t){console.log("announce data:",t)},newMessage:function(t){console.log("newMessage data:",t),this.newMessages.push({User:{id:t.user.id,avatar:t.user.avatar,name:t.user.name,account:t.user.account},text:t.msg,createdAt:t.date})},disconnect:function(){console.log("disconnect");var t=this.currentUser.id;this.$socket.emit("leavePublic",t)}}},g=h,p=(s("845e"),s("2877")),C=Object(p["a"])(g,c,o,!1,null,"05263906",null),b=C.exports,x={name:"publicMessage",components:{UserLeftColumn:r["a"],MessageBox:b},data:function(){return{userId:Number(this.$route.params.id),currentUserId:-1,onlineList:[]}},created:function(){this.currentUserId=this.currentUser.id},mounted:function(){var t=this.currentUser.id;this.$socket.emit("leave"),this.$socket.emit("joinPublic",t)},sockets:{connect:function(){console.log("socket connected")},onlineList:function(t){console.log("public-onlineList",t),this.onlineList=t},announce:function(t){console.log("announce data:",t)}},beforeRouteLeave:function(t,e,s){var n=this.currentUser.id;this.$socket.emit("leavePublic",n),s()},computed:Object(a["a"])({},Object(f["b"])(["currentUser","isAuthenticated"]))},_=x,k=(s("3424"),Object(p["a"])(_,n,i,!1,null,"5822fac9",null));e["default"]=k.exports},"5ded":function(t,e,s){},"845e":function(t,e,s){"use strict";s("5ded")},c59f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-69fc00a6.a8b3f87a.js.map