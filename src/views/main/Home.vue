<i18n>
{
  "en": {
    "lower_header": "Web developing and else.",
    "intro_1": "Here are some projects I've built arbitrarily during my time around the web. These projects were mainly created to act as a learning method when taking a glance at new technologies.",
    "intro_2_1": "The site has just received a port to",
    "intro_2_2": "and is currently under the process of comprehensive redesign."
  },
  "fi": {
    "lower_header": "Web-kehitystä sekä muuta.",
    "intro_1": "Tässä mielivaltaisesti valittuja projekteja, joiden tarkoituksena on ollut korjata mieltä ärsyttäneitä ongelmia, tai toimia teknologioiden oppimismenetelminä.",
    "intro_2_1": "Sivusto on vastikään sovitettu käyttämään",
    "intro_2_2": "sovelluskehystä (framework), ja mikään ei varmuudella ole lopullisessa muodossaan."
  }
}
</i18n>


<template>
  <div class="home">
    <div class="header">
      <div class="background-gradient">
        <img class="background-gradient-img" v-lazy="backgroundImageSrc" />
      </div>
      <div class="headerwrap">
        <h1 class="h1">
          <span class="char">Arttu</span>
          <span class="char">Pennanen</span>
        </h1>
        <h2 class="h2">{{ $t("lower_header") }}</h2>
      </div>
    </div>
    <div class="body">
      <div class="introductory">
        <p>{{$t("intro_1")}}</p>
        <p>
          {{$t("intro_2_1")}}
          <a
            class="contentlink"
            href="https://vuejs.org/"
            title="vuejs.org"
          >vue.js</a>
          {{$t("intro_2_2")}}
        </p>
      </div>

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
import simpleParallax from 'simple-parallax-js'

let posts = {}
postsData.forEach((post, i) => {
  posts['post' + i] = () => import('@/views/' + post)
})

export default {
  name: 'home',
  components: {
    ...posts
  },
  data() {
    return {
      posts: posts,
      backgroundImageSrc: require('@/assets/images/epic-gradient-lowest.png')
    }
  },
  methods: {
    changelocale() {
      this.$root.$i18n.locale = 'en'
    }
  },
  mounted: () => {
    let image = document.querySelector('.background-gradient-img')
    if (!image) return
    new simpleParallax(image, {
      transition: 'cubic-bezier(0, 0, 0, 1)',
      delay: 0,
      scale: 2,
      overflow: true,
      orientation: 'down',
      breakpoint: 0
    })
  }
}
</script>


<style scoped>
.background-gradient {
  width: 100%;
  position: absolute;
  left: 0;
  pointer-events: none;
  z-index: -1;
  opacity: 0;
  will-change: opacity;
}

.background-gradient-img {
  width: 100%;
  object-position: bottom;
  filter: blur(20px);
  object-fit: cover;
  
}

.light .background-gradient {
  filter: contrast(1) brightness(2) saturate(0.6);
}

.dark .background-gradient {
  transition: opacity 3.2s ease;
  opacity: 1;
  filter: blur(20px);
}

.background-gradient-img[lazy='loading'] {
  opacity: 0;
}

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
  will-change: margin;
 transition: all .6s cubic-bezier(0, 0, 0.2, 1)

}

.dark .header {
  border: 1px solid white;
   margin-bottom: 32px;
}

.headerwrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1em;
  margin: 2em;
  padding-top: 0.5em;
}

.light .headerwrap {
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
}

.introductory > p {
  margin: 0;

  line-height: 1.6;
  margin: 0.8em 0;
}

.light .introductory > p {
  background-color: white;
  background-color: var(--bg-1);
}

.headerwrap > .h1 {
  font-size: 4.4em;
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
  padding-bottom: 2em;
}

.recent-posts > div {
  margin-bottom: 3em;
  margin-top: 2em;
  padding-bottom: 0.6em;
  padding-top: 0.5em;
}

.light .recent-posts > div {
  background-color: var(--bg-1);
}
</style>


<style>
.home .char5 {
  display: block !important;
}

@media screen and (max-width: 740px) {
  .home .headerwrap > .h1 {
    font-size: 3.8em;
  }
}

@media screen and (max-width: 500px) {
  .home .headerwrap > .h1 {
    font-size: 3em;
  }

  .home .h1 {
    padding-top: 2vw !important;
  }

  .home .headerwrap > .h2 {
    font-size: 1.2em;
  }

  .headerwrap {
    padding: 1em !important;
    margin: 1em !important;
    padding-top: 0.5em !important;
  }
}
</style>