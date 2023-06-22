<template>
	<PeriodField
		v-model="period"
		outlined
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FormFieldPeriod extends Vue {
		period = {
			from: null,
			to: null
		};
	}
</script>
