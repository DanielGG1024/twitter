<template>
  <div class="window demo">
    <div class="user" >
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />

      <!-- center column -->
      <div id="center-column" class="center-column">
        <!-- header -->
        <UserHeader :user="user"/>

        <!-- follower/following -->
        <UserFollowTab />
        <UserFollowing
          :initialFollowings="followings"
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
import Popular from "../components/Popular.vue";
import UserFollowTab from "../components/UserFollowTab.vue";
import UserFollowing from "../components/UserFollowing.vue";
import usersAPI from "../apis/users";
import tweetAPI from "../apis/tweet";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserLeftColumn,
    UserHeader,
    Popular,
    UserFollowTab,
    UserFollowing,
  },
  data() {
    return {
      isLoading: true,
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      user: {},
      followings: [],
    };
  },
  created() {
    this.fetchFollowing(this.userId);
    this.fetchUserInfo(this.userId);
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  watch: {
    followings: {
      handler: function () {
        this.fetchFollowing(this.userId);
      },
      // deep: true,
    },
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
        const response = await tweetAPI.addFollow({ data_JSON });
        console.log("popular response", response);
        this.fetchFollowing(this.userId)
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

        this.followings = this.followings.map((following) => {
          if (following.id !== userId) {
            return following;
          }
          return {
            ...following,
            isfollowered: false,
          };
        });
        this.fetchFollowing(this.userId)
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