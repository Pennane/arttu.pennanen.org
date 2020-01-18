<template>
  <div :class="{dark:false}">
    <div class="page-wrapper">
      <PageTopbar />
      <main id="content">
        <router-view class="content-wrapper"/>
      </main>
      <PageFooter />
      <BackgroundLines />
    </div>
  </div>
</template>

<script>
import BackgroundLines from '@/components/BackgroundLines'
import PageFooter from '@/components/PageFooter'
import PageTopbar from '@/components/PageTopbar'

export default {
  name: 'DefaultAppView',
  data: () => {
    return {
      modernBackground: false
    }
  },
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
  height: 100%;
}

svg.defs-only {
  display: none;
}

html {
  font-family: 'Inter', sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
}

body {
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  background-color: var(--bg-1);
  height: 100%;
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
  flex: 0 0 auto;
  margin-top: 70px;
}

.content-wrapper > * {
 flex: 0 0 auto;
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

.modern {
  white-space: nowrap;
  line-height: 0.475;
  margin: 0;
  letter-spacing: -4px;
  box-shadow: 0px 5px 0 0 white;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 0;
  color: white;
  line-height: 0.9;
  font-size: 7rem;
  padding: 2rem 4rem;
}

.retro {
  color: #2a2a2a;
  color: var(--split-color1);
  line-height: 0.475;
  margin: 0;
  padding: 1.2rem 0;
  letter-spacing: -4px;
  display: flex;
  flex-direction: column;
      font-size: 6em;
  text-align: left;
}

.retro > span {
  white-space: nowrap;
}

.retro > span:nth-child(odd) {
  color: hsla(225, 14%, 26%, 1);
}

.retro > span:nth-child(even) {
  color: hsl(224, 24%, 34%)
}

.retro.wider {
  line-height: 0.48;
}

.contentlink {
  color: #4361c5;
  color: var(--link-color);
  font-weight: 4000;
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

.page-wrapper > * {
  flex: 0 0 auto;
}

.modernBackground {
  background: #667db6;
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
  background-position: center;
  background-size: 115%;
}

.page-divider {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
}

/*multiple time use classes END*/

/*media queries START*/

@media screen and (max-width: 900px) {
  .retro {
    font-size: calc(1em + 10vw);
  }

  .modern {
    font-size: 10vw;
    padding: 1.5rem 2.7rem;
    box-shadow: 0px 3px 0 0 white;
    letter-spacing: -2px;
  }

  .modernBackground {
    background-size: 150%;
  }

  h1:not([class]) {
    font-size: calc(1.8em + 1.2vw);
  }
}

/*media queries END*/
</style>
