<template>
  <div class="online online-list">
    <header>
      <div class="title">上線使用者 <span class="onlineCount">(1)</span></div>
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
</template>

<script>
export default {
  props: {
    onlineUser: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/onlineList.scss";
</style>