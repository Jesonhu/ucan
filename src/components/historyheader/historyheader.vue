<template>
    <div class="history-header-wrap">
      <div class="header-prev" @click="$router.go(-1)">返回</div>
      <div class="header-title">
        <div class="title-tab">商品</div>
        <div class="title-tab">详情</div>
        <div class="title-tab">评价</div>
      </div>
      <div class="header-next">...</div>
    </div>
</template>

<script>
    export default{
        props: ['title'],
        data() {
            return {

            };
        }
    };
</script>

<style lang="scss">
  $basic_hei: 39px;

  .history-header-wrap{
    display:flex;
    flex-flow: row nowrap;
    width:100%;
    height: $basic_hei;
    line-height: $basic_hei;
    color:#000;
    font-size: 12px;

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
    }

    .header-next{
      @extend .header-prev;
    }
  }
</style>
