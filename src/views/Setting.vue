<template>
  <div class="main">
    <div class="main-container">
      <Menu />
      <main class="content">
        <div class="content-header">
          <span class="title">首頁</span>
        </div>
        <div class="setting-form">
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
                  v-model="name"
                  maxlength="50"
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
                <div class="error-info" v-show="emailError">
                  {{ error.email }}
                </div>
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
                <div class="error-info" v-show="passwordError">
                  密碼不能為空
                </div>
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
              <button class="form-submit-btn" type="submit">修改</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Menu from "./../components/Menu";
import { mapState } from "vuex";
import userAPI from "./../apis/user";
import { Toast } from "./../utils/helpers";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      confirPassword: "",
      nameWords: 0,
      accountError: false,
      nameError: false,
      emailError: false,
      passwordError: false,
      confirPasswordError: false,
      error: {
        email: "",
      },
    };
  },
  created() {
    this.fetchUser();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    async fetchUser() {
      try {
        // console.log("setting");
        const userId = this.currentUser.id;
        // console.log("userId", userId);
        const response = await userAPI.getUser({ userId });
        // console.log("setting response data", response);
        if (response.status !== 200) {
          throw new Error();
        }
        const { account, name, email } = response.data;
        this.account = account;
        this.name = name;
        this.email = email;
        this.keyupNameWords();
      } catch (error) {
        console.log(error);
        // Toast.fire({
        //   icon: "error",
        //   title: "無法取的使用者資料,setting",
        // });
      }
    },
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
      // console.log("submit star");
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
        const userId = this.currentUser.id;
        const data = `{
          "account":"${this.account}",
          "name":"${this.name}",
          "email":"${this.email}",
          "password":"${this.password}",
          "checkPassword":"${this.confirPassword}"
        }`;
        const JSON_data = JSON.parse(data);
        const response = await userAPI.putUser({ userId, JSON_data });
        console.log(response);
        if (response.status !== 200) {
          throw new Error();
        }
        Toast.fire({
          icon: "success",
          title: "成功修改資料",
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法修改資料,請稍後",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/setting.scss";
</style>