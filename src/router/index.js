import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category",
    name: "categoryList",
    component: () => import("../views/category/ListView.vue"),
  },
  {
    path: "/product_list/:id",
    name: "productList",
    component: () => import("../views/product/ListView.vue"),
  },
  {
    path: "/products/:productId",
    name: "productShow",
    component: () => import("../views/product/ShowView.vue"),
  },
  {
    path: "/cars",
    name: "CarView",
    component: () => import("../views/cars/CarView.vue"),
    meta: { Auth: true },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/sign/SigninView.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/sign/SignupView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search/ListView"),
  },
  {
    path: "/search_list",
    name: "searchList",
    component: () => import("../views/search/ShowView"),
  },
  {
    path: "/checkout",
    name: "CheckoutView",
    component: () => import("../views/checkout/CheckoutView"),
    meta: { Auth: true },
  },
  {
    path: "/address_list",
    name: "addressList",
    component: () => import("../views/address/ListView"),
    meta: { Auth: true },
  },
  {
    path: "/address_edit",
    name: "addressEdit",
    component: () => import("../views/address/EditView"),
    meta: { Auth: true },
  },
  {
    path: "/new_address/",
    name: "addressNew",
    component: () => import("../views/address/NewView"),
    meta: { Auth: true },
  },
  {
    path: "/show_address/:id",
    name: "addressShow",
    component: () => import("../views/address/ShowView"),
    meta: { Auth: true },
  },
  {
    path: "/pay/:payId",
    name: "payList",
    component: () => import("../views/pay/PayView"),
    meta: { Auth: true },
  },
  {
    path: "/orders/:id",
    name: "payShow",
    component: () => import("../views/pay/ListView"),
    meta: { Auth: true },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/user/ListView"),
    meta: { Auth: true },
  },
  {
    path: "/orders",
    name: "orderList",
    component: () => import("../views/order/ListView"),
    meta: { Auth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.Auth)) {
    const token = localStorage.token;
    if (token) {
      next();
    } else {
      next({
        path: "/signin",
      });
    }
  }
  next();
});

export default router;
