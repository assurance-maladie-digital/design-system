<template>
	<VLayout class="ml-0">
		<DatePicker
			v-bind="field.metadata"
			:value="field.value"
			:vuetify-options="getVuetifyOptions(field.metadata)"
			@change="emitChangeEvent"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '../../DatePicker';

	import { FieldComponent } from '../mixins/fieldComponent';
	import { DatePickerOptions } from '../mixins/datePickerOptions';

	const MixinsDeclaration = mixins(FieldComponent, DatePickerOptions);

	/** Form date field to enter a date */
	@Component({
		components: {
			DatePicker
		}
	})
	export default class DateField extends MixinsDeclaration {}
</script>
