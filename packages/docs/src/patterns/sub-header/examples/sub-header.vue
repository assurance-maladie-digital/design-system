<template>
	<SubHeader
		:data-lists="dataLists"
		title-text="Prénom Nom (d'usage)"
		sub-title-text="1 69 08 75 125 456 75"
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
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListsItem } from '../../../../../vue-dot/src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderEx extends Vue {
		progressValue = 50;

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
	}
</script>
