<template>
  <footer id="footer">
    <div class="wrapper">
      <span>© 2019 etc.</span>
      <!--<DarkmodeChanger />-->
    </div>
  </footer>
</template>

<script>
//import DarkmodeChanger from '@/components/DarkmodeChanger.vue'

export default {
  name: 'PageFooter',
  components: {
  //  DarkmodeChanger
  }
}
</script>

<style scoped>
footer {
  position: relative;
  z-index: 2;
  padding: 4em;
}

footer::before {
   background-color: var(--bg-2);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: '';
  transform: skewY(-3deg) scale(1);
}

footer::after {
  background-color: var(--bg-2);
  content: '';
  position: absolute;
  z-index: -1;
  bottom: -25%;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  content: '';
  overflow: hidden;
}

footer div.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>