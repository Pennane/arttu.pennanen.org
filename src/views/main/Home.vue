<i18n>
{
  "en": {
    "main_header": "welcome\nwelcome\nwelcome"
  },
  "fi": {
    "main_header": "tervetuloa\ntervetuloa\ntervetuloa"
  }
}
</i18n>

<template>
  <div class="home">
    <header class="header">
      <div class="headerwrap">
        <h1 class="h1 retro">
          <span v-for="(line, index) in getHeader" :key="line + index">{{
            line
          }}</span>
        </h1>
      </div>
    </header>
    <div class="body">
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
  components: {
    ...posts
  },
  data() {
    return {
      posts: posts
    }
  },
  methods: {
    changelocale() {
      this.$root.$i18n.locale = 'en'
    }
  },
  computed: {
    getHeader() {
      return this.$t('main_header').split('\n')
    }
  },
  mounted() {
    if (window.experimentaltransition) return
    this.$store.commit('transitioning', false)
  },
  beforeRouteLeave(to, from, next) {
    if (window.experimentaltransition) return next()
    this.$store.commit('transitioning', true)
    setTimeout(() => {
      next()
    }, 400)
  }
}
</script>

<style scoped>
.home {
  box-sizing: border-box;
  padding: 0;
  width: 100%;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: center;
  will-change: margin;
  margin-bottom: 32px;
}

.headerwrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1em 0;
  margin: 2em;
  padding-top: 0.5em;
}

.home .body {
  display: flex;
  flex-direction: column;
}

.introductory {
  padding: 7em 20%;
  box-sizing: border-box;
  position: relative;
  margin-top: 2.2em;
  z-index: 2;
}

.introductory::after {
  background-color: var(--bg-2);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  transform: skewY(3deg);
}

.introductory > p {
  margin: 0;
  line-height: 1.6;
  margin: 0.8em auto;
  max-width: 600px;
  font-weight: 400;
  font-size: 1.2em;
  line-height: 1.3;
}

.quote {
  color: var(--font-3);
}

.introductory > p:first-child {
  margin-top: 0;
}

.recent-posts > div {
  position: relative;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em 0 4em 0;
  margin-top: -2px;
}

.recent-posts >>> .project {
  max-width: 600px;
  padding: 2.5em calc(6vw + 0.5em);
}

.recent-posts > div::after {
  background-color: var(--bg-2);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(3deg);
}

.recent-posts > div::before {
  background-color: var(--bg-2);
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(-3deg);
}

.recent-posts > div:nth-child(3n + 1)::after,
.recent-posts > div:nth-child(3n + 1)::before {
  background-color: var(--bg-3);
}

.recent-posts > div:nth-child(3n + 2)::after,
.recent-posts > div:nth-child(3n + 2)::before {
  background-color: var(--bg-4);
}

.recent-posts > div:nth-child(3n + 3)::after,
.recent-posts > div:nth-child(3n + 3)::before {
  background-color: var(--bg-5);
}

.recent-posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4.2em;
}

@media screen and (max-width: 1000px) {
  .recent-posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 850px) {
  .home .body {
    flex-direction: column;
  }
}
@media screen and (max-width: 500px) {
  .home .h1 {
    padding-top: 2vw !important;
  }

  .headerwrap {
    margin: 1em !important;
    margin-bottom: 0;
  }

  .header {
    margin-bottom: 0;
  }
}
</style>
