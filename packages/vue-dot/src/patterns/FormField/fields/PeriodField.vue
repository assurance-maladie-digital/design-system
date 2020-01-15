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
				:vuetify-options="field.metadata.from"
			/>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="periodValue.to"
				v-bind="field.metadata"
				:vuetify-options="metadataTo"
				:start-date="periodValue.from"
			/>
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DatePicker from '../../DatePicker';

	import FieldComponent from '../mixins/fieldComponent';

	import { PeriodValue } from '../types';

	import cloneDeep from 'lodash.clonedeep';

	/** Form date field to enter date */
	@Component<PeriodField>({
		components: {
			DatePicker
		},
		watch: {
			// lithen the current field value for the component
			'field.value': {
				handler(value: PeriodValue | null) {
					if (value) {
						this.periodValue = value;
					}
				},
				immediate: true,
				deep: true
			},
			// set the new component period value when once of the datePicker's value change
			periodValue: {
				handler(value: PeriodValue) {
					this.changeDate(value);
				},
				deep: true
			}
		}
	})
	export default class PeriodField extends FieldComponent {
		periodValue: PeriodValue = {
			from: null,
			to: null
		};

		get metadataTo() {
			const currentMetadata =
				this.field.metadata &&
				this.field.metadata.to ?
				this.field.metadata.to : {};

			return {
				...currentMetadata,
				datePicker: { min: this.periodValue.from }
			};
		}

		/** Emit the new value when started or ended date change */
		changeDate(value: PeriodValue) {
			// Reset the end date if selected start date greater
			if (
				value.from &&
				value.to &&
				new Date(value.from) > new Date(value.to)
			) {
				this.periodValue.to = null;
			}

			// set the new value of the field
			let field = cloneDeep(this.field);
			field.value = this.periodValue;

			this.$nextTick(() => {
				this.emitChangeEvent(field);
			});
		}
	}
</script>
