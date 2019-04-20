import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
