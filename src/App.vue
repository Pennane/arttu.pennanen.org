<template>
  <div id="app">
    <div class="page-wrapper">
      <div class="topbar">
        <div class="topbrandimg">
          <img class="brand" src="./assets/icons/icon_white.svg" alt />
        </div>
      </div>
      <div class="page-divider">
        <sidebar />
        <content class="content">
          <main id="content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </main>
          <pageFooter />
        </content>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    sidebar: Sidebar,
    pageFooter: Footer
  }
}
</script>

<style lang="css">
@import './assets/fonts/inter/inter.css';

#app {
  font-family: 'Inter', sans-serif;
  height: 100%;
  width: 100%;
}
</style>
