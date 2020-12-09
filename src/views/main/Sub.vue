<i18n>
{
    "en": {
    "sub_header": 
      "And then\nthe other\noccurences."
  },
  "fi": {
    "sub_header": "Ja muut\najansaatokset."
  }
}
</i18n>
<template>
  <div class="sub">
    <div class="subHeader">
      <h1 class="retro wider">
        <span v-for="line in getHeader" :key="line">{{ line }}</span>
      </h1>
    </div>
    <div v-if="!links" class="loader-wrapper">
      <Loader />
    </div>
    <div class="links">
      <ul v-if="links" class="linkcontainer">
        <li v-for="link in links" :key="'link-' + link">
          <a class="sublink" :href="'/sub/' + link">
            <span class="name">{{ link }}</span>
            <span class="destination">
              <span class="line">{{ ' – ' }}</span>
              <span class="origin">https://pennanen.dev/</span>
              <span class="destinationlink">{{ 'sub/' + link + '/' }}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import Folders from '@/assets/data/subfolders.json'

export default {
  name: 'Sub-page',
  components: {
    Loader
  },
  data() {
    return {
      links: false
    }
  },
  created() {
    this.getLinks()
  },
  computed: {
    windowOrigin() {
      return window.location.origin
    },
    getHeader() {
      return this.$t('sub_header').split('\n')
    }
  },
  methods: {
    getLinks() {
      let _compthis = this
      _compthis.links = Folders
    }
  },
  metaInfo: {
    title: 'Projects'
  },
  mounted() {
    if (!window.experimentaltransition) return
    this.$store.commit('transitioning', false)
  },
  beforeRouteLeave(to, from, next) {
    if (!window.experimentaltransition) return next()
    this.$store.commit('transitioning', true)
    setTimeout(() => {
      next()
    }, 300)
  }
}
</script>

<style scoped>
.red {
  color: red;
}

.loader-wrapper {
  margin: 5em 0;
}

.sub {
  width: 100%;
}

.linkcontainer {
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  background-color: var(--bg-1);
  margin-left: 0.6em;
  margin-right: 0.5em;
  padding-top: 0.8em;
  font-size: 0.9rem;
}

.links {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5em 0.8em 6em 0.8em;
  overflow: hidden;
}

.links::after {
  background-color: var(--bg-1);
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(-5deg) scaleY(1.2);
  transform-origin: top;
}

.links::before {
  background-color: var(--bg-1);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(-5deg) scaleY(1.2);
  transform-origin: top;
}

.subHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 1em;
}

a {
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.line {
  margin: 0 0.3em;
}

.name {
  color: var(--link-color);
}

.destination {
  color: var(--font-1);
  opacity: 0.8;
  font-size: 0.77em;
  display: inline-block;
}

@media screen and (max-width: 700px) {
  .origin {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .linkcontainer {
    padding-left: 20px;
  }
}
</style>
