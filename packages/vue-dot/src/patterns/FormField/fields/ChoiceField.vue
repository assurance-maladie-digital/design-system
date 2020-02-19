<template>
	<div>
		<!-- the select component -->
		<component
			:is="getField()"
			:value="typeSelectValue.value"
			:items="field.items"
			:metadata="fieldMetadata"
			:multiple="fieldMetadata && field.metadata.multiple"
			@change="typeSelectValue.value = $event"
		/>

		<!-- the other field -->
		<VTextarea
			v-if="showOtherField"
			v-model="typeSelectValue.other"
			outlined
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { IFieldMap } from '../mixins/fieldMap';

	import { TypeSelectValue, FieldItemValue } from '../types';

	import { deepCopy } from '../../../helpers/deepCopy';

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
					this.typeSelectValue = value || { value: null };
				},
				immediate: true,
				deep: true
			},
			typeSelectValue: {
				handler(value: TypeSelectValue) {
					this.emitChangeEvent(value);
				},
				deep: true
			}
		}
	})
	export default class ChoiceField extends FieldComponent {

		typeSelectValue: TypeSelectValue = { value: null, other: null };

			/** List all choice field components and their corresponding keys */
		selectFieldMap: IFieldMap = {
			select: 'ChoiceSelectField',
			autocomplete: 'ChoiceAutocompleteField',
			choiceButton: 'ChoiceButtonField',
			choiceSlider: 'ChoiceSliderField'
		};

		get showOtherField() {
			const choiceValue: ChoiceValue = this.typeSelectValue ? this.typeSelectValue.value : null;
			const selectedChoice: FieldItemValue = this.field.other ? this.field.other.selectedChoice : null;
			if (!selectedChoice || !choiceValue) {
				return false;
			}
			if (Array.isArray(choiceValue)) {
				return choiceValue.includes(selectedChoice);
			} else {
				return choiceValue === selectedChoice;
			}
		}

		/**
		 * Returns the field that correspond to the type in metadata or select By default
		 *
		 * @returns {string} The field
		 */
		getField(): string {
			const metadataType = this.field.metadata ? this.field.metadata.type as string : undefined;

			return metadataType ? this.selectFieldMap[metadataType] : this.selectFieldMap.select;
		}

		otherMetadata() {
			return this.field.other ? this.field.other.metadata : {};
		}
	}
</script>
