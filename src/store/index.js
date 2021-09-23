import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from './../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      avatar: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        console.log('infetchCurrentUser')
        const response = await userAPI.getCurrentUser()
        // console.log('response currentUser', response)
        const { id, name, email, avatar, isAuthenticated } = response.data
        commit('setCurrentUser', {
          id,
          name,
          email,
          avatar,
          isAuthenticated
        })
        return true
      }
      catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
      return false
    }
  },
  modules: {
  }
})
