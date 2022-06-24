<template>
	<div>
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
							:value="50"
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
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	@Component
	export default class SubHeaderLoading extends Vue {
		loading = true;

		dataListGroupItems: DataListGroupItems = [
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
						value: '75015 Paris'
					}
				]
			},
			{
				title: 'Médecin traitant',
				itemsNumberLoading: 1,
				headingLoading: true,
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc'
					}
				]
			}
		];
	}
</script>
