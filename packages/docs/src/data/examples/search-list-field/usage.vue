<template>
	<SearchListField
		v-model="value"
		:items="items"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { SearchListItem } from '@cnamts/vue-dot/src/patterns/SearchListField/types';

	@Component
	export default class SearchListFieldUsage extends Vue {
		value: string[] = [];

		items: SearchListItem[] = [
			{
				label: 'Chirurgien-dentiste',
				value: 'chirurgien-dentiste'
			},
			{
				label: 'Infirmier',
				value: 'infirmier'
			},
			{
				label: 'Orthophoniste',
				value: 'orthophoniste'
			},
			{
				label: 'Orthoptiste',
				value: 'orthoptiste'
			},
			{
				label: 'Pédicure-podologue',
				value: 'pedicure-podologue'
			},
			{
				label: 'Pharmacien',
				value: 'pharmacien'
			}
		];
	}
</script>
