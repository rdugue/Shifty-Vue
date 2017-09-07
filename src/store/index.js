import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import user from './modules/user'
import shifts from './modules/shifts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    toggle (state) {
      state.drawer = !state.drawer
    }
  },
  getters: {
    drawerOpen: state => state.drawer
  },
  modules: {
    user,
    shifts
  },
  plugins: [
    createPersistedState({
      getState: key => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: false })
    })
  ]
})
