import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bulma/css/bulma.css';

import '@/assets/styles.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'; 


createApp(App).use(router).mount("#app");
