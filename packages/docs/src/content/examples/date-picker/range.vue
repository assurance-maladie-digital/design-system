<template>
	<div class="d-flex flex-wrap w-100">
		<DatePicker
			v-model="startDate"
			label="Date de début"
			text-field-class="mr-4"
			outlined
		/>

		<DatePicker
			v-model="endDate"
			:start-date="startDate"
			label="Date de fin"
			outlined
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import dayjs from 'dayjs';

	const DATE_FORMAT = 'YYYY-MM-DD';

	@Component
	export default class DatePickerRange extends Vue {
		startDate = dayjs().format(DATE_FORMAT);
		endDate = dayjs().add(7, 'day').format(DATE_FORMAT);
	}
</script>
