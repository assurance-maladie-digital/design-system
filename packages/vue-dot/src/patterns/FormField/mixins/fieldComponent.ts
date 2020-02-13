import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { Field, FieldValue, FieldOptions } from '../types';

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
	get fieldOptions() {
		return this.field.fieldOptions;
	}

	/**
	 * Update the v-model by emitting 'change' event
	 *
	 * @param {FieldValue} value The updated field
	 * @returns {void}
	 */
	emitChangeEvent(value: FieldValue): void {
		const fieldOptions = this.fieldOptions ? this.clearErrorMessages(deepCopy(this.fieldOptions)) : undefined;

		const updatedField = {
			...this.field,
			fieldOptions,
			value
		};

		// Emit in next tick to respect event order
		this.$nextTick(() => {
			this.$emit('change', updatedField);
		});
	}

	/**
	 * Clear all ErrorMessages in fieldOptions
	 *
	 * @param {FieldOptions} fieldOptions The field fieldOptions
	 * @returns {FieldOptions} The new field fieldOptions without errorMessages
	 */
	clearErrorMessages(fieldOptions: FieldOptions): FieldOptions {
		return deepRemoveKeys(fieldOptions, 'errorMessages');
	}
}
