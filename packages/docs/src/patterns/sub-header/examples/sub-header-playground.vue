<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="hideBackBtn"
				label="Masquer le bouton retour"
				hide-details
				class="mt-0"
			/>

			<VSwitch
				v-model="showAdditionalData"
				label="Informations complémentaires"
				hide-details
				class="mt-3"
			/>

			<VSwitch
				v-model="showDataLists"
				label="Listes de données"
				hide-details
				class="mt-3"
			/>

			<VSwitch
				label="Affiche un bouton sur une liste"
				hide-details
				class="mt-3"
				@change="switchItemAction"
			/>

			<VTextField
				v-model="backBtnText"
				label="Texte du bouton retour"
				hide-details
				multiple
				outlined
				class="mt-6"
			/>

			<VTextField
				v-model="titleText"
				label="Texte du titre"
				hide-details
				multiple
				outlined
				class="mt-6"
			/>

			<VTextField
				v-model="subTitleText"
				label="Texte du sous titre"
				hide-details
				multiple
				outlined
				class="mt-6"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<SubHeader
				:data-lists="showDataLists ? dataLists : null"
				:hide-back-btn="hideBackBtn"
				:back-btn-text="backBtnText"
				:title-text="titleText"
				:sub-title-text="subTitleText"
			>
				<template
					#additional-informations
					v-if="showAdditionalData"
				>
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

	import { DataListsItem } from '@cnamts/vue-dot/src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderPlayground extends Vue {
		progressValue = 50;

		hideBackBtn = false;
		showAdditionalData = true;
		showDataLists = true;
		backBtnText = 'Retour';
		titleText = 'Paul Dupont';
		subTitleText = '1 69 08 75 125 456 75';

		dataLists: DataListsItem[] = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Date de naissance',
						value: '24/09/1970'
					},
					{
						key: 'Adresse',
						value: '75015 Paris'
					}
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc'
					}
				]
			}
		];

		switchItemAction(show: boolean): void {
			if (show) {
				this.$set(this.dataLists[0].items[0], 'action', 'Modifier');
			} else {
				this.$delete(this.dataLists[0].items[0], 'action');
			}
		}
	}
</script>
