<template>
	<FooterBar v-bind="docProps">
		<CollapsibleList :list-items="listItems" />
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import CollapsibleList from '@cnamts/vue-dot/src/patterns/FooterBar/CollapsibleList';

	@Component({
		components: {
			CollapsibleList
		}
	})
	export default class FooterBarCollapsibleList extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			cookiesRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		listItems = {
			title: 'Santé',
			content: [
				{
					name: 'Mon espace santé',
					url: 'https://www.ameli.fr/assure/sante/mon-espace-sante'
				},
				{
					name: 'Accomplir les bons gestes',
					url: 'https://www.ameli.fr/assure/sante/bons-gestes'
				},
				{
					name: 'Réagir en cas d’urgence',
					url: 'https://www.ameli.fr/assure/sante/urgence'
				},
				{
					name: 'Télésanté',
					url: 'https://www.ameli.fr/assure/sante/telesante'
				}
			]
		};
	}
</script>
