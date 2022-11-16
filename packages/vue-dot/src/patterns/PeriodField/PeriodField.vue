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
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

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

	@Component<PeriodField>({
		watch: {
			value(newValue: InternalValue) {
				this.internalValue = newValue;
			}
		}
	})
	export default class PeriodField extends Props {
		internalValue: InternalValue = this.value;

		emitChangeEvent(): void {
			if (this.internalValue.startDate && this.internalValue.endDate) {
				this.$emit('change', this.internalValue);
			}
		}
	}
</script>
