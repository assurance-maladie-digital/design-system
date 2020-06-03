<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="hideBackBtn"
				label="Masquer le bouton de retour"
			/>

			<VTextField
				v-model="backBtnText"
				label="Texte du bouton retour"
				outlined
			/>

			<VTextField
				v-model="titleText"
				label="Texte du titre"
				outlined
			/>

			<VTextField
				v-model="subTitleText"
				label="Texte du sous titre"
				outlined
			/>

			<VSwitch
				label="Affiche un bouton sur une liste"
				@change="showItemAction($event)"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<SubHeader
				:data-lists="dataLists"
				:hide-back-btn="hideBackBtn"
				:back-btn-text="backBtnText"
				:title-text="titleText"
				:sub-title-text="subTitleText"
			>
				<template #additional-informations>
					<VSpacer />

					<p class="white--text mt-8 mb-0">
						Profil complété à 50%
					</p>

					<VProgressLinear
						:value="progressValue"
						color="#fff"
						height="8px"
						class="mt-2 mb-1"
						background-color="#fff"
						background-opacity=".24"
					/>
				</template>
			</SubHeader>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListsItem } from '../../../../../vue-dot/src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderPlayground extends Vue {
		progressValue = 50;

		hideBackBtn = false;
		backBtnText = 'retour';
		titleText = 'titre';
		subTitleText = 'sous titre';

		dataLists: DataListsItem[] = [
			{
				title: 'Catégorie 1',
				items: [
					{
						key: 'Libellé',
						value: 'Texte saisi'
					},
					{
						key: 'Libellé',
						value: 'Texte saisi'
					}
				]
			},
			{
				title: 'Catégorie 2',
				items: [
					{
						key: 'Libellé',
						value: 'Texte saisi'
					},
					{
						key: 'Libellé',
						value: 'Texte saisi'
					}
				]
			},
			{
				title: 'Catégorie 3',
				items: [
					{
						key: 'Libellé',
						value: 'Texte saisi'
					},
					{
						key: 'Libellé',
						value: 'Texte saisi'
					}
				]
			}
		];

		showItemAction(show: boolean): void {
			if(show) {
				Vue.set(this.dataLists[0].items[0],'action', 'Modifier');
			} else {
				Vue.delete(this.dataLists[0].items[0],'action');
			}
		}
	}
</script>
