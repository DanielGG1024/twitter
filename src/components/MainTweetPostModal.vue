<template>
  <div
    v-show="MainTweetPostModalSwitch"
    @click="clickModalBackground"
    class="modal-background"
  >
    <div class="modal">
      <div class="modal-header">
        <div @click="ciickClose" class="close-icon">
          <img src="../assets/pic/close.png" class="close" alt="" />
        </div>
      </div>
      <div class="modal-txt">
        <div class="modal-content-post">
          <div class="modal-main-tweet">
            <div class="user-icon-wrapper">
              <img class="user-icon" src="../assets/pic/Photo.png" alt="" />
            </div>
            <textarea
              class="modal-main-tweet-txt"
              name=""
              id=""
              value="hello"
              placeholder="有甚麼新鮮事?"
            ></textarea>
            <button class="modal-main-tweet-button">推文</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTweetPostModal",
  props: {
    MainTweetPostModalSwitch: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ciickClose() {
      this.$emit("after-click-close");
    },
    clickModalBackground(e) {
      const target = e.target;
      if (target.className === "modal-background") {
        this.$emit("after-click-background");
      } else {
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/maintweetpostmodal.scss";
</style>