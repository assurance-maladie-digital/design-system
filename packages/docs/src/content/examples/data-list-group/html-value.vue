<template>
	<DataListGroup
		:items="items"
		render-html-value
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	@Component
	export default class DataListEx extends Vue {
		items: DataListGroupItems = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Date de naissance',
						value: '24/09/1970'
					},
					{
						key: 'Adresse',
						value: '50 Avenue du Professeur André Lemierre<br>75020 Paris'
					}
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc'
					},
					{
						key: 'N° RPPS',
						value: 'XXXXX'
					}
				]
			},
			{
				title: 'Autres informations',
				items: [
					{
						key: 'Dernière modification',
						value: '04/06/2020'
					}
				]
			}
		];
	}
</script>
