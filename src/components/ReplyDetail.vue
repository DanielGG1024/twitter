<template>
  <div class="reply-detial">
    <div class="content-header">
      <div class="prev">
        <a href="" class="">
          <img class="prev-icon" src="./../assets/pic/arrow.png" alt="" />
        </a>
      </div>
      <div>
        <span class="title">推文</span>
      </div>
    </div>
    <div class="reply-tweet">
      <div class="reply-tweet-user">
        <div class="user-icon-wrapper">
          <img class="user-icon" src="./../assets/pic/Photo.png" alt="" />
        </div>
        <div class="user-info">
          <div class="user-name">Apple</div>
          <div class="user-account">@apple</div>
        </div>
      </div>
      <p class="user-txt">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        reprehenderit elit laborum.
      </p>
      <div class="user-creat-time">
        <span>上午: 10:15</span><span>2020年6月10號</span>
      </div>
      <div class="reply-amount">
        <span class=""> 34 </span><span class="reply-amount-mark">回復</span>
        <span class="reply-total"> 808 </span
        ><span class="reply-amount-mark">喜歡</span>
      </div>
      <div class="icon-area">
        <div @click="clickChat" class="icon-wrpper">
          <img class="icon" src="./../assets/pic/chat.png" alt="" />
        </div>
        <div class="icon-wrpper">
          <img class="icon" src="./../assets/pic/heart.png" alt="" />
        </div>
      </div>
    </div>
    <ReplyDetailModal
      @after-click-close="afterClickClose"
      @after-click-background="afterClickClose"
      :ReplyDetailModalSwitch="ReplyDetailModal"
    />
  </div>
</template>
<script>
import ReplyDetailModal from "./../components/ReplyDetailModal";
export default {
  name: "ReplyDetail",
  components: {
    ReplyDetailModal,
  },
  data() {
    return {
      ReplyDetailModal: false,
    };
  },
  methods: {
    clickChat() {
      this.ReplyDetailModal = true;
    },
    afterClickClose() {
      this.ReplyDetailModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/replydetail.scss";
</style>