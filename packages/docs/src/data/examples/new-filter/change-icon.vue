<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
		>
			<template #filter-date="{ on, attrs }">
				<DatePicker
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</NewFilter>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiCalendar } from '@mdi/js';

	@Component
	export default class FilterModuleUsage extends Vue {
		calendarIcon = mdiCalendar;

		filters = [
			{
				name: 'date',
				label: 'Date',
				description: 'Selectionnez une date',
				chips: [],
				icon: this.calendarIcon
			},
		];
	}
</script>
