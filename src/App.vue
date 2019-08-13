<template>
  <div id="app" :class="{dark:darkmode}">
    <div class="page-wrapper">
      <div class="topbar">
        <div class="topbrandimg">
          <img class="brand" src="./assets/icons/icon_white.svg" alt />
        </div>
      </div>
      <div class="page-divider">
        <sidebar />
        <content class="content">
          <backgroundlines />
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
import Sidebar from '@/components/Sidebar'
import Backgroundlines from '@/components/BackgroundLines'
export default {
  name: 'App',
  components: {
    sidebar: Sidebar,
    backgroundlines: Backgroundlines
  },
  computed: {
    darkmode() {
      return this.$store.state.darkmode
    }
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
    onTouchmove(e) {
      document.body.scrollTop = 0
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
@import './assets/fonts/inter/inter.css';

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

.tryhere {
  all: unset;
  -webkit-appearance: none;
  text-decoration: none;
  padding: 0.8em 1.5em;
  background: linear-gradient(
    to right,
    hsla(226, 45%, 54%, 1),
    hsl(357, 84%, 61%)
  );
  border-radius: 1.3em;
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.3);
  width: 75px;
  text-align: center;
  display: block;
  margin-left: 1em;
  white-space: nowrap;
}

.tryhere:hover {
  filter: brightness(0.9);
}

.tryhere:active {
  transform: translateY(2px);
  filter: saturate(110%) brightness(0.7);
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

/*sidebar START*/
.sidebar {
  background-color: rgb(222, 222, 222) ´;
  background-color: var(--bg-3);
  width: 16em;
  transition: width 0.25s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

#sidebar-toggler {
  transition: transform 0.1s ease;
  background: none;
  border: none;
  outline: none;
}

.sidebar-toggle {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sidebar-toggle > button {
  all: unset;
  display: block;
  color: black;
  color: var(--font1);
  padding: 0.5em;
  padding-right: 0.8em;
  cursor: pointer;
}

.sidebar.closed {
  width: 33px;
  min-width: unset;
  pointer-events: none;
}

.sidebar.closed .sidebar-toggle {
  pointer-events: all;
}

.sidebar.closed footer {
  opacity: 0;
}

.sidebar.closed > .sidebar-toggle {
  justify-content: flex-start;
}

.sidebar.closed #sidebar-toggler {
  transform: rotate(180deg);
}

.sidebar.closed > .navbar {
  opacity: 0;
}

/*sidebar END*/

/*navbar START*/

nav.navbar {
  line-height: 1.6;
  transition: opacity 0.3s;
  overscroll-behavior: contain;
}

.navdivide {
  height: 1px;
  background-color: #60656f;
  background-color: var(--nav-divide);
  /* background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1), rgba(0,0,0,0)); */
  box-sizing: border-box;
  margin: 0.3em 0;
}

.navitem {
  font-size: 0.98em;
  font-weight: 350;
  text-decoration: none;
  display: block;
  height: 2em;
  padding: 0.1em;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  border-left: 0.27rem solid transparent;
  padding-left: 1.3em;
  padding-right: 1em;
  white-space: nowrap;
}

.navitem > span {
  font-size: 1.03em;
  color: black;
  color: var(--font-1);
}

.navitem > i,
.navitem > svg {
  width: 1.5rem;
  /* min-width: 1.5rem; */
  text-align: center;
  font-size: 1.3em;
  margin-right: 0.75rem;
  color: #475994;
  color: var(--font-3);
}

.navitem.head {
  cursor: initial;
  margin-top: 1.6em;
  padding-left: 1em;
  font-weight: 450;
}

.navitem:not(.head):hover {
  background-color: #3f61d0;
  background-color: var(--accent-1);
}

.navitem:not(.head):hover > span {
  color: #f7f7f7;
  color: var(--contrast-font1);
}

.navitem:not(.head):hover > i,
.navitem:not(.head):hover > svg {
  color: #e4e4e4;
  color: var(--contrast-font2);
}

.navitem.no-icon {
  padding-left: 1.3em;
}

.router-link-exact-active.navitem {
  background-color: #3f61d0;
  background-color: var(--accent-1);
  border-left-color: #a359ce;
  border-left-color: var(--accent-2);
}

.router-link-exact-active.navitem > span {
  color: #f7f7f7;
  color: var(--contrast-font1);
}

/*navbar END*/

/* project START */
.project {
  max-width: 700px;
}

.project > div {
  padding: 0.5em;
}

.projectheader {
  margin: 0.5em 0;
  margin-bottom: 1.3em;
  max-width: 630px;
  clear: both;
}

.projectheader .upper h2 {
  margin: 0;
}

.projectheader .upper {
  display: flex;
  align-items: center;
  align-self: baseline;
  margin-bottom: 0.8em;
}

.projectheader .lower {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projectbody p {
  line-height: 2;
}

.projectbody {
  background-color: var(--bg-1);
}

.projectimage {
  width: 100%;
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding:1em 0;
}

.projectimage > img {
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.12);
  box-sizing: border-box;
  width: 100%;
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

/* footer START */
footer {
  transition: opacity 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  color: var(--font-1);
  font-weight: 350;
  padding: 0.5em 0;
  letter-spacing: 0.01em;
  padding: 1.5em 0;
  font-size: 0.95em;
  margin-top: auto;
  width: 100%;
  white-space: nowrap;
}

footer button {
  all: unset;
  padding: 0.3em;
  border: 1px solid rgb(0, 0, 0, 0.6);
  border-radius: 0.3em;
  font-size: 0.9em;
  margin: 0.3em;
  margin-left: 0.8em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
footer button {
  color: #717171;
}

footer button.dark {
  color: rgba(255, 255, 86, 0.9);
}

footer div.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* footer END */

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
  .sidebar {
    position: absolute;
    min-width: unset;
    font-size: 0.95em;
    height: 100%;
  }

  .content {
    margin-left: 33px;
  }

  .projectheader .upper {
    flex-direction: column;
    align-items: flex-start;
  }
  .tryhere {
    margin: 0;
    margin-top: 0.9em;
    font-size: 0.9em;
  }
}

@media screen and (max-height: 600px) {
  .navbar {
    overflow: auto;
  }

  .navitem {
    font-size: 0.9em;
    padding: 1px;
    padding-left: 1.3em;
  }

  .navitem-no-icon {
    padding-left: 1em;
  }

  .navitem.head {
    margin-top: 1em;
  }

  footer {
    padding: 1.1em 0;
  }
}

/*media queries END*/
</style>
