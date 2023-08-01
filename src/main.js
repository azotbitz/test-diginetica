import './assets/bootstrap.min.css'
import './assets/main.css'
import './assets/responsive.css'


import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import router from './router'

const vuetify = createVuetify()

createApp(App).use(router).use(vuetify).mount('#app')