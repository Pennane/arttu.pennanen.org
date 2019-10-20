<template>
  <div :class="{dark:true}">
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
    </div>
  </div>
</template>

<script>
//import PageSidebar from '@/components/PageSidebar'
import BackgroundLines from '@/components/BackgroundLines'
import PageFooter from '@/components/PageFooter'
import PageTopbar from '@/components/PageTopbar'

export default {
  name: 'DefaultAppView',
  components: {
    //  PageSidebar,
    BackgroundLines,
    PageFooter,
    PageTopbar
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('scrollBeforeEnter')
    }
  },
  computed: {
    darkmode() {
      let darkmode = this.$store.state.darkmode && true
      //document.body.classList.toggle('dark', darkmode)
      //document.body.classList.toggle('light', !darkmode)
      return darkmode
    }
  },
  mounted: function() {
    let darkmode = true
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
  padding: 1em calc(6vw + 0.5em);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-bottom: 7em;
}

main > div {
  max-width: 760px;
}

p {
  font-weight: 300;
  color: #000;
  color: var(--font-1);
  font-size: 16px;
  max-width: 700px;
}

/*common element styling END*/

/*multiple time use classes START*/

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
  background-image: linear-gradient(
    hsla(207, 7%, 25%, 0) 0%,
    rgb(25, 31, 36) 100%
  );
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
  .sidebar {
    width: 14em;
  }

  h1:not([class]) {
    font-size: calc(1.8em + 1.2vw);
  }
}

/*media queries END*/
</style>
