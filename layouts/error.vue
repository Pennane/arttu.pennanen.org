<template>
  <div>
    <BackgroundBubbles />
    <header>
      <h1>¯\_(ツ)_/¯</h1>
      <p class="lead" v-if="error.statusCode === 404">
        Page not found. Return back
        <NuxtLink to="/">home</NuxtLink>.
      </p>
      <p class="lead" v-else>An error occurred</p>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["error"],
  layout: "default",
  head() {
    return {
      title: "404 | Arttu Pennanen",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Page not found"
        }
      ]
    };
  }
});
</script>

<style scoped lang="scss">
h1 {
  font-size: 3.2em;
  margin-bottom: 0.5em;
  margin-top: 0;
}
</style>
