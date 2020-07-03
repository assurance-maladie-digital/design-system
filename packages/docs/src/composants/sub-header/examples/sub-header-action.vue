<template>
	<div>
		<SubHeader
			:data-lists="dataLists"
			title-text="Paul Dupont"
			sub-title-text="1 69 08 75 125 456 75"
			@click:list-item="setItemValue"
		/>

		<VSnackbar v-model="snackbar">
			{{ snackbarText }}

			<VBtn
				text
				color="red"
				@click="snackbar = false"
			>
				Fermer
			</VBtn>
		</VSnackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { IDataListAction, DataListsItem } from '@cnamts/vue-dot/src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderAction extends Vue {
		snackbar = false;
		snackbarText = '';

		dataLists: DataListsItem[] = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Date de naissance',
						value: '24/09/1970',
						action: 'Modifier'
					},
					{
						key: 'Adresse',
						value: '75015 Paris',
						action: 'Supprimer'
					}
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc',
						action: 'Mettre à jour'
					},
					{
						key: 'N° RPPS',
						value: 'XXXXX'
					}
				]
			}
		];

		/**
		 * Set the new value to the corresponding dataList item
		 *
		 * @param {IDataListAction} dataListAction The dataListAction object containing dataListIndex and itemIndex
		 */
		setItemValue({ dataListIndex, itemIndex }: IDataListAction): void {
			const formattedPosition = `n°${dataListIndex + 1}, ligne n°${itemIndex + 1}.`;

			this.snackbarText = `Vous avez cliqué sur le bouton d'action de la DataList ${formattedPosition}`;
			this.snackbar = true;
		}
	}
</script>
