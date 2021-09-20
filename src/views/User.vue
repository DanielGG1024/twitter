<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn />

      <!-- center column -->
      <div id="center-column" class="center-column">
        <UserHeader />

        <div class="user-self ">
          <UserInfo @after-click-setInfoBtn="clickSetModal"/>
          <UserTab />
        </div>

        <div class="user-self-switch ">
          <!-- list-tweet / reply list / like list -->
          <router-view></router-view>
        </div>
      </div>
      <!-- right Column -->
      <UserRightColumn />
    </div>
    <UserInfoSetModal 
      :UserInfoSetModalSwitch="UserInfoSetModal"
      @after-click-close="afterClickClose"
      @after-click-background="afterClickClose"
    />
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import UserInfo from "../components/UserInfo.vue";
import UserTab from "../components/UserTab.vue";
import UserRightColumn from "../components/UserRightColumn.vue";
import UserInfoSetModal from "../components/UserInfoSetModal.vue"


export default {
  name: "User",
  components: {
    UserLeftColumn,
    UserHeader,
    UserInfo,
    UserTab,
    UserRightColumn,
    UserInfoSetModal
  },
  data() {
    return {
      UserInfoSetModal: false,
    }
  },

  methods: {
    clickSetModal() {
      this.UserInfoSetModal = true;
    },
    afterClickClose() {
      this.UserInfoSetModal = false;
    },
  }
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