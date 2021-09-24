<template>
  <div class="modal" >
    <div class="modal-main">
      <form>
        <div class="modal-header">
          <div @click="clickClose" class="close-icon">
            <img src="../assets/pic/close.png" class="close" alt="" />
          </div>
          <div class="title">編輯個人資料</div>
          <button class="save-submit">儲存</button>
        </div>
        <div class="modal-banner">
          <div class="banner-container">
            <img
              class="banner"
              src="../assets/pic/cover_photo.png"
              alt="cover-photo"
            />
          </div>
          <div class="banner-btn-group">
            <img
              class="change-btn"
              src="../assets/pic/icon_uploadPhoto.png"
              alt="change-btn"
            />
            <img
              class="change-btn delete-btn"
              src="../assets/pic/icon_delete.png"
              alt="change-btn"
            />
          </div>
          <img class="avatar" src="../assets/pic/Photo.png" alt="user-avatar" />
          <img
            class="change-btn avatar-change"
            src="../assets/pic/icon_uploadPhoto.png"
            alt="change-btn"
          />
        </div>

        <!-- <div class="form-group">
          <label for="image">Image</label>
          <img
            v-if="restaurant.image"
            :src="restaurant.image"
            class="d-block img-thumbnail mb-3"
            width="200"
            height="200"
          />
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            class="form-control-file"
            @change="handleFileChange"
          />
        </div> -->

        <div class="modal-content">
          <div class="name">
            <div class="title">名稱</div>
            <input
              class="content"
              type="text"
              value="John Doe"
              v-model="user.name"
            />
            <div class="footer">8/50</div>
          </div>
          <div class="description">
            <div class="title">自我介紹</div>
            <input
              class="content"
              type="textarea"
              v-model="user.introduction"
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
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },

  methods: {
    clickClose() {
      this.$emit("after-click-close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/userInfoSetModal.scss";
</style>