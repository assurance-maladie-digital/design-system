import { FieldMetadata } from './../types.d';
import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { Field, FieldValue } from '../types';
import { deepRemoveKeys } from '../../../../src/helpers/deepRemoveKeys';
import deepCopy from '../../../../src/helpers/deepCopy';

const Props = Vue.extend({
	props: {
		/** The field to display */
		field: {
			type: Object as PropType<Field>,
			required: true
		}
	}
});

/** Share code between field components */
@Component({
	model: {
		prop: 'field',
		event: 'change'
	}
})
export default class FieldComponent extends Props {
	get fieldMetadata() {
		return this.field.metadata;
	}

	/**
	 * Update the v-model by emitting 'change' event
	 *
	 * @param {FieldValue} value The updated field
	 * @returns {void}
	 */
	emitChangeEvent(value: FieldValue): void {

		const metadata = this.fieldMetadata ? this.clearErrorMessages(this.fieldMetadata) : null;

		const updatedField = {
			...this.field,
			metadata,
			value
		};

		// Emit in next tick to respect event order
		this.$nextTick(() => {
			this.$emit('change', updatedField);
		});
	}

	/**
	 * Clear all ErrorMessage in metadata
	 *
	 * @param {FieldMetadata} metadata The field metadata
	 * @returns {FieldMetadata} The new field metadata without errorMessages
	 */
	clearErrorMessages(metadata: FieldMetadata): FieldMetadata {
		return deepRemoveKeys(deepCopy(metadata), 'errorMessages');
	}
}
