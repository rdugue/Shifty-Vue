import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('should return true for isNotFilled when form is blank', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$data.isNotFilled).to.equal(true)
  })
})
