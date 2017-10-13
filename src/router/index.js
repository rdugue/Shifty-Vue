import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Main from '@/components/containers/Main'
import Dashboard from '@/components/containers/Dashboard'
import MakeSchedule from '@/components/containers/MakeSchedule'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: { name: 'Dashboard' },
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
        },
        {
          path: 'make-schedule',
          name: 'Make Schedule',
          component: MakeSchedule
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
