<template>
  <div :class="{dark:false}">
    <div class="page-wrapper">
      <PageTopbar />
      <div class="page-divider">
        <content class="content">
          <BackgroundLines />
          <main id="content">
            <transition name="fade" mode="out-in" @after-leave="beforeEnter">
              <keep-alive>
                <router-view />
              </keep-alive>
            </transition>
          </main>
        </content>
      </div>
      <PageFooter />
    </div>
    <svg class="defs-only">
      <filter
        id="brown-tint"
        color-interpolation-filters="sRGB"
        x="0"
        y="0"
        height="100%"
        width="100%"
      >
        <feColorMatrix
          type="matrix"
          values="0.58     0     0     0     0
              0     0.49     0     0     0
              0     0     0.39     0     0
              0     0     0     1     0 "
        />
      </filter>
      <filter
        id="blue-tint"
        color-interpolation-filters="sRGB"
        x="0"
        y="0"
        height="100%"
        width="100%"
      >
        <feColorMatrix
          type="matrix"
          values="0.4     0     0     0     0
              0     0.47     0     0     0
              0     0     0.69     0     0
              0     0     0     1     0 "
        />
      </filter>
    </svg>
  </div>
</template>

<script>
import BackgroundLines from '@/components/BackgroundLines'
import PageFooter from '@/components/PageFooter'
import PageTopbar from '@/components/PageTopbar'

export default {
  name: 'DefaultAppView',
  components: {
    BackgroundLines,
    PageFooter,
    PageTopbar
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('scrollBeforeEnter')
    }
  },
  /*
  This is for forcing darkmode
  computed: {
    darkmode() {
      let darkmode = this.$store.state.darkmode && true
      document.body.classList.toggle('dark', darkmode)
      document.body.classList.toggle('light', !darkmode)
      return darkmode
    }
  },*/
  mounted: function() {
    let darkmode = false
    document.body.classList.toggle('dark', darkmode)
  }
}
</script>


<style lang="css">
/* general START */

#app {
  font-family: 'Inter', sans-serif;
  color: var(--font-1);
}

svg.defs-only {
  display: none;
}

html {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: inherit;
  width: inherit;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  background-color: var(--bg-1);
}

#app ::selection {
  background-color: rgba(19, 81, 196, 0.65);
  background-color: var(--selection-bg);
  color: white;
  color: var(--selection-color);
}

/* general END */

/*common element styling START*/
h1 {
  color: #2e2f2f;
  color: var(--font-2);
  font-size: 2.9em;
  font-weight: 700;
  padding: 0;
  border-radius: 0.375rem;
  margin: 0.97em 0;
}

h2 {
  font-size: 2em;
}

main {
  display: flex;
  justify-content: center;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-bottom: 7em;
}

p {
  font-weight: 3;
  color: #000;
  color: var(--font-1);
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.3;
}

/*common element styling END*/

/*multiple time use classes START*/

.retro {
  color: #484848;
  color: var(--split-color1);
  line-height: 0.455;
  margin: 0;
  padding: 1.2rem 0;
  letter-spacing: -4px;
  display: flex;
  flex-direction: column;
  font-size: 9em;
  text-align: left;
}

.retro > span {
  white-space: nowrap;
  mix-blend-mode: darken;
  opacity: 0.95;
}

.retro > span:nth-child(odd) {
  color: #2f437e;
}

.retro > span:nth-child(even) {
  color: #685338;
}

.retro.wider {
  line-height: 0.48;
}

.contentlink {
  color: #4361c5;
  color: var(--link-color);
  font-weight: 550;
}

.contentlink:hover {
  color: #607fe6;
  color: var(--link-hover);
}

.contentlink::selection {
  text-shadow: none;
  background-color: rgba(19, 81, 196, 0.65);
  background-color: var(--selection-bg);
  color: white;
  color: var(--selection-color);
  text-shadow: none;
}

.page-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-1);
}

.page-divider {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
}

/*multiple time use classes END*/

/*unique "identifier" classes START*/

.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 100%;
}

/*unique "identifier" classes END*/

/*misc START*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.21s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/*misc END*/

/*media queries START*/

@media screen and (max-width: 1000px) {
  .retro {
    font-size: 12vw;
  }

  h1:not([class]) {
    font-size: calc(1.8em + 1.2vw);
  }
}

/*media queries END*/
</style>
