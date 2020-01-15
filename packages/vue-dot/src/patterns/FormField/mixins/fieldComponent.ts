import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { Field, FieldValue } from '../types';

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
	/**
	 * Update the v-model by emitting 'change' event
	 *
	 * @param {FieldValue} value The updated field
	 * @returns {void}
	 */
	emitChangeEvent(value: FieldValue): void {
		const updatedField = {
			...this.field,
			value
		};

		// Emit in next tick to respect event order
		this.$nextTick(() => {
			this.$emit('change', updatedField);
		});
	}
}
