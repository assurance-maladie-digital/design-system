import vueSnapshotSerializer from 'jest-serializer-vue'
import { expect } from 'vitest'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

expect.addSnapshotSerializer(vueSnapshotSerializer)

export const vuetify = createVuetify({
	components,
	directives,
})

global.ResizeObserver = require('resize-observer-polyfill')
