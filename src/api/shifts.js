import * as api from './api'

export default {
  getAllShifts (company) {
    return api.get(`/api/shifts/all/${company}`)
    .then(response => response.json())
  }
}
