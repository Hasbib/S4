import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router'; 

import 'jquery';
import 'bootstrap';

const app = createApp(App);

// Gunakan Axios dalam seluruh aplikasi
app.config.globalProperties.$http = axios;

app.use(router);
app.mount('#app');
