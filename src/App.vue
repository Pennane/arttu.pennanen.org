<i18n>
{
  "en": {
    "meta": {
      "description": "Arttu Pennanen's web project library acting as a personal repository for various projects.",
      "title": "Arttu Pennanen Web"
    }
  },
  "fi": {
    "meta": {
      "description": "Arttu Pennasen web-kirjasto erilaisille moderneille web-projekteille ja säädöille.",
      "title": "Arttu Pennanen Web"
    }
  }
}
</i18n>

<template>
  <DefaultAppView id="app" :class="darkmode ? 'dark' : ''" />
</template>

<script>
import DefaultAppView from '@/views/main/DefaultAppView.vue'
export default {
  name: 'App',
  components: {
    DefaultAppView
  },
  computed: {
    darkmode: function() {
      return this.$store.state.darkmode
    }
  },
  watch: {
    darkmode: function() {
      document.body.style.backgroundColor = this.darkmode
        ? '#0b0d1e'
        : '#fafafa'
    }
  },
  mounted: function() {
    document.body.style.backgroundColor = this.darkmode ? '#0b0d1e' : '#fafafa'
  },
  methods: {
    loadJSON: function(path) {
      let req = new XMLHttpRequest()
      return new Promise((resolve, reject) => {
        req.overrideMimeType('application/json')
        req.open('GET', path, true)
        req.onreadystatechange = () => {
          if (req.readyState == 4 && req.status == '200') {
            let response = JSON.parse(req.responseText)
            return resolve(response)
          }
        }
        req.send(null)
      })
    },
    parseDate(str) {
      let parts = str.split('.')
      return new Date(parts[2], parts[1] - 1, parts[0])
    }
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: this.$root.$i18n.locale
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
        {
          vmid: 'description',
          name: 'description',
          content: this.$t('meta.description')
        },
        {
          name: 'keywords',
          content: 'Arttupennanen,Arttu,Pennanen,Web,Javascript'
        },
        { name: 'author', content: 'Arttu Pennanen' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@arttupennane' },
        { name: 'twitter:title', content: this.$t('meta.title') },
        {
          vmid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('meta.description')
        },
        { name: 'twitter:site', content: 'https://pennanen.dev' },
        { property: 'og:title', content: this.$t('meta.title') },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: this.$t('meta.description')
        },
        { property: 'og:site_name', content: 'pennanen.dev' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#424d6c' }
      ],
      title: 'Arttu Pennanen'
    }
  }
}
</script>

<style>
:root {
  --bg-1: #fafafa;
  --bg-2: #fff;
  --bg-3: hsla(224, 21%, 96%, 1);
  --bg-4: hsla(225, 19%, 92%, 1);
  --bg-5: hsla(231, 20%, 94%, 1);
  --large-header: #222222;
  --large-header-blend-mode: multiply;
  --font-1: #3a3a3a;
  --font-2: #2a2a2a;
  --font-3: #545454;
  --font-4: #2a2a2a;
  --font-5: #595959;
  --contrast-font1: #000;
  --contrast-font2: #363636;
  --accent-1: #c4c4c4;
  --accent-2: #a0a0a0;
  --selection-bg: #2861ca;
  --selection-color: #fff;
  --link-color: #5378f0;
  --link-hover: #87a1f6;
  --link-color-2: #2042b4;
  --link-hover-2: #071545;
  --brand-filter: brightness(0.2);
  --split-color1: #2a2a2a;
  --split-color2: #3a3a3a;
  --bg-line-color: hsla(0, 0%, 61%, 0.3);
  --topbar-gradient: linear-gradient(90deg, #2164f3, #1f66cd);
  --page-change-gradient: linear-gradient(to top, #2a4dea, #4864fe);
}

.dark {
  --bg-1: #0a0d1e;
  --bg-2: #0e1020;
  --bg-3: #0f1124;
  --bg-4: #0d1021;
  --bg-5: #0c0e1d;
  --large-header: #eaeaea;
  --large-header-blend-mode: screen;
  --font-1: #e0e1e3;
  --font-2: #f7f7f7;
  --font-3: #a5a5a5;
  --font-4: #f8f8f8;
  --font-5: #c8c9cb;
  --contrast-font1: #e1e1e2;
  --contrast-font2: #e4e4e4;
  --accent-1: #1b1f28;
  --accent-2: #090e18;
  --selection-bg: #86aaff;
  --link-color: #90affb;
  --link-hover: #d2dcff;
  --link-color-2: #4e82ff;
  --link-hover-2: #96b0eb;
  --brand-filter: brightness(10);
  --nav-divide: #60656f;
  --split-color1: #ee4b4b;
  --split-color2: #ccc;
  --bg-line-color: rgba(34, 39, 49, 0.6);
  --topbar-gradient: transparent;
  --page-change-gradient: linear-gradient(
    to top,
    hsl(232deg 42% 10%),
    hsl(232deg 43% 11%)
  );
}
</style>
