<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn
        :userId="userId"
        :currentUserId="currentUserId"
        @after-tweet-post="afterTweetPost"
        @fetchUserInfo="fetchUserInfo(this.currentUserId)"
      />

      <!-- center column -->

      <div id="center-column" class="center-column scrollbar">
        <Spinner v-if="isLoading" class="user-spinner" />
        <template v-else>
          <UserHeader :user="user" />

          <div class="user-self">
            <UserInfo
              @after-click-setInfoBtn="clickSetModal"
              @add-follow-click="followClicked"
              @remove-follow-click="followClicked"
              :initialUser="user"
              :userId="userId"
              :currentUserId="currentUserId"
            />
            <div id="user-tabs">
              <router-link :to="{ name: 'tweetList' }">
                <div
                  class="tab user-tweets"
                  :class="{ clicked: this.$route.name === 'tweetList' }"
                >
                  推文
                </div>
              </router-link>

              <router-link :to="{ name: 'replies' }">
                <div
                  class="tab user-replies"
                  :class="{ clicked: this.$route.name === 'replies' }"
                >
                  推文與回覆
                </div>
              </router-link>

              <router-link :to="{ name: 'likes' }">
                <div
                  class="tab user-likes"
                  :class="{ clicked: this.$route.name === 'likes' }"
                >
                  喜歡的內容
                </div>
              </router-link>
            </div>
          </div>
        </template>

        <div class="user-self-switch">
          <!-- list-tweet / reply list / like list -->
          <router-view
            class="scrollbar"
            :initialNewTweet="newTweet"
          ></router-view>
        </div>
      </div>
      <!-- right Column -->
      <UserRightColumn
        :initialTopUsers="topUsers"
        @add-follow-click="addFollowCount"
        @remove-follow-click="removeFollowCount"
      />
    </div>
    <UserInfoSetModal
      v-show="showInfoSetModal"
      :showInfoSetModal="showInfoSetModal"
      :isProcessing="isProcessing"
      @after-click-close="clickSetModal"
      :initialModalUser="modalUser"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserRightColumn from "../components/UserRightColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import UserInfo from "../components/UserInfo.vue";
import UserInfoSetModal from "../components/UserInfoSetModal.vue";
import Spinner from "../components/Spinner.vue";

import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";
import tweetAPI from "../apis/tweet";

export default {
  name: "User",
  components: {
    UserLeftColumn,
    UserRightColumn,
    UserHeader,
    UserInfo,

    UserInfoSetModal,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      showInfoSetModal: false,
      // showInfoSetModal: true,
      userId: Number(this.$route.params.id),
      pastUserId: -1,
      user: {},
      currentUserId: -1,
      modalUser: {
        id: -1,
        name: "",
        avatar: "",
        cover: "",
        introduction: "",
      },
      isProcessing: false,
      newTweet: false,
      topUsers: [],
      tweets: [],
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.currentUserId = this.currentUser.id;
    this.fetchUserInfo(this.userId);
    this.fetchTopUsers();
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.pastUserId = this.userId;
    this.userId = Number(id);
    if (this.userId !== this.pastUserId) {
      this.fetchUserInfo(id);
    }
    next();
  },

  methods: {
    async fetchUserInfo(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.get({ userId });
        this.user = data;
        const { id, name, avatar, introduction, cover } = data;
        this.modalUser = {
          ...this.modalUser,
          id,
          name,
          avatar,
          introduction,
          cover,
        };
        this.isLoading = false;
      } catch (error) {
        console.log("error", error);
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
    async fetchTopUsers() {
      try {
        const response = await tweetAPI.getTopUser();
        const { data } = response;
        this.topUsers = data;
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得前十",
        });
      }
    },
    async fetchUserTweets(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserTweets({ userId });
        this.tweets = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },

    clickSetModal() {
      this.showInfoSetModal = !this.showInfoSetModal;
    },

    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.update({
          userId: this.currentUserId,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.showInfoSetModal = false;
        this.fetchUserInfo(this.userId);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = true;
        console.log("modal-error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新個人資料，請稍後再試",
        });
      }
    },
    addFollowCount(userId) {
      if (this.currentUserId === this.userId) {
        this.user.followingsCount += 1;
      } else if (userId === this.userId) {
        this.user.followersCount += 1;
        this.user.isFollowed = true;
      }
    },
    removeFollowCount(userId) {
      if (this.currentUserId === this.userId) {
        this.user.followingsCount -= 1;
      } else if (userId === this.userId) {
        this.user.followersCount -= 1;
        this.user.isFollowed = false;
      }
    },
    followClicked(userId) {
      if (userId === this.userId) {
        !this.user.isFollowed;
      }

      this.topUsers.map((topUser) => {
        if (userId !== topUser.id) {
          return;
        } else if (userId === topUser.id) {
          topUser.isFollowed = !topUser.isFollowed;
        }
      });
    },
    afterTweetPost() {
      this.newTweet = !this.newTweet;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/user.scss";
</style>