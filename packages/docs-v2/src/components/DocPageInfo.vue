<template>
	<div class="doc-page-info text--secondary d-flex align-center justify-space-between text-body-2">
		<DocGithubLink
			:path="document.path"
			:extension="document.extension"
		/>

		<VSpacer />

		<p
			v-if="formattedUpdatedAt"
			class="mb-0"
		>
			Dernière modification le

			<span
				v-text="formattedUpdatedAt"
				class="font-weight-medium"
			/>
		</p>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import dayjs from 'dayjs';

	import { IContentDocument as Document } from '@nuxt/content/types/content';

	const Props = Vue.extend({
		props: {
			document: {
				type: Object as PropType<Document>,
				required: true
			}
		}
	});

	const MixinsDeclation = mixins(Props);

	@Component
	export default class DocPageInfo extends MixinsDeclation {
		get formattedUpdatedAt(): string | null {
			if (!this.document.updatedAt) {
				return null;
			}

			return dayjs(this.document.updatedAt).format('DD/MM/YYYY à H[h]m');
		}
	}
</script>
