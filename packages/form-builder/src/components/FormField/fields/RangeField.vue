<template>
	<div class="vd-filter-range">
		<div
			:class="{ 'flex-column': isMobile }"
			class="d-flex flex-wrap max-width-none ma-n3"
		>
			<VTextField
				:value="rangeValue[0]"
				:label="minLabel"
				hide-details
				outlined
				class="ma-3"
				@input="updateMinValue"
			/>

			<VTextField
				:value="rangeValue[1]"
				:label="maxLabel"
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
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	const locales = {
		minLabel: 'Valeur min',
		maxLabel: 'Valeur max'
	};

	enum RANGE_ENUM {
		MIN = 0,
		MAX = 1
	}

	const MixinsDeclaration = mixins(FieldComponent);

	@Component<RangeField>({
		watch: {
			'field.value': {
				handler(value: number[] | null): void {
					if (!value) {
						this.rangeValue = this.defaultValue;
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
		rangeValue: number[] = [];

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.xs;
		}

		get minLabel(): string {
			return this.field.fieldOptions?.minFieldLabel as string || locales.minLabel;
		}

		get maxLabel(): string {
			return this.field.fieldOptions?.maxFieldLabel as string || locales.maxLabel;
		}

		get defaultValue(): number[] {
			const { min, max } = this.field;

			return [
				min || 0,
				max || 0
			];
		}

		updateMinValue(value: number): void {
			this.updateRange(RANGE_ENUM.MIN, value);
		}

		updateMaxValue(value: number): void {
			this.updateRange(RANGE_ENUM.MAX, value);
		}

		updateRange(index: RANGE_ENUM, value: number): void {
			const [ min, max ] = this.rangeValue;

			if (value < min) {
				this.setRangeValue(RANGE_ENUM.MIN, value);
			}

			if (value > max) {
				this.setRangeValue(RANGE_ENUM.MAX, value);
			}

			this.setRangeValue(index, value);
			this.emitChangeEvent(this.rangeValue);
		}

		setRangeValue(index: RANGE_ENUM, value: number): void {
			this.$set(this.rangeValue, index, value);
		}
	}
</script>
