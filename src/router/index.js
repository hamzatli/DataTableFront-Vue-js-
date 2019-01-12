import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Login from '@/components/Login'
import Registration from '@/components/Registration'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/datatable',
      name: 'dataTable',
      component: index
    },
    {
      path: '/signup',
      name: 'signup',
      component: Registration
    }

  ]
})
