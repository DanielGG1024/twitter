import {
  apiHelper
} from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getUser({
    userId
  }) {
    return apiHelper.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getCurrentUser() {
    return apiHelper.get('users/get-current-user', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  putUser({ userId, JSON_data }) {
    console.log("api-JSON_data:", JSON_data)
    return apiHelper.put(`users/${userId}/setting`, JSON_data, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}