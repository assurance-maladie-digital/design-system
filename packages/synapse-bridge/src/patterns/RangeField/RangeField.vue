<script lang="ts">
import { defineComponent } from "vue";

import { customizable } from "@/mixins/customizable";

import { locales } from "./locales";
import { config } from "./config";

enum RangeEnum {
	MIN = 0,
	MAX = 1,
}

export default defineComponent({
	mixins: [customizable(config)],
	props: {
		min: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: 0,
		},
		modelValue: {
			type: Array as () => number[] | null,
			default: null,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			locales,
			rangeValue: [] as number[],
		};
	},
	emits: ["update:modelValue"],
	watch: {
		modelValue: {
			handler(value: number[] | null): void {
				if (!value) {
					this.rangeValue = [this.min, this.max];

					return;
				}

				if (isNaN(value[RangeEnum.MIN]) || isNaN(value[RangeEnum.MAX])) {
					return;
				}

				this.rangeValue = value;
				this.rangeValue[RangeEnum.MIN] = Math.round(this.rangeValue[RangeEnum.MIN]);
				this.rangeValue[RangeEnum.MAX] = Math.round(this.rangeValue[RangeEnum.MAX]);
			},
			immediate: true,
			deep: true,
		},
	},
	computed: {
		minValue(): number {
			return Math.round(this.rangeValue[RangeEnum.MIN]);
		},
		maxValue(): number {
			return Math.round(this.rangeValue[RangeEnum.MAX]);
		},
		mobileVersion(): boolean {
			return this.$vuetify.display.name === "xs";
		},
	},
	methods: {
		updateMinValue(value: string): void {
			this.updateRange(RangeEnum.MIN, Number(value));
		},

		updateMaxValue(value: string): void {
			this.updateRange(RangeEnum.MAX, Number(value));
		},

		updateRange(index: RangeEnum, value: number): void {
			if (index === RangeEnum.MIN && value < this.min) {
				this.setRangeValue(RangeEnum.MIN, this.min);
				this.emitChangeEvent();

				return;
			}

			if (index === RangeEnum.MIN && value > this.rangeValue[RangeEnum.MAX]) {
				this.setRangeValue(RangeEnum.MIN, this.rangeValue[RangeEnum.MAX]);
				this.emitChangeEvent();

				return;
			}

			if (index === RangeEnum.MAX && value > this.max) {
				this.setRangeValue(RangeEnum.MAX, this.max);
				this.emitChangeEvent();

				return;
			}

			if (index === RangeEnum.MAX && value < this.rangeValue[RangeEnum.MIN]) {
				this.setRangeValue(RangeEnum.MAX, this.rangeValue[RangeEnum.MIN]);
				this.emitChangeEvent();

				return;
			}

			this.setRangeValue(index, value);
			this.emitChangeEvent();
		},

		setRangeValue(index: RangeEnum, value: number): void {
			this.rangeValue[index] = value;
		},

		emitChangeEvent(): void {
			this.$emit("update:modelValue", this.rangeValue);
		},
	},
});
</script>

<template>
	<div class="vd-range-field">
		<div
			:class="{ 'flex-column': mobileVersion }"
			class="d-flex flex-wrap max-width-none ma-n3"
		>
			<VTextField
				type="number"
				v-bind="options.textField"
				:modelValue="minValue"
				:label="locales.minLabel"
				:variant="outlined ? 'outlined' : undefined"
				inputmode="numeric"
				@update:modelValue="updateMinValue"
			/>
			<VTextField
				type="number"
				v-bind="options.textField"
				:modelValue="maxValue"
				:ripple="false"
				:label="locales.maxLabel"
				:variant="outlined ? 'outlined' : undefined"
				inputmode="numeric"
				@update:modelValue="updateMaxValue"
			/>
		</div>

		<VRangeSlider
			v-model="rangeValue"
			v-bind="options.rangeSlider"
			color="primary"
			:max="max"
			:min="min"
			@update:modelValue="emitChangeEvent"
		>
			<template #prepend>
				{{ min }}
			</template>

			<template #append>
				{{ max }}
			</template>
		</VRangeSlider>
	</div>
</template>
