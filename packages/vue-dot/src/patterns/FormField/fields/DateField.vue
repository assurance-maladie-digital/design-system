<template>
	<VLayout class="ml-0">
		<DatePicker
			v-model="field.value"
			v-bind="field.metadata"
			:vuetify-options="field.metadata"
			@change="emitChangeEvent(field)"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import DatePicker from '../../DatePicker';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form date field to enter a date */
	@Component({
		components: {
			DatePicker
		}
	})
	export default class DateField extends FieldComponent {}
</script>
