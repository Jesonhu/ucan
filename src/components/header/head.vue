<template>
  <div>
    <div class="header s1">
      <div class="logo"></div>
      <div class="search-wrap">
        <em class="search-icon"></em>
        <form action="" class="top-search">
          <input type="text" maxlength="20" autocomplete="off" placeholder="5.4超级单品日 爆款神价格">
        </form>
      </div>
      <div class="login">登录</div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" >
  @import "../../style/scss/mixin";

  .header{
    position:fixed;
    top:0;
    left:0;
    z-index: 50;
    display:flex;
    flex-flow: row nowrap;
    height: 39px;
    width:100%;

  .logo{
    width:39px;
    height:39px;
    background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAB7UlEQVRIicXXT4hNYRjH8c+dblHUTVG6mtEkUSJ/J1MjG2ahiIWNtRILFigLK6WUkShSipWNFbEwKZqysDDyJxYjlMY0RU0jU5e4Y/Gek3dOM+fWzL1zfnXq+T3ved/zPe973nOeUxru7pGjo7ge+R14lsTr8WaGfj/xAyMYwgs8xau8i5XzGuegxclRxVYcSvIfhJu7iYlsp7YWwcyk1biM99iTbWzmzJzFoyQuYRlWYCN6E5BUHXiI07jUCpjPGMxp345z2J34EvowhlvM7zI9F2boBCaj/DV0zjdMqqs4E/mFOF8UDGF5Xkb+IJYXBVPHxciXsb8oGHiAX5HfWSTMhKlv8HVFwsDHKK4WDTMWxZWiYaaoaJglUTxeNMyqKB5pBFNpIcgibIj8u0YwC1oIszcz/kAjmI6M/9YkkDahfEj1B/cawWyL4ppQJjRDp7A58ncxmgdzQKhzUz3B7yaAHMeFyNeEwmzarV3GEdzJ5G/MEaIL/bgiFFapjklmvCwsRQUrsUmYkWpmoPvChy1PndgS+aVoF3ZML9Zkzq/jJG6nidJwd8+kfA1gn/DrESvvV6WRvuAwHsfJvGdmVHjQdk0DMlsNCWXn2iwI/wvyGr7jE14LVX4//s7ignWMCyXC1wRgUNgAb/M6/gPrElp1gukJzAAAAABJRU5ErkJggg==") no-repeat;
    background-size:18px 13px;
    background-position: center;
  }

  .search-wrap{
    flex:1;
    position: relative;
    padding:5px;
  .search-icon{
    display:block;
    position:absolute;
    top:13px;
    left:10px;
    width:12px;
    height:12px;
    background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAB/0lEQVRIiaXVTUhVQRjG8d+1Mm2TRWALoXLRh4i1yPbRIoNw0SJwGS1KKSqLCgJpU1BBughKaJ2LwEUGfe7aFQR9aUEUVOSuDyIuWlKLM2PT6VzJex848M4z5/3PzHvOzJSGh4dV0DL0YAc6sBLT+IDXuIURfK4EWFjgNeAIjqMp11eP9eHZiTO4gEGU86C6XHs1HuFsAbhITWGAhyG3IrwFD9CeeOPoR1tYUUOI+0NfVHvIbSmCN2A06SyjT1brQUxgKjwTwevAQdl3iJMbRWMefhidIZ5GNy5jJr/URDO4JKt9HKAzsGbhy3EySTqK+3NA87onK1PUicBUJ/vdloaOF2HG89WVkCuweiJ8e/LSVXOXopJmQm5UV4RvSsw7VYCjbifxxghvTsw3NcDT3OYIn0rMXzXA093+M8InE7O1BviqJJ6M8FeJ2VUDfGsSP4nw9CPuxYIqwCX0Ju27ET6Cr8Fsx/4q4H3+nEnfcT3CP+Fc8uJFbJsHeDPOJ+2hwJw9W4bwLMT1GMM+/x7JqUqynTiGJcF7LjuCpfAyduFjaDfKtvRTHMI6LMJirJXV9zGuyW6oqBZZieqhlLvm1uCGv8/0ajSO7vyy32ILTuHLf0C+Kd7VbRgoqmlZds214gBu4h1+yHbz++D1yq62DThWNJl8WWrRCpzGHrzE7t8cqmerthhqyQAAAABJRU5ErkJggg==") no-repeat right center;
    background-size:12px 12px;
  }
  .top-search{
    height:100%;
  input{
    display:block;
    width:100%;
    height:100%;
    border:1px solid #eee;
    border-radius:15px;
    text-indent: 20px;
  }
  }
  }

  .login{
    width:39px;
    height:39px;
    font-size:12px;
    line-height: 39px;
    text-align: center;
    color:#fff;
  }
  }
</style>
