<template>
	<VCard
		class="mx-auto overflow-hidden"
		min-height="274px"
	>
		<VAppBar>
			<VToolbarTitle class="grey--text text--darken-3">
				ExternalLinks
			</VToolbarTitle>
		</VAppBar>

		<ExternalLinks
			:items="links"
			nudge-top="80px"
			position="top left"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ExternalLink } from '@cnamts/vue-dot/src/elements/ExternalLinks/types';

	@Component
	export default class ExternalLinksNudgeTop extends Vue {
		links: ExternalLink[] = [
			{
				href: 'https://ameli.fr/',
				text: 'Ameli'
			},
			{
				href: 'https://espacepro.ameli.fr/',
				text: 'Ameli Pro'
			}
		];
	}
</script>
