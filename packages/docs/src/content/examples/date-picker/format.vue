<template>
	<div>
		<DatePicker
			v-model="date"
			date-format="DD-MM-YYYY"
			hint="Format JJ-MM-AAAA"
			date-format-return="DD/MM/YYYY"
			outlined
		/>

		<p
			v-if="date"
			class="mt-4 mb-0"
		>
			Date saisie : {{ date }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerFormat extends Vue {
		date: string | null = null;
	}
</script>
