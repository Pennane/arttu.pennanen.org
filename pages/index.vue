<template>
  <div class="home">
    <header>
      <BackgroundGradient />
      <h1>Welcome</h1>
    </header>

    <section style="margin-top:2.6em">
      <!-- <h2>About</h2> -->
      <p>
        I'm studying and creating web-based things. Currently, my favourite
        technologies to work with are <em>Typescript</em>, <em>Node</em> and
        <em>Next.js</em>.
      </p>
      <p>
        When I am not coding I'm most likely tinkering around with photography,
        hi-fi or coffee.
      </p>
    </section>
    <section>
      <h3>Find me elsewhere</h3>
      <ul>
        <li>
          <a href="https://github.com/pennane" target="_blank" rel="noreferrer"
            >Github</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arttu-pennanen"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn</a
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BackgroundGradient from "~/components/layout/background/BackgroundGradient.vue";

export default Vue.extend({
  components: { BackgroundGradient }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  position: relative;
  z-index: 3;
  margin-bottom: 4.2em;
}

h1 {
  z-index: 2;
  color: var(--contrast-title-color);
}

h2 {
  font-size: 1.5rem;
}

a {
  color: inherit;
}

li {
  padding-bottom: 0.5em;
}
</style>
