

        
 <template>
  <transition appear appear-active-class="fade-enter-active">
    <div class="background-gradient">
      <img class="background-gradient-img" v-lazy="backgroundImageSrc" />
    </div>
  </transition>
</template>

<script>
import simpleParallax from 'simple-parallax-js'

export default {
  name: 'BackgroundGradient',
  data() {
    return {
      backgroundImageSrc: require('@/assets/images/epic-gradient-lowest.png')
    }
  },
  mounted: () => {
    return;
    let image = document.querySelector('.background-gradient-img')
    if (!image) return
    new simpleParallax(image, {
      transition: 'cubic-bezier(0, 0, 0, 1)',
      delay: 0,
      scale: 1.7,
      overflow: true,
      orientation: 'up',
      breakpoint: 0
    })
  }
}
</script>

<style scoped>
.background-gradient {
  width: 100%;
  position: absolute;
  left: 0;
  pointer-events: none;
  z-index: -1;
  will-change: opacity, filter;
  filter: blur(20px);
  transition: filter 3s, opacity 3.2s ease;
  -webkit-transition: -webkit-filter 2s linear;
}

.background-gradient-img {
  margin-top: calc(5em + 3vw);
  width: 100%;
  object-position: bottom;
  object-fit: cover;
  opacity: 0;
  transition: opacity 3.2s ease;
}
 

.background-gradient-img[lazy='loaded'] {
  opacity: 1;
}

.fade-enter-active {
  animation: enter 3.2s ease;
}

@keyframes enter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes backgroundImageFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes backgroundImageFadeLight {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes backgroundImageFadeDark {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>