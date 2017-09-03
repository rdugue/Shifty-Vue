import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Week from '@/components/containers/Week'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Week',
      component: Week
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
