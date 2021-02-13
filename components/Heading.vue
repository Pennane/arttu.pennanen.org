<template>
  <h1>
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Heading"
});
</script>

<style scoped lang="scss">
h1 {
  color: var(--title-color);
  line-height: 0.475;
  padding: 1.2rem 0;
  font-size: 4em;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    mix-blend-mode: color-burn;
    opacity: 1;
    left: 0;
    top: 0;
    z-index: 2;
    color: #3a3a3a;
  }
}
</style>
