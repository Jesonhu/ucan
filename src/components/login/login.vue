<template>
    <div class="login-wrap">
      <form>
        <mt-field label="账号" placeholder="用户名/邮箱/手机号"
                  v-model="username"
                  :state="status">
        </mt-field>
        <div class="pwd-from-group">
          <mt-field label="密码" placeholder="请输入密码" :type="showPassword?'text':'password'" v-model="password"></mt-field>
          <mt-switchs v-model="showPassword"></mt-switchs>
        </div>
        <div class="form-group">
          <mt-button type="primary" :disabled="canSubmit" @click.stop.prevent="submitHandle" class="submit">登录</mt-button>
        </div>
      </form>

      <!-- 登录后 -->
      <login-ok :isShow="canShowMe" @goBack="goBack"></login-ok>

    </div>
</template>

<script>
    import {Field} from 'mint-ui';
    import { Switch } from 'mint-ui';
    import { Button } from 'mint-ui';

    import loginOk from '../../components/loginok/loginok';

    const inputStatus = ['success', 'error', 'warning'];
    let that;

    export default{
      data() {
        return {
          username: '',
          password: '',
          showPassword: false,
          status: 'warning',
          canSubmit: true,
          canShowMe: false
        }
      },
      created() {
          that = this;
      },
      watch: {
        'username'(curVal, oldVal) { // 监听userName的值
          let pattern = /^1[34578]\d{9}$/;

          if(!(pattern.test(curVal))){
            this.canSubmit = true;
            console.log("手机号码格式有误，请重填");
            return false;
          } else {
            this.canSubmit = false;
            that.status = 'success';
            console.log('电话号码输入正确');
          }
        }
      },
      methods: {
        submitHandle() {
          console.log('点击了登录');
          this.canShowMe = true;
        },

        /* 处理loginok.vue $emit发布的请求 */
        goBack() {
            this.canShowMe = false;
        }
      },
      computed: {

      },
      components: {
        Field,
        mtSwitchs: Switch,
        mtButton: Button,
        loginOk
      }
    };
</script>

<style lang="scss">
  .login-wrap{
    margin-top:10vh;
    width:100%;
    padding:10px 0px;

    .mint-cell-wrapper{
      background-image:none;

      .mintui-field-success{
        color:green;
      }
      .mintui-field-success{
        margin:0;
      }
    }

    .pwd-from-group{
      position:relative;

      .mint-switch{
        $baseSize: 30;

        position:absolute;
        top:9px;
        right:16px;

        .mint-switch-core{
          width:47px;
          height:28px;
          /* 滑槽 */
          &::before{
            content: '';
            height:25px;
          }
          /* 滑块 */
          &::after{
            content: '';
            width:25px;
            height:25px;
          }
        }
      }
    }

    .form-group{
      .submit{
        display:block;
        box-sizing: border-box;
        width:92%;
        margin:0 auto;
      }
    }

  }
</style>
