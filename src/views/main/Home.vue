<i18n>
{
  "en": {
    "main_header": "Web\ndeveloping\nand else.",
    "intro_1": "For why this has been brought up to daylight has no concrete answer but to make myself feel settlement. The universe is particularly dear to me. All the life that lies beneath the surface is formed from technologies and mind's creative expression that shows a new wave of art that has never been seen before.",
    "intro_2_1": "Just an instant in time, but what will sprout from it, is what makes it important. Whatever exists soon might have no resemblance to what is now. And something that can now be seen here today, might never be seen here again. The mind forgets and sparks from  coincidental moments. Intricacy does not ease the mind. The thing that finally lights up the spark might be something completely unforeseen."
  },
  "fi": {
    "main_header": "Web\nkehitystä\nsekä muuta.",
    "intro_1": "Tässä joitain projekteja, joiden tarkoituksena on ollut korjata mieltä ärsyttäneitä ongelmia.",
    "intro_2_1": "Mikään ei pysy kauaa samanlaisena - pahimmillaan ei edes saman oloisena - ja näin asioiden kuuluu olla. Sisäistä sivu englanniksi. Se on niin ehkä vähän mielekkäämpää."
  }
}
</i18n>


<template>
  <div class="home">
    <header class="header">
      <div class="headerwrap">
        <h1 class="h1 retro">
          <span v-for="line in getHeader" :key="line">{{line}}</span>
        </h1>
      </div>
    </header>
    <div class="body">
      <div class="introductory">
        <p>{{$t("intro_1")}}</p>
        <p>{{$t("intro_2_1")}}</p>
        <p class="quote">- joemama 1942</p>
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

.dark .header {
  border: 1px solid white;
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
  margin-bottom: 3em;
  margin-top: 2em;
  padding-bottom: 0.6em;
  padding-top: 0.5em;
  position: relative;
  max-width: 600px;
  background-color: var(--bg-1);
  padding: 2.5em calc(6vw + 0.5em);
}

.recent-posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/*

.recent-posts > div:nth-child(even) {
  padding: 2.5em calc(6vw + 0.5em);
  margin: 2em 0 2em 10%;
  max-width: 600px;
}

.recent-posts > div:nth-child(odd) {
  padding: 2.5em calc(6vw + 0.5em);
  margin: 2em 0 2em 30%;
  max-width: 600px;
}
*/

@media screen and (max-width: 1000px) {
  .recent-posts > div {
    margin: 0 !important;
  }

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