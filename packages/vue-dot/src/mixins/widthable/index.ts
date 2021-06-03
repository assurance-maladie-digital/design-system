import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { convertToUnit } from '../../helpers/convertToUnit';

export type NumberOrNumberString = PropType<string | number | undefined>;

const Props = Vue.extend({
	props: {
		maxWidth: {
			type: [Number, String] as NumberOrNumberString,
			default: undefined
		},
		minWidth: {
			type: [Number, String] as NumberOrNumberString,
			default: undefined
		},
		width: {
			type: [Number, String] as NumberOrNumberString,
			default: '100%'
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class Widthable extends MixinsDeclaration {
	get widthStyles(): Record<string, string> {
		const styles: Record<string, string> = {};

		const minWidth = convertToUnit(this.minWidth);
		const maxWidth = convertToUnit(this.maxWidth);
		const width = convertToUnit(this.width);

		if (minWidth) {
			styles.minWidth = minWidth;
		}

		if (maxWidth) {
			styles.maxWidth = maxWidth;
		}

		if (width) {
			styles.width = width;
		}

		return styles;
	}
}
