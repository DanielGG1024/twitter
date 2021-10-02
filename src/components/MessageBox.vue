<template>
  <div class="messageBox">
    <div class="header">
      <div class="title">公開聊天室</div>
    </div>
    <div class="messageBox-wrapper" ref="messageBox">
      <div v-for="user in onlineList" :key="user.id" class="notify">
        <div class="notify-mgs">{{ user.name }}上線</div>
      </div>
      <template v-if="newMessages.length !== 'undefined'">
        <div v-for="newMessage in newMessages" :key="newMessage.ChatId">
          <div
            v-if="Number(newMessage.User.id) !== Number(userId)"
            class="user-remote"
          >
            <div class="avatar">
              <div class="pic">
                <img class="icon" :src="newMessage.User.avatar" alt="" />
              </div>
            </div>
            <div class="txt-wrapper">
              <div class="message">
                {{ newMessage.text }}
              </div>
              <div class="time">
                {{ newMessage.createdAt | fromNowWithWord }}
              </div>
            </div>
          </div>

          <div v-else class="user-local">
            <div class="txt-wrapper">
              <div class="message">
                {{ newMessage.text }}
              </div>
              <div class="time">
                {{ newMessage.createdAt | fromNowWithWord }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="input-area" id="textArea">
      <input
        name=""
        v-model="text"
        type="text"
        placeholder="輸入訊息..."
        @keyup.enter="send"
      />
      <button @click.prevent.stop="send" class="btn" :disabled="isProcessing">
        <i class="bx bx-right-arrow"></i>
      </button>
    </div>
  </div>
</template>


<script>
import { Toast } from "./../utils/helpers";
import socketAPI from "./../apis/socket";
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";
export default {
  name: "messageBox",
  components: {
    // PerfectScrollbar,
  },
  props: {
    onlineList: {
      type: Array,
      required: false,
    },
  },
  mixins: [fromNowFilter],
  data() {
    return {
      userId: -1,
      text: "",
      newMessages: [],
      announceData: "",
      isProcessing: false,
    };
  },
  created() {
    this.fetchHistory();
    this.$socket.connect();
    this.userId = this.currentUser.id;
    const userId = this.currentUser.id;
    console.log(userId);
  },
  mounted() {
    const userId = this.currentUser.id;
    this.$socket.emit("leave");
    this.$socket.emit("joinPublic", userId);
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      this.$refs.messageBox.scrollTop = this.$refs.messageBox.scrollHeight;
    },
    send() {
      this.isProcessing = true;
      const userId = this.currentUser.id;
      const text = this.text.trim();
      // console.log(text);
      if (text.length === 0) return;
      this.$socket.emit("chatmessage", {
        msg: text,
        UserId: userId,
      });
      this.text = "";
      this.isProcessing = false;
    },
    async fetchHistory() {
      try {
        const { data } = await socketAPI.getHistory();
        // console.log(data);
        this.newMessages = data;
        this.scrollToBottom();
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法取的歷史訊息",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  sockets: {
    connect: function () {
      // console.log("connect");
      const userId = this.currentUser.id;
      this.$socket.emit("joinPublic", userId);
    },
    announce: function (data) {
      console.log("announce data:", data);
    },
    newMessage: function (data) {
      // console.log("newMessage data:", data);
      this.newMessages.push({
        User: {
          id: data.user.id,
          avatar: data.user.avatar,
          name: data.user.name,
          account: data.user.account,
        },
        text: data.msg,
        createdAt: data.date,
      });
    },
    disconnect: function () {
      // console.log("disconnect");
      const userId = this.currentUser.id;
      this.$socket.emit("leavePublic", userId);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/messageBox.scss";
</style>