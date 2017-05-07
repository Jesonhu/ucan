<template>
  <div>
    <!-- header -->
    <v-header></v-header>

    <!-- swiper -->
    <div class="swiper-wrap">
      <ul class="swiper-list">
        <li v-for="(item,index) in dataSwiper" class="swiper-item">
          <a href="">
            <img :src="item.image" alt="" />
          </a>
        </li>
      </ul>
    </div>

    <!--nav-->
    <nav>
      <a href="" v-for="item in dataFloot">
        <img :src="item.image" alt="">
        <span>{{item.text}}</span>
      </a>
    </nav>

    <!-- 快报 -->
    <div class="exprss-new-wrap">
      <div class="new-con">
        <a href="" class="con-left">
          <img :src="dataExpressNews.image" alt="">
        </a>
        <div class="con-main">
          <ul class="list">
            <li class="item" v-for="item in dataExpressNews.list">
              <a href="" class="ellipsis">{{item.text}}</a>
            </li>
          </ul>
        </div>
        <div class="con-more">
          <a href="" class="left1pxBorder">更多</a>
        </div>
      </div>
    </div>

    <!-- 京东秒杀 -->
    <div class="seckill-wrap">
      <div class="seckill-title">
        <a href="" class="title-time">
          <img :src="dataSeckill.titleImg" alt="">
          <span class="time-start">{{dataSeckill.startTime}}</span>
          <div class="time-timing">
            <span>00</span>:
            <span>00</span>:
            <span>00</span>
          </div>
        </a>
        <a href="" class="title-more">
          {{dataSeckill.titleText}}
          <em class="more-icon"></em>
        </a>
      </div>
      <div class="seckill-con" ref="seckillWrapper">
        <ul class="" ref="seckillList">
          <li class="item" v-for="item in dataSeckill.list">
            <div class="con-img right1pxBorder">
              <img :src="item.image" alt="">
            </div>
            <div class="con-price">
              <p class="price-now">
                <span class="currency">￥</span>
                <span class="price">{{item.now}}</span>
              </p>
              <p class="price-odd">￥{{item.old}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 发现好货 -->
    <div class="find-goods-wrap top1pxBorder">
      <ul class="list">
        <li class="item " v-for="(item,index) in dataGraphicItem"
            :class="[index === 0?'first':'',index>0?'left1pxBorder':'']">
          <a href="">
            <div class="text-wrap">
              <h2 class="title">{{item.title}}</h2>
              <p class="detail ellipsis">{{item.desc}}</p>
            </div>
            <div class="img-wrap">
              <img :src="item.spaceImg" alt="">
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!-- 爱生活 -->
    <div class="loveLife-wrap">
      <div class="loveLife-title">
        <img :src="dataLoveFife.titleImg" alt="" class="title__bg">
        <p class="title__img">
          <img :src="dataLoveFife.tetleTextImg" alt="">
        </p>
      </div>
      <div class="loveLife-con">
        <ul class="list">
          <li class="item top1pxBorder" v-for="(item,index) in dataLoveFife.list"
              :class="[index<=3?'two':'four',(index+1)%2==0?'left1pxBorder':'',index===6?'left1pxBorder':'']">
            <a href="">
              <div class="item-title">
                <h2 class="title">{{item.title}}</h2>
                <p class="detail ellipsis">{{item.detail}}</p>
              </div>
              <div class="item-con">
                <img :src="item.img" alt="">
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 楼层banner图片 -->
    <div class="floor-swiper-wrap">
      <ul class="list">
        <li class="item" v-for="item in dataFeature.slideImg.slice(0,1)">
          <a href="">
            <img :src="item.img" alt="">
          </a>
        </li>
      </ul>
    </div>

    <div class="feature-wrap floor">
      <div class="floor-title floor-title-img">
        <img :src="dataFeature.titleImg" alt="" class="floor-title-bgimg">
        <p class="title-img-con">
          <img :src="dataFeature.titleTextImg" alt="" class="title-img">
        </p>
      </div>
      <div class="feature-body">
        <ul class="feature-list">
          <li class="feature-item floor-item"
              v-for="(item,index) in dataFeature.list"
              :class="[index==0 || index==3 ?'col-2':'col-4']"
          >
            <a href="">
            <div class="item-title">
              <h2 class="title ellipsis">{{item.title}}</h2>
              <p class="desc ellipsis">{{item.detail}}</p>
            </div>
            <div class="item-body">
              <img :src="item.img" alt="" class="item-body-img">
            </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 推荐 -->
    <recommend :dataRecommend="dataRecommend"></recommend>
    <div style="height:50px;"></div>

  </div>


</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import homeData from '../../service/mockdata/home';
  import axios from 'axios';
  import BSscroll from 'better-scroll';
  import header from '../../components/header/head';
  import recommend from '../../components/recommend/recommend';

  const ERR_OK = 0;
  let that;
  export default {
    data() {
      return {
        /* 获取api数据 */
        dataSwiper: homeData.swiper,
        dataFloot: homeData.floot.slice(0,10),
        dataExpressNews: homeData.expressNews,
        dataSeckill: homeData.seckill,
        dataGraphicItem: homeData.seckill.graphicItem,
        dataLoveFife : homeData.loveLife,
        dataFeature: homeData.feature,
        dataRecommend: homeData.recommend,

        /* 组件间传递数据 */
      };
    },
    created() {
      that = this;
    },
    watch: {
      /* 秒杀监控图片变化 */
      'dataSeckill'() {
        this.$nextTick( () => {
          this._initSeckillScroll;
          this._initSeckillPics();
        } )
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._initSeckillScroll;
        this._initSeckillPics();
      });
    },
    methods: {
      /**
       * 秒杀图片滚动
       * /
      /* 滚动框初始化 */
      _initSeckillScroll() {
        if (!this.seckillScroll) {
          this.seckillScroll = new BScroll(this.$refs.dataSeckill, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      },
      /* 秒杀图片容器宽度计算 */
      _initSeckillPics() {
        if (this.dataSeckill.list) {
          let picWidth = 108;
          let width = picWidth * this.dataSeckill.list.length;
          this.$refs.seckillList.style.width = width + 'px';
          this.$nextTick(() => {
            if (!this.picScroll) {
              this.picScroll = new BSscroll(this.$refs.seckillWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              });
            } else {
                this.picScroll.refresh();
            }
          })
        }
      }
    },
    components: {
      Swipe,
      SwipeItem,
      vHeader: header,
      recommend
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../style/scss/mixin";

  /* 轮播 */
  .swiper-wrap{
    position:relative;
    width:100%;
    overflow:hidden;
    z-index:1;
    margin-top:40px;
    .swiper-list{
      width:1000px;
    }
    .swiper-item{
      float:left;
    }
    img{
      position: absolute;
      top:0;
      left:0;
      z-index: -1;

      display:block;
      width:100%;
      overflow:hidden;
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

  $floorBgColor: #F3F3F3;
  /* 顶部导航 */
  nav{
    display:flex;
    flex-wrap:wrap;
    padding-top:10px;
    background-color:#F3F3F3;
    a{
      display:block;
      flex: 0 0 20%;
      margin-bottom:10px;
      img{
        display:block;
        width:34px;
        height:34px;
        margin:0 auto;
      }
      span{
        display:block;
        text-align: center;
        font-size: 12px;
      }
    }
  }

  /* 京东快报 */
  .exprss-new-wrap{
    background-color:$floorBgColor;
    padding-bottom:6px;
    .new-con{
      $wrapH: 30px;

      display:flex;
      position: relative;
      margin:0px 10px;
      height:$wrapH;
      border-radius:15px;
      background-color:#fff;
      .con-left{
        display:block;
        width:73px;
        height:16px;
        margin-top:7px;
        margin-left:10px;
        font-size:0;
        img{
          width:100%;
          height:100%;
        }
      }
      .con-main{
        flex:1;
        .list{
          position:relative;
          width:100%;
          height:100%;
          overflow: hidden;
          .item{
            font-size: 12px;
            a{
              display:block;
              width:100%;
              height:100%;
              line-height: $wrapH;
              text-indent: 10px;
            }
          }
        }
      }
      .con-more{
        display:flex;
        align-items:center;
        width:30px;
        font-size:12px;
        a{
          padding-left:2px;
        }
      }
    }
  }

  /* 京东秒杀 */
  .seckill-wrap{
    .seckill-title{
      display:flex;
      width:100%;
      height:34px;
      .title-time{
        display:flex;
        align-items:center;
        flex:0 0 68%;
        height:100%;
        font-size:0;
        img{
          display:inline-block;
          width:69px;
          height:27px;
        }
        .time-start{
          display:inline-block;
          font-size:12px;
          font-weight:600;
          color:#000;
          margin:0 5px;
        }
        .time-timing{
          display:inline-block;
          font-size:12px;
          span{
            padding:0 3px;
            background:#000;
            border-radius:3px;
            color:#fff;
          }
        }
      }
      .title-more{
        display:block;
        flex:0 0 32%;
        box-sizing: border-box;
        height:100%;
        padding-right:10px;
        line-height: 34px;
        font-size:12px;
        text-align: right;
        color:#F45757;
        .more-icon{
          display:inline-block;
          position:relative;
          top:2px;
          width:11px;
          height:11px;
          background:url('https://st.360buyimg.com/m/images/index/arrow_rt.png');
          background-size:11px 11px;
        }
      }
    }
    .seckill-con{
      width:100%;
      overflow:hidden;
      white-space:nowrap;
      font-size:0;
      .item{
        display:inline-block;
        /*@include wid(108.33);
        @include hei(140);*/
        width:108px;
        height:140px;
        .con-img{
          padding:0 11px;
          img{
            width:100%;
            height:auto;
          }
        }
        .con-price{
          .price-now{
            text-align: center;
            font-size:0px;
            .currency{
              color:#f23030;
              font-size:12px;
            }
            .price{
              color:#f23030;
              font-size:16px;
            }
          }
          .price-odd{
            text-align: center;
            color:#686868;
            font-size:12px;
            text-decoration: line-through;
          }
        }
      }
    }
  }

  /* 发现好货 */
  .find-goods-wrap{
    .list{
      display:flex;
      overflow: hidden;
      .item{
        box-sizing: border-box;
        padding:7px 7px 5px;
        &.first{
          flex:0 0 50%;
          .text-wrap{
            display:inline-block;
            float:left;
            width:55%;
          }
          .img-wrap{
            display:inline-block;
            width:45%;
            img{
              width:100%;
            }
          }
        }

        flex:0 0 25%;
        position:relative;
        .text-wrap{
          padding-left:10px;
          .title{
            font-size: 16px;
            line-height: 22px;
          }
          .detail{
            font-size:11px;
          }
        }
        .img-wrap{
          width:100%;
          img{
            width:100%;
          }
        }
      }
    }
  }

  /* 爱生活 */
  .loveLife-wrap{
    .loveLife-title{
      position:relative;
      width:100%;
      overflow: hidden;
      font-size: 0;
    }
    .loveLife-con{
      .list{
        display:flex;
        flex-wrap: wrap;
        .item{
          box-sizing: border-box;
          padding:7px;
          overflow:hidden;
        }
        .two{
          flex:0 0 50%;
          a{
            display:flex;
            .item-title{
              flex:0 0 45%;
            }
            .item-con{
              flex:0 0 55%;
            }
          }
        }
        .four{
          flex:0 0 25%;
        }
        /*公共样式*/
        a{
          width:100%;
          .item-title{
            overflow: hidden;
            .title{
              font-size:16px;
            }
            .detail{
              font-size:12px;
            }
          }
          .item-con{
            img{
              max-width:100%;
            }
          }
        }
      }
    }
  }

  /* 楼层滚动图片 */
  .floor-swiper-wrap{
    padding:10px;
    background-color:#ddd;
    overflow:hidden;
    .list{
      .item{
        width:100%;
        img{
          width:100%;
        }
      }
    }
  }

  /* 特色 */
  .feature-wrap {
    .feature-title{
      position:relative;
      width:100%;
      overflow:hidden;
    }
    .feature-list{
      display:flex;
      flex-wrap:wrap;
    }
    .feature-item{
      overflow:hidden;
    }
    .col-2{
      flex:0 0 50%;
      a{
        display:flex;
      }
      .item-title{
        flex: 0 0 40%;
      }
      .item-body{
        flex: 0 0 60%;
        padding: 7px 0 0 7px;
      }
    }
    .col-4{
      flex: 0 0 25%;
      .item-title{
        padding:0 0 7px 0;
      }
    }
    .item-body{
      width:100%;
      overflow:hidden;
    }
    .item-body-img{
      display:block;
      width:100%;
      height:auto;
    }
  }
</style>
