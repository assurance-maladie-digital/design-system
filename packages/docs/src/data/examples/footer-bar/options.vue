<template>
	<FooterBar
		v-bind="docProps"
		:vuetify-options="vuetifyOptions"
	>
		<p class="text--secondary my-3">
			Contenu supplémentaire.
		</p>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component
	export default class FooterBarOptions extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		vuetifyOptions = {
			footer: {
				color: tokens.colors.amBlue.lighten97
			},
			goTopBtn: {
				class: 'd-none'
			}
		};
	}
</script>

<style lang="scss" scoped>
	.vd-footer-bar :deep(.vd-social-media-links) {
		margin-right: 0 !important;
	}
</style>
