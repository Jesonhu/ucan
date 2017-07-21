<template>
    <div class="login-wrap">
      <div class="login"></div>
      <form @submit.prevent="submit">
        <div class="m-form-group border-bottom-1px">
          <div class="status">
            <input class="input"
             type="text"
             v-model="form.user"
             placeholder="手机号/邮箱/会员名">
            <i class="remove fa fa-remove" v-show="$v.form.user.required" @click="empty('user')"></i>
            <!--<i class="check fa"-->
               <!--:class="{'fa-close' : $v.form.user.$invalid, 'fa-check' : !$v.form.user.$invalid}"></i>-->
            <pre v-show="false">{{$v.form.user}}</pre>
          </div>
        </div>
        <div class="m-form-group border-bottom-1px">
          <div class="status">
            <input class="pwd"
                   type="password"
                   v-model="form.pwd"
                   placeholder="请输入密码">
            <i class="remove fa fa-remove" v-show="$v.form.pwd.required" @click="empty('pwd')"></i>
            <!--<i class="check fa fa-check"></i>-->
          </div>
        </div>
        <div class="other-link">
          <router-link class="link" to="/reg">免费注册</router-link>
          <router-link class="link" to="/reset">忘记密码</router-link>
        </div>
        <div class="m-form-group btn-wrap">
          <button class="btn submit" :class="{'ok': !$v.form.$invalid}" @click="submitHandle($v.form)">登录</button>
        </div>
        <div class="m-form-group btn-wrap">
          <router-link to="/msglogin" class="btn msg">短信验证吗登录</router-link>
        </div>
        <pre v-if="false">{{$v.form}}</pre>
      </form>
    </div>

</template>

<script>
    import {Field} from 'mint-ui';
    import { Switch } from 'mint-ui';
    import { Button } from 'mint-ui';
    import { mapState } from 'vuex'
    import { required } from 'vuelidate/lib/validators'

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
          canShowMe: false,

          isCanLogin: false,
          formShow: [
            {
              placeholder: '手机号/邮箱/会员名',
              type: 'text'
            },
            {
              placeholder: '请输入密码',
              type: 'passworld'
            }
          ],
          form: {
            user: '',
            pwd: '',
          }
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
        submitHandle (validate) {
            this.isCanLogin = !validate.$invalid
        },
        submit () {
          if (this.isCanLogin) {
              console.log('可以提交')
              return
          }
          alert('不能提交')
        },
        empty (value) {
            console.log(this.form[value])
            this.form[value] = ''
        }
      },
      computed: {

      },
      validations: {
        form: {
          user: {
            required
          },
          pwd: {
            required
          }
        }
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
    width:100%;
    padding:50px 0px;

    .login{
      width:3.4135rem;
      height:3.4135rem;
      margin:2rem auto 0;
      background:url('../../static/img/TB1p.png') no-repeat;
      background-size:contain;
    }
    .m-form-group{
      position: relative;
      width:14rem;
      margin:1.82rem auto 0;
      font-size:0.863rem;
      color:#333;

      &.border-bottom-1px{
        border-bottom: 1px solid #ff5000;
      }
      &:first-child,
      &.btn-wrap{
        margin-top:1rem;
      }

      .status{
        position:relative;
        .fa{
          position:absolute;
          top:0;
          right:0;
          display:block;
          color:#fff;
          padding:1px 3px;
          font-size:12px;
          background:#B5B5B5;
          border-radius:50%;
        }
      }
      input{
        font-size:inherit;
        height:0.86rem;
        width:100%;
        margin: 0 0 0.25rem .192rem;
        color:inherit;
      }
      .btn{
        display:block;
        width:100%;
        height:1.92rem;
        line-height: 1.92rem;
        text-align: center;
        border-radius:1rem;
      }
      .submit{
        background:rgba(180,40,45,.1);
        &.ok{
          background:rgba(180,40,45,1);
          color:#fff;
        }
      }
      .msg{
        border:1px solid #B4282D;
      }
    }
    .other-link{
      display:flex;
      width:14rem;
      margin:5px auto;
      justify-content:space-between;
      .link{
        font-size: 0.6rem;
        padding-top:10px;
        &:first-child{
          padding-right:20px;
        }
        &:last-child{
          padding-left:20px;
        }
      }
    }

    .mint-cell-wrapper{
      background-image:none;

      .mintui-field-success{
        color:green;
      }
      .mintui-field-success{
        margin:0;
        a{
          font-size:.5rem;
        }
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

    ::-moz-placeholder { color: #B5B5B5; font-size: 12px }
    ::-webkit-input-placeholder { color:#B5B5B5; font-size:12px;}
    :-ms-input-placeholder { color:#B5B5B5; font-size:12px;}
  }
</style>
