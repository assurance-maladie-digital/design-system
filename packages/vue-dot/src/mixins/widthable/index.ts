import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { IndexedObject } from '../../types';
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
	get widthStyles(): IndexedObject<string | undefined> {
		const minWidth = convertToUnit(this.minWidth);
		const maxWidth = convertToUnit(this.maxWidth);
		const width = convertToUnit(this.width);

		return {
			minWidth,
			maxWidth,
			width
		};
	}
}
