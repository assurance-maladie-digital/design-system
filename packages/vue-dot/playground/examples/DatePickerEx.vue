<template>
	<DocSection title="DatePicker">
		<DatePicker v-model="date" />

		<DatePicker v-model="birthDate" />
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
		birthDate = '';
	}
</script>
