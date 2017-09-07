import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/containers/Main'
import Dashboard from '@/components/containers/Dashboard'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      beforeEnter: (to, from, next) => {
        const token = window.localStorage.getItem('JWT_TOKEN')
        if (token) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
