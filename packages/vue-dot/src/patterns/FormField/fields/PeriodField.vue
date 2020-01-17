<template>
	<VLayout
		wrap
		row
		class="ma-n3"
	>
		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="periodValue.from"
				v-bind="field.metadata"
				:vuetify-options="getVuetifyOptions(field.metadata.from)"
				@change="changeDate"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="periodValue.to"
				v-bind="field.metadata"
				:vuetify-options="getVuetifyOptions(metadataTo)"
				:start-date="periodValue.from"
				@change="changeDate"
			/>
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '../../DatePicker';

	import { PeriodValue } from '../types';

	import FieldComponent from '../mixins/fieldComponent';
	import DatePickerOptions from '../mixins/datePickerOptions';

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

			return {
				datePicker,
				...this.field.metadata.to
			};
		}

		/** Emit the new value when started or ended date change */
		changeDate() {
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
