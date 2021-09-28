<template>
  <div id="user-follower-list">
    <div class="user-followers">
      <div
        class="follower"
        v-for="follower in initialFollowers"
        :key="follower.followerId"
      >
        <div class="avatar">
          <div class="avatar-img">
            <img :src="follower.avatar | emptyImage" alt="avatar" class="" />
          </div>
        </div>
        <div class="follower-main">
          <div class="name">{{ follower.name }}</div>
          <div class="tag-name">@{{ follower.account }}</div>
          <div class="description scrollbar">
            {{ follower.introduction }}
          </div>
        </div>
        <button
          class="follower-btn following"
          v-if="follower.isFollowed"
          @click="clickRemoveBtn(follower.followerId)"
        >
          正在跟隨
        </button>
        <button
          class="follower-btn"
          v-else
          @click="clickFollowBtn(follower.followerId)"
        >
          跟隨
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter, emptyImageFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    initialFollowers: {
      type: Array,
      required: true,
    },
  },

  methods: {
    clickFollowBtn(followerId) {
      this.$emit("after-follow-click", followerId);
    },
    clickRemoveBtn(followerId) {
      this.$emit("after-remove-follow", followerId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userFollower.scss";
</style>