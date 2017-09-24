import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  const Constructor = Vue.extend(Login)
  const vm = new Constructor().$mount()

  it('should return true for isNotFilled when form is blank', () => {
    expect(vm.isNotFilled).to.equal(true)
  })

  it('should return true for isNotFilled when form is partially filled', () => {
    vm.$el.querySelector('.company').textContent = 'AbleSoft'
    Vue.nextTick(() => {
      expect(vm.isNotFilled).to.equal(true)
    })
  })

  it('should return false for isNotFilled when form is filled', () => {
    const form = {
      company: 'AbleSoft',
      userId: 'ralph',
      password: 'a1b2c3d4'
    }
    vm.$el.querySelector('.company').textContent = form.company
    vm.$el.querySelector('.userId').textContent = form.userId
    vm.$el.querySelector('.password').textContent = form.password
    Vue.nextTick(() => {
      expect(vm.isNotFilled).to.equal(false)
    })
  })
})
