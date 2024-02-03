import './assets/main.css';
import 'element-plus/es/components/message/style/css';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { setGlobalOptions } from 'vue-request';
setGlobalOptions({
  manual: false,
  loadingDelay: 400,
  loadingKeep: 1000
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
