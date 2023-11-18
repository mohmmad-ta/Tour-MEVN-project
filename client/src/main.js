import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "../axios/axios";
// import axios from "axios";
// import VueAxios from "vue-axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";

import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { fas, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, fas);

dom.watch();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  // .use(axios)
  .mount("#app");
