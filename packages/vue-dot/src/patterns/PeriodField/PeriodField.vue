<template>
	<div>
		<DatePicker
			v-model="internalValue[0]"
			label="Date de début"
			outlined
			text-field-class="mb-2"
			@change="emitChangeEvent(internalValue)"
		/>

		<DatePicker
			v-model="internalValue[1]"
			label="Date de fin"
			outlined
			@change="emitChangeEvent(internalValue)"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { PropType } from 'vue/types/v3-component-props';

	import dayjs from 'dayjs';
	const DATE_FORMAT = 'DD/MM/YYYY';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<string[]>,
				default: () => []
			}
		}
	});

	@Component<PeriodField>({ // TODO: refactor & doc
		watch: {
			value(newValue: string[]) {
				this.internalValue = newValue;
			}
		}
	})
	export default class PeriodField extends Props {
		internalValue: string[] = this.value;

		emitChangeEvent(internalValue: string[]): void {
			if (internalValue[0] && internalValue[1]) {
				this.$emit('input', [dayjs(internalValue[0]).format(DATE_FORMAT), dayjs(internalValue[1]).format(DATE_FORMAT)]);
			}
		}
	}
</script>
