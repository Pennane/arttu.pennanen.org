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
    <div v-if="!projects" class="loader-wrapper">
      <Loader />
    </div>
    <div v-if="projects" class="projects">
      <a
        v-for="project in projects"
        :key="'link-' + project.name['en']"
        class="project-link"
        :href="project.custom_url ? project.url : project.url"
      >
        <div class="project">
          <img
            class="projectImage"
            :src="
              project.icon
                ? project.icon
                : require('@/assets/images/placeholder.png')
            "
            :alt="project.name[lang]"
          />
          <div class="project-main">
            <span class="name">{{ project.name[lang] }}</span>
            <span class="description" v-if="project.description">{{
              project.description[lang]
            }}</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import Projects from '@/assets/data/projects.json'

export default {
  name: 'Sub-page',
  components: {
    Loader
  },
  data() {
    return {
      projects: null
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
    },
    lang() {
      return this.$i18n.locale
    }
  },
  methods: {
    getLinks() {
      this.projects = Projects
    }
  },
  metaInfo: {
    title: 'Projects'
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
.subHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
}

.loader-wrapper {
  margin: 5em 0;
}

.sub {
  width: 100%;
}

.projects {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.9em;
  padding: 3.9em calc(6vw + 0.5em);
  padding-bottom: 8em;
  line-height: 1.6;
  font-size: 0.9rem;
}

.projects::after {
  background-color: var(--bg-1);
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(-5deg) scaleY(1);
  transform-origin: top;
}

.projects::before {
  background-color: var(--bg-1);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(5deg) scaleY(1);
  transform-origin: top;
}

a {
}

.project {
  display: flex;
  padding: 0.4em 0.7em;
}

.name {
  color: var(--link-color);
  font-weight: 500;
  display: block;
}

.destination {
  color: var(--font-1);
  opacity: 0.8;
  font-size: 0.77em;
  display: inline-block;
}

.projectImage {
  height: 50px;
  width: 50px;
  border-radius: 4px;
  border: 1px solid var(--bg-5);
  margin-right: 0.4em;
  flex: 0 0 auto;
}

.project-main {
  flex: 1 1 auto;
  padding-right: 1em;
}

.description {
  color: var(--font-5);
}

.project-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 390px;
  max-width: 95vw;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.15em;
  margin-bottom: 0.25em;
  display: block;
}

.project-link:hover {
  border-color: var(--bg-5);
  border-radius: 6px;
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
