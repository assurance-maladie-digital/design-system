<template>
	<DataList
		:items="items"
		:icons="icons"
	/>
</template>

<script>
	import { mdiCalendar } from '@mdi/js';

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
						value: 'Paul'
					},
					{
						key: 'Date de naissance',
						value: '24/09/1970',
						icon: 'calendarIcon',
						chip: true,
						options: {
							chip: {
								color: 'success'
							},
							icon: {
								color: 'accent'
							},
							layout: {
								class: 'align-center'
							}
						}
					}
				],
				icons: {
					calendarIcon: mdiCalendar
				}
			};
		}
	};
</script>
