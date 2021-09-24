<template>
  <div id="window">
    <div class="publicMessage">
      <!-- Menu -->
      <Menu @after-tweet-post="afterTweetPost" />
      <!-- userList  -->
      <div class="userList">
        <div class="content-header">
          <span class="title">上線使用者</span>
        </div>
        <!-- 使用者本人寫在這 -->
      </div>
      <div class="messageBox">
        <div class="content-header">
          <span class="title">上線使用者</span>
        </div>

        <MessageBox />
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "./../components/Menu";
import MessageBox from './../components/MessageBox'
export default {
  components: {
    Menu,
    MessageBox
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/publicMessage.scss";
</style>