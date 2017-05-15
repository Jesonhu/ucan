<template>
    <div class="goods-detail-wrap">

      <history-header :title="title" :currentTab="currentTab" @currentTabFn="currentTabFn"></history-header>

      <transition name="move">
      <!-- tab1内容 -->
        <div class="goods-detail-body" v-show="currentTab === 0" :key="0">
          <div class="img-list"><img :src="productDetail.img" alt="" class="img"></div>
          <div class="body-main-text">
            <h2 class="text-title">{{productDetail.text}}</h2>
            <div class="desc"></div>
            <div class="price-main">
              <div class="price-left">
                <span class="price-slide">￥</span>
                <div class="price">{{productDetail.price}}</div>
                <span class="price-slide">.00</span>
              </div>
              <div class="notice">降价通知</div>
            </div>
          </div>
        </div>
      </transition>

      <!-- tab2内容 -->
      <div class="goods-detail-body" v-show="currentTab === 1" :key="1">
        <div class="img-list"><img :src="productDetail.img" alt="" class="img"></div>
        <div class="body-main-text">
          <h2 class="text-title">222{{productDetail.text}}</h2>
          <div class="desc"></div>
          <div class="price-main">
            <div class="price-left">
              <span class="price-slide">￥</span>
              <div class="price">{{productDetail.price}}</div>
              <span class="price-slide">.00</span>
            </div>
            <div class="notice">降价通知</div>
          </div>
        </div>
      </div>

      <!-- tab3内容 -->
      <div class="goods-detail-body" v-show="currentTab === 2" :key="2">
        <div class="img-list"><img :src="productDetail.img" alt="" class="img"></div>
        <div class="body-main-text">
          <h2 class="text-title">333{{productDetail.text}}</h2>
          <div class="desc"></div>
          <div class="price-main">
            <div class="price-left">
              <span class="price-slide">￥</span>
              <div class="price">{{productDetail.price}}</div>
              <span class="price-slide">.00</span>
            </div>
            <div class="notice">降价通知</div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import historyHeader from '../../components/historyheader/historyheader.vue';
  import productData from '../../service/mockdata/home';

  let that;
  export default{
    data() {
      return {
        title: this.$route.params.page,
        id: '', // 获取路由传递过来的参数:page

        dataProduct: [],
        productDetail: null, // 保存当前产品详情

        currentTab: 0
      };
    },
    created() {
      // 请求获取数据
      let that = this;
      this._initData();
    },
    methods: {
      _initData() {
        let params = this.$route.params; // 获取传递过来的参数
        let pattern = /\d+/g;
        this.id = Number( params.page.match(pattern)[0] ); // 只匹配xxx.html xxx部分
        productData.recommend.list.forEach((item) => {
          if (item.id === this.id) {
            this.productDetail = item;
          }
        });
      },
      /* 处理header点击后的效果 */
      currentTabFn: function(index) {
        this.currentTab = index;
      }
    },
    /*activated() {
      console.log(1);
      let params = this.$route.params; // 获取传递过来的参数
      let pattern = /\d+/g;
      this.id = Number( params.page.match(pattern)[0] ); // 只匹配xxx.html xxx部分
      console.log(this.id);
      productData.recommend.list.forEach((item) => {
        if (item.id === this.id) {
          this.productDetail = item;
        }
        console.log(this.productDetail);
      });
    },*/
    // 模板内容显示之前
    beforeRouteEnter(to, from, next) {
      // console.log(arguments);

      next();
    },
    components: {
      historyHeader
    }
  };
</script>

<style lang="scss">
  @import "../../style/scss/mixin";

  /* 参照#app relative */
  $fontSize: 12px;

  .goods-detail-body{
    @include scroll-outwrap(39px, 50px);
    background:#fff;

    .img-list{
      margin-top:10px;
      .img{
        @include response-img;
      }
    }

    .body-main-text{
      padding:10px;
    }

    .text-title{
      font-size:18px;
      @include single-line-ellipsis;
    }

    .price-main{
      display:flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding-top:5px;
    }
    .price-left{
      flex:0 0 100px;
      display:flex;
      flex-direction: row;
      align-items: flex-end;
      color:red;
      font-size:0px;
    }
    .price-slide{
      font-size: 14px;
      color:inherit;
    }
    .price{
      display:inline;
      color:inherit;
      font-size:18px;
    }
    .notice{
      padding:3px 5px;
      font-size: 12px;
      color:#686868;
      border:1px solid rgba(0,0,0,.3);
      border-radius:3px;
    }
  }


  @mixin goods--xs() {
    .goods-detail-body {
      font-size: $fontSize;
    }
  }

  @mixin goods--sm() {
    .goods-detail-body{
      font-size: 14px;
    }
  }

  @import "../../style/scss/media-queries";


</style>
