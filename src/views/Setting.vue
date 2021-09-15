<template>
  <div class="main">
    <div class="main-container">
      <Menu />
      <main class="content">
        <div class="content-header">
          <span class="title">首頁</span>
        </div>
        <div class="setting-form">
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
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Menu from "./../components/Menu";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang="scss" scoped>
@import './../assets/scss/setting.scss';
</style>