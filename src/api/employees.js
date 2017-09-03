import * as api from './api'

export default {
  loginUser (user) {
    return api.post('/auth/login', user)
    .then(response => response.json())
    .catch(reason => { throw reason })
  }
}
