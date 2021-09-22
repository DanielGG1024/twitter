import {
  apiHelper
} from "../utils/helpers";
// const getToken = () => localStorage.getItem('token')
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get(`/get-current-user`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  get({
    userId
  }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getTopUsers() {
    return apiHelper.get('users/top', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUserTweets({
    userId
  }) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }


}