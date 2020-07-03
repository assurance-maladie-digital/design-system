<template>
	<DataList
		:items="items"
		:icons="icons"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCalendar, mdiAccount } from '@mdi/js';

	@Component
	export default class DataListIcons extends Vue {
		items = [
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

		icons = {
			calendarIcon: mdiCalendar,
			accountIcon: mdiAccount
		};
	}
</script>
