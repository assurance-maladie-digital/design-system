import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

export enum RatingEnum {
	NUMBER = 'NumberPicker',
	STAR = 'StarsPicker',
	EMOTION = 'EmotionPicker'
}

const Props = Vue.extend({
	props: {
		itemLabels: {
			type: Array<string>,
			default: null
		},
		label: {
			type: String,
			required: true
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
			default: 0
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class RatingMixin extends MixinsDeclaration implements RatingMixinInterface {
	valueInternal= this.value;
	lengthInternal = this.length;
	readonlyInternal = false;

	getItemLabel(value: number): string {
		if (this.itemLabels === null || value === -1) {
			return '';
		}

		return this.itemLabels[value];
	}

	onDispatchValue(event: number): void {
		this.$emit('input', event);
	}

	lockField(value: number): void {
		this.readonlyInternal = true;
		this.valueInternal = value;
	}
}

export interface RatingMixinInterface extends Vue {
	onDispatchValue(event: number): void;
	lockField(event: number): void;
	getItemLabel(value: number): string;
}
