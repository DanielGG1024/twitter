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
          <label for="account">帳號 </label>
          <input type="text" name="account" id="account" />
        </div>
        <div class="input-wrapper">
          <label for="name">名稱</label>
          <input type="text" name="name" id="name" />
        </div>
        <div class="input-wrapper">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div class="input-wrapper">
          <label for="password">密碼</label>
          <input type="text" name="password" id="password" />
        </div>
        <div class="input-wrapper">
          <label for="confirPassword">密碼確認</label>
          <input type="text" name="confirPassword" id="confirPassword" />
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
<style lang="scss" scoped>
@import "./../assets/scss/regist.scss";
</style>