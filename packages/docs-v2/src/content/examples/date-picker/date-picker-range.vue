<template>
	<VLayout wrap>
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
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import dayjs from 'dayjs';

	@Component
	export default class DatePickerRange extends Vue {
		startDate = dayjs().format('YYYY-MM-DD');
		endDate = dayjs().add(7, 'day').format('YYYY-MM-DD');
	}
</script>