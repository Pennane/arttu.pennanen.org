<template>
  <div class="page404">
    <AnimatedBackgroundBubbles />
    <div class="header">
      <div class="headerwrap">
        <h1 class="h1">
          <splitchars :text="'404 not found'" />
        </h1>
        <h2 class="h1">
          <splitchars :text="'\¯\\\_\(\ツ\)\_\/\¯'" />
        </h2>

        <p class="h2">
          Back to
          <router-link class="contentlink" to="/">home</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import SplitCharacters from '@/components/SplitCharacters.vue'
import AnimatedBackgroundBubbles from '@/components/AnimatedBackgroundBubbles.vue'

export default {
  name: 'PageNotFound',
  components: {
    splitchars: SplitCharacters,
    AnimatedBackgroundBubbles: AnimatedBackgroundBubbles
  }
}
</script>

<style scoped>
.header {
  max-width: 100%;
  box-sizing: border-box;
}

.headerwrap {
  align-items: center;
  background-color: initial;
}

.page404 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0;
}

h2.h1,
p.h2 {
  text-shadow: 0px 0px 20px white !important;
  text-shadow: 0px 0px 20px var(--bg-1) !important;
}

h2.h1 {
  font-size: 3.5em;
  margin: 0;
  padding: 0;
  font-weight: 500;
  letter-spacing: -0.01em;
}

p.h2 {
  margin: 1.5rem;
  font-size: 1.4em;
}

.contentlink {
  text-decoration: none;
}

@media screen and (max-width: 900px) {
  .page404 {
    font-size: calc(0.1em + 1.5vw);
  }

  .page404 p {
    font-size: 1rem;
  }
}

.home .char5 {
  display: block !important;
}
</style>