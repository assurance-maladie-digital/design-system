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

@Component({
	// In the field components we do v-bind="$props",
	// so we can disable default attribute inheritance
	inheritAttrs: false
})
export default class FieldProp extends Props {
	// Stronger types
	field!: Field;

	/**
	 * Update the v-model by emitting 'change' event
	 * Also emits 'refresh' event if the field is dynamic
	 */
	emitChangeEvent(field: Field) {
		this.$nextTick(() => {
			this.$parent.$emit('change', field);
		});

		// // If the field has the `dynamic` property
		// if (field.dynamic) {
		// 	// Also emit 'refresh' event
		// 	this.$emit('refresh');
		// }
	}
}
