(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e1b3d46"],{"498a":function(t,s,r){"use strict";var a=r("23e7"),o=r("58a8").trim,e=r("c8d2");a({target:"String",proto:!0,forced:e("trim")},{trim:function(){return o(this)}})},5899:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,s,r){var a=r("1d80"),o=r("577e"),e=r("5899"),n="["+e+"]",c=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),u=function(t){return function(s){var r=o(a(s));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"681f":function(t,s,r){"use strict";r("9b34")},7696:function(t,s,r){"use strict";var a=r("2fa3");s["a"]={logIn:function(t){var s=t.email,r=t.password;return a["b"].post("users/login",{email:s,password:r})},regist:function(t){var s=t.data_JSON;return a["b"].post("users",s)}}},"9b34":function(t,s,r){},a55b:function(t,s,r){"use strict";r.r(s);var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"login"},[t._m(0),r("div",{staticClass:"login-form"},[r("form",{staticClass:"login",attrs:{action:""},on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"input-txt",class:{error:t.accountError,focus:t.showAccountFocus}},[r("label",{attrs:{for:"account"}},[t._v("帳號 ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{maxlength:"20",type:"text",name:"account",id:"account"},domProps:{value:t.account},on:{focus:t.addFocusAccount,blur:t.removeFocusAccount,input:function(s){s.target.composing||(t.account=s.target.value)}}})]),r("div",{staticClass:"input-wrapper-info"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.accountError,expression:"accountError"}],staticClass:"error-info"},[t._v("帳號不能為空")]),r("div",{staticClass:"amount"},[t._v("5/50")])])]),r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"input-txt",class:{error:t.PasswordError,focus:t.showPasswordFocus}},[r("label",{attrs:{for:"password"}},[t._v("密碼 ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password"},domProps:{value:t.password},on:{focus:t.addFocusPassword,blur:t.removeFocusPassword,input:function(s){s.target.composing||(t.password=s.target.value)}}})]),r("div",{staticClass:"input-wrapper-info"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.PasswordError,expression:"PasswordError"}],staticClass:"error-info"},[t._v("密碼不能為空")]),r("div",{staticClass:"amount"},[t._v("5/50")])])]),r("div",{staticClass:"button-wrapper"},[r("button",{staticClass:"form-submit-btn",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" "+t._s(t.loginMessage)+" ")])])]),r("div",{staticClass:"other-link-wrapper"},[r("router-link",{attrs:{to:"/regist"}},[t._v("註冊Alphitter")]),r("span",[t._v("．")]),r("router-link",{attrs:{to:"/adminlogin"}},[t._v("後台登入")])],1)])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo-wrapper"},[a("img",{staticClass:"logo",attrs:{src:r("a896"),alt:""}})]),a("h2",{staticClass:"header-title"},[t._v("登入 Alphitter")])])}],e=r("1da1"),n=(r("96cf"),r("498a"),r("2fa3")),c=r("7696"),i=r("1602"),u={data:function(){return{account:"",password:"",accountError:!1,PasswordError:!1,showAccountFocus:!1,showPasswordFocus:!1,isProcessing:!1,loginMessage:"登入"}},methods:{addFocusAccount:function(){this.showAccountFocus=!0},removeFocusAccount:function(){this.showAccountFocus=!1},addFocusPassword:function(){this.showPasswordFocus=!0},removeFocusPassword:function(){this.showPasswordFocus=!1},handleSubmit:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function s(){var r,a,o,e,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,r=t.account.trim(),a=t.password.trim(),t.accountError=""===r,t.PasswordError=""===a,!t.accountError&&!t.PasswordError){s.next=7;break}return s.abrupt("return");case 7:return t.isProcessing=!0,t.loginMessage="請稍後...",s.next=11,c["a"].logIn({email:t.account,password:t.password});case 11:if(o=s.sent,e=o.data,"success"===e.status){s.next=15;break}throw new Error(e.message);case 15:return localStorage.setItem("token",e.token),s.next=18,i["a"].getCurrentUser();case 18:u=s.sent,t.$store.commit("setCurrentUser",u.data),t.$router.push("/main"),s.next=36;break;case 23:s.prev=23,s.t0=s["catch"](0),s.t1=s.t0.response.data.message,s.next="Passwords did not match"===s.t1?28:"No such user found"===s.t1?30:32;break;case 28:return n["a"].fire({icon:"warning",title:"請輸入正確密碼"}),s.abrupt("break",34);case 30:return n["a"].fire({icon:"warning",title:"請輸入正確帳號"}),s.abrupt("break",34);case 32:return n["a"].fire({icon:"error",title:"無法登入,請稍後"}),s.abrupt("break",34);case 34:t.loginMessage="登入",t.isProcessing=!1;case 36:case"end":return s.stop()}}),s,null,[[0,23]])})))()}}},p=u,d=(r("681f"),r("2877")),l=Object(d["a"])(p,a,o,!1,null,"1b0f0eb4",null);s["default"]=l.exports},a896:function(t,s){t.exports="data:image/png;base64,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"},c8d2:function(t,s,r){var a=r("d039"),o=r("5899"),e="​᠎";t.exports=function(t){return a((function(){return!!o[t]()||e[t]()!=e||o[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-6e1b3d46.acd7e805.js.map