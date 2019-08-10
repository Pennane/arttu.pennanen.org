<template>
  <footer id="footer">
    <div class="wrapper">
      <span>© 2019 etc.</span>
      <button v-on:click="toggleDarkMode()" :class="{dark:darkmode}">
        <font-awesome-icon :icon="[darkmode ?'fas':'far','lightbulb']" ></font-awesome-icon>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
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