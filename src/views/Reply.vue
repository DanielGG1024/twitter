<template>
  <div class="main">
    <div class="main-container">
      <Menu />
      <main class="content">
        <div class="content-wrapper">
          <ReplyDetail />
          <!-- reply-tweets -->
          <ReplyTweets />
        </div>
      </main>
      <Popular />
    </div>
  </div>
</template>

<script>
import Menu from "./../components/Menu";
import Popular from "./../components/Popular";
import ReplyDetail from "./../components/ReplyDetail";
import ReplyTweets from "./../components/ReplyTweets";
export default {
  components: {
    Menu,
    Popular,
    ReplyDetail,
    ReplyTweets,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  font-family: "Noto Sans TC";
}

.content {
  height: 100vh;
  width: 600px;
}

.content-wrapper {
  height: 175px;
  width: 100%;
}
</style>