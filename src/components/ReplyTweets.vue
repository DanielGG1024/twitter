<template>
  <div class="reply-tweets">
    <router-link :to="{ name: 'user', params: { id: tweetReply.UserId } }">
      <div class="user-icon-wrapper">
        <img class="user-icon" :src="tweetReply.User.avatar" alt="" />
      </div>
    </router-link>
    <div class="reply-wrapper">
      <div class="reply-user">
        <span class="user-title">{{ tweetReply.User.name }}</span>
        <span class="user-account">＠{{ tweetReply.User.account }}．</span
        ><span class="time">
          {{ tweetReply.createdAt | fromNow }}
        </span>
      </div>
      <div class="reply-account">
        <span class="reply-account-mark">回覆</span
        ><span class="reply-account-name">＠{{ tweetUserAccount }}</span>
      </div>
      <div class="reply-txt">
        {{ tweetReply.comment }}
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "ReplyTweets",
  mixins: [fromNowFilter],
  props: {
    tweetReplies: {
      type: Object,
      required: true,
    },
    tweetUserAccount: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tweetReply: this.tweetReplies,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/replytweets.scss";
</style>
