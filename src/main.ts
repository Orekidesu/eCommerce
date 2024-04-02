import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App); // Create an instance of the app
app.use(router); // Use the router
app.mount("#app"); // Mount the app
