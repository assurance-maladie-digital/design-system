<template>
	<VCol>
		<FiltersSideBar v-model="filters">
			<template #name="{ on, attrs }">
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
					Vous pouvez filtrer entre les dossiers de type
					<b>Arrêt de Travail (AT)</b> et
					<b>Maladie Professionnelle (MP)</b> ou <b>Autre</b>.
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
					outlined
					v-on="on"
				/>
			</template>

			<template #profession="{ on, attrs }">
				<SearchListField
					v-bind="attrs"
					:items="professionList"
					v-on="on"
				/>
			</template>
		</FiltersSideBar>

		<VDivider class="my-4" />

		<FiltersInline v-model="filters">
			<template #name="{ on, attrs }">
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
					Vous pouvez filtrer entre les dossiers de type
					<b>Arrêt de Travail (AT)</b> et
					<b>Maladie Professionnelle (MP)</b> ou <b>Autre</b>.
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
					outlined
					v-on="on"
				/>
			</template>

			<template #profession="{ on, attrs }">
				<SearchListField
					v-bind="attrs"
					:items="professionList"
					v-on="on"
				/>
			</template>
		</FiltersInline>
	</VCol>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FiltersSideBarFilterCombination extends Vue {
		filters = [
			{
				name: 'name',
				title: 'Identité',
				value: 'Dupont Jean'
			},
			{
				name: 'folder',
				title: 'Type de dossier',
				value: [
					{
						text: 'AT',
						value: 'at'
					},
					{
						text: 'MP',
						value: 'mp'
					}
				]
			},
			{
				name: 'period',
				title: 'Période'
			},
			{
				name: 'profession',
				title: 'Profession'
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

		professionList = [
			{
				label: 'Chirurgien-dentiste',
				value: 'chirurgien-dentiste'
			},
			{
				label: 'Infirmier',
				value: 'infirmier'
			},
			{
				label: 'Orthophoniste',
				value: 'orthophoniste'
			},
			{
				label: 'Orthoptiste',
				value: 'orthoptiste'
			},
			{
				label: 'Pédicure-podologue',
				value: 'pedicure-podologue'
			},
			{
				label: 'Pharmacien',
				value: 'pharmacien'
			}
		];
	}
</script>
