<template>
  <div id="self-reply-list" class="self-reply reply-list">
    <Spinner v-if="isLoading" />
    <div class="reply" v-else v-for="reply in replies" :key="reply.id">
      <router-link :to="{ name: 'user', params: { id: reply.User.id } }">
        <div class="avatar">
          <div class="avatar-img">
            <img :src="reply.User.avatar | emptyImage" alt="avatar" />
          </div>
        </div>
      </router-link>

      <div class="reply-main">
        <router-link :to="{ name: 'Reply', params: { id: reply.TweetId } }">
          <div class="reply-user-info">
            <div class="name">{{ reply.User.name }}</div>
            <div class="account">
              @{{ reply.User.account
              }}<span>‧{{ reply.createdAt | fromNow }}</span>
            </div>
          </div>
          <div class="reply-this-reply">
            回覆<span> @{{ reply.Tweet.User.account }}</span>
          </div>
          <div class="reply-content">{{ reply.comment }}</div>
        </router-link>
      </div>
    </div>
    <div v-show=" noLength === true " class="noLength">目前尚未發表回覆</div>
  </div>
</template>


<script>
import Spinner from "../components/Spinner.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  components:{
    Spinner
  },
  data() {
    return {
      replies: [],
      isProcessing: false,
      isLoading: true,
      noLength: false,
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserReplies(userId);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchUserReplies(id);
    next();
  },
  methods: {
    async fetchUserReplies(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserReplies({ userId });
        this.replies = data;
        this.isLoading = false;
        if(this.replies.length === 0){
          this.noLength = true
        }
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "@/assets/scss/userSelfReply.scss";
</style>