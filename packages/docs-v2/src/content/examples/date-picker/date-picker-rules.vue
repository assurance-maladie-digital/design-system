<template>
	<DatePicker
		v-model="date"
		:rules="validRules"
		:warning-rules="warningRules"
		clearable
		outlined
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';
	import { notAfterToday } from '@cnamts/vue-dot/src/rules/notAfterToday';

	@Component
	export default class DatePickerRules extends Vue {
		date = '';

		validRules = [
			required,
			isDateValid
		];

		warningRules = [
			notAfterToday
		];
	}
</script>