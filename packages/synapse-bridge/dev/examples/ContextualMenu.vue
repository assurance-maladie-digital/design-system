<template>
	<PageContainer>
		<ContextualMenu
			v-model="current"
			:items="items"
		/>
		<br/><br/>
		<ContextualMenu
			v-model="current"
			:items="items2"
		/>
	</PageContainer>
</template>

<script lang="ts">
import ContextualMenu from "../src/patterns/ContextualMenu";
import PageContainer from "../src/elements/PageContainer";
import { defineComponent } from "vue";

import { MenuItem } from '../src/patterns/ContextualMenu/types';

export default defineComponent({
	components: {
		ContextualMenu,
		PageContainer,
	},
	data() {
		return {
			current: null,

			items: [
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
			] as MenuItem[],

			items2: [
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
			] as MenuItem[]
		};
	},
});
</script>
