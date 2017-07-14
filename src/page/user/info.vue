<template>
  <transition name="move">
    <div class="info-wrap">
      <!-- 登录 -->
      <div class="loginok" v-show="isLogin">
        <div class="loginok-header">
          <div class="header-left" @click="goBack"></div>
          <div class="header-title">账号设置</div>
        </div>

        <div class="loginok-body">
          <div class="body-user">
            <img :src="myData.titBg" alt="" class="img">
          </div>
          <div class="user-out"
           @click="loginOut">退出</div>
          <div class="avatar">
            <a href="">
              <img :src="myData.avatar" alt="" class="img">
            </a>
          </div>
          <section class="user-behavior">
            <ul class="list">
              <li class="item">
                <span class="number">0</span>
                <p class="detail">收藏的宝贝</p>
              </li>
              <li class="item left1pxBorder">
                <span class="number">0</span>
                <p class="detail">收藏的店铺</p>
              </li>
              <li class="item left1pxBorder">
                <span class="number">0</span>
                <p class="detail">我的足迹</p>
              </li>
            </ul>
          </section>

          <div class="order-wrap bottom-1px">
            <ul class="list">
              <li class="item" v-for="(item, index) in myData.order.list">
                <a href="" class="link">
                  <em :class="item.icon" class="icon"></em>
                  <p class="detail">{{item.name}}</p>
                </a>
              </li>
            </ul>
          </div>

          <div class="all-order">
            <a href="" class="link">
              <em class="icon" :class="myData.order.allOrder.icon"></em>
              <p class="text">全部订单</p>
              <span class="right-wrap">
                  查看全部订单
                  <em class="icon" :class="myData.rightArrow"></em>
                </span>
            </a>
          </div>

          <div class="core-entry all-order">
            <ul class="list">
              <li class="item" v-for="(item,index) in myData.coreEntry">
                <a href="" class="link">
                  <em class="icon" :class="item.icon"></em>
                  <p class="text bottom-1px">{{item.name}}</p>
                  <span class="right-wrap">
                      <em class="icon" :class="myData.rightArrow"></em>
                    </span>
                </a>
              </li>
            </ul>
          </div>

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
            <p class="text">登录后才能查看个人信息</p>
            <router-link to="/login" class="link">登录</router-link>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import myData from '../../service/mockdata/my'
  import vHeader from 'components/header/hasSearch'
  import { mapState } from 'vuex'

  export default{
    props: {
    },
    data() {
      return {
        myData : myData
      }
    },
    methods: {
      goBack() {
        this.$emit('goBack'); // 向login发送请求
      },
      loginOut () {
        this.$store.dispatch('removeUserInfo')
        this.$store.dispatch('removeShopCart')
      }
    },
    computed: {
      ...mapState({
        isLogin: state => !!state.user.localUserInfo.loginStatus
      })
    },
    components: {
      vHeader
    }
  };
</script>

<style lang="scss">
  .loginok{
    position: fixed;
    z-index: 50;
    top:0;
    bottom:0;
    width:100%;
    height:100vh;
    background: #eee;
    transform: translate3d(0,0,0);
    transition:all .3s;
    &.move-enter, &.move-leave-active{
      transform: translate3d(100%,0,0);
    }
  }

  /* 头部 */
  $hei: 39px;
  .loginok-header{
    display:flex;
    height:$hei;
    background:#fff;

    .header-title{
      flex:1;
      padding-right:15px;
      text-align: center;
      font-size:20px;
      line-height: 39px;
      color:#848689;
    }

    .header-left{
      width:20px;
      height:20px;
      margin:10px 9.5px;
      background:url('https://st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12') no-repeat;
      background-size:200px 200px;
      background-position: -21px -1px;
    }
  }

  .body-user {
    width:100%;
    overflow:hidden;
    .img{
      display:block;
      max-width:100%;
    }
  }

  .loginok-body{
    position:relative;

    .user-out{
      position: absolute;
      top:10px;
      right:10px;
    }

    .avatar{
      position:absolute;
      top: 11vh;
      left: 19px;
      width:80px;
      height:80px;
      .img{
        max-width:100%;
        border-radius:50%;
      }
    }
  }

  .user-behavior{
    box-sizing: border-box;
    width:100%;
    height:50px;
    padding-left:100px;
    background:#fff;

    .list{
      display:flex;
      flex-wrap:nowrap;
      padding:6px 0;

      .item{
        flex:1;
        font-size:13px;
        color:#051B28;
        .num{
          display:block;
          text-align: center;
          font-size:inherit;
        }
        .detail{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: inherit;
        }
      }
    }
  }

  .order-wrap{
    margin-top:10px;
    padding-bottom:10px;
    background:#fff;
    .list{
      display:flex;
      flex-wrap: nowrap;

      .item {
        flex:1;

        .link{
          display:block;
          color:#A2A2A2;

          em.icon{
            color:inherit;
          }
          .detail{
            display:block;
            font-size: 14px;
            color:#051B28;
          }
        }
      }
    }
  }

  .all-order{
    $textColor: #051B28;

    margin-bottom:8px;
    height:40px;
    background:#fff;

    .link{
      display:flex;
      flex-wrap: nowrap;
      .icon{
        flex:0 0 24px;
        box-sizing: border-box;
        padding: 0 4px;
        padding-bottom: 2px;
        margin: 8px;
        font-size: 16px;
        color:#fff;
        background: #5090CD;
      }

      .text{
        flex:1;
        line-height: 2.3;
        font-size:16px;
        text-align: left;
        color:$textColor;
      }

      .right-wrap{
        color:#999;
        font-size:14px;
        line-height: 39px;
        .icon{
          float:right;
          font-size:14px;
          padding:0;
          margin:0;
          background:#fff;
          color:#999;
        }
      }
    }
  }

  .core-entry{

    .list{
      background:#fff;
      &:nth-child(1){
        .icon-cart{
          background:#e7a200;
        }
      }
      &:nth-child(2),
      &:nth-child(4){
        background:red;
      }
    }

    .link .text{
      line-height: 2.8;
    }
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
