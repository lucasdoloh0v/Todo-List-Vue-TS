import { createApp } from 'vue';
import App from './App.vue';

import '@fortawesome/fontawesome-free';
import store from './store';

createApp(App).use(store).mount('#app');
