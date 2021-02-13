<template>
  <div class="bubbles" :key="componentKey">
    <div
      v-for="index in this.realAmount()"
      :key="index"
      class="bubble"
      :style="{
        top: randomFromRange(0, 60) + '%',
        left: randomFromRange(0, 70) + '%',
        animationDelay: getDelay(index),
        animationDuration: duration
      }"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      componentKey: 0,
      timeout: null,
      currentAmount: 0,
      duration: 35 + "s"
    };
  },
  methods: {
    getAmount(width) {
      return Math.floor((width / 100) * 1.1) + 8;
    },
    randomFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getDelay(i) {
      return -30 * i * (2 * Math.random()) + "s";
    },
    forceRerender() {
      this.componentKey += 1;
    },
    realAmount() {
      if (process.browser) {
        let amount = this.getAmount(window.innerWidth);
        amount = amount > 100 ? 100 : amount;
        this.currentAmount = amount;
        return amount;
      }
      return 0;
    },
    onResize(e) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        let amount = this.getAmount(window.innerWidth);
        if (Math.abs(this.currentAmount - amount) > 10) {
          this.forceRerender();
        }
      }, 400);
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.onResize);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("resize", this.onResize);
    }
  }
});
</script>

<style scoped lang="scss">
.bubbles {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;

  .bubble {
    position: absolute;
    animation: bubble-animation;
    background-color: rgb(0, 0, 0);
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
  }
}

@keyframes bubble-animation {
  0% {
    transform: scale(0);
    opacity: 0.3;
  }

  50% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
