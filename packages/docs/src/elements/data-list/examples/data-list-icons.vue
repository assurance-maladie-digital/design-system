<template>
	<DataList
		:items="items"
		:icons="icons"
	/>
</template>

<script>
	import { mdiCalendar, mdiAccount } from '@mdi/js';

	export default {
		data() {
			return {
				items: [
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
				],
				icons: {
					calendarIcon: mdiCalendar,
					accountIcon: mdiAccount
				}
			};
		}
	};
</script>
