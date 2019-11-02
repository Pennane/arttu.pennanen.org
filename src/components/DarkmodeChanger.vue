<template>
  <button @click="toggleDarkMode()" :class="{dark:darkmode}">
    <font-awesome-icon :icon="[darkmode ?'fas':'far','lightbulb']" />
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
      localStorage.darkmode = bool
      this.$store.commit('toggleDarkmode')
    }
  }
}
</script>

<style scoped>
  button {
  background-color: transparent;
  padding: 0.3em;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 0.3em;
  font-size: 0.9em;
  margin: 0.3em;
  margin-left: 0.8em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
}
footer button {
  color: #717171;
}

footer button.dark {
  color: rgba(255, 255, 86, 0.9);
}

</style>