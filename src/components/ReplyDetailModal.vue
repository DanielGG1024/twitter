<template>
  <transition name="fade">
    <div
      v-show="ReplyDetailModalSwitch"
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
          <!-- <router-link :to="{ name: 'user', params: { id: tweet.UserId } }"> -->
          <div class="reply-icon-wrapper">
            <img class="user-icon" :src="tweet.user.avatar" alt="" />
          </div>
          <!-- </router-link> -->
          <div class="txt-wrapper">
            <div class="txt-info">
              <span class="user-name">{{ tweet.user.name }}</span>
              <span class="user-account"
                >＠{{ tweet.user.account }}
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
              ><span class="footer-account">＠{{ tweet.user.account }}</span>
            </div>
          </div>
        </div>
        <div class="modal-txt">
          <div class="modal-content-post">
            <div class="modal-main-tweet">
              <div class="user-icon-wrapper">
                <img class="user-icon" :src="currentUser.avatar" alt="" />
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
                @click="handleSubmit(tweet.id)"
                class="modal-main-tweet-button"
                :disabled="isProcessing"
              >
                {{ submitMessage }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import userAPI from "./../apis/user";
import tweetAPI from "./../apis/tweet";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
export default {
  name: "ReplyDetailModal",
  props: {
    ReplyDetailModalSwitch: {
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
      submitMessage: "推文",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
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
        this.isProcessing = true;
        this.submitMessage = "請稍後..";
        const data = `{
          "comment":"${tweet}"
        }`;
        const data_JSON = JSON.parse(data);
        const response = await tweetAPI.postTweetReply({ tweetId, data_JSON });
        if (response.data.status !== "success") {
          throw new Error();
        }
        this.$emit("after-tweetReply-post");
        this.teweetContent = "";
        Toast.fire({
          icon: "success",
          title: "發送成功!",
        });
        this.isProcessing = false;
        this.submitMessage = "推文";
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法回復,請稍後",
        });
        this.isProcessing = false;
        this.submitMessage = "推文";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/replydetailmodal.scss";
</style>