<template>
  <div class="content-container">
    <BackgroundLines />
    <Topbar />
    <Nuxt class="main" />
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
interface LayoutData {
  transitionTimeout: null | NodeJS.Timeout;
}

import Vue from "vue";
export default Vue.extend({
  data(): LayoutData {
    return {
      transitionTimeout: null
    };
  },
  computed: {
    colorTheme() {
      return this.$colorMode.preference;
    }
  },
  watch: {
    colorTheme(val, old) {
      console.log(val, old);
      this.pushTransitionClass();
    }
  },
  methods: {
    pushTransitionClass() {
      const html = document.querySelector("html");
      if (!html) return;
      html.classList.toggle("theme-transition", true);
      if (this.transitionTimeout) {
        clearTimeout(this.transitionTimeout);
      }
      this.transitionTimeout = setTimeout(() => {
        html.classList.toggle("theme-transition", false);
      }, 500);
    }
  }
});
</script>

<style lang="scss">
$dot-color: #6a6d7b;
$bg-color: #fafafa;
$bg-size: 36px;
.content-container {
  display: flex;
  flex-direction: column;
  background-size: $bg-size $bg-size;
  min-height: 100%;
  overflow: hidden;

  .main {
    padding-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.sequential {
  animation: sequential;
  animation-duration: 0.7s;
}

@keyframes sequential {
  100% {
    opacity: 1;
  }
}
</style>
