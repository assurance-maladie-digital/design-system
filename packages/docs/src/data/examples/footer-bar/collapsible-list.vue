<template>
	<FooterBar v-bind="docProps">
		<CollapsibleList :list-items="listItems" />
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarCollapseList extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		listItems = {
			title: 'Santé',
			list: [
				{
					name: 'Mon espace santé',
					route: 'https://www.ameli.fr/rhone/assure/sante/mon-espace-sante'
				},
				{
					name: 'Accomplir les bons gestes',
					route: 'https://www.ameli.fr/rhone/assure/sante/bons-gestes'
				},
				{
					name: 'Réagir en cas d\'urgence',
					route: 'https://www.ameli.fr/rhone/assure/sante/urgence'
				},
				{
					name: 'Télésanté',
					route: 'https://www.ameli.fr/rhone/assure/sante/telesante'
				}
			]
		};
	}
</script>
