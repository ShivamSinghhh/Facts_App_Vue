import { createApp } from 'vue'
import FactsApp from './FactsApp.vue'
import router from './router'

createApp(FactsApp).use(router).mount('#app')
