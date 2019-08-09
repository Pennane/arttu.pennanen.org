<template>
  <div class="home">
    <div class="header">
      <h1 class="h1">
        <splitchars v-bind:text="'Arttu Pennanen'" />
      </h1>
      <h2 class="h2">Web developing and else.</h2>
    </div>
    <div class="body">
      <p>Hello. Here are some of the things I've made past my time around the web.</p>
      <p>
        The site has just been ported to
        <a class="contentlink" href="https://vuejs.org/" title="vuejs.org">vue.js</a>, and I am currently in the process of redesigning everything.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed error excepturi vero, vel vitae sint accusantium et consequatur optio eveniet praesentium est nam quisquam tempora ea. Nesciunt repellendus culpa expedita.
      </p>
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
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}

.home .header {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 2.5em;
}

.home .body {
  display: flex;
  width: 100%;
  padding: 0 calc(1em + 2vw);
  box-sizing: border-box;
  max-width: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.body p {
  max-width: 550px;
  margin: 0;
  padding: 1em calc(5vw - 1em);
  background: white;
  line-height: 1.6;
}

.header > .h1 {
  font-size: 4.4em;
  text-shadow: 0px 2px #6f747d;
  color: #484848;
  line-height: 0.8;
  margin: 0;
  padding: 1.2rem 0;
}

.header > .h2 {
  font-size: 1.55em;
  color: #404350;
  font-weight: 450;
  margin: 0 0.15em;
  padding: 0;
}

.char {
  display: inline-block;
  transition: transform 0.5s ease-in;
  color: #3f61d0;
  animation: bgc ease 12s infinite;
}

.inlineletter {
  display: inline;
}

@keyframes bgc {
  50% {
    color: #4c62a9;
  }
}

.char5 {
  display: block;
}

@media screen and (max-width: 900px) {
  .char {
    font-size: calc(.25em + 5.4vw);
  }

  .header > .h1 {
    line-height: calc(0.3em + 3.7vw);
  }

  .header > .h2 {
    font-size: calc(0.8em + 1.3vw);
  }
}
</style>
