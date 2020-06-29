import Vue from 'vue';
import router from './router';
import Easy from '../src';
console.log('Easy: ', Easy);
import App from './App';
Vue.use(Easy);

// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
