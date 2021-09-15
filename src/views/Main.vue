<template>
  <div class="main">
    <div class="main-container">
      <Menu />
      <main class="content">
        <div class="content-post">
          <div class="content-header">
            <span class="title">首頁</span>
          </div>
          <MainTweetPost />
        </div>
        <MainTweets @after-click-chat-btn="openReplyModal" />
      </main>
      <Popular />
    </div>
    <ReplyModal
      :ReplyModalSwitch="ReplyModal"
      @after-click-close="afterClickClose"
      @after-click-background="afterClickClose"
    />
  </div>
</template>
<script>
import Menu from "./../components/Menu";
import Popular from "./../components/Popular";
import MainTweetPost from "./../components/MainTweetPost";
import MainTweets from "./../components/MainTweets";

import ReplyModal from "./../components/ReplyModal";
export default {
  namd: "main",
  components: {
    Menu,
    Popular,
    MainTweetPost,
    MainTweets,
    ReplyModal,
  },
  data() {
    return {
      ReplyModal: false,
    };
  },
  methods: {

    afterClickClose() {
      console.log("after-click-close");
      this.ReplyModal = false;
    },
    openReplyModal() {
      this.ReplyModal = true;
      console.log("this.ReplyModal = true");
    },
  },
};
</script>
<style scoped>
.main-container {
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  font-family: "Noto Sans TC";
}

.content {
  height: 100vh;
  width: 40%;
}

.content-post {
  height: 175px;
  width: 100%;
  border-bottom: 10px solid #e6ecf0;
}

.content-header {
  height: 55px;
  border: 1px solid #e6ecf0;
}

.title {
  font-size: 18px;
  line-height: 55px;
  font-weight: 700;
  padding-left: 15px;
}
</style>
