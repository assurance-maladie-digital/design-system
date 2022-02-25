<template>
	<DataListGroup :items="items" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	@Component
	export default class DataListGroupOptions extends Vue {
		items: DataListGroupItems = [
			{
				title: 'Informations patient',
				items: [
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
					}
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc',
						chip: true
					},
					{
						key: 'N° RPPS',
						value: 'XXXXX',
						chip: true
					}
				]
			},
			{
				title: 'Autres informations',
				items: [
					{
						key: 'Dernière modification',
						value: '04/06/2020',
						chip: true
					}
				]
			}
		];
	}
</script>
