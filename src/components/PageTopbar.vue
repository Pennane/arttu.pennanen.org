<template>
  <div class="topbar">
    <div :class="{'changepage-animation': animated, 'topbarline': true}" />
    <div class="topbarcontent">
      <div class="topbrandimg">
        <router-link to="/">
          <img class="brand" :src="require('@/assets/icons/icon_white.svg')" alt />
        </router-link>
      </div>
      <div class="localization-bar">
        <LocaleChanger />
      </div>
    </div>
  </div>
</template>

<script>
import LocaleChanger from '@/components/LocaleChanger'

export default {
  name: 'PageTopbar',
  components: {
    LocaleChanger
  },
  data: function() {
    return { animated: false }
  },
  methods: {
    scrollUp() {
      if (this.$route.path === '/') {
        window.scrollTo(0, 0)
      }
    }
  }
  /*,
  watch: {
    $route(to, from) {
      let vuethis = this
      console.log('animated', this.animated)
      vuethis.animated = true
      setTimeout(function() {
        vuethis.animated = false
      }, 1600)
    }
  }*/
}
</script>

<style scoped>
.topbar {
  display: flex;
  background-color: #f4f4f4;
  background-color: var(--bg-2);
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}

.topbarline {
  background-color: #2196f3;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2196f3),
    to(#1f79cd)
  );
  background: var(--topbar-gradient);
  height: 6px;
  /*position: fixed; */
  width: 100%;
  top: 0;
  left: 0;
}

.topbarcontent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2px;
  /*margin-top: 4px;*/
}

.topbrandimg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.7em;
  height: 4.7em;
}

.topbrandimg .router-link-exact-active {
  cursor: default;
}

img.brand {
  width: 1.6em;
  opacity: 0.8;
  transition: opacity 0.2s;
  filter: saturate(0) contrast(1) brightness(0.2);
  filter: var(--brand-filter);
}

img.brand:hover {
  filter: brightness(0);
}

span.brand {
  font-weight: 700;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 0.1em;
}

.changepage-animation {
  animation: changepage 1.6s infinite;
}

@keyframes changepage {
  0% {
    height: 6px;
    bottom: initial;
    top: 0;
    opacity: 1;
  }
  25% {
    height: 100%;
    bottom: initial;
    top: 0;
  }
  46% {
    top: initial;
    bottom: 0;
    height: 100%;
  }
  90% {
    height: 0;
    bottom: 0;
    top: initial;
    opacity: 1;
  }
  91% {
    height: 0;
    bottom: 0;
    top: initial;
    opacity: 0;
  }
  92% {
    height: 0px;
    bottom: initial;
    top: 0;
    opacity: 0;
  }
  100% {
    height: 6px;
    bottom: initial;
    top: 0;
    opacity: 1;
  }
}
</style>