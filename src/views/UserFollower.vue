<template>
  <div class="window demo">
    <div class="user" v-show="!isLoading">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId"/>

      <!-- center column -->
      <div id="center-column" class="center-column">
        <!-- header -->
        <UserHeader :user="user" />

        <!-- follower/following -->
        <UserFollowTab />
        <UserFollower
          :initialFollowers="followers"
          @after-follow-click="addFollow"
          @after-remove-follow="removeFollow"
        />
      </div>
      <!-- right Column -->
      <Popular />
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import Popular from "../components/UserRightColumn.vue";
import UserFollowTab from "../components/UserFollowTab.vue";
import UserFollower from "../components/UserFollower.vue";
import usersAPI from "../apis/users";
import tweetAPI from "../apis/tweet";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      isLoading: true,
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      user: {},
      followers: [],
    };
  },
  components: {
    UserLeftColumn,
    UserHeader,
    Popular,
    UserFollowTab,
    UserFollower,
  },
  created() {
    this.fetchFollower(this.userId);
    this.fetchUserInfo(this.userId);
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  watch: {
    followers: {
      handler: function () {
        this.fetchFollower(this.userId);
      },
      deep: true,
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchFollower(id);
    this.userId = Number(id)
    next();
  },

  methods: {
    async fetchFollower(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUserFollowers({ userId });
        // console.log('123', data)
        this.followers = data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false,
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
    async fetchUserInfo(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        // console.log('123', data)
        this.user = data;
      } catch (error) {
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
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);

      } catch {
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },

    async removeFollow(userId) {
      console.log(userId);
      try {
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
// 先依照設計圖，給範圍框個線
.window {
  width: 1440px;
  height: 1200px;
  // border: 1px purple solid;
  margin: auto;
}
@import "@/assets/scss/user.scss";
</style>