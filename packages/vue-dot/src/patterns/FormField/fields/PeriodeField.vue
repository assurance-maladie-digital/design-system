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
				v-model="periodeValue.from"
				date-format-return="YYYY-MM-DD"
				v-bind="field.metadata"
				:vuetify-options="field.metadata.from"
				@change="changeDate()"
			/>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<DatePicker
				v-model="periodeValue.to"
				date-format-return="YYYY-MM-DD"
				v-bind="field.metadata"
				:vuetify-options="metadataTo"
				:start-date="periodeValue.from"
				@change="changeDate()"
			/>
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import DatePicker from '../../DatePicker';

	import FieldComponent from '../mixins/fieldComponent';
	import { PeriodeValue } from '../types';

	/** Form date field to enter date */
	@Component({
		components: {
			DatePicker
		}
	})
	export default class PerdiodeField extends FieldComponent {

		periodeValue: PeriodeValue = {
			from: undefined,
			to: undefined
		};

		get metadataTo(){
			let currentMetadata = this.field.metadata && this.field.metadata.to ? this.field.metadata.to : {};
			return { ...currentMetadata , datePicker: { min: this.periodeValue.from } };
		}

		// emit the new value when started or ended date change
		changeDate(){
			//reset the end date if selected start date greatter
			if(this.periodeValue.from && this.periodeValue.to && new Date(this.periodeValue.from)  > new Date(this.periodeValue.to)){
				this.periodeValue.to = undefined;
			}
			this.field.value = this.periodeValue;
			this.emitChangeEvent(this.field);
		}

	}
</script>
