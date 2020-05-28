<template>
	<div>
		<DatePicker
			v-model="date"
			:rules="validRules"
			:warning-rules="warningRules"
			:error.sync="error"
		/>

		<h4 class="mt-4">
			Date en erreur ?
		</h4>

		<p class="mt-4">
			{{ error ? 'Oui' : 'Non' }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';
	import { required } from '@cnamts/vue-dot/src/rules/required';
	import { notAfterToday } from '@cnamts/vue-dot/src/rules/notAfterToday';

	@Component
	export default class DatePickerRules extends Vue {
		date = '';
		validRules = [
			isDateValid
		];

		rules = [
			required,
			isDateValid
		];

		warningRules = [
			notAfterToday
		];

		error = false;

	}
</script>
