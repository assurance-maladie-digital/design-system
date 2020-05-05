<template>
	<DocSection title="DataList">
		<DataList
			:loading="loading"
			:list="data"
			:list-loading="dataListItemsLoading"
			:icons="icons"
			list-title="Informations"
			flex
			title-class="subtitle-1 font-weight-bold mb-2 mt-3"
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

	import { IDataListItem } from '../../src/elements/DataList/types';

	import { mdiCalendar } from '@mdi/js';
	import { IDataListLoading } from '../../src/elements/DataList/DataListLoading/types';

	@Component
	export default class DataListEx extends Vue {

		loading = false;

		dataListItemsLoading: IDataListLoading =
		{
			itemsNumber: 7,
			heading: true
		};

		data: IDataListItem[] = [
			{
				key: 'Civility',
				value: 'Mr',
				chip: true,
				options: {
					chip: {
						color: 'success'
					}
				}
			},
			{
				key: 'Name',
				value: 'Dupont'
			},
			{
				key: 'First name',
				value: 'Paul'
			},
			{
				key: 'Birthdate',
				value: '09/24/1970',
				icon: 'mdiCalendar'
			},
			{
				key: 'Nationality',
				value: 'French'
			},
			{
				key: 'Native country',
				value: 'France'
			},
			{
				key: 'Date of registration',
				value: ''
			}
		];

		icons = {
			mdiCalendar
		};
	}
</script>
