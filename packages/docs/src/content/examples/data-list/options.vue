<template>
	<DataList
		:items="items"
		:icons="icons"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	import { mdiAccount, mdiCalendar } from '@mdi/js';

	@Component
	export default class DataListOptions extends Vue {
		itemOptions = {
			icon: {
				color: 'grey darken-2',
				class: 'mt-0 mr-4'
			},
			chip: {
				color: '#e7ecf5'
			}
		};

		items: DataList = [
			{
				key: 'Nom',
				value: 'Dupont',
				icon: 'accountIcon',
				chip: true,
				options: this.itemOptions
			},
			{
				key: 'Prénom',
				value: 'Paul',
				icon: 'accountIcon',
				chip: true,
				options: this.itemOptions
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
				icon: 'calendarIcon',
				chip: true,
				options: this.itemOptions
			}
		];

		icons = {
			calendarIcon: mdiCalendar,
			accountIcon: mdiAccount
		};
	}
</script>
