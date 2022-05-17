import { createApp } from 'vue'
import App from './App.vue'

import CustomContainer from './components/container'

createApp(App)
  .use(CustomContainer)
  .mount('#app')
