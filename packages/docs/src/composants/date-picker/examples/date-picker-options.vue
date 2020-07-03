<template>
	<div>
		<DatePicker
			v-model="date"
			:vuetify-options="vuetifyOptions"
			clearable
			outlined
		/>

		<p
			v-if="date"
			class="mt-4 mb-0"
		>
			Date : {{ date }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerOptions extends Vue {
		date = '';

		vuetifyOptions = {
			// The textField options can be binded
			// directly to the DatePicker
			textField: {
				label: 'Exemple',
				hideDetails: true,
				hint: null
			},
			menu: {
				nudgeBottom: 50,
				nudgeRight: 0,
				minWidth: '310px'
			},
			datePicker: {
				noTitle: false,
				width: '310px'
			}
		};
	}
</script>
