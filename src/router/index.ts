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
import Login from "../views/authentication/loginView.vue";
import Signup from "../views/authentication/signupView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/dashboard",
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
    path: "/productDetails/:id",
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
