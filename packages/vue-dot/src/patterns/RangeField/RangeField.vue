<template>
	<div class="vd-range-field">
		<div
			:class="{ 'flex-column': mobileVersion }"
			class="d-flex flex-wrap max-width-none ma-n3"
		>
			<VTextField
				v-facade="mask"
				v-bind="options.textField"
				:value="minValue"
				:label="locales.minLabel"
				:outlined="outlined"
				inputmode="numeric"
				@change="updateMinValue"
			/>

			<VTextField
				v-facade="mask"
				v-bind="options.textField"
				:value="maxValue"
				:label="locales.maxLabel"
				:outlined="outlined"
				inputmode="numeric"
				@change="updateMaxValue"
			/>
		</div>

		<VRangeSlider
			v-model="rangeValue"
			v-bind="options.rangeSlider"
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

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { customizable } from '../../mixins/customizable';

	import { locales } from './locales';
	import { config } from './config';

	enum RangeEnum {
		MIN = 0,
		MAX = 1
	}

	const Props = Vue.extend({
		props: {
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 0
			},
			value: {
				type: Array as () => number[] | undefined,
				default: undefined
			},
			outlined: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<RangeField>({
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: number[] | null): void {
					if (!value) {
						this.rangeValue = [
							this.min,
							this.max
						];

						return;
					}

					if (isNaN(value[RangeEnum.MIN]) || isNaN(value[RangeEnum.MAX])) {
						return;
					}

					this.rangeValue = value;
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class RangeField extends MixinsDeclaration {
		locales = locales;

		mask = '-?#*';

		rangeValue: number[] = [];

		get minValue(): number {
			return this.rangeValue[RangeEnum.MIN];
		}

		get maxValue(): number {
			return this.rangeValue[RangeEnum.MAX];
		}

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.xs;
		}

		updateMinValue(value: string): void {
			this.updateRange(RangeEnum.MIN, Number(value));
		}

		updateMaxValue(value: string): void {
			this.updateRange(RangeEnum.MAX, Number(value));
		}

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
		}

		setRangeValue(index: RangeEnum, value: number): void {
			this.$set(this.rangeValue, index, value);
		}

		emitChangeEvent(): void {
			this.$emit('change', this.rangeValue);
		}
	}
</script>
