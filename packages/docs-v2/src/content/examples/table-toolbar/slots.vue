<template>
	<VDataTable
		:headers="headers"
		:items="items"
		:search="search"
		hide-default-footer
	>
		<template #top>
			<TableToolbar
				v-model="search"
				:nb-total="items.length"
			>
				<template #search-left>
					<VBtn
						color="primary"
						class="mx-5"
						outlined
						small
					>
						Exemple
					</VBtn>
				</template>
			</TableToolbar>
		</template>
	</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class TableToolbarSlots extends Vue {
		search = '';

		headers: DataTableHeader[] = [
			{
				text: 'Nom',
				value: 'lastname'
			},
			{
				text: 'Prénom',
				value: 'firstname'
			},
			{
				text: 'Email',
				value: 'email'
			}
		];

		items = [
			{
				firstname: 'Rosemarie',
				lastname: 'Quessy',
				email: 'rosemarie.quessy@example.com'
			},
			{
				firstname: 'Alphonse',
				lastname: 'Bouvier',
				email: 'alphonse.bouvier@example.com'
			}
		];
	}
</script>
