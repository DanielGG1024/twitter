<template>
  <div id="tweet-list">
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <div class="tweet-avatar">
        <img :src="tweet.user.avatar" alt="tweet-avatar" />
      </div>
      <div class="tweet-main">
        <div class="tweet-user-info">
          <div class="name">{{ tweet.user.name }}</div>
          <div class="account">
            @{{ tweet.user.account }}<span>‧{{ tweet.updatedAt | fromNow }}小時</span>
          </div>
        </div>
        <div class="tweet-content">
          {{ tweet.description }}
        </div>
        <div class="tweet-status">
          <div class="replies state">
            <img src="../assets/pic/chat.png" alt="chat-icon" />
            <div class="replies-count count">{{ tweet.replyCount }}</div>
          </div>
          <div class="likes state">
            <img src="../assets/pic/heart.png" alt="heart-icon" />
            <div class="likes-count count">{{ tweet.likeCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users"
import { mapState } from "vuex";

export default {
  // props: {
  //   tweets: {
  //     type: Array,
  //     required: true,
  //   }
  // }
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: [],
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.fetchUserTweets(4)
  },

  methods: {
    async fetchUserTweets(userId) {
      const response = await usersAPI.getUserTweets({ userId })
      console.log(response)
      console.log(this.currentUser)



      // const { id, description, updatedAt, replyCount, likeCount } = dummyTweets;
      // this.tweets = {
      //   id,
      //   description,
      //   updatedAt,
      //   replyCount,
      //   likeCount,
      // };
    },

  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userTweetList.scss";
</style>