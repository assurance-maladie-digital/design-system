<template>
	<div>
		<h2 class="subtitle-1 font-weight-bold">
			Affichage par défaut avec validation de la date
		</h2>

		<DatePicker
			v-model="date"
			:rules="validRules"
		/>

		<h4 v-if="date">
			Format de sortie pour le back
		</h4>

		<p class="mt-4">
			{{ date }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		validRules = [
			isDateValid
		];
	}
</script>
