import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from './views/main/PageNotFound.vue'
import Home from './views/main/Home.vue'

const router = new Router({
  mode: "history",
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
      path: '/home',
      redirect: '/'
    },
    {
      path: '/sub',
      name: 'Sub',
      component: () => import('./views/main/Sub.vue')
    },
    {
      path: '/minesweeper',
      name: 'Minesweeper',
      component: () => import('./views/projects/minesweeper.vue')
    },
    {
      path: '/miinaharava',
      redirect: '/minesweeper'
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
      path: '/test',
      name: 'Test',
      component: () => import('./views/projects/templateProject.vue')
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
