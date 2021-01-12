import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faLightbulb as fasLightBulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as farLightBulb, faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import VueLazyload from 'vue-lazyload'
import VScrollLock from 'v-scroll-lock'
import VueMeta from 'vue-meta'
import i18n from './i18n'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.use(VueAnalytics, {
  id: 'UA-126133790-2',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  router
})

Vue.use(VueLazyload)

Vue.use(VueMeta)

VScrollLock.bodyScrollOptions = {
  reserveScrollBarGap: true
}

Vue.use(VScrollLock)

library.add(
  faChevronLeft,
  faGithub,
  faTwitter,
  fasLightBulb,
  farLightBulb,
  faMoon,
  farMoon
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
