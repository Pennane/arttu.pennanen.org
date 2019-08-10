import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from './views/PageNotFound.vue'
import Home from './views/main/Home.vue'
import Contact from './views/main/Contact.vue'

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/spotifyfavorites',
      name: 'Spotify favorites',
      component: () => import('./views/projects/spotifyfavorites.vue')
    },
    {
      path: '/typechase',
      name: 'Typechase',
      component: () => import('./views/projects/typechase.vue')
    },
    {
      path: '/peigombot',
      name: 'Peigom bot',
      component: () => import('./views/projects/peigombot.vue')
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
    }
  ]
})

Vue.use(Router)

export default router
