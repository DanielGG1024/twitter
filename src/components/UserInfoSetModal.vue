<template>
  <div class="modal">
    <div class="modal-main">
      <form @submit.stop.prevent="handleSubmit">
        <div class="modal-header">
          <div @click="clickClose" class="close-icon">
            <img src="../assets/pic/close.png" class="close" alt="" />
          </div>
          <div class="title">編輯個人資料</div>
          <button class="save-submit" :disabled="isProcessing">儲存</button>
        </div>

        <div class="modal-banner">
          <div class="form-group">
            <div class="banner-container">
              <img class="banner" :src="modalUser.cover | emptyImage " alt="cover-photo" />
            </div>

            <div class="banner-btn-group">
              <label for="user-cover">
                <input
                  type="file"
                  name="cover"
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
                name="avatar"
                accept="image/*"
                @change="handleAvatarChange"
                class="form-control-file d-none"
                id="user-avatar"
              />
              <img
                class="avatar"
                :src="modalUser.avatar | emptyImage"
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
            <input class="content" type="text" v-model="modalUser.name" name="name" />
            <div class="footer">{{modalUser.name.length}}/50</div>
          </div>
          <div class="description">
            <div class="title">自我介紹</div>
            <textarea
              name="introduction"
              class="content introduction scrollbar"
              type="textarea"
              v-model="modalUser.introduction"
              rows="5"
              cols="40"
            />
            <div class="footer">{{modalUser.introduction ? modalUser.introduction.length : "0"  }}/160</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";


export default {
  name: "UserInfoSetModal",
  mixins: [emptyImageFilter],
  props: {
    showInfoSetModal: {
      type: Boolean,
      required: true,
    },
    initialModalUser: {
      type: Object,
      required: true,
    },
    isProcessing: {
      type: Boolean,
      required: true,
    }
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
  watch: {
    initialModalUser(newValue) {
      this.modalUser = {
        ...this.modalUser,
        ...newValue,
      };
    },
  },
  created() {
    this.modalUser = {
      ...this.modalUser,
      ...this.initialModalUser,
    };
  },
  
  methods: {
    clickClose() {
      this.$emit("after-click-close");
    },
    handleAvatarChange(e) {
      const files = e.target.files;
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
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.modalUser.cover = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.modalUser.cover = imageURL;
      }
    },
    handleSubmit(e) {
      const name = this.modalUser.name;
      const introduction = this.modalUser.introduction;
      if (name.trim().length === 0) {
        Toast.fire({
          icon: "error",
          title: "請輸入姓名",
        });
        return;
      } else if (name.length > 50) {
        Toast.fire({
          icon: "error",
          title: "姓名字數不可超過50字",
        });
        return;
      } else if (introduction.length > 160) {
        Toast.fire({
          icon: "error",
          title: "描述不可超過160字",
        });
        return;
      }
      const form = e.target; 
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
    reset() {
      this.modalUser.cover = "";
    },

  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/userInfoSetModal.scss";
</style>