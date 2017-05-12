<template>
  <div id="app">
    <transition name="fade">

     <router-view class=""></router-view>

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
    background:#fff;
  }
  .move{
    position: relative;
    width:100%;
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .router-move-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .router-move-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s linear;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
