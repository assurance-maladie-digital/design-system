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
							class="mt-6 mb-10"
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

<script> // TODO
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { AsyncData } from '../decorators';

	@Component
	export default class Slug extends Vue {
		@AsyncData
		async asyncData({ $content, params, error }) {
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
