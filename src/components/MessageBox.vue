<template>
  <div class="messageBox">
    <div class="header">
      <div class="title">公開聊天室</div>
    </div>
    <div class="messageBox-wrapper">
      <div class="notify">
        <div class="notify-mgs">Apple 上線</div>
      </div>

      <div class="user-remote">
        <div class="avatar">
          <div class="pic">
            <img class="icon" src="./../assets/pic/Photo.png" alt="" />
          </div>
        </div>
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam a consequuntur, accusantium nemo
            rem quia laudantium aut harum magni voluptatum, ut doloremque
            architecto voluptatibus ea ex eligendi fugit, quidem aspernatur
            repellat maxime adipisci vel dicta? Blanditiis, facere non?
            Consectetur minima unde et quo quibusdam perferendis recusandae
            explicabo, eligendi eum ipsa incidunt quia voluptas illo accusamus
            reprehenderit, natus fuga eos rem sit, rerum provident repellat?
            Sunt modi et voluptatem! Commodi natus quos, dicta in maiores
            suscipit distinctio earum ut at ea pariatur eveniet aliquid eaque
            fugiat porro eos. Omnis beatae eum
          </div>
          <div class="time">下午 4.44</div>
        </div>
      </div>

      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>
      <!-- 
      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div> -->

      <!-- <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>
      <div class="user-local">
        <div class="txt-wrapper">
          <div class="message">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit at
            eum quis architecto reiciendis quas, excepturi cumque, delectus
            accusantium, debitis omnis reprehenderit error et esse tempora culpa
            totam ullam! Vitae architecto ex, perferendis nobis, ratione quidem
            nulla dolorem aliquam velit fuga corporis facere dolore ipsum nihil
            explicabo quis excepturi. At, ullam! Eveniet laborum, iste fuga
            commodi quisquam nisi sit? Ipsam
          </div>
          <div class="time">下午 4:25</div>
        </div>
      </div>
    </div>

    <div class="input-area">
      <input type="text" placeholder="輸入訊息..." v-model="MESSAGE" />
      <button class="btn" @click="send">submit</button>
      </div> -->
    </div>

    <div class="input-area">
      <input v-model="text" type="text" placeholder="輸入訊息..." />
      <button @click.prevent.stop="send" class="btn">submit</button>
    </div>
  </div>
</template>


<script>
// export default {
//   name: 'socket',
//   data() {
//     return{
//       text: "",
//     }
//   },

//   methods:{
//     sendMessage(){
//       this.$socket.emit('chatmessage', {
//         msg: this.text,
//       });
//       this.text="";
//     },
//   },

// }

// import Vue from "vue";
// import store from "./../store";
// import VueSocketIO from "vue-socket.io";
// import SocketIO from "socket.io-client";
import { mapState } from "vuex";
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: SocketIO("https://0ac7-219-85-165-164.ngrok.io/", {
//       auth: {
//         token:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI2NDEwNjYzfQ._czlz2LTzcgJXwkQCSN3EVKOeANpqxuJWeJ7vnWKDAQ",
//       },
//     }),
//     vuex: {
//       store,
//       actionPrefix: "SOCKET_",
//       mutationPrefix: "SOCKET_",
//     },
//   })
// );
// import store from
// var app = require("express")();
// var http = require("http").Server(app);
// var io = require("socket.io");
// io.on("connection", function (socket) {});

// http.listen("https://c8ef-219-85-165-164.ngrok.io/", function () {
//   console.log("listening on *:https://c8ef-219-85-165-164.ngrok.io/");
// });
export default {
  mname: "MeddageBox",
  data() {
    return {
      text: "",
    };
  },
  created() {
    this.$socket.connect();
    // console.log("created");
    // console.log("this.$store.state.token:", this.$store.state.token);
  },
  mounted() {
    // this.checkConnect();
    // console.log(token);
    // console.log("mounted");
    // this.$socket.emit("chatmessage", "hello");
    // const token = localStorage.getItem("token");
    const userId = this.currentUser.id;
    // const data = `{
    //   "token":"${token}"
    // }`;
    this.$socket.emit("leave");
    // const JSON_data = JSON.parse(data);
    // console.log(token);
    // console.log("userId", userId);
    // this.$socket.emit("connect", { auth: { token: token } });
    // this.$socket.emit("connect", { UserId: 265 });
    // this.$socket.emit("connect", JSON_data);
    // this.$socket.emit("connect", "userIdddd");
    this.$socket.emit("joinPublic", { UserId: userId });
  },
  methods: {
    // sendMessage(){
    //   this.$socket.emit('chatmessage', {
    //     msg: this.text,
    //   });
    //   this.text="";
    // },
    send() {
      const userId = this.currentUser.id;
      // const socket = io();
      const text = this.text;
      // console.log("this.text:", this.text);
      this.$socket.emit("chatmessage", {
        msg: text,
        UserId: userId,
      });
      this.text = "";
    },
    checkConnect() {
      const token = localStorage.getItem("token");
      this.$socket.on("connect", {
        token: token,
      });
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  sockets: {
    connect() {
      console.log("connect");
    },
    announce: function (data) {
      console.log("announce data:", data);
    },
    newMessage: function (data) {
      console.log("newMessage data:", data);
    },
    // disconnect: function () {
    //   const userId = this.currentUser.id;
    //   this.$socket.emit("bye", {
    //     UserId: userId,
    //   });
    //   this.$socket.emit("chatmessage", {
    //     msg: text,
    //     UserId: userId,
    //   });
    // },
  },
  // beforeRouteUpdate(to, from, next) {

  // },
};
</script>


<style lang="scss" scoped>
@import "./../assets/scss/messageBox.scss";
</style>