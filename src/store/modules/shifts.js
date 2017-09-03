import * as types from '../mutation-types'
import shifts from '../../api/shifts'

const state = {
  shifts: []
}

const getters = {
  allShifts: state => state.shifts
}

const actions = {
  getShifts ({ commit }, company) {
    shifts.getAllShifts(company)
    .then(body => {
      const shifts = body.data
      commit(types.GET_SHIFTS, { shifts })
    })
  }
}

const mutations = {
  [types.GET_SHIFTS] (state, { shifts }) {
    state.shifts = shifts
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
