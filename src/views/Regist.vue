<template>
  <div class="regist">
    <div class="header">
      <div class="logo-wrapper">
        <img src="./../assets/pic/Logo.png" class="logo" alt="" />
      </div>
      <h2 class="header-title">建立你的帳號</h2>
    </div>
    <div class="regist-form">
      <form action="" @submit.prevent.stop="handleSubmit">
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
            <!-- <div class="amount">5/50</div> -->
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-txt" :class="{ error: nameError }">
            <label for="name">名稱 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              @keyup="keyupNameWords"
              maxlength="50"
              v-model="name"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info" v-show="nameError">名稱不能為空</div>
            <div class="amount">{{ nameWords }}/50</div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-txt" :class="{ error: emailError }">
            <label for="email">Email </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              v-model="email"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info" v-show="emailError">{{ error.email }}</div>
            <!-- <div class="amount">5/50</div> -->
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
            <!-- <div class="amount">5/50</div> -->
          </div>
        </div>
        <div class="input-wrapper">
          <div class="input-txt" :class="{ error: confirPasswordError }">
            <label for="confirPassword">密碼確認 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              v-model="confirPassword"
              type="password"
              name="confirPassword"
              id="confirPassword"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info" v-show="confirPasswordError">
              密碼不能為空
            </div>
            <!-- <div class="amount">5/50</div> -->
          </div>
        </div>
        <div class="button-wrapper">
          <button
            :disabled="isProcessing"
            class="form-submit-btn"
            type="submit"
          >
            註冊
          </button>
        </div>
      </form>
      <div class="cancel-wrapper">
        <router-link to="/login" class="cancel">取消</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import userAPI from "./../apis/user";
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      confirPassword: "",
      accountError: false,
      nameError: false,
      emailError: false,
      passwordError: false,
      confirPasswordError: false,
      nameWords: "0",
      isProcessing: false,
      error: {
        email: "",
      },
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
    keyupNameWords() {
      const words = this.name.length;
      this.nameWords = words;
    },
    async handleSubmit() {
      /* eslint-disable */
      const account = this.account.trim();
      const name = this.name.trim();
      const email = this.email.trim();
      const password = this.password.trim();
      const confirPassword = this.confirPassword.trim();
      const emailRule =
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (account === "") {
        this.accountError = true;
      } else {
        this.accountError = false;
      }

      if (name === "") {
        this.nameError = true;
      } else {
        this.nameError = false;
      }

      if (email === "") {
        this.emailError = true;
        // 顯示不能為空
        this.error.email = "email不能為空";
      } else {
        if (email.search(emailRule) === -1) {
          this.emailError = true;
          // 顯示規格不符
          this.error.email = "email規格不符";
        } else {
          this.emailError = false;
        }
      }

      if (password === "") {
        this.passwordError = true;
      } else {
        this.passwordError = false;
      }

      if (confirPassword === "") {
        this.confirPasswordError = true;
      } else {
        this.confirPasswordError = false;
      }
      if (
        this.accountError ||
        this.nameError ||
        this.emailError ||
        this.passwordError ||
        this.confirPasswordError
      ) {
        return;
      }
      try {
        this.isProcessing = true;
        const data = `{
          "account":"${this.account}",
          "name":"${this.name}",
          "email":"${this.email}",
          "password":"${this.password}",
          "checkPassword":"${this.confirPassword}"
        }`;
        const data_JSON = JSON.parse(data);
        const response = await authorizationAPI.regist({ data_JSON });
        if (response.status !== 200) {
          throw new Error();
        }
        Toast.fire({
          icon: "success",
          title: "註冊成功!",
        });
        // 註冊成功後 拿剛剛輸入的值 跑api logIn 取得TOKEN 並導入主頁
        const responseLogin = await authorizationAPI.logIn({
          email: this.email,
          password: this.password,
        });
        console.log("responseLogin", responseLogin);
        localStorage.setItem("token", responseLogin.data.token);
        try {
          const fetchCurrentUser = await userAPI.getCurrentUser();
          this.$store.commit("setCurrentUser", fetchCurrentUser.data);
          this.$router.push("/main");
        } catch {
          Toast.fire({
            icon: "error",
            title: "無法轉入主頁,取得token",
          });
        }
      } catch (error) {
        // console.log("error:", err);
        // console.log("error.message:", err.message);
        // console.log("error.msg:", err.msg);
        console.log("error.message:", error.message);
        if (error.message === "Request failed with status code 409") {
          Toast.fire({
            icon: "warning",
            title: "account 或 Email已重覆註冊",
          });
        } else if (error.message === "Request failed with status code 401") {
          Toast.fire({
            icon: "warning",
            title: "密碼與密碼確認不符!",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "無法註冊帳號,請稍後",
          });
        }
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/regist.scss";
</style>