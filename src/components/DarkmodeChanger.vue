<template>
  <button
    class="darkmode-changer"
    @click="toggleDarkMode()"
    :class="{ dark: darkmode }"
  >
    <font-awesome-icon :icon="[darkmode ? 'fas' : 'far', 'lightbulb']" />
  </button>
</template>

<script>
export default {
  name: 'LocaleChanger',
  computed: {
    darkmode() {
      return this.$store.state.darkmode
    }
  },
  methods: {
    toggleDarkMode() {
      let bool = localStorage.darkmode === 'true' ? false : true
      console.log(bool)
      localStorage.darkmode = bool
      this.$store.commit('toggleDarkmode')
    }
  }
}
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  font-size: 0.9em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 3.67em;
}

.dark button {
  color: rgba(255, 255, 86, 0.9);
}
</style>
