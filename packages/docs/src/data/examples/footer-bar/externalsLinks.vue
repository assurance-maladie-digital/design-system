<template>
	<FooterBar
		v-bind="docProps"
		sitemap-external-link="https://www.ameli.fr/assure/plan-du-site"
		cgu-external-link="https://www.ameli.fr/assure/mentions-legales-cgu"
		cookies-external-link="https://www.ameli.fr/assure/mentions-legales-cgu"
		legal-notice-external-link="https://www.ameli.fr/assure/mentions-legales-cgu"
		a11y-statement-external-link="https://www.ameli.fr/rhone/assure/accessibilite"
	>
		<p class="text--secondary my-3">
			Contenu supplémentaire.
		</p>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarExternalsLinks extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			cookiesRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};
	}
</script>
