<script lang="ts">
import { defineComponent } from "vue";

import { customizable } from "../../mixins/customizable";

import { locales } from "./locales";
import { config } from "./config";

enum RangeEnum {
	MIN = 0,
	MAX = 1,
}

import { useDisplay } from "vuetify";

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
		value: {
			type: Array as () => number[] | undefined,
			default: undefined,
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
	emits: ["change"],
	watch: {
		value: {
			handler(value: number[] | null): void {
				if (!value) {
					this.rangeValue = [this.min, this.max];

					return;
				}

				this.rangeValue = value;
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
			const { name } = useDisplay();
			return name.value === "xs";
		},
	},
	methods: {
		updateMinValue(value: number): void {
			this.updateRange(RangeEnum.MIN, Number(value));
		},

		updateMaxValue(value: number): void {
			this.updateRange(RangeEnum.MAX, Number(value));
		},

		updateRange(index: RangeEnum, value: number): void {
			const [min, max] = this.rangeValue;

			if (value < min) {
				this.setRangeValue(RangeEnum.MIN, value);
			}

			if (value > max) {
				this.setRangeValue(RangeEnum.MAX, value);
			}

			this.setRangeValue(index, value);
			this.emitChangeEvent();
		},

		setRangeValue(index: RangeEnum, value: number): void {
			this.rangeValue[index] = value;
		},

		emitChangeEvent(): void {
			this.$emit("change", this.rangeValue);
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
				v-bind="options.textField"
				:modelValue="minValue"
				:label="locales.minLabel"
				:variant="outlined ? 'outlined' : undefined"
				@update:modelValue="updateMinValue"
			/>

			<VTextField
				v-bind="options.textField"
				:modelValue="maxValue"
				:label="locales.maxLabel"
				:variant="outlined ? 'outlined' : undefined"
				@update:modelValue="updateMaxValue"
			/>
		</div>

		<VRangeSlider
			v-model="rangeValue"
			v-bind="options.rangeSlider"
			color="primary"
			:max="max"
			:min="min"
			@change="emitChangeEvent"
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
