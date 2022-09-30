import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/man',
    name: 'man',
    component: () => import(/* webpackChunkName: "about" */ '../views/Man.vue')
  },
  {
    path: '/paper',
    name: 'paper',
    component: () => import(/* webpackChunkName: "paper" */ '../views/Paper.vue')
  },
  {
    path: '/dye',
    name: 'dye',
    component: () => import(/* webpackChunkName: "paper" */ '../views/Dye.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
