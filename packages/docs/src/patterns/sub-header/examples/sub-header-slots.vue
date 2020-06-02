<template>
	<SubHeader
		:data-lists="dataLists"
		title-text="Prénom Nom (d'usage)"
	>
		<template #back-btn>
			<VBtn>
				Retour
			</VBtn>
		</template>

		<template #title>
			<h3>
				Titre
			</h3>
		</template>

		<template #sub-title>
			<h4>
				Sous-titre
			</h4>
		</template>

		<template #additional-informations>
			<p class="mb-0">
				Informations supplémentaires
			</p>
		</template>

		<template #right-content>
			<VCard class="py-3 px-2">
				<p class="mb-0">
					Contenu situé à droite
				</p>
			</VCard>
		</template>
	</SubHeader>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class SubHeaderSlots extends Vue {
		dataLists = [
			{
				listTitle: 'Catégorie 1',
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

		progressValue = 50;

		progressLinearOpts = {
			class: 'mt-2',
			color: '#fff',
			height: '8px',
			backgroundColor: '#fff',
			backgroundOpacity: '.24'
		};
	}
</script>
