import Vue from 'vue'
import Router from 'vue-router'
import PcRoutes from './pc-router'
import MeRoutes from './me-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pc',
      name: 'pc-home',
      component: () => import('./views/pc/PcApp.vue'),
      children: PcRoutes
    },
    {
      path: '/me',
      name: 'me-home',
      component: () => import('./views/me/MeApp.vue'),
      children: MeRoutes
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
