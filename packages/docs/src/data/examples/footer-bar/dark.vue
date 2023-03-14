<template>
	<FooterBar
		v-bind="docProps"
		dark
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
	export default class FooterBarDark extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			cookiesRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};
	}
</script>
