import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// THIS export is the important part!
export const options = {
	theme: { disable: true },
}

export default new Vuetify(options)
