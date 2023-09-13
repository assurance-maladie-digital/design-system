<template>
	<div class="vd-period-field d-flex flex-wrap max-width-none ma-n2">
		<DatePicker
			v-model="periodValue.from"
			:vuetify-options="datePickerOptions.from"
			:outlined="outlined"
			:disabled="disabled"
			text-field-class="vd-period-field-picker flex-grow-1 ma-2"
			@change="dateUpdated"
		/>

		<DatePicker
			v-model="periodValue.to"
			:outlined="outlined"
			:disabled="disabled"
			:start-date="periodValue.from"
			:vuetify-options="toPickerOptions"
			text-field-class="vd-period-field-picker flex-grow-1 ma-2"
			@change="dateUpdated"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { customizable, Options } from '../../mixins/customizable';

	import { PeriodValue } from './types';
	import { config } from './config';
	import { locales } from './locales';

	import deepMerge from 'deepmerge';

	const Props = Vue.extend({
		props: {
			value: {
				type: Object as PropType<PeriodValue>,
				default: () => ({
					from: null,
					to: null
				})
			},
			outlined: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<PeriodField>({
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: PeriodValue): void {
					if (value) {
						this.periodValue = value;

						return;
					}

					this.periodValue = {
						from: null,
						to: null
					};

				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class PeriodField extends MixinsDeclaration {
		periodValue = {} as PeriodValue;

		errorMessages: string[] = [];

		get datePickerOptions(): Options {
			return deepMerge<Options>(config, this.options);
		}

		get toPickerOptions(): Options {
			const { to } = this.datePickerOptions;

			to.textField = {
				...to.textField,
				errorMessages: this.errorMessages
			};

			return to;
		}

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
		}

		emitChangeEvent(): void {
			this.$emit('change', this.periodValue);
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-period-field :deep(.vd-period-field-picker) {
		max-width: $vd-input-medium;
	}
</style>
