<template>
  <div class="reply-tweets">
    <div class="user-icon-wrapper">
      <img class="user-icon" :src="tweetReply.User.avatar" alt="" />
    </div>
    <div class="reply-wrapper">
      <div class="reply-user">
        <span class="user-title">{{tweetReply.User.name}}</span>
        <span class="user-account">{{tweetReply.User.account}}．</span
        ><span class="time">
          {{ tweetReply.createdAt | fromNow }}
        </span>
      </div>
      <div class="reply-account">
        <span class="reply-account-mark">回覆</span
        ><span class="reply-account-name">＠apple</span>
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
