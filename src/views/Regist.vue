<template>
  <div class="regist">
    <div class="header">
      <div class="logo-wrapper">
        <img src="./../assets/pic/Logo.png" class="logo" alt="" />
      </div>
      <h2 class="header-title">建立你的帳號</h2>
    </div>
    <div class="regist-form">
      <form action="">
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
            <label for="name">名稱 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info">名稱錯誤</div>
            <div class="amount">5/50</div>
          </div>
        </div>

        <div class="input-wrapper">
          <div class="input-txt">
            <label for="email">Email </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info">email錯誤</div>
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

        <div class="input-wrapper">
          <div class="input-txt">
            <label for="confirPassword">密碼確認 </label>
            <input
              @focus="addFocus"
              @blur="removeFocus"
              type="text"
              name="confirPassword"
              id="confirPassword"
            />
          </div>
          <div class="input-wrapper-info">
            <div class="error-info">密碼錯誤</div>
            <div class="amount">5/50</div>
          </div>
        </div>

        <div class="button-wrapper">
          <button class="form-submit-btn" type="submit">註冊</button>
        </div>
      </form>
      <div class="cancel-wrapper">
        <router-link to="/login" class="cancel">取消</router-link>
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
@import "./../assets/scss/regist.scss";
</style>