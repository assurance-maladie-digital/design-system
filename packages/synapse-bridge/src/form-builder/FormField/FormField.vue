<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { Field } from './types'

import FieldMap from './mixins/fieldMap'

import { mdiInformationOutline } from '@mdi/js'

export default defineComponent({
	mixins: [FieldMap],
	props: {
		modelValue: {
			type: Object as PropType<Field>,
			required: true,
		},
	},
	emits: ['update:modelValue'],
	data() {
		return {
			informationIcon: mdiInformationOutline,
		}
	},
	computed: {
		fieldComponent(): string {
			let fieldType = this.modelValue.type

			// Handle subtypes that are not in type 'select'
			if (fieldType !== 'select') {
				const fieldOptionsType =
					(this.modelValue.fieldOptions?.type as string) || undefined
				fieldType = fieldOptionsType || fieldType
			}

			return this.getField(fieldType)
		},

		isDefinedField(): boolean {
			return this.fieldExists(this.modelValue.type)
		},
	},
	methods: {
		emitChangeEvent(value: Field): void {
			this.$emit('update:modelValue', value)
		},
	},
})
</script>

<template>
	<div class="vd-form-field">
		<h4
			v-if="modelValue.title"
			class="text-body-1 d-flex align-sm-center"
			:class="{ 'mb-2': !modelValue.tooltip }"
		>
			<span v-html="modelValue.title" />

			<VTooltip v-if="modelValue.tooltip" offset="50px">
				<template #activator="{ props }">
					<VBtn
						v-bind="props"
						class="ml-1"
						icon
						variant="flat"
						density="compact"
					>
						<VIcon size="20">
							{{ informationIcon }}
						</VIcon>
					</VBtn>
				</template>

				<span
					class="vd-form-field-tooltip-text"
					v-text="modelValue.tooltip"
				/>
			</VTooltip>
		</h4>

		<p v-if="modelValue.description" class="text-body-2 text-grey">
			{{ modelValue.description }}
		</p>

		<component
			:is="fieldComponent"
			v-if="isDefinedField"
			:field="modelValue"
			@update:modelValue="emitChangeEvent"
		/>

		<slot
			v-else
			:name="modelValue.type"
			v-bind="{
				modelValue,
				emitChangeEvent,
			}"
		/>
	</div>
</template>

<style lang="scss" scoped>
.vd-form-field + .vd-form-field {
	margin-top: 12px;
}

.vd-form-field-tooltip-text {
	white-space: pre-wrap;
}
</style>
