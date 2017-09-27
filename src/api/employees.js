import * as api from './api'

export default {
  loginUser (user) {
    return api.post('/auth/login', user)
    .then(response => response.json())
    .catch(reason => { throw reason })
  },
  register (user) {
    return api.post('/auth/register', user)
    .then(response => response.json())
    .catch(reason => { throw reason })
  }
}
