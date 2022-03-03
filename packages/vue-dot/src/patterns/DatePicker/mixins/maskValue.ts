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
			return;
		}

		if (typeof this.mask === 'string') {
			return this.mask;
		}

		return this.dateFormat.replace(/[a-z]/gmi, '#');
	}
}
