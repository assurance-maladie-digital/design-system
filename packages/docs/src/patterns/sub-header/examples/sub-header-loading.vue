<template>
	<div>
		<SubHeader
			:loading="loading"
			:data-lists="dataLists"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
		>
			<template #additional-informations>
				<VSpacer />

				<div>
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
								:value="progressValue"
								color="#fff"
								height="8px"
								class="mt-2 mb-1"
								background-color="#fff"
								background-opacity=".24"
							/>
						</div>
					</VFadeTransition>
				</div>
			</template>
		</SubHeader>

		<VSwitch
			v-model="loading"
			label="Chargement"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class SubHeaderLoading extends Vue {
		progressValue = 50;

		loading = false;

		dataLists = [
			{
				listTitle: 'Catégorie 1',
				itemsNumberLoading: 2,
				headingLoading: true,
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
				listTitle: 'Catégorie 2',
				itemsNumberLoading: 2,
				headingLoading: true,
				items: [
					{
						key: 'Libellé',
						value: 'Texte à modifier'
					},
					{
						key: 'Libellé',
						value: 'Texte à modifier'
					}
				]
			},
			{
				listTitle: 'Catégorie 3',
				itemsNumberLoading: 2,
				headingLoading: true,
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
				listTitle: 'Catégorie 4',
				itemsNumberLoading: 2,
				headingLoading: true,
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
	}
</script>
