<template>
	<VApp>
		<VMain>
			<ContentExplorer
				:items="items"
				:initially-open="initiallyOpen"
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

		initiallyOpen = ['démarrer'];

		items: TreeviewItem[] = [
			{
				label: 'démarrer',
				path: '/demarrer/introduction'
			},
			{
				label: 'content',
				path: '/demarrer/contribuer',
				children: [
					{
						label: 'installation',
						path: '/demarrer/installation',
						icon: this.fileMarkdown,
						children: [
							{
								label: 'custom icon',
								path: '/composants/custom-icon',
								icon: this.fileMarkdown
							}
						]
					},
					{
						label: 'copy btn',
						path: '/composants/copy-btn',
						icon: this.fileMarkdown
					}
				]
			}
		];
	}
</script>