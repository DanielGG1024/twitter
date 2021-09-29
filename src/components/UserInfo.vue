<template>
  <div id="user-info" class="user-info">
    <div class="cover-container">
      <img class="cover-photo" :src="user.cover" alt="cover-photo" />
    </div>
    <img class="user-avatar" :src="user.avatar" alt="user-avatar" />
    <button
      v-if="currentUserId === userId"
      class="btn-follow"
      @click.prevent.stop="clickSetInfoModal"
    >
      編輯個人資料
    </button>
    <div v-else class="other-follow">
      <button
        class="btn-follow follower-btn following"
        v-if="otherUser.isFollowed"
        @click="removeFollow(otherUser.followingId)"
        :disabled="isProcessing"
      >
        正在跟隨
      </button>
      <button
        class="btn-follow follower-btn"
        v-else
        @click="addFollow(otherUser.followingId)"
        :disabled="isProcessing"
      >
        跟隨
      </button>
    </div>

    <div class="user-description">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-account">@{{ user.account }}</div>
      <div class="user-introduce">
        {{ user.introduction }}
      </div>
      <div class="user-follow">
        <router-link class="link-btn" :to="{ name: 'follower' }">
          <div class="iFollow">
            <span>{{ user.followingsCount }}個</span> 跟隨中
          </div>
        </router-link>
        <router-link class="link-btn" :to="{ name: 'following' }">
          <div class="follow-me">
            <span>{{ user.followersCount }}位</span> 追隨者
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
      otherUser: {},
      isProcessing: false,
    };
  },
  created() {
    this.user = this.initialUser;
    console.log("userinfo", this.user);
    console.log('currentUserId', this.currentUserId)
    console.log('userId', this.userId)
  },

  methods: {
    async fetchUserInfo(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        console.log("123", data);
        this.user = data;
        const { id, name, avatar, introduction, cover } = data;
        this.modalUser = {
          id,
          name,
          avatar,
          introduction,
          cover,
        };
        // console.log(this.modalUser)
        if (this.currentUserId !== this.userId) {
          this.otherUserInfo(this.userId);
          console.log('this.otherUser', this.otherUser)
        }
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
    // async otherUserInfo(userId) {
    //   const { data } = await usersAPI.getUserFollowings({ userId });
    //   console.log("other-data", data);
    //   const otherUser = data.find((item) => item.followingId === userId);
    //   this.otherUser = otherUser;
    //   console.log(this.otherUser);
    // },

    async addFollow(userId) {
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("addFollow", response);
        if (response.data.status !== "success") {
          throw new Error(data.message);
        }

        (this.otherUser.isFollowed = true), (this.isProcessing = false);
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },

    async removeFollow(userId) {
      console.log(userId);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.removeFollow({ userId });
        console.log("reponse", response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        (this.otherUser.isFollowed = true), (this.isProcessing = false);
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