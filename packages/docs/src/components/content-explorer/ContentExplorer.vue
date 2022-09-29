<template>
	<div class="content-explorer">
		<VTextField
			v-model="search"
			label="Rechercher un élément"
			hide-details
			clearable
			filled
			background-color="am-blue-lighten-97"
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
					v-show="state === StateEnum.PENDING"
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

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';
	import { TreeviewItem } from './types';

	import { Fetch } from '../../decorators';
	import { Content, ContentDocument } from '../../types/content';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	const HASH_DELIMITER = '#';
	const PATH_DELIMITER = '/';

	const DOT_FILE_CHAR = '.';
	const ESCAPED_DOT_FILE_CHAR = '_';

	const BASE_PATH = '/composants-techniques/starter-kit/explorer/';

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
		StateEnum = StateEnum;

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

		document: ContentDocument | null = null;

		tree: IndexedObject[] = [];
		activeItem: IndexedObject[] = [];
		drawer = false;
		search: string | null = null;
		state: StateEnum = StateEnum.IDLE;
		treeViewClicked = false;

		@Fetch
		async fetch() {
			this.getContent('initial');
		}

		mounted() {
			this.setContent();
		}

		setContent(): void {
			const path = this.$nuxt.$route.hash.replace(HASH_DELIMITER, '');

			if (!path) {
				this.getContent('initial');
				return;
			}

			this.getContent(path);
			this.updateTree(path);
		}

		updateTree(path: string): void {
			path.split(PATH_DELIMITER).forEach((page) => {
				this.tree.push({
					name: page
				});
			});

			const splitted = path.split(PATH_DELIMITER);
			const last = splitted[splitted.length - 1];

			const rawName = last === 'index' ? splitted[splitted.length - 2] : last;
			const name = rawName.replace(ESCAPED_DOT_FILE_CHAR, DOT_FILE_CHAR);

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
			const loading = setTimeout(() => this.state = StateEnum.PENDING, 500);

			const [document] = await this.$content({ deep: true })
				.where({ path: BASE_PATH + path })
				.fetch<Content>();

			this.state = StateEnum.RESOLVED;
			this.document = document;
			clearTimeout(loading);
			this.treeViewClicked = false;
		}
	}
</script>

<style lang="scss" scoped>
	$treeview-width: 256px;

	.content {
		position: relative;
	}

	.v-treeview {
		width: 100%;
		overflow-x: auto;

		:deep() {
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
			flex: 0 0 $treeview-width;
		}
	}
</style>
