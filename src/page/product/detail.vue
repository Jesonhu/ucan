<template>
    <div class="goods-detail-wrap" v-if="productDetail !== null">

      <history-header :title="title" :currentTab="currentTab" @currentTabFn="currentTabFn"></history-header>

      <transition name="move">
      <!-- tab1内容 -->
        <div class="goods-detail-body" v-show="currentTab === 0" :key="0">
          <div class="img-list"><img :src="productDetail.cover" alt="" class="img"></div>
          <div class="body-main-text">
            <h2 class="text-title">{{productDetail.name}}</h2>
            <div class="desc"></div>
            <div class="price-main">
              <div class="price-left">
                <span class="price-slide">￥</span>
                <div class="price">{{productDetail.price}}</div>
                <span class="price-slide">.00</span>
              </div>
              <div class="controll">
                <div class="main" v-show="isShowCartControll">
                  <span class="decrease" @click="changeCount(-1)">-</span>
                  <input type="text" class="count" v-model="count">
                  <span class="add" @click="changeCount(1)">+</span>
                </div>
                <div class="add-cart" @click="addCart" v-show="!isShowCartControll">加入购物车</div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- tab2内容 -->
      <transition name="move">
        <div class="goods-detail-body" v-show="currentTab === 1" :key="1">
          <h2>商品详情页面</h2>
        </div>
      </transition>

      <!-- tab3内容 -->
      <transition name="move">
        <div class="goods-detail-body" v-show="currentTab === 2" :key="2">
          <h2>商品评价页面</h2>
          <star :size="48" :score="score"></star>
        </div>
      </transition>

    </div>
</template>

<script>
  import Vue from 'vue';
  import historyHeader from '../../components/historyheader/historyheader.vue';
  import productData from '../../service/mockdata/home';
  import star from '../../components/star/star';
  import axios from 'axios';
  import { mapState } from 'vuex'
  import { MessageBox } from 'mint-ui'

  let that;
  export default{
    data() {
      return {
        title: this.$route.params.page,
        id: '', // 获取路由传递过来的参数:page

        productDetail: null, // 保存当前产品详情（来源于vuex或者数据库）
        dataFromData: null, // 数据库里的这条数据
        productDataDetail: null, // 数据库获取商品详情
        isShowCartControll: false,
        count: 0,
        score: 0,

        currentTab: 0
      };
    },
    created() {
      // 请求获取数据
      let that = this;
    },
    mounted() {
      const params = this.$route.params; // 获取传递过来的参数
      const pattern = /\d+/g;
//      this.id = Number( params.page.match(pattern)[0] ); // 只匹配xxx.html xxx部分
      const queryId = this.$route.query.id
      axios.get(`${this.host.product.detail}/${queryId}`).then((res) => {
        this.dataFromData = res.data.data;
        this.$nextTick(() => {
          this._initData();
        })
      }).catch((err) => {
        console.log(err);
      })
    },
    methods: {
      /* 页面初始化显示 */
      _initData() {

        /* 数据来自模拟数据即数据库 */
        const dataFromDateBase = () => {
//          this.dataFromData.forEach((item) => {
//            if (item.id === this.id) {
//              this.productDetail = item;
//              this.score = this.productDetail.score;
//            }
//          });
          this.productDetail = this.dataFromData
        };

        /* 详情页数据获取 */
        const getData = () => {
          const storeStateSelectedGoods = this.$store.state.shopCart.selectedGoods

          if (storeStateSelectedGoods.length) { // vuex购物车里有数据
            storeStateSelectedGoods.forEach((item) => {
              if ( item.id === this.id ) {
                this.isShowCartControll = true;
                this.productDetail = item;  // 数据来自vuex
                this.count = this.productDetail.count;
                this.score = this.productDetail.score;
              } else {
                dataFromDateBase(); // 数据来自数据库
              }
            });
          } else {
            dataFromDateBase(); // 数据来自数据库
          }
        };

        getData();
      },
      /* 处理header点击后的效果 */
      currentTabFn: function(index) {
        this.currentTab = index;
      },
      /* 点击添加到购物车 */
      addCart() {
        if (this.isLogin) {
          this.isShowCartControll = true;
          this.count = 1;
          Vue.set(this.productDetail, 'count', 1);
          this.$store.dispatch('addShopCart', this.productDetail);
        } else {
          MessageBox.confirm('您暂未登录,请登录!', '友情提示').then(() => {
//            this.toLoginPage() // mint-ui有时这里有个坑，直接编程式导航不能跳转
            this.$router.push({path: '/login'})
          }).catch(function () {
            // catch 点击确定也会走
          })
        }
      },
      toLoginPage () {
        this.$router.push({path: '/login'})
      },
      /* 购物车里商品数量添加或减少 */
      changeCount(action) {
        const index = this.$store.state.shopCart.selectedGoods.length - 1; // 当前商品在购物车的索引值
        if (action > 0) { // 点击了+
          this.productDetail.count++;
        } else { // 点击了-
          this.productDetail.count--;
          if (this.productDetail.count <=0 ) {
            this.count = 0;
            this.isShowCartControll = false;
            this.updateShopCart(0, index);
            return;
          }
        };
        this.count = this.productDetail.count;
        this.updateShopCart(1, index); // <--
      },
      /* vuex更新购物车里面商品的数量 */
      updateShopCart(action, index) {
        this.$store.dispatch({ // <-- 提交购物车更改，使导航徽章数量变化
          type: 'updateShopCart',
          change: this.productDetail,
          action: action,
          index: index
        });
      }
    },
    /* 如果添加keep-alive可以使用该方法
    activated() {
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
    },
    */
    // 模板内容显示之前
    beforeRouteEnter(to, from, next) {
      // console.log(arguments);

      next();
    },
    computed: {
      ...mapState({
        isLogin: state => !!state.user.localUserInfo.loginStatus
      })
    },
    components: {
      historyHeader,
      star
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
    .controll{
      display:inline-block;
      padding:0;
      padding-right:5px;
    }
    .controll .main{
      font-size: 0;
    }
    .controll span{
      display:inline-block;
      padding: 3px 5px;
      border:1px solid #919497;
      font-size: 14px;
    }
    .controll .count{
      display:inline-block;
      width:50px;
      height: 27px;
      padding: 3px 5px;
      margin:0 3px;
      border:1px solid #919497;
      text-align: center;
    }
    .add-cart{
      padding:3px 5px;
      border:1px solid #333;
      border-radius:3px;
      font-size: 14px;
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
