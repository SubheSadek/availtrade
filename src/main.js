import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import common from "./common";
const app = createApp(App);
app.use(router);
app.mixin(common);
app.mount("#app");