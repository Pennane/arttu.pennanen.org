<i18n>
{
    "en": {
    "sub_header": 
      "And here\nyou can find\nitems for\n/sub."
  },
  "fi": {
    "sub_header": "Ja täältä\nlöydät\n/sub\nsisällön."
  }
}
</i18n>
<template>
  <div class="sub">
    <div class="subHeader">
      <h1 class="retro wider">
        <span v-for="line in getHeader" :key="line">{{line}}</span>
      </h1>
    </div>

    <ul v-if="links" class="linkcontainer">
      <li v-for="link in links" :key="'link-'+link">
        <a class="sublink" :href="'https://arttu.pennanen.org/sub/'+link">
          <span class="name">{{ link }}</span>
          <span class="destination">
            <span class="line">{{' – '}}</span>
            <span class="origin">https://arttu.pennanen.org/</span>
            <span class="destinationlink">{{'sub/'+link+'/'}}</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sub-page',
  components: {},
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
      this.$root.$children[0].$options.methods
        .loadJSON('https://arttu.pennanen.org/directory.php')
        .then(function(l) {
          _compthis.links = l
        })
    }
  },
  metaInfo: {
    title: 'Projects'
  },
  mounted() {
    console.log(this.$t('sub_header'))
    console.log('excuse me')
  }
}
</script>


<style scoped>
.linkcontainer {
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  background-color: var(--bg-1);
}

.subHeader {
  display: flex;
  align-items: center;
  background-color: var(--bg-1);
  padding: 2em;
  padding-top: 1em;
}

.subHeader >>> .background-gradient-img {
  margin-bottom: 3em;
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
