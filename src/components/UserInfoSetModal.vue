<template>
  <div class="modal">
    <div class="modal-main">
      <form @submit.stop.prevent="handleSubmit">
        <div class="modal-header">
          <div @click="clickClose" class="close-icon">
            <img src="../assets/pic/close.png" class="close" alt="" />
          </div>
          <div class="title">編輯個人資料</div>
          <button class="save-submit">儲存</button>
        </div>

        <div class="modal-banner">

          <div class="form-group">
            <div class="banner-container">
              <img class="banner" :src="modalUser.cover" alt="cover-photo" />
            </div>
            
            <div class="banner-btn-group">
              <label for="user-cover">
                <input
                type="file"
                accept="image/*"
                @change="handleCoverChange"
                class="form-control-file d-none"
                id="user-cover"
              />
              <img
                class="change-btn"
                src="../assets/pic/icon_uploadPhoto.png"
                alt="change-btn"
              />
              </label>

              <div class="btn" @click="reset">
              <img
                class="change-btn delete-btn"
                src="../assets/pic/icon_delete.png"
                alt="change-btn"
              />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="user-avatar">
              <input
                type="file"
                accept="image/*"
                @change="handleAvatarChange"
                class="form-control-file d-none"
                id="user-avatar"
              />
              <img
                class="avatar"
                v-if="modalUser.avatar"
                :src="modalUser.avatar"
                alt="user-avatar"
              />
              <img
                class="change-btn avatar-change"
                src="../assets/pic/icon_uploadPhoto.png"
                alt="change-btn"
              />
            </label>
          </div>
        </div>

        <div class="modal-content">
          <div class="name">
            <div class="title">名稱</div>
            <input class="content" type="text" v-model="modalUser.name" />
            <div class="footer">8/50</div>
          </div>
          <div class="description">
            <div class="title">自我介紹</div>
            <input
              class="content"
              type="textarea"
              v-model="modalUser.introduction"
            />
            <div class="footer">0/160</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoSetModal",
  props: {
    showInfoSetModal: {
      type: Boolean,
      required: true,
    },
    initialModalUser: {
      type: Object,
      default: () => ({
        id: -1,
        name: "",
        avatar: "",
        introduction: "",
        cover: "",
      }),
    },
  },

  data() {
    return {
      modalUser: {
        id: -1,
        name: "",
        avatar: "",
        introduction: "",
        cover: "",
      },
    };
  },
  created() {
    this.modalUser = {
      ...this.modalUser,
      ...this.initialModalUser,
    },
      console.log(this.modalUser);
  },
  watch: {
    initialModalUser(newValue, oldValue) {
      console.log("new", newValue, "old", oldValue);
      this.modalUser = {
        ...this.modalUser,
        ...newValue,
      };
    },
  },
  methods: {
    clickClose() {
      this.$emit("after-click-close");
    },
    handleAvatarChange(e) {
      const files = e.target.files;
      // console.log("files", files);
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.modalUser.avatar = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.modalUser.avatar = imageURL;
      }
    },
    handleCoverChange(e) {
      const files = e.target.files;
      // console.log("files", files);
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.modalUser.cover = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.modalUser.cover = imageURL;
      }
    },
    handleSubmit() {
      
      // console.log("formDataaaa", e);
      // const form = e.target; // <form></form>
      const formData = this.modalUser;
      // console.log(formData)
      this.$emit("after-submit", formData);
    },
    reset(){
      this.modalUser.cover = ""
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/userInfoSetModal.scss";
</style>