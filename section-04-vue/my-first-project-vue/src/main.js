import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from "pinia";

import './assets/main.css';

const app = createApp(App);

createApp(App).mount('#app');

App.use(createPinia());