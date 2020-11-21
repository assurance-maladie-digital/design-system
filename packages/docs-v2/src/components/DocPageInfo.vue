<template>
	<div class="doc-page-info blue-grey--text text--darken-1 d-flex align-center font-weight-medium justify-space-between">
		<!-- <span class="mb-2 mb-md-0">
			Edit this page on
			<a
				href="https://github.com/vuetifyjs/vuetify/tree/master/packages/docs/src/pages/en/components/dividers.md"
				target="_blank"
				rel="noopener"
				class="app-link text-decoration-none primary--text font-weight-medium d-inline-block"
			>
				GitHub

				<span
					aria-hidden="true"
					class="v-icon notranslate theme--light primary--text ml-1"
					style="font-size: 0.875rem; height: 0.875rem; width: 0.875rem"
				>
					Icon
				</span>
			</a>
		</span> -->

		<VSpacer />

		<p
			v-if="updatedAt"
			class="mb-0 text-body-2"
		>
			<span class="font-weight-medium">
				Dernière modification le
			</span>

			<span
				v-text="formattedUpdatedAt"
				class="text--secondary"
			/>
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import dayjs from 'dayjs';

	const Props = Vue.extend({
		props: {
			updatedAt: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclation = mixins(Props);

	@Component
	export default class DocPageInfo extends MixinsDeclation {
		get formattedUpdatedAt(): string | null {
			if (!this.updatedAt) {
				return null;
			}

			return dayjs(this.updatedAt).format('DD/MM/YYYY à H[h]m');
		}
	}
</script>
