import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

export enum RatingEnum{
	NUMBER='NumberPicker',
	STAR='StarsPicker',
}
const Props = Vue.extend({
	props: {
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
export class RatingMixin extends MixinsDeclaration {
	valueInternal= this.value;
	lengthInternal = this.length;
	readonlyInternal = false;

	onDispatchValue(event: number): void {
		this.$emit('input', event);
	}
}
