import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkmode: localStorage.darkmode === "true"
  },
  mutations: {
    toggleDarkmode(state, bool) {
      if (!bool) {
        state.darkmode = !state.darkmode;
      } else {
        state.darkmode = bool
      }
    }
  }
})
