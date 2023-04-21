/*
 * @desc:
 * @LastEditTime: 2023-04-18 00:15:58
 * @params:
 * @return::
 */
import { createRouter, createWebHistory } from "vue-router";
// 开启历史模式
// vue2中使用的mode：history 实现
const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            redirect: "/CIM",
        },
        {
            path: "/CIM",
            component: () => import("@/views/cim.vue"),
        },
        {
            path: "/energy",
            component: () => import("@/views/energy.vue"),
        },
        {
            path: "/analyse",
            component: () => import("@/views/analyse.vue"),
        },
        {
            path: "/monitor",
            component: () => import("@/views/monitor.vue"),
        },
        {
            path: "/community",
            component: () => import("@/views/community.vue"),
        },
        {
            path: "/test",
            component: () => import("@/views/test.vue"),
        }
    ],
});
export default router;
