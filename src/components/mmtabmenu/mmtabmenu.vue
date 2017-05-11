<template>
  <div class="mmtabmenu" ref="tabMenu">
    <ul class="menu-list" ref="tabMenuList">
      <li class="menu-item"
          v-for="(item, index) in tabMenuData"
          @click="selected(index)"
          :class="current===index?'is-active':''">{{item.name}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    props: {
      tabMenuData: {
        type: Array
      }
    },
    data() {
      return {
        current: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._calculateTabWrapWidth(); // <--
      });
    },
    methods: {
      /* 点击选中 */
      selected(index) {
        this.current = index;
        this.$emit('currentIndex', index);
      },

      /* BScroll使用 */
      _calculateTabWrapWidth() {
        if (this.tabMenuData) {
          let singleTabWidth = 56;
          let totalWidth = singleTabWidth * this.tabMenuData.length + 30;
          this.$refs.tabMenuList.style.width = `${totalWidth}px`;
          this.$nextTick(() => {
            this.tabMenuBscroll = new BScroll(this.$refs.tabMenu, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          });
        }
      }
    },
    components: {}
  };
</script>

<style lang="scss">
  .mmtabmenu{
    width:100%;
    height:30px;
    overflow:hidden;

    .menu-list{
      display:flex;
      flex-wrap:nowrap;
    }
    .menu-item{
      display: inline-block;
      padding: 3px 12px;
      white-space: nowrap;
      font-size: 16px;
      color:rgba(0,0,0,.5);
      &.is-active{
        position:relative;
        z-index: 5;
        color:#E4393C;
        &:after{
          content: '';
          position:absolute;
          left:0;
          bottom:0;
          z-index: 50;
          display:block;
          width:100%;
          height:3px;
          background:inherit;
        }
      }
    }
  }
</style>
