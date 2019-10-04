<i18n>
{
  "en": {
    "lower_header": "Web developing and else.",
    "intro_1": "Hello. Here are some of the things I've made past my time around the web.",
    "intro_2_1": "The site has just been ported to",
    "intro_2_2": ", and I am currently in the process of redesigning everything."
  },
  "fi": {
    "lower_header": "Web-kehitystä sun muuta.",
    "intro_1": "Täältä löytyy muutamia projekteja, joita olen raapustanut nettisurffailun ohessa.",
    "intro_2_1": "Sivusto on juuri sovitettu käyttämään",
    "intro_2_2": "sovelluskehystä (framework), ja mahdolliset muutokset ovat vääjäämättömiä."
  }
}
</i18n>


<template>
  <div class="home">
    <div class="header">
      <div class="headerwrap">
        <h1 class="h1">
          <span class="char">Arttu</span>
          <span class="char">Pennanen</span>
        </h1>
        <h2 class="h2">{{ $t("lower_header") }}</h2>
      </div>
    </div>
    <div class="body">
      <p>{{$t("intro_1")}}</p>
      <p>
        {{$t("intro_2_1")}}
        <a class="contentlink" href="https://vuejs.org/" title="vuejs.org">vue.js</a>
        {{$t("intro_2_2")}}
      </p>
      <div class="recent-posts">
        <component
          v-for="postkey in Object.keys(posts)"
          :is="postkey"
          :key="postkey"
          :preview="true"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import postsData from '@/assets/data/posts.json'
let posts = {}
postsData.forEach((post, i) => {
  posts['post' + i] = () => import('@/views/' + post)
})

export default {
  name: 'home',
  components: posts,
  data() {
    return {
      posts: posts
    }
  },
  methods: {
    changelocale() {
      this.$root.$i18n.locale = 'en'
    }
  }
}
</script>


<style>
.home {
  box-sizing: border-box;
  padding: 0;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: center;
}

.headerwrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.3em;
  margin: 1.3em;
  padding-top: 0.5em;
  background-color: white;
  background-color: var(--bg-1);
}

.home .body {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  flex: 0 1 auto;
  max-width: 570px;
  align-items: flex-start;
  margin: 0 calc(6vw - 0.5em);
}

.body > p {
  margin: 0;
  background-color: white;
  background-color: var(--bg-1);
  line-height: 1.6;
  margin: 0.8em 0;
}

.body p:last-child {
  margin-bottom: 2em;
}

.headerwrap > .h1 {
  font-size: 4.4em;
  text-shadow: 0px 2px #6f747d;
  color: #484848;
  color: var(--split-color1);
  line-height: 0.8;
  margin: 0;
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.01em;
}

.headerwrap > .h2 {
  font-size: 1.55em;
  color: #404350;
  color: var(--font-2);
  font-weight: 300;
  margin: 0 0.15em;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

.recent-posts {
  padding-bottom: 8em;
}

.recent-posts > div {
  margin-bottom: 3em;
  margin-top: calc(0.5em + 1.1vw);
  padding-bottom: 0.6em;
  background-color: var(--bg-1);
}
</style>


<style>
.home .char5 {
  display: block !important;
}

@media screen and (max-width: 900px) {
  .home .char {
    font-size: calc(0.25em + 5.4vw) !important;
  }

  .home .h1 {
    padding-top: 2vw !important;
  }

  .home .h2 {
    font-size: calc(0.8em + 1.3vw) !important;
  }

  .headerwrap {
    margin: 0 2vw !important;
    padding-bottom: 1.5em !important;
    padding-top: 0 !important;
  }
}
</style>