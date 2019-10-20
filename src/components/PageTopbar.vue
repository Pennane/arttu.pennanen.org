<template>
  <div class="topbar">
    <div :class="{'changepage-animation': animated, 'topbarline': true}" />
    <div class="topbarcontent">
      <div class="topbrandimg">
        <router-link to="/" class="homelink" title="home">
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
  }
}
</script>

<style scoped>
.topbar {
  display: flex;
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
  background: transparent;
  height: 6px;
  width: 100%;
  top: 0;
  left: 0;
}

.topbarcontent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2px;
  opacity: 0.99;
}

.topbrandimg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5em;
  height: 4.5em;
  padding: 0 0.2em;
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

.homelink:hover img.brand {
  filter: brightness(0);
}

span.brand {
  font-weight: 700;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 0.1em;
}

.homelink {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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