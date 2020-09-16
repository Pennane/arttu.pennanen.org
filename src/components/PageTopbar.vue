<template>
  <div class="topbar">
    <!--<div :class="{ 'changepage-animation': animated, topbarline: true }" />-->
    <div class="topbar-content">
      <div class="topbar-home">
        <router-link to="/" class="nav-link home-link" title="home">
          <img
            class="brand"
            :src="require('@/assets/icons/icon-black.png')"
            alt
          />
          Arttu Pennanen
        </router-link>
        <router-link to="/sub" class="nav-link" title="projects">
          {{ $t('word.misc') }}
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
  }
}
</script>

<style scoped>
.topbar {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  pointer-events: none;
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.99;
  padding-top: 0.6em;
}

.topbarline {
  position: fixed;
  background: red;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.topbar-home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.2em;
  pointer-events: auto;
}

.topbar-home .router-link-exact-active {
  cursor: default;
}

img.brand {
  width: 1.3rem;
  opacity: 0.8;
  transition: opacity 0.2s;
  filter: saturate(0) contrast(1) brightness(0.2);
  filter: var(--brand-filter);
  margin: 0 0.6em;
}

.home-link:hover img.brand {
  filter: brightness(0);
}

.nav-link {
  font-weight: 400;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  color: rgb(34, 34, 34);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: rgb(34, 34, 34);
  background: none;
}

.nav-link.home-link {
  margin-right: 3.3em;
}

.localization-bar {
  pointer-events: auto;
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

@media screen and (min-width: 1800px) {
  .topbar-content {
    margin: 0 3vw;
  }
}
</style>
