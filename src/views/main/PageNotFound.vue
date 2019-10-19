<template>
  <div class="page404">
    <AnimatedBackgroundBubbles />
    <div class="header">
      <div class="headerwrap">
        <h1>404 not found</h1>
        <span class="shrug">¯\_(ツ)_/¯</span>

        <p>
          Back to
          <router-link class="homelink" to="/">home</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import AnimatedBackgroundBubbles from '@/components/AnimatedBackgroundBubbles.vue'

export default {
  name: 'PageNotFound',
  components: {
    AnimatedBackgroundBubbles: AnimatedBackgroundBubbles
  },
  metaInfo: {
    title: "404 Not Found"
  }
}
</script>

<style scoped>
.header {
  max-width: 100%;
  padding: 2em;
}

.headerwrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: initial;
  text-align: center;
}

.page404 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
}

h1 {
  font-size: 4em;
  padding: 0;
  margin: 0;
}

.shrug {
  font-size: 3em;
  font-weight: 500;
  letter-spacing: -0.01em;
  padding: 0;
  margin: 0;
}

p {
  font-size: 20px;
  padding: 0;
  margin: .5rem 0;
}

.homelink {
  text-decoration: none;
  color: #4361c5;
  color: var(--link-color);
  font-weight: 550;
  text-decoration: none;
  position: relative;
}

.homelink:hover {
  color: var(--link-hover)
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