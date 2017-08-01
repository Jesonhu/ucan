<template>
    <div class="goods-detail-wrap" v-if="dataFromData !== null">

      <history-header :title="title" :currentTab="currentTab" @currentTabFn="currentTabFn"></history-header>

      <transition name="move">
      <!-- tab1内容 -->
        <div class="goods-detail-body" v-show="currentTab === 0" :key="0">
          <div class="img-list"><img :src="dataFromData.cover" alt="" class="img"></div>
          <div class="body-main-text">
            <h2 class="text-title">{{dataFromData.name}}</h2>
            <div class="desc"></div>
            <div class="price-main">
              <div class="price-left">
                <span class="price-slide">￥</span>
                <div class="price">{{dataFromData.price}}</div>
                <span class="price-slide">.00</span>
              </div>
              <div class="controll">
                <!--<div class="main" v-show="isShowCartControll">-->
                  <!--<span class="decrease" @click="changeCount(-1)">-</span>-->
                  <!--<input type="text" class="count" v-model="count">-->
                  <!--<span class="add" @click="changeCount(1)">+</span>-->
                <!--</div>-->
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

      <!-- 选购商品 -->
      <div class="selected-goods-wrap"
       :class="{'is-active': isShowCartControll}">
        <!--<div class="bg-wrap"></div>-->
        <div class="main-bd">
          <div class="goods-pro bottom-1px">
            <div class="img-wrap"
             :style="{backgroundImage:'url('+ dataFromData.cover +')'}"></div>
            <div class="info">
              <div class="info-bd">
                <p class="price">价格:<span>￥{{totalPrice}}</span></p>
                <p class="quantity">库存:{{dataFromData.quantity}}</p>
                <p class="info-txt">已选:{{dataFromData.title}}</p>
              </div>
            </div>
          </div>
          <section class="goods-bd">
            <h5 class="title">选择</h5>
            <ul class="list bottom-1px clearfix">
              <li class="item" v-for="(item,index) in dataFromData.typeLists"
               @click="selectedType(index)"
               :class="{'is-active': currentType == index}">
                {{item.title}}
              </li>
            </ul>
            <div class="shop-controller">
              <span class="title">数量</span>
              <div class="controll-bar-wrap">
                <i class="controll-btn reduce" @click="changeCount(-1)"></i>
                <input type="number" class="count-inp" v-model="dataFromData.count">
                <i class="controll-btn add" @click="changeCount(1)"></i>
              </div>
            </div>
          </section>
          <div class="footer">
            <div class="add-cart" @click="goBuy">立即购买</div>
            <div class="to-buy" @click="addShopCart">加入购物车</div>
          </div>
          <i class="remove fa fa-close" @click="isShowCartControll = false"></i>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import historyHeader from '../../components/historyheader/historyheader.vue';
  import productData from '../../service/mockdata/home';
  import star from '../../components/star/star';
  import { mapState } from 'vuex'
  import { MessageBox } from 'mint-ui'

  let that;
  export default{
    data() {
      return {
        title: this.$route.params.page,
        id: '', // 获取路由传递过来的参数:page

        dataFromData: null, // 这个商品的数据 目前使用的数据
        isShowCartControll: false,
        count: 0,
        score: 0,

        currentTab: 0,
        currentType: -1
      };
    },
    created() {
      // 请求获取数据
      let that = this;
    },
    mounted() {
      const queryId = this.$route.query.id
      // ajax获取当前商品详情
      this.$http.get(`${this.host.product.detail}/${queryId}`).then((res) => {
        this.dataFromData = res.data.data;
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

      /* 点击加入购物车按钮 */
      addCart() {
        if (this.isLogin) {
          this.isShowCartControll = true;
          this.count = 1;
          this.isShowCartController = true
          Vue.set(this.dataFromData, 'count', 1);
//          this.$store.dispatch('addShopCart', this.productDetail);
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

      /* 选择商品数量添加或减少 */
      changeCount(action) {
        const index = this.$store.state.shopCart.selectedGoods.length - 1; // 当前商品在购物车的索引值
        if (action > 0) { // 点击了+
          this.dataFromData.count++;
        } else { // 点击了-
          this.dataFromData.count--;
          if (this.dataFromData.count <=0 ) {
            this.count = 0;
            this.isShowCartControll = false;
            return;
          }
        };
      },

      /* vuex更新购物车里面商品的数量 */
      updateShopCart(action, index) {
        this.$store.dispatch({ // <-- 提交购物车更改，使导航徽章数量变化
          type: 'updateShopCart',
          change: this.productDetail,
          action: action,
          index: index
        });
      },

      // 选择商品套餐类型
      selectedType(_index) {
        Vue.set(this.dataFromData, 'slectedType', true)
        this.dataFromData.price = this.dataFromData.typeLists[_index].price
        this.dataFromData.quantity = this.dataFromData.typeLists[_index].quantity
        this.dataFromData.title = this.dataFromData.typeLists[_index].title
        this.currentType = _index
      },

      // 点击底部加入购物车
      addShopCart() {
        this.$store.dispatch('updateShopCart', this.dataFromData)
        this.isShowCartControll = false
      },
      // 点击立即购买
      goBuy() {

      },

      // 检查当前商品是否已经被加入了购物车
      // 也可以不检查，当添加添加到购物车的时候统一检查
      isAddedShopCart(_id) {
        function isSame(current, index, _array) {
            return current.id === _id
        }
        if ( this.shopCartData.length > 0 ) {
            return this.shopCartData.some(isSame)
        }
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
        isLogin: state => !!state.user.localUserInfo.loginStatus,
        shopCartData: state => state.shopCart.selectedGoods
      }),
      totalPrice() {
          return this.dataFromData.count * this.dataFromData.price
      }
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

  .selected-goods-wrap{
    z-index: 100;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    height:100vh;
    visibility: hidden;
    transition: all 0.3s linear;
    background:rgba(0,0,0,.5);
    .bg-wrap{
      z-index:99;
      position: relative;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.5);
    }
    .main-bd{
      z-index: 1000;
      position: absolute;
      bottom:0;
      width:100%;
      height:70vh;
      transform: translateY(70vh);
      background:#fff;
      transition: 0.2s transform linear;
      .remove{
        position:absolute;
        top:-21px;
        right:5px;
        display:block;
        width:20px;
        height:20px;
        text-align: center;
        line-height: 19px;
        border:1px solid rgba(255,255,255,.5);
        border-radius:50%;
        color:#fff;
        font-size:12px;
      }
      .goods-pro{
        display: flex;
        padding: 0 5px;
        font-size:0.6rem;
        .img-wrap{
          position: relative;
          top:-10px;
          width:4.86rem;
          height:4.86rem;
          flex: 0 0 4.86rem;
          border-radius:5px;
          background-color:#fff;
          background-repeat: no-repeat;
          background-position: center;
          background-size:100%;
        }
        .info{
          display:flex;
          flex:1;
          padding:.5rem;
          align-items: center;
          .price{
            & > * {
              font-size:16px;
              color:#f23030;
            }
          }
        }
      }
      .goods-bd{
        .title{
          text-indent: 20px;
          text-align: left;
        }
        .list{
          padding:10px;
        }
        .item{
          float:left;
          display:inline-block;
          padding:5px 10px;
          font-size:.5rem;
          margin-bottom:5px;
          &.is-active{
            color:#fff;
            background-color:$themColor;
          }
        }

        .shop-controller{
          display:flex;
          flex-wrap: nowrap;
          align-items: center;
          padding-right:20px;
          justify-content: space-between;
          .controll-bar-wrap{
            display:flex;
            flex-wrap: nowrap;
            width:100px;
            .controll-btn{
              position: relative;
              flex:0 0 20px;
              height:20px;
              text-align: center;
              line-height: 20px;
              border:1px solid rgba(0,0,0,.5);
              border-radius:50%;
              &:before{
                content:'';
                position: absolute;
                display:block;
                top:50%;
                left:15%;
                width:70%;
                height:2px;
                margin-top:-1px;
                background:rgba(0,0,0,.5);
              }
              &.add:after{
                content:'';
                position: absolute;
                display:block;
                top:50%;
                left:15%;
                width:70%;
                height:2px;
                margin-top:-1px;
                background:rgba(0,0,0,.5);
                transform:rotate(-90deg);
              }
              &.is-active{
                border-color:$themColor;
              }
            }
            .count-inp{
              width:40px;
              text-align: center;
            }
          }
        }
      }

      .footer{
        position: absolute;
        left:0;
        bottom:0;
        width:100%;
        display: flex;
        text-align: center;
        font-size:.8rem;
        & > *{
          flex:1;
          text-align: center;
          height:1.75rem;
          line-height: 1.75rem;
          color:#fff;
          background: lighten($themColor, 10%);
        }
        & > :first-child{
          background: lighten($themColor, 20%);
          border-right:1px solid #fff;
        }
      }
    }
    &.is-active{
      visibility: visible;
      .main-bd{
        transform: translateY(0);
      }
    }
  }
</style>
