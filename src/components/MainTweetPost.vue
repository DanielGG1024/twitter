<template>
  <div class="main-tweet">
    <div class="user-icon-wrapper">
      <img class="user-icon" :src="avatar" alt="" />
    </div>
    <textarea
      class="main-tweet-txt"
      name=""
      id=""
      value="hello"
      placeholder="有甚麼新鮮事?"
      v-model="mainTweetPost"
    ></textarea>
    <button @click.prevent.stop="handleSubmit" class="main-tweet-button">
      推文
    </button>
  </div>
</template>
<script lang="ts">
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
import userAPI from "./../apis/user";
import { mapState } from "vuex";
export default {
  name: "MainTweetPost",
  data() {
    return {
      mainTweetPost: "",
      avatar: "",
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const userId = localStorage.getItem("userId");
      try {
        const response = await userAPI.getUser({ userId });
        console.log("MainTweetPost", response);
        const { data } = response;
        this.avatar = data.avatar;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料,請稍後",
        });
      }
    },
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
        const data = `{
          "description":"${tweet}"
        }`;
        const data_JSON = JSON.parse(data);
        const response = await tweetAPI.postTweet({ data_JSON });
        if (response.data.status !== "success") {
          throw new Error();
        }
        Toast.fire({
          icon: "success",
          title: "發送成功!",
        });
        this.$emit("after-tweet-post");
        this.mainTweetPost = "";
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法送出推文,請稍後",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/maintweetpost.scss";
</style>