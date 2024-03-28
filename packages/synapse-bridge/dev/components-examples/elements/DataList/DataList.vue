<script setup lang="ts">
import { reactive } from 'vue'
import DataList from '@/elements/DataList'
import { DataListItem, DataListIcons } from '@/elements/DataList/types'
import { mdiCalendar, mdiAccount, mdiInformationOutline } from '@mdi/js'

const items: DataListItem[] = [
	{
		key: 'Nom',
		value: 'Dupont',
	},
	{
		key: 'Prénom',
		value: 'Paul',
	},
	{
		key: 'Date de naissance',
		value: '24/09/1970',
	},
]

const itemsWithIcons: DataListItem[] = [
	{
		key: 'Nom',
		value: 'Dupont',
		icon: 'accountIcon',
	},
	{
		key: 'Prénom',
		value: 'Paul',
		icon: 'accountIcon',
	},
	{
		key: 'Date de naissance',
		value: '24/09/1970',
		icon: 'calendarIcon',
	},
]

const icons: DataListIcons = {
	calendarIcon: mdiCalendar,
	accountIcon: mdiAccount,
}

const itemsWithActions = reactive<DataListItem[]>([
	{
		key: 'Nom',
		value: 'Dupont',
	},
	{
		key: 'Prénom',
		value: 'Paul',
	},
	{
		key: 'Date de naissance',
		value: '24/09/1970',
		action: 'Modifier',
	},
])

function updateBirthdate(itemIndex: number): void {
	itemsWithActions[itemIndex].value = '01/01/1970'
}

const itemsWithChips: DataListItem[] = [
	{
		key: 'Nom',
		value: 'Dupont',
		chip: true,
	},
	{
		key: 'Prénom',
		value: 'Paul',
		chip: true,
	},
	{
		key: 'Date de naissance',
		value: '24/09/1970',
		chip: true,
	},
	{
		key: 'Statut',
		value: 'Enregistré',
		chip: true,
		options: {
			chip: {
				color: 'success',
			},
		},
	},
]

const itemsWithHtmlValues: DataListItem[] = [
	{
		key: 'Nom',
		value: 'Dupont',
	},
	{
		key: 'Prénom',
		value: 'Paul',
	},
	{
		key: 'Adresse',
		value: '50 Avenue du Professeur André Lemierre<br>75020 Paris',
	},
]

const itemOptions = {
	icon: {
		color: 'grey-darken-20',
		class: 'mt-0 mr-4',
	},
}

const itemsWithOptions: DataListItem[] = [
	{
		key: 'Nom',
		value: 'Dupont',
		icon: 'accountIcon',
		chip: true,
		options: itemOptions,
	},
	{
		key: 'Prénom',
		value: 'Paul',
		icon: 'accountIcon',
		chip: true,
		options: itemOptions,
	},
	{
		key: 'Date de naissance',
		value: '24/09/1970',
		icon: 'calendarIcon',
		chip: true,
		options: itemOptions,
	},
]
</script>

<template>
	<DataList :items="items" />

	<DataList
		:items="items"
		row
	/>

	<DataList
		:items="items"
		loading
	/>

	<DataList
		:items="items"
		loading
		row
	/>

	<DataList
		:items="items"
		heading-loading
		loading
	/>

	<DataList
		:items="items"
		:items-number-loading="4"
		loading
	/>

	<DataList
		:items="items"
		list-title="Exemple"
	/>

	<DataList
		:items="itemsWithIcons"
		:icons="icons"
	/>

	<DataList
		:items="itemsWithActions"
		@click:item-action="updateBirthdate"
	/>

	<DataList :items="itemsWithChips" />

	<DataList
		:items="itemsWithHtmlValues"
		item-width="auto"
		render-html-value
	/>

	<DataList
		:items="itemsWithOptions"
		:icons="icons"
	/>

	<DataList :items="items">
		<template #title>
			<h3 class="text-subtitle-1 font-weight-bold mb-3">
				Liste de données

				<VTooltip bottom>
					<template #activator="{ props }">
						<VIcon v-bind="props">
							{{ mdiInformationOutline }}
						</VIcon>
					</template>

					<span>Cette liste contient des données concernant le patient.</span>
				</VTooltip>
			</h3>
		</template>
	</DataList>
</template>

<style lang="scss" scoped>
.vd-data-list + .vd-data-list {
	margin-top: 60px;
}
</style>
