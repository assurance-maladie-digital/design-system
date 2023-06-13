<template>
	<FiltersSideBar v-model="filters">
		<template #identity="{ on, attrs }">
			<VTextField
				v-bind="attrs"
				label="Nom"
				outlined
				hide-details
				v-on="on"
			/>
		</template>

		<template #folder="{ on, attrs }">
			<p class="text--secondary">
				Vous pouvez filtrer entre les dossiers de type Arrêt de Travail (AT) et Maladie Professionnelle (MP) ou Autre.
			</p>

			<VSelect
				v-bind="attrs"
				:items="folderTypes"
				label="Type de dossier"
				multiple
				outlined
				return-object
				hide-details
				v-on="on"
			/>
		</template>

		<template #period="{ on, attrs }">
			<PeriodField
				v-bind="attrs"
				v-on="on"
			/>
		</template>
	</FiltersSideBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FiltersSideBarUsage extends Vue {
		filters = [
			{
				name: 'identity',
				title: 'Identité'
			},
			{
				name: 'folder',
				title: 'Type de dossier'
			},
			{
				name: 'period',
				title: 'Période',
				chipFormatting: (start: string, end: string) => `${start} – ${end}`
			}
		];

		folderTypes = [
			{
				text: 'AT',
				value: 'at'
			},
			{
				text: 'MP',
				value: 'mp'
			},
			{
				text: 'Autre',
				value: 'other'
			}
		];
	}
</script>
