import Vue from 'vue'
import Vuex from 'vuex'
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
  }
})
