<template>
	<div class="vd-filter-range">
		<VForm class="d-flex">
			<VCol
				cols="12"
				sm="6"
			>
				<VTextField
					v-model="rangeValue[0]"
					:label="minLabel"
					block
					outlined
					@change="emitChangeEvent(rangeValue)"
				/>
			</VCol>

			<VCol
				cols="12"
				sm="6"
			>
				<VTextField
					v-model="rangeValue[1]"
					:label="maxLabel"
					outlined
					@change="emitChangeEvent(rangeValue)"
				/>
			</VCol>
		</VForm>

		<VRangeSlider
			v-model="rangeValue"
			:max="field.max"
			:min="field.min"
			hide-details
			class="align-center mb-6"
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

	const MixinsDeclaration = mixins(FieldComponent);

	@Component<RangeField>({
		watch: {
			'field.value': {
				handler(value: number[] | null): void {
					if (!value) {
						this.rangeValue = [
							this.field.min as number,
							this.field.max as number
						];
					} else {
						this.rangeValue = value;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class RangeField extends MixinsDeclaration {
		rangeValue: number[] = [];

		get minLabel(): string {
			return this.field.fieldOptions?.minFieldLabel as string || locales.minLabel;
		}

		get maxLabel(): string {
			return this.field.fieldOptions?.maxFieldLabel as string || locales.maxLabel;
		}
	}
</script>
