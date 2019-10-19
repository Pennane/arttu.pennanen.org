

        
 <template>
  <div class="background-gradient">
    <img class="background-gradient-img" v-lazy="backgroundImageSrc" />
  </div>
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
    let image = document.querySelector('.background-gradient-img')
    if (!image) return
    new simpleParallax(image, {
      transition: 'cubic-bezier(0, 0, 0, 1)',
      delay: 0,
      scale: 2,
      overflow: true,
      orientation: 'down',
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
  width: 100%;
  object-position: bottom;
  object-fit: cover;
}

.light .background-gradient {
  transform: flip(1);
  filter: sepia(1) saturate(2) invert(1) brightness(1.4) saturate(1) blur(20px)
    contrast(0.8) brightness(1.2) blur(20px);
}

.background-gradient-img[lazy='loading'] {
  opacity: 0;
}

.light .background-gradient-img {
  animation: backgroundImageFadeLight 3s;
}

.dark .background-gradient-img {
  animation: backgroundImageFadeDark 3s;
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