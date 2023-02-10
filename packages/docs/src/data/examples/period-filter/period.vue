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

	interface IndexedObject<T = string> {
		[key: string]: T;
	};

	@Component({
	})
	export default class FilterModuleUsage extends Vue {

		filters = [
			{
				name: 'dates',
				label: 'Période',
								description: 'Selectionnez une periode',

				formatting: (value: IndexedObject): string => value.startDate + ' && ' + value.endDate,
				value: {
					startDate: '',
					endDate: ''
				},
				chips: []
			}
		];
	}
</script>
