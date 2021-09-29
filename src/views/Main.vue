<template>
  <div class="main">
    <div class="main-container">
      <Menu @after-tweet-post="afterTweetPost" />
      <main class="content">
        <div class="content-post">
          <div class="content-header">
            <span class="title">首頁</span>
          </div>
          <MainTweetPost @after-tweet-post="afterTweetPost" />
        </div>
        <Spinner v-if="isLoading" />

        <MainTweets
          v-else
          :allTweets="allTweets"
          @after-tweetReply-post="afterTweetPost"
        />

        <!-- @after-click-chat-btn="openReplyModal" -->
      </main>
      <Popular />
    </div>
  </div>
</template>
<script>
import Menu from "./../components/Menu";
import Popular from "./../components/Popular";
import MainTweetPost from "./../components/MainTweetPost";
import MainTweets from "./../components/MainTweets";
import Spinner from "./../components/Spinner";
import { Toast } from "./../utils/helpers";
import getTweetsAPI from "./../apis/tweet";

export default {
  namd: "main",
  components: {
    Menu,
    Popular,
    MainTweetPost,
    MainTweets,
    Spinner,
    // ReplyModal,
  },
  data() {
    return {
      isLoading: true,
      allTweets: [],
      tweet: {},
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await getTweetsAPI.getTweets();
        const { data } = response;
        this.allTweets = data;
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        Toast.fire({
          icon: "warning",
          title: "tweets錯誤唷",
        });
      }
    },
    afterTweetPost() {
      this.fetchTweets();
    },
  },
};
</script>
<style lang="scss" scoped>
.main-container {
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  font-family: "Noto Sans TC";
  margin: 0 auto;
}

.content {
  height: 100vh;
  width: 600px;
}

.content-post {
  height: 175px;
  width: 100%;
  border-bottom: 10px solid $tweetListBg;
}

.content-header {
  height: 55px;
  border: 1px solid $tweetListBg;
}

.title {
  font-size: 18px;
  line-height: 55px;
  font-weight: 700;
  padding-left: 15px;
}
</style>
