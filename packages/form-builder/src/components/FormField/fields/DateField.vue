<template>
	<DatePicker
		v-bind="field.metadata"
		:value="field.value"
		:vuetify-options="getVuetifyOptions(field.metadata)"
		text-field-class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '@cnamts/vue-dot/src/patterns/DatePicker';

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
