<template>
  <div class="reply-detial">
    <div class="content-header">
      <div class="prev">
        <router-link to="/main">
          <img class="prev-icon" src="./../assets/pic/arrow.png" alt="" />
        </router-link>
      </div>
      <div>
        <span class="title">推文</span>
      </div>
    </div>
    <div class="reply-tweet">
      <div class="reply-tweet-user">
        <div class="user-icon-wrapper">
          <img class="user-icon" :src="tweet.user.avatar" alt="" />
        </div>
        <div class="user-info">
          <div class="user-name">{{ tweet.user.name }}</div>
          <div class="user-account">@{{ tweet.user.account }}</div>
        </div>
      </div>
      <p class="user-txt">
        {{ tweet.description }}
      </p>
      <div class="user-creat-time">
        <!-- <span>上午: 10:15</span> -->
        <span>
          {{ tweet.createdAt | fromNowWithWord }}
          ．
          {{ tweet.createdAt | fromYear }}
        </span>
      </div>
      <div class="reply-amount">
        <span class=""> {{ tweet.replyCounts }} </span
        ><span class="reply-amount-mark">回復</span>
        <span class="reply-total"> {{ tweet.likeCounts }} </span
        ><span class="reply-amount-mark">喜歡</span>
      </div>
      <div class="icon-area">
        <div @click="clickChat" class="icon-wrpper">
          <img class="icon" src="./../assets/pic/chat.png" alt="" />
        </div>
        <div
          v-if="tweet.isLiked"
          @click="removeLike(tweet.id)"
          class="icon-wrpper"
        >
          <img class="icon" src="./../assets/pic/icon_like_fill.png" alt="" />
        </div>
        <div v-else @click="addLike(tweet.id)" class="icon-wrpper">
          <img class="icon" src="./../assets/pic/heart.png" alt="" />
        </div>
      </div>
    </div>
    <ReplyDetailModal
      :tweet="tweet"
      @after-click-close="afterClickClose"
      @after-click-background="afterClickClose"
      @after-tweetReply-post="afterTweetReplyPost"
      :ReplyDetailModalSwitch="ReplyDetailModal"
    />
  </div>
</template>
<script>
import ReplyDetailModal from "./../components/ReplyDetailModal";
import { fromNowFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import tweetAPI from "../apis/tweet";
export default {
  name: "ReplyDetail",
  mixins: [fromNowFilter],
  components: {
    ReplyDetailModal,
  },
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ReplyDetailModal: false,
      isProcessing: false,
      tweet: {
        user: {
          name: "",
          account: "",
          avatar: "",
        },
        createdAt: "",
        replyCounts: 0,
        likeCounts: 0,
        isLiked: false,
        id: -1,
      },
    };
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    clickChat() {
      this.ReplyDetailModal = true;
    },
    afterClickClose() {
      this.ReplyDetailModal = false;
    },
    fetchTweet() {
      this.tweet = this.initialTweet;
    },
    afterTweetReplyPost() {
      this.ReplyDetailModal = false;
      this.$emit("after-tweetReply-post");
      // console.log("reeplyDetail");
    },
    async addLike(tweetId) {
      // console.log("like");
      try {
        const response = await tweetAPI.addLike({ tweetId });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet.likeCounts = this.tweet.likeCounts + 1;
        this.tweet.isLiked = true;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法喜歡,請稍後在試",
        });
      }
    },
    async removeLike(tweetId) {
      try {
        const response = await tweetAPI.removeLike({ tweetId });
        // console.log("response", response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweet.likeCounts = this.tweet.likeCounts - 1;
        this.tweet.isLiked = false;
      } catch {
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
@import "./../assets/scss/replydetail.scss";
</style>