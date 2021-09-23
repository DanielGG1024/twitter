<template>
  <div id="right-column" class="popular right-column">
    <header class="popular-header">
      <div class="popular-header-title">Popular</div>
    </header>

    <div class="popular-person" v-for="topUser in topUsers" :key="topUser.id">
      <div class="popular-person-detail">
        <div class="avatar">
          <img :src="topUser.avatar" alt="avatar" class="" />
        </div>
        <div class="popular-account">
          <div class="name">{{ topUser.name }}</div>
          <div class="tag-name">@{{ topUser.account }}</div>
        </div>
        <button
          v-if="topUser.isFollowed"
          @click.stop.prevent="removeFollow(topUser.id)"
          class="popular-follow-btn isFollowed"
        >
          正在跟隨
        </button>
        <button
          v-else
          @click.stop.prevent="addFollow(topUser.id)"
          class="popular-follow-btn"
        >
          跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
import tweetAPI from "./../apis/tweet";

export default {
  data() {
    return {
      topUsers: [],
      currentUserId: Number(this.$route.params.id),
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        // console.log("this", data);
        this.topUsers = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    async addFollow(userId) {
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.topUsers = this.topUsers.map((topUser) => {
          if (topUser.id !== userId) {
            return topUser;
          }
          return {
            ...topUser,
            isFolowed: true,
          };
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userRightColumn.scss";
</style>