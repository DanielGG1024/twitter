<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />
      <!-- center column -->
      <div id="center-column" class="center-column">
        <!-- header -->
        <UserHeader :user="user" />

        <!-- follower/following -->
        <UserFollowTab />
        <div id="user-follower-list">
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
                @click="removeFollow(following.followingId)"
                :disabled="isProcessing"
              >
                正在跟隨
              </button>
              <button
                class="follower-btn"
                v-else
                @click="addFollow(following.followingId)"
                :disabled="isProcessing"
              >
                跟隨
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- right Column -->
      <Popular />
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import Popular from "../components/Popular.vue";
import UserFollowTab from "../components/UserFollowTab.vue";


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
  },
  data() {
    return {
      isLoading: true,
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      user: {},
      followings: [],
      isProcessing: false,
    };
  },
  watch: {
    followings: {
      handler: function () {
        this.fetchFollowing(this.userId);
      },
    },
  },
  created() {
    this.fetchFollowing(this.userId);
    this.fetchUserInfo(this.userId);
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },

  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
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
        // console.log('following', data)
        this.followings = data;
        this.isLoading = false;
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
        // console.log('123', data)
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
    async addFollow(userId) {
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);
        this.fetchFollowing(this.userId);
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

        this.followings = this.followings.map((following) => {
          if (following.id !== userId) {
            return following;
          }
          return {
            ...following,
            isfollowered: false,
          };
        });
        this.fetchFollowing(this.userId);
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