import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shuttle',
    name: 'Shuttle',
    component: () => import('../views/Shuttle.vue')
  },
  {
    path: '/basketball',
    name: 'Basketball',
    component: () => import('../views/Basketball.vue')
  },
  {
    path: '/football',
    name: 'Football',
    component: () => import('../views/Football.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
