<template>
  <a class="tryhere" :href="link">
      {{ text }}
  </a>
</template>

<script>
export default {
  name: 'FindHereButton',
  props: {
      text: {
          type: String,
          default: "Find Here!"
      },
      link: String
  }
}
</script>