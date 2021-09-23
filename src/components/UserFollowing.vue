<template>
  <div id="user-follower-list">
    <div class="user-followers">
      <div class="follower" v-for="following in initialFollowings"
        :key="following.followingId">
        <div class="avatar">
          <div class="avatar-img">
            <img :src="following.avatar" alt="avatar" class="" />
          </div>
        </div>
        <div class="follower-main">
          <div class="name">{{following.name}}</div>
          <div class="tag-name">@{{following.account}}</div>
          <div class="description scrollbar">
            {{following.introduction}}
          </div>
        </div>
        <button class="follower-btn following" v-if="following.isFollowed" @click="clickRemoveBtn(following.followingId)">正在追隨</button>
        <button class="follower-btn" v-else @click="clickFollowBtn(following.followingId)">追隨</button>
      </div>
    </div>
  </div>
</template>

<script>
// import tweetAPI from "../apis/tweet";
// import { Toast } from "./../utils/helpers";

export default {
  props: {
    initialFollowings: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clickFollowBtn(followerId) {
      this.$emit("after-follow-click", followerId)
    },
    clickRemoveBtn(followerId) {
      this.$emit("after-remove-follow", followerId)
    },


  },
}
</script>



<style lang="scss" scoped>
@import "@/assets/scss/userFollower.scss";
</style>