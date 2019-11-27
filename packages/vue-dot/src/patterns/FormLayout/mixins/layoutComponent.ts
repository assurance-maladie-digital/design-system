import Vue from 'vue';
import Component from 'vue-class-component';

import { Field } from '../../FormField/types';

const Props = Vue.extend({
	props: {
		fields: {
			type: [Array, Object],
			required: true
		}
	}
});

/** Share code between layout components */
@Component
export default class LayoutComponent extends Props {
	// Stronger types
	fields!: Field[];

	getField(index: number) {
		return {
			field: this.fields[index]
		};
	}
}
