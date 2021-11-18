<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />

      <Spinner v-if="isLoading" class="user-spinner"/>
      <!-- center column -->
      <div v-else id="center-column" class="center-column scrollbar">
        <!-- header -->
        <UserHeader :user="user" />

        <!-- follower/following -->
        <UserFollowTab />
        <div class="user-follower-list">
          <div class="user-followers">
            <div
              class="follower"
              v-for="following in followings"
              :key="following.followingId"
            >
              <div class="avatar">
                <div class="avatar-img">
                  <img
                    :src="following.avatar | emptyImage"
                    alt="avatar"
                    class=""
                  />
                </div>
              </div>
              <div class="follower-main">
                <div class="name">{{ following.name }}</div>
                <div class="tag-name">@{{ following.account }}</div>
                <div class="description scrollbar">
                  {{ following.introduction }}
                </div>
              </div>
              <button
                class="follower-btn following"
                v-if="following.isFollowed"
                @click="removeFollow(following)"
                :disabled="isProcessing"
              >
                正在跟隨
              </button>
              <button
                class="follower-btn"
                v-else
                @click="addFollow(following)"
                :disabled="isProcessing"
              >
                跟隨
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- right Column -->
      <UserRightColumn
        :initialTopUsers="topUsers"
        @add-follow-click="addFollowingUser"
        @remove-follow-click="removeFollowingUser"
      />
    </div>
    <div v-show="noLength === true" class="noLength">
      尚未跟隨任何人
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserRightColumn from "../components/UserRightColumn.vue";

import UserHeader from "../components/UserHeader.vue";
import UserFollowTab from "../components/UserFollowTab.vue";
import Spinner from "../components/Spinner.vue";


import usersAPI from "../apis/users";
import tweetAPI from "../apis/tweet";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  components: {
    UserLeftColumn,
    UserRightColumn,
    UserHeader,
    UserFollowTab,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      user: {},
      topUsers: [],
      followings: [],
      isProcessing: false,
      noLength: false,
    };
  },

  created() {
    this.fetchFollowing(this.userId);
    this.fetchUserInfo(this.userId);
    this.fetchTopUsers();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },

  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchFollowing(id);
    this.userId = Number(id);
    next();
  },
  methods: {
    async fetchFollowing(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserFollowings({ userId });
        this.followings = data;
        this.isLoading = false;
        if (this.followings.length === 0) {
          this.noLength = true;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
    async fetchUserInfo(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.get({ userId });
        this.user = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
    async fetchTopUsers() {
      try {
        const response = await tweetAPI.getTopUser();
        const { data } = response;
        this.topUsers = data;
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得前十",
        });
      }
    },
    async addFollow(following) {
      const userId = following.followingId
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);

        following.isFollowed = true

        this.topUsers.map((topUser) => {
        if (userId !== topUser.id) {
          return;
        } else if (userId === topUser.id) {
          topUser.isFollowed = !topUser.isFollowed;
        }
      });

        this.isProcessing = false;
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },

    async removeFollow(following) {
      const userId = following.followingId
      try {
        this.isProcessing = true;
        const response = await tweetAPI.removeFollow({ userId });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        
        this.followings = this.followings.map((following) => {
          if (following.id !== userId) {
            return following;
          }
          return {
            ...following,
            isfollowered: false,
          };
        });
        
        this.topUsers.map((topUser) => {
        if (userId !== topUser.id) {
          return;
        } else if (userId === topUser.id) {
          topUser.isFollowed = !topUser.isFollowed;
        }
      });
      
        following.isFollowed = false

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
    addFollowingUser() {
      this.fetchFollowing(this.userId);
      
    },
    removeFollowingUser(userId) {
      this.followings = this.followings.filter(following => following.followingId !== userId)
      
    },

  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/user.scss";
@import "@/assets/scss/userFollower.scss";
</style>