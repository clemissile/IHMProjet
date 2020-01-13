import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gares: [],
    garesStats: [],
    greves: [],
    clients: {},
    loadingGa: false,
    loadingGe: false,
    loadingCl: false,
    loadingGaSt: false
  },
  mutations: {
    getGares: (state, gares) => {
      state.gares = gares;
    },
    getGaresStats: (state, garesStats) => {
      state.garesStats = garesStats;
    },
    getGreves: (state, greves) => {
      state.greves = greves;
    },
    getClients: (state, payload) => {
      state.clients[payload.req] = payload.res;
    },
    setLoadingGa: (state, loadingGa) => {
      state.loadingGa = loadingGa;
    },
    setLoadingGe: (state, loadingGe) => {
      state.loadingGe = loadingGe;
    },
    setLoadingCl: (state, loadingCl) => {
      state.loadingCl = loadingCl;
    },
    setLoadingGaSt: (state, loadingGaSt) => {
      state.loadingGaSt = loadingGaSt;
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
    loadAPIGaresStats(store, payload) {
      store.commit("setLoadingGaSt", true);
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset+'&sort=total_voyageurs_2018&facet=nom_gare&rows=3').then(function (res) {
        res.json().then(function(res){
          store.commit("getGaresStats", res.records);
          store.commit("setLoadingGaSt", false);
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
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset1+'&rows=300&facet=gare_enquetee&facet=motif_du_deplacement&facet=annee').then(function (res) {
        res.json().then(function(res){
          store.commit("getClients", {
            req: "raisons-deplacement",
            res: res.records
          });
        })
      });
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset2+'&rows=300&facet=gare_enquetee&facet=motif_du_deplacement&facet=annee').then(function (res) {
        res.json().then(function(res){
          store.commit("getClients", {
            req: "age-clients",
            res: res.records
          });
        })
      })
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset3+'&rows=700&sort=gare_enquetee&facet=gare_enquetee&facet=csp&facet=annee').then(function (res) {
        res.json().then(function(res){
          store.commit("getClients", {
            req: "taff-clients",
            res: res.records
          });
          store.commit("setLoadingCl", false);
        })
      })
    }
  },
  modules: {
  }
})
