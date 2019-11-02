<i18n>
{
  "en": {
    "not_found_text": "404\nnot\nfound.\n¯\\_(ツ)_/¯",
    "return_home": ["Back to","home"]

  },
  "fi": {
   "not_found_text": "404\nei löydy.\n¯\\_(ツ)_/¯",
    "return_home": ["Takaisin","alkuun"]
    }
}
</i18n>

<template>
  <div class="page404">
    <AnimatedBackgroundBubbles />
    <div class="header">
      <div class="headerwrap">
        <h1 class="h1 retro wider">
          <span v-for="line in getHeader" :key="line">{{line}}</span>
        </h1>
        <p>
          {{$t("return_home")[0]}}
          <router-link class="homelink" to="/">{{$t("return_home")[1]}}</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import AnimatedBackgroundBubbles from '@/components/AnimatedBackgroundBubbles.vue'

export default {
  name: 'PageNotFound',
  components: {
    AnimatedBackgroundBubbles: AnimatedBackgroundBubbles
  },
  metaInfo: {
    title: "404 Not Found"
  },
  computed: {
    getHeader() {
      return this.$t('not_found_text').split('\n')
    }
  }
}
</script>

<style scoped>
.header {
  max-width: 100%;
  padding: 2em;
}

.headerwrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: initial;
  text-align: center;
}

.page404 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
}

.retro > span:last-child {
  font-size: 0.7em;
  line-height: 1.05;
  margin-left: -.1em;
}

p {
  font-size: 1.5em;
  padding: 0;
  margin: 1rem 0;
  width: 100%
}

.homelink {
  text-decoration: none;
  color: #4361c5;
  color: var(--link-color);
  font-weight: 550;
  text-decoration: none;
  position: relative;
}

.homelink:hover {
  color: var(--link-hover)
}

@media screen and (max-width: 900px) {
  .page404 {
    font-size: calc(0.1em + 1.5vw);
  }

}

.home .char5 {
  display: block !important;
}
</style>