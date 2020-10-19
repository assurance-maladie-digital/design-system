<template>
	<DataList
		:items="items"
		@click:item-action="updateBirthdate"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	@Component
	export default class DataListAction extends Vue {
		items: DataList = [
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
				action: 'Modifier'
			}
		];

		updateBirthdate(itemIndex: number): void {
			this.$set(this.items[itemIndex], 'value', '01/01/1970');
		}
	}
</script>
