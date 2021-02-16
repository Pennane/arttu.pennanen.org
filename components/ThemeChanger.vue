<template>
  <div class="topbar--theme-changer">
    <button
      class="theme-changer"
      @click="toggleDarkMode()"
      name="theme changer"
    >
      <font-awesome-icon
        :icon="[$colorMode.value === 'dark' ? 'far' : 'far', 'moon']"
      />
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    toggleDarkMode() {
      this.$colorMode.preference =
        this.$colorMode.value === "dark" ? "light" : "dark";
    }
  }
});
</script>

<style scoped lang="scss">
.topbar--theme-changer {
  pointer-events: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  button {
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 999px;
    position: relative;
    margin: 0;
    padding: 0;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    padding-top: 0.2em;

    .dark-mode & {
      color: #fbe126;
    }
  }
}
</style>
