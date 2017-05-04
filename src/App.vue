<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- footer -->
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import footerGuide from 'components/footer/footGuide';

  export default {
    components: {
      footerGuide
    }
  };
</script>

<style lang="scss">
  @import "style/common";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
