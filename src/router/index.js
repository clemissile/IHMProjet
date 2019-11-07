import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home.vue'
import Carte from '../components/carte/Carte.vue'
import Stats from '../components/stats/Stats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/carte',
    name: 'carte',
    component: Carte
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  }
]

const router = new VueRouter({
  routes
})

export default router
