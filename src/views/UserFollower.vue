<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />
      <!-- center column -->
      <Spinner v-if="isLoading" class="user-spinner"/>
      <div v-else id="center-column" class="center-column">
        <!-- header -->
        <UserHeader :user="user" />

        <!-- follower/following -->
        <UserFollowTab />
        <div id="user-follower-list">
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
                <div class="description scrollbar">
                  {{ follower.introduction }}
                </div>
              </div>
              <button
                class="follower-btn following"
                v-if="follower.isFollowed"
                @click="removeFollow(follower.followerId)"
                :disabled="isProcessing"
              >
                正在跟隨
              </button>
              <button
                class="follower-btn"
                v-else
                @click="addFollow(follower.followerId)"
                :disabled="isProcessing"
              >
                跟隨
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- right Column -->
      <Popular 
        @follow-click="fetchFollower(userId)"
      />
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import Popular from "../components/Popular.vue";
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
    UserHeader,
    Popular,
    UserFollowTab,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      user: {},
      followers: [],
      isProcessing: false,
    };
  },
  // watch: {
  //   followers: {
  //     handler: function () {
  //       this.fetchFollower(this.userId);
  //     },
  //   },
  // },

  created() {
    this.fetchFollower(this.userId);
    this.fetchUserInfo(this.userId);
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
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
        // console.log('123', data)
        this.followers = data;
        this.isLoading = false;
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
        // console.log('123', data)
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
    async addFollow(userId) {
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);
        this.fetchFollower(this.userId);
        this.isProcessing = false;
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

        this.followers = this.followers.map((follower) => {
          if (follower.id !== userId) {
            return follower;
          }
          return {
            ...follower,
            isfollowered: false,
          };
        });
        this.fetchFollower(this.userId);
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
  },
};
</script>

<style lang="scss" scoped>
// 先依照設計圖，給範圍框個線
.window {
  width: 1440px;
  height: 1200px;
  // border: 1px purple solid;
  margin: auto;
}
@import "@/assets/scss/user.scss";
@import "@/assets/scss/userFollower.scss";
</style>