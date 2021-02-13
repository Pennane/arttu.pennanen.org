<template>
  <div class="topbar--home">
    <NuxtLink class="nav-link" to="/">
      <img
        src="~/assets/icons/icon-black-64.png"
        height="21"
        width="21"
        alt="brand icon"
      />
      <span>Arttu Pennanen</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TopbarHome"
});
</script>

<style lang="scss" scoped>
.topbar--home {
  padding-right: 0.5em;
  img {
    width: 1.3rem;
    opacity: 0.8;
    transition: opacity 0.2s;
    filter: saturate(0) contrast(1) brightness(0.2);
    filter: var(--brand-filter);
    margin: 0 0.6em;
  }
}
</style>
