<template>
  <div>
    <!-- header -->
    <v-header></v-header>

    <!-- swiper -->
    <div class="swiper-wrap">
      <ul>
        <li v-for="(item,index) in data.swiper">
          <a href="">
            <img :src="item.image" alt="" />
          </a>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import homeData from '../../service/mockdata/home';
  import axios from 'axios';
  import header from '../../components/header/head';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        data: {
          swiper: homeData.swiper,
          floot: homeData.floot
        }
      };
    },
    created() {

    },
    components: {
      Swipe,
      SwipeItem,
      vHeader:header
    }
  };
</script>

<style lang="scss" scoped>


  .swiper-wrap{
    position:relative;
    height:200px;
    width:100%;
    overflow:hidden;
    z-index:1;
    img{
      position: absolute;
      top:0;
      left:0;
      z-index: -1;
      width:100%;
    }
    .mint-swipe{
      position: relative;
      height: 200px;
      color: #fff;
      font-size: 30px;
      text-align: center;
      margin-bottom: 20px;

      .mint-swipe-items-wrap{
        overflow: hidden;
        position: relative;
        height: 100%;

        .mint-swipe-item{
          position: absolute;
          -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
          width: 100%;
          height: 100%;
          display: none;
        }
      }
    }
  }
</style>
