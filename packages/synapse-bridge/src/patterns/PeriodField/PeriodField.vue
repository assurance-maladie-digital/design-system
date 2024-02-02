<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import DatePicker from "@/patterns/DatePicker/DatePicker.vue";

import { customizable, Options } from "../../mixins/customizable";

import { PeriodValue } from "./types";
import { config } from "./config";
import { locales } from "./locales";

import deepMerge from "deepmerge";

export default defineComponent({
	components: {
		DatePicker
	},
	mixins: [customizable(config)],
	props: {
		value: {
			type: Object as PropType<PeriodValue>,
			default: () => ({
				from: null,
				to: null,
			}),
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	data() {
		return {
			periodValue: {} as PeriodValue,
			errorMessages: [] as string[],
			locales
		};
	},
	computed: {
		datePickerOptions(): Options {
			return deepMerge<Options>(config, this.options);
		},

		toPickerOptions(): Options {
			const { to } = this.datePickerOptions;

			to.textField = {
				...to.textField,
				errorMessages: this.errorMessages
			};

			return to;
		}
	},
	methods: {
		async dateUpdated(): Promise<void> {
			const fromGreaterThanTo = (
				this.periodValue.from &&
				this.periodValue.to &&
				new Date(this.periodValue.from) > new Date(this.periodValue.to)
			);

			if (fromGreaterThanTo) {
				this.errorMessages = [locales.greaterThanTo];
			} else {
				this.errorMessages = [];
			}

			if (!this.periodValue.from || !this.periodValue.to) {
				return;
			}

			await this.$nextTick();

			this.emitChangeEvent();
		},

		emitChangeEvent(): void {
			this.$emit('update:modelValue', this.periodValue);
		}
	},
});
</script>

<template>
	<div class="vd-period-field d-flex flex-wrap max-width-none ma-n2">
		<DatePicker
			:modelValue="periodValue.from"
			:vuetify-options="datePickerOptions.from"
			:variant="outlined ? 'outlined' : undefined"
			:disabled="disabled"
			text-field-class="vd-period-field-picker flex-grow-1 ma-2"
			@update:modelValue="dateUpdated"
		/>

		<DatePicker
			:modelValue="periodValue.to"
			:variant="outlined ? 'outlined' : undefined"
			:disabled="disabled"
			:start-date="periodValue.from"
			:vuetify-options="toPickerOptions"
			text-field-class="vd-period-field-picker flex-grow-1 ma-2"
			@update:modelValue="dateUpdated"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

.vd-period-field :deep(.vd-period-field-picker) {
	max-width: $vd-input-medium;
}
</style>
