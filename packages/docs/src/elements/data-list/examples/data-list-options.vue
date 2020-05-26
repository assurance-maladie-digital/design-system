<template>
	<DataList
		:items="items"
		:icons="icons"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCalendar } from '@mdi/js';

	@Component
	export default class DataListSlot extends Vue {
		items = [
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
		];

		icons = {
			calendarIcon: mdiCalendar
		};
	}
</script>
