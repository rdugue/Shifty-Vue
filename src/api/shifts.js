import * as api from './api'

export default {
  getAllShifts (company) {
    return api.get(`/api/shifts/all/${company}`)
    .then(response => response.json())
    .catch(reason => { throw reason })
  },
  getAllSwaps (company) {
    return api.get(`/api/trades/all/${company}`)
    .then(response => response.json())
    .catch(reason => { throw reason })
  },
  updateShift (shift) {
    return api.put(`/api/shifts/${shift.id}`, shift)
    .then(response => response.json())
    .catch(reason => { throw reason })
  },
  deleteShift (id) {
    return api.remove(`/api/shifts/${id}`)
    .then(response => response.json())
    .catch(reason => { throw reason })
  },
  createShift (shift) {
    return api.post('/api/shifts', shift)
    .then(response => response.json())
    .catch(reason => { throw reason })
  }
}
