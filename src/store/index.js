import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gares: [],
    greves: [],
    clients: [],
    loadingGa: false,
    loadingGe: false,
  },
  mutations: {
    getGares: (state, gares) => {
      state.gares = gares;
    },
    getGreves: (state, greves) => {
      state.greves = greves;
    },
    getClients: (state, clients) => {
      state.clients = clients;
    },
    setLoadingGa: (state, loadingGa) => {
      state.loadingGa = loadingGa;
    },
    setLoadingGe: (state, loadingGe) => {
      state.loadingGe = loadingGe;
    },
    setLoadingCl: (state, loadingCl) => {
      state.loadingCl = loadingCl;
    }
  },
  actions: {
    loadAPIGares(store, payload) {
      store.commit("setLoadingGa", true);
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset+'&rows=4282&facet=fret&facet=voyageurs&facet=code_ligne&facet=departement').then(function (res) {
        res.json().then(function(res){
          store.commit("getGares", res.records);
          store.commit("setLoadingGa", false);
        })
      })
    },
    loadAPIGreves(store, payload) {
      store.commit("setLoadingGe", true);
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset+'&sort=date&rows=311').then(function (res) {
        res.json().then(function(res){
          store.commit("getGreves", res.records);
          store.commit("setLoadingGe", false);
        })
      })
    },
    loadAPIClients(store, payload) {
      store.commit("setLoadingCl", true);
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset+'&rows=300&facet=gare_enquetee&facet=motif_du_deplacement&facet=annee').then(function (res) {
        res.json().then(function(res){
          store.commit("getClients", res.records);
          store.commit("setLoadingCl", false);
        })
      })
    }
  },
  modules: {
  }
})
