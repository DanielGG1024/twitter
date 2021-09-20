<template>
  <div
    class="modal"
    v-show="UserInfoSetModalSwitch"
    @click="clickModalBackground"
  >
    <div class="modal-main">
      <form>
        <div class="modal-header">
          <div @click="clickClose" class="close-icon">
            <img src="../assets/pic/close.png" class="close" alt="" />
          </div>
          <div class="title">編輯個人資料</div>
          <button class="save-submit">儲存</button>
        </div>
        <div class="modal-banner">
          <img
            class="banner"
            src="../assets/pic/cover_photo.png"
            alt="cover-photo"
          />
          <img class="avatar" src="../assets/pic/Photo.png" alt="user-avatar" />
        </div>
        <div class="modal-content">
          <div class="name">
            <div class="title">名稱</div>
            <input class="content" type="text" value="John Doe" />
            <div class="footer">8/50</div>
          </div>
          <div class="description">
            <div class="title">自我介紹</div>
            <input class="content" type="textarea" />
            <div class="footer">0/160</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoSetModal",
  props: {
    UserInfoSetModalSwitch: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    clickClose() {
      this.$emit("after-click-close");
    },
    clickModalBackground(e) {
      const target = e.target;
      if (target.className === "modal") {
        this.$emit("after-click-background");
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/userInfoSetModal.scss";
</style>