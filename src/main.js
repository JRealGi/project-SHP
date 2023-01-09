import Vue from "vue";
import App from "./App.vue";

import TypeNav from "@/pages/Home/TypeNav";

Vue.component(TypeNav.name, TypeNav);
//注册路由
import router from "@/router";

import store from "@/store";

import { reqCategoryList } from "@/api";
reqCategoryList();

new Vue({
  render: (h) => h(App),
  //注册路由:底下的写法KV一致省略V【router小写的】
  router,
  store,
}).$mount("#app");
