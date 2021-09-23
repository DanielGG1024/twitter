import { apiHelper } from './../utils/helpers'

export default {
  logIn({ email, password }) {
    return apiHelper.post('users/login', {
      email,
      password
    })
  },
  regist({ data_JSON }) {
    return apiHelper.post('users', data_JSON)
  }
}
