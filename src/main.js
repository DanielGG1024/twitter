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

// Vue.prototype.$io = SocketIO('https://tranquil-crag-64775.herokuapp.com')

// Vue.config.productionTop = false


// import io from "socket.io-client";
// import VueSocketIo from "vue-socket.io";
// Vue.use(
//   new VueSocketIo({
//     debug: true,
//     connection: io('https://tranquil-crag-64775.herokuapp.com')
//   })
// );



Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://tranquil-crag-64775.herokuapp.com'),
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
}));





// console.log('main.js token', getToken())
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'https://0ac7-219-85-165-164.ngrok.io/',
//   vuex: {
//     store,
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_',
//     options: { path: '/' }
//   }
// }))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'https://c8ef-219-85-165-164.ngrok.io/',
//   vuex: {}
// }))