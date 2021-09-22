<template>
  <div id="user-tabs">
    <router-link :to="{ name:'tweetList' }">
      <div class="tab user-tweets" :class="{clicked: this.$route.name === 'tweetList'}">推文</div>
    </router-link>

    <router-link :to="{ name: 'replies' }" >
      <div class="tab user-replies" :class="{clicked: this.$route.name === 'replies'}">推文與回覆</div>
    </router-link>

    <router-link :to="{ name: 'likes' }">
      <div class="tab user-likes" :class="{clicked: this.$route.name === 'likes'}" >喜歡的內容</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/userTab.scss";
</style>