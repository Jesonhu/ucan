<template>
  <div class="swiper-wrap">
    <swiper class="c-banner-swiper"
      :options="swiperOption"
      ref="mySwiper"
    >
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide
          v-for="item in swiper"
          :key="item"
        >
          <a href="">
              <img alt=""
               :src="item.url"
              >
          </a>
        </swiper-slide>
        <!-- 左右按钮 -->
        <!--<div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
      props: ['swiper'],
      data () {
        return {
          swiperOption: {
            notNextTick: true,
            // swiper configs 同官方api配置
            autoplay: 1500,
            // pagination: '.swiper-pagination',
            pagination: '.swiper-pagination',
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            spaceBetween: 0
          }
        }
      },
      methods: {
        getWrapHei () {
          const oWrap = this.$refs.mySwiper
          console.log(oWrap)
        }
      },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>

<style lang="scss" scoped>
  /* 青春在线 */
  .c-banner-swiper{
    height:170.29px;

    img{
      height:170.29px;
      width:100%;
    }
    .swiper-pagination-bullet{
      background:#fff;
      opacity:1;

      &.swiper-pagination-bullet-active{
        background:#000;
      }
    }
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom:0;
    text-align: right;
    border-radius:0;
  }
  .swiper-pagination-bullet{
    border-radius:0;
  }


</style>
