<template>
  <transition name="fade">
    <div
      v-show="MainTweetPostModalSwitch"
      @click="clickModalBackground"
      class="modal-background"
    >
      <div class="modal">
        <div class="modal-header">
          <div @click="ciickClose" class="close-icon">
            <img src="../assets/pic/close.png" class="close" alt="" />
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
                <span class="modal-info" v-show="contentError">
                  {{ errorContentMessage }}</span
                >
              </div>
              <button
                @click.prevent.stop="handleSubmit"
                class="modal-main-tweet-button"
                :disabled="isProcessing"
              >
                {{submitMessage}}
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
  name: "MainTweetPostModal",
  props: {
    MainTweetPostModalSwitch: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      teweetContent: "",
      contentError: false,
      errorContentMessage: "",
      avatar: "",
      submitMessage:'推文',
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  methods: {
    ciickClose() {
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
    async handleSubmit() {
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
        this.isProcessing = true
        this.submitMessage = '請稍後..'
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
        this.ciickClose();
        this.$emit("after-tweet-post");
        this.teweetContent = "";
        this.isProcessing = false
        this.submitMessage = '推文'
      } catch (error){
        Toast.fire({
          icon: "error",
          title: "無法送出推文,請稍後",
        });
        this.isProcessing = false
        this.submitMessage = '推文'
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/maintweetpostmodal.scss";
</style>