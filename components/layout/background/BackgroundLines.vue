<template>
  <div class="lines">
    <div class="lines--item" />
    <div class="lines--item" />
    <div class="lines--item" />
    <div class="lines--item" />
    <div class="lines--item" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BackgroundLines"
});
</script>

<style lang="scss" scoped>
.lines {
  display: flex;
  height: 100%;
  pointer-events: none;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;

  &--item {
    height: 100%;
    width: 20%;
    border-left: 1px solid var(--bg-line-color);

    &:first-child {
      border-left: none;
    }
  }
}

@media only screen and (max-width: 940px) {
  .lines {
    &--item {
      width: 25%;
      &:first-child {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 670px) {
  .lines {
    &--item {
      width: 33%;
      &:last-child {
        display: none;
      }
    }
  }
}
</style>
