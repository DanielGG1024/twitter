<template>
  <div id="user-follow-tab">
    <router-link :to="{ name: 'follower' }">
      <div class="follower tab" :class="{clicked: this.$route.name === 'follower'}">跟隨者</div>
    </router-link>
    <router-link :to="{ name: 'following' }">
      <div class="following tab" :class="{clicked: this.$route.name === 'following'}">正在跟隨</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/userFollowTab.scss";
</style>