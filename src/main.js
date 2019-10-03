import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faLightbulb as fasLightBulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as farLightBulb } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.use(VueAnalytics, {
  id: 'UA-126133790-1',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  router
})

library.add(
  faChevronLeft,
  faGithub,
  faTwitter,
  fasLightBulb,
  farLightBulb
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
