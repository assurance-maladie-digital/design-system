<template>
	<VLayout>
		<VNavigationDrawer app>
			<VTreeview
				v-model="tree"
				:items="items"
				activatable
				item-key="label"
				return-object
				item-text="label"
				@update:active="treeviewUpdated"
			>
				<template #prepend="{ item, open }">
					<v-icon v-if="!item.icon">
						{{ open ? folderOpen : folder }}
					</v-icon>
					<v-icon v-else>
						{{ item.icon }}
					</v-icon>
				</template>
			</VTreeview>
		</VNavigationDrawer>
		<VCol>
			<NuxtContent
				v-if="document"
				:document="document"
			/>
		</VCol>
	</VLayout>
</template>

<script lang="ts">
	import { mdiFolder, mdiFolderOpen } from '@mdi/js';
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { TreeviewItem } from './types';

	import { IContentDocument } from '@nuxt/content/types/content';

	const basePath = '/explorer/'

	type Content = IContentDocument[];

	const Props = Vue.extend({
		props: {
			items: {
				type: Array as PropType<TreeviewItem[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class ContentExplorer extends MixinsDeclaration {
		folderOpen = mdiFolderOpen;

		folder = mdiFolder;

		drawer = false;

		document: IContentDocument | null = null;

		tree = [];

		treeviewUpdated(activeItems: TreeviewItem[]): void {
			const activeItem = activeItems[0];

			if(activeItem) {
				this.compileMarkdownToHtml(activeItem.path);
			}
		}

		async compileMarkdownToHtml(path: string): Promise<void> {
			const [document] = await this.$content({ deep: true }).where({ path: `${basePath}${path}` }).fetch<Content>();

			this.document = document;
		}

	}
</script>