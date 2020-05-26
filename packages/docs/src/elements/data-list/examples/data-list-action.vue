<template>
	<DataList
		:items="items"
		@click:item-action="updateBirthdate"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DataLisAction extends Vue {
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
				action: 'Modifier'
			}
		];

		updateBirthdate(itemIndex: number) {
			this.$set(this.items[itemIndex], 'value', '01/01/1970');
		}
	}
</script>
