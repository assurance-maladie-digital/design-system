<template>
	<SubHeader
		:data-lists="dataLists"
		title-text="Prénom Nom (d'usage)"
		sub-title-text="1 69 08 75 125 456 75"
	>
		<!-- ProgressBar -->
		<template #additional-informations>
			<VSpacer />
			<div
				key="progress-data"
			>
				<p class="white--text mt-8 mb-0">
					Profil complété à 50%
				</p>

				<VProgressLinear
					v-bind="progressLinearOpts"
					:value="progressValue"
					class="mb-1"
				/>
			</div>
		</template>
	</SubHeader>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class SubHeaderDoc extends Vue {
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
