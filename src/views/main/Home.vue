<template>
  <div class="home">
    <div class="header">
      <h1 class="h1">
        <splitchars v-bind:text="'Arttu Pennanen'" />
      </h1>
      </div>
      <div class="body">

      <p>Hello. Here are some of the things I've made past my time around the web.</p>
    </div>
  </div>
</template>

<script>
import SplitCharacters from '@/components/SplitCharacters.vue'

export default {
  name: 'home',
  components: {
    splitchars: SplitCharacters
  }
}
</script>

<style> 
.home {
  width: 100%;
  height: 100%;;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.home .header {
  display: flex;
}

.home .body {
  display: flex;
    width: 100%;
    padding: 0 3em;
    box-sizing: border-box;
    max-width: none;
    justify-content: center;
}

.body p {
  max-width: 500px;
}

.header .h1 {
  font-size: 4em;
  text-shadow: 0px 2px #6f747d;
  color: #484848;
}
</style>
