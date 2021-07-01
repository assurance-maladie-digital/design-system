<template>
	<VCard
		class="mx-auto overflow-hidden"
		min-height="200px"
	>
		<ExternalLinks
			:items="links"
			position="top left"
			btn-text="Afficher les liens externes"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ExternalLink } from '@cnamts/vue-dot/src/elements/ExternalLinks/types';

	@Component
	export default class ExternalLinksBtnText extends Vue {
		links: ExternalLink[] = [
			{
				href: 'https://ameli.fr/',
				text: 'Ameli'
			},
			{
				href: 'https://espacepro.ameli.fr/',
				text: 'Ameli Pro'
			},
			{
				href: 'https://github.com/assurance-maladie-digital',
				text: 'Design System'
			}
		];
	}
</script>
