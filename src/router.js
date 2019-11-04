import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from './views/main/PageNotFound.vue'
import Home from './views/main/Home.vue'

import spotifyfavorites from './views/projects/spotifyfavorites.vue'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      const position = { x: 0, y: 0 };

      if (savedPosition) {
        position.x = savedPosition.x;
        position.y = savedPosition.y;
      }

      router.app.$root.$once('scrollBeforeEnter', () => {
        resolve(position);
      });
    })
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
      path: '/spotifyfavorites',
      name: 'Spotify favorites',
      component: spotifyfavorites
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
