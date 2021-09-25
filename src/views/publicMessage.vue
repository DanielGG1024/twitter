<template>
  <div id="window">
    <div class="publicMessage">
      <!-- Menu -->
      <div class="menu-container">
        <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />
      </div>
      <!-- userList  -->
      <div class="user-list"></div>
      <div class="message-box">
      <MessageBox />
      </div>
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import { mapState } from "vuex";
import MessageBox from "./../components/MessageBox.vue";
export default {
  name: "publucMessage",
  components: {
    UserLeftColumn,
    MessageBox,
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
    this.currentUserId = this.currentUser.id;
    console.log("userId", this.currentUserId);
  },
};
</script>



<style lang="scss" scoped>
@import "./../assets/scss/publicMessage.scss";
</style>