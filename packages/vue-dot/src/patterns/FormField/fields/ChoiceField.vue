<template>
	<div>
		<!-- the select component -->
		<component
			:is="getField()"
			:value="typeSelectValue.value"
			:items="field.items"
			:metadata="fieldMetadata"
			:multiple="fieldMetadata && fieldMetadata.multiple"
			@change="typeSelectValue.value = $event"
		/>

		<!-- the other field -->
		<template v-if="otherField">
			<h4 class="mb-1 body-1">
				{{ otherField.label }}
			</h4>
			<VTextarea
				ref="otherField"
				:value="typeSelectValue.other"
				v-bind="otherField.metadata"
				:disabled="isOtherFieldDisabled"
				outlined
				@change="typeSelectValue.other = $event"
			/>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { IFieldMap } from '../mixins/fieldMap';

	import { TypeSelectValue, FieldItemValue, ChoiceValue } from '../types';

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
			},
			isOtherFieldDisabled(newValue) {
				if (!newValue) {
					this.$nextTick(() => this.$refs.otherField.focus());
				}
			}
		}
	})
	export default class ChoiceField extends FieldComponent {

		typeSelectValue: TypeSelectValue = { value: null };

		/** List all choice field components and their corresponding keys */
		selectFieldMap: IFieldMap = {
			select: 'ChoiceSelectField',
			autocomplete: 'ChoiceAutocompleteField',
			choiceButton: 'ChoiceButtonField',
			choiceSlider: 'ChoiceSliderField'
		};

		/** Check if the other field is disable or not */
		get isOtherFieldDisabled() {
			const choiceValue: ChoiceValue = this.typeSelectValue ? this.typeSelectValue.value : null;
			const selectedChoice: FieldItemValue = this.field.other ? this.field.other.selectedChoice : null;
			if (!selectedChoice || !choiceValue) {
				return true;
			} else if (Array.isArray(choiceValue)) {
				return !choiceValue.includes(selectedChoice);
			} else {
				return choiceValue !== selectedChoice;
			}
		}

		get otherField() {
			return this.field.other;
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
	}
</script>
