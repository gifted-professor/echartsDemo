/*
 * @desc:
 * @LastEditTime: 2023-04-18 00:21:08
 * @params:
 * @return::
 */
import { createApp } from "vue";
import App from "./App.vue";
import btn from '@/components/transformBtn.vue'
// 引入路由
import router from "./router";
import { createPinia } from 'pinia'

createApp(App).component('btn', btn).use(router).use(createPinia()).mount("#app");
