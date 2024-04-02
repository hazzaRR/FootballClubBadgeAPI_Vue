import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/tokyo-night-dark.css'
import 'highlight.js/lib/common';
import router from './router'

createApp(App).use(router).use(hljsVuePlugin).mount('#app')
