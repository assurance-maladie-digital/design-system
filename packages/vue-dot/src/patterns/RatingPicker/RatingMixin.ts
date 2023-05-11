import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

export interface RatingMixinInterface extends Vue {
	emitInputEvent(event: number): void;
}

export enum RatingEnum {
	EMOTION = 'emotion',
	NUMBER = 'number',
	STARS = 'stars'
}

export const RATING_ENUM_VALUES = Object.values(RatingEnum);

const Props = Vue.extend({
	props: {
		label: {
			type: String,
			required: true
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

@Component({
	model: {
		prop: 'value',
		event: 'input'
	}
})
export class RatingMixin extends MixinsDeclaration implements RatingMixinInterface {
	emitInputEvent(value: number): void {
		this.$emit('input', value);
	}
}
