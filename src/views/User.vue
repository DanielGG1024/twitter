<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn />

      <!-- center column -->
      <div id="center-column" class="center-column">
        <!-- header -->
        <UserHeader />
        <!-- user-info -->
        <UserInfo />
        <!-- tab -->
        <UserTab />
        <!-- list-tweet -->
        <UserTweetList />
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

export default {
  components: {
    UserLeftColumn,
    UserHeader,
    UserInfo,
    UserTab,
    UserTweetList,
    UserRightColumn,
  },
};
</script>

<style lang="scss" scoped>
// 先依照設計圖，給範圍框個線
.window {
  width: 1440px;
  height: 1200px;
  border: 1px purple solid;
}
@import "@/assets/scss/user.scss";
</style>