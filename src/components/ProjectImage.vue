<template>
  <div>
    <div if="preview" :class="{projectimage: true, preview: preview }">
      <img :alt="alt" v-lazy="src" />
    </div>
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
      /*default: path/to/new/dafault/image/file.png */
    },
    preview: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.projectimage {
  width: 100%;
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-2);
}

.projectimage.preview {
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(170, 170, 170, 0.1);
}

.projectimage > img {
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

.projectimage.preview > img {
  max-width: initial;
  width: 100%;
  height: 300px;
  max-height: 30vh;
  transform: scale(1.03);
  object-position: top;
  object-fit: cover;
}
</style>