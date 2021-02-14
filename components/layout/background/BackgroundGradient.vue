<template>
  <keep-alive>
    <div class="background-gradient">
      <transition name="fade">
        <img
          @load="setAnimationDisplayed"
          v-show="showImage"
          src="~/assets/images/gradient-300.png"
          alt="background gradient  "
          width="300"
          height="300"
        />
      </transition>
    </div>
  </keep-alive>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "BackgroundGradient",
  computed: {
    showImage() {
      return this.$store.state.animations.index;
    }
  },
  methods: {
    ...mapMutations({
      setAnimationDisplayed: "animations/index"
    })
  },
  head() {
    return {
      link: [
        {
          rel: "preload",
          as: "image",
          href: require("~/assets/images/gradient-300.png")
        }
      ]
    };
  }
});
</script>

<style scoped lang="scss">
.background-gradient {
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  user-select: none;
  transform: translate(-50%, -50%) scaleX(1.2);
  img {
    // max-width: 700px;
    max-width: 300px;
    filter: blur(14px) contrast(1.12) saturate(0.8);
  }
}

.fade-enter-active {
  transition: opacity 7s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}
</style>
