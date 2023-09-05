<template>
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
			<VSelect
				v-bind="attrs"
				:items="folderTypes"
				label="Type de dossier"
				multiple
				outlined
				hide-details
				v-on="on"
			/>
		</template>

		<template #updated-at="{ on, attrs }">
			<DatePicker
				v-bind="attrs"
				label="Date de mise à jour"
				outlined
				v-on="on"
			/>
		</template>
	</FiltersInline>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FiltersInlineCustomStyle extends Vue {
		filters = [
			{
				name: 'name',
				title: 'Identité'
			},
			{
				name: 'folder',
				title: 'Type de dossier'
			},
			{
				name: 'updated-at',
				title: 'Mise à jour'
			}
		];

		folderTypes = [
			'AT',
			'MP',
			'Autre'
		];
	}
</script>

<style lang="scss" scoped>
	.vd-filters-inline :deep(.vd-filter-updated-at) {
		margin-left: 64px !important;
	}
</style>
