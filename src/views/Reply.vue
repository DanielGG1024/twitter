<template>
  <div class="main">
    <div class="main-container">
      <Menu />
      <main class="content">
        <div class="content-wrapper">
          <ReplyDetail
            :initial-tweet="tweet"
            @after-tweetReply-post="afterTweetReplyPost"
          />
          <!-- reply-tweets -->
          <ReplyTweets
            v-for="tweetReply in tweetReplies"
            :key="tweetReply.UserId"
            :tweetReplies="tweetReply"
          />
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
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
export default {
  components: {
    Menu,
    Popular,
    ReplyDetail,
    ReplyTweets,
  },
  data() {
    return {
      tweet: {
        user: {
          name: "",
          account: "",
        },
        description: "",
        createdAt: "",
        replyCounts: 0,
        likeCounts: 0,
        isLike: false,
        id: -1,
      },
      tweetReplies: "",
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchReply(id);
    next();
  },
  created() {
    this.fetchReplyDetail();
    this.fetchTweetReplies();
  },
  methods: {
    afterTweetReplyPost() {
      this.fetchReplyDetail();
      this.fetchTweetReplies();
      console.log("Reply  fetchTweetReplies");
    },
    async fetchReplyDetail() {
      const { id: tweetId } = this.$route.params;
      try {
        const response = await tweetAPI.getTweet({ tweetId });
        const { data } = response;
        console.log("data", data);
        const {
          description,
          createdAt,
          replyCounts,
          likeCounts,
          isLike,
          id,
          user,
        } = data;
        this.tweet.user.name = user.name;
        this.tweet.user.account = user.account;
        this.tweet.description = description;
        this.tweet.createdAt = createdAt;
        this.tweet.replyCounts = replyCounts;
        this.tweet.likeCounts = likeCounts;
        this.tweet.isLike = isLike;
        this.tweet.id = id;
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得資料",
        });
      }
    },
    async fetchTweetReplies() {
      const { id: tweetId } = this.$route.params;
      try {
        const response = await tweetAPI.getTweetReplies({ tweetId });
        const { data } = response;

        console.log("fetchTweetReplies-response", response);
        console.log("fetchTweetReplies-data", data);
        this.tweetReplies = data;
        console.log("this.tweetReplies:", this.tweetReplies);
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得回復,請稍後在試",
        });
      }
    },
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
  overflow: scroll;
}

.content-wrapper {
  height: 175px;
  width: 100%;
}
</style>