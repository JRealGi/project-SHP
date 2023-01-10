import Vue from "vue";
import App from "./App.vue";

//注册路由
import router from "@/router";
import store from "@/store";
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

import "@/mock/mockServe";
import 'swiper/css/swiper.css'

new Vue({
  render: (h) => h(App),
  //注册路由:底下的写法KV一致省略V【router小写的】
  router,
  store,
}).$mount("#app");
