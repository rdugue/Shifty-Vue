import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import shifts from './modules/shifts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shifts
  }
})
