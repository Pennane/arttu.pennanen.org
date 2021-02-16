<template>
  <div class="topbar--home">
    <NuxtLink class="nav-link" to="/">
      <img
        v-if="$colorMode.preference === 'dark'"
        src="~/assets/icons/icon-white-64.png"
        height="21"
        width="21"
        alt="brand icon"
      />
      <img
        v-else
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
    margin: 0;
    margin-right: 0.6em;
    transition: opacity 0.2s;
  }
}
</style>
