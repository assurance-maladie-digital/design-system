import Vue from 'vue'
import Vuetify from 'vuetify'

import options from './options'

Vue.use(Vuetify, {
})

export default (ctx) => {
  const vuetifyOptions = typeof options === 'function' ? options(ctx) : options

  const vuetify = new Vuetify(vuetifyOptions)

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
