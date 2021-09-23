import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  postTweet({ data_JSON }) {
    return apiHelper.post('tweets', data_JSON, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  postTweetReply({ tweetId, data_JSON }) {
    return apiHelper.post(`tweets/${tweetId}/replies`, data_JSON, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getTweets() {
    return apiHelper.get('tweets', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getTweet({ tweetId }) {
    return apiHelper.get(`tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTweetReplies({ tweetId }) {
    return apiHelper.get(`tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ tweetId }) {
    return apiHelper.post(`tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  removeLike({ tweetId }) {
    return apiHelper.post(`tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollow({ data_JSON }) {
    return apiHelper.post('followships', data_JSON, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  removeFollow({ userId }) {
    return apiHelper.delete(`followships/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopUser() {
    return apiHelper.get('users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}