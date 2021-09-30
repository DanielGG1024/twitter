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
      account: '',
      avatar: '',
      role: ''
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
      state.token = ''
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const response = await userAPI.getCurrentUser()
        const { id, name, email, avatar, isAuthenticated, account, role } = response.data
        commit('setCurrentUser', {
          id,
          name,
          email,
          avatar,
          role,
          account,
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
