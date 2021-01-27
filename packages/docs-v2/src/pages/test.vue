<template>
	<VApp>
		<VMain>
			<ContentExplorer
				:items="items"
			/>
		</VMain>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { TreeviewItem } from '../components/content-explorer/types';

	import { mdiLanguageMarkdown } from '@mdi/js';

	@Component
	export default class TestDivider extends Vue {
		fileMarkdown = mdiLanguageMarkdown;

		items: TreeviewItem[] = [
			{
				label: 'démarrer',
				path: 'introduction'
			},
			{
				label: 'content',
				path: 'contribuer',
				children: [
					{
						label: 'installation',
						path: 'installation',
						icon: this.fileMarkdown
					}
				]
			}
		];
	}
</script>