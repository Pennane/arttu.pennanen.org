

        
<template>
  <div class="backgroundbubbles" :key="componentKey">
    <div
      v-for="index in this.realAmount()"
      :key="index"
      class="bubble"
      :style="{ 
          top: rnd(0,95) + '%',
          left: rnd(0,90) + '%',
          animationDelay: delay(index),
          animationDuration: duration(index)
          }"
    ></div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Backgroundlines',
  props: ['amount'],
  data() {
    return {
      componentKey: 0,
      timeout: null,
      currentAmount: 0
    }
  },
  methods: {
    getAmount(width) {
      return Math.floor((width / 100) * 3)
    },
    rnd(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    delay(i) {
      return -30 * i * (2 * Math.random()) + 's'
    },
    duration(i) {
      return 35 + 's'
    },
    forceRerender() {
      this.componentKey += 1
    },
    realAmount() {
      if (this.amount !== 'auto') return this.amount
      let amount = this.getAmount(window.innerWidth)
      amount = amount > 100 ? 100 : amount
      this.currentAmount = amount
      return amount
    },
    onResize(e) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        let amount = this.getAmount(window.innerWidth)
        if (Math.abs(this.currentAmount - amount) > 10) {
          this.forceRerender()
        }
      }, 400)
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
.backgroundbubbles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.bubble {
  position: absolute;
  animation: bubble;
  background-color: rgb(0, 0, 0);
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
}

@keyframes bubble {
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