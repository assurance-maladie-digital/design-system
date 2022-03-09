import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { ValidationRule } from '../../rules/types';

const Props = Vue.extend({
	props: {
		warningRules: {
			type: Array as PropType<ValidationRule[]>,
			default: () => []
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class WarningRules extends MixinsDeclaration {
	// Warning rules are the same as Vuetify rules but does not prevent validation
	// We use the success-messages prop on the TextField and
	// custom styles to make it look like a warning
	successMessages: string[] = [];

	validate(value: string): void {
		this.successMessages = [];

		this.warningRules.forEach((rule) => {
			const result = rule(value);

			if (typeof result === 'string') {
				this.successMessages.push(result);
			}
		});
	}
}
