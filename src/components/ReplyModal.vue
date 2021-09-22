<template>
  <transition name="fade">
    <div
      v-show="ReplyModalSwitch"
      @click="clickModalBackground"
      class="modal-background"
    >
      <div class="modal">
        <div class="modal-header">
          <div @click="clickClose" class="close-icon">
            <img src="../assets/pic/close.png" class="close" alt="" />
          </div>
        </div>
        <div class="reply">
          <div class="reply-icon-wrapper">
            <img class="user-icon" :src="tweet.User.avatar" alt="" />
          </div>
          <div class="txt-wrapper">
            <div class="txt-info">
              <span class="user-name"></span>
              <span class="user-account"
                >＠{{ tweet.User.account }}
                <span>．{{ tweet.createdAt }}</span>
              </span>
            </div>
            <div class="txt">
              <p>
                {{ tweet.description }}
              </p>
            </div>
            <div class="txt-footer">
              <span class="txt-footer-reply">回覆給</span
              ><span class="footer-account">＠{{ tweet.account }}</span>
            </div>
          </div>
        </div>
        <div class="modal-txt">
          <div class="modal-content-post">
            <div class="modal-main-tweet">
              <div class="user-icon-wrapper">
                <img class="user-icosn" :src="avatar" alt="" />
              </div>
              <div class="modal-main-tweet-txt">
                <textarea
                  v-model="teweetContent"
                  class="modal-textarea"
                  placeholder="有甚麼新鮮事?"
                ></textarea>
                <span v-show="contentError" class="modal-info">{{
                  errorContentMessage
                }}</span>
              </div>
              <button
                @click="handleSubmit(tweet.TweetId)"
                class="modal-main-tweet-button"
              >
                推文
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import userAPI from "./../apis/user";
import tweetAPI from "./../apis/tweet";
import { Toast } from "./../utils/helpers";
export default {
  name: "ReplyModal",
  props: {
    ReplyModalSwitch: {
      type: Boolean,
      required: true,
    },
    tweet: {
      type: Object,
    },
  },
  data() {
    return {
      teweetContent: "",
      contentError: false,
      errorContentMessage: "",
      avatar: "",
    };
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
    clickClose() {
      this.$emit("after-click-close");
    },
    clickModalBackground(e) {
      const target = e.target;
      if (target.className === "modal-background") {
        this.$emit("after-click-background");
      } else {
        return;
      }
    },
    async handleSubmit(tweetId) {
      const tweet = this.teweetContent;
      if (tweet.trim().length === 0) {
        this.contentError = true;
        this.errorContentMessage = "內容不可以空白";
        return;
      } else {
        if (tweet.length > 140) {
          this.contentError = true;
          this.errorContentMessage = "字數不可超過140字";
          return;
        }
        this.contentError = false;
        this.errorContentMessage = "";
      }
      try {
        const data = `{
          "comment":"${tweet}"
        }`;
        const data_JSON = JSON.parse(data);
        const response = await tweetAPI.postTweetReply({ tweetId, data_JSON });
        if (response.data.status !== "success") {
          throw new Error();
        }
          this.$emit("after-tweetReply-post");
          this.teweetContent = ""
        Toast.fire({
          icon: "success",
          title: "發送成功!",
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法回復,請稍後",
        });
      }
      // console.log("tweetID", tweetId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/replymodal.scss";
</style>