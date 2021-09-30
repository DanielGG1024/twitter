<template>
  <div class="one-popular-wrapper">
    <div class="one-popular">
      <router-link :to="{ name: 'user', params: { id: oneUser.id } }">
        <div class="user-icon-wrapper">
          <img class="user-icon" :src="oneUser.avatar" alt="" />
        </div>
      </router-link>
      <div class="popular-txt">
        <span class="popular-title">{{ oneUser.name }}</span>
        <a class="popular-link" href="">@{{ oneUser.account }}</a>
      </div>
      <div class="popular-follow">
        <template v-if="oneUser.id !== currentUserId">
          <button
            v-if="oneUser.isFollowed"
            @click.prevent.stop="deleteFollow(oneUser.id)"
            class="popular-follow-btn btn-active"
            :disabled="isProcessing"
          >
            {{ deleteFollowMessage }}
          </button>
          <button
            v-else
            class="popular-follow-btn"
            @click.prevent.stop="addFollow(oneUser.id)"
            :disabled="isProcessing"
          >
            {{ addFollowMessage }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
export default {
  props: {
    user: {
      type: Object,
    },
    currentUserId: {
      type: [Number, String],
    },
  },
  data() {
    return {
      oneUser: {},
      isProcessing: false,
      deleteFollowMessage: "正在跟隨",
      addFollowMessage: "跟隨",
    };
  },
  created() {
    this.fetchPopulatItem();
  },
  methods: {
    fetchPopulatItem() {
      this.oneUser = this.user;
    },
    async deleteFollow(id) {
      try {
        this.isProcessing = true;
        this.deleteFollowMessage = "請稍後..";
        const userId = id;
        const response = await tweetAPI.removeFollow({ userId });
        if (response.status !== 200) {
          throw new Error();
        }
        this.oneUser = {
          ...this.oneUser,
          isFollowed: false,
        };
        // this.$emit("after-click-delete-follow", userId);
        this.isProcessing = false;
        this.deleteFollowMessage = "正在跟隨";
      } catch {
        this.isProcessing = false;
        this.deleteFollowMessage = "正在跟隨";
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤使用者,請稍後",
        });
      }
    },
    async addFollow(id) {
      const userId = id;
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        this.addFollowMessage = "請稍後..";
        const response = await tweetAPI.addFollow({ data_JSON });
        if (response.status !== 200) {
          throw new Error();
        }
        this.oneUser = {
          ...this.oneUser,
          isFollowed: true,
        };
        this.isProcessing = false;
        this.addFollowMessage = "跟隨";
      } catch {
        this.isProcessing = false;
        this.addFollowMessage = "跟隨";
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
@import "./../assets/scss/popular.scss";
</style>