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
import { Toast } from "./../utils/helpers";
export default {
  props: {
    user: {
      type: Object,
      reqiured: true,
    },
    userId:{
      type: Number,
      required: true,
    },
    currentUserId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clickSetInfoModal() {
      if(this.userId !== this.currentUserId) {
        Toast.fire({
          icon: "error",
          title: "只能編輯自己的個人資料，請返回個人資料頁編輯",
        });
        return
      }else{
        this.$emit("after-click-setInfoBtn");
      }
    },

  },
};
</script>



<style lang="scss" scoped>
@import "@/assets/scss/userInfo.scss";
</style>