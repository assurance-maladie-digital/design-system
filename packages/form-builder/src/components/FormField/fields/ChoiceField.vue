<template>
	<div>
		<!-- The choice field component -->
		<component
			:is="choiceField"
			:value="choiceValue.value"
			:items="field.items"
			:options="fieldOptions"
			:multiple="field.multiple"
			@change="choiceUpdated"
		/>

		<!-- The other field -->
		<template v-if="otherField">
			<VExpandTransition
				v-if="choiceSelected"
				hide-on-leave
			>
				<div v-if="showOtherTextareaField">
					<h4
						v-if="otherField.label"
						class="mb-1 body-1"
					>
						{{ otherField.label }}
					</h4>

					<VTextarea
						ref="otherFieldRef"
						v-bind="otherField.fieldOptions"
						:value="otherFieldValue"
						:disabled="!otherActive"
						:rows="1"
						class="vd-form-input"
						auto-grow
						outlined
						@change="otherUpdated"
					/>
				</div>
			</VExpandTransition>

			<VTextField
				v-else
				v-bind="otherField.fieldOptions"
				:value="otherFieldValue"
				:background-color="otherFieldValue ? 'accent' : undefined"
				:dark="Boolean(otherFieldValue)"
				class="vd-form-input"
				color="accent"
				dense
				outlined
				@input="setOtherValue"
				@change="otherUpdated"
			/>
		</template>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { Refs } from '@cnamts/vue-dot/src/types';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { IFieldMap } from '../mixins/fieldMap';

	import { ChoiceValue, OtherFieldValue, ChoiceFieldValue, OtherField } from '../types';

	const MixinsDeclaration = mixins(FieldComponent);

	// We import them all because the form
	// can use any of them
	import ChoiceAutocompleteField from './ChoiceAutocompleteField.vue';
	import ChoiceSelectField from './ChoiceSelectField.vue';
	import ChoiceButtonField from './ChoiceButtonField.vue';
	import ChoiceSliderField from './ChoiceSliderField.vue';
	import TextareaField from './TextareaField.vue';

	/** List all fields and provide getField() function */
	@Component<ChoiceField>({
		components: {
			ChoiceAutocompleteField,
			ChoiceSelectField,
			ChoiceButtonField,
			ChoiceSliderField,
			TextareaField
		},
		watch: {
			'field.value': {
				handler(value: ChoiceValue) {
					if (!value) {
						this.choiceValue = {
							value: null
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
				deep: true
			}
		}
	})
	export default class ChoiceField extends MixinsDeclaration {
		// Extend $refs
		$refs!: Refs<{
			otherFieldRef: HTMLInputElement;
		}>;

		choiceValue = {} as ChoiceValue;

		otherFieldValue: OtherFieldValue = null;

		/** List all choice field components and their corresponding keys */
		selectFieldMap: IFieldMap = {
			select: 'ChoiceSelectField',
			choiceAutocomplete: 'ChoiceAutocompleteField',
			choiceButton: 'ChoiceButtonField',
			choiceSlider: 'ChoiceSliderField'
		};

		get otherField(): OtherField | undefined {
			return this.field.other;
		}

		/** Show the other field when there is a choice value corresponding to the other selectedChoice */
		get showOtherTextareaField(): boolean {
			const otherSelectedChoice = this.otherField?.selectedChoice;

			// Expect the otherfield will have a selectedChoice defined.
			if (!this.choiceSelected && !otherSelectedChoice) {
				return false;
			}

			const choiceFieldValue = this.choiceValue.value;

			// Expect the choiceField value as string equal to the selected choice
			if (choiceFieldValue === otherSelectedChoice) {
				return true;
			}

			// Otherwise, expect the choiceFieldValue as a array not empty
			if (!Array.isArray(choiceFieldValue) || !choiceFieldValue.length) {
				return false;
			}

			// Expect the choiceFieldValue's array contains the otherSelectedChoice
			if (choiceFieldValue.includes(otherSelectedChoice)) {
				return true;
			}

			return false;
		}

		get choiceSelected(): boolean {
			return this.otherField?.selectedChoice !== undefined && this.otherField?.selectedChoice !== null;
		}

		/**
		 * Check if the other field is active or not
		 *
		 * @returns {boolean} The other active status
		 */
		get otherActive(): boolean {
			const choiceFieldValue = this.choiceValue?.value;
			const selectedChoice = this.field.other?.selectedChoice;

			if (!this.choiceSelected) {
				return false;
			} else if (Array.isArray(choiceFieldValue)) {
				return choiceFieldValue.includes(selectedChoice);
			} else {
				return choiceFieldValue === selectedChoice;
			}
		}

		/**
		 * Returns the field that correspond to the type in metadata or select by default
		 *
		 * @returns {string} The choice field component name
		 */
		get choiceField(): string {
			const metadataType = this.field.fieldOptions?.type as string || undefined;

			return metadataType ? this.selectFieldMap[metadataType] : this.selectFieldMap.select;
		}

		/**
		 * Emit the new type select value when choice updated
		 *
		 * @param {ChoiceFieldValue} choiceFieldValue The new choice value selected
		 */
		choiceUpdated(choiceFieldValue: ChoiceFieldValue): void {
			this.choiceValue.value = choiceFieldValue;

			if (this.choiceValue.value && !this.otherField?.selectedChoice) {
				this.otherFieldValue = null;
			}

			if (this.otherActive) {
				// Focus the other field when activated
				this.$nextTick(() => this.$refs.otherFieldRef.focus());

				// Get the other local value when activated
				this.choiceValue.other = this.otherFieldValue;
			} else {
				this.choiceValue.other = null;
			}

			this.emitChangeEvent(this.choiceValue);
		}

		setOtherValue(otherFieldValue: OtherFieldValue): void {
			this.otherFieldValue = otherFieldValue?.length ? otherFieldValue : null;

			if (this.otherFieldValue && !this.field.multiple) {
				this.choiceValue.value = null;
			}
		}

		/**
		 * Emit the new type select value when other field updated
		 *
		 * @param {OtherFieldValue} otherFieldValue The new other local value
		 */
		otherUpdated(otherFieldValue: OtherFieldValue): void {
			this.otherFieldValue = otherFieldValue?.length ? otherFieldValue : null;
			this.choiceValue.other = this.otherFieldValue;

			this.emitChangeEvent(this.choiceValue);
		}
	}
</script>
