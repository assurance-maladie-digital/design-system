<template>
	<VApp>
		<DocHeader @drawer-action="drawer = !drawer" />

		<DocDrawer v-model="drawer" />

		<VMain>
			<VContainer class="h-100 py-4 py-sm-8">
				<VSheet
					max-width="868px"
					class="mx-auto h-100 d-flex flex-column"
				>
					<article class="flex-grow-1">
						<h1
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

					<DocPageInfo
						:document="document"
						class="mb-6"
					/>
				</VSheet>
			</VContainer>
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
		AsyncDataParams,
		PageData
	} from '../types/content';

	import { AsyncData, Middleware, Head } from '../decorators';
	import { getPageMeta } from '../functions/getPageMeta';
	import { getSurroundDrawerItems } from '../functions/getSurroundDrawerItems';

	import DocDrawer from '../components/drawer/DocDrawer.vue';
	import DocPageInfo from '../components/page/DocPageInfo.vue';
	import DocPrevNext from '../components/page/DocPrevNext.vue';

	@Component({
		components: {
			DocDrawer,
			DocPageInfo,
			DocPrevNext
		}
	})
	export default class Slug extends Vue {
		document?: ContentDocument;

		drawer = null;

		@Middleware
		middleware({ app, params, redirect }: Context): void {
			if (params.pathMatch === 'index') {
				redirect(app.localePath('/'));
			}
		}

		@AsyncData
		async asyncData({ $content, params, error }: AsyncDataParams): Promise<void | PageData> {
			const path =`/${params.pathMatch || 'index'}`;
			const [document] = await $content({ deep: true }).where({ path }).fetch<Content>();

			if (!document) {
				return error({
					statusCode: 404,
					message: 'Page non trouvée'
				});
			}

			const { prev, next } = await getSurroundDrawerItems($content, path);

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

			return getPageMeta(this.document.title);
		}
	};
</script>
