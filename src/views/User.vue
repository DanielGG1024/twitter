<template>
  <div class="window demo">
    <div class="user" v-show="!isLoading">
      <!-- left Column -->
      <UserLeftColumn :userId="userId" :currentUserId="currentUserId" />

      <!-- center column -->
      <div id="center-column" class="center-column">
        <UserHeader :user="user" />

        <div class="user-self">
          <UserInfo
            @after-click-setInfoBtn="clickSetModal"
            :user="user"
            :userId="userId"
            :currentUserId="currentUserId"
          />
          <UserTab />
        </div>

        <div class="user-self-switch">
          <!-- list-tweet / reply list / like list -->
          <router-view class="scrollbar"></router-view>
        </div>
      </div>
      <!-- right Column -->
      <Popular />
    </div>
    <UserInfoSetModal
      v-show="showInfoSetModal"
      :showInfoSetModal="showInfoSetModal"
      @after-click-close="clickSetModal"
      :initialModalUser="modalUser"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import UserLeftColumn from "../components/UserLeftColumn.vue";
import UserHeader from "../components/UserHeader.vue";
import UserInfo from "../components/UserInfo.vue";
import UserTab from "../components/UserTab.vue";
import Popular from "../components/UserRightColumn.vue";
import UserInfoSetModal from "../components/UserInfoSetModal.vue";
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",
  components: {
    UserLeftColumn,
    UserHeader,
    UserInfo,
    UserTab,
    Popular,
    UserInfoSetModal,
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
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.currentUserId = this.currentUser.id;
    this.fetchUserInfo(this.userId);
    console.log("userId", this.currentUserId);
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
        // console.log('123', data)
        this.user = data;
        const { id, name, avatar, introduction, cover } = data;
        this.modalUser = {
          id,
          name,
          avatar,
          introduction,
          cover,
        };
        // console.log(this.modalUser)
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

    clickSetModal() {
      this.showInfoSetModal = !this.showInfoSetModal;
    },

    async handleAfterSubmit(formData) {
      try {
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
        // this.$router.push({ name: 'user', params: `${this.currentUserId}` })
      } catch (error) {
        console.log("modal-error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新個人資料，請稍後再試",
        });
      }
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