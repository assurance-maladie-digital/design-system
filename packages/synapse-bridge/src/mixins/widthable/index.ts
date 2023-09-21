import { PropType, defineComponent } from "vue";

import { IndexedObject } from "../../types";
import { convertToUnit } from "../../helpers/convertToUnit";

export type NumberOrNumberString = PropType<string | number | undefined>;

const Props = {
	props: {
		maxWidth: {
			type: [Number, String] as NumberOrNumberString,
			default: undefined,
		},
		minWidth: {
			type: [Number, String] as NumberOrNumberString,
			default: undefined,
		},
		width: {
			type: [Number, String] as NumberOrNumberString,
			default: "100%",
		},
	},
};

export const Widthable = defineComponent({
	mixins: [Props],
	props: Props.props,
	computed: {
		widthStyles(): IndexedObject<string | undefined> {
			const minWidth = convertToUnit(this.minWidth);
			const maxWidth = convertToUnit(this.maxWidth);
			const width = convertToUnit(this.width);

			return {
				minWidth,
				maxWidth,
				width,
			};
		},
	},
});
