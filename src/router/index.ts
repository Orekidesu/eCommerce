import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/dashboardView.vue";
import Products from "@/views/productsView.vue";
import Faq from "@/views/faqView.vue";
import Contact from "@/views/contactUsView.vue";
import Cart from "@/views/cartView.vue";
import ProductDetails from "@/views/productDetailsView.vue";
import BuyProduct from "@/views/buyProductView.vue";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/init.js";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },

  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/faqs",
    name: "faq",
    component: Faq,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/productDetails",
    name: "productDetails",
    component: ProductDetails,
  },
  {
    path: "/buyProduct",
    name: "buyProduct",
    component: BuyProduct,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
