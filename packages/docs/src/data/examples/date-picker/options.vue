<template>
	<DatePicker
		:vuetify-options="vuetifyOptions"
		clearable
		outlined
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerOptions extends Vue {
		vuetifyOptions = {
			// The textField options can be binded
			// directly to the DatePicker
			textField: {
				label: 'Exemple',
				hideDetails: true
			},
			menu: {
				nudgeTop: 0,
				nudgeRight: 0,
				minWidth: '328px',
				offsetY: true,
				top: true
			},
			datePicker: {
				noTitle: false,
				width: '328px'
			}
		};
	}
</script>
