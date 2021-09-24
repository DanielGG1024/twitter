<template>
  <div id="window">
    <div class="publicMessage">
      <!-- Menu -->
      <div class="menu-container">
        <UserLeftColumn :userId="userId" :currentUserId="currentUserId"/>
      </div>
      <!-- userList  -->
      <div class="user-list"></div>
      <!-- messageBox -->
      <div class="message-box"></div>
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import { mapState } from "vuex";

export default {
  name: "publucMessage",
  components: {
    UserLeftColumn,
  },
  data() {
    return {
      userId: Number(this.$route.params.id),
      currentUserId: -1,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.currentUserId = this.currentUser.id
    console.log("userId", this.currentUserId);
  },

}
</script>



<style lang="scss" scoped>
@import "./../assets/scss/publicMessage.scss";
</style>