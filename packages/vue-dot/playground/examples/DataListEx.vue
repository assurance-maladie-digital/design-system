<template>
	<DocSection title="DataList">
		<DataList
			:list="data"
			:icons="icons"
			list-title="Informations"
			flex
			@click:item-action="setNewItemValue"
		/>

		<VTextField
			v-model="actionValue"
			class="mt-4"
			outlined
			label="New value"
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
		actionValue: string | null = 'New text';

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
				value: 'France',
				action: 'Edit'
			},
			{
				key: 'Date of registration',
				value: ''
			}
		];

		icons = {
			mdiCalendar
		};

		/**
		 * Example to set the new item value to the corresponding dataList item after clicked on an data list item action
		 *
		 * @param {number} itemIndex The item index of the clicked data list item action button
		 */
		setNewItemValue(itemIndex: number) {
			this.$set(this.data[itemIndex], 'value', this.actionValue);
		}
	}
</script>
