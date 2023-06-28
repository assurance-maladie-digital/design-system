<template>
	<div class="vd-period-field d-flex flex-wrap max-width-none mx-n3">
		<DatePicker
			v-model="periodValue.from"
			v-bind="fieldOptionsFrom"
			:vuetify-options="fieldOptionsFrom"
			:outlined="outlined"
			:disabled="disabled"
			text-field-class="vd-period-field-picker flex-grow-1 mx-3"
			@change="dateUpdated"
		/>

		<DatePicker
			v-model="periodValue.to"
			v-bind="fieldOptionsTo"
			:vuetify-options="fieldOptionsTo || options.fieldOptions.to"
			:outlined="outlined"
			:disabled="disabled"
			:start-date="periodValue.from"
			text-field-class="vd-period-field-picker flex-grow-1 mx-3"
			@change="dateUpdated"
		/>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '@cnamts/vue-dot/src/patterns/DatePicker';

	import { PeriodValue } from './types';

	import { FieldComponent } from './mixins/fieldComponent';

	import { customizable, Options } from '../../mixins/customizable';
	import { config } from './config';

	const MixinsDeclaration = mixins(
		FieldComponent,
		customizable(config)
	);

	@Component<PeriodField>({
		components: {
			DatePicker
		},
		watch: {
			'field.value': {
				handler(value: PeriodValue | null): void {
					if (!value) {
						this.periodValue = {
							from: null,
							to: null
						};
					} else {
						this.periodValue = value;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class PeriodField extends MixinsDeclaration {
		periodValue = {} as PeriodValue;

		get fieldOptionsTo(): Options {
			const datePicker = {
				min: this.periodValue.from
			};

			const fieldOptionsTo = this.field.fieldOptions ? this.field.fieldOptions.to as Record<string, unknown> | undefined : this.options.fieldOptions.to;

			return {
				datePicker,
				...fieldOptionsTo
			};
		}

		get fieldOptionsFrom(): Options {
			return this.field.fieldOptions ? this.field.fieldOptions.from as unknown as Options : this.options.fieldOptions.from;
		}

		dateUpdated(): void {
			const fromGreaterThanTo = (
				this.periodValue.from &&
				this.periodValue.to &&
				new Date(this.periodValue.from) > new Date(this.periodValue.to)
			);

			if (fromGreaterThanTo) {
				this.periodValue.to = null;
			}

			this.$nextTick(() => {
				this.emitChangeEvent(this.periodValue);
			});
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-period-field :deep(.vd-period-field-picker) {
		max-width: $vd-input-medium;
	}
</style>
