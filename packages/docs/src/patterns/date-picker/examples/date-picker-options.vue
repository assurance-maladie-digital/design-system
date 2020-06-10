<template>
	<DatePicker
		v-model="birthDate"
		:vuetify-options="{
			// The textField options can be binded
			// directly if needed
			textField: {
				placeholder: '',
				label: 'date',
				hint: null,
				outlined: true
			},
			menu: {
				nudgeBottom: 50,
				nudgeRight: 0,
				minWidth: '310px'
			},
			datePicker: {
				width: '310px',
				min: new Date().toISOString()
			}
		}"
		clearable
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerOptions extends Vue {
		birthDate = '';
	}
</script>
