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
  all: unset;
  -webkit-appearance: none;
  text-decoration: none;
  padding: 0.8em 1.5em;
  background: linear-gradient(
    to right,
    hsla(226, 45%, 54%, 1),
    hsl(357, 84%, 61%)
  );
  border-radius: 1.3em;
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.3);
  min-width: 75px;
  text-align: center;
  display: block;
  margin-left: 1em;
  white-space: nowrap;
}

.tryhere:hover {
  filter: brightness(0.9);
}

.tryhere:active {
  transform: translateY(2px);
  filter: saturate(110%) brightness(0.7);
}

@media screen and (max-width: 700px) {
  .tryhere {
    margin: 0;
    margin-top: 0.9em;
    font-size: 0.9em;
  }
}
</style>

