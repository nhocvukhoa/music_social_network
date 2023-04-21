import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './tailwind.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
