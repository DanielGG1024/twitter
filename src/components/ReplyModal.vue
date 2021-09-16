<template>
  <div
    v-show="ReplyModalSwitch"
    @click="clickModalBackground"
    class="modal-background"
  >
    <div class="modal">
      <div class="modal-header">
        <div @click="clickClose" class="close-icon">
          <img src="../assets/pic/close.png" class="close" alt="" />
        </div>
      </div>
      <div class="reply">
        <div class="reply-icon-wrapper">
          <img class="user-icon" src="../assets/pic/Photo.png" alt="" />
        </div>
        <div class="txt-wrapper">
          <div class="txt-info">
            <span class="user-name">Apple</span>
            <span class="user-account"
              >＠apple
              <span>．三小時</span>
            </span>
          </div>
          <div class="txt">
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
          </div>
          <div class="txt-footer">
            <span class="txt-footer-reply">回覆給</span
            ><span class="footer-account">＠apple</span>
          </div>
        </div>
      </div>
      <div class="modal-txt">
        <div class="modal-content-post">
          <div class="modal-main-tweet">
            <div class="user-icon-wrapper">
              <img class="user-icosn" src="../assets/pic/Photo.png" alt="" />
            </div>
            <div class="modal-main-tweet-txt">
              <textarea
                class="modal-textarea"
                name=""
                id=""
                value="hello"
                placeholder="有甚麼新鮮事?"
              ></textarea>
              <span class="modal-info">字數不可超過140字</span>
            </div>
            <button class="modal-main-tweet-button">推文</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReplyModal",
  props: {
    ReplyModalSwitch: {
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
@import "./../assets/scss/replymodal.scss";
</style>