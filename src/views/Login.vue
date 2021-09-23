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
          <button class="form-submit-btn" type="submit">登入</button>
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
export default {
  data() {
    return {
      account: "",
      password: "",
      accountError: false,
      PasswordError: false,
      showAccountFocus: false,
      showPasswordFocus: false,
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
        const response = await authorizationAPI.logIn({
          email: this.account,
          password: this.password,
        });
        // console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("token", data.token);
        this.$store.commit("setCurrentUser", data.user);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "請輸入正確帳號與密碼",
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/login.scss";
</style>