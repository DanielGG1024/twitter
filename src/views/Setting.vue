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
@import "./../assets/scss/setting.scss";
</style>