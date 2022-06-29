<template>
	<DataListGroup
		:items="items"
		:icons="icons"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListIcons } from '@cnamts/vue-dot/src/elements/DataList/types';
	import { DataListGroupItems } from '@cnamts/vue-dot/src/patterns/DataListGroup/types';

	import {
		mdiCalendar,
		mdiAccount,
		mdiDoctor,
		mdiCardAccountDetails,
		mdiPencil
	} from '@mdi/js';

	@Component
	export default class DataListIconsEx extends Vue {
		items: DataListGroupItems = [
			{
				title: 'Informations patient',
				items: [
					{
						key: 'Nom',
						value: 'Dupont',
						icon: 'accountIcon'
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
				]
			},
			{
				title: 'Médecin traitant',
				items: [
					{
						key: 'Nom du praticien',
						value: 'Gérard Leblanc',
						icon: 'doctorIcon'
					},

					{
						key: 'N° RPPS',
						value: 'XXXXX',
						icon: 'cardAccountIcon'
					}
				]
			},
			{
				title: 'Autres informations',
				items: [
					{
						key: 'Dernière modification',
						value: '04/06/2020',
						icon: 'editIcon'
					}
				]
			}
		];

		icons: DataListIcons = {
			calendarIcon: mdiCalendar,
			accountIcon: mdiAccount,
			doctorIcon: mdiDoctor,
			cardAccountIcon: mdiCardAccountDetails,
			editIcon: mdiPencil
		};
	}
</script>
