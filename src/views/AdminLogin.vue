<template>
  <div class="admin">
    <div class="header">
      <div class="logo-wrapper">
        <img src="./../assets/pic/Logo.png" class="logo" alt="" />
      </div>
      <h2 class="header-title">後台登入</h2>
    </div>
    <div class="admin-form">
      <form action="" class="login">
        <div class="input-wrapper">
          <label for="account">帳號 </label>
          <input type="text" name="account" id="account" />
        </div>
        <div class="input-wrapper">
          <label for="password">密碼</label>
          <input type="text" name="name" id="password" />
        </div>
        <div class="button-wrapper">
          <button class="form-submit-btn" type="submit">註冊</button>
        </div>
      </form>
      <div class="other-link-wrapper">
        <router-link to="/login" class="">前台登入</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/adminlogin.scss";
</style>