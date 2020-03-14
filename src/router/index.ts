import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SimpleIndex from '../views/SimpleIndex.vue'
import SecondPage from '../views/SecondPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'simpleIndex',
    component: SimpleIndex
  }, {
    path: '/second',
    name: 'secondPage',
    component: SecondPage
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
