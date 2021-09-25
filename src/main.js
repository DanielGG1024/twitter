import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'boxicons'
import axios from 'axios'
import store from './store'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'





// const getToken = () => localStorage.getItem('token')
// const token = {token: `${getToken}`}

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'https://0ac7-219-85-165-164.ngrok.io',
//   vuex:{}
// }))




// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketIO('https://0ac7-219-85-165-164.ngrok.io', token), //options object is Optional
//   vuex: {
//     store,
//     actionPrefix: "SOCKET_",
//     mutationPrefix: "SOCKET_"
//   }
// }));


Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://0ac7-219-85-165-164.ngrok.io'),
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
}));




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



{/* < script >
  import Vue from "vue";
import store from "./../store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";


// const getToken = () => localStorage.getItem('token')
// const token = {token: `${getToken}`}



Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://0ac7-219-85-165-164.ngrok.io", {
      auth: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI2NDEwNjYzfQ._czlz2LTzcgJXwkQCSN3EVKOeANpqxuJWeJ7vnWKDAQ",
      },
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

export default {
  name: "ChatPublic",
  data() {
    return {
      message: "",
    };
  },

  sockets: {
    connect: function () {
      console.log("socket connected");
    },
  },

  created() {
    this.$socket.connect();
  },

  methods: {
    send() {
      this.$socket.emit("chat message", this.message);
      this.message = "";
    },
  },
}; 
</script> */}
