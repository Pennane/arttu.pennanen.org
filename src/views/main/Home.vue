<template>
  <div class="home">
    <div class="header">
      <div class="headerwrap">
        <h1 class="h1">
          <span class="char">Arttu</span>
          <span class="char">Pennanen</span>
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
export default {
  name: 'home'
}
</script>


<style>
.home {
  box-sizing: border-box;
  padding: 0;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: center;
}

.headerwrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.3em;
  margin: 1.3em;
  padding-top: 0.5em;
  background-color: white;
  background-color: var(--bg-1);
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
  background-color: white;
  background-color: var(--bg-1);
  line-height: 1.6;
}

.body p:last-child {
  margin-bottom: 2em;
}

.headerwrap > .h1 {
  font-size: 4.4em;
  text-shadow: 0px 2px #6f747d;
  color: #484848;
  color: var(--split-color1);
  line-height: 0.8;
  margin: 0;
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.01em;
}

.headerwrap > .h2 {
  font-size: 1.55em;
  color: #404350;
  color: var(--font-2);
  font-weight: 450;
  margin: 0 0.15em;
  padding: 0;
}
</style>


<style>
.home .char5 {
  display: block !important;
}

@media screen and (max-width: 900px) {
  .home .char {
    font-size: calc(0.25em + 5.4vw) !important;
  }

  .home .h1 {
    padding-top: 2vw !important;
  }

  .home .h2 {
    font-size: calc(0.8em + 1.3vw) !important;
  }

  .headerwrap {
    margin: 0 2vw !important;
    padding-bottom: 1.5em !important;
    padding-top: 0 !important;
  }

  .home .body > p {
    text-align: justify !important;
  }
}
</style>