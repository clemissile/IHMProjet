import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home.vue'
import Carte from '../components/carte/Carte.vue'
import StatsGreves from "../components/stats/greves/StatsGreves";
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
    path: '/stats-greves',
    name: 'stats-greves',
    component: StatsGreves
  },
  {
    path: '/stats-plop',
    name: 'stats-plop',
    component: Stats
  }
]

const router = new VueRouter({
  routes
})

export default router
