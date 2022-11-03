<template>
	<div>
		<DatePicker
			v-model="internalValue.startDate"
			label="date début"
			@change="emitChangeEvent"
		/>

		<DatePicker
			v-model="internalValue.endDate"
			label="date fin"
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

	@Component<RangeFilter>({
		watch: {
			value(newValue: InternalValue) {
				this.internalValue = newValue;
			}
		}
	})
	export default class RangeFilter extends Props {
		internalValue: InternalValue = this.value;

		emitChangeEvent(): void {
			if (this.internalValue.startDate && this.internalValue.endDate) {
				this.$emit('change', this.internalValue);
			}
		}
	}
</script>
