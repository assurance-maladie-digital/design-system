import { vuetify } from './vuetify';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Playground from './Playground.vue';
import { router } from './router';

const app = createApp(Playground);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
