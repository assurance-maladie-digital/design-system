// Imports for configuring Vuetify
import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'


// configure Vue to use Vuetify
Vue.use(Vuetify)

// this was the only thing here by default
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const options = {
	icons: {
        iconfont: 'mdiSvg',
    }
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
        <v-app style="border:1px solid rgba(0,0,0,0.1); box-shadow: 4px ;width:95%;margin:auto;min-height:80px!important">
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `
    })
  },
]
