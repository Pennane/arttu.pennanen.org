<template>
  <footer id="footer">
    <div class="wrapper">
      <span>© 2019 etc.</span>
      <button @:click="toggleDarkMode()" :class="{dark:darkmode}">
        <font-awesome-icon :icon="[darkmode ?'fas':'far','lightbulb']" />
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
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
footer {
  transition: opacity 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  color: var(--font-1);
  font-weight: 350;
  padding: 0.5em 0;
  letter-spacing: 0.01em;
  padding: 1.5em 0;
  font-size: 0.95em;
  margin-top: auto;
  width: 100%;
  white-space: nowrap;
}

footer button {
  all: unset;
  padding: 0.3em;
  border: 1px solid rgb(0, 0, 0, 0.6);
  border-radius: 0.3em;
  font-size: 0.9em;
  margin: 0.3em;
  margin-left: 0.8em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
footer button {
  color: #717171;
}

footer button.dark {
  color: rgba(255, 255, 86, 0.9);
}

footer div.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-height: 600px) {
  footer {
    padding: 1.1em 0;
  }
}

</style>