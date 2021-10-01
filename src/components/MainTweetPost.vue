<template>
  <div class="main-tweet">
    <div class="user-icon-wrapper">
      <img class="user-icon" :src="currentUser.avatar" alt="" />
    </div>
    <textarea
      class="main-tweet-txt"
      name=""
      id=""
      value="hello"
      placeholder="有甚麼新鮮事?"
      v-model="mainTweetPost"
    ></textarea>
    <button
      @click.prevent.stop="handleSubmit"
      class="main-tweet-button"
      :disabled="isProcessing"
    >
      {{ submitMessage }}
    </button>
    <p></p>
  </div>
</template>
<script lang="ts">
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
import { mapState } from "vuex";
export default {
  name: "MainTweetPost",
  data() {
    return {
      mainTweetPost: "",
      avatar: "",
      isProcessing: false,
      submitMessage: "推文",
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    async handleSubmit() {
      const tweet = this.mainTweetPost;
      if (tweet.trim().length < 1) {
        Toast.fire({
          icon: "warning",
          title: "內容不能為空白",
        });
        return;
      }
      if (tweet.length > 140) {
        Toast.fire({
          icon: "warning",
          title: "內容不能超過140個字",
        });
        return;
      }
      try {
        this.isProcessing = true;
        this.submitMessage = "稍後";
        const data = `{
          "description":"${tweet}"
        }`;
        const data_JSON = JSON.parse(data);
        const response = await tweetAPI.postTweet({ data_JSON });
        console.log("maintweetpost");
        if (response.data.status !== "success") {
          throw new Error();
        }
        Toast.fire({
          icon: "success",
          title: "發送成功!",
        });
        this.$emit("after-tweet-post");
        this.mainTweetPost = "";
        this.isProcessing = false;
        this.submitMessage = "推文";
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法送出推文,請稍後",
        });
        this.isProcessing = false;
        this.submitMessage = "推文";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/maintweetpost.scss";
</style>