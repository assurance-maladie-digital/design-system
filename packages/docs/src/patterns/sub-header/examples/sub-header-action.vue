<template>
	<div>
		<SubHeader
			:data-lists="dataLists"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
			@click:list-item="setItemValue"
		/>

		<VSnackbar v-model="snackbar">
			{{ snackbarText }}

			<VBtn
				color="red"
				text
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

	import { IDataListAction } from '@cnamts/vue-dot/src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderAction extends Vue {
		actionValue = 'New text';

		snackbar = false;
		snackbarText = '';

		dataLists = [
			{
				listTitle: 'Catégorie 1',
				items: [
					{
						key: 'Libellé',
						value: 'Texte saisi',
						action: 'Modifier'
					},
					{
						key: 'Libellé',
						value: 'Texte saisi',
						action: 'Modifier'
					}
				]
			},
			{
				listTitle: 'Catégorie 2',
				items: [
					{
						key: 'Libellé',
						value: 'Texte à modifier',
						action: 'Modifier'
					},
					{
						key: 'Libellé',
						value: 'Texte à modifier',
						action: 'Modifier'
					}
				]
			},
			{
				listTitle: 'Catégorie 3',
				items: [
					{
						key: 'Libellé',
						value: 'Texte saisi',
						action: 'Modifier'
					},
					{
						key: 'Libellé',
						value: 'Texte saisi',
						action: 'Modifier'
					}
				]
			},
			{
				listTitle: 'Catégorie 4',
				items: [
					{
						key: 'Libellé',
						value: 'Texte saisi',
						action: 'Modifier'
					},
					{
						key: 'Libellé',
						value: 'Texte saisi',
						action: 'Modifier'
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
			const formattedPosition = `DataList n°${dataListIndex}, ligne n°${itemIndex}.`;

			this.snackbarText = `Vous avez cliquer sur le bouton d'action. ${formattedPosition}`;
			this.snackbar = true;
		}
	}
</script>
