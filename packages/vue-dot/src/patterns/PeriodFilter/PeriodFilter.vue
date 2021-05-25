<template>
	<div
		class="vd-filter-period"
	>
		<DatePicker
			v-model="value[0]"
			label="Date de début"
			text-field-class="mr-4"
			outlined
			@change="fieldUpdate"
		/>

		<DatePicker
			v-model="value[1]"
			:start-date="value[1]"
			label="Date de fin"
			outlined
			@change="fieldUpdate"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { PeriodFilterValue } from './types';

	const Props = Vue.extend({
		props: {
			form: {
				type: Object as PropType<PeriodFilterValue>,
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
	export default class PeriodFilter extends MixinsDeclaration {
		// Locales
		locales = locales;

		value: string[] = [this.form.filter.startDate, this.form.filter.endDate];

		fieldUpdate() :void {
			const res = {
				filter: {
					startDate: this.form.filter.startDate,
					endDate: this.form.filter.endDate,
					value: {
						value: this.value
					}
				}
			};
			this.$nextTick(() => {
				this.$emit('change', res);
			});
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-filter {
			&-period {
				display: block
			}
		}
	}
</style>
