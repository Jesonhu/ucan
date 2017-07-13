<template>
  <nav class="m-tabBar">
    <router-link  v-for="(item,index) in footerList"
     :to="item.linkTo" class="item"
     :key="index">

      <div>
        <i class="" :class="item.fontClass" >
        </i>
        <span class="txt" >{{item.name}}</span>
      </div>
      <div class="badge-show"
       v-if="index === 3">
        <div class="badge-wrap" v-show="addShopCartGoodsNum">
          <mt-badge size="small" color="red">{{addShopCartGoodsNum}}</mt-badge>
        </div>
      </div>

    </router-link>
  </nav>
</template>

<script>
  import { Tabbar, TabItem, Badge } from 'mint-ui';
  import { mapState, mapActions } from 'vuex';

  let obj = {
    a: 1,
    b: 2
  };

  export default {
    data() {
      return  {
        footerList: [
          {
            name: '首页',
            pic: '../../images/a-home.png',
            fontClass: 'fa fa-home',
            linkTo: '/home'
          },
          {
            name: '分类',
            pic: '../../images/a-home.png',
            fontClass: 'fa fa-list-alt',
            linkTo: '/list'
          },
          {
            name: '发现',
            pic: '../../images/a-home.png',
            fontClass: 'fa fa-telegram',
            linkTo: '/mm'
          },
          {
            name: '购物车',
            pic: '../../images/a-home.png',
            fontClass: 'fa fa-shopping-cart',
            linkTo: '/shopcart'
          },
          {
            name: '我的',
            pic: '../../images/a-home.png',
            fontClass: 'fa fa-user-circle-o',
            linkTo: '/mine'
          }
        ]
      }
    },
    created() {

    },
    computed: {
//      ...mapState([ // 一般写法
//       'selectedGoods'
//      ]),
      ...mapState({ // 模块化引入
        shopCart: state => state.shopCart.selectedGoods
      }),
      addShopCartGoodsNum: function(state) {
          if (this.shopCart.length) {
              let tatalCount = 0;
              this.shopCart.forEach((item) => {
                  tatalCount += item.count;
              })
              return tatalCount;
          } else {
            return false;
          }
      }
    },
    components: {
      Badge
    }
  };
</script>

<style lang="scss" scoped>
  #common-footer{
    position: fixed;
    bottom:0;
    left:0;
    z-index: 50;
    height:50px;
    width:100%;
    border-top:1px solid #eee;
    background-color:#fff;
    box-shadow: 0 0 3px 0 rgba(155,143,143,0.6);
    overflow: hidden;
    .tab{
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      height: 100%;
      .tab-item{
        position:relative;
        flex:1;
        height: 100%;
        a{
          display:flex;
          justify-content: center;
          height:100%;
          img{
            display:block;
            height:100%;
          }
        }
      }
    }
  }

  .m-tabBar{
    height:50px!important;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;
  }
  .m-tabBar>.item.active i,
  .m-tabBar>.item.active .txt {
    color: #b4282d;
  }

  .m-tabBar {
    z-index: 99;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.30667rem;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
  }

  .m-tabBar>.item .txt {
    display: block;
    margin-top: .09333rem;
    font-size: .32rem;
    color: #666;
    line-height: 1;
  }
  .item {
    position: relative;
    text-align: center;
  }

  /* 徽章 */
  .badge-show{
    position:absolute;
    top: -2px;
    right: -26%;
    .mint-badge.is-size-small{
      display:block!important;
      width: 20px !important;
      height:20px!important;
      text-align: center;
      line-height: 20px;
      padding:0!important;
    }
  }
</style>
