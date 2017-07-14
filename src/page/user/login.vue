<template>
  <div class="mine">
    <!--header-->
    <div class="header-wrap">
    <v-header :hasBorder="true">
      <div class="mine-header">
        <div class="header-left"></div>
        <div class="header-title">登录</div>
        <div class="header-right"></div>
      </div>
    </v-header>
    </div>

    <!-- 登录 -->
    <login></login>

  </div>
</template>

<script>
  import login from '../../components/login/login';
  import vHeader from 'components/header/hasSearch.vue'

  export default{
    data() {
      return {

      }
    },
    mounted() {
      console.log('mounted');
    },
    components: {
      login,
      vHeader
    }
  };
</script>

<style lang="scss">

  $hei: 39px;

  .mine{
    height:100vh;
  }

  .mine-header{
    display:flex;
    height:$hei;

    .header-title{
      flex:1;
      text-align: center;
      font-size:20px;
      line-height: 39px;
      color:#848689;
    }

    .header-left,
    .header-right{
      width:20px;
      height:20px;
      margin:10px 9.5px;
      background:url('https://st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12') no-repeat;
      background-size:200px 200px;
      background-position: -21px -1px;
    }
    .header-right{
      background:#fff;
      background-position: -21px -1px;
    }
  }
</style>
