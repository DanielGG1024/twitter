<template>
  <div id="self-like-list">
    <div class="like" v-for="like in likes" :key="like.index">
      <div class="avatar">
        <div class="avatar-img">
          <img :src="like.User.avatar" alt="" />
        </div>
      </div>
      <div class="like-main">
        <div class="like-user-info">
          <div class="name">{{ like.User.name }}</div>
          <div class="account">
            @{{ like.User.account }}<span>‧{{ like.createdAt | fromNow }}</span>
          </div>
        </div>
        <div class="like-content">
          {{ like.description }}
        </div>
        <div class="like-status">
          <div class="replies state">
            <img
              class="replies-img"
              src="../assets/pic/chat.png"
              alt="chat-icon"
            />
            <div class="replies-count count">{{ like.RepliesCount }}</div>
          </div>
          <div class="likes state">
            <img
              v-if="like.isliked"
              @click.stop.prevent="removeLike(like.TweetId)"
              class="likes-img"
              src="../assets/pic/icon_like_fill.png"
              alt="heart-icon"
            />
            <img
              v-else
              @click.stop.prevent="addLike(like.TweetId)"
              class="likes-img"
              src="../assets/pic/heart.png"
              alt="heart-icon"
            />
            <div class="likes-count count">{{ like.LikesCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { fromNowFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import tweetAPI from "../apis/tweet";

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      likes: [],
      userId: Number(this.$route.params.id),
    };
  },
  created() {
    this.fetchUserLikes(this.userId);
  },
  watch: {
    likes: {
      handler: function () {
        this.fetchUserLikes(this.userId);
      },
      deep: true,
    },
  },
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
        // console.log("this", data);
        this.likes = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    async addLike(tweetId) {
      console.log(tweetId);
      try {
        const response = await tweetAPI.addLike({ tweetId });
        console.log("reponse", response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.likes = this.likes.map((like) => {
          if (like.id !== tweetId) {
            return like;
          }
          return {
            ...like,
            LikesCount: like.LikesCount + 1,
            isliked: true,
          };
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法喜歡,請稍後在試",
        });
      }
    },
    async removeLike(tweetId) {
      console.log(tweetId);
      try {
        const response = await tweetAPI.removeLike({ tweetId });
        console.log("reponse", response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.likes = this.likes.map((like) => {
          if (like.id !== tweetId) {
            return like;
          }
          return {
            ...like,
            LikesCount: like.LikesCount - 1,
            isliked: false,
          };
        });
      } catch (error) {
        console.log(error);
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
@import "@/assets/scss/userSelfLike.scss";
</style>