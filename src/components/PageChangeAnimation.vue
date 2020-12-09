<template>
  <div
    @animationend="stopAnimation"
    :class="{
      animateIn: animateIn,
      animateOut: animateOut,
      pageChangeAnimation: true
    }"
  ></div>
</template>

<script>
export default {
  name: 'PageChangeAnimation',
  data() {
    return {
      animateIn: false,
      animateOut: false
    }
  },
  computed: {
    transitioning: function() {
      return this.$store.state.transitioning
    }
  },
  watch: {
    transitioning: function(value) {
      if (value) {
        this.startAnimationIn()
      } else {
        this.startAnimationOut()
      }
    }
  },
  methods: {
    startAnimationIn() {
      this.animateIn = true
      this.animateOut = false
    },
    startAnimationOut() {
      this.animateOut = true
    },
    stopAnimation() {
      this.animateIn = false
      this.animateOut = false
    }
  }
}
</script>

<style scoped>
.pageChangeAnimation {
  position: fixed;
  width: 100%;
  height: 0%;
  display: flex;
  z-index: 10;
  top: 0;
  left: 0;
}

.pageChangeAnimation::before {
  background-color: var(--bg-4);
  background: var(--page-change-gradient);
  position: absolute;
  z-index: -1;
  top: 100px;
  left: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(-32deg) scaleY(2);
}

.pageChangeAnimation::after {
  background-color: var(--bg-4);
  background: var(--page-change-gradient);
  position: absolute;
  z-index: -1;
  top: 100px;
  right: 0;
  display: block;
  width: 50%;
  height: 100%;
  content: '';
  transform: skewY(32deg) scaleY(2);
}

.animateIn {
  animation: animateIn 0.3s;
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.animateOut {
  animation: animateOut 0.9s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.animateOut::before {
  transform: skewY(8deg) scaleY(1.5);
}

.animateOut::after {
  transform: skewY(-8deg) scaleY(1.5);
}

@keyframes animateIn {
  0% {
    height: 0%;
    bottom: unset;
    top: 0;
  }
  100% {
    height: 100%;
    bottom: unset;
    top: 0;
  }
}
@keyframes animateOut {
  0% {
    height: 100%;
    transform: translate(0);
  }
  10% {
    height: 100%;
    transform: translate(0);
  }
  100% {
    height: 100%;
    transform: translateY(200%);
  }
}
</style>
