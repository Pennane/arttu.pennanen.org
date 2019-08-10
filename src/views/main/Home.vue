<template>
  <div class="home">
    <div class="header">
      <div class="headerwrap">
        <h1 class="h1">
          <splitchars v-bind:text="'Arttu Pennanen'" />
        </h1>
        <h2 class="h2">Web developing and else.</h2>
      </div>
    </div>
    <div class="body">
      <p>Hello. Here are some of the things I've made past my time around the web.</p>
      <p>
        The site has just been ported to
        <a
          class="contentlink"
          href="https://vuejs.org/"
          title="vuejs.org"
        >vue.js</a>, and I am currently in the process of redesigning everything.
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
  box-sizing: border-box;
}

.home > .header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: center;
}

.header > .headerwrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.3em;
  margin: 1.2em;
  padding-top: 0.5em;
  background-color: white;
}

.home .body {
  display: flex;
  padding: 0 calc(1em + 2vw);
  box-sizing: border-box;
  max-width: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 0 1 auto;
}

.body > p {
  max-width: 550px;
  margin: 0;
  padding: 1em calc(5vw - 1em);
  background: white;
  line-height: 1.6;
}

.body p:last-child {
  margin-bottom: 2em;
}

.headerwrap > .h1 {
  font-size: 4.4em;
  text-shadow: 0px 2px #6f747d;
  color: #484848;
  line-height: 0.8;
  margin: 0;
  padding: 1.2rem 0;
  display: block;
}

.headerwrap > .h2 {
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
    font-size: calc(0.25em + 5.4vw);
  }

  .headerwrap > .h1 {
    line-height: 6vw;
    padding-top: 2vw;
  }

  .headerwrap > .h2 {
    font-size: calc(0.8em + 1.3vw);
  }

  .home .headerwrap {
    margin: 0 2vw;
    padding-bottom: 0.8em;
    padding-top: 0;
  }

  .body > p {
    text-align: justify;
  }
}
</style>
