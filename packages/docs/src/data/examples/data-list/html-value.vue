<template>
	<DataList
		:items="items"
		item-width="auto"
		render-html-value
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	@Component
	export default class DataListEx extends Vue {
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
				key: 'Adresse',
				value: '50 Avenue du Professeur André Lemierre<br>75020 Paris'
			}
		];
	}
</script>
