import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData: [],
    addBtnState: true,
    listIndex: null
  },
  getters: {
    addBtnState: state => state.addBtnState,
    addListState: state => state.addBtnState,
    listData: state => state.listData
  },

  mutations: {
    setAddBtnState (state, payload) {
      state.addBtnState = payload
    },
    setDataState (state, payload) {
      state.listData.push(payload)
    },
    setCardDataState (state, payload) {
      state.listData = payload
    },
    setTestDataState (state, payload) {
      state.listData.listCards = payload
    }
  },
  actions: {
    addBtnClick ({ commit }) {
      commit('setAddBtnState', false)
    },
    cancelBtnClick ({ commit }) {
      commit('setAddBtnState', true)
    }

  },
  modules: {
  }
})
