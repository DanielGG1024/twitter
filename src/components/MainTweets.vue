<template>
  <div class="tweets scrollbar" ref="chat">
    <div v-for="tweet in allTweets" :key="tweet.TweetId" class="onetweet">
      <div class="onetweet-user-icon-wrapper">
        <router-link :to="{ name: 'user', params: { id: tweet.User.id } }">
          <img class="user-icon" :src="tweet.User.avatar" alt="" />
        </router-link>
      </div>
      <div class="onetweet-txt-wrapper">
        <div class="onetweet-txt-header">
          <router-link :to="{ name: 'Reply', params: { id: tweet.TweetId } }">
            <span class="user-title">{{ tweet.User.name }}</span>
            <span class="user-info">
              <a href="#" class="user-link"> ＠{{ tweet.User.account }}</a>
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
              <button
                v-if="tweet.isLiked"
                @click.stop.prevent="removeLike(tweet)"
                :disabled="isProcessing"
              >
                <img src="../assets/pic/icon_like_fill.png" alt="heart-icon" />
              </button>
              <button
                v-else
                @click.stop.prevent="addLike(tweet)"
                :disabled="isProcessing"
              >
                <img src="../assets/pic/heart.png" alt="heart-icon" />
              </button>
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
import { Toast } from "./../utils/helpers";
import tweetAPI from "../apis/tweet";

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
      isProcessing: false,
    };
  },
  methods: {
    clickChatBtn(tweetId) {
      // console.log("asdf");
      this.ReplyModal = true;
      this.tweet = this.allTweets.find((item) => item.TweetId === tweetId);
      // console.log("clickChatBtn", this.tweet);
    },
    afterClickClose() {
      this.ReplyModal = false;
    },
    afterTweetReplyPost() {
      this.ReplyModal = false;
      this.$emit("after-tweetReply-post");
    },
    async addLike(tweet) {
      // console.log("tweet", tweet);
      try {
        this.isProcessing = true;
        const tweetId = tweet.TweetId;
        const { data } = await tweetAPI.addLike({ tweetId });
        // console.log("add data", data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        tweet.LikesCount += 1;
        tweet.isLiked = true;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        // console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法喜歡,請稍後在試",
        });
      }
    },
    async removeLike(tweet) {
      // console.log("tweet", tweet);
      try {
        this.isProcessing = true;
        const tweetId = tweet.TweetId;
        const response = await tweetAPI.removeLike({ tweetId });
        // console.log("delete reponse", response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        tweet.isLiked = false;
        tweet.LikesCount -= 1;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        // console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取消喜歡,請稍後在試",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/maintweets.scss";
</style>