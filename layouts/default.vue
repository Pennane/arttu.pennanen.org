<template>
  <div class="content-container">
    <BackgroundLines />
    <Topbar />
    <Nuxt class="main" />
    <!-- <Footer /> -->
  </div>
</template>

<style lang="scss">
$dot-color: #6a6d7b;
$bg-color: #fafafa;
$bg-size: 36px;
.content-container {
  display: flex;
  flex-direction: column;
  // background-image: radial-gradient($dot-color 1.2px, $bg-color 0);
  background-size: $bg-size $bg-size;
  min-height: 100%;
  overflow: hidden;

  .main {
    padding-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
