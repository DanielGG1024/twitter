<template>
    <div class="publicMessage">
      <!-- Menu -->
      <div class="menu-container">
        <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />
      </div>
      <!-- userList  -->
      <div class="user-list">
        <div class="online online-list">
          <header>
            <div class="title">
              上線使用者
              <span class="onlineCount">({{ onlineList.length }})</span>
            </div>
          </header>
          <div class="online-users">
            <div
              class="online-user"
              v-for="onlineUser in onlineList"
              :key="onlineUser.id"
            >
              <div class="avatar">
                <img :src="onlineUser.avatar" alt="" />
              </div>
              <div class="user-info">
                <div class="name">
                  {{ onlineUser.name }}
                </div>
                <div class="account">
                  @
                  {{ onlineUser.account }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- messageBox -->
      <div class="message-box">
        <MessageBox :onlineList="onlineList" />
      </div>
    </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import MessageBox from "./../components/MessageBox.vue";
import { mapState } from "vuex";

export default {
  name: "publicMessage",
  components: {
    UserLeftColumn,
    MessageBox,
  },
  data() {
    return {
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      onlineList: [],
    };
  },
  mounted() {
    const userId = this.currentUser.id;
    this.$socket.emit("leave");
    this.$socket.emit("joinPublic", userId);
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    onlineList: function (data) {
      // console.log("public-onlineList", data);
      this.onlineList = data;
    },
    announce: function (data) {
      console.log("announce data:", data);
    },
    disconnect: function () {
      // console.log("disconnect");
      const userId = this.currentUser.id;
      this.$socket.emit("leavePublic", userId);
    },
  },
  beforeRouteLeave(to, from, next) {
    const userId = this.currentUser.id;
    this.$socket.emit("leavePublic", userId);
    // console.log("router test");
    next();
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>



<style lang="scss" scoped>
@import "./../assets/scss/publicMessage.scss";
</style>