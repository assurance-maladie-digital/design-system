<template>
	<DatePicker
		v-model="field.value"
		v-bind="field.metadata"
		@change="emitChangeEvent(field)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import DatePicker from '../../DatePicker';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form date field to enter date */
	@Component({
		components: {
			DatePicker
		}
	})
	export default class DateField extends FieldComponent {}
</script>
