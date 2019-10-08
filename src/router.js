import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from './views/main/PageNotFound.vue'
import Home from './views/main/Home.vue'
import Contact from './views/main/Contact.vue'

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => new Promise((resolve) => {
    const position = savedPosition || {};

    if (!savedPosition) {
      if (to.hash) {
        position.selector = to.hash;
      } else {
        position.x = 0;
        position.y = 0;
      }
      
    }
    router.app.$root.$once('triggerScroll', () => {
      router.app.$nextTick(() => resolve(position));
    });
  }),
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
      path: '/sub',
      name: 'Sub',
      component: () => import('./views/main/Sub.vue')
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
