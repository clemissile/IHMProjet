import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home.vue'
import Carte from '../components/carte/Carte.vue'
import StatsGreves from '../components/stats/greves/StatsGreves.vue'
import StatsClients from '../components/stats/clients/StatsClients.vue'
import StatsGares from '../components/stats/gares/StatsGares.vue'

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
    path: '/stats-clients',
    name: 'stats-clients',
    component: StatsClients
  },
  {
    path: '/stats-gares',
    name: 'stats-gares',
    component: StatsGares
  },
]

const router = new VueRouter({
  routes
})

export default router
