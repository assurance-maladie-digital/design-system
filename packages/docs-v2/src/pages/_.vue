<template>
	<VApp>
		<DocHeader />

		<VMain>
			<VContainer class="h-100 py-4">
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
							v-if="document.description"
							v-html="document.description"
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

	import { AsyncData, Middleware } from '../decorators';

	@Component
	export default class Slug extends Vue {
		@Middleware
		middleware({ app, params, redirect }: any): void { // TODO
			if (params.pathMatch === 'index') {
				redirect(app.localePath('/'));
			}
		}

		@AsyncData
		async asyncData({ $content, params, error }: any): Promise<any> { // TODO
			const path =`/${params.pathMatch || 'index'}`;
			const [document] = await $content({ deep: true }).where({ path }).fetch();

			if (!document) {
				return error({ statusCode: 404, message: 'Page non trouvée' })
			}

			const [prev, next] = await $content({ deep: true })
				.only(['title', 'slug', 'path'])
				.where({
					position: {
						$gt: -1
					}
				})
				.sortBy('position', 'asc')
				.surround(document.slug, {
					before: 1,
					after: 1
				})
				.fetch();

			return {
				document,
				prev,
				next
			};
		}
	};
</script>

<style lang="scss" scoped>
	@media only screen and (max-width: 512px) {
		.v-main {
			padding: 97px 0px 0px !important;
		}
	}
</style>
