import {
  apiHelper
} from "../utils/helpers";
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
  update({
    userId ,formData
  }) {
    return apiHelper.put(`/users/${userId}`, formData, {
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
  },
  getUserReplies({userId}) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUserLikes({userId}) {
      return apiHelper.get(`/users/${userId}/likes`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
  },
  getUserFollowers({ userId }) {
    return apiHelper.get(`/users/${userId}/followers`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUserFollowings({
    userId
  }) {
    return apiHelper.get(`/users/${userId}/followings`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },


}