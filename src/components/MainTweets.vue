<template>
  <div class="tweets scrollbar">
    <div v-for="tweet in allTweets" :key="tweet.TweetId" class="onetweet">
      <div class="onetweet-user-icon-wrapper">
        <router-link :to="{ name: 'Reply', params: { id: tweet.TweetId } }">
          <img class="user-icon" :src="tweet.User.avatar" alt="" />
        </router-link>
      </div>
      <div class="onetweet-txt-wrapper">
        <div class="onetweet-txt-header">
          <router-link :to="{ name: 'Reply', params: { id: tweet.TweetId } }">
            <span class="user-title">{{ tweet.User.name }}</span>
            <span class="user-info">
              <a href="#" class="user-link"> {{ tweet.User.account }}</a>
              <span class="user-link-time"
                >．{{ tweet.createdAt | fromNow }}</span
              >
            </span>
          </router-link>
        </div>
        <router-link :to="{ name: 'Reply', params: { id: tweet.TweetId } }">
          <div class="onetweet-txt">
            {{ tweet.description }}
          </div>
        </router-link>
        <div class="onetweet-footer">
          <div class="chat">
            <div class="onetweet-footer-icon">
              <img
                @click="clickChatBtn(tweet.TweetId)"
                class="chat-icon"
                src="../assets/pic/chat.png"
                alt=""
              />
            </div>
            <span class="footer-amount">{{ tweet.RepliesCount }}</span>
          </div>
          <div class="heart">
            <div class="onetweet-footer-icon">
              <img class="heart-icon" src="../assets/pic/heart.png" alt="" />
            </div>
            <span class="footer-amount">{{ tweet.LikesCount }}</span>
          </div>
        </div>
      </div>
    </div>
    <ReplyModal
      :ReplyModalSwitch="ReplyModal"
      :tweet="tweet"
      @after-click-background="afterClickClose"
      @after-click-close="afterClickClose"
      @after-tweetReply-post="afterTweetReplyPost"
    />
  </div>
</template>
<script>
import ReplyModal from "./../components/ReplyModal";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "MainTweets",
  mixins: [fromNowFilter],
  components: {
    ReplyModal,
  },
  props: {
    allTweets: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      ReplyModal: false,
      tweet: {
        User: {
          avatar: "",
        },
      },
    };
  },
  methods: {
    clickChatBtn(tweetId) {
      this.ReplyModal = true;
      this.tweet = this.allTweets.find((item) => item.TweetId === tweetId);
    },
    afterClickClose() {
      this.ReplyModal = false;
    },
    afterTweetReplyPost() {
      this.ReplyModal = false;
      this.$emit("after-tweetReply-post");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/maintweets.scss";
</style>