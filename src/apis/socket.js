import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')
export default {
  getHistory() {
    return apiHelper.get('chat/getHistoryMsg', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
}