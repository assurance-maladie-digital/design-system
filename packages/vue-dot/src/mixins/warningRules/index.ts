import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { ValidationRule } from '../../rules/types';

const Props = Vue.extend({
	props: {
		/** An array of rules (same syntax as Vuetify ones) */
		warningRules: {
			type: Array as PropType<ValidationRule[]>,
			default: () => []
		}
	}
});

const MixinsDeclaration = mixins(Props);

/**
 * Add warning rules: same as Vuetify rules,
 * but that does not block validation
 */
@Component
export class WarningRules extends MixinsDeclaration {
	/**
	 * The messages from warningRules.
	 * Not used if already passed as a prop*
	 *
	 * We use the success-messages prop on the TextField
	 * and custom styles to make it look like a warning
	 */
	successMessages: string[] = [];

	/** Custom validation for warningRules */
	validate(value: string): void {
		// Reset messages
		this.successMessages = [];

		this.warningRules.forEach((rule) => {
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
