<template>
	<DataList
		:items="items"
		:icons="icons"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList, DataListIcons } from '@cnamts/vue-dot/src/elements/DataList/types';

	import { mdiCalendar, mdiAccount } from '@mdi/js';

	@Component
	export default class DataListIconsEx extends Vue {
		items: DataList = [
			{
				key: 'Nom',
				value: 'Dupont'
			},
			{
				key: 'Prénom',
				value: 'Paul',
				icon: 'accountIcon'
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970',
				icon: 'calendarIcon'
			}
		];

		icons: DataListIcons = {
			calendarIcon: mdiCalendar,
			accountIcon: mdiAccount
		};
	}
</script>
