<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import FormField from '../FormField'
import type { Field } from '../FormField/types'
import type { Fields } from './types'

import { useTheme } from 'vuetify'

export default defineComponent({
	components: {
		FormField,
	},
	props: {
		listTitle: {
			type: String,
			default: undefined,
		},
		description: {
			type: String,
			default: undefined,
		},
		modelValue: {
			type: Object as PropType<Fields>,
			default: undefined,
		},
	},
	emits: ['update:modelValue', 'refresh'],
	data() {
		return {
			theme: useTheme(),
		}
	},
	methods: {
		fieldUpdated(field: Field, fieldName: string): void {
			const fields = { ...this.modelValue }
			fields[fieldName] = field

			this.$nextTick(() => {
				this.$emit('update:modelValue', fields)

				if (field.dynamic) {
					this.$emit('refresh')
				}
			})
		},
	},
})
</script>

<template>
	<div
		class="vd-field-list w-100"
		:class="{ 'theme--dark': theme.current.dark }"
	>
		<h3 v-if="listTitle" class="text-h6 font-weight-bold mb-2">
			{{ listTitle }}
		</h3>

		<slot name="section-description" v-bind="{ description }">
			<p v-if="description">
				{{ description }}
			</p>
		</slot>

		<FormField
			v-for="(field, fieldName) in modelValue"
			:key="'field-' + fieldName"
			:modelValue="field"
			@update:modelValue="fieldUpdated($event, fieldName as string)"
		>
			<template v-for="slot in Object.keys($slots)" v-slot:[slot]="scope">
				<slot :name="slot" v-bind="scope" />
			</template>
		</FormField>
	</div>
</template>
