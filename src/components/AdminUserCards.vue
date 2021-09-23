<template>
  <div class="card">
    <div class="header-background" :style="{backgroundImage:'url(' + user.cover + ')'}"></div>
    <div class="user-icon-wrapper">
      <img class="user-icon" :src="user.avatar" alt="" />
    </div>
    <div class="card-body">
      <div class="card-body-wrapper">
        <div class="user-name">{{ user.name }}</div>
        <div class="user-accounr">＠{{ user.account }}</div>
        <div class="user-chat-like">
          <div class="chat-wrapper">
            <div class="chat-icon-wrapper">
              <img class="icon" src="./../assets/pic/chat.png" alt="" />
            </div>
            <span class="chat-amount">{{ user.TweetsCount }}</span>
          </div>
          <div class="heart-wrapper">
            <div class="heart-icon-wrapper">
              <img class="icon" src="./../assets/pic/heart.png" alt="" />
            </div>
            <span class="like-amount">{{ user.LikesCount }}</span>
          </div>
        </div>
        <div class="user-follow">
          <span class="following-amount">{{ user.followingsCount }}個</span>
          <span class="following">跟隨中</span>
          <span class="follower-amount">{{ user.followersCount }}個</span>
          <span class="follower">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/admincards.scss";
</style>