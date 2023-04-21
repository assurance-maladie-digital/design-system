import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

export interface RatingMixinInterface extends Vue {
	onDispatchValue(event: number): void;
	lockField(event: number): void;
	getItemLabel(value: number): string;
}

export enum RatingEnum {
	NUMBER = 'NumberPicker',
	STAR = 'StarsPicker',
	EMOTION = 'EmotionPicker'
}

export const RATING_ENUM_VALUES = Object.values(RatingEnum);

const Props = Vue.extend({
	props: {
		itemLabels: {
			type: Array as PropType<string[]>,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		length: {
			type: Number,
			default: 5
		},
		readonly: {
			type: Boolean,
			default: false
		},
		value: {
			type: Number,
			default: -1
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class RatingMixin extends MixinsDeclaration implements RatingMixinInterface {
	valueInternal = this.value; // TODO: Check repeated updates
	lengthInternal = this.length; // TODO: Idem
	readonlyInternal = false;

	getItemLabel(value: number): string {
		if (this.itemLabels === null || value === -1) {
			return '';
		}

		return this.itemLabels[value];
	}

	onDispatchValue(event: number): void {
		this.valueInternal = event;
		this.$emit('input', event);
	}

	lockField(value: number): void {
		this.readonlyInternal = true;
		this.valueInternal = value ;
	}
}
