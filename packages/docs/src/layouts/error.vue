<template>
	<VApp>
		<DocHeader :drawer.sync="drawer" />

		<VMain>
			<div class="h-100 d-flex align-center justify-center flex-column text-center ma-auto pa-4">
				<span
					v-if="code"
					class="vd-error-code font-weight-bold primary--text"
				>
					{{ code }}
				</span>

				<h2
					v-if="title"
					class="text-h6 font-weight-bold mb-2"
				>
					{{ title }}
				</h2>

				<p>{{ message }}</p>

				<VBtn
					to="/"
					exact
					color="primary"
					class="mt-6 mb-12"
				>
					Retour à l’accueil
				</VBtn>
			</div>
		</VMain>
	</VApp>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { MetaInfo } from 'vue-meta';

	import { Head } from '../decorators';
	import { getPageMeta } from '../functions/getPageMeta';
	import { NuxtError } from '@nuxt/types';

	import DocHeader from '../components/DocHeader.vue';
	import DocDrawer from '../components/drawer/DocDrawer.vue';

	const Props = Vue.extend({
		props: {
			error: {
				type: Object as PropType<NuxtError>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			DocHeader,
			DocDrawer
		}
	})
	export default class Error extends MixinsDeclaration {
		drawer: boolean | null = null;
		message = 'Il semblerait qu’il y ait eu une erreur !';

		get code(): string | undefined {
			return this.error.statusCode?.toString();
		}

		get title(): string | undefined {
			return this.error.message;
		}

		@Head
		head(): MetaInfo {
			return getPageMeta(this.error.message, this.message);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-error-code {
		font-size: 6rem;
		line-height: 6rem;
		font-family: serif;
	}
</style>
