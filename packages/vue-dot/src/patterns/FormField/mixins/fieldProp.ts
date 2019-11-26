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
}
