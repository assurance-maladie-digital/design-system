<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
		>
			<template #filter-nom="{ on, attrs }">
				<VTextField
					label="Nom"
					outlined
					class="mt-3"
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
	import PeriodFilter from './PeriodFilter.vue';

	interface IndexedObject<T = string> {
		[key: string]: T;
	};

	@Component({
		components : {
			PeriodFilter
		}
	})
	export default class FilterModuleUsage extends Vue {

		filters = [
			{
				name: 'nom',
				label: 'Nom',
				description: "Quel est le nom du patient ?",
				formatting: (value: string): string => `Le nom du patient est ${value}`,
				chips: []
			},
		];
	}
</script>
