<template>
  <div id="window">
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
              上線使用者 <span class="onlineCount">(1)</span>
            </div>
          </header>
          <div class="online-users">
            <div class="online-user">
              <div class="avatar">
                <img :src="onlineUser.avatar" alt="" />
              </div>
              <div class="user-info">
                <div class="name">{{ onlineUser.name }}</div>
                <div class="account">@{{ onlineUser.account }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- messageBox -->
      <div class="message-box">
        <MessageBox />
      </div>
    </div>
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
// import OnlineList from "../components/OnlineList";
import usersAPI from "./../apis/users";
import { mapState } from "vuex";
import MessageBox from "./../components/MessageBox.vue";
import { Toast } from "./../utils/helpers";

export default {
  name: "publucMessage",
  components: {
    UserLeftColumn,
    MessageBox,
    // OnlineList,
  },
  data() {
    return {
      userId: Number(this.$route.params.id),
      currentUserId: -1,
      onlineUser: {
        id: -1,
        name: "",
        avatar: "",
        account: "",
      },
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.currentUserId = this.currentUser.id;
    console.log("userId", this.currentUserId);
    this.fetchUserInfo(this.currentUserId);
  },
  methods: {
    async fetchUserInfo(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        // console.log('123', data)
        const { id, name, avatar, account } = data;
        this.onlineUser = {
          id,
          name,
          avatar,
          account,
        };
        console.log(this.onlineUser);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "./../assets/scss/publicMessage.scss";
</style>