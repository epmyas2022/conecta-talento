import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './main.css'
import "@germingi/vue3-video-player/style.css";

createApp(App).use(router).mount('#app')
