import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'boxicons'
import axios from 'axios'
import store from './store'
import VueSocketIO from 'vue-socket.io'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://tranquil-crag-64775.herokuapp.com/',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
    options: { path: '/' }
  }
}))

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