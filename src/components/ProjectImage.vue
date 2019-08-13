<template>
  <div class="projectimage">
    <img :alt="alt" :src="src" />
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
  padding: 1em 0;
}

.projectimage > img {
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.12);
  box-sizing: border-box;
  width: 100%;
}
</style>