import App from '../App';

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');

export default [{
  path: '/',
  component: App, // 顶层路由对应index.html
  children: [ // 二级路由 对应 App.vue
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
}];
