<template>
	<VFooter
		min-height="64"
		width="100%"
		elevation="1"
		color="#fafafa"
		class="vd-footer-wrapper"
	>
		<VRow
			class="ma-0"
			justify="center"
		>
			<slot />
		</VRow>
	</VFooter>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import consola from 'consola';

	/** @deprecated Use FooterBar instead */
	@Component
	export default class FooterWrapper extends Vue {
		mounted() {
			// eslint-disable-next-line no-console
			consola.warn('FooterWrapper is deprecated since v2.2.0, use FooterBar instead.');
		}
	}
</script>
