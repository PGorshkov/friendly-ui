import { createApp } from 'vue'
import './assets/scss/main.scss'
import '@pg/friendly-ui/dist/style.css'
import FUi from '@pg/friendly-ui'
import App from './App.vue'

createApp(App)
  // @ts-ignore
  .use(FUi)
  .mount('#app')
