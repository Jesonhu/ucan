<template>
  <div id="recommend" class="recommend-wrap">
    <div class="recommend-title">
      <span class="title-text">
        <em class="title-arrow"></em>
        为您推荐
      </span>
    </div>
    <div class="recommend-body">
      <ul class="list">
        <li class="item"
            v-for="(item, index) in dataRecommend">
          <router-link :to="`/product/${item.id}.html`" class="item-link">
            <img v-lazy="item.cover" alt="" class="item-img">
            <p class="desc linetwo">{{item.title}}</p>
            <div class="body-bottom">
              <div class="price-content">
                <span class="yuan">￥</span>
                <span class="price">{{item.price || 66}}</span>
                <span class="zero">.{{item.oldprice}}</span>
              </div>

              <div class="similar">看相似</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  let that;
  export default {
    props: ['dataRecommend'],
    data() {
      return {

      }
    },
    created() {
    },
    components: {}
  };
</script>

<style lang="scss">
  .recommend-wrap{
    padding:2px 0 0 0;
    background:#f0f2f5;
  }

  .recommend-title{
    position:relative;
    display:flex;
    justify-content:center;
    margin:14px 5px;
    color:#848689;
    background: #F0F2F5;
    font-size: 14px;
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
    background-color:#fff;
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
      height:6.7rem;
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
      margin-bottom:3px;
      justify-content: space-between;
      font-size:0;
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
      }
    }
  }
</style>
