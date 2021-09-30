<template>
  <div class="window demo">
    <div class="user">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />

      <!-- center column -->

      <div id="center-column" class="center-column">
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
            <UserTab />
          </div>
        </template>

        <div class="user-self-switch">
          <!-- list-tweet / reply list / like list -->
          <router-view class="scrollbar"></router-view>
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
import UserTab from "../components/UserTab.vue";
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
    UserTab,

    UserInfoSetModal,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      showInfoSetModal: false,
      userId: Number(this.$route.params.id),
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
      topUsers: []
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.currentUserId = this.currentUser.id;
    this.fetchUserInfo(this.userId);
    this.fetchTopUsers();
    // console.log("currentUserId", this.currentUserId);
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    // 路由改變時重新抓取資料
    const { id } = to.params;
    // console.log("beforeRU", id)
    this.fetchUserInfo(id);
    this.userId = Number(id);
    next();
  },

  methods: {
    async fetchUserInfo(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.get({ userId });
        console.log("123", data);
        this.user = data;
        const { id, name, avatar, introduction, cover } = data;
        this.modalUser = {
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
        console.log("popular data", data);
        this.topUsers = data;
        // console.log('topusers', this.users)
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得前十",
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
        console.log("formData-User", formData);
        console.log("handleSubmit", data);
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
          // console.log('map no match')
          return;
        } else if (userId === topUser.id) {
          topUser.isFollowed = !topUser.isFollowed;
          // console.log('map match')
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// 先依照設計圖，給範圍框個線
.window {
  width: 1440px;
  height: 1200px;
  // border: 1px purple solid;
  margin: auto;
}
@import "@/assets/scss/user.scss";
</style>