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
          <router-link to="/public" class="menu-link">
            <i class="bx bxs-home-circle"></i>
            <span class="menu-link-title"> 公開聊天室 </span>
          </router-link>
        </li>
        <li class="menu-nav-link">
          <router-link to="/user/self" class="menu-link">
            <i class="bx bx-user"></i>
            <span class="menu-link-title"> 個人資料 </span>
          </router-link>
        </li>
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
export default {
  namd: "Menu",
  components: {
    MainTweetPostModal,
  },
  data() {
    return {
      MainTweetPostModal: false,
    };
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
</style>