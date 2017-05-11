<template>
  <div class="menu-wrapper" ref="menuWrapper">
    <ul class="menu-list" ref="menuList">
      <li class="menu-item bottom-1px"
        v-for="(item, index) in dataMenuList"
        @click="selectMenu(index, $event)"
        :class="current===index?'current':''">
        <span class="item-text">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    props: {
      dataMenuList: {
        type: Array
      }
    },
    data() {
      return {
        current: 0
      }
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      /* 使用betterscroll */
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
      },

      selectMenu(index, event) {
        this.current = index;
        this.$emit('selectedIndex', index); // 发布给list.vue
        // console.log(event);
        /* let floolNum = Math.floor( (event.clientY-39) / 54);
        let scrollHei = floolNum * 39;
        console.log(scrollHei);
        if( scrollHei < 183 ){
          this.$nextTick(() => {
            this.$refs.menuList.style.transform = `translate(0px, -${scrollHei}px)`;
          })
        } else {
          return;
        } */
      }
    },
    components: {}
  };
</script>

<style lang="scss">
  .menu-wrapper{
    flex:0 0 75px;
    background:#fff;
    .menu-item{
      display:table;
      height:54px;
      width:75px;
      line-height: 14px;
      padding:0 12px;

      &.current{
        background-color:rgba(0,0,0,.1);
        color:#E4393C;
        .item-text{
          color:inherit;
        }
      }
    }
    .item-text{
      display:table-cell;
      vertical-align: middle;
      font-size: 12px;
    }
  }
</style>
