<template>
  <div>
    <!-- header -->
    <div class="header s1" :class="{'addBg':addBg}">
      <div class="logo"></div>
      <div class="search-wrap">
        <em class="search-icon"></em>
        <form action="" class="top-search">
          <input type="text" maxlength="20" autocomplete="off" placeholder="5.4超级单品日 爆款神价格">
        </form>
      </div>
      <div class="login">登录</div>
    </div>

    <!-- swiper -->
    <!--<div class="swiper-wrap" ref="swiperWrap">
      <mt-swipe :auto="4000" class="swiper-list">
        <mt-swipe-item v-for="(item,index) in dataSwiper" class="swiper-item" :key="index">
          <a href="">
            <img :src="item.url" alt="" ref="swiperImg" class="swiper-img"/>
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>-->
    <v-banner
     v-if="dataSwiper.length > 0"
     ref="swiperWrap"
     :swiper="dataSwiper"></v-banner>

    <!--nav-->
    <mt-swipe style="height:130px;" :auto="0" :continuous="false" class="nav-swiper" v-if="dataFloot.length > 0">
      <mt-swipe-item>
        <nav>
          <a href="" v-for="item in dataFloot">
            <img :src="item.src" alt="">
            <span>{{item.name}}</span>
          </a>
        </nav>
      </mt-swipe-item>
      <mt-swipe-item>
        <nav>
          <a href="" v-for="item in dataFloot">
            <img :src="item.src" alt="">
            <span>22{{item.name}}</span>
          </a>
        </nav>
      </mt-swipe-item>
    </mt-swipe>


    <!-- 快报 -->
    <div class="exprss-new-wrap"
     v-if="dataExpressNews.length > 0">
      <div class="new-con">
        <a href="" class="con-left">
          <img src="https://st.360buyimg.com/m/images/index/jd-news-tit.png" alt="">
        </a>
        <div class="con-main">
          <ul class="list" id="scrollTopList">
            <li class="item" v-for="item in dataExpressNews">
              <a href="" class="ellipsis">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="con-more">
          <a href="" class="left1pxBorder">更多</a>
        </div>
      </div>
    </div>

    <!-- 京东秒杀 -->
    <div class="seckill-wrap"
     v-if="dataSeckill.length > 0">
      <div class="seckill-title">
        <a href="" class="title-time">
          <img src="https://m.360buyimg.com/mobilecms/jfs/t3451/307/73678054/7807/dd9134d/57fdff2eNb7cd186f.png" alt="">
          <span class="time-start">12点场</span>
          <div class="time-timing">
            <span id="secskill-hour">00</span>:
            <span id="secskill-min">01</span>:
            <span id="secskill-sec">03</span>
          </div>
        </a>
        <a href="" class="title-more">
          秒杀给你更好的
          <em class="more-icon"></em>
        </a>
      </div>
      <div class="seckill-con" ref="seckillWrapper">
        <ul class="" ref="seckillList">
          <li class="item" v-for="item in dataSeckill">
            <div class="con-img right1pxBorder">
              <img :src="item.cover" alt="">
            </div>
            <div class="con-price">
              <p class="price-now">
                <span class="currency">￥</span>
                <span class="price">{{item.price}}</span>
              </p>
              <p class="price-odd">￥{{item.oldprice}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 发现好货 -->
    <div class="find-goods-wrap top1pxBorder"
     v-if="dataGraphicItem.length > 0">
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
    <div class="loveLife-wrap"
     v-if="dataLoveFife.length > 0">
      <div class="loveLife-title">
        <img src="https://st.360buyimg.com/m/images/index/floor-tit.png" alt="" class="title__bg">
        <p class="title__img">
          <img src="https://m.360buyimg.com/mobilecms/jfs/t2878/152/3484829401/8909/e1cf0ca/578de36bNae7bb54a.png!q70.jpg" alt="">
        </p>
      </div>
      <div class="loveLife-con">
        <ul class="list">
          <li class="item top1pxBorder" v-for="(item,index) in dataLoveFife"
              :class="[index<=3?'two':'four',(index+1)%2==0?'left1pxBorder':'',index===6?'left1pxBorder':'']">
            <a href="">
              <div class="item-title">
                <h2 class="title">{{item.title}}</h2>
                <p class="detail ellipsis">{{item.desc}}</p>
              </div>
              <div class="item-con">
                <img :src="item.cover" alt="">
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 楼层banner图片 -->
    <div class="floor-swiper-wrap" style="height:100px;"
     v-if="dataFloorSwiper.length > 0">
      <mt-swipe :auto="4000" class="list floor-banner-list">
        <mt-swipe-item class="item" v-for="(item,index) in dataFloorSwiper" :key="index">
          <a href="">
            <img :src="item.url" alt="" class="floor-banner-img">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="feature-wrap floor"
     v-if="dataFeature.length > 0">
      <div class="floor-title floor-title-img">
        <img src="https://st.360buyimg.com/m/images/index/floor-tit.png" alt="" class="floor-title-bgimg">
        <p class="title-img-con">
          <img src="https://m.360buyimg.com/mobilecms/jfs/t2617/85/3472523842/8761/d9d50d92/578de6d1N9e38b8e5.png!q70.jpg" alt="" class="title-img">
        </p>
      </div>
      <div class="feature-body">
        <ul class="feature-list">
          <li class="feature-item floor-item"
              v-for="(item,index) in dataFeature"
              :class="[index==0 || index==3 ?'col-2':'col-4']"
          >
            <a href="">
            <div class="item-title">
              <h2 class="title ellipsis">{{item.title}}</h2>
              <p class="desc ellipsis">{{item.desc}}</p>
            </div>
            <div class="item-body">
              <img :src="item.cover" alt="" class="item-body-img">
            </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 推荐 -->
    <recommend :dataRecommend="dataRecommend"
     v-if="dataRecommend.length > 0"></recommend>
    <div style="height:50px;"></div>

  </div>


</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  import homeData from '../../service/mockdata/home';
  import axios from 'axios';
  import BScroll from 'better-scroll';
  import header from '../../components/header/head';
  import recommend from '../../components/recommend/recommend';
  import $ from 'jquery';
  import banner from 'components/swiper/swiper'
  import countDown from '../../plugins/countdown'

  const ERR_OK = 0;
  let that;
  export default {
    data() {
      return {
        /* 获取api数据 */
        dataSwiper: [],  // 轮播大图
        dataFloot: [], // 10大金刚
        dataExpressNews: [], // 快报
        dataSeckill: [],
        dataGraphicItem: homeData.seckill.graphicItem,
        dataLoveFife : [],
        dataFeature: [],
        dataFloorSwiper: [],
        dataRecommend: [],

        screenWidth: document.body.clientWidth,
        topSwiperImgHei: 100,
        addBg: false
      };
    },
    created() {
      that = this
      setTimeout(() => {
        countDown() // => 倒计时函数开启
      }, 1000)
    },
    watch: {
      /* 秒杀监控图片变化 */
      /*'dataSeckill'() {
        this.$nextTick( () => {
            this._initSeckillScroll;
            this._initSeckillPics();
          }
        )
      },*/
      screenWidth(val) {
          this.$nextTick(() => {
            that._calculateSwiperHei();
          })
      }
    },
    mounted() {
      window.onscroll = function(ev) {
        let scrollHei = this.scrollY;
        const imgHei = that.topSwiperImgHei;

        // console.log(imgHei +','+ scrollHei);
        if (scrollHei >= imgHei) {
          that.addBg = true;
        } else {
          that.addBg = false;
        }
      };

      /* banner大图图片 */
      axios.get(this.host.index.banner)
        .then((res) => {
          if (res.status === 200) {
            this.dataSwiper = res.data.data;
            this.$nextTick(() => {
              this._calculateSwiperHei(); // <--
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });

      /* 10大金刚 */
      axios.get(this.host.index.nav).then((res) => {
        if (res.status === 200) {
          this.dataFloot = res.data.data;
        }
      }).catch((err) => {
        console.log(err);
      });

      /* 快报 */
      axios.get(this.host.index.topNews).then((res) => {
        if (res.status === 200) {
          this.dataExpressNews = res.data.data;
          this.$nextTick(() => {
            this._autoScrollTop(); // <--
          });
        }
      }).catch((err) => {
        console.log(err)
      });

      /* 秒杀图片 */
      axios.get(this.host.index.seckill).then((res) => {
        if (res.status === 200) {
            this.dataSeckill = res.data.data;
            this.$nextTick(() => {
              this._initSeckillScroll; // <--
              this._initSeckillPics(); // <--
            });
        }
      }).catch((err) => {
        console.log(err)
      });

      /* 爱生活 */
      axios.get(this.host.index.life).then((res) => {
        if (res.status === 200) {
            this.dataLoveFife = res.data.data;
        }
      }).catch((err) => {
        console.log(err);
      });

      /* 楼层banner */
      axios.get(this.host.index.featureBanner).then((res) => {
        if (res.status === 200) {
            this.dataFloorSwiper = res.data.data;
        }
      }).catch((err) => {
        console.log(err);
      });

      /* 购特色 */
      axios.get(this.host.index.featureList).then((res) => {
        if (res.status === 200) {
            this.dataFeature = res.data.data;
        }
      }).catch((err) => {
        console.log(err);
      });

      /* 为您推荐 */
      axios.get(this.host.index.recommend).then((res) => {
        if (res.status === 200) {
            this.dataRecommend = res.data.data;
        }
      }).catch((err) => {
        console.log(err);
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
          this.seckillScroll.refresh();
        }
      },
      /* 秒杀图片容器宽度计算 */
      _initSeckillPics() {
        if (this.dataSeckill) {
          const picWidth = 108;
          const width = picWidth * this.dataSeckill.length;

          this.$refs.seckillList.style.width = width + 'px';
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.seckillWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
              this.picScroll.refresh();
          }
        }
      },

      /* 轮播高度计算 */
      _calculateSwiperHei() {
//        let $imgHei = $('.swiper-img').height() || 137;
//        let $swiperWrap = $('.swiper-wrap');
//        let $floorBannerImgHei = $('.floor-banner-img').height() > 0 ? $('.floor-banner-img').height() : '77px';
//        let $swiperFloorBannerWrap = $('.floor-banner-list');
//
//        this.topSwiperImgHei = $imgHei;
//        $swiperWrap.css('height',$imgHei); // wiperImgHei = $imgHei;
//
//        $swiperFloorBannerWrap.css('height',$floorBannerImgHei);
      },

      /* 倒计时 */
      _seckillTime() {
        var endTime = new Date();
        endTime.setFullYear(2017);
        endTime.setMonth(4); // 月份从0开始
        endTime.setDate(15);
        endTime.setHours(15);
        endTime.setMinutes(38);
        endTime.setSeconds(0);
        var endTimer = endTime.getTime();//获取结束时间
        //console.log(endTimer);

        var secskill_hour = document.getElementById("secskill-hour"),
            secskill_min = document.getElementById("secskill-min"),
            secskill_sec = document.getElementById("secskill-sec"),
            nowTime, secs, hour, leaveSec, min, sec, str;

        // 时间换算
        function changeTime(time,obj1,obj2,obj3){
          nowTime = new Date();
          secs = (time - nowTime.getTime())/1000; // 秒

          if (secs > 0) // 满足计时条件，计时
          {
            hour =  Math.floor(secs / 3600); // 换算为时
            leaveSec = secs % 3600; // 换算小时后剩下秒钟
            min = Math.floor(leaveSec / 60); // 换算为分
            sec = Math.floor(leaveSec % 60); // 换算为秒

            obj1.innerHTML = addZero(hour,2);
            obj2.innerHTML = addZero(min,2);
            obj3.innerHTML = addZero(sec,2);
          } else { // 不满足计时条件
            clearInterval(timer);
          }
        }
        var timer = setInterval(function(){
          changeTime(endTimer, secskill_hour, secskill_min, secskill_sec);
        },1000);
        changeTime(endTimer, secskill_hour, secskill_min, secskill_sec);

        // 补零功能
        function addZero(time,n){
          str = '' + time;
          while (str.length < n)
          {
            str = "0" + time;
          }
          return str;
        }
      },

      /* 秒杀文字向上滚动 */
      _autoScrollTop() {
        let oList = document.getElementById('scrollTopList'),
            index = 0,
            length = oList.children.length,
            hei = oList.children[0].clientHeight,
            timer;

        auto();

        function auto() {
            timer = setInterval(function() {
              if (index < length-1) {
                index ++;
                //  oList.style.marginTop = -index * hei + 'px';
                that.moveFn( oList, {
                    marginTop: (-index * hei) + 'px'
                }, 500);
              } else {
                index = 0;
                oList.style.marginTop = `0px`;
                return index;
              }
            }, 2000);
        };
        oList.addEventListener('mouseenter', function() {
           clearInterval(timer);
        });
        oList.addEventListener('mouseleave', function() {
           auto();
        });

        function getStyle(obj, arr) {
          if(obj.currentStyle){
            return obj.currentStyle[arr];    //针对ie
          } else {
            return document.defaultView.getComputedStyle(obj, null)[arr];
          }
        };
      },
      moveFn(obj, attrs, time, callback) {
        window.requestAnimationFrame = window.requestAnimationFrame || function (a){return setTimeout(a,1000/60)};
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

        let startVal = {},
            endVal = {},
            initTime = new Date(); // 保存初始时间

        for (let key in attrs) {
            startVal[key] = parseFloat( getStyle(obj, key) ); // <--
            endVal[key] = parseFloat( attrs[key] ); // 讲目标转换为数字
        };
        move();
        function move() {
          let prop = ( new Date() - initTime ) / time; // 单元时间
          prop >= 1 ? prop = 1 : window.requestAnimationFrame(move); // <--
          for (let key in attrs) {
              if ( key === 'opacity' ) {
                  let o = startVal[key] + prop * (endVal[key] - startVal[key]);
                  obj.style[key] = o;
                  obj.style.filter = "alpha(opacity="+ 100*o +")";
              } else {
                  obj.style[key] = startVal[key] + prop * (endVal[key] - startVal[key]) + 'px';
              }
          };
          if (prop === 1) {
              callback && callback.call(obj);
          }
        };

        function getStyle(obj, attr) {
          return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
        }
      }
    },
    components: {
      Swipe,
      SwipeItem,
      vHeader: header,
      vBanner: banner,
      recommend
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../style/scss/mixin";

  /* header */
  .header{
    &.addBg{
      background:rgba(228,57,60,1);
    }
    z-index: 999;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    flex-flow: row nowrap;
    height: 39px;
    width:100%;
    background-color:rgba(255,255,255,.0);

    .logo{
      width:39px;
      height:39px;
      background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAB7UlEQVRIicXXT4hNYRjH8c+dblHUTVG6mtEkUSJ/J1MjG2ahiIWNtRILFigLK6WUkShSipWNFbEwKZqysDDyJxYjlMY0RU0jU5e4Y/Gek3dOM+fWzL1zfnXq+T3ved/zPe973nOeUxru7pGjo7ge+R14lsTr8WaGfj/xAyMYwgs8xau8i5XzGuegxclRxVYcSvIfhJu7iYlsp7YWwcyk1biM99iTbWzmzJzFoyQuYRlWYCN6E5BUHXiI07jUCpjPGMxp345z2J34EvowhlvM7zI9F2boBCaj/DV0zjdMqqs4E/mFOF8UDGF5Xkb+IJYXBVPHxciXsb8oGHiAX5HfWSTMhKlv8HVFwsDHKK4WDTMWxZWiYaaoaJglUTxeNMyqKB5pBFNpIcgibIj8u0YwC1oIszcz/kAjmI6M/9YkkDahfEj1B/cawWyL4ppQJjRDp7A58ncxmgdzQKhzUz3B7yaAHMeFyNeEwmzarV3GEdzJ5G/MEaIL/bgiFFapjklmvCwsRQUrsUmYkWpmoPvChy1PndgS+aVoF3ZML9Zkzq/jJG6nidJwd8+kfA1gn/DrESvvV6WRvuAwHsfJvGdmVHjQdk0DMlsNCWXn2iwI/wvyGr7jE14LVX4//s7ignWMCyXC1wRgUNgAb/M6/gPrElp1gukJzAAAAABJRU5ErkJggg==") no-repeat;
      background-size:18px 13px;
      background-position: center;
    }

    .search-wrap{
      flex:1;
      position: relative;
      padding:5px;
      .search-icon{
        display:block;
        position:absolute;
        top:13px;
        left:10px;
        width:12px;
        height:12px;
        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB/0lEQVRIiaXVTUhVQRjG8d+1Mm2TRWALoXLRh4i1yPbRIoNw0SJwGS1KKSqLCgJpU1BBughKaJ2LwEUGfe7aFQR9aUEUVOSuDyIuWlKLM2PT6VzJex848M4z5/3PzHvOzJSGh4dV0DL0YAc6sBLT+IDXuIURfK4EWFjgNeAIjqMp11eP9eHZiTO4gEGU86C6XHs1HuFsAbhITWGAhyG3IrwFD9CeeOPoR1tYUUOI+0NfVHvIbSmCN2A06SyjT1brQUxgKjwTwevAQdl3iJMbRWMefhidIZ5GNy5jJr/URDO4JKt9HKAzsGbhy3EySTqK+3NA87onK1PUicBUJ/vdloaOF2HG89WVkCuweiJ8e/LSVXOXopJmQm5UV4RvSsw7VYCjbifxxghvTsw3NcDT3OYIn0rMXzXA093+M8InE7O1BviqJJ6M8FeJ2VUDfGsSP4nw9CPuxYIqwCX0Ju27ET6Cr8Fsx/4q4H3+nEnfcT3CP+Fc8uJFbJsHeDPOJ+2hwJw9W4bwLMT1GMM+/x7JqUqynTiGJcF7LjuCpfAyduFjaDfKtvRTHMI6LMJirJXV9zGuyW6oqBZZieqhlLvm1uCGv8/0ajSO7vyy32ILTuHLf0C+Kd7VbRgoqmlZds214gBu4h1+yHbz++D1yq62DThWNJl8WWrRCpzGHrzE7t8cqmerthhqyQAAAABJRU5ErkJggg==") no-repeat right center;
        background-size:12px 12px;
      }
      .top-search{
        height:100%;
        input{
          display:block;
          width:100%;
          height:100%;
          border:1px solid #eee;
          border-radius:15px;
          text-indent: 20px;
        }
      }
    }

    .login{
      width:39px;
      height:39px;
      font-size:12px;
      line-height: 39px;
      text-align: center;
      color:#fff;
    }
  }

  /* 轮播 */
  .swiper-wrap{
    position:relative;
    width:100%;
    min-height:143.109px;
    overflow:hidden;
    z-index:1;
    /*margin-top:40px;*/
    .swiper-list{

    }
    .swiper-item{
      z-index:1;
      /*float:left;*/
    }
    img{
      display:block;
      width:100%;
      overflow:hidden;
    }
  }

  $floorBgColor: #F3F3F3;
  /* 顶部导航 */
  .nav-swiper{
    overflow: hidden;
    position:relative;
    // &:before{
    //   content: '';
    //   position:absolute;
    //   bottom:-20px;
    //   left:0;
    //   display:block;
    //   width:100%;
    //   height:20px;
    //   background-image:url(../../images/hu-top1.png);
    //   background-size:100% 100%;
    //   background-color:red;
    // }
    .mint-swipe-indicators{
      bottom:0;
      background:#eee;
      &.is-active{
        background:#000;
      }
    }
  }
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
        overflow: hidden;
        .list{
          position:relative;
          width:95%;
          height:100%;
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
          display:block;
          width:30px;
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
