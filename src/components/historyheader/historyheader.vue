<template>
    <div class="history-header-wrap">
      <div class="header-prev" @click="$router.go(-1)">返回</div>
      <div class="header-title">
        <div class="title-tab" :class="{'is-active': selfCurrentTab===0}" @click="toggleTab(0)">商品</div>
        <div class="title-tab" :class="{'is-active': selfCurrentTab===1}" @click="toggleTab(1)">详情</div>
        <div class="title-tab" :class="{'is-active': selfCurrentTab===2}" @click="toggleTab(2)">评价</div>
      </div>
      <div class="header-next">...</div>
    </div>
</template>

<script>
    export default{
        props: ['title','currentTab'],
        data() {
            return {
              selfCurrentTab : this.currentTab // 避免直接修改prop
            };
        },
        methods: {
          toggleTab(index) {
            this.selfCurrentTab = index;
            this.$emit('currentTabFn', index);
          }
        }
    };
</script>

<style lang="scss">
  @import "../../style/scss/mixin";

  $basic_hei: 39px;

  .history-header-wrap{
    display:flex;
    flex-flow: row nowrap;
    width:100%;
    height: $basic_hei;
    line-height: $basic_hei;
    color:#000;
    font-size: 12px;
    @include bottom-1px-border;

    .header-prev{
      flex: 0 0 35px;
      text-align: center;
      font-size:inherit;
    }

    .header-title{
      flex:1;
      display: flex;
      padding:0 55px;
      flex-flow: row nowrap;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
    }

    .title-tab{
      flex:1;
      position:relative;
      z-index: 50;

      &.is-active:after{
        content:'';
        position: absolute;
        left:0;
        bottom:0px;
        z-index: 51;
        display:block;
        width:100%;
        height:2px;
        background:#000;
      }
    }

    .header-next{
      @extend .header-prev;
    }
  }
</style>
