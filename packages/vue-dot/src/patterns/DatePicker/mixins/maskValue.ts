import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
	props: {
		/**
		 * Custom mask string.
		 * By default it's computed from dateFormat
		 *
		 * If false is passed, don't apply a mask
		 */
		mask: {
			type: [String, Boolean],
			default: undefined
		}
	}
});

/** */
@Component
export default class MaskValue extends Props {
	/** DatePicker.dateFormat */
	dateFormat!: string;

	/**
	 * Return the mask to apply to the TextField
	 *
	 * @example
	 * '##/##/####' for default dateFormat
	 */
	get maskValue() {
		// If the mask is false, don't apply mask
		if (this.mask === false) {
			// Undefined is the default value for mask property
			return undefined;
		}

		// If a mask is specified by the user, use it
		if (typeof this.mask === 'string') {
			return this.mask;
		}

		// Else, compute the mask from dateFormat

		// Match every letter, case insensitive
		const regexp = /[a-z]/gmi;

		// Replace every letter by # (in Vuetify masks, # matches any digit)
		return this.dateFormat.replace(regexp, '#');
	}
}
