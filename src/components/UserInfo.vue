<template>
  <div id="user-info" class="user-info">
    <img
      class="cover-photo"
      src="../assets/pic/cover_photo.png"
      alt="cover-photo"
    />
    <img class="user-avatar" src="../assets/pic/Photo.png" alt="user-avatar" />
    <button class="btn-follow" @click.prevent.stop="clickSetInfoModal">
      編輯個人資料
    </button>
    <div class="user-description">
      <div class="user-name">John Doe</div>
      <div class="user-account">@heyjohn</div>
      <div class="user-introduce">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div class="user-follow">
        <router-link class="link-btn" :to="{ name: 'follower' }">
          <div class="iFollow"><span>34個</span> 跟隨中</div>
        </router-link>
        <router-link class="link-btn" :to="{ name: 'following' }">
          <div class="follow-me"><span>59位</span> 追隨者</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSetInfoModal() {
      this.$emit("after-click-setInfoBtn");
    },
  },
};
</script>



<style lang="scss" scoped>
@import "@/assets/scss/userInfo.scss";
</style>