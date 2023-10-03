import vueSnapshotSerializer from 'jest-serializer-vue'
import { expect } from 'vitest'

expect.addSnapshotSerializer(vueSnapshotSerializer)

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
	components,
	directives
})

global.ResizeObserver = require('resize-observer-polyfill')
