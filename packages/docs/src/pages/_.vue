<template>
	<VApp>
		<DocHeader />

		<VMain>
			<PageContainer
				class="h-100"
				spacing="pa-5 pa-sm-8 pa-md-12 pa-lg-16"
				size="m"
			>
				<article class="flex-grow-1 pb-8 pb-md-16">
					<div
						v-if="document.title && document.parsedDescription"
						class="doc-heading mb-4 mb-md-8"
					>
						<h1
							v-if="document.title && !document.hideTitle"
							v-text="document.title"
							class="text-h4 text-sm-h3 font-weight-bold mb-4"
						/>

						<div
							v-if="document.parsedDescription"
							v-html="document.parsedDescription"
							class="text-h6"
						/>
					</div>

					<VDivider
						v-if="document.divider"
						class="my-6"
					/>

					<NuxtContent :document="document" />
				</article>

				<DocPrevNext
					:prev="prev"
					:next="next"
					class="mb-6"
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

	import { NuxtError } from '@nuxt/types';

	import {
		Content,
		ContentDocument,
		DocumentBody,
		AsyncDataParams,
		PageData
	} from '../types/content';

	import { AsyncData, Head } from '../decorators';
	import { getPageMeta } from '../functions/getPageMeta';
	import { getSurroundDrawerItems } from '../functions/getSurroundDrawerItems';
	import { slugifyAnchors } from '../functions/slugifyAnchors';

	import DocHeader from '../components/DocHeader.vue';
	import DocPageInfo from '../components/page/DocPageInfo.vue';
	import DocPrevNext from '../components/page/DocPrevNext.vue';

	@Component({
		components: {
			DocHeader,
			DocPageInfo,
			DocPrevNext
		}
	})
	export default class Slug extends Vue {
		document?: ContentDocument;

		@AsyncData
		async asyncData({ $content, params, error }: AsyncDataParams): Promise<PageData | NuxtError> {
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

<style lang="scss" scoped>
	.vd-page-container > :deep(.v-sheet) {
		display: flex;
		flex-direction: column;
	}

	.doc-heading :deep(p) {
		margin-bottom: 0;
	}
</style>
