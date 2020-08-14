<template>
	<DatePicker
		v-bind="field.fieldOptions"
		:value="field.value"
		:vuetify-options="field.fieldOptions"
		text-field-class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '@cnamts/vue-dot/src/patterns/DatePicker';

	import { FieldComponent } from '../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form date field to enter a date */
	@Component({
		components: {
			DatePicker
		}
	})
	export default class DateField extends MixinsDeclaration {}
</script>
