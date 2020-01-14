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
				:vuetify-options="metadataTo"
				:start-date="periodValue.from"
				@change="changeDate"
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

	/** Form date field to enter date */
	@Component({
		components: {
			DatePicker
		}
	})
	export default class PeriodField extends FieldComponent {
		periodValue: PeriodValue = {
			from: undefined,
			to: undefined
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
		changeDate() {
			// Reset the end date if selected start date greater
			if (
				this.periodValue.from &&
				this.periodValue.to &&
				new Date(this.periodValue.from) > new Date(this.periodValue.to)
			) {
				this.periodValue.to = undefined;
			}

			this.field.value = this.periodValue;
			this.emitChangeEvent(this.field);
		}
	}
</script>
