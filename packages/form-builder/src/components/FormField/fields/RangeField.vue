<template>
	<div
		class="vd-filter-range"
	>
		<vForm class="d-flex">
			<vCol
				cols="12"
				sm="6"
			>
				<vTextField
					v-model="rangeValue[0]"
					block
					label="Valeur min"
					outlined
					@change="fieldUpdate"
				/>
			</vCol>
			<vCol
				cols="12"
				sm="6"
			>
				<vTextField
					v-model="rangeValue[1]"
					label="Valeur max"
					outlined
					@change="fieldUpdate"
				/>
			</vCol>
		</vForm>
		<vRangeSlider
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
		</vRangeSlider>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	// import { RangeValue } from '../types';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form field to enter text */
	@Component<RangeField>({
		watch: {
			// Listen the current field value for the component
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
		rangeValue : number[] = [];

		fieldUpdate() :void {
			this.$nextTick(() => {
				this.emitChangeEvent(this.rangeValue);
			});
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-filter {
			&-range {
				display: block;
			}
		}
	}
</style>
