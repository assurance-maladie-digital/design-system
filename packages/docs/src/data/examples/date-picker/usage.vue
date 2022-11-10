<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<DatePicker
			v-bind="$attrs"
			v-on="$listeners"
			text-field-class="vd-form-input"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class DatePickerUsage extends Vue {
		options = {
			booleans: [
				'noCalendar',
				'noPrependIcon',
				'appendIcon',
				'textFieldActivator',
				'showWeekends',
				'birthdate',
				'disabled'
			]
		};

		tabs = [
			'outlined'
		];
	}
</script>
