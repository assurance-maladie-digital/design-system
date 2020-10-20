<template>
	<DataList :items="items" />
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
				key: 'Date de naissance',
				value: '24/09/1970'
			},
			{
				key: 'Nombre d\'enfants',
				value: 2
			}
		];
	}
</script>
