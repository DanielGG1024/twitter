<template>
  <div id="user-info" class="user-info">
    <div class="cover-container">
      <img class="cover-photo" :src="this.initialUser.cover" alt="cover-photo" />
    </div>
    <img class="user-avatar" :src="this.initialUser.avatar" alt="user-avatar" />
    <button
      v-if="currentUserId === userId"
      class="btn-follow"
      @click.prevent.stop="clickSetInfoModal"
    >
      編輯個人資料
    </button>
    <div v-else class="other-follow">
      <button
        class="btn-follow  following"
        v-if="user.isFollowed"
        @click="removeFollow(userId)"
        :disabled="isProcessing"
      >
        正在跟隨
      </button>
      <button
        class="btn-follow "
        v-else
        @click="addFollow(userId)"
        :disabled="isProcessing"
      >
        跟隨
      </button>
    </div>

    <div class="user-description">
      <div class="user-name">{{ this.initialUser.name }}</div>
      <div class="user-account">@{{ this.initialUser.account }}</div>
      <div class="user-introduce">
        {{ this.initialUser.introduction }}
      </div>
      <div class="user-follow">
        <router-link class="link-btn" :to="{ name: 'follower' }">
          <div class="iFollow">
            <span>{{ this.initialUser.followingsCount }}個</span> 跟隨中
          </div>
        </router-link>
        <router-link class="link-btn" :to="{ name: 'following' }">
          <div class="follow-me">
            <span>{{ this.initialUser.followersCount }}位</span> 追隨者
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import tweetAPI from "./../apis/tweet";
import { Toast } from "./../utils/helpers";
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    currentUserId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      isLoading: true,
      isProcessing: false,  
    };
  },
  created() {
    this.user = this.initialUser;

  },

  methods: {
    async fetchUserInfo(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        this.user = data;
        const { id, name, avatar, introduction, cover } = data;
        this.modalUser = {
          id,
          name,
          avatar,
          introduction,
          cover,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
    clickSetInfoModal() {
      if (this.userId !== this.currentUserId) {
        Toast.fire({
          icon: "error",
          title: "只能編輯自己的個人資料，請返回個人資料頁編輯",
        });
        return;
      } else {
        this.$emit("after-click-setInfoBtn");
      }
    },

    async addFollow(userId) {
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        if (response.data.status !== "success") {
          throw new Error(data.message);
        }

        this.user.isFollowed = true, 
        this.isProcessing = false;
        this.$emit("add-follow-click", userId);
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },

    async removeFollow(userId) {
      try {
        this.isProcessing = true;
        const response = await tweetAPI.removeFollow({ userId });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.user.isFollowed = false, 
        this.isProcessing = false;
        this.$emit("remove-follow-click", userId);
      } catch (error) {
        this.isProcessing = false;
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
@import "@/assets/scss/userInfo.scss";
</style>