import { createApp } from 'vue'
import Playground from './Playground.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(Playground).use(vuetify).mount('#app')
