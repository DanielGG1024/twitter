import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')
export default {
  adminlogIn({ email, password }) {
    return apiHelper.post('admin/login', {
      email,
      password
    })
  },
  adminGetTweets() {
    return apiHelper.get('admin/tweets', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  adminGetUsers() {
    return apiHelper.get('admin/users', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  adminDeleteTweet({ tweetId }) {
    return apiHelper.delete(`admin/tweets/${tweetId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}
