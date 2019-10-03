<template>
  <DefaultAppView id="app" />
</template>

<script>
import DefaultAppView from '@/views/main/DefaultAppView.vue'
export default {
  name: 'App',
  components: {
    DefaultAppView
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
  }
}
</script>

<style>
@import './assets/fonts/inter/inter.css';

:root {
  --bg-1: #fff;
  --bg-2: #f4f4f4;
  --bg-3: #dedede;
  --font-1: #000;
  --font-2: #2a2a2a;
  --font-3: #545454;
  --font-4: #2a2a2a;
  --font-5: #595959;
  --contrast-font1: #000000;
  --contrast-font2: #363636;
  --accent-1: #c4c4c4;
  --accent-2: #a0a0a0;
  --selection-bg: rgb(40, 97, 202);
  --selection-color: #fff;
  --link-color: #5378f0;
  --link-hover: #87a1f6;
  --link-color-2: #2042b4;
  --link-hover-2: #071545;
  --brand-filter: brightness(0.2);
  --nav-divide: #60656f;
  --split-color1: #2a2a2a;
  --split-color2: #3a3a3a;
  --bg-line-color: hsla(0, 0%, 63.5%, 0.3);
}

#app.dark {
  --bg-1: #232834;
  --bg-2: #212631;
  --bg-3: #1f2430;
  --font-1: #ffffff;
  --font-2: #f7f7f7;
  --font-3: #a5a5a5;
  --font-4: #f8f8f8;
  --font-5: #c8c9cb;
  --contrast-font1: #f7f7f7;
  --contrast-font2: #e4e4e4;
  --accent-1: #1b1f28;
  --accent-2: #090e18;
  --selection-bg: rgb(134, 170, 255);
  --selection-color: #fff;
  --link-color: #4878ec;
  --link-hover: #90affb;
  --link-color-2: #2556cc;
  --link-hover-2: #163682;
  --brand-filter: brightness(1);
  --nav-divide: #60656f;
  --split-color1: #ffffff;
  --split-color2: #cccccc;
  --bg-line-color: #383838;
}
</style>
