<template>
  <div id="shopcart">

    <!-- header -->
    <shopcart-header></shopcart-header>

    <!-- 推荐 -->
    <recommend :dataRecommend="dataRecommend"></recommend>
  </div>
</template>

<script>
  import shopcartHeader from '../../components/shopcartheader/shopcartheader';
  import recommend from '../../components/recommend/recommend';
  import homeData from '../../service/mockdata/home';

  export default{
    data() {
      return {
        dataRecommend: homeData.recommend,
      }
    },
    components: {
      shopcartHeader,
      recommend
    }
  };
</script>

<style>

</style>
