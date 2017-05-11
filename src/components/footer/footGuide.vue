<template>
  <div id="common-footer">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">
          <img src="../../images/a-home.png" alt="home">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/list">
          <img src="../../images/n-catergry.png" alt="catergry">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mm">
          <img src="../../images/n-find.png" alt="find">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopcart">
          <div class="badge-wrap" v-show="addShopCartGoodsNum">
            <mt-badge size="small" color="red">{{addShopCartGoodsNum}}</mt-badge>
          </div>
          <img src="../../images/n-cart.png" alt="cart">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mine">
          <img src="../../images/n-me.png" alt="me">
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import { Tabbar, TabItem, Badge } from 'mint-ui';
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return  {

      }
    },
    computed: mapState({
      addShopCartGoodsNum: function(state) {
          if (state.selectedGoods.length) {
              let tatalCount = 0;
              state.selectedGoods.forEach((item) => {
                  tatalCount += item.count;
              })
              return tatalCount;
          } else {
            return false;
          }
      }
    }),
    components: {
      Badge
    }
  };
</script>

<style lang="scss">
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
          .badge-wrap{
            position:absolute;
            top: -10px;
            right: 26%;
          }
        }
      }
    }
  }
</style>
