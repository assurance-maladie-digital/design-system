<template>
	<ContextualMenu
		v-model="current"
		:items="items"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { MenuItem } from '@cnamts/vue-dot/src/patterns/ContextualMenu/types';

	@Component
	export default class ContextualMenuUsage extends Vue {
		current: string | null = null;

		items: MenuItem[] = [
			{
				text: 'Titre 1',
				hash: '#doc-example-1'
			},
			{
				text: 'Titre 2',
				hash: '#doc-example-2'
			},
			{
				text: 'Titre 3',
				hash: '#doc-example-3'
			}
		];
	}
</script>
