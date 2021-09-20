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
        <UserFollowing />



      </div>
      <!-- right Column -->
      <UserRightColumn />
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import UserRightColumn from "../components/UserRightColumn.vue";
import UserFollowTab from "../components/UserFollowTab.vue"
import UserFollowing from "../components/UserFollowing.vue"

export default {
  components: {
    UserLeftColumn,
    UserHeader,
    UserRightColumn,
    UserFollowTab,
    UserFollowing,

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