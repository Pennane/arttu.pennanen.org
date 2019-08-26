<template>
  <div :class="{dark:darkmode}">
    <div class="page-wrapper">
      <div class="topbar">
        <div class="topbrandimg">
          <img class="brand" :src="require('@/assets/icons/icon_white.svg')" alt />
        </div>
      </div>
      <div class="page-divider">
        <PageSidebar />
        <content class="content" id="scrollbase">
          <BackgroundLines />
          <main id="content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </main>
        </content>
      </div>
    </div>
  </div>
</template>

<script>
import PageSidebar from '@/components/PageSidebar'
import BackgroundLines from '@/components/BackgroundLines'

export default {
  name: 'DefaultAppView',
  components: {
    PageSidebar,
    BackgroundLines
  },
  methods: {
    onTouchmove(e) {
      document.body.scrollTop = 0
    }
  },
  computed: {
    darkmode() {
      return this.$store.state.darkmode
    }
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    document.addEventListener('touchmove', this.onTouchmove)
  },

  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    document.removeEventListener('touchmove', this.onTouchmove)
  }
}
</script>


<style lang="css">
/* colors START */
:root {
  --bg-1: #fff;
  --bg-2: #f4f4f4;
  --bg-3: #dedede;
  --font-1: #000;
  --font-2: #ff4d4d;
  --font-3: #bd2f43;
  --contrast-font1: #f7f7f7;
  --contrast-font2: #e4e4e4;
  --accent-1: #ef4950;
  --accent-2: #d00000;
  --selection-bg: rgb(255, 0, 0);
  --selection-color: #fff;
  --link-color: #ec4866;
  --link-hover: #ffd9e0;
  --brand-filter: brightness(0.2);
  --nav-divide: #60656f;
  --split-color1: #2a2a2a;
  --split-color2: #3a3a3a;
  --bg-line-color: hsla(0, 0%, 63.5%, 0.3);
}

/* colors END*/

/* general START */

#app {
  font-family: 'Inter', sans-serif;
  height: inherit;
  width: inherit;
  overflow: hidden;
  color: var(--font-1);
  background-color: var(--bg-1);
}

html {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  position: fixed;
  overflow: hidden;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: inherit;
  width: inherit;
  position: fixed;
  overflow: hidden;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

#app.dark {
  --bg-1: #232834;
  --bg-2: #212631;
  --bg-3: #1f2430;
  --font-1: #dadde0;
  --font-2: #ff4d4d;
  --font-3: #bd2f43;
  --contrast-font1: #f7f7f7;
  --contrast-font2: #e4e4e4;
  --accent-1: #8e2d31;
  --accent-2: #ea1313;
  --selection-bg: rgb(255, 7, 17);
  --selection-color: #fff;
  --link-color: #ff5454;
  --link-hover: #f97f81;
  --brand-filter: brightness(1);
  --nav-divide: #60656f;
  --split-color1: #ffffff;
  --split-color2: #cccccc;
  --bg-line-color: #383838;
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
  z-index: 2;
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

p {
  color: black;
  color: var(--font-1);
}

/*common element styling END*/

/*multiple time use classes START*/

.contentlink {
  color: #4361c5;
  color: var(--link-color);
  font-weight: 550;
  text-decoration: none;
  position: relative;
  text-shadow: 1px 1px #ffffff, -1px 1px #ffffff, -1px -1px #ffffff,
    1px -1px #ffffff;
  text-shadow: 1px 1px var(--bg-1), -1px 1px var(--bg-1), -1px -1px var(--bg-1),
    1px -1px var(--bg-1);
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
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
}

.page-divider {
  display: flex;
  flex: 1 1 auto;
  position: relative;
  width: 100%;
  height: 100%;
}

img.brand {
  width: 1.6em;
  opacity: 0.8;
  transition: opacity 0.2s;
  filter: saturate(0) contrast(1) brightness(0.2);
  filter: var(--brand-filter);
}

span.brand {
  font-weight: 700;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 0.1em;
}

/*multiple time use classes END*/

/*unique "identifier" classes START*/
.topbar {
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  background-color: var(--bg-2);
}

.topbrandimg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.7em;
  height: 4.7em;
}

.content {
  background-color: var(--bg-1);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

/*unique "identifier" classes END*/

/* project START */

.project {
  max-width: 700px;
}

.project > div {
  padding: 0.5em;
}

.projectbody p {
  line-height: 2;
}

.projectbody {
  background-color: var(--bg-1);
}

.projectfooter {
  background-color: rgba(0, 0, 0, 0.1);
  margin: 1em 0;
  font-style: italic;
  display: flex;
  border-radius: 3em;
  flex: 1 1 auto;
  justify-content: center;
  padding: 0.6em 0em !important;
  align-items: center;
  margin-bottom: 5em;
}

/* project END */

/*misc START*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.21s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

main > div {
  padding: 0 calc(0.1rem + 5.7vw);
}

/*misc END*/

/*media queries START*/

@media screen and (max-width: 1000px) {
  .sidebar {
    width: 14em;
  }

  h1 {
    font-size: calc(1.8em + 1.2vw);
  }
}

@media screen and (max-width: 700px) {
  .content {
    margin-left: 33px;
  }
}

/*media queries END*/
</style>
