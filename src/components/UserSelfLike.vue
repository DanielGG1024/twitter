<template>
  <div id="self-like-list">
    <div class="like" v-for="like in likes" :key="like.index">
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
            @{{ like.User.account }}<span>‧{{ like.createdAt | fromNow }}</span>
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
            <img
              v-if="like.isliked"
              @click.stop.prevent="removeLike(like)"
              class="likes-img"
              src="../assets/pic/icon_like_fill.png"
              alt="heart-icon"
            />
            <img
              v-else
              @click.stop.prevent="addLike(like)"
              class="likes-img"
              src="../assets/pic/heart.png"
              alt="heart-icon"
            />
            <div class="likes-count count">{{ like.LikesCount }}</div>
          </div>
        </div>
      </div>
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
import ReplyModal from "./../components/ReplyModal";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import tweetAPI from "../apis/tweet";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  components: {
    ReplyModal,
  },
  data() {
    return {
      likes: [],
      tweet: {},
      ReplyModal: false,
      userId: Number(this.$route.params.id),
    };
  },
  created() {
    this.fetchUserLikes(this.userId);
  },
  // watch: {
  //   likes: {
  //     handler: function () {
  //       this.fetchUserLikes(this.userId);
  //     },
  //     // deep: true,
  //   },
  // },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchUserLikes(id);
    next();
  },
  methods: {
    async fetchUserLikes(userId) {
      try {
        const { data } = await usersAPI.getUserLikes({ userId });
        console.log("fetchUserLikes", data);
        this.likes = data;

        console.log('likes', this.likes)
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    async addLike(like) {
      console.log("like", like);
      try {
        const tweetId = like.TweetId
        const { data } = await tweetAPI.addLike({ tweetId });
        console.log("add data", data)
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        like.LikesCount += 1
        like.isliked = true
        // this.fetchUserLikes(this.userId);

      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法喜歡,請稍後在試",
        });
      }
    },
    async removeLike(like) {
      console.log("like", like);
      try {
        const tweetId = like.TweetId
        const response = await tweetAPI.removeLike({ tweetId });
        console.log("delete reponse", response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        like.isliked = false
        like.LikesCount -= 1
        // this.fetchUserLikes(this.userId);
      } catch (error) {
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
    
      this.tweet = modalTweet

      console.log("clickBtn tweet", this.tweet)
      console.log("clickBtn modalTweet", modalTweet)
    },
    afterClickClose() {
      this.ReplyModal = false;
    },
    afterTweetReplyPost() {
      this.ReplyModal = false;
      this.$emit("after-tweetReply-post");
      this.fetchUserLikes(this.userId)
      
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userSelfLike.scss";
</style>