<template>
	<VLayout
		wrap
		row
		class="vd-form-input-xl ma-n3"
	>
		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="periodValue.from"
				v-bind="metadataFrom"
				:vuetify-options="getVuetifyOptions(metadataFrom)"
				@change="dateUpdated"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="periodValue.to"
				v-bind="metadataTo"
				:vuetify-options="getVuetifyOptions(metadataTo)"
				:start-date="periodValue.from"
				@change="dateUpdated"
			/>
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '@cnamts/vue-dot/src/patterns/DatePicker';

	import { PeriodValue } from '../types';

	import { FieldComponent } from '../mixins/fieldComponent';
	import { DatePickerOptions } from '../mixins/datePickerOptions';

	const MixinsDeclaration = mixins(FieldComponent, DatePickerOptions);

	/** Form period field to enter a period */
	@Component<PeriodField>({
		components: {
			DatePicker
		},
		watch: {
			// Listen the current field value for the component
			'field.value': {
				handler(value: PeriodValue | null) {
					if (value) {
						this.periodValue = value;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class PeriodField extends MixinsDeclaration {
		periodValue: PeriodValue = {
			from: null,
			to: null
		};

		get metadataTo() {
			const datePicker = {
				min: this.periodValue.from
			};

			const metadataTo = this.field.metadata ? this.field.metadata.to : undefined;

			return {
				datePicker,
				...metadataTo
			};
		}

		get metadataFrom() {
			return this.field.metadata ? this.field.metadata.from : undefined;
		}

		/** Emit the new value when started or ended date change */
		dateUpdated() {
			// Reset the end date if selected start date greater
			if (
				this.periodValue.from &&
				this.periodValue.to &&
				new Date(this.periodValue.from) > new Date(this.periodValue.to)
			) {
				this.periodValue.to = null;
			}

			this.$nextTick(() => {
				this.emitChangeEvent(this.periodValue);
			});
		}
	}
</script>
