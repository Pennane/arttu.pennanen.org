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
</style>
