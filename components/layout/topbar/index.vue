<template>
  <div class="topbar-container">
    <div class="topbar">
      <TopbarHome />
      <Navigation />
      <ThemeChanger />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Topbar"
});
</script>

<style lang="scss">
.topbar-container {
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  width: 100%;
  z-index: 10;
  pointer-events: none;
  align-items: center;
  height: 55px;
}

.topbar {
  display: flex;
  opacity: 0.99;
  padding: 0 1.8em;
  max-width: 1400px;
  flex: 1 1 auto;
  & div {
    height: 48px;
    display: flex;
    align-items: center;
  }
}

.nav-link {
  height: 1.1em;
  pointer-events: auto;
  font-weight: 400;
  border: none;
  padding: 0 0.5em;
  height: 100%;
  font-size: 0.85em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--nav-link-color);
  background: none;
  font-weight: 450;

  span {
    color: inherit;
  }

  &:hover {
    color: var(--nav-link-hover-color);
  }

  &.nuxt-link-exact-active {
    // text-decoration: underline;
  }
}

@media screen and (max-width: 700px) {
  .topbar {
    padding: 0 1em;
  }
}
</style>
