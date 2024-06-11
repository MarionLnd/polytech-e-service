import './assets/main.css'

import { createApp } from 'vue'
import Vue3Calendly from 'vue3-calendly'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Vue3Calendly)
app.use(router)

app.mount('#app')
