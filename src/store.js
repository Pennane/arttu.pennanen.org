import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*eslint no-param-reassign: "error"*/

export default new Vuex.Store({
  state: {
    darkmode: localStorage.darkmode !== undefined ? (localStorage.darkmode == "true") : window.matchMedia('(prefers-color-scheme: dark)').matches,
    locale: localStorage.locale
  },
  mutations: {
    toggleDarkmode(state, bool) {
      if (typeof bool === "undefined") {
        state.darkmode = !state.darkmode;
      } else {
        state.darkmode = bool
      }
    },
    setLocale(state, locale) {
      state.locale = locale
    }
  }
})
