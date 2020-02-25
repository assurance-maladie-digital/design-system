<template>
	<div>
		<!-- the choice field component -->
		<component
			:is="getField()"
			:value="typeSelectValue.value"
			:items="field.items"
			:metadata="fieldMetadata"
			:multiple="fieldMetadata && fieldMetadata.multiple"
			@change="choiceUpdated"
		/>

		<!-- the other field -->
		<template v-if="otherField">
			<h4 class="mb-1 body-1">
				{{ otherField.label }}
			</h4>
			<VTextarea
				ref="otherFieldRef"
				:value="otherlocalValue"
				v-bind="otherField.metadata"
				:disabled="!isOtherActive"
				outlined
				@change="otherUpdated"
			/>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { IFieldMap } from '../mixins/fieldMap';

	import { Refs } from '../../../types';

	import { TypeSelectValue, FieldItemValue, OtherValue, ChoiceValue } from '../types';

	interface HTMLInputEvent extends Event {
		target: HTMLInputElement & EventTarget;
	}

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
				handler(value: TypeSelectValue) {
					this.typeSelectValue = value || this.typeSelectValue;

					// Set the active status
					this.isOtherActive = this.getOtherActive();

					/**
					 * Set the other local value if the remote other value is not null
					 * to keep the local value up for the user
					 */
					if(this.typeSelectValue && this.typeSelectValue.other) {
						this.otherlocalValue = this.typeSelectValue.other;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class ChoiceField extends FieldComponent {
		// Extend $refs
		$refs!: Refs<{
			otherFieldRef: HTMLInputElement;
		}>;
		typeSelectValue: TypeSelectValue = { value: null };

		isOtherActive: Boolean = false;
		otherlocalValue: OtherValue = null;

		/** List all choice field components and their corresponding keys */
		selectFieldMap: IFieldMap = {
			select: 'ChoiceSelectField',
			autocomplete: 'ChoiceAutocompleteField',
			choiceButton: 'ChoiceButtonField',
			choiceSlider: 'ChoiceSliderField'
		};

		get otherField() {
			return this.field.other;
		}

		/**
		 * Check if the other field is active or not
		 *
		 * @returns {boolean} The other active status
		 */
		getOtherActive(): boolean {
			const choiceValue: ChoiceValue = this.typeSelectValue ? this.typeSelectValue.value : null;
			const selectedChoice: FieldItemValue = this.field.other ? this.field.other.selectedChoice : null;
			if (!selectedChoice || !choiceValue) {
				return false;
			} else if (Array.isArray(choiceValue)) {
				return choiceValue.includes(selectedChoice);
			} else {
				return choiceValue === selectedChoice;
			}
		}

		/**
		 * Returns the field that correspond to the type in metadata or select By default
		 *
		 * @returns {string} The choice field component name
		 */
		getField(): string {
			const metadataType = this.field.metadata ? this.field.metadata.type as string : undefined;

			return metadataType ? this.selectFieldMap[metadataType] : this.selectFieldMap.select;
		}

		/**
		 * Emit the new type select value when choice updated
		 *
		 * @param {ChoiceValue} choiceValue The new choice value selected
		 */
		choiceUpdated(choiceValue: ChoiceValue): void {
			this.typeSelectValue.value = choiceValue;

			this.isOtherActive = this.getOtherActive();

			if (this.isOtherActive) {
				// Focus the other field when activated
				this.$nextTick(() => this.$refs.otherFieldRef.focus());

				// Get the other local value when activated
				this.typeSelectValue.other = this.otherlocalValue;
			} else {
				this.typeSelectValue.other = null;
			}

			this.emitChangeEvent(this.typeSelectValue);
		}

		/**
		 * Emit the new type select value when other field updated
		 *
		 * @param {OtherValue} otherlocalValue The new other local value
		 */
		otherUpdated(otherlocalValue: OtherValue): void {
			this.typeSelectValue.other = otherlocalValue;

			this.emitChangeEvent(this.typeSelectValue);
		}
	}
</script>
