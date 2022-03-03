import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

const Props = Vue.extend({
	props: {
		mask: {
			type: [String, Boolean],
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class MaskValue extends MixinsDeclaration {
	// DatePicker mixin
	dateFormat!: string;

	get maskValue(): string | undefined {
		if (this.mask === false) {
			return undefined;
		}

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
