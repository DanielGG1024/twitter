<template>
  <div class="popular">
    <div class="popular-wrapper">
      <div class="popular-title-wrapper">
        <div class="title">Popular</div>
      </div>
      <PopularItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        :currentUserId="currentUserId"
      />
    </div>
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweet";
import PopularItem from "./../components/PopularItem";
import { mapState } from "vuex";

export default {
  name: "Popular",
  components: {
    PopularItem,
  },
  data() {
    return {
      currentUserId: -1,
      users: "",
      isProcessing: false,
      PopularItem,
    };
  },
  created() {
    this.fetchTopUsers();
    this.currentUserId = this.currentUser.id;
  },
  methods: {
    async fetchTopUsers() {
      try {
        const response = await tweetAPI.getTopUser();
        const { data } = response;
        this.users = data;
      } catch {
        Toast.fire({
          icon: "warning",
          title: "無法取得前十",
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
  // width: 462px;
  width: 350px;
  padding-top: 15px;
  padding-left: 30px;
}
.popular-wrapper {
  width: 100%;
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