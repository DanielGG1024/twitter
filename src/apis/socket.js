import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')
export default {
  getHistory() {
    return apiHelper.get('chatroom/getHistoryMsg', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
}