<template>
	<div class="vd-filter-range">
		<VForm class="d-flex">
			<VCol
				cols="12"
				sm="6"
			>
				<VTextField
					v-model="rangeValue[0]"
					block
					:label="field.fieldOptions.minFieldLabel || 'Valeur min'"
					outlined
					@change="fieldUpdate"
				/>
			</VCol>

			<VCol
				cols="12"
				sm="6"
			>
				<VTextField
					v-model="rangeValue[1]"
					:label="field.fieldOptions.maxFieldLabel || 'Valeur max'"
					outlined
					@change="fieldUpdate"
				/>
			</VCol>
		</VForm>

		<VRangeSlider
			v-model="rangeValue"
			:max="field.max"
			:min="field.min"
			hide-details
			class="align-center mb-6"
			@change="fieldUpdate"
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

	const MixinsDeclaration = mixins(FieldComponent);

	@Component<RangeField>({
		watch: {
			'field.value': {
				handler(value: number[] | null): void {
					if (value) {
						this.rangeValue = value;
					} else {
						this.rangeValue =[this.field.min as number, this.field.max as number];
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class RangeField extends MixinsDeclaration {
		rangeValue: number[] = [];

		fieldUpdate(): void {
			this.$nextTick(() => {
				this.emitChangeEvent(this.rangeValue);
			});
		}
	}
</script>
