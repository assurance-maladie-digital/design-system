import Vue from 'vue';
import Component from 'vue-class-component';

import { Field } from '../types';

const Props = Vue.extend({
	props: {
		field: {
			type: [Array, Object],
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
	// Stronger types
	field!: Field;

	/** Update the v-model by emitting 'change' event */
	emitChangeEvent(field: Field) {
		this.$nextTick(() => {
			this.$parent.$emit('change', field);
		});
	}
}
