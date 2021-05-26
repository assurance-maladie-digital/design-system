<template>
	<VApp>
		<DocHeader @drawer-action="drawer = !drawer" />

		<DocDrawer v-model="drawer" />

		<VMain>
			<div class="h-100 d-flex align-center justify-center flex-column text-center pa-4 ma-auto">
				<span class="font-weight-bold primary--text vd-code">
					{{ code }}
				</span>

				<h2 class="text-h6 font-weight-bold mb-2">
					{{ error.message }}
				</h2>

				<p>{{ message }}</p>

				<VBtn
					to="/"
					exact
					color="primary"
					class="mt-6 mb-12"
				>
					Retour à l'accueil
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
			DocDrawer
		}
	})
	export default class Error extends MixinsDeclaration {
		drawer = null;
		message = 'Il semblerait qu’il y ait eu une erreur !';

		get code(): string | undefined {
			return this.error.statusCode?.toString();
		}

		@Head
		head(): MetaInfo {
			return getPageMeta(this.error.message, this.message);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-code {
		font-size: 6rem;
		line-height: 6rem;
		font-family: serif;
	}
</style>
