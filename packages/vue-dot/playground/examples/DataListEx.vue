<template>
	<DocSection title="DataList">
		<DataList
			:list="data"
			:icons="icons"
			list-title="Informations"
			flex
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { IDataListItem } from '../../src/elements/DataList/types';

	import { mdiCalendar } from '@mdi/js';

	@Component
	export default class DataListEx extends Vue {
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
