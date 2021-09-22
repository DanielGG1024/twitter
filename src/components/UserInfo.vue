<template>
  <div id="user-info" class="user-info">
    <img
      class="cover-photo"
      :src="user.cover"
      alt="cover-photo"
    />
    <img class="user-avatar" :src="user.avatar" alt="user-avatar" />
    <button class="btn-follow" @click.prevent.stop="clickSetInfoModal">
      編輯個人資料
    </button>
    <div class="user-description">
      <div class="user-name">{{user.name}}</div>
      <div class="user-account">@{{user.account}}</div>
      <div class="user-introduce">
        {{ user.introduction }} 
      </div>
      <div class="user-follow">
        <router-link class="link-btn" :to="{ name: 'follower' }">
          <div class="iFollow"><span>{{user.followingsCount}}個</span> 跟隨中</div>
        </router-link>
        <router-link class="link-btn" :to="{ name: 'following' }">
          <div class="follow-me"><span>{{user.followersCount}}位</span> 追隨者</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      reqiured: true,
    }
  },
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