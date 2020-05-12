<template>
	<DocSection title="DataList">
		<DataList
			:loading="loading"
			:list="data"
			:items-number-loading="itemsNumberLoading"
			:heading-loading="headingLoading"
			:icons="icons"
			list-title="Informations"
			title-class="subtitle-1 font-weight-bold mb-2 mt-2"
			flex
			@click:item-action="setItemValue"
		/>

		<VTextField
			v-model="actionValue"
			class="mt-4"
			outlined
			label="New value"
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

	@Component
	export default class DataListEx extends Vue {
		loading: boolean = false;

		itemsNumberLoading: number = 7;
		headingLoading: boolean = true;

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
		 * Set the new value to the corresponding dataList item
		 *
		 * @param {number} itemIndex The index of the item to update
		 */
		setItemValue(itemIndex: number) {
			this.$set(this.data[itemIndex], 'value', this.actionValue);
		}
	}
</script>
