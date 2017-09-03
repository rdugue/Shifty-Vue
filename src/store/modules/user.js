import * as types from '../mutation-types'
import employees from '../../api/employees'

const state = {
  user: {}
}

const getters = {
  loggedInUser: state => state.user
}

const actions = {
  get ({ commit }, creds) {
    employees.loginUser(creds)
    .then(body => {
      if (body.error) {
        console.log(body.error)
      } else {
        const user = body.data
        commit(types.GET_USER, { user })
        window.localStorage.setItem('JWT_TOKEN', body.token)
      }
    })
    .catch(reason => { console.log(reason) })
  }
}

const mutations = {
  [types.GET_USER] (state, { user }) {
    state.user = user
    console.log(state.user)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
