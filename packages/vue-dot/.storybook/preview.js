// Imports for configuring Vuetify
import Vue from 'vue'
import Vuetify from 'vuetify'
import { options } from './vuetify' // <== important

// configure Vue to use Vuetify
Vue.use(Vuetify)

// this was the only thing here by default
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// instantiate Vuetify instance with any component/story level params
const vuetify = new Vuetify(options)

// THIS is my decorator
export const decorators = [
  (story, context) => {
    // wrap the passed component within the passed context
    const wrapped = story(context)
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `
    })
  },
]
