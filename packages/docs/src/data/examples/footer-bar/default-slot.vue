<template>
	<FooterBar v-bind="docProps">
		<p class="text--secondary my-3">
			Contenu supplémentaire.
		</p>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarDefaultSlot extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};
	}
</script>
