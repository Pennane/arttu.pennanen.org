<template>
  <button
    class="darkmode-changer"
    @animationend="animated = false"
    @click="
      toggleDarkMode()
      animate()
    "
    name="theme changer"
    :class="{ dark: darkmode, animation: animated }"
  >
    <span class="icon">
      <font-awesome-icon :icon="[darkmode ? 'fas' : 'far', 'moon']" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
      animated: false
    }
  },
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
    },
    animate() {
      this.animated = true
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
  transform: rotate(0deg) scale(1);
  will-change: transform opacity;
}

.animation .icon {
  animation-name: icon;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}

.dark button {
  color: rgba(255, 255, 86, 0.9);
}

@keyframes icon {
  0% {
    opacity: 0;
    transform: rotate(-80deg) scale(0);
    -webkit-transform: rotate(-80deg) scale(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: rotate(0);
    -webkit-transform: rotate(0);
  }
}

@-webkit-keyframes icon {
  0% {
    opacity: 0;
    transform: rotate(-160deg) scale(0);
    -webkit-transform: rotate(-160deg) scale(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: rotate(0);
    -webkit-transform: rotate(0);
  }
}
</style>
