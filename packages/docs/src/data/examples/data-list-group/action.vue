<template>
	<DataListGroup
		:items="items"
		@click:list-item="updateBirthdate"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListActionEvent, DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	@Component
	export default class DataListGroupAction extends Vue {
		items: DataListGroupItems = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Nom',
						value: 'Dupont'
					},
					{
						key: 'Prénom',
						value: 'Paul'
					},
					{
						key: 'Date de naissance',
						value: '24/09/1970',
						action: 'Modifier'
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

		updateBirthdate({ dataListIndex, itemIndex }: DataListActionEvent): void {
			this.$set(this.items[dataListIndex].items[itemIndex], 'value', '01/01/1970');
		}
	}
</script>
