<template>
  <footer id="footer" :class="{ hidden: page404 }">
    <div class="wrapper">
      <span>© Arttu Pennanen {{ currentYear }}</span>
      <span>
        <a href="https://github.com/Pennane">Github</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  computed: {
    page404() {
      return document.querySelector('.page404')
    },
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  position: relative;
  z-index: 2;
  padding: 6em 20%;
  padding-bottom: 7.1em;
  color: var(--font-1);
  margin-top: auto !important;
  background-color: var(--bg-1);
  font-size: 0.9em;
}

footer::before,
footer::after {
  background-color: inherit;
  position: absolute;
  z-index: -1;
  display: block;
  height: 100%;
  width: 50%;
  content: '';
  margin-top: -2.2em;
  top: 0;
}

footer::before {
  left: 0;
  transform: skewY(3deg) scale(1);
}

footer::after {
  right: 0;
  transform: skewY(-3deg) scale(1);
}

footer div.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer span {
  text-decoration: none;
  margin: 0.5em;
  color: var(--font-1);
}

.footerBg-2::before,
.footerBg-2::after,
.footerBg-2 {
  background-color: var(--bg-2);
}

.footerBg-3::before,
.footerBg-3::after,
.footerBg-3 {
  background-color: var(--bg-3);
}

.footerBg-4::before,
.footerBg-4::after,
.footerBg-4 {
  background-color: var(--bg-4);
}

.footerBg-5::before,
.footerBg-5::after,
.footerBg-5 {
  background-color: var(--bg-5);
}

.hidden {
  display: none;
}

@media screen and (max-width: 1000px) {
  footer {
    padding: 3em 20%;
    padding-bottom: 6em;
  }
}
</style>
