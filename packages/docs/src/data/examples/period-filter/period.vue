<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
		>
			<template #filter-dates="{ on, attrs }">
				<PeriodField
					v-bind="attrs"
					class="mb-5 mr-2 mt-2"
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

	interface IndexedObject<T = string> {
		[key: string]: T;
	};

	@Component
	export default class Period extends Vue {
		calendarIcon = mdiCalendar;

		filters = [
			{
				name: 'dates',
				label: 'Période',
				formatting: (value: IndexedObject): string => 'Entre ' + value[0] + ' et ' + value[1],
				value: [],
				chips: [],
				limited: true,
				icon: this.calendarIcon
			}
		];
	}
</script>
