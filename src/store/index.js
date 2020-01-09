import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gares: [],
    greves: [],
    loading: false,
  },
  mutations: {
    getGares: (state, gares) => {
      state.gares = gares;
    },
    getGreves: (state, greves) => {
      state.greves = greves;
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    }
  },
  actions: {
    loadAPIGares(store, payload) {
      store.commit("setLoading", true);
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset+'&rows=4282&facet=fret&facet=voyageurs&facet=code_ligne&facet=departement').then(function (res) {
        res.json().then(function(res){
          store.commit("getGares", res.records);
          store.commit("setLoading", false);
        })
      })
    },
    loadAPIGreves(store, payload) {
      store.commit("setLoading", true);
      fetch('https://data.sncf.com/api/records/1.0/search/?dataset='+payload.dataset+'&sort=date&rows=311').then(function (res) {
        res.json().then(function(res){
          store.commit("getGreves", res.records);
          store.commit("setLoading", false);
        })
      })
    }
  },
  modules: {
  }
})
