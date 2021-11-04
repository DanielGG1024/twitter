<template>
  <div id="tweet-list">
    <Spinner v-if="isLoading" />
    <div v-else class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <router-link :to="{ name: 'user', params: { id: tweet.user.id } }">
        <div class="tweet-avatar">
          <img :src="tweet.user.avatar | emptyImage" alt="tweet-avatar" />
        </div>
      </router-link>
      <div class="tweet-main">
        <router-link :to="{ name: 'Reply', params: { id: tweet.id } }">
          <div class="tweet-user-info">
            <div class="name">{{ tweet.user.name }}</div>
            <div class="account">
              @{{ tweet.user.account
              }}<span>‧{{ tweet.updatedAt | fromNow }}</span>
            </div>
          </div>
          <div class="tweet-content scrollbar">
            {{ tweet.description }}
          </div>
        </router-link>
        <div class="tweet-status">
          <div class="replies state">
            <img
              @click="clickChatBtn(tweet.TweetId)"
              src="../assets/pic/chat.png"
              alt="chat-icon"
            />

            <div class="replies-count count">{{ tweet.replyCount }}</div>
          </div>
          <div class="likes state">
            <button
              v-if="tweet.isLiked"
              @click.stop.prevent="removeLike(tweet)"
              :disabled="isProcessing"
            >
              <img
                class="likes-img"
                src="../assets/pic/icon_like_fill.png"
                alt="heart-icon"
              />
            </button>
            <button
              v-else
              @click.stop.prevent="addLike(tweet)"
              :disabled="isProcessing"
            >
              <img
                class="likes-img"
                src="../assets/pic/heart.png"
                alt="heart-icon"
              />
            </button>
            <div class="likes-count count">{{ tweet.likeCount }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="noLength === true" class="noLength">
      目前尚未發表貼文
    </div>

    <ReplyModal
      :ReplyModalSwitch="ReplyModal"
      :tweet="tweet"
      @after-click-background="afterClickClose"
      @after-click-close="afterClickClose"
      @after-tweetReply-post="afterTweetReplyPost"
    />
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import ReplyModal from "../components/ReplyModal";
import usersAPI from "./../apis/users";
import tweetAPI from "../apis/tweet";
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  components: {
    ReplyModal,
    Spinner,
  },
  props: {
    initialNewTweet: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      tweets: [],
      tweet: {
        User: {
          avatar: "",
        },
      },
      ReplyModal: false,
      userId: Number(this.$route.params.id),
      isProcessing: false,
      isLoading: true,
      noLength: false,
    };
  },
  watch: {
    initialNewTweet: {
      handler: function () {
        this.fetchUserTweets(this.userId);
      },
      // deep: true,
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserTweets(userId);
    
    // console.log("newTweet", this.initialNewTweet);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchUserTweets(id);
    next();
  },

  methods: {
    async fetchUserTweets(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserTweets({ userId });
        this.tweets = data;
        this.isLoading = false;
        if (this.tweets.length === 0) {
          this.noLength = true;
        }
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    clickChatBtn(tweetId) {
      this.ReplyModal = true;
      const modalTweet = this.tweets.find((item) => item.TweetId === tweetId);
      const {
        id: TweetId,
        likeCount: LikesCount,
        replyCount: RepliesCount,
        updatedAt: createdAt,
        user: User,
      } = modalTweet;
      this.tweet = {
        TweetId,
        LikesCount,
        RepliesCount,
        createdAt,
        User,
      };

      console.log('tweet', this.tweet)
    },
    afterClickClose() {
      this.ReplyModal = false;
    },
    afterTweetReplyPost() {
      this.ReplyModal = false;
      // this.fetchUserTweets(this.userId);
      // this.tweet.RepliesCount += 1
      console.log(this.tweet)
    },
    async addLike(tweet) {
      try {
        this.isProcessing = true;
        const tweetId = tweet.id;
        const { data } = await tweetAPI.addLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        tweet.likeCount += 1;
        tweet.isLiked = true;
        // this.fetchUserLikes(this.userId);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法喜歡,請稍後在試",
        });
      }
    },
    async removeLike(tweet) {
      try {
        this.isProcessing = true;
        const tweetId = tweet.id;
        const response = await tweetAPI.removeLike({ tweetId });
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        tweet.isLiked = false;
        tweet.likeCount -= 1;
        // this.fetchUserLikes(this.userId);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取消喜歡,請稍後在試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userTweetList.scss";
</style>