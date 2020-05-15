<template>
	<SubHeader
		:data-lists="dataLists"
	>
		<template #back-btn>
			<VBtn>
				Slot bouton retour
			</VBtn>
		</template>
		<template #title>
			<h3>
				Slot du titre
			</h3>
		</template>
		<template #sub-title>
			<h4 class="red--text">
				Slot de sous titre
			</h4>
		</template>
		<template #additional-informations>
			<VCard>
				<VCardText>
					Slot d'informations supplémentaires
				</VCardText>
			</VCard>
		</template>
		<template #right-content>
			<VCard>
				<VCardText>
					Slot du contenue de droite
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
						label: 'Libellé',
						value: 'Texte saisi'
					},
					{
						label: 'Libellé',
						value: 'Texte saisi'
					}
				]
			},
			{
				listTitle: 'Catégorie 2',
				items: [
					{
						label: 'Libellé',
						value: 'Texte à modifier'
					},
					{
						label: 'Libellé',
						value: 'Texte à modifier'
					}
				]
			},
			{
				listTitle: 'Catégorie 3',
				items: [
					{
						label: 'Libellé',
						value: 'Texte saisi'
					},
					{
						label: 'Libellé',
						value: 'Texte saisi'
					}
				]
			},
			{
				listTitle: 'Catégorie 4',
				items: [
					{
						label: 'Libellé',
						value: 'Texte saisi'
					},
					{
						label: 'Libellé',
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
