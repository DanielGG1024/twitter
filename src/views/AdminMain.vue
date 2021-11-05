
  <template>
  <div class="main">
    <div class="main-container">
      <AdminMenu />
      <main class="content">
        <div class="content-header">
          <span class="title">推文清單</span>
        </div>
        <div class="admin-tweets-wrapper">
          <Spinner v-if="isLoading" />
          <AdminTweets
            v-else
            v-for="tweet in tweets"
            :key="tweet.id"
            :tweet="tweet"
            @after-delete-tweet="afterDeleteTweet"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AdminMenu from "./../components/AdminMenu";
import AdminTweets from "./../components/AdminTweets";
import adminAPI from "./../apis/admin";
import Spinner from "./../components/Spinner";
import { Toast } from "./../utils/helpers";
export default {
  name: "adminMain",
  components: {
    AdminMenu,
    AdminTweets,
    Spinner,
  },
  data() {
    return {
      tweets: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchAdminTweets();
  },
  methods: {
    async fetchAdminTweets() {
      try {
        const { data } = await adminAPI.adminGetTweets();
        this.tweets = data.tweets;
        this.isLoading = false;
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取得後台推文",
        });
        this.isLoading = false;
      }
    },
    afterDeleteTweet(tweetId) {
      this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    },
  },
};
</script>
<style lang="scss" scoped>

.main-container {
  // min-width: 100vh;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  margin: auto;
  font-family: "Noto Sans TC";
}
.content {
  height: 100vh;
  width: 1062px;
  border-left: 1px solid $tweetListBg;
}
.content-header {
  height: 55px;
  border-bottom: 1px solid $tweetListBg;
}

.title {
  font-size: 18px;
  line-height: 55px;
  font-weight: 700;
  padding-left: 15px;
}
.admin-tweets-wrapper {
  height: calc(100vh - 55px);
  overflow-y: scroll;
}
</style>