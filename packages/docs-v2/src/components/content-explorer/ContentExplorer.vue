<template>
	<div class="content-explorer d-flex h-100 w-100">
		<VTreeview
			v-model="tree"
			:items="items"
			activatable
			return-object
			item-key="name"
			@update:active="treeviewUpdated"
		>
			<template #prepend="{ item, open }">
				<VIcon v-if="!item.file">
					{{ open ? openFolderIcon : folderIcon }}
				</VIcon>

				<VIcon v-else>
					{{ files[item.file] }}
				</VIcon>
			</template>
		</VTreeview>

		<VDivider vertical />

		<NuxtContent
			v-if="document"
			:document="document"
			class="flex-grow-1 ml-4"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import {
		mdiFolder,
		mdiFolderOpen,
		mdiLanguageHtml5,
		mdiLanguageCss3,
		mdiLanguageJavascript,
		mdiLanguageTypescript,
		mdiVuejs,
		mdiCodeJson,
		mdiFileImage,
		mdiSvg,
		mdiLanguageMarkdown,
		mdiFileDocumentOutline
	} from '@mdi/js';

	import { IContentDocument } from '@nuxt/content/types/content';
	import { TreeviewItem } from './types';

	const basePath = '/explorer/';

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
		files = {
			html: mdiLanguageHtml5,
			css: mdiLanguageCss3,
			js: mdiLanguageJavascript,
			json: mdiCodeJson,
			ts: mdiLanguageTypescript,
			vue: mdiVuejs,
			png: mdiFileImage,
			ico: mdiFileImage,
			svg: mdiSvg,
			md: mdiLanguageMarkdown,
			txt: mdiFileDocumentOutline
		};

		openFolderIcon = mdiFolderOpen;
		folderIcon = mdiFolder;

		document: IContentDocument | null = null;

		tree = [];
		drawer = false;

		treeviewUpdated(activeItems: TreeviewItem[]): void {
			const activeItem = activeItems[0];

			if (activeItem) {
				this.getContent(activeItem.path);
			}
		}

		async getContent(path: string): Promise<void> {
			const [document] = await this.$content({ deep: true })
				.where({ path: `${basePath}${path}` })
				.fetch<Content>();

			this.document = document;
		}
	}
</script>

<style lang="scss" scoped>
	.v-treeview {
		flex: 0 0 250px;
		overflow-x: auto;

		::v-deep {
			.v-treeview-node {
				cursor: pointer;
			}

			.v-treeview-node__root {
				min-height: 42px;
			}

			.v-treeview-node__label {
				font-size: .9rem;
			}
		}
	}

	.nuxt-content-container {
		min-width: 0;
	}
</style>
