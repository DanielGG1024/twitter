<template>
  <div id="tweet-list">
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <div class="tweet-avatar">
        <img :src="tweet.user.avatar" alt="tweet-avatar" />
      </div>
      <div class="tweet-main">
        <div class="tweet-user-info">
          <div class="name">{{ tweet.user.name }}</div>
          <div class="account">
            @{{ tweet.user.account
            }}<span>‧{{ tweet.updatedAt | fromNow }}</span>
          </div>
        </div>
        <div class="tweet-content scrollbar">
          {{ tweet.description }}
        </div>
        <div class="tweet-status">
          <div class="replies state">
            <img src="../assets/pic/chat.png" alt="chat-icon" />
            

            <div class="replies-count count">{{ tweet.replyCount }}</div>
          </div>
          <div class="likes state">
            <img src="../assets/pic/heart.png" alt="heart-icon" />
            <div class="likes-count count">{{ tweet.likeCount }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <ReplyModal
      :ReplyModalSwitch="ReplyModal"
      :tweet="tweet"
      @after-click-background="afterClickClose"
      @after-click-close="afterClickClose"
      @after-tweetReply-post="afterTweetReplyPost"
    /> -->
  </div>
  
</template>

<script>
// import ReplyModal from "./../components/ReplyModal";
import { fromNowFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  mixins: [fromNowFilter],
  components: {
    // ReplyModal,
  },
  data() {
    return {
      tweets: [],
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserTweets(userId);
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchUserTweets(id);
    next();
  },

  methods: {
    async fetchUserTweets(userId) {
      try {
        const { data } = await usersAPI.getUserTweets({ userId });
        // console.log('this', data)
        this.tweets = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    // afterClickClose() {
    //   this.ReplyModal = false;
    // },
    // afterTweetReplyPost() {
    //   this.ReplyModal = false;
    //   this.$emit("after-tweetReply-post");
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userTweetList.scss";
</style>