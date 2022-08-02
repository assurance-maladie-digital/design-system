<template>
	<div class="docsearch" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import '@docsearch/css';
	import docsearch from '@docsearch/js';

	import { REPO } from '../constants';

	const translations = {
		button: {
			buttonText: 'Rechercher',
			buttonAriaLabel: 'Rechercher'
		},
		modal: {
			searchBox: {
				resetButtonTitle: 'Effacer la requête',
				resetButtonAriaLabel: 'Effacer la requête',
				cancelButtonText: 'Annuler',
				cancelButtonAriaLabel: 'Annuler'
			},
			startScreen: {
				recentSearchesTitle: 'Récentes',
				noRecentSearchesText: 'Aucune recherche récente',
				saveRecentSearchButtonTitle: 'Sauvegarder cette recherche',
				removeRecentSearchButtonTitle: 'Supprimer cette recherche de l’historique',
				favoriteSearchesTitle: 'Favoris',
				removeFavoriteSearchButtonTitle: 'Supprimer cette recherche des favoris'
			},
			errorScreen: {
				titleText: 'Impossible de récupérer les résultats',
				helpText: 'Veuillez vérifier votre connexion internet.'
			},
			footer: {
				selectText: 'pour sélectionner',
				selectKeyAriaLabel: 'Touche Entrée',
				navigateText: 'pour naviguer',
				navigateUpKeyAriaLabel: 'Flèche du haut',
				navigateDownKeyAriaLabel: 'Flèche du bas',
				closeText: 'pour fermer',
				closeKeyAriaLabel: 'Touche Échap.',
				searchByText: 'Par'
			},
			noResultsScreen: {
				noResultsText: 'Aucun résultat pour',
				suggestedQueryText: 'Essayez de rechercher',
				reportMissingResultsText: 'Vous pensez que cette requête devrait renvoyer des résultats ?',
				reportMissingResultsLinkText: 'Faites le nous savoir.'
			}
		}
	};

	@Component
	export default class DocSearch extends Vue {
		mounted() {
			docsearch({
				container: '.docsearch',
				appId: process.env.SEARCH_APP_ID as string,
				indexName: process.env.SEARCH_INDEX_NAME as string,
				apiKey: process.env.SEARCH_API_KEY as string,
				getMissingResultsUrl({ query }) {
					return `https://github.com/${REPO}/issues/new?template=bug_report.md&title=${query}`;
				},
				placeholder: 'Rechercher',
				translations
			});
		}
	}
</script>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

	:root {
		--docsearch-primary-color: #{$vd-primary};
		--docsearch-muted-color: #{$vd-grey-darken-20};
	}

	.docsearch {
		.DocSearch-Button {
			margin: 0;
			transition: .15s;
			padding-right: 12px;

			@media (max-width: 750px) {
				padding-right: 8px;
			}

			@media (max-width: 600px) {
				padding: 0;
				background: transparent;
			}
		}

		.DocSearch-Button-Container {
			flex-direction: row-reverse;
		}

		.DocSearch-Button-Placeholder {
			padding: 0 12px 0 6px;
		}

		.DocSearch-Button-Keys {
			display: none;
		}

		.DocSearch-Search-Icon {
			color: $vd-grey-darken-20;

			@media (max-width: 600px) {
				width: 16px;
				height: 16px;
			}
		}
	}

	.DocSearch-Modal {
		cursor: initial;
	}

	.DocSearch-Help a {
		display: inline-block;
	}
</style>
