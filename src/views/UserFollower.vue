<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />
      <!-- center column -->
      <Spinner v-if="isLoading" class="user-spinner" />
      <div v-else id="center-column" class="center-column scrollbar">
        <!-- header -->
        <UserHeader :user="user" />

        <!-- follower/following -->
        <UserFollowTab />
        <div class="user-follower-list ">
          <div class="user-followers">
            <div
              class="follower"
              v-for="follower in followers"
              :key="follower.followerId"
            >
              <div class="avatar">
                <div class="avatar-img">
                  <img
                    :src="follower.avatar | emptyImage"
                    alt="avatar"
                    class=""
                  />
                </div>
              </div>
              <div class="follower-main">
                <div class="name">{{ follower.name }}</div>
                <div class="tag-name">@{{ follower.account }}</div>
                <div class="description">
                  {{ follower.introduction }}
                </div>
              </div>
              <button
                class="follower-btn following"
                v-if="follower.isFollowed"
                @click="removeFollow(follower)"
                :disabled="isProcessing"
              >
                正在跟隨
              </button>
              <button
                class="follower-btn"
                v-else
                @click="addFollow(follower)"
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
        @add-follow-click="followClicked"
        @remove-follow-click="followClicked"
      />
    </div>
    <div v-show="noLength === true" class="noLength">
      尚未有人追隨
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
    // Popular,
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
      followers: [],
      isProcessing: false,
      noLength: false,
    };
  },

  created() {
    this.fetchFollower(this.userId);
    this.fetchUserInfo(this.userId);
    this.fetchTopUsers();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchFollower(id);
    this.userId = Number(id);
    next();
  },

  methods: {
    async fetchFollower(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserFollowers({ userId });
        this.followers = data;
        this.isLoading = false;
        if (this.followers.length === 0) {
          this.noLength = true;
        }
      } catch (error) {
        console.log(error);
        (this.isLoading = false),
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
        (this.isLoading = false),
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

    async addFollow(follower) {
      const userId = follower.followerId
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);
        follower.isFollowed = true

        this.topUsers.map((topUser) => {
          if (userId !== topUser.id) {
            return;
          } else if (userId === topUser.id) {
            topUser.isFollowed = true;
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

    async removeFollow(follower) {
      const userId = follower.followerId
      try {
        this.isProcessing = true;
        const response = await tweetAPI.removeFollow({ userId });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        

        this.followers = this.followers.map((follower) => {
          if (follower.id !== userId) {
            return follower;
          }
          return {
            ...follower,
            isfollowered: false,
          };
        });

        follower.isFollowed = false

        this.topUsers.map((topUser) => {
          if (userId !== topUser.id) {
            return;
          } else if (userId === topUser.id) {
            topUser.isFollowed = false;
          }
        });

        // this.fetchFollower(this.userId);
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

    followClicked(userId) {
      this.followers.map((follower) => {
          if (userId !== follower.followerId) {
            return;
          } else if (userId === follower.followerId) {
            follower.isFollowed = !follower.isFollowed 
          }
        });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/user.scss";
@import "@/assets/scss/userFollower.scss";
</style>