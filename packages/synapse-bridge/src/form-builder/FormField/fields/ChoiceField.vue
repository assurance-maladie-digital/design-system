<script lang="ts">
import { defineComponent } from 'vue'

import type { Refs } from '@/types'

import FieldComponent from '../mixins/fieldComponent'

import type { IFieldMap } from '../mixins/fieldMap'

import type {
	ChoiceValue,
	OtherFieldValue,
	ChoiceFieldValue,
	ChoiceFieldErrorMessages,
	OtherField,
	FieldItemValue,
} from '../types'

// We import them all because the form can use any of them
import ChoiceAutocompleteField from './ChoiceAutocompleteField.vue'
import ChoiceSelectField from './ChoiceSelectField.vue'
import ChoiceButtonField from './ChoiceButtonField.vue'
import ChoiceSliderField from './ChoiceSliderField.vue'
import TextareaField from './TextareaField.vue'

const selectFieldMap = {
	select: 'ChoiceSelectField',
	choiceAutocomplete: 'ChoiceAutocompleteField',
	choiceButton: 'ChoiceButtonField',
	choiceSlider: 'ChoiceSliderField',
} satisfies IFieldMap

export default defineComponent({
	components: {
		ChoiceAutocompleteField,
		ChoiceSelectField,
		ChoiceButtonField,
		ChoiceSliderField,
		TextareaField,
	},
	mixins: [FieldComponent],
	watch: {
		'field.value': {
			handler(value: ChoiceValue) {
				this.choiceValue = value ?? { value: null }

				/**
				 * Set the other local value if the other value is not null
				 * to keep the local value up for the user
				 */
				if (this.choiceValue?.other) {
					this.otherFieldValue = this.choiceValue.other
				}
			},
			immediate: true,
			deep: true,
		},
	},
	data() {
		return {
			$refs: {} as Refs<{
				otherFieldRef: HTMLInputElement
			}>,

			choiceValue: {} as ChoiceValue,

			otherFieldValue: null as OtherFieldValue,
		}
	},
	computed: {
		doOtherChoiceHaveTrigger(): boolean {
			return (
				(Array.isArray(this.field.other) &&
					this.field.other.length > 0) ||
				((this.field.other as OtherField)?.selectedChoice !==
					undefined &&
					(this.field.other as OtherField)?.selectedChoice !== null)
			)
		},

		showOtherTextareaField(): boolean {
			if (!this.doOtherChoiceHaveTrigger) {
				return false
			}

			if (Array.isArray(this.field.other)) {
				return this.field.other.some((other) => {
					return (
						other.selectedChoice === this.choiceValue.value ||
						(Array.isArray(this.choiceValue.value) &&
							this.choiceValue.value.includes(
								other.selectedChoice
							))
					)
				})
			}

			const choiceFieldValue = this.choiceValue.value

			if (choiceFieldValue === this.field.other?.selectedChoice) {
				return true
			}

			if (!Array.isArray(choiceFieldValue) || !choiceFieldValue.length) {
				return false
			}

			return choiceFieldValue.includes(this.field.other?.selectedChoice)
		},

		choiceField() {
			type FieldKeys = keyof typeof selectFieldMap | undefined
			const metadataType = this.field.fieldOptions?.type as FieldKeys

			return metadataType
				? selectFieldMap[metadataType]
				: selectFieldMap.select
		},

		otherField() {
			if (Array.isArray(this.field.other)) {
				if (Array.isArray(this.choiceValue.value)) {
					return this.field.other.find((other) =>
						(this.choiceValue.value as FieldItemValue[]).includes(
							other.selectedChoice
						)
					)
				} else {
					return this.field.other.find(
						(element) =>
							element.selectedChoice === this.choiceValue.value
					)
				}
			} else {
				return this.field.other
			}
		},

		errorMessages(): ChoiceFieldErrorMessages {
			const errorMessages = this.fieldOptions?.errorMessages

			if (typeof errorMessages === 'string') {
				return {
					value: [errorMessages],
					other: undefined,
				}
			}

			if (Array.isArray(errorMessages)) {
				return {
					value: errorMessages,
					other: undefined,
				}
			}

			if (typeof errorMessages === 'object') {
				let { value, other } = errorMessages as ChoiceFieldErrorMessages

				value = typeof value === 'string' ? [value] : value
				other = typeof other === 'string' ? [other] : other

				return {
					value,
					other,
				}
			}

			return {}
		},
	},
	methods: {
		choiceUpdated(choiceFieldValue: ChoiceFieldValue): void {
			this.choiceValue.value = choiceFieldValue

			if (
				this.choiceValue.value &&
				!Array.isArray(this.field.other) &&
				!this.field.other?.selectedChoice
			) {
				this.otherFieldValue = null
			}

			if (this.doOtherChoiceHaveTrigger) {
				this.$nextTick(() => this.$refs.otherFieldRef?.focus())

				this.choiceValue.other = this.otherFieldValue
			} else {
				this.choiceValue.other = null
			}

			this.emitChangeEvent(this.choiceValue)
		},

		otherUpdated(otherFieldValue: OtherFieldValue): void {
			this.otherFieldValue = otherFieldValue?.length
				? otherFieldValue
				: null
			this.choiceValue.other = this.otherFieldValue

			this.emitChangeEvent(this.choiceValue)
		},
	},
})
</script>

<template>
	<div>
		<component
			:is="choiceField"
			:model-value="choiceValue.value"
			:items="field.items"
			:options="fieldOptions"
			:multiple="field.multiple"
			:error-messages="errorMessages.value"
			:color="field.fieldOptions?.color ?? 'primary'"
			@update:modelValue="choiceUpdated"
		/>

		<template v-if="otherField">
			<VExpandTransition hide-on-leave>
				<div v-if="showOtherTextareaField" class="vd-other-field mt-4">
					<h4 v-if="otherField.label" class="text-body-1 mb-1">
						{{ otherField.label }}
					</h4>

					<VTextarea
						ref="otherFieldRef"
						v-bind="otherField.fieldOptions"
						:model-value="otherFieldValue"
						:disabled="!showOtherTextareaField"
						:rows="1"
						:error-messages="errorMessages.other"
						auto-grow
						variant="outlined"
						class="vd-form-input"
						:color="
							(field.fieldOptions?.color as string) ?? 'primary'
						"
						@update:modelValue="otherUpdated"
					/>
				</div>
			</VExpandTransition>

			<VTextField
				v-if="!doOtherChoiceHaveTrigger"
				v-bind="otherField.fieldOptions"
				:model-value="otherFieldValue"
				:theme="Boolean(otherFieldValue) ? 'dark' : 'light'"
				:error-messages="errorMessages.other"
				color="white"
				base-color="white"
				:bg-color="otherFieldValue ? 'accent' : undefined"
				density="compact"
				variant="outlined"
				class="vd-form-input"
				@update:modelValue="otherUpdated"
			/>
		</template>
	</div>
</template>

<style scoped>
.vd-form-input :deep(input.v-field__input) {
	color: white;
}
</style>
