<script setup lang="ts">
import ContextualMenu from '@/patterns/ContextualMenu'
import { MenuItem } from '@/patterns/ContextualMenu/types'
import { ref } from 'vue';

const current = ref()

const items: MenuItem[] = [
	{
		text: 'Titre 1',
		hash: '#doc-example-1',
	},
	{
		text: 'Titre 2',
		hash: '#doc-example-2',
	},
	{
		text: 'Titre 3',
		hash: '#doc-example-3',
	},
]

const itemsWithLevels: MenuItem[] = [
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
]
</script>

<template>
	<div class="pa-5">
		<ContextualMenu
			v-model="current"
			:items="items"
			@update:value="current = $event"
		/>

		<ContextualMenu
			v-model="current"
			:items="itemsWithLevels"
		/>
	</div>
</template>

<style lang="scss" scoped>
.vd-contextual-menu + .vd-contextual-menu {
	margin-top: 60px;
}
</style>
