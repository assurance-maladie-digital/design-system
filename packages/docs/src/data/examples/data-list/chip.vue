<template>
	<DataList :items="items" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	@Component
	export default class DataListChip extends Vue {
		items: DataList = [
			{
				key: 'Nom',
				value: 'Dupont',
				chip: true
			},
			{
				key: 'Prénom',
				value: 'Paul',
				chip: true
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
				chip: true
			},
			{
				key: 'Statut',
				value: 'Enregistré',
				chip: true,
				options: {
					chip: {
						color: 'success'
					}
				}
			}
		];
	}
</script>
