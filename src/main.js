import Vue from 'vue'
import App from './App.vue'

//注册路由
import router from '@/router';

new Vue({
  render: h => h(App),
  //注册路由:底下的写法KV一致省略V【router小写的】
  router
}).$mount('#app')
