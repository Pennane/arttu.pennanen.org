<template>
  <a class="tryhere" :href="link">{{ text }}</a>
</template>

<script>
export default {
  name: 'FindHereButton',
  props: {
    text: {
      type: String,
      default: 'Find Here!'
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tryhere {
  -webkit-appearance: none;
  text-decoration: none;
  padding: 0.8em 1.5em;
  background: linear-gradient(to right, #2a4dea, #4864fe);
  border-radius: 1.3em;
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.3);
  min-width: 75px;
  text-align: center;
  display: block;
  margin-left: 2em;
  white-space: nowrap;
}

.tryhere:hover {
  filter: brightness(0.9);
}

.tryhere:active {
  transform: translateY(1px);
  filter: saturate(110%) brightness(0.7);
}

@media screen and (max-width: 700px) {
  .tryhere {
    margin: 0.6em 0 0.2em 0;
    font-size: 0.9em;
  }
}
</style>
