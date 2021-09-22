<template>
  <div class="login">
    <div class="header">
      <div class="logo-wrapper">
        <img src="./../assets/pic/Logo.png" class="logo" alt="" />
      </div>
      <h2 class="header-title">登入 Alphitter</h2>
    </div>
    <div class="login-form">
      <form action="" class="login">
        <div class="input-wrapper">
          <div class="input-txt">
            <label for="account">帳號 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              type="text"
              name="account"
              id="account"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info">帳號錯誤</div>
            <div class="amount">5/50</div>
          </div>
        </div>

        <div class="input-wrapper">
          <div class="input-txt">
            <label for="password">密碼 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              type="text"
              name="password"
              id="password"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info">密碼錯誤</div>
            <div class="amount">5/50</div>
          </div>
        </div>
        <!-- 
        <div class="input-wrapper">
          <label for="password">密碼</label>
          <input
            @focus="addFocus"
            @blur="removeFocus"
            type="text"
            name="name"
            id="password"
          />
        </div> -->

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
export default {
  methods: {
    addFocus(e) {
      const target = e.target;
      target.parentNode.classList.add("focus");
    },
    removeFocus(e) {
      const target = e.target;
      target.parentNode.classList.remove("focus");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/login.scss";
</style>