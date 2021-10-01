<template>
  <div class="main">
    <div class="main-container">
      <Menu />
      <main class="content">
        <div class="content-wrapper">
          <Spinner v-if="isLoading" />
          <template v-else>
            <ReplyDetail
              :initial-tweet="tweet"
              @after-tweetReply-post="afterTweetReplyPost"
            />
            <!-- reply-tweets -->
            <div class="reply-wrapper">
              <ReplyTweets
                v-for="tweetReply in tweetReplies"
                :key="tweetReply.id"
                :tweetReplies="tweetReply"
                :tweetUserAccount="tweet.user.account"
              />
            </div>
          </template>
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
import Spinner from "./../components/Spinner";
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
export default {
  components: {
    Menu,
    Popular,
    ReplyDetail,
    ReplyTweets,
    Spinner,
  },
  data() {
    return {
      tweet: {
        user: {
          name: "",
          account: "",
          avatar: "",
        },
        description: "",
        createdAt: "",
        replyCounts: 0,
        likeCounts: 0,
        isLiked: false,
        id: -1,
        UserId: -1,
      },
      isLoading: true,
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
      // console.log("Reply  fetchTweetReplies");
    },
    async fetchReplyDetail() {
      const { id: tweetId } = this.$route.params;
      try {
        const { data } = await tweetAPI.getTweet({ tweetId });
        // console.log("fetchReplyDetail dataReply", data);
        const {
          description,
          createdAt,
          replyCounts,
          likeCounts,
          isLiked,
          id,
          User,
          UserId,
        } = data;
        this.tweet.user.name = User.name;
        this.tweet.user.account = User.account;
        this.tweet.user.avatar = User.avatar;
        this.tweet.description = description;
        this.tweet.createdAt = createdAt;
        this.tweet.replyCounts = replyCounts;
        this.tweet.likeCounts = likeCounts;
        this.tweet.isLiked = isLiked;
        this.tweet.id = id;
        this.tweet.UserId = UserId;
      } catch (error) {
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
        // console.log(data);
        this.tweetReplies = data;
        this.isLoading = false;
      } catch {
        this.isLoading = false;
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
  overflow-y: scroll;
}

.content-wrapper {
  height: 100%;
  width: 100%;
}
.reply-wrapper {
  overflow-y: scroll;
  height: auto;
}
</style>