<template>
  <div id="center-column-header">
    <router-link :to="{ name: 'Main' }">
      <img class="icon" src="../assets/pic/arrow.png" alt="arrow-icon" />
    </router-link>
    <div class="header-info">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-tweets">{{ user.tweetsCount }} 推文</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      reqiured: true,
    },
  },
  
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/userHeader.scss";
</style>