<template>
	<DocSection title="DataListGroup">
		<DataListGroup
			:items="items"
			:loading="loading"
			render-html-value
		/>

		<VBtn
			class="mt-4"
			color="accent"
			@click="loading = !loading"
		>
			{{ loading ? 'Unset' : 'Set' }} loading
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListGroupItems } from '../../src/patterns/DataListGroup/types';

	@Component
	export default class DataListEx extends Vue {
		loading = false;

		items: DataListGroupItems = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Date de naissance',
						value: '24/09/1970'
					},
					{
						key: 'Adresse',
						value: '50 Avenue du Professeur André Lemierre<br>75020 Paris'
					}
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc'
					},
					{
						key: 'N° RPPS',
						value: 'XXXXX'
					}
				]
			},
			{
				title: 'Autres informations',
				items: [
					{
						key: 'Dernière modification',
						value: '04/06/2020'
					}
				]
			}
		];
	}
</script>
