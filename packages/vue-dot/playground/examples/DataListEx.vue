<template>
	<DocSection title="DataList">
		<DataList
			:items="data"
			:icons="icons"
			:loading="loading"
			:items-number-loading="7"
			title-class="text-subtitle-1 font-weight-bold mb-2 mt-2"
			list-title="Informations"
			heading-loading
			flex
			@click:item-action="setItemValue"
		/>

		<VTextField
			v-model="actionValue"
			class="vd-form-input mt-4"
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

	import { IDataList } from '../../src/elements/DataList/types';

	import { mdiCalendar } from '@mdi/js';

	@Component
	export default class DataListEx extends Vue {
		loading = false;

		actionValue: string | null = 'New text';

		data: IDataList = [
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
		setItemValue(itemIndex: number): void {
			this.$set(this.data[itemIndex], 'value', this.actionValue);
		}
	}
</script>
