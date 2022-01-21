<template>
	<DataListGroup :items="items" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	@Component
	export default class DataListGroupOptions extends Vue {
		itemOptions = {
			chip: {
				color: '#e7ecf5'
			}
		};

		items: DataListGroupItems = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Nom',
						value: 'Dupont',
						chip: true,
						options: this.itemOptions
					},
					{
						key: 'Prénom',
						value: 'Paul',
						chip: true,
						options: this.itemOptions
					},
					{
						key: 'Date de naissance',
						value: '24/09/1970',
						chip: true,
						options: this.itemOptions
					}
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc',
						chip: true,
						options: this.itemOptions
					},
					{
						key: 'N° RPPS',
						value: 'XXXXX',
						chip: true,
						options: this.itemOptions
					}
				]
			},
			{
				title: 'Autres informations',
				items: [
					{
						key: 'Dernière modification',
						value: '04/06/2020',
						chip: true,
						options: this.itemOptions
					}
				]
			}
		];
	}
</script>
