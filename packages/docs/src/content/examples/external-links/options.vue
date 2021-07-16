<template>
	<VCard
		class="mx-auto overflow-hidden"
		min-height="200px"
	>
		<ExternalLinks
			:items="links"
			:vuetify-options="vuetifyOptions"
			position="top left"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ExternalLink } from '@cnamts/vue-dot/src/elements/ExternalLinks/types';

	@Component
	export default class ExternalLinksOptions extends Vue {
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

		vuetifyOptions = {
			btn: {
				color: 'primary'
			},
			list: {
				dense: true
			}
		};
	}
</script>
