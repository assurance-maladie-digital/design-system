<template>
	<div class="vd-range-field">
		<div
			:class="{ 'flex-column': mobileVersion }"
			class="d-flex flex-wrap max-width-none ma-n3"
		>
			<VTextField
				:value="rangeValue[0]"
				:label="locales.minLabel"
				hide-details
				outlined
				class="ma-3"
				@input="updateMinValue"
			/>

			<VTextField
				:value="rangeValue[1]"
				:label="locales.maxLabel"
				hide-details
				outlined
				class="ma-3"
				@input="updateMaxValue"
			/>
		</div>

		<VRangeSlider
			v-model="rangeValue"
			:max="field.max"
			:min="field.min"
			hide-details
			class="align-center mt-2 mb-6"
			@change="emitChangeEvent(rangeValue)"
		>
			<template #prepend>
				{{ field.min }}
			</template>

			<template #append>
				{{ field.max }}
			</template>
		</VRangeSlider>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';

	enum RangeEnum {
		MIN = 0,
		MAX = 1
	}

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: undefined
			},
			required: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<RangeField>({
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: number[] | null): void {
					if (!value) {
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

		rangeValue: number[] = [];

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.xs;
		}

		updateMinValue(value: number): void {
			this.updateRange(RangeEnum.MIN, value);
		}

		updateMaxValue(value: number): void {
			this.updateRange(RangeEnum.MAX, value);
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
