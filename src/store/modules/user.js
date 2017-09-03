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
    .catch(reason => { console.log(reason) })
    .then(body => {
      const user = body.data
      commit(types.GET_USER, { user })
      // set jwt toke in browser
      window.localStorage.setItem('JWT_TOKEN', body.token)
    })
  }
}

const mutations = {
  [types.GET_USER] (state, { user }) {
    state.user = user
    // console.log(getters.loggedInUser(state))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
