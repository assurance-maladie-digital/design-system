<template>
	<div>
		<DatePicker
			v-model="startDate"
			text-field-class="mb-4"
			label="Date de départ"
		/>

		<DatePicker
			:start-date="startDate"
			:vuetify-options="{
				datePicker: {
					min: startDate
				}
			}"
			label="Date de fin"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerRange extends Vue {
		startDate = '';
	}
</script>
