<template>
  <div id="mm">
    <!--头部-->
    <mmheader></mmheader>

    <!-- 切换tab -->
    <tab-menu :tabMenuData="tabMenuData" @currentIndex="getChildIndex"></tab-menu>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 0" style="background:green">1111</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 1" style="background:red">2222</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 2" style="background:burlywood">3333</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 3" style="background:green">444</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 4" style="background:red">555</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 5" style="background:burlywood">666</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 6" style="background:green">7777</div>
    </transition>

    <transition name="movex">
      <div class="tab-content" v-show="currentIndex === 7" style="background:burlywood">888</div>
    </transition>

  </div>
</template>

<script>
    import mmheader from '../../components/mmheader/mmheader';
    import tabMenu from '../../components/mmtabmenu/mmtabmenu';

    import tabMenuData from '../../service/mockdata/mm';

    export default{
      data() {
        return {
          tabMenuData: tabMenuData.tabMenu,
          currentIndex: 0
        }
      },
      methods: {
        /* 处理子组件mmtabmenu.vue的请求 */
        getChildIndex(index) {
          this.currentIndex = index;
        }
      },
      components: {
        mmheader,
        tabMenu
      }
    };
</script>

<style>
  #mm{
    position:relative;
    height:100vh;
  }

  .tab-content{
    position: absolute;
    top:69px;
    bottom:50px;
    width:100%;
    background:red;
    transform:translate3d(0,0,0);
    &.movex-enter,&.movex-leave-active{
      transition:all 0.2s linear;
    }
    &.movex-enter,&.movex-leave-active{
      transform:translate3d(100%,0,0);
    }

  }
</style>
