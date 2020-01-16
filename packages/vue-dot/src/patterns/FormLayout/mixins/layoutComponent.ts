import Vue, { PropType } from 'vue';
import Component from 'vue-class-component';

import { Field } from '../../FormField/types';

const Props = Vue.extend({
	props: {
		/** List of fields the layout can use */
		fields: {
			type: Array as PropType<Field[]>,
			required: true
		}
	}
});

/** Share code between layout components */
@Component
export default class LayoutComponent extends Props {
	/**
	 * Get a field by it's index in fields array
	 *
	 * @param {number} index The index in the fields array
	 * @returns {Field} The field
	 */
	getField(index: number): Field {
		return this.fields[index];
	}
}
