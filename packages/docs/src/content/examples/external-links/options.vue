<template>
	<VCard
		class="mx-auto overflow-hidden"
		height="200"
	>
		<ExternalLinks
			:items="links"
			position="top left"
			:vuetify-options="vuetifyOptions"
		/>
	</VCard>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { ExternalLink } from '../../../../../vue-dot/src/elements/ExternalLinks/types';

@Component
export default class ExternalLinksOptions extends Vue {
	vuetifyOptions = {
		btn: {
			tile: true,
			minHeight: "48px",
			width: "328px",
			color: "red",
			class: "d-flex px-3"
		}
	};

	links: ExternalLink[] = [
		{
			href: "https://www.ameli.fr/professionnel-de-la-lpp",
			text: "Vers ameli pro"
		},
		{
			href: "https://www.impots.gouv.fr/portail/",
			text: "Impots GOUV"
		},
		{
			href: "https://github.com/assurance-maladie-digital",
			text: "Design System"
		},
		{
			href: "https://www.lassuranceretraite.fr/portail-info/home.html",
			text: "Assurance retraite"
		},
		{
			href: "https://www.lassuranceretraite.fr/portail-info/home.html",
			text: "Assurance maladie"
		},
		{
			href: "https://www.lassuranceretraite.fr/portail-info/home.html",
			text: "Assurance"
		}
	];
}
</script>
