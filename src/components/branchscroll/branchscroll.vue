<template>
  <div class="branchscroll-wrap" ref="scrollWrap">
    <div class="scroll-wrap">
      <div class="banner">
        <a href="" class="link">
          <img :src="dataBranchScroll[0].banner" alt="" class="img">
        </a>
      </div>
      <div class="branchscroll-main floor">
        <div class="floor-title">{{dataBranchScroll[0].hotShop.title}}</div>
        <div class="floor-body">
          <ul class="floor-list">
            <li v-for="(item, index) in dataBranchScroll[0].hotShop.list" class="floor-item">
              <a href="" class="item-link">
                <img :src="item.image" alt="" class="img">
                <p class="item-name">{{item.name}}</p>
               </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="floor">
        <div class="floor-title">{{dataBranchScroll[0].tshirt.title}}</div>
        <div class="floor-body">
          <ul class="floor-list">
            <li class="floor-item" v-for="(item, index) in dataBranchScroll[0].tshirt.list">
              <a href="" class="item-link">
                <img :src="item.image" alt="" class="img">
                <p class="item-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="floor">
        <div class="floor-title">{{dataBranchScroll[0].jean.title}}</div>
        <div class="floor-body">
          <ul class="floor-list">
            <li class="floor-item" v-for="(item, index) in dataBranchScroll[0].jean.list">
              <a href="" class="item-link">
                <img :src="item.image" alt="" class="img">
                <p class="item-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll";

  export default {
    props: {
      dataBranchScroll: {
        type: Array
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      this.$nextTick(() => {
        this._initBScroll(); // <--
      });
    },
    methods: {
      /* 使用betterScroll */
      _initBScroll() {
        this.branchBScroll = new BScroll(this.$refs.scrollWrap, {
          click: true
        })
      }
    },
    components: {}
  };
</script>

<style lang="scss">
  .branchscroll-wrap{
    flex:1;

    .banner{
      padding:5px;
      width:100%;
      .img{
        display:block;
        width:100%;
      }
    }
    .floor{
      .floor-body{
        margin: 0 5px;
      }
      .floor-title{
        padding-left:5px;
        height:30px;
        font-size: 11px;
        line-height: 30px;
        color:#232326;
        text-align: left;
      }
      .floor-list{
        display:flex;
        flex-wrap: wrap;
        background-color:#fff;
        overflow: hidden;
      }
      .floor-item{
        flex:0 0 33%;
        padding:0;

        .item-link{
          display:block;
          padding:15px;
          .img{
            display:block;
            max-width:100%;
            margin:0 auto;
          }
          .item-name{
            text-align: center;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
