import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { Field, FieldValue, FieldMetadata } from '../types';

import { deepCopy } from '../../../../src/helpers/deepCopy';
import { deepRemoveKeys } from '../../../../src/helpers/deepRemoveKeys';

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
export class FieldComponent extends Props {
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
		const metadata = this.fieldMetadata ? this.clearErrorMessages(deepCopy(this.fieldMetadata)) : undefined;

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
	 * Clear all ErrorMessages in metadata
	 *
	 * @param {FieldMetadata} metadata The field metadata
	 * @returns {FieldMetadata} The new field metadata without errorMessages
	 */
	clearErrorMessages(metadata: FieldMetadata): FieldMetadata {
		return deepRemoveKeys(metadata, 'errorMessages');
	}
}
