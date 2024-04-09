import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import { Scroll } from 'vuetify/lib/directives'

import options from './options'

Vue.use(Vuetify, {
  directives: { Scroll }
})

export default (ctx) => {
  const vuetifyOptions = typeof options === 'function' ? options(ctx) : options

  const vuetify = new Vuetify(vuetifyOptions)

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
