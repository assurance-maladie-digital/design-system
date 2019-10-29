import Vue from 'vue';
import Component from 'vue-class-component';

import { ValidationRule } from '../rules/types';

const Props = Vue.extend({
	props: {
		/** An array of rules (same syntax as Vuetify ones) */
		warningRules: {
			type: [Array, Object],
			default: () => []
		}
	}
});

/**
 * Add warning rules: same as Vuetify rules,
 * but that does not block validation
 */
@Component
export default class WarningRules extends Props {
	/**
	 * The messages from warningRules.
	 * Not used if already passed as a prop*
	 *
	 * We use the success-messages prop on the TextField
	 * and custom styles to make it look like a warning
	 */
	successMessages: string[] = [];

	/** Custom validation for warningRules */
	validate(value: string) {
		// Reset messages
		this.successMessages = [];

		this.warningRules.forEach((rule: ValidationRule) => {
			/** The result of the validation rule */
			const result = rule(value);

			// If it's a string, push it to successMessages
			// If it's a boolean we don't do anything
			if (typeof result === 'string') {
				this.successMessages.push(result);
			}
		});
	}
}
