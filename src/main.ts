import { createApp } from 'vue';
import App from './App.vue';

import CustomContainer from './components/container';
import CustomButton from './components/button';

const app = createApp(App);

app.config.globalProperties.$GLOBAL_CONFIG = {
  size: 'large',
};

app.use(CustomContainer)
  .use(CustomButton)
  .mount('#app');
