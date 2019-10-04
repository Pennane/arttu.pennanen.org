<template>
    <div class="topbar">
        <div class="topbrandimg">
          <router-link to="/">
          <img class="brand" :src="require('@/assets/icons/icon_white.svg')" alt />
          </router-link>
        </div>
        <div class="localization-bar">
          <LocaleChanger />
        </div>
      </div>
</template>

<script>
import LocaleChanger from '@/components/LocaleChanger'
 
export default {
  name: 'PageTopbar',
  components: {
      LocaleChanger
  }
}
</script>

<style scoped>
.topbar {
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  background-color: var(--bg-2);
  justify-content: space-between;
}

.topbrandimg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.7em;
  height: 4.7em;
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

</style>