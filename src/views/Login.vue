<template>
  <div class="login">
    <div class="header">
      <div class="logo-wrapper">
        <img src="./../assets/pic/Logo.png" class="logo" alt="" />
      </div>
      <h2 class="header-title">登入 Alphitter</h2>
    </div>
    <div class="login-form">
      <form @submit.prevent.stop="handleSubmit" action="" class="login">
        <div class="input-wrapper">
          <div
            class="input-txt"
            :class="{ error: accountError, focus: showAccountFocus }"
          >
            <label for="account">帳號 </label>
            <input
              @focus="addFocusAccount"
              @blur="removeFocusAccount"
              v-model="account"
              maxlength="20"
              type="text"
              name="account"
              id="account"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info" v-show="accountError">帳號不能為空</div>
            <div class="amount">5/50</div>
          </div>
        </div>
        <div class="input-wrapper">
          <div
            class="input-txt"
            :class="{
              error: PasswordError,
              focus: showPasswordFocus,
            }"
          >
            <label for="password">密碼 </label>
            <input
              @focus="addFocusPassword"
              @blur="removeFocusPassword"
              v-model="password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info" v-show="PasswordError">密碼不能為空</div>
            <div class="amount">5/50</div>
          </div>
        </div>
        <div class="button-wrapper">
          <button
            :disabled="isProcessing"
            class="form-submit-btn"
            type="submit"
          >
            {{ loginMessage }}
          </button>
        </div>
      </form>
      <div class="other-link-wrapper">
        <router-link to="/regist" class="">註冊Alphitter</router-link>
        <span>．</span>
        <router-link to="/adminlogin">後台登入</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "../utils/helpers";
import authorizationAPI from "./../apis/authorization";
// import userAPI from "./../apis/user";
export default {
  data() {
    return {
      account: "",
      password: "",
      accountError: false,
      PasswordError: false,
      showAccountFocus: false,
      showPasswordFocus: false,
      isProcessing: false,
      loginMessage: "登入",
    };
  },
  methods: {
    addFocusAccount() {
      this.showAccountFocus = true;
    },
    removeFocusAccount() {
      this.showAccountFocus = false;
    },
    addFocusPassword() {
      this.showPasswordFocus = true;
    },
    removeFocusPassword() {
      this.showPasswordFocus = false;
    },
    async handleSubmit() {
      try {
        //防止空值
        const account = this.account.trim();
        const password = this.password.trim();
        if (account === "") {
          this.accountError = true;
        } else {
          this.accountError = false;
        }
        if (password === "") {
          this.PasswordError = true;
        } else {
          this.PasswordError = false;
        }
        if (this.accountError || this.PasswordError) return;
        this.isProcessing = true;
        // 皆有值開始登入
        this.loginMessage = "請稍後...";
        const { data } = await authorizationAPI.logIn({
          email: this.account,
          password: this.password,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.token);
        // 似乎可以改成 dispatch 
        // this.$store.dispatch('fetchCurrentUser')
        // const fetchCurrentUser = await userAPI.getCurrentUser();
        // console.log(fetchCurrentUser)
        // this.$store.commit("setCurrentUser", fetchCurrentUser.data);
        this.$router.push("/main");
      } catch (error) {
        switch (error.response.data.message) {
          case "Passwords did not match":
            Toast.fire({
              icon: "warning",
              title: "請輸入正確密碼",
            });
            break;
          case "No such user found":
            Toast.fire({
              icon: "warning",
              title: "請輸入正確帳號",
            });
            break;
          default:
            Toast.fire({
              icon: "error",
              title: "無法登入,請稍後",
            });
            break;
        }
        this.loginMessage = "登入";
        this.isProcessing = false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/login.scss";
</style>