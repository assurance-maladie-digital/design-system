<template>
	<SubHeader
		back-btn-text="Back"
		sub-title-text="1 69 08 75 125 456 75"
		title-text="Paul Dupont"
	/>

	<br />

	<SubHeader
		:data-list-group-items="dataListGroupItems"
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
		render-html-value
	/>

	<br />

	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<template #additional-informations>
			<VSpacer />

			<p class="white--text mt-8 mb-0">
				Profil complété à 50%
			</p>

			<VProgressLinear
				:model-value="50"
				color="#fff"
				height="8px"
				class="mt-2 mb-1"
				background-color="#fff"
				background-opacity=".24"
			/>
		</template>
	</SubHeader>

	<br />

	<SubHeader
		:data-list-group-items="dataListGroupItems"
		:loading="loading"
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<template #additional-informations>
			<VSpacer />

			<VFadeTransition mode="out-in">
				<div
					v-if="loading"
					key="progress-skeleton"
				>
					<HeaderLoading
						class="mt-8"
						height="24"
						width="160"
						dark
					/>

					<HeaderLoading
						class="mt-2 mb-1"
						height="8"
						width="100%"
						tile
						dark
					/>
				</div>

				<div
					v-else
					key="progress-data"
				>
					<p class="white--text mt-8 mb-0">
						Profil complété à 50%
					</p>

					<VProgressLinear
						:model-value="50"
						color="#fff"
						height="8px"
						class="mt-2 mb-1"
						background-color="#fff"
						background-opacity=".24"
					/>
				</div>
			</VFadeTransition>
		</template>
	</SubHeader>

	<VSwitch
		v-model="loading"
		label="Chargement"
		hide-details
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SubHeader from "@/patterns/SubHeader/SubHeader.vue";
import HeaderLoading from "@/elements/HeaderLoading/HeaderLoading.vue";
import { DataListGroupItems } from '@/patterns/DataListGroup/types';

export default defineComponent({
	components: {
		SubHeader,
		HeaderLoading
	},
	data() {
		return {
			loading: true,
			dataListGroupItems: [
				{
					title: 'Informations patient',
					itemsNumberLoading: 2,
					headingLoading: true,
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
					itemsNumberLoading: 2,
					headingLoading: true,
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
					itemsNumberLoading: 1,
					headingLoading: true,
					items: [
						{
							key: 'Dernière modification',
							value: '04/06/2020'
						}
					]
				}
			] satisfies DataListGroupItems
		};
	}
});
</script>
