<template>
  <div class="shopcart-header">
    <div class="header-title">购物车</div>
    <div class="header-right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    components: {}
  };
</script>

<style lang="scss">
  $hei: 39px;
  .shopcart-header{
    display:flex;
    flex-wrap:nowrap;
    height:$hei;

    .header-title{
      flex:1;
      padding-left:35px;
      text-align: center;
      font-size:20px;
      line-height: 39px;
    }

    .header-right{
      width:20px;
      height:20px;
      margin:13px 9.5px;
      background:url('https://st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12') no-repeat;
      background-size:200px 200px;
      background-position: -62px -1px;
    }
  }
</style>
