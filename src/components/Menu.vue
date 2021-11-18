<template>
  <header class="menu">
    <div class="logo-wrapper">
      <router-link to="/">
        <img class="logo" src="../assets/pic/Logo.png" alt="" />
      </router-link>
    </div>
    <nav class="menu-nav">
      <ul class="menu-nav-wrapper">
        <li class="menu-nav-link">
          <router-link to="/main" class="menu-link">
            <i class="bx bxs-home-circle"></i>
            <span class="menu-link-title"> 首頁 </span>
          </router-link>
        </li>
        <li class="menu-nav-link">
          <router-link
            :to="{ name: 'user', params: { id: currentUserId } }"
            class="menu-link"
          >
            <i class="bx bx-user"></i>
            <span class="menu-link-title"> 個人資料 </span>
          </router-link>
        </li>
        <!-- <li class="menu-nav-link">
          <router-link to="/publicmessage" class="menu-link">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"
              ></path>
            </svg>
            <span class="menu-link-title"> 公開聊天室 </span>
          </router-link>
        </li> -->
        <li class="menu-nav-link">
          <router-link to="/setting" class="menu-link">
            <i class="bx bx-cog"></i>
            <span class="menu-link-title"> 設定 </span>
          </router-link>
        </li>
        <li class="menu-nav-post">
          <button @click.prevent.stop="clickPostModal" class="menu-nav-btn">
            推文
          </button>
          <div class="menu-nav-narrow-btn" @click="clickPostModal">+</div>
        </li>
      </ul>
      <ul class="menu-nav-wrapper">
        <li class="menu-nav-link" @click.prevent.stop="clickLogout">
          <router-link to="/#" class="menu-link">
            <i class="bx bx-log-out"></i>
            <span class="menu-link-title"> 登出 </span>
          </router-link>
        </li>
      </ul>
    </nav>
    <MainTweetPostModal
      :MainTweetPostModalSwitch="MainTweetPostModal"
      @after-click-close="afterClickClose"
      @after-click-background="afterClickClose"
      @after-tweet-post="afterTweetPost"
    />
  </header>
</template>
<script>
import MainTweetPostModal from "./../components/MainTweetPostModal";
import { mapState } from "vuex";
export default {
  namd: "Menu",
  components: {
    MainTweetPostModal,
  },
  data() {
    return {
      MainTweetPostModal: false,
      currentUserId: -1,
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.currentUserId = this.currentUser.id;
  },
  methods: {
    clickPostModal() {
      this.MainTweetPostModal = true;
    },
    afterClickClose() {
      this.MainTweetPostModal = false;
    },
    afterTweetPost() {
      this.$emit("after-tweet-post");
    },
    clickLogout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang="scss">
@import "./../assets/scss/menu.scss";
.svg-icon {
  width: 24px;
  height: 24px;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: black;
}

.svg-icon circle {
  stroke: black;
  stroke-width: 1;
}
</style>