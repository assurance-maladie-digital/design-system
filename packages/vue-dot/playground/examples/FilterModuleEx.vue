<template>
	<DocSection title="Filter Module">
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			:loading="loading"
			calculate-widths
			hide-default-footer
			class="w-100 elevation-1"
			@current-items="filteredItems = $event"
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:loading="loading"
					:nb-total="items.length"
					:nb-filtered="filteredItems.length"
					search-label="Rechercher"
					row-text="fichier"
					show-add-btn
				>
					<template #search-left>
						<FilterModule
							:filters="filters"
							@filter-list="filterTable($event)"
						/>
					</template>
				</TableToolbar>
			</template>
		</VDataTable>

		<VSwitch
			v-model="loading"
			label="Chargement"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class FilterModuleEx extends Vue {
		search = '';
		filteredItems: DataTableHeader[] = [];
		loading = false;

		headers: DataTableHeader[] = [
			{
				align: 'start',
				sortable: true,
				text: 'Nom',
				value: 'lastname'
			},
			{
				align: 'start',
				sortable: true,
				text: 'Prénom',
				value: 'firstname'
			}
		];

		items = [
			{
				firstname: 'Christophe',
				lastname: 'Colomb'
			},
			{
				firstname: 'Napoléon',
				lastname: 'Bonaparte'
			}
		];

		filters = [
			{
				label: 'Moyen de contact',
				key: 'name',
				form: {
					filterList: {
						type: 'select',
						multiple: true,
						dynamic: true,
						items: [
							{
								text: 'Email',
								value: 'email'
							},
							{
								text: 'Courrier',
								value: 'mail'
							},
							{
								text: 'SMS',
								value: 'sms'
							}
						],
						value: null,
						fieldOptions: {
							outlined: true
						}
					}
				}
			},
			{
				label: 'fichier',
				key: 'file',
				form: {
					filterList: {
						type: 'select',
						dynamic: true,
						items: [
							{
								text: 'Jpeg',
								value: 'jpeg'
							},
							{
								text: 'PDF',
								value: 'pdf'
							},
							{
								text: 'Mp3',
								value: 'mp3'
							}
						],
						value: null,
						fieldOptions: {
							outlined: true
						}
					}
				}
			}
		];

		filterTable(event: Array<string>): void {
			console.log('event');
		}
	}
</script>
