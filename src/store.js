// import Vue from 'vue'
import {
  Store
} from './min-vuex'
// import Vuex from 'vuex'
// Vue.use(Vuex)

export default new Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
  /* actions: {
    incrementAction({
      state
    }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(state.count++)
        }, 200)
      })
    }
  },
  getters: {
    incrementDouble(state) {
      return state.count * 2
    }
  } */
})