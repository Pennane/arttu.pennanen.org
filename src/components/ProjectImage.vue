<template>
  <div :class="{projectimagecontainer: true, preview: preview }">
    <div v-if="video" :class="{video: true, projectimage: true, preview: preview }">
      <video autoplay loop muted playsinline>
        <source :src="src" type="video/mp4" />
      </video>
    </div>
    <div v-else :class="{projectimage: true, preview: preview }">
      <img :alt="alt" v-lazy="src" />
    </div>
    <span class="caption" v-if="caption && !preview">{{caption}}</span>
  </div>
</template>

<script>
export default {
  name: 'ProjectImage',
  props: {
    alt: {
      type: String,
      default: ''
    },
    src: {
      type: String
    },
    preview: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String
    }
  },
  computed: {
    video() {
      return this.src.endsWith('mp4')
    }
  }
}
</script>

<style scoped>
.projectimagecontainer {
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.12);
  margin-top: 2.5em;
}

.projectimagecontainer.preview {
  margin-top: 0;
}

.projectimage {
  width: 100%;
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-2);
  flex-direction: column;
}

.projectimage.preview {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(170, 170, 170, 0.1);
}

.projectimage > img, .projectimage > video {
  max-width: 500px;
  box-sizing: border-box;
  width: 100%;
  transition: opacity 0.3s;
  object-fit: contain;
  object-position: center;
  max-height: 400px;
}

.projectimage > img[lazy='loading'] {
  opacity: 0;
}

.projectimage.preview > img, .projectimage.preview > video {
  max-width: initial;
  width: 100%;
  height: 300px;
  max-height: 30vh;
  transform: scale(1.03);
  object-position: top;
  object-fit: cover;
}

.caption {
  z-index: 2;
  color: var(--font-1);
  padding: 0.4em 1em 0.3em 1em;
  box-sizing: border-box;
  width: 100%;
  background: var(--bg-2);
  text-align: center;
  font-weight: 300;
  font-size: 1em;
}
</style>