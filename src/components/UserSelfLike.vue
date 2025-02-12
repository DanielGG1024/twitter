<template>
  <div id="self-like-list">
    <Spinner v-if="isLoading" />
    <div class="like" v-else v-for="like in likes" :key="like.index">
      <router-link :to="{ name: 'user', params: { id: like.User.id } }">
        <div class="avatar">
          <div class="avatar-img">
            <img :src="like.User.avatar | emptyImage" alt="" />
          </div>
        </div>
      </router-link>

      <div class="like-main">
        <router-link :to="{ name: 'Reply', params: { id: like.TweetId } }">
          <div class="like-user-info">
            <div class="name">{{ like.User.name }}</div>
            <div class="account">
              @{{ like.User.account
              }}<span>‧{{ like.createdAt | fromNow }}</span>
            </div>
          </div>
          <div class="like-content scrollbar">
            {{ like.description }}
          </div>
        </router-link>

        <div class="like-status">
          <div class="replies state">
            <img
              @click="clickChatBtn(like.TweetId)"
              class="replies-img"
              src="../assets/pic/chat.png"
              alt="chat-icon"
            />
            <div class="replies-count count">{{ like.RepliesCount }}</div>
          </div>
          <div class="likes state">
            <button
              v-if="like.isliked"
              :disabled="isProcessing"
              @click.stop.prevent="removeLike(like)"
            >
              <img
                class="likes-img"
                src="../assets/pic/icon_like_fill.png"
                alt="heart-icon"
              />
            </button>
            <button
              v-else
              :disabled="isProcessing"
              @click.stop.prevent="addLike(like)"
            >
              <img
                class="likes-img"
                src="../assets/pic/heart.png"
                alt="heart-icon"
                :disabled="isProcessing"
              />
            </button>
            <div class="likes-count count">{{ like.LikesCount }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="noLength === true" class="noLength">
      目前沒有喜歡的貼文
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
import Spinner from "../components/Spinner.vue";
import ReplyModal from "../components/ReplyModal.vue";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import tweetAPI from "../apis/tweet";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  components: {
    ReplyModal,
    Spinner,
  },
  data() {
    return {
      likes: [],
      tweet: {
        User: {
          avatar: "",
        },
      },
      ReplyModal: false,
      userId: Number(this.$route.params.id),
      isProcessing: false,
      isLoading: true,
      noLength: false,
    };
  },
  created() {
    this.fetchUserLikes(this.userId);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchUserLikes(id);
    next();
  },
  methods: {
    async fetchUserLikes(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserLikes({ userId });
        this.likes = data;
        this.isLoading = false;
        if (this.likes.length === 0) {
          this.noLength = true;
        }
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    async addLike(like) {
      try {
        this.isProcessing = true;
        const tweetId = like.TweetId;
        const { data } = await tweetAPI.addLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        like.LikesCount += 1;
        like.isliked = true;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法喜歡,請稍後在試",
        });
      }
    },
    async removeLike(like) {
      try {
        this.isProcessing = true;
        const tweetId = like.TweetId;
        const response = await tweetAPI.removeLike({ tweetId });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        like.isliked = false;
        like.LikesCount -= 1;
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取消喜歡,請稍後在試",
        });
      }
    },
    clickChatBtn(tweetId) {
      this.ReplyModal = true;
      const modalTweet = this.likes.find((item) => item.TweetId === tweetId);
      this.tweet = modalTweet;
    },
    afterClickClose() {
      this.ReplyModal = false;
    },
    afterTweetReplyPost() {
      this.ReplyModal = false;
      this.$emit("after-tweetReply-post");
      this.fetchUserLikes(this.userId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userSelfLike.scss";
</style>