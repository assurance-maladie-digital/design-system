<template>
	<VApp>
		<DocHeader :drawer.sync="drawer" />

		<DocDrawer v-model="drawer" />

		<VMain>
			<PageContainer
				class="h-100"
				spacing="pa-6 pa-sm-14"
				size="m"
			>
				<article class="flex-grow-1">
					<h1
						v-if="document.title && !document.hideTitle"
						v-text="document.title"
						class="text-h4 text-sm-h4 font-weight-bold mb-4"
					/>

					<div
						v-if="document.parsedDescription"
						v-html="document.parsedDescription"
						class="description text-h6"
					/>

					<VDivider
						v-if="document.divider"
						class="mt-6 mb-6"
					/>

					<NuxtContent :document="document" />
				</article>

				<DocPrevNext
					:prev="prev"
					:next="next"
					class="mt-8 mb-6"
				/>

				<DocPageInfo :document="document" />
			</PageContainer>
		</VMain>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { MetaInfo } from 'vue-meta';

	import {
		Context,
		Content,
		ContentDocument,
		DocumentBody,
		AsyncDataParams,
		PageData
	} from '../types/content';

	import { AsyncData, Middleware, Head } from '../decorators';
	import { getPageMeta } from '../functions/getPageMeta';
	import { getSurroundDrawerItems } from '../functions/getSurroundDrawerItems';
	import { slugifyAnchors } from '../functions/slugifyAnchors';

	import DocHeader from '../components/DocHeader.vue';
	import DocDrawer from '../components/drawer/DocDrawer.vue';
	import DocPageInfo from '../components/page/DocPageInfo.vue';
	import DocPrevNext from '../components/page/DocPrevNext.vue';

	@Component({
		components: {
			DocHeader,
			DocDrawer,
			DocPageInfo,
			DocPrevNext
		}
	})
	export default class Slug extends Vue {
		document?: ContentDocument;

		drawer: boolean | null = null;

		@Middleware
		middleware({ app, params, redirect }: Context): void {
			if (params.pathMatch === 'index') {
				redirect(app.localePath('/'));
			}
		}

		@AsyncData
		async asyncData({ $content, params, error }: AsyncDataParams): Promise<PageData | void> {
			const path =`/${params.pathMatch || 'index'}`;
			const [document] = await $content({ deep: true })
				.where({ path })
				.fetch<Content>();

			if (!document) {
				return error({
					statusCode: 404,
					message: 'Page non trouvée'
				});
			}

			const { prev, next } = await getSurroundDrawerItems($content, path);

			const documentBody = document.body as DocumentBody;

			slugifyAnchors(documentBody?.children);
			slugifyAnchors(document.toc);

			return {
				document,
				prev,
				next
			};
		}

		@Head
		head(): MetaInfo {
			if (!this.document) {
				return {};
			}

			return getPageMeta(this.document.title || this.document.metaTitle);
		}
	}
</script>
