<template>
	<FiltersSideBar v-model="filters">
		<template #updated-at="{ on, attrs }">
			<DatePicker
				v-bind="attrs"
				label="Date de mise à jour"
				outlined
				v-on="on"
			/>
		</template>

		<template #folder="{ on, attrs }">
			<VSelect
				v-bind="attrs"
				:items="folderTypes"
				label="Type de dossier"
				multiple
				outlined
				hide-details
				v-on="on"
			/>
		</template>

		<template #range-slider="{ on, attrs }">
			<VRangeSlider
				v-bind="attrs"
				label="Intervalle"
				max="50"
				min="0"
				v-on="on"
			/>
		</template>
	</FiltersSideBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ChipItem } from '@cnamts/vue-dot/src/elements/ChipList/types';

	@Component
	export default class FiltersSideBarChipFormat extends Vue {
		filters = [
			{
				name: 'updated-at',
				title: 'Mise à jour'
			},
			{
				name: 'folder',
				title: 'Type de dossier'
			},
			{
				name: 'range-slider',
				title: 'Intervalle',
				formatChip: ([min, max]: [number, number]): ChipItem[] => [
					{
						text: `De ${min} à ${max}`,
						value: [min, max]
					}
				]
			}
		];

		folderTypes = [
			'AT',
			'MP',
			'Autre'
		];
	}
</script>
