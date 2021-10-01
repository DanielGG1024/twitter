<template>
  <div class="admin">
    <div class="header">
      <div class="logo-wrapper">
        <img src="./../assets/pic/Logo.png" class="logo" alt="" />
      </div>
      <h2 class="header-title">後台登入</h2>
    </div>
    <div class="admin-form">
      <form action="" class="login" @submit.prevent.stop="handleSubmit">
        <div class="input-wrapper">
          <div class="input-txt" :class="{ error: accountError }">
            <label for="account">帳號 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              v-model="account"
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
          <div class="input-txt" :class="{ error: passwordError }">
            <label for="password">密碼 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              v-model="password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info" v-show="passwordError">密碼不能為空</div>
            <div class="amount">5/50</div>
          </div>
        </div>

        <div class="button-wrapper">
          <button
            :disabled="isProcessing"
            class="form-submit-btn"
            type="submit"
          >
            {{ adminLoginMessage }}
          </button>
        </div>
      </form>
      <div class="other-link-wrapper">
        <router-link to="/login" class="">前台登入</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      account: "",
      password: "",
      accountError: false,
      passwordError: false,
      isProcessing: false,
      adminLoginMessage: "登入",
    };
  },
  methods: {
    addFocus(e) {
      const target = e.target;
      target.parentNode.classList.add("focus");
    },
    removeFocus(e) {
      const target = e.target;
      target.parentNode.classList.remove("focus");
    },
    async handleSubmit() {
      const account = this.account.trim();
      const password = this.password.trim();

      if (account === "") {
        this.accountError = true;
      } else {
        this.accountError = false;
      }

      if (password === "") {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }
      try {
        this.isProcessing = true;
        this.adminLoginMessage = "請稍後...";
        const response = await adminAPI.adminlogIn({
          email: this.account,
          password: this.password,
        });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.token);
        this.$store.commit("setCurrentUser", data.user);
        this.$router.push("/adminMain");
        this.isProcessing = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法登入後台,請稍後",
        });
        this.isProcessing = false;
        this.adminLoginMessage = "登入";
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/adminlogin.scss";
</style>