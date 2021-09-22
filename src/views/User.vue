<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn />

      <!-- center column -->
      <div id="center-column" class="center-column">
        <UserHeader :user = "user" />

        <div class="user-self">
          <UserInfo 
            @after-click-setInfoBtn="clickSetModal"
            :user = "user" 
          />
          <UserTab />
        </div>

        <div class="user-self-switch">
          <!-- list-tweet / reply list / like list -->
          <router-view></router-view>
        </div>
      </div>
      <!-- right Column -->
      <UserRightColumn />
    </div>
    <UserInfoSetModal
      :UserInfoSetModalSwitch="UserInfoSetModal"
      @after-click-close="afterClickClose"
    />
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import UserInfo from "../components/UserInfo.vue";
import UserTab from "../components/UserTab.vue";
import UserRightColumn from "../components/UserRightColumn.vue";
import UserInfoSetModal from "../components/UserInfoSetModal.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",
  components: {
    UserLeftColumn,
    UserHeader,
    UserInfo,
    UserTab,
    UserRightColumn,
    UserInfoSetModal,
  },
  data() {
    return {
      UserInfoSetModal: false,
      user: {
        id: 15,
        name: "user1",
        avatar:
          "https://loremflickr.com/320/240/restaurant,food/?random=19.361911130881502",
        introduction:   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, sed.",
        account: "user1",
        cover:
          "https://images.unsplash.com/photo-1631291944493-9fc60898569c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        role: "user",
        tweetsCount: 44,
        followersCount: 1,
        followingsCount: 5,
        Tweets: [
          {
            id: 105,
            UserId: 15,
            description:
              "Consequatur consectetur praesentium minus. Totam molestias repellat. Sunt culpa veniam.",
            createdAt: "2021-09-18T09:19:58.000Z",
            updatedAt: "2021-09-18T09:19:58.000Z",
          },
        ],
      },
      tweets: [],
    };
  },
  created () {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },

  methods: {
    async fetchUser({ userId }) {
      try {
        const response = await usersAPI.get({ userId });
        console.log('response', response)
        this.user = response.data
        
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },
    async fetchTweets({ userId }) {
      try {
        const response = await usersAPI.getTweets({ userId });
        console.log('response', response)

        this.tweets = response.data
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得 Tweets資料，請稍後再試",
        });
      }
    },
    clickSetModal() {
      this.UserInfoSetModal = true;
    },
    afterClickClose() {
      this.UserInfoSetModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
// 先依照設計圖，給範圍框個線
.window {
  width: 1440px;
  height: 1200px;
  border: 1px purple solid;
  margin: auto;
}
@import "@/assets/scss/user.scss";
</style>