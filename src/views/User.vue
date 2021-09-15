<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn />

      <!-- center column -->
      <div id="center-column" class="center-column">
        <!-- header -->
        <UserHeader />

        <!-- follower/following -->
        <UserFollowTab />
        <UserFollower />




        <div class="user-self d-none">
          <!-- user-info -->
          <UserInfo />
          <!-- tab -->
          <UserTab />
        </div>

        <div class="user-self-switch d-none">
          <!-- list-tweet -->
          <UserTweetList class="d-none" />
          <!-- reply list -->
          <UserSelfReply class="d-none" />
          <!-- like list -->
          <UserSelfLike />
        </div>

      </div>
      <!-- right Column -->
      <UserRightColumn />
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import UserInfo from "../components/UserInfo.vue";
import UserTab from "../components/UserTab.vue";
import UserTweetList from "../components/UserTweetList.vue";
import UserRightColumn from "../components/UserRightColumn.vue";
import UserSelfReply from "../components/UserSelfReply.vue";
import UserSelfLike from "../components/UserSelfLike.vue";
import UserFollowTab from "../components/UserFollowTab.vue"
import UserFollower from "../components/UserFollower.vue"

export default {
  components: {
    UserLeftColumn,
    UserHeader,
    UserInfo,
    UserTab,
    UserTweetList,
    UserRightColumn,
    UserSelfReply,
    UserSelfLike,
    UserFollowTab,
    UserFollower,
  },
};
</script>

<style lang="scss" scoped>
// 先依照設計圖，給範圍框個線
.window {
  width: 1440px;
  height: 1200px;
  border: 1px purple solid;
  margin: auto;
}
@import "@/assets/scss/user.scss";
</style>