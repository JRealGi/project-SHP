import Vue from "vue";
import App from "./App.vue";

//注册路由
import router from "@/router";
import store from "@/store";
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

import "@/mock/mockServe";
import "swiper/css/swiper.css";

import { reqGetSearchInfo } from "@/api";
console.log(reqGetSearchInfo({}));

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由:底下的写法KV一致省略V【router小写的】
  router,
  store,
}).$mount("#app");
