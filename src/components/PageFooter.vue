<template>
  <footer id="footer" :class="inheritedBackgroundColor">
    <div class="wrapper">
      <span>© Arttu Pennanen {{currentYear}}</span>
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
    inheritedBackgroundColor() {
      if (
        !document.querySelector('.home') ||
        !document.querySelectorAll('.project.preview')
      ) {
        return null
      }

      let bgNumber = document.querySelectorAll('.project.preview').length % 3

      return {
        'footerBg-3': bgNumber == 1,
        'footerBg-4': bgNumber == 2,
        'footerBg-5': bgNumber == 0,
        yeet: true
      }
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
  color: black;
  margin-top: auto !important;
  background-color: hsla(225, 20%, 98%, 1);
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
  color: #555;
}

.footerBg-3::before,
.footerBg-3::after {
  background-color: var(--bg-3);
}

.footerBg-4::before,
.footerBg-4::after {
  background-color: var(--bg-4);
}

.footerBg-5::before,
.footerBg-5::after {
  background-color: var(--bg-5);
}

@media screen and (max-width: 1000px) {
  footer {
    padding: 3em 20%;
    padding-bottom: 6em;
  }
}
</style>