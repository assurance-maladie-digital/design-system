<template>
	<div class="content-explorer">
		<VTextField
			v-model="search"
			label="Rechercher un élément"
			hide-details
			clearable
			filled
			class="mb-4"
		>
			<template #prepend-inner>
				<VIcon class="mr-2">
					{{ searchIcon }}
				</VIcon>
			</template>
		</VTextField>

		<div class="content d-flex flex-wrap flex-sm-nowrap max-width-none h-100 ma-n4">
			<VTreeview
				:open.sync="tree"
				:active.sync="activeItem"
				:items="items"
				:search="search"
				dense
				hoverable
				activatable
				return-object
				item-key="name"
				class="ma-4"
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

			<VDivider
				:vertical="!$vuetify.breakpoint.xs"
				class="ma-4 ma-sm-0"
			/>

			<div class="content flex-grow-1 ma-4">
				<VProgressLinear
					v-show="state === 'pending'"
					indeterminate
					absolute
				/>

				<NuxtContent
					v-if="document"
					:key="document.path"
					:document="document"
				/>
			</div>
		</div>
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
		mdiSass,
		mdiLanguageJavascript,
		mdiLanguageTypescript,
		mdiVuejs,
		mdiCodeJson,
		mdiFileImage,
		mdiSvg,
		mdiLanguageMarkdown,
		mdiFileDocumentOutline,
		mdiMagnify
	} from '@mdi/js';

	import { STATE_ENUM } from '@cnamts/vue-dot/src/constants/enums/StateEnum';
	import { IContentDocument } from '@nuxt/content/types/content';
	import { TreeviewItem } from './types';

	import { Fetch } from '../../decorators';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

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

	@Component<ContentExplorer>({
		watch: {
			$route(): void {
				if (!this.treeViewClicked) {
					this.setContent();
				}
			}
		}
	})
	export default class ContentExplorer extends MixinsDeclaration {
		searchIcon = mdiMagnify;
		openFolderIcon = mdiFolderOpen;
		folderIcon = mdiFolder;

		files = {
			html: mdiLanguageHtml5,
			css: mdiLanguageCss3,
			scss: mdiSass,
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

		document: IContentDocument | null = null;

		tree: IndexedObject[] = [];
		activeItem: IndexedObject[] = [];
		drawer = false;
		search = '';
		state: STATE_ENUM = STATE_ENUM.idle;
		treeViewClicked = false;

		@Fetch
		async fetch() {
			this.getContent('initial');
		}

		mounted() {
			this.setContent();
		}

		setContent(): void {
			const path = this.$nuxt.$route.hash.replace('#', '');

			if (!path) {
				this.getContent('initial');
				return;
			}

			this.getContent(path);
			this.updateTree(path);
		}

		updateTree(path: string): void {
			path.split('/').forEach((page) => {
				this.tree.push({
					name: page
				});
			});

			const splitted = path.split('/');
			const last = splitted[splitted.length - 1];

			const rawName = last === 'index' ? splitted[splitted.length - 2] : last;
			const name = rawName.replace('_', '.');

			this.activeItem = [
				{
					path,
					name
				}
			];
		}

		setHash(hash: string): void {
			// Set hash using native API to avoid scroll jump
			window.location.hash = hash;
		}

		removeHash(): void {
			history.pushState('', document.title, window.location.pathname);
		}

		treeviewUpdated([activeItem]: TreeviewItem[]): void {
			this.treeViewClicked = true;

			if (!activeItem) {
				this.removeHash();
				this.getContent('initial');
				return;
			}

			if (!activeItem.path) {
				this.removeHash();
				this.getContent('no-content');
				return;
			}

			this.setHash(activeItem.path);
			this.getContent(activeItem.path);
		}

		async getContent(path: string): Promise<void> {
			const loading = setTimeout(() => this.state = STATE_ENUM.pending, 500);

			const [document] = await this.$content({ deep: true })
				.where({ path: basePath + path })
				.fetch<Content>();

			this.state = STATE_ENUM.resolved;
			this.document = document;
			clearTimeout(loading);
			this.treeViewClicked = false;
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;
	}

	.v-treeview {
		width: 100%;
		overflow-x: auto;

		::v-deep {
			.v-treeview-node {
				cursor: pointer;
			}

			.v-treeview-node__label {
				font-size: .9rem;
			}
		}
	}

	@media (min-width: 600px) {
		.v-treeview {
		flex: 0 0 256px;
		}
	}
</style>
