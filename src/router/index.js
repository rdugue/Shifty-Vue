import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/containers/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
