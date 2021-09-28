<template>
  <div class="popular">
    <div class="popular-wrapper">
      <div class="popular-title-wrapper">
        <div class="title">Popular</div>
      </div>
      <div v-for="user in users" :key="user.id" class="one-popular-wrapper">
        <div class="one-popular">
          <div class="user-icon-wrapper">
            <img class="user-icon" :src="user.avatar" alt="" />
          </div>
          <div class="popular-txt">
            <span class="popular-title">{{ user.name }}</span>
            <a class="popular-link" href="">@{{ user.account }}</a>
          </div>
          <div class="popular-follow">
            <button
              v-if="user.isFollowed"
              @click.prevent.stop="deleteFollow(user)"
              class="popular-follow-btn btn-active"
              :disabled="isProcessing"
            >
              正在跟隨
            </button>
            <button
              v-else
              class="popular-follow-btn"
              @click.prevent.stop="addFollow(user)"
              :disabled="isProcessing"
            >
              跟隨
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
export default {
  name: "Popular",
  data() {
    return {
      isFollow: true,
      users: "",
      isProcessing: false
    };
  },
  created() {
    this.fetchTopUsers();
  },
  watch: {
    users: {
      handler: function () {
        this.fetchTopUsers();
      },
    },
  },
  methods: {
    async deleteFollow(user) {
      try {
        this.isProcessing = true
        const userId = user.id  
        const response = await tweetAPI.removeFollow({ userId });
        if (response.status !== 200) {
          throw new Error();
        }
        user.isFollowed = false     
        this.isProcessing = false   
      } catch {
        this.isProcessing = false
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤使用者,請稍後",
        });
      }
    },
    async addFollow(user) {
      const userId = user.id
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);

        if (response.status !== 200) {
          throw new Error();
        }
        
        user.isFollowed = true
        this.isProcessing = false
      } catch {
        this.isProcessing = false
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },
    async fetchTopUsers() {
      try {
        const response = await tweetAPI.getTopUser();
        const { data } = response;
        // console.log("popular data", data);
        this.users = data;
        // console.log('top10users', data)
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得前十",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/popular.scss";
</style>