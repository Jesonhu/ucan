<template>
    <div class="star" :class="starType">
      <span class="star-item" v-for="item in starShow" :class="item"></span>
    </div>
</template>

<script>
    const LENGTH = 5; //
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default{
        props: ['score','size'],
        data() {
            return {};
        },
        computed: {
          /* 星星尺寸 不同地方星星尺寸不一样*/
          starType() {
            return 'star-' + this.size;
          },
          /* 星星样式 */
          starShow() {
              let show = [];
              const integer = Math.floor(this.score); // 整数部分
              const  decimal = this.score - integer; // 小数部分
              for (let i=0;i<integer;i++) {
                  show.push(CLS_ON);
              };
              decimal >= 0.5 ? show.push(CLS_HALF) : show.push(CLS_OFF);
              while (show.length < LENGTH) {
                  show.push(CLS_OFF);
              }
              return show;
          }
        }
    };
</script>

<style lang="scss">
  @import "../../style/scss/mixin";

  .star{
    font-size: 0;

    .star-item{
      display:inline-block;
      background:no-repeat;
    }
    &.star-48{
      .star-item{
        width:20px;
        height:20px;
        margin-right:22px;
        background-size:20px 20px;
        &:last-child{
          margin-right:0;
        }
        &.on{
          @include  star-bg-img('star48_on');
        }
        &.half{
          @include star-bg-img('star48_half');
        }
        &.off{
          @include star-bg-img('star48_off');
        }
      }
    }
    &.star-36{
      .star-item{
        width:15px;
        height:15px;
        margin-right:8px;
        background-size:15px 15px;
        &:last-child{
          margin-right:0;
        }
        &.on{
          @include  star-bg-img('star36_on');
        }
        &.half{
          @include star-bg-img('star36_half');
        }
        &.off{
          @include star-bg-img('star36_off');
        }
      }
    }
    &.star-24{
      .star-item{
        width:10px;
        height:10px;
        margin-right:3px;
        background-size:10px 10px;
        &:last-child{
          margin-right:0;
        }
        &.on{
          @include  star-bg-img('star24_on');
        }
        &.half{
          @include star-bg-img('star24_half');
        }
        &.off{
          @include star-bg-img('star24_off');
        }
      }
    }
  }
</style>
