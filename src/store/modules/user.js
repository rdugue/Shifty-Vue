import * as types from '../mutation-types'
import employees from '../../api/employees'
import router from '../../router'

const state = {
  user: { }
}

const getters = {
  loggedInUser: state => state.user
}

const actions = {
  login ({ commit }, creds) {
    employees.loginUser(creds)
    .then(body => {
      if (body.error) {
        console.log(body.error)
      } else {
        const user = body.data
        commit(types.GET_USER, { user })
        window.localStorage.setItem('JWT_TOKEN', body.token)
        router.push({ name: 'Dashboard' })
      }
    })
    .catch(reason => { console.log(reason) })
  },
  register ({ commit }, creds) {
    employees.register(creds)
    .then(body => {
      if (body.error) {
        console.log(body.error)
      } else {
        const user = body.data
        commit(types.GET_USER, { user })
        window.localStorage.setItem('JWT_TOKEN', body.token)
        router.push({ name: 'Dashboard' })
      }
    })
    .catch(reason => { console.log(reason) })
  }
}

const mutations = {
  [types.GET_USER] (state, { user }) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
