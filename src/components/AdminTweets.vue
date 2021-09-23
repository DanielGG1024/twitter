<template>
  <!-- tweets -->
  <div class="admin-tweet">
    <div class="wrapper">
      <div class="tweet-wrapper">
        <div class="icon-wrapper">
          <img class="user-icon" :src="tweet.User.avatar" alt="" />
        </div>
        <div class="admin-txt-wrapper">
          <div class="tweet-info">
            <span class="tweet-name">{{ tweet.User.name }}</span>
            <span class="tweet-account">＠{{ tweet.User.account }}</span>
            <span class="time">．{{ tweet.updatedAt | fromNow }}</span>
          </div>
          <div class="tweet-txt">
            {{ tweet.description }}
          </div>
        </div>
      </div>
    </div>
    <div @click="clickDelete(tweet.id)" class="close-wrapper">
      <img class="close-icon" src="./../assets/pic/adminClose.png" alt="" />
    </div>
  </div>
</template>
<script>
import { fromNowFilter } from "./../utils/mixins";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
export default {
  name: "adminTweets",
  mixins: [fromNowFilter],
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async clickDelete(id) {
      const tweetId = id;
      try {
        const response = await adminAPI.adminDeleteTweet({ tweetId });
        if(response.status !== 200){
          throw new Error
        }
        Toast.fire({
          icon:'success',
          title:'刪除成功!'
        })
        this.$emit('after-delete-tweet',tweetId)
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法刪除推文,請稍後",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/admintweets.scss";
</style>