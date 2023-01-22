<template>
	<div class="vd-period-filter">
		<DatePicker
			v-model="internalValue.startDate"
			label="Date de début"
			class="mt-4"
			outlined
			@change="emitChangeEvent"
		/>

		<DatePicker
			v-model="internalValue.endDate"
			label="Date de fin"
			outlined
			@change="emitChangeEvent"
		/>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { PropType } from 'vue/types/v3-component-props';

	interface InternalValue {
		startDate: string;
		endDate: string;
	}

	const Props = Vue.extend({
		props: {
			value: {
				type: Object as PropType<InternalValue>,
				required: true
			}
		}
	});

	@Component<PeriodFilter>({
		watch: {
			value(newValue: InternalValue) {
				this.internalValue = newValue;
			}
		}
	})
	export default class PeriodFilter extends Props {
		internalValue: InternalValue = this.value;

		emitChangeEvent(): void {
			if (this.internalValue.startDate && this.internalValue.endDate) {
				this.$emit('change', this.internalValue);
			}
		}
	}
</script>

<style lang="scss">
.vd-period-filter {
	.v-text-field__details {
		display: none !important;
	}
}
</style>
