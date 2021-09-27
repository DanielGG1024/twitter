<template>
  <header class="menu left-column">
    <div class="logo-wrapper">
      <a href="#">
        <img class="logo" src="../assets/pic/Logo.png" alt="logo" />
      </a>
    </div>

    <nav class="nav">
      <ul class="nav-items">
        <li>
          <router-link :to="{ name: 'Main' }" class="nav-item">
            <img
              class="icon icon-home"
              src="../assets/pic/icon_index.png"
              alt="icon-home"
            />
            <div class="nav-link nav-home">首頁</div>
          </router-link>
        </li>

        <li>
          <router-link
            class="nav-item"
            :to="{ name: 'user', params: { id: currentUserId } }"
          >
            <img
              v-if="
                userId !== this.currentUserId && this.$route.name !== 'user'
              "
              class="icon icon-user"
              src="../assets/pic/icon_user.png"
              alt="icon-user"
            />

            <img
              v-else
              class="icon icon-user current"
              src="../assets/pic/icon_user_orange.png"
              alt="icon-user"
            />
            <div
              class="nav-link nav-user"
              :class="{
                current:
                  userId === currentUserId &&
                  this.$route.name !== 'publicMessage',
              }"
            >
              個人資料
            </div>
          </router-link>
        </li>
        <!-- <li> -->
        <!-- <router-link class="nav-item" :to="{ name: 'user' , params: { id: currentUserId }}">
            
            <img
              
              class="icon icon-bell"
              src="../assets/pic/bell.png"
              alt="icon-user"
            />
             -->
        <!-- <img
              v-else
              class="icon icon-bell current"
              src="../assets/pic/bell_orange.png"
              alt="icon-user"
            /> -->
        <!-- <div 
              class="nav-link nav-user"
              
            >通知</div> -->

        <!-- </router-link>
        </li> -->
        <li>
          <router-link class="nav-item" :to="{ name: 'publicMessage' }">
            <img
              class="icon icon-message"
              src="../assets/pic/message_spot.png"
              alt="icon-user"
            />

            <!-- <img
              v-else
              class="icon icon-message current"
              src="../assets/pic/message_spot_orange.png"
              alt="icon-user"
            /> -->
            <div class="nav-link nav-user">公開聊天室</div>
          </router-link>
        </li>
        <!-- <li>
          <router-link class="nav-item" to="/">
            <img
              class="icon icon-message"
              src="../assets/pic/message.png"
              alt="icon-user"
            />
            
            <img
              v-else
              class="icon icon-message current"
              src="../assets/pic/message_orange.png"
              alt="icon-user"
            />
            <div 
              class="nav-link nav-user"
            >私人訊息</div>

          </router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'Setting' }" class="nav-item">
            <img
              class="icon icon-cog"
              src="../assets/pic/icon_cog.png"
              alt="icon-cog"
            />
            <div class="nav-link nav-setting">設定</div>
          </router-link>
        </li>
        <li class="nav-item nav-post">
          <button class="nav-post-btn">推文</button>
        </li>
      </ul>
    </nav>
    <ul class="logout">
      <li class="logout-item" @click.prevent.stop="clickLogout">
        <img
          class="icon"
          src="../assets/pic/icon_logout.png"
          alt="logout-icon"
        />
        <a href="#" class="nav-link"> 登出 </a>
      </li>
    </ul>
  </header>
</template>

<script>
// import { mapState } from "vuex";

export default {
  props: {
    userId: {
      type: Number,
      required: true,
    },
    currentUserId: {
      type: Number,
      required: true,
    },
  },
  created() {
    // console.log("route-name", this.$route)
  },
  methods: {
    clickLogout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/userLeftColumn.scss";
</style>