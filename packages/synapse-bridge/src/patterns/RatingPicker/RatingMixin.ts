import { defineComponent } from "vue";

export interface RatingMixinInterface {
	emitInputEvent(event: number): void;
}

export enum RatingEnum {
	EMOTION = "emotion",
	NUMBER = "number",
	STARS = "stars",
}

export const RATING_ENUM_VALUES = Object.values(RatingEnum);

const Props = {
	props: {
		label: {
			type: String,
			required: true,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		value: {
			type: Number,
			default: -1,
		},
	},
};

export const RatingMixin = defineComponent({
	mixins: [Props],
	emits: ["input"],
	methods: {
		emitInputEvent(value: number): void {
			this.$emit("input", value);
		},
	},
});
