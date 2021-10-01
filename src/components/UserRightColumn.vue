<template>
  <div class="popular">
    <div class="popular-wrapper">
      <div class="popular-title-wrapper">
        <div class="title">Popular</div>
      </div>
      <div
        v-for="user in initialTopUsers"
        :key="user.id"
        class="one-popular-wrapper"
      >
        <div class="one-popular">
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            <div class="user-icon-wrapper">
              <img class="user-icon" :src="user.avatar" alt="" />
            </div>
          </router-link>
          <div class="popular-txt">
            <span class="popular-title">{{ user.name }}</span>
            <router-link
              class="popular-link"
              :to="{ name: 'user', params: { id: user.id } }"
              >@{{ user.account }}</router-link
            >
          </div>

          <div class="popular-follow">
            <template v-if="user.id !== currentUser.id">
              <button
                v-if="user.isFollowed"
                @click.prevent.stop="deleteFollow(user)"
                class="popular-follow-btn btn-active"
                :disabled="isProcessing"
              >
                正在跟隨
              </button>
              <button
                v-else
                class="popular-follow-btn"
                @click.prevent.stop="addFollow(user)"
                :disabled="isProcessing"
              >
                跟隨
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
import { mapState } from "vuex";
export default {
  name: "UserRightColumn",
  props: {
    initialTopUsers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUserId: -1,
      users: "",
      isProcessing: false,
    };
  },

  methods: {
    async deleteFollow(user) {
      try {
        this.isProcessing = true;
        const userId = user.id;
        const response = await tweetAPI.removeFollow({ userId });
        if (response.status !== 200) {
          throw new Error();
        }
        this.$emit("remove-follow-click", userId);

        user.isFollowed = false;
        this.isProcessing = false;
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤使用者,請稍後",
        });
      }
    },
    async addFollow(user) {
      const userId = user.id;
      const data = `{
        "id":"${userId}"
      }`;
      const data_JSON = JSON.parse(data);
      try {
        this.isProcessing = true;
        const response = await tweetAPI.addFollow({ data_JSON });
        if (response.status !== 200) {
          throw new Error();
        }

        user.isFollowed = true;
        this.isProcessing = false;
        this.$emit("add-follow-click", userId);
      } catch {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者,請稍後",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
.popular {
  height: 100vh;
  width: 462px;
  padding-top: 15px;
  padding-left: 30px;
}
.popular-wrapper {
  width: 75%;
  background-color: $popularBg;
  border-radius: 10px;
}
.title {
  font-size: 18px;
  line-height: 55px;
  font-weight: 700;
  padding-left: 15px;
}
@import "./../assets/scss/popular.scss";
</style>