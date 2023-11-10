<script lang="ts">
import { defineComponent } from "vue";

import DatePicker from '@/patterns/DatePicker';

import { FieldComponent } from '../mixins/fieldComponent';

export default defineComponent({
	components: {
		DatePicker
	},
	mixins: [FieldComponent],
});
</script>

<template>
	<DatePicker
		v-bind="field.fieldOptions"
		:model-value="field.value"
		:vuetify-options="field.fieldOptions"
		text-field-class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>
