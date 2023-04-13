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
	export default class ContextualMenuLevels extends Vue {
		current: string | null = null;

		items: MenuItem[] = [
			{
				text: 'Titre 1',
				hash: '#doc-example-level-1',
				level: 1
			},
			{
				text: 'Titre 2',
				hash: '#doc-example-level-2',
				level: 2
			},
			{
				text: 'Titre 3',
				hash: '#doc-example-level-3',
				level: 3
			},
			{
				text: 'Titre 4',
				hash: '#doc-example-level-4',
				level: 4
			},
			{
				text: 'Titre 5',
				hash: '#doc-example-level-5',
				level: 5
			},
			{
				text: 'Titre 6',
				hash: '#doc-example-level-6',
				level: 6
			}
		];
	}
</script>
