<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { config } from './config'
import { locales } from './locales'

import { customizable } from '../../../mixins/customizable'

import { mdiFilterVariant } from '@mdi/js'
import type { Field } from '@/form-builder/FormField/types'

export default defineComponent({
	props: {
		filters: {
			type: Array as PropType<Field[]>,
			required: true,
		},
	},
	mixins: [customizable(config)],
	data() {
		return {
			locales: locales,
			filterIcon: mdiFilterVariant,
		}
	},
	methods: {
		emitFilterSelectedEvent(index: number): void {
			this.$emit('filter-selected', index)
		},
	},
})
</script>

<template>
	<VMenu v-bind="options.menu">
		<template #activator="{ props }">
			<VBtn
				v-bind="{
					...props,
					...options.btn,
				}"
			>
				<VIcon v-bind="options.icon">
					{{ filterIcon }}
				</VIcon>

				{{ locales.filters }}
			</VBtn>
		</template>

		<VList v-bind="options.list">
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
				v-bind="options.listItem"
				@click="emitFilterSelectedEvent(index)"
			>
				{{ item.fieldOptions?.filterTitle }}
			</VListItem>
		</VList>
	</VMenu>
</template>
