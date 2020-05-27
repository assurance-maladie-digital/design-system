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
				Prénom Nom (d'usage)
			</h3>
		</template>

		<template #sub-title>
			<h4 class="red--text">
				1 69 08 75 125 456 75
			</h4>
		</template>

		<template #additional-informations>
			<VCard>
				<VCardText>
					informations supplémentaires
				</VCardText>
			</VCard>
		</template>

		<template #right-content>
			<VCard>
				<VCardText>
					Contenu de droite
				</VCardText>
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
