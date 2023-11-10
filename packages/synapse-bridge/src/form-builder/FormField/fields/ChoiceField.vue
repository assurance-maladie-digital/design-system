<script lang="ts">
import { defineComponent } from "vue";

import { Refs } from "@/types";

import { FieldComponent } from "../mixins/fieldComponent";

import { IFieldMap } from "../mixins/fieldMap";

import {
	ChoiceValue,
	OtherFieldValue,
	ChoiceFieldValue,
	OtherField,
	ChoiceFieldErrorMessages,
} from "../types";

// We import them all because the form can use any of them
import ChoiceAutocompleteField from "./ChoiceAutocompleteField.vue";
import ChoiceSelectField from "./ChoiceSelectField.vue";
import ChoiceButtonField from "./ChoiceButtonField.vue";
import ChoiceSliderField from "./ChoiceSliderField.vue";
import TextareaField from "./TextareaField.vue";

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
		"field.value": {
			handler(value: ChoiceValue) {
				if (!value) {
					this.choiceValue = {
						value: null,
					};
				} else {
					this.choiceValue = value;
				}

				/**
				 * Set the other local value if the other value is not null
				 * to keep the local value up for the user
				 */
				if (this.choiceValue?.other) {
					this.otherFieldValue = this.choiceValue.other;
				}
			},
			immediate: true,
			deep: true,
		},
	},
	data() {
		$refs: {} as Refs<{
			otherFieldRef: HTMLInputElement;
		}>,

		choiceValue: {} as ChoiceValue,

		otherFieldValue: null as OtherFieldValue | null,

		selectFieldMap: {
			select: 'ChoiceSelectField',
			choiceAutocomplete: 'ChoiceAutocompleteField',
			choiceButton: 'ChoiceButtonField',
			choiceSlider: 'ChoiceSliderField'
		} as IFieldMap,
	},
	computed: {
		otherField(): OtherField | undefined {
			return this.field.other;
		},

		showOtherTextareaField(): boolean {
			const otherSelectedChoice = this.otherField?.selectedChoice;

			if (!this.choiceSelected && !otherSelectedChoice) {
				return false;
			}

			const choiceFieldValue = this.choiceValue.value;

			if (choiceFieldValue === otherSelectedChoice) {
				return true;
			}

			if (!Array.isArray(choiceFieldValue) || !choiceFieldValue.length) {
				return false;
			}

			if (choiceFieldValue.includes(otherSelectedChoice)) {
				return true;
			}

			return false;
		},

		choiceSelected(): boolean {
			return this.otherField?.selectedChoice !== undefined && this.otherField?.selectedChoice !== null;
		},

		otherActive(): boolean {
			const choiceFieldValue = this.choiceValue?.value;
			const selectedChoice = this.field.other?.selectedChoice;

			if (!this.choiceSelected) {
				return false;
			} else if (Array.isArray(choiceFieldValue)) {
				return choiceFieldValue.includes(selectedChoice);
			} else {
				return choiceFieldValue === selectedChoice;
			}
		},

		choiceField(): string {
			const metadataType = this.field.fieldOptions?.type as string || undefined;

			return metadataType ? this.selectFieldMap[metadataType] : this.selectFieldMap.select;
		},

		errorMessages(): ChoiceFieldErrorMessages {
			const errorMessages = this.fieldOptions?.errorMessages;

			if (typeof errorMessages === 'string') {
				return {
					value: [errorMessages],
					other: undefined
				};
			}

			if (Array.isArray(errorMessages)) {
				return {
					value: errorMessages,
					other: undefined
				};
			}

			if (typeof errorMessages === 'object') {
				let { value, other } = errorMessages as ChoiceFieldErrorMessages;

				value = typeof value === 'string' ? [value] : value;
				other = typeof other === 'string' ? [other] : other;

				return {
					value,
					other
				};
			}

			return {};
		}
	},
	methods: {
		choiceUpdated(choiceFieldValue: ChoiceFieldValue): void {
			this.choiceValue.value = choiceFieldValue;

			if (this.choiceValue.value && !this.otherField?.selectedChoice) {
				this.otherFieldValue = null;
			}

			if (this.otherActive) {
				this.$nextTick(() => this.$refs.otherFieldRef.focus());

				this.choiceValue.other = this.otherFieldValue;
			} else {
				this.choiceValue.other = null;
			}

			this.emitChangeEvent(this.choiceValue);
		},

		setOtherValue(otherFieldValue: OtherFieldValue): void {
			this.otherFieldValue = otherFieldValue?.length ? otherFieldValue : null;

			if (this.otherFieldValue && !this.field.multiple) {
				this.choiceValue.value = null;
			}
		},

		otherUpdated(otherFieldValue: OtherFieldValue): void {
			this.otherFieldValue = otherFieldValue?.length ? otherFieldValue : null;
			this.choiceValue.other = this.otherFieldValue;

			this.emitChangeEvent(this.choiceValue);
		}
	}
});
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
			@change="choiceUpdated"
		/>

		<template v-if="otherField">
			<VExpandTransition v-if="choiceSelected" hide-on-leave>
				<div v-if="showOtherTextareaField" class="vd-other-field mt-4">
					<h4 v-if="otherField.label" class="text-body-1 mb-1">
						{{ otherField.label }}
					</h4>

					<VTextarea
						ref="otherFieldRef"
						v-bind="otherField.fieldOptions"
						:model-value="otherFieldValue"
						:disabled="!otherActive"
						:rows="1"
						:error-messages="errorMessages.other"
						auto-grow
						variant="outlined"
						class="vd-form-input"
						@change="otherUpdated"
					/>
				</div>
			</VExpandTransition>

			<VTextField
				v-else
				v-bind="otherField.fieldOptions"
				:model-value="otherFieldValue"
				:background-color="otherFieldValue ? 'accent' : undefined"
				:dark="Boolean(otherFieldValue)"
				:error-messages="errorMessages.other"
				color="accent"
				dense
				variant="outlined"
				class="vd-form-input"
				@input="setOtherValue"
				@change="otherUpdated"
			/>
		</template>
	</div>
</template>
