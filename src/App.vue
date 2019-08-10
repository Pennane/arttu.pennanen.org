<template>
  <div id="app">
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
  }
}
</script>

<style lang="css">
@import './assets/fonts/inter/inter.css';

/* colors START */
:root {
  --bg-1: #ffffff;
  --bg-2: #f4f4f4;
  --bg-3: #dedede;
  --font-1:#000000;
  --font-2: #2e2f2f;
  --font-3: #475994;
  --accent-1: #3f61d0;
  --accent-2: #a359ce;
  --selection-bg: #1351c4a6;
  --selection-color: #ffffff;
  --link-color: #475994;
  --link-hover: #607fe6
}
/* colors END*/

/* general START */

#app {
  font-family: 'Inter', sans-serif;
  height: inherit;
  width: inherit;
  overflow: hidden;
  color: var(--font-1);
  background-color: var(--bg-1)
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
  background-color: #eeeeee;
  position: fixed;
  overflow: hidden;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

#app ::selection {
  background-color: rgba(19, 81, 196, 0.65);
  color: white;
  
}

/* general END */

/*common element styling START*/
h1 {
  color: #2e2f2f;
  font-size: calc(1.3em + 0.5vw);
  font-weight: 700;
  padding: 0;
  border-radius: 0.375rem;
  padding: 0.3em;
}

footer {
  transition: all 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 350;
  padding: 0.5em 0;
  letter-spacing: 0.01em;
  padding: 1.5em 0;
  font-size: 0.95em;
  margin-top: auto;
  width: 100%;
  white-space: nowrap;
}

main {
  display: flex;
  z-index: 2;
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

/*common element styling END*/

/*multiple time use classes START*/

.contentlink {
  color: #4361c5;
  font-weight: 550;
  text-decoration: none;
  position: relative;
  text-shadow: 1px 1px #ffffff, -1px 1px #ffffff, -1px -1px #ffffff,
    1px -1px #ffffff;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
}

.contentlink:hover {
  color: #607fe6;
}

.contentlink::selection {
  text-shadow: none;
  background-color: rgba(19, 81, 196, 0.65);
  color: white;
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
    hsla(226, 79%, 64%, 1)
  );
  border-radius: 1.3em;
  color: white;

  font-weight: 700;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.3);
  margin: 0.2em 0.5em;
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

.contentbox {
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.25);
  border-radius: 0.375rem;
  background-color: white;
  padding: 0.75em;
  margin: 0.75rem;
  max-width: 500px;
  width: 90%;
}

img.brand {
  width: 1.6em;
  opacity: 0.8;
  transition: opacity 0.2s;
  filter: saturate(0) contrast(1) brightness(0.2);
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
  background: linear-gradient(to right, rgb(52, 76, 229), rgb(46, 132, 224));
  background: #f4f4f4;
}

.topbrandimg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.7em;
  height: 4.7em;
}

.content {
  background-color: #fff;
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
  background-color: #dedede;
  width: 16em;
  transition: all 0.25s ease;
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
  /* background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1), rgba(0,0,0,0)); */
  box-sizing: border-box;
  margin: 0.3em 0;
}

.navlink {
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
}

.navitem {
  font-size: 0.98em;
  color: rgba(255, 255, 255, 0.9);
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
}


.navitem > i,
.navitem > svg {
  width: 1.5rem;
  /* min-width: 1.5rem; */
  text-align: center;
  font-size: 1.3em;
  margin-right: 0.75rem;
  color: #475994;
}


.navitem.head {
  cursor: initial;
  margin-top: 1.6em;
  padding-left: 1em;
  font-weight: 450;
}

.navitem:not(.head):hover {
  background-color: #3f61d0;
}

.navitem:not(.head):hover > span {
  color: #f7f7f7;
}

.navitem:not(.head):hover > i,
.navitem:not(.head):hover > svg {
  color: #e4e4e4;
}

.navitem.no-icon {
  padding-left: 1.3em;
}

.router-link-exact-active.navitem {
  background-color: #3f61d0;
  border-left-color: #a359ce;
}

.router-link-exact-active.navitem > span {
  color: #f7f7f7;
}

/*navbar END*/

/*misc START*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.21s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/*misc END*/

/*media queries START*/

@media screen and (max-width: 1000px) {
  .sidebar {
    width: 14em;
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
