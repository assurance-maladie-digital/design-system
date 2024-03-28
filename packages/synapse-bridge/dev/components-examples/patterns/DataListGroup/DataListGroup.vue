<template>
	<PageContainer>
		<DataListGroup
			:items="items"
			:icons="icons"
			@click:list-item="updateBirthdate"
		/>
		<br /><br />
		<DataListGroup
			:items="items"
			item-width="300px"
		/>
		<br /><br />
		<DataListGroup
			:items="items"
			loading
		/>
	</PageContainer>
</template>

<script lang="ts">
import DataListGroup from "../src/patterns/DataListGroup/DataListGroup.vue";
import PageContainer from "@/elements/PageContainer/PageContainer.vue";

import { defineComponent } from "vue";

import { DataListIcons } from '../src/elements/DataList/types';
import { DataListActionEvent, DataListGroupItems } from '../src/patterns/DataListGroup/types';

import {
	mdiCalendar,
	mdiAccount,
	mdiDoctor,
	mdiCardAccountDetails,
	mdiPencil
} from '@mdi/js';

export default defineComponent({
	components: {
		PageContainer,
		DataListGroup,
	},
	data() {
		return {
			items: [
				{
					title: 'Informations patient',
					items: [
						{
							key: 'Nom',
							value: 'Dupont',
							icon: 'accountIcon',
							chip: true
						},
						{
							key: 'Prénom',
							value: 'Paul',
							icon: 'accountIcon'
						},
						{
							key: 'Date de naissance',
							value: '24/09/1970',
							icon: 'calendarIcon',
							action: 'Modifier'
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
			] as DataListGroupItems,

			icons: {
				calendarIcon: mdiCalendar,
				accountIcon: mdiAccount,
				doctorIcon: mdiDoctor,
				cardAccountIcon: mdiCardAccountDetails,
				editIcon: mdiPencil
			} as DataListIcons
		};
	},
	methods: {
		updateBirthdate({ dataListIndex, itemIndex }: DataListActionEvent): void {
			this.items[dataListIndex].items[itemIndex].value = '01/01/1970';
		}
	}
});
</script>
