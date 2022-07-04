<template>
	<DatePicker
		v-model="date"
		clearable
		@click:clear="date = null"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerEvents extends Vue {
		date: string | null = null;
	}
</script>
