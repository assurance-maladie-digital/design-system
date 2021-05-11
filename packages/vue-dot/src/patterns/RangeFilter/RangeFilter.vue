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
					v-model="value[0]"
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
					v-model="value[1]"
					label="Valeur max"
					outlined
					@change="fieldUpdate"
				/>
			</vCol>
		</vForm>
		<vRangeSlider
			v-model="value"
			:max="form.filter.max"
			:min="form.filter.min"
			hide-details
			class="align-center mb-6"
		>
			<template #prepend>
				{{ form.filter.min }}
			</template>
			<template #append>
				{{ form.filter.max }}
			</template>
		</vRangeSlider>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { RangeFilterValue } from './types';

	const Props = Vue.extend({
		props: {
			form: {
				type: Object as PropType<RangeFilterValue>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		customizable(config)
	);

	@Component({
		model: {
			prop: 'form',
			event: 'change'
		}
	})
	export default class RangeFilter extends MixinsDeclaration {
		// Locales
		locales = locales;

		value : number[] = [this.form.filter.min, this.form.filter.max];

		fieldUpdate() :void {
			const res = {
				filter: {
					min: this.form.filter.min,
					max: this.form.filter.max,
					value: {
						value: this.value
					}
				}
			};
			this.$nextTick(() => {
				this.$emit('change', 'range updated');
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
