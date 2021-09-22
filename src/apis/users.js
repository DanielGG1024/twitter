import {
  apiHelper
} from "../utils/helpers";
// const getToken = () => localStorage.getItem('token')
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTYzMjIzNTM5NH0.w188NxpsOVee_129trj30hCUPbFKKeNc_QsWYHnsNT8"

export default {
  getCurrentUser() {
    return apiHelper.get(`/get-current-user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
}