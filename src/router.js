import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from './views/main/PageNotFound.vue'
import Home from './views/main/Home.vue'
import Contact from './views/main/Contact.vue'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    if (savedPosition) {
      position = savedPosition
    }
    return position
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('./views/main/Projects.vue')
    },
    {
      path: '/sub',
      redirect: '/projects'
    },
    {
      path: '/all',
      name: 'All',
      component: () => import('./views/main/All.vue')
    },
    {
      path: '/minesweeper',
      name: 'Minesweeper',
      component: () => import('./views/projects/minesweeper.vue')
    },
    {
      path: '/yatzy',
      name: 'Yatzy',
      component: () => import('./views/projects/yatzy.vue')
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
