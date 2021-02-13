<template>
  <footer>
    <span>© Arttu Pennanen {{ currentYear }}</span>
    <span>
      <a href="https://github.com/Pennane">Github</a>
    </span>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
});
</script>

<style scoped lang="scss">
$footer-bg: white;

%pseudo-block {
  background-color: $footer-bg;
  position: absolute;
  z-index: -1;
  display: block;
  height: 100%;
  width: 50%;
  content: "";
  margin-top: -2.2em;
  top: 0;
}

footer {
  background-color: $footer-bg;
  position: relative;
  padding: 3em 20% 5em;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  font-size: 0.85em;

  span {
    margin: 0.6em;
  }

  &:before {
    @extend %pseudo-block;
    left: 0;
    transform: skewY(3deg) scale(1);
  }

  &:after {
    @extend %pseudo-block;
    right: 0;
    transform: skewY(-3deg) scale(1);
  }
}
</style>
