<template>
  <div id="shopcart" class="shopcart-page">
    <div class="shop-wrap" v-show="isLogin">
      <!-- header -->
      <shopcart-header></shopcart-header>

      <!--选购商品列表-->
      <div class="selectgood-wrap" id="selectgood-wrap" v-if="totalCount != 0">
        <ul class="list">
          <li class="item" v-for="(item, index) in shopCart" v-show="item.count">
            <div class="item-body">
              <div class="select" @click="selectedProduct(item, index)" :class="{'is-selected':item.checked}">选</div>
              <div class="img-wrap">
                <img :src="item.cover" alt="" class="img">
              </div>
              <div class="item-main">
                <p class="main-desc">{{item.name}}</p>
                <div class="main-bottom">
                  <div class="price">￥{{item.price}}</div>
                  <div class="controll">
                    <span class="decrease" @click="changeMoney(item,-1,index)">-</span>
                    <span class="num" v-model="item.count">{{item.count}}</span>
                    <span class="add" @click="changeMoney(item,1,index)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 购物车显示 -->
      <div class="shopcart-detail" v-if="totalCount != 0">
        <div class="selectall" :class="{'is-selected': checkAllFlag || isSelectAll}" @click="checkAll(!checkAllFlag)">全选</div>
        <div class="count">
          总额:
          <span class="total-price" v-show="calcTotalPrice">￥{{totalAllPrice}}</span>
        </div>
        <div class="gobuy" @click="goBuy">
          去结算
          <span class="buy-num">{{totalAllNum}}</span>
        </div>
      </div>

      <!-- 购物车被清空的时候 -->
      <div class="shopcart-empty"
       v-if="totalCount == 0">
        购物车空空如也
      </div>
    </div>

    <!-- 未登录 -->
    <div class="no-login" v-show="!isLogin">
      <v-header :hasBorder="true">
        <div class="mine-header">
          <div class="header-left"></div>
          <div class="header-title">未登录</div>
          <div class="header-right"></div>
        </div>
      </v-header>
      <div class="go-login-wrap">
        <div class="main-wrap">
          <div class="img-wrap"></div>
          <p class="text">登录后才能查看购物车</p>
          <router-link to="/login" class="link">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapActions, mapGetters } from 'vuex';
  import shopcartHeader from '../../components/shopcartheader/shopcartheader';
  import cartControll from '../../components/cartcontroll/cartcontroll';
  import { MessageBox } from 'mint-ui';
  import axios from 'axios';

  import homeData from '../../service/mockdata/home';
  import vHeader from 'components/header/hasSearch'

  let that

  export default{
    data() {
      return {
        dataRecommend: [],

        selectGoods : [], // 被选中的商品
        typeNum: -1, // 购物车商品类型的数量
        typeSlectedNum: 0, // 被选中商品的数量
        isCanBuy: true, // 推荐是否可以点击购买

        totalMoney: 0, //单商品总金额
        totalAllPrice: 0,  //选择所有商品的总金额
        totalAllNum: 0,
        checkAllFlag: false, //是否全选 存在该变量才能被监听到
        delFlag: false, //是否删除
        delIndex: ''  //保留点击删除哪个li的索引
      }
    },
    created() {
        that = this;
        if (this.isLogin) this.getData()  //如果登录了
    },
    mounted() {
      setTimeout(() => {
        this.initData()
      },300)
    },
    methods: {
      /* 点击到购物车页面后初始化方法 */
      getData() {
        this.$store.dispatch('fetchGet')
      },
      initData() {
        // 购物车里面有商品
        if (this.totalCount) {
          this.shopCart.forEach((item) => {
            if (!(typeof item.checked == 'undefined') && item.checked) {
              this.typeSlectedNum += item.count
            }
          })
          // 当购物车里的商品全部被标记为全选时，全选状态激活
          if (this.totalCount === this.typeSlectedNum) {
            this.checkAllFlag = true
          }
          this.calcTotalPrice()
        }
      },

      /* 添加或减少 */
      changeMoney: function (item, action, index) { //商品数量增加和减少
        if (action>0) { //点击了+
          item.count ++
        } else { //点击了-
          item.count --

          // 当前数量被减数到0
          // 此时要从购物车中删除该商品
          if (!item.count) {
            this.$store.dispatch({ // <-- 提交购物车更改，删除该商品
              type: 'updateShopCart',
              change: item,
              action: 0,
              index: index
            })
            this.calcTotalPrice(); // <--
            if (!this.selectGoods.length) this.isShowCart = false
            return
          }
        }
        this.$store.dispatch({ // <-- 提交购物车更改，使导航徽章数量变化
          type: 'updateShopCart',
          change: item,
          action: 1,
          index: index
        })
        this.calcTotalPrice(); // <--
      },
      /* 计算总额 */
      calcTotalPrice: function () { // 计算选中商品总金额函数
        this.totalAllPrice = 0;
        this.totalAllNum = 0;

        this.shopCart.forEach((item, index) => {
          if (item.checked) { // 说明这个商品选中了
            this.totalAllPrice += item.price*item.count;
            this.totalAllNum += item.count;
          }
        })
      },

      /* 选中或取消选中 */
      selectedProduct: function (item,index) {

        if (typeof item.checked == 'undefined') { // 判断item.checked是否存在
          Vue.set(item, 'checked', true); // 向item全局注册了一个属性checked值为true
          // this.$set(item, 'checked', true);// 局部注册item.checke
          this.typeSlectedNum++;
        } else { // 存在--即至少点击了一次后
          item.checked = !item.checked
          // 当前item被选中时，被选中商品类型的数量+1，没选中时-1
          item.checked > 0 ? this.typeSlectedNum += item.count : this.typeSlectedNum -= item.count

          // 此时将全选控制(||)另一个切换标识也设为true，避免通过上面单个类型全选，
          // 全选样式变化，再次点击底部全选还是全选而不是取消全选问题
          if (this.totalCount === this.typeSlectedNum) {
            this.checkAllFlag = true;
          } else {
            this.checkAllFlag = false;
          }
        };

        this.$store.dispatch({ // <-- 提交购物车更改 添加属性 check:
          type: 'updateShopCart',
          change: item,
          action: 1,
          index: index
        });

        this.calcTotalPrice(); // <--
      },

      /* 全选/全不选 */
      checkAll: function (flag) {
        this.checkAllFlag = flag;

        if (flag) { //
          this.typeSlectedNum = this.totalCount;
        } else {
          this.typeSlectedNum = 0;
        }

        this.selectGoods.forEach((item, index) => {
          // 这里存在一个问题当用户直接点击全选
          // 此时item.check还未存在这个属性 所以要检测一下
          if(typeof item.checked == 'undefined'){
            // Vue.set(item, 'checked', true);
            this.$set(item, 'checked', this.checkAllFlag); // <-- 箭头函数内部还是外部作用域的this
          }else{
            item.checked = this.checkAllFlag;
          }

          this.$store.dispatch({ // <-- 提交购物车更改 添加属性 check:
            type: 'updateShopCart',
            change: item,
            action: 1,
            index: index
          });

        });
        this.calcTotalPrice(); // <--
      },

      /* 点击结算 */
      goBuy() {
          let goodsNumber;
          const date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth()+1,
                day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds(),
                uId = '12',

                handleYear = addZero(year, 2),
                handleMonth = addZero(month, 2),
                handleDay = addZero(day, 2),
                handleHour = addZero(hour, 2),
                handleMin = addZero(min, 2),
                handleSec = addZero(sec, 2);

          goodsNumber = `${handleYear}${handleMonth}${handleDay}${handleHour}${handleMin}${handleSec}${uId}`;


          if (that.totalAllPrice) {
              MessageBox('提示', `商品订单号:${goodsNumber}<br>总额：${that.totalAllPrice}元`);
          } else {
              MessageBox('提示', '未选择商品');
          }

          function addZero(time, length) {
              let str = time.toString();
              while (str.length < length){
                  str = `0${time}`;
              }
              return str;
          }
      },

      formatJson (_arr) {
          const length = _arr.length
          for (let i = 0; i < length; i++) {
              JSON.parse(_arr[i])
          }
          return _arr
      }
    },
    watch: {
    },
    computed: {
      ...mapState({
        shopCart: state => state.shopCart.selectedGoods,
        isLogin: state => !!state.user.localUserInfo.loginStatus
      }),
      ...mapGetters(['totalCount']),
      isSelectAll() {
          // 此时将全选另一个切换标识也设为true，避免通过上面单个类型全选，
          // 全选样式变化，再次点击底部全选还是全选而不是取消全选问题
          if (this.totalCount === this.typeSlectedNum) {
              this.checkAllFlag = true;
          } else {
             this.checkAllFlag = false;
          }
          return this.totalCount === this.typeSlectedNum;
      }
    },
    components: {
      shopcartHeader,
      cartControll,
      MessageBox,
      vHeader
    }
  };
</script>

<style scoped>
  .shopcart-page{
    min-height:100vh;
    width；100%；
  /* 推荐 */
    .shopcart-recommend-wrap{
      padding:2px 0 0 0;
      background:#f0f2f5;


    .recommend-title{
      position:relative;
      display:flex;
      justify-content:center;
      margin:14px 5px;
      color:#848689;
      font-size: 14px;
      background: red;
    }
    .recommend-title:after{
      content: '';
      position:absolute;
      top:50%;
      left:0;
      display:block;
      width:100%;
      height:1px;
      background-color:#CACACC;
    }
    .title-text{
      position:relative;
      z-index:10;
      display:block;
      padding: 0 10px;
      background-color:#f0f2f5;
    }
    .title-arrow{
      display:inline-block;
      position:relative;
      top:1px;
      width:13px;
      height:13px;
      margin-right:10px;
      background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYjlhMDE1Yi1jNGYwLTU5NDgtYTQyYy00ZDk4ZmUzYTA4ZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjY4MTczRTVCODQwMTFFNTk3OTNDNzU1NUY2Nzg4RUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjY4MTczRTRCODQwMTFFNTk3OTNDNzU1NUY2Nzg4RUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTVEOUJGMEFBMjJFMTFFNUE1NzZDRjhDNjkxNzhBQzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTVEOUJGMEJBMjJFMTFFNUE1NzZDRjhDNjkxNzhBQzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nDNBbAAAB00lEQVR42qyVvUtCURiH71XXQqFoajFqlqSliCbBIBwCh4yC/gJDCyKoqS9KLNuaw9oUxME1okAwawwhFykIBKOxxX6v/G7c7J6rkgcezrnn4/F4Pt6j7x8ea4rkAytgBoyCIVAHNXAHLsHT9tbmn4EOC5kXZEAZvIIomAIDzKOsl/bMwdGJt5M0yM73wAmSoAjewBfzIuud7FeGOKiShkAerIIEaGr2qcl+0j8PcahdOg7SYAHktB4S1jTHcWmIJ6TOxbZzsAsKps6/BieSKZmZvhGL/tRBYvQtoLyDYgrMy0z9YBicqmZDYesvo6ya8Zl4IPeLdJl/3U6o81O3EyNdgYhIp7mLnYRaF+IbMOfgwa51KfwltqivyjkX6Qh4VwxsJfPmmMq6xbo2kHlE+gkGVYtkFtrV8TR4kDVE+gLGrAaqBtuI5cpWRXoLZrX+pDnZLIdxDPokXQLXIi0xpK3/x4b1lPF1bFbJuKayQA/g2biqxhVsPw0W9Rqj1B6YNAeUCm+WRKlAjzMMcFwEs6y0hz6JNmEG6HiXzjj7hxmtLIN0ls+IPCGPIMaA42a7m98xtks/H4RZs8Rl8etybhdNb9QFz7EIP9gud3xN9UZ9CzAA+QmWuz+ZcigAAAAASUVORK5CYII=) no-repeat;
      background-size:13px 13px;
      background-position:center center;
    }

    /* 内容区 */
    .recommend-body .list{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-around;

    }
    .recommend-body .item{
      flex:0 0 49%;
      overflow:hidden;
      background-color:red;
      margin-bottom:4px;

      &.margin-left{
         margin-left:2px;
       }
      &.margin-right{
         margin-right:2px;
       }

    .item-img{
      display:block;
      width:100%;
    }

    .desc{
      height:33px;
      margin:5px 0 3px 0;
      padding:0 4px;
      line-height: 17px;
      font-size: 12px;
      color:#232326;
      text-align: left;
    }

    .body-bottom{
      display:flex;
      position:relative;
      margin-bottom:3px;
      justify-content: space-between;
      font-size:0;
      background:red;
    .price-content{
      margin-left:5px;
      color:#f23030;
      font-size:0;
    .price{
      font-size: 16px;
      color:inherit;
    }
    .yuan,
    .zero{
      font-size:12px;
      color:inherit;
    }
    }
    .similar{
      position:relative;
      z-index: 50;
      display:inline-block;
      margin-right:6px;
      padding:3px 5px;
      color:#bfbfbf;
      font-size:12px;
      &:after{
         content:'';
         position:absolute;
         z-index: 1;
         top:0;
         left:0;
         display:block;
         width:100%;
         height:100%;
         border:1px solid rgba(191, 191, 191,.5);
         border-radius:4px;
       }
      &.is-active{
         color:red;
     }
  }
      }
    }

  }
  }
  /* 购物车相关 */
  .shopcart-detail{
    position: fixed;
    display:flex;
    z-index: 51;
    left: 0px;
    width:100%;
    bottom: 50px;
    height:40px;
    line-height: 40px;
    font-size: 16px;
    background:#fff;
  }
  .selectall{
    flex:0 0 70px;
  }
  .selectall.is-selected{
    color:red;
  }
  .count{
    flex:1;
    text-align: left;
  }
  .total-price{
    color:red;
  }
  .gobuy{
    flex: 0 0 100px;
    background:red;
    color:#fff;
  }
  .buy-num{
    color:inherit;
  }


  /* 选购商品列表 */
  .selectgood-wrap{
    font-size:16px;
  }
  .selectgood-wrap .item{
    margin-bottom:20px;
  }
  .selectgood-wrap .item-body{
    display:flex;
  }
  .selectgood-wrap .select{
    flex: 0 0 30px;
    line-height: 97px;
  }
  .selectgood-wrap .select.is-selected{
    color:red;
  }
  .selectgood-wrap .img-wrap{
    flex:0 0 100px;
    width:100px;
    height:100px;
  }
  .selectgood-wrap .img{
    display:block;
    max-width: 100%;
  }
  .selectgood-wrap .item-main{
    position:relative;
    width:100%;
  }
  .selectgood-wrap .main-desc{
    display: -webkit-box;
    padding:0 5px;
    text-align: left;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .main-bottom{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    display:flex;
    justify-content: space-between;
  }
  .main-bottom .price{
    display:inline-block;
    padding:0;
    padding-left:5px;
    color:red;
  }
  .main-bottom .controll{
    display:inline-block;
    padding:0;
    padding-right:5px;
  }
  .main-bottom .controll span{
    padding: 3px 5px;
    border:1px solid #919497;
  }

  #shopcart-page-body-bottom{
    position:relative;
  }

  /* 未登录时 */
  .go-login-wrap{
    position: fixed;
    display: flex;
    top:30px;
    left:0;
    width:100%;
    bottom:50px;
    background:#fff;
    align-items: center;
    justify-content: center;
    .main-wrap{
      width:60%;
      .img-wrap{
        background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        display: inline-block;
        vertical-align: middle;
        width: 105px;
        height: 105px;
        margin-bottom: 5px;
        background-size: 105px 105px;
        background-position: 50%;
        background-repeat: no-repeat;
      }
      .text{
        text-align: center;
        font-size:12px;
        margin-bottom:5px;
      }
      .link{
        display: block;
        width: 100%;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        color: #fff;
        background-color: #b4282d;
        border-radius: 4px;
        text-align: center;
      }
    }
  }
</style>
