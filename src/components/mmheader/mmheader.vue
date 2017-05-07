<template>
  <div class="mmheader">
    <div class="header-left"></div>
    <div class="header-title">觅·Me</div>
    <div class="header-right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    components: {}
  };
</script>

<style lang="scss">
  $hei : 39px;

  .mmheader{
    display:flex;
    flex-wrap:nowrap;
    height:$hei;

    .header-left{
      width:18px;
      height:13px;
      margin:13px 20px;
      background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAB7UlEQVRIicXXT4hNYRjH8c+dblHUTVG6mtEkUSJ/J1MjG2ahiIWNtRILFigLK6WUkShSipWNFbEwKZqysDDyJxYjlMY0RU0jU5e4Y/Gek3dOM+fWzL1zfnXq+T3ved/zPe973nOeUxru7pGjo7ge+R14lsTr8WaGfj/xAyMYwgs8xau8i5XzGuegxclRxVYcSvIfhJu7iYlsp7YWwcyk1biM99iTbWzmzJzFoyQuYRlWYCN6E5BUHXiI07jUCpjPGMxp345z2J34EvowhlvM7zI9F2boBCaj/DV0zjdMqqs4E/mFOF8UDGF5Xkb+IJYXBVPHxciXsb8oGHiAX5HfWSTMhKlv8HVFwsDHKK4WDTMWxZWiYaaoaJglUTxeNMyqKB5pBFNpIcgibIj8u0YwC1oIszcz/kAjmI6M/9YkkDahfEj1B/cawWyL4ppQJjRDp7A58ncxmgdzQKhzUz3B7yaAHMeFyNeEwmzarV3GEdzJ5G/MEaIL/bgiFFapjklmvCwsRQUrsUmYkWpmoPvChy1PndgS+aVoF3ZML9Zkzq/jJG6nidJwd8+kfA1gn/DrESvvV6WRvuAwHsfJvGdmVHjQdk0DMlsNCWXn2iwI/wvyGr7jE14LVX4//s7ignWMCyXC1wRgUNgAb/M6/gPrElp1gukJzAAAAABJRU5ErkJggg==") no-repeat;
      background-size:18px 13px;
    }

    .header-title{
      flex:1;
      text-align: center;
      font-size:20px;
      line-height: 39px;
    }

    .header-right{
      width:20px;
      height:20px;
      margin:13px 9.5px;
      background:url('https://st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12') no-repeat;
      background-size:200px 200px;
      background-position: -62px -1px;
    }
  }
</style>
